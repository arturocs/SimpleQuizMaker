import{ac as N,ad as $,ae as z,F as y,af as V,x as P,aa as c,$ as m,ag as T,t as Z,ah as H,ai as W,G as J,w as Q,p as q,h as X,W as k,z as ee,A as re,c as ne,s as U,B as Y,o as C,C as K,d as ae,aj as ie,ak as te,a5 as M,y as se,al as G,am as fe,V as j,ab as p,an as ue,ao as le,U as de,ap as _e,aq as ve,E as ce,ar as oe}from"./CLXmmNX4.js";function S(e,n=null,h){if(typeof e!="object"||e===null||N in e)return e;const _=W(e);if(_!==$&&_!==z)return e;var s=new Map,d=J(e),o=y(0);d&&s.set("length",y(e.length));var g;return new Proxy(e,{defineProperty(f,r,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&H();var t=s.get(r);return t===void 0?(t=y(a.value),s.set(r,t)):m(t,S(a.value,g)),!0},deleteProperty(f,r){var a=s.get(r);if(a===void 0)r in f&&s.set(r,y(c));else{if(d&&typeof r=="string"){var t=s.get("length"),i=Number(r);Number.isInteger(i)&&i<t.v&&m(t,i)}m(a,c),F(o)}return!0},get(f,r,a){var v;if(r===N)return e;var t=s.get(r),i=r in f;if(t===void 0&&(!i||(v=T(f,r))!=null&&v.writable)&&(t=y(S(i?f[r]:c,g)),s.set(r,t)),t!==void 0){var u=P(t);return u===c?void 0:u}return Reflect.get(f,r,a)},getOwnPropertyDescriptor(f,r){var a=Reflect.getOwnPropertyDescriptor(f,r);if(a&&"value"in a){var t=s.get(r);t&&(a.value=P(t))}else if(a===void 0){var i=s.get(r),u=i==null?void 0:i.v;if(i!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(f,r){var u;if(r===N)return!0;var a=s.get(r),t=a!==void 0&&a.v!==c||Reflect.has(f,r);if(a!==void 0||Z!==null&&(!t||(u=T(f,r))!=null&&u.writable)){a===void 0&&(a=y(t?S(f[r],g):c),s.set(r,a));var i=P(a);if(i===c)return!1}return t},set(f,r,a,t){var R;var i=s.get(r),u=r in f;if(d&&r==="length")for(var v=a;v<i.v;v+=1){var w=s.get(v+"");w!==void 0?m(w,c):v in f&&(w=y(c),s.set(v+"",w))}i===void 0?(!u||(R=T(f,r))!=null&&R.writable)&&(i=y(void 0),m(i,S(a,g)),s.set(r,i)):(u=i.v!==c,m(i,S(a,g)));var b=Reflect.getOwnPropertyDescriptor(f,r);if(b!=null&&b.set&&b.set.call(t,a),!u){if(d&&typeof r=="string"){var x=s.get("length"),E=Number(r);Number.isInteger(E)&&E>=x.v&&m(x,E+1)}F(o)}return!0},ownKeys(f){P(o);var r=Reflect.ownKeys(f).filter(i=>{var u=s.get(i);return u===void 0||u.v!==c});for(var[a,t]of s)t.v!==c&&!(a in f)&&r.push(a);return r},setPrototypeOf(){V()}})}function F(e,n=1){m(e,e.v+n)}function ye(e,n,h=!1){q&&X();var _=e,s=null,d=null,o=c,g=h?k:0,f=!1;const r=(t,i=!0)=>{f=!0,a(i,t)},a=(t,i)=>{if(o===(o=t))return;let u=!1;if(q){const v=_.data===ee;!!o===v&&(_=re(),ne(_),U(!1),u=!0)}o?(s?Y(s):i&&(s=C(()=>i(_))),d&&K(d,()=>{d=null})):(d?Y(d):i&&(d=C(()=>i(_))),s&&K(s,()=>{s=null})),u&&U(!0)};Q(()=>{f=!1,n(r),f||a(null,null)},g),q&&(_=ae)}let O=!1;function be(e){var n=O;try{return O=!1,[e(),O]}finally{O=n}}const he={get(e,n){if(!e.exclude.includes(n))return P(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,h){return n in e.special||(e.special[n]=Pe({get[n](){return e.props[n]}},n,G)),e.special[n](h),p(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),p(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function me(e,n){return new Proxy({props:e,exclude:n,special:{},version:y(0)},he)}function Pe(e,n,h,_){var B;var s=(h&ve)!==0,d=!de||(h&_e)!==0,o=(h&ue)!==0,g=(h&oe)!==0,f=!1,r;o?[r,f]=be(()=>e[n]):r=e[n];var a=N in e||le in e,t=o&&(((B=T(e,n))==null?void 0:B.set)??(a&&n in e&&(l=>e[n]=l)))||void 0,i=_,u=!0,v=!1,w=()=>(v=!0,u&&(u=!1,g?i=j(_):i=_),i);r===void 0&&_!==void 0&&(t&&d&&ie(),r=w(),t&&t(r));var b;if(d)b=()=>{var l=e[n];return l===void 0?w():(u=!0,v=!1,l)};else{var x=(s?M:se)(()=>e[n]);x.f|=te,b=()=>{var l=P(x);return l!==void 0&&(i=void 0),l===void 0?i:l}}if((h&G)===0)return b;if(t){var E=e.$$legacy;return function(l,I){return arguments.length>0?((!d||!I||E||f)&&t(I?b():l),l):b()}}var R=!1,D=ce(r),A=M(()=>{var l=b(),I=P(D);return R?(R=!1,I):D.v=l});return s||(A.equals=fe),function(l,I){if(arguments.length>0){const L=I?P(A):d&&o?S(l):l;return A.equals(L)||(R=!0,m(D,L),v&&i!==void 0&&(i=L),j(()=>P(A))),l}return P(A)}}export{S as a,ye as i,me as l,Pe as p};
