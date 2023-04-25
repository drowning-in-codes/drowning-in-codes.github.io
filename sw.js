/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","68e15a6edc403b77443d7f00008830d4"],["/2021/04/20/稀疏矩阵/index.html","daa95689db7d2953db62e9ae69b976c8"],["/2021/04/23/广义表简介/index.html","857c93f8dbe28dfe58a9761fea8134c5"],["/2021/04/29/关于指针和函数/index.html","134bc77e4fd6a433b04b235a6786134f"],["/2021/05/10/哈夫曼编-译码/index.html","546798613aa39f98720fd3425688f33a"],["/2021/05/17/数据结构noj_2/index.html","cd9d32f491e5bd4d4046ca44932c437a"],["/2021/05/30/数据结构试验/index.html","7f528289bf206ea52a7c21940dee6178"],["/2021/06/12/数据结构noj-3/index.html","d8f01f991e8569fa65a57d6022e17144"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","38bd377d9bbd93ed55a1e8696adadf97"],["/2021/07/08/课程资源分享/index.html","ba93d490d7b1ef1e54f6383d637e7c72"],["/2021/07/20/Scrapy-下载图片-文件/index.html","fc09075babbc2da7c88517bfae007081"],["/2021/07/21/Scrapy-动态网页爬取/index.html","730a4b82a71f7b8b58a32d53c984f763"],["/2021/07/21/疫情打卡/index.html","a82a43ca8d6933a1e396069056c87dfe"],["/2021/07/29/Scrapy代理设置/index.html","6cb3b2ada0a2c86baa966d28d4f0b953"],["/2021/07/29/数据库认识/index.html","61b6ffb3dd8d228d1063f9be15f2bcfc"],["/2021/07/31/Python多线程学习/index.html","603057e0df1eb3246d0c13f7d63ad5f7"],["/2021/07/31/tkinter-requests练习/index.html","5e4f287b045c04de20f9641741309767"],["/2021/08/10/Git学习/index.html","784cebbfda87b69230aaf7bee92af979"],["/2021/08/15/pygame实践-1/index.html","8ee5a75291307853bb822fb50087dae6"],["/2021/09/06/微信小程序开发/index.html","073ac47f2fa893cc27affd116dc0ed00"],["/2021/09/21/命令集-1/index.html","8d6b9a00a44a651bbff46731906f6814"],["/2021/09/21/命令集-2/index.html","8230167bc6ea0d11ae4bc230ca24ae8d"],["/2021/09/21/命令集-3/index.html","de49a556d0c0459c1f090fe39c9ac339"],["/2021/09/21/命令集-4/index.html","12e383a49b8f165afd0c5f41c167d21f"],["/2021/10/03/socket学习/index.html","25ea7975cf0b445df70ffc91394caa84"],["/2021/10/10/dwm入门/index.html","79ca5af30c0df74fcce53e87b6395275"],["/2021/10/10/安装ohmyzsh并配置/index.html","d12d2ce20a564255d992ceae74878f10"],["/2021/10/20/css学习/index.html","47f56c466ca25caca55634b1768dd0e7"],["/2021/10/20/wm入坑/index.html","24a4fcd0b4d0e34c1f3a2f42f2eabc34"],["/2021/11/03/微信小程序学习/index.html","c4be7d27da109f59ee9825b85a1aff59"],["/2021/11/04/css揭秘/index.html","a48ebde3af46af27b6aa61873a40bb81"],["/2021/11/05/css-练习/index.html","5457af5e7e1a8cdf949cecb63ee8f8db"],["/2021/11/21/命令集-5/index.html","97828f7386dc30333485935d66cb88f1"],["/2021/11/21/命令集-6/index.html","ef05c0c90a420aaf0994b1a683915871"],["/2021/11/21/命令集-7/index.html","4b325abeedd697df5b582020fa9d3816"],["/2021/12/01/搭建wordpress/index.html","900e17d2ac1feefc6da6f58ecb7ced7d"],["/2021/12/08/python操作百度网盘/index.html","e957b42e573d9ed764d3ca011ad54677"],["/2021/12/14/js爬虫/index.html","a7c8c13888b468b0811a1767c58eac66"],["/2021/12/25/为网站申请ssl证书/index.html","ad802aa58412af7d2ef6e4bbb7c2e2c1"],["/2021/12/29/使用七牛云为网站提供服务/index.html","185746e5487c586ef9e1ba8a1b2dddd2"],["/2021/12/30/jQurey继续学习/index.html","4ed1516943c2aae4c9190319084f22b9"],["/2021/12/30/jquery学习/index.html","fed94c0b77d521b482ec2ffd468a3683"],["/2021/12/31/vue学习/index.html","6847d0d6cf6e3a4a72b6e860be1e49d5"],["/2022/01/02/疫情自动打卡/index.html","4cb2d57ccf8c1f4ed181f48ed7ae5167"],["/2022/01/03/javaweb初体验/index.html","753139ce43c92bfbbc8f3e631701d68c"],["/2022/01/04/codewars练习/index.html","2578cda35b92c65fb4f531805c30cf73"],["/2022/01/05/Spring学习/index.html","30246522fdb869a42322a07cab13f0e7"],["/2022/01/05/vue实战/index.html","6789bb38ad05ee351d693549929adadc"],["/2022/01/08/gdb-gcc学习/index.html","4a63a24e1a67a55425e246617fe48438"],["/2022/01/11/python-opencv学习/index.html","e56217696ad02c6377aa02eb3abf7a15"],["/2022/01/12/汇编实战/index.html","3f208a016bfc3aae58175b0241cd4cd2"],["/2022/01/17/pandas学习/index.html","41e2fce4b38fc3bbde2853d550b60b7f"],["/2022/01/19/可视化图的工具/index.html","80ec55511319e0f7b12143194a28e01f"],["/2022/01/19/机器学习入门/index.html","422cc5fd1b60f12e5c6911f2521faaf4"],["/2022/01/20/cousera-ML学习/index.html","2e255da3d103ddf8a644ae5fb038bb48"],["/2022/01/30/typora解绑后出现问题/index.html","43f11400ef077db6a2d4d67ac0aeab82"],["/2022/02/03/NLP学习/index.html","6d0deb584fae3e74378b58873e3a54cc"],["/2022/02/04/Web漏洞学习/index.html","9f2e51c3461e243a4ca885632d817499"],["/2022/02/04/pyqt学习/index.html","78f299f9ceee1c7a0241b92ed6759128"],["/2022/02/04/python爬虫/index.html","ed4007f7d41808bac0740601079f7fdc"],["/2022/02/18/Electron学习/index.html","dd62b2d8d06d627502bbcd416051babb"],["/2022/02/22/疫情填报字段解析/index.html","815b62daa9d48cc51a9d6f67040fd8e3"],["/2022/02/24/Bomb-lab实验/index.html","4838a2077ed4623f714c12c931debcff"],["/2022/03/05/nginx学习/index.html","3111e3629bfe028fdc1789f1cca4a75d"],["/2022/03/09/汇编原理课程学习/index.html","d7d97c1adceb77d4e1f115e9cf2401f0"],["/2022/03/11/Keras学习/index.html","501f5ac7a8255c983cccf51c36e1b987"],["/2022/04/01/graphviz学习/index.html","d072c59a76e05ec0edf88b6ec7bcce09"],["/2022/04/07/django学习/index.html","c485a321182e4409c5926b4e653e6d42"],["/2022/04/11/密码破解学习/index.html","d8e34d3c9731f66d66a1dfb8ba887310"],["/2022/04/12/flex-bison学习/index.html","51baf84c98e1fa26dafca1a9ae24af5b"],["/2022/04/15/pytorch学习/index.html","7654a9782343b486a3982629053016ab"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","84b4d8b7afa5553181e538cc47d2c5bf"],["/2022/04/23/写一个音乐播放器/index.html","346d9442b8dffca170c7748719b230b5"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","d48fd0d3b7fc6cca6a6728585530a292"],["/2022/04/30/GAN学习/index.html","48b6d2618b96f6dd1a300e49613f072f"],["/2022/05/02/html精学/index.html","f62dc83c196c7a60d94da9ef398e9e7f"],["/2022/05/06/write-a-compiler-by-yourself/index.html","5cbf3a367138e07f04f1c96616a6bbb6"],["/2022/05/30/acwj-01/index.html","242516c36e1fe59ce2de68c7aee0bf19"],["/2022/06/14/animeGAN/index.html","2d27a7316cd985ab13ee1c5489cd995e"],["/2022/07/09/c-与算法学习/index.html","ea2e8f0f0e0bd7a40dd8de2d37942164"],["/2022/09/19/flask学习/index.html","870d828f9c394ae477321b3cc00f0b72"],["/2022/09/22/cs224w学习/index.html","1dacd806fe9e001f62f9b3b3353bda65"],["/2022/09/28/记录一次wp重装/index.html","3d26e604377a04c50f8cd7c5f84c4e6e"],["/2022/10/01/Obsidian学习/index.html","d2cfed5eea0c3c6168080cdf50f73ce7"],["/2022/10/08/vue-element-template实战/index.html","835ae22321120bde0a7f397a6e201160"],["/2022/10/25/vue网上商城项目/index.html","86baee8c274dc6dd8d3dbc8de69a7776"],["/2022/11/11/leetcode刷题记录/index.html","a91600f7cfb54dd737e6fb211a733fac"],["/2022/11/11/使用overleaf优雅地写文章/index.html","99aaa044671a744be62632cfa58b34c5"],["/2022/11/22/磁力链接与RSS订阅/index.html","c6ee587105c5eb3843ee8554b7fc0601"],["/2022/12/11/uniapp申请获取地理位置/index.html","da25f4353a6457b5b72445e98248253c"],["/2022/12/26/pr剪辑学习/index.html","6b94818170d81cf2bfc74ee2bee83af8"],["/2022/12/27/css中的flex和grid布局/index.html","47e4e765aacf7f4b66ba4cdc4e5379cd"],["/2022/12/28/Flutter学习/index.html","1d16d1a308c0cc1003ef9ac90bb0e5d7"],["/2023/01/01/美化github首页/index.html","782a9fe8155cce44f761a4fa6999fb7a"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","1c32bc4970ff5c3414933724a5ac3ee9"],["/2023/01/04/构建微信快捷发布文章工具/index.html","23073379c176fa8d7200f53ae8be61e8"],["/2023/01/14/dart学习/index.html","e8b5b1aa4464890758e2b8605b26102d"],["/2023/01/23/闲置服务器BT下载影视/index.html","2f9a21fb16f2826da4fd8973116243b1"],["/2023/02/07/TotalCommander使用和学习/index.html","c244474cc5f03bfa8659ab9d770b1add"],["/2023/02/13/docker学习/index.html","bd6abc7715f805e497435b6291f0033d"],["/2023/02/17/DLHLP学习/index.html","43019581dd9848b6422ddca79497b0ba"],["/2023/02/18/学习purecss构建自己的css框架/index.html","aa2d996ce43fc6e2d90693aac86afc13"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","5847f3af17254cfe47fc64976a973647"],["/2023/03/05/STL学习/index.html","e04caf8241934bd18a0b69e94f3a7cde"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","16b2a697e73981ce234f32f1a73f55e5"],["/2023/03/23/实战写浏览器插件/index.html","47e81eab91e233636accfe2fdc182e5e"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","c45398624d1008dceda956259d955f9e"],["/2023/04/02/EndNote基本使用/index.html","5839d50ee0c71532aaa9169724fd9b94"],["/2023/04/04/mne处理脑电数据基本使用/index.html","cafd8a288a3ec3007f91d8212a4c066f"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","558b65606fed16c1d5dc5791ce449125"],["/about/index.html","56dd080ae819de41155a0da127759b2b"],["/archives/2021/04/index.html","2725cf4188fdebf87ebb5153b75d9fe9"],["/archives/2021/05/index.html","2cfb87dc08a04266623fd51883330f3a"],["/archives/2021/06/index.html","1f0f28c66e7fd7fcd559f653ee915c58"],["/archives/2021/07/index.html","66f164640cebe340984f336c70233838"],["/archives/2021/08/index.html","28af1cd91e94623779754593cbd7ef35"],["/archives/2021/09/index.html","8ea18c9ef21d1ab8803d8f98924ff0e9"],["/archives/2021/10/index.html","10376fd322fdb7e05b26eeb176e673b7"],["/archives/2021/11/index.html","d7ebbd21b0e8cfc86f94954a39ef6069"],["/archives/2021/12/index.html","a561001b9606c28986c1eae352c84931"],["/archives/2021/index.html","64c6315b1fe33312e87c7d9021936452"],["/archives/2022/01/index.html","1b7ab9c5d7c7f7615572457514ec56bc"],["/archives/2022/02/index.html","5de606bede5f9573e8bf7f5108774057"],["/archives/2022/03/index.html","001eb29de81671ab33fb8ce8dbc5e988"],["/archives/2022/04/index.html","30ee5940bfc10d2b189084e25ddc4cd5"],["/archives/2022/05/index.html","e83b853c1bcf932cc4816420f25b1a12"],["/archives/2022/06/index.html","f4d8773a72612f0f5ce9be79f5c4bc80"],["/archives/2022/07/index.html","9965f5511a833240fef17f30a5c5b2f4"],["/archives/2022/09/index.html","6c958bff17583f6940f45ca7ce676c1d"],["/archives/2022/10/index.html","1811f3333b8c0c715bfa34f4fff01b66"],["/archives/2022/11/index.html","63788a059031ef05d7b84a6a16c1ceb6"],["/archives/2022/12/index.html","85d101f16ea397a51a65a1b6ef2493d6"],["/archives/2022/index.html","4c21ffb75b18290aa9fea99e0045efd6"],["/archives/2023/01/index.html","6f67d2aa9f16135aaf1daf455f678fe5"],["/archives/2023/02/index.html","a350cebb0a2f02b5708a0588f39da128"],["/archives/2023/03/index.html","3f3029f3c2733a8613baf83089723806"],["/archives/2023/04/index.html","eb9f92f429024e27dc4353f653b4bd57"],["/archives/2023/index.html","714fdfdc63afd084985ac7ad1c3e4950"],["/archives/index.html","ba5dbe251c3ab8305122fa1a4c8cf6e4"],["/archives/page/2/index.html","0280b23cfc976a509072919442e7f597"],["/archives/page/3/index.html","4b9b09ba2f65db31a406307d8fd9574b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","723a3fe490ce6b272639f9a71b17ef80"],["/categories/Linux-study/index.html","1c90274beeca14e1f5e989a52fadf7e0"],["/categories/ML/index.html","eb3122abf7ed348b61dd483bff83e2aa"],["/categories/Nginx/index.html","52f6d289987cab5e5b4d943e453c2d68"],["/categories/Spring/index.html","6cd550a0eda1918ca3c63d72aee0f3e5"],["/categories/course/index.html","45fc569debaeb5abb09edb83675f08d5"],["/categories/django/index.html","3364434ba49a9117f463578ecf7e41f1"],["/categories/fun/index.html","0d9ea96f05d476a348aacc4ee50e8c75"],["/categories/gcc/gdb/index.html","69d8e1a70362fae88b80355114096c47"],["/categories/gcc/index.html","0aaa00416151079961f43a7ec5b23ed0"],["/categories/index.html","23e3c8b198a40950b9737b8b6b08d3c7"],["/categories/java/index.html","6d6d933c7c79619acd23948f0c29192f"],["/categories/latex/index.html","54551bfe14e0a2c92a8c0345a7bbba70"],["/categories/python/index.html","b46848f6ef1cd726aae91f3227b05d63"],["/categories/study/index.html","1b6d9df2cefb0a8a17cdb59aabb55fbd"],["/categories/vue/index.html","0f135d963a85e55a06bc50caf0aa3026"],["/categories/误区/index.html","47660474a6e6649023eea11bbb42722f"],["/commonweal/index.html","b9799a3f6c70fb187bc1749c75662d9d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","fac1cea870e3dddce6478a1de5638acb"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","5a467aba470343b549fa049defc2a67b"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","b18d971d2ce38b991065238affac6cd4"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","c77be71945a6aabcc5f3f3396d028efa"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","2a75a9465517e9c7c6064196348ce932"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","9b2e7c8728313be61f9894b6f3cc6653"],["/page/11/index.html","f61fac4267fe93935d4273653c27d645"],["/page/12/index.html","10c7b860fdcb219c1d03a4adfc124f7f"],["/page/13/index.html","e6f7c4064e869b10961d48464037c5a2"],["/page/14/index.html","58a6ea1318aeba9a7918dada20ed776f"],["/page/15/index.html","d98491183cf661e5f689d55786127752"],["/page/16/index.html","227914dda532da4319c78a8937c1c00f"],["/page/17/index.html","9c5ff0e2e385020cf29807b6030df302"],["/page/18/index.html","a9134011f212261e045462d4fcd4ab9d"],["/page/19/index.html","6a818cc698966c929f72c39eeeebec74"],["/page/2/index.html","3a70ec30fae8da3684d8c70f89fab4c3"],["/page/20/index.html","61fa0ca7d72f6a16a8fbb4c01f809334"],["/page/21/index.html","98bf7682516e5d207dd8c9caaa4ace58"],["/page/22/index.html","469dea665bebaf4a54a3cb391ae2a4c3"],["/page/3/index.html","c82b4cc1228053abd89895cb69981a29"],["/page/4/index.html","11c735cfefa123f97dc0ab2af6bd9840"],["/page/5/index.html","7d1190c9552c4d0ae0f1dbe0482576a7"],["/page/6/index.html","bb59841f3d4d52cc680fd23c116a32e6"],["/page/7/index.html","712cb9aa1bb3c17c8671b45daddcb43a"],["/page/8/index.html","06ac65d4c61d04c68a96a2fe185579f7"],["/page/9/index.html","8d67d1c5d9f7933280273e549d0a3e76"],["/resume/index.html","b5398f196010db32af84156d1dd3ce49"],["/schedule/index.html","f10108c8d51060049fa41baf88a80af4"],["/sitemap/index.html","623af9a507f658c1a213535fc0f83e9c"],["/sw-register.js","432ae92149eb4cdf01eeda5691422827"],["/tags/AI/index.html","f41a58464dbac56f0145635419419928"],["/tags/BT/index.html","1ffba1bf426174ef344148207a71b11c"],["/tags/BaiduNetdisk/index.html","47a7945d59885fd5fc38fc95da28089a"],["/tags/Bootstrap5/index.html","3d39d73b6b8bcfa9bcabdc645cfd8fff"],["/tags/CSS3/index.html","249b67d7f62698971f623fac39742d81"],["/tags/Centos/index.html","695af3345cefeb75fc8d1264ccb3dd65"],["/tags/EEG/index.html","5b5804ecef745fb406dac67dd4b701fe"],["/tags/Electron/index.html","640cc2558eaaea63f3dfb171dfa6b7b8"],["/tags/ElementUI/index.html","8954367e98d7550558893d542dad8031"],["/tags/Flutter/index.html","631e0c297983e5a53323ca46faeb95f3"],["/tags/GAN/index.html","44c3dc68766b645b47cff64ac7aaa289"],["/tags/GUI/index.html","930142cc90e77b026a233b67157d779f"],["/tags/Git/index.html","41bd1d886b1922c93fe1424247bb4366"],["/tags/JavaScript/index.html","cbf3883e266799f8494e44a2a278a27e"],["/tags/Keras/index.html","a6cd9428bdbd0277b767f0bafb79e572"],["/tags/Linux/index.html","b264b1773939ebc9108df2cfd3c0afaa"],["/tags/ML/index.html","d82fee583905128fbab41fc56d40322a"],["/tags/MNE/index.html","01554d7d1d9bf2f27777b1eac8736be2"],["/tags/NLP学习/index.html","9f9d4ed63734e2f7379e723ce969efda"],["/tags/Nginx/index.html","9fcc178f1001451ed94ec92b9f6f58a8"],["/tags/OSS存储/index.html","d5c842d89cba2cf1b0ef811d285ca0f2"],["/tags/Obsidian/index.html","da80de65914fffb4992b51ef0db3a37b"],["/tags/Qt/index.html","6c1b9b276a745e5b37521265f052233e"],["/tags/RSS/index.html","6cf68bffa1c680c8cf22bbcec4ddc62d"],["/tags/SSL/index.html","dc70a00129f5a8ce94e72c84bd8873be"],["/tags/Scrapy/index.html","44e0430ac211486838347b50311c6c0a"],["/tags/Speech/index.html","807b96e69ca58d2b77e96aac69cbf56f"],["/tags/TotalCommander/index.html","05ea99a16d95907b02893bf8157d9827"],["/tags/Web/index.html","48eb6158fcac5565d542f50e89f6f4cc"],["/tags/algorithm/index.html","a30336f9d4c03dd28b1726aab6e39ae3"],["/tags/bison/index.html","117433d8b205c5136d9f4fe39dbb24f6"],["/tags/bomb-lab/index.html","ed9f6dafb9f458eda71056804e82d491"],["/tags/c/index.html","90e37631f2e05842876db7386a1574d3"],["/tags/cheerio/index.html","d88c774bedcfd47ec77961e6ef1a5434"],["/tags/codewars/index.html","707146ef0c653529bf8b925d665bdb6c"],["/tags/compile/index.html","613ef884895a8b0274b38a8e20eb06b0"],["/tags/compiler/index.html","fc598ab5a99a919d47391880bc2b4648"],["/tags/cors/index.html","97cd59eb13b91fc6a469eae1a0e500d0"],["/tags/course/index.html","90ac35360eddb46c61f9db5d4aa26d86"],["/tags/cpp/index.html","007d636cbd68c220b2c6ce24c3d4c282"],["/tags/crypto/index.html","97170c7e87b38bc4b93169a3a6f9f87c"],["/tags/csapp/index.html","8280fa3b6319ada1acba9afd6b13c459"],["/tags/csp/index.html","f3d8bec67d7652d7688b2df3dc460230"],["/tags/css/index.html","f37a44fb1d792ea276d653c76c272ca0"],["/tags/dart/index.html","b67d60f9543768c6e721f8aa4ba79ce3"],["/tags/data-structure/index.html","09dfbab0bbaecca6d47253d8d5fafda5"],["/tags/database/index.html","fd556c2e7f417265bb2977ce4e3c96d2"],["/tags/deep-learning/index.html","ee5148126eef71c94b25d31b8c9fcb6c"],["/tags/django/index.html","8046e23ed9f517db026c8f0d16b161dd"],["/tags/docker/index.html","4f7bca85c1fc47ac06d997c14bd6344e"],["/tags/dwm/index.html","5a4e4fbff1820755cb1b65160d4ef65b"],["/tags/exercise/index.html","3c82985bfc0812fb7097f706d53fa8e3"],["/tags/filebrowser/index.html","664d055fe7a6eb7fa36834375ad90f40"],["/tags/flask/index.html","fc08c30f2169f2c024d3614e150c3061"],["/tags/flex/index.html","78b554706f13efab948d79fced96cddc"],["/tags/front/index.html","5f4224e535269144198b156403a79ee9"],["/tags/gcc/index.html","917978a03c27ff4b393bcccfe5557b78"],["/tags/gdb/index.html","02a62a3903ebb23c6f008813fb6ddc52"],["/tags/github-profile/index.html","a3440ae62e22247200fade76f5437620"],["/tags/github/index.html","f102af254cd909d6801c5b07d960f4bc"],["/tags/graphviz/index.html","59018396189c89dc36eb53bac9a52559"],["/tags/grid/index.html","e6255392ed0c47c341fc4c4562b5e3a3"],["/tags/html/index.html","8a36122b0d5fd545e0c6bdd6599f0208"],["/tags/i3wm/index.html","c1d1102e07d84dab9e661a08a1f04981"],["/tags/index.html","6532eed64506db65eb8083c1b2e42568"],["/tags/issue/index.html","1cdf7186dc4a1c62dbbf831e30cabb15"],["/tags/jQuery/index.html","16c0ac3c96d571a6f230fd84fb294d4c"],["/tags/java/index.html","f25207c9fff04db2281eb6457b8bcb8c"],["/tags/js/index.html","d070b5c97c440d9d2139f13860c004ce"],["/tags/latex/index.html","730667111f3b7a3c48fb342a4e033de6"],["/tags/leetcode/index.html","c9c46ff0e6e13b3e0a1a7e9d1dacdf08"],["/tags/lex/index.html","aff570edd40137b898312ca240e83271"],["/tags/material/index.html","6e8a933cd5f4977e893a785e77e42d6e"],["/tags/music-player/index.html","cb400cf0e6fb86a842ca7778b96113cc"],["/tags/nodejs/index.html","7e2af491b0b566a1ac300f57fe35969c"],["/tags/noj/index.html","dd5933092f8d0108802d548c3b204882"],["/tags/opencv/index.html","214e9d8f74527ca2151d22c7567bbf70"],["/tags/overleaf/index.html","6e51a2ac590bebd7d6ece4ea399cc3e0"],["/tags/pandas/index.html","ef5b2abaaf1721df8b3b9c1880015f96"],["/tags/paper/index.html","8dcb31c515c709da7b341718cd39e362"],["/tags/premiere-pro/index.html","43801255dd481007e1b4fcbe0825c485"],["/tags/proxy/index.html","d30a96a9dcb07798fe713a12a6fa69ff"],["/tags/pure-css/index.html","1c5d484561ccdbf7278709aee83371a4"],["/tags/pygame/index.html","8ed0e7a1fcafc7eac6806f87fbfc196e"],["/tags/python/index.html","652329e4d451b24909a713eb2220a6ca"],["/tags/python/page/2/index.html","b78755d40a027a42952f9624266bc202"],["/tags/pytorch/index.html","ebe3d999c03d0eafc73c658064e5523c"],["/tags/reading/index.html","9126c86cc5d2122d4f902a1f791b2f47"],["/tags/request/index.html","6950e39afd53c20d28c68ad53357fcf5"],["/tags/requests/index.html","852f0e95a9f29fd782f1bd72db4e7d21"],["/tags/security/index.html","491185a2924da2a8c7fa06b5ea2515b1"],["/tags/shell/index.html","326d674c50cf4cb0825a88d6277ca60a"],["/tags/sign-in/index.html","0de11df282463cfee293cdd0be45b4c2"],["/tags/socket/index.html","0c821cd6664898add8607a4f5991b13b"],["/tags/spider/index.html","aeabd8cc3416c21888b194f8434cccf3"],["/tags/splash/index.html","a883f29bee5b758abc3646d3a805dd23"],["/tags/stl/index.html","df77c15238d49b64bcbe703ec2954948"],["/tags/sumatra/index.html","44eda6c2927ccfab37c7023670cbbca9"],["/tags/superagent/index.html","0db07e69dbfddf34a774dc202d19352c"],["/tags/tensorlow/index.html","14ce56856adbb0b57c513d5a46bdcc39"],["/tags/tex/index.html","adc6d3ceec880b099984699d8ce17c48"],["/tags/thesis/index.html","45a3a908cd4131e02cfc4b075bbfbc1d"],["/tags/threading/index.html","2f52d8b102e81b4d2bab3be94dc08db6"],["/tags/tkinter/index.html","871f43023f8e29e93fdea358c2ac22bf"],["/tags/torrent/index.html","58182a2da65623c1ecca9f4a26d45261"],["/tags/tutorial/index.html","2c3a7ce0b11c21bb1ea920e3ef873106"],["/tags/typora/index.html","a416dae26768903ca9a338252d6e890e"],["/tags/uniapp/index.html","c59a301500233b53cf37e759ab32f36e"],["/tags/vite/index.html","a967b602f208ee51afb2d8c2e2886e93"],["/tags/vscode/index.html","f924f399238208f8c10dd15ac9e985dd"],["/tags/vue-element-template/index.html","793fe67233977ca65dcbb261c8efa56b"],["/tags/vue/index.html","e1f23641460e8096b58a58bd18dd0463"],["/tags/vue2/index.html","6683cf58cf3dd240f71390dee967a65d"],["/tags/vue3-x/index.html","916740f0259e54311dc1326dc9dcd0a0"],["/tags/wechat/index.html","116c7761ee7b6e5286c074e32a9d8afe"],["/tags/wm/index.html","68573cd2b7f45ff7c1d104caf62bf67c"],["/tags/wordpress/index.html","3c39e00a23b216c0e9b53889311846c0"],["/tags/workflow/index.html","68b687da7e9ff7ed314743512de816b6"],["/tags/xpath/index.html","e3bce3e1f1e9f3525dd91b25d4004298"],["/tags/yacc/index.html","04977b9ed9eeb2f1a70963780476feee"],["/tags/zsh/index.html","59f2393a6486d5ad09a998e238cc6cbb"],["/tags/七牛云/index.html","3d51e27c103417b2774c64de425a15d8"],["/tags/函数/index.html","fe4ba07fb7127435e65a181e4255a847"],["/tags/剪辑/index.html","0fc0ec98ac5ed77caf1767f8330f74c2"],["/tags/存储/index.html","708e7d0a6fd7e4f635a6c69633b41512"],["/tags/实战/index.html","639c3b1ec25e7ba5dec2a60014649023"],["/tags/工具使用/index.html","3bfdddb29427874ee62a2443af9113ab"],["/tags/建站/index.html","1c5c898d84bfa568bf3412a15d33c901"],["/tags/微信小程序/index.html","4b53ddd413e144e68cec1da842bfc789"],["/tags/指针/index.html","6e53a580369061c81c237ae640870f4e"],["/tags/效率提升/index.html","0d0c4c586eb6bae5623219f40dabd3e4"],["/tags/汇编/index.html","3a6f98502eae21a011956c82c94ed48c"],["/tags/油猴脚本/index.html","94f33dde36cdb0a70d9d37c91f8486e0"],["/tags/浏览器/index.html","5a8379b2669180e03497ebd5f127a66a"],["/tags/爬虫/index.html","7e77168564cd10475aa3a6d346db7965"],["/tags/算法/index.html","77945ea4a241e81ed0b691c09b435260"],["/tags/编译原理/index.html","5c1dfc6af7f1d98d76f89b55a4b8e4cf"],["/tags/获取地理位置/index.html","4d3b0f2111cebed4785eb35c812ba0f7"]];
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
