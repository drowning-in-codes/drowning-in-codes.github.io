/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","be25f8f841700de1c9b93bfc07671b9b"],["/2021/04/20/稀疏矩阵/index.html","c3da35ab09790d0e9849bc270eb376e3"],["/2021/04/23/广义表简介/index.html","5fc6a3c8d011fb3c9aac4b38a0b981ff"],["/2021/04/29/关于指针和函数/index.html","6b3675dc790c4a1da9ded549d7ccca3b"],["/2021/05/10/哈夫曼编-译码/index.html","ae3a3af26c40d6efb1ba7a43f599bfa0"],["/2021/05/17/数据结构noj_2/index.html","1af66bc0e9f3d8fd7a1e0adaa0b692b6"],["/2021/05/30/数据结构试验/index.html","b7af9cd2f5487f2732671e303dcc8ee3"],["/2021/06/12/数据结构noj-3/index.html","cee90ec3072e927be06ce1d24ec3aa59"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","8f55fb12709004415bb8130ff0bc60e5"],["/2021/07/08/课程资源分享/index.html","e0045efdbb167f112e01d98c22e365d5"],["/2021/07/20/Scrapy-下载图片-文件/index.html","5dc6a574090cbf00768ada1c95eb4fff"],["/2021/07/21/Scrapy-动态网页爬取/index.html","4f4baa4f71d59de16ff8268aec195903"],["/2021/07/21/疫情打卡/index.html","226d9488daeffa484459ef3ae6ffc4c3"],["/2021/07/29/Scrapy代理设置/index.html","672634ca7d010afc4562a6d503912672"],["/2021/07/29/数据库认识/index.html","680ea9feea1affdb43f52a79f2deaf0e"],["/2021/07/31/Python多线程学习/index.html","eef7d77ebc17a526aea86b9be458fefc"],["/2021/07/31/tkinter-requests练习/index.html","37400fc3460ea9c6aad88a3520560ebf"],["/2021/08/10/Git学习/index.html","0bd43037b4bf1d754c34c374c935ed36"],["/2021/08/15/pygame实践-1/index.html","a61d2013ec16fb34c26bfc277e011e2b"],["/2021/09/06/微信小程序开发/index.html","c788f64dd497375289cef04efd8dd63e"],["/2021/09/21/命令集-1/index.html","72d15b652375f206d2671c6f68d41e92"],["/2021/09/21/命令集-2/index.html","ff59ffe58aa431075e2cf8c9a2503af4"],["/2021/09/21/命令集-3/index.html","3b9020e4f2782d371e8ef1b698fdabde"],["/2021/09/21/命令集-4/index.html","ec7537d9fdd4ded82942af2b700ca6b2"],["/2021/10/03/socket学习/index.html","f823cef8331fdc1a0950133e5389add1"],["/2021/10/10/dwm入门/index.html","1459b1f388d3396b50c8ecaf19e97739"],["/2021/10/10/安装ohmyzsh并配置/index.html","50cf8a13c74edf5d5aeef569abe2c42a"],["/2021/10/20/css学习/index.html","16a9f2de4936e5049c6f45fa1db171cb"],["/2021/10/20/wm入坑/index.html","b8f7eb767728d8353a71ba833f413e91"],["/2021/11/03/微信小程序学习/index.html","a53f6706f45ec3a4a840c6dbb0592d2d"],["/2021/11/04/css揭秘/index.html","d6a16a32b33599468807d647a1b3e60f"],["/2021/11/05/css-练习/index.html","96830efc06fd78e6d40f4391920550ad"],["/2021/11/21/命令集-5/index.html","f21dfad9e4b82a4299b3065149989bb7"],["/2021/11/21/命令集-6/index.html","a51d07942a6faeaffcf1630ae111a47e"],["/2021/11/21/命令集-7/index.html","d96c015b5f3ec4cb3659934817e86a66"],["/2021/12/01/搭建wordpress/index.html","dcecb2c1ba75e1b65bf3ac9ca055f2b8"],["/2021/12/08/python操作百度网盘/index.html","2acb3c356b3683b75a20b90f335cd2bb"],["/2021/12/14/js爬虫/index.html","be63ab056f5e02fefde5edf9aa13eb74"],["/2021/12/25/为网站申请ssl证书/index.html","6c16fb4d91e5d86ebb4c43304c0055e6"],["/2021/12/29/使用七牛云为网站提供服务/index.html","cd4be09435ea4db9f0786eab8e5235da"],["/2021/12/30/jQurey继续学习/index.html","e58a08bca60477594924642fbd669393"],["/2021/12/30/jquery学习/index.html","bfc6aa6d876a77ae6ccdcaba36db5705"],["/2021/12/31/vue学习/index.html","38056474a78c370729f87ed4f075d8ee"],["/2022/01/02/疫情自动打卡/index.html","f22fc050056a0d1cfc547cad546b0ecd"],["/2022/01/03/javaweb初体验/index.html","9174e78cd70019a081aab4ca980be1f3"],["/2022/01/04/codewars练习/index.html","144c7623a82f5065a53002267ba15915"],["/2022/01/05/Spring学习/index.html","24ee8c6cfdd343ae5f584130da19ddb4"],["/2022/01/05/vue实战/index.html","1332e52dbf1cb0041b626468f54f7895"],["/2022/01/08/gdb-gcc学习/index.html","7db965cc97e50fee40c1b5560c7e0d7f"],["/2022/01/11/python-opencv学习/index.html","5ee9d9880063501841337836a80053aa"],["/2022/01/12/汇编实战/index.html","b3441995763a1a751122ebcff62c50e9"],["/2022/01/17/pandas学习/index.html","dcf934569d8a860a79fdf75418687110"],["/2022/01/19/可视化图的工具/index.html","1f8a4c8366885a9fda19d286cbcac1b8"],["/2022/01/19/机器学习入门/index.html","3e431e8fab104b97b14d71096fac89de"],["/2022/01/20/cousera-ML学习/index.html","9315bdb42b897c1a9d29182b787bfe2f"],["/2022/01/30/typora解绑后出现问题/index.html","82a067e1684de823bcf4802d2f6c1790"],["/2022/02/03/NLP学习/index.html","cb4ab73be1d193bb8c5e7eb6a9fcde69"],["/2022/02/04/Web漏洞学习/index.html","0f40efcf08cfb5bf62e493cf03fd9d24"],["/2022/02/04/pyqt学习/index.html","39e7b69dc1ad73bc4711c9530408c107"],["/2022/02/04/python爬虫/index.html","b9ea3aaf3bab0f3fc01ca3d6852ce5e9"],["/2022/02/18/Electron学习/index.html","d6c631d6bd18addf807f044871b679da"],["/2022/02/22/疫情填报字段解析/index.html","5dcd965aa9343012c4b729f9f8eb1cdc"],["/2022/02/24/Bomb-lab实验/index.html","fa3ffc77c510b12c3d561f5531921d91"],["/2022/03/05/nginx学习/index.html","b1948dab33f9045717b0ff2c5825ca82"],["/2022/03/09/汇编原理课程学习/index.html","8cab60767f94b4b988bf39de342977c7"],["/2022/03/11/Keras学习/index.html","d81ad3244c240a7b8a8988fbeff64031"],["/2022/04/01/graphviz学习/index.html","d5f08319148f044e2b854b0188deac93"],["/2022/04/07/django学习/index.html","7170f2d8f4a4a25ce2f497b8479c4415"],["/2022/04/11/密码破解学习/index.html","5cdeb26f43495266f7be28ee6ce1b929"],["/2022/04/12/flex-bison学习/index.html","8107e33661c71e47b75c02884e92bc5e"],["/2022/04/15/pytorch学习/index.html","93304b107aee59664a8435c7e833178f"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","f66a512c0717826f48e067b64854bda1"],["/2022/04/23/写一个音乐播放器/index.html","ad3bc17b2be1d719c32345c942a4a5d8"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","3eb0d8019abb9d1a0842f158be6138c5"],["/2022/04/30/GAN学习/index.html","a311e4669ed4a6ba36fada204fd2303d"],["/2022/05/02/html精学/index.html","c8ebf0c6ae397154906a342ff07bd7fb"],["/2022/05/06/write-a-compiler-by-yourself/index.html","256ab5dae6e1581444891e565b075942"],["/2022/05/30/acwj-01/index.html","58d39ef38068d7d52735d507936105cf"],["/2022/06/14/animeGAN/index.html","535cbf2991d543802db0bdc9c5b7b7fb"],["/2022/07/09/c-与算法学习/index.html","1a37a902477b0130b028ef9c547ebf12"],["/2022/09/19/flask学习/index.html","9cac200c843b9c39dc54b4554d407280"],["/2022/09/22/cs224w学习/index.html","ac6b7a68fc5ab4e7028fdf3291ec94c7"],["/2022/09/28/记录一次wp重装/index.html","ac7e0cfacb0ac1c75b2402668f5a608e"],["/2022/10/01/Obsidian学习/index.html","2c756e32f40ec2658833f245ee43fc0c"],["/2022/10/08/vue-element-template实战/index.html","339f3b37a5085b10017b397cd0e6ed61"],["/2022/10/25/vue网上商城项目/index.html","711b63b55fe9fcf90b6f177e0418b321"],["/2022/11/11/leetcode刷题记录/index.html","03a2193a3e1b3c3e33746ecf02ed2739"],["/2022/11/11/使用overleaf优雅地写文章/index.html","40aff366259711d1d06b234f413c1bda"],["/2022/11/22/磁力链接与RSS订阅/index.html","c5a1befd98dc7620c242df53674f258e"],["/2022/12/11/uniapp申请获取地理位置/index.html","a413be74f4010db49bf5fcbb71d9abd6"],["/2022/12/26/pr剪辑学习/index.html","d698bbff2ee06a4a04d5b3e8b203bc72"],["/2022/12/27/css中的flex和grid布局/index.html","653f3a1e6eeba5b35d71363af2add94c"],["/2022/12/28/Flutter学习/index.html","2532872b7715ddb105358ebe4399af69"],["/2023/01/01/美化github首页/index.html","93205b11c01a74ddca70cf670edc15b8"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","607cc4afaa7908e7406bbfffb862719c"],["/2023/01/04/构建微信快捷发布文章工具/index.html","efa65691b7a01ecb77c46a6244fcec22"],["/2023/01/14/dart学习/index.html","f238f1d5c612971e605d82908e0dc8f6"],["/2023/01/23/闲置服务器BT下载影视/index.html","044a5dc7b22209a3df920cd8761631f4"],["/2023/02/07/TotalCommander使用和学习/index.html","af43b6ff39d4e38a11ed421dbed3310d"],["/2023/02/13/docker学习/index.html","d6810abe7d1b864cc72947b7c0175a3c"],["/2023/02/17/DLHLP学习/index.html","c8cf2361a809bf0f04d2f0b134ccb26e"],["/2023/02/18/学习purecss构建自己的css框架/index.html","09031849f90b14e66b5ba972b0602d1e"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","6ef8005d2fd15f085da063c2f73a1c7a"],["/2023/03/05/STL学习/index.html","46dadfbb6efc7f2182912209fbeb4bb4"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","7aa0504b00454cc2970fc81e27387d7f"],["/2023/03/23/实战写浏览器插件/index.html","eaf319237a071cb8671183c0b0be596f"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","61ca56843cae382e0c1f6b7574253c46"],["/about/index.html","0e70e5f5f5e048e4ee9251588cef4f1e"],["/archives/2021/04/index.html","b0e8c95ffc5297d97191433c8512b8a2"],["/archives/2021/05/index.html","002df9e8e4ef860da4dee93366cd1b96"],["/archives/2021/06/index.html","daed32dd29273df8c46094c43db392d5"],["/archives/2021/07/index.html","e453892af8783e78e043f4257054ab7d"],["/archives/2021/08/index.html","a8259adc773fe5d5adefcb0f1fc373e6"],["/archives/2021/09/index.html","7ff457ebc9a4448079d053a2a433dfe1"],["/archives/2021/10/index.html","272f853e6804e8c0dcdbfdcad64d3232"],["/archives/2021/11/index.html","a260d6c533b31e57170a1357b6d8cd72"],["/archives/2021/12/index.html","59d348900e6473d461ec4b819b2d5e09"],["/archives/2021/index.html","48a12879bc50cf66d68a86cfc61b3516"],["/archives/2022/01/index.html","e02c46507f6cf305287365592c4ed300"],["/archives/2022/02/index.html","3cfc683c5321738e240fbe9fb890097b"],["/archives/2022/03/index.html","2bed5f0e4a6744e2e81707cc06a1e516"],["/archives/2022/04/index.html","e0beaf7c96fd6984f39597831a760de6"],["/archives/2022/05/index.html","1cf6538d8cc47d784c63f5ffbc7f2bc7"],["/archives/2022/06/index.html","ae35618e19eef5db32557f8e43a62e75"],["/archives/2022/07/index.html","7117846fe3ccddd01c85b8d8afec1895"],["/archives/2022/09/index.html","f0f10e29b78ffc367888c09581d64047"],["/archives/2022/10/index.html","e6adf67013911928cce1e2964800d68d"],["/archives/2022/11/index.html","a4585219b4f2b3482c604b9d82f40dcd"],["/archives/2022/12/index.html","7d463e76c5bcc172d7dee0c823f204e9"],["/archives/2022/index.html","b7a603262aa28f71c29545c13ffb9f78"],["/archives/2023/01/index.html","d931d050b227388362cbc28ea0579fdb"],["/archives/2023/02/index.html","2ce7cb4b03c52eea10035383ea35d6ec"],["/archives/2023/03/index.html","8bc68b30c39a316e7078bc6ab25d3afe"],["/archives/2023/04/index.html","5fb22ac85a4cf40dff84cdd4f6f233f4"],["/archives/2023/index.html","2351f11452ab8b80de983acce4b83c81"],["/archives/index.html","cb92d4c6a9e83c4f7b8edad148c46417"],["/archives/page/2/index.html","cef7f0b3ad25d071195c2d53e12bf8c0"],["/archives/page/3/index.html","f5497d8fa4e1211faf7880eb650cd843"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","e260e89925dc45d596023530c4c512b0"],["/categories/Linux-study/index.html","d487c6d175efcf84451d54f87feb3a7f"],["/categories/ML/index.html","6807b4b141c446b1a7d2fa7dcc359d0a"],["/categories/Nginx/index.html","1087cc5b89fec2016c92cd87eb5f495d"],["/categories/Spring/index.html","ce99326ca9f34400ea22be357efb59e6"],["/categories/course/index.html","7f0d7d95f68e587b41aff6c06a7d66fe"],["/categories/django/index.html","c879ded0e586d237fefc45d734a209c8"],["/categories/fun/index.html","543640078cb816df48ad0602cabda686"],["/categories/gcc/gdb/index.html","056e1654e54ba3e683180fb69b8a6af2"],["/categories/gcc/index.html","ad9cfaae0b433244ac2cc7d0c8245510"],["/categories/index.html","38955bb03848e837f2025c15a0ae6b64"],["/categories/java/index.html","0af5f988a2442326d2ae6bc6e3695646"],["/categories/latex/index.html","b0568efef01a5a4f51ce2be1ef77c942"],["/categories/python/index.html","e07fe5452e1d23c39d8c218e35659153"],["/categories/study/index.html","e2f8f3c0171d17cc3ce875ac61b46051"],["/categories/vue/index.html","cd63419c9578d944d4470edc845f1cc0"],["/categories/误区/index.html","01d7315e5c0e366b6d0e1517a612a533"],["/commonweal/index.html","0849119cac4d286b8ddca55d53d5e2e6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","eb733080b95b8c3336fad17b5b983ac5"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","fe53442021ad219c7212948ffc84d994"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","bb75e1d9c434a0adf4748336091bc276"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","9d4cfa9d94773ca11bbc9c550da9d6a4"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","0abf68d3d33b5dda598a4d00d7e394db"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","7e198744f7795422008a87e6e6d7718f"],["/page/11/index.html","28729cc93908ebebd219ed4ef47a2569"],["/page/12/index.html","bfe5c81cbf6172dd1f22ef28829a7a48"],["/page/13/index.html","57860c83315ffbeb7cb0c33e873399f7"],["/page/14/index.html","2790abebf0f578f90ef9d7e9d9310f7a"],["/page/15/index.html","914870687e3da2c3150a9e843f845985"],["/page/16/index.html","b92ef2bb5334da615173d8c205fcb7aa"],["/page/17/index.html","c3edb0f27375da023ef1402f2b90d11c"],["/page/18/index.html","b62cdddb6b2b64dc3ff3234fb7732563"],["/page/19/index.html","3822ee56c4abd9f71ae7a6b75f93d529"],["/page/2/index.html","afaf423c07567fd05c5b00ef5b6c5bd5"],["/page/20/index.html","db6f974468c36ac9de52fe5a279f4781"],["/page/21/index.html","305c6551c17b1fb7ad66cfaa96ed07c5"],["/page/22/index.html","4b2fb5afc5e46d82459471692687fd3a"],["/page/3/index.html","302d7ff7304f183c50adc8a2bc401006"],["/page/4/index.html","d2c9474c38080580915bf205a5af243c"],["/page/5/index.html","afd7685d6d0447759dfed0d69307e9be"],["/page/6/index.html","303d5ab1b8ba2e1131262d4ad17770f3"],["/page/7/index.html","d99e19a2a26d0255481179a4d4a91a32"],["/page/8/index.html","34b30b5b0281215d1ef04a83e756f121"],["/page/9/index.html","400330e46e0edb529eef5d882ecec003"],["/resume/index.html","f8de527a1b38ecfc0c0ad8a56db38bbf"],["/schedule/index.html","6f148f5488c5ed968a051724d81a6f15"],["/sitemap/index.html","96c133ec8459cf86755d9a139bf383d8"],["/sw-register.js","da2a66d0f3328dbbb64a1164eff5e23d"],["/tags/AI/index.html","b47b7eb4ac006b94238066e61b6f5308"],["/tags/BT/index.html","84905535671df44d14c45cbf467a7774"],["/tags/BaiduNetdisk/index.html","97562ab62eb53f2453226c73be1625f3"],["/tags/Bootstrap5/index.html","354b13449ae0aac5ef18c878aca9c119"],["/tags/CSS3/index.html","74854519f3db28abf37c3101d6da16b9"],["/tags/Centos/index.html","a73022d8107f690159478ddb240bd943"],["/tags/Electron/index.html","c317b8c5dcda0120fb8aa11638cb399f"],["/tags/ElementUI/index.html","2e7af7d8e1ad999d65befc66d1e583f6"],["/tags/Flutter/index.html","d8e79e46604752287272bc8693926d5c"],["/tags/GAN/index.html","44d70e525746ed2706c492755fa6208f"],["/tags/GUI/index.html","15e32a0cebb08d255f427c52313ba9aa"],["/tags/Git/index.html","9953828934b85b667d1ee8c1853b6d4e"],["/tags/JavaScript/index.html","f28e77113f5552e60516b7bb54a6d327"],["/tags/Keras/index.html","18c322e8e807a7e5d0bab4affd3c6669"],["/tags/Linux/index.html","154bf93f875c9e50c56ee64535672ef7"],["/tags/ML/index.html","79935bccfed7e43f9ed108e291981cb6"],["/tags/NLP学习/index.html","26019fcabd1137956943a7077c6e708b"],["/tags/Nginx/index.html","7a538394022ee7bd650ac8a4c37d5cf7"],["/tags/OSS存储/index.html","0542fb840a4b9a51a753a62ec6ac454f"],["/tags/Obsidian/index.html","fcda19421a0bff75b02e3b901973a2ce"],["/tags/Qt/index.html","2fbb320f3ed0e961d3d532c6d74f5f92"],["/tags/RSS/index.html","75663d6cbe9db2eb5c3992aead4abd9a"],["/tags/SSL/index.html","2aacd869dfc5b9702b1bbf79324dcd44"],["/tags/Scrapy/index.html","d2387c82d26ec6b8c62e8132c285cfba"],["/tags/Speech/index.html","c226b1a82f6181918c4acd515609a643"],["/tags/TotalCommander/index.html","e96b72256d1c0ee083e726ba43ec0ea9"],["/tags/Web/index.html","34a3a0d97983e038b850fd3422a594b2"],["/tags/algorithm/index.html","4925c919362a64bf30b3a332ae1a11f1"],["/tags/bison/index.html","e1706666ae2e9d8a90adf9b3fa889c0b"],["/tags/bomb-lab/index.html","3b378198c6331252aa96826bfbe8af1e"],["/tags/c/index.html","9fca0b3e4098b2f7da51b2e422530773"],["/tags/cheerio/index.html","1b3f9cc6594e84ed1b2e48e0c9994270"],["/tags/codewars/index.html","16b2bef61ca4bd9d21a3c74b01c0a6ac"],["/tags/compile/index.html","d5d227c711da2b2c491448d7544bc8c8"],["/tags/compiler/index.html","8edfde49d1dd56088bf0cb92655a5416"],["/tags/cors/index.html","d002d1abab8ce71254f84e61c70aee18"],["/tags/course/index.html","973aa081f86276ac8e734b36de0cc9be"],["/tags/cpp/index.html","d3dcad60c3e8ebb9da9674f1174e3a16"],["/tags/crypto/index.html","29f167be997c84bb7335d3b494d12164"],["/tags/csapp/index.html","e6bd26d5063cac9d65ccac550ebe5dba"],["/tags/csp/index.html","dfef229ea14f957f33caf8a1d55b9f0a"],["/tags/css/index.html","345384b268199a0cb9d8d111bdd77669"],["/tags/dart/index.html","552d7a4f6c89d83f0ae1231c45e4a521"],["/tags/data-structure/index.html","936facb6a2de3f071495f233f4ab72b6"],["/tags/database/index.html","7d0c1b26de54359a92be8bc3c1695a60"],["/tags/deep-learning/index.html","c5f7fd788918c595e5e981c8003b3d4c"],["/tags/django/index.html","f2aa6ea8dc9dc64124ae096ab6ccb531"],["/tags/docker/index.html","e72d43ea034054d2ec3737d54260bba8"],["/tags/dwm/index.html","1329dd49487da172c11902cfe99555c8"],["/tags/exercise/index.html","d9d78a51b60cc591d0a3de678dec16e3"],["/tags/filebrowser/index.html","4c99faf52aefbe64fcb86cbfc7a3fe49"],["/tags/flask/index.html","ebf68b8f0464f7666163be2ad61f3033"],["/tags/flex/index.html","11c44c2df535ae1fe2ad57106b5bdbff"],["/tags/front/index.html","c9f4cd72644171fb3004f1ced8d7398f"],["/tags/gcc/index.html","a5f43450d00266a30bc77a0ae59dcb71"],["/tags/gdb/index.html","5582248a4829a6957fbc4867c4f0c808"],["/tags/github-profile/index.html","a7177594f74b8e256fe0ac31fc17d3b1"],["/tags/github/index.html","a76ec767a78d6938b5220a2c9c3c30b8"],["/tags/graphviz/index.html","3bbf47a30011248548c3e82d5bfddda0"],["/tags/grid/index.html","801e3a37e81e9a7d55ca666761a8c9f1"],["/tags/html/index.html","8dfab333de4a936b14a7912f4dfe41b7"],["/tags/i3wm/index.html","d38c8959b4173d05bdf0100757368796"],["/tags/index.html","b93faab36f79388171c5fa943765393b"],["/tags/issue/index.html","cc308060eb2af4f62b6eb7d8024572ad"],["/tags/jQuery/index.html","6e6fc160bdfc9f3a1d4503f6b23d0829"],["/tags/java/index.html","56e1d59a5b299ba4a5ac669d863017bd"],["/tags/js/index.html","4aa98c70a41972bb9006e9193fc98139"],["/tags/latex/index.html","7ceed99932567641befcc798a73ed4fc"],["/tags/leetcode/index.html","98335c9d25a45ab7f048ea738f634154"],["/tags/lex/index.html","6a8cdda9bf400892ada8d8eee1ba8c84"],["/tags/material/index.html","c944772240cf5061e327157df72adfb0"],["/tags/music-player/index.html","7afd42bc75a54d6383d3220484f054c8"],["/tags/nodejs/index.html","5c5ed3161c25776a677840055ae61921"],["/tags/noj/index.html","5a1a42f654c258c05ce6592dce093f35"],["/tags/opencv/index.html","19a711f98a29f3575411c5aee9fa0d73"],["/tags/overleaf/index.html","1fc21ad62b206a36b7c25ab1753a3b6e"],["/tags/pandas/index.html","ca68657a7d0ba6d07ef7d0fbd09c6452"],["/tags/premiere-pro/index.html","83c3e043e3b47bad27c3f425f2f11df4"],["/tags/proxy/index.html","0262b492fb0cfd53b0daad4ead3062f5"],["/tags/pure-css/index.html","04ff0cb9b2237174a36e92e563ff91ff"],["/tags/pygame/index.html","49ab6d6e50bc8b5911668ef20ceaa52a"],["/tags/python/index.html","b198445d31fe56cfc168f8ccc0a36c6b"],["/tags/pytorch/index.html","7c86a7385a768ec921831262e36d7de9"],["/tags/reading/index.html","acb75f258995dbd1f16fe40ba837a2f2"],["/tags/request/index.html","5c1bdbab07e9ca34042307082b0e47e6"],["/tags/requests/index.html","2d14b6bb5dc152ab3ad1a5aea52d037c"],["/tags/security/index.html","4b6fd1c2ef2bec38072fe7d1441e6198"],["/tags/shell/index.html","ad0433bd74b6d79f3af5cdaeecf77f2a"],["/tags/sign-in/index.html","3869ca39e6bc60c248bfac42a64f2017"],["/tags/socket/index.html","053cf89cf0c2ee0b2e9aeb2a0417ad43"],["/tags/spider/index.html","02ecd5e8e0a6911bf6a5b9ca54da9413"],["/tags/splash/index.html","35b16e709fd554d38fa52083cfa87b4c"],["/tags/stl/index.html","e21fc76b17595bcb6dbd6162514f5fa5"],["/tags/sumatra/index.html","d473d6155bed7c63f78b0e4b7f17d076"],["/tags/superagent/index.html","6c9b00904332a14dcdc50eb288c84b61"],["/tags/tensorlow/index.html","18e6672bbfd76caf62416e7ee8c34edb"],["/tags/tex/index.html","f8daa2eb08d2874eb89a8b38e7440655"],["/tags/threading/index.html","d57ceda7bd38091dfb47ce9626f9b111"],["/tags/tkinter/index.html","451afd3ae40667e5a8ec441ef4af7269"],["/tags/torrent/index.html","bf2316f62efa77cde046de6672965256"],["/tags/tutorial/index.html","036fc904aaf159441504db15dbff708a"],["/tags/typora/index.html","2f4cf5986b7de3dcb4b03bb416de256e"],["/tags/uniapp/index.html","702feeeb81282c9b2d1b7bd92a3dcd43"],["/tags/vite/index.html","271c32377aeb0a707361212a071718d1"],["/tags/vscode/index.html","8102d19688583b7bac7fcac7dce773c9"],["/tags/vue-element-template/index.html","e7adcee03f91d20b2695af0d19c954a3"],["/tags/vue/index.html","bb745bfaa08e6d4c015ce4d637474ff3"],["/tags/vue2/index.html","eccbe1fcdba9bebc9765918a75a7e9f8"],["/tags/vue3-x/index.html","f08e1ecfd68d280502a70e178bfd0bad"],["/tags/wechat/index.html","e1248c9685dde5cb5720a5e08ca03dd0"],["/tags/wm/index.html","d5d62e7496966bdbe378a316d1434d85"],["/tags/wordpress/index.html","b83ed1ca2660adbd7ad42459da57c04c"],["/tags/workflow/index.html","85f992eba244a7b9dd4de697ebcbf1b4"],["/tags/xpath/index.html","61030bcab10b47125f4dc6294707291c"],["/tags/yacc/index.html","34ddcad0f9fa0cd5f358186ef7ebcb59"],["/tags/zsh/index.html","96cf06dda92d52969b20c0e798a1a4da"],["/tags/七牛云/index.html","732c08cecd284b3ad3ff4554e6d300c1"],["/tags/函数/index.html","c1843d4966a323b37e1f5c42976ff8c9"],["/tags/剪辑/index.html","308c7ecf0d8d04dade5035dbc5dabb45"],["/tags/存储/index.html","f70e81771ffd2675f74fdedbf5e047a2"],["/tags/实战/index.html","c058faa239d09f459cdf864dff4f2f2f"],["/tags/工具使用/index.html","1c2e08ad255b6941c7479454fe280d76"],["/tags/建站/index.html","7ecda5a2ffae354bcb94a4be3425d49f"],["/tags/微信小程序/index.html","147ff606cab02ef6427e38478da2739c"],["/tags/指针/index.html","232f4fa0c503e8de50b1401726b1144a"],["/tags/效率提升/index.html","d14158dc7cabb16df74f1c90f6f89323"],["/tags/汇编/index.html","b86cfb4c54eaf24dc6bdc9c938070e7d"],["/tags/油猴脚本/index.html","9dee187262731a3b335c193cbe584325"],["/tags/浏览器/index.html","2d4577be3cc74e5bb268b5020070943b"],["/tags/爬虫/index.html","5ee10ddc16520745e292b69ce27cb2cc"],["/tags/算法/index.html","69fa9d3ad572cc6b4fd6cd80ce9ee2b4"],["/tags/编译原理/index.html","86507706e2a5ac01df78bf6e052eda86"],["/tags/获取地理位置/index.html","b20c17caf6cd444024fba51f5ecf6e37"]];
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
