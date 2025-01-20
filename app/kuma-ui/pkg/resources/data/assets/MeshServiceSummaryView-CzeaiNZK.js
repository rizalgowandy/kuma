import{d as X,r as l,o as p,p as m,w as t,b as n,l as c,e as o,Q as y,t as i,q as g,c as z,J as b,K as h}from"./index-Ch1waQC_.js";import{_ as A}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-Dlw2oWau.js";const M={class:"stack"},N={class:"stack-with-borders"},$={class:"mt-4"},L=X({__name:"MeshServiceSummaryView",props:{items:{}},setup(w){const k=w;return(T,e)=>{const S=l("RouteTitle"),f=l("XAction"),_=l("XBadge"),R=l("KumaPort"),v=l("XLayout"),V=l("DataSource"),E=l("AppView"),P=l("DataCollection"),D=l("RouteView");return p(),m(D,{name:"mesh-service-summary-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:r,t:x,can:B})=>[n(P,{items:k.items,predicate:s=>s.id===r.params.service},{item:t(({item:s})=>[n(E,null,{title:t(()=>[c("h2",null,[n(f,{to:{name:"mesh-service-detail-view",params:{mesh:r.params.mesh,service:r.params.service}}},{default:t(()=>[n(S,{title:x("services.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:t(()=>[e[19]||(e[19]=o()),c("div",M,[c("div",N,[n(y,{layout:"horizontal"},{title:t(()=>e[0]||(e[0]=[o(`
                  State
                `)])),body:t(()=>[n(_,{appearance:s.spec.state==="Available"?"success":"danger"},{default:t(()=>[o(i(s.spec.state),1)]),_:2},1032,["appearance"])]),_:2},1024),e[12]||(e[12]=o()),n(y,{layout:"horizontal"},{title:t(()=>e[2]||(e[2]=[o(`
                  Dataplane Proxies
                `)])),body:t(()=>{var a,d,u;return[o(i((a=s.status.dataplaneProxies)==null?void 0:a.connected)+" connected, "+i((d=s.status.dataplaneProxies)==null?void 0:d.healthy)+" healthy ("+i((u=s.status.dataplaneProxies)==null?void 0:u.total)+` total)
                `,1)]}),_:2},1024),e[13]||(e[13]=o()),s.namespace?(p(),m(y,{key:0,layout:"horizontal"},{title:t(()=>e[4]||(e[4]=[o(`
                  Namespace
                `)])),body:t(()=>[o(i(s.namespace),1)]),_:2},1024)):g("",!0),e[14]||(e[14]=o()),B("use zones")&&s.zone?(p(),m(y,{key:1,layout:"horizontal"},{title:t(()=>e[6]||(e[6]=[o(`
                  Zone
                `)])),body:t(()=>[n(f,{to:{name:"zone-cp-detail-view",params:{zone:s.zone}}},{default:t(()=>[o(i(s.zone),1)]),_:2},1032,["to"])]),_:2},1024)):g("",!0),e[15]||(e[15]=o()),n(y,{layout:"horizontal"},{title:t(()=>e[8]||(e[8]=[o(`
                  Ports
                `)])),body:t(()=>[n(v,{type:"separated",truncate:""},{default:t(()=>[(p(!0),z(b,null,h(s.spec.ports,a=>(p(),m(R,{key:a.port,port:{...a,targetPort:void 0}},null,8,["port"]))),128))]),_:2},1024)]),_:2},1024),e[16]||(e[16]=o()),n(y,{layout:"horizontal"},{title:t(()=>e[10]||(e[10]=[o(`
                  Selector
                `)])),body:t(()=>[n(v,{type:"separated",truncate:""},{default:t(()=>[(p(!0),z(b,null,h(s.spec.selector.dataplaneTags,(a,d)=>(p(),m(_,{key:`${d}:${a}`,appearance:"info"},{default:t(()=>[o(i(d)+":"+i(a),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),e[18]||(e[18]=o()),c("div",null,[c("h3",null,i(x("services.routes.item.config")),1),e[17]||(e[17]=o()),c("div",$,[n(A,{resource:s.config,"is-searchable":"",query:r.params.codeSearch,"is-filter-mode":r.params.codeFilter,"is-reg-exp-mode":r.params.codeRegExp,onQueryChange:a=>r.update({codeSearch:a}),onFilterModeChange:a=>r.update({codeFilter:a}),onRegExpModeChange:a=>r.update({codeRegExp:a})},{default:t(({copy:a,copying:d})=>[d?(p(),m(V,{key:0,src:`/meshes/${r.params.mesh}/mesh-service/${r.params.service}/as/kubernetes?no-store`,onChange:u=>{a(C=>C(u))},onError:u=>{a((C,F)=>F(u))}},null,8,["src","onChange","onError"])):g("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])])])]),_:2},1024)]),_:2},1032,["items","predicate"])]),_:1})}}});export{L as default};
