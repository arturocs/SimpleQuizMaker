var K=Object.defineProperty;var z=r=>{throw TypeError(r)};var Q=(r,i,f)=>i in r?K(r,i,{enumerable:!0,configurable:!0,writable:!0,value:f}):r[i]=f;var P=(r,i,f)=>Q(r,typeof i!="symbol"?i+"":i,f),W=(r,i,f)=>i.has(r)||z("Cannot "+f);var C=(r,i,f)=>(W(r,i,"read from private field"),f?f.call(r):i.get(r)),H=(r,i,f)=>i.has(r)?z("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(r):i.set(r,f);import{p as S,h as X,aE as Z,af as y,aF as m,s as R,aG as x,aH as rr,_ as ir,x as fr,$ as sr,T as tr}from"./hsMS1WzM.js";import{f as ar,g as ur,d as er,j as lr,n as or,k as cr,m as nr}from"./QaqKAikp.js";import{a as hr}from"./CMtDVnAk.js";function Tr(r,i,f,s,t){var o;S&&X();var a=(o=i.$$slots)==null?void 0:o[f],e=!1;a===!0&&(a=i.children,e=!0),a===void 0||a(r,e?()=>s:s)}function G(r){var i,f,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var t=r.length;for(i=0;i<t;i++)r[i]&&(f=G(r[i]))&&(s&&(s+=" "),s+=f)}else for(f in r)r[f]&&(s&&(s+=" "),s+=f);return s}function vr(){for(var r,i,f=0,s="",t=arguments.length;f<t;f++)(r=arguments[f])&&(i=G(r))&&(s&&(s+=" "),s+=i);return s}function gr(r){return typeof r=="object"?vr(r):r??""}const U=[...` 	
\r\f \v\uFEFF`];function dr(r,i,f){var s=r==null?"":""+r;if(f){for(var t in f)if(f[t])s=s?s+" "+t:t;else if(s.length)for(var a=t.length,e=0;(e=s.indexOf(t,e))>=0;){var o=e+a;(e===0||U.includes(s[e-1]))&&(o===s.length||U.includes(s[o]))?s=(e===0?"":s.substring(0,e))+s.substring(o+1):e=o}}return s===""?null:s}function V(r,i=!1){var f=i?" !important;":";",s="";for(var t in r){var a=r[t];a!=null&&a!==""&&(s+=" "+t+": "+a+f)}return s}function $(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Ar(r,i){if(i){var f="",s,t;if(Array.isArray(i)?(s=i[0],t=i[1]):s=i,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,e=0,o=!1,A=[];s&&A.push(...Object.keys(s).map($)),t&&A.push(...Object.keys(t).map($));var c=0,b=-1;const N=r.length;for(var h=0;h<N;h++){var v=r[h];if(o?v==="/"&&r[h-1]==="*"&&(o=!1):a?a===v&&(a=!1):v==="/"&&r[h+1]==="*"?o=!0:v==='"'||v==="'"?a=v:v==="("?e++:v===")"&&e--,!o&&a===!1&&e===0){if(v===":"&&b===-1)b=h;else if(v===";"||h===N-1){if(b!==-1){var E=$(r.substring(c,b).trim());if(!A.includes(E)){v!==";"&&h++;var O=r.substring(c,h).trim();f+=" "+O+";"}}c=h+1,b=-1}}}}return s&&(f+=V(s)),t&&(f+=V(t,!0)),f=f.trim(),f===""?null:f}return r==null?null:String(r)}function br(r,i,f,s,t,a){var e=r.__className;if(S||e!==f){var o=dr(f,s,a);(!S||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):i?r.className=o:r.setAttribute("class",o)),r.__className=f}else if(a&&t!==a)for(var A in a){var c=!!a[A];(t==null||c!==!!t[A])&&r.classList.toggle(A,c)}return a}function M(r,i={},f,s){for(var t in f){var a=f[t];i[t]!==a&&(f[t]==null?r.style.removeProperty(t):r.style.setProperty(t,a,s))}}function Sr(r,i,f,s){var t=r.__style;if(S||t!==i){var a=Ar(i,s);(!S||a!==r.getAttribute("style"))&&(a==null?r.removeAttribute("style"):r.style.cssText=a),r.__style=i}else s&&(Array.isArray(s)?(M(r,f==null?void 0:f[0],s[0]),M(r,f==null?void 0:f[1],s[1],"important")):M(r,f,s));return s}const L=Symbol("class"),k=Symbol("style"),J=Symbol("is custom element"),Y=Symbol("is html");function Er(r){if(S){var i=!1,f=()=>{if(!i){if(i=!0,r.hasAttribute("value")){var s=r.value;T(r,"value",null),r.value=s}if(r.hasAttribute("checked")){var t=r.checked;T(r,"checked",null),r.checked=t}}};r.__on_r=f,rr(f),nr()}}function Ir(r,i){var f=w(r);f.checked!==(f.checked=i??void 0)&&(r.checked=i)}function _r(r,i){i?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function T(r,i,f,s){var t=w(r);S&&(t[i]=r.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&r.nodeName==="LINK")||t[i]!==(t[i]=f)&&(i==="loading"&&(r[x]=f),f==null?r.removeAttribute(i):typeof f!="string"&&q(r).includes(i)?r[i]=f:r.setAttribute(i,f))}function Cr(r,i,f,s,t=!1){var a=w(r),e=a[J],o=!a[Y];let A=S&&e;A&&R(!1);var c=i||{},b=r.tagName==="OPTION";for(var h in i)h in f||(f[h]=null);f.class?f.class=gr(f.class):f[L]&&(f.class=null),f[k]&&(f.style??(f.style=null));var v=q(r);for(const u in f){let l=f[u];if(b&&u==="value"&&l==null){r.value=r.__value="",c[u]=l;continue}if(u==="class"){var E=r.namespaceURI==="http://www.w3.org/1999/xhtml";br(r,E,l,s,i==null?void 0:i[L],f[L]),c[u]=l,c[L]=f[L];continue}if(u==="style"){Sr(r,l,i==null?void 0:i[k],f[k]),c[u]=l,c[k]=f[k];continue}var O=c[u];if(l!==O){c[u]=l;var N=u[0]+u[1];if(N!=="$$")if(N==="on"){const g={},_="$$"+u;let n=u.slice(2);var I=cr(n);if(ar(n)&&(n=n.slice(0,-7),g.capture=!0),!I&&O){if(l!=null)continue;r.removeEventListener(n,c[_],g),c[_]=null}if(l!=null)if(I)r[`__${n}`]=l,er([n]);else{let D=function(F){c[u].call(this,F)};c[_]=ur(n,r,D,g)}else I&&(r[`__${n}`]=void 0)}else if(u==="style")T(r,u,l);else if(u==="autofocus")lr(r,!!l);else if(!e&&(u==="__value"||u==="value"&&l!=null))r.value=r.__value=l;else if(u==="selected"&&b)_r(r,l);else{var d=u;o||(d=or(d));var j=d==="defaultValue"||d==="defaultChecked";if(l==null&&!e&&!j)if(a[u]=null,d==="value"||d==="checked"){let g=r;const _=i===void 0;if(d==="value"){let n=g.defaultValue;g.removeAttribute(d),g.defaultValue=n,g.value=g.__value=_?n:null}else{let n=g.defaultChecked;g.removeAttribute(d),g.defaultChecked=n,g.checked=_?n:!1}}else r.removeAttribute(u);else j||v.includes(d)&&(e||typeof l!="string")?r[d]=l:typeof l!="function"&&T(r,d,l)}}}return A&&R(!0),c}function w(r){return r.__attributes??(r.__attributes={[J]:r.nodeName.includes("-"),[Y]:r.namespaceURI===Z})}var B=new Map;function q(r){var i=B.get(r.nodeName);if(i)return i;B.set(r.nodeName,i=[]);for(var f,s=r,t=Element.prototype;t!==s;){f=m(s);for(var a in f)f[a].set&&i.push(a);s=y(s)}return i}var p;class Nr{constructor(i,f){H(this,p,ir());P(this,"key","");this.key=i,this.value=f;{const s=localStorage.getItem(i);s&&(this.value=this.deserialize(s))}tr(()=>{localStorage.setItem(this.key,this.serialize(this.value))})}get value(){return fr(C(this,p))}set value(i){sr(C(this,p),hr(i))}serialize(i){return JSON.stringify(i)}deserialize(i){return JSON.parse(i)}}p=new WeakMap;function $r(r,i){return new Nr(r,i)}export{L as C,Cr as a,T as b,br as c,Ir as d,$r as l,Er as r,Tr as s};
