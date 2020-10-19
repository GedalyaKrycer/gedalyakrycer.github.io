(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[0],{100:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},132:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(32),l=a.n(r),s=a(36),i=a(7),o=a(6),m=c.a.createContext();function g(e){var t=e.children,a=Object(n.useState)(!0),r=Object(o.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(),g=Object(o.a)(i,2),d=g[0],u=g[1],p=Object(n.useState)(),h=Object(o.a)(p,2),v=h[0],b=h[1];return c.a.createElement(m.Provider,{value:{toggleBurgerMenu:l,setToggleBurgerMenu:s,amHome:d,setAmHome:u,amAbout:v,setAmAbout:b}},t)}a(86),a(87);var d=function(e){var t=e.title,a=e.subTitleOne,n=e.subTitleTwo;return c.a.createElement("header",null,c.a.createElement("h1",{className:"g_white-color"},t),c.a.createElement("hr",null),c.a.createElement("h3",{className:"header__sub-title"},a),c.a.createElement("h3",{className:"header__sub-title"},n))},u=(a(88),a(17)),p=a(13),h=(a(89),a(9)),v=a(138),b=a(57),f=a(56),y=a(38);function E(e){var t=e.children,a=e.eventKey,r=Object(n.useState)(!1),l=Object(o.a)(r,2),s=l[0],i=l[1],m=Object(y.b)(a,(function(){i(!s)}));return c.a.createElement("button",{onClick:m,className:"g_card-slide ".concat(s?"g_card-slide-up":"")},t)}var _=function(e){var t=e.img,a=e.title,n=e.tech,r=e.deployLink,l=e.repoLink,s=[];return n.split(", ").forEach((function(e){s.push(c.a.createElement("h5",{key:Object(v.a)(),className:"dev-project__tech "},e))})),c.a.createElement("div",{className:"g_projects-container"},c.a.createElement(b.a,null,c.a.createElement(f.a,null,c.a.createElement("div",{className:"neumorphism"},c.a.createElement(E,{eventKey:"0"},c.a.createElement("img",{src:t,alt:a,className:"g_project-img"}))),c.a.createElement("div",{className:"g_meta-container dev-project__meta-container"},c.a.createElement(b.a.Collapse,{eventKey:"0"},c.a.createElement(f.a.Body,null,c.a.createElement("h4",{className:"dev-project__title"},a),c.a.createElement("div",{className:"dev-project__links"},r?c.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"dev-project__button dev-project__button--half"},c.a.createElement(h.c,null),c.a.createElement("h5",null,"View Deployed")):null,c.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:r?"dev-project__button dev-project__button--half":"dev-project__button dev-project__button--full"},c.a.createElement(h.e,null),c.a.createElement("h5",null,"View Repo"))),c.a.createElement("div",{className:"dev-project__info"},s)))))))},k=a(70);var N=function(){return c.a.createElement("section",null,c.a.createElement(u.a,null,c.a.createElement("h2",null,"Dev Work"),c.a.createElement(p.a,{className:"justify-content-around g_negative-margin"},k.map((function(e){return c.a.createElement(_,{key:e.id,img:e.img,title:e.title,tech:e.tech,deployLink:e.deployLink,repoLink:e.repoLink})})))))},w=(a(92),a(93),a(71)),j=a.n(w),O=a(72),S=a.n(O),x=a(73),L=a.n(x);var A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"design-project__container "},c.a.createElement("a",{href:"http://gedalya.myportfolio.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"g__design-project__card-slide"},c.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"design-project__project-img"},c.a.createElement("source",{src:S.a,type:"video/webm"}),c.a.createElement("source",{src:j.a,type:"video/mp4"}))),c.a.createElement("div",{className:"design-project__meta-container"},c.a.createElement("h4",{className:"design-project__text"},"View design projects"),c.a.createElement(h.a,{className:"design-project__icon"})))),c.a.createElement("div",{className:"design-project__container "},c.a.createElement("a",{href:"https://youtu.be/7nmarPXV2OQ",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"g__design-project__card-slide"},c.a.createElement("img",{src:L.a,alt:"From a Figment to Figma.",className:"design-project__project-img"})),c.a.createElement("div",{className:"design-project__meta-container"},c.a.createElement("h4",{className:"design-project__text"},"Watch my workshop"),c.a.createElement(h.a,{className:"design-project__icon"})))))};var C=function(){return c.a.createElement("section",{className:"design-portfolio__section"},c.a.createElement(u.a,null,c.a.createElement("h2",null,"Design"),c.a.createElement(p.a,{className:"justify-content-around g_negative-margin"},c.a.createElement(A,null))))};var G=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{title:"Hi, I\u2019m Gedalya, a front-end developer and creative.",subTitleOne:"I organize details \u2014 through code, design, motion and photography."}),c.a.createElement(N,null),c.a.createElement(C,null))};a(94);var K=function(){return c.a.createElement("div",{className:"githubPin"},c.a.createElement("a",{href:"https://www.linkedin.com/in/gedalyakrycer/",target:"_blank",rel:"noopener noreferrer",className:"githubPin_link"},c.a.createElement(h.f,null)),c.a.createElement("a",{href:"https://github.com/GedalyaKrycer",target:"_blank",rel:"noopener noreferrer",className:"githubPin_link"},c.a.createElement(h.e,null)),c.a.createElement("a",{href:"https://www.behance.net/gedalyakrycer",target:"_blank",rel:"noopener noreferrer",className:"githubPin_link"},c.a.createElement(h.b,null)))};a(95);var I=function(){return c.a.createElement("div",{className:"contactPin"},c.a.createElement("a",{href:"/about#contact",className:"contactPin__link"},"Contact"))},P=(a(96),a(97),a(21));var F=function(){return c.a.createElement("section",null,c.a.createElement(u.a,null,c.a.createElement("h2",null,"Bio"),c.a.createElement(p.a,{className:"justify-content-md-center g_negative-margin"},c.a.createElement(P.a,{className:"g_white-color",lg:8},c.a.createElement("p",{className:"g__body-lg"},"Hi there! I am a Vegas-based front-end developer and creative, who obsesses over the details and loves learning new technologies."),c.a.createElement("p",null,"(I also obsess over movies and enjoy everything from superhero blockbusters to romcoms.)"),c.a.createElement("p",null,"I recently left my agency job as a Digital Design Director to follow my true passion\u2014building websites from the ground up."),c.a.createElement("p",null,"In September of 2020, I earned a certification in Full Stack Development, from the University of Arizona's 6 month coding bootcamp. It's a joy to not only design a great site, but code it into reality as well."),c.a.createElement("p",null,"With this deeper understanding of how to build quality sites, I look forward to changing careers to web development, built on a strong design foundation.")))))},T=a(45);a(98),a(99);var D=function(e){var t=e.name,a=e.link,r=e.svg,l=e.type,s=Object(n.useState)("hello"),i=Object(o.a)(s,2),m=i[0],g=i[1];return Object(n.useEffect)((function(){g("dev"===l?"tech-btn__btn--dev":"design"===l?"tech-btn__btn--design":"tech-btn__btn--learn")}),[l]),c.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"tech-btn__btn ".concat(m)},c.a.createElement("img",{src:r,alt:t,className:"tech-btn__icon"}),t)};a(100);var M=function(e){var t=e.handleDevFilter,a=e.handleDesignFilter,n=e.handleLearnFilter,r=e.devFilterActive,l=e.designFilterActive,s=e.learnFilterActive;return c.a.createElement("div",{className:"tech-filter__container"},c.a.createElement("div",{className:"tech-filter__nav"},c.a.createElement("button",{className:"tech-filter__nav-dev ".concat(r?"tech-filter__nav-dev--active":null),onClick:t},"Coding"),c.a.createElement("button",{className:"tech-filter__nav-design ".concat(l?"tech-filter__nav-design--active":null),onClick:a},"Design"),c.a.createElement("button",{className:"tech-filter__nav-learn ".concat(s?"tech-filter__nav-learn--active":null),onClick:n},"Learning")))},B=a(27);var R=function(){var e=Object(n.useState)(B),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],m=s[1],g=Object(n.useState)(!1),d=Object(o.a)(g,2),h=d[0],v=d[1],b=Object(n.useState)(!1),f=Object(o.a)(b,2),y=f[0],E=f[1],_=function(e){switch(e){case"dev":m(!0),v(!1),E(!1);break;case"design":m(!1),v(!0),E(!1);break;case"learn":m(!1),v(!1),E(!0);break;default:m(!1),v(!1),E(!1)}};return c.a.createElement("section",null,c.a.createElement(u.a,{className:"g__about-sections"},c.a.createElement("h2",null,"Skills"),c.a.createElement(p.a,{className:"justify-content-md-center g_negative-margin"},c.a.createElement(P.a,{lg:8},c.a.createElement("p",{className:"skills__intro-text g__body-lg"},"These are some of the tools I use on projects or currently learning."))),c.a.createElement(p.a,{className:"justify-content-md-center"},c.a.createElement(P.a,{lg:12,className:"skills__tech-container"},c.a.createElement(M,{devFilterActive:i,designFilterActive:h,learnFilterActive:y,handleDevFilter:function(){!1===i?(_("dev"),r(Object(T.a)(B).filter((function(e){return e.type.includes("dev")})))):(r(B),m(!1))},handleDesignFilter:function(){!1===h?(_("design"),r(Object(T.a)(B).filter((function(e){return e.type.includes("design")})))):(r(B),v(!1))},handleLearnFilter:function(){!1===y?(_("learn"),r(Object(T.a)(B).filter((function(e){return e.type.includes("learn")})))):(r(B),E(!1))}}),c.a.createElement("div",{className:"skills__tech-btn-container"},a.map((function(e){return c.a.createElement(D,{key:e.id,name:e.name,link:e.link,svg:e.svg,type:e.type})})))))))},V=a(35),H=a.n(V),J=a(46),z=a(51),W=a(20),q=a(76),Q=a.n(q),Z=a(77),U=a.n(Z),Y=a(78),X=a.n(Y);a(123);var $=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],m=s[1],g=Object(n.useState)({}),d=Object(o.a)(g,2),h=d[0],v=d[1],b=Object(n.useState)({}),f=Object(o.a)(b,2),y=f[0],E=f[1],_=Object(n.useState)(!1),k=Object(o.a)(_,2),N=k[0],w=k[1],j=Object(n.useState)(!1),O=Object(o.a)(j,2),S=O[0],x=O[1],L=Object(n.useState)(""),A=Object(o.a)(L,2),C=A[0],G=A[1],K=Object(n.useState)(!1),I=Object(o.a)(K,2),F=I[0],T=I[1],D=Object(n.useState)(""),M=Object(o.a)(D,2),B=M[0],R=M[1],V=Object(n.useState)(!1),q=Object(o.a)(V,2),Z=q[0],Y=q[1],$=Object(n.useRef)(null);Object(n.useEffect)((function(){B&&function(){var e=Object(z.a)(H.a.mark((function e(t,a){var n,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(J.a)(Object(J.a)({},t),{},{"g-recaptcha-response":a}),c={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:X.a.stringify(n),url:"/"},e.prev=2,e.next=5,U()(c);case 5:x(!0),y(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}()(h,B)}),[y,h,B]);var ee=function(){console.log("error..."),G(!0)},te=function(){console.log("expired..."),console.log("resetting..."),ce()},ae=function(e){console.log("verified..."),R(e),Y(!0),m(!1)},ne=function(e){C&&G(!1),e&&(x(!1),r(!1),e()),ce()},ce=function(){var e=Object(z.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("resetting..."),e.next=3,$.current.reset();case 3:Y(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("section",null,c.a.createElement(u.a,{className:"g__about-sections",id:"contact"},c.a.createElement("h2",null,"Contact"),c.a.createElement(p.a,{className:"justify-content-md-center g_negative-margin"},c.a.createElement(P.a,{className:"white-color",lg:8},c.a.createElement("div",{className:"contact__form-bg"},c.a.createElement(W.d,{initialValues:{"bot-field":"","form-name":"contact",email:"",name:"",message:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.name||(t.name="Required"),e.message||(t.message="Required"),t},onSubmit:function(e){T(!0),v(Object(J.a)({},e)),m(!0),$.current.execute()}},(function(e){var t=e.resetForm;return c.a.createElement(W.c,{"data-netlify":"true","data-netlify-honeypot":"bot-field","data-netlify-recaptcha":"true",className:"d-flex flex-column",name:"contact",noValidate:!0},c.a.createElement(W.b,{type:"hidden",name:"form-name"}),c.a.createElement(W.b,{type:"hidden",name:"bot-field"}),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"name"},"Name"),c.a.createElement(W.b,{className:"form-control form-control-lg",name:"name",type:"text"}),c.a.createElement(W.a,{className:"invalid-feedback",name:"name",component:"div"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"email"},"Email"),c.a.createElement(W.b,{className:"form-control form-control-lg",name:"email",type:"email"}),c.a.createElement(W.a,{className:"invalid-feedback",name:"email",component:"div"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"message"},"Message"),c.a.createElement(W.b,{className:"form-control form-control-lg",name:"message",component:"textarea"}),c.a.createElement(W.a,{className:"invalid-feedback",name:"message",component:"div"})),c.a.createElement(Q.a,{ref:$,sitekey:"6LdZTMMZAAAAAGJy0j2AyImgkQ33Mv4juhtQElid","data-netlify-recaptcha":"true",onError:ee,onExpire:te,onVerify:ae,onLoad:function(){return function(e){console.log("loaded..."),w(!0),E(e)}((function(){return t}))},size:"invisible"}),c.a.createElement("div",{className:"m-2 col-form-label col-form-label-lg hidden"},c.a.createElement("span",{className:"badge badge-".concat(N?"success":"primary"," mx-2 p-2")},"loaded"),c.a.createElement("span",{className:"badge badge-".concat(Z?"success":"primary"," mx-2 p-2")},"verified"),i&&c.a.createElement("span",{className:"badge badge-primary mx-2 p-2"},"executing"),C&&c.a.createElement("span",{className:"badge badge-primary mx-2 p-2"},"error"),C&&c.a.createElement("button",{className:"btn btn-link text-dark",onClick:function(){return ne(t)}},"reset")),function(e,t){return a?c.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:!0},"Error"):S?c.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:!0},"Submitted"):c.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:t||e},"Submit")}(F,i),a?c.a.createElement("div",{className:"text-primary m-1"},a):null,(S||a)&&c.a.createElement("button",{className:"contact__reset-btn",onClick:function(){return ne(t)}},"Send A New Email"))}))))),c.a.createElement("div",{className:"contact__email-container"},c.a.createElement("h2",null,"or"),c.a.createElement("div",{className:"contact__email-txt"},c.a.createElement("p",{className:"g__body-lg"},"You can email me at"),c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:gedalya@krycer.com",className:"g__body-lg"},"gedalya@krycer.com"))))))},ee=(a(124),a(79));var te=function(){var e=[];return ee.forEach((function(t){e.push(c.a.createElement(P.a,{lg:3,id:t.id},c.a.createElement("div",{className:"fav__card-container"},c.a.createElement("img",{className:"fav__card-img",src:t.img,alt:"".concat(t.name)}),c.a.createElement("h4",{className:"fav__card-title"},t.name),c.a.createElement("div",{className:"fav__hidden-text"},c.a.createElement("p",null,t.things)))))})),c.a.createElement("section",null,c.a.createElement(u.a,null,c.a.createElement("h3",{className:"fav__section-title"},"Things I enjoy when not coding\u2026"),c.a.createElement(p.a,{className:"justify-content-md-center"},e)))};var ae=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{title:"About",subTitleOne:"Geh-doll-yuh",subTitleTwo:"Him/He"}),c.a.createElement(F,null),c.a.createElement(te,null),c.a.createElement(R,null),c.a.createElement($,null))};a(125);var ne=function(){return c.a.createElement("div",{className:"g__footer-pin"},c.a.createElement(d,{title:"404",subTitleOne:"Oops! Looks like this page does not exist or is under maintenance."}))},ce=(a(126),a(29)),re=a(24),le=a(28),se=a(80),ie=a(42),oe=a.n(ie);var me=function(){var e=Object(n.useContext)(m),t=e.toggleBurgerMenu,a=e.setToggleBurgerMenu,r=function(e){a(!0)};return c.a.createElement("div",{className:"sticky-top nav__container"},c.a.createElement(ce.a,{collapseOnSelect:!0,expand:"md"},c.a.createElement(le.LinkContainer,{to:"/",className:"d-md-none"},c.a.createElement(ce.a.Brand,null,c.a.createElement("img",{src:"https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg",alt:"GK Logo",className:"nav__logo-mobile"}))),c.a.createElement(ce.a.Toggle,{"aria-controls":"responsive-navbar-nav"},c.a.createElement("div",{onClick:function(){a(!t)},className:"nav__toggle-btn ".concat(t?null:"open")},c.a.createElement("div",{className:"nav__toggle-btn__burger"}))),c.a.createElement(ce.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(re.a,{className:"mr-auto"},c.a.createElement(le.LinkContainer,{to:"/",onClick:r},c.a.createElement(re.a.Link,null,"Dev")),c.a.createElement(re.a.Link,{href:"http://gedalya.myportfolio.com/",target:"_blank",rel:"noopener noreferrer"},"Design ",c.a.createElement(se.a,null)," "),c.a.createElement(le.LinkContainer,{to:"/about",onClick:r},c.a.createElement(re.a.Link,null,"About")))),c.a.createElement(le.LinkContainer,{to:"/",className:"d-none d-md-block"},c.a.createElement(ce.a.Brand,null,c.a.createElement("img",{src:"https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg",alt:"GK Logo",className:"nav__logo-desktop"}))),c.a.createElement(ce.a.Collapse,{className:"g_justify-end nav__dropdown-vh"},c.a.createElement(re.a,{className:"nav__social"},c.a.createElement("div",{className:"nav__social--display"},c.a.createElement(re.a.Link,{href:"https://www.linkedin.com/in/gedalyakrycer/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(h.f,null)),c.a.createElement(re.a.Link,{href:"https://github.com/GedalyaKrycer",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(h.e,null)),c.a.createElement(re.a.Link,{href:"https://www.behance.net/gedalyakrycer",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(h.b,null)))),c.a.createElement("a",{href:oe.a,download:!0,className:"nav__resume"},c.a.createElement("h6",null,"View Resume")))))};a(132);var ge=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer__content-container"},c.a.createElement(le.LinkContainer,{to:"/"},c.a.createElement("img",{src:"https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo.svg",alt:"GK Logo",className:"footer__logo"})),c.a.createElement("a",{href:oe.a,download:!0,className:"footer__resume "},c.a.createElement("h6",null,"View Resume")),c.a.createElement("div",{className:"footer__social-icons-container"},c.a.createElement("a",{href:"https://www.linkedin.com/in/gedalyakrycer/",target:"_blank",rel:"noopener noreferrer",className:"footer__social-icons"},c.a.createElement(h.f,null)),c.a.createElement("a",{href:"https://github.com/GedalyaKrycer",target:"_blank",rel:"noopener noreferrer",className:"footer__social-icons"},c.a.createElement(h.e,null)),c.a.createElement("a",{href:"https://www.behance.net/gedalyakrycer",target:"_blank",rel:"noopener noreferrer",className:"footer__social-icons"},c.a.createElement(h.b,null)))),c.a.createElement("a",{href:"https://github.com/GedalyaKrycer/gedalyakrycer.github.io",target:"_blank",rel:"noopener noreferrer",className:"footer__built-with"},c.a.createElement("h6",null,"Built with ",c.a.createElement("span",{role:"img",className:"footer__emoji","aria-label":"Sparkling Heart"},"\ud83d\udc96")," ",c.a.createElement(h.g,{className:"footer__react"}),c.a.createElement(h.d,{className:"footer__figma"})," ")))},de=a(55);var ue=function(){return Object(n.useEffect)((function(){de.a.initialize("UA-122656834-1"),de.a.pageview(window.location.pathname+window.location.search)}),[]),c.a.createElement(s.BrowserRouter,null,c.a.createElement(g,null,c.a.createElement(me,null),c.a.createElement("main",null,c.a.createElement("div",{className:"g__frame-left"}),c.a.createElement(K,null),c.a.createElement("div",{className:"g__frame-right"}),c.a.createElement(I,null),c.a.createElement(i.g,null,c.a.createElement(i.d,{exact:!0,path:"/",component:G}),c.a.createElement(i.d,{exact:!0,path:"/about",component:ae}),c.a.createElement(ne,null))),c.a.createElement(ge,null)))};a(133),a(134);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ue,null)),document.getElementById("root"))},27:function(e){e.exports=JSON.parse('[{"id":1,"name":"HTML","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/html-tech-icon.svg","type":"dev"},{"id":2,"name":"CSS","link":"https://github.com/NinaRocket/DRIVERkick","svg":"/assets/images/tech-icons/css-tech-icon.svg","type":"dev"},{"id":3,"name":"Bootstrap","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/bootstrap-tech-icon.svg","type":"dev"},{"id":4,"name":"Bulma","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/bulma-tech-icon.svg","type":"dev"},{"id":5,"name":"SASS","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/sass-tech-icon.svg","type":"dev"},{"id":6,"name":"React.js","link":"https://github.com/GedalyaKrycer/digibit-employee-directory","svg":"/assets/images/tech-icons/react-tech-icon.svg","type":"dev"},{"id":7,"name":"JavaScript","link":"https://github.com/GedalyaKrycer/hw-10-employee-summary","svg":"/assets/images/tech-icons/js-tech-icon.svg","type":"dev"},{"id":8,"name":"jQuery","link":"https://github.com/dpayton92/Vegg_In_Place_Survival_Kit","svg":"/assets/images/tech-icons/jquery-tech-icon.svg","type":"dev"},{"id":9,"name":"Node.js","link":"https://github.com/GedalyaKrycer/hw-10-employee-summary","svg":"/assets/images/tech-icons/node-tech-icon.svg","type":"dev"},{"id":10,"name":"API","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/api-tech-icon.svg","type":"dev"},{"id":11,"name":"Axios","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/axios-tech-icon.svg","type":"dev"},{"id":12,"name":"JSON","link":"https://github.com/GedalyaKrycer/digibit-employee-directory","svg":"/assets/images/tech-icons/json-tech-icon.svg","type":"dev"},{"id":13,"name":"Git (GitHub)","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/git-tech-icon.svg","type":"dev"},{"id":14,"name":"Visual Studio Code","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/vs-code-tech-icon.svg","type":"dev"},{"id":15,"name":"Google Search Console","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/search-console-tech-icon.svg","type":"dev"},{"id":16,"name":"Google Analytics","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/analytics-tech-icon.svg","type":"dev"},{"id":17,"name":"Netlify","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/netlify-tech-icon.svg","type":"dev"},{"id":18,"name":"WP Engine","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/wp-engine-tech-icon.svg","type":"dev"},{"id":19,"name":"Trello","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/trello-tech-icon.svg","type":"design"},{"id":20,"name":"Figma","link":"https://www.figma.com/file/EHbfwBaOA1QPQggMB3rZby/A-Team-%E2%80%94-Car-Maintainence-Tracker?node-id=448%3A435","svg":"/assets/images/tech-icons/figma-tech-icon.svg","type":"design"},{"id":21,"name":"Sketch","link":"https://gedalya.myportfolio.com/web-design-variety","svg":"/assets/images/tech-icons/sketch-tech-icon.svg","type":"design"},{"id":22,"name":"Adobe XD","link":"https://gedalya.myportfolio.com/web-design-variety","svg":"/assets/images/tech-icons/xd-tech-icon.svg","type":"design"},{"id":23,"name":"Premier Pro","link":"https://gedalya.myportfolio.com/motion-graphics","svg":"/assets/images/tech-icons/pr-tech-icon.svg","type":"design"},{"id":24,"name":"After Effects","link":"https://gedalya.myportfolio.com/motion-graphics","svg":"/assets/images/tech-icons/ae-tech-icon.svg","type":"design"},{"id":25,"name":"Photoshop","link":"https://gedalya.myportfolio.com/poster-variety","svg":"/assets/images/tech-icons/ps-tech-icon.svg","type":"design"},{"id":26,"name":"Illustrator","link":"https://gedalya.myportfolio.com/logo-variety","svg":"/assets/images/tech-icons/ai-tech-icon.svg","type":"design"},{"id":27,"name":"InDesign","link":"https://gedalya.myportfolio.com/print-variety","svg":"/assets/images/tech-icons/id-tech-icon.svg","type":"design"},{"id":28,"name":"Lightroom","link":"https://gedalya.myportfolio.com/photography","svg":"/assets/images/tech-icons/lr-tech-icon.svg","type":"design"},{"id":29,"name":"Wordpress","link":"https://www.youtube.com/playlist?list=PLriKzYyLb28nUFbe0Y9d-19uVkOnhYxFE","svg":"/assets/images/tech-icons/wp-tech-icon.svg","type":"learning"},{"id":30,"name":"Express","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/code-tech-icon.svg","type":"learning"},{"id":31,"name":"Mongoose","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/code-tech-icon.svg","type":"learning"},{"id":32,"name":"Compass","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/compass-tech-icon.svg","type":"learning"},{"id":33,"name":"MongoDB","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/compass-tech-icon.svg","type":"learning"},{"id":34,"name":"Postman","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/postman-tech-icon.svg","type":"learning"},{"id":35,"name":"Mailchimp","link":"https://www.youtube.com/playlist?list=PLR_ZJO3q73HalAe5sRs7ByjHvptmbflsL","svg":"/assets/images/tech-icons/mailchimp-tech-icon.svg","type":"learning"}]')},42:function(e,t,a){e.exports=a.p+"static/media/gedalya-krycer-resume.a24317c3.pdf"},70:function(e){e.exports=JSON.parse('[{"id":1,"img":"/assets/images/img-links/portfolio/Card/driverkick-thumbnail.jpg","title":"Driver Kick Car Maintenance Tracker","tech":"React.js, Hooks, Figma, MongoDB, Mongoose, Express, Passport, NHTSA Vehical API, axios, react-bootstrap, react-contenteditable, react-ga, react-moment, bcryptjs, Heroku","deployLink":"https://driverkick.herokuapp.com/","repoLink":"https://github.com/NinaRocket/DRIVERkick"},{"id":2,"img":"/assets/images/img-links/portfolio/Card/weather-thumbnail.jpg","title":"Weather Forecaster","tech":"Bulma, OpenWeather.js API, Unsplash API, Axios, JavaScript, HTML, CSS","deployLink":"https://weatherforecastreact.netlify.app","repoLink":"https://github.com/GedalyaKrycer/weather-forecaster"},{"id":3,"img":"/assets/images/img-links/portfolio/Card/directory-thumbnail.jpg","title":"DigiBit Team Directory","tech":"React.js, Hooks, Figma, JSON, react-bootstrap, react-lazyload, react-icons","deployLink":"https://unit-19-react-homework-employee-directory.netlify.app/","repoLink":"https://github.com/GedalyaKrycer/digibit-employee-directory"},{"id":4,"img":"/assets/images/img-links/portfolio/Card/webdev-thumbnail.jpg","title":"WebDev Challenge Quiz","tech":"JavaScript, jQuery, HTML, CSS, Bootstrap","deployLink":"https://gedalyakrycer.github.io/web-dev-challenge-quiz/","repoLink":"https://github.com/GedalyaKrycer/web-dev-challenge-quiz"},{"id":5,"img":"/assets/images/img-links/portfolio/Card/vegg-thumbnail.jpg","title":"Vegg-in-Place","tech":"Bulma, Figma, JavaScript, HTML, CSS, jQuery, Listen Notes API, TMDB API, RAWG API, Official Joke API","deployLink":"https://dpayton92.github.io/Vegg_In_Place_Survival_Kit/","repoLink":"https://github.com/dpayton92/Vegg_In_Place_Survival_Kit"},{"id":6,"img":"/assets/images/img-links/portfolio/Card/cli-thumbnail.jpg","title":"CLI README Generator","tech":"Node.js, OOP, Inquire, JavaScript","deployLink":"","repoLink":"https://github.com/GedalyaKrycer/hw-10-employee-summary"}]')},71:function(e,t,a){e.exports=a.p+"static/media/motion-design-web.ed11b604.mp4"},72:function(e,t,a){e.exports=a.p+"static/media/motion-design-web.ad28a9aa.webp"},73:function(e,t,a){e.exports=a.p+"static/media/figma-thumbnail.e4e4f43b.jpg"},79:function(e){e.exports=JSON.parse('[{"id":1,"name":"Volunteering","img":"/assets/images/fav-imgs/volunteering.jpg","things":"I love serving as both a 12-Step recovery sponsor and a CG Tech for Celebrate Recovery."},{"id":2,"name":"Fitness","img":"/assets/images/fav-imgs/excersize.jpg","things":"Be it an Insanity Max30 session, gym workout or long hike \u2014 the recharge works wonders!"},{"id":3,"name":"Movies","img":"/assets/images/fav-imgs/movies.jpg","things":"Favorite genre? From Saving Private Ryan to Devil Wears Prada to the Avengers\u2026 I enjoy it all!"}]')},81:function(e,t,a){e.exports=a(135)},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.74a39cc4.chunk.js.map