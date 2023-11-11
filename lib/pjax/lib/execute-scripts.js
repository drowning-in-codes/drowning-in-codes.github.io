var forEachEls=require("./foreach-els"),evalScript=require("./eval-script");
// Finds and executes scripts (used for newly added elements)
// Needed since innerHTML does not run scripts
module.exports=function(e){"script"===e.tagName.toLowerCase()&&evalScript(e),forEachEls(e.querySelectorAll("script"),(function(e){e.type&&"text/javascript"!==e.type.toLowerCase()||(e.parentNode&&e.parentNode.removeChild(e),evalScript(e))}))};