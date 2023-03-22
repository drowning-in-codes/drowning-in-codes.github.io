/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","69c4ea101f289b78544dc4dbab7d727f"],["/2021/04/20/稀疏矩阵/index.html","ba3423c03e9fb3116c9d9062a1d6ade3"],["/2021/04/23/广义表简介/index.html","c2e51986d8dd846797b05cfdd52f8369"],["/2021/04/29/关于指针和函数/index.html","7f051efc6921f3bf2eec82b6753d80c7"],["/2021/05/10/哈夫曼编-译码/index.html","0725f9e4e80dc7572b479d3cca7bd317"],["/2021/05/17/数据结构noj_2/index.html","f739a2734d9d8a8ff1f478895ea3f7a9"],["/2021/05/30/数据结构试验/index.html","f865618392e657e7d00a2731263f2224"],["/2021/06/12/数据结构noj-3/index.html","8039089443328109b2b1c0f3aa05e583"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","dcaffa0e1ccc82737e8fe24db5ff0abc"],["/2021/07/08/课程资源分享/index.html","bb72a17ec4b249045dbab95f7cfe595b"],["/2021/07/20/Scrapy-下载图片-文件/index.html","e1374a862934a1e15d9a892fdc4cd034"],["/2021/07/21/Scrapy-动态网页爬取/index.html","3b67b80060f71711ac655b622da6b41b"],["/2021/07/21/疫情打卡/index.html","586af3cda56717e498377d1c732ebb2d"],["/2021/07/29/Scrapy代理设置/index.html","fbf23b5bf834c3ca45cb583d9ceb5af1"],["/2021/07/29/数据库认识/index.html","a241f6e4fb85453a82fe7d859eaa60d8"],["/2021/07/31/Python多线程学习/index.html","92b5206e6e02887ac8d4a207d10cfd29"],["/2021/07/31/tkinter-requests练习/index.html","bebf6e0362bfa2c59d79a9e524acae05"],["/2021/08/10/Git学习/index.html","294887695ad20d6b2f62ad380fa0e896"],["/2021/08/15/pygame实践-1/index.html","3b3af0e23a743802bcecb8603413c388"],["/2021/09/06/微信小程序开发/index.html","fe4fddb8d2523513667c6ae2a4a7371c"],["/2021/09/21/命令集-1/index.html","e776c6121f13a2726f8ebb55cbdfdd55"],["/2021/09/21/命令集-2/index.html","c9af2a0dfa4b7a298b23b653ea60e63d"],["/2021/09/21/命令集-3/index.html","590b3f74b3c095e9e92e6d00e7ec19fa"],["/2021/09/21/命令集-4/index.html","abf2d59633b63fb9c838b24b2d0f3b98"],["/2021/10/03/socket学习/index.html","6b4a8ff5dea8e8df325ab87c82439c07"],["/2021/10/10/dwm入门/index.html","ec68108b685b6f1ded3f6f16b5857580"],["/2021/10/10/安装ohmyzsh并配置/index.html","cd67698836180e27e2dec460be6a637f"],["/2021/10/20/css学习/index.html","96174373eed794010144aad69e3c117d"],["/2021/10/20/wm入坑/index.html","4b952b714cb39666f11f839bc2095ff1"],["/2021/11/03/微信小程序学习/index.html","dfaf6dcd718e431fa2982fc7a54bcc47"],["/2021/11/04/css揭秘/index.html","ccbde0b2d6bc02878aa0f5fac976f590"],["/2021/11/05/css-练习/index.html","d424f40b2b75f01cab77c5479f5611a9"],["/2021/11/21/命令集-5/index.html","b2b1c93c9741a768cde700d79331e7b3"],["/2021/11/21/命令集-6/index.html","ad309603098fd729e075bdd16cc3a5bb"],["/2021/11/21/命令集-7/index.html","e36a2cd2bfdada6b944f920d5c2fe582"],["/2021/12/01/搭建wordpress/index.html","75752707662ff808d2cd980a3b71a708"],["/2021/12/08/python操作百度网盘/index.html","2de4b29229035518268ba292bdcbaf83"],["/2021/12/14/js爬虫/index.html","e05557abefb985b969ac616c94856dd9"],["/2021/12/25/为网站申请ssl证书/index.html","ece995fbe6303c2cb250ce2227a4fd28"],["/2021/12/29/使用七牛云为网站提供服务/index.html","74700fd3328021f298554a1627c51e21"],["/2021/12/30/jQurey继续学习/index.html","a7b4483f789913fe28d0932e965a8e9e"],["/2021/12/30/jquery学习/index.html","a8b0cd7166843589b5dc131fd2b77d5c"],["/2021/12/31/vue学习/index.html","737e2a224736d71ff642d7fd5437cf44"],["/2022/01/02/疫情自动打卡/index.html","635fb72731020c9b3e7e7bc16534b0dc"],["/2022/01/03/javaweb初体验/index.html","c142eb3e1815089b51f1ec551f3ececf"],["/2022/01/04/codewars练习/index.html","eba077ecb1a3409a0dbad4538ec43150"],["/2022/01/05/Spring学习/index.html","2dcc34ea66ab97da4906756d848083b7"],["/2022/01/05/vue实战/index.html","697291c848d6dab418a32204e7369957"],["/2022/01/08/gdb-gcc学习/index.html","75cf70304e5881a8208b44909035f5a5"],["/2022/01/11/python-opencv学习/index.html","297bf655789a7eeea8194d3d9108dd44"],["/2022/01/12/汇编实战/index.html","a98794d436f718abe345e052ec819d2a"],["/2022/01/17/pandas学习/index.html","dae4a5aafc44cc9fe38371419c555dab"],["/2022/01/19/可视化图的工具/index.html","3e5353c39644966030e5b112d197191b"],["/2022/01/19/机器学习入门/index.html","7c0423669683ea5b94b8bd35220d1e15"],["/2022/01/20/cousera-ML学习/index.html","bb291e4bae5ca7a4aaf5a1b6cc5e508a"],["/2022/01/30/typora解绑后出现问题/index.html","70ef223ce8d5731967799ab0a75f7527"],["/2022/02/03/NLP学习/index.html","e501c2e5ee36a665877a51f0b7c6df10"],["/2022/02/04/Web漏洞学习/index.html","128e3e5226ea62283f9e78f91613ad09"],["/2022/02/04/pyqt学习/index.html","9e4e09b8961d1c5defb97e37a82d4fb0"],["/2022/02/04/python爬虫/index.html","5aff3050a00cc19479966f4bd16eb1eb"],["/2022/02/18/Electron学习/index.html","6c2732c6f6f218a3047ac72fa9357f12"],["/2022/02/22/疫情填报字段解析/index.html","0be2e00f8430d6b35ecebccf887b13ed"],["/2022/02/24/Bomb-lab实验/index.html","c930f9a51a78db5e558463ba46d7dbdb"],["/2022/03/05/nginx学习/index.html","3f166cd6dba8fd77182808e80a8565a2"],["/2022/03/09/汇编原理课程学习/index.html","b9a07474b8640d04c96fab2ef92b4049"],["/2022/03/11/Keras学习/index.html","ce4cdbf625d85d8e274f13c22ff99d3d"],["/2022/04/01/graphviz学习/index.html","9695089656ff73a67cb8524885e0d39d"],["/2022/04/07/django学习/index.html","697c908f7ac082a9d04ea7a2465854a3"],["/2022/04/11/密码破解学习/index.html","32d8286a6ca807095e98ab0db28b32c0"],["/2022/04/12/flex-bison学习/index.html","7317fb92e90c075c571c73518219a452"],["/2022/04/15/pytorch学习/index.html","7ade0f53dc4cc112033dbbaf256d66bc"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","5470ea38bef600fd0f7768a778ae2afe"],["/2022/04/23/写一个音乐播放器/index.html","548a506729f2cd6c67b2008cebd77618"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","d16504cad71dcb8de99694b57f56e52d"],["/2022/04/30/GAN学习/index.html","b79f08e9a2399d8b547981a36fef19d3"],["/2022/05/02/html精学/index.html","5c33a4fb638cb5a67e841fcd7ae0f4ac"],["/2022/05/06/write-a-compiler-by-yourself/index.html","db6f89040cb781a456098b87c131fdf5"],["/2022/05/30/acwj-01/index.html","dc5ff3ad0425f771b07b547b1c0b7ce2"],["/2022/06/14/animeGAN/index.html","2645035fc3bc72b8e0b95c42fed88686"],["/2022/07/09/c-与算法学习/index.html","c51bb95fa15c582f232e763b7a23fb62"],["/2022/09/19/flask学习/index.html","3002ad2c95c8615e181391ffcfdf37f3"],["/2022/09/22/cs224w学习/index.html","7433b3f0b1e18e5c32c094883a412328"],["/2022/09/28/记录一次wp重装/index.html","39681f4ae63e8ca25057c59ba7ef74d6"],["/2022/10/01/Obsidian学习/index.html","fd2da3a785d6599c872b13d72e77ef3b"],["/2022/10/08/vue-element-template实战/index.html","5e43900581a650f46bbcce09965364e0"],["/2022/10/25/vue网上商城项目/index.html","6cc0d96b21b317429a2ef4ad21671f31"],["/2022/11/11/leetcode刷题记录/index.html","4c512c024c17b49f712df98c6794942e"],["/2022/11/11/使用overleaf优雅地写文章/index.html","9f9b9e667195ef49346813d3ea80f218"],["/2022/11/22/磁力链接与RSS订阅/index.html","594a2b725922ca22a66cb5f3d4ca122d"],["/2022/12/11/uniapp申请获取地理位置/index.html","a142562e4374476e9756070236e26ffd"],["/2022/12/26/pr剪辑学习/index.html","a7157630981300c9659d36f813c2eb66"],["/2022/12/27/css中的flex和grid布局/index.html","bf6460fa23e49cb7278541ffebb9f0a9"],["/2022/12/28/Flutter学习/index.html","bff6e66e48b052e5bb62aa857c1a0a2f"],["/2023/01/01/美化github首页/index.html","9bcf44f84213531197e9fd9fb5b4ce17"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","63c86f7bffb49e21c2042308e419f99a"],["/2023/01/04/构建微信快捷发布文章工具/index.html","eb040164f816e6cab0d5f19d9a68f325"],["/2023/01/14/dart学习/index.html","fcc4bd3f33383b85246edb069669bdb6"],["/2023/01/23/闲置服务器BT下载影视/index.html","07ac5b5df2f4a6f7a1f54ba5eb4771ce"],["/2023/02/07/TotalCommander使用和学习/index.html","aa727f03897464858f41f2999a8ec3d9"],["/2023/02/13/docker学习/index.html","7b0e4c1803ac275e413933dbf768b76e"],["/2023/02/17/DLHLP学习/index.html","9b1c1be5bc9fa6f3b62d76712cfa79e6"],["/2023/02/18/学习purecss构建自己的css框架/index.html","108f3d340713dd9c44dc49be824900cc"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","28062e0853c87d833e52b3ad90e21edf"],["/2023/03/05/STL学习/index.html","1453450896cd69d7d846a6170e9f69f4"],["/about/index.html","418c7220b8d46eb85924ef890ac51b72"],["/archives/2021/04/index.html","dec6d6a07613e1f746276bf07a2b81c4"],["/archives/2021/05/index.html","21462cd8f05bc4d57f7b2d39eff5304c"],["/archives/2021/06/index.html","e114dff53f4c3065f81fe0102ec9306d"],["/archives/2021/07/index.html","c662f8546a03508168efd3c15b0c217f"],["/archives/2021/08/index.html","509e81649393bea7385e891924c783a2"],["/archives/2021/09/index.html","0424ce610a3c03ab7d9070ed6e17f6b2"],["/archives/2021/10/index.html","809f60009b92fe43136dc8d0ce7742f9"],["/archives/2021/11/index.html","57cf50dcd7e080c53e35f39870f10fe4"],["/archives/2021/12/index.html","dfb53a4ed821b05fa577253a393c16a8"],["/archives/2021/index.html","796da58e6287cadc16e7a5266fdb0c7a"],["/archives/2022/01/index.html","27984bfeef632d4396da772e1ecc58ed"],["/archives/2022/02/index.html","626e83c27df59eeef0203db70ae0f609"],["/archives/2022/03/index.html","b192d1e41c6fdd587937582b73bb29bd"],["/archives/2022/04/index.html","21a6a64a64edd8a1b779ef22eeef0c22"],["/archives/2022/05/index.html","4993e06a6b05126104f3facf734c23d0"],["/archives/2022/06/index.html","79a673ac30c3d0e2ccd859ebb48e9127"],["/archives/2022/07/index.html","ee0301370ddc8e9348d1e370f3273c0e"],["/archives/2022/09/index.html","b2430ae033c9b9e22ad78a8dbea9c113"],["/archives/2022/10/index.html","9d88057c93d5684efa6b51562ef3d771"],["/archives/2022/11/index.html","b2f7d8ed4cf67d9be03a0210052925c8"],["/archives/2022/12/index.html","c0c1fba0bd90ab633a7c5018f4d85ebb"],["/archives/2022/index.html","b1846b1b43268b259df2eceb5280c402"],["/archives/2023/01/index.html","273847661bd54190c5e7c50437118815"],["/archives/2023/02/index.html","6ac3ae8d1b91a5f6db3f47024a47d538"],["/archives/2023/03/index.html","f0286f94810ec86ddb58b8807e95e62a"],["/archives/2023/index.html","f8989f58fea7ca4f79cedb91a0a1e0b5"],["/archives/index.html","46323bc702086de81e43cd95d3203b46"],["/archives/page/2/index.html","bdc70ba78553f26c67b74b077172cab7"],["/archives/page/3/index.html","86e631b76403e7bcc22b06e93cea0e96"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","aa12c6475d559be0a24e454ecd726d24"],["/categories/Linux-study/index.html","04ae32e3aa030b49af266d8e00ac6750"],["/categories/ML/index.html","f556bb18d6f11e58064e57f9c010c1bf"],["/categories/Nginx/index.html","5b215bfbab34c7d74bd5dc34c924aa78"],["/categories/Spring/index.html","b13e07d348bdd66937a3244dbee55c98"],["/categories/course/index.html","3843d24c66854c096b2fb3d0a98d72f7"],["/categories/django/index.html","eecf2a423bd60a0ff98578d5862cfb15"],["/categories/fun/index.html","4ec11a3314440007e57f0d521d284731"],["/categories/gcc/gdb/index.html","3485e345a5b91e82809d42331cbb8b8d"],["/categories/gcc/index.html","30e9cd449d842550e4d29a4ec01076c4"],["/categories/index.html","bd64578fed71a90305d6587cfd50c757"],["/categories/java/index.html","9fe547e35c25335c7eb58a55977d68b7"],["/categories/python/index.html","f86cc2c0f21dae73ef26851d1edcb7ae"],["/categories/study/index.html","65361bfc8edb5bd524064a59fb43b1bc"],["/categories/vue/index.html","7ca32b3fe82f76cc1119fb59c0ff075a"],["/categories/误区/index.html","fe20ef6a6e8d4be68df1810437db2ccb"],["/commonweal/index.html","1db7579a511acbe4ae6c51f767dd1080"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a43e3944f3e685df23ff01730776c999"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","34a770a1622450507ff498435cbeee27"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","e60fb387491fc0e0e617e18f5928d04f"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","1eabce35e38426cbf114b164563d8edd"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8f7a4bf70ce43dbc7e17da3aa603d668"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","a547656686c5e345fd454a199ac8dc3c"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","6574fb5c569cbf2c1f10e4e44d7dc4d9"],["/page/11/index.html","a9ab7ba8a5a6b9fa54f94c602f0d8e61"],["/page/12/index.html","0916647ba39204fac047ed850a15fafd"],["/page/13/index.html","cab86cf4d378286947652f42279fec6b"],["/page/14/index.html","9d41de9f8e226fadd6441f2be5de84c7"],["/page/15/index.html","cee9c15e9898bd19427e7aa7013978f4"],["/page/16/index.html","7124fc9d57f1efff65f88cc377828fda"],["/page/17/index.html","31481da2d70fed0c77ea97959303087a"],["/page/18/index.html","c5afe6c52fa22044f8a17cd5da1b5b97"],["/page/19/index.html","117e2afd4aa6d81efa28834c4e1ce0d2"],["/page/2/index.html","62fe96427fd0935e60763a606bcb4800"],["/page/20/index.html","8acb2c32ca433c611a00f9f56a0627a2"],["/page/21/index.html","1d9d24f6dce7fe6a1f906fee42e4964d"],["/page/3/index.html","8f950ee4bff676fd27fb316a721a0104"],["/page/4/index.html","9b8b259a40ff95e7184ba4f832c78efe"],["/page/5/index.html","873b5da0e961214d3d6d39f49192bd73"],["/page/6/index.html","bd240a1e73158df9a27d2cfd43377a26"],["/page/7/index.html","ab460daa96032beb5a6fa3b2a1615e1b"],["/page/8/index.html","8220eada9450899bfc2b3a1206cc971d"],["/page/9/index.html","d3b8c97c75ea7dab6409dc6e31b4cbbc"],["/resume/index.html","0ab7e94a4497b74f2121a9acccd2dd0d"],["/schedule/index.html","b02600ab5a14aa836f5168c78a444a62"],["/sitemap/index.html","6df93b3448cfd5f9b69b5203d7654aa2"],["/sw-register.js","ece6b55fedb36181cd9545b2fc310dc0"],["/tags/AI/index.html","e5faf7b119e97acf989188611852d463"],["/tags/BT/index.html","0b3c173882e4dbc2a48a359b0d3cb7bb"],["/tags/BaiduNetdisk/index.html","cbdbbfabd9bc93e71882d4051a489774"],["/tags/Bootstrap5/index.html","b19020100bc84ddd6612c0ebeab3eea8"],["/tags/CSS3/index.html","095a855254189bd6b22c48d5b953bc62"],["/tags/Centos/index.html","66d5a09e283f7ed9485be769e486025d"],["/tags/Electron/index.html","5a2b3132eea25f33d554cae2936ef61e"],["/tags/ElementUI/index.html","d709bc3b5d5042c8e19b9e1ff7f8793c"],["/tags/Flutter/index.html","102cdbd339576521f848e5fa61a475f7"],["/tags/GAN/index.html","95cef9c13ac8c8e09d81c66746733008"],["/tags/GUI/index.html","109ea1708f8c6dc9b94fdc996a342931"],["/tags/Git/index.html","c38e243650fdbc7c60ad1d6a6cebf3b1"],["/tags/JavaScript/index.html","524c6301c70c43b69b60e334c72a5f97"],["/tags/Keras/index.html","726da062f0682f979136e42a1618acb8"],["/tags/Linux/index.html","d72277d62ef4f85560035d2f76547350"],["/tags/ML/index.html","0badf7bb542a1cd0dafc3687bb3fb01c"],["/tags/NLP学习/index.html","86f210a229e1674dff7b9da92e888f7d"],["/tags/Nginx/index.html","e6dad9118de29646570df0294c47328f"],["/tags/Obsidian/index.html","62d6ab8aa655e7e5a24709d62faa7c50"],["/tags/Qt/index.html","a6f62feb6d68a2ac26916fa51d5445ff"],["/tags/RSS/index.html","0d0f3291ea9c2b654289c23291903e34"],["/tags/SSL/index.html","5d8a175b7dee9fe85975ebb8b6a51d54"],["/tags/Scrapy/index.html","429af356675adaa51f55ca7beaa06864"],["/tags/Speech/index.html","c40de0f86cebce9d6c1d46cbe5d30aff"],["/tags/TotalCommander/index.html","0a12c96449fe65729505e1e34ebbdd85"],["/tags/Web/index.html","858f8e59203e430611e4d072d71574a3"],["/tags/algorithm/index.html","d022f1916f9831c91c660b5a003227ee"],["/tags/bison/index.html","3aa986533bd98fb6b6a135020764c4b1"],["/tags/bomb-lab/index.html","ec50eb766f83ac912cf4bbda9cf801d0"],["/tags/c/index.html","01fe3a8cb3ca988c6174cfea0d48097d"],["/tags/cheerio/index.html","11a3e3ac92a8da9f8ac2ac50ec54fe6f"],["/tags/codewars/index.html","0335c679552fc20e0b5647e0a44c701e"],["/tags/compile/index.html","29c243953784ead679deb25edd33cf64"],["/tags/compiler/index.html","69ed8bf80b109d7482d2c6d76cdf6bbf"],["/tags/cors/index.html","a9f030c8fba71657f80362dfee46bb5a"],["/tags/course/index.html","3fc3eb5866a81f245dc5b51214d209da"],["/tags/cpp/index.html","ae696d99e4f1b226a0e70ee8e38096e8"],["/tags/crypto/index.html","fce2a6b3c3cc3100004566612cd8e6b9"],["/tags/csapp/index.html","3d60bfba6f886a7a6c98e78b86c53d6b"],["/tags/csp/index.html","7c5f1e08f41849dc6c5d8e0144e71ab3"],["/tags/css/index.html","edfc932beecf48dc1e9561766577d2c7"],["/tags/dart/index.html","745c7064581da31d432445c218b1226c"],["/tags/data-structure/index.html","704a4c8e90cc0f379e34e13e150f99b5"],["/tags/database/index.html","d0125f5ee91d8710eea9ac9bdae6eb32"],["/tags/deep-learning/index.html","369037c3b4ddc93f66dd487ef87adffa"],["/tags/django/index.html","fccebf1f93ef0da37c8cf7f376c1e50d"],["/tags/docker/index.html","740ba9a9e0707f54b695c6b56a29bfd0"],["/tags/dwm/index.html","6b80ac3c3cea7d84302b17876a75e007"],["/tags/exercise/index.html","59d17fcb329d98328ca8d5171a31bb05"],["/tags/filebrowser/index.html","75843cec63a067910d73311310f8735e"],["/tags/flask/index.html","7687573381ad8663198dd7e5cfe03d93"],["/tags/flex/index.html","bb815a3d703e7f69cfacf57a5d5326ea"],["/tags/front/index.html","ac9b67a880cece62473be2eaf63acdfa"],["/tags/gcc/index.html","a3ed68c1bdc3e71ab283039151b7b6d8"],["/tags/gdb/index.html","d8a154f865efef990cb77827e2f23069"],["/tags/github-profile/index.html","19f9f033ffa6b8f52ea6df29d004e959"],["/tags/github/index.html","9bec4069ce5d5b1c3a48c50ba5d3561d"],["/tags/graphviz/index.html","b69b62302e2760ae6f8034a142eefd0c"],["/tags/grid/index.html","2116d0385f37b6f20993ab7a40c33591"],["/tags/html/index.html","6220b7b86cd998ceb5c43d61f141d706"],["/tags/i3wm/index.html","a20eef63adb2507f7519f8967080e557"],["/tags/index.html","fa03ac5dffde34bb3f7c2fd74d90b8f1"],["/tags/issue/index.html","9542bb8ebc7174d4f7b7d7d7f156069a"],["/tags/jQuery/index.html","1fdd73674286b3d528041d1e78b4a94d"],["/tags/java/index.html","178437758f63a662213a8bf9270ba9e2"],["/tags/js/index.html","a76d74800a1c44001c6fb90e420b6db5"],["/tags/latex/index.html","9f3eeaa36ad865acf35377f2adfbff44"],["/tags/leetcode/index.html","49497f413cb5db1597b019fdb769421b"],["/tags/lex/index.html","3cd14828c96df4dbbe7268f2afc62e9d"],["/tags/material/index.html","d0b6c121fec16105c9d9a1734edc489b"],["/tags/music-player/index.html","429a68b0e554abbad8b184b800a8df65"],["/tags/nodejs/index.html","23ac6cb9a59cb04d8d31f3ad4c939b72"],["/tags/noj/index.html","b42dd29ea257eb3b41e75090a0519b64"],["/tags/opencv/index.html","1b7a56e0e4062f4a24b6a46bc200893f"],["/tags/overleaf/index.html","37bda7b0a9194db02ab1030f609939cc"],["/tags/pandas/index.html","20b40723d777d4cdc2529617c68302d6"],["/tags/premiere-pro/index.html","093b8b2657a48d84fd2c89f3241fa534"],["/tags/proxy/index.html","bb67f2b2eefcebf9cd9077069a1c3ff6"],["/tags/pure-css/index.html","70ec516d65ad698b7c88e8a800bb040d"],["/tags/pygame/index.html","484937ba69c98304f83c6e2037fa6b9e"],["/tags/python/index.html","f4af978603e7f0d2ffdc152619513295"],["/tags/pytorch/index.html","199d8c55052c5c48c4ac84c38ed549f1"],["/tags/reading/index.html","66a61944c3d524e0d1a60c518de5963d"],["/tags/request/index.html","bdb52f9509f0dc54f620d46289a1889c"],["/tags/requests/index.html","b1da23aa29a53e231f488a979b286cbf"],["/tags/security/index.html","7e178b2051660267bd978794a31dfea2"],["/tags/shell/index.html","c6b059ebfa97313ead3757de0723db4d"],["/tags/sign-in/index.html","84b4cb24046dd66fa852a913803a25e9"],["/tags/socket/index.html","d51b0ec13e94f00e7439af4cebcc2866"],["/tags/spider/index.html","ee81b8e82b5ffeb145e7ba62b1ce8810"],["/tags/splash/index.html","249cd75b75dc6967146202a56da7ace9"],["/tags/stl/index.html","921e60d56c963d16a9c2b50c10e3139f"],["/tags/superagent/index.html","032a1336574f1364f4436e02228c1536"],["/tags/tensorlow/index.html","37a3df314674186f7258b34eae6c553f"],["/tags/tex/index.html","4632313d6717a01aa0cd38cc30dd5857"],["/tags/threading/index.html","ab2dbc0332ed997d85a6c16fa5c0eed5"],["/tags/tkinter/index.html","fefd06b6e5b374aa661dc8f63c87a1f1"],["/tags/torrent/index.html","c8faa93a7ac5b1f268f1169a432ee64b"],["/tags/tutorial/index.html","2000aaadabcbd37dec789b75cf3299a5"],["/tags/typora/index.html","7a2b79348c2777158cf8671d436bff30"],["/tags/uniapp/index.html","8e35a34c8126025fb17a9b965bd17aff"],["/tags/vite/index.html","9c68b714936e13ff7a60182c90c3c221"],["/tags/vue-element-template/index.html","828f230d5b291b8eed27f45d710d9cc7"],["/tags/vue/index.html","51618f942307d0943bfaa7387c4c79b8"],["/tags/vue2/index.html","9687d1afed05f6994adae37421c4b26d"],["/tags/vue3-x/index.html","b1b582897f8ec8017e2a03f515d64177"],["/tags/wechat/index.html","02257c4b2d2fd2a18598f73b093a3e7d"],["/tags/wm/index.html","32889f629a8ad2cd29ed222a8f9a916b"],["/tags/wordpress/index.html","07333983ea5b02a600c06ad6672d4421"],["/tags/workflow/index.html","f2e3c5fc405221b734ab7cc34f86f3cf"],["/tags/xpath/index.html","e23b2a9a4f554446412fa9640a81ae6d"],["/tags/yacc/index.html","3b18f5e2576b59e4ac6781683c434da9"],["/tags/zsh/index.html","075dadbece8ae4c2050226db726937b9"],["/tags/七牛云/index.html","e17b3139d2025baeffbc451593b8a404"],["/tags/函数/index.html","571c00452b3d95c4b3f83822360975b1"],["/tags/剪辑/index.html","d59b1c1e91af552d7ce4869ba71d0271"],["/tags/存储/index.html","01cd7ffe61e14e491d46128e329218a8"],["/tags/实战/index.html","90419fe53e8cf0a80d9d6d0be8d6ffad"],["/tags/工具使用/index.html","e4670e2e058a92864741b4a1d59f3118"],["/tags/建站/index.html","132ba3aaecf5e6d626510d3fe3486d24"],["/tags/微信小程序/index.html","5628d2ed9e0488e6fd9770416d008394"],["/tags/指针/index.html","0e8d3fb133c97b0d16957f19c5286b82"],["/tags/效率提升/index.html","22833b6f666b1c36b696654ebdacffbf"],["/tags/汇编/index.html","07fde0ebce5d04467fed39bbf06e6568"],["/tags/浏览器/index.html","377428159b4750100f16d3b969d2e609"],["/tags/爬虫/index.html","6264d0dec2d15f9d377ecdfe55af4e9c"],["/tags/算法/index.html","3d14582757a107fa56795304927088e3"],["/tags/编译原理/index.html","0f4eaccfbbd9cf632a123dc1ae85fd69"],["/tags/获取地理位置/index.html","efaa692fdc2e8513227ee78f3ee2e988"]];
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
