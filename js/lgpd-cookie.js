(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function C(){}const V=t=>t;function X(t){return t()}function it(){return Object.create(null)}function w(t){t.forEach(X)}function O(t){return typeof t=="function"}function kt(t,e){return t!=t?e==e:t!==e}function xt(t){return Object.keys(t).length===0}const dt=typeof window<"u";let Y=dt?()=>window.performance.now():()=>Date.now(),Z=dt?t=>requestAnimationFrame(t):C;const M=new Set;function pt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&Z(pt)}function tt(t){let e;return M.size===0&&Z(pt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}function x(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=v("style");return vt(mt(t),e),e.sheet}function vt(t,e){return x(t.head||t,e),e.sheet}function W(t,e,n){t.insertBefore(e,n||null)}function q(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function ht(t){return document.createTextNode(t)}function T(){return ht(" ")}function wt(){return ht("")}function Q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function P(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}function Pt(t){const e={};for(const n of t)e[n.name]=n.value;return e}const H=new Map;let D=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:$t(e),rules:{}};return H.set(t,n),n}function B(t,e,n,i,o,r,l,s=0){const f=16.666/i;let c=`{
`;for(let _=0;_<=1;_+=f){const y=e+(n-e)*r(_);c+=_*100+`%{${l(y,1-y)}}
`}const m=c+`100% {${l(n,1-n)}}
}`,u=`__svelte_${St(m)}_${s}`,g=mt(t),{stylesheet:a,rules:d}=H.get(g)||At(g,t);d[u]||(d[u]=!0,a.insertRule(`@keyframes ${u} ${m}`,a.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${u} ${i}ms linear ${o}ms 1 both`,D+=1,u}function I(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),D-=o,D||Lt())}function Lt(){Z(()=>{D||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&q(e)}),H.clear())})}let et;function F(t){et=t}const N=[],rt=[],R=[],st=[],Nt=Promise.resolve();let J=!1;function Mt(){J||(J=!0,Nt.then(U))}function E(t){R.push(t)}const G=new Set;let L=0;function U(){if(L!==0)return;const t=et;do{try{for(;L<N.length;){const e=N[L];L++,F(e),Ot(e.$$)}}catch(e){throw N.length=0,L=0,e}for(F(null),N.length=0,L=0;rt.length;)rt.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];G.has(n)||(G.add(n),n())}R.length=0}while(N.length);for(;st.length;)st.pop()();J=!1,G.clear(),F(t)}function Ot(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let z;function nt(){return z||(z=Promise.resolve(),z.then(()=>{z=null})),z}function S(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const j=new Set;let $;function gt(){$={r:0,c:[],p:$}}function _t(){$.r||w($.c),$=$.p}function A(t,e){t&&t.i&&(j.delete(t),t.i(e))}function K(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),$.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ot={duration:0};function Tt(t,e,n){const i={direction:"in"};let o=e(t,n,i),r=!1,l,s,f=0;function c(){l&&I(t,l)}function m(){const{delay:g=0,duration:a=300,easing:d=V,tick:h=C,css:_}=o||ot;_&&(l=B(t,0,1,a,g,d,_,f++)),h(0,1);const y=Y()+g,p=y+a;s&&s.abort(),r=!0,E(()=>S(t,!0,"start")),s=tt(b=>{if(r){if(b>=p)return h(1,0),S(t,!0,"end"),c(),r=!1;if(b>=y){const k=d((b-y)/a);h(k,1-k)}}return r})}let u=!1;return{start(){u||(u=!0,I(t),O(o)?(o=o(i),nt().then(m)):m())},invalidate(){u=!1},end(){r&&(c(),r=!1)}}}function zt(t,e,n){const i={direction:"out"};let o=e(t,n,i),r=!0,l;const s=$;s.r+=1;function f(){const{delay:c=0,duration:m=300,easing:u=V,tick:g=C,css:a}=o||ot;a&&(l=B(t,1,0,m,c,u,a));const d=Y()+c,h=d+m;E(()=>S(t,!1,"start")),tt(_=>{if(r){if(_>=h)return g(0,1),S(t,!1,"end"),--s.r||w(s.c),!1;if(_>=d){const y=u((_-d)/m);g(1-y,y)}}return r})}return O(o)?nt().then(()=>{o=o(i),f()}):f(),{end(c){c&&o.tick&&o.tick(1,0),r&&(l&&I(t,l),r=!1)}}}function at(t,e,n,i){const o={direction:"both"};let r=e(t,n,o),l=i?0:1,s=null,f=null,c=null;function m(){c&&I(t,c)}function u(a,d){const h=a.b-l;return d*=Math.abs(h),{a:l,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function g(a){const{delay:d=0,duration:h=300,easing:_=V,tick:y=C,css:p}=r||ot,b={start:Y()+d,b:a};a||(b.group=$,$.r+=1),s||f?f=b:(p&&(m(),c=B(t,l,a,h,d,_,p)),a&&y(0,1),s=u(b,h),E(()=>S(t,a,"start")),tt(k=>{if(f&&k>f.start&&(s=u(f,h),f=null,S(t,s.b,"start"),p&&(m(),c=B(t,l,s.b,s.duration,0,_,r.css))),s){if(k>=s.end)y(l=s.b,1-l),S(t,s.b,"end"),f||(s.b?m():--s.group.r||w(s.group.c)),s=null;else if(k>=s.start){const yt=k-s.start;l=s.a+s.d*_(yt/s.duration),y(l,1-l)}}return!!(s||f)}))}return{run(a){O(r)?nt().then(()=>{r=r(o),g(a)}):g(a)},end(){m(),s=f=null}}}function Ft(t,e,n,i){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),i||E(()=>{const l=t.$$.on_mount.map(X).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...l):w(l),t.$$.on_mount=[]}),r.forEach(E)}function qt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(N.push(t),Mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function jt(t,e,n,i,o,r,l,s=[-1]){const f=et;F(t);const c=t.$$={fragment:null,ctx:[],props:r,update:C,not_equal:o,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:it(),dirty:s,skip_bound:!1,root:e.target||f.$$.root};l&&l(c.root);let m=!1;if(c.ctx=n?n(t,e.props||{},(u,g,...a)=>{const d=a.length?a[0]:g;return c.ctx&&o(c.ctx[u],c.ctx[u]=d)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](d),m&&Rt(t,u)),g}):[],c.update(),m=!0,w(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=Ct(e.target);c.fragment&&c.fragment.l(u),u.forEach(q)}else c.fragment&&c.fragment.c();e.intro&&A(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),U()}F(f)}let bt;typeof HTMLElement=="function"&&(bt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(X).filter(O);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){w(this.$$.on_disconnect)}$destroy(){qt(this,1),this.$destroy=C}$on(t,e){if(!O(e))return C;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!xt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function Ht(t){const e=t-1;return e*e*e+1}function ct(t,{delay:e=0,duration:n=400,easing:i=V}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:r=>`opacity: ${r*o}`}}function lt(t,{delay:e=0,duration:n=400,easing:i=Ht}={}){const o=getComputedStyle(t),r=+o.opacity,l=parseFloat(o.height),s=parseFloat(o.paddingTop),f=parseFloat(o.paddingBottom),c=parseFloat(o.marginTop),m=parseFloat(o.marginBottom),u=parseFloat(o.borderTopWidth),g=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:i,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*r};height: ${a*l}px;padding-top: ${a*s}px;padding-bottom: ${a*f}px;margin-top: ${a*c}px;margin-bottom: ${a*m}px;border-top-width: ${a*u}px;border-bottom-width: ${a*g}px;`}}function ut(t){let e,n,i,o,r,l,s,f,c,m,u,g,a,d,h,_,y,p=t[2]&&ft();return{c(){e=v("div"),n=v("div"),i=v("p"),i.textContent="Este website utiliza cookies",o=T(),r=v("p"),l=T(),s=v("button"),s.textContent="Permitir Cookies",f=T(),c=v("button"),c.textContent="Recusar Cookies",m=T(),u=v("button"),u.textContent="Preferência de Cookies",g=T(),p&&p.c(),P(i,"class","titleContainer"),P(s,"class","footer_output_btn btn btn-success"),P(c,"class","footer_output_btn btn btn-success"),P(u,"class","footer_output_btn btn btn-success"),P(n,"class","container2"),P(e,"id","cookiePolicy")},m(b,k){W(b,e,k),x(e,n),x(n,i),x(n,o),x(n,r),r.innerHTML=t[0],x(n,l),x(n,s),x(n,f),x(n,c),x(n,m),x(n,u),x(n,g),p&&p.m(n,null),h=!0,_||(y=[Q(s,"click",t[3]),Q(c,"click",t[3]),Q(u,"click",t[4])],_=!0)},p(b,k){(!h||k&1)&&(r.innerHTML=b[0]),b[2]?p?k&4&&A(p,1):(p=ft(),p.c(),A(p,1),p.m(n,null)):p&&(gt(),K(p,1,1,()=>{p=null}),_t())},i(b){h||(A(p),E(()=>{d&&d.end(1),a=Tt(e,ct,{}),a.start()}),h=!0)},o(b){K(p),a&&a.invalidate(),d=zt(e,ct,{}),h=!1},d(b){b&&q(e),p&&p.d(),b&&d&&d.end(),_=!1,w(y)}}}function ft(t){let e,n,i;return{c(){e=v("div"),e.innerHTML=`<p><strong>SUAS PREFERÊNCIAS DE COOKIES</strong></p> 
          <p>Usamos diferentes tipos de cookies para otimizar sua experiência em nosso site. Clique nas categorias abaixo para saber mais sobre a sua finalidade. Você pode escolher quais tipos de cookies permitir e pode alterar suas preferências a qualquer momento. Lembre-se de que ao desativar os cookies poderá afetar sua experiência no site.</p> 
          <p>Clique <a href="https://betec.com.br/politica-de-cookies" style="color: #fff;">AQUI</a> para ser direcionado à nossa Política de Cookies e obter mais informações.</p> 
          <p><input type="checkbox" checked="" disabled=""/> Cookies Funcionais</p> 
          <p>Estes cookies são os necessários, ou seja, essencial para suportar a funcionalidade principal do site, como fornecer login seguro.</p> 
          <p><input type="checkbox"/> Cookies Analitíco</p> 
          <p>Estes cookies facilitam a medição e a análise para melhorar a experiência de navegação.</p> 
          <p><input type="checkbox"/> Cookies de publicidade</p> 
          <p>Estes cookies ajudam a veicular conteúdo publicitário relevante para você</p> 
          <p><input type="checkbox"/> Cookies de Mídia Social</p> 
          <p>facilitam o compartilhamento em redes sociais, fornecem ferramentas para que você se conecte a Plataforma da BETEC e nos ajudam a entender melhor tanto o público-alvo do site como a eficácia de nossa divulgação nas mídias sociais. Estes são cookies de terceiros. Suas escolhas em relação a esses cookies são determinadas pelas plataformas de mídia social nas quais você tem conta.</p>`,P(e,"class","prefCookie")},m(o,r){W(o,e,r),i=!0},i(o){i||(E(()=>{n||(n=at(e,lt,{},!0)),n.run(1)}),i=!0)},o(o){n||(n=at(e,lt,{},!1)),n.run(0),i=!1},d(o){o&&q(e),o&&n&&n.end()}}}function Dt(t){let e,n,i=!t[1]&&ut(t);return{c(){i&&i.c(),e=wt(),this.c=C},m(o,r){i&&i.m(o,r),W(o,e,r),n=!0},p(o,[r]){o[1]?i&&(gt(),K(i,1,1,()=>{i=null}),_t()):i?(i.p(o,r),r&2&&A(i,1)):(i=ut(o),i.c(),A(i,1),i.m(e.parentNode,e))},i(o){n||(A(i),n=!0)},o(o){K(i),n=!1},d(o){i&&i.d(o),o&&q(e)}}}function Bt(t,e,n=15){var i=new Date;i.setDate(i.getDate()+n);var o=t+"="+encodeURIComponent(e)+(i?"; expires="+i.toUTCString():"");document.cookie=o}function It(t){var e="; "+document.cookie,n=e.split("; "+t+"=");if(n.length==2)return n.pop().split(";").shift()}function Ut(t,e,n){let{text:i='Este site utiliza cookies primários e de terceiros para garantir a funcionabilidade da plataforma e uma melhor experiência de navegação. Saiba mais em nossa <a href="https://betec.com.br/politica-de-cookies" style="color: #fff">Política de Cookies </a>.'}=e,o=It("cookiePolicy")||!1;function r(){n(1,o=!0),Bt("cookiePolicy",o,365)}let l=!1;function s(){n(2,l=!l)}return t.$$set=f=>{"text"in f&&n(0,i=f.text)},[i,o,l,r,s]}class Kt extends bt{constructor(e){super(),this.shadowRoot.innerHTML="<style>input[type=checkbox]{-ms-transform:scale(1.5);-moz-transform:scale(1.5);-webkit-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5);padding:10px}#cookiePolicy .prefCookie{margin-top:15px}#cookiePolicy .titleContainer{font-size:1.2em}#cookiePolicy{position:fixed;right:0;bottom:0;left:0;z-index:200;background-color:#0e0d1dd6;width:100%;display:flex;justify-content:center;align-items:center}#cookiePolicy .container2{padding:20px 42px;max-width:640px}#cookiePolicy p{font-family:Avenir Next,Helvetica Neue,Helvetica,sans-serif;margin-top:0;color:#fff;font-size:0.79em}#cookiePolicy .footer_output_btn{font-weight:bold;padding:2px 14px 4px;min-width:168px;border:1px solid #fff;box-shadow:none !important;color:#fff;background-color:transparent;height:40px;font-size:16px;font-weight:600}.footer_output_btn:hover{background-image:linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16))}.btn:not(:disabled):not(.disabled){cursor:pointer}.btn-success{color:#fff !important;background-color:#8dbf42;border-color:#8dbf42}.btn{display:inline-block;text-align:center;vertical-align:middle;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:.25rem;padding:0.4375rem 1.25rem;text-shadow:none;font-size:14px;white-space:normal;touch-action:manipulation;box-shadow:0px 5px 20px 0 rgba(0, 0, 0, 0.1);will-change:opacity, transform;transition:all 0.3s ease-out;-webkit-transition:all 0.3s ease-out}</style>",jt(this,{target:this.shadowRoot,props:Pt(this.attributes),customElement:!0},Ut,Dt,kt,{text:0},null),e&&(e.target&&W(e.target,this,e.anchor),e.props&&(this.$set(e.props),U()))}static get observedAttributes(){return["text"]}get text(){return this.$$.ctx[0]}set text(e){this.$$set({text:e}),U()}}customElements.define("lgpd-cookie",Kt);
