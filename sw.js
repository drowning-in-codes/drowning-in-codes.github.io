/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","e9ffddd383e27099b253db3aabe31e26"],["/2021/04/20/稀疏矩阵/index.html","7c5826cbe9d20d0999d7e253868595da"],["/2021/04/23/广义表简介/index.html","7fa6d2ae6ffc446f16dcddb867bb7c55"],["/2021/04/29/关于指针和函数/index.html","f72d0232f829db3175dcf6dd40823cb9"],["/2021/05/10/哈夫曼编-译码/index.html","40799d2067988602697d61177b61f322"],["/2021/05/17/数据结构noj_2/index.html","553af065a22c03ea73cd9eaf23a1a115"],["/2021/05/30/数据结构试验/index.html","29103a9f6fd322c90e44c27582b80ebd"],["/2021/06/12/数据结构noj-3/index.html","14c320483e400dccd0cd07a79c77f01e"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","049ae09c4e886ce0161d59de805e73d7"],["/2021/07/08/课程资源分享/index.html","7b56fefda8ce84f43fc857d1ab252582"],["/2021/07/20/Scrapy-下载图片-文件/index.html","561991be1640455efe9b63ccd3436579"],["/2021/07/21/Scrapy-动态网页爬取/index.html","2631b3078328bfa96555f73d3add0070"],["/2021/07/21/疫情打卡/index.html","758561d09d8ffddbadb33cbab3cb4ce3"],["/2021/07/29/Scrapy代理设置/index.html","84ec9a31809fe88d637eaee4deb8fb06"],["/2021/07/29/数据库认识/index.html","7ae98530b429cec67e955ef385078b42"],["/2021/07/31/Python多线程学习/index.html","265d198c28f048ef81328aec7b5b6d04"],["/2021/07/31/tkinter-requests练习/index.html","e4f893f95ba216cb5902d2823c419abf"],["/2021/08/10/Git学习/index.html","a8b80ca61afbb9d6f8e105dbe89e50b7"],["/2021/08/15/pygame实践-1/index.html","82eafbe31000f02ab0062a7e9eee2263"],["/2021/09/06/微信小程序开发/index.html","d56eb19d359db2dbac9a28fbac654a67"],["/2021/09/21/命令集-1/index.html","0e6e58417cdd7fae65c0ce30dad12a88"],["/2021/09/21/命令集-2/index.html","4fac8a90d59a0c24951af209f50e38f1"],["/2021/09/21/命令集-3/index.html","289a4b6059b96742465b7065307c6728"],["/2021/09/21/命令集-4/index.html","c22f66622441bb13885dd29567ef0c90"],["/2021/10/03/socket学习/index.html","bb6a9b7ecf020e0a97b23de7850d9f5e"],["/2021/10/10/dwm入门/index.html","688144ba54376fc82476d25280af2c7e"],["/2021/10/10/安装ohmyzsh并配置/index.html","e086867eb34db0ae9dda23301f93d309"],["/2021/10/20/css学习/index.html","353eeb47ed38e64dde1474f92eae0829"],["/2021/10/20/wm入坑/index.html","4b6835d7bb61bda05b0df0bf71b95a37"],["/2021/11/03/微信小程序学习/index.html","40f79f3c8080ec5e87ad3065e93b5086"],["/2021/11/04/css揭秘/index.html","463f7ee3a1e7b48c4c83f285f76ae083"],["/2021/11/05/css-练习/index.html","352fdbfcf515014ea58b9ccdfa132f9d"],["/2021/11/21/命令集-5/index.html","46f79696b7f56d800aa5ce9f591cbc32"],["/2021/11/21/命令集-6/index.html","a0eaf1805b2d2d4e23a8ebf2527e8a37"],["/2021/11/21/命令集-7/index.html","dbefe9988afb747794189f3e71633f7c"],["/2021/12/01/搭建wordpress/index.html","81e9dc07dec539eb3e2190daebcf4c2b"],["/2021/12/08/python操作百度网盘/index.html","61567643e8ef609df52adbdb3b3e8d0d"],["/2021/12/14/js爬虫/index.html","4e334c0a467c25fc25ecab0dcda683e4"],["/2021/12/25/为网站申请ssl证书/index.html","c551340c0393f30e22381e74d626edc9"],["/2021/12/29/使用七牛云为网站提供服务/index.html","919b2d6f867d759262f4fed240667a0d"],["/2021/12/30/jQurey继续学习/index.html","d37fe7403d866614bb0400a74a7803d9"],["/2021/12/30/jquery学习/index.html","f4a84d1ab94536af507cfc0819934a78"],["/2021/12/31/vue学习/index.html","bc77a87f0b41e053456e7168352fadc2"],["/2022/01/02/疫情自动打卡/index.html","f10969e5c7c1e232208be20ee316951d"],["/2022/01/03/javaweb初体验/index.html","8af7eb527650d85157d88cb0d136d2b7"],["/2022/01/04/codewars练习/index.html","161a61773092d90fef102b573c2692dd"],["/2022/01/05/Spring学习/index.html","e00ecf3f18cf1cddb0f0e28f0e73b016"],["/2022/01/05/vue实战/index.html","e6d8afb116dff2c7ffb414d62a2df55e"],["/2022/01/08/gdb-gcc学习/index.html","5269abf84be33d5b9b58d7345a653202"],["/2022/01/11/python-opencv学习/index.html","63575f4d98c2d3364698bcc0dea3d26b"],["/2022/01/12/汇编实战/index.html","18d60d1ebf44c47bb5d76f1226930644"],["/2022/01/17/pandas学习/index.html","909fce5ec15d4c802988ce6f26b96b66"],["/2022/01/19/可视化图的工具/index.html","e1f7f2e8788d965a13fffbd31cc04193"],["/2022/01/19/机器学习入门/index.html","f19baaf8bb98a6a3f62de3bfb6ac7105"],["/2022/01/20/cousera-ML学习/index.html","ca435e6fccf9f8940a8da5c8280c66d5"],["/2022/01/30/typora解绑后出现问题/index.html","72ecacee7c23f13a05b1a129a127192d"],["/2022/02/03/NLP学习/index.html","e1bcecc0de1cc7e54a8dacfbe72b340a"],["/2022/02/04/Web漏洞学习/index.html","1cb0c37be59abdb52fcf794c7c1a2e44"],["/2022/02/04/pyqt学习/index.html","378c67b21382305fb9d94b8bfe4e8bb2"],["/2022/02/04/python爬虫/index.html","41ed18f779e2e72cc2c88768c36f23a5"],["/2022/02/18/Electron学习/index.html","22be58efd7be778a99fa9f184af6d965"],["/2022/02/22/疫情填报字段解析/index.html","d9b6b406f27c3b1d294a78c4fb278c5b"],["/2022/02/24/Bomb-lab实验/index.html","e4517d1f0907229a973b15e26ce22ada"],["/2022/03/05/nginx学习/index.html","737a999919ed5af707dfeb0f3a8a27ca"],["/2022/03/09/汇编原理课程学习/index.html","a3dd9d92459f8e5edbaafb50a82cbd1d"],["/2022/03/11/Keras学习/index.html","f64e072c35a619413bfcba271bfd5e03"],["/2022/04/01/graphviz学习/index.html","9da29797ff3d54902b36947651a217d6"],["/2022/04/07/django学习/index.html","25033d61dcaae48a569bbb804915e918"],["/2022/04/11/密码破解学习/index.html","e62d598a47ea10aa23c923d646c1579b"],["/2022/04/12/flex-bison学习/index.html","79d6ceffda9bb78b8ba2d7c79ccfb1d6"],["/2022/04/15/pytorch学习/index.html","45e7626bad1ab992c083b863bab634da"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","a1c69524ef163dd586f61a04bec4059d"],["/2022/04/23/写一个音乐播放器/index.html","7203944bdd3cc8a4c0ab14f153c33107"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","b99cdd90906fce078de7ffd561d6223b"],["/2022/04/30/GAN学习/index.html","9523e6433051aab2ef2d84e22b0d4f2f"],["/2022/05/02/html精学/index.html","8bdd3c49367432210e77a305970e47bf"],["/2022/05/06/write-a-compiler-by-yourself/index.html","b553c1b452555540419f3cfb4c5221ff"],["/2022/05/30/acwj-01/index.html","18bc13c66459439e677c2baf6c37d890"],["/2022/06/14/animeGAN/index.html","d38d6471f76d3ed8ae410d3ff79edf8c"],["/2022/07/09/c-与算法学习/index.html","fd12935fc50540427d189fff6c1c8f65"],["/2022/09/19/flask学习/index.html","3eed489be84b56019aae3e896c171a62"],["/2022/09/22/cs224w学习/index.html","85e8ad80fdcaf9e482463bd62913ec71"],["/2022/09/28/记录一次wp重装/index.html","4440cbac55bbf8c3fbe9f0a53266920f"],["/2022/10/01/Obsidian学习/index.html","3cfd10d5422075f0e334c10443bc1680"],["/2022/10/08/vue-element-template实战/index.html","f4337eb9fa50f26f0ba6227fe9b6c6a9"],["/2022/10/25/vue网上商城项目/index.html","bc7d83c1940c3bc04413b0ffdaa2eeda"],["/2022/11/11/leetcode刷题记录/index.html","f484371ca28d4f98b90c038b93f0e813"],["/2022/11/11/使用overleaf优雅地写文章/index.html","13deeec1d428106f97d958c0767c8b78"],["/2022/11/22/磁力链接与RSS订阅/index.html","97ab20e26013260c49e12150148c90ca"],["/2022/12/11/uniapp申请获取地理位置/index.html","989fda7018f70bea484fff29cb2bd6ee"],["/2022/12/26/pr剪辑学习/index.html","0595d8e5eac9e2b3954640c4fd460785"],["/2022/12/27/css中的flex和grid布局/index.html","4b036f63f8111d5753cfc48decc98961"],["/2022/12/28/Flutter学习/index.html","3d638cffa57e6b1894e6e8e4f62a6802"],["/2023/01/01/美化github首页/index.html","f8126690eadcfed416cde359cf2f0d96"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","7c1ab097d08cbb2073b6156a65970d23"],["/2023/01/04/构建微信快捷发布文章工具/index.html","f1e0e2cc6301e1dbc68ca5931a374569"],["/2023/01/14/dart学习/index.html","ac9d917f466b1e4f61d8e254412c0ebb"],["/2023/01/23/闲置服务器BT下载影视/index.html","bdd38cc8358383c085c9d107fc9ed36f"],["/2023/02/07/TotalCommander使用和学习/index.html","09028881233d61e6eeeba3bd3b5ce179"],["/2023/02/13/docker学习/index.html","245b60c5696188639ebc3ba8af25e756"],["/2023/02/17/DLHLP学习/index.html","b8515c8adc7615e5abdc1b79f2b754a7"],["/2023/02/18/学习purecss构建自己的css框架/index.html","7a3ee858ea40a98578064ca6821de1bb"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","320ac61314bb4171383f71d6a20d5c10"],["/2023/03/05/STL学习/index.html","38012bb3745c783b70d99035b6c1d3f3"],["/about/index.html","5e45d6df9629ebe1a701cbcaadaa0df2"],["/archives/2021/04/index.html","bbe40f36d9a6a84a896fd2c57967c47c"],["/archives/2021/05/index.html","c538ba0664ee666ad1673217bddcc6a1"],["/archives/2021/06/index.html","37a0a14ab31153ca2d90c6eefdaacae5"],["/archives/2021/07/index.html","4b711adae293d7f8b8baad046666f53a"],["/archives/2021/08/index.html","52cda64e9276cbde7137393ead7dd613"],["/archives/2021/09/index.html","4a0663be1f3ceb1b80e885cf3d74a593"],["/archives/2021/10/index.html","9e40160917fdb6627fbe445b831f0996"],["/archives/2021/11/index.html","62f67abe4bd003c376f19ce1c9c9f12c"],["/archives/2021/12/index.html","7585057cea8b517029411e642a02a0ac"],["/archives/2021/index.html","ee8890d8e2383a243a3a2b1ae26e80e5"],["/archives/2022/01/index.html","e9e6021ae3444bd40fffca5eb91a37cc"],["/archives/2022/02/index.html","4e4676ed70759f566d6e6fea49c565d9"],["/archives/2022/03/index.html","ccee938a46ba2ae74fc529bb3e1069b4"],["/archives/2022/04/index.html","330319e32be342e7204e331b2c16ec11"],["/archives/2022/05/index.html","a0dfa1aa2b513350849ec15e7295146f"],["/archives/2022/06/index.html","906612f40cb9a85133e1e8306c38fdd6"],["/archives/2022/07/index.html","a35f498c2522e41e5509da40a3630e08"],["/archives/2022/09/index.html","d3cbb3093e36199c6e4fb3f051994097"],["/archives/2022/10/index.html","104a70c606eb7719c09f6b87c5872719"],["/archives/2022/11/index.html","76a141929913b01c7f18eae6c70d806d"],["/archives/2022/12/index.html","4b4c91e3db6d272d0adeb1d37f4aac6a"],["/archives/2022/index.html","785e8c02d36a393a0d5e3ddc4b2626cf"],["/archives/2023/01/index.html","c22746d0485cdca0843fa503ce232f16"],["/archives/2023/02/index.html","0d228a5ea6442c34bf15ec37bf0e0158"],["/archives/2023/03/index.html","0fcea66e83d15c82decdee8f58b0b5d4"],["/archives/2023/index.html","39faf6b1f165fae5c9532e1a0e6df0c6"],["/archives/index.html","e73660b84169485ec94fefff84dea5b8"],["/archives/page/2/index.html","345f602df14e7c858d67f0b9872088ff"],["/archives/page/3/index.html","33c8e239637cbef69dad4ce91d50af77"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","d4e56fb7ef7edebcfbf53b13693fc829"],["/categories/Linux-study/index.html","14441c468a83471509fc021471b996d6"],["/categories/ML/index.html","744d887dec7a03db09e4cf15838e422f"],["/categories/Nginx/index.html","1264970319670f5556a03226fd31d7dd"],["/categories/Spring/index.html","3eb25b240328e98b7a81613c88e1be16"],["/categories/course/index.html","765c6bb376669ed245bb84ed7f006f4b"],["/categories/django/index.html","bca5c88569c81df9b08ccb9d438ab972"],["/categories/fun/index.html","0991b1660cb10c96ea3eb85e8be0fbb8"],["/categories/gcc/gdb/index.html","0ad8aecadab53a1a3b9a7f2d7005022b"],["/categories/gcc/index.html","68bac935dcd1e59b1904d8bb292f17fc"],["/categories/index.html","f84f3fa0d404949faba600e8e11aca7d"],["/categories/java/index.html","ce5b5da4150cbf48bcad939bfe304bd9"],["/categories/python/index.html","c3c3ed71dd4d83ac51d7e43bd005b765"],["/categories/study/index.html","ab36530e7c54da7ea3f7366470e6dcee"],["/categories/vue/index.html","ec30e5c07551150abf472986022529e8"],["/categories/误区/index.html","0878774587b805c1466fa00fa9922ebc"],["/commonweal/index.html","b3e4a8cc8b60132a794afcca3656b75b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","905815d16929c1e76e3fe631cf5dc3f6"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","30e83896f7bb9536d1eccc00288577c0"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","fcbedc6bc8f89b2b2de06a1a00a107c7"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","b92557e0a1f5c78f197d510a618eb701"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","7cba76532ab4a84e5550cffe9a9d962e"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","fbb2d16430efa847978e2cb82360f4b3"],["/page/11/index.html","8c465b3d8998e507ca0f39703211eed4"],["/page/12/index.html","1b2257f50f6ab03e32e201fd03501fb6"],["/page/13/index.html","af51ba9abb37b3307c53e78d32ef0f28"],["/page/14/index.html","56b553959cc04bdf571859ef5c3957b2"],["/page/15/index.html","7af1d768154f7ba43a65fb109fe43d3f"],["/page/16/index.html","8ffb0ec3e2dbb3184aa35e2d523788c1"],["/page/17/index.html","5545fa539d92cc773335105b9f675c65"],["/page/18/index.html","12024caed4b55520e2aa099e8fe24de3"],["/page/19/index.html","92df9fe2e3ed8b8f46e2013772a22955"],["/page/2/index.html","a8fb2cbd011f8b9f8039f9f708675570"],["/page/20/index.html","27d6977b0e087f12801495f4e4b750d6"],["/page/21/index.html","9a0893db8148670b12ea446011f3e098"],["/page/3/index.html","a98433a6b7ee68b970bcd788a412bae3"],["/page/4/index.html","a743608451ede43f53f4498ab40cf0db"],["/page/5/index.html","3d6692c963147676c096857e81280c1f"],["/page/6/index.html","ec563d6ff8beec03fffb57d696f7dd13"],["/page/7/index.html","32477788b70f76b5e57941a270fb0e12"],["/page/8/index.html","29fbba82f6ce730a1e78a0bf48dc861c"],["/page/9/index.html","733c3f3ee2ef6118f188ae43865880b1"],["/resume/index.html","bd5470976ffe85652ba9eed1653d766a"],["/schedule/index.html","d3830118a5461421a9b9eca5f51360ab"],["/sitemap/index.html","6276fc0c149b9c1bd1cadf04a7df8d99"],["/sw-register.js","70b0647a5b703a09066b191b4e1c0ef1"],["/tags/AI/index.html","21837d7f1973abf2ded1ac5c74af3513"],["/tags/BT/index.html","a39fbf11a00bc6a10981342043de1d59"],["/tags/BaiduNetdisk/index.html","8ce4fed66128b251d9775ba0a828aee3"],["/tags/Bootstrap5/index.html","03019ed143e84fea0d80921b6a2db22a"],["/tags/CSS3/index.html","20cfb3e71cc5aab871af97c877da4201"],["/tags/Centos/index.html","b54ba6a97052215560ab2853e4104341"],["/tags/Electron/index.html","58676c337ccb7b655b537e935dec6b50"],["/tags/ElementUI/index.html","202be903e6bb26982382df1ff220ae3c"],["/tags/Flutter/index.html","8ceff79c5befe4d054d8c9c7d643f405"],["/tags/GAN/index.html","288befca1876e49850cba104821d77a7"],["/tags/GUI/index.html","070070466df1e188aad26a5af8309a98"],["/tags/Git/index.html","8794effe22fd3ba9c3479f70331866e8"],["/tags/JavaScript/index.html","c879ca4bb98eecac757a27daef1d1a80"],["/tags/Keras/index.html","d9bef2b8359af919ed20a2765138dd6e"],["/tags/Linux/index.html","3f3021f8e6ecff47d62f7d459526f8be"],["/tags/ML/index.html","3a807c4e0a1e53b6a435c63b5d94a7e6"],["/tags/NLP学习/index.html","e772cdea04091a238cde68ccc158b626"],["/tags/Nginx/index.html","3fb3f0ef18ad0786346408d71e7ad869"],["/tags/Obsidian/index.html","7ea554bca63d3c8d25a098d3e2a40898"],["/tags/Qt/index.html","d3bb6b2720427d5aaab76cedf6b559c9"],["/tags/RSS/index.html","20fbf4cfb4a5c3651372d8848239e158"],["/tags/SSL/index.html","48de429e79d4e538283fd7c67389e9ac"],["/tags/Scrapy/index.html","be6086f6c73169840d6c82db1345e957"],["/tags/Speech/index.html","3180cdd5d262c66ad5c644c1c4d3505c"],["/tags/TotalCommander/index.html","3dc85e573ecc5bc35fc4ab23fbe023bf"],["/tags/Web/index.html","b4f082767044e4ad2f65b54e271ae206"],["/tags/algorithm/index.html","a637554c44cb9d6c19fc94281eda76f0"],["/tags/bison/index.html","883744b77de1b266765e4b1cbc543a4e"],["/tags/bomb-lab/index.html","4136199925036ca2c8bd72f07de4f2a2"],["/tags/c/index.html","aa5a759bcc1271daf6ff446074c9462e"],["/tags/cheerio/index.html","aca115aab361a74bcb5d5825005f11e5"],["/tags/codewars/index.html","a2cff14eb4a96b35e74ccfd7f314bb76"],["/tags/compile/index.html","f81498ac1a81192edeee22b676d38583"],["/tags/compiler/index.html","378ea2fadbdcb29f2c45864341f7effb"],["/tags/cors/index.html","ad7ad648fd04f93c1c4ee74b7e87d9a0"],["/tags/course/index.html","b05be3f41e84884fbda8f161bd59e1bd"],["/tags/cpp/index.html","d0b78be54d5081ae78e6d33c69c9c6c3"],["/tags/crypto/index.html","9f082ff8228b4cd479b93c088bcf4894"],["/tags/csapp/index.html","e5ffa5e130ee4f5ddf4813a748aef741"],["/tags/csp/index.html","6258054d3d24c51361f14ae8be5e19c0"],["/tags/css/index.html","530c283e443029fd671103f1803fd1f7"],["/tags/dart/index.html","ef24a5b3ab01f32b3d74682716871554"],["/tags/data-structure/index.html","bbb469962546978108552075246c0cea"],["/tags/database/index.html","beb7e367c4014776dbb803d626492f71"],["/tags/deep-learning/index.html","02401607c1878ba6e762126bf54b9cb1"],["/tags/django/index.html","1ee37f494ebe02e33110897699671a0d"],["/tags/docker/index.html","64e494331ef87c98cf4eaadfbcbeac65"],["/tags/dwm/index.html","47e89b2a51b2777a0158f08b321a518a"],["/tags/exercise/index.html","fbc56113e6386ae673da82faba8ad808"],["/tags/filebrowser/index.html","431507c12ccb35ea099045dd44769f7e"],["/tags/flask/index.html","b554a675db683e4e3be7cd8cd589d9a8"],["/tags/flex/index.html","63b03248dbc6c5337aa867ef210d58db"],["/tags/front/index.html","ac5c2eccc4c7a73af33d05d242813bb3"],["/tags/gcc/index.html","6965eba0f18b14fff4955c7c907abf5c"],["/tags/gdb/index.html","6464c47ae1365e7f414cef3a345ec9a5"],["/tags/github-profile/index.html","0f1685be1acfd4decf4487d73848d794"],["/tags/github/index.html","69baaab8347b31e190d3c458819d96c3"],["/tags/graphviz/index.html","a6fa3bf073d06b04ecfa0256bc497d93"],["/tags/grid/index.html","ecb07233c6d9497e66d62ac5186c8b59"],["/tags/html/index.html","8f01a2909d01a5a132142bc411f84b51"],["/tags/i3wm/index.html","4448af403d67fe94429f30756349bfc0"],["/tags/index.html","c0da22ca59607eb9222a03e433653879"],["/tags/issue/index.html","982992bf71bf952162b62834b9055bdf"],["/tags/jQuery/index.html","d272ef8913a9025968f6f42251787b5a"],["/tags/java/index.html","82da1a81385a01c15c28a830405f0e4f"],["/tags/js/index.html","706c881fc81d3c0d85ed8a148ea7bbea"],["/tags/latex/index.html","4c614a502097d85999d3d22e92738a65"],["/tags/leetcode/index.html","5edb71cb32456b77022bd82a32aaf8a9"],["/tags/lex/index.html","37fe75ff45262694d5793b0fa5944caf"],["/tags/material/index.html","b16bc1e82f9787381406a6e77dced187"],["/tags/music-player/index.html","d6090176c298753ca57453c491eb3c68"],["/tags/nodejs/index.html","ee27af40b281b097aed2219d7c316dab"],["/tags/noj/index.html","ed4794e9bea4e329ee7eaaf1eb9c5a75"],["/tags/opencv/index.html","ee8d1290d5749992b37e305e723f8ef4"],["/tags/overleaf/index.html","1c40b242abe84f309785b40fcc7e39ed"],["/tags/pandas/index.html","e45834104d03f13137b525f85f9250b1"],["/tags/premiere-pro/index.html","1a1c5c53b2b245bdd46d4fc31bfd2cc3"],["/tags/proxy/index.html","bab576b307b92c7e06b8a703fe0e6762"],["/tags/pure-css/index.html","c0595e0f5be67241ec72b54364b34c3d"],["/tags/pygame/index.html","63877aeff19aa68a5e75b41a45dfc309"],["/tags/python/index.html","9e62e3d5327ecbfad9c89084dbb5c1f4"],["/tags/pytorch/index.html","b8b883412e1c89524def8915c2ece570"],["/tags/reading/index.html","b4d158e74da0c2adaead19b402cb1fbb"],["/tags/request/index.html","f9e94d983e52c9e8e815609e4ed4546f"],["/tags/requests/index.html","d7dd9d0b730b1da5c8b7d25f8cbc9a8a"],["/tags/security/index.html","37bf4d217392d3787e373e5bed51b8b1"],["/tags/shell/index.html","5b7bd66593762f16782981ccd8ca5323"],["/tags/sign-in/index.html","a30c76768803309c47262420d06865b6"],["/tags/socket/index.html","38fc021ffbb59f81ff8f820debecea7f"],["/tags/spider/index.html","7a32c2ceb688ba8dcef75c025ac3c962"],["/tags/splash/index.html","980ad527539babe7627fb52a1e8b76ff"],["/tags/stl/index.html","a4940b906b256d37d5fa1ade76f1b2d6"],["/tags/superagent/index.html","0f932f289f372e1459cd2fbd02908e6f"],["/tags/tensorlow/index.html","422821090d6ad64664d0f821550aa72c"],["/tags/tex/index.html","dbba14c804055a000585bea1d0c48bcf"],["/tags/threading/index.html","723ed44fa7bd3f56019a7e79cca10572"],["/tags/tkinter/index.html","3f8e5f16d5a45ba3fc374d1f855ce9c8"],["/tags/torrent/index.html","d1f3d6d0a087d44c7e645544ccc61088"],["/tags/tutorial/index.html","953e256c8d7873f1f6827925fa6f416d"],["/tags/typora/index.html","71fe8359732680a2c6a104afd5401b37"],["/tags/uniapp/index.html","88e7892e7fc7bcf884d1472101715cb6"],["/tags/vite/index.html","d9075ffd4feb8be25381101f56b145a2"],["/tags/vue-element-template/index.html","47db3b7eec0dd2d25ecff06b6ee2840d"],["/tags/vue/index.html","5bb9e9510a80381d72397f8fe756611d"],["/tags/vue2/index.html","62bee45e9eb35b7c01e1e93116d7bdd5"],["/tags/vue3-x/index.html","c0f234cf3fc7f7af27a775dc4d3b0f7c"],["/tags/wechat/index.html","620d60b5f9ce670629206e384958997c"],["/tags/wm/index.html","f5b42f40b1388dd5bdccd0ca6e1e6744"],["/tags/wordpress/index.html","48167fca19fc76b66c9388fab073a5eb"],["/tags/workflow/index.html","d35582454f11e89efa9f941b73e0d96d"],["/tags/xpath/index.html","093604c01785f19edb454e187623c4c5"],["/tags/yacc/index.html","5c36d03acb5697a3c0b4de0581a732b9"],["/tags/zsh/index.html","e5007a19073e9689762e677197c391ce"],["/tags/七牛云/index.html","23eacb29ecaef5b16831fc946889d094"],["/tags/函数/index.html","3dde6591981acb6ce10376c912c632d7"],["/tags/剪辑/index.html","32096fd4ffdde2ccd79293e0282c27ac"],["/tags/存储/index.html","5ef3669129c8defa7c5abc069bdc367d"],["/tags/实战/index.html","e733b865b60714e0d5db13365c24176b"],["/tags/工具使用/index.html","07be898d922fea58b6197c2440b92b41"],["/tags/建站/index.html","b7f92675dc3c6768b43a232e0b8d6922"],["/tags/微信小程序/index.html","ad57ef111668fe1d0067cf238d9866e4"],["/tags/指针/index.html","4cab3d0a1f838dd4ab1c7c8d428dc6a7"],["/tags/效率提升/index.html","fe021ab5026753ddd07bd7d00988cdcc"],["/tags/汇编/index.html","2c8d4f04d2157eb69c04f71844575e22"],["/tags/浏览器/index.html","358537171f7252fe609f6391baba9d77"],["/tags/爬虫/index.html","692d7192e72b7ac4f3d527945e253901"],["/tags/算法/index.html","3c5f5b0c775ccf6b80f2f912455a1559"],["/tags/编译原理/index.html","4d5435bca563a3d51e44da5d81afb313"],["/tags/获取地理位置/index.html","99441dff3b1b75fc0db3def7eb6d6809"]];
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
