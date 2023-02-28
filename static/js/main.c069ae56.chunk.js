(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{26:function(n,e,t){},28:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r,a,i,c,s,o,d,l,h,b,p,j,x,m,u,g,f,O,w,v,y,k,z,C,_=t(1),D=t.n(_),S=t(15),F=t.n(S),M=(t(26),t(10)),P=t.n(M),Y=t(16),B=t(5),H=(t(28),t(11)),A=t(2),I=t(3),T=t.p+"static/media/dominik-schroder-unsplash.0c379f90.jpg",q=I.a.div(r||(r=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  width: 100vw;\n  height: 1200px;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: black;\n  background: linear-gradient(\n      45deg,\n      rgba(9, 121, 112, 0.3) 0%,\n      rgba(124, 167, 167, 0.4) 20%\n    ),\n    url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom;\n  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.3);\n  overflow-x: hidden;\n\n  @media (min-width: 768px) {\n    height: 1100px;\n  }\n"])),T),E=t(0),G=function(n){return Object(E.jsx)(q,{children:n.children})},W=I.a.header(a||(a=Object(A.a)(["\n  height: 10em;\n  display: flex;\n  flex-direction: column;\n"]))),X=I.a.div(i||(i=Object(A.a)(['\n  align-self: center;\n  font-family: "Fresh Orange";\n  font-weight: 400;\n  line-height: 0.5;\n  font-size: 1.5rem;\n  z-index: 1000;\n\n  @media (min-width: 768px) {\n    font-size: 1.8rem;\n  }\n']))),J=t.p+"static/media/clouds.b6c770e0.svg",K=Object(I.b)(c||(c=Object(A.a)(["\n  0% {\n    transform: translate(-50%, -40%);\n  }\n  100% {\n    transform: translate(100%, 0);\n  }\n"]))),L=Object(I.b)(s||(s=Object(A.a)(["\n0% {\n  transform: translate(20%, 40%);\n}\n50% {\n\n  transform: translate(-10%, 60%);\n}\n75% {\n  transform: translate(5%, 5%);\n}\n100% {\n  transform: translate(30%, 30%);\n}\n"]))),V=I.a.div(o||(o=Object(A.a)(["\n  opacity: 0.3;\n"]))),N=I.a.img(d||(d=Object(A.a)(["\n  width: 20%;\n  animation: "," 4s infinite alternate;\n  transition: 0.5s ease;\n\n  &:nth-child(1) {\n    width: 25%;\n    animation: "," 5s infinite alternate;\n  }\n  &:nth-child(2) {\n    width: 20%;\n    animation: "," infinite alternate 9s;\n  }\n  &:nth-child(3) {\n    width: 10%;\n    animation: "," 3s infinite alternate;\n  }\n  @media (min-width: 1200px) {\n    &:nth-child(1) {\n      width: 5%;\n    }\n    &:nth-child(2) {\n      width: 10%;\n    }\n    &:nth-child(3) {\n      width: 12%;\n    }\n  }\n"])),K,K,L,K),U=function(){return Object(E.jsxs)(V,{children:[Object(E.jsx)(N,{src:J}),Object(E.jsx)(N,{src:J}),Object(E.jsx)(N,{src:J}),Object(E.jsx)(N,{src:J})]})},Q=function(){return Object(E.jsxs)(W,{children:[Object(E.jsxs)(X,{children:[Object(E.jsx)("h1",{children:"On Cloud Nine -"})," ",Object(E.jsx)("h2",{children:"the Weather App"})]}),Object(E.jsx)(U,{})]})},R=Object(I.b)(l||(l=Object(A.a)(["\n0% {\ntransform: scale(1);\n}\n50% {\ntransform: scale(1.2);\n}\n100% {\n  transform: scale(1);\n}\n"]))),Z=I.a.div(h||(h=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  margin: auto;\n\n  @media (min-width: 768px) {\n    width: 50%;\n  }\n"]))),$=I.a.input(b||(b=Object(A.a)(["\n  padding: 20px;\n  margin: 1em auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  letter-spacing: 4px;\n  flex: 1;\n  z-index: 1000;\n  &:focus {\n    outline: none;\n    border: 1.5px solid grey;\n  }\n  @media (min-width: 768px) {\n    padding: 25px;\n  }\n"]))),nn=I.a.button(p||(p=Object(A.a)(["\n  width: 70px;\n  height: 50px;\n  margin-left: 0.5em;\n  padding: 5px 1px;\n  outline: none;\n  border: none;\n  color: #ddd;\n  border-radius: 10px;\n  font-size: 1rem;\n  background-color: var(--primary);\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n  z-index: 1000;\n\n  &:hover {\n    animation: "," 1s alternate;\n    background-color: #ddd;\n    color: #333;\n  }\n\n  @media (min-width: 768px) {\n    width: 100px;\n    height: 60px;\n    margin-left: 1em;\n  }\n"])),R),en=t(20),tn=t(21),rn=function(n){var e=n.api_call;return console.log(e),Object(E.jsx)("form",{onSubmit:e,children:Object(E.jsxs)(Z,{children:[Object(E.jsx)($,{type:"text",name:"location",placeholder:"location"}),Object(E.jsx)(nn,{children:Object(E.jsx)(en.a,{icon:tn.a})})]})})},an=Object(I.b)(j||(j=Object(A.a)(["\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  \n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n"]))),cn=I.a.div(x||(x=Object(A.a)(["\n  position: relative;\n  border-radius: 40px;\n  box-shadow: 1px 0.5px 15px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform-style: preserve-3d;\n  transition: transform 0.25s ease;\n  cursor: pointer;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);\n"]))),sn=I.a.div(m||(m=Object(A.a)(["\n  align-self: center;\n  background: transparent;\n  margin: 2em 0;\n  border-radius: 40px;\n  width: 350px;\n  min-height: 600px;\n  perspective: 1000px;\n  overflow: hidden;\n\n  &:hover "," {\n    transform: rotateY(180deg);\n    border-radius: 40px;\n  }\n\n  @media (max-width: 360px) {\n    width: 320px;\n  }\n\n  @media (max-width: 768px) {\n    &:hover ",", &:active "," {\n      transform: rotateY(180deg);\n      border-radius: 40px;\n    }\n  }\n"])),cn,cn,cn),on=I.a.div(u||(u=Object(A.a)(["\n  background-color: var(--orange);\n  color: var(--skyblue);\n  padding: 0.3em;\n  min-height: 30%;\n  letter-spacing: 2px;\n\n  & h2 {\n    color: var(--primary);\n  }\n"]))),dn=I.a.div(g||(g=Object(A.a)(["\n  position: absolute;\n  background-color: lightgray;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: rotateX(0deg);\n  border-radius: 20px;\n\n  & img {\n    max-height: 80%;\n  }\n  & > h1 {\n    color: crimson;\n  }\n  & > h2 {\n    color: yellow;\n    font-size: 2rem;\n  }\n  & > h3 {\n    color: lightgray;\n    font-weight: 100;\n  }\n"]))),ln=I.a.div(f||(f=Object(A.a)(["\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  display: grid;\n  place-items: center;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: rotateY(180deg);\n\n  & p {\n    width: 80%;\n    line-height: 1.6;\n  }\n"]))),hn=I.a.button(O||(O=Object(A.a)(["\n  padding: 0.7em 1em;\n  font-size: 1rem;\n  border-radius: 20px;\n  border: 0.1px solid grey;\n  outline: none;\n  transition: all 0.13s ease-in;\n  cursor: pointer;\n\n  &:hover {\n    color: royalblue;\n    animation: "," 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  }\n  &:active {\n    border: 2px solid royalblue;\n  }\n"])),an),bn=I.a.div(w||(w=Object(A.a)(["\n  width: 100%;\n  background-color: lightgrey;\n  padding: 1em;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n\n  & h2 {\n    font-size: 1.3rem;\n    color: var(--primary);\n  }\n\n  & span {\n    display: block;\n    margin-bottom: 1em;\n    color: white;\n    background-color: var(--orange);\n    border-radius: 20px;\n    padding: 12px;\n    letter-spacing: 2px;\n  }\n"]))),pn=function(n){var e=n.main,t=n.weather,r=e||[],a=r.temp,i=r.pressure;return Object(E.jsxs)(bn,{children:[a&&Object(E.jsx)("span",{children:Object(E.jsxs)("h2",{children:["temp: ",a.toFixed(),"\xb0C"]})}),!t.length&&Object(E.jsx)("h2",{children:"I am lost."}),i&&Object(E.jsxs)("span",{children:["Pressure: ",i," hPa"]}),e&&Object(E.jsx)("span",{children:t[0].description})]})},jn=function(n){var e=n.weatherData,t=n.image,r=n.description,a=Object(_.useState)(!0),i=Object(B.a)(a,2),c=i[0],s=i[1],o=e||[],d=o.name,l=o.sys,h=o.weather,b=void 0===h?[{icon:""}]:h,p=o.main,j="http://openweathermap.org/img/wn/".concat(b[0].icon,"@2x.png"),x=function(){b&&l&&s(!c)};return Object(E.jsx)(sn,{children:Object(E.jsxs)(cn,{children:[Object(E.jsxs)(dn,{children:[Object(E.jsxs)(on,{children:[d&&Object(E.jsx)("h1",{children:d}),Object(E.jsxs)("div",{children:[p&&Object(E.jsxs)("h2",{children:[p.temp.toFixed(),"\xb0C"]}),""===b[0].icon&&Object(E.jsx)("h3",{children:"Try searching again"}),""!==b[0].icon&&Object(E.jsx)("img",{src:j,alt:"weather-icon"})]})]}),t&&Object(E.jsx)("img",{src:t,alt:""})]}),Object(E.jsxs)(ln,{children:[d&&l&&Object(E.jsxs)("h2",{children:[d,", ",l.country]}),r&&Object(E.jsx)("p",{children:r}),c&&Object(E.jsx)(pn,{main:p,weather:b}),!c&&p&&Object(E.jsx)(hn,{onClick:x,children:"\u2193"}),c&&p&&Object(E.jsx)(hn,{onClick:x,children:"\u2191"}),""===b[0].icon&&Object(E.jsx)("img",{src:"https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80",alt:""})]})]})})},xn=I.a.footer(v||(v=Object(A.a)(["\n  margin-top: auto;\n  width: 100%;\n  padding: 1em;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 0.8rem;\n  background-color: #242240;\n  color: #6c716b;\n  letter-spacing: 0.5px;\n\n  & a {\n    color: var(--primary);\n  }\n"]))),mn=function(){return Object(E.jsxs)(xn,{children:[Object(E.jsx)("p",{children:"\xa9 Copyrights 2021"}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("span",{children:["Icons made by"," ",Object(E.jsx)("a",{href:"https://www.freepik.com",rel:"noreferrer",title:"Freepik",target:"_blank",children:"Freepik"})]})," ","|"," ",Object(E.jsx)("span",{children:Object(E.jsx)("a",{href:"https://www.flaticon.com/",rel:"noreferrer",title:"Flaticon",target:"_blank",children:"www.flaticon.com"})})]}),Object(E.jsxs)("div",{children:["  ","Photo by"," ",Object(E.jsx)("span",{children:Object(E.jsx)("a",{href:"https://unsplash.com/@wirhabenzeit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Dominik Schr\xf6der"})})," ","on"," ",Object(E.jsx)("span",{children:Object(E.jsx)("a",{href:"/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})})]})]})},un=Object(I.a)(sn)(y||(y=Object(A.a)(["\n  margin: auto;\n  display: grid;\n  place-items: center;\n  background-color: transparent;\n  cursor: pointer;\n"]))),gn=Object(I.a)(cn)(k||(k=Object(A.a)(["\n  height: 400px;\n"]))),fn=Object(I.a)(dn)(z||(z=Object(A.a)(["\n  display: grid;\n  place-items: center;\n  & span {\n    color: var(--primary);\n  }\n"]))),On=Object(I.a)(ln)(C||(C=Object(A.a)(["\n  & img {\n    max-width: 100%;\n  }\n"]))),wn=function(n){var e=n.image;return Object(E.jsx)(un,{children:Object(E.jsxs)(gn,{children:[Object(E.jsx)(fn,{children:Object(E.jsx)("span",{children:"Please enter valid city name."})}),Object(E.jsxs)(On,{children:[Object(E.jsx)("img",{src:e,alt:""}),Object(E.jsx)("img",{src:"https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80",alt:"man holding a map"})]})]})})},vn=function(n,e,t){var r=Math.random()*(e-n)+n;return t?r:Math.floor(r)},yn=function(){var n=Object(_.useState)(null),e=Object(B.a)(n,2),t=e[0],r=e[1],a=Object(_.useState)(""),i=Object(B.a)(a,2),c=i[0],s=i[1],o=Object(_.useState)(""),d=Object(B.a)(o,2),l=d[0],h=d[1],b=Object(_.useState)(!1),p=Object(B.a)(b,2),j=p[0],x=p[1],m=function(){var n=Object(Y.a)(P.a.mark((function n(e){var t,a,i,c,o,d,l,b,p,j,m;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!(t=e.target.elements.location.value)){n.next=37;break}return n.prev=3,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(H.a.API_KEY,"&units=metric"),n.next=7,fetch(a);case 7:return i=n.sent,n.next=10,i.json();case 10:return c=n.sent,r(c),o="https://api.unsplash.com/search/photos?page=3&query=".concat(t,"&client_id=").concat(H.a.ACCESS_KEY),n.next=15,fetch(o);case 15:return d=n.sent,n.next=18,d.json();case 18:l=n.sent,b=l.results.length,p=vn(0,b,!1),j=l.results[p].urls.small,m=l.results[p].description,s(j),h(m),x(!1),e.target.elements.location.value="",n.next=35;break;case 29:n.prev=29,n.t0=n.catch(3),console.log("error: ".concat(n.t0.message)),x(!0),s("https://source.unsplash.com/random"),h("");case 35:n.next=39;break;case 37:x(!0),r(null);case 39:case"end":return n.stop()}}),n,null,[[3,29]])})));return function(e){return n.apply(this,arguments)}}();return Object(E.jsxs)(G,{children:[Object(E.jsx)(Q,{}),Object(E.jsx)(rn,{api_call:m}),t&&c&&Object(E.jsx)(jn,{weatherData:t,image:c,description:l}),j&&!t&&Object(E.jsx)(wn,{image:c}),Object(E.jsx)(mn,{})]})},kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),a(n),i(n),c(n)}))};F.a.render(Object(E.jsx)(D.a.StrictMode,{children:Object(E.jsx)(yn,{})}),document.getElementById("root")),kn()}},[[35,1,2]]]);
//# sourceMappingURL=main.c069ae56.chunk.js.map