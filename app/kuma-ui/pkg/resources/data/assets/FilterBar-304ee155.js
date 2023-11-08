var fe=Object.defineProperty;var pe=(a,o,n)=>o in a?fe(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n;var O=(a,o,n)=>(pe(a,typeof o!="symbol"?o+"":o,n),n);import{d as re,l as ge,z as ye,a as se,o as u,b as P,w as k,r as ue,e as F,f as d,t as g,c as y,F as A,q as m,p as _,J as ce,v as J,W as ve,K as j,$ as he,_ as de,m as D,P as V,ag as oe,as as be,at as ke,au as _e,n as ie,av as Se,aw as we,H as Ce,U as Te,B as xe,C as ze}from"./index-70fb4e48.js";import{A as Ie}from"./AppCollection-08b32958.js";import{S as Le}from"./StatusBadge-63893a0a.js";import{d as De,a as Ae,c as Fe,C as Ne}from"./dataplane-0a086c06.js";const Be={key:0},Ee=re({__name:"DataPlaneList",props:{total:{default:0},pageNumber:{},pageSize:{},items:{},error:{},gateways:{type:Boolean,default:!1},isSelectedRow:{type:[Function,null],default:null},summaryRouteName:{}},emits:["load-data","change"],setup(a,{emit:o}){const{t:n,formatIsoDate:w}=ge(),v=ye(),e=a,i=o,S=v("use zones");function h(p){return p.map(r=>{var E,I,U,t,l,c,L,Y,X,ee,te,ne;const f=r.mesh,C=r.name,s=((E=r.dataplane.networking.gateway)==null?void 0:E.type)||"STANDARD",x=["kuma.io/protocol","kuma.io/service","kuma.io/zone"],T=De(r.dataplane).filter(b=>x.includes(b.label)),M=(I=T.find(b=>b.label==="kuma.io/service"))==null?void 0:I.value,G=(U=T.find(b=>b.label==="kuma.io/protocol"))==null?void 0:U.value,q=(t=T.find(b=>b.label==="kuma.io/zone"))==null?void 0:t.value;let $;M!==void 0&&($={name:"service-detail-view",params:{mesh:f,service:M}});let R;q!==void 0&&(R={name:"zone-cp-detail-view",params:{zone:q}});const{status:W}=Ae(r.dataplane,r.dataplaneInsight),K=((l=r.dataplaneInsight)==null?void 0:l.subscriptions)??[],Z={dpVersion:null,version:null},z=K.reduce((b,H)=>{var ae;return{dpVersion:((ae=H.version)==null?void 0:ae.kumaDp.version)||b.dpVersion,version:H.version||b.version}},Z);let N;(L=(c=r.dataplaneInsight)==null?void 0:c.mTLS)!=null&&L.certificateExpirationTime?N=w(r.dataplaneInsight.mTLS.certificateExpirationTime):N=n("data-planes.components.data-plane-list.certificate.none");const B={name:C,type:s,zone:{title:q??n("common.collection.none"),route:R},service:{title:M??n("common.collection.none"),route:$},protocol:G??n("common.collection.none"),status:W,warnings:{version_mismatch:!1,cert_expired:!1},isGateway:((X=(Y=r.dataplane)==null?void 0:Y.networking)==null?void 0:X.gateway)!==void 0,certificate:N};if(z.version){const{kind:b}=Fe(z.version);b!==Ne&&(B.warnings.version_mismatch=!0)}S&&z.dpVersion&&T.find(H=>H.label==="kuma.io/zone")&&typeof((ee=z.version)==null?void 0:ee.kumaDp.kumaCpCompatible)=="boolean"&&!z.version.kumaDp.kumaCpCompatible&&(B.warnings.version_mismatch=!0);const Q=(ne=(te=r.dataplaneInsight)==null?void 0:te.mTLS)==null?void 0:ne.certificateExpirationTime;return Q&&Date.now()>new Date(Q).getTime()&&(B.warnings.cert_expired=!0),B})}return(p,r)=>{const f=se("RouterLink"),C=se("KTooltip");return u(),P(Ie,{"empty-state-message":m(n)("common.emptyState.message",{type:e.gateways?"Gateways":"Data Plane Proxies"}),"empty-state-cta-to":m(n)(`data-planes.href.docs.${e.gateways?"gateway":"data_plane_proxy"}`),"empty-state-cta-text":m(n)("common.documentation"),headers:[{label:"Name",key:"name"},...e.gateways?[{label:"Type",key:"type"}]:[],{label:"Service",key:"service"},...e.gateways?[]:[{label:"Protocol",key:"protocol"}],...m(S)?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],"page-number":e.pageNumber,"page-size":e.pageSize,total:e.total,items:e.items?h(e.items):void 0,error:e.error,"is-selected-row":e.isSelectedRow,onChange:r[0]||(r[0]=s=>i("change",s))},{toolbar:k(()=>[ue(p.$slots,"toolbar",{},void 0,!0)]),name:k(({row:s})=>[F(f,{to:{name:e.summaryRouteName,params:{mesh:s.mesh,dataPlane:s.name},query:{page:e.pageNumber,size:e.pageSize}}},{default:k(()=>[d(g(s.name),1)]),_:2},1032,["to"])]),service:k(({rowValue:s})=>[s.route?(u(),P(f,{key:0,to:s.route},{default:k(()=>[d(g(s.title),1)]),_:2},1032,["to"])):(u(),y(A,{key:1},[d(g(s.title),1)],64))]),zone:k(({rowValue:s})=>[s.route?(u(),P(f,{key:0,to:s.route},{default:k(()=>[d(g(s.title),1)]),_:2},1032,["to"])):(u(),y(A,{key:1},[d(g(s.title),1)],64))]),status:k(({rowValue:s})=>[s?(u(),P(Le,{key:0,status:s},null,8,["status"])):(u(),y(A,{key:1},[d(g(m(n)("common.collection.none")),1)],64))]),warnings:k(({row:s})=>[Object.values(s.warnings).some(x=>x)?(u(),P(C,{key:0},{content:k(()=>[_("ul",null,[(u(!0),y(A,null,ce(s.warnings,(x,T)=>(u(),y(A,{key:T},[x?(u(),y("li",Be,g(m(n)(`data-planes.components.data-plane-list.${T}`)),1)):J("",!0)],64))),128))])]),default:k(()=>[d(),F(ve,{class:"mr-1",size:m(j),"hide-title":""},null,8,["size"])]),_:2},1024)):(u(),y(A,{key:1},[d(g(m(n)("common.collection.none")),1)],64))]),details:k(({row:s})=>[F(f,{class:"details-link","data-testid":"details-link",to:{name:s.isGateway?"gateway-detail-view":"data-plane-detail-view",params:{dataPlane:s.name}}},{default:k(()=>[d(g(m(n)("common.collection.details_link"))+" ",1),F(m(he),{display:"inline-block",decorative:"",size:m(j)},null,8,["size"])]),_:2},1032,["to"])]),_:3},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error","is-selected-row"])}}});const lt=de(Ee,[["__scopeId","data-v-5214e37a"]]);function Me(a,o,n){return Math.max(o,Math.min(a,n))}const qe=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class $e{constructor(o,n){O(this,"commands");O(this,"keyMap");O(this,"boundTriggerShortcuts");this.commands=n,this.keyMap=Object.fromEntries(Object.entries(o).map(([w,v])=>[w.toLowerCase(),v])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(o){Pe(o,this.keyMap,this.commands)}}function Pe(a,o,n){const w=je(a.code),v=[a.ctrlKey?"ctrl":"",a.shiftKey?"shift":"",a.altKey?"alt":"",w].filter(S=>S!=="").join("+"),e=o[v];if(!e)return;const i=n[e];i.isAllowedContext&&!i.isAllowedContext(a)||(i.shouldPreventDefaultAction&&a.preventDefault(),!(i.isDisabled&&i.isDisabled())&&i.trigger(a))}function je(a){return qe.includes(a)?"":a.replace(/^Key/,"").toLowerCase()}function Re(a,o){const n=" "+a,w=n.matchAll(/ ([-\s\w]+):\s*/g),v=[];for(const e of Array.from(w)){if(e.index===void 0)continue;const i=Ke(e[1]);if(o.length>0&&!o.includes(i))throw new Error(`Unknown field “${i}”. Known fields: ${o.join(", ")}`);const S=e.index+e[0].length,h=n.substring(S);let p;if(/^\s*["']/.test(h)){const f=h.match(/['"](.*?)['"]/);if(f!==null)p=f[1];else throw new Error(`Quote mismatch for field “${i}”.`)}else{const f=h.indexOf(" "),C=f===-1?h.length:f;p=h.substring(0,C)}p!==""&&v.push([i,p])}return v}function Ke(a){return a.trim().replace(/\s+/g,"-").replace(/-[a-z]/g,(o,n)=>n===0?o:o.substring(1).toUpperCase())}let le=0;const Qe=(a="unique")=>(le++,`${a}-${le}`),me=a=>(xe("data-v-349996e3"),a=a(),ze(),a),Ue=me(()=>_("span",{class:"visually-hidden"},"Focus filter",-1)),He={class:"k-filter-icon"},Oe=["for"],Ve=["id","placeholder"],Je={key:0,class:"k-suggestion-box","data-testid":"k-filter-bar-suggestion-box"},Ge={class:"k-suggestion-list"},We={key:0,class:"k-filter-bar-error"},Ze={key:0},Ye=["title","data-filter-field"],Xe={class:"visually-hidden"},et=me(()=>_("span",{class:"visually-hidden"},"Clear query",-1)),tt=re({__name:"FilterBar",props:{id:{type:String,required:!1,default:()=>Qe("k-filter-bar")},fields:{type:Object,required:!0},placeholder:{type:String,required:!1,default:null},query:{type:String,required:!1,default:""}},emits:["fields-change"],setup(a,{emit:o}){const n=a,w=o,v=D(null),e=D(null),i=D(n.query),S=D([]),h=D(null),p=D(!1),r=D(-1),f=V(()=>Object.keys(n.fields)),C=V(()=>Object.entries(n.fields).slice(0,5).map(([t,l])=>({fieldName:t,...l}))),s=V(()=>f.value.length>0?`Filter by ${f.value.join(", ")}`:"Filter"),x=V(()=>n.placeholder??s.value);oe(()=>S.value,function(t,l){U(t,l)||(h.value=null,w("fields-change",{fields:t,query:i.value}))}),oe(()=>i.value,function(){i.value===""&&(h.value=null),p.value=!0});const T={Enter:"submitQuery",Escape:"closeSuggestionBox",ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},M={submitQuery:{trigger:$,isAllowedContext(t){return e.value!==null&&t.composedPath().includes(e.value)},shouldPreventDefaultAction:!0},jumpToNextSuggestion:{trigger:R,isAllowedContext(t){return e.value!==null&&t.composedPath().includes(e.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:W,isAllowedContext(t){return e.value!==null&&t.composedPath().includes(e.value)},shouldPreventDefaultAction:!0},closeSuggestionBox:{trigger:E,isAllowedContext(t){return v.value!==null&&t.composedPath().includes(v.value)}}};function G(){const t=new $e(T,M);Ce(function(){t.registerListener()}),Te(function(){t.unRegisterListener()}),I(i.value)}G();function q(t){const l=t.target;I(l.value)}function $(){if(e.value instanceof HTMLInputElement)if(r.value===-1)I(e.value.value),p.value=!1;else{const t=C.value[r.value].fieldName;t&&N(e.value,t)}}function R(){K(1)}function W(){K(-1)}function K(t){r.value=Me(r.value+t,-1,C.value.length-1)}function Z(){e.value instanceof HTMLInputElement&&e.value.focus()}function z(t){const c=t.currentTarget.getAttribute("data-filter-field");c&&e.value instanceof HTMLInputElement&&N(e.value,c)}function N(t,l){const c=i.value===""||i.value.endsWith(" ")?"":" ";i.value+=c+l+":",t.focus(),r.value=-1}function B(){i.value="",e.value instanceof HTMLInputElement&&(e.value.value="",e.value.focus(),I(""))}function Q(t){t.relatedTarget===null&&E(),v.value instanceof HTMLElement&&t.relatedTarget instanceof Node&&!v.value.contains(t.relatedTarget)&&E()}function E(){p.value=!1}function I(t){h.value=null;try{const l=Re(t,f.value);l.sort((c,L)=>c[0].localeCompare(L[0])),S.value=l}catch(l){if(l instanceof Error)h.value=l,p.value=!0;else throw l}}function U(t,l){return JSON.stringify(t)===JSON.stringify(l)}return(t,l)=>(u(),y("div",{ref_key:"filterBar",ref:v,class:"k-filter-bar","data-testid":"k-filter-bar"},[_("button",{class:"k-focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"k-filter-bar-focus-filter-input-button",onClick:Z},[Ue,d(),_("span",He,[F(m(be),{decorative:"","data-testid":"k-filter-bar-filter-icon","hide-title":"",size:m(j)},null,8,["size"])])]),d(),_("label",{for:`${n.id}-filter-bar-input`,class:"visually-hidden"},[ue(t.$slots,"default",{},()=>[d(g(s.value),1)],!0)],8,Oe),d(),ke(_("input",{id:`${n.id}-filter-bar-input`,ref_key:"filterInput",ref:e,"onUpdate:modelValue":l[0]||(l[0]=c=>i.value=c),class:"k-filter-bar-input",type:"text",placeholder:x.value,"data-testid":"k-filter-bar-filter-input",onFocus:l[1]||(l[1]=c=>p.value=!0),onBlur:Q,onChange:q},null,40,Ve),[[_e,i.value]]),d(),p.value?(u(),y("div",Je,[_("div",Ge,[h.value!==null?(u(),y("p",We,g(h.value.message),1)):(u(),y("button",{key:1,class:ie(["k-submit-query-button",{"k-submit-query-button-is-selected":r.value===-1}]),title:"Submit query",type:"button","data-testid":"k-filter-bar-submit-query-button",onClick:$},`
          Submit `+g(i.value),3)),d(),(u(!0),y(A,null,ce(C.value,(c,L)=>(u(),y("div",{key:`${n.id}-${L}`,class:ie(["k-suggestion-list-item",{"k-suggestion-list-item-is-selected":r.value===L}])},[_("b",null,g(c.fieldName),1),c.description!==""?(u(),y("span",Ze,": "+g(c.description),1)):J("",!0),d(),_("button",{class:"k-apply-suggestion-button",title:`Add ${c.fieldName}:`,type:"button","data-filter-field":c.fieldName,"data-testid":"k-filter-bar-apply-suggestion-button",onClick:z},[_("span",Xe,"Add "+g(c.fieldName)+":",1),d(),F(m(Se),{decorative:"","hide-title":"",size:m(j)},null,8,["size"])],8,Ye)],2))),128))])])):J("",!0),d(),i.value!==""?(u(),y("button",{key:1,class:"k-clear-query-button",title:"Clear query",type:"button","data-testid":"k-filter-bar-clear-query-button",onClick:B},[et,d(),F(m(we),{decorative:"","hide-title":"",size:m(j)},null,8,["size"])])):J("",!0)],512))}});const rt=de(tt,[["__scopeId","data-v-349996e3"]]);export{lt as D,rt as F};