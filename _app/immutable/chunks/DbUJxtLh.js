import{n as l,g as u,aq as h,t as m,ar as g,as as E,p as f,d as s,h as T,c as w}from"./hsMS1WzM.js";function p(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function x(r,t){var e=(t&g)!==0,_=(t&E)!==0,n,d=!r.startsWith("<!>");return()=>{if(f)return a(s,null),s;n===void 0&&(n=p(d?r:"<!>"+r),e||(n=u(n)));var o=_||h?document.importNode(n,!0):n.cloneNode(!0);if(e){var c=u(o),i=o.lastChild;a(c,i)}else a(o,o);return o}}function M(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(f)return a(s,null),s;if(!d){var o=p(n),c=u(o);d=u(c)}var i=d.cloneNode(!0);return a(i,i),i}}function L(r=""){if(!f){var t=l(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=l()),w(e)),a(e,e),e}function P(){if(f)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),a(t,e),r}function b(r,t){if(f){m.nodes_end=s,T();return}r!==null&&r.before(t)}const y="5";var v;typeof window<"u"&&((v=window.__svelte??(window.__svelte={})).v??(v.v=new Set)).add(y);export{a,b,P as c,L as d,M as n,x as t};
