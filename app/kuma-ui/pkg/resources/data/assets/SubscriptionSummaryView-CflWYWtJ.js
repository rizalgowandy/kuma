import{d as R,r as o,o as p,p as d,w as e,b as a,l as S,t as u,e as i,R as A,K as D,F as X,a as g}from"./index-B5ZV0Dbw.js";const x=R({__name:"SubscriptionSummaryView",props:{data:{},routeName:{}},setup(m){const c=m;return(_,s)=>{const f=o("XAction"),V=o("XTabs"),b=o("RouterView"),w=o("AppView"),C=o("DataCollection"),I=o("RouteView");return p(),d(I,{name:c.routeName,params:{subscription:""}},{default:e(({route:r,t:N})=>[a(C,{items:c.data,predicate:t=>t.id===r.params.subscription},{item:e(({item:t})=>[a(w,null,{title:e(()=>[S("h2",null,u(t.zoneInstanceId??t.globalInstanceId??t.controlPlaneInstanceId),1)]),default:e(()=>{var l;return[s[0]||(s[0]=i()),a(V,{selected:(l=r.child())==null?void 0:l.name},A({_:2},[D(r.children,({name:n})=>({name:`${n}-tab`,fn:e(()=>[a(f,{to:{name:n}},{default:e(()=>[i(u(N(`subscriptions.routes.item.navigation.${n}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),s[1]||(s[1]=i()),a(b,null,{default:e(({Component:n})=>[(p(),d(X(n),{data:t},{default:e(()=>[g(_.$slots,"default")]),_:2},1032,["data"]))]),_:2},1024)]}),_:2},1024)]),_:2},1032,["items","predicate"])]),_:3},8,["name"])}}});export{x as default};
