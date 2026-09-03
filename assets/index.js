(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Kb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sh={exports:{}},yl={};var n_;function Qb(){if(n_)return yl;n_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return yl.Fragment=e,yl.jsx=n,yl.jsxs=n,yl}var i_;function Jb(){return i_||(i_=1,sh.exports=Qb()),sh.exports}var I=Jb(),rh={exports:{}},gt={};var a_;function $b(){if(a_)return gt;a_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=g&&E[g]||E["@@iterator"],typeof E=="function"?E:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function S(E,H,ie){this.props=E,this.context=H,this.refs=y,this.updater=ie||x}S.prototype.isReactComponent={},S.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},S.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function R(){}R.prototype=S.prototype;function U(E,H,ie){this.props=E,this.context=H,this.refs=y,this.updater=ie||x}var C=U.prototype=new R;C.constructor=U,A(C,S.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(E,H,ie){var xe=ie.ref;return{$$typeof:r,type:E,key:H,ref:xe!==void 0?xe:null,props:ie}}function Y(E,H){return O(E.type,H,E.props)}function V(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function X(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ie){return H[ie]})}var le=/\/+/g;function ae(E,H){return typeof E=="object"&&E!==null&&E.key!=null?X(""+E.key):H.toString(36)}function Q(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(N,N):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function B(E,H,ie,xe,Ee){var K=typeof E;(K==="undefined"||K==="boolean")&&(E=null);var se=!1;if(E===null)se=!0;else switch(K){case"bigint":case"string":case"number":se=!0;break;case"object":switch(E.$$typeof){case r:case e:se=!0;break;case _:return se=E._init,B(se(E._payload),H,ie,xe,Ee)}}if(se)return Ee=Ee(E),se=xe===""?"."+ae(E,0):xe,P(Ee)?(ie="",se!=null&&(ie=se.replace(le,"$&/")+"/"),B(Ee,H,ie,"",function(ke){return ke})):Ee!=null&&(V(Ee)&&(Ee=Y(Ee,ie+(Ee.key==null||E&&E.key===Ee.key?"":(""+Ee.key).replace(le,"$&/")+"/")+se)),H.push(Ee)),1;se=0;var me=xe===""?".":xe+":";if(P(E))for(var Ce=0;Ce<E.length;Ce++)xe=E[Ce],K=me+ae(xe,Ce),se+=B(xe,H,ie,K,Ee);else if(Ce=M(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(xe=E.next()).done;)xe=xe.value,K=me+ae(xe,Ce++),se+=B(xe,H,ie,K,Ee);else if(K==="object"){if(typeof E.then=="function")return B(Q(E),H,ie,xe,Ee);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return se}function q(E,H,ie){if(E==null)return E;var xe=[],Ee=0;return B(E,xe,"","",function(K){return H.call(ie,K,Ee++)}),xe}function ee(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(ie){(E._status===0||E._status===-1)&&(E._status=1,E._result=ie)},function(ie){(E._status===0||E._status===-1)&&(E._status=2,E._result=ie)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var re=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},G={map:q,forEach:function(E,H,ie){q(E,function(){H.apply(this,arguments)},ie)},count:function(E){var H=0;return q(E,function(){H++}),H},toArray:function(E){return q(E,function(H){return H})||[]},only:function(E){if(!V(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return gt.Activity=v,gt.Children=G,gt.Component=S,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=U,gt.StrictMode=a,gt.Suspense=m,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,gt.__COMPILER_RUNTIME={__proto__:null,c:function(E){return F.H.useMemoCache(E)}},gt.cache=function(E){return function(){return E.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(E,H,ie){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var xe=A({},E.props),Ee=E.key;if(H!=null)for(K in H.key!==void 0&&(Ee=""+H.key),H)!T.call(H,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&H.ref===void 0||(xe[K]=H[K]);var K=arguments.length-2;if(K===1)xe.children=ie;else if(1<K){for(var se=Array(K),me=0;me<K;me++)se[me]=arguments[me+2];xe.children=se}return O(E.type,Ee,xe)},gt.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},gt.createElement=function(E,H,ie){var xe,Ee={},K=null;if(H!=null)for(xe in H.key!==void 0&&(K=""+H.key),H)T.call(H,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Ee[xe]=H[xe]);var se=arguments.length-2;if(se===1)Ee.children=ie;else if(1<se){for(var me=Array(se),Ce=0;Ce<se;Ce++)me[Ce]=arguments[Ce+2];Ee.children=me}if(E&&E.defaultProps)for(xe in se=E.defaultProps,se)Ee[xe]===void 0&&(Ee[xe]=se[xe]);return O(E,K,Ee)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(E){return{$$typeof:d,render:E}},gt.isValidElement=V,gt.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:ee}},gt.memo=function(E,H){return{$$typeof:p,type:E,compare:H===void 0?null:H}},gt.startTransition=function(E){var H=F.T,ie={};F.T=ie;try{var xe=E(),Ee=F.S;Ee!==null&&Ee(ie,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(N,re)}catch(K){re(K)}finally{H!==null&&ie.types!==null&&(H.types=ie.types),F.T=H}},gt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},gt.use=function(E){return F.H.use(E)},gt.useActionState=function(E,H,ie){return F.H.useActionState(E,H,ie)},gt.useCallback=function(E,H){return F.H.useCallback(E,H)},gt.useContext=function(E){return F.H.useContext(E)},gt.useDebugValue=function(){},gt.useDeferredValue=function(E,H){return F.H.useDeferredValue(E,H)},gt.useEffect=function(E,H){return F.H.useEffect(E,H)},gt.useEffectEvent=function(E){return F.H.useEffectEvent(E)},gt.useId=function(){return F.H.useId()},gt.useImperativeHandle=function(E,H,ie){return F.H.useImperativeHandle(E,H,ie)},gt.useInsertionEffect=function(E,H){return F.H.useInsertionEffect(E,H)},gt.useLayoutEffect=function(E,H){return F.H.useLayoutEffect(E,H)},gt.useMemo=function(E,H){return F.H.useMemo(E,H)},gt.useOptimistic=function(E,H){return F.H.useOptimistic(E,H)},gt.useReducer=function(E,H,ie){return F.H.useReducer(E,H,ie)},gt.useRef=function(E){return F.H.useRef(E)},gt.useState=function(E){return F.H.useState(E)},gt.useSyncExternalStore=function(E,H,ie){return F.H.useSyncExternalStore(E,H,ie)},gt.useTransition=function(){return F.H.useTransition()},gt.version="19.2.6",gt}var s_;function jp(){return s_||(s_=1,rh.exports=$b()),rh.exports}var dt=jp();const Rv=Kb(dt);var oh={exports:{}},Sl={},lh={exports:{}},ch={};var r_;function e2(){return r_||(r_=1,(function(r){function e(B,q){var ee=B.length;B.push(q);e:for(;0<ee;){var re=ee-1>>>1,G=B[re];if(0<o(G,q))B[re]=q,B[ee]=G,ee=re;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var q=B[0],ee=B.pop();if(ee!==q){B[0]=ee;e:for(var re=0,G=B.length,E=G>>>1;re<E;){var H=2*(re+1)-1,ie=B[H],xe=H+1,Ee=B[xe];if(0>o(ie,ee))xe<G&&0>o(Ee,ie)?(B[re]=Ee,B[xe]=ee,re=xe):(B[re]=ie,B[H]=ee,re=H);else if(xe<G&&0>o(Ee,ee))B[re]=Ee,B[xe]=ee,re=xe;else break e}}return q}function o(B,q){var ee=B.sortIndex-q.sortIndex;return ee!==0?ee:B.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],_=1,v=null,g=3,M=!1,x=!1,A=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var q=n(p);q!==null;){if(q.callback===null)a(p);else if(q.startTime<=B)a(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=n(p)}}function P(B){if(A=!1,C(B),!x)if(n(m)!==null)x=!0,N||(N=!0,X());else{var q=n(p);q!==null&&Q(P,q.startTime-B)}}var N=!1,F=-1,T=5,O=-1;function Y(){return y?!0:!(r.unstable_now()-O<T)}function V(){if(y=!1,N){var B=r.unstable_now();O=B;var q=!0;try{e:{x=!1,A&&(A=!1,R(F),F=-1),M=!0;var ee=g;try{t:{for(C(B),v=n(m);v!==null&&!(v.expirationTime>B&&Y());){var re=v.callback;if(typeof re=="function"){v.callback=null,g=v.priorityLevel;var G=re(v.expirationTime<=B);if(B=r.unstable_now(),typeof G=="function"){v.callback=G,C(B),q=!0;break t}v===n(m)&&a(m),C(B)}else a(m);v=n(m)}if(v!==null)q=!0;else{var E=n(p);E!==null&&Q(P,E.startTime-B),q=!1}}break e}finally{v=null,g=ee,M=!1}q=void 0}}finally{q?X():N=!1}}}var X;if(typeof U=="function")X=function(){U(V)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ae=le.port2;le.port1.onmessage=V,X=function(){ae.postMessage(null)}}else X=function(){S(V,0)};function Q(B,q){F=S(function(){B(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var ee=g;g=q;try{return B()}finally{g=ee}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=g;g=B;try{return q()}finally{g=ee}},r.unstable_scheduleCallback=function(B,q,ee){var re=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?re+ee:re):ee=re,B){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ee+G,B={id:_++,callback:q,priorityLevel:B,startTime:ee,expirationTime:G,sortIndex:-1},ee>re?(B.sortIndex=ee,e(p,B),n(m)===null&&B===n(p)&&(A?(R(F),F=-1):A=!0,Q(P,ee-re))):(B.sortIndex=G,e(m,B),x||M||(x=!0,N||(N=!0,X()))),B},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(B){var q=g;return function(){var ee=g;g=q;try{return B.apply(this,arguments)}finally{g=ee}}}})(ch)),ch}var o_;function t2(){return o_||(o_=1,lh.exports=e2()),lh.exports}var uh={exports:{}},jn={};var l_;function n2(){if(l_)return jn;l_=1;var r=jp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,jn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},jn.flushSync=function(m){var p=u.T,_=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=_,a.d.f()}},jn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},jn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},jn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},jn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},jn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},jn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},jn.requestFormReset=function(m){a.d.r(m)},jn.unstable_batchedUpdates=function(m,p){return m(p)},jn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},jn.useFormStatus=function(){return u.H.useHostTransitionStatus()},jn.version="19.2.6",jn}var c_;function Lv(){if(c_)return uh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uh.exports=n2(),uh.exports}var u_;function i2(){if(u_)return Sl;u_=1;var r=t2(),e=jp(),n=Lv();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var b=!1,D=f.child;D;){if(D===s){b=!0,s=f,l=h;break}if(D===l){b=!0,l=f,s=h;break}D=D.sibling}if(!b){for(D=h.child;D;){if(D===s){b=!0,s=h,l=f;break}if(D===l){b=!0,l=h,s=f;break}D=D.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case U:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:ae(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return ae(t(i))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},re=[],G=-1;function E(t){return{current:t}}function H(t){0>G||(t.current=re[G],re[G]=null,G--)}function ie(t,i){G++,re[G]=t.current,t.current=i}var xe=E(null),Ee=E(null),K=E(null),se=E(null);function me(t,i){switch(ie(K,i),ie(Ee,t),ie(xe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Tx(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Tx(i),t=wx(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}H(xe),ie(xe,t)}function Ce(){H(xe),H(Ee),H(K)}function ke(t){t.memoizedState!==null&&ie(se,t);var i=xe.current,s=wx(i,t.type);i!==s&&(ie(Ee,t),ie(xe,s))}function Ne(t){Ee.current===t&&(H(xe),H(Ee)),se.current===t&&(H(se),gl._currentValue=ee)}var ut,nt;function Ve(t){if(ut===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ut=i&&i[1]||"",nt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+nt}var lt=!1;function we(t,i){if(!t||lt)return"";lt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(ge){var pe=ge}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(ge){pe=ge}t.call(Te.prototype)}}else{try{throw Error()}catch(ge){pe=ge}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(ge){if(ge&&pe&&typeof ge.stack=="string")return[ge.stack,pe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],D=h[1];if(b&&D){var W=b.split(`
`),ce=D.split(`
`);for(f=l=0;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ce.length&&!ce[f].includes("DetermineComponentFrameRoot");)f++;if(l===W.length||f===ce.length)for(l=W.length-1,f=ce.length-1;1<=l&&0<=f&&W[l]!==ce[f];)f--;for(;1<=l&&0<=f;l--,f--)if(W[l]!==ce[f]){if(l!==1||f!==1)do if(l--,f--,0>f||W[l]!==ce[f]){var Se=`
`+W[l].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=l&&0<=f);break}}}finally{lt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ve(s):""}function Ye(t,i){switch(t.tag){case 26:case 27:case 5:return Ve(t.type);case 16:return Ve("Lazy");case 13:return t.child!==i&&i!==null?Ve("Suspense Fallback"):Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 15:return we(t.type,!1);case 11:return we(t.type.render,!1);case 1:return we(t.type,!0);case 31:return Ve("Activity");default:return""}}function Qe(t){try{var i="",s=null;do i+=Ye(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qe=Object.prototype.hasOwnProperty,Lt=r.unstable_scheduleCallback,Nt=r.unstable_cancelCallback,nn=r.unstable_shouldYield,J=r.unstable_requestPaint,Ht=r.unstable_now,Ut=r.unstable_getCurrentPriorityLevel,z=r.unstable_ImmediatePriority,w=r.unstable_UserBlockingPriority,ne=r.unstable_NormalPriority,de=r.unstable_LowPriority,_e=r.unstable_IdlePriority,Re=r.log,Oe=r.unstable_setDisableYieldValue,ve=null,ye=null;function De(t){if(typeof Re=="function"&&Oe(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ve,t)}catch{}}var Xe=Math.clz32?Math.clz32:at,Fe=Math.log,Pe=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Fe(t)/Pe|0)|0}var st=256,mt=262144,Z=4194304;function Le(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~h,l!==0?f=Le(l):(b&=D,b!==0?f=Le(b):s||(s=D&~t,s!==0&&(f=Le(s))))):(D=l&~h,D!==0?f=Le(D):b!==0?f=Le(b):s||(s=l&~t,s!==0&&(f=Le(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ge(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function et(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ze(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hn(t,i,s,l,f,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,W=t.expirationTimes,ce=t.hiddenUpdates;for(s=b&~s;0<s;){var Se=31-Xe(s),Te=1<<Se;D[Se]=0,W[Se]=-1;var pe=ce[Se];if(pe!==null)for(ce[Se]=null,Se=0;Se<pe.length;Se++){var ge=pe[Se];ge!==null&&(ge.lane&=-536870913)}s&=~Te}l!==0&&Yt(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function Yt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Xe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function _i(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Xe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function vi(t,i){var s=i&-i;return s=(s&42)!==0?1:Lo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Lo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Do(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function No(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Zx(t.type))}function vr(t,i){var s=q.p;try{return q.p=t,i()}finally{q.p=s}}var ra=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ra,Hn="__reactProps$"+ra,li="__reactContainer$"+ra,Is="__reactEvents$"+ra,jl="__reactListeners$"+ra,Zl="__reactHandles$"+ra,Fs="__reactResources$"+ra,$a="__reactMarker$"+ra;function es(t){delete t[Mn],delete t[Hn],delete t[Is],delete t[jl],delete t[Zl]}function Sa(t){var i=t[Mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[li]||s[Mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Ux(t);t!==null;){if(s=t[Mn])return s;t=Ux(t)}return i}t=s,s=t.parentNode}return null}function Ma(t){if(t=t[Mn]||t[li]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Bs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ts(t){var i=t[Fs];return i||(i=t[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function bn(t){t[$a]=!0}var Kl=new Set,L={};function $(t,i){he(t,i),he(t+"Capture",i)}function he(t,i){for(L[t]=i,t=0;t<i.length;t++)Kl.add(i[t])}var ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fe={},ze={};function je(t){return qe.call(ze,t)?!0:qe.call(fe,t)?!1:ue.test(t)?ze[t]=!0:(fe[t]=!0,!1)}function Ie(t,i,s){if(je(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ke(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _t(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function It(t){if(!t._valueTracker){var i=_t(t)?"checked":"value";t._valueTracker=it(t,i,""+t[i])}}function pn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=_t(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function an(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xt=/[\n"\\]/g;function Wt(t){return t.replace(Xt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function We(t,i,s,l,f,h,b,D){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+rt(i)):t.value!==""+rt(i)&&(t.value=""+rt(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?bt(t,b,rt(i)):s!=null?bt(t,b,rt(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+rt(D):t.removeAttribute("name")}function qn(t,i,s,l,f,h,b,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){It(t);return}s=s!=null?""+rt(s):"",i=i!=null?""+rt(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),It(t)}function bt(t,i,s){i==="number"&&an(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Rn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+rt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function yi(t,i,s){if(i!=null&&(i=""+rt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+rt(s):""}function Xi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Q(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=rt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),It(t)}function Si(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||qt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Wi(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&mn(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&mn(t,h,i[h])}function kt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ns=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zs(t){return ns.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ba(){}var tf=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,Sr=null;function Em(t){var i=Ma(t);if(i&&(t=i.stateNode)){var s=t[Hn]||null;e:switch(t=i.stateNode,i.type){case"input":if(We(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Wt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Hn]||null;if(!f)throw Error(a(90));We(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&pn(l)}break e;case"textarea":yi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Rn(t,!!s.multiple,i,!1)}}}var af=!1;function Tm(t,i,s){if(af)return t(i,s);af=!0;try{var l=t(i);return l}finally{if(af=!1,(yr!==null||Sr!==null)&&(Fc(),yr&&(i=yr,t=Sr,Sr=yr=null,Em(i),t)))for(i=0;i<t.length;i++)Em(t[i])}}function Uo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Hn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=!1;if(Ea)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{sf=!1}var is=null,rf=null,Ql=null;function wm(){if(Ql)return Ql;var t,i=rf,s=i.length,l,f="value"in is?is.value:is.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[h-l];l++);return Ql=f.slice(t,1<l?1-l:void 0)}function Jl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Am(){return!1}function ci(t){function i(s,l,f,h,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?$l:Am,this.isPropagationStopped=Am,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=ci(Hs),Po=v({},Hs,{view:0,detail:0}),jS=ci(Po),of,lf,Io,tc=v({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(of=t.screenX-Io.screenX,lf=t.screenY-Io.screenY):lf=of=0,Io=t),of)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),Cm=ci(tc),ZS=v({},tc,{dataTransfer:0}),KS=ci(ZS),QS=v({},Po,{relatedTarget:0}),cf=ci(QS),JS=v({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=ci(JS),eM=v({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tM=ci(eM),nM=v({},Hs,{data:0}),Rm=ci(nM),iM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=sM[t])?!!i[t]:!1}function uf(){return rM}var oM=v({},Po,{key:function(t){if(t.key){var i=iM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lM=ci(oM),cM=v({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=ci(cM),uM=v({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),fM=ci(uM),dM=v({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hM=ci(dM),pM=v({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mM=ci(pM),gM=v({},Hs,{newState:0,oldState:0}),xM=ci(gM),_M=[9,13,27,32],ff=Ea&&"CompositionEvent"in window,Fo=null;Ea&&"documentMode"in document&&(Fo=document.documentMode);var vM=Ea&&"TextEvent"in window&&!Fo,Dm=Ea&&(!ff||Fo&&8<Fo&&11>=Fo),Nm=" ",Um=!1;function Om(t,i){switch(t){case"keyup":return _M.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function yM(t,i){switch(t){case"compositionend":return Pm(i);case"keypress":return i.which!==32?null:(Um=!0,Nm);case"textInput":return t=i.data,t===Nm&&Um?null:t;default:return null}}function SM(t,i){if(Mr)return t==="compositionend"||!ff&&Om(t,i)?(t=wm(),Ql=rf=is=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dm&&i.locale!=="ko"?null:i.data;default:return null}}var MM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!MM[t.type]:i==="textarea"}function Fm(t,i,s,l){yr?Sr?Sr.push(l):Sr=[l]:yr=l,i=Yc(i,"onChange"),0<i.length&&(s=new ec("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Bo=null,zo=null;function bM(t){vx(t,0)}function nc(t){var i=Bs(t);if(pn(i))return t}function Bm(t,i){if(t==="change")return i}var zm=!1;if(Ea){var df;if(Ea){var hf="oninput"in document;if(!hf){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),hf=typeof Hm.oninput=="function"}df=hf}else df=!1;zm=df&&(!document.documentMode||9<document.documentMode)}function Gm(){Bo&&(Bo.detachEvent("onpropertychange",km),zo=Bo=null)}function km(t){if(t.propertyName==="value"&&nc(zo)){var i=[];Fm(i,zo,t,nf(t)),Tm(bM,i)}}function EM(t,i,s){t==="focusin"?(Gm(),Bo=i,zo=s,Bo.attachEvent("onpropertychange",km)):t==="focusout"&&Gm()}function TM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(zo)}function wM(t,i){if(t==="click")return nc(i)}function AM(t,i){if(t==="input"||t==="change")return nc(i)}function CM(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Mi=typeof Object.is=="function"?Object.is:CM;function Ho(t,i){if(Mi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!qe.call(i,f)||!Mi(t[f],i[f]))return!1}return!0}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,i){var s=Vm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Vm(s)}}function Xm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=an(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=an(t.document)}return i}function pf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var RM=Ea&&"documentMode"in document&&11>=document.documentMode,br=null,mf=null,Go=null,gf=!1;function qm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gf||br==null||br!==an(l)||(l=br,"selectionStart"in l&&pf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=Yc(mf,"onSelect"),0<l.length&&(i=new ec("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=br)))}function Gs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Er={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionrun:Gs("Transition","TransitionRun"),transitionstart:Gs("Transition","TransitionStart"),transitioncancel:Gs("Transition","TransitionCancel"),transitionend:Gs("Transition","TransitionEnd")},xf={},jm={};Ea&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function ks(t){if(xf[t])return xf[t];if(!Er[t])return t;var i=Er[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in jm)return xf[t]=i[s];return t}var Zm=ks("animationend"),Km=ks("animationiteration"),Qm=ks("animationstart"),LM=ks("transitionrun"),DM=ks("transitionstart"),NM=ks("transitioncancel"),Jm=ks("transitionend"),$m=new Map,_f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_f.push("scrollEnd");function qi(t,i){$m.set(t,i),$(i,[t])}var ic=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Pi=[],Tr=0,vf=0;function ac(){for(var t=Tr,i=vf=Tr=0;i<t;){var s=Pi[i];Pi[i++]=null;var l=Pi[i];Pi[i++]=null;var f=Pi[i];Pi[i++]=null;var h=Pi[i];if(Pi[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&e0(s,f,h)}}function sc(t,i,s,l){Pi[Tr++]=t,Pi[Tr++]=i,Pi[Tr++]=s,Pi[Tr++]=l,vf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function yf(t,i,s,l){return sc(t,i,s,l),rc(t)}function Vs(t,i){return sc(t,null,null,i),rc(t)}function e0(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-Xe(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function rc(t){if(50<cl)throw cl=0,Rd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var wr={};function UM(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(t,i,s,l){return new UM(t,i,s,l)}function Sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ta(t,i){var s=t.alternate;return s===null?(s=bi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function t0(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function oc(t,i,s,l,f,h){var b=0;if(l=t,typeof t=="function")Sf(t)&&(b=1);else if(typeof t=="string")b=Bb(t,s,xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=bi(31,s,i,f),t.elementType=O,t.lanes=h,t;case A:return Ys(s.children,f,h,i);case y:b=8,f|=24;break;case S:return t=bi(12,s,i,f|2),t.elementType=S,t.lanes=h,t;case P:return t=bi(13,s,i,f),t.elementType=P,t.lanes=h,t;case N:return t=bi(19,s,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:b=10;break e;case R:b=9;break e;case C:b=11;break e;case F:b=14;break e;case T:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=bi(b,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Ys(t,i,s,l){return t=bi(7,t,l,i),t.lanes=s,t}function Mf(t,i,s){return t=bi(6,t,null,i),t.lanes=s,t}function n0(t){var i=bi(18,null,null,0);return i.stateNode=t,i}function bf(t,i,s){return i=bi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var i0=new WeakMap;function Ii(t,i){if(typeof t=="object"&&t!==null){var s=i0.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Qe(i)},i0.set(t,i),i)}return{value:t,source:i,stack:Qe(i)}}var Ar=[],Cr=0,lc=null,ko=0,Fi=[],Bi=0,as=null,la=1,ca="";function wa(t,i){Ar[Cr++]=ko,Ar[Cr++]=lc,lc=t,ko=i}function a0(t,i,s){Fi[Bi++]=la,Fi[Bi++]=ca,Fi[Bi++]=as,as=t;var l=la;t=ca;var f=32-Xe(l)-1;l&=~(1<<f),s+=1;var h=32-Xe(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,la=1<<32-Xe(i)+f|s<<f|l,ca=h+t}else la=1<<h|s<<f|l,ca=t}function Ef(t){t.return!==null&&(wa(t,1),a0(t,1,0))}function Tf(t){for(;t===lc;)lc=Ar[--Cr],Ar[Cr]=null,ko=Ar[--Cr],Ar[Cr]=null;for(;t===as;)as=Fi[--Bi],Fi[Bi]=null,ca=Fi[--Bi],Fi[Bi]=null,la=Fi[--Bi],Fi[Bi]=null}function s0(t,i){Fi[Bi++]=la,Fi[Bi++]=ca,Fi[Bi++]=as,la=i.id,ca=i.overflow,as=t}var Gn=null,un=null,Dt=!1,ss=null,zi=!1,wf=Error(a(519));function rs(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Ii(i,t)),wf}function r0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[Mn]=t,i[Hn]=l,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<fl.length;s++)Tt(fl[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),Xi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||bx(i.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),l.onScroll!=null&&Tt("scroll",i),l.onScrollEnd!=null&&Tt("scrollend",i),l.onClick!=null&&(i.onclick=ba),i=!0):i=!1,i||rs(t,!0)}function o0(t){for(Gn=t.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Gn=Gn.return}}function Rr(t){if(t!==Gn)return!1;if(!Dt)return o0(t),Dt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Yd(t.type,t.memoizedProps)),s=!s),s&&un&&rs(t),o0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));un=Nx(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));un=Nx(t)}else i===27?(i=un,ys(t.type)?(t=Zd,Zd=null,un=t):un=i):un=Gn?Gi(t.stateNode.nextSibling):null;return!0}function Xs(){un=Gn=null,Dt=!1}function Af(){var t=ss;return t!==null&&(hi===null?hi=t:hi.push.apply(hi,t),ss=null),t}function Vo(t){ss===null?ss=[t]:ss.push(t)}var Cf=E(null),Ws=null,Aa=null;function os(t,i,s){ie(Cf,i._currentValue),i._currentValue=s}function Ca(t){t._currentValue=Cf.current,H(Cf)}function Rf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Lf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var D=h;h=f;for(var W=0;W<i.length;W++)if(D.context===i[W]){h.lanes|=s,D=h.alternate,D!==null&&(D.lanes|=s),Rf(h.return,s,t),l||(b=null);break e}h=D.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),Rf(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Lr(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var D=f.type;Mi(f.pendingProps.value,b.value)||(t!==null?t.push(D):t=[D])}}else if(f===se.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}f=f.return}t!==null&&Lf(i,t,s,l),i.flags|=262144}function cc(t){for(t=t.firstContext;t!==null;){if(!Mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function qs(t){Ws=t,Aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return l0(Ws,t)}function uc(t,i){return Ws===null&&qs(t),l0(t,i)}function l0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Aa===null){if(t===null)throw Error(a(308));Aa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Aa=Aa.next=i;return s}var OM=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},PM=r.unstable_scheduleCallback,IM=r.unstable_NormalPriority,En={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new OM,data:new Map,refCount:0}}function Yo(t){t.refCount--,t.refCount===0&&PM(IM,function(){t.controller.abort()})}var Xo=null,Nf=0,Dr=0,Nr=null;function FM(t,i){if(Xo===null){var s=Xo=[];Nf=0,Dr=Pd(),Nr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Nf++,i.then(c0,c0),i}function c0(){if(--Nf===0&&Xo!==null){Nr!==null&&(Nr.status="fulfilled");var t=Xo;Xo=null,Dr=0,Nr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function BM(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var u0=B.S;B.S=function(t,i){qg=Ht(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&FM(t,i),u0!==null&&u0(t,i)};var js=E(null);function Uf(){var t=js.current;return t!==null?t:sn.pooledCache}function fc(t,i){i===null?ie(js,js.current):ie(js,i.pool)}function f0(){var t=Uf();return t===null?null:{parent:En._currentValue,pool:t}}var Ur=Error(a(460)),Of=Error(a(474)),dc=Error(a(542)),hc={then:function(){}};function d0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function h0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ba,ba),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,m0(t),t;default:if(typeof i.status=="string")i.then(ba,ba);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,m0(t),t}throw Ks=i,Ur}}function Zs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ks=s,Ur):s}}var Ks=null;function p0(){if(Ks===null)throw Error(a(459));var t=Ks;return Ks=null,t}function m0(t){if(t===Ur||t===dc)throw Error(a(483))}var Or=null,Wo=0;function pc(t){var i=Wo;return Wo+=1,Or===null&&(Or=[]),h0(Or,t,i)}function qo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function mc(t,i){throw i.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function g0(t){function i(te,j){if(t){var oe=te.deletions;oe===null?(te.deletions=[j],te.flags|=16):oe.push(j)}}function s(te,j){if(!t)return null;for(;j!==null;)i(te,j),j=j.sibling;return null}function l(te){for(var j=new Map;te!==null;)te.key!==null?j.set(te.key,te):j.set(te.index,te),te=te.sibling;return j}function f(te,j){return te=Ta(te,j),te.index=0,te.sibling=null,te}function h(te,j,oe){return te.index=oe,t?(oe=te.alternate,oe!==null?(oe=oe.index,oe<j?(te.flags|=67108866,j):oe):(te.flags|=67108866,j)):(te.flags|=1048576,j)}function b(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function D(te,j,oe,be){return j===null||j.tag!==6?(j=Mf(oe,te.mode,be),j.return=te,j):(j=f(j,oe),j.return=te,j)}function W(te,j,oe,be){var ot=oe.type;return ot===A?Se(te,j,oe.props.children,be,oe.key):j!==null&&(j.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Zs(ot)===j.type)?(j=f(j,oe.props),qo(j,oe),j.return=te,j):(j=oc(oe.type,oe.key,oe.props,null,te.mode,be),qo(j,oe),j.return=te,j)}function ce(te,j,oe,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==oe.containerInfo||j.stateNode.implementation!==oe.implementation?(j=bf(oe,te.mode,be),j.return=te,j):(j=f(j,oe.children||[]),j.return=te,j)}function Se(te,j,oe,be,ot){return j===null||j.tag!==7?(j=Ys(oe,te.mode,be,ot),j.return=te,j):(j=f(j,oe),j.return=te,j)}function Te(te,j,oe){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Mf(""+j,te.mode,oe),j.return=te,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return oe=oc(j.type,j.key,j.props,null,te.mode,oe),qo(oe,j),oe.return=te,oe;case x:return j=bf(j,te.mode,oe),j.return=te,j;case T:return j=Zs(j),Te(te,j,oe)}if(Q(j)||X(j))return j=Ys(j,te.mode,oe,null),j.return=te,j;if(typeof j.then=="function")return Te(te,pc(j),oe);if(j.$$typeof===U)return Te(te,uc(te,j),oe);mc(te,j)}return null}function pe(te,j,oe,be){var ot=j!==null?j.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return ot!==null?null:D(te,j,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return oe.key===ot?W(te,j,oe,be):null;case x:return oe.key===ot?ce(te,j,oe,be):null;case T:return oe=Zs(oe),pe(te,j,oe,be)}if(Q(oe)||X(oe))return ot!==null?null:Se(te,j,oe,be,null);if(typeof oe.then=="function")return pe(te,j,pc(oe),be);if(oe.$$typeof===U)return pe(te,j,uc(te,oe),be);mc(te,oe)}return null}function ge(te,j,oe,be,ot){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return te=te.get(oe)||null,D(j,te,""+be,ot);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case M:return te=te.get(be.key===null?oe:be.key)||null,W(j,te,be,ot);case x:return te=te.get(be.key===null?oe:be.key)||null,ce(j,te,be,ot);case T:return be=Zs(be),ge(te,j,oe,be,ot)}if(Q(be)||X(be))return te=te.get(oe)||null,Se(j,te,be,ot,null);if(typeof be.then=="function")return ge(te,j,oe,pc(be),ot);if(be.$$typeof===U)return ge(te,j,oe,uc(j,be),ot);mc(j,be)}return null}function $e(te,j,oe,be){for(var ot=null,Ft=null,tt=j,yt=j=0,Ct=null;tt!==null&&yt<oe.length;yt++){tt.index>yt?(Ct=tt,tt=null):Ct=tt.sibling;var Bt=pe(te,tt,oe[yt],be);if(Bt===null){tt===null&&(tt=Ct);break}t&&tt&&Bt.alternate===null&&i(te,tt),j=h(Bt,j,yt),Ft===null?ot=Bt:Ft.sibling=Bt,Ft=Bt,tt=Ct}if(yt===oe.length)return s(te,tt),Dt&&wa(te,yt),ot;if(tt===null){for(;yt<oe.length;yt++)tt=Te(te,oe[yt],be),tt!==null&&(j=h(tt,j,yt),Ft===null?ot=tt:Ft.sibling=tt,Ft=tt);return Dt&&wa(te,yt),ot}for(tt=l(tt);yt<oe.length;yt++)Ct=ge(tt,te,yt,oe[yt],be),Ct!==null&&(t&&Ct.alternate!==null&&tt.delete(Ct.key===null?yt:Ct.key),j=h(Ct,j,yt),Ft===null?ot=Ct:Ft.sibling=Ct,Ft=Ct);return t&&tt.forEach(function(Ts){return i(te,Ts)}),Dt&&wa(te,yt),ot}function ft(te,j,oe,be){if(oe==null)throw Error(a(151));for(var ot=null,Ft=null,tt=j,yt=j=0,Ct=null,Bt=oe.next();tt!==null&&!Bt.done;yt++,Bt=oe.next()){tt.index>yt?(Ct=tt,tt=null):Ct=tt.sibling;var Ts=pe(te,tt,Bt.value,be);if(Ts===null){tt===null&&(tt=Ct);break}t&&tt&&Ts.alternate===null&&i(te,tt),j=h(Ts,j,yt),Ft===null?ot=Ts:Ft.sibling=Ts,Ft=Ts,tt=Ct}if(Bt.done)return s(te,tt),Dt&&wa(te,yt),ot;if(tt===null){for(;!Bt.done;yt++,Bt=oe.next())Bt=Te(te,Bt.value,be),Bt!==null&&(j=h(Bt,j,yt),Ft===null?ot=Bt:Ft.sibling=Bt,Ft=Bt);return Dt&&wa(te,yt),ot}for(tt=l(tt);!Bt.done;yt++,Bt=oe.next())Bt=ge(tt,te,yt,Bt.value,be),Bt!==null&&(t&&Bt.alternate!==null&&tt.delete(Bt.key===null?yt:Bt.key),j=h(Bt,j,yt),Ft===null?ot=Bt:Ft.sibling=Bt,Ft=Bt);return t&&tt.forEach(function(Zb){return i(te,Zb)}),Dt&&wa(te,yt),ot}function en(te,j,oe,be){if(typeof oe=="object"&&oe!==null&&oe.type===A&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:e:{for(var ot=oe.key;j!==null;){if(j.key===ot){if(ot=oe.type,ot===A){if(j.tag===7){s(te,j.sibling),be=f(j,oe.props.children),be.return=te,te=be;break e}}else if(j.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Zs(ot)===j.type){s(te,j.sibling),be=f(j,oe.props),qo(be,oe),be.return=te,te=be;break e}s(te,j);break}else i(te,j);j=j.sibling}oe.type===A?(be=Ys(oe.props.children,te.mode,be,oe.key),be.return=te,te=be):(be=oc(oe.type,oe.key,oe.props,null,te.mode,be),qo(be,oe),be.return=te,te=be)}return b(te);case x:e:{for(ot=oe.key;j!==null;){if(j.key===ot)if(j.tag===4&&j.stateNode.containerInfo===oe.containerInfo&&j.stateNode.implementation===oe.implementation){s(te,j.sibling),be=f(j,oe.children||[]),be.return=te,te=be;break e}else{s(te,j);break}else i(te,j);j=j.sibling}be=bf(oe,te.mode,be),be.return=te,te=be}return b(te);case T:return oe=Zs(oe),en(te,j,oe,be)}if(Q(oe))return $e(te,j,oe,be);if(X(oe)){if(ot=X(oe),typeof ot!="function")throw Error(a(150));return oe=ot.call(oe),ft(te,j,oe,be)}if(typeof oe.then=="function")return en(te,j,pc(oe),be);if(oe.$$typeof===U)return en(te,j,uc(te,oe),be);mc(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,j!==null&&j.tag===6?(s(te,j.sibling),be=f(j,oe),be.return=te,te=be):(s(te,j),be=Mf(oe,te.mode,be),be.return=te,te=be),b(te)):s(te,j)}return function(te,j,oe,be){try{Wo=0;var ot=en(te,j,oe,be);return Or=null,ot}catch(tt){if(tt===Ur||tt===dc)throw tt;var Ft=bi(29,tt,null,te.mode);return Ft.lanes=be,Ft.return=te,Ft}}}var Qs=g0(!0),x0=g0(!1),ls=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function cs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function us(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=rc(t),e0(t,null,s),i}return sc(t,l,i,s),rc(t)}function jo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,_i(t,s)}}function Ff(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Bf=!1;function Zo(){if(Bf){var t=Nr;if(t!==null)throw t}}function Ko(t,i,s,l){Bf=!1;var f=t.updateQueue;ls=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var W=D,ce=W.next;W.next=null,b===null?h=ce:b.next=ce,b=W;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==b&&(D===null?Se.firstBaseUpdate=ce:D.next=ce,Se.lastBaseUpdate=W))}if(h!==null){var Te=f.baseState;b=0,Se=ce=W=null,D=h;do{var pe=D.lane&-536870913,ge=pe!==D.lane;if(ge?(At&pe)===pe:(l&pe)===pe){pe!==0&&pe===Dr&&(Bf=!0),Se!==null&&(Se=Se.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var $e=t,ft=D;pe=i;var en=s;switch(ft.tag){case 1:if($e=ft.payload,typeof $e=="function"){Te=$e.call(en,Te,pe);break e}Te=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=ft.payload,pe=typeof $e=="function"?$e.call(en,Te,pe):$e,pe==null)break e;Te=v({},Te,pe);break e;case 2:ls=!0}}pe=D.callback,pe!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=f.callbacks,ge===null?f.callbacks=[pe]:ge.push(pe))}else ge={lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(ce=Se=ge,W=Te):Se=Se.next=ge,b|=pe;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);Se===null&&(W=Te),f.baseState=W,f.firstBaseUpdate=ce,f.lastBaseUpdate=Se,h===null&&(f.shared.lanes=0),ms|=b,t.lanes=b,t.memoizedState=Te}}function _0(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function v0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)_0(s[t],i)}var Pr=E(null),gc=E(0);function y0(t,i){t=Fa,ie(gc,t),ie(Pr,i),Fa=t|i.baseLanes}function zf(){ie(gc,Fa),ie(Pr,Pr.current)}function Hf(){Fa=gc.current,H(Pr),H(gc)}var Ei=E(null),Hi=null;function fs(t){var i=t.alternate;ie(yn,yn.current&1),ie(Ei,t),Hi===null&&(i===null||Pr.current!==null||i.memoizedState!==null)&&(Hi=t)}function Gf(t){ie(yn,yn.current),ie(Ei,t),Hi===null&&(Hi=t)}function S0(t){t.tag===22?(ie(yn,yn.current),ie(Ei,t),Hi===null&&(Hi=t)):ds()}function ds(){ie(yn,yn.current),ie(Ei,Ei.current)}function Ti(t){H(Ei),Hi===t&&(Hi=null),H(yn)}var yn=E(0);function xc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||qd(s)||jd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ra=0,vt=null,Jt=null,Tn=null,_c=!1,Ir=!1,Js=!1,vc=0,Qo=0,Fr=null,zM=0;function xn(){throw Error(a(321))}function kf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Mi(t[s],i[s]))return!1;return!0}function Vf(t,i,s,l,f,h){return Ra=h,vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?ag:ad,Js=!1,h=s(l,f),Js=!1,Ir&&(h=b0(i,s,l,f)),M0(t),h}function M0(t){B.H=el;var i=Jt!==null&&Jt.next!==null;if(Ra=0,Tn=Jt=vt=null,_c=!1,Qo=0,Fr=null,i)throw Error(a(300));t===null||wn||(t=t.dependencies,t!==null&&cc(t)&&(wn=!0))}function b0(t,i,s,l){vt=t;var f=0;do{if(Ir&&(Fr=null),Qo=0,Ir=!1,25<=f)throw Error(a(301));if(f+=1,Tn=Jt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=sg,h=i(s,l)}while(Ir);return h}function HM(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Jo(i):i,t=t.useState()[0],(Jt!==null?Jt.memoizedState:null)!==t&&(vt.flags|=1024),i}function Yf(){var t=vc!==0;return vc=0,t}function Xf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Wf(t){if(_c){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}_c=!1}Ra=0,Tn=Jt=vt=null,Ir=!1,Qo=vc=0,Fr=null}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?vt.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Sn(){if(Jt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=Tn===null?vt.memoizedState:Tn.next;if(i!==null)Tn=i,Jt=t;else{if(t===null)throw vt.alternate===null?Error(a(467)):Error(a(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Tn===null?vt.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(t){var i=Qo;return Qo+=1,Fr===null&&(Fr=[]),t=h0(Fr,t,i),i=vt,(Tn===null?i.memoizedState:Tn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?ag:ad),t}function Sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jo(t);if(t.$$typeof===U)return kn(t)}throw Error(a(438,String(t)))}function qf(t){var i=null,s=vt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=vt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=yc(),vt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=Y;return i.index++,s}function La(t,i){return typeof i=="function"?i(t):i}function Mc(t){var i=Sn();return jf(i,Jt,t)}function jf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var D=b=null,W=null,ce=i,Se=!1;do{var Te=ce.lane&-536870913;if(Te!==ce.lane?(At&Te)===Te:(Ra&Te)===Te){var pe=ce.revertLane;if(pe===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),Te===Dr&&(Se=!0);else if((Ra&pe)===pe){ce=ce.next,pe===Dr&&(Se=!0);continue}else Te={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},W===null?(D=W=Te,b=h):W=W.next=Te,vt.lanes|=pe,ms|=pe;Te=ce.action,Js&&s(h,Te),h=ce.hasEagerState?ce.eagerState:s(h,Te)}else pe={lane:Te,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},W===null?(D=W=pe,b=h):W=W.next=pe,vt.lanes|=Te,ms|=Te;ce=ce.next}while(ce!==null&&ce!==i);if(W===null?b=h:W.next=D,!Mi(h,t.memoizedState)&&(wn=!0,Se&&(s=Nr,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=W,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Zf(t){var i=Sn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);Mi(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function E0(t,i,s){var l=vt,f=Sn(),h=Dt;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!Mi((Jt||f).memoizedState,s);if(b&&(f.memoizedState=s,wn=!0),f=f.queue,Jf(A0.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,Br(9,{destroy:void 0},w0.bind(null,l,f,s,i),null),sn===null)throw Error(a(349));h||(Ra&127)!==0||T0(l,i,s)}return s}function T0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=vt.updateQueue,i===null?(i=yc(),vt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function w0(t,i,s,l){i.value=s,i.getSnapshot=l,C0(i)&&R0(t)}function A0(t,i,s){return s(function(){C0(i)&&R0(t)})}function C0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Mi(t,s)}catch{return!0}}function R0(t){var i=Vs(t,2);i!==null&&pi(i,t,2)}function Kf(t){var i=ei();if(typeof t=="function"){var s=t;if(t=s(),Js){De(!0);try{s()}finally{De(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},i}function L0(t,i,s,l){return t.baseState=s,jf(t,Jt,typeof l=="function"?l:La)}function GM(t,i,s,l,f){if(Tc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};B.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,D0(i,h)):(h.next=s.next,i.pending=s.next=h)}}function D0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=B.T,b={};B.T=b;try{var D=s(f,l),W=B.S;W!==null&&W(b,D),N0(t,i,D)}catch(ce){Qf(t,i,ce)}finally{h!==null&&b.types!==null&&(h.types=b.types),B.T=h}}else try{h=s(f,l),N0(t,i,h)}catch(ce){Qf(t,i,ce)}}function N0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){U0(t,i,l)},function(l){return Qf(t,i,l)}):U0(t,i,s)}function U0(t,i,s){i.status="fulfilled",i.value=s,O0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,D0(t,s)))}function Qf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,O0(i),i=i.next;while(i!==l)}t.action=null}function O0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function P0(t,i){return i}function I0(t,i){if(Dt){var s=sn.formState;if(s!==null){e:{var l=vt;if(Dt){if(un){t:{for(var f=un,h=zi;f.nodeType!==8;){if(!h){f=null;break t}if(f=Gi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){un=Gi(f.nextSibling),l=f.data==="F!";break e}}rs(l)}l=!1}l&&(i=s[0])}}return s=ei(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:i},s.queue=l,s=tg.bind(null,vt,l),l.dispatch=s,l=Kf(!1),h=id.bind(null,vt,!1,l.queue),l=ei(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=GM.bind(null,vt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function F0(t){var i=Sn();return B0(i,Jt,t)}function B0(t,i,s){if(i=jf(t,i,P0)[0],t=Mc(La)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Jo(i)}catch(b){throw b===Ur?dc:b}else l=i;i=Sn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(vt.flags|=2048,Br(9,{destroy:void 0},kM.bind(null,f,s),null)),[l,h,t]}function kM(t,i){t.action=i}function z0(t){var i=Sn(),s=Jt;if(s!==null)return B0(i,s,t);Sn(),i=i.memoizedState,s=Sn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Br(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=vt.updateQueue,i===null&&(i=yc(),vt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function H0(){return Sn().memoizedState}function bc(t,i,s,l){var f=ei();vt.flags|=t,f.memoizedState=Br(1|i,{destroy:void 0},s,l===void 0?null:l)}function Ec(t,i,s,l){var f=Sn();l=l===void 0?null:l;var h=f.memoizedState.inst;Jt!==null&&l!==null&&kf(l,Jt.memoizedState.deps)?f.memoizedState=Br(i,h,s,l):(vt.flags|=t,f.memoizedState=Br(1|i,h,s,l))}function G0(t,i){bc(8390656,8,t,i)}function Jf(t,i){Ec(2048,8,t,i)}function VM(t){vt.flags|=4;var i=vt.updateQueue;if(i===null)i=yc(),vt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function k0(t){var i=Sn().memoizedState;return VM({ref:i,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function V0(t,i){return Ec(4,2,t,i)}function Y0(t,i){return Ec(4,4,t,i)}function X0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function W0(t,i,s){s=s!=null?s.concat([t]):null,Ec(4,4,X0.bind(null,i,t),s)}function $f(){}function q0(t,i){var s=Sn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&kf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function j0(t,i){var s=Sn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&kf(i,l[1]))return l[0];if(l=t(),Js){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,i],l}function ed(t,i,s){return s===void 0||(Ra&1073741824)!==0&&(At&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Zg(),vt.lanes|=t,ms|=t,s)}function Z0(t,i,s,l){return Mi(s,i)?s:Pr.current!==null?(t=ed(t,s,l),Mi(t,i)||(wn=!0),t):(Ra&42)===0||(Ra&1073741824)!==0&&(At&261930)===0?(wn=!0,t.memoizedState=s):(t=Zg(),vt.lanes|=t,ms|=t,i)}function K0(t,i,s,l,f){var h=q.p;q.p=h!==0&&8>h?h:8;var b=B.T,D={};B.T=D,id(t,!1,i,s);try{var W=f(),ce=B.S;if(ce!==null&&ce(D,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Se=BM(W,l);$o(t,i,Se,Ci(t))}else $o(t,i,l,Ci(t))}catch(Te){$o(t,i,{then:function(){},status:"rejected",reason:Te},Ci())}finally{q.p=h,b!==null&&D.types!==null&&(b.types=D.types),B.T=b}}function YM(){}function td(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Q0(t).queue;K0(t,f,i,ee,s===null?YM:function(){return J0(t),s(l)})}function Q0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:ee},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function J0(t){var i=Q0(t);i.next===null&&(i=t.alternate.memoizedState),$o(t,i.next.queue,{},Ci())}function nd(){return kn(gl)}function $0(){return Sn().memoizedState}function eg(){return Sn().memoizedState}function XM(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ci();t=cs(s);var l=us(i,t,s);l!==null&&(pi(l,i,s),jo(l,i,s)),i={cache:Df()},t.payload=i;return}i=i.return}}function WM(t,i,s){var l=Ci();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Tc(t)?ng(i,s):(s=yf(t,i,s,l),s!==null&&(pi(s,t,l),ig(s,i,l)))}function tg(t,i,s){var l=Ci();$o(t,i,s,l)}function $o(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Tc(t))ng(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,D=h(b,s);if(f.hasEagerState=!0,f.eagerState=D,Mi(D,b))return sc(t,i,f,0),sn===null&&ac(),!1}catch{}if(s=yf(t,i,f,l),s!==null)return pi(s,t,l),ig(s,i,l),!0}return!1}function id(t,i,s,l){if(l={lane:2,revertLane:Pd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Tc(t)){if(i)throw Error(a(479))}else i=yf(t,s,l,2),i!==null&&pi(i,t,2)}function Tc(t){var i=t.alternate;return t===vt||i!==null&&i===vt}function ng(t,i){Ir=_c=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function ig(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,_i(t,s)}}var el={readContext:kn,use:Sc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};el.useEffectEvent=xn;var ag={readContext:kn,use:Sc,useCallback:function(t,i){return ei().memoizedState=[t,i===void 0?null:i],t},useContext:kn,useEffect:G0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,bc(4194308,4,X0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return bc(4194308,4,t,i)},useInsertionEffect:function(t,i){bc(4,2,t,i)},useMemo:function(t,i){var s=ei();i=i===void 0?null:i;var l=t();if(Js){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=ei();if(s!==void 0){var f=s(i);if(Js){De(!0);try{s(i)}finally{De(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=WM.bind(null,vt,t),[l.memoizedState,t]},useRef:function(t){var i=ei();return t={current:t},i.memoizedState=t},useState:function(t){t=Kf(t);var i=t.queue,s=tg.bind(null,vt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:$f,useDeferredValue:function(t,i){var s=ei();return ed(s,t,i)},useTransition:function(){var t=Kf(!1);return t=K0.bind(null,vt,t.queue,!0,!1),ei().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=vt,f=ei();if(Dt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),sn===null)throw Error(a(349));(At&127)!==0||T0(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,G0(A0.bind(null,l,h,t),[t]),l.flags|=2048,Br(9,{destroy:void 0},w0.bind(null,l,h,s,i),null),s},useId:function(){var t=ei(),i=sn.identifierPrefix;if(Dt){var s=ca,l=la;s=(l&~(1<<32-Xe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=vc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=zM++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:nd,useFormState:I0,useActionState:I0,useOptimistic:function(t){var i=ei();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=id.bind(null,vt,!0,s),s.dispatch=i,[t,i]},useMemoCache:qf,useCacheRefresh:function(){return ei().memoizedState=XM.bind(null,vt)},useEffectEvent:function(t){var i=ei(),s={impl:t};return i.memoizedState=s,function(){if((Gt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},ad={readContext:kn,use:Sc,useCallback:q0,useContext:kn,useEffect:Jf,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:Y0,useMemo:j0,useReducer:Mc,useRef:H0,useState:function(){return Mc(La)},useDebugValue:$f,useDeferredValue:function(t,i){var s=Sn();return Z0(s,Jt.memoizedState,t,i)},useTransition:function(){var t=Mc(La)[0],i=Sn().memoizedState;return[typeof t=="boolean"?t:Jo(t),i]},useSyncExternalStore:E0,useId:$0,useHostTransitionStatus:nd,useFormState:F0,useActionState:F0,useOptimistic:function(t,i){var s=Sn();return L0(s,Jt,t,i)},useMemoCache:qf,useCacheRefresh:eg};ad.useEffectEvent=k0;var sg={readContext:kn,use:Sc,useCallback:q0,useContext:kn,useEffect:Jf,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:Y0,useMemo:j0,useReducer:Zf,useRef:H0,useState:function(){return Zf(La)},useDebugValue:$f,useDeferredValue:function(t,i){var s=Sn();return Jt===null?ed(s,t,i):Z0(s,Jt.memoizedState,t,i)},useTransition:function(){var t=Zf(La)[0],i=Sn().memoizedState;return[typeof t=="boolean"?t:Jo(t),i]},useSyncExternalStore:E0,useId:$0,useHostTransitionStatus:nd,useFormState:z0,useActionState:z0,useOptimistic:function(t,i){var s=Sn();return Jt!==null?L0(s,Jt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:qf,useCacheRefresh:eg};sg.useEffectEvent=k0;function sd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var rd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ci(),f=cs(l);f.payload=i,s!=null&&(f.callback=s),i=us(t,f,l),i!==null&&(pi(i,t,l),jo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ci(),f=cs(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=us(t,f,l),i!==null&&(pi(i,t,l),jo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ci(),l=cs(s);l.tag=2,i!=null&&(l.callback=i),i=us(t,l,s),i!==null&&(pi(i,t,s),jo(i,t,s))}};function rg(t,i,s,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,h):!0}function og(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&rd.enqueueReplaceState(i,i.state,null)}function $s(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function lg(t){ic(t)}function cg(t){console.error(t)}function ug(t){ic(t)}function wc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function fg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function od(t,i,s){return s=cs(s),s.tag=3,s.payload={element:null},s.callback=function(){wc(t,i)},s}function dg(t){return t=cs(t),t.tag=3,t}function hg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){fg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){fg(i,s,l),typeof f!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function qM(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Lr(i,s,f,!0),s=Ei.current,s!==null){switch(s.tag){case 31:case 13:return Hi===null?Bc():s.alternate===null&&_n===0&&(_n=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===hc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Nd(t,l,f)),!1;case 22:return s.flags|=65536,l===hc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Nd(t,l,f)),!1}throw Error(a(435,s.tag))}return Nd(t,l,f),Bc(),!1}if(Dt)return i=Ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==wf&&(t=Error(a(422),{cause:l}),Vo(Ii(t,s)))):(l!==wf&&(i=Error(a(423),{cause:l}),Vo(Ii(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ii(l,s),f=od(t.stateNode,l,f),Ff(t,f),_n!==4&&(_n=2)),!1;var h=Error(a(520),{cause:l});if(h=Ii(h,s),ll===null?ll=[h]:ll.push(h),_n!==4&&(_n=2),i===null)return!0;l=Ii(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=od(s.stateNode,l,t),Ff(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(gs===null||!gs.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=dg(f),hg(f,t,s,l),Ff(s,f),!1}s=s.return}while(s!==null);return!1}var ld=Error(a(461)),wn=!1;function Vn(t,i,s,l){i.child=t===null?x0(i,null,s,l):Qs(i,t.child,s,l)}function pg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var b={};for(var D in l)D!=="ref"&&(b[D]=l[D])}else b=l;return qs(i),l=Vf(t,i,s,b,h,f),D=Yf(),t!==null&&!wn?(Xf(t,i,f),Da(t,i,f)):(Dt&&D&&Ef(i),i.flags|=1,Vn(t,i,l,f),i.child)}function mg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Sf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,gg(t,i,h,l,f)):(t=oc(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!gd(t,f)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(b,l)&&t.ref===i.ref)return Da(t,i,f)}return i.flags|=1,t=Ta(h,l),t.ref=i.ref,t.return=i,i.child=t}function gg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Ho(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,gd(t,f))(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Da(t,i,f)}return cd(t,i,s,l,f)}function xg(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return _g(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&fc(i,h!==null?h.cachePool:null),h!==null?y0(i,h):zf(),S0(i);else return l=i.lanes=536870912,_g(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(fc(i,h.cachePool),y0(i,h),ds(),i.memoizedState=null):(t!==null&&fc(i,null),zf(),ds());return Vn(t,i,f,s),i.child}function tl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function _g(t,i,s,l,f){var h=Uf();return h=h===null?null:{parent:En._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&fc(i,null),zf(),S0(i),t!==null&&Lr(t,i,l,!0),i.childLanes=f,null}function Ac(t,i){return i=Rc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function vg(t,i,s){return Qs(i,t.child,null,s),t=Ac(i,i.pendingProps),t.flags|=2,Ti(i),i.memoizedState=null,t}function jM(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=Ac(i,l),i.lanes=536870912,tl(null,t);if(Gf(i),(t=un)?(t=Dx(t,zi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:as!==null?{id:la,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},s=n0(t),s.return=i,i.child=s,Gn=i,un=null)):t=null,t===null)throw rs(i);return i.lanes=536870912,null}return Ac(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(Gf(i),f)if(i.flags&256)i.flags&=-257,i=vg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(wn||Lr(t,i,s,!1),f=(s&t.childLanes)!==0,wn||f){if(l=sn,l!==null&&(b=vi(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Vs(t,b),pi(l,t,b),ld;Bc(),i=vg(t,i,s)}else t=h.treeContext,un=Gi(b.nextSibling),Gn=i,Dt=!0,ss=null,zi=!1,t!==null&&s0(i,t),i=Ac(i,l),i.flags|=4096;return i}return t=Ta(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Cc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function cd(t,i,s,l,f){return qs(i),s=Vf(t,i,s,l,void 0,f),l=Yf(),t!==null&&!wn?(Xf(t,i,f),Da(t,i,f)):(Dt&&l&&Ef(i),i.flags|=1,Vn(t,i,s,f),i.child)}function yg(t,i,s,l,f,h){return qs(i),i.updateQueue=null,s=b0(i,l,s,f),M0(t),l=Yf(),t!==null&&!wn?(Xf(t,i,h),Da(t,i,h)):(Dt&&l&&Ef(i),i.flags|=1,Vn(t,i,s,h),i.child)}function Sg(t,i,s,l,f){if(qs(i),i.stateNode===null){var h=wr,b=s.contextType;typeof b=="object"&&b!==null&&(h=kn(b)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=rd,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Pf(i),b=s.contextType,h.context=typeof b=="object"&&b!==null?kn(b):wr,h.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(sd(i,s,b,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&rd.enqueueReplaceState(h,h.state,null),Ko(i,l,h,f),Zo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var D=i.memoizedProps,W=$s(s,D);h.props=W;var ce=h.context,Se=s.contextType;b=wr,typeof Se=="object"&&Se!==null&&(b=kn(Se));var Te=s.getDerivedStateFromProps;Se=typeof Te=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||ce!==b)&&og(i,h,l,b),ls=!1;var pe=i.memoizedState;h.state=pe,Ko(i,l,h,f),Zo(),ce=i.memoizedState,D||pe!==ce||ls?(typeof Te=="function"&&(sd(i,s,Te,l),ce=i.memoizedState),(W=ls||rg(i,s,W,l,pe,ce,b))?(Se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ce),h.props=l,h.state=ce,h.context=b,l=W):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,If(t,i),b=i.memoizedProps,Se=$s(s,b),h.props=Se,Te=i.pendingProps,pe=h.context,ce=s.contextType,W=wr,typeof ce=="object"&&ce!==null&&(W=kn(ce)),D=s.getDerivedStateFromProps,(ce=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==Te||pe!==W)&&og(i,h,l,W),ls=!1,pe=i.memoizedState,h.state=pe,Ko(i,l,h,f),Zo();var ge=i.memoizedState;b!==Te||pe!==ge||ls||t!==null&&t.dependencies!==null&&cc(t.dependencies)?(typeof D=="function"&&(sd(i,s,D,l),ge=i.memoizedState),(Se=ls||rg(i,s,Se,l,pe,ge,W)||t!==null&&t.dependencies!==null&&cc(t.dependencies))?(ce||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ge,W),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ge,W)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ge),h.props=l,h.state=ge,h.context=W,l=Se):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Cc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Qs(i,t.child,null,f),i.child=Qs(i,null,s,f)):Vn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=Da(t,i,f),t}function Mg(t,i,s,l){return Xs(),i.flags|=256,Vn(t,i,s,l),i.child}var ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fd(t){return{baseLanes:t,cachePool:f0()}}function dd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ai),t}function bg(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(yn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Dt){if(f?fs(i):ds(),(t=un)?(t=Dx(t,zi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:as!==null?{id:la,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},s=n0(t),s.return=i,i.child=s,Gn=i,un=null)):t=null,t===null)throw rs(i);return jd(t)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,f?(ds(),f=i.mode,D=Rc({mode:"hidden",children:D},f),l=Ys(l,f,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=fd(s),l.childLanes=dd(t,b,s),i.memoizedState=ud,tl(null,l)):(fs(i),hd(i,D))}var W=t.memoizedState;if(W!==null&&(D=W.dehydrated,D!==null)){if(h)i.flags&256?(fs(i),i.flags&=-257,i=pd(t,i,s)):i.memoizedState!==null?(ds(),i.child=t.child,i.flags|=128,i=null):(ds(),D=l.fallback,f=i.mode,l=Rc({mode:"visible",children:l.children},f),D=Ys(D,f,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,Qs(i,t.child,null,s),l=i.child,l.memoizedState=fd(s),l.childLanes=dd(t,b,s),i.memoizedState=ud,i=tl(null,l));else if(fs(i),jd(D)){if(b=D.nextSibling&&D.nextSibling.dataset,b)var ce=b.dgst;b=ce,l=Error(a(419)),l.stack="",l.digest=b,Vo({value:l,source:null,stack:null}),i=pd(t,i,s)}else if(wn||Lr(t,i,s,!1),b=(s&t.childLanes)!==0,wn||b){if(b=sn,b!==null&&(l=vi(b,s),l!==0&&l!==W.retryLane))throw W.retryLane=l,Vs(t,l),pi(b,t,l),ld;qd(D)||Bc(),i=pd(t,i,s)}else qd(D)?(i.flags|=192,i.child=t.child,i=null):(t=W.treeContext,un=Gi(D.nextSibling),Gn=i,Dt=!0,ss=null,zi=!1,t!==null&&s0(i,t),i=hd(i,l.children),i.flags|=4096);return i}return f?(ds(),D=l.fallback,f=i.mode,W=t.child,ce=W.sibling,l=Ta(W,{mode:"hidden",children:l.children}),l.subtreeFlags=W.subtreeFlags&65011712,ce!==null?D=Ta(ce,D):(D=Ys(D,f,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,tl(null,l),l=i.child,D=t.child.memoizedState,D===null?D=fd(s):(f=D.cachePool,f!==null?(W=En._currentValue,f=f.parent!==W?{parent:W,pool:W}:f):f=f0(),D={baseLanes:D.baseLanes|s,cachePool:f}),l.memoizedState=D,l.childLanes=dd(t,b,s),i.memoizedState=ud,tl(t.child,l)):(fs(i),s=t.child,t=s.sibling,s=Ta(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function hd(t,i){return i=Rc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Rc(t,i){return t=bi(22,t,null,i),t.lanes=0,t}function pd(t,i,s){return Qs(i,t.child,null,s),t=hd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Eg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Rf(t.return,i,s)}function md(t,i,s,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=h)}function Tg(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=yn.current,D=(b&2)!==0;if(D?(b=b&1|2,i.flags|=128):b&=1,ie(yn,b),Vn(t,i,l,s),l=Dt?ko:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,s,i);else if(t.tag===19)Eg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&xc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),md(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&xc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}md(i,!0,s,null,h,l);break;case"together":md(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Da(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ms|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Lr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Ta(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Ta(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function gd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&cc(t)))}function ZM(t,i,s){switch(i.tag){case 3:me(i,i.stateNode.containerInfo),os(i,En,t.memoizedState.cache),Xs();break;case 27:case 5:ke(i);break;case 4:me(i,i.stateNode.containerInfo);break;case 10:os(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Gf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(fs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?bg(t,i,s):(fs(i),t=Da(t,i,s),t!==null?t.sibling:null);fs(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Lr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Tg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(yn,yn.current),l)break;return null;case 22:return i.lanes=0,xg(t,i,s,i.pendingProps);case 24:os(i,En,t.memoizedState.cache)}return Da(t,i,s)}function wg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)wn=!0;else{if(!gd(t,s)&&(i.flags&128)===0)return wn=!1,ZM(t,i,s);wn=(t.flags&131072)!==0}else wn=!1,Dt&&(i.flags&1048576)!==0&&a0(i,ko,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Zs(i.elementType),i.type=t,typeof t=="function")Sf(t)?(l=$s(t,l),i.tag=1,i=Sg(null,i,t,l,s)):(i.tag=0,i=cd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){i.tag=11,i=pg(null,i,t,l,s);break e}else if(f===F){i.tag=14,i=mg(null,i,t,l,s);break e}}throw i=ae(t)||t,Error(a(306,i,""))}}return i;case 0:return cd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=$s(l,i.pendingProps),Sg(t,i,l,f,s);case 3:e:{if(me(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,If(t,i),Ko(i,l,null,s);var b=i.memoizedState;if(l=b.cache,os(i,En,l),l!==h.cache&&Lf(i,[En],s,!0),Zo(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Mg(t,i,l,s);break e}else if(l!==f){f=Ii(Error(a(424)),i),Vo(f),i=Mg(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,un=Gi(t.firstChild),Gn=i,Dt=!0,ss=null,zi=!0,s=x0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Xs(),l===f){i=Da(t,i,s);break e}Vn(t,i,l,s)}i=i.child}return i;case 26:return Cc(t,i),t===null?(s=Fx(i.type,null,i.pendingProps,null))?i.memoizedState=s:Dt||(s=i.type,t=i.pendingProps,l=Xc(K.current).createElement(s),l[Mn]=i,l[Hn]=t,Yn(l,s,t),bn(l),i.stateNode=l):i.memoizedState=Fx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ke(i),t===null&&Dt&&(l=i.stateNode=Ox(i.type,i.pendingProps,K.current),Gn=i,zi=!0,f=un,ys(i.type)?(Zd=f,un=Gi(l.firstChild)):un=f),Vn(t,i,i.pendingProps.children,s),Cc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Dt&&((f=l=un)&&(l=Tb(l,i.type,i.pendingProps,zi),l!==null?(i.stateNode=l,Gn=i,un=Gi(l.firstChild),zi=!1,f=!0):f=!1),f||rs(i)),ke(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,Yd(f,h)?l=null:b!==null&&Yd(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Vf(t,i,HM,null,null,s),gl._currentValue=f),Cc(t,i),Vn(t,i,l,s),i.child;case 6:return t===null&&Dt&&((t=s=un)&&(s=wb(s,i.pendingProps,zi),s!==null?(i.stateNode=s,Gn=i,un=null,t=!0):t=!1),t||rs(i)),null;case 13:return bg(t,i,s);case 4:return me(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Qs(i,null,l,s):Vn(t,i,l,s),i.child;case 11:return pg(t,i,i.type,i.pendingProps,s);case 7:return Vn(t,i,i.pendingProps,s),i.child;case 8:return Vn(t,i,i.pendingProps.children,s),i.child;case 12:return Vn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,os(i,i.type,l.value),Vn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,qs(i),f=kn(f),l=l(f),i.flags|=1,Vn(t,i,l,s),i.child;case 14:return mg(t,i,i.type,i.pendingProps,s);case 15:return gg(t,i,i.type,i.pendingProps,s);case 19:return Tg(t,i,s);case 31:return jM(t,i,s);case 22:return xg(t,i,s,i.pendingProps);case 24:return qs(i),l=kn(En),t===null?(f=Uf(),f===null&&(f=sn,h=Df(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Pf(i),os(i,En,f)):((t.lanes&s)!==0&&(If(t,i),Ko(i,null,null,s),Zo()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),os(i,En,l)):(l=h.cache,os(i,En,l),l!==f.cache&&Lf(i,[En],s,!0))),Vn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Na(t){t.flags|=4}function xd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if($g())t.flags|=8192;else throw Ks=hc,Of}else t.flags&=-16777217}function Ag(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kx(i))if($g())t.flags|=8192;else throw Ks=hc,Of}function Lc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ae():536870912,t.lanes|=i,kr|=i)}function nl(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function KM(t,i,s){var l=i.pendingProps;switch(Tf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return fn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ca(En),Ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Rr(i)?Na(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Af())),fn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Na(i),h!==null?(fn(i),Ag(i,h)):(fn(i),xd(i,f,null,l,s))):h?h!==t.memoizedState?(Na(i),fn(i),Ag(i,h)):(fn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Na(i),fn(i),xd(i,f,t,l,s)),null;case 27:if(Ne(i),s=K.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return fn(i),null}t=xe.current,Rr(i)?r0(i):(t=Ox(f,l,s),i.stateNode=t,Na(i))}return fn(i),null;case 5:if(Ne(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return fn(i),null}if(h=xe.current,Rr(i))r0(i);else{var b=Xc(K.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[Mn]=i,h[Hn]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(Yn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Na(i)}}return fn(i),xd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=K.current,Rr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Gn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Mn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||bx(t.nodeValue,s)),t||rs(i,!0)}else t=Xc(t).createTextNode(l),t[Mn]=i,i.stateNode=t}return fn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Rr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[Mn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),t=!1}else s=Af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Ti(i),i):(Ti(i),null);if((i.flags&128)!==0)throw Error(a(558))}return fn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Rr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Mn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),f=!1}else f=Af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ti(i),i):(Ti(i),null)}return Ti(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Lc(i,i.updateQueue),fn(i),null);case 4:return Ce(),t===null&&zd(i.stateNode.containerInfo),fn(i),null;case 10:return Ca(i.type),fn(i),null;case 19:if(H(yn),l=i.memoizedState,l===null)return fn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)nl(l,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=xc(t),h!==null){for(i.flags|=128,nl(l,!1),t=h.updateQueue,i.updateQueue=t,Lc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)t0(s,t),s=s.sibling;return ie(yn,yn.current&1|2),Dt&&wa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Ht()>Pc&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304)}else{if(!f)if(t=xc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Lc(i,t),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Dt)return fn(i),null}else 2*Ht()-l.renderingStartTime>Pc&&s!==536870912&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ht(),t.sibling=null,s=yn.current,ie(yn,f?s&1|2:s&1),Dt&&wa(i,l.treeForkCount),t):(fn(i),null);case 22:case 23:return Ti(i),Hf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),s=i.updateQueue,s!==null&&Lc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&H(js),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ca(En),fn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function QM(t,i){switch(Tf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ca(En),Ce(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ne(i),null;case 31:if(i.memoizedState!==null){if(Ti(i),i.alternate===null)throw Error(a(340));Xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Ti(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return H(yn),null;case 4:return Ce(),null;case 10:return Ca(i.type),null;case 22:case 23:return Ti(i),Hf(),t!==null&&H(js),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ca(En),null;case 25:return null;default:return null}}function Cg(t,i){switch(Tf(i),i.tag){case 3:Ca(En),Ce();break;case 26:case 27:case 5:Ne(i);break;case 4:Ce();break;case 31:i.memoizedState!==null&&Ti(i);break;case 13:Ti(i);break;case 19:H(yn);break;case 10:Ca(i.type);break;case 22:case 23:Ti(i),Hf(),t!==null&&H(js);break;case 24:Ca(En)}}function il(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==f)}}catch(D){Zt(i,i.return,D)}}function hs(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,D=b.destroy;if(D!==void 0){b.destroy=void 0,f=i;var W=s,ce=D;try{ce()}catch(Se){Zt(f,W,Se)}}}l=l.next}while(l!==h)}}catch(Se){Zt(i,i.return,Se)}}function Rg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{v0(i,s)}catch(l){Zt(t,t.return,l)}}}function Lg(t,i,s){s.props=$s(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Zt(t,i,l)}}function al(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Zt(t,i,f)}}function ua(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Zt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Zt(t,i,f)}else s.current=null}function Dg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Zt(t,t.return,f)}}function _d(t,i,s){try{var l=t.stateNode;vb(l,t.type,s,i),l[Hn]=i}catch(f){Zt(t,t.return,f)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ys(t.type)||t.tag===4}function vd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ys(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ba));else if(l!==4&&(l===27&&ys(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(yd(t,i,s),t=t.sibling;t!==null;)yd(t,i,s),t=t.sibling}function Dc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ys(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Dc(t,i,s),t=t.sibling;t!==null;)Dc(t,i,s),t=t.sibling}function Ug(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Yn(i,l,s),i[Mn]=t,i[Hn]=s}catch(h){Zt(t,t.return,h)}}var Ua=!1,An=!1,Sd=!1,Og=typeof WeakSet=="function"?WeakSet:Set,Un=null;function JM(t,i){if(t=t.containerInfo,kd=Jc,t=Wm(t),pf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,D=-1,W=-1,ce=0,Se=0,Te=t,pe=null;t:for(;;){for(var ge;Te!==s||f!==0&&Te.nodeType!==3||(D=b+f),Te!==h||l!==0&&Te.nodeType!==3||(W=b+l),Te.nodeType===3&&(b+=Te.nodeValue.length),(ge=Te.firstChild)!==null;)pe=Te,Te=ge;for(;;){if(Te===t)break t;if(pe===s&&++ce===f&&(D=b),pe===h&&++Se===l&&(W=b),(ge=Te.nextSibling)!==null)break;Te=pe,pe=Te.parentNode}Te=ge}s=D===-1||W===-1?null:{start:D,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Vd={focusedElem:t,selectionRange:s},Jc=!1,Un=i;Un!==null;)if(i=Un,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Un=t;else for(;Un!==null;){switch(i=Un,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var $e=$s(s.type,f);t=l.getSnapshotBeforeUpdate($e,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(ft){Zt(s,s.return,ft)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Wd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Un=t;break}Un=i.return}}function Pg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Pa(t,s),l&4&&il(5,s);break;case 1:if(Pa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){Zt(s,s.return,b)}else{var f=$s(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Zt(s,s.return,b)}}l&64&&Rg(s),l&512&&al(s,s.return);break;case 3:if(Pa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{v0(t,i)}catch(b){Zt(s,s.return,b)}}break;case 27:i===null&&l&4&&Ug(s);case 26:case 5:Pa(t,s),i===null&&l&4&&Dg(s),l&512&&al(s,s.return);break;case 12:Pa(t,s);break;case 31:Pa(t,s),l&4&&Bg(t,s);break;case 13:Pa(t,s),l&4&&zg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=ob.bind(null,s),Ab(t,s))));break;case 22:if(l=s.memoizedState!==null||Ua,!l){i=i!==null&&i.memoizedState!==null||An,f=Ua;var h=An;Ua=l,(An=i)&&!h?Ia(t,s,(s.subtreeFlags&8772)!==0):Pa(t,s),Ua=f,An=h}break;case 30:break;default:Pa(t,s)}}function Ig(t){var i=t.alternate;i!==null&&(t.alternate=null,Ig(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&es(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,ui=!1;function Oa(t,i,s){for(s=s.child;s!==null;)Fg(t,i,s),s=s.sibling}function Fg(t,i,s){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ve,s)}catch{}switch(s.tag){case 26:An||ua(s,i),Oa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:An||ua(s,i);var l=gn,f=ui;ys(s.type)&&(gn=s.stateNode,ui=!1),Oa(t,i,s),hl(s.stateNode),gn=l,ui=f;break;case 5:An||ua(s,i);case 6:if(l=gn,f=ui,gn=null,Oa(t,i,s),gn=l,ui=f,gn!==null)if(ui)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(s.stateNode)}catch(h){Zt(s,i,h)}else try{gn.removeChild(s.stateNode)}catch(h){Zt(s,i,h)}break;case 18:gn!==null&&(ui?(t=gn,Rx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Kr(t)):Rx(gn,s.stateNode));break;case 4:l=gn,f=ui,gn=s.stateNode.containerInfo,ui=!0,Oa(t,i,s),gn=l,ui=f;break;case 0:case 11:case 14:case 15:hs(2,s,i),An||hs(4,s,i),Oa(t,i,s);break;case 1:An||(ua(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Lg(s,i,l)),Oa(t,i,s);break;case 21:Oa(t,i,s);break;case 22:An=(l=An)||s.memoizedState!==null,Oa(t,i,s),An=l;break;default:Oa(t,i,s)}}function Bg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Kr(t)}catch(s){Zt(i,i.return,s)}}}function zg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Kr(t)}catch(s){Zt(i,i.return,s)}}function $M(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Og),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Og),i;default:throw Error(a(435,t.tag))}}function Nc(t,i){var s=$M(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=lb.bind(null,t,l);l.then(f,f)}})}function fi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,b=i,D=b;e:for(;D!==null;){switch(D.tag){case 27:if(ys(D.type)){gn=D.stateNode,ui=!1;break e}break;case 5:gn=D.stateNode,ui=!1;break e;case 3:case 4:gn=D.stateNode.containerInfo,ui=!0;break e}D=D.return}if(gn===null)throw Error(a(160));Fg(h,b,f),gn=null,ui=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Hg(i,t),i=i.sibling}var ji=null;function Hg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fi(i,t),di(t),l&4&&(hs(3,t,t.return),il(3,t),hs(5,t,t.return));break;case 1:fi(i,t),di(t),l&512&&(An||s===null||ua(s,s.return)),l&64&&Ua&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ji;if(fi(i,t),di(t),l&512&&(An||s===null||ua(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[$a]||h[Mn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Yn(h,l,s),h[Mn]=t,bn(h),l=h;break e;case"link":var b=Hx("link","href",f).get(l+(s.href||""));if(b){for(var D=0;D<b.length;D++)if(h=b[D],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(D,1);break t}}h=f.createElement(l),Yn(h,l,s),f.head.appendChild(h);break;case"meta":if(b=Hx("meta","content",f).get(l+(s.content||""))){for(D=0;D<b.length;D++)if(h=b[D],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(D,1);break t}}h=f.createElement(l),Yn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[Mn]=t,bn(h),l=h}t.stateNode=l}else Gx(f,t.type,t.stateNode);else t.stateNode=zx(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?Gx(f,t.type,t.stateNode):zx(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&_d(t,t.memoizedProps,s.memoizedProps)}break;case 27:fi(i,t),di(t),l&512&&(An||s===null||ua(s,s.return)),s!==null&&l&4&&_d(t,t.memoizedProps,s.memoizedProps);break;case 5:if(fi(i,t),di(t),l&512&&(An||s===null||ua(s,s.return)),t.flags&32){f=t.stateNode;try{Si(f,"")}catch($e){Zt(t,t.return,$e)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,_d(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Sd=!0);break;case 6:if(fi(i,t),di(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch($e){Zt(t,t.return,$e)}}break;case 3:if(jc=null,f=ji,ji=Wc(i.containerInfo),fi(i,t),ji=f,di(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Kr(i.containerInfo)}catch($e){Zt(t,t.return,$e)}Sd&&(Sd=!1,Gg(t));break;case 4:l=ji,ji=Wc(t.stateNode.containerInfo),fi(i,t),di(t),ji=l;break;case 12:fi(i,t),di(t);break;case 31:fi(i,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nc(t,l)));break;case 13:fi(i,t),di(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Oc=Ht()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nc(t,l)));break;case 22:f=t.memoizedState!==null;var W=s!==null&&s.memoizedState!==null,ce=Ua,Se=An;if(Ua=ce||f,An=Se||W,fi(i,t),An=Se,Ua=ce,di(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||W||Ua||An||er(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){W=s=i;try{if(h=W.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{D=W.stateNode;var Te=W.memoizedProps.style,pe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;D.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch($e){Zt(W,W.return,$e)}}}else if(i.tag===6){if(s===null){W=i;try{W.stateNode.nodeValue=f?"":W.memoizedProps}catch($e){Zt(W,W.return,$e)}}}else if(i.tag===18){if(s===null){W=i;try{var ge=W.stateNode;f?Lx(ge,!0):Lx(W.stateNode,!1)}catch($e){Zt(W,W.return,$e)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Nc(t,s))));break;case 19:fi(i,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nc(t,l)));break;case 30:break;case 21:break;default:fi(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Ng(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=vd(t);Dc(t,h,f);break;case 5:var b=s.stateNode;s.flags&32&&(Si(b,""),s.flags&=-33);var D=vd(t);Dc(t,D,b);break;case 3:case 4:var W=s.stateNode.containerInfo,ce=vd(t);yd(t,ce,W);break;default:throw Error(a(161))}}catch(Se){Zt(t,t.return,Se)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Gg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Pa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Pg(t,i.alternate,i),i=i.sibling}function er(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:hs(4,i,i.return),er(i);break;case 1:ua(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Lg(i,i.return,s),er(i);break;case 27:hl(i.stateNode);case 26:case 5:ua(i,i.return),er(i);break;case 22:i.memoizedState===null&&er(i);break;case 30:er(i);break;default:er(i)}t=t.sibling}}function Ia(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:Ia(f,h,s),il(4,h);break;case 1:if(Ia(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ce){Zt(l,l.return,ce)}if(l=h,f=l.updateQueue,f!==null){var D=l.stateNode;try{var W=f.shared.hiddenCallbacks;if(W!==null)for(f.shared.hiddenCallbacks=null,f=0;f<W.length;f++)_0(W[f],D)}catch(ce){Zt(l,l.return,ce)}}s&&b&64&&Rg(h),al(h,h.return);break;case 27:Ug(h);case 26:case 5:Ia(f,h,s),s&&l===null&&b&4&&Dg(h),al(h,h.return);break;case 12:Ia(f,h,s);break;case 31:Ia(f,h,s),s&&b&4&&Bg(f,h);break;case 13:Ia(f,h,s),s&&b&4&&zg(f,h);break;case 22:h.memoizedState===null&&Ia(f,h,s),al(h,h.return);break;case 30:break;default:Ia(f,h,s)}i=i.sibling}}function Md(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Yo(s))}function bd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t))}function Zi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kg(t,i,s,l),i=i.sibling}function kg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Zi(t,i,s,l),f&2048&&il(9,i);break;case 1:Zi(t,i,s,l);break;case 3:Zi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t)));break;case 12:if(f&2048){Zi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,D=h.onPostCommit;typeof D=="function"&&D(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){Zt(i,i.return,W)}}else Zi(t,i,s,l);break;case 31:Zi(t,i,s,l);break;case 13:Zi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?Zi(t,i,s,l):sl(t,i):h._visibility&2?Zi(t,i,s,l):(h._visibility|=2,zr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Md(b,i);break;case 24:Zi(t,i,s,l),f&2048&&bd(i.alternate,i);break;default:Zi(t,i,s,l)}}function zr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,D=s,W=l,ce=b.flags;switch(b.tag){case 0:case 11:case 15:zr(h,b,D,W,f),il(8,b);break;case 23:break;case 22:var Se=b.stateNode;b.memoizedState!==null?Se._visibility&2?zr(h,b,D,W,f):sl(h,b):(Se._visibility|=2,zr(h,b,D,W,f)),f&&ce&2048&&Md(b.alternate,b);break;case 24:zr(h,b,D,W,f),f&&ce&2048&&bd(b.alternate,b);break;default:zr(h,b,D,W,f)}i=i.sibling}}function sl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&Md(l.alternate,l);break;case 24:sl(s,l),f&2048&&bd(l.alternate,l);break;default:sl(s,l)}i=i.sibling}}var rl=8192;function Hr(t,i,s){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)Vg(t,i,s),t=t.sibling}function Vg(t,i,s){switch(t.tag){case 26:Hr(t,i,s),t.flags&rl&&t.memoizedState!==null&&zb(s,ji,t.memoizedState,t.memoizedProps);break;case 5:Hr(t,i,s);break;case 3:case 4:var l=ji;ji=Wc(t.stateNode.containerInfo),Hr(t,i,s),ji=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,Hr(t,i,s),rl=l):Hr(t,i,s));break;default:Hr(t,i,s)}}function Yg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ol(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,Wg(l,t)}Yg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xg(t),t=t.sibling}function Xg(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&hs(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Uc(t)):ol(t);break;default:ol(t)}}function Uc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,Wg(l,t)}Yg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:hs(8,i,i.return),Uc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Uc(i));break;default:Uc(i)}t=t.sibling}}function Wg(t,i){for(;Un!==null;){var s=Un;switch(s.tag){case 0:case 11:case 15:hs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Un=l;else e:for(s=t;Un!==null;){l=Un;var f=l.sibling,h=l.return;if(Ig(l),l===s){Un=null;break e}if(f!==null){f.return=h,Un=f;break e}Un=h}}}var eb={getCacheForType:function(t){var i=kn(En),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return kn(En).controller.signal}},tb=typeof WeakMap=="function"?WeakMap:Map,Gt=0,sn=null,Et=null,At=0,jt=0,wi=null,ps=!1,Gr=!1,Ed=!1,Fa=0,_n=0,ms=0,tr=0,Td=0,Ai=0,kr=0,ll=null,hi=null,wd=!1,Oc=0,qg=0,Pc=1/0,Ic=null,gs=null,Ln=0,xs=null,Vr=null,Ba=0,Ad=0,Cd=null,jg=null,cl=0,Rd=null;function Ci(){return(Gt&2)!==0&&At!==0?At&-At:B.T!==null?Pd():No()}function Zg(){if(Ai===0)if((At&536870912)===0||Dt){var t=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),Ai=t}else Ai=536870912;return t=Ei.current,t!==null&&(t.flags|=32),Ai}function pi(t,i,s){(t===sn&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(Yr(t,0),_s(t,At,Ai,!1)),Ze(t,s),((Gt&2)===0||t!==sn)&&(t===sn&&((Gt&2)===0&&(tr|=s),_n===4&&_s(t,At,Ai,!1)),fa(t))}function Kg(t,i,s){if((Gt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=l?ab(t,i):Dd(t,i,!0),h=l;do{if(f===0){Gr&&!l&&_s(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!nb(s)){f=Dd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var D=t;f=ll;var W=D.current.memoizedState.isDehydrated;if(W&&(Yr(D,b).flags|=256),b=Dd(D,b,!1),b!==2){if(Ed&&!W){D.errorRecoveryDisabledLanes|=h,tr|=h,f=4;break e}h=hi,hi=f,h!==null&&(hi===null?hi=h:hi.push.apply(hi,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){Yr(t,0),_s(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:_s(l,i,Ai,!ps);break e;case 2:hi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Oc+300-Ht(),10<f)){if(_s(l,i,Ai,!ps),Me(l,0,!0)!==0)break e;Ba=i,l.timeoutHandle=Ax(Qg.bind(null,l,s,hi,Ic,wd,i,Ai,tr,kr,ps,h,"Throttled",-0,0),f);break e}Qg(l,s,hi,Ic,wd,i,Ai,tr,kr,ps,h,null,-0,0)}}break}while(!0);fa(t)}function Qg(t,i,s,l,f,h,b,D,W,ce,Se,Te,pe,ge){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ba},Vg(i,h,Te);var $e=(h&62914560)===h?Oc-Ht():(h&4194048)===h?qg-Ht():0;if($e=Hb(Te,$e),$e!==null){Ba=h,t.cancelPendingCommit=$e(sx.bind(null,t,i,h,s,l,f,b,D,W,Se,Te,null,pe,ge)),_s(t,h,b,!ce);return}}sx(t,i,h,s,l,f,b,D,W)}function nb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!Mi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _s(t,i,s,l){i&=~Td,i&=~tr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-Xe(f),b=1<<h;l[h]=-1,f&=~b}s!==0&&Yt(t,s,i)}function Fc(){return(Gt&6)===0?(ul(0),!1):!0}function Ld(){if(Et!==null){if(jt===0)var t=Et.return;else t=Et,Aa=Ws=null,Wf(t),Or=null,Wo=0,t=Et;for(;t!==null;)Cg(t.alternate,t),t=t.return;Et=null}}function Yr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Mb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ba=0,Ld(),sn=t,Et=s=Ta(t.current,null),At=i,jt=0,wi=null,ps=!1,Gr=Ue(t,i),Ed=!1,kr=Ai=Td=tr=ms=_n=0,hi=ll=null,wd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Xe(l),h=1<<f;i|=t[f],l&=~h}return Fa=i,ac(),s}function Jg(t,i){vt=null,B.H=el,i===Ur||i===dc?(i=p0(),jt=3):i===Of?(i=p0(),jt=4):jt=i===ld?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,wi=i,Et===null&&(_n=1,wc(t,Ii(i,t.current)))}function $g(){var t=Ei.current;return t===null?!0:(At&4194048)===At?Hi===null:(At&62914560)===At||(At&536870912)!==0?t===Hi:!1}function ex(){var t=B.H;return B.H=el,t===null?el:t}function tx(){var t=B.A;return B.A=eb,t}function Bc(){_n=4,ps||(At&4194048)!==At&&Ei.current!==null||(Gr=!0),(ms&134217727)===0&&(tr&134217727)===0||sn===null||_s(sn,At,Ai,!1)}function Dd(t,i,s){var l=Gt;Gt|=2;var f=ex(),h=tx();(sn!==t||At!==i)&&(Ic=null,Yr(t,i)),i=!1;var b=_n;e:do try{if(jt!==0&&Et!==null){var D=Et,W=wi;switch(jt){case 8:Ld(),b=6;break e;case 3:case 2:case 9:case 6:Ei.current===null&&(i=!0);var ce=jt;if(jt=0,wi=null,Xr(t,D,W,ce),s&&Gr){b=0;break e}break;default:ce=jt,jt=0,wi=null,Xr(t,D,W,ce)}}ib(),b=_n;break}catch(Se){Jg(t,Se)}while(!0);return i&&t.shellSuspendCounter++,Aa=Ws=null,Gt=l,B.H=f,B.A=h,Et===null&&(sn=null,At=0,ac()),b}function ib(){for(;Et!==null;)nx(Et)}function ab(t,i){var s=Gt;Gt|=2;var l=ex(),f=tx();sn!==t||At!==i?(Ic=null,Pc=Ht()+500,Yr(t,i)):Gr=Ue(t,i);e:do try{if(jt!==0&&Et!==null){i=Et;var h=wi;t:switch(jt){case 1:jt=0,wi=null,Xr(t,i,h,1);break;case 2:case 9:if(d0(h)){jt=0,wi=null,ix(i);break}i=function(){jt!==2&&jt!==9||sn!==t||(jt=7),fa(t)},h.then(i,i);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:d0(h)?(jt=0,wi=null,ix(i)):(jt=0,wi=null,Xr(t,i,h,7));break;case 5:var b=null;switch(Et.tag){case 26:b=Et.memoizedState;case 5:case 27:var D=Et;if(b?kx(b):D.stateNode.complete){jt=0,wi=null;var W=D.sibling;if(W!==null)Et=W;else{var ce=D.return;ce!==null?(Et=ce,zc(ce)):Et=null}break t}}jt=0,wi=null,Xr(t,i,h,5);break;case 6:jt=0,wi=null,Xr(t,i,h,6);break;case 8:Ld(),_n=6;break e;default:throw Error(a(462))}}sb();break}catch(Se){Jg(t,Se)}while(!0);return Aa=Ws=null,B.H=l,B.A=f,Gt=s,Et!==null?0:(sn=null,At=0,ac(),_n)}function sb(){for(;Et!==null&&!nn();)nx(Et)}function nx(t){var i=wg(t.alternate,t,Fa);t.memoizedProps=t.pendingProps,i===null?zc(t):Et=i}function ix(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=yg(s,i,i.pendingProps,i.type,void 0,At);break;case 11:i=yg(s,i,i.pendingProps,i.type.render,i.ref,At);break;case 5:Wf(i);default:Cg(s,i),i=Et=t0(i,Fa),i=wg(s,i,Fa)}t.memoizedProps=t.pendingProps,i===null?zc(t):Et=i}function Xr(t,i,s,l){Aa=Ws=null,Wf(i),Or=null,Wo=0;var f=i.return;try{if(qM(t,f,i,s,At)){_n=1,wc(t,Ii(s,t.current)),Et=null;return}}catch(h){if(f!==null)throw Et=f,h;_n=1,wc(t,Ii(s,t.current)),Et=null;return}i.flags&32768?(Dt||l===1?t=!0:Gr||(At&536870912)!==0?t=!1:(ps=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),ax(i,t)):zc(i)}function zc(t){var i=t;do{if((i.flags&32768)!==0){ax(i,ps);return}t=i.return;var s=KM(i.alternate,i,Fa);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);_n===0&&(_n=5)}function ax(t,i){do{var s=QM(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);_n=6,Et=null}function sx(t,i,s,l,f,h,b,D,W){t.cancelPendingCommit=null;do Hc();while(Ln!==0);if((Gt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=vf,hn(t,s,h,b,D,W),t===sn&&(Et=sn=null,At=0),Vr=i,xs=t,Ba=s,Ad=h,Cd=f,jg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cb(ne,function(){return ux(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=q.p,q.p=2,b=Gt,Gt|=4;try{JM(t,i,s)}finally{Gt=b,q.p=f,B.T=l}}Ln=1,rx(),ox(),lx()}}function rx(){if(Ln===1){Ln=0;var t=xs,i=Vr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=q.p;q.p=2;var f=Gt;Gt|=4;try{Hg(i,t);var h=Vd,b=Wm(t.containerInfo),D=h.focusedElem,W=h.selectionRange;if(b!==D&&D&&D.ownerDocument&&Xm(D.ownerDocument.documentElement,D)){if(W!==null&&pf(D)){var ce=W.start,Se=W.end;if(Se===void 0&&(Se=ce),"selectionStart"in D)D.selectionStart=ce,D.selectionEnd=Math.min(Se,D.value.length);else{var Te=D.ownerDocument||document,pe=Te&&Te.defaultView||window;if(pe.getSelection){var ge=pe.getSelection(),$e=D.textContent.length,ft=Math.min(W.start,$e),en=W.end===void 0?ft:Math.min(W.end,$e);!ge.extend&&ft>en&&(b=en,en=ft,ft=b);var te=Ym(D,ft),j=Ym(D,en);if(te&&j&&(ge.rangeCount!==1||ge.anchorNode!==te.node||ge.anchorOffset!==te.offset||ge.focusNode!==j.node||ge.focusOffset!==j.offset)){var oe=Te.createRange();oe.setStart(te.node,te.offset),ge.removeAllRanges(),ft>en?(ge.addRange(oe),ge.extend(j.node,j.offset)):(oe.setEnd(j.node,j.offset),ge.addRange(oe))}}}}for(Te=[],ge=D;ge=ge.parentNode;)ge.nodeType===1&&Te.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Te.length;D++){var be=Te[D];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Jc=!!kd,Vd=kd=null}finally{Gt=f,q.p=l,B.T=s}}t.current=i,Ln=2}}function ox(){if(Ln===2){Ln=0;var t=xs,i=Vr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=q.p;q.p=2;var f=Gt;Gt|=4;try{Pg(t,i.alternate,i)}finally{Gt=f,q.p=l,B.T=s}}Ln=3}}function lx(){if(Ln===4||Ln===3){Ln=0,J();var t=xs,i=Vr,s=Ba,l=jg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,Vr=xs=null,cx(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(gs=null),Do(s),i=i.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ve,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=q.p,q.p=2,B.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var D=l[b];h(D.value,{componentStack:D.stack})}}finally{B.T=i,q.p=f}}(Ba&3)!==0&&Hc(),fa(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Rd?cl++:(cl=0,Rd=t):cl=0,ul(0)}}function cx(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Yo(i)))}function Hc(){return rx(),ox(),lx(),ux()}function ux(){if(Ln!==5)return!1;var t=xs,i=Ad;Ad=0;var s=Do(Ba),l=B.T,f=q.p;try{q.p=32>s?32:s,B.T=null,s=Cd,Cd=null;var h=xs,b=Ba;if(Ln=0,Vr=xs=null,Ba=0,(Gt&6)!==0)throw Error(a(331));var D=Gt;if(Gt|=4,Xg(h.current),kg(h,h.current,b,s),Gt=D,ul(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ve,h)}catch{}return!0}finally{q.p=f,B.T=l,cx(t,i)}}function fx(t,i,s){i=Ii(s,i),i=od(t.stateNode,i,2),t=us(t,i,2),t!==null&&(Ze(t,2),fa(t))}function Zt(t,i,s){if(t.tag===3)fx(t,t,s);else for(;i!==null;){if(i.tag===3){fx(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gs===null||!gs.has(l))){t=Ii(s,t),s=dg(2),l=us(i,s,2),l!==null&&(hg(s,l,i,t),Ze(l,2),fa(l));break}}i=i.return}}function Nd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new tb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Ed=!0,f.add(s),t=rb.bind(null,t,i,s),i.then(t,t))}function rb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,sn===t&&(At&s)===s&&(_n===4||_n===3&&(At&62914560)===At&&300>Ht()-Oc?(Gt&2)===0&&Yr(t,0):Td|=s,kr===At&&(kr=0)),fa(t)}function dx(t,i){i===0&&(i=Ae()),t=Vs(t,i),t!==null&&(Ze(t,i),fa(t))}function ob(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),dx(t,s)}function lb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),dx(t,s)}function cb(t,i){return Lt(t,i)}var Gc=null,Wr=null,Ud=!1,kc=!1,Od=!1,vs=0;function fa(t){t!==Wr&&t.next===null&&(Wr===null?Gc=Wr=t:Wr=Wr.next=t),kc=!0,Ud||(Ud=!0,fb())}function ul(t,i){if(!Od&&kc){Od=!0;do for(var s=!1,l=Gc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,D=l.pingedLanes;h=(1<<31-Xe(42|t)+1)-1,h&=f&~(b&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,gx(l,h))}else h=At,h=Me(l,l===sn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ue(l,h)||(s=!0,gx(l,h));l=l.next}while(s);Od=!1}}function ub(){hx()}function hx(){kc=Ud=!1;var t=0;vs!==0&&Sb()&&(t=vs);for(var i=Ht(),s=null,l=Gc;l!==null;){var f=l.next,h=px(l,i);h===0?(l.next=null,s===null?Gc=f:s.next=f,f===null&&(Wr=s)):(s=l,(t!==0||(h&3)!==0)&&(kc=!0)),l=f}Ln!==0&&Ln!==5||ul(t),vs!==0&&(vs=0)}function px(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-Xe(h),D=1<<b,W=f[b];W===-1?((D&s)===0||(D&l)!==0)&&(f[b]=Ge(D,i)):W<=i&&(t.expiredLanes|=D),h&=~D}if(i=sn,s=At,s=Me(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Nt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Nt(l),Do(s)){case 2:case 8:s=w;break;case 32:s=ne;break;case 268435456:s=_e;break;default:s=ne}return l=mx.bind(null,t),s=Lt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Nt(l),t.callbackPriority=2,t.callbackNode=null,2}function mx(t,i){if(Ln!==0&&Ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Hc()&&t.callbackNode!==s)return null;var l=At;return l=Me(t,t===sn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Kg(t,l,i),px(t,Ht()),t.callbackNode!=null&&t.callbackNode===s?mx.bind(null,t):null)}function gx(t,i){if(Hc())return null;Kg(t,i,!0)}function fb(){bb(function(){(Gt&6)!==0?Lt(z,ub):hx()})}function Pd(){if(vs===0){var t=Dr;t===0&&(t=st,st<<=1,(st&261888)===0&&(st=256)),vs=t}return vs}function xx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zs(""+t)}function _x(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function db(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=xx((f[Hn]||null).action),b=l.submitter;b&&(i=(i=b[Hn]||null)?xx(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var D=new ec("action","action",null,l,f);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(vs!==0){var W=b?_x(f,b):new FormData(f);td(s,{pending:!0,data:W,method:f.method,action:h},null,W)}}else typeof h=="function"&&(D.preventDefault(),W=b?_x(f,b):new FormData(f),td(s,{pending:!0,data:W,method:f.method,action:h},h,W))},currentTarget:f}]})}}for(var Id=0;Id<_f.length;Id++){var Fd=_f[Id],hb=Fd.toLowerCase(),pb=Fd[0].toUpperCase()+Fd.slice(1);qi(hb,"on"+pb)}qi(Zm,"onAnimationEnd"),qi(Km,"onAnimationIteration"),qi(Qm,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(LM,"onTransitionRun"),qi(DM,"onTransitionStart"),qi(NM,"onTransitionCancel"),qi(Jm,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function vx(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var D=l[b],W=D.instance,ce=D.currentTarget;if(D=D.listener,W!==h&&f.isPropagationStopped())break e;h=D,f.currentTarget=ce;try{h(f)}catch(Se){ic(Se)}f.currentTarget=null,h=W}else for(b=0;b<l.length;b++){if(D=l[b],W=D.instance,ce=D.currentTarget,D=D.listener,W!==h&&f.isPropagationStopped())break e;h=D,f.currentTarget=ce;try{h(f)}catch(Se){ic(Se)}f.currentTarget=null,h=W}}}}function Tt(t,i){var s=i[Is];s===void 0&&(s=i[Is]=new Set);var l=t+"__bubble";s.has(l)||(yx(i,t,2,!1),s.add(l))}function Bd(t,i,s){var l=0;i&&(l|=4),yx(s,t,l,i)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function zd(t){if(!t[Vc]){t[Vc]=!0,Kl.forEach(function(s){s!=="selectionchange"&&(mb.has(s)||Bd(s,!1,t),Bd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Vc]||(i[Vc]=!0,Bd("selectionchange",!1,i))}}function yx(t,i,s,l){switch(Zx(i)){case 2:var f=Vb;break;case 8:f=Yb;break;default:f=eh}s=f.bind(null,i,s,t),f=void 0,!sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Hd(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var D=l.stateNode.containerInfo;if(D===f)break;if(b===4)for(b=l.return;b!==null;){var W=b.tag;if((W===3||W===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;D!==null;){if(b=Sa(D),b===null)return;if(W=b.tag,W===5||W===6||W===26||W===27){l=h=b;continue e}D=D.parentNode}}l=l.return}Tm(function(){var ce=h,Se=nf(s),Te=[];e:{var pe=$m.get(t);if(pe!==void 0){var ge=ec,$e=t;switch(t){case"keypress":if(Jl(s)===0)break e;case"keydown":case"keyup":ge=lM;break;case"focusin":$e="focus",ge=cf;break;case"focusout":$e="blur",ge=cf;break;case"beforeblur":case"afterblur":ge=cf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=KS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=fM;break;case Zm:case Km:case Qm:ge=$S;break;case Jm:ge=hM;break;case"scroll":case"scrollend":ge=jS;break;case"wheel":ge=mM;break;case"copy":case"cut":case"paste":ge=tM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Lm;break;case"toggle":case"beforetoggle":ge=xM}var ft=(i&4)!==0,en=!ft&&(t==="scroll"||t==="scrollend"),te=ft?pe!==null?pe+"Capture":null:pe;ft=[];for(var j=ce,oe;j!==null;){var be=j;if(oe=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||oe===null||te===null||(be=Uo(j,te),be!=null&&ft.push(dl(j,be,oe))),en)break;j=j.return}0<ft.length&&(pe=new ge(pe,$e,null,s,Se),Te.push({event:pe,listeners:ft}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",pe&&s!==tf&&($e=s.relatedTarget||s.fromElement)&&(Sa($e)||$e[li]))break e;if((ge||pe)&&(pe=Se.window===Se?Se:(pe=Se.ownerDocument)?pe.defaultView||pe.parentWindow:window,ge?($e=s.relatedTarget||s.toElement,ge=ce,$e=$e?Sa($e):null,$e!==null&&(en=c($e),ft=$e.tag,$e!==en||ft!==5&&ft!==27&&ft!==6)&&($e=null)):(ge=null,$e=ce),ge!==$e)){if(ft=Cm,be="onMouseLeave",te="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ft=Lm,be="onPointerLeave",te="onPointerEnter",j="pointer"),en=ge==null?pe:Bs(ge),oe=$e==null?pe:Bs($e),pe=new ft(be,j+"leave",ge,s,Se),pe.target=en,pe.relatedTarget=oe,be=null,Sa(Se)===ce&&(ft=new ft(te,j+"enter",$e,s,Se),ft.target=oe,ft.relatedTarget=en,be=ft),en=be,ge&&$e)t:{for(ft=gb,te=ge,j=$e,oe=0,be=te;be;be=ft(be))oe++;be=0;for(var ot=j;ot;ot=ft(ot))be++;for(;0<oe-be;)te=ft(te),oe--;for(;0<be-oe;)j=ft(j),be--;for(;oe--;){if(te===j||j!==null&&te===j.alternate){ft=te;break t}te=ft(te),j=ft(j)}ft=null}else ft=null;ge!==null&&Sx(Te,pe,ge,ft,!1),$e!==null&&en!==null&&Sx(Te,en,$e,ft,!0)}}e:{if(pe=ce?Bs(ce):window,ge=pe.nodeName&&pe.nodeName.toLowerCase(),ge==="select"||ge==="input"&&pe.type==="file")var Ft=Bm;else if(Im(pe))if(zm)Ft=AM;else{Ft=TM;var tt=EM}else ge=pe.nodeName,!ge||ge.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?ce&&kt(ce.elementType)&&(Ft=Bm):Ft=wM;if(Ft&&(Ft=Ft(t,ce))){Fm(Te,Ft,s,Se);break e}tt&&tt(t,pe,ce),t==="focusout"&&ce&&pe.type==="number"&&ce.memoizedProps.value!=null&&bt(pe,"number",pe.value)}switch(tt=ce?Bs(ce):window,t){case"focusin":(Im(tt)||tt.contentEditable==="true")&&(br=tt,mf=ce,Go=null);break;case"focusout":Go=mf=br=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,qm(Te,s,Se);break;case"selectionchange":if(RM)break;case"keydown":case"keyup":qm(Te,s,Se)}var yt;if(ff)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Mr?Om(t,s)&&(Ct="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ct="onCompositionStart");Ct&&(Dm&&s.locale!=="ko"&&(Mr||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Mr&&(yt=wm()):(is=Se,rf="value"in is?is.value:is.textContent,Mr=!0)),tt=Yc(ce,Ct),0<tt.length&&(Ct=new Rm(Ct,t,null,s,Se),Te.push({event:Ct,listeners:tt}),yt?Ct.data=yt:(yt=Pm(s),yt!==null&&(Ct.data=yt)))),(yt=vM?yM(t,s):SM(t,s))&&(Ct=Yc(ce,"onBeforeInput"),0<Ct.length&&(tt=new Rm("onBeforeInput","beforeinput",null,s,Se),Te.push({event:tt,listeners:Ct}),tt.data=yt)),db(Te,t,ce,s,Se)}vx(Te,i)})}function dl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Yc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Uo(t,s),f!=null&&l.unshift(dl(t,f,h)),f=Uo(t,i),f!=null&&l.push(dl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function gb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sx(t,i,s,l,f){for(var h=i._reactName,b=[];s!==null&&s!==l;){var D=s,W=D.alternate,ce=D.stateNode;if(D=D.tag,W!==null&&W===l)break;D!==5&&D!==26&&D!==27||ce===null||(W=ce,f?(ce=Uo(s,h),ce!=null&&b.unshift(dl(s,ce,W))):f||(ce=Uo(s,h),ce!=null&&b.push(dl(s,ce,W)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var xb=/\r\n?/g,_b=/\u0000|\uFFFD/g;function Mx(t){return(typeof t=="string"?t:""+t).replace(xb,`
`).replace(_b,"")}function bx(t,i){return i=Mx(i),Mx(t)===i}function $t(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Si(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Si(t,""+l);break;case"className":Je(t,"class",l);break;case"tabIndex":Je(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,s,l);break;case"style":Wi(t,l,h);break;case"data":if(i!=="object"){Je(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&$t(t,i,"name",f.name,f,null),$t(t,i,"formEncType",f.formEncType,f,null),$t(t,i,"formMethod",f.formMethod,f,null),$t(t,i,"formTarget",f.formTarget,f,null)):($t(t,i,"encType",f.encType,f,null),$t(t,i,"method",f.method,f,null),$t(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ba);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=zs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Ie(t,"popover",l);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ie(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=oa.get(s)||s,Ie(t,s,l))}}function Gd(t,i,s,l,f,h){switch(s){case"style":Wi(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Si(t,l):(typeof l=="number"||typeof l=="bigint")&&Si(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ba);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[Hn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ie(t,s,l)}}}function Yn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$t(t,i,h,b,s,null)}}f&&$t(t,i,"srcSet",s.srcSet,s,null),l&&$t(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var D=h=b=f=null,W=null,ce=null;for(l in s)if(s.hasOwnProperty(l)){var Se=s[l];if(Se!=null)switch(l){case"name":f=Se;break;case"type":b=Se;break;case"checked":W=Se;break;case"defaultChecked":ce=Se;break;case"value":h=Se;break;case"defaultValue":D=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,i));break;default:$t(t,i,l,Se,s,null)}}qn(t,h,D,W,ce,b,f,!1);return;case"select":Tt("invalid",t),l=b=h=null;for(f in s)if(s.hasOwnProperty(f)&&(D=s[f],D!=null))switch(f){case"value":h=D;break;case"defaultValue":b=D;break;case"multiple":l=D;default:$t(t,i,f,D,s,null)}i=h,s=b,t.multiple=!!l,i!=null?Rn(t,!!l,i,!1):s!=null&&Rn(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),h=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(D=s[b],D!=null))switch(b){case"value":l=D;break;case"defaultValue":f=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:$t(t,i,b,D,s,null)}Xi(t,l,f,h);return;case"option":for(W in s)s.hasOwnProperty(W)&&(l=s[W],l!=null)&&(W==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":$t(t,i,W,l,s,null));return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)Tt(fl[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in s)if(s.hasOwnProperty(ce)&&(l=s[ce],l!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$t(t,i,ce,l,s,null)}return;default:if(kt(i)){for(Se in s)s.hasOwnProperty(Se)&&(l=s[Se],l!==void 0&&Gd(t,i,Se,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&$t(t,i,D,l,s,null))}function vb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,D=null,W=null,ce=null,Se=null;for(ge in s){var Te=s[ge];if(s.hasOwnProperty(ge)&&Te!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":W=Te;default:l.hasOwnProperty(ge)||$t(t,i,ge,null,l,Te)}}for(var pe in l){var ge=l[pe];if(Te=s[pe],l.hasOwnProperty(pe)&&(ge!=null||Te!=null))switch(pe){case"type":h=ge;break;case"name":f=ge;break;case"checked":ce=ge;break;case"defaultChecked":Se=ge;break;case"value":b=ge;break;case"defaultValue":D=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:ge!==Te&&$t(t,i,pe,ge,l,Te)}}We(t,b,D,W,ce,Se,h,f);return;case"select":ge=b=D=pe=null;for(h in s)if(W=s[h],s.hasOwnProperty(h)&&W!=null)switch(h){case"value":break;case"multiple":ge=W;default:l.hasOwnProperty(h)||$t(t,i,h,null,l,W)}for(f in l)if(h=l[f],W=s[f],l.hasOwnProperty(f)&&(h!=null||W!=null))switch(f){case"value":pe=h;break;case"defaultValue":D=h;break;case"multiple":b=h;default:h!==W&&$t(t,i,f,h,l,W)}i=D,s=b,l=ge,pe!=null?Rn(t,!!s,pe,!1):!!l!=!!s&&(i!=null?Rn(t,!!s,i,!0):Rn(t,!!s,s?[]:"",!1));return;case"textarea":ge=pe=null;for(D in s)if(f=s[D],s.hasOwnProperty(D)&&f!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:$t(t,i,D,null,l,f)}for(b in l)if(f=l[b],h=s[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":pe=f;break;case"defaultValue":ge=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&$t(t,i,b,f,l,h)}yi(t,pe,ge);return;case"option":for(var $e in s)pe=s[$e],s.hasOwnProperty($e)&&pe!=null&&!l.hasOwnProperty($e)&&($e==="selected"?t.selected=!1:$t(t,i,$e,null,l,pe));for(W in l)pe=l[W],ge=s[W],l.hasOwnProperty(W)&&pe!==ge&&(pe!=null||ge!=null)&&(W==="selected"?t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol":$t(t,i,W,pe,l,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in s)pe=s[ft],s.hasOwnProperty(ft)&&pe!=null&&!l.hasOwnProperty(ft)&&$t(t,i,ft,null,l,pe);for(ce in l)if(pe=l[ce],ge=s[ce],l.hasOwnProperty(ce)&&pe!==ge&&(pe!=null||ge!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:$t(t,i,ce,pe,l,ge)}return;default:if(kt(i)){for(var en in s)pe=s[en],s.hasOwnProperty(en)&&pe!==void 0&&!l.hasOwnProperty(en)&&Gd(t,i,en,void 0,l,pe);for(Se in l)pe=l[Se],ge=s[Se],!l.hasOwnProperty(Se)||pe===ge||pe===void 0&&ge===void 0||Gd(t,i,Se,pe,l,ge);return}}for(var te in s)pe=s[te],s.hasOwnProperty(te)&&pe!=null&&!l.hasOwnProperty(te)&&$t(t,i,te,null,l,pe);for(Te in l)pe=l[Te],ge=s[Te],!l.hasOwnProperty(Te)||pe===ge||pe==null&&ge==null||$t(t,i,Te,pe,l,ge)}function Ex(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,b=f.initiatorType,D=f.duration;if(h&&D&&Ex(b)){for(b=0,D=f.responseEnd,l+=1;l<s.length;l++){var W=s[l],ce=W.startTime;if(ce>D)break;var Se=W.transferSize,Te=W.initiatorType;Se&&Ex(Te)&&(W=W.responseEnd,b+=Se*(W<D?1:(D-ce)/(W-ce)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kd=null,Vd=null;function Xc(t){return t.nodeType===9?t:t.ownerDocument}function Tx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wx(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Yd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xd=null;function Sb(){var t=window.event;return t&&t.type==="popstate"?t===Xd?!1:(Xd=t,!0):(Xd=null,!1)}var Ax=typeof setTimeout=="function"?setTimeout:void 0,Mb=typeof clearTimeout=="function"?clearTimeout:void 0,Cx=typeof Promise=="function"?Promise:void 0,bb=typeof queueMicrotask=="function"?queueMicrotask:typeof Cx<"u"?function(t){return Cx.resolve(null).then(t).catch(Eb)}:Ax;function Eb(t){setTimeout(function(){throw t})}function ys(t){return t==="head"}function Rx(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Kr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")hl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,hl(s);for(var h=s.firstChild;h;){var b=h.nextSibling,D=h.nodeName;h[$a]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&hl(t.ownerDocument.body);s=f}while(s);Kr(i)}function Lx(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Wd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Wd(s),es(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Tb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[$a])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Gi(t.nextSibling),t===null)break}return null}function wb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Gi(t.nextSibling),t===null))return null;return t}function Dx(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Gi(t.nextSibling),t===null))return null;return t}function qd(t){return t.data==="$?"||t.data==="$~"}function jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ab(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Gi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Zd=null;function Nx(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Gi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Ux(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Ox(t,i,s){switch(i=Xc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function hl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);es(t)}var ki=new Map,Px=new Set;function Wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var za=q.d;q.d={f:Cb,r:Rb,D:Lb,C:Db,L:Nb,m:Ub,X:Pb,S:Ob,M:Ib};function Cb(){var t=za.f(),i=Fc();return t||i}function Rb(t){var i=Ma(t);i!==null&&i.tag===5&&i.type==="form"?J0(i):za.r(t)}var qr=typeof document>"u"?null:document;function Ix(t,i,s){var l=qr;if(l&&typeof i=="string"&&i){var f=Wt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Px.has(f)||(Px.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Yn(i,"link",t),bn(i),l.head.appendChild(i)))}}function Lb(t){za.D(t),Ix("dns-prefetch",t,null)}function Db(t,i){za.C(t,i),Ix("preconnect",t,i)}function Nb(t,i,s){za.L(t,i,s);var l=qr;if(l&&t&&i){var f='link[rel="preload"][as="'+Wt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Wt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Wt(s.imageSizes)+'"]')):f+='[href="'+Wt(t)+'"]';var h=f;switch(i){case"style":h=jr(t);break;case"script":h=Zr(t)}ki.has(h)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),ki.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(pl(h))||i==="script"&&l.querySelector(ml(h))||(i=l.createElement("link"),Yn(i,"link",t),bn(i),l.head.appendChild(i)))}}function Ub(t,i){za.m(t,i);var s=qr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Wt(l)+'"][href="'+Wt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Zr(t)}if(!ki.has(h)&&(t=v({rel:"modulepreload",href:t},i),ki.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(h)))return}l=s.createElement("link"),Yn(l,"link",t),bn(l),s.head.appendChild(l)}}}function Ob(t,i,s){za.S(t,i,s);var l=qr;if(l&&t){var f=ts(l).hoistableStyles,h=jr(t);i=i||"default";var b=f.get(h);if(!b){var D={loading:0,preload:null};if(b=l.querySelector(pl(h)))D.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=ki.get(h))&&Kd(t,s);var W=b=l.createElement("link");bn(W),Yn(W,"link",t),W._p=new Promise(function(ce,Se){W.onload=ce,W.onerror=Se}),W.addEventListener("load",function(){D.loading|=1}),W.addEventListener("error",function(){D.loading|=2}),D.loading|=4,qc(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:D},f.set(h,b)}}}function Pb(t,i){za.X(t,i);var s=qr;if(s&&t){var l=ts(s).hoistableScripts,f=Zr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=v({src:t,async:!0},i),(i=ki.get(f))&&Qd(t,i),h=s.createElement("script"),bn(h),Yn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Ib(t,i){za.M(t,i);var s=qr;if(s&&t){var l=ts(s).hoistableScripts,f=Zr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=v({src:t,async:!0,type:"module"},i),(i=ki.get(f))&&Qd(t,i),h=s.createElement("script"),bn(h),Yn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Fx(t,i,s,l){var f=(f=K.current)?Wc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=jr(s.href),s=ts(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=jr(s.href);var h=ts(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(pl(t)))&&!h._p&&(b.instance=h,b.state.loading=5),ki.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ki.set(t,s),h||Fb(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Zr(s),s=ts(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function jr(t){return'href="'+Wt(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function Bx(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Fb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yn(i,"link",s),bn(i),t.head.appendChild(i))}function Zr(t){return'[src="'+Wt(t)+'"]'}function ml(t){return"script[async]"+t}function zx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Wt(s.href)+'"]');if(l)return i.instance=l,bn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),bn(l),Yn(l,"style",f),qc(l,s.precedence,t),i.instance=l;case"stylesheet":f=jr(s.href);var h=t.querySelector(pl(f));if(h)return i.state.loading|=4,i.instance=h,bn(h),h;l=Bx(s),(f=ki.get(f))&&Kd(l,f),h=(t.ownerDocument||t).createElement("link"),bn(h);var b=h;return b._p=new Promise(function(D,W){b.onload=D,b.onerror=W}),Yn(h,"link",l),i.state.loading|=4,qc(h,s.precedence,t),i.instance=h;case"script":return h=Zr(s.src),(f=t.querySelector(ml(h)))?(i.instance=f,bn(f),f):(l=s,(f=ki.get(h))&&(l=v({},s),Qd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),bn(f),Yn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,qc(l,s.precedence,t));return i.instance}function qc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var D=l[b];if(D.dataset.precedence===i)h=D;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Kd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Qd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var jc=null;function Hx(t,i,s){if(jc===null){var l=new Map,f=jc=new Map;f.set(s,l)}else f=jc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[$a]||h[Mn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var D=l.get(b);D?D.push(h):l.set(b,[h])}}return l}function Gx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Bb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function kx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zb(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=jr(l.href),h=i.querySelector(pl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Zc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,bn(h);return}h=i.ownerDocument||i,l=Bx(l),(f=ki.get(f))&&Kd(l,f),h=h.createElement("link"),bn(h);var b=h;b._p=new Promise(function(D,W){b.onload=D,b.onerror=W}),Yn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Zc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Jd=0;function Hb(t,i){return t.stylesheets&&t.count===0&&Qc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Qc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Jd===0&&(Jd=62500*yb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Jd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kc=null;function Qc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kc=new Map,i.forEach(Gb,t),Kc=null,Zc.call(t))}function Gb(t,i){if(!(i.state.loading&4)){var s=Kc.get(t);if(s)var l=s.get(null);else{s=new Map,Kc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,f),s.set(b,f),this.count++,l=Zc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var gl={$$typeof:U,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function kb(t,i,s,l,f,h,b,D,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function Vx(t,i,s,l,f,h,b,D,W,ce,Se,Te){return t=new kb(t,i,s,b,W,ce,Se,Te,D),i=1,h===!0&&(i|=24),h=bi(3,null,null,i),t.current=h,h.stateNode=t,i=Df(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Pf(h),t}function Yx(t){return t?(t=wr,t):wr}function Xx(t,i,s,l,f,h){f=Yx(f),l.context===null?l.context=f:l.pendingContext=f,l=cs(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=us(t,l,i),s!==null&&(pi(s,t,i),jo(s,t,i))}function Wx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function $d(t,i){Wx(t,i),(t=t.alternate)&&Wx(t,i)}function qx(t){if(t.tag===13||t.tag===31){var i=Vs(t,67108864);i!==null&&pi(i,t,67108864),$d(t,67108864)}}function jx(t){if(t.tag===13||t.tag===31){var i=Ci();i=Lo(i);var s=Vs(t,i);s!==null&&pi(s,t,i),$d(t,i)}}var Jc=!0;function Vb(t,i,s,l){var f=B.T;B.T=null;var h=q.p;try{q.p=2,eh(t,i,s,l)}finally{q.p=h,B.T=f}}function Yb(t,i,s,l){var f=B.T;B.T=null;var h=q.p;try{q.p=8,eh(t,i,s,l)}finally{q.p=h,B.T=f}}function eh(t,i,s,l){if(Jc){var f=th(l);if(f===null)Hd(t,i,l,$c,s),Kx(t,l);else if(Wb(f,t,i,s,l))l.stopPropagation();else if(Kx(t,l),i&4&&-1<Xb.indexOf(t)){for(;f!==null;){var h=Ma(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Le(h.pendingLanes);if(b!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;b;){var W=1<<31-Xe(b);D.entanglements[1]|=W,b&=~W}fa(h),(Gt&6)===0&&(Pc=Ht()+500,ul(0))}}break;case 31:case 13:D=Vs(h,2),D!==null&&pi(D,h,2),Fc(),$d(h,2)}if(h=th(l),h===null&&Hd(t,i,l,$c,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Hd(t,i,l,null,s)}}function th(t){return t=nf(t),nh(t)}var $c=null;function nh(t){if($c=null,t=Sa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return $c=t,null}function Zx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case z:return 2;case w:return 8;case ne:case de:return 32;case _e:return 268435456;default:return 32}default:return 32}}var ih=!1,Ss=null,Ms=null,bs=null,xl=new Map,_l=new Map,Es=[],Xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kx(t,i){switch(t){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":xl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(i.pointerId)}}function vl(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Ma(i),i!==null&&qx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Wb(t,i,s,l,f){switch(i){case"focusin":return Ss=vl(Ss,t,i,s,l,f),!0;case"dragenter":return Ms=vl(Ms,t,i,s,l,f),!0;case"mouseover":return bs=vl(bs,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return xl.set(h,vl(xl.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,_l.set(h,vl(_l.get(h)||null,t,i,s,l,f)),!0}return!1}function Qx(t){var i=Sa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,vr(t.priority,function(){jx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,vr(t.priority,function(){jx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=th(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);tf=l,s.target.dispatchEvent(l),tf=null}else return i=Ma(s),i!==null&&qx(i),t.blockedOn=s,!1;i.shift()}return!0}function Jx(t,i,s){eu(t)&&s.delete(i)}function qb(){ih=!1,Ss!==null&&eu(Ss)&&(Ss=null),Ms!==null&&eu(Ms)&&(Ms=null),bs!==null&&eu(bs)&&(bs=null),xl.forEach(Jx),_l.forEach(Jx)}function tu(t,i){t.blockedOn===i&&(t.blockedOn=null,ih||(ih=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qb)))}var nu=null;function $x(t){nu!==t&&(nu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){nu===t&&(nu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(nh(l||s)===null)continue;break}var h=Ma(s);h!==null&&(t.splice(i,3),i-=3,td(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Kr(t){function i(W){return tu(W,t)}Ss!==null&&tu(Ss,t),Ms!==null&&tu(Ms,t),bs!==null&&tu(bs,t),xl.forEach(i),_l.forEach(i);for(var s=0;s<Es.length;s++){var l=Es[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Es.length&&(s=Es[0],s.blockedOn===null);)Qx(s),s.blockedOn===null&&Es.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],b=f[Hn]||null;if(typeof h=="function")b||$x(s);else if(b){var D=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[Hn]||null)D=b.formAction;else if(nh(f)!==null)continue}else D=b.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),$x(s)}}}function e_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function ah(t){this._internalRoot=t}iu.prototype.render=ah.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Ci();Xx(s,l,t,i,null,null)},iu.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Xx(t.current,2,null,t,null,null),Fc(),i[li]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var i=No();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Es.length&&i!==0&&i<Es[s].priority;s++);Es.splice(s,0,t),s===0&&Qx(t)}};var t_=e.version;if(t_!=="19.2.6")throw Error(a(527,t_,"19.2.6"));q.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var jb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{ve=au.inject(jb),ye=au}catch{}}return Sl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=lg,h=cg,b=ug;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Vx(t,1,!1,null,null,s,l,null,f,h,b,e_),t[li]=i.current,zd(t),new ah(i)},Sl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=lg,b=cg,D=ug,W=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(W=s.formState)),i=Vx(t,1,!0,i,s??null,l,f,W,h,b,D,e_),i.context=Yx(null),s=i.current,l=Ci(),l=Lo(l),f=cs(l),f.callback=null,us(s,f,l),s=l,i.current.lanes=s,Ze(i,s),fa(i),t[li]=i.current,zd(t),new iu(i)},Sl.version="19.2.6",Sl}var f_;function a2(){if(f_)return oh.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),oh.exports=i2(),oh.exports}var s2=a2(),r2=Lv();const Zp="185",o2=0,d_=1,l2=2,Pl=1,c2=2,Ul=3,Za=0,ri=1,ta=2,_a=0,xo=1,Hu=2,h_=3,p_=4,u2=5,rr=100,f2=101,d2=102,h2=103,p2=104,m2=200,g2=201,x2=202,_2=203,ep=204,tp=205,v2=206,y2=207,S2=208,M2=209,b2=210,E2=211,T2=212,w2=213,A2=214,np=0,ip=1,ap=2,So=3,sp=4,rp=5,op=6,lp=7,Dv=0,C2=1,R2=2,va=0,Kp=1,Qp=2,Jp=3,Xu=4,$p=5,em=6,tm=7,Nv=300,fr=301,Mo=302,fh=303,dh=304,Wu=306,Kt=1e3,Xn=1001,cp=1002,Wn=1003,L2=1004,su=1005,Jn=1006,hh=1007,lr=1008,Ui=1009,Uv=1010,Ov=1011,Gl=1012,nm=1013,ya=1014,aa=1015,xi=1016,im=1017,am=1018,kl=1020,Pv=35902,Iv=35899,Fv=1021,Bv=1022,sa=1023,Ka=1026,cr=1027,sm=1028,rm=1029,dr=1030,om=1031,lm=1033,Uu=33776,Ou=33777,Pu=33778,Iu=33779,up=35840,fp=35841,dp=35842,hp=35843,pp=36196,mp=37492,gp=37496,xp=37488,_p=37489,Gu=37490,vp=37491,yp=37808,Sp=37809,Mp=37810,bp=37811,Ep=37812,Tp=37813,wp=37814,Ap=37815,Cp=37816,Rp=37817,Lp=37818,Dp=37819,Np=37820,Up=37821,Op=36492,Pp=36494,Ip=36495,Fp=36283,Bp=36284,ku=36285,zp=36286,D2=3200,Hp=0,N2=1,qa="",mi="srgb",Vu="srgb-linear",Yu="linear",Vt="srgb",Qr=7680,m_=519,U2=512,O2=513,P2=514,cm=515,I2=516,F2=517,um=518,B2=519,g_=35044,z2=35048,x_="300 es",xa=2e3,Vl=2001;function H2(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function G2(){const r=Yl("canvas");return r.style.display="block",r}const __={};function v_(...r){const e="THREE."+r.shift();console.log(e,...r)}function zv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function pt(...r){r=zv(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Ot(...r){r=zv(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function _o(...r){const e=r.join(" ");e in __||(__[e]=!0,pt(...r))}function k2(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const V2={[np]:ip,[ap]:op,[sp]:lp,[So]:rp,[ip]:np,[op]:ap,[lp]:sp,[rp]:So};class hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let y_=1234567;const Il=Math.PI/180,Xl=180/Math.PI;function wo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]).toLowerCase()}function wt(r,e,n){return Math.max(e,Math.min(n,r))}function fm(r,e){return(r%e+e)%e}function Y2(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function X2(r,e,n){return r!==e?(n-r)/(e-r):0}function Fl(r,e,n){return(1-n)*r+n*e}function W2(r,e,n,a){return Fl(r,e,1-Math.exp(-n*a))}function q2(r,e=1){return e-Math.abs(fm(r,e*2)-e)}function j2(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function Z2(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function K2(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Q2(r,e){return r+Math.random()*(e-r)}function J2(r){return r*(.5-Math.random())}function $2(r){r!==void 0&&(y_=r);let e=y_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eE(r){return r*Il}function tE(r){return r*Xl}function nE(r){return(r&r-1)===0&&r!==0}function iE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function aE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sE(r,e,n,a,o){const c=Math.cos,u=Math.sin,d=c(n/2),m=u(n/2),p=c((e+a)/2),_=u((e+a)/2),v=c((e-a)/2),g=u((e-a)/2),M=c((a-e)/2),x=u((a-e)/2);switch(o){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*x,m*M,d*p);break;case"YXY":r.set(m*M,d*_,m*x,d*p);break;case"ZYZ":r.set(m*x,m*M,d*_,d*p);break;default:pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function po(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Kn={DEG2RAD:Il,RAD2DEG:Xl,generateUUID:wo,clamp:wt,euclideanModulo:fm,mapLinear:Y2,inverseLerp:X2,lerp:Fl,damp:W2,pingpong:q2,smoothstep:j2,smootherstep:Z2,randInt:K2,randFloat:Q2,randFloatSpread:J2,seededRandom:$2,degToRad:eE,radToDeg:tE,isPowerOfTwo:nE,ceilPowerOfTwo:iE,floorPowerOfTwo:aE,setQuaternionFromProperEuler:sE,normalize:ii,denormalize:po};class He{static{He.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(wt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],_=a[o+2],v=a[o+3],g=c[u+0],M=c[u+1],x=c[u+2],A=c[u+3];if(v!==A||m!==g||p!==M||_!==x){let y=m*g+p*M+_*x+v*A;y<0&&(g=-g,M=-M,x=-x,A=-A,y=-y);let S=1-d;if(y<.9995){const R=Math.acos(y),U=Math.sin(R);S=Math.sin(S*R)/U,d=Math.sin(d*R)/U,m=m*S+g*d,p=p*S+M*d,_=_*S+x*d,v=v*S+A*d}else{m=m*S+g*d,p=p*S+M*d,_=_*S+x*d,v=v*S+A*d;const R=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=R,p*=R,_*=R,v*=R}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],_=a[o+3],v=c[u],g=c[u+1],M=c[u+2],x=c[u+3];return e[n]=d*x+_*v+m*M-p*g,e[n+1]=m*x+_*g+p*v-d*M,e[n+2]=p*x+_*M+d*g-m*v,e[n+3]=_*x-d*v-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),_=d(o/2),v=d(c/2),g=m(a/2),M=m(o/2),x=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*M*x,this._y=p*M*v-g*_*x,this._z=p*_*x+g*M*v,this._w=p*_*v-g*M*x;break;case"YXZ":this._x=g*_*v+p*M*x,this._y=p*M*v-g*_*x,this._z=p*_*x-g*M*v,this._w=p*_*v+g*M*x;break;case"ZXY":this._x=g*_*v-p*M*x,this._y=p*M*v+g*_*x,this._z=p*_*x+g*M*v,this._w=p*_*v-g*M*x;break;case"ZYX":this._x=g*_*v-p*M*x,this._y=p*M*v+g*_*x,this._z=p*_*x-g*M*v,this._w=p*_*v+g*M*x;break;case"YZX":this._x=g*_*v+p*M*x,this._y=p*M*v+g*_*x,this._z=p*_*x-g*M*v,this._w=p*_*v-g*M*x;break;case"XZY":this._x=g*_*v-p*M*x,this._y=p*M*v-g*_*x,this._z=p*_*x+g*M*v,this._w=p*_*v+g*M*x;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=a+d+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(u-o)*M}else if(a>d&&a>v){const M=2*Math.sqrt(1+a-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-a-v);this._w=(c-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-a-d);this._w=(u-o)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+u*d+o*p-c*m,this._y=o*_+u*m+c*d-a*p,this._z=c*_+u*p+a*m-o*d,this._w=u*_-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{static{k.prototype.isVector3=!0}constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(S_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(S_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),_=2*(d*n-c*o),v=2*(c*a-u*n);return this.x=n+m*p+u*v-d*_,this.y=a+m*_+d*p-c*v,this.z=o+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(wt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new k,S_=new pr;class xt{static{xt.prototype.isMatrix3=!0}constructor(e,n,a,o,c,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],M=a[5],x=a[8],A=o[0],y=o[3],S=o[6],R=o[1],U=o[4],C=o[7],P=o[2],N=o[5],F=o[8];return c[0]=u*A+d*R+m*P,c[3]=u*y+d*U+m*N,c[6]=u*S+d*C+m*F,c[1]=p*A+_*R+v*P,c[4]=p*y+_*U+v*N,c[7]=p*S+_*C+v*F,c[2]=g*A+M*R+x*P,c[5]=g*y+M*U+x*N,c[8]=g*S+M*C+x*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*d*p-a*c*_+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*u-d*p,g=d*m-_*c,M=p*c-u*m,x=n*v+a*g+o*M;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/x;return e[0]=v*A,e[1]=(o*p-_*a)*A,e[2]=(d*a-o*u)*A,e[3]=g*A,e[4]=(_*n-o*m)*A,e[5]=(o*c-d*n)*A,e[6]=M*A,e[7]=(a*m-p*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return _o("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,n)),this}rotate(e){return _o("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,n){return _o("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new xt,M_=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){const r={enabled:!0,workingColorSpace:Vu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Vt&&(o.r=ja(o.r),o.g=ja(o.g),o.b=ja(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Vt&&(o.r=vo(o.r),o.g=vo(o.g),o.b=vo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qa?Yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return _o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return _o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Vu]:{primaries:e,whitePoint:a,transfer:Yu,toXYZ:M_,fromXYZ:b_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:a,transfer:Vt,toXYZ:M_,fromXYZ:b_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const Rt=rE();function ja(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class oE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Jr===void 0&&(Jr=Yl("canvas")),Jr.width=e.width,Jr.height=e.height;const o=Jr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Jr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ja(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ja(n[a]/255)*255):n[a]=ja(n[a]);return{data:n,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lE=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(gh(o[u].image)):c.push(gh(o[u]))}else c=gh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function gh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let cE=0;const xh=new k;class $n extends hr{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,a=Xn,o=Xn,c=Jn,u=lr,d=sa,m=Ui,p=$n.DEFAULT_ANISOTROPY,_=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=wo(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kt:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kt:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Nv;$n.DEFAULT_ANISOTROPY=1;class dn{static{dn.prototype.isVector4=!0}constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],M=m[5],x=m[9],A=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-A)<.01&&Math.abs(x-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+A)<.1&&Math.abs(x+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,C=(M+1)/2,P=(S+1)/2,N=(_+g)/4,F=(v+A)/4,T=(x+y)/4;return U>C&&U>P?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=N/a,c=F/a):C>P?C<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),a=N/o,c=T/o):P<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),a=F/c,o=T/c),this.set(a,o,c,n),this}let R=Math.sqrt((y-x)*(y-x)+(v-A)*(v-A)+(g-_)*(g-_));return Math.abs(R)<.001&&(R=1),this.x=(y-x)/R,this.y=(v-A)/R,this.z=(g-_)/R,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this.w=wt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this.w=wt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends hr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new dn(0,0,e,n),this.scissorTest=!1,this.viewport=new dn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new $n(o),u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new dm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends uE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Hv extends $n{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fE extends $n{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{static{Pt.prototype.isMatrix4=!0}constructor(e,n,a,o,c,u,d,m,p,_,v,g,M,x,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,_,v,g,M,x,A,y)}set(e,n,a,o,c,u,d,m,p,_,v,g,M,x,A,y){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=M,S[7]=x,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/$r.setFromMatrixColumn(e,0).length(),c=1/$r.setFromMatrixColumn(e,1).length(),u=1/$r.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,M=u*v,x=d*_,A=d*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=M+x*p,n[5]=g-A*p,n[9]=-d*m,n[2]=A-g*p,n[6]=x+M*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,M=m*v,x=p*_,A=p*v;n[0]=g+A*d,n[4]=x*d-M,n[8]=u*p,n[1]=u*v,n[5]=u*_,n[9]=-d,n[2]=M*d-x,n[6]=A+g*d,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,M=m*v,x=p*_,A=p*v;n[0]=g-A*d,n[4]=-u*v,n[8]=x+M*d,n[1]=M+x*d,n[5]=u*_,n[9]=A-g*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,M=u*v,x=d*_,A=d*v;n[0]=m*_,n[4]=x*p-M,n[8]=g*p+A,n[1]=m*v,n[5]=A*p+g,n[9]=M*p-x,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,M=u*p,x=d*m,A=d*p;n[0]=m*_,n[4]=A-g*v,n[8]=x*v+M,n[1]=v,n[5]=u*_,n[9]=-d*_,n[2]=-p*_,n[6]=M*v+x,n[10]=g-A*v}else if(e.order==="XZY"){const g=u*m,M=u*p,x=d*m,A=d*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+A,n[5]=u*_,n[9]=M*v-x,n[2]=x*v-M,n[6]=d*_,n[10]=A*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dE,e,hE)}lookAt(e,n,a){const o=this.elements;return Ri.subVectors(e,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),ws.crossVectors(a,Ri),ws.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),ws.crossVectors(a,Ri)),ws.normalize(),ru.crossVectors(Ri,ws),o[0]=ws.x,o[4]=ru.x,o[8]=Ri.x,o[1]=ws.y,o[5]=ru.y,o[9]=Ri.y,o[2]=ws.z,o[6]=ru.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],M=a[13],x=a[2],A=a[6],y=a[10],S=a[14],R=a[3],U=a[7],C=a[11],P=a[15],N=o[0],F=o[4],T=o[8],O=o[12],Y=o[1],V=o[5],X=o[9],le=o[13],ae=o[2],Q=o[6],B=o[10],q=o[14],ee=o[3],re=o[7],G=o[11],E=o[15];return c[0]=u*N+d*Y+m*ae+p*ee,c[4]=u*F+d*V+m*Q+p*re,c[8]=u*T+d*X+m*B+p*G,c[12]=u*O+d*le+m*q+p*E,c[1]=_*N+v*Y+g*ae+M*ee,c[5]=_*F+v*V+g*Q+M*re,c[9]=_*T+v*X+g*B+M*G,c[13]=_*O+v*le+g*q+M*E,c[2]=x*N+A*Y+y*ae+S*ee,c[6]=x*F+A*V+y*Q+S*re,c[10]=x*T+A*X+y*B+S*G,c[14]=x*O+A*le+y*q+S*E,c[3]=R*N+U*Y+C*ae+P*ee,c[7]=R*F+U*V+C*Q+P*re,c[11]=R*T+U*X+C*B+P*G,c[15]=R*O+U*le+C*q+P*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],M=e[14],x=e[3],A=e[7],y=e[11],S=e[15],R=m*M-p*g,U=d*M-p*v,C=d*g-m*v,P=u*M-p*_,N=u*g-m*_,F=u*v-d*_;return n*(A*R-y*U+S*C)-a*(x*R-y*P+S*N)+o*(x*U-A*P+S*F)-c*(x*C-A*N+y*F)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],p=e[6],_=e[10];return n*(u*_-d*p)-a*(c*_-d*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],M=e[11],x=e[12],A=e[13],y=e[14],S=e[15],R=n*d-a*u,U=n*m-o*u,C=n*p-c*u,P=a*m-o*d,N=a*p-c*d,F=o*p-c*m,T=_*A-v*x,O=_*y-g*x,Y=_*S-M*x,V=v*y-g*A,X=v*S-M*A,le=g*S-M*y,ae=R*le-U*X+C*V+P*Y-N*O+F*T;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ae;return e[0]=(d*le-m*X+p*V)*Q,e[1]=(o*X-a*le-c*V)*Q,e[2]=(A*F-y*N+S*P)*Q,e[3]=(g*N-v*F-M*P)*Q,e[4]=(m*Y-u*le-p*O)*Q,e[5]=(n*le-o*Y+c*O)*Q,e[6]=(y*C-x*F-S*U)*Q,e[7]=(_*F-g*C+M*U)*Q,e[8]=(u*X-d*Y+p*T)*Q,e[9]=(a*Y-n*X-c*T)*Q,e[10]=(x*N-A*C+S*R)*Q,e[11]=(v*C-_*N-M*R)*Q,e[12]=(d*O-u*V-m*T)*Q,e[13]=(n*V-a*O+o*T)*Q,e[14]=(A*U-x*P-y*R)*Q,e[15]=(_*P-v*U+g*R)*Q,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,_=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,_*d+a,_*m-o*u,0,p*m-o*d,_*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,_=u+u,v=d+d,g=c*p,M=c*_,x=c*v,A=u*_,y=u*v,S=d*v,R=m*p,U=m*_,C=m*v,P=a.x,N=a.y,F=a.z;return o[0]=(1-(A+S))*P,o[1]=(M+C)*P,o[2]=(x-U)*P,o[3]=0,o[4]=(M-C)*N,o[5]=(1-(g+S))*N,o[6]=(y+R)*N,o[7]=0,o[8]=(x+U)*F,o[9]=(y-R)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=$r.set(o[0],o[1],o[2]).length();const d=$r.set(o[4],o[5],o[6]).length(),m=$r.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ki.copy(this);const p=1/u,_=1/d,v=1/m;return Ki.elements[0]*=p,Ki.elements[1]*=p,Ki.elements[2]*=p,Ki.elements[4]*=_,Ki.elements[5]*=_,Ki.elements[6]*=_,Ki.elements[8]*=v,Ki.elements[9]*=v,Ki.elements[10]*=v,n.setFromRotationMatrix(Ki),a.x=u,a.y=d,a.z=m,this}makePerspective(e,n,a,o,c,u,d=xa,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(a-o),g=(n+e)/(n-e),M=(a+o)/(a-o);let x,A;if(m)x=c/(u-c),A=u*c/(u-c);else if(d===xa)x=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===Vl)x=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=xa,m=!1){const p=this.elements,_=2/(n-e),v=2/(a-o),g=-(n+e)/(n-e),M=-(a+o)/(a-o);let x,A;if(m)x=1/(u-c),A=u/(u-c);else if(d===xa)x=-2/(u-c),A=-(u+c)/(u-c);else if(d===Vl)x=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=x,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const $r=new k,Ki=new Pt,dE=new k(0,0,0),hE=new k(1,1,1),ws=new k,ru=new k,Ri=new k,E_=new Pt,T_=new pr;class Qa{constructor(e=0,n=0,a=0,o=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],_=o[9],v=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return E_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return T_.setFromEuler(this),this.setFromQuaternion(T_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pE=0;const w_=new k,eo=new pr,Ha=new Pt,ou=new k,Ml=new k,mE=new k,gE=new pr,A_=new k(1,0,0),C_=new k(0,1,0),R_=new k(0,0,1),L_={type:"added"},xE={type:"removed"},to={type:"childadded",child:null},_h={type:"childremoved",child:null};class Bn extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new k,n=new Qa,a=new pr,o=new k(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Pt},normalMatrix:{value:new xt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(A_,e)}rotateY(e){return this.rotateOnAxis(C_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,n){return w_.copy(e).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(A_,e)}translateY(e){return this.translateOnAxis(C_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ha.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?ou.copy(e):ou.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ha.lookAt(Ml,ou,this.up):Ha.lookAt(ou,Ml,this.up),this.quaternion.setFromRotationMatrix(Ha),o&&(Ha.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Ha),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),to.child=e,this.dispatchEvent(to),to.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xE),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,mE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,gE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),M=u(e.animations),x=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),M.length>0&&(a.animations=M),x.length>0&&(a.nodes=x)}return a.object=o,a;function u(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Bn.DEFAULT_UP=new k(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class In extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,a),S=this._getHandJoint(p,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,x=.005;p.inputState.pinching&&g>M+x?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-x&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new In;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},lu={h:0,s:0,l:0};function yh(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class ht{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Rt.workingColorSpace){if(e=fm(e,1),n=wt(n,0,1),a=wt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=yh(u,c,e+1/3),this.g=yh(u,c,e),this.b=yh(u,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=mi){function a(c){c!==void 0&&parseFloat(c)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const a=kv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Rt.workingToColorSpace(Qn.copy(this),e),Math.round(wt(Qn.r*255,0,255))*65536+Math.round(wt(Qn.g*255,0,255))*256+Math.round(wt(Qn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Qn.copy(this),n);const a=Qn.r,o=Qn.g,c=Qn.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const _=(d+u)/2;if(d===u)m=0,p=0;else{const v=u-d;switch(p=_<=.5?v/(u+d):v/(2-u-d),u){case a:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-a)/v+2;break;case c:m=(a-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Qn.copy(this),n),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=mi){Rt.workingToColorSpace(Qn.copy(this),e);const n=Qn.r,a=Qn.g,o=Qn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(As),this.setHSL(As.h+e,As.s+n,As.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(As),e.getHSL(lu);const a=Fl(As.h,lu.h,n),o=Fl(As.s,lu.s,n),c=Fl(As.l,lu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qn=new ht;ht.NAMES=kv;class hm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=n}clone(){return new hm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class D_ extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qa,this.environmentIntensity=1,this.environmentRotation=new Qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qi=new k,Ga=new k,Sh=new k,ka=new k,no=new k,io=new k,N_=new k,Mh=new k,bh=new k,Eh=new k,Th=new dn,wh=new dn,Ah=new dn;class na{constructor(e=new k,n=new k,a=new k){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Qi.subVectors(e,n),o.cross(Qi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Qi.subVectors(o,n),Ga.subVectors(a,n),Sh.subVectors(e,n);const u=Qi.dot(Qi),d=Qi.dot(Ga),m=Qi.dot(Sh),p=Ga.dot(Ga),_=Ga.dot(Sh),v=u*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(p*m-d*_)*g,x=(u*_-d*m)*g;return c.set(1-M-x,x,M)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,ka)===null?!1:ka.x>=0&&ka.y>=0&&ka.x+ka.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,ka)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ka.x),m.addScaledVector(u,ka.y),m.addScaledVector(d,ka.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Th.setScalar(0),wh.setScalar(0),Ah.setScalar(0),Th.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,a),Ah.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Th,c.x),u.addScaledVector(wh,c.y),u.addScaledVector(Ah,c.z),u}static isFrontFacing(e,n,a,o){return Qi.subVectors(a,n),Ga.subVectors(e,n),Qi.cross(Ga).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Ga.subVectors(this.a,this.b),Qi.cross(Ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return na.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return na.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return na.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return na.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return na.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;no.subVectors(o,a),io.subVectors(c,a),Mh.subVectors(e,a);const m=no.dot(Mh),p=io.dot(Mh);if(m<=0&&p<=0)return n.copy(a);bh.subVectors(e,o);const _=no.dot(bh),v=io.dot(bh);if(_>=0&&v<=_)return n.copy(o);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(a).addScaledVector(no,u);Eh.subVectors(e,c);const M=no.dot(Eh),x=io.dot(Eh);if(x>=0&&M<=x)return n.copy(c);const A=M*p-m*x;if(A<=0&&p>=0&&x<=0)return d=p/(p-x),n.copy(a).addScaledVector(io,d);const y=_*x-M*v;if(y<=0&&v-_>=0&&M-x>=0)return N_.subVectors(c,o),d=(v-_)/(v-_+(M-x)),n.copy(o).addScaledVector(N_,d);const S=1/(y+A+g);return u=A*S,d=g*S,n.copy(a).addScaledVector(no,u).addScaledVector(io,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mr{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ji):Ji.fromBufferAttribute(c,u),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),cu.copy(a.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bl),uu.subVectors(this.max,bl),ao.subVectors(e.a,bl),so.subVectors(e.b,bl),ro.subVectors(e.c,bl),Cs.subVectors(so,ao),Rs.subVectors(ro,so),nr.subVectors(ao,ro);let n=[0,-Cs.z,Cs.y,0,-Rs.z,Rs.y,0,-nr.z,nr.y,Cs.z,0,-Cs.x,Rs.z,0,-Rs.x,nr.z,0,-nr.x,-Cs.y,Cs.x,0,-Rs.y,Rs.x,0,-nr.y,nr.x,0];return!Ch(n,ao,so,ro,uu)||(n=[1,0,0,0,1,0,0,0,1],!Ch(n,ao,so,ro,uu))?!1:(fu.crossVectors(Cs,Rs),n=[fu.x,fu.y,fu.z],Ch(n,ao,so,ro,uu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Va=[new k,new k,new k,new k,new k,new k,new k,new k],Ji=new k,cu=new mr,ao=new k,so=new k,ro=new k,Cs=new k,Rs=new k,nr=new k,bl=new k,uu=new k,fu=new k,ir=new k;function Ch(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){ir.fromArray(r,c);const d=o.x*Math.abs(ir.x)+o.y*Math.abs(ir.y)+o.z*Math.abs(ir.z),m=e.dot(ir),p=n.dot(ir),_=a.dot(ir);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Cn=new k,du=new He;let vE=0;class Oi extends hr{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=g_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)du.fromBufferAttribute(this,n),du.applyMatrix3(e),this.setXY(n,du.x,du.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix3(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix4(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyNormalMatrix(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.transformDirection(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=po(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=ii(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array),o=ii(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array),o=ii(o,this.array),c=ii(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vv extends Oi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Yv extends Oi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Qt extends Oi{constructor(e,n,a){super(new Float32Array(e),n,a)}}const yE=new mr,El=new k,Rh=new k;class gr{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):yE.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const n=El.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(El,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(Rh)),this.expandByPoint(El.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SE=0;const Vi=new Pt,Lh=new Bn,oo=new k,Li=new mr,Tl=new mr,On=new k;class zn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H2(e)?Yv:Vv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new xt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,n,a){return Vi.makeTranslation(e,n,a),this.applyMatrix4(Vi),this}scale(e,n,a){return Vi.makeScale(e,n,a),this.applyMatrix4(Vi),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qt(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Li.setFromBufferAttribute(c),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const a=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(On.addVectors(Li.min,Tl.min),Li.expandByPoint(On),On.addVectors(Li.max,Tl.max),Li.expandByPoint(On)):(Li.expandByPoint(Tl.min),Li.expandByPoint(Tl.max))}Li.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)On.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(On));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)On.fromBufferAttribute(d,p),m&&(oo.fromBufferAttribute(e,p),On.add(oo)),o=Math.max(o,a.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Oi(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new k,m[T]=new k;const p=new k,_=new k,v=new k,g=new He,M=new He,x=new He,A=new k,y=new k;function S(T,O,Y){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,O),v.fromBufferAttribute(a,Y),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,O),x.fromBufferAttribute(c,Y),_.sub(p),v.sub(p),M.sub(g),x.sub(g);const V=1/(M.x*x.y-x.x*M.y);isFinite(V)&&(A.copy(_).multiplyScalar(x.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-x.x).multiplyScalar(V),d[T].add(A),d[O].add(A),d[Y].add(A),m[T].add(y),m[O].add(y),m[Y].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,O=R.length;T<O;++T){const Y=R[T],V=Y.start,X=Y.count;for(let le=V,ae=V+X;le<ae;le+=3)S(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const U=new k,C=new k,P=new k,N=new k;function F(T){P.fromBufferAttribute(o,T),N.copy(P);const O=d[T];U.copy(O),U.sub(P.multiplyScalar(P.dot(O))).normalize(),C.crossVectors(N,O);const V=C.dot(m[T])<0?-1:1;u.setXYZW(T,U.x,U.y,U.z,V)}for(let T=0,O=R.length;T<O;++T){const Y=R[T],V=Y.start,X=Y.count;for(let le=V,ae=V+X;le<ae;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Oi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,M=a.count;g<M;g++)a.setXYZ(g,0,0,0);const o=new k,c=new k,u=new k,d=new k,m=new k,p=new k,_=new k,v=new k;if(e)for(let g=0,M=e.count;g<M;g+=3){const x=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),d.fromBufferAttribute(a,x),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,y),d.add(_),m.add(_),p.add(_),a.setXYZ(x,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)On.fromBufferAttribute(e,n),On.normalize(),e.setXYZ(n,On.x,On.y,On.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let M=0,x=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*_;for(let S=0;S<_;S++)g[x++]=p[M++]}return new Oi(g,_,v)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],M=e(g,a);m.push(M)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ME=0;class Ao extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=xo,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ep,this.blendDst=tp,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){pt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(a.blending=this.blending),this.side!==Za&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ep&&(a.blendSrc=this.blendSrc),this.blendDst!==tp&&(a.blendDst=this.blendDst),this.blendEquation!==rr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new He().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ya=new k,Dh=new k,hu=new k,Ls=new k,Nh=new k,pu=new k,Uh=new k;class Xv{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ya)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ya.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ya.copy(this.origin).addScaledVector(this.direction,n),Ya.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Dh.copy(e).add(n).multiplyScalar(.5),hu.copy(n).sub(e).normalize(),Ls.copy(this.origin).sub(Dh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(hu),d=Ls.dot(this.direction),m=-Ls.dot(hu),p=Ls.lengthSq(),_=Math.abs(1-u*u);let v,g,M,x;if(_>0)if(v=u*m-d,g=u*d-m,x=c*_,v>=0)if(g>=-x)if(g<=x){const A=1/_;v*=A,g*=A,M=v*(v+u*g+2*d)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+d)),M=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+d)),M=-v*v+g*(g+2*m)+p;else g<=-x?(v=Math.max(0,-(-u*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+p):g<=x?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(v=Math.max(0,-(u*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+d)),M=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Dh).addScaledVector(hu,g),M}intersectSphere(e,n){Ya.subVectors(e.center,this.origin);const a=Ya.dot(this.direction),o=Ya.dot(Ya)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(d=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ya)!==null}intersectTriangle(e,n,a,o,c){Nh.subVectors(n,e),pu.subVectors(a,e),Uh.crossVectors(Nh,pu);let u=this.direction.dot(Uh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ls.subVectors(this.origin,e);const m=d*this.direction.dot(pu.crossVectors(Ls,pu));if(m<0)return null;const p=d*this.direction.dot(Nh.cross(Ls));if(p<0||m+p>u)return null;const _=-d*Ls.dot(Uh);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Us extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const U_=new Pt,ar=new Xv,mu=new gr,O_=new k,gu=new k,xu=new k,_u=new k,Oh=new k,vu=new k,P_=new k,yu=new k;class ct extends Bn{constructor(e=new zn,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){vu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(Oh.fromBufferAttribute(v,e),u?vu.addScaledVector(Oh,_):vu.addScaledVector(Oh.sub(n),_))}n.add(vu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere),mu.applyMatrix4(c),ar.copy(e.ray).recast(e.near),!(mu.containsPoint(ar.origin)===!1&&(ar.intersectSphere(mu,O_)===null||ar.origin.distanceToSquared(O_)>(e.far-e.near)**2))&&(U_.copy(c).invert(),ar.copy(e.ray).applyMatrix4(U_),!(a.boundingBox!==null&&ar.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let x=0,A=g.length;x<A;x++){const y=g[x],S=u[y.materialIndex],R=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=R,P=U;C<P;C+=3){const N=d.getX(C),F=d.getX(C+1),T=d.getX(C+2);o=Su(this,S,e,a,p,_,v,N,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const x=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=x,S=A;y<S;y+=3){const R=d.getX(y),U=d.getX(y+1),C=d.getX(y+2);o=Su(this,u,e,a,p,_,v,R,U,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let x=0,A=g.length;x<A;x++){const y=g[x],S=u[y.materialIndex],R=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=R,P=U;C<P;C+=3){const N=C,F=C+1,T=C+2;o=Su(this,S,e,a,p,_,v,N,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const x=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=x,S=A;y<S;y+=3){const R=y,U=y+1,C=y+2;o=Su(this,u,e,a,p,_,v,R,U,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function bE(r,e,n,a,o,c,u,d){let m;if(e.side===ri?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Za,d),m===null)return null;yu.copy(d),yu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(yu);return p<n.near||p>n.far?null:{distance:p,point:yu.clone(),object:r}}function Su(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,gu),r.getVertexPosition(m,xu),r.getVertexPosition(p,_u);const _=bE(r,e,n,a,gu,xu,_u,P_);if(_){const v=new k;na.getBarycoord(P_,gu,xu,_u,v),o&&(_.uv=na.getInterpolatedAttribute(o,d,m,p,v,new He)),c&&(_.uv1=na.getInterpolatedAttribute(c,d,m,p,v,new He)),u&&(_.normal=na.getInterpolatedAttribute(u,d,m,p,v,new k),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new k,materialIndex:0};na.getNormal(gu,xu,_u,g.normal),_.face=g,_.barycoord=v}return _}class Wv extends $n{constructor(e=null,n=1,a=1,o,c,u,d,m,p=Wn,_=Wn,v,g){super(null,u,d,m,p,_,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class I_ extends Oi{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lo=new Pt,F_=new Pt,Mu=[],B_=new mr,EE=new Pt,wl=new ct,Al=new gr;class TE extends ct{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new I_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,EE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new mr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,lo),B_.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(B_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,lo),Al.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(Al)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let d=0;d<a.length;d++)a[d]=o[u+d]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(wl.geometry=this.geometry,wl.material=this.material,wl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(a),e.ray.intersectsSphere(Al)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,lo),F_.multiplyMatrices(a,lo),wl.matrixWorld=F_,wl.raycast(e,Mu);for(let u=0,d=Mu.length;u<d;u++){const m=Mu[u];m.instanceId=c,m.object=this,n.push(m)}Mu.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new I_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new Wv(new Float32Array(o*this.count),o,this.count,sm,aa));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const d=this.geometry.morphTargetsRelative?1:1-u,m=o*e;return c[m]=d,c.set(a,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ph=new k,wE=new k,AE=new xt;class Ns{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Ph.subVectors(a,n).cross(wE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(Ph),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||AE.getNormalMatrix(e),o=this.coplanarPoint(Ph).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new gr,CE=new He(.5,.5),bu=new k;class qu{constructor(e=new Ns,n=new Ns,a=new Ns,o=new Ns,c=new Ns,u=new Ns){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=xa,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],M=c[7],x=c[8],A=c[9],y=c[10],S=c[11],R=c[12],U=c[13],C=c[14],P=c[15];if(o[0].setComponents(p-u,M-_,S-x,P-R).normalize(),o[1].setComponents(p+u,M+_,S+x,P+R).normalize(),o[2].setComponents(p+d,M+v,S+A,P+U).normalize(),o[3].setComponents(p-d,M-v,S-A,P-U).normalize(),a)o[4].setComponents(m,g,y,C).normalize(),o[5].setComponents(p-m,M-g,S-y,P-C).normalize();else if(o[4].setComponents(p-m,M-g,S-y,P-C).normalize(),n===xa)o[5].setComponents(p+m,M+g,S+y,P+C).normalize();else if(n===Vl)o[5].setComponents(m,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);const n=CE.distanceTo(e.center);return sr.radius=.7071067811865476+n,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(bu.x=o.normal.x>0?e.max.x:e.min.x,bu.y=o.normal.y>0?e.max.y:e.min.y,bu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qv extends Ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z_=new Pt,Gp=new Xv,Eu=new gr,Tu=new k;class RE extends Bn{constructor(e=new zn,n=new qv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Eu.copy(a.boundingSphere),Eu.applyMatrix4(o),Eu.radius+=c,e.ray.intersectsSphere(Eu)===!1)return;z_.copy(o).invert(),Gp.copy(e.ray).applyMatrix4(z_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,v=a.attributes.position;if(p!==null){const g=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let x=g,A=M;x<A;x++){const y=p.getX(x);Tu.fromBufferAttribute(v,y),H_(Tu,y,m,o,e,n,this)}}else{const g=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let x=g,A=M;x<A;x++)Tu.fromBufferAttribute(v,x),H_(Tu,x,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function H_(r,e,n,a,o,c,u){const d=Gp.distanceSqToPoint(r);if(d<n){const m=new k;Gp.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class jv extends $n{constructor(e=[],n=fr,a,o,c,u,d,m,p,_){super(e,n,a,o,c,u,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bo extends $n{constructor(e,n,a=ya,o,c,u,d=Wn,m=Wn,p,_=Ka,v=1){if(_!==Ka&&_!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,o,c,u,d,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class LE extends bo{constructor(e,n=ya,a=fr,o,c,u=Wn,d=Wn,m,p=Ka){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,a,o,c,u,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zv extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ni extends zn{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,M=0;x("z","y","x",-1,-1,a,n,e,u,c,0),x("z","y","x",1,-1,a,n,-e,u,c,1),x("x","z","y",1,1,e,a,n,o,u,2),x("x","z","y",1,-1,e,a,-n,o,u,3),x("x","y","z",1,-1,e,n,a,o,c,4),x("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(v,2));function x(A,y,S,R,U,C,P,N,F,T,O){const Y=C/F,V=P/T,X=C/2,le=P/2,ae=N/2,Q=F+1,B=T+1;let q=0,ee=0;const re=new k;for(let G=0;G<B;G++){const E=G*V-le;for(let H=0;H<Q;H++){const ie=H*Y-X;re[A]=ie*R,re[y]=E*U,re[S]=ae,p.push(re.x,re.y,re.z),re[A]=0,re[y]=0,re[S]=N>0?1:-1,_.push(re.x,re.y,re.z),v.push(H/F),v.push(1-G/T),q+=1}}for(let G=0;G<T;G++)for(let E=0;E<F;E++){const H=g+E+Q*G,ie=g+E+Q*(G+1),xe=g+(E+1)+Q*(G+1),Ee=g+(E+1)+Q*G;m.push(H,ie,Ee),m.push(ie,xe,Ee),ee+=6}d.addGroup(M,ee,O),M+=ee,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ur extends zn{constructor(e=1,n=1,a=1,o=32,c=1,u=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const _=[],v=[],g=[],M=[];let x=0;const A=[],y=a/2;let S=0;R(),u===!1&&(e>0&&U(!0),n>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(M,2));function R(){const C=new k,P=new k;let N=0;const F=(n-e)/a;for(let T=0;T<=c;T++){const O=[],Y=T/c,V=Y*(n-e)+e;for(let X=0;X<=o;X++){const le=X/o,ae=le*m+d,Q=Math.sin(ae),B=Math.cos(ae);P.x=V*Q,P.y=-Y*a+y,P.z=V*B,v.push(P.x,P.y,P.z),C.set(Q,F,B).normalize(),g.push(C.x,C.y,C.z),M.push(le,1-Y),O.push(x++)}A.push(O)}for(let T=0;T<o;T++)for(let O=0;O<c;O++){const Y=A[O][T],V=A[O+1][T],X=A[O+1][T+1],le=A[O][T+1];(e>0||O!==0)&&(_.push(Y,V,le),N+=3),(n>0||O!==c-1)&&(_.push(V,X,le),N+=3)}p.addGroup(S,N,0),S+=N}function U(C){const P=x,N=new He,F=new k;let T=0;const O=C===!0?e:n,Y=C===!0?1:-1;for(let X=1;X<=o;X++)v.push(0,y*Y,0),g.push(0,Y,0),M.push(.5,.5),x++;const V=x;for(let X=0;X<=o;X++){const ae=X/o*m+d,Q=Math.cos(ae),B=Math.sin(ae);F.x=O*B,F.y=y*Y,F.z=O*Q,v.push(F.x,F.y,F.z),g.push(0,Y,0),N.x=Q*.5+.5,N.y=B*.5*Y+.5,M.push(N.x,N.y),x++}for(let X=0;X<o;X++){const le=P+X,ae=V+X;C===!0?_.push(ae,ae+1,le):_.push(ae+1,ae,le),T+=3}p.addGroup(S,T,C===!0?1:2),S+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pm extends ur{constructor(e=1,n=1,a=32,o=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,a,o,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new pm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mm extends zn{constructor(e=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:a,detail:o};const c=[],u=[];d(o),p(a),_(),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(c.slice(),3)),this.setAttribute("uv",new Qt(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(R){const U=new k,C=new k,P=new k;for(let N=0;N<n.length;N+=3)M(n[N+0],U),M(n[N+1],C),M(n[N+2],P),m(U,C,P,R)}function m(R,U,C,P){const N=P+1,F=[];for(let T=0;T<=N;T++){F[T]=[];const O=R.clone().lerp(C,T/N),Y=U.clone().lerp(C,T/N),V=N-T;for(let X=0;X<=V;X++)X===0&&T===N?F[T][X]=O:F[T][X]=O.clone().lerp(Y,X/V)}for(let T=0;T<N;T++)for(let O=0;O<2*(N-T)-1;O++){const Y=Math.floor(O/2);O%2===0?(g(F[T][Y+1]),g(F[T+1][Y]),g(F[T][Y])):(g(F[T][Y+1]),g(F[T+1][Y+1]),g(F[T+1][Y]))}}function p(R){const U=new k;for(let C=0;C<c.length;C+=3)U.x=c[C+0],U.y=c[C+1],U.z=c[C+2],U.normalize().multiplyScalar(R),c[C+0]=U.x,c[C+1]=U.y,c[C+2]=U.z}function _(){const R=new k;for(let U=0;U<c.length;U+=3){R.x=c[U+0],R.y=c[U+1],R.z=c[U+2];const C=y(R)/2/Math.PI+.5,P=S(R)/Math.PI+.5;u.push(C,1-P)}x(),v()}function v(){for(let R=0;R<u.length;R+=6){const U=u[R+0],C=u[R+2],P=u[R+4],N=Math.max(U,C,P),F=Math.min(U,C,P);N>.9&&F<.1&&(U<.2&&(u[R+0]+=1),C<.2&&(u[R+2]+=1),P<.2&&(u[R+4]+=1))}}function g(R){c.push(R.x,R.y,R.z)}function M(R,U){const C=R*3;U.x=e[C+0],U.y=e[C+1],U.z=e[C+2]}function x(){const R=new k,U=new k,C=new k,P=new k,N=new He,F=new He,T=new He;for(let O=0,Y=0;O<c.length;O+=9,Y+=6){R.set(c[O+0],c[O+1],c[O+2]),U.set(c[O+3],c[O+4],c[O+5]),C.set(c[O+6],c[O+7],c[O+8]),N.set(u[Y+0],u[Y+1]),F.set(u[Y+2],u[Y+3]),T.set(u[Y+4],u[Y+5]),P.copy(R).add(U).add(C).divideScalar(3);const V=y(P);A(N,Y+0,R,V),A(F,Y+2,U,V),A(T,Y+4,C,V)}}function A(R,U,C,P){P<0&&R.x===1&&(u[U]=R.x-1),C.x===0&&C.z===0&&(u[U]=P/2/Math.PI+.5)}function y(R){return Math.atan2(R.z,-R.x)}function S(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mm(e.vertices,e.indices,e.radius,e.detail)}}class gm extends zn{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],n=12,a=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:a,phiLength:o},n=Math.floor(n),o=wt(o,0,Math.PI*2);const c=[],u=[],d=[],m=[],p=[],_=1/n,v=new k,g=new He,M=new k,x=new k,A=new k;let y=0,S=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:y=e[R+1].x-e[R].x,S=e[R+1].y-e[R].y,M.x=S*1,M.y=-y,M.z=S*0,A.copy(M),M.normalize(),m.push(M.x,M.y,M.z);break;case e.length-1:m.push(A.x,A.y,A.z);break;default:y=e[R+1].x-e[R].x,S=e[R+1].y-e[R].y,M.x=S*1,M.y=-y,M.z=S*0,x.copy(M),M.x+=A.x,M.y+=A.y,M.z+=A.z,M.normalize(),m.push(M.x,M.y,M.z),A.copy(x)}for(let R=0;R<=n;R++){const U=a+R*_*o,C=Math.sin(U),P=Math.cos(U);for(let N=0;N<=e.length-1;N++){v.x=e[N].x*C,v.y=e[N].y,v.z=e[N].x*P,u.push(v.x,v.y,v.z),g.x=R/n,g.y=N/(e.length-1),d.push(g.x,g.y);const F=m[3*N+0]*C,T=m[3*N+1],O=m[3*N+0]*P;p.push(F,T,O)}}for(let R=0;R<n;R++)for(let U=0;U<e.length-1;U++){const C=U+R*e.length,P=C,N=C+e.length,F=C+e.length+1,T=C+1;c.push(P,N,T),c.push(F,T,N)}this.setIndex(c),this.setAttribute("position",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2)),this.setAttribute("normal",new Qt(p,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gm(e.points,e.segments,e.phiStart,e.phiLength)}}class Bl extends mm{constructor(e=1,n=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Bl(e.radius,e.detail)}}class Wl extends zn{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,_=m+1,v=e/d,g=n/m,M=[],x=[],A=[],y=[];for(let S=0;S<_;S++){const R=S*g-u;for(let U=0;U<p;U++){const C=U*v-c;x.push(C,-R,0),A.push(0,0,1),y.push(U/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let R=0;R<d;R++){const U=R+p*S,C=R+p*(S+1),P=R+1+p*(S+1),N=R+1+p*S;M.push(U,C,N),M.push(C,P,N)}this.setIndex(M),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}class xm extends zn{constructor(e=.5,n=1,a=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:u},a=Math.max(3,a),o=Math.max(1,o);const d=[],m=[],p=[],_=[];let v=e;const g=(n-e)/o,M=new k,x=new He;for(let A=0;A<=o;A++){for(let y=0;y<=a;y++){const S=c+y/a*u;M.x=v*Math.cos(S),M.y=v*Math.sin(S),m.push(M.x,M.y,M.z),p.push(0,0,1),x.x=(M.x/n+1)/2,x.y=(M.y/n+1)/2,_.push(x.x,x.y)}v+=g}for(let A=0;A<o;A++){const y=A*(a+1);for(let S=0;S<a;S++){const R=S+y,U=R,C=R+a+1,P=R+a+2,N=R+1;d.push(U,C,N),d.push(C,P,N)}}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yi extends zn{constructor(e=1,n=32,a=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const _=[],v=new k,g=new k,M=[],x=[],A=[],y=[];for(let S=0;S<=a;S++){const R=[],U=S/a,C=u+U*d,P=e*Math.cos(C),N=Math.sqrt(e*e-P*P);let F=0;S===0&&u===0?F=.5/n:S===a&&m===Math.PI&&(F=-.5/n);for(let T=0;T<=n;T++){const O=T/n,Y=o+O*c;v.x=-N*Math.cos(Y),v.y=P,v.z=N*Math.sin(Y),x.push(v.x,v.y,v.z),g.copy(v).normalize(),A.push(g.x,g.y,g.z),y.push(O+F,1-U),R.push(p++)}_.push(R)}for(let S=0;S<a;S++)for(let R=0;R<n;R++){const U=_[S][R+1],C=_[S][R],P=_[S+1][R],N=_[S+1][R+1];(S!==0||u>0)&&M.push(U,C,N),(S!==a-1||m<Math.PI)&&M.push(C,P,N)}this.setIndex(M),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zl extends zn{constructor(e=1,n=.4,a=12,o=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:a,tubularSegments:o,arc:c,thetaStart:u,thetaLength:d},a=Math.floor(a),o=Math.floor(o);const m=[],p=[],_=[],v=[],g=new k,M=new k,x=new k;for(let A=0;A<=a;A++){const y=u+A/a*d;for(let S=0;S<=o;S++){const R=S/o*c;M.x=(e+n*Math.cos(y))*Math.cos(R),M.y=(e+n*Math.cos(y))*Math.sin(R),M.z=n*Math.sin(y),p.push(M.x,M.y,M.z),g.x=e*Math.cos(R),g.y=e*Math.sin(R),x.subVectors(M,g).normalize(),_.push(x.x,x.y,x.z),v.push(S/o),v.push(A/a)}}for(let A=1;A<=a;A++)for(let y=1;y<=o;y++){const S=(o+1)*A+y-1,R=(o+1)*(A-1)+y-1,U=(o+1)*(A-1)+y,C=(o+1)*A+y;m.push(S,R,C),m.push(R,U,C)}this.setIndex(m),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Eo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(G_(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(G_(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function si(r){const e={};for(let n=0;n<r.length;n++){const a=Eo(r[n]);for(const o in a)e[o]=a[o]}return e}function G_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function DE(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function Kv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Ps={clone:Eo,merge:si};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=DE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new ht().setHex(o.value);break;case"v2":this.uniforms[a].value=new He().fromArray(o.value);break;case"v3":this.uniforms[a].value=new k().fromArray(o.value);break;case"v4":this.uniforms[a].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new xt().fromArray(o.value);break;case"m4":this.uniforms[a].value=new Pt().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qv extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ln extends Ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hp,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OE extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PE extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ih={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(k_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!k_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function k_(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class IE{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(_){d++,c===!1&&o.onStart!==void 0&&o.onStart(_,u,d),c=!0},this.itemEnd=function(_){u++,o.onProgress!==void 0&&o.onProgress(_,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=p.length;v<g;v+=2){const M=p[v],x=p[v+1];if(M.global&&(M.lastIndex=0),M.test(_))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const FE=new IE;class _m{constructor(e){this.manager=e!==void 0?e:FE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_m.DEFAULT_MATERIAL_NAME="__DEFAULT";const co=new WeakMap;class BE extends _m{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ih.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let v=co.get(u);v===void 0&&(v=[],co.set(u,v)),v.push({onLoad:n,onError:o})}return u}const d=Yl("img");function m(){_(),n&&n(this);const v=co.get(this)||[];for(let g=0;g<v.length;g++){const M=v[g];M.onLoad&&M.onLoad(this)}co.delete(this),c.manager.itemEnd(e)}function p(v){_(),o&&o(v),Ih.remove(`image:${e}`);const g=co.get(this)||[];for(let M=0;M<g.length;M++){const x=g[M];x.onError&&x.onError(v)}co.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ih.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class Ja extends _m{constructor(e){super(e)}load(e,n,a,o){const c=new $n,u=new BE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class vm extends Bn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class zE extends vm{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Fh=new Pt,V_=new k,Y_=new k;class Jv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qu,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;V_.setFromMatrixPosition(e.matrixWorld),n.position.copy(V_),Y_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Y_),n.updateMatrixWorld(),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Vl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wu=new k,Au=new pr,da=new k;class $v extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wu,Au,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Au,da.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(wu,Au,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Au,da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ds=new k,X_=new He,W_=new He;class gi extends $v{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,n){return this.getViewBounds(e,X_,W_),n.subVectors(W_,X_)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Il*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class HE extends Jv{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class GE extends vm{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new HE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class ql extends $v{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class kE extends Jv{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VE extends vm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new kE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const uo=-90,fo=1;class YE extends Bn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi(uo,fo,e,n);o.layers=this.layers,this.add(o);const c=new gi(uo,fo,e,n);c.layers=this.layers,this.add(c);const u=new gi(uo,fo,e,n);u.layers=this.layers,this.add(u);const d=new gi(uo,fo,e,n);d.layers=this.layers,this.add(d);const m=new gi(uo,fo,e,n);m.layers=this.layers,this.add(m);const p=new gi(uo,fo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===xa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,M),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}}class XE extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class WE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qE.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function qE(){this._document.hidden===!1&&this.reset()}class e1{static{e1.prototype.isMatrix2=!0}constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}}function q_(r,e,n,a){const o=jE(a);switch(n){case Fv:return r*e;case sm:return r*e/o.components*o.byteLength;case rm:return r*e/o.components*o.byteLength;case dr:return r*e*2/o.components*o.byteLength;case om:return r*e*2/o.components*o.byteLength;case Bv:return r*e*3/o.components*o.byteLength;case sa:return r*e*4/o.components*o.byteLength;case lm:return r*e*4/o.components*o.byteLength;case Uu:case Ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pu:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fp:case hp:return Math.max(r,16)*Math.max(e,8)/4;case up:case dp:return Math.max(r,8)*Math.max(e,8)/2;case pp:case mp:case xp:case _p:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gp:case Gu:case vp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Op:case Pp:case Ip:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fp:case Bp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ku:case zp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jE(r){switch(r){case Ui:case Uv:return{byteLength:1,components:1};case Gl:case Ov:case xi:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case ya:case nm:case aa:return{byteLength:4,components:1};case Pv:case Iv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);function t1(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function ZE(r){const e=new WeakMap;function n(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((M,x)=>M.start-x.start);let g=0;for(let M=1;M<v.length;M++){const x=v[g],A=v[M];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++g,v[g]=A)}v.length=g+1;for(let M=0,x=v.length;M<x;M++){const A=v[M];r.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var KE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
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
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nT=`#ifdef USE_AOMAP
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
#endif`,iT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
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
#endif`,sT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cT=`#ifdef USE_IRIDESCENCE
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
#endif`,uT=`#ifdef USE_BUMPMAP
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
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vT=`#define PI 3.141592653589793
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
} // validated`,yT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ST=`vec3 transformedNormal = objectNormal;
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
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wT="gl_FragColor = linearToOutputTexel( gl_FragColor );",AT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CT=`#ifdef USE_ENVMAP
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
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FT=`#ifdef USE_GRADIENTMAP
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
}`,BT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kT=`#ifdef USE_ENVMAP
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
#endif`,VT=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qT=`PhysicalMaterial material;
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
#endif`,jT=`uniform sampler2D dfgLUT;
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
}`,ZT=`
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
#endif`,KT=`#if defined( RE_IndirectDiffuse )
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
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rw=`#if defined( USE_POINTS_UV )
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
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dw=`#ifdef USE_MORPHTARGETS
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
#endif`,hw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vw=`#ifdef USE_NORMALMAP
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
#endif`,yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ww=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Aw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ow=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pw=`float getShadowMask() {
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
}`,Iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fw=`#ifdef USE_SKINNING
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
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zw=`#ifdef USE_SKINNING
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
#endif`,Hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yw=`#ifdef USE_TRANSMISSION
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
#endif`,Xw=`#ifdef USE_TRANSMISSION
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qw=`uniform sampler2D t2D;
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
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`#include <common>
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
}`,i3=`#if DEPTH_PACKING == 3200
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
}`,a3=`#define DISTANCE
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
}`,s3=`#define DISTANCE
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
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`uniform float scale;
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
}`,c3=`uniform vec3 diffuse;
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
}`,u3=`#include <common>
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
}`,f3=`uniform vec3 diffuse;
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
}`,d3=`#define LAMBERT
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
}`,h3=`#define LAMBERT
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
}`,p3=`#define MATCAP
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
}`,m3=`#define MATCAP
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
}`,g3=`#define NORMAL
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
}`,x3=`#define NORMAL
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
}`,_3=`#define PHONG
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
}`,v3=`#define PHONG
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
}`,y3=`#define STANDARD
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
}`,S3=`#define STANDARD
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
}`,M3=`#define TOON
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
}`,b3=`#define TOON
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
}`,E3=`uniform float size;
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
}`,T3=`uniform vec3 diffuse;
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
}`,w3=`#include <common>
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
}`,A3=`uniform vec3 color;
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
}`,C3=`uniform float rotation;
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
}`,R3=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:KE,alphahash_pars_fragment:QE,alphamap_fragment:JE,alphamap_pars_fragment:$E,alphatest_fragment:eT,alphatest_pars_fragment:tT,aomap_fragment:nT,aomap_pars_fragment:iT,batching_pars_vertex:aT,batching_vertex:sT,begin_vertex:rT,beginnormal_vertex:oT,bsdfs:lT,iridescence_fragment:cT,bumpmap_pars_fragment:uT,clipping_planes_fragment:fT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:pT,color_fragment:mT,color_pars_fragment:gT,color_pars_vertex:xT,color_vertex:_T,common:vT,cube_uv_reflection_fragment:yT,defaultnormal_vertex:ST,displacementmap_pars_vertex:MT,displacementmap_vertex:bT,emissivemap_fragment:ET,emissivemap_pars_fragment:TT,colorspace_fragment:wT,colorspace_pars_fragment:AT,envmap_fragment:CT,envmap_common_pars_fragment:RT,envmap_pars_fragment:LT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:kT,envmap_vertex:NT,fog_vertex:UT,fog_pars_vertex:OT,fog_fragment:PT,fog_pars_fragment:IT,gradientmap_pars_fragment:FT,lightmap_pars_fragment:BT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:HT,lights_pars_begin:GT,lights_toon_fragment:VT,lights_toon_pars_fragment:YT,lights_phong_fragment:XT,lights_phong_pars_fragment:WT,lights_physical_fragment:qT,lights_physical_pars_fragment:jT,lights_fragment_begin:ZT,lights_fragment_maps:KT,lights_fragment_end:QT,lightprobes_pars_fragment:JT,logdepthbuf_fragment:$T,logdepthbuf_pars_fragment:ew,logdepthbuf_pars_vertex:tw,logdepthbuf_vertex:nw,map_fragment:iw,map_pars_fragment:aw,map_particle_fragment:sw,map_particle_pars_fragment:rw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:lw,morphinstance_vertex:cw,morphcolor_vertex:uw,morphnormal_vertex:fw,morphtarget_pars_vertex:dw,morphtarget_vertex:hw,normal_fragment_begin:pw,normal_fragment_maps:mw,normal_pars_fragment:gw,normal_pars_vertex:xw,normal_vertex:_w,normalmap_pars_fragment:vw,clearcoat_normal_fragment_begin:yw,clearcoat_normal_fragment_maps:Sw,clearcoat_pars_fragment:Mw,iridescence_pars_fragment:bw,opaque_fragment:Ew,packing:Tw,premultiplied_alpha_fragment:ww,project_vertex:Aw,dithering_fragment:Cw,dithering_pars_fragment:Rw,roughnessmap_fragment:Lw,roughnessmap_pars_fragment:Dw,shadowmap_pars_fragment:Nw,shadowmap_pars_vertex:Uw,shadowmap_vertex:Ow,shadowmask_pars_fragment:Pw,skinbase_vertex:Iw,skinning_pars_vertex:Fw,skinning_vertex:Bw,skinnormal_vertex:zw,specularmap_fragment:Hw,specularmap_pars_fragment:Gw,tonemapping_fragment:kw,tonemapping_pars_fragment:Vw,transmission_fragment:Yw,transmission_pars_fragment:Xw,uv_pars_fragment:Ww,uv_pars_vertex:qw,uv_vertex:jw,worldpos_vertex:Zw,background_vert:Kw,background_frag:Qw,backgroundCube_vert:Jw,backgroundCube_frag:$w,cube_vert:e3,cube_frag:t3,depth_vert:n3,depth_frag:i3,distance_vert:a3,distance_frag:s3,equirect_vert:r3,equirect_frag:o3,linedashed_vert:l3,linedashed_frag:c3,meshbasic_vert:u3,meshbasic_frag:f3,meshlambert_vert:d3,meshlambert_frag:h3,meshmatcap_vert:p3,meshmatcap_frag:m3,meshnormal_vert:g3,meshnormal_frag:x3,meshphong_vert:_3,meshphong_frag:v3,meshphysical_vert:y3,meshphysical_frag:S3,meshtoon_vert:M3,meshtoon_frag:b3,points_vert:E3,points_frag:T3,shadow_vert:w3,shadow_frag:A3,sprite_vert:C3,sprite_frag:R3},Be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},pa={basic:{uniforms:si([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:si([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:si([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:si([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:si([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new ht(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:si([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:si([Be.points,Be.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:si([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:si([Be.common,Be.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:si([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:si([Be.sprite,Be.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:si([Be.common,Be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:si([Be.lights,Be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};pa.physical={uniforms:si([pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Cu={r:0,b:0,g:0},L3=new Pt,n1=new xt;n1.set(-1,0,0,0,1,0,0,0,1);function D3(r,e,n,a,o,c){const u=new ht(0);let d=o===!0?0:1,m,p,_=null,v=0,g=null;function M(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){const C=R.backgroundBlurriness>0;U=e.get(U,C)}return U}function x(R){let U=!1;const C=M(R);C===null?y(u,d):C&&C.isColor&&(y(C,1),U=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(R,U){const C=M(U);C&&(C.isCubeTexture||C.mapping===Wu)?(p===void 0&&(p=new ct(new Ni(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Eo(pa.backgroundCube.uniforms),vertexShader:pa.backgroundCube.vertexShader,fragmentShader:pa.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(L3.makeRotationFromEuler(U.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(n1),p.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Vt,(_!==C||v!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ct(new Wl(2,2),new Fn({name:"BackgroundMaterial",uniforms:Eo(pa.background.uniforms),vertexShader:pa.background.vertexShader,fragmentShader:pa.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,U){R.getRGB(Cu,Kv(r)),n.buffers.color.setClear(Cu.r,Cu.g,Cu.b,U,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,U=1){u.set(R),d=U,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(u,d)},render:x,addToRenderList:A,dispose:S}}function N3(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=g(null);let c=o,u=!1;function d(V,X,le,ae,Q){let B=!1;const q=v(V,ae,le,X);c!==q&&(c=q,p(c.object)),B=M(V,ae,le,Q),B&&x(V,ae,le,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,C(V,X,le,ae),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function _(V){return r.deleteVertexArray(V)}function v(V,X,le,ae){const Q=ae.wireframe===!0;let B=a[X.id];B===void 0&&(B={},a[X.id]=B);const q=V.isInstancedMesh===!0?V.id:0;let ee=B[q];ee===void 0&&(ee={},B[q]=ee);let re=ee[le.id];re===void 0&&(re={},ee[le.id]=re);let G=re[Q];return G===void 0&&(G=g(m()),re[Q]=G),G}function g(V){const X=[],le=[],ae=[];for(let Q=0;Q<n;Q++)X[Q]=0,le[Q]=0,ae[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:le,attributeDivisors:ae,object:V,attributes:{},index:null}}function M(V,X,le,ae){const Q=c.attributes,B=X.attributes;let q=0;const ee=le.getAttributes();for(const re in ee)if(ee[re].location>=0){const E=Q[re];let H=B[re];if(H===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(H=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(H=V.instanceColor)),E===void 0||E.attribute!==H||H&&E.data!==H.data)return!0;q++}return c.attributesNum!==q||c.index!==ae}function x(V,X,le,ae){const Q={},B=X.attributes;let q=0;const ee=le.getAttributes();for(const re in ee)if(ee[re].location>=0){let E=B[re];E===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(E=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(E=V.instanceColor));const H={};H.attribute=E,E&&E.data&&(H.data=E.data),Q[re]=H,q++}c.attributes=Q,c.attributesNum=q,c.index=ae}function A(){const V=c.newAttributes;for(let X=0,le=V.length;X<le;X++)V[X]=0}function y(V){S(V,0)}function S(V,X){const le=c.newAttributes,ae=c.enabledAttributes,Q=c.attributeDivisors;le[V]=1,ae[V]===0&&(r.enableVertexAttribArray(V),ae[V]=1),Q[V]!==X&&(r.vertexAttribDivisor(V,X),Q[V]=X)}function R(){const V=c.newAttributes,X=c.enabledAttributes;for(let le=0,ae=X.length;le<ae;le++)X[le]!==V[le]&&(r.disableVertexAttribArray(le),X[le]=0)}function U(V,X,le,ae,Q,B,q){q===!0?r.vertexAttribIPointer(V,X,le,Q,B):r.vertexAttribPointer(V,X,le,ae,Q,B)}function C(V,X,le,ae){A();const Q=ae.attributes,B=le.getAttributes(),q=X.defaultAttributeValues;for(const ee in B){const re=B[ee];if(re.location>=0){let G=Q[ee];if(G===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(G=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(G=V.instanceColor)),G!==void 0){const E=G.normalized,H=G.itemSize,ie=e.get(G);if(ie===void 0)continue;const xe=ie.buffer,Ee=ie.type,K=ie.bytesPerElement,se=Ee===r.INT||Ee===r.UNSIGNED_INT||G.gpuType===nm;if(G.isInterleavedBufferAttribute){const me=G.data,Ce=me.stride,ke=G.offset;if(me.isInstancedInterleavedBuffer){for(let Ne=0;Ne<re.locationSize;Ne++)S(re.location+Ne,me.meshPerAttribute);V.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ne=0;Ne<re.locationSize;Ne++)y(re.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let Ne=0;Ne<re.locationSize;Ne++)U(re.location+Ne,H/re.locationSize,Ee,E,Ce*K,(ke+H/re.locationSize*Ne)*K,se)}else{if(G.isInstancedBufferAttribute){for(let me=0;me<re.locationSize;me++)S(re.location+me,G.meshPerAttribute);V.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let me=0;me<re.locationSize;me++)y(re.location+me);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let me=0;me<re.locationSize;me++)U(re.location+me,H/re.locationSize,Ee,E,H*K,H/re.locationSize*me*K,se)}}else if(q!==void 0){const E=q[ee];if(E!==void 0)switch(E.length){case 2:r.vertexAttrib2fv(re.location,E);break;case 3:r.vertexAttrib3fv(re.location,E);break;case 4:r.vertexAttrib4fv(re.location,E);break;default:r.vertexAttrib1fv(re.location,E)}}}}R()}function P(){O();for(const V in a){const X=a[V];for(const le in X){const ae=X[le];for(const Q in ae){const B=ae[Q];for(const q in B)_(B[q].object),delete B[q];delete ae[Q]}}delete a[V]}}function N(V){if(a[V.id]===void 0)return;const X=a[V.id];for(const le in X){const ae=X[le];for(const Q in ae){const B=ae[Q];for(const q in B)_(B[q].object),delete B[q];delete ae[Q]}}delete a[V.id]}function F(V){for(const X in a){const le=a[X];for(const ae in le){const Q=le[ae];if(Q[V.id]===void 0)continue;const B=Q[V.id];for(const q in B)_(B[q].object),delete B[q];delete Q[V.id]}}}function T(V){for(const X in a){const le=a[X],ae=V.isInstancedMesh===!0?V.id:0,Q=le[ae];if(Q!==void 0){for(const B in Q){const q=Q[B];for(const ee in q)_(q[ee].object),delete q[ee];delete Q[B]}delete le[ae],Object.keys(le).length===0&&delete a[X]}}}function O(){Y(),u=!0,c!==o&&(c=o,p(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:O,resetDefaultState:Y,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:R}}function U3(r,e,n){let a;function o(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function d(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];n.update(g,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function O3(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==sa&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ui&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==aa&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(pt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:C,maxSamples:P,samples:N}}function P3(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new Ns,d=new xt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||a!==0||o;return o=g,a=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,M){const x=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!o||x===null||x.length===0||c&&!y)c?_(null):p();else{const R=c?0:a,U=R*4;let C=S.clippingState||null;m.value=C,C=_(x,g,U,M);for(let P=0;P!==U;++P)C[P]=n[P];S.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,M,x){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,x!==!0||y===null){const S=M+A*4,R=g.matrixWorldInverse;d.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let U=0,C=M;U!==A;++U,C+=4)u.copy(v[U]).applyMatrix4(R,d),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Os=4,j_=[.125,.215,.35,.446,.526,.582],or=20,I3=256,Cl=new ql,Z_=new ht;let Bh=null,zh=0,Hh=0,Gh=!1;const F3=new k;class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=F3}=c;Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,zh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fr||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:xi,format:sa,colorSpace:Vu,depthBuffer:!1},o=K_(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B3(c)),this._blurMaterial=H3(c,e,n),this._ggxMaterial=z3(c,e,n)}return o}_compileMaterial(e){const n=new ct(new zn,e);this._renderer.compile(n,Cl)}_sceneToCubeUV(e,n,a,o,c){const m=new gi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(Z_),v.toneMapping=va,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Ni,new Us({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(Z_),S=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const P=this._cubeSize;ho(o,C*P,U>2?P:0,P,P),v.setRenderTarget(o),S&&v.render(A,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=R}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===fr||e.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;ho(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Cl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,M=v*g,{_lodMax:x}=this,A=this._sizeLods[a],y=3*A*(a>x-Os?a-x+Os:0),S=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=x-n,ho(c,y,S,3*A,2*A),o.setRenderTarget(c),o.render(d,Cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=x-a,ho(e,y,S,3*A,2*A),o.setRenderTarget(e),o.render(d,Cl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,M=this._sizeLods[a]-1,x=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*or-1),A=c/x,y=isFinite(c)?1+Math.floor(_*A):or;y>or&&pt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${or}`);const S=[];let R=0;for(let F=0;F<or;++F){const T=F/A,O=Math.exp(-T*T/2);S.push(O),F===0?R+=O:F<y&&(R+=2*O)}for(let F=0;F<S.length;F++)S[F]=S[F]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:U}=this;g.dTheta.value=x,g.mipInt.value=U-a;const C=this._sizeLods[o],P=3*C*(o>U-Os?o-U+Os:0),N=4*(this._cubeSize-C);ho(n,P,N,3*C,2*C),m.setRenderTarget(n),m.render(v,Cl)}}function B3(r){const e=[],n=[],a=[];let o=r;const c=r-Os+1+j_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-Os?m=j_[u-r+Os-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,x=6,A=3,y=2,S=1,R=new Float32Array(A*x*M),U=new Float32Array(y*x*M),C=new Float32Array(S*x*M);for(let N=0;N<M;N++){const F=N%3*2/3-1,T=N>2?0:-1,O=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];R.set(O,A*x*N),U.set(g,y*x*N);const Y=[N,N,N,N,N,N];C.set(Y,S*x*N)}const P=new zn;P.setAttribute("position",new Oi(R,A)),P.setAttribute("uv",new Oi(U,y)),P.setAttribute("faceIndex",new Oi(C,S)),a.push(new ct(P,null)),o>Os&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function K_(r,e,n){const a=new oi(r,e,n);return a.texture.mapping=Wu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function ho(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function z3(r,e,n){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function H3(r,e,n){const a=new Float32Array(or),o=new k(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ju(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Q_(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function J_(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}class i1 extends oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new jv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ni(5,5,5),c=new Fn({name:"CubemapFromEquirect",uniforms:Eo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ri,blending:_a});c.uniforms.tEquirect.value=n;const u=new ct(o,c),d=n.minFilter;return n.minFilter===lr&&(n.minFilter=Jn),new YE(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function G3(r){let e=new WeakMap,n=new WeakMap,a=null;function o(g,M=!1){return g==null?null:M?u(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===fh||M===dh)if(e.has(g)){const x=e.get(g).texture;return d(x,g.mapping)}else{const x=g.image;if(x&&x.height>0){const A=new i1(x.height);return A.fromEquirectangularTexture(r,g),e.set(g,A),g.addEventListener("dispose",p),d(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,x=M===fh||M===dh,A=M===fr||M===Mo;if(x||A){let y=n.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return a===null&&(a=new kp(r)),y=x?a.fromEquirectangular(g,y):a.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return x&&R&&R.height>0||A&&R&&m(R)?(a===null&&(a=new kp(r)),y=x?a.fromEquirectangular(g):a.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function d(g,M){return M===fh?g.mapping=fr:M===dh&&(g.mapping=Mo),g}function m(g){let M=0;const x=6;for(let A=0;A<x;A++)g[A]!==void 0&&M++;return M===x}function p(g){const M=g.target;M.removeEventListener("dispose",p);const x=e.get(M);x!==void 0&&(e.delete(M),x.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const x=n.get(M);x!==void 0&&(n.delete(M),x.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function k3(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&_o("WebGLRenderer: "+a+" extension not supported."),o}}}function V3(r,e,n,a){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",u),delete o[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(v){const g=[],M=v.index,x=v.attributes.position;let A=0;if(x===void 0)return;if(M!==null){const R=M.array;A=M.version;for(let U=0,C=R.length;U<C;U+=3){const P=R[U+0],N=R[U+1],F=R[U+2];g.push(P,N,N,F,F,P)}}else{const R=x.array;A=x.version;for(let U=0,C=R.length/3-1;U<C;U+=3){const P=U+0,N=U+1,F=U+2;g.push(P,N,N,F,F,P)}}const y=new(x.count>=65535?Yv:Vv)(g,1);y.version=A;const S=c.get(v);S&&e.remove(S),c.set(v,y)}function _(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function Y3(r,e,n){let a;function o(v){a=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*u),n.update(g,a,1)}function p(v,g,M){M!==0&&(r.drawElementsInstanced(a,g,c,v*u,M),n.update(g,a,M))}function _(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,M);let A=0;for(let y=0;y<M;y++)A+=g[y];n.update(A,a,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function X3(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function W3(r,e,n){const a=new WeakMap,o=new dn;function c(u,d,m){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(d);if(g===void 0||g.count!==v){let O=function(){F.dispose(),a.delete(d),d.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const M=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let U=0;M===!0&&(U=1),x===!0&&(U=2),A===!0&&(U=3);let C=d.attributes.position.count*U,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const N=new Float32Array(C*P*4*v),F=new Hv(N,C,P,v);F.type=aa,F.needsUpdate=!0;const T=U*4;for(let Y=0;Y<v;Y++){const V=y[Y],X=S[Y],le=R[Y],ae=C*P*4*Y;for(let Q=0;Q<V.count;Q++){const B=Q*T;M===!0&&(o.fromBufferAttribute(V,Q),N[ae+B+0]=o.x,N[ae+B+1]=o.y,N[ae+B+2]=o.z,N[ae+B+3]=0),x===!0&&(o.fromBufferAttribute(X,Q),N[ae+B+4]=o.x,N[ae+B+5]=o.y,N[ae+B+6]=o.z,N[ae+B+7]=0),A===!0&&(o.fromBufferAttribute(le,Q),N[ae+B+8]=o.x,N[ae+B+9]=o.y,N[ae+B+10]=o.z,N[ae+B+11]=le.itemSize===4?o.w:1)}}g={count:v,texture:F,size:new He(C,P)},a.set(d,g),d.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let A=0;A<p.length;A++)M+=p[A];const x=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",x),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function q3(r,e,n,a,o){let c=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:d}}const j3={[Kp]:"LINEAR_TONE_MAPPING",[Qp]:"REINHARD_TONE_MAPPING",[Jp]:"CINEON_TONE_MAPPING",[Xu]:"ACES_FILMIC_TONE_MAPPING",[em]:"AGX_TONE_MAPPING",[tm]:"NEUTRAL_TONE_MAPPING",[$p]:"CUSTOM_TONE_MAPPING"};function Z3(r,e,n,a,o,c){const u=new oi(e,n,{type:r,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new bo(e,n):void 0}),d=new oi(e,n,{type:xi,depthBuffer:!1,stencilBuffer:!1}),m=new zn;m.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const p=new Qv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new ct(m,p),v=new ql(-1,1,1,-1,0,1);let g=null,M=null,x=!1,A,y=null,S=[],R=!1;this.setSize=function(U,C){u.setSize(U,C),d.setSize(U,C);for(let P=0;P<S.length;P++){const N=S[P];N.setSize&&N.setSize(U,C)}},this.setEffects=function(U){S=U,R=S.length>0&&S[0].isRenderPass===!0;const C=u.width,P=u.height;for(let N=0;N<S.length;N++){const F=S[N];F.setSize&&F.setSize(C,P)}},this.begin=function(U,C){if(x||U.toneMapping===va&&S.length===0)return!1;if(y=C,C!==null){const P=C.width,N=C.height;(u.width!==P||u.height!==N)&&this.setSize(P,N)}return R===!1&&U.setRenderTarget(u),A=U.toneMapping,U.toneMapping=va,!0},this.hasRenderPass=function(){return R},this.end=function(U,C){U.toneMapping=A,x=!0;let P=u,N=d;for(let F=0;F<S.length;F++){const T=S[F];if(T.enabled!==!1&&(T.render(U,N,P,C),T.needsSwap!==!1)){const O=P;P=N,N=O}}if(g!==U.outputColorSpace||M!==U.toneMapping){g=U.outputColorSpace,M=U.toneMapping,p.defines={},Rt.getTransfer(g)===Vt&&(p.defines.SRGB_TRANSFER="");const F=j3[M];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(y),U.render(_,v),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),p.dispose()}}const a1=new $n,Vp=new bo(1,1),s1=new Hv,r1=new fE,o1=new jv,$_=[],ev=[],tv=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function Co(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=$_[o];if(c===void 0&&(c=new Float32Array(o),$_[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Dn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Nn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Zu(r,e){let n=ev[e];n===void 0&&(n=new Int32Array(e),ev[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function K3(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function Q3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2fv(this.addr,e),Nn(n,e)}}function J3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dn(n,e))return;r.uniform3fv(this.addr,e),Nn(n,e)}}function $3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4fv(this.addr,e),Nn(n,e)}}function eA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;iv.set(a),r.uniformMatrix2fv(this.addr,!1,iv),Nn(n,a)}}function tA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;nv.set(a),r.uniformMatrix3fv(this.addr,!1,nv),Nn(n,a)}}function nA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;tv.set(a),r.uniformMatrix4fv(this.addr,!1,tv),Nn(n,a)}}function iA(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function aA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2iv(this.addr,e),Nn(n,e)}}function sA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3iv(this.addr,e),Nn(n,e)}}function rA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4iv(this.addr,e),Nn(n,e)}}function oA(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function lA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2uiv(this.addr,e),Nn(n,e)}}function cA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3uiv(this.addr,e),Nn(n,e)}}function uA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4uiv(this.addr,e),Nn(n,e)}}function fA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Vp.compareFunction=n.isReversedDepthBuffer()?um:cm,c=Vp):c=a1,n.setTexture2D(e||c,o)}function dA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||r1,o)}function hA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||o1,o)}function pA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||s1,o)}function mA(r){switch(r){case 5126:return K3;case 35664:return Q3;case 35665:return J3;case 35666:return $3;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(r,e){r.uniform1fv(this.addr,e)}function xA(r,e){const n=Co(e,this.size,2);r.uniform2fv(this.addr,n)}function _A(r,e){const n=Co(e,this.size,3);r.uniform3fv(this.addr,n)}function vA(r,e){const n=Co(e,this.size,4);r.uniform4fv(this.addr,n)}function yA(r,e){const n=Co(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function SA(r,e){const n=Co(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function MA(r,e){const n=Co(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function bA(r,e){r.uniform1iv(this.addr,e)}function EA(r,e){r.uniform2iv(this.addr,e)}function TA(r,e){r.uniform3iv(this.addr,e)}function wA(r,e){r.uniform4iv(this.addr,e)}function AA(r,e){r.uniform1uiv(this.addr,e)}function CA(r,e){r.uniform2uiv(this.addr,e)}function RA(r,e){r.uniform3uiv(this.addr,e)}function LA(r,e){r.uniform4uiv(this.addr,e)}function DA(r,e,n){const a=this.cache,o=e.length,c=Zu(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Vp:u=a1;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function NA(r,e,n){const a=this.cache,o=e.length,c=Zu(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||r1,c[u])}function UA(r,e,n){const a=this.cache,o=e.length,c=Zu(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||o1,c[u])}function OA(r,e,n){const a=this.cache,o=e.length,c=Zu(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||s1,c[u])}function PA(r){switch(r){case 5126:return gA;case 35664:return xA;case 35665:return _A;case 35666:return vA;case 35674:return yA;case 35675:return SA;case 35676:return MA;case 5124:case 35670:return bA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return wA;case 5125:return AA;case 36294:return CA;case 36295:return RA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return OA}}class IA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=mA(n.type)}}class FA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PA(n.type)}}class BA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function av(r,e){r.seq.push(e),r.map[e.id]=e}function zA(r,e,n){const a=r.name,o=a.length;for(kh.lastIndex=0;;){const c=kh.exec(a),u=kh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){av(n,p===void 0?new IA(d,r,e):new FA(d,r,e));break}else{let v=n.map[d];v===void 0&&(v=new BA(d),av(n,v)),n=v}}}class Fu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(n,u),m=e.getUniformLocation(n,d.name);zA(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function sv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const HA=37297;let GA=0;function kA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const rv=new xt;function VA(r){Rt._getMatrix(rv,Rt.workingColorSpace,r);const e=`mat3( ${rv.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(r)){case Yu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ov(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+kA(r.getShaderSource(e),d)}else return c}function YA(r,e){const n=VA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const XA={[Kp]:"Linear",[Qp]:"Reinhard",[Jp]:"Cineon",[Xu]:"ACESFilmic",[em]:"AgX",[tm]:"Neutral",[$p]:"Custom"};function WA(r,e){const n=XA[e];return n===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ru=new k;function qA(){Rt.getLuminanceCoefficients(Ru);const r=Ru.x.toFixed(4),e=Ru.y.toFixed(4),n=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function ZA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function KA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Ol(r){return r!==""}function lv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yp(r){return r.replace(QA,$A)}const JA=new Map;function $A(r,e){let n=Mt[e];if(n===void 0){const a=JA.get(e);if(a!==void 0)n=Mt[a],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yp(n)}const eC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(r){return r.replace(eC,tC)}function tC(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function fv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const nC={[Pl]:"SHADOWMAP_TYPE_PCF",[Ul]:"SHADOWMAP_TYPE_VSM"};function iC(r){return nC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aC={[fr]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Wu]:"ENVMAP_TYPE_CUBE_UV"};function sC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const rC={[Mo]:"ENVMAP_MODE_REFRACTION"};function oC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":rC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lC={[Dv]:"ENVMAP_BLENDING_MULTIPLY",[C2]:"ENVMAP_BLENDING_MIX",[R2]:"ENVMAP_BLENDING_ADD"};function cC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lC[r.combine]||"ENVMAP_BLENDING_NONE"}function uC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function fC(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=iC(n),p=sC(n),_=oC(n),v=cC(n),g=uC(n),M=jA(n),x=ZA(c),A=o.createProgram();let y,S,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ol).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ol).join(`
`),S.length>0&&(S+=`
`)):(y=[fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),S=[fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==va?"#define TONE_MAPPING":"",n.toneMapping!==va?Mt.tonemapping_pars_fragment:"",n.toneMapping!==va?WA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,YA("linearToOutputTexel",n.outputColorSpace),qA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ol).join(`
`)),u=Yp(u),u=lv(u,n),u=cv(u,n),d=Yp(d),d=lv(d,n),d=cv(d,n),u=uv(u),d=uv(d),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=R+y+u,C=R+S+d,P=sv(o,o.VERTEX_SHADER,U),N=sv(o,o.FRAGMENT_SHADER,C);o.attachShader(A,P),o.attachShader(A,N),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(V){if(r.debug.checkShaderErrors){const X=o.getProgramInfoLog(A)||"",le=o.getShaderInfoLog(P)||"",ae=o.getShaderInfoLog(N)||"",Q=X.trim(),B=le.trim(),q=ae.trim();let ee=!0,re=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,P,N);else{const G=ov(o,P,"vertex"),E=ov(o,N,"fragment");Ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+G+`
`+E)}else Q!==""?pt("WebGLProgram: Program Info Log:",Q):(B===""||q==="")&&(re=!1);re&&(V.diagnostics={runnable:ee,programLog:Q,vertexShader:{log:B,prefix:y},fragmentShader:{log:q,prefix:S}})}o.deleteShader(P),o.deleteShader(N),T=new Fu(o,A),O=KA(o,A)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(A,HA)),Y},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=N,this}let dC=0;class hC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new pC(e),n.set(e,a)),a}}class pC{constructor(e){this.id=dC++,this.code=e,this.usedTimes=0}}function mC(r){return r===dr||r===Gu||r===ku}function gC(r,e,n,a,o,c){const u=new Gv,d=new hC,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,O,Y,V,X,le){const ae=V.fog,Q=X.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||B,q),re=ee&&ee.mapping===Wu?ee.image.height:null,G=M[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&pt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const E=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,H=E!==void 0?E.length:0;let ie=0;Q.morphAttributes.position!==void 0&&(ie=1),Q.morphAttributes.normal!==void 0&&(ie=2),Q.morphAttributes.color!==void 0&&(ie=3);let xe,Ee,K,se;if(G){const Ze=pa[G];xe=Ze.vertexShader,Ee=Ze.fragmentShader}else{xe=T.vertexShader,Ee=T.fragmentShader;const Ze=d.getVertexShaderStage(T),hn=d.getFragmentShaderStage(T);d.update(T,Ze,hn),K=Ze.id,se=hn.id}const me=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),ke=X.isInstancedMesh===!0,Ne=X.isBatchedMesh===!0,ut=!!T.map,nt=!!T.matcap,Ve=!!ee,lt=!!T.aoMap,we=!!T.lightMap,Ye=!!T.bumpMap&&T.wireframe===!1,Qe=!!T.normalMap,qe=!!T.displacementMap,Lt=!!T.emissiveMap,Nt=!!T.metalnessMap,nn=!!T.roughnessMap,J=T.anisotropy>0,Ht=T.clearcoat>0,Ut=T.dispersion>0,z=T.iridescence>0,w=T.sheen>0,ne=T.transmission>0,de=J&&!!T.anisotropyMap,_e=Ht&&!!T.clearcoatMap,Re=Ht&&!!T.clearcoatNormalMap,Oe=Ht&&!!T.clearcoatRoughnessMap,ve=z&&!!T.iridescenceMap,ye=z&&!!T.iridescenceThicknessMap,De=w&&!!T.sheenColorMap,Xe=w&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,Pe=!!T.specularColorMap,at=!!T.specularIntensityMap,st=ne&&!!T.transmissionMap,mt=ne&&!!T.thicknessMap,Z=!!T.gradientMap,Le=!!T.alphaMap,Me=T.alphaTest>0,Ue=!!T.alphaHash,Ge=!!T.extensions;let Ae=va;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const et={shaderID:G,shaderType:T.type,shaderName:T.name,vertexShader:xe,fragmentShader:Ee,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&X._colorsTexture!==null,instancing:ke,instancingColor:ke&&X.instanceColor!==null,instancingMorph:ke&&X.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:nt,envMap:Ve,envMapMode:Ve&&ee.mapping,envMapCubeUVHeight:re,aoMap:lt,lightMap:we,bumpMap:Ye,normalMap:Qe,displacementMap:qe,emissiveMap:Lt,normalMapObjectSpace:Qe&&T.normalMapType===N2,normalMapTangentSpace:Qe&&T.normalMapType===Hp,packedNormalMap:Qe&&T.normalMapType===Hp&&mC(T.normalMap.format),metalnessMap:Nt,roughnessMap:nn,anisotropy:J,anisotropyMap:de,clearcoat:Ht,clearcoatMap:_e,clearcoatNormalMap:Re,clearcoatRoughnessMap:Oe,dispersion:Ut,iridescence:z,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:w,sheenColorMap:De,sheenRoughnessMap:Xe,specularMap:Fe,specularColorMap:Pe,specularIntensityMap:at,transmission:ne,transmissionMap:st,thicknessMap:mt,gradientMap:Z,opaque:T.transparent===!1&&T.blending===xo&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:Me,alphaHash:Ue,combine:T.combine,mapUv:ut&&x(T.map.channel),aoMapUv:lt&&x(T.aoMap.channel),lightMapUv:we&&x(T.lightMap.channel),bumpMapUv:Ye&&x(T.bumpMap.channel),normalMapUv:Qe&&x(T.normalMap.channel),displacementMapUv:qe&&x(T.displacementMap.channel),emissiveMapUv:Lt&&x(T.emissiveMap.channel),metalnessMapUv:Nt&&x(T.metalnessMap.channel),roughnessMapUv:nn&&x(T.roughnessMap.channel),anisotropyMapUv:de&&x(T.anisotropyMap.channel),clearcoatMapUv:_e&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(T.sheenRoughnessMap.channel),specularMapUv:Fe&&x(T.specularMap.channel),specularColorMapUv:Pe&&x(T.specularColorMap.channel),specularIntensityMapUv:at&&x(T.specularIntensityMap.channel),transmissionMapUv:st&&x(T.transmissionMap.channel),thicknessMapUv:mt&&x(T.thicknessMap.channel),alphaMapUv:Le&&x(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Qe||J),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(ut||Le),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ce,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ie,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:Lt&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ta,flipSided:T.side===ri,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return et.vertexUv1s=m.has(1),et.vertexUv2s=m.has(2),et.vertexUv3s=m.has(3),m.clear(),et}function y(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)O.push(Y),O.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(O,T),R(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function S(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function R(T,O){u.disableAll(),O.instancing&&u.enable(0),O.instancingColor&&u.enable(1),O.instancingMorph&&u.enable(2),O.matcap&&u.enable(3),O.envMap&&u.enable(4),O.normalMapObjectSpace&&u.enable(5),O.normalMapTangentSpace&&u.enable(6),O.clearcoat&&u.enable(7),O.iridescence&&u.enable(8),O.alphaTest&&u.enable(9),O.vertexColors&&u.enable(10),O.vertexAlphas&&u.enable(11),O.vertexUv1s&&u.enable(12),O.vertexUv2s&&u.enable(13),O.vertexUv3s&&u.enable(14),O.vertexTangents&&u.enable(15),O.anisotropy&&u.enable(16),O.alphaHash&&u.enable(17),O.batching&&u.enable(18),O.dispersion&&u.enable(19),O.batchingColor&&u.enable(20),O.gradientMap&&u.enable(21),O.packedNormalMap&&u.enable(22),O.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.reversedDepthBuffer&&u.enable(4),O.skinning&&u.enable(5),O.morphTargets&&u.enable(6),O.morphNormals&&u.enable(7),O.morphColors&&u.enable(8),O.premultipliedAlpha&&u.enable(9),O.shadowMapEnabled&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),O.decodeVideoTextureEmissive&&u.enable(20),O.alphaToCoverage&&u.enable(21),O.numLightProbeGrids>0&&u.enable(22),O.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function U(T){const O=M[T.type];let Y;if(O){const V=pa[O];Y=Ps.clone(V.uniforms)}else Y=T.uniforms;return Y}function C(T,O){let Y=_.get(O);return Y!==void 0?++Y.usedTimes:(Y=new fC(r,O,T,o),p.push(Y),_.set(O,Y)),Y}function P(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function F(){d.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:U,acquireProgram:C,releaseProgram:P,releaseShaderCache:N,programs:p,dispose:F}}function xC(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function _C(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function dv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hv(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,x,A,y,S){let R=r[e];return R===void 0?(R={id:g.id,object:g,geometry:M,material:x,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:S},r[e]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=x,R.materialVariant=u(g),R.groupOrder=A,R.renderOrder=g.renderOrder,R.z=y,R.group=S),e++,R}function m(g,M,x,A,y,S){const R=d(g,M,x,A,y,S);x.transmission>0?a.push(R):x.transparent===!0?o.push(R):n.push(R)}function p(g,M,x,A,y,S){const R=d(g,M,x,A,y,S);x.transmission>0?a.unshift(R):x.transparent===!0?o.unshift(R):n.unshift(R)}function _(g,M,x){n.length>1&&n.sort(g||_C),a.length>1&&a.sort(M||dv),o.length>1&&o.sort(M||dv),x&&(n.reverse(),a.reverse(),o.reverse())}function v(){for(let g=e,M=r.length;g<M;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:v,sort:_}}function vC(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new hv,r.set(a,[u])):o>=c.length?(u=new hv,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function yC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ht};break;case"SpotLight":n={position:new k,direction:new k,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=n,n}}}function SC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let MC=0;function bC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function EC(r){const e=new yC,n=SC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new k);const o=new k,c=new Pt,u=new Pt;function d(p){let _=0,v=0,g=0;for(let O=0;O<9;O++)a.probe[O].set(0,0,0);let M=0,x=0,A=0,y=0,S=0,R=0,U=0,C=0,P=0,N=0,F=0;p.sort(bC);for(let O=0,Y=p.length;O<Y;O++){const V=p[O],X=V.color,le=V.intensity,ae=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===dr?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=X.r*le,v+=X.g*le,g+=X.b*le;else if(V.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(V.sh.coefficients[B],le);F++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,ee=n.get(V);ee.shadowIntensity=q.intensity,ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,a.directionalShadow[M]=ee,a.directionalShadowMap[M]=Q,a.directionalShadowMatrix[M]=V.shadow.matrix,R++}a.directional[M]=B,M++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(X).multiplyScalar(le),B.distance=ae,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,a.spot[A]=B;const q=V.shadow;if(V.map&&(a.spotLightMap[P]=V.map,P++,q.updateMatrices(V),V.castShadow&&N++),a.spotLightMatrix[A]=q.matrix,V.castShadow){const ee=n.get(V);ee.shadowIntensity=q.intensity,ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,a.spotShadow[A]=ee,a.spotShadowMap[A]=Q,C++}A++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(X).multiplyScalar(le),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),a.rectArea[y]=B,y++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const q=V.shadow,ee=n.get(V);ee.shadowIntensity=q.intensity,ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,ee.shadowCameraNear=q.camera.near,ee.shadowCameraFar=q.camera.far,a.pointShadow[x]=ee,a.pointShadowMap[x]=Q,a.pointShadowMatrix[x]=V.shadow.matrix,U++}a.point[x]=B,x++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(le),B.groundColor.copy(V.groundColor).multiplyScalar(le),a.hemi[S]=B,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Be.LTC_FLOAT_1,a.rectAreaLTC2=Be.LTC_FLOAT_2):(a.rectAreaLTC1=Be.LTC_HALF_1,a.rectAreaLTC2=Be.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==M||T.pointLength!==x||T.spotLength!==A||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==U||T.numSpotShadows!==C||T.numSpotMaps!==P||T.numLightProbes!==F)&&(a.directional.length=M,a.spot.length=A,a.rectArea.length=y,a.point.length=x,a.hemi.length=S,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+P-N,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=F,T.directionalLength=M,T.pointLength=x,T.spotLength=A,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=U,T.numSpotShadows=C,T.numSpotMaps=P,T.numLightProbes=F,a.version=MC++)}function m(p,_){let v=0,g=0,M=0,x=0,A=0;const y=_.matrixWorldInverse;for(let S=0,R=p.length;S<R;S++){const U=p[S];if(U.isDirectionalLight){const C=a.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),v++}else if(U.isSpotLight){const C=a.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=a.rectArea[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(U.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),x++}else if(U.isPointLight){const C=a.point[g];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),g++}else if(U.isHemisphereLight){const C=a.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:a}}function pv(r){const e=new EC(r),n=[],a=[],o=[];function c(g){v.camera=g,n.length=0,a.length=0,o.length=0}function u(g){n.push(g)}function d(g){a.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function TC(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new pv(r),e.set(o,[d])):c>=u.length?(d=new pv(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const wC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AC=`uniform sampler2D shadow_pass;
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
}`,CC=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],RC=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],mv=new Pt,Rl=new k,Vh=new k;function LC(r,e,n){let a=new qu;const o=new He,c=new He,u=new dn,d=new OE,m=new PE,p={},_=n.maxTextureSize,v={[Za]:ri,[ri]:Za,[ta]:ta},g=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:wC,fragmentShader:AC}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const x=new zn;x.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ct(x,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let S=this.type;this.render=function(N,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===c2&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pl);const O=r.getRenderTarget(),Y=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),X=r.state;X.setBlending(_a),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const le=S!==this.type;le&&F.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(Q=>Q.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,Q=N.length;ae<Q;ae++){const B=N[ae],q=B.shadow;if(q===void 0){pt("WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ee=q.getFrameExtents();o.multiply(ee),c.copy(q.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/ee.x),o.x=c.x*ee.x,q.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/ee.y),o.y=c.y*ee.y,q.mapSize.y=c.y));const re=r.state.buffers.depth.getReversed();if(q.camera._reversedDepth=re,q.map===null||le===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ul){if(B.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new oi(o.x,o.y,{format:dr,type:xi,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),q.map.texture.name=B.name+".shadowMap",q.map.depthTexture=new bo(o.x,o.y,aa),q.map.depthTexture.name=B.name+".shadowMapDepth",q.map.depthTexture.format=Ka,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Wn,q.map.depthTexture.magFilter=Wn}else B.isPointLight?(q.map=new i1(o.x),q.map.depthTexture=new LE(o.x,ya)):(q.map=new oi(o.x,o.y),q.map.depthTexture=new bo(o.x,o.y,ya)),q.map.depthTexture.name=B.name+".shadowMap",q.map.depthTexture.format=Ka,this.type===Pl?(q.map.depthTexture.compareFunction=re?um:cm,q.map.depthTexture.minFilter=Jn,q.map.depthTexture.magFilter=Jn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Wn,q.map.depthTexture.magFilter=Wn);q.camera.updateProjectionMatrix()}const G=q.map.isWebGLCubeRenderTarget?6:1;for(let E=0;E<G;E++){if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,E),r.clear();else{E===0&&(r.setRenderTarget(q.map),r.clear());const H=q.getViewport(E);u.set(c.x*H.x,c.y*H.y,c.x*H.z,c.y*H.w),X.viewport(u)}if(B.isPointLight){const H=q.camera,ie=q.matrix,xe=B.distance||H.far;xe!==H.far&&(H.far=xe,H.updateProjectionMatrix()),Rl.setFromMatrixPosition(B.matrixWorld),H.position.copy(Rl),Vh.copy(H.position),Vh.add(CC[E]),H.up.copy(RC[E]),H.lookAt(Vh),H.updateMatrixWorld(),ie.makeTranslation(-Rl.x,-Rl.y,-Rl.z),mv.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q._frustum.setFromProjectionMatrix(mv,H.coordinateSystem,H.reversedDepth)}else q.updateMatrices(B);a=q.getFrustum(),C(F,T,q.camera,B,this.type)}q.isPointLightShadow!==!0&&this.type===Ul&&R(q,T),q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(O,Y,V)};function R(N,F){const T=e.update(A);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new oi(o.x,o.y,{format:dr,type:xi})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,T,M,A,null)}function U(N,F,T,O){let Y=null;const V=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)Y=V;else if(Y=T.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const X=Y.uuid,le=F.uuid;let ae=p[X];ae===void 0&&(ae={},p[X]=ae);let Q=ae[le];Q===void 0&&(Q=Y.clone(),ae[le]=Q,F.addEventListener("dispose",P)),Y=Q}if(Y.visible=F.visible,Y.wireframe=F.wireframe,O===Ul?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:v[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const X=r.properties.get(Y);X.light=T}return Y}function C(N,F,T,O,Y){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Y===Ul)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const le=e.update(N),ae=N.material;if(Array.isArray(ae)){const Q=le.groups;for(let B=0,q=Q.length;B<q;B++){const ee=Q[B],re=ae[ee.materialIndex];if(re&&re.visible){const G=U(N,re,O,Y);N.onBeforeShadow(r,N,F,T,le,G,ee),r.renderBufferDirect(T,null,le,G,N,ee),N.onAfterShadow(r,N,F,T,le,G,ee)}}}else if(ae.visible){const Q=U(N,ae,O,Y);N.onBeforeShadow(r,N,F,T,le,Q,null),r.renderBufferDirect(T,null,le,Q,N,null),N.onAfterShadow(r,N,F,T,le,Q,null)}}const X=N.children;for(let le=0,ae=X.length;le<ae;le++)C(X[le],F,T,O,Y)}function P(N){N.target.removeEventListener("dispose",P);for(const T in p){const O=p[T],Y=N.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function DC(r,e){function n(){let Z=!1;const Le=new dn;let Me=null;const Ue=new dn(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!Z&&(r.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){Z=Ge},setClear:function(Ge,Ae,et,Ze,hn){hn===!0&&(Ge*=Ze,Ae*=Ze,et*=Ze),Le.set(Ge,Ae,et,Ze),Ue.equals(Le)===!1&&(r.clearColor(Ge,Ae,et,Ze),Ue.copy(Le))},reset:function(){Z=!1,Me=null,Ue.set(-1,0,0,0)}}}function a(){let Z=!1,Le=!1,Me=null,Ue=null,Ge=null;return{setReversed:function(Ae){if(Le!==Ae){const et=e.get("EXT_clip_control");Ae?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Le=Ae;const Ze=Ge;Ge=null,this.setClear(Ze)}},getReversed:function(){return Le},setTest:function(Ae){Ae?me(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(Ae){Me!==Ae&&!Z&&(r.depthMask(Ae),Me=Ae)},setFunc:function(Ae){if(Le&&(Ae=V2[Ae]),Ue!==Ae){switch(Ae){case np:r.depthFunc(r.NEVER);break;case ip:r.depthFunc(r.ALWAYS);break;case ap:r.depthFunc(r.LESS);break;case So:r.depthFunc(r.LEQUAL);break;case sp:r.depthFunc(r.EQUAL);break;case rp:r.depthFunc(r.GEQUAL);break;case op:r.depthFunc(r.GREATER);break;case lp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=Ae}},setLocked:function(Ae){Z=Ae},setClear:function(Ae){Ge!==Ae&&(Ge=Ae,Le&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){Z=!1,Me=null,Ue=null,Ge=null,Le=!1}}}function o(){let Z=!1,Le=null,Me=null,Ue=null,Ge=null,Ae=null,et=null,Ze=null,hn=null;return{setTest:function(Yt){Z||(Yt?me(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(Yt){Le!==Yt&&!Z&&(r.stencilMask(Yt),Le=Yt)},setFunc:function(Yt,_i,vi){(Me!==Yt||Ue!==_i||Ge!==vi)&&(r.stencilFunc(Yt,_i,vi),Me=Yt,Ue=_i,Ge=vi)},setOp:function(Yt,_i,vi){(Ae!==Yt||et!==_i||Ze!==vi)&&(r.stencilOp(Yt,_i,vi),Ae=Yt,et=_i,Ze=vi)},setLocked:function(Yt){Z=Yt},setClear:function(Yt){hn!==Yt&&(r.clearStencil(Yt),hn=Yt)},reset:function(){Z=!1,Le=null,Me=null,Ue=null,Ge=null,Ae=null,et=null,Ze=null,hn=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let _={},v={},g={},M=new WeakMap,x=[],A=null,y=!1,S=null,R=null,U=null,C=null,P=null,N=null,F=null,T=new ht(0,0,0),O=0,Y=!1,V=null,X=null,le=null,ae=null,Q=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(re)[1]),q=ee>=1):re.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),q=ee>=2);let G=null,E={};const H=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),xe=new dn().fromArray(H),Ee=new dn().fromArray(ie);function K(Z,Le,Me,Ue){const Ge=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(Z,Ae),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<Me;et++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(Le+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Ae}const se={};se[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(r.DEPTH_TEST),u.setFunc(So),Ye(!1),Qe(d_),me(r.CULL_FACE),lt(_a);function me(Z){_[Z]!==!0&&(r.enable(Z),_[Z]=!0)}function Ce(Z){_[Z]!==!1&&(r.disable(Z),_[Z]=!1)}function ke(Z,Le){return g[Z]!==Le?(r.bindFramebuffer(Z,Le),g[Z]=Le,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ne(Z,Le){let Me=x,Ue=!1;if(Z){Me=M.get(Le),Me===void 0&&(Me=[],M.set(Le,Me));const Ge=Z.textures;if(Me.length!==Ge.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,et=Ge.length;Ae<et;Ae++)Me[Ae]=r.COLOR_ATTACHMENT0+Ae;Me.length=Ge.length,Ue=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(Me)}function ut(Z){return A!==Z?(r.useProgram(Z),A=Z,!0):!1}const nt={[rr]:r.FUNC_ADD,[f2]:r.FUNC_SUBTRACT,[d2]:r.FUNC_REVERSE_SUBTRACT};nt[h2]=r.MIN,nt[p2]=r.MAX;const Ve={[m2]:r.ZERO,[g2]:r.ONE,[x2]:r.SRC_COLOR,[ep]:r.SRC_ALPHA,[b2]:r.SRC_ALPHA_SATURATE,[S2]:r.DST_COLOR,[v2]:r.DST_ALPHA,[_2]:r.ONE_MINUS_SRC_COLOR,[tp]:r.ONE_MINUS_SRC_ALPHA,[M2]:r.ONE_MINUS_DST_COLOR,[y2]:r.ONE_MINUS_DST_ALPHA,[E2]:r.CONSTANT_COLOR,[T2]:r.ONE_MINUS_CONSTANT_COLOR,[w2]:r.CONSTANT_ALPHA,[A2]:r.ONE_MINUS_CONSTANT_ALPHA};function lt(Z,Le,Me,Ue,Ge,Ae,et,Ze,hn,Yt){if(Z===_a){y===!0&&(Ce(r.BLEND),y=!1);return}if(y===!1&&(me(r.BLEND),y=!0),Z!==u2){if(Z!==S||Yt!==Y){if((R!==rr||P!==rr)&&(r.blendEquation(r.FUNC_ADD),R=rr,P=rr),Yt)switch(Z){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hu:r.blendFunc(r.ONE,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case p_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ot("WebGLState: Invalid blending: ",Z);break}else switch(Z){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case h_:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",Z);break}U=null,C=null,N=null,F=null,T.set(0,0,0),O=0,S=Z,Y=Yt}return}Ge=Ge||Le,Ae=Ae||Me,et=et||Ue,(Le!==R||Ge!==P)&&(r.blendEquationSeparate(nt[Le],nt[Ge]),R=Le,P=Ge),(Me!==U||Ue!==C||Ae!==N||et!==F)&&(r.blendFuncSeparate(Ve[Me],Ve[Ue],Ve[Ae],Ve[et]),U=Me,C=Ue,N=Ae,F=et),(Ze.equals(T)===!1||hn!==O)&&(r.blendColor(Ze.r,Ze.g,Ze.b,hn),T.copy(Ze),O=hn),S=Z,Y=!1}function we(Z,Le){Z.side===ta?Ce(r.CULL_FACE):me(r.CULL_FACE);let Me=Z.side===ri;Le&&(Me=!Me),Ye(Me),Z.blending===xo&&Z.transparent===!1?lt(_a):lt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Ue=Z.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Lt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(Z){V!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),V=Z)}function Qe(Z){Z!==o2?(me(r.CULL_FACE),Z!==X&&(Z===d_?r.cullFace(r.BACK):Z===l2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),X=Z}function qe(Z){Z!==le&&(q&&r.lineWidth(Z),le=Z)}function Lt(Z,Le,Me){Z?(me(r.POLYGON_OFFSET_FILL),(ae!==Le||Q!==Me)&&(ae=Le,Q=Me,u.getReversed()&&(Le=-Le),r.polygonOffset(Le,Me))):Ce(r.POLYGON_OFFSET_FILL)}function Nt(Z){Z?me(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function nn(Z){Z===void 0&&(Z=r.TEXTURE0+B-1),G!==Z&&(r.activeTexture(Z),G=Z)}function J(Z,Le,Me){Me===void 0&&(G===null?Me=r.TEXTURE0+B-1:Me=G);let Ue=E[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},E[Me]=Ue),(Ue.type!==Z||Ue.texture!==Le)&&(G!==Me&&(r.activeTexture(Me),G=Me),r.bindTexture(Z,Le||se[Z]),Ue.type=Z,Ue.texture=Le)}function Ht(){const Z=E[G];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Ut(){try{r.compressedTexImage2D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function w(){try{r.texSubImage2D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function ne(){try{r.texSubImage3D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function Re(){try{r.texStorage2D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function Oe(){try{r.texStorage3D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function ve(){try{r.texImage2D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function ye(){try{r.texImage3D(...arguments)}catch(Z){Ot("WebGLState:",Z)}}function De(Z){return v[Z]!==void 0?v[Z]:r.getParameter(Z)}function Xe(Z,Le){v[Z]!==Le&&(r.pixelStorei(Z,Le),v[Z]=Le)}function Fe(Z){xe.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),xe.copy(Z))}function Pe(Z){Ee.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Ee.copy(Z))}function at(Z,Le){let Me=p.get(Le);Me===void 0&&(Me=new WeakMap,p.set(Le,Me));let Ue=Me.get(Z);Ue===void 0&&(Ue=r.getUniformBlockIndex(Le,Z.name),Me.set(Z,Ue))}function st(Z,Le){const Ue=p.get(Le).get(Z);m.get(Le)!==Ue&&(r.uniformBlockBinding(Le,Ue,Z.__bindingPointIndex),m.set(Le,Ue))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},G=null,E={},g={},M=new WeakMap,x=[],A=null,y=!1,S=null,R=null,U=null,C=null,P=null,N=null,F=null,T=new ht(0,0,0),O=0,Y=!1,V=null,X=null,le=null,ae=null,Q=null,xe.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:me,disable:Ce,bindFramebuffer:ke,drawBuffers:Ne,useProgram:ut,setBlending:lt,setMaterial:we,setFlipSided:Ye,setCullFace:Qe,setLineWidth:qe,setPolygonOffset:Lt,setScissorTest:Nt,activeTexture:nn,bindTexture:J,unbindTexture:Ht,compressedTexImage2D:Ut,compressedTexImage3D:z,texImage2D:ve,texImage3D:ye,pixelStorei:Xe,getParameter:De,updateUBOMapping:at,uniformBlockBinding:st,texStorage2D:Re,texStorage3D:Oe,texSubImage2D:w,texSubImage3D:ne,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Fe,viewport:Pe,reset:mt}}function NC(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new He,_=new WeakMap,v=new Set;let g;const M=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(z,w){return x?new OffscreenCanvas(z,w):Yl("canvas")}function y(z,w,ne){let de=1;const _e=Ut(z);if((_e.width>ne||_e.height>ne)&&(de=ne/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Re=Math.floor(de*_e.width),Oe=Math.floor(de*_e.height);g===void 0&&(g=A(Re,Oe));const ve=w?A(Re,Oe):g;return ve.width=Re,ve.height=Oe,ve.getContext("2d").drawImage(z,0,0,Re,Oe),pt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Re+"x"+Oe+")."),ve}else return"data"in z&&pt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),z;return z}function S(z){return z.generateMipmaps}function R(z){r.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(z,w,ne,de,_e,Re=!1){if(z!==null){if(r[z]!==void 0)return r[z];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Oe;de&&(Oe=e.get("EXT_texture_norm16"),Oe||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=w;if(w===r.RED&&(ne===r.FLOAT&&(ve=r.R32F),ne===r.HALF_FLOAT&&(ve=r.R16F),ne===r.UNSIGNED_BYTE&&(ve=r.R8),ne===r.UNSIGNED_SHORT&&Oe&&(ve=Oe.R16_EXT),ne===r.SHORT&&Oe&&(ve=Oe.R16_SNORM_EXT)),w===r.RED_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ve=r.R8UI),ne===r.UNSIGNED_SHORT&&(ve=r.R16UI),ne===r.UNSIGNED_INT&&(ve=r.R32UI),ne===r.BYTE&&(ve=r.R8I),ne===r.SHORT&&(ve=r.R16I),ne===r.INT&&(ve=r.R32I)),w===r.RG&&(ne===r.FLOAT&&(ve=r.RG32F),ne===r.HALF_FLOAT&&(ve=r.RG16F),ne===r.UNSIGNED_BYTE&&(ve=r.RG8),ne===r.UNSIGNED_SHORT&&Oe&&(ve=Oe.RG16_EXT),ne===r.SHORT&&Oe&&(ve=Oe.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ve=r.RG8UI),ne===r.UNSIGNED_SHORT&&(ve=r.RG16UI),ne===r.UNSIGNED_INT&&(ve=r.RG32UI),ne===r.BYTE&&(ve=r.RG8I),ne===r.SHORT&&(ve=r.RG16I),ne===r.INT&&(ve=r.RG32I)),w===r.RGB_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ve=r.RGB8UI),ne===r.UNSIGNED_SHORT&&(ve=r.RGB16UI),ne===r.UNSIGNED_INT&&(ve=r.RGB32UI),ne===r.BYTE&&(ve=r.RGB8I),ne===r.SHORT&&(ve=r.RGB16I),ne===r.INT&&(ve=r.RGB32I)),w===r.RGBA_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ve=r.RGBA8UI),ne===r.UNSIGNED_SHORT&&(ve=r.RGBA16UI),ne===r.UNSIGNED_INT&&(ve=r.RGBA32UI),ne===r.BYTE&&(ve=r.RGBA8I),ne===r.SHORT&&(ve=r.RGBA16I),ne===r.INT&&(ve=r.RGBA32I)),w===r.RGB&&(ne===r.UNSIGNED_SHORT&&Oe&&(ve=Oe.RGB16_EXT),ne===r.SHORT&&Oe&&(ve=Oe.RGB16_SNORM_EXT),ne===r.UNSIGNED_INT_5_9_9_9_REV&&(ve=r.RGB9_E5),ne===r.UNSIGNED_INT_10F_11F_11F_REV&&(ve=r.R11F_G11F_B10F)),w===r.RGBA){const ye=Re?Yu:Rt.getTransfer(_e);ne===r.FLOAT&&(ve=r.RGBA32F),ne===r.HALF_FLOAT&&(ve=r.RGBA16F),ne===r.UNSIGNED_BYTE&&(ve=ye===Vt?r.SRGB8_ALPHA8:r.RGBA8),ne===r.UNSIGNED_SHORT&&Oe&&(ve=Oe.RGBA16_EXT),ne===r.SHORT&&Oe&&(ve=Oe.RGBA16_SNORM_EXT),ne===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),ne===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function P(z,w){let ne;return z?w===null||w===ya||w===kl?ne=r.DEPTH24_STENCIL8:w===aa?ne=r.DEPTH32F_STENCIL8:w===Gl&&(ne=r.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ya||w===kl?ne=r.DEPTH_COMPONENT24:w===aa?ne=r.DEPTH_COMPONENT32F:w===Gl&&(ne=r.DEPTH_COMPONENT16),ne}function N(z,w){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Wn&&z.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function F(z){const w=z.target;w.removeEventListener("dispose",F),O(w),w.isVideoTexture&&_.delete(w),w.isHTMLTexture&&v.delete(w)}function T(z){const w=z.target;w.removeEventListener("dispose",T),V(w)}function O(z){const w=a.get(z);if(w.__webglInit===void 0)return;const ne=z.source,de=M.get(ne);if(de){const _e=de[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Y(z),Object.keys(de).length===0&&M.delete(ne)}a.remove(z)}function Y(z){const w=a.get(z);r.deleteTexture(w.__webglTexture);const ne=z.source,de=M.get(ne);delete de[w.__cacheKey],u.memory.textures--}function V(z){const w=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let _e=0;_e<w.__webglFramebuffer[de].length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[de][_e]);else r.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)r.deleteFramebuffer(w.__webglFramebuffer[de]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ne=z.textures;for(let de=0,_e=ne.length;de<_e;de++){const Re=a.get(ne[de]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),u.memory.textures--),a.remove(ne[de])}a.remove(z)}let X=0;function le(){X=0}function ae(){return X}function Q(z){X=z}function B(){const z=X;return z>=o.maxTextures&&pt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),X+=1,z}function q(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function ee(z,w){const ne=a.get(z);if(z.isVideoTexture&&J(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ne.__version!==z.version){const de=z.image;if(de===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(ne,z,w);return}}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,ne.__webglTexture,r.TEXTURE0+w)}function re(z,w){const ne=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Ce(ne,z,w);return}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,ne.__webglTexture,r.TEXTURE0+w)}function G(z,w){const ne=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Ce(ne,z,w);return}n.bindTexture(r.TEXTURE_3D,ne.__webglTexture,r.TEXTURE0+w)}function E(z,w){const ne=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ne.__version!==z.version){ke(ne,z,w);return}n.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture,r.TEXTURE0+w)}const H={[Kt]:r.REPEAT,[Xn]:r.CLAMP_TO_EDGE,[cp]:r.MIRRORED_REPEAT},ie={[Wn]:r.NEAREST,[L2]:r.NEAREST_MIPMAP_NEAREST,[su]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[hh]:r.LINEAR_MIPMAP_NEAREST,[lr]:r.LINEAR_MIPMAP_LINEAR},xe={[U2]:r.NEVER,[B2]:r.ALWAYS,[O2]:r.LESS,[cm]:r.LEQUAL,[P2]:r.EQUAL,[um]:r.GEQUAL,[I2]:r.GREATER,[F2]:r.NOTEQUAL};function Ee(z,w){if(w.type===aa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===hh||w.magFilter===su||w.magFilter===lr||w.minFilter===Jn||w.minFilter===hh||w.minFilter===su||w.minFilter===lr)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,H[w.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,H[w.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,H[w.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,ie[w.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wn||w.minFilter!==su&&w.minFilter!==lr||w.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function K(z,w){let ne=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",F));const de=w.source;let _e=M.get(de);_e===void 0&&(_e={},M.set(de,_e));const Re=q(w);if(Re!==z.__cacheKey){_e[Re]===void 0&&(_e[Re]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),_e[Re].usedTimes++;const Oe=_e[z.__cacheKey];Oe!==void 0&&(_e[z.__cacheKey].usedTimes--,Oe.usedTimes===0&&Y(w)),z.__cacheKey=Re,z.__webglTexture=_e[Re].texture}return ne}function se(z,w,ne){return Math.floor(Math.floor(z/ne)/w)}function me(z,w,ne,de){const Re=z.updateRanges;if(Re.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,ne,de,w.data);else{Re.sort((Xe,Fe)=>Xe.start-Fe.start);let Oe=0;for(let Xe=1;Xe<Re.length;Xe++){const Fe=Re[Oe],Pe=Re[Xe],at=Fe.start+Fe.count,st=se(Pe.start,w.width,4),mt=se(Fe.start,w.width,4);Pe.start<=at+1&&st===mt&&se(Pe.start+Pe.count-1,w.width,4)===st?Fe.count=Math.max(Fe.count,Pe.start+Pe.count-Fe.start):(++Oe,Re[Oe]=Pe)}Re.length=Oe+1;const ve=n.getParameter(r.UNPACK_ROW_LENGTH),ye=n.getParameter(r.UNPACK_SKIP_PIXELS),De=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Xe=0,Fe=Re.length;Xe<Fe;Xe++){const Pe=Re[Xe],at=Math.floor(Pe.start/4),st=Math.ceil(Pe.count/4),mt=at%w.width,Z=Math.floor(at/w.width),Le=st,Me=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(r.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(r.TEXTURE_2D,0,mt,Z,Le,Me,ne,de,w.data)}z.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ve),n.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Ce(z,w,ne){let de=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=r.TEXTURE_3D);const _e=K(z,w),Re=w.source;n.bindTexture(de,z.__webglTexture,r.TEXTURE0+ne);const Oe=a.get(Re);if(Re.version!==Oe.__version||_e===!0){if(n.activeTexture(r.TEXTURE0+ne),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Me=Rt.getPrimaries(Rt.workingColorSpace),Ue=w.colorSpace===qa?null:Rt.getPrimaries(w.colorSpace),Ge=w.colorSpace===qa||Me===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let ye=y(w.image,!1,o.maxTextureSize);ye=Ht(w,ye);const De=c.convert(w.format,w.colorSpace),Xe=c.convert(w.type);let Fe=C(w.internalFormat,De,Xe,w.normalized,w.colorSpace,w.isVideoTexture);Ee(de,w);let Pe;const at=w.mipmaps,st=w.isVideoTexture!==!0,mt=Oe.__version===void 0||_e===!0,Z=Re.dataReady,Le=N(w,ye);if(w.isDepthTexture)Fe=P(w.format===cr,w.type),mt&&(st?n.texStorage2D(r.TEXTURE_2D,1,Fe,ye.width,ye.height):n.texImage2D(r.TEXTURE_2D,0,Fe,ye.width,ye.height,0,De,Xe,null));else if(w.isDataTexture)if(at.length>0){st&&mt&&n.texStorage2D(r.TEXTURE_2D,Le,Fe,at[0].width,at[0].height);for(let Me=0,Ue=at.length;Me<Ue;Me++)Pe=at[Me],st?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,De,Xe,Pe.data):n.texImage2D(r.TEXTURE_2D,Me,Fe,Pe.width,Pe.height,0,De,Xe,Pe.data);w.generateMipmaps=!1}else st?(mt&&n.texStorage2D(r.TEXTURE_2D,Le,Fe,ye.width,ye.height),Z&&me(w,ye,De,Xe)):n.texImage2D(r.TEXTURE_2D,0,Fe,ye.width,ye.height,0,De,Xe,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&mt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Fe,at[0].width,at[0].height,ye.depth);for(let Me=0,Ue=at.length;Me<Ue;Me++)if(Pe=at[Me],w.format!==sa)if(De!==null)if(st){if(Z)if(w.layerUpdates.size>0){const Ge=q_(Pe.width,Pe.height,w.format,w.type);for(const Ae of w.layerUpdates){const et=Pe.data.subarray(Ae*Ge/Pe.data.BYTES_PER_ELEMENT,(Ae+1)*Ge/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,Ae,Pe.width,Pe.height,1,De,et)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ye.depth,De,Pe.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,Pe.width,Pe.height,ye.depth,0,Pe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Z&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ye.depth,De,Xe,Pe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,Pe.width,Pe.height,ye.depth,0,De,Xe,Pe.data)}else{st&&mt&&n.texStorage2D(r.TEXTURE_2D,Le,Fe,at[0].width,at[0].height);for(let Me=0,Ue=at.length;Me<Ue;Me++)Pe=at[Me],w.format!==sa?De!==null?st?Z&&n.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,De,Pe.data):n.compressedTexImage2D(r.TEXTURE_2D,Me,Fe,Pe.width,Pe.height,0,Pe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,De,Xe,Pe.data):n.texImage2D(r.TEXTURE_2D,Me,Fe,Pe.width,Pe.height,0,De,Xe,Pe.data)}else if(w.isDataArrayTexture)if(st){if(mt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Fe,ye.width,ye.height,ye.depth),Z)if(w.layerUpdates.size>0){const Me=q_(ye.width,ye.height,w.format,w.type);for(const Ue of w.layerUpdates){const Ge=ye.data.subarray(Ue*Me/ye.data.BYTES_PER_ELEMENT,(Ue+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,ye.width,ye.height,1,De,Xe,Ge)}w.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,De,Xe,ye.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,De,Xe,ye.data);else if(w.isData3DTexture)st?(mt&&n.texStorage3D(r.TEXTURE_3D,Le,Fe,ye.width,ye.height,ye.depth),Z&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,De,Xe,ye.data)):n.texImage3D(r.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,De,Xe,ye.data);else if(w.isFramebufferTexture){if(mt)if(st)n.texStorage2D(r.TEXTURE_2D,Le,Fe,ye.width,ye.height);else{let Me=ye.width,Ue=ye.height;for(let Ge=0;Ge<Le;Ge++)n.texImage2D(r.TEXTURE_2D,Ge,Fe,Me,Ue,0,De,Xe,null),Me>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ye.parentNode!==Me){Me.appendChild(ye),v.add(w),Me.onpaint=Ue=>{const Ge=Ue.changedElements;for(const Ae of v)Ge.includes(Ae.image)&&(Ae.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ye);else{const Ge=r.RGBA,Ae=r.RGBA,et=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Ae,et,ye)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(at.length>0){if(st&&mt){const Me=Ut(at[0]);n.texStorage2D(r.TEXTURE_2D,Le,Fe,Me.width,Me.height)}for(let Me=0,Ue=at.length;Me<Ue;Me++)Pe=at[Me],st?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,De,Xe,Pe):n.texImage2D(r.TEXTURE_2D,Me,Fe,De,Xe,Pe);w.generateMipmaps=!1}else if(st){if(mt){const Me=Ut(ye);n.texStorage2D(r.TEXTURE_2D,Le,Fe,Me.width,Me.height)}Z&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Xe,ye)}else n.texImage2D(r.TEXTURE_2D,0,Fe,De,Xe,ye);S(w)&&R(de),Oe.__version=Re.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function ke(z,w,ne){if(w.image.length!==6)return;const de=K(z,w),_e=w.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+ne);const Re=a.get(_e);if(_e.version!==Re.__version||de===!0){n.activeTexture(r.TEXTURE0+ne);const Oe=Rt.getPrimaries(Rt.workingColorSpace),ve=w.colorSpace===qa?null:Rt.getPrimaries(w.colorSpace),ye=w.colorSpace===qa||Oe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,Xe=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let Ae=0;Ae<6;Ae++)!De&&!Xe?Fe[Ae]=y(w.image[Ae],!0,o.maxCubemapSize):Fe[Ae]=Xe?w.image[Ae].image:w.image[Ae],Fe[Ae]=Ht(w,Fe[Ae]);const Pe=Fe[0],at=c.convert(w.format,w.colorSpace),st=c.convert(w.type),mt=C(w.internalFormat,at,st,w.normalized,w.colorSpace),Z=w.isVideoTexture!==!0,Le=Re.__version===void 0||de===!0,Me=_e.dataReady;let Ue=N(w,Pe);Ee(r.TEXTURE_CUBE_MAP,w);let Ge;if(De){Z&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,mt,Pe.width,Pe.height);for(let Ae=0;Ae<6;Ae++){Ge=Fe[Ae].mipmaps;for(let et=0;et<Ge.length;et++){const Ze=Ge[et];w.format!==sa?at!==null?Z?Me&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,0,0,Ze.width,Ze.height,at,Ze.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,mt,Ze.width,Ze.height,0,Ze.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,0,0,Ze.width,Ze.height,at,st,Ze.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,mt,Ze.width,Ze.height,0,at,st,Ze.data)}}}else{if(Ge=w.mipmaps,Z&&Le){Ge.length>0&&Ue++;const Ae=Ut(Fe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,mt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Xe){Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Fe[Ae].width,Fe[Ae].height,at,st,Fe[Ae].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,Fe[Ae].width,Fe[Ae].height,0,at,st,Fe[Ae].data);for(let et=0;et<Ge.length;et++){const hn=Ge[et].image[Ae].image;Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,0,0,hn.width,hn.height,at,st,hn.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,mt,hn.width,hn.height,0,at,st,hn.data)}}else{Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,at,st,Fe[Ae]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,at,st,Fe[Ae]);for(let et=0;et<Ge.length;et++){const Ze=Ge[et];Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,0,0,at,st,Ze.image[Ae]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,mt,at,st,Ze.image[Ae])}}}S(w)&&R(r.TEXTURE_CUBE_MAP),Re.__version=_e.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Ne(z,w,ne,de,_e,Re){const Oe=c.convert(ne.format,ne.colorSpace),ve=c.convert(ne.type),ye=C(ne.internalFormat,Oe,ve,ne.normalized,ne.colorSpace),De=a.get(w),Xe=a.get(ne);if(Xe.__renderTarget=w,!De.__hasExternalTextures){const Fe=Math.max(1,w.width>>Re),Pe=Math.max(1,w.height>>Re);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?n.texImage3D(_e,Re,ye,Fe,Pe,w.depth,0,Oe,ve,null):n.texImage2D(_e,Re,ye,Fe,Pe,0,Oe,ve,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),nn(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,_e,Xe.__webglTexture,0,Nt(w)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,_e,Xe.__webglTexture,Re),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(z,w,ne){if(r.bindRenderbuffer(r.RENDERBUFFER,z),w.depthBuffer){const de=w.depthTexture,_e=de&&de.isDepthTexture?de.type:null,Re=P(w.stencilBuffer,_e),Oe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;nn(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt(w),Re,w.width,w.height):ne?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt(w),Re,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Re,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,z)}else{const de=w.textures;for(let _e=0;_e<de.length;_e++){const Re=de[_e],Oe=c.convert(Re.format,Re.colorSpace),ve=c.convert(Re.type),ye=C(Re.internalFormat,Oe,ve,Re.normalized,Re.colorSpace);nn(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt(w),ye,w.width,w.height):ne?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt(w),ye,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ye,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function nt(z,w,ne){const de=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=a.get(w.depthTexture);if(_e.__renderTarget=w,(!_e.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),_e.__webglTexture===void 0){_e.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,w.depthTexture);const De=c.convert(w.depthTexture.format),Xe=c.convert(w.depthTexture.type);let Fe;w.depthTexture.format===Ka?Fe=r.DEPTH_COMPONENT24:w.depthTexture.format===cr&&(Fe=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Fe,w.width,w.height,0,De,Xe,null)}}else ee(w.depthTexture,0);const Re=_e.__webglTexture,Oe=Nt(w),ve=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+ne:r.TEXTURE_2D,ye=w.depthTexture.format===cr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ka)nn(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ve,Re,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ve,Re,0);else if(w.depthTexture.format===cr)nn(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ve,Re,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ve,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(z){const w=a.get(z),ne=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){const de=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=de}if(z.depthTexture&&!w.__autoAllocateDepthBuffer)if(ne)for(let de=0;de<6;de++)nt(w.__webglFramebuffer[de],z,de);else{const de=z.texture.mipmaps;de&&de.length>0?nt(w.__webglFramebuffer[0],z,0):nt(w.__webglFramebuffer,z,0)}else if(ne){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=r.createRenderbuffer(),ut(w.__webglDepthbuffer[de],z,!1);else{const _e=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,Re)}}else{const de=z.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ut(w.__webglDepthbuffer,z,!1);else{const _e=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,Re)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(z,w,ne){const de=a.get(z);w!==void 0&&Ne(de.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ne!==void 0&&Ve(z)}function we(z){const w=z.texture,ne=a.get(z),de=a.get(w);z.addEventListener("dispose",T);const _e=z.textures,Re=z.isWebGLCubeRenderTarget===!0,Oe=_e.length>1;if(Oe||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=w.version,u.memory.textures++),Re){ne.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[ve]=[];for(let ye=0;ye<w.mipmaps.length;ye++)ne.__webglFramebuffer[ve][ye]=r.createFramebuffer()}else ne.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)ne.__webglFramebuffer[ve]=r.createFramebuffer()}else ne.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let ve=0,ye=_e.length;ve<ye;ve++){const De=a.get(_e[ve]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&nn(z)===!1){ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ve=0;ve<_e.length;ve++){const ye=_e[ve];ne.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const De=c.convert(ye.format,ye.colorSpace),Xe=c.convert(ye.type),Fe=C(ye.internalFormat,De,Xe,ye.normalized,ye.colorSpace,z.isXRRenderTarget===!0),Pe=Nt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Fe,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(ne.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){n.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)Ne(ne.__webglFramebuffer[ve][ye],z,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ye);else Ne(ne.__webglFramebuffer[ve],z,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);S(w)&&R(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let ve=0,ye=_e.length;ve<ye;ve++){const De=_e[ve],Xe=a.get(De);let Fe=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Fe=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Fe,Xe.__webglTexture),Ee(Fe,De),Ne(ne.__webglFramebuffer,z,De,r.COLOR_ATTACHMENT0+ve,Fe,0),S(De)&&R(Fe)}n.unbindTexture()}else{let ve=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ve=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ve,de.__webglTexture),Ee(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)Ne(ne.__webglFramebuffer[ye],z,w,r.COLOR_ATTACHMENT0,ve,ye);else Ne(ne.__webglFramebuffer,z,w,r.COLOR_ATTACHMENT0,ve,0);S(w)&&R(ve),n.unbindTexture()}z.depthBuffer&&Ve(z)}function Ye(z){const w=z.textures;for(let ne=0,de=w.length;ne<de;ne++){const _e=w[ne];if(S(_e)){const Re=U(z),Oe=a.get(_e).__webglTexture;n.bindTexture(Re,Oe),R(Re),n.unbindTexture()}}}const Qe=[],qe=[];function Lt(z){if(z.samples>0){if(nn(z)===!1){const w=z.textures,ne=z.width,de=z.height;let _e=r.COLOR_BUFFER_BIT;const Re=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=a.get(z),ve=w.length>1;if(ve)for(let De=0;De<w.length;De++)n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ye=z.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let De=0;De<w.length;De++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Xe=a.get(w[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,ne,de,0,0,ne,de,_e,r.NEAREST),m===!0&&(Qe.length=0,qe.length=0,Qe.push(r.COLOR_ATTACHMENT0+De),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Qe.push(Re),qe.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let De=0;De<w.length;De++){n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Xe=a.get(w[De]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Xe,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const w=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Nt(z){return Math.min(o.maxSamples,z.samples)}function nn(z){const w=a.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function J(z){const w=u.render.frame;_.get(z)!==w&&(_.set(z,w),z.update())}function Ht(z,w){const ne=z.colorSpace,de=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ne!==Vu&&ne!==qa&&(Rt.getTransfer(ne)===Vt?(de!==sa||_e!==Ui)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",ne)),w}function Ut(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=le,this.getTextureUnits=ae,this.setTextureUnits=Q,this.setTexture2D=ee,this.setTexture2DArray=re,this.setTexture3D=G,this.setTextureCube=E,this.rebindTextures=lt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function UC(r,e){function n(a,o=qa){let c;const u=Rt.getTransfer(o);if(a===Ui)return r.UNSIGNED_BYTE;if(a===im)return r.UNSIGNED_SHORT_4_4_4_4;if(a===am)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Uv)return r.BYTE;if(a===Ov)return r.SHORT;if(a===Gl)return r.UNSIGNED_SHORT;if(a===nm)return r.INT;if(a===ya)return r.UNSIGNED_INT;if(a===aa)return r.FLOAT;if(a===xi)return r.HALF_FLOAT;if(a===Fv)return r.ALPHA;if(a===Bv)return r.RGB;if(a===sa)return r.RGBA;if(a===Ka)return r.DEPTH_COMPONENT;if(a===cr)return r.DEPTH_STENCIL;if(a===sm)return r.RED;if(a===rm)return r.RED_INTEGER;if(a===dr)return r.RG;if(a===om)return r.RG_INTEGER;if(a===lm)return r.RGBA_INTEGER;if(a===Uu||a===Ou||a===Pu||a===Iu)if(u===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===up||a===fp||a===dp||a===hp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===up)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===fp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===dp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===hp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===pp||a===mp||a===gp||a===xp||a===_p||a===Gu||a===vp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===pp||a===mp)return u===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===gp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===xp)return c.COMPRESSED_R11_EAC;if(a===_p)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Gu)return c.COMPRESSED_RG11_EAC;if(a===vp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===yp||a===Sp||a===Mp||a===bp||a===Ep||a===Tp||a===wp||a===Ap||a===Cp||a===Rp||a===Lp||a===Dp||a===Np||a===Up)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===yp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Sp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Mp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===bp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ep)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===wp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ap)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Cp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Rp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Lp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dp)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Np)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Up)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Op||a===Pp||a===Ip)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Op)return u===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Pp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Fp||a===Bp||a===ku||a===zp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Fp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Bp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ku)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===zp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===kl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const OC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PC=`
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

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Zv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Fn({vertexShader:OC,fragmentShader:PC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ct(new Wl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FC extends hr{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,M=null,x=null;const A=typeof XRWebGLBinding<"u",y=new IC,S={},R=n.getContextAttributes();let U=null,C=null;const P=[],N=[],F=new He;let T=null;const O=new gi;O.viewport=new dn;const Y=new gi;Y.viewport=new dn;const V=[O,Y],X=new XE;let le=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=P[K];return se===void 0&&(se=new vh,P[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=P[K];return se===void 0&&(se=new vh,P[K]=se),se.getGripSpace()},this.getHand=function(K){let se=P[K];return se===void 0&&(se=new vh,P[K]=se),se.getHandSpace()};function Q(K){const se=N.indexOf(K.inputSource);if(se===-1)return;const me=P[se];me!==void 0&&(me.update(K.inputSource,K.frame,p||u),me.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",q);for(let K=0;K<P.length;K++){const se=N[K];se!==null&&(N[K]=null,P[K].disconnect(se))}le=null,ae=null,y.reset();for(const K in S)delete S[K];e.setRenderTarget(U),M=null,g=null,v=null,o=null,C=null,Ee.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,a.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,a.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",B),o.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ce=null,ke=null;R.depth&&(ke=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=R.stencil?cr:Ka,Ce=R.stencil?kl:ya);const Ne={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Ne),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new oi(g.textureWidth,g.textureHeight,{format:sa,type:Ui,depthTexture:new bo(g.textureWidth,g.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new oi(M.framebufferWidth,M.framebufferHeight,{format:sa,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Ee.setContext(o),Ee.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(K){for(let se=0;se<K.removed.length;se++){const me=K.removed[se],Ce=N.indexOf(me);Ce>=0&&(N[Ce]=null,P[Ce].disconnect(me))}for(let se=0;se<K.added.length;se++){const me=K.added[se];let Ce=N.indexOf(me);if(Ce===-1){for(let Ne=0;Ne<P.length;Ne++)if(Ne>=N.length){N.push(me),Ce=Ne;break}else if(N[Ne]===null){N[Ne]=me,Ce=Ne;break}if(Ce===-1)break}const ke=P[Ce];ke&&ke.connect(me)}}const ee=new k,re=new k;function G(K,se,me){ee.setFromMatrixPosition(se.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const Ce=ee.distanceTo(re),ke=se.projectionMatrix.elements,Ne=me.projectionMatrix.elements,ut=ke[14]/(ke[10]-1),nt=ke[14]/(ke[10]+1),Ve=(ke[9]+1)/ke[5],lt=(ke[9]-1)/ke[5],we=(ke[8]-1)/ke[0],Ye=(Ne[8]+1)/Ne[0],Qe=ut*we,qe=ut*Ye,Lt=Ce/(-we+Ye),Nt=Lt*-we;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Nt),K.translateZ(Lt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const nn=ut+Lt,J=nt+Lt,Ht=Qe-Nt,Ut=qe+(Ce-Nt),z=Ve*nt/J*nn,w=lt*nt/J*nn;K.projectionMatrix.makePerspective(Ht,Ut,z,w,nn,J),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function E(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let se=K.near,me=K.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(me=y.depthFar)),X.near=Y.near=O.near=se,X.far=Y.far=O.far=me,(le!==X.near||ae!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),le=X.near,ae=X.far),X.layers.mask=K.layers.mask|6,O.layers.mask=X.layers.mask&-5,Y.layers.mask=X.layers.mask&-3;const Ce=K.parent,ke=X.cameras;E(X,Ce);for(let Ne=0;Ne<ke.length;Ne++)E(ke[Ne],Ce);ke.length===2?G(X,O,Y):X.projectionMatrix.copy(O.projectionMatrix),H(K,X,Ce)};function H(K,se,me){me===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(K){m=K,g!==null&&(g.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(K){return S[K]};let ie=null;function xe(K,se){if(_=se.getViewerPose(p||u),x=se,_!==null){const me=_.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Ce=!1;me.length!==X.cameras.length&&(X.cameras.length=0,Ce=!0);for(let nt=0;nt<me.length;nt++){const Ve=me[nt];let lt=null;if(M!==null)lt=M.getViewport(Ve);else{const Ye=v.getViewSubImage(g,Ve);lt=Ye.viewport,nt===0&&(e.setRenderTargetTextures(C,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(C))}let we=V[nt];we===void 0&&(we=new gi,we.layers.enable(nt),we.viewport=new dn,V[nt]=we),we.matrix.fromArray(Ve.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ve.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(lt.x,lt.y,lt.width,lt.height),nt===0&&(X.matrix.copy(we.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ce===!0&&X.cameras.push(we)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=a.getBinding();const nt=v.getDepthInformation(me[0]);nt&&nt.isValid&&nt.texture&&y.init(nt,o.renderState)}if(ke&&ke.includes("camera-access")&&A){e.state.unbindTexture(),v=a.getBinding();for(let nt=0;nt<me.length;nt++){const Ve=me[nt].camera;if(Ve){let lt=S[Ve];lt||(lt=new Zv,S[Ve]=lt);const we=v.getCameraImage(Ve);lt.sourceTexture=we}}}}for(let me=0;me<P.length;me++){const Ce=N[me],ke=P[me];Ce!==null&&ke!==void 0&&ke.update(Ce,se,p||u)}ie&&ie(K,se),se.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:se}),x=null}const Ee=new t1;Ee.setAnimationLoop(xe),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}}const BC=new Pt,l1=new xt;l1.set(-1,0,0,0,1,0,0,0,1);function zC(r,e){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,Kv(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,U,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(c(y,S),x(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,R,U):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ri&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ri&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),U=R.envMap,C=R.envMapRotation;U&&(y.envMap.value=U,y.envMapRotation.value.setFromMatrix4(BC.makeRotationFromEuler(C)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(l1),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,R,U){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=U*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ri&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function HC(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const N=P.program;a.uniformBlockBinding(C,N)}function p(C,P){let N=o[C.id];N===void 0&&(y(C),N=_(C),o[C.id]=N,C.addEventListener("dispose",R));const F=P.program;a.updateUBOMapping(C,F);const T=e.render.frame;c[C.id]!==T&&(g(C),c[C.id]=T)}function _(C){const P=v();C.__bindingPointIndex=P;const N=r.createBuffer(),F=C.__size,T=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,N),N}function v(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],N=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let T=0,O=N.length;T<O;T++){const Y=N[T];if(Array.isArray(Y))for(let V=0,X=Y.length;V<X;V++)M(Y[V],T,V,F);else M(Y,T,0,F)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,P,N,F){if(A(C,P,N,F)===!0){const T=C.__offset,O=C.value;if(Array.isArray(O)){let Y=0;for(let V=0;V<O.length;V++){const X=O[V],le=S(X);x(X,C.__data,Y),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(Y+=le.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(O,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}function x(C,P,N){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,N)}function A(C,P,N,F){const T=C.value,O=P+"_"+N;if(F[O]===void 0)return typeof T=="number"||typeof T=="boolean"?F[O]=T:ArrayBuffer.isView(T)?F[O]=T.slice():F[O]=T.clone(),!0;{const Y=F[O];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return F[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function y(C){const P=C.uniforms;let N=0;const F=16;for(let O=0,Y=P.length;O<Y;O++){const V=Array.isArray(P[O])?P[O]:[P[O]];for(let X=0,le=V.length;X<le;X++){const ae=V[X],Q=Array.isArray(ae.value)?ae.value:[ae.value];for(let B=0,q=Q.length;B<q;B++){const ee=Q[B],re=S(ee),G=N%F,E=G%re.boundary,H=G+E;N+=E,H!==0&&F-H<re.storage&&(N+=F-H),ae.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=N,N+=re.storage}}}const T=N%F;return T>0&&(N+=F-T),C.__size=N,C.__cache={},this}function S(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",C),P}function R(C){const P=C.target;P.removeEventListener("dispose",R);const N=u.indexOf(P.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function U(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:p,dispose:U}}const GC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function kC(){return ha===null&&(ha=new Wv(GC,16,16,dr,xi),ha.name="DFG_LUT",ha.minFilter=Jn,ha.magFilter=Jn,ha.wrapS=Xn,ha.wrapT=Xn,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class VC{constructor(e={}){const{canvas:n=G2(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Ui}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const A=M,y=new Set([lm,om,rm]),S=new Set([Ui,ya,Gl,kl,im,am]),R=new Uint32Array(4),U=new Int32Array(4),C=new k;let P=null,N=null;const F=[],T=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let V=!1,X=null,le=null,ae=null,Q=null;this._outputColorSpace=mi;let B=0,q=0,ee=null,re=-1,G=null;const E=new dn,H=new dn;let ie=null;const xe=new ht(0);let Ee=0,K=n.width,se=n.height,me=1,Ce=null,ke=null;const Ne=new dn(0,0,K,se),ut=new dn(0,0,K,se);let nt=!1;const Ve=new qu;let lt=!1,we=!1;const Ye=new Pt,Qe=new k,qe=new dn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function nn(){return ee===null?me:1}let J=a;function Ht(L,$){return n.getContext(L,$)}try{const L={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zp}`),n.addEventListener("webglcontextlost",hn,!1),n.addEventListener("webglcontextrestored",Yt,!1),n.addEventListener("webglcontextcreationerror",_i,!1),J===null){const $="webgl2";if(J=Ht($,L),J===null)throw Ht($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw Ot("WebGLRenderer: "+L.message),L}let Ut,z,w,ne,de,_e,Re,Oe,ve,ye,De,Xe,Fe,Pe,at,st,mt,Z,Le,Me,Ue,Ge,Ae;function et(){Ut=new k3(J),Ut.init(),Ue=new UC(J,Ut),z=new O3(J,Ut,e,Ue),w=new DC(J,Ut),z.reversedDepthBuffer&&g&&w.buffers.depth.setReversed(!0),le=J.createFramebuffer(),ae=J.createFramebuffer(),Q=J.createFramebuffer(),ne=new X3(J),de=new xC,_e=new NC(J,Ut,w,de,z,Ue,ne),Re=new G3(Y),Oe=new ZE(J),Ge=new N3(J,Oe),ve=new V3(J,Oe,ne,Ge),ye=new q3(J,ve,Oe,Ge,ne),Z=new W3(J,z,_e),at=new P3(de),De=new gC(Y,Re,Ut,z,Ge,at),Xe=new zC(Y,de),Fe=new vC,Pe=new TC(Ut),mt=new D3(Y,Re,w,ye,x,m),st=new LC(Y,ye,z),Ae=new HC(J,ne,z,w),Le=new U3(J,Ut,ne),Me=new Y3(J,Ut,ne),ne.programs=De.programs,Y.capabilities=z,Y.extensions=Ut,Y.properties=de,Y.renderLists=Fe,Y.shadowMap=st,Y.state=w,Y.info=ne}et(),A!==Ui&&(O=new Z3(A,n.width,n.height,d,o,c));const Ze=new FC(Y,J);this.xr=Ze,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const L=Ut.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ut.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(L){L!==void 0&&(me=L,this.setSize(K,se,!1))},this.getSize=function(L){return L.set(K,se)},this.setSize=function(L,$,he=!0){if(Ze.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=L,se=$,n.width=Math.floor(L*me),n.height=Math.floor($*me),he===!0&&(n.style.width=L+"px",n.style.height=$+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(K*me,se*me).floor()},this.setDrawingBufferSize=function(L,$,he){K=L,se=$,me=he,n.width=Math.floor(L*he),n.height=Math.floor($*he),this.setViewport(0,0,L,$)},this.setEffects=function(L){if(A===Ui){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let $=0;$<L.length;$++)if(L[$].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(Ne)},this.setViewport=function(L,$,he,ue){L.isVector4?Ne.set(L.x,L.y,L.z,L.w):Ne.set(L,$,he,ue),w.viewport(E.copy(Ne).multiplyScalar(me).round())},this.getScissor=function(L){return L.copy(ut)},this.setScissor=function(L,$,he,ue){L.isVector4?ut.set(L.x,L.y,L.z,L.w):ut.set(L,$,he,ue),w.scissor(H.copy(ut).multiplyScalar(me).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(L){w.setScissorTest(nt=L)},this.setOpaqueSort=function(L){Ce=L},this.setTransparentSort=function(L){ke=L},this.getClearColor=function(L){return L.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,he=!0){let ue=0;if(L){let fe=!1;if(ee!==null){const ze=ee.texture.format;fe=y.has(ze)}if(fe){const ze=ee.texture.type,je=S.has(ze),Ie=mt.getClearColor(),Je=mt.getClearAlpha(),Ke=Ie.r,rt=Ie.g,_t=Ie.b;je?(R[0]=Ke,R[1]=rt,R[2]=_t,R[3]=Je,J.clearBufferuiv(J.COLOR,0,R)):(U[0]=Ke,U[1]=rt,U[2]=_t,U[3]=Je,J.clearBufferiv(J.COLOR,0,U))}else ue|=J.COLOR_BUFFER_BIT}$&&(ue|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&J.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),X=L},this.dispose=function(){n.removeEventListener("webglcontextlost",hn,!1),n.removeEventListener("webglcontextrestored",Yt,!1),n.removeEventListener("webglcontextcreationerror",_i,!1),mt.dispose(),Fe.dispose(),Pe.dispose(),de.dispose(),Re.dispose(),ye.dispose(),Ge.dispose(),Ae.dispose(),De.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Mn),Ze.removeEventListener("sessionend",Hn),li.stop()};function hn(L){L.preventDefault(),v_("WebGLRenderer: Context Lost."),V=!0}function Yt(){v_("WebGLRenderer: Context Restored."),V=!1;const L=ne.autoReset,$=st.enabled,he=st.autoUpdate,ue=st.needsUpdate,fe=st.type;et(),ne.autoReset=L,st.enabled=$,st.autoUpdate=he,st.needsUpdate=ue,st.type=fe}function _i(L){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function vi(L){const $=L.target;$.removeEventListener("dispose",vi),Lo($)}function Lo(L){Do(L),de.remove(L)}function Do(L){const $=de.get(L).programs;$!==void 0&&($.forEach(function(he){De.releaseProgram(he)}),L.isShaderMaterial&&De.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,he,ue,fe,ze){$===null&&($=Lt);const je=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,Ie=ts(L,$,he,ue,fe);w.setMaterial(ue,je);let Je=he.index,Ke=1;if(ue.wireframe===!0){if(Je=ve.getWireframeAttribute(he),Je===void 0)return;Ke=2}const rt=he.drawRange,_t=he.attributes.position;let it=rt.start*Ke,It=(rt.start+rt.count)*Ke;ze!==null&&(it=Math.max(it,ze.start*Ke),It=Math.min(It,(ze.start+ze.count)*Ke)),Je!==null?(it=Math.max(it,0),It=Math.min(It,Je.count)):_t!=null&&(it=Math.max(it,0),It=Math.min(It,_t.count));const pn=It-it;if(pn<0||pn===1/0)return;Ge.setup(fe,ue,Ie,he,Je);let an,Xt=Le;if(Je!==null&&(an=Oe.get(Je),Xt=Me,Xt.setIndex(an)),fe.isMesh)ue.wireframe===!0?(w.setLineWidth(ue.wireframeLinewidth*nn()),Xt.setMode(J.LINES)):Xt.setMode(J.TRIANGLES);else if(fe.isLine){let Wt=ue.linewidth;Wt===void 0&&(Wt=1),w.setLineWidth(Wt*nn()),fe.isLineSegments?Xt.setMode(J.LINES):fe.isLineLoop?Xt.setMode(J.LINE_LOOP):Xt.setMode(J.LINE_STRIP)}else fe.isPoints?Xt.setMode(J.POINTS):fe.isSprite&&Xt.setMode(J.TRIANGLES);if(fe.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Xt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const Wt=fe._multiDrawStarts,We=fe._multiDrawCounts,qn=fe._multiDrawCount,bt=Je?Oe.get(Je).bytesPerElement:1,Rn=de.get(ue).currentProgram.getUniforms();for(let yi=0;yi<qn;yi++)Rn.setValue(J,"_gl_DrawID",yi),Xt.render(Wt[yi]/bt,We[yi])}else if(fe.isInstancedMesh)Xt.renderInstances(it,pn,fe.count);else if(he.isInstancedBufferGeometry){const Wt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,We=Math.min(he.instanceCount,Wt);Xt.renderInstances(it,pn,We)}else Xt.render(it,pn)};function No(L,$,he){L.transparent===!0&&L.side===ta&&L.forceSinglePass===!1?(L.side=ri,L.needsUpdate=!0,es(L,$,he),L.side=Za,L.needsUpdate=!0,es(L,$,he),L.side=ta):es(L,$,he)}this.compile=function(L,$,he=null){he===null&&(he=L),N=Pe.get(he),N.init($),T.push(N),he.traverseVisible(function(fe){fe.isLight&&fe.layers.test($.layers)&&(N.pushLight(fe),fe.castShadow&&N.pushShadow(fe))}),L!==he&&L.traverseVisible(function(fe){fe.isLight&&fe.layers.test($.layers)&&(N.pushLight(fe),fe.castShadow&&N.pushShadow(fe))}),N.setupLights();const ue=new Set;return L.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const ze=fe.material;if(ze)if(Array.isArray(ze))for(let je=0;je<ze.length;je++){const Ie=ze[je];No(Ie,he,fe),ue.add(Ie)}else No(ze,he,fe),ue.add(ze)}),N=T.pop(),ue},this.compileAsync=function(L,$,he=null){const ue=this.compile(L,$,he);return new Promise(fe=>{function ze(){if(ue.forEach(function(je){de.get(je).currentProgram.isReady()&&ue.delete(je)}),ue.size===0){fe(L);return}setTimeout(ze,10)}Ut.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let vr=null;function ra(L){vr&&vr(L)}function Mn(){li.stop()}function Hn(){li.start()}const li=new t1;li.setAnimationLoop(ra),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(L){vr=L,Ze.setAnimationLoop(L),L===null?li.stop():li.start()},Ze.addEventListener("sessionstart",Mn),Ze.addEventListener("sessionend",Hn),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;X!==null&&X.renderStart(L,$);const he=Ze.enabled===!0&&Ze.isPresenting===!0,ue=O!==null&&(ee===null||he)&&O.begin(Y,ee);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera($),$=Ze.getCamera()),L.isScene===!0&&L.onBeforeRender(Y,L,$,ee),N=Pe.get(L,T.length),N.init($),N.state.textureUnits=_e.getTextureUnits(),T.push(N),Ye.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ve.setFromProjectionMatrix(Ye,xa,$.reversedDepth),we=this.localClippingEnabled,lt=at.init(this.clippingPlanes,we),P=Fe.get(L,F.length),P.init(),F.push(P),Ze.enabled===!0&&Ze.isPresenting===!0){const je=Y.xr.getDepthSensingMesh();je!==null&&Is(je,$,-1/0,Y.sortObjects)}Is(L,$,0,Y.sortObjects),P.finish(),Y.sortObjects===!0&&P.sort(Ce,ke,$.reversedDepth),Nt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Nt&&mt.addToRenderList(P,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&at.beginShadows();const fe=N.state.shadowsArray;if(st.render(fe,L,$),lt===!0&&at.endShadows(),(ue&&O.hasRenderPass())===!1){const je=P.opaque,Ie=P.transmissive;if(N.setupLights(),$.isArrayCamera){const Je=$.cameras;if(Ie.length>0)for(let Ke=0,rt=Je.length;Ke<rt;Ke++){const _t=Je[Ke];Zl(je,Ie,L,_t)}Nt&&mt.render(L);for(let Ke=0,rt=Je.length;Ke<rt;Ke++){const _t=Je[Ke];jl(P,L,_t,_t.viewport)}}else Ie.length>0&&Zl(je,Ie,L,$),Nt&&mt.render(L),jl(P,L,$)}ee!==null&&q===0&&(_e.updateMultisampleRenderTarget(ee),_e.updateRenderTargetMipmap(ee)),ue&&O.end(Y),L.isScene===!0&&L.onAfterRender(Y,L,$),Ge.resetDefaultState(),re=-1,G=null,T.pop(),T.length>0?(N=T[T.length-1],_e.setTextureUnits(N.state.textureUnits),lt===!0&&at.setGlobalState(Y.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,X!==null&&X.renderEnd()};function Is(L,$,he,ue){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)he=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLightProbeGrid)N.pushLightProbeGrid(L);else if(L.isLight)N.pushLight(L),L.castShadow&&N.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Ve.intersectsSprite(L)){ue&&qe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ye);const je=ye.update(L),Ie=L.material;Ie.visible&&P.push(L,je,Ie,he,qe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Ve.intersectsObject(L))){const je=ye.update(L),Ie=L.material;if(ue&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),qe.copy(L.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),qe.copy(je.boundingSphere.center)),qe.applyMatrix4(L.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ie)){const Je=je.groups;for(let Ke=0,rt=Je.length;Ke<rt;Ke++){const _t=Je[Ke],it=Ie[_t.materialIndex];it&&it.visible&&P.push(L,je,it,he,qe.z,_t)}}else Ie.visible&&P.push(L,je,Ie,he,qe.z,null)}}const ze=L.children;for(let je=0,Ie=ze.length;je<Ie;je++)Is(ze[je],$,he,ue)}function jl(L,$,he,ue){const{opaque:fe,transmissive:ze,transparent:je}=L;N.setupLightsView(he),lt===!0&&at.setGlobalState(Y.clippingPlanes,he),ue&&w.viewport(E.copy(ue)),fe.length>0&&Fs(fe,$,he),ze.length>0&&Fs(ze,$,he),je.length>0&&Fs(je,$,he),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Zl(L,$,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ue.id]===void 0){const it=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ue.id]=new oi(1,1,{generateMipmaps:!0,type:it?xi:Ui,minFilter:lr,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const ze=N.state.transmissionRenderTarget[ue.id],je=ue.viewport||E;ze.setSize(je.z*Y.transmissionResolutionScale,je.w*Y.transmissionResolutionScale);const Ie=Y.getRenderTarget(),Je=Y.getActiveCubeFace(),Ke=Y.getActiveMipmapLevel();Y.setRenderTarget(ze),Y.getClearColor(xe),Ee=Y.getClearAlpha(),Ee<1&&Y.setClearColor(16777215,.5),Y.clear(),Nt&&mt.render(he);const rt=Y.toneMapping;Y.toneMapping=va;const _t=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),N.setupLightsView(ue),lt===!0&&at.setGlobalState(Y.clippingPlanes,ue),Fs(L,he,ue),_e.updateMultisampleRenderTarget(ze),_e.updateRenderTargetMipmap(ze),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let It=0,pn=$.length;It<pn;It++){const an=$[It],{object:Xt,geometry:Wt,material:We,group:qn}=an;if(We.side===ta&&Xt.layers.test(ue.layers)){const bt=We.side;We.side=ri,We.needsUpdate=!0,$a(Xt,he,ue,Wt,We,qn),We.side=bt,We.needsUpdate=!0,it=!0}}it===!0&&(_e.updateMultisampleRenderTarget(ze),_e.updateRenderTargetMipmap(ze))}Y.setRenderTarget(Ie,Je,Ke),Y.setClearColor(xe,Ee),_t!==void 0&&(ue.viewport=_t),Y.toneMapping=rt}function Fs(L,$,he){const ue=$.isScene===!0?$.overrideMaterial:null;for(let fe=0,ze=L.length;fe<ze;fe++){const je=L[fe],{object:Ie,geometry:Je,group:Ke}=je;let rt=je.material;rt.allowOverride===!0&&ue!==null&&(rt=ue),Ie.layers.test(he.layers)&&$a(Ie,$,he,Je,rt,Ke)}}function $a(L,$,he,ue,fe,ze){L.onBeforeRender(Y,$,he,ue,fe,ze),L.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),fe.onBeforeRender(Y,$,he,ue,L,ze),fe.transparent===!0&&fe.side===ta&&fe.forceSinglePass===!1?(fe.side=ri,fe.needsUpdate=!0,Y.renderBufferDirect(he,$,ue,fe,L,ze),fe.side=Za,fe.needsUpdate=!0,Y.renderBufferDirect(he,$,ue,fe,L,ze),fe.side=ta):Y.renderBufferDirect(he,$,ue,fe,L,ze),L.onAfterRender(Y,$,he,ue,fe,ze)}function es(L,$,he){$.isScene!==!0&&($=Lt);const ue=de.get(L),fe=N.state.lights,ze=N.state.shadowsArray,je=fe.state.version,Ie=De.getParameters(L,fe.state,ze,$,he,N.state.lightProbeGridArray),Je=De.getProgramCacheKey(Ie);let Ke=ue.programs;ue.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?$.environment:null,ue.fog=$.fog;const rt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ue.envMap=Re.get(L.envMap||ue.environment,rt),ue.envMapRotation=ue.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,Ke===void 0&&(L.addEventListener("dispose",vi),Ke=new Map,ue.programs=Ke);let _t=Ke.get(Je);if(_t!==void 0){if(ue.currentProgram===_t&&ue.lightsStateVersion===je)return Ma(L,Ie),_t}else Ie.uniforms=De.getUniforms(L),X!==null&&L.isNodeMaterial&&X.build(L,he,Ie),L.onBeforeCompile(Ie,Y),_t=De.acquireProgram(Ie,Je),Ke.set(Je,_t),ue.uniforms=Ie.uniforms;const it=ue.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=at.uniform),Ma(L,Ie),ue.needsLights=Kl(L),ue.lightsStateVersion=je,ue.needsLights&&(it.ambientLightColor.value=fe.state.ambient,it.lightProbe.value=fe.state.probe,it.directionalLights.value=fe.state.directional,it.directionalLightShadows.value=fe.state.directionalShadow,it.spotLights.value=fe.state.spot,it.spotLightShadows.value=fe.state.spotShadow,it.rectAreaLights.value=fe.state.rectArea,it.ltc_1.value=fe.state.rectAreaLTC1,it.ltc_2.value=fe.state.rectAreaLTC2,it.pointLights.value=fe.state.point,it.pointLightShadows.value=fe.state.pointShadow,it.hemisphereLights.value=fe.state.hemi,it.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,it.spotLightMatrix.value=fe.state.spotLightMatrix,it.spotLightMap.value=fe.state.spotLightMap,it.pointShadowMatrix.value=fe.state.pointShadowMatrix),ue.lightProbeGrid=N.state.lightProbeGridArray.length>0,ue.currentProgram=_t,ue.uniformsList=null,_t}function Sa(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=Fu.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Ma(L,$){const he=de.get(L);he.outputColorSpace=$.outputColorSpace,he.batching=$.batching,he.batchingColor=$.batchingColor,he.instancing=$.instancing,he.instancingColor=$.instancingColor,he.instancingMorph=$.instancingMorph,he.skinning=$.skinning,he.morphTargets=$.morphTargets,he.morphNormals=$.morphNormals,he.morphColors=$.morphColors,he.morphTargetsCount=$.morphTargetsCount,he.numClippingPlanes=$.numClippingPlanes,he.numIntersection=$.numClipIntersection,he.vertexAlphas=$.vertexAlphas,he.vertexTangents=$.vertexTangents,he.toneMapping=$.toneMapping}function Bs(L,$){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;C.setFromMatrixPosition($.matrixWorld);for(let he=0,ue=L.length;he<ue;he++){const fe=L[he];if(fe.texture!==null&&fe.boundingBox.containsPoint(C))return fe}return null}function ts(L,$,he,ue,fe){$.isScene!==!0&&($=Lt),_e.resetTextureUnits();const ze=$.fog,je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?$.environment:null,Ie=ee===null?Y.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Rt.workingColorSpace,Je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Ke=Re.get(ue.envMap||je,Je),rt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,_t=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),it=!!he.morphAttributes.position,It=!!he.morphAttributes.normal,pn=!!he.morphAttributes.color;let an=va;ue.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(an=Y.toneMapping);const Xt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Wt=Xt!==void 0?Xt.length:0,We=de.get(ue),qn=N.state.lights;if(lt===!0&&(we===!0||L!==G)){const kt=L===G&&ue.id===re;at.setState(ue,L,kt)}let bt=!1;ue.version===We.__version?(We.needsLights&&We.lightsStateVersion!==qn.state.version||We.outputColorSpace!==Ie||fe.isBatchedMesh&&We.batching===!1||!fe.isBatchedMesh&&We.batching===!0||fe.isBatchedMesh&&We.batchingColor===!0&&fe.colorTexture===null||fe.isBatchedMesh&&We.batchingColor===!1&&fe.colorTexture!==null||fe.isInstancedMesh&&We.instancing===!1||!fe.isInstancedMesh&&We.instancing===!0||fe.isSkinnedMesh&&We.skinning===!1||!fe.isSkinnedMesh&&We.skinning===!0||fe.isInstancedMesh&&We.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&We.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&We.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&We.instancingMorph===!1&&fe.morphTexture!==null||We.envMap!==Ke||ue.fog===!0&&We.fog!==ze||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==at.numPlanes||We.numIntersection!==at.numIntersection)||We.vertexAlphas!==rt||We.vertexTangents!==_t||We.morphTargets!==it||We.morphNormals!==It||We.morphColors!==pn||We.toneMapping!==an||We.morphTargetsCount!==Wt||!!We.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,We.__version=ue.version);let Rn=We.currentProgram;bt===!0&&(Rn=es(ue,$,fe),X&&ue.isNodeMaterial&&X.onUpdateProgram(ue,Rn,We));let yi=!1,Xi=!1,Si=!1;const qt=Rn.getUniforms(),mn=We.uniforms;if(w.useProgram(Rn.program)&&(yi=!0,Xi=!0,Si=!0),ue.id!==re&&(re=ue.id,Xi=!0),We.needsLights){const kt=Bs(N.state.lightProbeGridArray,fe);We.lightProbeGrid!==kt&&(We.lightProbeGrid=kt,Xi=!0)}if(yi||G!==L){w.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),qt.setValue(J,"projectionMatrix",L.projectionMatrix),qt.setValue(J,"viewMatrix",L.matrixWorldInverse);const oa=qt.map.cameraPosition;oa!==void 0&&oa.setValue(J,Qe.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&qt.setValue(J,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&qt.setValue(J,"isOrthographic",L.isOrthographicCamera===!0),G!==L&&(G=L,Xi=!0,Si=!0)}if(We.needsLights&&(qn.state.directionalShadowMap.length>0&&qt.setValue(J,"directionalShadowMap",qn.state.directionalShadowMap,_e),qn.state.spotShadowMap.length>0&&qt.setValue(J,"spotShadowMap",qn.state.spotShadowMap,_e),qn.state.pointShadowMap.length>0&&qt.setValue(J,"pointShadowMap",qn.state.pointShadowMap,_e)),fe.isSkinnedMesh){qt.setOptional(J,fe,"bindMatrix"),qt.setOptional(J,fe,"bindMatrixInverse");const kt=fe.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),qt.setValue(J,"boneTexture",kt.boneTexture,_e))}fe.isBatchedMesh&&(qt.setOptional(J,fe,"batchingTexture"),qt.setValue(J,"batchingTexture",fe._matricesTexture,_e),qt.setOptional(J,fe,"batchingIdTexture"),qt.setValue(J,"batchingIdTexture",fe._indirectTexture,_e),qt.setOptional(J,fe,"batchingColorTexture"),fe._colorsTexture!==null&&qt.setValue(J,"batchingColorTexture",fe._colorsTexture,_e));const Wi=he.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&Z.update(fe,he,Rn),(Xi||We.receiveShadow!==fe.receiveShadow)&&(We.receiveShadow=fe.receiveShadow,qt.setValue(J,"receiveShadow",fe.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&$.environment!==null&&(mn.envMapIntensity.value=$.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=kC()),Xi){if(qt.setValue(J,"toneMappingExposure",Y.toneMappingExposure),We.needsLights&&bn(mn,Si),ze&&ue.fog===!0&&Xe.refreshFogUniforms(mn,ze),Xe.refreshMaterialUniforms(mn,ue,me,se,N.state.transmissionRenderTarget[L.id]),We.needsLights&&We.lightProbeGrid){const kt=We.lightProbeGrid;mn.probesSH.value=kt.texture,mn.probesMin.value.copy(kt.boundingBox.min),mn.probesMax.value.copy(kt.boundingBox.max),mn.probesResolution.value.copy(kt.resolution)}Fu.upload(J,Sa(We),mn,_e)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Fu.upload(J,Sa(We),mn,_e),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&qt.setValue(J,"center",fe.center),qt.setValue(J,"modelViewMatrix",fe.modelViewMatrix),qt.setValue(J,"normalMatrix",fe.normalMatrix),qt.setValue(J,"modelMatrix",fe.matrixWorld),ue.uniformsGroups!==void 0){const kt=ue.uniformsGroups;for(let oa=0,ns=kt.length;oa<ns;oa++){const zs=kt[oa];Ae.update(zs,Rn),Ae.bind(zs,Rn)}}return Rn}function bn(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Kl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(L,$,he){const ue=de.get(L);ue.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),de.get(L.texture).__webglTexture=$,de.get(L.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const he=de.get(L);he.__webglFramebuffer=$,he.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,he=0){ee=L,B=$,q=he;let ue=null,fe=!1,ze=!1;if(L){const Ie=de.get(L);if(Ie.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(J.FRAMEBUFFER,Ie.__webglFramebuffer),E.copy(L.viewport),H.copy(L.scissor),ie=L.scissorTest,w.viewport(E),w.scissor(H),w.setScissorTest(ie),re=-1;return}else if(Ie.__webglFramebuffer===void 0)_e.setupRenderTarget(L);else if(Ie.__hasExternalTextures)_e.rebindTextures(L,de.get(L.texture).__webglTexture,de.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const rt=L.depthTexture;if(Ie.__boundDepthTexture!==rt){if(rt!==null&&de.has(rt)&&(L.width!==rt.image.width||L.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(L)}}const Je=L.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ze=!0);const Ke=de.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[$])?ue=Ke[$][he]:ue=Ke[$],fe=!0):L.samples>0&&_e.useMultisampledRTT(L)===!1?ue=de.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?ue=Ke[he]:ue=Ke,E.copy(L.viewport),H.copy(L.scissor),ie=L.scissorTest}else E.copy(Ne).multiplyScalar(me).floor(),H.copy(ut).multiplyScalar(me).floor(),ie=nt;if(he!==0&&(ue=le),w.bindFramebuffer(J.FRAMEBUFFER,ue)&&w.drawBuffers(L,ue),w.viewport(E),w.scissor(H),w.setScissorTest(ie),fe){const Ie=de.get(L.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,he)}else if(ze){const Ie=$;for(let Je=0;Je<L.textures.length;Je++){const Ke=de.get(L.textures[Je]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Je,Ke.__webglTexture,he,Ie)}}else if(L!==null&&he!==0){const Ie=de.get(L.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ie.__webglTexture,he)}re=-1},this.readRenderTargetPixels=function(L,$,he,ue,fe,ze,je,Ie=0){if(!(L&&L.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je){w.bindFramebuffer(J.FRAMEBUFFER,Je);try{const Ke=L.textures[Ie],rt=Ke.format,_t=Ke.type;if(L.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ie),!z.textureFormatReadable(rt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(_t)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ue&&he>=0&&he<=L.height-fe&&J.readPixels($,he,ue,fe,Ue.convert(rt),Ue.convert(_t),ze)}finally{const Ke=ee!==null?de.get(ee).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(L,$,he,ue,fe,ze,je,Ie=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je)if($>=0&&$<=L.width-ue&&he>=0&&he<=L.height-fe){w.bindFramebuffer(J.FRAMEBUFFER,Je);const Ke=L.textures[Ie],rt=Ke.format,_t=Ke.type;if(L.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ie),!z.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,it),J.bufferData(J.PIXEL_PACK_BUFFER,ze.byteLength,J.STREAM_READ),J.readPixels($,he,ue,fe,Ue.convert(rt),Ue.convert(_t),0);const It=ee!==null?de.get(ee).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,It);const pn=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await k2(J,pn,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,it),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,ze),J.deleteBuffer(it),J.deleteSync(pn),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,he=0){const ue=Math.pow(2,-he),fe=Math.floor(L.image.width*ue),ze=Math.floor(L.image.height*ue),je=$!==null?$.x:0,Ie=$!==null?$.y:0;_e.setTexture2D(L,0),J.copyTexSubImage2D(J.TEXTURE_2D,he,0,0,je,Ie,fe,ze),w.unbindTexture()},this.copyTextureToTexture=function(L,$,he=null,ue=null,fe=0,ze=0){let je,Ie,Je,Ke,rt,_t,it,It,pn;const an=L.isCompressedTexture?L.mipmaps[ze]:L.image;if(he!==null)je=he.max.x-he.min.x,Ie=he.max.y-he.min.y,Je=he.isBox3?he.max.z-he.min.z:1,Ke=he.min.x,rt=he.min.y,_t=he.isBox3?he.min.z:0;else{const mn=Math.pow(2,-fe);je=Math.floor(an.width*mn),Ie=Math.floor(an.height*mn),L.isDataArrayTexture?Je=an.depth:L.isData3DTexture?Je=Math.floor(an.depth*mn):Je=1,Ke=0,rt=0,_t=0}ue!==null?(it=ue.x,It=ue.y,pn=ue.z):(it=0,It=0,pn=0);const Xt=Ue.convert($.format),Wt=Ue.convert($.type);let We;$.isData3DTexture?(_e.setTexture3D($,0),We=J.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(_e.setTexture2DArray($,0),We=J.TEXTURE_2D_ARRAY):(_e.setTexture2D($,0),We=J.TEXTURE_2D),w.activeTexture(J.TEXTURE0),w.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment);const qn=w.getParameter(J.UNPACK_ROW_LENGTH),bt=w.getParameter(J.UNPACK_IMAGE_HEIGHT),Rn=w.getParameter(J.UNPACK_SKIP_PIXELS),yi=w.getParameter(J.UNPACK_SKIP_ROWS),Xi=w.getParameter(J.UNPACK_SKIP_IMAGES);w.pixelStorei(J.UNPACK_ROW_LENGTH,an.width),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,an.height),w.pixelStorei(J.UNPACK_SKIP_PIXELS,Ke),w.pixelStorei(J.UNPACK_SKIP_ROWS,rt),w.pixelStorei(J.UNPACK_SKIP_IMAGES,_t);const Si=L.isDataArrayTexture||L.isData3DTexture,qt=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const mn=de.get(L),Wi=de.get($),kt=de.get(mn.__renderTarget),oa=de.get(Wi.__renderTarget);w.bindFramebuffer(J.READ_FRAMEBUFFER,kt.__webglFramebuffer),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let ns=0;ns<Je;ns++)Si&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,de.get(L).__webglTexture,fe,_t+ns),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,de.get($).__webglTexture,ze,pn+ns)),J.blitFramebuffer(Ke,rt,je,Ie,it,It,je,Ie,J.DEPTH_BUFFER_BIT,J.NEAREST);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(fe!==0||L.isRenderTargetTexture||de.has(L)){const mn=de.get(L),Wi=de.get($);w.bindFramebuffer(J.READ_FRAMEBUFFER,ae),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,Q);for(let kt=0;kt<Je;kt++)Si?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,mn.__webglTexture,fe,_t+kt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,mn.__webglTexture,fe),qt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Wi.__webglTexture,ze,pn+kt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Wi.__webglTexture,ze),fe!==0?J.blitFramebuffer(Ke,rt,je,Ie,it,It,je,Ie,J.COLOR_BUFFER_BIT,J.NEAREST):qt?J.copyTexSubImage3D(We,ze,it,It,pn+kt,Ke,rt,je,Ie):J.copyTexSubImage2D(We,ze,it,It,Ke,rt,je,Ie);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else qt?L.isDataTexture||L.isData3DTexture?J.texSubImage3D(We,ze,it,It,pn,je,Ie,Je,Xt,Wt,an.data):$.isCompressedArrayTexture?J.compressedTexSubImage3D(We,ze,it,It,pn,je,Ie,Je,Xt,an.data):J.texSubImage3D(We,ze,it,It,pn,je,Ie,Je,Xt,Wt,an):L.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ze,it,It,je,Ie,Xt,Wt,an.data):L.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ze,it,It,an.width,an.height,Xt,an.data):J.texSubImage2D(J.TEXTURE_2D,ze,it,It,je,Ie,Xt,Wt,an);w.pixelStorei(J.UNPACK_ROW_LENGTH,qn),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,bt),w.pixelStorei(J.UNPACK_SKIP_PIXELS,Rn),w.pixelStorei(J.UNPACK_SKIP_ROWS,yi),w.pixelStorei(J.UNPACK_SKIP_IMAGES,Xi),ze===0&&$.generateMipmaps&&J.generateMipmap(We),w.unbindTexture()},this.initRenderTarget=function(L){de.get(L).__webglFramebuffer===void 0&&_e.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?_e.setTextureCube(L,0):L.isData3DTexture?_e.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?_e.setTexture2DArray(L,0):_e.setTexture2D(L,0),w.unbindTexture()},this.resetState=function(){B=0,q=0,ee=null,w.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}class Ku extends ct{constructor(){const e=Ku.SkyShader,n=new Fn({name:e.name,uniforms:Ps.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ri,depthWrite:!1});super(new Ni(1,1,1),n),this.isSky=!0}}Ku.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new k},up:{value:new k(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// Cloud noise functions
		float hash( vec2 p ) {
			return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 );
		}

		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			f = f * f * ( 3.0 - 2.0 * f );
			float a = hash( i );
			float b = hash( i + vec2( 1.0, 0.0 ) );
			float c = hash( i + vec2( 0.0, 1.0 ) );
			float d = hash( i + vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
		}

		float fbm( vec2 p ) {
			float value = 0.0;
			float amplitude = 0.5;
			for ( int i = 0; i < 5; i ++ ) {
				value += amplitude * noise( p );
				p *= 2.0;
				amplitude *= 0.5;
			}
			return value;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta ) * showSunDisc;
			L0 += ( vSunE * 19000.0 * Fex ) * sundisc;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Multi-octave noise for fluffy clouds
				float cloudNoise = fbm( cloudUV * 1000.0 );
				cloudNoise += 0.5 * fbm( cloudUV * 2000.0 + 3.7 );
				cloudNoise = cloudNoise * 0.5 + 0.5;

				// Apply coverage threshold
				float cloudMask = smoothstep( 1.0 - cloudCoverage, 1.0 - cloudCoverage + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.1 + 0.2 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting based on sun position
				float sunInfluence = dot( direction, vSunDirection ) * 0.5 + 0.5;
				float daylight = max( 0.0, vSunDirection.y * 2.0 );

				// Base cloud color affected by atmosphere
				vec3 atmosphereColor = Lin * 0.04;
				vec3 cloudColor = mix( vec3( 0.3 ), vec3( 1.0 ), daylight );
				cloudColor = mix( cloudColor, atmosphereColor + vec3( 1.0 ), sunInfluence * 0.5 );
				cloudColor *= vSunE * 0.00002;

				// Blend clouds with sky
				texColor = mix( texColor, cloudColor, cloudMask * cloudDensity );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class YC extends ct{constructor(e,n={}){super(e),this.isWater=!0;const a=this,o=n.textureWidth!==void 0?n.textureWidth:512,c=n.textureHeight!==void 0?n.textureHeight:512,u=n.clipBias!==void 0?n.clipBias:0,d=n.alpha!==void 0?n.alpha:1,m=n.time!==void 0?n.time:0,p=n.waterNormals!==void 0?n.waterNormals:null,_=n.sunDirection!==void 0?n.sunDirection:new k(.70707,.70707,0),v=new ht(n.sunColor!==void 0?n.sunColor:16777215),g=new ht(n.waterColor!==void 0?n.waterColor:8355711),M=n.eye!==void 0?n.eye:new k(0,0,0),x=n.distortionScale!==void 0?n.distortionScale:20,A=n.side!==void 0?n.side:Za,y=n.fog!==void 0?n.fog:!1,S=new Ns,R=new k,U=new k,C=new k,P=new Pt,N=new k(0,0,-1),F=new dn,T=new k,O=new k,Y=new dn,V=new Pt,X=new gi,le=new oi(o,c,{type:xi}),ae={name:"MirrorShader",uniforms:Ps.merge([Be.fog,Be.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Pt},sunColor:{value:new ht(8355711)},sunDirection:{value:new k(.70707,.70707,0)},eye:{value:new k},waterColor:{value:new ht(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},Q=new Fn({name:ae.name,uniforms:Ps.clone(ae.uniforms),vertexShader:ae.vertexShader,fragmentShader:ae.fragmentShader,lights:!0,side:A,fog:y});Q.uniforms.mirrorSampler.value=le.texture,Q.uniforms.textureMatrix.value=V,Q.uniforms.alpha.value=d,Q.uniforms.time.value=m,Q.uniforms.normalSampler.value=p,Q.uniforms.sunColor.value=v,Q.uniforms.waterColor.value=g,Q.uniforms.sunDirection.value=_,Q.uniforms.distortionScale.value=x,Q.uniforms.eye.value=M,a.material=Q,a.onBeforeRender=function(B,q,ee){if(U.setFromMatrixPosition(a.matrixWorld),C.setFromMatrixPosition(ee.matrixWorld),P.extractRotation(a.matrixWorld),R.set(0,0,1),R.applyMatrix4(P),T.subVectors(U,C),T.dot(R)>0)return;T.reflect(R).negate(),T.add(U),P.extractRotation(ee.matrixWorld),N.set(0,0,-1),N.applyMatrix4(P),N.add(C),O.subVectors(U,N),O.reflect(R).negate(),O.add(U),X.position.copy(T),X.up.set(0,1,0),X.up.applyMatrix4(P),X.up.reflect(R),X.lookAt(O),X.far=ee.far,X.updateMatrixWorld(),X.projectionMatrix.copy(ee.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(X.projectionMatrix),V.multiply(X.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(R,U),S.applyMatrix4(X.matrixWorldInverse),F.set(S.normal.x,S.normal.y,S.normal.z,S.constant);const re=X.projectionMatrix;Y.x=(Math.sign(F.x)+re.elements[8])/re.elements[0],Y.y=(Math.sign(F.y)+re.elements[9])/re.elements[5],Y.z=-1,Y.w=(1+re.elements[10])/re.elements[14],F.multiplyScalar(2/F.dot(Y)),re.elements[2]=F.x,re.elements[6]=F.y,re.elements[10]=F.z+1-u,re.elements[14]=F.w,M.setFromMatrixPosition(ee.matrixWorld);const G=B.getRenderTarget(),E=B.xr.enabled,H=B.shadowMap.autoUpdate;a.visible=!1,B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(le),B.state.buffers.depth.setMask(!0),B.autoClear===!1&&B.clear(),B.render(q,X),a.visible=!0,B.xr.enabled=E,B.shadowMap.autoUpdate=H,B.setRenderTarget(G);const ie=ee.viewport;ie!==void 0&&B.state.viewport(ie)}}}const Bu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ro{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const XC=new ql(-1,1,1,-1,0,1);class WC extends zn{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const qC=new WC;class ym{constructor(e){this._mesh=new ct(qC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,XC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jC extends Ro{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ps.clone(e.uniforms),this.material=new Fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ym(this.material)}render(e,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gv extends Ro{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,a){const o=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class ZC extends Ro{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class KC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const a=e.getSize(new He);this._width=a.width,this._height=a.height,n=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jC(Bu),this.copyPass.material.blending=_a,this.timer=new WE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}gv!==void 0&&(u instanceof gv?a=!0:u instanceof ZC&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QC extends Ro{constructor(e,n,a=null,o=null,c=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ht}render(e,n,a){const o=e.autoClear;e.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=o}}const JC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class To extends Ro{constructor(e,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(c,u,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new oi(c,u,{type:xi});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new oi(c,u,{type:xi});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),u=Math.round(u/2)}const d=JC;this.highPassUniforms=Ps.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new He(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ps.clone(Bu.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:Bu.vertexShader,fragmentShader:Bu.fragmentShader,premultipliedAlpha:!0,blending:Hu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ht,this._oldClearAlpha=1,this._basic=new Us,this._fsQuad=new ym(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let a=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new He(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(e,n,a,o,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=To.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=To.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const n=[],a=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new Fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}To.BlurDirectionX=new He(1,0);To.BlurDirectionY=new He(0,1);const Lu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $C extends Ro{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ps.clone(Lu.uniforms),this.material=new Qv({name:Lu.name,uniforms:this.uniforms,vertexShader:Lu.vertexShader,fragmentShader:Lu.fragmentShader}),this._fsQuad=new ym(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Rt.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===em?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tm?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$p&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class eR{frustum=new qu;projScreenMatrix=new Pt;tempSphere=new gr;tempVec=new k;maxAngularSpread=2.05;verticalSpread=38;cullingEnabled=!0;updateFrustum(e){this.projScreenMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix)}isItemVisible(e,n,a,o,c,u){if(!this.cullingEnabled)return!0;if(Math.abs(n-u)>this.verticalSpread+o)return!1;let d=(e-c)%(Math.PI*2);d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2);const m=this.maxAngularSpread+o/a;if(Math.abs(d)>m)return!1;const p=Math.sin(e)*a,_=Math.cos(e)*a;return this.tempVec.set(p,n,_),this.tempSphere.set(this.tempVec,Math.max(o,2.5)),this.frustum.intersectsSphere(this.tempSphere)}}const c1=1,u1="lvl_0001",f1="Level_0001",d1=48,h1=24,p1={x:.5,y:.5},m1=[{id:"st-cp2",x:20,topY:24,count:1},{id:"st_1_24",x:1,topY:24,count:2},{id:"st_23_24",x:23,topY:24,count:2},{id:"st_21_24",x:21,topY:24,count:2},{id:"st_5_46",x:5,topY:46,count:2},{id:"st_9_46",x:9,topY:46,count:2},{id:"st_11_46",x:11,topY:46,count:2},{id:"st_door_19_24",x:19,topY:24,count:1},{id:"st_door_3_24",x:3,topY:24,count:1},{id:"st_7_9",x:7,topY:9,count:2},{id:"st_10_10.5",x:10,topY:10.5,count:2},{id:"cp_st_14_12",x:14,topY:12,count:1},{id:"st_door_15_12",x:15,topY:12,count:1},{id:"st_door_18_24",x:18,topY:24,count:1},{id:"st_5_23",x:5,topY:23,count:2},{id:"st_8_22",x:8,topY:22,count:2},{id:"st_8_34",x:8,topY:34,count:2},{id:"st_6_34",x:6,topY:34,count:2},{id:"st_4_34",x:4,topY:34,count:2},{id:"cp_st_6_37",x:6,topY:37,count:1},{id:"st_door_7_37",x:7,topY:37,count:1},{id:"st_door_4_46",x:4,topY:46,count:1},{id:"st_7_46",x:7,topY:46,count:2},{id:"st_19_48",x:19,topY:48,count:2},{id:"st_1_6",x:1,topY:6,count:2},{id:"st_4_7.5",x:4,topY:7.5,count:2},{id:"st_1_0",x:1,topY:0,count:2},{id:"st_23_0",x:23,topY:0,count:2},{id:"st_21_0",x:21,topY:0,count:2},{id:"st_19_0",x:19,topY:0,count:2},{id:"st_13_0",x:13,topY:0,count:2},{id:"st_10_0",x:10,topY:0,count:2},{id:"st_8_0",x:8,topY:0,count:2},{id:"st_4_3",x:4,topY:3,count:1},{id:"st_lev_6_3",x:6,topY:3,count:1},{id:"st_15_0",x:15,topY:0,count:2},{id:"st_17_0",x:17,topY:0,count:2},{id:"st_11_0",x:11,topY:0,count:2},{id:"st_5_37",x:5,topY:37,count:1},{id:"st_22_4.5",x:22,topY:4.5,count:2},{id:"st_10_4.5",x:10,topY:4.5,count:2},{id:"st_18_4.5",x:18,topY:4.5,count:2},{id:"st_14_4.5",x:14,topY:4.5,count:2},{id:"st_15_47",x:15,topY:47,count:2},{id:"st_4_37",x:4,topY:37,count:1},{id:"st_1_34",x:1,topY:34,count:3},{id:"st_22_36",x:22,topY:36,count:4}],g1=[{id:"el_3_0",x:3,width:1.2,yMin:0,yMax:3,speed:1.3,phase:0},{id:"el_10_22",x:10,width:1.2,yMin:22,yMax:34,speed:.75,phase:0}],x1=[{id:"g_21_24.5",x:21.5,y:24.5},{id:"g_8_22.5",x:8.5,y:22.5},{id:"g_9_22.5",x:9.5,y:22.5},{id:"g_5_37.5",x:5.5,y:37.5},{id:"g_12_46.5",x:12.5,y:46.5},{id:"g_8_0.5",x:8.5,y:.5}],_1=[],v1=[{id:"en_patrol_8_46",xCenter:8,y:46.55,behavior:"patrol",amplitude:3,speed:1},{id:"en_patrol_0_24",xCenter:0,y:24.55,behavior:"patrol",amplitude:3,speed:1.4}],y1=[{id:1,name:"Checkpoint 6",floor:3,x:5,y:3},{id:2,name:"Checkpoint 6",floor:12,x:14,y:12},{id:3,name:"Punkt II",floor:24,x:20,y:24},{id:4,name:"Checkpoint 5",floor:37,x:6,y:37}],S1=[{id:"cs_13_12",x:13,topY:12}],M1=[{id:"lev_6_3",x:6,topY:3}],b1=[{id:"ts_8_4",x:8,topY:4,leverId:"lev_6_3"}],E1=[{id:"door_pair_15_12_a",pairId:"pair_15_12",x:15,topY:12,color:"#00E5FF"},{id:"door_pair_15_12_b",pairId:"pair_15_12",x:18,topY:24,color:"#00E5FF"},{id:"door_pair_7_37_a",pairId:"pair_7_37",x:7,topY:37,color:"#FF00E5"},{id:"door_pair_7_37_b",pairId:"pair_7_37",x:4,topY:46,color:"#FF00E5"}],T1={schemaVersion:c1,id:u1,name:f1,towerHeight:d1,circumferenceSteps:h1,start:p1,stairs:m1,elevators:g1,gems:x1,springs:_1,enemies:v1,checkpoints:y1,collapsingStairs:S1,levers:M1,togglableStairs:b1,doors:E1},tR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:y1,circumferenceSteps:h1,collapsingStairs:S1,default:T1,doors:E1,elevators:g1,enemies:v1,gems:x1,id:u1,levers:M1,name:f1,schemaVersion:c1,springs:_1,stairs:m1,start:p1,togglableStairs:b1,towerHeight:d1},Symbol.toStringTag,{value:"Module"})),nR=["stairs","elevators","gems","springs","enemies","checkpoints","doors","collapsingStairs","levers","togglableStairs"];function Xa(r,e){if(typeof r!="number"||!Number.isFinite(r))throw new Error(`Level JSON: ${e} must be a finite number.`)}function w1(r){if(!r||typeof r!="object")throw new Error("Level JSON: root must be an object.");const e=r;if(e.schemaVersion!==1)throw new Error("Level JSON: unsupported schemaVersion.");if(typeof e.id!="string"||typeof e.name!="string")throw new Error("Level JSON: id and name are required.");if(Xa(e.towerHeight,"towerHeight"),Xa(e.circumferenceSteps,"circumferenceSteps"),e.towerHeight<1||e.towerHeight>200)throw new Error("Level JSON: towerHeight out of range [1, 200].");if(e.circumferenceSteps<4||e.circumferenceSteps>64)throw new Error("Level JSON: circumferenceSteps out of range [4, 64].");const n=e.start;if(!n||typeof n!="object")throw new Error("Level JSON: start is required.");Xa(n.x,"start.x"),Xa(n.y,"start.y");const a=e;for(const d of nR)if(!Array.isArray(e[d]))throw new Error(`Level JSON: ${d} must be an array.`);const o=new Set,c=[a.stairs,a.elevators,a.gems,a.springs,a.enemies,a.doors];for(const d of c)for(const m of d){if(!m.id||o.has(m.id))throw new Error(`Level JSON: duplicate or empty entity id '${m.id}'.`);o.add(m.id)}for(const d of a.stairs)if(Xa(d.x,`stair ${d.id}.x`),Xa(d.topY,`stair ${d.id}.topY`),d.count!==void 0&&(Xa(d.count,`stair ${d.id}.count`),!Number.isInteger(d.count)||d.count<1))throw new Error(`Level JSON: stair ${d.id}.count must be integer >= 1.`);const u=new Map;for(const d of a.doors){Xa(d.x,`door ${d.id}.x`),Xa(d.topY,`door ${d.id}.topY`);const m=u.get(d.pairId)??[];m.push(d),u.set(d.pairId,m)}for(const[d,m]of u)if(m.length!==2)throw new Error(`Level JSON: door pair '${d}' must contain exactly two doors.`);return a}function xr(r,e={}){return r.colorSpace=mi,r.wrapS=e.wrapS??Xn,r.wrapT=e.wrapT??Xn,e.repeat&&r.repeat.set(e.repeat[0],e.repeat[1]),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),r}function _r(r,e={}){return r.colorSpace=qa,r.wrapS=e.wrapS??Xn,r.wrapT=e.wrapT??Xn,e.repeat&&r.repeat.set(e.repeat[0],e.repeat[1]),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),r}function iR(){return A1()}function aR(){const r=new Ja,e=new URL(""+new URL("door_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("door_nrm.jpg",import.meta.url).href,import.meta.url).href,a=xr(r.load(e)),o=_r(r.load(n));return new ln({map:a,normalMap:o,normalScale:new He(30,30),roughness:1,metalness:.1})}function A1(){const r=new Ja,e=new URL(""+new URL("STEP_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm.jpg",import.meta.url).href,import.meta.url).href,a=[.5,.9],o=xr(r.load(e),{wrapS:Kt,wrapT:Kt,repeat:a,anisotropy:7}),c=_r(r.load(n),{wrapS:Kt,wrapT:Kt,repeat:a,anisotropy:7});return new ln({map:o,normalMap:c,normalScale:new He(30,30),roughness:1,metalness:.1})}function sR(r,e=6.12,n=52){const a=new Ja,o=new URL(""+new URL("WALL_col.jpg",import.meta.url).href,import.meta.url).href,c=new URL(""+new URL("WALL_nrm.jpg",import.meta.url).href,import.meta.url).href,u=7,d=Math.max(1,Math.ceil((n||52)/6)),m=[u,d],p=xr(a.load(o),{wrapS:Kt,wrapT:Kt,repeat:m,anisotropy:7}),_=_r(a.load(c),{wrapS:Kt,wrapT:Kt,repeat:m,anisotropy:7});return new ln({map:p,normalMap:_,normalScale:new He(3.85,3.85),roughness:1,metalness:.18})}function rR(r){const e=new Ja,n=new URL(""+new URL("STEP_col.jpg",import.meta.url).href,import.meta.url).href,a=new URL(""+new URL("STEP_nrm.jpg",import.meta.url).href,import.meta.url).href,o=[1,1],c=xr(e.load(n),{wrapS:Kt,wrapT:Kt,repeat:o,anisotropy:7}),u=_r(e.load(a),{wrapS:Kt,wrapT:Kt,repeat:o,anisotropy:7});return new ln({map:c,normalMap:u,normalScale:new He(10,10),roughness:1,metalness:.1})}function oR(){const r=new Ja,e=new URL(""+new URL("STEP_col.png",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm.png",import.meta.url).href,import.meta.url).href,a=[1,1],o=xr(r.load(e),{wrapS:Kt,wrapT:Kt,repeat:a,anisotropy:7}),c=_r(r.load(n),{wrapS:Kt,wrapT:Kt,repeat:a,anisotropy:7});return new ln({map:o,normalMap:c,normalScale:new He(20,20),roughness:.3,metalness:.5})}function lR(){const r=new Ja,e=new URL(""+new URL("ENEMY_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("ENEMY_nrm.jpg",import.meta.url).href,import.meta.url).href,a=r.load(e),o=r.load(n);return a.wrapS=Xn,a.wrapT=Xn,o.wrapS=Xn,o.wrapT=Xn,new ln({map:a,normalMap:o,normalScale:new He(10,10),roughness:.3,metalness:.5})}function cR(){const r=new Ja,e=new URL(""+new URL("STEP_col2.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm2.jpg",import.meta.url).href,import.meta.url).href,a=[1.5,1.5],o=xr(r.load(e),{wrapS:Kt,wrapT:Kt,repeat:a,anisotropy:7}),c=_r(r.load(n),{wrapS:Kt,wrapT:Kt,repeat:a,anisotropy:7});return new ln({map:o,normalMap:c,normalScale:new He(30,30),roughness:.9,metalness:.4})}function uR(){const r=new Ja,e=new URL(""+new URL("STEP_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm.jpg",import.meta.url).href,import.meta.url).href,a=xr(r.load(e)),o=_r(r.load(n));return new ln({map:a,normalMap:o,normalScale:new He(20,20),roughness:1,metalness:.3})}const fR=6.5,dR=5.5,hR=.075,pR=.075,mR=.2;function zu(r,e){const n=Math.abs(r)/fR,a=Math.abs(e)/dR,o=Math.sqrt(n*n+a*a);if(o>=1)return 0;const c=1-o;return c*c}const C1="glower-tower-audio-v1";function gR(){const r={sfxEnabled:!0,musicEnabled:!0};try{const e=localStorage.getItem(C1);if(!e)return r;const n=JSON.parse(e);return{sfxEnabled:typeof n.sfxEnabled=="boolean"?n.sfxEnabled:!0,musicEnabled:typeof n.musicEnabled=="boolean"?n.musicEnabled:!0}}catch{return r}}function xR(r){try{localStorage.setItem(C1,JSON.stringify(r))}catch{}}const Ll=r=>440*Math.pow(2,(r-69)/12),_R=[[45,48,52],[41,45,48],[48,52,55],[43,47,50]],vR=[[40,43,47],[36,40,43],[43,47,50],[38,42,45]],xv=.9,_v=.26,yR=.25,SR=50,vv=32,MR=.12,bR=.35,ER=500;class TR{ctx=null;master=null;sfxBus=null;musicBus=null;noiseBuf=null;unlocked=!1;stalled=!1;watchdog=null;muted=!0;sfxEnabled=!0;musicEnabled=!0;pageHidden=!1;desiredTrack=null;voice=null;lastLandAt=0;lastBonkAt=0;slideStop=null;ambient=new Map;buildGraph(){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let n;try{n=new e}catch{return null}const a=n.createDynamicsCompressor();a.threshold.value=-10,a.knee.value=22,a.ratio.value=8,a.attack.value=.004,a.release.value=.22;const o=n.createGain();o.gain.value=this.muted?0:1;const c=n.createGain();c.gain.value=this.sfxEnabled?xv:0;const u=n.createGain();return u.gain.value=this.musicEnabled?_v:0,c.connect(o),u.connect(o),o.connect(a),a.connect(n.destination),this.ctx=n,this.master=o,this.sfxBus=c,this.musicBus=u,this.noiseBuf=null,this.unlocked=!1,n}ensureContext(){return this.ctx&&this.ctx.state!=="closed"?this.ctx:(this.forgetVoice(),this.buildGraph())}kick(e){if(e.state!=="running")try{e.resume().catch(()=>{})}catch{}}rebuildContext(){const e=this.ctx;if(this.clearAmbient(),this.forgetVoice(),this.ctx=null,this.master=null,this.sfxBus=null,this.musicBus=null,this.noiseBuf=null,this.unlocked=!1,e)try{e.close().catch(()=>{})}catch{}const n=this.buildGraph();n&&(this.kick(n),this.unlock(),this.syncMusic())}armWatchdog(){this.watchdog!==null&&(window.clearTimeout(this.watchdog),this.watchdog=null);const e=this.ctx;if(!e)return;const n=e.currentTime;this.watchdog=window.setTimeout(()=>{if(this.watchdog=null,this.muted||this.pageHidden||this.ctx!==e)return;e.state==="running"&&e.currentTime>n+.05||(this.stalled=!0)},ER)}unlock(){const e=this.ctx;if(!(!e||this.unlocked)){try{const n=e.createBufferSource();n.buffer=e.createBuffer(1,1,e.sampleRate),n.connect(e.destination),n.start(0),this.unlocked=!0}catch{}try{const n=navigator.audioSession;n&&n.type!=="playback"&&(n.type="playback")}catch{}}}noise(){const e=this.ctx;if(!e)return null;if(!this.noiseBuf){const n=Math.floor(e.sampleRate*.5);this.noiseBuf=e.createBuffer(1,n,e.sampleRate);const a=this.noiseBuf.getChannelData(0);for(let o=0;o<n;o++)a[o]=Math.random()*2-1}return this.noiseBuf}ramp(e,n,a){const o=this.ctx;if(!o||!e)return;const c=o.currentTime;try{e.gain.cancelScheduledValues(c),e.gain.setValueAtTime(e.gain.value,c),e.gain.linearRampToValueAtTime(n,c+a)}catch{e.gain.value=n}}sfxCtx(){if(this.muted||!this.sfxEnabled)return null;const e=this.ctx;return!e||e.state!=="running"?null:e}tone(e){const n=this.ctx,a=e.dest??(e.voice?e.voice.gain:this.sfxBus);if(!n||!a)return;const o=n.createOscillator(),c=n.createGain();o.type=e.type,e.detune&&(o.detune.value=e.detune),o.frequency.setValueAtTime(e.from,e.at),e.to!==void 0&&o.frequency.exponentialRampToValueAtTime(Math.max(1,e.to),e.at+e.dur);const u=e.attack??.005;c.gain.setValueAtTime(1e-4,e.at),c.gain.exponentialRampToValueAtTime(e.gain,e.at+u),c.gain.exponentialRampToValueAtTime(1e-4,e.at+e.dur),o.connect(c),c.connect(a),o.start(e.at),o.stop(e.at+e.dur+.02),this.track(e.voice,o)}hiss(e){const n=this.ctx,a=this.noise(),o=e.dest??(e.voice?e.voice.gain:this.sfxBus);if(!n||!a||!o)return;const c=n.createBufferSource();c.buffer=a,c.loop=!0;const u=n.createBiquadFilter();u.type=e.type,u.frequency.value=e.freq,u.Q.value=e.q??1;const d=n.createGain();d.gain.setValueAtTime(e.gain,e.at),d.gain.exponentialRampToValueAtTime(1e-4,e.at+e.dur),c.connect(u),u.connect(d),d.connect(o),c.start(e.at),c.stop(e.at+e.dur+.02),this.track(e.voice,c)}track(e,n){e&&(e.sources.add(n),n.onended=()=>e.sources.delete(n))}setMuted(e){if(e===this.muted){e||this.resume(!0);return}this.muted=e,e&&this.clearAmbient(),e||this.wakeInGesture(),this.ramp(this.master,e?0:1,.06),this.syncMusic()}wakeInGesture(){const e=this.ensureContext();e&&(this.stalled?(this.stalled=!1,this.rebuildContext()):(this.kick(e),this.unlock()),this.preload(),this.armWatchdog())}isMuted(){return this.muted}setSfxEnabled(e){this.sfxEnabled=e,e||this.clearAmbient(),this.ramp(this.sfxBus,e?xv:0,.03)}isSfxEnabled(){return this.sfxEnabled}setMusicEnabled(e){e!==this.musicEnabled&&(this.musicEnabled=e,this.ramp(this.musicBus,e?_v:0,.08),this.syncMusic())}isMusicEnabled(){return this.musicEnabled}resume(e=!1){if(this.muted)return;const n=this.ensureContext();if(n){if(this.stalled&&e){this.stalled=!1,this.rebuildContext(),this.armWatchdog();return}this.kick(n),e&&this.unlock()}}setPageHidden(e){e!==this.pageHidden&&(this.pageHidden=e,this.syncMusic(),e||this.resume(!1))}async preload(){await Promise.resolve()}playJump(){const e=this.sfxCtx();if(e)try{this.tone({type:"square",from:140,to:440,at:e.currentTime,dur:.12,gain:.12})}catch{}}playSuperJump(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;this.tone({type:"triangle",from:220,to:880,at:n,dur:.25,gain:.2}),this.tone({type:"square",from:110,to:440,at:n,dur:.22,gain:.06})}catch{}}playLand(e=1){const n=this.sfxCtx();if(!n||!this.sfxBus)return;const a=performance.now();if(!(a-this.lastLandAt<45)){this.lastLandAt=a;try{const o=n.currentTime,c=Math.max(.15,Math.min(1.6,e)),u=1-.12*c,d=.4+.6*Math.min(1,c);this.tone({type:"sine",from:140*u,to:44,at:o,dur:.19,gain:.32*d,attack:.003}),this.hiss({at:o,dur:.055,gain:.2*d,type:"bandpass",freq:300*u,q:1.4}),this.hiss({at:o,dur:.03,gain:.09*d,type:"bandpass",freq:1250*u,q:2.2}),this.tone({type:"triangle",from:190*u,to:120,at:o+.012,dur:.07,gain:.09*d});const m=n.createOscillator(),p=n.createGain(),_=n.createOscillator(),v=n.createGain();m.type="triangle",m.frequency.setValueAtTime(84*u,o+.01),m.frequency.exponentialRampToValueAtTime(56,o+.22),_.frequency.value=8.2,v.gain.value=22,_.connect(v),v.connect(m.frequency),p.gain.setValueAtTime(1e-4,o+.01),p.gain.exponentialRampToValueAtTime(.11*d,o+.03),p.gain.exponentialRampToValueAtTime(1e-4,o+.24),m.connect(p),p.connect(this.sfxBus),m.start(o+.01),_.start(o+.01),m.stop(o+.26),_.stop(o+.26),this.tone({type:"sine",from:104,to:48,at:o+.055,dur:.1,gain:.1*d})}catch{}}}playCoin(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;this.tone({type:"sine",from:987.77,at:n,dur:.1,gain:.11}),this.tone({type:"sine",from:1318.51,at:n+.08,dur:.2,gain:.09}),this.tone({type:"sine",from:1975.53,at:n,dur:.1,gain:.045}),this.tone({type:"sine",from:2637.02,at:n+.08,dur:.2,gain:.04})}catch{}}playCheckpoint(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((a,o)=>this.tone({type:"triangle",from:a,at:n+o*.07,dur:.2,gain:.15}))}catch{}}playGameOver(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;[300,260,220,150].forEach((a,o)=>this.tone({type:"sawtooth",from:a,at:n+o*.12,dur:.18,gain:.14})),this.hiss({at:n,dur:.35,gain:.08,type:"lowpass",freq:900})}catch{}}playWin(){const e=this.sfxCtx();if(e)try{const n=e.currentTime,a=[523.25,659.25,783.99,1046.5,880,1046.5,1318.51];a.forEach((o,c)=>{const u=c===a.length-1;this.tone({type:"square",from:o,at:n+c*.11,dur:u?.6:.15,gain:.12}),this.tone({type:"triangle",from:o/2,at:n+c*.11,dur:u?.5:.13,gain:.05})})}catch{}}playBonk(){const e=this.sfxCtx();if(!e)return;const n=performance.now();if(!(n-this.lastBonkAt<90)){this.lastBonkAt=n;try{const a=e.currentTime;this.hiss({at:a,dur:.018,gain:.28,type:"bandpass",freq:2400,q:1.1}),this.hiss({at:a,dur:.04,gain:.16,type:"lowpass",freq:380}),this.tone({type:"sine",from:118,to:78,at:a,dur:.22,gain:.34,attack:.002}),this.tone({type:"triangle",from:92,to:70,at:a,dur:.16,gain:.12,attack:.002});const o=[[186,.11,.28],[194,.07,.32],[312,.09,.22],[478,.06,.16],[741,.035,.12],[1124,.02,.09]];for(const[c,u,d]of o)this.tone({type:"sine",from:c,at:a+.004,dur:d,gain:u,attack:.0015})}catch{}}}playLever(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;this.hiss({at:n,dur:.035,gain:.18,type:"bandpass",freq:980,q:1.3}),this.tone({type:"square",from:420,to:210,at:n,dur:.07,gain:.08,attack:.001}),this.tone({type:"sine",from:96,to:62,at:n+.012,dur:.1,gain:.16,attack:.002}),this.hiss({at:n+.03,dur:.025,gain:.08,type:"highpass",freq:3500})}catch{}}playStairSlide(e,n,a,o=1){const c=this.sfxCtx(),u=this.noise();if(!c||!u||!this.sfxBus)return;const d=zu(e,n);if(d<=0)return;const m=Math.max(.12,o);try{this.slideStop?.();const p=c.currentTime,_=p+m+.04,v=[],g=(()=>{if(typeof c.createStereoPanner!="function")return this.sfxBus;const re=c.createStereoPanner();return re.pan.value=Math.max(-1,Math.min(1,a)),re.connect(this.sfxBus),re})(),M=.03,x=Math.min(.12,m*.16),A=.2*d,y=c.createGain();y.gain.setValueAtTime(1e-4,p),y.gain.exponentialRampToValueAtTime(A,p+M),y.gain.setValueAtTime(A,p+Math.max(M,m-x)),y.gain.exponentialRampToValueAtTime(1e-4,p+m),y.connect(g);const S=c.createGain();S.gain.value=.85;const R=c.createConstantSource();R.offset.value=.5;const U=c.createBufferSource();U.buffer=u,U.loop=!0,U.playbackRate.value=.02;const C=c.createBiquadFilter();C.type="lowpass",C.frequency.value=55,U.connect(C),C.connect(S);const P=c.createGain();P.gain.value=0,R.connect(P.gain),S.connect(P.gain),P.connect(y),v.push(U,R);const N=c.createWaveShaper(),F=new Float32Array(1024);for(let re=0;re<F.length;re++){const G=re/(F.length-1)*2-1;F[re]=Math.tanh(G*4)*.85+Math.sign(G)*Math.abs(G)**3*.15}N.curve=F,N.oversample="2x";const T=c.createBufferSource();T.buffer=u,T.loop=!0,T.playbackRate.value=.28,T.connect(N),v.push(T);const O=c.createBiquadFilter();O.type="lowpass",O.frequency.value=700,O.Q.value=.4,N.connect(O);const Y=[[70,.9,1.5],[130,1,1.1],[260,1.3,.5],[520,1.8,.16]];for(const[re,G,E]of Y){const H=c.createBiquadFilter();H.type="bandpass",H.frequency.setValueAtTime(re,p),H.frequency.exponentialRampToValueAtTime(re*.78,p+m),H.Q.value=G;const ie=c.createGain();ie.gain.value=E,O.connect(H),H.connect(ie),ie.connect(P)}const V=c.createBufferSource();V.buffer=u,V.loop=!0,V.playbackRate.value=.1;const X=c.createBiquadFilter();X.type="lowpass",X.frequency.value=80,X.Q.value=.7;const le=c.createGain();le.gain.value=2.2,V.connect(X),X.connect(le),le.connect(P),v.push(V);const ae=c.createBufferSource();ae.buffer=u,ae.loop=!0,ae.playbackRate.value=.04;const Q=c.createBiquadFilter();Q.type="lowpass",Q.frequency.value=45,Q.Q.value=.9;const B=c.createGain();B.gain.value=2.6,ae.connect(Q),Q.connect(B),B.connect(y),v.push(ae);const q=c.createBiquadFilter();q.type="highpass",q.frequency.value=22,P.disconnect(),P.connect(q),q.connect(y);for(const re of v)re.start(p),re.stop(_);const ee=()=>{const re=this.ctx?.currentTime??p;try{y.gain.cancelScheduledValues(re),y.gain.setValueAtTime(Math.max(1e-4,y.gain.value),re),y.gain.exponentialRampToValueAtTime(1e-4,re+.06)}catch{}for(const G of v)try{G.stop(re+.08)}catch{}this.slideStop===ee&&(this.slideStop=null)};this.slideStop=ee,window.setTimeout(()=>{this.slideStop===ee&&(this.slideStop=null)},(m+.1)*1e3)}catch{}}panDest(e){const n=this.ctx;if(!n||!this.sfxBus)return null;if(typeof n.createStereoPanner!="function")return this.sfxBus;const a=n.createStereoPanner();return a.pan.value=Math.max(-1,Math.min(1,e)),a.connect(this.sfxBus),a}createAmbientVoice(e){const n=this.ctx,a=this.noise();if(!n||!this.sfxBus||n.state==="closed")return null;const o=n.createGain();o.gain.value=1e-4;let c=null;typeof n.createStereoPanner=="function"?(c=n.createStereoPanner(),c.pan.value=0,o.connect(c),c.connect(this.sfxBus)):o.connect(this.sfxBus);const u=[],d=(m,p,_,v)=>{const g=n.createOscillator(),M=n.createGain();return g.type=m,g.frequency.value=p,M.gain.value=_,g.connect(M),M.connect(v),g.start(),u.push(g),{osc:g,gain:M}};if(e==="patrol"){const m=n.createBiquadFilter();m.type="lowpass",m.frequency.value=430,m.Q.value=.7,m.connect(o),d("sawtooth",57,.5,m);const p=d("sawtooth",114.7,.2,m);d("triangle",171,.1,o);const _=n.createOscillator(),v=n.createGain();if(_.type="sine",_.frequency.value=.37,v.gain.value=4.5,_.connect(v),v.connect(p.osc.detune),_.start(),u.push(_),a){const g=n.createBufferSource();g.buffer=a,g.loop=!0;const M=n.createBiquadFilter();M.type="bandpass",M.frequency.value=4200,M.Q.value=1.3;const x=n.createGain();x.gain.value=.34,g.connect(M),M.connect(x),x.connect(o),g.start(),u.push(g);const A=n.createOscillator(),y=n.createGain();A.type="sine",A.frequency.value=7.3,y.gain.value=.14,A.connect(y),y.connect(x.gain),A.start(),u.push(A)}}else{const m=n.createBiquadFilter();if(m.type="lowpass",m.frequency.value=900,m.Q.value=.8,m.connect(o),d("sawtooth",44,.55,m),d("sawtooth",88.5,.28,m),d("triangle",132,.1,m),a){const p=n.createBufferSource();p.buffer=a,p.loop=!0;const _=n.createBiquadFilter();_.type="bandpass",_.frequency.value=1350,_.Q.value=.7;const v=n.createGain();v.gain.value=.45,p.connect(_),_.connect(v),v.connect(o),p.start(),u.push(p)}d("sine",1180,.05,o)}return{kind:e,gain:o,panner:c,sources:u}}destroyAmbientVoice(e){for(const n of e.sources){try{n.stop()}catch{}try{n.disconnect()}catch{}}e.sources.length=0;try{e.gain.disconnect()}catch{}if(e.panner)try{e.panner.disconnect()}catch{}}updateAmbient(e){if(!this.ctx||this.ctx.state!=="running"||this.muted||!this.sfxEnabled||!this.sfxBus){this.ambient.size&&this.clearAmbient();return}const n=this.ctx.currentTime,a=new Set;for(const o of e){const c=zu(o.xDist,o.yDist);if(c<=0)continue;a.add(o.id);let u=this.ambient.get(o.id);if(!u||u.kind!==o.kind){if(u&&(this.destroyAmbientVoice(u),this.ambient.delete(o.id)),u=this.createAmbientVoice(o.kind),!u)continue;this.ambient.set(o.id,u)}const d=o.kind==="patrol"?hR:pR,m=o.kind==="elevator"?Math.max(0,Math.min(1,o.intensity??1)):1;u.gain.gain.setTargetAtTime(Math.max(1e-4,d*c*m),n,.1),u.panner&&u.panner.pan.setTargetAtTime(Math.max(-1,Math.min(1,o.pan)),n,.1)}for(const[o,c]of this.ambient)a.has(o)||(this.destroyAmbientVoice(c),this.ambient.delete(o))}clearAmbient(){for(const e of this.ambient.values())this.destroyAmbientVoice(e);this.ambient.clear()}playBallBounce(e,n,a){const o=this.sfxCtx();if(!o)return;const c=zu(e,n);if(c<=0)return;const u=this.panDest(a);if(!u)return;const d=c*mR,m=.94+Math.random()*.12;try{const p=o.currentTime;this.hiss({at:p,dur:.02,gain:.3*d,type:"bandpass",freq:2600*m,q:1.2,dest:u}),this.tone({type:"sine",from:205*m,to:140,at:p,dur:.09,gain:.3*d,attack:.002,dest:u});const _=[[1180,.28,.26],[1560,.2,.2],[2340,.13,.12],[3120,.08,.07]];for(const[v,g,M]of _)this.tone({type:"sine",from:v*m,at:p+.003,dur:g,gain:M*d,attack:.0015,dest:u});window.setTimeout(()=>{try{u.disconnect()}catch{}},500)}catch{}}playMusic(e){this.desiredTrack=e,this.syncMusic()}stopMusic(){this.desiredTrack=null,this.syncMusic()}syncMusic(){const e=!this.muted&&this.musicEnabled&&!this.pageHidden?this.desiredTrack:null;if((this.voice?this.voice.track:null)===e||(this.voice&&(this.killVoice(this.voice,e?MR:bR),this.voice=null),!e))return;const a=this.ctx;if(!a||a.state==="closed"||!this.musicBus)return;const o=a.createGain(),c=a.currentTime;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(1,c+.18),o.connect(this.musicBus);const u=e==="menu"?96:132,d={track:e,gain:o,sources:new Set,timer:0,step:0,nextTime:c+.06,stepDur:60/u/4};this.voice=d,this.pump(d),d.timer=window.setInterval(()=>this.pump(d),SR)}killVoice(e,n){window.clearInterval(e.timer);const a=this.ctx;if(!a||a.state==="closed")return;const o=a.currentTime,c=e.gain.gain;try{c.cancelScheduledValues(o),c.setValueAtTime(Math.max(1e-4,c.value),o),c.exponentialRampToValueAtTime(1e-4,o+n)}catch{}e.sources.forEach(u=>{try{u.stop(o+n+.03)}catch{}}),e.sources.clear(),window.setTimeout(()=>{try{e.gain.disconnect()}catch{}},(n+.15)*1e3)}forgetVoice(){this.voice&&(window.clearInterval(this.voice.timer),this.voice=null)}pump(e){const n=this.ctx;if(!n||this.voice!==e)return;const a=n.currentTime;if(e.nextTime<a-.05){const o=Math.ceil((a-e.nextTime)/e.stepDur);e.step=(e.step+o)%vv,e.nextTime=a+.02}for(;e.nextTime<a+yR;)this.scheduleStep(e,e.step,e.nextTime),e.nextTime+=e.stepDur,e.step=(e.step+1)%vv}scheduleStep(e,n,a){const o=Math.floor(n/4)%4,c=n%4,u=e.track==="menu",m=(u?_R:vR)[o],p=m[0];if(u){if(c===0&&this.tone({type:"sine",from:Ll(p-12),at:a,dur:1.1,gain:.1,attack:.04,voice:e}),c%2===0){const v=[0,1,2,1,0,2,1,2][n/2%8|0]??0;this.tone({type:"triangle",from:Ll(m[v]+12),at:a,dur:.42,gain:.05,attack:.02,voice:e})}n===16&&this.tone({type:"sine",from:Ll(m[2]+24),at:a,dur:.9,gain:.04,attack:.01,voice:e});return}if(c%2===0){const v=c===2?12:0;this.tone({type:"square",from:Ll(p-12+v),at:a,dur:.12,gain:.085,voice:e})}const _=[0,1,2,1][c];this.tone({type:"square",from:Ll(m[_]+12),at:a,dur:.085,gain:.038,voice:e}),c%2===1&&this.hiss({at:a,dur:.03,gain:.016,type:"highpass",freq:7e3,voice:e}),c===0&&o%2===1&&this.hiss({at:a,dur:.09,gain:.03,type:"bandpass",freq:1800,q:.8,voice:e})}}const zt=new TR,Xp=640,Wp=640,Yh=Xp/Wp,Xh=38,wR=64,Wh={desktop:{id:"desktop",label:"640×480 · 16:9",width:640,height:480},tabletPortrait:{id:"tabletPortrait",label:"480×640 · 3:4",width:480,height:640},phonePortrait:{id:"phonePortrait",label:"400×660 · 10:16",width:400,height:660}};function yv(r,e){const n=e>=r,a=Math.min(r,e);return n?a<620?Wh.phonePortrait:Wh.tabletPortrait:Wh.desktop}const vn=24,AR=1,ti=.16,CR=3.6,Dl=11.2,Du=28.5,on=6,rn=.35,ai=2.4,ea=Math.PI*2,St=on+ai*.5,Sv=.5,RR=-.020833333333333332*ea,qh=.52,ni=2.05,Wa=1/60,LR=.25,DR=w1(T1),Hl=(r,e)=>{const n=r%e;return n<0?n+e:n},tn=r=>r/vn*ea+RR,Di=(r,e,n,a)=>[r-vn,r,r+vn].some(c=>c+e>n&&c-e<n+a),Pn=r=>Math.floor(Hl(r,vn)),$i=r=>Hl(r,vn)+.5,Nu=(r,e)=>{const n=Math.abs(r-e);return Math.min(n,vn-n)};function Nl(r,e,n,a){const o=new Ni(r,e,n),c=o.attributes.uv;if(!c)return o;const u=c.array,d=Math.max(r,e,n);if(d<=0)return o;const m=[[n,e],[n,e],[r,n],[r,n],[r,e],[r,e]];for(let p=0;p<6;p++){const[_,v]=m[p],g=a[0]*_/d,M=a[1]*v/d,x=p*8;for(let A=0;A<4;A++){const y=x+A*2,S=y+1;y<0||S>=u.length||(u[y]=u[y]*g,u[S]=u[S]*M)}}return c.needsUpdate=!0,o.computeBoundingBox(),o.computeBoundingSphere(),o}class NR{host;level;towerHeight;renderer;scene;camera;culler=new eR;sceneMode="menu";ambientAudioActive=!1;menuCamAngle=0;staticStairs=[];stairsInstancedMesh;towerMesh;floorMesh;sky;water;composer;bloomPass;sun=new k;waterLevel=-1.2;wasInWater=!1;waterEnterCooldown=0;topRing;summitCrown;waterRipples=[];pmremGenerator;elevators=[];gems=[];springs=[];hazards=[];doors=[];checkpoints=[];activeCheckpoint=0;doorCooldown=0;collapsingStairs=[];levers=[];togglableStairs=[];leverCooldown=0;ignoredElevator=-1;playerGroup;playerBody;leftArm;rightArm;leftLeg;rightLeg;leftLowerLeg;rightLowerLeg;leftFoot;rightFoot;leftEye;rightEye;torso;slimeTopDrop;playerLight;particles=[];particlePointsMesh;particleGeoPositions;particleGeoColors;maxParticles=250;sunLight;hemiLight;playerState={x:Sv,y:.5,vx:0,vy:0,grounded:!0,coyoteTimer:0,jumpBufferTimer:0,facingRight:!0,rideElevator:-1,status:"running",walkCycle:0,score:0,gemsCollected:0,totalGems:0,jumpCount:0,elapsedTime:0,camLeadAngle:0,verticalLead:0,smoothCamY:.5,idleTimer:0,facingYaw:0,jiggle:0,jiggleVel:0,crownFlash:0,enemyHitCooldown:0,knockdownFloorY:null,currentStairTopY:null};input={left:!1,right:!1,up:!1,down:!1,jumpQueued:!1,doorQueued:!1};config={cullingEnabled:!0,simulatedFpsThrottle:0,filterMode:"crisp",renderScale:1,soundMuted:!0,sfxEnabled:!0,musicEnabled:!0};accumulator=0;lastTime=performance.now();animFrameId=0;lastThrottleTime=performance.now();playerHudTimer=0;onPlayerStateUpdate;onGameStatusChange;constructor(e,n=DR){this.host=e,this.level=n,this.towerHeight=n.towerHeight,this.playerState.x=n.start.x,this.playerState.y=n.start.y,this.playerState.smoothCamY=n.start.y,this.playerState.idleTimer=2,this.playerState.facingYaw=Math.atan2(Math.sin(tn(n.start.x)),Math.cos(tn(n.start.x))),this.initThree(),this.buildWorld(),this.buildPlayer(),this.buildParticleSystem(),this.setupEvents(),this.startLoop()}initThree(){this.scene=new D_,this.scene.background=null,this.scene.fog=new hm(13421772,25e-5),this.camera=new gi(Xh,Yh,.1,2e4),this.camera.position.set(0,5,14),this.renderer=new VC({antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(Xp,Wp,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pl,this.renderer.shadowMap.autoUpdate=!0,this.renderer.outputColorSpace=mi,this.renderer.toneMapping=Xu,this.renderer.toneMappingExposure=.9;const e=this.renderer.domElement;e.id="game-canvas-640x640",e.style.width="100%",e.style.height="100%",e.style.objectFit="cover",e.style.display="block",this.applyCanvasFilter(),this.host.appendChild(e),this.hemiLight=new zE("#fffddb","#34697b",.66),this.scene.add(this.hemiLight),this.sunLight=new VE("#ffe999",1.9),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera=new ql(-120,120,120,-120,.1,450),this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.02,this.sunLight.shadow.radius=.4,this.sunLight.target.position.set(0,5,0),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.position.copy(this.sunLight.position),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.scene.add(this.sunLight);const n=new QC(this.scene,this.camera);this.bloomPass=new To(new He(Xp,Wp),.01,0,.24);const a=new $C;this.composer=new KC(this.renderer),this.composer.addPass(n),this.composer.addPass(this.bloomPass),this.composer.addPass(a)}applyCanvasFilter(){const e=this.renderer.domElement;this.config.filterMode==="crisp"?(e.style.imageRendering="pixelated",e.style.imageRendering="crisp-edges"):e.style.imageRendering="auto"}buildWorld(){this.sky=new Ku,this.sky.scale.setScalar(1e4),this.sky.frustumCulled=!1,this.scene.add(this.sky);const e=this.sky.material.uniforms,n=33,a=220,o=Kn.degToRad(90-n),c=Kn.degToRad(a);this.sun.setFromSphericalCoords(1,o,c),e.turbidity.value=2,e.rayleigh.value=1,e.mieCoefficient.value=.005,e.mieDirectionalG.value=.8,e.sunPosition.value.copy(this.sun),e.cloudCoverage&&(e.cloudScale.value=2e-4,e.cloudSpeed.value=1e-5,e.cloudCoverage.value=.4,e.cloudDensity.value=.4,e.cloudElevation.value=.5,e.time.value=0),e.exposure!==void 0&&(e.exposure.value=.028),this.sunLight.position.copy(this.sun).multiplyScalar(125),this.sunLight.target.position.set(0,5,0),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.sunLight.color=new ht("#ffe999"),this.hemiLight.color=new ht("#fffddb"),this.hemiLight.groundColor=new ht("#405080");try{this.pmremGenerator=new kp(this.renderer);const y=new D_;y.add(this.sky.clone());const S=this.pmremGenerator.fromScene(y);this.scene.environment=null,this.scene.environmentIntensity=0,S.dispose()}catch{}const d=new Wl(12e3,12e3),m=new Ja,p=new URL(""+new URL("waternormals.jpg",import.meta.url).href,import.meta.url).href,_=m.load(p);_.wrapS=Kt,_.wrapT=Kt,this.water=new YC(d,{textureWidth:512,textureHeight:512,waterNormals:_,sunDirection:this.sun.clone().normalize(),sunColor:8355711,waterColor:5592405,distortionScale:.8,fog:this.scene.fog!==void 0}),this.water.material.onBeforeCompile=y=>{y.uniforms.uTowerRadius={value:on},y.fragmentShader=y.fragmentShader.replace("void main() {",`uniform float uTowerRadius;
void main() {`),y.fragmentShader=y.fragmentShader.replace("vec4 noise = getNoise( worldPosition.xz * size );",`vec4 noise = getNoise( worldPosition.xz * size );
        vec2 toTower = worldPosition.xz;
        float distToTower = length(toTower);
        vec2 outward = toTower / max(distToTower, 0.001);
        if (distToTower > uTowerRadius && distToTower < uTowerRadius + 26.0) {
          float d = distToTower - uTowerRadius;
          float dirVar = outward.x * 0.8 + outward.y * 0.6;
          float dirVar2 = outward.x * outward.y * 2.0;
          float decay = exp(-d * 0.18);
          float freq = 1.7 + 0.35 * dirVar;
          float refl = sin(d * freq - time * 2.6 + dirVar2 * 1.5)
                     + 0.4 * sin(d * 2.7 - time * 4.1 - dirVar * 2.0);
          noise.xy += outward * refl * 0.38 * decay;
          float chopDecay = exp(-d * 0.75);
          float chop = sin(d * 8.0 - time * 6.5 + dirVar * 2.5)
                     * sin(worldPosition.x * 1.8 - worldPosition.z * 1.4 + time * 4.5);
          vec2 tangential = vec2(-outward.y, outward.x);
          noise.xy += tangential * chop * 0.25 * chopDecay;
        }`)},this.water.rotation.x=-Math.PI/2,this.water.position.y=this.waterLevel,this.floorMesh=this.water,this.floorMesh.frustumCulled=!1,this.floorMesh.receiveShadow=!0,this.scene.add(this.water);const v=this.towerHeight+6,g=on+.12;this.towerMesh=new ct(new ur(on,on+.18,v,48,1,!1),sR(void 0,g,v)),this.towerMesh.position.y=this.towerHeight/2-3,this.towerMesh.receiveShadow=!0,this.towerMesh.castShadow=!0,this.towerMesh.frustumCulled=!1,this.scene.add(this.towerMesh);const M=new ct(new zl(on+.32,.06,10,48),new ln({color:"#d6ecff",roughness:.92,transparent:!0,opacity:.18,depthWrite:!1}));M.rotation.x=Math.PI/2,M.position.y=this.waterLevel+.04,M.renderOrder=1,this.scene.add(M),this.topRing=new ct(new zl(on-.5,.25,14,64),new ln({color:"#fbbf24",emissive:"#d97706",emissiveIntensity:.18,roughness:.5,metalness:.8})),this.topRing.position.y=this.towerHeight+.6,this.topRing.rotation.x=Math.PI/2,this.topRing.castShadow=!0,this.scene.add(this.topRing),this.summitCrown=new In,this.summitCrown.position.y=this.towerHeight;const x=new ct(new Yi(3.2,24,16,0,Math.PI*2,0,Math.PI*.5),new ln({color:"#7dd3fc",emissive:"#075985",emissiveIntensity:.12,transparent:!0,opacity:.36,roughness:.08,metalness:.12,envMapIntensity:1.2,depthWrite:!1,side:ta}));this.summitCrown.add(x);const A=new ct(new Bl(1.1,0),new ln({color:"#fef08a",emissive:"#eab308",emissiveIntensity:.3,metalness:.9,roughness:.1}));A.position.y=1.35,A.name="victoryTrophy",this.summitCrown.add(A),this.scene.add(this.summitCrown),this.buildStairs(),this.buildElevators(),this.buildSprings(),this.buildGems(),this.buildHazards(),this.buildCheckpoints(),this.buildDoors(),this.buildCollapsingStairs(),this.buildLeversAndTogglableStairs(),this.prewarmSummitShaders()}prewarmSummitShaders(){const e=this.topRing.visible,n=this.summitCrown.visible;this.topRing.visible=!0,this.summitCrown.visible=!0;const a=this.renderer;a.compileAsync?a.compileAsync(this.scene,this.camera).finally(()=>{this.topRing.visible=e,this.summitCrown.visible=n}):(a.compile(this.scene,this.camera),this.topRing.visible=e,this.summitCrown.visible=n)}buildStairs(){const e=on+ai*.5,n=ea*on/vn,a=new Map,o=(_,v,g)=>{const M=Pn(v),x=`${M}@${g.toFixed(3)}`;a.has(x)||a.set(x,{id:_,stepX:M,topY:g})};for(const _ of this.level.stairs){const v=Math.max(1,Math.floor(_.count??1));for(let g=0;g<v;g++)o(v>1?`${_.id}#${g}`:_.id,_.x+g,_.topY)}for(const _ of this.level.doors)o(`${_.id}-stair`,_.x,_.topY);for(const _ of this.level.checkpoints)o(`checkpoint-${_.id}-stair`,_.x,_.y);const c=[];for(const _ of a.values()){const v=tn($i(_.stepX)),g=new k(Math.sin(v),0,Math.cos(v)),M=new k(g.x*e,_.topY-rn*.5,g.z*e),x=new pr().setFromEuler(new Qa(0,v,0)),A=new k(n*1.02,1,1);c.push({id:_.id,x:_.stepX,topY:_.topY,width:1,theta:v,radial:g,tangLength:n,defaultMatrix:new Pt().compose(M,x,A),culledMatrix:new Pt().compose(M,x,new k(0,0,0))})}this.staticStairs=c;const u=n*1.02,d=Nl(u,rn,ai,[.8,.8]),m=Nl(1,rn,ai,[.8,.8]),p=rR();this.stairsInstancedMesh=new TE(m,p,c.length),this.stairsInstancedMesh.instanceMatrix.setUsage(z2),this.stairsInstancedMesh.castShadow=!0,this.stairsInstancedMesh.receiveShadow=!0,this.stairsInstancedMesh.frustumCulled=!1,c.forEach((_,v)=>{this.stairsInstancedMesh.setMatrixAt(v,_.defaultMatrix)}),this.stairsInstancedMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.stairsInstancedMesh),d.dispose()}buildElevators(){const e=this.level.elevators,a=ea*on/vn*1.02,u=Nl(a,rn,ai,[.8,.8]),d=rn,m=iR();e.forEach(p=>{const _=tn(p.x+p.width*.5),v=new k(Math.sin(_),0,Math.cos(_)),g=oR(),M=new ct(u,g);M.castShadow=!0,M.receiveShadow=!0,M.rotation.y=_,M.position.set(v.x*(on+ai*.5),p.yMin-rn*.5,v.z*(on+ai*.5)),this.scene.add(M),this.elevators.push({...p,mesh:M,currentTopY:p.yMin,theta:_});const x=p.yMax-p.yMin,A=new Ni(d,x,d),y=new ct(A,m);y.rotation.y=_;const S=on+d*.5;y.position.set(v.x*S,(p.yMin+p.yMax)/2,v.z*S),y.receiveShadow=!0,this.scene.add(y)})}buildSprings(){this.level.springs.forEach(e=>{const n=tn(e.x+.5),a=new k(Math.sin(n),0,Math.cos(n)),o=new In,c=new ct(new ur(.45,.5,.15,16),new ln({color:"#ef4444",metalness:.6,roughness:.3}));c.position.y=e.topY+.08,o.add(c);const u=new ct(new ur(.4,.4,.1,16),new ln({color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:.6,metalness:.8}));u.position.y=e.topY+.18,o.add(u),o.position.set(a.x*St,0,a.z*St),o.rotation.y=n,this.scene.add(o),this.springs.push({...e,mesh:c,theta:n,cooldown:0})})}buildGems(){const e=new Bl(.32,0),n=new ln({color:"#f59e0b",emissive:"#d97706",emissiveIntensity:.6,roughness:.6,metalness:.9});this.playerState.totalGems=this.level.gems.length,this.level.gems.forEach(a=>{const o=tn(a.x),c=new k(Math.sin(o),0,Math.cos(o)),u=new ct(e,n.clone());u.castShadow=!0,u.position.set(c.x*St,a.y,c.z*St),this.scene.add(u),this.gems.push({id:a.id,x:a.x,y:a.y,mesh:u,collected:!1,theta:o})})}findEnemyLandingX(e,n,a,o){if(a<=0)return $i(Pn(e));const c=Pn(e),u=[o,-o];for(const d of u){const m=Pn(c+d*a);if(this.staticStairs.some(_=>Pn(_.x)===m&&Math.abs(_.topY-n)<.2))return $i(m)}return $i(c)}buildHazards(){const e=this.level.enemies,n=lR();n.map&&(n.map.wrapS=Kt,n.map.wrapT=Kt,n.map.repeat.set(.6,.6),n.map.offset.set(0,0),n.map.center.set(.5,.5),n.map.rotation=0,n.map.flipY=!1,n.map.needsUpdate=!0),n.normalMap&&(n.normalMap.wrapS=Kt,n.normalMap.wrapT=Kt,n.normalMap.repeat.set(.6,.6),n.normalMap.offset.set(0,0),n.normalMap.center.set(.5,.5),n.normalMap.rotation=0,n.normalMap.flipY=!1,n.normalMap.needsUpdate=!0);const a=new Yi(.32,14,14),c=Dl*Dl/(2*Du)*.5;e.forEach(u=>{const d=u.behavior??"bounce",m=u.amplitude??c,p=u.speed??1.2,_=Pn(u.xCenter);let v=u.y;for(const U of this.staticStairs)if(Pn(U.x)===_&&Math.abs(U.topY-u.y)<.75){v=U.topY;break}const g=$i(_),M=Math.max(0,Math.floor(u.moveSteps??0)),x=u.direction===-1?-1:1,y=2*Math.sqrt(2*m/Du)/Math.max(.25,p),S=this.findEnemyLandingX(g,v,M,x),R=new ct(a,n);R.castShadow=!0,R.receiveShadow=!0,R.userData.spinAxis=new k(0,0,1),R.userData.spinSpeed=(p??1.2)*.8,this.scene.add(R),this.hazards.push({id:u.id,x:g,y:u.y,behavior:d,amplitude:m,speed:p,currentX:g,bounceElapsed:0,bounceDuration:y,bounceBaseY:v,bounceFromX:g,bounceToX:S,moveSteps:M,direction:x,mesh:R,theta:tn(g)})})}buildLeversAndTogglableStairs(){var e=.7,n=new Ni(.06,.06,e),a=new Yi(.08,8,8),o=new ln({color:"#ef4444",emissive:"#7f1d1d",emissiveIntensity:.9,roughness:.1,metalness:.6});this.level.levers.forEach(m=>{var p=tn($i(Pn(m.x))),_=new k(Math.sin(p),0,Math.cos(p)),v=new In,g=new In;g.name="armGroup";var M=new ct(n,new ln({color:"#cbd5e1",emissive:"#475569",emissiveIntensity:.4,metalness:.5,roughness:.3}));M.position.set(0,0,e/2),g.add(M);var x=new ct(a,o.clone());x.position.set(0,0,e),x.userData={isBall:!0},g.add(x),g.rotation.x=-.6,v.add(g),v.position.set(_.x*on,m.topY+1.2,_.z*on),v.rotation.y=p,this.scene.add(v),this.levers.push({id:m.id,x:m.x,topY:m.topY,theta:p,mesh:v,extended:!1})});const u=ea*on/vn*1.02,d=Nl(u,rn,ai,[.8,.8]);this.level.togglableStairs.forEach(m=>{const p=tn($i(Pn(m.x))),_=new k(Math.sin(p),0,Math.cos(p)),v=new In,g=uR(),M=new ct(d,g);M.castShadow=!0,M.receiveShadow=!0,v.add(M),v.position.set(_.x*(on-.8),m.topY-rn*.5,_.z*(on-.8)),v.rotation.y=p,this.scene.add(v),this.togglableStairs.push({id:m.id,x:$i(Pn(m.x)),topY:m.topY,leverId:m.leverId,theta:p,mesh:v,extended:!1,retractOffset:0})})}buildCollapsingStairs(){const e=cR(),a=ea*on/vn*1.02,o=Nl(a,rn,ai,[.8,.8]);this.level.collapsingStairs.forEach(c=>{const u=$i(Pn(c.x)),d=tn(u),m=new k(Math.sin(d),0,Math.cos(d)),p=new In,_=new ct(o,e);_.castShadow=!0,_.receiveShadow=!0,p.add(_),p.position.set(m.x*St,c.topY-rn*.5,m.z*St),p.rotation.y=d,this.scene.add(p),this.collapsingStairs.push({id:c.id,x:u,topY:c.topY,theta:d,mesh:p,state:"idle",timer:0,retractOffset:0})})}buildCheckpoints(){this.level.checkpoints.forEach(e=>{const n=$i(Pn(e.x)),a=tn(n),o=new k(Math.sin(a),0,Math.cos(a)),c=new In,u=new ct(new ur(.06,.06,1.8,8),new ln({color:"#64748b",metalness:.8}));u.position.y=e.y+.9,c.add(u);const d=new ct(new Ni(.6,.4,.05),new ln({color:"#ef4444",emissive:"#991b1b",emissiveIntensity:.3}));d.position.set(.3,e.y+1.5,0),c.add(d),c.position.set(o.x*(St-.4),0,o.z*(St-.4)),c.rotation.y=a,this.scene.add(c),this.checkpoints.push({...e,x:n,activated:!1,mesh:c})})}buildDoors(){const e=new Map;for(const n of this.level.doors){const a=e.get(n.pairId);(a===void 0||n.topY<a)&&e.set(n.pairId,n.topY)}this.level.doors.forEach(n=>{const a=$i(Pn(n.x)),o=tn(a),c=new k(Math.sin(o),0,Math.cos(o)),d=n.topY===e.get(n.pairId)?"#22c55e":"#ef4444",m=new In,p=aR(),_=A1(),v=new ct(new Ni(.85,2,.16),p);v.position.set(0,.95,.03),v.castShadow=!0,m.add(v);const g=new ct(new Ni(.18,2.15,.3),_),M=g.clone();g.position.set(-.53,1.05,0),M.position.set(.53,1.05,0);const x=_.clone();x.map&&(x.map.center.set(.5,.5),x.map.rotation=Math.PI/2,x.map.needsUpdate=!0),x.normalMap&&(x.normalMap.center.set(.5,.5),x.normalMap.rotation=Math.PI/2,x.normalMap.needsUpdate=!0);const A=new ct(new Ni(1.25,.2,.3),x);A.position.set(0,2.05,0),m.add(g,M,A);const y=new ct(new pm(.18,.35,4),new Us({color:d}));y.position.set(0,2.55,.2),y.rotation.z=Math.PI,y.userData.baseY=2.55,m.add(y),m.position.set(c.x*(on+.2),n.topY,c.z*(on+.2)),m.rotation.y=o,this.scene.add(m),this.doors.push({...n,x:a,color:d,theta:o,mesh:m})})}buildPlayer(){this.playerGroup=new In,this.scene.add(this.playerGroup),this.playerBody=new In,this.playerBody.position.y=-qh,this.playerGroup.add(this.playerBody);const e=.52,n=[new He(0,0),new He(.4,0),new He(.49,.1),new He(.53,.3),new He(.51,.56),new He(.45,.86),new He(.385,1.12),new He(.4,1.36),new He(.415,1.56),new He(.365,1.76),new He(.265,1.93),new He(.125,2.02),new He(0,2.05)].map(V=>new He(V.x,V.y+e)),a=new gm(n,24);a.scale(.9,1,.9),a.computeVertexNormals();const o=new ln({color:"#4ade80",emissive:"#000000",emissiveIntensity:0,roughness:.18,metalness:0,transparent:!0,opacity:.82});this.torso=new ct(a,o),this.torso.castShadow=!0,this.playerBody.add(this.torso);const c=new Yi(.3,14,12);c.scale(1,1.35,1);const u=new ln({color:"#bbf7d0",emissive:"#000000",emissiveIntensity:0,roughness:.3,transparent:!0,opacity:.45});u.depthWrite=!1;const d=new ct(c,u);d.position.y=e+.72,d.renderOrder=0,this.torso.renderOrder=1,this.torso.add(d);const m=new Bl(.11,0);m.rotateZ(Math.PI/6);const p=new ln({color:"#27c10c",emissive:"#37ca0b",emissiveIntensity:.5,metalness:1,roughness:.8}),_=new ct(m,p);_.position.y=e+2.15,_.castShadow=!0,this.playerBody.add(_),this.slimeTopDrop=_;const v=new Yi(.08,10,10),g=new Us({color:"#ffffff"}),M=new Yi(.045,8,8),x=new Us({color:"#000000"});this.leftEye=new ct(v,g),this.leftEye.position.set(-.13,e+1.64,.32),this.leftEye.renderOrder=3;const A=new ct(M,x);A.position.set(0,0,.05),A.renderOrder=4,this.leftEye.add(A),this.torso.add(this.leftEye),this.rightEye=new ct(v,g),this.rightEye.position.set(.13,e+1.64,.32),this.rightEye.renderOrder=3;const y=new ct(M,x);y.position.set(0,0,.05),y.renderOrder=4,this.rightEye.add(y),this.torso.add(this.rightEye);const S=new ct(new Yi(.05,10,10),new ln({color:"#34d399",emissive:"#065f46",emissiveIntensity:.2,roughness:.25}));S.position.set(0,e+1.52,.37),S.renderOrder=3,this.torso.add(S);const R=new ct(new zl(.085,.022,8,18,Math.PI),new Us({color:"#34d399"}));R.position.set(0,e+1.44,.4),R.rotation.z=Math.PI,R.renderOrder=3,this.torso.add(R);const U=new Yi(.12,10,10);U.scale(.75,1.7,.75),U.translate(0,-.17,0),this.leftArm=new In,this.leftArm.position.set(-.36,e+1.02,0),this.leftArm.rotation.z=.32;const C=new ct(U,o);C.castShadow=!0,this.leftArm.add(C),this.rightArm=new In,this.rightArm.position.set(.36,e+1.02,0),this.rightArm.rotation.z=-.32;const P=new ct(U,o);P.castShadow=!0,this.rightArm.add(P),this.playerBody.add(this.leftArm,this.rightArm);const N=new Yi(.15,10,10);N.scale(1,.85,1),N.translate(0,-.1,0);const F=V=>{const X=new In;X.position.set(V,e+.3,0);const le=new In;le.position.y=-.08;const ae=new ct(N,o);return ae.castShadow=!0,le.add(ae),X.add(le),{hip:X,lower:le}},T=F(-.19);this.leftLeg=T.hip,this.leftLowerLeg=T.lower;const O=F(.19);this.rightLeg=O.hip,this.rightLowerLeg=O.lower;const Y=new Yi(.15,10,10);Y.scale(1.05,.42,1.35),Y.translate(0,.063,.03),this.leftFoot=new ct(Y,o),this.leftFoot.position.set(-.19,e,.02),this.leftFoot.castShadow=!0,this.playerBody.add(this.leftFoot),this.rightFoot=new ct(Y,o),this.rightFoot.position.set(.19,e,.02),this.rightFoot.castShadow=!0,this.playerBody.add(this.rightFoot),this.playerBody.add(this.leftLeg,this.rightLeg),this.playerLight=new GE("#86efac",0,6,2),this.playerLight.castShadow=!1,this.playerLight.position.set(0,1.5,0),this.playerGroup.add(this.playerLight)}buildParticleSystem(){const e=new zn;this.particleGeoPositions=new Float32Array(this.maxParticles*3),this.particleGeoColors=new Float32Array(this.maxParticles*3),e.setAttribute("position",new Oi(this.particleGeoPositions,3)),e.setAttribute("color",new Oi(this.particleGeoColors,3));const n=new qv({size:.22,vertexColors:!0,transparent:!0,opacity:.9,blending:Hu,depthWrite:!1});this.particlePointsMesh=new RE(e,n),this.particlePointsMesh.frustumCulled=!1,this.scene.add(this.particlePointsMesh)}spawnParticles(e,n,a,o=2.5,c="burst",u=null){const d=new ht(a);for(let m=0;m<n;m++){this.particles.length>=this.maxParticles&&this.particles.shift();let p,_,v,g,M=0;if(c==="jump")p=new k((Math.random()-.5)*.25,Math.random()*.12,(Math.random()-.5)*.25),_=new k((Math.random()-.5)*o*.35,Dl*(.22+Math.random()*.22),(Math.random()-.5)*o*.35),v=.9+Math.random()*.6,g=.75,M=.6;else if(c==="land"){const x=Math.random()*ea,A=.55+Math.random()*.9;p=new k((Math.random()-.5)*.2,.02+Math.random()*.08,(Math.random()-.5)*.2),_=new k(Math.cos(x)*A*o,o*(.55+Math.random()*.75),Math.sin(x)*A*o),v=.45+Math.random()*.4,g=.55,M=1.4}else p=new k((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3),_=new k((Math.random()-.5)*o,o*(.3+Math.random()*.9),(Math.random()-.5)*o),v=.6+Math.random()*.5,g=.7,M=.5;this.particles.push({pos:e.clone().add(p),vel:_,color:d.clone(),size:.15+Math.random()*.15,life:0,maxLife:v,floorY:u,gravityScale:g,drag:M})}}stepPhysics(e){if(this.sceneMode==="menu"||this.playerState.status!=="running")return;this.playerState.elapsedTime+=e,this.playerState.coyoteTimer>0&&(this.playerState.coyoteTimer-=e),this.playerState.jumpBufferTimer>0&&(this.playerState.jumpBufferTimer-=e),this.doorCooldown>0&&(this.doorCooldown-=e),this.playerState.crownFlash>0&&(this.playerState.crownFlash=Math.max(0,this.playerState.crownFlash-e)),this.playerState.enemyHitCooldown>0&&(this.playerState.enemyHitCooldown=Math.max(0,this.playerState.enemyHitCooldown-e));const n=11.5;this.playerState.jiggleVel+=(-190*this.playerState.jiggle-n*this.playerState.jiggleVel)*e,this.playerState.jiggle+=this.playerState.jiggleVel*e,this.playerState.jiggle=Kn.clamp(this.playerState.jiggle,-.32,.32),this.levers.forEach(x=>{var A=Math.abs(this.playerState.y-(x.topY+1.2))<1.5&&Nu(this.playerState.x,x.x)<.9;A&&this.input.doorQueued&&this.leverCooldown<=0&&(this.input.doorQueued=!1,x.extended=!x.extended,this.leverCooldown=.4,zt.playLever(),this.togglableStairs.forEach(R=>{if(R.leverId!==x.id)return;R.extended=x.extended;const U=this.ambientAudioFor(R.x,R.topY);U&&zt.playStairSlide(U.xDist,U.yDist,U.pan,.7)}));var y=x.mesh.children.find(function(R){return R.name==="armGroup"});y&&(y.rotation.x=Kn.lerp(y.rotation.x,x.extended?-.2:-1,.12));var S=y?y.children.find(function(R){return R.userData&&R.userData.isBall}):void 0;S&&S.material instanceof ln&&(S.material.color.set(x.extended?"#4ade80":"#ef4444"),S.material.emissive.set(x.extended?"#14532d":"#7f1d1d"))}),this.leverCooldown>0&&(this.leverCooldown-=e),this.togglableStairs.forEach(x=>{var A=x.extended?0:1;x.retractOffset=Kn.lerp(x.retractOffset,A,1-Math.exp(-6*e)),Math.abs(x.retractOffset-A)<.005&&(x.retractOffset=A);var y=new k(Math.sin(x.theta),0,Math.cos(x.theta)),S=on+ai*.5,R=on-.8,U=S+(R-S)*x.retractOffset;x.mesh.position.set(y.x*U,x.topY-rn*.5,y.z*U);var C=x.mesh.children[0];if(C&&C instanceof ct&&C.material instanceof ln){var P=x.retractOffset<.5;C.material.color.set(P?"#4ade80":"#ef4444"),C.material.emissive.set(P?"#198745f0":"#831b1bed")}}),this.input.doorQueued&&(this.doorCooldown<=0&&this.tryUseDoor(),this.input.doorQueued=!1),this.collapsingStairs.forEach(x=>{var A=Math.abs(this.playerState.y-x.topY)<.2&&Nu(this.playerState.x,x.x)<.6;switch(x.state){case"idle":if(A&&this.playerState.grounded){x.state="retracting",x.timer=1;const C=this.ambientAudioFor(x.x,x.topY);C&&zt.playStairSlide(C.xDist,C.yDist,C.pan,1)}break;case"retracting":x.timer-=e,x.retractOffset=Math.min(1,(1-Math.max(0,x.timer))/1),x.timer<=0&&(x.state="hidden",x.timer=1,x.retractOffset=1);break;case"hidden":if(x.timer-=e,x.timer<=0){x.state="extending",x.timer=1;const C=this.ambientAudioFor(x.x,x.topY);C&&zt.playStairSlide(C.xDist,C.yDist,C.pan,1)}break;case"extending":x.timer-=e,x.retractOffset=Math.max(0,x.timer/1),x.timer<=0&&(x.state="idle",x.retractOffset=0,x.timer=0);break}var y=new k(Math.sin(x.theta),0,Math.cos(x.theta)),S=St,R=on-.8,U=S+(R-S)*x.retractOffset;x.mesh.position.set(y.x*U,x.topY-rn*.5,y.z*U)});const a=this.playerState.elapsedTime;if(this.elevators.forEach(x=>{const A=(Math.sin(a*x.speed+x.phase)+1)*.5,y=.15,S=Kn.smoothstep(A,y,1-y),R=Kn.lerp(x.yMin,x.yMax,S);x.mesh&&(x.mesh.position.y=R-rn*.5),x.prevTopY=x.currentTopY,x.currentTopY=R}),this.hazards.forEach(x=>{switch(x.behavior){case"bounce":{if(x.bounceElapsed+=e,x.bounceElapsed>=x.bounceDuration){const P=this.ambientAudioFor(x.currentX,x.bounceBaseY+.32);if(P&&zt.playBallBounce(P.xDist,P.yDist,P.pan),x.bounceElapsed%=x.bounceDuration,x.x=x.bounceToX,x.moveSteps>0){const N=Pn(Pn(x.bounceFromX)+x.direction*x.moveSteps);Pn(x.x)!==N&&(x.direction=x.direction===1?-1:1)}x.bounceFromX=x.x,x.bounceToX=this.findEnemyLandingX(x.x,x.bounceBaseY,x.moveSteps,x.direction)}const S=Kn.clamp(x.bounceElapsed/x.bounceDuration,0,1),R=4*x.amplitude*S*(1-S);let U=x.bounceToX-x.bounceFromX;U>vn*.5&&(U-=vn),U<-vn*.5&&(U+=vn),x.currentX=Hl(x.bounceFromX+U*S,vn),x.theta=tn(x.currentX);const C=x.bounceBaseY+.32+R;if(x.mesh){const P=new k(Math.sin(x.theta),0,Math.cos(x.theta));x.mesh.position.set(P.x*St,C,P.z*St),x.mesh.userData.currentY=C,x.mesh.rotation.x+=e*5,x.mesh.rotation.z+=e*2.5}break}case"patrol":{const S=Math.sin(a*x.speed);if(x.currentX=Hl(x.x+S*x.amplitude,vn),x.theta=tn(x.currentX),x.mesh){const R=new k(Math.sin(x.theta),0,Math.cos(x.theta));x.mesh.position.set(R.x*St,x.bounceBaseY+.7,R.z*St),x.mesh.userData.currentY=x.bounceBaseY+.7,x.mesh.rotation.x+=e*5,x.mesh.rotation.z+=e*2.5}break}default:if(x.currentX=x.x,x.theta=tn(x.x),x.mesh){const S=new k(Math.sin(x.theta),0,Math.cos(x.theta));x.mesh.position.set(S.x*St,x.bounceBaseY+.7,S.z*St),x.mesh.userData.currentY=x.bounceBaseY+.7,x.mesh.rotation.x+=e*5,x.mesh.rotation.z+=e*2.5}break}const A=x.mesh,y=A&&A.userData?.currentY?A.userData.currentY:x.y;this.playerState.enemyHitCooldown<=0&&y+.32>=this.playerState.y-.1&&y-.32<=this.playerState.y+ni&&Di(this.playerState.x,ti*1.5,x.currentX,.4)&&this.applyKnockdown()}),this.springs.forEach(x=>{x.cooldown>0&&(x.cooldown-=e)}),this.playerState.rideElevator>=0){const x=this.playerState.rideElevator,A=this.elevators[x];if(A){const y=A.prevTopY??A.currentTopY,S=A.currentTopY,R=this.findRiderCeilingBottom(x,this.playerState.x,y,S);if(R!==null){const U=R-ni-.02;this.applyKnockdown(-4.5,x,U)}else this.playerState.y=S,this.playerState.currentStairTopY=S}}const o=(this.input.right?1:0)-(this.input.left?1:0);this.playerState.vx=o*CR;const c=this.playerState.x;let u=Hl(this.playerState.x+this.playerState.vx*e,vn);u=this.checkSideCollision(c,u),this.playerState.x=u,o!==0?(this.playerState.facingRight=o>0,this.playerState.walkCycle+=e*9,this.playerState.idleTimer=0):this.playerState.idleTimer+=e,this.input.jumpQueued&&(this.playerState.jumpBufferTimer=.12,this.input.jumpQueued=!1);const d=this.playerState.grounded||this.playerState.coyoteTimer>0;if(this.playerState.jumpBufferTimer>0&&d){this.playerState.vy=Dl,this.playerState.grounded=!1,this.playerState.coyoteTimer=0,this.playerState.jumpBufferTimer=0,this.playerState.rideElevator=-1,this.playerState.jumpCount++,zt.playJump(),this.playerState.jiggleVel+=6.5;const x=tn(this.playerState.x),A=new k(Math.sin(x),0,Math.cos(x));this.spawnParticles(new k(A.x*St,this.playerState.y+.08,A.z*St),10,9684477,1.8,"jump",this.playerState.y)}!this.input.up&&this.playerState.vy>4&&(this.playerState.vy*=.88),this.playerState.vy-=Du*e;const m=this.playerState.y;let p=this.playerState.y+this.playerState.vy*e,_=!1;if(this.playerState.rideElevator<0){const x=m+ni,A=p+ni;for(let y=0;y<this.elevators.length;y++){if(y===this.ignoredElevator)continue;const S=this.elevators[y],R=S.currentTopY,C=(S.prevTopY??R)-rn,P=R-rn,N=C-x,F=P-A,T=m<=C+.02,O=N>=-.02&&F<=.02,Y=T&&A>P+.02&&p<R-.02;if((O||Y)&&Di(this.playerState.x,ti,S.x,S.width)){const V=Math.min(p,P-ni-.02);this.applyKnockdown(-4.5,y,V),p=V,_=!0;break}}}if(!_){const x=this.checkCeilingCollision(m,p);if(x!==null){p=x,this.playerState.vy=0,this.playerState.jiggleVel-=4,zt.playBonk();const A=tn(this.playerState.x),y=new k(Math.sin(A),0,Math.cos(A));this.spawnParticles(new k(y.x*St,p+ni,y.z*St),10,16707722,2.5,"burst",this.findStairTopBelow(this.playerState.x,p+ni))}}const v=this.findGround(m,p);if(v&&this.playerState.vy<=0){if(!this.playerState.grounded){const x=Math.min(Math.abs(this.playerState.vy)/Dl,1.6);if(this.playerState.jiggleVel-=9*x,zt.playLand(x),x>.18){const A=tn(this.playerState.x),y=new k(Math.sin(A),0,Math.cos(A));this.spawnParticles(new k(y.x*St,v.topY+.06,y.z*St),Math.round(6+x*8),12573694,1.4+x*1.2,"land",v.topY)}}this.playerState.y=v.topY,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.coyoteTimer=0,this.playerState.rideElevator=v.rideElevator,this.playerState.currentStairTopY=v.topY,this.playerState.knockdownFloorY=null,this.ignoredElevator=-1}else this.playerState.grounded&&(this.playerState.coyoteTimer=.1),this.playerState.y=p,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null;this.resolveMovableStairLateralHit(),this.springs.forEach(x=>{if(x.cooldown<=0&&Math.abs(this.playerState.y-x.topY)<.5&&Di(this.playerState.x,ti*1.5,x.x,.6)&&this.playerState.vy<=2){x.cooldown=.4,this.playerState.vy=x.bounceForce,this.playerState.grounded=!1,this.playerState.rideElevator=-1,zt.playSuperJump();const A=tn(x.x+.5),y=new k(Math.sin(A),0,Math.cos(A));this.spawnParticles(new k(y.x*St,x.topY+.2,y.z*St),16,16096779,4.2,"burst",x.topY)}}),this.gems.forEach(x=>{!x.collected&&x.y>=this.playerState.y-.3&&x.y<=this.playerState.y+2.5&&Di(this.playerState.x,ti,x.x,.6)&&(x.collected=!0,this.playerState.gemsCollected++,this.playerState.score+=250,this.playerState.crownFlash=.3,zt.playCoin(),x.mesh&&(x.mesh.visible=!1,this.spawnParticles(x.mesh.position,14,16498468,3.5,"burst",this.findStairTopBelow(x.x,x.y))))}),this.checkpoints.forEach(x=>{if(!x.activated&&Math.abs(this.playerState.y-x.y)<1.2&&Di(this.playerState.x,ti*2,x.x,1.2)&&(x.activated=!0,this.activeCheckpoint=x.id,zt.playCheckpoint(),this.playerState.score+=500,x.mesh)){const A=x.mesh.children[1];A&&A.material instanceof ln&&(A.material.color.set("#22c55e"),A.material.emissive.set("#15803d"));const y=tn(x.x),S=new k(Math.sin(y),0,Math.cos(y)),R=new k(S.x*(St-.4),x.y+1.5,S.z*(St-.4));this.spawnParticles(R,20,2278750,3,"burst",x.y)}});const g=this.waterLevel+.25;if(this.waterEnterCooldown>0&&(this.waterEnterCooldown-=e),this.playerState.y<=g){if(!this.wasInWater&&this.playerState.vy<0&&this.waterEnterCooldown<=0){this.wasInWater=!0,this.waterEnterCooldown=1;const x=tn(this.playerState.x),A=new k(Math.sin(x),0,Math.cos(x)),y=new k(A.x*St,g,A.z*St);this.spawnParticles(y,32,5227511,6.5),this.spawnParticles(y.clone().add(new k(0,.2,0)),20,16777215,4),this.createWaterRipple(y),this.playerState.jiggleVel-=12,zt.playGameOver()}this.playerState.vy=Kn.lerp(this.playerState.vy,-.8,e*2.5),this.playerState.vx*=.96,this.playerState.y<this.waterLevel-1.5&&(this.activeCheckpoint>0?(this.resetInput(),this.respawnAtCheckpoint(!1)):this.setGameStatus("gameover"),this.wasInWater=!1)}else this.wasInWater=!1;if(this.playerState.y<-8&&(this.activeCheckpoint>0?this.respawnAtCheckpoint():(this.setGameStatus("gameover"),zt.playGameOver())),this.playerState.grounded&&this.playerState.currentStairTopY!==null&&this.playerState.currentStairTopY>=this.towerHeight){this.setGameStatus("win"),this.playerState.score+=2e3,zt.playWin();const x=new k(0,this.towerHeight+2,0);this.spawnParticles(x,60,16498468,5,"burst",this.towerHeight),this.spawnParticles(x,60,3718648,5,"burst",this.towerHeight)}}createWaterRipple(e){const n=new xm(.3,.45,24);n.rotateX(-Math.PI/2);const a=new Us({color:8308991,transparent:!0,opacity:.65,side:ta,depthWrite:!1}),o=new ct(n,a);o.position.copy(e),o.position.y=this.waterLevel+.02,o.userData={age:0,maxAge:1.8},this.scene.add(o),this.waterRipples.push(o)}respawnAtCheckpoint(e=!0){const n=this.checkpoints.find(a=>a.id===this.activeCheckpoint);e&&zt.playGameOver(),this.playerState.knockdownFloorY=null,this.ignoredElevator=-1,this.playerState.jiggle=0,this.playerState.jiggleVel=0,n?(this.playerState.x=n.x,this.playerState.y=n.y+.5,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null,this.playerState.smoothCamY=n.y+.5):(this.playerState.x=Sv,this.playerState.y=.5,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null,this.playerState.smoothCamY=.5),this.playerState.idleTimer=2,this.playerState.camLeadAngle=0,this.playerState.facingYaw=Math.atan2(Math.sin(tn(this.playerState.x)),Math.cos(tn(this.playerState.x))),this.wasInWater=!1,this.waterEnterCooldown=.8}tryUseDoor(){const e=this.doors.find(a=>Nu(this.playerState.x,a.x)<.65&&Math.abs(this.playerState.y-a.topY)<.75);if(!e)return;const n=this.doors.find(a=>a.pairId===e.pairId&&a.id!==e.id);n&&(this.spawnParticles(e.mesh.position.clone().add(new k(0,1,0)),18,e.color,3.2,"burst",e.topY),this.playerState.x=n.x,this.playerState.y=n.topY+.08,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=n.topY,this.ignoredElevator=-1,this.playerState.smoothCamY=n.topY,this.playerState.idleTimer=2,this.doorCooldown=.55,this.spawnParticles(n.mesh.position.clone().add(new k(0,1,0)),18,n.color,3.2,"burst",n.topY),zt.playCheckpoint())}findGround(e,n){let a=-1/0,o=-1;const c=this.playerState.knockdownFloorY;for(const u of this.staticStairs)(c===null||Math.abs(u.topY-c)>.15)&&Di(this.playerState.x,ti,u.x,u.width)&&e>=u.topY-.45&&n<=u.topY+.25&&u.topY>a&&(a=u.topY,o=-1);return this.elevators.forEach((u,d)=>{d!==this.ignoredElevator&&(c===null||Math.abs(u.currentTopY-c)>.15)&&Di(this.playerState.x,ti,u.x,u.width)&&e>=u.currentTopY-.45&&n<=u.currentTopY+.25&&u.currentTopY>a&&(a=u.currentTopY,o=d)}),this.collapsingStairs.forEach(u=>{this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset)&&(c===null||Math.abs(u.topY-c)>.15)&&e>=u.topY-.45&&n<=u.topY+.08&&u.topY>a&&(a=u.topY,o=-1)}),this.togglableStairs.forEach(u=>{this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset)&&(c===null||Math.abs(u.topY-c)>.15)&&e>=u.topY-.45&&n<=u.topY+.08&&u.topY>a&&(a=u.topY,o=-1)}),a===-1/0?null:{topY:a,rideElevator:o}}applyKnockdown(e=7.5,n=this.playerState.rideElevator,a){const o=this.playerState.currentStairTopY;a!==void 0&&(this.playerState.y=a),this.playerState.enemyHitCooldown=.8,this.playerState.knockdownFloorY=o,this.ignoredElevator=n,this.playerState.vy=e,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null,this.playerState.coyoteTimer=0,this.playerState.jumpBufferTimer=0,this.playerState.jiggleVel-=8,zt.playBonk();const c=tn(this.playerState.x),u=new k(Math.sin(c),0,Math.cos(c)),d=new k(u.x*St,this.playerState.y+1,u.z*St);this.spawnParticles(d,14,16707722,3.5,"burst",this.playerState.knockdownFloorY)}findStairTopBelow(e,n){let a=null;const o=Pn(e);for(const c of this.staticStairs)Pn(c.x)===o&&c.topY<=n+.01&&(a===null||c.topY>a)&&(a=c.topY);return a}movableStairRadialCenter(e){const n=St,a=on-.8;return n+(a-n)*e}movableStairPhysicallyOverlaps(e,n,a){if(!Di(e,ti,n-.5,1))return!1;const o=this.movableStairRadialCenter(a),c=o-ai*.5,u=o+ai*.5,d=St-ti;return St+ti>c&&d<u}resolveMovableStairLateralHit(){if(this.playerState.enemyHitCooldown>0)return!1;const e=this.playerState.y,n=this.playerState.y+ni,a=(o,c,u)=>{const d=u-rn;return e>=u-.05||n<=d+.02?!1:this.movableStairPhysicallyOverlaps(this.playerState.x,o,c)};for(const o of this.collapsingStairs)if(a(o.x,o.retractOffset,o.topY))return this.applyKnockdown(-4.5,-1),!0;for(const o of this.togglableStairs)if(a(o.x,o.retractOffset,o.topY))return this.applyKnockdown(-4.5,-1),!0;return!1}findRiderCeilingBottom(e,n,a,o){if(o<=a+1e-4)return null;const c=a+ni,u=o+ni;let d=null;const m=(p,_,v)=>{if(!v)return;const g=a<_-.02,M=u>=p-.02,x=c<=_+ni;g&&M&&x&&(d===null||p<d)&&(d=p)};for(const p of this.staticStairs)m(p.topY-rn,p.topY,Di(n,ti,p.x,p.width));for(const p of this.collapsingStairs)m(p.topY-rn,p.topY,this.movableStairPhysicallyOverlaps(n,p.x,p.retractOffset));for(const p of this.togglableStairs)m(p.topY-rn,p.topY,this.movableStairPhysicallyOverlaps(n,p.x,p.retractOffset));for(let p=0;p<this.elevators.length;p++){if(p===e)continue;const _=this.elevators[p];if(!Di(n,ti,_.x,_.width))continue;const v=_.currentTopY,M=(_.prevTopY??v)-rn-c,x=v-rn-u;if(M>=-.02&&x<=.02){const A=v-rn;(d===null||A<d)&&(d=A)}}return d}checkCeilingCollision(e,n){if(this.playerState.vy<=0)return null;const a=n+ni;let o=null;const c=(u,d)=>{d&&e+ni<=u&&a>=u&&(o===null||u<o)&&(o=u)};for(const u of this.staticStairs)c(u.topY-rn,Di(this.playerState.x,ti,u.x,u.width));for(const u of this.elevators)c(u.currentTopY-rn,Di(this.playerState.x,ti,u.x,u.width));for(const u of this.collapsingStairs)c(u.topY-rn,this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset));for(const u of this.togglableStairs)c(u.topY-rn,this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset));return o!==null?o-ni:null}checkSideCollision(e,n){const a=this.playerState.y,o=a+ni,c=(d,m,p,_)=>{const v=_-rn;return o<=v||a>=_?!1:Di(d,ti,m,p)},u=(d,m,p)=>c(n,d,m,p)?!c(e,d,m,p):!1;for(const d of this.staticStairs)if(u(d.x,d.width,d.topY))return e;for(const d of this.elevators)if(u(d.x,d.width,d.currentTopY))return e;for(const d of this.collapsingStairs)if(this.movableStairPhysicallyOverlaps(n,d.x,d.retractOffset)&&u(d.x-.5,1,d.topY))return e;for(const d of this.togglableStairs)if(this.movableStairPhysicallyOverlaps(n,d.x,d.retractOffset)&&u(d.x-.5,1,d.topY))return e;return n}performCullingPass(e,n){this.culler.cullingEnabled=this.config.cullingEnabled,this.culler.updateFrustum(this.camera);const a=on+ai*.5;let o=!1;this.staticStairs.forEach((u,d)=>{this.culler.isItemVisible(u.theta,u.topY,a,ai,e,n)?this.stairsInstancedMesh.setMatrixAt(d,u.defaultMatrix):this.stairsInstancedMesh.setMatrixAt(d,u.culledMatrix),o=!0}),o&&(this.stairsInstancedMesh.instanceMatrix.needsUpdate=!0),this.elevators.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.currentTopY,a,ai+.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.gems.forEach(u=>{if(u.collected)return;const d=this.culler.isItemVisible(u.theta,u.y,St,.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.springs.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY,St,.6,e,n);u.mesh&&u.mesh.parent&&(u.mesh.parent.visible=d)}),this.hazards.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.y,St,.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.doors.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY+1,on+.25,1.5,e,n);u.mesh.visible=d}),this.collapsingStairs.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY,St,.5,e,n);u.mesh.visible=d});const c=!this.config.cullingEnabled||n>this.towerHeight-22;this.topRing.visible=c,this.summitCrown.visible=c}startLoop(){const e=n=>{if(this.animFrameId=window.requestAnimationFrame(e),this.config.simulatedFpsThrottle>0){const o=1e3/this.config.simulatedFpsThrottle;if(n-this.lastThrottleTime<o)return;this.lastThrottleTime=n}let a=Math.min((n-this.lastTime)/1e3,LR);for(this.lastTime=n,this.accumulator+=a;this.accumulator>=Wa;)this.stepPhysics(Wa),this.accumulator-=Wa;this.updateVisuals(n*.001),this.sky&&this.sky.material?.uniforms?.time&&(this.sky.material.uniforms.time.value=n*5e-5),this.water&&this.water.material.uniforms?.time&&(this.water.material.uniforms.time.value+=.016666666666666666),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.playerHudTimer+=a,this.playerHudTimer>=.1&&(this.playerHudTimer=0,this.onPlayerStateUpdate?.(this.playerState))};this.animFrameId=window.requestAnimationFrame(e)}updateVisuals(e){const n=tn(this.playerState.x),a=new k(Math.sin(n),0,Math.cos(n)),o=new k(a.x*St,this.playerState.y,a.z*St);this.playerGroup.position.copy(o);const c=1,u=this.playerState.idleTimer<c,d=Math.atan2(a.x,a.z);let m=d;u&&(m=d+(this.playerState.facingRight?Math.PI/2:-Math.PI/2));let p=m-this.playerState.facingYaw;p=((p+Math.PI)%ea+ea)%ea-Math.PI;const _=u?18:6,v=Math.sign(p)*Math.min(Math.abs(p),_*Wa);this.playerState.facingYaw+=v,this.playerGroup.rotation.set(0,this.playerState.facingYaw,0);const g=this.playerState.grounded,M=Math.abs(this.playerState.vx)>.1,x=this.playerState.walkCycle,A=!M&&g?Math.sin(e*4.5)*.025:0,y=this.playerState.vy,R=(g?0:Kn.clamp(y/40,-.1,.1))+this.playerState.jiggle,U=1+A+R,C=1-(A+R)*.5;this.torso.scale.set(C,U,C),this.playerBody.position.y=-qh;const P=1-R*.8;this.leftFoot.scale.set(P,1+R*.35,P),this.rightFoot.scale.set(P,1+R*.35,P),this.slimeTopDrop.position.y=qh+2.15+this.playerState.jiggle*.55+A*1.5,this.slimeTopDrop.rotation.y+=Wa*1.6,this.slimeTopDrop.rotation.z=Math.sin(e*3.1)*.16-this.playerState.vx*.05,this.slimeTopDrop.scale.set(1-R*.4,1+R*.8,1-R*.4);const N=this.slimeTopDrop.material;if(this.playerState.crownFlash>0){const E=1-this.playerState.crownFlash/.2,H=new ht("#fbbf24"),ie=new ht("#6ee7a8");N.color.lerpColors(H,ie,E),N.emissive.set(ie.clone().multiplyScalar(.3).lerp(H.clone().multiplyScalar(.6),1-E)),N.emissiveIntensity=.85-E*.55;const xe=1+(1-E)*.85;this.slimeTopDrop.scale.multiplyScalar(xe)}else N.color.set("#48ff00"),N.emissive.set("#37ca0b"),N.emissiveIntensity=.5;const T=e%3.5<.15;if(this.leftEye.scale.y=T?.08:1,this.rightEye.scale.y=T?.08:1,g&&M){const E=Math.sin(x);this.leftArm.rotation.x=E*.48,this.rightArm.rotation.x=-E*.48,this.leftLeg.rotation.x=-E*.24,this.rightLeg.rotation.x=E*.24,this.leftLowerLeg.rotation.x=Math.max(0,E)*.55,this.rightLowerLeg.rotation.x=Math.max(0,-E)*.55}else this.leftArm.rotation.x=A*1.5,this.rightArm.rotation.x=-A*1.5,g?(this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftLowerLeg.rotation.x=0,this.rightLowerLeg.rotation.x=0):(this.leftLeg.rotation.x=-.12,this.rightLeg.rotation.x=.08,this.leftLowerLeg.rotation.x=.5,this.rightLowerLeg.rotation.x=.42);g&&M?(this.leftFoot.rotation.x=Math.sin(x)*.28,this.rightFoot.rotation.x=-Math.sin(x)*.28):(this.leftFoot.rotation.x=0,this.rightFoot.rotation.x=0);const O=ea/vn,Y=this.playerState.facingRight?1:-1,V=this.playerState.idleTimer<c,X=V?Y*O:0;this.playerState.camLeadAngle=Kn.lerp(this.playerState.camLeadAngle,X,V?.09:.055);const le=this.playerState.camLeadAngle,ae=n+le*2;this.playerState.verticalLead=Kn.lerp(this.playerState.verticalLead,M&&g?AR*.2:0,.08);const Q=this.playerState.verticalLead,B=g?.09:.045;this.playerState.smoothCamY=Kn.lerp(this.playerState.smoothCamY,this.playerState.y,B);const q=new k(Math.sin(n+le)*St,this.playerState.smoothCamY+1.9+Q*.55,Math.cos(n+le)*St);let ee,re;if(this.sceneMode==="menu"){this.menuCamAngle+=Wa*.15;const E=42,H=this.towerHeight*.55+6;ee=new k(Math.sin(this.menuCamAngle)*E,H,Math.cos(this.menuCamAngle)*E),re=new k(0,this.towerHeight*.5,0),this.camera.position.lerp(ee,.06)}else{const E=new k(Math.sin(ae),0,Math.cos(ae)),H=.1;ee=q.clone().add(E.multiplyScalar(18)).add(new k(0,5+H,0)),re=q.clone().add(new k(0,H,0)),this.camera.position.lerp(ee,.1)}if(this.camera.lookAt(re),this.sunLight.target.position.set(0,this.towerHeight*.5,0),this.sunLight.target.updateMatrixWorld(),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.gems.forEach(E=>{E.mesh&&E.mesh.visible&&(E.mesh.rotation.y=e*2.2,E.mesh.position.y=E.y+Math.sin(e*3.5+E.x)*.12)}),this.doors.forEach((E,H)=>{if(!E.mesh.visible)return;const ie=E.mesh.children.find(xe=>xe.userData.baseY!==void 0);ie&&(ie.position.y=Number(ie.userData.baseY)+Math.sin(e*4+H)*.12)}),this.summitCrown&&this.summitCrown.visible){const E=this.summitCrown.getObjectByName("victoryTrophy");E&&(E.rotation.y=e*1.5)}this.updateParticles(Wa);for(let E=this.waterRipples.length-1;E>=0;E--){const H=this.waterRipples[E],ie=H.userData;ie.age+=Wa;const xe=ie.age/ie.maxAge;if(xe>=1){this.scene.remove(H),H.geometry.dispose(),H.material.dispose(),this.waterRipples.splice(E,1);continue}const Ee=1+xe*8;H.scale.setScalar(Ee),H.material.opacity=.65*(1-xe)}const G=Math.atan2(this.camera.position.x,this.camera.position.z);this.performCullingPass(G,this.camera.position.y),this.updateAmbientAudio()}ambientAudioFor(e,n){const a=Nu(e,this.playerState.x),o=Math.abs(n-this.playerState.y);if(zu(a,o)<=0)return null;const c=tn(this.playerState.x),u=new k(Math.cos(c),0,-Math.sin(c)),d=new k(1,0,0).applyQuaternion(this.camera.quaternion),m=Math.sign(u.dot(d))||1;let p=e-this.playerState.x;p>vn/2&&(p-=vn),p<-vn/2&&(p+=vn);const v=Kn.clamp(p/3*m,-1,1);return{xDist:a,yDist:o,pan:v}}updateAmbientAudio(){if(this.sceneMode!=="play"||this.playerState.status!=="running"){this.ambientAudioActive&&(this.ambientAudioActive=!1,zt.clearAmbient());return}this.ambientAudioActive=!0;const e=[];for(const n of this.hazards){if(n.behavior!=="patrol")continue;const a=this.ambientAudioFor(n.currentX,n.bounceBaseY+.7);a&&e.push({id:`haz-${n.id}`,kind:"patrol",...a})}for(let n=0;n<this.elevators.length;n++){const a=this.elevators[n],o=a.prevTopY??a.currentTopY,c=Math.abs(a.currentTopY-o)/Wa;if(c<.05)continue;const u=this.ambientAudioFor(a.x+a.width*.5,a.currentTopY);u&&e.push({id:`elev-${n}`,kind:"elevator",...u,intensity:Math.min(1,c/2.5)})}zt.updateAmbient(e)}updateParticles(e){let n=0;const a=this.particleGeoPositions,o=this.particleGeoColors;for(let c=this.particles.length-1;c>=0;c--){const u=this.particles[c];if(u.life+=e,u.life>=u.maxLife){this.particles.splice(c,1);continue}const d=u.gravityScale??.3,m=u.drag??0;if(m>0){const v=Math.exp(-m*e);u.vel.x*=v,u.vel.z*=v}u.vel.y-=Du*d*e,u.pos.addScaledVector(u.vel,e),u.floorY!=null&&u.pos.y<u.floorY+.02&&(u.pos.y=u.floorY+.02,u.vel.y<0&&(u.vel.y*=-.18),u.vel.x*=.82,u.vel.z*=.82);const p=n*3;a[p]=u.pos.x,a[p+1]=u.pos.y,a[p+2]=u.pos.z;const _=1-u.life/u.maxLife;o[p]=u.color.r*_,o[p+1]=u.color.g*_,o[p+2]=u.color.b*_,n++}this.particlePointsMesh.geometry.attributes.position.needsUpdate=!0,this.particlePointsMesh.geometry.attributes.color.needsUpdate=!0,this.particlePointsMesh.geometry.setDrawRange(0,n)}setupEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}onKeyDown=e=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),(e.key==="ArrowLeft"||e.key.toLowerCase()==="a")&&(this.input.left=!0),(e.key==="ArrowRight"||e.key.toLowerCase()==="d")&&(this.input.right=!0),(e.key==="ArrowUp"||e.key.toLowerCase()==="w"||e.key===" ")&&!this.input.up&&(this.input.jumpQueued=!0,this.input.up=!0),(e.key==="ArrowDown"||e.key.toLowerCase()==="s")&&!this.input.down&&(this.input.doorQueued=!0,this.input.down=!0),e.key.toLowerCase()==="r"&&this.restartGame()};onKeyUp=e=>{(e.key==="ArrowLeft"||e.key.toLowerCase()==="a")&&(this.input.left=!1),(e.key==="ArrowRight"||e.key.toLowerCase()==="d")&&(this.input.right=!1),(e.key==="ArrowUp"||e.key.toLowerCase()==="w"||e.key===" ")&&(this.input.up=!1),(e.key==="ArrowDown"||e.key.toLowerCase()==="s")&&(this.input.down=!1)};setGameStatus(e){this.playerState.status=e,this.onGameStatusChange&&this.onGameStatusChange(e)}setRenderResolution(e,n){const a=this.config.renderScale,o=e*a,c=n*a,u=o/c;this.renderer.setPixelRatio(1),this.renderer.setSize(o,c,!1),this.composer.setSize(o,c);const d=Math.tan(Kn.degToRad(Xh)/2)*Yh;if(u<Yh){const m=Kn.radToDeg(2*Math.atan(d/u));this.camera.fov=Math.min(m,wR)}else this.camera.fov=Xh;this.camera.aspect=u,this.camera.updateProjectionMatrix(),this.renderer.domElement.id=`game-canvas-${e}x${n}`}setSceneMode(e){this.sceneMode=e,e==="menu"&&(this.ignoredElevator=-1,this.resetInput(),this.playerState.x=this.level.start.x,this.playerState.y=this.level.start.y,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.status="running",this.playerState.elapsedTime=0,this.playerState.jumpCount=0,this.playerState.score=0,this.playerState.gemsCollected=0,this.playerState.smoothCamY=this.level.start.y,this.playerState.camLeadAngle=0,this.playerState.idleTimer=3,this.gems.forEach(n=>{n.collected=!1,n.mesh&&(n.mesh.visible=!0)}),this.checkpoints.forEach(n=>{n.activated=!1}),this.activeCheckpoint=0,this.collapsingStairs.forEach(n=>{n.state="idle",n.retractOffset=0,n.timer=0}),this.levers.forEach(n=>{n.extended=!1}),this.togglableStairs.forEach(n=>{n.extended=!1}))}restartGame(){this.ignoredElevator=-1,this.resetInput(),this.playerState.x=this.level.start.x,this.playerState.y=this.level.start.y,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.score=0,this.playerState.gemsCollected=0,this.playerState.jumpCount=0,this.playerState.elapsedTime=0,this.playerState.camLeadAngle=0,this.playerState.smoothCamY=this.level.start.y,this.playerState.knockdownFloorY=null,this.playerState.currentStairTopY=null,this.playerState.enemyHitCooldown=0,this.playerState.idleTimer=2,this.playerState.facingYaw=Math.atan2(Math.sin(tn(this.level.start.x)),Math.cos(tn(this.level.start.x))),this.activeCheckpoint=0,this.doorCooldown=0,this.collapsingStairs.forEach(e=>{e.state="idle",e.retractOffset=0,e.timer=0}),this.levers.forEach(e=>{e.extended=!1}),this.togglableStairs.forEach(e=>{e.extended=!1}),this.gems.forEach(e=>{e.collected=!1,e.mesh&&(e.mesh.visible=!0)}),this.collapsingStairs.forEach(e=>{e.state="idle",e.retractOffset=0,e.timer=0}),this.checkpoints.forEach(e=>{if(e.activated=!1,e.mesh){const n=e.mesh.children[1];n&&n.material instanceof ln&&(n.material.color.set("#ef4444"),n.material.emissive.set("#991b1b"))}}),this.setGameStatus("running")}resetInput(){this.input.left=!1,this.input.right=!1,this.input.up=!1,this.input.down=!1,this.input.jumpQueued=!1,this.input.doorQueued=!1}dispose(){zt.clearAmbient(),window.cancelAnimationFrame(this.animFrameId),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.scene.traverse(e=>{e instanceof ct&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}const R1=1,L1="lvl_0041",D1="Nowy Poziom 41",N1=48,U1=24,O1={x:1,y:.5},P1=[{id:"st-start",x:0,topY:0,count:3},{id:"st_6_0",x:6,topY:0,count:5},{id:"st_1_2.5",x:1,topY:2.5,count:2},{id:"st_14_12.5",x:14,topY:12.5,count:2},{id:"st_12_12.5",x:12,topY:12.5,count:2},{id:"st_5_9.5",x:5,topY:9.5,count:2},{id:"st_3_8.5",x:3,topY:8.5,count:2},{id:"st_1_7.5",x:1,topY:7.5,count:2},{id:"st_door_1_14",x:1,topY:13.5,count:1},{id:"st_door_18_19",x:18,topY:18.5,count:1},{id:"st_19_18.5",x:19,topY:18.5,count:2},{id:"st_9_28",x:9,topY:28,count:2},{id:"st_7_28.5",x:7,topY:28.5,count:2},{id:"st_5_29",x:5,topY:29,count:2},{id:"st_3_29.5",x:3,topY:29.5,count:2},{id:"st_1_31",x:1,topY:31,count:2},{id:"st_23_31",x:23,topY:31,count:2},{id:"st_21_31",x:21,topY:31,count:2},{id:"st_19_31",x:19,topY:31,count:2},{id:"st_8_36",x:8,topY:36,count:2},{id:"st_15_36",x:15,topY:36,count:2},{id:"st_13_42",x:13,topY:42,count:2},{id:"st_19_45",x:19,topY:45,count:2},{id:"st_21_46.5",x:21,topY:46.5,count:2},{id:"st_17_44",x:17,topY:44,count:2},{id:"st_15_43",x:15,topY:43,count:2},{id:"st_11_41",x:11,topY:41,count:2},{id:"st_9_40",x:9,topY:40,count:2},{id:"st_12_47",x:12,topY:47,count:2},{id:"st_9_48",x:9,topY:48,count:2},{id:"st_7_48",x:7,topY:48,count:2},{id:"st_17_36",x:17,topY:36,count:1},{id:"st_lev_20_0",x:20,topY:0,count:1},{id:"st_19_0",x:19,topY:0,count:1},{id:"st_7_4.5",x:7,topY:4.5,count:2},{id:"st_10_5",x:10,topY:5,count:2},{id:"st_13_5",x:13,topY:5,count:2},{id:"st_6_36",x:6,topY:36,count:2},{id:"st_5_39",x:5,topY:39,count:2},{id:"st_7_39",x:7,topY:39,count:2},{id:"st_3_13.5",x:3,topY:13.5,count:1},{id:"st_lev_14_36",x:14,topY:36,count:1},{id:"st_17_46.5",x:17,topY:46.5,count:1},{id:"st_16_46.5",x:16,topY:46.5,count:1},{id:"st_15_46.5",x:15,topY:46.5,count:1},{id:"st_14_46.5",x:14,topY:46.5,count:1},{id:"st_11_47.5",x:11,topY:47.5,count:1},{id:"st_9_15.5",x:9,topY:15.5,count:1},{id:"st_10_16",x:10,topY:16,count:1},{id:"st_8_10.5",x:8,topY:10.5,count:1},{id:"st_7_10",x:7,topY:10,count:1},{id:"st_12_0",x:12,topY:0,count:1},{id:"st_14_0",x:14,topY:0,count:1},{id:"st_13_0",x:13,topY:0,count:1},{id:"st_11_0",x:11,topY:0,count:1},{id:"st_lev_21_1",x:21,topY:1,count:1},{id:"st_4_3.5",x:4,topY:3.5,count:2},{id:"st_7_13.5",x:7,topY:13.5,count:1},{id:"st_6_14",x:6,topY:14,count:1},{id:"st_5_14.5",x:5,topY:14.5,count:1},{id:"st_4_14",x:4,topY:14,count:1},{id:"st_10_11.5",x:10,topY:11.5,count:1},{id:"st_8_13",x:8,topY:13,count:1},{id:"st_11_12",x:11,topY:12,count:1},{id:"st_5_36",x:5,topY:36,count:1},{id:"st_3_37",x:3,topY:37,count:1},{id:"st_2_37.5",x:2,topY:37.5,count:1},{id:"st_1_37",x:1,topY:37,count:1},{id:"st_0_36.5",x:0,topY:36.5,count:1},{id:"st_4_36",x:4,topY:36,count:1},{id:"st_9_10.5",x:9,topY:10.5,count:1},{id:"st_23_1",x:23,topY:1,count:1},{id:"st_7_2",x:7,topY:2,count:1}],I1=[{id:"el_16_5",x:16,width:1.2,yMin:5,yMax:12.5,speed:.75,phase:0},{id:"el_11_16",x:11,width:1.2,yMin:16,yMax:28,speed:.75,phase:0},{id:"el_18_31",x:18,width:1.2,yMin:31,yMax:36,speed:.75,phase:0}],F1=[{id:"g_10_0.5",x:10.5,y:.5},{id:"g_1_8",x:1.5,y:8},{id:"g_20_19",x:20.5,y:19},{id:"g_9_36.5",x:9.5,y:36.5},{id:"g_15_36.5",x:15.5,y:36.5},{id:"g_22_47",x:22.5,y:47}],B1=[],z1=[{id:"en_bounce_14_13",xCenter:14,y:13.05,behavior:"bounce",amplitude:3.5,moveSteps:0,speed:1.2},{id:"en_patrol_9_0",xCenter:9,y:.55,behavior:"patrol",amplitude:1.5,speed:1.4}],H1=[{id:1,name:"Checkpoint 6",floor:5,x:15,y:5},{id:2,name:"Checkpoint 5",floor:14,x:2,y:13.5},{id:3,name:"Checkpoint 4",floor:40,x:1,y:39.5},{id:4,name:"Checkpoint 6",floor:47,x:23,y:46.5}],G1=[{id:"cs_22_1.5",x:22,topY:1.5},{id:"cs_13_0.5",x:13,topY:.5}],k1=[{id:"lev_14_36",x:14,topY:36},{id:"lev_21_1",x:21,topY:1}],V1=[{id:"ts_11_36",x:11,topY:36,leverId:"lev_14_36"},{id:"ts_17_0",x:17,topY:0,leverId:"lev_21_1"}],Y1=[{id:"door_pair_1_14_a",pairId:"pair_1_14",x:1,topY:13.5,color:"#00E5FF"},{id:"door_pair_1_14_b",pairId:"pair_1_14",x:18,topY:18.5,color:"#00E5FF"}],UR={schemaVersion:R1,id:L1,name:D1,towerHeight:N1,circumferenceSteps:U1,start:O1,stairs:P1,elevators:I1,gems:F1,springs:B1,enemies:z1,checkpoints:H1,collapsingStairs:G1,levers:k1,togglableStairs:V1,doors:Y1},OR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:H1,circumferenceSteps:U1,collapsingStairs:G1,default:UR,doors:Y1,elevators:I1,enemies:z1,gems:F1,id:L1,levers:k1,name:D1,schemaVersion:R1,springs:B1,stairs:P1,start:O1,togglableStairs:V1,towerHeight:N1},Symbol.toStringTag,{value:"Module"})),X1=1,W1="lvl_0041",q1="Nowy Poziom 41",j1=48,Z1=24,K1={x:1,y:.5},Q1=[{id:"st_0_48",x:0,topY:48,count:2},{id:"st_3_3.5",x:3,topY:3.5,count:2},{id:"st_5_4.5",x:5,topY:4.5,count:2},{id:"st_7_5.5",x:7,topY:5.5,count:2},{id:"st_9_6.5",x:9,topY:6.5,count:2},{id:"st_11_7.5",x:11,topY:7.5,count:2},{id:"st_13_8.5",x:13,topY:8.5,count:2},{id:"st_15_9.5",x:15,topY:9.5,count:2},{id:"st_17_10.5",x:17,topY:10.5,count:2},{id:"st_19_11.5",x:19,topY:11.5,count:2},{id:"st_16_13",x:16,topY:13,count:2},{id:"st_14_14",x:14,topY:14,count:2},{id:"st_12_15",x:12,topY:15,count:2},{id:"st_10_16",x:10,topY:16,count:2},{id:"st_11_18.5",x:11,topY:18.5,count:2},{id:"st_8_17",x:8,topY:17,count:2},{id:"st_13_19.5",x:13,topY:19.5,count:2},{id:"st_15_20.5",x:15,topY:20.5,count:2},{id:"st_17_21.5",x:17,topY:21.5,count:2},{id:"st_19_22.5",x:19,topY:22.5,count:2},{id:"st_16_24",x:16,topY:24,count:2},{id:"st_14_25",x:14,topY:25,count:2},{id:"st_12_26",x:12,topY:26,count:2},{id:"st_10_27",x:10,topY:27,count:2},{id:"st_8_28",x:8,topY:28,count:2},{id:"st_11_29.5",x:11,topY:29.5,count:2},{id:"st_13_30.5",x:13,topY:30.5,count:2},{id:"st_15_31.5",x:15,topY:31.5,count:2},{id:"st_17_32.5",x:17,topY:32.5,count:2},{id:"st_19_33.5",x:19,topY:33.5,count:2},{id:"st_16_35",x:16,topY:35,count:2},{id:"st_14_36",x:14,topY:36,count:2},{id:"st_12_37",x:12,topY:37,count:2},{id:"st_10_38",x:10,topY:38,count:2},{id:"st_8_39",x:8,topY:39,count:2},{id:"st_6_40",x:6,topY:40,count:2},{id:"st_9_41.5",x:9,topY:41.5,count:2},{id:"st_11_42.5",x:11,topY:42.5,count:2},{id:"st_13_43.5",x:13,topY:43.5,count:2},{id:"st_15_44.5",x:15,topY:44.5,count:2},{id:"st_17_45.5",x:17,topY:45.5,count:2},{id:"st_0_0",x:0,topY:0,count:18},{id:"st_lev_18_0",x:18,topY:0,count:1},{id:"st_door_21_2",x:21,topY:2,count:1},{id:"st_door_19_46",x:19,topY:45.5,count:1}],J1=[{id:"el_2_3.5",x:2,width:1.2,yMin:3.5,yMax:47.5,speed:.75,phase:0}],$1=[{id:"g_15_45",x:15.5,y:45},{id:"g_13_44",x:13.5,y:44},{id:"g_11_43",x:11.5,y:43},{id:"g_9_42",x:9.5,y:42},{id:"g_11_38.5",x:11.5,y:38.5},{id:"g_13_37.5",x:13.5,y:37.5},{id:"g_15_36.5",x:15.5,y:36.5},{id:"g_17_35.5",x:17.5,y:35.5},{id:"g_17_33",x:17.5,y:33},{id:"g_15_32",x:15.5,y:32},{id:"g_13_31",x:13.5,y:31},{id:"g_11_30",x:11.5,y:30},{id:"g_11_27.5",x:11.5,y:27.5},{id:"g_13_26.5",x:13.5,y:26.5},{id:"g_15_25.5",x:15.5,y:25.5},{id:"g_17_24.5",x:17.5,y:24.5},{id:"g_17_22",x:17.5,y:22},{id:"g_15_21",x:15.5,y:21},{id:"g_13_20",x:13.5,y:20},{id:"g_11_19",x:11.5,y:19},{id:"g_11_16.5",x:11.5,y:16.5},{id:"g_13_15.5",x:13.5,y:15.5},{id:"g_15_14.5",x:15.5,y:14.5},{id:"g_17_13.5",x:17.5,y:13.5},{id:"g_17_11",x:17.5,y:11},{id:"g_15_10",x:15.5,y:10},{id:"g_13_9",x:13.5,y:9},{id:"g_11_8",x:11.5,y:8},{id:"g_9_7",x:9.5,y:7},{id:"g_7_6",x:7.5,y:6},{id:"g_5_5",x:5.5,y:5},{id:"g_3_4",x:3.5,y:4},{id:"g_1_4",x:1.5,y:4},{id:"g_3_0.5",x:3.5,y:.5},{id:"g_5_0.5",x:5.5,y:.5},{id:"g_7_0.5",x:7.5,y:.5},{id:"g_9_0.5",x:9.5,y:.5},{id:"g_11_0.5",x:11.5,y:.5},{id:"g_13_0.5",x:13.5,y:.5},{id:"g_15_0.5",x:15.5,y:.5},{id:"g_17_0.5",x:17.5,y:.5}],ey=[],ty=[],ny=[{id:1,name:"Checkpoint 4",floor:4,x:1,y:3.5},{id:2,name:"Checkpoint 3",floor:17,x:7,y:17},{id:3,name:"Checkpoint 2",floor:28,x:7,y:28},{id:4,name:"Checkpoint 1",floor:46,x:20,y:45.5}],iy=[],ay=[{id:"lev_18_0",x:18,topY:0}],sy=[{id:"ts_20_1",x:20,topY:1,leverId:"lev_18_0"}],ry=[{id:"door_pair_21_2_a",pairId:"pair_21_2",x:21,topY:2,color:"#00E5FF"},{id:"door_pair_21_2_b",pairId:"pair_21_2",x:19,topY:45.5,color:"#00E5FF"}],PR={schemaVersion:X1,id:W1,name:q1,towerHeight:j1,circumferenceSteps:Z1,start:K1,stairs:Q1,elevators:J1,gems:$1,springs:ey,enemies:ty,checkpoints:ny,collapsingStairs:iy,levers:ay,togglableStairs:sy,doors:ry},IR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:ny,circumferenceSteps:Z1,collapsingStairs:iy,default:PR,doors:ry,elevators:J1,enemies:ty,gems:$1,id:W1,levers:ay,name:q1,schemaVersion:X1,springs:ey,stairs:Q1,start:K1,togglableStairs:sy,towerHeight:j1},Symbol.toStringTag,{value:"Module"})),oy=1,ly="lvl_0017",cy="Strażnik Podniebnego Mostu",uy=48,fy=24,dy={x:1,y:.5},hy=[{id:"st-start",x:0,topY:0,count:3},{id:"u1",x:4,topY:1.5,count:2},{id:"u2",x:7,topY:3,count:2},{id:"u3",x:10,topY:4.5,count:2},{id:"cp1plat",x:13,topY:6,count:2},{id:"u4",x:16,topY:7.5,count:2},{id:"u5",x:19,topY:9,count:2},{id:"u6",x:22,topY:10.5,count:2},{id:"u7",x:3,topY:13.5,count:2},{id:"balcup",x:6,topY:15,count:5},{id:"u8",x:12,topY:16.5,count:2},{id:"u9",x:15,topY:18,count:2},{id:"cp2plat",x:18,topY:19.5,count:2},{id:"u10",x:21,topY:21,count:2},{id:"u11",x:0,topY:22.5,count:2},{id:"u12",x:5,topY:25.5,count:2},{id:"levplat",x:8,topY:27,count:2},{id:"u13",x:13,topY:30,count:2},{id:"cp3plat",x:16,topY:31.5,count:2},{id:"u14",x:19,topY:33,count:2},{id:"u15",x:22,topY:34.5,count:2},{id:"u16",x:1,topY:36,count:2},{id:"u17",x:4,topY:37.5,count:2},{id:"bridge",x:7,topY:39,count:5},{id:"d1",x:13,topY:37.5,count:2},{id:"d2",x:16,topY:36,count:2},{id:"cp4plat",x:21,topY:33,count:2},{id:"d3",x:0,topY:31.5,count:2},{id:"balcdn",x:3,topY:29.5,count:5},{id:"d4",x:9,topY:27.5,count:2},{id:"d5",x:12,topY:26,count:2},{id:"d6",x:17,topY:23,count:2},{id:"d7",x:20,topY:21.5,count:2},{id:"d8",x:23,topY:20,count:2},{id:"portalplat",x:2,topY:18.5,count:2},{id:"summit",x:8,topY:48,count:4},{id:"st_18_35.5",x:18,topY:35.5,count:1},{id:"st_19_35.5",x:19,topY:35.5,count:1},{id:"st_lev_9_28",x:9,topY:28,count:1}],py=[],my=[{id:"g1",x:4.5,y:2.3},{id:"g2",x:7.5,y:3.8},{id:"g3",x:10.5,y:5.3},{id:"g4",x:16.5,y:8.3},{id:"g5",x:19.5,y:9.8},{id:"g6",x:3.5,y:14.3},{id:"g7",x:12.5,y:17.3},{id:"g8",x:15.5,y:18.8},{id:"g9",x:21.5,y:21.8},{id:"g10",x:5.5,y:26.3},{id:"g11",x:8.5,y:27.8},{id:"g12",x:13.5,y:30.8},{id:"g13",x:19.5,y:33.8},{id:"g14",x:1.5,y:36.8},{id:"g15",x:13.5,y:38.3},{id:"g16",x:16.5,y:36.8},{id:"g17",x:.5,y:32.3},{id:"g19",x:12.5,y:26.8},{id:"g20",x:17.5,y:23.8},{id:"g21",x:23.5,y:20.8},{id:"g22",x:.5,y:.8}],gy=[],xy=[{id:"en1",xCenter:8,y:15.55,behavior:"patrol",amplitude:.5,speed:1.5},{id:"en2",xCenter:9,y:39.55,behavior:"patrol",amplitude:.5,speed:1.5},{id:"en3",xCenter:5,y:30.05,behavior:"patrol",amplitude:.5,speed:1.7}],_y=[{id:1,name:"Podest Wschodni",floor:6,x:14,y:6},{id:2,name:"Półka Środkowa",floor:19,x:19,y:19.5},{id:3,name:"Próg Mostu",floor:31,x:17,y:31.5},{id:4,name:"Zachodni Zjazd",floor:33,x:22,y:33}],vy=[{id:"cs_3_24",x:3,topY:24},{id:"cs_15_24.5",x:15,topY:24.5},{id:"cs_1_12",x:1,topY:12}],yy=[{id:"lev_9_28",x:9,topY:28}],Sy=[{id:"ts_11_29",x:11,topY:29,leverId:"lev_9_28"}],My=[{id:"dportal",pairId:"fin",x:3,topY:18.5},{id:"dsum",pairId:"fin",x:9,topY:48}],FR={schemaVersion:oy,id:ly,name:cy,towerHeight:uy,circumferenceSteps:fy,start:dy,stairs:hy,elevators:py,gems:my,springs:gy,enemies:xy,checkpoints:_y,collapsingStairs:vy,levers:yy,togglableStairs:Sy,doors:My},BR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:_y,circumferenceSteps:fy,collapsingStairs:vy,default:FR,doors:My,elevators:py,enemies:xy,gems:my,id:ly,levers:yy,name:cy,schemaVersion:oy,springs:gy,stairs:hy,start:dy,togglableStairs:Sy,towerHeight:uy},Symbol.toStringTag,{value:"Module"})),by=1,Ey="lvl_0041",Ty="Nowy Poziom 41",wy=48,Ay=24,Cy={x:1,y:.5},Ry=[{id:"st_0_48",x:0,topY:48,count:2},{id:"st_3_3.5",x:3,topY:3.5,count:2},{id:"st_5_4.5",x:5,topY:4.5,count:2},{id:"st_7_5.5",x:7,topY:5.5,count:2},{id:"st_9_6.5",x:9,topY:6.5,count:2},{id:"st_11_7.5",x:11,topY:7.5,count:2},{id:"st_13_8.5",x:13,topY:8.5,count:2},{id:"st_15_9.5",x:15,topY:9.5,count:2},{id:"st_17_10.5",x:17,topY:10.5,count:2},{id:"st_19_11.5",x:19,topY:11.5,count:2},{id:"st_16_13",x:16,topY:13,count:2},{id:"st_14_14",x:14,topY:14,count:2},{id:"st_12_15",x:12,topY:15,count:2},{id:"st_10_16",x:10,topY:16,count:2},{id:"st_11_18.5",x:11,topY:18.5,count:2},{id:"st_8_17",x:8,topY:17,count:2},{id:"st_13_19.5",x:13,topY:19.5,count:2},{id:"st_15_20.5",x:15,topY:20.5,count:2},{id:"st_17_21.5",x:17,topY:21.5,count:2},{id:"st_9_41.5",x:9,topY:41.5,count:2},{id:"st_11_42.5",x:11,topY:42.5,count:2},{id:"st_13_43.5",x:13,topY:43.5,count:2},{id:"st_15_44.5",x:15,topY:44.5,count:2},{id:"st_17_45.5",x:17,topY:45.5,count:2},{id:"st_0_0",x:0,topY:0,count:18},{id:"st_lev_18_0",x:18,topY:0,count:1},{id:"st_door_21_2",x:21,topY:2,count:1},{id:"st_door_19_46",x:19,topY:45.5,count:1},{id:"st_7_40.5",x:7,topY:40.5,count:2},{id:"st_5_39.5",x:5,topY:39.5,count:2},{id:"st_3_38.5",x:3,topY:38.5,count:2},{id:"st_0_37.5",x:0,topY:37.5,count:2},{id:"st_22_36.5",x:22,topY:36.5,count:2},{id:"st_20_35.5",x:20,topY:35.5,count:2},{id:"st_18_34.5",x:18,topY:34.5,count:2},{id:"st_16_33.5",x:16,topY:33.5,count:2},{id:"st_14_32.5",x:14,topY:32.5,count:2},{id:"st_12_31.5",x:12,topY:31.5,count:2},{id:"st_10_30.5",x:10,topY:30.5,count:2},{id:"st_8_29.5",x:8,topY:29.5,count:2},{id:"st_6_28.5",x:6,topY:28.5,count:2},{id:"st_4_27.5",x:4,topY:27.5,count:2},{id:"st_0_26.5",x:0,topY:26.5,count:2},{id:"st_22_25",x:22,topY:25,count:2},{id:"st_20_24",x:20,topY:24,count:2},{id:"st_19_22.5",x:19,topY:22.5,count:1}],Ly=[{id:"el_2_3.5",x:2,width:1.2,yMin:3.5,yMax:47.5,speed:.75,phase:0}],Dy=[{id:"g_15_45",x:15.5,y:45},{id:"g_13_44",x:13.5,y:44},{id:"g_11_43",x:11.5,y:43},{id:"g_9_42",x:9.5,y:42},{id:"g_17_22",x:17.5,y:22},{id:"g_15_21",x:15.5,y:21},{id:"g_13_20",x:13.5,y:20},{id:"g_11_19",x:11.5,y:19},{id:"g_11_16.5",x:11.5,y:16.5},{id:"g_13_15.5",x:13.5,y:15.5},{id:"g_15_14.5",x:15.5,y:14.5},{id:"g_17_13.5",x:17.5,y:13.5},{id:"g_17_11",x:17.5,y:11},{id:"g_15_10",x:15.5,y:10},{id:"g_13_9",x:13.5,y:9},{id:"g_11_8",x:11.5,y:8},{id:"g_9_7",x:9.5,y:7},{id:"g_7_6",x:7.5,y:6},{id:"g_5_5",x:5.5,y:5},{id:"g_3_4",x:3.5,y:4},{id:"g_1_4",x:1.5,y:4},{id:"g_3_0.5",x:3.5,y:.5},{id:"g_5_0.5",x:5.5,y:.5},{id:"g_7_0.5",x:7.5,y:.5},{id:"g_9_0.5",x:9.5,y:.5},{id:"g_11_0.5",x:11.5,y:.5},{id:"g_13_0.5",x:13.5,y:.5},{id:"g_15_0.5",x:15.5,y:.5},{id:"g_17_0.5",x:17.5,y:.5},{id:"g_7_41",x:7.5,y:41},{id:"g_5_40",x:5.5,y:40},{id:"g_3_39",x:3.5,y:39},{id:"g_4_28",x:4.5,y:28},{id:"g_20_24.5",x:20.5,y:24.5},{id:"g_22_25.5",x:22.5,y:25.5},{id:"g_0_27",x:.5,y:27},{id:"g_8_17.5",x:8.5,y:17.5},{id:"g_20_36",x:20.5,y:36},{id:"g_18_35",x:18.5,y:35},{id:"g_16_34",x:16.5,y:34},{id:"g_14_33",x:14.5,y:33},{id:"g_12_32",x:12.5,y:32},{id:"g_10_31",x:10.5,y:31},{id:"g_8_30",x:8.5,y:30},{id:"g_6_29",x:6.5,y:29},{id:"g_20_12",x:20.5,y:12},{id:"g_17_46",x:17.5,y:46},{id:"g_0_38",x:.5,y:38},{id:"g_1_38",x:1.5,y:38},{id:"g_23_38",x:23.5,y:38}],Ny=[],Uy=[],Oy=[{id:1,name:"Checkpoint 4",floor:4,x:1,y:3.5},{id:2,name:"Checkpoint 3",floor:17,x:7,y:17},{id:3,name:"Checkpoint 4",floor:38,x:23,y:37.5},{id:4,name:"Checkpoint 1",floor:46,x:20,y:45.5}],Py=[],Iy=[{id:"lev_18_0",x:18,topY:0}],Fy=[{id:"ts_20_1",x:20,topY:1,leverId:"lev_18_0"}],By=[{id:"door_pair_21_2_a",pairId:"pair_21_2",x:21,topY:2,color:"#00E5FF"},{id:"door_pair_21_2_b",pairId:"pair_21_2",x:19,topY:45.5,color:"#00E5FF"}],zR={schemaVersion:by,id:Ey,name:Ty,towerHeight:wy,circumferenceSteps:Ay,start:Cy,stairs:Ry,elevators:Ly,gems:Dy,springs:Ny,enemies:Uy,checkpoints:Oy,collapsingStairs:Py,levers:Iy,togglableStairs:Fy,doors:By},HR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:Oy,circumferenceSteps:Ay,collapsingStairs:Py,default:zR,doors:By,elevators:Ly,enemies:Uy,gems:Dy,id:Ey,levers:Iy,name:Ty,schemaVersion:by,springs:Ny,stairs:Ry,start:Cy,togglableStairs:Fy,towerHeight:wy},Symbol.toStringTag,{value:"Module"})),zy=1,Hy="lvl_0028",Gy="Łamacz Rytmu",ky=48,Vy=24,Yy={x:1,y:.5},Xy=[{id:"st-start",x:0,topY:0,count:3},{id:"spplat1",x:4,topY:0,count:2},{id:"ledge1",x:6,topY:5.5,count:3},{id:"u1",x:10,topY:7,count:2},{id:"cs1",x:13,topY:8.5},{id:"cp1plat",x:15,topY:10,count:2},{id:"u2",x:18,topY:11.5,count:2},{id:"spplat2",x:21,topY:13,count:2},{id:"ledge2",x:23,topY:18.5,count:3},{id:"balc1",x:3,topY:20,count:5},{id:"u3",x:9,topY:21.5,count:2},{id:"levplat",x:12,topY:23,count:2},{id:"ts1",x:15,topY:24.5},{id:"cp2plat",x:17,topY:26,count:2},{id:"cs2",x:20,topY:27.5},{id:"spplat3",x:22,topY:29,count:2},{id:"ledge3",x:0,topY:34.5,count:3},{id:"u4",x:4,topY:36,count:2},{id:"balc2",x:7,topY:37.5,count:5},{id:"u5",x:13,topY:39,count:2},{id:"cs3",x:16,topY:40.5},{id:"cp3plat",x:18,topY:42,count:2},{id:"spplat4",x:21,topY:43.5,count:2},{id:"ledge4",x:23,topY:46.5,count:3},{id:"summit",x:3,topY:48,count:4}],Wy=[],qy=[{id:"g1",x:6.5,y:6.3},{id:"g2",x:7.5,y:6.3},{id:"g3",x:10.5,y:7.8},{id:"g4",x:15.5,y:10.8},{id:"g5",x:18.5,y:12.3},{id:"g6",x:23.5,y:19.3},{id:"g7",x:.5,y:19.3},{id:"g8",x:9.5,y:22.3},{id:"g9",x:12.5,y:23.8},{id:"g10",x:17.5,y:26.8},{id:"g11",x:.5,y:35.3},{id:"g12",x:1.5,y:35.3},{id:"g13",x:4.5,y:36.8},{id:"g14",x:13.5,y:39.8},{id:"g15",x:18.5,y:42.8},{id:"g16",x:23.5,y:47.3},{id:"g17",x:.5,y:47.3},{id:"g18",x:.5,y:.8}],jy=[{id:"sp1",x:4,topY:0,bounceForce:18.5},{id:"sp2",x:21,topY:13,bounceForce:18.5},{id:"sp3",x:22,topY:29,bounceForce:18.5},{id:"sp4",x:21,topY:43.5,bounceForce:18.5}],Zy=[{id:"en1",xCenter:5,y:20.55,behavior:"patrol",amplitude:.5,speed:1.6},{id:"en2",xCenter:9,y:38.05,behavior:"patrol",amplitude:.5,speed:1.8}],Ky=[{id:1,name:"Podest Wschodni",floor:10,x:16,y:10},{id:2,name:"Rygiel Środkowy",floor:26,x:18,y:26},{id:3,name:"Wysoka Półka",floor:42,x:19,y:42},{id:4,name:"Próg Szczytu",floor:46,x:22,y:46.5}],Qy=[{id:"cs1",x:13,topY:8.5},{id:"cs2",x:20,topY:27.5},{id:"cs3",x:16,topY:40.5}],Jy=[{id:"lever1",x:13,topY:24}],$y=[{id:"ts1",x:15,topY:24.5,leverId:"lever1"}],eS=[],GR={schemaVersion:zy,id:Hy,name:Gy,towerHeight:ky,circumferenceSteps:Vy,start:Yy,stairs:Xy,elevators:Wy,gems:qy,springs:jy,enemies:Zy,checkpoints:Ky,collapsingStairs:Qy,levers:Jy,togglableStairs:$y,doors:eS},kR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:Ky,circumferenceSteps:Vy,collapsingStairs:Qy,default:GR,doors:eS,elevators:Wy,enemies:Zy,gems:qy,id:Hy,levers:Jy,name:Gy,schemaVersion:zy,springs:jy,stairs:Xy,start:Yy,togglableStairs:$y,towerHeight:ky},Symbol.toStringTag,{value:"Module"})),tS=1,nS="lvl_0036",iS="Znikający Krąg",aS=48,sS=24,rS={x:1,y:.5},oS=[{id:"st-start",x:0,topY:0,count:3},{id:"island1",x:6,topY:7,count:4},{id:"cs1",x:11,topY:8.5},{id:"cs2",x:13,topY:10},{id:"cp1plat",x:15,topY:11.5,count:3},{id:"island2",x:21,topY:18,count:3},{id:"cs3",x:1,topY:19.5},{id:"island3",x:3,topY:21,count:3},{id:"balc1",x:7,topY:22.5,count:5},{id:"levplat1",x:13,topY:24,count:2},{id:"ts1",x:16,topY:25.5},{id:"island4",x:18,topY:27,count:3},{id:"cs4",x:22,topY:28.5},{id:"cs5",x:0,topY:30},{id:"island5",x:2,topY:31.5,count:3},{id:"balc2",x:8,topY:38,count:5},{id:"levplat2",x:14,topY:39.5,count:2},{id:"ts2",x:17,topY:41},{id:"island6",x:19,topY:42.5,count:3},{id:"cs6",x:23,topY:44},{id:"cs7",x:1,topY:45.5},{id:"summit",x:5,topY:48,count:4}],lS=[{id:"el1",x:4,width:1.2,yMin:.5,yMax:6.5,speed:.84,phase:0},{id:"el2",x:19,width:1.2,yMin:12,yMax:17.5,speed:.84,phase:1.5},{id:"el3",x:6,width:1.2,yMin:32,yMax:37.5,speed:.84,phase:3},{id:"el4",x:3,width:1.2,yMin:46,yMax:47.5,speed:.84,phase:4.5}],cS=[{id:"g1",x:6.5,y:7.8},{id:"g2",x:7.5,y:7.8},{id:"g3",x:8.5,y:7.8},{id:"g4",x:9.5,y:7.8},{id:"g5",x:15.5,y:12.3},{id:"g6",x:17.5,y:12.3},{id:"g7",x:21.5,y:18.8},{id:"g8",x:22.5,y:18.8},{id:"g9",x:23.5,y:18.8},{id:"g10",x:3.5,y:21.8},{id:"g11",x:5.5,y:21.8},{id:"g12",x:13.5,y:24.8},{id:"g13",x:18.5,y:27.8},{id:"g14",x:19.5,y:27.8},{id:"g15",x:20.5,y:27.8},{id:"g16",x:2.5,y:32.3},{id:"g17",x:4.5,y:32.3},{id:"g18",x:14.5,y:40.3},{id:"g19",x:19.5,y:43.3},{id:"g20",x:21.5,y:43.3},{id:"g21",x:.5,y:.8},{id:"g22",x:1.5,y:.8}],uS=[],fS=[{id:"en1",xCenter:9,y:23.05,behavior:"patrol",amplitude:.5,speed:1.7},{id:"en2",xCenter:10,y:38.55,behavior:"patrol",amplitude:.5,speed:1.9}],dS=[{id:1,name:"Wyspa Rygla",floor:11,x:16,y:11.5},{id:2,name:"Wyspa Trzecia",floor:21,x:4,y:21},{id:3,name:"Wyspa Piąta",floor:31,x:3,y:31.5},{id:4,name:"Wyspa Siódma",floor:42,x:20,y:42.5}],hS=[{id:"cs1",x:11,topY:8.5},{id:"cs2",x:13,topY:10},{id:"cs3",x:1,topY:19.5},{id:"cs4",x:22,topY:28.5},{id:"cs5",x:0,topY:30},{id:"cs6",x:23,topY:44},{id:"cs7",x:1,topY:45.5}],pS=[{id:"lever1",x:14,topY:25},{id:"lever2",x:15,topY:40.5}],mS=[{id:"ts1",x:16,topY:25.5,leverId:"lever1"},{id:"ts2",x:17,topY:41,leverId:"lever2"}],gS=[],VR={schemaVersion:tS,id:nS,name:iS,towerHeight:aS,circumferenceSteps:sS,start:rS,stairs:oS,elevators:lS,gems:cS,springs:uS,enemies:fS,checkpoints:dS,collapsingStairs:hS,levers:pS,togglableStairs:mS,doors:gS},YR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:dS,circumferenceSteps:sS,collapsingStairs:hS,default:VR,doors:gS,elevators:lS,enemies:fS,gems:cS,id:nS,levers:pS,name:iS,schemaVersion:tS,springs:uS,stairs:oS,start:rS,togglableStairs:mS,towerHeight:aS},Symbol.toStringTag,{value:"Module"})),xS=1,_S="lvl_0025",vS="Portal Znawcy",yS=48,SS=24,MS={x:1,y:.5},bS=[{id:"st-start",x:0,topY:0,count:3},{id:"u1",x:4,topY:1.5,count:2},{id:"spplat1",x:7,topY:3,count:2},{id:"ledge1",x:9,topY:8.5,count:3},{id:"cp1plat",x:13,topY:10,count:2},{id:"u2",x:16,topY:11.5,count:2},{id:"cs1",x:19,topY:13},{id:"u3",x:21,topY:14.5,count:2},{id:"balc1",x:0,topY:16,count:5},{id:"u4",x:6,topY:17.5,count:2},{id:"levplat",x:9,topY:19,count:2},{id:"ts1",x:12,topY:20.5},{id:"cp2plat",x:14,topY:22,count:2},{id:"spplat2",x:17,topY:23.5,count:2},{id:"ledge2",x:19,topY:29,count:3},{id:"u5",x:23,topY:30.5,count:2},{id:"balc2",x:2,topY:32,count:5},{id:"u6",x:8,topY:33.5,count:2},{id:"cs2",x:11,topY:35},{id:"cp3plat",x:13,topY:36.5,count:2},{id:"u7",x:16,topY:38,count:2},{id:"spplat3",x:19,topY:39.5,count:2},{id:"ledge3",x:21,topY:45,count:3},{id:"cp4plat",x:1,topY:46.5,count:2},{id:"summit",x:4,topY:48,count:4}],ES=[],TS=[{id:"g1",x:4.5,y:2.3},{id:"g2",x:9.5,y:9.3},{id:"g3",x:10.5,y:9.3},{id:"g4",x:11.5,y:9.3},{id:"g5",x:13.5,y:10.8},{id:"g6",x:16.5,y:12.3},{id:"g7",x:21.5,y:15.3},{id:"g8",x:6.5,y:18.3},{id:"g9",x:9.5,y:19.8},{id:"g10",x:19.5,y:29.8},{id:"g11",x:20.5,y:29.8},{id:"g12",x:23.5,y:31.3},{id:"g13",x:8.5,y:34.3},{id:"g14",x:13.5,y:37.3},{id:"g15",x:16.5,y:38.8},{id:"g16",x:21.5,y:45.8},{id:"g17",x:22.5,y:45.8},{id:"g18",x:1.5,y:47.3},{id:"g19",x:.5,y:.8}],wS=[{id:"sp1",x:7,topY:3,bounceForce:18.5},{id:"sp2",x:17,topY:23.5,bounceForce:18.5},{id:"sp3",x:19,topY:39.5,bounceForce:18.5}],AS=[{id:"en1",xCenter:2,y:16.55,behavior:"patrol",amplitude:.5,speed:1.5},{id:"en2",xCenter:4,y:32.55,behavior:"patrol",amplitude:.5,speed:1.8}],CS=[{id:1,name:"Podest Sprężyny",floor:10,x:14,y:10},{id:2,name:"Rygiel Środkowy",floor:22,x:15,y:22},{id:3,name:"Wysoka Półka",floor:36,x:14,y:36.5},{id:4,name:"Próg Szczytu",floor:46,x:2,y:46.5}],RS=[{id:"cs1",x:19,topY:13},{id:"cs2",x:11,topY:35}],LS=[{id:"lever1",x:10,topY:20}],DS=[{id:"ts1",x:12,topY:20.5,leverId:"lever1"}],NS=[{id:"dcut1",pairId:"skip",x:3,topY:16},{id:"dcut2",pairId:"skip",x:5,topY:32}],XR={schemaVersion:xS,id:_S,name:vS,towerHeight:yS,circumferenceSteps:SS,start:MS,stairs:bS,elevators:ES,gems:TS,springs:wS,enemies:AS,checkpoints:CS,collapsingStairs:RS,levers:LS,togglableStairs:DS,doors:NS},WR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:CS,circumferenceSteps:SS,collapsingStairs:RS,default:XR,doors:NS,elevators:ES,enemies:AS,gems:TS,id:_S,levers:LS,name:vS,schemaVersion:xS,springs:wS,stairs:bS,start:MS,togglableStairs:DS,towerHeight:yS},Symbol.toStringTag,{value:"Module"})),Mv=Object.assign({"./lvl_0001.level.json":tR,"./lvl_0002.level.json":OR,"./lvl_0003.level.json":IR,"./lvl_0004.level.json":BR,"./lvl_0005.level.json":HR,"./lvl_0006.level.json":kR,"./lvl_0007.level.json":YR,"./lvl_0008.level.json":WR}),ma=Object.keys(Mv).sort().map(r=>w1(Mv[r].default)),ga=ma.length;function bv(r){for(let e=0;e<ma.length;e++)if(!r.completedLevels.includes(e+1))return e;return ma.length-1}const US="glower-tower-progress-v5";function Ev(){return ga}function jh(){return{completedLevels:[],unlockedLevel:1,bestScores:{}}}function mo(){try{const r=localStorage.getItem(US);if(!r)return jh();const e=JSON.parse(r);if(!Array.isArray(e.completedLevels)||typeof e.unlockedLevel!="number")return jh();const n=Math.max(1,Math.min(e.unlockedLevel,Ev()+1));return{completedLevels:e.completedLevels.filter(a=>a>=1&&a<=Ev()),unlockedLevel:n,bestScores:e.bestScores??{}}}catch{return jh()}}function qR(r){try{localStorage.setItem(US,JSON.stringify(r))}catch{}}function jR(r,e,n,a,o){const c=mo(),u=new Set(c.completedLevels);u.add(r);const d=u.size>0?Math.max(...Array.from(u)):0,m=Math.min(o,d+1),p={...c.bestScores},_=String(r),v=p[_];(!v||e&&(n<v.jumps||a<v.timeSec))&&(p[_]={jumps:n,timeSec:a});const g={completedLevels:Array.from(u).sort((M,x)=>M-x),unlockedLevel:m,bestScores:p};return qR(g),g}function OS(r,e){return r===1?!0:e.completedLevels.includes(r-1)}const ZR={pl:{appName:"Glut Żelek",appSubtitle:"Wieża",pageTitle:"Glut Żelek: Wieża",menuPlay:"GRAJ",menuPlayAria:"Graj",menuCredits:"DEMO",unmute:"Włącz dźwięk",mute:"Wycisz dźwięk",settings:"Ustawienia",help:"Instrukcja",fullscreen:"Pełny ekran",langPl:"Polski",langEn:"Angielski",selectLevel:"Wybierz Poziom",backToMenu:"Powrót do menu",selectHint:"Ukończone i następny są dostępne.",completed:"Ukończono:",upTo:"Do:",bestJumps:"sk",levelNew:"nowy",levelPlay:"graj",hudTower:"Wieża",hudFloor:"Piętro",restartLevel:"Zrestartuj poziom (R)",clearedTitle:r=>`POZIOM ${r} ZALICZONY!`,clearedDesc:r=>`Pokonałeś ${r} pięter i zebrałeś wszystkie klejnoty!`,doneTitle:r=>`POZIOM ${r} UKOŃCZONY`,doneBut:"ale nie zaliczony!",gemsHint:(r,e)=>`Zbierz wszystkie klejnoty (${r}/${e}), żeby odblokować następny poziom.`,scoreLabel:"Wynik:",ptsSuffix:"pkt",gemsLabel:"Klejnoty:",jumpsLabel:"Skoki:",timeLabel:"Czas:",secondsSuffix:"s",nextLevel:r=>`NASTĘPNY POZIOM (${r})`,restart:"RESTART",menu:"MENU",playAgain:"ZAGRAJ PONOWNIE",gameOver:"KONIEC GRY",gameOverDesc:"Wpadłeś do wody bez punktu kontrolnego.",floorLabel:"Piętro:",pointsLabel:"Punkty:",tryAgain:"SPRÓBUJ PONOWNIE",completedBadge:"Gra ukończona",congrats:"GRATULACJE!",congratsDesc:r=>`Ukończyłeś wszystkie ${r} poziomy wieży pełnej przygód!`,restartGame:"RESTART GRY",backToMenuCaps:"POWRÓT DO MENU",loadingTower:r=>`Wieża ${r}`,loadingGems:r=>`Zbierz ${r} klejnotów`,loadingText:"Wczytuje...",helpTitle:"INSTRUKCJA",helpIntro:(r,e)=>`Wspinaj się po spiralnej wieży, zbieraj klejnoty aby móc odkrywać następne poziomy. Pełne dynamicznych plansz i łamigłówek. Glut Żelek jest bardzo leniwy, liczy na to, że dotrzesz na szczyt wieży niewiele się męcząc. Żelek lubi schodzić po schodach, jeździć windą i przechodzić przez drzwi teleportacyjne. Nienawidzi skakać! Gra zapamiętuje najlepsze wyniki (ilośc skoków i czas). Każdy poziom liczy ${r} pięter. Łącznie ${e} poziomów.`,elementsTitle:"ELEMENTY WIEŻY:",elElevators:"Windy: pionowe, o różnej prędkości",elSprings:"Sprężyny: wyrzut w górę",elGems:"Klejnoty: zbieraj wszystkie",elCheckpoints:"Checkpointy: zapis postępu",elDoors:"Drzwi: teleport, stań i ↓ / S",elTimer:"Zegar: start przy pierwszym ruchu",elCollapsing:"Zapadnie: czerwona krawędź, po wejściu chowają się",elLevers:"Dzwignie: przełącznik z kulką, ↓ / S wysuwa/chowa schodek",elBalls:"Piłki: metalowe kule, unikaj",controlsTitle:"STEROWANIE:",ctrlMove:"← / → lub A / D – ruch",ctrlJump:"↑ lub Spacja – skok",ctrlInteract:"↓ lub S – drzwi / dzwignia",ctrlRestart:"R – restart",understand:"ROZUMIEM",settingsTitle:"USTAWIENIA",render:"Render",renderFast:"640px (szybciej)",renderSharp:"1280px (ostrzej)",imageFilter:"Filtr obrazu",filterPixelated:"Pikselowy",filterSmooth:"Gładki",filterCrt:"CRT",sound:"Dźwięk",muted:"Wyciszony",soundOn:"Dźwięk włączony",soundMutedHint:"Gra startuje wyciszona. Włącz dźwięk, aby zezwolić przeglądarce na odtwarzanie.",soundFx:"Efekty",soundMusic:"Muzyka",soundFxHint:"skoki, lądowania, diamenty",soundMusicHint:"melodie menu i gry",close:"ZAMKNIJ",touchLeft:"W lewo",touchRight:"W prawo",touchDoor:"Wejdź przez drzwi",touchJump:"Skok",iosTitle:"Pełny ekran na iPhone",iosDesc:"iOS blokuje Fullscreen API w kartach przeglądarki. Jedyne wyjście to instalacja gry jako aplikacji z ekranu startowego.",iosStep1a:"Naciśnij",iosShare:"Udostępnij",iosStep1b:"— ikonę kwadratu ze strzałką w górę, w dolnym pasku Safari.",iosStep2a:"Przewiń w dół i dotknij",iosAddToHome:"Dodaj do ekranu startowego",iosStep3a:"Otwórz",iosStep3b:"z ekranu startowego.",iosFirefox:"Firefox: naciśnij ⋯ → Dodaj do ekranu startowego."},en:{appName:"Jelly Slime",appSubtitle:"The Tower",pageTitle:"Jelly Slime: The Tower",menuPlay:"PLAY",menuPlayAria:"Play",menuCredits:"DEMO",unmute:"Unmute",mute:"Mute",settings:"Settings",help:"Help",fullscreen:"Fullscreen",langPl:"Polish",langEn:"English",selectLevel:"Select Level",backToMenu:"Back to menu",selectHint:"Completed levels and the next one are available.",completed:"Completed:",upTo:"Up to:",bestJumps:"jumps",levelNew:"new",levelPlay:"play",hudTower:"Tower",hudFloor:"Floor",restartLevel:"Restart level (R)",clearedTitle:r=>`LEVEL ${r} CLEARED!`,clearedDesc:r=>`You conquered ${r} floors and collected all the gems!`,doneTitle:r=>`LEVEL ${r} COMPLETED`,doneBut:"but not cleared!",gemsHint:(r,e)=>`Collect all the gems (${r}/${e}) to unlock the next level.`,scoreLabel:"Score:",ptsSuffix:"pts",gemsLabel:"Gems:",jumpsLabel:"Jumps:",timeLabel:"Time:",secondsSuffix:"s",nextLevel:r=>`NEXT LEVEL (${r})`,restart:"RESTART",menu:"MENU",playAgain:"PLAY AGAIN",gameOver:"GAME OVER",gameOverDesc:"You fell into the water without passing a checkpoint.",floorLabel:"Floor:",pointsLabel:"Points:",tryAgain:"TRY AGAIN",completedBadge:"Game completed",congrats:"CONGRATULATIONS!",congratsDesc:r=>`You have completed all ${r} levels of a tower full of adventures!`,restartGame:"RESTART GAME",backToMenuCaps:"BACK TO MENU",loadingTower:r=>`Tower ${r}`,loadingGems:r=>`Collect ${r} gems`,loadingText:"Loading...",helpTitle:"INSTRUCTIONS",helpIntro:(r,e)=>`Climb the spiral tower and collect gems to unlock the next levels. Full of dynamic elements and puzzles. Jelly Slime is very lazy and is counting on you to reach the top of the tower with minimal effort. Jelly likes to walk down stairs, ride the elevator, and go through teleportation doors. He hates jumping! The game saves your best scores (number of jumps and time). Each level has ${r} floors. There are ${e} levels in total.

Translated with DeepL.com (free version)`,elementsTitle:"TOWER ELEMENTS:",elElevators:"Elevators: vertical",elSprings:"Springs: launch you up",elGems:"Gems: collect them all",elCheckpoints:"Checkpoints: save progress",elDoors:"Doors: teleport, stand on them and press ↓ / S",elTimer:"Timer: starts with your first move",elCollapsing:"Collapsing stairs: red edge, retract after you step on them",elLevers:"Levers: switch with a ball, ↓ / S shows/hides a stair",elBalls:"Balls: iron spheres, avoid them",controlsTitle:"CONTROLS:",ctrlMove:"← / → or A / D – move",ctrlJump:"↑ or Space – jump",ctrlInteract:"↓ or S – doors / lever",ctrlRestart:"R – restart",understand:"GOT IT",settingsTitle:"SETTINGS",render:"Render",renderFast:"640px (faster)",renderSharp:"1280px (sharper)",imageFilter:"Image filter",filterPixelated:"Pixelated",filterSmooth:"Smooth",filterCrt:"CRT",sound:"Sound",muted:"Muted",soundOn:"Sound on",soundMutedHint:"The game starts muted. Turn sound on to allow your browser to play audio.",soundFx:"Effects",soundMusic:"Music",soundFxHint:"jumps, landings, gems",soundMusicHint:"menu & game tunes",close:"CLOSE",touchLeft:"Left",touchRight:"Right",touchDoor:"Enter door",touchJump:"Jump",iosTitle:"Fullscreen on iPhone",iosDesc:"iOS blocks the Fullscreen API in browser tabs. The only way around it is to install the game as an app from the home screen.",iosStep1a:"Tap",iosShare:"Share",iosStep1b:"— the square icon with the arrow pointing up, in the Safari bottom bar.",iosStep2a:"Scroll down and tap",iosAddToHome:"Add to Home Screen",iosStep3a:"Open",iosStep3b:"from your home screen.",iosFirefox:"Firefox: press ⋯ → Add to Home Screen."}},PS="jelly-lang";function KR(){try{return localStorage.getItem(PS)==="en"?"en":"pl"}catch{return"pl"}}function QR(r){try{localStorage.setItem(PS,r)}catch{}}const IS=(...r)=>r.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();const JR=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const $R=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase());const Tv=r=>{const e=$R(r);return e.charAt(0).toUpperCase()+e.slice(1)};var Zh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const e5=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},t5=dt.createContext({}),n5=()=>dt.useContext(t5),i5=dt.forwardRef(({color:r,size:e,strokeWidth:n,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...d},m)=>{const{size:p=24,strokeWidth:_=2,absoluteStrokeWidth:v=!1,color:g="currentColor",className:M=""}=n5()??{},x=a??v?Number(n??_)*24/Number(e??p):n??_;return dt.createElement("svg",{ref:m,...Zh,width:e??p??Zh.width,height:e??p??Zh.height,stroke:r??g,strokeWidth:x,className:IS("lucide",M,o),...!c&&!e5(d)&&{"aria-hidden":"true"},...d},[...u.map(([A,y])=>dt.createElement(A,y)),...Array.isArray(c)?c:[c]])});const cn=(r,e)=>{const n=dt.forwardRef(({className:a,...o},c)=>dt.createElement(i5,{ref:c,iconNode:e,className:IS(`lucide-${JR(Tv(r))}`,`lucide-${r}`,a),...o}));return n.displayName=Tv(r),n};const a5=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],s5=cn("arrow-down",a5);const r5=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],o5=cn("arrow-left",r5);const l5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],FS=cn("arrow-right",l5);const c5=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],u5=cn("arrow-up",c5);const f5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],d5=cn("circle-check",f5);const h5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],p5=cn("circle-question-mark",h5);const m5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],g5=cn("clock",m5);const x5=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],_5=cn("cpu",x5);const v5=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],y5=cn("crown",v5);const S5=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],Sm=cn("diamond",S5);const M5=[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]],b5=cn("drum",M5);const E5=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Qu=cn("house",E5);const T5=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],BS=cn("lock",T5);const w5=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],A5=cn("maximize-2",w5);const C5=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],R5=cn("music",C5);const L5=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],D5=cn("play",L5);const N5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ju=cn("rotate-ccw",N5);const U5=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],O5=cn("settings",U5);const P5=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],I5=cn("share-2",P5);const F5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],zS=cn("shield-alert",F5);const B5=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],z5=cn("smartphone",B5);const H5=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mm=cn("sparkles",H5);const G5=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],HS=cn("trophy",G5);const k5=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],qp=cn("volume-2",k5);const V5=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],GS=cn("volume-x",V5);const Y5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kS=cn("x",Y5);const X5=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],VS=cn("zap",X5),Kh=({onChange:r,className:e,ariaLabel:n,children:a})=>I.jsx("button",{onTouchStart:o=>{o.preventDefault(),r(!0)},onTouchEnd:o=>{o.preventDefault(),r(!1)},onMouseDown:()=>r(!0),onMouseUp:()=>r(!1),className:e,"aria-label":n,children:a}),W5=({onTap:r,className:e,ariaLabel:n,children:a})=>I.jsx("button",{onTouchStart:o=>{o.preventDefault(),r()},onClick:r,className:e,"aria-label":n,children:a}),wv="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/20 bg-slate-900/80 text-white shadow-xl backdrop-blur-md active:scale-95 active:bg-cyan-600/80",q5="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-cyan-400/40 bg-cyan-700/80 text-white shadow-xl backdrop-blur-md active:scale-95 active:bg-cyan-500",j5="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-400/40 bg-emerald-600/80 text-white shadow-2xl backdrop-blur-md active:scale-95 active:bg-emerald-500",Z5=({t:r,onMoveLeft:e,onMoveRight:n,onJump:a,onDoor:o})=>I.jsxs("div",{className:"touch-controls pointer-events-none fixed inset-x-0 bottom-6 z-30 flex items-center justify-between px-6 select-none [@media(pointer:fine)]:hidden",children:[I.jsxs("div",{className:"pointer-events-auto flex items-center gap-3",children:[I.jsx(Kh,{onChange:e,className:wv,ariaLabel:r.touchLeft,children:I.jsx(o5,{className:"h-7 w-7"})}),I.jsx(Kh,{onChange:n,className:wv,ariaLabel:r.touchRight,children:I.jsx(FS,{className:"h-7 w-7"})})]}),I.jsxs("div",{className:"pointer-events-auto flex items-center gap-3",children:[I.jsx(W5,{onTap:o,className:q5,ariaLabel:r.touchDoor,children:I.jsx(s5,{className:"h-7 w-7"})}),I.jsx(Kh,{onChange:a,className:j5,ariaLabel:r.touchJump,children:I.jsx(u5,{className:"h-8 w-8"})})]})]}),go="flex h-8 w-8 items-center justify-center rounded-lg bg-black/70 shadow-lg transition-transform hover:scale-105 active:scale-95 sm:h-10 sm:w-10 [@media(max-height:500px)]:h-7 [@media(max-height:500px)]:w-7",YS="font-freckle fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm [@media(max-height:500px)]:p-2",K5="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200 [@media(max-height:500px)]:p-2",Q5="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] to-[#052e1a] p-6 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",J5="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] to-[#052e1a] p-7 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",$5="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",eL="font-arial relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 text-sky-100 shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",tL="font-arial relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 text-sky-100 shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",Av="flex items-center justify-center gap-1.5 rounded-xl bg-amber-600 py-2.5 text-2sm tracking-wide text-sky-100 hover:bg-amber-500",XS="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3 text-base tracking-wide text-[#052e1a] shadow-lg hover:bg-emerald-300",WS="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-2sm tracking-wide text-sky-100 hover:bg-amber-500",Qh=({active:r,onClick:e,align:n="left",children:a})=>I.jsx("button",{onClick:e,className:`rounded-2xl p-4 text-${n} ${r?"bg-emerald-400 text-[#052e1a]":"bg-sky-900/60 text-sky-100"}`,children:a}),Cv=({icon:r,label:e,hint:n,enabled:a,onClick:o})=>I.jsxs("button",{onClick:o,role:"switch","aria-checked":a,className:`flex items-center justify-between gap-2 rounded-2xl px-3.5 py-3 text-left ${a?"bg-emerald-400 text-[#052e1a]":"bg-sky-900/60 text-sky-100"}`,children:[I.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[I.jsx("span",{className:a?"text-[#052e1a]":"text-sky-300",children:r}),I.jsxs("div",{className:"min-w-0",children:[I.jsx("div",{className:"text-base tracking-wide",children:e}),I.jsx("div",{className:"truncate text-xs opacity-75",children:n})]})]}),I.jsx("span",{className:`shrink-0 rounded-full px-2.5 py-0.5 text-xs tracking-wide ${a?"bg-[#052e1a]/15 text-[#052e1a]":"bg-rose-400 text-white"}`,children:a?"ON":"OFF"})]}),nL=({t:r,config:e,onConfigChange:n,isOpen:a,onClose:o})=>{if(!a)return null;const c=[{id:"crisp",name:r.filterPixelated},{id:"smooth",name:r.filterSmooth},{id:"crt",name:r.filterCrt}];return I.jsx("div",{className:YS,children:I.jsxs("div",{className:tL,children:[I.jsx("button",{onClick:o,className:"absolute right-4 top-4 rounded-lg bg-sky-900/60 p-1.5 text-sky-200 hover:bg-sky-800",children:I.jsx(kS,{className:"h-5 w-5"})}),I.jsxs("div",{className:"flex items-center gap-2.5 tracking-wide text-amber-200 pb-3",children:[I.jsx(VS,{className:"h-6 w-6 text-amber-300"}),I.jsx("h2",{className:"text-2xl tracking-wide",children:r.settingsTitle})]}),I.jsxs("div",{className:"mt-4 space-y-5 text-base tracking-wide",children:[I.jsxs("div",{children:[I.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[I.jsx(_5,{className:"h-5 w-5 text-sky-300"}),r.render]}),I.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I.jsxs(Qh,{active:e.renderScale===1,onClick:()=>n({renderScale:1}),children:[I.jsx("div",{className:"text-base",children:"x1"}),I.jsx("div",{className:"text-sm opacity-80",children:r.renderFast})]}),I.jsxs(Qh,{active:e.renderScale===2,onClick:()=>n({renderScale:2}),children:[I.jsx("div",{className:"text-base",children:"x2"}),I.jsx("div",{className:"text-sm opacity-80",children:r.renderSharp})]})]})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[I.jsx(Mm,{className:"h-5 w-5 text-amber-300"}),r.imageFilter]}),I.jsx("div",{className:"grid grid-cols-3 gap-2",children:c.map(u=>I.jsx(Qh,{active:e.filterMode===u.id,onClick:()=>n({filterMode:u.id}),align:"center",children:I.jsx("div",{className:"text-base tracking-wide",children:u.name})},u.id))})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[I.jsx(qp,{className:"h-5 w-5 text-emerald-300"}),r.sound]}),I.jsxs("button",{onClick:()=>n(u=>({soundMuted:!u.soundMuted})),"aria-pressed":!e.soundMuted,className:"flex w-full items-center justify-between rounded-2xl bg-sky-900/60 px-4 py-3 text-sky-100",children:[I.jsxs("div",{className:"flex items-center gap-2.5",children:[e.soundMuted?I.jsx(GS,{className:"h-6 w-6 text-rose-300"}):I.jsx(qp,{className:"h-6 w-6 text-emerald-300"}),I.jsx("span",{className:"tracking-wide text-base",children:e.soundMuted?r.muted:r.soundOn})]}),I.jsx("span",{className:`rounded-full px-3 py-1 text-sm tracking-wide ${e.soundMuted?"bg-rose-400 text-white":"bg-emerald-400 text-[#052e1a]"}`,children:e.soundMuted?"OFF":"ON"})]}),e.soundMuted&&I.jsx("p",{className:"mt-1.5 px-1 text-xs leading-snug tracking-wide text-sky-300/80",children:r.soundMutedHint}),I.jsxs("div",{className:`mt-2 grid grid-cols-2 gap-2 transition-opacity ${e.soundMuted?"opacity-60":""}`,children:[I.jsx(Cv,{icon:I.jsx(b5,{className:"h-5 w-5"}),label:r.soundFx,hint:r.soundFxHint,enabled:e.sfxEnabled,onClick:()=>n(u=>({sfxEnabled:!u.sfxEnabled}))}),I.jsx(Cv,{icon:I.jsx(R5,{className:"h-5 w-5"}),label:r.soundMusic,hint:r.soundMusicHint,enabled:e.musicEnabled,onClick:()=>n(u=>({musicEnabled:!u.musicEnabled}))})]})]})]}),I.jsx("div",{className:"mt-5 flex justify-end",children:I.jsxs("button",{onClick:o,className:"font-case flex items-center gap-1.5 rounded-xl bg-emerald-400 px-5 py-2.5 text-base tracking-wide text-[#052e1a] hover:bg-emerald-300",children:[I.jsx(d5,{className:"h-5 w-5"}),r.close]})})]})})};var bm={};(function r(e,n,a,o){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var G=new OffscreenCanvas(1,1),E=G.getContext("2d");E.fillRect(0,0,1,1);var H=G.transferToImageBitmap();E.createPattern(H,"no-repeat")}catch{return!1}return!0})();function m(){}function p(G){var E=n.exports.Promise,H=E!==void 0?E:e.Promise;return typeof H=="function"?new H(G):(G(m,m),null)}var _=(function(G,E){return{transform:function(H){if(G)return H;if(E.has(H))return E.get(H);var ie=new OffscreenCanvas(H.width,H.height),xe=ie.getContext("2d");return xe.drawImage(H,0,0),E.set(H,ie),ie},clear:function(){E.clear()}}})(d,new Map),v=(function(){var G=Math.floor(16.666666666666668),E,H,ie={},xe=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(Ee){var K=Math.random();return ie[K]=requestAnimationFrame(function se(me){xe===me||xe+G-1<me?(xe=me,delete ie[K],Ee()):ie[K]=requestAnimationFrame(se)}),K},H=function(Ee){ie[Ee]&&cancelAnimationFrame(ie[Ee])}):(E=function(Ee){return setTimeout(Ee,G)},H=function(Ee){return clearTimeout(Ee)}),{frame:E,cancel:H}})(),g=(function(){var G,E,H={};function ie(xe){function Ee(K,se){xe.postMessage({options:K||{},callback:se})}xe.init=function(se){var me=se.transferControlToOffscreen();xe.postMessage({canvas:me},[me])},xe.fire=function(se,me,Ce){if(E)return Ee(se,null),E;var ke=Math.random().toString(36).slice(2);return E=p(function(Ne){function ut(nt){nt.data.callback===ke&&(delete H[ke],xe.removeEventListener("message",ut),E=null,_.clear(),Ce(),Ne())}xe.addEventListener("message",ut),Ee(se,ke),H[ke]=ut.bind(null,{data:{callback:ke}})}),E},xe.reset=function(){xe.postMessage({reset:!0});for(var se in H)H[se](),delete H[se]}}return function(){if(G)return G;if(!a&&c){var xe=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{G=new Worker(URL.createObjectURL(new Blob([xe])))}catch(Ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Ee),null}ie(G)}return G}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(G,E){return E?E(G):G}function A(G){return G!=null}function y(G,E,H){return x(G&&A(G[E])?G[E]:M[E],H)}function S(G){return G<0?0:Math.floor(G)}function R(G,E){return Math.floor(Math.random()*(E-G))+G}function U(G){return parseInt(G,16)}function C(G){return G.map(P)}function P(G){var E=String(G).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:U(E.substring(0,2)),g:U(E.substring(2,4)),b:U(E.substring(4,6))}}function N(G){var E=y(G,"origin",Object);return E.x=y(E,"x",Number),E.y=y(E,"y",Number),E}function F(G){G.width=document.documentElement.clientWidth,G.height=document.documentElement.clientHeight}function T(G){var E=G.getBoundingClientRect();G.width=E.width,G.height=E.height}function O(G){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=G,E}function Y(G,E,H,ie,xe,Ee,K,se,me){G.save(),G.translate(E,H),G.rotate(Ee),G.scale(ie,xe),G.arc(0,0,1,K,se,me),G.restore()}function V(G){var E=G.angle*(Math.PI/180),H=G.spread*(Math.PI/180);return{x:G.x,y:G.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:G.startVelocity*.5+Math.random()*G.startVelocity,angle2D:-E+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:G.color,shape:G.shape,tick:0,totalTicks:G.ticks,decay:G.decay,drift:G.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:G.gravity*3,ovalScalar:.6,scalar:G.scalar,flat:G.flat}}function X(G,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var H=E.tick++/E.totalTicks,ie=E.x+E.random*E.tiltCos,xe=E.y+E.random*E.tiltSin,Ee=E.wobbleX+E.random*E.tiltCos,K=E.wobbleY+E.random*E.tiltSin;if(G.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-H)+")",G.beginPath(),u&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))G.fill(q(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(Ee-ie)*.1,Math.abs(K-xe)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var se=Math.PI/10*E.wobble,me=Math.abs(Ee-ie)*.1,Ce=Math.abs(K-xe)*.1,ke=E.shape.bitmap.width*E.scalar,Ne=E.shape.bitmap.height*E.scalar,ut=new DOMMatrix([Math.cos(se)*me,Math.sin(se)*me,-Math.sin(se)*Ce,Math.cos(se)*Ce,E.x,E.y]);ut.multiplySelf(new DOMMatrix(E.shape.matrix));var nt=G.createPattern(_.transform(E.shape.bitmap),"no-repeat");nt.setTransform(ut),G.globalAlpha=1-H,G.fillStyle=nt,G.fillRect(E.x-ke/2,E.y-Ne/2,ke,Ne),G.globalAlpha=1}else if(E.shape==="circle")G.ellipse?G.ellipse(E.x,E.y,Math.abs(Ee-ie)*E.ovalScalar,Math.abs(K-xe)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):Y(G,E.x,E.y,Math.abs(Ee-ie)*E.ovalScalar,Math.abs(K-xe)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var Ve=Math.PI/2*3,lt=4*E.scalar,we=8*E.scalar,Ye=E.x,Qe=E.y,qe=5,Lt=Math.PI/qe;qe--;)Ye=E.x+Math.cos(Ve)*we,Qe=E.y+Math.sin(Ve)*we,G.lineTo(Ye,Qe),Ve+=Lt,Ye=E.x+Math.cos(Ve)*lt,Qe=E.y+Math.sin(Ve)*lt,G.lineTo(Ye,Qe),Ve+=Lt;else G.moveTo(Math.floor(E.x),Math.floor(E.y)),G.lineTo(Math.floor(E.wobbleX),Math.floor(xe)),G.lineTo(Math.floor(Ee),Math.floor(K)),G.lineTo(Math.floor(ie),Math.floor(E.wobbleY));return G.closePath(),G.fill(),E.tick<E.totalTicks}function le(G,E,H,ie,xe){var Ee=E.slice(),K=G.getContext("2d"),se,me,Ce=p(function(ke){function Ne(){se=me=null,K.clearRect(0,0,ie.width,ie.height),_.clear(),xe(),ke()}function ut(){a&&!(ie.width===o.width&&ie.height===o.height)&&(ie.width=G.width=o.width,ie.height=G.height=o.height),!ie.width&&!ie.height&&(H(G),ie.width=G.width,ie.height=G.height),K.clearRect(0,0,ie.width,ie.height),Ee=Ee.filter(function(nt){return X(K,nt)}),Ee.length?se=v.frame(ut):Ne()}se=v.frame(ut),me=Ne});return{addFettis:function(ke){return Ee=Ee.concat(ke),Ce},canvas:G,promise:Ce,reset:function(){se&&v.cancel(se),me&&me()}}}function ae(G,E){var H=!G,ie=!!y(E||{},"resize"),xe=!1,Ee=y(E,"disableForReducedMotion",Boolean),K=c&&!!y(E||{},"useWorker"),se=K?g():null,me=H?F:T,Ce=G&&se?!!G.__confetti_initialized:!1,ke=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ne;function ut(Ve,lt,we){for(var Ye=y(Ve,"particleCount",S),Qe=y(Ve,"angle",Number),qe=y(Ve,"spread",Number),Lt=y(Ve,"startVelocity",Number),Nt=y(Ve,"decay",Number),nn=y(Ve,"gravity",Number),J=y(Ve,"drift",Number),Ht=y(Ve,"colors",C),Ut=y(Ve,"ticks",Number),z=y(Ve,"shapes"),w=y(Ve,"scalar"),ne=!!y(Ve,"flat"),de=N(Ve),_e=Ye,Re=[],Oe=G.width*de.x,ve=G.height*de.y;_e--;)Re.push(V({x:Oe,y:ve,angle:Qe,spread:qe,startVelocity:Lt,color:Ht[_e%Ht.length],shape:z[R(0,z.length)],ticks:Ut,decay:Nt,gravity:nn,drift:J,scalar:w,flat:ne}));return Ne?Ne.addFettis(Re):(Ne=le(G,Re,me,lt,we),Ne.promise)}function nt(Ve){var lt=Ee||y(Ve,"disableForReducedMotion",Boolean),we=y(Ve,"zIndex",Number);if(lt&&ke)return p(function(Lt){Lt()});H&&Ne?G=Ne.canvas:H&&!G&&(G=O(we),document.body.appendChild(G)),ie&&!Ce&&me(G);var Ye={width:G.width,height:G.height};se&&!Ce&&se.init(G),Ce=!0,se&&(G.__confetti_initialized=!0);function Qe(){if(se){var Lt={getBoundingClientRect:function(){if(!H)return G.getBoundingClientRect()}};me(Lt),se.postMessage({resize:{width:Lt.width,height:Lt.height}});return}Ye.width=Ye.height=null}function qe(){Ne=null,ie&&(xe=!1,e.removeEventListener("resize",Qe)),H&&G&&(document.body.contains(G)&&document.body.removeChild(G),G=null,Ce=!1)}return ie&&!xe&&(xe=!0,e.addEventListener("resize",Qe,!1)),se?se.fire(Ve,Ye,qe):ut(Ve,Ye,qe)}return nt.reset=function(){se&&se.reset(),Ne&&Ne.reset()},nt}var Q;function B(){return Q||(Q=ae(null,{useWorker:!0,resize:!0})),Q}function q(G,E,H,ie,xe,Ee,K){var se=new Path2D(G),me=new Path2D;me.addPath(se,new DOMMatrix(E));var Ce=new Path2D;return Ce.addPath(me,new DOMMatrix([Math.cos(K)*xe,Math.sin(K)*xe,-Math.sin(K)*Ee,Math.cos(K)*Ee,H,ie])),Ce}function ee(G){if(!u)throw new Error("path confetti are not supported in this browser");var E,H;typeof G=="string"?E=G:(E=G.path,H=G.matrix);var ie=new Path2D(E),xe=document.createElement("canvas"),Ee=xe.getContext("2d");if(!H){for(var K=1e3,se=K,me=K,Ce=0,ke=0,Ne,ut,nt=0;nt<K;nt+=2)for(var Ve=0;Ve<K;Ve+=2)Ee.isPointInPath(ie,nt,Ve,"nonzero")&&(se=Math.min(se,nt),me=Math.min(me,Ve),Ce=Math.max(Ce,nt),ke=Math.max(ke,Ve));Ne=Ce-se,ut=ke-me;var lt=10,we=Math.min(lt/Ne,lt/ut);H=[we,0,0,we,-Math.round(Ne/2+se)*we,-Math.round(ut/2+me)*we]}return{type:"path",path:E,matrix:H}}function re(G){var E,H=1,ie="#000000",xe='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof G=="string"?E=G:(E=G.text,H="scalar"in G?G.scalar:H,xe="fontFamily"in G?G.fontFamily:xe,ie="color"in G?G.color:ie);var Ee=10*H,K=""+Ee+"px "+xe,se=new OffscreenCanvas(Ee,Ee),me=se.getContext("2d");me.font=K;var Ce=me.measureText(E),ke=Math.ceil(Ce.actualBoundingBoxRight+Ce.actualBoundingBoxLeft),Ne=Math.ceil(Ce.actualBoundingBoxAscent+Ce.actualBoundingBoxDescent),ut=2,nt=Ce.actualBoundingBoxLeft+ut,Ve=Ce.actualBoundingBoxAscent+ut;ke+=ut+ut,Ne+=ut+ut,se=new OffscreenCanvas(ke,Ne),me=se.getContext("2d"),me.font=K,me.fillStyle=ie,me.fillText(E,nt,Ve);var lt=1/H;return{type:"bitmap",bitmap:se.transferToImageBitmap(),matrix:[lt,0,0,lt,-ke*lt/2,-Ne*lt/2]}}n.exports=function(){return B().apply(this,arguments)},n.exports.reset=function(){B().reset()},n.exports.create=ae,n.exports.shapeFromPath=ee,n.exports.shapeFromText=re})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),bm,!1);const yo=bm.exports;bm.exports.create;const iL=()=>{yo({particleCount:120,spread:70,origin:{y:.6}});const r=setTimeout(()=>{yo({particleCount:80,angle:60,spread:55,origin:{x:0}}),yo({particleCount:80,angle:120,spread:55,origin:{x:1}})},400);return()=>clearTimeout(r)},aL=()=>{yo({particleCount:160,spread:100,origin:{y:.6}});const r=[setTimeout(()=>yo({particleCount:100,angle:60,spread:60,origin:{x:0}}),300),setTimeout(()=>yo({particleCount:100,angle:120,spread:60,origin:{x:1}}),500)];return()=>r.forEach(clearTimeout)},$u=({children:r,panelClassName:e,animation:n="zoom",light:a=!1})=>{const o=a?K5:YS,c=n==="zoom"?"animate-in zoom-in-95 duration-200":"animate-in fade-in duration-200";return I.jsx("div",{className:`${o} ${c}`,children:I.jsx("div",{className:e,children:r})})},sL=({label:r,value:e,size:n="lg"})=>I.jsxs("div",{className:"p-1",children:[I.jsx("span",{className:"text-sm tracking-wide text-sky-200/70",children:r}),I.jsx("div",{className:n==="lg"?"text-xl":"text-base text-sky-200",children:e})]}),ia=({children:r,className:e=""})=>I.jsx("div",{className:`grid grid-cols-2 gap-2 rounded-2xl bg-sky-900/40 p-3 text-left text-sm ${e}`,children:r});ia.Item=sL;const ef=r=>{const e=Math.floor(r/60),n=Math.floor(r%60).toString().padStart(2,"0");return`${e}:${n}`},rL=({t:r,score:e,gems:n,totalGems:a,jumps:o,timeSec:c,towerHeight:u,levelNumber:d,totalLevels:m,onRestart:p,onBackToMenu:_,onNextLevel:v})=>{const g=n>=a,M=g&&d<m&&!!v;return Rv.useEffect(()=>{if(g)return iL()},[g]),I.jsxs($u,{panelClassName:Q5,children:[I.jsx("div",{className:`mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${g?"bg-amber-400 text-[#052e1a]":"bg-orange-400 text-[#052e1a]"}`,children:g?I.jsx(HS,{className:"h-9 w-9 animate-bounce"}):I.jsx(zS,{className:"h-9 w-9"})}),g?I.jsxs(I.Fragment,{children:[I.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-amber-200",children:r.clearedTitle(d)}),I.jsx("p",{className:"mt-1 text-sm tracking-wide text-sky-200",children:r.clearedDesc(u)})]}):I.jsxs(I.Fragment,{children:[I.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-orange-300",children:r.doneTitle(d)}),I.jsx("p",{className:"mt-1 text-base tracking-wide text-orange-200/90",children:r.doneBut}),I.jsxs("div",{className:"mt-2 flex items-center justify-center gap-2 text-lg tracking-wide text-amber-200",children:[I.jsx(Sm,{className:"h-5 w-5 fill-amber-300"}),r.gemsHint(n,a)]})]}),I.jsxs(ia,{className:"my-4",children:[I.jsx(ia.Item,{label:r.scoreLabel,value:I.jsxs("span",{className:"text-amber-200",children:[e.toLocaleString()," ",r.ptsSuffix]})}),I.jsx(ia.Item,{label:r.gemsLabel,value:I.jsxs("span",{className:g?"text-emerald-300":"text-orange-300",children:[n," / ",a]})}),I.jsx(ia.Item,{label:r.jumpsLabel,value:o,size:"base"}),I.jsx(ia.Item,{label:r.timeLabel,value:`${ef(c)} ${r.secondsSuffix}`,size:"base"})]}),d<m&&v?I.jsxs(I.Fragment,{children:[I.jsxs("button",{onClick:M?v:void 0,disabled:!M,className:`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-2sm tracking-wide shadow-lg transition-all ${M?"bg-emerald-400 text-[#000] hover:bg-emerald-300":"bg-sky-900/30 text-white/30 cursor-not-allowed"}`,children:[M?I.jsx(FS,{className:"h-5 w-5"}):I.jsx(BS,{className:"h-5 w-5"}),r.nextLevel(d+1)]}),I.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[I.jsxs("button",{onClick:p,className:Av,children:[I.jsx(Ju,{className:"h-4 w-4"})," ",r.restart]}),_&&I.jsxs("button",{onClick:_,className:Av,children:[I.jsx(Qu,{className:"h-4 w-4"})," ",r.menu]})]})]}):I.jsxs("button",{onClick:p,className:XS,children:[I.jsx(Mm,{className:"h-5 w-5"})," ",r.playAgain]})]})},oL=({t:r,score:e,level:n,towerHeight:a,onRestart:o,onBackToMenu:c})=>I.jsxs($u,{panelClassName:$5,animation:"fade",children:[I.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-700 text-white shadow-lg",children:I.jsx(zS,{className:"h-8 w-8"})}),I.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-rose-700",children:r.gameOver}),I.jsx("p",{className:"mt-1 text-2sm tracking-wide text-sky-200",children:r.gameOverDesc}),I.jsxs("div",{className:"my-4 rounded-2xl bg-sky-900/40 p-3 text-2sm space-y-1",children:[I.jsxs("div",{className:"flex justify-between",children:[I.jsx("span",{className:"tracking-wide text-sky-200/70",children:r.floorLabel}),I.jsxs("span",{className:"tracking-wide text-sky-100",children:[n," / ",a]})]}),I.jsxs("div",{className:"flex justify-between",children:[I.jsx("span",{className:"tracking-wide text-sky-200/70",children:r.pointsLabel}),I.jsx("span",{className:"tracking-wide text-amber-200",children:e})]})]}),I.jsxs("button",{onClick:o,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-base tracking-wide text-white shadow-lg hover:bg-green-400",children:[I.jsx(Ju,{className:"h-5 w-5"})," ",r.tryAgain]}),c&&I.jsx("button",{onClick:c,className:WS,children:r.backToMenu})]}),lL=({t:r,score:e,gems:n,totalGems:a,jumps:o,totalTime:c,levelsCompleted:u,onRestart:d,onBackToMenu:m})=>(Rv.useEffect(()=>aL(),[]),I.jsxs($u,{panelClassName:J5,children:[I.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-[#052e1a] shadow-lg",children:I.jsx(HS,{className:"h-11 w-11 animate-bounce"})}),I.jsxs("div",{className:"mt-2 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-sm tracking-wide text-amber-200",children:[I.jsx(Mm,{className:"h-3 w-3"})," ",r.completedBadge]}),I.jsx("h2",{className:"mt-3 text-3xl tracking-wide text-amber-200",children:r.congrats}),I.jsx("p",{className:"mt-2 text-base tracking-wide text-sky-200",children:r.congratsDesc(u)}),I.jsxs(ia,{className:"my-5",children:[I.jsx(ia.Item,{label:r.scoreLabel,value:I.jsxs("span",{className:"text-amber-200",children:[e.toLocaleString()," ",r.ptsSuffix]})}),I.jsx(ia.Item,{label:r.gemsLabel,value:I.jsxs("span",{className:"text-emerald-300",children:[n," / ",a]})}),I.jsx(ia.Item,{label:r.jumpsLabel,value:o,size:"base"}),I.jsx(ia.Item,{label:r.timeLabel,value:ef(c),size:"base"})]}),I.jsxs("button",{onClick:d,className:XS,children:[I.jsx(Ju,{className:"h-5 w-5"})," ",r.restartGame]}),I.jsxs("button",{onClick:m,className:WS,children:[I.jsx(Qu,{className:"h-4 w-4"})," ",r.backToMenuCaps]})]})),cL=({t:r,visible:e,levelNumber:n,gemsCount:a})=>I.jsx("div",{className:`font-freckle fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] transition-opacity duration-300 ${e?"opacity-100":"opacity-0 pointer-events-none"}`,children:I.jsxs("div",{className:"text-center animate-in zoom-in-95 duration-300",children:[I.jsx("h3",{className:"text-xl tracking-[0.2em] text-[#7fd4e6] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:r.loadingTower(n)}),I.jsx(Sm,{className:"mx-auto h-16 w-16 text-[#d9f99d] animate-spin mb-4 drop-shadow-[0_0_20px_rgba(217,249,157,0.5)] [animation-duration:2.5s] [animation-timing-function:ease-in-out]"}),I.jsx("h2",{className:"text-4xl tracking-wide text-[#d9f99d] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]",children:r.loadingGems(a)}),I.jsx("p",{className:"mt-3 text-sm tracking-[0.15em] text-[#a8c8ea]/60",children:r.loadingText})]})}),uL=({t:r,towerHeight:e,totalLevels:n,onClose:a})=>{const o=[r.elElevators,r.elSprings,r.elGems,r.elCheckpoints,r.elDoors,r.elTimer,r.elCollapsing,r.elLevers,r.elBalls],c=[r.ctrlMove,r.ctrlJump,r.ctrlInteract,r.ctrlRestart];return I.jsxs($u,{panelClassName:eL,animation:"fade",light:!0,children:[I.jsxs("div",{className:"flex items-center gap-2 text-amber-300 pb-2",children:[I.jsx(VS,{className:"h-6 w-6"}),I.jsx("h3",{className:"text-xl tracking-wide",children:r.helpTitle})]}),I.jsxs("div",{className:"space-y-2 tracking-wide text-green-100",children:[I.jsx("p",{className:"text-2sm leading-relaxed",children:r.helpIntro(e,n)}),I.jsxs("div",{className:"rounded-2xl bg-sky-900/40 p-4 space-y-2",children:[I.jsx("div",{className:"font-bold text-amber-200 tracking-wide",children:r.elementsTitle}),I.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2 text-sm",children:o.map((u,d)=>I.jsx("div",{children:I.jsx("strong",{children:u})},d))})]}),I.jsxs("div",{className:"rounded-2xl bg-sky-900/40 p-4",children:[I.jsx("div",{className:"font-bold text-amber-200 tracking-wide mb-1",children:r.controlsTitle}),I.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-sky-100/90",children:c.map((u,d)=>I.jsx("div",{children:u},d))})]})]}),I.jsx("button",{onClick:a,className:"font-case mt-5 w-full rounded-xl bg-emerald-300 py-2.5 text-2sm tracking-wide text-green-900 shadow-lg hover:bg-emerald-400 active:scale-95",children:r.understand})]})},fL=({t:r,onClose:e})=>I.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[70] flex justify-center bg-black/80 backdrop-blur-md sm:inset-0 sm:items-center",children:I.jsxs("div",{className:"relative w-full max-w-md rounded-t-3xl bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] p-5 pb-10 font-freckle text-sky-100 shadow-2xl sm:rounded-3xl sm:pb-6",children:[I.jsxs("div",{className:"pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[#86efac] animate-bounce sm:hidden",children:[I.jsx("div",{className:"h-7 w-0.5 rounded-full bg-[#86efac]/70"}),I.jsx("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"currentColor","aria-hidden":"true",children:I.jsx("path",{d:"M10 11 L0 0 L20 0 Z"})})]}),I.jsx("button",{onClick:e,className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-sky-100","aria-label":r.close,children:I.jsx(kS,{className:"h-5 w-5"})}),I.jsxs("div",{className:"flex items-center gap-3 pr-10",children:[I.jsx(z5,{className:"h-7 w-7 text-[#86efac]"}),I.jsx("h2",{className:"text-2xl text-[#86efac]",children:r.iosTitle})]}),I.jsx("p",{className:"mt-3 text-sm leading-relaxed text-sky-100/80",children:r.iosDesc}),I.jsxs("div",{className:"mt-4 space-y-2",children:[I.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[I.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"1"}),I.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep1a," ",I.jsxs("span",{className:"inline-flex items-center gap-0.5 rounded-md bg-sky-900/60 px-1.5 py-0.5 text-[#86efac]",children:[I.jsx(I5,{className:"h-3.5 w-3.5"})," ",r.iosShare]})," ",r.iosStep1b]})]}),I.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[I.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"2"}),I.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep2a," ",I.jsx("span",{className:"rounded-md bg-sky-900/60 px-1.5 py-0.5 text-amber-200",children:r.iosAddToHome}),"."]})]}),I.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[I.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"3"}),I.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep3a," ",I.jsx("span",{className:"rounded-md bg-sky-900/60 px-1.5 py-0.5 text-[#86efac]",children:r.appName})," ",r.iosStep3b]})]})]}),I.jsx("p",{className:"mt-2 text-xs text-[#a8c8ea]/60",children:r.iosFirefox}),I.jsx("button",{onClick:e,className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#86efac] py-3 text-lg text-[#052e1a] shadow-lg active:scale-95",children:"OK"})]})}),dL=()=>I.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{width:"100%",height:"100%",display:"block"},children:[I.jsx("mask",{id:"pl-c",children:I.jsx("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})}),I.jsxs("g",{mask:"url(#pl-c)",children:[I.jsx("path",{fill:"#eee",d:"M0 0h512v256H0z"}),I.jsx("path",{fill:"#d80027",d:"M0 256h512v256H0z"})]})]}),hL=()=>I.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{width:"100%",height:"100%",display:"block"},children:[I.jsx("mask",{id:"gb-c",children:I.jsx("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})}),I.jsxs("g",{mask:"url(#gb-c)",children:[I.jsx("path",{fill:"#eee",d:"m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"}),I.jsx("path",{fill:"#0052b4",d:"M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"}),I.jsx("path",{fill:"#d80027",d:"M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"})]})]}),pL=[{code:"pl",label:"Polski",Icon:dL},{code:"en",label:"English",Icon:hL}],mL="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-10 sm:w-10 [@media(max-height:500px)]:h-7 [@media(max-height:500px)]:w-7 p-0 bg-transparent overflow-hidden",gL=({lang:r,onChange:e})=>I.jsx(I.Fragment,{children:pL.map(({code:n,label:a,Icon:o})=>I.jsx("button",{onClick:()=>e(n),className:mL,title:a,"aria-label":a,"aria-pressed":r===n,style:{filter:r===n?"grayscale(1)":"none"},children:I.jsx(o,{})},n))}),qS=({t:r,soundMuted:e,onToggleSound:n,onOpenSettings:a,onOpenHelp:o,onFullscreen:c,leadingButtons:u})=>I.jsxs("div",{className:"pointer-events-auto absolute right-1.5 top-1.5 z-10 flex items-center gap-1.5 sm:right-2 sm:top-2 sm:gap-2 [@media(max-height:500px)]:gap-1.5",children:[u,I.jsx("button",{onClick:n,className:go,title:e?r.unmute:r.mute,"aria-label":e?r.unmute:r.mute,children:e?I.jsx(GS,{className:"h-4 w-4 text-rose-400 sm:h-5 sm:w-5"}):I.jsx(qp,{className:"h-4 w-4 text-emerald-400 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:a,className:go,title:r.settings,"aria-label":r.settings,children:I.jsx(O5,{className:"h-4 w-4 text-cyan-300 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:o,className:go,title:r.help,"aria-label":r.help,children:I.jsx(p5,{className:"h-4 w-4 text-amber-300 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:c,className:go,title:r.fullscreen,"aria-label":r.fullscreen,children:I.jsx(A5,{className:"h-4 w-4 text-sky-200 sm:h-5 sm:w-5"})})]}),xL=({t:r,lang:e,onLangChange:n,soundMuted:a,onToggleSound:o,onOpenSettings:c,onOpenHelp:u,onFullscreen:d,onPlay:m})=>I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"pointer-events-none fixed inset-0 z-30 bg-gradient-to-b from-[#050b14]/30 via-[#0b1520]/22 to-[#050b14]/35"}),I.jsxs("div",{className:"pointer-events-none fixed inset-0 z-40 animate-in fade-in duration-500",children:[I.jsx("div",{className:"pointer-events-auto absolute left-1.5 top-1.5 z-10 flex items-center gap-1.5 sm:left-2 sm:top-2 sm:gap-2 [@media(max-height:500px)]:gap-1.5",children:I.jsx(gL,{lang:e,onChange:n})}),I.jsx(qS,{t:r,soundMuted:a,onToggleSound:o,onOpenSettings:c,onOpenHelp:u,onFullscreen:d}),I.jsx("div",{className:"menu-title pointer-events-none absolute inset-x-4 top-[8%] text-center [@media(max-height:500px)]:top-[3.0rem]",children:I.jsxs("h1",{className:"font-freckle leading-[0.85] tracking-wide",children:[I.jsx("span",{className:"block drop-shadow-[0px_0px_8px_rgba(86,250,200,0.9)] text-transparent text-[6rem] bg-clip-text bg-gradient-to-b from-[#a8c8ea] via-[#7fe6b1] to-[#4ade80] sm:text-[11rem] [@media(max-height:500px)]:text-[6rem] [@media(max-width:500px)]:mt-1",children:r.appName}),I.jsx("span",{className:"block mt-1 drop-shadow-[0px_0px_4px_rgba(86,250,200,0.9)] whitespace-nowrap text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#86efac] via-[#4ade80] to-[#0e6e23] sm:text-6xl [@media(max-height:500px)]:text-4xl [@media(max-height:500px)]:mt-1",children:r.appSubtitle})]})}),I.jsxs("div",{className:"pointer-events-auto absolute left-1/2 top-[62%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center [@media(max-height:500px)]:top-[68%]",children:[I.jsx("button",{onClick:m,className:"group relative shadow-[0_0_20px_#FBBF24] flex h-15 w-15 items-center justify-center rounded-full bg-amber-400 text-[#a27c18] transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-24 sm:w-24 [@media(max-height:500px)]:h-12 [@media(max-height:500px)]:w-12","aria-label":r.menuPlayAria,children:I.jsx(D5,{className:"ml-1 h-10 w-10 fill-current transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12 [@media(max-height:500px)]:ml-0.5 [@media(max-height:500px)]:h-6 [@media(max-height:500px)]:w-6"})}),I.jsx("span",{className:"mt-6 font-freckle text-2xl text-shadow-[0_0_20px_#FBBF24] tracking-[0.3em] text-amber-400 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:mt-2 [@media(max-height:500px)]:text-base",children:r.menuPlay})]}),I.jsx("span",{className:"pointer-events-auto  text-2xl absolute bottom-5 left-1/2 -translate-x-1/2 text-center z-index:1000 text-shadow-[0_0_20px_#9aa] text-[#9aa] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:bottom-1 [@media(max-height:500px)]:text-xs",children:I.jsx("a",{href:"https://loleus.github.io",target:"_blank",rel:"noopener noreferrer",className:"display:block hover:cursor-pointer z-index:1000",children:r.menuCredits})})]})]}),_L=({t:r,levelNum:e,progress:n,onSelect:a})=>{const o=OS(e,n),c=n.completedLevels.includes(e),u=e===n.unlockedLevel,d=n.bestScores?.[e],m=o?c?"bg-gradient-to-b from-[#86efac] to-[#56af7c] text-[#0e4a6e] hover:scale-110":u?"bg-gradient-to-b from-[#7fd496] to-amber-400 text-[#0e4a4e] animate-pulse hover:scale-110":"bg-gradient-to-b from-[#0e4a6e]/80 to-[#4ade80]/60 text-[#86efac] hover:scale-110":"bg-[#0e4a6e]/50 text-white/30 cursor-not-allowed";return I.jsxs("button",{disabled:!o,onClick:()=>a(e),className:`group relative aspect-square flex flex-col items-center justify-center rounded-xl font-freckle tracking-wide transition-all shadow-[0_6px_20px_rgba(0,0,0,0.6)] ${m}`,children:[I.jsx("span",{className:"text-base sm:text-4xl leading-none",children:e}),c&&d?I.jsxs("div",{className:"text-xl sm:text-xl leading-snug opacity-90",children:[I.jsxs("div",{children:[d.jumps," ",r.bestJumps]}),I.jsx("div",{children:ef(d.timeSec)})]}):o?I.jsx("div",{className:"mt-1 text-2xl text-[#0e4a4e] uppercase tracking-wider",children:u?r.levelNew:r.levelPlay}):I.jsx("div",{className:"mt-1 text-base flex justify-center",children:I.jsx(BS,{className:"h-7 w-7"})})]})},vL=({t:r,progress:e,onBackToMenu:n,onSelectLevel:a})=>I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"pointer-events-none fixed inset-0 z-30"}),I.jsx("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 overflow-y-auto [@media(max-height:500px)]:p-2",children:I.jsxs("div",{className:"relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-4xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",children:[I.jsxs("div",{className:"flex items-center justify-between mb-5",children:[I.jsx("h2",{className:"font-freckle text-3xl text-[#86efac] drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] tracking-wide",children:r.selectLevel}),I.jsx("button",{onClick:n,className:"flex h-12 w-12 items-center justify-center rounded-full bg-[#0e4a6e]/85 text-white shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-transform backdrop-blur-sm","aria-label":r.backToMenu,title:r.backToMenu,children:I.jsx(Qu,{className:"h-6 w-6 text-[#a8c8ea]"})})]}),I.jsx("p",{className:"font-freckle text-xl text-[#b8d8fa] mb-5 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:r.selectHint}),I.jsx("div",{className:"grid grid-cols-5 gap-3 sm:gap-4",children:ma.map((o,c)=>I.jsx(_L,{t:r,levelNum:c+1,progress:e,onSelect:a},c+1))}),I.jsxs("div",{className:"mt-6 flex items-center justify-between font-freckle text-lg text-[#a8c8ea] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:[I.jsxs("span",{children:[r.completed," ",e.completedLevels.length,"/",ga]}),I.jsxs("span",{children:[r.upTo," ",Math.min(e.unlockedLevel,ga)]})]})]})})]}),Jh=({icon:r,color:e,children:n})=>I.jsxs("div",{className:`flex items-center gap-3 text-4xl tracking-wide ${e} [@media(max-height:500px)]:gap-1.5 [@media(max-height:500px)]:text-base sm:text-3xl`,children:[r,I.jsx("span",{children:n})]}),$h="h-8 w-8 [@media(max-height:500px)]:h-4 [@media(max-height:500px)]:w-4 sm:h-6 sm:w-6",yL=({t:r,currentLevel:e,towerHeight:n,playerLevel:a,gemsCollected:o,totalGems:c,score:u,displayTime:d,soundMuted:m,onToggleSound:p,onRestart:_,onBackToMenu:v,onOpenSettings:g,onOpenHelp:M,onFullscreen:x})=>I.jsxs("header",{className:"hud-header pointer-events-none fixed inset-0 z-30",children:[I.jsxs("div",{className:"font-freckle absolute left-1.5 top-1.5 sm:left-2 sm:top-2",children:[I.jsxs("div",{className:"text-lg sm:text-4xl tracking-wider text-[#86efac] [@media(max-height:500px)]:text-base",children:[r.hudTower," ",e," ",I.jsxs("span",{className:"text-[#4ade80]/90",children:["/ ",ga]})]}),I.jsxs("div",{className:"text-lg sm:text-4xl tracking-wider text-[#7fd4e6] [@media(max-height:500px)]:text-base",children:[r.hudFloor," ",a," ",I.jsxs("span",{className:"text-[#7fd4e6]/90",children:["/ ",n]})]})]}),I.jsxs("div",{className:"hud-score pointer-events-auto flex flex-row flex-nowrap items-center gap-4 whitespace-nowrap font-freckle",children:[I.jsxs(Jh,{icon:I.jsx(Sm,{className:`${$h} fill-[#4ade80]`}),color:"text-[#86efac]",children:[o,I.jsxs("span",{className:"text-[#4ade80]/90",children:[" / ",c]})]}),I.jsx(Jh,{icon:I.jsx(g5,{className:$h}),color:"text-[#7fd4e6]",children:ef(d)}),I.jsx(Jh,{icon:I.jsx(y5,{className:$h}),color:"text-[#a8c8ea]",children:u})]}),I.jsx(qS,{t:r,soundMuted:m,onToggleSound:p,onOpenSettings:g,onOpenHelp:M,onFullscreen:x,leadingButtons:I.jsxs(I.Fragment,{children:[I.jsx("button",{onClick:_,className:go,title:r.restartLevel,children:I.jsx(Ju,{className:"h-4 w-4 text-amber-400 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:v,className:go,title:r.backToMenu,children:I.jsx(Qu,{className:"h-4 w-4 text-cyan-400 sm:h-5 sm:w-5"})})]})})]}),SL=()=>/iPhone|iPod/i.test(navigator.userAgent),ML=()=>"standalone"in navigator&&navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches,bL=async()=>{const r=document,e=document.documentElement,n=SL();if(n&&ML())return"already-pwa";const a=document.fullscreenElement??r.webkitFullscreenElement;try{return a?(document.exitFullscreen?await document.exitFullscreen():r.webkitExitFullscreen?await r.webkitExitFullscreen.call(document):r.mozCancelFullScreen&&await r.mozCancelFullScreen.call(document),"ok"):e.requestFullscreen?(await e.requestFullscreen({navigationUI:"hide"}),"ok"):e.webkitRequestFullscreen?(await e.webkitRequestFullscreen.call(e),"ok"):e.mozRequestFullScreen?(await e.mozRequestFullScreen.call(e),"ok"):e.msRequestFullscreen?(await e.msRequestFullscreen.call(e),"ok"):n?"ios-blocked":"ok"}catch{return n?"ios-blocked":"ok"}},EL=()=>{const[r,e]=dt.useState(0),[n,a]=dt.useState(!1),[o,c]=dt.useState(0),u=dt.useRef(0),d=dt.useRef(void 0);return dt.useEffect(()=>{if(r===0)return;d.current&&(clearTimeout(d.current),d.current=void 0);const p=performance.now()-u.current,_=Math.max(0,1e3-p);return d.current=setTimeout(()=>{a(!1),d.current=setTimeout(()=>e(0),300)},_),()=>{d.current&&(clearTimeout(d.current),d.current=void 0)}},[r]),{loadingKey:r,loadingVisible:n,loadingGemsCount:o,trigger:p=>{c(p),u.current=performance.now(),e(_=>_+1),a(!0)}}},TL=()=>{const[r,e]=dt.useState(0),n=dt.useRef({startedAt:0,finalTime:0,running:!1}),a=()=>{n.current.startedAt=performance.now(),n.current.running=!0},o=()=>{n.current.running&&e((performance.now()-n.current.startedAt)/1e3)},c=()=>(n.current.running&&(n.current.finalTime=(performance.now()-n.current.startedAt)/1e3,n.current.running=!1),n.current.finalTime),u=()=>{n.current={startedAt:0,finalTime:0,running:!1},e(0)};return{displayTime:n.current.running?r:n.current.finalTime,isRunning:()=>n.current.running,hasFinalTime:()=>n.current.finalTime!==0,finalTime:()=>n.current.finalTime,start:a,tick:o,stop:c,reset:u}},wL=["playing","win","gameover","gamecomplete"];function AL(){const r=dt.useRef(null),e=dt.useRef(null),[n,a]=dt.useState("menu"),o=dt.useRef("menu");dt.useEffect(()=>{o.current=n},[n]);const[c,u]=dt.useState(()=>KR()),d=ZR[c],m=dt.useCallback(we=>{u(we),QR(we)},[]);dt.useEffect(()=>{document.documentElement.lang=c,document.title=d.pageTitle},[c,d]);const[p,_]=dt.useState(()=>{const we=gR();return zt.setSfxEnabled(we.sfxEnabled),zt.setMusicEnabled(we.musicEnabled),{cullingEnabled:!0,simulatedFpsThrottle:0,filterMode:"crisp",renderScale:1,soundMuted:!0,sfxEnabled:we.sfxEnabled,musicEnabled:we.musicEnabled}}),v=dt.useRef(p);dt.useEffect(()=>{v.current=p},[p]);const[g,M]=dt.useState({level:0,score:0,gemsCollected:0,totalGems:ma[0].gems.length,jumps:0,elapsedTime:0,status:"running"}),[x,A]=dt.useState(!1),[y,S]=dt.useState(!1),[R,U]=dt.useState(!1),[C,P]=dt.useState(ma[0].towerHeight),[N,F]=dt.useState(1),T=dt.useRef(1);dt.useEffect(()=>{T.current=N},[N]);const[O,Y]=dt.useState(()=>mo()),V=EL(),X=TL(),le=dt.useRef(0),[ae,Q]=dt.useState(()=>yv(typeof window>"u"?1280:window.innerWidth,typeof window>"u"?800:window.innerHeight)),B=dt.useCallback(we=>{const Ye=r.current;if(!Ye)return null;e.current&&(e.current.dispose(),e.current=null);const Qe=new NR(Ye,we);return e.current=Qe,P(Qe.towerHeight),M(qe=>({...qe,totalGems:Qe.level.gems.length})),Qe.config={...v.current},Qe.applyCanvasFilter(),Qe.setRenderResolution(ae.width,ae.height),Qe.onPlayerStateUpdate=qe=>{M({level:Math.max(0,Math.min(Qe.towerHeight,Math.floor(qe.y))),score:qe.score,gemsCollected:qe.gemsCollected,totalGems:qe.totalGems,jumps:qe.jumpCount,elapsedTime:qe.elapsedTime,status:qe.status})},Qe.onGameStatusChange=qe=>{if(M(Nt=>({...Nt,status:qe})),qe!=="gameover"&&qe!=="win")return;const Lt=X.stop();if(qe==="win"){le.current+=Lt;const Nt=Qe.playerState,nn=Nt.gemsCollected>=Nt.totalGems,J=jR(T.current,nn,Nt.jumpCount,Lt,ga);Y(J),T.current>=ga?a(nn?"gamecomplete":"win"):a("win")}else a("gameover")},Qe},[]);dt.useEffect(()=>{const we=bv(mo()),Ye=B(ma[we]);return Ye&&Ye.setSceneMode("menu"),()=>{e.current?.dispose(),e.current=null}},[]),dt.useEffect(()=>{if(e.current)if(n==="menu"||n==="levelSelect"){const we=bv(mo());if(e.current.level.id===ma[we].id)e.current.setSceneMode("menu");else{const Qe=B(ma[we]);Qe&&Qe.setSceneMode("menu")}}else n==="playing"&&e.current.setSceneMode("play")},[n,O,B]),dt.useEffect(()=>{n==="playing"?zt.playMusic("game"):n==="win"||n==="gameover"?zt.stopMusic():zt.playMusic("menu")},[n]),dt.useEffect(()=>{const we=()=>zt.resume(!0),Ye=()=>zt.setPageHidden(document.visibilityState==="hidden"),Qe=()=>zt.setPageHidden(!0),qe=()=>zt.setPageHidden(!1);return window.addEventListener("pointerdown",we,{passive:!0,capture:!0}),window.addEventListener("keydown",we,{capture:!0}),document.addEventListener("visibilitychange",Ye),window.addEventListener("pagehide",Qe),window.addEventListener("pageshow",qe),()=>{window.removeEventListener("pointerdown",we,{capture:!0}),window.removeEventListener("keydown",we,{capture:!0}),document.removeEventListener("visibilitychange",Ye),window.removeEventListener("pagehide",Qe),window.removeEventListener("pageshow",qe)}},[]),dt.useEffect(()=>{let we=0;const Ye=()=>{if(we=requestAnimationFrame(Ye),o.current!=="playing"||!e.current)return;const Qe=e.current;if(Qe.playerState.status!=="running")return;const qe=Qe.input.left||Qe.input.right||Qe.input.up||Qe.input.jumpQueued;!X.isRunning()&&!X.hasFinalTime()&&qe&&X.start(),X.tick()};return we=requestAnimationFrame(Ye),()=>cancelAnimationFrame(we)},[]),dt.useEffect(()=>{const we=()=>{const Ye=yv(window.innerWidth,window.innerHeight);Q(Qe=>Qe.id===Ye.id?Qe:Ye)};return we(),window.addEventListener("resize",we),window.addEventListener("orientationchange",we),()=>{window.removeEventListener("resize",we),window.removeEventListener("orientationchange",we)}},[]),dt.useEffect(()=>{e.current?.setRenderResolution(ae.width,ae.height)},[ae]),dt.useEffect(()=>{const we=document.getElementById("loader"),Ye=setTimeout(()=>{we&&(we.style.display="none")},3e3);return n==="menu"&&window.__fontsLoaded&&(we&&(we.style.display="none"),clearTimeout(Ye)),()=>clearTimeout(Ye)},[n]);const q=dt.useCallback(we=>{const Ye=v.current,Qe=typeof we=="function"?we(Ye):we,qe={...Ye,...Qe};v.current=qe,qe.sfxEnabled!==Ye.sfxEnabled&&zt.setSfxEnabled(qe.sfxEnabled),qe.musicEnabled!==Ye.musicEnabled&&zt.setMusicEnabled(qe.musicEnabled),qe.soundMuted!==Ye.soundMuted&&zt.setMuted(qe.soundMuted),(qe.sfxEnabled!==Ye.sfxEnabled||qe.musicEnabled!==Ye.musicEnabled)&&xR({sfxEnabled:qe.sfxEnabled,musicEnabled:qe.musicEnabled}),e.current&&(e.current.config=qe,Qe.filterMode!==void 0&&e.current.applyCanvasFilter(),Qe.renderScale!==void 0&&e.current.setRenderResolution(ae.width,ae.height)),_(qe)},[ae]),ee=async()=>{await bL()==="ios-blocked"&&U(!0)},re=(we,Ye={})=>{const Qe=ma[we-1];r2.flushSync(()=>{V.trigger(Qe.gems.length),Ye.changeScreenImmediately&&a("playing")}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const qe=B(Qe);qe&&(qe.restartGame(),qe.setSceneMode("play")),X.reset(),Ye.changeScreenImmediately||a("playing")})})},E=()=>{Y(mo()),a("levelSelect")},H=we=>{OS(we,mo())&&(F(we),re(we))},ie=()=>{F(1),le.current=0,re(1)},xe=()=>{e.current?.restartGame(),X.reset(),a("playing")},Ee=()=>{const we=N+1;if(we>ga){a("gamecomplete");return}F(we),re(we,{changeScreenImmediately:!0})},K=()=>{F(1),le.current=0,a("menu")},se=we=>{!e.current||o.current!=="playing"||we(e.current)},me=we=>se(Ye=>{Ye.input.left=we}),Ce=we=>se(Ye=>{Ye.input.right=we}),ke=we=>se(Ye=>{we&&!Ye.input.up&&(Ye.input.jumpQueued=!0),Ye.input.up=we}),Ne=()=>se(we=>{we.input.doorQueued=!0}),ut=dt.useCallback(()=>q(we=>({soundMuted:!we.soundMuted})),[q]),nt=()=>A(!0),Ve=()=>S(!0),lt=wL.includes(n);return I.jsxs("main",{className:"relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#050b14] font-freckle text-slate-100 select-none",children:[I.jsx("div",{className:`relative overflow-hidden transition-all duration-700 ${p.filterMode==="crt"?"crt-overlay":""} `,style:{width:"100vw",height:"100vh",filter:n==="menu"||n==="levelSelect"?"blur(1.5px) brightness(0.72)":"none"},children:I.jsx("div",{ref:r,className:`absolute inset-0 transition-all duration-700 ${p.filterMode==="crisp"?"rendering-pixelated":""}`,style:{display:"flex",alignItems:"center",justifyContent:"center"}})}),n==="menu"&&I.jsx(xL,{t:d,lang:c,onLangChange:m,soundMuted:p.soundMuted,onToggleSound:ut,onOpenSettings:nt,onOpenHelp:Ve,onFullscreen:ee,onPlay:E}),n==="levelSelect"&&I.jsx(vL,{t:d,progress:O,onBackToMenu:K,onSelectLevel:H}),lt&&I.jsx(yL,{t:d,currentLevel:N,towerHeight:C,playerLevel:g.level,gemsCollected:g.gemsCollected,totalGems:g.totalGems,score:g.score,displayTime:X.displayTime,soundMuted:p.soundMuted,onToggleSound:ut,onRestart:xe,onBackToMenu:K,onOpenSettings:nt,onOpenHelp:Ve,onFullscreen:ee}),n==="playing"&&I.jsx(Z5,{t:d,onMoveLeft:me,onMoveRight:Ce,onJump:ke,onDoor:Ne}),R&&I.jsx(fL,{t:d,onClose:()=>U(!1)}),I.jsx(nL,{t:d,config:p,onConfigChange:q,isOpen:x,onClose:()=>A(!1)}),y&&I.jsx(uL,{t:d,towerHeight:C,totalLevels:ga,onClose:()=>S(!1)}),n==="win"&&I.jsx(rL,{t:d,score:g.score,gems:g.gemsCollected,totalGems:g.totalGems,jumps:g.jumps,timeSec:X.finalTime(),towerHeight:C,levelNumber:N,totalLevels:ga,onRestart:xe,onBackToMenu:K,onNextLevel:Ee}),n==="gamecomplete"&&I.jsx(lL,{t:d,score:g.score,gems:g.gemsCollected,totalGems:g.totalGems,jumps:g.jumps,totalTime:le.current,levelsCompleted:ga,onRestart:ie,onBackToMenu:K}),n==="gameover"&&I.jsx(oL,{t:d,score:g.score,level:g.level,towerHeight:C,onRestart:xe,onBackToMenu:K}),V.loadingKey>0&&I.jsx(cL,{t:d,visible:V.loadingVisible,levelNumber:N,gemsCount:V.loadingGemsCount})]})}s2.createRoot(document.getElementById("root")).render(I.jsx(dt.StrictMode,{children:I.jsx(AL,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
