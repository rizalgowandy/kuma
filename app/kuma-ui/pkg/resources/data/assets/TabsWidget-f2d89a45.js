import{d as w,j as B,c as S,o as s,e as l,a as p,F as T,z as h,f as k,g as b,q as u,h as i,B as q,s as E,w as d,b as c,G as V,v as L,a3 as N,ad as $,p as x,m as C}from"./index-3af0ef1d.js";import{H as I,r as P,E as W,f as A}from"./RouteView.vue_vue_type_script_setup_true_lang-88be438e.js";const g={get(e){const a=new URL(window.location.href).searchParams.get(e);return a!==null?a.replaceAll("+"," "):null},set(e,t){const a=new URL(window.location.href);t!=null?a.searchParams.set(e,String(t).replace(/\s/g,"+")):a.searchParams.has(e)&&a.searchParams.delete(e),window.history.replaceState({path:a.href},"",a.href)}},H=e=>(x("data-v-4cf998d3"),e=e(),C(),e),O={class:"tab-container","data-testid":"tab-container"},U={key:0,class:"tab__header"},z={class:"tab__content-container"},F={class:"flex items-center with-warnings"},G=H(()=>u("span",null,"Warnings",-1)),R=w({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(e,{emit:t}){const a=e,_=I(),o=B(""),m=S(()=>a.tabs.map(r=>r.hash.replace("#","")));function y(){const r=g.get("tab");r!==null?o.value=`#${r}`:a.initialTabOverride!==null&&(o.value=`#${a.initialTabOverride}`)}y();function v(r){g.set("tab",r.substring(1)),_.info($.TABS_TAB_CHANGE,{data:{newActiveTabHash:r}}),t("on-tab-change",r)}return(r,f)=>(s(),l("div",O,[e.isLoading?(s(),p(P,{key:0})):e.error!==null?(s(),p(W,{key:1,error:e.error},null,8,["error"])):(s(),l(T,{key:2},[r.$slots.tabHeader?(s(),l("header",U,[h(r.$slots,"tabHeader",{},void 0,!0)])):k("",!0),b(),u("div",z,[i(c(N),{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=n=>o.value=n),tabs:e.tabs,onChanged:v},q({"warnings-anchor":d(()=>[u("span",F,[i(c(L),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"16"}),b(),G])]),_:2},[E(m.value,(n,j)=>({name:n,fn:d(()=>[i(c(V),{"border-variant":"noBorder"},{body:d(()=>[h(r.$slots,n,{},void 0,!0)]),_:2},1024)])}))]),1032,["modelValue","tabs"])])],64))]))}});const J=A(R,[["__scopeId","data-v-4cf998d3"]]);export{J as T};