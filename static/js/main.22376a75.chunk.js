(this.webpackJsonpstwars=this.webpackJsonpstwars||[]).push([[0],{25:function(e,t,a){},33:function(e,t,a){},48:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),l=(a(33),a(8)),i=a(11),o=a(13),u=a(14),d=a(16),m=a(15),p=a(17),h=a(10),g=a(44),E=a.n(g)()(),f=(a(25),a(22)),v=a.n(f),b=a(29),O=a(45),w=a.n(O).a.create({baseURL:"https://swapi.co/api/"}),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userName:null,pswd:null},a.componentDidUpdate=function(e){a.props.isLoggedIn&&E.push("/search")},a.onChangeField=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.onLoginClick=function(){a.props.authenticateUser(a.state.userName,a.state.pswd)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.pwd;return r.a.createElement("div",{className:"ui center aligned middle aligned grid login-container"},r.a.createElement("div",{className:"column login-module"},r.a.createElement("h2",{className:"ui teal center aligned header"},"Log-in to your account"),r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement("div",{className:"ui large form"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui fluid left icon input"},r.a.createElement("input",{placeholder:"User Name",name:"userName",value:t,onChange:this.onChangeField,type:"text"}),r.a.createElement("i",{"aria-hidden":"true",className:"user icon"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui fluid left icon input"},r.a.createElement("input",{placeholder:"Password",type:"password",name:"pswd",value:a,onChange:this.onChangeField}),r.a.createElement("i",{"aria-hidden":"true",className:"lock icon"}))),r.a.createElement("button",{className:"ui teal large fluid button",onClick:this.onLoginClick},"Login")))))}}]),t}(r.a.Component),y=Object(h.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,userId:e.auth.userId}}),{authenticateUser:function(e,t){return function(){var a=Object(b.a)(v.a.mark((function a(n){var r,c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.get("/people/?search=".concat(e));case 2:r=a.sent,c=r.data.results,c.filter((function(t){return t.name===e}))[0].birth_year===t&&(n({type:"LOG_IN",payload:{userId:e}}),E.push("/search"));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(j),L=a(19),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={searchString:""},a.componentDidMount=function(){a.props.isLoggedIn||E.push("/")},a.componentDidUpdate=function(e){a.props.isLoggedIn||E.push("/")},a.onSearchChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value)),a.props.plannetSearch(e.target.value)},a.searchResultRender=function(e){return e.map((function(e,t){var a="w_".concat(t," font_size_").concat(t," segmnt ");return r.a.createElement("div",{className:a},r.a.createElement(L.a,{to:"/planets/".concat(e.name)},e.name))}))},a.onCLickLogout=function(){a.props.LogoutUser()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.searchResult;return r.a.createElement("div",{class:"ui  fluid container "},r.a.createElement("div",{class:"ui centered  grid padded "},r.a.createElement("div",{class:" teal row"},r.a.createElement("div",{class:"three wide column"},"SWAPI"),r.a.createElement("div",{class:"nine wide column"},r.a.createElement("div",{class:"ui icon fluid input"},r.a.createElement("input",{type:"text",placeholder:"Search...",name:"searchString",onChange:this.onSearchChange,value:this.state.searchString}),r.a.createElement("i",{"aria-hidden":"true",class:"search icon"}))),r.a.createElement("div",{class:" four wide column"},r.a.createElement("div",{class:"item "},r.a.createElement("button",{class:"ui button right floated",onClick:this.onCLickLogout},"Logout"))))),r.a.createElement("div",{className:"resultContainer"},e.length?this.searchResultRender(e):null))}}]),t}(r.a.Component),C=Object(h.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,searchResult:e.swapData.searchResult}}),{plannetSearch:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(a,n){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/planets/?search=".concat(e));case 2:r=t.sent,c=r.data.results.sort((function(e,t){var a=e.population,n=t.population;return"unknown"==a?a=0:"unknown"==n&&(n=0),Number(a)<Number(n)?-1:Number(a)>Number(n)?1:0})),a({type:"SEARCH_RESULT",payload:{searchResult:c}});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},LogoutUser:function(){return{type:"LOGOUT_USER"}}})(N),I=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.planetData;return r.a.createElement("div",{class:"plannetContainer"},r.a.createElement("h5",{class:"ui box header"},"Plannet Details: "),r.a.createElement("div",{class:"ui teal segment"},r.a.createElement("div",{class:"ui cardBox  card"},r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"header"},e.name),r.a.createElement("div",{class:"meta"})),r.a.createElement("div",{className:"ui content"},r.a.createElement("div",{class:"ui small feed"},r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.population),r.a.createElement("b",null,"population:")),r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.rotation_period),r.a.createElement("b",null,"rotation_period:")),r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.orbital_period),r.a.createElement("b",null,"orbital_period:")),r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.diameter),r.a.createElement("b",null,"diameter:")),r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.climate),r.a.createElement("b",null,"climate:")),r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.gravity),r.a.createElement("b",null,"gravity:")),r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.terrain),r.a.createElement("b",null,"terrain:")),r.a.createElement("div",{class:"content"},r.a.createElement("span",{class:"right floated"},e.surface_water),r.a.createElement("b",null,"surface_water:")))),r.a.createElement("div",{class:"extra content"},r.a.createElement("div",{class:"ui buttons"},r.a.createElement(L.a,{to:"/search",class:"ui green basic button"},"Back to Search"))))))}}]),t}(r.a.Component),R=Object(h.b)((function(e,t){return console.log("owProps:",t.match.params),{planetData:e.swapData.searchResult.filter((function(e){return e.name==t.match.params.id}))[0]}}))(I),k=function(){var e;return r.a.createElement("div",{className:"App"},r.a.createElement(i.b,{history:E},r.a.createElement(i.c,null,r.a.createElement(i.a,(e={exact:!0,path:"/"},Object(l.a)(e,"exact",!0),Object(l.a)(e,"component",y),e)),r.a.createElement(i.a,{path:"/search",component:C}),r.a.createElement(i.a,{path:"/planets/:id",component:R}))))},S=a(47),_=a(12),U=a(21),x={isLoggedIn:null,userId:null},D={searchResult:[]},A=Object(_.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return Object(U.a)({},e,{isLoggedIn:!0,userId:t.payload.userId});case"LOGOUT_USER":return Object(U.a)({},e,{isLoggedIn:!1,userId:null});default:return e}},swapData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_RESULT":return Object(U.a)({},e,{searchResult:t.payload.searchResult});default:return e}}}),G=Object(_.d)(A,Object(_.a)(S.a));s.a.render(r.a.createElement(h.a,{store:G},r.a.createElement(k,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.22376a75.chunk.js.map