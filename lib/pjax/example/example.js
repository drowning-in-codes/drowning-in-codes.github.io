/* global Pjax */
var pjax,initButtons=function(){var e=document.querySelectorAll("button[data-manual-trigger]");if(e)
// jshint -W083
for(var t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){"true"===e.currentTarget.getAttribute("data-manual-trigger-override")?
// Manually load URL with overridden Pjax instance options
pjax.loadUrl("/example/page2.html",{cacheBust:!1}):
// Manually load URL with current Pjax instance options
pjax.loadUrl("/example/page2.html")}));
// jshint +W083
};console.log("Document initialized:",window.location.href),document.addEventListener("pjax:send",(function(){console.log("Event: pjax:send",arguments)})),document.addEventListener("pjax:complete",(function(){console.log("Event: pjax:complete",arguments)})),document.addEventListener("pjax:error",(function(){console.log("Event: pjax:error",arguments)})),document.addEventListener("pjax:success",(function(){console.log("Event: pjax:success",arguments),
// Init page content
initButtons()})),document.addEventListener("DOMContentLoaded",(function(){
// Init Pjax instance
pjax=new Pjax({elements:[".js-Pjax"],selectors:[".body","title"],cacheBust:!0}),console.log("Pjax initialized.",pjax),
// Init page content
initButtons()}));