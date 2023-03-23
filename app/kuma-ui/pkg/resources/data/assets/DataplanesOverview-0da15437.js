import{d as A,l as B,r as b,j as y,aa as S,s as T,o as s,k as w,w as t,a as n,O as F,u as o,f as l,y as u,c as d,b as k,F as N,R as E,_ as I}from"./index-c8ce0213.js";import{L}from"./LoadingBox-93a40f91.js";import{O as R,a as C,b as H}from"./OnboardingPage-878fd6cd.js";import{S as M}from"./StatusBadge-584f994a.js";const V={key:0,class:"status-loading-box mb-4"},j={key:1},z={class:"mb-4"},K=A({__name:"DataplanesOverview",setup(U){const p=B(),x=[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],e=b({total:0,data:[]}),i=b(null),D=y(()=>e.value.data.length>0?"Success":"Waiting for DPPs"),m=y(()=>e.value.data.length>0?"The following data plane proxies (DPPs) are connected to the control plane:":null);S(function(){v()}),_();function v(){i.value!==null&&window.clearTimeout(i.value)}async function _(){let r=!1;const c=[];try{const{items:a}=await p.getAllDataplanes({size:10});if(Array.isArray(a))for(const O of a){const{name:f,mesh:g}=O,P=await p.getDataplaneOverviewFromMesh({mesh:g,name:f}),h=T(P.dataplaneInsight);h==="offline"&&(r=!0),c.push({status:h,name:f,mesh:g})}}catch(a){console.error(a)}e.value.data=c,e.value.total=e.value.data.length,r&&(v(),i.value=window.setTimeout(_,1e3))}return(r,c)=>(s(),w(H,null,{header:t(()=>[n(R,null,F({title:t(()=>[l("p",null,u(o(D)),1)]),_:2},[o(m)!==null?{name:"description",fn:t(()=>[l("p",null,u(o(m)),1)]),key:"0"}:void 0]),1024)]),content:t(()=>[e.value.data.length===0?(s(),d("div",V,[n(L)])):(s(),d("div",j,[l("p",z,[l("b",null,"Found "+u(e.value.data.length)+" DPPs:",1)]),k(),n(o(E),{class:"mb-4",fetcher:()=>e.value,headers:x,"disable-pagination":""},{status:t(({rowValue:a})=>[a?(s(),w(M,{key:0,status:a},null,8,["status"])):(s(),d(N,{key:1},[k(`
              —
            `)],64))]),_:1},8,["fetcher"])]))]),navigation:t(()=>[n(C,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":e.value.data.length>0},null,8,["should-allow-next"])]),_:1}))}});const Q=I(K,[["__scopeId","data-v-9ed5a755"]]);export{Q as default};
