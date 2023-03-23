import{L as b}from"./LoadingBox-93a40f91.js";import{O as x,a as Z,b as z}from"./OnboardingPage-878fd6cd.js";import{d as k,l as I,C as O,r as l,at as T,o as s,k as A,w as r,a as _,b as e,f as t,u as y,c,x as N,L as V,N as C,_ as L}from"./index-c8ce0213.js";const M=i=>(V("data-v-7426dc0c"),i=i(),C(),i),U=M(()=>t("p",{class:"mb-4 text-center"},`
        A zone requires both the zone control plane and zone ingress. On Kubernetes, you run a single command to create both resources. On Universal, you must create them separately.
      `,-1)),S={class:"mb-4 text-center"},B=["href"],E={class:"status-box mt-4"},K={key:0,class:"status--is-connected","data-testid":"zone-connected"},R={key:1,class:"status--is-disconnected","data-testid":"zone-disconnected"},D={class:"status-box mt-4"},P={key:0,class:"status--is-connected","data-testid":"zone-ingress-connected"},G={key:1,class:"status--is-disconnected","data-testid":"zone-ingress-disconnected"},$={key:0,class:"status-loading-box mt-4"},q=k({__name:"MultiZoneView",setup(i){const p=I(),m=O(),v=1e3,o=l(!1),a=l(!1),u=l(null),d=l(null);T(function(){f(),w()}),h(),g();async function h(){try{const{total:n}=await p.getZones();o.value=n>0}catch(n){console.error(n)}finally{o.value||(f(),u.value=window.setTimeout(h,v))}}async function g(){try{const{total:n}=await p.getAllZoneIngressOverviews();a.value=n>0}catch(n){console.error(n)}finally{a.value||(w(),d.value=window.setTimeout(g,v))}}function f(){u.value!==null&&window.clearTimeout(u.value)}function w(){d.value!==null&&window.clearTimeout(d.value)}return(n,H)=>(s(),A(z,null,{header:r(()=>[_(x,null,{title:r(()=>[e(`
          Add zones
        `)]),_:1})]),content:r(()=>[U,e(),t("p",S,[t("b",null,[e("See "),t("a",{href:`${y(m)("KUMA_DOCS_URL")}/deployments/multi-zone/?${y(m)("KUMA_UTM_QUERY_PARAMS")}#zone-control-plane`,target:"_blank"},"the documentation for options to install",8,B),e(".")])]),e(),t("div",null,[t("p",E,[e(`
          Zone status:

          `),o.value?(s(),c("span",K,"Connected")):(s(),c("span",R,"Disconnected"))]),e(),t("p",D,[e(`
          Zone ingress status:

          `),a.value?(s(),c("span",P,"Connected")):(s(),c("span",G,"Disconnected"))]),e(),!a.value||!o.value?(s(),c("div",$,[_(b)])):N("",!0)])]),navigation:r(()=>[_(Z,{"next-step":"onboarding-create-mesh","previous-step":"onboarding-configuration-types","should-allow-next":o.value&&a.value},null,8,["should-allow-next"])]),_:1}))}});const F=L(q,[["__scopeId","data-v-7426dc0c"]]);export{F as default};
