var on=require("../events/on"),clone=require("../util/clone"),attrState="data-pjax-state",formAction=function(e,t){if(!isDefaultPrevented(t)){
// Since loadUrl modifies options and we may add our own modifications below,
// clone it so the changes don't persist
var r=clone(this.options);
// Initialize requestOptions
r.requestOptions={requestUrl:e.getAttribute("action")||window.location.href,requestMethod:e.getAttribute("method")||"GET"};
// create a testable virtual link of the form action
var o=document.createElement("a");o.setAttribute("href",r.requestOptions.requestUrl);var a=checkIfShouldAbort(o,r);a?e.setAttribute(attrState,a):(t.preventDefault(),"multipart/form-data"===e.enctype?r.requestOptions.formData=new FormData(e):r.requestOptions.requestParams=parseFormElements(e),e.setAttribute(attrState,"submit"),r.triggerElement=e,this.loadUrl(o.href,r))}};function parseFormElements(e){for(var t=[],r=e.elements,o=0;o<r.length;o++){var a=r[o],n=a.tagName.toLowerCase();
// jscs:disable disallowImplicitTypeConversion
if(a.name&&void 0!==a.attributes&&"button"!==n){
// jscs:enable disallowImplicitTypeConversion
var i=a.attributes.type;if(!i||"checkbox"!==i.value&&"radio"!==i.value||a.checked){
// Build array of values to submit
var l=[];if("select"===n)for(var u,s=0;s<a.options.length;s++)(u=a.options[s]).selected&&!u.disabled&&l.push(u.hasAttribute("value")?u.value:u.text);else l.push(a.value);for(var c=0;c<l.length;c++)t.push({name:encodeURIComponent(a.name),value:encodeURIComponent(l[c])})}}}return t}function checkIfShouldAbort(e,t){
// Ignore external links.
return e.protocol!==window.location.protocol||e.host!==window.location.host?"external":
// Ignore click if we are on an anchor on the same page
e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":
// Ignore empty anchor "foo.html#"
e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":
// if declared as a full reload, just normally submit the form
t.currentUrlFullReload&&e.href===window.location.href.split("#")[0]?"reload":void 0}var isDefaultPrevented=function(e){return e.defaultPrevented||!1===e.returnValue};module.exports=function(e){var t=this;e.setAttribute(attrState,""),on(e,"submit",(function(r){formAction.call(t,e,r)}))};