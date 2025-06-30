(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Wr=[],en=()=>{},sy=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ac=t=>t.startsWith("onUpdate:"),dt=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iy=Object.prototype.hasOwnProperty,Se=(t,e)=>iy.call(t,e),le=Array.isArray,Gr=t=>Zo(t)==="[object Map]",Ud=t=>Zo(t)==="[object Set]",pe=t=>typeof t=="function",qe=t=>typeof t=="string",lr=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Bd=t=>(xe(t)||pe(t))&&pe(t.then)&&pe(t.catch),$d=Object.prototype.toString,Zo=t=>$d.call(t),oy=t=>Zo(t).slice(8,-1),jd=t=>Zo(t)==="[object Object]",cc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ay=/-(\w)/g,Jn=ea(t=>t.replace(ay,(e,n)=>n?n.toUpperCase():"")),ly=/\B([A-Z])/g,Pr=ea(t=>t.replace(ly,"-$1").toLowerCase()),Hd=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=ea(t=>t?`on${Hd(t)}`:""),Wn=(t,e)=>!Object.is(t,e),ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},El=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mh;const ta=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?fy(r):uc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||xe(t))return t}const cy=/;(?![^(]*\))/g,uy=/:([^]+)/,hy=/\/\*[^]*?\*\//g;function fy(t){const e={};return t.replace(hy,"").split(cy).forEach(n=>{if(n){const r=n.split(uy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hc(t){let e="";if(qe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=hc(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",py=oc(dy);function qd(t){return!!t||t===""}const zd=t=>!!(t&&t.__v_isRef===!0),Qe=t=>qe(t)?t:t==null?"":le(t)||xe(t)&&(t.toString===$d||!pe(t.toString))?zd(t)?Qe(t.value):JSON.stringify(t,Kd,2):String(t),Kd=(t,e)=>zd(e)?Kd(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Qa(r,i)+" =>"]=s,n),{})}:Ud(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qa(n))}:lr(e)?Qa(e):xe(e)&&!le(e)&&!jd(e)?String(e):e,Qa=(t,e="")=>{var n;return lr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class gy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function my(){return It}let Oe;const Xa=new WeakSet;class Wd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xa.has(this)&&(Xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_h(this),Xd(this);const e=Oe,n=qt;Oe=this,qt=!0;try{return this.fn()}finally{Yd(this),Oe=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pc(e);this.deps=this.depsTail=void 0,_h(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let Gd=0,Ws,Gs;function Qd(t,e=!1){if(t.flags|=8,e){t.next=Gs,Gs=t;return}t.next=Ws,Ws=t}function fc(){Gd++}function dc(){if(--Gd>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),pc(r),_y(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Il(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===li)||(t.globalVersion=li,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Il(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=qt;Oe=t,qt=!0;try{Xd(t);const s=t.fn(t._value);(e.version===0||Wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,qt=r,Yd(t),t.flags&=-3}}function pc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)pc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _y(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const Zd=[];function An(){Zd.push(qt),qt=!1}function Rn(){const t=Zd.pop();qt=t===void 0?!0:t}function _h(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let li=0;class yy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!qt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new yy(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,ep(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,li++,this.notify(e)}notify(e){fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dc()}}}function ep(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ep(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wl=new WeakMap,Tr=Symbol(""),Al=Symbol(""),ci=Symbol("");function ut(t,e,n){if(qt&&Oe){let r=wl.get(t);r||wl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gc),s.map=r,s.key=n),s.track()}}function vn(t,e,n,r,s,i){const o=wl.get(t);if(!o){li++;return}const l=c=>{c&&c.trigger()};if(fc(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&cc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===ci||!lr(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(ci)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Tr)),Gr(t)&&l(o.get(Al)));break;case"delete":c||(l(o.get(Tr)),Gr(t)&&l(o.get(Al)));break;case"set":Gr(t)&&l(o.get(Tr));break}}dc()}function Lr(t){const e=be(t);return e===t?e:(ut(e,"iterate",ci),Ut(t)?e:e.map(tt))}function na(t){return ut(t=be(t),"iterate",ci),t}const vy={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,tt)},concat(...t){return Lr(this).concat(...t.map(e=>le(e)?Lr(e):e))},entries(){return Ya(this,"entries",t=>(t[1]=tt(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(tt),arguments)},find(t,e){return mn(this,"find",t,e,tt,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,tt,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ja(this,"includes",t)},indexOf(...t){return Ja(this,"indexOf",t)},join(t){return Lr(this).join(t)},lastIndexOf(...t){return Ja(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return Fs(this,"pop")},push(...t){return Fs(this,"push",t)},reduce(t,...e){return yh(this,"reduce",t,e)},reduceRight(t,...e){return yh(this,"reduceRight",t,e)},shift(){return Fs(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return Fs(this,"splice",t)},toReversed(){return Lr(this).toReversed()},toSorted(t){return Lr(this).toSorted(t)},toSpliced(...t){return Lr(this).toSpliced(...t)},unshift(...t){return Fs(this,"unshift",t)},values(){return Ya(this,"values",tt)}};function Ya(t,e,n){const r=na(t),s=r[e]();return r!==t&&!Ut(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ey=Array.prototype;function mn(t,e,n,r,s,i){const o=na(t),l=o!==t&&!Ut(t),c=o[e];if(c!==Ey[e]){const p=c.apply(t,i);return l?tt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,tt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function yh(t,e,n,r){const s=na(t);let i=n;return s!==t&&(Ut(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,tt(l),c,t)}),s[e](i,...r)}function Ja(t,e,n){const r=be(t);ut(r,"iterate",ci);const s=r[e](...n);return(s===-1||s===!1)&&yc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Fs(t,e,n=[]){An(),fc();const r=be(t)[e].apply(t,n);return dc(),Rn(),r}const Ty=oc("__proto__,__v_isRef,__isVue"),tp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lr));function Iy(t){lr(t)||(t=String(t));const e=be(this);return ut(e,"has",t),e.hasOwnProperty(t)}class np{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Oy:op:i?ip:sp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=vy[n]))return c;if(n==="hasOwnProperty")return Iy}const l=Reflect.get(e,n,ft(e)?e:r);return(lr(n)?tp.has(n):Ty(n))||(s||ut(e,"get",n),i)?l:ft(l)?o&&cc(n)?l:l.value:xe(l)?s?lp(l):ra(l):l}}class rp extends np{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Zn(i);if(!Ut(r)&&!Zn(r)&&(i=be(i),r=be(r)),!le(e)&&ft(i)&&!ft(r))return c?!1:(i.value=r,!0)}const o=le(e)&&cc(n)?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,ft(e)?e:s);return e===be(s)&&(o?Wn(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!lr(n)||!tp.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",le(e)?"length":Tr),Reflect.ownKeys(e)}}class wy extends np{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ay=new rp,Ry=new wy,by=new rp(!0);const Rl=t=>t,Yi=t=>Reflect.getPrototypeOf(t);function Sy(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Gr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?Rl:e?Io:tt;return!e&&ut(i,"iterate",c?Al:Tr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Ji(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Py(t,e){const n={get(s){const i=this.__v_raw,o=be(i),l=be(s);t||(Wn(s,l)&&ut(o,"get",s),ut(o,"get",l));const{has:c}=Yi(o),h=e?Rl:t?Io:tt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ut(be(s),"iterate",Tr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=be(i),l=be(s);return t||(Wn(s,l)&&ut(o,"has",s),ut(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=be(l),h=e?Rl:t?Io:tt;return!t&&ut(c,"iterate",Tr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return dt(n,t?{add:Ji("add"),set:Ji("set"),delete:Ji("delete"),clear:Ji("clear")}:{add(s){!e&&!Ut(s)&&!Zn(s)&&(s=be(s));const i=be(this);return Yi(i).has.call(i,s)||(i.add(s),vn(i,"add",s,s)),this},set(s,i){!e&&!Ut(i)&&!Zn(i)&&(i=be(i));const o=be(this),{has:l,get:c}=Yi(o);let h=l.call(o,s);h||(s=be(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?Wn(i,f)&&vn(o,"set",s,i):vn(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:l}=Yi(i);let c=o.call(i,s);c||(s=be(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&vn(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Sy(s,t,e)}),n}function mc(t,e){const n=Py(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const Cy={get:mc(!1,!1)},ky={get:mc(!1,!0)},Dy={get:mc(!0,!1)};const sp=new WeakMap,ip=new WeakMap,op=new WeakMap,Oy=new WeakMap;function Vy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ny(t){return t.__v_skip||!Object.isExtensible(t)?0:Vy(oy(t))}function ra(t){return Zn(t)?t:_c(t,!1,Ay,Cy,sp)}function ap(t){return _c(t,!1,by,ky,ip)}function lp(t){return _c(t,!0,Ry,Dy,op)}function _c(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Ny(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Qr(t){return Zn(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function Ut(t){return!!(t&&t.__v_isShallow)}function yc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function xy(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&El(t,"__v_skip",!0),t}const tt=t=>xe(t)?ra(t):t,Io=t=>xe(t)?lp(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function Be(t){return cp(t,!1)}function My(t){return cp(t,!0)}function cp(t,e){return ft(t)?t:new Ly(t,e)}class Ly{constructor(e,n){this.dep=new gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ut(e)||Zn(e);e=r?e:be(e),Wn(e,n)&&(this._rawValue=e,this._value=r?e:tt(e),this.dep.trigger())}}function Xr(t){return ft(t)?t.value:t}const Fy={get:(t,e,n)=>e==="__v_raw"?t:Xr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function up(t){return Qr(t)?t:new Proxy(t,Fy)}class Uy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=li-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Qd(this,!0),!0}get value(){const e=this.dep.track();return Jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function By(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Uy(r,s,n)}const Zi={},wo=new WeakMap;let _r;function $y(t,e=!1,n=_r){if(n){let r=wo.get(n);r||wo.set(n,r=[]),r.push(t)}}function jy(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:Ut(H)||s===!1||s===0?En(H,1):En(H);let f,p,g,_,R=!1,k=!1;if(ft(t)?(p=()=>t.value,R=Ut(t)):Qr(t)?(p=()=>h(t),R=!0):le(t)?(k=!0,R=t.some(H=>Qr(H)||Ut(H)),p=()=>t.map(H=>{if(ft(H))return H.value;if(Qr(H))return h(H);if(pe(H))return c?c(H,2):H()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){An();try{g()}finally{Rn()}}const H=_r;_r=f;try{return c?c(t,3,[_]):t(_)}finally{_r=H}}:p=en,e&&s){const H=p,ce=s===!0?1/0:s;p=()=>En(H(),ce)}const D=my(),B=()=>{f.stop(),D&&D.active&&lc(D.effects,f)};if(i&&e){const H=e;e=(...ce)=>{H(...ce),B()}}let F=k?new Array(t.length).fill(Zi):Zi;const j=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ce=f.run();if(s||R||(k?ce.some((fe,w)=>Wn(fe,F[w])):Wn(ce,F))){g&&g();const fe=_r;_r=f;try{const w=[ce,F===Zi?void 0:k&&F[0]===Zi?[]:F,_];F=ce,c?c(e,3,w):e(...w)}finally{_r=fe}}}else f.run()};return l&&l(j),f=new Wd(p),f.scheduler=o?()=>o(j,!1):j,_=H=>$y(H,!1,f),g=f.onStop=()=>{const H=wo.get(f);if(H){if(c)c(H,4);else for(const ce of H)ce();wo.delete(f)}},e?r?j(!0):F=f.run():o?o(j.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function En(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ft(t))En(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)En(t[r],e,n);else if(Ud(t)||Gr(t))t.forEach(r=>{En(r,e,n)});else if(jd(t)){for(const r in t)En(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&En(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ii(t,e,n,r){try{return r?t(...r):t()}catch(s){sa(s,e,n)}}function an(t,e,n,r){if(pe(t)){const s=Ii(t,e,n,r);return s&&Bd(s)&&s.catch(i=>{sa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function sa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){An(),Ii(i,null,10,[t,c,h]),Rn();return}}Hy(t,n,s,r,o)}function Hy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let Xt=-1;const Yr=[];let Bn=null,Fr=0;const hp=Promise.resolve();let Ao=null;function fp(t){const e=Ao||hp;return t?e.then(this?t.bind(this):t):e}function qy(t){let e=Xt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=ui(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vc(t){if(!(t.flags&1)){const e=ui(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=ui(n)?yt.push(t):yt.splice(qy(e),0,t),t.flags|=1,dp()}}function dp(){Ao||(Ao=hp.then(gp))}function zy(t){le(t)?Yr.push(...t):Bn&&t.id===-1?Bn.splice(Fr+1,0,t):t.flags&1||(Yr.push(t),t.flags|=1),dp()}function vh(t,e,n=Xt+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pp(t){if(Yr.length){const e=[...new Set(Yr)].sort((n,r)=>ui(n)-ui(r));if(Yr.length=0,Bn){Bn.push(...e);return}for(Bn=e,Fr=0;Fr<Bn.length;Fr++){const n=Bn[Fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,Fr=0}}const ui=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gp(t){try{for(Xt=0;Xt<yt.length;Xt++){const e=yt[Xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ii(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xt<yt.length;Xt++){const e=yt[Xt];e&&(e.flags&=-2)}Xt=-1,yt.length=0,pp(),Ao=null,(yt.length||Yr.length)&&gp()}}let Ft=null,mp=null;function Ro(t){const e=Ft;return Ft=t,mp=t&&t.type.__scopeId||null,e}function Ky(t,e=Ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ph(-1);const i=Ro(e);let o;try{o=t(...s)}finally{Ro(i),r._d&&Ph(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zr(t,e){if(Ft===null)return t;const n=la(Ft),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=De]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&En(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(An(),an(c,n,8,[t.el,l,t,e]),Rn())}}const Wy=Symbol("_vte"),Gy=t=>t.__isTeleport;function Ec(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ec(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _p(t,e){return pe(t)?dt({name:t.name},e,{setup:t}):t}function yp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qs(t,e,n,r,s=!1){if(le(t)){t.forEach((R,k)=>Qs(R,e&&(le(e)?e[k]:e),n,r,s));return}if(Xs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?la(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===De?l.refs={}:l.refs,p=l.setupState,g=be(p),_=p===De?()=>!1:R=>Se(g,R);if(h!=null&&h!==c&&(qe(h)?(f[h]=null,_(h)&&(p[h]=null)):ft(h)&&(h.value=null)),pe(c))Ii(c,l,12,[o,f]);else{const R=qe(c),k=ft(c);if(R||k){const D=()=>{if(t.f){const B=R?_(c)?p[c]:f[c]:c.value;s?le(B)&&lc(B,i):le(B)?B.includes(i)||B.push(i):R?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else R?(f[c]=o,_(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,Pt(D,n)):D()}}}ta().requestIdleCallback;ta().cancelIdleCallback;const Xs=t=>!!t.type.__asyncLoader,vp=t=>t.type.__isKeepAlive;function Qy(t,e){Ep(t,"a",e)}function Xy(t,e){Ep(t,"da",e)}function Ep(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)vp(s.parent.vnode)&&Yy(r,e,n,s),s=s.parent}}function Yy(t,e,n,r){const s=ia(e,t,r,!0);Tp(()=>{lc(r[e],s)},n)}function ia(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{An();const l=Ai(n),c=an(e,n,t,o);return l(),Rn(),c});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=vt)=>{(!di||t==="sp")&&ia(t,(...r)=>e(...r),n)},Jy=On("bm"),wi=On("m"),Zy=On("bu"),ev=On("u"),tv=On("bum"),Tp=On("um"),nv=On("sp"),rv=On("rtg"),sv=On("rtc");function iv(t,e=vt){ia("ec",t,e)}const ov=Symbol.for("v-ndc");function hi(t,e,n,r){let s;const i=n,o=le(t);if(o||qe(t)){const l=o&&Qr(t);let c=!1,h=!1;l&&(c=!Ut(t),h=Zn(t),t=na(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?Io(tt(t[f])):tt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const bl=t=>t?Hp(t)?la(t):bl(t.parent):null,Ys=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bl(t.parent),$root:t=>bl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wp(t),$forceUpdate:t=>t.f||(t.f=()=>{vc(t.update)}),$nextTick:t=>t.n||(t.n=fp.bind(t.proxy)),$watch:t=>Sv.bind(t)}),Za=(t,e)=>t!==De&&!t.__isScriptSetup&&Se(t,e),av={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Za(r,e))return o[e]=1,r[e];if(s!==De&&Se(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Se(h,e))return o[e]=3,i[e];if(n!==De&&Se(n,e))return o[e]=4,n[e];Sl&&(o[e]=0)}}const f=Ys[e];let p,g;if(f)return e==="$attrs"&&ut(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==De&&Se(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Se(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Za(s,e)?(s[e]=n,!0):r!==De&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==De&&Se(t,o)||Za(e,o)||(l=i[0])&&Se(l,o)||Se(r,o)||Se(Ys,o)||Se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sl=!0;function lv(t){const e=wp(t),n=t.proxy,r=t.ctx;Sl=!1,e.beforeCreate&&Th(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:R,activated:k,deactivated:D,beforeDestroy:B,beforeUnmount:F,destroyed:j,unmounted:H,render:ce,renderTracked:fe,renderTriggered:w,errorCaptured:v,serverPrefetch:I,expose:A,inheritAttrs:b,components:P,directives:T,filters:gt}=e;if(h&&cv(h,r,null),o)for(const ve in o){const me=o[ve];pe(me)&&(r[ve]=me.bind(n))}if(s){const ve=s.call(n,n);xe(ve)&&(t.data=ra(ve))}if(Sl=!0,i)for(const ve in i){const me=i[ve],bt=pe(me)?me.bind(n,n):pe(me.get)?me.get.bind(n,n):en,Bt=!pe(me)&&pe(me.set)?me.set.bind(n):en,Vt=Mt({get:bt,set:Bt});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Me=>Vt.value=Me})}if(l)for(const ve in l)Ip(l[ve],r,n,ve);if(c){const ve=pe(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(me=>{lo(me,ve[me])})}f&&Th(f,t,"c");function je(ve,me){le(me)?me.forEach(bt=>ve(bt.bind(n))):me&&ve(me.bind(n))}if(je(Jy,p),je(wi,g),je(Zy,_),je(ev,R),je(Qy,k),je(Xy,D),je(iv,v),je(sv,fe),je(rv,w),je(tv,F),je(Tp,H),je(nv,I),le(A))if(A.length){const ve=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(ve,me,{get:()=>n[me],set:bt=>n[me]=bt})})}else t.exposed||(t.exposed={});ce&&t.render===en&&(t.render=ce),b!=null&&(t.inheritAttrs=b),P&&(t.components=P),T&&(t.directives=T),I&&yp(t)}function cv(t,e,n=en){le(t)&&(t=Pl(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=tn(s.from||r,s.default,!0):i=tn(s.from||r):i=tn(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Th(t,e,n){an(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ip(t,e,n,r){let s=r.includes(".")?Mp(n,r):()=>n[r];if(qe(t)){const i=e[t];pe(i)&&Js(s,i)}else if(pe(t))Js(s,t.bind(n));else if(xe(t))if(le(t))t.forEach(i=>Ip(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Js(s,i,t)}}function wp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>bo(c,h,o,!0)),bo(c,e,o)),xe(e)&&i.set(e,c),c}function bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&bo(t,i,n,!0),s&&s.forEach(o=>bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=uv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const uv={data:Ih,props:wh,emits:wh,methods:$s,computed:$s,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:$s,directives:$s,watch:fv,provide:Ih,inject:hv};function Ih(t,e){return e?t?function(){return dt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function hv(t,e){return $s(Pl(t),Pl(e))}function Pl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function $s(t,e){return t?dt(Object.create(null),t,e):e}function wh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:dt(Object.create(null),Eh(t),Eh(e??{})):e}function fv(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function Ap(){return{app:null,config:{isNativeTag:sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dv=0;function pv(t,e){return function(r,s=null){pe(r)||(r=dt({},r)),s!=null&&!xe(s)&&(s=null);const i=Ap(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:dv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(h,...p)):pe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const _=h._ceVNode||Et(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,h._container=f,f.__vue_app__=h,la(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(an(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Jr;Jr=h;try{return f()}finally{Jr=p}}};return h}}let Jr=null;function lo(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function tn(t,e,n=!1){const r=vt||Ft;if(r||Jr){let s=Jr?Jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const Rp={},bp=()=>Object.create(Rp),Sp=t=>Object.getPrototypeOf(t)===Rp;function gv(t,e,n,r=!1){const s={},i=bp();t.propsDefaults=Object.create(null),Pp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ap(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=be(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(oa(t.emitsOptions,g))continue;const _=e[g];if(c)if(Se(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const R=Jn(g);s[R]=Cl(c,l,R,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Pp(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Se(e,p)&&((f=Pr(p))===p||!Se(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Cl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Se(e,p))&&(delete i[p],h=!0)}h&&vn(t.attrs,"set","")}function Pp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ks(c))continue;const h=e[c];let f;s&&Se(s,f=Jn(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:oa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=be(n),h=l||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Cl(s,c,p,h[p],t,!Se(h,p))}}return o}function Cl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Se(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ai(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Pr(n))&&(r=!0))}return r}const _v=new WeakMap;function Cp(t,e,n=!1){const r=n?_v:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const f=p=>{c=!0;const[g,_]=Cp(p,e,!0);dt(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return xe(t)&&r.set(t,Wr),Wr;if(le(i))for(let f=0;f<i.length;f++){const p=Jn(i[f]);Ah(p)&&(o[p]=De)}else if(i)for(const f in i){const p=Jn(f);if(Ah(p)){const g=i[f],_=o[p]=le(g)||pe(g)?{type:g}:dt({},g),R=_.type;let k=!1,D=!0;if(le(R))for(let B=0;B<R.length;++B){const F=R[B],j=pe(F)&&F.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(D=!1)}else k=pe(R)&&R.name==="Boolean";_[0]=k,_[1]=D,(k||Se(_,"default"))&&l.push(p)}}const h=[o,l];return xe(t)&&r.set(t,h),h}function Ah(t){return t[0]!=="$"&&!Ks(t)}const Tc=t=>t[0]==="_"||t==="$stable",Ic=t=>le(t)?t.map(Jt):[Jt(t)],yv=(t,e,n)=>{if(e._n)return e;const r=Ky((...s)=>Ic(e(...s)),n);return r._c=!1,r},kp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tc(s))continue;const i=t[s];if(pe(i))e[s]=yv(s,i,r);else if(i!=null){const o=Ic(i);e[s]=()=>o}}},Dp=(t,e)=>{const n=Ic(e);t.slots.default=()=>n},Op=(t,e,n)=>{for(const r in e)(n||!Tc(r))&&(t[r]=e[r])},vv=(t,e,n)=>{const r=t.slots=bp();if(t.vnode.shapeFlag&32){const s=e.__;s&&El(r,"__",s,!0);const i=e._;i?(Op(r,e,n),n&&El(r,"_",i,!0)):kp(e,r)}else e&&Dp(t,e)},Ev=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Op(s,e,n):(i=!e.$stable,kp(e,s)),o=e}else e&&(Dp(t,e),o={default:1});if(i)for(const l in s)!Tc(l)&&o[l]==null&&delete s[l]},Pt=Nv;function Tv(t){return Iv(t)}function Iv(t,e){const n=ta();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=en,insertStaticContent:R}=t,k=(y,E,S,N=null,L=null,x=null,G=void 0,z=null,q=!!E.dynamicChildren)=>{if(y===E)return;y&&!Us(y,E)&&(N=V(y),Me(y,L,x,!0),y=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:$,ref:te,shapeFlag:W}=E;switch($){case aa:D(y,E,S,N);break;case er:B(y,E,S,N);break;case tl:y==null&&F(E,S,N,G);break;case At:P(y,E,S,N,L,x,G,z,q);break;default:W&1?ce(y,E,S,N,L,x,G,z,q):W&6?T(y,E,S,N,L,x,G,z,q):(W&64||W&128)&&$.process(y,E,S,N,L,x,G,z,q,J)}te!=null&&L?Qs(te,y&&y.ref,x,E||y,!E):te==null&&y&&y.ref!=null&&Qs(y.ref,null,x,y,!0)},D=(y,E,S,N)=>{if(y==null)r(E.el=l(E.children),S,N);else{const L=E.el=y.el;E.children!==y.children&&h(L,E.children)}},B=(y,E,S,N)=>{y==null?r(E.el=c(E.children||""),S,N):E.el=y.el},F=(y,E,S,N)=>{[y.el,y.anchor]=R(y.children,E,S,N,y.el,y.anchor)},j=({el:y,anchor:E},S,N)=>{let L;for(;y&&y!==E;)L=g(y),r(y,S,N),y=L;r(E,S,N)},H=({el:y,anchor:E})=>{let S;for(;y&&y!==E;)S=g(y),s(y),y=S;s(E)},ce=(y,E,S,N,L,x,G,z,q)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),y==null?fe(E,S,N,L,x,G,z,q):I(y,E,L,x,G,z,q)},fe=(y,E,S,N,L,x,G,z)=>{let q,$;const{props:te,shapeFlag:W,transition:Z,dirs:oe}=y;if(q=y.el=o(y.type,x,te&&te.is,te),W&8?f(q,y.children):W&16&&v(y.children,q,null,N,L,el(y,x),G,z),oe&&gr(y,null,N,"created"),w(q,y,y.scopeId,G,N),te){for(const de in te)de!=="value"&&!Ks(de)&&i(q,de,null,te[de],x,N);"value"in te&&i(q,"value",null,te.value,x),($=te.onVnodeBeforeMount)&&Qt($,N,y)}oe&&gr(y,null,N,"beforeMount");const se=wv(L,Z);se&&Z.beforeEnter(q),r(q,E,S),(($=te&&te.onVnodeMounted)||se||oe)&&Pt(()=>{$&&Qt($,N,y),se&&Z.enter(q),oe&&gr(y,null,N,"mounted")},L)},w=(y,E,S,N,L)=>{if(S&&_(y,S),N)for(let x=0;x<N.length;x++)_(y,N[x]);if(L){let x=L.subTree;if(E===x||Fp(x.type)&&(x.ssContent===E||x.ssFallback===E)){const G=L.vnode;w(y,G,G.scopeId,G.slotScopeIds,L.parent)}}},v=(y,E,S,N,L,x,G,z,q=0)=>{for(let $=q;$<y.length;$++){const te=y[$]=z?$n(y[$]):Jt(y[$]);k(null,te,E,S,N,L,x,G,z)}},I=(y,E,S,N,L,x,G)=>{const z=E.el=y.el;let{patchFlag:q,dynamicChildren:$,dirs:te}=E;q|=y.patchFlag&16;const W=y.props||De,Z=E.props||De;let oe;if(S&&mr(S,!1),(oe=Z.onVnodeBeforeUpdate)&&Qt(oe,S,E,y),te&&gr(E,y,S,"beforeUpdate"),S&&mr(S,!0),(W.innerHTML&&Z.innerHTML==null||W.textContent&&Z.textContent==null)&&f(z,""),$?A(y.dynamicChildren,$,z,S,N,el(E,L),x):G||me(y,E,z,null,S,N,el(E,L),x,!1),q>0){if(q&16)b(z,W,Z,S,L);else if(q&2&&W.class!==Z.class&&i(z,"class",null,Z.class,L),q&4&&i(z,"style",W.style,Z.style,L),q&8){const se=E.dynamicProps;for(let de=0;de<se.length;de++){const Ee=se[de],Xe=W[Ee],Ye=Z[Ee];(Ye!==Xe||Ee==="value")&&i(z,Ee,Xe,Ye,L,S)}}q&1&&y.children!==E.children&&f(z,E.children)}else!G&&$==null&&b(z,W,Z,S,L);((oe=Z.onVnodeUpdated)||te)&&Pt(()=>{oe&&Qt(oe,S,E,y),te&&gr(E,y,S,"updated")},N)},A=(y,E,S,N,L,x,G)=>{for(let z=0;z<E.length;z++){const q=y[z],$=E[z],te=q.el&&(q.type===At||!Us(q,$)||q.shapeFlag&198)?p(q.el):S;k(q,$,te,null,N,L,x,G,!0)}},b=(y,E,S,N,L)=>{if(E!==S){if(E!==De)for(const x in E)!Ks(x)&&!(x in S)&&i(y,x,E[x],null,L,N);for(const x in S){if(Ks(x))continue;const G=S[x],z=E[x];G!==z&&x!=="value"&&i(y,x,z,G,L,N)}"value"in S&&i(y,"value",E.value,S.value,L)}},P=(y,E,S,N,L,x,G,z,q)=>{const $=E.el=y?y.el:l(""),te=E.anchor=y?y.anchor:l("");let{patchFlag:W,dynamicChildren:Z,slotScopeIds:oe}=E;oe&&(z=z?z.concat(oe):oe),y==null?(r($,S,N),r(te,S,N),v(E.children||[],S,te,L,x,G,z,q)):W>0&&W&64&&Z&&y.dynamicChildren?(A(y.dynamicChildren,Z,S,L,x,G,z),(E.key!=null||L&&E===L.subTree)&&Vp(y,E,!0)):me(y,E,S,te,L,x,G,z,q)},T=(y,E,S,N,L,x,G,z,q)=>{E.slotScopeIds=z,y==null?E.shapeFlag&512?L.ctx.activate(E,S,N,G,q):gt(E,S,N,L,x,G,q):Ot(y,E,q)},gt=(y,E,S,N,L,x,G)=>{const z=y.component=$v(y,N,L);if(vp(y)&&(z.ctx.renderer=J),jv(z,!1,G),z.asyncDep){if(L&&L.registerDep(z,je,G),!y.el){const q=z.subTree=Et(er);B(null,q,E,S)}}else je(z,y,E,S,L,x,G)},Ot=(y,E,S)=>{const N=E.component=y.component;if(Ov(y,E,S))if(N.asyncDep&&!N.asyncResolved){ve(N,E,S);return}else N.next=E,N.update();else E.el=y.el,N.vnode=E},je=(y,E,S,N,L,x,G)=>{const z=()=>{if(y.isMounted){let{next:W,bu:Z,u:oe,parent:se,vnode:de}=y;{const it=Np(y);if(it){W&&(W.el=de.el,ve(y,W,G)),it.asyncDep.then(()=>{y.isUnmounted||z()});return}}let Ee=W,Xe;mr(y,!1),W?(W.el=de.el,ve(y,W,G)):W=de,Z&&ao(Z),(Xe=W.props&&W.props.onVnodeBeforeUpdate)&&Qt(Xe,se,W,de),mr(y,!0);const Ye=bh(y),Nt=y.subTree;y.subTree=Ye,k(Nt,Ye,p(Nt.el),V(Nt),y,L,x),W.el=Ye.el,Ee===null&&Vv(y,Ye.el),oe&&Pt(oe,L),(Xe=W.props&&W.props.onVnodeUpdated)&&Pt(()=>Qt(Xe,se,W,de),L)}else{let W;const{el:Z,props:oe}=E,{bm:se,m:de,parent:Ee,root:Xe,type:Ye}=y,Nt=Xs(E);mr(y,!1),se&&ao(se),!Nt&&(W=oe&&oe.onVnodeBeforeMount)&&Qt(W,Ee,E),mr(y,!0);{Xe.ce&&Xe.ce._def.shadowRoot!==!1&&Xe.ce._injectChildStyle(Ye);const it=y.subTree=bh(y);k(null,it,S,N,y,L,x),E.el=it.el}if(de&&Pt(de,L),!Nt&&(W=oe&&oe.onVnodeMounted)){const it=E;Pt(()=>Qt(W,Ee,it),L)}(E.shapeFlag&256||Ee&&Xs(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&Pt(y.a,L),y.isMounted=!0,E=S=N=null}};y.scope.on();const q=y.effect=new Wd(z);y.scope.off();const $=y.update=q.run.bind(q),te=y.job=q.runIfDirty.bind(q);te.i=y,te.id=y.uid,q.scheduler=()=>vc(te),mr(y,!0),$()},ve=(y,E,S)=>{E.component=y;const N=y.vnode.props;y.vnode=E,y.next=null,mv(y,E.props,N,S),Ev(y,E.children,S),An(),vh(y),Rn()},me=(y,E,S,N,L,x,G,z,q=!1)=>{const $=y&&y.children,te=y?y.shapeFlag:0,W=E.children,{patchFlag:Z,shapeFlag:oe}=E;if(Z>0){if(Z&128){Bt($,W,S,N,L,x,G,z,q);return}else if(Z&256){bt($,W,S,N,L,x,G,z,q);return}}oe&8?(te&16&&Tt($,L,x),W!==$&&f(S,W)):te&16?oe&16?Bt($,W,S,N,L,x,G,z,q):Tt($,L,x,!0):(te&8&&f(S,""),oe&16&&v(W,S,N,L,x,G,z,q))},bt=(y,E,S,N,L,x,G,z,q)=>{y=y||Wr,E=E||Wr;const $=y.length,te=E.length,W=Math.min($,te);let Z;for(Z=0;Z<W;Z++){const oe=E[Z]=q?$n(E[Z]):Jt(E[Z]);k(y[Z],oe,S,null,L,x,G,z,q)}$>te?Tt(y,L,x,!0,!1,W):v(E,S,N,L,x,G,z,q,W)},Bt=(y,E,S,N,L,x,G,z,q)=>{let $=0;const te=E.length;let W=y.length-1,Z=te-1;for(;$<=W&&$<=Z;){const oe=y[$],se=E[$]=q?$n(E[$]):Jt(E[$]);if(Us(oe,se))k(oe,se,S,null,L,x,G,z,q);else break;$++}for(;$<=W&&$<=Z;){const oe=y[W],se=E[Z]=q?$n(E[Z]):Jt(E[Z]);if(Us(oe,se))k(oe,se,S,null,L,x,G,z,q);else break;W--,Z--}if($>W){if($<=Z){const oe=Z+1,se=oe<te?E[oe].el:N;for(;$<=Z;)k(null,E[$]=q?$n(E[$]):Jt(E[$]),S,se,L,x,G,z,q),$++}}else if($>Z)for(;$<=W;)Me(y[$],L,x,!0),$++;else{const oe=$,se=$,de=new Map;for($=se;$<=Z;$++){const Je=E[$]=q?$n(E[$]):Jt(E[$]);Je.key!=null&&de.set(Je.key,$)}let Ee,Xe=0;const Ye=Z-se+1;let Nt=!1,it=0;const Nn=new Array(Ye);for($=0;$<Ye;$++)Nn[$]=0;for($=oe;$<=W;$++){const Je=y[$];if(Xe>=Ye){Me(Je,L,x,!0);continue}let xt;if(Je.key!=null)xt=de.get(Je.key);else for(Ee=se;Ee<=Z;Ee++)if(Nn[Ee-se]===0&&Us(Je,E[Ee])){xt=Ee;break}xt===void 0?Me(Je,L,x,!0):(Nn[xt-se]=$+1,xt>=it?it=xt:Nt=!0,k(Je,E[xt],S,null,L,x,G,z,q),Xe++)}const Rs=Nt?Av(Nn):Wr;for(Ee=Rs.length-1,$=Ye-1;$>=0;$--){const Je=se+$,xt=E[Je],xi=Je+1<te?E[Je+1].el:N;Nn[$]===0?k(null,xt,S,xi,L,x,G,z,q):Nt&&(Ee<0||$!==Rs[Ee]?Vt(xt,S,xi,2):Ee--)}}},Vt=(y,E,S,N,L=null)=>{const{el:x,type:G,transition:z,children:q,shapeFlag:$}=y;if($&6){Vt(y.component.subTree,E,S,N);return}if($&128){y.suspense.move(E,S,N);return}if($&64){G.move(y,E,S,J);return}if(G===At){r(x,E,S);for(let W=0;W<q.length;W++)Vt(q[W],E,S,N);r(y.anchor,E,S);return}if(G===tl){j(y,E,S);return}if(N!==2&&$&1&&z)if(N===0)z.beforeEnter(x),r(x,E,S),Pt(()=>z.enter(x),L);else{const{leave:W,delayLeave:Z,afterLeave:oe}=z,se=()=>{y.ctx.isUnmounted?s(x):r(x,E,S)},de=()=>{W(x,()=>{se(),oe&&oe()})};Z?Z(x,se,de):de()}else r(x,E,S)},Me=(y,E,S,N=!1,L=!1)=>{const{type:x,props:G,ref:z,children:q,dynamicChildren:$,shapeFlag:te,patchFlag:W,dirs:Z,cacheIndex:oe}=y;if(W===-2&&(L=!1),z!=null&&(An(),Qs(z,null,S,y,!0),Rn()),oe!=null&&(E.renderCache[oe]=void 0),te&256){E.ctx.deactivate(y);return}const se=te&1&&Z,de=!Xs(y);let Ee;if(de&&(Ee=G&&G.onVnodeBeforeUnmount)&&Qt(Ee,E,y),te&6)Gt(y.component,S,N);else{if(te&128){y.suspense.unmount(S,N);return}se&&gr(y,null,E,"beforeUnmount"),te&64?y.type.remove(y,E,S,J,N):$&&!$.hasOnce&&(x!==At||W>0&&W&64)?Tt($,E,S,!1,!0):(x===At&&W&384||!L&&te&16)&&Tt(q,E,S),N&&Le(y)}(de&&(Ee=G&&G.onVnodeUnmounted)||se)&&Pt(()=>{Ee&&Qt(Ee,E,y),se&&gr(y,null,E,"unmounted")},S)},Le=y=>{const{type:E,el:S,anchor:N,transition:L}=y;if(E===At){Vn(S,N);return}if(E===tl){H(y);return}const x=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:z}=L,q=()=>G(S,x);z?z(y.el,x,q):q()}else x()},Vn=(y,E)=>{let S;for(;y!==E;)S=g(y),s(y),y=S;s(E)},Gt=(y,E,S)=>{const{bum:N,scope:L,job:x,subTree:G,um:z,m:q,a:$,parent:te,slots:{__:W}}=y;Rh(q),Rh($),N&&ao(N),te&&le(W)&&W.forEach(Z=>{te.renderCache[Z]=void 0}),L.stop(),x&&(x.flags|=8,Me(G,y,E,S)),z&&Pt(z,E),Pt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Tt=(y,E,S,N=!1,L=!1,x=0)=>{for(let G=x;G<y.length;G++)Me(y[G],E,S,N,L)},V=y=>{if(y.shapeFlag&6)return V(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=g(y.anchor||y.el),S=E&&E[Wy];return S?g(S):E};let X=!1;const Q=(y,E,S)=>{y==null?E._vnode&&Me(E._vnode,null,null,!0):k(E._vnode||null,y,E,null,null,null,S),E._vnode=y,X||(X=!0,vh(),pp(),X=!1)},J={p:k,um:Me,m:Vt,r:Le,mt:gt,mc:v,pc:me,pbc:A,n:V,o:t};return{render:Q,hydrate:void 0,createApp:pv(Q)}}function el({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vp(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=$n(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Vp(o,l)),l.type===aa&&(l.el=o.el),l.type===er&&!l.el&&(l.el=o.el)}}function Av(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Np(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Np(e)}function Rh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Rv=Symbol.for("v-scx"),bv=()=>tn(Rv);function Js(t,e,n){return xp(t,e,n)}function xp(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,l=dt({},n),c=e&&r||!e&&i!=="post";let h;if(di){if(i==="sync"){const _=bv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=en,_.resume=en,_.pause=en,_}}const f=vt;l.call=(_,R,k)=>an(_,f,R,k);let p=!1;i==="post"?l.scheduler=_=>{Pt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,R)=>{R?_():vc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=jy(t,e,l);return di&&(h?h.push(g):c&&g()),g}function Sv(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Mp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Ai(this),l=xp(s,i.bind(r),n);return o(),l}function Mp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Pv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jn(e)}Modifiers`]||t[`${Pr(e)}Modifiers`];function Cv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&Pv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>qe(f)?f.trim():f)),o.number&&(s=n.map(Tl)));let l,c=r[l=Ga(e)]||r[l=Ga(Jn(e))];!c&&i&&(c=r[l=Ga(Pr(e))]),c&&an(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,an(h,t,6,s)}}function Lp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=h=>{const f=Lp(h,e,!0);f&&(l=!0,dt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):dt(o,i),xe(t)&&r.set(t,o),o)}function oa(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Pr(e))||Se(t,e))}function bh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:R,inheritAttrs:k}=t,D=Ro(t);let B,F;try{if(n.shapeFlag&4){const H=s||r,ce=H;B=Jt(h.call(ce,H,f,p,_,g,R)),F=l}else{const H=e;B=Jt(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),F=e.props?l:kv(l)}}catch(H){Zs.length=0,sa(H,t,1),B=Et(er)}let j=B;if(F&&k!==!1){const H=Object.keys(F),{shapeFlag:ce}=j;H.length&&ce&7&&(i&&H.some(ac)&&(F=Dv(F,i)),j=is(j,F,!1,!0))}return n.dirs&&(j=is(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Ec(j,n.transition),B=j,Ro(D),B}const kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},Dv=(t,e)=>{const n={};for(const r in t)(!ac(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ov(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Sh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!oa(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Sh(r,o,h):!0:!!o;return!1}function Sh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!oa(n,i))return!0}return!1}function Vv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fp=t=>t.__isSuspense;function Nv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):zy(t)}const At=Symbol.for("v-fgt"),aa=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),Zs=[];let Ct=null;function Ae(t=!1){Zs.push(Ct=t?null:[])}function xv(){Zs.pop(),Ct=Zs[Zs.length-1]||null}let fi=1;function Ph(t,e=!1){fi+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function Up(t){return t.dynamicChildren=fi>0?Ct||Wr:null,xv(),fi>0&&Ct&&Ct.push(t),t}function Ce(t,e,n,r,s,i){return Up(ne(t,e,n,r,s,i,!0))}function Bp(t,e,n,r,s){return Up(Et(t,e,n,r,s,!0))}function So(t){return t?t.__v_isVNode===!0:!1}function Us(t,e){return t.type===e.type&&t.key===e.key}const $p=({key:t})=>t??null,co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||ft(t)||pe(t)?{i:Ft,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,r=0,s=null,i=t===At?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$p(e),ref:e&&co(e),scopeId:mp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ft};return l?(wc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),fi>0&&!o&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const Et=Mv;function Mv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ov)&&(t=er),So(t)){const l=is(t,e,!0);return n&&wc(l,n),fi>0&&!i&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(t)]=l:Ct.push(l)),l.patchFlag=-2,l}if(Kv(t)&&(t=t.__vccOpts),e){e=Lv(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=hc(l)),xe(c)&&(yc(c)&&!le(c)&&(c=dt({},c)),e.style=uc(c))}const o=qe(t)?1:Fp(t)?128:Gy(t)?64:xe(t)?4:pe(t)?2:0;return ne(t,e,n,r,s,o,i,!0)}function Lv(t){return t?yc(t)||Sp(t)?dt({},t):t:null}function is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Fv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&$p(h),ref:e&&e.ref?n&&i?le(i)?i.concat(co(e)):[i,co(e)]:co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ec(f,c.clone(f)),f}function jp(t=" ",e=0){return Et(aa,null,t,e)}function Ir(t="",e=!1){return e?(Ae(),Bp(er,null,t)):Et(er,null,t)}function Jt(t){return t==null||typeof t=="boolean"?Et(er):le(t)?Et(At,null,t.slice()):So(t)?$n(t):Et(aa,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function wc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Sp(e)?e._ctx=Ft:s===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Ft},n=32):(e=String(e),r&64?(n=16,e=[jp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=hc([e.class,r.class]));else if(s==="style")e.style=uc([e.style,r.style]);else if(Jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){an(t,e,7,[n,r])}const Uv=Ap();let Bv=0;function $v(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Uv,i={uid:Bv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(r,s),emitsOptions:Lp(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cv.bind(null,i),t.ce&&t.ce(i),i}let vt=null,Po,kl;{const t=ta(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),kl=e("__VUE_SSR_SETTERS__",n=>di=n)}const Ai=t=>{const e=vt;return Po(t),t.scope.on(),()=>{t.scope.off(),Po(e)}},Ch=()=>{vt&&vt.scope.off(),Po(null)};function Hp(t){return t.vnode.shapeFlag&4}let di=!1;function jv(t,e=!1,n=!1){e&&kl(e);const{props:r,children:s}=t.vnode,i=Hp(t);gv(t,r,i,e),vv(t,s,n||e);const o=i?Hv(t,e):void 0;return e&&kl(!1),o}function Hv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,av);const{setup:r}=n;if(r){An();const s=t.setupContext=r.length>1?zv(t):null,i=Ai(t),o=Ii(r,t,0,[t.props,s]),l=Bd(o);if(Rn(),i(),(l||t.sp)&&!Xs(t)&&yp(t),l){if(o.then(Ch,Ch),e)return o.then(c=>{kh(t,c)}).catch(c=>{sa(c,t,0)});t.asyncDep=o}else kh(t,o)}else qp(t)}function kh(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=up(e)),qp(t)}function qp(t,e,n){const r=t.type;t.render||(t.render=r.render||en);{const s=Ai(t);An();try{lv(t)}finally{Rn(),s()}}}const qv={get(t,e){return ut(t,"get",""),t[e]}};function zv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,qv),slots:t.slots,emit:t.emit,expose:e}}function la(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(up(xy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ys)return Ys[n](t)},has(e,n){return n in e||n in Ys}})):t.proxy}function Kv(t){return pe(t)&&"__vccOpts"in t}const Mt=(t,e)=>By(t,e,di);function zp(t,e,n){const r=arguments.length;return r===2?xe(e)&&!le(e)?So(e)?Et(t,null,[e]):Et(t,e):Et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&So(n)&&(n=[n]),Et(t,e,n))}const Wv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dl;const Dh=typeof window<"u"&&window.trustedTypes;if(Dh)try{Dl=Dh.createPolicy("vue",{createHTML:t=>t})}catch{}const Kp=Dl?t=>Dl.createHTML(t):t=>t,Gv="http://www.w3.org/2000/svg",Qv="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,Oh=yn&&yn.createElement("template"),Xv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(Gv,t):e==="mathml"?yn.createElementNS(Qv,t):n?yn.createElement(t,{is:n}):yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oh.innerHTML=Kp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Oh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yv=Symbol("_vtc");function Jv(t,e,n){const r=t[Yv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vh=Symbol("_vod"),Zv=Symbol("_vsh"),eE=Symbol(""),tE=/(^|;)\s*display\s*:/;function nE(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&uo(r,l,"")}else for(const o in e)n[o]==null&&uo(r,o,"");for(const o in n)o==="display"&&(i=!0),uo(r,o,n[o])}else if(s){if(e!==n){const o=r[eE];o&&(n+=";"+o),r.cssText=n,i=tE.test(n)}}else e&&t.removeAttribute("style");Vh in t&&(t[Vh]=i?r.display:"",t[Zv]&&(r.display="none"))}const Nh=/\s*!important$/;function uo(t,e,n){if(le(n))n.forEach(r=>uo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rE(t,e);Nh.test(n)?t.setProperty(Pr(r),n.replace(Nh,""),"important"):t[r]=n}}const xh=["Webkit","Moz","ms"],nl={};function rE(t,e){const n=nl[e];if(n)return n;let r=Jn(e);if(r!=="filter"&&r in t)return nl[e]=r;r=Hd(r);for(let s=0;s<xh.length;s++){const i=xh[s]+r;if(i in t)return nl[e]=i}return e}const Mh="http://www.w3.org/1999/xlink";function Lh(t,e,n,r,s,i=py(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mh,e.slice(6,e.length)):t.setAttributeNS(Mh,e,n):n==null||i&&!qd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":lr(n)?String(n):n)}function Fh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qd(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ur(t,e,n,r){t.addEventListener(e,n,r)}function sE(t,e,n,r){t.removeEventListener(e,n,r)}const Uh=Symbol("_vei");function iE(t,e,n,r,s=null){const i=t[Uh]||(t[Uh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=oE(e);if(r){const h=i[e]=cE(r,s);Ur(t,l,h,c)}else o&&(sE(t,l,o,c),i[e]=void 0)}}const Bh=/(?:Once|Passive|Capture)$/;function oE(t){let e;if(Bh.test(t)){e={};let r;for(;r=t.match(Bh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pr(t.slice(2)),e]}let rl=0;const aE=Promise.resolve(),lE=()=>rl||(aE.then(()=>rl=0),rl=Date.now());function cE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;an(uE(r,n.value),e,5,[r])};return n.value=t,n.attached=lE(),n}function uE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $h=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Jv(t,r,o):e==="style"?nE(t,n,r):Jo(e)?ac(e)||iE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fE(t,e,r,o))?(Fh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Fh(t,Jn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lh(t,e,r,o))};function fE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$h(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $h(e)&&qe(n)?!1:e in t}const jh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ao(e,n):e};function dE(t){t.target.composing=!0}function Hh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sl=Symbol("_assign"),Kr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sl]=jh(s);const i=r||s.props&&s.props.type==="number";Ur(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Tl(l)),t[sl](l)}),n&&Ur(t,"change",()=>{t.value=t.value.trim()}),e||(Ur(t,"compositionstart",dE),Ur(t,"compositionend",Hh),Ur(t,"change",Hh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sl]=jh(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Tl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},pE=["ctrl","shift","alt","meta"],gE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pE.some(n=>t[`${n}Key`]&&!e.includes(n))},mE=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=gE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},_E=dt({patchProp:hE},Xv);let qh;function yE(){return qh||(qh=Tv(_E))}const vE=(...t)=>{const e=yE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=TE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,EE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function EE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function TE(t){return qe(t)?document.querySelector(t):t}const IE=()=>{};var zh={};/**
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
 */const Wp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new AE;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RE=function(t){const e=Wp(t);return Gp.encodeByteArray(e,!0)},Co=function(t){return RE(t).replace(/\./g,"")},Qp=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SE=()=>bE().__FIREBASE_DEFAULTS__,PE=()=>{if(typeof process>"u"||typeof zh>"u")return;const t=zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qp(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return IE()||SE()||PE()||CE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xp=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yp=t=>{const e=Xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jp=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},Zp=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Cr(t){return t.endsWith(".cloudworkstations.dev")}async function Ac(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function eg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Co(JSON.stringify(n)),Co(JSON.stringify(o)),""].join(".")}const ei={};function DE(){const t={prod:[],emulator:[]};for(const e of Object.keys(ei))ei[e]?t.emulator.push(e):t.prod.push(e);return t}function OE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kh=!1;function Rc(t,e){if(typeof window>"u"||typeof document>"u"||!Cr(window.location.host)||ei[t]===e||ei[t]||Kh)return;ei[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=DE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Kh=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=OE(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),D=document.getElementById(k)||document.createElement("a"),B=n("preprendIcon"),F=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),f(D,k);const H=h();c(F,B),j.append(F,R,D,H),document.body.appendChild(j)}i?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function NE(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ME(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FE(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UE(){return!NE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BE(){try{return typeof indexedDB=="object"}catch{return!1}}function $E(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const jE="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jE,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?HE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new fn(s,l,r)}}function HE(t,e){return t.replace(qE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qE=/\{\$([^}]+)}/g;function zE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wh(i)&&Wh(o)){if(!bn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wh(t){return t!==null&&typeof t=="object"}/**
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
 */function bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function KE(t,e){const n=new WE(t,e);return n.subscribe.bind(n)}class WE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function il(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class QE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YE(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XE(t){return t===yr?void 0:t}function YE(t){return t.instantiationMode==="EAGER"}/**
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
 */class JE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const ZE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},eT=_e.INFO,tT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},nT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=eT,this._logHandler=nT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const rT=(t,e)=>e.some(n=>t instanceof n);let Gh,Qh;function sT(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iT(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tg=new WeakMap,Ol=new WeakMap,ng=new WeakMap,ol=new WeakMap,Sc=new WeakMap;function oT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tg.set(n,t)}).catch(()=>{}),Sc.set(e,t),e}function aT(t){if(Ol.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ol.set(t,e)}let Vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ng.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lT(t){Vl=t(Vl)}function cT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(al(this),e,...n);return ng.set(r,e.sort?e.sort():[e]),Gn(r)}:iT().includes(t)?function(...e){return t.apply(al(this),e),Gn(tg.get(this))}:function(...e){return Gn(t.apply(al(this),e))}}function uT(t){return typeof t=="function"?cT(t):(t instanceof IDBTransaction&&aT(t),rT(t,sT())?new Proxy(t,Vl):t)}function Gn(t){if(t instanceof IDBRequest)return oT(t);if(ol.has(t))return ol.get(t);const e=uT(t);return e!==t&&(ol.set(t,e),Sc.set(e,t)),e}const al=t=>Sc.get(t);function hT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Gn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Gn(o.result),c.oldVersion,c.newVersion,Gn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const fT=["get","getKey","getAll","getAllKeys","count"],dT=["put","add","delete","clear"],ll=new Map;function Xh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ll.get(e))return ll.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ll.set(e,i),i}lT(t=>({...t,get:(e,n,r)=>Xh(e,n)||t.get(e,n,r),has:(e,n)=>!!Xh(e,n)||t.has(e,n)}));/**
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
 */class pT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gT(t){const e=t.getComponent();return e?.type==="VERSION"}const Nl="@firebase/app",Yh="0.13.1";/**
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
 */const Sn=new bc("@firebase/app"),mT="@firebase/app-compat",_T="@firebase/analytics-compat",yT="@firebase/analytics",vT="@firebase/app-check-compat",ET="@firebase/app-check",TT="@firebase/auth",IT="@firebase/auth-compat",wT="@firebase/database",AT="@firebase/data-connect",RT="@firebase/database-compat",bT="@firebase/functions",ST="@firebase/functions-compat",PT="@firebase/installations",CT="@firebase/installations-compat",kT="@firebase/messaging",DT="@firebase/messaging-compat",OT="@firebase/performance",VT="@firebase/performance-compat",NT="@firebase/remote-config",xT="@firebase/remote-config-compat",MT="@firebase/storage",LT="@firebase/storage-compat",FT="@firebase/firestore",UT="@firebase/ai",BT="@firebase/firestore-compat",$T="firebase",jT="11.9.0";/**
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
 */const xl="[DEFAULT]",HT={[Nl]:"fire-core",[mT]:"fire-core-compat",[yT]:"fire-analytics",[_T]:"fire-analytics-compat",[ET]:"fire-app-check",[vT]:"fire-app-check-compat",[TT]:"fire-auth",[IT]:"fire-auth-compat",[wT]:"fire-rtdb",[AT]:"fire-data-connect",[RT]:"fire-rtdb-compat",[bT]:"fire-fn",[ST]:"fire-fn-compat",[PT]:"fire-iid",[CT]:"fire-iid-compat",[kT]:"fire-fcm",[DT]:"fire-fcm-compat",[OT]:"fire-perf",[VT]:"fire-perf-compat",[NT]:"fire-rc",[xT]:"fire-rc-compat",[MT]:"fire-gcs",[LT]:"fire-gcs-compat",[FT]:"fire-fst",[BT]:"fire-fst-compat",[UT]:"fire-vertex","fire-js":"fire-js",[$T]:"fire-js-all"};/**
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
 */const ko=new Map,qT=new Map,Ml=new Map;function Jh(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ar(t){const e=t.name;if(Ml.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Ml.set(e,t);for(const n of ko.values())Jh(n,t);for(const n of qT.values())Jh(n,t);return!0}function ua(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const zT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Ri("app","Firebase",zT);/**
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
 */class KT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=jT;function rg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(n||(n=Jp()),!n)throw Qn.create("no-options");const i=ko.get(s);if(i){if(bn(n,i.options)&&bn(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const o=new JE(s);for(const c of Ml.values())o.addComponent(c);const l=new KT(n,r,o);return ko.set(s,l),l}function Pc(t=xl){const e=ko.get(t);if(!e&&t===xl&&Jp())return rg();if(!e)throw Qn.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=HT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(l.join(" "));return}Ar(new tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const WT="firebase-heartbeat-database",GT=1,pi="firebase-heartbeat-store";let cl=null;function sg(){return cl||(cl=hT(WT,GT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),cl}async function QT(t){try{const n=(await sg()).transaction(pi),r=await n.objectStore(pi).get(ig(t));return await n.done,r}catch(e){if(e instanceof fn)Sn.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e?.message});Sn.warn(n.message)}}}async function Zh(t,e){try{const r=(await sg()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,ig(t)),await r.done}catch(n){if(n instanceof fn)Sn.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n?.message});Sn.warn(r.message)}}}function ig(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XT=1024,YT=30;class JT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ef();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>YT){const o=tI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ef(),{heartbeatsToSend:r,unsentEntries:s}=ZT(this._heartbeatsCache.heartbeats),i=Co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sn.warn(n),""}}}function ef(){return new Date().toISOString().substring(0,10)}function ZT(t,e=XT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BE()?$E().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QT(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tf(t){return Co(JSON.stringify({version:2,heartbeats:t})).length}function tI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function nI(t){Ar(new tr("platform-logger",e=>new pT(e),"PRIVATE")),Ar(new tr("heartbeat",e=>new JT(e),"PRIVATE")),nn(Nl,Yh,t),nn(Nl,Yh,"esm2017"),nn("fire-js","")}nI("");function Cc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function og(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rI=og,ag=new Ri("auth","Firebase",og());/**
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
 */const Do=new bc("@firebase/auth");function sI(t,...e){Do.logLevel<=_e.WARN&&Do.warn(`Auth (${kr}): ${t}`,...e)}function ho(t,...e){Do.logLevel<=_e.ERROR&&Do.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw Dc(t,...e)}function zt(t,...e){return Dc(t,...e)}function kc(t,e,n){const r=Object.assign(Object.assign({},rI()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return kc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(t,"argument-error"),kc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ag.create(t,...e)}function ae(t,e,...n){if(!t)throw Dc(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function Pn(t,e){t||Tn(e)}/**
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
 */function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oI(){return nf()==="http:"||nf()==="https:"}function nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oI()||ME()||"connection"in navigator)?navigator.onLine:!0}function lI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Si{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=VE()||LE()}get(){return aI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oc(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hI=new Si(3e4,6e4);function Vc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,s={}){return cg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=bi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return xE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Cr(t.emulatorConfig.host)&&(h.credentials="include"),lg.fetch()(await ug(t,t.config.apiHost,n,l),h)})}async function cg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cI),e);try{const s=new dI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw eo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw kc(t,f,h);ln(t,f)}}catch(s){if(s instanceof fn)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function fI(t,e,n,r,s={}){const i=await ys(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ug(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Oc(t.config,s):`${t.config.apiScheme}://${s}`;return uI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class dI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),hI.get())})}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function pI(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function Oo(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gI(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Nc(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:ti(ul(s.auth_time)),issuedAtTime:ti(ul(s.iat)),expirationTime:ti(ul(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ul(t){return Number(t)*1e3}function Nc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qp(n);return s?JSON.parse(s):(ho("Failed to decode base64 JWT payload"),null)}catch(s){return ho("Caught error parsing JWT payload as JSON",s?.toString()),null}}function rf(t){const e=Nc(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&mI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _I{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gi(t,Oo(n,{idToken:r}));ae(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hg(i.providerUserInfo):[],l=vI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!l?.length,f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Fl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function yI(t){const e=rt(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hg(t){return t.map(e=>{var{providerId:n}=e,r=Cc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function EI(t,e){const n=await cg(t,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ug(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Cr(t.emulatorConfig.host)&&(c.credentials="include"),lg.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TI(t,e){return ys(t,"POST","/v2/accounts:revokeToken",Vc(t,e))}/**
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
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=rf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await EI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Fn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _I(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gI(this,e)}reload(){return yI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await gi(this,pI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:H,isAnonymous:ce,providerData:fe,stsTokenManager:w}=n;ae(j&&w,e,"internal-error");const v=Zr.fromJSON(this.name,w);ae(typeof j=="string",e,"internal-error"),Fn(p,e.name),Fn(g,e.name),ae(typeof H=="boolean",e,"internal-error"),ae(typeof ce=="boolean",e,"internal-error"),Fn(_,e.name),Fn(R,e.name),Fn(k,e.name),Fn(D,e.name),Fn(B,e.name),Fn(F,e.name);const I=new jt({uid:j,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ce,photoURL:R,phoneNumber:_,tenantId:k,stsTokenManager:v,createdAt:B,lastLoginAt:F});return fe&&Array.isArray(fe)&&(I.providerData=fe.map(A=>Object.assign({},A))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zr;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Zr;l.updateFromIdToken(r);const c=new jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
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
 */const sf=new Map;function In(t){Pn(t instanceof Function,"Expected a class definition");let e=sf.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sf.set(t,e),e)}/**
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
 */class fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fg.type="NONE";const of=fg;/**
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
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Oo(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(In(of),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||In(of);const o=fo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Oo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await jt._fromGetAccountInfoResponse(e,g,f)}else p=jt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new es(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new es(i,e,r))}}/**
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
 */function af(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(vg(e))return"Webos";if(pg(e))return"Safari";if((e.includes("chrome/")||gg(e))&&!e.includes("edge/"))return"Chrome";if(_g(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function dg(t=pt()){return/firefox\//i.test(t)}function pg(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gg(t=pt()){return/crios\//i.test(t)}function mg(t=pt()){return/iemobile/i.test(t)}function _g(t=pt()){return/android/i.test(t)}function yg(t=pt()){return/blackberry/i.test(t)}function vg(t=pt()){return/webos/i.test(t)}function xc(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function II(t=pt()){var e;return xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wI(){return FE()&&document.documentMode===10}function Eg(t=pt()){return xc(t)||_g(t)||vg(t)||yg(t)||/windows phone/i.test(t)||mg(t)}/**
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
 */function Tg(t,e=[]){let n;switch(t){case"Browser":n=af(pt());break;case"Worker":n=`${af(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
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
 */class AI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function RI(t,e={}){return ys(t,"GET","/v2/passwordPolicy",Vc(t,e))}/**
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
 */const bI=6;class SI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class PI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new AI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Oo(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(wr(this));const n=e?rt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RI(this),n=new SI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await TI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&sI(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ha(t){return rt(t)}class lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=KE(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CI(t){Mc=t}function kI(t){return Mc.loadJS(t)}function DI(){return Mc.gapiScript}function OI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function VI(t,e){const n=ua(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bn(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function NI(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(In);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function xI(t,e,n){const r=ha(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ig(e),{host:o,port:l}=MI(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(bn(h,r.config.emulator)&&bn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Cr(o)?(Ac(`${i}//${o}${c}`),Rc("Auth",!0)):LI()}function Ig(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MI(t){const e=Ig(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cf(o)}}}function cf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function ts(t,e){return fI(t,"POST","/v1/accounts:signInWithIdp",Vc(t,e))}/**
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
 */const FI="http://localhost";class Rr extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:FI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
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
 */class Lc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends Lc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends Pi{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class qn extends Pi{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class zn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),o=uf(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uf(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class No extends fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new No(e,n,r,s)}}function Ag(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(t,i,e,r):i})}async function UI(t,e,n=!1){const r=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
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
 */async function BI(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await gi(t,Ag(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Nc(i.idToken);ae(o,r,"internal-error");const{sub:l}=o;return ae(t.uid===l,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
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
 */async function $I(t,e,n=!1){if(Lt(t.app))return Promise.reject(wr(t));const r="signIn",s=await Ag(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function jI(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function HI(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Rg(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function qI(t){return rt(t).signOut()}const xo="__sak";/**
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
 */class bg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zI=1e3,KI=10;class Sg extends bg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,KI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sg.type="LOCAL";const WI=Sg;/**
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
 */class Pg extends bg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pg.type="SESSION";const Cg=Pg;/**
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
 */function GI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await GI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
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
 */function Fc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Fc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function XI(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function kg(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function YI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JI(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZI(){return kg()?self:null}/**
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
 */const Dg="firebaseLocalStorageDb",ew=1,Mo="firebaseLocalStorage",Og="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function tw(){const t=indexedDB.deleteDatabase(Dg);return new Ci(t).toPromise()}function Ul(){const t=indexedDB.open(Dg,ew);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mo,{keyPath:Og})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mo)?e(r):(r.close(),await tw(),e(await Ul()))})})}async function hf(t,e,n){const r=da(t,!0).put({[Og]:e,value:n});return new Ci(r).toPromise()}async function nw(t,e){const n=da(t,!1).get(e),r=await new Ci(n).toPromise();return r===void 0?null:r.value}function ff(t,e){const n=da(t,!0).delete(e);return new Ci(n).toPromise()}const rw=800,sw=3;class Vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(ZI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YI(),!this.activeServiceWorker)return;this.sender=new QI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await hf(e,xo,"1"),await ff(e,xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ff(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=da(s,!1).getAll();return new Ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vg.type="LOCAL";const iw=Vg;new Si(3e4,6e4);/**
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
 */function Ng(t,e){return e?In(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uc extends wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ow(t){return $I(t.auth,new Uc(t),t.bypassAuthState)}function aw(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),BI(n,new Uc(t),t.bypassAuthState)}async function lw(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),UI(n,new Uc(t),t.bypassAuthState)}/**
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
 */class xg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return lw;case"reauthViaPopup":case"reauthViaRedirect":return aw;default:ln(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cw=new Si(2e3,1e4);async function uw(t,e,n){if(Lt(t.app))return Promise.reject(zt(t,"operation-not-supported-in-this-environment"));const r=ha(t);iI(t,e,Lc);const s=Ng(r,n);return new vr(r,"signInViaPopup",e,s).executeNotNull()}class vr extends xg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cw.get())};e()}}vr.currentPopupAction=null;/**
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
 */const hw="pendingRedirect",po=new Map;class fw extends xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await dw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dw(t,e){const n=mw(e),r=gw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pw(t,e){po.set(t._key(),e)}function gw(t){return In(t._redirectPersistence)}function mw(t){return fo(hw,t.config.apiKey,t.name)}async function _w(t,e,n=!1){if(Lt(t.app))return Promise.reject(wr(t));const r=ha(t),s=Ng(r,e),o=await new fw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yw=10*60*1e3;class vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(df(e))}saveEventToCache(e){this.cachedEventUids.add(df(e)),this.lastProcessedEventTime=Date.now()}}function df(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ew(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mg(t);default:return!1}}/**
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
 */async function Tw(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
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
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ww=/^https?/;async function Aw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tw(t);for(const n of e)try{if(Rw(n))return}catch{}ln(t,"unauthorized-domain")}function Rw(t){const e=Ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ww.test(n))return!1;if(Iw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bw=new Si(3e4,6e4);function pf(){const t=rn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sw(t){return new Promise((e,n)=>{var r,s,i;function o(){pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pf(),n(zt(t,"network-request-failed"))},timeout:bw.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const l=OI("iframefcb");return rn()[l]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},kI(`${DI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw go=null,e})}let go=null;function Pw(t){return go=go||Sw(t),go}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Cw=new Si(5e3,15e3),kw="__/auth/iframe",Dw="emulator/auth/iframe",Ow={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nw(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oc(e,Dw):`https://${t.config.authDomain}/${kw}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=Vw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${bi(r).slice(1)}`}async function xw(t){const e=await Pw(t),n=rn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Nw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ow,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),l=rn().setTimeout(()=>{i(o)},Cw.get());function c(){rn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Mw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lw=500,Fw=600,Uw="_blank",Bw="http://localhost";class gf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $w(t,e,n,r=Lw,s=Fw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Mw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=pt().toLowerCase();n&&(l=gg(h)?Uw:n),dg(h)&&(e=e||Bw,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,R])=>`${g}${_}=${R},`,"");if(II(h)&&l!=="_self")return jw(e||"",l),new gf(null);const p=window.open(e||"",l,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new gf(p)}function jw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Hw="__/auth/handler",qw="emulator/auth/handler",zw=encodeURIComponent("fac");async function mf(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof Lc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Pi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${zw}=${encodeURIComponent(c)}`:"";return`${Kw(t)}?${bi(l).slice(1)}${h}`}function Kw({config:t}){return t.emulator?Oc(t,qw):`https://${t.authDomain}/${Hw}`}/**
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
 */const hl="webStorageSupport";class Ww{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cg,this._completeRedirectFn=_w,this._overrideRedirectResult=pw}async _openPopup(e,n,r,s){var i;Pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await mf(e,n,r,Ll(),s);return $w(e,o,Fc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await mf(e,n,r,Ll(),s);return XI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xw(e),r=new vw(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hl,{type:hl},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[hl];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Aw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eg()||pg()||xc()}}const Gw=Ww;var _f="@firebase/auth",yf="1.10.7";/**
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
 */class Qw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yw(t){Ar(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tg(t)},h=new PI(r,s,i,c);return NI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new tr("auth-internal",e=>{const n=ha(e.getProvider("auth").getImmediate());return(r=>new Qw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(_f,yf,Xw(t)),nn(_f,yf,"esm2017")}/**
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
 */const Jw=5*60,Zw=Zp("authIdTokenMaxAge")||Jw;let vf=null;const eA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zw)return;const s=n?.token;vf!==s&&(vf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tA(t=Pc()){const e=ua(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VI(t,{popupRedirectResolver:Gw,persistence:[iw,WI,Cg]}),r=Zp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eA(i.toString());HI(n,o,()=>o(n.currentUser)),jI(n,l=>o(l))}}const s=Xp("auth");return s&&xI(n,`http://${s}`),n}function nA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}CI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yw("Browser");var rA="firebase",sA="11.9.1";/**
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
 */nn(rA,sA,"app");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,Lg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function I(){}I.prototype=v.prototype,w.D=v.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,b,P){for(var T=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)T[gt-2]=arguments[gt];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(b=0;16>b;++b)A[b]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=w.g[0],I=w.g[1],b=w.g[2];var P=w.g[3],T=v+(P^I&(b^P))+A[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+A[1]+3905402710&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+A[2]+606105819&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+A[3]+3250441966&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(P^I&(b^P))+A[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+A[5]+1200080426&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+A[6]+2821735955&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+A[7]+4249261313&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(P^I&(b^P))+A[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+A[9]+2336552879&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+A[10]+4294925233&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+A[11]+2304563134&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(P^I&(b^P))+A[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+A[13]+4254626195&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+A[14]+2792965006&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+A[15]+1236535329&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(b^P&(I^b))+A[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+A[6]+3225465664&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+A[11]+643717713&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+A[0]+3921069994&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(I^b))+A[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+A[10]+38016083&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+A[15]+3634488961&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+A[4]+3889429448&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(I^b))+A[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+A[14]+3275163606&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+A[3]+4107603335&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+A[8]+1163531501&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(I^b))+A[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+A[2]+4243563512&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+A[7]+1735328473&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+A[12]+2368359562&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(I^b^P)+A[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+A[8]+2272392833&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+A[11]+1839030562&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+A[14]+4259657740&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^P)+A[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+A[4]+1272893353&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+A[7]+4139469664&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+A[10]+3200236656&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^P)+A[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+A[0]+3936430074&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+A[3]+3572445317&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+A[6]+76029189&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^P)+A[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+A[12]+3873151461&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+A[15]+530742520&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+A[2]+3299628645&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(b^(I|~P))+A[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+A[7]+1126891415&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+A[14]+2878612391&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+A[5]+4237533241&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~P))+A[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+A[3]+2399980690&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+A[10]+4293915773&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+A[1]+2240044497&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~P))+A[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+A[15]+4264355552&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+A[6]+2734768916&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+A[13]+1309151649&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~P))+A[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+A[11]+3174756917&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+A[2]+718787259&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var I=v-this.blockSize,A=this.B,b=this.h,P=0;P<v;){if(b==0)for(;P<=I;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<v;)if(A[b++]=w.charCodeAt(P++),b==this.blockSize){s(this,A),b=0;break}}else for(;P<v;)if(A[b++]=w[P++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var I=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=I&255,I/=256;for(this.u(w),w=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)w[I++]=this.g[v]>>>A&255;return w};function i(w,v){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=v(w)}function o(w,v){this.h=v;for(var I=[],A=!0,b=w.length-1;0<=b;b--){var P=w[b]|0;A&&P==v||(I[b]=P,A=!1)}this.g=I}var l={};function c(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return D(h(-w));for(var v=[],I=1,A=0;w>=I;A++)v[A]=w/I|0,I*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return D(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),A=p,b=0;b<w.length;b+=8){var P=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+P),v);8>P?(P=h(Math.pow(v,P)),A=A.j(P).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var w=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(k(this))return"-"+D(this).toString(w);for(var v=h(Math.pow(w,6)),I=this,A="";;){var b=H(I,v).g;I=B(I,b.j(v));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=b,R(I))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=B(this,w),k(w)?-1:R(w)?0:1};function D(w){for(var v=w.g.length,I=[],A=0;A<v;A++)I[A]=~w.g[A];return new o(I,~w.h).add(g)}t.abs=function(){return k(this)?D(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0,b=0;b<=v;b++){var P=A+(this.i(b)&65535)+(w.i(b)&65535),T=(P>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=T>>>16,P&=65535,T&=65535,I[b]=T<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function B(w,v){return w.add(D(v))}t.j=function(w){if(R(this)||R(w))return p;if(k(this))return k(w)?D(this).j(D(w)):D(D(this).j(w));if(k(w))return D(this.j(D(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var P=this.i(A)>>>16,T=this.i(A)&65535,gt=w.i(b)>>>16,Ot=w.i(b)&65535;I[2*A+2*b]+=T*Ot,F(I,2*A+2*b),I[2*A+2*b+1]+=P*Ot,F(I,2*A+2*b+1),I[2*A+2*b+1]+=T*gt,F(I,2*A+2*b+1),I[2*A+2*b+2]+=P*gt,F(I,2*A+2*b+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function F(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function j(w,v){this.g=w,this.h=v}function H(w,v){if(R(v))throw Error("division by zero");if(R(w))return new j(p,p);if(k(w))return v=H(D(w),v),new j(D(v.g),D(v.h));if(k(v))return v=H(w,D(v)),new j(D(v.g),v.h);if(30<w.g.length){if(k(w)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=v;0>=A.l(w);)I=ce(I),A=ce(A);var b=fe(I,1),P=fe(A,1);for(A=fe(A,2),I=fe(I,2);!R(A);){var T=P.add(A);0>=T.l(w)&&(b=b.add(I),P=T),A=fe(A,1),I=fe(I,1)}return v=B(w,b.j(v)),new j(b,v)}for(b=p;0<=w.l(v);){for(I=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=h(I),T=P.j(v);k(T)||0<T.l(w);)I-=A,P=h(I),T=P.j(v);R(P)&&(P=g),b=b.add(P),w=B(w,T)}return new j(b,w)}t.A=function(w){return H(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function ce(w){for(var v=w.g.length+1,I=[],A=0;A<v;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function fe(w,v){var I=v>>5;v%=32;for(var A=w.g.length-I,b=[],P=0;P<A;P++)b[P]=0<v?w.i(P+I)>>>v|w.i(P+I+1)<<32-v:w.i(P+I);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Lg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Xn=o}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fg,js,Ug,mo,Bl,Bg,$g,jg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof to=="object"&&to];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var O=d++;return{value:u(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,O){for(var K=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)K[ke-2]=arguments[ke];return u.prototype[C].apply(m,K)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function D(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=a.length||0,O=m.length||0;a.length=C+O;for(let K=0;K<O;K++)a[C+K]=m[K]}else a.push(m)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ce=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function fe(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let O=0;O<I.length;O++)d=I[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=bt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class gt{constructor(){this.h=this.g=null}add(u,d){const m=Ot.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ot=new B(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,me=!1,bt=new gt,Bt=()=>{const a=l.Promise.resolve(void 0);ve=()=>{a.then(Vt)}};var Vt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var u=Ot;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function Gt(a,u){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ce){e:{try{H(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}R(Gt,Le);var Tt={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++X,this.da=this.fa=!1}function J(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ie(a){this.src=a,this.g={},this.h=0}Ie.prototype.add=function(a,u,d,m,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var K=E(a,u,m,C);return-1<K?(u=a[K],d||(u.fa=!1)):(u=new Q(u,this.src,O,!!m,C),u.fa=d,a.push(u)),u};function y(a,u){var d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=C)&&Array.prototype.splice.call(m,C,1),O&&(J(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function E(a,u,d,m){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==m)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function L(a,u,d,m,C){if(Array.isArray(u)){for(var O=0;O<u.length;O++)L(a,u[O],d,m,C);return null}return d=oe(d),a&&a[V]?a.K(u,d,h(m)?!!m.capture:!1,C):x(a,u,d,!1,m,C)}function x(a,u,d,m,C,O){if(!u)throw Error("Invalid event type");var K=h(C)?!!C.capture:!!C,ke=W(a);if(ke||(a[S]=ke=new Ie(a)),d=ke.add(u,d,m,K,O),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Vn||(C=K),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent($(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=te;return a}function z(a,u,d,m,C){if(Array.isArray(u))for(var O=0;O<u.length;O++)z(a,u[O],d,m,C);else m=h(m)?!!m.capture:!!m,d=oe(d),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],d=E(O,d,m,C),-1<d&&(J(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=W(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,d,m,C)),(d=-1<a?u[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])y(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent($(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=W(u))?(y(d,a),d.h==0&&(d.src=null,u[S]=null)):J(a)}}}function $(a){return a in N?N[a]:N[a]="on"+a}function te(a,u){if(a.da)a=!0;else{u=new Gt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&q(a),a=d.call(m,u)}return a}function W(a){return a=a[S],a instanceof Ie?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(u){return a.handleEvent(u)}),a[Z])}function se(){Me.call(this),this.i=new Ie(this),this.M=this,this.F=null}R(se,Me),se.prototype[V]=!0,se.prototype.removeEventListener=function(a,u,d,m){z(this,a,u,d,m)};function de(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Le(u,a);else if(u instanceof Le)u.target=u.target||a;else{var C=u;u=new Le(m,a),A(u,C)}if(C=!0,d)for(var O=d.length-1;0<=O;O--){var K=u.g=d[O];C=Ee(K,m,!0,u)&&C}if(K=u.g=a,C=Ee(K,m,!0,u)&&C,C=Ee(K,m,!1,u)&&C,d)for(O=0;O<d.length;O++)K=u.g=d[O],C=Ee(K,m,!1,u)&&C}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)J(d[m]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},se.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ee(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,O=0;O<u.length;++O){var K=u[O];if(K&&!K.da&&K.capture==d){var ke=K.listener,Ze=K.ha||K.src;K.fa&&y(a.i,K),C=ke.call(Ze,m)!==!1&&C}}return C&&!m.defaultPrevented}function Xe(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=Xe(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Nt extends Me{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function it(a){Me.call(this),this.h=a,this.g={}}R(it,Me);var Nn=[];function Rs(a){fe(a.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},a),a.g={}}it.prototype.N=function(){it.aa.N.call(this),Rs(this)},it.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Je=l.JSON.stringify,xt=l.JSON.parse,xi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Va(){}Va.prototype.h=null;function Ru(a){return a.h||(a.h=a.i())}function bu(){}var bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Na(){Le.call(this,"d")}R(Na,Le);function xa(){Le.call(this,"c")}R(xa,Le);var hr={},Su=null;function Mi(){return Su=Su||new se}hr.La="serverreachability";function Pu(a){Le.call(this,hr.La,a)}R(Pu,Le);function Ss(a){const u=Mi();de(u,new Pu(u))}hr.STAT_EVENT="statevent";function Cu(a,u){Le.call(this,hr.STAT_EVENT,a),this.stat=u}R(Cu,Le);function mt(a){const u=Mi();de(u,new Cu(u,a))}hr.Ma="timingevent";function ku(a,u){Le.call(this,hr.Ma,a),this.size=u}R(ku,Le);function Ps(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Cs(){this.g=!0}Cs.prototype.xa=function(){this.g=!1};function x_(a,u,d,m,C,O){a.info(function(){if(a.g)if(O)for(var K="",ke=O.split("&"),Ze=0;Ze<ke.length;Ze++){var we=ke[Ze].split("=");if(1<we.length){var ot=we[0];we=we[1];var at=ot.split("_");K=2<=at.length&&at[1]=="type"?K+(ot+"="+we+"&"):K+(ot+"=redacted&")}}else K=null;else K=O;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+K})}function M_(a,u,d,m,C,O,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+O+" "+K})}function Vr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+F_(a,d)+(m?" "+m:"")})}function L_(a,u){a.info(function(){return"TIMEOUT: "+u})}Cs.prototype.info=function(){};function F_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var K=1;K<C.length;K++)C[K]=""}}}}return Je(d)}catch{return u}}var Li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Du={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ma;function Fi(){}R(Fi,Va),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Ma=new Fi;function xn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new it(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ou}function Ou(){this.i=null,this.g="",this.h=!1}var Vu={},La={};function Fa(a,u,d){a.L=1,a.v=ji(pn(u)),a.m=d,a.P=!0,Nu(a,null)}function Nu(a,u){a.F=Date.now(),Ui(a),a.A=pn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Gu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Ou,a.g=fh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Nt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Nn[0]=C.toString()),C=Nn);for(var O=0;O<C.length;O++){var K=L(d,C[O],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ss(),x_(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const u=this.M;u&&gn(a)==3?u.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const at=gn(this.g);var u=this.g.Ba();const Mr=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||th(this.g)))){this.J||at!=4||u==7||(u==8||0>=Mr?Ss(3):Ss(2)),Ua(this);var d=this.g.Z();this.X=d;t:if(xu(this)){var m=th(this.g);a="";var C=m.length,O=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),ks(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(O&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,M_(this.i,this.u,this.A,this.l,this.R,at,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ze=this.g;if((ke=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ke)){var we=ke;break t}}we=null}if(d=we)Vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ba(this,d);else{this.o=!1,this.s=3,mt(12),fr(this),ks(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<K.length;)if($t=U_(this,K),$t==La){at==4&&(this.s=4,mt(14),d=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if($t==Vu){this.s=4,mt(15),Vr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Vr(this.i,this.l,$t,null),Ba(this,$t);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||K.length!=0||this.h.h||(this.s=1,mt(16),d=!1),this.o=this.o&&d,!d)Vr(this.i,this.l,K,"[Invalid Chunked Response]"),fr(this),ks(this);else if(0<K.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Ka(ot),ot.M=!0,mt(11))}}else Vr(this.i,this.l,K,null),Ba(this,K);at==4&&fr(this),this.o&&!this.J&&(at==4?lh(this.j,this):(this.o=!1,Ui(this)))}else ny(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),fr(this),ks(this)}}}catch{}finally{}};function xu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function U_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?La:(d=Number(u.substring(d,m)),isNaN(d)?Vu:(m+=1,m+d>u.length?La:(u=u.slice(m,m+d),a.C=m+d,u)))}xn.prototype.cancel=function(){this.J=!0,fr(this)};function Ui(a){a.S=Date.now()+a.I,Mu(a,a.I)}function Mu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ps(g(a.ba,a),u)}function Ua(a){a.B&&(l.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(L_(this.i,this.A),this.L!=2&&(Ss(),mt(17)),fr(this),this.s=2,ks(this)):Mu(this,this.S-a)};function ks(a){a.j.G==0||a.J||lh(a.j,a)}function fr(a){Ua(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Rs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ba(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||$a(d.h,a))){if(!a.K&&$a(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Gi(d),Ki(d);else break e;za(d),mt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ps(g(d.Za,d),6e3));if(1>=Uu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((a.K||d.g==a)&&Gi(d),!F(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let we=C[u];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const ot=we[3];ot!=null&&(d.la=ot,d.j.info("VER="+d.la));const at=we[4];at!=null&&(d.Aa=at,d.j.info("SVER="+d.Aa));const Mr=we[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(m=1.5*Mr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const $t=a.g;if($t){const Xi=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var O=m.h;O.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ja(O,O.h),O.h=null))}if(m.D){const Wa=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Wa&&(m.ya=Wa,Ve(m.I,m.D,Wa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=hh(m,m.J?m.ia:null,m.W),K.K){Bu(m.h,K);var ke=K,Ze=m.L;Ze&&(ke.I=Ze),ke.B&&(Ua(ke),Ui(ke)),m.g=K}else oh(m);0<d.i.length&&Wi(d)}else we[0]!="stop"&&we[0]!="close"||pr(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?pr(d,7):qa(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}Ss(4)}catch{}}var B_=class{constructor(a,u){this.g=a,this.map=u}};function Lu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Uu(a){return a.h?1:a.g?a.g.size:0}function $a(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ja(a,u){a.g?a.g.add(u):a.h=u}function Bu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Lu.prototype.cancel=function(){if(this.i=$u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $u(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function $_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function j_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function ju(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=j_(a),m=$_(a),C=m.length,O=0;O<C;O++)u.call(void 0,m[O],d&&d[O],a)}var Hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function H_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var O=a[d].substring(0,m);C=a[d].substring(m+1)}else O=a[d];u(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dr){this.h=a.h,Bi(this,a.j),this.o=a.o,this.g=a.g,$i(this,a.s),this.l=a.l;var u=a.i,d=new Vs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),qu(this,d),this.m=a.m}else a&&(u=String(a).match(Hu))?(this.h=!1,Bi(this,u[1]||"",!0),this.o=Ds(u[2]||""),this.g=Ds(u[3]||"",!0),$i(this,u[4]),this.l=Ds(u[5]||"",!0),qu(this,u[6]||"",!0),this.m=Ds(u[7]||"")):(this.h=!1,this.i=new Vs(null,this.h))}dr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Os(u,zu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Os(u,zu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Os(d,d.charAt(0)=="/"?K_:z_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Os(d,G_)),a.join("")};function pn(a){return new dr(a)}function Bi(a,u,d){a.j=d?Ds(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function $i(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function qu(a,u,d){u instanceof Vs?(a.i=u,Q_(a.i,a.h)):(d||(u=Os(u,W_)),a.i=new Vs(u,a.h))}function Ve(a,u,d){a.i.set(u,d)}function ji(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ds(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,q_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function q_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zu=/[#\/\?@]/g,z_=/[#\?:]/g,K_=/[#\?]/g,W_=/[#\?@]/g,G_=/#/g;function Vs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&H_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Vs.prototype,t.add=function(a,u){Mn(this),this.i=null,a=Nr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Ku(a,u){Mn(a),u=Nr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Wu(a,u){return Mn(a),u=Nr(a,u),a.g.has(u)}t.forEach=function(a,u){Mn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const C=a[m];for(let O=0;O<C.length;O++)d.push(u[m])}return d},t.V=function(a){Mn(this);let u=[];if(typeof a=="string")Wu(this,a)&&(u=u.concat(this.g.get(Nr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Mn(this),this.i=null,a=Nr(this,a),Wu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Gu(a,u,d){Ku(a,u),0<d.length&&(a.i=null,a.g.set(Nr(a,u),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const O=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var C=O;K[m]!==""&&(C+="="+encodeURIComponent(String(K[m]))),a.push(C)}}return this.i=a.join("&")};function Nr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Q_(a,u){u&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Ku(this,m),Gu(this,C,d))},a)),a.j=u}function X_(a,u){const d=new Cs;if(l.Image){const m=new Image;m.onload=_(Ln,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Ln,d,"TestLoadImage: error",!1,u,m),m.onabort=_(Ln,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Ln,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Y_(a,u){const d=new Cs,m=new AbortController,C=setTimeout(()=>{m.abort(),Ln(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(C),O.ok?Ln(d,"TestPingServer: ok",!0,u):Ln(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Ln(d,"TestPingServer: error",!1,u)})}function Ln(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function J_(){this.g=new xi}function Z_(a,u,d){const m=d||"";try{ju(a,function(C,O){let K=C;h(C)&&(K=Je(C)),u.push(m+O+"="+encodeURIComponent(K))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function Hi(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Hi,Va),Hi.prototype.g=function(){return new qi(this.l,this.j)},Hi.prototype.i=function(a){return function(){return a}}({});function qi(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(qi,se),t=qi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ns(this):xs(this),this.readyState==3&&Qu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ns(this))},t.Qa=function(a){this.g&&(this.response=a,Ns(this))},t.ga=function(){this.g&&Ns(this)};function Ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xu(a){let u="";return fe(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ha(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Xu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,u,d))}function Ue(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ue,se);var ey=/^https?$/i,ty=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ma.g(),this.v=this.o?Ru(this.o):Ru(Ma),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Yu(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ty,u,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of d)this.g.setRequestHeader(O,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Yu(this,O)}};function Yu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ju(a),zi(a)}function Ju(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zu(this):this.bb())},t.bb=function(){Zu(this)};function Zu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)Xe(a.Ea,0,a);else if(de(a,"readystatechange"),gn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var C=String(a.D).match(Hu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!ey.test(C?C.toLowerCase():"")}d=m}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var O=2<gn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ju(a)}}finally{zi(a)}}}}function zi(a,u){if(a.g){eh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||de(a,"ready");try{d.onreadystatechange=m}catch{}}}function eh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),xt(u)}};function th(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ny(a){const u={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var d=b(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[C]||[];u[C]=O,O.push(d)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function nh(a){this.Aa=0,this.i=[],this.j=new Cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,a),this.cb=Ms("retryDelaySeedMs",1e4,a),this.Wa=Ms("forwardChannelMaxRetries",2,a),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Lu(a&&a.concurrentRequestLimit),this.Da=new J_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){mt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=hh(this,null,this.W),Wi(this)};function qa(a){if(rh(a),a.G==3){var u=a.U++,d=pn(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Ls(a,d),u=new xn(a,a.j,u),u.L=2,u.v=ji(pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=fh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ui(u)}uh(a)}function Ki(a){a.g&&(Ka(a),a.g.cancel(),a.g=null)}function rh(a){Ki(a),a.u&&(l.clearTimeout(a.u),a.u=null),Gi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wi(a){if(!Fu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ve||Bt(),me||(ve(),me=!0),bt.add(u,a),a.B=0}}function ry(a,u){return Uu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ps(g(a.Ga,a,u),ch(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new xn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ih(this,C,u),d=pn(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Ls(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(Xu(O)))+"&"+u:this.m&&Ha(d,this.m,O)),ja(this.h,C),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),C.T=!0,Fa(C,d,null)):Fa(C,d,u),this.G=2}}else this.G==3&&(a?sh(this,a):this.i.length==0||Fu(this.h)||sh(this))};function sh(a,u){var d;u?d=u.l:d=a.U++;const m=pn(a.I);Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"AID",a.T),Ls(a,m),a.m&&a.o&&Ha(m,a.m,a.o),d=new xn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ih(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ja(a.h,d),Fa(d,m,u)}function Ls(a,u){a.H&&fe(a.H,function(d,m){Ve(u,m,d)}),a.l&&ju({},function(d,m){Ve(u,m,d)})}function ih(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const K=["count="+d];O==-1?0<d?(O=C[0].g,K.push("ofs="+O)):O=0:K.push("ofs="+O);let ke=!0;for(let Ze=0;Ze<d;Ze++){let we=C[Ze].g;const ot=C[Ze].map;if(we-=O,0>we)O=Math.max(0,C[Ze].g-100),ke=!1;else try{Z_(ot,K,"req"+we+"_")}catch{m&&m(ot)}}if(ke){m=K.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function oh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ve||Bt(),me||(ve(),me=!0),bt.add(u,a),a.v=0}}function za(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ps(g(a.Fa,a),ch(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ps(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Ki(this),ah(this))};function Ka(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ah(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=pn(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Ls(a,u),a.m&&a.o&&Ha(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ji(pn(u)),d.m=null,d.P=!0,Nu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ki(this),za(this),mt(19))};function Gi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lh(a,u){var d=null;if(a.g==u){Gi(a),Ka(a),a.g=null;var m=2}else if($a(a.h,u))d=u.D,Bu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=Mi(),de(m,new ku(m,d)),Wi(a)}else oh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&ry(a,u)||m==2&&za(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function ch(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function pr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new dr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bi(m,"https"),ji(m),C?X_(m.toString(),d):Y_(m.toString(),d)}else mt(2);a.G=0,a.l&&a.l.sa(u),uh(a),rh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function uh(a){if(a.G=0,a.ka=[],a.l){const u=$u(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function hh(a,u,d){var m=d instanceof dr?pn(d):new dr(d);if(m.g!="")u&&(m.g=u+"."+m.g),$i(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var O=new dr(null);m&&Bi(O,m),u&&(O.g=u),C&&$i(O,C),d&&(O.l=d),m=O}return d=a.D,u=a.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",a.la),Ls(a,m),m}function fh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ue(new Hi({eb:d})):new Ue(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dh(){}t=dh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qi(){}Qi.prototype.g=function(a,u){return new St(a,u)};function St(a,u){se.call(this),this.g=new nh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new xr(this)}R(St,se),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){qa(this.g)},St.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Je(a),a=d);u.i.push(new B_(u.Ya++,a)),u.G==3&&Wi(u)},St.prototype.N=function(){this.g.l=null,delete this.j,qa(this.g),delete this.g,St.aa.N.call(this)};function ph(a){Na.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}R(ph,Na);function gh(){xa.call(this),this.status=1}R(gh,xa);function xr(a){this.g=a}R(xr,dh),xr.prototype.ua=function(){de(this.g,"a")},xr.prototype.ta=function(a){de(this.g,new ph(a))},xr.prototype.sa=function(a){de(this.g,new gh)},xr.prototype.ra=function(){de(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,jg=function(){return new Qi},$g=function(){return Mi()},Bg=hr,Bl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,mo=Li,Du.COMPLETE="complete",Ug=Du,bu.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",se.prototype.listen=se.prototype.K,js=bu,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,Fg=Ue}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});const Tf="@firebase/firestore",If="4.7.17";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let vs="11.9.0";/**
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
 */const br=new bc("@firebase/firestore");function Br(){return br.logLevel}function Y(t,...e){if(br.logLevel<=_e.DEBUG){const n=e.map(Bc);br.debug(`Firestore (${vs}): ${t}`,...n)}}function Cn(t,...e){if(br.logLevel<=_e.ERROR){const n=e.map(Bc);br.error(`Firestore (${vs}): ${t}`,...n)}}function as(t,...e){if(br.logLevel<=_e.WARN){const n=e.map(Bc);br.warn(`Firestore (${vs}): ${t}`,...n)}}function Bc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Hg(t,r,n)}function Hg(t,e,n){let r=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Cn(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Hg(e,s,r)}function he(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class oA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aA{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new qg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new ct(e)}}class lA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new wf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function zg(){return new TextEncoder}/**
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
 */class Kg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function $l(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ge(r,s);{const i=zg(),o=fA(i.encode(Af(t,n)),i.encode(Af(e,n)));return o!==0?o:ge(r,s)}}n+=r>65535?2:1}return ge(t.length,e.length)}function Af(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function fA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ge(t[n],e[n]);return ge(t.length,e.length)}function ls(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Rf=-62135596800,bf=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*bf);return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rf)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bf}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Rf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ke(0,0))}static max(){return new ue(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Sf="__name__";class Yt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Yt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=Yt.isNumericId(e),s=Yt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Yt.extractNumericId(e).compare(Yt.extractNumericId(n)):$l(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xn.fromString(e.substring(4,e.length-2))}}class Ne extends Yt{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const dA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Yt{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return dA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sf}static keyField(){return new nt([Sf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ne.fromString(e))}static fromName(e){return new re(Ne.fromString(e).popFirst(5))}static empty(){return new re(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ne(e.slice()))}}/**
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
 */const mi=-1;function pA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new nr(s,re.empty(),e)}function gA(t){return new nr(t.readTime,t.key,mi)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(ue.min(),re.empty(),mi)}static max(){return new nr(ue.max(),re.empty(),mi)}}function mA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const _A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Es(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==_A)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ts(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}pa.le=-1;/**
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
 */const $c=-1;function ga(t){return t==null}function Lo(t){return t===0&&1/t==-1/0}function EA(t){return typeof t=="number"&&Number.isInteger(t)&&!Lo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Wg="";function TA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pf(e)),e=IA(t.get(n),e);return Pf(e)}function IA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Wg:n+="";break;default:n+=i}}return n}function Pf(t){return t+Wg+""}/**
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
 */function Cf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new kt([])}unionWith(e){let n=new We(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qg("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const wA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=wA.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */const Xg="server_timestamp",Yg="__type__",Jg="__previous_value__",Zg="__local_write_time__";function jc(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yg])===null||n===void 0?void 0:n.stringValue)===Xg}function ma(t){const e=t.mapValue.fields[Jg];return jc(e)?ma(e):e}function _i(t){const e=rr(t.mapValue.fields[Zg].timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class AA{constructor(e,n,r,s,i,o,l,c,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Fo="(default)";class yi{constructor(e,n){this.projectId=e,this.database=n||Fo}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database===Fo}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const em="__type__",RA="__max__",ro={mapValue:{}},tm="__vector__",Uo="value";function ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jc(t)?4:SA(t)?9007199254740991:bA(t)?10:11:ie(28295,{value:t})}function cn(t,e){if(t===e)return!0;const n=ir(t);if(n!==ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rr(s.timestampValue),l=rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$e(s.doubleValue),l=$e(i.doubleValue);return o===l?Lo(o)===Lo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cf(o)!==Cf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!cn(o[c],l[c])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function vi(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=ir(t),r=ir(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=$e(i.integerValue||i.doubleValue),c=$e(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Df(t.timestampValue,e.timestampValue);case 4:return Df(_i(t),_i(e));case 5:return $l(t.stringValue,e.stringValue);case 6:return function(i,o){const l=sr(i),c=sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ge(l[h],c[h]);if(f!==0)return f}return ge(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ge($e(i.latitude),$e(o.latitude));return l!==0?l:ge($e(i.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Of(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,f;const p=i.fields||{},g=o.fields||{},_=(l=p[Uo])===null||l===void 0?void 0:l.arrayValue,R=(c=g[Uo])===null||c===void 0?void 0:c.arrayValue,k=ge(((h=_?.values)===null||h===void 0?void 0:h.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Of(_,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ro.mapValue&&o===ro.mapValue)return 0;if(i===ro.mapValue)return 1;if(o===ro.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=$l(c[p],f[p]);if(g!==0)return g;const _=cs(l[c[p]],h[f[p]]);if(_!==0)return _}return ge(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{Pe:n})}}function Df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=rr(t),r=rr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Of(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=cs(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function us(t){return jl(t)}function jl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=jl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${jl(n.fields[o])}`;return s+"}"}(t.mapValue):ie(61005,{value:t})}function _o(t){switch(ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ma(t);return e?16+_o(e):16;case 5:return 2*t.stringValue.length;case 6:return sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_o(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return cr(r.fields,(i,o)=>{s+=i.length+_o(o)}),s}(t.mapValue);default:throw ie(13486,{value:t})}}function Hl(t){return!!t&&"integerValue"in t}function Hc(t){return!!t&&"arrayValue"in t}function Vf(t){return!!t&&"nullValue"in t}function Nf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function bA(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[em])===null||n===void 0?void 0:n.stringValue)===tm}function ni(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ni(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ni(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RA}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ni(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ni(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(ni(this.value))}}function nm(t){const e=[];return cr(t.fields,(n,r)=>{const s=new nt([n]);if(yo(r)){const i=nm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kt(e)}/**
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
 */class ht{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,ue.min(),ue.min(),ue.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,ue.min(),ue.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ue.min(),ue.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bo{constructor(e,n){this.position=e,this.inclusive=n}}function xf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function PA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class rm{}class ze extends rm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kA(e,n,r):n==="array-contains"?new VA(e,r):n==="in"?new NA(e,r):n==="not-in"?new xA(e,r):n==="array-contains-any"?new MA(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DA(e,r):new OA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(cs(n,this.value)):n!==null&&ir(this.value)===ir(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends rm{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new un(e,n)}matches(e){return sm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function sm(t){return t.op==="and"}function im(t){return CA(t)&&sm(t)}function CA(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function ql(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+us(t.value);if(im(t))return t.filters.map(e=>ql(e)).join(",");{const e=t.filters.map(n=>ql(n)).join(",");return`${t.op}(${e})`}}function om(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&om(o,s.filters[l]),!0):!1}(t,e):void ie(19439)}function am(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(am).join(" ,")+"}"}(t):"Filter"}class kA extends ze{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class DA extends ze{constructor(e,n){super(e,"in",n),this.keys=lm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OA extends ze{constructor(e,n){super(e,"not-in",n),this.keys=lm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class VA extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hc(n)&&vi(n.arrayValue,this.value)}}class NA extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vi(this.value.arrayValue,n)}}class xA extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!vi(this.value.arrayValue,n)}}class MA extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vi(this.value.arrayValue,r))}}/**
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
 */class LA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Lf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LA(t,e,n,r,s,i,o)}function qc(t){const e=he(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ql(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.Ie=n}return e.Ie}function zc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!om(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function zl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _a{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function FA(t,e,n,r,s,i,o,l){return new _a(t,e,n,r,s,i,o,l)}function Kc(t){return new _a(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UA(t){return t.collectionGroup!==null}function ri(t){const e=he(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new $o(i,r))}),n.has(nt.keyField().canonicalString())||e.Ee.push(new $o(nt.keyField(),r))}return e.Ee}function sn(t){const e=he(t);return e.de||(e.de=BA(e,ri(t))),e.de}function BA(t,e){if(t.limitType==="F")return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $o(s.field,i)});const n=t.endAt?new Bo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bo(t.startAt.position,t.startAt.inclusive):null;return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kl(t,e,n){return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ya(t,e){return zc(sn(t),sn(e))&&t.limitType===e.limitType}function cm(t){return`${qc(sn(t))}|lt:${t.limitType}`}function $r(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>am(s)).join(", ")}]`),ga(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>us(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>us(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function va(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=xf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ri(r),s)||r.endAt&&!function(o,l,c){const h=xf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ri(r),s))}(t,e)}function $A(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function um(t){return(e,n)=>{let r=!1;for(const s of ri(t)){const i=jA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jA(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?cs(c,h):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
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
 */class Dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Gg(this.inner)}size(){return this.innerSize}}/**
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
 */const HA=new Fe(re.comparator);function kn(){return HA}const hm=new Fe(re.comparator);function Hs(...t){let e=hm;for(const n of t)e=e.insert(n.key,n);return e}function fm(t){let e=hm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Er(){return si()}function dm(){return si()}function si(){return new Dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const qA=new Fe(re.comparator),zA=new We(re.comparator);function ye(...t){let e=zA;for(const n of t)e=e.add(n);return e}const KA=new We(ge);function WA(){return KA}/**
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
 */function Wc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lo(e)?"-0":e}}function pm(t){return{integerValue:""+t}}function GA(t,e){return EA(e)?pm(e):Wc(t,e)}/**
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
 */class Ea{constructor(){this._=void 0}}function QA(t,e,n){return t instanceof jo?function(s,i){const o={fields:{[Yg]:{stringValue:Xg},[Zg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&jc(i)&&(i=ma(i)),i&&(o.fields[Jg]=i),{mapValue:o}}(n,e):t instanceof hs?mm(t,e):t instanceof fs?_m(t,e):function(s,i){const o=gm(s,i),l=Uf(o)+Uf(s.Re);return Hl(o)&&Hl(s.Re)?pm(l):Wc(s.serializer,l)}(t,e)}function XA(t,e,n){return t instanceof hs?mm(t,e):t instanceof fs?_m(t,e):n}function gm(t,e){return t instanceof Ho?function(r){return Hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class jo extends Ea{}class hs extends Ea{constructor(e){super(),this.elements=e}}function mm(t,e){const n=ym(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class fs extends Ea{constructor(e){super(),this.elements=e}}function _m(t,e){let n=ym(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class Ho extends Ea{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Uf(t){return $e(t.integerValue||t.doubleValue)}function ym(t){return Hc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vm{constructor(e,n){this.field=e,this.transform=n}}function YA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof hs&&s instanceof hs||r instanceof fs&&s instanceof fs?ls(r.elements,s.elements,cn):r instanceof Ho&&s instanceof Ho?cn(r.Re,s.Re):r instanceof jo&&s instanceof jo}(t.transform,e.transform)}class JA{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ta{}function Em(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gc(t.key,Kt.none()):new ki(t.key,t.data,Kt.none());{const n=t.data,r=Rt.empty();let s=new We(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(t.key,r,new kt(s.toArray()),Kt.none())}}function ZA(t,e,n){t instanceof ki?function(s,i,o){const l=s.value.clone(),c=$f(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(s,i,o){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=$f(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Tm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ii(t,e,n,r){return t instanceof ki?function(i,o,l,c){if(!vo(i.precondition,o))return l;const h=i.value.clone(),f=jf(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(i,o,l,c){if(!vo(i.precondition,o))return l;const h=jf(i.fieldTransforms,c,o),f=o.data;return f.setAll(Tm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function e0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gm(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function Bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ls(r,s,(i,o)=>YA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ki extends Ta{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends Ta{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $f(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,XA(o,l,n[s]))}return r}function jf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QA(i,o,e))}return r}class Gc extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t0 extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class n0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Em(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>Bf(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>Bf(n,r))}}class Qc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return qA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qc(e,n,r,s)}}/**
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
 */class r0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class s0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Te;function i0(t){switch(t){case U.OK:return ie(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function Im(t){if(t===void 0)return Cn("GRPC error has no .code"),U.UNKNOWN;switch(t){case He.OK:return U.OK;case He.CANCELLED:return U.CANCELLED;case He.UNKNOWN:return U.UNKNOWN;case He.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case He.INTERNAL:return U.INTERNAL;case He.UNAVAILABLE:return U.UNAVAILABLE;case He.UNAUTHENTICATED:return U.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case He.NOT_FOUND:return U.NOT_FOUND;case He.ALREADY_EXISTS:return U.ALREADY_EXISTS;case He.PERMISSION_DENIED:return U.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case He.ABORTED:return U.ABORTED;case He.OUT_OF_RANGE:return U.OUT_OF_RANGE;case He.UNIMPLEMENTED:return U.UNIMPLEMENTED;case He.DATA_LOSS:return U.DATA_LOSS;default:return ie(39323,{code:t})}}(Te=He||(He={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const o0=new Xn([4294967295,4294967295],0);function Hf(t){const e=zg().encode(t),n=new Lg;return n.update(e),new Uint8Array(n.digest())}function qf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xn([n,r],0),new Xn([s,i],0)]}class Xc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Xn.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Xn.fromNumber(r)));return s.compare(o0)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Hf(e),[r,s]=qf(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Hf(e),[r,s]=qf(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ia{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ia(ue.min(),s,new Fe(ge),kn(),ye())}}class Di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Di(r,n,ye(),ye(),ye())}}/**
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
 */class Eo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class wm{constructor(e,n){this.targetId=e,this.Ce=n}}class Am{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zf{constructor(){this.Fe=0,this.Me=Kf(),this.xe=st.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ye(),n=ye(),r=ye();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}}),new Di(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Kf()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Pe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class a0{constructor(e){this.ze=e,this.je=new Map,this.He=kn(),this.Je=so(),this.Ye=so(),this.Ze=new Fe(ge)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(zl(i))if(r===0){const o=new re(i.path);this.tt(n,o,ht.newNoDocument(o,ue.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=sr(r).toUint8Array()}catch(c){if(c instanceof Qg)return as("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Xc(o,s,i)}catch(c){return as(c instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&zl(l.target)){const c=new re(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ht.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=ye();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ia(e,n,this.Ze,this.He,r);return this.He=kn(),this.Je=so(),this.Ye=so(),this.Ze=new Fe(ge),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new zf,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new We(ge),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new We(ge),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new zf),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function so(){return new Fe(re.comparator)}function Kf(){return new Fe(re.comparator)}const l0={asc:"ASCENDING",desc:"DESCENDING"},c0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},u0={and:"AND",or:"OR"};class h0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wl(t,e){return t.useProto3Json||ga(e)?e:{value:e}}function qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function f0(t,e){return qo(t,e.toTimestamp())}function on(t){return Pe(!!t,49232),ue.fromTimestamp(function(n){const r=rr(n);return new Ke(r.seconds,r.nanos)}(t))}function Yc(t,e){return Gl(t,e).canonicalString()}function Gl(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bm(t){const e=Ne.fromString(t);return Pe(Dm(e),10190,{key:e.toString()}),e}function Ql(t,e){return Yc(t.databaseId,e.path)}function fl(t,e){const n=bm(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Pm(n))}function Sm(t,e){return Yc(t.databaseId,e)}function d0(t){const e=bm(t);return e.length===4?Ne.emptyPath():Pm(e)}function Xl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pm(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wf(t,e,n){return{name:Ql(t,e),fields:n.value.mapValue.fields}}function p0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),st.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?U.UNKNOWN:Im(h.code);return new ee(f,h.message||"")}(o);n=new Am(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fl(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):ue.min(),l=new Rt({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Eo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fl(t,r.document),i=r.readTime?on(r.readTime):ue.min(),o=ht.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Eo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fl(t,r.document),i=r.removedTargetIds||[];n=new Eo([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new s0(s,i),l=r.targetId;n=new wm(l,o)}}return n}function g0(t,e){let n;if(e instanceof ki)n={update:Wf(t,e.key,e.value)};else if(e instanceof Gc)n={delete:Ql(t,e.key)};else if(e instanceof ur)n={update:Wf(t,e.key,e.data),updateMask:A0(e.fieldMask)};else{if(!(e instanceof t0))return ie(16599,{ft:e.type});n={verify:Ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:f0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)}(t,e.precondition)),n}function m0(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?on(s.updateTime):on(i);return o.isEqual(ue.min())&&(o=on(i)),new JA(o,s.transformResults||[])}(n,e))):[]}function _0(t,e){return{documents:[Sm(t,e.path)]}}function y0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sm(t,s);const i=function(h){if(h.length!==0)return km(un.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:jr(g.field),direction:T0(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:s}}function v0(t){let e=d0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Cm(p);return g instanceof un&&im(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new $o(Hr(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ga(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new Bo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new Bo(_,g)}(n.endAt)),FA(e,s,o,i,l,"F",c,h)}function E0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hr(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hr(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hr(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hr(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Hr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>Cm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function T0(t){return l0[t]}function I0(t){return c0[t]}function w0(t){return u0[t]}function jr(t){return{fieldPath:t.canonicalString()}}function Hr(t){return nt.fromServerFormat(t.fieldPath)}function km(t){return t instanceof ze?function(n){if(n.op==="=="){if(Nf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NAN"}};if(Vf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NAN"}};if(Vf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(n.field),op:I0(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>km(s));return r.length===1?r[0]:{compositeFilter:{op:w0(n.op),filters:r}}}(t):ie(54877,{filter:t})}function A0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class R0{constructor(e){this.wt=e}}function b0(t){const e=v0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
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
 */class S0{constructor(){this.Cn=new P0}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(nr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class P0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new We(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Ne.comparator)).toArray()}}/**
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
 */const Gf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Om=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Om,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
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
 */class ds{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ds(0)}static lr(){return new ds(-1)}}/**
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
 */const Qf="LruGarbageCollector",C0=1048576;function Xf([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class k0{constructor(e){this.Er=e,this.buffer=new We(Xf),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class D0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Y(Qf,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ts(n)?Y(Qf,"Ignoring IndexedDB error during garbage collection: ",n):await Es(n)}await this.mr(3e5)})}}class O0{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(pa.le);const r=new k0(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Gf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gf):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Br()<=_e.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function V0(t,e){return new O0(t,e)}/**
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
 */class N0{constructor(){this.changes=new Dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class M0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ii(r.mutation,s,kt.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Er();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=kn();const o=si(),l=function(){return si()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ur)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ii(f.mutation,h,f.mutation.getFieldMask(),Ke.now())):o.set(h.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new x0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=si();let s=new Fe((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||kt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=dm();f.forEach(g=>{if(!i.has(g)){const _=Em(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Er());let l=mi,c=i;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(f=>({batchId:l,changes:fm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,g){return new _a(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ht.newInvalidDocument(f)))});let l=Hs();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ii(f.mutation,h,kt.empty(),Ke.now()),va(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class L0{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:b0(s.bundledQuery),readTime:on(s.readTime)}}(n)),M.resolve()}}/**
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
 */class F0{constructor(){this.overlays=new Fe(re.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Er();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Er(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Er(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new r0(n,r));let i=this.Qr.get(n);i===void 0&&(i=ye(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class U0{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Jc{constructor(){this.$r=new We(Ge.Ur),this.Kr=new We(Ge.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Ge(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new re(new Ne([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new re(new Ne([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ye();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return re.comparator(e.key,n.key)||ge(e.Zr,n.Zr)}static Wr(e,n){return ge(e.Zr,n.Zr)||re.comparator(e.key,n.key)}}/**
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
 */class B0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new We(Ge.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n0(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?$c:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ge);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new re(i),0);let l=new We(ge);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},o),M.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $0{constructor(e){this.ii=e,this.docs=function(){return new Fe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||mA(gA(f),r)<=0||(s.has(f.key)||va(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new j0(this)}getSize(e){return M.resolve(this.size)}}class j0 extends N0{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class H0{constructor(e){this.persistence=e,this.oi=new Dr(n=>qc(n),zc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this._i=0,this.ai=new Jc,this.targetCount=0,this.ui=ds.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new ds(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
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
 */class Vm{constructor(e,n){this.ci={},this.overlays={},this.li=new pa(0),this.hi=!1,this.hi=!0,this.Pi=new U0,this.referenceDelegate=e(this),this.Ti=new H0(this),this.indexManager=new S0,this.remoteDocumentCache=function(s){return new $0(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new R0(n),this.Ei=new L0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new B0(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new q0(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class q0 extends yA{constructor(e){super(),this.currentSequenceNumber=e}}class Zc{constructor(e){this.persistence=e,this.Vi=new Jc,this.mi=null}static fi(e){return new Zc(e)}get gi(){if(this.mi)return this.mi;throw ie(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const s=re.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class zo{constructor(e,n){this.persistence=e,this.yi=new Dr(r=>TA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=V0(this,n)}static fi(e,n){return new zo(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_o(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eu(e,n.fromCache,r,s)}}/**
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
 */class z0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class K0{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return UE()?8:vA(pt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new z0;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Br()<=_e.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",$r(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(Br()<=_e.DEBUG&&Y("QueryEngine","Query:",$r(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Br()<=_e.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",$r(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):M.resolve())}ws(e,n){if(Ff(n))return M.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kl(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.vs(n,l);return this.Cs(n,h,o,c.readTime)?this.ws(e,Kl(n,null,"F")):this.Fs(e,h,n,c)}))})))}bs(e,n,r,s){return Ff(n)||s.isEqual(ue.min())?M.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(Br()<=_e.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$r(n)),this.Fs(e,o,n,pA(s,mi)).next(l=>l))})}vs(e,n){let r=new We(um(e));return n.forEach((s,i)=>{va(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Br()<=_e.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",$r(n)),this.ys.getDocumentsMatchingQuery(e,n,nr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const tu="LocalStore",W0=3e8;class G0{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Fe(ge),this.Os=new Dr(i=>qc(i),zc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M0(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function Q0(t,e,n,r){return new G0(t,e,n,r)}async function Nm(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:l}))})})}function X0(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let _=M.resolve();return g.forEach(R=>{_=_.next(()=>f.getEntry(c,R)).next(k=>{const D=h.docVersions.get(R);Pe(D!==null,48541),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function xm(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function Y0(t,e){const n=he(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(st.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(k,D,B){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=W0?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,_,f)&&l.push(n.Ti.updateTargetData(i,_))});let c=kn(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(J0(i,o,e.documentUpdates).next(f=>{c=f.qs,h=f.Qs})),!r.isEqual(ue.min())){const f=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.xs=s,i))}function J0(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y(tu,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function Z0(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=$c),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eR(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Yl(t,e,n){const r=he(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ts(o))throw o;Y(tu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Yf(t,e,n){const r=he(t);let s=ue.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=he(c),g=p.Os.get(f);return g!==void 0?M.resolve(p.xs.get(g)):p.Ti.getTargetData(h,f)}(r,o,sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ye())).next(l=>(tR(r,$A(e),l),{documents:l,$s:i})))}function tR(t,e,n){let r=t.Ns.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Jf{constructor(){this.activeTargetIds=WA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nR{constructor(){this.xo=new Jf,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Jf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rR{No(e){}shutdown(){}}/**
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
 */const Zf="ConnectivityMonitor";class ed{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Y(Zf,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Y(Zf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let io=null;function Jl(){return io===null?io=function(){return 268435456+Math.round(2147483648*Math.random())}():io++,"0x"+io.toString(16)}/**
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
 */const dl="RestConnection",sR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iR{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Fo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Jl(),l=this.jo(e,n.toUriEncodedString());Y(dl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(l),f=Cr(h);return this.Jo(e,l,c,r,f).then(p=>(Y(dl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw as(dl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=sR[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class oR{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const lt="WebChannelConnection";class aR extends iR{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Jl();return new Promise((l,c)=>{const h=new Fg;h.setWithCredentials(!0),h.listenOnce(Ug.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case mo.NO_ERROR:const p=h.getResponseJson();Y(lt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case mo.TIMEOUT:Y(lt,`RPC '${e}' ${o} timed out`),c(new ee(U.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const g=h.getStatus();if(Y(lt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_?.error;if(R&&R.status&&R.message){const k=function(B){const F=B.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(F)>=0?F:U.UNKNOWN}(R.status);c(new ee(k,R.message))}else c(new ee(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new ee(U.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{h_:e,streamId:o,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{Y(lt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Y(lt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}I_(e,n,r){const s=Jl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jg(),l=$g(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Y(lt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.E_(p);let g=!1,_=!1;const R=new oR({Zo:D=>{_?Y(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(Y(lt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Y(lt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Xo:()=>p.close()}),k=(D,B,F)=>{D.listen(B,j=>{try{F(j)}catch(H){setTimeout(()=>{throw H},0)}})};return k(p,js.EventType.OPEN,()=>{_||(Y(lt,`RPC '${e}' stream ${s} transport opened.`),R.__())}),k(p,js.EventType.CLOSE,()=>{_||(_=!0,Y(lt,`RPC '${e}' stream ${s} transport closed`),R.u_(),this.d_(p))}),k(p,js.EventType.ERROR,D=>{_||(_=!0,as(lt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),R.u_(new ee(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,js.EventType.MESSAGE,D=>{var B;if(!_){const F=D.data[0];Pe(!!F,16349);const j=F,H=j?.error||((B=j[0])===null||B===void 0?void 0:B.error);if(H){Y(lt,`RPC '${e}' stream ${s} received error:`,H);const ce=H.status;let fe=function(I){const A=He[I];if(A!==void 0)return Im(A)}(ce),w=H.message;fe===void 0&&(fe=U.INTERNAL,w="Unknown error status: "+ce+" with message "+H.message),_=!0,R.u_(new ee(fe,w)),p.close()}else Y(lt,`RPC '${e}' stream ${s} received:`,F),R.c_(F)}}),k(l,Bg.STAT_EVENT,D=>{D.stat===Bl.PROXY?Y(lt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Bl.NOPROXY&&Y(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function pl(){return typeof document<"u"?document:null}/**
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
 */function wa(t){return new h0(t,!0)}/**
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
 */class Mm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const td="PersistentStream";class Lm{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Mm(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new ee(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return Y(td,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(Y(td,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lR extends Lm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=p0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?on(o.readTime):ue.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Xl(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=zl(c)?{documents:_0(i,c)}:{query:y0(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Rm(i,o.resumeToken);const h=Wl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=qo(i,o.snapshotVersion.toTimestamp());const h=Wl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=E0(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Xl(this.serializer),n.removeTarget=e,this.Q_(n)}}class cR extends Lm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=m0(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Xl(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>g0(this.serializer,r))};this.Q_(n)}}/**
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
 */class uR{}class hR extends uR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Gl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(U.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Gl(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(U.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class fR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Cn(n),this.ua=!1):Y("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Sr="RemoteStore";class dR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{Or(this)&&(Y(Sr,"Restarting streams for network reachability change."),await async function(c){const h=he(c);h.da.add(4),await Oi(h),h.Va.set("Unknown"),h.da.delete(4),await Aa(h)}(this))})}),this.Va=new fR(r,s)}}async function Aa(t){if(Or(t))for(const e of t.Aa)await e(!0)}async function Oi(t){for(const e of t.Aa)await e(!1)}function Fm(t,e){const n=he(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),iu(n)?su(n):Is(n).N_()&&ru(n,e))}function nu(t,e){const n=he(t),r=Is(n);n.Ea.delete(e),r.N_()&&Um(n,e),n.Ea.size===0&&(r.N_()?r.k_():Or(n)&&n.Va.set("Unknown"))}function ru(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).Z_(e)}function Um(t,e){t.ma.Ke(e),Is(t).X_(e)}function su(t){t.ma=new a0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.Va.ca()}function iu(t){return Or(t)&&!Is(t).O_()&&t.Ea.size>0}function Or(t){return he(t).da.size===0}function Bm(t){t.ma=void 0}async function pR(t){t.Va.set("Online")}async function gR(t){t.Ea.forEach((e,n)=>{ru(t,e)})}async function mR(t,e){Bm(t),iu(t)?(t.Va.Pa(e),su(t)):t.Va.set("Unknown")}async function _R(t,e,n){if(t.Va.set("Online"),e instanceof Am&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.ma.removeTarget(l))}(t,e)}catch(r){Y(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ko(t,r)}else if(e instanceof Eo?t.ma.Xe(e):e instanceof wm?t.ma.ot(e):t.ma.nt(e),!n.isEqual(ue.min()))try{const r=await xm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ma.It(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),Um(i,c);const p=new Kn(f.target,c,h,f.sequenceNumber);ru(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y(Sr,"Failed to raise snapshot:",r),await Ko(t,r)}}async function Ko(t,e,n){if(!Ts(e))throw e;t.da.add(1),await Oi(t),t.Va.set("Offline"),n||(n=()=>xm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y(Sr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Aa(t)})}function $m(t,e){return e().catch(n=>Ko(t,n,e))}async function Ra(t){const e=he(t),n=or(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:$c;for(;yR(e);)try{const s=await Z0(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,vR(e,s)}catch(s){await Ko(e,s)}jm(e)&&Hm(e)}function yR(t){return Or(t)&&t.Ia.length<10}function vR(t,e){t.Ia.push(e);const n=or(t);n.N_()&&n.ea&&n.ta(e.mutations)}function jm(t){return Or(t)&&!or(t).O_()&&t.Ia.length>0}function Hm(t){or(t).start()}async function ER(t){or(t).ia()}async function TR(t){const e=or(t);for(const n of t.Ia)e.ta(n.mutations)}async function IR(t,e,n){const r=t.Ia.shift(),s=Qc.from(r,e,n);await $m(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ra(t)}async function wR(t,e){e&&or(t).ea&&await async function(r,s){if(function(o){return i0(o)&&o!==U.ABORTED}(s.code)){const i=r.Ia.shift();or(r).L_(),await $m(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ra(r)}}(t,e),jm(t)&&Hm(t)}async function nd(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Y(Sr,"RemoteStore received new credentials");const r=Or(n);n.da.add(3),await Oi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Aa(n)}async function AR(t,e){const n=he(t);e?(n.da.delete(2),await Aa(n)):e||(n.da.add(2),await Oi(n),n.Va.set("Unknown"))}function Is(t){return t.fa||(t.fa=function(n,r,s){const i=he(n);return i.oa(),new lR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:pR.bind(null,t),n_:gR.bind(null,t),i_:mR.bind(null,t),Y_:_R.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),iu(t)?su(t):t.Va.set("Unknown")):(await t.fa.stop(),Bm(t))})),t.fa}function or(t){return t.ga||(t.ga=function(n,r,s){const i=he(n);return i.oa(),new cR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:ER.bind(null,t),i_:wR.bind(null,t),na:TR.bind(null,t),ra:IR.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await Ra(t)):(await t.ga.stop(),t.Ia.length>0&&(Y(Sr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class ou{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ou(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),Ts(t))return new ee(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ns{static emptySet(e){return new ns(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class rd{constructor(){this.pa=new Fe(re.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,n,ns.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RR{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class bR{constructor(){this.queries=sd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=sd(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new ee(U.ABORTED,"Firestore shutting down"))}}function sd(){return new Dr(t=>cm(t),ya)}async function qm(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new RR,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=au(o,`Initialization of query '${$r(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&lu(n)}async function zm(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SR(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Ma(s)&&(r=!0);o.ba=s}}r&&lu(n)}function PR(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function lu(t){t.Ca.forEach(e=>{e.next()})}var Zl,id;(id=Zl||(Zl={})).xa="default",id.Cache="cache";class Km{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Zl.Cache}}/**
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
 */class Wm{constructor(e){this.key=e}}class Gm{constructor(e){this.key=e}}class CR{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ye(),this.mutatedKeys=ye(),this.Za=um(e),this.Xa=new ns(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new rd,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=va(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;g&&_?g.data.isEqual(_.data)?R!==k&&(r.track({type:3,doc:_}),D=!0):this.ru(g,_)||(r.track({type:2,doc:_}),D=!0,(c&&this.Za(_,c)>0||h&&this.Za(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),D=!0):g&&!_&&(r.track({type:1,doc:g}),D=!0,(c||h)&&(l=!0)),D&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:l,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,p)=>function(_,R){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:D})}};return k(_)-k(R)}(f.type,p.type)||this.Za(f.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Ja;return this.Ja=c,o.length!==0||h?{snapshot:new ps(this.query,e.Xa,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new rd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=ye(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Gm(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Wm(r))}),n}au(e){this.Ha=e.$s,this.Ya=ye();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return ps.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const cu="SyncEngine";class kR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DR{constructor(e){this.key=e,this.cu=!1}}class OR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Dr(l=>cm(l),ya),this.Pu=new Map,this.Tu=new Set,this.Iu=new Fe(re.comparator),this.Eu=new Map,this.du=new Jc,this.Au={},this.Ru=new Map,this.Vu=ds.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function VR(t,e,n=!0){const r=e_(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Qm(r,e,n,!0),s}async function NR(t,e){const n=e_(t);await Qm(n,e,!0,!1)}async function Qm(t,e,n,r){const s=await eR(t.localStore,sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await xR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Fm(t.remoteStore,s),l}async function xR(t,e,n,r,s){t.fu=(p,g,_)=>async function(k,D,B,F){let j=D.view.tu(B);j.Cs&&(j=await Yf(k.localStore,D.query,!1).then(({documents:w})=>D.view.tu(w,j)));const H=F&&F.targetChanges.get(D.targetId),ce=F&&F.targetMismatches.get(D.targetId)!=null,fe=D.view.applyChanges(j,k.isPrimaryClient,H,ce);return ad(k,D.targetId,fe.ou),fe.snapshot}(t,p,g,_);const i=await Yf(t.localStore,e,!0),o=new CR(e,i.$s),l=o.tu(i.documents),c=Di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);ad(t,n,h.ou);const f=new kR(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),h.snapshot}async function MR(t,e,n){const r=he(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!ya(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&nu(r.remoteStore,s.targetId),ec(r,s.targetId)}).catch(Es)):(ec(r,s.targetId),await Yl(r.localStore,s.targetId,!0))}async function LR(t,e){const n=he(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nu(n.remoteStore,r.targetId))}async function FR(t,e,n){const r=zR(t);try{const s=await function(o,l){const c=he(o),h=Ke.now(),f=l.reduce((_,R)=>_.add(R.key),ye());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=kn(),k=ye();return c.Bs.getEntries(_,f).next(D=>{R=D,R.forEach((B,F)=>{F.isValidDocument()||(k=k.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,R)).next(D=>{p=D;const B=[];for(const F of l){const j=e0(F,p.get(F.key).overlayedDocument);j!=null&&B.push(new ur(F.key,j,nm(j.value.mapValue),Kt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,B,l)}).next(D=>{g=D;const B=D.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(_,D.batchId,B)})}).then(()=>({batchId:g.batchId,changes:fm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Au[o.currentUser.toKey()];h||(h=new Fe(ge)),h=h.insert(l,c),o.Au[o.currentUser.toKey()]=h}(r,s.batchId,n),await Vi(r,s.changes),await Ra(r.remoteStore)}catch(s){const i=au(s,"Failed to persist write");n.reject(i)}}async function Xm(t,e){const n=he(t);try{const r=await Y0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?Pe(o.cu,14607):s.removedDocuments.size>0&&(Pe(o.cu,42227),o.cu=!1))}),await Vi(n,r,e)}catch(r){await Es(r)}}function od(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const l=o.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.Sa)g.Fa(l)&&(h=!0)}),h&&lu(c)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UR(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Fe(re.comparator);o=o.insert(i,ht.newNoDocument(i,ue.min()));const l=ye().add(i),c=new Ia(ue.min(),new Map,new Fe(ge),o,l);await Xm(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(e),uu(r)}else await Yl(r.localStore,e,!1).then(()=>ec(r,e,n)).catch(Es)}async function BR(t,e){const n=he(t),r=e.batch.batchId;try{const s=await X0(n.localStore,e);Jm(n,r,null),Ym(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(n,s)}catch(s){await Es(s)}}async function $R(t,e,n){const r=he(t);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Pe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Jm(r,e,n),Ym(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vi(r,s)}catch(s){await Es(s)}}function Ym(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function Jm(t,e,n){const r=he(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function ec(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||Zm(t,r)})}function Zm(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(nu(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),uu(t))}function ad(t,e,n){for(const r of n)r instanceof Wm?(t.du.addReference(r.key,e),jR(t,r)):r instanceof Gm?(Y(cu,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||Zm(t,r.key)):ie(19791,{pu:r})}function jR(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(Y(cu,"New document in limbo: "+n),t.Tu.add(r),uu(t))}function uu(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new re(Ne.fromString(e)),r=t.Vu.next();t.Eu.set(r,new DR(n)),t.Iu=t.Iu.insert(n,r),Fm(t.remoteStore,new Kn(sn(Kc(n.path)),r,"TargetPurposeLimboResolution",pa.le))}}async function Vi(t,e,n){const r=he(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{o.push(r.fu(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n?.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=eu.Rs(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(c,h){const f=he(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.ds,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>M.forEach(g.As,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ts(p))throw p;Y(tu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.xs.get(g),R=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(R);f.xs=f.xs.insert(g,k)}}}(r.localStore,i))}async function HR(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Y(cu,"User change. New user:",e.toKey());const r=await Nm(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new ee(U.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(n,r.ks)}}function qR(t,e){const n=he(t),r=n.Eu.get(e);if(r&&r.cu)return ye().add(r.key);{let s=ye();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const l=n.hu.get(o);s=s.unionWith(l.view.eu)}return s}}function e_(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UR.bind(null,e),e.lu.Y_=SR.bind(null,e.eventManager),e.lu.gu=PR.bind(null,e.eventManager),e}function zR(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$R.bind(null,e),e}class Wo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return Q0(this.persistence,new K0,e.initialUser,this.serializer)}Su(e){return new Vm(Zc.fi,this.serializer)}bu(e){return new nR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wo.provider={build:()=>new Wo};class KR extends Wo{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){Pe(this.persistence.referenceDelegate instanceof zo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new D0(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Vm(r=>zo.fi(r,n),this.serializer)}}class tc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>od(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HR.bind(null,this.syncEngine),await AR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bR}()}createDatastore(e){const n=wa(e.databaseInfo.databaseId),r=function(i){return new aR(i)}(e.databaseInfo);return function(i,o,l,c){return new hR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new dR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>od(this.syncEngine,n,0),function(){return ed.C()?new ed:new rR}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,f){const p=new OR(s,i,o,l,c,h);return f&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);Y(Sr,"RemoteStore shutting down."),i.da.add(5),await Oi(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tc.provider={build:()=>new tc};/**
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
 */class t_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ar="FirestoreClient";class WR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Kg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y(ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y(ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=au(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gl(t,e){t.asyncQueue.verifyOperationInProgress(),Y(ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Nm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ld(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GR(t);Y(ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>nd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>nd(e.remoteStore,s)),t._onlineComponents=e}async function GR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(ar,"Using user provided OfflineComponentProvider");try{await gl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await gl(t,new Wo)}}else Y(ar,"Using default OfflineComponentProvider"),await gl(t,new KR(void 0));return t._offlineComponents}async function n_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(ar,"Using user provided OnlineComponentProvider"),await ld(t,t._uninitializedComponentsProvider._online)):(Y(ar,"Using default OnlineComponentProvider"),await ld(t,new tc))),t._onlineComponents}function QR(t){return n_(t).then(e=>e.syncEngine)}async function r_(t){const e=await n_(t),n=e.eventManager;return n.onListen=VR.bind(null,e.syncEngine),n.onUnlisten=MR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LR.bind(null,e.syncEngine),n}function XR(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new t_({next:g=>{f.xu(),o.enqueueAndForget(()=>zm(i,p));const _=g.docs.has(l);!_&&g.fromCache?h.reject(new ee(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?h.reject(new ee(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Km(Kc(l.path),f,{includeMetadataChanges:!0,Qa:!0});return qm(i,p)}(await r_(t),t.asyncQueue,e,n,r)),r.promise}function YR(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new t_({next:g=>{f.xu(),o.enqueueAndForget(()=>zm(i,p)),g.fromCache&&c.source==="server"?h.reject(new ee(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Km(l,f,{includeMetadataChanges:!0,Qa:!0});return qm(i,p)}(await r_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function s_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cd=new Map;/**
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
 */function i_(t,e,n){if(!n)throw new ee(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JR(t,e,n,r){if(e===!0&&r===!0)throw new ee(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ud(t){if(!re.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hd(t){if(re.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hu(t);throw new ee(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const o_="firestore.googleapis.com",fd=!0;class dd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=o_,this.ssl=fd}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:fd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Om;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<C0)throw new ee(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iA;switch(r.type){case"firstParty":return new cA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cd.get(n);r&&(Y("ComponentProvider","Removing Datastore"),cd.delete(n),r.terminate())}(this),Promise.resolve()}}function ZR(t,e,n,r={}){var s;t=Dn(t,ba);const i=Cr(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Ac(`https://${c}`),Rc("Firestore",!0)),o.host!==o_&&o.host!==c&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!bn(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ct.MOCK_USER;else{f=eg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ee(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ct(g)}t._authCredentials=new oA(new qg(f,p))}}/**
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
 */class Sa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sa(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Yn extends Sa{constructor(e,n,r){super(e,n,Kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new re(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function fu(t,e,...n){if(t=rt(t),i_("collection","path",e),t instanceof ba){const r=Ne.fromString(e,...n);return hd(r),new Yn(t,null,r)}{if(!(t instanceof Dt||t instanceof Yn))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return hd(r),new Yn(t.firestore,null,r)}}function Go(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Kg.newId()),i_("doc","path",e),t instanceof ba){const r=Ne.fromString(e,...n);return ud(r),new Dt(t,null,new re(r))}{if(!(t instanceof Dt||t instanceof Yn))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return ud(r),new Dt(t.firestore,t instanceof Yn?t.converter:null,new re(r))}}/**
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
 */const pd="AsyncQueue";class gd{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Mm(this,"async_queue_retry"),this.rc=()=>{const r=pl();r&&Y(pd,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=pl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new wn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Ts(e))throw e;Y(pd,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Cn("INTERNAL UNHANDLED ERROR: ",md(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=ou.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&ie(47125,{cc:md(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function md(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ws extends ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new gd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gd(e),this._firestoreClient=void 0,await e}}}function eb(t,e){const n=typeof t=="object"?t:Pc(),r=typeof t=="string"?t:Fo,s=ua(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yp("firestore");i&&ZR(s,...i)}return s}function du(t){if(t._terminated)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tb(t),t._firestoreClient}function tb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new AA(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,s_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new WR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gs(st.fromBase64String(e))}catch(n){throw new ee(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gs(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ni{constructor(e){this._methodName=e}}/**
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
 */class pu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */class gu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const nb=/^__.*__$/;class rb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new ki(e,this.data,n,this.fieldTransforms)}}class a_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function l_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ic:t})}}class Ca{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Qo(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(l_(this.Ic)&&nb.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class sb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wa(e)}bc(e,n,r,s=!1){return new Ca({Ic:e,methodName:n,wc:r,path:nt.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function c_(t){const e=t._freezeSettings(),n=wa(t._databaseId);return new sb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ib(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);yu("Data must be an object, but it was:",o,r);const l=h_(r,o);let c,h;if(i.merge)c=new kt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=nc(e,p,n);if(!o.contains(g))throw new ee(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);d_(f,g)||f.push(g)}c=new kt(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new rb(new Rt(l),c,h)}class ka extends Ni{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ka}}function u_(t,e,n){return new Ca({Ic:3,wc:e.settings.wc,methodName:t._methodName,Rc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class mu extends Ni{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=u_(this,e,!0),r=this.Sc.map(i=>As(i,n)),s=new hs(r);return new vm(e.path,s)}isEqual(e){return e instanceof mu&&bn(this.Sc,e.Sc)}}class _u extends Ni{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=u_(this,e,!0),r=this.Sc.map(i=>As(i,n)),s=new fs(r);return new vm(e.path,s)}isEqual(e){return e instanceof _u&&bn(this.Sc,e.Sc)}}function ob(t,e,n,r){const s=t.bc(1,e,n);yu("Data must be an object, but it was:",s,r);const i=[],o=Rt.empty();cr(r,(c,h)=>{const f=vu(e,c,n);h=rt(h);const p=s.mc(f);if(h instanceof ka)i.push(f);else{const g=As(h,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new kt(i);return new a_(o,l,s.fieldTransforms)}function ab(t,e,n,r,s,i){const o=t.bc(1,e,n),l=[nc(e,r,n)],c=[s];if(i.length%2!=0)throw new ee(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(nc(e,i[g])),c.push(i[g+1]);const h=[],f=Rt.empty();for(let g=l.length-1;g>=0;--g)if(!d_(h,l[g])){const _=l[g];let R=c[g];R=rt(R);const k=o.mc(_);if(R instanceof ka)h.push(_);else{const D=As(R,k);D!=null&&(h.push(_),f.set(_,D))}}const p=new kt(h);return new a_(f,p,o.fieldTransforms)}function As(t,e){if(f_(t=rt(t)))return yu("Unsupported field value:",e,t),h_(t,e);if(t instanceof Ni)return function(r,s){if(!l_(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=As(l,s.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:qo(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qo(s.serializer,i)}}if(r instanceof pu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gs)return{bytesValue:Rm(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gu)return function(o,l){return{mapValue:{fields:{[em]:{stringValue:tm},[Uo]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.gc("VectorValues must only contain numeric values.");return Wc(l.serializer,h)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${hu(r)}`)}(t,e)}function h_(t,e){const n={};return Gg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cr(t,(r,s)=>{const i=As(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function f_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof pu||t instanceof gs||t instanceof Dt||t instanceof Ni||t instanceof gu)}function yu(t,e,n){if(!f_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=hu(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function nc(t,e,n){if((e=rt(e))instanceof Pa)return e._internalPath;if(typeof e=="string")return vu(t,e);throw Qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const lb=new RegExp("[~\\*/\\[\\]]");function vu(t,e,n){if(e.search(lb)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pa(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee(U.INVALID_ARGUMENT,l+t+c)}function d_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class p_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(g_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cb extends p_{data(){return super.data()}}function g_(t,e){return typeof e=="string"?vu(t,e):e instanceof Pa?e._internalPath:e._delegate._internalPath}/**
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
 */function ub(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hb{convertValue(e,n="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Uo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>$e(o.doubleValue));return new gu(i)}convertGeoPoint(e){return new pu($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ma(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const n=rr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Pe(Dm(r),9688,{name:e});const s=new yi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function fb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class m_ extends p_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(g_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class To extends m_{data(e={}){return super.data(e)}}class db{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new To(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new To(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:pb(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
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
 */function gb(t){t=Dn(t,Dt);const e=Dn(t.firestore,ws);return XR(du(e),t._key).then(n=>vb(e,t,n))}class __ extends hb{constructor(e){super(),this.firestore=e}convertBytes(e){return new gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function mb(t){t=Dn(t,Sa);const e=Dn(t.firestore,ws),n=du(e),r=new __(e);return ub(t._query),YR(n,t._query).then(s=>new db(e,r,t,s))}function _b(t,e,n,...r){t=Dn(t,Dt);const s=Dn(t.firestore,ws),i=c_(s);let o;return o=typeof(e=rt(e))=="string"||e instanceof Pa?ab(i,"updateDoc",t._key,e,n,r):ob(i,"updateDoc",t._key,e),Eu(s,[o.toMutation(t._key,Kt.exists(!0))])}function yb(t){return Eu(Dn(t.firestore,ws),[new Gc(t._key,Kt.none())])}function y_(t,e){const n=Dn(t.firestore,ws),r=Go(t),s=fb(t.converter,e);return Eu(n,[ib(c_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function Eu(t,e){return function(r,s){const i=new wn;return r.asyncQueue.enqueueAndForget(async()=>FR(await QR(r),s,i)),i.promise}(du(t),e)}function vb(t,e,n){const r=n.docs.get(e._key),s=new __(t);return new m_(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}function Eb(...t){return new mu("arrayUnion",t)}function Tb(...t){return new _u("arrayRemove",t)}(function(e,n=!0){(function(s){vs=s})(kr),Ar(new tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ws(new aA(r.getProvider("auth-internal")),new uA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),nn(Tf,If,e),nn(Tf,If,"esm2017")})();/**
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
 */const v_="firebasestorage.googleapis.com",Ib="storageBucket",wb=2*60*1e3,Ab=10*60*1e3;/**
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
 */class dn extends fn{constructor(e,n,r=0){super(ml(e),`Firebase Storage: ${n} (${ml(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ml(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(hn||(hn={}));function ml(t){return"storage/"+t}function Rb(){const t="An unknown error occurred, please check the error payload for server response.";return new dn(hn.UNKNOWN,t)}function bb(){return new dn(hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Sb(){return new dn(hn.CANCELED,"User canceled the upload/download.")}function Pb(t){return new dn(hn.INVALID_URL,"Invalid URL '"+t+"'.")}function Cb(t){return new dn(hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _d(t){return new dn(hn.INVALID_ARGUMENT,t)}function E_(){return new dn(hn.APP_DELETED,"The Firebase app was deleted.")}function kb(t){return new dn(hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ht.makeFromUrl(e,n)}catch{return new Ht(e,"")}if(r.path==="")return r;throw Cb(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function h(H){H.path_=decodeURIComponent(H.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},k=n===v_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",B=new RegExp(`^https?://${k}/${s}/${D}`,"i"),j=[{regex:l,indices:c,postModify:i},{regex:_,indices:R,postModify:h},{regex:B,indices:{bucket:1,path:2},postModify:h}];for(let H=0;H<j.length;H++){const ce=j[H],fe=ce.regex.exec(e);if(fe){const w=fe[ce.indices.bucket];let v=fe[ce.indices.path];v||(v=""),r=new Ht(w,v),ce.postModify(r);break}}if(r==null)throw Pb(e);return r}}class Db{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ob(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let h=!1;function f(...D){h||(h=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(_,c())},D)}function g(){i&&clearTimeout(i)}function _(D,...B){if(h){g();return}if(D){g(),f.call(null,D,...B);return}if(c()||o){g(),f.call(null,D,...B);return}r<64&&(r*=2);let j;l===1?(l=2,j=0):j=(r+Math.random())*1e3,p(j)}let R=!1;function k(D){R||(R=!0,g(),!h&&(s!==null?(D||(l=2),clearTimeout(s),p(0)):D||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function Vb(t){t(!1)}/**
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
 */function Nb(t){return t!==void 0}function yd(t,e,n,r){if(r<e)throw _d(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _d(`Invalid value for '${t}'. Expected ${n} or less.`)}function xb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Xo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xo||(Xo={}));/**
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
 */function Mb(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class Lb{constructor(e,n,r,s,i,o,l,c,h,f,p,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,k)=>{this.resolve_=R,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new oo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Xo.NO_ERROR,c=i.getStatus();if(!l||Mb(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Xo.ABORT;r(!1,new oo(!1,null,f));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new oo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Nb(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Rb();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?E_():Sb();o(c)}else{const c=bb();o(c)}};this.canceled_?n(!1,new oo(!1,null,!0)):this.backoffId_=Ob(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Fb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ub(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Bb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $b(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jb(t,e,n,r,s,i,o=!0,l=!1){const c=xb(t.urlParams),h=t.url+c,f=Object.assign({},t.headers);return Bb(f,e),Fb(f,n),Ub(f,i),$b(f,r),new Lb(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function Hb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Yo{constructor(e,n){this._service=e,n instanceof Ht?this._location=n:this._location=Ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yo(e,n)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qb(this._location.path)}get storage(){return this._service}get parent(){const e=Hb(this._location.path);if(e===null)return null;const n=new Ht(this._location.bucket,e);return new Yo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kb(e)}}function vd(t,e){const n=e?.[Ib];return n==null?null:Ht.makeFromBucketSpec(n,t)}function zb(t,e,n,r={}){t.host=`${e}:${n}`;const s=Cr(e);s&&(Ac(`https://${t.host}/b`),Rc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:eg(i,t.app.options.projectId))}class Kb{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=v_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wb,this._maxUploadRetryTime=Ab,this._requests=new Set,s!=null?this._bucket=Ht.makeFromBucketSpec(s,this._host):this._bucket=vd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=vd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yo(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Db(E_());{const o=jb(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ed="@firebase/storage",Td="0.13.13";/**
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
 */const T_="storage";function Wb(t=Pc(),e){t=rt(t);const r=ua(t,T_).getImmediate({identifier:e}),s=Yp("storage");return s&&Gb(r,...s),r}function Gb(t,e,n,r={}){zb(t,e,n,r)}function Qb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Kb(n,r,s,e,kr)}function Xb(){Ar(new tr(T_,Qb,"PUBLIC").setMultipleInstances(!0)),nn(Ed,Td,""),nn(Ed,Td,"esm2017")}Xb();const Yb={apiKey:"AIzaSyDik8dO4SsD29TQ3LVCcJGweqJbaRIIRVU",authDomain:"recipe-web-67327.firebaseapp.com",projectId:"recipe-web-67327",storageBucket:"recipe-web-67327.appspot.com",messagingSenderId:"795860644110",appId:"1:795860644110:web:178be81a692099f46d275f"},Tu=rg(Yb),rs=tA(Tu),ss=eb(Tu);Wb(Tu);new Zt;const Da=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Jb={class:"add-recipe"},Zb={key:0},eS=["src"],tS={class:"ingredient-inputs"},nS=["onClick"],rS={__name:"AddRecipe",setup(t){const e=Be(""),n=Be(""),r=Be([]),s=Be(""),i=Be(""),o=Be(null),l=Be(null),c=Be(null);wi(()=>{c.value=rs.currentUser});const h=R=>{o.value=R.target.files[0],l.value=URL.createObjectURL(o.value)},f=R=>new Promise((k,D)=>{const B=new FileReader;B.readAsDataURL(R),B.onload=()=>k(B.result),B.onerror=F=>D(F)}),p=()=>{s.value&&i.value&&(r.value.push({name:s.value,amount:i.value}),s.value="",i.value="")},g=R=>{r.value.splice(R,1)},_=async()=>{if(!c.value){alert("Please login to add a recipe.");return}if(!o.value){alert("Please select an image.");return}try{const R=await f(o.value);await y_(fu(ss,"recipes"),{title:e.value,image:R,ingredients:r.value,instructions:n.value,createdBy:c.value.uid,savedBy:[],createdAt:new Date}),alert("Recipe added!"),e.value="",n.value="",r.value=[],o.value=null,l.value=null}catch(R){console.error("Error adding recipe:",R),alert("Failed to add recipe: "+R.message)}};return(R,k)=>(Ae(),Ce("div",Jb,[k[6]||(k[6]=ne("h2",null,"Шинэ жор нэмэх",-1)),ne("form",{onSubmit:mE(_,["prevent"])},[zr(ne("input",{"onUpdate:modelValue":k[0]||(k[0]=D=>e.value=D),placeholder:"Хоолны нэр",required:""},null,512),[[Kr,e.value]]),ne("input",{type:"file",onChange:h,accept:"image/*",required:""},null,32),l.value?(Ae(),Ce("div",Zb,[ne("img",{src:l.value,alt:"Preview",class:"preview-image"},null,8,eS)])):Ir("",!0),k[4]||(k[4]=ne("h3",null,"орц",-1)),ne("div",tS,[zr(ne("input",{"onUpdate:modelValue":k[1]||(k[1]=D=>s.value=D),placeholder:"Name (орц)"},null,512),[[Kr,s.value]]),zr(ne("input",{"onUpdate:modelValue":k[2]||(k[2]=D=>i.value=D),placeholder:"Amount (жин)"},null,512),[[Kr,i.value]]),ne("button",{type:"button",onClick:p},"Орц нэмэх")]),ne("ul",null,[(Ae(!0),Ce(At,null,hi(r.value,(D,B)=>(Ae(),Ce("li",{key:B},[jp(Qe(D.name)+" - "+Qe(D.amount)+" ",1),ne("button",{onClick:F=>g(B)},"❌",8,nS)]))),128))]),zr(ne("textarea",{"onUpdate:modelValue":k[3]||(k[3]=D=>n.value=D),placeholder:"Хийх заавар",required:""},null,512),[[Kr,n.value]]),k[5]||(k[5]=ne("button",{type:"submit"},"Жор нэмэх",-1))],32)]))}},sS=Da(rS,[["__scopeId","data-v-18198fa5"]]),iS={class:"recipe-list"},oS={key:0,class:"no-recipes"},aS={key:1,class:"grid"},lS=["src"],cS={class:"short-ingredients"},uS={key:0},hS=["onClick"],fS=["onClick"],dS=["onClick"],pS={key:1,class:"details"},gS={__name:"RecipesList",props:{filterLiked:Boolean},setup(t){const e=t,n=Be([]),r=Be(""),s=Be(null),i=Be(e.filterLiked),o=Be(null);Js(()=>e.filterLiked,g=>{i.value=g}),wi(()=>{l(),Rg(rs,g=>{o.value=g})});const l=async()=>{try{const g=await mb(fu(ss,"recipes"));n.value=g.docs.map(_=>({id:_.id,..._.data()}))}catch(g){console.error("Жор татаж авахад алдаа гарлаа:",g)}},c=async g=>{if(confirm("Энэ жорыг устгах уу?"))try{await yb(Go(ss,"recipes",g)),n.value=n.value.filter(_=>_.id!==g)}catch(_){console.error("Жор устгах үед алдаа гарлаа:",_),alert("Жор устгаж чадсангүй")}},h=g=>{s.value=s.value===g?null:g},f=async g=>{if(!o.value){alert("Like дарахын тулд нэвтрэх хэрэгтэй!");return}const _=Go(ss,"recipes",g.id),R=g.likes?.includes(o.value.uid);try{await _b(_,{likes:R?Tb(o.value.uid):Eb(o.value.uid)}),g.likes=R?g.likes.filter(k=>k!==o.value.uid):[...g.likes||[],o.value.uid]}catch(k){console.error("Like хийх үед алдаа гарлаа:",k)}},p=Mt(()=>{let g=n.value;return r.value&&(g=g.filter(_=>_.title.toLowerCase().includes(r.value.toLowerCase()))),i.value&&o.value&&(g=g.filter(_=>_.likes?.includes(o.value.uid))),g});return(g,_)=>(Ae(),Ce("div",iS,[_[4]||(_[4]=ne("h2",null,"Бүх хоол",-1)),zr(ne("input",{"onUpdate:modelValue":_[0]||(_[0]=R=>r.value=R),placeholder:"Жор хайх...",class:"search"},null,512),[[Kr,r.value]]),p.value.length===0?(Ae(),Ce("div",oS,"Жор олдсонгүй.")):(Ae(),Ce("div",aS,[(Ae(!0),Ce(At,null,hi(p.value,R=>(Ae(),Ce("div",{key:R.id,class:"card"},[ne("img",{src:R.image||"https://via.placeholder.com/250x150?text=No+Image",alt:"recipe image"},null,8,lS),ne("h3",null,Qe(R.title),1),ne("p",cS,[_[1]||(_[1]=ne("strong",null,"Орц:",-1)),Array.isArray(R.ingredients)?(Ae(),Ce("span",uS,Qe(R.ingredients.map(k=>k.name||k).join(", ")),1)):Ir("",!0)]),ne("button",{class:"like-btn",onClick:k=>f(R)}," ❤️ "+Qe(R.likes?.length||0),9,hS),ne("button",{onClick:k=>h(R.id)},Qe(s.value===R.id?"Хураах":"Дэлгэрэнгүй"),9,fS),R.createdBy===o.value?.uid?(Ae(),Ce("button",{key:0,class:"delete-btn",onClick:k=>c(R.id)}," 🗑️ Устгах ",8,dS)):Ir("",!0),s.value===R.id?(Ae(),Ce("div",pS,[_[2]||(_[2]=ne("h4",null,"Орц:",-1)),ne("ul",null,[(Ae(!0),Ce(At,null,hi(R.ingredients,(k,D)=>(Ae(),Ce("li",{key:D},Qe(k.name||k)+" - "+Qe(k.amount||""),1))),128))]),_[3]||(_[3]=ne("h4",null,"Хийх заавар:",-1)),ne("p",null,Qe(R.instructions),1)])):Ir("",!0)]))),128))]))]))}},mS=Da(gS,[["__scopeId","data-v-b12a438d"]]),_S={class:"home"},yS={class:"app-header"},vS={class:"auth"},ES={key:1},TS={class:"hero-banner"},IS={class:"actions"},wS={key:0},AS={key:0},RS={key:1,class:"login-reminder"},bS={__name:"App",setup(t){const e=Be(null),n=Be(!1),r=Be(!1);wi(()=>{Rg(rs,l=>{e.value=l})});const s=async()=>{const l=new Zt;try{const c=await uw(rs,l);e.value=c.user}catch(c){alert("Login failed: "+c.message)}},i=async()=>{await qI(rs),e.value=null,n.value=!1},o=()=>{r.value=!r.value};return(l,c)=>(Ae(),Ce("div",_S,[ne("header",yS,[c[1]||(c[1]=ne("div",{class:"logo"},[ne("img",{src:"https://th.bing.com/th?q=Food+Logo.png+Copyright+Free&w=120&h=120",alt:"logo"}),ne("h1",null,[ne("span",{class:"brand-primary"},"хоолны"),ne("span",{class:"brand-highlight"},"жор")])],-1)),ne("div",vS,[e.value?(Ae(),Ce("div",ES,[ne("span",null,"👋 "+Qe(e.value.displayName),1),ne("button",{onClick:i},"Гарах")])):(Ae(),Ce("button",{key:0,onClick:s},"Нэвтрэх"))])]),ne("div",TS,[c[2]||(c[2]=ne("h2",null,"Амттай Хоол Хийе!",-1)),c[3]||(c[3]=ne("p",null,"Туршаад Үз!",-1)),ne("div",IS,[e.value?(Ae(),Ce("button",{key:0,onClick:c[0]||(c[0]=h=>n.value=!n.value)},Qe(n.value?"хаах":"➕ Хоол нэмэх"),1)):Ir("",!0),e.value?(Ae(),Ce("button",{key:1,onClick:o},Qe(r.value?"Бүх хоолыг харуулах":"❤️ Надад таалагдсан хоол"),1)):Ir("",!0)])]),ne("main",null,[e.value?(Ae(),Ce("div",wS,[n.value?(Ae(),Ce("div",AS,[Et(sS)])):Ir("",!0),Et(mS,{filterLiked:r.value},null,8,["filterLiked"])])):(Ae(),Ce("div",RS,c[4]||(c[4]=[ne("p",null,"Please login to view and manage recipes.",-1)])))])]))}},SS=Da(bS,[["__scopeId","data-v-bd3b4ed2"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const qr=typeof document<"u";function I_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function PS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&I_(t.default)}const Re=Object.assign;function _l(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const oi=()=>{},Wt=Array.isArray,w_=/#/g,CS=/&/g,kS=/\//g,DS=/=/g,OS=/\?/g,A_=/\+/g,VS=/%5B/g,NS=/%5D/g,R_=/%5E/g,xS=/%60/g,b_=/%7B/g,MS=/%7C/g,S_=/%7D/g,LS=/%20/g;function Iu(t){return encodeURI(""+t).replace(MS,"|").replace(VS,"[").replace(NS,"]")}function FS(t){return Iu(t).replace(b_,"{").replace(S_,"}").replace(R_,"^")}function rc(t){return Iu(t).replace(A_,"%2B").replace(LS,"+").replace(w_,"%23").replace(CS,"%26").replace(xS,"`").replace(b_,"{").replace(S_,"}").replace(R_,"^")}function US(t){return rc(t).replace(DS,"%3D")}function BS(t){return Iu(t).replace(w_,"%23").replace(OS,"%3F")}function $S(t){return t==null?"":BS(t).replace(kS,"%2F")}function Ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jS=/\/$/,HS=t=>t.replace(jS,"");function yl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=WS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ei(o)}}function qS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Id(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ms(e.matched[r],n.matched[s])&&P_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function P_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KS(t[n],e[n]))return!1;return!0}function KS(t,e){return Wt(t)?wd(t,e):Wt(e)?wd(e,t):t===e}function wd(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function WS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ti;(function(t){t.pop="pop",t.push="push"})(Ti||(Ti={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function GS(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HS(t)}const QS=/^[^#]+#/;function XS(t,e){return t.replace(QS,"#")+e}function YS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function JS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=YS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ad(t,e){return(history.state?history.state.position-e:-1)+t}const sc=new Map;function ZS(t,e){sc.set(t,e)}function eP(t){const e=sc.get(t);return sc.delete(t),e}let tP=()=>location.protocol+"//"+location.host;function C_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Id(c,"")}return Id(n,t)+r+s}function nP(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=C_(t,location),R=n.value,k=e.value;let D=0;if(g){if(n.value=_,e.value=g,o&&o===R){o=null;return}D=k?g.position-k.position:0}else r(_);s.forEach(B=>{B(n.value,R,{delta:D,type:Ti.pop,direction:D?D>0?ai.forward:ai.back:ai.unknown})})};function c(){o=n.value}function h(g){s.push(g);const _=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(Re({},g.state,{scroll:Oa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Rd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function rP(t){const{history:e,location:n}=window,r={value:C_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:tP()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(c,h){const f=Re({},e.state,Rd(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=Re({},s.value,e.state,{forward:c,scroll:Oa()});i(f.current,f,!0);const p=Re({},Rd(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function sP(t){t=GS(t);const e=rP(t),n=nP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:XS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function iP(t){return typeof t=="string"||t&&typeof t=="object"}function k_(t){return typeof t=="string"||typeof t=="symbol"}const D_=Symbol("");var bd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bd||(bd={}));function _s(t,e){return Re(new Error,{type:t,[D_]:!0},e)}function _n(t,e){return t instanceof Error&&D_ in t&&(e==null||!!(t.type&e))}const Sd="[^/]+?",oP={sensitive:!1,strict:!1,start:!0,end:!0},aP=/[.+*?^${}()[\]/\\]/g;function lP(t,e){const n=Re({},oP,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(aP,"\\$&"),_+=40;else if(g.type===1){const{value:R,repeatable:k,optional:D,regexp:B}=g;i.push({name:R,repeatable:k,optional:D});const F=B||Sd;if(F!==Sd){_+=10;try{new RegExp(`(${F})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${R}" (${F}): `+H.message)}}let j=k?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(j=D&&h.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,_+=20,D&&(_+=-8),k&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",R=i[g-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:k,optional:D}=_,B=R in h?h[R]:"";if(Wt(B)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const F=Wt(B)?B.join("/"):B;if(!F)if(D)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function cP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function O_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pd(r))return 1;if(Pd(s))return-1}return s.length-r.length}function Pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uP={type:0,value:""},hP=/[a-zA-Z0-9_]/;function fP(t){if(!t)return[[]];if(t==="/")return[[uP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:hP.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function dP(t,e,n){const r=lP(fP(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pP(t,e){const n=[],r=new Map;e=Od({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const R=!_,k=kd(p);k.aliasOf=_&&_.record;const D=Od(e,p),B=[k];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of H)B.push(kd(Re({},k,{components:_?_.record.components:k.components,path:ce,aliasOf:_?_.record:k})))}let F,j;for(const H of B){const{path:ce}=H;if(g&&ce[0]!=="/"){const fe=g.record.path,w=fe[fe.length-1]==="/"?"":"/";H.path=g.record.path+(ce&&w+ce)}if(F=dP(H,g,D),_?_.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),R&&p.name&&!Dd(F)&&o(p.name)),V_(F)&&c(F),k.children){const fe=k.children;for(let w=0;w<fe.length;w++)i(fe[w],F,_&&_.children[w])}_=_||F}return j?()=>{o(j)}:oi}function o(p){if(k_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=_P(p,n);n.splice(g,0,p),p.record.name&&!Dd(p)&&r.set(p.record.name,p)}function h(p,g){let _,R={},k,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw _s(1,{location:p});D=_.record.name,R=Re(Cd(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Cd(p.params,_.keys.map(j=>j.name))),k=_.stringify(R)}else if(p.path!=null)k=p.path,_=n.find(j=>j.re.test(k)),_&&(R=_.parse(k),D=_.record.name);else{if(_=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw _s(1,{location:p,currentLocation:g});D=_.record.name,R=Re({},g.params,p.params),k=_.stringify(R)}const B=[];let F=_;for(;F;)B.unshift(F.record),F=F.parent;return{name:D,path:k,params:R,matched:B,meta:mP(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Cd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:gP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Dd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mP(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Od(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function _P(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;O_(t,e[i])<0?r=i:n=i+1}const s=yP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function yP(t){let e=t;for(;e=e.parent;)if(V_(e)&&O_(t,e)===0)return e}function V_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function vP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(A_," "),o=i.indexOf("="),l=Ei(o<0?i:i.slice(0,o)),c=o<0?null:Ei(i.slice(o+1));if(l in e){let h=e[l];Wt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Vd(t){let e="";for(let n in t){const r=t[n];if(n=US(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(i=>i&&rc(i)):[r&&rc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function EP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const TP=Symbol(""),Nd=Symbol(""),wu=Symbol(""),Au=Symbol(""),ic=Symbol("");function Bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(_s(4,{from:n,to:e})):g instanceof Error?c(g):iP(g)?c(_s(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function vl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(I_(c)){const f=(c.__vccOpts||c)[e];f&&i.push(jn(f,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=PS(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&jn(_,n,r,o,l,s)()}))}}return i}function xd(t){const e=tn(wu),n=tn(Au),r=Mt(()=>{const c=Xr(t.to);return e.resolve(c)}),s=Mt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ms.bind(null,f));if(g>-1)return g;const _=Md(c[h-2]);return h>1&&Md(f)===_&&p[p.length-1].path!==_?p.findIndex(ms.bind(null,c[h-2])):g}),i=Mt(()=>s.value>-1&&bP(n.params,r.value.params)),o=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&P_(n.params,r.value.params));function l(c={}){if(RP(c)){const h=e[Xr(t.replace)?"replace":"push"](Xr(t.to)).catch(oi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function IP(t){return t.length===1?t[0]:t}const wP=_p({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xd,setup(t,{slots:e}){const n=ra(xd(t)),{options:r}=tn(wu),s=Mt(()=>({[Ld(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ld(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&IP(e.default(n));return t.custom?i:zp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),AP=wP;function RP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Md(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ld=(t,e,n)=>t??e??n,SP=_p({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tn(ic),s=Mt(()=>t.route||r.value),i=tn(Nd,0),o=Mt(()=>{let h=Xr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Mt(()=>s.value.matched[o.value]);lo(Nd,Mt(()=>o.value+1)),lo(TP,l),lo(ic,s);const c=Be();return Js(()=>[c.value,l.value,t.name],([h,f,p],[g,_,R])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!ms(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return Fd(n.default,{Component:g,route:h});const _=p.props[f],R=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=zp(g,Re({},R,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Fd(n.default,{Component:D,route:h})||D}}});function Fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const PP=SP;function CP(t){const e=pP(t.routes,t),n=t.parseQuery||vP,r=t.stringifyQuery||Vd,s=t.history,i=Bs(),o=Bs(),l=Bs(),c=My(Un);let h=Un;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=_l.bind(null,V=>""+V),p=_l.bind(null,$S),g=_l.bind(null,Ei);function _(V,X){let Q,J;return k_(V)?(Q=e.getRecordMatcher(V),J=X):J=V,e.addRoute(J,Q)}function R(V){const X=e.getRecordMatcher(V);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(V=>V.record)}function D(V){return!!e.getRecordMatcher(V)}function B(V,X){if(X=Re({},X||c.value),typeof V=="string"){const S=yl(n,V,X.path),N=e.resolve({path:S.path},X),L=s.createHref(S.fullPath);return Re(S,N,{params:g(N.params),hash:Ei(S.hash),redirectedFrom:void 0,href:L})}let Q;if(V.path!=null)Q=Re({},V,{path:yl(n,V.path,X.path).path});else{const S=Re({},V.params);for(const N in S)S[N]==null&&delete S[N];Q=Re({},V,{params:p(S)}),X.params=p(X.params)}const J=e.resolve(Q,X),Ie=V.hash||"";J.params=f(g(J.params));const y=qS(r,Re({},V,{hash:FS(Ie),path:J.path})),E=s.createHref(y);return Re({fullPath:y,hash:Ie,query:r===Vd?EP(V.query):V.query||{}},J,{redirectedFrom:void 0,href:E})}function F(V){return typeof V=="string"?yl(n,V,c.value.path):Re({},V)}function j(V,X){if(h!==V)return _s(8,{from:X,to:V})}function H(V){return w(V)}function ce(V){return H(Re(F(V),{replace:!0}))}function fe(V){const X=V.matched[V.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let J=typeof Q=="function"?Q(V):Q;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=F(J):{path:J},J.params={}),Re({query:V.query,hash:V.hash,params:J.path!=null?{}:V.params},J)}}function w(V,X){const Q=h=B(V),J=c.value,Ie=V.state,y=V.force,E=V.replace===!0,S=fe(Q);if(S)return w(Re(F(S),{state:typeof S=="object"?Re({},Ie,S.state):Ie,force:y,replace:E}),X||Q);const N=Q;N.redirectedFrom=X;let L;return!y&&zS(r,J,Q)&&(L=_s(16,{to:N,from:J}),Vt(J,J,!0,!1)),(L?Promise.resolve(L):A(N,J)).catch(x=>_n(x)?_n(x,2)?x:Bt(x):me(x,N,J)).then(x=>{if(x){if(_n(x,2))return w(Re({replace:E},F(x.to),{state:typeof x.to=="object"?Re({},Ie,x.to.state):Ie,force:y}),X||N)}else x=P(N,J,!0,E,Ie);return b(N,J,x),x})}function v(V,X){const Q=j(V,X);return Q?Promise.reject(Q):Promise.resolve()}function I(V){const X=Vn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(V):V()}function A(V,X){let Q;const[J,Ie,y]=kP(V,X);Q=vl(J.reverse(),"beforeRouteLeave",V,X);for(const S of J)S.leaveGuards.forEach(N=>{Q.push(jn(N,V,X))});const E=v.bind(null,V,X);return Q.push(E),Tt(Q).then(()=>{Q=[];for(const S of i.list())Q.push(jn(S,V,X));return Q.push(E),Tt(Q)}).then(()=>{Q=vl(Ie,"beforeRouteUpdate",V,X);for(const S of Ie)S.updateGuards.forEach(N=>{Q.push(jn(N,V,X))});return Q.push(E),Tt(Q)}).then(()=>{Q=[];for(const S of y)if(S.beforeEnter)if(Wt(S.beforeEnter))for(const N of S.beforeEnter)Q.push(jn(N,V,X));else Q.push(jn(S.beforeEnter,V,X));return Q.push(E),Tt(Q)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),Q=vl(y,"beforeRouteEnter",V,X,I),Q.push(E),Tt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(jn(S,V,X));return Q.push(E),Tt(Q)}).catch(S=>_n(S,8)?S:Promise.reject(S))}function b(V,X,Q){l.list().forEach(J=>I(()=>J(V,X,Q)))}function P(V,X,Q,J,Ie){const y=j(V,X);if(y)return y;const E=X===Un,S=qr?history.state:{};Q&&(J||E?s.replace(V.fullPath,Re({scroll:E&&S&&S.scroll},Ie)):s.push(V.fullPath,Ie)),c.value=V,Vt(V,X,Q,E),Bt()}let T;function gt(){T||(T=s.listen((V,X,Q)=>{if(!Gt.listening)return;const J=B(V),Ie=fe(J);if(Ie){w(Re(Ie,{replace:!0,force:!0}),J).catch(oi);return}h=J;const y=c.value;qr&&ZS(Ad(y.fullPath,Q.delta),Oa()),A(J,y).catch(E=>_n(E,12)?E:_n(E,2)?(w(Re(F(E.to),{force:!0}),J).then(S=>{_n(S,20)&&!Q.delta&&Q.type===Ti.pop&&s.go(-1,!1)}).catch(oi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),me(E,J,y))).then(E=>{E=E||P(J,y,!1),E&&(Q.delta&&!_n(E,8)?s.go(-Q.delta,!1):Q.type===Ti.pop&&_n(E,20)&&s.go(-1,!1)),b(J,y,E)}).catch(oi)}))}let Ot=Bs(),je=Bs(),ve;function me(V,X,Q){Bt(V);const J=je.list();return J.length?J.forEach(Ie=>Ie(V,X,Q)):console.error(V),Promise.reject(V)}function bt(){return ve&&c.value!==Un?Promise.resolve():new Promise((V,X)=>{Ot.add([V,X])})}function Bt(V){return ve||(ve=!V,gt(),Ot.list().forEach(([X,Q])=>V?Q(V):X()),Ot.reset()),V}function Vt(V,X,Q,J){const{scrollBehavior:Ie}=t;if(!qr||!Ie)return Promise.resolve();const y=!Q&&eP(Ad(V.fullPath,0))||(J||!Q)&&history.state&&history.state.scroll||null;return fp().then(()=>Ie(V,X,y)).then(E=>E&&JS(E)).catch(E=>me(E,V,X))}const Me=V=>s.go(V);let Le;const Vn=new Set,Gt={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:k,resolve:B,options:t,push:H,replace:ce,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:je.add,isReady:bt,install(V){const X=this;V.component("RouterLink",AP),V.component("RouterView",PP),V.config.globalProperties.$router=X,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Xr(c)}),qr&&!Le&&c.value===Un&&(Le=!0,H(s.location).catch(Ie=>{}));const Q={};for(const Ie in Un)Object.defineProperty(Q,Ie,{get:()=>c.value[Ie],enumerable:!0});V.provide(wu,X),V.provide(Au,ap(Q)),V.provide(ic,c);const J=V.unmount;Vn.add(V),V.unmount=function(){Vn.delete(V),Vn.size<1&&(h=Un,T&&T(),T=null,c.value=Un,Le=!1,ve=!1),J()}}};function Tt(V){return V.reduce((X,Q)=>X.then(()=>I(Q)),Promise.resolve())}return Gt}function kP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>ms(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>ms(h,c))||s.push(c))}return[n,r,s]}function DP(t){return tn(Au)}const OP={class:"card"},VP=["src"],NP={__name:"RecipeCard",props:["recipe"],setup(t){return(e,n)=>(Ae(),Ce("div",OP,[ne("img",{src:t.recipe.image,alt:"recipe image"},null,8,VP),ne("h3",null,Qe(t.recipe.title),1),ne("button",{onClick:n[0]||(n[0]=r=>e.$emit("save",t.recipe))},"Save Recipe")]))}},xP=Da(NP,[["__scopeId","data-v-ac5020df"]]),MP={class:"recipes"},LP={__name:"Home",setup(t){const e=Be(""),n=Be([{id:1,title:"Pasta",image:"/images/pasta.jpg"},{id:2,title:"Burger",image:"/images/burger.jpg"}]),r=Be([...n.value]),s=()=>{r.value=n.value.filter(o=>o.title.toLowerCase().includes(e.value.toLowerCase()))},i=async o=>{const l=rs.currentUser;if(!l)return alert("Please login first");await y_(fu(ss,"users",l.uid,"savedRecipes"),o)};return(o,l)=>(Ae(),Ce("div",null,[l[1]||(l[1]=ne("h2",null,"Search Recipes",-1)),zr(ne("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),onInput:s,placeholder:"Search..."},null,544),[[Kr,e.value]]),ne("div",MP,[(Ae(!0),Ce(At,null,hi(r.value,c=>(Ae(),Bp(xP,{key:c.id,recipe:c,onSave:i},null,8,["recipe"]))),128))])]))}},FP={key:0},UP=["src"],BP={key:1},$P={__name:"RecipeDetail",setup(t){const e=DP(),n=Be(null),r=async()=>{const s=Go(ss,"recipes",e.params.id),i=await gb(s);i.exists()?n.value=i.data():console.error("No such recipe!")};return wi(()=>{r()}),(s,i)=>n.value?(Ae(),Ce("div",FP,[ne("h2",null,Qe(n.value.title),1),ne("img",{src:n.value.image,alt:"recipe image"},null,8,UP),i[0]||(i[0]=ne("h3",null,"Ingredients",-1)),ne("ul",null,[(Ae(!0),Ce(At,null,hi(n.value.ingredients,(o,l)=>(Ae(),Ce("li",{key:l},Qe(o.name)+" - "+Qe(o.amount),1))),128))]),ne("p",null,Qe(n.value.instructions),1)])):(Ae(),Ce("div",BP,i[1]||(i[1]=[ne("p",null,"Loading recipe...",-1)])))}},jP=[{path:"/",name:"Home",component:LP},{path:"/recipe/:id",name:"RecipeDetail",component:$P}],HP=CP({history:sP(),routes:jP}),N_=vE(SS);N_.use(HP);N_.mount("#app");
