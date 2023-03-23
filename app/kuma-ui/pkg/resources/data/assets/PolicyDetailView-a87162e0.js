import{_ as P}from"./PolicyConnections.vue_vue_type_script_setup_true_lang-713a6309.js";import{_ as x}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-ec77a77d.js";import{E as B}from"./ErrorBlock-a8c0484c.js";import{_ as E}from"./LabelList.vue_vue_type_style_index_0_lang-8d53c57d.js";import{_ as N}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-171e2abf.js";import{T as V}from"./TabsWidget-40ac9857.js";import{_ as $}from"./YamlView.vue_vue_type_script_setup_true_lang-b7cb6ad2.js";import{d as D,l as T,r as u,o as a,c as s,k as i,x as m,b as p,w as n,f as l,y as d,a as f,F as h,z as A,u as C,H as F}from"./index-c8ce0213.js";import"./QueryParameter-70743f73.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ad640f64.js";import"./toYaml-4e00099e.js";const H={class:"policy-details component-frame"},L={class:"entity-heading","data-testid":"policy-single-entity"},S={"data-testid":"policy-overview-tab"},z={key:0},K={class:"config-wrapper"},X=D({__name:"PolicyDetailView",props:{mesh:null,policyPath:null,policyName:null},setup(k){const _=k,g=T(),w=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],e=u(null),r=u(!0),o=u(null);async function b({mesh:y,policyPath:v,policyName:c}){r.value=!0,o.value=null,e.value=null;try{e.value=await g.getSinglePolicyEntity({mesh:y,path:v,name:c})}catch(t){t instanceof Error?o.value=t:console.error(t)}finally{r.value=!1}}return b(_),(y,v)=>(a(),s("div",H,[r.value?(a(),i(N,{key:0})):o.value!==null?(a(),i(B,{key:1,error:o.value},null,8,["error"])):e.value===null?(a(),i(x,{key:2})):m("",!0),p(),e.value!==null?(a(),i(V,{key:3,tabs:w},{tabHeader:n(()=>[l("h1",L,d(e.value.name),1)]),overview:n(()=>[f(E,null,{default:n(()=>[l("div",S,[l("ul",null,[(a(!0),s(h,null,A(e.value,(c,t)=>(a(),s(h,{key:t},[["type","mesh","name"].includes(t)?(a(),s("li",z,[l("h4",null,d(t),1),p(),l("p",null,d(c),1)])):m("",!0)],64))),128))])])]),_:1}),p(),l("div",K,[f($,{id:"code-block-policy",content:C(F)(e.value),"is-searchable":""},null,8,["content"])])]),"affected-dpps":n(()=>[f(P,{mesh:e.value.mesh,"policy-name":e.value.name,"policy-type":_.policyPath},null,8,["mesh","policy-name","policy-type"])]),_:1})):m("",!0)]))}});export{X as default};
