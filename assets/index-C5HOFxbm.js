(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Jh={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function yM(){if(W_)return ll;W_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return ll.Fragment=e,ll.jsx=n,ll.jsxs=n,ll}var q_;function SM(){return q_||(q_=1,Jh.exports=yM()),Jh.exports}var pe=SM(),$h={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function MM(){if(Y_)return rt;Y_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(I,W,ye){this.props=I,this.context=W,this.refs=M,this.updater=ye||b}y.prototype.isReactComponent={},y.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=y.prototype;function B(I,W,ye){this.props=I,this.context=W,this.refs=M,this.updater=ye||b}var C=B.prototype=new P;C.constructor=B,w(C,y.prototype),C.isPureReactComponent=!0;var U=Array.isArray;function D(){}var N={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(I,W,ye){var Te=ye.ref;return{$$typeof:r,type:I,key:W,ref:Te!==void 0?Te:null,props:ye}}function k(I,W){return L(I.type,W,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function K(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ye){return W[ye]})}var le=/\/+/g;function ue(I,W){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):W.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(D,D):(I.status="pending",I.then(function(W){I.status==="pending"&&(I.status="fulfilled",I.value=W)},function(W){I.status==="pending"&&(I.status="rejected",I.reason=W)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,W,ye,Te,Ne){var ae=typeof I;(ae==="undefined"||ae==="boolean")&&(I=null);var Me=!1;if(I===null)Me=!0;else switch(ae){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(I.$$typeof){case r:case e:Me=!0;break;case g:return Me=I._init,F(Me(I._payload),W,ye,Te,Ne)}}if(Me)return Ne=Ne(I),Me=Te===""?"."+ue(I,0):Te,U(Ne)?(ye="",Me!=null&&(ye=Me.replace(le,"$&/")+"/"),F(Ne,W,ye,"",function(it){return it})):Ne!=null&&(G(Ne)&&(Ne=k(Ne,ye+(Ne.key==null||I&&I.key===Ne.key?"":(""+Ne.key).replace(le,"$&/")+"/")+Me)),W.push(Ne)),1;Me=0;var Ee=Te===""?".":Te+":";if(U(I))for(var He=0;He<I.length;He++)Te=I[He],ae=Ee+ue(Te,He),Me+=F(Te,W,ye,ae,Ne);else if(He=x(I),typeof He=="function")for(I=He.call(I),He=0;!(Te=I.next()).done;)Te=Te.value,ae=Ee+ue(Te,He++),Me+=F(Te,W,ye,ae,Ne);else if(ae==="object"){if(typeof I.then=="function")return F(j(I),W,ye,Te,Ne);throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Me}function H(I,W,ye){if(I==null)return I;var Te=[],Ne=0;return F(I,Te,"","",function(ae){return W.call(ye,ae,Ne++)}),Te}function $(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(ye){(I._status===0||I._status===-1)&&(I._status=1,I._result=ye)},function(ye){(I._status===0||I._status===-1)&&(I._status=2,I._result=ye)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var ge=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ve={map:H,forEach:function(I,W,ye){H(I,function(){W.apply(this,arguments)},ye)},count:function(I){var W=0;return H(I,function(){W++}),W},toArray:function(I){return H(I,function(W){return W})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return rt.Activity=_,rt.Children=ve,rt.Component=y,rt.Fragment=n,rt.Profiler=o,rt.PureComponent=B,rt.StrictMode=a,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,rt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return N.H.useMemoCache(I)}},rt.cache=function(I){return function(){return I.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(I,W,ye){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Te=w({},I.props),Ne=I.key;if(W!=null)for(ae in W.key!==void 0&&(Ne=""+W.key),W)!T.call(W,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&W.ref===void 0||(Te[ae]=W[ae]);var ae=arguments.length-2;if(ae===1)Te.children=ye;else if(1<ae){for(var Me=Array(ae),Ee=0;Ee<ae;Ee++)Me[Ee]=arguments[Ee+2];Te.children=Me}return L(I.type,Ne,Te)},rt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},rt.createElement=function(I,W,ye){var Te,Ne={},ae=null;if(W!=null)for(Te in W.key!==void 0&&(ae=""+W.key),W)T.call(W,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ne[Te]=W[Te]);var Me=arguments.length-2;if(Me===1)Ne.children=ye;else if(1<Me){for(var Ee=Array(Me),He=0;He<Me;He++)Ee[He]=arguments[He+2];Ne.children=Ee}if(I&&I.defaultProps)for(Te in Me=I.defaultProps,Me)Ne[Te]===void 0&&(Ne[Te]=Me[Te]);return L(I,ae,Ne)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(I){return{$$typeof:h,render:I}},rt.isValidElement=G,rt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:$}},rt.memo=function(I,W){return{$$typeof:d,type:I,compare:W===void 0?null:W}},rt.startTransition=function(I){var W=N.T,ye={};N.T=ye;try{var Te=I(),Ne=N.S;Ne!==null&&Ne(ye,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(D,ge)}catch(ae){ge(ae)}finally{W!==null&&ye.types!==null&&(W.types=ye.types),N.T=W}},rt.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},rt.use=function(I){return N.H.use(I)},rt.useActionState=function(I,W,ye){return N.H.useActionState(I,W,ye)},rt.useCallback=function(I,W){return N.H.useCallback(I,W)},rt.useContext=function(I){return N.H.useContext(I)},rt.useDebugValue=function(){},rt.useDeferredValue=function(I,W){return N.H.useDeferredValue(I,W)},rt.useEffect=function(I,W){return N.H.useEffect(I,W)},rt.useEffectEvent=function(I){return N.H.useEffectEvent(I)},rt.useId=function(){return N.H.useId()},rt.useImperativeHandle=function(I,W,ye){return N.H.useImperativeHandle(I,W,ye)},rt.useInsertionEffect=function(I,W){return N.H.useInsertionEffect(I,W)},rt.useLayoutEffect=function(I,W){return N.H.useLayoutEffect(I,W)},rt.useMemo=function(I,W){return N.H.useMemo(I,W)},rt.useOptimistic=function(I,W){return N.H.useOptimistic(I,W)},rt.useReducer=function(I,W,ye){return N.H.useReducer(I,W,ye)},rt.useRef=function(I){return N.H.useRef(I)},rt.useState=function(I){return N.H.useState(I)},rt.useSyncExternalStore=function(I,W,ye){return N.H.useSyncExternalStore(I,W,ye)},rt.useTransition=function(){return N.H.useTransition()},rt.version="19.2.7",rt}var K_;function Bp(){return K_||(K_=1,$h.exports=MM()),$h.exports}var Vt=Bp(),ed={exports:{}},cl={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function bM(){return Z_||(Z_=1,(function(r){function e(F,H){var $=F.length;F.push(H);e:for(;0<$;){var ge=$-1>>>1,ve=F[ge];if(0<o(ve,H))F[ge]=H,F[$]=ve,$=ge;else break e}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;e:for(var ge=0,ve=F.length,I=ve>>>1;ge<I;){var W=2*(ge+1)-1,ye=F[W],Te=W+1,Ne=F[Te];if(0>o(ye,$))Te<ve&&0>o(Ne,ye)?(F[ge]=Ne,F[Te]=$,ge=Te):(F[ge]=ye,F[W]=$,ge=W);else if(Te<ve&&0>o(Ne,$))F[ge]=Ne,F[Te]=$,ge=Te;else break e}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,x=!1,b=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=F)a(d),H.sortIndex=H.expirationTime,e(p,H);else break;H=n(d)}}function U(F){if(w=!1,C(F),!b)if(n(p)!==null)b=!0,D||(D=!0,K());else{var H=n(d);H!==null&&j(U,H.startTime-F)}}var D=!1,N=-1,T=5,L=-1;function k(){return M?!0:!(r.unstable_now()-L<T)}function G(){if(M=!1,D){var F=r.unstable_now();L=F;var H=!0;try{e:{b=!1,w&&(w=!1,P(N),N=-1),x=!0;var $=v;try{t:{for(C(F),_=n(p);_!==null&&!(_.expirationTime>F&&k());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,v=_.priorityLevel;var ve=ge(_.expirationTime<=F);if(F=r.unstable_now(),typeof ve=="function"){_.callback=ve,C(F),H=!0;break t}_===n(p)&&a(p),C(F)}else a(p);_=n(p)}if(_!==null)H=!0;else{var I=n(d);I!==null&&j(U,I.startTime-F),H=!1}}break e}finally{_=null,v=$,x=!1}H=void 0}}finally{H?K():D=!1}}}var K;if(typeof B=="function")K=function(){B(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=G,K=function(){ue.postMessage(null)}}else K=function(){y(G,0)};function j(F,H){N=y(function(){F(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return F()}finally{v=$}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return H()}finally{v=$}},r.unstable_scheduleCallback=function(F,H,$){var ge=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=$+ve,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:ve,sortIndex:-1},$>ge?(F.sortIndex=$,e(d,F),n(p)===null&&F===n(d)&&(w?(P(N),N=-1):w=!0,j(U,$-ge))):(F.sortIndex=ve,e(p,F),b||x||(b=!0,D||(D=!0,K()))),F},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(F){var H=v;return function(){var $=v;v=H;try{return F.apply(this,arguments)}finally{v=$}}}})(nd)),nd}var j_;function EM(){return j_||(j_=1,td.exports=bM()),td.exports}var id={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function TM(){if(Q_)return zn;Q_=1;var r=Bp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},zn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},zn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},zn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},zn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},zn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},zn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},zn.requestFormReset=function(p){a.d.r(p)},zn.unstable_batchedUpdates=function(p,d){return p(d)},zn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.2.7",zn}var J_;function AM(){if(J_)return id.exports;J_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),id.exports=TM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function RM(){if($_)return cl;$_=1;var r=EM(),e=Bp(),n=AM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=m;break}if(R===l){S=!0,l=f,s=m;break}R=R.sibling}if(!S){for(R=m.child;R;){if(R===s){S=!0,s=m,l=f;break}if(R===l){S=!0,l=m,s=f;break}R=R.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),B=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case U:return"Suspense";case D:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case B:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}var j=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],ve=-1;function I(t){return{current:t}}function W(t){0>ve||(t.current=ge[ve],ge[ve]=null,ve--)}function ye(t,i){ve++,ge[ve]=t.current,t.current=i}var Te=I(null),Ne=I(null),ae=I(null),Me=I(null);function Ee(t,i){switch(ye(ae,i),ye(Ne,t),ye(Te,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?p_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=p_(i),t=m_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Te),ye(Te,t)}function He(){W(Te),W(Ne),W(ae)}function it(t){t.memoizedState!==null&&ye(Me,t);var i=Te.current,s=m_(i,t.type);i!==s&&(ye(Ne,t),ye(Te,s))}function Qe(t){Ne.current===t&&(W(Te),W(Ne)),Me.current===t&&(W(Me),al._currentValue=$)}var Qt,dt;function Et(t){if(Qt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qt=i&&i[1]||"",dt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+dt}var Tt=!1;function gt(t,i){if(!t||Tt)return"";Tt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ce){var oe=ce}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ce){oe=ce}t.call(Se.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],R=m[1];if(S&&R){var z=S.split(`
`),te=R.split(`
`);for(f=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;f<te.length&&!te[f].includes("DetermineComponentFrameRoot");)f++;if(l===z.length||f===te.length)for(l=z.length-1,f=te.length-1;1<=l&&0<=f&&z[l]!==te[f];)f--;for(;1<=l&&0<=f;l--,f--)if(z[l]!==te[f]){if(l!==1||f!==1)do if(l--,f--,0>f||z[l]!==te[f]){var me=`
`+z[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{Tt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Et(s):""}function rn(t,i){switch(t.tag){case 26:case 27:case 5:return Et(t.type);case 16:return Et("Lazy");case 13:return t.child!==i&&i!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return Et("Activity");default:return""}}function on(t){try{var i="",s=null;do i+=rn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ln=Object.prototype.hasOwnProperty,hn=r.unstable_scheduleCallback,jt=r.unstable_cancelCallback,cn=r.unstable_shouldYield,Y=r.unstable_requestPaint,kt=r.unstable_now,Dt=r.unstable_getCurrentPriorityLevel,O=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,se=r.unstable_LowPriority,he=r.unstable_IdlePriority,Ae=r.log,De=r.unstable_setDisableYieldValue,fe=null,de=null;function we(t){if(typeof Ae=="function"&&De(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(fe,t)}catch{}}var Fe=Math.clz32?Math.clz32:je,Oe=Math.log,Le=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Oe(t)/Le|0)|0}var Je=256,st=262144,X=4194304;function Re(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~m,l!==0?f=Re(l):(S&=R,S!==0?f=Re(S):s||(s=R&~t,s!==0&&(f=Re(s))))):(R=l&~m,R!==0?f=Re(R):S!==0?f=Re(S):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Be(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function qe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ve(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,i,s,l,f,m){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,te=t.hiddenUpdates;for(s=S&~s;0<s;){var me=31-Fe(s),Se=1<<me;R[me]=0,z[me]=-1;var oe=te[me];if(oe!==null)for(te[me]=null,me=0;me<oe.length;me++){var ce=oe[me];ce!==null&&(ce.lane&=-536870913)}s&=~Se}l!==0&&Ut(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(S&~i))}function Ut(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Fe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ii(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Fe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:vo(s),(s&(t.suspendedLanes|i))!==0?0:s}function vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function xo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:F_(t.type))}function lr(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var Wi=Math.random().toString(36).slice(2),gn="__reactFiber$"+Wi,Un="__reactProps$"+Wi,Zn="__reactContainer$"+Wi,Cs="__reactEvents$"+Wi,Il="__reactListeners$"+Wi,Bl="__reactHandles$"+Wi,Ds="__reactResources$"+Wi,Ya="__reactMarker$"+Wi;function Ka(t){delete t[gn],delete t[Un],delete t[Cs],delete t[Il],delete t[Bl]}function ha(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Zn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=M_(t);t!==null;){if(s=t[gn])return s;t=M_(t)}return i}t=s,s=t.parentNode}return null}function da(t){if(t=t[gn]||t[Zn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ns(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Za(t){var i=t[Ds];return i||(i=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function _n(t){t[Ya]=!0}var Fl=new Set,A={};function q(t,i){re(t,i),re(t+"Capture",i)}function re(t,i){for(A[t]=i,t=0;t<i.length;t++)Fl.add(i[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Pe={};function Ge(t){return ln.call(Pe,t)?!0:ln.call(ie,t)?!1:ne.test(t)?Pe[t]=!0:(ie[t]=!0,!1)}function Ue(t,i,s){if(Ge(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Xe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ke(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,m.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){if(!t._valueTracker){var i=lt(t)?"checked":"value";t._valueTracker=Ke(t,i,""+t[i])}}function tn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=lt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ze(t,i,s,l,f,m,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+$e(i)):t.value!==""+$e(i)&&(t.value=""+$e(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?_t(t,S,$e(i)):s!=null?_t(t,S,$e(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Fn(t,i,s,l,f,m,S,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Rt(t);return}s=s!=null?""+$e(s):"",i=i!=null?""+$e(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Rt(t)}function _t(t,i,s){i==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function bn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+$e(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function si(t,i,s){if(i!=null&&(i=""+$e(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+$e(s):""}function Ni(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(j(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=$e(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Rt(t)}function ri(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var It=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||It.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Li(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&nn(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&nn(t,m,i[m])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ls(t){return ja.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pa(){}var Ku=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cr=null,ur=null;function dm(t){var i=da(t);if(i&&(t=i.stateNode)){var s=t[Un]||null;e:switch(t=i.stateNode,i.type){case"input":if(ze(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Pt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Un]||null;if(!f)throw Error(a(90));ze(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&tn(l)}break e;case"textarea":si(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&bn(t,!!s.multiple,i,!1)}}}var ju=!1;function pm(t,i,s){if(ju)return t(i,s);ju=!0;try{var l=t(i);return l}finally{if(ju=!1,(cr!==null||ur!==null)&&(Tc(),cr&&(i=cr,t=ur,ur=cr=null,dm(i),t)))for(i=0;i<t.length;i++)dm(t[i])}}function So(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Un]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(ma)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Qu=!1}var Qa=null,Ju=null,zl=null;function mm(){if(zl)return zl;var t,i=Ju,s=i.length,l,f="value"in Qa?Qa.value:Qa.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[m-l];l++);return zl=f.slice(t,1<l?1-l:void 0)}function Hl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function gm(){return!1}function jn(t){function i(s,l,f,m,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Gl:gm,this.isPropagationStopped=gm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),i}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=jn(Us),bo=_({},Us,{view:0,detail:0}),vy=jn(bo),$u,ef,Eo,kl=_({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?($u=t.screenX-Eo.screenX,ef=t.screenY-Eo.screenY):ef=$u=0,Eo=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),_m=jn(kl),xy=_({},kl,{dataTransfer:0}),yy=jn(xy),Sy=_({},bo,{relatedTarget:0}),tf=jn(Sy),My=_({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),by=jn(My),Ey=_({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ty=jn(Ey),Ay=_({},Us,{data:0}),vm=jn(Ay),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Cy[t])?!!i[t]:!1}function nf(){return Dy}var Ny=_({},bo,{key:function(t){if(t.key){var i=Ry[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ly=jn(Ny),Uy=_({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=jn(Uy),Oy=_({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),Py=jn(Oy),Iy=_({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),By=jn(Iy),Fy=_({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=jn(Fy),Hy=_({},Us,{newState:0,oldState:0}),Gy=jn(Hy),Vy=[9,13,27,32],af=ma&&"CompositionEvent"in window,To=null;ma&&"documentMode"in document&&(To=document.documentMode);var ky=ma&&"TextEvent"in window&&!To,ym=ma&&(!af||To&&8<To&&11>=To),Sm=" ",Mm=!1;function bm(t,i){switch(t){case"keyup":return Vy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function Xy(t,i){switch(t){case"compositionend":return Em(i);case"keypress":return i.which!==32?null:(Mm=!0,Sm);case"textInput":return t=i.data,t===Sm&&Mm?null:t;default:return null}}function Wy(t,i){if(fr)return t==="compositionend"||!af&&bm(t,i)?(t=mm(),zl=Ju=Qa=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ym&&i.locale!=="ko"?null:i.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!qy[t.type]:i==="textarea"}function Am(t,i,s,l){cr?ur?ur.push(l):ur=[l]:cr=l,i=Lc(i,"onChange"),0<i.length&&(s=new Vl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Ao=null,Ro=null;function Yy(t){l_(t,0)}function Xl(t){var i=Ns(t);if(tn(i))return t}function Rm(t,i){if(t==="change")return i}var wm=!1;if(ma){var sf;if(ma){var rf="oninput"in document;if(!rf){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),rf=typeof Cm.oninput=="function"}sf=rf}else sf=!1;wm=sf&&(!document.documentMode||9<document.documentMode)}function Dm(){Ao&&(Ao.detachEvent("onpropertychange",Nm),Ro=Ao=null)}function Nm(t){if(t.propertyName==="value"&&Xl(Ro)){var i=[];Am(i,Ro,t,Zu(t)),pm(Yy,i)}}function Ky(t,i,s){t==="focusin"?(Dm(),Ao=i,Ro=s,Ao.attachEvent("onpropertychange",Nm)):t==="focusout"&&Dm()}function Zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Ro)}function jy(t,i){if(t==="click")return Xl(i)}function Qy(t,i){if(t==="input"||t==="change")return Xl(i)}function Jy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:Jy;function wo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!ln.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Um(t,i){var s=Lm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Lm(s)}}function Om(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Om(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Kt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Kt(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var $y=ma&&"documentMode"in document&&11>=document.documentMode,hr=null,lf=null,Co=null,cf=!1;function Im(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;cf||hr==null||hr!==Kt(l)||(l=hr,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Co&&wo(Co,l)||(Co=l,l=Lc(lf,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=hr)))}function Os(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var dr={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},uf={},Bm={};ma&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Ps(t){if(uf[t])return uf[t];if(!dr[t])return t;var i=dr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Bm)return uf[t]=i[s];return t}var Fm=Ps("animationend"),zm=Ps("animationiteration"),Hm=Ps("animationstart"),eS=Ps("transitionrun"),tS=Ps("transitionstart"),nS=Ps("transitioncancel"),Gm=Ps("transitionend"),Vm=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Ui(t,i){Vm.set(t,i),q(i,[t])}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],pr=0,hf=0;function ql(){for(var t=pr,i=hf=pr=0;i<t;){var s=xi[i];xi[i++]=null;var l=xi[i];xi[i++]=null;var f=xi[i];xi[i++]=null;var m=xi[i];if(xi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}m!==0&&km(s,f,m)}}function Yl(t,i,s,l){xi[pr++]=t,xi[pr++]=i,xi[pr++]=s,xi[pr++]=l,hf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function df(t,i,s,l){return Yl(t,i,s,l),Kl(t)}function Is(t,i){return Yl(t,null,null,i),Kl(t)}function km(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Fe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Kl(t){if(50<Qo)throw Qo=0,Mh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var mr={};function iS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,l){return new iS(t,i,s,l)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Xm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zl(t,i,s,l,f,m){var S=0;if(l=t,typeof t=="function")pf(t)&&(S=1);else if(typeof t=="string")S=lM(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=li(31,s,i,f),t.elementType=L,t.lanes=m,t;case w:return Bs(s.children,f,m,i);case M:S=8,f|=24;break;case y:return t=li(12,s,i,f|2),t.elementType=y,t.lanes=m,t;case U:return t=li(13,s,i,f),t.elementType=U,t.lanes=m,t;case D:return t=li(19,s,i,f),t.elementType=D,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:S=10;break e;case P:S=9;break e;case C:S=11;break e;case N:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=li(S,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Bs(t,i,s,l){return t=li(7,t,l,i),t.lanes=s,t}function mf(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Wm(t){var i=li(18,null,null,0);return i.stateNode=t,i}function gf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var qm=new WeakMap;function yi(t,i){if(typeof t=="object"&&t!==null){var s=qm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:on(i)},qm.set(t,i),i)}return{value:t,source:i,stack:on(i)}}var gr=[],_r=0,jl=null,Do=0,Si=[],Mi=0,Ja=null,Yi=1,Ki="";function _a(t,i){gr[_r++]=Do,gr[_r++]=jl,jl=t,Do=i}function Ym(t,i,s){Si[Mi++]=Yi,Si[Mi++]=Ki,Si[Mi++]=Ja,Ja=t;var l=Yi;t=Ki;var f=32-Fe(l)-1;l&=~(1<<f),s+=1;var m=32-Fe(i)+f;if(30<m){var S=f-f%5;m=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Yi=1<<32-Fe(i)+f|s<<f|l,Ki=m+t}else Yi=1<<m|s<<f|l,Ki=t}function _f(t){t.return!==null&&(_a(t,1),Ym(t,1,0))}function vf(t){for(;t===jl;)jl=gr[--_r],gr[_r]=null,Do=gr[--_r],gr[_r]=null;for(;t===Ja;)Ja=Si[--Mi],Si[Mi]=null,Ki=Si[--Mi],Si[Mi]=null,Yi=Si[--Mi],Si[Mi]=null}function Km(t,i){Si[Mi++]=Yi,Si[Mi++]=Ki,Si[Mi++]=Ja,Yi=i.id,Ki=i.overflow,Ja=t}var On=null,Jt=null,At=!1,$a=null,bi=!1,xf=Error(a(519));function es(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(yi(i,t)),xf}function Zm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[Un]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<$o.length;s++)xt($o[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),Fn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Ni(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||h_(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=pa),i=!0):i=!1,i||es(t,!0)}function jm(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:On=On.return}}function vr(t){if(t!==On)return!1;if(!At)return jm(t),At=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Bh(t.type,t.memoizedProps)),s=!s),s&&Jt&&es(t),jm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=S_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=S_(t)}else i===27?(i=Jt,ps(t.type)?(t=Vh,Vh=null,Jt=t):Jt=i):Jt=On?Ti(t.stateNode.nextSibling):null;return!0}function Fs(){Jt=On=null,At=!1}function yf(){var t=$a;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),$a=null),t}function No(t){$a===null?$a=[t]:$a.push(t)}var Sf=I(null),zs=null,va=null;function ts(t,i,s){ye(Sf,i._currentValue),i._currentValue=s}function xa(t){t._currentValue=Sf.current,W(Sf)}function Mf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function bf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=f;for(var z=0;z<i.length;z++)if(R.context===i[z]){m.lanes|=s,R=m.alternate,R!==null&&(R.lanes|=s),Mf(m.return,s,t),l||(S=null);break e}m=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),Mf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function xr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var R=f.type;oi(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===Me.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(al):t=[al])}f=f.return}t!==null&&bf(i,t,s,l),i.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hs(t){zs=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return Qm(zs,t)}function Jl(t,i){return zs===null&&Hs(t),Qm(t,i)}function Qm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},va===null){if(t===null)throw Error(a(308));va=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else va=va.next=i;return s}var aS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},sS=r.unstable_scheduleCallback,rS=r.unstable_NormalPriority,vn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new aS,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&sS(rS,function(){t.controller.abort()})}var Uo=null,Tf=0,yr=0,Sr=null;function oS(t,i){if(Uo===null){var s=Uo=[];Tf=0,yr=wh(),Sr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Tf++,i.then(Jm,Jm),i}function Jm(){if(--Tf===0&&Uo!==null){Sr!==null&&(Sr.status="fulfilled");var t=Uo;Uo=null,yr=0,Sr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function lS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var $m=F.S;F.S=function(t,i){I0=kt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&oS(t,i),$m!==null&&$m(t,i)};var Gs=I(null);function Af(){var t=Gs.current;return t!==null?t:Zt.pooledCache}function $l(t,i){i===null?ye(Gs,Gs.current):ye(Gs,i.pool)}function eg(){var t=Af();return t===null?null:{parent:vn._currentValue,pool:t}}var Mr=Error(a(460)),Rf=Error(a(474)),ec=Error(a(542)),tc={then:function(){}};function tg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ng(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(pa,pa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ag(t),t;default:if(typeof i.status=="string")i.then(pa,pa);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ag(t),t}throw ks=i,Mr}}function Vs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ks=s,Mr):s}}var ks=null;function ig(){if(ks===null)throw Error(a(459));var t=ks;return ks=null,t}function ag(t){if(t===Mr||t===ec)throw Error(a(483))}var br=null,Oo=0;function nc(t){var i=Oo;return Oo+=1,br===null&&(br=[]),ng(br,t,i)}function Po(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ic(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function sg(t){function i(Z,V){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[V],Z.flags|=16):ee.push(V)}}function s(Z,V){if(!t)return null;for(;V!==null;)i(Z,V),V=V.sibling;return null}function l(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function f(Z,V){return Z=ga(Z,V),Z.index=0,Z.sibling=null,Z}function m(Z,V,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<V?(Z.flags|=67108866,V):ee):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,V,ee,xe){return V===null||V.tag!==6?(V=mf(ee,Z.mode,xe),V.return=Z,V):(V=f(V,ee),V.return=Z,V)}function z(Z,V,ee,xe){var et=ee.type;return et===w?me(Z,V,ee.props.children,xe,ee.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Vs(et)===V.type)?(V=f(V,ee.props),Po(V,ee),V.return=Z,V):(V=Zl(ee.type,ee.key,ee.props,null,Z.mode,xe),Po(V,ee),V.return=Z,V)}function te(Z,V,ee,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=gf(ee,Z.mode,xe),V.return=Z,V):(V=f(V,ee.children||[]),V.return=Z,V)}function me(Z,V,ee,xe,et){return V===null||V.tag!==7?(V=Bs(ee,Z.mode,xe,et),V.return=Z,V):(V=f(V,ee),V.return=Z,V)}function Se(Z,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=mf(""+V,Z.mode,ee),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return ee=Zl(V.type,V.key,V.props,null,Z.mode,ee),Po(ee,V),ee.return=Z,ee;case b:return V=gf(V,Z.mode,ee),V.return=Z,V;case T:return V=Vs(V),Se(Z,V,ee)}if(j(V)||K(V))return V=Bs(V,Z.mode,ee,null),V.return=Z,V;if(typeof V.then=="function")return Se(Z,nc(V),ee);if(V.$$typeof===B)return Se(Z,Jl(Z,V),ee);ic(Z,V)}return null}function oe(Z,V,ee,xe){var et=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(Z,V,""+ee,xe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case x:return ee.key===et?z(Z,V,ee,xe):null;case b:return ee.key===et?te(Z,V,ee,xe):null;case T:return ee=Vs(ee),oe(Z,V,ee,xe)}if(j(ee)||K(ee))return et!==null?null:me(Z,V,ee,xe,null);if(typeof ee.then=="function")return oe(Z,V,nc(ee),xe);if(ee.$$typeof===B)return oe(Z,V,Jl(Z,ee),xe);ic(Z,ee)}return null}function ce(Z,V,ee,xe,et){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Z=Z.get(ee)||null,R(V,Z,""+xe,et);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case x:return Z=Z.get(xe.key===null?ee:xe.key)||null,z(V,Z,xe,et);case b:return Z=Z.get(xe.key===null?ee:xe.key)||null,te(V,Z,xe,et);case T:return xe=Vs(xe),ce(Z,V,ee,xe,et)}if(j(xe)||K(xe))return Z=Z.get(ee)||null,me(V,Z,xe,et,null);if(typeof xe.then=="function")return ce(Z,V,ee,nc(xe),et);if(xe.$$typeof===B)return ce(Z,V,ee,Jl(V,xe),et);ic(V,xe)}return null}function We(Z,V,ee,xe){for(var et=null,wt=null,Ye=V,ut=V=0,bt=null;Ye!==null&&ut<ee.length;ut++){Ye.index>ut?(bt=Ye,Ye=null):bt=Ye.sibling;var Ct=oe(Z,Ye,ee[ut],xe);if(Ct===null){Ye===null&&(Ye=bt);break}t&&Ye&&Ct.alternate===null&&i(Z,Ye),V=m(Ct,V,ut),wt===null?et=Ct:wt.sibling=Ct,wt=Ct,Ye=bt}if(ut===ee.length)return s(Z,Ye),At&&_a(Z,ut),et;if(Ye===null){for(;ut<ee.length;ut++)Ye=Se(Z,ee[ut],xe),Ye!==null&&(V=m(Ye,V,ut),wt===null?et=Ye:wt.sibling=Ye,wt=Ye);return At&&_a(Z,ut),et}for(Ye=l(Ye);ut<ee.length;ut++)bt=ce(Ye,Z,ut,ee[ut],xe),bt!==null&&(t&&bt.alternate!==null&&Ye.delete(bt.key===null?ut:bt.key),V=m(bt,V,ut),wt===null?et=bt:wt.sibling=bt,wt=bt);return t&&Ye.forEach(function(xs){return i(Z,xs)}),At&&_a(Z,ut),et}function tt(Z,V,ee,xe){if(ee==null)throw Error(a(151));for(var et=null,wt=null,Ye=V,ut=V=0,bt=null,Ct=ee.next();Ye!==null&&!Ct.done;ut++,Ct=ee.next()){Ye.index>ut?(bt=Ye,Ye=null):bt=Ye.sibling;var xs=oe(Z,Ye,Ct.value,xe);if(xs===null){Ye===null&&(Ye=bt);break}t&&Ye&&xs.alternate===null&&i(Z,Ye),V=m(xs,V,ut),wt===null?et=xs:wt.sibling=xs,wt=xs,Ye=bt}if(Ct.done)return s(Z,Ye),At&&_a(Z,ut),et;if(Ye===null){for(;!Ct.done;ut++,Ct=ee.next())Ct=Se(Z,Ct.value,xe),Ct!==null&&(V=m(Ct,V,ut),wt===null?et=Ct:wt.sibling=Ct,wt=Ct);return At&&_a(Z,ut),et}for(Ye=l(Ye);!Ct.done;ut++,Ct=ee.next())Ct=ce(Ye,Z,ut,Ct.value,xe),Ct!==null&&(t&&Ct.alternate!==null&&Ye.delete(Ct.key===null?ut:Ct.key),V=m(Ct,V,ut),wt===null?et=Ct:wt.sibling=Ct,wt=Ct);return t&&Ye.forEach(function(xM){return i(Z,xM)}),At&&_a(Z,ut),et}function qt(Z,V,ee,xe){if(typeof ee=="object"&&ee!==null&&ee.type===w&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case x:e:{for(var et=ee.key;V!==null;){if(V.key===et){if(et=ee.type,et===w){if(V.tag===7){s(Z,V.sibling),xe=f(V,ee.props.children),xe.return=Z,Z=xe;break e}}else if(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Vs(et)===V.type){s(Z,V.sibling),xe=f(V,ee.props),Po(xe,ee),xe.return=Z,Z=xe;break e}s(Z,V);break}else i(Z,V);V=V.sibling}ee.type===w?(xe=Bs(ee.props.children,Z.mode,xe,ee.key),xe.return=Z,Z=xe):(xe=Zl(ee.type,ee.key,ee.props,null,Z.mode,xe),Po(xe,ee),xe.return=Z,Z=xe)}return S(Z);case b:e:{for(et=ee.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){s(Z,V.sibling),xe=f(V,ee.children||[]),xe.return=Z,Z=xe;break e}else{s(Z,V);break}else i(Z,V);V=V.sibling}xe=gf(ee,Z.mode,xe),xe.return=Z,Z=xe}return S(Z);case T:return ee=Vs(ee),qt(Z,V,ee,xe)}if(j(ee))return We(Z,V,ee,xe);if(K(ee)){if(et=K(ee),typeof et!="function")throw Error(a(150));return ee=et.call(ee),tt(Z,V,ee,xe)}if(typeof ee.then=="function")return qt(Z,V,nc(ee),xe);if(ee.$$typeof===B)return qt(Z,V,Jl(Z,ee),xe);ic(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(s(Z,V.sibling),xe=f(V,ee),xe.return=Z,Z=xe):(s(Z,V),xe=mf(ee,Z.mode,xe),xe.return=Z,Z=xe),S(Z)):s(Z,V)}return function(Z,V,ee,xe){try{Oo=0;var et=qt(Z,V,ee,xe);return br=null,et}catch(Ye){if(Ye===Mr||Ye===ec)throw Ye;var wt=li(29,Ye,null,Z.mode);return wt.lanes=xe,wt.return=Z,wt}finally{}}}var Xs=sg(!0),rg=sg(!1),ns=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function is(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function as(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Nt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Kl(t),km(t,null,s),i}return Yl(t,l,i,s),Kl(t)}function Io(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ii(t,s)}}function Df(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Nf=!1;function Bo(){if(Nf){var t=Sr;if(t!==null)throw t}}function Fo(t,i,s,l){Nf=!1;var f=t.updateQueue;ns=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var z=R,te=z.next;z.next=null,S===null?m=te:S.next=te,S=z;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==S&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=z))}if(m!==null){var Se=f.baseState;S=0,me=te=z=null,R=m;do{var oe=R.lane&-536870913,ce=oe!==R.lane;if(ce?(Mt&oe)===oe:(l&oe)===oe){oe!==0&&oe===yr&&(Nf=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,tt=R;oe=i;var qt=s;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){Se=We.call(qt,Se,oe);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,oe=typeof We=="function"?We.call(qt,Se,oe):We,oe==null)break e;Se=_({},Se,oe);break e;case 2:ns=!0}}oe=R.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=ce,z=Se):me=me.next=ce,S|=oe;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);me===null&&(z=Se),f.baseState=z,f.firstBaseUpdate=te,f.lastBaseUpdate=me,m===null&&(f.shared.lanes=0),cs|=S,t.lanes=S,t.memoizedState=Se}}function og(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function lg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)og(s[t],i)}var Er=I(null),ac=I(0);function cg(t,i){t=wa,ye(ac,t),ye(Er,i),wa=t|i.baseLanes}function Lf(){ye(ac,wa),ye(Er,Er.current)}function Uf(){wa=ac.current,W(Er),W(ac)}var ci=I(null),Ei=null;function ss(t){var i=t.alternate;ye(dn,dn.current&1),ye(ci,t),Ei===null&&(i===null||Er.current!==null||i.memoizedState!==null)&&(Ei=t)}function Of(t){ye(dn,dn.current),ye(ci,t),Ei===null&&(Ei=t)}function ug(t){t.tag===22?(ye(dn,dn.current),ye(ci,t),Ei===null&&(Ei=t)):rs()}function rs(){ye(dn,dn.current),ye(ci,ci.current)}function ui(t){W(ci),Ei===t&&(Ei=null),W(dn)}var dn=I(0);function sc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Hh(s)||Gh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ya=0,ct=null,Xt=null,xn=null,rc=!1,Tr=!1,Ws=!1,oc=0,zo=0,Ar=null,cS=0;function un(){throw Error(a(321))}function Pf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function If(t,i,s,l,f,m){return ya=m,ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?Yg:Qf,Ws=!1,m=s(l,f),Ws=!1,Tr&&(m=hg(i,s,l,f)),fg(t),m}function fg(t){F.H=Vo;var i=Xt!==null&&Xt.next!==null;if(ya=0,xn=Xt=ct=null,rc=!1,zo=0,Ar=null,i)throw Error(a(300));t===null||yn||(t=t.dependencies,t!==null&&Ql(t)&&(yn=!0))}function hg(t,i,s,l){ct=t;var f=0;do{if(Tr&&(Ar=null),zo=0,Tr=!1,25<=f)throw Error(a(301));if(f+=1,xn=Xt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Kg,m=i(s,l)}while(Tr);return m}function uS(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?Ho(i):i,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ct.flags|=1024),i}function Bf(){var t=oc!==0;return oc=0,t}function Ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function zf(t){if(rc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}rc=!1}ya=0,xn=Xt=ct=null,Tr=!1,zo=oc=0,Ar=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?ct.memoizedState=xn=t:xn=xn.next=t,xn}function pn(){if(Xt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=xn===null?ct.memoizedState:xn.next;if(i!==null)xn=i,Xt=t;else{if(t===null)throw ct.alternate===null?Error(a(467)):Error(a(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},xn===null?ct.memoizedState=xn=t:xn=xn.next=t}return xn}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(t){var i=zo;return zo+=1,Ar===null&&(Ar=[]),t=ng(Ar,t,i),i=ct,(xn===null?i.memoizedState:xn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Yg:Qf),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===B)return Pn(t)}throw Error(a(438,String(t)))}function Hf(t){var i=null,s=ct.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=lc(),ct.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=k;return i.index++,s}function Sa(t,i){return typeof i=="function"?i(t):i}function uc(t){var i=pn();return Gf(i,Xt,t)}function Gf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var R=S=null,z=null,te=i,me=!1;do{var Se=te.lane&-536870913;if(Se!==te.lane?(Mt&Se)===Se:(ya&Se)===Se){var oe=te.revertLane;if(oe===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Se===yr&&(me=!0);else if((ya&oe)===oe){te=te.next,oe===yr&&(me=!0);continue}else Se={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=Se,S=m):z=z.next=Se,ct.lanes|=oe,cs|=oe;Se=te.action,Ws&&s(m,Se),m=te.hasEagerState?te.eagerState:s(m,Se)}else oe={lane:Se,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=oe,S=m):z=z.next=oe,ct.lanes|=Se,cs|=Se;te=te.next}while(te!==null&&te!==i);if(z===null?S=m:z.next=R,!oi(m,t.memoizedState)&&(yn=!0,me&&(s=Sr,s!==null)))throw s;t.memoizedState=m,t.baseState=S,t.baseQueue=z,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=pn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do m=t(m,S.action),S=S.next;while(S!==f);oi(m,i.memoizedState)||(yn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function dg(t,i,s){var l=ct,f=pn(),m=At;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!oi((Xt||f).memoizedState,s);if(S&&(f.memoizedState=s,yn=!0),f=f.queue,Wf(gg.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,Rr(9,{destroy:void 0},mg.bind(null,l,f,s,i),null),Zt===null)throw Error(a(349));m||(ya&127)!==0||pg(l,i,s)}return s}function pg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ct.updateQueue,i===null?(i=lc(),ct.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function mg(t,i,s,l){i.value=s,i.getSnapshot=l,_g(i)&&vg(t)}function gg(t,i,s){return s(function(){_g(i)&&vg(t)})}function _g(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function vg(t){var i=Is(t,2);i!==null&&ti(i,t,2)}function kf(t){var i=Vn();if(typeof t=="function"){var s=t;if(t=s(),Ws){we(!0);try{s()}finally{we(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},i}function xg(t,i,s,l){return t.baseState=s,Gf(t,Xt,typeof l=="function"?l:Sa)}function fS(t,i,s,l,f){if(dc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,yg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function yg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=F.T,S={};F.T=S;try{var R=s(f,l),z=F.S;z!==null&&z(S,R),Sg(t,i,R)}catch(te){Xf(t,i,te)}finally{m!==null&&S.types!==null&&(m.types=S.types),F.T=m}}else try{m=s(f,l),Sg(t,i,m)}catch(te){Xf(t,i,te)}}function Sg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Mg(t,i,l)},function(l){return Xf(t,i,l)}):Mg(t,i,s)}function Mg(t,i,s){i.status="fulfilled",i.value=s,bg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,yg(t,s)))}function Xf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,bg(i),i=i.next;while(i!==l)}t.action=null}function bg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Eg(t,i){return i}function Tg(t,i){if(At){var s=Zt.formState;if(s!==null){e:{var l=ct;if(At){if(Jt){t:{for(var f=Jt,m=bi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ti(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Jt=Ti(f.nextSibling),l=f.data==="F!";break e}}es(l)}l=!1}l&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eg,lastRenderedState:i},s.queue=l,s=Xg.bind(null,ct,l),l.dispatch=s,l=kf(!1),m=jf.bind(null,ct,!1,l.queue),l=Vn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=fS.bind(null,ct,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Ag(t){var i=pn();return Rg(i,Xt,t)}function Rg(t,i,s){if(i=Gf(t,i,Eg)[0],t=uc(Sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ho(i)}catch(S){throw S===Mr?ec:S}else l=i;i=pn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ct.flags|=2048,Rr(9,{destroy:void 0},hS.bind(null,f,s),null)),[l,m,t]}function hS(t,i){t.action=i}function wg(t){var i=pn(),s=Xt;if(s!==null)return Rg(i,s,t);pn(),i=i.memoizedState,s=pn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Rr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ct.updateQueue,i===null&&(i=lc(),ct.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Cg(){return pn().memoizedState}function fc(t,i,s,l){var f=Vn();ct.flags|=t,f.memoizedState=Rr(1|i,{destroy:void 0},s,l===void 0?null:l)}function hc(t,i,s,l){var f=pn();l=l===void 0?null:l;var m=f.memoizedState.inst;Xt!==null&&l!==null&&Pf(l,Xt.memoizedState.deps)?f.memoizedState=Rr(i,m,s,l):(ct.flags|=t,f.memoizedState=Rr(1|i,m,s,l))}function Dg(t,i){fc(8390656,8,t,i)}function Wf(t,i){hc(2048,8,t,i)}function dS(t){ct.flags|=4;var i=ct.updateQueue;if(i===null)i=lc(),ct.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Ng(t){var i=pn().memoizedState;return dS({ref:i,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Lg(t,i){return hc(4,2,t,i)}function Ug(t,i){return hc(4,4,t,i)}function Og(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Pg(t,i,s){s=s!=null?s.concat([t]):null,hc(4,4,Og.bind(null,i,t),s)}function qf(){}function Ig(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Pf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Bg(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Pf(i,l[1]))return l[0];if(l=t(),Ws){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,i],l}function Yf(t,i,s){return s===void 0||(ya&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=F0(),ct.lanes|=t,cs|=t,s)}function Fg(t,i,s,l){return oi(s,i)?s:Er.current!==null?(t=Yf(t,s,l),oi(t,i)||(yn=!0),t):(ya&42)===0||(ya&1073741824)!==0&&(Mt&261930)===0?(yn=!0,t.memoizedState=s):(t=F0(),ct.lanes|=t,cs|=t,i)}function zg(t,i,s,l,f){var m=H.p;H.p=m!==0&&8>m?m:8;var S=F.T,R={};F.T=R,jf(t,!1,i,s);try{var z=f(),te=F.S;if(te!==null&&te(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var me=lS(z,l);Go(t,i,me,di(t))}else Go(t,i,l,di(t))}catch(Se){Go(t,i,{then:function(){},status:"rejected",reason:Se},di())}finally{H.p=m,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function pS(){}function Kf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Hg(t).queue;zg(t,f,i,$,s===null?pS:function(){return Gg(t),s(l)})}function Hg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:$},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Gg(t){var i=Hg(t);i.next===null&&(i=t.alternate.memoizedState),Go(t,i.next.queue,{},di())}function Zf(){return Pn(al)}function Vg(){return pn().memoizedState}function kg(){return pn().memoizedState}function mS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();t=is(s);var l=as(i,t,s);l!==null&&(ti(l,i,s),Io(l,i,s)),i={cache:Ef()},t.payload=i;return}i=i.return}}function gS(t,i,s){var l=di();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dc(t)?Wg(i,s):(s=df(t,i,s,l),s!==null&&(ti(s,t,l),qg(s,i,l)))}function Xg(t,i,s){var l=di();Go(t,i,s,l)}function Go(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(dc(t))Wg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,R=m(S,s);if(f.hasEagerState=!0,f.eagerState=R,oi(R,S))return Yl(t,i,f,0),Zt===null&&ql(),!1}catch{}finally{}if(s=df(t,i,f,l),s!==null)return ti(s,t,l),qg(s,i,l),!0}return!1}function jf(t,i,s,l){if(l={lane:2,revertLane:wh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},dc(t)){if(i)throw Error(a(479))}else i=df(t,s,l,2),i!==null&&ti(i,t,2)}function dc(t){var i=t.alternate;return t===ct||i!==null&&i===ct}function Wg(t,i){Tr=rc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function qg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ii(t,s)}}var Vo={readContext:Pn,use:cc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Vo.useEffectEvent=un;var Yg={readContext:Pn,use:cc,useCallback:function(t,i){return Vn().memoizedState=[t,i===void 0?null:i],t},useContext:Pn,useEffect:Dg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,fc(4194308,4,Og.bind(null,i,t),s)},useLayoutEffect:function(t,i){return fc(4194308,4,t,i)},useInsertionEffect:function(t,i){fc(4,2,t,i)},useMemo:function(t,i){var s=Vn();i=i===void 0?null:i;var l=t();if(Ws){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Vn();if(s!==void 0){var f=s(i);if(Ws){we(!0);try{s(i)}finally{we(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=gS.bind(null,ct,t),[l.memoizedState,t]},useRef:function(t){var i=Vn();return t={current:t},i.memoizedState=t},useState:function(t){t=kf(t);var i=t.queue,s=Xg.bind(null,ct,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,i){var s=Vn();return Yf(s,t,i)},useTransition:function(){var t=kf(!1);return t=zg.bind(null,ct,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ct,f=Vn();if(At){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Zt===null)throw Error(a(349));(Mt&127)!==0||pg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Dg(gg.bind(null,l,m,t),[t]),l.flags|=2048,Rr(9,{destroy:void 0},mg.bind(null,l,m,s,i),null),s},useId:function(){var t=Vn(),i=Zt.identifierPrefix;if(At){var s=Ki,l=Yi;s=(l&~(1<<32-Fe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=oc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=cS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Zf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t){var i=Vn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=jf.bind(null,ct,!0,s),s.dispatch=i,[t,i]},useMemoCache:Hf,useCacheRefresh:function(){return Vn().memoizedState=mS.bind(null,ct)},useEffectEvent:function(t){var i=Vn(),s={impl:t};return i.memoizedState=s,function(){if((Nt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Qf={readContext:Pn,use:cc,useCallback:Ig,useContext:Pn,useEffect:Wf,useImperativeHandle:Pg,useInsertionEffect:Lg,useLayoutEffect:Ug,useMemo:Bg,useReducer:uc,useRef:Cg,useState:function(){return uc(Sa)},useDebugValue:qf,useDeferredValue:function(t,i){var s=pn();return Fg(s,Xt.memoizedState,t,i)},useTransition:function(){var t=uc(Sa)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:Ho(t),i]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Zf,useFormState:Ag,useActionState:Ag,useOptimistic:function(t,i){var s=pn();return xg(s,Xt,t,i)},useMemoCache:Hf,useCacheRefresh:kg};Qf.useEffectEvent=Ng;var Kg={readContext:Pn,use:cc,useCallback:Ig,useContext:Pn,useEffect:Wf,useImperativeHandle:Pg,useInsertionEffect:Lg,useLayoutEffect:Ug,useMemo:Bg,useReducer:Vf,useRef:Cg,useState:function(){return Vf(Sa)},useDebugValue:qf,useDeferredValue:function(t,i){var s=pn();return Xt===null?Yf(s,t,i):Fg(s,Xt.memoizedState,t,i)},useTransition:function(){var t=Vf(Sa)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:Ho(t),i]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Zf,useFormState:wg,useActionState:wg,useOptimistic:function(t,i){var s=pn();return Xt!==null?xg(s,Xt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:kg};Kg.useEffectEvent=Ng;function Jf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var $f={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=di(),f=is(l);f.payload=i,s!=null&&(f.callback=s),i=as(t,f,l),i!==null&&(ti(i,t,l),Io(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=di(),f=is(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=as(t,f,l),i!==null&&(ti(i,t,l),Io(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=di(),l=is(s);l.tag=2,i!=null&&(l.callback=i),i=as(t,l,s),i!==null&&(ti(i,t,s),Io(i,t,s))}};function Zg(t,i,s,l,f,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!wo(s,l)||!wo(f,m):!0}function jg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&$f.enqueueReplaceState(i,i.state,null)}function qs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Qg(t){Wl(t)}function Jg(t){console.error(t)}function $g(t){Wl(t)}function pc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function e0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function eh(t,i,s){return s=is(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(t,i)},s}function t0(t){return t=is(t),t.tag=3,t}function n0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){e0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){e0(i,s,l),typeof f!="function"&&(us===null?us=new Set([this]):us.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function _S(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&xr(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Ei===null?Ac():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===tc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Th(t,l,f)),!1;case 22:return s.flags|=65536,l===tc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Th(t,l,f)),!1}throw Error(a(435,s.tag))}return Th(t,l,f),Ac(),!1}if(At)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==xf&&(t=Error(a(422),{cause:l}),No(yi(t,s)))):(l!==xf&&(i=Error(a(423),{cause:l}),No(yi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=yi(l,s),f=eh(t.stateNode,l,f),Df(t,f),fn!==4&&(fn=2)),!1;var m=Error(a(520),{cause:l});if(m=yi(m,s),jo===null?jo=[m]:jo.push(m),fn!==4&&(fn=2),i===null)return!0;l=yi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=eh(s.stateNode,l,t),Df(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(us===null||!us.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=t0(f),n0(f,t,s,l),Df(s,f),!1}s=s.return}while(s!==null);return!1}var th=Error(a(461)),yn=!1;function In(t,i,s,l){i.child=t===null?rg(i,null,s,l):Xs(i,t.child,s,l)}function i0(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return Hs(i),l=If(t,i,s,S,m,f),R=Bf(),t!==null&&!yn?(Ff(t,i,f),Ma(t,i,f)):(At&&R&&_f(i),i.flags|=1,In(t,i,l,f),i.child)}function a0(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!pf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,s0(t,i,m,l,f)):(t=Zl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!ch(t,f)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:wo,s(S,l)&&t.ref===i.ref)return Ma(t,i,f)}return i.flags|=1,t=ga(m,l),t.ref=i.ref,t.return=i,i.child=t}function s0(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(wo(m,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=m,ch(t,f))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ma(t,i,f)}return nh(t,i,s,l,f)}function r0(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return o0(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(i,m!==null?m.cachePool:null),m!==null?cg(i,m):Lf(),ug(i);else return l=i.lanes=536870912,o0(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?($l(i,m.cachePool),cg(i,m),rs(),i.memoizedState=null):(t!==null&&$l(i,null),Lf(),rs());return In(t,i,f,s),i.child}function ko(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function o0(t,i,s,l,f){var m=Af();return m=m===null?null:{parent:vn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&$l(i,null),Lf(),ug(i),t!==null&&xr(t,i,l,!0),i.childLanes=f,null}function mc(t,i){return i=_c({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function l0(t,i,s){return Xs(i,t.child,null,s),t=mc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function vS(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(At){if(l.mode==="hidden")return t=mc(i,l),i.lanes=536870912,ko(null,t);if(Of(i),(t=Jt)?(t=y_(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},s=Wm(t),s.return=i,i.child=s,On=i,Jt=null)):t=null,t===null)throw es(i);return i.lanes=536870912,null}return mc(i,l)}var m=t.memoizedState;if(m!==null){var S=m.dehydrated;if(Of(i),f)if(i.flags&256)i.flags&=-257,i=l0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(yn||xr(t,i,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=Zt,l!==null&&(S=ai(l,s),S!==0&&S!==m.retryLane))throw m.retryLane=S,Is(t,S),ti(l,t,S),th;Ac(),i=l0(t,i,s)}else t=m.treeContext,Jt=Ti(S.nextSibling),On=i,At=!0,$a=null,bi=!1,t!==null&&Km(i,t),i=mc(i,l),i.flags|=4096;return i}return t=ga(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function gc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function nh(t,i,s,l,f){return Hs(i),s=If(t,i,s,l,void 0,f),l=Bf(),t!==null&&!yn?(Ff(t,i,f),Ma(t,i,f)):(At&&l&&_f(i),i.flags|=1,In(t,i,s,f),i.child)}function c0(t,i,s,l,f,m){return Hs(i),i.updateQueue=null,s=hg(i,l,s,f),fg(t),l=Bf(),t!==null&&!yn?(Ff(t,i,m),Ma(t,i,m)):(At&&l&&_f(i),i.flags|=1,In(t,i,s,m),i.child)}function u0(t,i,s,l,f){if(Hs(i),i.stateNode===null){var m=mr,S=s.contextType;typeof S=="object"&&S!==null&&(m=Pn(S)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$f,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},wf(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?Pn(S):mr,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Jf(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&$f.enqueueReplaceState(m,m.state,null),Fo(i,l,m,f),Bo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var R=i.memoizedProps,z=qs(s,R);m.props=z;var te=m.context,me=s.contextType;S=mr,typeof me=="object"&&me!==null&&(S=Pn(me));var Se=s.getDerivedStateFromProps;me=typeof Se=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||te!==S)&&jg(i,m,l,S),ns=!1;var oe=i.memoizedState;m.state=oe,Fo(i,l,m,f),Bo(),te=i.memoizedState,R||oe!==te||ns?(typeof Se=="function"&&(Jf(i,s,Se,l),te=i.memoizedState),(z=ns||Zg(i,s,z,l,oe,te,S))?(me||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),m.props=l,m.state=te,m.context=S,l=z):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Cf(t,i),S=i.memoizedProps,me=qs(s,S),m.props=me,Se=i.pendingProps,oe=m.context,te=s.contextType,z=mr,typeof te=="object"&&te!==null&&(z=Pn(te)),R=s.getDerivedStateFromProps,(te=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==Se||oe!==z)&&jg(i,m,l,z),ns=!1,oe=i.memoizedState,m.state=oe,Fo(i,l,m,f),Bo();var ce=i.memoizedState;S!==Se||oe!==ce||ns||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof R=="function"&&(Jf(i,s,R,l),ce=i.memoizedState),(me=ns||Zg(i,s,me,l,oe,ce,z)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ce,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ce,z)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),m.props=l,m.state=ce,m.context=z,l=me):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,gc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Xs(i,t.child,null,f),i.child=Xs(i,null,s,f)):In(t,i,s,f),i.memoizedState=m.state,t=i.child):t=Ma(t,i,f),t}function f0(t,i,s,l){return Fs(),i.flags|=256,In(t,i,s,l),i.child}var ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ah(t){return{baseLanes:t,cachePool:eg()}}function sh(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=hi),t}function h0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(At){if(f?ss(i):rs(),(t=Jt)?(t=y_(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},s=Wm(t),s.return=i,i.child=s,On=i,Jt=null)):t=null,t===null)throw es(i);return Gh(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(rs(),f=i.mode,R=_c({mode:"hidden",children:R},f),l=Bs(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=ah(s),l.childLanes=sh(t,S,s),i.memoizedState=ih,ko(null,l)):(ss(i),rh(i,R))}var z=t.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(m)i.flags&256?(ss(i),i.flags&=-257,i=oh(t,i,s)):i.memoizedState!==null?(rs(),i.child=t.child,i.flags|=128,i=null):(rs(),R=l.fallback,f=i.mode,l=_c({mode:"visible",children:l.children},f),R=Bs(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Xs(i,t.child,null,s),l=i.child,l.memoizedState=ah(s),l.childLanes=sh(t,S,s),i.memoizedState=ih,i=ko(null,l));else if(ss(i),Gh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var te=S.dgst;S=te,l=Error(a(419)),l.stack="",l.digest=S,No({value:l,source:null,stack:null}),i=oh(t,i,s)}else if(yn||xr(t,i,s,!1),S=(s&t.childLanes)!==0,yn||S){if(S=Zt,S!==null&&(l=ai(S,s),l!==0&&l!==z.retryLane))throw z.retryLane=l,Is(t,l),ti(S,t,l),th;Hh(R)||Ac(),i=oh(t,i,s)}else Hh(R)?(i.flags|=192,i.child=t.child,i=null):(t=z.treeContext,Jt=Ti(R.nextSibling),On=i,At=!0,$a=null,bi=!1,t!==null&&Km(i,t),i=rh(i,l.children),i.flags|=4096);return i}return f?(rs(),R=l.fallback,f=i.mode,z=t.child,te=z.sibling,l=ga(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,te!==null?R=ga(te,R):(R=Bs(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,ko(null,l),l=i.child,R=t.child.memoizedState,R===null?R=ah(s):(f=R.cachePool,f!==null?(z=vn._currentValue,f=f.parent!==z?{parent:z,pool:z}:f):f=eg(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=sh(t,S,s),i.memoizedState=ih,ko(t.child,l)):(ss(i),s=t.child,t=s.sibling,s=ga(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function rh(t,i){return i=_c({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function _c(t,i){return t=li(22,t,null,i),t.lanes=0,t}function oh(t,i,s){return Xs(i,t.child,null,s),t=rh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function d0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mf(t.return,i,s)}function lh(t,i,s,l,f,m){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=m)}function p0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var S=dn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,ye(dn,S),In(t,i,l,s),l=At?Do:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&d0(t,s,i);else if(t.tag===19)d0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&sc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),lh(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&sc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}lh(i,!0,s,null,m,l);break;case"together":lh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ma(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),cs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(xr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ga(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ga(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ch(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function xS(t,i,s){switch(i.tag){case 3:Ee(i,i.stateNode.containerInfo),ts(i,vn,t.memoizedState.cache),Fs();break;case 27:case 5:it(i);break;case 4:Ee(i,i.stateNode.containerInfo);break;case 10:ts(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Of(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ss(i),i.flags|=128,null):(s&i.child.childLanes)!==0?h0(t,i,s):(ss(i),t=Ma(t,i,s),t!==null?t.sibling:null);ss(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(xr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return p0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(dn,dn.current),l)break;return null;case 22:return i.lanes=0,r0(t,i,s,i.pendingProps);case 24:ts(i,vn,t.memoizedState.cache)}return Ma(t,i,s)}function m0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!ch(t,s)&&(i.flags&128)===0)return yn=!1,xS(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,At&&(i.flags&1048576)!==0&&Ym(i,Do,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Vs(i.elementType),i.type=t,typeof t=="function")pf(t)?(l=qs(t,l),i.tag=1,i=u0(null,i,t,l,s)):(i.tag=0,i=nh(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){i.tag=11,i=i0(null,i,t,l,s);break e}else if(f===N){i.tag=14,i=a0(null,i,t,l,s);break e}}throw i=ue(t)||t,Error(a(306,i,""))}}return i;case 0:return nh(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=qs(l,i.pendingProps),u0(t,i,l,f,s);case 3:e:{if(Ee(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Cf(t,i),Fo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,ts(i,vn,l),l!==m.cache&&bf(i,[vn],s,!0),Bo(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=f0(t,i,l,s);break e}else if(l!==f){f=yi(Error(a(424)),i),No(f),i=f0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=Ti(t.firstChild),On=i,At=!0,$a=null,bi=!0,s=rg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Fs(),l===f){i=Ma(t,i,s);break e}In(t,i,l,s)}i=i.child}return i;case 26:return gc(t,i),t===null?(s=A_(i.type,null,i.pendingProps,null))?i.memoizedState=s:At||(s=i.type,t=i.pendingProps,l=Uc(ae.current).createElement(s),l[gn]=i,l[Un]=t,Bn(l,s,t),_n(l),i.stateNode=l):i.memoizedState=A_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return it(i),t===null&&At&&(l=i.stateNode=b_(i.type,i.pendingProps,ae.current),On=i,bi=!0,f=Jt,ps(i.type)?(Vh=f,Jt=Ti(l.firstChild)):Jt=f),In(t,i,i.pendingProps.children,s),gc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&At&&((f=l=Jt)&&(l=ZS(l,i.type,i.pendingProps,bi),l!==null?(i.stateNode=l,On=i,Jt=Ti(l.firstChild),bi=!1,f=!0):f=!1),f||es(i)),it(i),f=i.type,m=i.pendingProps,S=t!==null?t.memoizedProps:null,l=m.children,Bh(f,m)?l=null:S!==null&&Bh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=If(t,i,uS,null,null,s),al._currentValue=f),gc(t,i),In(t,i,l,s),i.child;case 6:return t===null&&At&&((t=s=Jt)&&(s=jS(s,i.pendingProps,bi),s!==null?(i.stateNode=s,On=i,Jt=null,t=!0):t=!1),t||es(i)),null;case 13:return h0(t,i,s);case 4:return Ee(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Xs(i,null,l,s):In(t,i,l,s),i.child;case 11:return i0(t,i,i.type,i.pendingProps,s);case 7:return In(t,i,i.pendingProps,s),i.child;case 8:return In(t,i,i.pendingProps.children,s),i.child;case 12:return In(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ts(i,i.type,l.value),In(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Hs(i),f=Pn(f),l=l(f),i.flags|=1,In(t,i,l,s),i.child;case 14:return a0(t,i,i.type,i.pendingProps,s);case 15:return s0(t,i,i.type,i.pendingProps,s);case 19:return p0(t,i,s);case 31:return vS(t,i,s);case 22:return r0(t,i,s,i.pendingProps);case 24:return Hs(i),l=Pn(vn),t===null?(f=Af(),f===null&&(f=Zt,m=Ef(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},wf(i),ts(i,vn,f)):((t.lanes&s)!==0&&(Cf(t,i),Fo(i,null,null,s),Bo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ts(i,vn,l)):(l=m.cache,ts(i,vn,l),l!==f.cache&&bf(i,[vn],s,!0))),In(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ba(t){t.flags|=4}function uh(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(V0())t.flags|=8192;else throw ks=tc,Rf}else t.flags&=-16777217}function g0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!N_(i))if(V0())t.flags|=8192;else throw ks=tc,Rf}function vc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?be():536870912,t.lanes|=i,Nr|=i)}function Xo(t,i){if(!At)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function yS(t,i,s){var l=i.pendingProps;switch(vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),xa(vn),He(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(vr(i)?ba(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yf())),$t(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(ba(i),m!==null?($t(i),g0(i,m)):($t(i),uh(i,f,null,l,s))):m?m!==t.memoizedState?(ba(i),$t(i),g0(i,m)):($t(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ba(i),$t(i),uh(i,f,t,l,s)),null;case 27:if(Qe(i),s=ae.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ba(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $t(i),null}t=Te.current,vr(i)?Zm(i):(t=b_(f,l,s),i.stateNode=t,ba(i))}return $t(i),null;case 5:if(Qe(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ba(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $t(i),null}if(m=Te.current,vr(i))Zm(i);else{var S=Uc(ae.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}m[gn]=i,m[Un]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;e:switch(Bn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ba(i)}}return $t(i),uh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ba(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ae.current,vr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||h_(t.nodeValue,s)),t||es(i,!0)}else t=Uc(t).createTextNode(l),t[gn]=i,i.stateNode=t}return $t(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=vr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[gn]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),t=!1}else s=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $t(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=vr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[gn]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),f=!1}else f=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),vc(i,i.updateQueue),$t(i),null);case 4:return He(),t===null&&Lh(i.stateNode.containerInfo),$t(i),null;case 10:return xa(i.type),$t(i),null;case 19:if(W(dn),l=i.memoizedState,l===null)return $t(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)Xo(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=sc(t),m!==null){for(i.flags|=128,Xo(l,!1),t=m.updateQueue,i.updateQueue=t,vc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Xm(s,t),s=s.sibling;return ye(dn,dn.current&1|2),At&&_a(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&kt()>bc&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304)}else{if(!f)if(t=sc(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,vc(i,t),Xo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!At)return $t(i),null}else 2*kt()-l.renderingStartTime>bc&&s!==536870912&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=kt(),t.sibling=null,s=dn.current,ye(dn,f?s&1|2:s&1),At&&_a(i,l.treeForkCount),t):($t(i),null);case 22:case 23:return ui(i),Uf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),s=i.updateQueue,s!==null&&vc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&W(Gs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),xa(vn),$t(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function SS(t,i){switch(vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xa(vn),He(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Qe(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return W(dn),null;case 4:return He(),null;case 10:return xa(i.type),null;case 22:case 23:return ui(i),Uf(),t!==null&&W(Gs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return xa(vn),null;case 25:return null;default:return null}}function _0(t,i){switch(vf(i),i.tag){case 3:xa(vn),He();break;case 26:case 27:case 5:Qe(i);break;case 4:He();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:W(dn);break;case 10:xa(i.type);break;case 22:case 23:ui(i),Uf(),t!==null&&W(Gs);break;case 24:xa(vn)}}function Wo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,S=s.inst;l=m(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){Ft(i,i.return,R)}}function os(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=i;var z=s,te=R;try{te()}catch(me){Ft(f,z,me)}}}l=l.next}while(l!==m)}}catch(me){Ft(i,i.return,me)}}function v0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{lg(i,s)}catch(l){Ft(t,t.return,l)}}}function x0(t,i,s){s.props=qs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Ft(t,i,l)}}function qo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Ft(t,i,f)}}function Zi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Ft(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ft(t,i,f)}else s.current=null}function y0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Ft(t,t.return,f)}}function fh(t,i,s){try{var l=t.stateNode;kS(l,t.type,s,i),l[Un]=i}catch(f){Ft(t,t.return,f)}}function S0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ps(t.type)||t.tag===4}function hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ps(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=pa));else if(l!==4&&(l===27&&ps(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(dh(t,i,s),t=t.sibling;t!==null;)dh(t,i,s),t=t.sibling}function xc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ps(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(xc(t,i,s),t=t.sibling;t!==null;)xc(t,i,s),t=t.sibling}function M0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Bn(i,l,s),i[gn]=t,i[Un]=s}catch(m){Ft(t,t.return,m)}}var Ea=!1,Sn=!1,ph=!1,b0=typeof WeakSet=="function"?WeakSet:Set,Dn=null;function MS(t,i){if(t=t.containerInfo,Ph=Hc,t=Pm(t),of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var S=0,R=-1,z=-1,te=0,me=0,Se=t,oe=null;t:for(;;){for(var ce;Se!==s||f!==0&&Se.nodeType!==3||(R=S+f),Se!==m||l!==0&&Se.nodeType!==3||(z=S+l),Se.nodeType===3&&(S+=Se.nodeValue.length),(ce=Se.firstChild)!==null;)oe=Se,Se=ce;for(;;){if(Se===t)break t;if(oe===s&&++te===f&&(R=S),oe===m&&++me===l&&(z=S),(ce=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=ce}s=R===-1||z===-1?null:{start:R,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ih={focusedElem:t,selectionRange:s},Hc=!1,Dn=i;Dn!==null;)if(i=Dn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Dn=t;else for(;Dn!==null;){switch(i=Dn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var We=qs(s.type,f);t=l.getSnapshotBeforeUpdate(We,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ft(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)zh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Dn=t;break}Dn=i.return}}function E0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(t,s),l&4&&Wo(5,s);break;case 1:if(Aa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Ft(s,s.return,S)}else{var f=qs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ft(s,s.return,S)}}l&64&&v0(s),l&512&&qo(s,s.return);break;case 3:if(Aa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{lg(t,i)}catch(S){Ft(s,s.return,S)}}break;case 27:i===null&&l&4&&M0(s);case 26:case 5:Aa(t,s),i===null&&l&4&&y0(s),l&512&&qo(s,s.return);break;case 12:Aa(t,s);break;case 31:Aa(t,s),l&4&&R0(t,s);break;case 13:Aa(t,s),l&4&&w0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=NS.bind(null,s),QS(t,s))));break;case 22:if(l=s.memoizedState!==null||Ea,!l){i=i!==null&&i.memoizedState!==null||Sn,f=Ea;var m=Sn;Ea=l,(Sn=i)&&!m?Ra(t,s,(s.subtreeFlags&8772)!==0):Aa(t,s),Ea=f,Sn=m}break;case 30:break;default:Aa(t,s)}}function T0(t){var i=t.alternate;i!==null&&(t.alternate=null,T0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ka(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,Qn=!1;function Ta(t,i,s){for(s=s.child;s!==null;)A0(t,i,s),s=s.sibling}function A0(t,i,s){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(fe,s)}catch{}switch(s.tag){case 26:Sn||Zi(s,i),Ta(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Sn||Zi(s,i);var l=an,f=Qn;ps(s.type)&&(an=s.stateNode,Qn=!1),Ta(t,i,s),tl(s.stateNode),an=l,Qn=f;break;case 5:Sn||Zi(s,i);case 6:if(l=an,f=Qn,an=null,Ta(t,i,s),an=l,Qn=f,an!==null)if(Qn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(s.stateNode)}catch(m){Ft(s,i,m)}else try{an.removeChild(s.stateNode)}catch(m){Ft(s,i,m)}break;case 18:an!==null&&(Qn?(t=an,v_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),zr(t)):v_(an,s.stateNode));break;case 4:l=an,f=Qn,an=s.stateNode.containerInfo,Qn=!0,Ta(t,i,s),an=l,Qn=f;break;case 0:case 11:case 14:case 15:os(2,s,i),Sn||os(4,s,i),Ta(t,i,s);break;case 1:Sn||(Zi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&x0(s,i,l)),Ta(t,i,s);break;case 21:Ta(t,i,s);break;case 22:Sn=(l=Sn)||s.memoizedState!==null,Ta(t,i,s),Sn=l;break;default:Ta(t,i,s)}}function R0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zr(t)}catch(s){Ft(i,i.return,s)}}}function w0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zr(t)}catch(s){Ft(i,i.return,s)}}function bS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new b0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new b0),i;default:throw Error(a(435,t.tag))}}function yc(t,i){var s=bS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=LS.bind(null,t,l);l.then(f,f)}})}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,S=i,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(ps(R.type)){an=R.stateNode,Qn=!1;break e}break;case 5:an=R.stateNode,Qn=!1;break e;case 3:case 4:an=R.stateNode.containerInfo,Qn=!0;break e}R=R.return}if(an===null)throw Error(a(160));A0(m,S,f),an=null,Qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)C0(i,t),i=i.sibling}var Oi=null;function C0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(i,t),$n(t),l&4&&(os(3,t,t.return),Wo(3,t),os(5,t,t.return));break;case 1:Jn(i,t),$n(t),l&512&&(Sn||s===null||Zi(s,s.return)),l&64&&Ea&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Oi;if(Jn(i,t),$n(t),l&512&&(Sn||s===null||Zi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ya]||m[gn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Bn(m,l,s),m[gn]=t,_n(m),l=m;break e;case"link":var S=C_("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(m=S[R],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}m=f.createElement(l),Bn(m,l,s),f.head.appendChild(m);break;case"meta":if(S=C_("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(m=S[R],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}m=f.createElement(l),Bn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[gn]=t,_n(m),l=m}t.stateNode=l}else D_(f,t.type,t.stateNode);else t.stateNode=w_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?D_(f,t.type,t.stateNode):w_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fh(t,t.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,t),$n(t),l&512&&(Sn||s===null||Zi(s,s.return)),s!==null&&l&4&&fh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,t),$n(t),l&512&&(Sn||s===null||Zi(s,s.return)),t.flags&32){f=t.stateNode;try{ri(f,"")}catch(We){Ft(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,fh(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ph=!0);break;case 6:if(Jn(i,t),$n(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(We){Ft(t,t.return,We)}}break;case 3:if(Ic=null,f=Oi,Oi=Oc(i.containerInfo),Jn(i,t),Oi=f,$n(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{zr(i.containerInfo)}catch(We){Ft(t,t.return,We)}ph&&(ph=!1,D0(t));break;case 4:l=Oi,Oi=Oc(t.stateNode.containerInfo),Jn(i,t),$n(t),Oi=l;break;case 12:Jn(i,t),$n(t);break;case 31:Jn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 13:Jn(i,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Mc=kt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 22:f=t.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,te=Ea,me=Sn;if(Ea=te||f,Sn=me||z,Jn(i,t),Sn=me,Ea=te,$n(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||z||Ea||Sn||Ys(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(m=z.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=z.stateNode;var Se=z.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(We){Ft(z,z.return,We)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=f?"":z.memoizedProps}catch(We){Ft(z,z.return,We)}}}else if(i.tag===18){if(s===null){z=i;try{var ce=z.stateNode;f?x_(ce,!0):x_(z.stateNode,!1)}catch(We){Ft(z,z.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yc(t,s))));break;case 19:Jn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 30:break;case 21:break;default:Jn(i,t),$n(t)}}function $n(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(S0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=hh(t);xc(t,m,f);break;case 5:var S=s.stateNode;s.flags&32&&(ri(S,""),s.flags&=-33);var R=hh(t);xc(t,R,S);break;case 3:case 4:var z=s.stateNode.containerInfo,te=hh(t);dh(t,te,z);break;default:throw Error(a(161))}}catch(me){Ft(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;D0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Aa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)E0(t,i.alternate,i),i=i.sibling}function Ys(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:os(4,i,i.return),Ys(i);break;case 1:Zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&x0(i,i.return,s),Ys(i);break;case 27:tl(i.stateNode);case 26:case 5:Zi(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}t=t.sibling}}function Ra(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:Ra(f,m,s),Wo(4,m);break;case 1:if(Ra(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(te){Ft(l,l.return,te)}if(l=m,f=l.updateQueue,f!==null){var R=l.stateNode;try{var z=f.shared.hiddenCallbacks;if(z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<z.length;f++)og(z[f],R)}catch(te){Ft(l,l.return,te)}}s&&S&64&&v0(m),qo(m,m.return);break;case 27:M0(m);case 26:case 5:Ra(f,m,s),s&&l===null&&S&4&&y0(m),qo(m,m.return);break;case 12:Ra(f,m,s);break;case 31:Ra(f,m,s),s&&S&4&&R0(f,m);break;case 13:Ra(f,m,s),s&&S&4&&w0(f,m);break;case 22:m.memoizedState===null&&Ra(f,m,s),qo(m,m.return);break;case 30:break;default:Ra(f,m,s)}i=i.sibling}}function mh(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Lo(s))}function gh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t))}function Pi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)N0(t,i,s,l),i=i.sibling}function N0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,l),f&2048&&Wo(9,i);break;case 1:Pi(t,i,s,l);break;case 3:Pi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t)));break;case 12:if(f&2048){Pi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,S=m.id,R=m.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ft(i,i.return,z)}}else Pi(t,i,s,l);break;case 31:Pi(t,i,s,l);break;case 13:Pi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Pi(t,i,s,l):Yo(t,i):m._visibility&2?Pi(t,i,s,l):(m._visibility|=2,wr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&mh(S,i);break;case 24:Pi(t,i,s,l),f&2048&&gh(i.alternate,i);break;default:Pi(t,i,s,l)}}function wr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,S=i,R=s,z=l,te=S.flags;switch(S.tag){case 0:case 11:case 15:wr(m,S,R,z,f),Wo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?wr(m,S,R,z,f):Yo(m,S):(me._visibility|=2,wr(m,S,R,z,f)),f&&te&2048&&mh(S.alternate,S);break;case 24:wr(m,S,R,z,f),f&&te&2048&&gh(S.alternate,S);break;default:wr(m,S,R,z,f)}i=i.sibling}}function Yo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Yo(s,l),f&2048&&mh(l.alternate,l);break;case 24:Yo(s,l),f&2048&&gh(l.alternate,l);break;default:Yo(s,l)}i=i.sibling}}var Ko=8192;function Cr(t,i,s){if(t.subtreeFlags&Ko)for(t=t.child;t!==null;)L0(t,i,s),t=t.sibling}function L0(t,i,s){switch(t.tag){case 26:Cr(t,i,s),t.flags&Ko&&t.memoizedState!==null&&cM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Cr(t,i,s);break;case 3:case 4:var l=Oi;Oi=Oc(t.stateNode.containerInfo),Cr(t,i,s),Oi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ko,Ko=16777216,Cr(t,i,s),Ko=l):Cr(t,i,s));break;default:Cr(t,i,s)}}function U0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Zo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Dn=l,P0(l,t)}U0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O0(t),t=t.sibling}function O0(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&os(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Sc(t)):Zo(t);break;default:Zo(t)}}function Sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Dn=l,P0(l,t)}U0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:os(8,i,i.return),Sc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Sc(i));break;default:Sc(i)}t=t.sibling}}function P0(t,i){for(;Dn!==null;){var s=Dn;switch(s.tag){case 0:case 11:case 15:os(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Dn=l;else e:for(s=t;Dn!==null;){l=Dn;var f=l.sibling,m=l.return;if(T0(l),l===s){Dn=null;break e}if(f!==null){f.return=m,Dn=f;break e}Dn=m}}}var ES={getCacheForType:function(t){var i=Pn(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Pn(vn).controller.signal}},TS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Zt=null,vt=null,Mt=0,Bt=0,fi=null,ls=!1,Dr=!1,_h=!1,wa=0,fn=0,cs=0,Ks=0,vh=0,hi=0,Nr=0,jo=null,ei=null,xh=!1,Mc=0,I0=0,bc=1/0,Ec=null,us=null,En=0,fs=null,Lr=null,Ca=0,yh=0,Sh=null,B0=null,Qo=0,Mh=null;function di(){return(Nt&2)!==0&&Mt!==0?Mt&-Mt:F.T!==null?wh():yo()}function F0(){if(hi===0)if((Mt&536870912)===0||At){var t=st;st<<=1,(st&3932160)===0&&(st=262144),hi=t}else hi=536870912;return t=ci.current,t!==null&&(t.flags|=32),hi}function ti(t,i,s){(t===Zt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),hs(t,Mt,hi,!1)),Ve(t,s),((Nt&2)===0||t!==Zt)&&(t===Zt&&((Nt&2)===0&&(Ks|=s),fn===4&&hs(t,Mt,hi,!1)),ji(t))}function z0(t,i,s){if((Nt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ce(t,i),f=l?wS(t,i):Eh(t,i,!0),m=l;do{if(f===0){Dr&&!l&&hs(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!AS(s)){f=Eh(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var R=t;f=jo;var z=R.current.memoizedState.isDehydrated;if(z&&(Ur(R,S).flags|=256),S=Eh(R,S,!1),S!==2){if(_h&&!z){R.errorRecoveryDisabledLanes|=m,Ks|=m,f=4;break e}m=ei,ei=f,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){Ur(t,0),hs(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:hs(l,i,hi,!ls);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Mc+300-kt(),10<f)){if(hs(l,i,hi,!ls),_e(l,0,!0)!==0)break e;Ca=i,l.timeoutHandle=g_(H0.bind(null,l,s,ei,Ec,xh,i,hi,Ks,Nr,ls,m,"Throttled",-0,0),f);break e}H0(l,s,ei,Ec,xh,i,hi,Ks,Nr,ls,m,null,-0,0)}}break}while(!0);ji(t)}function H0(t,i,s,l,f,m,S,R,z,te,me,Se,oe,ce){if(t.timeoutHandle=-1,Se=i.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},L0(i,m,Se);var We=(m&62914560)===m?Mc-kt():(m&4194048)===m?I0-kt():0;if(We=uM(Se,We),We!==null){Ca=m,t.cancelPendingCommit=We(K0.bind(null,t,i,m,s,l,f,S,R,z,me,Se,null,oe,ce)),hs(t,m,S,!te);return}}K0(t,i,m,s,l,f,S,R,z)}function AS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!oi(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(t,i,s,l){i&=~vh,i&=~Ks,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Fe(f),S=1<<m;l[m]=-1,f&=~S}s!==0&&Ut(t,s,i)}function Tc(){return(Nt&6)===0?(Jo(0),!1):!0}function bh(){if(vt!==null){if(Bt===0)var t=vt.return;else t=vt,va=zs=null,zf(t),br=null,Oo=0,t=vt;for(;t!==null;)_0(t.alternate,t),t=t.return;vt=null}}function Ur(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,qS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ca=0,bh(),Zt=t,vt=s=ga(t.current,null),Mt=i,Bt=0,fi=null,ls=!1,Dr=Ce(t,i),_h=!1,Nr=hi=vh=Ks=cs=fn=0,ei=jo=null,xh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Fe(l),m=1<<f;i|=t[f],l&=~m}return wa=i,ql(),s}function G0(t,i){ct=null,F.H=Vo,i===Mr||i===ec?(i=ig(),Bt=3):i===Rf?(i=ig(),Bt=4):Bt=i===th?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,vt===null&&(fn=1,pc(t,yi(i,t.current)))}function V0(){var t=ci.current;return t===null?!0:(Mt&4194048)===Mt?Ei===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===Ei:!1}function k0(){var t=F.H;return F.H=Vo,t===null?Vo:t}function X0(){var t=F.A;return F.A=ES,t}function Ac(){fn=4,ls||(Mt&4194048)!==Mt&&ci.current!==null||(Dr=!0),(cs&134217727)===0&&(Ks&134217727)===0||Zt===null||hs(Zt,Mt,hi,!1)}function Eh(t,i,s){var l=Nt;Nt|=2;var f=k0(),m=X0();(Zt!==t||Mt!==i)&&(Ec=null,Ur(t,i)),i=!1;var S=fn;e:do try{if(Bt!==0&&vt!==null){var R=vt,z=fi;switch(Bt){case 8:bh(),S=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var te=Bt;if(Bt=0,fi=null,Or(t,R,z,te),s&&Dr){S=0;break e}break;default:te=Bt,Bt=0,fi=null,Or(t,R,z,te)}}RS(),S=fn;break}catch(me){G0(t,me)}while(!0);return i&&t.shellSuspendCounter++,va=zs=null,Nt=l,F.H=f,F.A=m,vt===null&&(Zt=null,Mt=0,ql()),S}function RS(){for(;vt!==null;)W0(vt)}function wS(t,i){var s=Nt;Nt|=2;var l=k0(),f=X0();Zt!==t||Mt!==i?(Ec=null,bc=kt()+500,Ur(t,i)):Dr=Ce(t,i);e:do try{if(Bt!==0&&vt!==null){i=vt;var m=fi;t:switch(Bt){case 1:Bt=0,fi=null,Or(t,i,m,1);break;case 2:case 9:if(tg(m)){Bt=0,fi=null,q0(i);break}i=function(){Bt!==2&&Bt!==9||Zt!==t||(Bt=7),ji(t)},m.then(i,i);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:tg(m)?(Bt=0,fi=null,q0(i)):(Bt=0,fi=null,Or(t,i,m,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var R=vt;if(S?N_(S):R.stateNode.complete){Bt=0,fi=null;var z=R.sibling;if(z!==null)vt=z;else{var te=R.return;te!==null?(vt=te,Rc(te)):vt=null}break t}}Bt=0,fi=null,Or(t,i,m,5);break;case 6:Bt=0,fi=null,Or(t,i,m,6);break;case 8:bh(),fn=6;break e;default:throw Error(a(462))}}CS();break}catch(me){G0(t,me)}while(!0);return va=zs=null,F.H=l,F.A=f,Nt=s,vt!==null?0:(Zt=null,Mt=0,ql(),fn)}function CS(){for(;vt!==null&&!cn();)W0(vt)}function W0(t){var i=m0(t.alternate,t,wa);t.memoizedProps=t.pendingProps,i===null?Rc(t):vt=i}function q0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=c0(s,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=c0(s,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:zf(i);default:_0(s,i),i=vt=Xm(i,wa),i=m0(s,i,wa)}t.memoizedProps=t.pendingProps,i===null?Rc(t):vt=i}function Or(t,i,s,l){va=zs=null,zf(i),br=null,Oo=0;var f=i.return;try{if(_S(t,f,i,s,Mt)){fn=1,pc(t,yi(s,t.current)),vt=null;return}}catch(m){if(f!==null)throw vt=f,m;fn=1,pc(t,yi(s,t.current)),vt=null;return}i.flags&32768?(At||l===1?t=!0:Dr||(Mt&536870912)!==0?t=!1:(ls=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),Y0(i,t)):Rc(i)}function Rc(t){var i=t;do{if((i.flags&32768)!==0){Y0(i,ls);return}t=i.return;var s=yS(i.alternate,i,wa);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);fn===0&&(fn=5)}function Y0(t,i){do{var s=SS(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);fn=6,vt=null}function K0(t,i,s,l,f,m,S,R,z){t.cancelPendingCommit=null;do wc();while(En!==0);if((Nt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=hf,en(t,s,m,S,R,z),t===Zt&&(vt=Zt=null,Mt=0),Lr=i,fs=t,Ca=s,yh=m,Sh=f,B0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,US(Q,function(){return $0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=Nt,Nt|=4;try{MS(t,i,s)}finally{Nt=S,H.p=f,F.T=l}}En=1,Z0(),j0(),Q0()}}function Z0(){if(En===1){En=0;var t=fs,i=Lr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Nt;Nt|=4;try{C0(i,t);var m=Ih,S=Pm(t.containerInfo),R=m.focusedElem,z=m.selectionRange;if(S!==R&&R&&R.ownerDocument&&Om(R.ownerDocument.documentElement,R)){if(z!==null&&of(R)){var te=z.start,me=z.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var Se=R.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),We=R.textContent.length,tt=Math.min(z.start,We),qt=z.end===void 0?tt:Math.min(z.end,We);!ce.extend&&tt>qt&&(S=qt,qt=tt,tt=S);var Z=Um(R,tt),V=Um(R,qt);if(Z&&V&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var ee=Se.createRange();ee.setStart(Z.node,Z.offset),ce.removeAllRanges(),tt>qt?(ce.addRange(ee),ce.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),ce.addRange(ee))}}}}for(Se=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Se.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var xe=Se[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Hc=!!Ph,Ih=Ph=null}finally{Nt=f,H.p=l,F.T=s}}t.current=i,En=2}}function j0(){if(En===2){En=0;var t=fs,i=Lr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Nt;Nt|=4;try{E0(t,i.alternate,i)}finally{Nt=f,H.p=l,F.T=s}}En=3}}function Q0(){if(En===4||En===3){En=0,Y();var t=fs,i=Lr,s=Ca,l=B0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,Lr=fs=null,J0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(us=null),xo(s),i=i.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=H.p,H.p=2,F.T=null;try{for(var m=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];m(R.value,{componentStack:R.stack})}}finally{F.T=i,H.p=f}}(Ca&3)!==0&&wc(),ji(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Mh?Qo++:(Qo=0,Mh=t):Qo=0,Jo(0)}}function J0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Lo(i)))}function wc(){return Z0(),j0(),Q0(),$0()}function $0(){if(En!==5)return!1;var t=fs,i=yh;yh=0;var s=xo(Ca),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=Sh,Sh=null;var m=fs,S=Ca;if(En=0,Lr=fs=null,Ca=0,(Nt&6)!==0)throw Error(a(331));var R=Nt;if(Nt|=4,O0(m.current),N0(m,m.current,S,s),Nt=R,Jo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(fe,m)}catch{}return!0}finally{H.p=f,F.T=l,J0(t,i)}}function e_(t,i,s){i=yi(s,i),i=eh(t.stateNode,i,2),t=as(t,i,2),t!==null&&(Ve(t,2),ji(t))}function Ft(t,i,s){if(t.tag===3)e_(t,t,s);else for(;i!==null;){if(i.tag===3){e_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(us===null||!us.has(l))){t=yi(s,t),s=t0(2),l=as(i,s,2),l!==null&&(n0(s,l,i,t),Ve(l,2),ji(l));break}}i=i.return}}function Th(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new TS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(_h=!0,f.add(s),t=DS.bind(null,t,i,s),i.then(t,t))}function DS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Zt===t&&(Mt&s)===s&&(fn===4||fn===3&&(Mt&62914560)===Mt&&300>kt()-Mc?(Nt&2)===0&&Ur(t,0):vh|=s,Nr===Mt&&(Nr=0)),ji(t)}function t_(t,i){i===0&&(i=be()),t=Is(t,i),t!==null&&(Ve(t,i),ji(t))}function NS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),t_(t,s)}function LS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),t_(t,s)}function US(t,i){return hn(t,i)}var Cc=null,Pr=null,Ah=!1,Dc=!1,Rh=!1,ds=0;function ji(t){t!==Pr&&t.next===null&&(Pr===null?Cc=Pr=t:Pr=Pr.next=t),Dc=!0,Ah||(Ah=!0,PS())}function Jo(t,i){if(!Rh&&Dc){Rh=!0;do for(var s=!1,l=Cc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var S=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-Fe(42|t)+1)-1,m&=f&~(S&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,s_(l,m))}else m=Mt,m=_e(l,l===Zt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ce(l,m)||(s=!0,s_(l,m));l=l.next}while(s);Rh=!1}}function OS(){n_()}function n_(){Dc=Ah=!1;var t=0;ds!==0&&WS()&&(t=ds);for(var i=kt(),s=null,l=Cc;l!==null;){var f=l.next,m=i_(l,i);m===0?(l.next=null,s===null?Cc=f:s.next=f,f===null&&(Pr=s)):(s=l,(t!==0||(m&3)!==0)&&(Dc=!0)),l=f}En!==0&&En!==5||Jo(t),ds!==0&&(ds=0)}function i_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var S=31-Fe(m),R=1<<S,z=f[S];z===-1?((R&s)===0||(R&l)!==0)&&(f[S]=Be(R,i)):z<=i&&(t.expiredLanes|=R),m&=~R}if(i=Zt,s=Mt,s=_e(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&jt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&jt(l),xo(s)){case 2:case 8:s=E;break;case 32:s=Q;break;case 268435456:s=he;break;default:s=Q}return l=a_.bind(null,t),s=hn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&jt(l),t.callbackPriority=2,t.callbackNode=null,2}function a_(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(wc()&&t.callbackNode!==s)return null;var l=Mt;return l=_e(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(z0(t,l,i),i_(t,kt()),t.callbackNode!=null&&t.callbackNode===s?a_.bind(null,t):null)}function s_(t,i){if(wc())return null;z0(t,i,!0)}function PS(){YS(function(){(Nt&6)!==0?hn(O,OS):n_()})}function wh(){if(ds===0){var t=yr;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),ds=t}return ds}function r_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ls(""+t)}function o_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function IS(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=r_((f[Un]||null).action),S=l.submitter;S&&(i=(i=S[Un]||null)?r_(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var R=new Vl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ds!==0){var z=S?o_(f,S):new FormData(f);Kf(s,{pending:!0,data:z,method:f.method,action:m},null,z)}}else typeof m=="function"&&(R.preventDefault(),z=S?o_(f,S):new FormData(f),Kf(s,{pending:!0,data:z,method:f.method,action:m},m,z))},currentTarget:f}]})}}for(var Ch=0;Ch<ff.length;Ch++){var Dh=ff[Ch],BS=Dh.toLowerCase(),FS=Dh[0].toUpperCase()+Dh.slice(1);Ui(BS,"on"+FS)}Ui(Fm,"onAnimationEnd"),Ui(zm,"onAnimationIteration"),Ui(Hm,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(eS,"onTransitionRun"),Ui(tS,"onTransitionStart"),Ui(nS,"onTransitionCancel"),Ui(Gm,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function l_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],z=R.instance,te=R.currentTarget;if(R=R.listener,z!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=te;try{m(f)}catch(me){Wl(me)}f.currentTarget=null,m=z}else for(S=0;S<l.length;S++){if(R=l[S],z=R.instance,te=R.currentTarget,R=R.listener,z!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=te;try{m(f)}catch(me){Wl(me)}f.currentTarget=null,m=z}}}}function xt(t,i){var s=i[Cs];s===void 0&&(s=i[Cs]=new Set);var l=t+"__bubble";s.has(l)||(c_(i,t,2,!1),s.add(l))}function Nh(t,i,s){var l=0;i&&(l|=4),c_(s,t,l,i)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Lh(t){if(!t[Nc]){t[Nc]=!0,Fl.forEach(function(s){s!=="selectionchange"&&(zS.has(s)||Nh(s,!1,t),Nh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Nc]||(i[Nc]=!0,Nh("selectionchange",!1,i))}}function c_(t,i,s,l){switch(F_(i)){case 2:var f=dM;break;case 8:f=pM;break;default:f=Yh}s=f.bind(null,i,s,t),f=void 0,!Qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Uh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=ha(R),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){l=m=S;continue e}R=R.parentNode}}l=l.return}pm(function(){var te=m,me=Zu(s),Se=[];e:{var oe=Vm.get(t);if(oe!==void 0){var ce=Vl,We=t;switch(t){case"keypress":if(Hl(s)===0)break e;case"keydown":case"keyup":ce=Ly;break;case"focusin":We="focus",ce=tf;break;case"focusout":We="blur",ce=tf;break;case"beforeblur":case"afterblur":ce=tf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Py;break;case Fm:case zm:case Hm:ce=by;break;case Gm:ce=By;break;case"scroll":case"scrollend":ce=vy;break;case"wheel":ce=zy;break;case"copy":case"cut":case"paste":ce=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=xm;break;case"toggle":case"beforetoggle":ce=Gy}var tt=(i&4)!==0,qt=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var V=te,ee;V!==null;){var xe=V;if(ee=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ee===null||Z===null||(xe=So(V,Z),xe!=null&&tt.push(el(V,xe,ee))),qt)break;V=V.return}0<tt.length&&(oe=new ce(oe,We,null,s,me),Se.push({event:oe,listeners:tt}))}}if((i&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&s!==Ku&&(We=s.relatedTarget||s.fromElement)&&(ha(We)||We[Zn]))break e;if((ce||oe)&&(oe=me.window===me?me:(oe=me.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(We=s.relatedTarget||s.toElement,ce=te,We=We?ha(We):null,We!==null&&(qt=c(We),tt=We.tag,We!==qt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(ce=null,We=te),ce!==We)){if(tt=_m,xe="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=xm,xe="onPointerLeave",Z="onPointerEnter",V="pointer"),qt=ce==null?oe:Ns(ce),ee=We==null?oe:Ns(We),oe=new tt(xe,V+"leave",ce,s,me),oe.target=qt,oe.relatedTarget=ee,xe=null,ha(me)===te&&(tt=new tt(Z,V+"enter",We,s,me),tt.target=ee,tt.relatedTarget=qt,xe=tt),qt=xe,ce&&We)t:{for(tt=HS,Z=ce,V=We,ee=0,xe=Z;xe;xe=tt(xe))ee++;xe=0;for(var et=V;et;et=tt(et))xe++;for(;0<ee-xe;)Z=tt(Z),ee--;for(;0<xe-ee;)V=tt(V),xe--;for(;ee--;){if(Z===V||V!==null&&Z===V.alternate){tt=Z;break t}Z=tt(Z),V=tt(V)}tt=null}else tt=null;ce!==null&&u_(Se,oe,ce,tt,!1),We!==null&&qt!==null&&u_(Se,qt,We,tt,!0)}}e:{if(oe=te?Ns(te):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var wt=Rm;else if(Tm(oe))if(wm)wt=Qy;else{wt=Zy;var Ye=Ky}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?te&&Lt(te.elementType)&&(wt=Rm):wt=jy;if(wt&&(wt=wt(t,te))){Am(Se,wt,s,me);break e}Ye&&Ye(t,oe,te),t==="focusout"&&te&&oe.type==="number"&&te.memoizedProps.value!=null&&_t(oe,"number",oe.value)}switch(Ye=te?Ns(te):window,t){case"focusin":(Tm(Ye)||Ye.contentEditable==="true")&&(hr=Ye,lf=te,Co=null);break;case"focusout":Co=lf=hr=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Im(Se,s,me);break;case"selectionchange":if($y)break;case"keydown":case"keyup":Im(Se,s,me)}var ut;if(af)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else fr?bm(t,s)&&(bt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(ym&&s.locale!=="ko"&&(fr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&fr&&(ut=mm()):(Qa=me,Ju="value"in Qa?Qa.value:Qa.textContent,fr=!0)),Ye=Lc(te,bt),0<Ye.length&&(bt=new vm(bt,t,null,s,me),Se.push({event:bt,listeners:Ye}),ut?bt.data=ut:(ut=Em(s),ut!==null&&(bt.data=ut)))),(ut=ky?Xy(t,s):Wy(t,s))&&(bt=Lc(te,"onBeforeInput"),0<bt.length&&(Ye=new vm("onBeforeInput","beforeinput",null,s,me),Se.push({event:Ye,listeners:bt}),Ye.data=ut)),IS(Se,t,te,s,me)}l_(Se,i)})}function el(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Lc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=So(t,s),f!=null&&l.unshift(el(t,f,m)),f=So(t,i),f!=null&&l.push(el(t,f,m))),t.tag===3)return l;t=t.return}return[]}function HS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u_(t,i,s,l,f){for(var m=i._reactName,S=[];s!==null&&s!==l;){var R=s,z=R.alternate,te=R.stateNode;if(R=R.tag,z!==null&&z===l)break;R!==5&&R!==26&&R!==27||te===null||(z=te,f?(te=So(s,m),te!=null&&S.unshift(el(s,te,z))):f||(te=So(s,m),te!=null&&S.push(el(s,te,z)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var GS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function f_(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(VS,"")}function h_(t,i){return i=f_(i),f_(t)===i}function Wt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ri(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ri(t,""+l);break;case"className":Xe(t,"class",l);break;case"tabIndex":Xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,s,l);break;case"style":Li(t,l,m);break;case"data":if(i!=="object"){Xe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ls(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Wt(t,i,"name",f.name,f,null),Wt(t,i,"formEncType",f.formEncType,f,null),Wt(t,i,"formMethod",f.formMethod,f,null),Wt(t,i,"formTarget",f.formTarget,f,null)):(Wt(t,i,"encType",f.encType,f,null),Wt(t,i,"method",f.method,f,null),Wt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ls(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=pa);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ls(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Ue(t,"popover",l);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ue(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,Ue(t,s,l))}}function Oh(t,i,s,l,f,m){switch(s){case"style":Li(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ri(t,l):(typeof l=="number"||typeof l=="bigint")&&ri(t,""+l);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[Un]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ue(t,s,l)}}}function Bn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,m,S,s,null)}}f&&Wt(t,i,"srcSet",s.srcSet,s,null),l&&Wt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var R=m=S=f=null,z=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":S=me;break;case"checked":z=me;break;case"defaultChecked":te=me;break;case"value":m=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:Wt(t,i,l,me,s,null)}}Fn(t,m,R,z,te,S,f,!1);return;case"select":xt("invalid",t),l=S=m=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":m=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Wt(t,i,f,R,s,null)}i=m,s=S,t.multiple=!!l,i!=null?bn(t,!!l,i,!1):s!=null&&bn(t,!!l,s,!0);return;case"textarea":xt("invalid",t),m=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Wt(t,i,S,R,s,null)}Ni(t,l,f,m);return;case"option":for(z in s)if(s.hasOwnProperty(z)&&(l=s[z],l!=null))switch(z){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Wt(t,i,z,l,s,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(l=0;l<$o.length;l++)xt($o[l],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,te,l,s,null)}return;default:if(Lt(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&Oh(t,i,me,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Wt(t,i,R,l,s,null))}function kS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,R=null,z=null,te=null,me=null;for(ce in s){var Se=s[ce];if(s.hasOwnProperty(ce)&&Se!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=Se;default:l.hasOwnProperty(ce)||Wt(t,i,ce,null,l,Se)}}for(var oe in l){var ce=l[oe];if(Se=s[oe],l.hasOwnProperty(oe)&&(ce!=null||Se!=null))switch(oe){case"type":m=ce;break;case"name":f=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":S=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:ce!==Se&&Wt(t,i,oe,ce,l,Se)}}ze(t,S,R,z,te,me,m,f);return;case"select":ce=S=R=oe=null;for(m in s)if(z=s[m],s.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":ce=z;default:l.hasOwnProperty(m)||Wt(t,i,m,null,l,z)}for(f in l)if(m=l[f],z=s[f],l.hasOwnProperty(f)&&(m!=null||z!=null))switch(f){case"value":oe=m;break;case"defaultValue":R=m;break;case"multiple":S=m;default:m!==z&&Wt(t,i,f,m,l,z)}i=R,s=S,l=ce,oe!=null?bn(t,!!s,oe,!1):!!l!=!!s&&(i!=null?bn(t,!!s,i,!0):bn(t,!!s,s?[]:"",!1));return;case"textarea":ce=oe=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(t,i,R,null,l,f)}for(S in l)if(f=l[S],m=s[S],l.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":oe=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Wt(t,i,S,f,l,m)}si(t,oe,ce);return;case"option":for(var We in s)if(oe=s[We],s.hasOwnProperty(We)&&oe!=null&&!l.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Wt(t,i,We,null,l,oe)}for(z in l)if(oe=l[z],ce=s[z],l.hasOwnProperty(z)&&oe!==ce&&(oe!=null||ce!=null))switch(z){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Wt(t,i,z,oe,l,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)oe=s[tt],s.hasOwnProperty(tt)&&oe!=null&&!l.hasOwnProperty(tt)&&Wt(t,i,tt,null,l,oe);for(te in l)if(oe=l[te],ce=s[te],l.hasOwnProperty(te)&&oe!==ce&&(oe!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,i));break;default:Wt(t,i,te,oe,l,ce)}return;default:if(Lt(i)){for(var qt in s)oe=s[qt],s.hasOwnProperty(qt)&&oe!==void 0&&!l.hasOwnProperty(qt)&&Oh(t,i,qt,void 0,l,oe);for(me in l)oe=l[me],ce=s[me],!l.hasOwnProperty(me)||oe===ce||oe===void 0&&ce===void 0||Oh(t,i,me,oe,l,ce);return}}for(var Z in s)oe=s[Z],s.hasOwnProperty(Z)&&oe!=null&&!l.hasOwnProperty(Z)&&Wt(t,i,Z,null,l,oe);for(Se in l)oe=l[Se],ce=s[Se],!l.hasOwnProperty(Se)||oe===ce||oe==null&&ce==null||Wt(t,i,Se,oe,l,ce)}function d_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,S=f.initiatorType,R=f.duration;if(m&&R&&d_(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var z=s[l],te=z.startTime;if(te>R)break;var me=z.transferSize,Se=z.initiatorType;me&&d_(Se)&&(z=z.responseEnd,S+=me*(z<R?1:(R-te)/(z-te)))}if(--l,i+=8*(m+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ph=null,Ih=null;function Uc(t){return t.nodeType===9?t:t.ownerDocument}function p_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Bh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fh=null;function WS(){var t=window.event;return t&&t.type==="popstate"?t===Fh?!1:(Fh=t,!0):(Fh=null,!1)}var g_=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,__=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof __<"u"?function(t){return __.resolve(null).then(t).catch(KS)}:g_;function KS(t){setTimeout(function(){throw t})}function ps(t){return t==="head"}function v_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),zr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")tl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,tl(s);for(var m=s.firstChild;m;){var S=m.nextSibling,R=m.nodeName;m[Ya]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=S}}else s==="body"&&tl(t.ownerDocument.body);s=f}while(s);zr(i)}function x_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function zh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":zh(s),Ka(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function ZS(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ya])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function jS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ti(t.nextSibling),t===null))return null;return t}function y_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ti(t.nextSibling),t===null))return null;return t}function Hh(t){return t.data==="$?"||t.data==="$~"}function Gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function QS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ti(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vh=null;function S_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ti(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function M_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function b_(t,i,s){switch(i=Uc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function tl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ka(t)}var Ai=new Map,E_=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Da=H.d;H.d={f:JS,r:$S,D:eM,C:tM,L:nM,m:iM,X:sM,S:aM,M:rM};function JS(){var t=Da.f(),i=Tc();return t||i}function $S(t){var i=da(t);i!==null&&i.tag===5&&i.type==="form"?Gg(i):Da.r(t)}var Ir=typeof document>"u"?null:document;function T_(t,i,s){var l=Ir;if(l&&typeof i=="string"&&i){var f=Pt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),E_.has(f)||(E_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Bn(i,"link",t),_n(i),l.head.appendChild(i)))}}function eM(t){Da.D(t),T_("dns-prefetch",t,null)}function tM(t,i){Da.C(t,i),T_("preconnect",t,i)}function nM(t,i,s){Da.L(t,i,s);var l=Ir;if(l&&t&&i){var f='link[rel="preload"][as="'+Pt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Pt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Pt(s.imageSizes)+'"]')):f+='[href="'+Pt(t)+'"]';var m=f;switch(i){case"style":m=Br(t);break;case"script":m=Fr(t)}Ai.has(m)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ai.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(nl(m))||i==="script"&&l.querySelector(il(m))||(i=l.createElement("link"),Bn(i,"link",t),_n(i),l.head.appendChild(i)))}}function iM(t,i){Da.m(t,i);var s=Ir;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Pt(l)+'"][href="'+Pt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Fr(t)}if(!Ai.has(m)&&(t=_({rel:"modulepreload",href:t},i),Ai.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(il(m)))return}l=s.createElement("link"),Bn(l,"link",t),_n(l),s.head.appendChild(l)}}}function aM(t,i,s){Da.S(t,i,s);var l=Ir;if(l&&t){var f=Za(l).hoistableStyles,m=Br(t);i=i||"default";var S=f.get(m);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(nl(m)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ai.get(m))&&kh(t,s);var z=S=l.createElement("link");_n(z),Bn(z,"link",t),z._p=new Promise(function(te,me){z.onload=te,z.onerror=me}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Pc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(m,S)}}}function sM(t,i){Da.X(t,i);var s=Ir;if(s&&t){var l=Za(s).hoistableScripts,f=Fr(t),m=l.get(f);m||(m=s.querySelector(il(f)),m||(t=_({src:t,async:!0},i),(i=Ai.get(f))&&Xh(t,i),m=s.createElement("script"),_n(m),Bn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function rM(t,i){Da.M(t,i);var s=Ir;if(s&&t){var l=Za(s).hoistableScripts,f=Fr(t),m=l.get(f);m||(m=s.querySelector(il(f)),m||(t=_({src:t,async:!0,type:"module"},i),(i=Ai.get(f))&&Xh(t,i),m=s.createElement("script"),_n(m),Bn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function A_(t,i,s,l){var f=(f=ae.current)?Oc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Br(s.href),s=Za(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Br(s.href);var m=Za(f).hoistableStyles,S=m.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,S),(m=f.querySelector(nl(t)))&&!m._p&&(S.instance=m,S.state.loading=5),Ai.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ai.set(t,s),m||oM(f,t,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Fr(s),s=Za(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Br(t){return'href="'+Pt(t)+'"'}function nl(t){return'link[rel="stylesheet"]['+t+"]"}function R_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function oM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Bn(i,"link",s),_n(i),t.head.appendChild(i))}function Fr(t){return'[src="'+Pt(t)+'"]'}function il(t){return"script[async]"+t}function w_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Pt(s.href)+'"]');if(l)return i.instance=l,_n(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_n(l),Bn(l,"style",f),Pc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Br(s.href);var m=t.querySelector(nl(f));if(m)return i.state.loading|=4,i.instance=m,_n(m),m;l=R_(s),(f=Ai.get(f))&&kh(l,f),m=(t.ownerDocument||t).createElement("link"),_n(m);var S=m;return S._p=new Promise(function(R,z){S.onload=R,S.onerror=z}),Bn(m,"link",l),i.state.loading|=4,Pc(m,s.precedence,t),i.instance=m;case"script":return m=Fr(s.src),(f=t.querySelector(il(m)))?(i.instance=f,_n(f),f):(l=s,(f=Ai.get(m))&&(l=_({},s),Xh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_n(f),Bn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Pc(l,s.precedence,t));return i.instance}function Pc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)m=R;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function kh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Xh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ic=null;function C_(t,i,s){if(Ic===null){var l=new Map,f=Ic=new Map;f.set(s,l)}else f=Ic,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Ya]||m[gn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=t+S;var R=l.get(S);R?R.push(m):l.set(S,[m])}}return l}function D_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function lM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function N_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Br(l.href),m=i.querySelector(nl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Bc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,_n(m);return}m=i.ownerDocument||i,l=R_(l),(f=Ai.get(f))&&kh(l,f),m=m.createElement("link"),_n(m);var S=m;S._p=new Promise(function(R,z){S.onload=R,S.onerror=z}),Bn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Bc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Wh=0;function uM(t,i){return t.stylesheets&&t.count===0&&zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Wh===0&&(Wh=62500*XS());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Wh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function zc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,i.forEach(fM,t),Fc=null,Bc.call(t))}function fM(t,i){if(!(i.state.loading&4)){var s=Fc.get(t);if(s)var l=s.get(null);else{s=new Map,Fc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),m=s.get(S)||l,m===l&&s.set(null,f),s.set(S,f),this.count++,l=Bc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var al={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function hM(t,i,s,l,f,m,S,R,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function L_(t,i,s,l,f,m,S,R,z,te,me,Se){return t=new hM(t,i,s,S,z,te,me,Se,R),i=1,m===!0&&(i|=24),m=li(3,null,null,i),t.current=m,m.stateNode=t,i=Ef(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},wf(m),t}function U_(t){return t?(t=mr,t):mr}function O_(t,i,s,l,f,m){f=U_(f),l.context===null?l.context=f:l.pendingContext=f,l=is(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=as(t,l,i),s!==null&&(ti(s,t,i),Io(s,t,i))}function P_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function qh(t,i){P_(t,i),(t=t.alternate)&&P_(t,i)}function I_(t){if(t.tag===13||t.tag===31){var i=Is(t,67108864);i!==null&&ti(i,t,67108864),qh(t,67108864)}}function B_(t){if(t.tag===13||t.tag===31){var i=di();i=vo(i);var s=Is(t,i);s!==null&&ti(s,t,i),qh(t,i)}}var Hc=!0;function dM(t,i,s,l){var f=F.T;F.T=null;var m=H.p;try{H.p=2,Yh(t,i,s,l)}finally{H.p=m,F.T=f}}function pM(t,i,s,l){var f=F.T;F.T=null;var m=H.p;try{H.p=8,Yh(t,i,s,l)}finally{H.p=m,F.T=f}}function Yh(t,i,s,l){if(Hc){var f=Kh(l);if(f===null)Uh(t,i,l,Gc,s),z_(t,l);else if(gM(f,t,i,s,l))l.stopPropagation();else if(z_(t,l),i&4&&-1<mM.indexOf(t)){for(;f!==null;){var m=da(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Re(m.pendingLanes);if(S!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var z=1<<31-Fe(S);R.entanglements[1]|=z,S&=~z}ji(m),(Nt&6)===0&&(bc=kt()+500,Jo(0))}}break;case 31:case 13:R=Is(m,2),R!==null&&ti(R,m,2),Tc(),qh(m,2)}if(m=Kh(l),m===null&&Uh(t,i,l,Gc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Uh(t,i,l,null,s)}}function Kh(t){return t=Zu(t),Zh(t)}var Gc=null;function Zh(t){if(Gc=null,t=ha(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Gc=t,null}function F_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case O:return 2;case E:return 8;case Q:case se:return 32;case he:return 268435456;default:return 32}default:return 32}}var jh=!1,ms=null,gs=null,_s=null,sl=new Map,rl=new Map,vs=[],mM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z_(t,i){switch(t){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(i.pointerId)}}function ol(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=da(i),i!==null&&I_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function gM(t,i,s,l,f){switch(i){case"focusin":return ms=ol(ms,t,i,s,l,f),!0;case"dragenter":return gs=ol(gs,t,i,s,l,f),!0;case"mouseover":return _s=ol(_s,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return sl.set(m,ol(sl.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,rl.set(m,ol(rl.get(m)||null,t,i,s,l,f)),!0}return!1}function H_(t){var i=ha(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,lr(t.priority,function(){B_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,lr(t.priority,function(){B_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Kh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ku=l,s.target.dispatchEvent(l),Ku=null}else return i=da(s),i!==null&&I_(i),t.blockedOn=s,!1;i.shift()}return!0}function G_(t,i,s){Vc(t)&&s.delete(i)}function _M(){jh=!1,ms!==null&&Vc(ms)&&(ms=null),gs!==null&&Vc(gs)&&(gs=null),_s!==null&&Vc(_s)&&(_s=null),sl.forEach(G_),rl.forEach(G_)}function kc(t,i){t.blockedOn===i&&(t.blockedOn=null,jh||(jh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_M)))}var Xc=null;function V_(t){Xc!==t&&(Xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Xc===t&&(Xc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Zh(l||s)===null)continue;break}var m=da(s);m!==null&&(t.splice(i,3),i-=3,Kf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function zr(t){function i(z){return kc(z,t)}ms!==null&&kc(ms,t),gs!==null&&kc(gs,t),_s!==null&&kc(_s,t),sl.forEach(i),rl.forEach(i);for(var s=0;s<vs.length;s++){var l=vs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<vs.length&&(s=vs[0],s.blockedOn===null);)H_(s),s.blockedOn===null&&vs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],S=f[Un]||null;if(typeof m=="function")S||V_(s);else if(S){var R=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[Un]||null)R=S.formAction;else if(Zh(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),V_(s)}}}function k_(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Qh(t){this._internalRoot=t}Wc.prototype.render=Qh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=di();O_(s,l,t,i,null,null)},Wc.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;O_(t.current,2,null,t,null,null),Tc(),i[Zn]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var i=yo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<vs.length&&i!==0&&i<vs[s].priority;s++);vs.splice(s,0,t),s===0&&H_(t)}};var X_=e.version;if(X_!=="19.2.7")throw Error(a(527,X_,"19.2.7"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var vM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{fe=qc.inject(vM),de=qc}catch{}}return cl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Qg,m=Jg,S=$g;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=L_(t,1,!1,null,null,s,l,null,f,m,S,k_),t[Zn]=i.current,Lh(t),new Qh(i)},cl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",m=Qg,S=Jg,R=$g,z=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(z=s.formState)),i=L_(t,1,!0,i,s??null,l,f,z,m,S,R,k_),i.context=U_(null),s=i.current,l=di(),l=vo(l),f=is(l),f.callback=null,as(s,f,l),s=l,i.current.lanes=s,Ve(i,s),ji(i),t[Zn]=i.current,Lh(t),new Wc(i)},cl.version="19.2.7",cl}var ev;function wM(){if(ev)return ed.exports;ev=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ed.exports=RM(),ed.exports}var CM=wM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="185",DM=0,tv=1,NM=2,Su=1,LM=2,Sl=3,Va=0,qn=1,ta=2,Ha=0,no=1,kd=2,nv=3,iv=4,UM=5,tr=100,OM=101,PM=102,IM=103,BM=104,FM=200,zM=201,HM=202,GM=203,Xd=204,Wd=205,VM=206,kM=207,XM=208,WM=209,qM=210,YM=211,KM=212,ZM=213,jM=214,qd=0,Yd=1,Kd=2,ro=3,Zd=4,jd=5,Qd=6,Jd=7,zp=0,QM=1,JM=2,aa=0,Ax=1,Rx=2,wx=3,Hp=4,Cx=5,Dx=6,Nx=7,av="attached",$M="detached",Lx=300,sr=301,oo=302,ad=303,sd=304,Gu=306,lo=1e3,na=1001,Cu=1002,An=1003,Ux=1004,Ml=1005,Rn=1006,Mu=1007,Ba=1008,gi=1009,Ox=1010,Px=1011,Rl=1012,Gp=1013,oa=1014,Ci=1015,ka=1016,Vp=1017,kp=1018,wl=1020,Ix=35902,Bx=35899,Fx=1021,zx=1022,Di=1023,Xa=1026,ir=1027,Xp=1028,Wp=1029,rr=1030,qp=1031,Yp=1033,bu=33776,Eu=33777,Tu=33778,Au=33779,$d=35840,ep=35841,tp=35842,np=35843,ip=36196,ap=37492,sp=37496,rp=37488,op=37489,Du=37490,lp=37491,cp=37808,up=37809,fp=37810,hp=37811,dp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,yp=37819,Sp=37820,Mp=37821,bp=36492,Ep=36494,Tp=36495,Ap=36283,Rp=36284,Nu=36285,wp=36286,Cl=2300,Dl=2301,rd=2302,sv=2303,rv=2400,ov=2401,lv=2402,eb=2500,tb=0,Hx=1,Cp=2,nb=3200,Lu=0,ib=1,Rs="",Tn="srgb",_i="srgb-linear",Uu="linear",zt="srgb",Hr=7680,cv=519,ab=512,sb=513,rb=514,Kp=515,ob=516,lb=517,Zp=518,cb=519,Dp=35044,uv="300 es",ia=2e3,Nl=2001;function ub(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ll(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hb(){const r=Ll("canvas");return r.style.display="block",r}const fv={};function Ou(...r){const e="THREE."+r.shift();console.log(e,...r)}function Gx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ze(...r){r=Gx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function at(...r){r=Gx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function io(...r){const e=r.join(" ");e in fv||(fv[e]=!0,Ze(...r))}function db(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const pb={[qd]:Yd,[Kd]:Qd,[Zd]:Jd,[ro]:jd,[Yd]:qd,[Qd]:Kd,[Jd]:Zd,[jd]:ro};class or{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hv=1234567;const El=Math.PI/180,co=180/Math.PI;function Gi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function St(r,e,n){return Math.max(e,Math.min(n,r))}function jp(r,e){return(r%e+e)%e}function mb(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function gb(r,e,n){return r!==e?(n-r)/(e-r):0}function Tl(r,e,n){return(1-n)*r+n*e}function _b(r,e,n,a){return Tl(r,e,1-Math.exp(-n*a))}function vb(r,e=1){return e-Math.abs(jp(r,e*2)-e)}function xb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function yb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function Sb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Mb(r,e){return r+Math.random()*(e-r)}function bb(r){return r*(.5-Math.random())}function Eb(r){r!==void 0&&(hv=r);let e=hv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tb(r){return r*El}function Ab(r){return r*co}function Rb(r){return(r&r-1)===0&&r!==0}function wb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Db(r,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),b=u((a-e)/2);switch(o){case"XYX":r.set(h*g,p*_,p*v,h*d);break;case"YZY":r.set(p*v,h*g,p*_,h*d);break;case"ZXZ":r.set(p*_,p*v,h*g,h*d);break;case"XZX":r.set(h*g,p*b,p*x,h*d);break;case"YXY":r.set(p*x,h*g,p*b,h*d);break;case"ZYZ":r.set(p*b,p*x,h*g,h*d);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nb={DEG2RAD:El,RAD2DEG:co,generateUUID:Gi,clamp:St,euclideanModulo:jp,mapLinear:mb,inverseLerp:gb,lerp:Tl,damp:_b,pingpong:vb,smoothstep:xb,smootherstep:yb,randInt:Sb,randFloat:Mb,randFloatSpread:bb,seededRandom:Eb,degToRad:Tb,radToDeg:Ab,isPowerOfTwo:Rb,ceilPowerOfTwo:wb,floorPowerOfTwo:Cb,setQuaternionFromProperEuler:Db,normalize:Ht,denormalize:zi},lm=class lm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lm.prototype.isVector2=!0;let mt=lm;class qa{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let p=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(_!==w||p!==v||d!==x||g!==b){let M=p*v+d*x+g*b+_*w;M<0&&(v=-v,x=-x,b=-b,w=-w,M=-M);let y=1-h;if(M<.9995){const P=Math.acos(M),B=Math.sin(P);y=Math.sin(y*P)/B,h=Math.sin(h*P)/B,p=p*y+v*h,d=d*y+x*h,g=g*y+b*h,_=_*y+w*h}else{p=p*y+v*h,d=d*y+x*h,g=g*y+b*h,_=_*y+w*h;const P=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=P,d*=P,g*=P,_*=P}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],p=a[o+1],d=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[n]=h*b+g*_+p*x-d*v,e[n+1]=p*b+g*v+d*_-h*x,e[n+2]=d*b+g*x+h*v-p*_,e[n+3]=g*b-h*_-p*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(o/2),_=h(c/2),v=p(a/2),x=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+o*d-c*p,this._y=o*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-o*h,this._w=u*g-a*h-o*p-c*d,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cm=class cm{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+p*d+u*_-h*g,this.y=a+p*g+h*d-c*_,this.z=o+p*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cm.prototype.isVector3=!0;let J=cm;const od=new J,dv=new qa,um=class um{constructor(e,n,a,o,c,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d)}set(e,n,a,o,c,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],w=o[0],M=o[3],y=o[6],P=o[1],B=o[4],C=o[7],U=o[2],D=o[5],N=o[8];return c[0]=u*w+h*P+p*U,c[3]=u*M+h*B+p*D,c[6]=u*y+h*C+p*N,c[1]=d*w+g*P+_*U,c[4]=d*M+g*B+_*D,c[7]=d*y+g*C+_*N,c[2]=v*w+x*P+b*U,c[5]=v*M+x*B+b*D,c[8]=v*y+x*C+b*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*u*g-n*h*d-a*c*g+a*h*p+o*c*d-o*u*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*c,x=d*c-u*p,b=n*_+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(o*d-g*a)*w,e[2]=(h*a-o*u)*w,e[3]=v*w,e[4]=(g*n-o*p)*w,e[5]=(o*c-h*n)*w,e[6]=x*w,e[7]=(a*p-d*n)*w,e[8]=(u*n-a*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(e,n)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};um.prototype.isMatrix3=!0;let ot=um;const ld=new ot,pv=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const r={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===zt&&(o.r=Ga(o.r),o.g=Ga(o.g),o.b=Ga(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=ao(o.r),o.g=ao(o.g),o.b=ao(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rs?Uu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[_i]:{primaries:e,whitePoint:a,transfer:Uu,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:a,transfer:zt,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),r}const yt=Lb();function Ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gr;class Ub{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Gr===void 0&&(Gr=Ll("canvas")),Gr.width=e.width,Gr.height=e.height;const o=Gr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Gr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ga(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ga(n[a]/255)*255):n[a]=Ga(n[a]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ob=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(cd(o[u].image)):c.push(cd(o[u]))}else c=cd(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function cd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ub.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Pb=0;const ud=new J;class Ln extends or{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,a=na,o=na,c=Rn,u=Ba,h=Di,p=gi,d=Ln.DEFAULT_ANISOTROPY,g=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=Gi(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case na:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case na:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Lx;Ln.DEFAULT_ANISOTROPY=1;const fm=class fm{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],x=p[5],b=p[9],w=p[2],M=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+M)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(d+1)/2,C=(x+1)/2,U=(y+1)/2,D=(g+v)/4,N=(_+w)/4,T=(b+M)/4;return B>C&&B>U?B<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(B),o=D/a,c=N/a):C>U?C<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),a=D/o,c=T/o):U<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),a=N/c,o=T/c),this.set(a,o,c,n),this}let P=Math.sqrt((M-b)*(M-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(M-b)/P,this.y=(_-w)/P,this.z=(v-g)/P,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fm.prototype.isVector4=!0;let Yt=fm;class Ib extends or{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Ln(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Qp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends Ib{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Vx extends Ln{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bb extends Ln{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=class Hu{constructor(e,n,a,o,c,u,h,p,d,g,_,v,x,b,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d,g,_,v,x,b,w,M)}set(e,n,a,o,c,u,h,p,d,g,_,v,x,b,w,M){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=b,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Vr.setFromMatrixColumn(e,0).length(),c=1/Vr.setFromMatrixColumn(e,1).length(),u=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,w=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=x+b*d,n[5]=v-w*d,n[9]=-h*p,n[2]=w-v*d,n[6]=b+x*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,x=p*_,b=d*g,w=d*_;n[0]=v+w*h,n[4]=b*h-x,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-b,n[6]=w+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,x=p*_,b=d*g,w=d*_;n[0]=v-w*h,n[4]=-u*_,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*g,n[9]=w-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,w=h*_;n[0]=p*g,n[4]=b*d-x,n[8]=v*d+w,n[1]=p*_,n[5]=w*d+v,n[9]=x*d-b,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*d,b=h*p,w=h*d;n[0]=p*g,n[4]=w-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*_+b,n[10]=v-w*_}else if(e.order==="XZY"){const v=u*p,x=u*d,b=h*p,w=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+w,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=h*g,n[10]=w*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fb,e,zb)}lookAt(e,n,a){const o=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),ys.crossVectors(a,pi),ys.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),ys.crossVectors(a,pi)),ys.normalize(),Yc.crossVectors(pi,ys),o[0]=ys.x,o[4]=Yc.x,o[8]=pi.x,o[1]=ys.y,o[5]=Yc.y,o[9]=pi.y,o[2]=ys.z,o[6]=Yc.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],w=a[6],M=a[10],y=a[14],P=a[3],B=a[7],C=a[11],U=a[15],D=o[0],N=o[4],T=o[8],L=o[12],k=o[1],G=o[5],K=o[9],le=o[13],ue=o[2],j=o[6],F=o[10],H=o[14],$=o[3],ge=o[7],ve=o[11],I=o[15];return c[0]=u*D+h*k+p*ue+d*$,c[4]=u*N+h*G+p*j+d*ge,c[8]=u*T+h*K+p*F+d*ve,c[12]=u*L+h*le+p*H+d*I,c[1]=g*D+_*k+v*ue+x*$,c[5]=g*N+_*G+v*j+x*ge,c[9]=g*T+_*K+v*F+x*ve,c[13]=g*L+_*le+v*H+x*I,c[2]=b*D+w*k+M*ue+y*$,c[6]=b*N+w*G+M*j+y*ge,c[10]=b*T+w*K+M*F+y*ve,c[14]=b*L+w*le+M*H+y*I,c[3]=P*D+B*k+C*ue+U*$,c[7]=P*N+B*G+C*j+U*ge,c[11]=P*T+B*K+C*F+U*ve,c[15]=P*L+B*le+C*H+U*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],w=e[7],M=e[11],y=e[15],P=p*x-d*v,B=h*x-d*_,C=h*v-p*_,U=u*x-d*g,D=u*v-p*g,N=u*_-h*g;return n*(w*P-M*B+y*C)-a*(b*P-M*U+y*D)+o*(b*B-w*U+y*N)-c*(b*C-w*D+M*N)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],h=e[9],p=e[2],d=e[6],g=e[10];return n*(u*g-h*d)-a*(c*g-h*p)+o*(c*d-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],w=e[13],M=e[14],y=e[15],P=n*h-a*u,B=n*p-o*u,C=n*d-c*u,U=a*p-o*h,D=a*d-c*h,N=o*d-c*p,T=g*w-_*b,L=g*M-v*b,k=g*y-x*b,G=_*M-v*w,K=_*y-x*w,le=v*y-x*M,ue=P*le-B*K+C*G+U*k-D*L+N*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ue;return e[0]=(h*le-p*K+d*G)*j,e[1]=(o*K-a*le-c*G)*j,e[2]=(w*N-M*D+y*U)*j,e[3]=(v*D-_*N-x*U)*j,e[4]=(p*k-u*le-d*L)*j,e[5]=(n*le-o*k+c*L)*j,e[6]=(M*C-b*N-y*B)*j,e[7]=(g*N-v*C+x*B)*j,e[8]=(u*K-h*k+d*T)*j,e[9]=(a*k-n*K-c*T)*j,e[10]=(b*D-w*C+y*P)*j,e[11]=(_*C-g*D-x*P)*j,e[12]=(h*L-u*G-p*T)*j,e[13]=(n*G-a*L+o*T)*j,e[14]=(w*B-b*U-M*P)*j,e[15]=(g*U-_*B+v*P)*j,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+a,g*p-o*u,0,d*p-o*h,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,b=c*_,w=u*g,M=u*_,y=h*_,P=p*d,B=p*g,C=p*_,U=a.x,D=a.y,N=a.z;return o[0]=(1-(w+y))*U,o[1]=(x+C)*U,o[2]=(b-B)*U,o[3]=0,o[4]=(x-C)*D,o[5]=(1-(v+y))*D,o[6]=(M+P)*D,o[7]=0,o[8]=(b+B)*N,o[9]=(M-P)*N,o[10]=(1-(v+w))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Vr.set(o[0],o[1],o[2]).length();const h=Vr.set(o[4],o[5],o[6]).length(),p=Vr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ii.copy(this);const d=1/u,g=1/h,_=1/p;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,n.setFromRotationMatrix(Ii),a.x=u,a.y=h,a.z=p,this}makePerspective(e,n,a,o,c,u,h=ia,p=!1){const d=this.elements,g=2*c/(n-e),_=2*c/(a-o),v=(n+e)/(n-e),x=(a+o)/(a-o);let b,w;if(p)b=c/(u-c),w=u*c/(u-c);else if(h===ia)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===Nl)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=ia,p=!1){const d=this.elements,g=2/(n-e),_=2/(a-o),v=-(n+e)/(n-e),x=-(a+o)/(a-o);let b,w;if(p)b=1/(u-c),w=u/(u-c);else if(h===ia)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===Nl)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Hu.prototype.isMatrix4=!0;let ht=Hu;const Vr=new J,Ii=new ht,Fb=new J(0,0,0),zb=new J(1,1,1),ys=new J,Yc=new J,pi=new J,gv=new ht,_v=new qa;class Wa{constructor(e=0,n=0,a=0,o=Wa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _v.setFromEuler(this),this.setFromQuaternion(_v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wa.DEFAULT_ORDER="XYZ";class kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hb=0;const vv=new J,kr=new qa,Na=new ht,Kc=new J,ul=new J,Gb=new J,Vb=new qa,xv=new J(1,0,0),yv=new J(0,1,0),Sv=new J(0,0,1),Mv={type:"added"},kb={type:"removed"},Xr={type:"childadded",child:null},fd={type:"childremoved",child:null};class sn extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new J,n=new Wa,a=new qa,o=new J(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ht},normalMatrix:{value:new ot}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(yv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,n){return vv.copy(e).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(yv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Kc.copy(e):Kc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(ul,Kc,this.up):Na.lookAt(Kc,ul,this.up),this.quaternion.setFromRotationMatrix(Na),o&&(Na.extractRotation(o.matrixWorld),kr.setFromRotationMatrix(Na),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mv),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kb),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mv),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}sn.DEFAULT_UP=new J(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fa extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const M=n.getJointPose(w,a),y=this._getHandJoint(d,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Fa;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function dd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class nt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=yt.workingColorSpace){return this.r=e,this.g=n,this.b=a,yt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=yt.workingColorSpace){if(e=jp(e,1),n=St(n,0,1),a=St(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=dd(u,c,e+1/3),this.g=dd(u,c,e),this.b=dd(u,c,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,n=Tn){function a(c){c!==void 0&&parseFloat(c)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const a=Xx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return yt.workingToColorSpace(Gn.copy(this),e),Math.round(St(Gn.r*255,0,255))*65536+Math.round(St(Gn.g*255,0,255))*256+Math.round(St(Gn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.workingToColorSpace(Gn.copy(this),n);const a=Gn.r,o=Gn.g,c=Gn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-a)/_+2;break;case c:p=(a-o)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=yt.workingColorSpace){return yt.workingToColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Tn){yt.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,a=Gn.g,o=Gn.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+n,Ss.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Ss),e.getHSL(Zc);const a=Tl(Ss.h,Zc.h,n),o=Tl(Ss.s,Zc.s,n),c=Tl(Ss.l,Zc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new nt;nt.NAMES=Xx;class Wb extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wa,this.environmentIntensity=1,this.environmentRotation=new Wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bi=new J,La=new J,pd=new J,Ua=new J,Wr=new J,qr=new J,bv=new J,md=new J,gd=new J,_d=new J,vd=new Yt,xd=new Yt,yd=new Yt;class Hi{constructor(e=new J,n=new J,a=new J){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Bi.subVectors(e,n),o.cross(Bi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Bi.subVectors(o,n),La.subVectors(a,n),pd.subVectors(e,n);const u=Bi.dot(Bi),h=Bi.dot(La),p=Bi.dot(pd),d=La.dot(La),g=La.dot(pd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*p-h*g)*v,b=(u*g-h*p)*v;return c.set(1-x-b,b,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,n,a,o,c,u,h,p){return this.getBarycoord(e,n,a,o,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ua.x),p.addScaledVector(u,Ua.y),p.addScaledVector(h,Ua.z),p)}static getInterpolatedAttribute(e,n,a,o,c,u){return vd.setScalar(0),xd.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,n),xd.fromBufferAttribute(e,a),yd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(vd,c.x),u.addScaledVector(xd,c.y),u.addScaledVector(yd,c.z),u}static isFrontFacing(e,n,a,o){return Bi.subVectors(a,n),La.subVectors(e,n),Bi.cross(La).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Bi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Hi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;Wr.subVectors(o,a),qr.subVectors(c,a),md.subVectors(e,a);const p=Wr.dot(md),d=qr.dot(md);if(p<=0&&d<=0)return n.copy(a);gd.subVectors(e,o);const g=Wr.dot(gd),_=qr.dot(gd);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Wr,u);_d.subVectors(e,c);const x=Wr.dot(_d),b=qr.dot(_d);if(b>=0&&x<=b)return n.copy(c);const w=x*d-p*b;if(w<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(a).addScaledVector(qr,h);const M=g*b-x*_;if(M<=0&&_-g>=0&&x-b>=0)return bv.subVectors(c,o),h=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(bv,h);const y=1/(M+w+v);return u=w*y,h=v*y,n.copy(a).addScaledVector(Wr,u).addScaledVector(qr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class la{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(c,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),jc.copy(a.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),Qc.subVectors(this.max,fl),Yr.subVectors(e.a,fl),Kr.subVectors(e.b,fl),Zr.subVectors(e.c,fl),Ms.subVectors(Kr,Yr),bs.subVectors(Zr,Kr),Zs.subVectors(Yr,Zr);let n=[0,-Ms.z,Ms.y,0,-bs.z,bs.y,0,-Zs.z,Zs.y,Ms.z,0,-Ms.x,bs.z,0,-bs.x,Zs.z,0,-Zs.x,-Ms.y,Ms.x,0,-bs.y,bs.x,0,-Zs.y,Zs.x,0];return!Sd(n,Yr,Kr,Zr,Qc)||(n=[1,0,0,0,1,0,0,0,1],!Sd(n,Yr,Kr,Zr,Qc))?!1:(Jc.crossVectors(Ms,bs),n=[Jc.x,Jc.y,Jc.z],Sd(n,Yr,Kr,Zr,Qc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new J,new J,new J,new J,new J,new J,new J,new J],Fi=new J,jc=new la,Yr=new J,Kr=new J,Zr=new J,Ms=new J,bs=new J,Zs=new J,fl=new J,Qc=new J,Jc=new J,js=new J;function Sd(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){js.fromArray(r,c);const h=o.x*Math.abs(js.x)+o.y*Math.abs(js.y)+o.z*Math.abs(js.z),p=e.dot(js),d=n.dot(js),g=a.dot(js);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const Mn=new J,$c=new mt;let qb=0;class Yn extends or{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Dp,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)$c.fromBufferAttribute(this,n),$c.applyMatrix3(e),this.setXY(n,$c.x,$c.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=zi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ht(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),o=Ht(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),o=Ht(o,this.array),c=Ht(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wx extends Yn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class qx extends Yn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ni extends Yn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const Yb=new la,hl=new J,Md=new J;class ca{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):Yb.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const n=hl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(hl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(Md)),this.expandByPoint(hl.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kb=0;const Ri=new ht,bd=new sn,jr=new J,mi=new la,dl=new la,Nn=new J;class vi extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ub(e)?qx:Wx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ot().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,n,a){return Ri.makeTranslation(e,n,a),this.applyMatrix4(Ri),this}scale(e,n,a){return Ri.makeScale(e,n,a),this.applyMatrix4(Ri),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ni(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(Nn.addVectors(mi.min,dl.min),mi.expandByPoint(Nn),Nn.addVectors(mi.max,dl.max),mi.expandByPoint(Nn)):(mi.expandByPoint(dl.min),mi.expandByPoint(dl.max))}mi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Nn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Nn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Nn.fromBufferAttribute(h,d),p&&(jr.fromBufferAttribute(e,d),Nn.add(jr)),o=Math.max(o,a.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Yn(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],p=[];for(let T=0;T<a.count;T++)h[T]=new J,p[T]=new J;const d=new J,g=new J,_=new J,v=new mt,x=new mt,b=new mt,w=new J,M=new J;function y(T,L,k){d.fromBufferAttribute(a,T),g.fromBufferAttribute(a,L),_.fromBufferAttribute(a,k),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,L),b.fromBufferAttribute(c,k),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(G),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),h[T].add(w),h[L].add(w),h[k].add(w),p[T].add(M),p[L].add(M),p[k].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,L=P.length;T<L;++T){const k=P[T],G=k.start,K=k.count;for(let le=G,ue=G+K;le<ue;le+=3)y(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const B=new J,C=new J,U=new J,D=new J;function N(T){U.fromBufferAttribute(o,T),D.copy(U);const L=h[T];B.copy(L),B.sub(U.multiplyScalar(U.dot(L))).normalize(),C.crossVectors(D,L);const G=C.dot(p[T])<0?-1:1;u.setXYZW(T,B.x,B.y,B.z,G)}for(let T=0,L=P.length;T<L;++T){const k=P[T],G=k.start,K=k.count;for(let le=G,ue=G+K;le<ue;le+=3)N(e.getX(le+0)),N(e.getX(le+1)),N(e.getX(le+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new J,c=new J,u=new J,h=new J,p=new J,d=new J,g=new J,_=new J;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,w),d.fromBufferAttribute(a,M),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(w,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let x=0,b=0;for(let w=0,M=p.length;w<M;w++){h.isInterleavedBufferAttribute?x=p[w]*h.data.stride+h.offset:x=p[w]*g;for(let y=0;y<g;y++)v[b++]=d[x++]}return new Yn(v,g,_)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Dp,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new J;class Jp{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix4(e),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyNormalMatrix(e),this.setXYZ(n,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.transformDirection(e),this.setXYZ(n,kn.x,kn.y,kn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=zi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ht(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=zi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=zi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=zi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=zi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),o=Ht(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),o=Ht(o,this.array),c=Ht(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Ou("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ou("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let jb=0;class Vi extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=no,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Wd,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(a.blending=this.blending),this.side!==Va&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Xd&&(a.blendSrc=this.blendSrc),this.blendDst!==Wd&&(a.blendDst=this.blendDst),this.blendEquation!==tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new mt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pa=new J,Ed=new J,eu=new J,Es=new J,Td=new J,tu=new J,Ad=new J;class Vu{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,n),Pa.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Ed.copy(e).add(n).multiplyScalar(.5),eu.copy(n).sub(e).normalize(),Es.copy(this.origin).sub(Ed);const c=e.distanceTo(n)*.5,u=-this.direction.dot(eu),h=Es.dot(this.direction),p=-Es.dot(eu),d=Es.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*p-h,v=u*h-p,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ed).addScaledVector(eu,v),x}intersectSphere(e,n){Pa.subVectors(e.center,this.origin);const a=Pa.dot(this.direction),o=Pa.dot(Pa)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,n,a,o,c){Td.subVectors(n,e),tu.subVectors(a,e),Ad.crossVectors(Td,tu);let u=this.direction.dot(Ad),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Es.subVectors(this.origin,e);const p=h*this.direction.dot(tu.crossVectors(Es,tu));if(p<0)return null;const d=h*this.direction.dot(Td.cross(Es));if(d<0||p+d>u)return null;const g=-h*Es.dot(Ad);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ar extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ev=new ht,Qs=new Vu,nu=new ca,Tv=new J,iu=new J,au=new J,su=new J,Rd=new J,ru=new J,Av=new J,ou=new J;class Kn extends sn{constructor(e=new vi,n=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){ru.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(Rd.fromBufferAttribute(_,e),u?ru.addScaledVector(Rd,g):ru.addScaledVector(Rd.sub(n),g))}n.add(ru)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),nu.copy(a.boundingSphere),nu.applyMatrix4(c),Qs.copy(e.ray).recast(e.near),!(nu.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(nu,Tv)===null||Qs.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(c).invert(),Qs.copy(e.ray).applyMatrix4(Ev),!(a.boundingBox!==null&&Qs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Qs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const M=v[b],y=u[M.materialIndex],P=Math.max(M.start,x.start),B=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let C=P,U=B;C<U;C+=3){const D=h.getX(C),N=h.getX(C+1),T=h.getX(C+2);o=lu(this,y,e,a,d,g,_,D,N,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let M=b,y=w;M<y;M+=3){const P=h.getX(M),B=h.getX(M+1),C=h.getX(M+2);o=lu(this,u,e,a,d,g,_,P,B,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const M=v[b],y=u[M.materialIndex],P=Math.max(M.start,x.start),B=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let C=P,U=B;C<U;C+=3){const D=C,N=C+1,T=C+2;o=lu(this,y,e,a,d,g,_,D,N,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(p.count,x.start+x.count);for(let M=b,y=w;M<y;M+=3){const P=M,B=M+1,C=M+2;o=lu(this,u,e,a,d,g,_,P,B,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function Qb(r,e,n,a,o,c,u,h){let p;if(e.side===qn?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,e.side===Va,h),p===null)return null;ou.copy(h),ou.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(ou);return d<n.near||d>n.far?null:{distance:d,point:ou.clone(),object:r}}function lu(r,e,n,a,o,c,u,h,p,d){r.getVertexPosition(h,iu),r.getVertexPosition(p,au),r.getVertexPosition(d,su);const g=Qb(r,e,n,a,iu,au,su,Av);if(g){const _=new J;Hi.getBarycoord(Av,iu,au,su,_),o&&(g.uv=Hi.getInterpolatedAttribute(o,h,p,d,_,new mt)),c&&(g.uv1=Hi.getInterpolatedAttribute(c,h,p,d,_,new mt)),u&&(g.normal=Hi.getInterpolatedAttribute(u,h,p,d,_,new J),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new J,materialIndex:0};Hi.getNormal(iu,au,su,v.normal),g.face=v,g.barycoord=_}return g}const pl=new Yt,Rv=new Yt,wv=new Yt,Jb=new Yt,Cv=new ht,cu=new J,wd=new ca,Dv=new ht,Cd=new Vu;class $b extends Kn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=av,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new la),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,cu),this.boundingBox.expandByPoint(cu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ca),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,cu),this.boundingSphere.expandByPoint(cu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wd.copy(this.boundingSphere),wd.applyMatrix4(o),e.ray.intersectsSphere(wd)!==!1&&(Dv.copy(o).invert(),Cd.copy(e.ray).applyMatrix4(Dv),!(this.boundingBox!==null&&Cd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Cd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Yt,n=this.geometry.attributes.skinWeight;for(let a=0,o=n.count;a<o;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===av?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$M?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,o=this.geometry;Rv.fromBufferAttribute(o.attributes.skinIndex,e),wv.fromBufferAttribute(o.attributes.skinWeight,e),n.isVector4?(pl.copy(n),n.set(0,0,0,0)):(pl.set(...n,1),n.set(0,0,0)),pl.applyMatrix4(this.bindMatrix);for(let c=0;c<4;c++){const u=wv.getComponent(c);if(u!==0){const h=Rv.getComponent(c);Cv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(Jb.copy(pl).applyMatrix4(Cv),u)}}return n.isVector4&&(n.w=pl.w),n.applyMatrix4(this.bindMatrixInverse)}}class Yx extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $p extends Ln{constructor(e=null,n=1,a=1,o,c,u,h,p,d=An,g=An,_,v){super(null,u,h,p,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nv=new ht,eE=new ht;class em{constructor(e=[],n=[]){this.uuid=Gi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new ht;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:eE;Nv.multiplyMatrices(h,n[c]),Nv.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new em(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new $p(n,e,e,Di,Ci);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const o=this.bones[n];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,o=e.bones.length;a<o;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ze("Skeleton: No bone found with UUID:",c),u=new Yx),this.bones.push(u),this.boneInverses.push(new ht().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let o=0,c=n.length;o<c;o++){const u=n[o];e.bones.push(u.uuid);const h=a[o];e.boneInverses.push(h.toArray())}return e}}class Np extends Yn{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qr=new ht,Lv=new ht,uu=[],Uv=new la,tE=new ht,ml=new Kn,gl=new ca;class nE extends Kn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Np(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,tE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new la),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Qr),Uv.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Uv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ca),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Qr),gl.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(gl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(ml.geometry=this.geometry,ml.material=this.material,ml.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gl.copy(this.boundingSphere),gl.applyMatrix4(a),e.ray.intersectsSphere(gl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Qr),Lv.multiplyMatrices(a,Qr),ml.matrixWorld=Lv,ml.raycast(e,uu);for(let u=0,h=uu.length;u<h;u++){const p=uu[u];p.instanceId=c,p.object=this,n.push(p)}uu.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Np(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new $p(new Float32Array(o*this.count),o,this.count,Xp,Ci));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=o*e;return c[p]=h,c.set(a,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dd=new J,iE=new J,aE=new ot;class er{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Dd.subVectors(a,n).cross(iE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(Dd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||aE.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new ca,sE=new mt(.5,.5),fu=new J;class tm{constructor(e=new er,n=new er,a=new er,o=new er,c=new er,u=new er){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ia,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],w=c[9],M=c[10],y=c[11],P=c[12],B=c[13],C=c[14],U=c[15];if(o[0].setComponents(d-u,x-g,y-b,U-P).normalize(),o[1].setComponents(d+u,x+g,y+b,U+P).normalize(),o[2].setComponents(d+h,x+_,y+w,U+B).normalize(),o[3].setComponents(d-h,x-_,y-w,U-B).normalize(),a)o[4].setComponents(p,v,M,C).normalize(),o[5].setComponents(d-p,x-v,y-M,U-C).normalize();else if(o[4].setComponents(d-p,x-v,y-M,U-C).normalize(),n===ia)o[5].setComponents(d+p,x+v,y+M,U+C).normalize();else if(n===Nl)o[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);const n=sE.distanceTo(e.center);return Js.radius=.7071067811865476+n,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(fu.x=o.normal.x>0?e.max.x:e.min.x,fu.y=o.normal.y>0?e.max.y:e.min.y,fu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kx extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pu=new J,Iu=new J,Ov=new ht,_l=new Vu,hu=new ca,Nd=new J,Pv=new J;class nm extends sn{constructor(e=new vi,n=new Kx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Pu.fromBufferAttribute(n,o-1),Iu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Pu.distanceTo(Iu);e.setAttribute("lineDistance",new ni(a,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(o),hu.radius+=c,e.ray.intersectsSphere(hu)===!1)return;Ov.copy(o).invert(),_l.copy(e.ray).applyMatrix4(Ov);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let w=x,M=b-1;w<M;w+=d){const y=g.getX(w),P=g.getX(w+1),B=du(this,e,_l,p,y,P,w);B&&n.push(B)}if(this.isLineLoop){const w=g.getX(b-1),M=g.getX(x),y=du(this,e,_l,p,w,M,b-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let w=x,M=b-1;w<M;w+=d){const y=du(this,e,_l,p,w,w+1,w);y&&n.push(y)}if(this.isLineLoop){const w=du(this,e,_l,p,b-1,x,b-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function du(r,e,n,a,o,c,u){const h=r.geometry.attributes.position;if(Pu.fromBufferAttribute(h,o),Iu.fromBufferAttribute(h,c),n.distanceSqToSegment(Pu,Iu,Nd,Pv)>a)return;Nd.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Nd);if(!(d<e.near||d>e.far))return{distance:d,point:Pv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Iv=new J,Bv=new J;class rE extends nm{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Iv.fromBufferAttribute(n,o),Bv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Iv.distanceTo(Bv);e.setAttribute("lineDistance",new ni(a,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oE extends nm{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Zx extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new ht,Lp=new Vu,pu=new ca,mu=new J;class lE extends sn{constructor(e=new vi,n=new Zx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),pu.copy(a.boundingSphere),pu.applyMatrix4(o),pu.radius+=c,e.ray.intersectsSphere(pu)===!1)return;Fv.copy(o).invert(),Lp.copy(e.ray).applyMatrix4(Fv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let b=v,w=x;b<w;b++){const M=d.getX(b);mu.fromBufferAttribute(_,M),zv(mu,M,p,o,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let b=v,w=x;b<w;b++)mu.fromBufferAttribute(_,b),zv(mu,b,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zv(r,e,n,a,o,c,u){const h=Lp.distanceSqToPoint(r);if(h<n){const p=new J;Lp.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class jx extends Ln{constructor(e=[],n=sr,a,o,c,u,h,p,d,g){super(e,n,a,o,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uo extends Ln{constructor(e,n,a=oa,o,c,u,h=An,p=An,d,g=Xa,_=1){if(g!==Xa&&g!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cE extends uo{constructor(e,n=oa,a=sr,o,c,u=An,h=An,p,d=Xa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qx extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pl extends vi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,o,u,2),b("x","z","y",1,-1,e,a,-n,o,u,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new ni(d,3)),this.setAttribute("normal",new ni(g,3)),this.setAttribute("uv",new ni(_,2));function b(w,M,y,P,B,C,U,D,N,T,L){const k=C/N,G=U/T,K=C/2,le=U/2,ue=D/2,j=N+1,F=T+1;let H=0,$=0;const ge=new J;for(let ve=0;ve<F;ve++){const I=ve*G-le;for(let W=0;W<j;W++){const ye=W*k-K;ge[w]=ye*P,ge[M]=I*B,ge[y]=ue,d.push(ge.x,ge.y,ge.z),ge[w]=0,ge[M]=0,ge[y]=D>0?1:-1,g.push(ge.x,ge.y,ge.z),_.push(W/N),_.push(1-ve/T),H+=1}}for(let ve=0;ve<T;ve++)for(let I=0;I<N;I++){const W=v+I+j*ve,ye=v+I+j*(ve+1),Te=v+(I+1)+j*(ve+1),Ne=v+(I+1)+j*ve;p.push(W,ye,Ne),p.push(ye,Te,Ne),$+=6}h.addGroup(x,$,L),x+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ku extends vi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,g=p+1,_=e/h,v=n/p,x=[],b=[],w=[],M=[];for(let y=0;y<g;y++){const P=y*v-u;for(let B=0;B<d;B++){const C=B*_-c;b.push(C,-P,0),w.push(0,0,1),M.push(B/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<h;P++){const B=P+d*y,C=P+d*(y+1),U=P+1+d*(y+1),D=P+1+d*y;x.push(B,C,D),x.push(C,U,D)}this.setIndex(x),this.setAttribute("position",new ni(b,3)),this.setAttribute("normal",new ni(w,3)),this.setAttribute("uv",new ni(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bu extends vi{constructor(e=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+h,Math.PI);let d=0;const g=[],_=new J,v=new J,x=[],b=[],w=[],M=[];for(let y=0;y<=a;y++){const P=[],B=y/a,C=u+B*h,U=e*Math.cos(C),D=Math.sqrt(e*e-U*U);let N=0;y===0&&u===0?N=.5/n:y===a&&p===Math.PI&&(N=-.5/n);for(let T=0;T<=n;T++){const L=T/n,k=o+L*c;_.x=-D*Math.cos(k),_.y=U,_.z=D*Math.sin(k),b.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),M.push(L+N,1-B),P.push(d++)}g.push(P)}for(let y=0;y<a;y++)for(let P=0;P<n;P++){const B=g[y][P+1],C=g[y][P],U=g[y+1][P],D=g[y+1][P+1];(y!==0||u>0)&&x.push(B,C,D),(y!==a-1||p<Math.PI)&&x.push(C,U,D)}this.setIndex(x),this.setAttribute("position",new ni(b,3)),this.setAttribute("normal",new ni(w,3)),this.setAttribute("uv",new ni(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function fo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(Hv(o))o.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(Hv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function Xn(r){const e={};for(let n=0;n<r.length;n++){const a=fo(r[n]);for(const o in a)e[o]=a[o]}return e}function Hv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function uE(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function Jx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const fE={clone:fo,merge:Xn};var hE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hE,this.fragmentShader=dE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=uE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new nt().setHex(o.value);break;case"v2":this.uniforms[a].value=new mt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new J().fromArray(o.value);break;case"v4":this.uniforms[a].value=new Yt().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ot().fromArray(o.value);break;case"m4":this.uniforms[a].value=new ht().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pE extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class im extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ua extends im{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mE extends Vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.combine=zp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gE extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _E extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function gu(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vE(r){function e(o,c){return r[o]-r[c]}const n=r.length,a=new Array(n);for(let o=0;o!==n;++o)a[o]=o;return a.sort(e),a}function Gv(r,e,n){const a=r.length,o=new r.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)o[u++]=r[h+p]}return o}function xE(r,e,n,a){let o=1,c=r[0];for(;c!==void 0&&c[a]===void 0;)c=r[o++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=r[o++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=r[o++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=r[o++];while(c!==void 0)}class ho{constructor(e,n,a,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,o=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<o)){for(let h=a+2;;){if(o===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=o,o=n[++a],e<o)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(o=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o;for(let u=0;u!==o;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class yE extends ho{constructor(e,n,a,o){super(e,n,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rv,endingEnd:rv}}intervalChanged_(e,n,a){const o=this.parameterPositions;let c=e-2,u=e+1,h=o[c],p=o[u];if(h===void 0)switch(this.getSettings_().endingStart){case ov:c=e,h=2*n-a;break;case lv:c=o.length-2,h=n+o[c]-o[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case ov:u=e,p=2*a-n;break;case lv:u=1,p=a+o[1]-o[0];break;default:u=e-1,p=n}const d=(a-n)*.5,g=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,b=(a-n)/(o-n),w=b*b,M=w*b,y=-v*M+2*v*w-v*b,P=(1+v)*M+(-1.5-2*v)*w+(-.5+v)*b+1,B=(-1-x)*M+(1.5+x)*w+.5*b,C=x*M-x*w;for(let U=0;U!==h;++U)c[U]=y*u[g+U]+P*u[d+U]+B*u[p+U]+C*u[_+U];return c}}class SE extends ho{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=(a-n)/(o-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class ME extends ho{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class bE extends ho{interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this.inTangents,_=this.outTangents;if(!g||!_){const b=(a-n)/(o-n),w=1-b;for(let M=0;M!==h;++M)c[M]=u[d+M]*w+u[p+M]*b;return c}const v=h*2,x=e-1;for(let b=0;b!==h;++b){const w=u[d+b],M=u[p+b],y=x*v+b*2,P=_[y],B=_[y+1],C=e*v+b*2,U=g[C],D=g[C+1];let N=(a-n)/(o-n),T,L,k,G,K;for(let le=0;le<8;le++){T=N*N,L=T*N,k=1-N,G=k*k,K=G*k;const j=K*n+3*G*N*P+3*k*T*U+L*o-a;if(Math.abs(j)<1e-10)break;const F=3*G*(P-n)+6*k*N*(U-P)+3*T*(o-U);if(Math.abs(F)<1e-10)break;N=N-j/F,N=Math.max(0,Math.min(1,N))}c[b]=K*w+3*G*N*B+3*k*T*D+L*M}return c}}class Xi{constructor(e,n,a,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gu(n,this.TimeBufferType),this.values=gu(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:gu(e.times,Array),values:gu(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(a.interpolation=o)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new ME(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new SE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new bE(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Cl:n=this.InterpolantFactoryMethodDiscrete;break;case Dl:n=this.InterpolantFactoryMethodLinear;break;case rd:n=this.InterpolantFactoryMethodSmooth;break;case sv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ze("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cl;case this.InterpolantFactoryMethodLinear:return Dl;case this.InterpolantFactoryMethodSmooth:return rd;case this.InterpolantFactoryMethodBezier:return sv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]*=e}return this}trim(e,n){const a=this.times,o=a.length;let c=0,u=o-1;for(;c!==o&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==o){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,o=this.values,c=a.length;c===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){at("KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){at("KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(o!==void 0&&fb(o))for(let h=0,p=o.length;h!==p;++h){const d=o[h];if(isNaN(d)){at("KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===rd,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(o)p=!0;else{const _=h*a,v=_-a,x=_+a;for(let b=0;b!==a;++b){const w=n[_+b];if(w!==n[v+b]||w!==n[x+b]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[_+x]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,o=new a(this.name,e,n);return o.createInterpolant=this.createInterpolant,o}}Xi.prototype.ValueTypeName="";Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=Dl;class po extends Xi{constructor(e,n,a){super(e,n,a)}}po.prototype.ValueTypeName="bool";po.prototype.ValueBufferType=Array;po.prototype.DefaultInterpolation=Cl;po.prototype.InterpolantFactoryMethodLinear=void 0;po.prototype.InterpolantFactoryMethodSmooth=void 0;class $x extends Xi{constructor(e,n,a,o){super(e,n,a,o)}}$x.prototype.ValueTypeName="color";class Ul extends Xi{constructor(e,n,a,o){super(e,n,a,o)}}Ul.prototype.ValueTypeName="number";class EE extends ho{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(o-n);let d=e*h;for(let g=d+h;d!==g;d+=4)qa.slerpFlat(c,0,u,d-h,u,d,p);return c}}class Ol extends Xi{constructor(e,n,a,o){super(e,n,a,o)}InterpolantFactoryMethodLinear(e){return new EE(this.times,this.values,this.getValueSize(),e)}}Ol.prototype.ValueTypeName="quaternion";Ol.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends Xi{constructor(e,n,a){super(e,n,a)}}mo.prototype.ValueTypeName="string";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=Cl;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class Fu extends Xi{constructor(e,n,a,o){super(e,n,a,o)}}Fu.prototype.ValueTypeName="vector";class TE{constructor(e="",n=-1,a=[],o=eb){this.name=e,this.tracks=a,this.duration=n,this.blendMode=o,this.uuid=Gi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,o=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(RE(a[u]).scale(o));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,o={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(Xi.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(e,n,a,o){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const g=vE(p);p=Gv(p,1,g),d=Gv(d,1,g),!o&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new Ul(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const o=e;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===n)return a[o];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=o[_];v||(o[_]=v=[]),v.push(d)}}const u=[];for(const h in o)u.push(this.CreateFromMorphTargetSequence(h,o[h],n,a));return u}resetDuration(){const e=this.tracks;let n=0;for(let a=0,o=e.length;a!==o;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function AE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ul;case"vector":case"vector2":case"vector3":case"vector4":return Fu;case"color":return $x;case"quaternion":return Ol;case"bool":case"boolean":return po;case"string":return mo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function RE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=AE(r.type);if(r.times===void 0){const n=[],a=[];xE(r.keys,n,a,"value"),r.times=n,r.values=a}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const za={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Vv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Vv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Vv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class wE{constructor(e,n,a){const o=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const x=d[_],b=d[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const CE=new wE;class go{constructor(e){this.manager=e!==void 0?e:CE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}go.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ia={};class DE extends Error{constructor(e,n){super(e),this.response=n}}class ey extends go{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=za.get(`file:${e}`);if(c!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0);return}if(Ia[e]!==void 0){Ia[e].push({onLoad:n,onProgress:a,onError:o});return}Ia[e]=[],Ia[e].push({onLoad:n,onProgress:a,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Ia[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,b=x!==0;let w=0;const M=new ReadableStream({start(y){P();function P(){_.read().then(({done:B,value:C})=>{if(B)y.close();else{w+=C.byteLength;const U=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:x});for(let D=0,N=g.length;D<N;D++){const T=g[D];T.onProgress&&T.onProgress(U)}y.enqueue(C),P()}},B=>{y.error(B)})}}});return new Response(M)}else throw new DE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(b=>x.decode(b))}}}).then(d=>{za.add(`file:${e}`,d);const g=Ia[e];delete Ia[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=Ia[e];if(g===void 0)throw this.manager.itemError(e),d;delete Ia[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jr=new WeakMap;class NE extends go{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=za.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=Jr.get(u);_===void 0&&(_=[],Jr.set(u,_)),_.push({onLoad:n,onError:o})}return u}const h=Ll("img");function p(){g(),n&&n(this);const _=Jr.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}Jr.delete(this),c.manager.itemEnd(e)}function d(_){g(),o&&o(_),za.remove(`image:${e}`);const v=Jr.get(this)||[];for(let x=0;x<v.length;x++){const b=v[x];b.onError&&b.onError(_)}Jr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),za.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class LE extends go{constructor(e){super(e)}load(e,n,a,o){const c=new Ln,u=new NE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Xu extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class UE extends Xu{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Ld=new ht,kv=new J,Xv=new J;class am{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tm,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;kv.setFromMatrixPosition(e.matrixWorld),n.position.copy(kv),Xv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xv),n.updateMatrixWorld(),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Nl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _u=new J,vu=new qa,Qi=new J;class ty extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_u,vu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(_u,vu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new J,Wv=new mt,qv=new mt;class Wn extends ty{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,n){return this.getViewBounds(e,Wv,qv),n.subVectors(qv,Wv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(El*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class OE extends am{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=co*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class PE extends Xu{constructor(e,n,a=0,o=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new OE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class IE extends am{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0}}class BE extends Xu{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new IE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Wu extends ty{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class FE extends am{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ru extends Xu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new FE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Al{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Ud=new WeakMap;class zE extends go{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=za.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{Ud.has(u)===!0?(o&&o(Ud.get(u)),c.manager.itemError(e),c.manager.itemEnd(e)):(n&&n(d),c.manager.itemEnd(e))});return}setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);return}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){za.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e)}).catch(function(d){o&&o(d),Ud.set(p,d),za.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});za.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $r=-90,eo=1;class HE extends sn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn($r,eo,e,n);o.layers=this.layers,this.add(o);const c=new Wn($r,eo,e,n);c.layers=this.layers,this.add(c);const u=new Wn($r,eo,e,n);u.layers=this.layers,this.add(u);const h=new Wn($r,eo,e,n);h.layers=this.layers,this.add(h);const p=new Wn($r,eo,e,n);p.layers=this.layers,this.add(p);const d=new Wn($r,eo,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===ia)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Nl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),a.texture.generateMipmaps=w,e.setRenderTarget(a,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class GE extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sm="\\[\\]\\.:\\/",VE=new RegExp("["+sm+"]","g"),rm="[^"+sm+"]",kE="[^"+sm.replace("\\.","")+"]",XE=/((?:WC+[\/:])*)/.source.replace("WC",rm),WE=/(WCOD+)?/.source.replace("WCOD",kE),qE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rm),YE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rm),KE=new RegExp("^"+XE+WE+qE+YE+"$"),ZE=["material","materials","bones","map"];class jE{constructor(e,n,a){const o=a||Gt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,o)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Gt{constructor(e,n,a){this.path=n,this.parsedPath=a||Gt.parseTrackName(n),this.node=Gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Gt.Composite(e,n,a):new Gt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VE,"")}static parseTrackName(e){const n=KE.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);ZE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[n++]=a[o]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(e||(e=Gt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[o];if(u===void 0){const d=n.nodeName;at("PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Gt.Composite=jE;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const hm=class hm{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};hm.prototype.isMatrix2=!0;let Yv=hm;function Kv(r,e,n,a){const o=QE(a);switch(n){case Fx:return r*e;case Xp:return r*e/o.components*o.byteLength;case Wp:return r*e/o.components*o.byteLength;case rr:return r*e*2/o.components*o.byteLength;case qp:return r*e*2/o.components*o.byteLength;case zx:return r*e*3/o.components*o.byteLength;case Di:return r*e*4/o.components*o.byteLength;case Yp:return r*e*4/o.components*o.byteLength;case bu:case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(r,16)*Math.max(e,8)/4;case $d:case tp:return Math.max(r,8)*Math.max(e,8)/2;case ip:case ap:case rp:case op:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sp:case Du:case lp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bp:case Ep:case Tp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ap:case Rp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Nu:case wp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QE(r){switch(r){case gi:case Ox:return{byteLength:1,components:1};case Rl:case Px:case ka:return{byteLength:2,components:1};case Vp:case kp:return{byteLength:2,components:4};case oa:case Gp:case Ci:return{byteLength:4,components:1};case Ix:case Bx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ny(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function JE(r){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],w=_[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const w=_[x];r.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ET=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,WT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_A=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:$E,alphahash_pars_fragment:eT,alphamap_fragment:tT,alphamap_pars_fragment:nT,alphatest_fragment:iT,alphatest_pars_fragment:aT,aomap_fragment:sT,aomap_pars_fragment:rT,batching_pars_vertex:oT,batching_vertex:lT,begin_vertex:cT,beginnormal_vertex:uT,bsdfs:fT,iridescence_fragment:hT,bumpmap_pars_fragment:dT,clipping_planes_fragment:pT,clipping_planes_pars_fragment:mT,clipping_planes_pars_vertex:gT,clipping_planes_vertex:_T,color_fragment:vT,color_pars_fragment:xT,color_pars_vertex:yT,color_vertex:ST,common:MT,cube_uv_reflection_fragment:bT,defaultnormal_vertex:ET,displacementmap_pars_vertex:TT,displacementmap_vertex:AT,emissivemap_fragment:RT,emissivemap_pars_fragment:wT,colorspace_fragment:CT,colorspace_pars_fragment:DT,envmap_fragment:NT,envmap_common_pars_fragment:LT,envmap_pars_fragment:UT,envmap_pars_vertex:OT,envmap_physical_pars_fragment:WT,envmap_vertex:PT,fog_vertex:IT,fog_pars_vertex:BT,fog_fragment:FT,fog_pars_fragment:zT,gradientmap_pars_fragment:HT,lightmap_pars_fragment:GT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:kT,lights_pars_begin:XT,lights_toon_fragment:qT,lights_toon_pars_fragment:YT,lights_phong_fragment:KT,lights_phong_pars_fragment:ZT,lights_physical_fragment:jT,lights_physical_pars_fragment:QT,lights_fragment_begin:JT,lights_fragment_maps:$T,lights_fragment_end:eA,lightprobes_pars_fragment:tA,logdepthbuf_fragment:nA,logdepthbuf_pars_fragment:iA,logdepthbuf_pars_vertex:aA,logdepthbuf_vertex:sA,map_fragment:rA,map_pars_fragment:oA,map_particle_fragment:lA,map_particle_pars_fragment:cA,metalnessmap_fragment:uA,metalnessmap_pars_fragment:fA,morphinstance_vertex:hA,morphcolor_vertex:dA,morphnormal_vertex:pA,morphtarget_pars_vertex:mA,morphtarget_vertex:gA,normal_fragment_begin:_A,normal_fragment_maps:vA,normal_pars_fragment:xA,normal_pars_vertex:yA,normal_vertex:SA,normalmap_pars_fragment:MA,clearcoat_normal_fragment_begin:bA,clearcoat_normal_fragment_maps:EA,clearcoat_pars_fragment:TA,iridescence_pars_fragment:AA,opaque_fragment:RA,packing:wA,premultiplied_alpha_fragment:CA,project_vertex:DA,dithering_fragment:NA,dithering_pars_fragment:LA,roughnessmap_fragment:UA,roughnessmap_pars_fragment:OA,shadowmap_pars_fragment:PA,shadowmap_pars_vertex:IA,shadowmap_vertex:BA,shadowmask_pars_fragment:FA,skinbase_vertex:zA,skinning_pars_vertex:HA,skinning_vertex:GA,skinnormal_vertex:VA,specularmap_fragment:kA,specularmap_pars_fragment:XA,tonemapping_fragment:WA,tonemapping_pars_fragment:qA,transmission_fragment:YA,transmission_pars_fragment:KA,uv_pars_fragment:ZA,uv_pars_vertex:jA,uv_vertex:QA,worldpos_vertex:JA,background_vert:$A,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:a1,depth_vert:s1,depth_frag:r1,distance_vert:o1,distance_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:h1,meshbasic_vert:d1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:y1,meshphong_vert:S1,meshphong_frag:M1,meshphysical_vert:b1,meshphysical_frag:E1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:R1,points_frag:w1,shadow_vert:C1,shadow_frag:D1,sprite_vert:N1,sprite_frag:L1},Ie={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ea={basic:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Xn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Xn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new nt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Xn([Ie.points,Ie.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Xn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Xn([Ie.common,Ie.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Xn([Ie.sprite,Ie.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Xn([Ie.common,Ie.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Xn([Ie.lights,Ie.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ea.physical={uniforms:Xn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const xu={r:0,b:0,g:0},U1=new ht,iy=new ot;iy.set(-1,0,0,0,1,0,0,0,1);function O1(r,e,n,a,o,c){const u=new nt(0);let h=o===!0?0:1,p,d,g=null,_=0,v=null;function x(P){let B=P.isScene===!0?P.background:null;if(B&&B.isTexture){const C=P.backgroundBlurriness>0;B=e.get(B,C)}return B}function b(P){let B=!1;const C=x(P);C===null?M(u,h):C&&C.isColor&&(M(C,1),B=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(P,B){const C=x(B);C&&(C.isCubeTexture||C.mapping===Gu)?(d===void 0&&(d=new Kn(new Pl(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:fo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(iy),d.material.toneMapped=yt.getTransfer(C.colorSpace)!==zt,(g!==C||_!==C.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,g=C,_=C.version,v=r.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Kn(new ku(2,2),new ki({name:"BackgroundMaterial",uniforms:fo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=yt.getTransfer(C.colorSpace)!==zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,v=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function M(P,B){P.getRGB(xu,Jx(r)),n.buffers.color.setClear(xu.r,xu.g,xu.b,B,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,B=1){u.set(P),h=B,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,M(u,h)},render:b,addToRenderList:w,dispose:y}}function P1(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(G,K,le,ue,j){let F=!1;const H=_(G,ue,le,K);c!==H&&(c=H,d(c.object)),F=x(G,ue,le,j),F&&b(G,ue,le,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,C(G,K,le,ue),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function p(){return r.createVertexArray()}function d(G){return r.bindVertexArray(G)}function g(G){return r.deleteVertexArray(G)}function _(G,K,le,ue){const j=ue.wireframe===!0;let F=a[K.id];F===void 0&&(F={},a[K.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let ge=$[le.id];ge===void 0&&(ge={},$[le.id]=ge);let ve=ge[j];return ve===void 0&&(ve=v(p()),ge[j]=ve),ve}function v(G){const K=[],le=[],ue=[];for(let j=0;j<n;j++)K[j]=0,le[j]=0,ue[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:le,attributeDivisors:ue,object:G,attributes:{},index:null}}function x(G,K,le,ue){const j=c.attributes,F=K.attributes;let H=0;const $=le.getAttributes();for(const ge in $)if($[ge].location>=0){const I=j[ge];let W=F[ge];if(W===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(W=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(W=G.instanceColor)),I===void 0||I.attribute!==W||W&&I.data!==W.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function b(G,K,le,ue){const j={},F=K.attributes;let H=0;const $=le.getAttributes();for(const ge in $)if($[ge].location>=0){let I=F[ge];I===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const W={};W.attribute=I,I&&I.data&&(W.data=I.data),j[ge]=W,H++}c.attributes=j,c.attributesNum=H,c.index=ue}function w(){const G=c.newAttributes;for(let K=0,le=G.length;K<le;K++)G[K]=0}function M(G){y(G,0)}function y(G,K){const le=c.newAttributes,ue=c.enabledAttributes,j=c.attributeDivisors;le[G]=1,ue[G]===0&&(r.enableVertexAttribArray(G),ue[G]=1),j[G]!==K&&(r.vertexAttribDivisor(G,K),j[G]=K)}function P(){const G=c.newAttributes,K=c.enabledAttributes;for(let le=0,ue=K.length;le<ue;le++)K[le]!==G[le]&&(r.disableVertexAttribArray(le),K[le]=0)}function B(G,K,le,ue,j,F,H){H===!0?r.vertexAttribIPointer(G,K,le,j,F):r.vertexAttribPointer(G,K,le,ue,j,F)}function C(G,K,le,ue){w();const j=ue.attributes,F=le.getAttributes(),H=K.defaultAttributeValues;for(const $ in F){const ge=F[$];if(ge.location>=0){let ve=j[$];if(ve===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(ve=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(ve=G.instanceColor)),ve!==void 0){const I=ve.normalized,W=ve.itemSize,ye=e.get(ve);if(ye===void 0)continue;const Te=ye.buffer,Ne=ye.type,ae=ye.bytesPerElement,Me=Ne===r.INT||Ne===r.UNSIGNED_INT||ve.gpuType===Gp;if(ve.isInterleavedBufferAttribute){const Ee=ve.data,He=Ee.stride,it=ve.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ge.locationSize;Qe++)y(ge.location+Qe,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<ge.locationSize;Qe++)M(ge.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Qe=0;Qe<ge.locationSize;Qe++)B(ge.location+Qe,W/ge.locationSize,Ne,I,He*ae,(it+W/ge.locationSize*Qe)*ae,Me)}else{if(ve.isInstancedBufferAttribute){for(let Ee=0;Ee<ge.locationSize;Ee++)y(ge.location+Ee,ve.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ee=0;Ee<ge.locationSize;Ee++)M(ge.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Ee=0;Ee<ge.locationSize;Ee++)B(ge.location+Ee,W/ge.locationSize,Ne,I,W*ae,W/ge.locationSize*Ee*ae,Me)}}else if(H!==void 0){const I=H[$];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(ge.location,I);break;case 3:r.vertexAttrib3fv(ge.location,I);break;case 4:r.vertexAttrib4fv(ge.location,I);break;default:r.vertexAttrib1fv(ge.location,I)}}}}P()}function U(){L();for(const G in a){const K=a[G];for(const le in K){const ue=K[le];for(const j in ue){const F=ue[j];for(const H in F)g(F[H].object),delete F[H];delete ue[j]}}delete a[G]}}function D(G){if(a[G.id]===void 0)return;const K=a[G.id];for(const le in K){const ue=K[le];for(const j in ue){const F=ue[j];for(const H in F)g(F[H].object),delete F[H];delete ue[j]}}delete a[G.id]}function N(G){for(const K in a){const le=a[K];for(const ue in le){const j=le[ue];if(j[G.id]===void 0)continue;const F=j[G.id];for(const H in F)g(F[H].object),delete F[H];delete j[G.id]}}}function T(G){for(const K in a){const le=a[K],ue=G.isInstancedMesh===!0?G.id:0,j=le[ue];if(j!==void 0){for(const F in j){const H=j[F];for(const $ in H)g(H[$].object),delete H[$];delete j[F]}delete le[ue],Object.keys(le).length===0&&delete a[K]}}}function L(){k(),u=!0,c!==o&&(c=o,d(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function I1(r,e,n){let a;function o(p){a=p}function c(p,d){r.drawArrays(a,p,d),n.update(d,a,1)}function u(p,d,g){g!==0&&(r.drawArraysInstanced(a,p,d,g),n.update(d,a,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function B1(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==Di&&a.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const T=N===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==gi&&a.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ci&&!T)}function p(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(Ze("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:B,maxFragmentUniforms:C,maxSamples:U,samples:D}}function F1(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new er,h=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,y=r.get(_);if(!o||b===null||b.length===0||c&&!M)c?g(null):d();else{const P=c?0:a,B=P*4;let C=y.clippingState||null;p.value=C,C=g(b,v,B,x);for(let U=0;U!==B;++U)C[U]=n[U];y.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,b){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=p.value,b!==!0||M===null){const y=x+w*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let B=0,C=x;B!==w;++B,C+=4)u.copy(_[B]).applyMatrix4(P,h),u.normal.toArray(M,C),M[C+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const ws=4,Zv=[.125,.215,.35,.446,.526,.582],nr=20,z1=256,vl=new Wu,jv=new nt;let Od=null,Pd=0,Id=0,Bd=!1;const H1=new J;class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=H1}=c;Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Pd,Id),this._renderer.xr.enabled=Bd,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===sr||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ka,format:Di,colorSpace:_i,depthBuffer:!1},o=Jv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G1(c)),this._blurMaterial=k1(c,e,n),this._ggxMaterial=V1(c,e,n)}return o}_compileMaterial(e){const n=new Kn(new vi,e);this._renderer.compile(n,vl)}_sceneToCubeUV(e,n,a,o,c){const p=new Wn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(jv),_.toneMapping=aa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new Pl,new ar({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,y=!0):(M.color.copy(jv),y=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(p.up.set(0,d[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[B],c.y,c.z)):C===1?(p.up.set(0,0,d[B]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[B],c.z)):(p.up.set(0,d[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[B]));const U=this._cubeSize;to(o,C*U,B>2?U:0,U,U),_.setRenderTarget(o),y&&_.render(w,p),_.render(e,p)}_.toneMapping=x,_.autoClear=v,e.background=P}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===sr||e.mapping===oo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$v());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;to(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,vl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,w=this._sizeLods[a],M=3*w*(a>b-ws?a-b+ws:0),y=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=b-n,to(c,M,y,3*w,2*w),o.setRenderTarget(c),o.render(h,vl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-a,to(e,M,y,3*w,2*w),o.setRenderTarget(e),o.render(h,vl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*nr-1),w=c/b,M=isFinite(c)?1+Math.floor(g*w):nr;M>nr&&Ze(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${nr}`);const y=[];let P=0;for(let N=0;N<nr;++N){const T=N/w,L=Math.exp(-T*T/2);y.push(L),N===0?P+=L:N<M&&(P+=2*L)}for(let N=0;N<y.length;N++)y[N]=y[N]/P;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:B}=this;v.dTheta.value=b,v.mipInt.value=B-a;const C=this._sizeLods[o],U=3*C*(o>B-ws?o-B+ws:0),D=4*(this._cubeSize-C);to(n,U,D,3*C,2*C),p.setRenderTarget(n),p.render(_,vl)}}function G1(r){const e=[],n=[],a=[];let o=r;const c=r-ws+1+Zv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let p=1/h;u>r-ws?p=Zv[u-r+ws-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,w=3,M=2,y=1,P=new Float32Array(w*b*x),B=new Float32Array(M*b*x),C=new Float32Array(y*b*x);for(let D=0;D<x;D++){const N=D%3*2/3-1,T=D>2?0:-1,L=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];P.set(L,w*b*D),B.set(v,M*b*D);const k=[D,D,D,D,D,D];C.set(k,y*b*D)}const U=new vi;U.setAttribute("position",new Yn(P,w)),U.setAttribute("uv",new Yn(B,M)),U.setAttribute("faceIndex",new Yn(C,y)),a.push(new Kn(U,null)),o>ws&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Jv(r,e,n){const a=new sa(r,e,n);return a.texture.mapping=Gu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function to(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function V1(r,e,n){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function k1(r,e,n){const a=new Float32Array(nr),o=new J(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function $v(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ex(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ay extends sa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new jx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Pl(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:fo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:qn,blending:Ha});c.uniforms.tEquirect.value=n;const u=new Kn(o,c),h=n.minFilter;return n.minFilter===Ba&&(n.minFilter=Rn),new HE(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function X1(r){let e=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===ad||x===sd)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new ay(b.height);return w.fromEquirectangularTexture(r,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===ad||x===sd,w=x===sr||x===oo;if(b||w){let M=n.get(v);const y=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return a===null&&(a=new Qv(r)),M=b?a.fromEquirectangular(v,M):a.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),M.texture;if(M!==void 0)return M.texture;{const P=v.image;return b&&P&&P.height>0||w&&P&&p(P)?(a===null&&(a=new Qv(r)),M=b?a.fromEquirectangular(v):a.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),v.addEventListener("dispose",g),M.texture):null}}}return v}function h(v,x){return x===ad?v.mapping=sr:x===sd&&(v.mapping=oo),v}function p(v){let x=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function W1(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&io("WebGLRenderer: "+a+" extension not supported."),o}}}function q1(r,e,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const P=x.array;w=x.version;for(let B=0,C=P.length;B<C;B+=3){const U=P[B+0],D=P[B+1],N=P[B+2];v.push(U,D,D,N,N,U)}}else{const P=b.array;w=b.version;for(let B=0,C=P.length/3-1;B<C;B+=3){const U=B+0,D=B+1,N=B+2;v.push(U,D,D,N,N,U)}}const M=new(b.count>=65535?qx:Wx)(v,1);M.version=w;const y=c.get(_);y&&e.remove(y),c.set(_,M)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function Y1(r,e,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,v){r.drawElements(a,v,c,_*u),n.update(v,a,1)}function d(_,v,x){x!==0&&(r.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let w=0;for(let M=0;M<x;M++)w+=v[M];n.update(w,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g}function K1(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:at("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function Z1(r,e,n){const a=new WeakMap,o=new Yt;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let k=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",k)};var x=k;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let U=h.attributes.position.count*C,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*D*4*_),T=new Vx(N,U,D,_);T.type=Ci,T.needsUpdate=!0;const L=C*4;for(let G=0;G<_;G++){const K=y[G],le=P[G],ue=B[G],j=U*D*4*G;for(let F=0;F<K.count;F++){const H=F*L;b===!0&&(o.fromBufferAttribute(K,F),N[j+H+0]=o.x,N[j+H+1]=o.y,N[j+H+2]=o.z,N[j+H+3]=0),w===!0&&(o.fromBufferAttribute(le,F),N[j+H+4]=o.x,N[j+H+5]=o.y,N[j+H+6]=o.z,N[j+H+7]=0),M===!0&&(o.fromBufferAttribute(ue,F),N[j+H+8]=o.x,N[j+H+9]=o.y,N[j+H+10]=o.z,N[j+H+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new mt(U,D)},a.set(h,v),h.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const w=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function j1(r,e,n,a,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==g&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const Q1={[Ax]:"LINEAR_TONE_MAPPING",[Rx]:"REINHARD_TONE_MAPPING",[wx]:"CINEON_TONE_MAPPING",[Hp]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Nx]:"NEUTRAL_TONE_MAPPING",[Cx]:"CUSTOM_TONE_MAPPING"};function J1(r,e,n,a,o,c){const u=new sa(e,n,{type:r,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new uo(e,n):void 0}),h=new sa(e,n,{type:ka,depthBuffer:!1,stencilBuffer:!1}),p=new vi;p.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ni([0,2,0,0,2,0],2));const d=new pE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Kn(p,d),_=new Wu(-1,1,1,-1,0,1);let v=null,x=null,b=!1,w,M=null,y=[],P=!1;this.setSize=function(B,C){u.setSize(B,C),h.setSize(B,C);for(let U=0;U<y.length;U++){const D=y[U];D.setSize&&D.setSize(B,C)}},this.setEffects=function(B){y=B,P=y.length>0&&y[0].isRenderPass===!0;const C=u.width,U=u.height;for(let D=0;D<y.length;D++){const N=y[D];N.setSize&&N.setSize(C,U)}},this.begin=function(B,C){if(b||B.toneMapping===aa&&y.length===0)return!1;if(M=C,C!==null){const U=C.width,D=C.height;(u.width!==U||u.height!==D)&&this.setSize(U,D)}return P===!1&&B.setRenderTarget(u),w=B.toneMapping,B.toneMapping=aa,!0},this.hasRenderPass=function(){return P},this.end=function(B,C){B.toneMapping=w,b=!0;let U=u,D=h;for(let N=0;N<y.length;N++){const T=y[N];if(T.enabled!==!1&&(T.render(B,D,U,C),T.needsSwap!==!1)){const L=U;U=D,D=L}}if(v!==B.outputColorSpace||x!==B.toneMapping){v=B.outputColorSpace,x=B.toneMapping,d.defines={},yt.getTransfer(v)===zt&&(d.defines.SRGB_TRANSFER="");const N=Q1[x];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=U.texture,B.setRenderTarget(M),B.render(g,_),M=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),p.dispose(),d.dispose()}}const sy=new Ln,Up=new uo(1,1),ry=new Vx,oy=new Bb,ly=new jx,tx=[],nx=[],ix=new Float32Array(16),ax=new Float32Array(9),sx=new Float32Array(4);function _o(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=tx[o];if(c===void 0&&(c=new Float32Array(o),tx[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,r[u].toArray(c,h)}return c}function wn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Cn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Yu(r,e){let n=nx[e];n===void 0&&(n=new Int32Array(e),nx[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function $1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function eR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2fv(this.addr,e),Cn(n,e)}}function tR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wn(n,e))return;r.uniform3fv(this.addr,e),Cn(n,e)}}function nR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4fv(this.addr,e),Cn(n,e)}}function iR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(wn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(wn(n,a))return;sx.set(a),r.uniformMatrix2fv(this.addr,!1,sx),Cn(n,a)}}function aR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(wn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(wn(n,a))return;ax.set(a),r.uniformMatrix3fv(this.addr,!1,ax),Cn(n,a)}}function sR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(wn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(wn(n,a))return;ix.set(a),r.uniformMatrix4fv(this.addr,!1,ix),Cn(n,a)}}function rR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function oR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2iv(this.addr,e),Cn(n,e)}}function lR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;r.uniform3iv(this.addr,e),Cn(n,e)}}function cR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4iv(this.addr,e),Cn(n,e)}}function uR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function fR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2uiv(this.addr,e),Cn(n,e)}}function hR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;r.uniform3uiv(this.addr,e),Cn(n,e)}}function dR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4uiv(this.addr,e),Cn(n,e)}}function pR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Up.compareFunction=n.isReversedDepthBuffer()?Zp:Kp,c=Up):c=sy,n.setTexture2D(e||c,o)}function mR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||oy,o)}function gR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||ly,o)}function _R(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||ry,o)}function vR(r){switch(r){case 5126:return $1;case 35664:return eR;case 35665:return tR;case 35666:return nR;case 35674:return iR;case 35675:return aR;case 35676:return sR;case 5124:case 35670:return rR;case 35667:case 35671:return oR;case 35668:case 35672:return lR;case 35669:case 35673:return cR;case 5125:return uR;case 36294:return fR;case 36295:return hR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return gR;case 36289:case 36303:case 36311:case 36292:return _R}}function xR(r,e){r.uniform1fv(this.addr,e)}function yR(r,e){const n=_o(e,this.size,2);r.uniform2fv(this.addr,n)}function SR(r,e){const n=_o(e,this.size,3);r.uniform3fv(this.addr,n)}function MR(r,e){const n=_o(e,this.size,4);r.uniform4fv(this.addr,n)}function bR(r,e){const n=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function ER(r,e){const n=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function TR(r,e){const n=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function AR(r,e){r.uniform1iv(this.addr,e)}function RR(r,e){r.uniform2iv(this.addr,e)}function wR(r,e){r.uniform3iv(this.addr,e)}function CR(r,e){r.uniform4iv(this.addr,e)}function DR(r,e){r.uniform1uiv(this.addr,e)}function NR(r,e){r.uniform2uiv(this.addr,e)}function LR(r,e){r.uniform3uiv(this.addr,e)}function UR(r,e){r.uniform4uiv(this.addr,e)}function OR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Up:u=sy;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function PR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||oy,c[u])}function IR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||ly,c[u])}function BR(r,e,n){const a=this.cache,o=e.length,c=Yu(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||ry,c[u])}function FR(r){switch(r){case 5126:return xR;case 35664:return yR;case 35665:return SR;case 35666:return MR;case 35674:return bR;case 35675:return ER;case 35676:return TR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return wR;case 35669:case 35673:return CR;case 5125:return DR;case 36294:return NR;case 36295:return LR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return BR}}class zR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=vR(n.type)}}class HR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FR(n.type)}}class GR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function rx(r,e){r.seq.push(e),r.map[e.id]=e}function VR(r,e,n){const a=r.name,o=a.length;for(Fd.lastIndex=0;;){const c=Fd.exec(a),u=Fd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){rx(n,d===void 0?new zR(h,r,e):new HR(h,r,e));break}else{let _=n.map[h];_===void 0&&(_=new GR(h),rx(n,_)),n=_}}}class wu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),p=e.getUniformLocation(n,h.name);VR(h,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function ox(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const kR=37297;let XR=0;function WR(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const lx=new ot;function qR(r){yt._getMatrix(lx,yt.workingColorSpace,r);const e=`mat3( ${lx.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(r)){case Uu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cx(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+WR(r.getShaderSource(e),h)}else return c}function YR(r,e){const n=qR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const KR={[Ax]:"Linear",[Rx]:"Reinhard",[wx]:"Cineon",[Hp]:"ACESFilmic",[Dx]:"AgX",[Nx]:"Neutral",[Cx]:"Custom"};function ZR(r,e){const n=KR[e];return n===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yu=new J;function jR(){yt.getLuminanceCoefficients(yu);const r=yu.x.toFixed(4),e=yu.y.toFixed(4),n=yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function JR(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function $R(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:h}}return n}function bl(r){return r!==""}function ux(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(r){return r.replace(ew,nw)}const tw=new Map;function nw(r,e){let n=ft[e];if(n===void 0){const a=tw.get(e);if(a!==void 0)n=ft[a],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Op(n)}const iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hx(r){return r.replace(iw,aw)}function aw(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function dx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sw={[Su]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function rw(r){return sw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ow={[sr]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function lw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ow[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const cw={[oo]:"ENVMAP_MODE_REFRACTION"};function uw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":cw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fw={[zp]:"ENVMAP_BLENDING_MULTIPLY",[QM]:"ENVMAP_BLENDING_MIX",[JM]:"ENVMAP_BLENDING_ADD"};function hw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":fw[r.combine]||"ENVMAP_BLENDING_NONE"}function dw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function pw(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=rw(n),d=lw(n),g=uw(n),_=hw(n),v=dw(n),x=QR(n),b=JR(c),w=o.createProgram();let M,y,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(bl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(bl).join(`
`),y.length>0&&(y+=`
`)):(M=[dx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),y=[dx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?ft.tonemapping_pars_fragment:"",n.toneMapping!==aa?ZR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,YR("linearToOutputTexel",n.outputColorSpace),jR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bl).join(`
`)),u=Op(u),u=ux(u,n),u=fx(u,n),h=Op(h),h=ux(h,n),h=fx(h,n),u=hx(u),h=hx(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const B=P+M+u,C=P+y+h,U=ox(o,o.VERTEX_SHADER,B),D=ox(o,o.FRAGMENT_SHADER,C);o.attachShader(w,U),o.attachShader(w,D),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function N(G){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(w)||"",le=o.getShaderInfoLog(U)||"",ue=o.getShaderInfoLog(D)||"",j=K.trim(),F=le.trim(),H=ue.trim();let $=!0,ge=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,U,D);else{const ve=cx(o,U,"vertex"),I=cx(o,D,"fragment");at("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+ve+`
`+I)}else j!==""?Ze("WebGLProgram: Program Info Log:",j):(F===""||H==="")&&(ge=!1);ge&&(G.diagnostics={runnable:$,programLog:j,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:y}})}o.deleteShader(U),o.deleteShader(D),T=new wu(o,w),L=$R(o,w)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(w,kR)),k},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=D,this}let mw=0;class gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new _w(e),n.set(e,a)),a}}class _w{constructor(e){this.id=mw++,this.code=e,this.usedTimes=0}}function vw(r){return r===rr||r===Du||r===Nu}function xw(r,e,n,a,o,c){const u=new kx,h=new gw,p=new Set,d=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,L,k,G,K,le){const ue=G.fog,j=K.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||F,H),ge=$&&$.mapping===Gu?$.image.height:null,ve=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&Ze("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const I=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,W=I!==void 0?I.length:0;let ye=0;j.morphAttributes.position!==void 0&&(ye=1),j.morphAttributes.normal!==void 0&&(ye=2),j.morphAttributes.color!==void 0&&(ye=3);let Te,Ne,ae,Me;if(ve){const Ve=ea[ve];Te=Ve.vertexShader,Ne=Ve.fragmentShader}else{Te=T.vertexShader,Ne=T.fragmentShader;const Ve=h.getVertexShaderStage(T),en=h.getFragmentShaderStage(T);h.update(T,Ve,en),ae=Ve.id,Me=en.id}const Ee=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),it=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,Qt=!!T.map,dt=!!T.matcap,Et=!!$,Tt=!!T.aoMap,gt=!!T.lightMap,rn=!!T.bumpMap&&T.wireframe===!1,on=!!T.normalMap,ln=!!T.displacementMap,hn=!!T.emissiveMap,jt=!!T.metalnessMap,cn=!!T.roughnessMap,Y=T.anisotropy>0,kt=T.clearcoat>0,Dt=T.dispersion>0,O=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,se=Y&&!!T.anisotropyMap,he=kt&&!!T.clearcoatMap,Ae=kt&&!!T.clearcoatNormalMap,De=kt&&!!T.clearcoatRoughnessMap,fe=O&&!!T.iridescenceMap,de=O&&!!T.iridescenceThicknessMap,we=E&&!!T.sheenColorMap,Fe=E&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Le=!!T.specularColorMap,je=!!T.specularIntensityMap,Je=Q&&!!T.transmissionMap,st=Q&&!!T.thicknessMap,X=!!T.gradientMap,Re=!!T.alphaMap,_e=T.alphaTest>0,Ce=!!T.alphaHash,Be=!!T.extensions;let be=aa;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=r.toneMapping);const qe={shaderID:ve,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:Ne,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:it,instancingColor:it&&K.instanceColor!==null,instancingMorph:it&&K.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:dt,envMap:Et,envMapMode:Et&&$.mapping,envMapCubeUVHeight:ge,aoMap:Tt,lightMap:gt,bumpMap:rn,normalMap:on,displacementMap:ln,emissiveMap:hn,normalMapObjectSpace:on&&T.normalMapType===ib,normalMapTangentSpace:on&&T.normalMapType===Lu,packedNormalMap:on&&T.normalMapType===Lu&&vw(T.normalMap.format),metalnessMap:jt,roughnessMap:cn,anisotropy:Y,anisotropyMap:se,clearcoat:kt,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,dispersion:Dt,iridescence:O,iridescenceMap:fe,iridescenceThicknessMap:de,sheen:E,sheenColorMap:we,sheenRoughnessMap:Fe,specularMap:Oe,specularColorMap:Le,specularIntensityMap:je,transmission:Q,transmissionMap:Je,thicknessMap:st,gradientMap:X,opaque:T.transparent===!1&&T.blending===no&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:_e,alphaHash:Ce,combine:T.combine,mapUv:Qt&&b(T.map.channel),aoMapUv:Tt&&b(T.aoMap.channel),lightMapUv:gt&&b(T.lightMap.channel),bumpMapUv:rn&&b(T.bumpMap.channel),normalMapUv:on&&b(T.normalMap.channel),displacementMapUv:ln&&b(T.displacementMap.channel),emissiveMapUv:hn&&b(T.emissiveMap.channel),metalnessMapUv:jt&&b(T.metalnessMap.channel),roughnessMapUv:cn&&b(T.roughnessMap.channel),anisotropyMapUv:se&&b(T.anisotropyMap.channel),clearcoatMapUv:he&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&b(T.sheenRoughnessMap.channel),specularMapUv:Oe&&b(T.specularMap.channel),specularColorMapUv:Le&&b(T.specularColorMap.channel),specularIntensityMapUv:je&&b(T.specularIntensityMap.channel),transmissionMapUv:Je&&b(T.transmissionMap.channel),thicknessMapUv:st&&b(T.thicknessMap.channel),alphaMapUv:Re&&b(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(on||Y),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(Qt||Re),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&on===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ye,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===zt,decodeVideoTextureEmissive:hn&&T.emissiveMap.isVideoTexture===!0&&yt.getTransfer(T.emissiveMap.colorSpace)===zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ta,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=p.has(1),qe.vertexUv2s=p.has(2),qe.vertexUv3s=p.has(3),p.clear(),qe}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)L.push(k),L.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(y(L,T),P(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function y(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function P(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function B(T){const L=x[T.type];let k;if(L){const G=ea[L];k=fE.clone(G.uniforms)}else k=T.uniforms;return k}function C(T,L){let k=g.get(L);return k!==void 0?++k.usedTimes:(k=new pw(r,L,T,o),d.push(k),g.set(L,k)),k}function U(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function D(T){h.remove(T)}function N(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:d,dispose:N}}function yw(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,p){r.get(u)[h]=p}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function Sw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function px(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mx(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,w,M,y){let P=r[e];return P===void 0?(P={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:y},r[e]=P):(P.id=v.id,P.object=v,P.geometry=x,P.material=b,P.materialVariant=u(v),P.groupOrder=w,P.renderOrder=v.renderOrder,P.z=M,P.group=y),e++,P}function p(v,x,b,w,M,y){const P=h(v,x,b,w,M,y);b.transmission>0?a.push(P):b.transparent===!0?o.push(P):n.push(P)}function d(v,x,b,w,M,y){const P=h(v,x,b,w,M,y);b.transmission>0?a.unshift(P):b.transparent===!0?o.unshift(P):n.unshift(P)}function g(v,x,b){n.length>1&&n.sort(v||Sw),a.length>1&&a.sort(x||px),o.length>1&&o.sort(x||px),b&&(n.reverse(),a.reverse(),o.reverse())}function _(){for(let v=e,x=r.length;v<x;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:d,finish:_,sort:g}}function Mw(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new mx,r.set(a,[u])):o>=c.length?(u=new mx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function bw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new nt};break;case"SpotLight":n={position:new J,direction:new J,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=n,n}}}function Ew(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let Tw=0;function Aw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Rw(r){const e=new bw,n=Ew(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new J);const o=new J,c=new ht,u=new ht;function h(d){let g=0,_=0,v=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let x=0,b=0,w=0,M=0,y=0,P=0,B=0,C=0,U=0,D=0,N=0;d.sort(Aw);for(let L=0,k=d.length;L<k;L++){const G=d[L],K=G.color,le=G.intensity,ue=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===rr?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=K.r*le,_+=K.g*le,v+=K.b*le;else if(G.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(G.sh.coefficients[F],le);N++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=n.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,a.directionalShadow[x]=$,a.directionalShadowMap[x]=j,a.directionalShadowMatrix[x]=G.shadow.matrix,P++}a.directional[x]=F,x++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(K).multiplyScalar(le),F.distance=ue,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,a.spot[w]=F;const H=G.shadow;if(G.map&&(a.spotLightMap[U]=G.map,U++,H.updateMatrices(G),G.castShadow&&D++),a.spotLightMatrix[w]=H.matrix,G.castShadow){const $=n.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,a.spotShadow[w]=$,a.spotShadowMap[w]=j,C++}w++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy(K).multiplyScalar(le),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=F,M++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,$=n.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,a.pointShadow[b]=$,a.pointShadowMap[b]=j,a.pointShadowMatrix[b]=G.shadow.matrix,B++}a.point[b]=F,b++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(le),F.groundColor.copy(G.groundColor).multiplyScalar(le),a.hemi[y]=F,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==P||T.numPointShadows!==B||T.numSpotShadows!==C||T.numSpotMaps!==U||T.numLightProbes!==N)&&(a.directional.length=x,a.spot.length=w,a.rectArea.length=M,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=B,a.pointShadowMap.length=B,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=B,a.spotLightMatrix.length=C+U-D,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=D,a.numLightProbes=N,T.directionalLength=x,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=P,T.numPointShadows=B,T.numSpotShadows=C,T.numSpotMaps=U,T.numLightProbes=N,a.version=Tw++)}function p(d,g){let _=0,v=0,x=0,b=0,w=0;const M=g.matrixWorldInverse;for(let y=0,P=d.length;y<P;y++){const B=d[y];if(B.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),_++}else if(B.isSpotLight){const C=a.spot[x];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),x++}else if(B.isRectAreaLight){const C=a.rectArea[b];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),u.identity(),c.copy(B.matrixWorld),c.premultiply(M),u.extractRotation(c),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(B.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),v++}else if(B.isHemisphereLight){const C=a.hemi[w];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(M),w++}}}return{setup:h,setupView:p,state:a}}function gx(r){const e=new Rw(r),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function p(v){o.push(v)}function d(){e.setup(n)}function g(v){e.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function ww(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new gx(r),e.set(o,[h])):c>=u.length?(h=new gx(r),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nw=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Lw=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],_x=new ht,xl=new J,zd=new J;function Uw(r,e,n){let a=new tm;const o=new mt,c=new mt,u=new Yt,h=new gE,p=new _E,d={},g=n.maxTextureSize,_={[Va]:qn,[qn]:Va,[ta]:ta},v=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Cw,fragmentShader:Dw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new vi;b.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Kn(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let y=this.type;this.render=function(D,N,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===LM&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Su);const L=r.getRenderTarget(),k=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ha),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const le=y!==this.type;le&&N.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(j=>j.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,j=D.length;ue<j;ue++){const F=D[ue],H=F.shadow;if(H===void 0){Ze("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||le===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Sl){if(F.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new sa(o.x,o.y,{format:rr,type:ka,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new uo(o.x,o.y,Ci),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Xa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An}else F.isPointLight?(H.map=new ay(o.x),H.map.depthTexture=new cE(o.x,oa)):(H.map=new sa(o.x,o.y),H.map.depthTexture=new uo(o.x,o.y,oa)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Xa,this.type===Su?(H.map.depthTexture.compareFunction=ge?Zp:Kp,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An);H.camera.updateProjectionMatrix()}const ve=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ve;I++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,I),r.clear();else{I===0&&(r.setRenderTarget(H.map),r.clear());const W=H.getViewport(I);u.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),K.viewport(u)}if(F.isPointLight){const W=H.camera,ye=H.matrix,Te=F.distance||W.far;Te!==W.far&&(W.far=Te,W.updateProjectionMatrix()),xl.setFromMatrixPosition(F.matrixWorld),W.position.copy(xl),zd.copy(W.position),zd.add(Nw[I]),W.up.copy(Lw[I]),W.lookAt(zd),W.updateMatrixWorld(),ye.makeTranslation(-xl.x,-xl.y,-xl.z),_x.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H._frustum.setFromProjectionMatrix(_x,W.coordinateSystem,W.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),C(N,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Sl&&P(H,T),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(L,k,G)};function P(D,N){const T=e.update(w);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new sa(o.x,o.y,{format:rr,type:ka})),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(N,null,T,v,w,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(N,null,T,x,w,null)}function B(D,N,T,L){let k=null;const G=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)k=G;else if(k=T.isPointLight===!0?p:h,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const K=k.uuid,le=N.uuid;let ue=d[K];ue===void 0&&(ue={},d[K]=ue);let j=ue[le];j===void 0&&(j=k.clone(),ue[le]=j,N.addEventListener("dispose",U)),k=j}if(k.visible=N.visible,k.wireframe=N.wireframe,L===Sl?k.side=N.shadowSide!==null?N.shadowSide:N.side:k.side=N.shadowSide!==null?N.shadowSide:_[N.side],k.alphaMap=N.alphaMap,k.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,k.map=N.map,k.clipShadows=N.clipShadows,k.clippingPlanes=N.clippingPlanes,k.clipIntersection=N.clipIntersection,k.displacementMap=N.displacementMap,k.displacementScale=N.displacementScale,k.displacementBias=N.displacementBias,k.wireframeLinewidth=N.wireframeLinewidth,k.linewidth=N.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const K=r.properties.get(k);K.light=T}return k}function C(D,N,T,L,k){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Sl)&&(!D.frustumCulled||a.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const le=e.update(D),ue=D.material;if(Array.isArray(ue)){const j=le.groups;for(let F=0,H=j.length;F<H;F++){const $=j[F],ge=ue[$.materialIndex];if(ge&&ge.visible){const ve=B(D,ge,L,k);D.onBeforeShadow(r,D,N,T,le,ve,$),r.renderBufferDirect(T,null,le,ve,D,$),D.onAfterShadow(r,D,N,T,le,ve,$)}}}else if(ue.visible){const j=B(D,ue,L,k);D.onBeforeShadow(r,D,N,T,le,j,null),r.renderBufferDirect(T,null,le,j,D,null),D.onAfterShadow(r,D,N,T,le,j,null)}}const K=D.children;for(let le=0,ue=K.length;le<ue;le++)C(K[le],N,T,L,k)}function U(D){D.target.removeEventListener("dispose",U);for(const T in d){const L=d[T],k=D.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function Ow(r,e){function n(){let X=!1;const Re=new Yt;let _e=null;const Ce=new Yt(0,0,0,0);return{setMask:function(Be){_e!==Be&&!X&&(r.colorMask(Be,Be,Be,Be),_e=Be)},setLocked:function(Be){X=Be},setClear:function(Be,be,qe,Ve,en){en===!0&&(Be*=Ve,be*=Ve,qe*=Ve),Re.set(Be,be,qe,Ve),Ce.equals(Re)===!1&&(r.clearColor(Be,be,qe,Ve),Ce.copy(Re))},reset:function(){X=!1,_e=null,Ce.set(-1,0,0,0)}}}function a(){let X=!1,Re=!1,_e=null,Ce=null,Be=null;return{setReversed:function(be){if(Re!==be){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const Ve=Be;Be=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(be){be?Ee(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(be){_e!==be&&!X&&(r.depthMask(be),_e=be)},setFunc:function(be){if(Re&&(be=pb[be]),Ce!==be){switch(be){case qd:r.depthFunc(r.NEVER);break;case Yd:r.depthFunc(r.ALWAYS);break;case Kd:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case Zd:r.depthFunc(r.EQUAL);break;case jd:r.depthFunc(r.GEQUAL);break;case Qd:r.depthFunc(r.GREATER);break;case Jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=be}},setLocked:function(be){X=be},setClear:function(be){Be!==be&&(Be=be,Re&&(be=1-be),r.clearDepth(be))},reset:function(){X=!1,_e=null,Ce=null,Be=null,Re=!1}}}function o(){let X=!1,Re=null,_e=null,Ce=null,Be=null,be=null,qe=null,Ve=null,en=null;return{setTest:function(Ut){X||(Ut?Ee(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Ut){Re!==Ut&&!X&&(r.stencilMask(Ut),Re=Ut)},setFunc:function(Ut,ii,ai){(_e!==Ut||Ce!==ii||Be!==ai)&&(r.stencilFunc(Ut,ii,ai),_e=Ut,Ce=ii,Be=ai)},setOp:function(Ut,ii,ai){(be!==Ut||qe!==ii||Ve!==ai)&&(r.stencilOp(Ut,ii,ai),be=Ut,qe=ii,Ve=ai)},setLocked:function(Ut){X=Ut},setClear:function(Ut){en!==Ut&&(r.clearStencil(Ut),en=Ut)},reset:function(){X=!1,Re=null,_e=null,Ce=null,Be=null,be=null,qe=null,Ve=null,en=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],w=null,M=!1,y=null,P=null,B=null,C=null,U=null,D=null,N=null,T=new nt(0,0,0),L=0,k=!1,G=null,K=null,le=null,ue=null,j=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=$>=1):ge.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=$>=2);let ve=null,I={};const W=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Te=new Yt().fromArray(W),Ne=new Yt().fromArray(ye);function ae(X,Re,_e,Ce){const Be=new Uint8Array(4),be=r.createTexture();r.bindTexture(X,be),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<_e;qe++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(Re+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return be}const Me={};Me[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(r.DEPTH_TEST),u.setFunc(ro),rn(!1),on(tv),Ee(r.CULL_FACE),Tt(Ha);function Ee(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function He(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function it(X,Re){return v[X]!==Re?(r.bindFramebuffer(X,Re),v[X]=Re,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(X,Re){let _e=b,Ce=!1;if(X){_e=x.get(Re),_e===void 0&&(_e=[],x.set(Re,_e));const Be=X.textures;if(_e.length!==Be.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let be=0,qe=Be.length;be<qe;be++)_e[be]=r.COLOR_ATTACHMENT0+be;_e.length=Be.length,Ce=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(_e)}function Qt(X){return w!==X?(r.useProgram(X),w=X,!0):!1}const dt={[tr]:r.FUNC_ADD,[OM]:r.FUNC_SUBTRACT,[PM]:r.FUNC_REVERSE_SUBTRACT};dt[IM]=r.MIN,dt[BM]=r.MAX;const Et={[FM]:r.ZERO,[zM]:r.ONE,[HM]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[qM]:r.SRC_ALPHA_SATURATE,[XM]:r.DST_COLOR,[VM]:r.DST_ALPHA,[GM]:r.ONE_MINUS_SRC_COLOR,[Wd]:r.ONE_MINUS_SRC_ALPHA,[WM]:r.ONE_MINUS_DST_COLOR,[kM]:r.ONE_MINUS_DST_ALPHA,[YM]:r.CONSTANT_COLOR,[KM]:r.ONE_MINUS_CONSTANT_COLOR,[ZM]:r.CONSTANT_ALPHA,[jM]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(X,Re,_e,Ce,Be,be,qe,Ve,en,Ut){if(X===Ha){M===!0&&(He(r.BLEND),M=!1);return}if(M===!1&&(Ee(r.BLEND),M=!0),X!==UM){if(X!==y||Ut!==k){if((P!==tr||U!==tr)&&(r.blendEquation(r.FUNC_ADD),P=tr,U=tr),Ut)switch(X){case no:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.ONE,r.ONE);break;case nv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:at("WebGLState: Invalid blending: ",X);break}else switch(X){case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nv:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iv:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",X);break}B=null,C=null,D=null,N=null,T.set(0,0,0),L=0,y=X,k=Ut}return}Be=Be||Re,be=be||_e,qe=qe||Ce,(Re!==P||Be!==U)&&(r.blendEquationSeparate(dt[Re],dt[Be]),P=Re,U=Be),(_e!==B||Ce!==C||be!==D||qe!==N)&&(r.blendFuncSeparate(Et[_e],Et[Ce],Et[be],Et[qe]),B=_e,C=Ce,D=be,N=qe),(Ve.equals(T)===!1||en!==L)&&(r.blendColor(Ve.r,Ve.g,Ve.b,en),T.copy(Ve),L=en),y=X,k=!1}function gt(X,Re){X.side===ta?He(r.CULL_FACE):Ee(r.CULL_FACE);let _e=X.side===qn;Re&&(_e=!_e),rn(_e),X.blending===no&&X.transparent===!1?Tt(Ha):Tt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ce=X.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),hn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function rn(X){G!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),G=X)}function on(X){X!==DM?(Ee(r.CULL_FACE),X!==K&&(X===tv?r.cullFace(r.BACK):X===NM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),K=X}function ln(X){X!==le&&(H&&r.lineWidth(X),le=X)}function hn(X,Re,_e){X?(Ee(r.POLYGON_OFFSET_FILL),(ue!==Re||j!==_e)&&(ue=Re,j=_e,u.getReversed()&&(Re=-Re),r.polygonOffset(Re,_e))):He(r.POLYGON_OFFSET_FILL)}function jt(X){X?Ee(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function cn(X){X===void 0&&(X=r.TEXTURE0+F-1),ve!==X&&(r.activeTexture(X),ve=X)}function Y(X,Re,_e){_e===void 0&&(ve===null?_e=r.TEXTURE0+F-1:_e=ve);let Ce=I[_e];Ce===void 0&&(Ce={type:void 0,texture:void 0},I[_e]=Ce),(Ce.type!==X||Ce.texture!==Re)&&(ve!==_e&&(r.activeTexture(_e),ve=_e),r.bindTexture(X,Re||Me[X]),Ce.type=X,Ce.texture=Re)}function kt(){const X=I[ve];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Dt(){try{r.compressedTexImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function Q(){try{r.texSubImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function Ae(){try{r.texStorage2D(...arguments)}catch(X){at("WebGLState:",X)}}function De(){try{r.texStorage3D(...arguments)}catch(X){at("WebGLState:",X)}}function fe(){try{r.texImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function de(){try{r.texImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function we(X){return _[X]!==void 0?_[X]:r.getParameter(X)}function Fe(X,Re){_[X]!==Re&&(r.pixelStorei(X,Re),_[X]=Re)}function Oe(X){Te.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Te.copy(X))}function Le(X){Ne.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ne.copy(X))}function je(X,Re){let _e=d.get(Re);_e===void 0&&(_e=new WeakMap,d.set(Re,_e));let Ce=_e.get(X);Ce===void 0&&(Ce=r.getUniformBlockIndex(Re,X.name),_e.set(X,Ce))}function Je(X,Re){const Ce=d.get(Re).get(X);p.get(Re)!==Ce&&(r.uniformBlockBinding(Re,Ce,X.__bindingPointIndex),p.set(Re,Ce))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},ve=null,I={},v={},x=new WeakMap,b=[],w=null,M=!1,y=null,P=null,B=null,C=null,U=null,D=null,N=null,T=new nt(0,0,0),L=0,k=!1,G=null,K=null,le=null,ue=null,j=null,Te.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ee,disable:He,bindFramebuffer:it,drawBuffers:Qe,useProgram:Qt,setBlending:Tt,setMaterial:gt,setFlipSided:rn,setCullFace:on,setLineWidth:ln,setPolygonOffset:hn,setScissorTest:jt,activeTexture:cn,bindTexture:Y,unbindTexture:kt,compressedTexImage2D:Dt,compressedTexImage3D:O,texImage2D:fe,texImage3D:de,pixelStorei:Fe,getParameter:we,updateUBOMapping:je,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:De,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:Oe,viewport:Le,reset:st}}function Pw(r,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new mt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return b?new OffscreenCanvas(O,E):Ll("canvas")}function M(O,E,Q){let se=1;const he=Dt(O);if((he.width>Q||he.height>Q)&&(se=Q/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ae=Math.floor(se*he.width),De=Math.floor(se*he.height);v===void 0&&(v=w(Ae,De));const fe=E?w(Ae,De):v;return fe.width=Ae,fe.height=De,fe.getContext("2d").drawImage(O,0,0,Ae,De),Ze("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+De+")."),fe}else return"data"in O&&Ze("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),O;return O}function y(O){return O.generateMipmaps}function P(O){r.generateMipmap(O)}function B(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(O,E,Q,se,he,Ae=!1){if(O!==null){if(r[O]!==void 0)return r[O];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let De;se&&(De=e.get("EXT_texture_norm16"),De||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===r.RED&&(Q===r.FLOAT&&(fe=r.R32F),Q===r.HALF_FLOAT&&(fe=r.R16F),Q===r.UNSIGNED_BYTE&&(fe=r.R8),Q===r.UNSIGNED_SHORT&&De&&(fe=De.R16_EXT),Q===r.SHORT&&De&&(fe=De.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.R8UI),Q===r.UNSIGNED_SHORT&&(fe=r.R16UI),Q===r.UNSIGNED_INT&&(fe=r.R32UI),Q===r.BYTE&&(fe=r.R8I),Q===r.SHORT&&(fe=r.R16I),Q===r.INT&&(fe=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(fe=r.RG32F),Q===r.HALF_FLOAT&&(fe=r.RG16F),Q===r.UNSIGNED_BYTE&&(fe=r.RG8),Q===r.UNSIGNED_SHORT&&De&&(fe=De.RG16_EXT),Q===r.SHORT&&De&&(fe=De.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RG8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RG16UI),Q===r.UNSIGNED_INT&&(fe=r.RG32UI),Q===r.BYTE&&(fe=r.RG8I),Q===r.SHORT&&(fe=r.RG16I),Q===r.INT&&(fe=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),Q===r.UNSIGNED_INT&&(fe=r.RGB32UI),Q===r.BYTE&&(fe=r.RGB8I),Q===r.SHORT&&(fe=r.RGB16I),Q===r.INT&&(fe=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),Q===r.UNSIGNED_INT&&(fe=r.RGBA32UI),Q===r.BYTE&&(fe=r.RGBA8I),Q===r.SHORT&&(fe=r.RGBA16I),Q===r.INT&&(fe=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&De&&(fe=De.RGB16_EXT),Q===r.SHORT&&De&&(fe=De.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),E===r.RGBA){const de=Ae?Uu:yt.getTransfer(he);Q===r.FLOAT&&(fe=r.RGBA32F),Q===r.HALF_FLOAT&&(fe=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(fe=de===zt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&De&&(fe=De.RGBA16_EXT),Q===r.SHORT&&De&&(fe=De.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(O,E){let Q;return O?E===null||E===oa||E===wl?Q=r.DEPTH24_STENCIL8:E===Ci?Q=r.DEPTH32F_STENCIL8:E===Rl&&(Q=r.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oa||E===wl?Q=r.DEPTH_COMPONENT24:E===Ci?Q=r.DEPTH_COMPONENT32F:E===Rl&&(Q=r.DEPTH_COMPONENT16),Q}function D(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==An&&O.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function N(O){const E=O.target;E.removeEventListener("dispose",N),L(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(O){const E=O.target;E.removeEventListener("dispose",T),G(E)}function L(O){const E=a.get(O);if(E.__webglInit===void 0)return;const Q=O.source,se=x.get(Q);if(se){const he=se[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(O),Object.keys(se).length===0&&x.delete(Q)}a.remove(O)}function k(O){const E=a.get(O);r.deleteTexture(E.__webglTexture);const Q=O.source,se=x.get(Q);delete se[E.__cacheKey],u.memory.textures--}function G(O){const E=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let he=0;he<E.__webglFramebuffer[se].length;he++)r.deleteFramebuffer(E.__webglFramebuffer[se][he]);else r.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)r.deleteFramebuffer(E.__webglFramebuffer[se]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=O.textures;for(let se=0,he=Q.length;se<he;se++){const Ae=a.get(Q[se]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),u.memory.textures--),a.remove(Q[se])}a.remove(O)}let K=0;function le(){K=0}function ue(){return K}function j(O){K=O}function F(){const O=K;return O>=o.maxTextures&&Ze("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),K+=1,O}function H(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function $(O,E){const Q=a.get(O);if(O.isVideoTexture&&Y(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){const se=O.image;if(se===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,O,E);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function ge(O,E){const Q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){He(Q,O,E);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function ve(O,E){const Q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){He(Q,O,E);return}n.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function I(O,E){const Q=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Q.__version!==O.version){it(Q,O,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const W={[lo]:r.REPEAT,[na]:r.CLAMP_TO_EDGE,[Cu]:r.MIRRORED_REPEAT},ye={[An]:r.NEAREST,[Ux]:r.NEAREST_MIPMAP_NEAREST,[Ml]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[Mu]:r.LINEAR_MIPMAP_NEAREST,[Ba]:r.LINEAR_MIPMAP_LINEAR},Te={[ab]:r.NEVER,[cb]:r.ALWAYS,[sb]:r.LESS,[Kp]:r.LEQUAL,[rb]:r.EQUAL,[Zp]:r.GEQUAL,[ob]:r.GREATER,[lb]:r.NOTEQUAL};function Ne(O,E){if(E.type===Ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Mu||E.magFilter===Ml||E.magFilter===Ba||E.minFilter===Rn||E.minFilter===Mu||E.minFilter===Ml||E.minFilter===Ba)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,W[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,W[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,W[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,ye[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==Ml&&E.minFilter!==Ba||E.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function ae(O,E){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",N));const se=E.source;let he=x.get(se);he===void 0&&(he={},x.set(se,he));const Ae=H(E);if(Ae!==O.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),he[Ae].usedTimes++;const De=he[O.__cacheKey];De!==void 0&&(he[O.__cacheKey].usedTimes--,De.usedTimes===0&&k(E)),O.__cacheKey=Ae,O.__webglTexture=he[Ae].texture}return Q}function Me(O,E,Q){return Math.floor(Math.floor(O/Q)/E)}function Ee(O,E,Q,se){const Ae=O.updateRanges;if(Ae.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,se,E.data);else{Ae.sort((Fe,Oe)=>Fe.start-Oe.start);let De=0;for(let Fe=1;Fe<Ae.length;Fe++){const Oe=Ae[De],Le=Ae[Fe],je=Oe.start+Oe.count,Je=Me(Le.start,E.width,4),st=Me(Oe.start,E.width,4);Le.start<=je+1&&Je===st&&Me(Le.start+Le.count-1,E.width,4)===Je?Oe.count=Math.max(Oe.count,Le.start+Le.count-Oe.start):(++De,Ae[De]=Le)}Ae.length=De+1;const fe=n.getParameter(r.UNPACK_ROW_LENGTH),de=n.getParameter(r.UNPACK_SKIP_PIXELS),we=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,Oe=Ae.length;Fe<Oe;Fe++){const Le=Ae[Fe],je=Math.floor(Le.start/4),Je=Math.ceil(Le.count/4),st=je%E.width,X=Math.floor(je/E.width),Re=Je,_e=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,st),n.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,st,X,Re,_e,Q,se,E.data)}O.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,fe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,de),n.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function He(O,E,Q){let se=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=r.TEXTURE_3D);const he=ae(O,E),Ae=E.source;n.bindTexture(se,O.__webglTexture,r.TEXTURE0+Q);const De=a.get(Ae);if(Ae.version!==De.__version||he===!0){if(n.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=yt.getPrimaries(yt.workingColorSpace),Ce=E.colorSpace===Rs?null:yt.getPrimaries(E.colorSpace),Be=E.colorSpace===Rs||_e===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let de=M(E.image,!1,o.maxTextureSize);de=kt(E,de);const we=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type);let Oe=C(E.internalFormat,we,Fe,E.normalized,E.colorSpace,E.isVideoTexture);Ne(se,E);let Le;const je=E.mipmaps,Je=E.isVideoTexture!==!0,st=De.__version===void 0||he===!0,X=Ae.dataReady,Re=D(E,de);if(E.isDepthTexture)Oe=U(E.format===ir,E.type),st&&(Je?n.texStorage2D(r.TEXTURE_2D,1,Oe,de.width,de.height):n.texImage2D(r.TEXTURE_2D,0,Oe,de.width,de.height,0,we,Fe,null));else if(E.isDataTexture)if(je.length>0){Je&&st&&n.texStorage2D(r.TEXTURE_2D,Re,Oe,je[0].width,je[0].height);for(let _e=0,Ce=je.length;_e<Ce;_e++)Le=je[_e],Je?X&&n.texSubImage2D(r.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,Fe,Le.data):n.texImage2D(r.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,we,Fe,Le.data);E.generateMipmaps=!1}else Je?(st&&n.texStorage2D(r.TEXTURE_2D,Re,Oe,de.width,de.height),X&&Ee(E,de,we,Fe)):n.texImage2D(r.TEXTURE_2D,0,Oe,de.width,de.height,0,we,Fe,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&st&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Oe,je[0].width,je[0].height,de.depth);for(let _e=0,Ce=je.length;_e<Ce;_e++)if(Le=je[_e],E.format!==Di)if(we!==null)if(Je){if(X)if(E.layerUpdates.size>0){const Be=Kv(Le.width,Le.height,E.format,E.type);for(const be of E.layerUpdates){const qe=Le.data.subarray(be*Be/Le.data.BYTES_PER_ELEMENT,(be+1)*Be/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,be,Le.width,Le.height,1,we,qe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,de.depth,we,Le.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,Oe,Le.width,Le.height,de.depth,0,Le.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?X&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,de.depth,we,Fe,Le.data):n.texImage3D(r.TEXTURE_2D_ARRAY,_e,Oe,Le.width,Le.height,de.depth,0,we,Fe,Le.data)}else{Je&&st&&n.texStorage2D(r.TEXTURE_2D,Re,Oe,je[0].width,je[0].height);for(let _e=0,Ce=je.length;_e<Ce;_e++)Le=je[_e],E.format!==Di?we!==null?Je?X&&n.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,Le.data):n.compressedTexImage2D(r.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,Le.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?X&&n.texSubImage2D(r.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,Fe,Le.data):n.texImage2D(r.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,we,Fe,Le.data)}else if(E.isDataArrayTexture)if(Je){if(st&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Oe,de.width,de.height,de.depth),X)if(E.layerUpdates.size>0){const _e=Kv(de.width,de.height,E.format,E.type);for(const Ce of E.layerUpdates){const Be=de.data.subarray(Ce*_e/de.data.BYTES_PER_ELEMENT,(Ce+1)*_e/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,de.width,de.height,1,we,Fe,Be)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,Fe,de.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,we,Fe,de.data);else if(E.isData3DTexture)Je?(st&&n.texStorage3D(r.TEXTURE_3D,Re,Oe,de.width,de.height,de.depth),X&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,Fe,de.data)):n.texImage3D(r.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,we,Fe,de.data);else if(E.isFramebufferTexture){if(st)if(Je)n.texStorage2D(r.TEXTURE_2D,Re,Oe,de.width,de.height);else{let _e=de.width,Ce=de.height;for(let Be=0;Be<Re;Be++)n.texImage2D(r.TEXTURE_2D,Be,Oe,_e,Ce,0,we,Fe,null),_e>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),de.parentNode!==_e){_e.appendChild(de),_.add(E),_e.onpaint=Ce=>{const Be=Ce.changedElements;for(const be of _)Be.includes(be.image)&&(be.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,de);else{const Be=r.RGBA,be=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Be,be,qe,de)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(je.length>0){if(Je&&st){const _e=Dt(je[0]);n.texStorage2D(r.TEXTURE_2D,Re,Oe,_e.width,_e.height)}for(let _e=0,Ce=je.length;_e<Ce;_e++)Le=je[_e],Je?X&&n.texSubImage2D(r.TEXTURE_2D,_e,0,0,we,Fe,Le):n.texImage2D(r.TEXTURE_2D,_e,Oe,we,Fe,Le);E.generateMipmaps=!1}else if(Je){if(st){const _e=Dt(de);n.texStorage2D(r.TEXTURE_2D,Re,Oe,_e.width,_e.height)}X&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Fe,de)}else n.texImage2D(r.TEXTURE_2D,0,Oe,we,Fe,de);y(E)&&P(se),De.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function it(O,E,Q){if(E.image.length!==6)return;const se=ae(O,E),he=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+Q);const Ae=a.get(he);if(he.version!==Ae.__version||se===!0){n.activeTexture(r.TEXTURE0+Q);const De=yt.getPrimaries(yt.workingColorSpace),fe=E.colorSpace===Rs?null:yt.getPrimaries(E.colorSpace),de=E.colorSpace===Rs||De===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let be=0;be<6;be++)!we&&!Fe?Oe[be]=M(E.image[be],!0,o.maxCubemapSize):Oe[be]=Fe?E.image[be].image:E.image[be],Oe[be]=kt(E,Oe[be]);const Le=Oe[0],je=c.convert(E.format,E.colorSpace),Je=c.convert(E.type),st=C(E.internalFormat,je,Je,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Re=Ae.__version===void 0||se===!0,_e=he.dataReady;let Ce=D(E,Le);Ne(r.TEXTURE_CUBE_MAP,E);let Be;if(we){X&&Re&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,st,Le.width,Le.height);for(let be=0;be<6;be++){Be=Oe[be].mipmaps;for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];E.format!==Di?je!==null?X?_e&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ve.width,Ve.height,je,Ve.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,st,Ve.width,Ve.height,0,Ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ve.width,Ve.height,je,Je,Ve.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,st,Ve.width,Ve.height,0,je,Je,Ve.data)}}}else{if(Be=E.mipmaps,X&&Re){Be.length>0&&Ce++;const be=Dt(Oe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,st,be.width,be.height)}for(let be=0;be<6;be++)if(Fe){X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Oe[be].width,Oe[be].height,je,Je,Oe[be].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Oe[be].width,Oe[be].height,0,je,Je,Oe[be].data);for(let qe=0;qe<Be.length;qe++){const en=Be[qe].image[be].image;X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,en.width,en.height,je,Je,en.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,st,en.width,en.height,0,je,Je,en.data)}}else{X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,Je,Oe[be]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,je,Je,Oe[be]);for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,je,Je,Ve.image[be]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,st,je,Je,Ve.image[be])}}}y(E)&&P(r.TEXTURE_CUBE_MAP),Ae.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Qe(O,E,Q,se,he,Ae){const De=c.convert(Q.format,Q.colorSpace),fe=c.convert(Q.type),de=C(Q.internalFormat,De,fe,Q.normalized,Q.colorSpace),we=a.get(E),Fe=a.get(Q);if(Fe.__renderTarget=E,!we.__hasExternalTextures){const Oe=Math.max(1,E.width>>Ae),Le=Math.max(1,E.height>>Ae);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?n.texImage3D(he,Ae,de,Oe,Le,E.depth,0,De,fe,null):n.texImage2D(he,Ae,de,Oe,Le,0,De,fe,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),cn(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,he,Fe.__webglTexture,0,jt(E)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,he,Fe.__webglTexture,Ae),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(O,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const se=E.depthTexture,he=se&&se.isDepthTexture?se.type:null,Ae=U(E.stencilBuffer,he),De=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;cn(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt(E),Ae,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt(E),Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,O)}else{const se=E.textures;for(let he=0;he<se.length;he++){const Ae=se[he],De=c.convert(Ae.format,Ae.colorSpace),fe=c.convert(Ae.type),de=C(Ae.internalFormat,De,fe,Ae.normalized,Ae.colorSpace);cn(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt(E),de,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt(E),de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(O,E,Q){const se=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=a.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),Fe=c.convert(E.depthTexture.type);let Oe;E.depthTexture.format===Xa?Oe=r.DEPTH_COMPONENT24:E.depthTexture.format===ir&&(Oe=r.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Oe,E.width,E.height,0,we,Fe,null)}}else $(E.depthTexture,0);const Ae=he.__webglTexture,De=jt(E),fe=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,de=E.depthTexture.format===ir?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xa)cn(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,fe,Ae,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,de,fe,Ae,0);else if(E.depthTexture.format===ir)cn(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,fe,Ae,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,de,fe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Et(O){const E=a.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const se=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=se}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let se=0;se<6;se++)dt(E.__webglFramebuffer[se],O,se);else{const se=O.texture.mipmaps;se&&se.length>0?dt(E.__webglFramebuffer[0],O,0):dt(E.__webglFramebuffer,O,0)}else if(Q){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=r.createRenderbuffer(),Qt(E.__webglDepthbuffer[se],O,!1);else{const he=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ae)}}else{const se=O.texture.mipmaps;if(se&&se.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Qt(E.__webglDepthbuffer,O,!1);else{const he=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ae)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(O,E,Q){const se=a.get(O);E!==void 0&&Qe(se.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Et(O)}function gt(O){const E=O.texture,Q=a.get(O),se=a.get(E);O.addEventListener("dispose",T);const he=O.textures,Ae=O.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=E.version,u.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let de=0;de<E.mipmaps.length;de++)Q.__webglFramebuffer[fe][de]=r.createFramebuffer()}else Q.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(De)for(let fe=0,de=he.length;fe<de;fe++){const we=a.get(he[fe]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&cn(O)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const de=he[fe];Q.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const we=c.convert(de.format,de.colorSpace),Fe=c.convert(de.type),Oe=C(de.internalFormat,we,Fe,de.normalized,de.colorSpace,O.isXRRenderTarget===!0),Le=jt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Oe,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Qt(Q.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){n.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Qe(Q.__webglFramebuffer[fe][de],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Qe(Q.__webglFramebuffer[fe],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(E)&&P(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let fe=0,de=he.length;fe<de;fe++){const we=he[fe],Fe=a.get(we);let Oe=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Oe=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Oe,Fe.__webglTexture),Ne(Oe,we),Qe(Q.__webglFramebuffer,O,we,r.COLOR_ATTACHMENT0+fe,Oe,0),y(we)&&P(Oe)}n.unbindTexture()}else{let fe=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(fe=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(fe,se.__webglTexture),Ne(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Qe(Q.__webglFramebuffer[de],O,E,r.COLOR_ATTACHMENT0,fe,de);else Qe(Q.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,fe,0);y(E)&&P(fe),n.unbindTexture()}O.depthBuffer&&Et(O)}function rn(O){const E=O.textures;for(let Q=0,se=E.length;Q<se;Q++){const he=E[Q];if(y(he)){const Ae=B(O),De=a.get(he).__webglTexture;n.bindTexture(Ae,De),P(Ae),n.unbindTexture()}}}const on=[],ln=[];function hn(O){if(O.samples>0){if(cn(O)===!1){const E=O.textures,Q=O.width,se=O.height;let he=r.COLOR_BUFFER_BIT;const Ae=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=a.get(O),fe=E.length>1;if(fe)for(let we=0;we<E.length;we++)n.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const de=O.texture.mipmaps;de&&de.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let we=0;we<E.length;we++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const Fe=a.get(E[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,Q,se,0,0,Q,se,he,r.NEAREST),p===!0&&(on.length=0,ln.length=0,on.push(r.COLOR_ATTACHMENT0+we),O.depthBuffer&&O.resolveDepthBuffer===!1&&(on.push(Ae),ln.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ln)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,on))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<E.length;we++){n.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const Fe=a.get(E[we]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,Fe,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function jt(O){return Math.min(o.maxSamples,O.samples)}function cn(O){const E=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function kt(O,E){const Q=O.colorSpace,se=O.format,he=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==_i&&Q!==Rs&&(yt.getTransfer(Q)===zt?(se!==Di||he!==gi)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",Q)),E}function Dt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=ge,this.setTexture3D=ve,this.setTextureCube=I,this.rebindTextures=Tt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=rn,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=cn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Iw(r,e){function n(a,o=Rs){let c;const u=yt.getTransfer(o);if(a===gi)return r.UNSIGNED_BYTE;if(a===Vp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===kp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Ix)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Bx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Ox)return r.BYTE;if(a===Px)return r.SHORT;if(a===Rl)return r.UNSIGNED_SHORT;if(a===Gp)return r.INT;if(a===oa)return r.UNSIGNED_INT;if(a===Ci)return r.FLOAT;if(a===ka)return r.HALF_FLOAT;if(a===Fx)return r.ALPHA;if(a===zx)return r.RGB;if(a===Di)return r.RGBA;if(a===Xa)return r.DEPTH_COMPONENT;if(a===ir)return r.DEPTH_STENCIL;if(a===Xp)return r.RED;if(a===Wp)return r.RED_INTEGER;if(a===rr)return r.RG;if(a===qp)return r.RG_INTEGER;if(a===Yp)return r.RGBA_INTEGER;if(a===bu||a===Eu||a===Tu||a===Au)if(u===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===bu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===bu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===$d||a===ep||a===tp||a===np)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===tp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===np)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ip||a===ap||a===sp||a===rp||a===op||a===Du||a===lp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ip||a===ap)return u===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===sp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===rp)return c.COMPRESSED_R11_EAC;if(a===op)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Du)return c.COMPRESSED_RG11_EAC;if(a===lp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===yp||a===Sp||a===Mp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===cp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===up)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===fp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===dp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===gp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===_p)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Sp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===bp||a===Ep||a===Tp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===bp)return u===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ap||a===Rp||a===Nu||a===wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ap)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Rp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Qx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ki({vertexShader:Bw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new ku(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hw extends or{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",M=new zw,y={},P=n.getContextAttributes();let B=null,C=null;const U=[],D=[],N=new mt;let T=null;const L=new Wn;L.viewport=new Yt;const k=new Wn;k.viewport=new Yt;const G=[L,k],K=new GE;let le=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Me=U[ae];return Me===void 0&&(Me=new hd,U[ae]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ae){let Me=U[ae];return Me===void 0&&(Me=new hd,U[ae]=Me),Me.getGripSpace()},this.getHand=function(ae){let Me=U[ae];return Me===void 0&&(Me=new hd,U[ae]=Me),Me.getHandSpace()};function j(ae){const Me=D.indexOf(ae.inputSource);if(Me===-1)return;const Ee=U[Me];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,d||u),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function F(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let ae=0;ae<U.length;ae++){const Me=D[ae];Me!==null&&(D[ae]=null,U[ae].disconnect(Me))}le=null,ue=null,M.reset();for(const ae in y)delete y[ae];e.setRenderTarget(B),x=null,v=null,_=null,o=null,C=null,Ne.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,a.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,a.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,He=null,it=null;P.depth&&(it=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=P.stencil?ir:Xa,He=P.stencil?wl:oa);const Qe={colorFormat:n.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Qe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new sa(v.textureWidth,v.textureHeight,{format:Di,type:gi,depthTexture:new uo(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new sa(x.framebufferWidth,x.framebufferHeight,{format:Di,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),Ne.setContext(o),Ne.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ae){for(let Me=0;Me<ae.removed.length;Me++){const Ee=ae.removed[Me],He=D.indexOf(Ee);He>=0&&(D[He]=null,U[He].disconnect(Ee))}for(let Me=0;Me<ae.added.length;Me++){const Ee=ae.added[Me];let He=D.indexOf(Ee);if(He===-1){for(let Qe=0;Qe<U.length;Qe++)if(Qe>=D.length){D.push(Ee),He=Qe;break}else if(D[Qe]===null){D[Qe]=Ee,He=Qe;break}if(He===-1)break}const it=U[He];it&&it.connect(Ee)}}const $=new J,ge=new J;function ve(ae,Me,Ee){$.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const He=$.distanceTo(ge),it=Me.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,Qt=it[14]/(it[10]-1),dt=it[14]/(it[10]+1),Et=(it[9]+1)/it[5],Tt=(it[9]-1)/it[5],gt=(it[8]-1)/it[0],rn=(Qe[8]+1)/Qe[0],on=Qt*gt,ln=Qt*rn,hn=He/(-gt+rn),jt=hn*-gt;if(Me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(jt),ae.translateZ(hn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),it[10]===-1)ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const cn=Qt+hn,Y=dt+hn,kt=on-jt,Dt=ln+(He-jt),O=Et*dt/Y*cn,E=Tt*dt/Y*cn;ae.projectionMatrix.makePerspective(kt,Dt,O,E,cn,Y),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function I(ae,Me){Me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Me=ae.near,Ee=ae.far;M.texture!==null&&(M.depthNear>0&&(Me=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),K.near=k.near=L.near=Me,K.far=k.far=L.far=Ee,(le!==K.near||ue!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),le=K.near,ue=K.far),K.layers.mask=ae.layers.mask|6,L.layers.mask=K.layers.mask&-5,k.layers.mask=K.layers.mask&-3;const He=ae.parent,it=K.cameras;I(K,He);for(let Qe=0;Qe<it.length;Qe++)I(it[Qe],He);it.length===2?ve(K,L,k):K.projectionMatrix.copy(L.projectionMatrix),W(ae,K,He)};function W(ae,Me,Ee){Ee===null?ae.matrix.copy(Me.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=co*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(ae){p=ae,v!==null&&(v.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(ae){return y[ae]};let ye=null;function Te(ae,Me){if(g=Me.getViewerPose(d||u),b=Me,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let He=!1;Ee.length!==K.cameras.length&&(K.cameras.length=0,He=!0);for(let dt=0;dt<Ee.length;dt++){const Et=Ee[dt];let Tt=null;if(x!==null)Tt=x.getViewport(Et);else{const rn=_.getViewSubImage(v,Et);Tt=rn.viewport,dt===0&&(e.setRenderTargetTextures(C,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(C))}let gt=G[dt];gt===void 0&&(gt=new Wn,gt.layers.enable(dt),gt.viewport=new Yt,G[dt]=gt),gt.matrix.fromArray(Et.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Et.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),dt===0&&(K.matrix.copy(gt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),He===!0&&K.cameras.push(gt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=a.getBinding();const dt=_.getDepthInformation(Ee[0]);dt&&dt.isValid&&dt.texture&&M.init(dt,o.renderState)}if(it&&it.includes("camera-access")&&w){e.state.unbindTexture(),_=a.getBinding();for(let dt=0;dt<Ee.length;dt++){const Et=Ee[dt].camera;if(Et){let Tt=y[Et];Tt||(Tt=new Qx,y[Et]=Tt);const gt=_.getCameraImage(Et);Tt.sourceTexture=gt}}}}for(let Ee=0;Ee<U.length;Ee++){const He=D[Ee],it=U[Ee];He!==null&&it!==void 0&&it.update(He,Me,d||u)}ye&&ye(ae,Me),Me.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Me}),b=null}const Ne=new ny;Ne.setAnimationLoop(Te),this.setAnimationLoop=function(ae){ye=ae},this.dispose=function(){}}}const Gw=new ht,cy=new ot;cy.set(-1,0,0,0,1,0,0,0,1);function Vw(r,e){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,Jx(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,P,B,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&x(M,y,C)):y.isMeshMatcapMaterial?(c(M,y),b(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,P,B):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=e.get(y),B=P.envMap,C=P.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(cy),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,P,B){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=B*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const P=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function kw(r,e,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,U){const D=U.program;a.uniformBlockBinding(C,D)}function d(C,U){let D=o[C.id];D===void 0&&(M(C),D=g(C),o[C.id]=D,C.addEventListener("dispose",P));const N=U.program;a.updateUBOMapping(C,N);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const U=_();C.__bindingPointIndex=U;const D=r.createBuffer(),N=C.__size,T=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,N,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const U=o[C.id],D=C.uniforms,N=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let T=0,L=D.length;T<L;T++){const k=D[T];if(Array.isArray(k))for(let G=0,K=k.length;G<K;G++)x(k[G],T,G,N);else x(k,T,0,N)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(C,U,D,N){if(w(C,U,D,N)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let k=0;for(let G=0;G<L.length;G++){const K=L[G],le=y(K);b(K,C.__data,k),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(k+=le.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}function b(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function w(C,U,D,N){const T=C.value,L=U+"_"+D;if(N[L]===void 0)return typeof T=="number"||typeof T=="boolean"?N[L]=T:ArrayBuffer.isView(T)?N[L]=T.slice():N[L]=T.clone(),!0;{const k=N[L];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return N[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function M(C){const U=C.uniforms;let D=0;const N=16;for(let L=0,k=U.length;L<k;L++){const G=Array.isArray(U[L])?U[L]:[U[L]];for(let K=0,le=G.length;K<le;K++){const ue=G[K],j=Array.isArray(ue.value)?ue.value:[ue.value];for(let F=0,H=j.length;F<H;F++){const $=j[F],ge=y($),ve=D%N,I=ve%ge.boundary,W=ve+I;D+=I,W!==0&&N-W<ge.storage&&(D+=N-W),ue.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=D,D+=ge.storage}}}const T=D%N;return T>0&&(D+=N-T),C.__size=D,C.__cache={},this}function y(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",C),U}function P(C){const U=C.target;U.removeEventListener("dispose",P);const D=u.indexOf(U.__bindingPointIndex);u.splice(D,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function B(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:p,update:d,dispose:B}}const Xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function Ww(){return Ji===null&&(Ji=new $p(Xw,16,16,rr,ka),Ji.name="DFG_LUT",Ji.minFilter=Rn,Ji.magFilter=Rn,Ji.wrapS=na,Ji.wrapT=na,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class qw{constructor(e={}){const{canvas:n=hb(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const w=x,M=new Set([Yp,qp,Wp]),y=new Set([gi,oa,Rl,wl,Vp,kp]),P=new Uint32Array(4),B=new Int32Array(4),C=new J;let U=null,D=null;const N=[],T=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,K=null,le=null,ue=null,j=null;this._outputColorSpace=Tn;let F=0,H=0,$=null,ge=-1,ve=null;const I=new Yt,W=new Yt;let ye=null;const Te=new nt(0);let Ne=0,ae=n.width,Me=n.height,Ee=1,He=null,it=null;const Qe=new Yt(0,0,ae,Me),Qt=new Yt(0,0,ae,Me);let dt=!1;const Et=new tm;let Tt=!1,gt=!1;const rn=new ht,on=new J,ln=new Yt,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function cn(){return $===null?Ee:1}let Y=a;function kt(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fp}`),n.addEventListener("webglcontextlost",en,!1),n.addEventListener("webglcontextrestored",Ut,!1),n.addEventListener("webglcontextcreationerror",ii,!1),Y===null){const q="webgl2";if(Y=kt(q,A),Y===null)throw kt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw at("WebGLRenderer: "+A.message),A}let Dt,O,E,Q,se,he,Ae,De,fe,de,we,Fe,Oe,Le,je,Je,st,X,Re,_e,Ce,Be,be;function qe(){Dt=new W1(Y),Dt.init(),Ce=new Iw(Y,Dt),O=new B1(Y,Dt,e,Ce),E=new Ow(Y,Dt),O.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),le=Y.createFramebuffer(),ue=Y.createFramebuffer(),j=Y.createFramebuffer(),Q=new K1(Y),se=new yw,he=new Pw(Y,Dt,E,se,O,Ce,Q),Ae=new X1(k),De=new JE(Y),Be=new P1(Y,De),fe=new q1(Y,De,Q,Be),de=new j1(Y,fe,De,Be,Q),X=new Z1(Y,O,he),je=new F1(se),we=new xw(k,Ae,Dt,O,Be,je),Fe=new Vw(k,se),Oe=new Mw,Le=new ww(Dt),st=new O1(k,Ae,E,de,b,p),Je=new Uw(k,de,O),be=new kw(Y,Q,O,E),Re=new I1(Y,Dt,Q),_e=new Y1(Y,Dt,Q),Q.programs=we.programs,k.capabilities=O,k.extensions=Dt,k.properties=se,k.renderLists=Oe,k.shadowMap=Je,k.state=E,k.info=Q}qe(),w!==gi&&(L=new J1(w,n.width,n.height,h,o,c));const Ve=new Hw(k,Y);this.xr=Ve,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ae,Me,!1))},this.getSize=function(A){return A.set(ae,Me)},this.setSize=function(A,q,re=!0){if(Ve.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,Me=q,n.width=Math.floor(A*Ee),n.height=Math.floor(q*Ee),re===!0&&(n.style.width=A+"px",n.style.height=q+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ae*Ee,Me*Ee).floor()},this.setDrawingBufferSize=function(A,q,re){ae=A,Me=q,Ee=re,n.width=Math.floor(A*re),n.height=Math.floor(q*re),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(w===gi){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,q,re,ne){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,q,re,ne),E.viewport(I.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Qt)},this.setScissor=function(A,q,re,ne){A.isVector4?Qt.set(A.x,A.y,A.z,A.w):Qt.set(A,q,re,ne),E.scissor(W.copy(Qt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){E.setScissorTest(dt=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,re=!0){let ne=0;if(A){let ie=!1;if($!==null){const Pe=$.texture.format;ie=M.has(Pe)}if(ie){const Pe=$.texture.type,Ge=y.has(Pe),Ue=st.getClearColor(),Xe=st.getClearAlpha(),ke=Ue.r,$e=Ue.g,lt=Ue.b;Ge?(P[0]=ke,P[1]=$e,P[2]=lt,P[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,P)):(B[0]=ke,B[1]=$e,B[2]=lt,B[3]=Xe,Y.clearBufferiv(Y.COLOR,0,B))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){n.removeEventListener("webglcontextlost",en,!1),n.removeEventListener("webglcontextrestored",Ut,!1),n.removeEventListener("webglcontextcreationerror",ii,!1),st.dispose(),Oe.dispose(),Le.dispose(),se.dispose(),Ae.dispose(),de.dispose(),Be.dispose(),be.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",gn),Ve.removeEventListener("sessionend",Un),Zn.stop()};function en(A){A.preventDefault(),Ou("WebGLRenderer: Context Lost."),G=!0}function Ut(){Ou("WebGLRenderer: Context Restored."),G=!1;const A=Q.autoReset,q=Je.enabled,re=Je.autoUpdate,ne=Je.needsUpdate,ie=Je.type;qe(),Q.autoReset=A,Je.enabled=q,Je.autoUpdate=re,Je.needsUpdate=ne,Je.type=ie}function ii(A){at("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ai(A){const q=A.target;q.removeEventListener("dispose",ai),vo(q)}function vo(A){xo(A),se.remove(A)}function xo(A){const q=se.get(A).programs;q!==void 0&&(q.forEach(function(re){we.releaseProgram(re)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,re,ne,ie,Pe){q===null&&(q=hn);const Ge=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ue=Za(A,q,re,ne,ie);E.setMaterial(ne,Ge);let Xe=re.index,ke=1;if(ne.wireframe===!0){if(Xe=fe.getWireframeAttribute(re),Xe===void 0)return;ke=2}const $e=re.drawRange,lt=re.attributes.position;let Ke=$e.start*ke,Rt=($e.start+$e.count)*ke;Pe!==null&&(Ke=Math.max(Ke,Pe.start*ke),Rt=Math.min(Rt,(Pe.start+Pe.count)*ke)),Xe!==null?(Ke=Math.max(Ke,0),Rt=Math.min(Rt,Xe.count)):lt!=null&&(Ke=Math.max(Ke,0),Rt=Math.min(Rt,lt.count));const tn=Rt-Ke;if(tn<0||tn===1/0)return;Be.setup(ie,ne,Ue,re,Xe);let Kt,Ot=Re;if(Xe!==null&&(Kt=De.get(Xe),Ot=_e,Ot.setIndex(Kt)),ie.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*cn()),Ot.setMode(Y.LINES)):Ot.setMode(Y.TRIANGLES);else if(ie.isLine){let Pt=ne.linewidth;Pt===void 0&&(Pt=1),E.setLineWidth(Pt*cn()),ie.isLineSegments?Ot.setMode(Y.LINES):ie.isLineLoop?Ot.setMode(Y.LINE_LOOP):Ot.setMode(Y.LINE_STRIP)}else ie.isPoints?Ot.setMode(Y.POINTS):ie.isSprite&&Ot.setMode(Y.TRIANGLES);if(ie.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Pt=ie._multiDrawStarts,ze=ie._multiDrawCounts,Fn=ie._multiDrawCount,_t=Xe?De.get(Xe).bytesPerElement:1,bn=se.get(ne).currentProgram.getUniforms();for(let si=0;si<Fn;si++)bn.setValue(Y,"_gl_DrawID",si),Ot.render(Pt[si]/_t,ze[si])}else if(ie.isInstancedMesh)Ot.renderInstances(Ke,tn,ie.count);else if(re.isInstancedBufferGeometry){const Pt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ze=Math.min(re.instanceCount,Pt);Ot.renderInstances(Ke,tn,ze)}else Ot.render(Ke,tn)};function yo(A,q,re){A.transparent===!0&&A.side===ta&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Ka(A,q,re),A.side=Va,A.needsUpdate=!0,Ka(A,q,re),A.side=ta):Ka(A,q,re)}this.compile=function(A,q,re=null){re===null&&(re=A),D=Le.get(re),D.init(q),T.push(D),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),A!==re&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),D.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){const Ue=Pe[Ge];yo(Ue,re,ie),ne.add(Ue)}else yo(Pe,re,ie),ne.add(Pe)}),D=T.pop(),ne},this.compileAsync=function(A,q,re=null){const ne=this.compile(A,q,re);return new Promise(ie=>{function Pe(){if(ne.forEach(function(Ge){se.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){ie(A);return}setTimeout(Pe,10)}Dt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let lr=null;function Wi(A){lr&&lr(A)}function gn(){Zn.stop()}function Un(){Zn.start()}const Zn=new ny;Zn.setAnimationLoop(Wi),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(A){lr=A,Ve.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},Ve.addEventListener("sessionstart",gn),Ve.addEventListener("sessionend",Un),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(A,q);const re=Ve.enabled===!0&&Ve.isPresenting===!0,ne=L!==null&&($===null||re)&&L.begin(k,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,q,$),D=Le.get(A,T.length),D.init(q),D.state.textureUnits=he.getTextureUnits(),T.push(D),rn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Et.setFromProjectionMatrix(rn,ia,q.reversedDepth),gt=this.localClippingEnabled,Tt=je.init(this.clippingPlanes,gt),U=Oe.get(A,N.length),U.init(),N.push(U),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=k.xr.getDepthSensingMesh();Ge!==null&&Cs(Ge,q,-1/0,k.sortObjects)}Cs(A,q,0,k.sortObjects),U.finish(),k.sortObjects===!0&&U.sort(He,it,q.reversedDepth),jt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,jt&&st.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Tt===!0&&je.beginShadows();const ie=D.state.shadowsArray;if(Je.render(ie,A,q),Tt===!0&&je.endShadows(),(ne&&L.hasRenderPass())===!1){const Ge=U.opaque,Ue=U.transmissive;if(D.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Ue.length>0)for(let ke=0,$e=Xe.length;ke<$e;ke++){const lt=Xe[ke];Bl(Ge,Ue,A,lt)}jt&&st.render(A);for(let ke=0,$e=Xe.length;ke<$e;ke++){const lt=Xe[ke];Il(U,A,lt,lt.viewport)}}else Ue.length>0&&Bl(Ge,Ue,A,q),jt&&st.render(A),Il(U,A,q)}$!==null&&H===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),ne&&L.end(k),A.isScene===!0&&A.onAfterRender(k,A,q),Be.resetDefaultState(),ge=-1,ve=null,T.pop(),T.length>0?(D=T[T.length-1],he.setTextureUnits(D.state.textureUnits),Tt===!0&&je.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,N.pop(),N.length>0?U=N[N.length-1]:U=null,K!==null&&K.renderEnd()};function Cs(A,q,re,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Et.intersectsSprite(A)){ne&&ln.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rn);const Ge=de.update(A),Ue=A.material;Ue.visible&&U.push(A,Ge,Ue,re,ln.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Et.intersectsObject(A))){const Ge=de.update(A),Ue=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ln.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ln.copy(Ge.boundingSphere.center)),ln.applyMatrix4(A.matrixWorld).applyMatrix4(rn)),Array.isArray(Ue)){const Xe=Ge.groups;for(let ke=0,$e=Xe.length;ke<$e;ke++){const lt=Xe[ke],Ke=Ue[lt.materialIndex];Ke&&Ke.visible&&U.push(A,Ge,Ke,re,ln.z,lt)}}else Ue.visible&&U.push(A,Ge,Ue,re,ln.z,null)}}const Pe=A.children;for(let Ge=0,Ue=Pe.length;Ge<Ue;Ge++)Cs(Pe[Ge],q,re,ne)}function Il(A,q,re,ne){const{opaque:ie,transmissive:Pe,transparent:Ge}=A;D.setupLightsView(re),Tt===!0&&je.setGlobalState(k.clippingPlanes,re),ne&&E.viewport(I.copy(ne)),ie.length>0&&Ds(ie,q,re),Pe.length>0&&Ds(Pe,q,re),Ge.length>0&&Ds(Ge,q,re),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Bl(A,q,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const Ke=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new sa(1,1,{generateMipmaps:!0,type:Ke?ka:gi,minFilter:Ba,samples:Math.max(4,O.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Pe=D.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||I;Pe.setSize(Ge.z*k.transmissionResolutionScale,Ge.w*k.transmissionResolutionScale);const Ue=k.getRenderTarget(),Xe=k.getActiveCubeFace(),ke=k.getActiveMipmapLevel();k.setRenderTarget(Pe),k.getClearColor(Te),Ne=k.getClearAlpha(),Ne<1&&k.setClearColor(16777215,.5),k.clear(),jt&&st.render(re);const $e=k.toneMapping;k.toneMapping=aa;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),Tt===!0&&je.setGlobalState(k.clippingPlanes,ne),Ds(A,re,ne),he.updateMultisampleRenderTarget(Pe),he.updateRenderTargetMipmap(Pe),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Rt=0,tn=q.length;Rt<tn;Rt++){const Kt=q[Rt],{object:Ot,geometry:Pt,material:ze,group:Fn}=Kt;if(ze.side===ta&&Ot.layers.test(ne.layers)){const _t=ze.side;ze.side=qn,ze.needsUpdate=!0,Ya(Ot,re,ne,Pt,ze,Fn),ze.side=_t,ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(he.updateMultisampleRenderTarget(Pe),he.updateRenderTargetMipmap(Pe))}k.setRenderTarget(Ue,Xe,ke),k.setClearColor(Te,Ne),lt!==void 0&&(ne.viewport=lt),k.toneMapping=$e}function Ds(A,q,re){const ne=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Pe=A.length;ie<Pe;ie++){const Ge=A[ie],{object:Ue,geometry:Xe,group:ke}=Ge;let $e=Ge.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Ue.layers.test(re.layers)&&Ya(Ue,q,re,Xe,$e,ke)}}function Ya(A,q,re,ne,ie,Pe){A.onBeforeRender(k,q,re,ne,ie,Pe),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(k,q,re,ne,A,Pe),ie.transparent===!0&&ie.side===ta&&ie.forceSinglePass===!1?(ie.side=qn,ie.needsUpdate=!0,k.renderBufferDirect(re,q,ne,ie,A,Pe),ie.side=Va,ie.needsUpdate=!0,k.renderBufferDirect(re,q,ne,ie,A,Pe),ie.side=ta):k.renderBufferDirect(re,q,ne,ie,A,Pe),A.onAfterRender(k,q,re,ne,ie,Pe)}function Ka(A,q,re){q.isScene!==!0&&(q=hn);const ne=se.get(A),ie=D.state.lights,Pe=D.state.shadowsArray,Ge=ie.state.version,Ue=we.getParameters(A,ie.state,Pe,q,re,D.state.lightProbeGridArray),Xe=we.getProgramCacheKey(Ue);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ae.get(A.envMap||ne.environment,$e),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",ai),ke=new Map,ne.programs=ke);let lt=ke.get(Xe);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Ge)return da(A,Ue),lt}else Ue.uniforms=we.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,re,Ue),A.onBeforeCompile(Ue,k),lt=we.acquireProgram(Ue,Xe),ke.set(Xe,lt),ne.uniforms=Ue.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=je.uniform),da(A,Ue),ne.needsLights=Fl(A),ne.lightsStateVersion=Ge,ne.needsLights&&(Ke.ambientLightColor.value=ie.state.ambient,Ke.lightProbe.value=ie.state.probe,Ke.directionalLights.value=ie.state.directional,Ke.directionalLightShadows.value=ie.state.directionalShadow,Ke.spotLights.value=ie.state.spot,Ke.spotLightShadows.value=ie.state.spotShadow,Ke.rectAreaLights.value=ie.state.rectArea,Ke.ltc_1.value=ie.state.rectAreaLTC1,Ke.ltc_2.value=ie.state.rectAreaLTC2,Ke.pointLights.value=ie.state.point,Ke.pointLightShadows.value=ie.state.pointShadow,Ke.hemisphereLights.value=ie.state.hemi,Ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ie.state.spotLightMatrix,Ke.spotLightMap.value=ie.state.spotLightMap,Ke.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=lt,ne.uniformsList=null,lt}function ha(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=wu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function da(A,q){const re=se.get(A);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function Ns(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(q.matrixWorld);for(let re=0,ne=A.length;re<ne;re++){const ie=A[re];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function Za(A,q,re,ne,ie){q.isScene!==!0&&(q=hn),he.resetTextureUnits();const Pe=q.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ue=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:yt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=Ae.get(ne.envMap||Ge,Xe),$e=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!re.morphAttributes.position,Rt=!!re.morphAttributes.normal,tn=!!re.morphAttributes.color;let Kt=aa;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Kt=k.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,ze=se.get(ne),Fn=D.state.lights;if(Tt===!0&&(gt===!0||A!==ve)){const Lt=A===ve&&ne.id===ge;je.setState(ne,A,Lt)}let _t=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Fn.state.version||ze.outputColorSpace!==Ue||ie.isBatchedMesh&&ze.batching===!1||!ie.isBatchedMesh&&ze.batching===!0||ie.isBatchedMesh&&ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ze.instancing===!1||!ie.isInstancedMesh&&ze.instancing===!0||ie.isSkinnedMesh&&ze.skinning===!1||!ie.isSkinnedMesh&&ze.skinning===!0||ie.isInstancedMesh&&ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ze.instancingMorph===!1&&ie.morphTexture!==null||ze.envMap!==ke||ne.fog===!0&&ze.fog!==Pe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==je.numPlanes||ze.numIntersection!==je.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==lt||ze.morphTargets!==Ke||ze.morphNormals!==Rt||ze.morphColors!==tn||ze.toneMapping!==Kt||ze.morphTargetsCount!==Pt||!!ze.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,ze.__version=ne.version);let bn=ze.currentProgram;_t===!0&&(bn=Ka(ne,q,ie),K&&ne.isNodeMaterial&&K.onUpdateProgram(ne,bn,ze));let si=!1,Ni=!1,ri=!1;const It=bn.getUniforms(),nn=ze.uniforms;if(E.useProgram(bn.program)&&(si=!0,Ni=!0,ri=!0),ne.id!==ge&&(ge=ne.id,Ni=!0),ze.needsLights){const Lt=Ns(D.state.lightProbeGridArray,ie);ze.lightProbeGrid!==Lt&&(ze.lightProbeGrid=Lt,Ni=!0)}if(si||ve!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(Y,"projectionMatrix",A.projectionMatrix),It.setValue(Y,"viewMatrix",A.matrixWorldInverse);const qi=It.map.cameraPosition;qi!==void 0&&qi.setValue(Y,on.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&It.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),ve!==A&&(ve=A,Ni=!0,ri=!0)}if(ze.needsLights&&(Fn.state.directionalShadowMap.length>0&&It.setValue(Y,"directionalShadowMap",Fn.state.directionalShadowMap,he),Fn.state.spotShadowMap.length>0&&It.setValue(Y,"spotShadowMap",Fn.state.spotShadowMap,he),Fn.state.pointShadowMap.length>0&&It.setValue(Y,"pointShadowMap",Fn.state.pointShadowMap,he)),ie.isSkinnedMesh){It.setOptional(Y,ie,"bindMatrix"),It.setOptional(Y,ie,"bindMatrixInverse");const Lt=ie.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),It.setValue(Y,"boneTexture",Lt.boneTexture,he))}ie.isBatchedMesh&&(It.setOptional(Y,ie,"batchingTexture"),It.setValue(Y,"batchingTexture",ie._matricesTexture,he),It.setOptional(Y,ie,"batchingIdTexture"),It.setValue(Y,"batchingIdTexture",ie._indirectTexture,he),It.setOptional(Y,ie,"batchingColorTexture"),ie._colorsTexture!==null&&It.setValue(Y,"batchingColorTexture",ie._colorsTexture,he));const Li=re.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&X.update(ie,re,bn),(Ni||ze.receiveShadow!==ie.receiveShadow)&&(ze.receiveShadow=ie.receiveShadow,It.setValue(Y,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(nn.envMapIntensity.value=q.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Ww()),Ni){if(It.setValue(Y,"toneMappingExposure",k.toneMappingExposure),ze.needsLights&&_n(nn,ri),Pe&&ne.fog===!0&&Fe.refreshFogUniforms(nn,Pe),Fe.refreshMaterialUniforms(nn,ne,Ee,Me,D.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Lt=ze.lightProbeGrid;nn.probesSH.value=Lt.texture,nn.probesMin.value.copy(Lt.boundingBox.min),nn.probesMax.value.copy(Lt.boundingBox.max),nn.probesResolution.value.copy(Lt.resolution)}wu.upload(Y,ha(ze),nn,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(wu.upload(Y,ha(ze),nn,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(Y,"center",ie.center),It.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),It.setValue(Y,"normalMatrix",ie.normalMatrix),It.setValue(Y,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Lt=ne.uniformsGroups;for(let qi=0,ja=Lt.length;qi<ja;qi++){const Ls=Lt[qi];be.update(Ls,bn),be.bind(Ls,bn)}}return bn}function _n(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Fl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,q,re){const ne=se.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=q,se.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const re=se.get(A);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,re=0){$=A,F=q,H=re;let ne=null,ie=!1,Pe=!1;if(A){const Ue=se.get(A);if(Ue.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ue.__webglFramebuffer),I.copy(A.viewport),W.copy(A.scissor),ye=A.scissorTest,E.viewport(I),E.scissor(W),E.setScissorTest(ye),ge=-1;return}else if(Ue.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Ue.__hasExternalTextures)he.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Ue.__boundDepthTexture!==$e){if($e!==null&&se.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const ke=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ne=ke[q][re]:ne=ke[q],ie=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ne=se.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[re]:ne=ke,I.copy(A.viewport),W.copy(A.scissor),ye=A.scissorTest}else I.copy(Qe).multiplyScalar(Ee).floor(),W.copy(Qt).multiplyScalar(Ee).floor(),ye=dt;if(re!==0&&(ne=le),E.bindFramebuffer(Y.FRAMEBUFFER,ne)&&E.drawBuffers(A,ne),E.viewport(I),E.scissor(W),E.setScissorTest(ye),ie){const Ue=se.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ue.__webglTexture,re)}else if(Pe){const Ue=q;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=se.get(A.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,re,Ue)}}else if(A!==null&&re!==0){const Ue=se.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ue.__webglTexture,re)}ge=-1},this.readRenderTargetPixels=function(A,q,re,ne,ie,Pe,Ge,Ue=0){if(!(A&&A.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const ke=A.textures[Ue],$e=ke.format,lt=ke.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ue),!O.textureFormatReadable($e)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(lt)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&re>=0&&re<=A.height-ie&&Y.readPixels(q,re,ne,ie,Ce.convert($e),Ce.convert(lt),Pe)}finally{const ke=$!==null?se.get($).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,re,ne,ie,Pe,Ge,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(q>=0&&q<=A.width-ne&&re>=0&&re<=A.height-ie){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);const ke=A.textures[Ue],$e=ke.format,lt=ke.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ue),!O.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ke),Y.bufferData(Y.PIXEL_PACK_BUFFER,Pe.byteLength,Y.STREAM_READ),Y.readPixels(q,re,ne,ie,Ce.convert($e),Ce.convert(lt),0);const Rt=$!==null?se.get($).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Rt);const tn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await db(Y,tn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ke),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Pe),Y.deleteBuffer(Ke),Y.deleteSync(tn),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,re=0){const ne=Math.pow(2,-re),ie=Math.floor(A.image.width*ne),Pe=Math.floor(A.image.height*ne),Ge=q!==null?q.x:0,Ue=q!==null?q.y:0;he.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,re,0,0,Ge,Ue,ie,Pe),E.unbindTexture()},this.copyTextureToTexture=function(A,q,re=null,ne=null,ie=0,Pe=0){let Ge,Ue,Xe,ke,$e,lt,Ke,Rt,tn;const Kt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(re!==null)Ge=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,ke=re.min.x,$e=re.min.y,lt=re.isBox3?re.min.z:0;else{const nn=Math.pow(2,-ie);Ge=Math.floor(Kt.width*nn),Ue=Math.floor(Kt.height*nn),A.isDataArrayTexture?Xe=Kt.depth:A.isData3DTexture?Xe=Math.floor(Kt.depth*nn):Xe=1,ke=0,$e=0,lt=0}ne!==null?(Ke=ne.x,Rt=ne.y,tn=ne.z):(Ke=0,Rt=0,tn=0);const Ot=Ce.convert(q.format),Pt=Ce.convert(q.type);let ze;q.isData3DTexture?(he.setTexture3D(q,0),ze=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),ze=Y.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),ze=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const Fn=E.getParameter(Y.UNPACK_ROW_LENGTH),_t=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),bn=E.getParameter(Y.UNPACK_SKIP_PIXELS),si=E.getParameter(Y.UNPACK_SKIP_ROWS),Ni=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,lt);const ri=A.isDataArrayTexture||A.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const nn=se.get(A),Li=se.get(q),Lt=se.get(nn.__renderTarget),qi=se.get(Li.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Lt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ja=0;ja<Xe;ja++)ri&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(A).__webglTexture,ie,lt+ja),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(q).__webglTexture,Pe,tn+ja)),Y.blitFramebuffer(ke,$e,Ge,Ue,Ke,Rt,Ge,Ue,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||se.has(A)){const nn=se.get(A),Li=se.get(q);E.bindFramebuffer(Y.READ_FRAMEBUFFER,ue),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,j);for(let Lt=0;Lt<Xe;Lt++)ri?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,nn.__webglTexture,ie,lt+Lt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,nn.__webglTexture,ie),It?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Li.__webglTexture,Pe,tn+Lt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Li.__webglTexture,Pe),ie!==0?Y.blitFramebuffer(ke,$e,Ge,Ue,Ke,Rt,Ge,Ue,Y.COLOR_BUFFER_BIT,Y.NEAREST):It?Y.copyTexSubImage3D(ze,Pe,Ke,Rt,tn+Lt,ke,$e,Ge,Ue):Y.copyTexSubImage2D(ze,Pe,Ke,Rt,ke,$e,Ge,Ue);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(ze,Pe,Ke,Rt,tn,Ge,Ue,Xe,Ot,Pt,Kt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(ze,Pe,Ke,Rt,tn,Ge,Ue,Xe,Ot,Kt.data):Y.texSubImage3D(ze,Pe,Ke,Rt,tn,Ge,Ue,Xe,Ot,Pt,Kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Pe,Ke,Rt,Ge,Ue,Ot,Pt,Kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Pe,Ke,Rt,Kt.width,Kt.height,Ot,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,Pe,Ke,Rt,Ge,Ue,Ot,Pt,Kt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Fn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_t),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,bn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,si),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ni),Pe===0&&q.generateMipmaps&&Y.generateMipmap(ze),E.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,E.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}function vx(r,e){if(e===tb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Cp||e===Hx){let n=r.getIndex();if(n===null){const u=[],h=r.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);r.setIndex(u),n=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const a=n.count-2,o=[];if(e===Cp)for(let u=1;u<=a;u++)o.push(n.getX(0)),o.push(n.getX(u)),o.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(o.push(n.getX(u)),o.push(n.getX(u+1)),o.push(n.getX(u+2))):(o.push(n.getX(u+2)),o.push(n.getX(u+1)),o.push(n.getX(u)));o.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=r.clone();return c.setIndex(o),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Yw(r){const e=new Map,n=new Map,a=r.clone();return uy(r,a,function(o,c){e.set(c,o),n.set(o,c)}),a.traverse(function(o){if(!o.isSkinnedMesh)return;const c=o,u=e.get(o),h=u.skeleton.bones;c.skeleton=u.skeleton.clone(),c.bindMatrix.copy(u.bindMatrix),c.skeleton.bones=h.map(function(p){return n.get(p)}),c.bind(c.skeleton,c.bindMatrix)}),a}function uy(r,e,n){n(r,e);for(let a=0;a<r.children.length;a++)uy(r.children[a],e.children[a],n)}class Kw extends go{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new $w(n)}),this.register(function(n){return new eC(n)}),this.register(function(n){return new cC(n)}),this.register(function(n){return new uC(n)}),this.register(function(n){return new fC(n)}),this.register(function(n){return new nC(n)}),this.register(function(n){return new iC(n)}),this.register(function(n){return new aC(n)}),this.register(function(n){return new sC(n)}),this.register(function(n){return new Jw(n)}),this.register(function(n){return new rC(n)}),this.register(function(n){return new tC(n)}),this.register(function(n){return new lC(n)}),this.register(function(n){return new oC(n)}),this.register(function(n){return new jw(n)}),this.register(function(n){return new xx(n,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new xx(n,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new hC(n)})}load(e,n,a,o){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Al.extractUrlBase(e);u=Al.resolveURL(d,this.path)}else u=Al.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){o?o(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new ey(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,o){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===fy){try{u[pt.KHR_BINARY_GLTF]=new dC(e)}catch(_){o&&o(_);return}c=JSON.parse(u[pt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new AC(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case pt.KHR_MATERIALS_UNLIT:u[_]=new Qw;break;case pt.KHR_DRACO_MESH_COMPRESSION:u[_]=new pC(c,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:u[_]=new mC;break;case pt.KHR_MESH_QUANTIZATION:u[_]=new gC;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,o)}parseAsync(e,n){const a=this;return new Promise(function(o,c){a.parse(e,n,o,c)})}}function Zw(){let r={};return{get:function(e){return r[e]},add:function(e,n){r[e]=n},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function mn(r,e,n){const a=r.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jw{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,o=n.length;a<o;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let o=n.cache.get(a);if(o)return o;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const g=new nt(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],_i);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new Ru(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new BE(g),d.distance=_;break;case"spot":d=new PE(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),$i(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),o=Promise.resolve(d),n.cache.add(a,o),o}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class Qw{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return ar}extendParams(e,n,a){const o=[];e.color=new nt(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],_i),e.opacity=u[3]}c.baseColorTexture!==void 0&&o.push(a.assignTexture(e,"map",c.baseColorTexture,Tn))}return Promise.all(o)}}class Jw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}}class $w{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new mt(c,c)}return Promise.all(o)}}class eC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}}class tC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class nC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(n.sheenColor=new nt(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],_i)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,Tn)),a.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class iC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class aC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new nt().setRGB(c[0],c[1],c[2],_i),Promise.all(o)}}class sC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}}class rC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new nt().setRGB(c[0],c[1],c[2],_i),a.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,Tn)),Promise.all(o)}}class oC{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class lC{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ua:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class cC{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,o=a.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class uC{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class fC{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class xx{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const o=a.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=o.byteOffset||0,d=o.byteLength||0,g=o.count,_=o.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,o.mode,o.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,o.mode,o.filter),x})})}else return null}}class hC{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const o=n.meshes[a.mesh];for(const d of o.primitives)if(d.mode!==wi.TRIANGLES&&d.mode!==wi.TRIANGLE_STRIP&&d.mode!==wi.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,x=[];for(const b of _){const w=new ht,M=new J,y=new qa,P=new J(1,1,1),B=new nE(b.geometry,b.material,v);for(let C=0;C<v;C++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,C),p.ROTATION&&y.fromBufferAttribute(p.ROTATION,C),p.SCALE&&P.fromBufferAttribute(p.SCALE,C),B.setMatrixAt(C,w.compose(M,y,P));for(const C in p)if(C==="_COLOR_0"){const U=p[C];B.instanceColor=new Np(U.array,U.itemSize,U.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&b.geometry.setAttribute(C,p[C]);sn.prototype.copy.call(B,b),this.parser.assignFinalMaterial(B),x.push(B)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const fy="glTF",yl=12,yx={JSON:1313821514,BIN:5130562};class dC{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,yl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==fy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-yl,c=new DataView(e,yl);let u=0;for(;u<o;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===yx.JSON){const d=new Uint8Array(e,yl+u,h);this.content=a.decode(d)}else if(p===yx.BIN){const d=yl+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pC{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,o=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=Pp[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=Pp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=so[v.componentType];d[_]=x.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){o.decodeDracoFile(g,function(x){for(const b in x.attributes){const w=x.attributes[b],M=p[b];M!==void 0&&(w.normalized=M)}_(x)},h,d,_i,v)})})}}class mC{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class gC{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class hy extends ho{constructor(e,n,a,o){super(e,n,a,o)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o*3+o;for(let u=0;u!==o;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=o-n,_=(a-n)/g,v=_*_,x=v*_,b=e*d,w=b-d,M=-2*x+3*v,y=x-v,P=1-M,B=y-v+_;for(let C=0;C!==h;C++){const U=u[w+C+h],D=u[w+C+p]*g,N=u[b+C+h],T=u[b+C]*g;c[C]=P*U+B*D+M*N+y*T}return c}}const _C=new qa;class vC extends hy{interpolate_(e,n,a,o){const c=super.interpolate_(e,n,a,o);return _C.fromArray(c).normalize().toArray(c),c}}const wi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sx={9728:An,9729:Rn,9984:Ux,9985:Mu,9986:Ml,9987:Ba},Mx={33071:na,33648:Cu,10497:lo},Hd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xC={CUBICSPLINE:void 0,LINEAR:Dl,STEP:Cl},Gd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new im({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Va})),r.DefaultMaterial}function $s(r,e,n){for(const a in n.extensions)r[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function $i(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SC(r,e,n){let a=!1,o=!1,c=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(o=!0),_.COLOR_0!==void 0&&(c=!0),a&&o&&c)break}if(!a&&!o&&!c)return Promise.resolve(r);const u=[],h=[],p=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):r.attributes.position;u.push(v)}if(o){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):r.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):r.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(r.morphAttributes.position=g),o&&(r.morphAttributes.normal=_),c&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function MC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)r.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(r.morphTargetInfluences.length===n.length){r.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++)r.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bC(r){let e;const n=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Vd(n.attributes):e=r.indices+":"+Vd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let a=0,o=r.targets.length;a<o;a++)e+=":"+Vd(r.targets[a]);return e}function Vd(r){let e="";const n=Object.keys(r).sort();for(let a=0,o=n.length;a<o;a++)e+=n[a]+":"+r[n[a]]+";";return e}function Ip(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const TC=new ht;class AC{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new Zw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,o=-1,c=!1,u=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);o=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&o<17||c&&u<98?this.textureLoader=new LE(this.options.manager):this.textureLoader=new zE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ey(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:a,userData:{}};return $s(c,h,o),$i(h,o),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let o=0,c=n.length;o<c;o++){const u=n[o].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let o=0,c=e.length;o<c;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const o=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())c(g,h.children[d])};return c(a,o),o.name+="_instance_"+e.uses[n]++,o}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const o=e(n[a]);if(o)return o}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let o=0;o<n.length;o++){const c=e(n[o]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let o=this.cache.get(a);if(!o){switch(e){case"scene":o=this.loadScene(n);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":o=this.loadAccessor(n);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":o=this.loadBuffer(n);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":o=this.loadSkin(n);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":o=this.loadCamera(n);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(a,o)}return o}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(o.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,u){a.load(Al.resolveURL(n.uri,o.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const o=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+o)})}loadAccessor(e){const n=this,a=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=Hd[o.type],h=so[o.componentType],p=o.normalized===!0,d=new h(o.count*u);return Promise.resolve(new Yn(d,u,p))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=Hd[o.type],d=so[o.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=o.byteOffset||0,x=o.bufferView!==void 0?a.bufferViews[o.bufferView].byteStride:void 0,b=o.normalized===!0;let w,M;if(x&&x!==_){const y=Math.floor(v/x),P="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+y+":"+o.count;let B=n.cache.get(P);B||(w=new d(h,y*x,o.count*x/g),B=new Zb(w,x/g),n.cache.add(P,B)),M=new Jp(B,p,v%x/g,b)}else h===null?w=new d(o.count*p):w=new d(h,v,o.count*p),M=new Yn(w,p,b);if(o.sparse!==void 0){const y=Hd.SCALAR,P=so[o.sparse.indices.componentType],B=o.sparse.indices.byteOffset||0,C=o.sparse.values.byteOffset||0,U=new P(u[1],B,o.sparse.count*y),D=new d(u[2],C,o.sparse.count*p);h!==null&&(M=new Yn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let N=0,T=U.length;N<T;N++){const L=U[N];if(M.setX(L,D[N*p]),p>=2&&M.setY(L,D[N*p+1]),p>=3&&M.setZ(L,D[N*p+2]),p>=4&&M.setW(L,D[N*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const o=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=Sx[v.magFilter]||Rn,g.minFilter=Sx[v.minFilter]||Ba,g.wrapS=Mx[v.wrapS]||lo,g.wrapT=Mx[v.wrapT]||lo,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==An&&g.minFilter!==Rn,o.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,o=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=o.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,x){let b=v;n.isImageBitmapLoader===!0&&(b=function(w){const M=new Ln(w);M.needsUpdate=!0,v(M)}),n.load(Al.resolveURL(_,c.path),b,void 0,x)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),$i(_,u),_.userData.mimeType=u.mimeType||EC(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,o){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[pt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return o!==void 0&&(u.colorSpace=o),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const o=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new Zx,Vi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new Kx,Vi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(o||c||u){let h="ClonedMaterial:"+a.uuid+":";o&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),o&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return im}loadMaterial(e){const n=this,a=this.json,o=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[pt.KHR_MATERIALS_UNLIT]){const _=o[pt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new nt(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],_i),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",_.baseColorTexture,Tn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=ta);const g=c.alphaMode||Gd.OPAQUE;if(g===Gd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===Gd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==ar&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new mt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==ar&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==ar){const _=c.emissiveFactor;h.emissive=new nt().setRGB(_[0],_[1],_[2],_i)}return c.emissiveTexture!==void 0&&u!==ar&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Tn)),Promise.all(d).then(function(){const _=new u(h);return c.name&&(_.name=c.name),$i(_,c),n.associations.set(_,{materials:e}),c.extensions&&$s(o,_,c),_})}createUniqueName(e){const n=Gt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,o=this.primitiveCache;function c(h){return a[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return bx(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],g=bC(d),_=o[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=bx(new vi,d,n),o[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,o=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?yC(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let x=0,b=g.length;x<b;x++){const w=g[x],M=u[x];let y;const P=d[x];if(M.mode===wi.TRIANGLES||M.mode===wi.TRIANGLE_STRIP||M.mode===wi.TRIANGLE_FAN||M.mode===void 0)y=c.isSkinnedMesh===!0?new $b(w,P):new Kn(w,P),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),M.mode===wi.TRIANGLE_STRIP?y.geometry=vx(y.geometry,Hx):M.mode===wi.TRIANGLE_FAN&&(y.geometry=vx(y.geometry,Cp));else if(M.mode===wi.LINES)y=new rE(w,P);else if(M.mode===wi.LINE_STRIP)y=new nm(w,P);else if(M.mode===wi.LINE_LOOP)y=new oE(w,P);else if(M.mode===wi.POINTS)y=new lE(w,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(y.geometry.morphAttributes).length>0&&MC(y,c),y.name=n.createUniqueName(c.name||"mesh_"+e),$i(y,c),M.extensions&&$s(o,y,M),n.assignFinalMaterial(y),_.push(y)}for(let x=0,b=_.length;x<b;x++)n.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return c.extensions&&$s(o,_[0],c),_[0];const v=new Fa;c.extensions&&$s(o,v,c),n.associations.set(v,{meshes:e});for(let x=0,b=_.length;x<b;x++)v.add(_[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],o=a[a.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Wn(Nb.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):a.type==="orthographic"&&(n=new Wu(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),$i(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let o=0,c=n.joints.length;o<c;o++)a.push(this._loadNodeShallow(n.joints[o]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(o){const c=o.pop(),u=o,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new ht;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new em(h,p)})}loadAnimation(e){const n=this.json,a=this,o=n.animations[e],c=o.name?o.name:"animation_"+e,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=o.channels.length;_<v;_++){const x=o.channels[_],b=o.samplers[x.sampler],w=x.target,M=w.node,y=o.parameters!==void 0?o.parameters[b.input]:b.input,P=o.parameters!==void 0?o.parameters[b.output]:b.output;w.node!==void 0&&(u.push(this.getDependency("node",M)),h.push(this.getDependency("accessor",y)),p.push(this.getDependency("accessor",P)),d.push(b),g.push(w))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],b=_[2],w=_[3],M=_[4],y=[];for(let B=0,C=v.length;B<C;B++){const U=v[B],D=x[B],N=b[B],T=w[B],L=M[B];if(U===void 0)continue;U.updateMatrix&&U.updateMatrix();const k=a._createAnimationTracks(U,D,N,T,L);if(k)for(let G=0;G<k.length;G++)y.push(k[G])}const P=new TE(c,void 0,y);return $i(P,o),P})}createNodeMesh(e){const n=this.json,a=this,o=n.nodes[e];return o.mesh===void 0?null:a.getDependency("mesh",o.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,o.mesh,c);return o.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=o.weights.length;p<d;p++)h.morphTargetInfluences[p]=o.weights[p]}),u})}loadNode(e){const n=this.json,a=this,o=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=o.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=o.skin===void 0?Promise.resolve(null):a.getDependency("skin",o.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,TC)});for(let x=0,b=_.length;x<b;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,b=_[0];g.pivot=new J().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],b.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?o.createUniqueName(c.name):"",h=[],p=o._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(o.getDependency("camera",c.camera).then(function(d){return o._getNodeRef(o.cameraCache,c.camera,d)})),o._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let g;if(c.isBone===!0?g=new Yx:d.length>1?g=new Fa:d.length===1?g=d[0]:g=new sn,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(c.name&&(g.userData.name=c.name,g.name=u),$i(g,c),c.extensions&&$s(a,g,c),c.matrix!==void 0){const _=new ht;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!o.associations.has(g))o.associations.set(g,{});else if(c.mesh!==void 0&&o.meshCache.refs[c.mesh]>1){const _=o.associations.get(g);o.associations.set(g,{..._})}return o.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],o=this,c=new Fa;a.name&&(c.name=o.createUniqueName(a.name)),$i(c,a),a.extensions&&$s(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(o.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++){const v=p[g];v.parent!==null?c.add(Yw(v)):c.add(v)}const d=g=>{const _=new Map;for(const[v,x]of o.associations)(v instanceof Vi||v instanceof Ln)&&_.set(v,x);return g.traverse(v=>{const x=o.associations.get(v);x!=null&&_.set(v,x)}),_};return o.associations=d(c),c})}_createAnimationTracks(e,n,a,o,c){const u=[],h=e.name?e.name:e.uuid,p=[];function d(x){x.morphTargetInfluences&&p.push(x.name?x.name:x.uuid)}As[c.path]===As.weights?(d(e),e.isGroup&&e.children.forEach(d)):p.push(h);let g;switch(As[c.path]){case As.weights:g=Ul;break;case As.rotation:g=Ol;break;case As.translation:case As.scale:g=Fu;break;default:switch(a.itemSize){case 1:g=Ul;break;case 2:case 3:default:g=Fu;break}break}const _=o.interpolation!==void 0?xC[o.interpolation]:Dl,v=this._getArrayFromAccessor(a);for(let x=0,b=p.length;x<b;x++){const w=new g(p[x]+"."+As[c.path],n.array,v,_);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(w),u.push(w)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Ip(n.constructor),o=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)o[c]=n[c]*a;n=o}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const o=this instanceof Ol?vC:hy;return new o(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RC(r,e,n){const a=e.attributes,o=new la;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(o.set(new J(p[0],p[1],p[2]),new J(d[0],d[1],d[2])),h.normalized){const g=Ip(so[h.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new J,p=new J;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],x=v.min,b=v.max;if(x!==void 0&&b!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(b[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(b[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(b[2]))),v.normalized){const w=Ip(so[v.componentType]);p.multiplyScalar(w)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(h)}r.boundingBox=o;const u=new ca;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,r.boundingSphere=u}function bx(r,e,n){const a=e.attributes,o=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){r.setAttribute(h,p)})}for(const u in a){const h=Pp[u]||u.toLowerCase();h in r.attributes||o.push(c(a[u],h))}if(e.indices!==void 0&&!r.index){const u=n.getDependency("accessor",e.indices).then(function(h){r.setIndex(h)});o.push(u)}return yt.workingColorSpace!==_i&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),$i(r,e),RC(r,e,n),Promise.all(o).then(function(){return e.targets!==void 0?SC(r,e.targets,n):r})}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dy=(...r)=>r.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=Vt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...h},p)=>Vt.createElement("svg",{ref:p,...CC,width:e,height:e,stroke:r,strokeWidth:a?Number(n)*24/Number(e):n,className:dy("lucide",o),...h},[...u.map(([d,g])=>Vt.createElement(d,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=(r,e)=>{const n=Vt.forwardRef(({className:a,...o},c)=>Vt.createElement(DC,{ref:c,iconNode:e,className:dy(`lucide-${wC(r)}`,a),...o}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],py=fa("ArrowRight",NC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],UC=fa("Bot",LC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],my=fa("Building2",OC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],IC=fa("Database",PC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]],FC=fa("DraftingCompass",BC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Ex=fa("Leaf",zC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],om=fa("Mail",HC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],gy=fa("MoveUpRight",GC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],kC=fa("Phone",VC);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],WC=fa("X",XC);function qC(r){if(typeof window>"u"||typeof document>"u")return!1;const e=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),n=/Firefox/.test(navigator.userAgent);if(e||n)return!1;const a=document.createElement("div");return a.style.backdropFilter=`url(#${r})`,a.style.backdropFilter!==""}function ra({as:r="div",children:e,width:n="auto",height:a="auto",borderRadius:o=20,borderWidth:c=.07,brightness:u=50,opacity:h=.93,blur:p=11,displace:d=0,backgroundOpacity:g=0,saturation:_=1,distortionScale:v=-180,redOffset:x=0,greenOffset:b=10,blueOffset:w=20,xChannel:M="R",yChannel:y="G",mixBlendMode:P="difference",className:B="",style:C={},...U}){const D=Vt.useId().replace(/:/g,"-"),N=`glass-filter-${D}`,T=`red-grad-${D}`,L=`blue-grad-${D}`,[k,G]=Vt.useState(!1),K=Vt.useRef(null),le=Vt.useRef(null),ue=Vt.useRef(null),j=Vt.useRef(null),F=Vt.useRef(null),H=Vt.useRef(null),$=()=>{var Me;const W=(Me=K.current)==null?void 0:Me.getBoundingClientRect(),ye=(W==null?void 0:W.width)||400,Te=(W==null?void 0:W.height)||200,Ne=Math.min(ye,Te)*(c*.5),ae=`
      <svg viewBox="0 0 ${ye} ${Te}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${T}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${L}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${ye}" height="${Te}" fill="black"></rect>
        <rect x="0" y="0" width="${ye}" height="${Te}" rx="${o}" fill="url(#${T})" />
        <rect x="0" y="0" width="${ye}" height="${Te}" rx="${o}" fill="url(#${L})" style="mix-blend-mode: ${P}" />
        <rect x="${Ne}" y="${Ne}" width="${ye-Ne*2}" height="${Te-Ne*2}" rx="${o}" fill="hsl(0 0% ${u}% / ${h})" style="filter:blur(${p}px)" />
      </svg>
    `;return`data:image/svg+xml,${encodeURIComponent(ae)}`},ge=()=>{var W;(W=le.current)==null||W.setAttribute("href",$())};Vt.useEffect(()=>{var W;ge(),[{ref:ue,offset:x},{ref:j,offset:b},{ref:F,offset:w}].forEach(({ref:ye,offset:Te})=>{ye.current&&(ye.current.setAttribute("scale",(v+Te).toString()),ye.current.setAttribute("xChannelSelector",M),ye.current.setAttribute("yChannelSelector",y))}),(W=H.current)==null||W.setAttribute("stdDeviation",d.toString())},[n,a,o,c,u,h,p,d,v,x,b,w,M,y,P]),Vt.useEffect(()=>{G(qC(N))},[N]),Vt.useEffect(()=>{if(!K.current||typeof ResizeObserver>"u")return;const W=new ResizeObserver(()=>{window.requestAnimationFrame(ge)});return W.observe(K.current),()=>{W.disconnect()}},[]);const ve={...C,width:typeof n=="number"?`${n}px`:n,height:typeof a=="number"?`${a}px`:a,borderRadius:`${o}px`,"--glass-frost":g,"--glass-saturation":_,"--filter-id":`url(#${N})`},I=r==="button"&&!U.type?{type:"button"}:{};return pe.jsxs(r,{ref:K,className:`glass-surface ${k?"glass-surface--svg":"glass-surface--fallback"} ${B}`,style:ve,...I,...U,children:[pe.jsx("svg",{className:"glass-surface__filter",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:pe.jsx("defs",{children:pe.jsxs("filter",{id:N,colorInterpolationFilters:"sRGB",x:"0%",y:"0%",width:"100%",height:"100%",children:[pe.jsx("feImage",{ref:le,x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"map"}),pe.jsx("feDisplacementMap",{ref:ue,in:"SourceGraphic",in2:"map",result:"dispRed"}),pe.jsx("feColorMatrix",{in:"dispRed",type:"matrix",values:`1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,result:"red"}),pe.jsx("feDisplacementMap",{ref:j,in:"SourceGraphic",in2:"map",result:"dispGreen"}),pe.jsx("feColorMatrix",{in:"dispGreen",type:"matrix",values:`0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,result:"green"}),pe.jsx("feDisplacementMap",{ref:F,in:"SourceGraphic",in2:"map",result:"dispBlue"}),pe.jsx("feColorMatrix",{in:"dispBlue",type:"matrix",values:`0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0`,result:"blue"}),pe.jsx("feBlend",{in:"red",in2:"green",mode:"screen",result:"rg"}),pe.jsx("feBlend",{in:"rg",in2:"blue",mode:"screen",result:"output"}),pe.jsx("feGaussianBlur",{ref:H,in:"output",stdDeviation:"0.7"})]})})}),pe.jsx("span",{className:"glass-surface__content",children:e})]})}const _y=[{label:"Home",href:"#home"},{label:"Profile",href:"#profile"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Capabilities",href:"#strengths"},{label:"Contact",href:"#contact"}],Tx=r=>`./${r.replace(/^\/+/,"")}`;function YC(r){const e=document.querySelector(r);return e?r==="#home"?0:Math.max(0,e.getBoundingClientRect().top+window.scrollY-118):null}function zu(r,e,n){if(!document.querySelector(e)){n==null||n();return}r.preventDefault(),n==null||n(),window.requestAnimationFrame(()=>{var u;const o=YC(e);if(o===null)return;const c=(u=window.matchMedia)==null?void 0:u.call(window,"(prefers-reduced-motion: reduce)").matches;window.history.pushState(null,"",e),window.scrollTo({top:o,behavior:c?"auto":"smooth"})})}const KC=[{value:"2027",label:"BEng (Hons) Environmental Engineering and Sustainable Development"},{value:"2,000+",label:"retail records processed for BYO Cup campaign analysis"},{value:"3",label:"internship contexts across construction, WWF-HK, and monitoring work"},{value:"3",label:"languages: Mandarin, English, and Cantonese"}],ZC=[{time:"07/2025 - 08/2025",role:"China Construction Installation Engineering - Intern",details:["Utilized Revit (BIM) to support green building work and sustainability assessments.","Performed site inspections on subway, hospital, and water plant projects, evaluating low-carbon construction and ESG practices.","Researched water recycling technologies in sewage treatment, assessing environmental benefits and energy-efficiency improvements."]},{time:"05/2025 - 06/2025",role:"WWF-Hong Kong - Green City Initiative Project Intern",details:["Applied point cloud 3D scanning and modeling to simulate rooftop renovation of cage homes in Sham Shui Po.","Conducted feasibility studies on solar energy integration to support sustainable development decisions.","Built a Python-based data analysis system to process retail data with more than 2,000 entries from bubble tea shops for the BYO Cup campaign.","Co-authored sustainability research reports aligned with WWF-HK conservation objectives."]},{time:"07/2021",role:"Shenzhen Guochen Environmental Protection Technology Co., Ltd. - Intern",details:["Assisted in the full water quality monitoring cycle, including sampling, on-site testing, data recording, and analysis.","Drafted environmental monitoring reports and suggested optimization strategies.","Contributed to project implementation planning, strengthening technical skills and environmental awareness."]}],jC=[{time:"09/2025 - 06/2026",role:"College of Undergraduate Studies (CUS), PolyU - Part-time Student Assistant",details:["Assisted in organizing and promoting student activities.","Supported research on family and youth development through data collection, entry, and preliminary report drafting.","Contributed to project deliverables that informed faculty-led initiatives on student engagement."]}],QC=[{title:"Green Charge Initiative Project",type:"Campus sustainability project",summary:"A campus green charging proposal that connects solar energy output, charging demand, site selection, maintenance planning, and student participation.",details:["Developed the project website using HTML and Python to provide information on green charging solutions.","Wrote a technical report analyzing campus solar panel energy output and charging demand to assess feasibility.","Coordinated with campus management on charging station site selection, considering renewable energy resources and user convenience.","Developed a maintenance plan and assessed usage and energy consumption.","Proposed shared power bank charging stations and a Green Coin payment system to encourage student participation in sustainable practices."],tags:["Solar energy","Charging demand","Green Coin"]}],JC=[{icon:FC,title:"Engineering-First Thinking",copy:"I start from constraints, evidence, feasibility, and system boundaries before proposing environmental solutions."},{icon:Ex,title:"Sustainable Development",copy:"My studies cover sustainable development strategy, environmental management systems, impact assessment, pollution studies, and environmental control."},{icon:IC,title:"Environmental Data Work",copy:"I can support environmental research through data collection, Python processing, data entry, reporting, and preliminary analysis."},{icon:my,title:"Built Environment Exposure",copy:"I have internship exposure to BIM, green building assessment, low-carbon construction, site inspections, and ESG practice evaluation."},{icon:UC,title:"Water and Wastewater",copy:"My coursework and internship work include water supply, sewerage, wastewater treatment, water quality monitoring, and water recycling research."},{icon:Ex,title:"Project Coordination",copy:"I can coordinate with project teams, campus stakeholders, and research groups while keeping sustainability objectives clear and practical."}];function $C(){const r=Vt.useRef(null),e=Vt.useRef(null),n=Vt.useRef(null),a=Vt.useRef(0),o=Vt.useRef(0);return Vt.useEffect(()=>{const c=()=>{const u=Math.max(1,document.documentElement.scrollHeight-window.innerHeight),h=Math.min(1,Math.max(0,window.scrollY/u));o.current=h};return c(),window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",c),()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}},[]),Vt.useEffect(()=>{const c=n.current;if(!c)return;const u=new Wb,h=new Wn(34,1,.1,100);h.position.set(0,0,4.2);const p=new qw({alpha:!0,antialias:!0,powerPreference:"high-performance"});p.setClearColor(0,0),p.outputColorSpace=Tn,p.toneMapping=Hp,p.toneMappingExposure=1.12,p.domElement.className="earth-webgl-canvas",c.appendChild(p.domElement);const d=new Fa;u.add(d);const g=new Fa;d.add(g);const _=new Bu(1.022,96,96),v=new mE({color:15923455,transparent:!0,opacity:.05,depthWrite:!1,alphaTest:.18}),x=new Kn(_,v);x.visible=!1,x.renderOrder=2,d.add(x);const b=new Bu(1.038,96,96),w=new ki({uniforms:{glowColor:{value:new nt(8379647)}},vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        varying vec3 vNormal;
        void main() {
          float rim = pow(0.66 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(glowColor, clamp(rim, 0.0, 0.24));
        }
      `,side:qn,transparent:!0,blending:kd,depthWrite:!1}),M=new Kn(b,w);u.add(M),u.add(new UE(8376319,132102,.48));const y=new Ru(16777215,4.25);y.position.set(-3.6,1.7,4.9),u.add(y);const P=new Ru(3112630,.34);P.position.set(2.8,.4,1.3),u.add(P);const B=new Ru(7855103,2.05);B.position.set(3.6,-.8,2.1),u.add(B);const C=new Kw;let U=!1,D=null;const N=new Set,T=new Set;C.loadAsync(Tx("assets/nasa-earth.glb")).then(le=>{if(U)return;D=le.scene;const ue=new la().setFromObject(D),j=ue.getCenter(new J),F=ue.getSize(new J),H=2/Math.max(F.x,F.y,F.z);D.position.sub(j),D.scale.setScalar(H),D.rotation.set(0,Math.PI*.56,0),D.traverse($=>{if(!$.isMesh)return;N.add($.geometry),(Array.isArray($.material)?$.material:[$.material]).forEach(ve=>{ve&&(T.add(ve),ve.depthWrite=!0,ve.depthTest=!0,ve.toneMapped=!0,ve.map&&(ve.map.colorSpace=Tn,ve.map.anisotropy=Math.min(16,p.capabilities.getMaxAnisotropy())),"roughness"in ve&&(ve.roughness=.7),"metalness"in ve&&(ve.metalness=0),"envMapIntensity"in ve&&(ve.envMapIntensity=.28),ve.needsUpdate=!0)})}),g.add(D)}).catch(()=>{});const L=()=>{const le=Math.max(1,c.clientWidth),ue=Math.max(1,c.clientHeight);p.setPixelRatio(Math.min((window.devicePixelRatio||1)*1.35,2.5)),p.setSize(le,ue,!1),h.aspect=le/ue,h.updateProjectionMatrix()},k=new ResizeObserver(L);k.observe(c),L();let G=0;const K=()=>{var j;const le=o.current;a.current+=(le-a.current)*.085,Math.abs(le-a.current)<5e-4&&(a.current=le);const ue=a.current;(j=r.current)==null||j.style.setProperty("--earth-progress",ue.toFixed(5)),d.rotation.x=.34+ue*.32,d.rotation.y=-.5+ue*4.45,d.rotation.z=.03+ue*.22,x.rotation.y=-ue*.22,x.rotation.x=ue*.025,M.rotation.copy(d.rotation),M.rotation.y*=.74,p.render(u,h),G=window.requestAnimationFrame(K)};return K(),()=>{U=!0,window.cancelAnimationFrame(G),k.disconnect(),c.removeChild(p.domElement),D&&g.remove(D),N.forEach(le=>le.dispose()),T.forEach(le=>{Object.values(le).forEach(ue=>{ue!=null&&ue.isTexture&&ue.dispose()}),le.dispose()}),_.dispose(),v.dispose(),b.dispose(),w.dispose(),p.dispose()}},[]),Vt.useEffect(()=>{const c=e.current,u=c==null?void 0:c.getContext("2d");if(!c||!u)return;const h=Array.from({length:110},(_,v)=>({angle:v/110*Math.PI*2+Math.sin(v*3.7)*.08,offset:Math.sin(v*12.9898)*.5+.5,speed:.24+v*17%23/120,size:.35+v*31%5*.16}));let p=0,d=0;const g=()=>{const _=window.devicePixelRatio||1,v=window.innerWidth,x=window.innerHeight;(c.width!==Math.round(v*_)||c.height!==Math.round(x*_))&&(c.width=Math.round(v*_),c.height=Math.round(x*_),c.style.width=`${v}px`,c.style.height=`${x}px`,u.setTransform(_,0,0,_,0,0));const b=a.current,y=(Math.min(v*.6,x*.74,780)+v*b*1.5)*.52,P=v*(.7-b*.22),B=x*(.54+b*.2),C=b*-.72+d*.012;u.clearRect(0,0,v,x),h.forEach((U,D)=>{const N=Math.sin(d*U.speed+U.offset*8)*.01,T=U.angle+N+C,L=y+Math.sin(d*.5+D)*10,k=P+Math.cos(T)*L,G=B+Math.sin(T)*L;if(k<-40||k>v+40||G<-40||G>x+40)return;const K=.08+b*.2+Math.sin(d+D)*.04;u.beginPath(),u.fillStyle=`rgba(205, 235, 255, ${Math.max(.06,K)})`,u.arc(k,G,U.size,0,Math.PI*2),u.fill(),D%11===0&&(u.beginPath(),u.strokeStyle=`rgba(104, 183, 236, ${.018+b*.07})`,u.moveTo(k,G),u.lineTo(P+Math.cos(T+.01)*(L-Math.max(44,y*.045)),B+Math.sin(T+.01)*(L-Math.max(44,y*.045))),u.stroke())}),d+=.009,p=window.requestAnimationFrame(g)};return g(),()=>{window.cancelAnimationFrame(p)}},[]),pe.jsxs("div",{ref:r,className:"earth-backdrop","aria-hidden":"true",children:[pe.jsx("img",{className:"earth-space-layer",src:Tx("assets/near-earth-space.png"),alt:""}),pe.jsx("div",{ref:n,className:"earth-webgl"}),pe.jsx("canvas",{ref:e,className:"earth-particles"})]})}function e2({activeSection:r,onNavigate:e}){return pe.jsxs("header",{className:"site-header","aria-label":"Primary navigation",children:[pe.jsx(ra,{as:"a",className:`brand-mark ${r==="home"?"is-active":""}`,href:"#home","aria-label":"Back to home",width:56,height:56,borderRadius:18,backgroundOpacity:.02,saturation:1.8,distortionScale:-150,onClick:n=>zu(n,"#home",e),children:pe.jsx("span",{children:"JZ"})}),pe.jsx("nav",{children:_y.map(n=>pe.jsx(ra,{as:"a",className:`nav-link ${r===n.href.slice(1)?"is-active":""}`,href:n.href,width:100,height:44,borderRadius:16,backgroundOpacity:.018,saturation:1.9,distortionScale:-155,redOffset:4,greenOffset:14,blueOffset:26,"aria-current":r===n.href.slice(1)?"page":void 0,onClick:a=>zu(a,n.href,e),children:n.label},n.href))}),pe.jsxs(ra,{as:"a",className:"header-cta",href:"mailto:james.jiang2004@hotmail.com",height:50,borderRadius:18,backgroundOpacity:.025,saturation:1.85,distortionScale:-150,onClick:e,children:[pe.jsx(om,{size:16,"aria-hidden":"true"}),"Contact"]})]})}function t2(){return pe.jsx("section",{className:"hero-section",id:"home",children:pe.jsxs("div",{className:"hero-inner",children:[pe.jsxs("div",{className:"hero-copy",children:[pe.jsx("h1",{children:"JIANG ZHIJIAN"}),pe.jsx("p",{className:"hero-role",children:"Sustainable Development / Environmental Engineering"}),pe.jsx("p",{className:"hero-text",children:"I focus on sustainable development and environmental engineering problems through field evidence, technical research, data work, and practical feasibility thinking."}),pe.jsxs("div",{className:"hero-actions","aria-label":"Portfolio actions",children:[pe.jsxs(ra,{as:"a",className:"primary-button",href:"mailto:james.jiang2004@hotmail.com",height:52,children:[pe.jsx(om,{size:18,"aria-hidden":"true"}),"james.jiang2004@hotmail.com"]}),pe.jsxs(ra,{as:"a",className:"secondary-button",href:"#projects",height:52,onClick:r=>zu(r,"#projects"),children:["View project work",pe.jsx(py,{size:18,"aria-hidden":"true"})]})]})]}),pe.jsxs("div",{className:"hero-index","aria-label":"Portfolio signal",children:[pe.jsx("span",{children:"Engineering Lens"}),pe.jsx("strong",{children:"Systems thinking for low-carbon construction, water systems, solar feasibility, and environmental research."})]})]})})}function n2(){return pe.jsxs("section",{className:"section profile-section",id:"profile",children:[pe.jsxs("div",{className:"profile-copy",children:[pe.jsx("p",{className:"section-label",children:"PROFILE"}),pe.jsx("h2",{children:"Sustainable development grounded in environmental engineering."}),pe.jsx("p",{children:"I am James Jiang, currently studying Bachelor of Engineering (Honours) in Environmental Engineering and Sustainable Development at The Hong Kong Polytechnic University."}),pe.jsx("p",{children:"My academic and practical focus covers sustainable development strategy, air and noise pollution studies, environmental chemistry, fluid mechanics, water supply and sewerage, water and wastewater treatment, environmental management systems, and environmental impact assessment."})]}),pe.jsx("div",{className:"stats-grid",children:KC.map(r=>pe.jsxs("div",{className:"stat-card",children:[pe.jsx("strong",{children:r.value}),pe.jsx("span",{children:r.label})]},r.label))})]})}function i2(){const r=[{label:"INTERNSHIP EXPERIENCE",items:ZC},{label:"WORK EXPERIENCE",items:jC}];return pe.jsxs("section",{className:"section experience-section",id:"experience",children:[pe.jsxs("div",{className:"section-heading narrow",children:[pe.jsx("p",{className:"section-label",children:"EXPERIENCE"}),pe.jsx("h2",{children:"Sustainability and environmental engineering experience."})]}),r.map(e=>pe.jsxs("div",{className:"experience-group",children:[pe.jsx("h3",{className:"experience-group-title",children:e.label}),pe.jsx("div",{className:"experience-rail",children:e.items.map(n=>pe.jsxs("article",{className:"experience-item",children:[pe.jsx("span",{children:n.time}),pe.jsxs("div",{children:[pe.jsx("h4",{children:n.role}),pe.jsx("ul",{children:n.details.map(a=>pe.jsx("li",{children:a},a))})]})]},n.role))})]},e.label))]})}function a2({onSelectProject:r}){return pe.jsxs("section",{className:"section projects-section",id:"projects",children:[pe.jsxs("div",{className:"section-heading",children:[pe.jsx("p",{className:"section-label",children:"SELECTED PROJECTS"}),pe.jsx("h2",{children:"Project experience in sustainable development."}),pe.jsx("p",{children:"This section keeps project work separate from internship and work experience. The current project is listed according to the Project Experience section of my CV."})]}),pe.jsx("div",{className:"project-grid",children:QC.map((e,n)=>pe.jsx("button",{className:"project-card",type:"button",onClick:()=>r(e),"aria-label":`Open details for ${e.title}`,children:pe.jsxs("div",{className:"project-content",children:[pe.jsx("span",{className:"project-number",children:String(n+1).padStart(2,"0")}),pe.jsx("p",{children:e.type}),pe.jsx("h3",{children:e.title}),pe.jsx("span",{className:"project-summary",children:e.summary}),pe.jsxs("span",{className:"project-more",children:["Open details",pe.jsx(gy,{size:16,"aria-hidden":"true"})]}),pe.jsx("div",{className:"tag-row",children:e.tags.map(a=>pe.jsx("small",{children:a},a))})]})},e.title))})]})}function s2(){return pe.jsxs("section",{className:"section strengths-section",id:"strengths",children:[pe.jsxs("div",{className:"section-heading narrow",children:[pe.jsx("p",{className:"section-label",children:"CAPABILITIES"}),pe.jsx("h2",{children:"How I approach sustainable development problems."})]}),pe.jsx("div",{className:"strength-grid",children:JC.map(({icon:r,title:e,copy:n})=>pe.jsxs("article",{className:"strength-card",children:[pe.jsx(r,{size:24,"aria-hidden":"true"}),pe.jsx("h3",{children:e}),pe.jsx("p",{children:n})]},e))})]})}function r2({project:r,onClose:e}){return Vt.useEffect(()=>{if(!r)return;const n=a=>{a.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[r,e]),r?pe.jsx("div",{className:"project-modal-layer",role:"presentation",onMouseDown:e,children:pe.jsx("section",{className:"project-modal project-modal-text",role:"dialog","aria-modal":"true","aria-labelledby":"project-modal-title",onMouseDown:n=>n.stopPropagation(),children:pe.jsxs("div",{className:"project-modal-content",children:[pe.jsx(ra,{as:"button",className:"modal-close","aria-label":"Close project details",width:44,height:44,borderRadius:16,backgroundOpacity:.018,saturation:1.8,onClick:e,children:pe.jsx(WC,{size:18,"aria-hidden":"true"})}),pe.jsx("p",{className:"section-label",children:r.type}),pe.jsx("h2",{id:"project-modal-title",children:r.title}),pe.jsx("p",{children:r.summary}),pe.jsx("ul",{children:r.details.map(n=>pe.jsx("li",{children:n},n))}),pe.jsx("div",{className:"tag-row modal-tags",children:r.tags.map(n=>pe.jsx("small",{children:n},n))}),pe.jsxs(ra,{as:"a",className:"secondary-button modal-mail",href:"mailto:james.jiang2004@hotmail.com",height:50,children:["Discuss this project",pe.jsx(py,{size:17,"aria-hidden":"true"})]})]})})}):null}function o2(){return pe.jsxs("footer",{className:"contact-footer",id:"contact",children:[pe.jsxs("div",{className:"footer-inner",children:[pe.jsx("p",{className:"section-label",children:"CONTACT"}),pe.jsx("h2",{children:"Let's work on sustainable systems."}),pe.jsxs("div",{className:"footer-actions",children:[pe.jsxs(ra,{as:"a",className:"primary-button",href:"mailto:james.jiang2004@hotmail.com",height:52,children:[pe.jsx(om,{size:18,"aria-hidden":"true"}),"Email me"]}),pe.jsxs(ra,{as:"a",className:"secondary-button",href:"tel:+85264006720",height:52,children:[pe.jsx(kC,{size:18,"aria-hidden":"true"}),"Call"]})]}),pe.jsxs("div",{className:"footer-meta",children:[pe.jsx("span",{children:"Hong Kong / Shenzhen"}),pe.jsx("span",{children:"Environmental Engineering / Sustainable Development"}),pe.jsx(ra,{as:"a",className:"footer-top-button",href:"#home","aria-label":"Back to top",width:48,height:48,onClick:r=>zu(r,"#home"),children:pe.jsx(gy,{size:18,"aria-hidden":"true"})})]})]}),pe.jsx(my,{className:"footer-icon",size:260,"aria-hidden":"true"})]})}function l2(){const[r,e]=Vt.useState(null),[n,a]=Vt.useState("home"),o=()=>e(null);return Vt.useEffect(()=>{const c=_y.map(d=>d.href.slice(1));let u=!1;const h=()=>{const d=window.scrollY+Math.min(window.innerHeight*.38,360),g=c.reduce((_,v)=>{const x=document.getElementById(v);return x&&x.getBoundingClientRect().top+window.scrollY<=d?v:_},"home");a(_=>_===g?_:g),u=!1},p=()=>{u||(u=!0,window.requestAnimationFrame(h))};return h(),window.setTimeout(h,80),window.setTimeout(h,420),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),window.addEventListener("hashchange",p),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p),window.removeEventListener("hashchange",p)}},[]),pe.jsxs(pe.Fragment,{children:[pe.jsx($C,{}),pe.jsx(e2,{activeSection:n,onNavigate:o}),pe.jsxs("main",{children:[pe.jsx(t2,{}),pe.jsx(n2,{}),pe.jsx(i2,{}),pe.jsx(a2,{onSelectProject:e}),pe.jsx(s2,{}),pe.jsx(o2,{})]}),pe.jsx(r2,{project:r,onClose:o})]})}CM.createRoot(document.getElementById("root")).render(pe.jsx(Vt.StrictMode,{children:pe.jsx(l2,{})}));
