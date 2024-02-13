import{a as tt,K as A}from"./index-FZCiQto1.js";import{_ as R,a as g,o,b as y,w as a,r as K,m as s,f as t,d as G,c as p,e as l,l as J,q as n,t as i,F as m,E as $,p as D,n as et,A as at,I as nt,X as S,Y as st,Z as ot,$ as it,S as lt,a0 as rt,a1 as H,C as dt,x as ct,y as ut}from"./index-L_2d1oA-.js";import{_ as pt}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-6BqX7dm5.js";import{S as _t}from"./StatusBadge-Z_se38p0.js";import{S as mt}from"./SummaryView-scB3VlZI.js";import{T as X}from"./TagList-PhMEwhbH.js";import{T as ft}from"./TextWithCopyButton-msv3q9gZ.js";import{_ as yt}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-bfIc9RQG.js";import"./CopyButton-AB3vXwLG.js";import"./AccordionList-wVfYOae_.js";const vt={},gt={class:"card"},ht={class:"title"},bt={class:"body"};function kt(d,e){const r=g("KCard");return o(),y(r,{class:"data-card"},{default:a(()=>[s("dl",null,[s("div",gt,[s("dt",ht,[K(d.$slots,"title",{},void 0,!0)]),t(),s("dd",bt,[K(d.$slots,"default",{},void 0,!0)])])])]),_:3})}const Q=R(vt,[["render",kt],["__scopeId","data-v-6e083223"]]),wt={class:"service-traffic"},xt={class:"actions"},$t=G({__name:"DataPlaneTraffic",setup(d){return(e,r)=>(o(),p("div",wt,[s("div",xt,[K(e.$slots,"actions",{},void 0,!0)]),t(),l(Q,{class:"header"},{title:a(()=>[K(e.$slots,"title",{},void 0,!0)]),_:3}),t(),K(e.$slots,"default",{},void 0,!0)]))}}),j=R($t,[["__scopeId","data-v-5bd1dbf9"]]),Bt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Tt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Ct=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],St=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],W=(d,e,r)=>{let k=d;return typeof e=="string"||Array.isArray(e)?k=d.toLocaleString(e,r):(e===!0||r!==void 0)&&(k=d.toLocaleString(void 0,r)),k};function F(d,e){if(!Number.isFinite(d))throw new TypeError(`Expected a finite number, got ${typeof d}: ${d}`);e={bits:!1,binary:!1,space:!0,...e};const r=e.bits?e.binary?St:Ct:e.binary?Tt:Bt,k=e.space?" ":"";if(e.signed&&d===0)return` 0${k}${r[0]}`;const u=d<0,B=u?"-":e.signed?"+":"";u&&(d=-d);let h;if(e.minimumFractionDigits!==void 0&&(h={minimumFractionDigits:e.minimumFractionDigits}),e.maximumFractionDigits!==void 0&&(h={maximumFractionDigits:e.maximumFractionDigits,...h}),d<1){const T=W(d,e.locale,h);return B+T+k+r[0]}const x=Math.min(Math.floor(e.binary?Math.log(d)/Math.log(1024):Math.log10(d)/3),r.length-1);d/=(e.binary?1024:1e3)**x,h||(d=d.toPrecision(3));const N=W(Number(d),e.locale,h),I=r[x];return B+N+k+I}const It={class:"title"},Dt={key:0},Kt=G({__name:"ServiceTrafficCard",props:{protocol:{},traffic:{}},setup(d){const{t:e}=J(),r=d,k=u=>{const B=u.target;if(u.isTrusted&&B.nodeName.toLowerCase()!=="a"){const h=B.closest(".service-traffic-card, a");if(h){const x=h.nodeName.toLowerCase()==="a"?h:h.querySelector("a");x!==null&&"click"in x&&typeof x.click=="function"&&x.click()}}};return(u,B)=>{const h=g("KBadge"),x=g("KSkeletonBox");return o(),y(Q,{class:"service-traffic-card",onClick:k},{title:a(()=>[l(h,{appearance:r.protocol==="passthrough"?"success":"info"},{default:a(()=>[t(i(n(e)(`data-planes.components.service_traffic_card.protocol.${r.protocol}`,{},{defaultMessage:n(e)(`http.api.value.${r.protocol}`)})),1)]),_:1},8,["appearance"]),t(),s("div",It,[K(u.$slots,"default",{},void 0,!0)])]),default:a(()=>{var N,I,T,E,P,L,q,U,z;return[t(),r.traffic?(o(),p(m,{key:0},[r.traffic.name.length>0?(o(),p("dl",Dt,[r.protocol==="passthrough"?(o(!0),p(m,{key:0},$([["http","tcp"].reduce((f,V)=>{var b;const v="downstream";return Object.entries(((b=r.traffic)==null?void 0:b[V])||{}).reduce((C,[M,c])=>[`${v}_cx_tx_bytes_total`,`${v}_cx_rx_bytes_total`].includes(M)?{...C,[M]:c+(C[M]??0)}:C,f)},{})],(f,V)=>(o(),p(m,{key:V},[s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(n(F)(f.downstream_cx_rx_bytes_total??0)),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(n(F)(f.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):r.protocol==="grpc"?(o(),p(m,{key:1},[s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.grpc_success")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((N=r.traffic.grpc)==null?void 0:N.success)??0})),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.grpc_failure")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((I=r.traffic.grpc)==null?void 0:I.failure)??0})),1)])],64)):r.protocol==="http"?(o(),p(m,{key:2},[(o(!0),p(m,null,$([((T=r.traffic.http)==null?void 0:T.downstream_rq_1xx)??0].filter(f=>f!==0),f=>(o(),p("div",{key:f},[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.1xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:f})),1)]))),128)),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.2xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((E=r.traffic.http)==null?void 0:E.downstream_rq_2xx)??0})),1)]),t(),(o(!0),p(m,null,$([((P=r.traffic.http)==null?void 0:P.downstream_rq_3xx)??0].filter(f=>f!==0),f=>(o(),p("div",{key:f},[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.3xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:f})),1)]))),128)),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.4xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((L=r.traffic.http)==null?void 0:L.downstream_rq_4xx)??0})),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.5xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((q=r.traffic.http)==null?void 0:q.downstream_rq_5xx)??0})),1)])],64)):(o(),p(m,{key:3},[s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(n(F)(((U=r.traffic.tcp)==null?void 0:U.downstream_cx_rx_bytes_total)??0)),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(n(F)(((z=r.traffic.tcp)==null?void 0:z.downstream_cx_tx_bytes_total)??0)),1)])],64))])):D("",!0)],64)):(o(),y(x,{key:1,width:"10"}))]}),_:3})}}}),O=R(Kt,[["__scopeId","data-v-c99fad9b"]]),Nt={class:"body"},Et=G({__name:"ServiceTrafficGroup",props:{type:{}},setup(d){const e=d;return(r,k)=>{const u=g("KCard");return o(),y(u,{class:et(["service-traffic-group",`type-${e.type}`])},{default:a(()=>[s("div",Nt,[K(r.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),Y=R(Et,[["__scopeId","data-v-baf4abf7"]]),Vt=d=>(ct("data-v-44aa1714"),d=d(),ut(),d),Mt={"data-testid":"dataplane-warnings"},Rt=["data-testid","innerHTML"],Pt={key:0,"data-testid":"warning-stats-loading"},Lt={class:"stack","data-testid":"dataplane-details"},qt={class:"columns"},Ut={class:"status-with-reason"},zt={class:"columns"},At=Vt(()=>s("span",null,"Outbounds",-1)),Ft={"data-testid":"dataplane-mtls"},Gt={class:"columns"},Ot=["innerHTML"],Yt={key:1,"data-testid":"dataplane-subscriptions"},Zt=G({__name:"DataPlaneDetailView",props:{data:{}},setup(d){const{t:e,formatIsoDate:r}=J(),k=at(),u=d,B=nt(()=>u.data.warnings.concat(...u.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(h,x)=>{const N=g("KTooltip"),I=g("DataCollection"),T=g("KCard"),E=g("RouterLink"),P=g("KInputSwitch"),L=g("KButton"),q=g("RouterView"),U=g("KAlert"),z=g("AppView"),f=g("DataSource"),V=g("RouteView");return o(),y(V,{params:{mesh:"",dataPlane:"",inactive:!1},name:"data-plane-detail-view"},{default:a(({route:v})=>[l(f,{src:u.data.dataplane.networking.type!=="delegated"?`/meshes/${v.params.mesh}/dataplanes/${v.params.dataPlane}/stats/${u.data.dataplane.networking.inboundName}`:""},{default:a(({data:b,error:C,refresh:M})=>[l(z,null,H({default:a(()=>[t(),s("div",Lt,[l(T,null,{default:a(()=>[s("div",qt,[l(S,null,{title:a(()=>[t(i(n(e)("http.api.property.status")),1)]),body:a(()=>[s("div",Ut,[l(_t,{status:u.data.status},null,8,["status"]),t(),u.data.dataplane.networking.type==="standard"?(o(),y(I,{key:0,items:u.data.dataplane.networking.inbounds,predicate:c=>!c.health.ready,empty:!1},{default:a(({items:c})=>[l(N,{class:"reason-tooltip","position-fixed":""},{content:a(()=>[s("ul",null,[(o(!0),p(m,null,$(c,_=>(o(),p("li",{key:`${_.service}:${_.port}`},i(n(e)("data-planes.routes.item.unhealthy_inbound",{service:_.service,port:_.port})),1))),128))])]),default:a(()=>[l(n(st),{color:n(tt),size:n(A),"hide-title":""},null,8,["color","size"]),t()]),_:2},1024)]),_:1},8,["items","predicate"])):D("",!0)])]),_:1}),t(),l(S,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.last_updated")),1)]),body:a(()=>[t(i(n(r)(u.data.modificationTime)),1)]),_:1}),t(),u.data.dataplane.networking.gateway?(o(),p(m,{key:0},[l(S,null,{title:a(()=>[t(i(n(e)("http.api.property.tags")),1)]),body:a(()=>[l(X,{tags:u.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:1}),t(),l(S,null,{title:a(()=>[t(i(n(e)("http.api.property.address")),1)]),body:a(()=>[l(ft,{text:`${u.data.dataplane.networking.address}`},null,8,["text"])]),_:1})],64)):D("",!0)])]),_:1}),t(),u.data.dataplane.networking.type!=="delegated"?(o(),y(T,{key:0,class:"traffic","data-testid":"dataplane-traffic"},{default:a(()=>[s("div",zt,[l(j,null,{title:a(()=>[l(n(ot),{display:"inline-block",decorative:"",size:n(A)},null,8,["size"]),t(`
                  Inbounds
                `)]),default:a(()=>[t(),l(Y,{type:"inbound"},{default:a(()=>[l(I,{items:u.data.dataplane.networking.inbounds},{default:a(({items:c})=>[(o(!0),p(m,null,$(c,_=>(o(),p(m,{key:`${_.name}`},[(o(!0),p(m,null,$([(b||{inbounds:[]}).inbounds.find(w=>`${w.name}`==`${_.name}`)],w=>(o(),y(O,{key:w,protocol:(w==null?void 0:w.protocol)??_.protocol,traffic:typeof C>"u"?w:{name:"",protocol:_.protocol,port:`${_.port}`}},{default:a(()=>[l(E,{to:{name:(Z=>Z.includes("bound")?Z.replace("-outbound-","-inbound-"):"data-plane-inbound-summary-overview-view")(String(n(k).name)),params:{service:_.name},query:{inactive:v.params.inactive?null:void 0}}},{default:a(()=>[t(i(_.name.replace("localhost_",":")),1)]),_:2},1032,["to"]),t(),l(X,{tags:[{label:"kuma.io/service",value:_.tags["kuma.io/service"]}]},null,8,["tags"])]),_:2},1032,["protocol","traffic"]))),128))],64))),128))]),_:2},1032,["items"])]),_:2},1024)]),_:2},1024),t(),l(j,null,H({title:a(()=>[l(n(it),{display:"inline-block",decorative:"",size:n(A)},null,8,["size"]),t(),At]),default:a(()=>[t(),t(),typeof C>"u"?(o(),p(m,{key:0},[typeof b>"u"?(o(),y(pt,{key:0})):(o(),p(m,{key:1},[l(Y,{type:"passthrough"},{default:a(()=>[l(O,{protocol:"passthrough",traffic:b.passthrough},{default:a(()=>[t(`
                        Non mesh traffic
                      `)]),_:2},1032,["traffic"])]),_:2},1024),t(),l(I,{predicate:v.params.inactive?void 0:c=>{var _,w;return((c.protocol==="tcp"?(_=c.tcp)==null?void 0:_.downstream_cx_rx_bytes_total:(w=c.http)==null?void 0:w.downstream_rq_total)??0)>0},items:b.outbounds},{default:a(({items:c})=>[c.length>0?(o(),y(Y,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:a(()=>[(o(!0),p(m,null,$(c,_=>(o(),y(O,{key:`${_.name}`,protocol:_.protocol,traffic:_},{default:a(()=>[l(E,{to:{name:(w=>w.includes("bound")?w.replace("-inbound-","-outbound-"):"data-plane-outbound-summary-overview-view")(String(n(k).name)),params:{service:_.name},query:{inactive:v.params.inactive?null:void 0}}},{default:a(()=>[t(i(_.name),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic"]))),128))]),_:2},1024)):D("",!0)]),_:2},1032,["predicate","items"])],64))],64)):(o(),y(lt,{key:1}))]),_:2},[b?{name:"actions",fn:a(()=>[l(P,{modelValue:v.params.inactive,"onUpdate:modelValue":c=>v.params.inactive=c,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:a(()=>[t(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(),l(L,{appearance:"primary",onClick:M},{default:a(()=>[l(n(rt),{size:n(A)},null,8,["size"]),t(`

                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024)):D("",!0),t(),l(q,null,{default:a(c=>[c.route.name!==v.name?(o(),y(mt,{key:0,width:"670px",onClose:function(_){v.replace({name:"data-plane-detail-view",params:{mesh:v.params.mesh,dataPlane:v.params.dataPlane},query:{inactive:v.params.inactive?null:void 0}})}},{default:a(()=>[(o(),y(dt(c.Component),{"dataplane-type":u.data.dataplaneType,gateway:u.data.dataplane.networking.gateway,inbounds:c.route.name.includes("-inbound-")?u.data.dataplane.networking.inbounds:[],data:c.route.name.includes("-inbound-")?(b==null?void 0:b.inbounds)||[]:(b==null?void 0:b.outbounds)||[]},null,8,["dataplane-type","gateway","inbounds","data"]))]),_:2},1032,["onClose"])):D("",!0)]),_:2},1024),t(),s("div",Ft,[s("h2",null,i(n(e)("data-planes.routes.item.mtls.title")),1),t(),u.data.dataplaneInsight.mTLS?(o(!0),p(m,{key:0},$([u.data.dataplaneInsight.mTLS],c=>(o(),y(T,{key:c,class:"mt-4"},{default:a(()=>[s("div",Gt,[l(S,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:a(()=>[t(i(n(r)(c.certificateExpirationTime)),1)]),_:2},1024),t(),l(S,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.generation_time.title")),1)]),body:a(()=>[t(i(n(r)(c.lastCertificateRegeneration)),1)]),_:2},1024),t(),l(S,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.regenerations.title")),1)]),body:a(()=>[t(i(n(e)("common.formats.integer",{value:c.certificateRegenerations})),1)]),_:2},1024),t(),l(S,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:a(()=>[t(i(c.issuedBackend),1)]),_:2},1024),t(),l(S,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:a(()=>[s("ul",null,[(o(!0),p(m,null,$(c.supportedBackends,_=>(o(),p("li",{key:_},i(_),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(o(),y(U,{key:1,class:"mt-4",appearance:"warning"},{alertMessage:a(()=>[s("div",{innerHTML:n(e)("data-planes.routes.item.mtls.disabled")},null,8,Ot)]),_:1}))]),t(),u.data.dataplaneInsight.subscriptions.length>0?(o(),p("div",Yt,[s("h2",null,i(n(e)("data-planes.routes.item.subscriptions.title")),1),t(),l(T,{class:"mt-4"},{default:a(()=>[l(yt,{subscriptions:u.data.dataplaneInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):D("",!0)])]),_:2},[B.value.length>0||C?{name:"notifications",fn:a(()=>[s("ul",Mt,[(o(!0),p(m,null,$(B.value,c=>(o(),p("li",{key:c.kind,"data-testid":`warning-${c.kind}`,innerHTML:n(e)(`common.warnings.${c.kind}`,c.payload)},null,8,Rt))),128)),t(),C?(o(),p("li",Pt,[t(`
              The below view is not enhanced with runtime stats (Error loading stats: `),s("strong",null,i(C.toString()),1),t(`)
            `)])):D("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),se=R(Zt,[["__scopeId","data-v-44aa1714"]]);export{se as default};