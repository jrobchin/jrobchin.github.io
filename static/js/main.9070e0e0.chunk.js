(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),c=(a(15),a(1)),l=a(2),o=a(4),m=a(3),b=a(5),u=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={mobileDropdown:!1},a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.location;return i.a.createElement("nav",{className:"navbar",role:"navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{id:"navbar-item-name",className:"navbar-item"},i.a.createElement("button",{className:"is-link"},"jason chin")),i.a.createElement("a",{role:"button",className:"navbar-burger burger","data-target":"nav-bar"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{id:"nav-bar",className:"navbar-menu"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement("button",{className:"is-link section-link"},"experience")),i.a.createElement("div",{className:"navbar-item"},i.a.createElement("button",{className:"is-link section-link"},"projects"))),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement("a",{className:"github-link",href:"https://github.com/jrobchin"},"github")),i.a.createElement("div",{className:"navbar-item"},i.a.createElement("a",{className:"linkedin-link",href:"https://linkedin.com/in/jrobchin"},"linkedin")),i.a.createElement("div",{className:"navbar-item"},i.a.createElement("a",{className:"devpost-link",href:"https://devpost.com/JasonChin"},"devpost")))))}}]),t}(n.Component)),d=a(8),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){setInterval(function(){a.state.isVisible?a.setState({isVisible:!1}):a.setState({isVisible:!0,textIndex:(a.state.textIndex+1)%a.props.textList.length})},900)},a.state={textIndex:0,isVisible:!0},a.fader=d.a.span({visible:{opacity:1},hidden:{opacity:0}}),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(this.fader,{pose:this.state.isVisible?"visible":"hidden"},this.props.textList[this.state.textIndex])}}]),t}(n.Component),h=["software engineer","ai developer","educator","creator"],p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={subtitles:h},a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"hero"},i.a.createElement("section",{class:"hero is-medium is-primary"},i.a.createElement("div",{class:"hero-body"},i.a.createElement("div",{class:"container"},i.a.createElement("p",{class:"title"},"jason chin"),i.a.createElement("p",{class:"subtitle"},i.a.createElement(v,{textList:this.state.subtitles}))))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).sectionRefs={hero:i.a.createRef(),experience:i.a.createRef(),projects:i.a.createRef()},a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"site-container"},i.a.createElement(u,null),i.a.createElement(p,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9070e0e0.chunk.js.map