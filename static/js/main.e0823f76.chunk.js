(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{29:function(e,a,t){e.exports=t(65)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(23),l=t.n(o),c=(t(34),t(25)),i=t(6),s=t(8),d=t(28),u=(t(35),r.a.createContext({})),m=function(){var e=Object(n.useContext)(u);return r.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,t=e.name,n=e.picture,o=e.phone,l=e.email,c=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.large,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},o),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+l,target:"__blank"},l)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(c.date)))})):r.a.createElement(r.a.Fragment,null))},f=(t(36),function(){var e=Object(n.useContext)(u);return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-dark table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.developerState.headings.map((function(a){var t=a.name,n=a.width;return r.a.createElement("th",{className:"col",key:t,style:{width:n},onClick:function(){e.handleSort(t)}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(m,null)))}),v=(t(37),t(38),function(){var e=Object(n.useContext)(u);return r.a.createElement("div",{class:"searchbox"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text","data-toggle":"popover","data-content":"Disabled Popover",id:"searchBtn"},"Search")),r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"","aria-label":"Search",onChange:function(a){return e.handleSearchChange(a)}})))});var h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar bg"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse row",id:"navbarNav"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(v,null))))},p=t(24),g=t.n(p),b=function(){return g.a.get("https://randomuser.me/api?results=500&nat=us")},E=(t(56),function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"date of birth",width:"10%",order:"descend"}]}),a=Object(d.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){b().then((function(e){console.log(e.data.results),o(Object(s.a)(Object(s.a)({},t),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),r.a.createElement(u.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,n=t.users.filter((function(e){var t=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(a,t),-1!==t.indexOf(a.toLowerCase()))return e}));o(Object(s.a)(Object(s.a)({},t),{},{filteredUsers:n}))},handleSort:function(e){var a=t.headings.filter((function(a){return a.name===e})).map((function(e){return e.order})).toString();a="descend"===a?"ascend":"descend";var n=t.filteredUsers.sort((function(t,n){return"ascend"===a?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):"dob"===e?t[e].age-n[e].age:t[e].localeCompare(n[e]):void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):"dob"===e?n[e].age-t[e].age:n[e].localeCompare(t[e])})),r=t.headings.map((function(t){return t.order=t.name===e?a:t.order,t}));o(Object(s.a)(Object(s.a)({},t),{},{filteredUsers:n,headings:r}))}}},r.a.createElement(h,null),r.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?r.a.createElement(f,null):r.a.createElement("div",null)))});t(57);var w=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Shenron Studios 2020"))};t(58);var N=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," Shenron Software Employee Directory"))};t(59);var y=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};var S=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(N,null),r.a.createElement(i.a,{exact:!0,path:"/employee_directory",component:E})),r.a.createElement(w,null)))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/employee_directory",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/employee_directory","/service-worker.js");C?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(a,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.e0823f76.chunk.js.map