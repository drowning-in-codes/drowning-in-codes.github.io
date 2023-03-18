/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","e9578075444f623f6ccd1c9228fdc043"],["/2021/04/20/稀疏矩阵/index.html","4afd1a18533edeec552e63e05bd04b9c"],["/2021/04/23/广义表简介/index.html","bda84e468674e835cdd8f2ccf6af82e1"],["/2021/04/29/关于指针和函数/index.html","a56ac35e15f2c5a7ef8f8f11d4bb37da"],["/2021/05/10/哈夫曼编-译码/index.html","f0c81699fc6a673fe134011ed2648c47"],["/2021/05/17/数据结构noj_2/index.html","274fa90ab0c964b92329a2fb6fb36f47"],["/2021/05/30/数据结构试验/index.html","04a37681c787b9c291fb2079841edde9"],["/2021/06/12/数据结构noj-3/index.html","c2f1263e5a462489baee7384023cfa4e"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","139e91ec8974614d829f0fdf0095f39d"],["/2021/07/08/课程资源分享/index.html","1b7127d4222aa6b8df1159a0f74985e2"],["/2021/07/20/Scrapy-下载图片-文件/index.html","7e38b2ffb947812e73a70daa8416e7f0"],["/2021/07/21/Scrapy-动态网页爬取/index.html","2461354c3d6676ceb69ead5f6e60d1ed"],["/2021/07/21/疫情打卡/index.html","e373daad731eb181e1ac894dc77f416c"],["/2021/07/29/Scrapy代理设置/index.html","16116771490e6eff716c9e7d92cf33bb"],["/2021/07/29/数据库认识/index.html","01a7f9ae99783f2e8d4464623a7fd3e3"],["/2021/07/31/Python多线程学习/index.html","d1d1be1daa7a6aab00efe6370c9c02c0"],["/2021/07/31/tkinter-requests练习/index.html","6157c09ecd22d8554b2361484433a204"],["/2021/08/10/Git学习/index.html","e1efd116ea66cf48f44edd3741e5c7f9"],["/2021/08/15/pygame实践-1/index.html","8774d8bf7c4876fbd47d5a2f702d1bce"],["/2021/09/06/微信小程序开发/index.html","d5c1dd70486418aaae849a48d8f6aea8"],["/2021/09/21/命令集-1/index.html","19f18fc394510fac559efb8d8ce48b9c"],["/2021/09/21/命令集-2/index.html","ebbf33093bcaa58980918cbfab5da38f"],["/2021/09/21/命令集-3/index.html","01577569df5488112d0e47bdc9fbc10d"],["/2021/09/21/命令集-4/index.html","ccec3f18b71b6b63d337424016b9784d"],["/2021/10/03/socket学习/index.html","42ee3ee554056afb09a532ccdc0b14ff"],["/2021/10/10/dwm入门/index.html","8ce482906adc60ead194774c09e96588"],["/2021/10/10/安装ohmyzsh并配置/index.html","ec707a5822b54dfc4269f5cc8c28977f"],["/2021/10/20/css学习/index.html","f9e0b55831112da22482cb2b958b0a21"],["/2021/10/20/wm入坑/index.html","973878bf21a41df589c4b716f1b6decd"],["/2021/11/03/微信小程序学习/index.html","81d7d1a0ef569373deaca5a3e15a4bd7"],["/2021/11/04/css揭秘/index.html","8a2eb708658cffeaab7aff7c333b64e4"],["/2021/11/05/css-练习/index.html","9545f4a8be77cf4eb56149d6a129ed0a"],["/2021/11/21/命令集-5/index.html","ae12394f35bdb2d5eead3a0e93000aef"],["/2021/11/21/命令集-6/index.html","1a1454251a7dec3d548704f98e7195e9"],["/2021/11/21/命令集-7/index.html","e7df8d287088e319c3116e81041b19b4"],["/2021/12/01/搭建wordpress/index.html","f3c508b78f329d4bad6bdb98a36b7db0"],["/2021/12/08/python操作百度网盘/index.html","d14b6c67e441763379abc80b9a2f6451"],["/2021/12/14/js爬虫/index.html","60fa970c1821db802d6fa2b6dd33ec5b"],["/2021/12/25/为网站申请ssl证书/index.html","8d1cec2872d9ff6e59a30b91aee5effe"],["/2021/12/29/使用七牛云为网站提供服务/index.html","225303bce10270912858b1c4571eb06b"],["/2021/12/30/jQurey继续学习/index.html","555c7ab55fa23cd070058b0edccde3c7"],["/2021/12/30/jquery学习/index.html","d6eb65ec134b1c62853e44f46f3c46c1"],["/2021/12/31/vue学习/index.html","96a75c27d2cb6a8b2f5ff3994ededb0e"],["/2022/01/02/疫情自动打卡/index.html","43167b860a5ba0901298d90278780fca"],["/2022/01/03/javaweb初体验/index.html","43150d1141494d5adbab9b0b6fa6e2fc"],["/2022/01/04/codewars练习/index.html","564b9fcd3cf75c746c5a623345bb9c74"],["/2022/01/05/Spring学习/index.html","f52d767ad6cf80a08adefb9ffeea8e0c"],["/2022/01/05/vue实战/index.html","3f78305858a51e2f25b042a5de8e8594"],["/2022/01/08/gdb-gcc学习/index.html","733a1d1e3d8aeb2bcb03809268af0c4e"],["/2022/01/11/python-opencv学习/index.html","a75e9f554e0bb06bab234e01be5414a8"],["/2022/01/12/汇编实战/index.html","c1b159bca33a938da8e6e6aef0b6e025"],["/2022/01/17/pandas学习/index.html","b3a3a49cd5cc649ca123229cbf79da40"],["/2022/01/19/可视化图的工具/index.html","50efa5e53548ce0ce2877bdeb44ac94a"],["/2022/01/19/机器学习入门/index.html","a81f02455048ca124812428a39b6ba1c"],["/2022/01/20/cousera-ML学习/index.html","1865c2e55dc9315b844f457b0ec77e66"],["/2022/01/30/typora解绑后出现问题/index.html","0c001905eefeced320bdb60c06b7ec4c"],["/2022/02/03/NLP学习/index.html","8bc844d006e1525f588387412554701b"],["/2022/02/04/Web漏洞学习/index.html","e63c21f406bcab7779173ad5fdd43edc"],["/2022/02/04/pyqt学习/index.html","6e1696e864512f1ba9ddb2f9a3eacff2"],["/2022/02/04/python爬虫/index.html","5ba5e148d5fbe8000d9bcecc550bd788"],["/2022/02/18/Electron学习/index.html","454c33565e13092dcc557a7d2de02b16"],["/2022/02/22/疫情填报字段解析/index.html","82976a15c67f8334e1016270b68df4ed"],["/2022/02/24/Bomb-lab实验/index.html","082d7de2528e23b97a22a7e8d666a3f2"],["/2022/03/05/nginx学习/index.html","225826a5f317354f8bf6e109ae878c40"],["/2022/03/09/汇编原理课程学习/index.html","b3d7f2c9ff1e370e5648f3d441298cb3"],["/2022/03/11/Keras学习/index.html","4a0cb6c6ec170c5973239f87471dbba8"],["/2022/04/01/graphviz学习/index.html","c2443d20d6a8db64e0e0b1c046f340f1"],["/2022/04/07/django学习/index.html","ed366c80940b7162e966e44e36049c62"],["/2022/04/11/密码破解学习/index.html","421caac5e5af19f520bb2f6b5e2c6dfe"],["/2022/04/12/flex-bison学习/index.html","985d1773dbfdad9ce1537bbec976514e"],["/2022/04/15/pytorch学习/index.html","9728a4aef686c89b9aa46fbb3f4633ac"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","d9f951af8bcc4aab86256f21918a5483"],["/2022/04/23/写一个音乐播放器/index.html","1a265e557defe481011d762f4a0964a9"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","4641ae4c7fc036d78b9453e5bb86b90c"],["/2022/04/30/GAN学习/index.html","7fedc50eca7b9d8b5463ab99fbd7856a"],["/2022/05/02/html精学/index.html","ad34e47040fb0c1282bf117f4da082ec"],["/2022/05/06/write-a-compiler-by-yourself/index.html","14a6c5c666a0eaf72f2614d12c3d157f"],["/2022/05/30/acwj-01/index.html","b07c5ab0ed6147bf2834cc88353b671e"],["/2022/06/14/animeGAN/index.html","57e0f2556732c0b7695fe5c29d31c55f"],["/2022/07/09/c-与算法学习/index.html","01f3289f7b55c76d7e56d9d9d260df4f"],["/2022/09/19/flask学习/index.html","b38e91808507b1550ef6bb843d9fd7c7"],["/2022/09/22/cs224w学习/index.html","69e90d4161dbe1b831a19bab2317899a"],["/2022/09/28/记录一次wp重装/index.html","159516ea0715f58234ad71ab983b25b3"],["/2022/10/01/Obsidian学习/index.html","f5129c8a955aec68ecd7cf0c149c1007"],["/2022/10/08/vue-element-template实战/index.html","2c600ddf60b81887acaefab440003480"],["/2022/10/25/vue网上商城项目/index.html","4945275ec7a2f891e9c31ed21676d57d"],["/2022/11/11/leetcode刷题记录/index.html","15c39469d660367fa446e0360bd6abdf"],["/2022/11/11/使用overleaf优雅地写文章/index.html","542ada433204dd2d2a17c022efecfba0"],["/2022/11/22/磁力链接与RSS订阅/index.html","b316206e318081aff97ee8ac3a5aa43f"],["/2022/12/11/uniapp申请获取地理位置/index.html","cc4e2b665f80f6ea87b8d0096b190426"],["/2022/12/26/pr剪辑学习/index.html","93e8e2ec1ffd9c7a70226b54aae4a416"],["/2022/12/27/css中的flex和grid布局/index.html","29a633dd81c9c4ba5587cbbda8334351"],["/2022/12/28/Flutter学习/index.html","a2d379eff0db7ead8467292617fc79a0"],["/2023/01/01/美化github首页/index.html","123f9b9073f7daae528bd7253e5082ed"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","4004d9afa2ed8255040f0dbf65e6018b"],["/2023/01/04/构建微信快捷发布文章工具/index.html","e6b3d5fb12006db9b7e736ed70c5f78c"],["/2023/01/14/dart学习/index.html","83ac52e3c45b7be36c4b9f343cce4366"],["/2023/01/23/闲置服务器BT下载影视/index.html","9d521df3ee2d142f741759cfe763c5ae"],["/2023/02/07/TotalCommander使用和学习/index.html","9ff6ab1d7be4ac4382ee39a67a1f5ed4"],["/2023/02/13/docker学习/index.html","8a3079b52e269109705a297afb6ff61e"],["/2023/02/17/DLHLP学习/index.html","051be961a80e018b0194e4cfbd438030"],["/2023/02/18/学习purecss构建自己的css框架/index.html","8a4a5b630de2cd463533a8302e5f4f5e"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","92ecb268a8409a1df026f24d29b875d5"],["/2023/03/05/STL学习/index.html","b67ab8fcdf7649d7e41dc05a4684f8fa"],["/about/index.html","20dc1c6f06d452451b32c5f7f82b2eee"],["/archives/2021/04/index.html","0287b595463af9ff740bb7657dbf4da9"],["/archives/2021/05/index.html","b670f27b39f86c7cb3ba8b8dffd4ba43"],["/archives/2021/06/index.html","653667a0d97b6f58ad8ac16b158f9342"],["/archives/2021/07/index.html","0f02c6641ae41bee92c67a3d90613e4a"],["/archives/2021/08/index.html","8108dea75d75a1dfc40cf015c32d1738"],["/archives/2021/09/index.html","63d914d3c5a917783c97254daa045b32"],["/archives/2021/10/index.html","2b94b37e376035905c9b09276597f18b"],["/archives/2021/11/index.html","872c18d350e307db483a68ff0e80ed59"],["/archives/2021/12/index.html","78311bd9c455b7a8b6d6294d71af4d7d"],["/archives/2021/index.html","7801b84175d8cd6591dc36fa9285b5a3"],["/archives/2022/01/index.html","fa04fc43fc3e093ade3490919113162a"],["/archives/2022/02/index.html","9a364f0c49e0c85bcc142028231b1d40"],["/archives/2022/03/index.html","000d1755fb909a3c642ca2f4726d1333"],["/archives/2022/04/index.html","fcc3d32bf4adc0cb6e79d778c54f46b7"],["/archives/2022/05/index.html","08394ab16e1fdbeaa5f14e96f55b80ac"],["/archives/2022/06/index.html","7544f9b079a899dc8e82f5f13d757eac"],["/archives/2022/07/index.html","dee5d4a57f3e0d52834a4cbf5936f88f"],["/archives/2022/09/index.html","b18706a048b46928b50dcf5d5f4b9d7b"],["/archives/2022/10/index.html","fd80efc01ca0146c6b97fd95d3abfbf6"],["/archives/2022/11/index.html","d2536b55686e4b16a6a90c87892d2f94"],["/archives/2022/12/index.html","4bfb2fd71855773839ef20785bf302c6"],["/archives/2022/index.html","afaa39e38d5d1bb517275c007361898b"],["/archives/2023/01/index.html","422759650bf66ca6be9d0c1a82d47a1f"],["/archives/2023/02/index.html","7b38b098575f1a85e50912e2af5968c6"],["/archives/2023/03/index.html","cba98f425165a9bfcf6ae45f9f2feac0"],["/archives/2023/index.html","54e55f1615bf83667e39486729e03930"],["/archives/index.html","a2f1c64687352276d2347c54c5eddf0e"],["/archives/page/2/index.html","a1f84c5d15d0b4b823804434fa87b707"],["/archives/page/3/index.html","75422358cf5ebfa8fb58c23a0f39a231"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","0a724fa276a849898ada604e59e13531"],["/categories/ML/index.html","edc9e79494ba200803ffae7c502d7a47"],["/categories/Nginx/index.html","1e8415d88be0c85f266b8dc7d0fd23f6"],["/categories/Spring/index.html","1fe2c3831ad8b3f9589ba0f99e0fa387"],["/categories/course/index.html","70b1e2a8c62723c6ca9225d8b04c88a1"],["/categories/django/index.html","3e2ba65cb25fa943e8334a6e78ecf0d5"],["/categories/fun/index.html","dcf6e2a7f01766d77b10e88f0945f754"],["/categories/gcc/gdb/index.html","79baf99a15793526f9a6bb8b1cc2fa2f"],["/categories/gcc/index.html","d2ba46e5f4a2634bed49b22ff59114b0"],["/categories/index.html","f226ed876c105a27a53026725a01cddc"],["/categories/java/index.html","f115f6d3972645baecf8b392bb64347e"],["/categories/python/index.html","0aaf423ece31a62f2b82eb6c59e75232"],["/categories/study/index.html","37385670ef716c3689e7299822775cd8"],["/categories/vue/index.html","6c8461ef93323e05e83001da83e2692b"],["/categories/误区/index.html","a6c718a7c8d9fb4e37b03d65c43f48e5"],["/commonweal/index.html","a959b3b5c38dbb6095a37e38ad2cc88b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","009d95505763128d790ca91570961500"],["/home/index.html","489d90f65c1194b8840f683f00b924c8"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","7b7084278814a60f43428b2111a5d4e3"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","afd60097b46bbcab115d9c0587e0a421"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","e047de91b5f7296e9049531442b9776b"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","64fe99220bd36f3768cd92fda161916b"],["/page/11/index.html","f3faec2a7f16aa93008f29d708582091"],["/page/12/index.html","c1185b07d80636f939d31cb75b0ddc63"],["/page/13/index.html","cb9e85470fa4db7ba341bf63acf3dcdc"],["/page/14/index.html","4469f060da1ecfc4d7bc57f660974174"],["/page/15/index.html","ad047a9d03498e12d17b9ce698c3f3e5"],["/page/16/index.html","be57ad1e9c2811899654f721c8ebd72b"],["/page/17/index.html","14121d470dd0331d272cfa25585159e7"],["/page/18/index.html","ffcc7b5ffcb666b73d1ff95a835a44db"],["/page/19/index.html","725668c66588778fba0c120d3b0717e3"],["/page/2/index.html","1ef38fd904d9de3ff45485cc138b2ab8"],["/page/20/index.html","cfd4f1fe866a34054fae56372d61aeab"],["/page/21/index.html","1bdb8a59e7fd4982d212676f29e6478e"],["/page/3/index.html","2bc66c68ddaff04c3ede5f1035fee8a0"],["/page/4/index.html","28a24c0cfaac68567d1c579498692e6e"],["/page/5/index.html","98b74d7139b4bcff506f7943cd2542ba"],["/page/6/index.html","5e687023e6c9eeb27d5da8b93497e8f8"],["/page/7/index.html","cdd1cf8b65c060c377be5b70926a8ca2"],["/page/8/index.html","f2cd8ddf2ff18b5a4d2ee600ae060c76"],["/page/9/index.html","378e59b8b30c405981a5142e975678a8"],["/resume/index.html","9c0621fc575cd58f3d0e62e0dbcacfc2"],["/schedule/index.html","e0fde4d51597fde40aad047531f49ae2"],["/sitemap/index.html","0bb65ba0ec58b10c2bb63c79ca97ab71"],["/sw-register.js","219fa6dfbb40ae05484a3ab1e525cc73"],["/tags/AI/index.html","f18360345e329a4569a2eb86acba5779"],["/tags/BT/index.html","aaa245d16758b6917a1496e220837277"],["/tags/BaiduNetdisk/index.html","7d0720e4b1ffeaaade914c2d355d7566"],["/tags/Bootstrap5/index.html","72366e30e8182b5a273598012753bf02"],["/tags/CSS3/index.html","7ef83d8d8a42fbf23feceff7b6d3cc23"],["/tags/Centos/index.html","83f64996a20385f635cd43c20ab99ba3"],["/tags/Electron/index.html","b7e7d19aba0d3a0f5a083fd511317481"],["/tags/ElementUI/index.html","48a8280d925a3e32a0aacb823a060359"],["/tags/Flutter/index.html","f6ff899a9b5384a43356725efaf0a358"],["/tags/GAN/index.html","feecb577c8552248972646da5cc97697"],["/tags/GUI/index.html","673679cb385f6c635f3ea8b581a0867a"],["/tags/Git/index.html","a5f8c47a496cd3653515da42b0d954bf"],["/tags/JavaScript/index.html","69748857884e510740ae133268b10406"],["/tags/Keras/index.html","e936558fd0161b03d557851eb5982a26"],["/tags/Linux/index.html","0576dec25384da4f6ef745bbe96b8d46"],["/tags/ML/index.html","57b1b3ccf59843554348941b9a9bb96d"],["/tags/NLP学习/index.html","ad448a8fa11cecc3963db5010d8eecc8"],["/tags/Nginx/index.html","5c58687125db40bee8a189f4b5b18189"],["/tags/Obsidian/index.html","b6411513bd94074be59f995d70cf47eb"],["/tags/Qt/index.html","9c5d6ff79592aec4a093c2cab3757078"],["/tags/RSS/index.html","93a49d2f3ec223ece798dada6a22526f"],["/tags/SSL/index.html","99fd4ec86f9ae01f3bd6e5465d6fd440"],["/tags/Scrapy/index.html","9f0ba571f65e9add3e8836e69c7cd081"],["/tags/Speech/index.html","2c693da3e4b1eddae7acdca987d97b41"],["/tags/TotalCommander/index.html","f01d1821e520b96832a10f162eb88a61"],["/tags/Web/index.html","75829a61b021ae05e9f40a31e8bf784e"],["/tags/algorithm/index.html","464c4f66c08ebd0031c8157dde472f28"],["/tags/bison/index.html","eae703d067399528c799124b4d50fa56"],["/tags/bomb-lab/index.html","05638926ce42b18c5ccaebd2d6bf0ac0"],["/tags/c/index.html","34474317180c144e04dd5d45f626b7db"],["/tags/cheerio/index.html","d99b65fbb343b0e2d1bde85a2d8c50bb"],["/tags/codewars/index.html","5231faa9d41ee54df19fd257d7237559"],["/tags/compile/index.html","018f23be9e5274d083a74899811f45f2"],["/tags/compiler/index.html","34cd1485e70e005991437040e1d5ce3a"],["/tags/cors/index.html","524a7a6334be5d9232e05d8dc9d55d72"],["/tags/course/index.html","5551ee986fa815f39494225a2d1ecbb8"],["/tags/cpp/index.html","9dcbb268d9d30b096d0e3a1e6d67d605"],["/tags/crypto/index.html","815df33e040666b3f1a0770a01c15279"],["/tags/csapp/index.html","2e709c4c26f6151ef04157ad2b99a75f"],["/tags/csp/index.html","5e92055fc6c61a518aefa05cf32a553e"],["/tags/css/index.html","2b2fb315e4d1457102d2047a5f839a49"],["/tags/dart/index.html","6c684adda9e214da0f08f18681e8d30c"],["/tags/data-structure/index.html","783ce27a7e94999791821d01baa88fd0"],["/tags/database/index.html","e9c96595a6b777fa0c2e23b514ed0444"],["/tags/deep-learning/index.html","98d117d85045465ff150b19c4b6aa312"],["/tags/django/index.html","1659e00d1fe56de6f91c3243d65b2e50"],["/tags/docker/index.html","8112a1a366fc3c431c07deab7bfe5270"],["/tags/dwm/index.html","d5b64f46b3fdcf5e15e4daa23f521970"],["/tags/exercise/index.html","c994b5040623462bb360b7a3a79bd8a6"],["/tags/filebrowser/index.html","8a9df302b4d3e73dd62a9b229c7e61ef"],["/tags/flask/index.html","a749efa4db7e5e9240991e349bed2018"],["/tags/flex/index.html","b2fdec348ae3b2c1c7ed90cddfac73aa"],["/tags/front/index.html","0e4c8416d2f3e4d5e8c8da783da85cd8"],["/tags/gcc/index.html","2b109b1d057e3ab5ec7b487bc074ad49"],["/tags/gdb/index.html","ed3c711c5f5dbd3e41499c54ef1315bf"],["/tags/github-profile/index.html","336a163b065c4613e2cff1b3812453d3"],["/tags/github/index.html","e84d57f20d238044deb71f57816f56f9"],["/tags/graphviz/index.html","0c36e5e95498ac2b3f894fe1f6b573c2"],["/tags/grid/index.html","942729c6a3b7ac4869725301660d1302"],["/tags/html/index.html","c7e3adeb3b5ddeb686b3b2df60e04e15"],["/tags/i3wm/index.html","3784736f9421c4595c27416233c0317c"],["/tags/index.html","03e546815510e732c857aedf4b08ba28"],["/tags/issue/index.html","e3acf10c28c5190c4aec004a78c449fe"],["/tags/jQuery/index.html","2cfbab91b73a86501b93277fdabc7d7a"],["/tags/java/index.html","c01ab9780e891d9a48dcacc7bc3cdd5a"],["/tags/js/index.html","5f88bfb74a5ccb672f6d6b731cf4d4a3"],["/tags/latex/index.html","b1f8772b35d6ebf02fd96c804ce3bc58"],["/tags/leetcode/index.html","4c64b0088df45ebd029b941d5f3f2c3e"],["/tags/lex/index.html","253c7b89ebb4aae59329d9d33e1beb9b"],["/tags/material/index.html","bf469fd156b3e001fb8744d10bdb06e0"],["/tags/music-player/index.html","a3937dbeae946a421a31f3899f340453"],["/tags/nodejs/index.html","7705d4a000697dedc441cab037952a4e"],["/tags/noj/index.html","fabecf3b1dff03be6d9e23fb7fbb7ff2"],["/tags/opencv/index.html","2a4e58ca64b7a91685e801afb2b886d2"],["/tags/overleaf/index.html","50257092f9f67561863c516e7c42c2d0"],["/tags/pandas/index.html","feca277934d8972a907adf7981e7f260"],["/tags/premiere-pro/index.html","6efa51d02ec1c3969df8041547d03dd8"],["/tags/proxy/index.html","ae1be06cdf83269bd784338b814477ba"],["/tags/pure-css/index.html","5b56f9adaf18065e23f25351e5ebf038"],["/tags/pygame/index.html","e6c74a9860b4038040cfc84ab2d59cb5"],["/tags/python/index.html","06f3b80e195ce25d9762f256aa8ad9d6"],["/tags/pytorch/index.html","956407b85376b9f6162544233b1a816b"],["/tags/reading/index.html","6a2850e176e95bf3cb6d29268de6c74b"],["/tags/request/index.html","589ee03c2fc5e9cba344c5a184e9e935"],["/tags/requests/index.html","e49f270047ed23769e5dcfb31acf6ad7"],["/tags/security/index.html","015b304f6f7d81e5acdacd10ac30e880"],["/tags/shell/index.html","2f4cb08fc899038d1dc9da799bb487c7"],["/tags/sign-in/index.html","1789c0ade63b51ef787b3e851f12b363"],["/tags/socket/index.html","196aea26b338cbbe2c31d4a438fd5910"],["/tags/spider/index.html","1f3e64c91881fd0bc1f34d65794cb5a4"],["/tags/splash/index.html","059653faaa16ac6c592bc48dbe942f5c"],["/tags/stl/index.html","b53d42303daa91c6f2e44e1dff7c3870"],["/tags/superagent/index.html","3e19976c7e3c8e704f279c3852a24881"],["/tags/tensorlow/index.html","a299420428eff1449a84cb650136f57e"],["/tags/tex/index.html","1755e65cfeb4fd726369c0e017c05da6"],["/tags/threading/index.html","0c8cb80ff1271fb9f9f7e9e0a31a1a5a"],["/tags/tkinter/index.html","2667fb4e7443d52034e2aaedf2b4043b"],["/tags/torrent/index.html","458e73c12c7ca7ce0dc6e6b7017f9bbb"],["/tags/tutorial/index.html","c895484df060f0ce622c7eea183255cd"],["/tags/typora/index.html","f4827df29c696b1ddb629bd101cffdf0"],["/tags/uniapp/index.html","c0e9d3b3266582a91c096167f8531bf0"],["/tags/vite/index.html","c38b35dfe37c6913be7c128ab2438fbf"],["/tags/vue-element-template/index.html","461c87f72de106102510f0b56a94996f"],["/tags/vue/index.html","57b21990c741b24ee6bdbf696372b5f3"],["/tags/vue2/index.html","a0d2f52c30b2387d944a259032f67604"],["/tags/vue3-x/index.html","1eb4f2eb5f8517d80d22d0dfef7d4803"],["/tags/wechat/index.html","7cd52f586e3d154e5c6d7cf14b2c0274"],["/tags/wm/index.html","b79aae85d67d85198a28a233bdb7883e"],["/tags/wordpress/index.html","0a6dcebc702f6a8670c683416353e614"],["/tags/workflow/index.html","fd111e40a77ca884a188a51f8a5630c0"],["/tags/xpath/index.html","a501200f09913374e59347cee8061602"],["/tags/yacc/index.html","ee3c39a466ba781e254548c6635020ed"],["/tags/zsh/index.html","4b4471b0f1e3eb9f334556602a64fd3c"],["/tags/七牛云/index.html","c7bb99325b080d6cce4e88ffdb379798"],["/tags/函数/index.html","245c86048c6dc487ea11ab3bf53a5f09"],["/tags/剪辑/index.html","0fd329c2f4bb1a44e3dafe6cefc6ce38"],["/tags/存储/index.html","a4d1320551b7fc6e6c8fac3694c9fbc8"],["/tags/实战/index.html","d3ea8dd80468d50e3e37bff55ddc6bf9"],["/tags/工具使用/index.html","ace20b980d4c322d8763caa042f4bb91"],["/tags/建站/index.html","ab9eee1cacf783fbd7081e0f2e9fc9e5"],["/tags/微信小程序/index.html","5984b82e8275caa35dfcd6619681e3f8"],["/tags/指针/index.html","d208debc96a6eba13b38000cc2cd84f0"],["/tags/效率提升/index.html","948c1491ede37b9f2b92fd8568f36f94"],["/tags/汇编/index.html","1ec50a862104d77583cced47eeb85ce6"],["/tags/浏览器/index.html","45912f7f315d85088f108d4308989b29"],["/tags/爬虫/index.html","6e2f413eae0d755d84aed05fe2317844"],["/tags/算法/index.html","af2ebc23037de983e355b3a5502aed5c"],["/tags/编译原理/index.html","5e490f4b17d948a0bfdf099f0c553049"],["/tags/获取地理位置/index.html","967d401644cd3a60799c105c330a9a25"]];
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
