/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","fc31aa0ff5053cf2c0839e1b0d36513d"],["/2021/04/20/稀疏矩阵/index.html","2a8d6dc261ffad879a0cb886796221a4"],["/2021/04/23/广义表简介/index.html","fe7adda916baf34e28011a9748e03fe1"],["/2021/04/29/关于指针和函数/index.html","fda9801d6e6aac3fe19585d454a4c30f"],["/2021/05/10/哈夫曼编-译码/index.html","ea439c9b0e26cf1500e002a5c285c7b4"],["/2021/05/17/数据结构noj_2/index.html","dc1688156dad3662bd900c302e18c26c"],["/2021/05/30/数据结构试验/index.html","d335298afa1ce1a31d3cc054d36b9580"],["/2021/06/12/数据结构noj-3/index.html","8158fc64fb4d0f41f105c36d473c50b9"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","b0c63d52534f456482b7da16469884e2"],["/2021/07/08/课程资源分享/index.html","f926773b1f182178433e4f96b5da662a"],["/2021/07/20/Scrapy-下载图片-文件/index.html","917ec2cee19251f2c5ca6eb9847280a5"],["/2021/07/21/Scrapy-动态网页爬取/index.html","fed9ae7c983a9d8410d377db611f4f43"],["/2021/07/21/疫情打卡/index.html","684434c6cc7b60faad90aa7d6810167e"],["/2021/07/29/Scrapy代理设置/index.html","d7fc1192e17c3a4e416ccf0545a10770"],["/2021/07/29/数据库认识/index.html","5cff8e4c57349fd66fc0f7d7920cfc04"],["/2021/07/31/Python多线程学习/index.html","1f8a22b852dca001d145717c0f6b574f"],["/2021/07/31/tkinter-requests练习/index.html","aec65518cfc0593c74b6e0304745c17b"],["/2021/08/10/Git学习/index.html","4e2a7f1bff8ef14222eccbf0f8145f8f"],["/2021/08/15/pygame实践-1/index.html","91d68fe6a46a563157c79b00646da539"],["/2021/09/06/微信小程序开发/index.html","bc4d84aad72fd3759a5435143ae6b813"],["/2021/09/21/命令集-1/index.html","a55ea567c090ba62e2968180f6294ff7"],["/2021/09/21/命令集-2/index.html","2cbb2a694597c4ec88848cad3922306a"],["/2021/09/21/命令集-3/index.html","563da34de593ee5dfb21f0d78afd2d8a"],["/2021/09/21/命令集-4/index.html","7a2ce866d38c48cd9b7b11ca00f2ae98"],["/2021/10/03/socket学习/index.html","a83906338b7e5c7d8ca5240c147f1533"],["/2021/10/10/dwm入门/index.html","be6b7bf8473a63cda9269512dc7ab962"],["/2021/10/10/安装ohmyzsh并配置/index.html","3dc96641827f198c8caa6c79ea942a67"],["/2021/10/20/css学习/index.html","2580a8c7f873a2fac60c5fc5d667af1a"],["/2021/10/20/wm入坑/index.html","7f39852e0f0fa766e540404d4fd74129"],["/2021/11/03/微信小程序学习/index.html","0697b39e2c18e6bd4e58fece2dd67e7f"],["/2021/11/04/css揭秘/index.html","0fc69a249d4c8d13db035c7e61f75d1e"],["/2021/11/05/css-练习/index.html","72c37ce8f31a75d71b4731eda9d548ff"],["/2021/11/21/命令集-5/index.html","5e064b9639d3579d069ec1614fd83bdb"],["/2021/11/21/命令集-6/index.html","36a8124085c43ade413dc4dee6db6c65"],["/2021/11/21/命令集-7/index.html","76fee8d23157816aa97d258b2bc546cc"],["/2021/12/01/搭建wordpress/index.html","2431b4cef087161c76330d68d4ff8d86"],["/2021/12/08/python操作百度网盘/index.html","548085d3d9751c6b425ad01dd31e4490"],["/2021/12/14/js爬虫/index.html","fbe0f7e8f280070e156e34c217bb26f3"],["/2021/12/25/为网站申请ssl证书/index.html","d6b83ecb0f797fbd35797b58319be04c"],["/2021/12/29/使用七牛云为网站提供服务/index.html","5a7f4ea5f93e8c7ed906581c071f4724"],["/2021/12/30/jQurey继续学习/index.html","c38a97ab9fc8c1ef416287d3b40c73af"],["/2021/12/30/jquery学习/index.html","ccf393d469eb1af393d10c3074d0bf42"],["/2021/12/31/vue学习/index.html","bbb8acc48ba9dd0c5435067b27b56216"],["/2022/01/02/疫情自动打卡/index.html","b536256d0787309869fc914a94c56f28"],["/2022/01/03/javaweb初体验/index.html","5e2734d7a52b6b808fac2e5a7a89a926"],["/2022/01/04/codewars练习/index.html","538bb2d983303fbbaa8c2d1d79048744"],["/2022/01/05/Spring学习/index.html","39c588c5b304e949ef63eb475fd25bc3"],["/2022/01/05/vue实战/index.html","f0b7b653005807d8c87f2c8ec4906aa5"],["/2022/01/08/gdb-gcc学习/index.html","cc9d1a058090177d3a72eb00144953c5"],["/2022/01/11/python-opencv学习/index.html","bc5b2a8d9dbd465494b10045b0708f48"],["/2022/01/12/汇编实战/index.html","dd19416b140af7feb5358c7130146c41"],["/2022/01/17/pandas学习/index.html","55ee0a5c52c79bcedc92a9de28675519"],["/2022/01/19/可视化图的工具/index.html","8e9930e1afbfccdf856cdcb8a6aded5f"],["/2022/01/19/机器学习入门/index.html","084e060df56781399618a1f6b34abe7c"],["/2022/01/20/cousera-ML学习/index.html","da7e42b4b9202a1cea2daa761083d25d"],["/2022/01/30/typora解绑后出现问题/index.html","7bc5860b220bfa7e418d8b4c9b5f2447"],["/2022/02/03/NLP学习/index.html","ba7b2899b9b0fb34413ec5f473d75000"],["/2022/02/04/Web漏洞学习/index.html","6dd97adc389ae72cb02e216caf1be872"],["/2022/02/04/pyqt学习/index.html","b06603df2c8e43c4eda19eb091b8cbc6"],["/2022/02/04/python爬虫/index.html","c33e7fc9c990b2174b8751c73945545a"],["/2022/02/18/Electron学习/index.html","63d42b0811a329de08a5f48acae7a165"],["/2022/02/22/疫情填报字段解析/index.html","1478999ef7af638a755a22633c84d2f3"],["/2022/02/24/Bomb-lab实验/index.html","cec5655aab4ea592561055e1b776b080"],["/2022/03/05/nginx学习/index.html","f191dd5448f28161f7c2b3e956c9a9e3"],["/2022/03/09/汇编原理课程学习/index.html","c2f53660df5a8268725d9f8157fdae7e"],["/2022/03/11/Keras学习/index.html","5ea36559c07c116a5c67c207e5326c6c"],["/2022/04/01/graphviz学习/index.html","f55628be0ccec8f1e69fec84fb0eaad5"],["/2022/04/07/django学习/index.html","265069bd9425ffae2834d4b46a39d6b6"],["/2022/04/11/密码破解学习/index.html","8416833fc96797cbc643a42b234f213c"],["/2022/04/12/flex-bison学习/index.html","10a3f6504a0f13f127556a96790f0928"],["/2022/04/15/pytorch学习/index.html","e4e656aca4377f8c7d04acbc51c8dd43"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","7a83dbf74b1f895d26ee173f8e901ae1"],["/2022/04/23/写一个音乐播放器/index.html","e40818384aafb8eae70a7b7c75d78931"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","07861f58f3a5cefe42fdb4cbb0dd7f70"],["/2022/04/30/GAN学习/index.html","37f8f8489e736fcc3b918fc1643c1842"],["/2022/05/02/html精学/index.html","40126ab1760c0d656d2f56329f651023"],["/2022/05/06/write-a-compiler-by-yourself/index.html","41da9508aff2792d72a3f38631e54582"],["/2022/05/30/acwj-01/index.html","29634bb6d6ed98f0090bb7b5804b7a06"],["/2022/06/14/animeGAN/index.html","a69c3c93162195eb7519d67f3aff8cf4"],["/2022/07/09/c-与算法学习/index.html","d92c479e971664a405b32c1431091752"],["/2022/09/19/flask学习/index.html","5065a5a4cb392cd4323b9fe8bf245caa"],["/2022/09/22/cs224w学习/index.html","5263746b156de29be23a551bfd33d8e3"],["/2022/09/28/记录一次wp重装/index.html","dcf2569ab7d9957fef3983bc6ab370a3"],["/2022/10/01/Obsidian学习/index.html","a02cbb02da265bebff959e5dcb053860"],["/2022/10/08/vue-element-template实战/index.html","c1bcacf8761796c9487be4367a445b2f"],["/2022/10/25/vue网上商城项目/index.html","c127d0bc5052f27bd763cf9f6924c2be"],["/2022/11/11/leetcode刷题记录/index.html","140d5e64a39785959890ab5397044589"],["/2022/11/11/使用overleaf优雅地写文章/index.html","0a4603213b89be53495c71c1d8d3ac78"],["/2022/11/22/磁力链接与RSS订阅/index.html","532dc092819caba9f1b45d86e9f8d505"],["/2022/12/11/uniapp申请获取地理位置/index.html","c891ff1aa523db87b0b4440ce090fc9d"],["/2022/12/26/pr剪辑学习/index.html","bbdba5f528ecf14b170ce9a8bf639116"],["/2022/12/27/css中的flex和grid布局/index.html","ec7eba1f86131925869efab07becb94d"],["/2022/12/28/Flutter学习/index.html","cf7af0878c5ca1ff3f4acdc1105a536d"],["/2023/01/01/美化github首页/index.html","1dcdf8d72bece521f6e09f6639302e48"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","4f51d2a3ffb9e71c450dad2ac5509c47"],["/2023/01/04/构建微信快捷发布文章工具/index.html","64517809bfa5c58b6a37892fbfc764b0"],["/about/index.html","5f656203df131ab5d20d325e168d2b57"],["/archives/2021/04/index.html","898e7da0a76b8ebb0ceca230999013b6"],["/archives/2021/05/index.html","ed326c21bf91868e47e9fad5e51910dc"],["/archives/2021/06/index.html","cd7b6bedf98b4de2b6fea2727b5fe1a3"],["/archives/2021/07/index.html","6b7e26aa59dff6abd2f6f23cf0284f3b"],["/archives/2021/08/index.html","1f1984586436d177d079e4276987bbd3"],["/archives/2021/09/index.html","85d0af6f213e2b8fa51ea88f1e13b20e"],["/archives/2021/10/index.html","eb17c4f4b7115be360a41525b05db50c"],["/archives/2021/11/index.html","b07b2c3fb9269e050b627ebf9cf6433e"],["/archives/2021/12/index.html","767c49ca42483a1d4b136d1b2d98b986"],["/archives/2021/index.html","dc3e49701a9815c4f6a47a7b1fd4716a"],["/archives/2022/01/index.html","a6309fbf7286bc674015fb67092047ac"],["/archives/2022/02/index.html","6a33af2a7ddb28d0d1ec19ccc5208605"],["/archives/2022/03/index.html","c5b96ec93e9728c5f983a9ed306ac4b3"],["/archives/2022/04/index.html","884f1993f6a7508bb19fe636bf636ed4"],["/archives/2022/05/index.html","a30d8ad01261a0156c2675879892229c"],["/archives/2022/06/index.html","c27a9a5edc6ccdfc3c9747d6793c0eed"],["/archives/2022/07/index.html","8516a5b8dcde0fa236de7e3004c2177f"],["/archives/2022/09/index.html","1d048128c7f322fb39017d6f8372d1b5"],["/archives/2022/10/index.html","21297667d2d703381dc96755a99cb1a5"],["/archives/2022/11/index.html","faac576ff374d52c8e27f5a488e0dae1"],["/archives/2022/12/index.html","4cedb3d78c3c634d3f99cf2a8b65f87f"],["/archives/2022/index.html","90a3ac670712365029bbf34da2acb3b6"],["/archives/2023/01/index.html","e45709ed8089bc2df8d5e3561326b1d9"],["/archives/2023/index.html","bfe8b2c2e9b44c08afc84160c59c5190"],["/archives/index.html","252657dc53da0b76aa49e2d210264a07"],["/archives/page/2/index.html","9f206d6e0933b3ab5b50917785910825"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","243e000d79d7e0509913bcea92be6341"],["/categories/ML/index.html","551f1e43519118d5ecce54789004d783"],["/categories/Nginx/index.html","ebcc4450c39ddb87b703ae1dcc6611df"],["/categories/Spring/index.html","dc62efde3603e8f87411353dc1b8092e"],["/categories/course/index.html","332ab33277c77de5400d1d36013093f5"],["/categories/django/index.html","6162d3098f2ab815856a74bec3281870"],["/categories/fun/index.html","529c1e4ca3c2d71f700c491bdde47c86"],["/categories/gcc/gdb/index.html","4fd3d9bc2ec2c277ef1f3c3430cc3ab7"],["/categories/gcc/index.html","419951548acc8c739b378dffd5d3330c"],["/categories/index.html","d5d3216394262edcffd6bbb113c83755"],["/categories/java/index.html","3c398649b5f36a9a6482389e8438bf20"],["/categories/python/index.html","b0c9481ba007acc2f04dc81ee2fc67c2"],["/categories/study/index.html","2e6724209dcbfe1b8dab309fcc71b7d6"],["/categories/vue/index.html","2442f040af9461d6e3c9da7f4a51e55a"],["/categories/误区/index.html","fb0441b3e1b53bf6f17c6eb96feb1da1"],["/commonweal/index.html","d69903eb80162971d6280ea3f1127919"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d4b4e3cbd9f3eaa68a8c89b5529734d6"],["/home/index.html","083d9c466ed08285c8cc1b65e616e676"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","68404d7a319e538a9fca51f8204f3f06"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","41d98561a6e7d0e022732db09e580b4d"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","5f9f558facfce9b7d5fbf591248ffa9a"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","dcf91fec111f3e1aeefe069a6c24f934"],["/page/11/index.html","3a75dfd9aeda5ee2e2d442845af91bf5"],["/page/12/index.html","adb0de75bafb98905a4fef59a77cfad5"],["/page/13/index.html","8bc80c8f9b997b594b4a7873d7062522"],["/page/14/index.html","3ba0aa8c1b2791b200843f7480c5a04c"],["/page/15/index.html","3863060584c6ac7d91e765420c927850"],["/page/16/index.html","e9efb350b5e5a188d874e4b4e3603198"],["/page/17/index.html","cb420044b138fb6e4cd6393a27c91489"],["/page/18/index.html","5468460581e226f8e140b1ea9e66ae74"],["/page/19/index.html","7e406e35c18f079ae460be357273e72c"],["/page/2/index.html","ce5682e247e7aba8df361647a6b760fe"],["/page/20/index.html","82fe46c202f669fa1c5a496fbe5dd55d"],["/page/3/index.html","214696119ce587342f79c0ef4e7436bb"],["/page/4/index.html","870d01fd211018ab8147e1e3f98770b6"],["/page/5/index.html","17a4180070d7e7f09fad42374fd8f1fa"],["/page/6/index.html","02acd53d0dcf275c8194b76f40d9bbcc"],["/page/7/index.html","66c062d507d157ae7d2da0a2c0e00051"],["/page/8/index.html","7ca2af282b48ac8cc5547674dd0d701c"],["/page/9/index.html","df8b871dc0015cd87336b3a7e3925714"],["/resume/index.html","8d482d403e8d94e348c9d9f9d1d3b040"],["/schedule/index.html","65555c79672f8714f61d17f7da7a0c5f"],["/sitemap/index.html","f6c60c5b1184e1bba625f68904110f97"],["/sw-register.js","65dd1c95c39cb55680c8fe9e695afe3a"],["/tags/AI/index.html","605460eea4414dd72cb2d2871b2213fd"],["/tags/BT/index.html","4cb7be7a4e8b1e06a690b6bcef137f2a"],["/tags/BaiduNetdisk/index.html","81940c870d3a3d6558c40400687d2fc3"],["/tags/Bootstrap5/index.html","dd261efc3ca18fc9b7ab488f1b1a25cd"],["/tags/CSS3/index.html","de2d3467b0d3c002fc2d968dac1c1543"],["/tags/Electron/index.html","84fed532fea1e7efe1b9aaf9a6b33b2f"],["/tags/ElementUI/index.html","b984cbfef29fbad45a0ba384c5c4f195"],["/tags/Flutter/index.html","051bdbc67079495478b21b80e9bfcc37"],["/tags/GAN/index.html","292d15a8284d08e4de21d679fd007354"],["/tags/GUI/index.html","1a8b48921e79c8b85482c7cd77a3d56c"],["/tags/Git/index.html","f7ce67da788329f3f40aa26f0ea298dc"],["/tags/JavaScript/index.html","d14b4b211bca8aea780c8dbdd4d64d80"],["/tags/Keras/index.html","a256c3c435df1ac400037219ee86267d"],["/tags/Linux/index.html","c6ed6a346c38cadcc4bf6bf7fcbc2789"],["/tags/ML/index.html","b9572664e1898ab90880b034412758f5"],["/tags/NLP学习/index.html","b2e27176aadbb25b1defd113ecbf8343"],["/tags/Nginx/index.html","b5b18342f84ed0a3460821bdce0a4190"],["/tags/Obsidian/index.html","d6a15fd4c0663a313881a07cac1321ba"],["/tags/Qt/index.html","99ce2aa289e1c9806fd51d9fe79d849a"],["/tags/RSS/index.html","74be0d185c00de0ebcb8892b80d45b12"],["/tags/SSL/index.html","ec62361e8e077f9b536a27c4b052aa25"],["/tags/Scrapy/index.html","50d810c57d1c9c2e11981513d72614c4"],["/tags/Web/index.html","1b43142c64bb23fa01035648ae4953eb"],["/tags/algorithm/index.html","e4c104d83a67e23a881bf735b643978b"],["/tags/bison/index.html","f1f00d5801bb9a4b1be56d17dbf0cb35"],["/tags/bomb-lab/index.html","8f9e0c8042d889260c985f0b2de21401"],["/tags/c/index.html","411246271f4e40de83f28148ce0c405e"],["/tags/cheerio/index.html","f0e62c873862f915cfeed21fb8eebc6e"],["/tags/codewars/index.html","3adb33abb82d4278e82854b3dc30abda"],["/tags/compile/index.html","1e26d8b9d262429262f6d3d49feb37a6"],["/tags/compiler/index.html","930ab4d75ff57a6624b1c37290868850"],["/tags/course/index.html","5fef84bcdc62d662bff9009f6f097cd7"],["/tags/crypto/index.html","2a72635a7d88c206901333a4ff4bb826"],["/tags/csapp/index.html","4c5dc8923d567731a2a89672e970c5b1"],["/tags/css/index.html","e54e73030418384a62963b275e3e3cf6"],["/tags/data-structure/index.html","df80218e660279ceddab601efdc6d222"],["/tags/database/index.html","b7508acdef7c33eb358ded92757b7a56"],["/tags/deep-learning/index.html","35b4ce019bb4cc1c29de77eadd0cbc4a"],["/tags/django/index.html","22dee5c78c8959c8e9d450c66e9fc930"],["/tags/dwm/index.html","19a6689868a3427e5c51127dcdb312f8"],["/tags/exercise/index.html","ec580b7f2eeeba9200b59df0ee6e44cb"],["/tags/flask/index.html","1e4516d114882357702d2518c51ad22b"],["/tags/flex/index.html","ca292e2ac0ec2f804db45b0b45966604"],["/tags/front/index.html","f4db2c8dbdca2ebbff2113d93e37b315"],["/tags/gcc/index.html","53fad078b03b50cd1b51ddec3b73c6c5"],["/tags/gdb/index.html","6c73ec7eb2a45d9d8569b5c8e9a36c36"],["/tags/github-profile/index.html","b91cb2920375247ddbae7a6572a169f1"],["/tags/github/index.html","6bbd1306304eaee521d7d08e7c37c357"],["/tags/graphviz/index.html","fba851395c745a70917c5b2241535cfa"],["/tags/grid/index.html","782698a2362120ee4a5be76381c14aea"],["/tags/html/index.html","e59822e5774dfaf5279659518a1f46d5"],["/tags/i3wm/index.html","b8095547dc16315cb6ac33fab7111735"],["/tags/index.html","7ae5ea216a5e83ff403a5b269892a5e4"],["/tags/issue/index.html","6972477e5a97f667af966dfc98722f2f"],["/tags/jQuery/index.html","05a7802a347538013fed8458ff705673"],["/tags/java/index.html","bd980fd02906288104ff84ae65dcfcb9"],["/tags/js/index.html","f3ab1378951ae06dafeac1c30c329296"],["/tags/latex/index.html","b8a01b48dd485b83cf3f41d7b9f58bab"],["/tags/leetcode/index.html","1dfebe7cfecb64fd75e89f6f4fbd009b"],["/tags/lex/index.html","757388afaa87c0523fd691827984a1d2"],["/tags/material/index.html","63cc4d27645595afd9c0656792b966ef"],["/tags/music-player/index.html","444f7fbfb74e072d7fa5855efd7ecde0"],["/tags/nodejs/index.html","a24e4ff7d223777f44352b180e002b97"],["/tags/noj/index.html","25c57d79c88de9090dbaf07cb8f13208"],["/tags/opencv/index.html","02ab5fa2486bb1affa0680ea02d0e423"],["/tags/overleaf/index.html","31abdd791d01b1cae70dc51b50a730d4"],["/tags/pandas/index.html","2db16441f0559463b2d36aab71137e01"],["/tags/premiere-pro/index.html","6bc53bea43ab9136a770c9d798234b0c"],["/tags/proxy/index.html","fe6e0ae5e3bfa918b862844f12a3382e"],["/tags/pygame/index.html","fc002c375a7d02769a4a2f9aa98bc167"],["/tags/python/index.html","7dd61ec6035744deaa861624dd62c34b"],["/tags/pytorch/index.html","7bc679185062618b6231444620e38284"],["/tags/reading/index.html","7928959b7e8a0103922cd61549d9e735"],["/tags/request/index.html","252c6bd90b2983d24f50d5bc11461648"],["/tags/requests/index.html","1348c7ec85512681a00ff3f7d48967e8"],["/tags/security/index.html","bf3cf4f45aafcf5fa189e18ff865e3ae"],["/tags/shell/index.html","20941a5eed96ef61c8e23d83a5ba6917"],["/tags/sign-in/index.html","02d0a53b1d209813467f93a861453e31"],["/tags/socket/index.html","125f88f3211d4bb0d9e2b39bb337ad18"],["/tags/spider/index.html","96e65def1d4f78deeec7c273e7a40b04"],["/tags/splash/index.html","981a1b09a7bad31f34182f8711a8613a"],["/tags/superagent/index.html","44f87308e3357a4b410659eb8166c193"],["/tags/tensorlow/index.html","44e2c0a93ceb15f8f8467206c76143b2"],["/tags/tex/index.html","919647b92d15489a5c7b4720463ca5dc"],["/tags/threading/index.html","cb56f35ac4d5b53e906a415587c07bf7"],["/tags/tkinter/index.html","54541490348697fc24bd2a7208d3a57d"],["/tags/torrent/index.html","6cec9315877ccf7e98fda0daf803359d"],["/tags/tutorial/index.html","bb7d629418aa28d9efca2863ad09ac7f"],["/tags/typora/index.html","f1ecc3c17ab3c65b0397b3d6b1d05504"],["/tags/uniapp/index.html","edd5b69a7841cca60eac53edce501544"],["/tags/vite/index.html","c2f0930acd953486bfe0a1ab3572c00f"],["/tags/vue-element-template/index.html","bf7d80a78455a5e280f2e26d7387b66a"],["/tags/vue/index.html","1d0b46cc731eea36b7e1b99735119cd9"],["/tags/vue2/index.html","b9d3dbe899eeaf7302cab235bb1b4ebe"],["/tags/vue3-x/index.html","5d39fdae61f6f7ec521c30086cc1c4c9"],["/tags/wechat/index.html","d87f56557d246819133aff7113d43a9f"],["/tags/wm/index.html","c19333cd0c5b52996094323808a08dec"],["/tags/wordpress/index.html","5e2210738c51ec15e726689be81ca83b"],["/tags/workflow/index.html","31538385dd8885babb8d281d36c9486e"],["/tags/xpath/index.html","408fd6be33d2736cf99d8dd090c66cc9"],["/tags/yacc/index.html","ad6f641510cae2c8641ba80931572153"],["/tags/zsh/index.html","f06508e85c6d9422924e184683055aef"],["/tags/七牛云/index.html","795436fd66428bff634f327c56032a3e"],["/tags/函数/index.html","886d0ed677f042967d3e8c0d9171caa2"],["/tags/剪辑/index.html","592d1be95b88a3c2ae79646f028b855a"],["/tags/存储/index.html","5c7371a8dc533677d9ae0e6f77daed2c"],["/tags/实战/index.html","21259147cfab70c4f2f8401874139ba9"],["/tags/建站/index.html","ede5e2dc2001a72cab5374da09be0052"],["/tags/微信小程序/index.html","12f85b87fbb9ab83d0fefed013e36f85"],["/tags/指针/index.html","bd48e7dff6e15fe861f7156997a21bd5"],["/tags/汇编/index.html","3c731715d444df566e4741f57cb584f8"],["/tags/爬虫/index.html","452eb00f77e9775de1a303f342d64446"],["/tags/算法/index.html","0722dc44efcd4dace12b1cb1106592bb"],["/tags/编译原理/index.html","ee07a937e911e70c74daa40391593551"],["/tags/获取地理位置/index.html","2a43d38a4ab9eca3a6e915e5a01be4fd"]];
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
