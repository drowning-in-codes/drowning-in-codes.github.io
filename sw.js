/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","445afb2e785dcbee471d83198a2c0950"],["/2021/04/20/稀疏矩阵/index.html","9e9956ba396345f7358049b1d1b5fe4e"],["/2021/04/23/广义表简介/index.html","d1a338c8126dbd2c293174a6c11e4e86"],["/2021/04/29/关于指针和函数/index.html","e3df228214bb3dc564279bd9dff6f9c4"],["/2021/05/10/哈夫曼编-译码/index.html","9d8e284bb8ab52f0c4d53caac951d06b"],["/2021/05/17/数据结构noj_2/index.html","5c2a425ca15ac6d2ec21deda868e722a"],["/2021/05/30/数据结构试验/index.html","4076f01af15f9d8e242af3b98ea33cb3"],["/2021/06/12/数据结构noj-3/index.html","3559f660115cad72aeffaf6fdfaa00ca"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","4f10ce31157983d1eab4adf9bebaac49"],["/2021/07/08/课程资源分享/index.html","89103c7c9440b742c1c87d8e021abbec"],["/2021/07/20/Scrapy-下载图片-文件/index.html","fb32d93f1e330f504ca89b409d2005c6"],["/2021/07/21/Scrapy-动态网页爬取/index.html","b8c1fe543bcc06439f6f2cae3003291e"],["/2021/07/21/疫情打卡/index.html","80e4d727315964fcf77be38fddbddf3b"],["/2021/07/29/Scrapy代理设置/index.html","b9dea3e320781538007a0b199eb4bc41"],["/2021/07/29/数据库认识/index.html","98f722b3c7a4478de170449c3934e059"],["/2021/07/31/Python多线程学习/index.html","72ea06aa87474dab66694c00caed4cca"],["/2021/07/31/tkinter-requests练习/index.html","aff23a89a6016ea64fb3a53e8fb097ce"],["/2021/08/10/Git学习/index.html","3c42f0637c744118206b97ee0d7eb196"],["/2021/08/15/pygame实践-1/index.html","480ba11dc3a0babd2c7c2db92c384a67"],["/2021/09/06/微信小程序开发/index.html","a63b38f447f48a7c3abd57d48ea9c0f6"],["/2021/09/21/命令集-1/index.html","f2c93a9010dd73901cda1bc288f1e5fc"],["/2021/09/21/命令集-2/index.html","1210eff934e4acef3e717f85881d5496"],["/2021/09/21/命令集-3/index.html","0200a7f69b4e4803ef8740969de7943c"],["/2021/09/21/命令集-4/index.html","53895de2490685096317362a219a292b"],["/2021/10/03/socket学习/index.html","a89a98d08a95bd282b171b55f0d77920"],["/2021/10/10/dwm入门/index.html","1262e94995a25b38e0739f4514e1445b"],["/2021/10/10/安装ohmyzsh并配置/index.html","85adfacdd1a39b7c632a0e56dc1df299"],["/2021/10/20/css学习/index.html","b36706f10886d3fdd1a7153a6cd34aaf"],["/2021/10/20/wm入坑/index.html","04775885c8611f8457d2b45a53480a0b"],["/2021/11/03/微信小程序学习/index.html","a99450758b4aa744a289fd35a2fbf292"],["/2021/11/04/css揭秘/index.html","30d91a05efc2f4a5fb32fffa2377ba3b"],["/2021/11/05/css-练习/index.html","5488faf311a3e05f60455ba363161419"],["/2021/11/21/命令集-5/index.html","a744ac1d0db8a73cf1aabad2f87213c7"],["/2021/11/21/命令集-6/index.html","581b877d5c2acfdfa35e7573c6b658db"],["/2021/11/21/命令集-7/index.html","c82566134149ae4971cc77e0e178c2c9"],["/2021/12/01/搭建wordpress/index.html","3004a4ee71f11276570f2211789722bb"],["/2021/12/08/python操作百度网盘/index.html","f091b4e476a50ad85399c48c611dbea3"],["/2021/12/14/js爬虫/index.html","6a36a5da41445c6fd782afe6fca14639"],["/2021/12/25/为网站申请ssl证书/index.html","919435b7eada4e0322168cba0af3ab64"],["/2021/12/29/使用七牛云为网站提供服务/index.html","5909e3fcb71b4107252689cd66d1413e"],["/2021/12/30/jQurey继续学习/index.html","433b4fa05f4b1fc9fa1e05fa1d4da377"],["/2021/12/30/jquery学习/index.html","b331c7f6fa99c41ac5e3f749f7912371"],["/2021/12/31/vue学习/index.html","ae0292e7386b56db071b514e99a483ef"],["/2022/01/02/疫情自动打卡/index.html","1071ff03441b1d07317fcbf765d33d05"],["/2022/01/03/javaweb初体验/index.html","ed776e0dbcc8949f040874715bb852c2"],["/2022/01/04/codewars练习/index.html","818ada1fe69cd2db5911a6deccca0b94"],["/2022/01/05/Spring学习/index.html","818dd894580b51e63beb644de670ad32"],["/2022/01/05/vue实战/index.html","dbd6ff10e2b9f5ec64452744d247bbab"],["/2022/01/08/gdb-gcc学习/index.html","cf07082574927dfeb1cea0c141dca6b9"],["/2022/01/11/python-opencv学习/index.html","aec93dfcb98d7a97be61b25d501e3dd2"],["/2022/01/12/汇编实战/index.html","dff7b691a048aac9989bc32538efe1a2"],["/2022/01/17/pandas学习/index.html","32d3bc75f9b35550a5952054a5932beb"],["/2022/01/19/可视化图的工具/index.html","14957b6932229d17ee4a91ce99fd5fc8"],["/2022/01/19/机器学习入门/index.html","21a538766107730bb7beefccba3e4c0e"],["/2022/01/20/cousera-ML学习/index.html","9f414a183505cc85819755b5f9aa11a0"],["/2022/01/30/typora解绑后出现问题/index.html","871775a380ff355352fc9264dab117c8"],["/2022/02/03/NLP学习/index.html","f81a11b9e7661623fcd8f36d36d6d27a"],["/2022/02/04/Web漏洞学习/index.html","c6970fd626d5cf60c7bcedc227bb708d"],["/2022/02/04/pyqt学习/index.html","00ab419506c70be3afbb3f91ae28e6fb"],["/2022/02/04/python爬虫/index.html","6815a6b91a8e7548d142343e09e25165"],["/2022/02/18/Electron学习/index.html","ec095f8855699fac2957acc1c65b56ca"],["/2022/02/22/疫情填报字段解析/index.html","18e9354c00d72ee2a1952fee1b9e7315"],["/2022/02/24/Bomb-lab实验/index.html","8c10009b1405df0047b9208730ea44b9"],["/2022/03/05/nginx学习/index.html","39ae2e47e9b079f540e68a6c30073da1"],["/2022/03/09/汇编原理课程学习/index.html","ba33a9a23d134ee5349f3f8a239ed8d9"],["/2022/03/11/Keras学习/index.html","bcdc0db15ff0f29441466ed3528955e0"],["/2022/04/01/graphviz学习/index.html","1cf8e701ae844fb350057262ff143d8b"],["/2022/04/07/django学习/index.html","5579faae360d0d150e9e0a61bc991654"],["/2022/04/11/密码破解学习/index.html","859a0ac3d33bc4b3f525e7ab70430033"],["/2022/04/12/flex-bison学习/index.html","8c56bd5d3c63404947cb64383c404038"],["/2022/04/15/pytorch学习/index.html","c692ecc92459b17a2be0eb9e2ec283c2"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","ef96364d5132217b29b6362a729b022f"],["/2022/04/23/写一个音乐播放器/index.html","5facfb2f4ae7fec989fb8ba49f2cf13d"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","05c6af9a68fc9af9eeb7432b7192ab22"],["/2022/04/30/GAN学习/index.html","c343bc19fa89cdf675ec3318d52161ca"],["/2022/05/02/html精学/index.html","9a35162a81de7df53351617a6a6ef4f8"],["/2022/05/06/write-a-compiler-by-yourself/index.html","1e1c0193de192560516c8480edb96a70"],["/2022/05/30/acwj-01/index.html","497f8ef9e0f70c90226fb151c7a307a8"],["/2022/06/14/animeGAN/index.html","ec7950d69fac584e08d0571f2fe4fcc6"],["/2022/07/09/c-与算法学习/index.html","416dcf0c425e302e7fe3bb8a60bbf75e"],["/2022/09/19/flask学习/index.html","b09f831b906da69b363b0e598bf59286"],["/2022/09/22/cs224w学习/index.html","8c6294d0cae63ddf7b2b0c71c756021c"],["/2022/09/28/记录一次wp重装/index.html","259c6e8ccc3eff48e666d800edee4711"],["/2022/10/01/Obsidian学习/index.html","2f9a42c07b452feb357c03052ee5596b"],["/2022/10/08/vue-element-template实战/index.html","63cfe09eb711406485a87a373366afb1"],["/2022/10/25/vue网上商城项目/index.html","1d96db1966cce38e89431021b6f36832"],["/2022/11/11/leetcode刷题记录/index.html","241de646b9c71a429f2ce0e0269d6c5d"],["/2022/11/11/使用overleaf优雅地写文章/index.html","2952dfa6dbb687a75a1d1831d9089935"],["/2022/11/22/磁力链接与RSS订阅/index.html","8f0003d15951d4d86cdd01d10bd4fbd0"],["/2022/12/11/uniapp申请获取地理位置/index.html","66fb0a1aa1386987ec3e0bc2618e3f77"],["/2022/12/26/pr剪辑学习/index.html","da5939e075ac9b7616a2d51cf34a236d"],["/2022/12/27/css中的flex和grid布局/index.html","f67c046371a1441a3a6415046b232951"],["/2022/12/28/Flutter学习/index.html","e7307232987306c5b53ac9410f0e04a8"],["/2023/01/01/美化github首页/index.html","e1f00a2a7487e4832dd81798f708ee1e"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","19fb6c52da4b8e39798846a7701ca3b9"],["/2023/01/04/构建微信快捷发布文章工具/index.html","8cd58c704ae226bf2333c4edde3f9539"],["/about/index.html","9b91b1b40fd6e02d7eebe787d1e58e51"],["/archives/2021/04/index.html","3f652546a1e4d6be682980c25f9f562a"],["/archives/2021/05/index.html","54ee2253e1d92f0490af8ca2b55b7577"],["/archives/2021/06/index.html","6193fc5fe861adc0d3fcb5783ac04891"],["/archives/2021/07/index.html","a521cd6089b304c0823e4bbecfbbdc73"],["/archives/2021/08/index.html","33b77a38991f39c63d55853d1e1591a6"],["/archives/2021/09/index.html","fc38e8bcc8594a3bbf90d7eb794a882a"],["/archives/2021/10/index.html","14f9092ce9ad625b300528c66f69be12"],["/archives/2021/11/index.html","ac3c0c1d87485d07ab2c985efd938213"],["/archives/2021/12/index.html","450539cb6492b9e5e989dbf4ce748501"],["/archives/2021/index.html","81afa191a4d8df8df191c16e92936b4f"],["/archives/2022/01/index.html","d3602ec27a78decee0ab09f745260a6a"],["/archives/2022/02/index.html","e48ab375770593cd3ff0c75faed1c06b"],["/archives/2022/03/index.html","90fd40efaf9d6333fb5eed333217580d"],["/archives/2022/04/index.html","b25fa1e144f8f24a9a1c9ef84f659fbe"],["/archives/2022/05/index.html","9ba9b9aff31ab9e4f09da181a3624f54"],["/archives/2022/06/index.html","144f94552890b29d43fbf00dbdc27f36"],["/archives/2022/07/index.html","1b2154819d716cebb01716ef9ddad22f"],["/archives/2022/09/index.html","6cc51ceff1feef9dec269b692dfaae67"],["/archives/2022/10/index.html","71886ca834715ed171d3e46a88c10bf3"],["/archives/2022/11/index.html","b4956e1a51997deff8395ba2cd844591"],["/archives/2022/12/index.html","78c62a46885434c230780cbb43b22619"],["/archives/2022/index.html","36817103562704db05a5e0af59f250d4"],["/archives/2023/01/index.html","5d96d2b0ee815b3985d438e83f6fca72"],["/archives/2023/index.html","fc758eb882d7637d12b6be3ca5d1839c"],["/archives/index.html","3c97013f344a12e96fe85aa2a00804b5"],["/archives/page/2/index.html","59997234ba150e742cbcde266a43c163"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","eaf7ce50f99efd79342db1b7a42e7fdc"],["/categories/ML/index.html","097e4ea24631c44fda6e62ce8c5b9406"],["/categories/Nginx/index.html","8492e7dd833fed4885e47fb2e8cb6151"],["/categories/Spring/index.html","fcdda1a1ae9399ab45236b7ebd4d4603"],["/categories/course/index.html","024ca75c9d1e6b5d79cb2dbbd34ce864"],["/categories/django/index.html","79686cb3e6a5d9c564e836006d5ec4d0"],["/categories/fun/index.html","f9bc80c318a9e2703200e87ccdf35cf5"],["/categories/gcc/gdb/index.html","0264c2536b760ce7c63de02b5d57e74a"],["/categories/gcc/index.html","4951b7dd729940d8ef351b250449ae03"],["/categories/index.html","a4b6210f1cd9a9cc5edb44f14d618f17"],["/categories/java/index.html","d4e48565507aec63ab718738bf27ac6d"],["/categories/python/index.html","c5e13826013f8c7f0763ea0221e5c462"],["/categories/study/index.html","4ce1cdcf84626fbc5487325e7feb875d"],["/categories/vue/index.html","ad86fe6462f0b69271ec91beae005e35"],["/categories/误区/index.html","9faf51aa0ba87306b8324b6f2de85806"],["/commonweal/index.html","52d740fa21cb06d8336cfabe83bb4057"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","ccb0c532d4a910ef1a8f0c1e8b20b385"],["/home/index.html","0051ed082e4d7ce36bb9d571c2f0453a"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","04c394ab2d3d4df4f16a9c8e3f9d0663"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","ad138943d1d75c97c93a41fea38d9f1a"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","098baa6babb6c40c12e4f593a7bd709d"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","fb9eaa540aa9f018e2767b4d7ccce6f5"],["/page/11/index.html","7bbd0a9c8cd6b0f787c945b38faa1ccf"],["/page/12/index.html","4d8b7ceb79c1211e248fc7dd10cd227d"],["/page/13/index.html","fd1d3b4153fc9c947d4a988db8002c55"],["/page/14/index.html","3f3ede64c4c4e1afdbf4243c1b90f977"],["/page/15/index.html","33e33db0c1c39fa6a281f14a856d686c"],["/page/16/index.html","0c80fde1ad353144ee9a18f5c311f0a9"],["/page/17/index.html","3780e0e7fd7b15012f59d629c57fb6c0"],["/page/18/index.html","9587f5f99eb202ee231fa74a97954c6a"],["/page/19/index.html","fdb74810ec4c8bd6f833b1991ca27c56"],["/page/2/index.html","b37c4a48b2d846b737b8fdda7dbbe754"],["/page/20/index.html","93e69a0e48db2d28984b02c61c2ba036"],["/page/3/index.html","623c5773f95bea697dd99acee141f940"],["/page/4/index.html","fc842ef77c480b131f5abe47d5d35af8"],["/page/5/index.html","b9e9d4ac6289cb6c961dab707bd55800"],["/page/6/index.html","88f372da95ea8404a146afb0d67c453e"],["/page/7/index.html","dda9cf1e39fa914f636aaa552fff7ee0"],["/page/8/index.html","1afeb16f9419a53e34c73707f1c3918c"],["/page/9/index.html","48c331602e8204ace2fe5621632cea57"],["/resume/index.html","b519b9f94b61f882b0cea0b82ef5cc1e"],["/schedule/index.html","fb48bdece253cba1f889e06d32f8953e"],["/sitemap/index.html","d0eaf5084d20accd1f2c1cf8ce8a7bdb"],["/sw-register.js","89881f1e14e150b17128b83e87de3c5c"],["/tags/AI/index.html","aa4d48b227a188b8a5286a65d4093014"],["/tags/BT/index.html","4771bc2478a144b1d4e66934ca878201"],["/tags/BaiduNetdisk/index.html","1346eac793c7978d15f63d307449679b"],["/tags/Bootstrap5/index.html","1d94c3ed2dfd1fa9c327db021df8c085"],["/tags/CSS3/index.html","15019ffae1602de55610cdc46d7b2063"],["/tags/Electron/index.html","1ac8859f11017a5677a620fd7f7954ec"],["/tags/ElementUI/index.html","fc0c7e96d203482d685c398dc66273da"],["/tags/Flutter/index.html","498216bde11a0e17dafefac8a7187aa0"],["/tags/GAN/index.html","46355988ab8923e305a391ea16d0f95c"],["/tags/GUI/index.html","44a931b18d5494928ced661cc445efbe"],["/tags/Git/index.html","db37832f60181ef452b7b2955ff5ca0c"],["/tags/JavaScript/index.html","d1ba7589ee9c992d6dbe9cf12de14f86"],["/tags/Keras/index.html","5c8cdbc8d3b806160946c817e28ab068"],["/tags/Linux/index.html","952b998febd147fa3fb426fa42c07190"],["/tags/ML/index.html","318e6a014b96313b0062449d5a541841"],["/tags/NLP学习/index.html","b32cdc1d8dba69cf639353f391ce5de1"],["/tags/Nginx/index.html","3bdd56286784e21b8994e165f727a19d"],["/tags/Obsidian/index.html","24e3b00aca2f7c67a3ff233c0e52dc5a"],["/tags/Qt/index.html","4006509a6f93c33796d89153cc9e3f03"],["/tags/RSS/index.html","5afc9bee9f7326fbeee5fa7d972b9ced"],["/tags/SSL/index.html","d5387228659dec00cf6c192fb1b51557"],["/tags/Scrapy/index.html","442312e852468423d2e1f92f012cefa3"],["/tags/Web/index.html","5bb05ab8498c3dbfa8aba80d2a2ffb56"],["/tags/algorithm/index.html","f9a9ce1714dbd51c7d2c3adf6ed94435"],["/tags/bison/index.html","3cb830e95e8c67fb236cea4107b985f8"],["/tags/bomb-lab/index.html","3b49aab70dfb1a948f6a3eabffe547ab"],["/tags/c/index.html","e92301df2b43a500d7d7f6ac349acf3b"],["/tags/cheerio/index.html","8133653f2e5836a8516ca0222a166eae"],["/tags/codewars/index.html","053f93ca36c3f029dffe4b96ec5b8467"],["/tags/compile/index.html","8b0425ed9c54ad7e25ac8ef031974e8d"],["/tags/compiler/index.html","c187a684d1d4cadbc84dbd1b8264911b"],["/tags/course/index.html","0eb60b641830b87bd1c0992bbaafb807"],["/tags/crypto/index.html","164776addc367c4ed2c0334278122fb5"],["/tags/csapp/index.html","57a0ea1b459183689d053c7734bbeae4"],["/tags/css/index.html","0f164cdf96b7b549f4324ee520189276"],["/tags/data-structure/index.html","ad5eba06d1a3d1046b28bd5fc492dbbc"],["/tags/database/index.html","1a07ad7d7d766b83263d6963158e3472"],["/tags/deep-learning/index.html","525c28eca7bd1441660ca9c206f499b9"],["/tags/django/index.html","dc1a55f480767b5963e621a721e00cdb"],["/tags/dwm/index.html","301f77fd974f8cdfd543f9536bfbcd79"],["/tags/exercise/index.html","0a4ef1a45ec0391ca13536de8a556841"],["/tags/flask/index.html","fcf665aca9498f22ed60c33d9624dcde"],["/tags/flex/index.html","6d7242be6798ce48a4c93b25e8475e83"],["/tags/front/index.html","0e8abfea57df1082d39ed27c03cdd214"],["/tags/gcc/index.html","331b24b1ceb39aec7109383d306ac293"],["/tags/gdb/index.html","517f8d3792565de2c5600d97e147e45f"],["/tags/github-profile/index.html","944e6054572332af8e87294374201f92"],["/tags/github/index.html","8a88d8fa9106034573cdb184c20792d6"],["/tags/graphviz/index.html","27cdbf693e1c4e971bffcbea23f03a58"],["/tags/grid/index.html","64a24e8c41a5d060917fbc99c17043ae"],["/tags/html/index.html","f884add1d42a1b1cd9922619e6427587"],["/tags/i3wm/index.html","8f24c8a504b1bbf39564697059c8474c"],["/tags/index.html","26d385f5d75fc4b615d0db24e468b748"],["/tags/issue/index.html","f79960ab8127f1c2a40a1a2297feede8"],["/tags/jQuery/index.html","9ff39ca3c511a0d20979d4b1aa892b31"],["/tags/java/index.html","52730cab29cc71ada0096e4628396d28"],["/tags/js/index.html","40340f23b8c122f7ecc078e50e7a6b66"],["/tags/latex/index.html","ca046882fcf697fd118028a398c9ded1"],["/tags/leetcode/index.html","597ebd8a164d51046cb252b745d45067"],["/tags/lex/index.html","1b16155dda5fffb2b1fe5544701d7bd9"],["/tags/material/index.html","b262a811848395f9d98964c9fbeaa5e6"],["/tags/music-player/index.html","7c33f59987ef22d9618c3f6bfb27deef"],["/tags/nodejs/index.html","97782526bc9ae5367b915d3b6888d5ad"],["/tags/noj/index.html","075657cbd62b9d999a7ba375fedd7eae"],["/tags/opencv/index.html","c30c756c18af5fc92260125d7d5e4d13"],["/tags/overleaf/index.html","193d1c59af78c99c651a7baf6cd9ae66"],["/tags/pandas/index.html","406c8b924f4e7bb4558b6301c5169ccf"],["/tags/premiere-pro/index.html","d981206e66adff9e8f772ee034c803fb"],["/tags/proxy/index.html","70c130a24806999254e7056ae88b6028"],["/tags/pygame/index.html","6b0ede64da3b9f866a48c677ed772ddd"],["/tags/python/index.html","6224264c981553978cc394721c07b0e8"],["/tags/pytorch/index.html","9cd7abc89b7be564e6b0a7d57923de47"],["/tags/reading/index.html","2e9288b2561e5ba77fc2eaf0ed93d1d6"],["/tags/request/index.html","f51d8f2b4bb7060ccf62652912c43f8f"],["/tags/requests/index.html","0b1ddff92d8eba7b4025287a6fd3b857"],["/tags/security/index.html","1b9c26817ed70674ba7f412122de0a6d"],["/tags/shell/index.html","7b0f97e37e36085764e3684784bd0969"],["/tags/sign-in/index.html","e7a51cc5ba5c7b2ac1459d5adbab8fa9"],["/tags/socket/index.html","e07b02be63b037ea524a146e7335c21d"],["/tags/spider/index.html","aba848eb9e9039bc013085ed30bada2e"],["/tags/splash/index.html","9303f54eac19dbcdd96ab01a2912e8df"],["/tags/superagent/index.html","944311b6e80f09975efe83fce7ef73e9"],["/tags/tensorlow/index.html","c22819326332e55e7904f23126737753"],["/tags/tex/index.html","13cde1016377ade4247ac3f6014d0662"],["/tags/threading/index.html","14f1b0ff59507f97b6d3383900751892"],["/tags/tkinter/index.html","6e9694b2554180b0f410333fcbde870a"],["/tags/torrent/index.html","1e7ad33d196ce2e39659945caa76c003"],["/tags/tutorial/index.html","97c1b021896504e50ea73147b1308831"],["/tags/typora/index.html","5506ee8e2630d3c9c0eba5360ca2d6a7"],["/tags/uniapp/index.html","9dcc7c8cce264b009fbab32080f0a241"],["/tags/vite/index.html","a051bdbd1e235a00454624c5426e7f69"],["/tags/vue-element-template/index.html","8bc7ed84e34af018561f4f317b3e6172"],["/tags/vue/index.html","13a0f7e73b2ef67de012f6bdcafea222"],["/tags/vue2/index.html","534216769a20fe765f5f22297285236c"],["/tags/vue3-x/index.html","131ae7c89c5dee1b2cf729e81b8e7082"],["/tags/wechat/index.html","948dc35af4aa9f6b981b07a014bcca64"],["/tags/wm/index.html","f63ff6e0dea3769f7cf9af60a65df7d5"],["/tags/wordpress/index.html","8469e3877a5eae0a87a31510a8926e80"],["/tags/workflow/index.html","4044a0e0c80d04bcbfcb81c2a576752c"],["/tags/xpath/index.html","5650e68a620730f78fd91a1fec16d1ae"],["/tags/yacc/index.html","420cea3e18e49f23ff64f4774a5f3694"],["/tags/zsh/index.html","157bb0b3543f792e7a3132e7826192dd"],["/tags/七牛云/index.html","07647dff94863ca6292ecad94c042249"],["/tags/函数/index.html","a46174b6ee80b2c3027b33ad99cb6550"],["/tags/剪辑/index.html","ca0c36bf94940ec8623553b726b21721"],["/tags/存储/index.html","8ac52de9099df0d851664d467c78b0e5"],["/tags/实战/index.html","5574842e573bd579a49b07f729a12f7f"],["/tags/建站/index.html","f385d1fed0e0c6be2b9981fc79f7d506"],["/tags/微信小程序/index.html","94150fa2830c03dd822ecefa18399ec1"],["/tags/指针/index.html","36ebbdb527d40eec0975ae1fd14c7a49"],["/tags/汇编/index.html","0f092c80793665810fcf88baafdc1631"],["/tags/爬虫/index.html","7b49e9bc1c8181f0566a4d36df8fa3e1"],["/tags/算法/index.html","6bd0f1336861f82d7db5e083056d34e5"],["/tags/编译原理/index.html","b5e71463bcbac1130c4b4870831cb951"],["/tags/获取地理位置/index.html","331131b70741313921462b3ae9a92902"]];
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
