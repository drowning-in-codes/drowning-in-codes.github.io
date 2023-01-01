/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","78a6ae97b8868140d0dd7359c7966765"],["/2021/04/20/稀疏矩阵/index.html","f7809c5952e58cc4501e646d257f813d"],["/2021/04/23/广义表简介/index.html","4dc7cec51d4c97329cd01cd3ddbad2d2"],["/2021/04/29/关于指针和函数/index.html","98ffeec235ad6a4e845d6bac2aba3962"],["/2021/05/10/哈夫曼编-译码/index.html","bc08ce10495235c85ea047aa2e94cd9d"],["/2021/05/17/数据结构noj_2/index.html","5e2ecd52be1efa5c28dd48fa553416aa"],["/2021/05/30/数据结构试验/index.html","d12b8ce0c771c39a218ed61e0b1db35e"],["/2021/06/12/数据结构noj-3/index.html","b98f36187743d5956e529fac0da664b4"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","4b17d75c3cdb6da5040be1e821bb83b2"],["/2021/07/08/课程资源分享/index.html","b706419a5d347093ffcc0010c68a75a1"],["/2021/07/20/Scrapy-下载图片-文件/index.html","992c874ee2b2a29f1309b4d59dd41837"],["/2021/07/21/Scrapy-动态网页爬取/index.html","b091789d0e939d24e502c9b205d089b1"],["/2021/07/21/疫情打卡/index.html","a098ddd690d9e72cbdedc12ca0e9db11"],["/2021/07/29/Scrapy代理设置/index.html","7ca513f8cdf82b4201de2d2348a612b0"],["/2021/07/29/数据库认识/index.html","3e6eecd675f0dec6c638919880881e39"],["/2021/07/31/Python多线程学习/index.html","05ccc3e9f6e0442b254dc49358334bf7"],["/2021/07/31/tkinter-requests练习/index.html","6b56d3e9c75ee28563be81f9b163dfe7"],["/2021/08/10/Git学习/index.html","e4b7c988922ecd526484f1f1ed45aa45"],["/2021/08/15/pygame实践-1/index.html","49067e90d04893c5a1ade23c62ed4721"],["/2021/09/06/微信小程序开发/index.html","66c6b2d3a2bee1a2062c001b36c852db"],["/2021/09/21/命令集-1/index.html","839bf541e7c75020aa2ccd6ba35929ce"],["/2021/09/21/命令集-2/index.html","382f9108de1dfb708a672f32ad4099c9"],["/2021/09/21/命令集-3/index.html","ee48d86e069b68c81962990f6b0b36cc"],["/2021/09/21/命令集-4/index.html","b8a41d24b1ca82dd28aa6c1926f7dbbd"],["/2021/10/03/socket学习/index.html","1dcd2c7b05a3808be11fc0c26b04a125"],["/2021/10/10/dwm入门/index.html","de9f0a0fbc4f79998f547cfb657142db"],["/2021/10/10/安装ohmyzsh并配置/index.html","b12621469ed9121c04ef26a1b0de7aee"],["/2021/10/20/css学习/index.html","e60cfe42c0dc22aa53ed4efa5d19548c"],["/2021/10/20/wm入坑/index.html","a19acb1ee94b5c4bba8356b05f0377be"],["/2021/11/03/微信小程序学习/index.html","6e6f12ca341d08a0517ec2c45c91c010"],["/2021/11/04/css揭秘/index.html","61d7eef33e7fa20410c92d5df0ae8b2a"],["/2021/11/05/css-练习/index.html","2aad2c355f0fa8056ab2ae4f8dbb2bae"],["/2021/11/21/命令集-5/index.html","9deb66de03fb1400c33f2b06ed9eca41"],["/2021/11/21/命令集-6/index.html","09d8925d3bcf2351ce68d3275f648d7a"],["/2021/11/21/命令集-7/index.html","94d4027e75305294973aa4f51427cddf"],["/2021/12/01/搭建wordpress/index.html","e5e9f818dca09246b33b983899fcab23"],["/2021/12/08/python操作百度网盘/index.html","d15ddd84ab1f362bb5727468f85de571"],["/2021/12/14/js爬虫/index.html","3356257b99c7748a7fcff9f5cf9ef25a"],["/2021/12/25/为网站申请ssl证书/index.html","589e9545383ac77c7d4d65a4f1c01108"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2c9d0e3ac0da514b97a1fe1575c32a42"],["/2021/12/30/jQurey继续学习/index.html","204742990c85538d3e2d54aed961ba81"],["/2021/12/30/jquery学习/index.html","f3c9bcc01ef7ae738b181dc88a24ef7b"],["/2021/12/31/vue学习/index.html","9fd5b8defa79568b03af4591bb1e29e6"],["/2022/01/02/疫情自动打卡/index.html","d2ea720f82c8d76448a35e76804e6c0d"],["/2022/01/03/javaweb初体验/index.html","98e81ba5fdeecbe88ef00b4365b8cff9"],["/2022/01/04/codewars练习/index.html","98f321ff25b1e6fa75197b9a4d51b0a8"],["/2022/01/05/Spring学习/index.html","c206fb5b04e844fa846796d32ae77a92"],["/2022/01/05/vue实战/index.html","f74acc3177c0c494a5d6a74356d23ce3"],["/2022/01/08/gdb-gcc学习/index.html","82d48e7fceb73de2814df87912b4948e"],["/2022/01/11/python-opencv学习/index.html","26748247aa946b6641c92e29fc8c14b0"],["/2022/01/12/汇编实战/index.html","e71cbf3862caa370837d1cb70332d671"],["/2022/01/17/pandas学习/index.html","eceb3d81c653bd226b6718668934727b"],["/2022/01/19/可视化图的工具/index.html","a52266bf063de04febbcba6edfdf7080"],["/2022/01/19/机器学习入门/index.html","1f8bd98b37dc6b422dfb78b8ae97d92c"],["/2022/01/20/cousera-ML学习/index.html","7c1ef4e6e30f69ee388e23b6754d2073"],["/2022/01/30/typora解绑后出现问题/index.html","ecd5121c7cee73b4f1693c31261dfb96"],["/2022/02/03/NLP学习/index.html","02dcdc3825e5e709ede09dc805a323a4"],["/2022/02/04/Web漏洞学习/index.html","2ab15edc9ab76205f38a805247f01f72"],["/2022/02/04/pyqt学习/index.html","6df25a6c4976bb129087da831e5d7f50"],["/2022/02/04/python爬虫/index.html","9aeb145cb456fecaf816147ea30a82b8"],["/2022/02/18/Electron学习/index.html","2d4f42dddc828881a2f612d0a145fb52"],["/2022/02/22/疫情填报字段解析/index.html","87a2b3abec1ad46c3357e58c10ce441e"],["/2022/02/24/Bomb-lab实验/index.html","e9f88cfbad09d5f387219d57ff343eb7"],["/2022/03/05/nginx学习/index.html","1574da67ebab3762dfb622b0527544c8"],["/2022/03/09/汇编原理课程学习/index.html","b012d1f8a19cf3768b5fe340f2a24a26"],["/2022/03/11/Keras学习/index.html","c0e66b44ff25eaf6f2622f811b26767a"],["/2022/04/01/graphviz学习/index.html","13dc8dbe3bb0770e1c9d485813769af2"],["/2022/04/07/django学习/index.html","38edc2f86518dc55a51844665a292efa"],["/2022/04/11/密码破解学习/index.html","7d0b76b3eb7ccf94420c43d53d05c46c"],["/2022/04/12/flex-bison学习/index.html","fa5f4f9e246c5df6aab5f2fa58d0d19c"],["/2022/04/15/pytorch学习/index.html","07cdd2f36b4be6c8ef6077946ef57a7d"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","563cdea4033536323daa61d5ca63d162"],["/2022/04/23/写一个音乐播放器/index.html","1b0bf58cb8487680e76ec4f144bea7c7"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","2d6740f11a93f81f77b82c4b58ab2117"],["/2022/04/30/GAN学习/index.html","93b6f79ddf0a6c4c3c98a660c4500616"],["/2022/05/02/html精学/index.html","e83fbb7b732f3eaf62a559af2f007c99"],["/2022/05/06/write-a-compiler-by-yourself/index.html","ecf56e2033a8008497af9ee1511fd4ca"],["/2022/05/30/acwj-01/index.html","e457a86beedccc6b7e5ed5199efcaa74"],["/2022/06/14/animeGAN/index.html","004aaca1eda0fb4fc764f998320684a7"],["/2022/07/09/c-与算法学习/index.html","68913a0c6e10077df1c02943188380a5"],["/2022/09/19/flask学习/index.html","aacf65f8fb61d6ebd0a207eb3f6def6c"],["/2022/09/22/cs224w学习/index.html","b41067fb1c86c466b69204d75709445a"],["/2022/09/28/记录一次wp重装/index.html","902c6ec3328b04a729bcbcf214c189a3"],["/2022/10/01/Obsidian学习/index.html","710723126ca34691d1c939b7ce302e4a"],["/2022/10/08/vue-element-template实战/index.html","bc123e973a57dba3dcebbe7367bb2866"],["/2022/10/25/vue网上商城项目/index.html","cff3de8b439b42d802712ae05d1a1bb2"],["/2022/11/11/leetcode刷题记录/index.html","e3826dfdcc938466da235d7924695ba5"],["/2022/11/11/使用overleaf优雅地写文章/index.html","f33ce6a0c8913c5628152cefc34770b8"],["/2022/11/22/磁力链接与RSS订阅/index.html","2d1ea976043a946844a6d6bf8096c219"],["/2022/12/11/uniapp申请获取地理位置/index.html","de70dfd47d4b4c47977907d1d2ac5ef0"],["/2022/12/26/pr剪辑学习/index.html","69b3020fe7a9e3064aef052cdb6f0fde"],["/2022/12/27/css中的flex和grid布局/index.html","2a8edf72e02bccf4478497f2b8fbb485"],["/2022/12/28/Flutter学习/index.html","2935933095c9ff5eb873ea8a1cc162a2"],["/2023/01/01/美化github首页/index.html","3e2d889f6364343d236cbe4082ea9022"],["/about/index.html","8a9824acc291d657c36c41dcc505d994"],["/archives/2021/04/index.html","a48cad853fc60508ff757acd8aa2ce08"],["/archives/2021/05/index.html","89a5a14176b5cb800745bbe0416aaf56"],["/archives/2021/06/index.html","180cac05a680290a6a4ab7cf18d94591"],["/archives/2021/07/index.html","96299cebcc071e901b565147e5c7dd82"],["/archives/2021/08/index.html","aa2713ef4ce0f29370f013147823c115"],["/archives/2021/09/index.html","11873bb76780c22c5d0752b6e905dbd9"],["/archives/2021/10/index.html","97d4094bb7351913e0262e1268e382c9"],["/archives/2021/11/index.html","bb9fca8c81ead97aaf0be2f64c71a6e8"],["/archives/2021/12/index.html","1c00b0fd8d44d2393d29b766eae34aad"],["/archives/2021/index.html","9dada97c3c36a47664ae07f9db120b71"],["/archives/2022/01/index.html","30173f3301315114e4a6a62636bfe82f"],["/archives/2022/02/index.html","ed781d68b22e0f90ccfddbb41e1885ad"],["/archives/2022/03/index.html","840e522bd4c6eb128451d034c1e0b4ae"],["/archives/2022/04/index.html","42ab9488451cd238c15a2041788385af"],["/archives/2022/05/index.html","56133cc4602cef73e0b0f04250949b51"],["/archives/2022/06/index.html","96fb9e635321c8c9b4267d43d14a3c32"],["/archives/2022/07/index.html","95ce2ee571a48e28d66610b46e365fef"],["/archives/2022/09/index.html","8abda6e4570af72a27287e3b6f4c63b3"],["/archives/2022/10/index.html","bca21b5e0c0bea09ddfe3fc0b7cf1a25"],["/archives/2022/11/index.html","f4ddc9f10655d441b876b570628b63d4"],["/archives/2022/12/index.html","89a99352534d0ddfd78399c77c6d3982"],["/archives/2022/index.html","580daaf1bba9819a8134952bee689603"],["/archives/2023/01/index.html","442e2c7e513137bd9b05bd63df834d5c"],["/archives/2023/index.html","f1cf3b026317ba94a598dd26f66096ef"],["/archives/index.html","cc06beede2cbfad96b77b2206f0057ac"],["/archives/page/2/index.html","65d64c67769d9e6b12d10877121dd722"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","97267b724790ccce5b7d277b006f1f89"],["/categories/ML/index.html","a998862af0c289f2c5fa420a36942e49"],["/categories/Nginx/index.html","7b6c8cf78100b162e0bc80f87377f976"],["/categories/Spring/index.html","d3e02b905d8dff9c4da3754e168dc182"],["/categories/course/index.html","d7bcfc35c911593ffe5f82db0348c3bb"],["/categories/django/index.html","dbb207a6e66fe6999c01090b6311f3a1"],["/categories/fun/index.html","d3ea88c026456f08521686e734617240"],["/categories/gcc/gdb/index.html","dcee84c2067a51795043a3f45aaa5e75"],["/categories/gcc/index.html","743202e20b422592032591230eedbe10"],["/categories/index.html","07befb3fef7b5cc49c97a6ed77dd4465"],["/categories/java/index.html","d0d4df32478fe680ebcdb7f954d5f417"],["/categories/python/index.html","8f5713d399c579efba7293282e903bd5"],["/categories/study/index.html","40fcbe7a60b61d1cf1107403fabdc783"],["/categories/vue/index.html","6b67daf90676132cae4de962c53ddcaf"],["/categories/误区/index.html","1676699539acdb7b13176bc7aef2346f"],["/commonweal/index.html","634382f25cfe368149ce793a2457bd89"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f40f0c2ccf1664f75687110d9d0dd17f"],["/home/index.html","a976398f9dea7d9f87a5c8a8fa542b7e"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","db6a2ff1804f03960ab523210eff85b4"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","56964f7f888abe08e9ecb479b49bb7ae"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","1985143a2f066c730a5802958d425df1"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","257f451f21626d6e0e05c04f2d3b721c"],["/page/11/index.html","c938ec3b58ccddb1d1a0392da6399228"],["/page/12/index.html","d391e8d8842e419ad7eab06c817ff348"],["/page/13/index.html","98e2bd3d54738d523f54c94d98e48520"],["/page/14/index.html","653e4c0edfce9e7edea417d5beb5c1ed"],["/page/15/index.html","2f66b7d6b798f40f3414c79ab3656b2e"],["/page/16/index.html","64e72e28e9bc6b250b1ad26428264582"],["/page/17/index.html","776f03f367b5ad01f38f60bc93c6323f"],["/page/18/index.html","3a1020d2c239704609f0eb977a576b03"],["/page/19/index.html","85eb25862ae6ffddada5a1ad8ca01d9f"],["/page/2/index.html","278c5baac0fa412726174aa041be82c2"],["/page/3/index.html","d3a737dcfdc8716ac978606fbb2a0d22"],["/page/4/index.html","d4da83d7ee76cf1bd434dadb2bf0fea3"],["/page/5/index.html","2655cdf71f89a4299441091382a46986"],["/page/6/index.html","baf3971a0fdf4042043a6c612d4835a5"],["/page/7/index.html","5bd66886041c271219950ac00fdc0bde"],["/page/8/index.html","733651420f0454e5ba70c5b73db8e912"],["/page/9/index.html","b20f94b108848d745da922901a5c2951"],["/resume/index.html","58fc849bf0f5ed1f4e9a8d698efb49a4"],["/schedule/index.html","578a8929bc2366f3526bddd7a081030d"],["/sitemap/index.html","ba022446a1905c0bdf68621963d34521"],["/sw-register.js","c0f0f3465f28acdd2fa0ae91114c9921"],["/tags/AI/index.html","31361dc6cf2626bd251e70351b37a3ba"],["/tags/BT/index.html","03f5319eb89690d619b8cf5b6f79feed"],["/tags/BaiduNetdisk/index.html","453c0853072dbc7d35b132e5ed701966"],["/tags/CSS3/index.html","1e79f39e1b83888b73da92282a30a262"],["/tags/Electron/index.html","6f2786af5f71d5bc248d97bc843c826e"],["/tags/ElementUI/index.html","c482abadea36728451db4d6d8a792e1a"],["/tags/Flutter/index.html","c30c74bae795b6a6daf21f82403ca8bf"],["/tags/GAN/index.html","a35ba58b9acc3070087ad75fc3200918"],["/tags/GUI/index.html","ea3b0372ee1c9029b3e1b4339805941d"],["/tags/Git/index.html","2c662c006b8e26f9faaa26d9ec4ed565"],["/tags/JavaScript/index.html","76c03d80a70e18da6aeea752827490d9"],["/tags/Keras/index.html","bfde3364eac7aa3f4ec2c5c69a8ce9a1"],["/tags/Linux/index.html","4354365117c4f31e2404663ff5a9c60f"],["/tags/ML/index.html","a2d48a43eba2e087d671f31dec946c69"],["/tags/NLP学习/index.html","99baa10f23d3f896c51127e633594bad"],["/tags/Nginx/index.html","3fff308ca78291b380fe4ccac2d8df6f"],["/tags/Obsidian/index.html","dbb9d00dac433d9f47770a6d5a9d2069"],["/tags/Qt/index.html","c5b9b11233ad17872ee740447055a528"],["/tags/RSS/index.html","7e5541c8cc5ee0de673eb8028648089a"],["/tags/SSL/index.html","d545ccacb035d2b26c4c205578a1909f"],["/tags/Scrapy/index.html","e91b26ac643cb934939ba1f137ab55b9"],["/tags/Web/index.html","88ba6ae99fa5cb27da716c626f710f52"],["/tags/algorithm/index.html","dcff614d1f95f8bff2657f21c579c13c"],["/tags/bison/index.html","075cb6aafb6cfb6793c8ee8444982050"],["/tags/bomb-lab/index.html","d9d8f305f21fe83cb3a9477948791ea4"],["/tags/c/index.html","9e6d039bb68df9288d12242a396b8a1c"],["/tags/cheerio/index.html","bcf92f06e7fcfc556d4479fb56a1302b"],["/tags/codewars/index.html","8727b4e1fc6fd6d7c92495f465e87fd4"],["/tags/compile/index.html","00cab91652492890db5ffd5960a17a88"],["/tags/compiler/index.html","d21fccc8248d994b19c86b0a4648b861"],["/tags/course/index.html","a6bc5aa4733f48d5827fc6329b3419bd"],["/tags/crypto/index.html","90a7d1591680b930d645744924126602"],["/tags/csapp/index.html","00edc69c55982c33080f2eb418362e6c"],["/tags/css/index.html","2e92b75dc3a3c95fe6ab57a36ee667f2"],["/tags/data-structure/index.html","333362645d1a42edb9da385962764bd0"],["/tags/database/index.html","f268237a7b46d2a4ee6ac57dc0d7c950"],["/tags/deep-learning/index.html","490e80f202bba40eae9300d534b08198"],["/tags/django/index.html","4ae6991fe776ceec4f3a6f092ab7a651"],["/tags/dwm/index.html","f91bfe3be9eca26f5c9e31c4e86411cc"],["/tags/exercise/index.html","46451f5f6bfda5b0164c32feb38b9f61"],["/tags/flask/index.html","16637374554f55012be4dad40c8c647d"],["/tags/flex/index.html","f78b15f08797fbdb776ee10f2ab8c351"],["/tags/front/index.html","2208df46de09a8535c80814ce1e452fe"],["/tags/gcc/index.html","3f1548639afdff41c5a8301e9f0f7048"],["/tags/gdb/index.html","d9e6a4937f3ea61fef02c3b559a2be95"],["/tags/github-profile/index.html","1e3395eb503908badbdde263ace3824f"],["/tags/github/index.html","4aff89caf28a62ccc86e0434b8c61e41"],["/tags/graphviz/index.html","bd3ddb1a8b7c36f776d27943e5c59f03"],["/tags/grid/index.html","904ccb34fd21d3fa290b4b0afdcdbc3e"],["/tags/html/index.html","82ea2ecdf6d28a62bd9a172d13e80c46"],["/tags/i3wm/index.html","6cf889d599121d74514d2b6f3778e7e6"],["/tags/index.html","14f8b2e4e003842d724425bb59906d19"],["/tags/issue/index.html","27a2eeff0cf8fd712a126ed682e57a8e"],["/tags/jQuery/index.html","30a402738c1427660874e3be6135f278"],["/tags/java/index.html","45fb8ed624988aad29148ccd2ee683a7"],["/tags/js/index.html","62d2c499214d5fdbb5cf9c2a0ad86cff"],["/tags/latex/index.html","5c82e0d724d03cd96274f8993f1846bc"],["/tags/leetcode/index.html","0f51df210c369e00ae628fa58f3b5865"],["/tags/lex/index.html","992a49232504f24d324baa1d604ab027"],["/tags/material/index.html","08fda24a7997a021df863e2b84139566"],["/tags/music-player/index.html","1773c74890c3a5ddac95539c75f8493d"],["/tags/nodejs/index.html","4480d2805ad5411481f704f02208682c"],["/tags/noj/index.html","dd465915a47b05b2c79b4e403f14abca"],["/tags/opencv/index.html","44d2b99ad67ed70bec6e605c75bb135d"],["/tags/overleaf/index.html","dd05c9f5ff439829926120eb89a180c0"],["/tags/pandas/index.html","218a5e0b2d17207b83c2a483c29c7143"],["/tags/premiere-pro/index.html","22e64a19237c32ceb1c04f5923c51387"],["/tags/proxy/index.html","93c24c26b68588eda03e6ae250414308"],["/tags/pygame/index.html","4988b90ecca85139fef4706f123ac285"],["/tags/python/index.html","02d7c696b54256c5322d1d01f2db82ae"],["/tags/pytorch/index.html","bf0a0c6e54ab87caba5b9db8086ab36a"],["/tags/reading/index.html","7ddb20f284fba1dd80daec640412c7f7"],["/tags/requests/index.html","872ce531dc0d2913e587389941a722b1"],["/tags/security/index.html","4ffd8f76d51c6704a9fa7a82154b981e"],["/tags/shell/index.html","ddd00ae0af78ee11c2101a405220a7a3"],["/tags/sign-in/index.html","a3a5b6167a24a053e7aade5b731d1d5f"],["/tags/socket/index.html","4826a528dd9ef7afe83601f0b83f3bab"],["/tags/spider/index.html","f99223fa89e288cd06539262b9d8fe27"],["/tags/splash/index.html","766665d9c10f66c00af94646cdc034e6"],["/tags/superagent/index.html","9a3cc1945b4594e43ce9a5beeef06cd5"],["/tags/tensorlow/index.html","3e90c84076334a55007fe5d4d274b4fb"],["/tags/tex/index.html","8b569974ef3cf36240488129196ff9b3"],["/tags/threading/index.html","fa958f07c930c72c97f18c3fcb23c48a"],["/tags/tkinter/index.html","2ff9c42a4390a94360a3df1ad42fda32"],["/tags/torrent/index.html","f123cdebf756afec74838eb678f5f566"],["/tags/tutorial/index.html","cde4f54f778aaa6fd0540209ff153cf6"],["/tags/typora/index.html","398f7da0683ac658c84701f17ed63b38"],["/tags/uniapp/index.html","56d7104984552d9696801508bc98ecb5"],["/tags/vue-element-template/index.html","8c006055d3c849db8d09dd50cad9abad"],["/tags/vue/index.html","585f68a46f2ff8782838ee99829f06d6"],["/tags/vue2/index.html","07737d7a1e86f8c7ddcf983ab8d1235a"],["/tags/vue3-x/index.html","f1ca5f650d6f05e0637a1bb87cc0d105"],["/tags/wechat/index.html","b56ed96bcb0c4d33ba90a01091ea52c9"],["/tags/wm/index.html","027f0794e6c6375277c52ddec248edf7"],["/tags/wordpress/index.html","836277ae51321ed9aa958513941e91b6"],["/tags/workflow/index.html","5f3fdbec564b7a97b2c0f3376d13eaf4"],["/tags/yacc/index.html","49df030ae533218dbf0e049ac2e38334"],["/tags/zsh/index.html","0d6907506e751c269b5fcaed9f44f75f"],["/tags/七牛云/index.html","da7599e08dd56816ed748111caeeb82e"],["/tags/函数/index.html","07f242f30aec3664081742c6f54c158d"],["/tags/剪辑/index.html","844efc9781172c46c69fe9a93e61968f"],["/tags/存储/index.html","467de583d005d784fed9ec2525d972a6"],["/tags/实战/index.html","55e976f692c63077811db137567a2729"],["/tags/建站/index.html","aa5128b3f759f6fd3bb03d12a96c014b"],["/tags/微信小程序/index.html","d8fe707d3d22a8436f133073890447bd"],["/tags/指针/index.html","854c44b702ef2dd85a62e72545a7cc93"],["/tags/汇编/index.html","ecea88f326964a98abde8565c3aca4f7"],["/tags/爬虫/index.html","812d0c46671a2bbced66bb54f5baa61e"],["/tags/算法/index.html","b40c12c91c21e8e6f84628695248277d"],["/tags/编译原理/index.html","c3ef6792e50cd980f8a5f1229fb872ce"],["/tags/获取地理位置/index.html","4c8b2a2f86cd385e011946fd85c7230f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.sekyoro.top"});





/* eslint-enable */
