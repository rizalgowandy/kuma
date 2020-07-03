package generator

import (
	"github.com/pkg/errors"

	mesh_core "github.com/Kong/kuma/pkg/core/resources/apis/mesh"
	"github.com/Kong/kuma/pkg/core/validators"
	model "github.com/Kong/kuma/pkg/core/xds"
	xds_context "github.com/Kong/kuma/pkg/xds/context"

	envoy_common "github.com/Kong/kuma/pkg/xds/envoy"
	envoy_clusters "github.com/Kong/kuma/pkg/xds/envoy/clusters"
	envoy_listeners "github.com/Kong/kuma/pkg/xds/envoy/listeners"
	envoy_names "github.com/Kong/kuma/pkg/xds/envoy/names"
)

// GeneratedByInbound is a marker to indicate by which ProxyGenerator resources were generated.
const GeneratedByInbound = "inbound"

type InboundProxyGenerator struct {
}

func (g InboundProxyGenerator) Generate(ctx xds_context.Context, proxy *model.Proxy) (*model.ResourceSet, error) {
	endpoints, err := proxy.Dataplane.Spec.Networking.GetInboundInterfaces()
	if err != nil {
		return nil, err
	}
	if len(endpoints) == 0 {
		return nil, nil
	}
	resources := model.NewResourceSet()
	for i, endpoint := range endpoints {
		// generate CDS resource
		localClusterName := envoy_names.GetLocalClusterName(endpoint.WorkloadPort)
		cluster, err := envoy_clusters.NewClusterBuilder().
			Configure(envoy_clusters.StaticCluster(localClusterName, "127.0.0.1", endpoint.WorkloadPort)).
			Build()
		if err != nil {
			return nil, errors.Wrapf(err, "%s: could not generate cluster %s", validators.RootedAt("dataplane").Field("networking").Field("inbound").Index(i), localClusterName)
		}
		resources.Add(&model.Resource{
			Name:        localClusterName,
			Resource:    cluster,
			GeneratedBy: GeneratedByInbound,
		})

		// generate LDS resource
		iface := proxy.Dataplane.Spec.Networking.Inbound[i]
		service := iface.GetService()
		protocol := mesh_core.ParseProtocol(iface.GetProtocol())
		inboundListenerName := envoy_names.GetInboundListenerName(endpoint.DataplaneIP, endpoint.DataplanePort)
		filterChainBuilder := func() *envoy_listeners.FilterChainBuilder {
			filterChainBuilder := envoy_listeners.NewFilterChainBuilder()
			switch protocol {
			case mesh_core.ProtocolHTTP:
				// configuration for HTTP case
				filterChainBuilder.
					Configure(envoy_listeners.HttpConnectionManager(localClusterName)).
					Configure(envoy_listeners.FaultInjection(proxy.FaultInjections[endpoint])).
					Configure(envoy_listeners.Tracing(proxy.TracingBackend)).
					Configure(envoy_listeners.HttpInboundRoute(service, envoy_common.ClusterSubset{ClusterName: localClusterName}))
			case mesh_core.ProtocolTCP:
				fallthrough
			default:
				// configuration for non-HTTP cases
				filterChainBuilder.Configure(envoy_listeners.TcpProxy(localClusterName, envoy_common.ClusterSubset{ClusterName: localClusterName}))
			}
			return filterChainBuilder.
				Configure(envoy_listeners.ServerSideMTLS(ctx, proxy.Metadata)).
				Configure(envoy_listeners.NetworkRBAC(inboundListenerName, ctx.Mesh.Resource.MTLSEnabled(), proxy.TrafficPermissions[endpoint]))
		}()
		inboundListener, err := envoy_listeners.NewListenerBuilder().
			Configure(envoy_listeners.InboundListener(inboundListenerName, endpoint.DataplaneIP, endpoint.DataplanePort)).
			Configure(envoy_listeners.FilterChain(filterChainBuilder)).
			Configure(envoy_listeners.TransparentProxying(proxy.Dataplane.Spec.Networking.GetTransparentProxying())).
			Build()
		if err != nil {
			return nil, errors.Wrapf(err, "%s: could not generate listener %s", validators.RootedAt("dataplane").Field("networking").Field("inbound").Index(i), inboundListenerName)
		}
		resources.Add(&model.Resource{
			Name:        inboundListenerName,
			Resource:    inboundListener,
			GeneratedBy: GeneratedByInbound,
		})
	}
	return resources, nil
}
