(this["webpackJsonpword-world"]=this["webpackJsonpword-world"]||[]).push([[0],[,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),o=a(4),l=a.n(o),s=a(2),i=a(0);var r=function(){return Object(i.jsx)("div",{})};var j=function(){return Object(i.jsx)("div",{})};a(10),a(11);var u=function(t){var e,a=t.layout,c=a+"Header";return"fantasy"===a&&(e=Object(i.jsx)("img",{className:c+"__pic",src:"./pic/steamBG.png"})),"scifi"===a&&(e=Object(i.jsx)("img",{className:c+"__pic",src:"./pic/cyberBG.png"})),Object(i.jsxs)("div",{className:c,children:[e,"scifi"===a?Object(i.jsx)("h1",{className:c+"__title-overlay",children:"WordWorld"}):"",Object(i.jsx)("h1",{className:c+"__title",children:"WordWorld"})]})};a(12),a(13),a(14),a(15);var b=function(t){var e,a=t.layout,c=t.text,n=t.mod,o=t.onClick,l=a+"__btn";return e=""===n?l:l+" "+l+n,Object(i.jsx)("button",{className:e,onClick:o,children:c})};a(16),a(17);var g=function(t){var e=t.type,a=t.layout,c=t.valid,n=t.onChange,o=t.lableText;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("label",{className:a+"__label",children:o}),Object(i.jsx)("input",{className:c?a+"__textInput ":a+"__textInput "+a+"__textInput-invalid",type:e,onChange:n})]})};var d=function(t){var e=t.layout,a=Object(c.useState)(!0),n=Object(s.a)(a,2),o=n[0],l=n[1],r=Object(c.useState)(!0),j=Object(s.a)(r,2),u=j[0],d=j[1],O=Object(c.useState)(),m=Object(s.a)(O,2),x=m[0],h=m[1],v=Object(c.useState)(),f=Object(s.a)(v,2),y=f[0],p=f[1],S=Object(c.useState)(JSON.parse(localStorage.getItem("login"))),_=Object(s.a)(S,1)[0],I=e+"Login";return Object(i.jsxs)("div",{className:I,children:[Object(i.jsxs)("form",{className:I+"Form",onSubmit:function(){var t=!1;if(!t){for(var e=0;e<_.length;e++){var a=_[e];a.email===x&&a.password===y&&(console.log("ok"),localStorage.setItem("logged",!0),localStorage.setItem("loggedID",a.id),t=!0)}window.alert("Z\u0142y mail, albo has\u0142o!")}},children:[Object(i.jsx)(g,{type:"text",lableText:"E-mail:",layout:e,valid:u,onChange:function(t){var e=t.target.value;function a(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}a(e)||d(!1),a(e)&&(h(e),d(!0))}}),Object(i.jsx)(g,{type:"password",lableText:"Has\u0142o:",layout:e,valid:o,onChange:function(t){var e=t.target.value,a=0;e.match(/[a-z]/g)?a++:a=0;e.match(/[A-Z]/g)?a++:a=0;e.match(/[0-9]/g)?a++:a=0,e.length>=8?a++:a=0,4===a?(l(!0),p(e)):l(!1)}}),Object(i.jsx)(b,{type:"submit",layout:e,mod:"-short",text:"Zaloguj"})]}),Object(i.jsx)(b,{layout:e,mod:"",text:"Przypomnij Has\u0142o"})]})};a(18),a(19);var O=function(t){var e,a=t.layout,n=Object(c.useState)(!0),o=Object(s.a)(n,2),l=o[0],r=o[1],j=Object(c.useState)(!0),u=Object(s.a)(j,2),d=u[0],O=u[1],m=Object(c.useState)(!0),x=Object(s.a)(m,2),h=x[0],v=x[1],f=Object(c.useState)(),y=Object(s.a)(f,2),p=y[0],S=y[1],_=Object(c.useState)(),I=Object(s.a)(_,2),w=I[0],N=I[1],C=Object(c.useState)(),A=Object(s.a)(C,2),z=A[0],Z=A[1],k=Object(c.useState)(JSON.parse(localStorage.getItem("login"))),E=Object(s.a)(k,1)[0],J=Object(c.useState)(!1),T=Object(s.a)(J,2),W=T[0],B=T[1],D=function(){B(!W)};return"fantasy"===a&&(e=W?{diplay:"block"}:{display:"none"}),Object(i.jsxs)("div",{className:a+"__reg",children:["fantasy"===a?Object(i.jsx)(b,{layout:a,mod:"-big",text:"Rejestracja",onClick:D}):"",Object(i.jsx)("div",{className:a+"__reg_wrapper",style:e,children:Object(i.jsxs)("div",{className:a+"__reg_formBox",children:["fantasy"===a?Object(i.jsx)(b,{layout:a,mod:"-exit",text:"X",onClick:D}):"",Object(i.jsxs)("form",{onSubmit:function(){console.log();for(var t=!1,e=0;e<E.length;e++){var a=E[e];t||a.email===p&&(t=!0)}if(t)console.log("Mail w u\u017cyciu");else{var c=E,n=E[E.length-1].id;c.push({id:n+1,name:w,email:p,password:z}),localStorage.setItem("login",JSON.stringify(c))}},children:[Object(i.jsx)(g,{type:"text",lableText:"Imi\u0119 Postaci:",layout:a,valid:h,onChange:function(t){var e=t.target.value,a=0,c=e.split(""),n=/[a-z]/g;if(c.length>1)for(var o=1;o<c.length;o++)c[o].match(n)?a=1:(a=0,console.log("pozosta\u0142e litery"));e.length>=3?a++:(console.log("d\u0142ugo\u015b\u0107!"),a=0);c.length>0&&(c[0].match(/[A-Z]/g)?a++:(a=0,console.log("nie ma pierwszej du\u017cej litery")));e.match(/^[A-Za-z]+$/)?a++:a=0,4===a?(v(!0),N(e)):v(!1),console.log(h),console.log(a)}}),Object(i.jsx)(g,{type:"text",lableText:"E-mail:",layout:a,valid:d,onChange:function(t){var e=t.target.value;function a(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}a(e)||O(!1),a(e)&&(S(e),O(!0))}}),Object(i.jsx)(g,{type:"password",lableText:"Has\u0142o:",layout:a,valid:l,onChange:function(t){var e=t.target.value,a=0;e.match(/[a-z]/g)?a++:a=0;e.match(/[A-Z]/g)?a++:a=0;e.match(/[0-9]/g)?a++:a=0,e.length>=8?a++:a=0,4===a?(r(!0),Z(e)):r(!1)}}),Object(i.jsx)("div",{className:a+"__reg_btnBox",children:Object(i.jsx)(b,{type:"submit",layout:a,text:"Zarejestruj"})})]})]})})]})};var m=function(t){var e=t.onChange,a=Object(c.useState)("fantasy"),n=Object(s.a)(a,2),o=n[0],l=n[1];return Object(i.jsx)("div",{style:{position:"absolute",top:0},children:Object(i.jsx)("form",{onChange:function(t){l(t.target.value)},onClick:function(){return e(o)},children:Object(i.jsxs)("select",{name:"layout",id:"layout",children:[Object(i.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(i.jsx)("option",{value:"scifi",children:"Sci-Fi"})]})})})},x=JSON.stringify([{id:1,name:"admin1",email:"admin@abc.pl",password:"A123456a"},{id:2,name:"test1",email:"test@abc.pl",password:"A123456a"}]);a(20);var h=function(){var t=Object(c.useState)("fantasy"),e=Object(s.a)(t,2),a=e[0],n=e[1],o=Object(c.useState)(),l=Object(s.a)(o,2),b=l[0],g=l[1],h=Object(c.useState)(localStorage.getItem("loggedID")),v=Object(s.a)(h,2),f=v[0];v[1],Object(c.useEffect)((function(){null===localStorage.getItem("login")&&localStorage.setItem("login",x),null===localStorage.getItem("logged")?g(!1):g(localStorage.getItem("logged"))}),[]);var y=Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{layout:a}),Object(i.jsxs)("div",{style:{display:"block",margin:"auto",maxWidth:"62.5rem",position:"relative"},children:[Object(i.jsx)(d,{onSubmit:function(t){g(t)},layout:a}),Object(i.jsx)(O,{layout:a})]}),Object(i.jsx)(j,{}),Object(i.jsx)(r,{}),Object(i.jsx)(m,{onChange:function(t){n(t)}})]}),p=Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{style:{color:"white"},children:["GAME PAGE Welcome ID: ",f]}),Object(i.jsx)("form",{onSubmit:function(){localStorage.removeItem("logged"),localStorage.removeItem("loggedID")},children:Object(i.jsx)("input",{type:"submit",value:"X"})})]});return Object(i.jsx)("div",{children:b?p:y})};l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.9d60a585.chunk.js.map