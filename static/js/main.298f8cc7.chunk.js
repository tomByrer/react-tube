(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(n,e,t){n.exports=t.p+"static/media/logo.2cb7c9ef.svg"},38:function(n,e,t){n.exports=t(57)},44:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(11),r=t.n(i),c=(t(44),t(34)),d=t(9),l=t(35),u=t(2),s=t(29),p=t.n(s),m=t(3);function f(){var n=Object(m.a)(["\n  width: 100%;\n  padding-bottom: 56.25%;\n  position: relative;\n"]);return f=function(){return n},n}function h(){var n=Object(m.a)(["\n  position: relative;\n  -webkit-box-flex: 2;\n  -ms-flex: 2 0 900px;\n  flex: 2 0 900px;\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return h=function(){return n},n}var b=u.c.div(h()),g=u.c.div(f()),v=function(n){var e=n.autoplay,t=n.active,o=n.endCallback,i=n.progressCallback;return a.a.createElement(b,null,a.a.createElement(g,null,a.a.createElement(p.a,{width:"100%",height:"100%",style:{position:"absolute",top:"0"},playing:e,controls:!0,url:t.video,onEnded:o,onProgress:i})))};function x(){var n=Object(m.a)(["\n  background: #565656;\n  font-size: 0.8em;\n  padding: 2px 5px;\n  height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 5px;\n"]);return x=function(){return n},n}function w(){var n=Object(m.a)(["\n  background: ",';\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: #fff;\n  padding: 0 20px;\n  margin: 0 0 20px 0;\n  min-height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n']);return w=function(){return n},n}var y=u.c.div(w(),function(n){return n.nightMode?"#1a5d7d":"#2196f3"}),k=u.c.div(x()),E=function(n){var e=n.active,t=n.total,o=n.nightMode;return a.a.createElement(y,{nightMode:o},a.a.createElement("p",null,e.title),a.a.createElement(k,null,e.num,"/",t))};function M(){var n=Object(m.a)(['\n  font-family: "Hind", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: none;\n  border: ',";\n  font-size: 1.6em;\n  color: ",";\n  min-height: 50px;\n  padding: 10px 20px;\n  margin: 0 0 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: ",";\n  cursor: pointer;\n  position: relative;\n\n  .player_video_num {\n    flex-grow: 1; /* default 0 */\n    max-width: 30px;\n    padding-right: 20px;\n    border-right: 2px solid #565656;\n    ::before {\n        display: ",';\n        content: "";\n        width: 10px;\n        min-height: 10px;\n        background: #409f4e;\n        border-radius: 50px;\n        position: absolute;\n        left: 0px;\n      }\n  }\n\n  .player_video_name,\n  .player_video_name a {\n    flex-grow: 10; /* default 0 */\n    padding: 0 0 0 10px;\n    color: ',";\n    text-align: left;\n    text-decoration: none;\n    display: block;\n  }\n\n  .player_video_duration {\n    background: #565656;\n    min-width: 50px;\n    color: #fff;\n    font-size: 0.8em;\n    padding: 0px 5px;\n    height: 20px;\n    text-align: center;\n    border-radius: 5px;\n    margin: 0 0 0 5px;\n  }\n\n  .player_video_download{\n    flex-grow: 1; /* default 0 */\n    color: ",';\n    margin: 0 0 0 20px;\n    max-width: 30px;\n    padding: 0 20px;\n    border-left: 2px solid #565656;\n    font-family: "fontello";\n    font-style: normal;\n    font-weight: normal;\n  }\n\n  .player_video_download a {\n    color: ',";\n  }\n\n  .active {\n    opacity: 0.1;\n  }\n"]);return M=function(){return n},n}var j=u.c.div(M(),function(n){return n.active?"2px double #696969":"none"},function(n){return n.theme.color},function(n){return n.active?"5px":"0"},function(n){return n.played?"block":"none"},function(n){return n.theme.color},function(n){return n.played?"#fff":n.theme.color},function(n){return n.played&&!n.active?"#fff":n.theme.color}),O=function(n){var e=n.video,t=n.active,o=n.played;return a.a.createElement(j,{active:t,played:o},a.a.createElement("div",{className:"player_video_num"},e.num),a.a.createElement("div",{className:"player_video_name"},e.title),a.a.createElement("div",{className:"player_video_duration"},e.duration))},I=t(58),_=function(n){return function(e){var t=Object(d.a)({},e,{video:Object(d.a)({},e.video,{title:a.a.createElement(I.a,{to:{pathname:"/".concat(e.video.id),autoplay:!0}},e.video.title)})});return a.a.createElement(n,t)}};function S(){var n=Object(m.a)(["\n  padding: 0 20px 0 20px;\n  overflow-y: auto;\n  height: 28vw;\n  max-height: 500px;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 2px;\n  }\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"]);return S=function(){return n},n}var C=u.c.div(S()),R=_(O),T=function(n){var e=n.videos,t=n.active;return a.a.createElement(C,null,e.map(function(n){return a.a.createElement(R,{key:n.id,video:n,active:n.id===t.id,played:n.played})}))};function V(){var n=Object(m.a)(['\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: ',';\n  padding: 0;\n  margin: 20px;\n\n  /* CSS taken from https://www.w3schools.com/howto/howto_css_switch.asp */\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 24px;\n  }\n\n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 16px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  input:checked + .slider {\n    background-color: #ba202e;\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px #ccc;\n  }\n\n  input:checked + .slider:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n  }\n\n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 30px;\n  }\n\n  .slider.round:before {\n    border-radius: 50%;\n  }\n']);return V=function(){return n},n}var H=u.c.div(V(),function(n){return n.theme.color}),N=function(n){var e=n.nightModeCallback,t=n.nightMode;return a.a.createElement(H,null,a.a.createElement("span",null,"NightMode"),a.a.createElement("label",{className:"switch"},a.a.createElement("input",{type:"checkbox",checked:t,onChange:e}),a.a.createElement("span",{className:"slider round"})))};function U(){var n=Object(m.a)(["\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 450px;\n  flex: 1 1 450px;\n  overflow: hidden;\n  color: white;\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return U=function(){return n},n}var L=u.c.div(U()),P=function(n){var e=n.videos,t=n.active,o=n.nightModeCallback,i=n.nightMode;return a.a.createElement(L,null,a.a.createElement(N,{nightModeCallback:o,nightMode:i}),a.a.createElement(E,{active:t,total:e.length,nightMode:i}),a.a.createElement(T,{videos:e,active:t}))},z=t(32),J=t.n(z);function A(){var n=Object(m.a)(["\n    height: 29px;\n    width: 35px;\n    margin-top: 8px;\n"]);return A=function(){return n},n}function X(){var n=Object(m.a)(["\n    height: 50px;\n    background: ",";\n    color: #fff;\n    line-height: 50px;\n    padding-left: 10px;\n    font-size: 40px;\n"]);return X=function(){return n},n}function Q(){var n=Object(m.a)(["\n  background: ",";\n  border: ",";\n  max-width: 1800px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  max-height: 544px;\n  transition: all 0.5s ease;\n\n  @media screen and (max-width: 1400px) {\n    display: block;\n    max-height: 10000px;\n  }\n"]);return Q=function(){return n},n}var W=u.c.div(Q(),function(n){return n.theme.bgcolor},function(n){return n.theme.border}),B=u.c.div(X(),function(n){return n.nightMode?"#232323":"#2196f3"}),F=u.c.img(A()),D={playlistId:"react_videos",playlist:[{num:1,title:"Learn React.js - Full Course for Beginners - Tutorial",id:"DLX62G4lc44",duration:"5:05:33",video:"https://www.youtube.com/embed/DLX62G4lc44"},{num:2,title:"Learn React - React Crash Course 2018 - React Tutorial with Examples",id:"Ke90Tje7VS0",duration:"2:25:26",video:"https://www.youtube.com/embed/Ke90Tje7VS0"},{num:3,title:"React JS Tutorial | Learn ReactJS From a Top Udemy Instructor",id:"UtIOMUQ7nWM",duration:"2:19:04",video:"https://www.youtube.com/embed/UtIOMUQ7nWM"},{num:4,title:"React Higher Order Components Tutorial",id:"A9_9gQIkfx4",duration:"15:39",video:"https://www.youtube.com/embed/A9_9gQIkfx4"},{num:5,title:"ReactCasts #10 - Redux Thunk Tricks",id:"xihoZZU0gao",duration:"09:51",video:"https://www.youtube.com/embed/xihoZZU0gao"},{num:6,title:"Understanding Generator Functions & Using Redux Saga",id:"o3A9EvMspig",duration:"11:18",video:"https://www.youtube.com/embed/o3A9EvMspig"},{num:7,title:"React-Redux : Introduction and setup",id:"ghI-gMi1DPc",duration:"10:51",video:"https://www.youtube.com/embed/ghI-gMi1DPc"},{num:8,title:"Persist the state in sessionStorage",id:"r5fLW4PUrSQ",duration:"10:06",video:"https://www.youtube.com/embed/r5fLW4PUrSQ"},{num:9,title:"Higher order functions",id:"L89dt9sHNJ0",duration:"06:09",video:"https://www.youtube.com/embed/L89dt9sHNJ0"},{num:10,title:"React JS Crash Course - 2019",id:"sBws8MSXN7A",duration:"01:38:23",video:"https://www.youtube.com/embed/sBws8MSXN7A"}]},Z={bgcolor:"#353535",bgcolorItem:"#414141",bgcolorItemActive:"#405c63",bgcolorPlayed:"#526d4e",border:"none",borderPlayed:"none",color:"#fff"},G={bgcolor:"#fff",bgcolorItem:"#fff",bgcolorItemActive:"#80a7b1",bgcolorPlayed:"#7d9979",border:"1px solid #353535",borderPlayed:"none",color:"#353535"},K=function(n){var e=JSON.parse(localStorage.getItem("".concat(D.playlistId))),t=Object(o.useState)({videos:e?e.videos:D.playlist,activeVideo:e?e.activeVideo:D.playlist[0],nightMode:!e||e.nightMode,playlistId:e?e.playlistId:D.playlistId,autoplay:!!e&&e.autoplay}),i=Object(l.a)(t,2),r=i[0],s=i[1];Object(o.useEffect)(function(){localStorage.setItem("".concat(r.playlistId),JSON.stringify(Object(d.a)({},r)))},[r]),Object(o.useEffect)(function(){var e=n.match.params.activeVideo;if(void 0!==e){var t=r.videos.findIndex(function(n){return n.id===e});s(Object(d.a)({},r,{activeVideo:r.videos[t],autoplay:n.location.autoplay}))}else n.history.push({pathname:"/".concat(r.activeVideo.id),autoplay:!1})},[n.match.params.activeVideo]);return a.a.createElement(u.a,{theme:r.nightMode?Z:G},null!==r.videos?a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{nightMode:r.nightMode},a.a.createElement(F,{src:J.a,alt:"logo"}),"React Tube"),a.a.createElement(W,null,a.a.createElement(v,{active:r.activeVideo,autoplay:r.autoplay,endCallback:function(){var e=n.match.params.activeVideo,t=r.videos.findIndex(function(n){return n.id===e}),o=t===r.videos.length-1?0:t+1;n.history.push({pathname:"".concat(r.videos[o].id),autoplay:!1})},progressCallback:function(n){var e,t=r.activeVideo.duration.split(":");if(e=3===t.length?60*+t[0]*60+60*+t[1]+ +t[2]:2===t.length?60*+t[0]+ +t[1]:+t[0],n.playedSeconds>e-60){var o=Object(c.a)(r.videos);o.find(function(n){return n.id===r.activeVideo.id}).played=!0,s(Object(d.a)({},r,{videos:o}))}}}),a.a.createElement(P,{videos:r.videos,active:r.activeVideo,nightModeCallback:function(){s(Object(d.a)({},r,{nightMode:!r.nightMode}))},nightMode:r.nightMode}))):null)},$=t(59),q=t(61),Y=t(60);function nn(){var n=Object(m.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-size: 10px;\n    font-family: 'Hind', sans-serif;\n  }\n"]);return nn=function(){return n},n}var en=Object(u.b)(nn()),tn=function(){return a.a.createElement($.a,{basename:"/react-tube/"},a.a.createElement(a.a.Fragment,null,a.a.createElement(q.a,null,a.a.createElement(Y.a,{exact:!0,path:"/",component:K}),a.a.createElement(Y.a,{exact:!0,path:"/:activeVideo",component:K})),a.a.createElement(en,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(tn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.298f8cc7.chunk.js.map