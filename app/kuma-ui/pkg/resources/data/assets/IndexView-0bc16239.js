import{d as V,a2 as R,a3 as h,r as o,o as n,g as u,w as t,h as s,i as l,m as k,a4 as E,l as w,E as y,t as B,j as C,F as N,n as T}from"./index-213666ad.js";import{N as D}from"./NavTabs-6863cadf.js";const j=V({__name:"IndexView",setup($){var _;const{t:a}=R(),z=(((_=h().getRoutes().find(e=>e.name==="zone-egress-detail-tabs-view"))==null?void 0:_.children)??[]).map(e=>{var c,i;const m=typeof e.name>"u"?(c=e.children)==null?void 0:c[0]:e,r=m.name,d=((i=m.meta)==null?void 0:i.module)??"";return{title:a(`zone-egresses.routes.item.navigation.${r}`),routeName:r,module:d}});return(e,m)=>{const r=o("RouteTitle"),d=o("RouterView"),f=o("DataSource"),c=o("AppView"),i=o("RouteView");return n(),u(i,{name:"zone-egress-detail-tabs-view",params:{zoneEgress:""}},{default:t(({route:p,can:v})=>[s(c,{breadcrumbs:[...v("use zones")?[{to:{name:"zone-cp-list-view"},text:l(a)("zone-cps.routes.item.breadcrumbs")}]:[],{to:{name:"zone-egress-list-view"},text:l(a)("zone-egresses.routes.item.breadcrumbs")}]},{title:t(()=>[k("h1",null,[s(E,{text:p.params.zoneEgress},{default:t(()=>[s(r,{title:l(a)("zone-egresses.routes.item.title",{name:p.params.zoneEgress}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:t(()=>[w(),s(f,{src:`/zone-egress-overviews/${p.params.zoneEgress}`},{default:t(({data:g,error:b})=>[b!==void 0?(n(),u(y,{key:0,error:b},null,8,["error"])):g===void 0?(n(),u(B,{key:1})):(n(),C(N,{key:2},[s(D,{class:"route-zone-egress-detail-view-tabs",tabs:l(z)},null,8,["tabs"]),w(),s(d,null,{default:t(x=>[(n(),u(T(x.Component),{data:g},null,8,["data"]))]),_:2},1024)],64))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{j as default};