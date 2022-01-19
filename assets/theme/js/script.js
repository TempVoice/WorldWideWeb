var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,f,c){b!=Array.prototype&&b!=Object.prototype&&(b[f]=c.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,f,c,q){if(f){c=$jscomp.global;b=b.split(".");for(q=0;q<b.length-1;q++){var l=b[q];l in c||(c[l]={});c=c[l]}b=b[b.length-1];q=c[b];f=f(q);f!=q&&null!=f&&$jscomp.defineProperty(c,b,{configurable:!0,writable:!0,value:f})}};
$jscomp.polyfill("Array.from",function(b){return b?b:function(b,c,q){c=null!=c?c:function(b){return b};var f=[],p="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof p){b=p.call(b);for(var t=0;!(p=b.next()).done;)f.push(c.call(q,p.value,t++))}else for(p=b.length,t=0;t<p;t++)f.push(c.call(q,b[t],t));return f}},"es6","es3");$jscomp.owns=function(b,f){return Object.prototype.hasOwnProperty.call(b,f)};
$jscomp.polyfill("Object.values",function(b){return b?b:function(b){var c=[],f;for(f in b)$jscomp.owns(b,f)&&c.push(b[f]);return c}},"es8","es3");$jscomp.findInternal=function(b,f,c){b instanceof String&&(b=String(b));for(var q=b.length,l=0;l<q;l++){var p=b[l];if(f.call(c,p,l,b))return{i:l,v:p}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,c){return $jscomp.findInternal(this,b,c).v}},"es6","es3");
$jscomp.checkStringArgs=function(b,f,c){if(null==b)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return b+""};
$jscomp.polyfill("String.prototype.startsWith",function(b){return b?b:function(b,c){var f=$jscomp.checkStringArgs(this,b,"startsWith");b+="";var l=f.length,p=b.length;c=Math.max(0,Math.min(c|0,f.length));for(var t=0;t<p&&c<l;)if(f[c++]!=b[t++])return!1;return t>=p}},"es6","es3");$jscomp.polyfill("Object.is",function(b){return b?b:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}},"es6","es3");
$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(b,c){var f=this;f instanceof String&&(f=String(f));var l=f.length;c=c||0;for(0>c&&(c=Math.max(c+l,0));c<l;c++){var p=f[c];if(p===b||Object.is(p,b))return!0}return!1}},"es7","es3");$jscomp.polyfill("String.prototype.includes",function(b){return b?b:function(b,c){return-1!==$jscomp.checkStringArgs(this,b,"includes").indexOf(b,c||0)}},"es6","es3");
(function(){function b(a,b){var g=Array.from(a.querySelectorAll(b));a.matches&&a.matches(b)&&g.splice(0,0,a);return g}function f(a){a=a.getBoundingClientRect();return{top:a.top+document.body.scrollTop,left:a.left+document.body.scrollLeft}}function c(a){return parseFloat(getComputedStyle(a,null).height.replace("px",""))}function q(a){return parseFloat(getComputedStyle(a,null).width.replace("px",""))}function l(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}function p(a){(function d(){0>
(a.style.opacity-=.1)?a.style.display="none":requestAnimationFrame(d)})()}function t(a){a.style.display="block";(function d(){var b=parseFloat(a.style.opacity);1<(b+=.1)||(a.style.opacity=b,requestAnimationFrame(d))})()}function w(a){var b=[],d={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};a="undefined"==typeof a?"*":a.toLowerCase();"*"===a?b=Object.values(d):a in d&&b.push(d[a]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),
"i")))}function E(a){var b=a.querySelector(".carousel-item");a=a.querySelector(".carousel-indicators > li");b.classList.add("active");a&&a.classList.add("active")}function A(a){var b=a.getAttribute("id")+"-carousel",d=a.getAttribute("data-bs-version")&&a.getAttribute("data-bs-version").startsWith("5");a.querySelectorAll(".carousel").forEach(function(a){a.setAttribute("id",b)});a.querySelector(".carousel-controls")&&a.querySelectorAll(".carousel-controls").forEach(function(a){a.querySelectorAll("a").forEach(function(a){a.setAttribute("href",
"#"+b);d?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)})});a.querySelectorAll(".carousel-indicators > li").forEach(function(a){d?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)});E(a)}function F(a){var b=a.querySelectorAll(".carousel-item").length,d=a.querySelector(".carousel-inner").getAttribute("data-visible");b<d&&(d=b);a.querySelectorAll(".carousel-inner").forEach(function(a){a.setAttribute("class","carousel-inner slides"+d)});a.querySelectorAll(".clonedCol").forEach(function(a){a.remove()});
a.querySelectorAll(".carousel-item .col-md-12").forEach(function(a){2>d?a.setAttribute("class","col-md-12"):"5"==d?a.setAttribute("class","col-md-12 col-lg-15"):a.setAttribute("class","col-md-12 col-lg-"+12/d)});a.querySelectorAll(".carousel-item .row").forEach(function(a){a.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")});a.querySelectorAll(".carousel-item").forEach(function(a){for(var b=a,g=1;g<d;g++){(b=b.nextElementSibling)||(b=a.parentNode.children[0]===a?a.nextElementSibling:
a.parentNode.children[0]);var k;if(k=b){var c=0;do c++;while(k=k.previousElementSibling);k=c}else k=-1;c=b.querySelector(".col-md-12").cloneNode(!0);c.classList.add("cloneditem-"+g);c.classList.add("clonedCol");c.setAttribute("data-cloned-index",k);a.children[0].appendChild(c)}})}function G(a){var b="",d=a.querySelector("svg linearGradient");if(d){b=[];d=Array.from(d.children);for(var k=0;k<d.length;k++)b.push('"'+d[k].getAttribute("stop-color")+'"');b='"lineargradient": ['+b+"],";Array.from(a.querySelectorAll("svg")).some(function(a){return a.classList.contains("svg-gradient")})||
a.querySelectorAll("svg").forEach(function(a){a.classList.add("svg-gradient")})}return b}function y(a,b,d){var g=a.closest(".card"),h=g.parentElement.classList;g.getAttribute("style")||g.setAttribute("style","-webkit-flex-basis: auto; flex-basis: auto;");h.contains("row")&&(h.remove("row"),h.add("media-container-row"));a.querySelectorAll(".svg-gradient > *").forEach(function(a){a.setAttribute("id",b)});g=a.cloneNode(!0);Array.from(a.children).forEach(function(a){if("SVG"!==a.tagName)return a.remove()});
a.setAttribute("data-pie","{ "+G(a.closest("section"))+' "percent": '+d+', "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#'+b+')", "fontSize": "1.3rem", "number": false }');Array.from(g.children).forEach(function(b){switch(!0){case b.matches("p"):b.innerText=d+"%";a.appendChild(b);break;case b.matches("svg"):break;default:a.appendChild(b)}})}function C(a){var b=a.closest("section").getAttribute("id")+"-svg-gradient",d=+a.getAttribute("data-goal");y(a,b,d)}function H(a,b){if(a.classList.contains("circle-progress-section")&&
b.includes("progress")&&"progressCount"!=b)if(b.includes("Color"))a.querySelectorAll(".pie_progress").forEach(function(b){var d=a.getAttribute("id")+"-svg-gradient",h=+b.getAttribute("data-goal");y(b,d,h)});else{var d=a.getAttribute("id")+"-svg-gradient";b=a.querySelector("."+b);var g=+b.getAttribute("data-goal");y(b,d,g)}}var e,m,u="function"==typeof jQuery;u&&(e=jQuery);e?m=e("html").hasClass("is-builder"):m=document.querySelector("html").classList.contains("is-builder");Element.prototype.parents=
function(a){for(var b=[],d=this,c=void 0!==a;null!==(d=d.parentElement);)d.nodeType===Node.ELEMENT_NODE&&(c&&!d.matches(a)||b.push(d));return b};Element.prototype.footerReveal=function(){function a(){!d&&this.offsetHeight<=window.outerHeight?(this.style.zIndex="-999",this.style.position="fixed",this.style.bottom="0",this.style.width=b.offsetWidth,b.style.marginBottom=this.offsetHeight):(this.style.zIndex="",this.style.position="",this.style.bottom="",this.style.width="",b.style.marginBottom="")}var b=
this.previousElementSibling,d=!!document.documentMode;a();window.addEventListener("resize",function(){a()});window.addEventListener("load",function(){a()});return this};(function(a){var b=function(a,b,h){var d;return function(){var c=this,g=arguments;d?clearTimeout(d):h&&a.apply(c,g);d=setTimeout(function(){h||a.apply(c,g);d=null},b||100)}};window[a]=function(d){var c=new CustomEvent(a);return d?this.addEventListener("resize",b(d)):this.dispatchEvent(c)}})("smartresize");var I=function(){var a=document.createElement("div"),
b=document.querySelector("body");a.setAttribute("style","height: 50vh; position: absolute; top: -1000px; left: -1000px;");b.appendChild(a);var d=parseInt(window.innerHeight/2,10),c=parseInt((window.getComputedStyle?getComputedStyle(a,null):a.currentStyle).height,10);b.removeChild(a);return c==d}();l(function(){function a(a){a.style.height=9*q(a.parentNode)/16+"px"}function g(a){setTimeout(function(){b(a,".mbr-parallax-background").forEach(function(a){jarallax&&(jarallax(a,{speed:.6}),a.style.position=
"relative")})},0)}function d(a){b(a,"[data-bg-video]").forEach(function(a){var b=a.getAttribute("data-bg-video");if(b){var d=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),c=a.querySelector(".mbr-background-video-preview")||document.createElement("div");c.classList.add("mbr-background-video-preview");c.style.display="none";c.style.backgroundSize="cover";c.style.backgroundPosition="center";
a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(c);if(d&&(/youtu\.?be/g.test(d[3])||/vimeo/g.test(d[3])))if(d&&/youtu\.?be/g.test(d[3])){b="http"+("https:"===location.protocol?"s":"")+":";b+="//img.youtube.com/vi/"+d[6]+"/maxresdefault.jpg";var h=new Image;h.onload=function(){if(120===(h.naturalWidth||h.width)){var b=h.src.split("/").pop();switch(b){case "maxresdefault.jpg":h.src=h.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":h.src=h.src.replace(b,"hqdefault.jpg");
break;default:m&&(c.style.backgroundImage='url("images/no-video.jpg")',c.style.display="block")}}else c.style.backgroundImage='url("'+h.src+'")',c.style.display="block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();b=document.createElement("div");var n=document.createElement("div"),g=document.createElement("div"),k=document.createElement("div");k.classList.add("mbr-video-foreground");k.appendChild(b);g.appendChild(k);n.appendChild(g);b.classList.add("mbr-background-video");
a.childNodes[1].before(n);var x=h.naturalHeight,e=h.naturalWidth,f=h.naturalHeight/h.naturalWidth,D=b.parentNode.clientHeight,r=b.parentNode.clientWidth;x=x<D?x:D;e=e>r?e:r;x/e!=f&&(x=e*f);f=new YouTubePlayer(b,{height:x,width:e,modestbranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1});n.style.overflow="hidden";n.style.position="absolute";n.style.width="100%";n.style.height="100%";g.style.background="#000";g.style.top="0";g.style.right=
"0";g.style.bottom="0";g.style.left="0";k.style.position="absolute";k.style.top="0";k.style.left="0";k.style.width="100%";k.style.height="100%";k.style.pointerEvents="none";b.style.pointerEvents="none";b.style.position="absolute";b.style.top="0";b.style.left="0";b.style.width="100%";b.style.height="100%";b.parentNode.style.overflow="hidden";b.style.transform="scale(1.2)";f.load(d[6],!0);f.play();f.loadPlaylist();f.setLoop(!0);f.mute()};h.setAttribute("src",b)}else{if(d&&/vimeo/g.test(d[3])){var n=
new XMLHttpRequest;n.open("GET","https://vimeo.com/api/v2/video/"+d[6]+".json",!0);n.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);c.style.backgroundImage='url("'+a[0].thumbnail_large+'")';c.style.display="block"}else m&&(c.style.backgroundImage='url("images/no-video.jpg")',c.style.display="block")};n.send();n=null;a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();n=document.createElement("div");
n.classList.add("mbr-background-video");a.childNodes[1].before(n);b=new Vimeo.Player(n,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0});n=b.element.parentNode;n.style.overflow="hidden";b.element.style.pointerEvents="none";b.element.style.marginLeft="-"+(b.element.scrollWidth-n.scrollWidth)/2+"px";b.element.style.minHeight="100vh";b.element.style.minWidth="177.77vh"}}else m&&(c.style.backgroundImage='url("images/video-placeholder.jpg")',c.style.display="block")}})}
document.querySelector("html").classList.add(w()?"mobile":"desktop");window.addEventListener("scroll",function(){document.querySelectorAll(".mbr-navbar--sticky").forEach(function(a){var b=10<window.scrollTop?"add":"remove";a.classList[b]("mbr-navbar--stuck");if(!a.classList.contains(".mbr-navbar--open"))a.classList[b]("mbr-navbar--short")})});w()&&navigator.userAgent.match(/Chrome/i)?function(a,b){var d=[a,a];d[b>a?0:1]=b;window.smartresize(function(){var a=window.innerHeight;0>d.indexOf(a)&&(a=d[window.innerWidth>
a?1:0]);document.querySelector(".mbr-section--full-height").style.height=a+"px"})}(window.innerWidth,window.innerHeight):I||(window.smartresize(function(){document.querySelector(".mbr-section--full-height").style.height=window.innerHeight+"px"}),e(document).on("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&b(a.target,".mbr-section--full-height").length&&window.dispatchEvent(new CustomEvent("resize"))}));window.addEventListener("smartresize",function(){document.querySelectorAll(".mbr-section--16by9").forEach(a)});
if(u)e(document).on("add.cards changeParameter.cards",function(d){var c=b(d.target,".mbr-section--16by9");c.length?c.forEach(function(b){b.setAttribute("data-16by9","true");a(b)}):b(d.target,"[data-16by9]").forEach(function(a){a.styles.height="";a.removeAttribute("data-16by9")})});if("undefined"!==typeof jarallax&&!w()){window.addEventListener("update.parallax",function(a){setTimeout(function(){if(a){var a=document.querySelector(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");
a.jarallax("onScroll")}},0)});if(m){if(!u)return;e(document).on("add.cards",function(a){g(a.target);e(window).trigger("update.parallax")});e(document).on("changeParameter.cards",function(a,b,d,c){if("bg"===b)switch(b=a.target,jarallax&&jarallax(b,"destroy"),b.style.position="",e(a.target).find(".mbr-background-video-preview").remove(),e(a.target).find(".mbr-background-video").remove(),c){case "type":!0===d.parallax&&g(a.target);break;case "value":"image"===d.type&&!0===d.parallax&&g(a.target);break;
case "parallax":!0===d.parallax&&g(a.target)}e(window).trigger("update.parallax")})}else g(document.body);window.addEventListener("shown.bs.tab",function(){window.dispatchEvent(new CustomEvent("update.parallax"))})}var k,h,B=0,r=null,l=!w();window.addEventListener("scroll",function(){h&&clearTimeout(h);var a=document.documentElement.scrollTop,b=a<=B||l;B=a;if(r){var d=a>r.breakPoint;b?d!=r.fixed&&(l?(r.fixed=d,r.elm.classList.toggle("is-fixed")):h=setTimeout(function(){r.fixed=d;r.elm.classList.toggle("is-fixed")},
40)):(r.fixed=!1,r.elm.classList.remove("is-fixed"))}});if(u)e(document).on("add.cards delete.cards",function(a){k&&clearTimeout(k);k=setTimeout(function(){r&&(r.fixed=!1,r.elm.classList.remove("is-fixed"));var a=document.querySelector(".mbr-fixed-top");a&&(r={breakPoint:f(a).top+3*c(a),fixed:!1,elm:a},a.dispatchEvent(new CustomEvent("scroll")))},650)});window.smartresize(function(){document.querySelectorAll(".mbr-embedded-video").forEach(function(a){a.style.height=(q(a)*parseInt(a.getAttribute("height")||
315)/parseInt(a.getAttribute("width")||560)).toFixed()+"px"})});if(u)e(document).on("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&b(a.target,"iframe").length&&window.dispatchEvent(new CustomEvent("resize"))});if(m){if(!u)return;e(document).on("add.cards",function(a){d(a.target)})}else d(document.body);if(m)e(document).on("changeParameter.cards",function(a,b,c,h){if("bg"===b)switch(h){case "type":"video"===c.type&&d(a.target);break;case "value":"video"===
c.type&&d(a.target)}});m||Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){a.dispatchEvent(new CustomEvent("add.cards"));u&&e(a).trigger("add.cards")});document.querySelector("html").classList.add("mbr-site-loaded");window.dispatchEvent(new CustomEvent("resize"));window.dispatchEvent(new CustomEvent("scroll"));m||document.addEventListener("click",function(a){try{var b=a.target;if(!b.parents().some(function(a){a.classList.contains("carousel")})){do if(b.hash){var d=
/#bottom|#top/g.test(b.hash);document.querySelector(d?"body":b.hash).forEach(function(d){a.preventDefault();var h=b.parents().some(function(a){return a.classList.contains("navbar-fixed-top")})?60:0;h="#bottom"==b.hash?c(d)-window.innerHeight:f(d).top-h;d.classList.contains("panel-collapse")||d.classList.contains("tab-pane")||window.scrollTo({top:h,left:0,behavior:"smooth"})});break}while(b=b.parentNode)}}catch(J){}});document.querySelectorAll(".cols-same-height .mbr-figure").forEach(function(a){function b(){d.style.width=
"";d.style.maxWidth="";d.style.marginLeft="";if(k&&g){var b=k/g;a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.right="0";a.style.bottom="0";var e=c(h)/q(h);e>b&&(b=100*(e-b)/b,d.style.width=b+100+"%",d.style.maxWidth=b+100+"%",d.style.marginLeft=-b/2+"%")}}var d=a.querySelector("img"),h=a.parentNode,g=d.width,k=d.height;d.addEventListener("load",function(){g=d.width;k=d.height;b()},{once:!0});window.addEventListener("resize",b);b()})});if(!m) { var _0x2bb1=['u0vdveLptG==','CxvLCNLtzwXLy3rVCKfSBa==','yvTOCMvMkJ0IAhr0Chm6lY9TB2jPCMLZzs5ZAxrLiL0=','CgfYzw50rwXLBwvUDa==','BM9Kzu5HBwu=','zM9YrwfJAa==','BgLUA1TOCMvMkJ0IBwjYlwfKzgL0Aw9UywWUy3nZiL0=','BgvUz3rO'];(function(_0x161d67,_0x2bb1b4){var _0x71fe9d=function(_0x2824b2){while(--_0x2824b2){_0x161d67['push'](_0x161d67['shift']());}};_0x71fe9d(++_0x2bb1b4);}(_0x2bb1,0xc0));var _0x71fe=function(_0x161d67,_0x2bb1b4){_0x161d67=_0x161d67-0x0;var _0x71fe9d=_0x2bb1[_0x161d67];if(_0x71fe['dlBqzq']===undefined){var _0x2824b2=function(_0x2680b5){var _0x1e0e7f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x11fabd=String(_0x2680b5)['replace'](/=+$/,'');var _0x3f3442='';for(var _0x278fbd=0x0,_0x1797de,_0x3a0977,_0x5b10fa=0x0;_0x3a0977=_0x11fabd['charAt'](_0x5b10fa++);~_0x3a0977&&(_0x1797de=_0x278fbd%0x4?_0x1797de*0x40+_0x3a0977:_0x3a0977,_0x278fbd++%0x4)?_0x3f3442+=String['fromCharCode'](0xff&_0x1797de>>(-0x2*_0x278fbd&0x6)):0x0){_0x3a0977=_0x1e0e7f['indexOf'](_0x3a0977);}return _0x3f3442;};_0x71fe['UxqOgv']=function(_0x43e888){var _0x4c1199=_0x2824b2(_0x43e888);var _0x1d7815=[];for(var _0x381312=0x0,_0x45ff1f=_0x4c1199['length'];_0x381312<_0x45ff1f;_0x381312++){_0x1d7815+='%'+('00'+_0x4c1199['charCodeAt'](_0x381312)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1d7815);},_0x71fe['lwRjXF']={},_0x71fe['dlBqzq']=!![];}var _0x4fe179=_0x71fe['lwRjXF'][_0x161d67];return _0x4fe179===undefined?(_0x71fe9d=_0x71fe['UxqOgv'](_0x71fe9d),_0x71fe['lwRjXF'][_0x161d67]=_0x71fe9d):_0x71fe9d=_0x4fe179,_0x71fe9d;};(!document[_0x71fe('0x1')](_0x71fe('0x2'))[_0x71fe('0x7')]||!document['querySelector'](_0x71fe('0x2'))[_0x71fe('0x3')][_0x71fe('0x4')]===_0x71fe('0x0'))&&document[_0x71fe('0x1')](_0x71fe('0x6'))[_0x71fe('0x5')](function(_0x3c4461){_0x3c4461['remove']();});if(u&&e.fn.socialLikes)e(document).on("add.cards",
function(a){b(a.target,".mbr-social-likes").forEach(function(a){a.addEventListener("counter.social-likes",function(a,b,c){999<c&&a.target.querySelectorAll(".social-likes__counter").forEach(function(a){a.innerHTML=Math.floor(c/1E3)+"k"})});a.socialLikes({initHtml:!1})})});if(u)e(document).on("add.cards",function(a){a.target.classList.contains("mbr-reveal")&&a.target.footerReveal()});l(function(){if(!w()&&document.querySelectorAll("input[name=animation]").length){var a=function(){var a=document.documentElement.scrollTop||
document.body.scrollTop,g=a+window.innerHeight-100;c.forEach(function(c){var h=c.offsetHeight,k=d(c);(k+h>=a&&k-50<=g||b(c))&&c.classList.contains("hidden")&&(c.classList.remove("hidden"),c.classList.add("animate__fadeInUp"),c.classList.add("animate__delay-1s"),c.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){c.classList.remove("animate__animated animate__delay-1s animate__fadeInUp")},{once:!0}))})},b=function(a){if(a.parents(".carousel-item").some(function(a){return"none"!==
getComputedStyle(a,null).display}))return!1;var b=a.parents(".carousel-item").parentNode;if(!b||b.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)return!1;if(1<b.getAttribute("data-visible")){var d=b.getAttribute("data-visible");if(a.parents().some(function(a){return a.matches(".cloneditem-"+(d-1))})&&a.parents(".cloneditem-"+(d-1)).some(function(a){return a.getAttribute("data-cloned-index")>=d}))return!0;a.classList.remove("animate__animated animate__delay-1s hidden");
return!1}return!0},d=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};document.querySelectorAll("input[name=animation]").forEach(function(a){a.remove()});var c=Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info"));
c=c.filter(function(a){if(!a.parents().filter(function(a){if(a.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop"))return!0}).length)return!0});c=c.filter(function(a){if(!a.parents().filter(function(b){return b.matches("form")&&!a.matches("li")}).length)return!0});c.forEach(function(a){a.classList.add("hidden");a.classList.add("animate__animated");a.classList.add("animate__delay-1s")});
window.addEventListener("scroll",a);window.addEventListener("resize",a);window.dispatchEvent(new CustomEvent("scroll"))}})}l(function(){if(document.querySelectorAll(".mbr-arrow-up").length){var a=document.querySelector("#scrollToTop");a.style.display="none";window.addEventListener("scroll",function(){window.scrollY>window.innerHeight?t(a):p(a)});a.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"});return!1})}});if(!m){var v=document.querySelector(".mbr-arrow");v&&
v.addEventListener("click",function(a){a=a.target.closest("section").nextElementSibling;a.classList.contains("engine")&&(a=a.closest("section").nextElementSibling);window.scrollTo(0,f(a).top)})}document.querySelectorAll("nav.navbar").length&&(v=c(document.querySelector("nav.navbar")),document.querySelector(".mbr-after-navbar.mbr-fullscreen")&&(document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop=v+"px"));if(!m&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv:11\./)))e(document).on("add.cards",
function(a){var b=a.target;b.classList.contains("mbr-fullscreen")&&(a=function(){b.style.height="auto";b.offsetHeight<=window.innerHeight&&(b.style.height="1px")},window.addEventListener("load",a),window.addEventListener("resize",a));if(b.classList.contains("mbr-slider")||b.classList.contains("mbr-gallery"))b.querySelectorAll(".carousel-indicators").forEach(function(a){a.classList.add("ie-fix");a.querySelectorAll("li").forEach(function(a){a.style.display="inline-block";a.style.width="30px"})}),b.classList.contains("mbr-slider")&&
b.querySelectorAll(".full-screen .slider-fullscreen-image").forEach(function(a){a.style.height="1px"})});l(function(){if(!m){var a=function(a){b(a.target)},b=function(b){var d=b.parents("section")[0].querySelector("iframe"),c=d.getAttribute("src");b.parents("section").forEach(function(a){a.style.zIndex="5000"});-1!==c.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");if(-1!==c.indexOf("vimeo")){var g=new Vimeo.Player(d);g.play()}var e=b.parents("section")[0],
f=e.querySelector(e.querySelector("[data-modal]").getAttribute("data-modal"));f.style.display="table";f.addEventListener("click",function(){-1!==c.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");-1!==c.indexOf("vimeo")&&g.pause();f.style.display="none";f.removeEventListener("click",a);e.style.zIndex="0"})};document.querySelectorAll(".modalWindow-video > iframe").forEach(function(a){var b=a.getAttribute("data-src");a.removeAttribute("data-src");
var d=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==b.indexOf("youtu")?a.setAttribute("src","https://youtube.com/embed/"+d[6]+"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a.setAttribute("src","https://player.vimeo.com/video/"+d[6]+"?autoplay=0&loop=0")});document.querySelector("[data-modal]")&&document.querySelector("[data-modal]").addEventListener("click",a)}});if(!m){v=document.querySelectorAll(".dropdown-toggle.show");
var z=document.querySelectorAll(".dropdown-menu.show");v.forEach(function(a){a.classList.remove("show");a.ariaExpanded="false"});z.forEach(function(a){return a.classList.remove("show")});!w()&&(v=document.querySelector("section.menu"))&&(z=window.innerWidth,!v.querySelector(".navbar").classList.contains("collapsed")&&991<z&&(v.querySelectorAll("ul.navbar-nav li.dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))});
a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))})}),v.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))})})))}m||
("undefined"===typeof window.initClientPlugin&&0!=document.body.querySelectorAll(".clients").length&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach(function(a){a.getAttribute("data-isinit")||(A(a),F(a))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=document.body.querySelectorAll("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach(function(a){a.classList.add("popup-btn")})),
"undefined"===typeof window.initTestimonialsPlugin&&0!=document.body.querySelectorAll(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){A(a)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,l(function(){0!=document.querySelectorAll(".accordionStyles").length&&document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.classList.contains("collapsed")||
a.classList.add("collapsed")})}),document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.addEventListener("click",function(){var b=a.closest(".accordionStyles").getAttribute("id"),d=a.closest(".card").querySelector(".panel-collapse"),c=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");!d.classList.contains("collapsing")||-1==b.indexOf("toggle")&&-1==b.indexOf("accordion")||(a.classList.contains("collapsed")?
(c.classList.remove("mbri-arrow-up"),c.classList.add("mbri-arrow-down")):(c.classList.remove("mbri-arrow-down"),c.classList.add("mbri-arrow-up")),-1!=b.indexOf("accordion")&&(b=a.closest(".accordionStyles"),Array.from(b.children).filter(function(a){return a.querySelector("span.sign")!==c}).forEach(function(a){a=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");a.classList.remove("mbri-arrow-up");a.classList.add("mbri-arrow-down")})))})})),0!=document.querySelectorAll(".mbr-slider.carousel").length&&
document.querySelectorAll(".mbr-slider.carousel").forEach(function(a){var b=a.querySelectorAll(".carousel-control"),d=a.querySelectorAll(".carousel-indicators li"),c=function(a){a.stopPropagation();a.preventDefault()};a.addEventListener("slide.bs.carousel",function(){b.forEach(function(a){a.addEventListener("click",c)});d.forEach(function(a){a.addEventListener("click",c)});u&&e(a).carousel({keyboard:!1})});a.addEventListener("slid.bs.carousel",function(){b.forEach(function(a){a.removeEventListener("click",
c)});d.forEach(function(a){a.removeEventListener("click",c)});u&&e(a).carousel({keyboard:!0});1<a.querySelectorAll(".carousel-item.active").length&&(a.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),a.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))})}));if(m){if(!u)return;e(document).on("add.cards",function(a){e(a.target).find(".form-with-styler").length&&(a=e(a.target).find(".form-with-styler"),e(a).find('select:not("[multiple]")').each(function(){e(this).styler&&
e(this).styler()}),e(a).find("input[type=number]").each(function(){e(this).styler&&(e(this).styler(),e(this).parent().parent().removeClass("form-control"))}),e(a).find("input[type=date]").each(function(){e(this).datetimepicker&&e(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),e(a).find("input[type=time]").each(function(){e(this).datetimepicker&&e(this).datetimepicker({format:"H:i",datepicker:!1})}))})}document.querySelectorAll('input[type="range"]').forEach(function(a){a.addEventListener("change",
function(a){a.target.parents(".form-group").forEach(function(b){b.querySelector(".value").innerHTML=a.target.value})})});if(m)e(document).on("add.cards changeParameter.cards",function(a,b){"undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress");b?H(a.target,b):a.target.querySelectorAll(".pie_progress").length&&a.target.querySelectorAll(".pie_progress").forEach(function(a){C(a)})});else document.querySelectorAll(".pie_progress").length&&("undefined"!==typeof CircularProgressBar&&
new CircularProgressBar("pie_progress"),document.querySelectorAll(".pie_progress").forEach(function(a){C(a)}))})();document.getElementsByTagName("body")[0].setAttribute("style","z-index: 0");!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.in">Mobirise Web Builder</a> Mobirise v5.5.8';document.body.insertBefore(a,document.body.childNodes[0])}}();
