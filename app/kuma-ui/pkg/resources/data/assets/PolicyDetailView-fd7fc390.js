import{d as $,g as b,y as R,r as d,o as e,l as p,j as o,k as h,aB as L,n as _,w as l,i as s,E as v,x,F as P,I as S,H as B,s as N,Q as A,p as C,a6 as E,a3 as I}from"./index-28451437.js";import{_ as q}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-24948e86.js";import{_ as j}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-122f3a9c.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-dcecbb9e.js";import"./toYaml-4e00099e.js";const F={key:3,"data-testid":"affected-data-plane-proxies"},H=$({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyPath:{type:String,required:!0},policyName:{type:String,required:!0}},setup(y){const{t:f}=b(),r=y,a=R("");return(k,n)=>{const c=d("RouterLink");return e(),p("div",null,[o(h(L),{id:"dataplane-search",modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=t=>a.value=t),type:"text",placeholder:h(f)("policies.detail.dataplane_input_placeholder"),required:"","data-testid":"dataplane-search-input"},null,8,["modelValue","placeholder"]),_(),o(N,{src:`/meshes/${r.mesh}/policy-path/${r.policyPath}/policy/${r.policyName}/dataplanes`},{default:l(({data:t,error:m})=>[m?(e(),s(v,{key:0,error:m},null,8,["error"])):t===void 0?(e(),s(x,{key:1})):t.items.length===0?(e(),s(q,{key:2})):(e(),p("ul",F,[(e(!0),p(P,null,S(t.items.filter(i=>i.name.toLowerCase().includes(a.value.toLowerCase())),(i,w)=>(e(),p("li",{key:w,"data-testid":"dataplane-name"},[o(c,{to:{name:"data-plane-detail-view",params:{mesh:i.mesh,dataPlane:i.name}}},{default:l(()=>[_(B(i.name),1)]),_:2},1032,["to"])]))),128))]))]),_:1},8,["src"])])}}}),K={class:"stack"},O=$({__name:"PolicyDetails",props:{policy:{type:Object,required:!0},path:{type:String,required:!0}},setup(y){const{t:f}=b(),r=A(),a=y;return(k,n)=>(e(),p("div",K,[o(h(E),null,{body:l(()=>[C("h2",null,B(h(f)("policies.detail.affected_dpps")),1),_(),o(H,{class:"mt-4",mesh:a.policy.mesh,"policy-name":a.policy.name,"policy-path":a.path},null,8,["mesh","policy-name","policy-path"])]),_:1}),_(),o(j,{id:"code-block-policy",resource:a.policy,"resource-fetcher":c=>h(r).getSinglePolicyEntity({name:a.policy.name,mesh:a.policy.mesh,path:a.path},c),"is-searchable":""},null,8,["resource","resource-fetcher"])]))}}),G=$({__name:"PolicyDetailView",setup(y){return(f,r)=>{const a=d("RouteTitle"),k=d("DataSource"),n=d("AppView"),c=d("RouteView");return e(),s(c,{name:"policy-detail-view",params:{mesh:"",policy:"",policyPath:""}},{default:l(({route:t,t:m})=>[o(k,{src:"/*/policy-types"},{default:l(({data:i,error:w})=>[w?(e(),s(v,{key:0,error:w},null,8,["error"])):i===void 0?(e(),s(x,{key:1})):i.policies.length===0?(e(),s(q,{key:2})):(e(!0),p(P,{key:3},S([i.policies.find(u=>u.path===t.params.policyPath)??i.policies[0]],u=>(e(),s(n,{key:u.name,breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:t.params.mesh}},text:t.params.mesh},{to:{name:"policy-list-view",params:{mesh:t.params.mesh,policyPath:t.params.policyPath}},text:m("policies.routes.item.breadcrumbs")}]},{title:l(()=>[C("h1",null,[o(I,{text:t.params.policy},{default:l(()=>[o(a,{title:m("policies.routes.item.title",{name:t.params.policy}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:l(()=>[_(),o(k,{src:`/meshes/${t.params.mesh}/policy-path/${u.path}/policy/${t.params.policy}`},{default:l(({data:g,error:V})=>[V?(e(),s(v,{key:0,error:V},null,8,["error"])):g===void 0?(e(),s(x,{key:1})):(e(),s(O,{key:2,policy:g,path:u.path,"data-testid":"detail-view-details"},null,8,["policy","path"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"]))),128))]),_:2},1024)]),_:1})}}});export{G as default};
