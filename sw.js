/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","7c0b778be54b02884d957c2e165a929d"],["/2021/04/20/稀疏矩阵/index.html","e5a7273a9ca8a6adc4cd170a2697a1b6"],["/2021/04/23/广义表简介/index.html","2aa7e8a6778f19247a3dbbdfc29481a8"],["/2021/04/29/关于指针和函数/index.html","cf06afb8528099e42b96067ed6994df9"],["/2021/05/10/哈夫曼编-译码/index.html","bd3e9a0c893f2965b5b4b4fc335a24f8"],["/2021/05/17/数据结构noj_2/index.html","e171cf66c723a88d8c51f84f23ce7dff"],["/2021/05/30/数据结构试验/index.html","ddd5b9b0fd529e29de59108f8c7723f9"],["/2021/06/12/数据结构noj-3/index.html","8a854b0ede10989032096a438ecdff9f"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","bfd907ccfb2eba27e1d0d976366240f8"],["/2021/07/08/课程资源分享/index.html","71cf780f7da62898ff40f146218ba7a5"],["/2021/07/20/Scrapy-下载图片-文件/index.html","7e17ae3fea00ab7fbc0554c29e37ca8e"],["/2021/07/21/Scrapy-动态网页爬取/index.html","7e3cd8e304e8178fe40e2e95046cc432"],["/2021/07/21/疫情打卡/index.html","dc006e01697e8170a23d9e0c12e7a4cb"],["/2021/07/29/Scrapy代理设置/index.html","d246805ee253db613ccddbb4e03b00d0"],["/2021/07/29/数据库认识/index.html","255cb4dac80a901003d89c03982342a4"],["/2021/07/31/Python多线程学习/index.html","bfd830f3ac2f2b50554585a8c8dc48c0"],["/2021/07/31/tkinter-requests练习/index.html","4b12fb75d26db474d4697ff7640f98c5"],["/2021/08/10/Git学习/index.html","ad89096cb0ed1ee1ec22eb66965f3c3e"],["/2021/08/15/pygame实践-1/index.html","f22c5127f4744649385ecb655cf4141a"],["/2021/09/06/微信小程序开发/index.html","751231b63dc1b5bf61e00081188bf4a8"],["/2021/09/21/命令集-1/index.html","fc7fed3d4278c573f45f315c2feda1ca"],["/2021/09/21/命令集-2/index.html","1b8a8ea499d9d361feb4adcc918fd6e3"],["/2021/09/21/命令集-3/index.html","a6c5b22da4c413a4d767fbebcda824cd"],["/2021/09/21/命令集-4/index.html","f0dbc361b202943235e68678049cc419"],["/2021/10/03/socket学习/index.html","4179988b2123111e89d16cf2d1eabf6b"],["/2021/10/10/dwm入门/index.html","1726fb88236538fd31d3bc67ba7929fa"],["/2021/10/10/安装ohmyzsh并配置/index.html","ba8cdebb71b1534f3da1f927ff13ad46"],["/2021/10/20/css学习/index.html","37b98501566aea258b9ff4073c99efaa"],["/2021/10/20/wm入坑/index.html","a32188b59dfc2c41538263c99fae6d7c"],["/2021/11/03/微信小程序学习/index.html","0c8151aab28cb803e5e2b6fa6591ff14"],["/2021/11/04/css揭秘/index.html","4e6f9850501bde3a856936f262ce8ded"],["/2021/11/05/css-练习/index.html","9dbd046ae3581f1a8e99f1296e2acfa3"],["/2021/11/21/命令集-5/index.html","446bd1e28672898828eb160a65032776"],["/2021/11/21/命令集-6/index.html","dfe26092e31b260320b97e448030f96d"],["/2021/11/21/命令集-7/index.html","b9be6527172b39b7d41fb317b2b7460e"],["/2021/12/01/搭建wordpress/index.html","cef2052d1bb58a95bafb64ff16070885"],["/2021/12/08/python操作百度网盘/index.html","d06273797c2c5e3b175837ea36b36873"],["/2021/12/14/js爬虫/index.html","20b1a3e87336e18f3665f0cf12777bdb"],["/2021/12/25/为网站申请ssl证书/index.html","bcb44bfb8507666d6728f28f7d8a93e4"],["/2021/12/29/使用七牛云为网站提供服务/index.html","d179d86841a8f0d2b2ede80a8e390dd8"],["/2021/12/30/jQurey继续学习/index.html","de6be8bbe219edcfaa3ca799cf4f6267"],["/2021/12/30/jquery学习/index.html","96094e7cf9cb0ee4949ffb7aa23341af"],["/2021/12/31/vue学习/index.html","4512ea41e6ed8c329fb8a5bfb824a50c"],["/2022/01/02/疫情自动打卡/index.html","063feea3772334bbe540af9f47e89c33"],["/2022/01/03/javaweb初体验/index.html","2cdcc0ea65ef7fb9a5b1a784d0205b3b"],["/2022/01/04/codewars练习/index.html","fe30a9c985ea0b5634766a96a60e8a07"],["/2022/01/05/Spring学习/index.html","5bd08888009d1f29f71a224a1075fef5"],["/2022/01/05/vue实战/index.html","c5a14b4e263e6acde705253be0aa110f"],["/2022/01/08/gdb-gcc学习/index.html","ff67b7f1dce64226773b3fb9b85643c9"],["/2022/01/11/python-opencv学习/index.html","d302db32b0f0a48b2c884a801d9d9ac1"],["/2022/01/12/汇编实战/index.html","6824fab733b2a87f9940818d70704ae1"],["/2022/01/17/pandas学习/index.html","085ea16d5d61a762749709c72a9444bd"],["/2022/01/19/可视化图的工具/index.html","0d057481409cbcb67c32dcfa5b5bbe7e"],["/2022/01/19/机器学习入门/index.html","4ae90287f129c3aed73c9010a547e864"],["/2022/01/20/cousera-ML学习/index.html","1a06df349a5abe30efc4319fe2c6170c"],["/2022/01/30/typora解绑后出现问题/index.html","29ba2db38608540f91acb67ce36840a0"],["/2022/02/03/NLP学习/index.html","99d8e4d88702135c05acd3e777609beb"],["/2022/02/04/Web漏洞学习/index.html","e6d5fab5600435035a113ab7c6d7ff30"],["/2022/02/04/pyqt学习/index.html","7386da3be4c54010fb9fc6aec6910a53"],["/2022/02/04/python爬虫/index.html","78788f21c3aa4f1ec964a5a8be5ad77b"],["/2022/02/18/Electron学习/index.html","882c2b577d3625c66be2a2709a14b7e8"],["/2022/02/22/疫情填报字段解析/index.html","caf10114f09ae701c2d235776a971399"],["/2022/02/24/Bomb-lab实验/index.html","89ae6dfc8e37d86d7f23b0ff6d1213c0"],["/2022/03/05/nginx学习/index.html","8d17f7223f1ad70f921a76120dacf77d"],["/2022/03/09/汇编原理课程学习/index.html","4f5c5c15bbc891f0350acb35ba26a8bf"],["/2022/03/11/Keras学习/index.html","ef03d9cf7afc5e6e245ab292cd2e071f"],["/2022/04/01/graphviz学习/index.html","567f7a0148b66732ff11ff2d84aec4d1"],["/2022/04/07/django学习/index.html","ab535f4b8b610c0e6f17ee79728c88e1"],["/2022/04/11/密码破解学习/index.html","79a7d9eaafc6881581c9f5fc02673a84"],["/2022/04/12/flex-bison学习/index.html","d65314cf6d8c631e41f8238bf727dfef"],["/2022/04/15/pytorch学习/index.html","2084ce076304a055eca5c2cd6f3b8ba8"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","003a94b14e07edb25471de96dc2730fe"],["/2022/04/23/写一个音乐播放器/index.html","7878073342ef447220dbf3351d2ac300"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","68a1646b2f37beb26a9f9175953b2fad"],["/2022/04/30/GAN学习/index.html","2002d3826547caba591a04d1a5bbd8e9"],["/2022/05/02/html精学/index.html","2129fcdcb8e5e7c64efae310db076bdc"],["/2022/05/06/write-a-compiler-by-yourself/index.html","9fccc3c8eb89c91d68183e625a6d96ed"],["/2022/05/30/acwj-01/index.html","b69d3d5b3de623245ee9275b7c1ca69d"],["/2022/06/14/animeGAN/index.html","3f58afb8f2cb78fdafb502a419571b6b"],["/2022/07/09/c-与算法学习/index.html","b971e6869cc540ccdfeee41823297e84"],["/2022/09/19/flask学习/index.html","b53c428800e26b1a632749b0f9b4f711"],["/2022/09/22/cs224w学习/index.html","525a793f22ee3c4022d5cfa385cf9377"],["/2022/09/28/记录一次wp重装/index.html","ac594dc946ed26431424705c5d6eb2d6"],["/2022/10/01/Obsidian学习/index.html","26f94df974276eff90751a4afd3519bf"],["/2022/10/08/vue-element-template实战/index.html","81f56c09e90e9bfd0214ab4b3cd8f416"],["/2022/10/25/vue网上商城项目/index.html","9726aa065c1bd21600ac8c320f14187e"],["/2022/11/11/leetcode刷题记录/index.html","302c5f9779e7de32bebab10d390b35d4"],["/2022/11/11/使用overleaf优雅地写文章/index.html","af5a63237aaf88008974e7e03eb4c1b4"],["/2022/11/22/磁力链接与RSS订阅/index.html","e07a41ead9862a6e4ad23da5fcbf84e6"],["/2022/12/11/uniapp申请获取地理位置/index.html","76a32545e39da594e960be56dfb41eef"],["/2022/12/26/pr剪辑学习/index.html","e06df73a389f066dec2623c5212839a3"],["/2022/12/27/css中的flex和grid布局/index.html","ec4dfe1be508007202d98cc82d3c8008"],["/2022/12/28/Flutter学习/index.html","18d127d0df0b01b3762afd20f0e7c3dd"],["/2023/01/01/美化github首页/index.html","414e410be38702cedf8937c40f61205c"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","dbb4a2262826dc8d156f56a85e173553"],["/2023/01/04/构建微信快捷发布文章工具/index.html","7edc7842fcf4b2e2130f56c7b3c26ed4"],["/2023/01/14/dart学习/index.html","bf6ec0c3f77aec18d3738b2668590a20"],["/2023/01/23/闲置服务器BT下载影视/index.html","a6de61443cd64895128f8d41544131e2"],["/2023/02/07/TotalCommander使用和学习/index.html","af74ef505fe3a46e0b4fa0a4c76a9f4c"],["/2023/02/13/docker学习/index.html","9b605b7ceefdab4ff8ed64c5b6ce2968"],["/2023/02/17/DLHLP学习/index.html","5b2e46f9ce9d5485e02e50016f4a5851"],["/2023/02/18/学习purecss构建自己的css框架/index.html","f7c950d6d3963539e96f335db40cfe95"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","b8007489627618fb638ff103dbf6f0ab"],["/2023/03/05/STL学习/index.html","81d1191fd97b0effe94882ce2a459ddb"],["/about/index.html","1c933acaa0c908d59ee751ba47711317"],["/archives/2021/04/index.html","d65b30977a52846069e196be34f07628"],["/archives/2021/05/index.html","df4f5f7b890cfe37f0c021af5700ecc0"],["/archives/2021/06/index.html","8dbd55872c6c22ca013a80f3f2b52227"],["/archives/2021/07/index.html","f8219d2c8cf12207fb37e33e0e67d8e0"],["/archives/2021/08/index.html","296e91c07818fb18608f827af60cdc41"],["/archives/2021/09/index.html","13d611d5b6aea4ab8eb176105aaabf90"],["/archives/2021/10/index.html","35ae378e2df4225e1bef27d8fce0b9b7"],["/archives/2021/11/index.html","743af04f02f5917d5f068caf6279ad12"],["/archives/2021/12/index.html","77c6b1698d38a39215ef1a80acc1eac8"],["/archives/2021/index.html","8bae99c27d052d7c6134a0f9bca85211"],["/archives/2022/01/index.html","76064f93b547235bdbcd08035f4758d4"],["/archives/2022/02/index.html","7d6da2a92f13cf0fc2a2a2e0adedb955"],["/archives/2022/03/index.html","64e5e2712d78da497fc084cd0b0da642"],["/archives/2022/04/index.html","95bb0e06711723eea5d4666ed86c0e9e"],["/archives/2022/05/index.html","2303c4068ed36685f5cf3074697c1798"],["/archives/2022/06/index.html","cd056cd1734ea453afa12daa90c08828"],["/archives/2022/07/index.html","9a8fe7f13e1bfe94a592b9e987c5a8d5"],["/archives/2022/09/index.html","dfa2d54260093e4f7b81fe8e5cfd81be"],["/archives/2022/10/index.html","a169f2bb864c50c0e07eadc8b725f523"],["/archives/2022/11/index.html","f50eb499fc120d4c19d713fe78e5d544"],["/archives/2022/12/index.html","5cda02939ea8cfaeeb5c172a75e747e5"],["/archives/2022/index.html","b486bc3954ada1ab54ff59527183e456"],["/archives/2023/01/index.html","c0790035a2072959d72ad0377aac68b7"],["/archives/2023/02/index.html","445a94bc0803e87678e3d15129575bd1"],["/archives/2023/03/index.html","e1463ba677e7ae2a66b77f515331ea50"],["/archives/2023/index.html","78a14acaa15fa017cc44bffb7f89a79b"],["/archives/index.html","68d9f3117302cc0c4c7b3111da935f11"],["/archives/page/2/index.html","b5e5d50c885d15f719eebf48729ad3f6"],["/archives/page/3/index.html","e1525f8c57a203ef0ea73a40c5e549b6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","a4d58789202e44a7699233684397600a"],["/categories/ML/index.html","763c8d13424fdfe2d3cf88308e7505bf"],["/categories/Nginx/index.html","61bcb1343648dc95fd3b64d2975c7ea0"],["/categories/Spring/index.html","c09435e48ace497b3b24b49fb12be3e0"],["/categories/course/index.html","a68dc84e29912f722a877596dde3cb55"],["/categories/django/index.html","943a16dc2a887565de5862b179664053"],["/categories/fun/index.html","36a79633a9e8d5aefd175da7b5cf5575"],["/categories/gcc/gdb/index.html","76ce525faca492b3f7c786383b60ba27"],["/categories/gcc/index.html","c921ca01c04b53b3e06063fc325a27b3"],["/categories/index.html","9d41aac5c794b2051e217bf1bb9d0554"],["/categories/java/index.html","2a41c7d7c058a88942cb76109de8f9dd"],["/categories/python/index.html","b575e7b14d32732d1575414b19a11f96"],["/categories/study/index.html","bb2bace3064d9d3bbaf2160f58a3b230"],["/categories/vue/index.html","243b0fdd1c605086ae3b5f6148f6f23a"],["/categories/误区/index.html","fc795d64b7ae415747cd7e20730cad32"],["/commonweal/index.html","a12b1dfa8c4f95c9b3444ea2eeefac4a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","133e97addeb27ccfe4ff4fd19bedc987"],["/home/index.html","010a6d332507ddd5ea84954f8774ffbe"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","64886002f798f4708c9798b9e58adac8"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","e5042c11777786df27b335afd169034b"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","fb412144e04fc82d095ba11507d1d4c8"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","c6feda62a994feb821fc28b709164a54"],["/page/11/index.html","17153d9cd456172112f5155b5cfbf402"],["/page/12/index.html","07420dbc699104dac153e657daa01a3c"],["/page/13/index.html","8c13b2f5cd7a8483a44b3a494f9b0ea4"],["/page/14/index.html","4ec084628b19a9c54b2b9fb984a5860b"],["/page/15/index.html","4b35abb20ae3cba4e01f224efb14b23f"],["/page/16/index.html","4c5e3130308a25063c38edaae4e57c27"],["/page/17/index.html","c9adc29f05b4540a30643843edfd1868"],["/page/18/index.html","448508dfe101f0375d7f539ff6d4249a"],["/page/19/index.html","392d55210fc39ed4c226cf1877175e49"],["/page/2/index.html","a1f443d4d1b8b724e6de52022381fdde"],["/page/20/index.html","ac0d536ef094e654b74e0c99f8cd4da7"],["/page/21/index.html","e958411544df68a002a273e8018ec9b4"],["/page/3/index.html","c1ebd1e8eef14b854f3d8b9eae9718a5"],["/page/4/index.html","4f093658f26de5355d58f9de43d19b05"],["/page/5/index.html","075b3bfcc13136afd26e99fce3bd7d5f"],["/page/6/index.html","b98d3e58c9f242a89b388a9ce0279c18"],["/page/7/index.html","00c4d3751ec41761769074174a41ce87"],["/page/8/index.html","b09768b0d3dc60145f9328884cf9a462"],["/page/9/index.html","31db94b2a46f1d09a9eef7b727b924c5"],["/resume/index.html","cf8bb04251aa7ee4cc1cc83dd83e470e"],["/schedule/index.html","8fd9e9e4f8ec339bde45d03b14b8a221"],["/sitemap/index.html","917b366e2a006a300ab64dd14625dffd"],["/sw-register.js","45ff871a9f395ccec9e3c3455f49a314"],["/tags/AI/index.html","acfb128bf89663a295fde957f42732d2"],["/tags/BT/index.html","3471690c42b4cd032a9bc13b37316cff"],["/tags/BaiduNetdisk/index.html","a1bdbf93847012f2db10090d624e2ef6"],["/tags/Bootstrap5/index.html","686190e421f054b8b512c70389299476"],["/tags/CSS3/index.html","d0fa0a278c3d2d9194c67cbc92ba4ff8"],["/tags/Centos/index.html","8feda78045985311bb09f189be8d189c"],["/tags/Electron/index.html","45f65cd3f3e0eafdb796e84fa632b564"],["/tags/ElementUI/index.html","05afb087001d9b3157069d973f343aec"],["/tags/Flutter/index.html","ad5178b010620e88dd4c1ee36cf2a4c6"],["/tags/GAN/index.html","d5d959a9300be684c5d75e3b7ca940ee"],["/tags/GUI/index.html","a9e33862da7d7bbc3cc9d7ac003cc068"],["/tags/Git/index.html","047df2b36fde4a841c4fa3daa6944ea7"],["/tags/JavaScript/index.html","256d13ebe8b879ebd58ea48c97cf3da2"],["/tags/Keras/index.html","43344f06297e7fd5835598dd2bacd7be"],["/tags/Linux/index.html","2b5661e8d75b6a4c5299258c552679f9"],["/tags/ML/index.html","5297eebbdcb65d1b39fe276b386de493"],["/tags/NLP学习/index.html","aa4063501e487b228bf30ee9f1e503e1"],["/tags/Nginx/index.html","bae115db2d3deee38c165d248dbc7dde"],["/tags/Obsidian/index.html","2a61bbc727d77adc94b3f0525d27085e"],["/tags/Qt/index.html","b30ee861ebb4733f0697ae1a881d3081"],["/tags/RSS/index.html","bf88e550b32e57ae662d2b5497e1de37"],["/tags/SSL/index.html","f74765d6feea1d4d60fd3deffd2c1a22"],["/tags/Scrapy/index.html","08a52c98a0756a4a1f6f0fd7c520334e"],["/tags/Speech/index.html","52519324370bc6e4bccdc82dd3524113"],["/tags/TotalCommander/index.html","d92d9addde72afdaec64f5e40bf7893c"],["/tags/Web/index.html","1de1199c92f2613aa3cda246cee57e80"],["/tags/algorithm/index.html","3d0e5fa21725cf05267bf2c40b633764"],["/tags/bison/index.html","c94ab1342b887a88ca5211b7cba625d9"],["/tags/bomb-lab/index.html","c3db701a57b6e2eb4427fcf388a31cb7"],["/tags/c/index.html","6e0e322398eccbc1bd6327943f7ecfc7"],["/tags/cheerio/index.html","424787fd5292549c03e86de57db7cef9"],["/tags/codewars/index.html","997897d83170cb99c467ddd4d55fa9ea"],["/tags/compile/index.html","c84ed93b11c9e53cab9070ed6ffd2a6a"],["/tags/compiler/index.html","d73b9e633014d9e60bcd179f736a5a48"],["/tags/cors/index.html","21b9a4f933647e94aa70751cc5e684fd"],["/tags/course/index.html","03fdf3724ac3f34ffef64a39c4e6a1c9"],["/tags/cpp/index.html","0bb99c86e14c1dc5cd62e60e4b44a8b1"],["/tags/crypto/index.html","98a9b62d23ea8998cd375d3c4b3539f9"],["/tags/csapp/index.html","d625cc7c09df2465343cbb187c346ba7"],["/tags/csp/index.html","66f2c9238cca61166d8a23470e3d6fec"],["/tags/css/index.html","a9d3d445e08eb27338bc6f9fbe8c5742"],["/tags/dart/index.html","687b2394db130dde9835f90454a547a8"],["/tags/data-structure/index.html","cee51a3c60e7155a84e655301763fc44"],["/tags/database/index.html","078305c3fa4d4fa389fa8e6656405af4"],["/tags/deep-learning/index.html","acc9daaf494276c6e00b20006231c664"],["/tags/django/index.html","152553f1af416739f166e5f98681ac71"],["/tags/docker/index.html","99e6c8d1ed0398dfd5edc61543784320"],["/tags/dwm/index.html","e7d95d556646292fee1f7ebceba99e70"],["/tags/exercise/index.html","f91885fac13e2d373e621ff15cb7aff1"],["/tags/filebrowser/index.html","f12906a0acbda0382a0e7a79618989e4"],["/tags/flask/index.html","784f65697c4a8281ef828deb45243918"],["/tags/flex/index.html","284cdec32ffb69269813eeba2c3c1cb2"],["/tags/front/index.html","86c757f4e044bfb577f44ee61d57f40c"],["/tags/gcc/index.html","d3edde3ad3518db994b09be915b2eea4"],["/tags/gdb/index.html","5615aa37633dc64a9212c659d291aa7c"],["/tags/github-profile/index.html","039e9d30f1a28dee5c8bc9719649b071"],["/tags/github/index.html","7d12c7d6e69b7be5311390ad6e896318"],["/tags/graphviz/index.html","a01efa300686382c363ccd5fefb29cf0"],["/tags/grid/index.html","4a2a8d62b320eb9aebfcfeb01fc1620d"],["/tags/html/index.html","c14065c74f06e5db0dbe487a0e6087dc"],["/tags/i3wm/index.html","b6ac18db298ebcf458ee44d73bed7a49"],["/tags/index.html","1da9216f2782e07e02f2c86a0ff79b24"],["/tags/issue/index.html","840e1984d5741a9872ffd7928397fcae"],["/tags/jQuery/index.html","53244c10626818b6452b9f2e3b156683"],["/tags/java/index.html","ce7878172d48ee6643e417e8262f1f3e"],["/tags/js/index.html","84f4e4bf6881f99cd6aaab236de096ce"],["/tags/latex/index.html","5fad6fdde43477ea47bc7b26308af9e8"],["/tags/leetcode/index.html","5a1294b57868b77b8c153f4c6edd58a2"],["/tags/lex/index.html","7b30366af54eef353d7b28e25b53d75a"],["/tags/material/index.html","32669bbd71ea2cc86d1c176169b1ddbd"],["/tags/music-player/index.html","62f3f1def1dc5f2851628a29c75de729"],["/tags/nodejs/index.html","c459e5f8d7d0ba0fe4104f2371276396"],["/tags/noj/index.html","da67384c9d828b9687ce7eedcba22a44"],["/tags/opencv/index.html","445b57729c0150cd5c01fa187e3e257c"],["/tags/overleaf/index.html","4f8a5b743cac0cc31f2d6af7ebf9c283"],["/tags/pandas/index.html","5bcad39144e795dd221ff436471e8d57"],["/tags/premiere-pro/index.html","276aac3c6f04bd1da36f8ae5567f5d78"],["/tags/proxy/index.html","93455cc917da9516c8fd62eb05ade261"],["/tags/pure-css/index.html","0a9d06bb6e334e7250799f646a3f7e12"],["/tags/pygame/index.html","f20b2eb7e5e8eec6c31d223ced091c82"],["/tags/python/index.html","3687245d29322000e31b9b07a00e5374"],["/tags/pytorch/index.html","1b4cb01cc86a6edcdd1314847809dfff"],["/tags/reading/index.html","128b2ab0857557332a9cf577ebc8f5ac"],["/tags/request/index.html","170be2c55bf105d72eb424565fbb6a94"],["/tags/requests/index.html","a478b860825d9ff8a43f606feaaaf123"],["/tags/security/index.html","6c9031b8afca044e037af4b16ce5c74a"],["/tags/shell/index.html","81dfc12d2880a6f284edf5255226e00d"],["/tags/sign-in/index.html","d6547f424f7124d50e0c962fc837e645"],["/tags/socket/index.html","3b451c32fd0c3dccedc464e4de2a01bc"],["/tags/spider/index.html","d9d4262bc9455a3a3c3453719aa6c15f"],["/tags/splash/index.html","0208f450976d3c993b05d3710092000e"],["/tags/stl/index.html","886c16fb3be6328b8e72ee12557455c3"],["/tags/superagent/index.html","79bf8ff66d7af69a1d4ebd9102cceea4"],["/tags/tensorlow/index.html","5b4c83f6d915127357e962516f4756bd"],["/tags/tex/index.html","4ff65309f6cceca592904f32b770b50d"],["/tags/threading/index.html","9e080512df180cdfb1082bb63f663f29"],["/tags/tkinter/index.html","1902563b5d42e56d861bb1b2160b5da3"],["/tags/torrent/index.html","7a9c3642daadfb0a54d79977fac8af10"],["/tags/tutorial/index.html","008798626d9445115dec9d4d773105bb"],["/tags/typora/index.html","8a750bf433a862824332eec1c001f80e"],["/tags/uniapp/index.html","f39574e33c06e68c5dd8bd4ee259882f"],["/tags/vite/index.html","b263b37b264461f7d502125c47b6d6ec"],["/tags/vue-element-template/index.html","9114c47823cf5b504d2d97289c27b121"],["/tags/vue/index.html","a13ba06ac6fae7d9769d201053d2ce2d"],["/tags/vue2/index.html","1209f39f5232b2a4719fa147b7dce9c3"],["/tags/vue3-x/index.html","15a550dfe0835f5d3c3e2dfd819797e4"],["/tags/wechat/index.html","e5e7e8b196806cfbe9d9ed126398ad23"],["/tags/wm/index.html","a8563fc4e818ca5e3fe97e5a775f12cf"],["/tags/wordpress/index.html","2a764416b8d40e8cc83170593657cca3"],["/tags/workflow/index.html","09b0b7b53d3f183df6abcbaaf0fb15b8"],["/tags/xpath/index.html","1d1cf4e06668de34946c8d761bba47ad"],["/tags/yacc/index.html","277a5e89865438e120bf0c62d8e1ee64"],["/tags/zsh/index.html","3e62b4c9fae12c8277b5a8cc56f5f203"],["/tags/七牛云/index.html","6d17f124bcce314ca4c4112373d13273"],["/tags/函数/index.html","ef7492bbd1d4f27776502e6ace943416"],["/tags/剪辑/index.html","391ffc037c7f2e419be4589ad5251f22"],["/tags/存储/index.html","13ea032ca604873d9aeaa4adfaadeb75"],["/tags/实战/index.html","08bca4fcee790f570b875ce047e5e8f6"],["/tags/工具使用/index.html","94233de3eae95fffcbe382ff060ffcfc"],["/tags/建站/index.html","ac625375cadd5e7f9d8cc0921fe3ca64"],["/tags/微信小程序/index.html","f5de7cfdaee78ee726d42f225d62e84e"],["/tags/指针/index.html","a7d341033dbdf60068af10baed9d7726"],["/tags/效率提升/index.html","0a2e37b56a16f1740318fbc7c7889cdc"],["/tags/汇编/index.html","0d87c640884f75d98e07f355921e0f56"],["/tags/浏览器/index.html","7308ac4585a923d2a402e16ffbf48289"],["/tags/爬虫/index.html","c6eb68160ef3ac084c0c10e0fce38898"],["/tags/算法/index.html","2670c4e3127c4da7799396c4dde5bcbc"],["/tags/编译原理/index.html","7d13176332ae23eae51715c82209b9fe"],["/tags/获取地理位置/index.html","b0117a342ff800a63e1cde08a57c79a0"]];
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
