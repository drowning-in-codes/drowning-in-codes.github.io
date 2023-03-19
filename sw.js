/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","d2fe359b9fc6680f049f0fa151d45ded"],["/2021/04/20/稀疏矩阵/index.html","d268b6ca7f7e049f36760c90559e6bf8"],["/2021/04/23/广义表简介/index.html","9603d6c63a347a24acf7d1629047dab1"],["/2021/04/29/关于指针和函数/index.html","69937aca2b4bafe76ea37e657ff04b9e"],["/2021/05/10/哈夫曼编-译码/index.html","0d6207922a5c054258041651e9437d00"],["/2021/05/17/数据结构noj_2/index.html","5f3e90d483244feae4663a00ebc7fb99"],["/2021/05/30/数据结构试验/index.html","0059ee24e534c1a3aafa72795c442e77"],["/2021/06/12/数据结构noj-3/index.html","cf7fbdf5d3d9cf15ebba402910eeeabd"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","ee49c68f23cea87f71ddaeae74faaf76"],["/2021/07/08/课程资源分享/index.html","3b44b7eb939b5c8353209fdb4a5267b5"],["/2021/07/20/Scrapy-下载图片-文件/index.html","aa92585bd03c636cf4b5354276a9ec67"],["/2021/07/21/Scrapy-动态网页爬取/index.html","6cbc52a5522b7b1e02b71e5de9441163"],["/2021/07/21/疫情打卡/index.html","6aed982684311d0d0c9132c5c127e7da"],["/2021/07/29/Scrapy代理设置/index.html","bb297ed5a34a9910628d6c4adbcd8ef0"],["/2021/07/29/数据库认识/index.html","e00d5cd3180ee62d4117df23020913fe"],["/2021/07/31/Python多线程学习/index.html","e2553155bed111b0638dc35f287c1c7e"],["/2021/07/31/tkinter-requests练习/index.html","9dbd7acd502a6f84920a0439921961fc"],["/2021/08/10/Git学习/index.html","988166240dbab1d77c53ad265590f8dc"],["/2021/08/15/pygame实践-1/index.html","4b10d654bcbfb82c725d2a2ea30504ce"],["/2021/09/06/微信小程序开发/index.html","dd7ed5b218e067b58732fb2bae659711"],["/2021/09/21/命令集-1/index.html","112f03e14dc9dc2be6b204b9bb52d708"],["/2021/09/21/命令集-2/index.html","49223c148db1057ff39adea1bccc4785"],["/2021/09/21/命令集-3/index.html","0cdd799ff211df4fb5851d2f8207246a"],["/2021/09/21/命令集-4/index.html","aee6ca797645063b8c01242682bf5408"],["/2021/10/03/socket学习/index.html","07641c5a2ffa3c1e0439a635e6747a95"],["/2021/10/10/dwm入门/index.html","889446a0e80c908ca811fadefe066d87"],["/2021/10/10/安装ohmyzsh并配置/index.html","e51b30417e83bbb63e020db76296c238"],["/2021/10/20/css学习/index.html","5696ee518c176e5c86ae4333bf038fec"],["/2021/10/20/wm入坑/index.html","331e65f401269aeeea682d0f753203fe"],["/2021/11/03/微信小程序学习/index.html","b955d67a3193fec4f43a767df833f1be"],["/2021/11/04/css揭秘/index.html","59500794592f7cef52b744ac64885188"],["/2021/11/05/css-练习/index.html","89b89298d36783cb3a1d7fd5b412259a"],["/2021/11/21/命令集-5/index.html","992ef0daa5be3c5554527abd42ce5096"],["/2021/11/21/命令集-6/index.html","095692a6cb8538bc15646ed5f5444599"],["/2021/11/21/命令集-7/index.html","8e083dd066990a33edd3c012a68d20ae"],["/2021/12/01/搭建wordpress/index.html","d937abdca4e6b46057420a6eece3fb8a"],["/2021/12/08/python操作百度网盘/index.html","8f7e89a5f7ea9ea76013317127b29b59"],["/2021/12/14/js爬虫/index.html","cfa8bc41d4c795c7435d285cf03ce7f1"],["/2021/12/25/为网站申请ssl证书/index.html","a0611433ff1cf051b71454643a5635cf"],["/2021/12/29/使用七牛云为网站提供服务/index.html","128a350ddc83a90ad16b616c1e08a8f5"],["/2021/12/30/jQurey继续学习/index.html","d9216137a4e5e4c383a5d00841d55e49"],["/2021/12/30/jquery学习/index.html","1da454fefcf3e06929fca1d1654f797d"],["/2021/12/31/vue学习/index.html","9f28181293aabf5e42e4d07c0a2163c8"],["/2022/01/02/疫情自动打卡/index.html","60e1e535dc92928256093b8bf1c4d32f"],["/2022/01/03/javaweb初体验/index.html","dc03cfcc000357860badb6f3f21491e3"],["/2022/01/04/codewars练习/index.html","cb0267fedfc180f2b1c86300c02ca6ee"],["/2022/01/05/Spring学习/index.html","b757c37da9455c761b38667c2b98bd3c"],["/2022/01/05/vue实战/index.html","8a27100a739ed19f6d3b6391a5893f0c"],["/2022/01/08/gdb-gcc学习/index.html","2057c5113c6303cb459efd978bd86f51"],["/2022/01/11/python-opencv学习/index.html","ab55854595903d4b27b8e81920bd4487"],["/2022/01/12/汇编实战/index.html","8846136b4f63d45bce8825dcca9be167"],["/2022/01/17/pandas学习/index.html","d9e3e729fe5c34f2bfdd44417cf4fa17"],["/2022/01/19/可视化图的工具/index.html","b602fef6770aba44bb8b992fa108f410"],["/2022/01/19/机器学习入门/index.html","7beca8e4632e41a8caca6f97ae7c4e9b"],["/2022/01/20/cousera-ML学习/index.html","ebe816cf4ac5873106538d1c9f96904a"],["/2022/01/30/typora解绑后出现问题/index.html","b03d406a3b296599b390b45554c88918"],["/2022/02/03/NLP学习/index.html","bac054b11af53d28aa8c0564e03220cb"],["/2022/02/04/Web漏洞学习/index.html","899598dd40564cf0ca4fdd1faac7e330"],["/2022/02/04/pyqt学习/index.html","76ad414ff71ec7c6a960ac965ccf02dd"],["/2022/02/04/python爬虫/index.html","1242e1ec19e3c4d68345d1e3ec8808a2"],["/2022/02/18/Electron学习/index.html","d1d0a8d685cdf393459e20734cf76baa"],["/2022/02/22/疫情填报字段解析/index.html","1ba1a4020ac1c8677835af141654d6d9"],["/2022/02/24/Bomb-lab实验/index.html","66cfcd8912dbb73bef57c1d2c6aab1e8"],["/2022/03/05/nginx学习/index.html","035f44f8b6e49b28267a2a525cfc472e"],["/2022/03/09/汇编原理课程学习/index.html","c363822b637874a1906703c02cc23195"],["/2022/03/11/Keras学习/index.html","6c4c36e9f8836efdb6450877906153c3"],["/2022/04/01/graphviz学习/index.html","7761f06d0a28c951963cc49e1e6794d9"],["/2022/04/07/django学习/index.html","86878cef05afc9ba37953698b44661e3"],["/2022/04/11/密码破解学习/index.html","132731df765b0d8173cc61e0bcc9e250"],["/2022/04/12/flex-bison学习/index.html","e443e64d052a06a2dacffe771c062121"],["/2022/04/15/pytorch学习/index.html","2664fdbdda42ab8709e257730ae9e50b"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","9884a30a157eb7d500949958d095e384"],["/2022/04/23/写一个音乐播放器/index.html","ad2913c33dd0ec062905f254507dd6be"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","cea1f0ae211439f6dbe33a97e9fea7ed"],["/2022/04/30/GAN学习/index.html","07f273e696f866e9c58ad4d560a22b39"],["/2022/05/02/html精学/index.html","d911bf6c8971736d556af3e3fa8eee96"],["/2022/05/06/write-a-compiler-by-yourself/index.html","de5d3877f81bf85a2430ecefb1f51594"],["/2022/05/30/acwj-01/index.html","f1dc89cc79cedbb11cdd46ae54c52bb5"],["/2022/06/14/animeGAN/index.html","edac94ca9acfc62921aba7ecad6b4788"],["/2022/07/09/c-与算法学习/index.html","3750c78e3b6f0a40bed0737274b7e591"],["/2022/09/19/flask学习/index.html","8deef13da46c39a75493dc91db1bbb1f"],["/2022/09/22/cs224w学习/index.html","a59bb4429e3b3c4f4fd76cb2c6d972cf"],["/2022/09/28/记录一次wp重装/index.html","89d51b08ffb5d70c13240ca0ee7631f2"],["/2022/10/01/Obsidian学习/index.html","717885c8257a75765efaaaaaec132dea"],["/2022/10/08/vue-element-template实战/index.html","560fd819640281fcc7c7523d22bd3d4c"],["/2022/10/25/vue网上商城项目/index.html","8957f961bf10e60fe73acd4b43ce8927"],["/2022/11/11/leetcode刷题记录/index.html","b305fb9f4ba6decad78901300b81bcce"],["/2022/11/11/使用overleaf优雅地写文章/index.html","4b077f3f2c1adf793eccab7f2534e128"],["/2022/11/22/磁力链接与RSS订阅/index.html","f311a299b0912d10a8b99e97d28eb99c"],["/2022/12/11/uniapp申请获取地理位置/index.html","5a8d1f61ae396bcc518b580f75187d46"],["/2022/12/26/pr剪辑学习/index.html","84b187df2e4915d4651eda90eec30198"],["/2022/12/27/css中的flex和grid布局/index.html","9f0e089556de322aeec4dafbe64d6261"],["/2022/12/28/Flutter学习/index.html","5d118b831a1c453d2a9ffad587e90cc8"],["/2023/01/01/美化github首页/index.html","61fda5def498d19b3c87bfeae32de733"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","461c3a96020ce6642c68db8264fb5f58"],["/2023/01/04/构建微信快捷发布文章工具/index.html","25aa0dc4255f296bdd9d3e4a927a8079"],["/2023/01/14/dart学习/index.html","2ada4ebbef3a59e5cbf40f035343f767"],["/2023/01/23/闲置服务器BT下载影视/index.html","a0d9ab373a6993bbb7ce4f14909b8dd6"],["/2023/02/07/TotalCommander使用和学习/index.html","f693fdb74786a25e7c404dcb373e37cc"],["/2023/02/13/docker学习/index.html","47285248032d8b9a3b212bac9b920218"],["/2023/02/17/DLHLP学习/index.html","e0161d37869d1fe7ca7ccef6c9be8467"],["/2023/02/18/学习purecss构建自己的css框架/index.html","b4fa4d96c59b641441c523b9675180ba"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","a74dfdea8fa70697512d5189e3b57e67"],["/2023/03/05/STL学习/index.html","a07db6be47d9e8ceecd0c20c6f770009"],["/about/index.html","45609a1ab261812f239e295d62685a21"],["/archives/2021/04/index.html","72af6cb5f88983d8710050c95ba7717b"],["/archives/2021/05/index.html","eed15e041057ed24be52a6fb9e93aed6"],["/archives/2021/06/index.html","17d9aac79711e867c2778cc6058ffa47"],["/archives/2021/07/index.html","3ca0fdf6ed61beeac48d33ac9b6d7535"],["/archives/2021/08/index.html","749766a458faf82f4dc00f16b917a3e6"],["/archives/2021/09/index.html","e353fdb10576d54dcad3b22a1615b79b"],["/archives/2021/10/index.html","ee5df14b7d5e015317fde7691e469ef7"],["/archives/2021/11/index.html","20f15bb84831ad56234d0c5c78061906"],["/archives/2021/12/index.html","38c4217370ccd8cfe5d8b94e42996a5f"],["/archives/2021/index.html","bef12a9467888e4785390eb3bba99791"],["/archives/2022/01/index.html","1ac5cd131f8fcaf56f62ffd475d78991"],["/archives/2022/02/index.html","cf082ca85fe6ebf39667899b62ab4152"],["/archives/2022/03/index.html","f7755b6cd3512a222098269230399a70"],["/archives/2022/04/index.html","b670cf11315956992a75c01bf1685033"],["/archives/2022/05/index.html","783571730951ff0f16b719e8f4629a04"],["/archives/2022/06/index.html","9b6b07670eac7738c884ce9c65156cd9"],["/archives/2022/07/index.html","762bb7d5acb3d14025e42cee6efbfc08"],["/archives/2022/09/index.html","53b83840a4e016706d29a2fd864dbd8a"],["/archives/2022/10/index.html","d0840c80dbaae2b76a7c345b320bbccd"],["/archives/2022/11/index.html","e987bad37b2514d6f11bdb52fedbbea5"],["/archives/2022/12/index.html","115808794441da81b813647cf7fa7679"],["/archives/2022/index.html","e817689b93aa407b33942cd7c1ef173f"],["/archives/2023/01/index.html","0ad4ba411a7e037cbdef87e04c2cde69"],["/archives/2023/02/index.html","5e966afb5a31b8f5c0f8f9eb68f5dc10"],["/archives/2023/03/index.html","7b953a5dfb0af84733e413f949d37c82"],["/archives/2023/index.html","1c9da843198db17b2196b83db9540259"],["/archives/index.html","0f025d320c7abb97e1f956ba270ec87e"],["/archives/page/2/index.html","8ee36b74258a2dc1a8be5300a02eea54"],["/archives/page/3/index.html","2472d110e4efdd3ffe1125d6f89ab811"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","7b04f071120397cdde7954fe14bce3b5"],["/categories/ML/index.html","9cf980d5f5ff30432590d3a11d3c28ce"],["/categories/Nginx/index.html","8144668f6d94aee99baf817da96bcc4d"],["/categories/Spring/index.html","6322d976bd7443d17bb37d231f60e314"],["/categories/course/index.html","b83a057947433d6952c1c595cff60558"],["/categories/django/index.html","9722147411885d3cb0f4d89b27f915f4"],["/categories/fun/index.html","c5db142562d4cdab7ae8a5cc18582c16"],["/categories/gcc/gdb/index.html","503e71a2ccfde9c54e53fac8f0847018"],["/categories/gcc/index.html","f0596c245740936081fd546910879660"],["/categories/index.html","89d36dbc15e6ccf56a8c27a60a98a29d"],["/categories/java/index.html","b84c7c9c65a7345271b9b7f87eb8a6ce"],["/categories/python/index.html","f85676943edbe07c4320f514b8fb2ee8"],["/categories/study/index.html","ff0dac7c5a3613a131c9f001bd95114c"],["/categories/vue/index.html","a14d62dbfe3f299a47874dc6e8537982"],["/categories/误区/index.html","4dcb17396c6b36bbe610f86d44cdcc93"],["/commonweal/index.html","752a4780c0e448673b7257a1608dc2e1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","dfce4a5e4329e1ef43ee6ff5c91a46c2"],["/home/index.html","43bfd5cd7da70cb0e8c3bfb19a0abd70"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","fecf23f7d08d6bc07a6f604d544a55be"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","352a1dcbdc084a138345c4f5aea64c06"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","2e07e9f27700018d0a803b617502ab19"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","364258a85630da29ed75a0113469580d"],["/page/11/index.html","f119f1dc34d5ba1e6e14e209c6b22d55"],["/page/12/index.html","8c735528f5573bfb6ea293e254c93748"],["/page/13/index.html","83fbc6a3bda63fd5bfe912909960f83d"],["/page/14/index.html","6ddd96d2e8f9cda2e282ab2689aab173"],["/page/15/index.html","3cd2385d608f907f918e640c22694c55"],["/page/16/index.html","44a1e5dc07b1fd92e635379fd6837b17"],["/page/17/index.html","de88443add8b52a76b9c99d0c71b7100"],["/page/18/index.html","5db68e177b2922e8c77f302b58cf8a7f"],["/page/19/index.html","bbb0a70e5551b1a8c5b71cb953e809d8"],["/page/2/index.html","fb744dd8cfc91c1f943bf12ab9e2cc2c"],["/page/20/index.html","d34e860bd8f23576c2579792f35b428e"],["/page/21/index.html","4dd4ad4b1ad96e108f68481fb9ff39db"],["/page/3/index.html","a90369f745237a3385f22c4c2f1480cd"],["/page/4/index.html","2f80aef6df0ffa8097e3dff11ce4784d"],["/page/5/index.html","69d15e19c90a35dc6bed744d46252d0e"],["/page/6/index.html","0c828ca004f1fd7eb430a7d09247d6cf"],["/page/7/index.html","925de0c44f595ce828ea1cef087507a1"],["/page/8/index.html","75f156136fa4b90900a3a6f85205d79a"],["/page/9/index.html","239d6f0890597fb51990a617cd032ada"],["/resume/index.html","064bf48c71de650b50dae7cc10cc51f2"],["/schedule/index.html","89353682fcfdd6542247074e60e74665"],["/sitemap/index.html","32652278e17c7ee37c64d1408276ee96"],["/sw-register.js","18083d724517b62f832533d776d39a2d"],["/tags/AI/index.html","e00d52787eea3506b7b517ca7651c43f"],["/tags/BT/index.html","438216e9e543aed1cac6057509b7e9c9"],["/tags/BaiduNetdisk/index.html","3b17a1f70589ed833d6e34e58675e1fb"],["/tags/Bootstrap5/index.html","9ad2880f07a77afa4ad22210db633989"],["/tags/CSS3/index.html","8a4bc81c5305815be7e9cb2d4c497e9e"],["/tags/Centos/index.html","8713c4fae2dbaec9d5b952284b318cbf"],["/tags/Electron/index.html","06a584d4744c49692a8b67ddb076fa62"],["/tags/ElementUI/index.html","c4632b250742688ca35b2e746aa114c1"],["/tags/Flutter/index.html","9b6d696d97b2e1069074ea97a62db89a"],["/tags/GAN/index.html","f843ec87921db0158459d91bdf2750b3"],["/tags/GUI/index.html","a66c255a091dc77c1e24efeb7d83bff2"],["/tags/Git/index.html","8e5ca4eb88633be2f1c122cf51b1230a"],["/tags/JavaScript/index.html","e9726f7126be18dc94c77bf1063a7ce8"],["/tags/Keras/index.html","2ada9cafbdb6017a231eb00d184aa521"],["/tags/Linux/index.html","c54d3c28b4c935385884c0cb3a2658f8"],["/tags/ML/index.html","71db2e13a26c7361bcd58647a5496012"],["/tags/NLP学习/index.html","3244195f07ff3e1330cb2a05642e2569"],["/tags/Nginx/index.html","3fd8baec5048639282b2b55b2770ca0f"],["/tags/Obsidian/index.html","8b7c04fbdc46152dfe3b0d345bf3222c"],["/tags/Qt/index.html","2cd090c0af5ea28e86f4af36a738612c"],["/tags/RSS/index.html","e8d9d9339e093810fac644c1ac883e44"],["/tags/SSL/index.html","4a2683c985df385710c35fbeb3effaf9"],["/tags/Scrapy/index.html","aebfa86b86cc6d0f753b8440ba4101f0"],["/tags/Speech/index.html","d1b1b0f3a547ed06b076c939d06c3ad4"],["/tags/TotalCommander/index.html","0517dffccb1214f0440b14eb0d34e93c"],["/tags/Web/index.html","39792420163bc1452b5b47e091b3cd61"],["/tags/algorithm/index.html","c973e3f70d46107a5627aaf6709c9de7"],["/tags/bison/index.html","53763cab40981acd20a3165b421b56ca"],["/tags/bomb-lab/index.html","38ae3fad5c582fab81c78562a59fa238"],["/tags/c/index.html","6453d7d7a8dedb4884ac5d8f469f8a86"],["/tags/cheerio/index.html","a95da346529c8dfd93502f90881da8c8"],["/tags/codewars/index.html","7d7b921f8fb207ae9388e900cc9f4945"],["/tags/compile/index.html","3b4cc8da40ab08207a1a15846ccdb2fd"],["/tags/compiler/index.html","8b138d0afba9928a4c26636c267c794e"],["/tags/cors/index.html","3022654b441ad4dc4a05f0d9a404e308"],["/tags/course/index.html","bb95e9a5b59ff20c914be88c05c91745"],["/tags/cpp/index.html","be6ef6ad30a97488792447152eecbe33"],["/tags/crypto/index.html","3d5437eee537b307c9d71e41e0f2f090"],["/tags/csapp/index.html","3101b860b8d98ed65dcb431c30e9cf48"],["/tags/csp/index.html","7a88d106d6171f967803b12455f98b85"],["/tags/css/index.html","719b54adbd6a524984f36d6e7af35bec"],["/tags/dart/index.html","27ace2418f40406af68d6933ae1f8ec8"],["/tags/data-structure/index.html","8ec9e9c09a0b1f0a4b4271bf2bafd5f8"],["/tags/database/index.html","9264c4fff3dc3baec0fad8840e72b05f"],["/tags/deep-learning/index.html","0295d16ce1cb3812659d5f88dfad933d"],["/tags/django/index.html","9b97e8bd302a9dad7280a83e3b845b42"],["/tags/docker/index.html","8cd72a6b606e9c46547d29ca792c4f91"],["/tags/dwm/index.html","38cf9b662573c993aa59c852fa46de52"],["/tags/exercise/index.html","cb0485fd46cbaaf45b8f3315683f0690"],["/tags/filebrowser/index.html","d7903473e972659d66f24b85c0e8f7ff"],["/tags/flask/index.html","edfcfb779d72f145c89cfb5185df0826"],["/tags/flex/index.html","51f68c500e645568f4a81c18d1e533cc"],["/tags/front/index.html","ad5b9875a3c16fb1ed76f8bdbc19f80c"],["/tags/gcc/index.html","31041e59ca6670c706473052e10f232e"],["/tags/gdb/index.html","4525db74a7314773e1e73275eadc68e1"],["/tags/github-profile/index.html","ef1cd71103d5da23befdf4c49b912a76"],["/tags/github/index.html","ff0f06e0674480f155468e21ac0611cc"],["/tags/graphviz/index.html","f0781344e1102493ff08c20f3946bf8d"],["/tags/grid/index.html","2a6937320172b723862f3cd199dda016"],["/tags/html/index.html","775d1b3987e2b7cc995454e4e5135125"],["/tags/i3wm/index.html","ff59865d2a51049813f5f1ab84eece5e"],["/tags/index.html","b423ff027ac86679b48eec63c08200bf"],["/tags/issue/index.html","2fbdc4815cf0e9b210e13420bea74260"],["/tags/jQuery/index.html","bb4a7a9ace63a4a6741e46c2754bd456"],["/tags/java/index.html","bd7d1e2dff8db280f99ffbf15e157aa8"],["/tags/js/index.html","82310184d33eb8a720b2bc75603b8dd2"],["/tags/latex/index.html","5d982e37c70fa4b8c56fdd1e592b02e8"],["/tags/leetcode/index.html","1c616f9e8c4764acad228d577d032c8b"],["/tags/lex/index.html","8870c98fee58bb403f5ce3dcf906df3c"],["/tags/material/index.html","4f87eab70dbd7f83530cb3d70cab72a9"],["/tags/music-player/index.html","93b5acf317aef85e419795399db1c269"],["/tags/nodejs/index.html","69029c91d98131f086163e7e8f2bf277"],["/tags/noj/index.html","9e46421e3af55e7a79d09ca2854c1970"],["/tags/opencv/index.html","0759e02668b8e3b64cdd7b603d2bf360"],["/tags/overleaf/index.html","ec36a27d5293659c9cbc5ef4030ab947"],["/tags/pandas/index.html","121ab96eff26ba068fa804f62cbd0784"],["/tags/premiere-pro/index.html","0023c62b364a5437ef87d02431d970a1"],["/tags/proxy/index.html","36cb6e80a21aba3d1ad26247b5dd2f22"],["/tags/pure-css/index.html","56ae616005a9feea2f50628b44d9fac8"],["/tags/pygame/index.html","78ba06f2ca0dae1cb14af2d0b0d3f0ac"],["/tags/python/index.html","f45914dc49b9a253e21e5f218ce0888a"],["/tags/pytorch/index.html","dbaafb14f48f855a57a34f173828bea7"],["/tags/reading/index.html","d09bf8d8f6d8991463ac8c8a592dbc8c"],["/tags/request/index.html","5437c0577cb0f5f1c53598c8959fa2ab"],["/tags/requests/index.html","a5789f375b298e286ecc08552897f2d6"],["/tags/security/index.html","c6cafa2308b124c9421b9c67762d6a21"],["/tags/shell/index.html","02528c80b2f4c656294ebf0749f9a3a2"],["/tags/sign-in/index.html","13b03f2ad70d93e5b97a1787382ceecf"],["/tags/socket/index.html","0087f2a0c4dc1a09f1c5e9b6ab084baf"],["/tags/spider/index.html","ac8ce1df6d1bcdfca7273eb57c3ab2ec"],["/tags/splash/index.html","c036627201ef49c21e2ca3709cdba705"],["/tags/stl/index.html","94859f10d1c659c6dff2616c2086fe5d"],["/tags/superagent/index.html","c434031e4e9a9b6c39baddf89b7376b9"],["/tags/tensorlow/index.html","a38c3e6cb025b782e92a3aa7a2d196ce"],["/tags/tex/index.html","d435a3d802f29e82b1b3b93b7435200a"],["/tags/threading/index.html","0a25b2144805a7add7292ffee5a2e733"],["/tags/tkinter/index.html","04cc8e33cd6e0559805f0770fdfa682d"],["/tags/torrent/index.html","249f34a4f7c034fef662d1a0a9ca37dd"],["/tags/tutorial/index.html","1bf83d16fca989df84aaecfefa295007"],["/tags/typora/index.html","6fb79d0c96ad2425e5d4af4cb375c188"],["/tags/uniapp/index.html","d3e6f6df84da7def6bb54e5cd93f065a"],["/tags/vite/index.html","b3fc92a159656212379e5e786559d386"],["/tags/vue-element-template/index.html","c4518827b08fa047b8d27b4025c51742"],["/tags/vue/index.html","2bdd667abd3a72f6f8415afb2608dd44"],["/tags/vue2/index.html","a41993d544c8bd65bc98b7d4976c8e91"],["/tags/vue3-x/index.html","4c30c06e1268d77a11456a26702b3f5e"],["/tags/wechat/index.html","04ce06fbbe51bbabc23dc0c558edddc9"],["/tags/wm/index.html","df40ff9182aa2b3bb1ccade50e150c4d"],["/tags/wordpress/index.html","ee53183f7d3e4e139e4d7bf71ee68767"],["/tags/workflow/index.html","9ce02d9abcc8503642d64094aa1f29ed"],["/tags/xpath/index.html","ad320cab6029986eb5692c2399bb3013"],["/tags/yacc/index.html","f8f9fbc9aa650ea707052e53a0663901"],["/tags/zsh/index.html","4620added35f0062bdd05011b44287bd"],["/tags/七牛云/index.html","0241259f68c2dcf8053280e13633225d"],["/tags/函数/index.html","637e139359a5d5eef68c38bc11559b17"],["/tags/剪辑/index.html","9c3f872c08c058e5c4dc6501c8dbf65f"],["/tags/存储/index.html","034e993de998f1be058c643a0b407198"],["/tags/实战/index.html","727934aed503b169751ca1d85c33ca4f"],["/tags/工具使用/index.html","e338d61f0a19623a13df13854d7ea576"],["/tags/建站/index.html","639576517aecdf5e34a87dd8bac80b1b"],["/tags/微信小程序/index.html","95c0377e823b3c63ae1ee695e2f57048"],["/tags/指针/index.html","7a94f5d82de3863429c6e0f5d762a9b5"],["/tags/效率提升/index.html","36407db6b14084c357a4d62d586cddf7"],["/tags/汇编/index.html","e6f4d67caad64b2c22e6323cb0343d2c"],["/tags/浏览器/index.html","9fc4cdee29de71d553519b8ad5664be4"],["/tags/爬虫/index.html","50db81c5396080f1221349746b4c5904"],["/tags/算法/index.html","83893142aa304059c2edd01e9bcfcbb5"],["/tags/编译原理/index.html","2094cadf4adf2c0d9b1cbcc088397ebb"],["/tags/获取地理位置/index.html","52202a7ca3ae058732ef1b61356e79ef"]];
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
