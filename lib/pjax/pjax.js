!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Pjax=t()}}((function(){return function t(e,o,n){function i(r,a){if(!o[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=o[r]={exports:{}};e[r][0].call(u.exports,(function(t){return i(e[r][1][t]||t)}),u,u.exports,t,e,o,n)}return o[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)i(n[r]);return i}({1:[function(t,e,o){
// var executeScripts = require("./lib/execute-scripts");  // unused-var
var n=t("./lib/foreach-els"),i=t("./lib/parse-options"),s=t("./lib/switches"),r=t("./lib/uniqueid"),a=t("./lib/events/on"),l=t("./lib/events/trigger"),c=t("./lib/util/clone"),u=t("./lib/util/contains"),h=t("./lib/util/extend"),d=t("./lib/util/noop"),f=function(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=i(t),this.log("Pjax options",this.options),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=r(),this.parseDOM(document),a(window,"popstate",function(t){if(t.state){var e=c(this.options);e.url=t.state.url,e.title=t.state.title,
// Since state already exists, prevent it from being pushed again
e.history=!1,e.scrollPos=t.state.scrollPos,t.state.uid<this.lastUid?e.backward=!0:e.forward=!0,this.lastUid=t.state.uid,
// @todo implement history cache here, based on uid
this.loadUrl(t.state.url,e)}}.bind(this))};
// arguably could do `if( require("./lib/is-supported")()) {` but that might be a little to simple
if(f.switches=s,f.prototype={log:t("./lib/proto/log"),getElements:function(t){return t.querySelectorAll(this.options.elements)},parseDOM:function(e){var o=t("./lib/proto/parse-element");n(this.getElements(e),o,this)},refresh:function(t){this.parseDOM(t||document)},reload:function(){window.location.reload()},attachLink:t("./lib/proto/attach-link"),attachForm:t("./lib/proto/attach-form"),forEachSelectors:function(e,o,n){return t("./lib/foreach-selectors").bind(this)(this.options.selectors,e,o,n)},switchSelectors:function(e,o,n,i){return t("./lib/switches-selectors").bind(this)(this.options.switches,this.options.switchesOptions,e,o,n,i)},latestChance:function(t){window.location=t},onSwitch:function(){l(window,"resize scroll"),this.state.numPendingSwitches--,
// debounce calls, so we only run this once after all switches are finished.
0===this.state.numPendingSwitches&&this.afterAllSwitches()},loadContent:function(t,e){if("string"==typeof t){var o=document.implementation.createHTMLDocument("pjax"),n=t.match(/<html[^>]+>/gi);
// parse HTML attributes to copy them
// since we are forced to use documentElement.innerHTML (outerHTML can't be used for <html>)
// Clear out any focused controls before inserting new page contents.
if(n&&n.length&&(n=n[0].match(/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi)).length&&(n.shift(),n.forEach((function(t){var e=t.trim().split("=");1===e.length?o.documentElement.setAttribute(e[0],!0):o.documentElement.setAttribute(e[0],e[1].slice(1,-1))}))),o.documentElement.innerHTML=t,this.log("load content",o.documentElement.attributes,o.documentElement.innerHTML.length),document.activeElement&&u(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch(t){}
// eslint-disable-line no-empty
this.switchSelectors(this.options.selectors,o,document,e)}else l(document,"pjax:complete pjax:error",e)},abortRequest:t("./lib/abort-request"),doRequest:t("./lib/send-request"),handleResponse:t("./lib/proto/handle-response"),loadUrl:function(t,e){e="object"==typeof e?h({},this.options,e):c(this.options),this.log("load href",t,e),
// Abort any previous request
this.abortRequest(this.request),l(document,"pjax:send",e),
// Do the request
this.request=this.doRequest(t,e,this.handleResponse.bind(this))},afterAllSwitches:function(){
// FF bug: Won’t autofocus fields that are inserted via JS.
// This behavior is incorrect. So if theres no current focus, autofocus
// the last field.
// http://www.w3.org/html/wg/drafts/html/master/forms.html
var t=Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();t&&document.activeElement!==t&&t.focus(),
// execute scripts when DOM have been completely updated
this.options.selectors.forEach((function(t){n(document.querySelectorAll(t),(function(t){// intentially left blank!
}))}));var e=this.state;if(e.options.history&&(window.history.state||(this.lastUid=this.maxUid=r(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),
// Update browser history
this.lastUid=this.maxUid=r(),window.history.pushState({url:e.href,title:e.options.title,uid:this.maxUid,scrollPos:[0,0]},e.options.title,e.href)),this.forEachSelectors((function(t){this.parseDOM(t)}),this),
// Fire Events
l(document,"pjax:complete pjax:success",e.options),"function"==typeof e.options.analytics&&e.options.analytics(),e.options.history){
// First parse url and check for hash to override scroll
var o=document.createElement("a");if(o.href=this.state.href,o.hash){var i=o.hash.slice(1);i=decodeURIComponent(i);var s=0,a=document.getElementById(i)||document.getElementsByName(i)[0];if(a&&a.offsetParent)do{s+=a.offsetTop,a=a.offsetParent}while(a);window.scrollTo(0,s)}else!1!==e.options.scrollTo&&(
// Scroll page to top on new page load
e.options.scrollTo.length>1?window.scrollTo(e.options.scrollTo[0],e.options.scrollTo[1]):window.scrollTo(0,e.options.scrollTo))}else e.options.scrollRestoration&&e.options.scrollPos&&window.scrollTo(e.options.scrollPos[0],e.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}},f.isSupported=t("./lib/is-supported"),f.isSupported())e.exports=f;else{var p=d;for(var m in f.prototype)f.prototype.hasOwnProperty(m)&&"function"==typeof f.prototype[m]&&(p[m]=d);e.exports=p}},{"./lib/abort-request":2,"./lib/events/on":3,"./lib/events/trigger":4,"./lib/foreach-els":5,"./lib/foreach-selectors":6,"./lib/is-supported":7,"./lib/parse-options":8,"./lib/proto/attach-form":9,"./lib/proto/attach-link":10,"./lib/proto/handle-response":11,"./lib/proto/log":12,"./lib/proto/parse-element":13,"./lib/send-request":14,"./lib/switches":16,"./lib/switches-selectors":15,"./lib/uniqueid":17,"./lib/util/clone":18,"./lib/util/contains":19,"./lib/util/extend":20,"./lib/util/noop":21}],2:[function(t,e,o){var n=t("./util/noop");e.exports=function(t){t&&t.readyState<4&&(t.onreadystatechange=n,t.abort())}},{"./util/noop":21}],3:[function(t,e,o){var n=t("../foreach-els");e.exports=function(t,e,o,i){(e="string"==typeof e?e.split(" "):e).forEach((function(e){n(t,(function(t){t.addEventListener(e,o,i)}))}))}},{"../foreach-els":5}],4:[function(t,e,o){var n=t("../foreach-els");e.exports=function(t,e,o){(e="string"==typeof e?e.split(" "):e).forEach((function(e){var i;(i=document.createEvent("HTMLEvents")).initEvent(e,!0,!0),i.eventName=e,o&&Object.keys(o).forEach((function(t){i[t]=o[t]})),n(t,(function(t){var e=!1;t.parentNode||t===document||t===window||(
// THANK YOU IE (9/10/11)
// dispatchEvent doesn't work if the element is not in the DOM
e=!0,document.body.appendChild(t)),t.dispatchEvent(i),e&&t.parentNode.removeChild(t)}))}))}},{"../foreach-els":5}],5:[function(t,e,o){
/* global HTMLCollection: true */
e.exports=function(t,e,o){return t instanceof HTMLCollection||t instanceof NodeList||t instanceof Array?Array.prototype.forEach.call(t,e,o):e.call(o,t);
// assume simple DOM element
}},{}],6:[function(t,e,o){var n=t("./foreach-els");e.exports=function(t,e,o,i){i=i||document,t.forEach((function(t){n(i.querySelectorAll(t),e,o)}))}},{"./foreach-els":5}],7:[function(t,e,o){e.exports=function(){
// Borrowed wholesale from https://github.com/defunkt/jquery-pjax
return window.history&&window.history.pushState&&window.history.replaceState&&
// pushState isn’t reliable on iOS until 5.
!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)}},{}],8:[function(t,e,o){
/* global _gaq: true, ga: true */
var n=t("./switches");
/* istanbul ignore next */
function i(){window._gaq&&_gaq.push(["_trackPageview"]),window.ga&&ga("send","pageview",{page:location.pathname,title:document.title})}e.exports=function(t){return(t=t||{}).elements=t.elements||"a[href], form[action]",t.selectors=t.selectors||["title",".js-Pjax"],t.switches=t.switches||{},t.switchesOptions=t.switchesOptions||{},t.history=void 0===t.history||t.history,t.analytics="function"==typeof t.analytics||!1===t.analytics?t.analytics:i,t.scrollTo=void 0===t.scrollTo?0:t.scrollTo,t.scrollRestoration=void 0===t.scrollRestoration||t.scrollRestoration,t.cacheBust=void 0===t.cacheBust||t.cacheBust,t.debug=t.debug||!1,t.timeout=t.timeout||0,t.currentUrlFullReload=void 0!==t.currentUrlFullReload&&t.currentUrlFullReload,
// We can’t replace body.outerHTML or head.outerHTML.
// It creates a bug where a new body or head are created in the DOM.
// If you set head.outerHTML, a new body tag is appended, so the DOM has 2 body nodes, and vice versa
t.switches.head||(t.switches.head=n.switchElementsAlt),t.switches.body||(t.switches.body=n.switchElementsAlt),t}},{"./switches":16}],9:[function(t,e,o){var n=t("../events/on"),i=t("../util/clone"),s="data-pjax-state",r=function(t,e){if(!a(e)){
// Since loadUrl modifies options and we may add our own modifications below,
// clone it so the changes don't persist
var o=i(this.options);
// Initialize requestOptions
o.requestOptions={requestUrl:t.getAttribute("action")||window.location.href,requestMethod:t.getAttribute("method")||"GET"};
// create a testable virtual link of the form action
var n=document.createElement("a");n.setAttribute("href",o.requestOptions.requestUrl);var r=function(t,e){
// Ignore external links.
if(t.protocol!==window.location.protocol||t.host!==window.location.host)return"external";
// Ignore click if we are on an anchor on the same page
if(t.hash&&t.href.replace(t.hash,"")===window.location.href.replace(location.hash,""))return"anchor";
// Ignore empty anchor "foo.html#"
if(t.href===window.location.href.split("#")[0]+"#")return"anchor-empty";
// if declared as a full reload, just normally submit the form
if(e.currentUrlFullReload&&t.href===window.location.href.split("#")[0])return"reload"}(n,o);r?t.setAttribute(s,r):(e.preventDefault(),"multipart/form-data"===t.enctype?o.requestOptions.formData=new FormData(t):o.requestOptions.requestParams=function(t){for(var e=[],o=t.elements,n=0;n<o.length;n++){var i=o[n],s=i.tagName.toLowerCase();
// jscs:disable disallowImplicitTypeConversion
if(i.name&&void 0!==i.attributes&&"button"!==s){
// jscs:enable disallowImplicitTypeConversion
var r=i.attributes.type;if(!r||"checkbox"!==r.value&&"radio"!==r.value||i.checked){
// Build array of values to submit
var a=[];if("select"===s)for(var l,c=0;c<i.options.length;c++)(l=i.options[c]).selected&&!l.disabled&&a.push(l.hasAttribute("value")?l.value:l.text);else a.push(i.value);for(var u=0;u<a.length;u++)e.push({name:encodeURIComponent(i.name),value:encodeURIComponent(a[u])})}}}return e}(t),t.setAttribute(s,"submit"),o.triggerElement=t,this.loadUrl(n.href,o))}};var a=function(t){return t.defaultPrevented||!1===t.returnValue};e.exports=function(t){var e=this;t.setAttribute(s,""),n(t,"submit",(function(o){r.call(e,t,o)}))}},{"../events/on":3,"../util/clone":18}],10:[function(t,e,o){var n=t("../events/on"),i=t("../util/clone"),s="data-pjax-state",r=function(t,e){if(!a(e)){
// Since loadUrl modifies options and we may add our own modifications below,
// clone it so the changes don't persist
var o=i(this.options),n=function(t,e){
// Don’t break browser special behavior on links (like page in new window)
if(e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return"modifier";
// we do test on href now to prevent unexpected behavior if for some reason
// user have href that can be dynamically updated
// Ignore external links.
if(t.protocol!==window.location.protocol||t.host!==window.location.host)return"external";
// Ignore anchors on the same page (keep native behavior)
if(t.hash&&t.href.replace(t.hash,"")===window.location.href.replace(location.hash,""))return"anchor";
// Ignore empty anchor "foo.html#"
if(t.href===window.location.href.split("#")[0]+"#")return"anchor-empty"}(t,e);if(n)t.setAttribute(s,n);else{
// don’t do "nothing" if user try to reload the page by clicking the same link twice
if(e.preventDefault(),this.options.currentUrlFullReload&&t.href===window.location.href.split("#")[0])return t.setAttribute(s,"reload"),void this.reload();t.setAttribute(s,"load"),o.triggerElement=t,this.loadUrl(t.href,o)}}};var a=function(t){return t.defaultPrevented||!1===t.returnValue};e.exports=function(t){var e=this;t.setAttribute(s,""),n(t,"click",(function(o){r.call(e,t,o)})),n(t,"keyup",function(o){13===o.keyCode&&r.call(e,t,o)}.bind(this))}},{"../events/on":3,"../util/clone":18}],11:[function(t,e,o){var n=t("../util/clone"),i=t("../uniqueid"),s=t("../events/trigger");e.exports=function(t,e,o,r){
// Fail if unable to load HTML via AJAX
if((r=n(r||this.options)).request=e,!1!==t){
// push scroll position to history
var a=window.history.state||{};window.history.replaceState({url:a.url||window.location.href,title:a.title||document.title,uid:a.uid||i(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);
// Check for redirects
var l=o;e.responseURL?o!==e.responseURL&&(o=e.responseURL):e.getResponseHeader("X-PJAX-URL")?o=e.getResponseHeader("X-PJAX-URL"):e.getResponseHeader("X-XHR-Redirected-To")&&(o=e.getResponseHeader("X-XHR-Redirected-To"));
// Add back the hash if it was removed
var c=document.createElement("a");c.href=l;var u=c.hash;c.href=o,u&&!c.hash&&(c.hash=u,o=c.href),this.state.href=o,this.state.options=r;try{this.loadContent(t,r)}catch(t){if(s(document,"pjax:error",r),this.options.debug)throw t;return console&&console.error&&console.error("Pjax switch fail: ",t),this.latestChance(o)}}else s(document,"pjax:complete pjax:error",r)}},{"../events/trigger":4,"../uniqueid":17,"../util/clone":18}],12:[function(t,e,o){e.exports=function(){this.options.debug&&console&&("function"==typeof console.log?console.log.apply(console,arguments):console.log&&console.log(arguments))}},{}],13:[function(t,e,o){var n="data-pjax-state";e.exports=function(t){switch(t.tagName.toLowerCase()){case"a":
// only attach link if el does not already have link attached
t.hasAttribute(n)||this.attachLink(t);break;case"form":
// only attach link if el does not already have link attached
t.hasAttribute(n)||this.attachForm(t);break;default:throw"Pjax can only be applied on <a> or <form> submit"}}},{}],14:[function(t,e,o){var n=t("./util/update-query-string");e.exports=function(t,e,o){var i,s=(e=e||{}).requestOptions||{},r=(s.requestMethod||"GET").toUpperCase(),a=s.requestParams||null,l=s.formData||null,c=null,u=new XMLHttpRequest,h=e.timeout||0;
// Prepare the request payload for forms, if available
if(u.onreadystatechange=function(){4===u.readyState&&(200===u.status?o(u.responseText,u,t,e):0!==u.status&&o(null,u,t,e))},u.onerror=function(n){console.log(n),o(null,u,t,e)},u.ontimeout=function(){o(null,u,t,e)},a&&a.length)switch(
// Build query string
i=a.map((function(t){return t.name+"="+t.value})).join("&"),r){case"GET":
// Reset query string to avoid an issue with repeat submissions where checkboxes that were
// previously checked are incorrectly preserved
t=t.split("?")[0],
// Append new query string
t+="?"+i;break;case"POST":
// Send query string as request payload
c=i}else l&&(c=l);
// Add a timestamp as part of the query string if cache busting is enabled
return e.cacheBust&&(t=n(t,"t",Date.now())),u.open(r,t,!0),u.timeout=h,u.setRequestHeader("X-Requested-With","XMLHttpRequest"),u.setRequestHeader("X-PJAX","true"),u.setRequestHeader("X-PJAX-Selectors",JSON.stringify(e.selectors)),
// Send the proper header information for POST forms
c&&"POST"===r&&!l&&u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u.send(c),u}},{"./util/update-query-string":22}],15:[function(t,e,o){var n=t("./foreach-els"),i=t("./switches");e.exports=function(t,e,o,s,r,a){var l=[];o.forEach((function(o){var c=s.querySelectorAll(o),u=r.querySelectorAll(o);if(this.log&&this.log("Pjax switch",o,c,u),c.length!==u.length)throw"DOM doesn’t look the same on new loaded page: ’"+o+"’ - new "+c.length+", old "+u.length;n(c,(function(n,s){var r=u[s];this.log&&this.log("newEl",n,"oldEl",r);var c=t[o]?t[o].bind(this,r,n,a,e[o]):i.outerHTML.bind(this,r,n,a);l.push(c)}),this)}),this),this.state.numPendingSwitches=l.length,l.forEach((function(t){t()}))}},{"./foreach-els":5,"./switches":16}],16:[function(t,e,o){var n=t("./events/on");e.exports={outerHTML:function(t,e){t.outerHTML=e.outerHTML,this.onSwitch()},innerHTML:function(t,e){t.innerHTML=e.innerHTML,""===e.className&&t.removeAttribute("class"),this.onSwitch()},switchElementsAlt:function(t,e){
// Copy attributes from the new element to the old one
if(t.innerHTML=e.innerHTML,e.hasAttributes())for(var o=e.attributes,n=0;n<o.length;n++)t.attributes.setNamedItem(o[n].cloneNode());this.onSwitch()},
// Equivalent to outerHTML(), but doesn't require switchElementsAlt() for <head> and <body>
replaceNode:function(t,e){t.parentNode.replaceChild(e,t),this.onSwitch()},sideBySide:function(t,e,o,i){var s=Array.prototype.forEach,r=[],a=[],l=document.createDocumentFragment(),c="animationend webkitAnimationEnd MSAnimationEnd oanimationend",u=0,h=function(t){t.target===t.currentTarget&&--u<=0&&r&&(r.forEach((function(t){
// browsing quickly can make the el
// already removed by last page update ?
t.parentNode&&t.parentNode.removeChild(t)})),a.forEach((function(t){t.className=t.className.replace(t.getAttribute("data-pjax-classes"),""),t.removeAttribute("data-pjax-classes")})),a=null,// free memory
r=null,// free memory
// this is to trigger some repaint (example: picturefill)
this.onSwitch())}.bind(this);i=i||{},s.call(t.childNodes,(function(t){r.push(t),t.classList&&!t.classList.contains("js-Pjax-remove")&&(
// for fast switch, clean element that just have been added, & not cleaned yet.
t.hasAttribute("data-pjax-classes")&&(t.className=t.className.replace(t.getAttribute("data-pjax-classes"),""),t.removeAttribute("data-pjax-classes")),t.classList.add("js-Pjax-remove"),i.callbacks&&i.callbacks.removeElement&&i.callbacks.removeElement(t),i.classNames&&(t.className+=" "+i.classNames.remove+" "+(o.backward?i.classNames.backward:i.classNames.forward)),u++,n(t,c,h,!0))})),s.call(e.childNodes,(function(t){if(t.classList){var e="";i.classNames&&(e=" js-Pjax-add "+i.classNames.add+" "+(o.backward?i.classNames.forward:i.classNames.backward)),i.callbacks&&i.callbacks.addElement&&i.callbacks.addElement(t),t.className+=e,t.setAttribute("data-pjax-classes",e),a.push(t),l.appendChild(t),u++,n(t,c,h,!0)}})),
// pass all className of the parent
t.className=e.className,t.appendChild(l)}}},{"./events/on":3}],17:[function(t,e,o){var n;e.exports=(n=0,function(){var t="pjax"+(new Date).getTime()+"_"+n;return n++,t})},{}],18:[function(t,e,o){e.exports=function(t){
/* istanbul ignore if */
if(null===t||"object"!=typeof t)return t;var e=t.constructor();for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}},{}],19:[function(t,e,o){e.exports=function(t,e,o){for(var n=0;n<e.length;n++)for(var i=t.querySelectorAll(e[n]),s=0;s<i.length;s++)if(i[s].contains(o))return!0;return!1}},{}],20:[function(t,e,o){e.exports=function(t){if(null==t)return null;for(var e=Object(t),o=1;o<arguments.length;o++){var n=arguments[o];if(null!=n)for(var i in n)
// Avoid bugs when hasOwnProperty is shadowed
Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}},{}],21:[function(t,e,o){e.exports=function(){}},{}],22:[function(t,e,o){e.exports=function(t,e,o){var n=new RegExp("([?&])"+e+"=.*?(&|$)","i"),i=-1!==t.indexOf("?")?"&":"?";return t.match(n)?t.replace(n,"$1"+e+"="+o+"$2"):t+i+e+"="+o}},{}]},{},[1])(1)}));