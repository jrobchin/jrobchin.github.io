(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t){t.isMobileOrTablet=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}},16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(12),r=a.n(o),c=(a(21),a(7)),s=a(13),l=a(1),m=a(2),p=a(4),d=a(3),u=a(5),g=(a(22),a(8)),b=a(15),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).toggleDropdown=function(){a.setState({mobileDropdown:!a.state.mobileDropdown})},a.handleScrollTo=function(e){a.toggleDropdown(),a.props.scrollTo(e)},a.state={mobileDropdown:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("nav",{className:"navbar",role:"navigation",ref:this.props.domRef},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("div",{id:"navbar-item-name",className:"navbar-item"},n.a.createElement("button",{className:"is-link",onClick:function(){return e.handleScrollTo("hero")}},"jason chin")),n.a.createElement("button",{onClick:this.toggleDropdown,className:"navbar-burger burger is-link ".concat(this.state.mobileDropdown?"is-active":""),"data-target":"nav-bar"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{id:"nav-bar",className:"navbar-menu ".concat(this.state.mobileDropdown?"is-active":"")},n.a.createElement("div",{className:"navbar-start"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement("button",{className:"is-link section-link",onClick:function(){return e.handleScrollTo("experience")}},"experience")),n.a.createElement("div",{className:"navbar-item"},n.a.createElement("button",{className:"is-link section-link",onClick:function(){return e.handleScrollTo("projects")}},"projects"))),n.a.createElement("div",{className:"navbar-end"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement("a",{className:"github-link",href:"https://github.com/jrobchin"},"github")),n.a.createElement("div",{className:"navbar-item"},n.a.createElement("a",{className:"linkedin-link",href:"https://linkedin.com/in/jrobchin"},"linkedin")),n.a.createElement("div",{className:"navbar-item"},n.a.createElement("a",{className:"devpost-link",href:"https://devpost.com/JasonChin"},"devpost")))))}}]),t}(i.Component),v=a(6),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){setInterval(function(){a.state.isVisible?a.setState({isVisible:!1}):a.setState({isVisible:!0,textIndex:(a.state.textIndex+1)%a.props.textList.length})},900)},a.state={textIndex:0,isVisible:!0},a.fader=v.a.span({visible:{opacity:1},hidden:{opacity:0}}),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(this.fader,{pose:this.state.isVisible?"visible":"hidden"},this.props.textList[this.state.textIndex])}}]),t}(i.Component),E=["software engineer","ai developer","educator","creator"],y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setHeroHeight=function(e){e&&(console.log(e.getBoundingClientRect()),setTimeout(function(){console.log(e.getBoundingClientRect())},1e3))},a.state={subtitles:E},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"hero is-medium is-primary",ref:this.setHeroHeight},n.a.createElement("canvas",{className:"hero-canvas",style:{position:"absolute",width:"100%"}}),n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"title is-1"},"jason chin"),n.a.createElement("p",{className:"subtitle"},n.a.createElement(f,{textList:this.state.subtitles})))))}}]),t}(i.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.title;return n.a.createElement("div",{className:"site-section",ref:this.props.sectionRef},n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"title is-2"},e)),n.a.createElement("div",{className:"content"},this.props.children)))}}]),t}(i.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.img,a=e.company,i=e.position,o=e.location,r=e.dates,c=e.length;return n.a.createElement("div",{className:"card experience-card"},n.a.createElement("article",{className:"media"},n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"image"},n.a.createElement("img",{src:t})),n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"title"},i),n.a.createElement("p",null,a," - ",o,n.a.createElement("br",null),n.a.createElement("small",null,r," ",n.a.createElement("i",{className:"fas fa-caret-right"})," ",c),n.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")))))}}]),t}(i.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.img,a=e.title,i=e.description;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:t,alt:"Placeholder image"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("h1",{className:"title"},a),n.a.createElement("div",{className:"content"},i)))}}]),t}(i.Component),N=[{img:"/img/DLR-logo.png",position:"Undergraduate Researcher",company:"German Aerospace Center (DLR)",location:"Berlin, Germany",dates:"May 2018 - Aug 2018",length:"4 months"},{img:"/img/Condos-logo.png",position:"Full Stack Developer Intern",company:"condos.ca",location:"Toronto, Canada",dates:"May 2017 - Sept 2017",length:"5 months"},{img:"/img/Condos-logo.png",position:"Full Stack Developer Intern",company:"condos.ca",location:"Toronto, Canada",dates:"May 2017 - Sept 2017",length:"5 months"},{img:"/img/Condos-logo.png",position:"Full Stack Developer Intern",company:"condos.ca",location:"Toronto, Canada",dates:"May 2017 - Sept 2017",length:"5 months"}],x=[{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"},{img:"/img/airoyale-diagram.jpg",title:"AI Royale",description:"Redefining competitive coding and education with real-time bot battle competitions. (Winner at Hack Western 5)"}],O=53,R=v.a.div({out:{x:"-100%"},in:{x:"0%",delay:500,delayChildren:500,staggerChildren:100}}),C=v.a.div({out:{x:"-300%",opactity:0},in:{x:"0%",opacity:1}}),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).populateSection=function(e){a.setState({populated:Object(s.a)({},a.state.populated,Object(c.a)({},e,!0))})},a.scrollTo=function(e){var t;t="hero"===e?0:a.sectionRefs[e].current.offsetTop-O,a.isMobileOrTablet?window.scrollTo(0,t):window.scrollTo({top:t,left:0,behavior:"smooth"})},a.renderExperience=function(){for(var e=[],t=0;t<N.length;t++){var i=N[t];e.push(n.a.createElement(C,{key:t,pose:a.state.populated.experience?"in":"out"},n.a.createElement(w,{key:t,img:i.img,position:i.position,company:i.company,location:i.location,dates:i.dates,length:i.length})))}return e},a.renderProjects=function(){for(var e=[],t=0;t<x.length;t++){var i=x[t];e.push(n.a.createElement(C,{key:t,className:"column is-one-third",pose:a.state.populated.projects?"in":"out"},n.a.createElement(j,{img:i.img,title:i.title,description:i.description})))}return e},a.state={populated:{experience:!1,projects:!1}},a.navRef=n.a.createRef(),a.sectionRefs={hero:n.a.createRef(),experience:n.a.createRef(),projects:n.a.createRef()},a.isMobileOrTablet=Object(b.isMobileOrTablet)(),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){for(var e in this.state.populated)if(this.state.populated.hasOwnProperty(e)){var t=this.sectionRefs[e];window.scrollY>=t.current.offsetTop-O&&this.populateSection(e)}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"site-container"},n.a.createElement(h,{domRef:this.navRef,scrollTo:this.scrollTo}),n.a.createElement("main",{style:{marginTop:52}},n.a.createElement(y,null),n.a.createElement(g.a,{onEnter:function(){return e.populateSection("experience")}}),n.a.createElement("div",{style:{maxWidth:"1200px",margin:"auto"}},n.a.createElement(k,{title:"experience",sectionRef:this.sectionRefs.experience},n.a.createElement(R,{pose:this.state.populated.experience?"in":"out"},this.renderExperience())),n.a.createElement(k,{title:"projects",sectionRef:this.sectionRefs.projects},n.a.createElement(g.a,{onEnter:function(){return e.populateSection("projects")}},n.a.createElement(R,{className:"columns is-multiline",pose:this.state.populated.projects?"in":"out"},this.renderProjects()))))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.040540bd.chunk.js.map