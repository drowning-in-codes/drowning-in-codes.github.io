/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","b43913842bc8cede37dd7c2737d0ec98"],["/2021/04/20/稀疏矩阵/index.html","8cebbaf7909c9afd242768984af48361"],["/2021/04/23/广义表简介/index.html","0761f76b590225a74c80da9399f6b93e"],["/2021/04/29/关于指针和函数/index.html","ac6e8a8e5a02a14fb610f5127637081c"],["/2021/05/10/哈夫曼编-译码/index.html","81e950967a610723cf3e8bcafe475095"],["/2021/05/17/数据结构noj_2/index.html","e02e5e6185c9e43cf8231584e21ce14e"],["/2021/05/30/数据结构试验/index.html","6e7bc8c3549b0e432bb5efb2604a1fb7"],["/2021/06/12/数据结构noj-3/index.html","c9c67932c0c9ffb06990b799b8ac531b"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","9c29a871e339b8a1f63fc98b863255fd"],["/2021/07/08/课程资源分享/index.html","f0e1b91204f8cfeaa0b88702e09ab7b7"],["/2021/07/20/Scrapy-下载图片-文件/index.html","a3ac93ff46c772492175c7c6ae3eee01"],["/2021/07/21/Scrapy-动态网页爬取/index.html","21d65d8cbb12677c95aa2c94f5dd9094"],["/2021/07/21/疫情打卡/index.html","ea6b77255fea6729f8b9c3eb921eb184"],["/2021/07/29/Scrapy代理设置/index.html","9f11f50d14200409acbc580b9fa9b5a5"],["/2021/07/29/数据库认识/index.html","fda0db9058f39ad5b46f2751d9fb2b5d"],["/2021/07/31/Python多线程学习/index.html","ae6b866c5b0ebdabf5bdcb3d5f40cbdc"],["/2021/07/31/tkinter-requests练习/index.html","cb9ffb7cbf46fddb77908404fa4e6e0d"],["/2021/08/10/Git学习/index.html","8f79e244b019c4b7180b29368674b5c7"],["/2021/08/15/pygame实践-1/index.html","5f70c41fd607caf429267e97046f1316"],["/2021/09/06/微信小程序开发/index.html","ad3ec5e3f920a50cb9d490da24286aab"],["/2021/09/21/命令集-1/index.html","5244b48804c4d3e15615698d9be3441c"],["/2021/09/21/命令集-2/index.html","825304b84a9e655ee9a35c646702e104"],["/2021/09/21/命令集-3/index.html","567858f2ad55776fae453f7cd823f251"],["/2021/09/21/命令集-4/index.html","8a92ac3f8537b29f1594ebddc28f51e5"],["/2021/10/03/socket学习/index.html","a1eb38c1be56bdae75e31f9a31315457"],["/2021/10/10/dwm入门/index.html","81c7ed6216f217ed1ffea9ab2359834f"],["/2021/10/10/安装ohmyzsh并配置/index.html","95c29ee5a296675a47590c1c21e875c2"],["/2021/10/20/css学习/index.html","df7480964b5d534e6670ee0950738679"],["/2021/10/20/wm入坑/index.html","59a887c3f6bace698688e64314868b93"],["/2021/11/03/微信小程序学习/index.html","5e90df045383cd5b8261bbe598ea6780"],["/2021/11/04/css揭秘/index.html","009af36815c384bcb36849128c7c8b3a"],["/2021/11/05/css-练习/index.html","aec57aaf311581842fda052702d78da5"],["/2021/11/21/命令集-5/index.html","a73b59d9b9a627c9e2dbda2b917a1e4d"],["/2021/11/21/命令集-6/index.html","1f321b33d0954dce35f025d4123d8817"],["/2021/11/21/命令集-7/index.html","460ddf9730ac0bde46b2e11517364822"],["/2021/12/01/搭建wordpress/index.html","d2ae70b2256298a8ad52844f13985787"],["/2021/12/08/python操作百度网盘/index.html","28d7cb90800826bbb07a61d402f104b1"],["/2021/12/14/js爬虫/index.html","c8e3ffb8545cd79205280d97d1977d44"],["/2021/12/25/为网站申请ssl证书/index.html","323dd8efff51afbbfc21b0da5ff4a9b5"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2d8b2aeeb5136f42397781d5b8b78905"],["/2021/12/30/jQurey继续学习/index.html","4d021036a4a6150f55d586cc7e348f30"],["/2021/12/30/jquery学习/index.html","aecd117df86fc76cc598e6b019ba34f7"],["/2021/12/31/vue学习/index.html","32c26aa09f56ea2cb7d7d8ee0b673224"],["/2022/01/02/疫情自动打卡/index.html","7910899a93d3cff7cae4a36025e7bce6"],["/2022/01/03/javaweb初体验/index.html","3adcccc74bb0e593966906d38f375d7f"],["/2022/01/04/codewars练习/index.html","fec77f15e173bd5c61927d8f61a32cf7"],["/2022/01/05/Spring学习/index.html","7cc331c1d5156de97d19f100d0fd06ba"],["/2022/01/05/vue实战/index.html","8592d785354b0540c1829beb5e954733"],["/2022/01/08/gdb-gcc学习/index.html","c03a24d450f5f9e55c1999a15d616c1d"],["/2022/01/11/python-opencv学习/index.html","ccc68b655697805d04e9693ab5efff09"],["/2022/01/12/汇编实战/index.html","dec37165b18129dda1829bea42210d53"],["/2022/01/17/pandas学习/index.html","c9255e6bc52d8e7116b091879c778fb9"],["/2022/01/19/可视化图的工具/index.html","66dca2badeda3d2584b7a68e185118ab"],["/2022/01/19/机器学习入门/index.html","48e7e6058aadc7daa4e50e01b12c2a8a"],["/2022/01/20/cousera-ML学习/index.html","da4b72c3e68ca6d4faa912feb9f74656"],["/2022/01/30/typora解绑后出现问题/index.html","1d86e73ebbf0b76117613065df94834b"],["/2022/02/03/NLP学习/index.html","1a0b976d39909020a990a0131758174d"],["/2022/02/04/Web漏洞学习/index.html","efadfdbdb49453345d918d199e33dd81"],["/2022/02/04/pyqt学习/index.html","a50d79b28cdcedda44dd9f032ed23371"],["/2022/02/04/python爬虫/index.html","52d2a95b119e42000923342f3e6b3a4b"],["/2022/02/18/Electron学习/index.html","cce12e0ac54b78aec52a8ccbe98bbfad"],["/2022/02/22/疫情填报字段解析/index.html","a05d21777e5a45f5fdb9cbed89847ec7"],["/2022/02/24/Bomb-lab实验/index.html","28a07de8eaee4d1e94e6fecd88b0fdb6"],["/2022/03/05/nginx学习/index.html","bbfa2375a7dc0121b20f1b72c1ad7db0"],["/2022/03/09/汇编原理课程学习/index.html","569b1c82c507893a1ae62395a685cb9a"],["/2022/03/11/Keras学习/index.html","353cda63f6a7ff6c46b4a5d9364d7caa"],["/2022/04/01/graphviz学习/index.html","0b302c8ba9ad9db468d14c7f931147cf"],["/2022/04/07/django学习/index.html","f099550dc8fb8c27c2c5f128d03b968d"],["/2022/04/11/密码破解学习/index.html","e8c9f9ac1a49401fd071b6a4bf7fb63d"],["/2022/04/12/flex-bison学习/index.html","40a154f6f8f1b7fd9320a34deddfc65a"],["/2022/04/15/pytorch学习/index.html","9c8c4132658cb3ccdbb78aef6ddb1f99"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","42eb8d86d36732e5645f1b9f8c11cd92"],["/2022/04/23/写一个音乐播放器/index.html","22ffb24a8f82352647e434adbf26f672"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","600d32e32512db9c4374bf78de1cb53e"],["/2022/04/30/GAN学习/index.html","75d5fdfe610742a270ebc4d47c34c1b8"],["/2022/05/02/html精学/index.html","d8e8d95288e41f3987be35702b15990b"],["/2022/05/06/write-a-compiler-by-yourself/index.html","06c143b4818fc5d6483842ded85b5843"],["/2022/05/30/acwj-01/index.html","b300af001479104e345c442ea2ff1bcf"],["/2022/06/14/animeGAN/index.html","dacd80271c09751fd5fd9839b4c85b2d"],["/2022/07/09/c-与算法学习/index.html","2b35c6223cb29422f4f516fbaad59991"],["/2022/09/19/flask学习/index.html","5be01a70c5bf760903b967a77a362ed8"],["/2022/09/22/cs224w学习/index.html","b4f29f07e1b9a0183647ab29c36fd0a3"],["/2022/09/28/记录一次wp重装/index.html","7431dc88e41736c165328c8a555d38ef"],["/2022/10/01/Obsidian学习/index.html","04135358f9cd7e88736dcd6926cf1cad"],["/2022/10/08/vue-element-template实战/index.html","b030207731c2395bedd8711979fbe2fc"],["/2022/10/25/vue网上商城项目/index.html","502f1d95794bb5bbea2548a95adc7914"],["/2022/11/11/leetcode刷题记录/index.html","0af12ea6ef60339a128d20397e5e75b9"],["/2022/11/11/使用overleaf优雅地写文章/index.html","cf07364816aa09504028236352fc6f16"],["/2022/11/22/磁力链接与RSS订阅/index.html","2de8c18b29e61c0bfc1c4a9b1ab72839"],["/2022/12/11/uniapp申请获取地理位置/index.html","97cf64346118636ae0260802e0366471"],["/2022/12/26/pr剪辑学习/index.html","3a4ac4dc819e05752d4c33d035320c5e"],["/2022/12/27/css中的flex和grid布局/index.html","27b2ed96a7e7f076717d86567334f477"],["/2022/12/28/Flutter学习/index.html","c5dbbc30897c49a3b6deb7c68d8f090c"],["/2023/01/01/美化github首页/index.html","3a37b1f176fc294ba808fdefefd319da"],["/about/index.html","219515670ba4aaec39016250a0c75357"],["/archives/2021/04/index.html","35179fbae533b98c61c775d2db912dfe"],["/archives/2021/05/index.html","e9dac709f63921dc9f6d1d53541710f3"],["/archives/2021/06/index.html","1058ba50733bde2fe1ffcb61e93720ee"],["/archives/2021/07/index.html","cb0e611dd7b9ce381b6e7043023ca2fc"],["/archives/2021/08/index.html","4183da30cae15b9afa07047941412365"],["/archives/2021/09/index.html","da3d14153cc0807596052bf73e1a566e"],["/archives/2021/10/index.html","f4f733dd49a08d3c4ae88f62d9fd883f"],["/archives/2021/11/index.html","e3be1588ae72ba20d0a95ce83f1bcd53"],["/archives/2021/12/index.html","89423da6edcebc83925eeef32d292536"],["/archives/2021/index.html","d285db4f89b1f409958a4c03352d15ad"],["/archives/2022/01/index.html","05714bfb67741f645487ddf502dd665c"],["/archives/2022/02/index.html","540e95428cc3a10a5667ee387c6d1d4c"],["/archives/2022/03/index.html","44d3028a407acef686d3c7cf36d664d5"],["/archives/2022/04/index.html","ecd594a4ce4b6649c70943e14f182a3c"],["/archives/2022/05/index.html","80f25604bfb1393be349b789f6866333"],["/archives/2022/06/index.html","91ce3cfc6d7d2e7f5b6d2567e5980572"],["/archives/2022/07/index.html","fecf00b799a84016a2cf5e4351f0d344"],["/archives/2022/09/index.html","68bd1218ca1b86b938a1ec41dac4b94c"],["/archives/2022/10/index.html","8b8dcb7b355e5bad954024eac7cebd4c"],["/archives/2022/11/index.html","7c0d270485d9e7a296f331a0cd85c7ab"],["/archives/2022/12/index.html","aca3a6cb22ddc2ff4382df205e9841ce"],["/archives/2022/index.html","fe3cfe13541bcc374341f7bab3b186f4"],["/archives/2023/01/index.html","e4ea6edae5902bc658f956a0e7f6f0b0"],["/archives/2023/index.html","1b5c2975a3dce03d7d5b4d4fad1e48ba"],["/archives/index.html","dabd5d3397fc0484d06c0b220466e049"],["/archives/page/2/index.html","824814449849569182db90a8baeace2a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","dfb5334f37db705c7a7e446730642cf5"],["/categories/ML/index.html","24678f23a7ad198a89313cfcd28df244"],["/categories/Nginx/index.html","60f12e1f5a23bbe703f14e06ecc7a7e7"],["/categories/Spring/index.html","d651908c4968dce869a3f1b27aa36b6f"],["/categories/course/index.html","6a3a9d0b34afee4b5aa5b4eac6e446ad"],["/categories/django/index.html","e4ca4f853b5a4184a87842aec946fc8d"],["/categories/fun/index.html","ec84227e60bbceb2ba58a0aeb89d5e2c"],["/categories/gcc/gdb/index.html","aa6b64f8160dd01eec7e4ce830020038"],["/categories/gcc/index.html","393f883f4f16e17c3a8fb5055ff6890d"],["/categories/index.html","81f56d39e97702256ef5c28b4b073706"],["/categories/java/index.html","d743892ecb70896194f0079831740867"],["/categories/python/index.html","2bbbc34f33993d9ad70bf2ea74cb7a17"],["/categories/study/index.html","6a01bf0a15e4eeedc65482b33ee9fb4f"],["/categories/vue/index.html","dee87d01447f0afcccc727764f7581a8"],["/categories/误区/index.html","489220744416e182cea8b1f1ebd9c4e7"],["/commonweal/index.html","3d0574d57ce85dcdaa576f14840da29c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a52c0b08acc65e3d9cde9abaf5554963"],["/home/index.html","cf2a4ef0f4879a05cd4206db061359e2"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","714d4dd8d674f8c8c5dbeba67b38bebf"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8c791377fb34f141ba08c31b22ad97c3"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","370bc564d47601e0d5fba2c2e7689059"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","47699f49a70ffdf5d93adf07307853d2"],["/page/11/index.html","6e3938b33645536a8ecf41d40e0213cb"],["/page/12/index.html","a92a2c4629e76dc6117f8f902435d6f2"],["/page/13/index.html","1f650fa3ee2b0d5ae835cc4b91b37a04"],["/page/14/index.html","b28d85164b1c9228a5cd36f1bd74a856"],["/page/15/index.html","33f6d06eca30a44b645f998cbfa0dd9c"],["/page/16/index.html","e572696146b4b70cea8047b12f63019c"],["/page/17/index.html","178e99926d8cf4743f255539c4256de3"],["/page/18/index.html","e292d94b6f2d115c1d8e022bf1e6f601"],["/page/19/index.html","d33e883ff6eb93d207782d91b8923846"],["/page/2/index.html","805b12bc1a8d20f8604c2c3fb8e45f59"],["/page/3/index.html","9d46d81ebc56a1c9057b692ff692d861"],["/page/4/index.html","1cdecb298f7cab390336aa3f0c9a0555"],["/page/5/index.html","82bf0d9c8d0b8e989e1ea9b6eb3a66cd"],["/page/6/index.html","3c4c21a95463b49d3093ee13c75a32aa"],["/page/7/index.html","7173e2fc4e6b992a90883c6d36258b80"],["/page/8/index.html","adb4cb08862dcd5a1b3f776f745de9b4"],["/page/9/index.html","5f251c03d96238b5649e9801cb0fb4b6"],["/resume/index.html","08eb62aaf036c286d6ce0d648aa02fe8"],["/schedule/index.html","d657c917acdbd62e74dccf45b4d91778"],["/sitemap/index.html","05ab71f7bd133e030431db056efb4a14"],["/sw-register.js","401beec063ad46095d4b003aa5586de0"],["/tags/AI/index.html","0fb3dca24e31d647e7c3eb80635738a3"],["/tags/BT/index.html","72ba5264581b96c555a47926b655124a"],["/tags/BaiduNetdisk/index.html","1572aa7ac9f21ba7f8e0a22e7bb2416b"],["/tags/CSS3/index.html","b0da2baedb811a97b00a3e9c8a0ab4e8"],["/tags/Electron/index.html","c5baea2d2fc71ef1514b29a1c79a6352"],["/tags/ElementUI/index.html","b0d1608a6758eb17eba42114d20c0f79"],["/tags/Flutter/index.html","db3fff88b88a27f8912254b4a7be1ca1"],["/tags/GAN/index.html","1382d5d201a1105274b94dd0a2651450"],["/tags/GUI/index.html","cbd92fd772abcf15912fa215cb967769"],["/tags/Git/index.html","1c73bba352f2f24a5d513e8ab17d631d"],["/tags/JavaScript/index.html","a561d32697b61db0ec92da3edd75eb87"],["/tags/Keras/index.html","801e297d0308b5aaf96efdae600943cd"],["/tags/Linux/index.html","e6cc769627b2211bbd7925c8798e964e"],["/tags/ML/index.html","fc89d8a191daec65bd0826cb433dbd4f"],["/tags/NLP学习/index.html","ac96cfd148ddc4e07099719c4bda508b"],["/tags/Nginx/index.html","dc8ed303587bc536fd772ec7c9e4e99e"],["/tags/Obsidian/index.html","c7d023548b95bce4fab3cac912fe041a"],["/tags/Qt/index.html","155cc0a71511bfbecb0f6e68fa82eb09"],["/tags/RSS/index.html","e1b04de46967057a0e9c951fb8ef9515"],["/tags/SSL/index.html","3e030a42a9c098a94be9be5b146ae386"],["/tags/Scrapy/index.html","d57ce67c2b4e82e557e11aa4e82c4cad"],["/tags/Web/index.html","e9eb07003d67541c2733fd81e65f07e9"],["/tags/algorithm/index.html","6e2d4e3484e8d3d758d95935ced5926c"],["/tags/bison/index.html","013ba7f044a73344f21e283ce78a2f00"],["/tags/bomb-lab/index.html","1238032f7ae797afc0e12d456d81bc00"],["/tags/c/index.html","5fc2911f134f249a281ef1d9c68f6034"],["/tags/cheerio/index.html","9e7ffff615351e05801029b674f6ab07"],["/tags/codewars/index.html","6a3a3d560c3a86cba315e3243da73452"],["/tags/compile/index.html","e1cecf22863fc8461005ab45b23b47e3"],["/tags/compiler/index.html","00d24d9a8c634fc55d79409595201d6a"],["/tags/course/index.html","7efce5f4897dcd9e6a139c93f448d99f"],["/tags/crypto/index.html","b5e57dd17dba19c9fde90ae59f50cf08"],["/tags/csapp/index.html","b069ae22a09613edd1e1bdc12b78ad0d"],["/tags/css/index.html","4fa0dad956d6e8ffcf90b3fed93a6909"],["/tags/data-structure/index.html","1745604c28891794629a0402743fc7ff"],["/tags/database/index.html","ccbdac1110921f164da04f64472df020"],["/tags/deep-learning/index.html","3263712e9084731386864d2838adbba7"],["/tags/django/index.html","2edb29df6555a9cbd2725670f3f637c0"],["/tags/dwm/index.html","2980e8581aef5adcd171cbe65fd3906f"],["/tags/exercise/index.html","75c1f5a01e226425bf23f2760456530d"],["/tags/flask/index.html","5ec4ee81613f088d49a6b73d58dd3dfc"],["/tags/flex/index.html","993910948305b92b761a00ad863c2a73"],["/tags/front/index.html","c785332c1cb52d9f0ad9549d62a5249f"],["/tags/gcc/index.html","3ddeccb33f48d87aa50634535116de44"],["/tags/gdb/index.html","4b4d33cd9bd6a90f92c8579e99a0e30f"],["/tags/github-profile/index.html","8c709e533c20703273577bff684df682"],["/tags/github/index.html","041d8234d9d9d7546ca3aa4aee39f526"],["/tags/graphviz/index.html","56173e65372f3db67fd71778501e0273"],["/tags/grid/index.html","24872848806ca6048e8f64dfe5d51b70"],["/tags/html/index.html","bcb63b9eaa0e598f489d9d7a28411e8e"],["/tags/i3wm/index.html","592395b569e1b239abbcfc9875c1dcfb"],["/tags/index.html","483c99003fff6f324bfae230d0d65f36"],["/tags/issue/index.html","da7d2666e55c6acc9c114167a4d48ea0"],["/tags/jQuery/index.html","ab3689fd6c465d7c61dbd3094b892aa5"],["/tags/java/index.html","fb1f5c7d39761c56abc971f2b1a15d18"],["/tags/js/index.html","242b204d1f5bad5bc25fdf0333143e3e"],["/tags/latex/index.html","087e9ca8b70776779b5df3312380a84f"],["/tags/leetcode/index.html","8b73b6950733dcbc9cc9a5a7501064a2"],["/tags/lex/index.html","fe4e09396d4d9f4eee04a2f4b97bc929"],["/tags/material/index.html","0a2b0fbef1529c0285a1ec490407788f"],["/tags/music-player/index.html","14acda9a1aa47fe0fc62ac64629d4acf"],["/tags/nodejs/index.html","519c84a4db4625cac5ab251b25fd1aae"],["/tags/noj/index.html","fed5fbfa349d4cdad8547fd7388b55f3"],["/tags/opencv/index.html","65dac66a475c6738ab91799780b9f871"],["/tags/overleaf/index.html","1118b26605150db51e05c9af8e6076e6"],["/tags/pandas/index.html","cdea8acd3db967ccbb403e6758157e43"],["/tags/premiere-pro/index.html","cff3bab37c7ce7e23a50bca86387a136"],["/tags/proxy/index.html","253d9a09b94aa888ef7d7bf158bff586"],["/tags/pygame/index.html","3e528df226d042b469e6c26edfde71aa"],["/tags/python/index.html","0f15459cf96e55532850f29d1d186731"],["/tags/pytorch/index.html","92f221451d56a60a28ac24d62fe3f3f9"],["/tags/reading/index.html","7b317fc43e5ae2731349edb8fa5937f7"],["/tags/requests/index.html","520f789c6a603f90684cc121902bbaea"],["/tags/security/index.html","1fd51be03a6e81570b0bd087a293a72b"],["/tags/shell/index.html","08bc0665fd7c1edeaa4f3e1022bf65f7"],["/tags/sign-in/index.html","b2d34aa443cba6b1e39d89cf681a34cf"],["/tags/socket/index.html","473b697c38f6bc41d1866192dad8bbe9"],["/tags/spider/index.html","6dff31df811996705d04b9681e50f92a"],["/tags/splash/index.html","a1fc2f751038e7c44578041c564ea816"],["/tags/superagent/index.html","4376755346c6b353edf217443450950c"],["/tags/tensorlow/index.html","990b8f3903afd54340311400b02802b5"],["/tags/tex/index.html","ab5df7d46b9a3c34951a3d34da5833ae"],["/tags/threading/index.html","0e51db8cddf0937924a1dc463f243a4f"],["/tags/tkinter/index.html","65dc4ab7ae1159a4b76557243dac37ca"],["/tags/torrent/index.html","bdbeb98349813a510424c8594af9c700"],["/tags/tutorial/index.html","f418f612894820a10a1d1f59cd1761b7"],["/tags/typora/index.html","686d91d10678e5d3eb1859c6bffe0cd5"],["/tags/uniapp/index.html","18f69ca04ae08c54430206651f2581b3"],["/tags/vue-element-template/index.html","cb683666fec7ce188c628bab09916e3a"],["/tags/vue/index.html","0f14e43b803888ad3d7a926dc1619b76"],["/tags/vue2/index.html","80403164745becb99ee81747e860953d"],["/tags/vue3-x/index.html","860b0da17e85a0de6e333511b7bb9e06"],["/tags/wechat/index.html","6be17e5715786da25409d1ca8fe6401e"],["/tags/wm/index.html","ad0b127ff91751a6bc8c3184c2d7e3f4"],["/tags/wordpress/index.html","02b55e76b32f55f84ecec07825947320"],["/tags/workflow/index.html","2ae3d4d2f6e47645fa6ede035bf78bf8"],["/tags/yacc/index.html","b72f3dfb855cbdcb4e0b41008cae7c12"],["/tags/zsh/index.html","96e7a6b5329413fe6542fb2855f648f7"],["/tags/七牛云/index.html","8845bc9d49b4c11a0592ecf8bced9744"],["/tags/函数/index.html","125f131c94eb0570047a794305e1f24d"],["/tags/剪辑/index.html","b64d80da89ae15c641802b22dd1af88c"],["/tags/存储/index.html","9a6a5dafad56b5ca5a3aab0710e47522"],["/tags/实战/index.html","5a8dffc9b538a253f24d323a4c7c42b2"],["/tags/建站/index.html","9dfd7c92fd8edd75d4e3f7693f0e9052"],["/tags/微信小程序/index.html","e0477488f158058ccd409cb46c1e6c24"],["/tags/指针/index.html","de6c815443786ab5d3102af9c6760fd9"],["/tags/汇编/index.html","0558398facfce5d4c71e4ead20ad9a54"],["/tags/爬虫/index.html","d3e6012fb95dc76e0d2684087a845d33"],["/tags/算法/index.html","76a7e594836a02c26014481fff4f9978"],["/tags/编译原理/index.html","20b4abbe867f3696863f6376f1fcee49"],["/tags/获取地理位置/index.html","b5a13f002b9f6cd89fcbce6b7839adac"]];
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
