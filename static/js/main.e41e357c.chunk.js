(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1090:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),o=n.n(l),i=n(6),c=n(5),u=n(3),m=n(947),s=n(948),p=function(){function e(){Object(m.a)(this,e),this._data={projectRepo:"https://github.com/SabbyDude/portfolio",react95Repo:"https://github.com/React95/React95",items:[{id:"about",name:"About.txt",icon:"info_bubble",content:{paragraphs:["Hi! I am a student at Amity University, Rajasthan, currently pursuing a Bachelor's degree in Computer Application at AUR, and I'm really eager to learn new things and meet new people. I'm learning coding and writing fiction, and I've tried animation and video editing as well.","I grew up in love with two things, technology and stories, on a ground level, these two things are different from each other, however there are two traits they share, and they 're at the soul of these two things, Imagination and Creativity. Without them, people can't do anything in these two fields, and that's what I want to improve in\xa0myself, Imagination and Creativity.","The major application I've been using is C, Python, and I'm also trained with Blender and Wondershare Filmora as well. But recently, my interest in Web Development is growing and I'm learning\xa0more about it, and I'm also writing stories and planning on building a PC soon and get into Data Structure and Algorithms.","I'm currently working on a game, 'Labyrinth of Breughel', an 8-bit text based, choose your own adventure game with a music to keep you hooked, a demo for the game is available at 'Projects.txt'."]}},{id:"resume",name:"Resume.txt",icon:"notepad_2",content:{resumeLink:"https://drive.google.com/file/d/1uEOQN-EEEXAIskxU2S0McK2xwBqM3JRP/view?usp=sharing",workExperience:[{jobTitle:"Bussiness Partner",company:"Shakti Infotech",location:"Agra",period:"JULY 2020 \u2013 SEP 2020",accomplishments:["I helped my father as a bussiness partner for 2 moths","I interacted with the employees and managed the company during my time before beginning college"]}],education:[{credit:"Bachelor in Computer Application",place:"Amity University,Rajasthan",period:"SEP 2020 \u2013 PRESENT"}]}},{id:"projects",name:"Projects.txt",icon:"flying_through_space_100",content:{projects:[{title:"Labyrinth of Breughel Demo",description:"It is an 8-bit text based choose your own adventure game, inspired heavily from the book 'Cave of Time'.",myRole:"As of now,everything in the game is done by me and planning to complete this with assisstance from a group",techStack:"HTML5, Twine 2",url:"http://sabbydude.github.io/lob"}]}},{id:"skills",name:"Skills.txt",icon:"progman_11",content:{hard:[{name:"C",progress:95},{name:"Python",progress:88},{name:"Twine",progress:100},{name:"Blender",progress:80},{name:"Wondershare Filmora",progress:100},{name:"Story Writing",progress:99},{name:"HTML5",progress:50},{name:"2D Drawing",progress:70}],soft:"Analytical thinking, Teamwork, Creative, Problem solving, Logic Building, Entrepreneurship"}},{id:"contact",name:"Contact.txt",icon:"inetcfg_2301",content:{emailText:"If you want to hire me or invite to a project, just email me on ",email:"incsabbydude@gmail.com",socialText:"Or you can reach me out through social media:",social:[{name:"FaLinkedin",link:"https://www.linkedin.com/in/sarthak-bansal-bb5675198/"},{name:"FaGithub",link:"https://github.com/SabbyDude"}]}}]}}return Object(s.a)(e,[{key:"getItems",value:function(){return this._data.items.map((function(e){return{id:e.id,name:e.name,icon:e.icon}}))}},{key:"getItem",value:function(e){return this._data.items.find((function(t){return t.id===e}))}},{key:"getProjectInfo",value:function(){return{projectRepo:this._data.projectRepo,react95Repo:this._data.react95Repo}}}]),e}(),d=Object(a.createContext)();function f(){var e=Object(i.a)(["\n    text-decoration: none;\n    color: inherit;\n"]);return f=function(){return e},e}var h=u.default.a(f());var E=function(){var e=Object(a.useContext)(d).getProjectInfo(),t=e.projectRepo,n=e.react95Repo;return console.log(t,n),r.a.createElement(c.TaskBar,{list:r.a.createElement(c.List,null,r.a.createElement(c.List.Item,{className:"pointer",icon:"brush"},r.a.createElement(h,{href:n,target:"_blank"},"Built with React95")),r.a.createElement(c.List.Divider,null),r.a.createElement(c.List.Item,{className:"pointer",icon:"folder_file"},r.a.createElement(h,{href:t,target:"_blank"},"Repo")))})},g=n(11);function b(){var e=Object(i.a)(["\n\tmargin-top: 5px;\n"]);return b=function(){return e},e}function v(){var e=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tflex-direction: column;\n\ttext-align: center;\n\twidth: 25%;\n\tpadding: 10px 0;\n"]);return v=function(){return e},e}var y=u.default.div(v()),w=u.default.span(b());var k=function(e){var t=e.item,n=e.openNotepad,a=t.name,l=t.icon;return r.a.createElement(y,null,r.a.createElement(c.Icon,{name:l,className:"pointer",onClick:function(){return n(t)}}),r.a.createElement(w,null,a))};function x(){var e=Object(i.a)(["\n\tdisplay: flex;\n\tgrid-template-columns: repeat(4, 1fr);\n\tflex-wrap: wrap;\n"]);return x=function(){return e},e}var j=u.default.div(x());var I=function(e){var t=e.items,n=e.closeExplorer,a=e.openNotepad,l=e.isMobile;return r.a.createElement(c.Modal,{icon:"windows_explorer",title:"Explorer - Sarthak Bansal",closeModal:n,style:{left:l?"5%":"15%",top:"30%",width:l?"90%":400},menu:[{name:"File",list:[]},{name:"Edit",list:[]},{name:"Help",list:[]}]},r.a.createElement(c.Frame,{bg:"white",boxShadow:"in",height:"100%"},r.a.createElement(j,null,t.map((function(e){return r.a.createElement(k,{key:e.id,item:e,openNotepad:a})})))))};var O=function(e){var t=e.content.paragraphs;return r.a.createElement("div",null,r.a.createElement("h2",null,"About"),t.map((function(e,t){return r.a.createElement("p",{key:t},e)})))};function S(){var e=Object(i.a)(["\n    margin-bottom: 10px;\n"]);return S=function(){return e},e}var R=u.default.a(S());var _=function(e){var t=e.content,n=t.workExperience,a=t.education,l=t.resumeLink;return r.a.createElement("div",null,r.a.createElement("h2",null,"Work Experience"),n.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,r.a.createElement("b",null,e.jobTitle)," | ",e.company),r.a.createElement("p",null,e.period),r.a.createElement("ul",null,e.accomplishments.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("br",null))})),r.a.createElement("hr",null),r.a.createElement("h2",null,"Education"),a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,r.a.createElement("b",null,e.credit)),r.a.createElement("p",null,e.place),r.a.createElement("p",null,r.a.createElement("b",null,e.gpa)),r.a.createElement("p",null,e.period),r.a.createElement("br",null))})),r.a.createElement(R,{href:l,download:!0},r.a.createElement(c.Button,{style:{fontSize:"14px"},className:"pointer"},"Download Resume")))};function C(){var e=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center\n"]);return C=function(){return e},e}var T=u.default.div(C());var M=function(e){var t=e.content,n=e.isMobile;console.log(t);var a=t.hard,l=t.soft;return r.a.createElement("div",null,r.a.createElement("h2",null,"Technical Skills"),a.map((function(e,t){return r.a.createElement(T,{key:t},r.a.createElement("p",{style:{flex:1}},e.name),r.a.createElement(c.ProgressBar,{style:{flex:1},width:n?150:200,percent:e.progress}))})),r.a.createElement("br",null),r.a.createElement("h2",null,"Interpersonal Skills"),r.a.createElement("p",null,l))},B=n(14);function P(){var e=Object(i.a)(["\n    color: black;\n"]);return P=function(){return e},e}function L(){var e=Object(i.a)(["\n    display: inline;\n    font-size: 20px;\n    margin-left: 10px;\n"]);return L=function(){return e},e}var N={FaLinkedin:B.c,FaGithub:B.a,FaInstagram:B.b,FaTwitter:B.e,FaMedium:B.d},F=u.default.li(L()),A=u.default.a(P());var D=function(e){var t=e.content,n=t.email,a=t.emailText,l=t.socialText,o=t.social,i="mailto:".concat(n);return r.a.createElement("div",null,r.a.createElement("h2",null,"Let's have a chat!"),r.a.createElement("p",null,a,r.a.createElement("a",{href:i},n)),r.a.createElement("p",null,l),r.a.createElement("ul",null,o.map((function(e,t){var n=N[e.name];return r.a.createElement(F,{key:t},r.a.createElement(A,{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(n,null)))}))))};function W(){var e=Object(i.a)(["\n    margin-bottom: 10px;\n    margin-right: 15px;\n    font-size: 1.1em;\n"]);return W=function(){return e},e}var G=u.default.a(W());var H=function(e){var t=e.content.projects;return r.a.createElement("div",null,r.a.createElement("h2",null,"Projects"),t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description),e.myRole&&r.a.createElement("p",null,r.a.createElement("strong",null,"My role:")," ",e.myRole),r.a.createElement("p",null,r.a.createElement("strong",null,"Tech Stack:")," ",e.techStack),e.url&&r.a.createElement(G,{href:e.url,target:"__blank"},"Link"),e.repo&&r.a.createElement(G,{href:e.repo,target:"__blank"},"GitHub Repo"),r.a.createElement("hr",null))})))};var U=function(e){var t=e.id,n=e.isMobile,l=Object(a.useContext)(d),o=Object(a.useState)(null),i=Object(g.a)(o,2),c=i[0],u=i[1];if(Object(a.useEffect)((function(){var e=l.getItem(t);u(e)}),[t,l]),null===c)return r.a.createElement("div",null);switch(c.id){case"about":return r.a.createElement(O,{content:c.content});case"resume":return r.a.createElement(_,{content:c.content});case"skills":return r.a.createElement(M,{content:c.content,isMobile:n});case"contact":return r.a.createElement(D,{content:c.content});case"projects":return r.a.createElement(H,{content:c.content});default:return r.a.createElement("div",null)}};var z=function(e){var t=e.closeNotepad,n=e.selectedItem,a=e.isMobile;return r.a.createElement(c.Modal,{icon:"notepad",title:"Notepad - ".concat(n.name),closeModal:t,buttons:[{value:"Close",onClick:t}],style:{left:a?"5%":"50%",top:a?"3%":"15%",width:a?"90%":450},menu:[{name:"File",list:[]},{name:"Edit",list:[]}]},r.a.createElement(c.Frame,{bg:"white",boxShadow:"in",height:"100%",padding:20,style:{overflowY:"auto",maxHeight:"60vh"}},r.a.createElement(U,{id:n.id,isMobile:a})))},J=n(28),Y=n.n(J);function q(){var e=Object(i.a)(["\n    margin-left: 20px;\n    margin-top: 20px;\n\talign-items: center;\n"]);return q=function(){return e},e}var K=u.default.div(q());var Q=function(e){var t=e.openExplorer;return r.a.createElement("div",null,r.a.createElement(K,null,r.a.createElement(c.Icon,{className:"pointer",name:"windows_explorer",onClick:function(){return t()}}),r.a.createElement("div",null,"Explorer")),r.a.createElement(K,null,r.a.createElement(c.Icon,{className:"pointer",name:"media_cd",onClick:function(){return function(){if(Y.a.browserIsSupported()){var e=new Y.a({initialTracks:[{metaData:{artist:"Rick Astley",title:"Never Gonna Give You Up"},url:"".concat("","/never-gonna-give-you-up.mp3"),duration:213}]});e.onClose((function(){e.dispose()})),e.renderWhenReady(document.getElementById("winamp-container"))}}()}}),r.a.createElement("div",null,"Media")))};function X(){var e=Object(i.a)(["\n    position: absolute;\n    top: 20%;\n    left: 10%;\n"]);return X=function(){return e},e}var V=u.default.div(X());var Z=function(){return r.a.createElement(V,{id:"winamp-container"})};var $=function(){var e=window.innerWidth<850,t=Object(a.useContext)(d),n=Object(a.useState)(!1),l=Object(g.a)(n,2),o=l[0],i=l[1],c=Object(a.useState)(null),u=Object(g.a)(c,2),m=u[0],s=u[1],p=Object(a.useState)(!1),f=Object(g.a)(p,2),h=f[0],E=f[1],b=Object(a.useState)([]),v=Object(g.a)(b,2),y=v[0],w=v[1];return Object(a.useEffect)((function(){var n=t.getItems();w(n),i(!0),s(n[0]),E(!e)}),[t,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{openExplorer:function(){i(!0)}}),o&&r.a.createElement(I,{items:y,closeExplorer:function(){i(!1)},openNotepad:function(e){s(e),E(!0)},isMobile:e}),h&&r.a.createElement(z,{closeNotepad:function(){E(!1)},selectedItem:m,isMobile:e}),r.a.createElement(Z,null))};function ee(){var e=Object(i.a)(["\n  body{\n    font-size: 14px\n  }\n"]);return ee=function(){return e},e}var te=new p,ne=Object(u.createGlobalStyle)(ee()),ae=function(){return r.a.createElement(d.Provider,{value:te},r.a.createElement(c.ThemeProvider,null,r.a.createElement(c.GlobalStyle,null),r.a.createElement(ne,null),r.a.createElement($,null),r.a.createElement(E,null)))};o.a.render(r.a.createElement(ae,null),document.getElementById("root"))},949:function(e,t,n){e.exports=n(1090)}},[[949,1,2]]]);
//# sourceMappingURL=main.e41e357c.chunk.js.map