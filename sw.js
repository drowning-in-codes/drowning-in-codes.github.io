/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a8f4ded91d4aedc7e79dbc66bb6e6d7a"],["/2021/04/20/稀疏矩阵/index.html","d644a671ebba7063b51b5f9f1cdbc01e"],["/2021/04/23/广义表简介/index.html","5e0e2770146c70aac9323241bca19d3f"],["/2021/04/29/关于指针和函数/index.html","36e341ac2ce12dbbcd5d30503e559016"],["/2021/05/10/哈夫曼编-译码/index.html","dbaf27015b322172a2da4e2caedb0e18"],["/2021/05/17/数据结构noj_2/index.html","4614ebb888a215591d76f79092a60d7a"],["/2021/05/30/数据结构试验/index.html","eb7e7e85bbf7f992ead14a1b088e3bc1"],["/2021/06/12/数据结构noj-3/index.html","fd7c799f02ddf205e657c83c20116bfd"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","47c09a42b19f8bfdf8c7448169b03bb4"],["/2021/07/08/课程资源分享/index.html","3f422bbf30b9b8ae738a27a253ec06de"],["/2021/07/20/Scrapy-下载图片-文件/index.html","ec2925c5fd1ea73eaf623efd7e6d78ba"],["/2021/07/21/Scrapy-动态网页爬取/index.html","baeb3d48740742507820586295134e9e"],["/2021/07/21/疫情打卡/index.html","9d7a16aaa351cfe0c8652c0f441ed599"],["/2021/07/29/Scrapy代理设置/index.html","718065980cf2177b38cb692d1c80f187"],["/2021/07/29/数据库认识/index.html","6d1cf506390f1672aad9240e9a14eb1b"],["/2021/07/31/Python多线程学习/index.html","ff7fe7b1f83dffeb3b024978d5d48cc5"],["/2021/07/31/tkinter-requests练习/index.html","bf5000dbb510dbcf9e44781d324a85ea"],["/2021/08/10/Git学习/index.html","72f8bec3850af9751709cf3a1556a9ee"],["/2021/08/15/pygame实践-1/index.html","8179b1f5429014ce97ba120f08352da3"],["/2021/09/06/微信小程序开发/index.html","7199ed2c67d8091b3da22285e53abdfe"],["/2021/09/21/命令集-1/index.html","a1b23624300d9b8c34d6ed9d7864c940"],["/2021/09/21/命令集-2/index.html","bceb1fef50892b6ff9f990114da0500b"],["/2021/09/21/命令集-3/index.html","f1ddbcee70ab6f0534358a31381c0a7c"],["/2021/09/21/命令集-4/index.html","7faf0bed87fc430fda0744ada77bafe0"],["/2021/10/03/socket学习/index.html","db388e688d6ad47fe0e68b2a89c41a35"],["/2021/10/10/dwm入门/index.html","5395805927d645101fd54603c8ed99c6"],["/2021/10/10/安装ohmyzsh并配置/index.html","b0f0664d51be627f98b7c59d7cb90624"],["/2021/10/20/css学习/index.html","b5226511226960a000820338c603a089"],["/2021/10/20/wm入坑/index.html","6884b79698e41795618ff30a4b3f4fc1"],["/2021/11/03/微信小程序学习/index.html","300341d65e3dfefe0f151cc242db0104"],["/2021/11/04/css揭秘/index.html","f8adae0f06dcd7127b27e20f8fd880e7"],["/2021/11/05/css-练习/index.html","5338a771d9c0d3767cbb47445c11a3e3"],["/2021/11/21/命令集-5/index.html","88ece92d8962ec3d69851b7539c5caf6"],["/2021/11/21/命令集-6/index.html","93242e635a76c081916ae3b05f422034"],["/2021/11/21/命令集-7/index.html","d9e68e1812cd94430ad8e304e2247925"],["/2021/12/01/搭建wordpress/index.html","b9cdbc4c59f5bf1cf39b39b559806a69"],["/2021/12/08/python操作百度网盘/index.html","a00cf9b5fd411f3a94a56934aa4be7d8"],["/2021/12/14/js爬虫/index.html","3a4b759c0a31a687f7055edae9f9c60e"],["/2021/12/25/为网站申请ssl证书/index.html","991c78c0d575faa78a286481ce8a3f53"],["/2021/12/29/使用七牛云为网站提供服务/index.html","73dcb82a6a6811665bd2ecf6541716b9"],["/2021/12/30/jQurey继续学习/index.html","d6480afc81b28a7ecd129e9f68b9cc1c"],["/2021/12/30/jquery学习/index.html","5ec07ebf3f020febbe0c7f04500dfd72"],["/2021/12/31/vue学习/index.html","a27860c9714bf3044e3b9bebb8476784"],["/2022/01/02/疫情自动打卡/index.html","4b5ca79431563f191a5f03a458de58ac"],["/2022/01/03/javaweb初体验/index.html","adf29e3b1407d466ecc097e5dcfbfa18"],["/2022/01/04/codewars练习/index.html","8f3ab33a6bff6dd3d431bc1660f626be"],["/2022/01/05/Spring学习/index.html","a3920948b481040fc1437b9c6985310e"],["/2022/01/05/vue实战/index.html","b455ff2d22c53900f872469c1af028cc"],["/2022/01/08/gdb-gcc学习/index.html","8a20fd78afadad8c45d8850ec7aa074c"],["/2022/01/11/python-opencv学习/index.html","f4853db4cd325821ed220a92ce2e919b"],["/2022/01/12/汇编实战/index.html","8716746c9514a05fbae8cc317372bee9"],["/2022/01/17/pandas学习/index.html","3e38be226c6f09bcd630a9ab70f93806"],["/2022/01/19/可视化图的工具/index.html","d2ada14c8db6b101abe5e818cf04060d"],["/2022/01/19/机器学习入门/index.html","2a104010725cb91544ba3e69c6f84480"],["/2022/01/20/cousera-ML学习/index.html","2f1324e6542b8b0638d7afb39c73852a"],["/2022/01/30/typora解绑后出现问题/index.html","51714c971517bb25b4c81766bd2726c3"],["/2022/02/03/NLP学习/index.html","043587a38aff7ffd6786a4f2cb1c6242"],["/2022/02/04/Web漏洞学习/index.html","45c20ffb12db15ca8690aa98ea6f5272"],["/2022/02/04/pyqt学习/index.html","4815627e9ace443aaf7e69472eddb871"],["/2022/02/04/python爬虫/index.html","f8d11caa36e11236ce17030bcd52a0e6"],["/2022/02/18/Electron学习/index.html","8d416ed549baa63d4299d6d1695a1555"],["/2022/02/22/疫情填报字段解析/index.html","b2ce35d0c33043e6b3568722f4302c5a"],["/2022/02/24/Bomb-lab实验/index.html","5aaeeb1f58de11d0d28b4e2ded3a6272"],["/2022/03/05/nginx学习/index.html","69992f3780ea7da32df7639b1144c8bd"],["/2022/03/09/汇编原理课程学习/index.html","1617fd30f9ca823540146a0894709040"],["/2022/03/11/Keras学习/index.html","9612ec6591eb58eccf9537dedd766100"],["/2022/04/01/graphviz学习/index.html","4081c9ced26d1a955448064aa1786b29"],["/2022/04/07/django学习/index.html","99798cd515f6a0aab0ecba4e312f1512"],["/2022/04/11/密码破解学习/index.html","b996a02393993b92b954bb5c2cac5ee3"],["/2022/04/12/flex-bison学习/index.html","a4d1d3fad1b6f75f4d1936611e577bf8"],["/2022/04/15/pytorch学习/index.html","82cc31d5a958c393ddd246ec8c1376cc"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","1885d896909226aa39b372083b08ac8f"],["/2022/04/23/写一个音乐播放器/index.html","aa52c4e688129323191e1c8fd1df1291"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","290ea4fb83b3b9fd4c8351c3705d9ff2"],["/2022/04/30/GAN学习/index.html","1563abd16128cbdd8e239e0b3397045b"],["/2022/05/02/html精学/index.html","c79c0df0e4c3bb95bf51668a64b2222f"],["/2022/05/06/write-a-compiler-by-yourself/index.html","5958c5e4af0e9f399783aed137f2304f"],["/2022/05/30/acwj-01/index.html","ba77cdbbaefbd679aa1e79a3fbb1e03c"],["/2022/06/14/animeGAN/index.html","c2c788403ba52115bbdde14c4fc7d6a2"],["/2022/07/09/c-与算法学习/index.html","514c98d184ecfb942335b1029165ab42"],["/2022/09/19/flask学习/index.html","b97d965eb297ab67e73d05a18f6965c5"],["/2022/09/22/cs224w学习/index.html","83db0ee20aaa7db39c791a7dd9a44297"],["/2022/09/28/记录一次wp重装/index.html","eaf00bb2e50a65c1743a78d2e43abdfb"],["/2022/10/01/Obsidian学习/index.html","2f83567f1d06fd88eb78c2f1a8579051"],["/2022/10/08/vue-element-template实战/index.html","3ba51f2afa5f8f900a7a18de129b2166"],["/2022/10/25/vue网上商城项目/index.html","be703f2b674ae9345bab7643e5256adf"],["/2022/11/11/leetcode刷题记录/index.html","2c04fee0b5ed05047accfa4d618212f0"],["/2022/11/11/使用overleaf优雅地写文章/index.html","628a4a47d1b8351c4ea1c92bfef25fdc"],["/2022/11/22/磁力链接与RSS订阅/index.html","f9753dcbf006f9cd33fff746fe66edc9"],["/2022/12/11/uniapp申请获取地理位置/index.html","3ba1dcde66a9e0ef5c12efd4610bd2c4"],["/2022/12/26/pr剪辑学习/index.html","c5cb9189d717d912c2d426a442d102ed"],["/2022/12/27/css中的flex和grid布局/index.html","24e4f5f776fec6e658d26f90c5bad884"],["/2022/12/28/Flutter学习/index.html","2d60abd03745414e67b7c3a7ded3d787"],["/2023/01/01/美化github首页/index.html","ef812db1f6651b13724f97c84402a08a"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","2fea5b93db93228aabddf581cb105a79"],["/2023/01/04/构建微信快捷发布文章工具/index.html","4ca59a1f87b8c720dd23f40308668d3d"],["/about/index.html","92667c47fa30facab64dcb2b80e556ec"],["/archives/2021/04/index.html","3dbbdde56137ffab0b9a5efa183f030e"],["/archives/2021/05/index.html","8b270f5055803f2186f933e7faab68de"],["/archives/2021/06/index.html","23f54043df11dd0938481b8565876158"],["/archives/2021/07/index.html","8a76f551c0c4255a558d9adbc9dbafe5"],["/archives/2021/08/index.html","deb033c613728d71783a8f3b9a4276be"],["/archives/2021/09/index.html","c1478d1967b4489fd2239d7e1e8fac8b"],["/archives/2021/10/index.html","f91d29855f6920b64509864440cdeca6"],["/archives/2021/11/index.html","bb1c95c19d861d465e805573e63e9939"],["/archives/2021/12/index.html","a37db6a1eb633a56048026a3846e0c76"],["/archives/2021/index.html","ee2ab1739756283adffb9d957fc611b3"],["/archives/2022/01/index.html","2d7e54f5eb0cf3481c9a79be1053db89"],["/archives/2022/02/index.html","2f8bf447a4464fb3bdfaa11a04657efd"],["/archives/2022/03/index.html","84705c0c75db5f36f100ef37bdacb70b"],["/archives/2022/04/index.html","87d116a8ea442c53d31fb696212a3e58"],["/archives/2022/05/index.html","735aebdcb94da22438a199ec6d636fdf"],["/archives/2022/06/index.html","10066f794b662a561878007de6be33e1"],["/archives/2022/07/index.html","b1a7e1fe9ba2c10f74a55444e37dabe4"],["/archives/2022/09/index.html","756cde93c889cf6dd0e938088d15827a"],["/archives/2022/10/index.html","9dcae2cb7d728bfdbf7df6fbe5cf4277"],["/archives/2022/11/index.html","38b41ccc5fe3fb8b22acaabdce5e954c"],["/archives/2022/12/index.html","779a65ab980600aac531fc2adc1a1d3e"],["/archives/2022/index.html","29d4048068719565c941fb48ed04d1df"],["/archives/2023/01/index.html","e4971de51da0cf371553e481be2d6234"],["/archives/2023/index.html","0c19960306b3de6cbcec72fba9d04142"],["/archives/index.html","ad131818ccb4ce840e7aa445f22a276e"],["/archives/page/2/index.html","ea0244294222725fe305920c84e3e9b6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","e51910c32c777378c84461ca3ab31121"],["/categories/ML/index.html","09d3464f774b5a5fc2e2e16bebbba440"],["/categories/Nginx/index.html","9a76ba3e30efc3edcce657c70991a22e"],["/categories/Spring/index.html","0dd9c0699f94c3a5f0ea1d1cf4a87ce0"],["/categories/course/index.html","69241f5ca44850c1f1a1c6160b49c504"],["/categories/django/index.html","f0f7deab207aebdd39db2ecd5105ad21"],["/categories/fun/index.html","69927aa52e441713c8b33b6f05aa2075"],["/categories/gcc/gdb/index.html","f309fd9a9a06b7ff92dd9ee8df110894"],["/categories/gcc/index.html","6231d0690e5cd738ecc5581c36e9d7b8"],["/categories/index.html","7a75b8a3273d1191d5d16cb93fcc8a46"],["/categories/java/index.html","cdb9bf4c12437b5cdeb3e3c6927aab70"],["/categories/python/index.html","01145026bcb40cd7b818d79a662b13cb"],["/categories/study/index.html","5b91c7a719937c3f9b4121550a6ccf51"],["/categories/vue/index.html","e11e6961df4929ce2bb999433d295d2d"],["/categories/误区/index.html","0dad9927966c3b412fa1cc226cd7649b"],["/commonweal/index.html","372dd210443a2117dff779957d04836f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","6d50b925d8aafbc70e1b8b2969a85937"],["/home/index.html","8f221604647d3be9e62d9f920a496ffb"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","e828bc1731ca9564ec494335d80f11e7"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","174d7c25d779553b919ccd68d9bb6bdc"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","38b66f068afd5b9b003a4abb2b6165ec"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","5ab06f4958dcf4d18855d6fdf36d3adf"],["/page/11/index.html","cb4eab072acc41c3af60e7cca62ed398"],["/page/12/index.html","97520d4a54a1a8aafb30c97a09f380d7"],["/page/13/index.html","9096a36ff8f995de1eda6f99fe182eec"],["/page/14/index.html","cda0fe9365d2a6c1cc42ffb71fffd630"],["/page/15/index.html","11fc0f21c25f5a0929d25bd381ee604b"],["/page/16/index.html","a66c0b8b3d69a0e6cb59ce17fda33f45"],["/page/17/index.html","be5892b5e2386999df8bad881e93c2fc"],["/page/18/index.html","1debfa5b5b509828514e9e986fb5fb3c"],["/page/19/index.html","7ea12ecec2a56cb86b48320953087a48"],["/page/2/index.html","c84d8092d79571eedbd9e25b0f616d39"],["/page/20/index.html","062a6a386e490bc483cc5d55a5b223cf"],["/page/3/index.html","a574323084511ff81fb009eade4bb879"],["/page/4/index.html","aafebb69576043a0c6a5f28ae54a97dd"],["/page/5/index.html","064dcac935739db1be6bdabd927d0c75"],["/page/6/index.html","06a2b0576047af9beab6446763dcf65d"],["/page/7/index.html","1ed28204986f1f1c030bd3ae7fa92c6f"],["/page/8/index.html","16127db3e5604aec103be855047e004c"],["/page/9/index.html","0f434a3ca8e002c6b6775cda288b1962"],["/resume/index.html","f1c25e20c861aa6cdf2752012249fe23"],["/schedule/index.html","356452d633030219dcc123c370767917"],["/sitemap/index.html","e38c03c9c4f6086cbf97ba565efe8bd8"],["/sw-register.js","27475d6a676ae9bf2c5abc98b1ea29a3"],["/tags/AI/index.html","0ac79e5cc3c5735919b9b268cbb3b393"],["/tags/BT/index.html","01df75200d46571dfd82312b46b33ed7"],["/tags/BaiduNetdisk/index.html","df05a4e2d4c02455967b3a2e6905bb60"],["/tags/Bootstrap5/index.html","e2893a3a87d25ddb64b5030abed6065b"],["/tags/CSS3/index.html","fb41faa94a407f4baa03342ed8532946"],["/tags/Electron/index.html","4a44c399dc52eaaff24ae30a6a4cd167"],["/tags/ElementUI/index.html","9d0003115ae016e3d21046e0d46ea93d"],["/tags/Flutter/index.html","d5ec7328a5357da783379d39f0d9684c"],["/tags/GAN/index.html","9abcb9b978d3028d43ded86ea71e309d"],["/tags/GUI/index.html","4e65a159b574135485fe703f4fa016b0"],["/tags/Git/index.html","b96739d3931821c32de0e478c0cfcb95"],["/tags/JavaScript/index.html","27109d710bcd3c3da1f6e77645f72077"],["/tags/Keras/index.html","38c5c75cba574de96ab599a3d63731a4"],["/tags/Linux/index.html","be5dbd2053ca30a91ab58c47964f00ca"],["/tags/ML/index.html","7eabae520f299b523df904d1fc5ca45d"],["/tags/NLP学习/index.html","031d5edc4f3d0de8ce86821962fb4cf6"],["/tags/Nginx/index.html","b55bfa31a3bfe430290e3ea9d1370370"],["/tags/Obsidian/index.html","94fdbde267893282071390a9a5071e71"],["/tags/Qt/index.html","ff233613de0a7198faeb1a8a0e21f865"],["/tags/RSS/index.html","7cfe0411904d8288fdc71011aaa8d412"],["/tags/SSL/index.html","17a1c0da9f12addea1fc8aa2ea2a50e0"],["/tags/Scrapy/index.html","febb2a6e44bfb2f108cab5cd0843c10a"],["/tags/Web/index.html","4962cafadb30d969d1fd6456f527e712"],["/tags/algorithm/index.html","876d60b121cdc7f1219426c19aeb3a86"],["/tags/bison/index.html","1625195765ef0423e6c19f233653f4a9"],["/tags/bomb-lab/index.html","cf7972317737f31bc0d63921385480b3"],["/tags/c/index.html","81dfcaa649b8b3be74e9ffafbd5f3f9b"],["/tags/cheerio/index.html","e717b48e3b391b8719f3977f8d76f08a"],["/tags/codewars/index.html","f26eaaeab4aac91cf007ee812f6dc5e1"],["/tags/compile/index.html","6c42ddf80573432a3aaf8946e7de8635"],["/tags/compiler/index.html","5c95ce320aed4cfc081bcfd0e902a86e"],["/tags/course/index.html","ba5b0dfba9a4ebd53a3d4f314b799cf4"],["/tags/crypto/index.html","041df81973cc7d81379ffff11c6b2449"],["/tags/csapp/index.html","398c9fd4f17ec216bfe0a95a0dd7a46b"],["/tags/css/index.html","4a8f8126f7dd5aec9034d35ad25b0583"],["/tags/data-structure/index.html","30102f992d5ec0c306b6a92cc25e7b88"],["/tags/database/index.html","0afd58c820e8fb06cfb223d5fa7886ab"],["/tags/deep-learning/index.html","84ccf4464e0d2162cd1f2712a3d37e02"],["/tags/django/index.html","6a6aa74cb4f28df25df6c6b841f31b28"],["/tags/dwm/index.html","692244238683642e9e0409010230d2e5"],["/tags/exercise/index.html","6792bfb8a796cf85222a5a9f0c43d736"],["/tags/flask/index.html","a87dff8f618179de17da8155cfb804e5"],["/tags/flex/index.html","e892f772a852784670b707835c92862e"],["/tags/front/index.html","ecbc7a111d5bed01266afd11dc946f5b"],["/tags/gcc/index.html","35365b7a84d58f34117977ba6d74bd89"],["/tags/gdb/index.html","979c783611d7dfb9b3145833ff958e8d"],["/tags/github-profile/index.html","d4cbd4a5321b9c1abc52693cc4a1c385"],["/tags/github/index.html","96f8f3d611351262222b7eb73934b0a8"],["/tags/graphviz/index.html","4a98de5ae8dc88cca8f20f3f334c8394"],["/tags/grid/index.html","0b3e105b74f6b1e57ccad81b5e01e6a6"],["/tags/html/index.html","f422a13ae1465e9d2df9e5de92b52f30"],["/tags/i3wm/index.html","68bce791cf8a8c4cc226046af3e36f4f"],["/tags/index.html","1bcd9308863c3ec1b87950cdb48e2faa"],["/tags/issue/index.html","9b4d58629242f17160db292d9a67b97b"],["/tags/jQuery/index.html","287be5007a46258d1a9c95e1cc8f24ce"],["/tags/java/index.html","4630130fc34a59f3d050c0cc5362ca05"],["/tags/js/index.html","ae397b14ecde3959e9ca3ad6a66a09ef"],["/tags/latex/index.html","9477dd63072ebc33797f23ede3c92722"],["/tags/leetcode/index.html","eff0460fa947821e8ef9c2ccc3db455a"],["/tags/lex/index.html","d39a4843a001746c25f65cffca3f4d34"],["/tags/material/index.html","52fdd1517648ab268ba33d510b5ed5ab"],["/tags/music-player/index.html","f1bbad7830940f2d7f5a9ab7b7c5e578"],["/tags/nodejs/index.html","d7b06f2dd4ba47ace0dadd5748861f36"],["/tags/noj/index.html","333af0267900c30d4bb6b4f1e5eb9752"],["/tags/opencv/index.html","5ecc0ab8527c50e82b0439e83bcf6c4a"],["/tags/overleaf/index.html","4d03687bd81fe6b145f77b07c1ad6ba0"],["/tags/pandas/index.html","9cd64efbfbe72230aaf1bea000f4f854"],["/tags/premiere-pro/index.html","e2eff54583a6f5913651d3a90615d16b"],["/tags/proxy/index.html","ac23b37ffb20ad2886e7ec209a7726c6"],["/tags/pygame/index.html","0da8e77fb68b0798a4de314f5c23e7dc"],["/tags/python/index.html","b6d60df2a4a7be0ec65440490c02c9d8"],["/tags/pytorch/index.html","ba7ba916954751345d919eba0f171af7"],["/tags/reading/index.html","7cd22c191af10b469f9cdd5ab3812cbc"],["/tags/request/index.html","072c23efc4cacfb49a63797bbba62122"],["/tags/requests/index.html","d7a199ced1ff859c8bffd5b76e84a6f2"],["/tags/security/index.html","4f803e80f68757422d8ee45431781c92"],["/tags/shell/index.html","522ccdce0e2f4e51360dbe640db90652"],["/tags/sign-in/index.html","3738dd8558fd19a72d2315eeb4cf7a14"],["/tags/socket/index.html","7f6e7fb0eec566d3c9bb54799eec675e"],["/tags/spider/index.html","0262b32321df28959d95965ba9c9c5c9"],["/tags/splash/index.html","5ed513ab015e9b9d01fa6869412a3b6e"],["/tags/superagent/index.html","eb1a7e95c25f8ae594fa8dd1c1de4f75"],["/tags/tensorlow/index.html","0b0cfdb66a6f527b7bc12c24c2332a58"],["/tags/tex/index.html","f0e0b93ffda5b00da73236777fd958cf"],["/tags/threading/index.html","c59d190656b3853f265490f1219aeef6"],["/tags/tkinter/index.html","892bf7dba95ecbc190d21ca15b191bb8"],["/tags/torrent/index.html","09faf0ef45c15f6a74a4e8323b879381"],["/tags/tutorial/index.html","6b9d10e3db55e4f0827a03a1078aa6b0"],["/tags/typora/index.html","931245304af5be372672fa88434ea322"],["/tags/uniapp/index.html","17f7e122182d7d4e7a3c078903b47487"],["/tags/vite/index.html","a1bbdc96c33608773c5c0e9943e6da06"],["/tags/vue-element-template/index.html","aebba9506a3ded8b343189cc4df63d74"],["/tags/vue/index.html","807b759e4cf0850938a58762b339a84f"],["/tags/vue2/index.html","9f579a38c2d50ce42c6c9df556846421"],["/tags/vue3-x/index.html","afad7b4a917ac22b9072823422b21c0c"],["/tags/wechat/index.html","8252b4f9c71a92fdc4614fdc1b3f4659"],["/tags/wm/index.html","3911adfe0f5d68c140e7ead4b4c8a517"],["/tags/wordpress/index.html","7efeceec45d609fae775cde2292b4c25"],["/tags/workflow/index.html","4480fc77a4172aec195b723455716b7f"],["/tags/xpath/index.html","6eed31d308f3148a4f072fa77aafefbd"],["/tags/yacc/index.html","1faa5e5ca4f31444e9743b279f55e327"],["/tags/zsh/index.html","5144061b3c94e8c21430ab06fc854630"],["/tags/七牛云/index.html","1bfeb6077ff59510ee6fab04d0ff6469"],["/tags/函数/index.html","c024cb25e7bd32ef8519f71b30b2d048"],["/tags/剪辑/index.html","f2995b61c7108280d33ee2c3ec203008"],["/tags/存储/index.html","9994c581159c6d80865dfd251d835d49"],["/tags/实战/index.html","78368c87b922b91457eff91ad7934c56"],["/tags/建站/index.html","a24ea869aecfa29cf4b946b9cbd82e36"],["/tags/微信小程序/index.html","7fff65e06d9404ba2a6905b2caace1f3"],["/tags/指针/index.html","7c2b7360a730ec9a5c0ae9878a9ad63d"],["/tags/汇编/index.html","9dd5c9d5b6b8168666e8ba5b05195d53"],["/tags/爬虫/index.html","a8f116b2b5199d4acd17884e156d1dfe"],["/tags/算法/index.html","0c8c68048e8774aad7a5292be6259fa6"],["/tags/编译原理/index.html","478a62f0afa317e617cb6791d4390431"],["/tags/获取地理位置/index.html","224aa6847721ef05580fc773c71018b2"]];
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
