(this.webpackJsonpcvapp=this.webpackJsonpcvapp||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(3),s=a.n(r),c=a(13),i=a.n(c),h=(a(24),a(36)),d=a(37),l=(a(25),a(10)),o=a(12),j=a(14),m=a(15),u=a(9),b=a(17),p=a(16),x=a(29),g=a(30),O=a(31),y=a(32),v=a(33),C=a(34),I=a(35),f=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleBlur=function(e){return function(t){n.setState({touched:Object(o.a)(Object(o.a)({},n.state.touched),{},Object(l.a)({},e,!0))})}},n.state={name:"",email:"",contactno:"",address:"",skill:"",Achievements:"",Interest:"",school:"",schl1:"",clg:"",course:"",duration:"",org:"",startyear:"",cgpa:"",startyear1:"",cgpa1:"",startyear2:"",cgpa2:"",startyear3:"",touched:{name:!1,email:!1,contactno:!1,startyear:!1,cgpa:!1,startyear1:!1,cgpa1:!1,startyear2:!1,cgpa2:!1,startyear3:!1}},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleBlur=n.handleBlur.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(l.a)({},n,a))}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(this.state)),alert("Current State is: "+JSON.stringify(this.state)),e.preventDefault()}},{key:"validate",value:function(e,t,a,n,r,s,c,i,h,d){var l={name:"",email:"",contactno:"",startyear:"",cgpa:"",startyear1:"",cgpa1:"",startyear2:"",cgpa2:"",startyear3:""};this.state.touched.name&&!/^[a-z ,.'-]+$/i.test(e)?l.name="Name does not exist":this.state.touched.name&&e.length<7&&(l.name="name does not exist");this.state.touched.email&&!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)&&(l.email="Invalid email");return this.state.touched.contactno&&!/^\d+$/.test(a)&&(l.contactno="Contact Number should contain only numbers"),this.state.touched.startyear&&4!=n.length&&(l.startyear="Invalid content"),(this.state.touched.cgpa&&this.state.cgpa>10||this.state.touched.cgpa&&this.state.cgpa<0)&&(l.cgpa="Invalid cgpa"),this.state.touched.startyear1&&4!=s.length&&(l.startyear1="Invalid content"),(this.state.touched.cgpa1&&this.state.cgpa1>10||this.state.touched.cgpa&&this.state.cgpa1<0)&&(l.cgpa1="Invalid cgpa"),this.state.touched.startyear2&&4!=i.length&&(l.startyear2="Invalid content"),(this.state.touched.cgpa2&&this.state.cgpa2>10||this.state.touched.cgpa&&this.state.cgpa2<0)&&(l.cgpa2="Invalid cgpa"),this.state.touched.startyear3&&4!=d.length&&(l.startyear3="Invalid content"),l}},{key:"render",value:function(){var e=this.validate(this.state.name,this.state.email,this.state.contactno,this.state.startyear,this.state.cgpa,this.state.startyear1,this.state.cgpa1,this.state.startyear2,this.state.cgpa2,this.state.startyear3);return Object(n.jsx)("div",{className:"container row-content",children:Object(n.jsxs)(x.a,{onSubmit:this.handleSubmit,children:[Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"dp",md:2,children:"Profile Picture"}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)(v.a,{type:"file",name:"dp",id:"dp",accept:"image/png, image/jpeg"})}),Object(n.jsx)(O.a,{htmlFor:"name",md:2,children:"Name"}),Object(n.jsxs)(y.a,{md:10,children:[Object(n.jsx)(v.a,{type:"text",name:"name",id:"name",placeholder:"name",value:this.state.name,valid:this.state.touched.name&&""===e.name,invalid:""!==e.name,onBlur:this.handleBlur("name"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.name})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"email",md:2,children:"Email"}),Object(n.jsxs)(y.a,{md:10,children:[Object(n.jsx)(v.a,{type:"email",name:"email",id:"email",placeholder:"email",value:this.state.email,valid:this.state.touched.email&&""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.email})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"contactno",md:2,children:"Contactno"}),Object(n.jsxs)(y.a,{md:10,children:[Object(n.jsx)(v.a,{type:"text",name:"contactno",id:"contactno",placeholder:"contactno",value:this.state.contactno,valid:this.state.touched.contactno&&""===e.contactno,invalid:""!==e.contactno,onBlur:this.handleBlur("contactno"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.contactno})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"address",md:2,children:"Address"}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)(v.a,{type:"textarea",name:"address",id:"address",placeholder:"address",rows:"3",onChange:this.handleInputChange,required:!0})})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"skill",md:2,children:"Skills"}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)(v.a,{type:"textarea",name:"skill",id:"skill",placeholder:"enter your skills",rows:"6",onChange:this.handleInputChange,required:!0})})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"Achievements",md:2,children:"Achievements"}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)(v.a,{type:"textarea",name:"Achievements",id:"Achievements",placeholder:"Achievements/Certifications",rows:"8",onChange:this.handleInputChange,required:!0})})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"Interest",md:2,children:"Interest"}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)(v.a,{type:"textarea",name:"Interest",id:"Interest",placeholder:"Interest/Hobbies",rows:"8",onChange:this.handleInputChange,required:!0})})]}),Object(n.jsx)(y.a,{md:2,children:Object(n.jsx)("span",{children:"Education"})}),Object(n.jsx)("br",{}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)("span",{children:"Secondary Examination"})}),Object(n.jsxs)(y.a,{md:{size:10,offset:2},children:[Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"startyear",md:2,children:"Startyear"}),Object(n.jsxs)(y.a,{md:2,children:[Object(n.jsx)(v.a,{type:"text",name:"startyear",id:"startyear",placeholder:"startingyear",value:this.state.startyear,valid:this.state.touched.startyear&&""===e.startyear,invalid:""!==e.startyear,onBlur:this.handleBlur("startyear"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.startyear})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"cgpa",md:2,children:"CGPA"}),Object(n.jsxs)(y.a,{md:2,children:[Object(n.jsx)(v.a,{type:"number",name:"cgpa",id:"cgpa",placeholder:"enter cgpa",value:this.state.cgpa,valid:this.state.touched.cgpa&&""===e.cgpa,invalid:""!==e.cgpa,onBlur:this.handleBlur("cgpa"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.cgpa})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"school",md:2,children:"School"}),Object(n.jsx)(y.a,{md:4,children:Object(n.jsx)(v.a,{type:"text",name:"school",id:"school",placeholder:"schoolname",onChange:this.handleInputChange,required:!0})})]})]}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)("span",{children:"Senior Secondary Examination"})}),Object(n.jsxs)(y.a,{md:{size:10,offset:2},children:[Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"startyear1",md:2,children:"Startyear"}),Object(n.jsxs)(y.a,{md:2,children:[Object(n.jsx)(v.a,{type:"text",name:"startyear1",id:"startyear1",placeholder:"startingyear",value:this.state.startyear1,valid:this.state.touched.startyear1&&""===e.startyear1,invalid:""!==e.startyear1,onBlur:this.handleBlur("startyear1"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.startyear1})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"cgpa1",md:2,children:"CGPA"}),Object(n.jsxs)(y.a,{md:2,children:[Object(n.jsx)(v.a,{type:"number",name:"cgpa1",id:"cgpa1",placeholder:"enter cgpa",value:this.state.cgpa1,valid:this.state.touched.cgpa1&&""===e.cgpa1,invalid:""!==e.cgpa1,onBlur:this.handleBlur("cgpa1"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.cgpa1})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"schl1",md:2,children:"School"}),Object(n.jsx)(y.a,{md:4,children:Object(n.jsx)(v.a,{type:"text",name:"schl1",id:"schl1",placeholder:"schoolname",onChange:this.handleInputChange,required:!0})})]})]}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)("span",{children:"Graduation"})}),Object(n.jsxs)(y.a,{md:{size:10,offset:2},children:[Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"startyear2",md:2,children:"Startyear"}),Object(n.jsxs)(y.a,{md:2,children:[Object(n.jsx)(v.a,{type:"text",name:"startyear2",id:"startyear2",placeholder:"startingyear",value:this.state.startyear2,valid:this.state.touched.startyear2&&""===e.startyear2,invalid:""!==e.startyear2,onBlur:this.handleBlur("startyear2"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.startyear2})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"cgpa2",md:2,children:"CGPA"}),Object(n.jsxs)(y.a,{md:2,children:[Object(n.jsx)(v.a,{type:"number",name:"cgpa2",id:"cgpa2",placeholder:"enter cgpa",value:this.state.cgpa2,valid:this.state.touched.cgpa2&&""===e.cgpa2,invalid:""!==e.cgpa2,onBlur:this.handleBlur("cgpa2"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.cgpa2})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"clg",md:2,children:"College"}),Object(n.jsx)(y.a,{md:4,children:Object(n.jsx)(v.a,{type:"text",name:"clg",id:"clg",placeholder:"collegename",onChange:this.handleInputChange,required:!0})})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"course",md:2,children:"Course"}),Object(n.jsx)(y.a,{md:2,children:Object(n.jsx)(v.a,{type:"text",name:"course",id:"course",placeholder:"course",onChange:this.handleInputChange,required:!0})})]})]}),Object(n.jsx)(y.a,{md:10,children:Object(n.jsx)("span",{children:"Work Experience(Internship)"})}),Object(n.jsxs)(y.a,{md:{size:10,offset:2},children:[Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"startyear3",md:2,children:"Startyear"}),Object(n.jsxs)(y.a,{md:2,children:[Object(n.jsx)(v.a,{type:"text",name:"startyear3",id:"startyear3",placeholder:"startingyear",value:this.state.startyear3,valid:this.state.touched.startyear3&&""===e.startyear3,invalid:""!==e.startyear3,onBlur:this.handleBlur("startyear3"),onChange:this.handleInputChange,required:!0}),Object(n.jsx)(C.a,{children:e.startyear3})]})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"duration",md:2,children:"Duration"}),Object(n.jsx)(y.a,{md:2,children:Object(n.jsx)(v.a,{type:"number",name:"duration",id:"duration",placeholder:"enter duration",onChange:this.handleInputChange,required:!0})})]}),Object(n.jsxs)(g.a,{row:!0,children:[Object(n.jsx)(O.a,{htmlFor:"org",md:2,children:"Organization"}),Object(n.jsx)(y.a,{md:4,children:Object(n.jsx)(v.a,{type:"text",name:"org",id:"org",placeholder:"organization name",onChange:this.handleInputChange,required:!0})})]})]}),Object(n.jsx)(g.a,{row:!0,children:Object(n.jsx)(y.a,{md:{size:10,offset:2},children:Object(n.jsx)(I.a,{type:"submit",color:"primary",children:"SUBMIT"})})})]})})}}]),a}(r.Component);var w=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(h.a,{dark:!0,color:"primary",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(d.a,{href:"/",children:Object(n.jsx)("h1",{children:"CV-Maker"})})})}),Object(n.jsx)(f,{})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),B()}},[[28,1,2]]]);
//# sourceMappingURL=main.26fa425c.chunk.js.map