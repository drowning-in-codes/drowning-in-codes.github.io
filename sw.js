/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","accde6adf43bcde42bf9bc78c15293f1"],["/2021/04/20/稀疏矩阵/index.html","eebd26ef55acd5952371500d249e59ca"],["/2021/04/23/广义表简介/index.html","a7ed92f2c8e88bc7141db49ca6cdb8cc"],["/2021/04/29/关于指针和函数/index.html","f5d33bcd8c3db8ffbbe437f62bbbc4b4"],["/2021/05/10/哈夫曼编-译码/index.html","757cab1a3af854d5abc992aaa88f06b6"],["/2021/05/17/数据结构noj_2/index.html","1c655115e4286ddae056e8a12dbaae95"],["/2021/05/30/数据结构试验/index.html","76c113f9cfabcb7d9818cf7448b5f9a7"],["/2021/06/12/数据结构noj-3/index.html","a98818e70b50c7e94a9e36af953e67e5"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","95d61330f04986e490b23fa74b9bea92"],["/2021/07/08/课程资源分享/index.html","358f9ea84c5b79d2251a31489ef6dd13"],["/2021/07/20/Scrapy-下载图片-文件/index.html","c46f7ab65aea4455ed459d233b57feac"],["/2021/07/21/Scrapy-动态网页爬取/index.html","7d55dce9dbaa271ee836bfe465706406"],["/2021/07/21/疫情打卡/index.html","3057cfc103674b120102d5bf00e0671d"],["/2021/07/29/Scrapy代理设置/index.html","a29314b543fb377643675fef5d317c54"],["/2021/07/29/数据库认识/index.html","cad9dda5ba148ad95bbda2dd27061e39"],["/2021/07/31/Python多线程学习/index.html","6b8891cb728b23549b98419a38c70146"],["/2021/07/31/tkinter-requests练习/index.html","403d2e2ccef9140e240d67225d0bb942"],["/2021/08/10/Git学习/index.html","4547da01686f6ab9f0186b233e73b86f"],["/2021/08/15/pygame实践-1/index.html","780cf111ff477bee4e826a8a080c5e8a"],["/2021/09/06/微信小程序开发/index.html","0a2fc94287fbb03d023200d781eecf1d"],["/2021/09/21/命令集-1/index.html","76381ff22f28ef40301588d49c39dc77"],["/2021/09/21/命令集-2/index.html","cc7d1c635a179cb6d990e3e51b0b6c67"],["/2021/09/21/命令集-3/index.html","d47d6c54d7b9242f68d62d2471c98f84"],["/2021/09/21/命令集-4/index.html","1090b8a8e1ddfe0dac22086a8457de66"],["/2021/10/03/socket学习/index.html","af615b05cec264d41af4fa9a4badb0c9"],["/2021/10/10/dwm入门/index.html","24cd61df77ed0d48fb4c3b3bfa933776"],["/2021/10/10/安装ohmyzsh并配置/index.html","17e5448cc8976e265eff9c2f2a20bb53"],["/2021/10/20/css学习/index.html","aa87abd8d54a481d79a694a929371527"],["/2021/10/20/wm入坑/index.html","6ee2185809e4206a5e86874605143c50"],["/2021/11/03/微信小程序学习/index.html","fbdbd5d74dfd166155cd8d62913d47ec"],["/2021/11/04/css揭秘/index.html","babe471847f21f1d73e3c4b722af81bd"],["/2021/11/05/css-练习/index.html","02ce90ef2cdde65973056031db505727"],["/2021/11/21/命令集-5/index.html","ce53a7cf4b2f6be19c3f27c2d192bad7"],["/2021/11/21/命令集-6/index.html","88dc877c0b466c839a43feeeae83b22e"],["/2021/11/21/命令集-7/index.html","280936df5e6a97522e9a57b20aaac239"],["/2021/12/01/搭建wordpress/index.html","2b7ac1c15c05892859189d4e11c692d3"],["/2021/12/08/python操作百度网盘/index.html","818a563c8b5ea8864c0ab2f651b124d9"],["/2021/12/14/js爬虫/index.html","6090674b5d2389d3b5e0f38ecfe80dfd"],["/2021/12/25/为网站申请ssl证书/index.html","9584d43cbe79b437c8d362cca9c1b53f"],["/2021/12/29/使用七牛云为网站提供服务/index.html","d773d3bd6494c86909b2b779022ca430"],["/2021/12/30/jQurey继续学习/index.html","56b668935c958ec1f751c4224babb1e0"],["/2021/12/30/jquery学习/index.html","ac61bd243b69e65772b92ea3371102a6"],["/2021/12/31/vue学习/index.html","a0057e3669503d38cb0361c7797c135e"],["/2022/01/02/疫情自动打卡/index.html","9380e8bb94d1941ece89fd9afc6b1731"],["/2022/01/03/javaweb初体验/index.html","e42c34e63e5be9ed0d63805e1a393081"],["/2022/01/04/codewars练习/index.html","90d4f408fb73b23b1c2e66d3fbddc845"],["/2022/01/05/Spring学习/index.html","4623f9d989a91ea1c3adb9e69552e75d"],["/2022/01/05/vue实战/index.html","448d50e0ed1c5f33a809a723c6b1e10f"],["/2022/01/08/gdb-gcc学习/index.html","dbf8da41b464e71b1050aa200457aeab"],["/2022/01/11/python-opencv学习/index.html","c03ffd2b62cee5797084dc9ed595c96b"],["/2022/01/12/汇编实战/index.html","2650b827dcd760c753b8f97af14589f2"],["/2022/01/17/pandas学习/index.html","632415b6209abde6c8baee8fd82f7b0e"],["/2022/01/19/可视化图的工具/index.html","068f85caf4226998abc294117709e27c"],["/2022/01/19/机器学习入门/index.html","1246d3149cbf85276b71d047c8d32ac4"],["/2022/01/20/cousera-ML学习/index.html","019c228f5c04b55aa2db9767679f44c1"],["/2022/01/30/typora解绑后出现问题/index.html","30d675d6b816b2a68da491ccd6c0ed3d"],["/2022/02/03/NLP学习/index.html","1c08c194dd7fd16f24a681a8dbb97087"],["/2022/02/04/Web漏洞学习/index.html","1312df520ffd732f274c8665b7fd50dd"],["/2022/02/04/pyqt学习/index.html","a89dc952b0c98020738532716e5ca055"],["/2022/02/04/python爬虫/index.html","415af7fe49ead5b51b771f8e114d3aee"],["/2022/02/18/Electron学习/index.html","1c30be7f3efea57f7c9c87babe41554f"],["/2022/02/22/疫情填报字段解析/index.html","9d94f6b8184897b9634766199784e4d3"],["/2022/02/24/Bomb-lab实验/index.html","424a6e35b4b3b9bca94c58634eb29ce6"],["/2022/03/05/nginx学习/index.html","f42ec741f10efbfc6995c970bbbca165"],["/2022/03/09/汇编原理课程学习/index.html","d6ae49f2fb9e60afe5c36d7c10e89d6e"],["/2022/03/11/Keras学习/index.html","dfe4e90095274509c58ca39efb77c348"],["/2022/04/01/graphviz学习/index.html","d0e61dc1257a1a39bef49b5c67e3e743"],["/2022/04/07/django学习/index.html","0eec58056443369c2fbfccbd714eb08c"],["/2022/04/11/密码破解学习/index.html","a2d5e512ffc2dd2bc15154c3b6d6e061"],["/2022/04/12/flex-bison学习/index.html","fb4b1dc2e8d089ac1b1875023e3eb2f8"],["/2022/04/15/pytorch学习/index.html","1b60d5c22d5a9db362038bbc076a1763"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","a6914c1a85a2132c99fe0e415d1ce0be"],["/2022/04/23/写一个音乐播放器/index.html","65c411ed4d04b57936e6fc586d2aca9e"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","b397120e4b35a10e132e057727191c33"],["/2022/04/30/GAN学习/index.html","f25ff041137bc06bcb5c0bfd170d083f"],["/2022/05/02/html精学/index.html","b930afdadf26e0834eb1858e8cd0fa06"],["/2022/05/06/write-a-compiler-by-yourself/index.html","9042e6daae1f76833f6f734e90caf4d2"],["/2022/05/30/acwj-01/index.html","17f1a2c36da9475b531ba626a87ff2ff"],["/2022/06/14/animeGAN/index.html","12387c97a62755b32f507ca7c39942cc"],["/2022/07/09/c-与算法学习/index.html","6968f5b93b259e1f803c19deae0a7bd7"],["/2022/09/19/flask学习/index.html","e12ed5a580533f170694d263f939b91e"],["/2022/09/22/cs224w学习/index.html","8b61da35e7301f834690a917e9068243"],["/2022/09/28/记录一次wp重装/index.html","7d179a608529aadb2f9ff04b89bb1a9c"],["/2022/10/01/Obsidian学习/index.html","fd7fac960e07bde5153819caade32755"],["/2022/10/08/vue-element-template实战/index.html","a39452a85d22a8810d6ee29064aeae0a"],["/2022/10/25/vue网上商城项目/index.html","015f19d0a493ae4aa1b7e8249da188b4"],["/2022/11/11/leetcode刷题记录/index.html","9b360ca341135fc2bc8663156c081348"],["/2022/11/11/使用overleaf优雅地写文章/index.html","2f86a97f8d1b4f85cf3cd43fd60f6063"],["/2022/11/22/磁力链接与RSS订阅/index.html","512315ded8b2f3649cc0c07c53c9e979"],["/2022/12/11/uniapp申请获取地理位置/index.html","aa94597ba0a77c132bccceb415f3dca9"],["/2022/12/26/pr剪辑学习/index.html","7417e6d5d0e0b74a8ee882e0d853aa76"],["/2022/12/27/css中的flex和grid布局/index.html","7ebb5662daf3cc87555d14cd40edc346"],["/2022/12/28/Flutter学习/index.html","1e681a9733a1fa9997e6a27191160291"],["/2023/01/01/美化github首页/index.html","9f74c8b516e848f4e2390162db44608a"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","da5c34e031527cb9ae72cdcb27c4540e"],["/2023/01/04/构建微信快捷发布文章工具/index.html","67ad8cfb3a7aca3db840312c78dc7f22"],["/2023/01/14/dart学习/index.html","6c74825588e0fc73ca84d922e05c722f"],["/2023/01/23/闲置服务器BT下载影视/index.html","123f0dc899047e5b5f26a2519ce5e66b"],["/2023/02/07/TotalCommander使用和学习/index.html","8d851035cda9b49cce58b8ff1c072e2a"],["/2023/02/13/docker学习/index.html","742a4bfd15a42cbb2084e2abce4b07fd"],["/2023/02/17/DLHLP学习/index.html","552eb17d6fbae9cac8a904f667425c43"],["/2023/02/18/学习purecss构建自己的css框架/index.html","1fc9f8758f0716a2a1cad4e746ab577d"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","ca3d9fb52105406b240321144de14188"],["/2023/03/05/STL学习/index.html","2146a08ea403b83dd68d397e1032b4d3"],["/about/index.html","9143499aa6db11843c12773886a38423"],["/archives/2021/04/index.html","958bf6eff02c4325dcb17ecefe3780f2"],["/archives/2021/05/index.html","421a1a505ced4ad7d69004eb33cb2ada"],["/archives/2021/06/index.html","ad924ac46ac65470b0bbf212c5cb2e18"],["/archives/2021/07/index.html","d3938aba14f941e4604ea85b5cc85c72"],["/archives/2021/08/index.html","cb7ebe547d3c5ebaa73ccce0cb61e913"],["/archives/2021/09/index.html","a3fee7bc7b340108896d7b4d8713d15b"],["/archives/2021/10/index.html","e4a1270e0c46ac60e07273a32b62b621"],["/archives/2021/11/index.html","35758fae618490a54c8557ae51148feb"],["/archives/2021/12/index.html","0ac2e595d2806a897a0f7a8dbc5b4bef"],["/archives/2021/index.html","a2669dadf07b6a7bb925013fce06c4b8"],["/archives/2022/01/index.html","40241761949d7cc257740a9751f6a030"],["/archives/2022/02/index.html","0b8245e1fb7896065db83355ddd1868b"],["/archives/2022/03/index.html","63180182c0c4891189abdc9d1267e4fd"],["/archives/2022/04/index.html","c8b7e83ddcdb7796bb4e1b079c867c34"],["/archives/2022/05/index.html","047676d54a2a07530f79a85717e20b40"],["/archives/2022/06/index.html","e09824426713319e58fbedf19a326048"],["/archives/2022/07/index.html","2f6d4bebe82250f455a9ca4626e4d48e"],["/archives/2022/09/index.html","243b18d2d6290e91fd18159d8d3edb5d"],["/archives/2022/10/index.html","5fdc957170a11f1ff0a7c181f36d5c46"],["/archives/2022/11/index.html","dd21dcf78249c9ffb0307fabca5f632a"],["/archives/2022/12/index.html","7b44de8f2cbb379aa8932b3c9f3859df"],["/archives/2022/index.html","aa9b070b98fe483fd1be1a23798a9a1c"],["/archives/2023/01/index.html","01e53e7682481876014b16162c1e68be"],["/archives/2023/02/index.html","fea14d049eab99e086be56278e4e8fca"],["/archives/2023/03/index.html","82946d5a3b19a37503daecab8b89aa84"],["/archives/2023/index.html","9d829e8d4f8e28d397555dcf4c2c16a8"],["/archives/index.html","355a5e72b896af8d33539900ba4f43aa"],["/archives/page/2/index.html","c33181b8bb1411f285cb85e99cd4d6bf"],["/archives/page/3/index.html","5f36dd895d4e0e135e03885810bc5d60"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","3760d5d63f1111f181324149bc8cd216"],["/categories/Linux-study/index.html","5892bcb955adfdfd1f0b24da197da3cc"],["/categories/ML/index.html","0c3abff6e01d430e6aa3c56ca14d83ec"],["/categories/Nginx/index.html","40ed33f4c92d78c5a90ebe5c45ba7f5d"],["/categories/Spring/index.html","c3204d23a3c0ace244cbd3236a31938b"],["/categories/course/index.html","b0fbe30b8151147c1ca43694f34a497f"],["/categories/django/index.html","435ecefe35b28f11bb237e72b9b82dda"],["/categories/fun/index.html","48ca13acd091d7b6264432ee9272ebca"],["/categories/gcc/gdb/index.html","1f6f0b4941cd878a1a101ede8d5c69c0"],["/categories/gcc/index.html","16bc16bbcc7840dde62c70150ff84277"],["/categories/index.html","ae7429f2aaeabb55b6f216159f01b9ac"],["/categories/java/index.html","ce5b5da4150cbf48bcad939bfe304bd9"],["/categories/python/index.html","f964e1e56f5ac68976dec09325731699"],["/categories/study/index.html","129685966250cea9334580eb40302ded"],["/categories/vue/index.html","809796bb6d71718ec4b35079614175ad"],["/categories/误区/index.html","b85edb7260a85f55f702dc721b3a911e"],["/commonweal/index.html","bb1723a91a7387efcdadc529326b0a2c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","156532fe819b43caa34f8258cca4a4e2"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","9698bcbd97abe5e3b3789c06833162e0"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","22fd7f2bd7bb6c88b4f830db60325cfa"],["/js/algolia-search.js","c9fbfd9d660dc7201290c424acc3db5e"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","34397674fd050251f2f49d77fa01ecbc"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f7711ff946e87ad194bc015941d77583"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","e2fb2b6a389cc44dce9f825b95224e4f"],["/page/11/index.html","5bce755a2813deecf50646ce6f0aa763"],["/page/12/index.html","2f4bff2247c109c0d4873b0bb2997820"],["/page/13/index.html","60ec6fc59ab96523183deb94375c5869"],["/page/14/index.html","d517ac915abe9f87bf9dd29912dca9f9"],["/page/15/index.html","fb5b83eedb2ccba08f1eb1f832f01bd7"],["/page/16/index.html","2b33f99de6c219326f57194c064154e6"],["/page/17/index.html","914335f89aa540805356229219894078"],["/page/18/index.html","f12d8de2613d47f3f81f11f7f1c73950"],["/page/19/index.html","52a0d3e4bab53e874a88f2c1cb46f24f"],["/page/2/index.html","e357dec42f8476076a9e6656a5836202"],["/page/20/index.html","9d20c38b3e6c4233402db2ceaafc7a10"],["/page/21/index.html","22fbc5c8f4812bcbcd5550d3ea4b9ee9"],["/page/3/index.html","e14223508654d17659f9f595f53d6ad1"],["/page/4/index.html","26db7f1ee2aa5fcb09da4589b25a8c41"],["/page/5/index.html","653d7361ae4a8e898b55d66f4a111ce1"],["/page/6/index.html","612b8538c15d0c78a77327e71e2a8873"],["/page/7/index.html","ce6e84d9f6393be03acaaf860bb113f8"],["/page/8/index.html","c0451683c93d771255973a4581c8a8ff"],["/page/9/index.html","167f3d03ae9619e26612dae6d38c1e03"],["/resume/index.html","58d6c0cee37c7a4ce918e743a4155a8b"],["/schedule/index.html","7c5c7110d8ce57ee68a8acd419951942"],["/sitemap/index.html","76ef9592455eed3069a8ff43c9808199"],["/sw-register.js","523a4d0e6036bc63b39535c835913bd5"],["/tags/AI/index.html","5fa05b4c5d73a3e157844f716058c84c"],["/tags/BT/index.html","3d74fe9f69d14dbdb672b63de8836319"],["/tags/BaiduNetdisk/index.html","6a22e4a32cf5aa059df2c0415ed156d4"],["/tags/Bootstrap5/index.html","17c00fc5c342e328b283000735c31b76"],["/tags/CSS3/index.html","b2508acdca4d30d779eefcd37201e845"],["/tags/Centos/index.html","7fc985e0356f3276975c819289be875a"],["/tags/Electron/index.html","186fb1b87d642f2b91d0bebad29e666e"],["/tags/ElementUI/index.html","7e4f3b916e0165677e0173a6d4375e96"],["/tags/Flutter/index.html","e6b93b1b5eeec9c84e9a1520db8ffaee"],["/tags/GAN/index.html","613c4567a012361ef56dfa0771cba853"],["/tags/GUI/index.html","2c92289b20a81596177b41b2f6372959"],["/tags/Git/index.html","ebfefa2416147664d86519279d1f7897"],["/tags/JavaScript/index.html","00aac750bfbe097766fba1366e13f0f0"],["/tags/Keras/index.html","d9bef2b8359af919ed20a2765138dd6e"],["/tags/Linux/index.html","afac41a95a29c1551e6618e69d7d73e9"],["/tags/ML/index.html","7ed51817b208bc72789a383ed1d41595"],["/tags/NLP学习/index.html","fddeca1ac64fb959d70ba8f35d2daf43"],["/tags/Nginx/index.html","9d0bdd75276d43d212dedc07952274af"],["/tags/Obsidian/index.html","f9061b3e776cea8335f0f2bea268cc6b"],["/tags/Qt/index.html","c1c1d815c452aaab51bff4059a0fa107"],["/tags/RSS/index.html","5a1b0d4d4f376a8f4c6c29d1ddff5d1c"],["/tags/SSL/index.html","836a20e16dd144f001d47fcfb560bd05"],["/tags/Scrapy/index.html","8c2dc5ba55506486536439738b29c5ad"],["/tags/Speech/index.html","7a5f0a6c2710c7a9d2136d5847f5a717"],["/tags/TotalCommander/index.html","03112b099cf94f334abfd194eb468855"],["/tags/Web/index.html","cbcf8972a216a0a854e6f70f52124708"],["/tags/algorithm/index.html","e7506676e5477c4b0519d3f887083ae3"],["/tags/bison/index.html","2e95fd64c231e52f2be6bf518248b6eb"],["/tags/bomb-lab/index.html","b42c3986df9d2e4f987984e00cf419de"],["/tags/c/index.html","594ffb8d32662d8aadaa2b8d1f479166"],["/tags/cheerio/index.html","3b358b6afab8f4962af45d6989a42194"],["/tags/codewars/index.html","040f9775b3a14274dbfaef3eeba05d3b"],["/tags/compile/index.html","9745f13929e02c945cbc1dd4770f1a97"],["/tags/compiler/index.html","ff9ec50658d9b13edde638fa8f2a50bb"],["/tags/cors/index.html","9c524bf19d7adcc41963caf8f3fd834d"],["/tags/course/index.html","7afe53ea0892fe49e6d68e986488bb24"],["/tags/cpp/index.html","c7d9cef3ba02ca520017db9902d93764"],["/tags/crypto/index.html","724b8fcc7a7ed87052285c5f21589074"],["/tags/csapp/index.html","ba2f49dd102a578dd52f86925290f9b0"],["/tags/csp/index.html","24d00f3429558e5b1d237adbb5aaf617"],["/tags/css/index.html","8c0b90d6f4954aab13ac03bdc5e835b0"],["/tags/dart/index.html","522c8e7f3561034074a6210548e2b169"],["/tags/data-structure/index.html","583915845c813e0afb771056ccce658d"],["/tags/database/index.html","fc63ac3b8a2c25d1d00bfe1f27802f73"],["/tags/deep-learning/index.html","3171af8e626a8be0b5b08bb3c6d31ab8"],["/tags/django/index.html","c3eb5f4e58b96291e8d709ffa8bf2f90"],["/tags/docker/index.html","57d4b2b3c865d2849430c843ab9df63d"],["/tags/dwm/index.html","4ce9dc30a8bca7127a0f088b5b0845f8"],["/tags/exercise/index.html","1b7c8d57adf497e9467394504a2dc668"],["/tags/filebrowser/index.html","bb087000a35e260d41746345a90a6425"],["/tags/flask/index.html","da21848c4105f20510865f5d09a22b11"],["/tags/flex/index.html","ea33ae6ca75a5de80e0abc181925b05d"],["/tags/front/index.html","35e726daf69ec2793fc66f120e12659a"],["/tags/gcc/index.html","08462d6ea21bc18723141de38b29aa39"],["/tags/gdb/index.html","bd20fb8768df0fba1efd018a9f34e1bc"],["/tags/github-profile/index.html","f03c1d547ea6e6fb51ecbd855ff2873a"],["/tags/github/index.html","db6e7a821c27f9ee3401b160054bfab8"],["/tags/graphviz/index.html","a99dac4d0e539a518e1e6269a284218f"],["/tags/grid/index.html","b4db0eee9fa869ae5169b0a9b7002a6f"],["/tags/html/index.html","503705014c8e2c623b55134adf3b0487"],["/tags/i3wm/index.html","16386396abb4f2e2fffe2b3a91129fdf"],["/tags/index.html","0f996c6677ec37c04eb3e9ec902df62c"],["/tags/issue/index.html","8b50ea378322c70ebe86a93381beeae4"],["/tags/jQuery/index.html","bf2900176dce04f6d4ba6d6db8293b1a"],["/tags/java/index.html","5d5effabdba6bedc35f2da35c54f2ad0"],["/tags/js/index.html","4ac77c2bf39e69c65ef7efd4eccc48c7"],["/tags/latex/index.html","9d20e38c0d5281807b69664e11cbae78"],["/tags/leetcode/index.html","d785a1974e0b876b2178a0ee0a7dde21"],["/tags/lex/index.html","d3565a2bca1c6222fcc8a53ebcc7a0f9"],["/tags/material/index.html","960fbc8b4183b0e3309dd20cd8662f83"],["/tags/music-player/index.html","e7c1224d673969f4397e9a9ecbad5a01"],["/tags/nodejs/index.html","79a7ad9b04849da074268843c2f2e011"],["/tags/noj/index.html","18be8be221f93bb31f0c0e8acd5e084e"],["/tags/opencv/index.html","71c09e50b3f95f9a5fde2b3b931ecbbd"],["/tags/overleaf/index.html","59c317f9e121e525a89ab7c1b65e4ccc"],["/tags/pandas/index.html","7d8e7a5e7eb1ff06c86166410d1423f4"],["/tags/premiere-pro/index.html","256002d12cee3c9375d4acc4814afd8f"],["/tags/proxy/index.html","ba001d8c8eb2731f744a084e68ae3b63"],["/tags/pure-css/index.html","402d0651f25445ba343e6f020eeb3b09"],["/tags/pygame/index.html","344e8359910ec754dc44ad5c627e6a54"],["/tags/python/index.html","a699d2c0c900389f7343d0ff29bcc9ec"],["/tags/pytorch/index.html","92026d3ed9579010fd69a720b58609e3"],["/tags/reading/index.html","0c4b8a0a76d226a5be9908bc2a6a84d2"],["/tags/request/index.html","23711766555cda6ed321e3488e02cf7b"],["/tags/requests/index.html","80a26e835c727598f1c5a21225db4c62"],["/tags/security/index.html","c15a5000e95b1acc38744be59ea51e7d"],["/tags/shell/index.html","af3d539f5182cb056c745a40f71abdd1"],["/tags/sign-in/index.html","216a9479eb8278eb0fd46981bf73d108"],["/tags/socket/index.html","4c473aeffd3e2379a4a0b8dc7017aecf"],["/tags/spider/index.html","6a85dff777e735552d976cb0d58e5add"],["/tags/splash/index.html","ebeda23889421358ad071e77b92c3b51"],["/tags/stl/index.html","1004ed4c5ac6770f8658ccd19e3f5a03"],["/tags/superagent/index.html","2e629124052016aac4cfcb685291cc33"],["/tags/tensorlow/index.html","251bbf762d3f605a417b846646838bb9"],["/tags/tex/index.html","676629b20e6aba6132dbd2c356abf44b"],["/tags/threading/index.html","7f0cb3b894fa9a73ac5255a569aec083"],["/tags/tkinter/index.html","4ea59d42ee6d756edadaca88458985cf"],["/tags/torrent/index.html","9124f82d7895f0f4d409c4fd2fbb199c"],["/tags/tutorial/index.html","5a079d3b96edc19567bc651cba94a604"],["/tags/typora/index.html","02f430a23cc749b8995f22e034e98354"],["/tags/uniapp/index.html","d7b8faeda04e741e333701f4ae144bbc"],["/tags/vite/index.html","d6341f5fbe7318603fd9f89ef233c279"],["/tags/vue-element-template/index.html","a0fa9165b8e4bc748bc5a5ddb936f309"],["/tags/vue/index.html","8bd6a8594698a4fc54a35ec262c789e0"],["/tags/vue2/index.html","606b16d12a1565c2acac428a07f0538a"],["/tags/vue3-x/index.html","98489f8301f0ff2c497b0658cf7a939b"],["/tags/wechat/index.html","ddabc7e84819f16fb734cbc738019dde"],["/tags/wm/index.html","a42810b78f9c40bea93a4e08bd72b080"],["/tags/wordpress/index.html","5999a4263ef5f87a2e53a9ac2854441c"],["/tags/workflow/index.html","b098d40a0dab60a22d122555536820c7"],["/tags/xpath/index.html","5a2af2373c28bccd011b7298c30d4798"],["/tags/yacc/index.html","898cdaf96d9c3926e1330945c221e43a"],["/tags/zsh/index.html","1a5044f860ae84bf3cc953d9630d0511"],["/tags/七牛云/index.html","0d16fc01f54eb2a0cecd774f7bca73dd"],["/tags/函数/index.html","2a24b6a9ec2ac467193294a59bd94f07"],["/tags/剪辑/index.html","8ac563de84117b8e7f7bf03f3ba329bf"],["/tags/存储/index.html","8ed7593a0cfc1ecb3dd33f414fc0e965"],["/tags/实战/index.html","7bedb516bb4a87df001d12078723f122"],["/tags/工具使用/index.html","f72d12fc4f1ad1fa4e882a949152d3f9"],["/tags/建站/index.html","33037d1949b1c463840fe0556d2f6696"],["/tags/微信小程序/index.html","9d9e43957c74796f92d7e6ddcf20b66b"],["/tags/指针/index.html","72e50d0b1838ff1a3a3c725a2947203f"],["/tags/效率提升/index.html","ce1e8f4ebc1c26d7132028f3fb8c7e03"],["/tags/汇编/index.html","705da209bd4182bfcd9b33f35194cd9e"],["/tags/浏览器/index.html","f7d95a6b545c72d82acee543007e1a10"],["/tags/爬虫/index.html","a7e55da74e51af065f1b8abb6db618f3"],["/tags/算法/index.html","d16632f2391df64fa76f7a2887486cd7"],["/tags/编译原理/index.html","070c0ef894760af3f3435c9e299413df"],["/tags/获取地理位置/index.html","ab969cbf471cd1cb9e634e5a2a837017"]];
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
