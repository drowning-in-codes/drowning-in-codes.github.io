/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","8a1db440be8f2e95f55b1779202b9180"],["/2021/04/20/稀疏矩阵/index.html","baf58f87943505f6d7aece48c5f2756d"],["/2021/04/23/广义表简介/index.html","9cd3a51ae059304e5385dd4ce879a915"],["/2021/04/29/关于指针和函数/index.html","fe67455b9304f6905511bafebe80856e"],["/2021/05/10/哈夫曼编-译码/index.html","9bfc03e76a33470d83f13222ab57e267"],["/2021/05/17/数据结构noj_2/index.html","90268628aedb0926fdc2607e4c28d53f"],["/2021/05/30/数据结构试验/index.html","788ba9407224170612fc01422dd996b4"],["/2021/06/12/数据结构noj-3/index.html","2067379b8b779b7ec6d36bc03dcef498"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","27023d5cd070fb3a7445f3960f10a021"],["/2021/07/08/课程资源分享/index.html","f02c6664a32cc78ced954acd003a680b"],["/2021/07/20/Scrapy-下载图片-文件/index.html","fbc4a88be7fdc1b622aa77f188c156ee"],["/2021/07/21/Scrapy-动态网页爬取/index.html","d4d07bc7094e7e6319ee0d5950802cfb"],["/2021/07/21/疫情打卡/index.html","3eed85fbcfc3721488c733070b1badfb"],["/2021/07/29/Scrapy代理设置/index.html","3c918ebcb5bbec606b1e7af1d7dcf096"],["/2021/07/29/数据库认识/index.html","3d7e0bd87bb2fa9f248ae11b6542a9c6"],["/2021/07/31/Python多线程学习/index.html","4f72f41774e238b200676a4bfd9d0458"],["/2021/07/31/tkinter-requests练习/index.html","4e67c96a19e795af59aa8d369a28ef83"],["/2021/08/10/Git学习/index.html","b0f8bcb2274bc5523e9ddcaaf5b94523"],["/2021/08/15/pygame实践-1/index.html","0e87bc7228f5ce56cbdbefe5c7e22f9b"],["/2021/09/06/微信小程序开发/index.html","fb9639adef733787e6bdc3f897ce0b7a"],["/2021/09/21/命令集-1/index.html","2bb5e77db135b14cdc648c7f2a287eaf"],["/2021/09/21/命令集-2/index.html","563bbf534e8d11ecc477dc008f84762d"],["/2021/09/21/命令集-3/index.html","d88987bd293679d7e2f7bc875b949104"],["/2021/09/21/命令集-4/index.html","5426b68df4acc83f66b122050e5dfd04"],["/2021/10/03/socket学习/index.html","5bebe22dfece7810fea0341430eb39a0"],["/2021/10/10/dwm入门/index.html","2eae19090ceef058b8366f7cd7d24669"],["/2021/10/10/安装ohmyzsh并配置/index.html","fa5c066ade07fe94d3e9056533a86439"],["/2021/10/20/css学习/index.html","0cc7e5b084e48eb78facf05080a2430a"],["/2021/10/20/wm入坑/index.html","58179928bc64e14b077d37fa22bab784"],["/2021/11/03/微信小程序学习/index.html","8daf994a5fde2e1eae4ad407c0ba94aa"],["/2021/11/04/css揭秘/index.html","14d20432342f8dc07fc0e8afeea31d0b"],["/2021/11/05/css-练习/index.html","f76f6c5f87ad419cee17c92a6beec0b6"],["/2021/11/21/命令集-5/index.html","d99178ec9f53edfaf437e64a850b96be"],["/2021/11/21/命令集-6/index.html","ca07d45363c1279e75c2db506ecd9980"],["/2021/11/21/命令集-7/index.html","a10c47d10d1078b857135bee92d1c81a"],["/2021/12/01/搭建wordpress/index.html","b5c0d47ab804a70f4253e2deae00801e"],["/2021/12/08/python操作百度网盘/index.html","752ebd20da908721fcb891c49a4b490a"],["/2021/12/14/js爬虫/index.html","6b192b0777df93994d40ba1a3181183b"],["/2021/12/25/为网站申请ssl证书/index.html","12509af0bd520ad6e84feafd3926ae08"],["/2021/12/29/使用七牛云为网站提供服务/index.html","eed62aeb4af128d630bdf95008b52bfc"],["/2021/12/30/jQurey继续学习/index.html","f15de1aecfda7369155397d71c0456b0"],["/2021/12/30/jquery学习/index.html","a4b170c440578ec9dea4724250f65ad9"],["/2021/12/31/vue学习/index.html","196ae04e87e7cb18737dc2803e34e673"],["/2022/01/02/疫情自动打卡/index.html","0c9aea86d4be39a33ea2d300b5cc7b1f"],["/2022/01/03/javaweb初体验/index.html","2c18b19250aeef0927fbccad488a1831"],["/2022/01/04/codewars练习/index.html","0f804965e43395b3e659b4c96531376f"],["/2022/01/05/Spring学习/index.html","c77358958d47bf72d90e82b2228d4074"],["/2022/01/05/vue实战/index.html","85eab9dd18b90614f4ce51639d9c3a34"],["/2022/01/08/gdb-gcc学习/index.html","58eacd542f5d88a137353d5994a232e1"],["/2022/01/11/python-opencv学习/index.html","db77b7678dfc53742ea49d23f39fd687"],["/2022/01/12/汇编实战/index.html","8efb5d1c85d810cf2ff3347699f4fd68"],["/2022/01/17/pandas学习/index.html","7372b51ada14992b82c4f28119e3500d"],["/2022/01/19/可视化图的工具/index.html","6a4539249e322d65cfde39ef35ab3e8b"],["/2022/01/19/机器学习入门/index.html","92b54d97e64aa8eb30d1aa2e56a5afad"],["/2022/01/20/cousera-ML学习/index.html","4c3ab1a7791b53cf2242d82fe1f06b7b"],["/2022/01/30/typora解绑后出现问题/index.html","11e324e09d9ac06450832402b2e05f94"],["/2022/02/03/NLP学习/index.html","75d966b8bf7af25156ddf328748d51b1"],["/2022/02/04/Web漏洞学习/index.html","aed2a36c57680d126c3f1ecdab75081a"],["/2022/02/04/pyqt学习/index.html","7092d2257f3e6e8cc687533c04b35a9c"],["/2022/02/04/python爬虫/index.html","ed0d342372b297f06c33ac98a3b48f21"],["/2022/02/18/Electron学习/index.html","2c749c0c93a713e7a62a836c8b62241b"],["/2022/02/22/疫情填报字段解析/index.html","9bb6e897ba73ddbca8cc0bc32e3815f0"],["/2022/02/24/Bomb-lab实验/index.html","a2d9f6a5ed6f9d27f7d9b9f0c655fff3"],["/2022/03/05/nginx学习/index.html","beb4389245fcbd9c8d8a93e3100ff282"],["/2022/03/09/汇编原理课程学习/index.html","1946cbc19799b9ec358de4bf08e0b976"],["/2022/03/11/Keras学习/index.html","6c215fdaac55c95b180d2a73581aa34c"],["/2022/04/01/graphviz学习/index.html","71c6ed5043d948762b5e616ea17812d4"],["/2022/04/07/django学习/index.html","21e2367b5084c378c35b265f765ba1b4"],["/2022/04/11/密码破解学习/index.html","b92a282ff491e5249638b7c7110a50cd"],["/2022/04/12/flex-bison学习/index.html","4a70b5ed89229c86124f472863a76d25"],["/2022/04/15/pytorch学习/index.html","0680281962f279df9027f1f5e15747a8"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","6234ebb84adfae3d698082a334276ca3"],["/2022/04/23/写一个音乐播放器/index.html","c48fd6261ab23851cde035ec710e68f7"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","79ac2bd379b3d023bcee82aeb5e71df3"],["/2022/04/30/GAN学习/index.html","25e1fa34b4649edbb028c5b52be675a3"],["/2022/05/02/html精学/index.html","55e5f2f880d6c0e527273c2b5d29f9b2"],["/2022/05/06/write-a-compiler-by-yourself/index.html","2c27bb356cbc38fda1ccd5e16f08c3a4"],["/2022/05/30/acwj-01/index.html","80ba7acbf1471b0dc5cb297f69206726"],["/2022/06/14/animeGAN/index.html","e21e37e0417e00853aa27e8248389053"],["/2022/07/09/c-与算法学习/index.html","049fa9380b77d0ba23202b1448d69d42"],["/2022/09/19/flask学习/index.html","79926a808b66a3778cbd2b1d4c2d733f"],["/2022/09/22/cs224w学习/index.html","bbf276dcdebee75bddf2180d9ff51531"],["/2022/09/28/记录一次wp重装/index.html","77492b5127fb927e3b85447966cc000f"],["/2022/10/01/Obsidian学习/index.html","1dc776ba41dc07a2d46cc5d9e264391b"],["/2022/10/08/vue-element-template实战/index.html","0718b28473a3de2c44259604002eead5"],["/2022/10/25/vue网上商城项目/index.html","78d08bbb8d80e72a94fa84221e8214b0"],["/2022/11/11/leetcode刷题记录/index.html","c2b0b9b9771901a0db54da83badf124a"],["/2022/11/11/使用overleaf优雅地写文章/index.html","1311f454ff7883bb7552e798aa3e2787"],["/2022/11/22/磁力链接与RSS订阅/index.html","44c5c8642f48b510ad3da18c5e112c17"],["/2022/12/11/uniapp申请获取地理位置/index.html","99cf8d6d14abdf9e052707bc15849e38"],["/2022/12/26/pr剪辑学习/index.html","6a6a75cb1229a74409d1d08a75ace472"],["/2022/12/27/css中的flex和grid布局/index.html","8a8dc78c9d08d342e39e384f63e28522"],["/2022/12/28/Flutter学习/index.html","971b991df51d92c733c75bf62eea65ea"],["/2023/01/01/美化github首页/index.html","ec230abb7f58c14fdad788233b2f406f"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","d73d32b4d9fbd7c154f2bbbe5c61b991"],["/2023/01/04/构建微信快捷发布文章工具/index.html","4ea8ff102f0cdaf5e204aa8ba09d85a0"],["/2023/01/14/dart学习/index.html","76c93374b98d8b329c3cb2c719750d2e"],["/2023/01/23/闲置服务器BT下载影视/index.html","27ea4b63adaf89a52c9f94ad5f8ed41a"],["/2023/02/07/TotalCommander使用和学习/index.html","bb0a3bb987babfcb54ec57a891898a60"],["/2023/02/13/docker学习/index.html","5dd98fdff8dbe17fa941ed07a6225828"],["/2023/02/17/DLHLP学习/index.html","847bc82a302881a1c6b31d665b578d38"],["/2023/02/18/学习purecss构建自己的css框架/index.html","fe8b35a37cb882ccd919f60a4f380ed9"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","f72683f79a9662118ac572e16b47e7ed"],["/2023/03/05/STL学习/index.html","3e697354797dbcdb0b5cb0f3c62437aa"],["/about/index.html","4d689d74eeab0980d1b979ea845e1095"],["/archives/2021/04/index.html","2fc0cafc29a52df0d104dde5f290df41"],["/archives/2021/05/index.html","494ded23b6f982a0ebce8db1004c19e8"],["/archives/2021/06/index.html","08527e6594cc04f7e198d13f39f9e181"],["/archives/2021/07/index.html","4095f331c2016518503b2a635ed49881"],["/archives/2021/08/index.html","dbf26cdf5b9516a6f1ee95300460eee9"],["/archives/2021/09/index.html","8156dfbe7f09858694309be14d85c7cd"],["/archives/2021/10/index.html","a5224f1243409faf4027a4cffa839601"],["/archives/2021/11/index.html","cb06b1e698dfd9b4bb77e261b669ba9c"],["/archives/2021/12/index.html","88cb5b8364ff8224a30cc4f2fc0280b1"],["/archives/2021/index.html","c5ab54b52c936e50e4dad3dd507a1350"],["/archives/2022/01/index.html","d0d3760e088dead5f9be039b03ec5e6a"],["/archives/2022/02/index.html","2ce459f61fd91643fe95a2eb53d7c051"],["/archives/2022/03/index.html","fe2c43c177e4873946674925fa77d248"],["/archives/2022/04/index.html","f274ff733f3a043d66996f9d0bbe9545"],["/archives/2022/05/index.html","387f83d9170530e9145c7df4631f9bbe"],["/archives/2022/06/index.html","63d6c92b89da79fd28e44cceddd5bd75"],["/archives/2022/07/index.html","5cd5dc6bf5de0ad62813b3219b1776d1"],["/archives/2022/09/index.html","82d0302c8a8256b653ae92c851ed5d39"],["/archives/2022/10/index.html","19423c51950ba7f629578c123f79816f"],["/archives/2022/11/index.html","a5f24a73129a3a9be058740a13b67885"],["/archives/2022/12/index.html","f9a44c276a984dcf2ef24f01f059f686"],["/archives/2022/index.html","471c0dc47a89ab9a82f224fab24f2625"],["/archives/2023/01/index.html","3388b0c884b898efbd947775833885c3"],["/archives/2023/02/index.html","72ba7f82a4332dd734a52dc6d4408413"],["/archives/2023/03/index.html","8f5eb95fdc8e84f4b569fa3fa4a1c0d1"],["/archives/2023/index.html","f93fa0630bea4217e3c04e2aee34a912"],["/archives/index.html","114ae4cff29503d8f1e0687579bb23ae"],["/archives/page/2/index.html","5c80e172510a4ca71d361523f7335039"],["/archives/page/3/index.html","f3b480a93174a208e18641b1c0b4e250"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","415e8c48dc2e11bd39bc91a2eb8b34c0"],["/categories/ML/index.html","e28cf84b3b0380d5b49b97d4536e04c5"],["/categories/Nginx/index.html","3eb72d6d4a314d2804d0fcefaae8c872"],["/categories/Spring/index.html","bd819efd2ec16eadc85cd87291d740c3"],["/categories/course/index.html","1193e0615a933f8a310c8424fa8250be"],["/categories/django/index.html","9fd3ca2409e961ac593bf6727e39b51a"],["/categories/fun/index.html","7e5e7d8f1a8873b2672528cbab044fee"],["/categories/gcc/gdb/index.html","6f5ad3f1c49de175e413fcf0c05f368c"],["/categories/gcc/index.html","039523719cae0875cdb60c9bb97a533d"],["/categories/index.html","756493ea5ad9a5ce9bb50bc68912970d"],["/categories/java/index.html","6971c2aaf191a8208820dec96d938a1f"],["/categories/python/index.html","9753b72ec08af0ecba32cf3fc68b5a55"],["/categories/study/index.html","e3d4557403c7afcf8c86276eb9f32d7b"],["/categories/vue/index.html","75786d5e3fe7e62fac94728a0dd14936"],["/categories/误区/index.html","f553d2aae4a2c6ca066bafdafa7e5452"],["/commonweal/index.html","fc58eec803c57c410de48f777b53665e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","850f267da1ca126177703638f6249175"],["/home/index.html","bc17ea3b8366d1c90c7f397dcbdf9447"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","7dceed4c328e1f9b98f4a11bdb4671d5"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","3e40532c34d42180ff910d07bbee0f3a"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","955d4009ae9f73579941f6eef91d5c21"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","aa460b591a7af8013d2566bdcde3f809"],["/page/11/index.html","ebea2806622cc8c93919700018f51ee8"],["/page/12/index.html","76dc370a97c985deee1f521639c8767e"],["/page/13/index.html","3f149200609963b434e02b399e31aba7"],["/page/14/index.html","c09190a17c9842a8a620367460b47071"],["/page/15/index.html","86955d517a6ebf7f2d7ce9d678965860"],["/page/16/index.html","f2f64ffb3af6e7c1a2af7c0b29d94b36"],["/page/17/index.html","73619a1ba7778005a60d58517c3ecbbf"],["/page/18/index.html","6ff64f7f051a25c2babfb770ca1109c2"],["/page/19/index.html","9ae55ee6c449c799ef0bf3630746ce8f"],["/page/2/index.html","f862f86ce6b75d564c81f526fab618d3"],["/page/20/index.html","c22e3b8c00fb65154a2ff1983ea386b9"],["/page/21/index.html","50888d4ab63b67634c94315637765085"],["/page/3/index.html","54b452ffff0ae7b063197c5d60d23c3c"],["/page/4/index.html","dadb03c493bfb4a507d692dd2d8b3f84"],["/page/5/index.html","b10e315188a10e20a437e7062c0dde23"],["/page/6/index.html","fbacb5307c77a9db6c193016ce6df07e"],["/page/7/index.html","64c992856c802f52e944e23486761817"],["/page/8/index.html","0de5af6a6f81a8e7ba03302775e00fda"],["/page/9/index.html","cbad6cad335f30401abffef273802e93"],["/resume/index.html","f55f8eb7b4be826e9b60f27184429a4b"],["/schedule/index.html","37771c2908602fbcd69fbc07df9dec7a"],["/sitemap/index.html","dc5c89d24aa1be3b667d7f316a051607"],["/sw-register.js","31211f6a268c133fcd93f64bb555ae83"],["/tags/AI/index.html","c3a76cfbfae6f58ac1c2e435d7571534"],["/tags/BT/index.html","4abb5e9ebe420f8be6865cb8c045702f"],["/tags/BaiduNetdisk/index.html","2a9cce03b9a57ecfc9b9ec37b4d06e45"],["/tags/Bootstrap5/index.html","d6daf75713b596405c23718013abb745"],["/tags/CSS3/index.html","75d6e417a48e801533b3d24941d6d8cd"],["/tags/Centos/index.html","b933ef98192d2b33510e191e8791bd5a"],["/tags/Electron/index.html","48795ada9141b56f7ac0c923f6655d77"],["/tags/ElementUI/index.html","1ed8e4e0ea240a41b052126b858ef553"],["/tags/Flutter/index.html","fd080966b370e678597cbf97d0ef834c"],["/tags/GAN/index.html","9c1c211959e64ee27e17480d9a02c9d1"],["/tags/GUI/index.html","573fad9a13e5ab623fec10b64f394358"],["/tags/Git/index.html","d1c2c58894aa4b6a191c25adb469cb68"],["/tags/JavaScript/index.html","efec0edcf817c18e3d6d2a98e4bbb25c"],["/tags/Keras/index.html","e8197cad5d1c3e495f38dd00ec3a8d6c"],["/tags/Linux/index.html","db28b9ca682062b793564cf7f6a2c14c"],["/tags/ML/index.html","0f32e39fda2a837012d3c2eaa135b5c3"],["/tags/NLP学习/index.html","b9b4f2de85292f6fab3b8fdc2ff80a37"],["/tags/Nginx/index.html","36d673e423ac643d94358f523ed02aa6"],["/tags/Obsidian/index.html","554dc9dd35fdea8480ea5b9b371d75b1"],["/tags/Qt/index.html","002ab45b7de9077f7c5ce25edba0f343"],["/tags/RSS/index.html","c70de72d70ba08113611e5d44fe21f86"],["/tags/SSL/index.html","e0d60aab84b47b26653c7eaea894a787"],["/tags/Scrapy/index.html","e40bce22394347b8192b448bf480014e"],["/tags/Speech/index.html","90e8cf2670daee1c30a6e7b0fb0d5f67"],["/tags/TotalCommander/index.html","c94bce87b623275ab4803bd826c2d6c9"],["/tags/Web/index.html","eb43ee6c6ac4202f73dfd62bfc705bb6"],["/tags/algorithm/index.html","e7eb2295e8cfdd85e7a6c6bba137561b"],["/tags/bison/index.html","8864b246fef2bd79769f8774d048cf2a"],["/tags/bomb-lab/index.html","cd48a7d4c4383075c5499c71274ecbe6"],["/tags/c/index.html","b2e963adcc0d0408984222eaf7dd3ab8"],["/tags/cheerio/index.html","41c4857ce3b9448aab6371e5d6a76f5f"],["/tags/codewars/index.html","4fc519fc90a9c77861f236cfc3ee3acd"],["/tags/compile/index.html","84b01751d29eba0107574b1d3b3d3a40"],["/tags/compiler/index.html","e8c1ed23ce8830ffcaff3ead658cf7ae"],["/tags/cors/index.html","25ee6ecd9f82cca2a124ba3dcb11ee4a"],["/tags/course/index.html","1a3c1e3da2f7a135ecf58c60e500e03a"],["/tags/cpp/index.html","0bf5b8d00eac3d92f99dd1be31c826b6"],["/tags/crypto/index.html","26bdb8c819147653eee89b8833bce2eb"],["/tags/csapp/index.html","b96258da8b52bc3d48d8d42560934ecc"],["/tags/csp/index.html","2be141610496807f87fce273070b27c9"],["/tags/css/index.html","7aa7d7603a8407834e0ee8426cf72888"],["/tags/dart/index.html","0608e4ca9e4331b158eda5e047488a60"],["/tags/data-structure/index.html","5f3c8f2a9b448a96957a1e15817039db"],["/tags/database/index.html","18d93a98483afca14e13021fa23505f8"],["/tags/deep-learning/index.html","ae5a9dc3b958686e65b411c00d8cbb15"],["/tags/django/index.html","3ba57f209ced24e102bc1fd527693ea0"],["/tags/docker/index.html","b470289e3491aacba5ff02c3ee582bc4"],["/tags/dwm/index.html","7d965514782c1a4034c34acd68e45ae7"],["/tags/exercise/index.html","cb8d72686e84f26b4fcfa4c95eaeb92e"],["/tags/filebrowser/index.html","10c9f3e0c085fa6013b9a7032a1e4b7b"],["/tags/flask/index.html","078a414de8f7aa7e1cceb59558b18e04"],["/tags/flex/index.html","388d9a239c6a90ac6cbf6210ee58c654"],["/tags/front/index.html","d3c2a2543e3718c115a301e0f831e2af"],["/tags/gcc/index.html","2b1af166fcad8ddebcae529c4e6c5a3c"],["/tags/gdb/index.html","3ec818855eccb38b86c2ee3b9cfd9895"],["/tags/github-profile/index.html","64d2698fb01e7693133b431409705600"],["/tags/github/index.html","4e11e0f9f667044c8d9f4980215d64fd"],["/tags/graphviz/index.html","40a5e3243ec09ef2e8598dedf6ea812c"],["/tags/grid/index.html","3c441616f0120d072ffaaef92ea952a8"],["/tags/html/index.html","c37c57b9ddaa3f732216bb2eb54a557a"],["/tags/i3wm/index.html","f956b4e0929681a97cea78b69f33236c"],["/tags/index.html","e1671e37c18c735fe8bd19d5910b9a99"],["/tags/issue/index.html","112250de5a7aca1c2509ace4b5c31b3b"],["/tags/jQuery/index.html","55fb45f25f196e54d955162c60b183c3"],["/tags/java/index.html","265b402d1a515271c56c5e744b76b7ed"],["/tags/js/index.html","22b8d70fa46d5d23dc53829e877af2a5"],["/tags/latex/index.html","6969746ed566dc6ffee63a22be767e66"],["/tags/leetcode/index.html","4d54c17257b9dfc0b650110557dbe979"],["/tags/lex/index.html","1a1f7477ecd58853e5c3a0173176bf26"],["/tags/material/index.html","356acb7907b0b94fb16b3ac10f176e3e"],["/tags/music-player/index.html","cee71c4018ca6d917ef1ca507649df9c"],["/tags/nodejs/index.html","958939cba2b264f60e398af991c23f92"],["/tags/noj/index.html","a3d92e7e7a5f83449d03b9fd8957bd80"],["/tags/opencv/index.html","b81075be0138cfc48e521c6846a9a76f"],["/tags/overleaf/index.html","577807858d3d951dd528c7e288a4b2b2"],["/tags/pandas/index.html","b64ce9935214659173f813abbfe3f791"],["/tags/premiere-pro/index.html","18f624ffb53f2b792a7782c363218826"],["/tags/proxy/index.html","eeb3f3a41cd1a4947856c1241e37e054"],["/tags/pure-css/index.html","65031b26b837857587074cd886178300"],["/tags/pygame/index.html","3bc449844e0f50011d68f2435da8c429"],["/tags/python/index.html","e1bc9b81491407adbd06e14fbe9a535e"],["/tags/pytorch/index.html","8b44e5d601683f29d08d50807dafbf0c"],["/tags/reading/index.html","4963539cec3aaa346be4703f2c7d9788"],["/tags/request/index.html","d79a916a1e15e14fd3a558346471c88c"],["/tags/requests/index.html","f4f4917706929392e24b0402c3c207f5"],["/tags/security/index.html","22cc0f897c5a8c0f489a158aaf499ca0"],["/tags/shell/index.html","6b6e656f9f790c5e6efc0acc80f4eb10"],["/tags/sign-in/index.html","7db898a4c19365ec0fd2407de32e5f92"],["/tags/socket/index.html","c471bc67064f8de873ebf3fecdcac5a9"],["/tags/spider/index.html","42470f371b18822b468df9ec40516b84"],["/tags/splash/index.html","e5c7d320ca385450a78d66c54e6795af"],["/tags/stl/index.html","c4bd71070c3db2011a7c80e35f334fe9"],["/tags/superagent/index.html","33cde124e9511a3f27c03ea397974ecf"],["/tags/tensorlow/index.html","aeea9bfad5a050f0bf6d79f380647060"],["/tags/tex/index.html","1ad523ef2a6dd3f88ad24c17efe70a5d"],["/tags/threading/index.html","49b94c5ea0e9acf4ef92c4ddd0cd3739"],["/tags/tkinter/index.html","8617ecc770ac58bfe1fdc6bb8244c7ba"],["/tags/torrent/index.html","1f7996fd2ebed658b6bdcf15aa922b31"],["/tags/tutorial/index.html","16ecb5ad93c4eb8a02e0c4fe7fd87edf"],["/tags/typora/index.html","6fb8db8d1fa9c74dcaa5605ecb188867"],["/tags/uniapp/index.html","cb723e43c5d9108d301512ca03ef3727"],["/tags/vite/index.html","a660b4de17e730e2ae0828c5b9618223"],["/tags/vue-element-template/index.html","63cf374a09f0f24d48ae6376111dfe5f"],["/tags/vue/index.html","773f16c4f240473c84cee66c6699e962"],["/tags/vue2/index.html","e14775843955b647cb6fdadbedbddb80"],["/tags/vue3-x/index.html","dc012370aff2db3e7ec6c083093e8a33"],["/tags/wechat/index.html","199a07b43f05a0ee9dc4b378e9f66bc6"],["/tags/wm/index.html","973e69b341ab515594a1db7a1c4b5839"],["/tags/wordpress/index.html","803668313ecba73616f8ad05b87a526d"],["/tags/workflow/index.html","cec10158f0955ba6f38fc469a596f054"],["/tags/xpath/index.html","5d6c71db00b10a9232ad83291b39fcc7"],["/tags/yacc/index.html","dd7e36ac634dc0a2002c71fff81a8475"],["/tags/zsh/index.html","6d82fb0990575bb3ce4b7b3f46a92cd9"],["/tags/七牛云/index.html","522f45d9b5c19f0c973751da02e2a78d"],["/tags/函数/index.html","505c91a9536a682a801041e19baa193a"],["/tags/剪辑/index.html","5e2afb80b385d4f8c7c0e244e3dacb14"],["/tags/存储/index.html","46a4b570e9a383685fc401318c37ced9"],["/tags/实战/index.html","a2691ccc1cccd87629aa3614160bb573"],["/tags/工具使用/index.html","a4082112e5144815d5964299b0715308"],["/tags/建站/index.html","2cd3b7d7413d05c69c61d8ee8a666557"],["/tags/微信小程序/index.html","3fd10e7a631fb93f8ee1da8ce4928722"],["/tags/指针/index.html","6f00ce528b403887c1d5af0a6ea7fc0e"],["/tags/效率提升/index.html","5ea340421a2dbdbfa8895082ede9bbd6"],["/tags/汇编/index.html","3ec60212e8f3cf20bb9ecaac86f245fc"],["/tags/浏览器/index.html","e8e96f4002b347cd5efc33c87edef0ad"],["/tags/爬虫/index.html","e2b436571851d789104c00e2f5fc4f8e"],["/tags/算法/index.html","0e67645f949a1b33d612e2e093896412"],["/tags/编译原理/index.html","7694333da4dfaadcbcc554c108dc057e"],["/tags/获取地理位置/index.html","6deacca466fdbe19dac66226e8c73c35"]];
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
