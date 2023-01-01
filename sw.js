/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","b783d50502d2f90656c3fe446cf7ae87"],["/2021/04/20/稀疏矩阵/index.html","871ea75f6ffa044031392b7ebd0f1bb1"],["/2021/04/23/广义表简介/index.html","321f8a1a50d2d4911dd6cdf6336d4502"],["/2021/04/29/关于指针和函数/index.html","d114179cc40bcf7d8d1f43ffe6a35314"],["/2021/05/10/哈夫曼编-译码/index.html","3f77559414161b46127d16875db3bd9e"],["/2021/05/17/数据结构noj_2/index.html","11ba29b5ea9ce5e7b6ce0d429914edb8"],["/2021/05/30/数据结构试验/index.html","27aad6b8830be0a67a2b888a33b26e50"],["/2021/06/12/数据结构noj-3/index.html","99145a4c57bfa11697828cdd6d487e44"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","c474b2e68f8e86d213c2f355cd2014e4"],["/2021/07/08/课程资源分享/index.html","7e024997c90b62d59dfae2ff49841357"],["/2021/07/20/Scrapy-下载图片-文件/index.html","5ac157c618147175a9c662596fb18889"],["/2021/07/21/Scrapy-动态网页爬取/index.html","4ed5a2ac654402b42e0adecfa4e28d64"],["/2021/07/21/疫情打卡/index.html","4b8a00c8cc27db254c92120dad05a968"],["/2021/07/29/Scrapy代理设置/index.html","11652e3ddb9484b8c51e3416fad58d76"],["/2021/07/29/数据库认识/index.html","c8ddc87d8147f4b6ba73e4855b3437ad"],["/2021/07/31/Python多线程学习/index.html","7f8ba1b28be91b6daad885bf12f2f2be"],["/2021/07/31/tkinter-requests练习/index.html","eec20a39173d41d38220342a3bdf2f88"],["/2021/08/10/Git学习/index.html","854bb735e3cfa3ea9a968a3ed4d2922e"],["/2021/08/15/pygame实践-1/index.html","9d91462e4be1c0c1171866c38e50d7a7"],["/2021/09/06/微信小程序开发/index.html","511676561e33f9488ef025d76ea8917c"],["/2021/09/21/命令集-1/index.html","eb292fe433be47d1d74b7754884f21ac"],["/2021/09/21/命令集-2/index.html","ce42d37a608b7963885ec8d6cf5144b1"],["/2021/09/21/命令集-3/index.html","382ceac146e0ff99a8f64ac8e3a43046"],["/2021/09/21/命令集-4/index.html","150a94ab5c1bedb3b9c43e0fc86ae5df"],["/2021/10/03/socket学习/index.html","7ac764e8da1a973c251148cf040ba5ef"],["/2021/10/10/dwm入门/index.html","db3e5bc50ba5542d11c3f2b25956a8a9"],["/2021/10/10/安装ohmyzsh并配置/index.html","902024d842718e5792e1c51b5a94b976"],["/2021/10/20/css学习/index.html","e59190b9c7b08cb7e9ee58c584017c3d"],["/2021/10/20/wm入坑/index.html","c7fce42b381fcf480e46228fe0839f14"],["/2021/11/03/微信小程序学习/index.html","5f05315801a55cad23ed935102111b95"],["/2021/11/04/css揭秘/index.html","6869250356ecac1825de9d147e624d88"],["/2021/11/05/css-练习/index.html","a1dfb7f54c4062df27c95780138e413a"],["/2021/11/21/命令集-5/index.html","7904178ade76f8afc2efbc6a875cdd2c"],["/2021/11/21/命令集-6/index.html","97db05eeba078032bff9eab9a95843f4"],["/2021/11/21/命令集-7/index.html","0fd1941edb2906cd02b9a4930807db0a"],["/2021/12/01/搭建wordpress/index.html","04e2b0e660970a3ee76238d7ff9ba345"],["/2021/12/08/python操作百度网盘/index.html","7269e2dc128e9a76b9b6be79f05bc034"],["/2021/12/14/js爬虫/index.html","3a3761daad11a0bfb56599b1f94de76c"],["/2021/12/25/为网站申请ssl证书/index.html","0b105daa7e97bd6c92209cdbb62e4ff5"],["/2021/12/29/使用七牛云为网站提供服务/index.html","b7fc68a3756991696194866febce818b"],["/2021/12/30/jQurey继续学习/index.html","f11b4f5141cbf4d805cde47e03489cc5"],["/2021/12/30/jquery学习/index.html","8f51296ae941aeacba6a98382b71b861"],["/2021/12/31/vue学习/index.html","8cc56a3219bd33be0c69d9cdd1195cda"],["/2022/01/02/疫情自动打卡/index.html","535768d7fad4cff7232bc77ca363d988"],["/2022/01/03/javaweb初体验/index.html","294538b1e9e21bab6bde19ade462cd1b"],["/2022/01/04/codewars练习/index.html","2f8d2badb4b1d46c90005a6623c02b0e"],["/2022/01/05/Spring学习/index.html","3eecb11f64df345352b031381eee467e"],["/2022/01/05/vue实战/index.html","f482f989f1377a10fe516e08ec4f3cde"],["/2022/01/08/gdb-gcc学习/index.html","914b7cdecb200617e5c3a644004ee3ff"],["/2022/01/11/python-opencv学习/index.html","a4f0f8786048a8a84b374a25bd261493"],["/2022/01/12/汇编实战/index.html","8794245c78baf677d6ca770770827569"],["/2022/01/17/pandas学习/index.html","2dca3220f2ae03cf590ebbb85baab5c7"],["/2022/01/19/可视化图的工具/index.html","59be37acce571bd553f07adcbb516dfa"],["/2022/01/19/机器学习入门/index.html","bd8316db14fdbf70f2ac6db380dcd251"],["/2022/01/20/cousera-ML学习/index.html","fa113f6993db6037acffdd8b61c9da81"],["/2022/01/30/typora解绑后出现问题/index.html","43f03ac76eeae476db57a0a43d29a998"],["/2022/02/03/NLP学习/index.html","8b8bc123c24642ac6358d717dbe8949d"],["/2022/02/04/Web漏洞学习/index.html","7e7d79596bc53865e6150711baa2b96d"],["/2022/02/04/pyqt学习/index.html","f06639abc7bcd0b39e63d0e5397180e5"],["/2022/02/04/python爬虫/index.html","63986b70aa90fd03621aeb1d8012e9b6"],["/2022/02/18/Electron学习/index.html","eaf6a9cf5cc455641a8dd7a6e311b0cc"],["/2022/02/22/疫情填报字段解析/index.html","3a7819546b841f7db8731e29ebb2a5f2"],["/2022/02/24/Bomb-lab实验/index.html","47d2ac82a9bd518c6fe2b62c3e8c75cb"],["/2022/03/05/nginx学习/index.html","e134f212c8ce8295415d3734df9c8614"],["/2022/03/09/汇编原理课程学习/index.html","8d1bcb85816ee69b27b1f8b4ccedc3a8"],["/2022/03/11/Keras学习/index.html","8986b5ffe667feba02e201f42628e51e"],["/2022/04/01/graphviz学习/index.html","a78ceb5802f090f5314edc6c08a433c5"],["/2022/04/07/django学习/index.html","7e82e4af18a0e1f7fabb98a714cda7a6"],["/2022/04/11/密码破解学习/index.html","6198789c4966d116f202d40e3f3c0f59"],["/2022/04/12/flex-bison学习/index.html","a29525b075a72c007a0be91d77f1cfcf"],["/2022/04/15/pytorch学习/index.html","37360f20be6c81054afa762058ea5b54"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","b02c72d439746084ea59cfa6791dc385"],["/2022/04/23/写一个音乐播放器/index.html","24845c4ed79e61a7c673c8e0c07d7f87"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","ecf4a85bd1771a7fb2b85bac43149163"],["/2022/04/30/GAN学习/index.html","dc3bc051ced9a9dbfe1ed6a0b77abe74"],["/2022/05/02/html精学/index.html","c417715760493085a6f874ad2a0d1991"],["/2022/05/06/write-a-compiler-by-yourself/index.html","c98e135929c5ff1f5efe41d50ad309dd"],["/2022/05/30/acwj-01/index.html","b39a9b064475e921b63667249f3f464e"],["/2022/06/14/animeGAN/index.html","0f351353261c0ef821a66472119bda20"],["/2022/07/09/c-与算法学习/index.html","1218bbcb834dd90853d76c816a91be9a"],["/2022/09/19/flask学习/index.html","18dfed9e70f3b68c18fc2d46670c66f2"],["/2022/09/22/cs224w学习/index.html","4ca543da4158c58c83efb0c15cf111ec"],["/2022/09/28/记录一次wp重装/index.html","5fb885a8b0464eced14909e0743a6264"],["/2022/10/01/Obsidian学习/index.html","cfb0c8c101efddaeab7e51ddf6fbf9e3"],["/2022/10/08/vue-element-template实战/index.html","5c91d283d13b41c8202197f79c676689"],["/2022/10/25/vue网上商城项目/index.html","8cabf39f78b5a0bbf53c4f7bc4468464"],["/2022/11/11/leetcode刷题记录/index.html","7503b6a71e65c98943ea7a988b955c55"],["/2022/11/11/使用overleaf优雅地写文章/index.html","4b8e1a3c7020fab9a334993301bd9abf"],["/2022/11/22/磁力链接与RSS订阅/index.html","749b2dae236c9d269df12c8729bf46fc"],["/2022/12/11/uniapp申请获取地理位置/index.html","a393c129a0d8d5123bd5048680c0d803"],["/2022/12/26/pr剪辑学习/index.html","f5f44a691aa5cb91c91aa1a8ed7d23a7"],["/2022/12/27/css中的flex和grid布局/index.html","387dc2e0996aafb233e4d01487d59b4e"],["/2022/12/28/Flutter学习/index.html","c6c5d4a6448eb93e9996d29f06107bd4"],["/2023/01/01/美化github首页/index.html","5bec4385bd15752400c43abfe90d402c"],["/about/index.html","877bbb3b310024d267529b520e0b7588"],["/archives/2021/04/index.html","b70897a92d41325ce73b7ce3c14bfd65"],["/archives/2021/05/index.html","08353467783c8b4f72c4976ef4131676"],["/archives/2021/06/index.html","fcc4729ca22e897dabfa850a3f3ac35d"],["/archives/2021/07/index.html","6d7266edf34a34c4206987f0f47c7443"],["/archives/2021/08/index.html","b2f510fc60ea21e20e6dc4170b304679"],["/archives/2021/09/index.html","fccca92ca472c55091617e7f0c00df45"],["/archives/2021/10/index.html","60a71e05d8ab60646f85a74699cd0e9a"],["/archives/2021/11/index.html","9bab6180fa91e46ff5ed3a72badb5a11"],["/archives/2021/12/index.html","dd4f38747d63287a0fd3badb740aacec"],["/archives/2021/index.html","f8527797b7f0dd8c16357b2f97e0629b"],["/archives/2022/01/index.html","17585c8c34be94b7cdf2c34beec3dbc8"],["/archives/2022/02/index.html","32bbb7aa086ff1fd49b98833a0bf7d3c"],["/archives/2022/03/index.html","e3e4b3e7060decf012dc6c0cb8fcd229"],["/archives/2022/04/index.html","c0a03d7bded23aaede375275c9ca83ec"],["/archives/2022/05/index.html","fd4e68c59886444111652dd8fa83cf1d"],["/archives/2022/06/index.html","3cd8576035fbbd540983d18042a8664e"],["/archives/2022/07/index.html","244776528596b0a64db8dd3c661b0d98"],["/archives/2022/09/index.html","36edc6fe0062432c9f0b1e82002e22bb"],["/archives/2022/10/index.html","6a533383cb839a02d1cebde9a3977b62"],["/archives/2022/11/index.html","39c4b0d284cf4ec7f7835b0da9f6615c"],["/archives/2022/12/index.html","a7ebce9e79106120135a3f6509380cf0"],["/archives/2022/index.html","2094cd08b4c770d05cafb0afed58a31e"],["/archives/2023/01/index.html","03700766057dae1e69fbffc24e1ab2ef"],["/archives/2023/index.html","9d3f6ffcb726cb0e641a93749c4c6c6c"],["/archives/index.html","a8bd7a65d46c4abfcfb41ef8012fc0c3"],["/archives/page/2/index.html","34654e93b028dc386287a768f0b038a2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","6df32bb0e4ce3e4a020a8cf41af94f24"],["/categories/ML/index.html","bdcf6fb7c0ed0c43b3582730367f545a"],["/categories/Nginx/index.html","d8fe683876052fd6c22e2b2f738d912d"],["/categories/Spring/index.html","eae5a0779ae064ea96bfb14778c7e3b1"],["/categories/course/index.html","909ed2f0b714ca697621005a723fa52c"],["/categories/django/index.html","379bf0c791be6e456a7516f699680fda"],["/categories/fun/index.html","a0a476e9ba8ff5e12edbd8d72b49f2d4"],["/categories/gcc/gdb/index.html","0a95c0ba24594874ba84b95a1738b47a"],["/categories/gcc/index.html","c888dd48428b5035be4f0a564c15c9bd"],["/categories/index.html","ca8ecb9da199bd753fe52566ee15316c"],["/categories/java/index.html","274b98e35e0daf4671ced8262d224a6a"],["/categories/python/index.html","6cfdedb66b36258c0b389e3b073a84cd"],["/categories/study/index.html","a530f3b673a4a623caa0f55628cc0392"],["/categories/vue/index.html","3689b83b9c6edd1159c8b0590b017b28"],["/categories/误区/index.html","2f78606f819f010a57154326fa953a9a"],["/commonweal/index.html","e3c0fc8a355cf4d06d9afb8ce84164cd"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","df7a5c4f6c567574a8330f66eaaba29d"],["/home/index.html","1b81b1c974b2985feac3e86056139707"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","27488338e811a8dc0a8e0ba8cb084545"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","7c23f7ebabbdb6c812e4bdc4e773382a"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","b331c3b26fa846bc427f9d742de09acb"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3499d9d30e04b08fa5a8522a0ba23aa8"],["/page/11/index.html","c2decef6b0824471c2912637be21e94f"],["/page/12/index.html","3397e6da02e34658f26a8e3381d39aa2"],["/page/13/index.html","90ee713485fd761214d97cdfe30949fd"],["/page/14/index.html","001e69d064ba73a2a31d11e8ef3751da"],["/page/15/index.html","2245f984d13a87a7b1837b9007b2bd6f"],["/page/16/index.html","3ced7362466745f5abe0c4f207c38239"],["/page/17/index.html","8b7913338b2b027f1c5493618f30f6d5"],["/page/18/index.html","0fa7c3c95af269f454a8da814887bf06"],["/page/19/index.html","7a8846881ca564e3ae3fe35ea77917af"],["/page/2/index.html","483ae8a3956050c5a723dd361b21f62e"],["/page/3/index.html","b4a67ea1fac5bdb08cde1ba0bc62ebc3"],["/page/4/index.html","e2ab6af4f684fd911ea38053b312612c"],["/page/5/index.html","1c536ade7711c19b958d17ccb2c12fea"],["/page/6/index.html","95a2149824eab09b34890f34142f453e"],["/page/7/index.html","9f88321a3386a8a071387c33b9aa66df"],["/page/8/index.html","510682e44c6ddb0ad6e7ca40b727313e"],["/page/9/index.html","1c21a8d5c41356251579c1059f2eef68"],["/resume/index.html","bc2e02428924fac5d2d98ddee64d7428"],["/schedule/index.html","e0e246a356c138241cdef81f2ab478c0"],["/sitemap/index.html","afdd12229429635210e05da47f57f2a9"],["/sw-register.js","47361c35ff3a66be368bd1e0eb6ea84a"],["/tags/AI/index.html","c63f8d3ef21c383ffa1e38609982bd4c"],["/tags/BT/index.html","8e74e66a90ff75b7252f99372980c6a8"],["/tags/BaiduNetdisk/index.html","531cff67eec6df035ad1f19231bf7791"],["/tags/CSS3/index.html","31692e1595939bd03e5fdc09f11f1acb"],["/tags/Electron/index.html","39c160164a355960d17e73d1c1b75d86"],["/tags/ElementUI/index.html","0ccfe93453d50055085e8485a457cd36"],["/tags/Flutter/index.html","e64a231324f3ea82d2d3ff38028f559f"],["/tags/GAN/index.html","b8b850213cf23311da22740d5d445c09"],["/tags/GUI/index.html","ce34a6898348b0624245b526eab342cd"],["/tags/Git/index.html","70015768f9c9bb2ad55fa1bacf5c1a40"],["/tags/JavaScript/index.html","6c0c1e96b966a2528357a582f250327a"],["/tags/Keras/index.html","e7421e471c26f0b32b18d0a09cba3071"],["/tags/Linux/index.html","d416bd4a7dac30b934ea93b794364c1b"],["/tags/ML/index.html","12d6a8775aa15bfed46c258f8898f170"],["/tags/NLP学习/index.html","4ceb3a7acaea5f228efea2dfd6fae2a8"],["/tags/Nginx/index.html","0e920c6293db37cccdb905ec2be1ce82"],["/tags/Obsidian/index.html","e44c456095ae5148f0d9227d1300418e"],["/tags/Qt/index.html","bb517831e163c52e57a7b76f5548d7c3"],["/tags/RSS/index.html","3b7bf69cc22c180542e1c551f0cd1fa8"],["/tags/SSL/index.html","333a2bfd358de95852ffece94d9d2479"],["/tags/Scrapy/index.html","382c514b5ceaea1a3eec64c011b37e0e"],["/tags/Web/index.html","0796417f02726338cc4504523462eb1f"],["/tags/algorithm/index.html","9d236118485f44a0376f3e4ad2477ea0"],["/tags/bison/index.html","910fbe771f0c4a38a2a732acab55e99d"],["/tags/bomb-lab/index.html","d3d373d79ac502595f11d0a992b0f8b1"],["/tags/c/index.html","73e17a6ff4a89ac896dd59fc64cf98a8"],["/tags/cheerio/index.html","ef8e1358deaba534431a33a70c3cf8ff"],["/tags/codewars/index.html","5575d5a668050a4b3316e58540c95a9d"],["/tags/compile/index.html","104a691f5be322ba48efce78e6b0fecb"],["/tags/compiler/index.html","8b47ccce245e32e7651f7234f3a200aa"],["/tags/course/index.html","39e83f93342817aa08e48de51e4004d3"],["/tags/crypto/index.html","8d12a447d0cae6f6efb288d6593c9a21"],["/tags/csapp/index.html","e4814fa8a165e6b9aaf67a3567e3b794"],["/tags/css/index.html","9a94ee6e600c1d3666af9f28e721a125"],["/tags/data-structure/index.html","f7460e17b5c875893b01fb470cfb777a"],["/tags/database/index.html","0508ec93f1c641017f673ffc7e3b0211"],["/tags/deep-learning/index.html","bdad7b7c44f93ca3b4cbae86eb639163"],["/tags/django/index.html","7e0166b8bee97fba186475d843f08761"],["/tags/dwm/index.html","cdc0956f26464fcd4a16b2b69565193a"],["/tags/exercise/index.html","855f1e28bebdaa78318d3df519dd772b"],["/tags/flask/index.html","e854202bf02ae0529a3a3e0a5a98d787"],["/tags/flex/index.html","c6228f0c1a0b22b94cde9e78f455f846"],["/tags/front/index.html","1415be33771c06348651c5307acc4340"],["/tags/gcc/index.html","c466a434647a9f847dc70d89bc39a825"],["/tags/gdb/index.html","991bdc2e2b3b31b7dffd7e30cb3c62ae"],["/tags/github-profile/index.html","797a69addce46c2761da50e828760333"],["/tags/github/index.html","596de3b9eef898f15d84727d98e7d060"],["/tags/graphviz/index.html","68c759b7bec9f370a5b9ab7433d96f6d"],["/tags/grid/index.html","c09ba17e54edce1d7c4d8e93c68e8b27"],["/tags/html/index.html","8e01347aa186394cb13c19bb89aee50e"],["/tags/i3wm/index.html","673090cebc4fdefebd484608bc53bc70"],["/tags/index.html","a734f21e55dd0a749656534266503ebf"],["/tags/issue/index.html","26a996756bd8fcd9f06dd8e292a7d480"],["/tags/jQuery/index.html","93cf561937153d02c48030dfbcf04ec1"],["/tags/java/index.html","27e971fc6d5a5152739b0573b987ebd3"],["/tags/js/index.html","79a517f2c1b95b3c1f5a89003bec605d"],["/tags/latex/index.html","1f1d04c6d1e7446bc45d573d4a3956b0"],["/tags/leetcode/index.html","be39b9b9c4f49567318cd2ff55fa7e1f"],["/tags/lex/index.html","571f9bd58be307727caf068c47960dbe"],["/tags/material/index.html","88d235fd5f73c46522ef757622289bfc"],["/tags/music-player/index.html","214853e78c9488498fc1029a032f16c0"],["/tags/nodejs/index.html","456ec17d6d2926a21f58439e4b52ffb7"],["/tags/noj/index.html","1e88a73b5b679e4aa693793073d0ea3d"],["/tags/opencv/index.html","7020311a2a1c7cbeed2e022b7250ee16"],["/tags/overleaf/index.html","2745862356c3896604f01cfcde14a316"],["/tags/pandas/index.html","6594e39cbb64b474e8a8f3a6bba65d23"],["/tags/premiere-pro/index.html","088289aec803b4a5bb405bef151bd370"],["/tags/proxy/index.html","56655faaf5fc2a1322fba72c8eaad71d"],["/tags/pygame/index.html","648a04e3cd65aa1f11516d2858813693"],["/tags/python/index.html","eae2f1e12a2bd905e08c78166e6c4a89"],["/tags/pytorch/index.html","768741aa0f22bf3245e355ab30931fb1"],["/tags/reading/index.html","3a1e6cb4215a4c460eedc0249478d7bd"],["/tags/requests/index.html","1e48f1c71aa303fa89eb331e7ae514e7"],["/tags/security/index.html","da7bfb632367e72f483b366a3661dc5e"],["/tags/shell/index.html","76887bc9b59fb87a38250c6f5e580e0f"],["/tags/sign-in/index.html","e2c0c2f66b3f8f5c62ebb43b8ce65111"],["/tags/socket/index.html","3f14b5c036a97c74e1201c0e2817f0ff"],["/tags/spider/index.html","d02f861cced3fe654016c181abfd8af6"],["/tags/splash/index.html","3fc0e1f228f3675bae041dfb5b97dff5"],["/tags/superagent/index.html","0a117932b319193fe550de8ef22c179f"],["/tags/tensorlow/index.html","cd1c93fd69fb621da55e11623c465d2b"],["/tags/tex/index.html","72ac99b0ea1b93011ca0dd46f8eb821b"],["/tags/threading/index.html","7ffed24dc53aceb81d493deb4a3dee57"],["/tags/tkinter/index.html","45e74e7809b38a8b3a16e38496223af6"],["/tags/torrent/index.html","91007bd41b9d7997ba078028a3db2ab2"],["/tags/tutorial/index.html","ae9611eeb3af160e6d7964ddf7f8ab76"],["/tags/typora/index.html","a7511ef0880148f17ae5b1384ba2baca"],["/tags/uniapp/index.html","b7c30de4ff889dec37226fcb8469b0b9"],["/tags/vue-element-template/index.html","597340b9ca77b75747277361ec632636"],["/tags/vue/index.html","beeeeb293162e8fe2121f8ee98ec305c"],["/tags/vue2/index.html","81385e8d2e4e6de35ab827476845a426"],["/tags/vue3-x/index.html","07162ee4d8616c5822b9effdb0f3534f"],["/tags/wechat/index.html","b513f36d3ddd5f7728d830992c86d9da"],["/tags/wm/index.html","8af019815e5ec1d30a2849292e8c29b4"],["/tags/wordpress/index.html","c4442c3213737302fcb9fe3c07bcd6f8"],["/tags/workflow/index.html","c95000afbfff66e3023f9be20448d33d"],["/tags/yacc/index.html","6a9f3c657bca89f6962eaf66c8b8bcc2"],["/tags/zsh/index.html","523a1d50aa42c475725884840b413890"],["/tags/七牛云/index.html","7c7bc411c89525b9f2a8a362198d899c"],["/tags/函数/index.html","844e00b2e846c4f7fd3e067cfc8ee797"],["/tags/剪辑/index.html","8859a828d01fc2e6fa2046308e720fa7"],["/tags/存储/index.html","5b07bdd09f31c9e8af55c8bdf8e28be0"],["/tags/实战/index.html","17bc71c86b38dc0826cff010e2eea604"],["/tags/建站/index.html","cf48c90224a5ff71bca6f816bd1b2440"],["/tags/微信小程序/index.html","d7879930714be187336ac555652640eb"],["/tags/指针/index.html","db8e61b1327df7cf9e038d18dbe2c947"],["/tags/汇编/index.html","0cf227488d7381ded68160a9433e318b"],["/tags/爬虫/index.html","6ab74bb918fab979f19c7bbf984bafca"],["/tags/算法/index.html","56e2489a105437571eefe66b3fea7f08"],["/tags/编译原理/index.html","f56f8b0bdbedae99853b157007ca5d76"],["/tags/获取地理位置/index.html","3dc5e463342fddb3aaca50fabd849fe2"]];
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
