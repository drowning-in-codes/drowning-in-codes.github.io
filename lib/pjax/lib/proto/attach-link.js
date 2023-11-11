var on=require("../events/on"),clone=require("../util/clone"),attrState="data-pjax-state",linkAction=function(t,e){if(!isDefaultPrevented(e)){
// Since loadUrl modifies options and we may add our own modifications below,
// clone it so the changes don't persist
var o=clone(this.options),r=checkIfShouldAbort(t,e);if(r)t.setAttribute(attrState,r);else{
// don’t do "nothing" if user try to reload the page by clicking the same link twice
if(e.preventDefault(),this.options.currentUrlFullReload&&t.href===window.location.href.split("#")[0])return t.setAttribute(attrState,"reload"),void this.reload();t.setAttribute(attrState,"load"),o.triggerElement=t,this.loadUrl(t.href,o)}}};function checkIfShouldAbort(t,e){
// Don’t break browser special behavior on links (like page in new window)
return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey?"modifier":
// we do test on href now to prevent unexpected behavior if for some reason
// user have href that can be dynamically updated
// Ignore external links.
t.protocol!==window.location.protocol||t.host!==window.location.host?"external":
// Ignore anchors on the same page (keep native behavior)
t.hash&&t.href.replace(t.hash,"")===window.location.href.replace(location.hash,"")?"anchor":
// Ignore empty anchor "foo.html#"
t.href===window.location.href.split("#")[0]+"#"?"anchor-empty":void 0}var isDefaultPrevented=function(t){return t.defaultPrevented||!1===t.returnValue};module.exports=function(t){var e=this;t.setAttribute(attrState,""),on(t,"click",(function(o){linkAction.call(e,t,o)})),on(t,"keyup",function(o){13===o.keyCode&&linkAction.call(e,t,o)}.bind(this))};