import{d as z,r as n,o as i,p as u,w as a,b as t,m as A,aq as x,A as b,e as p,t as c,c as r,J as m,S as X}from"./index-Ch1waQC_.js";const L=z({__name:"DelegatedGatewayListView",setup(D){return(V,B)=>{const g=n("XAction"),_=n("XCopyButton"),y=n("XActionGroup"),h=n("DataCollection"),w=n("DataLoader"),f=n("XCard"),k=n("AppView"),C=n("RouteView");return i(),u(C,{name:"delegated-gateway-list-view",params:{page:1,size:50,mesh:""}},{default:a(({route:o,t:d,me:l,uri:v})=>[t(k,{docs:d("delegated-gateways.href.docs")},{default:a(()=>[t(f,null,{default:a(()=>[t(w,{src:v(A(x),"/meshes/:mesh/service-insights/of/:serviceType",{mesh:o.params.mesh,serviceType:"gateway_delegated"},{page:o.params.page,size:o.params.size})},{loadable:a(({data:s})=>[t(h,{type:"gateways",items:(s==null?void 0:s.items)??[void 0],page:o.params.page,"page-size":o.params.size,total:s==null?void 0:s.total,onChange:o.update},{default:a(()=>[t(b,{class:"delegated-gateway-collection","data-testid":"delegated-gateway-collection",headers:[{...l.get("headers.name"),label:"Name",key:"name"},{...l.get("headers.addressPort"),label:"Address",key:"addressPort"},{...l.get("headers.dataplanes"),label:"DP proxies (online / total)",key:"dataplanes"},{...l.get("headers.status"),label:"Status",key:"status"},{...l.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:s==null?void 0:s.items,onResize:l.set},{name:a(({row:e})=>[t(_,{text:e.name},{default:a(()=>[t(g,{to:{name:"delegated-gateway-detail-view",params:{mesh:e.mesh,service:e.name},query:{page:o.params.page,size:o.params.size}}},{default:a(()=>[p(c(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),addressPort:a(({row:e})=>[e.addressPort?(i(),u(_,{key:0,text:e.addressPort},null,8,["text"])):(i(),r(m,{key:1},[p(c(d("common.collection.none")),1)],64))]),dataplanes:a(({row:e})=>[e.dataplanes?(i(),r(m,{key:0},[p(c(e.dataplanes.online||0)+" / "+c(e.dataplanes.total||0),1)],64)):(i(),r(m,{key:1},[p(c(d("common.collection.none")),1)],64))]),status:a(({row:e})=>[t(X,{status:e.status},null,8,["status"])]),actions:a(({row:e})=>[t(y,null,{default:a(()=>[t(g,{to:{name:"delegated-gateway-detail-view",params:{mesh:e.mesh,service:e.name}}},{default:a(()=>[p(c(d("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","onResize"])]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{L as default};
