import{d as g,K as b,r as v,o,a as m,w as s,h as t,b as d,i as w,g as p,e as z,F as h,j as x}from"./index-34ef126e.js";import{g as k,A as V,T as y,i as B,E as C,h as N,_ as $}from"./RouteView.vue_vue_type_script_setup_true_lang-666fd408.js";import{_ as I}from"./RouteTitle.vue_vue_type_script_setup_true_lang-f560e92d.js";import{N as R}from"./NavTabs-a0fae822.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-7f1a1d98.js";const Z=g({__name:"ZoneIngressDetailTabsView",setup(T){var _;const{t:l}=k(),f=(((_=b().getRoutes().find(e=>e.name==="zone-ingress-detail-tabs-view"))==null?void 0:_.children)??[]).map(e=>{var a,i;const c=typeof e.name>"u"?(a=e.children)==null?void 0:a[0]:e,r=c.name,n=((i=c.meta)==null?void 0:i.module)??"";return{title:l(`zone-ingresses.routes.item.navigation.${r}`),routeName:r,module:n}});return(e,c)=>{const r=v("RouterView");return o(),m($,{name:"zone-ingress-detail-tabs-view","data-testid":"zone-ingress-detail-tabs-view"},{default:s(({route:n})=>[t(V,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:d(l)("zone-ingresses.routes.item.breadcrumbs")}]},{title:s(()=>[w("h1",null,[t(y,{text:n.params.zoneIngress},{default:s(()=>[t(I,{title:d(l)("zone-ingresses.routes.item.title",{name:n.params.zoneIngress}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:s(()=>[p(),t(B,{src:`/zone-ingress-overviews/${n.params.zoneIngress}`},{default:s(({data:u,error:a})=>[a!==void 0?(o(),m(C,{key:0,error:a},null,8,["error"])):u===void 0?(o(),m(N,{key:1})):(o(),z(h,{key:2},[t(R,{class:"route-zone-ingress-detail-view-tabs",tabs:d(f)},null,8,["tabs"]),p(),t(r,null,{default:s(i=>[(o(),m(x(i.Component),{data:u},null,8,["data"]))]),_:2},1024)],64))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{Z as default};