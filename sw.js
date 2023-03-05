/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","bd466a25cbfa6a39bf9c5466420cc4a5"],["/2021/04/20/稀疏矩阵/index.html","710a5e105a58bbb58f3bdd2892c4c4ee"],["/2021/04/23/广义表简介/index.html","4951f326f218fcb3daf6b3e99aab45bc"],["/2021/04/29/关于指针和函数/index.html","6bc63054ba5f12b7c9dc072ab1e1ddc0"],["/2021/05/10/哈夫曼编-译码/index.html","15af79ddada52e30a808f7bcf5e07ba7"],["/2021/05/17/数据结构noj_2/index.html","a6792c6e75e37fcfa743de63ae90555a"],["/2021/05/30/数据结构试验/index.html","7123f239921ec5627753d045116f96b6"],["/2021/06/12/数据结构noj-3/index.html","6b65d9c3656c336335fe4d9edd5741e3"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","5ec48c16a0b42845aec1117d97f89fec"],["/2021/07/08/课程资源分享/index.html","76b273ab4e5a1247a04c777da7fc6698"],["/2021/07/20/Scrapy-下载图片-文件/index.html","5a78d933c5cddbdf6d7a25da4dd3da0a"],["/2021/07/21/Scrapy-动态网页爬取/index.html","bd10762803217227780362ff9222c1ad"],["/2021/07/21/疫情打卡/index.html","c2110dac97d4774702cb5e23410be558"],["/2021/07/29/Scrapy代理设置/index.html","6529be11bc439ecb15756833b5251050"],["/2021/07/29/数据库认识/index.html","d6f7d739a3ce2d5aeb9812cd0b4880b7"],["/2021/07/31/Python多线程学习/index.html","117bafdaf55cb6a3f26f292a220e9ba8"],["/2021/07/31/tkinter-requests练习/index.html","c741c5d1733ffa1139ea1d4a16a791ef"],["/2021/08/10/Git学习/index.html","e461f29108f6ab0c728e66f0c08c022b"],["/2021/08/15/pygame实践-1/index.html","26865a059c5d31e6ff0cbd4066b1e084"],["/2021/09/06/微信小程序开发/index.html","f145b992024d32ecd9f256509caf16e5"],["/2021/09/21/命令集-1/index.html","f1d163ddc8b74797f42933fedd66d370"],["/2021/09/21/命令集-2/index.html","b43d9f6b5692e86f9cbec2b1847709a2"],["/2021/09/21/命令集-3/index.html","e588f1980b28a781748a4d257d6b9f83"],["/2021/09/21/命令集-4/index.html","dabc459140baaeb2489ea0260aac6b92"],["/2021/10/03/socket学习/index.html","15beb1f2d667c89ef2a5ad6f55ea07fd"],["/2021/10/10/dwm入门/index.html","5db2c846312e6f9cd02a725fc096d9fa"],["/2021/10/10/安装ohmyzsh并配置/index.html","fcb707a066b1a64b1874b948939fd29b"],["/2021/10/20/css学习/index.html","1658064d21bbeaa9c14db872e7d66974"],["/2021/10/20/wm入坑/index.html","2deed2a0bd6e574516cf94677ab17c12"],["/2021/11/03/微信小程序学习/index.html","bb27aadcd7d8d7de7d29464968f01546"],["/2021/11/04/css揭秘/index.html","9e26870396450c1733df635f44ed32af"],["/2021/11/05/css-练习/index.html","75305690baccad1dd663408b40fe95a3"],["/2021/11/21/命令集-5/index.html","14621ca6a86a4ba8f2d1e261a128167e"],["/2021/11/21/命令集-6/index.html","b5e796a5a540431665bd44790258a179"],["/2021/11/21/命令集-7/index.html","c19abd84abf748a1c419dc2ea0a854f5"],["/2021/12/01/搭建wordpress/index.html","e45f1379b255c289b39d8b1742905b29"],["/2021/12/08/python操作百度网盘/index.html","64bb0331617c937536262ffcec742796"],["/2021/12/14/js爬虫/index.html","5ff4c8f545f9bbfaa7f837282dab0f06"],["/2021/12/25/为网站申请ssl证书/index.html","bbd675852d23ed24bb3a2d2dc63f9b45"],["/2021/12/29/使用七牛云为网站提供服务/index.html","5004efcf71cc33bd06db18f99669970e"],["/2021/12/30/jQurey继续学习/index.html","11c4fc1f2534c3b1e76592d510469239"],["/2021/12/30/jquery学习/index.html","8fdf829615a4cf4fddae264826a03610"],["/2021/12/31/vue学习/index.html","b1b42c2f9c6a2c6622e91cdfc296ddc7"],["/2022/01/02/疫情自动打卡/index.html","2762a0d1d71194846d0e6a958beb4ac1"],["/2022/01/03/javaweb初体验/index.html","92fd086eb3b8356f1a951413e0f4a224"],["/2022/01/04/codewars练习/index.html","061f1618fda069117f9e943c1cb457df"],["/2022/01/05/Spring学习/index.html","b685cc8289871f2776650a5774bb9e1b"],["/2022/01/05/vue实战/index.html","5a6fb5aa451dc466c4bc673c371ec34e"],["/2022/01/08/gdb-gcc学习/index.html","96ba3e0f000507499bea8b24940d71df"],["/2022/01/11/python-opencv学习/index.html","256779fbb1ea98c4287c5319dcc6ac2d"],["/2022/01/12/汇编实战/index.html","037acb66eff2c9d48fa5dd2ecd6a33a3"],["/2022/01/17/pandas学习/index.html","74117e3b479b9f70c7dee2829229a543"],["/2022/01/19/可视化图的工具/index.html","3269ace6949ea01d810a64da11be0672"],["/2022/01/19/机器学习入门/index.html","5d7e443032a92612c3b7fe180eb48471"],["/2022/01/20/cousera-ML学习/index.html","7349ef6157187989d2ce24e98b2b663b"],["/2022/01/30/typora解绑后出现问题/index.html","34879275753893fbad76eae4b55923b2"],["/2022/02/03/NLP学习/index.html","124e33c2fc7600950a0cecee4366a070"],["/2022/02/04/Web漏洞学习/index.html","afdd44d92f97f6b9d1c8e23404cdd8ba"],["/2022/02/04/pyqt学习/index.html","6432103c571919298cdcac64508bd7c4"],["/2022/02/04/python爬虫/index.html","1f841a2ec9faeff5bd35c6c8b33f8c4c"],["/2022/02/18/Electron学习/index.html","8b50b5624e930b29804b1da08e3a714a"],["/2022/02/22/疫情填报字段解析/index.html","13711a311f0a80446cf5ab1dc7216135"],["/2022/02/24/Bomb-lab实验/index.html","fee4464f9c07bc3df6ae79d04c983fad"],["/2022/03/05/nginx学习/index.html","6825c625805cad0a77f0be2e53ac4f8a"],["/2022/03/09/汇编原理课程学习/index.html","9e8daffaa3eb215a8a21056996c1204c"],["/2022/03/11/Keras学习/index.html","968d83b00149c6f258b9ac601d0d9d46"],["/2022/04/01/graphviz学习/index.html","cce6ea1794ee1d82134eb3e71b8b7d30"],["/2022/04/07/django学习/index.html","74ff39bbf540fa9dee224a46db6057ea"],["/2022/04/11/密码破解学习/index.html","b8c5a2e6dca51917dd29875f2fbad238"],["/2022/04/12/flex-bison学习/index.html","1d442655e39b54e8a706ae7082cf11d9"],["/2022/04/15/pytorch学习/index.html","8b8df0ba34c5c00b124d75e565940eb1"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","003e7c5f78ebe508cb7ac5ca72c6fc13"],["/2022/04/23/写一个音乐播放器/index.html","194550b1290ea9de95951d30de2eee58"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","1d39aa688cc92bb3f13dc1f3cd22ffe4"],["/2022/04/30/GAN学习/index.html","1c664cc27ab351b459c6cd14ec15a4ab"],["/2022/05/02/html精学/index.html","523e4e8d8a774a768344b819b97c9c7e"],["/2022/05/06/write-a-compiler-by-yourself/index.html","6d3eb961bf34db9362651903cf9661fa"],["/2022/05/30/acwj-01/index.html","3ebfc6e511f976e76c8bde6d6cb44d6d"],["/2022/06/14/animeGAN/index.html","b962e3e611d435240b98295e59ad9c0b"],["/2022/07/09/c-与算法学习/index.html","086c1882eec4a1eccaf13a54290cb7f9"],["/2022/09/19/flask学习/index.html","2690ead6ed901207cd51f5b1b8030b54"],["/2022/09/22/cs224w学习/index.html","4cc4742f9b5b6e090961d782a9c12021"],["/2022/09/28/记录一次wp重装/index.html","44ac7237273358011f02791e31243f78"],["/2022/10/01/Obsidian学习/index.html","95df2e22bf082db49334da69fe49d3c1"],["/2022/10/08/vue-element-template实战/index.html","4c32bdaf6fb5cd99ec04241eec23be7c"],["/2022/10/25/vue网上商城项目/index.html","81904d4642a69eba7802883fecaa88d4"],["/2022/11/11/leetcode刷题记录/index.html","60a2abda9a40e5aa52fad8c87438d2ef"],["/2022/11/11/使用overleaf优雅地写文章/index.html","db27352c7913cb569819c31a87edbe17"],["/2022/11/22/磁力链接与RSS订阅/index.html","283d583b1f4c5361ea2081aabe48ef99"],["/2022/12/11/uniapp申请获取地理位置/index.html","ae578bebfa101bde71d95db6b5e23f17"],["/2022/12/26/pr剪辑学习/index.html","46ca0f87999d0452b65850702171c694"],["/2022/12/27/css中的flex和grid布局/index.html","38a468a0fdbca1b9a78ec8c9c4720a87"],["/2022/12/28/Flutter学习/index.html","00f31bd9807d729d75386d932408d884"],["/2023/01/01/美化github首页/index.html","0d4296115ac2f2a36cce44cc6e7141e0"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","40f6f74d763b36bd2309c7b7121df218"],["/2023/01/04/构建微信快捷发布文章工具/index.html","fd99201ab05f4250b317cadfc6f058eb"],["/2023/01/14/dart学习/index.html","5261a33bf626b9fdb8e6f4519de04ce8"],["/2023/01/23/闲置服务器BT下载影视/index.html","fde954ad9bd724f6543d47fed128834d"],["/2023/02/07/TotalCommander使用和学习/index.html","f4ea4cac3ef5b3081833ee519515cc9b"],["/2023/02/13/docker学习/index.html","da4c3f391329d88e16ab0b22f037dcb6"],["/2023/02/17/DLHLP学习/index.html","a43ff6ef31c402400e8ec5d7307e4c50"],["/2023/02/18/学习purecss构建自己的css框架/index.html","6a20f65a4b328a5956244507fc901607"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","5fb622b6b3be4e9f173d6cf828eea07b"],["/2023/03/05/STL学习/index.html","f890a5cda3e2e12319421ce26c67cc88"],["/about/index.html","6563032d3c3ae1ea1150c6b2e32618d6"],["/archives/2021/04/index.html","1626084ea5121e495b4143c55d44b1ab"],["/archives/2021/05/index.html","ae47583c8421e22d877ea3bc0a5e3cc5"],["/archives/2021/06/index.html","20731e372c18b2d778d93ad79445f6ee"],["/archives/2021/07/index.html","d1d64c7a7052be629952972a462e0ce9"],["/archives/2021/08/index.html","ee4919e2f187f59a2d45128e04960a29"],["/archives/2021/09/index.html","e9bebb9cc2f67e16f55bcab6b3ae5595"],["/archives/2021/10/index.html","56ff9bac5134ddae0567f52243540d96"],["/archives/2021/11/index.html","c07e07e79080fe859c1da5d67144eb81"],["/archives/2021/12/index.html","1b25bce750a8fe94fc16ffe831ac5166"],["/archives/2021/index.html","65ddbb7b6f6149172f8c64677da96957"],["/archives/2022/01/index.html","7ca275e6141456f7f6e5c99369bdd5a0"],["/archives/2022/02/index.html","3d68847fd619a29b42588b148d72a4a3"],["/archives/2022/03/index.html","340ca44a02ad5ba566db69a2b5eabdd1"],["/archives/2022/04/index.html","0fc7b6baf023c6b6d5fee19c0d4702ec"],["/archives/2022/05/index.html","704b75965195cfec66ad0327e0980848"],["/archives/2022/06/index.html","3fbf22b0aaffe6cae8576eaec154b61c"],["/archives/2022/07/index.html","ab2dae4d4615b66b2cad26286712bbae"],["/archives/2022/09/index.html","ae869f32ffcc32aa6ff72e1e3675d761"],["/archives/2022/10/index.html","6bf80236bf4608926e1884419a05f35f"],["/archives/2022/11/index.html","e9059ed8b26f0f36269eb44837981f76"],["/archives/2022/12/index.html","9d3cdd57fbaa53244603cc3e7120e907"],["/archives/2022/index.html","52dd48ed6a9bea74823e98c6fea0d62c"],["/archives/2023/01/index.html","09fa790aace07a806c96197f1f761eed"],["/archives/2023/02/index.html","d9bb4dc341c66f0b7204acd0c42ddbb4"],["/archives/2023/03/index.html","e6460cc43098981f76b3819a83348103"],["/archives/2023/index.html","942fe3b111196043be9de68ed9bdab84"],["/archives/index.html","46ba24fc7c6cfeca17e1d88f9183c4c4"],["/archives/page/2/index.html","05006a76b70a3fef7094dadd184d942d"],["/archives/page/3/index.html","fb999577f6679bd68d1ebd984377cef2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","817703b98986194e43652f1e26dea5b5"],["/categories/ML/index.html","58aaf41224ee88918b3f169edac68c48"],["/categories/Nginx/index.html","6e03e88bf61924e2f013c900a0897e87"],["/categories/Spring/index.html","94885be5eb20ffba013ca0028cc55db2"],["/categories/course/index.html","2426625404a2d8a8246dcc17dfa33ace"],["/categories/django/index.html","e9f2dde19f41d8de46ba44485a3dc001"],["/categories/fun/index.html","7c64a34794599364b22d1f7f69bb89b1"],["/categories/gcc/gdb/index.html","2983b8b824fd5ef138f42da9bde8a155"],["/categories/gcc/index.html","eff3be82107536f8b1e0215ee5663ef8"],["/categories/index.html","b6733037ae828c72cf0aa0c7b406ce0c"],["/categories/java/index.html","fd7d16e36bf7ce387100b34d6eeec2c9"],["/categories/python/index.html","76f0d649cdeb23a3a33e3c3d19d6062d"],["/categories/study/index.html","99820fa2d7fa986adb5136f9fff77aee"],["/categories/vue/index.html","1c7d99147697c599dc8a5d2ff8e6e572"],["/categories/误区/index.html","31e9c5198a2f4747e5785e541c6f0467"],["/commonweal/index.html","603582bddc50a917db3157c0380d6306"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3930ce80f28bf67cd734a71985ea586a"],["/home/index.html","b64e65aadb77abdedeb52033588099ad"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","4f3c8383468b562189cbf9886dd05060"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","6fb84e73302252c25bc9bb36da7c60b7"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","00bd71095d3ab6d626d3ef362639ebd1"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","45056d9774448324d8825b8c6610a531"],["/page/11/index.html","c728ec6c5deff6c76db58bd39d184f42"],["/page/12/index.html","98c48df1f60b5a2ca0dca2dbb4916faf"],["/page/13/index.html","db9c5695adb51515dbac808227eb73fa"],["/page/14/index.html","7605c90ab3b7a2900e0e64d25ae8c95b"],["/page/15/index.html","d0894b8253cae97c8eba3bba49b962cd"],["/page/16/index.html","7300fc3c9df104f10afccd6d5f5a07f0"],["/page/17/index.html","4072b163c7bf08e02c265214061bbfcc"],["/page/18/index.html","cfce83c0d3f8b04a7fe7513ff309df2c"],["/page/19/index.html","383aeb27c07d6e1723a1fe5f78d214f4"],["/page/2/index.html","7b79ab7fb6b5e9485cc1620c3988395a"],["/page/20/index.html","b6cef39506e9cad32278e31d6233b2a7"],["/page/21/index.html","03b13028118d65eefe8924fd883fc707"],["/page/3/index.html","9601fda16c4b665e43879a6107b4e705"],["/page/4/index.html","41584b4063d5e6d7bdba6b30d6db4631"],["/page/5/index.html","bbb90322d84defe2736b7635d5b1b260"],["/page/6/index.html","51ee702c83913914c30ddedc8ab80422"],["/page/7/index.html","a445aef2add989b8d4cb5c79802b78e7"],["/page/8/index.html","734c6087d26c1443aaf02b9dcfa3a87e"],["/page/9/index.html","8dcd03bb653ae8e1ee2c019558d0364b"],["/resume/index.html","bbd718931c2a8cd4e9f1884e94bc31f1"],["/schedule/index.html","070ab2acc8613399798ad78f6240a52c"],["/sitemap/index.html","b4865aa229170345bc157e2a2680bb17"],["/sw-register.js","3f7bca239582063fa23bd8c3952fadee"],["/tags/AI/index.html","c8d83b5199cfc532986f156903416994"],["/tags/BT/index.html","85f5f1d352839aefdab93c905448cb9d"],["/tags/BaiduNetdisk/index.html","33a50841b210f1259148e353453881ad"],["/tags/Bootstrap5/index.html","b57924837ab2f5fd13634a4f6ea6f9d8"],["/tags/CSS3/index.html","75ad0eaff1f6dd865ff94cdf5b79ebe1"],["/tags/Centos/index.html","ec28af126458a6419381024baa98b3cc"],["/tags/Electron/index.html","36c6fd66ca154b15a42a7b17d3cccf03"],["/tags/ElementUI/index.html","8a17bbb3d27d675b665c8ba2d30f81da"],["/tags/Flutter/index.html","e2e3f9a0cae64e5a6be133913f7dcf85"],["/tags/GAN/index.html","dad36c60c61291a90307336bdc0e9bc3"],["/tags/GUI/index.html","75470a7addf01be690893313ee18db5d"],["/tags/Git/index.html","71032a4f1f50f53649125229b6e541fc"],["/tags/JavaScript/index.html","7e5a29a0668e274b9b0d93724bd507da"],["/tags/Keras/index.html","0357b35476920126f4517c28dff58433"],["/tags/Linux/index.html","7250c13d93dc2041dc6b531e6b5b11a5"],["/tags/ML/index.html","c00af7060a091b73635a4bfc5187e5ba"],["/tags/NLP学习/index.html","eb32c09fad88fa8210258ae62806f3a7"],["/tags/Nginx/index.html","7fd135b207c5c43916e3a3d3bcbff5ef"],["/tags/Obsidian/index.html","533e9bbb86f3d4eec609555ef0a2b9dd"],["/tags/Qt/index.html","357510535963c0b6d770c296dc543038"],["/tags/RSS/index.html","f61acf89d2b33de2d6b9bfb9f09ddd48"],["/tags/SSL/index.html","6ecf8bde8ceb9a30d70629ef77feaed7"],["/tags/Scrapy/index.html","d97da63ec0a6fe66da6a846cdacd1c9d"],["/tags/Speech/index.html","9bdbdf84673e9b176bbc19a7223a7587"],["/tags/TotalCommander/index.html","f5870d30e55886b7496b764b3a60c957"],["/tags/Web/index.html","fcaf1908b8e79be2c7c0cca5a9601cd7"],["/tags/algorithm/index.html","959d9e947eb778013d287f888a0af989"],["/tags/bison/index.html","4a2f6f78fb130229e5b649de6c97b361"],["/tags/bomb-lab/index.html","282429cf5ddc2fea363ca2fa61cc4f07"],["/tags/c/index.html","8d10233f304397a8f30e4fbb5d762eda"],["/tags/cheerio/index.html","45fb5f94b372f8b909a9554b61b27246"],["/tags/codewars/index.html","05b31ecc24810bcfc64db71e171d958f"],["/tags/compile/index.html","68c3775bfda53293d3311d6c6762efd0"],["/tags/compiler/index.html","11612fadf6df87c181556366dca468c6"],["/tags/cors/index.html","98953dbd02d5ff99cbda40216e3e2e72"],["/tags/course/index.html","09bc839cf61870b698dd8365c8a8c253"],["/tags/cpp/index.html","b39d42457891f6801e035fb2ce8287b8"],["/tags/crypto/index.html","daf084d039b334205af2dfeb71cadbf6"],["/tags/csapp/index.html","36421a298ad699c713709b5936383faa"],["/tags/csp/index.html","9e88f0676f4f561bbc8857e5867f3841"],["/tags/css/index.html","afd4857a6a2c3e3ae57fa4a52bccdb9f"],["/tags/dart/index.html","5114ac85062df0eaab7cfac23c3623a1"],["/tags/data-structure/index.html","882f34c267b07de16ea47c8bd4108f95"],["/tags/database/index.html","efe511fa579d3e68d8be60caba9a8ab8"],["/tags/deep-learning/index.html","180900dd87f758185694ebcf400bbce1"],["/tags/django/index.html","70c30237b74dfb06971f4f164127ba08"],["/tags/docker/index.html","b284abe126da45adcff504774f27444a"],["/tags/dwm/index.html","f90cd65aa4a1925af4d34e1eb36276ef"],["/tags/exercise/index.html","31afa5b1ee57b9cf65c3feb230a195ed"],["/tags/filebrowser/index.html","d91dc3641c6a69e58c9446f44a530c86"],["/tags/flask/index.html","01c0cb402a3d6c7b5a559fc136eb758d"],["/tags/flex/index.html","791f89788a3c84274f7ea1e3c8911b91"],["/tags/front/index.html","ce9e01605fa09cca178f2cbe851c86d2"],["/tags/gcc/index.html","46f9e45875f08776c08a01f960234a54"],["/tags/gdb/index.html","66fcb167aa38d4ac4cbe0dadc0d6d1f7"],["/tags/github-profile/index.html","2d2fb9a1c51dbe1fd15f0a4f7e5fb7c0"],["/tags/github/index.html","db70dd14c208c76cdbd9c7b10d0cb0c7"],["/tags/graphviz/index.html","ff13179aaeb8b441e5d642c2eaff5c71"],["/tags/grid/index.html","5abc5d68779ca26d8194120385ee659c"],["/tags/html/index.html","18756335388f1ac87abbbb36a8e28a05"],["/tags/i3wm/index.html","73c398b3b9bb438b3ccaea44186ce423"],["/tags/index.html","ebd9fc1ce671f8bc74c66ad93e44cd3e"],["/tags/issue/index.html","6db83058846188b654f8938abc9a75f8"],["/tags/jQuery/index.html","5b29209fd4a0c4ecc778756c474b332c"],["/tags/java/index.html","9ed62faa779b64ed05709dc9cab038ea"],["/tags/js/index.html","5b02130b2a75e33a21e7957be25d3f6c"],["/tags/latex/index.html","7fe1de1f631d95c00e44d673a9979590"],["/tags/leetcode/index.html","6ca155d5d2eedd2087d86298c234f9e9"],["/tags/lex/index.html","03b10351c31dfadef984df7ff6fb27fa"],["/tags/material/index.html","7a0ac979e00ed305a1824c74f5c3c978"],["/tags/music-player/index.html","25ca10f87b91c65f0f7688875fc258c5"],["/tags/nodejs/index.html","be86c46f93c81f4126dd1a837c09b420"],["/tags/noj/index.html","01ab3769728b679f022e38a49273f548"],["/tags/opencv/index.html","06793f31977b6b635280ebc021c8071c"],["/tags/overleaf/index.html","a0474d663d9f557189655918570680d5"],["/tags/pandas/index.html","a425c2a20cb1ac149b597b6a795487f8"],["/tags/premiere-pro/index.html","d95759111e75e79f23f8227708919c0e"],["/tags/proxy/index.html","8d4d246af9072e6bb17ca1259815bc9d"],["/tags/pure-css/index.html","1561d67d608900d47d78863787aa8f95"],["/tags/pygame/index.html","b678fcba71c794724c5cc36c0621f756"],["/tags/python/index.html","badeb2acbe151d298c96de5030db8e69"],["/tags/pytorch/index.html","b8c10ed3f3b7800f65b50be94ecb1246"],["/tags/reading/index.html","eb8ce79876a2db03ef4a3be7b8da8b2c"],["/tags/request/index.html","fceb8e19ec8df41019d8d60abdaa8ea4"],["/tags/requests/index.html","96a78dae17051c1db9fe91d027a85afa"],["/tags/security/index.html","bfb6f78bb64c859a72355f05d2f97ccd"],["/tags/shell/index.html","8bf51bbe4091fc0f2ae74de19c979cfd"],["/tags/sign-in/index.html","54e36c7e22f2f31133d5507e58db23bd"],["/tags/socket/index.html","150fb2c35a65e11545b95f4f45de3c0c"],["/tags/spider/index.html","b9d65529d904f699d3703bd6095482e6"],["/tags/splash/index.html","0c370ba67cd49e9a9f036dd306c8c9a2"],["/tags/stl/index.html","f2dc2144d566e91828bbd22a5884b34b"],["/tags/superagent/index.html","27ffe8592c7c559dbe15611d8c7d58d7"],["/tags/tensorlow/index.html","4a650386c972bd6a1b91f54eb2543b51"],["/tags/tex/index.html","68cfc8bd09f7dded2e77b82ba842b6f9"],["/tags/threading/index.html","c770bd047151f20bbd461464204e053b"],["/tags/tkinter/index.html","24d78525269213f27bf2d8d63e8ad510"],["/tags/torrent/index.html","fe60bf4e1af01aa782180718b4c6d114"],["/tags/tutorial/index.html","fb3bbc51a28650ead3df826bae5354cd"],["/tags/typora/index.html","b93644e03021f764f88f0fde11feacc5"],["/tags/uniapp/index.html","f45fb39294a3e9703874a814e2a3bed0"],["/tags/vite/index.html","32c5718cfda6d3b0007f1c9be13b3114"],["/tags/vue-element-template/index.html","1e2841557a7e0e8be9477bbd18c77454"],["/tags/vue/index.html","cd75d3e07a26bdc11b2b9198b7efbd65"],["/tags/vue2/index.html","83a9cc6c7097d23b52061a94a317e8bb"],["/tags/vue3-x/index.html","a528126d126e101e524e5c64d176cd4f"],["/tags/wechat/index.html","ac969c0b04feb5ed5e1ad9846bd6f2b1"],["/tags/wm/index.html","3dd460ae0669b35944b3b00c56f57b9d"],["/tags/wordpress/index.html","5138b72be2f93087f42fda9edfed0ba4"],["/tags/workflow/index.html","6b2d335e8d24a8ac8450eb0cf124b59e"],["/tags/xpath/index.html","9eefda4837511afb6c9db1da90dad5ff"],["/tags/yacc/index.html","c79c200795dee458c0c66e915e0f9f10"],["/tags/zsh/index.html","2a34ecbbf893d20df29c96a67dbfdf8f"],["/tags/七牛云/index.html","225e64de34c950f00ba71a395ed84ce9"],["/tags/函数/index.html","c94a4d2b440336b21259aa81e9b7add0"],["/tags/剪辑/index.html","b1cf9c6d71a2f7453fcb25998862b5b6"],["/tags/存储/index.html","c9793dc117330c173f325980c647b82a"],["/tags/实战/index.html","de70f35ce153da3691c32f1cef54cbb1"],["/tags/工具使用/index.html","06798993fa048fb3e1f1fbf0df8b1ec0"],["/tags/建站/index.html","db2c2ace44b00115867c3029290d7edc"],["/tags/微信小程序/index.html","56c1438dbc6cfea474e874a8ce752777"],["/tags/指针/index.html","bdd8c203cf049f0f3ae05587f8848490"],["/tags/效率提升/index.html","e6104b9775d06d6dab65743f5d4c791c"],["/tags/汇编/index.html","13082ab0e098f642138a60802d34ae0e"],["/tags/浏览器/index.html","6a6f5645148a76cdf59e500e634b4f8c"],["/tags/爬虫/index.html","4c1e5e1299356d0fff77ea91bef64d2c"],["/tags/算法/index.html","6c88b6a50cd70ebed3b9b3b4fa6a0b59"],["/tags/编译原理/index.html","8e0c32f5e3928db122401b0ba6c7e1bd"],["/tags/获取地理位置/index.html","cb2253553047c548add97cbebe2af925"]];
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
