import{d as A,q as Z,r as o,s as V,R as I,o as h,c as S,w as z,a as l,u as p,b as k,e as f,J as x,f as B,g as L}from"./index-95f89edf.js";import{_ as O}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-bb33a958.js";import{u as $,g as q,f as C,e as P}from"./RouteView.vue_vue_type_script_setup_true_lang-9e79b18b.js";import{_ as R}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9b936e20.js";import{D as F}from"./DataOverview-8519bc1d.js";import{Q as v}from"./QueryParameter-70743f73.js";import"./AccordionList-0b8fa56a.js";import"./DefinitionListItem-bc2360de.js";import"./EnvoyData-598d75f2.js";import"./kongponents.es-0bcabadf.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-10589c0c.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-a0d89db1.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-2f6e2ce9.js";import"./ErrorBlock-a4644cb1.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-188a0103.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-11fd266a.js";import"./TabsWidget-2ea84b7e.js";import"./TextWithCopyButton-09664503.js";import"./TagList-72e06e77.js";import"./StatusBadge-0bd793b3.js";const Q={class:"zoneegresses"},U={class:"kcard-stack"},G={class:"kcard-border"},J={key:0,class:"kcard-border"},pe=A({__name:"ZoneEgressListView",props:{selectedZoneEgressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(N){const i=N,g=$(),{t:_}=q(),T={title:"No Data",message:"There are no Zone Egresses present."},b=Z(),u=o(!0),c=o(null),n=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=o(null),y=o(null),E=o(i.offset);V(()=>b.params.mesh,function(){b.name==="zone-egress-list-view"&&m(0)}),m(i.offset);async function m(e){var a;E.value=e,v.set("offset",e>0?e:null),u.value=!0,c.value=null;const t=x;try{const{items:s,next:d}=await g.getAllZoneEgressOverviews({size:t,offset:e});y.value=d,n.value.data=D(s??[]),await w({name:i.selectedZoneEgressName??((a=n.value.data[0])==null?void 0:a.entity.name)})}catch(s){n.value.data=[],r.value=null,s instanceof Error?c.value=s:console.error(s)}finally{u.value=!1}}function D(e){return e.map(t=>{const{name:a}=t,s={name:"zone-egress-detail-view",params:{zoneEgress:a}},d=I(t.zoneEgressInsight??{});return{entity:t,detailViewRoute:s,status:d}})}async function w({name:e}){if(e===void 0){r.value=null,v.set("zoneEgress",null);return}try{r.value=await g.getZoneEgressOverview({name:e}),v.set("zoneEgress",e)}catch(t){console.error(t)}}return(e,t)=>(h(),S(P,null,{default:z(()=>[l(R,{title:p(_)("zone-egresses.routes.items.title")},null,8,["title"]),k(),l(C,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:p(_)("zone-egresses.routes.items.breadcrumbs")}]},{default:z(()=>{var a;return[f("div",Q,[f("div",U,[f("div",G,[l(F,{"selected-entity-name":(a=r.value)==null?void 0:a.name,"page-size":p(x),"is-loading":u.value,error:c.value,"empty-state":T,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:y.value,"page-offset":E.value,onTableAction:w,onLoadData:m},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),k(),r.value!==null?(h(),B("div",J,[l(O,{"zone-egress-overview":r.value},null,8,["zone-egress-overview"])])):L("",!0)])])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{pe as default};