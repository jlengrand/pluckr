/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new WeakMap;class r{constructor(t,i,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=i.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(r,e))}return e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new r(n,t,e)},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const s=window.trustedTypes,l=s?s.emptyScript:"",h=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=d){var r,n;const a=this.constructor._$Ep(t,i);if(void 0!==a&&!0===i.reflect){const o=(null!==(n=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:c.toAttribute)(e,i.type);this._$El=t,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(t,e){var i,r;const n=this.constructor,a=n._$Ev.get(t);if(void 0!==a&&this._$El!==a){const t=n.getPropertyOptions(a),o=t.converter,s=null!==(r=null!==(i=null==o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof o?o:null)&&void 0!==r?r:c.fromAttribute;this._$El=a,this[a]=s(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.3");const m=globalThis.trustedTypes,_=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,g="?"+v,y=`<${g}>`,x=document,b=(t="")=>x.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,E=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,C=/"/g,I=/^(?:script|style|textarea|title)$/i,P=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),k=P(1),L=P(2),D=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),B=new WeakMap,O=(t,e,i)=>{var r,n;const a=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let o=a._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=o=new G(e.insertBefore(b(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},F=x.createTreeWalker(x,129,null,!1),U=(t,e)=>{const i=t.length-1,r=[];let n,a=2===e?"<svg>":"",o=z;for(let e=0;e<i;e++){const i=t[e];let s,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===z?"!--"===l[1]?o=T:void 0!==l[1]?o=E:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=A):void 0!==l[3]&&(o=A):o===A?">"===l[0]?(o=null!=n?n:z,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?A:'"'===l[3]?C:S):o===C||o===S?o=A:o===T||o===E?o=z:(o=A,n=void 0);const u=o===A&&t[e+1].startsWith("/>")?" ":"";a+=o===z?i+y:h>=0?(r.push(s),i.slice(0,h)+"$lit$"+i.slice(h)+v+u):i+v+(-2===h?(r.push(void 0),e):u)}const s=a+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(s):s,r]};class N{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,a=0;const o=t.length-1,s=this.parts,[l,h]=U(t,e);if(this.el=N.createElement(l,i),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=F.nextNode())&&s.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const i=h[a++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?W:"@"===e[1]?H:$})}else s.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(I.test(r.tagName)){const t=r.textContent.split(v),e=t.length-1;if(e>0){r.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],b()),F.nextNode(),s.push({type:2,index:++n});r.append(t[e],b())}}}else if(8===r.nodeType)if(r.data===g)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(v,t+1));)s.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,r){var n,a,o,s;if(e===D)return e;let l=void 0!==r?null===(n=i._$Cl)||void 0===n?void 0:n[r]:i._$Cu;const h=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,r)),void 0!==r?(null!==(o=(s=i)._$Cl)&&void 0!==o?o:s._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,r)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);F.currentNode=n;let a=F.nextNode(),o=0,s=0,l=r[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new G(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new X(a,this,t)),this.v.push(e),l=r[++s]}o!==(null==l?void 0:l.index)&&(a=F.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,r){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),w(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return M(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==R&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=N.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new j(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new N(t)),e}S(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new G(this.M(b()),this.M(b()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class ${constructor(t,e,i,r,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let a=!1;if(void 0===n)t=V(this,t,e,0),a=!w(t)||t!==this._$AH&&t!==D,a&&(this._$AH=t);else{const r=t;let o,s;for(t=n[0],o=0;o<n.length-1;o++)s=V(this,r[i+o],e,o),s===D&&(s=this._$AH[o]),a||(a=!w(s)||s!==this._$AH[o]),s===R?t=R:t!==R&&(t+=(null!=s?s:"")+n[o+1]),this._$AH[o]=s}a&&!r&&this.C(t)}C(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends ${constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===R?void 0:t}}const Z=m?m.emptyScript:"";class W extends ${constructor(){super(...arguments),this.type=4}C(t){t&&t!==R?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class H extends ${constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:R)===D)return;const r=this._$AH,n=t===R&&r!==R||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==R&&(r===R||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,J;null==Y||Y(N,G),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.6");class Q extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=O(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}Q.finalized=!0,Q._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.1");
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class et extends HTMLElement{static get version(){return"23.1.3"}}customElements.define("vaadin-lumo-styles",et);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const it=t=>class extends t{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(t){this._set_theme(t)}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,rt=[];function nt(t,e,i={}){var n;t&&(n=t,ht(customElements.get(n))&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),e=function(t=[]){return[t].flat(1/0).filter((t=>t instanceof r||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,i):rt.push({themeFor:t,styles:e,include:i.include,moduleId:i.moduleId})}function at(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():rt}function ot(t=""){let e=0;return 0===t.indexOf("lumo-")||0===t.indexOf("material-")?e=1:0===t.indexOf("vaadin-")&&(e=2),e}function st(t){const e=[];return t.include&&[].concat(t.include).forEach((t=>{const i=at().find((e=>e.moduleId===t));i?e.push(...st(i),...i.styles):console.warn(`Included moduleId ${t} not found in style registry`)}),t.styles),e}function lt(t){const e=`${t}-default-theme`,i=at().filter((i=>i.moduleId!==e&&function(t,e){return(t||"").split(" ").some((t=>new RegExp(`^${t.split("*").join(".*")}$`).test(e)))}(i.themeFor,t))).map((t=>({...t,styles:[...st(t),...t.styles],includePriority:ot(t.moduleId)}))).sort(((t,e)=>e.includePriority-t.includePriority));return i.length>0?i:at().filter((t=>t.moduleId===e))}function ht(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const ct=t=>class extends(it(t)){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;t&&!ht(this)&&function(t,e){const i=document.createElement("style");i.innerHTML=t.map((t=>t.cssText)).join("\n"),e.content.appendChild(i)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...super.finalizeStyles(t),...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...lt(this.is)];const i=this.__themes.flatMap((t=>t.styles));return i.filter(((t,e)=>e===i.lastIndexOf(t)))}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ut=n`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,dt=document.createElement("template");dt.innerHTML=`<style>${ut.toString().replace(":host","html")}</style>`,document.head.appendChild(dt.content);const pt=n`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;nt("",pt,{moduleId:"lumo-color"});nt("",[pt,n`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`],{moduleId:"lumo-color-legacy"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const ft=n`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,mt=document.createElement("template");mt.innerHTML=`<style>${ft.toString().replace(":host","html")}</style>`,document.head.appendChild(mt.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const _t=n`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,vt=document.createElement("template");vt.innerHTML=`<style>${_t.toString().replace(":host","html")}</style>`,document.head.appendChild(vt.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const gt=n`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;nt("",n`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"});const yt=document.createElement("template");yt.innerHTML=`<style>${gt.toString().replace(":host","html")}</style>`,document.head.appendChild(yt.content),nt("vaadin-input-container",n`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"}),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let xt,bt,wt=/(url\()([^)]*)(\))/g,Mt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function zt(t,e){if(t&&Mt.test(t))return t;if("//"===t)return t;if(void 0===xt){xt=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",xt="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),xt)try{return new URL(t,e).href}catch(e){return t}return bt||(bt=document.implementation.createHTMLDocument("temp"),bt.base=bt.createElement("base"),bt.head.appendChild(bt.base),bt.anchor=bt.createElement("a"),bt.body.appendChild(bt.anchor)),bt.base.href=e,bt.anchor.href=t,bt.anchor.href||t}function Tt(t,e){return t.replace(wt,(function(t,i,r,n){return i+"'"+zt(r.replace(/["']/g,""),e)+"'"+n}))}function Et(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const At=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const St=At&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let Ct=window.Polymer&&window.Polymer.rootPath||Et(document.baseURI||window.location.href),It=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Pt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,kt=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Lt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Dt=window.Polymer&&window.Polymer.legacyWarnings||!1,Rt=window.Polymer&&window.Polymer.syncInitialRender||!1,Bt=window.Polymer&&window.Polymer.legacyUndefined||!1,Ot=window.Polymer&&window.Polymer.orderedComputed||!1,Ft=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ut=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Nt=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Vt=0;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jt=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Vt++;return function(r){let n=r.__mixinSet;if(n&&n[i])return r;let a=e,o=a.get(r);if(!o){o=t(r),a.set(r,o);let e=Object.create(o.__mixinSet||n||null);e[i]=!0,o.__mixinSet=e}return o}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gt={},$t={};function qt(t,e){Gt[t]=$t[t.toLowerCase()]=e}function Zt(t){return Gt[t]||$t[t.toLowerCase()]}class Wt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=Zt(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,r){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=zt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Et(e)}return this.__assetpath}register(t){if(t=t||this.id){if(Pt&&void 0!==Zt(t))throw qt(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,qt(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}Wt.prototype.modules=Gt,customElements.define("dom-module",Wt);function Ht(t){return Wt.import(t)}function Xt(t){const e=Tt((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function Yt(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...Kt(e[t]));return i}function Kt(t){const e=Ht(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Qt(e));const i=e.querySelector("template");i&&t.push(...Jt(i,e.assetpath)),e._styles=t}return e._styles}function Jt(t,e){if(!t._styles){const i=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let n=r[t],a=n.getAttribute("include");a&&i.push(...Yt(a).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(n.textContent=Tt(n.textContent,e)),i.push(n)}t._styles=i}return t._styles}function Qt(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let r=i[t];if(r.import){const t=r.import,i=r.hasAttribute("shady-unscoped");if(i&&!t._unscopedStyle){const e=Xt(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=Xt(t));e.push(i?t._unscopedStyle:t._style)}}return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const te=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function ee(t){return t.indexOf(".")>=0}function ie(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function re(t,e){return 0===e.indexOf(t+".")}function ne(t,e,i){return e+i.slice(t.length)}function ae(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let r=t[i].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function oe(t){return Array.isArray(t)?ae(t).split("."):t.toString().split(".")}function se(t,e,i){let r=t,n=oe(e);for(let t=0;t<n.length;t++){if(!r)return;r=r[n[t]]}return i&&(i.path=n.join(".")),r}function le(t,e,i){let r=t,n=oe(e),a=n[n.length-1];if(n.length>1){for(let t=0;t<n.length-1;t++){if(r=r[n[t]],!r)return}r[a]=i}else r[e]=i;return n.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const he={},ce=/-[a-z]/g,ue=/([A-Z])/g;function de(t){return he[t]||(he[t]=t.indexOf("-")<0?t:t.replace(ce,(t=>t[1].toUpperCase())))}function pe(t){return he[t]||(he[t]=t.replace(ue,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fe=0,me=0,_e=[],ve=0,ge=!1,ye=document.createTextNode("");new window.MutationObserver((function(){ge=!1;const t=_e.length;for(let e=0;e<t;e++){let t=_e[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}_e.splice(0,t),me+=t})).observe(ye,{characterData:!0});const xe={run:t=>(ge||(ge=!0,ye.textContent=ve++),_e.push(t),fe++),cancel(t){const e=t-me;if(e>=0){if(!_e[e])throw new Error("invalid async handle: "+t);_e[e]=null}}},be=xe,we=jt((t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let r=this.__data[t],n=this._shouldPropertyChange(t,e,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),n}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,be.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,r){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,r)}_attributeToProperty(t,e,i){if(!this.__serializing){const r=this.__dataAttributes,n=r&&r[t]||t;this[n]=this._deserializeValue(e,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const r=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=te(t)),void 0===r?t.removeAttribute(i):t.setAttribute(i,""===r&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})),Me={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ze=HTMLElement.prototype;for(;ze;){let t=Object.getOwnPropertyNames(ze);for(let e=0;e<t.length;e++)Me[t[e]]=!0;ze=Object.getPrototypeOf(ze)}const Te=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;const Ee=jt((t=>{const e=we(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(de(t[e]))}static attributeNameForProperty(t){return pe(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(Te(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!Me[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})),Ae={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Se=!1,Ce=!1;function Ie(t){(function(){if(!Se){Se=!0;const t=document.createElement("textarea");t.placeholder="a",Ce=t.placeholder===t.textContent}return Ce})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Pe=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,i,r)=>{const n=i.getAttribute(r);t&&r.startsWith("on-")?e.setAttribute(r,t.createScript(n,r)):e.setAttribute(r,n)}})();function ke(t){let e=t.getAttribute("is");if(e&&Ae[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:e}=i.attributes[0];Pe(t,i,e),i.removeAttribute(e)}}return t}function Le(t,e){let i=e.parentInfo&&Le(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function De(t,e,i,r){r.id&&(e[r.id]=i)}function Re(t,e,i){if(i.events&&i.events.length)for(let r,n=0,a=i.events;n<a.length&&(r=a[n]);n++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function Be(t,e,i,r){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=r)}const Oe=jt((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let r=!1,n=t;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,e,i)||r,Ie(n),n.firstChild&&this._parseTemplateChildNodes(n,e,i),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,e,i)||r),r||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let r,n=t.firstChild,a=0;n;n=r){if("template"==n.localName&&(n=ke(n)),r=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,r=i.nextSibling,t.removeChild(i),i=r;if(e.stripWhiteSpace&&!n.textContent.trim()){t.removeChild(n);continue}}let o={parentIndex:a,parentInfo:i};this._parseTemplateNode(n,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(t,e,i){let r=t,n=this._parseTemplate(r,e);return(n.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,i){let r=!1,n=Array.from(t.attributes);for(let a,o=n.length-1;a=n[o];o--)r=this._parseTemplateNodeAttribute(t,e,i,a.name,a.value)||r;return r}static _parseTemplateNodeAttribute(t,e,i,r,n){return"on-"===r.slice(0,3)?(t.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,r=e.content||t.content,n=document.importNode(r,!0);n.__noInsertionPoint=!e.hasInsertionPoint;let a=n.nodeList=new Array(i.length);n.$={};for(let t,r=0,o=i.length;r<o&&(t=i[r]);r++){let i=a[r]=Le(n,t);De(0,n.$,i,t),Be(0,i,t,e),Re(this,i,t)}return n}_addMethodEventListenerToNode(t,e,i,r){let n=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||t,0,i);return this._addEventListenerToNode(t,e,n),n}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Fe=0;const Ue=[],Ne={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ve=/[A-Z]/;function je(t,e,i){let r=t[e];if(r){if(!t.hasOwnProperty(e)&&(r=t[e]=Object.create(t[e]),i))for(let t in r){let e=r[t],i=r[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else r=t[e]={};return r}function Ge(t,e,i,r,n,a){if(e){let o=!1;const s=Fe++;for(let l in i){let h=e[n?ie(l):l];if(h)for(let e,c=0,u=h.length;c<u&&(e=h[c]);c++)e.info&&e.info.lastRun===s||n&&!qe(l,e.trigger)||(e.info&&(e.info.lastRun=s),e.fn(t,l,i,r,e.info,n,a),o=!0)}return o}return!1}function $e(t,e,i,r,n,a,o,s){let l=!1,h=e[o?ie(r):r];if(h)for(let e,c=0,u=h.length;c<u&&(e=h[c]);c++)e.info&&e.info.lastRun===i||o&&!qe(r,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,r,n,a,e.info,o,s),l=!0);return l}function qe(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!function(t,e){return 0===t.indexOf(e+".")}(i,t))||!(!e.wildcard||!re(i,t))}return!0}function Ze(t,e,i,r,n){let a="string"==typeof n.method?t[n.method]:n.method,o=n.property;a?a.call(t,t.__data[o],r[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function We(t,e,i){let r=ie(e);if(r!==e){return He(t,pe(r)+"-changed",i[e],e),!0}return!1}function He(t,e,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),te(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function Xe(t,e,i,r,n,a){let o=(a?ie(e):e)!=e?e:null,s=o?se(t,o):t.__data[e];o&&void 0===s&&(s=i[e]),He(t,n.eventName,s,o)}function Ye(t,e,i,r,n){let a=t.__data[e];It&&(a=It(a,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,a)}function Ke(t,e,i,r){let n=t[Ne.COMPUTE];if(n)if(Ot){Fe++;const a=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[Ne.COMPUTE];let r,{counts:n,ready:a,total:o}=function(t){const e=t.__computeInfo,i={},r=t[Ne.COMPUTE],n=[];let a=0;for(let t in e){const r=e[t];a+=i[t]=r.args.filter((t=>!t.literal)).length+(r.dynamicFn?1:0)}for(let t in r)e[t]||n.push(t);return{counts:i,ready:n,total:a}}(t);for(;r=a.shift();){e.set(r,e.size);const t=i[r];t&&t.forEach((t=>{const e=t.info.methodInfo;--o,0==--n[e]&&a.push(e)}))}if(0!==o){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),o=[];for(let t in e)Qe(t,n,o,a,r);let s;for(;s=o.shift();)ti(t,"",e,i,s)&&Qe(s.methodInfo,n,o,a,r);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let a=e;for(;Ge(t,n,a,i,r);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),a=t.__dataPending,t.__dataPending=null}}const Je=(t,e,i)=>{let r=0,n=e.length-1,a=-1;for(;r<=n;){const o=r+n>>1,s=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(s<0)r=o+1;else{if(!(s>0)){a=o;break}n=o-1}}a<0&&(a=n+1),e.splice(a,0,t)},Qe=(t,e,i,r,n)=>{const a=e[n?ie(t):t];if(a)for(let e=0;e<a.length;e++){const o=a[e];o.info.lastRun===Fe||n&&!qe(t,o.trigger)||(o.info.lastRun=Fe,Je(o.info,i,r))}};function ti(t,e,i,r,n){let a=si(t,e,i,r,n);if(a===Ue)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,a,!0):(t[o]=a,!1)}function ei(t,e,i,r,n,a,o){i.bindings=i.bindings||[];let s={kind:r,target:n,parts:a,literal:o,isCompound:1!==a.length};if(i.bindings.push(s),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(s)){let{event:t,negate:e}=s.parts[0];s.listenerEvent=t||pe(n)+"-changed",s.listenerNegate=e}let l=e.nodeInfoList.length;for(let i=0;i<s.parts.length;i++){let r=s.parts[i];r.compoundIndex=i,ii(t,e,s,r,l)}}function ii(t,e,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let a=r.dependencies,o={index:n,binding:i,part:r,evaluator:t};for(let i=0;i<a.length;i++){let r=a[i];"string"==typeof r&&(r=di(r),r.wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:ri,info:o,trigger:r})}}}function ri(t,e,i,r,n,a,o){let s=o[n.index],l=n.binding,h=n.part;if(a&&h.source&&e.length>h.source.length&&"property"==l.kind&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let r=i[e];e=ne(h.source,l.target,e),s._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(s)}else{let o=n.evaluator._evaluateBinding(t,h,e,i,r,a);o!==Ue&&function(t,e,i,r,n){n=function(t,e,i,r){if(i.isCompound){let n=t.__dataCompoundStorage[i.target];n[r.compoundIndex]=e,e=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,n,i,r),It&&(n=It(n,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,n,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[Ne.READ_ONLY]&&e[Ne.READ_ONLY][r]||e._setPendingProperty(r,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,n)}}(t,s,l,h,o)}}function ni(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,n=new Array(r.length);for(let t=0;t<r.length;t++)n[t]=r[t].literal;let a=e.target;i[a]=n,e.literal&&"property"==e.kind&&("className"===a&&(t=te(t)),t[a]=e.literal)}}function ai(t,e,i){if(i.listenerEvent){let r=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,r,n){let a,o=t.detail,s=o&&o.path;s?(r=ne(i,r,s),a=o&&o.value):a=t.currentTarget[i],a=n?!a:a,e[Ne.READ_ONLY]&&e[Ne.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,a,!0,Boolean(s))||o&&o.queueProperty||e._invalidateProperties()}(t,e,i.target,r.source,r.negate)}))}}function oi(t,e,i,r,n,a){a=e.static||a&&("object"!=typeof a||a[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:a};for(let n,a=0;a<e.args.length&&(n=e.args[a]);a++)n.literal||t._addPropertyEffect(n.rootProperty,i,{fn:r,info:o,trigger:n});return a&&t._addPropertyEffect(e.methodName,i,{fn:r,info:o}),o}function si(t,e,i,r,n){let a=t._methodHost||t,o=a[n.methodName];if(o){let r=t._marshalArgs(n.args,e,i);return r===Ue?Ue:o.apply(a,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const li=[],hi=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function ci(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function ui(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:li};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=di(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function di(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=ie(e),i.structured=ee(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function pi(t,e,i){let r=se(t,i);return void 0===r&&(r=e[i]),r}function fi(t,e,i,r){const n={indexSplices:r};Bt&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(i+".splices",n),t.notifyPath(i+".length",e.length),Bt&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function mi(t,e,i,r,n,a){fi(t,e,i,[{index:r,addedCount:n,removed:a,object:e,type:"splice"}])}const _i=jt((t=>{const e=Oe(Ee(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Ne}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(vi.length){let t=vi[vi.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Ne.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==Ne.READ_ONLY);let r=je(this,e,!0)[t];r||(r=this[e][t]=[]),r.push(i)}_removePropertyEffect(t,e,i){let r=je(this,e,!0)[t],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Ne.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Ne.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Ne.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Ne.COMPUTE)}_setPendingPropertyOrPath(t,e,i,r){if(r||ie(Array.isArray(t)?t[0]:t)!==t){if(!r){let i=se(this,t);if(!(t=le(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let r=t.__dataLinkedPaths;if(r){let n;for(let a in r){let o=r[a];re(a,e)?(n=ne(a,o,e),t._setPendingPropertyOrPath(n,i,!0,!0)):re(o,e)&&(n=ne(o,a,e),t._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=te(t)),t[e]=i)}_setPendingProperty(t,e,i){let r=this.__dataHasPaths&&ee(t),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[Ne.NOTIFY]&&this[Ne.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[Ne.READ_ONLY]&&this[Ne.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let r,n=this.__dataHasPaths;this.__dataHasPaths=!1,Ke(this,e,i,n),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,i,n),this._flushClients(),Ge(this,this[Ne.REFLECT],e,i,n),Ge(this,this[Ne.OBSERVE],e,i,n),r&&function(t,e,i,r,n){let a,o,s=t[Ne.NOTIFY],l=Fe++;for(let o in e)e[o]&&(s&&$e(t,s,l,o,i,r,n)||n&&We(t,o,i))&&(a=!0);a&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,r,e,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[Ne.PROPAGATE]&&Ge(this,this[Ne.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,r){const n=(e,r)=>{Ge(this,t.propertyEffects,e,i,r,t.nodeList);for(let n=t.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,e,i,r)};t.runEffects?t.runEffects(n,e,r):n(e,r)}linkPaths(t,e){t=ae(t),e=ae(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=ae(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};fi(this,se(this,t,i),i.path,e)}get(t,e){return se(e||this,t)}set(t,e,i){i?le(i,t,e):this[Ne.READ_ONLY]&&this[Ne.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},r=se(this,t,i),n=r.length,a=r.push(...e);return e.length&&mi(this,r,i.path,n,e.length,[]),a}pop(t){let e={path:""},i=se(this,t,e),r=Boolean(i.length),n=i.pop();return r&&mi(this,i,e.path,i.length,0,[n]),n}splice(t,e,i,...r){let n,a={path:""},o=se(this,t,a);return e<0?e=o.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2===arguments.length?o.splice(e):o.splice(e,i,...r),(r.length||n.length)&&mi(this,o,a.path,e,r.length,n),n}shift(t){let e={path:""},i=se(this,t,e),r=Boolean(i.length),n=i.shift();return r&&mi(this,i,e.path,0,0,[n]),n}unshift(t,...e){let i={path:""},r=se(this,t,i),n=r.unshift(...e);return e.length&&mi(this,r,i.path,0,e.length,[]),n}notifyPath(t,e){let i;if(1==arguments.length){let r={path:""};e=se(this,t,r),i=r.path}else i=Array.isArray(t)?ae(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,Ne.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let r={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,Ne.OBSERVE,{fn:Ze,info:r,trigger:{name:t}}),i&&this._addPropertyEffect(e,Ne.OBSERVE,{fn:Ze,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let i=ui(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");oi(this,i,Ne.OBSERVE,si,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Ne.NOTIFY,{fn:Xe,info:{eventName:pe(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Ne.REFLECT,{fn:Ye,info:{attrName:e}})}_createComputedProperty(t,e,i){let r=ui(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");const n=oi(this,r,Ne.COMPUTE,ti,t,i);je(this,"__computeInfo")[t]=n}_marshalArgs(t,e,i){const r=this.__data,n=[];for(let a=0,o=t.length;a<o;a++){let{name:o,structured:s,wildcard:l,value:h,literal:c}=t[a];if(!c)if(l){const t=re(o,e),n=pi(r,i,t?e:o);h={path:t?e:o,value:n,base:t?se(r,o):n}}else h=s?pi(r,i,o):r[o];if(Bt&&!this._overrideLegacyUndefined&&void 0===h&&t.length>1)return Ue;n[a]=h}return n}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),r=this.__preBoundTemplateInfo==i;if(!r)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e)if(i=Object.create(i),i.wasPreBound=r,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,r=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:e.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),vi.push(this);let i=super._stampTemplate(t,e);if(vi.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let n=r[e],a=i[e],o=n.bindings;if(o)for(let e=0;e<o.length;e++){let i=o[e];ni(a,i),ai(a,t,i)}a.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:r,parent:n}=e;i?i.nextSibling=r:n&&(n.firstChild=r),r?r.previousSibling=i:n&&(n.lastChild=i),e.nextSibling=e.previousSibling=null;let a=e.childNodes;for(let t=0;t<a.length;t++){let e=a[t];te(te(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,i,r){let n=e._parseTemplateNode.call(this,t,i,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=ci(e)||" ",ei(this,i,r,"text","textContent",e),n=!0)}return n}static _parseTemplateNodeAttribute(t,i,r,n,a){let o=this._parseBindings(a,i);if(o){let e=n,a="property";Ve.test(n)?a="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),a="attribute");let s=ci(o);return s&&"attribute"==a&&("class"==n&&t.hasAttribute("class")&&(s+=" "+t.getAttribute(n)),t.setAttribute(n,s)),"attribute"==a&&"disable-upgrade$"==e&&t.setAttribute(n,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===a&&(n=de(n)),ei(this,i,r,a,n,o,s),!0}return e._parseTemplateNodeAttribute.call(this,t,i,r,n,a)}static _parseTemplateNestedTemplate(t,i,r){let n=e._parseTemplateNestedTemplate.call(this,t,i,r);const a=t.parentNode,o=r.templateInfo,s="dom-if"===a.localName,l="dom-repeat"===a.localName;Ft&&(s||l)&&(a.removeChild(t),(r=r.parentInfo).templateInfo=o,r.noted=!0,n=!1);let h=o.hostProps;if(Ut&&s)h&&(i.hostProps=Object.assign(i.hostProps||{},h),Ft||(r.parentInfo.noted=!0));else{let t="{";for(let e in h){ei(this,i,r,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return n}static _parseBindings(t,e){let i,r=[],n=0;for(;null!==(i=hi.exec(t));){i.index>n&&r.push({literal:t.slice(n,i.index)});let a=i[1][0],o=Boolean(i[2]),s=i[3].trim(),l=!1,h="",c=-1;"{"==a&&(c=s.indexOf("::"))>0&&(h=s.substring(c+2),s=s.substring(0,c),l=!0);let u=ui(s),d=[];if(u){let{args:t,methodName:i}=u;for(let e=0;e<t.length;e++){let i=t[e];i.literal||d.push(i)}let r=e.dynamicFns;(r&&r[i]||u.static)&&(d.push(i),u.dynamicFn=!0)}else d.push(s);r.push({source:s,mode:a,negate:o,customEvent:l,signature:u,dependencies:d,event:h}),n=hi.lastIndex}if(n&&n<t.length){let e=t.substring(n);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,i,r,n,a){let o;return o=e.signature?si(t,i,r,0,e.signature):i!=e.source?se(t,e.source):a&&ee(i)?se(t,i):t.__data[i],e.negate&&(o=!o),o}}})),vi=[];const gi=jt((t=>{const e=we(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const r=t[i];e[i]="function"==typeof r?{type:r}:r}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),yi=window.ShadyCSS&&window.ShadyCSS.cssBuild,xi=jt((t=>{const e=gi(_i(t));function i(t,e,i,r){i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,i.computed,r)),i.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===i.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),i.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===i.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),i.observer&&t._createPropertyObserver(e,i.observer,r[i.observer]),t._addPropertyToAttributeMap(e)}function r(t,e,i,r){if(!yi){const n=e.content.querySelectorAll("style"),a=Jt(e),o=function(t){let e=Ht(t);return e?Qt(e):[]}(i),s=e.content.firstElementChild;for(let i=0;i<o.length;i++){let n=o[i];n.textContent=t._processStyleText(n.textContent,r),e.content.insertBefore(n,s)}let l=0;for(let e=0;e<a.length;e++){let i=a[e],o=n[l];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):l++,i.textContent=t._processStyleText(i.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),Nt&&yi&&St){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):Lt||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let r=0;r<t.length;r++)i._createMethodObserver(t[r],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!Pt||kt)&&(e=Wt.import(t,"template"),Pt&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Et(t.url);else{const t=Wt.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ct,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let r=e[i];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Tt(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;r(this,e,t,i?zt(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=te(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Rt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=zt(this.importPath)),zt(t,e)}static _parseTemplateContent(t,i,r){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,r)}static _addTemplatePropertyEffect(t,i,r){return!Dt||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,r)}}})),bi=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */class wi{constructor(t,e){Ti(t,e);const i=e.reduce(((e,i,r)=>e+Mi(i)+t[r+1]),t[0]);this.value=i.toString()}toString(){return this.value}}function Mi(t){if(t instanceof wi)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const zi=function(t,...e){Ti(t,e);const i=document.createElement("template");let r=e.reduce(((e,i,r)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof wi)return Mi(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(i)+t[r+1]),t[0]);return bi&&(r=bi.createHTML(r)),i.innerHTML=r,i},Ti=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},Ei=xi(HTMLElement);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Ai{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,i){const{scrollLeft:r}=i;if("rtl"!==e||!t)return r;switch(t){case"negative":return i.scrollWidth-i.clientWidth+r;case"reverse":return i.scrollWidth-i.clientWidth-r;default:return r}}static setNormalizedScrollLeft(t,e,i,r){if("rtl"===e&&t)switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+r;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-r;break;default:i.scrollLeft=r}else i.scrollLeft=r}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Si=[];let Ci;function Ii(t,e,i=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=i&&t.removeAttribute("dir")}function Pi(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=Pi();Si.forEach((e=>{Ii(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const ki=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}static finalize(){super.finalize(),Ci||(Ci=Ai.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Ii(this,Pi(),null))}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"dir"!==t)return;const r=Pi(),n=i===r&&-1===Si.indexOf(this),a=!i&&e&&-1===Si.indexOf(this),o=i!==r&&e===r;n||a?(this.__subscribe(),Ii(this,r,i)):o&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(t,e,i){("dir"!==i||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,i)}_attributeToProperty(t,e,i){"dir"!==t||e?super._attributeToProperty(t,e,i):this.dir=""}__subscribe(t=!0){t?Si.includes(this)||Si.push(this):Si.includes(this)&&Si.splice(Si.indexOf(this),1)}__getNormalizedScrollLeft(t){return Ai.getNormalizedScrollLeft(Ci,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return Ai.setNormalizedScrollLeft(Ci,this.getAttribute("dir")||"ltr",t,e)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class Li extends(ct(ki(Ei))){static get is(){return"vaadin-input-container"}static get template(){return zi`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          /* See the workaround at the end of this file. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",(t=>{t.target===this&&t.preventDefault()})),this.addEventListener("click",(t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach((t=>t.focus&&t.focus()))}))}}customElements.define(Li.is,Li);const Di=n`
  /* Needed for Safari, where ::slotted(...)::placeholder does not work */
  :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
    font: inherit;
    color: inherit;
  }
`,Ri=document.createElement("template");Ri.innerHTML=`<style>${Di.toString()}</style>`,document.head.appendChild(Ri.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Bi=document.createElement("template");Bi.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(Bi.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Oi=n`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,Fi=document.createElement("template");Fi.innerHTML=`<style>${Oi.toString().replace(":host","html")}</style>`,document.head.appendChild(Fi.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ui=n`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;nt("",Ui,{moduleId:"lumo-field-button"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ni=n`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Vi=n`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;nt("",Vi,{moduleId:"lumo-required-field"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const ji=[Vi,Ui,Ni,n`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`];nt("",ji,{moduleId:"lumo-input-field-shared-styles"}),
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
nt("vaadin-text-field",ji,{moduleId:"lumo-text-field-styles"});const Gi=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,$i=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function qi(t,e){if("function"!=typeof t)return;const i=Gi.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Zi=function(t,e){if(window.Vaadin.developmentMode)return qi(t,e)};function Wi(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&($i?!($i&&Object.keys($i).map((t=>$i[t])).filter((t=>t.productionMode)).length>0):!qi((function(){return!0})))}catch(t){return!1}}());const Hi=[],Xi=document.createTextNode("");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */new window.MutationObserver((function(){const t=Hi.length;for(let e=0;e<t;e++){const t=Hi[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}Hi.splice(0,t)})).observe(Xi,{characterData:!0});const Yi={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Ki={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ji{static debounce(t,e,i){return t instanceof Ji?t._cancelAsync():t=new Ji,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,tr.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),tr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let Qi,tr=new Set;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Zi(Wi)};const er=new Set,ir=t=>class extends(ki(t)){static get version(){return"23.1.3"}static finalize(){super.finalize();const{is:t}=this;var e;t&&!er.has(t)&&(window.Vaadin.registrations.push(this),er.add(t),window.Vaadin.developmentModeCallback&&(Qi=Ji.debounce(Qi,Ki,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),e=Qi,tr.add(e)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function rr(t,e,i){return{index:t,removed:e,addedCount:i}}function nr(t,e,i,r,n,a){let o,s=0,l=0,h=Math.min(i-e,a-n);if(0==e&&0==n&&(s=function(t,e,i){for(let r=0;r<i;r++)if(!ar(t[r],e[r]))return r;return i}(t,r,h)),i==t.length&&a==r.length&&(l=function(t,e,i){let r=t.length,n=e.length,a=0;for(;a<i&&ar(t[--r],e[--n]);)a++;return a}(t,r,h-s)),n+=s,a-=l,(i-=l)-(e+=s)==0&&a-n==0)return[];if(e==i){for(o=rr(e,[],0);n<a;)o.removed.push(r[n++]);return[o]}if(n==a)return[rr(e,[],i-e)];let c=function(t){let e=t.length-1,i=t[0].length-1,r=t[e][i],n=[];for(;e>0||i>0;){if(0==e){n.push(2),i--;continue}if(0==i){n.push(3),e--;continue}let a,o=t[e-1][i-1],s=t[e-1][i],l=t[e][i-1];a=s<l?s<o?s:o:l<o?l:o,a==o?(o==r?n.push(0):(n.push(1),r=o),e--,i--):a==s?(n.push(3),e--,r=s):(n.push(2),i--,r=l)}return n.reverse(),n}(function(t,e,i,r,n,a){let o=a-n+1,s=i-e+1,l=new Array(o);for(let t=0;t<o;t++)l[t]=new Array(s),l[t][0]=t;for(let t=0;t<s;t++)l[0][t]=t;for(let i=1;i<o;i++)for(let a=1;a<s;a++)if(ar(t[e+a-1],r[n+i-1]))l[i][a]=l[i-1][a-1];else{let t=l[i-1][a]+1,e=l[i][a-1]+1;l[i][a]=t<e?t:e}return l}(t,e,i,r,n,a));o=void 0;let u=[],d=e,p=n;for(let t=0;t<c.length;t++)switch(c[t]){case 0:o&&(u.push(o),o=void 0),d++,p++;break;case 1:o||(o=rr(d,[],0)),o.addedCount++,d++,o.removed.push(r[p]),p++;break;case 2:o||(o=rr(d,[],0)),o.addedCount++,d++;break;case 3:o||(o=rr(d,[],0)),o.removed.push(r[p]),p++}return o&&u.push(o),u}function ar(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function or(t){return"slot"===t.localName}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class sr extends EventTarget{static generateId(t,e){const i=t||"default",r=`${de(i)}Id`;return this[r]=1+this[r]||0,`${i}-${e.localName}-${this[r]}`}constructor(t,e,i,r){super(),this.host=t,this.slotName=e,this.slotFactory=i,this.slotInitializer=r,this.defaultId=sr.generateId(e,t)}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:i}=this;let r=this.defaultNode;return!r&&i&&(r=i(t),r instanceof Element&&(""!==e&&r.setAttribute("slot",e),this.node=r,this.defaultNode=r)),r&&t.appendChild(r),r}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find((e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new class{static getFlattenedNodes(t){const e=te(t);return or(t)?e.assignedNodes({flatten:!0}):Array.from(e.childNodes).map((t=>or(t)?te(t).assignedNodes({flatten:!0}):[t])).reduce(((t,e)=>t.concat(e)),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){or(this._target)?this._listenSlots([this._target]):te(this._target).children&&(this._listenSlots(te(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(t=>{this._processMutations(t)})):(this._nativeChildrenObserver=new MutationObserver((t=>{this._processMutations(t)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){or(this._target)?this._unlistenSlots([this._target]):te(this._target).children&&(this._unlistenSlots(te(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,xe.run((()=>this.flush())))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=(r=e,n=this._effectiveNodes,nr(r,0,r.length,n,0,n.length));var r,n;for(let e,r=0;r<i.length&&(e=i[r]);r++)for(let i,r=0;r<e.removed.length&&(i=e.removed[r]);r++)t.removedNodes.push(i);for(let r,n=0;n<i.length&&(r=i[n]);n++)for(let i=r.index;i<r.index+r.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let a=!1;return(t.addedNodes.length||t.removedNodes.length)&&(a=!0,this.callback.call(this._target,t)),a}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];or(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];or(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}}(i,(t=>{const e=this.node,i=t.addedNodes.find((t=>t!==e));t.removedNodes.length&&t.removedNodes.forEach((t=>{this.teardownNode(t)})),i&&(e&&e.isConnected&&this.host.removeChild(e),this.node=i,i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i)))}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lr extends sr{constructor(t,e){super(t,"input",(()=>document.createElement("input")),((t,i)=>{t.value&&i.setAttribute("value",t.value),t.type&&i.setAttribute("type",t.type);const r=lr._uniqueInputId=1+lr._uniqueInputId||0;t._inputId=`${t.localName}-${r}`,i.id=t._inputId,"function"==typeof e&&e(i)}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hr=jt((t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",(t=>{this._onKeyDown(t)})),this.addEventListener("keyup",(t=>{this._onKeyUp(t)}))}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let cr=!1;window.addEventListener("keydown",(()=>{cr=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{cr=!1}),{capture:!0});const ur=jt((t=>class extends t{get _keyboardActive(){return cr}ready(){this.addEventListener("focusin",(t=>{this._shouldSetFocus(t)&&this._setFocused(!0)})),this.addEventListener("focusout",(t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}})),dr=jt((t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),pr=t=>class extends(dr(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,fr=jt((t=>class extends(ur(pr(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}})),mr=jt((t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((t=>{t.hostConnected&&t.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((t=>{t.hostDisconnected&&t.hostDisconnected()}))}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class _r extends sr{constructor(t){super(t,"error-message",(()=>document.createElement("div")),((t,e)=>{this.__updateErrorId(e),this.__updateHasError()}))}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function vr(t){return t?new Set(t.split(" ")):new Set}function gr(t){return[...t].join(" ")}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class yr{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&this.__isGroupField&&(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(t,e,i){this.__target&&(i&&function(t,e,i){const r=vr(t.getAttribute(e));r.delete(i),0!==r.size?t.setAttribute(e,gr(r)):t.removeAttribute(e)}(this.__target,t,i),e&&function(t,e,i){const r=vr(t.getAttribute(e));r.add(i),t.setAttribute(e,gr(r))}(this.__target,t,e))}}
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xr extends sr{constructor(t){super(t,"helper")}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const t=this.__hasHelper(e);this.__toggleHasHelper(t)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();e&&e!==this.defaultNode||this.__applyDefaultHelper(t,e)}__hasHelper(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return t&&""!==t.trim()}__applyDefaultHelper(t,e){const i=this.__isNotEmpty(t);i&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(i)}__observeHelper(t){this.__helperObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,i=e===this.node;if("attributes"===t.type)i&&e.id!==this.defaultId&&this.__updateHelperId(e);else if(i||e.parentElement===this.node){const t=this.__hasHelper(this.node);this.__toggleHasHelper(t)}}))})),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class br extends sr{constructor(t){super(t,"label",(()=>document.createElement("label")),((t,e)=>{this.__updateLabelId(e),this.__updateDefaultLabel(this.label),this.__observeLabel(e)}))}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e));const i=this.__hasLabel(e);this.__toggleHasLabel(i)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__observeLabel(t){this.__labelObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,i=e===this.node;if("attributes"===t.type)i&&e.id!==this.defaultId&&this.__updateLabelId(e);else if(i||e.parentElement===this.node){const t=this.__hasLabel(this.node);this.__toggleHasLabel(t)}}))})),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wr=jt((t=>class extends(mr(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new br(this),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}})),Mr=jt((t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}})),zr=t=>class extends(Mr(wr(mr(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new yr(this),this._helperController=new xr(this),this._errorController=new _r(this),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController),this._labelController.addEventListener("label-changed",(t=>{const{hasLabel:e,node:i}=t.detail;this.__labelChanged(e,i)})),this._helperController.addEventListener("helper-changed",(t=>{const{hasHelper:e,node:i}=t.detail;this.__helperChanged(e,i)}))}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout((()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Tr=jt((t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((t=>{this._delegateAttribute(t,this[t])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((t=>{this._delegateProperty(t,this[t])}))}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach(((e,i)=>{this._delegateAttribute(e,t[i])}))}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach(((e,i)=>{this._delegateProperty(e,t[i])}))}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})),Er=jt((t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this.inputElement.value=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_onInput(t){this.__userInput=t.isTrusted,this.value=t.target.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(""!==t&&null!=t),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}})),Ar=jt((t=>class extends(Tr(Mr(Er(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map((t=>this[t])))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some((t=>this.__isValidConstraint(t)))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(${this.constructor.constraints.join(", ")})`)}_constraintsChanged(...t){this.invalid&&(this._hasValidConstraints(t)?this.validate():this.invalid=!1)}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}})),Sr=t=>class extends(fr(Ar(zr(hr(t))))){static get properties(){return{autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",(t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this.__clear())}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Cr=t=>class extends(Sr(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},_enabledCharPattern:{type:String,observer:"_enabledCharPatternChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_onBlur(t){super._onBlur(t),this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_forwardInputValue(t){super._forwardInputValue(t),this.invalid&&this.validate()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){this._enabledCharPattern&&!this.__shouldAcceptKey(t)&&t.preventDefault(),super._onKeyDown(t)}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__enabledCharRegExp.test(t.key)}_onPaste(t){if(this._enabledCharPattern){const e=(t.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onDrop(t){if(this._enabledCharPattern){const e=t.dataTransfer.getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onBeforeInput(t){this._enabledCharPattern&&t.data&&!this.__enabledTextRegExp.test(t.data)&&t.preventDefault()}_enabledCharPatternChanged(t){t&&(this.__enabledCharRegExp=new RegExp(`^${t}$`),this.__enabledTextRegExp=new RegExp(`^${t}*$`))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ir{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",(t=>{this.__initLabel(t.detail.node)})),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=t=>class extends(Ar(t)){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=Ji.debounce(this._inputDebouncer,Yi.after(200),(()=>{this.removeAttribute("input-prevented")})))}}_onInput(t){this._checkInputValue(),super._onInput(t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,kr=n`[part=clear-button]{display:none;cursor:default}[part=clear-button]::before{content:'✕'}:host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part=clear-button]{display:block}`
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
nt("vaadin-text-field",[n`:host{display:inline-flex;outline:0}:host::before{content:'\\2003';width:0;display:inline-block}:host([hidden]){display:none!important}:host(:not([has-label])) [part=label]{display:none}`
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,n`[class$=container]{display:flex;flex-direction:column;min-width:100%;max-width:100%;width:var(--vaadin-field-default-width,12em)}`
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,kr],{moduleId:"vaadin-text-field-styles"});class Lr extends(Pr(Cr(ct(ir(Ei))))){static get is(){return"vaadin-text-field"}static get template(){return zi`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new lr(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new Ir(this.inputElement,this._labelController))}}customElements.define(Lr.is,Lr);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dr=2,Rr=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Br extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=R,t.type!==Rr)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this.ft=void 0,this.it=t;if(t===D)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Br.directiveName="unsafeHTML",Br.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Or extends Br{}Or.directiveName="unsafeSVG",Or.resultType=2;const Fr=(t=>(...e)=>({_$litDirective$:t,values:e}))(Or);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ur(t){let e=R;if(t){const i=t.cloneNode(!0);i.removeAttribute("id"),e=L`${Fr(i.innerHTML)}`}return e}function Nr(t){let e=null==t||""===t?R:t;return function(t){return((t,e)=>{var i,r;return void 0===e?void 0!==(null===(i=t)||void 0===i?void 0:i._$litType$):(null===(r=t)||void 0===r?void 0:r._$litType$)===e})(t,Dr)||t===R}(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=R),e}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Vr={};class jr extends(ir(Ei)){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=Vr[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,Vr[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){this._icons=this._icons||this.__createIconMap();const e=this._icons[this.__getIconId(t)];return{svg:Ur(e),size:this.size,viewBox:e?e.getAttribute("viewBox"):null}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach((e=>{t[this.__getIconId(e.id)]=e})),t}__getIconId(t){return(t||"").replace(`${this.name}:`,"")}__nameChanged(t,e){e&&(Vr[t]=jr.getIconset(e),delete Vr[e]),t&&(Vr[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(jr.is,jr),nt("vaadin-icon",n`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});class Gr extends(ct(ir(Ei))){static get template(){return zi`
      <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          fill: currentColor;
        }

        :host([hidden]) {
          display: none !important;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      </style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      ></svg>
    `}static get is(){return"vaadin-icon"}static get properties(){return{icon:{type:String,observer:"__iconChanged"},svg:{type:Object},size:{type:Number,value:24},__svgElement:Object,__viewBox:String}}static get observers(){return["__svgChanged(svg, __svgElement)"]}constructor(){super(),this.__onIconsetRegistered=this.__onIconsetRegistered.bind(this)}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("svg")}__getIconsetName(t){if(!t)return;return t.split(":")[0]||"vaadin"}__onIconsetRegistered(t){t.detail===this.__getIconsetName(this.icon)&&this.__iconChanged(this.icon)}connectedCallback(){super.connectedCallback(),document.addEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}__iconChanged(t){if(t){this.__checkDeprecatedIcon(t);const e=this.__getIconsetName(t),i=jr.getIconset(e),{svg:r,size:n,viewBox:a}=i.applyIcon(t);a&&(this.__viewBox=a),n!==this.size&&(this.size=n),this.svg=r}else this.svg=Nr(null)}__checkDeprecatedIcon(t){const e={"vaadin:buss":"vaadin:bus","vaadin:funcion":"vaadin:function","vaadin:megafone":"vaadin:megaphone","vaadin:palete":"vaadin:palette","vaadin:trendind-down":"vaadin:trending-down"};t in e&&console.warn(`WARNING: The icon "${t}" is deprecated. Use "${e[t]}" instead`)}__svgChanged(t,e){e&&function(t,e){const i=Nr(t);O(i,e)}(t,e)}__computeViewBox(t,e){return e||`0 0 ${t} ${t}`}}customElements.define(Gr.is,Gr);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */