<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>!function(o){"use strict";var n=o.localStorage;null==n&&(
// if the localStorage is not exists
n={
// eslint-disable-next-line
getItem:function(){return null},setItem:function(){},removeItem:function(){},clear:function(){}});
// get the saved bookmark object
var t,e=function(){var o=n.getItem("bookmark");if(null==o)return null;try{return JSON.parse(o)}catch(o){
// invalid object saved in the storage
// console.warn('Invalid bookmark object.');
return null}},a=function(){
// bookmark-link style
var n=o.document.createElement("style");n.type="text/css";var e=".book-mark-link{border-bottom:none;display:block;position:fixed;color:#222;font-size:26px !important;top:-10px;left:20px;transition:.3s;}.book-mark-link:hover,.book-mark-link-fixed{top:-2px}@media(max-width:1090px){.book-mark-link{display:none}}";e=o.document.createTextNode(e),n.appendChild(e),o.document.head.appendChild(n),
// create a link element
// eslint-disable-next-line max-len
t=$('<a class="book-mark-link book-mark-link-fixed fa fa-bookmark" href="#"></a>'),$(o.document.body).append(t);var a=0;
// scroll event
$(o).on("scroll.bookmark",(function(){var n=o.document.documentElement.scrollTop;n>0?0===a&&(t.removeClass("book-mark-link-fixed"),a=n):a>0&&(!t.hasClass("book-mark-link-fixed")&&t.addClass("book-mark-link-fixed"),a=0)}))},r=function(e,a){null==a&&(a={});var r=o.document.documentElement.scrollTop;return a.lastUri=e,a[e]=r,n.setItem("bookmark",JSON.stringify(a)),t.animate({top:-26},"fast",(function(){setTimeout((function(){t.css("top","")}),400)})),a};o.bookmark={loadBookmark:function(){var o=e();null!=o&&
// found the bookmark
$((function(){a(),t.attr("href",o.lastUri+"#book:mark")}))},scrollToMark:function(n,l){var i=o.location.pathname,c=e();$((function(){
// and if the page opens with a specific hash, just jump out
var e;
// eslint-disable-next-line
// auto scroll to the position
(a(),
// save the position by clicking the icon
t.click((function(){return c=r(i,c),!1})),
// register beforeunload event when the trigger is auto
"auto"===n&&
// register beforeunload event
o.addEventListener("beforeunload",(function(){r(i,c)})),null!=c)&&([l,"#comments"].filter((function(n){return n===o.location.hash})).length>0||(e=c[i],isNaN(e)||$((function(){
// eslint-disable-next-line max-len
$(o.document.documentElement).animate({scrollTop:e},"fast")}))))}))}}}(window);<link rel="stylesheet" href="/css/spoiler.css" type="text/css"><script src="/js/spoiler.js" type="text/javascript" async></script>