import{d as E,r as a,o as R,p as X,w as t,b as o,e as d,m as k,$ as w}from"./index-Ch1waQC_.js";const F=E({__name:"ConnectionsXdsConfigView",props:{routeName:{}},setup(l){const p=l;return(y,s)=>{const r=a("RouteTitle"),c=a("XCheckbox"),i=a("XAction"),m=a("XCodeBlock"),u=a("DataLoader"),_=a("XCard"),f=a("AppView"),g=a("RouteView");return R(),X(g,{name:p.routeName,params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,includeEds:!1}},{default:t(({route:e,t:C,uri:h})=>[o(r,{render:!1,title:C("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"]),s[2]||(s[2]=d()),o(f,null,{default:t(()=>[o(_,null,{default:t(()=>[o(u,{src:h(k(w),"/meshes/:mesh/dataplanes/:name/xds/:endpoints",{mesh:e.params.mesh,name:e.params.dataPlane,endpoints:String(e.params.includeEds)})},{default:t(({data:x,refresh:V})=>[o(m,{language:"json",code:JSON.stringify(x,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:n=>e.update({codeSearch:n}),onFilterModeChange:n=>e.update({codeFilter:n}),onRegExpModeChange:n=>e.update({codeRegExp:n})},{"primary-actions":t(()=>[o(c,{modelValue:e.params.includeEds,"onUpdate:modelValue":n=>e.params.includeEds=n,label:"Include Endpoints"},null,8,["modelValue","onUpdate:modelValue"]),s[1]||(s[1]=d()),o(i,{action:"refresh",appearance:"primary",onClick:V},{default:t(()=>s[0]||(s[0]=[d(`
                Refresh
              `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1},8,["name"])}}});export{F as default};
