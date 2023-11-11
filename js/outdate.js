!function(){
//不同的日期显示不同的样式，25 天为黄色提示，90天为红色提示，可以自己定义。
let e=document.getElementsByTagName("time");if(0===e.length)return;let n=document.getElementsByClassName("post-body");if(0===n.length)return;
// 获取系统当前的时间
// 注意times[0]是创建时间,这里尝试使用修改时间 1
if(1===e.length){new Date(e[0].dateTime)}else{new Date(e[1].dateTime);/* 文章发布时间戳 */}let t=Date.now()/* 当前时间戳 */,i=parseInt(t-pubTime),a=parseInt(i/864e5);
/* 发布时间超过指定时间（毫秒） */
//note warning 以及 note danger 是 Next 主题的自定义模板语法，如果使用其他主题，请自行更改样式以达到最佳显示效果
i>1728e6&&i<7776e6?n[0].innerHTML='<div class="note warning"><h5>文章时效性提示</h5><p>这是一篇发布于 '+a+" 天前的文章，部分信息可能已发生改变，请注意甄别。</p></div>"+n[0].innerHTML:i>=7776e6&&(n[0].innerHTML='<div class="note danger"><h5>文章时效性提示</h5><p>这是一篇发布于 '+a+" 天前的文章，部分信息可能已发生改变，请注意甄别。</p></div>"+n[0].innerHTML)}();