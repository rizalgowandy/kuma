import{g as w,A as f,D as p,S as z,T as k,_ as v}from"./RouteView.vue_vue_type_script_setup_true_lang-666fd408.js";import{_ as b}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-7b0fb38a.js";import{g as C}from"./dataplane-30467516.js";import{d as x,r as B,o as i,a as g,w as e,h as a,i as c,g as s,t as d,b as o,e as u,F as h,f as V}from"./index-34ef126e.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-7f1a1d98.js";import"./AccordionList-5cea9834.js";const $={class:"stack","data-testid":"detail-view-details"},A={class:"columns",style:{"--columns":"3"}},D={key:0},W=x({__name:"ZoneIngressDetailView",props:{data:{}},setup(y){const t=y,{t:r}=w();return(m,N)=>{const _=B("KCard");return i(),g(v,{name:"zone-ingress-detail-view","data-testid":"zone-ingress-detail-view"},{default:e(()=>[a(f,null,{default:e(()=>{var I;return[c("div",$,[a(_,null,{body:e(()=>[c("div",A,[a(p,null,{title:e(()=>[s(d(o(r)("http.api.property.status")),1)]),body:e(()=>[a(z,{status:o(C)(t.data.zoneIngressInsight)},null,8,["status"])]),_:1}),s(),a(p,null,{title:e(()=>[s(d(o(r)("http.api.property.address")),1)]),body:e(()=>{var n,l;return[(n=t.data.zoneIngress.networking)!=null&&n.address&&((l=t.data.zoneIngress.networking)!=null&&l.port)?(i(),g(k,{key:0,text:`${t.data.zoneIngress.networking.address}:${t.data.zoneIngress.networking.port}`},null,8,["text"])):(i(),u(h,{key:1},[s(d(o(r)("common.detail.none")),1)],64))]}),_:1}),s(),a(p,null,{title:e(()=>[s(d(o(r)("http.api.property.advertisedAddress")),1)]),body:e(()=>{var n,l;return[(n=t.data.zoneIngress.networking)!=null&&n.advertisedAddress&&((l=t.data.zoneIngress.networking)!=null&&l.advertisedPort)?(i(),g(k,{key:0,text:`${t.data.zoneIngress.networking.advertisedAddress}:${t.data.zoneIngress.networking.advertisedPort}`},null,8,["text"])):(i(),u(h,{key:1},[s(d(o(r)("common.detail.none")),1)],64))]}),_:1})])]),_:1}),s(),(((I=m.data.zoneIngressInsight)==null?void 0:I.subscriptions)??[]).length>0?(i(),u("div",D,[c("h2",null,d(o(r)("zone-ingresses.detail.subscriptions")),1),s(),a(_,{class:"mt-4"},{body:e(()=>{var n;return[a(b,{subscriptions:((n=m.data.zoneIngressInsight)==null?void 0:n.subscriptions)??[]},null,8,["subscriptions"])]}),_:1})])):V("",!0)])]}),_:1})]),_:1})}}});export{W as default};