import{d as z,r as n,o as i,p,w as a,b as s,e as V,m as l,as as m,q as v}from"./index-Ch1waQC_.js";import{_ as F}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-Dlw2oWau.js";const M=z({__name:"ZoneEgressConfigView",setup(S){return(k,t)=>{const g=n("RouteTitle"),_=n("DataSource"),u=n("DataLoader"),f=n("XCard"),C=n("AppView"),h=n("RouteView");return i(),p(h,{name:"zone-egress-config-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:x,uri:c})=>[s(g,{render:!1,title:x("zone-egresses.routes.item.navigation.zone-egress-config-view")},null,8,["title"]),t[0]||(t[0]=V()),s(C,null,{default:a(()=>[s(f,null,{default:a(()=>[s(u,{src:c(l(m),"/zone-egresses/:name",{name:e.params.zoneEgress})},{default:a(({data:E})=>[s(F,{resource:E.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:a(({copy:o,copying:w})=>[w?(i(),p(_,{key:0,src:c(l(m),"/zone-egresses/:name/as/kubernetes",{name:e.params.zoneEgress},{cacheControl:"no-store"}),onChange:r=>{o(d=>d(r))},onError:r=>{o((d,R)=>R(r))}},null,8,["src","onChange","onError"])):v("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{M as default};
