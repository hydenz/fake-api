(this["webpackJsonpfake-api"]=this["webpackJsonpfake-api"]||[]).push([[0],{92:function(e,t,a){"use strict";a.r(t);var c=a(4),s=a(0),n=a.n(s),r=a(25),i=a.n(r),j=a(51),l=a(44),o=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(j.a,{bg:"dark",variant:"dark",children:[Object(c.jsx)(j.a.Brand,{href:"home",children:"Fake API"}),Object(c.jsxs)(l.a,{className:"mr-auto",children:[Object(c.jsx)(l.a.Link,{href:"home",children:"Home"}),Object(c.jsx)(l.a.Link,{href:"api",children:"API"})]})]})})},d=a(21),b=a(31),h=a(17),O=a(32),x=a(14),u=a(34),m=a(22),p=a(42),f=a(29),g=a(41),v=a.n(g),w=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({text:"",color:"",disabledBtn:!0}),i=Object(d.a)(r,2),j=i[0],l=i[1],o=Object(s.useState)({show:!1,msg:""}),g=Object(d.a)(o,2),w=g[0],N=g[1],S=Object(s.useState)(!1),y=Object(d.a)(S,2),k=y[0],B=y[1];return Object(s.useEffect)((function(){if(a)try{JSON.parse(a),l({text:"Valid JSON Format",color:"success",disabledBtn:!1})}catch(e){l({text:"Invalid JSON Format",color:"danger",disabledBtn:!0})}}),[a]),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(O.a,{className:"mt-5",children:Object(c.jsx)(h.a,{children:Object(c.jsxs)(m.a,{className:"text-center",children:[Object(c.jsx)(m.a.Header,{children:"Post Your JSON"}),Object(c.jsxs)(m.a.Body,{children:[Object(c.jsx)(m.a.Title,{children:"Enter a JSON text and we will generate an endpoint to GET it"}),Object(c.jsxs)(x.a,{className:"mt-4",children:[Object(c.jsx)(x.a.Group,{controlId:"formBasicText",children:Object(c.jsx)(x.a.Control,{as:"textarea",rows:12,style:{resize:"none"},spellCheck:"false",value:a,onChange:function(e){return n(e.target.value)}})}),Object(c.jsx)(b.a,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(h.a,{children:Object(c.jsx)("p",{className:"text-left text-".concat(j.color),children:j.text})}),Object(c.jsx)(h.a,{className:"text-right",children:Object(c.jsx)(u.a,{variant:"primary",type:"submit",disabled:j.disabledBtn,onClick:function(e){e.preventDefault(),B(!0);var t=JSON.parse(a);v.a.post("/api",t).then((function(e){N({show:!0,msg:e.data.msg});var t=window.location.href.replace("home","api/".concat(e.data.id));localStorage.setItem("endpoint",t)})).catch((function(){return N({show:!0,msg:"There was an error processing your request, please try again later"})})).then((function(){return B(!1)}))},children:k?Object(c.jsx)(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Submit"})})]})})]})]})]})})}),Object(c.jsxs)(f.a,{show:w.show,onHide:function(){return N({show:!1,msg:""})},children:[Object(c.jsx)(f.a.Header,{closeButton:!0,children:Object(c.jsx)(f.a.Title,{children:"Request Response"})}),Object(c.jsx)(f.a.Body,{children:w.msg}),Object(c.jsx)(f.a.Footer,{children:Object(c.jsx)(u.a,{variant:"secondary",onClick:function(){return N({show:!1,msg:""})},children:"Close"})})]})]})},N=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),i=Object(d.a)(r,2),j=i[0],l=i[1],o=Object(s.useState)(!1),f=Object(d.a)(o,2),g=f[0],w=f[1];Object(s.useEffect)((function(){var e=localStorage.getItem("endpoint");e&&n(e)}),[]);return Object(c.jsx)(b.a,{children:Object(c.jsx)(O.a,{className:"mt-5",children:Object(c.jsx)(h.a,{children:Object(c.jsxs)(m.a,{className:"text-center",children:[Object(c.jsx)(m.a.Header,{children:"Use the API"}),Object(c.jsxs)(m.a.Body,{className:"text-left",children:[Object(c.jsxs)(x.a,{children:[Object(c.jsxs)(x.a.Row,{children:[Object(c.jsx)(x.a.Label,{column:"lg",xs:"auto",children:"Endpoint:"}),Object(c.jsx)(h.a,{xs:!0,children:Object(c.jsx)(x.a.Control,{size:"lg",type:"text",value:a,onChange:function(e){return n(e.target.value)}})}),Object(c.jsx)(h.a,{xs:"auto",children:Object(c.jsx)(u.a,{variant:"success",size:"lg",onClick:function(e){e.preventDefault(),w(!0),v.a.get(a).then((function(e){e.data=JSON.stringify(e.data,null,2),l(e.data)})).catch((function(e){e.response?l(e.response.data.msg):e.request&&l("Server out of reach, please try again later")})).then((function(){return w(!1)}))},children:g?Object(c.jsx)(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"GET"})})]}),Object(c.jsx)(x.a.Row,{children:Object(c.jsx)(x.a.Text,{className:"text-muted ml-1 mt-2",children:"You can use our example endpoint ".concat(window.location.href,"/1")})})]}),Object(c.jsx)("h2",{className:"mt-2",children:"Response:"}),Object(c.jsx)(x.a.Control,{as:"textarea",rows:12,style:{resize:"none"},spellCheck:"false",readOnly:!0,value:j})]})]})})})})},S=a(7);var y=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{}),Object(c.jsxs)(S.d,{children:[Object(c.jsx)(S.b,{path:"/home",children:Object(c.jsx)(w,{})}),Object(c.jsx)(S.b,{path:"/api",children:Object(c.jsx)(N,{})}),Object(c.jsx)(S.b,{path:"/",children:Object(c.jsx)(S.a,{to:"/home"})})]})]})},k=(a(91),a(48));i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(k.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.9170ecd4.chunk.js.map