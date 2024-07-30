import{A as F,a as T}from"./AccordionList-BsNe0MEB.js";import{d as j,r as b,o as e,c as a,k as c,e as s,F as i,G as y,t as r,b as l,w as t,p as S,m as _,R as Y,H as J,I as Q,q as x,l as O,at as q,j as U,A as W,n as Z,ax as E,E as ee}from"./index-Bs4ZAy4O.js";import{S as te}from"./SummaryView-CKUqxdH5.js";import{C as M}from"./CodeBlock-Cek-_R7S.js";import{P as X}from"./PolicyTypeTag-BwhrBQrg.js";import{T as D}from"./TagList-6SMFgs_o.js";import{R as ae}from"./RuleMatchers-B-2GQPGE.js";const I=v=>(J("data-v-184c6d72"),v=v(),Q(),v),se={class:"policies-list"},ne={class:"mesh-gateway-policy-list"},le=I(()=>c("h3",{class:"mb-2"},`
        Gateway policies
      `,-1)),oe={key:0},ie=I(()=>c("h3",{class:"mt-6 mb-2"},`
        Listeners
      `,-1)),ce=I(()=>c("b",null,"Host",-1)),re=I(()=>c("h4",{class:"mt-2 mb-2"},`
                Routes
              `,-1)),de={class:"dataplane-policy-header"},ue=I(()=>c("b",null,"Route",-1)),pe=I(()=>c("b",null,"Service",-1)),me={key:0,class:"badge-list"},_e={class:"mt-1"},he=j({__name:"BuiltinGatewayPolicies",props:{gatewayDataplane:{},types:{}},setup(v){const $=v;return(P,B)=>{const V=b("RouterLink"),m=b("KBadge");return e(),a("div",se,[c("div",ne,[le,s(),P.gatewayDataplane.routePolicies.length>0?(e(),a("ul",oe,[(e(!0),a(i,null,y(P.gatewayDataplane.routePolicies,(n,u)=>{var d;return e(),a("li",{key:u},[c("span",null,r(n.type),1),s(`:

          `),l(V,{to:{name:"policy-detail-view",params:{mesh:n.mesh,policyPath:((d=$.types[n.type])==null?void 0:d.path)??"",policy:n.name}}},{default:t(()=>[s(r(n.name),1)]),_:2},1032,["to"])])}),128))])):S("",!0),s(),ie,s(),c("div",null,[(e(!0),a(i,null,y(P.gatewayDataplane.listenerEntries,(n,u)=>(e(),a("div",{key:u},[c("div",null,[c("div",null,[ce,s(": "+r(n.hostName)+":"+r(n.port)+" ("+r(n.protocol)+`)
            `,1)]),s(),n.routeEntries.length>0?(e(),a(i,{key:0},[re,s(),l(T,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),a(i,null,y(n.routeEntries,(d,o)=>(e(),_(F,{key:o},Y({"accordion-header":t(()=>{var p;return[c("div",de,[c("div",null,[c("div",null,[ue,s(": "),l(V,{to:{name:"policy-detail-view",params:{mesh:d.route.mesh,policyPath:((p=$.types[d.route.type])==null?void 0:p.path)??"",policy:d.route.name}}},{default:t(()=>[s(r(d.route.name),1)]),_:2},1032,["to"])]),s(),c("div",null,[pe,s(": "+r(d.service),1)])]),s(),d.origins.length>0?(e(),a("div",me,[(e(!0),a(i,null,y(d.origins,(C,g)=>(e(),_(m,{key:`${u}-${g}`},{default:t(()=>[s(r(C.type),1)]),_:2},1024))),128))])):S("",!0)])]}),_:2},[d.origins.length>0?{name:"accordion-content",fn:t(()=>[c("ul",_e,[(e(!0),a(i,null,y(d.origins,(p,C)=>{var g;return e(),a("li",{key:`${u}-${C}`},[s(r(p.type)+`:

                        `,1),l(V,{to:{name:"policy-detail-view",params:{mesh:p.mesh,policyPath:((g=$.types[p.type])==null?void 0:g.path)??"",policy:p.name}}},{default:t(()=>[s(r(p.name),1)]),_:2},1032,["to"])])}),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):S("",!0)])]))),128))])])])}}}),ye=x(he,[["__scopeId","data-v-184c6d72"]]),fe={class:"policy-type-heading"},ge={class:"policy-list"},ke={key:0},be=j({__name:"PolicyTypeEntryList",props:{items:{},types:{}},setup(v){const $=v;function P({headerKey:B}){return{class:`cell-${B}`}}return(B,V)=>{const m=b("RouterLink"),n=b("KTable");return e(),_(T,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),a(i,null,y(B.items,(u,d)=>(e(),_(F,{key:d},{"accordion-header":t(()=>[c("h3",fe,[l(X,{"policy-type":u.type},{default:t(()=>[s(r(u.type)+" ("+r(u.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":t(()=>[c("div",ge,[l(n,{class:"policy-type-table",fetcher:()=>({data:u.connections,total:u.connections.length}),headers:[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}],"cell-attrs":P,"disable-pagination":"","is-clickable":""},{sourceTags:t(({row:o})=>[o.sourceTags.length>0?(e(),_(D,{key:0,class:"tag-list","should-truncate":"",tags:o.sourceTags},null,8,["tags"])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),destinationTags:t(({row:o})=>[o.destinationTags.length>0?(e(),_(D,{key:0,class:"tag-list","should-truncate":"",tags:o.destinationTags},null,8,["tags"])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),name:t(({row:o})=>[o.name!==null?(e(),a(i,{key:0},[s(r(o.name),1)],64)):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),origins:t(({row:o})=>[o.origins.length>0?(e(),a("ul",ke,[(e(!0),a(i,null,y(o.origins,(p,C)=>{var g;return e(),a("li",{key:`${d}-${C}`},[l(m,{to:{name:"policy-detail-view",params:{mesh:p.mesh,policyPath:((g=$.types[p.type])==null?void 0:g.path)??"",policy:p.name}}},{default:t(()=>[s(r(p.name),1)]),_:2},1032,["to"])])}),128))])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),config:t(({row:o})=>[o.config?(e(),_(M,{key:0,code:O(q).stringify(o.config),language:"yaml","show-copy-button":!1},null,8,["code"])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}}),ve=x(be,[["__scopeId","data-v-81949352"]]),$e={class:"policy-type-heading"},we={key:0,class:"matcher"},Pe={key:1},Ce={key:0},Re=j({__name:"RuleList",props:{rules:{},types:{}},setup(v){const{t:$}=U(),P=v;return(B,V)=>(e(),_(T,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),a(i,null,y([P.rules.reduce((m,n)=>(typeof m[n.type]>"u"&&(m[n.type]=[]),m[n.type].push(n),m),{})],m=>(e(),a(i,{key:m},[(e(!0),a(i,null,y(m,(n,u)=>(e(),_(F,{key:u},{"accordion-header":t(()=>[c("h3",$e,[l(X,{"policy-type":u},{default:t(()=>[s(r(u),1)]),_:2},1032,["policy-type"])])]),"accordion-content":t(()=>[(e(!0),a(i,null,y([n.some(d=>d.matchers.length>0)],d=>(e(),a("div",{key:d,class:"policy-list"},[l(W,{class:Z(["policy-type-table",{"has-matchers":d}]),total:n.length,items:n,headers:[...d?[{label:"Matchers",key:"matchers"}]:[],{label:"Origin policies",key:"origins"},{label:"Conf",key:"config"}]},{matchers:t(({row:o})=>[o.matchers.length>0?(e(),a("span",we,[l(ae,{items:o.matchers},null,8,["items"])])):(e(),a("i",Pe,r(O($)("data-planes.routes.item.matches_everything")),1))]),origins:t(({row:o})=>[o.origins.length>0?(e(),a("ul",Ce,[(e(!0),a(i,null,y(o.origins,(p,C)=>{var g;return e(),a("li",{key:`${u}-${C}`},[l(E,{to:{name:"data-plane-policy-summary-view",params:{mesh:p.mesh,policyPath:((g=P.types[p.type])==null?void 0:g.path)??"",policy:p.name}}},{default:t(()=>[s(r(p.name),1)]),_:2},1032,["to"])])}),128))])):(e(),a(i,{key:1},[s(r(O($)("common.collection.none")),1)],64))]),config:t(({row:o})=>[Object.keys(o.raw).length>0?(e(),_(M,{key:0,code:O(q).stringify(o.raw),language:"yaml","show-copy-button":!1},null,8,["code"])):(e(),a(i,{key:1},[s(r(O($)("common.collection.none")),1)],64))]),_:2},1032,["class","total","items","headers"])]))),128))]),_:2},1024))),128))],64))),128))]),_:1}))}}),H=x(Re,[["__scopeId","data-v-5bc04cc4"]]),Le={class:"stack"},Ve={class:"mb-2"},Be={key:0},Ge=j({__name:"DataPlanePoliciesView",props:{data:{}},setup(v){const $=v;return(P,B)=>{const V=b("RouteTitle"),m=b("KCard"),n=b("DataCollection"),u=b("DataLoader"),d=b("DataSource"),o=b("RouterView"),p=b("AppView"),C=b("RouteView");return e(),_(C,{name:"data-plane-policies-view",params:{mesh:"",dataPlane:""}},{default:t(({can:g,route:w,t:A})=>[l(V,{render:!1,title:A("data-planes.routes.item.navigation.data-plane-policies-view")},null,8,["title"]),s(),l(p,null,{default:t(()=>[c("div",Le,[l(d,{src:"/policy-types"},{default:t(({data:R,error:K})=>[(e(!0),a(i,null,y([((R==null?void 0:R.policies)??[]).reduce((L,k)=>Object.assign(L,{[k.name]:k}),{})],L=>(e(),a(i,{key:L},[l(u,{src:`/meshes/${w.params.mesh}/rules/for/${w.params.dataPlane}`,data:[R],errors:[K]},{default:t(({data:k})=>[l(n,{items:k.rules},{default:t(()=>[(e(),a(i,null,y(["proxy","to"],f=>l(n,{key:f,items:k.rules,predicate:h=>h.ruleType===f,comparator:(h,N)=>h.type.localeCompare(N.type),empty:!1},{default:t(({items:h})=>[l(m,null,{default:t(()=>[c("h3",null,r(A(`data-planes.routes.item.rules.${f}`)),1),s(),l(H,{class:"mt-2",rules:h,types:L,"data-testid":`${f}-rule-list`},null,8,["rules","types","data-testid"])]),_:2},1024)]),_:2},1032,["items","predicate","comparator"])),64)),s(),l(n,{items:k.rules,predicate:f=>f.ruleType==="from",comparator:(f,h)=>f.type.localeCompare(h.type),empty:!1},{default:t(({items:f})=>[l(m,null,{default:t(()=>[c("h3",Ve,r(A("data-planes.routes.item.rules.from")),1),s(),(e(!0),a(i,null,y([Object.groupBy(f,h=>h.inbound.port)],h=>(e(),a(i,{key:h},[(e(!0),a(i,null,y(Object.entries(h).sort(([N],[G])=>Number(G)-Number(N)),([N,G],z)=>(e(),a("div",{key:z},[c("h4",null,r(A("data-planes.routes.item.port",{port:N})),1),s(),l(H,{class:"mt-2",rules:G,types:L,"data-testid":`from-rule-list-${z}`},null,8,["rules","types","data-testid"])]))),128))],64))),128))]),_:2},1024)]),_:2},1032,["items","predicate","comparator"])]),_:2},1032,["items"])]),_:2},1032,["src","data","errors"]),s(),g("use zones")?S("",!0):(e(),a("div",Be,[$.data.dataplaneType==="builtin"?(e(),_(u,{key:0,src:`/meshes/${w.params.mesh}/dataplanes/${w.params.dataPlane}/gateway-dataplane-policies`,data:[R],errors:[K]},{default:t(({data:k})=>[k?(e(),_(n,{key:0,items:k.routePolicies,empty:!1},{default:t(()=>[c("h3",null,r(A("data-planes.routes.item.legacy_policies")),1),s(),l(m,{class:"mt-4"},{default:t(()=>[l(ye,{types:L,"gateway-dataplane":k,"data-testid":"builtin-gateway-dataplane-policies"},null,8,["types","gateway-dataplane"])]),_:2},1024)]),_:2},1032,["items"])):S("",!0)]),_:2},1032,["src","data","errors"])):(e(),_(u,{key:1,src:`/meshes/${w.params.mesh}/dataplanes/${w.params.dataPlane}/sidecar-dataplane-policies`,data:[R],errors:[K]},{default:t(({data:k})=>[l(n,{predicate:f=>{var h;return((h=L[f.type])==null?void 0:h.isTargetRefBased)===!1},items:k.policyTypeEntries,empty:!1},{default:t(({items:f})=>[c("h3",null,r(A("data-planes.routes.item.legacy_policies")),1),s(),l(m,{class:"mt-4"},{default:t(()=>[l(ve,{items:f,types:L,"data-testid":"sidecar-dataplane-policies"},null,8,["items","types"])]),_:2},1024)]),_:2},1032,["predicate","items"])]),_:2},1032,["src","data","errors"]))]))],64))),128))]),_:2},1024)]),s(),l(o,null,{default:t(({Component:R})=>[w.child()?(e(),_(te,{key:0,onClose:K=>w.replace({name:"data-plane-policies-view",params:{mesh:w.params.mesh,dataPlane:w.params.dataPlane}})},{default:t(()=>[(e(),_(ee(R)))]),_:2},1032,["onClose"])):S("",!0)]),_:2},1024)]),_:2},1024)]),_:1})}}});export{Ge as default};
