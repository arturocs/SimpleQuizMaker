var Pn=Array.isArray,$t=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,zt=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const jn=()=>{};function Bn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,Q=8,ot=16,k=32,b=64,G=128,E=256,K=512,d=1024,R=2048,P=4096,C=8192,tt=16384,Jt=32768,gt=65536,Hn=1<<17,Wt=1<<19,Tt=1<<20,vt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function mt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Gn(t,n){return t!==n}function At(t){return!Xt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Jn(){nt=!0}const Wn=1,Xn=2,Qn=16,tr=1,nr=2,rr=4,er=8,ar=16,lr=4,sr=1,ur=2,ln="[",sn="[!",un="]",xt={},or=Symbol(),fr="http://www.w3.org/1999/xhtml";function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function pt(t){i=t}function ir(t,n=!1,r){var e=i={p:i,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};nt&&!n&&(i.l={s:null,u:null,r1:[],r2:ft(!1)}),En(()=>{e.d=!0})}function _r(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];J(a.effect),z(a.reaction),bt(a.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return{}}function rt(){return!nt||i!==null&&i.l===null}const L=new Map;function ft(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function cr(t){return on(ft(t))}function vr(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),nt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function on(t){return u!==null&&!w&&(u.f&y)!==0&&(m===null?xn([t]):m.push(t)),t}function fn(t,n){return u!==null&&!w&&rt()&&(u.f&(y|ot))!==0&&(m===null||!m.includes(t))&&an(),_n(t,n)}function _n(t,n){if(!t.equals(n)){var r=t.v;B?L.set(t,n):L.set(t,r),t.v=n,t.wv=Ht(),It(t,R),rt()&&o!==null&&(o.f&d)!==0&&(o.f&(k|b))===0&&(x===null?kn([t]):x.push(t))}return n}function pr(t,n=1){var r=Kt(t),e=n===1?r++:r--;return fn(t,r),e}function It(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,a=0;a<l;a++){var s=r[a],f=s.f;(f&R)===0&&(!e&&s===o||(A(s,n),(f&(d|E))!==0&&((f&y)!==0?It(s,P):at(s))))}}let O=!1;function hr(t){O=t}let g;function M(t){if(t===null)throw kt(),xt;return g=t}function dr(){return M(N(g))}function Er(t){if(O){if(N(g)!==null)throw kt(),xt;g=t}}function wr(t=1){if(O){for(var n=t,r=g;n--;)r=N(r);g=r}}function yr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,cn,vn,Rt,Dt;function gr(){if(ht===void 0){ht=window,cn=document,vn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Rt=ct(n,"firstChild").get,Dt=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return Rt.call(t)}function N(t){return Dt.call(t)}function Tr(t,n){if(!O)return st(t);var r=st(g);if(r===null)r=g.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function mr(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function Ar(t,n=1,r=!1){let e=O?g:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=lt();return e===null?l==null||l.after(s):e.before(s),M(s),s}return M(e),e}function xr(t){t.textContent=""}function Ot(t){var n=y|R,r=u!==null&&(u.f&y)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=Tt,{ctx:i,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function kr(t){const n=Ot(t);return n.equals=At,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function pn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function hn(t){var n,r=o;J(pn(t));try{St(t),n=Vt(t)}finally{J(r)}return n}function Nt(t){var n=hn(t),r=(I||(t.f&E)!==0)&&t.deps!==null?P:d;A(t,r),t.equals(n)||(t.v=n,t.wv=Ht())}function Ct(t){o===null&&u===null&&nn(),u!==null&&(u.f&E)!==0&&o===null&&tn(),B&&Qt()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=o,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{it(a),a.f|=Jt}catch(_){throw S(a),_}else n!==null&&at(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|G))===0;if(!s&&e&&(l!==null&&dn(a,l),u!==null&&(u.f&y)!==0)){var f=u;(f.effects??(f.effects=[])).push(a)}return a}function En(t){const n=F(Q,null,!1);return A(n,d),n.teardown=t,n}function Ir(t){Ct();var n=o!==null&&(o.f&k)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=bt(t);return e}}function Rr(t){return Ct(),wn(t)}function Dr(t){const n=F(b,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function bt(t){return F(yt,t,!1)}function wn(t){return F(Q,t,!0)}function Or(t,n=[],r=Ot){const e=n.map(r);return yn(()=>t(...e.map(Kt)))}function yn(t,n=0){return F(Q|ot|n,t,!0)}function Sr(t,n=!0){return F(Q|k,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=B,e=u;Et(!0),z(null);try{n.call(null)}finally{Et(r),z(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&b)!==0?r.parent=null:S(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&Wt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),X(t,0),A(t,tt);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Lt(t,r,!0),mn(r,()=>{S(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&gt)!==0||(e.f&k)!==0;Lt(e,n,a?r:!1),e=l}}}function Nr(t){Mt(t,!0)}function Mt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&d)===0&&(t.f^=d),H(t)&&(A(t,R),at(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&k)!==0;Mt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const An=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Y=[],j=[];function Yt(){var t=Y;Y=[],wt(t)}function jt(){var t=j;j=[],wt(t)}function Cr(t){Y.length===0&&queueMicrotask(Yt),Y.push(t)}function br(t){j.length===0&&An(jt),j.push(t)}function dt(){Y.length>0&&Yt(),j.length>0&&jt()}let V=!1,$=!1,Z=null,D=!1,B=!1;function Et(t){B=t}let q=[];let u=null,w=!1;function z(t){u=t}let o=null;function J(t){o=t}let m=null;function xn(t){m=t}let c=null,h=0,x=null;function kn(t){x=t}let Bt=1,W=0,I=!1;function Ht(){return++Bt}function H(t){var v;var n=t.f;if((n&R)!==0)return!0;if((n&P)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&K)!==0,f=e&&o!==null&&!I,_=r.length;if(s||f){var T=t,U=T.parent;for(l=0;l<_;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(T)))&&(a.reactions??(a.reactions=[])).push(T);s&&(T.f^=K),f&&U!==null&&(U.f&E)===0&&(T.f^=E)}for(l=0;l<_;l++)if(a=r[l],H(a)&&Nt(a),a.wv>t.wv)return!0}(!e||o!==null&&!I)&&A(t,d)}return!1}function In(t,n){for(var r=n;r!==null;){if((r.f&G)!==0)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw V=!1,t}function Rn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&G)===0)}function et(t,n,r,e){if(V){if(r===null&&(V=!1),Rn(n))throw t;return}r!==null&&(V=!0);{In(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&y)!==0?Ut(a,n,!1):n===a&&(r?A(a,R):(a.f&d)!==0&&A(a,P),at(a))}}function Vt(t){var _t;var n=c,r=h,e=x,l=u,a=I,s=m,f=i,_=w,T=t.f;c=null,h=0,x=null,I=(T&E)!==0&&(w||!D||u===null),u=(T&(k|b))===0?t:null,m=null,pt(t.ctx),w=!1,W++;try{var U=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(X(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!I)for(p=h;p<v.length;p++)((_t=v[p]).reactions??(_t.reactions=[])).push(t)}else v!==null&&h<v.length&&(X(t,h),v.length=h);if(rt()&&x!==null&&!w&&v!==null&&(t.f&(y|P|R))===0)for(p=0;p<x.length;p++)Ut(x[p],t);return l!==null&&W++,U}finally{c=n,h=r,x=e,u=l,I=a,m=s,pt(f),w=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(A(n,P),(n.f&(E|K))===0&&(n.f^=K),St(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function it(t){var n=t.f;if((n&tt)===0){A(t,d);var r=o,e=i,l=D;o=t,D=!0;try{(n&ot)!==0?gn(t):Ft(t),Pt(t);var a=Vt(t);t.teardown=typeof a=="function"?a:null,t.wv=Bt;var s=t.deps,f}catch(_){et(_,t,r,e||t.ctx)}finally{D=l,o=r}}}function On(){try{rn()}catch(t){if(Z!==null)et(t,Z,null);else throw t}}function Gt(){var t=D;try{var n=0;for(D=!0;q.length>0;){n++>1e3&&On();var r=q,e=r.length;q=[];for(var l=0;l<e;l++){var a=Nn(r[l]);Sn(a)}}}finally{$=!1,D=t,Z=null,L.clear()}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(tt|C))===0)try{H(e)&&(it(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function at(t){$||($=!0,queueMicrotask(Gt));for(var n=Z=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(b|k))!==0){if((r&d)===0)return;n.f^=d}}q.push(n)}function Nn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(k|b))!==0,a=l&&(e&d)!==0;if(!a&&(e&C)===0){if((e&yt)!==0)n.push(r);else if(l)r.f^=d;else{var s=u;try{u=r,H(r)&&it(r)}catch(T){et(T,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Cn(t){var n;for(dt();q.length>0;)$=!0,Gt(),dt();return n}async function Pr(){await Promise.resolve(),Cn()}function Kt(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){m!==null&&m.includes(t)&&en();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!I||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return r&&(l=t,H(l)&&Nt(l)),B&&L.has(t)?L.get(t):t.v}function Fr(t){var n=w;try{return w=!0,t()}finally{w=n}}const bn=-7169;function A(t,n){t.f=t.f&bn|n}function qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{fn as $,yr as A,Nr as B,Tn as C,_n as D,vr as E,ft as F,Pn as G,ln as H,C as I,Xn as J,Lt as K,mn as L,S as M,Wn as N,Qn as O,Tr as P,wr as Q,Er as R,Or as S,Ir as T,nt as U,Fr as V,gt as W,jn as X,mr as Y,Ar as Z,cr as _,N as a,cn as a0,Rr as a1,wt as a2,Bn as a3,qr as a4,Ot as a5,rt as a6,wn as a7,vt as a8,Ln as a9,Wt as aA,bt as aB,Cn as aC,Pr as aD,fr as aE,Zt as aF,Vn as aG,br as aH,ot as aI,Jt as aJ,lr as aK,Yn as aL,Mn as aa,zn as ab,or as ac,ct as ad,Zn as ae,zt as af,$n as ag,Hn as ah,rr as ai,At as aj,pr as ak,er as al,Un as am,nr as an,tr as ao,ar as ap,vn as aq,sr as ar,ur as as,Gn as at,Xt as au,Cr as av,z as aw,J as ax,u as ay,qn as az,xt as b,M as c,g as d,un as e,kt as f,st as g,dr as h,gr as i,Kn as j,xr as k,Fn as l,Dr as m,lt as n,Sr as o,O as p,ir as q,i as r,hr as s,o as t,_r as u,Jn as v,yn as w,Kt as x,kr as y,sn as z};
