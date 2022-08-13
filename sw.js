/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","b27360951291facec9c26bc19a0ae59c"],["/2021/04/20/稀疏矩阵/index.html","65111a170f9cc31e55e5e24c4594db49"],["/2021/04/23/广义表简介/index.html","6101883893f3e7bbc74a17fb37fc1423"],["/2021/04/29/关于指针和函数/index.html","4879e45872460de93fa69a5d8e6d4406"],["/2021/05/10/哈夫曼编-译码/index.html","e965ec09490dea88376cc4d9f35e4afe"],["/2021/05/17/数据结构noj_2/index.html","67d46ea5032a42f10d0b13da8f110219"],["/2021/05/30/数据结构试验/index.html","6eb012e882b5d58549638833276c5815"],["/2021/06/12/数据结构noj-3/index.html","5748f6b6c907c8193f162a0ec3d620c4"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","99cdc22cd9efb69fc2c76174a3199084"],["/2021/07/08/课程资源分享/index.html","1b9f4a4994b7bef20a4f8f022f812ecb"],["/2021/07/20/Scrapy-下载图片-文件/index.html","05b1d243ed9efb06df196d8ff70125d1"],["/2021/07/21/Scrapy-动态网页爬取/index.html","6e0e645108014eda8aafb318920691e7"],["/2021/07/21/疫情打卡/index.html","6990dc9f4a22c39130bf3e5318cd31b5"],["/2021/07/29/Scrapy代理设置/index.html","25623be5b8a6c920e8ad74ccac302330"],["/2021/07/29/数据库认识/index.html","18b9ce64e2e75a9eed6ba8a3a7377349"],["/2021/07/31/Python多线程学习/index.html","4537d2addc98d7c7bcd35793ba296b9d"],["/2021/07/31/tkinter-requests练习/index.html","408dc9fc1eb2f56f29a8cca9986fe2c4"],["/2021/08/10/Git学习/index.html","2a263c001c94020db354874488426bde"],["/2021/08/15/pygame实践-1/index.html","1af766d44a9bde7429c8629141c906c5"],["/2021/09/06/微信小程序开发/index.html","49da16506dfe572295469927d144e81d"],["/2021/09/21/命令集-1/index.html","d0397c51c75f11f5ae6057fd147aadef"],["/2021/09/21/命令集-2/index.html","b0c73d9a9eff85c629f59895ae4445b2"],["/2021/09/21/命令集-3/index.html","00141b6f18b94c33142024f3998b7a3d"],["/2021/09/21/命令集-4/index.html","644a8b3cb50545dffc32a17ce796c678"],["/2021/10/03/socket学习/index.html","cb5661ec29b76d41bd5184b12417ebd4"],["/2021/10/10/dwm入门/index.html","11d0a9b3c21105bbcfc21c3e142c19b6"],["/2021/10/10/安装ohmyzsh并配置/index.html","0ff9bbd67a82ea75df7caf4727e5f70d"],["/2021/10/20/css学习/index.html","8aafd805643b05171455bac6b97c4d34"],["/2021/10/20/wm入坑/index.html","53f8879c4388f087355628ae353a0426"],["/2021/11/03/微信小程序学习/index.html","0e7503ac54befb8ea24bd2dafaa08fec"],["/2021/11/04/css揭秘/index.html","eb51b36ad9fccf685f5e62076069435e"],["/2021/11/05/css-练习/index.html","9590bbbeea5cc618a04c5690054071ee"],["/2021/11/21/命令集-5/index.html","627f7893c62b51458694bc23256efb99"],["/2021/11/21/命令集-6/index.html","78ce27cf8631ee94bf86f6c61368e538"],["/2021/11/21/命令集-7/index.html","13e1588de4520b28c7ef48cf97c65ea8"],["/2021/12/01/搭建wordpress/index.html","decb6b859787c24e8c267564a30a1214"],["/2021/12/08/python操作百度网盘/index.html","11b412679fcab7cd1c9bcff212c5d65c"],["/2021/12/14/js爬虫/index.html","5767311f9657ef40a6f407d0fc4b8f76"],["/2021/12/25/为网站申请ssl证书/index.html","f692624ec1b388c1781374aed570ad7b"],["/2021/12/29/使用七牛云为网站提供服务/index.html","30c11068e80f48c8395c4c7aa72586d8"],["/2021/12/30/jQurey继续学习/index.html","0af120df7a79473d63630ccf90d15aef"],["/2021/12/30/jquery学习/index.html","5381089406e334c3ca0c956fcb1e9740"],["/2021/12/31/vue学习/index.html","2c9fe3a13cf1fd3a5813bea0c6cb9d37"],["/2022/01/02/疫情自动打卡/index.html","76eb412671dfc712790eb8767b7505ee"],["/2022/01/03/javaweb初体验/index.html","a6807467e3552b180860e224be047103"],["/2022/01/04/codewars练习/index.html","38798b79c129149c0599c7b409443760"],["/2022/01/05/Spring学习/index.html","7b89afa012b229ed1caae579d1de0fb8"],["/2022/01/05/vue实战/index.html","6cd0540d2805fd10300b521bb4890730"],["/2022/01/08/gdb-gcc学习/index.html","6935eb5359d9ae356650cc6a51e580a6"],["/2022/01/11/python-opencv学习/index.html","243a90fd0f55bfe719761b59ed00224c"],["/2022/01/12/汇编实战/index.html","89e050c6f4ac88a6ccf346975bf25801"],["/2022/01/17/pandas学习/index.html","fa2e329bd27b3533981e4686ff1c5b24"],["/2022/01/19/可视化图的工具/index.html","fc4e4d2cae2a51a8895fe7d5b019fab8"],["/2022/01/19/机器学习入门/index.html","32eaa24c417492414149a5422b519afc"],["/2022/01/20/cousera-ML学习/index.html","e9eb6bc6d5c60d70dde5ee8efe8bc44a"],["/2022/01/30/typora解绑后出现问题/index.html","cfe568fa6fe7a0de4c5ff544db04e072"],["/2022/02/03/NLP学习/index.html","144199b4467b6b9d6ebe533760c869b3"],["/2022/02/04/Web漏洞学习/index.html","342e73d9e8dc50e1a78c26212c7494fb"],["/2022/02/04/pyqt学习/index.html","3a05a471e21f119410212f093c66bc78"],["/2022/02/04/python爬虫/index.html","8b137fa4f49d4fe7ab5cf103b2af1c6e"],["/2022/02/18/Electron学习/index.html","fcde9fec6fb20eb229b02417fe6b6570"],["/2022/02/22/疫情填报字段解析/index.html","062f50bd41fe476920303d75b87ba157"],["/2022/02/24/Bomb-lab实验/index.html","22aaa3f1d886a576c64530588d6d7d5e"],["/2022/03/05/nginx学习/index.html","00bd65f8c51b67087fdd930c6fbb6d1f"],["/2022/03/09/汇编原理课程学习/index.html","a87984726dc4057233c9549be05363be"],["/2022/03/11/Keras学习/index.html","e1e648f5e213194e8422db6617fe9ced"],["/2022/04/01/graphviz学习/index.html","85803ec25d5ed9fe08af78d740888bcd"],["/2022/04/07/django学习/index.html","ac7483af5cfc734a50a82e9fea822281"],["/2022/04/11/密码破解学习/index.html","2d4f713b8b5f0b889073d39d92967331"],["/2022/04/12/flex-bison学习/index.html","f1fc76f65a333fcc1577ce33a151ebd9"],["/2022/04/15/pytorch学习/index.html","7998b203400eb6e7263da9e94b1f8fa0"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","6eaa00c2d1b91fbc8334d8e344be9ba9"],["/2022/04/23/写一个音乐播放器/index.html","75b25792174f81c40b6e735bf20f86e3"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","1726ab8dc15f2eaf4ea8c33df0b23274"],["/2022/04/30/GAN学习/index.html","56c0ef27d8ec0cc3df9db5b043057f42"],["/2022/05/02/html精学/index.html","5a78464c79766a3d948f740757479fcd"],["/2022/05/06/write-a-compiler-by-yourself/index.html","bf881ab34e97cbdfa7b43f7f84da5067"],["/2022/05/30/acwj-01/index.html","02d8f2e5f745af31ef037fd5d9483663"],["/about/index.html","d913649eb5d3c56477b304e3074d15aa"],["/archives/2021/04/index.html","de07fee29ddcd514422614b4594ace1b"],["/archives/2021/05/index.html","065861014d16010250548249d59e47dc"],["/archives/2021/06/index.html","1d1f9aa599fed388799cb3193ed58121"],["/archives/2021/07/index.html","25dc9d41c7e69bdc416d76da3d2053e0"],["/archives/2021/08/index.html","39e74a5ab5639de261fb7874161c1cf7"],["/archives/2021/09/index.html","a5b9f5fd1a36416f183396badfd87bd7"],["/archives/2021/10/index.html","c85f5e29b37ca74bf9cdea1bd8be8f1a"],["/archives/2021/11/index.html","0a0a5d24d713717ab87fa1b846ac42ba"],["/archives/2021/12/index.html","44b3bf67e32f7d3cabe5fadfda9fdbe4"],["/archives/2021/index.html","368c876facb0799f5c690f04928d7c4e"],["/archives/2022/01/index.html","a8aa87168b1f165a324c1f542502ad47"],["/archives/2022/02/index.html","a20601c3b0a2e450b79aa8a9db6cf631"],["/archives/2022/03/index.html","0a8f8f30cefaa5eadbc1bd2ada8c6e46"],["/archives/2022/04/index.html","5654782c82fc82031926c56d9fcae0ca"],["/archives/2022/05/index.html","10c4d6ae15eb925e4d7081357aa64881"],["/archives/2022/index.html","24a5fc310c393096da2288f4d24d6e77"],["/archives/index.html","9af4084c6eeb06cc48bc8ebcc8682adf"],["/archives/page/2/index.html","a412f4f652ec20b671b7a3743bdf4f27"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","0d44dcc11f960dee6d6d329cd9ede50b"],["/categories/ML/index.html","dca92d1bac74a359519f49903b0401bb"],["/categories/Nginx/index.html","d66a61e26eeb4cd40cf641264fe3076a"],["/categories/Spring/index.html","68e3d828e8b8cd0300e8ce8691504964"],["/categories/course/index.html","1baf0a8719bd162554d52e75a48ad8cb"],["/categories/django/index.html","c1024be328df87b7272ffa891712d9cf"],["/categories/fun/index.html","a5398e3b6be0acfbd2e5a11e1daf0660"],["/categories/gcc/gdb/index.html","b9291ab697103af4fa6d66bb79c1ba2b"],["/categories/gcc/index.html","751b341e5fdcddd87ba1e0bc9b6b3477"],["/categories/index.html","c76c0a55eec35ec035cc0f58e1b6850f"],["/categories/java/index.html","c51d8fa4bf7c3e62001b3676435bff1e"],["/categories/python/index.html","691d519adbfcd5a76bd773a212afde15"],["/categories/study/index.html","bcd7506e6d47bdc44f50ab4c17f348ed"],["/categories/vue/index.html","eab8d37050d538259526bfa16fe879cc"],["/categories/误区/index.html","2d537b877350d54bad0b7b43b4ce2f6f"],["/commonweal/index.html","d2e6f5f0226ffeb2c2feade415ca6062"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9e07953939f2ff73e6f4c7b45e1b5d5b"],["/home/index.html","f170023b4fe9549d0aafc5550273d94e"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","246ca65f90327baad28393f18ab13411"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","4d3f9e614dac29d0ca9467c1528ca4a1"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","28cc529d490b937bdbf99e2692d4f25b"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","60b772277d5d38a0f1a0dd691297102d"],["/page/11/index.html","c79b01e8a5a3c1a6dc51e05c43637221"],["/page/12/index.html","f99b5ead354769762a2d34c00f5956f6"],["/page/13/index.html","b12187312639eab5d970a7853043341e"],["/page/14/index.html","1e40eeec3e63c049b512f38356beced3"],["/page/15/index.html","3ee8a244f533c020817338d482c286ec"],["/page/16/index.html","e54e52836b2f71e14eeca4f964f21af7"],["/page/2/index.html","0ad2806a2625841b83858251c3a62b59"],["/page/3/index.html","c5dd1aa32725003c9b5ab9fae54c5447"],["/page/4/index.html","c9318213a1204a2566479260a23a7fd6"],["/page/5/index.html","c23c1e99d3ce08052bba90c340770179"],["/page/6/index.html","f176387d74f40c91026d5c1ffc1a526c"],["/page/7/index.html","066d3a485d5a187a596b5c2afc958064"],["/page/8/index.html","d6230729ffbf628d9ddb5f1c6f84d7b4"],["/page/9/index.html","1a6211798f44f98bc1b8086e04b48c92"],["/schedule/index.html","4b3e19998b741648fa8c439049eb9e83"],["/sitemap/index.html","65394609c58754260be54ee0492a544c"],["/sw-register.js","666420f1e6c027b4f43265e35567c18a"],["/tags/AI/index.html","e0ba07140956e08695d47e625cb1d654"],["/tags/BaiduNetdisk/index.html","c9da143bfefd8857a315eec1f2d6fd4f"],["/tags/CSS3/index.html","4484366530805bde7485993b27a06bb1"],["/tags/Electron/index.html","3ff08ae969a784e533a7f32b317582a2"],["/tags/ElementUI/index.html","6776713a96cd8184d2eb3344654274f3"],["/tags/GAN/index.html","2f83cfb14202d95d148d85f42f0dd327"],["/tags/GUI/index.html","28c0246479b3b63396d6cf5d22864771"],["/tags/Git/index.html","c8d953d06f3610ab503d16f533b766ae"],["/tags/JavaScript/index.html","ac51d1c2c66474d1d5c65f13f94c4007"],["/tags/Keras/index.html","d875532a4a32b05d477aca966a9ea000"],["/tags/Linux/index.html","e497d43cc849ed299c3ba292437b99a1"],["/tags/ML/index.html","34d36782aadd062a700e83277ea65449"],["/tags/NLP学习/index.html","70611843867d505336ab103143478b5f"],["/tags/Nginx/index.html","c566ba92cf317802d00bc693b6c59671"],["/tags/Qt/index.html","5f24351b4a92d3b80580836d8b2b8586"],["/tags/SSL/index.html","a01adec5144c902a3fa1a3cbdcf2d2fc"],["/tags/Scrapy/index.html","4e44e099323ed459af66a391303ee9bb"],["/tags/Web/index.html","36f7a2baa39eec4ccf490a517e594e1b"],["/tags/bison/index.html","9c4e4fd5176bf2411d720b70e989afcb"],["/tags/bomb-lab/index.html","898e0015f9168dcfa0c99f3527b8b2f3"],["/tags/c/index.html","7af11070762d616dcb2f9d3f9ea385ac"],["/tags/cheerio/index.html","1c005c6102cad7134cde72b5ef16ed6a"],["/tags/codewars/index.html","40d9d0e4087984b5b3d5b0693259f88a"],["/tags/compile/index.html","238fdc86d6814f6aaf392bddbe20b724"],["/tags/compiler/index.html","1539cb795fa6f3b24fba07fe0268621c"],["/tags/course/index.html","5a6fb8509154c8c1aaf4cc2aa68637be"],["/tags/crypto/index.html","b5ecd3e158eb3743cfa4bf2c2abcc096"],["/tags/csapp/index.html","06e240b75ac3a666e4f20310b33328d6"],["/tags/css/index.html","e72a5f0adba693e2cd9bf7b10884b884"],["/tags/data-structure/index.html","d0d0502c545612d170e4f4b47bd9460b"],["/tags/database/index.html","01fa263485b1f7c7a47573d46c8edf95"],["/tags/deep-learning/index.html","98942222f072e816ef13dbfd187bdd93"],["/tags/django/index.html","28694079287cbd294dd96d8c15f9beb7"],["/tags/dwm/index.html","713ba2852c260e197e3eedf7502cf322"],["/tags/exercise/index.html","583513d0e617e540aab3db308ccbd117"],["/tags/flex/index.html","525a436d4c5956dc174f1b5d3d7b9f92"],["/tags/front/index.html","0ebcc2340f71605152d6ec13170c4cf1"],["/tags/gcc/index.html","72f21f1594c4d35f67490b17f2e2e49e"],["/tags/gdb/index.html","6be37414be9e12a6dea65d7e8f12eb80"],["/tags/graphviz/index.html","777503d682cfdc56ce45e21bb8cb759a"],["/tags/html/index.html","26676c0db363834192306754a4cda743"],["/tags/i3wm/index.html","587f5728e0d829fcd05b7e1b645ce329"],["/tags/index.html","0d42d9962497f24280b789e6a59bea9f"],["/tags/issue/index.html","bd849aa0af12a24b82f44aaa22d3bcc0"],["/tags/jQuery/index.html","bde5f69a412673f475b5ae307e35b18e"],["/tags/java/index.html","7e7d158c34adb1774510c9755abe9ac4"],["/tags/js/index.html","6570c25217f2635fda811b22ca04075e"],["/tags/lex/index.html","64020ca74642bcaa4b3cb65c9acffc31"],["/tags/material/index.html","bf59f83c7ef90805a4cabfe0724856dd"],["/tags/music-player/index.html","c82ae88e868d2bdff1d4e282e5547900"],["/tags/nodejs/index.html","bdf19c548c3b76573de5fe7dcb1bd78a"],["/tags/noj/index.html","6b4812c51d001b7740b2cd698fcfe4ca"],["/tags/opencv/index.html","d59263dceffbcbd7a266542ab1503c07"],["/tags/pandas/index.html","73901864ee0e460efa7e538dc1bc35f4"],["/tags/proxy/index.html","d1b6f9663495a62aa299e11b947a5714"],["/tags/pygame/index.html","90e835f4bdb58df54df95671ff2e95ce"],["/tags/python/index.html","62332ee38ceec9a0979dc74510ee9f42"],["/tags/pytorch/index.html","0f3aa7fce21e91ba0331646277b0c80d"],["/tags/reading/index.html","b939671e06e10c4c029c5743e9ebc29e"],["/tags/requests/index.html","cd400eca59cde4a70036247007418182"],["/tags/security/index.html","a6b2065a2fc9373f52a21a0f1885b255"],["/tags/shell/index.html","60b37a8c6ed24b837108d789f648a251"],["/tags/sign-in/index.html","8765707becd137a6b8adfd61ada541b0"],["/tags/socket/index.html","ada9a9991d67577caef248e9dc2bd681"],["/tags/spider/index.html","c492b76feece5d6e4d20d7611605fc06"],["/tags/splash/index.html","2db804c15e171347428c7c9460fa44b5"],["/tags/superagent/index.html","babbf7e945a29c2a889daf360e7403d5"],["/tags/tensorlow/index.html","bc61e7ab5aa93b7d95c213053cf465c4"],["/tags/threading/index.html","0c3494c9f014c0fec5e64d6c859607b8"],["/tags/tkinter/index.html","f7c13c57b176c85af8ae92cb25c2d2e9"],["/tags/tutorial/index.html","fe5de84335cec90b03229bb4660588f2"],["/tags/typora/index.html","66412151b513d05e1bb83e2c8aabfed0"],["/tags/vue2/index.html","252f8bcc51f83c1e8b842b9de950b41a"],["/tags/vue3-x/index.html","0d984bb179ca889ecd96a5a6ae594f42"],["/tags/wechat/index.html","a90eb324cb5298f042676e02538461ec"],["/tags/wm/index.html","e2339c24f8463ed7e3edac20ec0c7023"],["/tags/wordpress/index.html","16d85355c013944df5276664b7e617c6"],["/tags/yacc/index.html","f5a64709544776a79e502a551d8ac8b3"],["/tags/zsh/index.html","212d069e78f93cc5855d7923a47fcf3c"],["/tags/七牛云/index.html","a06421e5213fab92d2dae1c1b20ef7a4"],["/tags/函数/index.html","76bbfe951f78c852c05f021c07f2adad"],["/tags/存储/index.html","c088720d1434b6d374a282899c3552a7"],["/tags/实战/index.html","7832a766bc85f1b9202850f20e5836b5"],["/tags/建站/index.html","0129784ecb25b5010170347ca0f18173"],["/tags/指针/index.html","7b44743e88181f0ce3cbcb4ab32d2c8b"],["/tags/汇编/index.html","e48a24a2c0ea7a1972b90245ae158645"],["/tags/爬虫/index.html","90173d5384b3706d3bc6bdfb1128d9c1"],["/tags/编译原理/index.html","539aebfabb26af9b425a7bb3bc3e735a"]];
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
