import{d as E,r as o,o as V,p as h,w as t,b as a,e as d,m as R,as as w}from"./index-Ch1waQC_.js";const z=E({__name:"ZoneEgressXdsConfigView",setup(X){return(k,s)=>{const r=o("RouteTitle"),l=o("XCheckbox"),i=o("XAction"),c=o("XCodeBlock"),p=o("DataLoader"),m=o("XCard"),u=o("AppView"),g=o("RouteView");return V(),h(g,{name:"zone-egress-xds-config-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,includeEds:!1}},{default:t(({route:e,t:_,uri:f})=>[a(r,{render:!1,title:_("zone-egresses.routes.item.navigation.zone-egress-xds-config-view")},null,8,["title"]),s[2]||(s[2]=d()),a(u,null,{default:t(()=>[a(m,null,{default:t(()=>[a(p,{src:f(R(w),"/zone-egresses/:name/xds/:endpoints",{name:e.params.zoneEgress,endpoints:String(e.params.includeEds)})},{default:t(({data:C,refresh:x})=>[a(c,{language:"json",code:JSON.stringify(C,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:n=>e.update({codeSearch:n}),onFilterModeChange:n=>e.update({codeFilter:n}),onRegExpModeChange:n=>e.update({codeRegExp:n})},{"primary-actions":t(()=>[a(l,{modelValue:e.params.includeEds,"onUpdate:modelValue":n=>e.params.includeEds=n,label:"Include Endpoints"},null,8,["modelValue","onUpdate:modelValue"]),s[1]||(s[1]=d()),a(i,{action:"refresh",appearance:"primary",onClick:x},{default:t(()=>s[0]||(s[0]=[d(`
                Refresh
              `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{z as default};
