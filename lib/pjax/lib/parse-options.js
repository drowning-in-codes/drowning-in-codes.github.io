/* global _gaq: true, ga: true */
var defaultSwitches=require("./switches");
/* istanbul ignore next */
function defaultAnalytics(){window._gaq&&_gaq.push(["_trackPageview"]),window.ga&&ga("send","pageview",{page:location.pathname,title:document.title})}module.exports=function(t){return(t=t||{}).elements=t.elements||"a[href], form[action]",t.selectors=t.selectors||["title",".js-Pjax"],t.switches=t.switches||{},t.switchesOptions=t.switchesOptions||{},t.history=void 0===t.history||t.history,t.analytics="function"==typeof t.analytics||!1===t.analytics?t.analytics:defaultAnalytics,t.scrollTo=void 0===t.scrollTo?0:t.scrollTo,t.scrollRestoration=void 0===t.scrollRestoration||t.scrollRestoration,t.cacheBust=void 0===t.cacheBust||t.cacheBust,t.debug=t.debug||!1,t.timeout=t.timeout||0,t.currentUrlFullReload=void 0!==t.currentUrlFullReload&&t.currentUrlFullReload,
// We can’t replace body.outerHTML or head.outerHTML.
// It creates a bug where a new body or head are created in the DOM.
// If you set head.outerHTML, a new body tag is appended, so the DOM has 2 body nodes, and vice versa
t.switches.head||(t.switches.head=defaultSwitches.switchElementsAlt),t.switches.body||(t.switches.body=defaultSwitches.switchElementsAlt),t};