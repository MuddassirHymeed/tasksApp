(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Nl=()=>{};var lo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},kl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],c=n[e++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,c=u?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,g=o>>2,A=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,P=f&63;h||(P=64,u||(R=64)),r.push(e[g],e[A],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ia(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):kl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||A==null)throw new Ol;const R=o<<2|c>>4;if(r.push(R),f!==64){const P=c<<4&240|f>>2;if(r.push(P),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ol extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ll=function(n){const t=Ia(n);return Aa.encodeByteArray(t,!0)},Qn=function(n){return Ll(n).replace(/\./g,"")},xl=function(n){try{return Aa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=()=>Ml().__FIREBASE_DEFAULTS__,Ul=()=>{if(typeof process>"u"||typeof lo>"u")return;const n=lo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&xl(n[1]);return t&&JSON.parse(t)},Cs=()=>{try{return Nl()||Fl()||Ul()||Bl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ql=n=>{var t,e;return(e=(t=Cs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},$l=n=>{const t=ql(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},wa=()=>{var n;return(n=Cs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Qn(JSON.stringify(e)),Qn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kl(){var n;const t=(n=Cs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hl(){return!Kl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ql(){try{return typeof indexedDB=="object"}catch{return!1}}function Wl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="FirebaseError";class Ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Yl,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Xl(o,r):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new Ne(i,c,r)}}function Xl(n,t){return n.replace(Jl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Jl=/\{\$([^}]+)}/g;function Wn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(co(o)&&co(u)){if(!Wn(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function co(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n){return n&&n._delegate?n._delegate:n}class un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new jl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ec(t))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=re){return this.instances.has(t)}getOptions(t=re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=re){return this.component?this.component.multipleInstances?t:re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tc(n){return n===re?void 0:n}function ec(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Zl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const rc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},sc=q.INFO,ic={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},oc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=ic[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ca{constructor(t){this.name=t,this._logLevel=sc,this._logHandler=oc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const ac=(n,t)=>t.some(e=>n instanceof e);let ho,fo;function uc(){return ho||(ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lc(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,ns=new WeakMap,Pa=new WeakMap,Hr=new WeakMap,Ss=new WeakMap;function cc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(zt(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Sa.set(e,n)}).catch(()=>{}),Ss.set(t,n),t}function hc(n){if(ns.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});ns.set(n,t)}let rs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ns.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Pa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function dc(n){rs=n(rs)}function fc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Qr(this),t,...e);return Pa.set(r,t.sort?t.sort():[t]),zt(r)}:lc().includes(n)?function(...t){return n.apply(Qr(this),t),zt(Sa.get(this))}:function(...t){return zt(n.apply(Qr(this),t))}}function pc(n){return typeof n=="function"?fc(n):(n instanceof IDBTransaction&&hc(n),ac(n,uc())?new Proxy(n,rs):n)}function zt(n){if(n instanceof IDBRequest)return cc(n);if(Hr.has(n))return Hr.get(n);const t=pc(n);return t!==n&&(Hr.set(n,t),Ss.set(t,n)),t}const Qr=n=>Ss.get(n);function mc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),c=zt(u);return r&&u.addEventListener("upgradeneeded",h=>{r(zt(u.result),h.oldVersion,h.newVersion,zt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const gc=["get","getKey","getAll","getAllKeys","count"],_c=["put","add","delete","clear"],Wr=new Map;function po(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Wr.get(t))return Wr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=_c.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gc.includes(e)))return;const o=async function(u,...c){const h=this.transaction(u,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&h.done]))[0]};return Wr.set(t,o),o}dc(n=>({...n,get:(t,e,r)=>po(t,e)||n.get(t,e,r),has:(t,e)=>!!po(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ec(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ec(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ss="@firebase/app",mo="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Ca("@firebase/app"),vc="@firebase/app-compat",Tc="@firebase/analytics-compat",Ic="@firebase/analytics",Ac="@firebase/app-check-compat",wc="@firebase/app-check",Rc="@firebase/auth",Cc="@firebase/auth-compat",Sc="@firebase/database",Pc="@firebase/data-connect",bc="@firebase/database-compat",Vc="@firebase/functions",Dc="@firebase/functions-compat",Nc="@firebase/installations",kc="@firebase/installations-compat",Oc="@firebase/messaging",Lc="@firebase/messaging-compat",xc="@firebase/performance",Mc="@firebase/performance-compat",Fc="@firebase/remote-config",Uc="@firebase/remote-config-compat",Bc="@firebase/storage",qc="@firebase/storage-compat",$c="@firebase/firestore",jc="@firebase/vertexai",zc="@firebase/firestore-compat",Gc="firebase",Kc="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]",Hc={[ss]:"fire-core",[vc]:"fire-core-compat",[Ic]:"fire-analytics",[Tc]:"fire-analytics-compat",[wc]:"fire-app-check",[Ac]:"fire-app-check-compat",[Rc]:"fire-auth",[Cc]:"fire-auth-compat",[Sc]:"fire-rtdb",[Pc]:"fire-data-connect",[bc]:"fire-rtdb-compat",[Vc]:"fire-fn",[Dc]:"fire-fn-compat",[Nc]:"fire-iid",[kc]:"fire-iid-compat",[Oc]:"fire-fcm",[Lc]:"fire-fcm-compat",[xc]:"fire-perf",[Mc]:"fire-perf-compat",[Fc]:"fire-rc",[Uc]:"fire-rc-compat",[Bc]:"fire-gcs",[qc]:"fire-gcs-compat",[$c]:"fire-fst",[zc]:"fire-fst-compat",[jc]:"fire-vertex","fire-js":"fire-js",[Gc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map,Qc=new Map,os=new Map;function go(n,t){try{n.container.addComponent(t)}catch(e){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Xn(n){const t=n.name;if(os.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;os.set(t,n);for(const e of Yn.values())go(e,n);for(const e of Qc.values())go(e,n);return!0}function Wc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Yc(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new Ra("app","Firebase",Xc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=Kc;function ba(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:is,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(e||(e=wa()),!e)throw Gt.create("no-options");const o=Yn.get(i);if(o){if(Wn(e,o.options)&&Wn(r,o.config))return o;throw Gt.create("duplicate-app",{appName:i})}const u=new nc(i);for(const h of os.values())u.addComponent(h);const c=new Jc(e,r,u);return Yn.set(i,c),c}function th(n=is){const t=Yn.get(n);if(!t&&n===is&&wa())return ba();if(!t)throw Gt.create("no-app",{appName:n});return t}function ye(n,t,e){var r;let i=(r=Hc[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}Xn(new un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="firebase-heartbeat-database",nh=1,ln="firebase-heartbeat-store";let Yr=null;function Va(){return Yr||(Yr=mc(eh,nh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ln)}catch(e){console.warn(e)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),Yr}async function rh(n){try{const e=(await Va()).transaction(ln),r=await e.objectStore(ln).get(Da(n));return await e.done,r}catch(t){if(t instanceof Ne)Ot.warn(t.message);else{const e=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(e.message)}}}async function _o(n,t){try{const r=(await Va()).transaction(ln,"readwrite");await r.objectStore(ln).put(t,Da(n)),await r.done}catch(e){if(e instanceof Ne)Ot.warn(e.message);else{const r=Gt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(r.message)}}}function Da(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=1024,ih=30;class oh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new uh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=yo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>ih){const u=lh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yo(),{heartbeatsToSend:r,unsentEntries:i}=ah(this._heartbeatsCache.heartbeats),o=Qn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ot.warn(e),""}}}function yo(){return new Date().toISOString().substring(0,10)}function ah(n,t=sh){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Eo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Eo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class uh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ql()?Wl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await rh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Eo(n){return Qn(JSON.stringify({version:2,heartbeats:n})).length}function lh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){Xn(new un("platform-logger",t=>new yc(t),"PRIVATE")),Xn(new un("heartbeat",t=>new oh(t),"PRIVATE")),ye(ss,mo,n),ye(ss,mo,"esm2017"),ye("fire-js","")}ch("");var hh="firebase",dh="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye(hh,dh,"app");var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,Na;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,I){for(var m=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)m[Dt-2]=arguments[Dt];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var I=v.g[3],m=p+(I^_&(E^I))+y[0]+3614090360&4294967295;p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[3]+3250441966&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(I^_&(E^I))+y[4]+4118548399&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[7]+4249261313&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(I^_&(E^I))+y[8]+1770035416&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[11]+2304563134&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(I^_&(E^I))+y[12]+1804603682&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[15]+1236535329&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(_^E))+y[1]+4129170786&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[0]+3921069994&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(_^E))+y[5]+3593408605&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[4]+3889429448&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(_^E))+y[9]+568446438&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[8]+1163531501&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(_^E))+y[13]+2850285829&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[12]+2368359562&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(_^E^I)+y[5]+4294588738&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[14]+4259657740&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(_^E^I)+y[1]+2763975236&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[10]+3200236656&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(_^E^I)+y[13]+681279174&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[6]+76029189&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(_^E^I)+y[9]+3654602809&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[2]+3299628645&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(E^(_|~I))+y[0]+4096336452&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[5]+4237533241&4294967295,_=E+(m<<21&4294967295|m>>>11),m=p+(E^(_|~I))+y[12]+1700485571&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[1]+2240044497&4294967295,_=E+(m<<21&4294967295|m>>>11),m=p+(E^(_|~I))+y[8]+1873313359&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[13]+1309151649&4294967295,_=E+(m<<21&4294967295|m>>>11),m=p+(E^(_|~I))+y[4]+4149444226&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=_;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function u(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(_[E]=I,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return N(f(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new u(p,0)}function g(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return N(g(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(_),y=y.add(f(m)))}return y}var A=h(0),R=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(L(this))return-N(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(L(this))return"-"+N(this).toString(v);for(var p=f(Math.pow(v,6)),_=this,y="";;){var E=it(_,p).g;_=Y(_,E.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,k(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=Y(this,v),L(v)?-1:k(v)?0:1};function N(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new u(_,~v.h).add(R)}n.abs=function(){return L(this)?N(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,_[E]=m<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function Y(v,p){return v.add(N(p))}n.j=function(v){if(k(this)||k(v))return A;if(L(this))return L(v)?N(this).j(N(v)):N(N(this).j(v));if(L(v))return N(this.j(N(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,Dt=v.i(E)>>>16,Me=v.i(E)&65535;_[2*y+2*E]+=m*Me,X(_,2*y+2*E),_[2*y+2*E+1]+=I*Me,X(_,2*y+2*E+1),_[2*y+2*E+1]+=m*Dt,X(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Dt,X(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function X(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function Q(v,p){this.g=v,this.h=p}function it(v,p){if(k(p))throw Error("division by zero");if(k(v))return new Q(A,A);if(L(v))return p=it(N(v),p),new Q(N(p.g),N(p.h));if(L(p))return p=it(v,N(p)),new Q(N(p.g),p.h);if(30<v.g.length){if(L(v)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(v);)_=Vt(_),y=Vt(y);var E=ut(_,1),I=ut(y,1);for(y=ut(y,2),_=ut(_,2);!k(y);){var m=I.add(y);0>=m.l(v)&&(E=E.add(_),I=m),y=ut(y,1),_=ut(_,1)}return p=Y(v,E.j(p)),new Q(E,p)}for(E=A;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),m=I.j(p);L(m)||0<m.l(v);)_-=y,I=f(_),m=I.j(p);k(I)&&(I=R),E=E.add(I),v=Y(v,m)}return new Q(E,v)}n.A=function(v){return it(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new u(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new u(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new u(_,this.h^v.h)};function Vt(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(_,v.h)}function ut(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+_)>>>p|v.i(I+_+1)<<32-p:v.i(I+_);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Na=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,Kt=u}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});var Mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ka,tn,Oa,jn,as,La,xa,Ma;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mn=="object"&&Mn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in l))break t;l=l[T]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,T={next:function(){if(!d&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function g(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:A,R.apply(null,arguments)}function P(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,T,w){for(var b=Array(arguments.length-2),G=2;G<arguments.length;G++)b[G-2]=arguments[G];return a.prototype[T].apply(d,b)}}function L(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function N(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=s.length||0,w=d.length||0;s.length=T+w;for(let b=0;b<w;b++)s[T+b]=d[b]}else s.push(d)}}class Y{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function X(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function it(s){return it[" "](s),s}it[" "]=function(){};var Vt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ut(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function v(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)s[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function m(){var s=Ar;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Dt{constructor(){this.h=this.g=null}add(a,l){const d=Me.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Me=new Y(()=>new Xu,s=>s.reset());class Xu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Ue=!1,Ar=new Dt,li=()=>{const s=c.Promise.resolve(void 0);Fe=()=>{s.then(Ju)}};var Ju=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){I(l)}var a=Me;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ue=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Zu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Be(s,a){if(dt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Vt){t:{try{it(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:tl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Be.aa.h.call(this)}}k(Be,dt);var tl={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),el=0;function nl(s,a,l,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=T,this.key=++el,this.da=this.fa=!1}function En(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function vn(s){this.src=s,this.g={},this.h=0}vn.prototype.add=function(s,a,l,d,T){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var b=Rr(s,a,d,T);return-1<b?(a=s[b],l||(a.fa=!1)):(a=new nl(a,this.src,w,!!d,T),a.fa=l,s.push(a)),a};function wr(s,a){var l=a.type;if(l in s.g){var d=s.g[l],T=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(d,T,1),w&&(En(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Rr(s,a,l,d){for(var T=0;T<s.length;++T){var w=s[T];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return T}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),Sr={};function ci(s,a,l,d,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ci(s,a[w],l,d,T);return null}return l=fi(l),s&&s[yn]?s.K(a,l,f(d)?!!d.capture:!1,T):rl(s,a,l,!1,d,T)}function rl(s,a,l,d,T,w){if(!a)throw Error("Invalid event type");var b=f(T)?!!T.capture:!!T,G=br(s);if(G||(s[Cr]=G=new vn(s)),l=G.add(a,l,d,b,w),l.proxy)return l;if(d=sl(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)Zu||(T=b),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent(di(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function sl(){function s(l){return a.call(s.src,s.listener,l)}const a=il;return s}function hi(s,a,l,d,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)hi(s,a[w],l,d,T);else d=f(d)?!!d.capture:!!d,l=fi(l),s&&s[yn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Rr(w,l,d,T),-1<l&&(En(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=br(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Rr(a,l,d,T)),(l=-1<s?a[s]:null)&&Pr(l))}function Pr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[yn])wr(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(di(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=br(a))?(wr(l,s),l.h==0&&(l.src=null,a[Cr]=null)):En(s)}}}function di(s){return s in Sr?Sr[s]:Sr[s]="on"+s}function il(s,a){if(s.da)s=!0;else{a=new Be(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&Pr(s),s=l.call(d,a)}return s}function br(s){return s=s[Cr],s instanceof vn?s:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function fi(s){return typeof s=="function"?s:(s[Vr]||(s[Vr]=function(a){return s.handleEvent(a)}),s[Vr])}function ft(){Ft.call(this),this.i=new vn(this),this.M=this,this.F=null}k(ft,Ft),ft.prototype[yn]=!0,ft.prototype.removeEventListener=function(s,a,l,d){hi(this,s,a,l,d)};function vt(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new dt(a,s);else if(a instanceof dt)a.target=a.target||s;else{var T=a;a=new dt(d,s),y(a,T)}if(T=!0,l)for(var w=l.length-1;0<=w;w--){var b=a.g=l[w];T=Tn(b,d,!0,a)&&T}if(b=a.g=s,T=Tn(b,d,!0,a)&&T,T=Tn(b,d,!1,a)&&T,l)for(w=0;w<l.length;w++)b=a.g=l[w],T=Tn(b,d,!1,a)&&T}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)En(l[d]);delete s.g[a],s.h--}}this.F=null},ft.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},ft.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function Tn(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var b=a[w];if(b&&!b.da&&b.capture==l){var G=b.listener,lt=b.ha||b.src;b.fa&&wr(s.i,b),T=G.call(lt,d)!==!1&&T}}return T&&!d.defaultPrevented}function pi(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function mi(s){s.g=pi(()=>{s.g=null,s.i&&(s.i=!1,mi(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class ol extends Ft{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(s){Ft.call(this),this.h=s,this.g={}}k(qe,Ft);var gi=[];function _i(s){ut(s.g,function(a,l){this.g.hasOwnProperty(l)&&Pr(a)},s),s.g={}}qe.prototype.N=function(){qe.aa.N.call(this),_i(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dr=c.JSON.stringify,al=c.JSON.parse,ul=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Nr(){}Nr.prototype.h=null;function yi(s){return s.h||(s.h=s.i())}function Ei(){}var $e={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kr(){dt.call(this,"d")}k(kr,dt);function Or(){dt.call(this,"c")}k(Or,dt);var Zt={},vi=null;function In(){return vi=vi||new ft}Zt.La="serverreachability";function Ti(s){dt.call(this,Zt.La,s)}k(Ti,dt);function je(s){const a=In();vt(a,new Ti(a))}Zt.STAT_EVENT="statevent";function Ii(s,a){dt.call(this,Zt.STAT_EVENT,s),this.stat=a}k(Ii,dt);function Tt(s){const a=In();vt(a,new Ii(a,s))}Zt.Ma="timingevent";function Ai(s,a){dt.call(this,Zt.Ma,s),this.size=a}k(Ai,dt);function ze(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function ll(s,a,l,d,T,w){s.info(function(){if(s.g)if(w)for(var b="",G=w.split("&"),lt=0;lt<G.length;lt++){var z=G[lt].split("=");if(1<z.length){var pt=z[0];z=z[1];var mt=pt.split("_");b=2<=mt.length&&mt[1]=="type"?b+(pt+"="+z+"&"):b+(pt+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+l+`
`+b})}function cl(s,a,l,d,T,w,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+l+`
`+w+" "+b})}function ce(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+dl(s,l)+(d?" "+d:"")})}function hl(s,a){s.info(function(){return"TIMEOUT: "+a})}Ge.prototype.info=function(){};function dl(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<T.length;b++)T[b]=""}}}}return Dr(l)}catch{return a}}var An={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lr;function wn(){}k(wn,Nr),wn.prototype.g=function(){return new XMLHttpRequest},wn.prototype.i=function(){return{}},Lr=new wn;function Ut(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}var Ci={},xr={};function Mr(s,a,l){s.L=1,s.v=Pn(Nt(a)),s.m=l,s.P=!0,Si(s,null)}function Si(s,a){s.F=Date.now(),Rn(s),s.A=Nt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),qi(l.i,"t",d),s.C=0,l=s.j.J,s.h=new Ri,s.g=io(s.j,l?a:null,!s.m),0<s.O&&(s.M=new ol(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(gi[0]=T.toString()),T=gi);for(var w=0;w<T.length;w++){var b=ci(l,T[w],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),je(),ll(s.i,s.u,s.A,s.l,s.R,s.m)}Ut.prototype.ca=function(s){s=s.target;const a=this.M;a&&kt(s)==3?a.j():this.Y(s)},Ut.prototype.Y=function(s){try{if(s==this.g)t:{const mt=kt(this.g);var a=this.g.Ba();const fe=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Qi(this.g)))){this.J||mt!=4||a==7||(a==8||0>=fe?je(3):je(2)),Fr(this);var l=this.g.Z();this.X=l;e:if(Pi(this)){var d=Qi(this.g);s="";var T=d.length,w=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),Ke(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(w&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,cl(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var G,lt=this.g;if((G=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(G)){var z=G;break e}}z=null}if(l=z)ce(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ur(this,l);else{this.o=!1,this.s=3,Tt(12),te(this),Ke(this);break t}}if(this.P){l=!0;let wt;for(;!this.J&&this.C<b.length;)if(wt=fl(this,b),wt==xr){mt==4&&(this.s=4,Tt(14),l=!1),ce(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Ci){this.s=4,Tt(15),ce(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else ce(this.i,this.l,wt,null),Ur(this,wt);if(Pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)ce(this.i,this.l,b,"[Invalid Chunked Response]"),te(this),Ke(this);else if(0<b.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Gr(pt),pt.M=!0,Tt(11))}}else ce(this.i,this.l,b,null),Ur(this,b);mt==4&&te(this),this.o&&!this.J&&(mt==4?eo(this.j,this):(this.o=!1,Rn(this)))}else Vl(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),te(this),Ke(this)}}}catch{}finally{}};function Pi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function fl(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?xr:(l=Number(a.substring(l,d)),isNaN(l)?Ci:(d+=1,d+l>a.length?xr:(a=a.slice(d,d+l),s.C=d+l,a)))}Ut.prototype.cancel=function(){this.J=!0,te(this)};function Rn(s){s.S=Date.now()+s.I,bi(s,s.I)}function bi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ze(R(s.ba,s),a)}function Fr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Ut.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(hl(this.i,this.A),this.L!=2&&(je(),Tt(17)),te(this),this.s=2,Ke(this)):bi(this,this.S-s)};function Ke(s){s.j.G==0||s.J||eo(s.j,s)}function te(s){Fr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,_i(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Ur(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Br(l.h,s))){if(!s.K&&Br(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)On(l),Nn(l);else break t;zr(l),Tt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=ze(R(l.Za,l),6e3));if(1>=Ni(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ne(l,11)}else if((s.K||l.g==s)&&On(l),!X(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let z=T[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const pt=z[3];pt!=null&&(l.la=pt,l.j.info("VER="+l.la));const mt=z[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const fe=z[5];fe!=null&&typeof fe=="number"&&0<fe&&(d=1.5*fe,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const wt=s.g;if(wt){const xn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xn){var w=d.h;w.g||xn.indexOf("spdy")==-1&&xn.indexOf("quic")==-1&&xn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(qr(w,w.h),w.h=null))}if(d.D){const Kr=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Kr&&(d.ya=Kr,H(d.I,d.D,Kr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=s;if(d.qa=so(d,d.J?d.ia:null,d.W),b.K){ki(d.h,b);var G=b,lt=d.L;lt&&(G.I=lt),G.B&&(Fr(G),Rn(G)),d.g=b}else Zi(d);0<l.i.length&&kn(l)}else z[0]!="stop"&&z[0]!="close"||ne(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ne(l,7):jr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}je(4)}catch{}}var pl=class{constructor(s,a){this.g=s,this.map=a}};function Vi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Di(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ni(s){return s.h?1:s.g?s.g.size:0}function Br(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function qr(s,a){s.g?s.g.add(a):s.h=a}function ki(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Vi.prototype.cancel=function(){if(this.i=Oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Oi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return L(s.i)}function ml(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function gl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function Li(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=gl(s),d=ml(s),T=d.length,w=0;w<T;w++)a.call(void 0,d[w],l&&l[w],s)}var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _l(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),T=null;if(0<=d){var w=s[l].substring(0,d);T=s[l].substring(d+1)}else w=s[l];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ee(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ee){this.h=s.h,Cn(this,s.j),this.o=s.o,this.g=s.g,Sn(this,s.s),this.l=s.l;var a=s.i,l=new We;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Mi(this,l),this.m=s.m}else s&&(a=String(s).match(xi))?(this.h=!1,Cn(this,a[1]||"",!0),this.o=He(a[2]||""),this.g=He(a[3]||"",!0),Sn(this,a[4]),this.l=He(a[5]||"",!0),Mi(this,a[6]||"",!0),this.m=He(a[7]||"")):(this.h=!1,this.i=new We(null,this.h))}ee.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Qe(a,Fi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Qe(a,Fi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Qe(l,l.charAt(0)=="/"?vl:El,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Qe(l,Il)),s.join("")};function Nt(s){return new ee(s)}function Cn(s,a,l){s.j=l?He(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Sn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Mi(s,a,l){a instanceof We?(s.i=a,Al(s.i,s.h)):(l||(a=Qe(a,Tl)),s.i=new We(a,s.h))}function H(s,a,l){s.i.set(a,l)}function Pn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function He(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Qe(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,yl),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function yl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Fi=/[#\/\?@]/g,El=/[#\?:]/g,vl=/[#\?]/g,Tl=/[#\?@]/g,Il=/#/g;function We(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Bt(s){s.g||(s.g=new Map,s.h=0,s.i&&_l(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=We.prototype,n.add=function(s,a){Bt(this),this.i=null,s=he(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ui(s,a){Bt(s),a=he(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Bi(s,a){return Bt(s),a=he(s,a),s.g.has(a)}n.forEach=function(s,a){Bt(this),this.g.forEach(function(l,d){l.forEach(function(T){s.call(a,T,d,this)},this)},this)},n.na=function(){Bt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const T=s[d];for(let w=0;w<T.length;w++)l.push(a[d])}return l},n.V=function(s){Bt(this);let a=[];if(typeof s=="string")Bi(this,s)&&(a=a.concat(this.g.get(he(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},n.set=function(s,a){return Bt(this),this.i=null,s=he(this,s),Bi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function qi(s,a,l){Ui(s,a),0<l.length&&(s.i=null,s.g.set(he(s,a),L(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var T=w;b[d]!==""&&(T+="="+encodeURIComponent(String(b[d]))),s.push(T)}}return this.i=s.join("&")};function he(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Al(s,a){a&&!s.j&&(Bt(s),s.i=null,s.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(Ui(this,d),qi(this,T,l))},s)),s.j=a}function wl(s,a){const l=new Ge;if(c.Image){const d=new Image;d.onload=P(qt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=P(qt,l,"TestLoadImage: error",!1,a,d),d.onabort=P(qt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=P(qt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Rl(s,a){const l=new Ge,d=new AbortController,T=setTimeout(()=>{d.abort(),qt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(w=>{clearTimeout(T),w.ok?qt(l,"TestPingServer: ok",!0,a):qt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),qt(l,"TestPingServer: error",!1,a)})}function qt(s,a,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function Cl(){this.g=new ul}function Sl(s,a,l){const d=l||"";try{Li(s,function(T,w){let b=T;f(T)&&(b=Dr(T)),a.push(d+w+"="+encodeURIComponent(b))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function bn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(bn,Nr),bn.prototype.g=function(){return new Vn(this.l,this.j)},bn.prototype.i=function(s){return function(){return s}}({});function Vn(s,a){ft.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Vn,ft),n=Vn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Xe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$i(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function $i(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ye(this):Xe(this),this.readyState==3&&$i(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ye(this))},n.Qa=function(s){this.g&&(this.response=s,Ye(this))},n.ga=function(){this.g&&Ye(this)};function Ye(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xe(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Xe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ji(s){let a="";return ut(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function $r(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=ji(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function Z(s){ft.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Z,ft);var Pl=/^https?$/i,bl=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lr.g(),this.v=this.o?yi(this.o):yi(Lr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){zi(this,w);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(bl,a,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of l)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){zi(this,w)}};function zi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Gi(s),Dn(s)}function Gi(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ki(this):this.bb())},n.bb=function(){Ki(this)};function Ki(s){if(s.h&&typeof u<"u"&&(!s.v[1]||kt(s)!=4||s.Z()!=2)){if(s.u&&kt(s)==4)pi(s.Ea,0,s);else if(vt(s,"readystatechange"),kt(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=b===0){var T=String(s.D).match(xi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!Pl.test(T?T.toLowerCase():"")}l=d}if(l)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var w=2<kt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Gi(s)}}finally{Dn(s)}}}}function Dn(s,a){if(s.g){Hi(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||vt(s,"ready");try{l.onreadystatechange=d}catch{}}}function Hi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function kt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),al(a)}};function Qi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Vl(s){const a={};s=(s.g&&2<=kt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(X(s[d]))continue;var l=E(s[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[T]||[];a[T]=w,w.push(l)}v(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Wi(s){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Je("baseRetryDelayMs",5e3,s),this.cb=Je("retryDelaySeedMs",1e4,s),this.Wa=Je("forwardChannelMaxRetries",2,s),this.wa=Je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(s&&s.concurrentRequestLimit),this.Da=new Cl,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wi.prototype,n.la=8,n.G=1,n.connect=function(s,a,l,d){Tt(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=so(this,null,this.W),kn(this)};function jr(s){if(Yi(s),s.G==3){var a=s.U++,l=Nt(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),Ze(s,l),a=new Ut(s,s.j,a),a.L=2,a.v=Pn(Nt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=io(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Rn(a)}ro(s)}function Nn(s){s.g&&(Gr(s),s.g.cancel(),s.g=null)}function Yi(s){Nn(s),s.u&&(c.clearTimeout(s.u),s.u=null),On(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function kn(s){if(!Di(s.h)&&!s.s){s.s=!0;var a=s.Ga;Fe||li(),Ue||(Fe(),Ue=!0),Ar.add(a,s),s.B=0}}function Dl(s,a){return Ni(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ze(R(s.Ga,s,a),no(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Ut(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ji(this,T,a),l=Nt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),Ze(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(ji(w)))+"&"+a:this.m&&$r(l,this.m,w)),qr(this.h,T),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),T.T=!0,Mr(T,l,null)):Mr(T,l,a),this.G=2}}else this.G==3&&(s?Xi(this,s):this.i.length==0||Di(this.h)||Xi(this))};function Xi(s,a){var l;a?l=a.l:l=s.U++;const d=Nt(s.I);H(d,"SID",s.K),H(d,"RID",l),H(d,"AID",s.T),Ze(s,d),s.m&&s.o&&$r(d,s.m,s.o),l=new Ut(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ji(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),qr(s.h,l),Mr(l,d,a)}function Ze(s,a){s.H&&ut(s.H,function(l,d){H(a,d,l)}),s.l&&Li({},function(l,d){H(a,d,l)})}function Ji(s,a,l){l=Math.min(s.i.length,l);var d=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let w=-1;for(;;){const b=["count="+l];w==-1?0<l?(w=T[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let G=!0;for(let lt=0;lt<l;lt++){let z=T[lt].g;const pt=T[lt].map;if(z-=w,0>z)w=Math.max(0,T[lt].g-100),G=!1;else try{Sl(pt,b,"req"+z+"_")}catch{d&&d(pt)}}if(G){d=b.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Zi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Fe||li(),Ue||(Fe(),Ue=!0),Ar.add(a,s),s.v=0}}function zr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ze(R(s.Fa,s),no(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,to(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ze(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Nn(this),to(this))};function Gr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function to(s){s.g=new Ut(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Nt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),Ze(s,a),s.m&&s.o&&$r(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Pn(Nt(a)),l.m=null,l.P=!0,Si(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Nn(this),zr(this),Tt(19))};function On(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function eo(s,a){var l=null;if(s.g==a){On(s),Gr(s),s.g=null;var d=2}else if(Br(s.h,a))l=a.D,ki(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=In(),vt(d,new Ai(d,l)),kn(s)}else Zi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Dl(s,a)||d==2&&zr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:ne(s,5);break;case 4:ne(s,10);break;case 3:ne(s,6);break;default:ne(s,2)}}}function no(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ne(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),d=s.Xa;const T=!d;d=new ee(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Cn(d,"https"),Pn(d),T?wl(d.toString(),l):Rl(d.toString(),l)}else Tt(2);s.G=0,s.l&&s.l.sa(a),ro(s),Yi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function ro(s){if(s.G=0,s.ka=[],s.l){const a=Oi(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ka,a),N(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function so(s,a,l){var d=l instanceof ee?Nt(l):new ee(l);if(d.g!="")a&&(d.g=a+"."+d.g),Sn(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new ee(null);d&&Cn(w,d),a&&(w.g=a),T&&Sn(w,T),l&&(w.l=l),d=w}return l=s.D,a=s.ya,l&&a&&H(d,l,a),H(d,"VER",s.la),Ze(s,d),d}function io(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Z(new bn({eb:l})):new Z(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oo(){}n=oo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ln(){}Ln.prototype.g=function(s,a){return new At(s,a)};function At(s,a){ft.call(this),this.g=new Wi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!X(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!X(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new de(this)}k(At,ft),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){jr(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Dr(s),s=l);a.i.push(new pl(a.Ya++,s)),a.G==3&&kn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,jr(this.g),delete this.g,At.aa.N.call(this)};function ao(s){kr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(ao,kr);function uo(){Or.call(this),this.status=1}k(uo,Or);function de(s){this.g=s}k(de,oo),de.prototype.ua=function(){vt(this.g,"a")},de.prototype.ta=function(s){vt(this.g,new ao(s))},de.prototype.sa=function(s){vt(this.g,new uo)},de.prototype.ra=function(){vt(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Ma=function(){return new Ln},xa=function(){return In()},La=Zt,as={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},An.NO_ERROR=0,An.TIMEOUT=8,An.HTTP_ERROR=6,jn=An,wi.COMPLETE="complete",Oa=wi,Ei.EventType=$e,$e.OPEN="a",$e.CLOSE="b",$e.ERROR="c",$e.MESSAGE="d",ft.prototype.listen=ft.prototype.K,tn=Ei,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,ka=Z}).apply(typeof Mn<"u"?Mn:typeof self<"u"?self:typeof window<"u"?window:{});const To="@firebase/firestore",Io="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Ca("@firebase/firestore");function pe(){return ae.logLevel}function D(n,...t){if(ae.logLevel<=q.DEBUG){const e=t.map(Ps);ae.debug(`Firestore (${ke}): ${n}`,...e)}}function Lt(n,...t){if(ae.logLevel<=q.ERROR){const e=t.map(Ps);ae.error(`Firestore (${ke}): ${n}`,...e)}}function Ae(n,...t){if(ae.logLevel<=q.WARN){const e=t.map(Ps);ae.warn(`Firestore (${ke}): ${n}`,...e)}}function Ps(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Fa(n,r,e)}function Fa(n,t,e){let r=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Lt(r),new Error(r)}function J(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Fa(t,i,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class ph{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class mh{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ie,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ie)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Ua(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class gh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _h{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new gh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ao{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){J(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ao(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ao(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Eh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function F(n,t){return n<t?-1:n>t?1:0}function us(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return F(r,i);{const o=Ba(),u=Th(o.encode(wo(n,e)),o.encode(wo(t,e)));return u!==0?u:F(r,i)}}e+=r>65535?2:1}return F(n.length,t.length)}function wo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Th(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return F(n[e],t[e]);return F(n.length,t.length)}function we(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=-62135596800,Co=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Co);return new at(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ro)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Co}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ro;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static fromTimestamp(t){return new x(t)}static min(){return new x(new at(0,0))}static max(){return new x(new at(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="__name__";class Ct{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const r=Ct.isNumericId(t),i=Ct.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):us(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class W extends Ct{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Ih=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Ct{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return Ih.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===So}static keyField(){return new Et([So])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(r+=c,i++):(o(),i++)}if(o(),u)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(W.fromString(t))}static fromName(t){return new O(W.fromString(t).popFirst(5))}static empty(){return new O(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new W(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=-1;function Ah(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(r===1e9?new at(e+1,0):new at(e,r));return new Ht(i,O.empty(),t)}function wh(n){return new Ht(n.readTime,n.key,cn)}class Ht{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ht(x.min(),O.empty(),cn)}static max(){return new Ht(x.max(),O.empty(),cn)}}function Rh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:F(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ch)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>r(h))}),u=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{u[f]=g,++c,c===o&&r(u)},g=>i(g))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Ph(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Oe(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}lr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=-1;function cr(n){return n==null}function Jn(n){return n===0&&1/n==-1/0}function Vh(n){return typeof n=="number"&&Number.isInteger(n)&&!Jn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="";function Dh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Po(t)),t=Nh(n.get(e),t);return Po(t)}function Nh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case qa:e+="";break;default:e+=o}}return e}function Po(n){return n+qa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Le(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $a(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fn(this.root,t,this.comparator,!0)}}class Fn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vo(this.data.getIterator())}getIteratorFrom(t){return new Vo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Vo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new $t([])}unionWith(t){let e=new st(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return we(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ja("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(J(!!n,39018),typeof n=="string"){let t=0;const e=kh.exec(n);if(J(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="server_timestamp",Ga="__type__",Ka="__previous_value__",Ha="__local_write_time__";function hr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ga])===null||e===void 0?void 0:e.stringValue)===za}function dr(n){const t=n.mapValue.fields[Ka];return hr(t)?dr(t):t}function hn(n){const t=Qt(n.mapValue.fields[Ha].timestampValue);return new at(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e,r,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}const Zn="(default)";class dn{constructor(t,e){this.projectId=t,this.database=e||Zn}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(t){return t instanceof dn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="__type__",Lh="__max__",Un={mapValue:{}},Wa="__vector__",tr="value";function Yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hr(n)?4:Mh(n)?9007199254740991:xh(n)?10:11:M(28295,{value:n})}function bt(n,t){if(n===t)return!0;const e=Yt(n);if(e!==Yt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return hn(n).isEqual(hn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Qt(i.timestampValue),c=Qt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Wt(i.bytesValue).isEqual(Wt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=tt(i.doubleValue),c=tt(o.doubleValue);return u===c?Jn(u)===Jn(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return we(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(bo(u)!==bo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!bt(u[h],c[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function fn(n,t){return(n.values||[]).find(e=>bt(e,t))!==void 0}function Re(n,t){if(n===t)return 0;const e=Yt(n),r=Yt(t);if(e!==r)return F(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=tt(o.integerValue||o.doubleValue),h=tt(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Do(n.timestampValue,t.timestampValue);case 4:return Do(hn(n),hn(t));case 5:return us(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Wt(o),h=Wt(u);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const g=F(c[f],h[f]);if(g!==0)return g}return F(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=F(tt(o.latitude),tt(u.latitude));return c!==0?c:F(tt(o.longitude),tt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return No(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,g;const A=o.fields||{},R=u.fields||{},P=(c=A[tr])===null||c===void 0?void 0:c.arrayValue,k=(h=R[tr])===null||h===void 0?void 0:h.arrayValue,L=F(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((g=k==null?void 0:k.values)===null||g===void 0?void 0:g.length)||0);return L!==0?L:No(P,k)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Un.mapValue&&u===Un.mapValue)return 0;if(o===Un.mapValue)return 1;if(u===Un.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let A=0;A<h.length&&A<g.length;++A){const R=us(h[A],g[A]);if(R!==0)return R;const P=Re(c[h[A]],f[g[A]]);if(P!==0)return P}return F(h.length,g.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function Do(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return F(n,t);const e=Qt(n),r=Qt(t),i=F(e.seconds,r.seconds);return i!==0?i:F(e.nanos,r.nanos)}function No(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Re(e[i],r[i]);if(o)return o}return F(e.length,r.length)}function Ce(n){return ls(n)}function ls(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Qt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Wt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ls(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${ls(e.fields[u])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function zn(n){switch(Yt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=dr(n);return t?16+zn(t):16;case 5:return 2*n.stringValue.length;case 6:return Wt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+zn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Le(r.fields,(o,u)=>{i+=o.length+zn(u)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function er(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function cs(n){return!!n&&"integerValue"in n}function bs(n){return!!n&&"arrayValue"in n}function ko(n){return!!n&&"nullValue"in n}function Oo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xr(n){return!!n&&"mapValue"in n}function xh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Qa])===null||e===void 0?void 0:e.stringValue)===Wa}function rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Le(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Mh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Lh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Xr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(e)}setAll(t){let e=Et.emptyPath(),r={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}u?r[c.lastSegment()]=rn(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Xr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Xr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Le(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new St(rn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,i,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,x.min(),x.min(),x.min(),St.empty(),0)}static newFoundDocument(t,e,r,i){return new yt(t,1,e,x.min(),r,i,0)}static newNoDocument(t,e){return new yt(t,2,e,x.min(),x.min(),St.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,x.min(),x.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e){this.position=t,this.inclusive=e}}function Lo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=Re(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function xo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{}class rt extends Ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Bh(t,e,r):e==="array-contains"?new jh(t,r):e==="in"?new zh(t,r):e==="not-in"?new Gh(t,r):e==="array-contains-any"?new Kh(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new qh(t,r):new $h(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Re(e,this.value)):e!==null&&Yt(this.value)===Yt(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Rt(t,e)}matches(t){return Xa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Xa(n){return n.op==="and"}function Ja(n){return Uh(n)&&Xa(n)}function Uh(n){for(const t of n.filters)if(t instanceof Rt)return!1;return!0}function hs(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Ce(n.value);if(Ja(n))return n.filters.map(t=>hs(t)).join(",");{const t=n.filters.map(e=>hs(e)).join(",");return`${n.op}(${t})`}}function Za(n,t){return n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(n,t):n instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,c)=>o&&Za(u,i.filters[c]),!0):!1}(n,t):void M(19439)}function tu(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`}(n):n instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(tu).join(" ,")+"}"}(n):"Filter"}class Bh extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class qh extends rt{constructor(t,e){super(t,"in",e),this.keys=eu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class $h extends rt{constructor(t,e){super(t,"not-in",e),this.keys=eu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function eu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class jh extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bs(e)&&fn(e.arrayValue,this.value)}}class zh extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&fn(this.value.arrayValue,e)}}class Gh extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!fn(this.value.arrayValue,e)}}class Kh extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>fn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e=null,r=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.Ie=null}}function Mo(n,t=null,e=[],r=[],i=null,o=null,u=null){return new Hh(n,t,e,r,i,o,u)}function Vs(n){const t=$(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>hs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ce(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ce(r)).join(",")),t.Ie=e}return t.Ie}function Ds(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Za(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!xo(n.startAt,t.startAt)&&xo(n.endAt,t.endAt)}function ds(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e=null,r=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Qh(n,t,e,r,i,o,u,c){return new ue(n,t,e,r,i,o,u,c)}function nu(n){return new ue(n)}function Fo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ns(n){return n.collectionGroup!==null}function Ee(n){const t=$(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new st(Et.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new pn(o,r))}),e.has(Et.keyField().canonicalString())||t.Ee.push(new pn(Et.keyField(),r))}return t.Ee}function Pt(n){const t=$(n);return t.de||(t.de=Wh(t,Ee(n))),t.de}function Wh(n,t){if(n.limitType==="F")return Mo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new pn(i.field,o)});const e=n.endAt?new Se(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Se(n.startAt.position,n.startAt.inclusive):null;return Mo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function fs(n,t){const e=n.filters.concat([t]);return new ue(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function nr(n,t,e){return new ue(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function fr(n,t){return Ds(Pt(n),Pt(t))&&n.limitType===t.limitType}function ru(n){return`${Vs(Pt(n))}|lt:${n.limitType}`}function me(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>tu(i)).join(", ")}]`),cr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ce(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ce(i)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function pr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ee(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,c,h){const f=Lo(u,c,h);return u.inclusive?f<=0:f<0}(r.startAt,Ee(r),i)||r.endAt&&!function(u,c,h){const f=Lo(u,c,h);return u.inclusive?f>=0:f>0}(r.endAt,Ee(r),i))}(n,t)}function Yh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function su(n){return(t,e)=>{let r=!1;for(const i of Ee(n)){const o=Xh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Xh(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Re(h,f):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Le(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return $a(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new et(O.comparator);function Xt(){return Jh}const iu=new et(O.comparator);function en(...n){let t=iu;for(const e of n)t=t.insert(e.key,e);return t}function Zh(n){let t=iu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function se(){return sn()}function ou(){return sn()}function sn(){return new le(n=>n.toString(),(n,t)=>n.isEqual(t))}const td=new st(O.comparator);function j(...n){let t=td;for(const e of n)t=t.add(e);return t}const ed=new st(F);function nd(){return ed}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(t)?"-0":t}}function au(n){return{integerValue:""+n}}function rd(n,t){return Vh(t)?au(t):ks(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this._=void 0}}function sd(n,t,e){return n instanceof ps?function(i,o){const u={fields:{[Ga]:{stringValue:za},[Ha]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&hr(o)&&(o=dr(o)),o&&(u.fields[Ka]=o),{mapValue:u}}(e,t):n instanceof rr?uu(n,t):n instanceof sr?lu(n,t):function(i,o){const u=od(i,o),c=Uo(u)+Uo(i.Re);return cs(u)&&cs(i.Re)?au(c):ks(i.serializer,c)}(n,t)}function id(n,t,e){return n instanceof rr?uu(n,t):n instanceof sr?lu(n,t):e}function od(n,t){return n instanceof ms?function(r){return cs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ps extends mr{}class rr extends mr{constructor(t){super(),this.elements=t}}function uu(n,t){const e=cu(t);for(const r of n.elements)e.some(i=>bt(i,r))||e.push(r);return{arrayValue:{values:e}}}class sr extends mr{constructor(t){super(),this.elements=t}}function lu(n,t){let e=cu(t);for(const r of n.elements)e=e.filter(i=>!bt(i,r));return{arrayValue:{values:e}}}class ms extends mr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Uo(n){return tt(n.integerValue||n.doubleValue)}function cu(n){return bs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ad(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof rr&&i instanceof rr||r instanceof sr&&i instanceof sr?we(r.elements,i.elements,bt):r instanceof ms&&i instanceof ms?bt(r.Re,i.Re):r instanceof ps&&i instanceof ps}(n.transform,t.transform)}class oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new oe}static exists(t){return new oe(void 0,t)}static updateTime(t){return new oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Os{}function hu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ld(n.key,oe.none()):new Ls(n.key,n.data,oe.none());{const e=n.data,r=St.empty();let i=new st(Et.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new gr(n.key,r,new $t(i.toArray()),oe.none())}}function ud(n,t,e){n instanceof Ls?function(i,o,u){const c=i.value.clone(),h=qo(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof gr?function(i,o,u){if(!Gn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=qo(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(du(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function on(n,t,e,r){return n instanceof Ls?function(o,u,c,h){if(!Gn(o.precondition,u))return c;const f=o.value.clone(),g=$o(o.fieldTransforms,h,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof gr?function(o,u,c,h){if(!Gn(o.precondition,u))return c;const f=$o(o.fieldTransforms,h,u),g=u.data;return g.setAll(du(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,u,c){return Gn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Bo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&we(r,i,(o,u)=>ad(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ls extends Os{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends Os{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function du(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function qo(n,t,e){const r=new Map;J(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);r.set(o.field,id(u,c,e[i]))}return r}function $o(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,sd(o,u,t))}return r}class ld extends Os{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&ud(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=on(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=on(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ou();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=hu(u,c);h!==null&&r.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&we(this.mutations,t.mutations,(e,r)=>Bo(e,r))&&we(this.baseMutations,t.baseMutations,(e,r)=>Bo(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,B;function fu(n){if(n===void 0)return Lt("GRPC error has no .code"),S.UNKNOWN;switch(n){case nt.OK:return S.OK;case nt.CANCELLED:return S.CANCELLED;case nt.UNKNOWN:return S.UNKNOWN;case nt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case nt.INTERNAL:return S.INTERNAL;case nt.UNAVAILABLE:return S.UNAVAILABLE;case nt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case nt.NOT_FOUND:return S.NOT_FOUND;case nt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case nt.ABORTED:return S.ABORTED;case nt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case nt.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:n})}}(B=nt||(nt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Kt([4294967295,4294967295],0);function jo(n){const t=Ba().encode(n),e=new Na;return e.update(t),new Uint8Array(e.digest())}function zo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,r],0),new Kt([i,o],0)]}class xs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(r<0)throw new nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Kt.fromNumber(this.pe)}we(t,e,r){let i=t.add(e.multiply(Kt.fromNumber(r)));return i.compare(fd)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=jo(t),[r,i]=zo(e);for(let o=0;o<this.hashCount;o++){const u=this.we(r,i,o);if(!this.be(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new xs(o,i,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.pe===0)return;const e=jo(t),[r,i]=zo(e);for(let o=0;o<this.hashCount;o++){const u=this.we(r,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,mn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new _r(x.min(),i,new et(F),Xt(),j())}}class mn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new mn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,r,i){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=i}}class pu{constructor(t,e){this.targetId=t,this.Ce=e}}class mu{constructor(t,e,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Go{constructor(){this.Fe=0,this.Me=Ko(),this.xe=ht.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=j(),e=j(),r=j();return this.Me.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M(38017,{changeType:o})}}),new mn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Ko()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,J(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class pd{constructor(t){this.ze=t,this.je=new Map,this.He=Xt(),this.Je=Bn(),this.Ye=Bn(),this.Ze=new et(F)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,i)=>{this.it(i)&&e(i)})}ot(t){const e=t.targetId,r=t.Ce.count,i=this._t(e);if(i){const o=i.target;if(ds(o))if(r===0){const u=new O(o.path);this.tt(e,u,yt.newNoDocument(u,x.min()))}else J(r===1,20013,{expectedCount:r});else{const u=this.ut(e);if(u!==r){const c=this.ct(t),h=c?this.lt(c,t,u):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Wt(r).toUint8Array()}catch(h){if(h instanceof ja)return Ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new xs(u,i,o)}catch(h){return Ae(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.ze.Pt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),i++)}),i}It(t){const e=new Map;this.je.forEach((o,u)=>{const c=this._t(u);if(c){if(o.current&&ds(c.target)){const h=new O(c.target.path);this.Et(h).has(u)||this.dt(u,h)||this.tt(u,h,yt.newNoDocument(h,t))}o.Le&&(e.set(u,o.qe()),o.Qe())}});let r=j();this.Ye.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,u)=>u.setReadTime(t));const i=new _r(t,e,this.Ze,this.He,r);return this.He=Xt(),this.Je=Bn(),this.Ye=Bn(),this.Ze=new et(F),i}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const i=this.rt(t);this.dt(t,e)?i.$e(e,1):i.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Go,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new st(F),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new st(F),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Go),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Bn(){return new et(O.comparator)}function Ko(){return new et(O.comparator)}const md={asc:"ASCENDING",desc:"DESCENDING"},gd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_d={and:"AND",or:"OR"};class yd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gs(n,t){return n.useProto3Json||cr(t)?t:{value:t}}function _s(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ve(n){return J(!!n,49232),x.fromTimestamp(function(e){const r=Qt(e);return new at(r.seconds,r.nanos)}(n))}function _u(n,t){return ys(n,t).canonicalString()}function ys(n,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function yu(n){const t=W.fromString(n);return J(Au(t),10190,{key:t.toString()}),t}function Jr(n,t){const e=yu(t);if(e.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(vu(e))}function Eu(n,t){return _u(n.databaseId,t)}function Ed(n){const t=yu(n);return t.length===4?W.emptyPath():vu(t)}function Ho(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vu(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function vd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(J(g===void 0||typeof g=="string",58123),ht.fromBase64String(g||"")):(J(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),ht.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const g=f.code===void 0?S.UNKNOWN:fu(f.code);return new V(g,f.message||"")}(u);e=new mu(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jr(n,r.document.name),o=ve(r.document.updateTime),u=r.document.createTime?ve(r.document.createTime):x.min(),c=new St({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(i,o,u,c),f=r.targetIds||[],g=r.removedTargetIds||[];e=new Kn(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Jr(n,r.document),o=r.readTime?ve(r.readTime):x.min(),u=yt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Kn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Jr(n,r.document),o=r.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new dd(i,o),c=r.targetId;e=new pu(c,u)}}return e}function Td(n,t){return{documents:[Eu(n,t.path)]}}function Id(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Eu(n,i);const o=function(f){if(f.length!==0)return Iu(Rt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(g=>function(R){return{field:ge(R.field),direction:Rd(R.dir)}}(g))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=gs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:i}}function Ad(n){let t=Ed(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){J(r===1,65062);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(A){const R=Tu(A);return R instanceof Rt&&Ja(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(k){return new pn(_e(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,cr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(A){const R=!!A.before,P=A.values||[];return new Se(P,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,P=A.values||[];return new Se(P,R)}(e.endAt)),Qh(t,i,u,o,c,"F",h,f)}function wd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=_e(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_e(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_e(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=_e(e.unaryFilter.field);return rt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return rt.create(_e(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(r=>Tu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function Rd(n){return md[n]}function Cd(n){return gd[n]}function Sd(n){return _d[n]}function ge(n){return{fieldPath:n.canonicalString()}}function _e(n){return Et.fromServerFormat(n.fieldPath)}function Iu(n){return n instanceof rt?function(e){if(e.op==="=="){if(Oo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NAN"}};if(ko(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Oo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NAN"}};if(ko(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(e.field),op:Cd(e.op),value:e.value}}}(n):n instanceof Rt?function(e){const r=e.getFilters().map(i=>Iu(i));return r.length===1?r[0]:{compositeFilter:{op:Sd(e.op),filters:r}}}(n):M(54877,{filter:n})}function Au(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e,r,i,o=x.min(),u=x.min(),c=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.wt=t}}function bd(n){const t=Ad({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?nr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.yn=new Dd}addToCollectionParentIndex(t,e){return this.yn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Ht.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Dd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(W.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wu=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(wu,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Pe(0)}static ir(){return new Pe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="LruGarbageCollector",Nd=1048576;function Yo([n,t],[e,r]){const i=F(n,e);return i===0?F(t,r):i}class kd{constructor(t){this.cr=t,this.buffer=new st(Yo),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Yo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Od{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){D(Wo,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Oe(e)?D(Wo,"Ignoring IndexedDB error during garbage collection: ",e):await ur(e)}await this.Ir(3e5)})}}class Ld{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(lr.le);const r=new kd(e);return this.Er.forEachTarget(t,i=>r.Pr(i.sequenceNumber)).next(()=>this.Er.Ar(t,i=>r.Pr(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Er.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Qo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qo):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let r,i,o,u,c,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(r=A,c=Date.now(),this.removeTargets(t,r,e))).next(A=>(o=A,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(A=>(f=Date.now(),pe()<=q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${A} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function xd(n,t){return new Ld(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.changes=new le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&on(r.mutation,i,$t.empty(),at.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=se();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=en();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=se();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,i){let o=Xt();const u=sn(),c=function(){return sn()}();return e.forEach((h,f)=>{const g=r.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof gr)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),on(g.mutation,f,g.mutation.getFieldMask(),at.now())):u.set(f.key,$t.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>u.set(f,g)),e.forEach((f,g)=>{var A;return c.set(f,new Fd(g,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=sn();let i=new et((u,c)=>u-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||$t.empty();g=c.applyToLocalView(f,g),r.set(h,g);const A=(i.get(c.batchId)||j()).add(h);i=i.insert(c.batchId,A)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,g=h.value,A=ou();g.forEach(R=>{if(!o.has(R)){const P=hu(e.get(R),r.get(R));P!==null&&A.set(R,P),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return C.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ns(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(se());let c=cn,h=o;return u.next(f=>C.forEach(f,(g,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(g)?C.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(g=>({batchId:c,changes:Zh(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=en();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=en();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const f=function(A,R){return new ue(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(g=>{g.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((h,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,yt.newInvalidDocument(g)))});let c=en();return u.forEach((h,f)=>{const g=o.get(h);g!==void 0&&on(g.mutation,f,$t.empty(),at.now()),pr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return C.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ve(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(i){return{name:i.name,query:bd(i.bundledQuery),readTime:ve(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.overlays=new et(O.comparator),this.Or=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=se();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Or.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=se(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new et((f,g)=>f-g);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=se(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const c=se(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>c.set(f,g)),!(c.size()>=i)););return C.resolve(c)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.Or.get(i.largestBatchId).delete(r.key);this.Or.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new hd(e,r));let o=this.Or.get(e);o===void 0&&(o=j(),this.Or.set(e,o)),this.Or.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.Nr=new st(ot.Br),this.Lr=new st(ot.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Qr(new ot(t,e))}$r(t,e){t.forEach(r=>this.removeReference(r,e))}Ur(t){const e=new O(new W([])),r=new ot(e,t),i=new ot(e,t+1),o=[];return this.Lr.forEachInRange([r,i],u=>{this.Qr(u),o.push(u.key)}),o}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new O(new W([])),r=new ot(e,t),i=new ot(e,t+1);let o=j();return this.Lr.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new ot(t,0),r=this.Nr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return O.comparator(t.key,e.key)||F(t.Gr,e.Gr)}static kr(t,e){return F(t.Gr,e.Gr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new st(ot.Br)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new cd(o,e,r,i);this.mutationQueue.push(u);for(const c of i)this.zr=this.zr.add(new ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Hr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?bh:this.Jn-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,i],u=>{const c=this.jr(u.Gr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(F);return e.forEach(i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,u],c=>{r=r.add(c.Gr)})}),C.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new ot(new O(o),0);let c=new st(F);return this.zr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.Gr)),!0)},u),C.resolve(this.Jr(c))}Jr(t){const e=[];return t.forEach(r=>{const i=this.jr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){J(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return C.forEach(e.mutations,i=>{const o=new ot(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.zr=r})}Xn(t){}containsKey(t,e){const r=new ot(e,0),i=this.zr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t){this.Zr=t,this.docs=function(){return new et(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.Zr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=Xt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Xt();const u=e.path,c=new O(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Rh(wh(g),r)<=0||(i.has(g.key)||pr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M(9500)}Xr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Gd(this)}getSize(t){return C.resolve(this.size)}}class Gd extends Md{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.vr.addEntry(t,i)):this.vr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.persistence=t,this.ei=new le(e=>Vs(e),Ds),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.ti=0,this.ni=new Ms,this.targetCount=0,this.ri=Pe.rr()}forEachTarget(t,e){return this.ei.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ti&&(this.ti=e),C.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.ar(e),C.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ei.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ei.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ei.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.ni.qr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.ni.$r(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ni.Wr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e){this.ii={},this.overlays={},this.si=new lr(0),this.oi=!1,this.oi=!0,this._i=new $d,this.referenceDelegate=t(this),this.ai=new Kd(this),this.indexManager=new Vd,this.remoteDocumentCache=function(i){return new zd(i)}(r=>this.referenceDelegate.ui(r)),this.serializer=new Pd(e),this.ci=new Bd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ii[t.toKey()];return r||(r=new jd(e,this.referenceDelegate),this.ii[t.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new Hd(this.si.next());return this.referenceDelegate.li(),r(i).next(o=>this.referenceDelegate.hi(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Pi(t,e){return C.or(Object.values(this.ii).map(r=>()=>r.containsKey(t,e)))}}class Hd extends Sh{constructor(t){super(),this.currentSequenceNumber=t}}class Fs{constructor(t){this.persistence=t,this.Ti=new Ms,this.Ii=null}static Ei(t){return new Fs(t)}get di(){if(this.Ii)return this.Ii;throw M(60996)}addReference(t,e,r){return this.Ti.addReference(r,e),this.di.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ti.removeReference(r,e),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,r=>{const i=O.fromPath(r);return this.Ai(t,i).next(o=>{o||e.removeEntry(i,x.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return C.or([()=>C.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class ir{constructor(t,e){this.persistence=t,this.Ri=new le(r=>Dh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=xd(this,e)}static Ei(t,e){return new ir(t,e)}li(){}hi(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Vr(t){let e=0;return this.Ar(t,r=>{e++}).next(()=>e)}Ar(t,e){return C.forEach(this.Ri,(r,i)=>this.gr(t,r,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Xr(t,u=>this.gr(t,u,e).next(c=>{c||(r++,o.removeEntry(u,x.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=zn(t.data.value)),e}gr(t,e,r){return C.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.Ri.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ls=r,this.hs=i}static Ps(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Us(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Hl()?8:Ph(Gl())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Vs(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Qd;return this.fs(t,e,u).next(c=>{if(o.result=c,this.Is)return this.gs(t,e,u,c.size)})}).next(()=>o.result)}gs(t,e,r,i){return r.documentReadCount<this.Es?(pe()<=q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",me(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),C.resolve()):(pe()<=q.DEBUG&&D("QueryEngine","Query:",me(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(pe()<=q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",me(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):C.resolve())}Rs(t,e){if(Fo(e))return C.resolve(null);let r=Pt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=nr(e,null,"F"),r=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=j(...o);return this.As.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ps(e,c);return this.ys(e,f,u,h.readTime)?this.Rs(t,nr(e,null,"F")):this.ws(t,f,e,h)}))})))}Vs(t,e,r,i){return Fo(e)||i.isEqual(x.min())?C.resolve(null):this.As.getDocuments(t,r).next(o=>{const u=this.ps(e,o);return this.ys(e,u,r,i)?C.resolve(null):(pe()<=q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),me(e)),this.ws(t,u,e,Ah(i,cn)).next(c=>c))})}ps(t,e){let r=new st(su(t));return e.forEach((i,o)=>{pr(t,o)&&(r=r.add(o))}),r}ys(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}fs(t,e,r){return pe()<=q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",me(e)),this.As.getDocumentsMatchingQuery(t,e,Ht.min(),r)}ws(t,e,r,i){return this.As.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="LocalStore",Yd=3e8;class Xd{constructor(t,e,r,i){this.persistence=t,this.bs=e,this.serializer=i,this.Ss=new et(F),this.Ds=new le(o=>Vs(o),Ds),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(r)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ud(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function Jd(n,t,e,r){return new Xd(n,t,e,r)}async function Cu(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Fs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let h=j();for(const f of i){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){c.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ms:f,removedBatchIds:u,addedBatchIds:c}))})})}function Su(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function Zd(n,t){const e=$(n),r=t.snapshotVersion;let i=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Cs.newChangeBuffer({trackRemovals:!0});i=e.Ss;const c=[];t.targetChanges.forEach((g,A)=>{const R=i.get(A);if(!R)return;c.push(e.ai.removeMatchingKeys(o,g.removedDocuments,A).next(()=>e.ai.addMatchingKeys(o,g.addedDocuments,A)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?P=P.withResumeToken(ht.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,r)),i=i.insert(A,P),function(L,N,Y){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Yd?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(R,P,g)&&c.push(e.ai.updateTargetData(o,P))});let h=Xt(),f=j();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(tf(o,u,t.documentUpdates).next(g=>{h=g.xs,f=g.Os})),!r.isEqual(x.min())){const g=e.ai.getLastRemoteSnapshotVersion(o).next(A=>e.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(g)}return C.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ss=i,o))}function tf(n,t,e){let r=j(),i=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Xt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(x.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):D(Bs,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{xs:u,Os:i}})}function ef(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.ai.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.ai.allocateTargetId(r).next(u=>(i=new jt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.ai.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(r.targetId,r),e.Ds.set(t,r.targetId)),r})}async function Es(n,t,e){const r=$(n),i=r.Ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Oe(u))throw u;D(Bs,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Ss=r.Ss.remove(t),r.Ds.delete(i.target)}function Xo(n,t,e){const r=$(n);let i=x.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,g){const A=$(h),R=A.Ds.get(g);return R!==void 0?C.resolve(A.Ss.get(R)):A.ai.getTargetData(f,g)}(r,u,Pt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>r.bs.getDocumentsMatchingQuery(u,t,e?i:x.min(),e?o:j())).next(c=>(nf(r,Yh(t),c),{documents:c,Ns:o})))}function nf(n,t,e){let r=n.vs.get(t)||x.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(t,r)}class Jo{constructor(){this.activeTargetIds=nd()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rf{constructor(){this.So=new Jo,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,r){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Jo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="ConnectivityMonitor";class ta{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){D(Zo,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){D(Zo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn=null;function vs(){return qn===null?qn=function(){return 268435456+Math.round(2147483648*Math.random())}():qn++,"0x"+qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="RestConnection",of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class af{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${r}/databases/${i}`,this.qo=this.databaseId.database===Zn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Qo(t,e,r,i,o){const u=vs(),c=this.$o(t,e.toUriEncodedString());D(Zr,`Sending RPC '${t}' ${u}:`,c,r);const h={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(h,i,o),this.Ko(t,c,h,r).then(f=>(D(Zr,`Received RPC '${t}' ${u}: `,f),f),f=>{throw Ae(Zr,`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",r),f})}Wo(t,e,r,i,o,u){return this.Qo(t,e,r,i,o)}Uo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ke}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}$o(t,e){const r=of[t];return`${this.Lo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class lf extends af{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,r,i){const o=vs();return new Promise((u,c)=>{const h=new ka;h.setWithCredentials(!0),h.listenOnce(Oa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case jn.NO_ERROR:const g=h.getResponseJson();D(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),u(g);break;case jn.TIMEOUT:D(gt,`RPC '${t}' ${o} timed out`),c(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const A=h.getStatus();if(D(gt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const k=function(N){const Y=N.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(Y)>=0?Y:S.UNKNOWN}(P.status);c(new V(k,P.message))}else c(new V(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new V(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{s_:t,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{D(gt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);D(gt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}a_(t,e,r){const i=vs(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Ma(),c=xa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Uo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");D(gt,`Creating RPC '${t}' stream ${i}: ${g}`,h);const A=u.createWebChannel(g,h);let R=!1,P=!1;const k=new uf({Go:N=>{P?D(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(R||(D(gt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),D(gt,`RPC '${t}' stream ${i} sending:`,N),A.send(N))},zo:()=>A.close()}),L=(N,Y,X)=>{N.listen(Y,Q=>{try{X(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return L(A,tn.EventType.OPEN,()=>{P||(D(gt,`RPC '${t}' stream ${i} transport opened.`),k.t_())}),L(A,tn.EventType.CLOSE,()=>{P||(P=!0,D(gt,`RPC '${t}' stream ${i} transport closed`),k.r_())}),L(A,tn.EventType.ERROR,N=>{P||(P=!0,Ae(gt,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),k.r_(new V(S.UNAVAILABLE,"The operation could not be completed")))}),L(A,tn.EventType.MESSAGE,N=>{var Y;if(!P){const X=N.data[0];J(!!X,16349);const Q=X,it=(Q==null?void 0:Q.error)||((Y=Q[0])===null||Y===void 0?void 0:Y.error);if(it){D(gt,`RPC '${t}' stream ${i} received error:`,it);const Vt=it.status;let ut=function(_){const y=nt[_];if(y!==void 0)return fu(y)}(Vt),v=it.message;ut===void 0&&(ut=S.INTERNAL,v="Unknown error status: "+Vt+" with message "+it.message),P=!0,k.r_(new V(ut,v)),A.close()}else D(gt,`RPC '${t}' stream ${i} received:`,X),k.i_(X)}}),L(c,La.STAT_EVENT,N=>{N.stat===as.PROXY?D(gt,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===as.NOPROXY&&D(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.n_()},0),k}}function ts(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n){return new yd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.bi=t,this.timerId=e,this.u_=r,this.c_=i,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="PersistentStream";class cf{constructor(t,e,r,i,o,u,c,h){this.bi=t,this.R_=r,this.V_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Pu(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.m_===e&&this.B_(r,i)},r=>{t(()=>{const i=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(i)})})}B_(t,e){const r=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(i=>{r(()=>this.L_(i))}),this.stream.onMessage(i=>{r(()=>++this.p_==1?this.q_(i):this.onNext(i))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return D(ea,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(D(ea,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hf extends cf{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=vd(this.serializer,t),r=function(o){if(!("targetChange"in o))return x.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?x.min():u.readTime?ve(u.readTime):x.min()}(t);return this.listener.Q_(e,r)}U_(t){const e={};e.database=Ho(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=ds(h)?{documents:Td(o,h)}:{query:Id(o,h).gt},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=gu(o,u.resumeToken);const f=gs(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(x.min())>0){c.readTime=_s(o,u.snapshotVersion.toTimestamp());const f=gs(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=wd(this.serializer,t);r&&(e.labels=r),this.F_(e)}K_(t){const e={};e.database=Ho(this.serializer),e.removeTarget=t,this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{}class ff extends df{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.J_=!1}Y_(){if(this.J_)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,r,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Qo(t,ys(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(S.UNKNOWN,o.toString())})}Wo(t,e,r,i,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Wo(t,ys(e,r),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new V(S.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Lt(e),this.ea=!1):D("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="RemoteStore";class mf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(u=>{r.enqueueAndForget(async()=>{_n(this)&&(D(be,"Restarting streams for network reachability change."),await async function(h){const f=$(h);f.aa.add(4),await gn(f),f.la.set("Unknown"),f.aa.delete(4),await Er(f)}(this))})}),this.la=new pf(r,i)}}async function Er(n){if(_n(n))for(const t of n.ua)await t(!0)}async function gn(n){for(const t of n.ua)await t(!1)}function bu(n,t){const e=$(n);e._a.has(t.targetId)||(e._a.set(t.targetId,t),zs(e)?js(e):xe(e).b_()&&$s(e,t))}function qs(n,t){const e=$(n),r=xe(e);e._a.delete(t),r.b_()&&Vu(e,t),e._a.size===0&&(r.b_()?r.v_():_n(e)&&e.la.set("Unknown"))}function $s(n,t){if(n.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xe(n).U_(t)}function Vu(n,t){n.ha.Ke(t),xe(n).K_(t)}function js(n){n.ha=new pd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n._a.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),xe(n).start(),n.la.ta()}function zs(n){return _n(n)&&!xe(n).w_()&&n._a.size>0}function _n(n){return $(n).aa.size===0}function Du(n){n.ha=void 0}async function gf(n){n.la.set("Online")}async function _f(n){n._a.forEach((t,e)=>{$s(n,t)})}async function yf(n,t){Du(n),zs(n)?(n.la.ia(t),js(n)):n.la.set("Unknown")}async function Ef(n,t,e){if(n.la.set("Online"),t instanceof mu&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i._a.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i._a.delete(c),i.ha.removeTarget(c))}(n,t)}catch(r){D(be,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await na(n,r)}else if(t instanceof Kn?n.ha.Xe(t):t instanceof pu?n.ha.ot(t):n.ha.nt(t),!e.isEqual(x.min()))try{const r=await Su(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.ha.It(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o._a.get(f);g&&o._a.set(f,g.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const g=o._a.get(h);if(!g)return;o._a.set(h,g.withResumeToken(ht.EMPTY_BYTE_STRING,g.snapshotVersion)),Vu(o,h);const A=new jt(g.target,h,f,g.sequenceNumber);$s(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){D(be,"Failed to raise snapshot:",r),await na(n,r)}}async function na(n,t,e){if(!Oe(t))throw t;n.aa.add(1),await gn(n),n.la.set("Offline"),e||(e=()=>Su(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(be,"Retrying IndexedDB access"),await e(),n.aa.delete(1),await Er(n)})}async function ra(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),D(be,"RemoteStore received new credentials");const r=_n(e);e.aa.add(3),await gn(e),r&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await Er(e)}async function vf(n,t){const e=$(n);t?(e.aa.delete(2),await Er(e)):t||(e.aa.add(2),await gn(e),e.la.set("Unknown"))}function xe(n){return n.Pa||(n.Pa=function(e,r,i){const o=$(e);return o.Y_(),new hf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{jo:gf.bind(null,n),Jo:_f.bind(null,n),Zo:yf.bind(null,n),Q_:Ef.bind(null,n)}),n.ua.push(async t=>{t?(n.Pa.D_(),zs(n)?js(n):n.la.set("Unknown")):(await n.Pa.stop(),Du(n))})),n.Pa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,c=new Gs(t,e,u,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nu(n,t){if(Lt("AsyncQueue",`${t}: ${n}`),Oe(n))return new V(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static emptySet(t){return new Te(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=en(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Te)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Te;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.Ia=new et(O.comparator)}track(t){const e=t.doc.key,r=this.Ia.get(e);r?t.type!==0&&r.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&r.type!==1?this.Ia=this.Ia.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Ia=this.Ia.remove(e):t.type===1&&r.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,Ea:r}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ve{constructor(t,e,r,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ve(t,e,Te.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class If{constructor(){this.queries=ia(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,r){const i=$(e),o=i.queries;i.queries=ia(),o.forEach((u,c)=>{for(const h of c.Ra)h.onError(r)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function ia(){return new le(n=>ru(n),fr)}async function Af(n,t){const e=$(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Va()&&t.ma()&&(r=2):(o=new Tf,r=t.ma()?0:1);try{switch(r){case 0:o.Aa=await e.onListen(i,!0);break;case 1:o.Aa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Nu(u,`Initialization of query '${me(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Ra.push(t),t.ga(e.onlineState),o.Aa&&t.pa(o.Aa)&&Ks(e)}async function wf(n,t){const e=$(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.Ra.indexOf(t);u>=0&&(o.Ra.splice(u,1),o.Ra.length===0?i=t.ma()?0:1:!o.Va()&&t.ma()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Rf(n,t){const e=$(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.Ra)c.pa(i)&&(r=!0);u.Aa=i}}r&&Ks(e)}function Cf(n,t,e){const r=$(n),i=r.queries.get(t);if(i)for(const o of i.Ra)o.onError(e);r.queries.delete(t)}function Ks(n){n.fa.forEach(t=>{t.next()})}var Ts,oa;(oa=Ts||(Ts={})).ya="default",oa.Cache="cache";class Sf{constructor(t,e,r){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const r=e!=="Offline";return(!this.options.Fa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==Ts.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.key=t}}class Ou{constructor(t){this.key=t}}class Pf{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=j(),this.mutatedKeys=j(),this.Ua=su(t),this.Ka=new Te(this.Ua)}get Wa(){return this.qa}Ga(t,e){const r=e?e.za:new sa,i=e?e.Ka:this.Ka;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((g,A)=>{const R=i.get(g),P=pr(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let N=!1;R&&P?R.data.isEqual(P.data)?k!==L&&(r.track({type:3,doc:P}),N=!0):this.ja(R,P)||(r.track({type:2,doc:P}),N=!0,(h&&this.Ua(P,h)>0||f&&this.Ua(P,f)<0)&&(c=!0)):!R&&P?(r.track({type:0,doc:P}),N=!0):R&&!P&&(r.track({type:1,doc:R}),N=!0,(h||f)&&(c=!0)),N&&(P?(u=u.add(P),o=L?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ka:u,za:r,ys:c,mutatedKeys:o}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const u=t.za.da();u.sort((g,A)=>function(P,k){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:N})}};return L(P)-L(k)}(g.type,A.type)||this.Ua(g.doc,A.doc)),this.Ha(r),i=i!=null&&i;const c=e&&!i?this.Ja():[],h=this.$a.size===0&&this.current&&!i?1:0,f=h!==this.Qa;return this.Qa=h,u.length!==0||f?{snapshot:new Ve(this.query,t.Ka,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new sa,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=j(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const e=[];return t.forEach(r=>{this.$a.has(r)||e.push(new Ou(r))}),this.$a.forEach(r=>{t.has(r)||e.push(new ku(r))}),e}Xa(t){this.qa=t.Ns,this.$a=j();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return Ve.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Hs="SyncEngine";class bf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Vf{constructor(t){this.key=t,this.tu=!1}}class Df{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new le(c=>ru(c),fr),this.iu=new Map,this.su=new Set,this.ou=new et(O.comparator),this._u=new Map,this.au=new Ms,this.uu={},this.cu=new Map,this.lu=Pe.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Nf(n,t,e=!0){const r=Uu(n);let i;const o=r.ru.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.eu()):i=await Lu(r,t,e,!0),i}async function kf(n,t){const e=Uu(n);await Lu(e,t,!0,!1)}async function Lu(n,t,e,r){const i=await ef(n.localStore,Pt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Of(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&bu(n.remoteStore,i),c}async function Of(n,t,e,r,i){n.Pu=(A,R,P)=>async function(L,N,Y,X){let Q=N.view.Ga(Y);Q.ys&&(Q=await Xo(L.localStore,N.query,!1).then(({documents:v})=>N.view.Ga(v,Q)));const it=X&&X.targetChanges.get(N.targetId),Vt=X&&X.targetMismatches.get(N.targetId)!=null,ut=N.view.applyChanges(Q,L.isPrimaryClient,it,Vt);return ua(L,N.targetId,ut.Ya),ut.snapshot}(n,A,R,P);const o=await Xo(n.localStore,t,!0),u=new Pf(t,o.Ns),c=u.Ga(o.documents),h=mn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(c,n.isPrimaryClient,h);ua(n,e,f.Ya);const g=new bf(t,e,u);return n.ru.set(t,g),n.iu.has(e)?n.iu.get(e).push(t):n.iu.set(e,[t]),f.snapshot}async function Lf(n,t,e){const r=$(n),i=r.ru.get(t),o=r.iu.get(i.targetId);if(o.length>1)return r.iu.set(i.targetId,o.filter(u=>!fr(u,t))),void r.ru.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Es(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&qs(r.remoteStore,i.targetId),Is(r,i.targetId)}).catch(ur)):(Is(r,i.targetId),await Es(r.localStore,i.targetId,!0))}async function xf(n,t){const e=$(n),r=e.ru.get(t),i=e.iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),qs(e.remoteStore,r.targetId))}async function xu(n,t){const e=$(n);try{const r=await Zd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e._u.get(o);u&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.tu=!0:i.modifiedDocuments.size>0?J(u.tu,14607):i.removedDocuments.size>0&&(J(u.tu,42227),u.tu=!1))}),await Fu(e,r,t)}catch(r){await ur(r)}}function aa(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ru.forEach((o,u)=>{const c=u.view.ga(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=$(u);h.onlineState=c;let f=!1;h.queries.forEach((g,A)=>{for(const R of A.Ra)R.ga(c)&&(f=!0)}),f&&Ks(h)}(r.eventManager,t),i.length&&r.nu.Q_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Mf(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r._u.get(t),o=i&&i.key;if(o){let u=new et(O.comparator);u=u.insert(o,yt.newNoDocument(o,x.min()));const c=j().add(o),h=new _r(x.min(),new Map,new et(F),u,c);await xu(r,h),r.ou=r.ou.remove(o),r._u.delete(t),Qs(r)}else await Es(r.localStore,t,!1).then(()=>Is(r,t,e)).catch(ur)}function Is(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.iu.get(t))n.ru.delete(r),e&&n.nu.Tu(r,e);n.iu.delete(t),n.isPrimaryClient&&n.au.Ur(t).forEach(r=>{n.au.containsKey(r)||Mu(n,r)})}function Mu(n,t){n.su.delete(t.path.canonicalString());const e=n.ou.get(t);e!==null&&(qs(n.remoteStore,e),n.ou=n.ou.remove(t),n._u.delete(e),Qs(n))}function ua(n,t,e){for(const r of e)r instanceof ku?(n.au.addReference(r.key,t),Ff(n,r)):r instanceof Ou?(D(Hs,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,t),n.au.containsKey(r.key)||Mu(n,r.key)):M(19791,{Iu:r})}function Ff(n,t){const e=t.key,r=e.path.canonicalString();n.ou.get(e)||n.su.has(r)||(D(Hs,"New document in limbo: "+e),n.su.add(r),Qs(n))}function Qs(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const t=n.su.values().next().value;n.su.delete(t);const e=new O(W.fromString(t)),r=n.lu.next();n._u.set(r,new Vf(e)),n.ou=n.ou.insert(e,r),bu(n.remoteStore,new jt(Pt(nu(e.path)),r,"TargetPurposeLimboResolution",lr.le))}}async function Fu(n,t,e){const r=$(n),i=[],o=[],u=[];r.ru.isEmpty()||(r.ru.forEach((c,h)=>{u.push(r.Pu(h,t,e).then(f=>{var g;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){i.push(f);const A=Us.Ps(h.targetId,f);o.push(A)}}))}),await Promise.all(u),r.nu.Q_(i),await async function(h,f){const g=$(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>C.forEach(f,R=>C.forEach(R.ls,P=>g.persistence.referenceDelegate.addReference(A,R.targetId,P)).next(()=>C.forEach(R.hs,P=>g.persistence.referenceDelegate.removeReference(A,R.targetId,P)))))}catch(A){if(!Oe(A))throw A;D(Bs,"Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const P=g.Ss.get(R),k=P.snapshotVersion,L=P.withLastLimboFreeSnapshotVersion(k);g.Ss=g.Ss.insert(R,L)}}}(r.localStore,o))}async function Uf(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){D(Hs,"User change. New user:",t.toKey());const r=await Cu(e.localStore,t);e.currentUser=t,function(o,u){o.cu.forEach(c=>{c.forEach(h=>{h.reject(new V(S.CANCELLED,u))})}),o.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fu(e,r.Ms)}}function Bf(n,t){const e=$(n),r=e._u.get(t);if(r&&r.tu)return j().add(r.key);{let i=j();const o=e.iu.get(t);if(!o)return i;for(const u of o){const c=e.ru.get(u);i=i.unionWith(c.view.Wa)}return i}}function Uu(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=xu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Mf.bind(null,t),t.nu.Q_=Rf.bind(null,t.eventManager),t.nu.Tu=Cf.bind(null,t.eventManager),t}class or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=yr(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return Jd(this.persistence,new Wd,t.initialUser,this.serializer)}Ru(t){return new Ru(Fs.Ei,this.serializer)}Au(t){return new rf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}or.provider={build:()=>new or};class qf extends or{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){J(this.persistence.referenceDelegate instanceof ir,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Od(r,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Ru(r=>ir.Ei(r,e),this.serializer)}}class As{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uf.bind(null,this.syncEngine),await vf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new If}()}createDatastore(t){const e=yr(t.databaseInfo.databaseId),r=function(o){return new lf(o)}(t.databaseInfo);return function(o,u,c,h){return new ff(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,c){return new mf(r,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>aa(this.syncEngine,e,0),function(){return ta.C()?new ta:new sf}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,g){const A=new Df(i,o,u,c,h,f);return g&&(A.hu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=$(i);D(be,"RemoteStore shutting down."),o.aa.add(5),await gn(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}As.provider={build:()=>new As};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirestoreClient";class jf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=vh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{D(Jt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(D(Jt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Nu(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function es(n,t){n.asyncQueue.verifyOperationInProgress(),D(Jt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function la(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zf(n);D(Jt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ra(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ra(t.remoteStore,i)),n._onlineComponents=t}async function zf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Jt,"Using user provided OfflineComponentProvider");try{await es(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await es(n,new or)}}else D(Jt,"Using default OfflineComponentProvider"),await es(n,new qf(void 0));return n._offlineComponents}async function Gf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Jt,"Using user provided OnlineComponentProvider"),await la(n,n._uninitializedComponentsProvider._online)):(D(Jt,"Using default OnlineComponentProvider"),await la(n,new As))),n._onlineComponents}async function Kf(n){const t=await Gf(n),e=t.eventManager;return e.onListen=Nf.bind(null,t.syncEngine),e.onUnlisten=Lf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=kf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=xf.bind(null,t.syncEngine),e}function Hf(n,t,e={}){const r=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const g=new $f({next:R=>{g.yu(),u.enqueueAndForget(()=>wf(o,A)),R.fromCache&&h.source==="server"?f.reject(new V(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Sf(c,g,{includeMetadataChanges:!0,Fa:!0});return Af(o,A)}(await Kf(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Map;function Qf(n,t,e,r){if(t===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ha(n){if(O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function ws(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vr(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="firestore.googleapis.com",da=!0;class fa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qu,this.ssl=da}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:da;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=wu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nd)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ws{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fh;switch(r.type){case"firstParty":return new _h(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ca.get(e);r&&(D("ComponentProvider","Removing Datastore"),ca.delete(e),r.terminate())}(this),Promise.resolve()}}function Wf(n,t,e,r={}){var i;const o=(n=ws(n,Ws))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==qu&&o.host!==c&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!Wn(h,u)&&(n._setSettings(h),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=_t.MOCK_USER;else{f=zl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new _t(A)}n._authCredentials=new ph(new Ua(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xt(this.firestore,t,this._query)}}class Mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mt(this.firestore,t,this._key)}}class Ie extends xt{constructor(t,e,r){super(t,e,nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mt(this.firestore,null,new O(t))}withConverter(t){return new Ie(this.firestore,t,this._path)}}function Yf(n,t,...e){if(n=an(n),n instanceof Ws){const r=W.fromString(t,...e);return ha(r),new Ie(n,null,r)}{if(!(n instanceof Mt||n instanceof Ie))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return ha(r),new Ie(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="AsyncQueue";class ma{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Pu(this,"async_queue_retry"),this.ju=()=>{const r=ts();r&&D(pa,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=t;const e=ts();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=ts();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new ie;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Oe(t))throw t;D(pa,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(r=>{throw this.Ku=r,this.Wu=!1,Lt("INTERNAL UNHANDLED ERROR: ",ga(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=e,e}enqueueAfterDelay(t,e,r){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const i=Gs.createAndSchedule(this,t,e,r,o=>this.Xu(o));return this.Uu.push(i),i}Ju(){this.Ku&&M(47125,{ec:ga(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function ga(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class $u extends Ws{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ma,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ma(t),this._firestoreClient=void 0,await t}}}function Xf(n,t){const e=typeof n=="object"?n:th(),r=typeof n=="string"?n:Zn,i=Wc(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=$l("firestore");o&&Wf(i,...o)}return i}function Jf(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zf(n),n._firestoreClient}function Zf(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,f,g){return new Oh(c,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Bu(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(ht.fromBase64String(t))}catch(e){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new De(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=/^__.*__$/;function Gu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{oc:n})}}class Js{constructor(t,e,r,i,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new Js(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ac({path:r,cc:!1});return i.lc(t),i}hc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ac({path:r,cc:!1});return i._c(),i}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Rs(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(Gu(this.oc)&&tp.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class ep{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||yr(t)}dc(t,e,r,i=!1){return new Js({oc:t,methodName:e,Ec:r,path:Et.emptyPath(),cc:!1,Ic:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ku(n){const t=n._freezeSettings(),e=yr(n._databaseId);return new ep(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Hu(n,t,e,r=!1){return Zs(e,n.dc(r?4:3,t))}function Zs(n,t){if(Qu(n=an(n)))return rp("Unsupported field value:",t,n),np(n,t);if(n instanceof zu)return function(r,i){if(!Gu(i.oc))throw i.Tc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(r,i){const o=[];let u=0;for(const c of r){let h=Zs(c,i.Pc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=an(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=at.fromDate(r);return{timestampValue:_s(i.serializer,o)}}if(r instanceof at){const o=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_s(i.serializer,o)}}if(r instanceof Ys)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:gu(i.serializer,r._byteString)};if(r instanceof Mt){const o=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw i.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:_u(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xs)return function(u,c){return{mapValue:{fields:{[Qa]:{stringValue:Wa},[tr]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Tc("VectorValues must only contain numeric values.");return ks(c.serializer,f)})}}}}}}(r,i);throw i.Tc(`Unsupported field value: ${vr(r)}`)}(n,t)}function np(n,t){const e={};return $a(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Le(n,(r,i)=>{const o=Zs(i,t.uc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Qu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof at||n instanceof Ys||n instanceof De||n instanceof Mt||n instanceof zu||n instanceof Xs)}function rp(n,t,e){if(!Qu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=vr(e);throw r==="an object"?t.Tc(n+" a custom object"):t.Tc(n+" "+r)}}const sp=new RegExp("[~\\*/\\[\\]]");function ip(n,t,e){if(t.search(sp)>=0)throw Rs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ju(...t.split("."))._internalPath}catch{throw Rs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Rs(n,t,e,r,i){const o=r&&!r.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${i}`),h+=")"),new V(S.INVALID_ARGUMENT,c+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new op(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ei("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class op extends ti{data(){return super.data()}}function ei(n,t){return typeof t=="string"?ip(n,t):t instanceof ju?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ni{}class Tr extends ni{}function _a(n,t,...e){let r=[];t instanceof ni&&r.push(t),r=r.concat(e),function(o){const u=o.filter(h=>h instanceof si).length,c=o.filter(h=>h instanceof ri).length;if(u>1||u>0&&c>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ri extends Tr{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ri(t,e,r)}_apply(t){const e=this._parse(t);return Wu(t._query,e),new xt(t.firestore,t.converter,fs(t._query,e))}_parse(t){const e=Ku(t.firestore);return function(o,u,c,h,f,g,A){let R;if(f.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Ta(A,g);const k=[];for(const L of A)k.push(va(h,o,L));R={arrayValue:{values:k}}}else R=va(h,o,A)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Ta(A,g),R=Hu(c,u,A,g==="in"||g==="not-in");return rt.create(f,g,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class si extends ni{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new si(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Rt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const h of c)Wu(u,h),u=fs(u,h)}(t._query,e),new xt(t.firestore,t.converter,fs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ii extends Tr{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ii(t,e)}_apply(t){const e=function(i,o,u){if(i.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pn(o,u)}(t._query,this._field,this._direction);return new xt(t.firestore,t.converter,function(i,o){const u=i.explicitOrderBy.concat([o]);return new ue(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function ya(n,t="asc"){const e=t,r=ei("orderBy",n);return ii._create(r,e)}class oi extends Tr{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new oi(t,e,r)}_apply(t){return new xt(t.firestore,t.converter,nr(t._query,this._limit,this._limitType))}}function Ea(n){return oi._create("limit",n,"F")}class ai extends Tr{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ai(t,e,r)}_apply(t){const e=lp(t,this.type,this._docOrFields,this._inclusive);return new xt(t.firestore,t.converter,function(i,o){return new ue(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,o,i.endAt)}(t._query,e))}}function up(...n){return ai._create("startAfter",n,!1)}function lp(n,t,e,r){if(e[0]=an(e[0]),e[0]instanceof ti)return function(o,u,c,h,f){if(!h)throw new V(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const g=[];for(const A of Ee(o))if(A.field.isKeyField())g.push(er(u,h.key));else{const R=h.data.field(A.field);if(hr(R))throw new V(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+A.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(R===null){const P=A.field.canonicalString();throw new V(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}g.push(R)}return new Se(g,f)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=Ku(n.firestore);return function(u,c,h,f,g,A){const R=u.explicitOrderBy;if(g.length>R.length)throw new V(S.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let k=0;k<g.length;k++){const L=g[k];if(R[k].field.isKeyField()){if(typeof L!="string")throw new V(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof L}`);if(!Ns(u)&&L.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${L}' contains a slash.`);const N=u.path.child(W.fromString(L));if(!O.isDocumentKey(N))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const Y=new O(N);P.push(er(c,Y))}else{const N=Hu(h,f,L);P.push(N)}}return new Se(P,A)}(n._query,n.firestore._databaseId,i,t,e,r)}}function va(n,t,e){if(typeof(e=an(e))=="string"){if(e==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ns(t)&&e.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(W.fromString(e));if(!O.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return er(n,new O(r))}if(e instanceof Mt)return er(n,e._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vr(e)}.`)}function Ta(n,t){if(!Array.isArray(n)||n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Wu(n,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class cp{convertValue(t,e="none"){switch(Yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Le(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[tr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(u=>tt(u.doubleValue));return new Xs(o)}convertGeoPoint(t){return new Ys(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=dr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(hn(t));default:return null}}convertTimestamp(t){const e=Qt(t);return new at(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=W.fromString(t);J(Au(r),9688,{name:t});const i=new dn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hp extends ti{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ei("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Hn extends hp{data(t={}){return super.data(t)}}class dp{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new $n(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Hn(this._firestore,this._userDataWriter,r.key,r,new $n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new Hn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $n(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Hn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $n(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,g=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),g=u.indexOf(c.doc.key)),{type:fp(c.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}class pp extends cp{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mt(this.firestore,null,e)}}function mp(n){n=ws(n,xt);const t=ws(n.firestore,$u),e=Jf(t),r=new pp(t);return ap(n._query),Hf(e,n._query).then(i=>new dp(t,r,n,i))}(function(t,e=!0){(function(i){ke=i})(Zc),Xn(new un("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new $u(new mh(r.getProvider("auth-internal")),new yh(u,r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(f.options.projectId,g)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ye(To,Io,t),ye(To,Io,"esm2017")})();const gp={apiKey:"AIzaSyBboqAV9ZBgIESiioqIDJ5k6xy6p6JoieM",authDomain:"tasks-list-app-4b02e.firebaseapp.com",projectId:"tasks-list-app-4b02e",storageBucket:"tasks-list-app-4b02e.firebasestorage.app",messagingSenderId:"892735097",appId:"1:892735097:web:fc53680b183c113943cea8"},_p=ba(gp),yp=Xf(_p),ar=10;let U={isLoading:!1,hasMoreTasks:!0,allTasks:[],filteredTasks:[],isAscending:!0,activeTaskFile:null,lastVisible:null};const K={taskList:document.getElementById("tasklist"),welcomeContainer:document.getElementById("welcome-container"),taskIframe:document.getElementById("taskiframe"),sidebar:document.getElementById("sidebar"),toggleBtn:document.getElementById("toggle-btn"),taskListContainer:document.getElementById("tasklist-container"),searchInput:document.getElementById("search-bar"),sortButton:document.getElementById("sorting")};function Ep(){vp()&&(K.toggleBtn.addEventListener("click",Tp),K.taskListContainer.addEventListener("scroll",Dp),K.sortButton.addEventListener("click",Pp),K.searchInput.addEventListener("input",bp),Vp(),Ip())}function vp(){return Object.values(K).every(n=>n!==null)}function Tp(){K.sidebar.classList.toggle("collapsed")}async function Yu(n=null){try{const t=Yf(yp,"tasks");let e;n?e=_a(t,ya("name"),up(n),Ea(ar)):e=_a(t,ya("name"),Ea(ar));const r=await mp(e),i=[];return r.forEach(o=>{i.push({id:o.id,...o.data()})}),r.docs.length>0&&(U.lastVisible=r.docs[r.docs.length-1]),i}catch(t){return console.error("Error fetching tasks:",t),[]}}async function Ip(){U.isLoading=!0;const n=await Yu();U.allTasks=n,U.hasMoreTasks=n.length===ar,Ir(U.allTasks),Np(),U.isLoading=!1}async function Ap(){if(U.isLoading||!U.hasMoreTasks)return;U.isLoading=!0;const n=Rp();K.taskList.appendChild(n);try{const t=await Yu(U.lastVisible);U.hasMoreTasks=t.length===ar,await new Promise(e=>setTimeout(e,900)),n.remove(),t.length>0&&(U.allTasks=[...U.allTasks,...t],Ir(t)),U.hasMoreTasks||wp()}catch(t){console.error("Error loading more tasks:",t)}finally{U.isLoading=!1}}function wp(){const n=document.createElement("li");n.className="end-tasks",n.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; cursor: default">
      <span style="color: #F46275; font-size: 19px; padding:4px; font-weight: 400;">No more tasks to load</span>
    </div>
  `,K.taskList.appendChild(n)}function Rp(){const n=document.createElement("div");return n.className="loader-container",n.innerHTML=`
    <div class="loader">
      <div class="loader-cirlce"></div>
      <div class="loader-cirlce"></div>
      <div class="loader-cirlce"></div>
      <div class="loader-cirlce"></div>
    </div>
  `,n}function Ir(n){if(n.length===0){K.taskList.innerHTML=`
      <li style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; cursor: default">
        <img src="/not-tasks-found.png" alt="No tasks found" style="width: 40px; height: 40px; margin-bottom: 10px">
        <span style="color: #F46275; font-size: 18px; font-weight: 500; letter-spacing: 1px">No tasks found</span>
      </li>
    `;return}const t=document.createDocumentFragment();n.forEach(e=>{const r=document.createElement("li");r.textContent=e.name,r.file=e.file,e.file===U.activeTaskFile&&r.classList.add("active"),r.addEventListener("click",()=>Cp(e.file,r)),t.appendChild(r)}),K.taskList.appendChild(t)}function Cp(n,t){U.activeTaskFile=n,K.taskIframe.src=n,K.taskIframe.classList.add("active"),K.welcomeContainer.classList.remove("active"),Sp(t),ui()}function Sp(n){document.querySelectorAll("#tasklist li").forEach(t=>{t.classList.remove("active")}),n.classList.add("active")}function Pp(){U.isAscending=!U.isAscending;const n=U.filteredTasks.length>0?U.filteredTasks:U.allTasks;n.sort((t,e)=>U.isAscending?t.name.localeCompare(e.name):e.name.localeCompare(t.name)),K.taskList.innerHTML="",Ir(n),K.sortButton.classList.toggle("sort-asc",U.isAscending),K.sortButton.classList.toggle("sort-desc",!U.isAscending),K.sortButton.textContent=U.isAscending?"Ascending":"Descending",ui()}function bp(){const n=K.searchInput.value.trim().toLowerCase();U.isAscending=!1,U.filteredTasks=U.allTasks.filter(t=>{const e=t.name.toLowerCase(),r=t.file.toLowerCase(),i=new RegExp(`\\b${n}\\b`,"i");return i.test(e)||i.test(r)}),K.taskList.innerHTML="",Ir(U.filteredTasks),ui()}function ui(){const n=new URL(window.location.href);U.activeTaskFile?n.searchParams.set("task",U.activeTaskFile):n.searchParams.delete("task"),history.pushState({task:U.activeTaskFile},"",n)}function Vp(){const t=new URLSearchParams(window.location.search).get("task");t&&(U.activeTaskFile=t,K.taskIframe.src=t,K.taskIframe.classList.add("active"),K.welcomeContainer.classList.remove("active"))}function Dp(){const{scrollTop:n,scrollHeight:t,clientHeight:e}=K.taskListContainer;n+e>=t-50&&Ap()}function Np(){U.activeTaskFile?(K.taskIframe.classList.add("active"),K.welcomeContainer.classList.remove("active")):(K.taskIframe.classList.remove("active"),K.welcomeContainer.classList.add("active"))}document.addEventListener("DOMContentLoaded",Ep);
