import{d as S,e as n,o as s,m as l,w as a,a as r,b as p,l as V,B,R as E,t as z,k as N,c as m,J as A,K as M}from"./index-DpJ_igul.js";const b=["data-testid","innerHTML"],I=S({__name:"ZoneConfigView",props:{data:{}},setup(_){const t=_;return(v,i)=>{const f=n("RouteTitle"),C=n("XCodeBlock"),k=n("XAlert"),h=n("KCard"),y=n("AppView"),w=n("DataSource"),x=n("RouteView");return s(),l(x,{name:"zone-cp-config-view",params:{zone:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:o,t:d,uri:R})=>{var u,g;return[r(f,{render:!1,title:d("zone-cps.routes.item.navigation.zone-cp-config-view")},null,8,["title"]),i[1]||(i[1]=p()),r(w,{src:R(V(B),"/control-plane/outdated/:version",{version:((g=(u=t.data.zoneInsight.version)==null?void 0:u.kumaCp)==null?void 0:g.version)??"-"})},{default:a(({data:c})=>[r(y,null,E({default:a(()=>[i[0]||(i[0]=p()),r(h,null,{default:a(()=>[Object.keys(t.data.zoneInsight.config).length>0?(s(),l(C,{key:0,language:"json",code:JSON.stringify(t.data.zoneInsight.config,null,2),"is-searchable":"",query:o.params.codeSearch,"is-filter-mode":o.params.codeFilter,"is-reg-exp-mode":o.params.codeRegExp,onQueryChange:e=>o.update({codeSearch:e}),onFilterModeChange:e=>o.update({codeFilter:e}),onRegExpModeChange:e=>o.update({codeRegExp:e})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])):(s(),l(k,{key:1,class:"mt-4","data-testid":"warning-no-subscriptions",appearance:"warning"},{default:a(()=>[p(z(d("zone-cps.detail.no_subscriptions")),1)]),_:2},1024))]),_:2},1024)]),_:2},[t.data.warnings.length>0?{name:"notifications",fn:a(()=>[N("ul",null,[(s(!0),m(A,null,M(t.data.warnings,e=>(s(),m("li",{key:e.kind,"data-testid":`warning-${e.kind}`,innerHTML:d(`common.warnings.${e.kind}`,{...e.payload,...e.kind==="INCOMPATIBLE_ZONE_AND_GLOBAL_CPS_VERSIONS"?{globalCpVersion:(c==null?void 0:c.version)??""}:{}})},null,8,b))),128))])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]}),_:1})}}});export{I as default};