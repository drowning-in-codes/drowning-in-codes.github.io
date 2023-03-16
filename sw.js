/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","2696dc16ed6ea13109b44fc10de04f2b"],["/2021/04/20/稀疏矩阵/index.html","3f95473a9c4e1ed7fb85f65ac6d582b0"],["/2021/04/23/广义表简介/index.html","dfe4f5e7343428ca65f05365eedc15aa"],["/2021/04/29/关于指针和函数/index.html","333444b209ee14af4a56ca4f95e3b97d"],["/2021/05/10/哈夫曼编-译码/index.html","95e1bc3425d3f73979e5d10656b7f829"],["/2021/05/17/数据结构noj_2/index.html","d9bc6ea062e5951bfc2fa7a7b68a6359"],["/2021/05/30/数据结构试验/index.html","f6503e6126473904148b2e44e2b55c8f"],["/2021/06/12/数据结构noj-3/index.html","bf6df04a4d69239299d9d52248f7273b"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","c9f0cfb26ddae2946a6c5043af30b1b8"],["/2021/07/08/课程资源分享/index.html","5712c1bca50b667ac7a797164fb10bdd"],["/2021/07/20/Scrapy-下载图片-文件/index.html","68bfa04842f451854386f6d673bf98e9"],["/2021/07/21/Scrapy-动态网页爬取/index.html","e9e8f07627bbdf948bba63aa4a8c3473"],["/2021/07/21/疫情打卡/index.html","e94cb5c589a14f8845cff57effc1f2a1"],["/2021/07/29/Scrapy代理设置/index.html","b064b8e0d7c7633964b586f61000922a"],["/2021/07/29/数据库认识/index.html","16f382e41489bd9332263596dee6c9f2"],["/2021/07/31/Python多线程学习/index.html","6e24f6456c895f00c73e6351a7cbd140"],["/2021/07/31/tkinter-requests练习/index.html","26f6d90a13a08021774535163096aeec"],["/2021/08/10/Git学习/index.html","54e0c979555cfe56db6d6d1b8a7facfd"],["/2021/08/15/pygame实践-1/index.html","ddf5d2d5962e6d22b79e2749abfa5c01"],["/2021/09/06/微信小程序开发/index.html","a30c6355b73e611bddd82b466ac27a03"],["/2021/09/21/命令集-1/index.html","a66b13f1cfbe07382d446a689c650763"],["/2021/09/21/命令集-2/index.html","4ad2ea425962df363d8061ccc72c09a1"],["/2021/09/21/命令集-3/index.html","38f36c526850789955ca64eac2bd3310"],["/2021/09/21/命令集-4/index.html","17cef4eb3e0ff3ba23741c8f5b67bbd1"],["/2021/10/03/socket学习/index.html","3358e9e63038bc0d683505f36953d77c"],["/2021/10/10/dwm入门/index.html","c04669f9d80dbc046500c0580d08ffde"],["/2021/10/10/安装ohmyzsh并配置/index.html","5a3773638a1f87793d7c4d62a92c23cd"],["/2021/10/20/css学习/index.html","152fe08360f27477cfea9e58ee75687e"],["/2021/10/20/wm入坑/index.html","db8f5a5f5ac0a05b83971e96e87a5f66"],["/2021/11/03/微信小程序学习/index.html","c97ea25e80e25511fb6b5a34b0d99c0b"],["/2021/11/04/css揭秘/index.html","e22e489492e3bb993a916cd2b8c26434"],["/2021/11/05/css-练习/index.html","fe0c7705455da62005a3feed2dfb9bd6"],["/2021/11/21/命令集-5/index.html","1238f5ad89977c009590d93145736d4b"],["/2021/11/21/命令集-6/index.html","af559f5978a700a6d9ac855578e9b0b1"],["/2021/11/21/命令集-7/index.html","5a794091e56eccbe665a32ac2256aa24"],["/2021/12/01/搭建wordpress/index.html","44f8dcbc2941939643c41350ccfdf9b4"],["/2021/12/08/python操作百度网盘/index.html","b81cf8465e11ac26f92e844814b91e55"],["/2021/12/14/js爬虫/index.html","21c96d9146f8292b6ef1c9de7f2381ba"],["/2021/12/25/为网站申请ssl证书/index.html","af9a4115ad06c545a3f57e6702639492"],["/2021/12/29/使用七牛云为网站提供服务/index.html","7c344e7f45d774944d95cc92ddc94358"],["/2021/12/30/jQurey继续学习/index.html","fb9ca2d9fcf564b0063b949c41c5a833"],["/2021/12/30/jquery学习/index.html","e2cf70efaaa5d88be97f74c54d2baf0c"],["/2021/12/31/vue学习/index.html","89906d81409b6661cce1b495c15a2e9e"],["/2022/01/02/疫情自动打卡/index.html","8f331b1a23d420c70017737f8641d62d"],["/2022/01/03/javaweb初体验/index.html","26f7c610fe30e961ff043210770f3a96"],["/2022/01/04/codewars练习/index.html","fbe11918f00da3aa5a44000b6ad4375f"],["/2022/01/05/Spring学习/index.html","97d5d40a3da39862fe82844c15b2401e"],["/2022/01/05/vue实战/index.html","488e75244f1c59eed482ca0d9ff54b3f"],["/2022/01/08/gdb-gcc学习/index.html","8702501e77833e3055974cc0bc201d89"],["/2022/01/11/python-opencv学习/index.html","70911790eed6c7b901b1b89d930035fe"],["/2022/01/12/汇编实战/index.html","70e133bd1048d02442cb61684476c44b"],["/2022/01/17/pandas学习/index.html","fff836dcc267b1a03cd14f5042c0a8c2"],["/2022/01/19/可视化图的工具/index.html","1defb076f6fc6a339f8473e0855e516e"],["/2022/01/19/机器学习入门/index.html","e4b8fdbe20ea4ff990cd3c9e7331fb31"],["/2022/01/20/cousera-ML学习/index.html","d33ed9c1c151bea0bb69225d1d03ca7e"],["/2022/01/30/typora解绑后出现问题/index.html","4a58cfac9f5eef568f58c10a00c494ae"],["/2022/02/03/NLP学习/index.html","6424b7c5c87f40cfec178f1838e31c02"],["/2022/02/04/Web漏洞学习/index.html","0dc6970145576c6a72d177487468657f"],["/2022/02/04/pyqt学习/index.html","291fffd84ddfa187a2a18e429be24c7b"],["/2022/02/04/python爬虫/index.html","6d468082d1ba6aeb0ba70237d9febf26"],["/2022/02/18/Electron学习/index.html","a27bbafdc6a74378fdc56133ba6ed060"],["/2022/02/22/疫情填报字段解析/index.html","b29cfe3f3bf424fe17ab2e7290e291df"],["/2022/02/24/Bomb-lab实验/index.html","db8de763724aa3ac430bc82eeebd418c"],["/2022/03/05/nginx学习/index.html","cf32de4f728c516d06ed4d613936ad84"],["/2022/03/09/汇编原理课程学习/index.html","3b9782b9f87bc6d481b78468cf947306"],["/2022/03/11/Keras学习/index.html","4ec46af811f8f70b306f6dbab4803a0b"],["/2022/04/01/graphviz学习/index.html","604d905abb5a36679a5e08cb4eada0ca"],["/2022/04/07/django学习/index.html","4012ac9773dc1478195c902c6dd1f859"],["/2022/04/11/密码破解学习/index.html","f9070202ab9bda63d856f63c6872556a"],["/2022/04/12/flex-bison学习/index.html","1c67ec69bf9f4064618df90a3ca59d13"],["/2022/04/15/pytorch学习/index.html","d3c79c7ff7bd1cf7305c55634c82f242"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","562f65b1186d292e35e186ee57df285f"],["/2022/04/23/写一个音乐播放器/index.html","b21001cc2934d0daa604ac48f296d791"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","1a5c5f66bfce782293b44ebc32f9bfe1"],["/2022/04/30/GAN学习/index.html","c533484e46147e3d232df0289f53616f"],["/2022/05/02/html精学/index.html","0c90c6e4b0c78b0244d542a3bbbeaea4"],["/2022/05/06/write-a-compiler-by-yourself/index.html","a8bfa50addb803b95baaf8ed8f1cd2ff"],["/2022/05/30/acwj-01/index.html","7b5394383ec20755dd5b0bd11a7b6c86"],["/2022/06/14/animeGAN/index.html","5a8b433a9359d0a20614c22015c16e9e"],["/2022/07/09/c-与算法学习/index.html","5be55649cbf625f4ff95bedce19cfd2d"],["/2022/09/19/flask学习/index.html","57cef2420a949d662e0e3692daa2ea9c"],["/2022/09/22/cs224w学习/index.html","5ba9a8be3ebce6718f67be85efc23014"],["/2022/09/28/记录一次wp重装/index.html","a589f8fd98599f515a2f85a4b037a696"],["/2022/10/01/Obsidian学习/index.html","71be8b61809b31c1574a8809a5a7352d"],["/2022/10/08/vue-element-template实战/index.html","82d6b883636b832518e22ad34c4015b3"],["/2022/10/25/vue网上商城项目/index.html","90e64ba95622711870e6189f03466e2a"],["/2022/11/11/leetcode刷题记录/index.html","3e78b0667967ea0e8fe1c61717a9af2c"],["/2022/11/11/使用overleaf优雅地写文章/index.html","a98b2c889e1d4031847c9b207c6f4bfd"],["/2022/11/22/磁力链接与RSS订阅/index.html","1020a0018a625a287c8cfe69d02eaae7"],["/2022/12/11/uniapp申请获取地理位置/index.html","ae5321ddbb474fa527b6862e5a8601ad"],["/2022/12/26/pr剪辑学习/index.html","45167cd114d274cf62978b21592cd965"],["/2022/12/27/css中的flex和grid布局/index.html","ad52b833e2676cbc6f760a474313c735"],["/2022/12/28/Flutter学习/index.html","7408cd619971b5e1ab7c7745edf40298"],["/2023/01/01/美化github首页/index.html","96b0a4842b8ff6ad899c1b670d2483e4"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","c7540b8030dcd153b2438fa9b1d366fd"],["/2023/01/04/构建微信快捷发布文章工具/index.html","66d32d5841cf91d623c5cd9cee99286f"],["/2023/01/14/dart学习/index.html","4be76188fff8ed14ddef62144a7c2a60"],["/2023/01/23/闲置服务器BT下载影视/index.html","9c2ccc1c91124c8aa00463745f716dd2"],["/2023/02/07/TotalCommander使用和学习/index.html","a1c3455539abc87fac6e34d0419a72a2"],["/2023/02/13/docker学习/index.html","4f1b5e63c651e6ba3f8c2df2991f4815"],["/2023/02/17/DLHLP学习/index.html","0d39aa1712959de225aedc17a7bfb1fb"],["/2023/02/18/学习purecss构建自己的css框架/index.html","950345e8ede419bbef767b53f51b9db4"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","3fc620d068385e739691d6e581fcc534"],["/2023/03/05/STL学习/index.html","6b11d845e147e9fc99939eb36676257e"],["/about/index.html","9425030a2c1eeda655db7542f33371e7"],["/archives/2021/04/index.html","e5be56aab63d8db3fe56da3f45834858"],["/archives/2021/05/index.html","8712feac2d0ae0bd4e66100306fbde77"],["/archives/2021/06/index.html","1fcf59f469d725deeaccc8911f21a2e9"],["/archives/2021/07/index.html","54529b0206cd936e30aa427ed025b910"],["/archives/2021/08/index.html","489fe424e1eef2007ecec1941fbec4c5"],["/archives/2021/09/index.html","72e2c69d9e22697d1b795d0be857f733"],["/archives/2021/10/index.html","57b1738e4ae9a35bcaf87b089155e459"],["/archives/2021/11/index.html","9990ff9b4dd3033a8e0a6dc36b909fff"],["/archives/2021/12/index.html","5fa27ed8490f9da1ef2a5d795c81ad57"],["/archives/2021/index.html","a1823ff5a7fa1ca91a47c9702b5d9b46"],["/archives/2022/01/index.html","552f273f14dba7c111683428162d4ae0"],["/archives/2022/02/index.html","30a063ee8134c37a2d413185e0c4c2c1"],["/archives/2022/03/index.html","99303c6712851c020491e81fe7966ea5"],["/archives/2022/04/index.html","7c84a6aaf03d62ee9f35b4fb8a3c0c4e"],["/archives/2022/05/index.html","d544eac10fb261c9a97cf2ae2ab540d3"],["/archives/2022/06/index.html","00e9c51c24e6d252ae9cce42b6a837fd"],["/archives/2022/07/index.html","7482eb2713cef801e31795ae26463a26"],["/archives/2022/09/index.html","03f6b12c622d18edb2283432b5539148"],["/archives/2022/10/index.html","24c5daa5c7f8cb48db9911981a198346"],["/archives/2022/11/index.html","f2863428eeec2bb7e405dfa18d100f4e"],["/archives/2022/12/index.html","3bead2f58e918b605d95eac8a5d00133"],["/archives/2022/index.html","6c27e4a1705efa99c0b1fdf20a376351"],["/archives/2023/01/index.html","5c5df0d10726eca9db124d592953a0c7"],["/archives/2023/02/index.html","be598363148829fa8333d80f51551ec8"],["/archives/2023/03/index.html","1849b407aed7266308b01aa72dc18948"],["/archives/2023/index.html","7c33434933d63157f28e5f9890ea22b9"],["/archives/index.html","f2f955478ff6e8562f8708f61e918c0a"],["/archives/page/2/index.html","f2940680b156103a618ba93bf8dcc24b"],["/archives/page/3/index.html","fdadc207cb5ec3a0f40e90d1da3a3524"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","6387c5e971f12a0b3317de683155fd55"],["/categories/ML/index.html","e9e4ecbe788f9d89bd07be65e24c5044"],["/categories/Nginx/index.html","9656abe6a07c07bc463cb221471213c6"],["/categories/Spring/index.html","07cdb7ed0522e35761957770b557143f"],["/categories/course/index.html","9dc6f54f4da311203ad1cf6aba7453e0"],["/categories/django/index.html","ced9c1aa7d0773ba1085a10091db8432"],["/categories/fun/index.html","4f3c56166b6060c88c566ac76e8c9200"],["/categories/gcc/gdb/index.html","4817f0fd5ec54b617999902da3064275"],["/categories/gcc/index.html","32aef2c242b37afa52d893b640741e0a"],["/categories/index.html","437d890929706f89501e55f6c73646ae"],["/categories/java/index.html","fd7d16e36bf7ce387100b34d6eeec2c9"],["/categories/python/index.html","ea0a426fef8e62a9b2a1caa452ceb17e"],["/categories/study/index.html","2d50e6a5ad5218e5a4136eb124a19727"],["/categories/vue/index.html","1b4ca688c0bf2436e024173a8bcbdde7"],["/categories/误区/index.html","8ec213768226534b8ddc4952c519cbdb"],["/commonweal/index.html","490fa04626763ad810312c2e69bf1dfc"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","62cd212fb020e9045926321eb8a11eb0"],["/home/index.html","7c71d06f4ce39a5866828b01ae850952"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","48f6d8d6cb7c96b4e35c84d5930d78e0"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8ae60a9d79d75ec26cb98ba55ee3bcf0"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","a170d4c340cf4bbc9d3dff17eae26d6f"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","222705dadb4de0ba6bfa718276d121f9"],["/page/11/index.html","1d3188122884ef3a8068da66b0ea15b6"],["/page/12/index.html","ef3dd6b2906039616d366906f74cfa86"],["/page/13/index.html","239fd596e20b160d68b1b8ed9e70b829"],["/page/14/index.html","ed14f2affe7d2bf92a0e37d2a49a5cbf"],["/page/15/index.html","eefd0aa35847c9e72dec92438c51127e"],["/page/16/index.html","f9f7424907794d286cc09df94867d2f7"],["/page/17/index.html","233f821f7e800a6cd7cdb02a0c9f8507"],["/page/18/index.html","00e2b0fdbae0195a5382360235443d34"],["/page/19/index.html","45cb2b1dbe36acf79ea5f2e9d41ce4c0"],["/page/2/index.html","7628a0adafd6769956fdb95a181e3674"],["/page/20/index.html","46b841f745689ffbbbdd2c0bf3d13fe8"],["/page/21/index.html","5791eb2360f4ec33082f890fb76a4f15"],["/page/3/index.html","9b71f2c6dee7c815931421219ba207e0"],["/page/4/index.html","96c6d88f3618406018f2a921243d0905"],["/page/5/index.html","152061139325e9fdbcdaf3d42fde7e27"],["/page/6/index.html","31cbc38e240ba406c661ffba9033338b"],["/page/7/index.html","c9ef7fc3462e9f6a2813482e36f2894c"],["/page/8/index.html","1de05cc0a6eba762835a31f94a448aae"],["/page/9/index.html","3205e6b976d5462f6a10ae73f7b20aa0"],["/resume/index.html","9547440713599f8ce5e01f4c19d2fbf4"],["/schedule/index.html","474d3028bbee365ae9f3d2e55d8b1c8f"],["/sitemap/index.html","ee97c149434572f9bc0b5af55aa829b0"],["/sw-register.js","a30b28458e402a1bb3593cd237b68214"],["/tags/AI/index.html","2f3557b4ddd6e1631451898c4d81252f"],["/tags/BT/index.html","89f6c9400f928953ca174bb2e37f5262"],["/tags/BaiduNetdisk/index.html","c486043ec17c842f14ee8047a4085866"],["/tags/Bootstrap5/index.html","e1a74c276c1ee70645948199cf7ba1f8"],["/tags/CSS3/index.html","beb63a3aea5d2ae874e0cf1bdedf161e"],["/tags/Centos/index.html","ec755c8a794c3fe62d00d54cb7d9f3d8"],["/tags/Electron/index.html","382a132750bd5d47ae1a38953978dfdc"],["/tags/ElementUI/index.html","57d1ce39b60dfc85e925087e84365a7c"],["/tags/Flutter/index.html","299175d58be27ad8d5c6b6c087189209"],["/tags/GAN/index.html","6489b89476531293bdc3b90af239ed60"],["/tags/GUI/index.html","f3f5b4bc3b04c032697801a00fc5ba4f"],["/tags/Git/index.html","56f88275394845c252b6fac10f0801c1"],["/tags/JavaScript/index.html","a1210bdfc6ed1d9d4ee4425194d3df6b"],["/tags/Keras/index.html","0357b35476920126f4517c28dff58433"],["/tags/Linux/index.html","46e4d24c093b0a3c28ecef5cf55bf8ad"],["/tags/ML/index.html","ee6642f90b2d1f3ab3334fc426ffd93f"],["/tags/NLP学习/index.html","39b4e1a99e9ed0e986a172891cc7e320"],["/tags/Nginx/index.html","928b9948458b5978aa333b90a8aef5a1"],["/tags/Obsidian/index.html","6daef149ce7f1d53037c32591d5a22b0"],["/tags/Qt/index.html","6d98466cdc88f1866a47a3d82609e680"],["/tags/RSS/index.html","14eb8bf1c019018c3fd411c27f902c16"],["/tags/SSL/index.html","9e1f8b5713661a7b12bb8c641b9fdc85"],["/tags/Scrapy/index.html","bb5239abb5e6bc6150a6970b8e500b17"],["/tags/Speech/index.html","5c23800cfbced25ac8f36c4a0e0324e9"],["/tags/TotalCommander/index.html","f05cb0cc0295e47d78738426353a55ce"],["/tags/Web/index.html","e1c6a7660b83cd725c09cdb2e7b953de"],["/tags/algorithm/index.html","313a6814669ebd87f4c4db8366fb4aea"],["/tags/bison/index.html","458501b69dd7f2d71d5c29cfb91f4a9f"],["/tags/bomb-lab/index.html","ecef4e470b2033aa854a8b2857d5845e"],["/tags/c/index.html","125060684fa2bdbd5c84d749d2de6a63"],["/tags/cheerio/index.html","e695f1855d6e138d8a1d139088940c78"],["/tags/codewars/index.html","5772ec8eb85c398e27f3c0f5fd63ee1c"],["/tags/compile/index.html","3d0f02494c5c41c94faec0f1d0b04b07"],["/tags/compiler/index.html","32b145b5ec38ae1d36ab991b740beb1c"],["/tags/cors/index.html","58bacdcd27cb7435b050a0d1d39c5fbf"],["/tags/course/index.html","6f77345079d949f47806ea5cd90d8868"],["/tags/cpp/index.html","1881357aba65ea3960b91458b3ccdf4f"],["/tags/crypto/index.html","8b61fb121dfa4f0bc4d93722979ae63c"],["/tags/csapp/index.html","29256cb8e8a72470150580ad1a338b67"],["/tags/csp/index.html","39bc99e856d912391586e4346388b2f8"],["/tags/css/index.html","db08d45bf9be75b2f88cf5655c1f9c91"],["/tags/dart/index.html","18152a0a6fedbe652e5043db771d90bf"],["/tags/data-structure/index.html","1f205881f54ff6e26f927be1608f0467"],["/tags/database/index.html","5de81a1696e255eb38ad38388dc24c28"],["/tags/deep-learning/index.html","df486518b65e4e89a6aaa17ff0f5d70f"],["/tags/django/index.html","099f415678eb550ec49ae656aaf6b0c7"],["/tags/docker/index.html","87364ad0a04b3cb57f5185ddf576ef53"],["/tags/dwm/index.html","80a309d540a7601d554466d010909286"],["/tags/exercise/index.html","64c7d1d14cae94fd291bdc8e3bb72860"],["/tags/filebrowser/index.html","aa49501a5df8b17df6460531a1253193"],["/tags/flask/index.html","20b39da11edc945d237d11629cb125d0"],["/tags/flex/index.html","cefc7c5836bbbee60489bcaf686e9ec9"],["/tags/front/index.html","c56d1772bf3dcf450bfdb4dddc4ecd18"],["/tags/gcc/index.html","20d722655cbd36cb2659e55ae66c93c2"],["/tags/gdb/index.html","6508a9d070f8f774597a2dcd28b6ba43"],["/tags/github-profile/index.html","bcc3b9cdd2ca3e076013cda95d932c37"],["/tags/github/index.html","2bb84d204109ea4819ca0140c3813893"],["/tags/graphviz/index.html","bbe131b25b658ee63eee11fd66596a28"],["/tags/grid/index.html","866adc4a8c19d05539f3af3ec23888f0"],["/tags/html/index.html","2f5c8758b37ab01c6e1a374f151de062"],["/tags/i3wm/index.html","3786a95d233aad6ef0449e252fdbaf65"],["/tags/index.html","c89c20b2505a327b5870997185609cf8"],["/tags/issue/index.html","00ad4727e1c55920b0fd9c79ae79831e"],["/tags/jQuery/index.html","3c2f1d7310eab89a3f7811343fc2447b"],["/tags/java/index.html","9a2ca74805b8860f14b252117633cea8"],["/tags/js/index.html","0b977d687caf725c576cdaf1d6c0405d"],["/tags/latex/index.html","19520e2afacb2c7b4bd0c30b5999c855"],["/tags/leetcode/index.html","55a93f5de805c99c292ac80511d8269c"],["/tags/lex/index.html","05c7fbe292abccc18c427fd5f59e9e31"],["/tags/material/index.html","b7bb73fba0570b70090ad2a008f963d7"],["/tags/music-player/index.html","fb88c63c58e7ed89067298e2d33d2b82"],["/tags/nodejs/index.html","033c9c4c4c53d8e4037f846b3488c220"],["/tags/noj/index.html","fcc288209a86a900cd425fc309507521"],["/tags/opencv/index.html","eaf32a9b05c8089fd9419d33c1b02297"],["/tags/overleaf/index.html","c67316e9562a4c141c0cea5cc89f3fbf"],["/tags/pandas/index.html","b326282de71fa65d0a5a2ee6ab713908"],["/tags/premiere-pro/index.html","626f239e0598206ad59647d1ed016efe"],["/tags/proxy/index.html","c2201e29daf645a0cd13e181bcb771c9"],["/tags/pure-css/index.html","228852f97127659a8425eaa157bda94c"],["/tags/pygame/index.html","248de7be63fdd19aaa2b491f85eabdd7"],["/tags/python/index.html","79d0ac7128bd66afb02a0f2bc28a04c3"],["/tags/pytorch/index.html","7ea5c38a3abde22ad3a469441d67eff6"],["/tags/reading/index.html","8ea5dec04d23707841225fe4b4ed3839"],["/tags/request/index.html","02dd0f205ddb35a4e1dff363e56b06a9"],["/tags/requests/index.html","a5e5dab821fc4824ca324af1858394d0"],["/tags/security/index.html","c2b67d8f71121c56f69f42c98cd29d87"],["/tags/shell/index.html","137d57ffc3b6f82c36df27955aae3c87"],["/tags/sign-in/index.html","dc3ae0e4999cdf2a3c17c9117c95447e"],["/tags/socket/index.html","c0bf8a52623b634450402c92acbbfc67"],["/tags/spider/index.html","35c827e625bcbcd95a8a82ba849e96d1"],["/tags/splash/index.html","0447d4e7e13df68c917194d56bca0f0b"],["/tags/stl/index.html","244a61684e79736d50b6766be8fe2f0d"],["/tags/superagent/index.html","41495aee4059a7bd85194454c99db190"],["/tags/tensorlow/index.html","c5e53b62a1c3513e339f1ee3cf3b1ef6"],["/tags/tex/index.html","08836542402834d2061763bcbe92faab"],["/tags/threading/index.html","2893da8c1bfd6c7bc7e11126cada5d5d"],["/tags/tkinter/index.html","7ccc3160c3d8b5cc825bbb44edf23894"],["/tags/torrent/index.html","281628155075fd219c0eaab0f6d4d480"],["/tags/tutorial/index.html","4f844137ddccd2e8beef91bdbd491b90"],["/tags/typora/index.html","0f77a95d502cc22ea14e2caebc5d2aff"],["/tags/uniapp/index.html","08b21e66f0bf46862be0289208d2496e"],["/tags/vite/index.html","94bdcc00b2d524b8a79c6da7c071bbcc"],["/tags/vue-element-template/index.html","bc1a324eeb8515366c1dc8c6decd99cb"],["/tags/vue/index.html","a025c6bc3065eee7a4647e21662c6dd1"],["/tags/vue2/index.html","0d0c9f19352b36634c1ee71ec003561e"],["/tags/vue3-x/index.html","2a78611bd218bfe2e2289f440dbfa47c"],["/tags/wechat/index.html","0dc1e7018d84595cc84cff5bccb801e0"],["/tags/wm/index.html","c20d24238593e38cfd9f3ec27a73eec1"],["/tags/wordpress/index.html","1e5a0a3480bb6035e2991021295ba275"],["/tags/workflow/index.html","ce497e6ce324f01ccb4111b0e70f3256"],["/tags/xpath/index.html","a5bd0b2af7a68c9f618f0f31c7995d44"],["/tags/yacc/index.html","3bdc08033eeb3890a600c3286ea9bc1d"],["/tags/zsh/index.html","4020f7447a00897c65d2d5514b19a9bf"],["/tags/七牛云/index.html","e0fbc11213579f1c607408872d588073"],["/tags/函数/index.html","fea47e50e0f3cf1ba69fe42d4525c585"],["/tags/剪辑/index.html","ff0723ba2e767e7d0a6a3a05d84a67a2"],["/tags/存储/index.html","e1d52bee9af532b2d31cc76f2b0c3bd5"],["/tags/实战/index.html","32af84fb1ee5d1ed22e959a691fbdb49"],["/tags/工具使用/index.html","125a6883f9040ee822e55783cb4487f4"],["/tags/建站/index.html","9fd2b32a1cc84cde440540120cf2e45d"],["/tags/微信小程序/index.html","6ad68f822107676cfd1c5279fcc5a77e"],["/tags/指针/index.html","b72ff57e3c2987da18b56d53d2c98e09"],["/tags/效率提升/index.html","e8cc7f420cf6f25af60f8bbb651a8dc7"],["/tags/汇编/index.html","e3bb04b66949619772e048c8272a6f75"],["/tags/浏览器/index.html","94b08ccc024e08e870bef9ac8c68b53f"],["/tags/爬虫/index.html","1cfe27df26baf7421eb14e81c2345af0"],["/tags/算法/index.html","ad94114da098e8460c38a463ad3141d9"],["/tags/编译原理/index.html","6572dd09bbd0e59201461c9e4f0ba295"],["/tags/获取地理位置/index.html","047c3cf51055b2fa5103592f2ad6f3cc"]];
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
