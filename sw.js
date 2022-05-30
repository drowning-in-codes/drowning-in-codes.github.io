/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","dc638bfd66f46dd855c15f69b22cb91b"],["/2021/04/20/稀疏矩阵/index.html","c9cf579ad11df96881ed02eb36a5e06c"],["/2021/04/23/广义表简介/index.html","5fb49012d0d0a9b82641ff08c64af866"],["/2021/04/29/关于指针和函数/index.html","61d7959a988e15850dffb8a04cc26cf5"],["/2021/05/10/哈夫曼编-译码/index.html","33dfc8099d8d6fdf46f87257fc7259b2"],["/2021/05/17/数据结构noj_2/index.html","318aced044ff6d3ee26c65fdaf43c04b"],["/2021/05/30/数据结构试验/index.html","896ae93d1fd4605494a965f3efe7ba67"],["/2021/06/12/数据结构noj-3/index.html","16c669a573903e8126ea17c7134af6c1"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","30bb8d75e42f652a08f0e86206df3391"],["/2021/07/08/课程资源分享/index.html","f79f2caaf719e0f05acd1d61352adb4a"],["/2021/07/20/Scrapy-下载图片-文件/index.html","1caa18ef37aa0bd09c0514bce0e2c6ba"],["/2021/07/21/Scrapy-动态网页爬取/index.html","8c2bb86c41771736244209c8d012405e"],["/2021/07/21/疫情打卡/index.html","c97502671d770bd3c98387c5ff967d77"],["/2021/07/29/Scrapy代理设置/index.html","9e15ffed6a2433006bd1531222f6ce95"],["/2021/07/29/数据库认识/index.html","d8b9e8f091af29398546e18608bfb4f9"],["/2021/07/31/Python多线程学习/index.html","5030a27dfc33fcea91535f0cca7f3d4f"],["/2021/07/31/tkinter-requests练习/index.html","38808c50cfcd583d615c6a84cbdc7733"],["/2021/08/10/Git学习/index.html","b20638b8995bc1f17532dc5e5f20af52"],["/2021/08/15/pygame实践-1/index.html","2b1365dad33dc5fc80652fda803451fd"],["/2021/09/06/微信小程序开发/index.html","52de408ade02a0cfeb23a69b02303ad6"],["/2021/09/21/命令集-1/index.html","e904f5f248cc246a56f2e776cc239c3e"],["/2021/09/21/命令集-2/index.html","ce5d584e9d2b6313eedcd31f85f190fb"],["/2021/09/21/命令集-3/index.html","92509e8fc27e97ad7631ef1133c15cdd"],["/2021/09/21/命令集-4/index.html","de3da6910a1122f28d62f27ba8156849"],["/2021/10/03/socket学习/index.html","009168226e49301f5091f5fa7c774600"],["/2021/10/10/dwm入门/index.html","807728981437d90b78f2806e8bb5e85d"],["/2021/10/10/安装ohmyzsh并配置/index.html","fe911c65238db3eea5b7dcfc3721fcdd"],["/2021/10/20/css学习/index.html","f21c74c89dcf28cc32eb6060a148ab3d"],["/2021/10/20/wm入坑/index.html","06aa84af4e5b5405adf3cb1744a63742"],["/2021/11/03/微信小程序学习/index.html","e4537ee6eff572fbd1fd074efae92747"],["/2021/11/04/css揭秘/index.html","d7b1f42251f204c57f6dae27be9c6666"],["/2021/11/05/css-练习/index.html","8da40883a8eddbb79cc08b254bc376f8"],["/2021/11/21/命令集-5/index.html","5cca53d577aca57dccf7772cae2082e7"],["/2021/11/21/命令集-6/index.html","c60cb2397e535aa752f07e361934aa92"],["/2021/11/21/命令集-7/index.html","7c818e92d6ac590789173051c7eaa284"],["/2021/12/01/搭建wordpress/index.html","08fc96b3bdeb361022a053dc6c50d330"],["/2021/12/08/python操作百度网盘/index.html","1d0d247a93e18da5bb3486cf37d12af8"],["/2021/12/14/js爬虫/index.html","061ca174e9f98db2f1b28671168b58f5"],["/2021/12/25/为网站申请ssl证书/index.html","8f9c28f07ae8dff81b9b4b846e102752"],["/2021/12/29/使用七牛云为网站提供服务/index.html","295a6db68848e1da36eaa68cf57e1130"],["/2021/12/30/jQurey继续学习/index.html","b1666324e427e5b295b85a2470daba99"],["/2021/12/30/jquery学习/index.html","ac1a893a702119b4a2955eefd66a1d72"],["/2021/12/31/vue学习/index.html","f539422101571c07947fa4539d880f79"],["/2022/01/02/疫情自动打卡/index.html","09a21c48e361c52c1e19f3100a9ad1be"],["/2022/01/03/javaweb初体验/index.html","af1023ac3d23122320425f8cbe894a4c"],["/2022/01/04/codewars练习/index.html","b7058e4adba78d206f2f1a22dfc86f73"],["/2022/01/05/Spring学习/index.html","907a31526418dd216da56d0e090c57c6"],["/2022/01/05/vue实战/index.html","0b2af381b9ca917edf79da1e5500a51f"],["/2022/01/08/gdb-gcc学习/index.html","b4b3a836780108b0fb32fd9555f9b56c"],["/2022/01/11/python-opencv学习/index.html","d1a790889204303381be1f6b04adefed"],["/2022/01/12/汇编实战/index.html","6e3c8052b89d625f67fbc584e179eb30"],["/2022/01/17/pandas学习/index.html","266c133d306b9f68757a264d4daf79ae"],["/2022/01/19/可视化图的工具/index.html","abaac5447859e9e0293df3c4009f369e"],["/2022/01/19/机器学习入门/index.html","3389612e78a0bbdb18034b60815cf77c"],["/2022/01/20/cousera-ML学习/index.html","1127377827ff4752efd525b25186819a"],["/2022/01/30/typora解绑后出现问题/index.html","77eb16a24c44da5f02e3cf6a47bb3ae0"],["/2022/02/03/NLP学习/index.html","a649ca2cd4fb1159aa6817758c1b33d3"],["/2022/02/04/Web漏洞学习/index.html","77b4881d86767c1678d8f8f934b202a5"],["/2022/02/04/pyqt学习/index.html","cb20936a89900d357615723743f199c3"],["/2022/02/04/python爬虫/index.html","8604522e96032333104a522d119f0fc0"],["/2022/02/18/Electron学习/index.html","5242dc43298bf9ae92917a9c0004bc95"],["/2022/02/22/疫情填报字段解析/index.html","c0e950a1e0f80edd973e834934aff042"],["/2022/02/24/Bomb-lab实验/index.html","e8c916f5e714417fe181954cb34abbe5"],["/2022/03/05/nginx学习/index.html","6e6fa0e57933f74f36df05fd45045f0c"],["/2022/03/09/汇编原理课程学习/index.html","02e1edcaad3c54937e052617d4254bb2"],["/2022/03/11/Keras学习/index.html","75b0b68262fade901d410512b646d542"],["/2022/04/01/graphviz学习/index.html","c42409102c914775df29bb2ab8538433"],["/2022/04/07/django学习/index.html","f6a03655e2c16e0ff14c118eedb794b8"],["/2022/04/11/密码破解学习/index.html","ce77e5b519d7856f29c958338bf83b69"],["/2022/04/12/flex-bison学习/index.html","99b4afb463afb8651c558cf63f617ccb"],["/2022/04/15/pytorch学习/index.html","e492c72b046db2e14e6d667cf5d576e9"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","736481cd08b55a960d56e041dd34c22a"],["/2022/04/23/写一个音乐播放器/index.html","474158516654f6174fd8a06d12f409d0"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","12ad03bc0713d80a3c6f02243c67e2a6"],["/2022/04/30/GAN学习/index.html","cf2b699bd2f1533eff63dc4bcc6c4c69"],["/2022/05/02/html精学/index.html","ec6547f92bfcf36cfd550903831081a9"],["/2022/05/06/write-a-compiler-by-yourself/index.html","c896957b770897027fd1931d03153b60"],["/about/index.html","5e6a3754893103a7e90666cf3b931cfe"],["/archives/2021/04/index.html","90f3101707832f4e90d4bbc3e1f61948"],["/archives/2021/05/index.html","e105497ec0d68803290d18ca3d3daa8f"],["/archives/2021/06/index.html","00a88d163c14026710def3a19fee2e76"],["/archives/2021/07/index.html","a551f01072e3caa4b2c46ca3caebc5d3"],["/archives/2021/08/index.html","c662d3038123bd9d32121daff740c6e7"],["/archives/2021/09/index.html","6896c1aa6d65ac79097789f40ed63fc2"],["/archives/2021/10/index.html","de469f2e2023d156f90a5226814d98ba"],["/archives/2021/11/index.html","c4f3f0a8c05e641ca5fc273ef071860a"],["/archives/2021/12/index.html","4595ed9ac98c6dfe18a3deb6a7694955"],["/archives/2021/index.html","34eb5808e837afd17e894a8508672cc4"],["/archives/2022/01/index.html","47ec9027a1715e3972b2c0795db893d5"],["/archives/2022/02/index.html","eaee054b9ac97af491e24e12ecb3fe53"],["/archives/2022/03/index.html","d1fd5971303bc2bebd991cdd9d8e355a"],["/archives/2022/04/index.html","ba17f2f136670d157e13a411906b17ce"],["/archives/2022/05/index.html","84881b282109da22393d9e15faf4bf9a"],["/archives/2022/index.html","ec93215188674b0086c4c60e9e490d31"],["/archives/index.html","84b1846900cd71500c91d5cb91c05b79"],["/archives/page/2/index.html","571f1e06bdf981ea2db44ade323e0c8b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","255fae72e056750a859b120e1ca5dadb"],["/categories/ML/index.html","a7ac60004acc42950d6d39434dfba8af"],["/categories/Nginx/index.html","6072afa1289ae0a2d8eec5c924ac2769"],["/categories/Spring/index.html","2569e20857dd7252bb717b47cfa6c214"],["/categories/course/index.html","340134441a65f0fec186237b42d26cf4"],["/categories/django/index.html","91639054ab79fa3b5fdbecd6b56a08de"],["/categories/fun/index.html","012babb5370c4f168cc9fe821de907be"],["/categories/gcc/gdb/index.html","2cb4ad77961c9cc3a3cd86b157db421b"],["/categories/gcc/index.html","79ccdeca840c71f5d88addce995c61ae"],["/categories/index.html","64070c8f2385c783a4e82347ea5bb99a"],["/categories/java/index.html","8fa34897d09d3cb55d7cbac420d817d2"],["/categories/python/index.html","a906c4a316e0ecaca9a41260552be2b9"],["/categories/study/index.html","c88001c163f753683c80429505cffbd3"],["/categories/vue/index.html","0de3a5e3d3d2246c237a2be418b3fb9f"],["/categories/误区/index.html","17a28df1aa8ca2adf8cc81620ee33d04"],["/commonweal/index.html","361e723a12bdbf0714fcf7934628f8ba"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9e07953939f2ff73e6f4c7b45e1b5d5b"],["/home/index.html","2ff4c9389d4091fc23e50ab8e21293f1"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","49e2941733e73ea4f4108cf47f3b04be"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","fa06a980ae9a2bc3a4def09745e04c06"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f9a5b021c4d8f8e7a02239c85a16c250"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","0b8186c60fdf69c4c56e770e4857b36a"],["/page/11/index.html","a2ac90b6ee82310ff51079feea92070c"],["/page/12/index.html","b8dc4e74fb3dd84a806b8914152f1817"],["/page/13/index.html","3c829d19e72470757c921f5d27725060"],["/page/14/index.html","cc70fdb42581b11d2ce80c76b1d1a76a"],["/page/15/index.html","8d0e991f071cef35e9c6da383fbae223"],["/page/16/index.html","c3ac0aeb718906508d4eb35dc6dbccb3"],["/page/2/index.html","b7e73c6e6189000031d107c9bdb81833"],["/page/3/index.html","07b4dca24e55000ff9fecf0ac8c0c1c8"],["/page/4/index.html","a3d20dd7f125225a6c03e949534d193b"],["/page/5/index.html","187db1e677b58b823304fd46b0bc433d"],["/page/6/index.html","56d027a1978725822b492a53c9caa96e"],["/page/7/index.html","c82f41dda0fbb5781558a3adc0874e19"],["/page/8/index.html","79a5063cadec45cef8535b17dd6acba6"],["/page/9/index.html","d0fe2c36b1164c267cb6893bb330d405"],["/schedule/index.html","0129aecf4b06fdee84b5629f129a801d"],["/sitemap/index.html","46431b47934b4d62a2039fd744e6a089"],["/sw-register.js","262c610c21ff2f9b4aa3cbc4979d962a"],["/tags/AI/index.html","6a3641f4ebff8550f26435c497329162"],["/tags/BaiduNetdisk/index.html","0cfa9af847691b1d60ec74c426558249"],["/tags/CSS3/index.html","32895aa171a1f1e4ae7e5ff407ccd71c"],["/tags/Electron/index.html","163a41c26b2baf896e22f30c9da59e80"],["/tags/ElementUI/index.html","2d5d7f049cd9d2871482a5c63ecd1070"],["/tags/GAN/index.html","e6379d7d9ebc7cfc0769a8851b49ed04"],["/tags/GUI/index.html","84aa9a262299d295e00b47e7c9f25c6e"],["/tags/Git/index.html","8cb3136b86cea3cec1a8061e9d228fe2"],["/tags/JavaScript/index.html","3af80ed2a5c1bd7790398d1271a9cac3"],["/tags/Keras/index.html","30d15f71c39490c253ae85039db6ec24"],["/tags/Linux/index.html","9059244aee43365f4d29bf95b7fd52f4"],["/tags/ML/index.html","e8d4c6704038f723de6076cc824c250b"],["/tags/NLP学习/index.html","075750b1b14574fba007fe5b3eba25ce"],["/tags/Nginx/index.html","42c6f82f474a0aa679afbd82b11819b1"],["/tags/Qt/index.html","33d2f94555df52deda8e2dd568db32c7"],["/tags/SSL/index.html","8a96979deb3c84a1ad7307276505f3fb"],["/tags/Scrapy/index.html","d505efb036e921605c2e1b9ceee605e0"],["/tags/Web/index.html","479de2c98317a31a81903486dec53dc0"],["/tags/bison/index.html","9708908cea52504c44ffa87f976b7729"],["/tags/bomb-lab/index.html","d42b3e526b88f88d54e0ff107cfceb97"],["/tags/c/index.html","c1f47af38a91a744664ffc7ee0651f63"],["/tags/cheerio/index.html","f2d9fbd6a3135f10fe52d84f04e83752"],["/tags/codewars/index.html","6916d2f4fa812c0c7e6ec54267c40f7b"],["/tags/compile/index.html","329726933c4a9d524f24ab45fea63377"],["/tags/compiler/index.html","5927230185d5f872e2cef6c8b58047c1"],["/tags/course/index.html","f503d54079060e917c83a59931da71b2"],["/tags/crypto/index.html","f123118c2acae3ca1044a7fcde7f3d7b"],["/tags/csapp/index.html","7275f008368371217bbf65ec91654bd8"],["/tags/css/index.html","15b54da4d13687440bc2128c8e64e7bb"],["/tags/data-structure/index.html","80213ad7861b178abb29f49dd848e26c"],["/tags/database/index.html","aa469fc4facdb7ce5ea9931992689dfc"],["/tags/deep-learning/index.html","62c957cfb9309af908243844d3dc531e"],["/tags/django/index.html","70ee4b2024ea0c359c0d8d6964663d31"],["/tags/dwm/index.html","ea20801532f35f505c494fbbd2a35a5e"],["/tags/exercise/index.html","725ad5b5fa49b42459316fdbe60f399c"],["/tags/flex/index.html","57d55af7d449a1800b48d7bf12bb6a60"],["/tags/front/index.html","961e3a424669f123f164889bdd513bcb"],["/tags/gcc/index.html","bcafc2bc66639388198a08703a7f5ad3"],["/tags/gdb/index.html","aefd685ef89d0a07eaf4ca8d2f4b31e4"],["/tags/graphviz/index.html","f20ba9f3c4026922cabf11570f9a6039"],["/tags/html/index.html","2a6c1ca0fcbecbcb38607a7e44adf9c2"],["/tags/i3wm/index.html","063fb8733c248789a8295590ab47df70"],["/tags/index.html","1f86e749ce7fa78509494ada1affe4ad"],["/tags/issue/index.html","d16f9af7dba500b77bbcc1a641396b3e"],["/tags/jQuery/index.html","f66d63bd01853f20683868609a37a235"],["/tags/java/index.html","fa287abde977ee7cbcd6a52ca1a6fac1"],["/tags/js/index.html","decf81907bc65db1a614d733605330af"],["/tags/lex/index.html","b003d1e0d3324261a4103b21dca8f9a7"],["/tags/material/index.html","92ce25392c9bcb011628fd31f6dc8a90"],["/tags/music-player/index.html","e4b7ef8b2dcd7b2dfd6afc002dafb2f4"],["/tags/nodejs/index.html","373202870c27e5820ce88d0dec30f6d0"],["/tags/noj/index.html","b73d1844ec5327d3fff8979d0b379e57"],["/tags/opencv/index.html","28b39c6e209ade6cb776f4ecc4f22bf0"],["/tags/pandas/index.html","26a07d982ad6a2fcd76cb1ac36c8e70d"],["/tags/proxy/index.html","471773b735b8d7eec129f10457ee81c9"],["/tags/pygame/index.html","fc96ddaf3272d1030ab7a06c5fa78d84"],["/tags/python/index.html","81c75e8da7c645475a572fdec4b1beac"],["/tags/pytorch/index.html","8172d167c8bd3e7df4c97745f27a7f46"],["/tags/reading/index.html","102e5472f4efea27cfa650fb0bb46082"],["/tags/requests/index.html","d1e73680687e2fb3f7734a3f3121da2f"],["/tags/security/index.html","80304993e649b4c31dd42b93469f263d"],["/tags/shell/index.html","8be964005213c675c986343975d8faa4"],["/tags/sign-in/index.html","b3f14409dbb90cb4439659e2cfc48628"],["/tags/socket/index.html","b02c97bda823b04cc2b0eb9a5ca35173"],["/tags/spider/index.html","fe6e0ebc81f2fea339977d27637a9cab"],["/tags/splash/index.html","bcb9ec064eec8e2fb44352d0d9794d8c"],["/tags/superagent/index.html","d64104635a630916b5aff0b5ac346134"],["/tags/tensorlow/index.html","53a21fa34627ae2f5cfbca0bd8056cfb"],["/tags/threading/index.html","da2d0ce5af1f0af2e9944c4b756dda1a"],["/tags/tkinter/index.html","31a357030ce447499f346c94c4a86d5a"],["/tags/tutorial/index.html","a114a5bd36073ee104f0c8d899d45906"],["/tags/typora/index.html","a397fbb7c4e16a5a0ab45a0729b7d45d"],["/tags/vue2/index.html","f03401b004f7a98a97405f37c0bd200c"],["/tags/vue3-x/index.html","04a0c9eafa11aa2b059322c4a407ce35"],["/tags/wechat/index.html","40d77c40facd44c248c21d3f7737eb7b"],["/tags/wm/index.html","928d1245d94e8f42eb030f69cebb537a"],["/tags/wordpress/index.html","01903689885beae4734c704de6c2e136"],["/tags/yacc/index.html","3da227cd6d7b6d32d0c6f667f69ec6cd"],["/tags/zsh/index.html","5e3118243e5d9814cea5109592811d80"],["/tags/七牛云/index.html","c2a31bc195f663d530d410191e4907c4"],["/tags/函数/index.html","1ee687f6edcab8d2381e62547e0a2d69"],["/tags/存储/index.html","6483a7502a7ce8f279d0beab2f58f785"],["/tags/实战/index.html","f7e033f4fec51d8ccc2a2a6bb9a7d0be"],["/tags/建站/index.html","c29a0c1d3024025143d602ef33900d08"],["/tags/指针/index.html","b2749ca9de006f8d1c69b2c714cc2823"],["/tags/汇编/index.html","955d436162c3d882688afece15878099"],["/tags/爬虫/index.html","244955fd1535032d60edf55d02fefddb"],["/tags/编译原理/index.html","64c1649f1c0dedf7a69536ec11f5c44d"]];
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
