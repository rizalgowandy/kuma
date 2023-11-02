import{A as O,a as F}from"./AccordionList-9da1a7d6.js";import{d as j,h as A,r as g,o as e,l as u,p as a,n as t,F as k,I as B,H as _,j as m,w as s,m as S,i as l,a6 as H,D as M,G as T,t as U,E as G,x as D}from"./index-968489e2.js";import{_ as q}from"./SidecarDataplanePolicyList.vue_vue_type_script_setup_true_lang-7066168a.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-bdaa0f8d.js";import"./PolicyTypeTag-89594388.js";import"./TagList-d18d96c7.js";import"./toYaml-4e00099e.js";const b=v=>(M("data-v-c7f30269"),v=v(),T(),v),z={class:"policies-list"},J={class:"mesh-gateway-policy-list"},Q=b(()=>a("h3",{class:"mb-2"},`
        Gateway policies
      `,-1)),W={key:0},X=b(()=>a("h3",{class:"mt-6 mb-2"},`
        Listeners
      `,-1)),Y=b(()=>a("b",null,"Host",-1)),Z=b(()=>a("h4",{class:"mt-2 mb-2"},`
                Routes
              `,-1)),E={class:"dataplane-policy-header"},ee=b(()=>a("b",null,"Route",-1)),te=b(()=>a("b",null,"Service",-1)),ae={key:0,class:"badge-list"},se={class:"mt-1"},oe=j({__name:"GatewayDataplanePolicyList",props:{gatewayDataplane:{},policyTypesByName:{}},setup(v){const P=v,x=A(()=>I(P.gatewayDataplane)),V=A(()=>y(P.gatewayDataplane.policies));function I(h){const f=[],i=h.listeners??[];for(const o of i)for(const n of o.hosts)for(const p of n.routes){const c=[];for(const w of p.destinations){const r=y(w.policies),d={routeName:p.route,route:{name:"policy-detail-view",params:{mesh:h.gateway.mesh,policyPath:"meshgatewayroutes",policy:p.route}},service:w.tags["kuma.io/service"],policies:r};c.push(d)}f.push({protocol:o.protocol,port:o.port,hostName:n.hostName,routeEntries:c})}return f}function y(h){if(h===void 0)return[];const f=[];for(const i of Object.values(h)){const o=P.policyTypesByName[i.type];f.push({type:i.type,name:i.name,route:{name:"policy-detail-view",params:{mesh:i.mesh,policyPath:o.path,policy:i.name}}})}return f}return(h,f)=>{const i=g("router-link"),o=g("KBadge");return e(),u("div",z,[a("div",J,[Q,t(),V.value.length>0?(e(),u("ul",W,[(e(!0),u(k,null,B(V.value,(n,p)=>(e(),u("li",{key:p},[a("span",null,_(n.type),1),t(`:

          `),m(i,{to:n.route},{default:s(()=>[t(_(n.name),1)]),_:2},1032,["to"])]))),128))])):S("",!0),t(),X,t(),a("div",null,[(e(!0),u(k,null,B(x.value,(n,p)=>(e(),u("div",{key:p},[a("div",null,[a("div",null,[Y,t(": "+_(n.hostName)+":"+_(n.port)+" ("+_(n.protocol)+`)
            `,1)]),t(),n.routeEntries.length>0?(e(),u(k,{key:0},[Z,t(),m(F,{"initially-open":[],"multiple-open":""},{default:s(()=>[(e(!0),u(k,null,B(n.routeEntries,(c,w)=>(e(),l(O,{key:w},H({"accordion-header":s(()=>[a("div",E,[a("div",null,[a("div",null,[ee,t(": "),m(i,{to:c.route},{default:s(()=>[t(_(c.routeName),1)]),_:2},1032,["to"])]),t(),a("div",null,[te,t(": "+_(c.service),1)])]),t(),c.policies.length>0?(e(),u("div",ae,[(e(!0),u(k,null,B(c.policies,(r,d)=>(e(),l(o,{key:`${p}-${d}`},{default:s(()=>[t(_(r.type),1)]),_:2},1024))),128))])):S("",!0)])]),_:2},[c.policies.length>0?{name:"accordion-content",fn:s(()=>[a("ul",se,[(e(!0),u(k,null,B(c.policies,(r,d)=>(e(),u("li",{key:`${p}-${d}`},[t(_(r.type)+`:

                        `,1),m(i,{to:r.route},{default:s(()=>[t(_(r.name),1)]),_:2},1032,["to"])]))),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):S("",!0)])]))),128))])])])}}});const ne=U(oe,[["__scopeId","data-v-c7f30269"]]),_e=j({__name:"GatewayPoliciesView",props:{data:{}},setup(v){const P=v;return(x,V)=>{const I=g("RouteTitle"),y=g("DataSource"),h=g("KCard"),f=g("AppView"),i=g("RouteView");return e(),l(i,{name:"gateway-policies-view",params:{mesh:"",dataPlane:""}},{default:s(({route:o,t:n})=>[m(f,null,{title:s(()=>[a("h2",null,[m(I,{title:n("gateways.routes.item.navigation.gateway-policies-view"),render:!0},null,8,["title"])])]),default:s(()=>[t(),m(h,null,{body:s(()=>{var p,c,w;return[((w=(c=(p=P.data.dataplane)==null?void 0:p.networking)==null?void 0:c.gateway)==null?void 0:w.type)==="BUILTIN"?(e(),l(y,{key:0,src:"/*/policy-types"},{default:s(({data:r,error:d})=>[m(y,{src:`/meshes/${o.params.mesh}/gateways/${o.params.dataPlane}/policies`},{default:s(({data:$,error:N})=>[d?(e(),l(G,{key:0,error:d},null,8,["error"])):N?(e(),l(G,{key:1,error:N},null,8,["error"])):$===void 0||r===void 0?(e(),l(D,{key:2})):(e(),l(ne,{key:3,"policy-types-by-name":r.policies.reduce((R,L)=>Object.assign(R,{[L.name]:L}),{}),"gateway-dataplane":$},null,8,["policy-types-by-name","gateway-dataplane"]))]),_:2},1032,["src"])]),_:2},1024)):(e(),l(y,{key:1,src:"/*/policy-types"},{default:s(({data:r,error:d})=>[m(y,{src:`/meshes/${o.params.mesh}/dataplanes/${o.params.dataPlane}/sidecar-dataplanes-policies`},{default:s(({data:$,error:N})=>[m(y,{src:`/meshes/${o.params.mesh}/dataplanes/${o.params.dataPlane}/rules`},{default:s(({data:R,error:L})=>[d?(e(),l(G,{key:0,error:d},null,8,["error"])):N?(e(),l(G,{key:1,error:N},null,8,["error"])):L?(e(),l(G,{key:2,error:L},null,8,["error"])):r===void 0||$===void 0||R===void 0?(e(),l(D,{key:3})):(e(),l(q,{key:4,"policy-types-by-name":r.policies.reduce((K,C)=>Object.assign(K,{[C.name]:C}),{}),"sidecar-dataplanes":$.items,rules:R.items},null,8,["policy-types-by-name","sidecar-dataplanes","rules"]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024))]}),_:2},1024)]),_:2},1024)]),_:1})}}});export{_e as default};
