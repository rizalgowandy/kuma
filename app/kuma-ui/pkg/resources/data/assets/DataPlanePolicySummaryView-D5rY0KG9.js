import{_ as V}from"./PolicySummary.vue_vue_type_script_setup_true_lang-kq96vh9F.js";import{_ as P}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-Dlw2oWau.js";import{d as R,r as s,o as r,p as n,w as o,b as t,l as $,e as E,q as d,_ as S}from"./index-Ch1waQC_.js";const D=R({__name:"DataPlanePolicySummaryView",setup(k){return(v,l)=>{const _=s("RouteTitle"),y=s("XAction"),i=s("DataSource"),h=s("DataLoader"),f=s("AppView"),u=s("RouteView");return r(),n(u,{name:"data-plane-policy-summary-view",params:{mesh:"",policyPath:"",policy:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:g})=>[t(i,{src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}`},{default:o(({data:c,error:x})=>[t(f,null,{title:o(()=>[$("h2",null,[t(y,{to:{name:"policy-detail-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath,policy:e.params.policy}}},{default:o(()=>[t(_,{title:g("policies.routes.item.title",{name:e.params.policy})},null,8,["title"])]),_:2},1032,["to"])])]),default:o(()=>[l[0]||(l[0]=E()),t(h,{data:[c],errors:[x]},{default:o(()=>[c?(r(),n(V,{key:0,policy:c},{default:o(()=>[t(P,{resource:c.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{default:o(({copy:a,copying:C})=>[C?(r(),n(i,{key:0,src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}/as/kubernetes?no-store`,onChange:p=>{a(m=>m(p))},onError:p=>{a((m,w)=>w(p))}},null,8,["src","onChange","onError"])):d("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["policy"])):d("",!0)]),_:2},1032,["data","errors"])]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}}),N=S(D,[["__scopeId","data-v-afddaea7"]]);export{N as default};
