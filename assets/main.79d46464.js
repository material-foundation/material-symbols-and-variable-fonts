var L=Object.defineProperty;var y=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))R.call(e,r)&&g(t,r,e[r]);if(y)for(var r of y(e))w.call(e,r)&&g(t,r,e[r]);return t};import{$ as l,r as O,s as A,n as D}from"./vendor.8226bdf7.js";const T=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};T();const x="modulepreload",E={},V="/material-symbols-and-variable-fonts/",s=function(e,r){return!r||r.length===0?e():Promise.all(r.map(n=>{if(n=`${V}${n}`,n in E)return;E[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":x,o||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),o)return new Promise((p,u)=>{i.addEventListener("load",p),i.addEventListener("error",u)})})).then(()=>e())},d=new Map([["/steps/8",{render:({args:t,data:e})=>l`<root-component ><step-eight ></step-eight></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./8.0c07bb8d.js"),["assets/8.0c07bb8d.js","assets/vendor.8226bdf7.js","assets/slider-control.ab10962b.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/phone-mockup.fd2bfa1c.js","assets/optical.c848ff37.js","assets/utilities.ebb9f1dd.js","assets/tab-button.cfea5da5.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route10"}],["/steps/7",{render:({args:t,data:e})=>l`<root-component ><step-seven ></step-seven></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./7.4110bdca.js"),["assets/7.4110bdca.js","assets/vendor.8226bdf7.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/directive.9b57a945.js","assets/optical.c848ff37.js","assets/utilities.ebb9f1dd.js","assets/slider-control.ab10962b.js","assets/if-defined.2ec4fe38.js","assets/tab-button.cfea5da5.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route9"}],["/steps/6",{render:({args:t,data:e})=>l`<root-component ><step-six ></step-six></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./6.b10ce7a2.js"),["assets/6.b10ce7a2.js","assets/vendor.8226bdf7.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/directive.9b57a945.js","assets/utilities.ebb9f1dd.js","assets/tab-button.cfea5da5.js","assets/slider-control.ab10962b.js","assets/if-defined.2ec4fe38.js","assets/phone-mockup.fd2bfa1c.js","assets/width.75021a1a.js","assets/optical.bf2231f6.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route8"}],["/steps/5",{render:({args:t,data:e})=>l`<root-component ><step-five ></step-five></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./5.cf69ab05.js"),["assets/5.cf69ab05.js","assets/vendor.8226bdf7.js","assets/slider-control.ab10962b.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/optical.bf2231f6.js","assets/utilities.ebb9f1dd.js","assets/tab-button.cfea5da5.js","assets/phone-mockup.fd2bfa1c.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route7"}],["/steps/4",{render:({args:t,data:e})=>l`<root-component ><step-four ></step-four></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./4.5406cb52.js"),["assets/4.5406cb52.js","assets/vendor.8226bdf7.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/directive.9b57a945.js","assets/optical.bf2231f6.js","assets/utilities.ebb9f1dd.js","assets/slider-control.ab10962b.js","assets/if-defined.2ec4fe38.js","assets/tab-button.cfea5da5.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route6"}],["/steps/3",{render:({args:t,data:e})=>l`<root-component ><step-three ></step-three></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./3.6b6bb320.js"),["assets/3.6b6bb320.js","assets/vendor.8226bdf7.js","assets/slider-control.ab10962b.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/width.75021a1a.js","assets/utilities.ebb9f1dd.js","assets/phone-mockup.fd2bfa1c.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route5"}],["/steps/2",{render:({args:t,data:e})=>l`<root-component ><step-two ></step-two></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./2.ac3cd4af.js"),["assets/2.ac3cd4af.js","assets/vendor.8226bdf7.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/directive.9b57a945.js","assets/width.75021a1a.js","assets/utilities.ebb9f1dd.js","assets/slider-control.ab10962b.js","assets/if-defined.2ec4fe38.js","assets/tab-button.cfea5da5.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route4"}],["/steps/1",{render:({args:t,data:e})=>l`<root-component ><step-one ></step-one></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./1.23a7c9d1.js"),["assets/1.23a7c9d1.js","assets/vendor.8226bdf7.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/directive.9b57a945.js","assets/utilities.ebb9f1dd.js","assets/tab-button.cfea5da5.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route3"}],["/start",{render:({args:t,data:e})=>l`<root-component ><start-page ></start-page></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./start.5a518b70.js"),["assets/start.5a518b70.js","assets/vendor.8226bdf7.js","assets/next-button.1a74693d.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route2",parentRoute:""}],["/finish",{render:({args:t,data:e})=>l`<root-component ><finish-page ></finish-page></root-component>`,lazyImport:async()=>(await s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),s(()=>import("./finish.a4bfb111.js"),["assets/finish.a4bfb111.js","assets/vendor.8226bdf7.js","assets/step-layout.40e1b7fd.js","assets/next-button.1a74693d.js","assets/directive.9b57a945.js"])),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route0",parentRoute:""}],["",{render:({args:t,data:e})=>l`<root-component ></root-component>`,lazyImport:async()=>s(()=>import("./root.d4b6874f.js"),["assets/root.d4b6874f.js","assets/vendor.8226bdf7.js","assets/if-defined.2ec4fe38.js","assets/directive.9b57a945.js"]),dataLoader:()=>Promise.resolve(null),hasIndex:!1,name:"route1"}]]);async function z(t){const e=_(t);if(e){const r=b(t),n={};if(r==null?void 0:r.groups)for(const[u,c]of Object.entries(r.groups))u&&c&&(n[u]=c);const o={};o[t]=I(t,n);let a=e.parentRoute;for(;a!==void 0;){let u=a;if(r==null?void 0:r.groups)for(const[h,v]of Object.entries(r.groups))h&&v&&(u=u.replace(`:${h}`,v));const c=_(u,!1);c&&(o[u]=I(u,n,!1)),a=c==null?void 0:c.parentRoute}const p=(await Promise.all(Object.values(o))).reduce((u,c)=>c?m(m({},u),c):u,{});return e.render({route:t,args:n,data:p})}return null}async function I(t,e,r=!0){const n=_(t,r);if(n){const o=await n.lazyImport(),a=await n.dataLoader(o,t,e);return{[n.name]:a}}return{}}function _(t,e=!0){const r=d.get(t);if(r){if(r.hasIndex&&e){const n=d.get(`${t}/`);if(n)return n}return r}for(const[n,o]of d.entries())if(t.match(P(n))!==null)return o;return d.get("/404")}function P(t){const e="[a-zA-Z0-9_-]+",r=t.replace(new RegExp(`:(${e})`),n=>`(?<${n.slice(1)}>[a-zA-Z0-9_\\-.,:;+*^%$@!]+)`);return new RegExp(`^${r}$`)}function b(t){for(const e of Array.from(d.keys())){const r=t.match(P(e));if(r!==null)return r}return null}var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,N=(t,e,r,n)=>{for(var o=n>1?void 0:n?j(e,r):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&$(e,r,o),o};let f=class extends A{constructor(){super(...arguments);this.template=null}render(){return l` <main>${this.template||l`Loading...`}</main> `}async firstUpdated(){window.addEventListener("hashchange",()=>this.updateRoute()),this.updateRoute();const t=window.location.hash.slice(1);(t===""||t=="/")&&(window.location.hash="/start")}async updateRoute(){document.body.style.opacity="0";const t=window.location.hash.slice(1),e=await z(t);this.template=e,await new Promise(r=>setTimeout(r,150)),document.body.style.opacity="1",this.requestUpdate()}};f.styles=O`
    main {
      transition: opacity 0.3s ease-in-out;
    }
  `;f=N([D("generated-app")],f);