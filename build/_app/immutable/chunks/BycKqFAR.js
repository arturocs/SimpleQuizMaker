import{n as J,b as h,t as k}from"./DbUJxtLh.js";import{P as c,Q as K,R as i,S as O,q as X,Z as g,u as Z,_ as A,T as N,$ as p,Y as U,x as f}from"./hsMS1WzM.js";import{s as Q}from"./Dg3ZSStG.js";import{l as R,i as L,p as V,a as P}from"./CMtDVnAk.js";import{e as W,i as $,X as tt}from"./Dhda27-m.js";import{d as j}from"./QaqKAikp.js";import{s as et,a as at,C as rt,r as st,c as T,d as it}from"./D5DtWYVZ.js";import{c as nt}from"./DCg5tNew.js";import"./ZYj2PoyX.js";var ot=J('<svg><!><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>');function B(d,t){const n=R(t,["children","$$slots","$$events","$$legacy"]),m=R(n,[]);var e=ot();let a;var l=c(e);et(l,t,"default",{}),K(),i(e),O(()=>a=at(e,a,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",...m,[rt]:{bi:!0,"bi-check-lg":!0}})),h(d,e)}function ct(d,t){const n=d.target;t.onSelectChange(n.checked)}var lt=k('<span class="text-success ml-2"><!></span>'),dt=k('<div class="flex items-center gap-2"><div><div class="flex items-center gap-2 w-full"><input type="checkbox" class="checkbox checkbox-primary shrink-0"> <span> </span> <!></div></div></div>');function ut(d,t){X(t,!0);function n(){return t.isSubmitted?t.isSelected&&t.option.isCorrect?"bg-success text-success-content":t.isSelected&&!t.option.isCorrect?"bg-error text-error-content":!t.isSelected&&t.option.isCorrect?"bg-warning text-warning-content":"":""}function m(){return!t.isSubmitted||!t.isSelected&&!t.option.isCorrect?"":"border-none"}var e=dt(),a=c(e),l=c(a),o=c(l);st(o),o.__change=[ct,t];var v=g(o,2),x=c(v,!0);i(v);var w=g(v,2);{var y=_=>{var u=lt(),q=c(u);B(q,{}),i(u),h(_,u)};L(w,_=>{t.isSubmitted&&t.option.isCorrect&&_(y)})}i(l),i(a),i(e),O((_,u)=>{T(a,1,_),it(o,t.isSelected),o.disabled=t.isSubmitted,T(v,1,u),Q(x,t.option.text)},[()=>`form-control flex-1 w-full rounded-lg transition-colors px-5 ${n()}`,()=>`py-2 px-3 block border rounded-md bg-inherit w-full break-words whitespace-normal ${m()}`]),h(d,e),Z()}j(["change"]);function vt(d,t,n,m,e,a,l){p(t,!0);const o=n.question.options.every((v,x)=>f(m)[x]===v.isCorrect);e(o),o?p(a,"¡Correcto! Has seleccionado todas las respuestas correctas."):p(a,"Incorrecto. Revisa tus selecciones."),l("answered",o)}function ft(d,t){t()}var mt=k("<div><div><!> <span> </span></div></div>"),_t=k('<button class="btn btn-primary">Comprobar respuesta</button>'),bt=k('<button class="btn btn-outline">Intentar de nuevo</button>'),gt=k('<h2 class="card-title text-2xl font-bold mb-4">Pregunta</h2> <div class="mb-6"><p class="text-lg"> </p></div> <div class="space-y-3"></div> <!> <div class="card-actions justify-end mt-6"><!></div>',1);function Lt(d,t){X(t,!0);let n=V(t,"isCorrect",15,!1);const m=nt();let e=A(P([])),a=A(!1),l=A("");N(()=>{o()});function o(){p(e,P(Array(t.question.options.length).fill(!1))),p(a,!1),p(l,""),n(!1)}function v(r,s){p(e,P(f(e).map((b,S)=>S===r?s:b)))}var x=gt(),w=g(U(x),2),y=c(w),_=c(y,!0);i(y),i(w);var u=g(w,2);W(u,21,()=>t.question.options,$,(r,s,b)=>{ut(r,{get option(){return f(s)},get isSelected(){return f(e)[b]},get isSubmitted(){return f(a)},onSelectChange:S=>v(b,S)})}),i(u);var q=g(u,2);{var D=r=>{var s=mt(),b=c(s),S=c(b);{var Y=C=>{B(C,{})},F=C=>{tt(C,{})};L(S,C=>{n()?C(Y):C(F,!1)})}var I=g(S,2),G=c(I,!0);i(I),i(b),i(s),O(()=>{T(s,1,`alert mt-4 ${n()?"alert-success":"alert-error"}`),Q(G,f(l))}),h(r,s)};L(q,r=>{f(l)&&r(D)})}var z=g(q,2),E=c(z);{var H=r=>{var s=_t();s.__click=[vt,a,t,e,n,l,m],h(r,s)},M=r=>{var s=bt();s.__click=[ft,o],h(r,s)};L(E,r=>{f(a)?r(M,!1):r(H)})}i(z),O(()=>Q(_,t.question.questionText)),h(d,x),Z()}j(["click"]);export{Lt as Q};
