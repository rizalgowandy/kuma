import{d as V,r as n,o as b,p as y,w as t,b as a,e as c,m as E,$ as R,t as k}from"./index-Ch1waQC_.js";const X=V({__name:"ConnectionOutboundSummaryXdsConfigView",props:{routeName:{}},setup(l){const i=l;return(w,s)=>{const p=n("RouteTitle"),r=n("XCheckbox"),m=n("XAction"),u=n("XCodeBlock"),_=n("DataLoader"),g=n("AppView"),f=n("RouteView");return b(),y(f,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",connection:"",includeEds:!1},name:i.routeName},{default:t(({t:d,route:e,uri:h})=>[a(p,{render:!1,title:d("connections.routes.item.navigation.xds")},null,8,["title"]),s[1]||(s[1]=c()),a(g,null,{default:t(()=>[a(_,{src:h(E(R),"/meshes/:mesh/dataplanes/:dataplane/outbound/:outbound/xds/:endpoints",{mesh:e.params.mesh,dataplane:e.params.dataPlane,outbound:e.params.connection,endpoints:String(e.params.includeEds)})},{default:t(({data:C,refresh:x})=>[a(u,{language:"json",code:JSON.stringify(C,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{"primary-actions":t(()=>[a(r,{modelValue:e.params.includeEds,"onUpdate:modelValue":o=>e.params.includeEds=o,label:d("connections.include_endpoints")},null,8,["modelValue","onUpdate:modelValue","label"]),s[0]||(s[0]=c()),a(m,{action:"refresh",appearance:"primary",onClick:x},{default:t(()=>[c(k(d("common.refresh")),1)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:1},8,["name"])}}});export{X as default};
