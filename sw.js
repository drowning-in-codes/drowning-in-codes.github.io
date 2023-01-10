/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","54ab66daccbfed07a5a3dc27cd1abf95"],["/2021/04/20/稀疏矩阵/index.html","4ef583c1865557f69af7f98bc5ecb7e8"],["/2021/04/23/广义表简介/index.html","8aaa623b25c1d9f748fc44aa55f5462d"],["/2021/04/29/关于指针和函数/index.html","04c3dd4cb907dc1b6760f3b830cd615b"],["/2021/05/10/哈夫曼编-译码/index.html","d013e372b3ee1f326577d61645e04e4a"],["/2021/05/17/数据结构noj_2/index.html","57f7e16070f9ec0638c0b29af2bed329"],["/2021/05/30/数据结构试验/index.html","686b28ad677d3a0cfb7a5ae80dc4120e"],["/2021/06/12/数据结构noj-3/index.html","36805ddc4a06dff9517c06b45ce4b612"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","a9d737a25ae021a6ea5d69fc8732c5da"],["/2021/07/08/课程资源分享/index.html","72df633d8d486ea94f270ad819e0d194"],["/2021/07/20/Scrapy-下载图片-文件/index.html","29622c3ec1fa1d9ed8c079619b36b70e"],["/2021/07/21/Scrapy-动态网页爬取/index.html","d2fd18e664196cc0396b9e433fb9206e"],["/2021/07/21/疫情打卡/index.html","3359c87194760830d4ff6cd5e5daab38"],["/2021/07/29/Scrapy代理设置/index.html","4e37ff206aec1acf4dd26efc8983e0ae"],["/2021/07/29/数据库认识/index.html","5b14981823c7bad4ae480f2617d8e976"],["/2021/07/31/Python多线程学习/index.html","5ad55fac826f37d36ce5ef8c21aa14ce"],["/2021/07/31/tkinter-requests练习/index.html","6d9e0bad85539755b750dc7fca6cff27"],["/2021/08/10/Git学习/index.html","5108b078892b46f57efb7a6ca732f28e"],["/2021/08/15/pygame实践-1/index.html","faccddbc88bdeac84bf2940f926d8515"],["/2021/09/06/微信小程序开发/index.html","48a90ee5c628ae120e65151a709d3ebd"],["/2021/09/21/命令集-1/index.html","c5dc5ede61d20b4f5e39b8f5d3b6e571"],["/2021/09/21/命令集-2/index.html","4540a6efe0693472387662767330a965"],["/2021/09/21/命令集-3/index.html","69efdc8bdad8627046fd8bc665ef6fda"],["/2021/09/21/命令集-4/index.html","335388a7b592b09adbec0a3a48d0280d"],["/2021/10/03/socket学习/index.html","e59c7676a44c509c515eb4bdd0870ff2"],["/2021/10/10/dwm入门/index.html","24ff5f9e1f37e4080673a5e88ac16679"],["/2021/10/10/安装ohmyzsh并配置/index.html","7f34de0edcea3b244b605535ae446bbb"],["/2021/10/20/css学习/index.html","e69908952a8a1fbaaebd66ea5e98b781"],["/2021/10/20/wm入坑/index.html","9de2bff8732e27de5289dcb7d0714242"],["/2021/11/03/微信小程序学习/index.html","430974009d315399f3a2c2059983ef2f"],["/2021/11/04/css揭秘/index.html","ef4cacdda8c0c7703f3e19434231c320"],["/2021/11/05/css-练习/index.html","ced7e14880bca0e2d68c84d768679e6e"],["/2021/11/21/命令集-5/index.html","eb63c449e8d869ae84a3645935fe8a2a"],["/2021/11/21/命令集-6/index.html","d4072d2d8a97044cd235e6f9f8278d0c"],["/2021/11/21/命令集-7/index.html","ca9ec2803a447d5a1ea0522c5928d8d5"],["/2021/12/01/搭建wordpress/index.html","6467e0388bc2bcb885a40ed99ff76641"],["/2021/12/08/python操作百度网盘/index.html","794f2ac29b535ea753b6c60783453716"],["/2021/12/14/js爬虫/index.html","fcb7fb08b58c18cd733c9f90f4acbd64"],["/2021/12/25/为网站申请ssl证书/index.html","9f4f977c67f687d98880a7234f208bde"],["/2021/12/29/使用七牛云为网站提供服务/index.html","1f66980cd6588ff8f15102bfef1fc316"],["/2021/12/30/jQurey继续学习/index.html","b0a112ac88f27b888ab5be728d70695f"],["/2021/12/30/jquery学习/index.html","adfeebe4191783b9aad9ba58c010fdba"],["/2021/12/31/vue学习/index.html","b1ba67e2188e77b25338ea65baa57285"],["/2022/01/02/疫情自动打卡/index.html","01897db0b8587cea7abd928e893a27fb"],["/2022/01/03/javaweb初体验/index.html","5de369f7d906b5c72e30fed3ee7fbc23"],["/2022/01/04/codewars练习/index.html","69553a92c4270ba4f1bb9f39ab956ab1"],["/2022/01/05/Spring学习/index.html","bf1818adccf78d7dcc8a8b3a04b8ace3"],["/2022/01/05/vue实战/index.html","c0a00ccd24f6e44769e06328973c08a3"],["/2022/01/08/gdb-gcc学习/index.html","f3271c0b0c1540318cc052d73ca67c38"],["/2022/01/11/python-opencv学习/index.html","41f4ca4e6065f40030cf1e18a06d93ec"],["/2022/01/12/汇编实战/index.html","adb8e0f7430279035757674b168509c2"],["/2022/01/17/pandas学习/index.html","20084a1d031d2c8600c0940bee54e808"],["/2022/01/19/可视化图的工具/index.html","a6e6083e929d62802f79214299f8fc65"],["/2022/01/19/机器学习入门/index.html","b1d6a12656d68a8fe9c403b9bcdbb782"],["/2022/01/20/cousera-ML学习/index.html","1d2fa27ceeec4dc1d8411c2550f75e79"],["/2022/01/30/typora解绑后出现问题/index.html","5f2576d8bb98540dbd5a87601215cbb4"],["/2022/02/03/NLP学习/index.html","7c5c5a59fb310df7c0b574c705176bee"],["/2022/02/04/Web漏洞学习/index.html","129e0639516a5cb190665125fd2b6e7b"],["/2022/02/04/pyqt学习/index.html","6bfe9ac7ec7e98b045d35a9774009058"],["/2022/02/04/python爬虫/index.html","d00d369cdc90e1fbb8e9198abbd56f5a"],["/2022/02/18/Electron学习/index.html","880057577166622eaeecfa49e2820f60"],["/2022/02/22/疫情填报字段解析/index.html","1e94e1dc26c3c2fee507e88f72032547"],["/2022/02/24/Bomb-lab实验/index.html","a1708eb0c58e7545063dc4360424b927"],["/2022/03/05/nginx学习/index.html","51e2f8ad66bd5fd2e4d8d0913b413066"],["/2022/03/09/汇编原理课程学习/index.html","9fe9275d5f69ac42738430e4506b06ee"],["/2022/03/11/Keras学习/index.html","1e8bfe050dbf29e6874230c3ccace24b"],["/2022/04/01/graphviz学习/index.html","87a468ea69f2ffdda015bad2d3bb7a0c"],["/2022/04/07/django学习/index.html","1bc25f91c7350930294db86646042c5f"],["/2022/04/11/密码破解学习/index.html","8d62ff70609d024abd991bd06656dc0b"],["/2022/04/12/flex-bison学习/index.html","f39f65cc74e86d54310f29823cd8dc36"],["/2022/04/15/pytorch学习/index.html","6ed5745f7bef53ed5c2ae3676b5cf58a"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","858233f139bd7b256ed474f05ef54fee"],["/2022/04/23/写一个音乐播放器/index.html","39de45334faef524c61de34557190d42"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","1906b4a02544f6a8a8344cd364f0b521"],["/2022/04/30/GAN学习/index.html","e167536d6d67eb3fe6f32a963cfaa85d"],["/2022/05/02/html精学/index.html","db8d05b9dcf55a8588788d01c2068b74"],["/2022/05/06/write-a-compiler-by-yourself/index.html","1f3be7b95d0005eafb00402a0280d280"],["/2022/05/30/acwj-01/index.html","e7edc176b605a5ac379926ea2281d294"],["/2022/06/14/animeGAN/index.html","7a722c6352a4a0f9c12cb23d9cee78f7"],["/2022/07/09/c-与算法学习/index.html","d085b7550be1a5f8fef8f759b13bf9dd"],["/2022/09/19/flask学习/index.html","0579b90d66f3a10dedbbf60bfbfb29a9"],["/2022/09/22/cs224w学习/index.html","2ae32f142db6c8c7f4281921dbf9d166"],["/2022/09/28/记录一次wp重装/index.html","748b175d0351e4069ef22396cf973273"],["/2022/10/01/Obsidian学习/index.html","c967e5debddc9670da96efc71275073e"],["/2022/10/08/vue-element-template实战/index.html","ef794d02da88d8e57b27ff4934c95960"],["/2022/10/25/vue网上商城项目/index.html","e046a058d1a591f9854e28dc93852d92"],["/2022/11/11/leetcode刷题记录/index.html","677659a826dc7e9aca5d08b70f7f3124"],["/2022/11/11/使用overleaf优雅地写文章/index.html","71cc2c8f9f89f35cd4c221f3ca217634"],["/2022/11/22/磁力链接与RSS订阅/index.html","7a68334d45ea8fc0ec29208e4f591996"],["/2022/12/11/uniapp申请获取地理位置/index.html","70718092fbf3ee07982c113692d44adf"],["/2022/12/26/pr剪辑学习/index.html","cc275b99d02b090f991d5b3c25fa6bca"],["/2022/12/27/css中的flex和grid布局/index.html","dca7c6333552699e93f2d869b11d2171"],["/2022/12/28/Flutter学习/index.html","e43df6fcfd936784a79d79604d88fec5"],["/2023/01/01/美化github首页/index.html","c0c285ba81cd3cb368b5ef0eef9810e7"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","a6122581025266d7e161b08290d278c5"],["/2023/01/04/构建微信快捷发布文章工具/index.html","fc99dfb523c00b0c913685b6f1dfc911"],["/about/index.html","c284506a08bdbc0250c776ea904e440d"],["/archives/2021/04/index.html","50818eab5371141ce6c757381974f7b1"],["/archives/2021/05/index.html","218b98ea66fb5ab44b40a9abc469b9f7"],["/archives/2021/06/index.html","9af06557fc0226a91cb741783c909639"],["/archives/2021/07/index.html","81e8a3fba413227e5042beb73395192c"],["/archives/2021/08/index.html","4e129f4c7cff2c7a74705de7d3794954"],["/archives/2021/09/index.html","cd27d3915c8cd9665a64a0fbd2f89ebd"],["/archives/2021/10/index.html","8c5fd08dcd6712c5adc846e65ac8a23c"],["/archives/2021/11/index.html","97d8200a4cdfc315e2b7e3ed20793d8f"],["/archives/2021/12/index.html","c7db66f951bde585e5070f95e626fb8c"],["/archives/2021/index.html","6bfdf54b36e5502d92232148a7320518"],["/archives/2022/01/index.html","18e7ed55ea6aecf11808c887cbf7f69e"],["/archives/2022/02/index.html","9d2abb096a7eb1bd88c9940ac13d024f"],["/archives/2022/03/index.html","a7342d7d0640784fde895f16f1e77dff"],["/archives/2022/04/index.html","bc074f76485fe68fc0dda686de482278"],["/archives/2022/05/index.html","c51c0f42e9a178b12191175ffc23ea4f"],["/archives/2022/06/index.html","270c65011979e6ca8ba3f84767823a38"],["/archives/2022/07/index.html","2083fce838034141799e00e2dc4bbc2b"],["/archives/2022/09/index.html","63e240ccb0697e5f584223fda01cdcff"],["/archives/2022/10/index.html","08ff532cbb4500a8d917a2f5e380fc59"],["/archives/2022/11/index.html","eabbed9b6b1ef344a8446af4ca6a8704"],["/archives/2022/12/index.html","3fa97cfa489e5c60d39cb97af3cd1a0e"],["/archives/2022/index.html","d0515252c4ad8814c4ccbdc3c3bb2a3f"],["/archives/2023/01/index.html","7d6518e6b73a7af02451792d9a7225b8"],["/archives/2023/index.html","43f97c9cb4f01e03a6341c58cd2d1c64"],["/archives/index.html","7c2d255ff686bee628241f528b210f7a"],["/archives/page/2/index.html","174bf0ac1c3c1671618a1b8f20735167"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","1bbeec4efbcd233fcfeea379cd3b01e4"],["/categories/ML/index.html","9a0db5c4696fbf54052820c610b9de1d"],["/categories/Nginx/index.html","8fd1662e29b2f124ee372521fef423b9"],["/categories/Spring/index.html","357a10f5e1bd315a60e309d16e5272a0"],["/categories/course/index.html","ac6aeb5a5d2eed3dedc99d16dbfdbf3a"],["/categories/django/index.html","4bfb75d6014609a3cd4b36c4e4ec95f7"],["/categories/fun/index.html","482df1c5a0cdec97957837a83dfef980"],["/categories/gcc/gdb/index.html","b032515d860448d5926ce3c648bd22e7"],["/categories/gcc/index.html","aeae3b59c6318078dec342c75ab43e55"],["/categories/index.html","aa62794072114626867d799123e190d9"],["/categories/java/index.html","6bf230b64ea087e8554586317b694ab7"],["/categories/python/index.html","cef44172d46f3df4e82041f84b7946c6"],["/categories/study/index.html","816d20b1447ca7856bdc535f6747cd11"],["/categories/vue/index.html","b5f60f32e169def7e0a44e0ac4304897"],["/categories/误区/index.html","472b092fc17ddda412e8e5e02b982bfb"],["/commonweal/index.html","0e400d68b1fef7ab1961e9fcffba8321"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a5ae33f95ebc471c801926eaccd54dd0"],["/home/index.html","9a660d7a784a8b69f0058239e77af67c"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","0181fe81f8561ed66f897e14f71287ee"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","d696b3f20a79e7d78f5b0ace37178369"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","04ed8b0ac022bde41fe0c808128ed304"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2f66f76bb4b993d9dd271687feae70ea"],["/page/11/index.html","8f9b1272fbbfb4076e56345f210b6cf1"],["/page/12/index.html","d685e3d4378b3421836f000818a90f79"],["/page/13/index.html","4661d470ace1d440585edd06b784674b"],["/page/14/index.html","011c569928446b29891ca07679ca9d16"],["/page/15/index.html","4dcb93ae5f2c3ab0754ab51a7d90eea7"],["/page/16/index.html","2b77d2142b3a448218efd57876fb2795"],["/page/17/index.html","4468b00249014449fb08b4d0f6b0698e"],["/page/18/index.html","e10018c3296911224744c0ab7a74daff"],["/page/19/index.html","2d21d5a281dbfff568a7a62726e0e995"],["/page/2/index.html","55d0b96cc4b925fab5a9c636c76f1a0e"],["/page/20/index.html","9ad9d08d66371bbfdd9e7306dd009ed0"],["/page/3/index.html","7af18589dbd3c2d6968bdc89960da520"],["/page/4/index.html","b5ac444d5c4514cbfde9bd1e7c8c4645"],["/page/5/index.html","27e7eb9751799cb78f5dd6c34c592a5e"],["/page/6/index.html","d08a985e59b340de94244f63d9a09358"],["/page/7/index.html","5f93fb391ee1b96f7dc8a5311c44e898"],["/page/8/index.html","64d3d4973eec8a2ed1f78fcc1f45d34b"],["/page/9/index.html","154bb11f7dfd1564961052fbbf98b33d"],["/resume/index.html","0264af8092cf8a73e688d23052218add"],["/schedule/index.html","008a3b7184270c6cd47a32085a0e0dd1"],["/sitemap/index.html","d743a7d53d6e9e959cbf1a3d3d9ae102"],["/sw-register.js","571ff084851896b99ae658280e8753d2"],["/tags/AI/index.html","a75190cffbe91e5d1dc5559669529415"],["/tags/BT/index.html","a837e1bfd1ca2a713e563fa0005cb9a8"],["/tags/BaiduNetdisk/index.html","f3edca6a9407d1720462194f908b3470"],["/tags/Bootstrap5/index.html","c5813c3a5d86ef9732fe94178de42866"],["/tags/CSS3/index.html","1cd08dbfdec8f3675cd25935c6f7f101"],["/tags/Electron/index.html","9a8c81dacad40e76b7962a335c0e3439"],["/tags/ElementUI/index.html","d08629ae23585da37d53e9e521a76911"],["/tags/Flutter/index.html","6f50ca10edee4451622c2fd86fdd92bd"],["/tags/GAN/index.html","c1b407fbbf67fd0c5532439bf44c369f"],["/tags/GUI/index.html","a9bc339486159f93c62c0165fbdaef6d"],["/tags/Git/index.html","9cbc88caecb8880e116d3a18135520d0"],["/tags/JavaScript/index.html","2dff7a5895c2156678aadd4d8c540b01"],["/tags/Keras/index.html","aa100f499efaf1b9ad9040b0dbbe492a"],["/tags/Linux/index.html","0844f04d44a7d5a094fc87e3c9b6524e"],["/tags/ML/index.html","0303374fa1bf5885e305274aecbba5e5"],["/tags/NLP学习/index.html","115108ffd1a61e454ce1b68be20f5d74"],["/tags/Nginx/index.html","af88ef5c62d0d86b93f1600406f4c3a0"],["/tags/Obsidian/index.html","1475f3e0c63a7904a10a55a7e9c4da81"],["/tags/Qt/index.html","4bb85586bf777e7a2496ed30e4b83991"],["/tags/RSS/index.html","73e880816dfc0414a7a5c0e1a813af48"],["/tags/SSL/index.html","9b1ea7a1ed4703a818582681aee4ab77"],["/tags/Scrapy/index.html","9ae4abd61abae5e7d400b7af54c7fc10"],["/tags/Web/index.html","b2a68aaa41a909774580144b7108e6f4"],["/tags/algorithm/index.html","d994ccd98ca4bbdcf276cd8f1357749f"],["/tags/bison/index.html","28de1e1377aa338a99996c6d8fc85a61"],["/tags/bomb-lab/index.html","4e0eeec291f8923ff0a91021a0f70862"],["/tags/c/index.html","a463d316ffcbc22c1c097b08f394b8d2"],["/tags/cheerio/index.html","a92b5330cf55c97bc4e711d0037b9680"],["/tags/codewars/index.html","3afed68d23b6f722cb5c71d7513f53c5"],["/tags/compile/index.html","0e66d3f7649877aa84b890d7f77909a7"],["/tags/compiler/index.html","58b9c4747af28b221e70629c87a943b0"],["/tags/course/index.html","a294cfb18f0cd2f0ddaac49143e8df90"],["/tags/crypto/index.html","eea847dd0d34c3fe62cfb7d058d5599c"],["/tags/csapp/index.html","4937ffb60053060a4c4d24211221ae25"],["/tags/css/index.html","c44e3e40a2401cd85aed9d1e90318805"],["/tags/data-structure/index.html","29f895d84e06e2d807b34f43037054db"],["/tags/database/index.html","f158004e175292e4c8a72176663770ff"],["/tags/deep-learning/index.html","2453d65e8ba2be4a0fc5962da26b2a8f"],["/tags/django/index.html","488513885013a6c23d452de3b0987081"],["/tags/dwm/index.html","7db1c69163634feb871abee108463822"],["/tags/exercise/index.html","692ece22cf9663165a1d704fab8ba295"],["/tags/flask/index.html","920fd62ec63e1c3db214e460cc803796"],["/tags/flex/index.html","e0ed91ef45e37461af6473dba8d10ab1"],["/tags/front/index.html","88002a30cfe5968adb244b6e4b605d00"],["/tags/gcc/index.html","be27bc2e6d6d50ed8664092a95d7d3ed"],["/tags/gdb/index.html","50d95a39821d7a08ca3ff9657d1a7ce6"],["/tags/github-profile/index.html","12dcf48d2a5287d492346f1ae38f9cbc"],["/tags/github/index.html","6813e15ace716410b5f328f602be7337"],["/tags/graphviz/index.html","5be3b752cd2ae7baa4edf4b5b166973b"],["/tags/grid/index.html","acd09c8cbfceb338885c664c5c3feac8"],["/tags/html/index.html","eb4bbca1651f462dc5993d319ea8c364"],["/tags/i3wm/index.html","44ff7745c577d8506287fa4eb3ae29cc"],["/tags/index.html","8fb053a7a01ce31b8bb09229fc799707"],["/tags/issue/index.html","8203211bda892e7720ff655796894ec6"],["/tags/jQuery/index.html","cfd75d23fa69b3d2567a574579287d9b"],["/tags/java/index.html","6218857467e9ac5ffc7bc6ca76e8d055"],["/tags/js/index.html","d930253e2f0733b1f111847dba35ade7"],["/tags/latex/index.html","0a39e2fefa73896eee4b160f1250d828"],["/tags/leetcode/index.html","5d4f3cb779a5159ff54320e71e99c77e"],["/tags/lex/index.html","55a1edbb46e669b25fc7ec004d0a19dd"],["/tags/material/index.html","d23def9f185aab0e9007ef6b684d31ac"],["/tags/music-player/index.html","0c93c31e845c0fdfb0fb9a03801efcf7"],["/tags/nodejs/index.html","db4b8150918b3bf8d7792c6f9b3682a4"],["/tags/noj/index.html","c53e4923807c4160f0c598ea7139ef41"],["/tags/opencv/index.html","0d61c0aef38f37e2924e38da34c42438"],["/tags/overleaf/index.html","e3f81b9c6b25dcc5993d0472cee1b42b"],["/tags/pandas/index.html","7f453fb5f41db983885780e4170fecfe"],["/tags/premiere-pro/index.html","00cebb13c9e01718c4cd96250b95ced4"],["/tags/proxy/index.html","66a9322ea843012916341593afbea223"],["/tags/pygame/index.html","9b9f7b4de2f9c671a2963cef4a0b7aaf"],["/tags/python/index.html","031f53c3b028a2719a7fbf724d3ef480"],["/tags/pytorch/index.html","0a6af84a7908c9f8b8472cf6283688ed"],["/tags/reading/index.html","bae0ba6fb5fbaba7df52baf5b2adc2d4"],["/tags/request/index.html","36a83d2e811bced760cc6b6c1647343b"],["/tags/requests/index.html","e020d2df358e0d577ad24a167882be19"],["/tags/security/index.html","88729d2a89f47ac9ff0c777bcdad479b"],["/tags/shell/index.html","7e813266b1d92f205aebe6a7fa7095f7"],["/tags/sign-in/index.html","3037c1a7dbde4d9525f90709f41babd4"],["/tags/socket/index.html","ad9b3bfc10f2d6d13c13994693456775"],["/tags/spider/index.html","05e045339ef38d719e6cbd0407cf72b8"],["/tags/splash/index.html","46ce702df8a1d96cd1783687e3179e93"],["/tags/superagent/index.html","5aec0e62f394cac2c8eecc6cbe4a2294"],["/tags/tensorlow/index.html","caa13e88ff72ff4e0a8b7a4114a670f8"],["/tags/tex/index.html","20fc47f35e63a949ae081c9b3b429e78"],["/tags/threading/index.html","844bb9c71c92b97acd34620e5a72660c"],["/tags/tkinter/index.html","17f197f0d47152c6cde5e6a06b01d95d"],["/tags/torrent/index.html","c9bc21e41dcb0a1123efb584ebb2e856"],["/tags/tutorial/index.html","c0df4608721591237062377d09efd2c9"],["/tags/typora/index.html","51001729b78ee795aef2d463920889cb"],["/tags/uniapp/index.html","8492c0cef7e0a993667fa0341e2dd7fa"],["/tags/vite/index.html","398c4015faf3d4146bb1f6f56148a7e3"],["/tags/vue-element-template/index.html","b396c03f4c6e6422acadd166cc7a631c"],["/tags/vue/index.html","f2779f06ff4388b4a1e6305ffea7e3a1"],["/tags/vue2/index.html","a84a78c413c30b5f54efad9a02b2a851"],["/tags/vue3-x/index.html","9998686b6d23e33df88b0e50440f644f"],["/tags/wechat/index.html","233fc47cfe69a5eaea5161b0c8de393b"],["/tags/wm/index.html","e800f1b345478e9dbbcf26a5b8c23f1c"],["/tags/wordpress/index.html","12ab5240e6e30f7b9b1e37deddbd7ecd"],["/tags/workflow/index.html","e1c1e261be18ceea0096bf271e2fd34a"],["/tags/xpath/index.html","2fc1f0cf656bb90863e381f696ce4de2"],["/tags/yacc/index.html","bfa8d34e0b3b473f60526ef290f3d0ad"],["/tags/zsh/index.html","a8e06a5e012234f6ad10c32606ca943c"],["/tags/七牛云/index.html","baab8362feb0399d1743634e4f93b061"],["/tags/函数/index.html","41a7b9bb118fc4df4b707c9192337f9b"],["/tags/剪辑/index.html","ee478a6af4b8b1754a151fd9148eaff5"],["/tags/存储/index.html","2a294c446940f857a49293fe5f9518ab"],["/tags/实战/index.html","b2d3d3acbab0de0ec97a8c5b43b7f333"],["/tags/建站/index.html","7901f9a1266e2c472e8ea4f6a0465b00"],["/tags/微信小程序/index.html","0efe1528734129a734252db41e7bc5d6"],["/tags/指针/index.html","d52eb7eea631a97a20cae849d671cfbd"],["/tags/汇编/index.html","ccedb8c38347232dab368d7c74784da9"],["/tags/爬虫/index.html","261b0a5ab02b7946939bd77aee0b3a53"],["/tags/算法/index.html","4629ef17d042b79460ae261cccbaaa1a"],["/tags/编译原理/index.html","782267893c3ab97caa5bfff6f9a0a8a7"],["/tags/获取地理位置/index.html","51c3121228d23f496eff477c5808f09d"]];
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
