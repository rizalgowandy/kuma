import{d as T,r as s,o as n,p as y,w as e,b as a,l as r,Q as u,e as o,t as p,q as b,c as d,m as X,a0 as j,J as c,K as k,a1 as F}from"./index-Ch1waQC_.js";import{A as I,a as M}from"./AccordionList-DPylFu0R.js";import{P as q}from"./PolicyTypeTag-7AJAq-Ze.js";import{T as E}from"./TagList-Cw8tefL6.js";import{R as J}from"./RuleMatchers-B9o7KTve.js";const K={class:"stack-with-borders"},Q={key:0,class:"mt-6"},Y={class:"mt-4"},G={class:"stack-with-borders"},H={class:"mt-2"},at=T({__name:"DataPlaneInboundSummaryOverviewView",props:{data:{},routeName:{}},setup(D){const l=D;return(U,t)=>{const B=s("XBadge"),P=s("XCopyButton"),V=s("XAction"),x=s("DataSource"),N=s("XCodeBlock"),z=s("XCard"),h=s("DataCollection"),L=s("DataLoader"),R=s("AppView"),$=s("RouteView");return n(),y($,{params:{mesh:"",dataPlane:"",connection:""},name:l.routeName},{default:e(({t:v,route:C,uri:S})=>[a(R,null,{default:e(()=>[r("div",K,[a(u,{layout:"horizontal"},{title:e(()=>t[0]||(t[0]=[o(`
            Tags
          `)])),body:e(()=>[a(E,{tags:l.data.tags,alignment:"right"},null,8,["tags"])]),_:1}),t[9]||(t[9]=o()),a(u,{layout:"horizontal"},{title:e(()=>[o(p(v("http.api.property.state")),1)]),body:e(()=>[a(B,{appearance:l.data.state==="Ready"?"success":"danger"},{default:e(()=>[o(p(v(`http.api.value.${l.data.state}`)),1)]),_:2},1032,["appearance"])]),_:2},1024),t[10]||(t[10]=o()),a(u,{layout:"horizontal"},{title:e(()=>t[3]||(t[3]=[o(`
            Protocol
          `)])),body:e(()=>[a(B,{appearance:"info"},{default:e(()=>[o(p(v(`http.api.value.${l.data.protocol}`)),1)]),_:2},1024)]),_:2},1024),t[11]||(t[11]=o()),a(u,{layout:"horizontal"},{title:e(()=>t[5]||(t[5]=[o(`
            Address
          `)])),body:e(()=>[a(P,{text:`${l.data.addressPort}`},null,8,["text"])]),_:1}),t[12]||(t[12]=o()),l.data.serviceAddressPort.length>0?(n(),y(u,{key:0,layout:"horizontal"},{title:e(()=>t[7]||(t[7]=[o(`
            Service Address
          `)])),body:e(()=>[a(P,{text:`${l.data.serviceAddressPort}`},null,8,["text"])]),_:1})):b("",!0)]),t[24]||(t[24]=o()),l.data?(n(),d("div",Q,[t[22]||(t[22]=r("h3",null,"Rules",-1)),t[23]||(t[23]=o()),a(L,{src:S(X(j),"/meshes/:mesh/rules/for/:dataplane",{mesh:C.params.mesh,dataplane:C.params.dataPlane})},{default:e(({data:O})=>[a(h,{predicate:_=>_.ruleType==="from"&&Number(_.inbound.port)===Number(C.params.connection.split("_")[1]),items:O.rules},{default:e(({items:_})=>[r("div",Y,[a(I,{"initially-open":0,"multiple-open":"",class:"stack"},{default:e(()=>[(n(!0),d(c,null,k(Object.groupBy(_,g=>g.type),(g,w)=>(n(),y(z,{key:w},{default:e(()=>[a(M,null,{"accordion-header":e(()=>[a(q,{"policy-type":w},{default:e(()=>[o(p(w)+" ("+p(g.length)+`)
                        `,1)]),_:2},1032,["policy-type"])]),"accordion-content":e(()=>[r("div",G,[(n(!0),d(c,null,k(g,m=>(n(),d(c,{key:m},[m.matchers.length>0?(n(),y(u,{key:0,layout:"horizontal"},{title:e(()=>t[13]||(t[13]=[o(`
                                From
                              `)])),body:e(()=>[r("p",null,[a(J,{items:m.matchers},null,8,["items"])])]),_:2},1024)):b("",!0),t[19]||(t[19]=o()),m.origins.length>0?(n(),y(u,{key:1,layout:"horizontal"},{title:e(()=>t[15]||(t[15]=[o(`
                                Origin Policies
                              `)])),body:e(()=>[a(x,{src:"/policy-types"},{default:e(({data:A})=>[(n(!0),d(c,null,k([Object.groupBy((A==null?void 0:A.policies)??[],f=>f.name)],f=>(n(),d("ul",{key:f},[(n(!0),d(c,null,k(m.origins,i=>(n(),d("li",{key:`${i.mesh}-${i.name}`},[f[i.type]?(n(),y(V,{key:0,to:{name:"policy-detail-view",params:{mesh:i.mesh,policyPath:f[i.type][0].path,policy:i.name}}},{default:e(()=>[o(p(i.name),1)]),_:2},1032,["to"])):(n(),d(c,{key:1},[o(p(i.name),1)],64))]))),128))]))),128))]),_:2},1024)]),_:2},1024)):b("",!0),t[20]||(t[20]=o()),r("div",null,[t[17]||(t[17]=r("dt",null,`
                                Config
                              `,-1)),t[18]||(t[18]=o()),r("dd",H,[r("div",null,[a(N,{code:X(F).stringify(m.raw),language:"yaml","show-copy-button":!1},null,8,["code"])])])])],64))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])]),_:2},1032,["predicate","items"])]),_:2},1032,["src"])])):b("",!0)]),_:2},1024)]),_:1},8,["name"])}}});export{at as default};
