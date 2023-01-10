/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","4acadbad7d4993405e4866671707243d"],["/2021/04/20/稀疏矩阵/index.html","d3cea31ee28b9454940063a874b280b4"],["/2021/04/23/广义表简介/index.html","55cb1d935c0e584ab9fae7be39ec8e2d"],["/2021/04/29/关于指针和函数/index.html","23e9ee28d4d1f7887f612cd923eb42da"],["/2021/05/10/哈夫曼编-译码/index.html","0495be8d150be072c647e7d90bccadb0"],["/2021/05/17/数据结构noj_2/index.html","b83ce27f9405d986268174bfed60f64c"],["/2021/05/30/数据结构试验/index.html","8c7e2adc5964d761f2120d75030773da"],["/2021/06/12/数据结构noj-3/index.html","1056f3e5ec6b40d7894c3f62c45b2d23"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","5026260a8efbaa65670378eb30ae17e4"],["/2021/07/08/课程资源分享/index.html","8b008edff1c1f7060c1a68cc5ebcfd5b"],["/2021/07/20/Scrapy-下载图片-文件/index.html","f305f21d031b5c7cc4daaa080c4996ea"],["/2021/07/21/Scrapy-动态网页爬取/index.html","18a77ca4579bbcbe7ff59a0d0eb79f22"],["/2021/07/21/疫情打卡/index.html","efb02ba73dd10d750fa3e43a9d6f20ee"],["/2021/07/29/Scrapy代理设置/index.html","56762984f3d9424723638663191f8562"],["/2021/07/29/数据库认识/index.html","7c5db01a781ce17d295973561053da74"],["/2021/07/31/Python多线程学习/index.html","442fd71d56be77bac222926783d4b9dd"],["/2021/07/31/tkinter-requests练习/index.html","0a40fa4b10e049a9f5a0a4b4d4b29939"],["/2021/08/10/Git学习/index.html","78fbb76b297fd6d30abfe4f4be50526f"],["/2021/08/15/pygame实践-1/index.html","30e52c89c08e9ad3fbe60e64fc79db6f"],["/2021/09/06/微信小程序开发/index.html","45d522d1402b1acfd10dc0aba6ba6a2f"],["/2021/09/21/命令集-1/index.html","7c124a2d4e885c115701fe9319ff4914"],["/2021/09/21/命令集-2/index.html","020665ea867752314916ea2d59131a97"],["/2021/09/21/命令集-3/index.html","2a3505cd24d5b899c02a60c9cb136ada"],["/2021/09/21/命令集-4/index.html","905d3a4c011757be10f47369d61463a9"],["/2021/10/03/socket学习/index.html","a97b66cd6214d830179faae8ad35d781"],["/2021/10/10/dwm入门/index.html","28e7a025a2e17d230681074808657e2e"],["/2021/10/10/安装ohmyzsh并配置/index.html","633888639285349a9c1b37ee7789b8db"],["/2021/10/20/css学习/index.html","f4afab2963f40cdeaabf46e06955b5bf"],["/2021/10/20/wm入坑/index.html","3db45415cb5c829e1b1a72e17f01e117"],["/2021/11/03/微信小程序学习/index.html","f1063f97fbf3f215c1984b2f43c4037f"],["/2021/11/04/css揭秘/index.html","36152a4b9ddf5af3a71d81cf0bb2f723"],["/2021/11/05/css-练习/index.html","175fb6bd7a96eb8de0f40003f611c33f"],["/2021/11/21/命令集-5/index.html","8c43d8f15fccb86afd377f68568f3bdf"],["/2021/11/21/命令集-6/index.html","9fd5263f4193bf7ddc3b01aa55fc817b"],["/2021/11/21/命令集-7/index.html","0f046448258874c62955cb4554d108d5"],["/2021/12/01/搭建wordpress/index.html","5254acc50a139f7757e1108dab2147c3"],["/2021/12/08/python操作百度网盘/index.html","90779254e98733cb20c990d2bd16cfda"],["/2021/12/14/js爬虫/index.html","00d3a66b3f6a5570b332ae32991bf61e"],["/2021/12/25/为网站申请ssl证书/index.html","81d303300336103a55b47e3650174ab8"],["/2021/12/29/使用七牛云为网站提供服务/index.html","4a6a362d2c331195bf25ef1fc16dde3a"],["/2021/12/30/jQurey继续学习/index.html","b9d2857e8d6118fb46555e42e6e4a09f"],["/2021/12/30/jquery学习/index.html","f7ebb885bcae8c02353df5ae994f0f30"],["/2021/12/31/vue学习/index.html","0534f5365e37793a011e789cb5d66a0c"],["/2022/01/02/疫情自动打卡/index.html","3fed0a1f8283539faf9d982f59d42d3e"],["/2022/01/03/javaweb初体验/index.html","d72851d487908404a63ab5379d35458e"],["/2022/01/04/codewars练习/index.html","b0248d862806e2a3038428f7f1805195"],["/2022/01/05/Spring学习/index.html","b4dd0a1da1b2ce23ab067ebee0eb76d5"],["/2022/01/05/vue实战/index.html","8b7a8ab4facc5f8b0ac9f6ced644e445"],["/2022/01/08/gdb-gcc学习/index.html","c763bfd5fc71fa6cb88b44663e43ea02"],["/2022/01/11/python-opencv学习/index.html","2069174f73b7f4315c891962268352a3"],["/2022/01/12/汇编实战/index.html","ea948844669efa647ac85bc85f4799f4"],["/2022/01/17/pandas学习/index.html","7ad65d603b566e3727d421092b80d323"],["/2022/01/19/可视化图的工具/index.html","7649dd4bb152e4e27c8083324cda4ad0"],["/2022/01/19/机器学习入门/index.html","7fd5b8ac5dbe7833e39922ebcbc1d514"],["/2022/01/20/cousera-ML学习/index.html","c0ddede262f8794a1cbbd5ec811ce609"],["/2022/01/30/typora解绑后出现问题/index.html","2dd5a6348e8d5ad5bbd87381f84546c5"],["/2022/02/03/NLP学习/index.html","03a5543c57beb660f6e55a6e4f25cc8f"],["/2022/02/04/Web漏洞学习/index.html","214ac542f7975af5b7e797dfba34e59f"],["/2022/02/04/pyqt学习/index.html","8d621ea5d70136713ddd459fc48642fb"],["/2022/02/04/python爬虫/index.html","3bdc4cd610339094ad0217b625096c13"],["/2022/02/18/Electron学习/index.html","89b26d6618ebb09ae24c43f274e405f1"],["/2022/02/22/疫情填报字段解析/index.html","7d4776976d0388620e0581209cbb97d5"],["/2022/02/24/Bomb-lab实验/index.html","16a875702ae030554dacf738da7ce333"],["/2022/03/05/nginx学习/index.html","53a0f729d6e01a405b9a011c2f465841"],["/2022/03/09/汇编原理课程学习/index.html","608c2903909e498a51033ee43d38280f"],["/2022/03/11/Keras学习/index.html","cf77f05a1b906919a7380c70d9e9a573"],["/2022/04/01/graphviz学习/index.html","cdb8cc2e76ce14fa24b7ac5545cc4ef9"],["/2022/04/07/django学习/index.html","88500e51bd36f6cbe250a86f5d2c83b1"],["/2022/04/11/密码破解学习/index.html","b15e3f284d09c9aba2b3d4e8db087cc6"],["/2022/04/12/flex-bison学习/index.html","b8797d9dce6b7d50d1518803a8e9c17a"],["/2022/04/15/pytorch学习/index.html","a971cddedbadadf3145e61a929339ae4"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","b8cd7ea49063d68eeeb8f81e881f943d"],["/2022/04/23/写一个音乐播放器/index.html","c83956f8035de91879a07ac755784c85"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","cd79ab27b6342ee5cddc6cfadf27a15c"],["/2022/04/30/GAN学习/index.html","149e37c89df3d9e3227ba5fcac615fef"],["/2022/05/02/html精学/index.html","385ce0d7e03f2b6bb8d9ae70c7d5550d"],["/2022/05/06/write-a-compiler-by-yourself/index.html","96fef72c9668b25fc1ab542279ee91aa"],["/2022/05/30/acwj-01/index.html","63863d08a6a9795a8dc41286808a9cbb"],["/2022/06/14/animeGAN/index.html","a403bab09f8b50eadc83c10b974e1990"],["/2022/07/09/c-与算法学习/index.html","cd3cdd62d6fdeb265af360d9d68783fe"],["/2022/09/19/flask学习/index.html","568b486efd12cd6cb55342478c8dc3b5"],["/2022/09/22/cs224w学习/index.html","4bdc107039f2424bc0b2743bf6ca9a02"],["/2022/09/28/记录一次wp重装/index.html","f1c9161003fb8bfd2894d9ea11223bb1"],["/2022/10/01/Obsidian学习/index.html","06132a08089a2e02eae4129b8b7c9119"],["/2022/10/08/vue-element-template实战/index.html","1522dc72b691bcec8765a69504daa9ef"],["/2022/10/25/vue网上商城项目/index.html","df7e33b60ae4ac6c89609441cb21dfd9"],["/2022/11/11/leetcode刷题记录/index.html","2830429f3b44d5a18b86c6cc75142f32"],["/2022/11/11/使用overleaf优雅地写文章/index.html","d185613a75753ce0f932983c204af999"],["/2022/11/22/磁力链接与RSS订阅/index.html","19ec1b70585d0c83197067f85cda4b09"],["/2022/12/11/uniapp申请获取地理位置/index.html","6a91db4e4619b7c833034f8fd845eaa3"],["/2022/12/26/pr剪辑学习/index.html","64f349351f37e0d858c35a5ff05a5e1d"],["/2022/12/27/css中的flex和grid布局/index.html","38904fefd5922f2b81454371b77cba01"],["/2022/12/28/Flutter学习/index.html","85e0b8e717670c911acf5049d7d61026"],["/2023/01/01/美化github首页/index.html","844f7ebef8c5cb56f1cbe05bca06b676"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","36399bddbfa5b0be6f38560110ce9cd0"],["/2023/01/04/构建微信快捷发布文章工具/index.html","b3fda656e6894134f1a6ff79121169d2"],["/about/index.html","f85b080da0d9d0c6013e2d1aec031f55"],["/archives/2021/04/index.html","54ad5d5cd52cfa5d7e0e923d6b27155a"],["/archives/2021/05/index.html","912ede1f519f4d52712f7876ef5000d9"],["/archives/2021/06/index.html","085843816a19e8f211117062329c389a"],["/archives/2021/07/index.html","ec106c9869e750ed1697fe6af49d2a06"],["/archives/2021/08/index.html","7db633eeae1c1ac70c17daed23e12608"],["/archives/2021/09/index.html","12ddb756d735128a9d5557adbd14e976"],["/archives/2021/10/index.html","9d00a1f25dad8a37df895d8ba3f1ae3d"],["/archives/2021/11/index.html","624ca4f9b7a2463ec80a278dc4174a3c"],["/archives/2021/12/index.html","0026000ee9a2b620aef43f352b87a778"],["/archives/2021/index.html","76a0996706b1ad28cbcf5c40ce46c69a"],["/archives/2022/01/index.html","6beac6c266bb69581bd3e0caa267e8dc"],["/archives/2022/02/index.html","563da706318ba9196a408c806eb8138b"],["/archives/2022/03/index.html","a0cbad05abab6097c4f1835aeec56334"],["/archives/2022/04/index.html","be899b076b9a2c52fe311b3b60b25df7"],["/archives/2022/05/index.html","ec8decba87689e3baa93578e9859868f"],["/archives/2022/06/index.html","27659e80ccb633ab9eec313ffde82848"],["/archives/2022/07/index.html","42267d337eef96cbbfb796d7b910795e"],["/archives/2022/09/index.html","560992471a5e576420f6cf4ae173eef1"],["/archives/2022/10/index.html","1192d56910099935c017f7a780af895d"],["/archives/2022/11/index.html","8c67c1f263bf1e9fe08bd954de1c4bc7"],["/archives/2022/12/index.html","84151c084506e317bc1b31be8faed540"],["/archives/2022/index.html","b3532a06dc5ecb58483ced392aaa8bb0"],["/archives/2023/01/index.html","cb7bc6cc89ff73f5f19bea7151968d93"],["/archives/2023/index.html","a943408aa11b214b2c4655119e635254"],["/archives/index.html","857aba58d8c11bfea835feef6c029a26"],["/archives/page/2/index.html","43d03c82fadfbca589e9996dfb28a8e7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","e249695eeaeb20b70cd99a83c5b84fd0"],["/categories/ML/index.html","f6bf38fe6e30708bbea1f2f8a04cf72c"],["/categories/Nginx/index.html","18a5db69010a76df79af2400296ac850"],["/categories/Spring/index.html","fd3d61a8848fd08f16b1b5f32cf3788e"],["/categories/course/index.html","a9b71abd428175275b90f59da6df785a"],["/categories/django/index.html","bde51a7d95e0024d8e6b38f07950ef37"],["/categories/fun/index.html","71db9080121ecfb5b106489891e19a26"],["/categories/gcc/gdb/index.html","1f5f919a8fe5ec601497653177185a2d"],["/categories/gcc/index.html","3c750fa5e6b24beb9475fbd7674fd26f"],["/categories/index.html","f2d309b3f25a2c9a88d07832f5617748"],["/categories/java/index.html","7f8500a38c6cf0cd80627caf15068b90"],["/categories/python/index.html","adbc47b97a984f7ef6d6889c3377eff9"],["/categories/study/index.html","411bdd8b9ad4248810ce5b9f8cfc5f5c"],["/categories/vue/index.html","887a669f144fef3660530be506d45529"],["/categories/误区/index.html","7f31f4172dfccb86257a9d4750c15395"],["/commonweal/index.html","dd116097176562e8c6914461aa4cd9cc"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5e139f85a5609dfa8bb6622636f3a5f0"],["/home/index.html","268f3afd13031511a2856c274b4e6cb6"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","41eb4e8225188d450615324ff80ca8e8"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","53ea7971e1d70bcb046a67b90ff812ef"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","5b5c7644a744a4ae717c30a3491ddeff"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","cbf006c95385edb497b40e44b30ffb16"],["/page/11/index.html","98f49d2cc6dbbec816bbf0bef034e5b9"],["/page/12/index.html","666725650591792888b78d85737b3ee0"],["/page/13/index.html","38d3839173315a6f297b32d4a37551ca"],["/page/14/index.html","2ee158ef7dc3a24d1f4867135cbf21ab"],["/page/15/index.html","ca3fee6ef3635a0a7c2654b9cbc29f6f"],["/page/16/index.html","4380112df373b7f5d513c9a715423662"],["/page/17/index.html","e25e7145b98b18299c4519b8e411ce7a"],["/page/18/index.html","a3e389ca480d8079f0ef27da58636605"],["/page/19/index.html","221848f6b35287539ad38c737dcf51a8"],["/page/2/index.html","04cdd868cc64e9019a2f0d4b111211b1"],["/page/20/index.html","bdc9926bfb6a454c7e1c6b568f30e154"],["/page/3/index.html","8d0ca373dcb9ad567b92cf29758d3fa7"],["/page/4/index.html","7c9a80d02c9780445de24edca4956c3e"],["/page/5/index.html","95369f9e5229128e2549a48511ff9393"],["/page/6/index.html","899c35e326ca5dcf2e028ad6c66a42e6"],["/page/7/index.html","0f8ef140b49821321e2f663b8d2decd1"],["/page/8/index.html","def6f1ea8f3f7df60a91dff22de636c1"],["/page/9/index.html","4244344f45dbb84568a48f78ed3749bc"],["/resume/index.html","291170ee8ff3495cab4df09916a6a55f"],["/schedule/index.html","bd4f2472e8cf7a512ea42e51d18baa57"],["/sitemap/index.html","51d4fcfe857cf2fc4c2f7e241e21aad1"],["/sw-register.js","c0ce5747f78cd85c3ea8d4e6e7662471"],["/tags/AI/index.html","6132e829f534ddc55cb7210d69f8d5d7"],["/tags/BT/index.html","852cd2940ed7eaa7e5d76fc6d17a2115"],["/tags/BaiduNetdisk/index.html","82baf5894f6785949ed7a161dad6beb0"],["/tags/Bootstrap5/index.html","baf77cbe061f5b4aa49067190a36b752"],["/tags/CSS3/index.html","7a1333c1c542f0d795788fe9b6bee358"],["/tags/Electron/index.html","751c5463b7ae02689266b72e7f6a8278"],["/tags/ElementUI/index.html","bd63812477e732192c9044d2ec35ad98"],["/tags/Flutter/index.html","225bc3e8000d1ad52c8757b34ca42269"],["/tags/GAN/index.html","f4c0754f523ec92dbf400c618a98bba9"],["/tags/GUI/index.html","326145a6edd1f71f627494783fbd8117"],["/tags/Git/index.html","c32ad1946c57059ae6bb0352f8fb5c75"],["/tags/JavaScript/index.html","2f7e728550ee8f2850dd2d3e23ad1bb8"],["/tags/Keras/index.html","4175ca4c340d0991b63237f5c6c8d4b0"],["/tags/Linux/index.html","acf9bdf8fcf88d9d133bcedc1c7fdaf9"],["/tags/ML/index.html","0fd2b288b5b6e0529f76083502ae99b2"],["/tags/NLP学习/index.html","606903c29913e6de1889a1b81eae1d53"],["/tags/Nginx/index.html","5ad99934f0083d81eed77378f73988bc"],["/tags/Obsidian/index.html","1ad75d26d67f30c5fd155b2fe65c9cdb"],["/tags/Qt/index.html","3a103d1dc79f499ee7dbf8f8a30d9ee0"],["/tags/RSS/index.html","82f7384cd2524f831897847a2c5140ed"],["/tags/SSL/index.html","07ea30f587ae7c5f632e188ffa7cea88"],["/tags/Scrapy/index.html","fcda843be8ba0b0795a0a0e41c28a012"],["/tags/Web/index.html","8b66cbcf2a5a3cc54f3391084ffbed83"],["/tags/algorithm/index.html","dee55e09c948ed0820d5051a80f2f615"],["/tags/bison/index.html","aacb8e5c46e0b164557ca197758efd0f"],["/tags/bomb-lab/index.html","6eb42ddf507e0020ab43aa58639e0b50"],["/tags/c/index.html","945bc70452993f976b9e5a2ec2bd5c39"],["/tags/cheerio/index.html","70b646b2b660907bd58ff68f944deb04"],["/tags/codewars/index.html","01afeeebf876413fd716b9baa7d8c1ea"],["/tags/compile/index.html","d8ff79b6695d4bcf813687adab1aaf36"],["/tags/compiler/index.html","14de7dab9e8b95636229b43d094aa03f"],["/tags/course/index.html","277480c9872e6d2f91963f7d67100b55"],["/tags/crypto/index.html","a7a8ca5257baee5a4f2786303f8bda39"],["/tags/csapp/index.html","651f31611effd8dab9c2162d9fdc2dfb"],["/tags/css/index.html","229c90a1d2abac04cfacc7558e625e84"],["/tags/data-structure/index.html","db6182b4bb0892fba56262c53cfe1944"],["/tags/database/index.html","5765be98e8b71eccb1847126d7b0eada"],["/tags/deep-learning/index.html","d7c1a66b584693116d7073a42418db2b"],["/tags/django/index.html","3578d0e184f71d14ef905923ea0d77dc"],["/tags/dwm/index.html","dcf26dc907c6f91afabe7eb69ddbb50a"],["/tags/exercise/index.html","291d856f4e82a75df3eb06dd03cb0fda"],["/tags/flask/index.html","d0c239e95713204ec0772ae8c0aa28e6"],["/tags/flex/index.html","43ec051889e610176973becdc7bad2e0"],["/tags/front/index.html","18d11aca331c0eb93dec0543d0a26b20"],["/tags/gcc/index.html","1413a55e9a2b0675b340b604fd6d9cd9"],["/tags/gdb/index.html","7cd33548c2c28a00994f0558ad30b514"],["/tags/github-profile/index.html","18a0a363a3ab72d570f5f4b6e5bf1c7c"],["/tags/github/index.html","10512cbeb7022789abf39f179dd9f37b"],["/tags/graphviz/index.html","6cecd7ff1b79c15d6a3c8fe0c1db1b3b"],["/tags/grid/index.html","395d9e0e8a2b850f1e69fbac5a5ede92"],["/tags/html/index.html","bb588ec9b59e77ea90393a5b7784d258"],["/tags/i3wm/index.html","c5bab090c017d266301e2f57b0d7babe"],["/tags/index.html","2bee024b4b2650c7a063ecd7a15397ac"],["/tags/issue/index.html","b04c41f0fa93a60d4b0aac1c9a2ac75b"],["/tags/jQuery/index.html","a45f2a350befc3a0f498c5c78f215a64"],["/tags/java/index.html","3c010c6e4e7b312d92791fc29d3ca970"],["/tags/js/index.html","aa6e0b9a36a837bac6a60a305c9952f1"],["/tags/latex/index.html","c69e74e3d9bb96755c8d9f7eeebfbd0b"],["/tags/leetcode/index.html","7272fbfd5fcdae11d9fdd4db4d23256d"],["/tags/lex/index.html","e6f47baddd3d2b24374c96e038c35701"],["/tags/material/index.html","15f444c096c24ba3fa92ecfcaa8fd640"],["/tags/music-player/index.html","e6a22324d093512dd6f300db37576296"],["/tags/nodejs/index.html","19fdb2ffdfea91f377b405eea1dcda6e"],["/tags/noj/index.html","9281749cf9106000bbea48666b317488"],["/tags/opencv/index.html","3228432a1c1348d889e2a717cc0a0e85"],["/tags/overleaf/index.html","3e90bd74ad9ae90df667129b0e32785b"],["/tags/pandas/index.html","4e77527aa66cae68f263c49a2a17379e"],["/tags/premiere-pro/index.html","02ab2d76dc42f9425cfeac953120acf0"],["/tags/proxy/index.html","c5464df27e14801a63676807e1bf8b47"],["/tags/pygame/index.html","dfcf32c478d690e6f2ea0a86915c8b48"],["/tags/python/index.html","cef3319d18e54293e73b248c321b6577"],["/tags/pytorch/index.html","2fb2ac86b3924d4df7a704fdbb178a72"],["/tags/reading/index.html","5c52ccdf5fb4abdbc8b38501b6afc34d"],["/tags/request/index.html","6f445c444246bbf581c0e063b4485256"],["/tags/requests/index.html","c6527ed47a94fe158b7eee2b9f7cd567"],["/tags/security/index.html","524d07ab2ef8c2a303f9495cb0c835f0"],["/tags/shell/index.html","9d48c06f740f37f6cb7004350973b853"],["/tags/sign-in/index.html","4cbe6e0352005e401751e3fe07c16fb5"],["/tags/socket/index.html","110df8cafcef8f528fb9200636aa4fd5"],["/tags/spider/index.html","63f85c9b39b9f1eb503ba8c8d78540ce"],["/tags/splash/index.html","b8fceeba402159f1c2fa67a56c06cf23"],["/tags/superagent/index.html","c1c8e9bf3950e01938d9a35c79ec7e32"],["/tags/tensorlow/index.html","c597ffcaad69b42f003c207d74cca804"],["/tags/tex/index.html","dfa930442b78e9f1ce9d568bbfb49a03"],["/tags/threading/index.html","730e5472ad0e8b77ada06d8a5372cc1f"],["/tags/tkinter/index.html","d4197c30d1afae257e32f6e49ba8e316"],["/tags/torrent/index.html","668557285291ad2d5df555b49cc8d5e4"],["/tags/tutorial/index.html","c794f80bb4205a7e1f7590166e7b4eff"],["/tags/typora/index.html","f3ff35bdd64ba39200db34b619d10fb0"],["/tags/uniapp/index.html","112976a0f95d8b0195cf46f549c95bbd"],["/tags/vite/index.html","8c37f0fc9d87a9a0188c05185cacb566"],["/tags/vue-element-template/index.html","6bbc36b9c85bd9b692073acd011f63c3"],["/tags/vue/index.html","a177c2c63e7b5558eaa8620c6e1e9d99"],["/tags/vue2/index.html","604b56b697d49ac9f1fe904bef2af23d"],["/tags/vue3-x/index.html","bbc0752be8229b58a3f49be5d6a51692"],["/tags/wechat/index.html","7ccf72afaff6bb5e4fc708572efc0be5"],["/tags/wm/index.html","9ff5a3dbe0688121b12f1e3010076eb0"],["/tags/wordpress/index.html","3beedaaa5cc749b0bb1b8ea9967b5c85"],["/tags/workflow/index.html","a336c64afc6a1f00439fe0f20bd05d7d"],["/tags/xpath/index.html","0dcd9dda8f0b2e6a8dbd6a64d5bde2af"],["/tags/yacc/index.html","83697bb87e3264f9e7ad451e88f5ce22"],["/tags/zsh/index.html","2073fd9e1e5c7acc439317aebfd67946"],["/tags/七牛云/index.html","f2d813b9323163dad88cfd8540714277"],["/tags/函数/index.html","86610ef39cc4542796c3e22573965ece"],["/tags/剪辑/index.html","99a53f9cabde9ac19dab0ff1b126d15b"],["/tags/存储/index.html","9bd814724e872675a8cab316b2d3a5e8"],["/tags/实战/index.html","609c5319a6dfd7880f8361b5b94ef714"],["/tags/建站/index.html","7503b94f32e4b67a907cb52334ed927c"],["/tags/微信小程序/index.html","cf9b26b1c8b059a8facdd6a920a36a15"],["/tags/指针/index.html","8e0fad0ebbbe8fcbb1e1311ea71047e3"],["/tags/汇编/index.html","c1aa68acf16e5241595b4a0b50b5200e"],["/tags/爬虫/index.html","221dfdcdd20ddf437e4e32082a7f0682"],["/tags/算法/index.html","f2c81af1074700d86474bf04f78918bf"],["/tags/编译原理/index.html","397a63fd4c601c4abe1ca144c7a964fe"],["/tags/获取地理位置/index.html","0e3b60aea55cd2ff2e37c28644baa735"]];
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
