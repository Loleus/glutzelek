(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function s2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ch={exports:{}},bl={};var lx;function r2(){if(lx)return bl;lx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return bl.Fragment=e,bl.jsx=n,bl.jsxs=n,bl}var cx;function o2(){return cx||(cx=1,ch.exports=r2()),ch.exports}var I=o2(),uh={exports:{}},gt={};var ux;function l2(){if(ux)return gt;ux=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=_&&E[_]||E["@@iterator"],typeof E=="function"?E:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function S(E,k,ae){this.props=E,this.context=k,this.refs=y,this.updater=ae||v}S.prototype.isReactComponent={},S.prototype.setState=function(E,k){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,k,"setState")},S.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function R(){}R.prototype=S.prototype;function U(E,k,ae){this.props=E,this.context=k,this.refs=y,this.updater=ae||v}var C=U.prototype=new R;C.constructor=U,A(C,S.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(E,k,ae){var ye=ae.ref;return{$$typeof:r,type:E,key:k,ref:ye!==void 0?ye:null,props:ae}}function Y(E,k){return P(E.type,k,E.props)}function V(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function W(E){var k={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ae){return k[ae]})}var pe=/\/+/g;function se(E,k){return typeof E=="object"&&E!==null&&E.key!=null?W(""+E.key):k.toString(36)}function J(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(N,N):(E.status="pending",E.then(function(k){E.status==="pending"&&(E.status="fulfilled",E.value=k)},function(k){E.status==="pending"&&(E.status="rejected",E.reason=k)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function F(E,k,ae,ye,Ee){var K=typeof E;(K==="undefined"||K==="boolean")&&(E=null);var ie=!1;if(E===null)ie=!0;else switch(K){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(E.$$typeof){case r:case e:ie=!0;break;case g:return ie=E._init,F(ie(E._payload),k,ae,ye,Ee)}}if(ie)return Ee=Ee(E),ie=ye===""?"."+se(E,0):ye,O(Ee)?(ae="",ie!=null&&(ae=ie.replace(pe,"$&/")+"/"),F(Ee,k,ae,"",function(ke){return ke})):Ee!=null&&(V(Ee)&&(Ee=Y(Ee,ae+(Ee.key==null||E&&E.key===Ee.key?"":(""+Ee.key).replace(pe,"$&/")+"/")+ie)),k.push(Ee)),1;ie=0;var me=ye===""?".":ye+":";if(O(E))for(var Ce=0;Ce<E.length;Ce++)ye=E[Ce],K=me+se(ye,Ce),ie+=F(ye,k,ae,K,Ee);else if(Ce=M(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(ye=E.next()).done;)ye=ye.value,K=me+se(ye,Ce++),ie+=F(ye,k,ae,K,Ee);else if(K==="object"){if(typeof E.then=="function")return F(J(E),k,ae,ye,Ee);throw k=String(E),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ie}function q(E,k,ae){if(E==null)return E;var ye=[],Ee=0;return F(E,ye,"","",function(K){return k.call(ae,K,Ee++)}),ye}function ne(E){if(E._status===-1){var k=E._result;k=k(),k.then(function(ae){(E._status===0||E._status===-1)&&(E._status=1,E._result=ae)},function(ae){(E._status===0||E._status===-1)&&(E._status=2,E._result=ae)}),E._status===-1&&(E._status=0,E._result=k)}if(E._status===1)return E._result.default;throw E._result}var le=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},H={map:q,forEach:function(E,k,ae){q(E,function(){k.apply(this,arguments)},ae)},count:function(E){var k=0;return q(E,function(){k++}),k},toArray:function(E){return q(E,function(k){return k})||[]},only:function(E){if(!V(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return gt.Activity=x,gt.Children=H,gt.Component=S,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=U,gt.StrictMode=a,gt.Suspense=m,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,gt.__COMPILER_RUNTIME={__proto__:null,c:function(E){return B.H.useMemoCache(E)}},gt.cache=function(E){return function(){return E.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(E,k,ae){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var ye=A({},E.props),Ee=E.key;if(k!=null)for(K in k.key!==void 0&&(Ee=""+k.key),k)!T.call(k,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&k.ref===void 0||(ye[K]=k[K]);var K=arguments.length-2;if(K===1)ye.children=ae;else if(1<K){for(var ie=Array(K),me=0;me<K;me++)ie[me]=arguments[me+2];ye.children=ie}return P(E.type,Ee,ye)},gt.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},gt.createElement=function(E,k,ae){var ye,Ee={},K=null;if(k!=null)for(ye in k.key!==void 0&&(K=""+k.key),k)T.call(k,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ee[ye]=k[ye]);var ie=arguments.length-2;if(ie===1)Ee.children=ae;else if(1<ie){for(var me=Array(ie),Ce=0;Ce<ie;Ce++)me[Ce]=arguments[Ce+2];Ee.children=me}if(E&&E.defaultProps)for(ye in ie=E.defaultProps,ie)Ee[ye]===void 0&&(Ee[ye]=ie[ye]);return P(E,K,Ee)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(E){return{$$typeof:d,render:E}},gt.isValidElement=V,gt.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:ne}},gt.memo=function(E,k){return{$$typeof:p,type:E,compare:k===void 0?null:k}},gt.startTransition=function(E){var k=B.T,ae={};B.T=ae;try{var ye=E(),Ee=B.S;Ee!==null&&Ee(ae,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(N,le)}catch(K){le(K)}finally{k!==null&&ae.types!==null&&(k.types=ae.types),B.T=k}},gt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},gt.use=function(E){return B.H.use(E)},gt.useActionState=function(E,k,ae){return B.H.useActionState(E,k,ae)},gt.useCallback=function(E,k){return B.H.useCallback(E,k)},gt.useContext=function(E){return B.H.useContext(E)},gt.useDebugValue=function(){},gt.useDeferredValue=function(E,k){return B.H.useDeferredValue(E,k)},gt.useEffect=function(E,k){return B.H.useEffect(E,k)},gt.useEffectEvent=function(E){return B.H.useEffectEvent(E)},gt.useId=function(){return B.H.useId()},gt.useImperativeHandle=function(E,k,ae){return B.H.useImperativeHandle(E,k,ae)},gt.useInsertionEffect=function(E,k){return B.H.useInsertionEffect(E,k)},gt.useLayoutEffect=function(E,k){return B.H.useLayoutEffect(E,k)},gt.useMemo=function(E,k){return B.H.useMemo(E,k)},gt.useOptimistic=function(E,k){return B.H.useOptimistic(E,k)},gt.useReducer=function(E,k,ae){return B.H.useReducer(E,k,ae)},gt.useRef=function(E){return B.H.useRef(E)},gt.useState=function(E){return B.H.useState(E)},gt.useSyncExternalStore=function(E,k,ae){return B.H.useSyncExternalStore(E,k,ae)},gt.useTransition=function(){return B.H.useTransition()},gt.version="19.2.6",gt}var fx;function em(){return fx||(fx=1,uh.exports=l2()),uh.exports}var dt=em();const Fv=s2(dt);var fh={exports:{}},El={},dh={exports:{}},hh={};var dx;function c2(){return dx||(dx=1,(function(r){function e(F,q){var ne=F.length;F.push(q);e:for(;0<ne;){var le=ne-1>>>1,H=F[le];if(0<o(H,q))F[le]=q,F[ne]=H,ne=le;else break e}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var q=F[0],ne=F.pop();if(ne!==q){F[0]=ne;e:for(var le=0,H=F.length,E=H>>>1;le<E;){var k=2*(le+1)-1,ae=F[k],ye=k+1,Ee=F[ye];if(0>o(ae,ne))ye<H&&0>o(Ee,ae)?(F[le]=Ee,F[ye]=ne,le=ye):(F[le]=ae,F[k]=ne,le=k);else if(ye<H&&0>o(Ee,ne))F[le]=Ee,F[ye]=ne,le=ye;else break e}}return q}function o(F,q){var ne=F.sortIndex-q.sortIndex;return ne!==0?ne:F.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,x=null,_=3,M=!1,v=!1,A=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var q=n(p);q!==null;){if(q.callback===null)a(p);else if(q.startTime<=F)a(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=n(p)}}function O(F){if(A=!1,C(F),!v)if(n(m)!==null)v=!0,N||(N=!0,W());else{var q=n(p);q!==null&&J(O,q.startTime-F)}}var N=!1,B=-1,T=5,P=-1;function Y(){return y?!0:!(r.unstable_now()-P<T)}function V(){if(y=!1,N){var F=r.unstable_now();P=F;var q=!0;try{e:{v=!1,A&&(A=!1,R(B),B=-1),M=!0;var ne=_;try{t:{for(C(F),x=n(m);x!==null&&!(x.expirationTime>F&&Y());){var le=x.callback;if(typeof le=="function"){x.callback=null,_=x.priorityLevel;var H=le(x.expirationTime<=F);if(F=r.unstable_now(),typeof H=="function"){x.callback=H,C(F),q=!0;break t}x===n(m)&&a(m),C(F)}else a(m);x=n(m)}if(x!==null)q=!0;else{var E=n(p);E!==null&&J(O,E.startTime-F),q=!1}}break e}finally{x=null,_=ne,M=!1}q=void 0}}finally{q?W():N=!1}}}var W;if(typeof U=="function")W=function(){U(V)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,se=pe.port2;pe.port1.onmessage=V,W=function(){se.postMessage(null)}}else W=function(){S(V,0)};function J(F,q){B=S(function(){F(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(F){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var ne=_;_=q;try{return F()}finally{_=ne}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ne=_;_=F;try{return q()}finally{_=ne}},r.unstable_scheduleCallback=function(F,q,ne){var le=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?le+ne:le):ne=le,F){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,F={id:g++,callback:q,priorityLevel:F,startTime:ne,expirationTime:H,sortIndex:-1},ne>le?(F.sortIndex=ne,e(p,F),n(m)===null&&F===n(p)&&(A?(R(B),B=-1):A=!0,J(O,ne-le))):(F.sortIndex=H,e(m,F),v||M||(v=!0,N||(N=!0,W()))),F},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(F){var q=_;return function(){var ne=_;_=q;try{return F.apply(this,arguments)}finally{_=ne}}}})(hh)),hh}var hx;function u2(){return hx||(hx=1,dh.exports=c2()),dh.exports}var ph={exports:{}},Kn={};var px;function f2(){if(px)return Kn;px=1;var r=em();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Kn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},Kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Kn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:M}):g==="script"&&a.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Kn.requestFormReset=function(m){a.d.r(m)},Kn.unstable_batchedUpdates=function(m,p){return m(p)},Kn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Kn.version="19.2.6",Kn}var mx;function zv(){if(mx)return ph.exports;mx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ph.exports=f2(),ph.exports}var gx;function d2(){if(gx)return El;gx=1;var r=u2(),e=em(),n=zv();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var b=!1,D=f.child;D;){if(D===s){b=!0,s=f,l=h;break}if(D===l){b=!0,l=f,s=h;break}D=D.sibling}if(!b){for(D=h.child;D;){if(D===s){b=!0,s=h,l=f;break}if(D===l){b=!0,l=h,s=f;break}D=D.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case N:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case v:return"Portal";case U:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:se(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return se(t(i))}catch{}}return null}var J=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},le=[],H=-1;function E(t){return{current:t}}function k(t){0>H||(t.current=le[H],le[H]=null,H--)}function ae(t,i){H++,le[H]=t.current,t.current=i}var ye=E(null),Ee=E(null),K=E(null),ie=E(null);function me(t,i){switch(ae(K,i),ae(Ee,t),ae(ye,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?D_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=D_(i),t=N_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(ye),ae(ye,t)}function Ce(){k(ye),k(Ee),k(K)}function ke(t){t.memoizedState!==null&&ae(ie,t);var i=ye.current,s=N_(i,t.type);i!==s&&(ae(Ee,t),ae(ye,s))}function Ne(t){Ee.current===t&&(k(ye),k(Ee)),ie.current===t&&(k(ie),vl._currentValue=ne)}var ut,nt;function Ve(t){if(ut===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ut=i&&i[1]||"",nt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+nt}var ct=!1;function we(t,i){if(!t||ct)return"";ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(ge){var he=ge}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(ge){he=ge}t.call(Te.prototype)}}else{try{throw Error()}catch(ge){he=ge}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(ge){if(ge&&he&&typeof ge.stack=="string")return[ge.stack,he.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],D=h[1];if(b&&D){var X=b.split(`
`),oe=D.split(`
`);for(f=l=0;l<X.length&&!X[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===X.length||f===oe.length)for(l=X.length-1,f=oe.length-1;1<=l&&0<=f&&X[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(X[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||X[l]!==oe[f]){var Se=`
`+X[l].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=l&&0<=f);break}}}finally{ct=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ve(s):""}function Ye(t,i){switch(t.tag){case 26:case 27:case 5:return Ve(t.type);case 16:return Ve("Lazy");case 13:return t.child!==i&&i!==null?Ve("Suspense Fallback"):Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 15:return we(t.type,!1);case 11:return we(t.type.render,!1);case 1:return we(t.type,!0);case 31:return Ve("Activity");default:return""}}function Qe(t){try{var i="",s=null;do i+=Ye(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qe=Object.prototype.hasOwnProperty,Dt=r.unstable_scheduleCallback,Ut=r.unstable_cancelCallback,an=r.unstable_shouldYield,Q=r.unstable_requestPaint,Gt=r.unstable_now,Ot=r.unstable_getCurrentPriorityLevel,z=r.unstable_ImmediatePriority,w=r.unstable_UserBlockingPriority,te=r.unstable_NormalPriority,fe=r.unstable_LowPriority,_e=r.unstable_IdlePriority,Re=r.log,Oe=r.unstable_setDisableYieldValue,xe=null,ve=null;function De(t){if(typeof Re=="function"&&Oe(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(xe,t)}catch{}}var Xe=Math.clz32?Math.clz32:at,Be=Math.log,Pe=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Be(t)/Pe|0)|0}var st=256,mt=262144,Z=4194304;function Le(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~h,l!==0?f=Le(l):(b&=D,b!==0?f=Le(b):s||(s=D&~t,s!==0&&(f=Le(s))))):(D=l&~h,D!==0?f=Le(D):b!==0?f=Le(b):s||(s=l&~t,s!==0&&(f=Le(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ge(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function et(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ze(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pn(t,i,s,l,f,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,X=t.expirationTimes,oe=t.hiddenUpdates;for(s=b&~s;0<s;){var Se=31-Xe(s),Te=1<<Se;D[Se]=0,X[Se]=-1;var he=oe[Se];if(he!==null)for(oe[Se]=null,Se=0;Se<he.length;Se++){var ge=he[Se];ge!==null&&(ge.lane&=-536870913)}s&=~Te}l!==0&&Xt(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function Xt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Xe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function vi(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Xe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function yi(t,i){var s=i&-i;return s=(s&42)!==0?1:Uo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Uo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Oo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Po(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:tx(t.type))}function Mr(t,i){var s=q.p;try{return q.p=t,i()}finally{q.p=s}}var oa=Math.random().toString(36).slice(2),bn="__reactFiber$"+oa,Hn="__reactProps$"+oa,ci="__reactContainer$"+oa,Fs="__reactEvents$"+oa,$l="__reactListeners$"+oa,ec="__reactHandles$"+oa,zs="__reactResources$"+oa,ts="__reactMarker$"+oa;function ns(t){delete t[bn],delete t[Hn],delete t[Fs],delete t[$l],delete t[ec]}function Ma(t){var i=t[bn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ci]||s[bn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=z_(t);t!==null;){if(s=t[bn])return s;t=z_(t)}return i}t=s,s=t.parentNode}return null}function ba(t){if(t=t[bn]||t[ci]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Hs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function is(t){var i=t[zs];return i||(i=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function En(t){t[ts]=!0}var tc=new Set,L={};function $(t,i){de(t,i),de(t+"Capture",i)}function de(t,i){for(L[t]=i,t=0;t<i.length;t++)tc.add(i[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},ze={};function je(t){return qe.call(ze,t)?!0:qe.call(ue,t)?!1:ce.test(t)?ze[t]=!0:(ue[t]=!0,!1)}function Ie(t,i,s){if(je(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ke(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Bt(t){if(!t._valueTracker){var i=xt(t)?"checked":"value";t._valueTracker=it(t,i,""+t[i])}}function mn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=xt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function sn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wt=/[\n"\\]/g;function qt(t){return t.replace(Wt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function We(t,i,s,l,f,h,b,D){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+rt(i)):t.value!==""+rt(i)&&(t.value=""+rt(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Et(t,b,rt(i)):s!=null?Et(t,b,rt(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+rt(D):t.removeAttribute("name")}function Zn(t,i,s,l,f,h,b,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Bt(t);return}s=s!=null?""+rt(s):"",i=i!=null?""+rt(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Bt(t)}function Et(t,i,s){i==="number"&&sn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ln(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+rt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Si(t,i,s){if(i!=null&&(i=""+rt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+rt(s):""}function qi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(J(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=rt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Bt(t)}function Mi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||jt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function ji(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&gn(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&gn(t,h,i[h])}function Vt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),as=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gs(t){return as.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ea(){}var rf=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Er=null;function Lm(t){var i=ba(t);if(i&&(t=i.stateNode)){var s=t[Hn]||null;e:switch(t=i.stateNode,i.type){case"input":if(We(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+qt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Hn]||null;if(!f)throw Error(a(90));We(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&mn(l)}break e;case"textarea":Si(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ln(t,!!s.multiple,i,!1)}}}var lf=!1;function Dm(t,i,s){if(lf)return t(i,s);lf=!0;try{var l=t(i);return l}finally{if(lf=!1,(br!==null||Er!==null)&&(kc(),br&&(i=br,t=Er,Er=br=null,Lm(i),t)))for(i=0;i<t.length;i++)Lm(t[i])}}function Io(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Hn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=!1;if(Ta)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){cf=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{cf=!1}var ss=null,uf=null,nc=null;function Nm(){if(nc)return nc;var t,i=uf,s=i.length,l,f="value"in ss?ss.value:ss.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[h-l];l++);return nc=f.slice(t,1<l?1-l:void 0)}function ic(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ac(){return!0}function Um(){return!1}function ui(t){function i(s,l,f,h,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ac:Um,this.isPropagationStopped=Um,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),i}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=ui(ks),Fo=x({},ks,{view:0,detail:0}),iM=ui(Fo),ff,df,zo,rc=x({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(ff=t.screenX-zo.screenX,df=t.screenY-zo.screenY):df=ff=0,zo=t),ff)},movementY:function(t){return"movementY"in t?t.movementY:df}}),Om=ui(rc),aM=x({},rc,{dataTransfer:0}),sM=ui(aM),rM=x({},Fo,{relatedTarget:0}),hf=ui(rM),oM=x({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),lM=ui(oM),cM=x({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uM=ui(cM),fM=x({},ks,{data:0}),Pm=ui(fM),dM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=pM[t])?!!i[t]:!1}function pf(){return mM}var gM=x({},Fo,{key:function(t){if(t.key){var i=dM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_M=ui(gM),xM=x({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=ui(xM),vM=x({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),yM=ui(vM),SM=x({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),MM=ui(SM),bM=x({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EM=ui(bM),TM=x({},ks,{newState:0,oldState:0}),wM=ui(TM),AM=[9,13,27,32],mf=Ta&&"CompositionEvent"in window,Ho=null;Ta&&"documentMode"in document&&(Ho=document.documentMode);var CM=Ta&&"TextEvent"in window&&!Ho,Bm=Ta&&(!mf||Ho&&8<Ho&&11>=Ho),Fm=" ",zm=!1;function Hm(t,i){switch(t){case"keyup":return AM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function RM(t,i){switch(t){case"compositionend":return Gm(i);case"keypress":return i.which!==32?null:(zm=!0,Fm);case"textInput":return t=i.data,t===Fm&&zm?null:t;default:return null}}function LM(t,i){if(Tr)return t==="compositionend"||!mf&&Hm(t,i)?(t=Nm(),nc=uf=ss=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bm&&i.locale!=="ko"?null:i.data;default:return null}}var DM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!DM[t.type]:i==="textarea"}function Vm(t,i,s,l){br?Er?Er.push(l):Er=[l]:br=l,i=Zc(i,"onChange"),0<i.length&&(s=new sc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Go=null,ko=null;function NM(t){T_(t,0)}function oc(t){var i=Hs(t);if(mn(i))return t}function Ym(t,i){if(t==="change")return i}var Xm=!1;if(Ta){var gf;if(Ta){var _f="oninput"in document;if(!_f){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),_f=typeof Wm.oninput=="function"}gf=_f}else gf=!1;Xm=gf&&(!document.documentMode||9<document.documentMode)}function qm(){Go&&(Go.detachEvent("onpropertychange",jm),ko=Go=null)}function jm(t){if(t.propertyName==="value"&&oc(ko)){var i=[];Vm(i,ko,t,of(t)),Dm(NM,i)}}function UM(t,i,s){t==="focusin"?(qm(),Go=i,ko=s,Go.attachEvent("onpropertychange",jm)):t==="focusout"&&qm()}function OM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(ko)}function PM(t,i){if(t==="click")return oc(i)}function IM(t,i){if(t==="input"||t==="change")return oc(i)}function BM(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bi=typeof Object.is=="function"?Object.is:BM;function Vo(t,i){if(bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!qe.call(i,f)||!bi(t[f],i[f]))return!1}return!0}function Zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Km(t,i){var s=Zm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Zm(s)}}function Qm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Qm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Jm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=sn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=sn(t.document)}return i}function xf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var FM=Ta&&"documentMode"in document&&11>=document.documentMode,wr=null,vf=null,Yo=null,yf=!1;function $m(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;yf||wr==null||wr!==sn(l)||(l=wr,"selectionStart"in l&&xf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&Vo(Yo,l)||(Yo=l,l=Zc(vf,"onSelect"),0<l.length&&(i=new sc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=wr)))}function Vs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Ar={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionrun:Vs("Transition","TransitionRun"),transitionstart:Vs("Transition","TransitionStart"),transitioncancel:Vs("Transition","TransitionCancel"),transitionend:Vs("Transition","TransitionEnd")},Sf={},e0={};Ta&&(e0=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Ys(t){if(Sf[t])return Sf[t];if(!Ar[t])return t;var i=Ar[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in e0)return Sf[t]=i[s];return t}var t0=Ys("animationend"),n0=Ys("animationiteration"),i0=Ys("animationstart"),zM=Ys("transitionrun"),HM=Ys("transitionstart"),GM=Ys("transitioncancel"),a0=Ys("transitionend"),s0=new Map,Mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mf.push("scrollEnd");function Zi(t,i){s0.set(t,i),$(i,[t])}var lc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Bi=[],Cr=0,bf=0;function cc(){for(var t=Cr,i=bf=Cr=0;i<t;){var s=Bi[i];Bi[i++]=null;var l=Bi[i];Bi[i++]=null;var f=Bi[i];Bi[i++]=null;var h=Bi[i];if(Bi[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&r0(s,f,h)}}function uc(t,i,s,l){Bi[Cr++]=t,Bi[Cr++]=i,Bi[Cr++]=s,Bi[Cr++]=l,bf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ef(t,i,s,l){return uc(t,i,s,l),fc(t)}function Xs(t,i){return uc(t,null,null,i),fc(t)}function r0(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-Xe(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function fc(t){if(50<dl)throw dl=0,Ud=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Rr={};function kM(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,i,s,l){return new kM(t,i,s,l)}function Tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wa(t,i){var s=t.alternate;return s===null?(s=Ei(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function o0(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function dc(t,i,s,l,f,h){var b=0;if(l=t,typeof t=="function")Tf(t)&&(b=1);else if(typeof t=="string")b=qb(t,s,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Ei(31,s,i,f),t.elementType=P,t.lanes=h,t;case A:return Ws(s.children,f,h,i);case y:b=8,f|=24;break;case S:return t=Ei(12,s,i,f|2),t.elementType=S,t.lanes=h,t;case O:return t=Ei(13,s,i,f),t.elementType=O,t.lanes=h,t;case N:return t=Ei(19,s,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:b=10;break e;case R:b=9;break e;case C:b=11;break e;case B:b=14;break e;case T:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Ei(b,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Ws(t,i,s,l){return t=Ei(7,t,l,i),t.lanes=s,t}function wf(t,i,s){return t=Ei(6,t,null,i),t.lanes=s,t}function l0(t){var i=Ei(18,null,null,0);return i.stateNode=t,i}function Af(t,i,s){return i=Ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var c0=new WeakMap;function Fi(t,i){if(typeof t=="object"&&t!==null){var s=c0.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Qe(i)},c0.set(t,i),i)}return{value:t,source:i,stack:Qe(i)}}var Lr=[],Dr=0,hc=null,Xo=0,zi=[],Hi=0,rs=null,ca=1,ua="";function Aa(t,i){Lr[Dr++]=Xo,Lr[Dr++]=hc,hc=t,Xo=i}function u0(t,i,s){zi[Hi++]=ca,zi[Hi++]=ua,zi[Hi++]=rs,rs=t;var l=ca;t=ua;var f=32-Xe(l)-1;l&=~(1<<f),s+=1;var h=32-Xe(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,ca=1<<32-Xe(i)+f|s<<f|l,ua=h+t}else ca=1<<h|s<<f|l,ua=t}function Cf(t){t.return!==null&&(Aa(t,1),u0(t,1,0))}function Rf(t){for(;t===hc;)hc=Lr[--Dr],Lr[Dr]=null,Xo=Lr[--Dr],Lr[Dr]=null;for(;t===rs;)rs=zi[--Hi],zi[Hi]=null,ua=zi[--Hi],zi[Hi]=null,ca=zi[--Hi],zi[Hi]=null}function f0(t,i){zi[Hi++]=ca,zi[Hi++]=ua,zi[Hi++]=rs,ca=i.id,ua=i.overflow,rs=t}var Gn=null,fn=null,Nt=!1,os=null,Gi=!1,Lf=Error(a(519));function ls(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(Fi(i,t)),Lf}function d0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[bn]=t,i[Hn]=l,s){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(s=0;s<pl.length;s++)wt(pl[s],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":wt("invalid",i),Zn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":wt("invalid",i);break;case"textarea":wt("invalid",i),qi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||R_(i.textContent,s)?(l.popover!=null&&(wt("beforetoggle",i),wt("toggle",i)),l.onScroll!=null&&wt("scroll",i),l.onScrollEnd!=null&&wt("scrollend",i),l.onClick!=null&&(i.onclick=Ea),i=!0):i=!1,i||ls(t,!0)}function h0(t){for(Gn=t.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Gn=Gn.return}}function Nr(t){if(t!==Gn)return!1;if(!Nt)return h0(t),Nt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||jd(t.type,t.memoizedProps)),s=!s),s&&fn&&ls(t),h0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));fn=F_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));fn=F_(t)}else i===27?(i=fn,Ms(t.type)?(t=$d,$d=null,fn=t):fn=i):fn=Gn?Vi(t.stateNode.nextSibling):null;return!0}function qs(){fn=Gn=null,Nt=!1}function Df(){var t=os;return t!==null&&(pi===null?pi=t:pi.push.apply(pi,t),os=null),t}function Wo(t){os===null?os=[t]:os.push(t)}var Nf=E(null),js=null,Ca=null;function cs(t,i,s){ae(Nf,i._currentValue),i._currentValue=s}function Ra(t){t._currentValue=Nf.current,k(Nf)}function Uf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Of(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var D=h;h=f;for(var X=0;X<i.length;X++)if(D.context===i[X]){h.lanes|=s,D=h.alternate,D!==null&&(D.lanes|=s),Uf(h.return,s,t),l||(b=null);break e}h=D.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),Uf(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Ur(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var D=f.type;bi(f.pendingProps.value,b.value)||(t!==null?t.push(D):t=[D])}}else if(f===ie.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(vl):t=[vl])}f=f.return}t!==null&&Of(i,t,s,l),i.flags|=262144}function pc(t){for(t=t.firstContext;t!==null;){if(!bi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zs(t){js=t,Ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return p0(js,t)}function mc(t,i){return js===null&&Zs(t),p0(t,i)}function p0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ca===null){if(t===null)throw Error(a(308));Ca=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ca=Ca.next=i;return s}var VM=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},YM=r.unstable_scheduleCallback,XM=r.unstable_NormalPriority,Tn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pf(){return{controller:new VM,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&YM(XM,function(){t.controller.abort()})}var jo=null,If=0,Or=0,Pr=null;function WM(t,i){if(jo===null){var s=jo=[];If=0,Or=zd(),Pr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return If++,i.then(m0,m0),i}function m0(){if(--If===0&&jo!==null){Pr!==null&&(Pr.status="fulfilled");var t=jo;jo=null,Or=0,Pr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function qM(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var g0=F.S;F.S=function(t,i){$g=Gt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&WM(t,i),g0!==null&&g0(t,i)};var Ks=E(null);function Bf(){var t=Ks.current;return t!==null?t:rn.pooledCache}function gc(t,i){i===null?ae(Ks,Ks.current):ae(Ks,i.pool)}function _0(){var t=Bf();return t===null?null:{parent:Tn._currentValue,pool:t}}var Ir=Error(a(460)),Ff=Error(a(474)),_c=Error(a(542)),xc={then:function(){}};function x0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function v0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Ea,Ea),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,S0(t),t;default:if(typeof i.status=="string")i.then(Ea,Ea);else{if(t=rn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,S0(t),t}throw Js=i,Ir}}function Qs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Js=s,Ir):s}}var Js=null;function y0(){if(Js===null)throw Error(a(459));var t=Js;return Js=null,t}function S0(t){if(t===Ir||t===_c)throw Error(a(483))}var Br=null,Zo=0;function vc(t){var i=Zo;return Zo+=1,Br===null&&(Br=[]),v0(Br,t,i)}function Ko(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function yc(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function M0(t){function i(ee,j){if(t){var re=ee.deletions;re===null?(ee.deletions=[j],ee.flags|=16):re.push(j)}}function s(ee,j){if(!t)return null;for(;j!==null;)i(ee,j),j=j.sibling;return null}function l(ee){for(var j=new Map;ee!==null;)ee.key!==null?j.set(ee.key,ee):j.set(ee.index,ee),ee=ee.sibling;return j}function f(ee,j){return ee=wa(ee,j),ee.index=0,ee.sibling=null,ee}function h(ee,j,re){return ee.index=re,t?(re=ee.alternate,re!==null?(re=re.index,re<j?(ee.flags|=67108866,j):re):(ee.flags|=67108866,j)):(ee.flags|=1048576,j)}function b(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function D(ee,j,re,be){return j===null||j.tag!==6?(j=wf(re,ee.mode,be),j.return=ee,j):(j=f(j,re),j.return=ee,j)}function X(ee,j,re,be){var ot=re.type;return ot===A?Se(ee,j,re.props.children,be,re.key):j!==null&&(j.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Qs(ot)===j.type)?(j=f(j,re.props),Ko(j,re),j.return=ee,j):(j=dc(re.type,re.key,re.props,null,ee.mode,be),Ko(j,re),j.return=ee,j)}function oe(ee,j,re,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==re.containerInfo||j.stateNode.implementation!==re.implementation?(j=Af(re,ee.mode,be),j.return=ee,j):(j=f(j,re.children||[]),j.return=ee,j)}function Se(ee,j,re,be,ot){return j===null||j.tag!==7?(j=Ws(re,ee.mode,be,ot),j.return=ee,j):(j=f(j,re),j.return=ee,j)}function Te(ee,j,re){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=wf(""+j,ee.mode,re),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return re=dc(j.type,j.key,j.props,null,ee.mode,re),Ko(re,j),re.return=ee,re;case v:return j=Af(j,ee.mode,re),j.return=ee,j;case T:return j=Qs(j),Te(ee,j,re)}if(J(j)||W(j))return j=Ws(j,ee.mode,re,null),j.return=ee,j;if(typeof j.then=="function")return Te(ee,vc(j),re);if(j.$$typeof===U)return Te(ee,mc(ee,j),re);yc(ee,j)}return null}function he(ee,j,re,be){var ot=j!==null?j.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return ot!==null?null:D(ee,j,""+re,be);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case M:return re.key===ot?X(ee,j,re,be):null;case v:return re.key===ot?oe(ee,j,re,be):null;case T:return re=Qs(re),he(ee,j,re,be)}if(J(re)||W(re))return ot!==null?null:Se(ee,j,re,be,null);if(typeof re.then=="function")return he(ee,j,vc(re),be);if(re.$$typeof===U)return he(ee,j,mc(ee,re),be);yc(ee,re)}return null}function ge(ee,j,re,be,ot){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ee=ee.get(re)||null,D(j,ee,""+be,ot);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case M:return ee=ee.get(be.key===null?re:be.key)||null,X(j,ee,be,ot);case v:return ee=ee.get(be.key===null?re:be.key)||null,oe(j,ee,be,ot);case T:return be=Qs(be),ge(ee,j,re,be,ot)}if(J(be)||W(be))return ee=ee.get(re)||null,Se(j,ee,be,ot,null);if(typeof be.then=="function")return ge(ee,j,re,vc(be),ot);if(be.$$typeof===U)return ge(ee,j,re,mc(j,be),ot);yc(j,be)}return null}function $e(ee,j,re,be){for(var ot=null,Ft=null,tt=j,yt=j=0,Rt=null;tt!==null&&yt<re.length;yt++){tt.index>yt?(Rt=tt,tt=null):Rt=tt.sibling;var zt=he(ee,tt,re[yt],be);if(zt===null){tt===null&&(tt=Rt);break}t&&tt&&zt.alternate===null&&i(ee,tt),j=h(zt,j,yt),Ft===null?ot=zt:Ft.sibling=zt,Ft=zt,tt=Rt}if(yt===re.length)return s(ee,tt),Nt&&Aa(ee,yt),ot;if(tt===null){for(;yt<re.length;yt++)tt=Te(ee,re[yt],be),tt!==null&&(j=h(tt,j,yt),Ft===null?ot=tt:Ft.sibling=tt,Ft=tt);return Nt&&Aa(ee,yt),ot}for(tt=l(tt);yt<re.length;yt++)Rt=ge(tt,ee,yt,re[yt],be),Rt!==null&&(t&&Rt.alternate!==null&&tt.delete(Rt.key===null?yt:Rt.key),j=h(Rt,j,yt),Ft===null?ot=Rt:Ft.sibling=Rt,Ft=Rt);return t&&tt.forEach(function(As){return i(ee,As)}),Nt&&Aa(ee,yt),ot}function ft(ee,j,re,be){if(re==null)throw Error(a(151));for(var ot=null,Ft=null,tt=j,yt=j=0,Rt=null,zt=re.next();tt!==null&&!zt.done;yt++,zt=re.next()){tt.index>yt?(Rt=tt,tt=null):Rt=tt.sibling;var As=he(ee,tt,zt.value,be);if(As===null){tt===null&&(tt=Rt);break}t&&tt&&As.alternate===null&&i(ee,tt),j=h(As,j,yt),Ft===null?ot=As:Ft.sibling=As,Ft=As,tt=Rt}if(zt.done)return s(ee,tt),Nt&&Aa(ee,yt),ot;if(tt===null){for(;!zt.done;yt++,zt=re.next())zt=Te(ee,zt.value,be),zt!==null&&(j=h(zt,j,yt),Ft===null?ot=zt:Ft.sibling=zt,Ft=zt);return Nt&&Aa(ee,yt),ot}for(tt=l(tt);!zt.done;yt++,zt=re.next())zt=ge(tt,ee,yt,zt.value,be),zt!==null&&(t&&zt.alternate!==null&&tt.delete(zt.key===null?yt:zt.key),j=h(zt,j,yt),Ft===null?ot=zt:Ft.sibling=zt,Ft=zt);return t&&tt.forEach(function(a2){return i(ee,a2)}),Nt&&Aa(ee,yt),ot}function nn(ee,j,re,be){if(typeof re=="object"&&re!==null&&re.type===A&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case M:e:{for(var ot=re.key;j!==null;){if(j.key===ot){if(ot=re.type,ot===A){if(j.tag===7){s(ee,j.sibling),be=f(j,re.props.children),be.return=ee,ee=be;break e}}else if(j.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Qs(ot)===j.type){s(ee,j.sibling),be=f(j,re.props),Ko(be,re),be.return=ee,ee=be;break e}s(ee,j);break}else i(ee,j);j=j.sibling}re.type===A?(be=Ws(re.props.children,ee.mode,be,re.key),be.return=ee,ee=be):(be=dc(re.type,re.key,re.props,null,ee.mode,be),Ko(be,re),be.return=ee,ee=be)}return b(ee);case v:e:{for(ot=re.key;j!==null;){if(j.key===ot)if(j.tag===4&&j.stateNode.containerInfo===re.containerInfo&&j.stateNode.implementation===re.implementation){s(ee,j.sibling),be=f(j,re.children||[]),be.return=ee,ee=be;break e}else{s(ee,j);break}else i(ee,j);j=j.sibling}be=Af(re,ee.mode,be),be.return=ee,ee=be}return b(ee);case T:return re=Qs(re),nn(ee,j,re,be)}if(J(re))return $e(ee,j,re,be);if(W(re)){if(ot=W(re),typeof ot!="function")throw Error(a(150));return re=ot.call(re),ft(ee,j,re,be)}if(typeof re.then=="function")return nn(ee,j,vc(re),be);if(re.$$typeof===U)return nn(ee,j,mc(ee,re),be);yc(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,j!==null&&j.tag===6?(s(ee,j.sibling),be=f(j,re),be.return=ee,ee=be):(s(ee,j),be=wf(re,ee.mode,be),be.return=ee,ee=be),b(ee)):s(ee,j)}return function(ee,j,re,be){try{Zo=0;var ot=nn(ee,j,re,be);return Br=null,ot}catch(tt){if(tt===Ir||tt===_c)throw tt;var Ft=Ei(29,tt,null,ee.mode);return Ft.lanes=be,Ft.return=ee,Ft}}}var $s=M0(!0),b0=M0(!1),us=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ds(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(kt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=fc(t),r0(t,null,s),i}return uc(t,l,i,s),fc(t)}function Qo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,vi(t,s)}}function Gf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var kf=!1;function Jo(){if(kf){var t=Pr;if(t!==null)throw t}}function $o(t,i,s,l){kf=!1;var f=t.updateQueue;us=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var X=D,oe=X.next;X.next=null,b===null?h=oe:b.next=oe,b=X;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==b&&(D===null?Se.firstBaseUpdate=oe:D.next=oe,Se.lastBaseUpdate=X))}if(h!==null){var Te=f.baseState;b=0,Se=oe=X=null,D=h;do{var he=D.lane&-536870913,ge=he!==D.lane;if(ge?(Ct&he)===he:(l&he)===he){he!==0&&he===Or&&(kf=!0),Se!==null&&(Se=Se.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var $e=t,ft=D;he=i;var nn=s;switch(ft.tag){case 1:if($e=ft.payload,typeof $e=="function"){Te=$e.call(nn,Te,he);break e}Te=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=ft.payload,he=typeof $e=="function"?$e.call(nn,Te,he):$e,he==null)break e;Te=x({},Te,he);break e;case 2:us=!0}}he=D.callback,he!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=f.callbacks,ge===null?f.callbacks=[he]:ge.push(he))}else ge={lane:he,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(oe=Se=ge,X=Te):Se=Se.next=ge,b|=he;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);Se===null&&(X=Te),f.baseState=X,f.firstBaseUpdate=oe,f.lastBaseUpdate=Se,h===null&&(f.shared.lanes=0),_s|=b,t.lanes=b,t.memoizedState=Te}}function E0(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function T0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)E0(s[t],i)}var Fr=E(null),Sc=E(0);function w0(t,i){t=Fa,ae(Sc,t),ae(Fr,i),Fa=t|i.baseLanes}function Vf(){ae(Sc,Fa),ae(Fr,Fr.current)}function Yf(){Fa=Sc.current,k(Fr),k(Sc)}var Ti=E(null),ki=null;function hs(t){var i=t.alternate;ae(Sn,Sn.current&1),ae(Ti,t),ki===null&&(i===null||Fr.current!==null||i.memoizedState!==null)&&(ki=t)}function Xf(t){ae(Sn,Sn.current),ae(Ti,t),ki===null&&(ki=t)}function A0(t){t.tag===22?(ae(Sn,Sn.current),ae(Ti,t),ki===null&&(ki=t)):ps()}function ps(){ae(Sn,Sn.current),ae(Ti,Ti.current)}function wi(t){k(Ti),ki===t&&(ki=null),k(Sn)}var Sn=E(0);function Mc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Qd(s)||Jd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var La=0,vt=null,en=null,wn=null,bc=!1,zr=!1,er=!1,Ec=0,el=0,Hr=null,jM=0;function xn(){throw Error(a(321))}function Wf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!bi(t[s],i[s]))return!1;return!0}function qf(t,i,s,l,f,h){return La=h,vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?ug:ld,er=!1,h=s(l,f),er=!1,zr&&(h=R0(i,s,l,f)),C0(t),h}function C0(t){F.H=il;var i=en!==null&&en.next!==null;if(La=0,wn=en=vt=null,bc=!1,el=0,Hr=null,i)throw Error(a(300));t===null||An||(t=t.dependencies,t!==null&&pc(t)&&(An=!0))}function R0(t,i,s,l){vt=t;var f=0;do{if(zr&&(Hr=null),el=0,zr=!1,25<=f)throw Error(a(301));if(f+=1,wn=en=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=fg,h=i(s,l)}while(zr);return h}function ZM(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?tl(i):i,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(vt.flags|=1024),i}function jf(){var t=Ec!==0;return Ec=0,t}function Zf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Kf(t){if(bc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}bc=!1}La=0,wn=en=vt=null,zr=!1,el=Ec=0,Hr=null}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?vt.memoizedState=wn=t:wn=wn.next=t,wn}function Mn(){if(en===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=wn===null?vt.memoizedState:wn.next;if(i!==null)wn=i,en=t;else{if(t===null)throw vt.alternate===null?Error(a(467)):Error(a(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},wn===null?vt.memoizedState=wn=t:wn=wn.next=t}return wn}function Tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var i=el;return el+=1,Hr===null&&(Hr=[]),t=v0(Hr,t,i),i=vt,(wn===null?i.memoizedState:wn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?ug:ld),t}function wc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===U)return kn(t)}throw Error(a(438,String(t)))}function Qf(t){var i=null,s=vt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=vt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Tc(),vt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=Y;return i.index++,s}function Da(t,i){return typeof i=="function"?i(t):i}function Ac(t){var i=Mn();return Jf(i,en,t)}function Jf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var D=b=null,X=null,oe=i,Se=!1;do{var Te=oe.lane&-536870913;if(Te!==oe.lane?(Ct&Te)===Te:(La&Te)===Te){var he=oe.revertLane;if(he===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Te===Or&&(Se=!0);else if((La&he)===he){oe=oe.next,he===Or&&(Se=!0);continue}else Te={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(D=X=Te,b=h):X=X.next=Te,vt.lanes|=he,_s|=he;Te=oe.action,er&&s(h,Te),h=oe.hasEagerState?oe.eagerState:s(h,Te)}else he={lane:Te,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(D=X=he,b=h):X=X.next=he,vt.lanes|=Te,_s|=Te;oe=oe.next}while(oe!==null&&oe!==i);if(X===null?b=h:X.next=D,!bi(h,t.memoizedState)&&(An=!0,Se&&(s=Pr,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=X,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function $f(t){var i=Mn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);bi(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function L0(t,i,s){var l=vt,f=Mn(),h=Nt;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!bi((en||f).memoizedState,s);if(b&&(f.memoizedState=s,An=!0),f=f.queue,nd(U0.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,Gr(9,{destroy:void 0},N0.bind(null,l,f,s,i),null),rn===null)throw Error(a(349));h||(La&127)!==0||D0(l,i,s)}return s}function D0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=vt.updateQueue,i===null?(i=Tc(),vt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function N0(t,i,s,l){i.value=s,i.getSnapshot=l,O0(i)&&P0(t)}function U0(t,i,s){return s(function(){O0(i)&&P0(t)})}function O0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!bi(t,s)}catch{return!0}}function P0(t){var i=Xs(t,2);i!==null&&mi(i,t,2)}function ed(t){var i=ti();if(typeof t=="function"){var s=t;if(t=s(),er){De(!0);try{s()}finally{De(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},i}function I0(t,i,s,l){return t.baseState=s,Jf(t,en,typeof l=="function"?l:Da)}function KM(t,i,s,l,f){if(Lc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};F.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,B0(i,h)):(h.next=s.next,i.pending=s.next=h)}}function B0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=F.T,b={};F.T=b;try{var D=s(f,l),X=F.S;X!==null&&X(b,D),F0(t,i,D)}catch(oe){td(t,i,oe)}finally{h!==null&&b.types!==null&&(h.types=b.types),F.T=h}}else try{h=s(f,l),F0(t,i,h)}catch(oe){td(t,i,oe)}}function F0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){z0(t,i,l)},function(l){return td(t,i,l)}):z0(t,i,s)}function z0(t,i,s){i.status="fulfilled",i.value=s,H0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,B0(t,s)))}function td(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,H0(i),i=i.next;while(i!==l)}t.action=null}function H0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function G0(t,i){return i}function k0(t,i){if(Nt){var s=rn.formState;if(s!==null){e:{var l=vt;if(Nt){if(fn){t:{for(var f=fn,h=Gi;f.nodeType!==8;){if(!h){f=null;break t}if(f=Vi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){fn=Vi(f.nextSibling),l=f.data==="F!";break e}}ls(l)}l=!1}l&&(i=s[0])}}return s=ti(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:G0,lastRenderedState:i},s.queue=l,s=og.bind(null,vt,l),l.dispatch=s,l=ed(!1),h=od.bind(null,vt,!1,l.queue),l=ti(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=KM.bind(null,vt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function V0(t){var i=Mn();return Y0(i,en,t)}function Y0(t,i,s){if(i=Jf(t,i,G0)[0],t=Ac(Da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=tl(i)}catch(b){throw b===Ir?_c:b}else l=i;i=Mn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(vt.flags|=2048,Gr(9,{destroy:void 0},QM.bind(null,f,s),null)),[l,h,t]}function QM(t,i){t.action=i}function X0(t){var i=Mn(),s=en;if(s!==null)return Y0(i,s,t);Mn(),i=i.memoizedState,s=Mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Gr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=vt.updateQueue,i===null&&(i=Tc(),vt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function W0(){return Mn().memoizedState}function Cc(t,i,s,l){var f=ti();vt.flags|=t,f.memoizedState=Gr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Rc(t,i,s,l){var f=Mn();l=l===void 0?null:l;var h=f.memoizedState.inst;en!==null&&l!==null&&Wf(l,en.memoizedState.deps)?f.memoizedState=Gr(i,h,s,l):(vt.flags|=t,f.memoizedState=Gr(1|i,h,s,l))}function q0(t,i){Cc(8390656,8,t,i)}function nd(t,i){Rc(2048,8,t,i)}function JM(t){vt.flags|=4;var i=vt.updateQueue;if(i===null)i=Tc(),vt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function j0(t){var i=Mn().memoizedState;return JM({ref:i,nextImpl:t}),function(){if((kt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Z0(t,i){return Rc(4,2,t,i)}function K0(t,i){return Rc(4,4,t,i)}function Q0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function J0(t,i,s){s=s!=null?s.concat([t]):null,Rc(4,4,Q0.bind(null,i,t),s)}function id(){}function $0(t,i){var s=Mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Wf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function eg(t,i){var s=Mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Wf(i,l[1]))return l[0];if(l=t(),er){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,i],l}function ad(t,i,s){return s===void 0||(La&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=t_(),vt.lanes|=t,_s|=t,s)}function tg(t,i,s,l){return bi(s,i)?s:Fr.current!==null?(t=ad(t,s,l),bi(t,i)||(An=!0),t):(La&42)===0||(La&1073741824)!==0&&(Ct&261930)===0?(An=!0,t.memoizedState=s):(t=t_(),vt.lanes|=t,_s|=t,i)}function ng(t,i,s,l,f){var h=q.p;q.p=h!==0&&8>h?h:8;var b=F.T,D={};F.T=D,od(t,!1,i,s);try{var X=f(),oe=F.S;if(oe!==null&&oe(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Se=qM(X,l);nl(t,i,Se,Ri(t))}else nl(t,i,l,Ri(t))}catch(Te){nl(t,i,{then:function(){},status:"rejected",reason:Te},Ri())}finally{q.p=h,b!==null&&D.types!==null&&(b.types=D.types),F.T=b}}function $M(){}function sd(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=ig(t).queue;ng(t,f,i,ne,s===null?$M:function(){return ag(t),s(l)})}function ig(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:ne},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function ag(t){var i=ig(t);i.next===null&&(i=t.alternate.memoizedState),nl(t,i.next.queue,{},Ri())}function rd(){return kn(vl)}function sg(){return Mn().memoizedState}function rg(){return Mn().memoizedState}function eb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ri();t=fs(s);var l=ds(i,t,s);l!==null&&(mi(l,i,s),Qo(l,i,s)),i={cache:Pf()},t.payload=i;return}i=i.return}}function tb(t,i,s){var l=Ri();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Lc(t)?lg(i,s):(s=Ef(t,i,s,l),s!==null&&(mi(s,t,l),cg(s,i,l)))}function og(t,i,s){var l=Ri();nl(t,i,s,l)}function nl(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Lc(t))lg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,D=h(b,s);if(f.hasEagerState=!0,f.eagerState=D,bi(D,b))return uc(t,i,f,0),rn===null&&cc(),!1}catch{}if(s=Ef(t,i,f,l),s!==null)return mi(s,t,l),cg(s,i,l),!0}return!1}function od(t,i,s,l){if(l={lane:2,revertLane:zd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Lc(t)){if(i)throw Error(a(479))}else i=Ef(t,s,l,2),i!==null&&mi(i,t,2)}function Lc(t){var i=t.alternate;return t===vt||i!==null&&i===vt}function lg(t,i){zr=bc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function cg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,vi(t,s)}}var il={readContext:kn,use:wc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};il.useEffectEvent=xn;var ug={readContext:kn,use:wc,useCallback:function(t,i){return ti().memoizedState=[t,i===void 0?null:i],t},useContext:kn,useEffect:q0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Cc(4194308,4,Q0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Cc(4194308,4,t,i)},useInsertionEffect:function(t,i){Cc(4,2,t,i)},useMemo:function(t,i){var s=ti();i=i===void 0?null:i;var l=t();if(er){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=ti();if(s!==void 0){var f=s(i);if(er){De(!0);try{s(i)}finally{De(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=tb.bind(null,vt,t),[l.memoizedState,t]},useRef:function(t){var i=ti();return t={current:t},i.memoizedState=t},useState:function(t){t=ed(t);var i=t.queue,s=og.bind(null,vt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:id,useDeferredValue:function(t,i){var s=ti();return ad(s,t,i)},useTransition:function(){var t=ed(!1);return t=ng.bind(null,vt,t.queue,!0,!1),ti().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=vt,f=ti();if(Nt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),rn===null)throw Error(a(349));(Ct&127)!==0||D0(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,q0(U0.bind(null,l,h,t),[t]),l.flags|=2048,Gr(9,{destroy:void 0},N0.bind(null,l,h,s,i),null),s},useId:function(){var t=ti(),i=rn.identifierPrefix;if(Nt){var s=ua,l=ca;s=(l&~(1<<32-Xe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Ec++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=jM++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:rd,useFormState:k0,useActionState:k0,useOptimistic:function(t){var i=ti();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=od.bind(null,vt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Qf,useCacheRefresh:function(){return ti().memoizedState=eb.bind(null,vt)},useEffectEvent:function(t){var i=ti(),s={impl:t};return i.memoizedState=s,function(){if((kt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},ld={readContext:kn,use:wc,useCallback:$0,useContext:kn,useEffect:nd,useImperativeHandle:J0,useInsertionEffect:Z0,useLayoutEffect:K0,useMemo:eg,useReducer:Ac,useRef:W0,useState:function(){return Ac(Da)},useDebugValue:id,useDeferredValue:function(t,i){var s=Mn();return tg(s,en.memoizedState,t,i)},useTransition:function(){var t=Ac(Da)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:tl(t),i]},useSyncExternalStore:L0,useId:sg,useHostTransitionStatus:rd,useFormState:V0,useActionState:V0,useOptimistic:function(t,i){var s=Mn();return I0(s,en,t,i)},useMemoCache:Qf,useCacheRefresh:rg};ld.useEffectEvent=j0;var fg={readContext:kn,use:wc,useCallback:$0,useContext:kn,useEffect:nd,useImperativeHandle:J0,useInsertionEffect:Z0,useLayoutEffect:K0,useMemo:eg,useReducer:$f,useRef:W0,useState:function(){return $f(Da)},useDebugValue:id,useDeferredValue:function(t,i){var s=Mn();return en===null?ad(s,t,i):tg(s,en.memoizedState,t,i)},useTransition:function(){var t=$f(Da)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:tl(t),i]},useSyncExternalStore:L0,useId:sg,useHostTransitionStatus:rd,useFormState:X0,useActionState:X0,useOptimistic:function(t,i){var s=Mn();return en!==null?I0(s,en,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Qf,useCacheRefresh:rg};fg.useEffectEvent=j0;function cd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:x({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ud={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ri(),f=fs(l);f.payload=i,s!=null&&(f.callback=s),i=ds(t,f,l),i!==null&&(mi(i,t,l),Qo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ri(),f=fs(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ds(t,f,l),i!==null&&(mi(i,t,l),Qo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ri(),l=fs(s);l.tag=2,i!=null&&(l.callback=i),i=ds(t,l,s),i!==null&&(mi(i,t,s),Qo(i,t,s))}};function dg(t,i,s,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!Vo(s,l)||!Vo(f,h):!0}function hg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&ud.enqueueReplaceState(i,i.state,null)}function tr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=x({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function pg(t){lc(t)}function mg(t){console.error(t)}function gg(t){lc(t)}function Dc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function _g(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function fd(t,i,s){return s=fs(s),s.tag=3,s.payload={element:null},s.callback=function(){Dc(t,i)},s}function xg(t){return t=fs(t),t.tag=3,t}function vg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){_g(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){_g(i,s,l),typeof f!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function nb(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ur(i,s,f,!0),s=Ti.current,s!==null){switch(s.tag){case 31:case 13:return ki===null?Vc():s.alternate===null&&vn===0&&(vn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===xc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Id(t,l,f)),!1;case 22:return s.flags|=65536,l===xc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Id(t,l,f)),!1}throw Error(a(435,s.tag))}return Id(t,l,f),Vc(),!1}if(Nt)return i=Ti.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Lf&&(t=Error(a(422),{cause:l}),Wo(Fi(t,s)))):(l!==Lf&&(i=Error(a(423),{cause:l}),Wo(Fi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Fi(l,s),f=fd(t.stateNode,l,f),Gf(t,f),vn!==4&&(vn=2)),!1;var h=Error(a(520),{cause:l});if(h=Fi(h,s),fl===null?fl=[h]:fl.push(h),vn!==4&&(vn=2),i===null)return!0;l=Fi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=fd(s.stateNode,l,t),Gf(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xs===null||!xs.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=xg(f),vg(f,t,s,l),Gf(s,f),!1}s=s.return}while(s!==null);return!1}var dd=Error(a(461)),An=!1;function Vn(t,i,s,l){i.child=t===null?b0(i,null,s,l):$s(i,t.child,s,l)}function yg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var b={};for(var D in l)D!=="ref"&&(b[D]=l[D])}else b=l;return Zs(i),l=qf(t,i,s,b,h,f),D=jf(),t!==null&&!An?(Zf(t,i,f),Na(t,i,f)):(Nt&&D&&Cf(i),i.flags|=1,Vn(t,i,l,f),i.child)}function Sg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Tf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,Mg(t,i,h,l,f)):(t=dc(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!yd(t,f)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:Vo,s(b,l)&&t.ref===i.ref)return Na(t,i,f)}return i.flags|=1,t=wa(h,l),t.ref=i.ref,t.return=i,i.child=t}function Mg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Vo(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,yd(t,f))(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Na(t,i,f)}return hd(t,i,s,l,f)}function bg(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return Eg(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&gc(i,h!==null?h.cachePool:null),h!==null?w0(i,h):Vf(),A0(i);else return l=i.lanes=536870912,Eg(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(gc(i,h.cachePool),w0(i,h),ps(),i.memoizedState=null):(t!==null&&gc(i,null),Vf(),ps());return Vn(t,i,f,s),i.child}function al(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Eg(t,i,s,l,f){var h=Bf();return h=h===null?null:{parent:Tn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&gc(i,null),Vf(),A0(i),t!==null&&Ur(t,i,l,!0),i.childLanes=f,null}function Nc(t,i){return i=Oc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Tg(t,i,s){return $s(i,t.child,null,s),t=Nc(i,i.pendingProps),t.flags|=2,wi(i),i.memoizedState=null,t}function ib(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Nt){if(l.mode==="hidden")return t=Nc(i,l),i.lanes=536870912,al(null,t);if(Xf(i),(t=fn)?(t=B_(t,Gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:rs!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},s=l0(t),s.return=i,i.child=s,Gn=i,fn=null)):t=null,t===null)throw ls(i);return i.lanes=536870912,null}return Nc(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(Xf(i),f)if(i.flags&256)i.flags&=-257,i=Tg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(An||Ur(t,i,s,!1),f=(s&t.childLanes)!==0,An||f){if(l=rn,l!==null&&(b=yi(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Xs(t,b),mi(l,t,b),dd;Vc(),i=Tg(t,i,s)}else t=h.treeContext,fn=Vi(b.nextSibling),Gn=i,Nt=!0,os=null,Gi=!1,t!==null&&f0(i,t),i=Nc(i,l),i.flags|=4096;return i}return t=wa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Uc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function hd(t,i,s,l,f){return Zs(i),s=qf(t,i,s,l,void 0,f),l=jf(),t!==null&&!An?(Zf(t,i,f),Na(t,i,f)):(Nt&&l&&Cf(i),i.flags|=1,Vn(t,i,s,f),i.child)}function wg(t,i,s,l,f,h){return Zs(i),i.updateQueue=null,s=R0(i,l,s,f),C0(t),l=jf(),t!==null&&!An?(Zf(t,i,h),Na(t,i,h)):(Nt&&l&&Cf(i),i.flags|=1,Vn(t,i,s,h),i.child)}function Ag(t,i,s,l,f){if(Zs(i),i.stateNode===null){var h=Rr,b=s.contextType;typeof b=="object"&&b!==null&&(h=kn(b)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=ud,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},zf(i),b=s.contextType,h.context=typeof b=="object"&&b!==null?kn(b):Rr,h.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(cd(i,s,b,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&ud.enqueueReplaceState(h,h.state,null),$o(i,l,h,f),Jo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var D=i.memoizedProps,X=tr(s,D);h.props=X;var oe=h.context,Se=s.contextType;b=Rr,typeof Se=="object"&&Se!==null&&(b=kn(Se));var Te=s.getDerivedStateFromProps;Se=typeof Te=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||oe!==b)&&hg(i,h,l,b),us=!1;var he=i.memoizedState;h.state=he,$o(i,l,h,f),Jo(),oe=i.memoizedState,D||he!==oe||us?(typeof Te=="function"&&(cd(i,s,Te,l),oe=i.memoizedState),(X=us||dg(i,s,X,l,he,oe,b))?(Se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),h.props=l,h.state=oe,h.context=b,l=X):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Hf(t,i),b=i.memoizedProps,Se=tr(s,b),h.props=Se,Te=i.pendingProps,he=h.context,oe=s.contextType,X=Rr,typeof oe=="object"&&oe!==null&&(X=kn(oe)),D=s.getDerivedStateFromProps,(oe=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==Te||he!==X)&&hg(i,h,l,X),us=!1,he=i.memoizedState,h.state=he,$o(i,l,h,f),Jo();var ge=i.memoizedState;b!==Te||he!==ge||us||t!==null&&t.dependencies!==null&&pc(t.dependencies)?(typeof D=="function"&&(cd(i,s,D,l),ge=i.memoizedState),(Se=us||dg(i,s,Se,l,he,ge,X)||t!==null&&t.dependencies!==null&&pc(t.dependencies))?(oe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ge,X),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ge,X)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ge),h.props=l,h.state=ge,h.context=X,l=Se):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Uc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=$s(i,t.child,null,f),i.child=$s(i,null,s,f)):Vn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=Na(t,i,f),t}function Cg(t,i,s,l){return qs(),i.flags|=256,Vn(t,i,s,l),i.child}var pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function md(t){return{baseLanes:t,cachePool:_0()}}function gd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ci),t}function Rg(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Nt){if(f?hs(i):ps(),(t=fn)?(t=B_(t,Gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:rs!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},s=l0(t),s.return=i,i.child=s,Gn=i,fn=null)):t=null,t===null)throw ls(i);return Jd(t)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,f?(ps(),f=i.mode,D=Oc({mode:"hidden",children:D},f),l=Ws(l,f,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=md(s),l.childLanes=gd(t,b,s),i.memoizedState=pd,al(null,l)):(hs(i),_d(i,D))}var X=t.memoizedState;if(X!==null&&(D=X.dehydrated,D!==null)){if(h)i.flags&256?(hs(i),i.flags&=-257,i=xd(t,i,s)):i.memoizedState!==null?(ps(),i.child=t.child,i.flags|=128,i=null):(ps(),D=l.fallback,f=i.mode,l=Oc({mode:"visible",children:l.children},f),D=Ws(D,f,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,$s(i,t.child,null,s),l=i.child,l.memoizedState=md(s),l.childLanes=gd(t,b,s),i.memoizedState=pd,i=al(null,l));else if(hs(i),Jd(D)){if(b=D.nextSibling&&D.nextSibling.dataset,b)var oe=b.dgst;b=oe,l=Error(a(419)),l.stack="",l.digest=b,Wo({value:l,source:null,stack:null}),i=xd(t,i,s)}else if(An||Ur(t,i,s,!1),b=(s&t.childLanes)!==0,An||b){if(b=rn,b!==null&&(l=yi(b,s),l!==0&&l!==X.retryLane))throw X.retryLane=l,Xs(t,l),mi(b,t,l),dd;Qd(D)||Vc(),i=xd(t,i,s)}else Qd(D)?(i.flags|=192,i.child=t.child,i=null):(t=X.treeContext,fn=Vi(D.nextSibling),Gn=i,Nt=!0,os=null,Gi=!1,t!==null&&f0(i,t),i=_d(i,l.children),i.flags|=4096);return i}return f?(ps(),D=l.fallback,f=i.mode,X=t.child,oe=X.sibling,l=wa(X,{mode:"hidden",children:l.children}),l.subtreeFlags=X.subtreeFlags&65011712,oe!==null?D=wa(oe,D):(D=Ws(D,f,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,al(null,l),l=i.child,D=t.child.memoizedState,D===null?D=md(s):(f=D.cachePool,f!==null?(X=Tn._currentValue,f=f.parent!==X?{parent:X,pool:X}:f):f=_0(),D={baseLanes:D.baseLanes|s,cachePool:f}),l.memoizedState=D,l.childLanes=gd(t,b,s),i.memoizedState=pd,al(t.child,l)):(hs(i),s=t.child,t=s.sibling,s=wa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function _d(t,i){return i=Oc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Oc(t,i){return t=Ei(22,t,null,i),t.lanes=0,t}function xd(t,i,s){return $s(i,t.child,null,s),t=_d(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Lg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Uf(t.return,i,s)}function vd(t,i,s,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=h)}function Dg(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=Sn.current,D=(b&2)!==0;if(D?(b=b&1|2,i.flags|=128):b&=1,ae(Sn,b),Vn(t,i,l,s),l=Nt?Xo:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,s,i);else if(t.tag===19)Lg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Mc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),vd(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Mc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}vd(i,!0,s,null,h,l);break;case"together":vd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Na(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),_s|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Ur(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=wa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=wa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function yd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&pc(t)))}function ab(t,i,s){switch(i.tag){case 3:me(i,i.stateNode.containerInfo),cs(i,Tn,t.memoizedState.cache),qs();break;case 27:case 5:ke(i);break;case 4:me(i,i.stateNode.containerInfo);break;case 10:cs(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Xf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(hs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Rg(t,i,s):(hs(i),t=Na(t,i,s),t!==null?t.sibling:null);hs(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ur(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Dg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ae(Sn,Sn.current),l)break;return null;case 22:return i.lanes=0,bg(t,i,s,i.pendingProps);case 24:cs(i,Tn,t.memoizedState.cache)}return Na(t,i,s)}function Ng(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)An=!0;else{if(!yd(t,s)&&(i.flags&128)===0)return An=!1,ab(t,i,s);An=(t.flags&131072)!==0}else An=!1,Nt&&(i.flags&1048576)!==0&&u0(i,Xo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Qs(i.elementType),i.type=t,typeof t=="function")Tf(t)?(l=tr(t,l),i.tag=1,i=Ag(null,i,t,l,s)):(i.tag=0,i=hd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){i.tag=11,i=yg(null,i,t,l,s);break e}else if(f===B){i.tag=14,i=Sg(null,i,t,l,s);break e}}throw i=se(t)||t,Error(a(306,i,""))}}return i;case 0:return hd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=tr(l,i.pendingProps),Ag(t,i,l,f,s);case 3:e:{if(me(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,Hf(t,i),$o(i,l,null,s);var b=i.memoizedState;if(l=b.cache,cs(i,Tn,l),l!==h.cache&&Of(i,[Tn],s,!0),Jo(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Cg(t,i,l,s);break e}else if(l!==f){f=Fi(Error(a(424)),i),Wo(f),i=Cg(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,fn=Vi(t.firstChild),Gn=i,Nt=!0,os=null,Gi=!0,s=b0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(qs(),l===f){i=Na(t,i,s);break e}Vn(t,i,l,s)}i=i.child}return i;case 26:return Uc(t,i),t===null?(s=V_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Nt||(s=i.type,t=i.pendingProps,l=Kc(K.current).createElement(s),l[bn]=i,l[Hn]=t,Yn(l,s,t),En(l),i.stateNode=l):i.memoizedState=V_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ke(i),t===null&&Nt&&(l=i.stateNode=H_(i.type,i.pendingProps,K.current),Gn=i,Gi=!0,f=fn,Ms(i.type)?($d=f,fn=Vi(l.firstChild)):fn=f),Vn(t,i,i.pendingProps.children,s),Uc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Nt&&((f=l=fn)&&(l=Ob(l,i.type,i.pendingProps,Gi),l!==null?(i.stateNode=l,Gn=i,fn=Vi(l.firstChild),Gi=!1,f=!0):f=!1),f||ls(i)),ke(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,jd(f,h)?l=null:b!==null&&jd(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=qf(t,i,ZM,null,null,s),vl._currentValue=f),Uc(t,i),Vn(t,i,l,s),i.child;case 6:return t===null&&Nt&&((t=s=fn)&&(s=Pb(s,i.pendingProps,Gi),s!==null?(i.stateNode=s,Gn=i,fn=null,t=!0):t=!1),t||ls(i)),null;case 13:return Rg(t,i,s);case 4:return me(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=$s(i,null,l,s):Vn(t,i,l,s),i.child;case 11:return yg(t,i,i.type,i.pendingProps,s);case 7:return Vn(t,i,i.pendingProps,s),i.child;case 8:return Vn(t,i,i.pendingProps.children,s),i.child;case 12:return Vn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,cs(i,i.type,l.value),Vn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Zs(i),f=kn(f),l=l(f),i.flags|=1,Vn(t,i,l,s),i.child;case 14:return Sg(t,i,i.type,i.pendingProps,s);case 15:return Mg(t,i,i.type,i.pendingProps,s);case 19:return Dg(t,i,s);case 31:return ib(t,i,s);case 22:return bg(t,i,s,i.pendingProps);case 24:return Zs(i),l=kn(Tn),t===null?(f=Bf(),f===null&&(f=rn,h=Pf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},zf(i),cs(i,Tn,f)):((t.lanes&s)!==0&&(Hf(t,i),$o(i,null,null,s),Jo()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),cs(i,Tn,l)):(l=h.cache,cs(i,Tn,l),l!==f.cache&&Of(i,[Tn],s,!0))),Vn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ua(t){t.flags|=4}function Sd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(s_())t.flags|=8192;else throw Js=xc,Ff}else t.flags&=-16777217}function Ug(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j_(i))if(s_())t.flags|=8192;else throw Js=xc,Ff}function Pc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ae():536870912,t.lanes|=i,Xr|=i)}function sl(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function sb(t,i,s){var l=i.pendingProps;switch(Rf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return dn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ra(Tn),Ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Nr(i)?Ua(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Df())),dn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Ua(i),h!==null?(dn(i),Ug(i,h)):(dn(i),Sd(i,f,null,l,s))):h?h!==t.memoizedState?(Ua(i),dn(i),Ug(i,h)):(dn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ua(i),dn(i),Sd(i,f,t,l,s)),null;case 27:if(Ne(i),s=K.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return dn(i),null}t=ye.current,Nr(i)?d0(i):(t=H_(f,l,s),i.stateNode=t,Ua(i))}return dn(i),null;case 5:if(Ne(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return dn(i),null}if(h=ye.current,Nr(i))d0(i);else{var b=Kc(K.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[bn]=i,h[Hn]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(Yn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ua(i)}}return dn(i),Sd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ua(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=K.current,Nr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Gn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[bn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||R_(t.nodeValue,s)),t||ls(i,!0)}else t=Kc(t).createTextNode(l),t[bn]=i,i.stateNode=t}return dn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Nr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[bn]=i}else qs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),t=!1}else s=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(wi(i),i):(wi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return dn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Nr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[bn]=i}else qs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),f=!1}else f=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(wi(i),i):(wi(i),null)}return wi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Pc(i,i.updateQueue),dn(i),null);case 4:return Ce(),t===null&&Vd(i.stateNode.containerInfo),dn(i),null;case 10:return Ra(i.type),dn(i),null;case 19:if(k(Sn),l=i.memoizedState,l===null)return dn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)sl(l,!1);else{if(vn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Mc(t),h!==null){for(i.flags|=128,sl(l,!1),t=h.updateQueue,i.updateQueue=t,Pc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)o0(s,t),s=s.sibling;return ae(Sn,Sn.current&1|2),Nt&&Aa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Gt()>Hc&&(i.flags|=128,f=!0,sl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Mc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Pc(i,t),sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Nt)return dn(i),null}else 2*Gt()-l.renderingStartTime>Hc&&s!==536870912&&(i.flags|=128,f=!0,sl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Gt(),t.sibling=null,s=Sn.current,ae(Sn,f?s&1|2:s&1),Nt&&Aa(i,l.treeForkCount),t):(dn(i),null);case 22:case 23:return wi(i),Yf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),s=i.updateQueue,s!==null&&Pc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&k(Ks),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ra(Tn),dn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function rb(t,i){switch(Rf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ra(Tn),Ce(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ne(i),null;case 31:if(i.memoizedState!==null){if(wi(i),i.alternate===null)throw Error(a(340));qs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(wi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));qs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return k(Sn),null;case 4:return Ce(),null;case 10:return Ra(i.type),null;case 22:case 23:return wi(i),Yf(),t!==null&&k(Ks),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ra(Tn),null;case 25:return null;default:return null}}function Og(t,i){switch(Rf(i),i.tag){case 3:Ra(Tn),Ce();break;case 26:case 27:case 5:Ne(i);break;case 4:Ce();break;case 31:i.memoizedState!==null&&wi(i);break;case 13:wi(i);break;case 19:k(Sn);break;case 10:Ra(i.type);break;case 22:case 23:wi(i),Yf(),t!==null&&k(Ks);break;case 24:Ra(Tn)}}function rl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==f)}}catch(D){Kt(i,i.return,D)}}function ms(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,D=b.destroy;if(D!==void 0){b.destroy=void 0,f=i;var X=s,oe=D;try{oe()}catch(Se){Kt(f,X,Se)}}}l=l.next}while(l!==h)}}catch(Se){Kt(i,i.return,Se)}}function Pg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{T0(i,s)}catch(l){Kt(t,t.return,l)}}}function Ig(t,i,s){s.props=tr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Kt(t,i,l)}}function ol(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Kt(t,i,f)}}function fa(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Kt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Kt(t,i,f)}else s.current=null}function Bg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Kt(t,t.return,f)}}function Md(t,i,s){try{var l=t.stateNode;Cb(l,t.type,s,i),l[Hn]=i}catch(f){Kt(t,t.return,f)}}function Fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ms(t.type)||t.tag===4}function bd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ms(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ea));else if(l!==4&&(l===27&&Ms(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Ed(t,i,s),t=t.sibling;t!==null;)Ed(t,i,s),t=t.sibling}function Ic(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ms(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ic(t,i,s),t=t.sibling;t!==null;)Ic(t,i,s),t=t.sibling}function zg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Yn(i,l,s),i[bn]=t,i[Hn]=s}catch(h){Kt(t,t.return,h)}}var Oa=!1,Cn=!1,Td=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,On=null;function ob(t,i){if(t=t.containerInfo,Wd=iu,t=Jm(t),xf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,D=-1,X=-1,oe=0,Se=0,Te=t,he=null;t:for(;;){for(var ge;Te!==s||f!==0&&Te.nodeType!==3||(D=b+f),Te!==h||l!==0&&Te.nodeType!==3||(X=b+l),Te.nodeType===3&&(b+=Te.nodeValue.length),(ge=Te.firstChild)!==null;)he=Te,Te=ge;for(;;){if(Te===t)break t;if(he===s&&++oe===f&&(D=b),he===h&&++Se===l&&(X=b),(ge=Te.nextSibling)!==null)break;Te=he,he=Te.parentNode}Te=ge}s=D===-1||X===-1?null:{start:D,end:X}}else s=null}s=s||{start:0,end:0}}else s=null;for(qd={focusedElem:t,selectionRange:s},iu=!1,On=i;On!==null;)if(i=On,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,On=t;else for(;On!==null;){switch(i=On,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var $e=tr(s.type,f);t=l.getSnapshotBeforeUpdate($e,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(ft){Kt(s,s.return,ft)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Kd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,On=t;break}On=i.return}}function Gg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ia(t,s),l&4&&rl(5,s);break;case 1:if(Ia(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){Kt(s,s.return,b)}else{var f=tr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Kt(s,s.return,b)}}l&64&&Pg(s),l&512&&ol(s,s.return);break;case 3:if(Ia(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{T0(t,i)}catch(b){Kt(s,s.return,b)}}break;case 27:i===null&&l&4&&zg(s);case 26:case 5:Ia(t,s),i===null&&l&4&&Bg(s),l&512&&ol(s,s.return);break;case 12:Ia(t,s);break;case 31:Ia(t,s),l&4&&Yg(t,s);break;case 13:Ia(t,s),l&4&&Xg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=gb.bind(null,s),Ib(t,s))));break;case 22:if(l=s.memoizedState!==null||Oa,!l){i=i!==null&&i.memoizedState!==null||Cn,f=Oa;var h=Cn;Oa=l,(Cn=i)&&!h?Ba(t,s,(s.subtreeFlags&8772)!==0):Ia(t,s),Oa=f,Cn=h}break;case 30:break;default:Ia(t,s)}}function kg(t){var i=t.alternate;i!==null&&(t.alternate=null,kg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ns(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _n=null,fi=!1;function Pa(t,i,s){for(s=s.child;s!==null;)Vg(t,i,s),s=s.sibling}function Vg(t,i,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(xe,s)}catch{}switch(s.tag){case 26:Cn||fa(s,i),Pa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Cn||fa(s,i);var l=_n,f=fi;Ms(s.type)&&(_n=s.stateNode,fi=!1),Pa(t,i,s),gl(s.stateNode),_n=l,fi=f;break;case 5:Cn||fa(s,i);case 6:if(l=_n,f=fi,_n=null,Pa(t,i,s),_n=l,fi=f,_n!==null)if(fi)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(s.stateNode)}catch(h){Kt(s,i,h)}else try{_n.removeChild(s.stateNode)}catch(h){Kt(s,i,h)}break;case 18:_n!==null&&(fi?(t=_n,P_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),$r(t)):P_(_n,s.stateNode));break;case 4:l=_n,f=fi,_n=s.stateNode.containerInfo,fi=!0,Pa(t,i,s),_n=l,fi=f;break;case 0:case 11:case 14:case 15:ms(2,s,i),Cn||ms(4,s,i),Pa(t,i,s);break;case 1:Cn||(fa(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Ig(s,i,l)),Pa(t,i,s);break;case 21:Pa(t,i,s);break;case 22:Cn=(l=Cn)||s.memoizedState!==null,Pa(t,i,s),Cn=l;break;default:Pa(t,i,s)}}function Yg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{$r(t)}catch(s){Kt(i,i.return,s)}}}function Xg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$r(t)}catch(s){Kt(i,i.return,s)}}function lb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Hg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Hg),i;default:throw Error(a(435,t.tag))}}function Bc(t,i){var s=lb(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=_b.bind(null,t,l);l.then(f,f)}})}function di(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,b=i,D=b;e:for(;D!==null;){switch(D.tag){case 27:if(Ms(D.type)){_n=D.stateNode,fi=!1;break e}break;case 5:_n=D.stateNode,fi=!1;break e;case 3:case 4:_n=D.stateNode.containerInfo,fi=!0;break e}D=D.return}if(_n===null)throw Error(a(160));Vg(h,b,f),_n=null,fi=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Wg(i,t),i=i.sibling}var Ki=null;function Wg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:di(i,t),hi(t),l&4&&(ms(3,t,t.return),rl(3,t),ms(5,t,t.return));break;case 1:di(i,t),hi(t),l&512&&(Cn||s===null||fa(s,s.return)),l&64&&Oa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ki;if(di(i,t),hi(t),l&512&&(Cn||s===null||fa(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[ts]||h[bn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Yn(h,l,s),h[bn]=t,En(h),l=h;break e;case"link":var b=W_("link","href",f).get(l+(s.href||""));if(b){for(var D=0;D<b.length;D++)if(h=b[D],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(D,1);break t}}h=f.createElement(l),Yn(h,l,s),f.head.appendChild(h);break;case"meta":if(b=W_("meta","content",f).get(l+(s.content||""))){for(D=0;D<b.length;D++)if(h=b[D],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(D,1);break t}}h=f.createElement(l),Yn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[bn]=t,En(h),l=h}t.stateNode=l}else q_(f,t.type,t.stateNode);else t.stateNode=X_(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?q_(f,t.type,t.stateNode):X_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Md(t,t.memoizedProps,s.memoizedProps)}break;case 27:di(i,t),hi(t),l&512&&(Cn||s===null||fa(s,s.return)),s!==null&&l&4&&Md(t,t.memoizedProps,s.memoizedProps);break;case 5:if(di(i,t),hi(t),l&512&&(Cn||s===null||fa(s,s.return)),t.flags&32){f=t.stateNode;try{Mi(f,"")}catch($e){Kt(t,t.return,$e)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Md(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Td=!0);break;case 6:if(di(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch($e){Kt(t,t.return,$e)}}break;case 3:if($c=null,f=Ki,Ki=Qc(i.containerInfo),di(i,t),Ki=f,hi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{$r(i.containerInfo)}catch($e){Kt(t,t.return,$e)}Td&&(Td=!1,qg(t));break;case 4:l=Ki,Ki=Qc(t.stateNode.containerInfo),di(i,t),hi(t),Ki=l;break;case 12:di(i,t),hi(t);break;case 31:di(i,t),hi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Bc(t,l)));break;case 13:di(i,t),hi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(zc=Gt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Bc(t,l)));break;case 22:f=t.memoizedState!==null;var X=s!==null&&s.memoizedState!==null,oe=Oa,Se=Cn;if(Oa=oe||f,Cn=Se||X,di(i,t),Cn=Se,Oa=oe,hi(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||X||Oa||Cn||nr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){X=s=i;try{if(h=X.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{D=X.stateNode;var Te=X.memoizedProps.style,he=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;D.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch($e){Kt(X,X.return,$e)}}}else if(i.tag===6){if(s===null){X=i;try{X.stateNode.nodeValue=f?"":X.memoizedProps}catch($e){Kt(X,X.return,$e)}}}else if(i.tag===18){if(s===null){X=i;try{var ge=X.stateNode;f?I_(ge,!0):I_(X.stateNode,!1)}catch($e){Kt(X,X.return,$e)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Bc(t,s))));break;case 19:di(i,t),hi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Bc(t,l)));break;case 30:break;case 21:break;default:di(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Fg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=bd(t);Ic(t,h,f);break;case 5:var b=s.stateNode;s.flags&32&&(Mi(b,""),s.flags&=-33);var D=bd(t);Ic(t,D,b);break;case 3:case 4:var X=s.stateNode.containerInfo,oe=bd(t);Ed(t,oe,X);break;default:throw Error(a(161))}}catch(Se){Kt(t,t.return,Se)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;qg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ia(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Gg(t,i.alternate,i),i=i.sibling}function nr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ms(4,i,i.return),nr(i);break;case 1:fa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ig(i,i.return,s),nr(i);break;case 27:gl(i.stateNode);case 26:case 5:fa(i,i.return),nr(i);break;case 22:i.memoizedState===null&&nr(i);break;case 30:nr(i);break;default:nr(i)}t=t.sibling}}function Ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:Ba(f,h,s),rl(4,h);break;case 1:if(Ba(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Kt(l,l.return,oe)}if(l=h,f=l.updateQueue,f!==null){var D=l.stateNode;try{var X=f.shared.hiddenCallbacks;if(X!==null)for(f.shared.hiddenCallbacks=null,f=0;f<X.length;f++)E0(X[f],D)}catch(oe){Kt(l,l.return,oe)}}s&&b&64&&Pg(h),ol(h,h.return);break;case 27:zg(h);case 26:case 5:Ba(f,h,s),s&&l===null&&b&4&&Bg(h),ol(h,h.return);break;case 12:Ba(f,h,s);break;case 31:Ba(f,h,s),s&&b&4&&Yg(f,h);break;case 13:Ba(f,h,s),s&&b&4&&Xg(f,h);break;case 22:h.memoizedState===null&&Ba(f,h,s),ol(h,h.return);break;case 30:break;default:Ba(f,h,s)}i=i.sibling}}function wd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&qo(s))}function Ad(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t))}function Qi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jg(t,i,s,l),i=i.sibling}function jg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Qi(t,i,s,l),f&2048&&rl(9,i);break;case 1:Qi(t,i,s,l);break;case 3:Qi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t)));break;case 12:if(f&2048){Qi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,D=h.onPostCommit;typeof D=="function"&&D(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(X){Kt(i,i.return,X)}}else Qi(t,i,s,l);break;case 31:Qi(t,i,s,l);break;case 13:Qi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?Qi(t,i,s,l):ll(t,i):h._visibility&2?Qi(t,i,s,l):(h._visibility|=2,kr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&wd(b,i);break;case 24:Qi(t,i,s,l),f&2048&&Ad(i.alternate,i);break;default:Qi(t,i,s,l)}}function kr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,D=s,X=l,oe=b.flags;switch(b.tag){case 0:case 11:case 15:kr(h,b,D,X,f),rl(8,b);break;case 23:break;case 22:var Se=b.stateNode;b.memoizedState!==null?Se._visibility&2?kr(h,b,D,X,f):ll(h,b):(Se._visibility|=2,kr(h,b,D,X,f)),f&&oe&2048&&wd(b.alternate,b);break;case 24:kr(h,b,D,X,f),f&&oe&2048&&Ad(b.alternate,b);break;default:kr(h,b,D,X,f)}i=i.sibling}}function ll(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:ll(s,l),f&2048&&wd(l.alternate,l);break;case 24:ll(s,l),f&2048&&Ad(l.alternate,l);break;default:ll(s,l)}i=i.sibling}}var cl=8192;function Vr(t,i,s){if(t.subtreeFlags&cl)for(t=t.child;t!==null;)Zg(t,i,s),t=t.sibling}function Zg(t,i,s){switch(t.tag){case 26:Vr(t,i,s),t.flags&cl&&t.memoizedState!==null&&jb(s,Ki,t.memoizedState,t.memoizedProps);break;case 5:Vr(t,i,s);break;case 3:case 4:var l=Ki;Ki=Qc(t.stateNode.containerInfo),Vr(t,i,s),Ki=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=cl,cl=16777216,Vr(t,i,s),cl=l):Vr(t,i,s));break;default:Vr(t,i,s)}}function Kg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ul(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];On=l,Jg(l,t)}Kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qg(t),t=t.sibling}function Qg(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&ms(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Fc(t)):ul(t);break;default:ul(t)}}function Fc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];On=l,Jg(l,t)}Kg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ms(8,i,i.return),Fc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Fc(i));break;default:Fc(i)}t=t.sibling}}function Jg(t,i){for(;On!==null;){var s=On;switch(s.tag){case 0:case 11:case 15:ms(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,On=l;else e:for(s=t;On!==null;){l=On;var f=l.sibling,h=l.return;if(kg(l),l===s){On=null;break e}if(f!==null){f.return=h,On=f;break e}On=h}}}var cb={getCacheForType:function(t){var i=kn(Tn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return kn(Tn).controller.signal}},ub=typeof WeakMap=="function"?WeakMap:Map,kt=0,rn=null,Tt=null,Ct=0,Zt=0,Ai=null,gs=!1,Yr=!1,Cd=!1,Fa=0,vn=0,_s=0,ir=0,Rd=0,Ci=0,Xr=0,fl=null,pi=null,Ld=!1,zc=0,$g=0,Hc=1/0,Gc=null,xs=null,Dn=0,vs=null,Wr=null,za=0,Dd=0,Nd=null,e_=null,dl=0,Ud=null;function Ri(){return(kt&2)!==0&&Ct!==0?Ct&-Ct:F.T!==null?zd():Po()}function t_(){if(Ci===0)if((Ct&536870912)===0||Nt){var t=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),Ci=t}else Ci=536870912;return t=Ti.current,t!==null&&(t.flags|=32),Ci}function mi(t,i,s){(t===rn&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)&&(qr(t,0),ys(t,Ct,Ci,!1)),Ze(t,s),((kt&2)===0||t!==rn)&&(t===rn&&((kt&2)===0&&(ir|=s),vn===4&&ys(t,Ct,Ci,!1)),da(t))}function n_(t,i,s){if((kt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=l?hb(t,i):Pd(t,i,!0),h=l;do{if(f===0){Yr&&!l&&ys(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!fb(s)){f=Pd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var D=t;f=fl;var X=D.current.memoizedState.isDehydrated;if(X&&(qr(D,b).flags|=256),b=Pd(D,b,!1),b!==2){if(Cd&&!X){D.errorRecoveryDisabledLanes|=h,ir|=h,f=4;break e}h=pi,pi=f,h!==null&&(pi===null?pi=h:pi.push.apply(pi,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){qr(t,0),ys(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ys(l,i,Ci,!gs);break e;case 2:pi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=zc+300-Gt(),10<f)){if(ys(l,i,Ci,!gs),Me(l,0,!0)!==0)break e;za=i,l.timeoutHandle=U_(i_.bind(null,l,s,pi,Gc,Ld,i,Ci,ir,Xr,gs,h,"Throttled",-0,0),f);break e}i_(l,s,pi,Gc,Ld,i,Ci,ir,Xr,gs,h,null,-0,0)}}break}while(!0);da(t)}function i_(t,i,s,l,f,h,b,D,X,oe,Se,Te,he,ge){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ea},Zg(i,h,Te);var $e=(h&62914560)===h?zc-Gt():(h&4194048)===h?$g-Gt():0;if($e=Zb(Te,$e),$e!==null){za=h,t.cancelPendingCommit=$e(f_.bind(null,t,i,h,s,l,f,b,D,X,Se,Te,null,he,ge)),ys(t,h,b,!oe);return}}f_(t,i,h,s,l,f,b,D,X)}function fb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!bi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ys(t,i,s,l){i&=~Rd,i&=~ir,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-Xe(f),b=1<<h;l[h]=-1,f&=~b}s!==0&&Xt(t,s,i)}function kc(){return(kt&6)===0?(hl(0),!1):!0}function Od(){if(Tt!==null){if(Zt===0)var t=Tt.return;else t=Tt,Ca=js=null,Kf(t),Br=null,Zo=0,t=Tt;for(;t!==null;)Og(t.alternate,t),t=t.return;Tt=null}}function qr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Db(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),za=0,Od(),rn=t,Tt=s=wa(t.current,null),Ct=i,Zt=0,Ai=null,gs=!1,Yr=Ue(t,i),Cd=!1,Xr=Ci=Rd=ir=_s=vn=0,pi=fl=null,Ld=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Xe(l),h=1<<f;i|=t[f],l&=~h}return Fa=i,cc(),s}function a_(t,i){vt=null,F.H=il,i===Ir||i===_c?(i=y0(),Zt=3):i===Ff?(i=y0(),Zt=4):Zt=i===dd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ai=i,Tt===null&&(vn=1,Dc(t,Fi(i,t.current)))}function s_(){var t=Ti.current;return t===null?!0:(Ct&4194048)===Ct?ki===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===ki:!1}function r_(){var t=F.H;return F.H=il,t===null?il:t}function o_(){var t=F.A;return F.A=cb,t}function Vc(){vn=4,gs||(Ct&4194048)!==Ct&&Ti.current!==null||(Yr=!0),(_s&134217727)===0&&(ir&134217727)===0||rn===null||ys(rn,Ct,Ci,!1)}function Pd(t,i,s){var l=kt;kt|=2;var f=r_(),h=o_();(rn!==t||Ct!==i)&&(Gc=null,qr(t,i)),i=!1;var b=vn;e:do try{if(Zt!==0&&Tt!==null){var D=Tt,X=Ai;switch(Zt){case 8:Od(),b=6;break e;case 3:case 2:case 9:case 6:Ti.current===null&&(i=!0);var oe=Zt;if(Zt=0,Ai=null,jr(t,D,X,oe),s&&Yr){b=0;break e}break;default:oe=Zt,Zt=0,Ai=null,jr(t,D,X,oe)}}db(),b=vn;break}catch(Se){a_(t,Se)}while(!0);return i&&t.shellSuspendCounter++,Ca=js=null,kt=l,F.H=f,F.A=h,Tt===null&&(rn=null,Ct=0,cc()),b}function db(){for(;Tt!==null;)l_(Tt)}function hb(t,i){var s=kt;kt|=2;var l=r_(),f=o_();rn!==t||Ct!==i?(Gc=null,Hc=Gt()+500,qr(t,i)):Yr=Ue(t,i);e:do try{if(Zt!==0&&Tt!==null){i=Tt;var h=Ai;t:switch(Zt){case 1:Zt=0,Ai=null,jr(t,i,h,1);break;case 2:case 9:if(x0(h)){Zt=0,Ai=null,c_(i);break}i=function(){Zt!==2&&Zt!==9||rn!==t||(Zt=7),da(t)},h.then(i,i);break e;case 3:Zt=7;break e;case 4:Zt=5;break e;case 7:x0(h)?(Zt=0,Ai=null,c_(i)):(Zt=0,Ai=null,jr(t,i,h,7));break;case 5:var b=null;switch(Tt.tag){case 26:b=Tt.memoizedState;case 5:case 27:var D=Tt;if(b?j_(b):D.stateNode.complete){Zt=0,Ai=null;var X=D.sibling;if(X!==null)Tt=X;else{var oe=D.return;oe!==null?(Tt=oe,Yc(oe)):Tt=null}break t}}Zt=0,Ai=null,jr(t,i,h,5);break;case 6:Zt=0,Ai=null,jr(t,i,h,6);break;case 8:Od(),vn=6;break e;default:throw Error(a(462))}}pb();break}catch(Se){a_(t,Se)}while(!0);return Ca=js=null,F.H=l,F.A=f,kt=s,Tt!==null?0:(rn=null,Ct=0,cc(),vn)}function pb(){for(;Tt!==null&&!an();)l_(Tt)}function l_(t){var i=Ng(t.alternate,t,Fa);t.memoizedProps=t.pendingProps,i===null?Yc(t):Tt=i}function c_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=wg(s,i,i.pendingProps,i.type,void 0,Ct);break;case 11:i=wg(s,i,i.pendingProps,i.type.render,i.ref,Ct);break;case 5:Kf(i);default:Og(s,i),i=Tt=o0(i,Fa),i=Ng(s,i,Fa)}t.memoizedProps=t.pendingProps,i===null?Yc(t):Tt=i}function jr(t,i,s,l){Ca=js=null,Kf(i),Br=null,Zo=0;var f=i.return;try{if(nb(t,f,i,s,Ct)){vn=1,Dc(t,Fi(s,t.current)),Tt=null;return}}catch(h){if(f!==null)throw Tt=f,h;vn=1,Dc(t,Fi(s,t.current)),Tt=null;return}i.flags&32768?(Nt||l===1?t=!0:Yr||(Ct&536870912)!==0?t=!1:(gs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ti.current,l!==null&&l.tag===13&&(l.flags|=16384))),u_(i,t)):Yc(i)}function Yc(t){var i=t;do{if((i.flags&32768)!==0){u_(i,gs);return}t=i.return;var s=sb(i.alternate,i,Fa);if(s!==null){Tt=s;return}if(i=i.sibling,i!==null){Tt=i;return}Tt=i=t}while(i!==null);vn===0&&(vn=5)}function u_(t,i){do{var s=rb(t.alternate,t);if(s!==null){s.flags&=32767,Tt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=s}while(t!==null);vn=6,Tt=null}function f_(t,i,s,l,f,h,b,D,X){t.cancelPendingCommit=null;do Xc();while(Dn!==0);if((kt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=bf,pn(t,s,h,b,D,X),t===rn&&(Tt=rn=null,Ct=0),Wr=i,vs=t,za=s,Dd=h,Nd=f,e_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xb(te,function(){return g_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=q.p,q.p=2,b=kt,kt|=4;try{ob(t,i,s)}finally{kt=b,q.p=f,F.T=l}}Dn=1,d_(),h_(),p_()}}function d_(){if(Dn===1){Dn=0;var t=vs,i=Wr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=q.p;q.p=2;var f=kt;kt|=4;try{Wg(i,t);var h=qd,b=Jm(t.containerInfo),D=h.focusedElem,X=h.selectionRange;if(b!==D&&D&&D.ownerDocument&&Qm(D.ownerDocument.documentElement,D)){if(X!==null&&xf(D)){var oe=X.start,Se=X.end;if(Se===void 0&&(Se=oe),"selectionStart"in D)D.selectionStart=oe,D.selectionEnd=Math.min(Se,D.value.length);else{var Te=D.ownerDocument||document,he=Te&&Te.defaultView||window;if(he.getSelection){var ge=he.getSelection(),$e=D.textContent.length,ft=Math.min(X.start,$e),nn=X.end===void 0?ft:Math.min(X.end,$e);!ge.extend&&ft>nn&&(b=nn,nn=ft,ft=b);var ee=Km(D,ft),j=Km(D,nn);if(ee&&j&&(ge.rangeCount!==1||ge.anchorNode!==ee.node||ge.anchorOffset!==ee.offset||ge.focusNode!==j.node||ge.focusOffset!==j.offset)){var re=Te.createRange();re.setStart(ee.node,ee.offset),ge.removeAllRanges(),ft>nn?(ge.addRange(re),ge.extend(j.node,j.offset)):(re.setEnd(j.node,j.offset),ge.addRange(re))}}}}for(Te=[],ge=D;ge=ge.parentNode;)ge.nodeType===1&&Te.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Te.length;D++){var be=Te[D];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}iu=!!Wd,qd=Wd=null}finally{kt=f,q.p=l,F.T=s}}t.current=i,Dn=2}}function h_(){if(Dn===2){Dn=0;var t=vs,i=Wr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=q.p;q.p=2;var f=kt;kt|=4;try{Gg(t,i.alternate,i)}finally{kt=f,q.p=l,F.T=s}}Dn=3}}function p_(){if(Dn===4||Dn===3){Dn=0,Q();var t=vs,i=Wr,s=za,l=e_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Dn=5:(Dn=0,Wr=vs=null,m_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(xs=null),Oo(s),i=i.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(xe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=q.p,q.p=2,F.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var D=l[b];h(D.value,{componentStack:D.stack})}}finally{F.T=i,q.p=f}}(za&3)!==0&&Xc(),da(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Ud?dl++:(dl=0,Ud=t):dl=0,hl(0)}}function m_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,qo(i)))}function Xc(){return d_(),h_(),p_(),g_()}function g_(){if(Dn!==5)return!1;var t=vs,i=Dd;Dd=0;var s=Oo(za),l=F.T,f=q.p;try{q.p=32>s?32:s,F.T=null,s=Nd,Nd=null;var h=vs,b=za;if(Dn=0,Wr=vs=null,za=0,(kt&6)!==0)throw Error(a(331));var D=kt;if(kt|=4,Qg(h.current),jg(h,h.current,b,s),kt=D,hl(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(xe,h)}catch{}return!0}finally{q.p=f,F.T=l,m_(t,i)}}function __(t,i,s){i=Fi(s,i),i=fd(t.stateNode,i,2),t=ds(t,i,2),t!==null&&(Ze(t,2),da(t))}function Kt(t,i,s){if(t.tag===3)__(t,t,s);else for(;i!==null;){if(i.tag===3){__(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xs===null||!xs.has(l))){t=Fi(s,t),s=xg(2),l=ds(i,s,2),l!==null&&(vg(s,l,i,t),Ze(l,2),da(l));break}}i=i.return}}function Id(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new ub;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Cd=!0,f.add(s),t=mb.bind(null,t,i,s),i.then(t,t))}function mb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,rn===t&&(Ct&s)===s&&(vn===4||vn===3&&(Ct&62914560)===Ct&&300>Gt()-zc?(kt&2)===0&&qr(t,0):Rd|=s,Xr===Ct&&(Xr=0)),da(t)}function x_(t,i){i===0&&(i=Ae()),t=Xs(t,i),t!==null&&(Ze(t,i),da(t))}function gb(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),x_(t,s)}function _b(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),x_(t,s)}function xb(t,i){return Dt(t,i)}var Wc=null,Zr=null,Bd=!1,qc=!1,Fd=!1,Ss=0;function da(t){t!==Zr&&t.next===null&&(Zr===null?Wc=Zr=t:Zr=Zr.next=t),qc=!0,Bd||(Bd=!0,yb())}function hl(t,i){if(!Fd&&qc){Fd=!0;do for(var s=!1,l=Wc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,D=l.pingedLanes;h=(1<<31-Xe(42|t)+1)-1,h&=f&~(b&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,M_(l,h))}else h=Ct,h=Me(l,l===rn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ue(l,h)||(s=!0,M_(l,h));l=l.next}while(s);Fd=!1}}function vb(){v_()}function v_(){qc=Bd=!1;var t=0;Ss!==0&&Lb()&&(t=Ss);for(var i=Gt(),s=null,l=Wc;l!==null;){var f=l.next,h=y_(l,i);h===0?(l.next=null,s===null?Wc=f:s.next=f,f===null&&(Zr=s)):(s=l,(t!==0||(h&3)!==0)&&(qc=!0)),l=f}Dn!==0&&Dn!==5||hl(t),Ss!==0&&(Ss=0)}function y_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-Xe(h),D=1<<b,X=f[b];X===-1?((D&s)===0||(D&l)!==0)&&(f[b]=Ge(D,i)):X<=i&&(t.expiredLanes|=D),h&=~D}if(i=rn,s=Ct,s=Me(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ut(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ut(l),Oo(s)){case 2:case 8:s=w;break;case 32:s=te;break;case 268435456:s=_e;break;default:s=te}return l=S_.bind(null,t),s=Dt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ut(l),t.callbackPriority=2,t.callbackNode=null,2}function S_(t,i){if(Dn!==0&&Dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Xc()&&t.callbackNode!==s)return null;var l=Ct;return l=Me(t,t===rn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(n_(t,l,i),y_(t,Gt()),t.callbackNode!=null&&t.callbackNode===s?S_.bind(null,t):null)}function M_(t,i){if(Xc())return null;n_(t,i,!0)}function yb(){Nb(function(){(kt&6)!==0?Dt(z,vb):v_()})}function zd(){if(Ss===0){var t=Or;t===0&&(t=st,st<<=1,(st&261888)===0&&(st=256)),Ss=t}return Ss}function b_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gs(""+t)}function E_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Sb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=b_((f[Hn]||null).action),b=l.submitter;b&&(i=(i=b[Hn]||null)?b_(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var D=new sc("action","action",null,l,f);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ss!==0){var X=b?E_(f,b):new FormData(f);sd(s,{pending:!0,data:X,method:f.method,action:h},null,X)}}else typeof h=="function"&&(D.preventDefault(),X=b?E_(f,b):new FormData(f),sd(s,{pending:!0,data:X,method:f.method,action:h},h,X))},currentTarget:f}]})}}for(var Hd=0;Hd<Mf.length;Hd++){var Gd=Mf[Hd],Mb=Gd.toLowerCase(),bb=Gd[0].toUpperCase()+Gd.slice(1);Zi(Mb,"on"+bb)}Zi(t0,"onAnimationEnd"),Zi(n0,"onAnimationIteration"),Zi(i0,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(zM,"onTransitionRun"),Zi(HM,"onTransitionStart"),Zi(GM,"onTransitionCancel"),Zi(a0,"onTransitionEnd"),de("onMouseEnter",["mouseout","mouseover"]),de("onMouseLeave",["mouseout","mouseover"]),de("onPointerEnter",["pointerout","pointerover"]),de("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function T_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var D=l[b],X=D.instance,oe=D.currentTarget;if(D=D.listener,X!==h&&f.isPropagationStopped())break e;h=D,f.currentTarget=oe;try{h(f)}catch(Se){lc(Se)}f.currentTarget=null,h=X}else for(b=0;b<l.length;b++){if(D=l[b],X=D.instance,oe=D.currentTarget,D=D.listener,X!==h&&f.isPropagationStopped())break e;h=D,f.currentTarget=oe;try{h(f)}catch(Se){lc(Se)}f.currentTarget=null,h=X}}}}function wt(t,i){var s=i[Fs];s===void 0&&(s=i[Fs]=new Set);var l=t+"__bubble";s.has(l)||(w_(i,t,2,!1),s.add(l))}function kd(t,i,s){var l=0;i&&(l|=4),w_(s,t,l,i)}var jc="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[jc]){t[jc]=!0,tc.forEach(function(s){s!=="selectionchange"&&(Eb.has(s)||kd(s,!1,t),kd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[jc]||(i[jc]=!0,kd("selectionchange",!1,i))}}function w_(t,i,s,l){switch(tx(i)){case 2:var f=Jb;break;case 8:f=$b;break;default:f=ah}s=f.bind(null,i,s,t),f=void 0,!cf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Yd(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var D=l.stateNode.containerInfo;if(D===f)break;if(b===4)for(b=l.return;b!==null;){var X=b.tag;if((X===3||X===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;D!==null;){if(b=Ma(D),b===null)return;if(X=b.tag,X===5||X===6||X===26||X===27){l=h=b;continue e}D=D.parentNode}}l=l.return}Dm(function(){var oe=h,Se=of(s),Te=[];e:{var he=s0.get(t);if(he!==void 0){var ge=sc,$e=t;switch(t){case"keypress":if(ic(s)===0)break e;case"keydown":case"keyup":ge=_M;break;case"focusin":$e="focus",ge=hf;break;case"focusout":$e="blur",ge=hf;break;case"beforeblur":case"afterblur":ge=hf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=sM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=yM;break;case t0:case n0:case i0:ge=lM;break;case a0:ge=MM;break;case"scroll":case"scrollend":ge=iM;break;case"wheel":ge=EM;break;case"copy":case"cut":case"paste":ge=uM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Im;break;case"toggle":case"beforetoggle":ge=wM}var ft=(i&4)!==0,nn=!ft&&(t==="scroll"||t==="scrollend"),ee=ft?he!==null?he+"Capture":null:he;ft=[];for(var j=oe,re;j!==null;){var be=j;if(re=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||re===null||ee===null||(be=Io(j,ee),be!=null&&ft.push(ml(j,be,re))),nn)break;j=j.return}0<ft.length&&(he=new ge(he,$e,null,s,Se),Te.push({event:he,listeners:ft}))}}if((i&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",he&&s!==rf&&($e=s.relatedTarget||s.fromElement)&&(Ma($e)||$e[ci]))break e;if((ge||he)&&(he=Se.window===Se?Se:(he=Se.ownerDocument)?he.defaultView||he.parentWindow:window,ge?($e=s.relatedTarget||s.toElement,ge=oe,$e=$e?Ma($e):null,$e!==null&&(nn=c($e),ft=$e.tag,$e!==nn||ft!==5&&ft!==27&&ft!==6)&&($e=null)):(ge=null,$e=oe),ge!==$e)){if(ft=Om,be="onMouseLeave",ee="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ft=Im,be="onPointerLeave",ee="onPointerEnter",j="pointer"),nn=ge==null?he:Hs(ge),re=$e==null?he:Hs($e),he=new ft(be,j+"leave",ge,s,Se),he.target=nn,he.relatedTarget=re,be=null,Ma(Se)===oe&&(ft=new ft(ee,j+"enter",$e,s,Se),ft.target=re,ft.relatedTarget=nn,be=ft),nn=be,ge&&$e)t:{for(ft=Tb,ee=ge,j=$e,re=0,be=ee;be;be=ft(be))re++;be=0;for(var ot=j;ot;ot=ft(ot))be++;for(;0<re-be;)ee=ft(ee),re--;for(;0<be-re;)j=ft(j),be--;for(;re--;){if(ee===j||j!==null&&ee===j.alternate){ft=ee;break t}ee=ft(ee),j=ft(j)}ft=null}else ft=null;ge!==null&&A_(Te,he,ge,ft,!1),$e!==null&&nn!==null&&A_(Te,nn,$e,ft,!0)}}e:{if(he=oe?Hs(oe):window,ge=he.nodeName&&he.nodeName.toLowerCase(),ge==="select"||ge==="input"&&he.type==="file")var Ft=Ym;else if(km(he))if(Xm)Ft=IM;else{Ft=OM;var tt=UM}else ge=he.nodeName,!ge||ge.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?oe&&Vt(oe.elementType)&&(Ft=Ym):Ft=PM;if(Ft&&(Ft=Ft(t,oe))){Vm(Te,Ft,s,Se);break e}tt&&tt(t,he,oe),t==="focusout"&&oe&&he.type==="number"&&oe.memoizedProps.value!=null&&Et(he,"number",he.value)}switch(tt=oe?Hs(oe):window,t){case"focusin":(km(tt)||tt.contentEditable==="true")&&(wr=tt,vf=oe,Yo=null);break;case"focusout":Yo=vf=wr=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,$m(Te,s,Se);break;case"selectionchange":if(FM)break;case"keydown":case"keyup":$m(Te,s,Se)}var yt;if(mf)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else Tr?Hm(t,s)&&(Rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(Bm&&s.locale!=="ko"&&(Tr||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&Tr&&(yt=Nm()):(ss=Se,uf="value"in ss?ss.value:ss.textContent,Tr=!0)),tt=Zc(oe,Rt),0<tt.length&&(Rt=new Pm(Rt,t,null,s,Se),Te.push({event:Rt,listeners:tt}),yt?Rt.data=yt:(yt=Gm(s),yt!==null&&(Rt.data=yt)))),(yt=CM?RM(t,s):LM(t,s))&&(Rt=Zc(oe,"onBeforeInput"),0<Rt.length&&(tt=new Pm("onBeforeInput","beforeinput",null,s,Se),Te.push({event:tt,listeners:Rt}),tt.data=yt)),Sb(Te,t,oe,s,Se)}T_(Te,i)})}function ml(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Zc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Io(t,s),f!=null&&l.unshift(ml(t,f,h)),f=Io(t,i),f!=null&&l.push(ml(t,f,h))),t.tag===3)return l;t=t.return}return[]}function Tb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function A_(t,i,s,l,f){for(var h=i._reactName,b=[];s!==null&&s!==l;){var D=s,X=D.alternate,oe=D.stateNode;if(D=D.tag,X!==null&&X===l)break;D!==5&&D!==26&&D!==27||oe===null||(X=oe,f?(oe=Io(s,h),oe!=null&&b.unshift(ml(s,oe,X))):f||(oe=Io(s,h),oe!=null&&b.push(ml(s,oe,X)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var wb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function C_(t){return(typeof t=="string"?t:""+t).replace(wb,`
`).replace(Ab,"")}function R_(t,i){return i=C_(i),C_(t)===i}function tn(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mi(t,""+l);break;case"className":Je(t,"class",l);break;case"tabIndex":Je(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,s,l);break;case"style":ji(t,l,h);break;case"data":if(i!=="object"){Je(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Gs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&tn(t,i,"name",f.name,f,null),tn(t,i,"formEncType",f.formEncType,f,null),tn(t,i,"formMethod",f.formMethod,f,null),tn(t,i,"formTarget",f.formTarget,f,null)):(tn(t,i,"encType",f.encType,f,null),tn(t,i,"method",f.method,f,null),tn(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Gs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Ea);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Gs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":wt("beforetoggle",t),wt("toggle",t),Ie(t,"popover",l);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ie(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=la.get(s)||s,Ie(t,s,l))}}function Xd(t,i,s,l,f,h){switch(s){case"style":ji(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Mi(t,l):(typeof l=="number"||typeof l=="bigint")&&Mi(t,""+l);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[Hn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ie(t,s,l)}}}function Yn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tn(t,i,h,b,s,null)}}f&&tn(t,i,"srcSet",s.srcSet,s,null),l&&tn(t,i,"src",s.src,s,null);return;case"input":wt("invalid",t);var D=h=b=f=null,X=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var Se=s[l];if(Se!=null)switch(l){case"name":f=Se;break;case"type":b=Se;break;case"checked":X=Se;break;case"defaultChecked":oe=Se;break;case"value":h=Se;break;case"defaultValue":D=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,i));break;default:tn(t,i,l,Se,s,null)}}Zn(t,h,D,X,oe,b,f,!1);return;case"select":wt("invalid",t),l=b=h=null;for(f in s)if(s.hasOwnProperty(f)&&(D=s[f],D!=null))switch(f){case"value":h=D;break;case"defaultValue":b=D;break;case"multiple":l=D;default:tn(t,i,f,D,s,null)}i=h,s=b,t.multiple=!!l,i!=null?Ln(t,!!l,i,!1):s!=null&&Ln(t,!!l,s,!0);return;case"textarea":wt("invalid",t),h=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(D=s[b],D!=null))switch(b){case"value":l=D;break;case"defaultValue":f=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:tn(t,i,b,D,s,null)}qi(t,l,f,h);return;case"option":for(X in s)s.hasOwnProperty(X)&&(l=s[X],l!=null)&&(X==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":tn(t,i,X,l,s,null));return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(l=0;l<pl.length;l++)wt(pl[l],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tn(t,i,oe,l,s,null)}return;default:if(Vt(i)){for(Se in s)s.hasOwnProperty(Se)&&(l=s[Se],l!==void 0&&Xd(t,i,Se,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&tn(t,i,D,l,s,null))}function Cb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,D=null,X=null,oe=null,Se=null;for(ge in s){var Te=s[ge];if(s.hasOwnProperty(ge)&&Te!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":X=Te;default:l.hasOwnProperty(ge)||tn(t,i,ge,null,l,Te)}}for(var he in l){var ge=l[he];if(Te=s[he],l.hasOwnProperty(he)&&(ge!=null||Te!=null))switch(he){case"type":h=ge;break;case"name":f=ge;break;case"checked":oe=ge;break;case"defaultChecked":Se=ge;break;case"value":b=ge;break;case"defaultValue":D=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:ge!==Te&&tn(t,i,he,ge,l,Te)}}We(t,b,D,X,oe,Se,h,f);return;case"select":ge=b=D=he=null;for(h in s)if(X=s[h],s.hasOwnProperty(h)&&X!=null)switch(h){case"value":break;case"multiple":ge=X;default:l.hasOwnProperty(h)||tn(t,i,h,null,l,X)}for(f in l)if(h=l[f],X=s[f],l.hasOwnProperty(f)&&(h!=null||X!=null))switch(f){case"value":he=h;break;case"defaultValue":D=h;break;case"multiple":b=h;default:h!==X&&tn(t,i,f,h,l,X)}i=D,s=b,l=ge,he!=null?Ln(t,!!s,he,!1):!!l!=!!s&&(i!=null?Ln(t,!!s,i,!0):Ln(t,!!s,s?[]:"",!1));return;case"textarea":ge=he=null;for(D in s)if(f=s[D],s.hasOwnProperty(D)&&f!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:tn(t,i,D,null,l,f)}for(b in l)if(f=l[b],h=s[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":he=f;break;case"defaultValue":ge=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&tn(t,i,b,f,l,h)}Si(t,he,ge);return;case"option":for(var $e in s)he=s[$e],s.hasOwnProperty($e)&&he!=null&&!l.hasOwnProperty($e)&&($e==="selected"?t.selected=!1:tn(t,i,$e,null,l,he));for(X in l)he=l[X],ge=s[X],l.hasOwnProperty(X)&&he!==ge&&(he!=null||ge!=null)&&(X==="selected"?t.selected=he&&typeof he!="function"&&typeof he!="symbol":tn(t,i,X,he,l,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in s)he=s[ft],s.hasOwnProperty(ft)&&he!=null&&!l.hasOwnProperty(ft)&&tn(t,i,ft,null,l,he);for(oe in l)if(he=l[oe],ge=s[oe],l.hasOwnProperty(oe)&&he!==ge&&(he!=null||ge!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,i));break;default:tn(t,i,oe,he,l,ge)}return;default:if(Vt(i)){for(var nn in s)he=s[nn],s.hasOwnProperty(nn)&&he!==void 0&&!l.hasOwnProperty(nn)&&Xd(t,i,nn,void 0,l,he);for(Se in l)he=l[Se],ge=s[Se],!l.hasOwnProperty(Se)||he===ge||he===void 0&&ge===void 0||Xd(t,i,Se,he,l,ge);return}}for(var ee in s)he=s[ee],s.hasOwnProperty(ee)&&he!=null&&!l.hasOwnProperty(ee)&&tn(t,i,ee,null,l,he);for(Te in l)he=l[Te],ge=s[Te],!l.hasOwnProperty(Te)||he===ge||he==null&&ge==null||tn(t,i,Te,he,l,ge)}function L_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,b=f.initiatorType,D=f.duration;if(h&&D&&L_(b)){for(b=0,D=f.responseEnd,l+=1;l<s.length;l++){var X=s[l],oe=X.startTime;if(oe>D)break;var Se=X.transferSize,Te=X.initiatorType;Se&&L_(Te)&&(X=X.responseEnd,b+=Se*(X<D?1:(D-oe)/(X-oe)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wd=null,qd=null;function Kc(t){return t.nodeType===9?t:t.ownerDocument}function D_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function jd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zd=null;function Lb(){var t=window.event;return t&&t.type==="popstate"?t===Zd?!1:(Zd=t,!0):(Zd=null,!1)}var U_=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,O_=typeof Promise=="function"?Promise:void 0,Nb=typeof queueMicrotask=="function"?queueMicrotask:typeof O_<"u"?function(t){return O_.resolve(null).then(t).catch(Ub)}:U_;function Ub(t){setTimeout(function(){throw t})}function Ms(t){return t==="head"}function P_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),$r(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")gl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,gl(s);for(var h=s.firstChild;h;){var b=h.nextSibling,D=h.nodeName;h[ts]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&gl(t.ownerDocument.body);s=f}while(s);$r(i)}function I_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Kd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Kd(s),ns(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Ob(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ts])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Vi(t.nextSibling),t===null)break}return null}function Pb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Vi(t.nextSibling),t===null))return null;return t}function B_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Vi(t.nextSibling),t===null))return null;return t}function Qd(t){return t.data==="$?"||t.data==="$~"}function Jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ib(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Vi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var $d=null;function F_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Vi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function z_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function H_(t,i,s){switch(i=Kc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function gl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ns(t)}var Yi=new Map,G_=new Set;function Qc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ha=q.d;q.d={f:Bb,r:Fb,D:zb,C:Hb,L:Gb,m:kb,X:Yb,S:Vb,M:Xb};function Bb(){var t=Ha.f(),i=kc();return t||i}function Fb(t){var i=ba(t);i!==null&&i.tag===5&&i.type==="form"?ag(i):Ha.r(t)}var Kr=typeof document>"u"?null:document;function k_(t,i,s){var l=Kr;if(l&&typeof i=="string"&&i){var f=qt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),G_.has(f)||(G_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Yn(i,"link",t),En(i),l.head.appendChild(i)))}}function zb(t){Ha.D(t),k_("dns-prefetch",t,null)}function Hb(t,i){Ha.C(t,i),k_("preconnect",t,i)}function Gb(t,i,s){Ha.L(t,i,s);var l=Kr;if(l&&t&&i){var f='link[rel="preload"][as="'+qt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+qt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+qt(s.imageSizes)+'"]')):f+='[href="'+qt(t)+'"]';var h=f;switch(i){case"style":h=Qr(t);break;case"script":h=Jr(t)}Yi.has(h)||(t=x({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Yi.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(_l(h))||i==="script"&&l.querySelector(xl(h))||(i=l.createElement("link"),Yn(i,"link",t),En(i),l.head.appendChild(i)))}}function kb(t,i){Ha.m(t,i);var s=Kr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Jr(t)}if(!Yi.has(h)&&(t=x({rel:"modulepreload",href:t},i),Yi.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(xl(h)))return}l=s.createElement("link"),Yn(l,"link",t),En(l),s.head.appendChild(l)}}}function Vb(t,i,s){Ha.S(t,i,s);var l=Kr;if(l&&t){var f=is(l).hoistableStyles,h=Qr(t);i=i||"default";var b=f.get(h);if(!b){var D={loading:0,preload:null};if(b=l.querySelector(_l(h)))D.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Yi.get(h))&&eh(t,s);var X=b=l.createElement("link");En(X),Yn(X,"link",t),X._p=new Promise(function(oe,Se){X.onload=oe,X.onerror=Se}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Jc(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:D},f.set(h,b)}}}function Yb(t,i){Ha.X(t,i);var s=Kr;if(s&&t){var l=is(s).hoistableScripts,f=Jr(t),h=l.get(f);h||(h=s.querySelector(xl(f)),h||(t=x({src:t,async:!0},i),(i=Yi.get(f))&&th(t,i),h=s.createElement("script"),En(h),Yn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Xb(t,i){Ha.M(t,i);var s=Kr;if(s&&t){var l=is(s).hoistableScripts,f=Jr(t),h=l.get(f);h||(h=s.querySelector(xl(f)),h||(t=x({src:t,async:!0,type:"module"},i),(i=Yi.get(f))&&th(t,i),h=s.createElement("script"),En(h),Yn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function V_(t,i,s,l){var f=(f=K.current)?Qc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Qr(s.href),s=is(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Qr(s.href);var h=is(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(_l(t)))&&!h._p&&(b.instance=h,b.state.loading=5),Yi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Yi.set(t,s),h||Wb(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Jr(s),s=is(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Qr(t){return'href="'+qt(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function Y_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Wb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yn(i,"link",s),En(i),t.head.appendChild(i))}function Jr(t){return'[src="'+qt(t)+'"]'}function xl(t){return"script[async]"+t}function X_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+qt(s.href)+'"]');if(l)return i.instance=l,En(l),l;var f=x({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),En(l),Yn(l,"style",f),Jc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Qr(s.href);var h=t.querySelector(_l(f));if(h)return i.state.loading|=4,i.instance=h,En(h),h;l=Y_(s),(f=Yi.get(f))&&eh(l,f),h=(t.ownerDocument||t).createElement("link"),En(h);var b=h;return b._p=new Promise(function(D,X){b.onload=D,b.onerror=X}),Yn(h,"link",l),i.state.loading|=4,Jc(h,s.precedence,t),i.instance=h;case"script":return h=Jr(s.src),(f=t.querySelector(xl(h)))?(i.instance=f,En(f),f):(l=s,(f=Yi.get(h))&&(l=x({},s),th(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),En(f),Yn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Jc(l,s.precedence,t));return i.instance}function Jc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var D=l[b];if(D.dataset.precedence===i)h=D;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function eh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function th(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var $c=null;function W_(t,i,s){if($c===null){var l=new Map,f=$c=new Map;f.set(s,l)}else f=$c,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[ts]||h[bn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var D=l.get(b);D?D.push(h):l.set(b,[h])}}return l}function q_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function qb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function j_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function jb(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Qr(l.href),h=i.querySelector(_l(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=eu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,En(h);return}h=i.ownerDocument||i,l=Y_(l),(f=Yi.get(f))&&eh(l,f),h=h.createElement("link"),En(h);var b=h;b._p=new Promise(function(D,X){b.onload=D,b.onerror=X}),Yn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=eu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var nh=0;function Zb(t,i){return t.stylesheets&&t.count===0&&nu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&nu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&nh===0&&(nh=62500*Rb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>nh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tu=null;function nu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tu=new Map,i.forEach(Kb,t),tu=null,eu.call(t))}function Kb(t,i){if(!(i.state.loading&4)){var s=tu.get(t);if(s)var l=s.get(null);else{s=new Map,tu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,f),s.set(b,f),this.count++,l=eu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var vl={$$typeof:U,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Qb(t,i,s,l,f,h,b,D,X){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function Z_(t,i,s,l,f,h,b,D,X,oe,Se,Te){return t=new Qb(t,i,s,b,X,oe,Se,Te,D),i=1,h===!0&&(i|=24),h=Ei(3,null,null,i),t.current=h,h.stateNode=t,i=Pf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},zf(h),t}function K_(t){return t?(t=Rr,t):Rr}function Q_(t,i,s,l,f,h){f=K_(f),l.context===null?l.context=f:l.pendingContext=f,l=fs(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=ds(t,l,i),s!==null&&(mi(s,t,i),Qo(s,t,i))}function J_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ih(t,i){J_(t,i),(t=t.alternate)&&J_(t,i)}function $_(t){if(t.tag===13||t.tag===31){var i=Xs(t,67108864);i!==null&&mi(i,t,67108864),ih(t,67108864)}}function ex(t){if(t.tag===13||t.tag===31){var i=Ri();i=Uo(i);var s=Xs(t,i);s!==null&&mi(s,t,i),ih(t,i)}}var iu=!0;function Jb(t,i,s,l){var f=F.T;F.T=null;var h=q.p;try{q.p=2,ah(t,i,s,l)}finally{q.p=h,F.T=f}}function $b(t,i,s,l){var f=F.T;F.T=null;var h=q.p;try{q.p=8,ah(t,i,s,l)}finally{q.p=h,F.T=f}}function ah(t,i,s,l){if(iu){var f=sh(l);if(f===null)Yd(t,i,l,au,s),nx(t,l);else if(t2(f,t,i,s,l))l.stopPropagation();else if(nx(t,l),i&4&&-1<e2.indexOf(t)){for(;f!==null;){var h=ba(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Le(h.pendingLanes);if(b!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;b;){var X=1<<31-Xe(b);D.entanglements[1]|=X,b&=~X}da(h),(kt&6)===0&&(Hc=Gt()+500,hl(0))}}break;case 31:case 13:D=Xs(h,2),D!==null&&mi(D,h,2),kc(),ih(h,2)}if(h=sh(l),h===null&&Yd(t,i,l,au,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Yd(t,i,l,null,s)}}function sh(t){return t=of(t),rh(t)}var au=null;function rh(t){if(au=null,t=Ma(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return au=t,null}function tx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case z:return 2;case w:return 8;case te:case fe:return 32;case _e:return 268435456;default:return 32}default:return 32}}var oh=!1,bs=null,Es=null,Ts=null,yl=new Map,Sl=new Map,ws=[],e2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nx(t,i){switch(t){case"focusin":case"focusout":bs=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(i.pointerId)}}function Ml(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=ba(i),i!==null&&$_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function t2(t,i,s,l,f){switch(i){case"focusin":return bs=Ml(bs,t,i,s,l,f),!0;case"dragenter":return Es=Ml(Es,t,i,s,l,f),!0;case"mouseover":return Ts=Ml(Ts,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return yl.set(h,Ml(yl.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Sl.set(h,Ml(Sl.get(h)||null,t,i,s,l,f)),!0}return!1}function ix(t){var i=Ma(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Mr(t.priority,function(){ex(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Mr(t.priority,function(){ex(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function su(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=sh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);rf=l,s.target.dispatchEvent(l),rf=null}else return i=ba(s),i!==null&&$_(i),t.blockedOn=s,!1;i.shift()}return!0}function ax(t,i,s){su(t)&&s.delete(i)}function n2(){oh=!1,bs!==null&&su(bs)&&(bs=null),Es!==null&&su(Es)&&(Es=null),Ts!==null&&su(Ts)&&(Ts=null),yl.forEach(ax),Sl.forEach(ax)}function ru(t,i){t.blockedOn===i&&(t.blockedOn=null,oh||(oh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,n2)))}var ou=null;function sx(t){ou!==t&&(ou=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ou===t&&(ou=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(rh(l||s)===null)continue;break}var h=ba(s);h!==null&&(t.splice(i,3),i-=3,sd(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function $r(t){function i(X){return ru(X,t)}bs!==null&&ru(bs,t),Es!==null&&ru(Es,t),Ts!==null&&ru(Ts,t),yl.forEach(i),Sl.forEach(i);for(var s=0;s<ws.length;s++){var l=ws[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ws.length&&(s=ws[0],s.blockedOn===null);)ix(s),s.blockedOn===null&&ws.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],b=f[Hn]||null;if(typeof h=="function")b||sx(s);else if(b){var D=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[Hn]||null)D=b.formAction;else if(rh(f)!==null)continue}else D=b.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),sx(s)}}}function rx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function lh(t){this._internalRoot=t}lu.prototype.render=lh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Ri();Q_(s,l,t,i,null,null)},lu.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Q_(t.current,2,null,t,null,null),kc(),i[ci]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Po();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ws.length&&i!==0&&i<ws[s].priority;s++);ws.splice(s,0,t),s===0&&ix(t)}};var ox=e.version;if(ox!=="19.2.6")throw Error(a(527,ox,"19.2.6"));q.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var i2={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{xe=cu.inject(i2),ve=cu}catch{}}return El.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=pg,h=mg,b=gg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Z_(t,1,!1,null,null,s,l,null,f,h,b,rx),t[ci]=i.current,Vd(t),new lh(i)},El.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=pg,b=mg,D=gg,X=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(X=s.formState)),i=Z_(t,1,!0,i,s??null,l,f,X,h,b,D,rx),i.context=K_(null),s=i.current,l=Ri(),l=Uo(l),f=fs(l),f.callback=null,ds(s,f,l),s=l,i.current.lanes=s,Ze(i,s),da(i),t[ci]=i.current,Vd(t),new lu(i)},El.version="19.2.6",El}var _x;function h2(){if(_x)return fh.exports;_x=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fh.exports=d2(),fh.exports}var p2=h2(),m2=zv();const tm="185",g2=0,xx=1,_2=2,zl=1,x2=2,Il=3,Qa=0,oi=1,na=2,va=0,yo=1,Vl=2,vx=3,yx=4,v2=5,cr=100,y2=101,S2=102,M2=103,b2=104,E2=200,T2=201,w2=202,A2=203,sp=204,rp=205,C2=206,R2=207,L2=208,D2=209,N2=210,U2=211,O2=212,P2=213,I2=214,op=0,lp=1,cp=2,Eo=3,up=4,fp=5,dp=6,hp=7,Hv=0,B2=1,F2=2,ya=0,nm=1,im=2,am=3,Zu=4,sm=5,rm=6,om=7,Gv=300,pr=301,To=302,mh=303,gh=304,Ku=306,Jt=1e3,qn=1001,pp=1002,jn=1003,z2=1004,uu=1005,$n=1006,_h=1007,fr=1008,Pi=1009,kv=1010,Vv=1011,Yl=1012,lm=1013,Sa=1014,sa=1015,xi=1016,cm=1017,um=1018,Xl=1020,Yv=35902,Xv=35899,Wv=1021,qv=1022,ra=1023,Ja=1026,dr=1027,fm=1028,dm=1029,mr=1030,hm=1031,pm=1033,Iu=33776,Bu=33777,Fu=33778,zu=33779,mp=35840,gp=35841,_p=35842,xp=35843,vp=36196,yp=37492,Sp=37496,Mp=37488,bp=37489,Xu=37490,Ep=37491,Tp=37808,wp=37809,Ap=37810,Cp=37811,Rp=37812,Lp=37813,Dp=37814,Np=37815,Up=37816,Op=37817,Pp=37818,Ip=37819,Bp=37820,Fp=37821,zp=36492,Hp=36494,Gp=36495,kp=36283,Vp=36284,Wu=36285,Yp=36286,H2=3200,Xp=0,G2=1,ja="",gi="srgb",qu="srgb-linear",ju="linear",Yt="srgb",eo=7680,Sx=519,k2=512,V2=513,Y2=514,mm=515,X2=516,W2=517,gm=518,q2=519,Mx=35044,j2=35048,bx="300 es",xa=2e3,Wl=2001;function Z2(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function K2(){const r=ql("canvas");return r.style.display="block",r}const Ex={};function Tx(...r){const e="THREE."+r.shift();console.log(e,...r)}function jv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function pt(...r){r=jv(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Pt(...r){r=jv(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function So(...r){const e=r.join(" ");e in Ex||(Ex[e]=!0,pt(...r))}function Q2(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const J2={[op]:lp,[cp]:dp,[up]:hp,[Eo]:fp,[lp]:op,[dp]:cp,[hp]:up,[fp]:Eo};class gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wx=1234567;const Hl=Math.PI/180,jl=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[n&63|128]+Qn[n>>8&255]+"-"+Qn[n>>16&255]+Qn[n>>24&255]+Qn[a&255]+Qn[a>>8&255]+Qn[a>>16&255]+Qn[a>>24&255]).toLowerCase()}function At(r,e,n){return Math.max(e,Math.min(n,r))}function _m(r,e){return(r%e+e)%e}function $2(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function eE(r,e,n){return r!==e?(n-r)/(e-r):0}function Gl(r,e,n){return(1-n)*r+n*e}function tE(r,e,n,a){return Gl(r,e,1-Math.exp(-n*a))}function nE(r,e=1){return e-Math.abs(_m(r,e*2)-e)}function iE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function aE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function sE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function rE(r,e){return r+Math.random()*(e-r)}function oE(r){return r*(.5-Math.random())}function lE(r){r!==void 0&&(wx=r);let e=wx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cE(r){return r*Hl}function uE(r){return r*jl}function fE(r){return(r&r-1)===0&&r!==0}function dE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function hE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pE(r,e,n,a,o){const c=Math.cos,u=Math.sin,d=c(n/2),m=u(n/2),p=c((e+a)/2),g=u((e+a)/2),x=c((e-a)/2),_=u((e-a)/2),M=c((a-e)/2),v=u((a-e)/2);switch(o){case"XYX":r.set(d*g,m*x,m*_,d*p);break;case"YZY":r.set(m*_,d*g,m*x,d*p);break;case"ZXZ":r.set(m*x,m*_,d*g,d*p);break;case"XZX":r.set(d*g,m*v,m*M,d*p);break;case"YXY":r.set(m*M,d*g,m*v,d*p);break;case"ZYZ":r.set(m*v,m*M,d*g,d*p);break;default:pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function _o(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ai(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xn={DEG2RAD:Hl,RAD2DEG:jl,generateUUID:Ro,clamp:At,euclideanModulo:_m,mapLinear:$2,inverseLerp:eE,lerp:Gl,damp:tE,pingpong:nE,smoothstep:iE,smootherstep:aE,randInt:sE,randFloat:rE,randFloatSpread:oE,seededRandom:lE,degToRad:cE,radToDeg:uE,isPowerOfTwo:fE,ceilPowerOfTwo:dE,floorPowerOfTwo:hE,setQuaternionFromProperEuler:pE,normalize:ai,denormalize:_o};class He{static{He.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _r{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],x=a[o+3],_=c[u+0],M=c[u+1],v=c[u+2],A=c[u+3];if(x!==A||m!==_||p!==M||g!==v){let y=m*_+p*M+g*v+x*A;y<0&&(_=-_,M=-M,v=-v,A=-A,y=-y);let S=1-d;if(y<.9995){const R=Math.acos(y),U=Math.sin(R);S=Math.sin(S*R)/U,d=Math.sin(d*R)/U,m=m*S+_*d,p=p*S+M*d,g=g*S+v*d,x=x*S+A*d}else{m=m*S+_*d,p=p*S+M*d,g=g*S+v*d,x=x*S+A*d;const R=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=R,p*=R,g*=R,x*=R}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],x=c[u],_=c[u+1],M=c[u+2],v=c[u+3];return e[n]=d*v+g*x+m*M-p*_,e[n+1]=m*v+g*_+p*x-d*M,e[n+2]=p*v+g*M+d*_-m*x,e[n+3]=g*v-d*x-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),x=d(c/2),_=m(a/2),M=m(o/2),v=m(c/2);switch(u){case"XYZ":this._x=_*g*x+p*M*v,this._y=p*M*x-_*g*v,this._z=p*g*v+_*M*x,this._w=p*g*x-_*M*v;break;case"YXZ":this._x=_*g*x+p*M*v,this._y=p*M*x-_*g*v,this._z=p*g*v-_*M*x,this._w=p*g*x+_*M*v;break;case"ZXY":this._x=_*g*x-p*M*v,this._y=p*M*x+_*g*v,this._z=p*g*v+_*M*x,this._w=p*g*x-_*M*v;break;case"ZYX":this._x=_*g*x-p*M*v,this._y=p*M*x+_*g*v,this._z=p*g*v-_*M*x,this._w=p*g*x+_*M*v;break;case"YZX":this._x=_*g*x+p*M*v,this._y=p*M*x+_*g*v,this._z=p*g*v-_*M*x,this._w=p*g*x-_*M*v;break;case"XZY":this._x=_*g*x-p*M*v,this._y=p*M*x-_*g*v,this._z=p*g*v+_*M*x,this._w=p*g*x+_*M*v;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],x=n[10],_=a+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(u-o)*M}else if(a>d&&a>x){const M=2*Math.sqrt(1+a-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-a-x);this._w=(c-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-a-d);this._w=(u-o)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{G.prototype.isVector3=!0}constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ax.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ax.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),x=2*(c*a-u*n);return this.x=n+m*p+u*x-d*g,this.y=a+m*g+d*p-c*x,this.z=o+m*x+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new G,Ax=new _r;class _t{static{_t.prototype.isMatrix3=!0}constructor(e,n,a,o,c,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],x=a[7],_=a[2],M=a[5],v=a[8],A=o[0],y=o[3],S=o[6],R=o[1],U=o[4],C=o[7],O=o[2],N=o[5],B=o[8];return c[0]=u*A+d*R+m*O,c[3]=u*y+d*U+m*N,c[6]=u*S+d*C+m*B,c[1]=p*A+g*R+x*O,c[4]=p*y+g*U+x*N,c[7]=p*S+g*C+x*B,c[2]=_*A+M*R+v*O,c[5]=_*y+M*U+v*N,c[8]=_*S+M*C+v*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*u-d*p,_=d*m-g*c,M=p*c-u*m,v=n*x+a*_+o*M;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=x*A,e[1]=(o*p-g*a)*A,e[2]=(d*a-o*u)*A,e[3]=_*A,e[4]=(g*n-o*m)*A,e[5]=(o*c-d*n)*A,e[6]=M*A,e[7]=(a*m-p*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vh.makeScale(e,n)),this}rotate(e){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vh.makeRotation(-e)),this}translate(e,n){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new _t,Cx=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rx=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mE(){const r={enabled:!0,workingColorSpace:qu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Yt&&(o.r=Ka(o.r),o.g=Ka(o.g),o.b=Ka(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=Mo(o.r),o.g=Mo(o.g),o.b=Mo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ja?ju:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return So("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return So("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[qu]:{primaries:e,whitePoint:a,transfer:ju,toXYZ:Cx,fromXYZ:Rx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:a,transfer:Yt,toXYZ:Cx,fromXYZ:Rx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Lt=mE();function Ka(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let to;class gE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{to===void 0&&(to=ql("canvas")),to.width=e.width,to.height=e.height;const o=to.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=to}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ka(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ka(n[a]/255)*255):n[a]=Ka(n[a]);return{data:n,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class xm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(yh(o[u].image)):c.push(yh(o[u]))}else c=yh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let xE=0;const Sh=new G;class ei extends gr{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,a=qn,o=qn,c=$n,u=fr,d=ra,m=Pi,p=ei.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ro(),this.name="",this.source=new xm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jt:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jt:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Gv;ei.DEFAULT_ANISOTROPY=1;class hn{static{hn.prototype.isVector4=!0}constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],x=m[8],_=m[1],M=m[5],v=m[9],A=m[2],y=m[6],S=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-A)<.01&&Math.abs(v-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+A)<.1&&Math.abs(v+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,C=(M+1)/2,O=(S+1)/2,N=(g+_)/4,B=(x+A)/4,T=(v+y)/4;return U>C&&U>O?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=N/a,c=B/a):C>O?C<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),a=N/o,c=T/o):O<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),a=B/c,o=T/c),this.set(a,o,c,n),this}let R=Math.sqrt((y-v)*(y-v)+(x-A)*(x-A)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(y-v)/R,this.y=(x-A)/R,this.z=(_-g)/R,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this.w=At(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this.w=At(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vE extends gr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new hn(0,0,e,n),this.scissorTest=!1,this.viewport=new hn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new ei(o),u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new xm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends vE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Zv extends ei{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends ei{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class It{static{It.prototype.isMatrix4=!0}constructor(e,n,a,o,c,u,d,m,p,g,x,_,M,v,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,x,_,M,v,A,y)}set(e,n,a,o,c,u,d,m,p,g,x,_,M,v,A,y){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=g,S[10]=x,S[14]=_,S[3]=M,S[7]=v,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/no.setFromMatrixColumn(e,0).length(),c=1/no.setFromMatrixColumn(e,1).length(),u=1/no.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=u*g,M=u*x,v=d*g,A=d*x;n[0]=m*g,n[4]=-m*x,n[8]=p,n[1]=M+v*p,n[5]=_-A*p,n[9]=-d*m,n[2]=A-_*p,n[6]=v+M*p,n[10]=u*m}else if(e.order==="YXZ"){const _=m*g,M=m*x,v=p*g,A=p*x;n[0]=_+A*d,n[4]=v*d-M,n[8]=u*p,n[1]=u*x,n[5]=u*g,n[9]=-d,n[2]=M*d-v,n[6]=A+_*d,n[10]=u*m}else if(e.order==="ZXY"){const _=m*g,M=m*x,v=p*g,A=p*x;n[0]=_-A*d,n[4]=-u*x,n[8]=v+M*d,n[1]=M+v*d,n[5]=u*g,n[9]=A-_*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const _=u*g,M=u*x,v=d*g,A=d*x;n[0]=m*g,n[4]=v*p-M,n[8]=_*p+A,n[1]=m*x,n[5]=A*p+_,n[9]=M*p-v,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,v=d*m,A=d*p;n[0]=m*g,n[4]=A-_*x,n[8]=v*x+M,n[1]=x,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=M*x+v,n[10]=_-A*x}else if(e.order==="XZY"){const _=u*m,M=u*p,v=d*m,A=d*p;n[0]=m*g,n[4]=-x,n[8]=p*g,n[1]=_*x+A,n[5]=u*g,n[9]=M*x-v,n[2]=v*x-M,n[6]=d*g,n[10]=A*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,ME)}lookAt(e,n,a){const o=this.elements;return Li.subVectors(e,n),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Cs.crossVectors(a,Li),Cs.lengthSq()===0&&(Math.abs(a.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Cs.crossVectors(a,Li)),Cs.normalize(),fu.crossVectors(Li,Cs),o[0]=Cs.x,o[4]=fu.x,o[8]=Li.x,o[1]=Cs.y,o[5]=fu.y,o[9]=Li.y,o[2]=Cs.z,o[6]=fu.z,o[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],x=a[5],_=a[9],M=a[13],v=a[2],A=a[6],y=a[10],S=a[14],R=a[3],U=a[7],C=a[11],O=a[15],N=o[0],B=o[4],T=o[8],P=o[12],Y=o[1],V=o[5],W=o[9],pe=o[13],se=o[2],J=o[6],F=o[10],q=o[14],ne=o[3],le=o[7],H=o[11],E=o[15];return c[0]=u*N+d*Y+m*se+p*ne,c[4]=u*B+d*V+m*J+p*le,c[8]=u*T+d*W+m*F+p*H,c[12]=u*P+d*pe+m*q+p*E,c[1]=g*N+x*Y+_*se+M*ne,c[5]=g*B+x*V+_*J+M*le,c[9]=g*T+x*W+_*F+M*H,c[13]=g*P+x*pe+_*q+M*E,c[2]=v*N+A*Y+y*se+S*ne,c[6]=v*B+A*V+y*J+S*le,c[10]=v*T+A*W+y*F+S*H,c[14]=v*P+A*pe+y*q+S*E,c[3]=R*N+U*Y+C*se+O*ne,c[7]=R*B+U*V+C*J+O*le,c[11]=R*T+U*W+C*F+O*H,c[15]=R*P+U*pe+C*q+O*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],_=e[10],M=e[14],v=e[3],A=e[7],y=e[11],S=e[15],R=m*M-p*_,U=d*M-p*x,C=d*_-m*x,O=u*M-p*g,N=u*_-m*g,B=u*x-d*g;return n*(A*R-y*U+S*C)-a*(v*R-y*O+S*N)+o*(v*U-A*O+S*B)-c*(v*C-A*N+y*B)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],p=e[6],g=e[10];return n*(u*g-d*p)-a*(c*g-d*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],_=e[10],M=e[11],v=e[12],A=e[13],y=e[14],S=e[15],R=n*d-a*u,U=n*m-o*u,C=n*p-c*u,O=a*m-o*d,N=a*p-c*d,B=o*p-c*m,T=g*A-x*v,P=g*y-_*v,Y=g*S-M*v,V=x*y-_*A,W=x*S-M*A,pe=_*S-M*y,se=R*pe-U*W+C*V+O*Y-N*P+B*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/se;return e[0]=(d*pe-m*W+p*V)*J,e[1]=(o*W-a*pe-c*V)*J,e[2]=(A*B-y*N+S*O)*J,e[3]=(_*N-x*B-M*O)*J,e[4]=(m*Y-u*pe-p*P)*J,e[5]=(n*pe-o*Y+c*P)*J,e[6]=(y*C-v*B-S*U)*J,e[7]=(g*B-_*C+M*U)*J,e[8]=(u*W-d*Y+p*T)*J,e[9]=(a*Y-n*W-c*T)*J,e[10]=(v*N-A*C+S*R)*J,e[11]=(x*C-g*N-M*R)*J,e[12]=(d*P-u*V-m*T)*J,e[13]=(n*V-a*P+o*T)*J,e[14]=(A*U-v*O-y*R)*J,e[15]=(g*O-x*U+_*R)*J,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,x=d+d,_=c*p,M=c*g,v=c*x,A=u*g,y=u*x,S=d*x,R=m*p,U=m*g,C=m*x,O=a.x,N=a.y,B=a.z;return o[0]=(1-(A+S))*O,o[1]=(M+C)*O,o[2]=(v-U)*O,o[3]=0,o[4]=(M-C)*N,o[5]=(1-(_+S))*N,o[6]=(y+R)*N,o[7]=0,o[8]=(v+U)*B,o[9]=(y-R)*B,o[10]=(1-(_+A))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=no.set(o[0],o[1],o[2]).length();const d=no.set(o[4],o[5],o[6]).length(),m=no.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ji.copy(this);const p=1/u,g=1/d,x=1/m;return Ji.elements[0]*=p,Ji.elements[1]*=p,Ji.elements[2]*=p,Ji.elements[4]*=g,Ji.elements[5]*=g,Ji.elements[6]*=g,Ji.elements[8]*=x,Ji.elements[9]*=x,Ji.elements[10]*=x,n.setFromRotationMatrix(Ji),a.x=u,a.y=d,a.z=m,this}makePerspective(e,n,a,o,c,u,d=xa,m=!1){const p=this.elements,g=2*c/(n-e),x=2*c/(a-o),_=(n+e)/(n-e),M=(a+o)/(a-o);let v,A;if(m)v=c/(u-c),A=u*c/(u-c);else if(d===xa)v=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===Wl)v=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=v,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=xa,m=!1){const p=this.elements,g=2/(n-e),x=2/(a-o),_=-(n+e)/(n-e),M=-(a+o)/(a-o);let v,A;if(m)v=1/(u-c),A=u/(u-c);else if(d===xa)v=-2/(u-c),A=-(u+c)/(u-c);else if(d===Wl)v=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=v,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const no=new G,Ji=new It,SE=new G(0,0,0),ME=new G(1,1,1),Cs=new G,fu=new G,Li=new G,Lx=new It,Dx=new _r;class $a{constructor(e=0,n=0,a=0,o=$a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],x=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lx,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dx.setFromEuler(this),this.setFromQuaternion(Dx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$a.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const Nx=new G,io=new _r,Ga=new It,du=new G,Tl=new G,EE=new G,TE=new _r,Ux=new G(1,0,0),Ox=new G(0,1,0),Px=new G(0,0,1),Ix={type:"added"},wE={type:"removed"},ao={type:"childadded",child:null},Mh={type:"childremoved",child:null};class Fn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new G,n=new $a,a=new _r,o=new G(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new It},normalMatrix:{value:new _t}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(Ux,e)}rotateY(e){return this.rotateOnAxis(Ox,e)}rotateZ(e){return this.rotateOnAxis(Px,e)}translateOnAxis(e,n){return Nx.copy(e).applyQuaternion(this.quaternion),this.position.add(Nx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ux,e)}translateY(e){return this.translateOnAxis(Ox,e)}translateZ(e){return this.translateOnAxis(Px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ga.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?du.copy(e):du.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ga.lookAt(Tl,du,this.up):Ga.lookAt(du,Tl,this.up),this.quaternion.setFromRotationMatrix(Ga),o&&(Ga.extractRotation(o.matrixWorld),io.setFromRotationMatrix(Ga),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ix),ao.child=e,this.dispatchEvent(ao),ao.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wE),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ix),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,EE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,TE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),x=u(e.shapes),_=u(e.skeletons),M=u(e.animations),v=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),M.length>0&&(a.animations=M),v.length>0&&(a.nodes=v)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new G(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wn extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,a),S=this._getHandJoint(p,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),M=.02,v=.005;p.inputState.pinching&&_>M+v?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-v&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Wn;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Eh(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class lt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Lt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Lt.workingColorSpace){if(e=_m(e,1),n=At(n,0,1),a=At(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Eh(u,c,e+1/3),this.g=Eh(u,c,e),this.b=Eh(u,c,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,n=gi){function a(c){c!==void 0&&parseFloat(c)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gi){const a=Qv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Lt.workingToColorSpace(Jn.copy(this),e),Math.round(At(Jn.r*255,0,255))*65536+Math.round(At(Jn.g*255,0,255))*256+Math.round(At(Jn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(Jn.copy(this),n);const a=Jn.r,o=Jn.g,c=Jn.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=g<=.5?x/(u+d):x/(2-u-d),u){case a:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-a)/x+2;break;case c:m=(a-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(Jn.copy(this),n),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=gi){Lt.workingToColorSpace(Jn.copy(this),e);const n=Jn.r,a=Jn.g,o=Jn.b;return e!==gi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+n,Rs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Rs),e.getHSL(hu);const a=Gl(Rs.h,hu.h,n),o=Gl(Rs.s,hu.s,n),c=Gl(Rs.l,hu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new lt;lt.NAMES=Qv;class vm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=n}clone(){return new vm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bx extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $a,this.environmentIntensity=1,this.environmentRotation=new $a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $i=new G,ka=new G,Th=new G,Va=new G,so=new G,ro=new G,Fx=new G,wh=new G,Ah=new G,Ch=new G,Rh=new hn,Lh=new hn,Dh=new hn;class ia{constructor(e=new G,n=new G,a=new G){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),$i.subVectors(e,n),o.cross($i);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){$i.subVectors(o,n),ka.subVectors(a,n),Th.subVectors(e,n);const u=$i.dot($i),d=$i.dot(ka),m=$i.dot(Th),p=ka.dot(ka),g=ka.dot(Th),x=u*p-d*d;if(x===0)return c.set(0,0,0),null;const _=1/x,M=(p*m-d*g)*_,v=(u*g-d*m)*_;return c.set(1-M-v,v,M)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Va)===null?!1:Va.x>=0&&Va.y>=0&&Va.x+Va.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,Va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Va.x),m.addScaledVector(u,Va.y),m.addScaledVector(d,Va.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Rh.setScalar(0),Lh.setScalar(0),Dh.setScalar(0),Rh.fromBufferAttribute(e,n),Lh.fromBufferAttribute(e,a),Dh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Rh,c.x),u.addScaledVector(Lh,c.y),u.addScaledVector(Dh,c.z),u}static isFrontFacing(e,n,a,o){return $i.subVectors(a,n),ka.subVectors(e,n),$i.cross(ka).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),$i.cross(ka).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ia.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return ia.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;so.subVectors(o,a),ro.subVectors(c,a),wh.subVectors(e,a);const m=so.dot(wh),p=ro.dot(wh);if(m<=0&&p<=0)return n.copy(a);Ah.subVectors(e,o);const g=so.dot(Ah),x=ro.dot(Ah);if(g>=0&&x<=g)return n.copy(o);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(so,u);Ch.subVectors(e,c);const M=so.dot(Ch),v=ro.dot(Ch);if(v>=0&&M<=v)return n.copy(c);const A=M*p-m*v;if(A<=0&&p>=0&&v<=0)return d=p/(p-v),n.copy(a).addScaledVector(ro,d);const y=g*v-M*x;if(y<=0&&x-g>=0&&M-v>=0)return Fx.subVectors(c,o),d=(x-g)/(x-g+(M-v)),n.copy(o).addScaledVector(Fx,d);const S=1/(y+A+_);return u=A*S,d=_*S,n.copy(a).addScaledVector(so,u).addScaledVector(ro,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xr{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ea.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ea.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ea.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ea):ea.fromBufferAttribute(c,u),ea.applyMatrix4(e.matrixWorld),this.expandByPoint(ea);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),pu.copy(a.boundingBox)),pu.applyMatrix4(e.matrixWorld),this.union(pu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ea),ea.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),mu.subVectors(this.max,wl),oo.subVectors(e.a,wl),lo.subVectors(e.b,wl),co.subVectors(e.c,wl),Ls.subVectors(lo,oo),Ds.subVectors(co,lo),ar.subVectors(oo,co);let n=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-ar.z,ar.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,ar.z,0,-ar.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-ar.y,ar.x,0];return!Nh(n,oo,lo,co,mu)||(n=[1,0,0,0,1,0,0,0,1],!Nh(n,oo,lo,co,mu))?!1:(gu.crossVectors(Ls,Ds),n=[gu.x,gu.y,gu.z],Nh(n,oo,lo,co,mu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ea).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ea).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ya=[new G,new G,new G,new G,new G,new G,new G,new G],ea=new G,pu=new xr,oo=new G,lo=new G,co=new G,Ls=new G,Ds=new G,ar=new G,wl=new G,mu=new G,gu=new G,sr=new G;function Nh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){sr.fromArray(r,c);const d=o.x*Math.abs(sr.x)+o.y*Math.abs(sr.y)+o.z*Math.abs(sr.z),m=e.dot(sr),p=n.dot(sr),g=a.dot(sr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Rn=new G,_u=new He;let CE=0;class Ii extends gr{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Mx,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)_u.fromBufferAttribute(this,n),_u.applyMatrix3(e),this.setXY(n,_u.x,_u.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.applyMatrix3(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.applyMatrix4(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.applyNormalMatrix(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.transformDirection(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=_o(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=ai(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_o(n,this.array)),n}setX(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_o(n,this.array)),n}setY(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_o(n,this.array)),n}setW(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),o=ai(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),o=ai(o,this.array),c=ai(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Jv extends Ii{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class $v extends Ii{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class $t extends Ii{constructor(e,n,a){super(new Float32Array(e),n,a)}}const RE=new xr,Al=new G,Uh=new G;class vr{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):RE.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Al.subVectors(e,this.center);const n=Al.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Al,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Al.copy(e.center).add(Uh)),this.expandByPoint(Al.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let LE=0;const Xi=new It,Oh=new Fn,uo=new G,Di=new xr,Cl=new xr,Pn=new G;class zn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z2(e)?$v:Jv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _t().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,n,a){return Xi.makeTranslation(e,n,a),this.applyMatrix4(Xi),this}scale(e,n,a){return Xi.makeScale(e,n,a),this.applyMatrix4(Xi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $t(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Di.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const a=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Cl.setFromBufferAttribute(d),this.morphTargetsRelative?(Pn.addVectors(Di.min,Cl.min),Di.expandByPoint(Pn),Pn.addVectors(Di.max,Cl.max),Di.expandByPoint(Pn)):(Di.expandByPoint(Cl.min),Di.expandByPoint(Cl.max))}Di.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Pn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Pn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Pn.fromBufferAttribute(d,p),m&&(uo.fromBufferAttribute(e,p),Pn.add(uo)),o=Math.max(o,a.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Ii(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new G,m[T]=new G;const p=new G,g=new G,x=new G,_=new He,M=new He,v=new He,A=new G,y=new G;function S(T,P,Y){p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,P),x.fromBufferAttribute(a,Y),_.fromBufferAttribute(c,T),M.fromBufferAttribute(c,P),v.fromBufferAttribute(c,Y),g.sub(p),x.sub(p),M.sub(_),v.sub(_);const V=1/(M.x*v.y-v.x*M.y);isFinite(V)&&(A.copy(g).multiplyScalar(v.y).addScaledVector(x,-M.y).multiplyScalar(V),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-v.x).multiplyScalar(V),d[T].add(A),d[P].add(A),d[Y].add(A),m[T].add(y),m[P].add(y),m[Y].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,P=R.length;T<P;++T){const Y=R[T],V=Y.start,W=Y.count;for(let pe=V,se=V+W;pe<se;pe+=3)S(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const U=new G,C=new G,O=new G,N=new G;function B(T){O.fromBufferAttribute(o,T),N.copy(O);const P=d[T];U.copy(P),U.sub(O.multiplyScalar(O.dot(P))).normalize(),C.crossVectors(N,P);const V=C.dot(m[T])<0?-1:1;u.setXYZW(T,U.x,U.y,U.z,V)}for(let T=0,P=R.length;T<P;++T){const Y=R[T],V=Y.start,W=Y.count;for(let pe=V,se=V+W;pe<se;pe+=3)B(e.getX(pe+0)),B(e.getX(pe+1)),B(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,M=a.count;_<M;_++)a.setXYZ(_,0,0,0);const o=new G,c=new G,u=new G,d=new G,m=new G,p=new G,g=new G,x=new G;if(e)for(let _=0,M=e.count;_<M;_+=3){const v=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),d.fromBufferAttribute(a,v),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,y),d.add(g),m.add(g),p.add(g),a.setXYZ(v,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,_=new p.constructor(m.length*g);let M=0,v=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let S=0;S<g;S++)_[v++]=p[M++]}return new Ii(_,g,x)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const _=p[g],M=e(_,a);m.push(M)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,M=x.length;_<M;_++)g.push(x[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DE=0;class Lo extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=yo,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=rp,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){pt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(a.blending=this.blending),this.side!==Qa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==sp&&(a.blendSrc=this.blendSrc),this.blendDst!==rp&&(a.blendDst=this.blendDst),this.blendEquation!==cr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new He().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xa=new G,Ph=new G,xu=new G,Ns=new G,Ih=new G,vu=new G,Bh=new G;class e1{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xa.copy(this.origin).addScaledVector(this.direction,n),Xa.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Ph.copy(e).add(n).multiplyScalar(.5),xu.copy(n).sub(e).normalize(),Ns.copy(this.origin).sub(Ph);const c=e.distanceTo(n)*.5,u=-this.direction.dot(xu),d=Ns.dot(this.direction),m=-Ns.dot(xu),p=Ns.lengthSq(),g=Math.abs(1-u*u);let x,_,M,v;if(g>0)if(x=u*m-d,_=u*d-m,v=c*g,x>=0)if(_>=-v)if(_<=v){const A=1/g;x*=A,_*=A,M=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=c,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _<=-v?(x=Math.max(0,-(-u*c+d)),_=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+_*(_+2*m)+p):_<=v?(x=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+p):(x=Math.max(0,-(u*c+d)),_=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+_*(_+2*m)+p);else _=u>0?-c:c,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Ph).addScaledVector(xu,_),M}intersectSphere(e,n){Xa.subVectors(e.center,this.origin);const a=Xa.dot(this.direction),o=Xa.dot(Xa)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Xa)!==null}intersectTriangle(e,n,a,o,c){Ih.subVectors(n,e),vu.subVectors(a,e),Bh.crossVectors(Ih,vu);let u=this.direction.dot(Bh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ns.subVectors(this.origin,e);const m=d*this.direction.dot(vu.crossVectors(Ns,vu));if(m<0)return null;const p=d*this.direction.dot(Ih.cross(Ns));if(p<0||m+p>u)return null;const g=-d*Ns.dot(Bh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Za extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $a,this.combine=Hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zx=new It,rr=new e1,yu=new vr,Hx=new G,Su=new G,Mu=new G,bu=new G,Fh=new G,Eu=new G,Gx=new G,Tu=new G;class ht extends Fn{constructor(e=new zn,n=new Za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(Fh.fromBufferAttribute(x,e),u?Eu.addScaledVector(Fh,g):Eu.addScaledVector(Fh.sub(n),g))}n.add(Eu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),yu.copy(a.boundingSphere),yu.applyMatrix4(c),rr.copy(e.ray).recast(e.near),!(yu.containsPoint(rr.origin)===!1&&(rr.intersectSphere(yu,Hx)===null||rr.origin.distanceToSquared(Hx)>(e.far-e.near)**2))&&(zx.copy(c).invert(),rr.copy(e.ray).applyMatrix4(zx),!(a.boundingBox!==null&&rr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let v=0,A=_.length;v<A;v++){const y=_[v],S=u[y.materialIndex],R=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=R,O=U;C<O;C+=3){const N=d.getX(C),B=d.getX(C+1),T=d.getX(C+2);o=wu(this,S,e,a,p,g,x,N,B,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const v=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=v,S=A;y<S;y+=3){const R=d.getX(y),U=d.getX(y+1),C=d.getX(y+2);o=wu(this,u,e,a,p,g,x,R,U,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let v=0,A=_.length;v<A;v++){const y=_[v],S=u[y.materialIndex],R=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=R,O=U;C<O;C+=3){const N=C,B=C+1,T=C+2;o=wu(this,S,e,a,p,g,x,N,B,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const v=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=v,S=A;y<S;y+=3){const R=y,U=y+1,C=y+2;o=wu(this,u,e,a,p,g,x,R,U,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function NE(r,e,n,a,o,c,u,d){let m;if(e.side===oi?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Qa,d),m===null)return null;Tu.copy(d),Tu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Tu);return p<n.near||p>n.far?null:{distance:p,point:Tu.clone(),object:r}}function wu(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,Su),r.getVertexPosition(m,Mu),r.getVertexPosition(p,bu);const g=NE(r,e,n,a,Su,Mu,bu,Gx);if(g){const x=new G;ia.getBarycoord(Gx,Su,Mu,bu,x),o&&(g.uv=ia.getInterpolatedAttribute(o,d,m,p,x,new He)),c&&(g.uv1=ia.getInterpolatedAttribute(c,d,m,p,x,new He)),u&&(g.normal=ia.getInterpolatedAttribute(u,d,m,p,x,new G),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new G,materialIndex:0};ia.getNormal(Su,Mu,bu,_.normal),g.face=_,g.barycoord=x}return g}class t1 extends ei{constructor(e=null,n=1,a=1,o,c,u,d,m,p=jn,g=jn,x,_){super(null,u,d,m,p,g,o,c,x,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kx extends Ii{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fo=new It,Vx=new It,Au=[],Yx=new xr,UE=new It,Rl=new ht,Ll=new vr;class OE extends ht{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new kx(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,UE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,fo),Yx.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(Yx)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new vr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,fo),Ll.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(Ll)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let d=0;d<a.length;d++)a[d]=o[u+d]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(Rl.geometry=this.geometry,Rl.material=this.material,Rl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ll.copy(this.boundingSphere),Ll.applyMatrix4(a),e.ray.intersectsSphere(Ll)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,fo),Vx.multiplyMatrices(a,fo),Rl.matrixWorld=Vx,Rl.raycast(e,Au);for(let u=0,d=Au.length;u<d;u++){const m=Au[u];m.instanceId=c,m.object=this,n.push(m)}Au.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new kx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new t1(new Float32Array(o*this.count),o,this.count,fm,sa));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const d=this.geometry.morphTargetsRelative?1:1-u,m=o*e;return c[m]=d,c.set(a,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zh=new G,PE=new G,IE=new _t;class Os{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=zh.subVectors(a,n).cross(PE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(zh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||IE.getNormalMatrix(e),o=this.coplanarPoint(zh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new vr,BE=new He(.5,.5),Cu=new G;class Qu{constructor(e=new Os,n=new Os,a=new Os,o=new Os,c=new Os,u=new Os){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=xa,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],M=c[7],v=c[8],A=c[9],y=c[10],S=c[11],R=c[12],U=c[13],C=c[14],O=c[15];if(o[0].setComponents(p-u,M-g,S-v,O-R).normalize(),o[1].setComponents(p+u,M+g,S+v,O+R).normalize(),o[2].setComponents(p+d,M+x,S+A,O+U).normalize(),o[3].setComponents(p-d,M-x,S-A,O-U).normalize(),a)o[4].setComponents(m,_,y,C).normalize(),o[5].setComponents(p-m,M-_,S-y,O-C).normalize();else if(o[4].setComponents(p-m,M-_,S-y,O-C).normalize(),n===xa)o[5].setComponents(p+m,M+_,S+y,O+C).normalize();else if(n===Wl)o[5].setComponents(m,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const n=BE.distanceTo(e.center);return or.radius=.7071067811865476+n,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Cu.x=o.normal.x>0?e.max.x:e.min.x,Cu.y=o.normal.y>0?e.max.y:e.min.y,Cu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class n1 extends Lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xx=new It,Wp=new e1,Ru=new vr,Lu=new G;class FE extends Fn{constructor(e=new zn,n=new n1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ru.copy(a.boundingSphere),Ru.applyMatrix4(o),Ru.radius+=c,e.ray.intersectsSphere(Ru)===!1)return;Xx.copy(o).invert(),Wp.copy(e.ray).applyMatrix4(Xx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,x=a.attributes.position;if(p!==null){const _=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let v=_,A=M;v<A;v++){const y=p.getX(v);Lu.fromBufferAttribute(x,y),Wx(Lu,y,m,o,e,n,this)}}else{const _=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let v=_,A=M;v<A;v++)Lu.fromBufferAttribute(x,v),Wx(Lu,v,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Wx(r,e,n,a,o,c,u){const d=Wp.distanceSqToPoint(r);if(d<n){const m=new G;Wp.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class i1 extends ei{constructor(e=[],n=pr,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wo extends ei{constructor(e,n,a=Sa,o,c,u,d=jn,m=jn,p,g=Ja,x=1){if(g!==Ja&&g!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:x};super(_,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zE extends wo{constructor(e,n=Sa,a=pr,o,c,u=jn,d=jn,m,p=Ja){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class a1 extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oi extends zn{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],x=[];let _=0,M=0;v("z","y","x",-1,-1,a,n,e,u,c,0),v("z","y","x",1,-1,a,n,-e,u,c,1),v("x","z","y",1,1,e,a,n,o,u,2),v("x","z","y",1,-1,e,a,-n,o,u,3),v("x","y","z",1,-1,e,n,a,o,c,4),v("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(x,2));function v(A,y,S,R,U,C,O,N,B,T,P){const Y=C/B,V=O/T,W=C/2,pe=O/2,se=N/2,J=B+1,F=T+1;let q=0,ne=0;const le=new G;for(let H=0;H<F;H++){const E=H*V-pe;for(let k=0;k<J;k++){const ae=k*Y-W;le[A]=ae*R,le[y]=E*U,le[S]=se,p.push(le.x,le.y,le.z),le[A]=0,le[y]=0,le[S]=N>0?1:-1,g.push(le.x,le.y,le.z),x.push(k/B),x.push(1-H/T),q+=1}}for(let H=0;H<T;H++)for(let E=0;E<B;E++){const k=_+E+J*H,ae=_+E+J*(H+1),ye=_+(E+1)+J*(H+1),Ee=_+(E+1)+J*H;m.push(k,ae,Ee),m.push(ae,ye,Ee),ne+=6}d.addGroup(M,ne,P),M+=ne,_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hr extends zn{constructor(e=1,n=1,a=1,o=32,c=1,u=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],x=[],_=[],M=[];let v=0;const A=[],y=a/2;let S=0;R(),u===!1&&(e>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(M,2));function R(){const C=new G,O=new G;let N=0;const B=(n-e)/a;for(let T=0;T<=c;T++){const P=[],Y=T/c,V=Y*(n-e)+e;for(let W=0;W<=o;W++){const pe=W/o,se=pe*m+d,J=Math.sin(se),F=Math.cos(se);O.x=V*J,O.y=-Y*a+y,O.z=V*F,x.push(O.x,O.y,O.z),C.set(J,B,F).normalize(),_.push(C.x,C.y,C.z),M.push(pe,1-Y),P.push(v++)}A.push(P)}for(let T=0;T<o;T++)for(let P=0;P<c;P++){const Y=A[P][T],V=A[P+1][T],W=A[P+1][T+1],pe=A[P][T+1];(e>0||P!==0)&&(g.push(Y,V,pe),N+=3),(n>0||P!==c-1)&&(g.push(V,W,pe),N+=3)}p.addGroup(S,N,0),S+=N}function U(C){const O=v,N=new He,B=new G;let T=0;const P=C===!0?e:n,Y=C===!0?1:-1;for(let W=1;W<=o;W++)x.push(0,y*Y,0),_.push(0,Y,0),M.push(.5,.5),v++;const V=v;for(let W=0;W<=o;W++){const se=W/o*m+d,J=Math.cos(se),F=Math.sin(se);B.x=P*F,B.y=y*Y,B.z=P*J,x.push(B.x,B.y,B.z),_.push(0,Y,0),N.x=J*.5+.5,N.y=F*.5*Y+.5,M.push(N.x,N.y),v++}for(let W=0;W<o;W++){const pe=O+W,se=V+W;C===!0?g.push(se,se+1,pe):g.push(se+1,se,pe),T+=3}p.addGroup(S,T,C===!0?1:2),S+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ym extends hr{constructor(e=1,n=1,a=32,o=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,a,o,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new ym(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sm extends zn{constructor(e=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:a,detail:o};const c=[],u=[];d(o),p(a),g(),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(c.slice(),3)),this.setAttribute("uv",new $t(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(R){const U=new G,C=new G,O=new G;for(let N=0;N<n.length;N+=3)M(n[N+0],U),M(n[N+1],C),M(n[N+2],O),m(U,C,O,R)}function m(R,U,C,O){const N=O+1,B=[];for(let T=0;T<=N;T++){B[T]=[];const P=R.clone().lerp(C,T/N),Y=U.clone().lerp(C,T/N),V=N-T;for(let W=0;W<=V;W++)W===0&&T===N?B[T][W]=P:B[T][W]=P.clone().lerp(Y,W/V)}for(let T=0;T<N;T++)for(let P=0;P<2*(N-T)-1;P++){const Y=Math.floor(P/2);P%2===0?(_(B[T][Y+1]),_(B[T+1][Y]),_(B[T][Y])):(_(B[T][Y+1]),_(B[T+1][Y+1]),_(B[T+1][Y]))}}function p(R){const U=new G;for(let C=0;C<c.length;C+=3)U.x=c[C+0],U.y=c[C+1],U.z=c[C+2],U.normalize().multiplyScalar(R),c[C+0]=U.x,c[C+1]=U.y,c[C+2]=U.z}function g(){const R=new G;for(let U=0;U<c.length;U+=3){R.x=c[U+0],R.y=c[U+1],R.z=c[U+2];const C=y(R)/2/Math.PI+.5,O=S(R)/Math.PI+.5;u.push(C,1-O)}v(),x()}function x(){for(let R=0;R<u.length;R+=6){const U=u[R+0],C=u[R+2],O=u[R+4],N=Math.max(U,C,O),B=Math.min(U,C,O);N>.9&&B<.1&&(U<.2&&(u[R+0]+=1),C<.2&&(u[R+2]+=1),O<.2&&(u[R+4]+=1))}}function _(R){c.push(R.x,R.y,R.z)}function M(R,U){const C=R*3;U.x=e[C+0],U.y=e[C+1],U.z=e[C+2]}function v(){const R=new G,U=new G,C=new G,O=new G,N=new He,B=new He,T=new He;for(let P=0,Y=0;P<c.length;P+=9,Y+=6){R.set(c[P+0],c[P+1],c[P+2]),U.set(c[P+3],c[P+4],c[P+5]),C.set(c[P+6],c[P+7],c[P+8]),N.set(u[Y+0],u[Y+1]),B.set(u[Y+2],u[Y+3]),T.set(u[Y+4],u[Y+5]),O.copy(R).add(U).add(C).divideScalar(3);const V=y(O);A(N,Y+0,R,V),A(B,Y+2,U,V),A(T,Y+4,C,V)}}function A(R,U,C,O){O<0&&R.x===1&&(u[U]=R.x-1),C.x===0&&C.z===0&&(u[U]=O/2/Math.PI+.5)}function y(R){return Math.atan2(R.z,-R.x)}function S(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sm(e.vertices,e.indices,e.radius,e.detail)}}class Mm extends zn{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],n=12,a=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:a,phiLength:o},n=Math.floor(n),o=At(o,0,Math.PI*2);const c=[],u=[],d=[],m=[],p=[],g=1/n,x=new G,_=new He,M=new G,v=new G,A=new G;let y=0,S=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:y=e[R+1].x-e[R].x,S=e[R+1].y-e[R].y,M.x=S*1,M.y=-y,M.z=S*0,A.copy(M),M.normalize(),m.push(M.x,M.y,M.z);break;case e.length-1:m.push(A.x,A.y,A.z);break;default:y=e[R+1].x-e[R].x,S=e[R+1].y-e[R].y,M.x=S*1,M.y=-y,M.z=S*0,v.copy(M),M.x+=A.x,M.y+=A.y,M.z+=A.z,M.normalize(),m.push(M.x,M.y,M.z),A.copy(v)}for(let R=0;R<=n;R++){const U=a+R*g*o,C=Math.sin(U),O=Math.cos(U);for(let N=0;N<=e.length-1;N++){x.x=e[N].x*C,x.y=e[N].y,x.z=e[N].x*O,u.push(x.x,x.y,x.z),_.x=R/n,_.y=N/(e.length-1),d.push(_.x,_.y);const B=m[3*N+0]*C,T=m[3*N+1],P=m[3*N+0]*O;p.push(B,T,P)}}for(let R=0;R<n;R++)for(let U=0;U<e.length-1;U++){const C=U+R*e.length,O=C,N=C+e.length,B=C+e.length+1,T=C+1;c.push(O,N,T),c.push(B,T,N)}this.setIndex(c),this.setAttribute("position",new $t(u,3)),this.setAttribute("uv",new $t(d,2)),this.setAttribute("normal",new $t(p,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mm(e.points,e.segments,e.phiStart,e.phiLength)}}class Zl extends Sm{constructor(e=1,n=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zl(e.radius,e.detail)}}class Ql extends zn{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,x=e/d,_=n/m,M=[],v=[],A=[],y=[];for(let S=0;S<g;S++){const R=S*_-u;for(let U=0;U<p;U++){const C=U*x-c;v.push(C,-R,0),A.push(0,0,1),y.push(U/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let R=0;R<d;R++){const U=R+p*S,C=R+p*(S+1),O=R+1+p*(S+1),N=R+1+p*S;M.push(U,C,N),M.push(C,O,N)}this.setIndex(M),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class bm extends zn{constructor(e=.5,n=1,a=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:u},a=Math.max(3,a),o=Math.max(1,o);const d=[],m=[],p=[],g=[];let x=e;const _=(n-e)/o,M=new G,v=new He;for(let A=0;A<=o;A++){for(let y=0;y<=a;y++){const S=c+y/a*u;M.x=x*Math.cos(S),M.y=x*Math.sin(S),m.push(M.x,M.y,M.z),p.push(0,0,1),v.x=(M.x/n+1)/2,v.y=(M.y/n+1)/2,g.push(v.x,v.y)}x+=_}for(let A=0;A<o;A++){const y=A*(a+1);for(let S=0;S<a;S++){const R=S+y,U=R,C=R+a+1,O=R+a+2,N=R+1;d.push(U,C,N),d.push(C,O,N)}}this.setIndex(d),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ui extends zn{constructor(e=1,n=32,a=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const g=[],x=new G,_=new G,M=[],v=[],A=[],y=[];for(let S=0;S<=a;S++){const R=[],U=S/a,C=u+U*d,O=e*Math.cos(C),N=Math.sqrt(e*e-O*O);let B=0;S===0&&u===0?B=.5/n:S===a&&m===Math.PI&&(B=-.5/n);for(let T=0;T<=n;T++){const P=T/n,Y=o+P*c;x.x=-N*Math.cos(Y),x.y=O,x.z=N*Math.sin(Y),v.push(x.x,x.y,x.z),_.copy(x).normalize(),A.push(_.x,_.y,_.z),y.push(P+B,1-U),R.push(p++)}g.push(R)}for(let S=0;S<a;S++)for(let R=0;R<n;R++){const U=g[S][R+1],C=g[S][R],O=g[S+1][R],N=g[S+1][R+1];(S!==0||u>0)&&M.push(U,C,N),(S!==a-1||m<Math.PI)&&M.push(C,O,N)}this.setIndex(M),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends zn{constructor(e=1,n=.4,a=12,o=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:a,tubularSegments:o,arc:c,thetaStart:u,thetaLength:d},a=Math.floor(a),o=Math.floor(o);const m=[],p=[],g=[],x=[],_=new G,M=new G,v=new G;for(let A=0;A<=a;A++){const y=u+A/a*d;for(let S=0;S<=o;S++){const R=S/o*c;M.x=(e+n*Math.cos(y))*Math.cos(R),M.y=(e+n*Math.cos(y))*Math.sin(R),M.z=n*Math.sin(y),p.push(M.x,M.y,M.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),v.subVectors(M,_).normalize(),g.push(v.x,v.y,v.z),x.push(S/o),x.push(A/a)}}for(let A=1;A<=a;A++)for(let y=1;y<=o;y++){const S=(o+1)*A+y-1,R=(o+1)*(A-1)+y-1,U=(o+1)*(A-1)+y,C=(o+1)*A+y;m.push(S,R,C),m.push(R,U,C)}this.setIndex(m),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ao(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(qx(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(qx(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function ri(r){const e={};for(let n=0;n<r.length;n++){const a=Ao(r[n]);for(const o in a)e[o]=a[o]}return e}function qx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function HE(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function s1(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Bs={clone:Ao,merge:ri};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=HE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new lt().setHex(o.value);break;case"v2":this.uniforms[a].value=new He().fromArray(o.value);break;case"v3":this.uniforms[a].value=new G().fromArray(o.value);break;case"v4":this.uniforms[a].value=new hn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new _t().fromArray(o.value);break;case"m4":this.uniforms[a].value=new It().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class r1 extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cn extends Lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xp,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $a,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VE extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YE extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(jx(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!jx(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function jx(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class XE{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const M=p[x],v=p[x+1];if(M.global&&(M.lastIndex=0),M.test(g))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const WE=new XE;class Em{constructor(e){this.manager=e!==void 0?e:WE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Em.DEFAULT_MATERIAL_NAME="__DEFAULT";const ho=new WeakMap;class qE extends Em{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Hh.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let x=ho.get(u);x===void 0&&(x=[],ho.set(u,x)),x.push({onLoad:n,onError:o})}return u}const d=ql("img");function m(){g(),n&&n(this);const x=ho.get(this)||[];for(let _=0;_<x.length;_++){const M=x[_];M.onLoad&&M.onLoad(this)}ho.delete(this),c.manager.itemEnd(e)}function p(x){g(),o&&o(x),Hh.remove(`image:${e}`);const _=ho.get(this)||[];for(let M=0;M<_.length;M++){const v=_[M];v.onError&&v.onError(x)}ho.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Hh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class es extends Em{constructor(e){super(e)}load(e,n,a,o){const c=new ei,u=new qE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Tm extends Fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class jE extends Tm{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Gh=new It,Zx=new G,Kx=new G;class o1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qu,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Zx.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zx),Kx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Kx),n.updateMatrixWorld(),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Wl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Du=new G,Nu=new _r,ha=new G;class l1 extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Du,Nu,ha),ha.x===1&&ha.y===1&&ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Nu,ha.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Du,Nu,ha),ha.x===1&&ha.y===1&&ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Nu,ha.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Us=new G,Qx=new He,Jx=new He;class _i extends l1{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jl*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,n){return this.getViewBounds(e,Qx,Jx),n.subVectors(Jx,Qx)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ZE extends o1{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0}}class KE extends Tm{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new ZE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Jl extends l1{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class QE extends o1{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JE extends Tm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new QE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const po=-90,mo=1;class $E extends Fn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new _i(po,mo,e,n);o.layers=this.layers,this.add(o);const c=new _i(po,mo,e,n);c.layers=this.layers,this.add(c);const u=new _i(po,mo,e,n);u.layers=this.layers,this.add(u);const d=new _i(po,mo,e,n);d.layers=this.layers,this.add(d);const m=new _i(po,mo,e,n);m.layers=this.layers,this.add(m);const p=new _i(po,mo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===xa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(x,_,M),e.xr.enabled=v,a.texture.needsPMREMUpdate=!0}}class eT extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tT{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=nT.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function nT(){this._document.hidden===!1&&this.reset()}class c1{static{c1.prototype.isMatrix2=!0}constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}}function $x(r,e,n,a){const o=iT(a);switch(n){case Wv:return r*e;case fm:return r*e/o.components*o.byteLength;case dm:return r*e/o.components*o.byteLength;case mr:return r*e*2/o.components*o.byteLength;case hm:return r*e*2/o.components*o.byteLength;case qv:return r*e*3/o.components*o.byteLength;case ra:return r*e*4/o.components*o.byteLength;case pm:return r*e*4/o.components*o.byteLength;case Iu:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fu:case zu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gp:case xp:return Math.max(r,16)*Math.max(e,8)/4;case mp:case _p:return Math.max(r,8)*Math.max(e,8)/2;case vp:case yp:case Mp:case bp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sp:case Xu:case Ep:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Np:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Up:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zp:case Hp:case Gp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kp:case Vp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Wu:case Yp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iT(r){switch(r){case Pi:case kv:return{byteLength:1,components:1};case Yl:case Vv:case xi:return{byteLength:2,components:1};case cm:case um:return{byteLength:2,components:4};case Sa:case lm:case sa:return{byteLength:4,components:1};case Yv:case Xv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);function u1(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function aT(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,x=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const g=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,g);else{x.sort((M,v)=>M.start-v.start);let _=0;for(let M=1;M<x.length;M++){const v=x[_],A=x[M];A.start<=v.start+v.count+1?v.count=Math.max(v.count,A.start+A.count-v.start):(++_,x[_]=A)}x.length=_+1;for(let M=0,v=x.length;M<v;M++){const A=x[M];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rT=`#ifdef USE_ALPHAHASH
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
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fT=`#ifdef USE_AOMAP
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
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hT=`#ifdef USE_BATCHING
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
#endif`,pT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_T=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xT=`#ifdef USE_IRIDESCENCE
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
#endif`,vT=`#ifdef USE_BUMPMAP
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,CT=`#define PI 3.141592653589793
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
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LT=`vec3 transformedNormal = objectNormal;
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
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PT="gl_FragColor = linearToOutputTexel( gl_FragColor );",IT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WT=`#ifdef USE_GRADIENTMAP
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
}`,qT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,QT=`#ifdef USE_ENVMAP
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
#endif`,JT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n3=`PhysicalMaterial material;
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
#endif`,i3=`uniform sampler2D dfgLUT;
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
}`,a3=`
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
#endif`,s3=`#if defined( RE_IndirectDiffuse )
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
#endif`,r3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o3=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,l3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m3=`#if defined( USE_POINTS_UV )
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
#endif`,g3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S3=`#ifdef USE_MORPHTARGETS
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
#endif`,M3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C3=`#ifdef USE_NORMALMAP
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
#endif`,R3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y3=`float getShadowMask() {
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
}`,X3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W3=`#ifdef USE_SKINNING
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
#endif`,q3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j3=`#ifdef USE_SKINNING
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
#endif`,Z3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$3=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rw=`uniform sampler2D t2D;
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`#include <common>
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
}`,dw=`#if DEPTH_PACKING == 3200
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
}`,hw=`#define DISTANCE
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
}`,pw=`#define DISTANCE
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`uniform float scale;
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
}`,xw=`uniform vec3 diffuse;
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
}`,vw=`#include <common>
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
}`,yw=`uniform vec3 diffuse;
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
}`,Sw=`#define LAMBERT
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
}`,Mw=`#define LAMBERT
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
}`,bw=`#define MATCAP
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
}`,Ew=`#define MATCAP
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
}`,Tw=`#define NORMAL
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
}`,ww=`#define NORMAL
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
}`,Aw=`#define PHONG
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
}`,Cw=`#define PHONG
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
}`,Rw=`#define STANDARD
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
}`,Lw=`#define STANDARD
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
}`,Dw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Uw=`uniform float size;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Pw=`#include <common>
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
}`,Iw=`uniform vec3 color;
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
}`,Bw=`uniform float rotation;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:sT,alphahash_pars_fragment:rT,alphamap_fragment:oT,alphamap_pars_fragment:lT,alphatest_fragment:cT,alphatest_pars_fragment:uT,aomap_fragment:fT,aomap_pars_fragment:dT,batching_pars_vertex:hT,batching_vertex:pT,begin_vertex:mT,beginnormal_vertex:gT,bsdfs:_T,iridescence_fragment:xT,bumpmap_pars_fragment:vT,clipping_planes_fragment:yT,clipping_planes_pars_fragment:ST,clipping_planes_pars_vertex:MT,clipping_planes_vertex:bT,color_fragment:ET,color_pars_fragment:TT,color_pars_vertex:wT,color_vertex:AT,common:CT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:LT,displacementmap_pars_vertex:DT,displacementmap_vertex:NT,emissivemap_fragment:UT,emissivemap_pars_fragment:OT,colorspace_fragment:PT,colorspace_pars_fragment:IT,envmap_fragment:BT,envmap_common_pars_fragment:FT,envmap_pars_fragment:zT,envmap_pars_vertex:HT,envmap_physical_pars_fragment:QT,envmap_vertex:GT,fog_vertex:kT,fog_pars_vertex:VT,fog_fragment:YT,fog_pars_fragment:XT,gradientmap_pars_fragment:WT,lightmap_pars_fragment:qT,lights_lambert_fragment:jT,lights_lambert_pars_fragment:ZT,lights_pars_begin:KT,lights_toon_fragment:JT,lights_toon_pars_fragment:$T,lights_phong_fragment:e3,lights_phong_pars_fragment:t3,lights_physical_fragment:n3,lights_physical_pars_fragment:i3,lights_fragment_begin:a3,lights_fragment_maps:s3,lights_fragment_end:r3,lightprobes_pars_fragment:o3,logdepthbuf_fragment:l3,logdepthbuf_pars_fragment:c3,logdepthbuf_pars_vertex:u3,logdepthbuf_vertex:f3,map_fragment:d3,map_pars_fragment:h3,map_particle_fragment:p3,map_particle_pars_fragment:m3,metalnessmap_fragment:g3,metalnessmap_pars_fragment:_3,morphinstance_vertex:x3,morphcolor_vertex:v3,morphnormal_vertex:y3,morphtarget_pars_vertex:S3,morphtarget_vertex:M3,normal_fragment_begin:b3,normal_fragment_maps:E3,normal_pars_fragment:T3,normal_pars_vertex:w3,normal_vertex:A3,normalmap_pars_fragment:C3,clearcoat_normal_fragment_begin:R3,clearcoat_normal_fragment_maps:L3,clearcoat_pars_fragment:D3,iridescence_pars_fragment:N3,opaque_fragment:U3,packing:O3,premultiplied_alpha_fragment:P3,project_vertex:I3,dithering_fragment:B3,dithering_pars_fragment:F3,roughnessmap_fragment:z3,roughnessmap_pars_fragment:H3,shadowmap_pars_fragment:G3,shadowmap_pars_vertex:k3,shadowmap_vertex:V3,shadowmask_pars_fragment:Y3,skinbase_vertex:X3,skinning_pars_vertex:W3,skinning_vertex:q3,skinnormal_vertex:j3,specularmap_fragment:Z3,specularmap_pars_fragment:K3,tonemapping_fragment:Q3,tonemapping_pars_fragment:J3,transmission_fragment:$3,transmission_pars_fragment:ew,uv_pars_fragment:tw,uv_pars_vertex:nw,uv_vertex:iw,worldpos_vertex:aw,background_vert:sw,background_frag:rw,backgroundCube_vert:ow,backgroundCube_frag:lw,cube_vert:cw,cube_frag:uw,depth_vert:fw,depth_frag:dw,distance_vert:hw,distance_frag:pw,equirect_vert:mw,equirect_frag:gw,linedashed_vert:_w,linedashed_frag:xw,meshbasic_vert:vw,meshbasic_frag:yw,meshlambert_vert:Sw,meshlambert_frag:Mw,meshmatcap_vert:bw,meshmatcap_frag:Ew,meshnormal_vert:Tw,meshnormal_frag:ww,meshphong_vert:Aw,meshphong_frag:Cw,meshphysical_vert:Rw,meshphysical_frag:Lw,meshtoon_vert:Dw,meshtoon_frag:Nw,points_vert:Uw,points_frag:Ow,shadow_vert:Pw,shadow_frag:Iw,sprite_vert:Bw,sprite_frag:Fw},Fe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ma={basic:{uniforms:ri([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ri([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ri([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ri([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ri([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ri([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ri([Fe.points,Fe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ri([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ri([Fe.common,Fe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ri([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ri([Fe.sprite,Fe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:ri([Fe.common,Fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:ri([Fe.lights,Fe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};ma.physical={uniforms:ri([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Uu={r:0,b:0,g:0},zw=new It,f1=new _t;f1.set(-1,0,0,0,1,0,0,0,1);function Hw(r,e,n,a,o,c){const u=new lt(0);let d=o===!0?0:1,m,p,g=null,x=0,_=null;function M(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){const C=R.backgroundBlurriness>0;U=e.get(U,C)}return U}function v(R){let U=!1;const C=M(R);C===null?y(u,d):C&&C.isColor&&(y(C,1),U=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(R,U){const C=M(U);C&&(C.isCubeTexture||C.mapping===Ku)?(p===void 0&&(p=new ht(new Oi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ao(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(zw.makeRotationFromEuler(U.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(f1),p.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Yt,(g!==C||x!==C.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,g=C,x=C.version,_=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ht(new Ql(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ao(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||x!==C.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,g=C,x=C.version,_=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,U){R.getRGB(Uu,s1(r)),n.buffers.color.setClear(Uu.r,Uu.g,Uu.b,U,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,U=1){u.set(R),d=U,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(u,d)},render:v,addToRenderList:A,dispose:S}}function Gw(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function d(V,W,pe,se,J){let F=!1;const q=x(V,se,pe,W);c!==q&&(c=q,p(c.object)),F=M(V,se,pe,J),F&&v(V,se,pe,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,C(V,W,pe,se),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function g(V){return r.deleteVertexArray(V)}function x(V,W,pe,se){const J=se.wireframe===!0;let F=a[W.id];F===void 0&&(F={},a[W.id]=F);const q=V.isInstancedMesh===!0?V.id:0;let ne=F[q];ne===void 0&&(ne={},F[q]=ne);let le=ne[pe.id];le===void 0&&(le={},ne[pe.id]=le);let H=le[J];return H===void 0&&(H=_(m()),le[J]=H),H}function _(V){const W=[],pe=[],se=[];for(let J=0;J<n;J++)W[J]=0,pe[J]=0,se[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:pe,attributeDivisors:se,object:V,attributes:{},index:null}}function M(V,W,pe,se){const J=c.attributes,F=W.attributes;let q=0;const ne=pe.getAttributes();for(const le in ne)if(ne[le].location>=0){const E=J[le];let k=F[le];if(k===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(k=V.instanceColor)),E===void 0||E.attribute!==k||k&&E.data!==k.data)return!0;q++}return c.attributesNum!==q||c.index!==se}function v(V,W,pe,se){const J={},F=W.attributes;let q=0;const ne=pe.getAttributes();for(const le in ne)if(ne[le].location>=0){let E=F[le];E===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(E=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(E=V.instanceColor));const k={};k.attribute=E,E&&E.data&&(k.data=E.data),J[le]=k,q++}c.attributes=J,c.attributesNum=q,c.index=se}function A(){const V=c.newAttributes;for(let W=0,pe=V.length;W<pe;W++)V[W]=0}function y(V){S(V,0)}function S(V,W){const pe=c.newAttributes,se=c.enabledAttributes,J=c.attributeDivisors;pe[V]=1,se[V]===0&&(r.enableVertexAttribArray(V),se[V]=1),J[V]!==W&&(r.vertexAttribDivisor(V,W),J[V]=W)}function R(){const V=c.newAttributes,W=c.enabledAttributes;for(let pe=0,se=W.length;pe<se;pe++)W[pe]!==V[pe]&&(r.disableVertexAttribArray(pe),W[pe]=0)}function U(V,W,pe,se,J,F,q){q===!0?r.vertexAttribIPointer(V,W,pe,J,F):r.vertexAttribPointer(V,W,pe,se,J,F)}function C(V,W,pe,se){A();const J=se.attributes,F=pe.getAttributes(),q=W.defaultAttributeValues;for(const ne in F){const le=F[ne];if(le.location>=0){let H=J[ne];if(H===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(H=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(H=V.instanceColor)),H!==void 0){const E=H.normalized,k=H.itemSize,ae=e.get(H);if(ae===void 0)continue;const ye=ae.buffer,Ee=ae.type,K=ae.bytesPerElement,ie=Ee===r.INT||Ee===r.UNSIGNED_INT||H.gpuType===lm;if(H.isInterleavedBufferAttribute){const me=H.data,Ce=me.stride,ke=H.offset;if(me.isInstancedInterleavedBuffer){for(let Ne=0;Ne<le.locationSize;Ne++)S(le.location+Ne,me.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ne=0;Ne<le.locationSize;Ne++)y(le.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ne=0;Ne<le.locationSize;Ne++)U(le.location+Ne,k/le.locationSize,Ee,E,Ce*K,(ke+k/le.locationSize*Ne)*K,ie)}else{if(H.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)S(le.location+me,H.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let me=0;me<le.locationSize;me++)y(le.location+me);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let me=0;me<le.locationSize;me++)U(le.location+me,k/le.locationSize,Ee,E,k*K,k/le.locationSize*me*K,ie)}}else if(q!==void 0){const E=q[ne];if(E!==void 0)switch(E.length){case 2:r.vertexAttrib2fv(le.location,E);break;case 3:r.vertexAttrib3fv(le.location,E);break;case 4:r.vertexAttrib4fv(le.location,E);break;default:r.vertexAttrib1fv(le.location,E)}}}}R()}function O(){P();for(const V in a){const W=a[V];for(const pe in W){const se=W[pe];for(const J in se){const F=se[J];for(const q in F)g(F[q].object),delete F[q];delete se[J]}}delete a[V]}}function N(V){if(a[V.id]===void 0)return;const W=a[V.id];for(const pe in W){const se=W[pe];for(const J in se){const F=se[J];for(const q in F)g(F[q].object),delete F[q];delete se[J]}}delete a[V.id]}function B(V){for(const W in a){const pe=a[W];for(const se in pe){const J=pe[se];if(J[V.id]===void 0)continue;const F=J[V.id];for(const q in F)g(F[q].object),delete F[q];delete J[V.id]}}}function T(V){for(const W in a){const pe=a[W],se=V.isInstancedMesh===!0?V.id:0,J=pe[se];if(J!==void 0){for(const F in J){const q=J[F];for(const ne in q)g(q[ne].object),delete q[ne];delete J[F]}delete pe[se],Object.keys(pe).length===0&&delete a[W]}}}function P(){Y(),u=!0,c!==o&&(c=o,p(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:P,resetDefaultState:Y,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:y,disableUnusedAttributes:R}}function kw(r,e,n){let a;function o(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,g){g!==0&&(r.drawArraysInstanced(a,m,p,g),n.update(p,a,g))}function d(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,g);let _=0;for(let M=0;M<g;M++)_+=p[M];n.update(_,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Vw(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==ra&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const T=B===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Pi&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sa&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(pt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:v,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:C,maxSamples:O,samples:N}}function Yw(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new Os,d=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||a!==0||o;return o=_,a=x.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){n=g(x,_,0)},this.setState=function(x,_,M){const v=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!o||v===null||v.length===0||c&&!y)c?g(null):p();else{const R=c?0:a,U=R*4;let C=S.clippingState||null;m.value=C,C=g(v,_,U,M);for(let O=0;O!==U;++O)C[O]=n[O];S.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(x,_,M,v){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=m.value,v!==!0||y===null){const S=M+A*4,R=_.matrixWorldInverse;d.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let U=0,C=M;U!==A;++U,C+=4)u.copy(x[U]).applyMatrix4(R,d),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Is=4,ev=[.125,.215,.35,.446,.526,.582],ur=20,Xw=256,Dl=new Jl,tv=new lt;let kh=null,Vh=0,Yh=0,Xh=!1;const Ww=new G;class qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=Ww}=c;kh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,Vh,Yh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===pr||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:xi,format:ra,colorSpace:qu,depthBuffer:!1},o=nv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qw(c)),this._blurMaterial=Zw(c,e,n),this._ggxMaterial=jw(c,e,n)}return o}_compileMaterial(e){const n=new ht(new zn,e);this._renderer.compile(n,Dl)}_sceneToCubeUV(e,n,a,o,c){const m=new _i(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(tv),x.toneMapping=ya,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Oi,new Za({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(tv),S=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const O=this._cubeSize;go(o,C*O,U>2?O:0,O,O),x.setRenderTarget(o),S&&x.render(A,m),x.render(e,m)}x.toneMapping=M,x.autoClear=_,e.background=R}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===pr||e.mapping===To;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;go(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Dl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=0+p*1.25,M=x*_,{_lodMax:v}=this,A=this._sizeLods[a],y=3*A*(a>v-Is?a-v+Is:0),S=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=v-n,go(c,y,S,3*A,2*A),o.setRenderTarget(c),o.render(d,Dl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=v-a,go(e,y,S,3*A,2*A),o.setRenderTarget(e),o.render(d,Dl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=p;const _=p.uniforms,M=this._sizeLods[a]-1,v=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ur-1),A=c/v,y=isFinite(c)?1+Math.floor(g*A):ur;y>ur&&pt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ur}`);const S=[];let R=0;for(let B=0;B<ur;++B){const T=B/A,P=Math.exp(-T*T/2);S.push(P),B===0?R+=P:B<y&&(R+=2*P)}for(let B=0;B<S.length;B++)S[B]=S[B]/R;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=v,_.mipInt.value=U-a;const C=this._sizeLods[o],O=3*C*(o>U-Is?o-U+Is:0),N=4*(this._cubeSize-C);go(n,O,N,3*C,2*C),m.setRenderTarget(n),m.render(x,Dl)}}function qw(r){const e=[],n=[],a=[];let o=r;const c=r-Is+1+ev.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-Is?m=ev[u-r+Is-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,v=6,A=3,y=2,S=1,R=new Float32Array(A*v*M),U=new Float32Array(y*v*M),C=new Float32Array(S*v*M);for(let N=0;N<M;N++){const B=N%3*2/3-1,T=N>2?0:-1,P=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];R.set(P,A*v*N),U.set(_,y*v*N);const Y=[N,N,N,N,N,N];C.set(Y,S*v*N)}const O=new zn;O.setAttribute("position",new Ii(R,A)),O.setAttribute("uv",new Ii(U,y)),O.setAttribute("faceIndex",new Ii(C,S)),a.push(new ht(O,null)),o>Is&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function nv(r,e,n){const a=new li(r,e,n);return a.texture.mapping=Ku,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function go(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function jw(r,e,n){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Zw(r,e,n){const a=new Float32Array(ur),o=new G(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function iv(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function av(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}class d1 extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new i1(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Oi(5,5,5),c=new Bn({name:"CubemapFromEquirect",uniforms:Ao(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:oi,blending:va});c.uniforms.tEquirect.value=n;const u=new ht(o,c),d=n.minFilter;return n.minFilter===fr&&(n.minFilter=$n),new $E(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function Kw(r){let e=new WeakMap,n=new WeakMap,a=null;function o(_,M=!1){return _==null?null:M?u(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===mh||M===gh)if(e.has(_)){const v=e.get(_).texture;return d(v,_.mapping)}else{const v=_.image;if(v&&v.height>0){const A=new d1(v.height);return A.fromEquirectangularTexture(r,_),e.set(_,A),_.addEventListener("dispose",p),d(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,v=M===mh||M===gh,A=M===pr||M===To;if(v||A){let y=n.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new qp(r)),y=v?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,n.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return v&&R&&R.height>0||A&&R&&m(R)?(a===null&&(a=new qp(r)),y=v?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,n.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function d(_,M){return M===mh?_.mapping=pr:M===gh&&(_.mapping=To),_}function m(_){let M=0;const v=6;for(let A=0;A<v;A++)_[A]!==void 0&&M++;return M===v}function p(_){const M=_.target;M.removeEventListener("dispose",p);const v=e.get(M);v!==void 0&&(e.delete(M),v.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const v=n.get(M);v!==void 0&&(n.delete(M),v.dispose())}function x(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:x}}function Qw(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&So("WebGLRenderer: "+a+" extension not supported."),o}}}function Jw(r,e,n,a){const o={},c=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const v in _.attributes)e.remove(_.attributes[v]);_.removeEventListener("dispose",u),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(x,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)e.update(_[M],r.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,v=x.attributes.position;let A=0;if(v===void 0)return;if(M!==null){const R=M.array;A=M.version;for(let U=0,C=R.length;U<C;U+=3){const O=R[U+0],N=R[U+1],B=R[U+2];_.push(O,N,N,B,B,O)}}else{const R=v.array;A=v.version;for(let U=0,C=R.length/3-1;U<C;U+=3){const O=U+0,N=U+1,B=U+2;_.push(O,N,N,B,B,O)}}const y=new(v.count>=65535?$v:Jv)(_,1);y.version=A;const S=c.get(x);S&&e.remove(S),c.set(x,y)}function g(x){const _=c.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function $w(r,e,n){let a;function o(x){a=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,_){r.drawElements(a,_,c,x*u),n.update(_,a,1)}function p(x,_,M){M!==0&&(r.drawElementsInstanced(a,_,c,x*u,M),n.update(_,a,M))}function g(x,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,c,x,0,M);let A=0;for(let y=0;y<M;y++)A+=_[y];n.update(A,a,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function eA(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function tA(r,e,n){const a=new WeakMap,o=new hn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let P=function(){B.dispose(),a.delete(d),d.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let U=0;M===!0&&(U=1),v===!0&&(U=2),A===!0&&(U=3);let C=d.attributes.position.count*U,O=1;C>e.maxTextureSize&&(O=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const N=new Float32Array(C*O*4*x),B=new Zv(N,C,O,x);B.type=sa,B.needsUpdate=!0;const T=U*4;for(let Y=0;Y<x;Y++){const V=y[Y],W=S[Y],pe=R[Y],se=C*O*4*Y;for(let J=0;J<V.count;J++){const F=J*T;M===!0&&(o.fromBufferAttribute(V,J),N[se+F+0]=o.x,N[se+F+1]=o.y,N[se+F+2]=o.z,N[se+F+3]=0),v===!0&&(o.fromBufferAttribute(W,J),N[se+F+4]=o.x,N[se+F+5]=o.y,N[se+F+6]=o.z,N[se+F+7]=0),A===!0&&(o.fromBufferAttribute(pe,J),N[se+F+8]=o.x,N[se+F+9]=o.y,N[se+F+10]=o.z,N[se+F+11]=pe.itemSize===4?o.w:1)}}_={count:x,texture:B,size:new He(C,O)},a.set(d,_),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let A=0;A<p.length;A++)M+=p[A];const v=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",v),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function nA(r,e,n,a,o){let c=new WeakMap;function u(p){const g=o.render.frame,x=p.geometry,_=e.get(p,x);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return _}function d(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:d}}const iA={[nm]:"LINEAR_TONE_MAPPING",[im]:"REINHARD_TONE_MAPPING",[am]:"CINEON_TONE_MAPPING",[Zu]:"ACES_FILMIC_TONE_MAPPING",[rm]:"AGX_TONE_MAPPING",[om]:"NEUTRAL_TONE_MAPPING",[sm]:"CUSTOM_TONE_MAPPING"};function aA(r,e,n,a,o,c){const u=new li(e,n,{type:r,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new wo(e,n):void 0}),d=new li(e,n,{type:xi,depthBuffer:!1,stencilBuffer:!1}),m=new zn;m.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new $t([0,2,0,0,2,0],2));const p=new r1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new ht(m,p),x=new Jl(-1,1,1,-1,0,1);let _=null,M=null,v=!1,A,y=null,S=[],R=!1;this.setSize=function(U,C){u.setSize(U,C),d.setSize(U,C);for(let O=0;O<S.length;O++){const N=S[O];N.setSize&&N.setSize(U,C)}},this.setEffects=function(U){S=U,R=S.length>0&&S[0].isRenderPass===!0;const C=u.width,O=u.height;for(let N=0;N<S.length;N++){const B=S[N];B.setSize&&B.setSize(C,O)}},this.begin=function(U,C){if(v||U.toneMapping===ya&&S.length===0)return!1;if(y=C,C!==null){const O=C.width,N=C.height;(u.width!==O||u.height!==N)&&this.setSize(O,N)}return R===!1&&U.setRenderTarget(u),A=U.toneMapping,U.toneMapping=ya,!0},this.hasRenderPass=function(){return R},this.end=function(U,C){U.toneMapping=A,v=!0;let O=u,N=d;for(let B=0;B<S.length;B++){const T=S[B];if(T.enabled!==!1&&(T.render(U,N,O,C),T.needsSwap!==!1)){const P=O;O=N,N=P}}if(_!==U.outputColorSpace||M!==U.toneMapping){_=U.outputColorSpace,M=U.toneMapping,p.defines={},Lt.getTransfer(_)===Yt&&(p.defines.SRGB_TRANSFER="");const B=iA[M];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,U.setRenderTarget(y),U.render(g,x),y=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),p.dispose()}}const h1=new ei,jp=new wo(1,1),p1=new Zv,m1=new yE,g1=new i1,sv=[],rv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function Do(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=sv[o];if(c===void 0&&(c=new Float32Array(o),sv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Nn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Un(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function $u(r,e){let n=rv[e];n===void 0&&(n=new Int32Array(e),rv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function sA(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function rA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;r.uniform2fv(this.addr,e),Un(n,e)}}function oA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nn(n,e))return;r.uniform3fv(this.addr,e),Un(n,e)}}function lA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;r.uniform4fv(this.addr,e),Un(n,e)}}function cA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Nn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Un(n,e)}else{if(Nn(n,a))return;cv.set(a),r.uniformMatrix2fv(this.addr,!1,cv),Un(n,a)}}function uA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Nn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Un(n,e)}else{if(Nn(n,a))return;lv.set(a),r.uniformMatrix3fv(this.addr,!1,lv),Un(n,a)}}function fA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Nn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Un(n,e)}else{if(Nn(n,a))return;ov.set(a),r.uniformMatrix4fv(this.addr,!1,ov),Un(n,a)}}function dA(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function hA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;r.uniform2iv(this.addr,e),Un(n,e)}}function pA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nn(n,e))return;r.uniform3iv(this.addr,e),Un(n,e)}}function mA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;r.uniform4iv(this.addr,e),Un(n,e)}}function gA(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function _A(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;r.uniform2uiv(this.addr,e),Un(n,e)}}function xA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nn(n,e))return;r.uniform3uiv(this.addr,e),Un(n,e)}}function vA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;r.uniform4uiv(this.addr,e),Un(n,e)}}function yA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(jp.compareFunction=n.isReversedDepthBuffer()?gm:mm,c=jp):c=h1,n.setTexture2D(e||c,o)}function SA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||m1,o)}function MA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||g1,o)}function bA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||p1,o)}function EA(r){switch(r){case 5126:return sA;case 35664:return rA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return fA;case 5124:case 35670:return dA;case 35667:case 35671:return hA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return xA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return bA}}function TA(r,e){r.uniform1fv(this.addr,e)}function wA(r,e){const n=Do(e,this.size,2);r.uniform2fv(this.addr,n)}function AA(r,e){const n=Do(e,this.size,3);r.uniform3fv(this.addr,n)}function CA(r,e){const n=Do(e,this.size,4);r.uniform4fv(this.addr,n)}function RA(r,e){const n=Do(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function LA(r,e){const n=Do(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function DA(r,e){const n=Do(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function NA(r,e){r.uniform1iv(this.addr,e)}function UA(r,e){r.uniform2iv(this.addr,e)}function OA(r,e){r.uniform3iv(this.addr,e)}function PA(r,e){r.uniform4iv(this.addr,e)}function IA(r,e){r.uniform1uiv(this.addr,e)}function BA(r,e){r.uniform2uiv(this.addr,e)}function FA(r,e){r.uniform3uiv(this.addr,e)}function zA(r,e){r.uniform4uiv(this.addr,e)}function HA(r,e,n){const a=this.cache,o=e.length,c=$u(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=jp:u=h1;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function GA(r,e,n){const a=this.cache,o=e.length,c=$u(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||m1,c[u])}function kA(r,e,n){const a=this.cache,o=e.length,c=$u(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||g1,c[u])}function VA(r,e,n){const a=this.cache,o=e.length,c=$u(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||p1,c[u])}function YA(r){switch(r){case 5126:return TA;case 35664:return wA;case 35665:return AA;case 35666:return CA;case 35674:return RA;case 35675:return LA;case 35676:return DA;case 5124:case 35670:return NA;case 35667:case 35671:return UA;case 35668:case 35672:return OA;case 35669:case 35673:return PA;case 5125:return IA;case 36294:return BA;case 36295:return FA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return VA}}class XA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=EA(n.type)}}class WA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YA(n.type)}}class qA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function uv(r,e){r.seq.push(e),r.map[e.id]=e}function jA(r,e,n){const a=r.name,o=a.length;for(Wh.lastIndex=0;;){const c=Wh.exec(a),u=Wh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){uv(n,p===void 0?new XA(d,r,e):new WA(d,r,e));break}else{let x=n.map[d];x===void 0&&(x=new qA(d),uv(n,x)),n=x}}}class Hu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(n,u),m=e.getUniformLocation(n,d.name);jA(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function fv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const ZA=37297;let KA=0;function QA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const dv=new _t;function JA(r){Lt._getMatrix(dv,Lt.workingColorSpace,r);const e=`mat3( ${dv.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(r)){case ju:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+QA(r.getShaderSource(e),d)}else return c}function $A(r,e){const n=JA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const eC={[nm]:"Linear",[im]:"Reinhard",[am]:"Cineon",[Zu]:"ACESFilmic",[rm]:"AgX",[om]:"Neutral",[sm]:"Custom"};function tC(r,e){const n=eC[e];return n===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ou=new G;function nC(){Lt.getLuminanceCoefficients(Ou);const r=Ou.x.toFixed(4),e=Ou.y.toFixed(4),n=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function aC(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function sC(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Bl(r){return r!==""}function pv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(r){return r.replace(rC,lC)}const oC=new Map;function lC(r,e){let n=Mt[e];if(n===void 0){const a=oC.get(e);if(a!==void 0)n=Mt[a],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zp(n)}const cC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(r){return r.replace(cC,uC)}function uC(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function _v(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const fC={[zl]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function dC(r){return fC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hC={[pr]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE",[Ku]:"ENVMAP_TYPE_CUBE_UV"};function pC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":hC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const mC={[To]:"ENVMAP_MODE_REFRACTION"};function gC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":mC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _C={[Hv]:"ENVMAP_BLENDING_MULTIPLY",[B2]:"ENVMAP_BLENDING_MIX",[F2]:"ENVMAP_BLENDING_ADD"};function xC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":_C[r.combine]||"ENVMAP_BLENDING_NONE"}function vC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function yC(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=dC(n),p=pC(n),g=gC(n),x=xC(n),_=vC(n),M=iC(n),v=aC(c),A=o.createProgram();let y,S,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Bl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Bl).join(`
`),S.length>0&&(S+=`
`)):(y=[_v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),S=[_v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ya?"#define TONE_MAPPING":"",n.toneMapping!==ya?Mt.tonemapping_pars_fragment:"",n.toneMapping!==ya?tC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,$A("linearToOutputTexel",n.outputColorSpace),nC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bl).join(`
`)),u=Zp(u),u=pv(u,n),u=mv(u,n),d=Zp(d),d=pv(d,n),d=mv(d,n),u=gv(u),d=gv(d),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===bx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=R+y+u,C=R+S+d,O=fv(o,o.VERTEX_SHADER,U),N=fv(o,o.FRAGMENT_SHADER,C);o.attachShader(A,O),o.attachShader(A,N),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function B(V){if(r.debug.checkShaderErrors){const W=o.getProgramInfoLog(A)||"",pe=o.getShaderInfoLog(O)||"",se=o.getShaderInfoLog(N)||"",J=W.trim(),F=pe.trim(),q=se.trim();let ne=!0,le=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,O,N);else{const H=hv(o,O,"vertex"),E=hv(o,N,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+H+`
`+E)}else J!==""?pt("WebGLProgram: Program Info Log:",J):(F===""||q==="")&&(le=!1);le&&(V.diagnostics={runnable:ne,programLog:J,vertexShader:{log:F,prefix:y},fragmentShader:{log:q,prefix:S}})}o.deleteShader(O),o.deleteShader(N),T=new Hu(o,A),P=sC(o,A)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(A,ZA)),Y},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=N,this}let SC=0;class MC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new bC(e),n.set(e,a)),a}}class bC{constructor(e){this.id=SC++,this.code=e,this.usedTimes=0}}function EC(r){return r===mr||r===Xu||r===Wu}function TC(r,e,n,a,o,c){const u=new Kv,d=new MC,m=new Set,p=[],g=new Map,x=a.logarithmicDepthBuffer;let _=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,P,Y,V,W,pe){const se=V.fog,J=W.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ne=e.get(T.envMap||F,q),le=ne&&ne.mapping===Ku?ne.image.height:null,H=M[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&pt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const E=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,k=E!==void 0?E.length:0;let ae=0;J.morphAttributes.position!==void 0&&(ae=1),J.morphAttributes.normal!==void 0&&(ae=2),J.morphAttributes.color!==void 0&&(ae=3);let ye,Ee,K,ie;if(H){const Ze=ma[H];ye=Ze.vertexShader,Ee=Ze.fragmentShader}else{ye=T.vertexShader,Ee=T.fragmentShader;const Ze=d.getVertexShaderStage(T),pn=d.getFragmentShaderStage(T);d.update(T,Ze,pn),K=Ze.id,ie=pn.id}const me=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),ke=W.isInstancedMesh===!0,Ne=W.isBatchedMesh===!0,ut=!!T.map,nt=!!T.matcap,Ve=!!ne,ct=!!T.aoMap,we=!!T.lightMap,Ye=!!T.bumpMap&&T.wireframe===!1,Qe=!!T.normalMap,qe=!!T.displacementMap,Dt=!!T.emissiveMap,Ut=!!T.metalnessMap,an=!!T.roughnessMap,Q=T.anisotropy>0,Gt=T.clearcoat>0,Ot=T.dispersion>0,z=T.iridescence>0,w=T.sheen>0,te=T.transmission>0,fe=Q&&!!T.anisotropyMap,_e=Gt&&!!T.clearcoatMap,Re=Gt&&!!T.clearcoatNormalMap,Oe=Gt&&!!T.clearcoatRoughnessMap,xe=z&&!!T.iridescenceMap,ve=z&&!!T.iridescenceThicknessMap,De=w&&!!T.sheenColorMap,Xe=w&&!!T.sheenRoughnessMap,Be=!!T.specularMap,Pe=!!T.specularColorMap,at=!!T.specularIntensityMap,st=te&&!!T.transmissionMap,mt=te&&!!T.thicknessMap,Z=!!T.gradientMap,Le=!!T.alphaMap,Me=T.alphaTest>0,Ue=!!T.alphaHash,Ge=!!T.extensions;let Ae=ya;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const et={shaderID:H,shaderType:T.type,shaderName:T.name,vertexShader:ye,fragmentShader:Ee,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Ne,batchingColor:Ne&&W._colorsTexture!==null,instancing:ke,instancingColor:ke&&W.instanceColor!==null,instancingMorph:ke&&W.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:nt,envMap:Ve,envMapMode:Ve&&ne.mapping,envMapCubeUVHeight:le,aoMap:ct,lightMap:we,bumpMap:Ye,normalMap:Qe,displacementMap:qe,emissiveMap:Dt,normalMapObjectSpace:Qe&&T.normalMapType===G2,normalMapTangentSpace:Qe&&T.normalMapType===Xp,packedNormalMap:Qe&&T.normalMapType===Xp&&EC(T.normalMap.format),metalnessMap:Ut,roughnessMap:an,anisotropy:Q,anisotropyMap:fe,clearcoat:Gt,clearcoatMap:_e,clearcoatNormalMap:Re,clearcoatRoughnessMap:Oe,dispersion:Ot,iridescence:z,iridescenceMap:xe,iridescenceThicknessMap:ve,sheen:w,sheenColorMap:De,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:Pe,specularIntensityMap:at,transmission:te,transmissionMap:st,thicknessMap:mt,gradientMap:Z,opaque:T.transparent===!1&&T.blending===yo&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:Me,alphaHash:Ue,combine:T.combine,mapUv:ut&&v(T.map.channel),aoMapUv:ct&&v(T.aoMap.channel),lightMapUv:we&&v(T.lightMap.channel),bumpMapUv:Ye&&v(T.bumpMap.channel),normalMapUv:Qe&&v(T.normalMap.channel),displacementMapUv:qe&&v(T.displacementMap.channel),emissiveMapUv:Dt&&v(T.emissiveMap.channel),metalnessMapUv:Ut&&v(T.metalnessMap.channel),roughnessMapUv:an&&v(T.roughnessMap.channel),anisotropyMapUv:fe&&v(T.anisotropyMap.channel),clearcoatMapUv:_e&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(T.sheenRoughnessMap.channel),specularMapUv:Be&&v(T.specularMap.channel),specularColorMapUv:Pe&&v(T.specularColorMap.channel),specularIntensityMapUv:at&&v(T.specularIntensityMap.channel),transmissionMapUv:st&&v(T.transmissionMap.channel),thicknessMapUv:mt&&v(T.thicknessMap.channel),alphaMapUv:Le&&v(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Qe||Q),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(ut||Le),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ce,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ae,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:Dt&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===na,flipSided:T.side===oi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return et.vertexUv1s=m.has(1),et.vertexUv2s=m.has(2),et.vertexUv3s=m.has(3),m.clear(),et}function y(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)P.push(Y),P.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(P,T),R(P,T),P.push(r.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function S(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function R(T,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function U(T){const P=M[T.type];let Y;if(P){const V=ma[P];Y=Bs.clone(V.uniforms)}else Y=T.uniforms;return Y}function C(T,P){let Y=g.get(P);return Y!==void 0?++Y.usedTimes:(Y=new yC(r,P,T,o),p.push(Y),g.set(P,Y)),Y}function O(T){if(--T.usedTimes===0){const P=p.indexOf(T);p[P]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function B(){d.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:U,acquireProgram:C,releaseProgram:O,releaseShaderCache:N,programs:p,dispose:B}}function wC(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function AC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function xv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vv(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,v,A,y,S){let R=r[e];return R===void 0?(R={id:_.id,object:_,geometry:M,material:v,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:y,group:S},r[e]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=v,R.materialVariant=u(_),R.groupOrder=A,R.renderOrder=_.renderOrder,R.z=y,R.group=S),e++,R}function m(_,M,v,A,y,S){const R=d(_,M,v,A,y,S);v.transmission>0?a.push(R):v.transparent===!0?o.push(R):n.push(R)}function p(_,M,v,A,y,S){const R=d(_,M,v,A,y,S);v.transmission>0?a.unshift(R):v.transparent===!0?o.unshift(R):n.unshift(R)}function g(_,M,v){n.length>1&&n.sort(_||AC),a.length>1&&a.sort(M||xv),o.length>1&&o.sort(M||xv),v&&(n.reverse(),a.reverse(),o.reverse())}function x(){for(let _=e,M=r.length;_<M;_++){const v=r[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:x,sort:g}}function CC(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new vv,r.set(a,[u])):o>=c.length?(u=new vv,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function RC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new lt};break;case"SpotLight":n={position:new G,direction:new G,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=n,n}}}function LC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let DC=0;function NC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function UC(r){const e=new RC,n=LC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new G);const o=new G,c=new It,u=new It;function d(p){let g=0,x=0,_=0;for(let P=0;P<9;P++)a.probe[P].set(0,0,0);let M=0,v=0,A=0,y=0,S=0,R=0,U=0,C=0,O=0,N=0,B=0;p.sort(NC);for(let P=0,Y=p.length;P<Y;P++){const V=p[P],W=V.color,pe=V.intensity,se=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===mr?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=W.r*pe,x+=W.g*pe,_+=W.b*pe;else if(V.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(V.sh.coefficients[F],pe);B++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,ne=n.get(V);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,a.directionalShadow[M]=ne,a.directionalShadowMap[M]=J,a.directionalShadowMatrix[M]=V.shadow.matrix,R++}a.directional[M]=F,M++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(W).multiplyScalar(pe),F.distance=se,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,a.spot[A]=F;const q=V.shadow;if(V.map&&(a.spotLightMap[O]=V.map,O++,q.updateMatrices(V),V.castShadow&&N++),a.spotLightMatrix[A]=q.matrix,V.castShadow){const ne=n.get(V);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,a.spotShadow[A]=ne,a.spotShadowMap[A]=J,C++}A++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(W).multiplyScalar(pe),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),a.rectArea[y]=F,y++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const q=V.shadow,ne=n.get(V);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,ne.shadowCameraNear=q.camera.near,ne.shadowCameraFar=q.camera.far,a.pointShadow[v]=ne,a.pointShadowMap[v]=J,a.pointShadowMatrix[v]=V.shadow.matrix,U++}a.point[v]=F,v++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(pe),F.groundColor.copy(V.groundColor).multiplyScalar(pe),a.hemi[S]=F,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=_;const T=a.hash;(T.directionalLength!==M||T.pointLength!==v||T.spotLength!==A||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==U||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==B)&&(a.directional.length=M,a.spot.length=A,a.rectArea.length=y,a.point.length=v,a.hemi.length=S,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+O-N,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=B,T.directionalLength=M,T.pointLength=v,T.spotLength=A,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=U,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=B,a.version=DC++)}function m(p,g){let x=0,_=0,M=0,v=0,A=0;const y=g.matrixWorldInverse;for(let S=0,R=p.length;S<R;S++){const U=p[S];if(U.isDirectionalLight){const C=a.directional[x];C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),x++}else if(U.isSpotLight){const C=a.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=a.rectArea[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(U.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),v++}else if(U.isPointLight){const C=a.point[_];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const C=a.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:a}}function yv(r){const e=new UC(r),n=[],a=[],o=[];function c(_){x.camera=_,n.length=0,a.length=0,o.length=0}function u(_){n.push(_)}function d(_){a.push(_)}function m(_){o.push(_)}function p(){e.setup(n)}function g(_){e.setupView(n,_)}const x={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function OC(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new yv(r),e.set(o,[d])):c>=u.length?(d=new yv(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const PC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IC=`uniform sampler2D shadow_pass;
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
}`,BC=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],FC=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Sv=new It,Nl=new G,qh=new G;function zC(r,e,n){let a=new Qu;const o=new He,c=new He,u=new hn,d=new VE,m=new YE,p={},g=n.maxTextureSize,x={[Qa]:oi,[oi]:Qa,[na]:na},_=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:PC,fragmentShader:IC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const v=new zn;v.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ht(v,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let S=this.type;this.render=function(N,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===x2&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zl);const P=r.getRenderTarget(),Y=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),W=r.state;W.setBlending(va),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const pe=S!==this.type;pe&&B.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(J=>J.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,J=N.length;se<J;se++){const F=N[se],q=F.shadow;if(q===void 0){pt("WebGLShadowMap:",F,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ne=q.getFrameExtents();o.multiply(ne),c.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ne.x),o.x=c.x*ne.x,q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ne.y),o.y=c.y*ne.y,q.mapSize.y=c.y));const le=r.state.buffers.depth.getReversed();if(q.camera._reversedDepth=le,q.map===null||pe===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Il){if(F.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new li(o.x,o.y,{format:mr,type:xi,minFilter:$n,magFilter:$n,generateMipmaps:!1}),q.map.texture.name=F.name+".shadowMap",q.map.depthTexture=new wo(o.x,o.y,sa),q.map.depthTexture.name=F.name+".shadowMapDepth",q.map.depthTexture.format=Ja,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jn,q.map.depthTexture.magFilter=jn}else F.isPointLight?(q.map=new d1(o.x),q.map.depthTexture=new zE(o.x,Sa)):(q.map=new li(o.x,o.y),q.map.depthTexture=new wo(o.x,o.y,Sa)),q.map.depthTexture.name=F.name+".shadowMap",q.map.depthTexture.format=Ja,this.type===zl?(q.map.depthTexture.compareFunction=le?gm:mm,q.map.depthTexture.minFilter=$n,q.map.depthTexture.magFilter=$n):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jn,q.map.depthTexture.magFilter=jn);q.camera.updateProjectionMatrix()}const H=q.map.isWebGLCubeRenderTarget?6:1;for(let E=0;E<H;E++){if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,E),r.clear();else{E===0&&(r.setRenderTarget(q.map),r.clear());const k=q.getViewport(E);u.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),W.viewport(u)}if(F.isPointLight){const k=q.camera,ae=q.matrix,ye=F.distance||k.far;ye!==k.far&&(k.far=ye,k.updateProjectionMatrix()),Nl.setFromMatrixPosition(F.matrixWorld),k.position.copy(Nl),qh.copy(k.position),qh.add(BC[E]),k.up.copy(FC[E]),k.lookAt(qh),k.updateMatrixWorld(),ae.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Sv.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Sv,k.coordinateSystem,k.reversedDepth)}else q.updateMatrices(F);a=q.getFrustum(),C(B,T,q.camera,F,this.type)}q.isPointLightShadow!==!0&&this.type===Il&&R(q,T),q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(P,Y,V)};function R(N,B){const T=e.update(A);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new li(o.x,o.y,{format:mr,type:xi})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(B,null,T,_,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(B,null,T,M,A,null)}function U(N,B,T,P){let Y=null;const V=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)Y=V;else if(Y=T.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const W=Y.uuid,pe=B.uuid;let se=p[W];se===void 0&&(se={},p[W]=se);let J=se[pe];J===void 0&&(J=Y.clone(),se[pe]=J,B.addEventListener("dispose",O)),Y=J}if(Y.visible=B.visible,Y.wireframe=B.wireframe,P===Il?Y.side=B.shadowSide!==null?B.shadowSide:B.side:Y.side=B.shadowSide!==null?B.shadowSide:x[B.side],Y.alphaMap=B.alphaMap,Y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Y.map=B.map,Y.clipShadows=B.clipShadows,Y.clippingPlanes=B.clippingPlanes,Y.clipIntersection=B.clipIntersection,Y.displacementMap=B.displacementMap,Y.displacementScale=B.displacementScale,Y.displacementBias=B.displacementBias,Y.wireframeLinewidth=B.wireframeLinewidth,Y.linewidth=B.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const W=r.properties.get(Y);W.light=T}return Y}function C(N,B,T,P,Y){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Y===Il)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const pe=e.update(N),se=N.material;if(Array.isArray(se)){const J=pe.groups;for(let F=0,q=J.length;F<q;F++){const ne=J[F],le=se[ne.materialIndex];if(le&&le.visible){const H=U(N,le,P,Y);N.onBeforeShadow(r,N,B,T,pe,H,ne),r.renderBufferDirect(T,null,pe,H,N,ne),N.onAfterShadow(r,N,B,T,pe,H,ne)}}}else if(se.visible){const J=U(N,se,P,Y);N.onBeforeShadow(r,N,B,T,pe,J,null),r.renderBufferDirect(T,null,pe,J,N,null),N.onAfterShadow(r,N,B,T,pe,J,null)}}const W=N.children;for(let pe=0,se=W.length;pe<se;pe++)C(W[pe],B,T,P,Y)}function O(N){N.target.removeEventListener("dispose",O);for(const T in p){const P=p[T],Y=N.target.uuid;Y in P&&(P[Y].dispose(),delete P[Y])}}}function HC(r,e){function n(){let Z=!1;const Le=new hn;let Me=null;const Ue=new hn(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!Z&&(r.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){Z=Ge},setClear:function(Ge,Ae,et,Ze,pn){pn===!0&&(Ge*=Ze,Ae*=Ze,et*=Ze),Le.set(Ge,Ae,et,Ze),Ue.equals(Le)===!1&&(r.clearColor(Ge,Ae,et,Ze),Ue.copy(Le))},reset:function(){Z=!1,Me=null,Ue.set(-1,0,0,0)}}}function a(){let Z=!1,Le=!1,Me=null,Ue=null,Ge=null;return{setReversed:function(Ae){if(Le!==Ae){const et=e.get("EXT_clip_control");Ae?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Le=Ae;const Ze=Ge;Ge=null,this.setClear(Ze)}},getReversed:function(){return Le},setTest:function(Ae){Ae?me(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(Ae){Me!==Ae&&!Z&&(r.depthMask(Ae),Me=Ae)},setFunc:function(Ae){if(Le&&(Ae=J2[Ae]),Ue!==Ae){switch(Ae){case op:r.depthFunc(r.NEVER);break;case lp:r.depthFunc(r.ALWAYS);break;case cp:r.depthFunc(r.LESS);break;case Eo:r.depthFunc(r.LEQUAL);break;case up:r.depthFunc(r.EQUAL);break;case fp:r.depthFunc(r.GEQUAL);break;case dp:r.depthFunc(r.GREATER);break;case hp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=Ae}},setLocked:function(Ae){Z=Ae},setClear:function(Ae){Ge!==Ae&&(Ge=Ae,Le&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){Z=!1,Me=null,Ue=null,Ge=null,Le=!1}}}function o(){let Z=!1,Le=null,Me=null,Ue=null,Ge=null,Ae=null,et=null,Ze=null,pn=null;return{setTest:function(Xt){Z||(Xt?me(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(Xt){Le!==Xt&&!Z&&(r.stencilMask(Xt),Le=Xt)},setFunc:function(Xt,vi,yi){(Me!==Xt||Ue!==vi||Ge!==yi)&&(r.stencilFunc(Xt,vi,yi),Me=Xt,Ue=vi,Ge=yi)},setOp:function(Xt,vi,yi){(Ae!==Xt||et!==vi||Ze!==yi)&&(r.stencilOp(Xt,vi,yi),Ae=Xt,et=vi,Ze=yi)},setLocked:function(Xt){Z=Xt},setClear:function(Xt){pn!==Xt&&(r.clearStencil(Xt),pn=Xt)},reset:function(){Z=!1,Le=null,Me=null,Ue=null,Ge=null,Ae=null,et=null,Ze=null,pn=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},x={},_={},M=new WeakMap,v=[],A=null,y=!1,S=null,R=null,U=null,C=null,O=null,N=null,B=null,T=new lt(0,0,0),P=0,Y=!1,V=null,W=null,pe=null,se=null,J=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ne=0;const le=r.getParameter(r.VERSION);le.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(le)[1]),q=ne>=1):le.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),q=ne>=2);let H=null,E={};const k=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),ye=new hn().fromArray(k),Ee=new hn().fromArray(ae);function K(Z,Le,Me,Ue){const Ge=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(Z,Ae),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<Me;et++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(Le+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Ae}const ie={};ie[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(r.DEPTH_TEST),u.setFunc(Eo),Ye(!1),Qe(xx),me(r.CULL_FACE),ct(va);function me(Z){g[Z]!==!0&&(r.enable(Z),g[Z]=!0)}function Ce(Z){g[Z]!==!1&&(r.disable(Z),g[Z]=!1)}function ke(Z,Le){return _[Z]!==Le?(r.bindFramebuffer(Z,Le),_[Z]=Le,Z===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Le),Z===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ne(Z,Le){let Me=v,Ue=!1;if(Z){Me=M.get(Le),Me===void 0&&(Me=[],M.set(Le,Me));const Ge=Z.textures;if(Me.length!==Ge.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,et=Ge.length;Ae<et;Ae++)Me[Ae]=r.COLOR_ATTACHMENT0+Ae;Me.length=Ge.length,Ue=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(Me)}function ut(Z){return A!==Z?(r.useProgram(Z),A=Z,!0):!1}const nt={[cr]:r.FUNC_ADD,[y2]:r.FUNC_SUBTRACT,[S2]:r.FUNC_REVERSE_SUBTRACT};nt[M2]=r.MIN,nt[b2]=r.MAX;const Ve={[E2]:r.ZERO,[T2]:r.ONE,[w2]:r.SRC_COLOR,[sp]:r.SRC_ALPHA,[N2]:r.SRC_ALPHA_SATURATE,[L2]:r.DST_COLOR,[C2]:r.DST_ALPHA,[A2]:r.ONE_MINUS_SRC_COLOR,[rp]:r.ONE_MINUS_SRC_ALPHA,[D2]:r.ONE_MINUS_DST_COLOR,[R2]:r.ONE_MINUS_DST_ALPHA,[U2]:r.CONSTANT_COLOR,[O2]:r.ONE_MINUS_CONSTANT_COLOR,[P2]:r.CONSTANT_ALPHA,[I2]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(Z,Le,Me,Ue,Ge,Ae,et,Ze,pn,Xt){if(Z===va){y===!0&&(Ce(r.BLEND),y=!1);return}if(y===!1&&(me(r.BLEND),y=!0),Z!==v2){if(Z!==S||Xt!==Y){if((R!==cr||O!==cr)&&(r.blendEquation(r.FUNC_ADD),R=cr,O=cr),Xt)switch(Z){case yo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vl:r.blendFunc(r.ONE,r.ONE);break;case vx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case yo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vx:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yx:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",Z);break}U=null,C=null,N=null,B=null,T.set(0,0,0),P=0,S=Z,Y=Xt}return}Ge=Ge||Le,Ae=Ae||Me,et=et||Ue,(Le!==R||Ge!==O)&&(r.blendEquationSeparate(nt[Le],nt[Ge]),R=Le,O=Ge),(Me!==U||Ue!==C||Ae!==N||et!==B)&&(r.blendFuncSeparate(Ve[Me],Ve[Ue],Ve[Ae],Ve[et]),U=Me,C=Ue,N=Ae,B=et),(Ze.equals(T)===!1||pn!==P)&&(r.blendColor(Ze.r,Ze.g,Ze.b,pn),T.copy(Ze),P=pn),S=Z,Y=!1}function we(Z,Le){Z.side===na?Ce(r.CULL_FACE):me(r.CULL_FACE);let Me=Z.side===oi;Le&&(Me=!Me),Ye(Me),Z.blending===yo&&Z.transparent===!1?ct(va):ct(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Ue=Z.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Dt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(Z){V!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),V=Z)}function Qe(Z){Z!==g2?(me(r.CULL_FACE),Z!==W&&(Z===xx?r.cullFace(r.BACK):Z===_2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),W=Z}function qe(Z){Z!==pe&&(q&&r.lineWidth(Z),pe=Z)}function Dt(Z,Le,Me){Z?(me(r.POLYGON_OFFSET_FILL),(se!==Le||J!==Me)&&(se=Le,J=Me,u.getReversed()&&(Le=-Le),r.polygonOffset(Le,Me))):Ce(r.POLYGON_OFFSET_FILL)}function Ut(Z){Z?me(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function an(Z){Z===void 0&&(Z=r.TEXTURE0+F-1),H!==Z&&(r.activeTexture(Z),H=Z)}function Q(Z,Le,Me){Me===void 0&&(H===null?Me=r.TEXTURE0+F-1:Me=H);let Ue=E[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},E[Me]=Ue),(Ue.type!==Z||Ue.texture!==Le)&&(H!==Me&&(r.activeTexture(Me),H=Me),r.bindTexture(Z,Le||ie[Z]),Ue.type=Z,Ue.texture=Le)}function Gt(){const Z=E[H];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Ot(){try{r.compressedTexImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function w(){try{r.texSubImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function te(){try{r.texSubImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function Re(){try{r.texStorage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function Oe(){try{r.texStorage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function xe(){try{r.texImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function ve(){try{r.texImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function De(Z){return x[Z]!==void 0?x[Z]:r.getParameter(Z)}function Xe(Z,Le){x[Z]!==Le&&(r.pixelStorei(Z,Le),x[Z]=Le)}function Be(Z){ye.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),ye.copy(Z))}function Pe(Z){Ee.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Ee.copy(Z))}function at(Z,Le){let Me=p.get(Le);Me===void 0&&(Me=new WeakMap,p.set(Le,Me));let Ue=Me.get(Z);Ue===void 0&&(Ue=r.getUniformBlockIndex(Le,Z.name),Me.set(Z,Ue))}function st(Z,Le){const Ue=p.get(Le).get(Z);m.get(Le)!==Ue&&(r.uniformBlockBinding(Le,Ue,Z.__bindingPointIndex),m.set(Le,Ue))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},x={},H=null,E={},_={},M=new WeakMap,v=[],A=null,y=!1,S=null,R=null,U=null,C=null,O=null,N=null,B=null,T=new lt(0,0,0),P=0,Y=!1,V=null,W=null,pe=null,se=null,J=null,ye.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:me,disable:Ce,bindFramebuffer:ke,drawBuffers:Ne,useProgram:ut,setBlending:ct,setMaterial:we,setFlipSided:Ye,setCullFace:Qe,setLineWidth:qe,setPolygonOffset:Dt,setScissorTest:Ut,activeTexture:an,bindTexture:Q,unbindTexture:Gt,compressedTexImage2D:Ot,compressedTexImage3D:z,texImage2D:xe,texImage3D:ve,pixelStorei:Xe,getParameter:De,updateUBOMapping:at,uniformBlockBinding:st,texStorage2D:Re,texStorage3D:Oe,texSubImage2D:w,texSubImage3D:te,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Be,viewport:Pe,reset:mt}}function GC(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new He,g=new WeakMap,x=new Set;let _;const M=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(z,w){return v?new OffscreenCanvas(z,w):ql("canvas")}function y(z,w,te){let fe=1;const _e=Ot(z);if((_e.width>te||_e.height>te)&&(fe=te/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Re=Math.floor(fe*_e.width),Oe=Math.floor(fe*_e.height);_===void 0&&(_=A(Re,Oe));const xe=w?A(Re,Oe):_;return xe.width=Re,xe.height=Oe,xe.getContext("2d").drawImage(z,0,0,Re,Oe),pt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Re+"x"+Oe+")."),xe}else return"data"in z&&pt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),z;return z}function S(z){return z.generateMipmaps}function R(z){r.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(z,w,te,fe,_e,Re=!1){if(z!==null){if(r[z]!==void 0)return r[z];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Oe;fe&&(Oe=e.get("EXT_texture_norm16"),Oe||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=w;if(w===r.RED&&(te===r.FLOAT&&(xe=r.R32F),te===r.HALF_FLOAT&&(xe=r.R16F),te===r.UNSIGNED_BYTE&&(xe=r.R8),te===r.UNSIGNED_SHORT&&Oe&&(xe=Oe.R16_EXT),te===r.SHORT&&Oe&&(xe=Oe.R16_SNORM_EXT)),w===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(xe=r.R8UI),te===r.UNSIGNED_SHORT&&(xe=r.R16UI),te===r.UNSIGNED_INT&&(xe=r.R32UI),te===r.BYTE&&(xe=r.R8I),te===r.SHORT&&(xe=r.R16I),te===r.INT&&(xe=r.R32I)),w===r.RG&&(te===r.FLOAT&&(xe=r.RG32F),te===r.HALF_FLOAT&&(xe=r.RG16F),te===r.UNSIGNED_BYTE&&(xe=r.RG8),te===r.UNSIGNED_SHORT&&Oe&&(xe=Oe.RG16_EXT),te===r.SHORT&&Oe&&(xe=Oe.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(xe=r.RG8UI),te===r.UNSIGNED_SHORT&&(xe=r.RG16UI),te===r.UNSIGNED_INT&&(xe=r.RG32UI),te===r.BYTE&&(xe=r.RG8I),te===r.SHORT&&(xe=r.RG16I),te===r.INT&&(xe=r.RG32I)),w===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(xe=r.RGB8UI),te===r.UNSIGNED_SHORT&&(xe=r.RGB16UI),te===r.UNSIGNED_INT&&(xe=r.RGB32UI),te===r.BYTE&&(xe=r.RGB8I),te===r.SHORT&&(xe=r.RGB16I),te===r.INT&&(xe=r.RGB32I)),w===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(xe=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(xe=r.RGBA16UI),te===r.UNSIGNED_INT&&(xe=r.RGBA32UI),te===r.BYTE&&(xe=r.RGBA8I),te===r.SHORT&&(xe=r.RGBA16I),te===r.INT&&(xe=r.RGBA32I)),w===r.RGB&&(te===r.UNSIGNED_SHORT&&Oe&&(xe=Oe.RGB16_EXT),te===r.SHORT&&Oe&&(xe=Oe.RGB16_SNORM_EXT),te===r.UNSIGNED_INT_5_9_9_9_REV&&(xe=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(xe=r.R11F_G11F_B10F)),w===r.RGBA){const ve=Re?ju:Lt.getTransfer(_e);te===r.FLOAT&&(xe=r.RGBA32F),te===r.HALF_FLOAT&&(xe=r.RGBA16F),te===r.UNSIGNED_BYTE&&(xe=ve===Yt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT&&Oe&&(xe=Oe.RGBA16_EXT),te===r.SHORT&&Oe&&(xe=Oe.RGBA16_SNORM_EXT),te===r.UNSIGNED_SHORT_4_4_4_4&&(xe=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(xe=r.RGB5_A1)}return(xe===r.R16F||xe===r.R32F||xe===r.RG16F||xe===r.RG32F||xe===r.RGBA16F||xe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function O(z,w){let te;return z?w===null||w===Sa||w===Xl?te=r.DEPTH24_STENCIL8:w===sa?te=r.DEPTH32F_STENCIL8:w===Yl&&(te=r.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Sa||w===Xl?te=r.DEPTH_COMPONENT24:w===sa?te=r.DEPTH_COMPONENT32F:w===Yl&&(te=r.DEPTH_COMPONENT16),te}function N(z,w){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==jn&&z.minFilter!==$n?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function B(z){const w=z.target;w.removeEventListener("dispose",B),P(w),w.isVideoTexture&&g.delete(w),w.isHTMLTexture&&x.delete(w)}function T(z){const w=z.target;w.removeEventListener("dispose",T),V(w)}function P(z){const w=a.get(z);if(w.__webglInit===void 0)return;const te=z.source,fe=M.get(te);if(fe){const _e=fe[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Y(z),Object.keys(fe).length===0&&M.delete(te)}a.remove(z)}function Y(z){const w=a.get(z);r.deleteTexture(w.__webglTexture);const te=z.source,fe=M.get(te);delete fe[w.__cacheKey],u.memory.textures--}function V(z){const w=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(w.__webglFramebuffer[fe]))for(let _e=0;_e<w.__webglFramebuffer[fe].length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[fe][_e]);else r.deleteFramebuffer(w.__webglFramebuffer[fe]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[fe])}else{if(Array.isArray(w.__webglFramebuffer))for(let fe=0;fe<w.__webglFramebuffer.length;fe++)r.deleteFramebuffer(w.__webglFramebuffer[fe]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let fe=0;fe<w.__webglColorRenderbuffer.length;fe++)w.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[fe]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=z.textures;for(let fe=0,_e=te.length;fe<_e;fe++){const Re=a.get(te[fe]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),u.memory.textures--),a.remove(te[fe])}a.remove(z)}let W=0;function pe(){W=0}function se(){return W}function J(z){W=z}function F(){const z=W;return z>=o.maxTextures&&pt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),W+=1,z}function q(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function ne(z,w){const te=a.get(z);if(z.isVideoTexture&&Q(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&te.__version!==z.version){const fe=z.image;if(fe===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(te,z,w);return}}else z.isExternalTexture&&(te.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+w)}function le(z,w){const te=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&te.__version!==z.version){Ce(te,z,w);return}else z.isExternalTexture&&(te.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+w)}function H(z,w){const te=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&te.__version!==z.version){Ce(te,z,w);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+w)}function E(z,w){const te=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&te.__version!==z.version){ke(te,z,w);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+w)}const k={[Jt]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[pp]:r.MIRRORED_REPEAT},ae={[jn]:r.NEAREST,[z2]:r.NEAREST_MIPMAP_NEAREST,[uu]:r.NEAREST_MIPMAP_LINEAR,[$n]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR},ye={[k2]:r.NEVER,[q2]:r.ALWAYS,[V2]:r.LESS,[mm]:r.LEQUAL,[Y2]:r.EQUAL,[gm]:r.GEQUAL,[X2]:r.GREATER,[W2]:r.NOTEQUAL};function Ee(z,w){if(w.type===sa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===$n||w.magFilter===_h||w.magFilter===uu||w.magFilter===fr||w.minFilter===$n||w.minFilter===_h||w.minFilter===uu||w.minFilter===fr)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,k[w.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,k[w.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,k[w.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,ae[w.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===jn||w.minFilter!==uu&&w.minFilter!==fr||w.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function K(z,w){let te=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",B));const fe=w.source;let _e=M.get(fe);_e===void 0&&(_e={},M.set(fe,_e));const Re=q(w);if(Re!==z.__cacheKey){_e[Re]===void 0&&(_e[Re]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,te=!0),_e[Re].usedTimes++;const Oe=_e[z.__cacheKey];Oe!==void 0&&(_e[z.__cacheKey].usedTimes--,Oe.usedTimes===0&&Y(w)),z.__cacheKey=Re,z.__webglTexture=_e[Re].texture}return te}function ie(z,w,te){return Math.floor(Math.floor(z/te)/w)}function me(z,w,te,fe){const Re=z.updateRanges;if(Re.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,te,fe,w.data);else{Re.sort((Xe,Be)=>Xe.start-Be.start);let Oe=0;for(let Xe=1;Xe<Re.length;Xe++){const Be=Re[Oe],Pe=Re[Xe],at=Be.start+Be.count,st=ie(Pe.start,w.width,4),mt=ie(Be.start,w.width,4);Pe.start<=at+1&&st===mt&&ie(Pe.start+Pe.count-1,w.width,4)===st?Be.count=Math.max(Be.count,Pe.start+Pe.count-Be.start):(++Oe,Re[Oe]=Pe)}Re.length=Oe+1;const xe=n.getParameter(r.UNPACK_ROW_LENGTH),ve=n.getParameter(r.UNPACK_SKIP_PIXELS),De=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Xe=0,Be=Re.length;Xe<Be;Xe++){const Pe=Re[Xe],at=Math.floor(Pe.start/4),st=Math.ceil(Pe.count/4),mt=at%w.width,Z=Math.floor(at/w.width),Le=st,Me=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(r.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(r.TEXTURE_2D,0,mt,Z,Le,Me,te,fe,w.data)}z.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,xe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Ce(z,w,te){let fe=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=r.TEXTURE_3D);const _e=K(z,w),Re=w.source;n.bindTexture(fe,z.__webglTexture,r.TEXTURE0+te);const Oe=a.get(Re);if(Re.version!==Oe.__version||_e===!0){if(n.activeTexture(r.TEXTURE0+te),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Me=Lt.getPrimaries(Lt.workingColorSpace),Ue=w.colorSpace===ja?null:Lt.getPrimaries(w.colorSpace),Ge=w.colorSpace===ja||Me===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=y(w.image,!1,o.maxTextureSize);ve=Gt(w,ve);const De=c.convert(w.format,w.colorSpace),Xe=c.convert(w.type);let Be=C(w.internalFormat,De,Xe,w.normalized,w.colorSpace,w.isVideoTexture);Ee(fe,w);let Pe;const at=w.mipmaps,st=w.isVideoTexture!==!0,mt=Oe.__version===void 0||_e===!0,Z=Re.dataReady,Le=N(w,ve);if(w.isDepthTexture)Be=O(w.format===dr,w.type),mt&&(st?n.texStorage2D(r.TEXTURE_2D,1,Be,ve.width,ve.height):n.texImage2D(r.TEXTURE_2D,0,Be,ve.width,ve.height,0,De,Xe,null));else if(w.isDataTexture)if(at.length>0){st&&mt&&n.texStorage2D(r.TEXTURE_2D,Le,Be,at[0].width,at[0].height);for(let Me=0,Ue=at.length;Me<Ue;Me++)Pe=at[Me],st?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,De,Xe,Pe.data):n.texImage2D(r.TEXTURE_2D,Me,Be,Pe.width,Pe.height,0,De,Xe,Pe.data);w.generateMipmaps=!1}else st?(mt&&n.texStorage2D(r.TEXTURE_2D,Le,Be,ve.width,ve.height),Z&&me(w,ve,De,Xe)):n.texImage2D(r.TEXTURE_2D,0,Be,ve.width,ve.height,0,De,Xe,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&mt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Be,at[0].width,at[0].height,ve.depth);for(let Me=0,Ue=at.length;Me<Ue;Me++)if(Pe=at[Me],w.format!==ra)if(De!==null)if(st){if(Z)if(w.layerUpdates.size>0){const Ge=$x(Pe.width,Pe.height,w.format,w.type);for(const Ae of w.layerUpdates){const et=Pe.data.subarray(Ae*Ge/Pe.data.BYTES_PER_ELEMENT,(Ae+1)*Ge/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,Ae,Pe.width,Pe.height,1,De,et)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ve.depth,De,Pe.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Be,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Z&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ve.depth,De,Xe,Pe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Me,Be,Pe.width,Pe.height,ve.depth,0,De,Xe,Pe.data)}else{st&&mt&&n.texStorage2D(r.TEXTURE_2D,Le,Be,at[0].width,at[0].height);for(let Me=0,Ue=at.length;Me<Ue;Me++)Pe=at[Me],w.format!==ra?De!==null?st?Z&&n.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,De,Pe.data):n.compressedTexImage2D(r.TEXTURE_2D,Me,Be,Pe.width,Pe.height,0,Pe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,De,Xe,Pe.data):n.texImage2D(r.TEXTURE_2D,Me,Be,Pe.width,Pe.height,0,De,Xe,Pe.data)}else if(w.isDataArrayTexture)if(st){if(mt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Be,ve.width,ve.height,ve.depth),Z)if(w.layerUpdates.size>0){const Me=$x(ve.width,ve.height,w.format,w.type);for(const Ue of w.layerUpdates){const Ge=ve.data.subarray(Ue*Me/ve.data.BYTES_PER_ELEMENT,(Ue+1)*Me/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,ve.width,ve.height,1,De,Xe,Ge)}w.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,Xe,ve.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,De,Xe,ve.data);else if(w.isData3DTexture)st?(mt&&n.texStorage3D(r.TEXTURE_3D,Le,Be,ve.width,ve.height,ve.depth),Z&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,Xe,ve.data)):n.texImage3D(r.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,De,Xe,ve.data);else if(w.isFramebufferTexture){if(mt)if(st)n.texStorage2D(r.TEXTURE_2D,Le,Be,ve.width,ve.height);else{let Me=ve.width,Ue=ve.height;for(let Ge=0;Ge<Le;Ge++)n.texImage2D(r.TEXTURE_2D,Ge,Be,Me,Ue,0,De,Xe,null),Me>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ve.parentNode!==Me){Me.appendChild(ve),x.add(w),Me.onpaint=Ue=>{const Ge=Ue.changedElements;for(const Ae of x)Ge.includes(Ae.image)&&(Ae.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ve);else{const Ge=r.RGBA,Ae=r.RGBA,et=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Ae,et,ve)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(at.length>0){if(st&&mt){const Me=Ot(at[0]);n.texStorage2D(r.TEXTURE_2D,Le,Be,Me.width,Me.height)}for(let Me=0,Ue=at.length;Me<Ue;Me++)Pe=at[Me],st?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,De,Xe,Pe):n.texImage2D(r.TEXTURE_2D,Me,Be,De,Xe,Pe);w.generateMipmaps=!1}else if(st){if(mt){const Me=Ot(ve);n.texStorage2D(r.TEXTURE_2D,Le,Be,Me.width,Me.height)}Z&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Xe,ve)}else n.texImage2D(r.TEXTURE_2D,0,Be,De,Xe,ve);S(w)&&R(fe),Oe.__version=Re.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function ke(z,w,te){if(w.image.length!==6)return;const fe=K(z,w),_e=w.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+te);const Re=a.get(_e);if(_e.version!==Re.__version||fe===!0){n.activeTexture(r.TEXTURE0+te);const Oe=Lt.getPrimaries(Lt.workingColorSpace),xe=w.colorSpace===ja?null:Lt.getPrimaries(w.colorSpace),ve=w.colorSpace===ja||Oe===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,Xe=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let Ae=0;Ae<6;Ae++)!De&&!Xe?Be[Ae]=y(w.image[Ae],!0,o.maxCubemapSize):Be[Ae]=Xe?w.image[Ae].image:w.image[Ae],Be[Ae]=Gt(w,Be[Ae]);const Pe=Be[0],at=c.convert(w.format,w.colorSpace),st=c.convert(w.type),mt=C(w.internalFormat,at,st,w.normalized,w.colorSpace),Z=w.isVideoTexture!==!0,Le=Re.__version===void 0||fe===!0,Me=_e.dataReady;let Ue=N(w,Pe);Ee(r.TEXTURE_CUBE_MAP,w);let Ge;if(De){Z&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,mt,Pe.width,Pe.height);for(let Ae=0;Ae<6;Ae++){Ge=Be[Ae].mipmaps;for(let et=0;et<Ge.length;et++){const Ze=Ge[et];w.format!==ra?at!==null?Z?Me&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,0,0,Ze.width,Ze.height,at,Ze.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,mt,Ze.width,Ze.height,0,Ze.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,0,0,Ze.width,Ze.height,at,st,Ze.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et,mt,Ze.width,Ze.height,0,at,st,Ze.data)}}}else{if(Ge=w.mipmaps,Z&&Le){Ge.length>0&&Ue++;const Ae=Ot(Be[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,mt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Xe){Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Be[Ae].width,Be[Ae].height,at,st,Be[Ae].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,Be[Ae].width,Be[Ae].height,0,at,st,Be[Ae].data);for(let et=0;et<Ge.length;et++){const pn=Ge[et].image[Ae].image;Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,0,0,pn.width,pn.height,at,st,pn.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,mt,pn.width,pn.height,0,at,st,pn.data)}}else{Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,at,st,Be[Ae]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,at,st,Be[Ae]);for(let et=0;et<Ge.length;et++){const Ze=Ge[et];Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,0,0,at,st,Ze.image[Ae]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et+1,mt,at,st,Ze.image[Ae])}}}S(w)&&R(r.TEXTURE_CUBE_MAP),Re.__version=_e.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Ne(z,w,te,fe,_e,Re){const Oe=c.convert(te.format,te.colorSpace),xe=c.convert(te.type),ve=C(te.internalFormat,Oe,xe,te.normalized,te.colorSpace),De=a.get(w),Xe=a.get(te);if(Xe.__renderTarget=w,!De.__hasExternalTextures){const Be=Math.max(1,w.width>>Re),Pe=Math.max(1,w.height>>Re);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?n.texImage3D(_e,Re,ve,Be,Pe,w.depth,0,Oe,xe,null):n.texImage2D(_e,Re,ve,Be,Pe,0,Oe,xe,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),an(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,_e,Xe.__webglTexture,0,Ut(w)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,_e,Xe.__webglTexture,Re),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(z,w,te){if(r.bindRenderbuffer(r.RENDERBUFFER,z),w.depthBuffer){const fe=w.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,Re=O(w.stencilBuffer,_e),Oe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;an(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut(w),Re,w.width,w.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut(w),Re,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Re,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,z)}else{const fe=w.textures;for(let _e=0;_e<fe.length;_e++){const Re=fe[_e],Oe=c.convert(Re.format,Re.colorSpace),xe=c.convert(Re.type),ve=C(Re.internalFormat,Oe,xe,Re.normalized,Re.colorSpace);an(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut(w),ve,w.width,w.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut(w),ve,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ve,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function nt(z,w,te){const fe=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=a.get(w.depthTexture);if(_e.__renderTarget=w,(!_e.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,w.depthTexture.addEventListener("dispose",B)),_e.__webglTexture===void 0){_e.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,w.depthTexture);const De=c.convert(w.depthTexture.format),Xe=c.convert(w.depthTexture.type);let Be;w.depthTexture.format===Ja?Be=r.DEPTH_COMPONENT24:w.depthTexture.format===dr&&(Be=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Be,w.width,w.height,0,De,Xe,null)}}else ne(w.depthTexture,0);const Re=_e.__webglTexture,Oe=Ut(w),xe=fe?r.TEXTURE_CUBE_MAP_POSITIVE_X+te:r.TEXTURE_2D,ve=w.depthTexture.format===dr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ja)an(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,xe,Re,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,xe,Re,0);else if(w.depthTexture.format===dr)an(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,xe,Re,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,xe,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(z){const w=a.get(z),te=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){const fe=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),fe){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=fe}if(z.depthTexture&&!w.__autoAllocateDepthBuffer)if(te)for(let fe=0;fe<6;fe++)nt(w.__webglFramebuffer[fe],z,fe);else{const fe=z.texture.mipmaps;fe&&fe.length>0?nt(w.__webglFramebuffer[0],z,0):nt(w.__webglFramebuffer,z,0)}else if(te){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]===void 0)w.__webglDepthbuffer[fe]=r.createRenderbuffer(),ut(w.__webglDepthbuffer[fe],z,!1);else{const _e=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,Re)}}else{const fe=z.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ut(w.__webglDepthbuffer,z,!1);else{const _e=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,Re)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(z,w,te){const fe=a.get(z);w!==void 0&&Ne(fe.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Ve(z)}function we(z){const w=z.texture,te=a.get(z),fe=a.get(w);z.addEventListener("dispose",T);const _e=z.textures,Re=z.isWebGLCubeRenderTarget===!0,Oe=_e.length>1;if(Oe||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=w.version,u.memory.textures++),Re){te.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[xe]=[];for(let ve=0;ve<w.mipmaps.length;ve++)te.__webglFramebuffer[xe][ve]=r.createFramebuffer()}else te.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)te.__webglFramebuffer[xe]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let xe=0,ve=_e.length;xe<ve;xe++){const De=a.get(_e[xe]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&an(z)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let xe=0;xe<_e.length;xe++){const ve=_e[xe];te.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[xe]);const De=c.convert(ve.format,ve.colorSpace),Xe=c.convert(ve.type),Be=C(ve.internalFormat,De,Xe,ve.normalized,ve.colorSpace,z.isXRRenderTarget===!0),Pe=Ut(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Be,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,te.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(te.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){n.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ne(te.__webglFramebuffer[xe][ve],z,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ve);else Ne(te.__webglFramebuffer[xe],z,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);S(w)&&R(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let xe=0,ve=_e.length;xe<ve;xe++){const De=_e[xe],Xe=a.get(De);let Be=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Be=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Be,Xe.__webglTexture),Ee(Be,De),Ne(te.__webglFramebuffer,z,De,r.COLOR_ATTACHMENT0+xe,Be,0),S(De)&&R(Be)}n.unbindTexture()}else{let xe=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(xe=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(xe,fe.__webglTexture),Ee(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ne(te.__webglFramebuffer[ve],z,w,r.COLOR_ATTACHMENT0,xe,ve);else Ne(te.__webglFramebuffer,z,w,r.COLOR_ATTACHMENT0,xe,0);S(w)&&R(xe),n.unbindTexture()}z.depthBuffer&&Ve(z)}function Ye(z){const w=z.textures;for(let te=0,fe=w.length;te<fe;te++){const _e=w[te];if(S(_e)){const Re=U(z),Oe=a.get(_e).__webglTexture;n.bindTexture(Re,Oe),R(Re),n.unbindTexture()}}}const Qe=[],qe=[];function Dt(z){if(z.samples>0){if(an(z)===!1){const w=z.textures,te=z.width,fe=z.height;let _e=r.COLOR_BUFFER_BIT;const Re=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=a.get(z),xe=w.length>1;if(xe)for(let De=0;De<w.length;De++)n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ve=z.texture.mipmaps;ve&&ve.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let De=0;De<w.length;De++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),xe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Xe=a.get(w[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,te,fe,0,0,te,fe,_e,r.NEAREST),m===!0&&(Qe.length=0,qe.length=0,Qe.push(r.COLOR_ATTACHMENT0+De),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Qe.push(Re),qe.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let De=0;De<w.length;De++){n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Xe=a.get(w[De]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Xe,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const w=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ut(z){return Math.min(o.maxSamples,z.samples)}function an(z){const w=a.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Q(z){const w=u.render.frame;g.get(z)!==w&&(g.set(z,w),z.update())}function Gt(z,w){const te=z.colorSpace,fe=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||te!==qu&&te!==ja&&(Lt.getTransfer(te)===Yt?(fe!==ra||_e!==Pi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",te)),w}function Ot(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=F,this.resetTextureUnits=pe,this.getTextureUnits=se,this.setTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=le,this.setTexture3D=H,this.setTextureCube=E,this.rebindTextures=ct,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kC(r,e){function n(a,o=ja){let c;const u=Lt.getTransfer(o);if(a===Pi)return r.UNSIGNED_BYTE;if(a===cm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===um)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Yv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Xv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===kv)return r.BYTE;if(a===Vv)return r.SHORT;if(a===Yl)return r.UNSIGNED_SHORT;if(a===lm)return r.INT;if(a===Sa)return r.UNSIGNED_INT;if(a===sa)return r.FLOAT;if(a===xi)return r.HALF_FLOAT;if(a===Wv)return r.ALPHA;if(a===qv)return r.RGB;if(a===ra)return r.RGBA;if(a===Ja)return r.DEPTH_COMPONENT;if(a===dr)return r.DEPTH_STENCIL;if(a===fm)return r.RED;if(a===dm)return r.RED_INTEGER;if(a===mr)return r.RG;if(a===hm)return r.RG_INTEGER;if(a===pm)return r.RGBA_INTEGER;if(a===Iu||a===Bu||a===Fu||a===zu)if(u===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===mp||a===gp||a===_p||a===xp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===mp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===gp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===_p)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===xp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===vp||a===yp||a===Sp||a===Mp||a===bp||a===Xu||a===Ep)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===vp||a===yp)return u===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Sp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Mp)return c.COMPRESSED_R11_EAC;if(a===bp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Xu)return c.COMPRESSED_RG11_EAC;if(a===Ep)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Tp||a===wp||a===Ap||a===Cp||a===Rp||a===Lp||a===Dp||a===Np||a===Up||a===Op||a===Pp||a===Ip||a===Bp||a===Fp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Tp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ap)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Cp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Rp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Lp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Dp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Np)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Up)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Op)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Pp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ip)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Bp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Fp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===zp||a===Hp||a===Gp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===zp)return u===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Gp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===kp||a===Vp||a===Wu||a===Yp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===kp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Vp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Wu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Xl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const VC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YC=`
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

}`;class XC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new a1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Bn({vertexShader:VC,fragmentShader:YC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ht(new Ql(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WC extends gr{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,x=null,_=null,M=null,v=null;const A=typeof XRWebGLBinding<"u",y=new XC,S={},R=n.getContextAttributes();let U=null,C=null;const O=[],N=[],B=new He;let T=null;const P=new _i;P.viewport=new hn;const Y=new _i;Y.viewport=new hn;const V=[P,Y],W=new eT;let pe=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=O[K];return ie===void 0&&(ie=new bh,O[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=O[K];return ie===void 0&&(ie=new bh,O[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=O[K];return ie===void 0&&(ie=new bh,O[K]=ie),ie.getHandSpace()};function J(K){const ie=N.indexOf(K.inputSource);if(ie===-1)return;const me=O[ie];me!==void 0&&(me.update(K.inputSource,K.frame,p||u),me.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",q);for(let K=0;K<O.length;K++){const ie=N[K];ie!==null&&(N[K]=null,O[K].disconnect(ie))}pe=null,se=null,y.reset();for(const K in S)delete S[K];e.setRenderTarget(U),M=null,_=null,x=null,o=null,C=null,Ee.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,a.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,a.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",F),o.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ce=null,ke=null;R.depth&&(ke=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=R.stencil?dr:Ja,Ce=R.stencil?Xl:Sa);const Ne={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(Ne),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new li(_.textureWidth,_.textureHeight,{format:ra,type:Pi,depthTexture:new wo(_.textureWidth,_.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new li(M.framebufferWidth,M.framebufferHeight,{format:ra,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Ee.setContext(o),Ee.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(K){for(let ie=0;ie<K.removed.length;ie++){const me=K.removed[ie],Ce=N.indexOf(me);Ce>=0&&(N[Ce]=null,O[Ce].disconnect(me))}for(let ie=0;ie<K.added.length;ie++){const me=K.added[ie];let Ce=N.indexOf(me);if(Ce===-1){for(let Ne=0;Ne<O.length;Ne++)if(Ne>=N.length){N.push(me),Ce=Ne;break}else if(N[Ne]===null){N[Ne]=me,Ce=Ne;break}if(Ce===-1)break}const ke=O[Ce];ke&&ke.connect(me)}}const ne=new G,le=new G;function H(K,ie,me){ne.setFromMatrixPosition(ie.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const Ce=ne.distanceTo(le),ke=ie.projectionMatrix.elements,Ne=me.projectionMatrix.elements,ut=ke[14]/(ke[10]-1),nt=ke[14]/(ke[10]+1),Ve=(ke[9]+1)/ke[5],ct=(ke[9]-1)/ke[5],we=(ke[8]-1)/ke[0],Ye=(Ne[8]+1)/Ne[0],Qe=ut*we,qe=ut*Ye,Dt=Ce/(-we+Ye),Ut=Dt*-we;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ut),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const an=ut+Dt,Q=nt+Dt,Gt=Qe-Ut,Ot=qe+(Ce-Ut),z=Ve*nt/Q*an,w=ct*nt/Q*an;K.projectionMatrix.makePerspective(Gt,Ot,z,w,an,Q),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function E(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let ie=K.near,me=K.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(me=y.depthFar)),W.near=Y.near=P.near=ie,W.far=Y.far=P.far=me,(pe!==W.near||se!==W.far)&&(o.updateRenderState({depthNear:W.near,depthFar:W.far}),pe=W.near,se=W.far),W.layers.mask=K.layers.mask|6,P.layers.mask=W.layers.mask&-5,Y.layers.mask=W.layers.mask&-3;const Ce=K.parent,ke=W.cameras;E(W,Ce);for(let Ne=0;Ne<ke.length;Ne++)E(ke[Ne],Ce);ke.length===2?H(W,P,Y):W.projectionMatrix.copy(P.projectionMatrix),k(K,W,Ce)};function k(K,ie,me){me===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(K){m=K,_!==null&&(_.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(K){return S[K]};let ae=null;function ye(K,ie){if(g=ie.getViewerPose(p||u),v=ie,g!==null){const me=g.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Ce=!1;me.length!==W.cameras.length&&(W.cameras.length=0,Ce=!0);for(let nt=0;nt<me.length;nt++){const Ve=me[nt];let ct=null;if(M!==null)ct=M.getViewport(Ve);else{const Ye=x.getViewSubImage(_,Ve);ct=Ye.viewport,nt===0&&(e.setRenderTargetTextures(C,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(C))}let we=V[nt];we===void 0&&(we=new _i,we.layers.enable(nt),we.viewport=new hn,V[nt]=we),we.matrix.fromArray(Ve.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ve.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(ct.x,ct.y,ct.width,ct.height),nt===0&&(W.matrix.copy(we.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ce===!0&&W.cameras.push(we)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=a.getBinding();const nt=x.getDepthInformation(me[0]);nt&&nt.isValid&&nt.texture&&y.init(nt,o.renderState)}if(ke&&ke.includes("camera-access")&&A){e.state.unbindTexture(),x=a.getBinding();for(let nt=0;nt<me.length;nt++){const Ve=me[nt].camera;if(Ve){let ct=S[Ve];ct||(ct=new a1,S[Ve]=ct);const we=x.getCameraImage(Ve);ct.sourceTexture=we}}}}for(let me=0;me<O.length;me++){const Ce=N[me],ke=O[me];Ce!==null&&ke!==void 0&&ke.update(Ce,ie,p||u)}ae&&ae(K,ie),ie.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ee=new u1;Ee.setAnimationLoop(ye),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const qC=new It,_1=new _t;_1.set(-1,0,0,0,1,0,0,0,1);function jC(r,e){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,s1(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,U,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(c(y,S),v(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,R,U):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===oi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===oi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),U=R.envMap,C=R.envMapRotation;U&&(y.envMap.value=U,y.envMapRotation.value.setFromMatrix4(qC.makeRotationFromEuler(C)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(_1),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,R,U){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=U*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===oi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function ZC(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const N=O.program;a.uniformBlockBinding(C,N)}function p(C,O){let N=o[C.id];N===void 0&&(y(C),N=g(C),o[C.id]=N,C.addEventListener("dispose",R));const B=O.program;a.updateUBOMapping(C,B);const T=e.render.frame;c[C.id]!==T&&(_(C),c[C.id]=T)}function g(C){const O=x();C.__bindingPointIndex=O;const N=r.createBuffer(),B=C.__size,T=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,N),N}function x(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const O=o[C.id],N=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,P=N.length;T<P;T++){const Y=N[T];if(Array.isArray(Y))for(let V=0,W=Y.length;V<W;V++)M(Y[V],T,V,B);else M(Y,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,O,N,B){if(A(C,O,N,B)===!0){const T=C.__offset,P=C.value;if(Array.isArray(P)){let Y=0;for(let V=0;V<P.length;V++){const W=P[V],pe=S(W);v(W,C.__data,Y),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(P,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}function v(C,O,N){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,N)}function A(C,O,N,B){const T=C.value,P=O+"_"+N;if(B[P]===void 0)return typeof T=="number"||typeof T=="boolean"?B[P]=T:ArrayBuffer.isView(T)?B[P]=T.slice():B[P]=T.clone(),!0;{const Y=B[P];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return B[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function y(C){const O=C.uniforms;let N=0;const B=16;for(let P=0,Y=O.length;P<Y;P++){const V=Array.isArray(O[P])?O[P]:[O[P]];for(let W=0,pe=V.length;W<pe;W++){const se=V[W],J=Array.isArray(se.value)?se.value:[se.value];for(let F=0,q=J.length;F<q;F++){const ne=J[F],le=S(ne),H=N%B,E=H%le.boundary,k=H+E;N+=E,k!==0&&B-k<le.storage&&(N+=B-k),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=N,N+=le.storage}}}const T=N%B;return T>0&&(N+=B-T),C.__size=N,C.__cache={},this}function S(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",C),O}function R(C){const O=C.target;O.removeEventListener("dispose",R);const N=u.indexOf(O.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function U(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:p,dispose:U}}const KC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pa=null;function QC(){return pa===null&&(pa=new t1(KC,16,16,mr,xi),pa.name="DFG_LUT",pa.minFilter=$n,pa.magFilter=$n,pa.wrapS=qn,pa.wrapT=qn,pa.generateMipmaps=!1,pa.needsUpdate=!0),pa}class JC{constructor(e={}){const{canvas:n=K2(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Pi}=e;this.isWebGLRenderer=!0;let v;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=a.getContextAttributes().alpha}else v=u;const A=M,y=new Set([pm,hm,dm]),S=new Set([Pi,Sa,Yl,Xl,cm,um]),R=new Uint32Array(4),U=new Int32Array(4),C=new G;let O=null,N=null;const B=[],T=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let V=!1,W=null,pe=null,se=null,J=null;this._outputColorSpace=gi;let F=0,q=0,ne=null,le=-1,H=null;const E=new hn,k=new hn;let ae=null;const ye=new lt(0);let Ee=0,K=n.width,ie=n.height,me=1,Ce=null,ke=null;const Ne=new hn(0,0,K,ie),ut=new hn(0,0,K,ie);let nt=!1;const Ve=new Qu;let ct=!1,we=!1;const Ye=new It,Qe=new G,qe=new hn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function an(){return ne===null?me:1}let Q=a;function Gt(L,$){return n.getContext(L,$)}try{const L={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tm}`),n.addEventListener("webglcontextlost",pn,!1),n.addEventListener("webglcontextrestored",Xt,!1),n.addEventListener("webglcontextcreationerror",vi,!1),Q===null){const $="webgl2";if(Q=Gt($,L),Q===null)throw Gt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw Pt("WebGLRenderer: "+L.message),L}let Ot,z,w,te,fe,_e,Re,Oe,xe,ve,De,Xe,Be,Pe,at,st,mt,Z,Le,Me,Ue,Ge,Ae;function et(){Ot=new Qw(Q),Ot.init(),Ue=new kC(Q,Ot),z=new Vw(Q,Ot,e,Ue),w=new HC(Q,Ot),z.reversedDepthBuffer&&_&&w.buffers.depth.setReversed(!0),pe=Q.createFramebuffer(),se=Q.createFramebuffer(),J=Q.createFramebuffer(),te=new eA(Q),fe=new wC,_e=new GC(Q,Ot,w,fe,z,Ue,te),Re=new Kw(Y),Oe=new aT(Q),Ge=new Gw(Q,Oe),xe=new Jw(Q,Oe,te,Ge),ve=new nA(Q,xe,Oe,Ge,te),Z=new tA(Q,z,_e),at=new Yw(fe),De=new TC(Y,Re,Ot,z,Ge,at),Xe=new jC(Y,fe),Be=new CC,Pe=new OC(Ot),mt=new Hw(Y,Re,w,ve,v,m),st=new zC(Y,ve,z),Ae=new ZC(Q,te,z,w),Le=new kw(Q,Ot,te),Me=new $w(Q,Ot,te),te.programs=De.programs,Y.capabilities=z,Y.extensions=Ot,Y.properties=fe,Y.renderLists=Be,Y.shadowMap=st,Y.state=w,Y.info=te}et(),A!==Pi&&(P=new aA(A,n.width,n.height,d,o,c));const Ze=new WC(Y,Q);this.xr=Ze,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const L=Ot.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ot.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(L){L!==void 0&&(me=L,this.setSize(K,ie,!1))},this.getSize=function(L){return L.set(K,ie)},this.setSize=function(L,$,de=!0){if(Ze.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=L,ie=$,n.width=Math.floor(L*me),n.height=Math.floor($*me),de===!0&&(n.style.width=L+"px",n.style.height=$+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(K*me,ie*me).floor()},this.setDrawingBufferSize=function(L,$,de){K=L,ie=$,me=de,n.width=Math.floor(L*de),n.height=Math.floor($*de),this.setViewport(0,0,L,$)},this.setEffects=function(L){if(A===Pi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let $=0;$<L.length;$++)if(L[$].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(Ne)},this.setViewport=function(L,$,de,ce){L.isVector4?Ne.set(L.x,L.y,L.z,L.w):Ne.set(L,$,de,ce),w.viewport(E.copy(Ne).multiplyScalar(me).round())},this.getScissor=function(L){return L.copy(ut)},this.setScissor=function(L,$,de,ce){L.isVector4?ut.set(L.x,L.y,L.z,L.w):ut.set(L,$,de,ce),w.scissor(k.copy(ut).multiplyScalar(me).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(L){w.setScissorTest(nt=L)},this.setOpaqueSort=function(L){Ce=L},this.setTransparentSort=function(L){ke=L},this.getClearColor=function(L){return L.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,de=!0){let ce=0;if(L){let ue=!1;if(ne!==null){const ze=ne.texture.format;ue=y.has(ze)}if(ue){const ze=ne.texture.type,je=S.has(ze),Ie=mt.getClearColor(),Je=mt.getClearAlpha(),Ke=Ie.r,rt=Ie.g,xt=Ie.b;je?(R[0]=Ke,R[1]=rt,R[2]=xt,R[3]=Je,Q.clearBufferuiv(Q.COLOR,0,R)):(U[0]=Ke,U[1]=rt,U[2]=xt,U[3]=Je,Q.clearBufferiv(Q.COLOR,0,U))}else ce|=Q.COLOR_BUFFER_BIT}$&&(ce|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ce|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&Q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),W=L},this.dispose=function(){n.removeEventListener("webglcontextlost",pn,!1),n.removeEventListener("webglcontextrestored",Xt,!1),n.removeEventListener("webglcontextcreationerror",vi,!1),mt.dispose(),Be.dispose(),Pe.dispose(),fe.dispose(),Re.dispose(),ve.dispose(),Ge.dispose(),Ae.dispose(),De.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",bn),Ze.removeEventListener("sessionend",Hn),ci.stop()};function pn(L){L.preventDefault(),Tx("WebGLRenderer: Context Lost."),V=!0}function Xt(){Tx("WebGLRenderer: Context Restored."),V=!1;const L=te.autoReset,$=st.enabled,de=st.autoUpdate,ce=st.needsUpdate,ue=st.type;et(),te.autoReset=L,st.enabled=$,st.autoUpdate=de,st.needsUpdate=ce,st.type=ue}function vi(L){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function yi(L){const $=L.target;$.removeEventListener("dispose",yi),Uo($)}function Uo(L){Oo(L),fe.remove(L)}function Oo(L){const $=fe.get(L).programs;$!==void 0&&($.forEach(function(de){De.releaseProgram(de)}),L.isShaderMaterial&&De.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,de,ce,ue,ze){$===null&&($=Dt);const je=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Ie=is(L,$,de,ce,ue);w.setMaterial(ce,je);let Je=de.index,Ke=1;if(ce.wireframe===!0){if(Je=xe.getWireframeAttribute(de),Je===void 0)return;Ke=2}const rt=de.drawRange,xt=de.attributes.position;let it=rt.start*Ke,Bt=(rt.start+rt.count)*Ke;ze!==null&&(it=Math.max(it,ze.start*Ke),Bt=Math.min(Bt,(ze.start+ze.count)*Ke)),Je!==null?(it=Math.max(it,0),Bt=Math.min(Bt,Je.count)):xt!=null&&(it=Math.max(it,0),Bt=Math.min(Bt,xt.count));const mn=Bt-it;if(mn<0||mn===1/0)return;Ge.setup(ue,ce,Ie,de,Je);let sn,Wt=Le;if(Je!==null&&(sn=Oe.get(Je),Wt=Me,Wt.setIndex(sn)),ue.isMesh)ce.wireframe===!0?(w.setLineWidth(ce.wireframeLinewidth*an()),Wt.setMode(Q.LINES)):Wt.setMode(Q.TRIANGLES);else if(ue.isLine){let qt=ce.linewidth;qt===void 0&&(qt=1),w.setLineWidth(qt*an()),ue.isLineSegments?Wt.setMode(Q.LINES):ue.isLineLoop?Wt.setMode(Q.LINE_LOOP):Wt.setMode(Q.LINE_STRIP)}else ue.isPoints?Wt.setMode(Q.POINTS):ue.isSprite&&Wt.setMode(Q.TRIANGLES);if(ue.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const qt=ue._multiDrawStarts,We=ue._multiDrawCounts,Zn=ue._multiDrawCount,Et=Je?Oe.get(Je).bytesPerElement:1,Ln=fe.get(ce).currentProgram.getUniforms();for(let Si=0;Si<Zn;Si++)Ln.setValue(Q,"_gl_DrawID",Si),Wt.render(qt[Si]/Et,We[Si])}else if(ue.isInstancedMesh)Wt.renderInstances(it,mn,ue.count);else if(de.isInstancedBufferGeometry){const qt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,We=Math.min(de.instanceCount,qt);Wt.renderInstances(it,mn,We)}else Wt.render(it,mn)};function Po(L,$,de){L.transparent===!0&&L.side===na&&L.forceSinglePass===!1?(L.side=oi,L.needsUpdate=!0,ns(L,$,de),L.side=Qa,L.needsUpdate=!0,ns(L,$,de),L.side=na):ns(L,$,de)}this.compile=function(L,$,de=null){de===null&&(de=L),N=Pe.get(de),N.init($),T.push(N),de.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(N.pushLight(ue),ue.castShadow&&N.pushShadow(ue))}),L!==de&&L.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(N.pushLight(ue),ue.castShadow&&N.pushShadow(ue))}),N.setupLights();const ce=new Set;return L.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const ze=ue.material;if(ze)if(Array.isArray(ze))for(let je=0;je<ze.length;je++){const Ie=ze[je];Po(Ie,de,ue),ce.add(Ie)}else Po(ze,de,ue),ce.add(ze)}),N=T.pop(),ce},this.compileAsync=function(L,$,de=null){const ce=this.compile(L,$,de);return new Promise(ue=>{function ze(){if(ce.forEach(function(je){fe.get(je).currentProgram.isReady()&&ce.delete(je)}),ce.size===0){ue(L);return}setTimeout(ze,10)}Ot.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Mr=null;function oa(L){Mr&&Mr(L)}function bn(){ci.stop()}function Hn(){ci.start()}const ci=new u1;ci.setAnimationLoop(oa),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(L){Mr=L,Ze.setAnimationLoop(L),L===null?ci.stop():ci.start()},Ze.addEventListener("sessionstart",bn),Ze.addEventListener("sessionend",Hn),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;W!==null&&W.renderStart(L,$);const de=Ze.enabled===!0&&Ze.isPresenting===!0,ce=P!==null&&(ne===null||de)&&P.begin(Y,ne);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera($),$=Ze.getCamera()),L.isScene===!0&&L.onBeforeRender(Y,L,$,ne),N=Pe.get(L,T.length),N.init($),N.state.textureUnits=_e.getTextureUnits(),T.push(N),Ye.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ve.setFromProjectionMatrix(Ye,xa,$.reversedDepth),we=this.localClippingEnabled,ct=at.init(this.clippingPlanes,we),O=Be.get(L,B.length),O.init(),B.push(O),Ze.enabled===!0&&Ze.isPresenting===!0){const je=Y.xr.getDepthSensingMesh();je!==null&&Fs(je,$,-1/0,Y.sortObjects)}Fs(L,$,0,Y.sortObjects),O.finish(),Y.sortObjects===!0&&O.sort(Ce,ke,$.reversedDepth),Ut=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Ut&&mt.addToRenderList(O,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&at.beginShadows();const ue=N.state.shadowsArray;if(st.render(ue,L,$),ct===!0&&at.endShadows(),(ce&&P.hasRenderPass())===!1){const je=O.opaque,Ie=O.transmissive;if(N.setupLights(),$.isArrayCamera){const Je=$.cameras;if(Ie.length>0)for(let Ke=0,rt=Je.length;Ke<rt;Ke++){const xt=Je[Ke];ec(je,Ie,L,xt)}Ut&&mt.render(L);for(let Ke=0,rt=Je.length;Ke<rt;Ke++){const xt=Je[Ke];$l(O,L,xt,xt.viewport)}}else Ie.length>0&&ec(je,Ie,L,$),Ut&&mt.render(L),$l(O,L,$)}ne!==null&&q===0&&(_e.updateMultisampleRenderTarget(ne),_e.updateRenderTargetMipmap(ne)),ce&&P.end(Y),L.isScene===!0&&L.onAfterRender(Y,L,$),Ge.resetDefaultState(),le=-1,H=null,T.pop(),T.length>0?(N=T[T.length-1],_e.setTextureUnits(N.state.textureUnits),ct===!0&&at.setGlobalState(Y.clippingPlanes,N.state.camera)):N=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,W!==null&&W.renderEnd()};function Fs(L,$,de,ce){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)de=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLightProbeGrid)N.pushLightProbeGrid(L);else if(L.isLight)N.pushLight(L),L.castShadow&&N.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Ve.intersectsSprite(L)){ce&&qe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ye);const je=ve.update(L),Ie=L.material;Ie.visible&&O.push(L,je,Ie,de,qe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Ve.intersectsObject(L))){const je=ve.update(L),Ie=L.material;if(ce&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),qe.copy(L.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),qe.copy(je.boundingSphere.center)),qe.applyMatrix4(L.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ie)){const Je=je.groups;for(let Ke=0,rt=Je.length;Ke<rt;Ke++){const xt=Je[Ke],it=Ie[xt.materialIndex];it&&it.visible&&O.push(L,je,it,de,qe.z,xt)}}else Ie.visible&&O.push(L,je,Ie,de,qe.z,null)}}const ze=L.children;for(let je=0,Ie=ze.length;je<Ie;je++)Fs(ze[je],$,de,ce)}function $l(L,$,de,ce){const{opaque:ue,transmissive:ze,transparent:je}=L;N.setupLightsView(de),ct===!0&&at.setGlobalState(Y.clippingPlanes,de),ce&&w.viewport(E.copy(ce)),ue.length>0&&zs(ue,$,de),ze.length>0&&zs(ze,$,de),je.length>0&&zs(je,$,de),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function ec(L,$,de,ce){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ce.id]===void 0){const it=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ce.id]=new li(1,1,{generateMipmaps:!0,type:it?xi:Pi,minFilter:fr,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const ze=N.state.transmissionRenderTarget[ce.id],je=ce.viewport||E;ze.setSize(je.z*Y.transmissionResolutionScale,je.w*Y.transmissionResolutionScale);const Ie=Y.getRenderTarget(),Je=Y.getActiveCubeFace(),Ke=Y.getActiveMipmapLevel();Y.setRenderTarget(ze),Y.getClearColor(ye),Ee=Y.getClearAlpha(),Ee<1&&Y.setClearColor(16777215,.5),Y.clear(),Ut&&mt.render(de);const rt=Y.toneMapping;Y.toneMapping=ya;const xt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),N.setupLightsView(ce),ct===!0&&at.setGlobalState(Y.clippingPlanes,ce),zs(L,de,ce),_e.updateMultisampleRenderTarget(ze),_e.updateRenderTargetMipmap(ze),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Bt=0,mn=$.length;Bt<mn;Bt++){const sn=$[Bt],{object:Wt,geometry:qt,material:We,group:Zn}=sn;if(We.side===na&&Wt.layers.test(ce.layers)){const Et=We.side;We.side=oi,We.needsUpdate=!0,ts(Wt,de,ce,qt,We,Zn),We.side=Et,We.needsUpdate=!0,it=!0}}it===!0&&(_e.updateMultisampleRenderTarget(ze),_e.updateRenderTargetMipmap(ze))}Y.setRenderTarget(Ie,Je,Ke),Y.setClearColor(ye,Ee),xt!==void 0&&(ce.viewport=xt),Y.toneMapping=rt}function zs(L,$,de){const ce=$.isScene===!0?$.overrideMaterial:null;for(let ue=0,ze=L.length;ue<ze;ue++){const je=L[ue],{object:Ie,geometry:Je,group:Ke}=je;let rt=je.material;rt.allowOverride===!0&&ce!==null&&(rt=ce),Ie.layers.test(de.layers)&&ts(Ie,$,de,Je,rt,Ke)}}function ts(L,$,de,ce,ue,ze){L.onBeforeRender(Y,$,de,ce,ue,ze),L.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ue.onBeforeRender(Y,$,de,ce,L,ze),ue.transparent===!0&&ue.side===na&&ue.forceSinglePass===!1?(ue.side=oi,ue.needsUpdate=!0,Y.renderBufferDirect(de,$,ce,ue,L,ze),ue.side=Qa,ue.needsUpdate=!0,Y.renderBufferDirect(de,$,ce,ue,L,ze),ue.side=na):Y.renderBufferDirect(de,$,ce,ue,L,ze),L.onAfterRender(Y,$,de,ce,ue,ze)}function ns(L,$,de){$.isScene!==!0&&($=Dt);const ce=fe.get(L),ue=N.state.lights,ze=N.state.shadowsArray,je=ue.state.version,Ie=De.getParameters(L,ue.state,ze,$,de,N.state.lightProbeGridArray),Je=De.getProgramCacheKey(Ie);let Ke=ce.programs;ce.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?$.environment:null,ce.fog=$.fog;const rt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ce.envMap=Re.get(L.envMap||ce.environment,rt),ce.envMapRotation=ce.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,Ke===void 0&&(L.addEventListener("dispose",yi),Ke=new Map,ce.programs=Ke);let xt=Ke.get(Je);if(xt!==void 0){if(ce.currentProgram===xt&&ce.lightsStateVersion===je)return ba(L,Ie),xt}else Ie.uniforms=De.getUniforms(L),W!==null&&L.isNodeMaterial&&W.build(L,de,Ie),L.onBeforeCompile(Ie,Y),xt=De.acquireProgram(Ie,Je),Ke.set(Je,xt),ce.uniforms=Ie.uniforms;const it=ce.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=at.uniform),ba(L,Ie),ce.needsLights=tc(L),ce.lightsStateVersion=je,ce.needsLights&&(it.ambientLightColor.value=ue.state.ambient,it.lightProbe.value=ue.state.probe,it.directionalLights.value=ue.state.directional,it.directionalLightShadows.value=ue.state.directionalShadow,it.spotLights.value=ue.state.spot,it.spotLightShadows.value=ue.state.spotShadow,it.rectAreaLights.value=ue.state.rectArea,it.ltc_1.value=ue.state.rectAreaLTC1,it.ltc_2.value=ue.state.rectAreaLTC2,it.pointLights.value=ue.state.point,it.pointLightShadows.value=ue.state.pointShadow,it.hemisphereLights.value=ue.state.hemi,it.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,it.spotLightMatrix.value=ue.state.spotLightMatrix,it.spotLightMap.value=ue.state.spotLightMap,it.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=N.state.lightProbeGridArray.length>0,ce.currentProgram=xt,ce.uniformsList=null,xt}function Ma(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=Hu.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function ba(L,$){const de=fe.get(L);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function Hs(L,$){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;C.setFromMatrixPosition($.matrixWorld);for(let de=0,ce=L.length;de<ce;de++){const ue=L[de];if(ue.texture!==null&&ue.boundingBox.containsPoint(C))return ue}return null}function is(L,$,de,ce,ue){$.isScene!==!0&&($=Dt),_e.resetTextureUnits();const ze=$.fog,je=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?$.environment:null,Ie=ne===null?Y.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Lt.workingColorSpace,Je=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Ke=Re.get(ce.envMap||je,Je),rt=ce.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,xt=!!de.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),it=!!de.morphAttributes.position,Bt=!!de.morphAttributes.normal,mn=!!de.morphAttributes.color;let sn=ya;ce.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(sn=Y.toneMapping);const Wt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,qt=Wt!==void 0?Wt.length:0,We=fe.get(ce),Zn=N.state.lights;if(ct===!0&&(we===!0||L!==H)){const Vt=L===H&&ce.id===le;at.setState(ce,L,Vt)}let Et=!1;ce.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Zn.state.version||We.outputColorSpace!==Ie||ue.isBatchedMesh&&We.batching===!1||!ue.isBatchedMesh&&We.batching===!0||ue.isBatchedMesh&&We.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&We.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&We.instancing===!1||!ue.isInstancedMesh&&We.instancing===!0||ue.isSkinnedMesh&&We.skinning===!1||!ue.isSkinnedMesh&&We.skinning===!0||ue.isInstancedMesh&&We.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&We.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&We.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&We.instancingMorph===!1&&ue.morphTexture!==null||We.envMap!==Ke||ce.fog===!0&&We.fog!==ze||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==at.numPlanes||We.numIntersection!==at.numIntersection)||We.vertexAlphas!==rt||We.vertexTangents!==xt||We.morphTargets!==it||We.morphNormals!==Bt||We.morphColors!==mn||We.toneMapping!==sn||We.morphTargetsCount!==qt||!!We.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,We.__version=ce.version);let Ln=We.currentProgram;Et===!0&&(Ln=ns(ce,$,ue),W&&ce.isNodeMaterial&&W.onUpdateProgram(ce,Ln,We));let Si=!1,qi=!1,Mi=!1;const jt=Ln.getUniforms(),gn=We.uniforms;if(w.useProgram(Ln.program)&&(Si=!0,qi=!0,Mi=!0),ce.id!==le&&(le=ce.id,qi=!0),We.needsLights){const Vt=Hs(N.state.lightProbeGridArray,ue);We.lightProbeGrid!==Vt&&(We.lightProbeGrid=Vt,qi=!0)}if(Si||H!==L){w.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),jt.setValue(Q,"projectionMatrix",L.projectionMatrix),jt.setValue(Q,"viewMatrix",L.matrixWorldInverse);const la=jt.map.cameraPosition;la!==void 0&&la.setValue(Q,Qe.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&jt.setValue(Q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&jt.setValue(Q,"isOrthographic",L.isOrthographicCamera===!0),H!==L&&(H=L,qi=!0,Mi=!0)}if(We.needsLights&&(Zn.state.directionalShadowMap.length>0&&jt.setValue(Q,"directionalShadowMap",Zn.state.directionalShadowMap,_e),Zn.state.spotShadowMap.length>0&&jt.setValue(Q,"spotShadowMap",Zn.state.spotShadowMap,_e),Zn.state.pointShadowMap.length>0&&jt.setValue(Q,"pointShadowMap",Zn.state.pointShadowMap,_e)),ue.isSkinnedMesh){jt.setOptional(Q,ue,"bindMatrix"),jt.setOptional(Q,ue,"bindMatrixInverse");const Vt=ue.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),jt.setValue(Q,"boneTexture",Vt.boneTexture,_e))}ue.isBatchedMesh&&(jt.setOptional(Q,ue,"batchingTexture"),jt.setValue(Q,"batchingTexture",ue._matricesTexture,_e),jt.setOptional(Q,ue,"batchingIdTexture"),jt.setValue(Q,"batchingIdTexture",ue._indirectTexture,_e),jt.setOptional(Q,ue,"batchingColorTexture"),ue._colorsTexture!==null&&jt.setValue(Q,"batchingColorTexture",ue._colorsTexture,_e));const ji=de.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Z.update(ue,de,Ln),(qi||We.receiveShadow!==ue.receiveShadow)&&(We.receiveShadow=ue.receiveShadow,jt.setValue(Q,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&$.environment!==null&&(gn.envMapIntensity.value=$.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=QC()),qi){if(jt.setValue(Q,"toneMappingExposure",Y.toneMappingExposure),We.needsLights&&En(gn,Mi),ze&&ce.fog===!0&&Xe.refreshFogUniforms(gn,ze),Xe.refreshMaterialUniforms(gn,ce,me,ie,N.state.transmissionRenderTarget[L.id]),We.needsLights&&We.lightProbeGrid){const Vt=We.lightProbeGrid;gn.probesSH.value=Vt.texture,gn.probesMin.value.copy(Vt.boundingBox.min),gn.probesMax.value.copy(Vt.boundingBox.max),gn.probesResolution.value.copy(Vt.resolution)}Hu.upload(Q,Ma(We),gn,_e)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Hu.upload(Q,Ma(We),gn,_e),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&jt.setValue(Q,"center",ue.center),jt.setValue(Q,"modelViewMatrix",ue.modelViewMatrix),jt.setValue(Q,"normalMatrix",ue.normalMatrix),jt.setValue(Q,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Vt=ce.uniformsGroups;for(let la=0,as=Vt.length;la<as;la++){const Gs=Vt[la];Ae.update(Gs,Ln),Ae.bind(Gs,Ln)}}return Ln}function En(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function tc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(L,$,de){const ce=fe.get(L);ce.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),fe.get(L.texture).__webglTexture=$,fe.get(L.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:de,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const de=fe.get(L);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,de=0){ne=L,F=$,q=de;let ce=null,ue=!1,ze=!1;if(L){const Ie=fe.get(L);if(Ie.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(Q.FRAMEBUFFER,Ie.__webglFramebuffer),E.copy(L.viewport),k.copy(L.scissor),ae=L.scissorTest,w.viewport(E),w.scissor(k),w.setScissorTest(ae),le=-1;return}else if(Ie.__webglFramebuffer===void 0)_e.setupRenderTarget(L);else if(Ie.__hasExternalTextures)_e.rebindTextures(L,fe.get(L.texture).__webglTexture,fe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const rt=L.depthTexture;if(Ie.__boundDepthTexture!==rt){if(rt!==null&&fe.has(rt)&&(L.width!==rt.image.width||L.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(L)}}const Je=L.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ze=!0);const Ke=fe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[$])?ce=Ke[$][de]:ce=Ke[$],ue=!0):L.samples>0&&_e.useMultisampledRTT(L)===!1?ce=fe.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?ce=Ke[de]:ce=Ke,E.copy(L.viewport),k.copy(L.scissor),ae=L.scissorTest}else E.copy(Ne).multiplyScalar(me).floor(),k.copy(ut).multiplyScalar(me).floor(),ae=nt;if(de!==0&&(ce=pe),w.bindFramebuffer(Q.FRAMEBUFFER,ce)&&w.drawBuffers(L,ce),w.viewport(E),w.scissor(k),w.setScissorTest(ae),ue){const Ie=fe.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,de)}else if(ze){const Ie=$;for(let Je=0;Je<L.textures.length;Je++){const Ke=fe.get(L.textures[Je]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Je,Ke.__webglTexture,de,Ie)}}else if(L!==null&&de!==0){const Ie=fe.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ie.__webglTexture,de)}le=-1},this.readRenderTargetPixels=function(L,$,de,ce,ue,ze,je,Ie=0){if(!(L&&L.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=fe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je){w.bindFramebuffer(Q.FRAMEBUFFER,Je);try{const Ke=L.textures[Ie],rt=Ke.format,xt=Ke.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ie),!z.textureFormatReadable(rt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(xt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ce&&de>=0&&de<=L.height-ue&&Q.readPixels($,de,ce,ue,Ue.convert(rt),Ue.convert(xt),ze)}finally{const Ke=ne!==null?fe.get(ne).__webglFramebuffer:null;w.bindFramebuffer(Q.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(L,$,de,ce,ue,ze,je,Ie=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=fe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je)if($>=0&&$<=L.width-ce&&de>=0&&de<=L.height-ue){w.bindFramebuffer(Q.FRAMEBUFFER,Je);const Ke=L.textures[Ie],rt=Ke.format,xt=Ke.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ie),!z.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,it),Q.bufferData(Q.PIXEL_PACK_BUFFER,ze.byteLength,Q.STREAM_READ),Q.readPixels($,de,ce,ue,Ue.convert(rt),Ue.convert(xt),0);const Bt=ne!==null?fe.get(ne).__webglFramebuffer:null;w.bindFramebuffer(Q.FRAMEBUFFER,Bt);const mn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Q2(Q,mn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,it),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,ze),Q.deleteBuffer(it),Q.deleteSync(mn),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,de=0){const ce=Math.pow(2,-de),ue=Math.floor(L.image.width*ce),ze=Math.floor(L.image.height*ce),je=$!==null?$.x:0,Ie=$!==null?$.y:0;_e.setTexture2D(L,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,de,0,0,je,Ie,ue,ze),w.unbindTexture()},this.copyTextureToTexture=function(L,$,de=null,ce=null,ue=0,ze=0){let je,Ie,Je,Ke,rt,xt,it,Bt,mn;const sn=L.isCompressedTexture?L.mipmaps[ze]:L.image;if(de!==null)je=de.max.x-de.min.x,Ie=de.max.y-de.min.y,Je=de.isBox3?de.max.z-de.min.z:1,Ke=de.min.x,rt=de.min.y,xt=de.isBox3?de.min.z:0;else{const gn=Math.pow(2,-ue);je=Math.floor(sn.width*gn),Ie=Math.floor(sn.height*gn),L.isDataArrayTexture?Je=sn.depth:L.isData3DTexture?Je=Math.floor(sn.depth*gn):Je=1,Ke=0,rt=0,xt=0}ce!==null?(it=ce.x,Bt=ce.y,mn=ce.z):(it=0,Bt=0,mn=0);const Wt=Ue.convert($.format),qt=Ue.convert($.type);let We;$.isData3DTexture?(_e.setTexture3D($,0),We=Q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(_e.setTexture2DArray($,0),We=Q.TEXTURE_2D_ARRAY):(_e.setTexture2D($,0),We=Q.TEXTURE_2D),w.activeTexture(Q.TEXTURE0),w.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(Q.UNPACK_ALIGNMENT,$.unpackAlignment);const Zn=w.getParameter(Q.UNPACK_ROW_LENGTH),Et=w.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ln=w.getParameter(Q.UNPACK_SKIP_PIXELS),Si=w.getParameter(Q.UNPACK_SKIP_ROWS),qi=w.getParameter(Q.UNPACK_SKIP_IMAGES);w.pixelStorei(Q.UNPACK_ROW_LENGTH,sn.width),w.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,sn.height),w.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ke),w.pixelStorei(Q.UNPACK_SKIP_ROWS,rt),w.pixelStorei(Q.UNPACK_SKIP_IMAGES,xt);const Mi=L.isDataArrayTexture||L.isData3DTexture,jt=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const gn=fe.get(L),ji=fe.get($),Vt=fe.get(gn.__renderTarget),la=fe.get(ji.__renderTarget);w.bindFramebuffer(Q.READ_FRAMEBUFFER,Vt.__webglFramebuffer),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let as=0;as<Je;as++)Mi&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,fe.get(L).__webglTexture,ue,xt+as),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,fe.get($).__webglTexture,ze,mn+as)),Q.blitFramebuffer(Ke,rt,je,Ie,it,Bt,je,Ie,Q.DEPTH_BUFFER_BIT,Q.NEAREST);w.bindFramebuffer(Q.READ_FRAMEBUFFER,null),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ue!==0||L.isRenderTargetTexture||fe.has(L)){const gn=fe.get(L),ji=fe.get($);w.bindFramebuffer(Q.READ_FRAMEBUFFER,se),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,J);for(let Vt=0;Vt<Je;Vt++)Mi?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,gn.__webglTexture,ue,xt+Vt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,gn.__webglTexture,ue),jt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ji.__webglTexture,ze,mn+Vt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ji.__webglTexture,ze),ue!==0?Q.blitFramebuffer(Ke,rt,je,Ie,it,Bt,je,Ie,Q.COLOR_BUFFER_BIT,Q.NEAREST):jt?Q.copyTexSubImage3D(We,ze,it,Bt,mn+Vt,Ke,rt,je,Ie):Q.copyTexSubImage2D(We,ze,it,Bt,Ke,rt,je,Ie);w.bindFramebuffer(Q.READ_FRAMEBUFFER,null),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else jt?L.isDataTexture||L.isData3DTexture?Q.texSubImage3D(We,ze,it,Bt,mn,je,Ie,Je,Wt,qt,sn.data):$.isCompressedArrayTexture?Q.compressedTexSubImage3D(We,ze,it,Bt,mn,je,Ie,Je,Wt,sn.data):Q.texSubImage3D(We,ze,it,Bt,mn,je,Ie,Je,Wt,qt,sn):L.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,ze,it,Bt,je,Ie,Wt,qt,sn.data):L.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,ze,it,Bt,sn.width,sn.height,Wt,sn.data):Q.texSubImage2D(Q.TEXTURE_2D,ze,it,Bt,je,Ie,Wt,qt,sn);w.pixelStorei(Q.UNPACK_ROW_LENGTH,Zn),w.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Et),w.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ln),w.pixelStorei(Q.UNPACK_SKIP_ROWS,Si),w.pixelStorei(Q.UNPACK_SKIP_IMAGES,qi),ze===0&&$.generateMipmaps&&Q.generateMipmap(We),w.unbindTexture()},this.initRenderTarget=function(L){fe.get(L).__webglFramebuffer===void 0&&_e.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?_e.setTextureCube(L,0):L.isData3DTexture?_e.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?_e.setTexture2DArray(L,0):_e.setTexture2D(L,0),w.unbindTexture()},this.resetState=function(){F=0,q=0,ne=null,w.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}class ef extends ht{constructor(){const e=ef.SkyShader,n=new Bn({name:e.name,uniforms:Bs.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:oi,depthWrite:!1});super(new Oi(1,1,1),n),this.isSky=!0}}ef.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new G},up:{value:new G(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};class $C extends ht{constructor(e,n={}){super(e),this.isWater=!0;const a=this,o=n.textureWidth!==void 0?n.textureWidth:512,c=n.textureHeight!==void 0?n.textureHeight:512,u=n.clipBias!==void 0?n.clipBias:0,d=n.alpha!==void 0?n.alpha:1,m=n.time!==void 0?n.time:0,p=n.waterNormals!==void 0?n.waterNormals:null,g=n.sunDirection!==void 0?n.sunDirection:new G(.70707,.70707,0),x=new lt(n.sunColor!==void 0?n.sunColor:16777215),_=new lt(n.waterColor!==void 0?n.waterColor:8355711),M=n.eye!==void 0?n.eye:new G(0,0,0),v=n.distortionScale!==void 0?n.distortionScale:20,A=n.side!==void 0?n.side:Qa,y=n.fog!==void 0?n.fog:!1,S=new Os,R=new G,U=new G,C=new G,O=new It,N=new G(0,0,-1),B=new hn,T=new G,P=new G,Y=new hn,V=new It,W=new _i,pe=new li(o,c,{type:xi}),se={name:"MirrorShader",uniforms:Bs.merge([Fe.fog,Fe.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new It},sunColor:{value:new lt(8355711)},sunDirection:{value:new G(.70707,.70707,0)},eye:{value:new G},waterColor:{value:new lt(5592405)}}]),vertexShader:`
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
				}`},J=new Bn({name:se.name,uniforms:Bs.clone(se.uniforms),vertexShader:se.vertexShader,fragmentShader:se.fragmentShader,lights:!0,side:A,fog:y});J.uniforms.mirrorSampler.value=pe.texture,J.uniforms.textureMatrix.value=V,J.uniforms.alpha.value=d,J.uniforms.time.value=m,J.uniforms.normalSampler.value=p,J.uniforms.sunColor.value=x,J.uniforms.waterColor.value=_,J.uniforms.sunDirection.value=g,J.uniforms.distortionScale.value=v,J.uniforms.eye.value=M,a.material=J,a.onBeforeRender=function(F,q,ne){if(U.setFromMatrixPosition(a.matrixWorld),C.setFromMatrixPosition(ne.matrixWorld),O.extractRotation(a.matrixWorld),R.set(0,0,1),R.applyMatrix4(O),T.subVectors(U,C),T.dot(R)>0)return;T.reflect(R).negate(),T.add(U),O.extractRotation(ne.matrixWorld),N.set(0,0,-1),N.applyMatrix4(O),N.add(C),P.subVectors(U,N),P.reflect(R).negate(),P.add(U),W.position.copy(T),W.up.set(0,1,0),W.up.applyMatrix4(O),W.up.reflect(R),W.lookAt(P),W.far=ne.far,W.updateMatrixWorld(),W.projectionMatrix.copy(ne.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(W.projectionMatrix),V.multiply(W.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(R,U),S.applyMatrix4(W.matrixWorldInverse),B.set(S.normal.x,S.normal.y,S.normal.z,S.constant);const le=W.projectionMatrix;Y.x=(Math.sign(B.x)+le.elements[8])/le.elements[0],Y.y=(Math.sign(B.y)+le.elements[9])/le.elements[5],Y.z=-1,Y.w=(1+le.elements[10])/le.elements[14],B.multiplyScalar(2/B.dot(Y)),le.elements[2]=B.x,le.elements[6]=B.y,le.elements[10]=B.z+1-u,le.elements[14]=B.w,M.setFromMatrixPosition(ne.matrixWorld);const H=F.getRenderTarget(),E=F.xr.enabled,k=F.shadowMap.autoUpdate;a.visible=!1,F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(pe),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(q,W),a.visible=!0,F.xr.enabled=E,F.shadowMap.autoUpdate=k,F.setRenderTarget(H);const ae=ne.viewport;ae!==void 0&&F.state.viewport(ae)}}}const Gu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class No{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const eR=new Jl(-1,1,1,-1,0,1);class tR extends zn{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const nR=new tR;class wm{constructor(e){this._mesh=new ht(nR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class iR extends No{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bs.clone(e.uniforms),this.material=new Bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wm(this.material)}render(e,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mv extends No{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,a){const o=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class aR extends No{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sR{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const a=e.getSize(new He);this._width=a.width,this._height=a.height,n=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new iR(Gu),this.copyPass.material.blending=va,this.timer=new tT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Mv!==void 0&&(u instanceof Mv?a=!0:u instanceof aR&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rR extends No{constructor(e,n,a=null,o=null,c=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new lt}render(e,n,a){const o=e.autoClear;e.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=o}}const oR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Co extends No{constructor(e,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new li(c,u,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const x=new li(c,u,{type:xi});x.texture.name="UnrealBloomPass.h"+g,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const _=new li(c,u,{type:xi});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),u=Math.round(u/2)}const d=oR;this.highPassUniforms=Bs.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new He(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bs.clone(Gu.uniforms),this.blendMaterial=new Bn({uniforms:this.copyUniforms,vertexShader:Gu.vertexShader,fragmentShader:Gu.fragmentShader,premultipliedAlpha:!0,blending:Vl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new lt,this._oldClearAlpha=1,this._basic=new Za,this._fsQuad=new wm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let a=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new He(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(e,n,a,o,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Co.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Co.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const n=[],a=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new Bn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Bn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Co.BlurDirectionX=new He(1,0);Co.BlurDirectionY=new He(0,1);const Pu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class lR extends No{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bs.clone(Pu.uniforms),this.material=new r1({name:Pu.name,uniforms:this.uniforms,vertexShader:Pu.vertexShader,fragmentShader:Pu.fragmentShader}),this._fsQuad=new wm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===im?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===am?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===om?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===sm&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class cR{frustum=new Qu;projScreenMatrix=new It;tempSphere=new vr;tempVec=new G;maxAngularSpread=2.05;verticalSpread=38;cullingEnabled=!0;updateFrustum(e){this.projScreenMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix)}isItemVisible(e,n,a,o,c,u){if(!this.cullingEnabled)return!0;if(Math.abs(n-u)>this.verticalSpread+o)return!1;let d=(e-c)%(Math.PI*2);d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2);const m=this.maxAngularSpread+o/a;if(Math.abs(d)>m)return!1;const p=Math.sin(e)*a,g=Math.cos(e)*a;return this.tempVec.set(p,n,g),this.tempSphere.set(this.tempVec,Math.max(o,2.5)),this.frustum.intersectsSphere(this.tempSphere)}}const Kp=640,Qp=640,jh=Kp/Qp,Zh=38,uR=64,Kh={desktop:{id:"desktop",label:"640×480 · 16:9",width:640,height:480},tabletPortrait:{id:"tabletPortrait",label:"480×640 · 3:4",width:480,height:640},phonePortrait:{id:"phonePortrait",label:"400×660 · 10:16",width:400,height:660}};function bv(r,e){const n=e>=r,a=Math.min(r,e);return n?a<620?Kh.phonePortrait:Kh.tabletPortrait:Kh.desktop}const yn=24,fR=1,ln=6,on=.35,si=2.4,Wi=Math.PI*2,St=ln+si*.5,Ev=.5,dR=-.020833333333333332*Wi,ni=.16,ii=2.05,Qh=.52,hR=3.1,Fl=12,ku=28.5,Ps=1/60,pR=.25,kl=(r,e)=>{const n=r%e;return n<0?n+e:n},Qt=r=>r/yn*Wi+dR,Ni=(r,e,n,a)=>[r-yn,r,r+yn].some(c=>c+e>n&&c-e<n+a),In=r=>Math.floor(kl(r,yn)),ta=r=>kl(r,yn)+.5,Vu=(r,e)=>{const n=Math.abs(r-e);return Math.min(n,yn-n)},mR=(r,e)=>{let n=e-r;return n>yn/2&&(n-=yn),n<-yn/2&&(n+=yn),n},gR="#d9f99d",Ul="#86efac",Tv=1.15,_R=.35,xR=2.4,vR=.78,wv=.21,Jh="#86efac",Av=.55,yR=.25,SR=3.5,Wa=.52;class MR{group=new Wn;body=new Wn;torso;belly;bellyHalo;bellyLight;topDrop;leftEye;rightEye;leftArm;rightArm;leftLeg;rightLeg;leftLowerLeg;rightLowerLeg;leftFoot;rightFoot;gelMat;constructor(e){this.body.position.y=-Qh,this.group.add(this.body),e.add(this.group),this.gelMat=new cn({color:"#4ade80",emissive:"#000000",emissiveIntensity:0,roughness:.18,metalness:0,transparent:!0,opacity:.82}),this.buildShell(),this.buildBelly(),this.buildFace(),this.buildLimbs(),this.buildTopDrop()}buildShell(){const e=[new He(0,0),new He(.4,0),new He(.49,.1),new He(.53,.3),new He(.51,.56),new He(.45,.86),new He(.385,1.12),new He(.4,1.36),new He(.415,1.56),new He(.365,1.76),new He(.265,1.93),new He(.125,2.02),new He(0,2.05)].map(a=>new He(a.x,a.y+Wa)),n=new Mm(e,24);n.scale(.9,1,.9),n.computeVertexNormals(),this.torso=new ht(n,this.gelMat),this.torso.castShadow=!0,this.torso.renderOrder=1,this.body.add(this.torso)}buildBelly(){const e=new Ui(wv,18,14);e.scale(1,1.15,.92);const n=new cn({color:gR,emissive:Ul,emissiveIntensity:Tv,roughness:.35,metalness:0,transparent:!0,opacity:.7,depthWrite:!1});this.belly=new ht(e,n),this.belly.position.set(0,Wa+vR,.02),this.belly.renderOrder=0,this.torso.add(this.belly);const a=new Ui(wv*1.75,14,12);a.scale(1,1.25,.9);const o=new Za({color:Ul,transparent:!0,opacity:.16,depthWrite:!1,blending:Vl});this.bellyHalo=new ht(a,o),this.bellyHalo.position.copy(this.belly.position),this.bellyHalo.renderOrder=0,this.torso.add(this.bellyHalo),this.bellyLight=new KE(Jh,Av,SR,2),this.bellyLight.castShadow=!1,this.bellyLight.position.copy(this.belly.position),this.torso.add(this.bellyLight)}buildFace(){const e=new Ui(.08,10,10),n=new Za({color:"#ffffff"}),a=new Ui(.045,8,8),o=new Za({color:"#000000"}),c=m=>{const p=new ht(e,n);p.position.set(m,Wa+1.64,.32),p.renderOrder=3;const g=new ht(a,o);return g.position.set(0,0,.05),g.renderOrder=4,p.add(g),this.torso.add(p),p};this.leftEye=c(-.13),this.rightEye=c(.13);const u=new ht(new Ui(.05,10,10),new cn({color:"#34d399",emissive:"#065f46",emissiveIntensity:.2,roughness:.25}));u.position.set(0,Wa+1.52,.37),u.renderOrder=3,this.torso.add(u);const d=new ht(new Kl(.085,.022,8,18,Math.PI),new Za({color:"#34d399"}));d.position.set(0,Wa+1.44,.4),d.rotation.z=Math.PI,d.renderOrder=3,this.torso.add(d)}buildLimbs(){const e=new Ui(.12,10,10);e.scale(.75,1.7,.75),e.translate(0,-.17,0);const n=(p,g)=>{const x=new Wn;x.position.set(p,Wa+1.02,0),x.rotation.z=g;const _=new ht(e,this.gelMat);return _.castShadow=!0,x.add(_),this.body.add(x),x};this.leftArm=n(-.36,.32),this.rightArm=n(.36,-.32);const a=new Ui(.15,10,10);a.scale(1,.85,1),a.translate(0,-.1,0);const o=p=>{const g=new Wn;g.position.set(p,Wa+.3,0);const x=new Wn;x.position.y=-.08;const _=new ht(a,this.gelMat);return _.castShadow=!0,x.add(_),g.add(x),this.body.add(g),{hip:g,lower:x}},c=o(-.19),u=o(.19);this.leftLeg=c.hip,this.leftLowerLeg=c.lower,this.rightLeg=u.hip,this.rightLowerLeg=u.lower;const d=new Ui(.15,10,10);d.scale(1.05,.42,1.35),d.translate(0,.063,.03);const m=p=>{const g=new ht(d,this.gelMat);return g.position.set(p,Wa,.02),g.castShadow=!0,this.body.add(g),g};this.leftFoot=m(-.19),this.rightFoot=m(.19)}buildTopDrop(){const e=new Zl(.11,0);e.rotateZ(Math.PI/6);const n=new cn({color:"#27c10c",emissive:"#37ca0b",emissiveIntensity:.5,metalness:1,roughness:.8});this.topDrop=new ht(e,n),this.topDrop.position.y=Wa+2.15,this.topDrop.castShadow=!0,this.body.add(this.topDrop)}update(e,n){const a=Qt(e.x),o=new G(Math.sin(a),0,Math.cos(a));this.group.position.set(o.x*St,e.y,o.z*St);const u=e.idleTimer<1,d=Math.atan2(o.x,o.z);let p=(u?d+(e.facingRight?Math.PI/2:-Math.PI/2):d)-e.facingYaw;p=((p+Math.PI)%Wi+Wi)%Wi-Math.PI;const g=u?18:6;e.facingYaw+=Math.sign(p)*Math.min(Math.abs(p),g*Ps),this.group.rotation.set(0,e.facingYaw,0);const x=e.grounded,_=Math.abs(e.vx)>.1,M=!_&&x?Math.sin(n*4.5)*.025:0,A=(x?0:Xn.clamp(e.vy/40,-.1,.1))+e.jiggle,y=1+M+A,S=1-(M+A)*.5;this.torso.scale.set(S,y,S),this.body.position.y=-Qh;const R=1-A*.8;this.leftFoot.scale.set(R,1+A*.35,R),this.rightFoot.scale.set(R,1+A*.35,R),this.updateBelly(e,n,A,x),this.topDrop.position.y=Qh+2.15+e.jiggle*.55+M*1.5,this.topDrop.rotation.y+=Ps*1.6,this.topDrop.rotation.z=Math.sin(n*3.1)*.16-e.vx*.05,this.topDrop.scale.set(1-A*.4,1+A*.8,1-A*.4);const U=this.topDrop.material;if(e.crownFlash>0){const O=1-e.crownFlash/.2,N=new lt("#fbbf24"),B=new lt("#6ee7a8");U.color.lerpColors(N,B,O),U.emissive.set(B.clone().multiplyScalar(.3).lerp(N.clone().multiplyScalar(.6),1-O)),U.emissiveIntensity=.85-O*.55,this.topDrop.scale.multiplyScalar(1+(1-O)*.85)}else U.color.set("#48ff00"),U.emissive.set("#37ca0b"),U.emissiveIntensity=.5;const C=n%3.5<.15;if(this.leftEye.scale.y=C?.08:1,this.rightEye.scale.y=C?.08:1,x&&_){const O=Math.sin(e.walkCycle);this.leftArm.rotation.x=O*.48,this.rightArm.rotation.x=-O*.48,this.leftLeg.rotation.x=-O*.24,this.rightLeg.rotation.x=O*.24,this.leftLowerLeg.rotation.x=Math.max(0,O)*.55,this.rightLowerLeg.rotation.x=Math.max(0,-O)*.55,this.leftFoot.rotation.x=O*.28,this.rightFoot.rotation.x=-O*.28}else this.leftArm.rotation.x=M*1.5,this.rightArm.rotation.x=-M*1.5,x?(this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftLowerLeg.rotation.x=0,this.rightLowerLeg.rotation.x=0):(this.leftLeg.rotation.x=-.12,this.rightLeg.rotation.x=.08,this.leftLowerLeg.rotation.x=.5,this.rightLowerLeg.rotation.x=.42),this.leftFoot.rotation.x=0,this.rightFoot.rotation.x=0}updateBelly(e,n,a,o){const c=this.belly.material,u=this.bellyHalo.material,d=.5+.5*Math.sin(n*xR),m=o?0:.25,p=Math.max(0,-e.jiggle)*1.8;let g=Tv+_R*d+m+p,x=Av+yR*d+m*.6+p*.5;if(e.crownFlash>0){const A=1-e.crownFlash/.2,y=new lt("#fde68a"),S=new lt(Ul);c.emissive.lerpColors(y,S,A),u.color.lerpColors(new lt("#fbbf24"),S,A),this.bellyLight.color.lerpColors(new lt("#fbbf24"),new lt(Jh),A),g+=(1-A)*1.4,x+=(1-A)*.9}else c.emissive.set(Ul),u.color.set(Ul),this.bellyLight.color.set(Jh);c.emissiveIntensity=g,u.opacity=.11+.08*d+p*.08,this.bellyLight.intensity=x;const _=1-a*.45,M=1+a*.25,v=1+.04*d;this.belly.scale.set(M*v,_*v,M*v),this.bellyHalo.scale.copy(this.belly.scale)}dispose(){this.group.removeFromParent(),this.group.traverse(e=>{if(e instanceof ht){e.geometry.dispose();const n=e.material;Array.isArray(n)?n.forEach(a=>a.dispose()):n.dispose()}})}}class bR{constructor(e,n){this.camera=e,this.towerHeight=n}camera;towerHeight;menuCamAngle=0;update(e,n,a){if(e==="menu"){this.menuCamAngle=a*.12%Wi;const S=42,R=this.towerHeight*.55+6,U=new G(Math.sin(this.menuCamAngle)*S,R,Math.cos(this.menuCamAngle)*S);this.camera.position.lerp(U,.06),this.camera.lookAt(0,this.towerHeight*.5,0);return}const o=Qt(n.x),c=Math.abs(n.vx)>.1,u=n.grounded,d=Wi/yn,m=n.facingRight?1:-1,p=n.idleTimer<1,g=p?m*d:0;n.camLeadAngle=Xn.lerp(n.camLeadAngle,g,p?.09:.055);const x=n.camLeadAngle;n.verticalLead=Xn.lerp(n.verticalLead,c&&u?fR*.2:0,.08),n.smoothCamY=Xn.lerp(n.smoothCamY,n.y,u?.09:.045);const _=new G(Math.sin(o+x)*St,n.smoothCamY+1.9+n.verticalLead*.55,Math.cos(o+x)*St),M=o+x*2,v=new G(Math.sin(M),0,Math.cos(M)),A=.1,y=_.clone().add(v.multiplyScalar(18)).add(new G(0,5+A,0));this.camera.position.lerp(y,.1),this.camera.lookAt(_.clone().add(new G(0,A,0)))}}class ER{constructor(e,n=250){this.maxParticles=n;const a=new zn;this.positions=new Float32Array(n*3),this.colors=new Float32Array(n*3),a.setAttribute("position",new Ii(this.positions,3)),a.setAttribute("color",new Ii(this.colors,3));const o=new n1({size:.22,vertexColors:!0,transparent:!0,opacity:.9,blending:Vl,depthWrite:!1});this.points=new FE(a,o),this.points.frustumCulled=!1,e.add(this.points)}maxParticles;particles=[];positions;colors;points;spawn(e,n,a,o=2.5,c="burst",u=null){const d=new lt(a);for(let m=0;m<n;m++){this.particles.length>=this.maxParticles&&this.particles.shift();let p,g,x,_,M=0;if(c==="jump")p=new G((Math.random()-.5)*.25,Math.random()*.12,(Math.random()-.5)*.25),g=new G((Math.random()-.5)*o*.35,Fl*(.22+Math.random()*.22),(Math.random()-.5)*o*.35),x=.9+Math.random()*.6,_=.75,M=.6;else if(c==="land"){const v=Math.random()*Wi,A=.55+Math.random()*.9;p=new G((Math.random()-.5)*.2,.02+Math.random()*.08,(Math.random()-.5)*.2),g=new G(Math.cos(v)*A*o,o*(.55+Math.random()*.75),Math.sin(v)*A*o),x=.45+Math.random()*.4,_=.55,M=1.4}else p=new G((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3),g=new G((Math.random()-.5)*o,o*(.3+Math.random()*.9),(Math.random()-.5)*o),x=.6+Math.random()*.5,_=.7,M=.5;this.particles.push({pos:e.clone().add(p),vel:g,color:d.clone(),size:.15+Math.random()*.15,life:0,maxLife:x,floorY:u,gravityScale:_,drag:M})}}update(e){let n=0;for(let o=this.particles.length-1;o>=0;o--){const c=this.particles[o];if(c.life+=e,c.life>=c.maxLife){this.particles.splice(o,1);continue}const u=c.drag??0;if(u>0){const p=Math.exp(-u*e);c.vel.x*=p,c.vel.z*=p}c.vel.y-=ku*(c.gravityScale??.3)*e,c.pos.addScaledVector(c.vel,e),c.floorY!=null&&c.pos.y<c.floorY+.02&&(c.pos.y=c.floorY+.02,c.vel.y<0&&(c.vel.y*=-.18),c.vel.x*=.82,c.vel.z*=.82);const d=n*3;this.positions[d]=c.pos.x,this.positions[d+1]=c.pos.y,this.positions[d+2]=c.pos.z;const m=1-c.life/c.maxLife;this.colors[d]=c.color.r*m,this.colors[d+1]=c.color.g*m,this.colors[d+2]=c.color.b*m,n++}const a=this.points.geometry;a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0,a.setDrawRange(0,n)}dispose(){this.points.removeFromParent(),this.points.geometry.dispose(),this.points.material.dispose()}}const TR=6.5,wR=5.5,AR=.075,CR=.075,RR=.3;function Yu(r,e){const n=Math.abs(r)/TR,a=Math.abs(e)/wR,o=Math.sqrt(n*n+a*a);if(o>=1)return 0;const c=1-o;return c*c}const x1="glower-tower-audio-v1";function LR(){const r={sfxEnabled:!0,musicEnabled:!0};try{const e=localStorage.getItem(x1);if(!e)return r;const n=JSON.parse(e);return{sfxEnabled:typeof n.sfxEnabled=="boolean"?n.sfxEnabled:!0,musicEnabled:typeof n.musicEnabled=="boolean"?n.musicEnabled:!0}}catch{return r}}function DR(r){try{localStorage.setItem(x1,JSON.stringify(r))}catch{}}const Ol=r=>440*Math.pow(2,(r-69)/12),NR=[[45,48,52],[41,45,48],[48,52,55],[43,47,50]],UR=[[40,43,47],[36,40,43],[43,47,50],[38,42,45]],Cv=.9,Rv=.26,OR=.25,PR=50,Lv=32,IR=.12,BR=.35,bt={JUMP:.12,SUPERJUMP_TONE:.2,SUPERJUMP_SQUARE:.06,LAND_BODY:.32,LAND_WOOD_TAP:.2,LAND_WOOD_TONE:.09,LAND_JELLY:.11,LAND_ECHO:.1,COIN_TONE_A:.15,COIN_TONE_B:.09,COIN_OCT_A:.045,COIN_OCT_B:.04,CHECKPOINT:.13,GAMEOVER_TONE:.12,GAMEOVER_NOISE:.08,WIN_TONE:.12,WIN_OCTAVE:.05,BONK_STICK:.28,BONK_BODY_LOW:.34,BONK_BODY_TRIANGLE:.12,BONK_BODY_TAP:.16,LEVER_BANDPASS:.18,LEVER_SQUARE:.08,LEVER_THUNK:.16,LEVER_TAP:.08,SLIDE_PEAK:.2,SLIDE_RUMBLE:2.2,SLIDE_SUB:2.6,SLIDE_BAND_LEVELS:[1.4,.9,.35],BALL_TONE:.3,BALL_METAL:.3,BALL_SHIMMER:.18},lr={MENU_BASS:.1,MENU_ARP:.05,MENU_BELL:.04,GAME_BASS:.085,GAME_ARP:.038,GAME_HIHAT:.016,GAME_CLAP:.03},FR=500;class zR{ctx=null;master=null;sfxBus=null;musicBus=null;noiseBuf=null;unlocked=!1;stalled=!1;watchdog=null;muted=!0;sfxEnabled=!0;musicEnabled=!0;pageHidden=!1;desiredTrack=null;voice=null;lastLandAt=0;lastBonkAt=0;slideStop=null;ambient=new Map;buildGraph(){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let n;try{n=new e}catch{return null}const a=n.createDynamicsCompressor();a.threshold.value=-10,a.knee.value=22,a.ratio.value=8,a.attack.value=.004,a.release.value=.22;const o=n.createGain();o.gain.value=this.muted?0:1;const c=n.createGain();c.gain.value=this.sfxEnabled?Cv:0;const u=n.createGain();return u.gain.value=this.musicEnabled?Rv:0,c.connect(o),u.connect(o),o.connect(a),a.connect(n.destination),this.ctx=n,this.master=o,this.sfxBus=c,this.musicBus=u,this.noiseBuf=null,this.unlocked=!1,n}ensureContext(){return this.ctx&&this.ctx.state!=="closed"?this.ctx:(this.forgetVoice(),this.buildGraph())}kick(e){if(e.state!=="running")try{e.resume().catch(()=>{})}catch{}}rebuildContext(){const e=this.ctx;if(this.clearAmbient(),this.forgetVoice(),this.ctx=null,this.master=null,this.sfxBus=null,this.musicBus=null,this.noiseBuf=null,this.unlocked=!1,e)try{e.close().catch(()=>{})}catch{}const n=this.buildGraph();n&&(this.kick(n),this.unlock(),this.syncMusic())}armWatchdog(){this.watchdog!==null&&(window.clearTimeout(this.watchdog),this.watchdog=null);const e=this.ctx;if(!e)return;const n=e.currentTime;this.watchdog=window.setTimeout(()=>{if(this.watchdog=null,this.muted||this.pageHidden||this.ctx!==e)return;e.state==="running"&&e.currentTime>n+.05||(this.stalled=!0)},FR)}unlock(){const e=this.ctx;if(!(!e||this.unlocked)){try{const n=e.createBufferSource();n.buffer=e.createBuffer(1,1,e.sampleRate),n.connect(e.destination),n.start(0),this.unlocked=!0}catch{}try{const n=navigator.audioSession;n&&n.type!=="playback"&&(n.type="playback")}catch{}}}noise(){const e=this.ctx;if(!e)return null;if(!this.noiseBuf){const n=Math.floor(e.sampleRate*.5);this.noiseBuf=e.createBuffer(1,n,e.sampleRate);const a=this.noiseBuf.getChannelData(0);for(let o=0;o<n;o++)a[o]=Math.random()*2-1}return this.noiseBuf}ramp(e,n,a){const o=this.ctx;if(!o||!e)return;const c=o.currentTime;try{e.gain.cancelScheduledValues(c),e.gain.setValueAtTime(e.gain.value,c),e.gain.linearRampToValueAtTime(n,c+a)}catch{e.gain.value=n}}sfxCtx(){if(this.muted||!this.sfxEnabled)return null;const e=this.ctx;return!e||e.state!=="running"?null:e}tone(e){const n=this.ctx,a=e.dest??(e.voice?e.voice.gain:this.sfxBus);if(!n||!a)return;const o=n.createOscillator(),c=n.createGain();o.type=e.type,e.detune&&(o.detune.value=e.detune),o.frequency.setValueAtTime(e.from,e.at),e.to!==void 0&&o.frequency.exponentialRampToValueAtTime(Math.max(1,e.to),e.at+e.dur);const u=e.attack??.005;c.gain.setValueAtTime(1e-4,e.at),c.gain.exponentialRampToValueAtTime(e.gain,e.at+u),c.gain.exponentialRampToValueAtTime(1e-4,e.at+e.dur),o.connect(c),c.connect(a),o.start(e.at),o.stop(e.at+e.dur+.02),this.track(e.voice,o)}hiss(e){const n=this.ctx,a=this.noise(),o=e.dest??(e.voice?e.voice.gain:this.sfxBus);if(!n||!a||!o)return;const c=n.createBufferSource();c.buffer=a,c.loop=!0;const u=n.createBiquadFilter();u.type=e.type,u.frequency.value=e.freq,u.Q.value=e.q??1;const d=n.createGain();d.gain.setValueAtTime(e.gain,e.at),d.gain.exponentialRampToValueAtTime(1e-4,e.at+e.dur),c.connect(u),u.connect(d),d.connect(o),c.start(e.at),c.stop(e.at+e.dur+.02),this.track(e.voice,c)}track(e,n){e&&(e.sources.add(n),n.onended=()=>e.sources.delete(n))}setMuted(e){if(e===this.muted){e||this.resume(!0);return}this.muted=e,e&&this.clearAmbient(),e||this.wakeInGesture(),this.ramp(this.master,e?0:1,.06),this.syncMusic()}wakeInGesture(){const e=this.ensureContext();e&&(this.stalled?(this.stalled=!1,this.rebuildContext()):(this.kick(e),this.unlock()),this.preload(),this.armWatchdog())}isMuted(){return this.muted}setSfxEnabled(e){this.sfxEnabled=e,e||this.clearAmbient(),this.ramp(this.sfxBus,e?Cv:0,.03)}isSfxEnabled(){return this.sfxEnabled}setMusicEnabled(e){e!==this.musicEnabled&&(this.musicEnabled=e,this.ramp(this.musicBus,e?Rv:0,.08),this.syncMusic())}isMusicEnabled(){return this.musicEnabled}resume(e=!1){if(this.muted)return;const n=this.ensureContext();if(n){if(this.stalled&&e){this.stalled=!1,this.rebuildContext(),this.armWatchdog();return}this.kick(n),e&&this.unlock()}}setPageHidden(e){e!==this.pageHidden&&(this.pageHidden=e,this.syncMusic(),e||this.resume(!1))}async preload(){await Promise.resolve()}playJump(){const e=this.sfxCtx();if(e)try{this.tone({type:"square",from:140,to:440,at:e.currentTime,dur:.12,gain:bt.JUMP})}catch{}}playSuperJump(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;this.tone({type:"triangle",from:220,to:880,at:n,dur:.25,gain:bt.SUPERJUMP_TONE}),this.tone({type:"square",from:110,to:440,at:n,dur:.22,gain:bt.SUPERJUMP_SQUARE})}catch{}}playLand(e=1){const n=this.sfxCtx();if(!n||!this.sfxBus)return;const a=performance.now();if(!(a-this.lastLandAt<45)){this.lastLandAt=a;try{const o=n.currentTime,c=Math.max(.15,Math.min(1.6,e)),u=1-.12*c,d=.4+.6*Math.min(1,c);this.tone({type:"sine",from:140*u,to:44,at:o,dur:.19,gain:bt.LAND_BODY*d,attack:.003}),this.hiss({at:o,dur:.055,gain:bt.LAND_WOOD_TAP*d,type:"bandpass",freq:300*u,q:1.4}),this.hiss({at:o,dur:.03,gain:bt.LAND_WOOD_TONE*d,type:"bandpass",freq:1250*u,q:2.2}),this.tone({type:"triangle",from:190*u,to:120,at:o+.012,dur:.07,gain:bt.LAND_WOOD_TONE*d});const m=n.createOscillator(),p=n.createGain(),g=n.createOscillator(),x=n.createGain();m.type="triangle",m.frequency.setValueAtTime(84*u,o+.01),m.frequency.exponentialRampToValueAtTime(56,o+.22),g.frequency.value=8.2,x.gain.value=22,g.connect(x),x.connect(m.frequency),p.gain.setValueAtTime(1e-4,o+.01),p.gain.exponentialRampToValueAtTime(bt.LAND_JELLY*d,o+.03),p.gain.exponentialRampToValueAtTime(1e-4,o+.24),m.connect(p),p.connect(this.sfxBus),m.start(o+.01),g.start(o+.01),m.stop(o+.26),g.stop(o+.26),this.tone({type:"sine",from:104,to:48,at:o+.055,dur:.1,gain:bt.LAND_ECHO*d})}catch{}}}playCoin(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;this.tone({type:"sine",from:987.77,at:n,dur:.1,gain:bt.COIN_TONE_A}),this.tone({type:"sine",from:1318.51,at:n+.08,dur:.2,gain:bt.COIN_TONE_B}),this.tone({type:"sine",from:1975.53,at:n,dur:.1,gain:bt.COIN_OCT_A}),this.tone({type:"sine",from:2637.02,at:n+.08,dur:.2,gain:bt.COIN_OCT_B})}catch{}}playCheckpoint(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((a,o)=>this.tone({type:"triangle",from:a,at:n+o*.07,dur:.2,gain:bt.CHECKPOINT}))}catch{}}playGameOver(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;[300,260,220,150].forEach((a,o)=>this.tone({type:"sawtooth",from:a,at:n+o*.12,dur:.18,gain:bt.GAMEOVER_TONE})),this.hiss({at:n,dur:.35,gain:bt.GAMEOVER_NOISE,type:"lowpass",freq:900})}catch{}}playWin(){const e=this.sfxCtx();if(e)try{const n=e.currentTime,a=[523.25,659.25,783.99,1046.5,880,1046.5,1318.51];a.forEach((o,c)=>{const u=c===a.length-1;this.tone({type:"square",from:o,at:n+c*.11,dur:u?.6:.15,gain:bt.WIN_TONE}),this.tone({type:"triangle",from:o/2,at:n+c*.11,dur:u?.5:.13,gain:bt.WIN_OCTAVE})})}catch{}}playBonk(){const e=this.sfxCtx();if(!e)return;const n=performance.now();if(!(n-this.lastBonkAt<90)){this.lastBonkAt=n;try{const a=e.currentTime;this.hiss({at:a,dur:.018,gain:bt.BONK_STICK,type:"bandpass",freq:2400,q:1.1}),this.hiss({at:a,dur:.04,gain:bt.BONK_BODY_TAP,type:"lowpass",freq:380}),this.tone({type:"sine",from:118,to:78,at:a,dur:.22,gain:bt.BONK_BODY_LOW,attack:.002}),this.tone({type:"triangle",from:92,to:70,at:a,dur:.16,gain:bt.BONK_BODY_TRIANGLE,attack:.002});const o=[[186,.11,.28],[194,.07,.32],[312,.09,.22],[478,.06,.16],[741,.035,.12],[1124,.02,.09]];for(const[c,u,d]of o)this.tone({type:"sine",from:c,at:a+.004,dur:d,gain:u,attack:.0015})}catch{}}}playLever(){const e=this.sfxCtx();if(e)try{const n=e.currentTime;this.hiss({at:n,dur:.035,gain:bt.LEVER_BANDPASS,type:"bandpass",freq:980,q:1.3}),this.tone({type:"square",from:420,to:210,at:n,dur:.07,gain:bt.LEVER_SQUARE,attack:.001}),this.tone({type:"sine",from:96,to:62,at:n+.012,dur:.1,gain:bt.LEVER_THUNK,attack:.002}),this.hiss({at:n+.03,dur:.025,gain:bt.LEVER_TAP,type:"highpass",freq:3500})}catch{}}playStairSlide(e,n,a,o=1){const c=this.sfxCtx(),u=this.noise();if(!c||!u||!this.sfxBus)return;const d=Yu(e,n);if(d<=0)return;const m=Math.max(.12,o);try{this.slideStop?.();const p=c.currentTime,g=p+m+.04,x=[],_=(()=>{if(typeof c.createStereoPanner!="function")return this.sfxBus;const le=c.createStereoPanner();return le.pan.value=Math.max(-1,Math.min(1,a)),le.connect(this.sfxBus),le})(),M=.03,v=Math.min(.12,m*.16),A=bt.SLIDE_PEAK*d,y=c.createGain();y.gain.setValueAtTime(1e-4,p),y.gain.exponentialRampToValueAtTime(A,p+M),y.gain.setValueAtTime(A,p+Math.max(M,m-v)),y.gain.exponentialRampToValueAtTime(1e-4,p+m),y.connect(_);const S=c.createGain();S.gain.value=.85;const R=c.createConstantSource();R.offset.value=.5;const U=c.createBufferSource();U.buffer=u,U.loop=!0,U.playbackRate.value=.02;const C=c.createBiquadFilter();C.type="lowpass",C.frequency.value=55,U.connect(C),C.connect(S);const O=c.createGain();O.gain.value=0,R.connect(O.gain),S.connect(O.gain),O.connect(y),x.push(U,R);const N=c.createWaveShaper(),B=new Float32Array(1024);for(let le=0;le<B.length;le++){const H=le/(B.length-1)*2-1;B[le]=Math.tanh(H*4)*.85+Math.sign(H)*Math.abs(H)**3*.15}N.curve=B,N.oversample="2x";const T=c.createBufferSource();T.buffer=u,T.loop=!0,T.playbackRate.value=.28,T.connect(N),x.push(T);const P=c.createBiquadFilter();P.type="lowpass",P.frequency.value=700,P.Q.value=.4,N.connect(P);const Y=[[70,.9,bt.SLIDE_BAND_LEVELS[0]],[130,1,bt.SLIDE_BAND_LEVELS[1]],[260,1.3,bt.SLIDE_BAND_LEVELS[2]],[520,1.8,.16]];for(const[le,H,E]of Y){const k=c.createBiquadFilter();k.type="bandpass",k.frequency.setValueAtTime(le,p),k.frequency.exponentialRampToValueAtTime(le*.78,p+m),k.Q.value=H;const ae=c.createGain();ae.gain.value=E,P.connect(k),k.connect(ae),ae.connect(O)}const V=c.createBufferSource();V.buffer=u,V.loop=!0,V.playbackRate.value=.1;const W=c.createBiquadFilter();W.type="lowpass",W.frequency.value=80,W.Q.value=.7;const pe=c.createGain();pe.gain.value=bt.SLIDE_RUMBLE,V.connect(W),W.connect(pe),pe.connect(O),x.push(V);const se=c.createBufferSource();se.buffer=u,se.loop=!0,se.playbackRate.value=.04;const J=c.createBiquadFilter();J.type="lowpass",J.frequency.value=45,J.Q.value=.9;const F=c.createGain();F.gain.value=bt.SLIDE_SUB,se.connect(J),J.connect(F),F.connect(y),x.push(se);const q=c.createBiquadFilter();q.type="highpass",q.frequency.value=22,O.disconnect(),O.connect(q),q.connect(y);for(const le of x)le.start(p),le.stop(g);const ne=()=>{const le=this.ctx?.currentTime??p;try{y.gain.cancelScheduledValues(le),y.gain.setValueAtTime(Math.max(1e-4,y.gain.value),le),y.gain.exponentialRampToValueAtTime(1e-4,le+.06)}catch{}for(const H of x)try{H.stop(le+.08)}catch{}this.slideStop===ne&&(this.slideStop=null)};this.slideStop=ne,window.setTimeout(()=>{this.slideStop===ne&&(this.slideStop=null)},(m+.1)*1e3)}catch{}}panDest(e){const n=this.ctx;if(!n||!this.sfxBus)return null;if(typeof n.createStereoPanner!="function")return this.sfxBus;const a=n.createStereoPanner();return a.pan.value=Math.max(-1,Math.min(1,e)),a.connect(this.sfxBus),a}createAmbientVoice(e){const n=this.ctx,a=this.noise();if(!n||!this.sfxBus||n.state==="closed")return null;const o=n.createGain();o.gain.value=1e-4;let c=null;typeof n.createStereoPanner=="function"?(c=n.createStereoPanner(),c.pan.value=0,o.connect(c),c.connect(this.sfxBus)):o.connect(this.sfxBus);const u=[],d=(m,p,g,x)=>{const _=n.createOscillator(),M=n.createGain();return _.type=m,_.frequency.value=p,M.gain.value=g,_.connect(M),M.connect(x),_.start(),u.push(_),{osc:_,gain:M}};if(e==="patrol"){const m=n.createBiquadFilter();m.type="lowpass",m.frequency.value=430,m.Q.value=.7,m.connect(o),d("sawtooth",57,.5,m);const p=d("sawtooth",114.7,.2,m);d("triangle",171,.1,o);const g=n.createOscillator(),x=n.createGain();if(g.type="sine",g.frequency.value=.37,x.gain.value=4.5,g.connect(x),x.connect(p.osc.detune),g.start(),u.push(g),a){const _=n.createBufferSource();_.buffer=a,_.loop=!0;const M=n.createBiquadFilter();M.type="bandpass",M.frequency.value=4200,M.Q.value=1.3;const v=n.createGain();v.gain.value=.34,_.connect(M),M.connect(v),v.connect(o),_.start(),u.push(_);const A=n.createOscillator(),y=n.createGain();A.type="sine",A.frequency.value=7.3,y.gain.value=.14,A.connect(y),y.connect(v.gain),A.start(),u.push(A)}}else{const m=n.createBiquadFilter();if(m.type="lowpass",m.frequency.value=900,m.Q.value=.8,m.connect(o),d("sawtooth",44,.55,m),d("sawtooth",88.5,.28,m),d("triangle",132,.1,m),a){const p=n.createBufferSource();p.buffer=a,p.loop=!0;const g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=1350,g.Q.value=.7;const x=n.createGain();x.gain.value=.45,p.connect(g),g.connect(x),x.connect(o),p.start(),u.push(p)}d("sine",1180,.05,o)}return{kind:e,gain:o,panner:c,sources:u}}destroyAmbientVoice(e){for(const n of e.sources){try{n.stop()}catch{}try{n.disconnect()}catch{}}e.sources.length=0;try{e.gain.disconnect()}catch{}if(e.panner)try{e.panner.disconnect()}catch{}}updateAmbient(e){if(!this.ctx||this.ctx.state!=="running"||this.muted||!this.sfxEnabled||!this.sfxBus){this.ambient.size&&this.clearAmbient();return}const n=this.ctx.currentTime,a=new Set;for(const o of e){const c=Yu(o.xDist,o.yDist);if(c<=0)continue;a.add(o.id);let u=this.ambient.get(o.id);if(!u||u.kind!==o.kind){if(u&&(this.destroyAmbientVoice(u),this.ambient.delete(o.id)),u=this.createAmbientVoice(o.kind),!u)continue;this.ambient.set(o.id,u)}const d=o.kind==="patrol"?AR:CR,m=o.kind==="elevator"?Math.max(0,Math.min(1,o.intensity??1)):1;u.gain.gain.setTargetAtTime(Math.max(1e-4,d*c*m),n,.1),u.panner&&u.panner.pan.setTargetAtTime(Math.max(-1,Math.min(1,o.pan)),n,.1)}for(const[o,c]of this.ambient)a.has(o)||(this.destroyAmbientVoice(c),this.ambient.delete(o))}clearAmbient(){for(const e of this.ambient.values())this.destroyAmbientVoice(e);this.ambient.clear()}playBallBounce(e,n,a){const o=this.sfxCtx();if(!o)return;const c=Yu(e,n);if(c<=0)return;const u=this.panDest(a);if(!u)return;const d=c*RR,m=.94+Math.random()*.12;try{const p=o.currentTime;this.hiss({at:p,dur:.02,gain:bt.BALL_METAL*d,type:"bandpass",freq:2600*m,q:1.2,dest:u}),this.tone({type:"sine",from:205*m,to:140,at:p,dur:.09,gain:bt.BALL_TONE*d,attack:.002,dest:u});const g=[[1180,.28,bt.BALL_SHIMMER],[1560,.2,bt.BALL_SHIMMER*.77],[2340,.13,bt.BALL_SHIMMER*.67],[3120,.08,bt.BALL_SHIMMER*.39]];for(const[x,_,M]of g)this.tone({type:"sine",from:x*m,at:p+.003,dur:_,gain:M*d,attack:.0015,dest:u});window.setTimeout(()=>{try{u.disconnect()}catch{}},500)}catch{}}playMusic(e){this.desiredTrack=e,this.syncMusic()}stopMusic(){this.desiredTrack=null,this.syncMusic()}syncMusic(){const e=!this.muted&&this.musicEnabled&&!this.pageHidden?this.desiredTrack:null;if((this.voice?this.voice.track:null)===e||(this.voice&&(this.killVoice(this.voice,e?IR:BR),this.voice=null),!e))return;const a=this.ctx;if(!a||a.state==="closed"||!this.musicBus)return;const o=a.createGain(),c=a.currentTime;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(1,c+.18),o.connect(this.musicBus);const u=e==="menu"?96:132,d={track:e,gain:o,sources:new Set,timer:0,step:0,nextTime:c+.06,stepDur:60/u/4};this.voice=d,this.pump(d),d.timer=window.setInterval(()=>this.pump(d),PR)}killVoice(e,n){window.clearInterval(e.timer);const a=this.ctx;if(!a||a.state==="closed")return;const o=a.currentTime,c=e.gain.gain;try{c.cancelScheduledValues(o),c.setValueAtTime(Math.max(1e-4,c.value),o),c.exponentialRampToValueAtTime(1e-4,o+n)}catch{}e.sources.forEach(u=>{try{u.stop(o+n+.03)}catch{}}),e.sources.clear(),window.setTimeout(()=>{try{e.gain.disconnect()}catch{}},(n+.15)*1e3)}forgetVoice(){this.voice&&(window.clearInterval(this.voice.timer),this.voice=null)}pump(e){const n=this.ctx;if(!n||this.voice!==e)return;const a=n.currentTime;if(e.nextTime<a-.05){const o=Math.ceil((a-e.nextTime)/e.stepDur);e.step=(e.step+o)%Lv,e.nextTime=a+.02}for(;e.nextTime<a+OR;)this.scheduleStep(e,e.step,e.nextTime),e.nextTime+=e.stepDur,e.step=(e.step+1)%Lv}scheduleStep(e,n,a){const o=Math.floor(n/4)%4,c=n%4,u=e.track==="menu",m=(u?NR:UR)[o],p=m[0];if(u){if(c===0&&this.tone({type:"sine",from:Ol(p-12),at:a,dur:1.1,gain:lr.MENU_BASS,attack:.04,voice:e}),c%2===0){const x=[0,1,2,1,0,2,1,2][n/2%8|0]??0;this.tone({type:"triangle",from:Ol(m[x]+12),at:a,dur:.42,gain:lr.MENU_ARP,attack:.02,voice:e})}n===16&&this.tone({type:"sine",from:Ol(m[2]+24),at:a,dur:.9,gain:lr.MENU_BELL,attack:.01,voice:e});return}if(c%2===0){const x=c===2?12:0;this.tone({type:"square",from:Ol(p-12+x),at:a,dur:.12,gain:lr.GAME_BASS,voice:e})}const g=[0,1,2,1][c];this.tone({type:"square",from:Ol(m[g]+12),at:a,dur:.085,gain:lr.GAME_ARP,voice:e}),c%2===1&&this.hiss({at:a,dur:.03,gain:lr.GAME_HIHAT,type:"highpass",freq:7e3,voice:e}),c===0&&o%2===1&&this.hiss({at:a,dur:.09,gain:lr.GAME_CLAP,type:"bandpass",freq:1800,q:.8,voice:e})}}const Ht=new zR,HR=3;function Jp(r,e,n,a,o){const c=Vu(r,n),u=Math.abs(e-a);if(Yu(c,u)<=0)return null;const d=Qt(n),m=new G(Math.cos(d),0,-Math.sin(d)),p=new G(1,0,0).applyQuaternion(o.quaternion),g=Math.sign(m.dot(p))||1,x=mR(n,r),_=Xn.clamp(x/HR*g,-1,1);return{xDist:c,yDist:u,pan:_}}function GR(r,e,n,a,o){const c=[];for(const u of r){if(u.behavior!=="patrol")continue;const d=Jp(u.currentX,u.bounceBaseY+.7,n,a,o);d&&c.push({id:`haz-${u.id}`,kind:"patrol",...d})}for(let u=0;u<e.length;u++){const d=e[u],m=d.prevTopY??d.currentTopY,p=Math.abs(d.currentTopY-m)/Ps;if(p<.05)continue;const g=Jp(d.x+d.width*.5,d.currentTopY,n,a,o);g&&c.push({id:`elev-${u}`,kind:"elevator",...g,intensity:Math.min(1,p/2.5)})}return c}const v1=1,y1="lvl_0001",S1="Level_0001",M1=48,b1=24,E1={x:.5,y:.5},T1=[{id:"st-cp2",x:20,topY:24,count:1},{id:"st_1_24",x:1,topY:24,count:2},{id:"st_23_24",x:23,topY:24,count:2},{id:"st_21_24",x:21,topY:24,count:2},{id:"st_5_46",x:5,topY:46,count:2},{id:"st_9_46",x:9,topY:46,count:2},{id:"st_11_46",x:11,topY:46,count:2},{id:"st_door_19_24",x:19,topY:24,count:1},{id:"st_door_3_24",x:3,topY:24,count:1},{id:"st_door_15_12",x:15,topY:12,count:1},{id:"st_door_18_24",x:18,topY:24,count:1},{id:"st_5_23",x:5,topY:23,count:1},{id:"st_8_22",x:8,topY:22,count:2},{id:"st_8_34",x:8,topY:34,count:1},{id:"st_4_34",x:4,topY:34,count:2},{id:"st_7_46",x:7,topY:46,count:2},{id:"st_19_48",x:19,topY:48,count:2},{id:"st_1_6",x:1,topY:6,count:2},{id:"st_1_0",x:1,topY:0,count:2},{id:"st_23_0",x:23,topY:0,count:2},{id:"st_22_4.5",x:22,topY:4.5,count:2},{id:"st_10_4.5",x:10,topY:4.5,count:2},{id:"st_15_47",x:15,topY:47,count:2},{id:"st_7_0",x:7,topY:0,count:2},{id:"st_9_0",x:9,topY:0,count:2},{id:"st_11_0",x:11,topY:0,count:2},{id:"st_13_0",x:13,topY:0,count:2},{id:"st_15_0",x:15,topY:0,count:2},{id:"st_17_0",x:17,topY:0,count:2},{id:"st_4_0.5",x:4,topY:.5,count:2},{id:"st_16_4.5",x:16,topY:4.5,count:1},{id:"st_lev_17_4.5",x:17,topY:4.5,count:1},{id:"st_8_2.5",x:8,topY:2.5,count:1},{id:"st_9_2.5",x:9,topY:2.5,count:1},{id:"st_13_12",x:13,topY:12,count:1},{id:"st_18_47.5",x:18,topY:47.5,count:1},{id:"st_14_46.5",x:14,topY:46.5,count:1},{id:"st_17_12",x:17,topY:12,count:1},{id:"st_19_12",x:19,topY:12,count:1},{id:"st_1_11",x:1,topY:11,count:1},{id:"st_23_12",x:23,topY:12,count:1},{id:"st_21_12",x:21,topY:12,count:1},{id:"st_2_34",x:2,topY:34,count:1},{id:"st_3_34",x:3,topY:34,count:1},{id:"st_7_34",x:7,topY:34,count:1},{id:"st_door_7_39",x:7,topY:38.5,count:1},{id:"st_door_4_46",x:4,topY:46,count:1},{id:"st_6_0.5",x:6,topY:.5,count:1},{id:"st_20_12",x:20,topY:12,count:1},{id:"st_16_12",x:16,topY:12,count:1},{id:"st_2_11",x:2,topY:11,count:1},{id:"st_5_38",x:5,topY:38,count:1},{id:"st_4_37.5",x:4,topY:37.5,count:1},{id:"st_3_37",x:3,topY:37,count:1},{id:"st_0_35.5",x:0,topY:35.5,count:1},{id:"st_1_35.5",x:1,topY:35.5,count:1},{id:"st_6_7.5",x:6,topY:7.5,count:1},{id:"st_lev_7_9",x:7,topY:9,count:1},{id:"st_4_11",x:4,topY:11,count:1}],w1=[{id:"el_10_22",x:10,width:1.2,yMin:22,yMax:34,speed:.75,phase:0}],A1=[{id:"g_21_24.5",x:21.5,y:24.5},{id:"g_8_22.5",x:8.5,y:22.5},{id:"g_9_22.5",x:9.5,y:22.5},{id:"g_12_46.5",x:12.5,y:46.5},{id:"g_18_0.5",x:18.5,y:.5},{id:"g_19_12.5",x:19.5,y:12.5},{id:"g_1_11.5",x:1.5,y:11.5}],C1=[],R1=[{id:"en_patrol_8_46",xCenter:8,y:46.55,behavior:"patrol",amplitude:3,speed:1},{id:"en_patrol_0_24",xCenter:0,y:24.55,behavior:"patrol",amplitude:3,speed:1.4},{id:"en_bounce_13_0",xCenter:13,y:.55,behavior:"bounce",amplitude:4,moveSteps:0,speed:.5},{id:"en_patrol_16_0",xCenter:19,y:.55,behavior:"patrol",amplitude:3,speed:.5},{id:"en_patrol_3_34",xCenter:3,y:34.55,behavior:"patrol",amplitude:3,speed:.5}],L1=[{id:1,name:"Checkpoint 4",floor:5,x:12,y:4.5},{id:2,name:"Checkpoint 4",floor:9,x:8,y:9},{id:3,name:"Punkt II",floor:24,x:20,y:24}],D1=[{id:"cs_14_4.5",x:14,topY:4.5},{id:"cs_15_4.5",x:15,topY:4.5},{id:"cs_10_10.5",x:10,topY:10.5},{id:"cs_11_10.5",x:11,topY:10.5},{id:"cs_6_23",x:6,topY:23},{id:"cs_9_34",x:9,topY:34},{id:"cs_6_34",x:6,topY:34},{id:"cs_5_7",x:5,topY:7}],N1=[{id:"lev_17_5",x:17,topY:4.5},{id:"lev_7_9",x:7,topY:9}],U1=[{id:"ts_20_5",x:20,topY:4.5,leverId:"lev_17_5"},{id:"ts_5_11",x:5,topY:11,leverId:"lev_7_9"}],O1=[{id:"door_pair_15_12_a",pairId:"pair_15_12",x:15,topY:12,color:"#00E5FF"},{id:"door_pair_15_12_b",pairId:"pair_15_12",x:18,topY:24,color:"#00E5FF"},{id:"door_pair_7_39_a",pairId:"pair_7_39",x:7,topY:38.5,color:"#FF00E5"},{id:"door_pair_7_39_b",pairId:"pair_7_39",x:4,topY:46,color:"#FF00E5"}],P1={schemaVersion:v1,id:y1,name:S1,towerHeight:M1,circumferenceSteps:b1,start:E1,stairs:T1,elevators:w1,gems:A1,springs:C1,enemies:R1,checkpoints:L1,collapsingStairs:D1,levers:N1,togglableStairs:U1,doors:O1},kR=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:L1,circumferenceSteps:b1,collapsingStairs:D1,default:P1,doors:O1,elevators:w1,enemies:R1,gems:A1,id:y1,levers:N1,name:S1,schemaVersion:v1,springs:C1,stairs:T1,start:E1,togglableStairs:U1,towerHeight:M1},Symbol.toStringTag,{value:"Module"})),VR=["stairs","elevators","gems","springs","enemies","checkpoints","doors","collapsingStairs","levers","togglableStairs"];function qa(r,e){if(typeof r!="number"||!Number.isFinite(r))throw new Error(`Level JSON: ${e} must be a finite number.`)}function I1(r){if(!r||typeof r!="object")throw new Error("Level JSON: root must be an object.");const e=r;if(e.schemaVersion!==1)throw new Error("Level JSON: unsupported schemaVersion.");if(typeof e.id!="string"||typeof e.name!="string")throw new Error("Level JSON: id and name are required.");if(qa(e.towerHeight,"towerHeight"),qa(e.circumferenceSteps,"circumferenceSteps"),e.towerHeight<1||e.towerHeight>200)throw new Error("Level JSON: towerHeight out of range [1, 200].");if(e.circumferenceSteps<4||e.circumferenceSteps>64)throw new Error("Level JSON: circumferenceSteps out of range [4, 64].");const n=e.start;if(!n||typeof n!="object")throw new Error("Level JSON: start is required.");qa(n.x,"start.x"),qa(n.y,"start.y");const a=e;for(const d of VR)if(!Array.isArray(e[d]))throw new Error(`Level JSON: ${d} must be an array.`);const o=new Set,c=[a.stairs,a.elevators,a.gems,a.springs,a.enemies,a.doors];for(const d of c)for(const m of d){if(!m.id||o.has(m.id))throw new Error(`Level JSON: duplicate or empty entity id '${m.id}'.`);o.add(m.id)}for(const d of a.stairs)if(qa(d.x,`stair ${d.id}.x`),qa(d.topY,`stair ${d.id}.topY`),d.count!==void 0&&(qa(d.count,`stair ${d.id}.count`),!Number.isInteger(d.count)||d.count<1))throw new Error(`Level JSON: stair ${d.id}.count must be integer >= 1.`);const u=new Map;for(const d of a.doors){qa(d.x,`door ${d.id}.x`),qa(d.topY,`door ${d.id}.topY`);const m=u.get(d.pairId)??[];m.push(d),u.set(d.pairId,m)}for(const[d,m]of u)if(m.length!==2)throw new Error(`Level JSON: door pair '${d}' must contain exactly two doors.`);return a}function yr(r,e={}){return r.colorSpace=gi,r.wrapS=e.wrapS??qn,r.wrapT=e.wrapT??qn,e.repeat&&r.repeat.set(e.repeat[0],e.repeat[1]),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),r}function Sr(r,e={}){return r.colorSpace=ja,r.wrapS=e.wrapS??qn,r.wrapT=e.wrapT??qn,e.repeat&&r.repeat.set(e.repeat[0],e.repeat[1]),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),r}function YR(){return B1()}function XR(){const r=new es,e=new URL(""+new URL("door_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("door_nrm.jpg",import.meta.url).href,import.meta.url).href,a=yr(r.load(e)),o=Sr(r.load(n));return new cn({map:a,normalMap:o,normalScale:new He(30,30),roughness:1,metalness:.1})}function B1(){const r=new es,e=new URL(""+new URL("STEP_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm.jpg",import.meta.url).href,import.meta.url).href,a=[.5,.9],o=yr(r.load(e),{wrapS:Jt,wrapT:Jt,repeat:a,anisotropy:7}),c=Sr(r.load(n),{wrapS:Jt,wrapT:Jt,repeat:a,anisotropy:7});return new cn({map:o,normalMap:c,normalScale:new He(30,30),roughness:1,metalness:.1})}function WR(r,e=6.12,n=52){const a=new es,o=new URL(""+new URL("WALL_col.jpg",import.meta.url).href,import.meta.url).href,c=new URL(""+new URL("WALL_nrm.jpg",import.meta.url).href,import.meta.url).href,u=7,d=Math.max(1,Math.ceil((n||52)/6)),m=[u,d],p=yr(a.load(o),{wrapS:Jt,wrapT:Jt,repeat:m,anisotropy:7}),g=Sr(a.load(c),{wrapS:Jt,wrapT:Jt,repeat:m,anisotropy:7});return new cn({map:p,normalMap:g,normalScale:new He(3.85,3.85),roughness:1,metalness:.18})}function qR(r){const e=new es,n=new URL(""+new URL("STEP_col.jpg",import.meta.url).href,import.meta.url).href,a=new URL(""+new URL("STEP_nrm.jpg",import.meta.url).href,import.meta.url).href,o=[1,1],c=yr(e.load(n),{wrapS:Jt,wrapT:Jt,repeat:o,anisotropy:7}),u=Sr(e.load(a),{wrapS:Jt,wrapT:Jt,repeat:o,anisotropy:7});return new cn({map:c,normalMap:u,normalScale:new He(10,10),roughness:1,metalness:.1})}function jR(){const r=new es,e=new URL(""+new URL("STEP_col.png",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm.png",import.meta.url).href,import.meta.url).href,a=[1,1],o=yr(r.load(e),{wrapS:Jt,wrapT:Jt,repeat:a,anisotropy:7}),c=Sr(r.load(n),{wrapS:Jt,wrapT:Jt,repeat:a,anisotropy:7});return new cn({map:o,normalMap:c,normalScale:new He(20,20),roughness:.3,metalness:.5})}function ZR(){const r=new es,e=new URL(""+new URL("ENEMY_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("ENEMY_nrm.jpg",import.meta.url).href,import.meta.url).href,a=r.load(e),o=r.load(n);return a.wrapS=qn,a.wrapT=qn,o.wrapS=qn,o.wrapT=qn,new cn({map:a,normalMap:o,normalScale:new He(10,10),roughness:.3,metalness:.5})}function KR(){const r=new es,e=new URL(""+new URL("STEP_col2.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm2.jpg",import.meta.url).href,import.meta.url).href,a=[1.5,1.5],o=yr(r.load(e),{wrapS:Jt,wrapT:Jt,repeat:a,anisotropy:7}),c=Sr(r.load(n),{wrapS:Jt,wrapT:Jt,repeat:a,anisotropy:7});return new cn({map:o,normalMap:c,normalScale:new He(30,30),roughness:.9,metalness:.4})}function QR(){const r=new es,e=new URL(""+new URL("STEP_col.jpg",import.meta.url).href,import.meta.url).href,n=new URL(""+new URL("STEP_nrm.jpg",import.meta.url).href,import.meta.url).href,a=yr(r.load(e)),o=Sr(r.load(n));return new cn({map:a,normalMap:o,normalScale:new He(20,20),roughness:1,metalness:.3})}const JR=I1(P1);function Pl(r,e,n,a){const o=new Oi(r,e,n),c=o.attributes.uv;if(!c)return o;const u=c.array,d=Math.max(r,e,n);if(d<=0)return o;const m=[[n,e],[n,e],[r,n],[r,n],[r,e],[r,e]];for(let p=0;p<6;p++){const[g,x]=m[p],_=a[0]*g/d,M=a[1]*x/d,v=p*8;for(let A=0;A<4;A++){const y=v+A*2,S=y+1;y<0||S>=u.length||(u[y]=u[y]*_,u[S]=u[S]*M)}}return c.needsUpdate=!0,o.computeBoundingBox(),o.computeBoundingSphere(),o}class $R{host;level;towerHeight;renderer;scene;camera;culler=new cR;sceneMode="menu";ambientAudioActive=!1;player;cameraRig;particles;staticStairs=[];stairsInstancedMesh;towerMesh;floorMesh;sky;water;composer;bloomPass;sun=new G;waterLevel=-1.2;wasInWater=!1;waterEnterCooldown=0;topRing;summitCrown;waterRipples=[];pmremGenerator;elevators=[];gems=[];springs=[];hazards=[];doors=[];checkpoints=[];activeCheckpoint=0;doorCooldown=0;collapsingStairs=[];levers=[];togglableStairs=[];leverCooldown=0;ignoredElevator=-1;sunLight;hemiLight;playerState={x:Ev,y:.5,vx:0,vy:0,grounded:!0,coyoteTimer:0,jumpBufferTimer:0,facingRight:!0,rideElevator:-1,status:"running",walkCycle:0,score:0,gemsCollected:0,totalGems:0,jumpCount:0,elapsedTime:0,camLeadAngle:0,verticalLead:0,smoothCamY:.5,idleTimer:0,facingYaw:0,jiggle:0,jiggleVel:0,crownFlash:0,enemyHitCooldown:0,knockdownFloorY:null,currentStairTopY:null};input={left:!1,right:!1,up:!1,down:!1,jumpQueued:!1,doorQueued:!1};config={cullingEnabled:!0,simulatedFpsThrottle:0,filterMode:"crisp",renderScale:1,soundMuted:!0,sfxEnabled:!0,musicEnabled:!0};accumulator=0;lastTime=performance.now();animFrameId=0;lastThrottleTime=performance.now();playerHudTimer=0;onPlayerStateUpdate;onGameStatusChange;constructor(e,n=JR){this.host=e,this.level=n,this.towerHeight=n.towerHeight,this.playerState.x=n.start.x,this.playerState.y=n.start.y,this.playerState.smoothCamY=n.start.y,this.playerState.idleTimer=2,this.playerState.facingYaw=Math.atan2(Math.sin(Qt(n.start.x)),Math.cos(Qt(n.start.x))),this.initThree(),this.buildWorld(),this.player=new MR(this.scene),this.cameraRig=new bR(this.camera,this.towerHeight),this.particles=new ER(this.scene,250),this.setupEvents(),this.startLoop()}initThree(){this.scene=new Bx,this.scene.background=null,this.scene.fog=new vm(13421772,25e-5),this.camera=new _i(Zh,jh,.1,2e4),this.camera.position.set(0,5,14),this.renderer=new JC({antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(Kp,Qp,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=zl,this.renderer.shadowMap.autoUpdate=!0,this.renderer.outputColorSpace=gi,this.renderer.toneMapping=Zu,this.renderer.toneMappingExposure=.9;const e=this.renderer.domElement;e.id="game-canvas-640x640",e.style.width="100%",e.style.height="100%",e.style.objectFit="cover",e.style.display="block",this.applyCanvasFilter(),this.host.appendChild(e),this.hemiLight=new jE("#fffddb","#34697b",.66),this.scene.add(this.hemiLight),this.sunLight=new JE("#ffe999",1.9),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera=new Jl(-120,120,120,-120,.1,450),this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.02,this.sunLight.shadow.radius=.4,this.sunLight.target.position.set(0,5,0),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.position.copy(this.sunLight.position),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.scene.add(this.sunLight);const n=new rR(this.scene,this.camera);this.bloomPass=new Co(new He(Kp,Qp),.01,0,.24);const a=new lR;this.composer=new sR(this.renderer),this.composer.addPass(n),this.composer.addPass(this.bloomPass),this.composer.addPass(a)}applyCanvasFilter(){const e=this.renderer.domElement;this.config.filterMode==="crisp"?(e.style.imageRendering="pixelated",e.style.imageRendering="crisp-edges"):e.style.imageRendering="auto"}buildWorld(){this.sky=new ef,this.sky.scale.setScalar(1e4),this.sky.frustumCulled=!1,this.scene.add(this.sky);const e=this.sky.material.uniforms,n=33,a=220,o=Xn.degToRad(90-n),c=Xn.degToRad(a);this.sun.setFromSphericalCoords(1,o,c),e.turbidity.value=2,e.rayleigh.value=1,e.mieCoefficient.value=.005,e.mieDirectionalG.value=.8,e.sunPosition.value.copy(this.sun),e.cloudCoverage&&(e.cloudScale.value=2e-4,e.cloudSpeed.value=1e-5,e.cloudCoverage.value=.4,e.cloudDensity.value=.4,e.cloudElevation.value=.5,e.time.value=0),e.exposure!==void 0&&(e.exposure.value=.028),this.sunLight.position.copy(this.sun).multiplyScalar(125),this.sunLight.target.position.set(0,5,0),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.sunLight.color=new lt("#ffe999"),this.hemiLight.color=new lt("#fffddb"),this.hemiLight.groundColor=new lt("#405080");try{this.pmremGenerator=new qp(this.renderer);const y=new Bx;y.add(this.sky.clone());const S=this.pmremGenerator.fromScene(y);this.scene.environment=null,this.scene.environmentIntensity=0,S.dispose()}catch{}const d=new Ql(12e3,12e3),m=new es,p=new URL(""+new URL("waternormals.jpg",import.meta.url).href,import.meta.url).href,g=m.load(p);g.wrapS=Jt,g.wrapT=Jt,this.water=new $C(d,{textureWidth:512,textureHeight:512,waterNormals:g,sunDirection:this.sun.clone().normalize(),sunColor:8355711,waterColor:5592405,distortionScale:.8,fog:this.scene.fog!==void 0}),this.water.material.onBeforeCompile=y=>{y.uniforms.uTowerRadius={value:ln},y.fragmentShader=y.fragmentShader.replace("void main() {",`uniform float uTowerRadius;
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
        }`)},this.water.rotation.x=-Math.PI/2,this.water.position.y=this.waterLevel,this.floorMesh=this.water,this.floorMesh.frustumCulled=!1,this.floorMesh.receiveShadow=!0,this.scene.add(this.water);const x=this.towerHeight+6,_=ln+.12;this.towerMesh=new ht(new hr(ln,ln+.18,x,48,1,!1),WR(void 0,_,x)),this.towerMesh.position.y=this.towerHeight/2-3,this.towerMesh.receiveShadow=!0,this.towerMesh.castShadow=!0,this.towerMesh.frustumCulled=!1,this.scene.add(this.towerMesh);const M=new ht(new Kl(ln+.32,.06,10,48),new cn({color:"#d6ecff",roughness:.92,transparent:!0,opacity:.18,depthWrite:!1}));M.rotation.x=Math.PI/2,M.position.y=this.waterLevel+.04,M.renderOrder=1,this.scene.add(M),this.topRing=new ht(new Kl(ln-.5,.25,14,64),new cn({color:"#fbbf24",emissive:"#d97706",emissiveIntensity:.18,roughness:.5,metalness:.8})),this.topRing.position.y=this.towerHeight+.6,this.topRing.rotation.x=Math.PI/2,this.topRing.castShadow=!0,this.scene.add(this.topRing),this.summitCrown=new Wn,this.summitCrown.position.y=this.towerHeight;const v=new ht(new Ui(3.2,24,16,0,Math.PI*2,0,Math.PI*.5),new cn({color:"#7dd3fc",emissive:"#075985",emissiveIntensity:.12,transparent:!0,opacity:.36,roughness:.08,metalness:.12,envMapIntensity:1.2,depthWrite:!1,side:na}));this.summitCrown.add(v);const A=new ht(new Zl(1.1,0),new cn({color:"#fef08a",emissive:"#eab308",emissiveIntensity:.3,metalness:.9,roughness:.1}));A.position.y=1.35,A.name="victoryTrophy",this.summitCrown.add(A),this.scene.add(this.summitCrown),this.buildStairs(),this.buildElevators(),this.buildSprings(),this.buildGems(),this.buildHazards(),this.buildCheckpoints(),this.buildDoors(),this.buildCollapsingStairs(),this.buildLeversAndTogglableStairs(),this.prewarmSummitShaders()}prewarmSummitShaders(){const e=this.topRing.visible,n=this.summitCrown.visible;this.topRing.visible=!0,this.summitCrown.visible=!0;const a=this.renderer;a.compileAsync?a.compileAsync(this.scene,this.camera).finally(()=>{this.topRing.visible=e,this.summitCrown.visible=n}):(a.compile(this.scene,this.camera),this.topRing.visible=e,this.summitCrown.visible=n)}buildStairs(){const e=ln+si*.5,n=Wi*ln/yn,a=new Map,o=(g,x,_)=>{const M=In(x),v=`${M}@${_.toFixed(3)}`;a.has(v)||a.set(v,{id:g,stepX:M,topY:_})};for(const g of this.level.stairs){const x=Math.max(1,Math.floor(g.count??1));for(let _=0;_<x;_++)o(x>1?`${g.id}#${_}`:g.id,g.x+_,g.topY)}for(const g of this.level.doors)o(`${g.id}-stair`,g.x,g.topY);for(const g of this.level.checkpoints)o(`checkpoint-${g.id}-stair`,g.x,g.y);const c=[];for(const g of a.values()){const x=Qt(ta(g.stepX)),_=new G(Math.sin(x),0,Math.cos(x)),M=new G(_.x*e,g.topY-on*.5,_.z*e),v=new _r().setFromEuler(new $a(0,x,0)),A=new G(n*1.02,1,1);c.push({id:g.id,x:g.stepX,topY:g.topY,width:1,theta:x,radial:_,tangLength:n,defaultMatrix:new It().compose(M,v,A),culledMatrix:new It().compose(M,v,new G(0,0,0))})}this.staticStairs=c;const u=n*1.02,d=Pl(u,on,si,[.8,.8]),m=Pl(1,on,si,[.8,.8]),p=qR();this.stairsInstancedMesh=new OE(m,p,c.length),this.stairsInstancedMesh.instanceMatrix.setUsage(j2),this.stairsInstancedMesh.castShadow=!0,this.stairsInstancedMesh.receiveShadow=!0,this.stairsInstancedMesh.frustumCulled=!1,c.forEach((g,x)=>{this.stairsInstancedMesh.setMatrixAt(x,g.defaultMatrix)}),this.stairsInstancedMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.stairsInstancedMesh),d.dispose()}buildElevators(){const e=this.level.elevators,a=Wi*ln/yn*1.02,u=Pl(a,on,si,[.8,.8]),d=on,m=YR();e.forEach(p=>{const g=Qt(p.x+p.width*.5),x=new G(Math.sin(g),0,Math.cos(g)),_=jR(),M=new ht(u,_);M.castShadow=!0,M.receiveShadow=!0,M.rotation.y=g,M.position.set(x.x*(ln+si*.5),p.yMin-on*.5,x.z*(ln+si*.5)),this.scene.add(M),this.elevators.push({...p,mesh:M,currentTopY:p.yMin,theta:g});const v=p.yMax-p.yMin,A=new Oi(d,v,d),y=new ht(A,m);y.rotation.y=g;const S=ln+d*.5;y.position.set(x.x*S,(p.yMin+p.yMax)/2,x.z*S),y.receiveShadow=!0,this.scene.add(y)})}buildSprings(){this.level.springs.forEach(e=>{const n=Qt(e.x+.5),a=new G(Math.sin(n),0,Math.cos(n)),o=new Wn,c=new ht(new hr(.45,.5,.15,16),new cn({color:"#ef4444",metalness:.6,roughness:.3}));c.position.y=e.topY+.08,o.add(c);const u=new ht(new hr(.4,.4,.1,16),new cn({color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:.6,metalness:.8}));u.position.y=e.topY+.18,o.add(u),o.position.set(a.x*St,0,a.z*St),o.rotation.y=n,this.scene.add(o),this.springs.push({...e,mesh:c,theta:n,cooldown:0})})}buildGems(){const e=new Zl(.32,0),n=new cn({color:"#f59e0b",emissive:"#d97706",emissiveIntensity:.6,roughness:.6,metalness:.9});this.playerState.totalGems=this.level.gems.length,this.level.gems.forEach(a=>{const o=Qt(a.x),c=new G(Math.sin(o),0,Math.cos(o)),u=new ht(e,n.clone());u.castShadow=!0,u.position.set(c.x*St,a.y,c.z*St),this.scene.add(u),this.gems.push({id:a.id,x:a.x,y:a.y,mesh:u,collected:!1,theta:o})})}findEnemyLandingX(e,n,a,o){if(a<=0)return ta(In(e));const c=In(e),u=[o,-o];for(const d of u){const m=In(c+d*a);if(this.staticStairs.some(g=>In(g.x)===m&&Math.abs(g.topY-n)<.2))return ta(m)}return ta(c)}buildHazards(){const e=this.level.enemies,n=ZR();n.map&&(n.map.wrapS=Jt,n.map.wrapT=Jt,n.map.repeat.set(.6,.6),n.map.offset.set(0,0),n.map.center.set(.5,.5),n.map.rotation=0,n.map.flipY=!1,n.map.needsUpdate=!0),n.normalMap&&(n.normalMap.wrapS=Jt,n.normalMap.wrapT=Jt,n.normalMap.repeat.set(.6,.6),n.normalMap.offset.set(0,0),n.normalMap.center.set(.5,.5),n.normalMap.rotation=0,n.normalMap.flipY=!1,n.normalMap.needsUpdate=!0);const a=new Ui(.32,14,14),c=Fl*Fl/(2*ku)*.5;e.forEach(u=>{const d=u.behavior??"bounce",m=u.amplitude??c,p=u.speed??1.2,g=In(u.xCenter);let x=u.y;for(const U of this.staticStairs)if(In(U.x)===g&&Math.abs(U.topY-u.y)<.75){x=U.topY;break}const _=ta(g),M=Math.max(0,Math.floor(u.moveSteps??0)),v=u.direction===-1?-1:1,y=2*Math.sqrt(2*m/ku)/Math.max(.25,p),S=this.findEnemyLandingX(_,x,M,v),R=new ht(a,n);R.castShadow=!0,R.receiveShadow=!0,R.userData.spinAxis=new G(0,0,1),R.userData.spinSpeed=(p??1.2)*.8,this.scene.add(R),this.hazards.push({id:u.id,x:_,y:u.y,behavior:d,amplitude:m,speed:p,currentX:_,bounceElapsed:0,bounceDuration:y,bounceBaseY:x,bounceFromX:_,bounceToX:S,moveSteps:M,direction:v,mesh:R,theta:Qt(_)})})}buildLeversAndTogglableStairs(){var e=.7,n=new Oi(.06,.06,e),a=new Ui(.08,8,8),o=new cn({color:"#ef4444",emissive:"#7f1d1d",emissiveIntensity:.9,roughness:.1,metalness:.6});this.level.levers.forEach(m=>{var p=Qt(ta(In(m.x))),g=new G(Math.sin(p),0,Math.cos(p)),x=new Wn,_=new Wn;_.name="armGroup";var M=new ht(n,new cn({color:"#cbd5e1",emissive:"#475569",emissiveIntensity:.4,metalness:.5,roughness:.3}));M.position.set(0,0,e/2),_.add(M);var v=new ht(a,o.clone());v.position.set(0,0,e),v.userData={isBall:!0},_.add(v),_.rotation.x=-.6,x.add(_),x.position.set(g.x*ln,m.topY+1.2,g.z*ln),x.rotation.y=p,this.scene.add(x),this.levers.push({id:m.id,x:m.x,topY:m.topY,theta:p,mesh:x,extended:!1})});const u=Wi*ln/yn*1.02,d=Pl(u,on,si,[.8,.8]);this.level.togglableStairs.forEach(m=>{const p=Qt(ta(In(m.x))),g=new G(Math.sin(p),0,Math.cos(p)),x=new Wn,_=QR(),M=new ht(d,_);M.castShadow=!0,M.receiveShadow=!0,x.add(M),x.position.set(g.x*(ln-.8),m.topY-on*.5,g.z*(ln-.8)),x.rotation.y=p,this.scene.add(x),this.togglableStairs.push({id:m.id,x:ta(In(m.x)),topY:m.topY,leverId:m.leverId,theta:p,mesh:x,extended:!1,retractOffset:0})})}buildCollapsingStairs(){const e=KR(),a=Wi*ln/yn*1.02,o=Pl(a,on,si,[.8,.8]);this.level.collapsingStairs.forEach(c=>{const u=ta(In(c.x)),d=Qt(u),m=new G(Math.sin(d),0,Math.cos(d)),p=new Wn,g=new ht(o,e);g.castShadow=!0,g.receiveShadow=!0,p.add(g),p.position.set(m.x*St,c.topY-on*.5,m.z*St),p.rotation.y=d,this.scene.add(p),this.collapsingStairs.push({id:c.id,x:u,topY:c.topY,theta:d,mesh:p,state:"idle",timer:0,retractOffset:0})})}buildCheckpoints(){this.level.checkpoints.forEach(e=>{const n=ta(In(e.x)),a=Qt(n),o=new G(Math.sin(a),0,Math.cos(a)),c=new Wn,u=new ht(new hr(.06,.06,1.8,8),new cn({color:"#64748b",metalness:.8}));u.position.y=e.y+.9,c.add(u);const d=new ht(new Oi(.6,.4,.05),new cn({color:"#ef4444",emissive:"#991b1b",emissiveIntensity:.3}));d.position.set(.3,e.y+1.5,0),c.add(d),c.position.set(o.x*(St-.4),0,o.z*(St-.4)),c.rotation.y=a,this.scene.add(c),this.checkpoints.push({...e,x:n,activated:!1,mesh:c})})}buildDoors(){const e=new Map;for(const n of this.level.doors){const a=e.get(n.pairId);(a===void 0||n.topY<a)&&e.set(n.pairId,n.topY)}this.level.doors.forEach(n=>{const a=ta(In(n.x)),o=Qt(a),c=new G(Math.sin(o),0,Math.cos(o)),d=n.topY===e.get(n.pairId)?"#22c55e":"#ef4444",m=new Wn,p=XR(),g=B1(),x=new ht(new Oi(.85,2,.16),p);x.position.set(0,.95,.03),x.castShadow=!0,m.add(x);const _=new ht(new Oi(.18,2.15,.3),g),M=_.clone();_.position.set(-.53,1.05,0),M.position.set(.53,1.05,0);const v=g.clone();v.map&&(v.map.center.set(.5,.5),v.map.rotation=Math.PI/2,v.map.needsUpdate=!0),v.normalMap&&(v.normalMap.center.set(.5,.5),v.normalMap.rotation=Math.PI/2,v.normalMap.needsUpdate=!0);const A=new ht(new Oi(1.25,.2,.3),v);A.position.set(0,2.05,0),m.add(_,M,A);const y=new ht(new ym(.18,.35,4),new Za({color:d}));y.position.set(0,2.55,.2),y.rotation.z=Math.PI,y.userData.baseY=2.55,m.add(y),m.position.set(c.x*(ln+.2),n.topY,c.z*(ln+.2)),m.rotation.y=o,this.scene.add(m),this.doors.push({...n,x:a,color:d,theta:o,mesh:m})})}spawnParticles(e,n,a,o=2.5,c="burst",u=null){this.particles.spawn(e,n,a,o,c,u)}stepPhysics(e){if(this.sceneMode==="menu"||this.playerState.status!=="running")return;this.playerState.elapsedTime+=e,this.playerState.coyoteTimer>0&&(this.playerState.coyoteTimer-=e),this.playerState.jumpBufferTimer>0&&(this.playerState.jumpBufferTimer-=e),this.doorCooldown>0&&(this.doorCooldown-=e),this.playerState.crownFlash>0&&(this.playerState.crownFlash=Math.max(0,this.playerState.crownFlash-e)),this.playerState.enemyHitCooldown>0&&(this.playerState.enemyHitCooldown=Math.max(0,this.playerState.enemyHitCooldown-e));const n=11.5;this.playerState.jiggleVel+=(-190*this.playerState.jiggle-n*this.playerState.jiggleVel)*e,this.playerState.jiggle+=this.playerState.jiggleVel*e,this.playerState.jiggle=Xn.clamp(this.playerState.jiggle,-.32,.32),this.levers.forEach(v=>{var A=Math.abs(this.playerState.y-(v.topY+1.2))<1.5&&Vu(this.playerState.x,v.x)<.9;A&&this.input.doorQueued&&this.leverCooldown<=0&&(this.input.doorQueued=!1,v.extended=!v.extended,this.leverCooldown=.4,Ht.playLever(),this.togglableStairs.forEach(R=>{if(R.leverId!==v.id)return;R.extended=v.extended;const U=this.ambientAudioFor(R.x,R.topY);U&&Ht.playStairSlide(U.xDist,U.yDist,U.pan,.7)}));var y=v.mesh.children.find(function(R){return R.name==="armGroup"});y&&(y.rotation.x=Xn.lerp(y.rotation.x,v.extended?-.2:-1,.12));var S=y?y.children.find(function(R){return R.userData&&R.userData.isBall}):void 0;S&&S.material instanceof cn&&(S.material.color.set(v.extended?"#4ade80":"#ef4444"),S.material.emissive.set(v.extended?"#14532d":"#7f1d1d"))}),this.leverCooldown>0&&(this.leverCooldown-=e),this.togglableStairs.forEach(v=>{var A=v.extended?0:1;v.retractOffset=Xn.lerp(v.retractOffset,A,1-Math.exp(-6*e)),Math.abs(v.retractOffset-A)<.005&&(v.retractOffset=A);var y=new G(Math.sin(v.theta),0,Math.cos(v.theta)),S=ln+si*.5,R=ln-.8,U=S+(R-S)*v.retractOffset;v.mesh.position.set(y.x*U,v.topY-on*.5,y.z*U);var C=v.mesh.children[0];if(C&&C instanceof ht&&C.material instanceof cn){var O=v.retractOffset<.5;C.material.color.set(O?"#4ade80":"#ef4444"),C.material.emissive.set(O?"#198745f0":"#831b1bed")}}),this.input.doorQueued&&(this.doorCooldown<=0&&this.tryUseDoor(),this.input.doorQueued=!1),this.collapsingStairs.forEach(v=>{var A=Math.abs(this.playerState.y-v.topY)<.2&&Vu(this.playerState.x,v.x)<.6;switch(v.state){case"idle":if(A&&this.playerState.grounded){v.state="retracting",v.timer=0;const C=this.ambientAudioFor(v.x,v.topY);C&&Ht.playStairSlide(C.xDist,C.yDist,C.pan,1)}break;case"retracting":v.retractOffset=Xn.lerp(v.retractOffset,1,1-Math.exp(-6*e)),v.retractOffset>=.98&&(v.state="hidden",v.timer=1,v.retractOffset=1);break;case"hidden":if(v.timer-=e,v.timer<=0){v.state="extending",v.timer=1;const C=this.ambientAudioFor(v.x,v.topY);C&&Ht.playStairSlide(C.xDist,C.yDist,C.pan,1)}break;case"extending":v.timer-=e,v.retractOffset=Math.max(0,v.timer/1),v.timer<=0&&(v.state="idle",v.retractOffset=0,v.timer=0);break}var y=new G(Math.sin(v.theta),0,Math.cos(v.theta)),S=St,R=ln-.8,U=S+(R-S)*v.retractOffset;v.mesh.position.set(y.x*U,v.topY-on*.5,y.z*U)});const a=this.playerState.elapsedTime;if(this.elevators.forEach(v=>{const A=(Math.sin(a*v.speed+v.phase)+1)*.5,y=.15,S=Xn.smoothstep(A,y,1-y),R=Xn.lerp(v.yMin,v.yMax,S);v.mesh&&(v.mesh.position.y=R-on*.5),v.prevTopY=v.currentTopY,v.currentTopY=R}),this.hazards.forEach(v=>{switch(v.behavior){case"bounce":{if(v.bounceElapsed+=e,v.bounceElapsed>=v.bounceDuration){const O=this.ambientAudioFor(v.currentX,v.bounceBaseY+.32);if(O&&Ht.playBallBounce(O.xDist,O.yDist,O.pan),v.bounceElapsed%=v.bounceDuration,v.x=v.bounceToX,v.moveSteps>0){const N=In(In(v.bounceFromX)+v.direction*v.moveSteps);In(v.x)!==N&&(v.direction=v.direction===1?-1:1)}v.bounceFromX=v.x,v.bounceToX=this.findEnemyLandingX(v.x,v.bounceBaseY,v.moveSteps,v.direction)}const S=Xn.clamp(v.bounceElapsed/v.bounceDuration,0,1),R=4*v.amplitude*S*(1-S);let U=v.bounceToX-v.bounceFromX;U>yn*.5&&(U-=yn),U<-yn*.5&&(U+=yn),v.currentX=kl(v.bounceFromX+U*S,yn),v.theta=Qt(v.currentX);const C=v.bounceBaseY+.32+R;if(v.mesh){const O=new G(Math.sin(v.theta),0,Math.cos(v.theta));v.mesh.position.set(O.x*St,C,O.z*St),v.mesh.userData.currentY=C,v.mesh.rotation.x+=e*5,v.mesh.rotation.z+=e*2.5}break}case"patrol":{const S=Math.sin(a*v.speed);if(v.currentX=kl(v.x+S*v.amplitude,yn),v.theta=Qt(v.currentX),v.mesh){const R=new G(Math.sin(v.theta),0,Math.cos(v.theta));v.mesh.position.set(R.x*St,v.bounceBaseY+.7,R.z*St),v.mesh.userData.currentY=v.bounceBaseY+.7,v.mesh.rotation.x+=e*5,v.mesh.rotation.z+=e*2.5}break}default:if(v.currentX=v.x,v.theta=Qt(v.x),v.mesh){const S=new G(Math.sin(v.theta),0,Math.cos(v.theta));v.mesh.position.set(S.x*St,v.bounceBaseY+.7,S.z*St),v.mesh.userData.currentY=v.bounceBaseY+.7,v.mesh.rotation.x+=e*5,v.mesh.rotation.z+=e*2.5}break}const A=v.mesh,y=A&&A.userData?.currentY?A.userData.currentY:v.y;this.playerState.enemyHitCooldown<=0&&y+.32>=this.playerState.y-.1&&y-.32<=this.playerState.y+ii&&Ni(this.playerState.x,ni*1.5,v.currentX,.4)&&this.applyKnockdown()}),this.springs.forEach(v=>{v.cooldown>0&&(v.cooldown-=e)}),this.playerState.rideElevator>=0){const v=this.playerState.rideElevator,A=this.elevators[v];if(A){const y=A.prevTopY??A.currentTopY,S=A.currentTopY,R=this.findRiderCeilingBottom(v,this.playerState.x,y,S);if(R!==null){const U=R-ii-.02;this.applyKnockdown(-4.5,v,U)}else this.playerState.y=S,this.playerState.currentStairTopY=S}}const o=(this.input.right?1:0)-(this.input.left?1:0);this.playerState.vx=o*hR;const c=this.playerState.x;let u=kl(this.playerState.x+this.playerState.vx*e,yn);u=this.checkSideCollision(c,u),this.playerState.x=u,o!==0?(this.playerState.facingRight=o>0,this.playerState.walkCycle+=e*9,this.playerState.idleTimer=0):this.playerState.idleTimer+=e,this.input.jumpQueued&&(this.playerState.jumpBufferTimer=.12,this.input.jumpQueued=!1);const d=this.playerState.grounded||this.playerState.coyoteTimer>0;if(this.playerState.jumpBufferTimer>0&&d){this.playerState.vy=Fl,this.playerState.grounded=!1,this.playerState.coyoteTimer=0,this.playerState.jumpBufferTimer=0,this.playerState.rideElevator=-1,this.playerState.jumpCount++,Ht.playJump(),this.playerState.jiggleVel+=6.5;const v=Qt(this.playerState.x),A=new G(Math.sin(v),0,Math.cos(v));this.spawnParticles(new G(A.x*St,this.playerState.y+.08,A.z*St),10,9684477,1.8,"jump",this.playerState.y)}!this.input.up&&this.playerState.vy>4&&(this.playerState.vy*=.88),this.playerState.vy-=ku*e;const m=this.playerState.y;let p=this.playerState.y+this.playerState.vy*e,g=!1;if(this.playerState.rideElevator<0){const v=m+ii,A=p+ii;for(let y=0;y<this.elevators.length;y++){if(y===this.ignoredElevator)continue;const S=this.elevators[y],R=S.currentTopY,C=(S.prevTopY??R)-on,O=R-on,N=C-v,B=O-A,T=m<=C+.02,P=N>=-.02&&B<=.02,Y=T&&A>O+.02&&p<R-.02;if((P||Y)&&Ni(this.playerState.x,ni,S.x,S.width)){const V=Math.min(p,O-ii-.02);this.applyKnockdown(-4.5,y,V),p=V,g=!0;break}}}if(!g){const v=this.checkCeilingCollision(m,p);if(v!==null){p=v,this.playerState.vy=0,this.playerState.jiggleVel-=4,Ht.playBonk();const A=Qt(this.playerState.x),y=new G(Math.sin(A),0,Math.cos(A));this.spawnParticles(new G(y.x*St,p+ii,y.z*St),10,16707722,2.5,"burst",this.findStairTopBelow(this.playerState.x,p+ii))}}const x=this.findGround(m,p);if(x&&this.playerState.vy<=0){if(!this.playerState.grounded){const v=Math.min(Math.abs(this.playerState.vy)/Fl,1.6);if(this.playerState.jiggleVel-=9*v,Ht.playLand(v),v>.18){const A=Qt(this.playerState.x),y=new G(Math.sin(A),0,Math.cos(A));this.spawnParticles(new G(y.x*St,x.topY+.06,y.z*St),Math.round(6+v*8),12573694,1.4+v*1.2,"land",x.topY)}}this.playerState.y=x.topY,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.coyoteTimer=0,this.playerState.rideElevator=x.rideElevator,this.playerState.currentStairTopY=x.topY,this.playerState.knockdownFloorY=null,this.ignoredElevator=-1}else this.playerState.grounded&&(this.playerState.coyoteTimer=.1),this.playerState.y=p,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null;this.resolveMovableStairLateralHit(),this.springs.forEach(v=>{if(v.cooldown<=0&&Math.abs(this.playerState.y-v.topY)<.5&&Ni(this.playerState.x,ni*1.5,v.x,.6)&&this.playerState.vy<=2){v.cooldown=.4,this.playerState.vy=v.bounceForce,this.playerState.grounded=!1,this.playerState.rideElevator=-1,Ht.playSuperJump();const A=Qt(v.x+.5),y=new G(Math.sin(A),0,Math.cos(A));this.spawnParticles(new G(y.x*St,v.topY+.2,y.z*St),16,16096779,4.2,"burst",v.topY)}}),this.gems.forEach(v=>{!v.collected&&v.y>=this.playerState.y-.3&&v.y<=this.playerState.y+2.5&&Ni(this.playerState.x,ni,v.x,.6)&&(v.collected=!0,this.playerState.gemsCollected++,this.playerState.score+=250,this.playerState.crownFlash=.3,Ht.playCoin(),v.mesh&&(v.mesh.visible=!1,this.spawnParticles(v.mesh.position,14,16498468,3.5,"burst",this.findStairTopBelow(v.x,v.y))))}),this.checkpoints.forEach(v=>{if(!v.activated&&Math.abs(this.playerState.y-v.y)<1.2&&Ni(this.playerState.x,ni*2,v.x,1.2)&&(v.activated=!0,this.activeCheckpoint=v.id,Ht.playCheckpoint(),this.playerState.score+=500,v.mesh)){const A=v.mesh.children[1];A&&A.material instanceof cn&&(A.material.color.set("#22c55e"),A.material.emissive.set("#15803d"));const y=Qt(v.x),S=new G(Math.sin(y),0,Math.cos(y)),R=new G(S.x*(St-.4),v.y+1.5,S.z*(St-.4));this.spawnParticles(R,20,2278750,3,"burst",v.y)}});const _=this.waterLevel+.25;if(this.waterEnterCooldown>0&&(this.waterEnterCooldown-=e),this.playerState.y<=_){if(!this.wasInWater&&this.playerState.vy<0&&this.waterEnterCooldown<=0){this.wasInWater=!0,this.waterEnterCooldown=1;const v=Qt(this.playerState.x),A=new G(Math.sin(v),0,Math.cos(v)),y=new G(A.x*St,_,A.z*St);this.spawnParticles(y,32,5227511,6.5),this.spawnParticles(y.clone().add(new G(0,.2,0)),20,16777215,4),this.createWaterRipple(y),this.playerState.jiggleVel-=12,Ht.playGameOver()}this.playerState.vy=Xn.lerp(this.playerState.vy,-.8,e*2.5),this.playerState.vx*=.96,this.playerState.y<this.waterLevel-1.5&&(this.activeCheckpoint>0?(this.resetInput(),this.respawnAtCheckpoint(!1)):this.setGameStatus("gameover"),this.wasInWater=!1)}else this.wasInWater=!1;if(this.playerState.y<-8&&(this.activeCheckpoint>0?this.respawnAtCheckpoint():(this.setGameStatus("gameover"),Ht.playGameOver())),this.playerState.grounded&&this.playerState.currentStairTopY!==null&&this.playerState.currentStairTopY>=this.towerHeight){this.setGameStatus("win"),this.playerState.score+=2e3,Ht.playWin();const v=new G(0,this.towerHeight+2,0);this.spawnParticles(v,60,16498468,5,"burst",this.towerHeight),this.spawnParticles(v,60,3718648,5,"burst",this.towerHeight)}}createWaterRipple(e){const n=new bm(.3,.45,24);n.rotateX(-Math.PI/2);const a=new Za({color:8308991,transparent:!0,opacity:.65,side:na,depthWrite:!1}),o=new ht(n,a);o.position.copy(e),o.position.y=this.waterLevel+.02,o.userData={age:0,maxAge:1.8},this.scene.add(o),this.waterRipples.push(o)}respawnAtCheckpoint(e=!0){const n=this.checkpoints.find(a=>a.id===this.activeCheckpoint);e&&Ht.playGameOver(),this.playerState.knockdownFloorY=null,this.ignoredElevator=-1,this.playerState.jiggle=0,this.playerState.jiggleVel=0,n?(this.playerState.x=n.x,this.playerState.y=n.y+.5,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null,this.playerState.smoothCamY=n.y+.5):(this.playerState.x=Ev,this.playerState.y=.5,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null,this.playerState.smoothCamY=.5),this.playerState.idleTimer=2,this.playerState.camLeadAngle=0,this.playerState.facingYaw=Math.atan2(Math.sin(Qt(this.playerState.x)),Math.cos(Qt(this.playerState.x))),this.wasInWater=!1,this.waterEnterCooldown=.8}tryUseDoor(){const e=this.doors.find(a=>Vu(this.playerState.x,a.x)<.65&&Math.abs(this.playerState.y-a.topY)<.75);if(!e)return;const n=this.doors.find(a=>a.pairId===e.pairId&&a.id!==e.id);n&&(this.spawnParticles(e.mesh.position.clone().add(new G(0,1,0)),18,e.color,3.2,"burst",e.topY),this.playerState.x=n.x,this.playerState.y=n.topY+.08,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=n.topY,this.ignoredElevator=-1,this.playerState.smoothCamY=n.topY,this.playerState.idleTimer=2,this.doorCooldown=.55,this.spawnParticles(n.mesh.position.clone().add(new G(0,1,0)),18,n.color,3.2,"burst",n.topY),Ht.playCheckpoint())}findGround(e,n){let a=-1/0,o=-1;const c=this.playerState.knockdownFloorY;for(const u of this.staticStairs)(c===null||Math.abs(u.topY-c)>.15)&&Ni(this.playerState.x,ni,u.x,u.width)&&e>=u.topY-.45&&n<=u.topY+.25&&u.topY>a&&(a=u.topY,o=-1);return this.elevators.forEach((u,d)=>{d!==this.ignoredElevator&&(c===null||Math.abs(u.currentTopY-c)>.15)&&Ni(this.playerState.x,ni,u.x,u.width)&&e>=u.currentTopY-.45&&n<=u.currentTopY+.25&&u.currentTopY>a&&(a=u.currentTopY,o=d)}),this.collapsingStairs.forEach(u=>{this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset)&&(c===null||Math.abs(u.topY-c)>.15)&&e>=u.topY-.45&&n<=u.topY+.08&&u.topY>a&&(a=u.topY,o=-1)}),this.togglableStairs.forEach(u=>{this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset)&&(c===null||Math.abs(u.topY-c)>.15)&&e>=u.topY-.45&&n<=u.topY+.08&&u.topY>a&&(a=u.topY,o=-1)}),a===-1/0?null:{topY:a,rideElevator:o}}applyKnockdown(e=7.5,n=this.playerState.rideElevator,a){const o=this.playerState.currentStairTopY;a!==void 0&&(this.playerState.y=a),this.playerState.enemyHitCooldown=.8,this.playerState.knockdownFloorY=o,this.ignoredElevator=n,this.playerState.vy=e,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null,this.playerState.coyoteTimer=0,this.playerState.jumpBufferTimer=0,this.playerState.jiggleVel-=8,Ht.playBonk();const c=Qt(this.playerState.x),u=new G(Math.sin(c),0,Math.cos(c)),d=new G(u.x*St,this.playerState.y+1,u.z*St);this.spawnParticles(d,14,16707722,3.5,"burst",this.playerState.knockdownFloorY)}findStairTopBelow(e,n){let a=null;const o=In(e);for(const c of this.staticStairs)In(c.x)===o&&c.topY<=n+.01&&(a===null||c.topY>a)&&(a=c.topY);return a}movableStairRadialCenter(e){const n=St,a=ln-.8;return n+(a-n)*e}movableStairPhysicallyOverlaps(e,n,a){if(!Ni(e,ni,n-.5,1))return!1;const o=this.movableStairRadialCenter(a),c=o-si*.5,u=o+si*.5,d=St-ni;return St+ni>c&&d<u}resolveMovableStairLateralHit(){if(this.playerState.enemyHitCooldown>0)return!1;const e=this.playerState.y,n=this.playerState.y+ii,a=(o,c,u)=>{const d=u-on;return e>=u-.05||n<=d+.02?!1:this.movableStairPhysicallyOverlaps(this.playerState.x,o,c)};for(const o of this.collapsingStairs)if(a(o.x,o.retractOffset,o.topY))return this.applyKnockdown(-4.5,-1),!0;for(const o of this.togglableStairs)if(a(o.x,o.retractOffset,o.topY))return this.applyKnockdown(-4.5,-1),!0;return!1}findRiderCeilingBottom(e,n,a,o){if(o<=a+1e-4)return null;const c=a+ii,u=o+ii;let d=null;const m=(p,g,x)=>{if(!x)return;const _=a<g-.02,M=u>=p-.02,v=c<=g+ii;_&&M&&v&&(d===null||p<d)&&(d=p)};for(const p of this.staticStairs)m(p.topY-on,p.topY,Ni(n,ni,p.x,p.width));for(const p of this.collapsingStairs)m(p.topY-on,p.topY,this.movableStairPhysicallyOverlaps(n,p.x,p.retractOffset));for(const p of this.togglableStairs)m(p.topY-on,p.topY,this.movableStairPhysicallyOverlaps(n,p.x,p.retractOffset));for(let p=0;p<this.elevators.length;p++){if(p===e)continue;const g=this.elevators[p];if(!Ni(n,ni,g.x,g.width))continue;const x=g.currentTopY,M=(g.prevTopY??x)-on-c,v=x-on-u;if(M>=-.02&&v<=.02){const A=x-on;(d===null||A<d)&&(d=A)}}return d}checkCeilingCollision(e,n){if(this.playerState.vy<=0)return null;const a=n+ii;let o=null;const c=(u,d)=>{d&&e+ii<=u&&a>=u&&(o===null||u<o)&&(o=u)};for(const u of this.staticStairs)c(u.topY-on,Ni(this.playerState.x,ni,u.x,u.width));for(const u of this.elevators)c(u.currentTopY-on,Ni(this.playerState.x,ni,u.x,u.width));for(const u of this.collapsingStairs)c(u.topY-on,this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset));for(const u of this.togglableStairs)c(u.topY-on,this.movableStairPhysicallyOverlaps(this.playerState.x,u.x,u.retractOffset));return o!==null?o-ii:null}checkSideCollision(e,n){const a=this.playerState.y,o=a+ii,c=(d,m,p,g)=>{const x=g-on;return o<=x||a>=g?!1:Ni(d,ni,m,p)},u=(d,m,p)=>c(n,d,m,p)?!c(e,d,m,p):!1;for(const d of this.staticStairs)if(u(d.x,d.width,d.topY))return e;for(const d of this.elevators)if(u(d.x,d.width,d.currentTopY))return e;for(const d of this.collapsingStairs)if(this.movableStairPhysicallyOverlaps(n,d.x,d.retractOffset)&&u(d.x-.5,1,d.topY))return e;for(const d of this.togglableStairs)if(this.movableStairPhysicallyOverlaps(n,d.x,d.retractOffset)&&u(d.x-.5,1,d.topY))return e;return n}performCullingPass(e,n){this.culler.cullingEnabled=this.config.cullingEnabled,this.culler.updateFrustum(this.camera);const a=ln+si*.5;let o=!1;this.staticStairs.forEach((u,d)=>{this.culler.isItemVisible(u.theta,u.topY,a,si,e,n)?this.stairsInstancedMesh.setMatrixAt(d,u.defaultMatrix):this.stairsInstancedMesh.setMatrixAt(d,u.culledMatrix),o=!0}),o&&(this.stairsInstancedMesh.instanceMatrix.needsUpdate=!0),this.elevators.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.currentTopY,a,si+.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.gems.forEach(u=>{if(u.collected)return;const d=this.culler.isItemVisible(u.theta,u.y,St,.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.springs.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY,St,.6,e,n);u.mesh&&u.mesh.parent&&(u.mesh.parent.visible=d)}),this.hazards.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.y,St,.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.doors.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY+1,ln+.25,1.5,e,n);u.mesh.visible=d}),this.collapsingStairs.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY,St,.5,e,n);u.mesh.visible=d});const c=!this.config.cullingEnabled||n>this.towerHeight-22;this.topRing.visible=c,this.summitCrown.visible=c}startLoop(){const e=n=>{if(this.animFrameId=window.requestAnimationFrame(e),this.config.simulatedFpsThrottle>0){const o=1e3/this.config.simulatedFpsThrottle;if(n-this.lastThrottleTime<o)return;this.lastThrottleTime=n}let a=Math.min((n-this.lastTime)/1e3,pR);for(this.lastTime=n,this.accumulator+=a;this.accumulator>=Ps;)this.stepPhysics(Ps),this.accumulator-=Ps;this.updateVisuals(n*.001),this.sky&&this.sky.material?.uniforms?.time&&(this.sky.material.uniforms.time.value=n*5e-5),this.water&&this.water.material.uniforms?.time&&(this.water.material.uniforms.time.value+=.016666666666666666),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.playerHudTimer+=a,this.playerHudTimer>=.1&&(this.playerHudTimer=0,this.onPlayerStateUpdate?.(this.playerState))};this.animFrameId=window.requestAnimationFrame(e)}updateVisuals(e){if(this.player.update(this.playerState,e),this.cameraRig.update(this.sceneMode,this.playerState,e),this.sunLight.target.position.set(0,this.towerHeight*.5,0),this.sunLight.target.updateMatrixWorld(),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.gems.forEach(a=>{a.mesh&&a.mesh.visible&&(a.mesh.rotation.y=e*2.2,a.mesh.position.y=a.y+Math.sin(e*3.5+a.x)*.12)}),this.doors.forEach((a,o)=>{if(!a.mesh.visible)return;const c=a.mesh.children.find(u=>u.userData.baseY!==void 0);c&&(c.position.y=Number(c.userData.baseY)+Math.sin(e*4+o)*.12)}),this.summitCrown&&this.summitCrown.visible){const a=this.summitCrown.getObjectByName("victoryTrophy");a&&(a.rotation.y=e*1.5)}this.particles.update(Ps);for(let a=this.waterRipples.length-1;a>=0;a--){const o=this.waterRipples[a],c=o.userData;c.age+=Ps;const u=c.age/c.maxAge;if(u>=1){this.scene.remove(o),o.geometry.dispose(),o.material.dispose(),this.waterRipples.splice(a,1);continue}const d=1+u*8;o.scale.setScalar(d),o.material.opacity=.65*(1-u)}const n=Math.atan2(this.camera.position.x,this.camera.position.z);this.performCullingPass(n,this.camera.position.y),this.updateAmbientAudio()}ambientAudioFor(e,n){return Jp(e,n,this.playerState.x,this.playerState.y,this.camera)}updateAmbientAudio(){if(this.sceneMode!=="play"||this.playerState.status!=="running"){this.ambientAudioActive&&(this.ambientAudioActive=!1,Ht.clearAmbient());return}this.ambientAudioActive=!0,Ht.updateAmbient(GR(this.hazards,this.elevators,this.playerState.x,this.playerState.y,this.camera))}setupEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}onKeyDown=e=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),(e.key==="ArrowLeft"||e.key.toLowerCase()==="a")&&(this.input.left=!0),(e.key==="ArrowRight"||e.key.toLowerCase()==="d")&&(this.input.right=!0),(e.key==="ArrowUp"||e.key.toLowerCase()==="w"||e.key===" ")&&!this.input.up&&(this.input.jumpQueued=!0,this.input.up=!0),(e.key==="ArrowDown"||e.key.toLowerCase()==="s")&&!this.input.down&&(this.input.doorQueued=!0,this.input.down=!0),e.key.toLowerCase()==="r"&&this.restartGame()};onKeyUp=e=>{(e.key==="ArrowLeft"||e.key.toLowerCase()==="a")&&(this.input.left=!1),(e.key==="ArrowRight"||e.key.toLowerCase()==="d")&&(this.input.right=!1),(e.key==="ArrowUp"||e.key.toLowerCase()==="w"||e.key===" ")&&(this.input.up=!1),(e.key==="ArrowDown"||e.key.toLowerCase()==="s")&&(this.input.down=!1)};setGameStatus(e){this.playerState.status=e,this.onGameStatusChange&&this.onGameStatusChange(e)}setRenderResolution(e,n){const a=this.config.renderScale,o=e*a,c=n*a,u=o/c;this.renderer.setPixelRatio(1),this.renderer.setSize(o,c,!1),this.composer.setSize(o,c);const d=Math.tan(Xn.degToRad(Zh)/2)*jh;if(u<jh){const m=Xn.radToDeg(2*Math.atan(d/u));this.camera.fov=Math.min(m,uR)}else this.camera.fov=Zh;this.camera.aspect=u,this.camera.updateProjectionMatrix(),this.renderer.domElement.id=`game-canvas-${e}x${n}`}setSceneMode(e){this.sceneMode=e,e==="menu"&&(this.ignoredElevator=-1,this.resetInput(),this.playerState.x=this.level.start.x,this.playerState.y=this.level.start.y,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.status="running",this.playerState.elapsedTime=0,this.playerState.jumpCount=0,this.playerState.score=0,this.playerState.gemsCollected=0,this.playerState.smoothCamY=this.level.start.y,this.playerState.camLeadAngle=0,this.playerState.idleTimer=3,this.gems.forEach(n=>{n.collected=!1,n.mesh&&(n.mesh.visible=!0)}),this.checkpoints.forEach(n=>{n.activated=!1}),this.activeCheckpoint=0,this.collapsingStairs.forEach(n=>{n.state="idle",n.retractOffset=0,n.timer=0}),this.levers.forEach(n=>{n.extended=!1}),this.togglableStairs.forEach(n=>{n.extended=!1}))}restartGame(){this.ignoredElevator=-1,this.resetInput(),this.playerState.x=this.level.start.x,this.playerState.y=this.level.start.y,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.score=0,this.playerState.gemsCollected=0,this.playerState.jumpCount=0,this.playerState.elapsedTime=0,this.playerState.camLeadAngle=0,this.playerState.smoothCamY=this.level.start.y,this.playerState.knockdownFloorY=null,this.playerState.currentStairTopY=null,this.playerState.enemyHitCooldown=0,this.playerState.idleTimer=2,this.playerState.facingYaw=Math.atan2(Math.sin(Qt(this.level.start.x)),Math.cos(Qt(this.level.start.x))),this.activeCheckpoint=0,this.doorCooldown=0,this.collapsingStairs.forEach(e=>{e.state="idle",e.retractOffset=0,e.timer=0}),this.levers.forEach(e=>{e.extended=!1}),this.togglableStairs.forEach(e=>{e.extended=!1}),this.gems.forEach(e=>{e.collected=!1,e.mesh&&(e.mesh.visible=!0)}),this.collapsingStairs.forEach(e=>{e.state="idle",e.retractOffset=0,e.timer=0}),this.checkpoints.forEach(e=>{if(e.activated=!1,e.mesh){const n=e.mesh.children[1];n&&n.material instanceof cn&&(n.material.color.set("#ef4444"),n.material.emissive.set("#991b1b"))}}),this.setGameStatus("running")}resetInput(){this.input.left=!1,this.input.right=!1,this.input.up=!1,this.input.down=!1,this.input.jumpQueued=!1,this.input.doorQueued=!1}dispose(){Ht.clearAmbient(),this.player.dispose(),this.particles.dispose(),window.cancelAnimationFrame(this.animFrameId),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.scene.traverse(e=>{e instanceof ht&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}const F1=1,z1="lvl_0041",H1="Nowy Poziom 41",G1=48,k1=24,V1={x:.5,y:.5},Y1=[{id:"st-start",x:0,topY:0,count:3},{id:"st_6_0",x:6,topY:0,count:5},{id:"st_1_2.5",x:1,topY:2.5,count:2},{id:"st_14_12.5",x:14,topY:12.5,count:2},{id:"st_12_12.5",x:12,topY:12.5,count:2},{id:"st_1_7.5",x:1,topY:7.5,count:2},{id:"st_door_1_14",x:1,topY:13.5,count:1},{id:"st_door_18_19",x:18,topY:18.5,count:1},{id:"st_19_18.5",x:19,topY:18.5,count:2},{id:"st_9_28",x:9,topY:28,count:2},{id:"st_7_28.5",x:7,topY:28.5,count:2},{id:"st_5_29",x:5,topY:29,count:2},{id:"st_3_29.5",x:3,topY:29.5,count:2},{id:"st_23_31",x:23,topY:31,count:2},{id:"st_19_31",x:19,topY:31,count:2},{id:"st_8_36",x:8,topY:36,count:2},{id:"st_15_36",x:15,topY:36,count:2},{id:"st_19_45",x:19,topY:45,count:1},{id:"st_21_46.5",x:21,topY:46.5,count:2},{id:"st_17_44",x:17,topY:44,count:2},{id:"st_11_41",x:11,topY:41,count:2},{id:"st_9_40",x:9,topY:40,count:1},{id:"st_9_48",x:9,topY:48,count:2},{id:"st_7_48",x:7,topY:48,count:2},{id:"st_17_36",x:17,topY:36,count:1},{id:"st_lev_20_0",x:20,topY:0,count:1},{id:"st_19_0",x:19,topY:0,count:1},{id:"st_7_4.5",x:7,topY:4.5,count:2},{id:"st_10_5",x:10,topY:5,count:2},{id:"st_13_5",x:13,topY:5,count:2},{id:"st_6_36",x:6,topY:36,count:2},{id:"st_5_39",x:5,topY:39,count:2},{id:"st_7_39",x:7,topY:39,count:1},{id:"st_3_13.5",x:3,topY:13.5,count:1},{id:"st_lev_14_36",x:14,topY:36,count:1},{id:"st_10_16",x:10,topY:16,count:1},{id:"st_12_0",x:12,topY:0,count:1},{id:"st_14_0",x:14,topY:0,count:1},{id:"st_13_0",x:13,topY:0,count:1},{id:"st_11_0",x:11,topY:0,count:1},{id:"st_lev_21_1",x:21,topY:1,count:1},{id:"st_4_3.5",x:4,topY:3.5,count:2},{id:"st_5_36",x:5,topY:36,count:1},{id:"st_3_37",x:3,topY:37,count:1},{id:"st_0_36.5",x:0,topY:36.5,count:1},{id:"st_4_36",x:4,topY:36,count:1},{id:"st_23_1",x:23,topY:1,count:1},{id:"st_9_11",x:9,topY:11,count:1},{id:"st_9_16",x:9,topY:16,count:1},{id:"st_10_11.5",x:10,topY:11.5,count:1},{id:"st_11_12",x:11,topY:12,count:1},{id:"st_8_39.5",x:8,topY:39.5,count:1},{id:"st_16_47",x:16,topY:47,count:1},{id:"st_15_47",x:15,topY:47,count:1},{id:"st_14_47",x:14,topY:47,count:1},{id:"st_12_47.5",x:12,topY:47.5,count:1},{id:"st_13_47.5",x:13,topY:47.5,count:1},{id:"st_17_47",x:17,topY:47,count:1},{id:"st_8_16",x:8,topY:16,count:1},{id:"st_6_9",x:6,topY:9,count:1},{id:"st_3_8",x:3,topY:8,count:1},{id:"st_6_1.5",x:6,topY:1.5,count:1},{id:"st_6_15",x:6,topY:15,count:1},{id:"st_7_15.5",x:7,topY:15.5,count:1},{id:"st_5_9",x:5,topY:9,count:1},{id:"st_4_9",x:4,topY:9,count:1},{id:"st_5_11.5",x:5,topY:11.5,count:1},{id:"st_8_10.5",x:8,topY:10.5,count:1},{id:"st_7_10.5",x:7,topY:10.5,count:1},{id:"st_1_35",x:1,topY:35,count:1},{id:"st_2_33.5",x:2,topY:33.5,count:1},{id:"st_3_33.5",x:3,topY:33.5,count:1},{id:"st_4_33.5",x:4,topY:33.5,count:1},{id:"st_5_33.5",x:5,topY:33.5,count:1},{id:"st_7_33.5",x:7,topY:33.5,count:1},{id:"st_6_33.5",x:6,topY:33.5,count:1},{id:"st_8_33.5",x:8,topY:33.5,count:1},{id:"st_2_29.5",x:2,topY:29.5,count:1},{id:"st_1_29.5",x:1,topY:29.5,count:1},{id:"st_14_42",x:14,topY:42,count:1},{id:"st_16_43.5",x:16,topY:43.5,count:1},{id:"st_15_42.5",x:15,topY:42.5,count:1},{id:"st_23_38.5",x:23,topY:38.5,count:1}],X1=[{id:"el_16_5",x:16,width:1.2,yMin:5,yMax:12.5,speed:.75,phase:0},{id:"el_11_16",x:11,width:1.2,yMin:16,yMax:28,speed:.75,phase:0},{id:"el_18_31",x:18,width:1.2,yMin:31,yMax:36,speed:.75,phase:0}],W1=[{id:"g_10_0.5",x:10.5,y:.5},{id:"g_1_8",x:1.5,y:8},{id:"g_20_19",x:20.5,y:19},{id:"g_9_36.5",x:9.5,y:36.5},{id:"g_15_36.5",x:15.5,y:36.5},{id:"g_22_47",x:22.5,y:47},{id:"g_8_34",x:8.5,y:34}],q1=[],j1=[{id:"en_bounce_14_13",xCenter:14,y:13.05,behavior:"bounce",amplitude:3.5,moveSteps:0,speed:1.2},{id:"en_patrol_9_0",xCenter:9,y:.55,behavior:"patrol",amplitude:1.5,speed:1.4},{id:"en_bounce_19_19",xCenter:19,y:19.05,behavior:"bounce",amplitude:4,moveSteps:0,speed:1},{id:"en_bounce_7_39",xCenter:7,y:39.55,behavior:"bounce",amplitude:1,moveSteps:0,speed:1}],Z1=[{id:1,name:"Checkpoint 6",floor:5,x:15,y:5},{id:2,name:"Checkpoint 5",floor:14,x:2,y:13.5},{id:3,name:"Checkpoint 4",floor:40,x:1,y:39.5},{id:4,name:"Checkpoint 6",floor:47,x:23,y:46.5}],K1=[{id:"cs_22_1.5",x:22,topY:1.5},{id:"cs_10_40.5",x:10,topY:40.5},{id:"cs_13_41.5",x:13,topY:41.5},{id:"cs_20_45",x:20,topY:45},{id:"cs_22_31",x:22,topY:31},{id:"cs_21_31",x:21,topY:31},{id:"cs_11_47.5",x:11,topY:47.5}],Q1=[{id:"lev_14_36",x:14,topY:36},{id:"lev_21_1",x:21,topY:1}],J1=[{id:"ts_11_36",x:11,topY:36,leverId:"lev_14_36"},{id:"ts_17_0",x:17,topY:0,leverId:"lev_21_1"}],$1=[{id:"door_pair_1_14_a",pairId:"pair_1_14",x:1,topY:13.5,color:"#00E5FF"},{id:"door_pair_1_14_b",pairId:"pair_1_14",x:18,topY:18.5,color:"#00E5FF"}],e5={schemaVersion:F1,id:z1,name:H1,towerHeight:G1,circumferenceSteps:k1,start:V1,stairs:Y1,elevators:X1,gems:W1,springs:q1,enemies:j1,checkpoints:Z1,collapsingStairs:K1,levers:Q1,togglableStairs:J1,doors:$1},t5=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:Z1,circumferenceSteps:k1,collapsingStairs:K1,default:e5,doors:$1,elevators:X1,enemies:j1,gems:W1,id:z1,levers:Q1,name:H1,schemaVersion:F1,springs:q1,stairs:Y1,start:V1,togglableStairs:J1,towerHeight:G1},Symbol.toStringTag,{value:"Module"})),ey=1,ty="lvl_0041",ny="Nowy Poziom 41",iy=48,ay=24,sy={x:1,y:.5},ry=[{id:"st_0_48",x:0,topY:48,count:2},{id:"st_3_3.5",x:3,topY:3.5,count:2},{id:"st_5_4.5",x:5,topY:4.5,count:2},{id:"st_7_5.5",x:7,topY:5.5,count:2},{id:"st_9_6.5",x:9,topY:6.5,count:2},{id:"st_11_7.5",x:11,topY:7.5,count:2},{id:"st_13_8.5",x:13,topY:8.5,count:2},{id:"st_15_9.5",x:15,topY:9.5,count:2},{id:"st_17_10.5",x:17,topY:10.5,count:2},{id:"st_19_11.5",x:19,topY:11.5,count:2},{id:"st_16_13",x:16,topY:13,count:2},{id:"st_14_14",x:14,topY:14,count:2},{id:"st_12_15",x:12,topY:15,count:2},{id:"st_10_16",x:10,topY:16,count:2},{id:"st_11_18.5",x:11,topY:18.5,count:2},{id:"st_8_17",x:8,topY:17,count:2},{id:"st_13_19.5",x:13,topY:19.5,count:2},{id:"st_15_20.5",x:15,topY:20.5,count:2},{id:"st_17_21.5",x:17,topY:21.5,count:2},{id:"st_19_22.5",x:19,topY:22.5,count:2},{id:"st_16_24",x:16,topY:24,count:2},{id:"st_14_25",x:14,topY:25,count:2},{id:"st_12_26",x:12,topY:26,count:2},{id:"st_10_27",x:10,topY:27,count:2},{id:"st_8_28",x:8,topY:28,count:2},{id:"st_11_29.5",x:11,topY:29.5,count:2},{id:"st_13_30.5",x:13,topY:30.5,count:2},{id:"st_15_31.5",x:15,topY:31.5,count:2},{id:"st_17_32.5",x:17,topY:32.5,count:2},{id:"st_19_33.5",x:19,topY:33.5,count:2},{id:"st_16_35",x:16,topY:35,count:2},{id:"st_14_36",x:14,topY:36,count:2},{id:"st_12_37",x:12,topY:37,count:2},{id:"st_10_38",x:10,topY:38,count:2},{id:"st_8_39",x:8,topY:39,count:2},{id:"st_6_40",x:6,topY:40,count:2},{id:"st_9_41.5",x:9,topY:41.5,count:2},{id:"st_11_42.5",x:11,topY:42.5,count:2},{id:"st_13_43.5",x:13,topY:43.5,count:2},{id:"st_15_44.5",x:15,topY:44.5,count:2},{id:"st_17_45.5",x:17,topY:45.5,count:2},{id:"st_0_0",x:0,topY:0,count:18},{id:"st_lev_18_0",x:18,topY:0,count:1},{id:"st_door_21_2",x:21,topY:2,count:1},{id:"st_door_19_46",x:19,topY:45.5,count:1}],oy=[{id:"el_2_3.5",x:2,width:1.2,yMin:3.5,yMax:47.5,speed:.75,phase:0}],ly=[{id:"g_15_45",x:15.5,y:45},{id:"g_13_44",x:13.5,y:44},{id:"g_11_43",x:11.5,y:43},{id:"g_9_42",x:9.5,y:42},{id:"g_11_38.5",x:11.5,y:38.5},{id:"g_13_37.5",x:13.5,y:37.5},{id:"g_15_36.5",x:15.5,y:36.5},{id:"g_17_35.5",x:17.5,y:35.5},{id:"g_17_33",x:17.5,y:33},{id:"g_15_32",x:15.5,y:32},{id:"g_13_31",x:13.5,y:31},{id:"g_11_30",x:11.5,y:30},{id:"g_11_27.5",x:11.5,y:27.5},{id:"g_13_26.5",x:13.5,y:26.5},{id:"g_15_25.5",x:15.5,y:25.5},{id:"g_17_24.5",x:17.5,y:24.5},{id:"g_17_22",x:17.5,y:22},{id:"g_15_21",x:15.5,y:21},{id:"g_13_20",x:13.5,y:20},{id:"g_11_19",x:11.5,y:19},{id:"g_11_16.5",x:11.5,y:16.5},{id:"g_13_15.5",x:13.5,y:15.5},{id:"g_15_14.5",x:15.5,y:14.5},{id:"g_17_13.5",x:17.5,y:13.5},{id:"g_17_11",x:17.5,y:11},{id:"g_15_10",x:15.5,y:10},{id:"g_13_9",x:13.5,y:9},{id:"g_11_8",x:11.5,y:8},{id:"g_9_7",x:9.5,y:7},{id:"g_7_6",x:7.5,y:6},{id:"g_5_5",x:5.5,y:5},{id:"g_3_4",x:3.5,y:4},{id:"g_1_4",x:1.5,y:4},{id:"g_3_0.5",x:3.5,y:.5},{id:"g_5_0.5",x:5.5,y:.5},{id:"g_7_0.5",x:7.5,y:.5},{id:"g_9_0.5",x:9.5,y:.5},{id:"g_11_0.5",x:11.5,y:.5},{id:"g_13_0.5",x:13.5,y:.5},{id:"g_15_0.5",x:15.5,y:.5},{id:"g_17_0.5",x:17.5,y:.5}],cy=[],uy=[],fy=[{id:1,name:"Checkpoint 4",floor:4,x:1,y:3.5},{id:2,name:"Checkpoint 3",floor:17,x:7,y:17},{id:3,name:"Checkpoint 2",floor:28,x:7,y:28},{id:4,name:"Checkpoint 1",floor:46,x:20,y:45.5}],dy=[],hy=[{id:"lev_18_0",x:18,topY:0}],py=[{id:"ts_20_1",x:20,topY:1,leverId:"lev_18_0"}],my=[{id:"door_pair_21_2_a",pairId:"pair_21_2",x:21,topY:2,color:"#00E5FF"},{id:"door_pair_21_2_b",pairId:"pair_21_2",x:19,topY:45.5,color:"#00E5FF"}],n5={schemaVersion:ey,id:ty,name:ny,towerHeight:iy,circumferenceSteps:ay,start:sy,stairs:ry,elevators:oy,gems:ly,springs:cy,enemies:uy,checkpoints:fy,collapsingStairs:dy,levers:hy,togglableStairs:py,doors:my},i5=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:fy,circumferenceSteps:ay,collapsingStairs:dy,default:n5,doors:my,elevators:oy,enemies:uy,gems:ly,id:ty,levers:hy,name:ny,schemaVersion:ey,springs:cy,stairs:ry,start:sy,togglableStairs:py,towerHeight:iy},Symbol.toStringTag,{value:"Module"})),gy=1,_y="lvl_0017",xy="Strażnik Podniebnego Mostu",vy=48,yy=24,Sy={x:1,y:.5},My=[{id:"st-start",x:0,topY:0,count:3},{id:"u1",x:4,topY:1.5,count:2},{id:"u2",x:7,topY:3,count:2},{id:"u3",x:10,topY:4.5,count:2},{id:"cp1plat",x:13,topY:6,count:2},{id:"u4",x:16,topY:7.5,count:2},{id:"u5",x:19,topY:9,count:2},{id:"u6",x:22,topY:10.5,count:2},{id:"u7",x:3,topY:13.5,count:2},{id:"balcup",x:6,topY:15,count:5},{id:"u8",x:12,topY:16.5,count:2},{id:"u9",x:15,topY:18,count:2},{id:"cp2plat",x:18,topY:19.5,count:2},{id:"u10",x:21,topY:21,count:2},{id:"u11",x:0,topY:22.5,count:2},{id:"u12",x:5,topY:25.5,count:2},{id:"levplat",x:8,topY:27,count:2},{id:"u13",x:13,topY:30,count:2},{id:"cp3plat",x:16,topY:31.5,count:2},{id:"u14",x:19,topY:33,count:2},{id:"u15",x:22,topY:34.5,count:2},{id:"u16",x:1,topY:36,count:2},{id:"u17",x:4,topY:37.5,count:2},{id:"bridge",x:7,topY:39,count:5},{id:"d1",x:13,topY:37.5,count:2},{id:"d2",x:16,topY:36,count:2},{id:"cp4plat",x:21,topY:33,count:2},{id:"d3",x:0,topY:31.5,count:2},{id:"balcdn",x:3,topY:29.5,count:5},{id:"d4",x:9,topY:27.5,count:2},{id:"d5",x:12,topY:26,count:2},{id:"d6",x:17,topY:23,count:2},{id:"d7",x:20,topY:21.5,count:2},{id:"d8",x:23,topY:20,count:2},{id:"portalplat",x:2,topY:18.5,count:2},{id:"summit",x:8,topY:48,count:4},{id:"st_18_35.5",x:18,topY:35.5,count:1},{id:"st_19_35.5",x:19,topY:35.5,count:1},{id:"st_lev_9_28",x:9,topY:28,count:1}],by=[],Ey=[{id:"g1",x:4.5,y:2.3},{id:"g2",x:7.5,y:3.8},{id:"g3",x:10.5,y:5.3},{id:"g4",x:16.5,y:8.3},{id:"g5",x:19.5,y:9.8},{id:"g6",x:3.5,y:14.3},{id:"g7",x:12.5,y:17.3},{id:"g8",x:15.5,y:18.8},{id:"g9",x:21.5,y:21.8},{id:"g10",x:5.5,y:26.3},{id:"g11",x:8.5,y:27.8},{id:"g12",x:13.5,y:30.8},{id:"g13",x:19.5,y:33.8},{id:"g14",x:1.5,y:36.8},{id:"g15",x:13.5,y:38.3},{id:"g16",x:16.5,y:36.8},{id:"g17",x:.5,y:32.3},{id:"g19",x:12.5,y:26.8},{id:"g20",x:17.5,y:23.8},{id:"g21",x:23.5,y:20.8},{id:"g22",x:.5,y:.8}],Ty=[],wy=[{id:"en1",xCenter:8,y:15.55,behavior:"patrol",amplitude:.5,speed:1.5},{id:"en2",xCenter:9,y:39.55,behavior:"patrol",amplitude:.5,speed:1.5},{id:"en3",xCenter:5,y:30.05,behavior:"patrol",amplitude:.5,speed:1.7}],Ay=[{id:1,name:"Podest Wschodni",floor:6,x:14,y:6},{id:2,name:"Półka Środkowa",floor:19,x:19,y:19.5},{id:3,name:"Próg Mostu",floor:31,x:17,y:31.5},{id:4,name:"Zachodni Zjazd",floor:33,x:22,y:33}],Cy=[{id:"cs_3_24",x:3,topY:24},{id:"cs_15_24.5",x:15,topY:24.5},{id:"cs_1_12",x:1,topY:12}],Ry=[{id:"lev_9_28",x:9,topY:28}],Ly=[{id:"ts_11_29",x:11,topY:29,leverId:"lev_9_28"}],Dy=[{id:"dportal",pairId:"fin",x:3,topY:18.5},{id:"dsum",pairId:"fin",x:9,topY:48}],a5={schemaVersion:gy,id:_y,name:xy,towerHeight:vy,circumferenceSteps:yy,start:Sy,stairs:My,elevators:by,gems:Ey,springs:Ty,enemies:wy,checkpoints:Ay,collapsingStairs:Cy,levers:Ry,togglableStairs:Ly,doors:Dy},s5=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:Ay,circumferenceSteps:yy,collapsingStairs:Cy,default:a5,doors:Dy,elevators:by,enemies:wy,gems:Ey,id:_y,levers:Ry,name:xy,schemaVersion:gy,springs:Ty,stairs:My,start:Sy,togglableStairs:Ly,towerHeight:vy},Symbol.toStringTag,{value:"Module"})),Ny=1,Uy="lvl_0041",Oy="Nowy Poziom 41",Py=48,Iy=24,By={x:1,y:.5},Fy=[{id:"st_0_48",x:0,topY:48,count:2},{id:"st_3_3.5",x:3,topY:3.5,count:2},{id:"st_5_4.5",x:5,topY:4.5,count:2},{id:"st_7_5.5",x:7,topY:5.5,count:2},{id:"st_9_6.5",x:9,topY:6.5,count:2},{id:"st_11_7.5",x:11,topY:7.5,count:2},{id:"st_13_8.5",x:13,topY:8.5,count:2},{id:"st_15_9.5",x:15,topY:9.5,count:2},{id:"st_17_10.5",x:17,topY:10.5,count:2},{id:"st_19_11.5",x:19,topY:11.5,count:2},{id:"st_16_13",x:16,topY:13,count:2},{id:"st_14_14",x:14,topY:14,count:2},{id:"st_12_15",x:12,topY:15,count:2},{id:"st_10_16",x:10,topY:16,count:2},{id:"st_11_18.5",x:11,topY:18.5,count:2},{id:"st_8_17",x:8,topY:17,count:2},{id:"st_13_19.5",x:13,topY:19.5,count:2},{id:"st_15_20.5",x:15,topY:20.5,count:2},{id:"st_17_21.5",x:17,topY:21.5,count:2},{id:"st_9_41.5",x:9,topY:41.5,count:2},{id:"st_11_42.5",x:11,topY:42.5,count:2},{id:"st_13_43.5",x:13,topY:43.5,count:2},{id:"st_15_44.5",x:15,topY:44.5,count:2},{id:"st_17_45.5",x:17,topY:45.5,count:2},{id:"st_0_0",x:0,topY:0,count:18},{id:"st_lev_18_0",x:18,topY:0,count:1},{id:"st_door_21_2",x:21,topY:2,count:1},{id:"st_door_19_46",x:19,topY:45.5,count:1},{id:"st_7_40.5",x:7,topY:40.5,count:2},{id:"st_5_39.5",x:5,topY:39.5,count:2},{id:"st_3_38.5",x:3,topY:38.5,count:2},{id:"st_0_37.5",x:0,topY:37.5,count:2},{id:"st_22_36.5",x:22,topY:36.5,count:2},{id:"st_20_35.5",x:20,topY:35.5,count:2},{id:"st_18_34.5",x:18,topY:34.5,count:2},{id:"st_16_33.5",x:16,topY:33.5,count:2},{id:"st_14_32.5",x:14,topY:32.5,count:2},{id:"st_12_31.5",x:12,topY:31.5,count:2},{id:"st_10_30.5",x:10,topY:30.5,count:2},{id:"st_8_29.5",x:8,topY:29.5,count:2},{id:"st_6_28.5",x:6,topY:28.5,count:2},{id:"st_4_27.5",x:4,topY:27.5,count:2},{id:"st_0_26.5",x:0,topY:26.5,count:2},{id:"st_22_25",x:22,topY:25,count:2},{id:"st_20_24",x:20,topY:24,count:2},{id:"st_19_22.5",x:19,topY:22.5,count:1}],zy=[{id:"el_2_3.5",x:2,width:1.2,yMin:3.5,yMax:47.5,speed:.75,phase:0}],Hy=[{id:"g_15_45",x:15.5,y:45},{id:"g_13_44",x:13.5,y:44},{id:"g_11_43",x:11.5,y:43},{id:"g_9_42",x:9.5,y:42},{id:"g_17_22",x:17.5,y:22},{id:"g_15_21",x:15.5,y:21},{id:"g_13_20",x:13.5,y:20},{id:"g_11_19",x:11.5,y:19},{id:"g_11_16.5",x:11.5,y:16.5},{id:"g_13_15.5",x:13.5,y:15.5},{id:"g_15_14.5",x:15.5,y:14.5},{id:"g_17_13.5",x:17.5,y:13.5},{id:"g_17_11",x:17.5,y:11},{id:"g_15_10",x:15.5,y:10},{id:"g_13_9",x:13.5,y:9},{id:"g_11_8",x:11.5,y:8},{id:"g_9_7",x:9.5,y:7},{id:"g_7_6",x:7.5,y:6},{id:"g_5_5",x:5.5,y:5},{id:"g_3_4",x:3.5,y:4},{id:"g_1_4",x:1.5,y:4},{id:"g_3_0.5",x:3.5,y:.5},{id:"g_5_0.5",x:5.5,y:.5},{id:"g_7_0.5",x:7.5,y:.5},{id:"g_9_0.5",x:9.5,y:.5},{id:"g_11_0.5",x:11.5,y:.5},{id:"g_13_0.5",x:13.5,y:.5},{id:"g_15_0.5",x:15.5,y:.5},{id:"g_17_0.5",x:17.5,y:.5},{id:"g_7_41",x:7.5,y:41},{id:"g_5_40",x:5.5,y:40},{id:"g_3_39",x:3.5,y:39},{id:"g_4_28",x:4.5,y:28},{id:"g_20_24.5",x:20.5,y:24.5},{id:"g_22_25.5",x:22.5,y:25.5},{id:"g_0_27",x:.5,y:27},{id:"g_8_17.5",x:8.5,y:17.5},{id:"g_20_36",x:20.5,y:36},{id:"g_18_35",x:18.5,y:35},{id:"g_16_34",x:16.5,y:34},{id:"g_14_33",x:14.5,y:33},{id:"g_12_32",x:12.5,y:32},{id:"g_10_31",x:10.5,y:31},{id:"g_8_30",x:8.5,y:30},{id:"g_6_29",x:6.5,y:29},{id:"g_20_12",x:20.5,y:12},{id:"g_17_46",x:17.5,y:46},{id:"g_0_38",x:.5,y:38},{id:"g_1_38",x:1.5,y:38},{id:"g_23_38",x:23.5,y:38}],Gy=[],ky=[],Vy=[{id:1,name:"Checkpoint 4",floor:4,x:1,y:3.5},{id:2,name:"Checkpoint 3",floor:17,x:7,y:17},{id:3,name:"Checkpoint 4",floor:38,x:23,y:37.5},{id:4,name:"Checkpoint 1",floor:46,x:20,y:45.5}],Yy=[],Xy=[{id:"lev_18_0",x:18,topY:0}],Wy=[{id:"ts_20_1",x:20,topY:1,leverId:"lev_18_0"}],qy=[{id:"door_pair_21_2_a",pairId:"pair_21_2",x:21,topY:2,color:"#00E5FF"},{id:"door_pair_21_2_b",pairId:"pair_21_2",x:19,topY:45.5,color:"#00E5FF"}],r5={schemaVersion:Ny,id:Uy,name:Oy,towerHeight:Py,circumferenceSteps:Iy,start:By,stairs:Fy,elevators:zy,gems:Hy,springs:Gy,enemies:ky,checkpoints:Vy,collapsingStairs:Yy,levers:Xy,togglableStairs:Wy,doors:qy},o5=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:Vy,circumferenceSteps:Iy,collapsingStairs:Yy,default:r5,doors:qy,elevators:zy,enemies:ky,gems:Hy,id:Uy,levers:Xy,name:Oy,schemaVersion:Ny,springs:Gy,stairs:Fy,start:By,togglableStairs:Wy,towerHeight:Py},Symbol.toStringTag,{value:"Module"})),jy=1,Zy="lvl_0028",Ky="Łamacz Rytmu",Qy=48,Jy=24,$y={x:1,y:.5},eS=[{id:"st-start",x:0,topY:0,count:3},{id:"spplat1",x:4,topY:0,count:2},{id:"ledge1",x:6,topY:5.5,count:3},{id:"u1",x:10,topY:7,count:2},{id:"cs1",x:13,topY:8.5},{id:"cp1plat",x:15,topY:10,count:2},{id:"u2",x:18,topY:11.5,count:2},{id:"spplat2",x:21,topY:13,count:2},{id:"ledge2",x:23,topY:18.5,count:3},{id:"balc1",x:3,topY:20,count:5},{id:"u3",x:9,topY:21.5,count:2},{id:"levplat",x:12,topY:23,count:2},{id:"ts1",x:15,topY:24.5},{id:"cp2plat",x:17,topY:26,count:2},{id:"cs2",x:20,topY:27.5},{id:"spplat3",x:22,topY:29,count:2},{id:"ledge3",x:0,topY:34.5,count:3},{id:"u4",x:4,topY:36,count:2},{id:"balc2",x:7,topY:37.5,count:5},{id:"u5",x:13,topY:39,count:2},{id:"cs3",x:16,topY:40.5},{id:"cp3plat",x:18,topY:42,count:2},{id:"spplat4",x:21,topY:43.5,count:2},{id:"ledge4",x:23,topY:46.5,count:3},{id:"summit",x:3,topY:48,count:4}],tS=[],nS=[{id:"g1",x:6.5,y:6.3},{id:"g2",x:7.5,y:6.3},{id:"g3",x:10.5,y:7.8},{id:"g4",x:15.5,y:10.8},{id:"g5",x:18.5,y:12.3},{id:"g6",x:23.5,y:19.3},{id:"g7",x:.5,y:19.3},{id:"g8",x:9.5,y:22.3},{id:"g9",x:12.5,y:23.8},{id:"g10",x:17.5,y:26.8},{id:"g11",x:.5,y:35.3},{id:"g12",x:1.5,y:35.3},{id:"g13",x:4.5,y:36.8},{id:"g14",x:13.5,y:39.8},{id:"g15",x:18.5,y:42.8},{id:"g16",x:23.5,y:47.3},{id:"g17",x:.5,y:47.3},{id:"g18",x:.5,y:.8}],iS=[{id:"sp1",x:4,topY:0,bounceForce:18.5},{id:"sp2",x:21,topY:13,bounceForce:18.5},{id:"sp3",x:22,topY:29,bounceForce:18.5},{id:"sp4",x:21,topY:43.5,bounceForce:18.5}],aS=[{id:"en1",xCenter:5,y:20.55,behavior:"patrol",amplitude:.5,speed:1.6},{id:"en2",xCenter:9,y:38.05,behavior:"patrol",amplitude:.5,speed:1.8}],sS=[{id:1,name:"Podest Wschodni",floor:10,x:16,y:10},{id:2,name:"Rygiel Środkowy",floor:26,x:18,y:26},{id:3,name:"Wysoka Półka",floor:42,x:19,y:42},{id:4,name:"Próg Szczytu",floor:46,x:22,y:46.5}],rS=[{id:"cs1",x:13,topY:8.5},{id:"cs2",x:20,topY:27.5},{id:"cs3",x:16,topY:40.5}],oS=[{id:"lever1",x:13,topY:24}],lS=[{id:"ts1",x:15,topY:24.5,leverId:"lever1"}],cS=[],l5={schemaVersion:jy,id:Zy,name:Ky,towerHeight:Qy,circumferenceSteps:Jy,start:$y,stairs:eS,elevators:tS,gems:nS,springs:iS,enemies:aS,checkpoints:sS,collapsingStairs:rS,levers:oS,togglableStairs:lS,doors:cS},c5=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:sS,circumferenceSteps:Jy,collapsingStairs:rS,default:l5,doors:cS,elevators:tS,enemies:aS,gems:nS,id:Zy,levers:oS,name:Ky,schemaVersion:jy,springs:iS,stairs:eS,start:$y,togglableStairs:lS,towerHeight:Qy},Symbol.toStringTag,{value:"Module"})),uS=1,fS="lvl_0036",dS="Znikający Krąg",hS=48,pS=24,mS={x:1,y:.5},gS=[{id:"st-start",x:0,topY:0,count:3},{id:"island1",x:6,topY:7,count:4},{id:"cs1",x:11,topY:8.5},{id:"cs2",x:13,topY:10},{id:"cp1plat",x:15,topY:11.5,count:3},{id:"island2",x:21,topY:18,count:3},{id:"cs3",x:1,topY:19.5},{id:"island3",x:3,topY:21,count:3},{id:"balc1",x:7,topY:22.5,count:5},{id:"levplat1",x:13,topY:24,count:2},{id:"ts1",x:16,topY:25.5},{id:"island4",x:18,topY:27,count:3},{id:"cs4",x:22,topY:28.5},{id:"cs5",x:0,topY:30},{id:"island5",x:2,topY:31.5,count:3},{id:"balc2",x:8,topY:38,count:5},{id:"levplat2",x:14,topY:39.5,count:2},{id:"ts2",x:17,topY:41},{id:"island6",x:19,topY:42.5,count:3},{id:"cs6",x:23,topY:44},{id:"cs7",x:1,topY:45.5},{id:"summit",x:5,topY:48,count:4}],_S=[{id:"el1",x:4,width:1.2,yMin:.5,yMax:6.5,speed:.84,phase:0},{id:"el2",x:19,width:1.2,yMin:12,yMax:17.5,speed:.84,phase:1.5},{id:"el3",x:6,width:1.2,yMin:32,yMax:37.5,speed:.84,phase:3},{id:"el4",x:3,width:1.2,yMin:46,yMax:47.5,speed:.84,phase:4.5}],xS=[{id:"g1",x:6.5,y:7.8},{id:"g2",x:7.5,y:7.8},{id:"g3",x:8.5,y:7.8},{id:"g4",x:9.5,y:7.8},{id:"g5",x:15.5,y:12.3},{id:"g6",x:17.5,y:12.3},{id:"g7",x:21.5,y:18.8},{id:"g8",x:22.5,y:18.8},{id:"g9",x:23.5,y:18.8},{id:"g10",x:3.5,y:21.8},{id:"g11",x:5.5,y:21.8},{id:"g12",x:13.5,y:24.8},{id:"g13",x:18.5,y:27.8},{id:"g14",x:19.5,y:27.8},{id:"g15",x:20.5,y:27.8},{id:"g16",x:2.5,y:32.3},{id:"g17",x:4.5,y:32.3},{id:"g18",x:14.5,y:40.3},{id:"g19",x:19.5,y:43.3},{id:"g20",x:21.5,y:43.3},{id:"g21",x:.5,y:.8},{id:"g22",x:1.5,y:.8}],vS=[],yS=[{id:"en1",xCenter:9,y:23.05,behavior:"patrol",amplitude:.5,speed:1.7},{id:"en2",xCenter:10,y:38.55,behavior:"patrol",amplitude:.5,speed:1.9}],SS=[{id:1,name:"Wyspa Rygla",floor:11,x:16,y:11.5},{id:2,name:"Wyspa Trzecia",floor:21,x:4,y:21},{id:3,name:"Wyspa Piąta",floor:31,x:3,y:31.5},{id:4,name:"Wyspa Siódma",floor:42,x:20,y:42.5}],MS=[{id:"cs1",x:11,topY:8.5},{id:"cs2",x:13,topY:10},{id:"cs3",x:1,topY:19.5},{id:"cs4",x:22,topY:28.5},{id:"cs5",x:0,topY:30},{id:"cs6",x:23,topY:44},{id:"cs7",x:1,topY:45.5}],bS=[{id:"lever1",x:14,topY:25},{id:"lever2",x:15,topY:40.5}],ES=[{id:"ts1",x:16,topY:25.5,leverId:"lever1"},{id:"ts2",x:17,topY:41,leverId:"lever2"}],TS=[],u5={schemaVersion:uS,id:fS,name:dS,towerHeight:hS,circumferenceSteps:pS,start:mS,stairs:gS,elevators:_S,gems:xS,springs:vS,enemies:yS,checkpoints:SS,collapsingStairs:MS,levers:bS,togglableStairs:ES,doors:TS},f5=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:SS,circumferenceSteps:pS,collapsingStairs:MS,default:u5,doors:TS,elevators:_S,enemies:yS,gems:xS,id:fS,levers:bS,name:dS,schemaVersion:uS,springs:vS,stairs:gS,start:mS,togglableStairs:ES,towerHeight:hS},Symbol.toStringTag,{value:"Module"})),wS=1,AS="lvl_0025",CS="Portal Znawcy",RS=48,LS=24,DS={x:1,y:.5},NS=[{id:"st-start",x:0,topY:0,count:3},{id:"u1",x:4,topY:1.5,count:2},{id:"spplat1",x:7,topY:3,count:2},{id:"ledge1",x:9,topY:8.5,count:3},{id:"cp1plat",x:13,topY:10,count:2},{id:"u2",x:16,topY:11.5,count:2},{id:"cs1",x:19,topY:13},{id:"u3",x:21,topY:14.5,count:2},{id:"balc1",x:0,topY:16,count:5},{id:"u4",x:6,topY:17.5,count:2},{id:"levplat",x:9,topY:19,count:2},{id:"ts1",x:12,topY:20.5},{id:"cp2plat",x:14,topY:22,count:2},{id:"spplat2",x:17,topY:23.5,count:2},{id:"ledge2",x:19,topY:29,count:3},{id:"u5",x:23,topY:30.5,count:2},{id:"balc2",x:2,topY:32,count:5},{id:"u6",x:8,topY:33.5,count:2},{id:"cs2",x:11,topY:35},{id:"cp3plat",x:13,topY:36.5,count:2},{id:"u7",x:16,topY:38,count:2},{id:"spplat3",x:19,topY:39.5,count:2},{id:"ledge3",x:21,topY:45,count:3},{id:"cp4plat",x:1,topY:46.5,count:2},{id:"summit",x:4,topY:48,count:4}],US=[],OS=[{id:"g1",x:4.5,y:2.3},{id:"g2",x:9.5,y:9.3},{id:"g3",x:10.5,y:9.3},{id:"g4",x:11.5,y:9.3},{id:"g5",x:13.5,y:10.8},{id:"g6",x:16.5,y:12.3},{id:"g7",x:21.5,y:15.3},{id:"g8",x:6.5,y:18.3},{id:"g9",x:9.5,y:19.8},{id:"g10",x:19.5,y:29.8},{id:"g11",x:20.5,y:29.8},{id:"g12",x:23.5,y:31.3},{id:"g13",x:8.5,y:34.3},{id:"g14",x:13.5,y:37.3},{id:"g15",x:16.5,y:38.8},{id:"g16",x:21.5,y:45.8},{id:"g17",x:22.5,y:45.8},{id:"g18",x:1.5,y:47.3},{id:"g19",x:.5,y:.8}],PS=[{id:"sp1",x:7,topY:3,bounceForce:18.5},{id:"sp2",x:17,topY:23.5,bounceForce:18.5},{id:"sp3",x:19,topY:39.5,bounceForce:18.5}],IS=[{id:"en1",xCenter:2,y:16.55,behavior:"patrol",amplitude:.5,speed:1.5},{id:"en2",xCenter:4,y:32.55,behavior:"patrol",amplitude:.5,speed:1.8}],BS=[{id:1,name:"Podest Sprężyny",floor:10,x:14,y:10},{id:2,name:"Rygiel Środkowy",floor:22,x:15,y:22},{id:3,name:"Wysoka Półka",floor:36,x:14,y:36.5},{id:4,name:"Próg Szczytu",floor:46,x:2,y:46.5}],FS=[{id:"cs1",x:19,topY:13},{id:"cs2",x:11,topY:35}],zS=[{id:"lever1",x:10,topY:20}],HS=[{id:"ts1",x:12,topY:20.5,leverId:"lever1"}],GS=[{id:"dcut1",pairId:"skip",x:3,topY:16},{id:"dcut2",pairId:"skip",x:5,topY:32}],d5={schemaVersion:wS,id:AS,name:CS,towerHeight:RS,circumferenceSteps:LS,start:DS,stairs:NS,elevators:US,gems:OS,springs:PS,enemies:IS,checkpoints:BS,collapsingStairs:FS,levers:zS,togglableStairs:HS,doors:GS},h5=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:BS,circumferenceSteps:LS,collapsingStairs:FS,default:d5,doors:GS,elevators:US,enemies:IS,gems:OS,id:AS,levers:zS,name:CS,schemaVersion:wS,springs:PS,stairs:NS,start:DS,togglableStairs:HS,towerHeight:RS},Symbol.toStringTag,{value:"Module"})),Dv=Object.assign({"./lvl_0001.level.json":kR,"./lvl_0002.level.json":t5,"./lvl_0003.level.json":i5,"./lvl_0004.level.json":s5,"./lvl_0005.level.json":o5,"./lvl_0006.level.json":c5,"./lvl_0007.level.json":f5,"./lvl_0008.level.json":h5}),ga=Object.keys(Dv).sort().map(r=>I1(Dv[r].default)),_a=ga.length;function Nv(r){for(let e=0;e<ga.length;e++)if(!r.completedLevels.includes(e+1))return e;return ga.length-1}const kS="glower-tower-progress-v5";function Uv(){return _a}function $h(){return{completedLevels:[],unlockedLevel:1,bestScores:{}}}function xo(){try{const r=localStorage.getItem(kS);if(!r)return $h();const e=JSON.parse(r);if(!Array.isArray(e.completedLevels)||typeof e.unlockedLevel!="number")return $h();const n=Math.max(1,Math.min(e.unlockedLevel,Uv()+1));return{completedLevels:e.completedLevels.filter(a=>a>=1&&a<=Uv()),unlockedLevel:n,bestScores:e.bestScores??{}}}catch{return $h()}}function p5(r){try{localStorage.setItem(kS,JSON.stringify(r))}catch{}}function m5(r,e,n,a,o){const c=xo(),u=new Set(c.completedLevels);u.add(r);const d=u.size>0?Math.max(...Array.from(u)):0,m=Math.min(o,d+1),p={...c.bestScores},g=String(r),x=p[g];(!x||e&&(n<x.jumps||a<x.timeSec))&&(p[g]={jumps:n,timeSec:a});const _={completedLevels:Array.from(u).sort((M,v)=>M-v),unlockedLevel:m,bestScores:p};return p5(_),_}function VS(r,e){return r===1?!0:e.completedLevels.includes(r-1)}const g5={pl:{appName:"Glut Żelek",appSubtitle:"Wieża",pageTitle:"Glut Żelek: Wieża",menuPlay:"GRAJ",menuPlayAria:"Graj",menuCredits:"©2026 LUKAMI",unmute:"Włącz dźwięk",mute:"Wycisz dźwięk",settings:"Ustawienia",help:"Instrukcja",fullscreen:"Pełny ekran",langPl:"Polski",langEn:"Angielski",selectLevel:"Wybierz Poziom",backToMenu:"Powrót do menu",selectHint:"Ukończone i następny są dostępne.",completed:"Ukończono:",upTo:"Do:",bestJumps:"sk",levelNew:"nowy",levelPlay:"graj",hudTower:"Wieża",hudFloor:"Piętro",restartLevel:"Zrestartuj poziom (R)",clearedTitle:r=>`POZIOM ${r} ZALICZONY!`,clearedDesc:r=>`Pokonałeś ${r} pięter i zebrałeś wszystkie klejnoty!`,doneTitle:r=>`POZIOM ${r} UKOŃCZONY`,doneBut:"ale nie zaliczony!",gemsHint:(r,e)=>`Zbierz wszystkie klejnoty (${r}/${e}), żeby odblokować następny poziom.`,scoreLabel:"Wynik:",ptsSuffix:"pkt",gemsLabel:"Klejnoty:",jumpsLabel:"Skoki:",timeLabel:"Czas:",secondsSuffix:"s",nextLevel:r=>`NASTĘPNY POZIOM (${r})`,restart:"RESTART",menu:"MENU",playAgain:"ZAGRAJ PONOWNIE",gameOver:"KONIEC GRY",gameOverDesc:"Wpadłeś do wody bez punktu kontrolnego.",floorLabel:"Piętro:",pointsLabel:"Punkty:",tryAgain:"SPRÓBUJ PONOWNIE",completedBadge:"Gra ukończona",congrats:"GRATULACJE!",congratsDesc:r=>`Ukończyłeś wszystkie ${r} poziomy wieży pełnej przygód!`,restartGame:"RESTART GRY",backToMenuCaps:"POWRÓT DO MENU",loadingTower:r=>`Wieża ${r}`,loadingGems:r=>`Zbierz ${r} klejnotów`,loadingText:"Wczytuje...",helpTitle:"INSTRUKCJA",helpIntro:(r,e)=>`Wspinaj się po spiralnej wieży, zbieraj klejnoty aby móc odkrywać następne poziomy. Pełne dynamicznych plansz i łamigłówek. Glut Żelek jest bardzo leniwy, liczy na to, że dotrzesz na szczyt wieży niewiele się męcząc. Żelek lubi schodzić po schodach, jeździć windą i przechodzić przez drzwi teleportacyjne. Nienawidzi skakać! Gra zapamiętuje najlepsze wyniki (ilośc skoków i czas). Każdy poziom liczy ${r} pięter. Łącznie ${e} poziomów.`,elementsTitle:"ELEMENTY WIEŻY:",elElevators:"Windy: pionowe, o różnej prędkości",elSprings:"Sprężyny: wyrzut w górę",elGems:"Klejnoty: zbieraj wszystkie",elCheckpoints:"Checkpointy: zapis postępu",elDoors:"Drzwi: teleport, stań i ↓ / S",elTimer:"Zegar: start przy pierwszym ruchu",elCollapsing:"Zapadnie: czerwona krawędź, po wejściu chowają się",elLevers:"Dzwignie: przełącznik z kulką, ↓ / S wysuwa/chowa schodek",elBalls:"Piłki: metalowe kule, unikaj",controlsTitle:"STEROWANIE:",ctrlMove:"← / → lub A / D – ruch",ctrlJump:"↑ lub Spacja – skok",ctrlInteract:"↓ lub S – drzwi / dzwignia",ctrlRestart:"R – restart",understand:"ROZUMIEM",settingsTitle:"USTAWIENIA",render:"Render",renderFast:"640px (szybciej)",renderSharp:"1280px (ostrzej)",imageFilter:"Filtr obrazu",filterPixelated:"Pikselowy",filterSmooth:"Gładki",filterCrt:"CRT",sound:"Dźwięk",muted:"Wyciszony",soundOn:"Dźwięk włączony",soundMutedHint:"Gra startuje wyciszona. Włącz dźwięk, aby zezwolić przeglądarce na odtwarzanie.",soundFx:"Efekty",soundMusic:"Muzyka",soundFxHint:"skoki, lądowania, diamenty",soundMusicHint:"melodie menu i gry",close:"ZAMKNIJ",touchLeft:"W lewo",touchRight:"W prawo",touchDoor:"Wejdź przez drzwi",touchJump:"Skok",iosTitle:"Pełny ekran na iPhone",iosDesc:"iOS blokuje Fullscreen API w kartach przeglądarki. Jedyne wyjście to instalacja gry jako aplikacji z ekranu startowego.",iosStep1a:"Naciśnij",iosShare:"Udostępnij",iosStep1b:"— ikonę kwadratu ze strzałką w górę, w dolnym pasku Safari.",iosStep2a:"Przewiń w dół i dotknij",iosAddToHome:"Dodaj do ekranu startowego",iosStep3a:"Otwórz",iosStep3b:"z ekranu startowego.",iosFirefox:"Firefox: naciśnij ⋯ → Dodaj do ekranu startowego."},en:{appName:"Jelly Slime",appSubtitle:"The Tower",pageTitle:"Jelly Slime: The Tower",menuPlay:"PLAY",menuPlayAria:"Play",menuCredits:"©2026 LUKAMI",unmute:"Unmute",mute:"Mute",settings:"Settings",help:"Help",fullscreen:"Fullscreen",langPl:"Polish",langEn:"English",selectLevel:"Select Level",backToMenu:"Back to menu",selectHint:"Completed levels and the next one are available.",completed:"Completed:",upTo:"Up to:",bestJumps:"jumps",levelNew:"new",levelPlay:"play",hudTower:"Tower",hudFloor:"Floor",restartLevel:"Restart level (R)",clearedTitle:r=>`LEVEL ${r} CLEARED!`,clearedDesc:r=>`You conquered ${r} floors and collected all the gems!`,doneTitle:r=>`LEVEL ${r} COMPLETED`,doneBut:"but not cleared!",gemsHint:(r,e)=>`Collect all the gems (${r}/${e}) to unlock the next level.`,scoreLabel:"Score:",ptsSuffix:"pts",gemsLabel:"Gems:",jumpsLabel:"Jumps:",timeLabel:"Time:",secondsSuffix:"s",nextLevel:r=>`NEXT LEVEL (${r})`,restart:"RESTART",menu:"MENU",playAgain:"PLAY AGAIN",gameOver:"GAME OVER",gameOverDesc:"You fell into the water without passing a checkpoint.",floorLabel:"Floor:",pointsLabel:"Points:",tryAgain:"TRY AGAIN",completedBadge:"Game completed",congrats:"CONGRATULATIONS!",congratsDesc:r=>`You have completed all ${r} levels of a tower full of adventures!`,restartGame:"RESTART GAME",backToMenuCaps:"BACK TO MENU",loadingTower:r=>`Tower ${r}`,loadingGems:r=>`Collect ${r} gems`,loadingText:"Loading...",helpTitle:"INSTRUCTIONS",helpIntro:(r,e)=>`Climb the spiral tower and collect gems to unlock the next levels. Full of dynamic elements and puzzles. Jelly Slime is very lazy and is counting on you to reach the top of the tower with minimal effort. Jelly likes to walk down stairs, ride the elevator, and go through teleportation doors. He hates jumping! The game saves your best scores (number of jumps and time). Each level has ${r} floors. There are ${e} levels in total.`,elementsTitle:"TOWER ELEMENTS:",elElevators:"Elevators: vertical",elSprings:"Springs: launch you up",elGems:"Gems: collect them all",elCheckpoints:"Checkpoints: save progress",elDoors:"Doors: teleport, stand on them and press ↓ / S",elTimer:"Timer: starts with your first move",elCollapsing:"Collapsing stairs: red edge, retract after you step on them",elLevers:"Levers: switch with a ball, ↓ / S shows/hides a stair",elBalls:"Balls: iron spheres, avoid them",controlsTitle:"CONTROLS:",ctrlMove:"← / → or A / D – move",ctrlJump:"↑ or Space – jump",ctrlInteract:"↓ or S – doors / lever",ctrlRestart:"R – restart",understand:"GOT IT",settingsTitle:"SETTINGS",render:"Render",renderFast:"640px (faster)",renderSharp:"1280px (sharper)",imageFilter:"Image filter",filterPixelated:"Pixelated",filterSmooth:"Smooth",filterCrt:"CRT",sound:"Sound",muted:"Muted",soundOn:"Sound on",soundMutedHint:"The game starts muted. Turn sound on to allow your browser to play audio.",soundFx:"Effects",soundMusic:"Music",soundFxHint:"jumps, landings, gems",soundMusicHint:"menu & game tunes",close:"CLOSE",touchLeft:"Left",touchRight:"Right",touchDoor:"Enter door",touchJump:"Jump",iosTitle:"Fullscreen on iPhone",iosDesc:"iOS blocks the Fullscreen API in browser tabs. The only way around it is to install the game as an app from the home screen.",iosStep1a:"Tap",iosShare:"Share",iosStep1b:"— the square icon with the arrow pointing up, in the Safari bottom bar.",iosStep2a:"Scroll down and tap",iosAddToHome:"Add to Home Screen",iosStep3a:"Open",iosStep3b:"from your home screen.",iosFirefox:"Firefox: press ⋯ → Add to Home Screen."}},YS="jelly-lang";function _5(){try{return localStorage.getItem(YS)==="en"?"en":"pl"}catch{return"pl"}}function x5(r){try{localStorage.setItem(YS,r)}catch{}}const XS=(...r)=>r.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();const v5=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const y5=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase());const Ov=r=>{const e=y5(r);return e.charAt(0).toUpperCase()+e.slice(1)};var ep={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const S5=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},M5=dt.createContext({}),b5=()=>dt.useContext(M5),E5=dt.forwardRef(({color:r,size:e,strokeWidth:n,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...d},m)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:x=!1,color:_="currentColor",className:M=""}=b5()??{},v=a??x?Number(n??g)*24/Number(e??p):n??g;return dt.createElement("svg",{ref:m,...ep,width:e??p??ep.width,height:e??p??ep.height,stroke:r??_,strokeWidth:v,className:XS("lucide",M,o),...!c&&!S5(d)&&{"aria-hidden":"true"},...d},[...u.map(([A,y])=>dt.createElement(A,y)),...Array.isArray(c)?c:[c]])});const un=(r,e)=>{const n=dt.forwardRef(({className:a,...o},c)=>dt.createElement(E5,{ref:c,iconNode:e,className:XS(`lucide-${v5(Ov(r))}`,`lucide-${r}`,a),...o}));return n.displayName=Ov(r),n};const T5=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],w5=un("arrow-down",T5);const A5=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],C5=un("arrow-left",A5);const R5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],WS=un("arrow-right",R5);const L5=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],D5=un("arrow-up",L5);const N5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],U5=un("circle-check",N5);const O5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],P5=un("circle-question-mark",O5);const I5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],B5=un("clock",I5);const F5=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],z5=un("cpu",F5);const H5=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],G5=un("crown",H5);const k5=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],Am=un("diamond",k5);const V5=[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]],Y5=un("drum",V5);const X5=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],tf=un("house",X5);const W5=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],qS=un("lock",W5);const q5=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],j5=un("maximize-2",q5);const Z5=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],K5=un("music",Z5);const Q5=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],J5=un("play",Q5);const $5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],nf=un("rotate-ccw",$5);const eL=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],tL=un("settings",eL);const nL=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],iL=un("share-2",nL);const aL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],jS=un("shield-alert",aL);const sL=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],rL=un("smartphone",sL);const oL=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Cm=un("sparkles",oL);const lL=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],ZS=un("trophy",lL);const cL=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],$p=un("volume-2",cL);const uL=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],KS=un("volume-x",uL);const fL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],QS=un("x",fL);const dL=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],JS=un("zap",dL),tp=({onChange:r,className:e,ariaLabel:n,children:a})=>I.jsx("button",{onTouchStart:o=>{o.preventDefault(),r(!0)},onTouchEnd:o=>{o.preventDefault(),r(!1)},onMouseDown:()=>r(!0),onMouseUp:()=>r(!1),className:e,"aria-label":n,children:a}),hL=({onTap:r,className:e,ariaLabel:n,children:a})=>I.jsx("button",{onTouchStart:o=>{o.preventDefault(),r()},onClick:r,className:e,"aria-label":n,children:a}),Pv="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/20 bg-slate-900/80 text-white shadow-xl backdrop-blur-md active:scale-95 active:bg-cyan-600/80",pL="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-cyan-400/40 bg-cyan-700/80 text-white shadow-xl backdrop-blur-md active:scale-95 active:bg-cyan-500",mL="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-400/40 bg-emerald-600/80 text-white shadow-2xl backdrop-blur-md active:scale-95 active:bg-emerald-500",gL=({t:r,onMoveLeft:e,onMoveRight:n,onJump:a,onDoor:o})=>I.jsxs("div",{className:"touch-controls pointer-events-none fixed inset-x-0 bottom-6 z-30 flex items-center justify-between px-6 select-none [@media(pointer:fine)]:hidden",children:[I.jsxs("div",{className:"pointer-events-auto flex items-center gap-3",children:[I.jsx(tp,{onChange:e,className:Pv,ariaLabel:r.touchLeft,children:I.jsx(C5,{className:"h-7 w-7"})}),I.jsx(tp,{onChange:n,className:Pv,ariaLabel:r.touchRight,children:I.jsx(WS,{className:"h-7 w-7"})})]}),I.jsxs("div",{className:"pointer-events-auto flex items-center gap-3",children:[I.jsx(hL,{onTap:o,className:pL,ariaLabel:r.touchDoor,children:I.jsx(w5,{className:"h-7 w-7"})}),I.jsx(tp,{onChange:a,className:mL,ariaLabel:r.touchJump,children:I.jsx(D5,{className:"h-8 w-8"})})]})]}),vo="flex h-8 w-8 items-center justify-center rounded-lg bg-black/70 shadow-lg transition-transform hover:scale-105 active:scale-95 sm:h-10 sm:w-10 [@media(max-height:500px)]:h-7 [@media(max-height:500px)]:w-7",$S="font-freckle fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm [@media(max-height:500px)]:p-2",_L="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200 [@media(max-height:500px)]:p-2",xL="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] to-[#052e1a] p-6 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",vL="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] to-[#052e1a] p-7 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",yL="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",SL="font-arial relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 text-sky-100 shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",ML="font-arial relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-3xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 text-sky-100 shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",Iv="flex items-center justify-center gap-1.5 rounded-xl bg-amber-600 py-2.5 text-2sm tracking-wide text-sky-100 hover:bg-amber-500",eM="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3 text-base tracking-wide text-[#052e1a] shadow-lg hover:bg-emerald-300",tM="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-2sm tracking-wide text-sky-100 hover:bg-amber-500",np=({active:r,onClick:e,align:n="left",children:a})=>I.jsx("button",{onClick:e,className:`rounded-2xl p-4 text-${n} ${r?"bg-emerald-400 text-[#052e1a]":"bg-sky-900/60 text-sky-100"}`,children:a}),Bv=({icon:r,label:e,hint:n,enabled:a,onClick:o})=>I.jsxs("button",{onClick:o,role:"switch","aria-checked":a,className:`flex items-center justify-between gap-2 rounded-2xl px-3.5 py-3 text-left ${a?"bg-emerald-400 text-[#052e1a]":"bg-sky-900/60 text-sky-100"}`,children:[I.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[I.jsx("span",{className:a?"text-[#052e1a]":"text-sky-300",children:r}),I.jsxs("div",{className:"min-w-0",children:[I.jsx("div",{className:"text-base tracking-wide",children:e}),I.jsx("div",{className:"truncate text-xs opacity-75",children:n})]})]}),I.jsx("span",{className:`shrink-0 rounded-full px-2.5 py-0.5 text-xs tracking-wide ${a?"bg-[#052e1a]/15 text-[#052e1a]":"bg-rose-400 text-white"}`,children:a?"ON":"OFF"})]}),bL=({t:r,config:e,onConfigChange:n,isOpen:a,onClose:o})=>{if(!a)return null;const c=[{id:"crisp",name:r.filterPixelated},{id:"smooth",name:r.filterSmooth},{id:"crt",name:r.filterCrt}];return I.jsx("div",{className:$S,children:I.jsxs("div",{className:ML,children:[I.jsx("button",{onClick:o,className:"absolute right-4 top-4 rounded-lg bg-sky-900/60 p-1.5 text-sky-200 hover:bg-sky-800",children:I.jsx(QS,{className:"h-5 w-5"})}),I.jsxs("div",{className:"flex items-center gap-2.5 tracking-wide text-amber-200 pb-3",children:[I.jsx(JS,{className:"h-6 w-6 text-amber-300"}),I.jsx("h2",{className:"text-2xl tracking-wide",children:r.settingsTitle})]}),I.jsxs("div",{className:"mt-4 space-y-5 text-base tracking-wide",children:[I.jsxs("div",{children:[I.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[I.jsx(z5,{className:"h-5 w-5 text-sky-300"}),r.render]}),I.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I.jsxs(np,{active:e.renderScale===1,onClick:()=>n({renderScale:1}),children:[I.jsx("div",{className:"text-base",children:"x1"}),I.jsx("div",{className:"text-sm opacity-80",children:r.renderFast})]}),I.jsxs(np,{active:e.renderScale===2,onClick:()=>n({renderScale:2}),children:[I.jsx("div",{className:"text-base",children:"x2"}),I.jsx("div",{className:"text-sm opacity-80",children:r.renderSharp})]})]})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[I.jsx(Cm,{className:"h-5 w-5 text-amber-300"}),r.imageFilter]}),I.jsx("div",{className:"grid grid-cols-3 gap-2",children:c.map(u=>I.jsx(np,{active:e.filterMode===u.id,onClick:()=>n({filterMode:u.id}),align:"center",children:I.jsx("div",{className:"text-base tracking-wide",children:u.name})},u.id))})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[I.jsx($p,{className:"h-5 w-5 text-emerald-300"}),r.sound]}),I.jsxs("button",{onClick:()=>n(u=>({soundMuted:!u.soundMuted})),"aria-pressed":!e.soundMuted,className:"flex w-full items-center justify-between rounded-2xl bg-sky-900/60 px-4 py-3 text-sky-100",children:[I.jsxs("div",{className:"flex items-center gap-2.5",children:[e.soundMuted?I.jsx(KS,{className:"h-6 w-6 text-rose-300"}):I.jsx($p,{className:"h-6 w-6 text-emerald-300"}),I.jsx("span",{className:"tracking-wide text-base",children:e.soundMuted?r.muted:r.soundOn})]}),I.jsx("span",{className:`rounded-full px-3 py-1 text-sm tracking-wide ${e.soundMuted?"bg-rose-400 text-white":"bg-emerald-400 text-[#052e1a]"}`,children:e.soundMuted?"OFF":"ON"})]}),e.soundMuted&&I.jsx("p",{className:"mt-1.5 px-1 text-xs leading-snug tracking-wide text-sky-300/80",children:r.soundMutedHint}),I.jsxs("div",{className:`mt-2 grid grid-cols-2 gap-2 transition-opacity ${e.soundMuted?"opacity-60":""}`,children:[I.jsx(Bv,{icon:I.jsx(Y5,{className:"h-5 w-5"}),label:r.soundFx,hint:r.soundFxHint,enabled:e.sfxEnabled,onClick:()=>n(u=>({sfxEnabled:!u.sfxEnabled}))}),I.jsx(Bv,{icon:I.jsx(K5,{className:"h-5 w-5"}),label:r.soundMusic,hint:r.soundMusicHint,enabled:e.musicEnabled,onClick:()=>n(u=>({musicEnabled:!u.musicEnabled}))})]})]})]}),I.jsx("div",{className:"mt-5 flex justify-end",children:I.jsxs("button",{onClick:o,className:"font-case flex items-center gap-1.5 rounded-xl bg-emerald-400 px-5 py-2.5 text-base tracking-wide text-[#052e1a] hover:bg-emerald-300",children:[I.jsx(U5,{className:"h-5 w-5"}),r.close]})})]})})};var Rm={};(function r(e,n,a,o){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var H=new OffscreenCanvas(1,1),E=H.getContext("2d");E.fillRect(0,0,1,1);var k=H.transferToImageBitmap();E.createPattern(k,"no-repeat")}catch{return!1}return!0})();function m(){}function p(H){var E=n.exports.Promise,k=E!==void 0?E:e.Promise;return typeof k=="function"?new k(H):(H(m,m),null)}var g=(function(H,E){return{transform:function(k){if(H)return k;if(E.has(k))return E.get(k);var ae=new OffscreenCanvas(k.width,k.height),ye=ae.getContext("2d");return ye.drawImage(k,0,0),E.set(k,ae),ae},clear:function(){E.clear()}}})(d,new Map),x=(function(){var H=Math.floor(16.666666666666668),E,k,ae={},ye=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(Ee){var K=Math.random();return ae[K]=requestAnimationFrame(function ie(me){ye===me||ye+H-1<me?(ye=me,delete ae[K],Ee()):ae[K]=requestAnimationFrame(ie)}),K},k=function(Ee){ae[Ee]&&cancelAnimationFrame(ae[Ee])}):(E=function(Ee){return setTimeout(Ee,H)},k=function(Ee){return clearTimeout(Ee)}),{frame:E,cancel:k}})(),_=(function(){var H,E,k={};function ae(ye){function Ee(K,ie){ye.postMessage({options:K||{},callback:ie})}ye.init=function(ie){var me=ie.transferControlToOffscreen();ye.postMessage({canvas:me},[me])},ye.fire=function(ie,me,Ce){if(E)return Ee(ie,null),E;var ke=Math.random().toString(36).slice(2);return E=p(function(Ne){function ut(nt){nt.data.callback===ke&&(delete k[ke],ye.removeEventListener("message",ut),E=null,g.clear(),Ce(),Ne())}ye.addEventListener("message",ut),Ee(ie,ke),k[ke]=ut.bind(null,{data:{callback:ke}})}),E},ye.reset=function(){ye.postMessage({reset:!0});for(var ie in k)k[ie](),delete k[ie]}}return function(){if(H)return H;if(!a&&c){var ye=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{H=new Worker(URL.createObjectURL(new Blob([ye])))}catch(Ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Ee),null}ae(H)}return H}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(H,E){return E?E(H):H}function A(H){return H!=null}function y(H,E,k){return v(H&&A(H[E])?H[E]:M[E],k)}function S(H){return H<0?0:Math.floor(H)}function R(H,E){return Math.floor(Math.random()*(E-H))+H}function U(H){return parseInt(H,16)}function C(H){return H.map(O)}function O(H){var E=String(H).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:U(E.substring(0,2)),g:U(E.substring(2,4)),b:U(E.substring(4,6))}}function N(H){var E=y(H,"origin",Object);return E.x=y(E,"x",Number),E.y=y(E,"y",Number),E}function B(H){H.width=document.documentElement.clientWidth,H.height=document.documentElement.clientHeight}function T(H){var E=H.getBoundingClientRect();H.width=E.width,H.height=E.height}function P(H){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=H,E}function Y(H,E,k,ae,ye,Ee,K,ie,me){H.save(),H.translate(E,k),H.rotate(Ee),H.scale(ae,ye),H.arc(0,0,1,K,ie,me),H.restore()}function V(H){var E=H.angle*(Math.PI/180),k=H.spread*(Math.PI/180);return{x:H.x,y:H.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:H.startVelocity*.5+Math.random()*H.startVelocity,angle2D:-E+(.5*k-Math.random()*k),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:H.color,shape:H.shape,tick:0,totalTicks:H.ticks,decay:H.decay,drift:H.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:H.gravity*3,ovalScalar:.6,scalar:H.scalar,flat:H.flat}}function W(H,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var k=E.tick++/E.totalTicks,ae=E.x+E.random*E.tiltCos,ye=E.y+E.random*E.tiltSin,Ee=E.wobbleX+E.random*E.tiltCos,K=E.wobbleY+E.random*E.tiltSin;if(H.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-k)+")",H.beginPath(),u&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))H.fill(q(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(Ee-ae)*.1,Math.abs(K-ye)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var ie=Math.PI/10*E.wobble,me=Math.abs(Ee-ae)*.1,Ce=Math.abs(K-ye)*.1,ke=E.shape.bitmap.width*E.scalar,Ne=E.shape.bitmap.height*E.scalar,ut=new DOMMatrix([Math.cos(ie)*me,Math.sin(ie)*me,-Math.sin(ie)*Ce,Math.cos(ie)*Ce,E.x,E.y]);ut.multiplySelf(new DOMMatrix(E.shape.matrix));var nt=H.createPattern(g.transform(E.shape.bitmap),"no-repeat");nt.setTransform(ut),H.globalAlpha=1-k,H.fillStyle=nt,H.fillRect(E.x-ke/2,E.y-Ne/2,ke,Ne),H.globalAlpha=1}else if(E.shape==="circle")H.ellipse?H.ellipse(E.x,E.y,Math.abs(Ee-ae)*E.ovalScalar,Math.abs(K-ye)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):Y(H,E.x,E.y,Math.abs(Ee-ae)*E.ovalScalar,Math.abs(K-ye)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var Ve=Math.PI/2*3,ct=4*E.scalar,we=8*E.scalar,Ye=E.x,Qe=E.y,qe=5,Dt=Math.PI/qe;qe--;)Ye=E.x+Math.cos(Ve)*we,Qe=E.y+Math.sin(Ve)*we,H.lineTo(Ye,Qe),Ve+=Dt,Ye=E.x+Math.cos(Ve)*ct,Qe=E.y+Math.sin(Ve)*ct,H.lineTo(Ye,Qe),Ve+=Dt;else H.moveTo(Math.floor(E.x),Math.floor(E.y)),H.lineTo(Math.floor(E.wobbleX),Math.floor(ye)),H.lineTo(Math.floor(Ee),Math.floor(K)),H.lineTo(Math.floor(ae),Math.floor(E.wobbleY));return H.closePath(),H.fill(),E.tick<E.totalTicks}function pe(H,E,k,ae,ye){var Ee=E.slice(),K=H.getContext("2d"),ie,me,Ce=p(function(ke){function Ne(){ie=me=null,K.clearRect(0,0,ae.width,ae.height),g.clear(),ye(),ke()}function ut(){a&&!(ae.width===o.width&&ae.height===o.height)&&(ae.width=H.width=o.width,ae.height=H.height=o.height),!ae.width&&!ae.height&&(k(H),ae.width=H.width,ae.height=H.height),K.clearRect(0,0,ae.width,ae.height),Ee=Ee.filter(function(nt){return W(K,nt)}),Ee.length?ie=x.frame(ut):Ne()}ie=x.frame(ut),me=Ne});return{addFettis:function(ke){return Ee=Ee.concat(ke),Ce},canvas:H,promise:Ce,reset:function(){ie&&x.cancel(ie),me&&me()}}}function se(H,E){var k=!H,ae=!!y(E||{},"resize"),ye=!1,Ee=y(E,"disableForReducedMotion",Boolean),K=c&&!!y(E||{},"useWorker"),ie=K?_():null,me=k?B:T,Ce=H&&ie?!!H.__confetti_initialized:!1,ke=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ne;function ut(Ve,ct,we){for(var Ye=y(Ve,"particleCount",S),Qe=y(Ve,"angle",Number),qe=y(Ve,"spread",Number),Dt=y(Ve,"startVelocity",Number),Ut=y(Ve,"decay",Number),an=y(Ve,"gravity",Number),Q=y(Ve,"drift",Number),Gt=y(Ve,"colors",C),Ot=y(Ve,"ticks",Number),z=y(Ve,"shapes"),w=y(Ve,"scalar"),te=!!y(Ve,"flat"),fe=N(Ve),_e=Ye,Re=[],Oe=H.width*fe.x,xe=H.height*fe.y;_e--;)Re.push(V({x:Oe,y:xe,angle:Qe,spread:qe,startVelocity:Dt,color:Gt[_e%Gt.length],shape:z[R(0,z.length)],ticks:Ot,decay:Ut,gravity:an,drift:Q,scalar:w,flat:te}));return Ne?Ne.addFettis(Re):(Ne=pe(H,Re,me,ct,we),Ne.promise)}function nt(Ve){var ct=Ee||y(Ve,"disableForReducedMotion",Boolean),we=y(Ve,"zIndex",Number);if(ct&&ke)return p(function(Dt){Dt()});k&&Ne?H=Ne.canvas:k&&!H&&(H=P(we),document.body.appendChild(H)),ae&&!Ce&&me(H);var Ye={width:H.width,height:H.height};ie&&!Ce&&ie.init(H),Ce=!0,ie&&(H.__confetti_initialized=!0);function Qe(){if(ie){var Dt={getBoundingClientRect:function(){if(!k)return H.getBoundingClientRect()}};me(Dt),ie.postMessage({resize:{width:Dt.width,height:Dt.height}});return}Ye.width=Ye.height=null}function qe(){Ne=null,ae&&(ye=!1,e.removeEventListener("resize",Qe)),k&&H&&(document.body.contains(H)&&document.body.removeChild(H),H=null,Ce=!1)}return ae&&!ye&&(ye=!0,e.addEventListener("resize",Qe,!1)),ie?ie.fire(Ve,Ye,qe):ut(Ve,Ye,qe)}return nt.reset=function(){ie&&ie.reset(),Ne&&Ne.reset()},nt}var J;function F(){return J||(J=se(null,{useWorker:!0,resize:!0})),J}function q(H,E,k,ae,ye,Ee,K){var ie=new Path2D(H),me=new Path2D;me.addPath(ie,new DOMMatrix(E));var Ce=new Path2D;return Ce.addPath(me,new DOMMatrix([Math.cos(K)*ye,Math.sin(K)*ye,-Math.sin(K)*Ee,Math.cos(K)*Ee,k,ae])),Ce}function ne(H){if(!u)throw new Error("path confetti are not supported in this browser");var E,k;typeof H=="string"?E=H:(E=H.path,k=H.matrix);var ae=new Path2D(E),ye=document.createElement("canvas"),Ee=ye.getContext("2d");if(!k){for(var K=1e3,ie=K,me=K,Ce=0,ke=0,Ne,ut,nt=0;nt<K;nt+=2)for(var Ve=0;Ve<K;Ve+=2)Ee.isPointInPath(ae,nt,Ve,"nonzero")&&(ie=Math.min(ie,nt),me=Math.min(me,Ve),Ce=Math.max(Ce,nt),ke=Math.max(ke,Ve));Ne=Ce-ie,ut=ke-me;var ct=10,we=Math.min(ct/Ne,ct/ut);k=[we,0,0,we,-Math.round(Ne/2+ie)*we,-Math.round(ut/2+me)*we]}return{type:"path",path:E,matrix:k}}function le(H){var E,k=1,ae="#000000",ye='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof H=="string"?E=H:(E=H.text,k="scalar"in H?H.scalar:k,ye="fontFamily"in H?H.fontFamily:ye,ae="color"in H?H.color:ae);var Ee=10*k,K=""+Ee+"px "+ye,ie=new OffscreenCanvas(Ee,Ee),me=ie.getContext("2d");me.font=K;var Ce=me.measureText(E),ke=Math.ceil(Ce.actualBoundingBoxRight+Ce.actualBoundingBoxLeft),Ne=Math.ceil(Ce.actualBoundingBoxAscent+Ce.actualBoundingBoxDescent),ut=2,nt=Ce.actualBoundingBoxLeft+ut,Ve=Ce.actualBoundingBoxAscent+ut;ke+=ut+ut,Ne+=ut+ut,ie=new OffscreenCanvas(ke,Ne),me=ie.getContext("2d"),me.font=K,me.fillStyle=ae,me.fillText(E,nt,Ve);var ct=1/k;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[ct,0,0,ct,-ke*ct/2,-Ne*ct/2]}}n.exports=function(){return F().apply(this,arguments)},n.exports.reset=function(){F().reset()},n.exports.create=se,n.exports.shapeFromPath=ne,n.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Rm,!1);const bo=Rm.exports;Rm.exports.create;const EL=()=>{bo({particleCount:120,spread:70,origin:{y:.6}});const r=setTimeout(()=>{bo({particleCount:80,angle:60,spread:55,origin:{x:0}}),bo({particleCount:80,angle:120,spread:55,origin:{x:1}})},400);return()=>clearTimeout(r)},TL=()=>{bo({particleCount:160,spread:100,origin:{y:.6}});const r=[setTimeout(()=>bo({particleCount:100,angle:60,spread:60,origin:{x:0}}),300),setTimeout(()=>bo({particleCount:100,angle:120,spread:60,origin:{x:1}}),500)];return()=>r.forEach(clearTimeout)},af=({children:r,panelClassName:e,animation:n="zoom",light:a=!1})=>{const o=a?_L:$S,c=n==="zoom"?"animate-in zoom-in-95 duration-200":"animate-in fade-in duration-200";return I.jsx("div",{className:`${o} ${c}`,children:I.jsx("div",{className:e,children:r})})},wL=({label:r,value:e,size:n="lg"})=>I.jsxs("div",{className:"p-1",children:[I.jsx("span",{className:"text-sm tracking-wide text-sky-200/70",children:r}),I.jsx("div",{className:n==="lg"?"text-xl":"text-base text-sky-200",children:e})]}),aa=({children:r,className:e=""})=>I.jsx("div",{className:`grid grid-cols-2 gap-2 rounded-2xl bg-sky-900/40 p-3 text-left text-sm ${e}`,children:r});aa.Item=wL;const sf=r=>{const e=Math.floor(r/60),n=Math.floor(r%60).toString().padStart(2,"0");return`${e}:${n}`},AL=({t:r,score:e,gems:n,totalGems:a,jumps:o,timeSec:c,towerHeight:u,levelNumber:d,totalLevels:m,onRestart:p,onBackToMenu:g,onNextLevel:x})=>{const _=n>=a,M=_&&d<m&&!!x;return Fv.useEffect(()=>{if(_)return EL()},[_]),I.jsxs(af,{panelClassName:xL,children:[I.jsx("div",{className:`mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${_?"bg-amber-400 text-[#052e1a]":"bg-orange-400 text-[#052e1a]"}`,children:_?I.jsx(ZS,{className:"h-9 w-9 animate-bounce"}):I.jsx(jS,{className:"h-9 w-9"})}),_?I.jsxs(I.Fragment,{children:[I.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-amber-200",children:r.clearedTitle(d)}),I.jsx("p",{className:"mt-1 text-sm tracking-wide text-sky-200",children:r.clearedDesc(u)})]}):I.jsxs(I.Fragment,{children:[I.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-orange-300",children:r.doneTitle(d)}),I.jsx("p",{className:"mt-1 text-base tracking-wide text-orange-200/90",children:r.doneBut}),I.jsxs("div",{className:"mt-2 flex items-center justify-center gap-2 text-lg tracking-wide text-amber-200",children:[I.jsx(Am,{className:"h-5 w-5 fill-amber-300"}),r.gemsHint(n,a)]})]}),I.jsxs(aa,{className:"my-4",children:[I.jsx(aa.Item,{label:r.scoreLabel,value:I.jsxs("span",{className:"text-amber-200",children:[e.toLocaleString()," ",r.ptsSuffix]})}),I.jsx(aa.Item,{label:r.gemsLabel,value:I.jsxs("span",{className:_?"text-emerald-300":"text-orange-300",children:[n," / ",a]})}),I.jsx(aa.Item,{label:r.jumpsLabel,value:o,size:"base"}),I.jsx(aa.Item,{label:r.timeLabel,value:`${sf(c)} ${r.secondsSuffix}`,size:"base"})]}),d<m&&x?I.jsxs(I.Fragment,{children:[I.jsxs("button",{onClick:M?x:void 0,disabled:!M,className:`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-2sm tracking-wide shadow-lg transition-all ${M?"bg-emerald-400 text-[#000] hover:bg-emerald-300":"bg-sky-900/30 text-white/30 cursor-not-allowed"}`,children:[M?I.jsx(WS,{className:"h-5 w-5"}):I.jsx(qS,{className:"h-5 w-5"}),r.nextLevel(d+1)]}),I.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[I.jsxs("button",{onClick:p,className:Iv,children:[I.jsx(nf,{className:"h-4 w-4"})," ",r.restart]}),g&&I.jsxs("button",{onClick:g,className:Iv,children:[I.jsx(tf,{className:"h-4 w-4"})," ",r.menu]})]})]}):I.jsxs("button",{onClick:p,className:eM,children:[I.jsx(Cm,{className:"h-5 w-5"})," ",r.playAgain]})]})},CL=({t:r,score:e,level:n,towerHeight:a,onRestart:o,onBackToMenu:c})=>I.jsxs(af,{panelClassName:yL,animation:"fade",children:[I.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-700 text-white shadow-lg",children:I.jsx(jS,{className:"h-8 w-8"})}),I.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-rose-700",children:r.gameOver}),I.jsx("p",{className:"mt-1 text-2sm tracking-wide text-sky-200",children:r.gameOverDesc}),I.jsxs("div",{className:"my-4 rounded-2xl bg-sky-900/40 p-3 text-2sm space-y-1",children:[I.jsxs("div",{className:"flex justify-between",children:[I.jsx("span",{className:"tracking-wide text-sky-200/70",children:r.floorLabel}),I.jsxs("span",{className:"tracking-wide text-sky-100",children:[n," / ",a]})]}),I.jsxs("div",{className:"flex justify-between",children:[I.jsx("span",{className:"tracking-wide text-sky-200/70",children:r.pointsLabel}),I.jsx("span",{className:"tracking-wide text-amber-200",children:e})]})]}),I.jsxs("button",{onClick:o,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-base tracking-wide text-white shadow-lg hover:bg-green-400",children:[I.jsx(nf,{className:"h-5 w-5"})," ",r.tryAgain]}),c&&I.jsx("button",{onClick:c,className:tM,children:r.backToMenu})]}),RL=({t:r,score:e,gems:n,totalGems:a,jumps:o,totalTime:c,levelsCompleted:u,onRestart:d,onBackToMenu:m})=>(Fv.useEffect(()=>TL(),[]),I.jsxs(af,{panelClassName:vL,children:[I.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-[#052e1a] shadow-lg",children:I.jsx(ZS,{className:"h-11 w-11 animate-bounce"})}),I.jsxs("div",{className:"mt-2 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-sm tracking-wide text-amber-200",children:[I.jsx(Cm,{className:"h-3 w-3"})," ",r.completedBadge]}),I.jsx("h2",{className:"mt-3 text-3xl tracking-wide text-amber-200",children:r.congrats}),I.jsx("p",{className:"mt-2 text-base tracking-wide text-sky-200",children:r.congratsDesc(u)}),I.jsxs(aa,{className:"my-5",children:[I.jsx(aa.Item,{label:r.scoreLabel,value:I.jsxs("span",{className:"text-amber-200",children:[e.toLocaleString()," ",r.ptsSuffix]})}),I.jsx(aa.Item,{label:r.gemsLabel,value:I.jsxs("span",{className:"text-emerald-300",children:[n," / ",a]})}),I.jsx(aa.Item,{label:r.jumpsLabel,value:o,size:"base"}),I.jsx(aa.Item,{label:r.timeLabel,value:sf(c),size:"base"})]}),I.jsxs("button",{onClick:d,className:eM,children:[I.jsx(nf,{className:"h-5 w-5"})," ",r.restartGame]}),I.jsxs("button",{onClick:m,className:tM,children:[I.jsx(tf,{className:"h-4 w-4"})," ",r.backToMenuCaps]})]})),LL=({t:r,visible:e,levelNumber:n,gemsCount:a})=>I.jsx("div",{className:`font-freckle fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] transition-opacity duration-300 ${e?"opacity-100":"opacity-0 pointer-events-none"}`,children:I.jsxs("div",{className:"text-center animate-in zoom-in-95 duration-300",children:[I.jsx("h3",{className:"text-xl tracking-[0.2em] text-[#7fd4e6] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:r.loadingTower(n)}),I.jsx(Am,{className:"mx-auto h-16 w-16 text-[#d9f99d] animate-spin mb-4 drop-shadow-[0_0_20px_rgba(217,249,157,0.5)] [animation-duration:2.5s] [animation-timing-function:ease-in-out]"}),I.jsx("h2",{className:"text-4xl tracking-wide text-[#d9f99d] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]",children:r.loadingGems(a)}),I.jsx("p",{className:"mt-3 text-sm tracking-[0.15em] text-[#a8c8ea]/60",children:r.loadingText})]})}),DL=({t:r,towerHeight:e,totalLevels:n,onClose:a})=>{const o=[r.elElevators,r.elSprings,r.elGems,r.elCheckpoints,r.elDoors,r.elTimer,r.elCollapsing,r.elLevers,r.elBalls],c=[r.ctrlMove,r.ctrlJump,r.ctrlInteract,r.ctrlRestart];return I.jsxs(af,{panelClassName:SL,animation:"fade",light:!0,children:[I.jsxs("div",{className:"flex items-center gap-2 text-amber-300 pb-2",children:[I.jsx(JS,{className:"h-6 w-6"}),I.jsx("h3",{className:"text-xl tracking-wide",children:r.helpTitle})]}),I.jsxs("div",{className:"space-y-2 tracking-wide text-green-100",children:[I.jsx("p",{className:"text-2sm leading-relaxed",children:r.helpIntro(e,n)}),I.jsxs("div",{className:"rounded-2xl bg-sky-900/40 p-4 space-y-2",children:[I.jsx("div",{className:"font-bold text-amber-200 tracking-wide",children:r.elementsTitle}),I.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2 text-sm",children:o.map((u,d)=>I.jsx("div",{children:I.jsx("strong",{children:u})},d))})]}),I.jsxs("div",{className:"rounded-2xl bg-sky-900/40 p-4",children:[I.jsx("div",{className:"font-bold text-amber-200 tracking-wide mb-1",children:r.controlsTitle}),I.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-sky-100/90",children:c.map((u,d)=>I.jsx("div",{children:u},d))})]})]}),I.jsx("button",{onClick:a,className:"font-case mt-5 w-full rounded-xl bg-emerald-300 py-2.5 text-2sm tracking-wide text-green-900 shadow-lg hover:bg-emerald-400 active:scale-95",children:r.understand})]})},NL=({t:r,onClose:e})=>I.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[70] flex justify-center bg-black/80 backdrop-blur-md sm:inset-0 sm:items-center",children:I.jsxs("div",{className:"relative w-full max-w-md rounded-t-3xl bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] p-5 pb-10 font-freckle text-sky-100 shadow-2xl sm:rounded-3xl sm:pb-6",children:[I.jsxs("div",{className:"pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[#86efac] animate-bounce sm:hidden",children:[I.jsx("div",{className:"h-7 w-0.5 rounded-full bg-[#86efac]/70"}),I.jsx("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"currentColor","aria-hidden":"true",children:I.jsx("path",{d:"M10 11 L0 0 L20 0 Z"})})]}),I.jsx("button",{onClick:e,className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-sky-100","aria-label":r.close,children:I.jsx(QS,{className:"h-5 w-5"})}),I.jsxs("div",{className:"flex items-center gap-3 pr-10",children:[I.jsx(rL,{className:"h-7 w-7 text-[#86efac]"}),I.jsx("h2",{className:"text-2xl text-[#86efac]",children:r.iosTitle})]}),I.jsx("p",{className:"mt-3 text-sm leading-relaxed text-sky-100/80",children:r.iosDesc}),I.jsxs("div",{className:"mt-4 space-y-2",children:[I.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[I.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"1"}),I.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep1a," ",I.jsxs("span",{className:"inline-flex items-center gap-0.5 rounded-md bg-sky-900/60 px-1.5 py-0.5 text-[#86efac]",children:[I.jsx(iL,{className:"h-3.5 w-3.5"})," ",r.iosShare]})," ",r.iosStep1b]})]}),I.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[I.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"2"}),I.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep2a," ",I.jsx("span",{className:"rounded-md bg-sky-900/60 px-1.5 py-0.5 text-amber-200",children:r.iosAddToHome}),"."]})]}),I.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[I.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"3"}),I.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep3a," ",I.jsx("span",{className:"rounded-md bg-sky-900/60 px-1.5 py-0.5 text-[#86efac]",children:r.appName})," ",r.iosStep3b]})]})]}),I.jsx("p",{className:"mt-2 text-xs text-[#a8c8ea]/60",children:r.iosFirefox}),I.jsx("button",{onClick:e,className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#86efac] py-3 text-lg text-[#052e1a] shadow-lg active:scale-95",children:"OK"})]})}),UL=()=>I.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{width:"100%",height:"100%",display:"block"},children:[I.jsx("mask",{id:"pl-c",children:I.jsx("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})}),I.jsxs("g",{mask:"url(#pl-c)",children:[I.jsx("path",{fill:"#eee",d:"M0 0h512v256H0z"}),I.jsx("path",{fill:"#d80027",d:"M0 256h512v256H0z"})]})]}),OL=()=>I.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{width:"100%",height:"100%",display:"block"},children:[I.jsx("mask",{id:"gb-c",children:I.jsx("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})}),I.jsxs("g",{mask:"url(#gb-c)",children:[I.jsx("path",{fill:"#eee",d:"m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"}),I.jsx("path",{fill:"#0052b4",d:"M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"}),I.jsx("path",{fill:"#d80027",d:"M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"})]})]}),PL=[{code:"pl",label:"Polski",Icon:UL},{code:"en",label:"English",Icon:OL}],IL="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-10 sm:w-10 [@media(max-height:500px)]:h-7 [@media(max-height:500px)]:w-7 p-0 bg-transparent overflow-hidden",BL=({lang:r,onChange:e})=>I.jsx(I.Fragment,{children:PL.map(({code:n,label:a,Icon:o})=>I.jsx("button",{onClick:()=>e(n),className:IL,title:a,"aria-label":a,"aria-pressed":r===n,style:{filter:r===n?"grayscale(1)":"none"},children:I.jsx(o,{})},n))}),nM=({t:r,soundMuted:e,onToggleSound:n,onOpenSettings:a,onOpenHelp:o,onFullscreen:c,leadingButtons:u})=>I.jsxs("div",{className:"pointer-events-auto absolute right-1.5 top-1.5 z-10 flex items-center gap-1.5 sm:right-2 sm:top-2 sm:gap-2 [@media(max-height:500px)]:gap-1.5",children:[u,I.jsx("button",{onClick:n,className:vo,title:e?r.unmute:r.mute,"aria-label":e?r.unmute:r.mute,children:e?I.jsx(KS,{className:"h-4 w-4 text-rose-400 sm:h-5 sm:w-5"}):I.jsx($p,{className:"h-4 w-4 text-emerald-400 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:a,className:vo,title:r.settings,"aria-label":r.settings,children:I.jsx(tL,{className:"h-4 w-4 text-cyan-300 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:o,className:vo,title:r.help,"aria-label":r.help,children:I.jsx(P5,{className:"h-4 w-4 text-amber-300 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:c,className:vo,title:r.fullscreen,"aria-label":r.fullscreen,children:I.jsx(j5,{className:"h-4 w-4 text-sky-200 sm:h-5 sm:w-5"})})]}),FL=({t:r,lang:e,onLangChange:n,soundMuted:a,onToggleSound:o,onOpenSettings:c,onOpenHelp:u,onFullscreen:d,onPlay:m})=>I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"pointer-events-none fixed inset-0 z-30 bg-gradient-to-b from-[#050b14]/30 via-[#0b1520]/22 to-[#050b14]/35"}),I.jsxs("div",{className:"pointer-events-none fixed inset-0 z-40 animate-in fade-in duration-500",children:[I.jsx("div",{className:"pointer-events-auto absolute left-1.5 top-1.5 z-10 flex items-center gap-1.5 sm:left-2 sm:top-2 sm:gap-2 [@media(max-height:500px)]:gap-1.5",children:I.jsx(BL,{lang:e,onChange:n})}),I.jsx(nM,{t:r,soundMuted:a,onToggleSound:o,onOpenSettings:c,onOpenHelp:u,onFullscreen:d}),I.jsx("div",{className:"menu-title pointer-events-none absolute inset-x-4 top-[8%] text-center [@media(max-height:500px)]:top-[3.0rem]",children:I.jsxs("h1",{className:"font-freckle leading-[0.85] tracking-wide",children:[I.jsx("span",{className:"block drop-shadow-[0px_0px_8px_rgba(86,250,200,0.9)] text-transparent text-[6rem] bg-clip-text bg-gradient-to-b from-[#a8c8ea] via-[#7fe6b1] to-[#4ade80] sm:text-[11rem] [@media(max-height:500px)]:text-[6rem] [@media(max-width:500px)]:mt-1",children:r.appName}),I.jsx("span",{className:"block mt-1 drop-shadow-[0px_0px_4px_rgba(86,250,200,0.9)] whitespace-nowrap text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#86efac] via-[#4ade80] to-[#0e6e23] sm:text-6xl [@media(max-height:500px)]:text-4xl [@media(max-height:500px)]:mt-1",children:r.appSubtitle})]})}),I.jsxs("div",{className:"pointer-events-auto absolute left-1/2 top-[62%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center [@media(max-height:500px)]:top-[68%]",children:[I.jsx("button",{onClick:m,className:"group relative shadow-[0_0_20px_#FBBF24] flex h-15 w-15 items-center justify-center rounded-full bg-amber-400 text-[#a27c18] transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-24 sm:w-24 [@media(max-height:500px)]:h-12 [@media(max-height:500px)]:w-12","aria-label":r.menuPlayAria,children:I.jsx(J5,{className:"ml-1 h-10 w-10 fill-current transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12 [@media(max-height:500px)]:ml-0.5 [@media(max-height:500px)]:h-6 [@media(max-height:500px)]:w-6"})}),I.jsx("span",{className:"mt-6 font-freckle text-2xl text-shadow-[0_0_20px_#FBBF24] tracking-[0.3em] text-amber-400 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:mt-2 [@media(max-height:500px)]:text-base",children:r.menuPlay})]}),I.jsx("span",{className:"font-yarin pointer-events-auto  text-2xl absolute bottom-5 left-1/2 -translate-x-1/2 text-center z-index:1000 text-shadow-[0_0_20px_#9aa] text-[#9aa] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:bottom-1 [@media(max-height:500px)]:text-xs",children:I.jsx("a",{href:"https://www.facebook.com/profile.php?id=1795933173",target:"_blank",rel:"noopener noreferrer",className:"display:block hover:cursor-pointer z-index:1000",children:r.menuCredits})})]})]}),zL=({t:r,levelNum:e,progress:n,onSelect:a})=>{const o=VS(e,n),c=n.completedLevels.includes(e),u=e===n.unlockedLevel,d=n.bestScores?.[e],m=o?c?"bg-gradient-to-b from-[#86efac] to-[#56af7c] text-[#0e4a6e] hover:scale-110":u?"bg-gradient-to-b from-[#7fd496] to-amber-400 text-[#0e4a4e] animate-pulse hover:scale-110":"bg-gradient-to-b from-[#0e4a6e]/80 to-[#4ade80]/60 text-[#86efac] hover:scale-110":"bg-[#0e4a6e]/50 text-white/30 cursor-not-allowed";return I.jsxs("button",{disabled:!o,onClick:()=>a(e),className:`group relative aspect-square flex flex-col items-center justify-center rounded-xl font-freckle tracking-wide transition-all shadow-[0_6px_20px_rgba(0,0,0,0.6)] ${m}`,children:[I.jsx("span",{className:"text-base sm:text-4xl leading-none",children:e}),c&&d?I.jsxs("div",{className:"text-xl sm:text-xl leading-snug opacity-90",children:[I.jsxs("div",{children:[d.jumps," ",r.bestJumps]}),I.jsx("div",{children:sf(d.timeSec)})]}):o?I.jsx("div",{className:"mt-1 text-2xl text-[#0e4a4e] uppercase tracking-wider",children:u?r.levelNew:r.levelPlay}):I.jsx("div",{className:"mt-1 text-base flex justify-center",children:I.jsx(qS,{className:"h-7 w-7"})})]})},HL=({t:r,progress:e,onBackToMenu:n,onSelectLevel:a})=>I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"pointer-events-none fixed inset-0 z-30"}),I.jsx("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 overflow-y-auto [@media(max-height:500px)]:p-2",children:I.jsxs("div",{className:"relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-4xl bg-gradient-to-b from-[#4eaa9e] to-[#153e2a] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",children:[I.jsxs("div",{className:"flex items-center justify-between mb-5",children:[I.jsx("h2",{className:"font-freckle text-3xl text-[#86efac] drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] tracking-wide",children:r.selectLevel}),I.jsx("button",{onClick:n,className:"flex h-12 w-12 items-center justify-center rounded-full bg-[#0e4a6e]/85 text-white shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-transform backdrop-blur-sm","aria-label":r.backToMenu,title:r.backToMenu,children:I.jsx(tf,{className:"h-6 w-6 text-[#a8c8ea]"})})]}),I.jsx("p",{className:"font-freckle text-xl text-[#b8d8fa] mb-5 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:r.selectHint}),I.jsx("div",{className:"grid grid-cols-5 gap-3 sm:gap-4",children:ga.map((o,c)=>I.jsx(zL,{t:r,levelNum:c+1,progress:e,onSelect:a},c+1))}),I.jsxs("div",{className:"mt-6 flex items-center justify-between font-freckle text-lg text-[#a8c8ea] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:[I.jsxs("span",{children:[r.completed," ",e.completedLevels.length,"/",_a]}),I.jsxs("span",{children:[r.upTo," ",Math.min(e.unlockedLevel,_a)]})]})]})})]}),ip=({icon:r,color:e,children:n})=>I.jsxs("div",{className:`flex items-center gap-3 text-4xl tracking-wide ${e} [@media(max-height:500px)]:gap-1.5 [@media(max-height:500px)]:text-base sm:text-3xl`,children:[r,I.jsx("span",{children:n})]}),ap="h-8 w-8 [@media(max-height:500px)]:h-4 [@media(max-height:500px)]:w-4 sm:h-6 sm:w-6",GL=({t:r,currentLevel:e,towerHeight:n,playerLevel:a,gemsCollected:o,totalGems:c,score:u,displayTime:d,soundMuted:m,onToggleSound:p,onRestart:g,onBackToMenu:x,onOpenSettings:_,onOpenHelp:M,onFullscreen:v})=>I.jsxs("header",{className:"hud-header pointer-events-none fixed inset-0 z-30",children:[I.jsxs("div",{className:"font-freckle absolute left-1.5 top-1.5 sm:left-2 sm:top-2",children:[I.jsxs("div",{className:"text-lg sm:text-4xl tracking-wider text-[#86efac] [@media(max-height:500px)]:text-base",children:[r.hudTower," ",e," ",I.jsxs("span",{className:"text-[#4ade80]/90",children:["/ ",_a]})]}),I.jsxs("div",{className:"text-lg sm:text-4xl tracking-wider text-[#7fd4e6] [@media(max-height:500px)]:text-base",children:[r.hudFloor," ",a," ",I.jsxs("span",{className:"text-[#7fd4e6]/90",children:["/ ",n]})]})]}),I.jsxs("div",{className:"hud-score pointer-events-auto flex flex-row flex-nowrap items-center gap-4 whitespace-nowrap font-freckle",children:[I.jsxs(ip,{icon:I.jsx(Am,{className:`${ap} fill-[#4ade80]`}),color:"text-[#86efac]",children:[o,I.jsxs("span",{className:"text-[#4ade80]/90",children:[" / ",c]})]}),I.jsx(ip,{icon:I.jsx(B5,{className:ap}),color:"text-[#7fd4e6]",children:sf(d)}),I.jsx(ip,{icon:I.jsx(G5,{className:ap}),color:"text-[#a8c8ea]",children:u})]}),I.jsx(nM,{t:r,soundMuted:m,onToggleSound:p,onOpenSettings:_,onOpenHelp:M,onFullscreen:v,leadingButtons:I.jsxs(I.Fragment,{children:[I.jsx("button",{onClick:g,className:vo,title:r.restartLevel,children:I.jsx(nf,{className:"h-4 w-4 text-amber-400 sm:h-5 sm:w-5"})}),I.jsx("button",{onClick:x,className:vo,title:r.backToMenu,children:I.jsx(tf,{className:"h-4 w-4 text-cyan-400 sm:h-5 sm:w-5"})})]})})]}),kL=()=>/iPhone|iPod/i.test(navigator.userAgent),VL=()=>"standalone"in navigator&&navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches,YL=async()=>{const r=document,e=document.documentElement,n=kL();if(n&&VL())return"already-pwa";const a=document.fullscreenElement??r.webkitFullscreenElement;try{return a?(document.exitFullscreen?await document.exitFullscreen():r.webkitExitFullscreen?await r.webkitExitFullscreen.call(document):r.mozCancelFullScreen&&await r.mozCancelFullScreen.call(document),"ok"):e.requestFullscreen?(await e.requestFullscreen({navigationUI:"hide"}),"ok"):e.webkitRequestFullscreen?(await e.webkitRequestFullscreen.call(e),"ok"):e.mozRequestFullScreen?(await e.mozRequestFullScreen.call(e),"ok"):e.msRequestFullscreen?(await e.msRequestFullscreen.call(e),"ok"):n?"ios-blocked":"ok"}catch{return n?"ios-blocked":"ok"}},XL=()=>{const[r,e]=dt.useState(0),[n,a]=dt.useState(!1),[o,c]=dt.useState(0),u=dt.useRef(0),d=dt.useRef(void 0);return dt.useEffect(()=>{if(r===0)return;d.current&&(clearTimeout(d.current),d.current=void 0);const p=performance.now()-u.current,g=Math.max(0,1e3-p);return d.current=setTimeout(()=>{a(!1),d.current=setTimeout(()=>e(0),300)},g),()=>{d.current&&(clearTimeout(d.current),d.current=void 0)}},[r]),{loadingKey:r,loadingVisible:n,loadingGemsCount:o,trigger:p=>{c(p),u.current=performance.now(),e(g=>g+1),a(!0)}}},WL=()=>{const[r,e]=dt.useState(0),n=dt.useRef({startedAt:0,finalTime:0,running:!1}),a=()=>{n.current.startedAt=performance.now(),n.current.running=!0},o=()=>{n.current.running&&e((performance.now()-n.current.startedAt)/1e3)},c=()=>(n.current.running&&(n.current.finalTime=(performance.now()-n.current.startedAt)/1e3,n.current.running=!1),n.current.finalTime),u=()=>{n.current={startedAt:0,finalTime:0,running:!1},e(0)};return{displayTime:n.current.running?r:n.current.finalTime,isRunning:()=>n.current.running,hasFinalTime:()=>n.current.finalTime!==0,finalTime:()=>n.current.finalTime,start:a,tick:o,stop:c,reset:u}},qL=["playing","win","gameover","gamecomplete"];function jL(){const r=dt.useRef(null),e=dt.useRef(null),[n,a]=dt.useState("menu"),o=dt.useRef("menu");dt.useEffect(()=>{o.current=n},[n]);const[c,u]=dt.useState(()=>_5()),d=g5[c],m=dt.useCallback(we=>{u(we),x5(we)},[]);dt.useEffect(()=>{document.documentElement.lang=c,document.title=d.pageTitle},[c,d]);const[p,g]=dt.useState(()=>{const we=LR();return Ht.setSfxEnabled(we.sfxEnabled),Ht.setMusicEnabled(we.musicEnabled),{cullingEnabled:!0,simulatedFpsThrottle:0,filterMode:"crisp",renderScale:1,soundMuted:!0,sfxEnabled:we.sfxEnabled,musicEnabled:we.musicEnabled}}),x=dt.useRef(p);dt.useEffect(()=>{x.current=p},[p]);const[_,M]=dt.useState({level:0,score:0,gemsCollected:0,totalGems:ga[0].gems.length,jumps:0,elapsedTime:0,status:"running"}),[v,A]=dt.useState(!1),[y,S]=dt.useState(!1),[R,U]=dt.useState(!1),[C,O]=dt.useState(ga[0].towerHeight),[N,B]=dt.useState(1),T=dt.useRef(1);dt.useEffect(()=>{T.current=N},[N]);const[P,Y]=dt.useState(()=>xo()),V=XL(),W=WL(),pe=dt.useRef(0),[se,J]=dt.useState(()=>bv(typeof window>"u"?1280:window.innerWidth,typeof window>"u"?800:window.innerHeight)),F=dt.useCallback(we=>{const Ye=r.current;if(!Ye)return null;e.current&&(e.current.dispose(),e.current=null);const Qe=new $R(Ye,we);return e.current=Qe,O(Qe.towerHeight),M(qe=>({...qe,totalGems:Qe.level.gems.length})),Qe.config={...x.current},Qe.applyCanvasFilter(),Qe.setRenderResolution(se.width,se.height),Qe.onPlayerStateUpdate=qe=>{M({level:Math.max(0,Math.min(Qe.towerHeight,Math.floor(qe.y))),score:qe.score,gemsCollected:qe.gemsCollected,totalGems:qe.totalGems,jumps:qe.jumpCount,elapsedTime:qe.elapsedTime,status:qe.status})},Qe.onGameStatusChange=qe=>{if(M(Ut=>({...Ut,status:qe})),qe!=="gameover"&&qe!=="win")return;const Dt=W.stop();if(qe==="win"){pe.current+=Dt;const Ut=Qe.playerState,an=Ut.gemsCollected>=Ut.totalGems,Q=m5(T.current,an,Ut.jumpCount,Dt,_a);Y(Q),T.current>=_a?a(an?"gamecomplete":"win"):a("win")}else a("gameover")},Qe},[]);dt.useEffect(()=>{const we=Nv(xo()),Ye=F(ga[we]);return Ye&&Ye.setSceneMode("menu"),()=>{e.current?.dispose(),e.current=null}},[]),dt.useEffect(()=>{if(e.current)if(n==="menu"||n==="levelSelect"){const we=Nv(xo());if(e.current.level.id===ga[we].id)e.current.setSceneMode("menu");else{const Qe=F(ga[we]);Qe&&Qe.setSceneMode("menu")}}else n==="playing"&&e.current.setSceneMode("play")},[n,P,F]),dt.useEffect(()=>{n==="playing"?Ht.playMusic("game"):n==="win"||n==="gameover"?Ht.stopMusic():Ht.playMusic("menu")},[n]),dt.useEffect(()=>{const we=()=>Ht.resume(!0),Ye=()=>Ht.setPageHidden(document.visibilityState==="hidden"),Qe=()=>Ht.setPageHidden(!0),qe=()=>Ht.setPageHidden(!1);return window.addEventListener("pointerdown",we,{passive:!0,capture:!0}),window.addEventListener("keydown",we,{capture:!0}),document.addEventListener("visibilitychange",Ye),window.addEventListener("pagehide",Qe),window.addEventListener("pageshow",qe),()=>{window.removeEventListener("pointerdown",we,{capture:!0}),window.removeEventListener("keydown",we,{capture:!0}),document.removeEventListener("visibilitychange",Ye),window.removeEventListener("pagehide",Qe),window.removeEventListener("pageshow",qe)}},[]),dt.useEffect(()=>{let we=0;const Ye=()=>{if(we=requestAnimationFrame(Ye),o.current!=="playing"||!e.current)return;const Qe=e.current;if(Qe.playerState.status!=="running")return;const qe=Qe.input.left||Qe.input.right||Qe.input.up||Qe.input.jumpQueued;!W.isRunning()&&!W.hasFinalTime()&&qe&&W.start(),W.tick()};return we=requestAnimationFrame(Ye),()=>cancelAnimationFrame(we)},[]),dt.useEffect(()=>{const we=()=>{const Ye=bv(window.innerWidth,window.innerHeight);J(Qe=>Qe.id===Ye.id?Qe:Ye)};return we(),window.addEventListener("resize",we),window.addEventListener("orientationchange",we),()=>{window.removeEventListener("resize",we),window.removeEventListener("orientationchange",we)}},[]),dt.useEffect(()=>{e.current?.setRenderResolution(se.width,se.height)},[se]),dt.useEffect(()=>{const we=document.getElementById("loader"),Ye=setTimeout(()=>{we&&(we.style.display="none")},3e3);return n==="menu"&&window.__fontsLoaded&&(we&&(we.style.display="none"),clearTimeout(Ye)),()=>clearTimeout(Ye)},[n]);const q=dt.useCallback(we=>{const Ye=x.current,Qe=typeof we=="function"?we(Ye):we,qe={...Ye,...Qe};x.current=qe,qe.sfxEnabled!==Ye.sfxEnabled&&Ht.setSfxEnabled(qe.sfxEnabled),qe.musicEnabled!==Ye.musicEnabled&&Ht.setMusicEnabled(qe.musicEnabled),qe.soundMuted!==Ye.soundMuted&&Ht.setMuted(qe.soundMuted),(qe.sfxEnabled!==Ye.sfxEnabled||qe.musicEnabled!==Ye.musicEnabled)&&DR({sfxEnabled:qe.sfxEnabled,musicEnabled:qe.musicEnabled}),e.current&&(e.current.config=qe,Qe.filterMode!==void 0&&e.current.applyCanvasFilter(),Qe.renderScale!==void 0&&e.current.setRenderResolution(se.width,se.height)),g(qe)},[se]),ne=async()=>{await YL()==="ios-blocked"&&U(!0)},le=(we,Ye={})=>{const Qe=ga[we-1];m2.flushSync(()=>{V.trigger(Qe.gems.length),Ye.changeScreenImmediately&&a("playing")}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const qe=F(Qe);qe&&(qe.restartGame(),qe.setSceneMode("play")),W.reset(),Ye.changeScreenImmediately||a("playing")})})},E=()=>{Y(xo()),a("levelSelect")},k=we=>{VS(we,xo())&&(B(we),le(we))},ae=()=>{B(1),pe.current=0,le(1)},ye=()=>{e.current?.restartGame(),W.reset(),a("playing")},Ee=()=>{const we=N+1;if(we>_a){a("gamecomplete");return}B(we),le(we,{changeScreenImmediately:!0})},K=()=>{B(1),pe.current=0,a("menu")},ie=we=>{!e.current||o.current!=="playing"||we(e.current)},me=we=>ie(Ye=>{Ye.input.left=we}),Ce=we=>ie(Ye=>{Ye.input.right=we}),ke=we=>ie(Ye=>{we&&!Ye.input.up&&(Ye.input.jumpQueued=!0),Ye.input.up=we}),Ne=()=>ie(we=>{we.input.doorQueued=!0}),ut=dt.useCallback(()=>q(we=>({soundMuted:!we.soundMuted})),[q]),nt=()=>A(!0),Ve=()=>S(!0),ct=qL.includes(n);return I.jsxs("main",{className:"relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#050b14] font-freckle text-slate-100 select-none",children:[I.jsx("div",{className:`relative overflow-hidden transition-all duration-700 ${p.filterMode==="crt"?"crt-overlay":""} `,style:{width:"100vw",height:"100vh",filter:n==="menu"||n==="levelSelect"?"blur(1.5px) brightness(0.72)":"none"},children:I.jsx("div",{ref:r,className:`absolute inset-0 transition-all duration-700 ${p.filterMode==="crisp"?"rendering-pixelated":""}`,style:{display:"flex",alignItems:"center",justifyContent:"center"}})}),n==="menu"&&I.jsx(FL,{t:d,lang:c,onLangChange:m,soundMuted:p.soundMuted,onToggleSound:ut,onOpenSettings:nt,onOpenHelp:Ve,onFullscreen:ne,onPlay:E}),n==="levelSelect"&&I.jsx(HL,{t:d,progress:P,onBackToMenu:K,onSelectLevel:k}),ct&&I.jsx(GL,{t:d,currentLevel:N,towerHeight:C,playerLevel:_.level,gemsCollected:_.gemsCollected,totalGems:_.totalGems,score:_.score,displayTime:W.displayTime,soundMuted:p.soundMuted,onToggleSound:ut,onRestart:ye,onBackToMenu:K,onOpenSettings:nt,onOpenHelp:Ve,onFullscreen:ne}),n==="playing"&&I.jsx(gL,{t:d,onMoveLeft:me,onMoveRight:Ce,onJump:ke,onDoor:Ne}),R&&I.jsx(NL,{t:d,onClose:()=>U(!1)}),I.jsx(bL,{t:d,config:p,onConfigChange:q,isOpen:v,onClose:()=>A(!1)}),y&&I.jsx(DL,{t:d,towerHeight:C,totalLevels:_a,onClose:()=>S(!1)}),n==="win"&&I.jsx(AL,{t:d,score:_.score,gems:_.gemsCollected,totalGems:_.totalGems,jumps:_.jumps,timeSec:W.finalTime(),towerHeight:C,levelNumber:N,totalLevels:_a,onRestart:ye,onBackToMenu:K,onNextLevel:Ee}),n==="gamecomplete"&&I.jsx(RL,{t:d,score:_.score,gems:_.gemsCollected,totalGems:_.totalGems,jumps:_.jumps,totalTime:pe.current,levelsCompleted:_a,onRestart:ae,onBackToMenu:K}),n==="gameover"&&I.jsx(CL,{t:d,score:_.score,level:_.level,towerHeight:C,onRestart:ye,onBackToMenu:K}),V.loadingKey>0&&I.jsx(LL,{t:d,visible:V.loadingVisible,levelNumber:N,gemsCount:V.loadingGemsCount})]})}p2.createRoot(document.getElementById("root")).render(I.jsx(dt.StrictMode,{children:I.jsx(jL,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
