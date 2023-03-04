/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","ea229fb288e6212a845a8eee2906996e"],["/2021/04/20/稀疏矩阵/index.html","e9b32c8068e0c637239d9f7a916b4fda"],["/2021/04/23/广义表简介/index.html","2b87bc0be48e1c5463fa00445c4e77a9"],["/2021/04/29/关于指针和函数/index.html","1e8835b651475387bd35a6c0de5e4afd"],["/2021/05/10/哈夫曼编-译码/index.html","2d548b97f80565f36adbeccd213057dd"],["/2021/05/17/数据结构noj_2/index.html","0fe97e7a2cd29d26cb1f4e560d23deea"],["/2021/05/30/数据结构试验/index.html","7891865755f3dd5b95f8d5048d241b98"],["/2021/06/12/数据结构noj-3/index.html","b6bc7affdab9e112d366ec7da3634b3a"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","0674084484bb6da2d0ea2c7cfa9059b3"],["/2021/07/08/课程资源分享/index.html","91eca01f7da1eb328e01a8ac7077ceb9"],["/2021/07/20/Scrapy-下载图片-文件/index.html","fe3044ae528c509262bcb8a743d8dd48"],["/2021/07/21/Scrapy-动态网页爬取/index.html","e2d7306bf43d46fede47dbded3fc431c"],["/2021/07/21/疫情打卡/index.html","1b5ce2ea14e61ca08e9c2c40db5dba1f"],["/2021/07/29/Scrapy代理设置/index.html","2f18853f6de8a453aaedd937392be133"],["/2021/07/29/数据库认识/index.html","503d1be595b1716143bb16cbbfe0d672"],["/2021/07/31/Python多线程学习/index.html","1f8356ccdf383c9e91eb0d475cc840f7"],["/2021/07/31/tkinter-requests练习/index.html","d3bd77b582f4354d5b1f916399b8333e"],["/2021/08/10/Git学习/index.html","d25c27b2e695e86bc9c2e302ad3e962b"],["/2021/08/15/pygame实践-1/index.html","cb076dedb79f1b6de569ffa8177c9b4f"],["/2021/09/06/微信小程序开发/index.html","834053e60a8a79fe79d44cae1ebbcac9"],["/2021/09/21/命令集-1/index.html","211aa13b03352184a90d9e78c5444aba"],["/2021/09/21/命令集-2/index.html","a095b5989d1d971e07cc70c3d84fc5bf"],["/2021/09/21/命令集-3/index.html","a0ef3eba3b24224bb88a5c6834e7574e"],["/2021/09/21/命令集-4/index.html","ef7b9ddc91898c393441d76cf5fe1fc7"],["/2021/10/03/socket学习/index.html","5303a00b8cc9a251126be537fdf874aa"],["/2021/10/10/dwm入门/index.html","2dbcb3e5aeadb2a42e5da39fd85d8749"],["/2021/10/10/安装ohmyzsh并配置/index.html","e11cd15255354be4011468d2a42912f7"],["/2021/10/20/css学习/index.html","621c64dbdd808bd245ad782220176403"],["/2021/10/20/wm入坑/index.html","530a976d27459460b4d4e8fbccaad77d"],["/2021/11/03/微信小程序学习/index.html","77d528dba38ba3b075b070a9cf2c5ec5"],["/2021/11/04/css揭秘/index.html","03ddff7a435d6adeace2d0931e0001dc"],["/2021/11/05/css-练习/index.html","436697009cdba8a54f383e8890fd8716"],["/2021/11/21/命令集-5/index.html","21169f8a0ea7775991a5470c2de5446c"],["/2021/11/21/命令集-6/index.html","a5593935c92d8f979b848c72608f5d9a"],["/2021/11/21/命令集-7/index.html","6ef8d4fa5073a7b603a18722ec328b45"],["/2021/12/01/搭建wordpress/index.html","27da898d5cfc9a0db9ff72be18cdf9fb"],["/2021/12/08/python操作百度网盘/index.html","0d9df6b56260eb5e4d6405dc80ecc6d1"],["/2021/12/14/js爬虫/index.html","80922a6aeaa91b995ae9db33caf7ba63"],["/2021/12/25/为网站申请ssl证书/index.html","0605c6ad563f031137be6a57f37df997"],["/2021/12/29/使用七牛云为网站提供服务/index.html","d60bf6f774860e2f0e06f03633a1caac"],["/2021/12/30/jQurey继续学习/index.html","09b78fae8cd6298460042e7311de871f"],["/2021/12/30/jquery学习/index.html","c677b58ee9f5d99c89f23880bff3906d"],["/2021/12/31/vue学习/index.html","667ffacb5709625eb864e409eed460e8"],["/2022/01/02/疫情自动打卡/index.html","bb72d3ad7f5ae991fd477f32c4118547"],["/2022/01/03/javaweb初体验/index.html","206ca8c3b335620809a32e6d3f1d5721"],["/2022/01/04/codewars练习/index.html","156880b0ed55e7c761ec1d506584c6ea"],["/2022/01/05/Spring学习/index.html","9c1abb45e9b736957ba7247ca41fa426"],["/2022/01/05/vue实战/index.html","b4c2fc6bd1863a99353e9efb1824a693"],["/2022/01/08/gdb-gcc学习/index.html","fe28b72290a43c072276b74d790d567f"],["/2022/01/11/python-opencv学习/index.html","9953411e958c6550c4fc308c23bebb14"],["/2022/01/12/汇编实战/index.html","735b7dd39ed8f3eb8cf774f74bd16481"],["/2022/01/17/pandas学习/index.html","23269c0a243256d23dc2ea00e41c72a4"],["/2022/01/19/可视化图的工具/index.html","524f785f196fb3ad24174e061b5dbd89"],["/2022/01/19/机器学习入门/index.html","4c8b9d2d8b74b71df789336ad58231a0"],["/2022/01/20/cousera-ML学习/index.html","d01cb47d72f0fb861ba5f24a6e7ad384"],["/2022/01/30/typora解绑后出现问题/index.html","bbb6082471ec188977d88f32867921c7"],["/2022/02/03/NLP学习/index.html","8a25ad269cca703cf0b40a401c240588"],["/2022/02/04/Web漏洞学习/index.html","3484dd3739bbd9fc816f368e5a599253"],["/2022/02/04/pyqt学习/index.html","76b1c4d1c6e9af3c8361b370a0c18600"],["/2022/02/04/python爬虫/index.html","a30325d04766daaf496c5931455afee2"],["/2022/02/18/Electron学习/index.html","94ebdb4d63aad30ee3f87eac19dcfbc0"],["/2022/02/22/疫情填报字段解析/index.html","337a59d340d4c140ef1d2b608add2522"],["/2022/02/24/Bomb-lab实验/index.html","28cd09a99f91034b54f065d6e7e73d03"],["/2022/03/05/nginx学习/index.html","0671d64fd001d60582ebad083c054e1a"],["/2022/03/09/汇编原理课程学习/index.html","36018a9b242910da7486da09b7ec6ff6"],["/2022/03/11/Keras学习/index.html","0007228ea633b40e5c66cca1b259f220"],["/2022/04/01/graphviz学习/index.html","5ee89c8227c5daa0a4cf23287ae784de"],["/2022/04/07/django学习/index.html","308d00d696b362954efb5db2f88f90cd"],["/2022/04/11/密码破解学习/index.html","91e22da80954fc0627723fba206750a7"],["/2022/04/12/flex-bison学习/index.html","257fba794b04c1f2d83c3813b308bed7"],["/2022/04/15/pytorch学习/index.html","50fddc172c583d8cdaeb38636275ee9d"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","74388791349b3ebd43483915e15fedbc"],["/2022/04/23/写一个音乐播放器/index.html","6e455f6715b9f14cc197a61e27959abd"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","0c2abead7952e6a0944dedc2b46a690d"],["/2022/04/30/GAN学习/index.html","bc444e932939cffe45f0bedb59ae7d7c"],["/2022/05/02/html精学/index.html","93e3e3730582b0a252f20dfebf934f16"],["/2022/05/06/write-a-compiler-by-yourself/index.html","7cab2e7c1eeb4adacde0d7170b4525d7"],["/2022/05/30/acwj-01/index.html","99fefc0c9ca0ad44ce46ae8d382e50e0"],["/2022/06/14/animeGAN/index.html","c36c74e76c00b6bd1184ee0884c2773d"],["/2022/07/09/c-与算法学习/index.html","c3b15e8e633d2a6dadefb5b0eb2f134d"],["/2022/09/19/flask学习/index.html","c057541c22d947f9ee99ba47aa8f93f4"],["/2022/09/22/cs224w学习/index.html","463cc8c34c045a477826637b54498ae2"],["/2022/09/28/记录一次wp重装/index.html","28d9fd600a805c8a21c9e46d65ae3059"],["/2022/10/01/Obsidian学习/index.html","b1e775ea41f484885380f39e9ac6743c"],["/2022/10/08/vue-element-template实战/index.html","bc3ad45b7682a05dcc3eb6881b8ee0a8"],["/2022/10/25/vue网上商城项目/index.html","96718d420a685957050a3e85e0049a4e"],["/2022/11/11/leetcode刷题记录/index.html","87a954489f04098da3cf8b92d116d50e"],["/2022/11/11/使用overleaf优雅地写文章/index.html","c3b3d97188c2bc905f407dacd5be283d"],["/2022/11/22/磁力链接与RSS订阅/index.html","a7558d59e0ec7977820bd0b58f9a2cb4"],["/2022/12/11/uniapp申请获取地理位置/index.html","b7ec78788253a2d4ef56b2468e01087e"],["/2022/12/26/pr剪辑学习/index.html","39fd9872c2d7ea1a13b285a296304e69"],["/2022/12/27/css中的flex和grid布局/index.html","1cc2e3f4bc0eb83137d2c15827a0ca5a"],["/2022/12/28/Flutter学习/index.html","8ea0e40a27eefdb673e26c60eb2b9c42"],["/2023/01/01/美化github首页/index.html","698c8631ae71e920333ed218ba14bcf9"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","f0f7b8c4cd6af112a26ffb36503cc7e0"],["/2023/01/04/构建微信快捷发布文章工具/index.html","972c7c864cd6cc16e577f782080a06b3"],["/2023/01/14/dart学习/index.html","f75def2bf7b4b09328fdb29a8b2bd06f"],["/2023/01/23/闲置服务器BT下载影视/index.html","9fea93beaa957961283b5b6513b4b62a"],["/2023/02/07/TotalCommander使用和学习/index.html","07e6e7bc4e188a75403f0953659539dc"],["/2023/02/13/docker学习/index.html","56c53c75d8f833d717f4778355febb11"],["/2023/02/17/DLHLP学习/index.html","1f9aa5be42f429039eb4818f3204f054"],["/2023/02/18/学习purecss构建自己的css框架/index.html","1bcda34a574bbd1ea48648f1fbc5033c"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","650a69905e08113174f7a0ba82c8464b"],["/about/index.html","f566caf9ba36e0c23c0904f593f3159f"],["/archives/2021/04/index.html","dd3ed9d44e0f56e789b340b9da6fb70d"],["/archives/2021/05/index.html","9c258a54d0698785c84c9d31ba08c396"],["/archives/2021/06/index.html","ff58dd1ffe60338ac9449834ef192c3a"],["/archives/2021/07/index.html","83a69d1ff5b7b7c431890375e2c6d446"],["/archives/2021/08/index.html","6c60269e090dc01b245aba490ae7026d"],["/archives/2021/09/index.html","c71ced5db58f5fc86e36f6aea34c9405"],["/archives/2021/10/index.html","709b6163693955f80a1761faa19f25ca"],["/archives/2021/11/index.html","4c47f0364fbbef9a04b613bc66680da1"],["/archives/2021/12/index.html","ecce4b0d3e7e43f73f36ebb4834bf467"],["/archives/2021/index.html","22326500bee82dd4f3c5f51031a7a2e3"],["/archives/2022/01/index.html","acda542aad2aa9b11bf65221e8a87522"],["/archives/2022/02/index.html","63db3e617521cfe7d3b3ecf9614b4909"],["/archives/2022/03/index.html","839e6374e444dbbe5d9810f826aa7b26"],["/archives/2022/04/index.html","b5801ecfa2b1f7ed6c602a9754760eff"],["/archives/2022/05/index.html","26997504af6907f2b5bab2ebdbc5f602"],["/archives/2022/06/index.html","e56de95f580c386e23f7dd4b26066486"],["/archives/2022/07/index.html","9f21ce95dae0f1622da1f09e32ba5410"],["/archives/2022/09/index.html","a754c029444789335e3ce072578541c6"],["/archives/2022/10/index.html","b12f90891cc10ea7ade437d9f5087e05"],["/archives/2022/11/index.html","fbbc224a3c82af33e372638f2c42460d"],["/archives/2022/12/index.html","aa5e0c2230bea3010a691349181889c5"],["/archives/2022/index.html","79136d2e30cc080b6268db3ec03ed3b3"],["/archives/2023/01/index.html","4a54e6f96f22ef955d5a48db69c54484"],["/archives/2023/02/index.html","2185b08aed89886066903cf5a4d91703"],["/archives/2023/03/index.html","ab3319462fc1cfe0f521139713419a04"],["/archives/2023/index.html","f7729bfece69717ff48626a7ee26d73d"],["/archives/index.html","20d432a7fe1a822509ace8488f1b2450"],["/archives/page/2/index.html","9af2206fef05e7ebf2b7a52906294e53"],["/archives/page/3/index.html","1b4d46240fe20dcf726ad384a852fc38"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","c14c3f8de166e4c7d4a9949f7e7ed9c6"],["/categories/ML/index.html","896ff3f9b41579cb59a001c90b2f3d78"],["/categories/Nginx/index.html","26851390094e2f281ac43c76166c04b0"],["/categories/Spring/index.html","7492934f84e9d52200f356a85fdb47b0"],["/categories/course/index.html","2a5d33240221c44294210b78e59c3333"],["/categories/django/index.html","35514716b6caed5421cc2a9aa205cbe1"],["/categories/fun/index.html","21491ae46b7f7961d93760e015d04c71"],["/categories/gcc/gdb/index.html","268f4ad5a3c5c5efc94a9d7552c8d0ca"],["/categories/gcc/index.html","54a7e9cf39b5d0d5f106068a185a83ba"],["/categories/index.html","99865ed34bbd6bedcc123630b6b0cff9"],["/categories/java/index.html","588bc6b50def871bc7c8108eac738a24"],["/categories/python/index.html","61c1038925b2b59945b7db05509b0b10"],["/categories/study/index.html","7b265eeb459f40bb658d5527b7d5741a"],["/categories/vue/index.html","5f8bf451f98a976be6ab816c3060f4b1"],["/categories/误区/index.html","5c68ae86585f3ee31ca5ad311ea88b0a"],["/commonweal/index.html","fc4faf3917546df6b13defd50cad09ae"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f0370391d25ad5f6fd39b2bcc48c1976"],["/home/index.html","08e1f208a2052773dba7f037288b782e"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","b6e02f1108d3ebfee41600fe191604e3"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","e06ebfe26b999fe8b54d9449f6799f4f"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f45f90dfe687e3671166934f0116961e"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","394faeb62599c5bb3659fc172b212c28"],["/page/11/index.html","915ec650d83813e742d6c26d659a3053"],["/page/12/index.html","b77c90d4522417e3fbb08ad5a88a5bc3"],["/page/13/index.html","3a29c67084135aed41a6a018356bff06"],["/page/14/index.html","69661b7e631cf9687f2f75b6092321b5"],["/page/15/index.html","a262ae23b5cc62c8d5455ddcba5f9d97"],["/page/16/index.html","5c1099cc25e96277dcfe4b267184db03"],["/page/17/index.html","34779d594c437ae748f3bc81b31ae18e"],["/page/18/index.html","80bf41ed7783478b38dae559e74f6890"],["/page/19/index.html","d2eb2ad342160af09a149d8b8f4ea48f"],["/page/2/index.html","294a7717d41e1f0cda27c3d2f2d54928"],["/page/20/index.html","17d02654e039020a47ed3778a8be3972"],["/page/21/index.html","eb6054ee58edb878d98e1a0ae4ae2415"],["/page/3/index.html","772922469caa4ae9d8beb512eb41bc6e"],["/page/4/index.html","1869dd38e8c03a0e1537ba109e78343d"],["/page/5/index.html","d6f60a3f51cb48480d3cd205c9d8c631"],["/page/6/index.html","7a1aa6e7d961763666512f32b0680acf"],["/page/7/index.html","68fded61f68f4f7cc93b4fde90e4ef28"],["/page/8/index.html","6d0e22acb788b2b98551deda7a50342d"],["/page/9/index.html","92339a8fb173400137ee246a1500f033"],["/resume/index.html","830474bc5ef8b0222af5ec1f61ead11f"],["/schedule/index.html","a520eb37b7e554ae1c80fbafb73d9331"],["/sitemap/index.html","539d0bf5ffdb15a78e0e944fd6e51162"],["/sw-register.js","d6101f0ea9c291280c2822ef61f16db6"],["/tags/AI/index.html","1d59cd56efddd14bf3d1da5edcd51637"],["/tags/BT/index.html","31c75b4ee7c44a0122ff15f19009bffd"],["/tags/BaiduNetdisk/index.html","de80d897430abec223f7346ec07b352f"],["/tags/Bootstrap5/index.html","af933d9cbef008fef293c91dc845880f"],["/tags/CSS3/index.html","9be15d1ea8dce0fb1b5c3a6ba2a9dd0b"],["/tags/Centos/index.html","261a183b097198a143eedc32779cf50f"],["/tags/Electron/index.html","662b655327ef462ff1a1431ba573022f"],["/tags/ElementUI/index.html","ebd4ca071894ee2fee019255c448830f"],["/tags/Flutter/index.html","ab700d6c4a6e5b7e2227d3e90fb07213"],["/tags/GAN/index.html","6a9140161d7be8563e6052dfeec31c1d"],["/tags/GUI/index.html","4a0daa6aa9881119d0253ab874ce7161"],["/tags/Git/index.html","d4aa66fac8899d0a81bf3706ef4aa3e2"],["/tags/JavaScript/index.html","834c565de8af86905d5b77c6bd0a75e4"],["/tags/Keras/index.html","fb760ae63baec12372273f9c295113c1"],["/tags/Linux/index.html","2121c829245316f6a55452c79cc5e6af"],["/tags/ML/index.html","1749f7670c81befebd0e4f205d14bc62"],["/tags/NLP学习/index.html","aeac52e6058d9dbddd12ee614f9976bb"],["/tags/Nginx/index.html","c0fb3f36cd1bb132424806a44fe4ede6"],["/tags/Obsidian/index.html","3193d42091778fe1b187cd1aed35af46"],["/tags/Qt/index.html","80de1257a61394c187aecb634716802b"],["/tags/RSS/index.html","3e6de21d01e3392f5c6155e4a07a8d7e"],["/tags/SSL/index.html","a391a213e6b83a71066839dee2fb392e"],["/tags/Scrapy/index.html","19b3ba21488b3bf1d44b54bf241c42cd"],["/tags/Speech/index.html","e63075545b494b23f7581bc2b42d0004"],["/tags/TotalCommander/index.html","9e99d880343fa52e3da7a2165bf61dbd"],["/tags/Web/index.html","d268599ee055f2aa8cf9bbe5888e40d0"],["/tags/algorithm/index.html","1c95be245a09f5a02df4a092064880ce"],["/tags/bison/index.html","ba3ee8bd0efc7b7374422b3bf879abf6"],["/tags/bomb-lab/index.html","4834298ff2dc615b37b34693051157a1"],["/tags/c/index.html","63bb2a237df2db18898c297b9b262cec"],["/tags/cheerio/index.html","072c55498e8bb7b9ea8bde30fb361f78"],["/tags/codewars/index.html","9309f5f83c9b69104bc268f7e7b38b8f"],["/tags/compile/index.html","2ae0c8166815f22864495d578de8d929"],["/tags/compiler/index.html","1ea58b0e5ac4875e604c535ea46b6c8c"],["/tags/cors/index.html","7806e92cb07f4db34a94c178f9e70d3c"],["/tags/course/index.html","d8ee9b1568eb06f8c5657627355dbde9"],["/tags/crypto/index.html","aa17afa4fac6a8a681acc98814f655dc"],["/tags/csapp/index.html","e379681b2f6c540cdb5d4f79c83738ad"],["/tags/csp/index.html","8b32c06894cd220102d49ccd3567ebfa"],["/tags/css/index.html","ae66046589015df4939ae08e851a608c"],["/tags/dart/index.html","004abfbefa0daa6595735ab70d43de4d"],["/tags/data-structure/index.html","9153eabafb78342b1303e0b0610484fb"],["/tags/database/index.html","118627303b52e057d3d137224af1d079"],["/tags/deep-learning/index.html","548038cebdc38dc706ca9c7731066959"],["/tags/django/index.html","0f38afa0cdfc1a3db0c822754724d901"],["/tags/docker/index.html","981576fce3a849b5f4738920719252dc"],["/tags/dwm/index.html","2be04d25835b2759ba3c65447731c810"],["/tags/exercise/index.html","177d06d64fd99da9ea27d149e3e25039"],["/tags/filebrowser/index.html","83dc6c3c9c51693c3eb81571d516ff77"],["/tags/flask/index.html","e6d3f78c63f54855d1ba9f3279da007c"],["/tags/flex/index.html","0ae7b8a2fd95335e61a604a98b12b0a6"],["/tags/front/index.html","a9607d4f64a841305668c05b6ab7c3e2"],["/tags/gcc/index.html","1ffc0facc881f02ac8e05725342efb0c"],["/tags/gdb/index.html","d7acdb67255c943f8b0c83914e8dc844"],["/tags/github-profile/index.html","c75e2887e4bf24c55a8ebbd11ea57d58"],["/tags/github/index.html","213e016f9b08a4af8c96abb6f2dff94d"],["/tags/graphviz/index.html","5a5c16d1bffd805c6c7e3b3d1376d630"],["/tags/grid/index.html","b66e449d0d0aa69baef0b81d84b1d624"],["/tags/html/index.html","cd57687d19b2880873278a8cc5e21f42"],["/tags/i3wm/index.html","81c2187c10323a2239a510345e5e9ec0"],["/tags/index.html","38b387d94e9dbb6eb16f49eb3b200a7a"],["/tags/issue/index.html","dba434894965155e7d4e91e26d6bd612"],["/tags/jQuery/index.html","34a27a8579c66a962daff7a498ecc24e"],["/tags/java/index.html","c5a2860f51375ecbe41d97494606ca35"],["/tags/js/index.html","444929f2ee1b514045bd9f0fe5cfa053"],["/tags/latex/index.html","82562a557eb08046547857731ba8ca42"],["/tags/leetcode/index.html","62614139b44562217eb48221980ab3ca"],["/tags/lex/index.html","89e13cfc399c25b88ffa03d2c96bc44a"],["/tags/material/index.html","37afdcdd72f00fafc6eae1b52a295383"],["/tags/music-player/index.html","4c42e8a243083ec40b8e289e1a145e93"],["/tags/nodejs/index.html","42aca2807eb0e67cf01b93bc1843afc5"],["/tags/noj/index.html","f8d9c9759f36babe22bc6bde6a6cdb30"],["/tags/opencv/index.html","821efbbde6450ee7e379375a81da4004"],["/tags/overleaf/index.html","2c40cd33b21b3cdea9576a00ff318fb4"],["/tags/pandas/index.html","3ad02e1a0005aa972360de90c33c65c3"],["/tags/premiere-pro/index.html","84f334cf8abb16a2f91dddcff87bee83"],["/tags/proxy/index.html","3b41c63dae68935a0a9aec6023a2720f"],["/tags/pure-css/index.html","c6d341b5d0632502244e1fc3a2fbd8e0"],["/tags/pygame/index.html","96c557df676d45ff99f3dcc0b9d65bb0"],["/tags/python/index.html","ba6be711aedf1ffa71dc7f3f024aebe3"],["/tags/pytorch/index.html","e1a998e1b1f5a20f1c98fbc03db53ff2"],["/tags/reading/index.html","b9ad87c2776b95a77b5f4a68272826a4"],["/tags/request/index.html","fc01761ae5a44109bcbfba8ffb458dce"],["/tags/requests/index.html","4b87a26170e5a5d0e6fd1397d3984bbd"],["/tags/security/index.html","f785f34015ca50b04563aaf2ad1e9320"],["/tags/shell/index.html","93968016193724047569f282fa25a5d5"],["/tags/sign-in/index.html","6bf503c440f7a858eda848c046ac8918"],["/tags/socket/index.html","a55102753030e50292fc40d98a901dd4"],["/tags/spider/index.html","8a71d47dacb71cac4739e7034fbf7844"],["/tags/splash/index.html","3563fa9fe3ab9c800cf56f45926ed934"],["/tags/superagent/index.html","ed6a0d743266a598153d1087ef6c2fcb"],["/tags/tensorlow/index.html","f832740fa8564992d7be4f2ef7069519"],["/tags/tex/index.html","08082b2df6a75f94d510c1f29acccd35"],["/tags/threading/index.html","92bbfadc8582cc93595c1e7f151d5e63"],["/tags/tkinter/index.html","1b541395996a2f896f0f459481afbd64"],["/tags/torrent/index.html","dbbabd24cc3190cfbf7648b422829351"],["/tags/tutorial/index.html","1682fc0d9408f8e0c84e108f9e6faf17"],["/tags/typora/index.html","195bc60858b8f33e590b1d6c39aa4b59"],["/tags/uniapp/index.html","fe95e69a85843252888f10e61c1f58c5"],["/tags/vite/index.html","90c849c54dceb7b9c332b7a81bd076b5"],["/tags/vue-element-template/index.html","74e4c1208222e2a355e23af06f6c3341"],["/tags/vue/index.html","3033c4370ba98fd8dcabb148794169b2"],["/tags/vue2/index.html","539b1dfc4cd2875bb9071deb5de53da8"],["/tags/vue3-x/index.html","ae26bc7ef6011d49a5fec1b42a89fb6f"],["/tags/wechat/index.html","c81f067e1d4d37dc0a5a3125ddbc03c5"],["/tags/wm/index.html","b04ed1e1f1d545207e7638807858fcd4"],["/tags/wordpress/index.html","61aaf1933a4e0c140009b674e5c55d62"],["/tags/workflow/index.html","9a4e60537533c7d97ac2965a2ba6b1ae"],["/tags/xpath/index.html","d1600afb48d8ad7702f52457ab26cb9e"],["/tags/yacc/index.html","d90039de1de17203db3f6b8fe547171d"],["/tags/zsh/index.html","2b799f8db0bd717b6f4f93c16fd0c6d5"],["/tags/七牛云/index.html","f629d2baed81d043077e58b76202e9cb"],["/tags/函数/index.html","7ce55d08bcfda4e501e5dfb2093c28a5"],["/tags/剪辑/index.html","cf4362ff421496df6ae6cefac2d7aa35"],["/tags/存储/index.html","ffbeaa667e57bc6dc6a718ae0e84cbb5"],["/tags/实战/index.html","461d2ad1f9e7369c2735825cb246f589"],["/tags/工具使用/index.html","e23b839a26adb0c9a2d55a48293c523b"],["/tags/建站/index.html","9db7f74fd41282da226500cb85865506"],["/tags/微信小程序/index.html","0f8fba5816042df1f32e0ed3cf1d5d77"],["/tags/指针/index.html","3eb7e6e2e4ef81f68d01b1a3a5af4ef7"],["/tags/效率提升/index.html","090d71f25bfd919830a6393dc97e24ac"],["/tags/汇编/index.html","72351670c371c3691e0e923020a26f0d"],["/tags/浏览器/index.html","b8a8f5cf33e9b23faa95d1ea44461d7c"],["/tags/爬虫/index.html","bdc7071093a6f5855bfadcdb1e7f567f"],["/tags/算法/index.html","0b830bed09b951b583f5794d310f4b52"],["/tags/编译原理/index.html","c96f2d99cf3909a559b48c19ccb000d3"],["/tags/获取地理位置/index.html","970ba30bc594a63a0d5a07823cf35339"]];
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
