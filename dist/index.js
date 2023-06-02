"use strict";var e=require("react");function t(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var n=t(e);
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}var r;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));const o="popstate";function l(e){return void 0===e&&(e={}),function(e,t,n,l){void 0===l&&(l={});let{window:c=document.defaultView,v5Compat:d=!1}=l,p=c.history,h=r.Pop,f=null,v=g();null==v&&(v=0,p.replaceState(a({},p.state,{idx:v}),""));function g(){return(p.state||{idx:null}).idx}function E(){h=r.Pop;let e=g(),t=null==e?null:e-v;v=e,f&&f({action:h,location:w.location,delta:t})}function N(e,t){h=r.Push;let a=u(w.location,e,t);n&&n(a,e),v=g()+1;let o=i(a,v),l=w.createHref(a);try{p.pushState(o,"",l)}catch(e){c.location.assign(l)}d&&f&&f({action:h,location:w.location,delta:1})}function y(e,t){h=r.Replace;let a=u(w.location,e,t);n&&n(a,e),v=g();let o=i(a,v),l=w.createHref(a);p.replaceState(o,"",l),d&&f&&f({action:h,location:w.location,delta:0})}function b(e){let t="null"!==c.location.origin?c.location.origin:c.location.href,n="string"==typeof e?e:m(e);return s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let w={get action(){return h},get location(){return e(c,p)},listen(e){if(f)throw new Error("A history only accepts one active listener");return c.addEventListener(o,E),f=e,()=>{c.removeEventListener(o,E),f=null}},createHref:e=>t(c,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:N,replace:y,go:e=>p.go(e)};return w}((function(e,t){let{pathname:n,search:a,hash:r}=e.location;return u("",{pathname:n,search:a,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:m(t)}),null,e)}function s(e,t){if(!1===e||null==e)throw new Error(t)}function c(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function i(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,r){return void 0===n&&(n=null),a({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function m(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var p;function h(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}function f(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function v(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function g(e,t,n,r){let o;void 0===r&&(r=!1),"string"==typeof e?o=d(e):(o=a({},e),s(!o.pathname||!o.pathname.includes("?"),f("?","pathname","search",o)),s(!o.pathname||!o.pathname.includes("#"),f("#","pathname","hash",o)),s(!o.search||!o.search.includes("#"),f("#","search","hash",o)));let l,c=""===e||""===o.pathname,i=c?"/":o.pathname;if(r||null==i)l=n;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}l=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?d(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:N(a),hash:y(r)}}(o,l),m=i&&"/"!==i&&i.endsWith("/"),p=(c||"."===i)&&n.endsWith("/");return u.pathname.endsWith("/")||!m&&!p||(u.pathname+="/"),u}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(p||(p={}));const E=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",y=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */;const b="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:w,useEffect:C,useLayoutEffect:x,useDebugValue:k}=n;let R=!1,S=!1;function I(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!b(n,e)}catch(e){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;"useSyncExternalStore"in n&&n.useSyncExternalStore;const O=n.createContext(null);"production"!==process.env.NODE_ENV&&(O.displayName="DataRouter");const D=n.createContext(null);"production"!==process.env.NODE_ENV&&(D.displayName="DataRouterState");const L=n.createContext(null);"production"!==process.env.NODE_ENV&&(L.displayName="Await");const F=n.createContext(null);"production"!==process.env.NODE_ENV&&(F.displayName="Navigation");const A=n.createContext(null);"production"!==process.env.NODE_ENV&&(A.displayName="Location");const T=n.createContext({outlet:null,matches:[]});"production"!==process.env.NODE_ENV&&(T.displayName="Route");const B=n.createContext(null);function _(){return null!=n.useContext(A)}function $(){return _()||("production"!==process.env.NODE_ENV?s(!1,"useLocation() may be used only in the context of a <Router> component."):s(!1)),n.useContext(A).location}function U(){_()||("production"!==process.env.NODE_ENV?s(!1,"useNavigate() may be used only in the context of a <Router> component."):s(!1));let{basename:e,navigator:t}=n.useContext(F),{matches:a}=n.useContext(T),{pathname:r}=$(),o=JSON.stringify(v(a).map((e=>e.pathnameBase))),l=n.useRef(!1);return n.useEffect((()=>{l.current=!0})),n.useCallback((function(n,a){if(void 0===a&&(a={}),"production"!==process.env.NODE_ENV&&c(l.current,"You should call navigate() in a React.useEffect(), not when your component is first rendered."),!l.current)return;if("number"==typeof n)return void t.go(n);let s=g(n,JSON.parse(o),r,"path"===a.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:E([e,s.pathname])),(a.replace?t.replace:t.push)(s,a.state,a)}),[e,t,o,r])}function V(e,t){let{relative:a}=void 0===t?{}:t,{matches:r}=n.useContext(T),{pathname:o}=$(),l=JSON.stringify(v(r).map((e=>e.pathnameBase)));return n.useMemo((()=>g(e,JSON.parse(l),o,"path"===a)),[e,l,o,a])}var P,j,M;function z(e){let{to:t,replace:a,state:r,relative:o}=e;_()||("production"!==process.env.NODE_ENV?s(!1,"<Navigate> may be used only in the context of a <Router> component."):s(!1)),"production"!==process.env.NODE_ENV&&c(!n.useContext(F).static,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let l=n.useContext(D),i=U();return n.useEffect((()=>{l&&"idle"!==l.navigation.state||i(t,{replace:a,state:r,relative:o})})),null}function H(e){let{basename:t="/",children:a=null,location:o,navigationType:l=r.Pop,navigator:i,static:u=!1}=e;_()&&("production"!==process.env.NODE_ENV?s(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app."):s(!1));let m=t.replace(/^\/*/,"/"),p=n.useMemo((()=>({basename:m,navigator:i,static:u})),[m,i,u]);"string"==typeof o&&(o=d(o));let{pathname:f="/",search:v="",hash:g="",state:E=null,key:N="default"}=o,y=n.useMemo((()=>{let e=h(f,m);return null==e?null:{location:{pathname:e,search:v,hash:g,state:E,key:N},navigationType:l}}),[m,f,v,g,E,N,l]);return"production"!==process.env.NODE_ENV&&c(null!=y,'<Router basename="'+m+'"> is not able to match the URL "'+f+v+g+"\" because it does not start with the basename, so the <Router> won't render anything."),null==y?null:n.createElement(F.Provider,{value:p},n.createElement(A.Provider,{children:a,value:y}))}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}"production"!==process.env.NODE_ENV&&(B.displayName="RouteError"),function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(P||(P={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(j||(j={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(M||(M={})),new Promise((()=>{}));const q="get",J="application/x-www-form-urlencoded";function Y(e){return null!=e&&"string"==typeof e.tagName}function G(e,t,n){let a,r,o,l;if(Y(s=e)&&"form"===s.tagName.toLowerCase()){let s=n.submissionTrigger;a=n.method||e.getAttribute("method")||q,r=n.action||e.getAttribute("action")||t,o=n.encType||e.getAttribute("enctype")||J,l=new FormData(e),s&&s.name&&l.append(s.name,s.value)}else if(function(e){return Y(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Y(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let s=e.form;if(null==s)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');a=n.method||e.getAttribute("formmethod")||s.getAttribute("method")||q,r=n.action||e.getAttribute("formaction")||s.getAttribute("action")||t,o=n.encType||e.getAttribute("formenctype")||s.getAttribute("enctype")||J,l=new FormData(s),e.name&&l.append(e.name,e.value)}else{if(Y(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(a=n.method||q,r=n.action||t,o=n.encType||J,e instanceof FormData)l=e;else if(l=new FormData,e instanceof URLSearchParams)for(let[t,n]of e)l.append(t,n);else if(null!=e)for(let t of Object.keys(e))l.append(t,e[t])}var s;let{protocol:c,host:i}=window.location;return{url:new URL(r,c+"//"+i),method:a.toLowerCase(),encType:o,formData:l}}const Q=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],X=["aria-current","caseSensitive","className","end","style","to","children"],Z=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function ee(e){let{basename:t,children:a,window:r}=e,o=n.useRef();null==o.current&&(o.current=l({window:r,v5Compat:!0}));let s=o.current,[c,i]=n.useState({action:s.action,location:s.location});return n.useLayoutEffect((()=>s.listen(i)),[s]),n.createElement(H,{basename:t,children:a,location:c.location,navigationType:c.action,navigator:s})}process.env.NODE_ENV;const te="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ne=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=n.forwardRef((function(e,t){let a,{onClick:r,relative:o,reloadDocument:l,replace:c,state:i,target:u,to:d,preventScrollReset:p}=e,f=K(e,Q),{basename:v}=n.useContext(F),g=!1;if("string"==typeof d&&ne.test(d)&&(a=d,te)){let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=h(t.pathname,v);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:g=!0}let N=function(e,t){let{relative:a}=void 0===t?{}:t;_()||("production"!==process.env.NODE_ENV?s(!1,"useHref() may be used only in the context of a <Router> component."):s(!1));let{basename:r,navigator:o}=n.useContext(F),{hash:l,pathname:c,search:i}=V(e,{relative:a}),u=c;return"/"!==r&&(u="/"===c?r:E([r,c])),o.createHref({pathname:u,search:i,hash:l})}(d,{relative:o}),y=function(e,t){let{target:a,replace:r,state:o,preventScrollReset:l,relative:s}=void 0===t?{}:t,c=U(),i=$(),u=V(e,{relative:s});return n.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,a)){t.preventDefault();let n=void 0!==r?r:m(i)===m(u);c(e,{replace:n,state:o,preventScrollReset:l,relative:s})}}),[i,c,u,r,o,a,e,l,s])}(d,{replace:c,state:i,target:u,preventScrollReset:p,relative:o});return n.createElement("a",W({},f,{href:a||N,onClick:g||l?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:t,target:u}))}));"production"!==process.env.NODE_ENV&&(ae.displayName="Link");const re=n.forwardRef((function(e,t){let{"aria-current":a="page",caseSensitive:r=!1,className:o="",end:l=!1,style:s,to:c,children:i}=e,u=K(e,X),m=V(c,{relative:u.relative}),d=$(),p=n.useContext(D),{navigator:h}=n.useContext(F),f=h.encodeLocation?h.encodeLocation(m).pathname:m.pathname,v=d.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;r||(v=v.toLowerCase(),g=g?g.toLowerCase():null,f=f.toLowerCase());let E,N=v===f||!l&&v.startsWith(f)&&"/"===v.charAt(f.length),y=null!=g&&(g===f||!l&&g.startsWith(f)&&"/"===g.charAt(f.length)),b=N?a:void 0;E="function"==typeof o?o({isActive:N,isPending:y}):[o,N?"active":null,y?"pending":null].filter(Boolean).join(" ");let w="function"==typeof s?s({isActive:N,isPending:y}):s;return n.createElement(ae,W({},u,{"aria-current":b,className:E,ref:t,style:w,to:c}),"function"==typeof i?i({isActive:N,isPending:y}):i)}));"production"!==process.env.NODE_ENV&&(re.displayName="NavLink");const oe=n.forwardRef(((e,t)=>n.createElement(le,W({},e,{ref:t}))));"production"!==process.env.NODE_ENV&&(oe.displayName="Form");const le=n.forwardRef(((e,t)=>{let{reloadDocument:a,replace:r,method:o=q,action:l,onSubmit:c,fetcherKey:i,routeId:u,relative:m,preventScrollReset:d}=e,p=K(e,Z),h=function(e,t){let{router:a}=function(e){let t=n.useContext(O);return t||("production"!==process.env.NODE_ENV?s(!1,function(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}(e)):s(!1)),t}(se.UseSubmitImpl),r=ie();return n.useCallback((function(n,o){if(void 0===o&&(o={}),"undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:l,encType:c,formData:i,url:u}=G(n,r,o),m=u.pathname+u.search,d={replace:o.replace,preventScrollReset:o.preventScrollReset,formData:i,formMethod:l,formEncType:c};e?(null==t&&("production"!==process.env.NODE_ENV?s(!1,"No routeId available for useFetcher()"):s(!1)),a.fetch(e,t,m,d)):a.navigate(m,d)}),[r,a,e,t])}(i,u),f="get"===o.toLowerCase()?"get":"post",v=ie(l,{relative:m});return n.createElement("form",W({ref:t,method:f,action:v,onSubmit:a?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=(null==t?void 0:t.getAttribute("formmethod"))||o;h(t||e.currentTarget,{method:n,replace:r,relative:m,preventScrollReset:d})}},p))}));var se,ce;function ie(e,t){let{relative:a}=void 0===t?{}:t,{basename:r}=n.useContext(F),o=n.useContext(T);o||("production"!==process.env.NODE_ENV?s(!1,"useFormAction must be used inside a RouteContext"):s(!1));let[l]=o.matches.slice(-1),c=W({},V(e||".",{relative:a})),i=$();if(null==e&&(c.search=i.search,c.hash=i.hash,l.route.index)){let e=new URLSearchParams(c.search);e.delete("index"),c.search=e.toString()?"?"+e.toString():""}return e&&"."!==e||!l.route.index||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(c.pathname="/"===c.pathname?r:E([r,c.pathname])),m(c)}"production"!==process.env.NODE_ENV&&(le.displayName="FormImpl"),process.env.NODE_ENV,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(se||(se={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ce||(ce={}));const ue=()=>e.createElement("svg",{height:"15",width:"20",viewBox:"0 0 25 15"},e.createElement("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"})),me=()=>e.createElement("svg",{className:"uploadIcon",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",clipRule:"evenodd"},e.createElement("path",{d:"M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"})),de=()=>e.createElement("svg",{className:"button-icon-svg",viewBox:"0 0 24 24","data-testid":"DeleteIcon"},e.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})),pe=()=>e.createElement("div",null,e.createElement("svg",{width:"18",height:"14",viewBox:"0 0 26 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},e.createElement("path",{d:"M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"}))),he=()=>e.createElement("div",null,e.createElement("svg",{width:"18",height:"14",viewBox:"0 0 26 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},e.createElement("path",{d:"M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z"}))),fe=()=>e.createElement("svg",{className:"greyColor",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},e.createElement("path",{d:"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"})),ve=({autofocus:t=!1,children:n="Menu Item",className:a,disableGutters:r=!1,onClick:o,value:l=n})=>e.createElement("span",{className:`${a||"menuItem-label"} ${t?"selected":"notSelected"} ${r?"removeGutters":"addGutters"}`,onClick:()=>{o(l)},key:l},n),ge=()=>e.createElement("svg",{className:"downIcon",viewBox:"0 0 24 24"},e.createElement("path",{d:"M7 10l5 5 5-5z"}));exports.Alert=({message:t,type:n="success",timeout:a,isClosable:r=!0,className:o})=>{const[l,s]=e.useState(!0),c=()=>{s(!1)};if(a&&setTimeout((()=>{c()}),a),!l)return null;const i=e.createElement("div",null,"success"===n&&"This is the Success Alert","failure"===n&&"This is the Failure Alert","warning"===n&&"This is the Warning Alert");return e.createElement("div",{className:o||`alert alert-${n}`},e.createElement("span",{className:"AlertSpan"},t||i),r&&e.createElement("div",{className:"closeIcon","data-testid":"close-button",onClick:c},e.createElement(ue,null)))},exports.AuthHOC=t=>n=>n.isAuthenticated?e.createElement(t,{...n}):e.createElement(z,{to:"/login"}),exports.Avatar=({name:t="K",src:n,alt:a="avatar",size:r=50,className:o,onClick:l})=>e.createElement("div",{className:o||"avatarContainer ",onClick:l,"data-testid":"avatar-container"},n?e.createElement("img",{className:"avatarImage",src:n,alt:a}):e.createElement("span",{className:"avatarInitials"},(e=>e.split(" ").map((e=>e.charAt(0).toUpperCase())).join(""))(t))),exports.Badge=({label:t,type:n="primary",className:a,max:r=11})=>{const o=t>r?`${r}+`:t;return e.createElement("span",{className:a||`badge badge-${n}`,"data-testid":"tooltip"},o)},exports.Button=t=>{const{bg:n,color:a,variant:r="borderLess",onClick:o,disabled:l=!1,className:s,type:c="button",multiple:i=!1,startIcon:u,endIcon:m,children:d}=t;return e.createElement(e.Fragment,null,("button"===c||"submit"===c||"reset"===c)&&e.createElement("button",{...t,type:"button",className:`${s||""} button button-${r} ${l?"button_disabled":""} ${u?"Icon":""} ${m?"Icon":""}`,onClick:o,disabled:l},u&&e.createElement("span",{className:"start-button-icon"},u),d||"Button",m&&e.createElement("span",{className:"end-button-icon"},m)),"file"===c&&e.createElement(e.Fragment,null,e.createElement("input",{className:"uploadFile",type:"file",hidden:!0,multiple:i,id:"upload-btn"}),e.createElement("label",{className:`${s||`button button-${r}`} ${l?"button_disabled":""}`,htmlFor:"upload-btn"},d||"Upload Button")))},exports.Card=t=>{const{className:n,padding:a,title:r="Title of Your Card",cardbody:o="This is the Body Section",border:l,cardheaderimg:s,height:c="150px"}=t,i=e.createElement("div",{className:"cardHead",style:{height:c}},e.createElement("img",{className:"cardImg",src:s,alt:"Image Cap",style:{height:c}})),u=e.createElement("div",{className:"cardFooter"},t.children);return e.createElement("div",{...t,className:n||"card noBorderCard "},s?i:"",e.createElement("div",{style:{padding:a},className:"cardBody"},e.createElement("div",{className:"cardTitle"},r),e.createElement("p",{className:"cardDesc"},o)),u)},exports.Drawer=({align:t="left",width:n,bg:a,color:r,className:o,style:l,isOpen:s=!0,children:c})=>{const i={width:n,backgroundColor:a,color:r,...l};return e.createElement(e.Fragment,null,s&&e.createElement("div",{className:o||`DrawerContainer DrawerContainer-${t}`,"data-testid":"drawerComoponent",style:i},c))},exports.IconButton=t=>{const{children:n,className:a,multiple:r=!1,onClick:o,type:l="button"}=t;return e.createElement(e.Fragment,null,"file"===l&&e.createElement(e.Fragment,null,e.createElement("input",{className:"IconButton-Input",type:"file",hidden:!0,multiple:r,id:"IconButton-btn"}),e.createElement("label",{className:a||"IconButton-Label",htmlFor:"IconButton-btn","data-testid":"upload-component"},n?e.createElement("span",{className:"image-icon"},n):e.createElement(me,null))),"button"===l&&e.createElement(e.Fragment,null,e.createElement("input",{className:"IconButton-Input",type:"button",hidden:!0,multiple:r,id:"IconButton-btn"}),e.createElement("label",{className:a||"IconButton-Label",htmlFor:"IconButton-btn","data-testid":"upload-component",onClick:o},n?e.createElement("span",{className:"image-icon"},n):e.createElement(de,null))))},exports.Input=t=>{const{className:n="inputArea",placeholder:a,autoFocus:r=!1,disabled:o=!1,type:l,adornment:s,required:c,onChange:i,ornament:u,error:m=!1,...d}=t,[p,h]=e.useState(!1),f="password"===l?p?"text":"password":l;let v="Input Field",g="text",E=!1;return a&&(v=a),l&&(g=l),c&&(E=c),e.createElement(e.Fragment,null,"password"===l&&e.createElement(e.Fragment,null,e.createElement("div",{className:`${n}${m?"error":""} commonInputDiv combinedInputField `},e.createElement("input",{...d,type:f,placeholder:v,autoFocus:r,disabled:o,required:E,onChange:i,"data-testid":"passwordInput"}),e.createElement("span",{className:"passwordIcon",onClick:()=>{h((e=>!e))},"data-testid":"passwordVisibility"},p?e.createElement(he,null):e.createElement(pe,null)))),"password"!==l&&!s&&!u&&e.createElement(e.Fragment,null,e.createElement("div",{className:`${n} ${m?"error":""} commonInputDiv`},e.createElement("input",{type:g,placeholder:v,autoFocus:r,disabled:o,required:E,...d,onChange:i,"data-testid":"generalInput"}))),"password"!==l&&s&&e.createElement(e.Fragment,null,e.createElement("div",{className:`${n} ${m?"error":""} combinedInputField`},e.createElement("div",{className:"adornmentContent"},e.createElement("span",{className:"InputAddOn-item InputAddOn-field","data-testid":"adornment"},s)),e.createElement("div",{className:`adornInputField ${n}`},e.createElement("input",{className:"InputAddOn-field",placeholder:v,...d,type:g,autoFocus:r,disabled:o,required:E,onChange:i,"data-testid":"adornmentInput"})))),"password"!==l&&u&&e.createElement(e.Fragment,null,e.createElement("div",{className:`${n} ${m?"error":""}  combinedInputField`},e.createElement("div",{className:`oranInputField ${n}`},e.createElement("input",{className:"InputAddOn-field",placeholder:v,...d,type:g,autoFocus:r,disabled:o,required:E,onChange:i,"data-testid":"oranmentInput"})),e.createElement("div",{className:"oranmentContent"},e.createElement("span",{className:"InputAddOn-item","data-testid":"oranment"},u)))))},exports.Menu=({style:t,menuData:n,bg:a,color:r,onClick:o})=>{const[l,s]=e.useState(!1),[c,i]=e.useState(),[u,m]=e.useState(),d={color:r,backgroundColor:a,...t};return e.createElement(ee,null,e.createElement("div",{className:"menuContainer",style:d},n.map(((t,n)=>e.createElement(e.Fragment,{key:n},t?.icon&&t?.label&&e.createElement(re,{to:t.href,className:"menuLink"},e.createElement("div",{className:"MenuType"},"divider"!==t?.type&&e.createElement("div",{className:"menuItem_group_title"},t.type),e.createElement("div",{className:"menuLinkContainer",onClick:()=>{var e;e=t.key,s(!l),i(e),m("")},style:d},e.createElement("div",{className:"menuImage"},t.icon),e.createElement("div",{className:"menuTitle"},e.createElement("span",{className:"menusText"},t.label),t.children&&t.children?.length>0&&e.createElement("div",{className:"menuDropDownIcon "+(l&&c===t.key?"rotateNintee":"")},e.createElement(fe,null)))))),c===t.key&&t.children&&c&&l&&e.createElement(e.Fragment,null,t.children.map((t=>e.createElement(re,{to:t.href,key:t.key,className:"menuLink"},e.createElement("div",{className:"menuChild",key:t.key,style:{display:l?"block":"none",color:`${r}`}},t.label))))),"divider"===t?.type&&e.createElement("div",{className:"menuItem_group_divider",key:n}))))))},exports.MenuItem=ve,exports.NavBar=({width:t,bg:n,color:a,style:r,children:o})=>{const l={width:t,backgroundColor:n,color:a,...r};return e.createElement("div",{className:"NavBarContainer-top",style:l,"data-testid":"navbarComponent"},o)},exports.Select=({placeholder:t="select...",onChange:n,padding:a,width:r,option:o,...l})=>{const[s,c]=e.useState(!1),[i,u]=e.useState(""),m=e.useRef(null),d=e=>{m.current&&!m.current.contains(e.target)&&c(!1)};e.useEffect((()=>(window.addEventListener("click",d),()=>{window.removeEventListener("click",d)})),[]);const p={padding:a||"",width:t.length>0?10*t.length+"px":""};return e.createElement(e.Fragment,null,e.createElement("div",{...l,className:"selectContainer select",style:p,onClick:()=>{c(!s)},ref:m},i||t,e.createElement("span",{className:"selctDownIcon "+(s?"rotateOneEighty":"")},e.createElement(ge,null))),s&&o&&e.createElement("div",{className:"selectItems select",style:p},o.map((t=>e.createElement(ve,{onClick:()=>{return u(e=t),c(!1),void(n&&n(e));var e},key:t},t)))))},exports.Stack=({align:t="start",direction:n="column",isInline:a=!1,justify:r="start",spacing:o=0,wrap:l=!1,style:s,children:c})=>{const i={display:a?"inline-flex":"flex",flexDirection:n,alignItems:t,justifyContent:r,flexWrap:l?"wrap":"nowrap",gap:o?`${o}px`:"0px",...s};return e.createElement("div",{className:"StackContainer "+("column"===n?"column":"row"),style:i},c)},exports.Switch=t=>{const{name:n,disabled:a,checked:r=!1,onChange:o}=t;return e.createElement("div",{className:"switch"},e.createElement("input",{type:"checkbox",id:"switch-toggle",defaultChecked:r,onChange:o,disabled:a,name:n,...t}),e.createElement("label",{htmlFor:"switch-toggle"},e.createElement("p",{className:r?"switchleftTag":"switchrightTag"},r?"On":"Off")))},exports.Table=({children:t,className:n})=>e.createElement("div",{className:n||"table-container","data-testid":"table-container"},e.createElement("table",{className:"mainTable"},t)),exports.TableBody=({children:t})=>e.createElement("tbody",null,t),exports.TableCell=({children:t,className:n})=>e.createElement("td",{className:n||"tableCell"},t),exports.TableHead=({children:t,className:n})=>e.createElement("th",{className:n||"tableHead"},t),exports.TableHeader=({children:t})=>e.createElement("thead",null,t),exports.TableRow=({children:t,className:n})=>e.createElement("tr",{className:n||"tableRow"},t),exports.TextArea=t=>{const{placeholder:n,onChange:a,rows:r,cols:o,className:l,error:s=!1,...c}=t;return e.createElement("textarea",{className:`${s?"error":""} ${l||"textAreaInput"}`,rows:r||10,cols:o||50,form:t.form,placeholder:n||"Text Area...",onChange:a})},exports.Tooltip=({text:t,children:n})=>{const[a,r]=e.useState(!1);return e.createElement("div",{className:"tooltipMainDiv","data-testid":"tooltipHover",onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)}},n,a&&e.createElement("span",{className:"textContainer "},t))};
//# sourceMappingURL=index.js.map
