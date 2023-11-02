import{d as P,g as C,y as S,r as l,o as a,l as r,j as t,k as y,ax as B,n as c,w as s,i as o,E as $,x as V,F as R,I as L,H as b,s as N,Q as q,p as v,a4 as A}from"./index-968489e2.js";import{_ as E}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-741f959e.js";import{_ as T}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-6a86b5a6.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-bdaa0f8d.js";import"./toYaml-4e00099e.js";const I={key:3,"data-testid":"affected-data-plane-proxies"},K=P({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyPath:{type:String,required:!0},policyName:{type:String,required:!0}},setup(f){const{t:h}=C(),n=f,m=S("");return(k,d)=>{const _=l("RouterLink");return a(),r("div",null,[t(y(B),{id:"dataplane-search",modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=i=>m.value=i),type:"text",placeholder:y(h)("policies.detail.dataplane_input_placeholder"),required:"","data-testid":"dataplane-search-input"},null,8,["modelValue","placeholder"]),c(),t(N,{src:`/meshes/${n.mesh}/policy-path/${n.policyPath}/policy/${n.policyName}/dataplanes`},{default:s(({data:i,error:u})=>[u?(a(),o($,{key:0,error:u},null,8,["error"])):i===void 0?(a(),o(V,{key:1})):i.items.length===0?(a(),o(E,{key:2})):(a(),r("ul",I,[(a(!0),r(R,null,L(i.items.filter(e=>e.name.toLowerCase().includes(m.value.toLowerCase())),(e,p)=>(a(),r("li",{key:p,"data-testid":"dataplane-name"},[t(_,{to:{name:"data-plane-detail-view",params:{mesh:e.mesh,dataPlane:e.name}}},{default:s(()=>[c(b(e.name),1)]),_:2},1032,["to"])]))),128))]))]),_:1},8,["src"])])}}}),D={key:2,class:"stack","data-testid":"detail-view-details"},W=P({__name:"PolicyDetailView",setup(f){const h=q();return(n,m)=>{const k=l("RouteTitle"),d=l("KCard"),_=l("DataSource"),i=l("AppView"),u=l("RouteView");return a(),o(u,{name:"policy-detail-view",params:{mesh:"",policy:"",policyPath:""}},{default:s(({route:e,t:p})=>[t(i,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"policy-list-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath}},text:p("policies.routes.item.breadcrumbs")}]},{title:s(()=>[v("h1",null,[t(A,{text:e.params.policy},{default:s(()=>[t(k,{title:p("policies.routes.item.title",{name:e.params.policy}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:s(()=>[c(),t(_,{src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}`},{default:s(({data:w,error:x})=>[x?(a(),o($,{key:0,error:x},null,8,["error"])):w===void 0?(a(),o(V,{key:1})):(a(),r("div",D,[t(d,null,{body:s(()=>[v("h2",null,b(p("policies.detail.affected_dpps")),1),c(),t(K,{class:"mt-4",mesh:e.params.mesh,"policy-name":e.params.policy,"policy-path":e.params.policyPath},null,8,["mesh","policy-name","policy-path"])]),_:2},1024),c(),t(T,{id:"code-block-policy",resource:w,"resource-fetcher":g=>y(h).getSinglePolicyEntity({name:e.params.policy,mesh:e.params.mesh,path:e.params.policyPath},g),"is-searchable":""},null,8,["resource","resource-fetcher"])]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{W as default};
