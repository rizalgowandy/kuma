import{d as z,v as G,r as o,o as d,p as b,w as t,b as a,m as P,Y as S,R as A,e as n,l as f,Z as H,c as w,J as C,K as y,t as h,q as x,F as Q,_ as W}from"./index-Ch1waQC_.js";const ee=["onSubmit"],te=["disabled"],ae={key:0},oe={key:0},ne=z({__name:"DataPlaneDetailTabsView",props:{mesh:{}},setup(N){const U=N,s=G({eds:!1,xds:!0,clusters:!0,stats:!0,dataplane:!0,policies:!0}),E=k=>async e=>{const p=document.createElement("a");p.download=e.name,p.href=e.url,setTimeout(()=>{window.URL.revokeObjectURL(p.href)},6e4),await Promise.resolve(),p.click(),await Promise.resolve(),k()};return(k,e)=>{const p=o("RouteTitle"),I=o("XCopyButton"),X=o("XAction"),D=o("XI18n"),T=o("XCheckbox"),M=o("XAlert"),R=o("DataLoader"),O=o("XLayout"),$=o("XModal"),g=o("XDisclosure"),j=o("XTeleportTemplate"),F=o("XTabs"),J=o("RouterView"),q=o("AppView"),K=o("DataSource"),Y=o("RouteView");return d(),b(Y,{name:"data-plane-detail-tabs-view",params:{mesh:"",dataPlane:""}},{default:t(({route:l,t:i,uri:B})=>[a(K,{src:B(P(S),"/meshes/:mesh/dataplane-overviews/:name",{mesh:l.params.mesh,name:l.params.dataPlane})},{default:t(({data:m,error:Z})=>[a(q,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:l.params.mesh}},text:l.params.mesh},{to:{name:"data-plane-list-view",params:{mesh:l.params.mesh}},text:i("data-planes.routes.item.breadcrumbs")}]},A({actions:t(()=>[a(g,null,{default:t(({expanded:v,toggle:r})=>[a(X,{appearance:"primary",onClick:r},{default:t(()=>e[1]||(e[1]=[n(`
              Download Bundle
            `)])),_:2},1032,["onClick"]),e[6]||(e[6]=n()),v?(d(),b(j,{key:0,to:{name:"modal-layer"}},{default:t(()=>[a(g,null,{default:t(({expanded:V,toggle:L})=>[f("form",{onSubmit:H(L,["prevent"])},[a($,{title:i("data-planes.routes.item.download.title"),onCancel:r},{"footer-actions":t(()=>[a(O,{type:"separated"},{default:t(()=>[(d(!0),w(C,null,y([E(r)],u=>(d(),b(R,{key:typeof u,variant:"spinner",src:V?B(P(S),"/meshes/:mesh/dataplanes/:name/as/tarball/:spec",{mesh:l.params.mesh,name:l.params.dataPlane,spec:JSON.stringify(s.value)},{cacheControl:"no-cache"}):"",onChange:u,onError:L},{error:t(()=>[a(M,{appearance:"warning","show-icon":""},{default:t(()=>[a(D,{t:"data-planes.routes.item.download.error"})]),_:1})]),_:2},1032,["src","onChange","onError"]))),128)),e[4]||(e[4]=n()),a(X,{appearance:"primary",type:"submit",disabled:V||Object.values(s.value).every(u=>!u)},{default:t(()=>[n(h(i("data-planes.routes.item.download.action")),1)]),_:2},1032,["disabled"])]),_:2},1024)]),default:t(()=>[f("fieldset",{disabled:V},[a(D,{t:"data-planes.routes.item.download.description"}),e[3]||(e[3]=n()),f("ul",null,[(d(!0),w(C,null,y(s.value,(u,c)=>(d(),w(C,{key:typeof u},[c!=="eds"?(d(),w("li",ae,[a(T,{modelValue:s.value[c],"onUpdate:modelValue":_=>s.value[c]=_,onChange:_=>{c==="xds"&&!_&&(s.value.eds=!1)}},{default:t(()=>[n(h(i(`data-planes.routes.item.download.options.${c}`)),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),e[2]||(e[2]=n()),c==="xds"?(d(),w("ul",oe,[f("li",null,[a(T,{modelValue:s.value.eds,"onUpdate:modelValue":e[0]||(e[0]=_=>s.value.eds=_),disabled:!s.value.xds},{default:t(()=>[n(h(i("data-planes.routes.item.download.options.eds")),1)]),_:2},1032,["modelValue","disabled"])])])):x("",!0)])):x("",!0)],64))),128))])],8,te),e[5]||(e[5]=n())]),_:2},1032,["title","onCancel"])],40,ee)]),_:2},1024)]),_:2},1024)):x("",!0)]),_:2},1024)]),default:t(()=>[e[8]||(e[8]=n()),e[9]||(e[9]=n()),a(R,{data:[m],errors:[Z]},{default:t(()=>{var v;return[a(F,{selected:(v=l.child())==null?void 0:v.name},A({_:2},[y(l.children,({name:r})=>({name:`${r}-tab`,fn:t(()=>[a(X,{to:{name:r}},{default:t(()=>[n(h(i(`data-planes.routes.item.navigation.${r}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),e[7]||(e[7]=n()),a(J,null,{default:t(({Component:r})=>[(d(),b(Q(r),{data:m,networking:m==null?void 0:m.dataplane.networking,mesh:U.mesh},null,8,["data","networking","mesh"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},[m?{name:"title",fn:t(()=>[f("h1",null,[a(I,{text:m.name},{default:t(()=>[a(p,{title:i("data-planes.routes.item.title",{name:m.name})},null,8,["title"])]),_:2},1032,["text"])])]),key:"0"}:void 0]),1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}}),le=W(ne,[["__scopeId","data-v-4de50c17"]]);export{le as default};
