var updateQueryString=require("./util/update-query-string");module.exports=function(e,t,u){var n,r=(t=t||{}).requestOptions||{},s=(r.requestMethod||"GET").toUpperCase(),a=r.requestParams||null,o=r.formData||null,l=null,i=new XMLHttpRequest,c=t.timeout||0;
// Prepare the request payload for forms, if available
if(i.onreadystatechange=function(){4===i.readyState&&(200===i.status?u(i.responseText,i,e,t):0!==i.status&&u(null,i,e,t))},i.onerror=function(n){console.log(n),u(null,i,e,t)},i.ontimeout=function(){u(null,i,e,t)},a&&a.length)switch(
// Build query string
n=a.map((function(e){return e.name+"="+e.value})).join("&"),s){case"GET":
// Reset query string to avoid an issue with repeat submissions where checkboxes that were
// previously checked are incorrectly preserved
e=e.split("?")[0],
// Append new query string
e+="?"+n;break;case"POST":
// Send query string as request payload
l=n}else o&&(l=o);
// Add a timestamp as part of the query string if cache busting is enabled
return t.cacheBust&&(e=updateQueryString(e,"t",Date.now())),i.open(s,e,!0),i.timeout=c,i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("X-PJAX","true"),i.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),
// Send the proper header information for POST forms
l&&"POST"===s&&!o&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(l),i};