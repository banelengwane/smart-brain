(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(30),o=a.n(s),r=(a(69),a(7)),l=a(8),c=a(10),m=a(9),u=a(61),g=a.n(u),p=(a(269),function(e){var t=e.box,a=e.imageUrl;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputImage",alt:"",src:a,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})))}),h=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(i.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("signin"))}))},n.state={name:"",email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"name"),i.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(i.a.Component),f=a(62),w=a.n(f),E=a(63),v=a.n(E),A=(a(270),function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(w.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:v.a}))))}),N=(a(271),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This magic brain will detect faces in your pictures. Try it out"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form center pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),C=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current rank is...")),i.a.createElement("div",{className:"white f1"},a))},y=(a(272),{particles:{number:{value:30,density:{enable:!0,value_are:800}}}}),S={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},I=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3000/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.user.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3000/images",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=S,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(g.a,{className:"particles",params:y}),i.a.createElement(h,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(A,null),i.a.createElement(C,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(p,{box:s,imageUrl:a})):"signin"===n?i.a.createElement(d,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(b,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(273);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){e.exports="data:image/png;base64,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"},64:function(e,t,a){e.exports=a(274)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.3cd94fdd.chunk.js.map