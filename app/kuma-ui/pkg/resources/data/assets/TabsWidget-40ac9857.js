import{d as v,r as B,j as k,o as t,c as n,k as c,F as T,Q as u,x as E,b as f,f as d,a as p,O as S,z as q,w as _,u as l,h as w,ak as V,af as x,ag as L,L as N,N as $,_ as C}from"./index-c8ce0213.js";import{E as I}from"./ErrorBlock-a8c0484c.js";import{_ as O}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-171e2abf.js";import{Q as m}from"./QueryParameter-70743f73.js";const W=a=>(N("data-v-df3a0851"),a=a(),$(),a),Q={class:"tab-container","data-testid":"tab-container"},z={key:0,class:"tab__header"},A={class:"tab__content-container"},F={class:"flex items-center with-warnings"},H=W(()=>d("span",null,"Warnings",-1)),j=v({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(a,{emit:b}){const o=a,s=B(""),g=k(()=>o.tabs.map(e=>e.hash.replace("#","")));function h(){const e=m.get("tab");e!==null?s.value=`#${e}`:o.initialTabOverride!==null&&(s.value=`#${o.initialTabOverride}`)}h();function y(e){m.set("tab",e.substring(1)),x.logger.info(L.TABS_TAB_CHANGE,{data:{newActiveTabHash:e}}),b("on-tab-change",e)}return(e,i)=>(t(),n("div",Q,[a.isLoading?(t(),c(O,{key:0})):a.error!==null?(t(),c(I,{key:1,error:a.error},null,8,["error"])):(t(),n(T,{key:2},[e.$slots.tabHeader?(t(),n("header",z,[u(e.$slots,"tabHeader",{},void 0,!0)])):E("",!0),f(),d("div",A,[p(l(V),{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=r=>s.value=r),tabs:a.tabs,onChanged:y},S({"warnings-anchor":_(()=>[d("span",F,[p(l(w),{class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"16"}),f(),H])]),_:2},[q(l(g),r=>({name:r,fn:_(()=>[u(e.$slots,r,{},void 0,!0)])}))]),1032,["modelValue","tabs"])])],64))]))}});const J=C(j,[["__scopeId","data-v-df3a0851"]]);export{J as T};
