(this["webpackJsonpfake-api"]=this["webpackJsonpfake-api"]||[]).push([[0],{91:function(e,t,a){"use strict";a.r(t);var c=a(4),s=a(0),n=a.n(s),r=a(24),j=a.n(r),l=a(50),i=a(43),o=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(l.a,{bg:"dark",variant:"dark",children:[Object(c.jsx)(l.a.Brand,{href:"home",children:"Fake API"}),Object(c.jsxs)(i.a,{className:"mr-auto",children:[Object(c.jsx)(i.a.Link,{href:"home",children:"Home"}),Object(c.jsx)(i.a.Link,{href:"api",children:"API"})]})]})})},d=a(26),h=a(31),b=a(17),x=a(32),O=a(14),u=a(34),m=a(21),p=a(29),f=a(41),g=a.n(f),v=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({text:"",color:"",disabledBtn:!0}),j=Object(d.a)(r,2),l=j[0],i=j[1],o=Object(s.useState)({show:!1,msg:""}),f=Object(d.a)(o,2),v=f[0],N=f[1];return Object(s.useEffect)((function(){if(a)try{JSON.parse(a),i({text:"Valid JSON Format",color:"success",disabledBtn:!1})}catch(e){i({text:"Invalid JSON Format",color:"danger",disabledBtn:!0})}}),[a]),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(x.a,{className:"mt-5",children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(m.a,{className:"text-center",children:[Object(c.jsx)(m.a.Header,{children:"Post Your JSON"}),Object(c.jsxs)(m.a.Body,{children:[Object(c.jsx)(m.a.Title,{children:"Enter a JSON text and we will generate an endpoint to GET it"}),Object(c.jsxs)(O.a,{className:"mt-4",children:[Object(c.jsx)(O.a.Group,{controlId:"formBasicText",children:Object(c.jsx)(O.a.Control,{as:"textarea",rows:12,style:{resize:"none"},spellCheck:"false",value:a,onChange:function(e){return n(e.target.value)}})}),Object(c.jsx)(h.a,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(b.a,{children:Object(c.jsx)("p",{className:"text-left text-".concat(l.color),children:l.text})}),Object(c.jsx)(b.a,{className:"text-right",children:Object(c.jsx)(u.a,{variant:"primary",type:"submit",disabled:l.disabledBtn,onClick:function(e){e.preventDefault();var t=JSON.parse(a);g.a.post("/api",t).then((function(e){N({show:!0,msg:e.data.msg});var t=e.config.url+e.data.id;localStorage.setItem("endpoint",t)})).catch((function(){return N({show:!0,msg:"There was an error processing your request, please try again later"})}))},children:"Submit"})})]})})]})]})]})})}),Object(c.jsxs)(p.a,{show:v.show,onHide:function(){return N({show:!1,msg:""})},children:[Object(c.jsx)(p.a.Header,{closeButton:!0,children:Object(c.jsx)(p.a.Title,{children:"Request Response"})}),Object(c.jsx)(p.a.Body,{children:v.msg}),Object(c.jsx)(p.a.Footer,{children:Object(c.jsx)(u.a,{variant:"secondary",onClick:function(){return N({show:!1,msg:""})},children:"Close"})})]})]})},N=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),j=Object(d.a)(r,2),l=j[0],i=j[1];Object(s.useEffect)((function(){var e=localStorage.getItem("endpoint");e&&n(e)}),[]);return Object(c.jsx)(h.a,{children:Object(c.jsx)(x.a,{className:"mt-5",children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(m.a,{className:"text-center",children:[Object(c.jsx)(m.a.Header,{children:"Use the API"}),Object(c.jsxs)(m.a.Body,{className:"text-left",children:[Object(c.jsxs)(O.a,{children:[Object(c.jsxs)(O.a.Row,{children:[Object(c.jsx)(O.a.Label,{column:"lg",xs:"auto",children:"Endpoint:"}),Object(c.jsx)(b.a,{xs:!0,children:Object(c.jsx)(O.a.Control,{size:"lg",type:"text",value:a,onChange:function(e){return n(e.target.value)}})}),Object(c.jsx)(b.a,{xs:"auto",children:Object(c.jsx)(u.a,{variant:"success",size:"lg",onClick:function(e){e.preventDefault(),g.a.get(a).then((function(e){e.data=JSON.stringify(e.data,null,2),i(e.data)})).catch((function(e){e.response?i(e.response.data.msg):e.request&&i("Server out of reach, please try again later")}))},children:"GET"})})]}),Object(c.jsx)(O.a.Row,{children:Object(c.jsx)(O.a.Text,{className:"text-muted ml-1 mt-2",children:"You can use our example endpoint ".concat(window.location.href,"/1")})})]}),Object(c.jsx)("h2",{className:"mt-2",children:"Response:"}),Object(c.jsx)(O.a.Control,{as:"textarea",rows:12,style:{resize:"none"},spellCheck:"false",readOnly:!0,value:l})]})]})})})})},w=a(7);var S=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{}),Object(c.jsxs)(w.d,{children:[Object(c.jsx)(w.b,{path:"/home",children:Object(c.jsx)(v,{})}),Object(c.jsx)(w.b,{path:"/api",children:Object(c.jsx)(N,{})}),Object(c.jsx)(w.b,{path:"/",children:Object(c.jsx)(w.a,{to:"/home"})})]})]})},y=(a(90),a(47));j.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(y.a,{children:Object(c.jsx)(S,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.13e22b5c.chunk.js.map