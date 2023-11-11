module.exports=function(e){var t=e.text||e.textContent||e.innerHTML||"",n=e.src||"",c=e.parentNode||document.querySelector("head")||document.documentElement,o=document.createElement("script");if(t.match("document.write"))return console&&console.log&&console.log("Script contains document.write. Can’t be executed correctly. Code skipped ",e),!1;if(o.type="text/javascript",o.id=e.id,
/* istanbul ignore if */
""!==n&&(o.src=n,o.async=!1),""!==t)try{o.appendChild(document.createTextNode(t))}catch(e){
/* istanbul ignore next */
// old IEs have funky script nodes
o.text=t}
// execute
return c.appendChild(o),
// avoid pollution only in head or body tags
(c instanceof HTMLHeadElement||c instanceof HTMLBodyElement)&&c.contains(o)&&c.removeChild(o),!0};