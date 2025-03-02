import{c as R,b as k,t as z}from"../chunks/CEWXSXl-.js";import"../chunks/BOnbMMTX.js";import{q as T,Y as j,u as A,P as i,Q as D,R as e,Z as l,_ as S,S as Y,x as n,$ as v,a0 as Z}from"../chunks/CLXmmNX4.js";import{d as G,c as B,e as H}from"../chunks/V95zqkDf.js";import{l as K,b as U}from"../chunks/Daw9WvUf.js";import{e as W,i as X}from"../chunks/cQOsbrcr.js";import{C as $,P as tt,b as at,N as et}from"../chunks/D_OUl34e.js";import{p as V,i as it,a as _}from"../chunks/B0IYGepZ.js";import{g as ot}from"../chunks/CT8tkBbo.js";import{b as Q}from"../chunks/Dms0w2or.js";var st=(c,t)=>t(`${Q}/`),nt=(c,t)=>t(`${Q}/quiz_list`),rt=(c,t)=>t(`${Q}/quiz_time`),lt=z('<div class="modal modal-open"><div class="modal-box max-w-4xl w-11/12"><div class="flex items-center gap-3 mb-4"><!> <h3 class="font-bold text-lg">¡Pregunta guardada con éxito!</h3></div> <p class="py-4">¿Qué te gustaría hacer ahora?</p> <div class="modal-action flex flex-wrap gap-2"><button class="btn btn-primary">Crear otra pregunta</button> <button class="btn btn-outline">Ir al inicio</button> <button class="btn btn-outline">Ver lista de quizzes</button> <button class="btn btn-outline">Jugar quizzes</button></div></div></div>');function ct(c,t){T(t,!0);let d=V(t,"show",3,!1);function u(r){ot(r)}var o=R(),a=j(o);{var b=r=>{var m=lt(),x=i(m),g=i(x),N=i(g);$(N,{class:"text-success text-2xl"}),D(2),e(g);var q=l(g,4),h=i(q);h.__click=function(...y){var p;(p=t.onCreateNew)==null||p.apply(this,y)};var f=l(h,2);f.__click=[st,u];var w=l(f,2);w.__click=[nt,u];var C=l(w,2);C.__click=[rt,u],e(q),e(x),e(m),k(r,m)};it(a,r=>{d()&&r(b)})}k(c,o),A()}G(["click"]);function ut(c,t){v(t,_([...n(t),{text:"",isCorrect:!1}]))}function dt(c,t,d,u,o){if(t()){const a={questionText:n(d),options:n(u)};o(a)}}var vt=z('<div class="card w-full max-w-3xl bg-base-100  mx-auto"><div class="card-body"><h2 class="card-title text-2xl font-bold">Crear nueva pregunta</h2> <div class="form-control w-full pb-6"><label class="label" for="question-text"><span class="label-text font-medium">Enunciado de la pregunta:</span></label> <textarea id="question-text" placeholder="Escribe aquí el enunciado de la pregunta" rows="3" class="textarea textarea-bordered w-full"></textarea></div> <div class="mt-6"><h3 class="text-lg font-semibold mb-2">Opciones de respuesta</h3> <div class="space-y-3"></div> <button type="button" class="btn btn-success btn-sm mt-3"><!> Añadir opción</button></div> <div class="card-actions justify-end mt-6"><button type="button" class="btn btn-primary">Guardar pregunta</button></div></div></div> <!>',1);function mt(c,t){T(t,!0);let d=V(t,"initialQuestion",3,""),u=V(t,"initialOptions",19,()=>[]),o=S(_(d())),a=S(_(u().length>0?u():[{text:"",isCorrect:!1},{text:"",isCorrect:!1}])),b=_(K("questions",[])),r=S(!1);function m(s){b.value=[...b.value,s],v(r,!0)}function x(){return n(o).trim()!==""&&n(a).length>=2&&n(a).every(s=>s.text.trim()!=="")&&n(a).some(s=>s.isCorrect)}function g(s){v(a,_(n(a).filter((I,P)=>P!==s)))}function N(){v(o,""),v(a,_([{text:"",isCorrect:!1},{text:"",isCorrect:!1}])),v(r,!1)}function q(){v(r,!1)}var h=vt(),f=j(h),w=i(f),C=l(i(w),2),y=l(i(C),2);B(y),e(C);var p=l(C,2),O=l(i(p),2);W(O,21,()=>n(a),X,(s,I,P)=>{et(s,{get options(){return n(a)},get option(){return n(I)},currentOptionIndex:P,removeOption:g})}),e(O);var M=l(O,2);M.__click=[ut,a];var J=i(M);tt(J,{}),D(),e(M),e(p);var E=l(p,2),F=i(E);F.__click=[dt,x,o,a,m],e(E),e(w),e(f);var L=l(f,2);ct(L,{get show(){return n(r)},onCreateNew:N,onClose:q}),Y(s=>F.disabled=s,[()=>!x()]),at(y,()=>n(o),s=>v(o,s)),k(c,h),A()}G(["click"]);var bt=z('<meta name="description" content="Crea un nuevo cuestionario interactivo">'),ft=z('<div class="container mx-auto px-4 py-6 max-w-4xl"><main class="p-6 rounded-lg shadow-xl"><!></main> <footer class="mt-8"><div class="mt-6"><a class="btn btn-outline btn-sm">Volver al inicio</a></div></footer></div>');function zt(c){var t=ft();H(r=>{var m=bt();Z.title="Crear nuevo cuestionario | Simple Quiz Maker",k(r,m)});var d=i(t),u=i(d);mt(u,{}),e(d);var o=l(d,2),a=i(o),b=i(a);U(b,"href",`${Q??""}/`),e(a),e(o),e(t),k(c,t)}export{zt as component};
