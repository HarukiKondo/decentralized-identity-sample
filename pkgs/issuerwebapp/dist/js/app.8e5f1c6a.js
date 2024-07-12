(function(){var e={8011:function(e,n,t){"use strict";var o=t(6789),r=t(4271),a=t(8927),u=t(8755),i=t(7678),l=t(5394),c=t(7577);function d(e,n,t,o,d,s){const f=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(a.E,null,{default:(0,r.k6)((()=>[(0,r.bF)(l.u,{color:"primary"},{default:(0,r.k6)((()=>[(0,r.bF)(c.M,{class:"hidden-sm-and-down"},{default:(0,r.k6)((()=>[(0,r.bF)(u.D,{flat:"",to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1})])),_:1})])),_:1}),(0,r.bF)(i.Y,null,{default:(0,r.k6)((()=>[(0,r.bF)(f)])),_:1})])),_:1})}var s=(0,r.pM)({name:"App",data(){return{}}}),f=t(6132);const p=(0,f.A)(s,[["render",d]]);var b=p,m=t(4896),h=t(6402),v=t(4668),_=t(7728);function g(e,n,t,o,a,i){const l=(0,r.g2)("authenticator");return(0,r.uX)(),(0,r.Wv)(l,{"login-mechanisms":["username","email"]},{default:(0,r.k6)((({user:e,signOut:n})=>[(0,r.bF)(_.I,null,{default:(0,r.k6)((()=>[(0,r.Lk)("h1",null,"Hello "+(0,v.v_)(e.username)+"!",1),(0,r.bF)(u.D,{onClick:n},{default:(0,r.k6)((()=>[(0,r.eW)("Sign Out")])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})}var k=t(6823),y=t(3667),O=(0,r.pM)({name:"SignIn",setup(){const e=(0,k.KR)((0,y.pl)());return{auth:e}},components:{Authenticator:y.kD},data(){return{}}});const E=(0,f.A)(O,[["render",g]]);var V=E;function w(e,n,t,o,a,u){const i=(0,r.g2)("IssueVC");return(0,r.uX)(),(0,r.Wv)(_.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(i)])),_:1})}var N=t(2190),A=t(9403),F=t(6887),P=t(429);const C=(0,r.Lk)("p",{class:"text-h4"},"Verifiable Credentialの発行",-1);function I(e,n,t,o,a,i){return(0,r.uX)(),(0,r.Wv)(_.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(N.L,null,{default:(0,r.k6)((()=>[(0,r.bF)(A.B,{cols:"12"},{default:(0,r.k6)((()=>[C])),_:1}),(0,r.bF)(A.B,{cols:"12"},{default:(0,r.k6)((()=>[(0,r.bF)(F.W,{modelValue:e.id,"onUpdate:modelValue":n[0]||(n[0]=n=>e.id=n),label:"id",placeholder:""},null,8,["modelValue"])])),_:1}),(0,r.bF)(A.B,{cols:"12"},{default:(0,r.k6)((()=>[(0,r.bF)(F.W,{modelValue:e.name,"onUpdate:modelValue":n[1]||(n[1]=n=>e.name=n),label:"name",placeholder:"tanaka tarou"},null,8,["modelValue"])])),_:1}),(0,r.bF)(A.B,{cols:"12"},{default:(0,r.k6)((()=>[(0,r.bF)(F.W,{modelValue:e.address,"onUpdate:modelValue":n[2]||(n[2]=n=>e.address=n),label:"address",placeholder:"tokyo chiyoda..."},null,8,["modelValue"])])),_:1}),(0,r.bF)(A.B,{cols:"12"},{default:(0,r.k6)((()=>[(0,r.bF)(F.W,{modelValue:e.phoneNumber,"onUpdate:modelValue":n[3]||(n[3]=n=>e.phoneNumber=n),label:"phoneNumber",placeholder:"090-0000-0000"},null,8,["modelValue"])])),_:1}),(0,r.bF)(A.B,{cols:"6"},{default:(0,r.k6)((()=>[(0,r.bF)(u.D,{onClick:e.issue_vc,color:"primary"},{default:(0,r.k6)((()=>[(0,r.eW)(" Verifiable Credentialの発行 ")])),_:1},8,["onClick"])])),_:1}),(0,r.bF)(A.B,{cols:"12"},{default:(0,r.k6)((()=>[(0,r.bF)(P.J,{modelValue:e.verifiableCredential,"onUpdate:modelValue":n[4]||(n[4]=n=>e.verifiableCredential=n),rows:"40"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}var j=t(6828),S=(0,r.pM)({name:"IssueVC",props:[],data(){return{id:"xxxxxxxx",name:"tanaka tarou",address:"tokyo chiyoda",phoneNumber:"000-0000-0000",verifiableCredential:"Verifiable Credentialがここに表示されます"}},methods:{async issue_vc(){const e=await j.n.post("api","/issue",{body:{id:this.id,name:this.name,address:this.address,phoneNumber:this.phoneNumber}});console.log(e),this.verifiableCredential=JSON.stringify(e,null," ")}}});const x=(0,f.A)(S,[["render",I]]);var U=x,B=(0,r.pM)({name:"IssueView",components:{IssueVC:U},data(){return{}}});const W=(0,f.A)(B,[["render",w]]);var L=W;const D=[{path:"/signin",name:"SignIn",component:V},{path:"/",name:"home",component:L,meta:{auth:!0}}],T=(0,m.aE)({history:(0,m.LA)("/"),routes:D});T.beforeEach((async(e,n,t)=>{if(e.matched.some((e=>e.meta.auth)))try{const e=await h.N.currentSession();e?t():t({path:"/signin"})}catch(o){t({path:"signin"})}else t()}));var M=T,R=(t(8068),t(2236)),X=(0,R.$N)(),H=t(8010);async function J(){const e=await t.e(53).then(t.t.bind(t,1733,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}H.H.configure({API:{endpoints:[{name:"api",endpoint:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_ENDPOINT,custom_header:async()=>{const e=await h.N.currentSession();return e?{Authorization:`Bearer ${e.getIdToken().getJwtToken()}`}:{}}}]},Auth:{region:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_AWS_REGION,userPoolId:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_USER_POOL_ID,userPoolWebClientId:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_USER_POOL_WEB_CLIENT_ID}}),J(),(0,o.Ef)(b).use(M).use(X).mount("#app")},23:function(){}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var u=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(d--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var a=Object.create(null);t.r(a);var u={};e=e||[null,n({}),n([]),n(n)];for(var i=2&r&&o;"object"==typeof i&&!~e.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(e){u[e]=function(){return o[e]}}));return u["default"]=function(){return o},t.d(a,u),a}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/webfontloader.b2acd999.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="issuerwebapp:";t.l=function(o,r,a,u){if(e[o])e[o].push(r);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var s=c[d];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+a){i=s;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=o),e[o]=[r];var f=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var u=t.p+t.u(n),i=new Error,l=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,r[1](i)}};t.l(u,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,u=o[0],i=o[1],l=o[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var d=l(t)}for(n&&n(o);c<u.length;c++)a=u[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self["webpackChunkissuerwebapp"]=self["webpackChunkissuerwebapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(8011)}));o=t.O(o)})();
//# sourceMappingURL=app.8e5f1c6a.js.map