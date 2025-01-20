import{d as w,r as m,o as c,c as $,a as v,b as r,w as n,e,t as f,n as R,_ as M,h as O,f as C,g as V,i as X,u as I,j as z,k as T,l as s,m as i,p as h,q as g,s as U,v as D}from"./index-Ch1waQC_.js";const L=""+new URL("product-logo-CDoXkXpC.png",import.meta.url).href,B={class:"app-navigator"},K=w({__name:"AppNavigator",props:{active:{type:Boolean,default:!1},label:{default:""},to:{default:()=>({})}},setup(u){const o=u;return(_,a)=>{const l=m("XAction");return c(),$("li",B,[v(_.$slots,"default",{},()=>[r(l,{class:R({"is-active":o.active}),to:o.to},{default:n(()=>[e(f(o.label),1)]),_:1},8,["class","to"])],!0)])}}}),b=M(K,[["__scopeId","data-v-07bb7885"]]),G=w({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const u={ref:"_"};for(const o in this.$props)u[O(o)]=this.$props[o];return C("span",[V(this.$slots,"default")?C("a",u,this.$slots.default()):C("a",u)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){if(this.$el.lastChild!==this.$refs._)return;const u=this.$el.appendChild(document.createElement("span")),o=this;X(()=>import("./buttons.esm-DK2fWHEW.js"),[],import.meta.url).then(function(_){o.$el.lastChild===u&&_.render(u.appendChild(o.$refs._),function(a){o.$el.lastChild===u&&u.parentNode.replaceChild(a,u)})})},reset:function(){this.$refs._!=null&&this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),P={class:"application-shell"},H={role:"banner"},Y={class:"horizontal-list"},q={class:"upgrade-check-wrapper"},x={class:"alert-content"},Z={class:"horizontal-list"},j={class:"app-status app-status--mobile"},F={class:"app-status app-status--desktop"},J={class:"app-content-container"},Q={class:"app-sidebar"},W={"aria-label":"Main"},tt={key:0},et={key:1,role:"separator",class:"navigation-separator"},nt={key:2},ot={class:"app-main-content"},at={class:"app-notifications"},st=["innerHTML"],it=w({__name:"ApplicationShell",setup(u){const o=I(),_=z(),{t:a}=T();return(l,t)=>{const d=m("XTeleportSlot"),p=m("XAction"),S=m("XAlert"),A=m("DataSource"),y=m("XPop"),E=m("XIcon"),N=m("XActionGroup");return c(),$("div",P,[r(d,{name:"modal-layer"}),t[24]||(t[24]=e()),s("header",H,[s("div",Y,[v(l.$slots,"header",{},()=>[r(p,{to:{name:"home"}},{default:n(()=>[v(l.$slots,"home",{},void 0,!0)]),_:3}),t[3]||(t[3]=e()),r(i(G),{class:"gh-star",href:"https://github.com/kumahq/kuma","aria-label":"Star kumahq/kuma on GitHub"},{default:n(()=>t[0]||(t[0]=[e(`
            Star
          `)])),_:1}),t[4]||(t[4]=e()),s("div",q,[r(A,{src:"/control-plane/version/latest"},{default:n(({data:k})=>[k&&i(o)("KUMA_VERSION")!==k.version?(c(),h(S,{key:0,class:"upgrade-alert","data-testid":"upgrade-check",appearance:"info"},{default:n(()=>[s("div",x,[s("p",null,f(i(a)("common.product.name"))+` update available
                  `,1),t[2]||(t[2]=e()),r(p,{appearance:"primary",href:i(a)("common.product.href.install")},{default:n(()=>t[1]||(t[1]=[e(`
                    Update
                  `)])),_:1},8,["href"])])]),_:1})):g("",!0)]),_:1})])],!0)]),t[18]||(t[18]=e()),s("div",Z,[v(l.$slots,"content-info",{},()=>[s("div",j,[r(y,{width:"280"},{content:n(()=>[s("p",null,[e(f(i(a)("common.product.name"))+" ",1),s("b",null,f(i(o)("KUMA_VERSION")),1),t[6]||(t[6]=e(" on ")),s("b",null,f(i(a)(`common.product.environment.${i(o)("KUMA_ENVIRONMENT")}`)),1),e(" ("+f(i(a)(`common.product.mode.${i(o)("KUMA_MODE")}`))+`)
                `,1)])]),default:n(()=>[r(p,{appearance:"tertiary"},{default:n(()=>t[5]||(t[5]=[e(`
                Info
              `)])),_:1}),t[7]||(t[7]=e())]),_:1})]),t[16]||(t[16]=e()),s("p",F,[e(f(i(a)("common.product.name"))+" ",1),s("b",null,f(i(o)("KUMA_VERSION")),1),t[8]||(t[8]=e(" on ")),s("b",null,f(i(a)(`common.product.environment.${i(o)("KUMA_ENVIRONMENT")}`)),1),e(" ("+f(i(a)(`common.product.mode.${i(o)("KUMA_MODE")}`))+`)
          `,1)]),t[17]||(t[17]=e()),r(N,null,{control:n(()=>[r(p,{appearance:"tertiary"},{default:n(()=>[r(E,{name:"help"},{default:n(()=>t[9]||(t[9]=[e(`
                  Help
                `)])),_:1})]),_:1})]),default:n(()=>[t[13]||(t[13]=e()),r(p,{href:i(a)("common.product.href.docs.index"),target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[10]||(t[10]=[e(`
              Documentation
            `)])),_:1},8,["href"]),t[14]||(t[14]=e()),r(p,{href:i(a)("common.product.href.feedback"),target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[11]||(t[11]=[e(`
              Feedback
            `)])),_:1},8,["href"]),t[15]||(t[15]=e()),r(p,{to:{name:"onboarding-welcome-view"},target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[12]||(t[12]=[e(`
              Onboarding
            `)])),_:1})]),_:1})],!0)])]),t[25]||(t[25]=e()),s("div",J,[s("div",Q,[s("nav",W,[l.$slots.navigation?(c(),$("ul",tt,[v(l.$slots,"navigation",{},void 0,!0)])):g("",!0),t[19]||(t[19]=e()),l.$slots.navigation&&l.$slots.bottomNavigation?(c(),$("div",et)):g("",!0),t[20]||(t[20]=e()),l.$slots.bottomNavigation?(c(),$("ul",nt,[v(l.$slots,"bottomNavigation",{},void 0,!0)])):g("",!0)])]),t[23]||(t[23]=e()),s("main",ot,[s("div",at,[v(l.$slots,"notifications",{},void 0,!0),t[21]||(t[21]=e()),i(_)("use state")?g("",!0):(c(),h(S,{key:0,class:"mb-4",appearance:"warning"},{default:n(()=>[s("ul",null,[s("li",{"data-testid":"warning-GLOBAL_STORE_TYPE_MEMORY",innerHTML:i(a)("common.warnings.GLOBAL_STORE_TYPE_MEMORY")},null,8,st)])]),_:1}))]),t[22]||(t[22]=e()),v(l.$slots,"default",{},void 0,!0)])])])}}}),rt=M(it,[["__scopeId","data-v-18bc3be2"]]),lt=["alt"],dt=w({__name:"App",setup(u){var l;const o=U(),_=((l=o.getRoutes().find(t=>t.name==="app"))==null?void 0:l.children.map(t=>(t.name=String(t.name),t)))??[],a=D({name:""});return o.afterEach(()=>{const t=o.currentRoute.value.matched.map(p=>p.name),d=_.find(p=>t.includes(p.name));d&&d.name!==a.value.name&&(a.value=d)}),(t,d)=>{const p=m("RouterView"),S=m("AppView"),A=m("RouteView"),y=m("DataSource");return c(),h(y,{src:"/control-plane/addresses"},{default:n(({data:E})=>[typeof E<"u"?(c(),h(A,{key:0,name:"app",attrs:{class:"kuma-ready"},"data-testid-root":"mesh-app"},{default:n(({t:N,can:k})=>[r(rt,{class:"kuma-application"},{home:n(()=>[s("img",{class:"logo",src:L,alt:`${N("common.product.name")} Logo`,"data-testid":"logo"},null,8,lt)]),navigation:n(()=>[r(b,{"data-testid":"control-planes-navigator",active:a.value.name==="home",label:"Home",to:{name:"home"},style:{"--icon":"var(--icon-home)"}},null,8,["active"]),d[0]||(d[0]=e()),k("use zones")?(c(),h(b,{key:0,"data-testid":"zones-navigator",active:a.value.name==="zone-index-view",label:"Zones",to:{name:"zone-index-view"},style:{"--icon":"var(--icon-zones)"}},null,8,["active"])):(c(),h(b,{key:1,"data-testid":"zone-egresses-navigator",active:a.value.name==="zone-egress-index-view",label:"Zone Egresses",to:{name:"zone-egress-list-view"},style:{"--icon":"var(--icon-zone-egresses)"}},null,8,["active"])),d[1]||(d[1]=e()),r(b,{active:a.value.name==="mesh-index-view","data-testid":"meshes-navigator",label:"Meshes",to:{name:"mesh-index-view"},style:{"--icon":"var(--icon-meshes)"}},null,8,["active"])]),bottomNavigation:n(()=>[r(b,{active:a.value.name==="configuration-view","data-testid":"configuration-navigator",label:"Configuration",to:{name:"configuration-view"},style:{"--icon":"var(--icon-configuration)"}},null,8,["active"])]),default:n(()=>[d[2]||(d[2]=e()),d[3]||(d[3]=e()),d[4]||(d[4]=e()),r(S,null,{default:n(()=>[r(p)]),_:1})]),_:2},1024)]),_:1})):g("",!0)]),_:1})}}}),pt=M(dt,[["__scopeId","data-v-995a408f"]]);export{pt as default};
