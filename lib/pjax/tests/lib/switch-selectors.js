var tape=require("tape"),switchesSelectors=require("../../lib/switches-selectors.js"),noop=require("../../lib/util/noop"),pjax={onSwitch:function(){console.log("Switched")},state:{},log:noop};
// @author darylteo
tape("test switchesSelectors",(function(e){
// switchesSelectors relies on a higher level function callback
// should really be passed in instead so I'll leave it here as a TODO:
var n=document.implementation.createHTMLDocument(),t=document.createElement("div");
// a div container is used because swapping the containers
// will generate a new element, so things get weird
// using "body" generates a lot of testling cruft that I don't
// want so let's avoid that
t.innerHTML="<p>Original Text</p><span>No Change</span>",document.body.appendChild(t);var a=n.createElement("div");a.innerHTML="<p>New Text</p><span>New Span</span>",n.body.appendChild(a),switchesSelectors.bind(pjax)({},// switches
{},// switchesOptions
["p"],// selectors,
n,// fromEl
document,// toEl,
{}),e.equals(t.innerHTML,"<p>New Text</p><span>No Change</span>","Elements correctly switched"),e.end()})),tape("test switchesSelectors when number of elements don't match",(function(e){var n=document.implementation.createHTMLDocument(),t=document.implementation.createHTMLDocument(),a=t.createElement("div");a.innerHTML="<p>Original text</p><span>No change</span>",t.body.appendChild(a);var o=n.createElement("div");o.innerHTML="<p>New text</p><p>More new text</p><span>New span</span>",n.body.appendChild(o);var p=switchesSelectors.bind(pjax,{},// switches
{},// switchesOptions
["p"],// selectors,
n,// fromEl
t,// toEl,
{});e.throws(p,null,"error was thrown properly since number of elements don't match"),e.end()}));