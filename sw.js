/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","f38b6e2ccab6c4a5a9beec15656f2dd7"],["/2021/04/20/稀疏矩阵/index.html","6799389ca4cd8906a5929761f04a99e3"],["/2021/04/23/广义表简介/index.html","f9dc90b02f14c2ad935176b2e4ba6adc"],["/2021/04/29/关于指针和函数/index.html","dd1acf84cb1fd907107063c7f7950feb"],["/2021/05/10/哈夫曼编-译码/index.html","e40ab739468f0912660d5fd09467e678"],["/2021/05/17/数据结构noj_2/index.html","010abf02d371d8a3cc86e22eafce7613"],["/2021/05/30/数据结构试验/index.html","c6bdfeab9951db3bd53a03597fe36f3f"],["/2021/06/12/数据结构noj-3/index.html","efafd8be06bf7a927264ae5f1f07d367"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","8f3801980d1d244466a912462ac36fec"],["/2021/07/08/课程资源分享/index.html","f5bbf86275898f342692188d6310ee28"],["/2021/07/20/Scrapy-下载图片-文件/index.html","702abb4b96348465317b78991a5a8b47"],["/2021/07/21/Scrapy-动态网页爬取/index.html","86625a7fca8a8765e2b2c10969b74e51"],["/2021/07/21/疫情打卡/index.html","b5a51044520d7f61ca0089e2726cc698"],["/2021/07/29/Scrapy代理设置/index.html","7dc81c22aa7d554621ed8cb82f76a468"],["/2021/07/29/数据库认识/index.html","e4e2c8aec34eb8ede59df63c4b4812a6"],["/2021/07/31/Python多线程学习/index.html","c1a458a06978c249a5f3ede7cd6a868d"],["/2021/07/31/tkinter-requests练习/index.html","a3af67f2ce57c485505c41b2b56efa0b"],["/2021/08/10/Git学习/index.html","26f07bc82828dc761c97b9cefbc68fd3"],["/2021/08/15/pygame实践-1/index.html","21fecbde44c0671409328bec2b950ad5"],["/2021/09/06/微信小程序开发/index.html","573463bd51952b6d38926225102ae97b"],["/2021/09/21/命令集-1/index.html","8666131bba6495ce9124a677fe562f60"],["/2021/09/21/命令集-2/index.html","9872863e6978a6dd8661806c958dbbdf"],["/2021/09/21/命令集-3/index.html","e655e58038dfb1db58b6a447abb97a25"],["/2021/09/21/命令集-4/index.html","b09e717f2692a40868b76985d2dccd14"],["/2021/10/03/socket学习/index.html","660018050cdb13f84314467ef6743d7b"],["/2021/10/10/dwm入门/index.html","4d210553fe700fbde59873cdddd4a53f"],["/2021/10/10/安装ohmyzsh并配置/index.html","ece1608e27a84568c411b0aac3142472"],["/2021/10/20/css学习/index.html","561ddf108d019dd07ca9078c7ab1525f"],["/2021/10/20/wm入坑/index.html","7c193c410efe2880768d7aaf146f4034"],["/2021/11/03/微信小程序学习/index.html","f2740ff71753c7dd9de8631a2f5af080"],["/2021/11/04/css揭秘/index.html","6bb142301d371cfa3b706c2bd81b5ccd"],["/2021/11/05/css-练习/index.html","cbaf63a51bc8eeb00295693f88e1c897"],["/2021/11/21/命令集-5/index.html","53320711e30b0baada6ffc8519f81051"],["/2021/11/21/命令集-6/index.html","615a716b0b6d106cdf9d148b06764ed5"],["/2021/11/21/命令集-7/index.html","afb10f1e8b08f8d17939737890e1c322"],["/2021/12/01/搭建wordpress/index.html","02a8428ec3da0dafba921df1e7254390"],["/2021/12/08/python操作百度网盘/index.html","e3cf777b1a097000f1099ba5f8d61f68"],["/2021/12/14/js爬虫/index.html","e47897fb6b3f9b6cfae52bcf6681341e"],["/2021/12/25/为网站申请ssl证书/index.html","004489d4ff81282f86c6e1cacbf20cc3"],["/2021/12/29/使用七牛云为网站提供服务/index.html","208fe4a6417b0092191362e3c1ffbfb3"],["/2021/12/30/jQurey继续学习/index.html","7d2e0a4acf277282d9f7bb84c8cce3c8"],["/2021/12/30/jquery学习/index.html","aed04b8e323f6400776fa4137d87ec04"],["/2021/12/31/vue学习/index.html","7bd0d9da2b35ab43214dbd462136ceba"],["/2022/01/02/疫情自动打卡/index.html","2ce8e97c29c57656ae3b52201c7e69f9"],["/2022/01/03/javaweb初体验/index.html","9689aa04ff84416de13ef11bcb7201cf"],["/2022/01/04/codewars练习/index.html","2d1ffca8d1de3cb5f74139a16a56442e"],["/2022/01/05/Spring学习/index.html","036ed6eec3549869895acc938182132c"],["/2022/01/05/vue实战/index.html","8e684cf19fc6a5901bbde2b3162e4195"],["/2022/01/08/gdb-gcc学习/index.html","fbb0f80fcd70193d32a2553f7a4b197e"],["/2022/01/11/python-opencv学习/index.html","b11150a8cbc146ceb66db3143ffaa805"],["/2022/01/12/汇编实战/index.html","c7c0f087506c5d7cdb5c53466ba51911"],["/2022/01/17/pandas学习/index.html","a54d0136cf9a59694e301828f8ea12cd"],["/2022/01/19/可视化图的工具/index.html","ceca02181482ce9a5f0214541c637963"],["/2022/01/19/机器学习入门/index.html","767ac08c38d73687a2b987112128694e"],["/2022/01/20/cousera-ML学习/index.html","b6988b6562e78c58e19fdf28c8521d44"],["/2022/01/30/typora解绑后出现问题/index.html","df91bc78700b653947b95714c144643a"],["/2022/02/03/NLP学习/index.html","33505d772257b1eb2b4c235eb241ec32"],["/2022/02/04/Web漏洞学习/index.html","9edbdcede537d653b9cc985ac953a9db"],["/2022/02/04/pyqt学习/index.html","3ee6081138868772b2c740af37421a46"],["/2022/02/04/python爬虫/index.html","4766b0a05931ee445d34002cb8db8afc"],["/2022/02/18/Electron学习/index.html","143a4719b73b95ca3f3c8c1f35ab0e4c"],["/2022/02/22/疫情填报字段解析/index.html","9c0c0dba9274464617f0bd93ae260230"],["/2022/02/24/Bomb-lab实验/index.html","1538fed96983fefc88b91200bfb4b00e"],["/2022/03/05/nginx学习/index.html","b3e995861b9455a01b601f60352bbdc5"],["/2022/03/09/汇编原理课程学习/index.html","122286c3c1fce8743dbd112e9e7dd643"],["/2022/03/11/Keras学习/index.html","74f494766b8ea0a0d78e2bb5c6ee7927"],["/2022/04/01/graphviz学习/index.html","4afc7afd2aff2dd4bf2beb1a740db9a2"],["/2022/04/07/django学习/index.html","fdb3b4eb0d4b15d2ef15e9588cc34799"],["/2022/04/11/密码破解学习/index.html","a89980fff31fd0d78c6ba0b0d6ab636f"],["/2022/04/12/flex-bison学习/index.html","40b7489d127eaac021fcc76e02a455be"],["/2022/04/15/pytorch学习/index.html","f52c75472218cdfe0af0df41391a0520"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","7652eadd52775a39fac5f4b132ad20af"],["/2022/04/23/写一个音乐播放器/index.html","cea7dcd86a20ddae612726d0219aa4d1"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","3c5166f95ef5550ce7db2d02d3fa85d5"],["/2022/04/30/GAN学习/index.html","751c1793b01d00499a0d77687f34bcfd"],["/2022/05/02/html精学/index.html","ad300bf1d86645a22d193aea9f952334"],["/2022/05/06/write-a-compiler-by-yourself/index.html","9596566dfb0fed28b17815aa333d2ae2"],["/2022/05/30/acwj-01/index.html","72343f83a93b73dfa09807274fb3252f"],["/about/index.html","5b2140264dca9c79904a1ee65a76e55d"],["/archives/2021/04/index.html","14e87ead7b6ac09f584feab23e7c8924"],["/archives/2021/05/index.html","d8a75bc61c02d842064315f032dc3c17"],["/archives/2021/06/index.html","5a73ed9adfe7f0057c6cef461e01c0fe"],["/archives/2021/07/index.html","ef1d40ba8a86e0d1f848916f4a10ae5b"],["/archives/2021/08/index.html","138df2f95fb014ed8a9edf245e601855"],["/archives/2021/09/index.html","41a5250120dc4cdf78d0ee505a2c09be"],["/archives/2021/10/index.html","9b5b3061acb8530746a8b991c208de85"],["/archives/2021/11/index.html","08644cc375d8716b565713bc9fa4c29c"],["/archives/2021/12/index.html","ccc968ce5eefc20de572228bc34f00c7"],["/archives/2021/index.html","e0c0c3c4773b677bb8dc2be01b5c0aee"],["/archives/2022/01/index.html","c98f7914d87ead3ad8244770f21b7b1d"],["/archives/2022/02/index.html","4106bba3e46e70eb79b8d3d3c10e044f"],["/archives/2022/03/index.html","a2a2e2baf66c9c2c4f895f1e412a2776"],["/archives/2022/04/index.html","df900353d3e719644b0cd051ba0b9b21"],["/archives/2022/05/index.html","8cdc3459610b1f8d4be700f264ae2482"],["/archives/2022/index.html","0d0b27313162e05b8f57c6a58fb1958c"],["/archives/index.html","8b7e4e956dcacb7744462f51bd8075ea"],["/archives/page/2/index.html","ac2a765a3b3c99f7fc671a7e2d1b1f86"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","82d81e88e1c2eeaee55e672eb00a603a"],["/categories/ML/index.html","83fc8f51adbf6f077c4247d4a3f6969c"],["/categories/Nginx/index.html","03a46f006c4c2d7cf801784b18bfdea5"],["/categories/Spring/index.html","55f34df0523ddd164acaf01e467e4c94"],["/categories/course/index.html","5e060d76e1dc3b3786ffb07a2da2ef9a"],["/categories/django/index.html","c2025134db1a42ecf12f8cf58ec8ba97"],["/categories/fun/index.html","d090ff677d9fa4a5e33e3367e334c009"],["/categories/gcc/gdb/index.html","436d32de2b3a814bb3d34a64a2ac501a"],["/categories/gcc/index.html","0ef75a0eac8d2523afebdacc93eadcce"],["/categories/index.html","9f6cf9336667d3378d9090fc2044e808"],["/categories/java/index.html","c51d8fa4bf7c3e62001b3676435bff1e"],["/categories/python/index.html","cfdd80ec5cb46a8b5ce6ad27ae1000b6"],["/categories/study/index.html","bc95f25fe9ad1a015b00a8cfb199d1e8"],["/categories/vue/index.html","e139a8d1b14fa214950c3af09f26363a"],["/categories/误区/index.html","7442fb20ca8e1c600875e6631d4a49f2"],["/commonweal/index.html","8393960b547dc4da9cc0e8e22027c8e7"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9e07953939f2ff73e6f4c7b45e1b5d5b"],["/home/index.html","7af7f505b5a94711ae12da59c6a63d79"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","2b0daf09fa9f9f3f489d3251160408ed"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","5272c2dcfebca2b5ad751deac51f9f83"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","22013139d2a4f237d3554389ff77e2c6"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","f11d9bdb1768255cacbecda660a46b5c"],["/page/11/index.html","c88662de93bb9d28d92af36e015c5e5d"],["/page/12/index.html","f0e574057a0751eca0c5e38b904750c5"],["/page/13/index.html","346a8d554ccd060637b5a4aa20695e40"],["/page/14/index.html","e55a26e83e87c93ab91d7f988d7c4486"],["/page/15/index.html","8f1ba2b1b665b69e90775450114c2901"],["/page/16/index.html","0ecd1beca6461feeb50f76bfc131f924"],["/page/2/index.html","2e630f24a0136632c4b30068a10e48d2"],["/page/3/index.html","9b82c55e6a26d6d59b95a84fa28ed6ee"],["/page/4/index.html","9300f553855e87e11d28567e5b367710"],["/page/5/index.html","ab758888b9d7a739b9bc6a02fab8ef52"],["/page/6/index.html","c17ff243206065bb44545ee4575bc611"],["/page/7/index.html","a4bd846522b37f56f7a93655f1c36a9c"],["/page/8/index.html","a14e4f08c6d46a8e8d03bc67f7e9bcf0"],["/page/9/index.html","7c0ed42847c48402e094a1965a080117"],["/schedule/index.html","c2da1fe39c92f3beb878baad56cc71fd"],["/sitemap/index.html","54f493c62c090c43fb29fb14914b0723"],["/sw-register.js","f0749f0376ac17dc64ee7f313f1585f6"],["/tags/AI/index.html","777eb47521d8ef3affad85d5a4f32e1f"],["/tags/BaiduNetdisk/index.html","1d79d68e0ca9d621e91eef83abad37d3"],["/tags/CSS3/index.html","363690e6c5877f7148456a97326ceabf"],["/tags/Electron/index.html","ed1c625bd05a0130af252bcd14ac4d63"],["/tags/ElementUI/index.html","cc75671fcf8f59054da6a1b3f8227b32"],["/tags/GAN/index.html","7b9a35c67ac2afd0beb034bd4f9c61b6"],["/tags/GUI/index.html","9e93d15388841171e529cc0feb7e0f61"],["/tags/Git/index.html","42a6d42156922c260eb06b2f2f81da99"],["/tags/JavaScript/index.html","581d7e04da4fec21b034048a732e3b83"],["/tags/Keras/index.html","d875532a4a32b05d477aca966a9ea000"],["/tags/Linux/index.html","7504747b8864f6f70555918faf094dfd"],["/tags/ML/index.html","4aae46eb029d348d5131dbecba5bbc9d"],["/tags/NLP学习/index.html","d716d69aa9b9ca11b510c19504fbcf97"],["/tags/Nginx/index.html","f1b599762a40ffe0e8a6d02c6e1842d0"],["/tags/Qt/index.html","315a6cb4c5fba14d22a76a4fa82c6349"],["/tags/SSL/index.html","5edd333dcedeb6761cab3d9ee5c1023f"],["/tags/Scrapy/index.html","1fe1726851aae374b4271db50f7f58d7"],["/tags/Web/index.html","65327571fc5eee325ef6b8d39bd0fca9"],["/tags/bison/index.html","7d3d2385ae3bc4d91694b0f564edfec0"],["/tags/bomb-lab/index.html","2d704a8a70e9e2da33ca735ed4119d9c"],["/tags/c/index.html","2776a2b8f871f93e1d57b719e0387763"],["/tags/cheerio/index.html","85b7ea9c1c99293a8374cb8ca32afb33"],["/tags/codewars/index.html","536c91e13d2a661ef42775598fe3c962"],["/tags/compile/index.html","8bfde86f080273257b37322d0abcd53b"],["/tags/compiler/index.html","b158ad91705a7fa0ff02d931134b5bda"],["/tags/course/index.html","b1ec5f9f358853faec68fe50a8ad4d6e"],["/tags/crypto/index.html","ee2fd7262dc53f04e77be9dee797c760"],["/tags/csapp/index.html","db8d36cafa96490de1b72b6a5db4301f"],["/tags/css/index.html","1b0d89e03e20455e3532e9c994384fc6"],["/tags/data-structure/index.html","1a84aef9233150435bfcdce16cada98c"],["/tags/database/index.html","971af45f76276457d3946ebc3c42bbd0"],["/tags/deep-learning/index.html","d7968a79081c308451a91867df5d17a0"],["/tags/django/index.html","97076dbe7d73041c551ba9728b8f731d"],["/tags/dwm/index.html","e6dff5c3878b1b5f18f73f910a0c8283"],["/tags/exercise/index.html","5ddc37a45466ebd286212d9052f304d8"],["/tags/flex/index.html","cf150e9d7b60255bfc6e97cd77a6a861"],["/tags/front/index.html","a009a3fcb96e298656fa44cf6bd0b7eb"],["/tags/gcc/index.html","e95c27a6ba6c787db4fb0f4d2c54c749"],["/tags/gdb/index.html","0e65b23372d267b10f7f6ff70639ba7d"],["/tags/graphviz/index.html","593d6e7ef8e37bde114086b66659dfa5"],["/tags/html/index.html","ba04026ed7e31c6feccb9149ad46a62d"],["/tags/i3wm/index.html","ebb973e77a4a6f022a7a602310a9d3df"],["/tags/index.html","567c45bdddfa2c1cd42318a4be3a71e5"],["/tags/issue/index.html","970d50797e4ec3621d963db963e2f2dc"],["/tags/jQuery/index.html","cc2ed85be4d43d47f148f5501bc524e0"],["/tags/java/index.html","2bc2dae1b7d16d64d5daf8b9f6771d42"],["/tags/js/index.html","5086d88632d89b5eeb3855ae3d743130"],["/tags/lex/index.html","4a41fc79d0b0ec134d2693a6df129224"],["/tags/material/index.html","4311222ec3975ef3209f711a629c34de"],["/tags/music-player/index.html","ed73320e3ea05c54f2016e66221f7846"],["/tags/nodejs/index.html","f7b8b440dae37b84a70648eed3efc503"],["/tags/noj/index.html","aec235141955629ebd511acf7d2ae8dd"],["/tags/opencv/index.html","78b13c6cca5579dbbd78ecb5ec4b077e"],["/tags/pandas/index.html","17d3b9d4a922e2376f6fd5aee2eef6a1"],["/tags/proxy/index.html","22954d43c085382dba1a36e7c2be10bd"],["/tags/pygame/index.html","094b74e4a53945b2224841399b9c23b8"],["/tags/python/index.html","fde9a02ed056210fb28f12cbe576eeb1"],["/tags/pytorch/index.html","477f39610f49ef7570b9ba0f2fec9f8f"],["/tags/reading/index.html","faa0e8219f73e0881ae972adbf07df8a"],["/tags/requests/index.html","09f0e824268f4cde1d0750da077c3fc7"],["/tags/security/index.html","c17cf620dc3a3ce59d9f04ab969b1c59"],["/tags/shell/index.html","3cb06209ffd176e9f190666d011b9867"],["/tags/sign-in/index.html","d8d025214621fb22a86ea4902b2193ef"],["/tags/socket/index.html","704d5352c78e4b318e941097aa824b83"],["/tags/spider/index.html","dc79ed443d6dda6947bda5efff888391"],["/tags/splash/index.html","925e70e63b30cf2d493c74317ece4c1b"],["/tags/superagent/index.html","40caf7cabb7905c87d2bf8dde8e78d7b"],["/tags/tensorlow/index.html","b15e66767e1cb044f19ab5776d585195"],["/tags/threading/index.html","dda60c95c411f7316428974d9e52608b"],["/tags/tkinter/index.html","fc4950ddd122f0f503282ac6a3113085"],["/tags/tutorial/index.html","8a319fc7163552239225f375acd1a806"],["/tags/typora/index.html","306d874cdb9d0712e4df8c1c0b9824b8"],["/tags/vue2/index.html","d1eb36988e242020ae4cbe97ba94ea88"],["/tags/vue3-x/index.html","2f2c5213c55ca65924c0fdde9b2f9bdc"],["/tags/wechat/index.html","0ecbc176f794a9b61385fb8f7a70b512"],["/tags/wm/index.html","35419a40bfba89b4ca65c543082392c7"],["/tags/wordpress/index.html","969438b2ef4174ce238aa4b0f4210237"],["/tags/yacc/index.html","9c418d7a7e471373ad42eb5d4f3f4152"],["/tags/zsh/index.html","cb3a49784013175fc652b2b1a32f767e"],["/tags/七牛云/index.html","e1d29035c1eec34cddea447e290e3b60"],["/tags/函数/index.html","9571e2610952cc4d0da060d33fe06607"],["/tags/存储/index.html","f60c70fc2fed2a3b348aa8c3335099b7"],["/tags/实战/index.html","59ea99383c28439167e63cad465983c9"],["/tags/建站/index.html","f69f01df57f5ae23110a5b3f768a5e6d"],["/tags/指针/index.html","625bd4f4acc9a787296b0d5f1df33c2c"],["/tags/汇编/index.html","6c365091de7af94c7e3c34c856bdfdce"],["/tags/爬虫/index.html","3c3f94164317fdd56bc3613c4255a176"],["/tags/编译原理/index.html","85c4b5c970fda1b61109604dad018714"]];
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
