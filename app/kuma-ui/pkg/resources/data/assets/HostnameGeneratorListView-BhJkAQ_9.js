import{d as A,r as a,o as p,p as c,w as o,b as s,l as _,e as l,m as R,P as X,A as b,X as x,t as u,F as D,q as L}from"./index-Ch1waQC_.js";import{S as T}from"./SummaryView-CvxHxN3s.js";const B={class:"stack"},N=["innerHTML"],F=A({__name:"HostnameGeneratorListView",setup(q){return(G,r)=>{const d=a("RouteTitle"),g=a("XAction"),h=a("XActionGroup"),w=a("RouterView"),f=a("DataCollection"),z=a("DataLoader"),C=a("XCard"),y=a("AppView"),V=a("RouteView");return p(),c(V,{name:"hostname-generator-list-view",params:{name:"",page:1,size:15}},{default:o(({route:n,t:m,can:v,uri:k,me:i})=>[s(y,{docs:m("hostname-generators.href.docs")},{title:o(()=>[_("h1",null,[s(d,{title:m("hostname-generators.routes.items.title")},null,8,["title"])])]),default:o(()=>[r[3]||(r[3]=l()),_("div",B,[_("div",{innerHTML:m("hostname-generators.routes.items.intro",{},{defaultMessage:""})},null,8,N),r[2]||(r[2]=l()),s(C,null,{default:o(()=>[s(z,{src:k(R(X),"/hostname-generators",{},{page:n.params.page,size:n.params.size})},{loadable:o(({data:e})=>[s(f,{type:"hostname-generators",items:(e==null?void 0:e.items)??[void 0],page:n.params.page,"page-size":n.params.size,total:e==null?void 0:e.total,onChange:n.update},{default:o(()=>[s(b,{"data-testid":"hostname-generator-collection",headers:[{...i.get("headers.name"),label:m("hostname-generators.common.name"),key:"name"},{...i.get("headers.namespace"),label:m("hostname-generators.common.namespace"),key:"namespace"},...v("use zones")?[{...i.get("headers.zone"),label:m("hostname-generators.common.zone"),key:"zone"}]:[],{...i.get("headers.actions"),label:m("hostname-generators.common.actions"),key:"actions",hideLabel:!0}],items:e==null?void 0:e.items,"is-selected-row":t=>t.name===n.params.name,onResize:i.set},{name:o(({row:t})=>[s(x,{text:t.name},{default:o(()=>[s(g,{"data-action":"",to:{name:"hostname-generator-summary-view",params:{name:t.id},query:{page:n.params.page,size:n.params.size}}},{default:o(()=>[l(u(t.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),actions:o(({row:t})=>[s(h,null,{default:o(()=>[s(g,{to:{name:"hostname-generator-detail-view",params:{name:t.id}}},{default:o(()=>[l(u(m("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),r[1]||(r[1]=l()),e!=null&&e.items&&n.params.name?(p(),c(w,{key:0},{default:o(t=>[s(T,{onClose:H=>n.replace({name:"hostname-generator-list-view",params:{name:""},query:{page:n.params.page,size:n.params.size}})},{default:o(()=>[(p(),c(D(t.Component),{items:e==null?void 0:e.items},null,8,["items"]))]),_:2},1032,["onClose"])]),_:2},1024)):L("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1032,["docs"])]),_:1})}}});export{F as default};
