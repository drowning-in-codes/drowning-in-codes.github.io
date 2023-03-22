/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","af39702fffa0b87e86625fdaffc6ad95"],["/2021/04/20/稀疏矩阵/index.html","fbb8b9845fc25045c186752ad7a639ff"],["/2021/04/23/广义表简介/index.html","22ae91c1b323085ebdd2f66fb7f1a949"],["/2021/04/29/关于指针和函数/index.html","a91a5dd3bd78d59e905fb86e2726cb8b"],["/2021/05/10/哈夫曼编-译码/index.html","602f6ace0a7329ef9088a49c8efc6f1d"],["/2021/05/17/数据结构noj_2/index.html","0507d805bed635c10c8dc429e1a7e29f"],["/2021/05/30/数据结构试验/index.html","aa15b5fea7a94dd6478855bfb1f4decc"],["/2021/06/12/数据结构noj-3/index.html","a71613cf3b503ac106e6f0ab961b44a7"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","834444af1909c0fc0f5c0c79d88a6f3b"],["/2021/07/08/课程资源分享/index.html","53ddd025755bb59408d36b118a54efcd"],["/2021/07/20/Scrapy-下载图片-文件/index.html","d7618ad8f59919f0cff111a25f56b62a"],["/2021/07/21/Scrapy-动态网页爬取/index.html","4bbf0cd4f619e2a9545459511807a241"],["/2021/07/21/疫情打卡/index.html","91f52854c35c2ea2cdd8a5ff38157474"],["/2021/07/29/Scrapy代理设置/index.html","49d6a9f1b998fadbc19325e6f1e7b05b"],["/2021/07/29/数据库认识/index.html","a69bd82048d8d0348afcfb5282f4c514"],["/2021/07/31/Python多线程学习/index.html","94f955e42f2000ddc434f81b20a54179"],["/2021/07/31/tkinter-requests练习/index.html","8d0a04c4f75cf792ceba78e5630722c5"],["/2021/08/10/Git学习/index.html","2ad70ce37e9d3dd78ae32f8a3700167a"],["/2021/08/15/pygame实践-1/index.html","8be559ca204119272b4d0318a7174684"],["/2021/09/06/微信小程序开发/index.html","c454413317eed31bd91449838c2a20ac"],["/2021/09/21/命令集-1/index.html","9936e135e0c1ae2bfecda6c40cffc643"],["/2021/09/21/命令集-2/index.html","36e61f5e1c52b06a13f2c4ec861bfd8f"],["/2021/09/21/命令集-3/index.html","ee512a48cda548df736ad3c15d918990"],["/2021/09/21/命令集-4/index.html","ffcdd78443270bee6b40dc6a6913a1b6"],["/2021/10/03/socket学习/index.html","16f7d09d7fa547701358bf666cb3ab1e"],["/2021/10/10/dwm入门/index.html","9e3fec1c9f74adc8a0455115f392e788"],["/2021/10/10/安装ohmyzsh并配置/index.html","3b38967e42e2937eb90d45b50a62b53a"],["/2021/10/20/css学习/index.html","dfa9a17ac6f689eb0881487bd07c2b11"],["/2021/10/20/wm入坑/index.html","f752cf98f9dcd90a72580b7bf9e4aacc"],["/2021/11/03/微信小程序学习/index.html","adffb64e5e61727299726b25d9a19ebb"],["/2021/11/04/css揭秘/index.html","3968a41821e97aa0ce7bdbb0e4b1a01d"],["/2021/11/05/css-练习/index.html","cad8a1c4a92cd5d358236780ba19bea1"],["/2021/11/21/命令集-5/index.html","c32665c8be52947c62582520c9331e3e"],["/2021/11/21/命令集-6/index.html","8a83fa8a9db687e9cec00d58d9d41fe2"],["/2021/11/21/命令集-7/index.html","b5ce0eb24d1a946ab34734518df87077"],["/2021/12/01/搭建wordpress/index.html","6e88cb5ea92e453c31316cb94e52531c"],["/2021/12/08/python操作百度网盘/index.html","05dfa5c6a15de0a2b58a8f64338f298a"],["/2021/12/14/js爬虫/index.html","ec1c54a3c2c4669c3ca2201fa11779b3"],["/2021/12/25/为网站申请ssl证书/index.html","03c820c67b107e6aaa6da8ad7f70534c"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2e0b3b69706b801279a6d4a65173d187"],["/2021/12/30/jQurey继续学习/index.html","73e3294447b1cb40265a3514bca91cc8"],["/2021/12/30/jquery学习/index.html","6cc20c696c3198d5922cee1605358db3"],["/2021/12/31/vue学习/index.html","e3622b00560ce13bfa9a8c570ef72d05"],["/2022/01/02/疫情自动打卡/index.html","1de0fcbeb70b3e4400bd8f1f6c88d87b"],["/2022/01/03/javaweb初体验/index.html","b78e3c2784b35a09c4f50c28a6a7cec6"],["/2022/01/04/codewars练习/index.html","6018bf8ef2d2fcce7e90b522e86b65b2"],["/2022/01/05/Spring学习/index.html","ef0b76b140beabb8d6b0a7b1f3c3fb9c"],["/2022/01/05/vue实战/index.html","fa7a8f132be4f6e87aa222010ddfc723"],["/2022/01/08/gdb-gcc学习/index.html","8e19f8f93d24bca9c00a7c4c3bc0e54e"],["/2022/01/11/python-opencv学习/index.html","0d5c0e1ecd6432f41df12a8467ebb791"],["/2022/01/12/汇编实战/index.html","5d362db5f98b86900e9214b31350b122"],["/2022/01/17/pandas学习/index.html","8e7febbc64215d0d520e19b2ee6cf736"],["/2022/01/19/可视化图的工具/index.html","22fb874a3deeb13d4c92fb0d8ff90c25"],["/2022/01/19/机器学习入门/index.html","7270622b2070a6049517d921a3b9768b"],["/2022/01/20/cousera-ML学习/index.html","f440b0a9afb939444f06435dde1810be"],["/2022/01/30/typora解绑后出现问题/index.html","9d3cef2782e9737e83a5ce1df405abf1"],["/2022/02/03/NLP学习/index.html","aca1f6ee730c77f26d50d8f21ef0a3ab"],["/2022/02/04/Web漏洞学习/index.html","373d2d39c1895a77980730964cdec9a0"],["/2022/02/04/pyqt学习/index.html","2441c9754522ffae75891fd78892258c"],["/2022/02/04/python爬虫/index.html","462e9c905e59f73f456916ae1c4ad042"],["/2022/02/18/Electron学习/index.html","5c26f20dc5c0e317cf0cf6c551466789"],["/2022/02/22/疫情填报字段解析/index.html","d88d05ebd603acfd7e3e6bf3f94ee11c"],["/2022/02/24/Bomb-lab实验/index.html","53a25832ecfcec8efbfcbf589ea57e53"],["/2022/03/05/nginx学习/index.html","1757dfa479f051a7f5ddda1096936eaa"],["/2022/03/09/汇编原理课程学习/index.html","50067038c96d200c079455c230231410"],["/2022/03/11/Keras学习/index.html","fe5d17fe429015448fd3725e618f32e6"],["/2022/04/01/graphviz学习/index.html","c12bbf623cec77b000d26714463ed32e"],["/2022/04/07/django学习/index.html","8d3c16863c73c0eca156e2885af4cbe2"],["/2022/04/11/密码破解学习/index.html","3d0520c848a5943070a7d1eb2a088bbc"],["/2022/04/12/flex-bison学习/index.html","38de8fb69ca744f305100c65a774bc84"],["/2022/04/15/pytorch学习/index.html","46769293c54ff71b369ea2af7c23e129"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","42bab32ce979085bcf31df45b7672c11"],["/2022/04/23/写一个音乐播放器/index.html","affaacc507a9867275212a629b68c4f7"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","8a70c8ecb2789bea75f3ca602cdc5332"],["/2022/04/30/GAN学习/index.html","01fd940672dde66088bf8f73da1ef95d"],["/2022/05/02/html精学/index.html","8990d5572bdec33b0ca50baa9d5523ad"],["/2022/05/06/write-a-compiler-by-yourself/index.html","4b6e9b8d96bd4cf9ca2206def7b4ed54"],["/2022/05/30/acwj-01/index.html","fc54deff64efbe238885983e80aa40eb"],["/2022/06/14/animeGAN/index.html","b30a257d258aba9f81e52ae5f71b2be4"],["/2022/07/09/c-与算法学习/index.html","60069afb11f4d668d4504f6d04f1bb84"],["/2022/09/19/flask学习/index.html","ca366392c8d754756f603a543d96e9d4"],["/2022/09/22/cs224w学习/index.html","699c7ad6b676dc524d37775001bac349"],["/2022/09/28/记录一次wp重装/index.html","3a79ae0d49e905820f34e7cf0a7018c6"],["/2022/10/01/Obsidian学习/index.html","721d95547c25c6490beec9330f18f9b8"],["/2022/10/08/vue-element-template实战/index.html","57d3572c7f7c9a9ed615d56b8c1bf5df"],["/2022/10/25/vue网上商城项目/index.html","8e0c1aa397ecd8f9094b69ae51458d8a"],["/2022/11/11/leetcode刷题记录/index.html","4d1bdda1f6ec362650fc6f5f75aea7e2"],["/2022/11/11/使用overleaf优雅地写文章/index.html","434692a9d5a741a241e7b9c9a9d43708"],["/2022/11/22/磁力链接与RSS订阅/index.html","3c5507a7f28046f5d2d45aac888c46d3"],["/2022/12/11/uniapp申请获取地理位置/index.html","0831cf29619754b2bc486b5c07c85688"],["/2022/12/26/pr剪辑学习/index.html","3291d1417b5e4155caed68f2ab596311"],["/2022/12/27/css中的flex和grid布局/index.html","f4ad4f4894ede3ab2584a4ebb9dfc0a8"],["/2022/12/28/Flutter学习/index.html","9f39e99bd736292fa0b4ea7d2c94ea29"],["/2023/01/01/美化github首页/index.html","dabde1a898f56af4e140e0c2d3c08700"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","517d59305188e3378f8aab5efc032878"],["/2023/01/04/构建微信快捷发布文章工具/index.html","0709b8249867aff648d78dbacf9f5967"],["/2023/01/14/dart学习/index.html","61d663568f0a1687579bf59b1e3a08d4"],["/2023/01/23/闲置服务器BT下载影视/index.html","61178b7ce4b571a3ba962a06e1328b40"],["/2023/02/07/TotalCommander使用和学习/index.html","1be2a06eb1c3947486b36206f3adde47"],["/2023/02/13/docker学习/index.html","b2385e3a6d0263b52c068cb91afd3d58"],["/2023/02/17/DLHLP学习/index.html","1881bb198ecd71f169eab80064354fd4"],["/2023/02/18/学习purecss构建自己的css框架/index.html","a1e06632529943e8ef09e0dc52c2f789"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","dba046d158b8c67707af4e4e9b308f8c"],["/2023/03/05/STL学习/index.html","93a5464003aca182e27abb5c537b4bfd"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","5a549323fa2be593cdc699e892f9ba43"],["/about/index.html","45963fdeb45f4fc67247be4d5112c668"],["/archives/2021/04/index.html","7bfc061d63093d03026ae9b7e8b71bfb"],["/archives/2021/05/index.html","25a8bb620ae801a446f9f68d0e23700d"],["/archives/2021/06/index.html","d13904d5751547864ad474847fa50966"],["/archives/2021/07/index.html","15702febd71f6d3be54f8f81dff7e3b9"],["/archives/2021/08/index.html","f95b59db9d9acdb0e206a528115c62f1"],["/archives/2021/09/index.html","e13d4b24b2db6d2134cca7f6c7c4b0b2"],["/archives/2021/10/index.html","5469b949b589835ab36ad1a35db4c9e8"],["/archives/2021/11/index.html","2ae471be2a9156540b2f23fb740e7646"],["/archives/2021/12/index.html","18b83ed74ea21069a604eae4db388532"],["/archives/2021/index.html","e7e7f908bc8bdef4e791ffa84482fa4b"],["/archives/2022/01/index.html","d779014706ebe18356a0db95532a6493"],["/archives/2022/02/index.html","b6a0ff826a876aa2252f383ff453c949"],["/archives/2022/03/index.html","7d479c594b402e8db1eb845b9ab69b5b"],["/archives/2022/04/index.html","309a9c0df4dbf5db351daa20bde817a0"],["/archives/2022/05/index.html","0cf74322f5e3e78f4733e61bb2cf83d7"],["/archives/2022/06/index.html","b31271829abb9eb2e868c65b2ce46002"],["/archives/2022/07/index.html","a958f684e3c31a3927e203faa4cb978a"],["/archives/2022/09/index.html","34859d1c449bc3434d1f5c1a3e86dead"],["/archives/2022/10/index.html","369c1d37a105fd9e55e19da54d0a8bd3"],["/archives/2022/11/index.html","e3fec9cac50e5a51b95b07f527b9b735"],["/archives/2022/12/index.html","f4387789003ebfe76cf4fb34425b6362"],["/archives/2022/index.html","12b6f8d96eba7781cdf46fabd6ae90ca"],["/archives/2023/01/index.html","879c919e80edf02da3e3bad11a27296c"],["/archives/2023/02/index.html","eaf1c9fe0677c2d68b499f835627d4be"],["/archives/2023/03/index.html","49a819ab06783e2d5dece8f835fe6492"],["/archives/2023/index.html","39269c52da975d0fe44a812fe66e4f3d"],["/archives/index.html","5d3e2975c57910f7869e3c927b604e39"],["/archives/page/2/index.html","effcf9b3f8de39c79b431af8eb9d5306"],["/archives/page/3/index.html","65a11022adb6b54088b5a604248b51fa"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","6ca2b431f73432004756f36c65a8b0be"],["/categories/Linux-study/index.html","84631ff3947c2c99187564cf1f9e5fc5"],["/categories/ML/index.html","f281782fc606278cbc274402c11d5aca"],["/categories/Nginx/index.html","3f273871167974ef9973b83099120cfe"],["/categories/Spring/index.html","bbb1df97551790f5b4b8086fde84d31f"],["/categories/course/index.html","0e3dd61369d524063d6b81699218de11"],["/categories/django/index.html","c8bb0c4e7c9da5ddee7a7fff33cea3b5"],["/categories/fun/index.html","96ccf52b091884957dfeb585e60f21ef"],["/categories/gcc/gdb/index.html","8d04901c4eeceda6313255bb999e232e"],["/categories/gcc/index.html","4d719461e89631029c65733a18c741fd"],["/categories/index.html","2d3c845a796be2f494943a0c107397a4"],["/categories/java/index.html","20162397482d1eb38bc4bce43ba4c507"],["/categories/latex/index.html","cc86f93baa8d9bf70c59f4044091eb43"],["/categories/python/index.html","bcfb0877fdf2526119078a01b7c3e0ce"],["/categories/study/index.html","323e5d5500db8e30d4f75fc361a19639"],["/categories/vue/index.html","4700631c9ff94b67c5467a94b8490c89"],["/categories/误区/index.html","b86b772943f65da19ef630b260c3c885"],["/commonweal/index.html","5b206834320fb3ebaaea08936ea6a588"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","0739521941635dd6286120596503a3ee"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","3cfb412b409675b9dd4e2b1cb80a50f3"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","d32e96b2e439cd463b3de9e4cf292722"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","1eabce35e38426cbf114b164563d8edd"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","57d2a7fe399dc87fa1435a50c8d6eede"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","3160eb92a62a6a452e22208c89a8aea4"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","27a035799fed6485d3d7662fae4f72d6"],["/page/11/index.html","431307bce8c2ee32043f0c44e1b0fc4e"],["/page/12/index.html","6e8cc92ec3d4cad72fc55f46162b9102"],["/page/13/index.html","b46d26381a1f5dfc0fd8c046202a4c61"],["/page/14/index.html","6e537eb8c692d83c12aa7e3b295c24e2"],["/page/15/index.html","9016c6ee2b7a2220314abe9c90acafdb"],["/page/16/index.html","b1b19c369de23f6142603ce2b578a8f6"],["/page/17/index.html","f7f9134700d965aa52042275c0d51c08"],["/page/18/index.html","b6ca83967d51a3bd74bb619f14d9590c"],["/page/19/index.html","71dfdab17526b840b78f568c693e371e"],["/page/2/index.html","0eef52f9c364327105d68e1dc315fb71"],["/page/20/index.html","64f3e3d5e3919f16717f1fa7a2610e31"],["/page/21/index.html","6632eef04dadd04108e428a3dfc64b25"],["/page/3/index.html","04dd293861266c536b1a5fe0ba108ad7"],["/page/4/index.html","a6bd5f7ed2c5336ad2fabf441b5539c2"],["/page/5/index.html","416c14c13b954d053baf99ee69c2c07d"],["/page/6/index.html","f7a40cb6659d23b5f142de0b4d1c7e8d"],["/page/7/index.html","109193f4a957f9012d544bade465940a"],["/page/8/index.html","4462b11b1aab9f8790f60a6524b24ad7"],["/page/9/index.html","8e6694bea5234830a585d3748d5a1b85"],["/resume/index.html","1bcbdf547a2b7cd60215faf4b508655e"],["/schedule/index.html","3f08d57df157f7aa0b48619a045d4119"],["/sitemap/index.html","f690fe2272abcf883c56e9f2fcf4b6c5"],["/sw-register.js","e10dcb007989b8780d3f9a0c8c4273b0"],["/tags/AI/index.html","d96e5928b9be58cf1b7491bb321048a7"],["/tags/BT/index.html","583aff805ecbdd51ff6c31838e780018"],["/tags/BaiduNetdisk/index.html","3d2f782b89999757f31eda834489636d"],["/tags/Bootstrap5/index.html","9f3b47a6892d97c27f1e6b6b13da0e66"],["/tags/CSS3/index.html","8ae44dd449f5173ae5516c88b015a2b8"],["/tags/Centos/index.html","ffa3fc6ee1f1100501fd4f9154546d07"],["/tags/Electron/index.html","43f546b812f496e0e56e27859a19de2a"],["/tags/ElementUI/index.html","414aa9bfc316f5d221581ac1cdf846f8"],["/tags/Flutter/index.html","ced4c79adad48926f5b17891263e2c03"],["/tags/GAN/index.html","f608e7ef3dd8707034aed63e458325e7"],["/tags/GUI/index.html","7c9f4f1aef35e4295bd7012f818f8bc8"],["/tags/Git/index.html","00f6a2108ae011fb016038a2205a79e0"],["/tags/JavaScript/index.html","b555a067fc369f93117413f1b80db787"],["/tags/Keras/index.html","266ef7cfd54cc65c194dc12ab3096b05"],["/tags/Linux/index.html","19d50992c7ac43e4735b4d1f7d6eae6c"],["/tags/ML/index.html","64afa22f0987b6e44092272425e514fe"],["/tags/NLP学习/index.html","f55f898933f2820ada85828d63b8ed82"],["/tags/Nginx/index.html","2fccc6d09fc15b217bbdf71e1a28aa6d"],["/tags/Obsidian/index.html","c84d7296efbea967fc5d0d081bd9c827"],["/tags/Qt/index.html","12982f12ffcc4e9a323c30bacc908fcb"],["/tags/RSS/index.html","4e13b54490347b2cd52d5f31afc114b3"],["/tags/SSL/index.html","ac560a3032e704798a7c6b5a71bc5e28"],["/tags/Scrapy/index.html","21d3b4ddcdbf3c623146c42b54627b03"],["/tags/Speech/index.html","0b6991fbf602b8d56478a2208a040c6f"],["/tags/TotalCommander/index.html","d69718171aae47c19084961f4c337863"],["/tags/Web/index.html","53ad5ec4c5a0a0eb73245c347a733b43"],["/tags/algorithm/index.html","bfdc3281bbc0accd183854b475a3e6dd"],["/tags/bison/index.html","d976f96df318612524f2e805186bef91"],["/tags/bomb-lab/index.html","d071ab5971116c699934feb0f4c0878d"],["/tags/c/index.html","d005653270aa92505d8c518c7bf24470"],["/tags/cheerio/index.html","3ad6afee45a4f27633086f9d8bca5247"],["/tags/codewars/index.html","701188d1b3037c0b071176bf7a8af44d"],["/tags/compile/index.html","f15340fe8b944805f1998a22f96ca083"],["/tags/compiler/index.html","fab93d4de48ee347422a01cf32e16e58"],["/tags/cors/index.html","b021f6b30c85df8578746d9946a04a84"],["/tags/course/index.html","e890021410ac0e03f27996e94eb7254d"],["/tags/cpp/index.html","ee387b3e8e7dd05d564227f7b922219c"],["/tags/crypto/index.html","4069f04d50d1c0de1a87ac1ba50cc5cc"],["/tags/csapp/index.html","f0133b7bfe801f56550865eef57f3136"],["/tags/csp/index.html","2fd1eae169327c400e248397a730218e"],["/tags/css/index.html","c7812bc8422ae8783d610691d730d148"],["/tags/dart/index.html","8d06220c7d73e1a2f20180fd79d8c8ad"],["/tags/data-structure/index.html","e735b3fb94d96eed5a5779a202480120"],["/tags/database/index.html","90b994b9868d7636141f464733ff4e7d"],["/tags/deep-learning/index.html","a442591048890c726334bdf0801009c3"],["/tags/django/index.html","3df3fced6e6509fc9a4ca820342db465"],["/tags/docker/index.html","d92c10aa0c741212014d1b2bb1c5c695"],["/tags/dwm/index.html","2e978d95f78eed523536d41a7f493676"],["/tags/exercise/index.html","61195e47ca118444b7ff7f871d7831cf"],["/tags/filebrowser/index.html","0031773827f56e990bf499dd8f81cf64"],["/tags/flask/index.html","05a44bd68e5bab794ff6a51e8315e883"],["/tags/flex/index.html","c3c6cbecba9a9a5b55686c404e9b103f"],["/tags/front/index.html","5e5ea983cdb585ad0fd17ad111f03f80"],["/tags/gcc/index.html","99d2947ae145e13fb6557a3ee95992b3"],["/tags/gdb/index.html","7bed3b91f49cf92015fc67ffa38a40a3"],["/tags/github-profile/index.html","fbeff739efb4ac0fdf081aaa750d69f2"],["/tags/github/index.html","6017bc2be7cad64484e87b98e370c89b"],["/tags/graphviz/index.html","d8fecac71b071b10d173e0ad2951244c"],["/tags/grid/index.html","5fc2cfffe787b620f76e1c29255be236"],["/tags/html/index.html","6eb22e00d9398c84399f731389e91736"],["/tags/i3wm/index.html","7a7422768cbc1ea4e2474691d052699b"],["/tags/index.html","d30ab1ce85469366937eaaaa21bf5bff"],["/tags/issue/index.html","c933bac70ff6307e097093f74334b6ea"],["/tags/jQuery/index.html","f81ce2a9c6329fdc03cc40f3a00e90b0"],["/tags/java/index.html","38fd9d44cf1f671d02748f7e8f24eba0"],["/tags/js/index.html","88aedd2a5f4980c5be6cbff844fa9ab2"],["/tags/latex/index.html","52f3d297f8b8b415154551a66e8d021e"],["/tags/leetcode/index.html","5c5ae1377a7469203f714820a5294c5c"],["/tags/lex/index.html","ffd47f21ea2c1727a44795fa4a2bca7a"],["/tags/material/index.html","2f876a2d34004d36a56c7b02b5d87379"],["/tags/music-player/index.html","fce941ef4287a19e012275306c917ba6"],["/tags/nodejs/index.html","aaaf2682377358a044cad39d0ca810a0"],["/tags/noj/index.html","0d96f45170ef4ddb74c290a0802dad0e"],["/tags/opencv/index.html","908463ac271f03d04fc4e9db1eb0f1e9"],["/tags/overleaf/index.html","5c635ec8cab14be8f84ad9abe9117bc9"],["/tags/pandas/index.html","205e792f20b0e46123f51f605ee524c6"],["/tags/premiere-pro/index.html","fa94d1e550455de543fe4cd408add0cb"],["/tags/proxy/index.html","13aa294993022ce4a110bbf711d0f0d8"],["/tags/pure-css/index.html","508dff907f80fd2c505a7cd41ced3204"],["/tags/pygame/index.html","8fccb1fa0716280a4359c2956c7cd6af"],["/tags/python/index.html","7979dd0db0280bfc9e7f4ae1a393337c"],["/tags/pytorch/index.html","edd19ed676580eea01df4d714138e7fa"],["/tags/reading/index.html","5df18a0d0453120be86b11b565b7e8ef"],["/tags/request/index.html","5313e62c28b0cd3efc875783e27cd159"],["/tags/requests/index.html","c7cc128ad2e356c38050590abdde25c5"],["/tags/security/index.html","bdfd87357205b7a6110c0b9867d4be16"],["/tags/shell/index.html","b104db1dc3cf8b88ebc54572f6a99a91"],["/tags/sign-in/index.html","9979bfef427a0e2a0a5f19b3c79c8d14"],["/tags/socket/index.html","bc2f872ae499383b542c2016971859b1"],["/tags/spider/index.html","820770f699695e9666b976f84f302dde"],["/tags/splash/index.html","99479064def2b09fe23dc066a41399cd"],["/tags/stl/index.html","599f792f3c2b592a228c1b28fbfee08e"],["/tags/sumatra/index.html","8b3be778cf0248320bad881940327db2"],["/tags/superagent/index.html","bbd775790b1824697c9dc8b0da1aed6f"],["/tags/tensorlow/index.html","3b970f8540f5392977201a2d7cbb56f6"],["/tags/tex/index.html","d785562fbce1cf34a126c273d37d5b35"],["/tags/threading/index.html","59cea49c2e9baab4386f6846cda05189"],["/tags/tkinter/index.html","b53253176676c92bdb2e3e3e6c08c431"],["/tags/torrent/index.html","7e0f5c24a9877200fc3d6da18a1b0698"],["/tags/tutorial/index.html","2488949d43f33b60a19ddc00aaabfb2d"],["/tags/typora/index.html","3f8d877c8f59c22261d2adcea2a1122c"],["/tags/uniapp/index.html","b755c3938e49d1a7547c90fa429a5c29"],["/tags/vite/index.html","bc110633d185a0e0f546f2305244d34a"],["/tags/vscode/index.html","4275a2fe75f04dffaebb4bf16eb7917f"],["/tags/vue-element-template/index.html","6fb5895d1524f1d3227fd8ae30c42f7f"],["/tags/vue/index.html","5c34d42c70ca7bfb632fbe82a3450ecf"],["/tags/vue2/index.html","bd07f05f1e79524565db107f667b8e80"],["/tags/vue3-x/index.html","7b24ecd4807a7f52b8a595ce83655fcc"],["/tags/wechat/index.html","efd0a44f214f3f2d7da5daec11b121bd"],["/tags/wm/index.html","8d73a661b733602dbf5d8ddde3a66b91"],["/tags/wordpress/index.html","ae8933af120744ed01f3e446969cf989"],["/tags/workflow/index.html","1a5f27e4f2f49d2099906f60efa44d4f"],["/tags/xpath/index.html","e52cf8ecb64ec1e66dd76b59ecd3fd17"],["/tags/yacc/index.html","51fc9d5af0f816103c416e3b73207f15"],["/tags/zsh/index.html","290e54f89bb6e10aeb70761b98746f8b"],["/tags/七牛云/index.html","268e495bb826e18bacd12c8cefa4993e"],["/tags/函数/index.html","a066933b522bc92c8c8c5149eabbf4f2"],["/tags/剪辑/index.html","5fa2992bec5509d929536558874247a1"],["/tags/存储/index.html","624dafc7659f161420a616f12444db1b"],["/tags/实战/index.html","41be440d661965fa58c791b4c414c6dd"],["/tags/工具使用/index.html","8877856f4fbe6f3d868142712f3d5fc8"],["/tags/建站/index.html","1179a5cdb6c389aa5c7018849bf7a939"],["/tags/微信小程序/index.html","13464bd074ce5fe714eceb11f54e0342"],["/tags/指针/index.html","4b79117e6a9a188c8412e2f9d69eccd8"],["/tags/效率提升/index.html","3883382f8b627bb1f62eaf9032ac2ca7"],["/tags/汇编/index.html","a0c3a30f71efb4c8671f77fbe913d268"],["/tags/浏览器/index.html","c4a55f5ee63e3f42634b207de66cf89c"],["/tags/爬虫/index.html","a1961b50260133cc0eaecae48e1927dc"],["/tags/算法/index.html","86761d0273502a916ed36e5df24f9336"],["/tags/编译原理/index.html","090f161e93f254e8b5f965a1d681a769"],["/tags/获取地理位置/index.html","3489084d65c7298d13ef378ba804cb46"]];
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
