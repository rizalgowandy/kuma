(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wizard-mesh"],{"2fdb":function(e,t,a){"use strict";var n=a("5ca1"),r=a("d2c8"),i="includes";n(n.P+n.F*a("5147")(i),"String",{includes:function(e){return!!~r(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},4190:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wizard"},[a("div",{staticClass:"wizard__content"},[a("StepSkeleton",{attrs:{steps:e.steps,"advance-check":!0,"sidebar-content":e.sidebarContent,"footer-enabled":!1===e.hideScannerSiblings,"next-disabled":e.nextDisabled}},[a("template",{slot:"general"},[a("p",[e._v("\n          Welcome to the wizard for creating a new Mesh entity in Kuma.\n          We will be providing you with a few steps that will get you started.\n        ")]),a("p",[e._v("\n          As you know, the Kuma GUI is read-only, so at the end of this wizard\n          we will be generating the configuration that you can apply with either\n          "),a("code",[e._v("kubectl")]),e._v(" (if you are running in Kubernetes mode) or\n          kumactl / API (if you are running in Universal mode).\n        ")]),a("h3",[e._v("\n          To get started, please fill-in the following information:\n        ")]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Mesh Information","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Mesh name","for-attr":"mesh-name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshName,expression:"validate.meshName"}],staticClass:"k-input w-100",attrs:{id:"mesh-name",type:"text",placeholder:"your-mesh-name",required:""},domProps:{value:e.validate.meshName},on:{change:function(t){return e.updateStorage("meshName",t.target.value)},input:function(t){t.target.composing||e.$set(e.validate,"meshName",t.target.value)}}}),e.vmsg.meshName?a("KAlert",{attrs:{appearance:"danger",size:"small","alert-message":e.vmsg.meshName}}):e._e()],1),a("FormFragment",{attrs:{title:"Mutual TLS"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{ref:"mtlsDisabled",staticClass:"k-input mr-2",attrs:{value:"disabled",name:"mtls",type:"radio"},domProps:{checked:!1===e.formConditions.mtlsEnabled},on:{change:function(t){e.updateStorage("meshMtls",!1),e.formConditions.mtlsEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"mtls-enabled",value:"enabled",name:"mtls",type:"radio"},domProps:{checked:!0===e.formConditions.mtlsEnabled},on:{change:function(t){e.updateStorage("meshMtls",!0),e.updateStorage("meshCA","builtin"),e.formConditions.mtlsEnabled=!0}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.mtlsEnabled?a("FormFragment",{attrs:{title:"Certificate name"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"certificate-name",type:"text",placeholder:"your-certificate-name"},domProps:{value:e.getStorageItem("meshCAName")},on:{change:function(t){return e.updateStorage("meshCAName",t.target.value)}}})]):e._e(),!0===e.formConditions.mtlsEnabled?a("FormFragment",{attrs:{title:"Certificate Authority","for-attr":"certificate-authority"}},[a("select",{staticClass:"k-input w-100",attrs:{id:"certificate-authority",name:"certificate-authority"},on:{change:function(t){return e.updateStorage("meshCA",t.target.value)}}},[a("option",{attrs:{value:"builtin"},domProps:{selected:"builtin"===e.getStorageItem("meshCA")}},[e._v("\n                  builtin\n                ")]),a("option",{attrs:{value:"provided"},domProps:{selected:"provided"===e.getStorageItem("meshCA")}},[e._v("\n                  provided\n                ")]),a("option",{attrs:{value:"vault"},domProps:{selected:"vault"===e.getStorageItem("meshCA")}},[e._v("\n                  vault\n                ")])]),a("p",{staticClass:"help"},[e._v("\n                If you've enabled mTLS, you must select a CA.\n              ")])]):e._e()],1)],2)],1),a("template",{slot:"logging"},[a("h3",[e._v("\n          Setup Logging\n        ")]),a("p",[e._v('\n          You can setup as many logging backends as you need that you can later\n          use to log traffic via the "TrafficLog" policy. In this wizard,\n          we allow you to configure one backend, but you can add more manually\n          if you wish.\n        ')]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Logging Configuration","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Logging"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"logging-disabled",value:"disabled",name:"logging",type:"radio"},domProps:{checked:!1===e.formConditions.loggingEnabled},on:{change:function(t){e.updateStorage("meshLoggingStatus",!1),e.formConditions.loggingEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"logging-enabled",value:"enabled",name:"logging",type:"radio"},domProps:{checked:!0===e.formConditions.loggingEnabled},on:{change:function(t){e.updateStorage("meshLoggingStatus",!0),e.updateStorage("meshLoggingType","tcp"),e.formConditions.loggingEnabled=!0,e.formConditions.loggingType="tcp"}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.loggingEnabled?a("FormFragment",{attrs:{title:"Backend name"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"backend-name",type:"text",placeholder:"your-backend-name"},domProps:{value:e.getStorageItem("meshLoggingBackend")},on:{change:function(t){return e.updateStorage("meshLoggingBackend",t.target.value)}}})]):e._e(),!0===e.formConditions.loggingEnabled?a("div",[a("FormFragment",{attrs:{title:"Type"}},[a("select",{ref:"loggingTypeSelect",staticClass:"k-input w-100",attrs:{id:"logging-type",name:"logging-type"},on:{change:function(t){e.updateStorage("meshLoggingType",t.target.value),e.formConditions.loggingType=t.target.value}}},[a("option",{attrs:{value:"tcp"},domProps:{selected:"tcp"===e.getStorageItem("meshLoggingType")}},[e._v("\n                    TCP\n                  ")]),a("option",{attrs:{value:"file"},domProps:{selected:"file"===e.getStorageItem("meshLoggingType")}},[e._v("\n                    File\n                  ")])])]),"file"===e.formConditions.loggingType?a("FormFragment",{attrs:{title:"Path","for-attr":"backend-address"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"backend-address",type:"text"},domProps:{value:e.getStorageItem("meshLoggingPath")},on:{change:function(t){return e.updateStorage("meshLoggingPath",t.target.value)}}})]):e._e(),"tcp"===e.formConditions.loggingType?a("FormFragment",{attrs:{title:"Address","for-attr":"backend-address"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"backend-address",type:"text"},domProps:{value:e.getStorageItem("meshLoggingAddress")||"127.0.0.1:5000"},on:{change:function(t){return e.updateStorage("meshLoggingAddress",t.target.value)}}})]):e._e(),a("FormFragment",{attrs:{title:"Format","for-attr":"backend-format"}},[a("textarea",{staticClass:"k-input w-100 code-sample",attrs:{id:"backend-format",rows:"12"},on:{change:function(t){e.updateStorage("meshLoggingBackendFormat",t.target.value.trim())}}},[e._v('                  { "start_time": "%START_TIME%", "source": "%KUMA_SOURCE_SERVICE%", "destination": "%KUMA_DESTINATION_SERVICE%", "source_address": "%KUMA_SOURCE_ADDRESS_WITHOUT_PORT%", "destination_address": "%UPSTREAM_HOST%", "duration_millis": "%DURATION%", "bytes_received": "%BYTES_RECEIVED%", "bytes_sent": "%BYTES_SENT%" }\n                  ')])])],1):e._e()],1)],2)],1),a("template",{slot:"tracing"},[a("h3",[e._v("\n          Setup Tracing\n        ")]),a("p",[e._v('\n          You can setup as many tracing backends as you need that you can later\n          use to log traffic via the "TrafficTrace" policy. In this\n          wizard we allow you to configure one backend, but you can add more\n          manually as you wish.\n        ')]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Tracing Configuration","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Tracing"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"tracing-disabled",value:"disabled",name:"tracing",type:"radio"},domProps:{checked:!1===e.formConditions.tracingEnabled},on:{change:function(t){e.updateStorage("meshTracingStatus",!1),e.formConditions.tracingEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"tracing-enabled",value:"enabled",name:"tracing",type:"radio"},domProps:{checked:!0===e.formConditions.tracingEnabled},on:{change:function(t){e.updateStorage("meshTracingStatus",!0),e.updateStorage("meshTracingType","zipkin"),e.formConditions.tracingEnabled=!0}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"Backend name","for-attr":"tracing-backend-name"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"tracing-backend-name",type:"text",placeholder:"your-tracing-backend-name"},domProps:{value:e.getStorageItem("meshTracingBackend")},on:{change:function(t){return e.updateStorage("meshTracingBackend",t.target.value)}}})]):e._e(),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"Type","for-attr":"tracing-type"}},[a("select",{staticClass:"k-input w-100",attrs:{id:"tracing-type",name:"tracing-type"},on:{change:function(t){return e.updateStorage("meshTracingType",t.target.value)}}},[a("option",{attrs:{value:"zipkin"},domProps:{selected:"zipkin"===e.getStorageItem("meshTracingType")}},[e._v("\n                  Zipkin\n                ")])])]):e._e(),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"Sampling","for-attr":"tracing-sampling"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"tracing-sampling",type:"number",step:"0.1",min:"0",max:"100"},domProps:{value:e.getStorageItem("meshTracingSampling")||99.9},on:{change:function(t){return e.updateStorage("meshTracingSampling",t.target.value)}}})]):e._e(),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"URL","for-attr":"tracing-zipkin-url"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"tracing-zipkin-url",type:"text",placeholder:"your Zipkin URL"},domProps:{value:e.getStorageItem("meshTracingZipkinURL")},on:{change:function(t){return e.updateStorage("meshTracingZipkinURL",t.target.value)}}})]):e._e()],1)],2)],1),a("template",{slot:"metrics"},[a("h3",[e._v("\n          Setup Metrics\n        ")]),a("p",[e._v("\n          You can expose metrics from every data-plane on a configurable path\n          and port that a metrics service, like Prometheus, can use to fetch them.\n        ")]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Metrics Configuration","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Metrics"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"metrics-disabled",value:"disabled",name:"metrics",type:"radio"},domProps:{checked:!1===e.formConditions.metricsEnabled},on:{change:function(t){e.updateStorage("meshMetricsStatus",!1),e.formConditions.metricsEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"metrics-enabled",value:"enabled",name:"metrics",type:"radio"},domProps:{checked:!0===e.formConditions.metricsEnabled},on:{change:function(t){e.updateStorage("meshMetricsStatus",!0),e.updateStorage("meshMetricsType","prometheus"),e.formConditions.metricsEnabled=!0}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Backend name"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"metrics-name",type:"text",placeholder:"your-metrics-backend-name"},domProps:{value:e.getStorageItem("meshMetricsName")},on:{change:function(t){return e.updateStorage("meshMetricsName",t.target.value)}}})]):e._e(),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Type","for-attr":"metrics-type"}},[a("select",{staticClass:"k-input w-100",attrs:{id:"metrics-type",name:"metrics-type"},on:{change:function(t){return e.updateStorage("meshMetricsType",t.target.value)}}},[a("option",{attrs:{value:"prometheus"},domProps:{selected:"prometheus"===e.getStorageItem("meshMetricsType")}},[e._v("\n                  Prometheus\n                ")])])]):e._e(),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Dataplane port","for-attr":"metrics-dataplane-port"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"metrics-dataplane-port",type:"number",step:"1",min:"0",max:"65535",placeholder:"1234"},domProps:{value:e.getStorageItem("meshMetricsDataplanePort")||"5670"},on:{change:function(t){return e.updateStorage("meshMetricsDataplanePort",t.target.value)}}})]):e._e(),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Dataplane path","for-attr":"metrics-dataplane-path"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"metrics-dataplane-path",type:"text"},domProps:{value:e.getStorageItem("meshMetricsDataplanePath")||"/metrics"},on:{change:function(t){return e.updateStorage("meshMetricsDataplanePath",t.target.value)}}})]):e._e()],1)],2)],1),a("template",{slot:"complete"},[e.codeOutput?a("div",[!1===e.hideScannerSiblings?a("div",[a("h3",[e._v("\n              Install a new Mesh\n            ")]),a("p",[e._v("\n              Since the Kuma GUI is read-only mode to follow Ops best practices,\n              please execute the following command in your shell to create the entity.\n              Kuma will automatically detect when the new entity has been created.\n            ")]),a("Tabs",{attrs:{loaders:!1,tabs:e.tabs,"has-border":!0,"initial-tab-override":e.environment}},[a("template",{slot:"kubernetes"},[a("CodeView",{attrs:{title:"Kubernetes","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.codeOutput}})],1),a("template",{slot:"universal"},[a("CodeView",{attrs:{title:"Universal","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.codeOutput}})],1)],2)],1):e._e(),a("Scanner",{attrs:{"loader-function":e.scanForEntity,"should-start":!0,"has-error":e.scanError,"can-complete":e.scanFound},on:{hideSiblings:e.hideSiblings}},[a("template",{slot:"loading-title"},[a("h3",[e._v("Searching…")])]),a("template",{slot:"loading-content"},[a("p",[e._v("We are looking for your mesh.")])]),a("template",{slot:"complete-title"},[a("h3",[e._v("Done!")])]),a("template",{slot:"complete-content"},[a("p",[e._v("\n                Your Mesh "),e.formData.meshName?a("strong",[e._v(e._s(e.formData.meshName))]):e._e(),e._v(" was found!\n              ")]),a("p",[a("KButton",{attrs:{appearance:"primary",to:{name:"all-meshes"}}},[e._v("\n                  See Meshes\n                ")])],1)]),a("template",{slot:"error-title"},[a("h3",[e._v("Mesh not found")])]),a("template",{slot:"error-content"},[a("p",[e._v("We were unable to find your mesh.")])])],2)],1):a("KAlert",{attrs:{appearance:"danger"}},[a("template",{slot:"alertMessage"},[a("p",[e._v("\n              You haven't filled any data out yet! Please return to the first\n              step and fill out your information.\n            ")])])],2)],1),a("template",{slot:"mesh"},[a("h3",[e._v("Mesh")]),a("p",[e._v("\n          In "+e._s(e.title)+", a Mesh entity allows you to define an isolated environment\n          for your data-planes and policies. It's isolated because the mTLS CA\n          you choose can be different from the one configured for our Meshes.\n          Ideally, you will have either a large Mesh with all the workloads, or\n          one Mesh per application for better isolation.\n        ")]),a("p",[a("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/policies/mesh/",target:"_blank"}},[e._v("\n            Learn More\n          ")])])]),a("template",{slot:"did-you-know"},[a("h3",[e._v("Did You Know?")]),a("p",[e._v("\n          As you know, the GUI is read-only, but it will be providing instructions\n          to create a new Mesh and verify everything worked well.\n        ")])])],2)],1)])},r=[],i=(a("8e6e"),a("456d"),a("7f7f"),a("ffc1"),a("ac6a"),a("bd86")),s=a("2f62"),o=a("590e"),l=a("cfb0"),c=a("ad2f"),d=a("2791"),m=a("251b"),u=a("4c4d"),g=a("12d5"),p=a("c3b5"),h=a("d465"),f=a.n(h);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={name:"MeshWizard",metaInfo:{title:"Create a new Mesh"},components:{FormFragment:d["a"],Tabs:m["a"],StepSkeleton:u["a"],CodeView:g["a"],Scanner:p["a"]},mixins:[c["a"],l["a"]],data:function(){return{schema:f.a,steps:[{label:"General & Security",slug:"general"},{label:"Logging",slug:"logging"},{label:"Tracing",slug:"tracing"},{label:"Metrics",slug:"metrics"},{label:"Install",slug:"complete"}],tabs:[{hash:"#kubernetes",title:"Kubernetes"},{hash:"#universal",title:"Universal"}],sidebarContent:[{name:"mesh"},{name:"did-you-know"}],formConditions:{mtlsEnabled:!1,loggingEnabled:!1,tracingEnabled:!1,metricsEnabled:!1,loggingType:null},startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,nextDisabled:!0,validate:{meshName:"",meshLoggingBackend:""},vmsg:[]}},computed:v({},Object(s["b"])({title:"getTagline",version:"getVersion",environment:"getEnvironment",formData:"getStoredWizardData",selectedTab:"getSelectedTab"}),{getCleanMeshName:function(){var e=this.$store.getters.getStoredWizardData;return e?e.meshName:null},codeOutput:function(){var e=this,t=this.schema,a=Object.assign({},t),n=this.formData;if(n){var r=n.meshMtls||!1,i=n.meshLoggingStatus||!1,s=n.meshTracingStatus||!1,l=n.meshMetricsStatus||!1,c={mtls:r,logging:i,tracing:s,metrics:l},d=[];if(Object.entries(c).forEach((function(e){var t=e[1],a=e[0];t?d.filter((function(e){return e!==a})):d.push(a)})),r){a.mtls.enabled=!0;var m=a.mtls,u=this.formData.meshCA,g=this.formData.meshCAName;m.backends=[],m.enabledBackend=g,m.backends="provided"===u?[{name:g,type:u,conf:{cert:{secret:""},key:{secret:""}}}]:[{name:g,type:u}]}if(i){var p=a.logging.backends[0],h=p.format;p.conf={},p.name=n.meshLoggingBackend,p.type=n.meshLoggingType,p.format=n.meshLoggingBackendFormat||h,"tcp"===n.meshLoggingType?p.conf.address=n.meshLoggingAddress||"127.0.0.1:5000":"file"===n.meshLoggingType&&(p.conf.path=n.meshLoggingPath)}if(s){var f=a.tracing;f.backends[0].conf={},f.defaultBackend=n.meshTracingBackend,f.backends[0].type=n.meshTracingType||"zipkin",f.backends[0].name=n.meshTracingBackend,f.backends[0].conf.sampling=n.meshTracingSampling||100,f.backends[0].conf.url=n.meshTracingZipkinURL}if(l){var b=a.metrics;b.backends[0].conf={},b.enabledBackend=n.meshMetricsName,b.backends[0].type=n.meshMetricsType||"prometheus",b.backends[0].name=n.meshMetricsName,b.backends[0].conf.port=n.meshMetricsDataplanePort||5670,b.backends[0].conf.path=n.meshMetricsDataplanePath||"/metrics"}var y,S=Object(o["a"])(a,d);y="#kubernetes"===this.selectedTab?{apiVersion:"kuma.io/v1alpha1",kind:"Mesh",metadata:{name:n.meshName}}:{type:"Mesh",name:n.meshName};var k=v({},y,{},S),C=function(){return"#kubernetes"===e.selectedTab?e.formatForCLI(k,'" | kubectl apply -f -'):e.formatForCLI(k,'" | kumactl apply -f -')};return C()}}}),watch:{"validate.meshName":function(e){this.validate.meshName=e,this.validateMeshName(e)}},mounted:function(){this.$store.dispatch("updateSelectedTab","#".concat(this.environment))},methods:{hideSiblings:function(){this.hideScannerSiblings=!0},validateMeshName:function(e){e&&""!==e?(this.vmsg.meshName="",this.nextDisabled=!1):(this.vmsg.meshName="A Mesh name is required to proceed",this.nextDisabled=!0)},scanForEntity:function(){var e=this,t=this.$store.getters.getStoredWizardData.meshName;this.scanComplete=!1,this.scanError=!1,t&&this.$api.getMesh(t).then((function(t){t&&t.name.length>0?(e.isRunning=!0,e.scanFound=!0):e.scanError=!0})).catch((function(t){e.scanError=!0,console.error(t)})).finally((function(){e.scanComplete=!0}))}}},S=y,k=a("2877"),C=Object(k["a"])(S,n,r,!1,null,null,null);t["default"]=C.exports},"42e1":function(e,t,a){"use strict";var n=a("7249"),r=a.n(n);r.a},5147:function(e,t,a){var n=a("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},"590e":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("bd86");a("6762"),a("2fdb"),a("ac6a"),a("456d");function r(e,t){return Object.keys(e).filter((function(e){return!t.includes(e)})).map((function(t){return Object.assign({},Object(n["a"])({},t,e[t]))})).reduce((function(e,t){return Object.assign(e,t)}),{})}},6762:function(e,t,a){"use strict";var n=a("5ca1"),r=a("c366")(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},7249:function(e,t,a){},"8a1f":function(e,t,a){"use strict";var n=a("f576"),r=a.n(n);r.a},a3e8:function(e,t,a){},c3b5:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.shouldStart?a("div",{staticClass:"scanner"},[a("div",{staticClass:"scanner-content"},[a("KEmptyState",{attrs:{"cta-is-hidden":""}},[a("template",{slot:"title"},[e.isRunning?a("div",{staticClass:"card-icon mb-3"},[a("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1):e._e(),e.isComplete&&!1===e.hasError&&!1===e.isRunning?a("div",{staticClass:"card-icon mb-3"},[a("IconSuccess")],1):e._e(),e.isRunning?e._t("loading-title"):e._e(),!1===e.isRunning?a("div",[e.hasError?e._t("error-title"):e._e(),e.isComplete&&!1===e.hasError?e._t("complete-title"):e._e()],2):e._e()],2),a("template",{slot:"message"},[e.isRunning?e._t("loading-content"):e._e(),!1===e.isRunning?a("div",[e.hasError?e._t("error-content"):e._e(),e.isComplete&&!1===e.hasError?e._t("complete-content"):e._e()],2):e._e()],2)],2)],1)]):e._e()},r=[],i=(a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i",{staticClass:"card-icon icon-success mb-3",attrs:{role:"img"}},[e._v("\n  ✓\n")])}),s=[],o={},l=o,c=(a("8a1f"),a("2877")),d=Object(c["a"])(l,i,s,!1,null,"c70a6732",null),m=d.exports,u={name:"Scanner",components:{IconSuccess:m},props:{interval:{type:Number,required:!1,default:1e3},retries:{type:Number,required:!1,default:3600},shouldStart:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},loaderFunction:{type:Function,required:!0},canComplete:{type:Boolean,default:!1}},data:function(){return{i:0,isRunning:!1,isComplete:!1,intervalId:null}},watch:{shouldStart:function(e,t){e!==t&&!0===e&&this.runScanner()}},mounted:function(){!0===this.shouldStart&&this.runScanner()},beforeDestroy:function(){clearInterval(this.intervalId)},methods:{runScanner:function(){var e=this;this.isRunning=!0,this.isComplete=!1,this.intervalId=setInterval((function(){e.i++,e.loaderFunction(),e.i!==e.retries&&!0!==e.canComplete||(clearInterval(e.intervalId),e.isRunning=!1,e.isComplete=!0,e.$emit("hideSiblings",!0))}),this.interval)}}},g=u,p=(a("d929"),a("42e1"),Object(c["a"])(g,n,r,!1,null,"3bf16e1f",null));t["a"]=p.exports},d2c8:function(e,t,a){var n=a("aae3"),r=a("be13");e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},d465:function(e,t){e.exports={mtls:{enabledBackend:null,backends:[]},tracing:{defaultBackend:null,backends:[{name:null,type:null}]},logging:{backends:[{name:null,format:'{ "destination": "%KUMA_DESTINATION_SERVICE%", "destinationAddress": "%UPSTREAM_LOCAL_ADDRESS%", "source": "%KUMA_SOURCE_SERVICE%", "sourceAddress": "%KUMA_SOURCE_ADDRESS%", "bytesReceived": "%BYTES_RECEIVED%", "bytesSent": "%BYTES_SENT%"}',type:null}]},metrics:{enabledBackend:null,backends:[{name:null,type:null}]}}},d929:function(e,t,a){"use strict";var n=a("a3e8"),r=a.n(n);r.a},f576:function(e,t,a){},ffc1:function(e,t,a){var n=a("5ca1"),r=a("504c")(!0);n(n.S,"Object",{entries:function(e){return r(e)}})}}]);