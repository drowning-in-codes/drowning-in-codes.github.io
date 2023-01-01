/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","bb7b542070008629a61c1d0aac076c98"],["/2021/04/20/稀疏矩阵/index.html","67760f89e2f4171fdb78359777a93e80"],["/2021/04/23/广义表简介/index.html","aa714c8928c157871ee5cfb183ebba29"],["/2021/04/29/关于指针和函数/index.html","2fae69fcfe363922ff8ec05e6262c1f5"],["/2021/05/10/哈夫曼编-译码/index.html","e21ce338483391ee0481c9d7acda3985"],["/2021/05/17/数据结构noj_2/index.html","06251b4279569b83daa3c0bdf4876d5a"],["/2021/05/30/数据结构试验/index.html","5ebebc06016ccf8a786d4bd6f803f38c"],["/2021/06/12/数据结构noj-3/index.html","3b278fc4d2d9e29203254094e09619aa"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","327f571ae61185f1b8e5eddba36cc3b4"],["/2021/07/08/课程资源分享/index.html","ea5e03d69086656ede65f99c0061d254"],["/2021/07/20/Scrapy-下载图片-文件/index.html","8c7b3b9c789204ced24e882e465d28c8"],["/2021/07/21/Scrapy-动态网页爬取/index.html","2b701d98c552af0b37f66f54d3d9ef0d"],["/2021/07/21/疫情打卡/index.html","9591da89919fccf9ed7c028cf1b71d0d"],["/2021/07/29/Scrapy代理设置/index.html","b8c10780f9ac8559dbd405409aa9dc3e"],["/2021/07/29/数据库认识/index.html","2dbedcd62860a83bd797e8027c8b9713"],["/2021/07/31/Python多线程学习/index.html","e88f6763496dccaffed4e082baa58a74"],["/2021/07/31/tkinter-requests练习/index.html","fe7997f7fa259eaf998e236088516c93"],["/2021/08/10/Git学习/index.html","15ff0779d30059cd0ad83b6bc5633a48"],["/2021/08/15/pygame实践-1/index.html","34853bd43d79bf0ba94a5ef0fee8c43e"],["/2021/09/06/微信小程序开发/index.html","0b1ecbb74e39d243d311678ea33a0d7b"],["/2021/09/21/命令集-1/index.html","c714fcc2d4401742350549f33aeec57a"],["/2021/09/21/命令集-2/index.html","629ba7980778528412c9608733d839ed"],["/2021/09/21/命令集-3/index.html","50879c85d7011d91239aea64b01653df"],["/2021/09/21/命令集-4/index.html","97606f2353d21b7a996c30937fe5a42b"],["/2021/10/03/socket学习/index.html","3973531f45e9bfa52b6f2143fb055f22"],["/2021/10/10/dwm入门/index.html","74e01619dee40706ab2c6675894ef6c3"],["/2021/10/10/安装ohmyzsh并配置/index.html","67b4774f93250364e1188bf645505d22"],["/2021/10/20/css学习/index.html","0aa81529894419af46885cf7ac7a9f50"],["/2021/10/20/wm入坑/index.html","9faac9201ea4cae055482ce34c27c36c"],["/2021/11/03/微信小程序学习/index.html","81c3da36b2a2059c02b0aeebaa094eaa"],["/2021/11/04/css揭秘/index.html","ddab736be37dd5fd978d87e4d9f2c399"],["/2021/11/05/css-练习/index.html","0c182b07e9d24147b9c685f8ce31cf07"],["/2021/11/21/命令集-5/index.html","99c774883cd1ef6cfd94d3369aac5584"],["/2021/11/21/命令集-6/index.html","93d652ec63f5b466c41f2d6bbb95f941"],["/2021/11/21/命令集-7/index.html","b3f935cb05e0665ee17ffda9c839344d"],["/2021/12/01/搭建wordpress/index.html","be10913787bba2184f221065fb2f687d"],["/2021/12/08/python操作百度网盘/index.html","7aaa3ef882b90b03bf9cbfef3a87569e"],["/2021/12/14/js爬虫/index.html","1e60f58ad767155573d093f7b8fae711"],["/2021/12/25/为网站申请ssl证书/index.html","4bd1765dc809c432ec9ec688c76e97bd"],["/2021/12/29/使用七牛云为网站提供服务/index.html","fae1e373b6e5975efb6f68560e755a22"],["/2021/12/30/jQurey继续学习/index.html","776f969d201799aface9926f78dde747"],["/2021/12/30/jquery学习/index.html","6e2645eaae87c677fdc2bbfb2a11a4ed"],["/2021/12/31/vue学习/index.html","76d597d08e96884f34f0288d52e8f29e"],["/2022/01/02/疫情自动打卡/index.html","b3a09c31866fb2fb8722e0ede5a701cd"],["/2022/01/03/javaweb初体验/index.html","d04a6454e95c0cbb5b32d8f8f5c21b74"],["/2022/01/04/codewars练习/index.html","250e0492296891d6449747b39fa63709"],["/2022/01/05/Spring学习/index.html","81915c20a60028761624e85fabd9e7c9"],["/2022/01/05/vue实战/index.html","619043abe72a6edc6f863664c382b907"],["/2022/01/08/gdb-gcc学习/index.html","a12831e388b7e3fd9a3f1c7291cda586"],["/2022/01/11/python-opencv学习/index.html","a9273c75c12c1ffd3a5ea48061744968"],["/2022/01/12/汇编实战/index.html","2d2535f4e428151e9b5aa7bd763a2212"],["/2022/01/17/pandas学习/index.html","59fe97f309888ae71448b0f40fadbfd6"],["/2022/01/19/可视化图的工具/index.html","71d370c73cbaedf1b04592f91b54861c"],["/2022/01/19/机器学习入门/index.html","db2ea85565594f291426543d4b2043f7"],["/2022/01/20/cousera-ML学习/index.html","8722195c36c8727a97efbf4fa34afbb8"],["/2022/01/30/typora解绑后出现问题/index.html","1725762ba2aa413070773793e77c524c"],["/2022/02/03/NLP学习/index.html","074a7056a6976f8668b2bbbcc7f34a45"],["/2022/02/04/Web漏洞学习/index.html","88abad33bde5068fc574b579d04da2f2"],["/2022/02/04/pyqt学习/index.html","c18e4153d60f9ea33ba0018f38724c26"],["/2022/02/04/python爬虫/index.html","52fe0af82e3dd89c0b49808c4ac1c7e9"],["/2022/02/18/Electron学习/index.html","ddc0c9dff50a791cb9159ddaff023b4e"],["/2022/02/22/疫情填报字段解析/index.html","f10931644a53707468b3cc93609a987a"],["/2022/02/24/Bomb-lab实验/index.html","30fcc91966e7acb6bab22a4849735896"],["/2022/03/05/nginx学习/index.html","b716b0f7dc63532afcc30d085cd9c690"],["/2022/03/09/汇编原理课程学习/index.html","218b66071687997f053b79533c33b862"],["/2022/03/11/Keras学习/index.html","3a9da4ed51d86ad8af7bf5fa40adc06f"],["/2022/04/01/graphviz学习/index.html","a6dedadc2a6ba47cce31a328d63e85ae"],["/2022/04/07/django学习/index.html","3c81c706b1c5e19b2e5e773a0f01d0db"],["/2022/04/11/密码破解学习/index.html","772256ae1d00409759b4588a9b14aad8"],["/2022/04/12/flex-bison学习/index.html","0f4e560e414f0ff9f2770db2e66da52f"],["/2022/04/15/pytorch学习/index.html","659ef5f9dafcb3d4b132000ed7d0d9ae"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","d2187abeaf152bcb8d1e08466647af99"],["/2022/04/23/写一个音乐播放器/index.html","c607cb9567990a87c19ba2eda0b47031"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","2246d7ef6601874b8cc209b87c86ada9"],["/2022/04/30/GAN学习/index.html","c29b65791c2bc982ca11f59390993f09"],["/2022/05/02/html精学/index.html","df91e88b2f69600b978cd39996308929"],["/2022/05/06/write-a-compiler-by-yourself/index.html","8be1af1365c276d67a80c7643dfc7b4d"],["/2022/05/30/acwj-01/index.html","0b36c8561c638f8d6d4bf4c9e83ecee8"],["/2022/06/14/animeGAN/index.html","c3d060bf326b0d529064557440dababc"],["/2022/07/09/c-与算法学习/index.html","e8822cb17f48d696ac3cfc2150c56653"],["/2022/09/19/flask学习/index.html","6cbdd76ed072c4b395fa835adf7c9fb3"],["/2022/09/22/cs224w学习/index.html","fcaba6bc911d05d137c600ad11f46456"],["/2022/09/28/记录一次wp重装/index.html","939091b2273abb41e4dafecbf347d226"],["/2022/10/01/Obsidian学习/index.html","e6f6d5d3217f52ac701046f75898b47f"],["/2022/10/08/vue-element-template实战/index.html","002cdf72fe62656cc09454b225f705dd"],["/2022/10/25/vue网上商城项目/index.html","e98e3cea95b1c165ca77c3f96143c3b2"],["/2022/11/11/leetcode刷题记录/index.html","c34bdc82e4dcb45b199b5730b3954460"],["/2022/11/11/使用overleaf优雅地写文章/index.html","66b0f3c32c5f88a472066186c2ef4825"],["/2022/11/22/磁力链接与RSS订阅/index.html","170134342add3fad5be775c9172bbcec"],["/2022/12/11/uniapp申请获取地理位置/index.html","577709a0cc215b3c97d361bbb0e6bc4f"],["/2022/12/26/pr剪辑学习/index.html","92d00834a597bbadfc4bd224e6b551a9"],["/2022/12/27/css中的flex和grid布局/index.html","e0879ac4f55ce10ffc00a85d453e61df"],["/about/index.html","ba566dad703982d7723e5d0addd4370f"],["/archives/2021/04/index.html","d4a2c659fa1ea5e4d1c3caf8b37e10dd"],["/archives/2021/05/index.html","ab2e6f40a1af1615a4954b91230bdb19"],["/archives/2021/06/index.html","5ca21417bdab66b3b50f3832c1c062d9"],["/archives/2021/07/index.html","69cc8ea773f0a78ea4df95896a8b3c77"],["/archives/2021/08/index.html","31f417a78f97442b6fb563fa6422ed60"],["/archives/2021/09/index.html","b2906696a3b5026b32592f40a0bdf889"],["/archives/2021/10/index.html","7467e3979e66b5e829919edf5aa82146"],["/archives/2021/11/index.html","2ded4b43e4034d3bfc3f496f6371e6e8"],["/archives/2021/12/index.html","64d2cd0932474576cd762cb9c569c24c"],["/archives/2021/index.html","c3c4c330fdaf1f7b6a6221ea1f0e18f4"],["/archives/2022/01/index.html","88745d8479605c893a7bc969f2248369"],["/archives/2022/02/index.html","e14340674c142c7d7d1d347f2e85dc04"],["/archives/2022/03/index.html","7e2f5ee87b127295628c2778ac8f1d07"],["/archives/2022/04/index.html","2bca2b0edcd43eb50c96096b845bce0d"],["/archives/2022/05/index.html","5f2d644ab83af005f6d169470d80d12b"],["/archives/2022/06/index.html","0a820535a7d56a74f8d0fa90c10e0d38"],["/archives/2022/07/index.html","fcd42ea759865a280ebca3d78ab3a6cf"],["/archives/2022/09/index.html","15f3574b29189c1c43af3c94ebef0278"],["/archives/2022/10/index.html","be6a40e4aa8a5576904dfa0e1190a0cc"],["/archives/2022/11/index.html","ee24f2ba9c072f5bdaf47abe88a7db9a"],["/archives/2022/12/index.html","ecd9d1e74472188986afbcfd3557f95d"],["/archives/2022/index.html","1ebb1ed20f6c53d040f6f89933a86a77"],["/archives/index.html","853c11900d5d482909623487964b4216"],["/archives/page/2/index.html","66c4045edf9f3e9e5fae91f8560e6348"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","4df2b6277b359eb1cba5e4165a96264c"],["/categories/ML/index.html","14ce1591908bbf8dd1b19773bd96cf15"],["/categories/Nginx/index.html","b0e18305970db12e2e153cc6d1f8a41c"],["/categories/Spring/index.html","64ea1aec892024765175c6a08a243d89"],["/categories/course/index.html","b413fcfa8ba483f61a8e17a3f4635dab"],["/categories/django/index.html","2f781b8b9d91fb27a43ed127bffcf5d2"],["/categories/fun/index.html","86e969d4fd1b453a4fedf67adaf0e008"],["/categories/gcc/gdb/index.html","c8bcb9d43a2d831c2cab23c257869329"],["/categories/gcc/index.html","04566456557ebd0ebdbfccea1bb9b8c9"],["/categories/index.html","d1c3fe504d85c8f4c61abf76fdaf69ea"],["/categories/java/index.html","547107cae9572f7a03e55b2f78eeda94"],["/categories/python/index.html","2196f54457a66b9a97eea959589e7ed9"],["/categories/study/index.html","2fd66b53c382ad245ec81ef143bee2b6"],["/categories/vue/index.html","74550f8731e25b7ee3cf8df6dd58a704"],["/categories/误区/index.html","4ec682bbd0b49332ff7a00706f5bb60e"],["/commonweal/index.html","642dca6b6b4c245191293d271049d363"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c40ec173cbed2d4c41d2deb3afef82c2"],["/home/index.html","d67a18b1b62d848ce0d14c6984a715f5"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","3509f768ab44729d2ae07c00f2576d8b"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","7b1f56a74d9ead8752d5a70830d4eb35"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","14a7138207fd54c2b675e1113a423a41"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2b6ccd12887987b28a4ef733630d55fb"],["/page/11/index.html","c2af68b974a290c771aa492be3328120"],["/page/12/index.html","7faac2cf5b20b3739eca4e32f93448bf"],["/page/13/index.html","414dfefde522d1309ba28f793f967c72"],["/page/14/index.html","2553a96eb3e8c86779ce2c618cd4c36e"],["/page/15/index.html","928edabebd15b337538de720c02607b3"],["/page/16/index.html","15e8ab6c445deffd046d7580101d5922"],["/page/17/index.html","aafb7c6fae52c5d784ad4860ceef9734"],["/page/18/index.html","2ca488a81a26c5fc705e9ec77c2677bb"],["/page/19/index.html","5f25fcb44c76aadb6aa89d67f8331297"],["/page/2/index.html","7ca7656829c9d4f0195ecfba7629df6e"],["/page/3/index.html","5001070fd558af8c254c6af3d66b8e4b"],["/page/4/index.html","d970a6a904293a6e15b6e3c57b44bdef"],["/page/5/index.html","f6ce898d41e15eaf4ee324bbde4c9da2"],["/page/6/index.html","5653f99923d8f10b3cdd2bb202e57738"],["/page/7/index.html","fb6f8da54c5cc22b27c3da92161f6647"],["/page/8/index.html","e9323c8d91219e990819981a5e757cee"],["/page/9/index.html","d6d48b7247bf37e194acfe8dca562115"],["/schedule/index.html","10258b5e2ca8814599f09d0d36ca35b5"],["/sitemap/index.html","4f2d108fcd823fe548da9d165a0c216e"],["/sw-register.js","f0dca5ede0c45efa80509235ab68baa3"],["/tags/AI/index.html","3d20fd692ee66b14bd073ee5ef5b07c2"],["/tags/BT/index.html","52aff9da847e0d8a028756abda1ddca6"],["/tags/BaiduNetdisk/index.html","7b5f640c8a9697a571bd0f6763452f77"],["/tags/CSS3/index.html","8a07fc73e1b1131fdcf485d0153776bc"],["/tags/Electron/index.html","a8f690f7bf2be1eb7e8cc4c8eabec8c1"],["/tags/ElementUI/index.html","64637721a9533aeea54a869018428f02"],["/tags/GAN/index.html","9b99df522db8b362514be6960222e275"],["/tags/GUI/index.html","07fbdb9f63a948331cc9ad63f2f553f7"],["/tags/Git/index.html","d563cf6e71de534b8376561cb6086f5d"],["/tags/JavaScript/index.html","64ef78bbb5448d928a6d5b506d37924f"],["/tags/Keras/index.html","187844b47082e71a0e26935a6836586d"],["/tags/Linux/index.html","d23c9832bb537fc21e45f82f5cff32d7"],["/tags/ML/index.html","8b1c040aab7e6a09660f15c2478c5320"],["/tags/NLP学习/index.html","7a98ae41ebc13957b0c35ac56032d8ab"],["/tags/Nginx/index.html","ad3f8fbbd38e7740b1281fe1b9e7247d"],["/tags/Obsidian/index.html","8b93e412588c5b3be2387afcde457bcc"],["/tags/Qt/index.html","874175f8d6d78abca9b77a0faa2853f2"],["/tags/RSS/index.html","460690b01a8ffd361272f12d85ab9488"],["/tags/SSL/index.html","b308309dc982a86e144602fb729d14cc"],["/tags/Scrapy/index.html","6e2bafdf505339ebd9ebd615d8a834a9"],["/tags/Web/index.html","489bc595ff206022c4f5f240a73de9ab"],["/tags/algorithm/index.html","fb07b54d03b4096b61374974b3530384"],["/tags/bison/index.html","4d98f4b44a2bf695bca7a6b80752defc"],["/tags/bomb-lab/index.html","06a71df20362d09976eb86631948e859"],["/tags/c/index.html","c0fb868577baf97f735ce4b97196cfa6"],["/tags/cheerio/index.html","cad1fa469216edee62442a6cef472bce"],["/tags/codewars/index.html","3d7c3883ca05ff78b3b549126c5a0806"],["/tags/compile/index.html","b482dcb220f892e67b11d8c3fe17bd2e"],["/tags/compiler/index.html","9647a67326bf8784023d911b8abdf988"],["/tags/course/index.html","0503b5e65e8aaad5502b756bce9f2f1f"],["/tags/crypto/index.html","ad084bb86453ba3a7253ebcfa4ffac65"],["/tags/csapp/index.html","7ed648425d7f86b1ee933266eccd69d4"],["/tags/css/index.html","0ad97e8d4133820c18e57c71b06b04de"],["/tags/data-structure/index.html","471bc393161f321d2381f2e9e93ef372"],["/tags/database/index.html","82d16eb02da0224e110299722af54fec"],["/tags/deep-learning/index.html","6841fe54ebe7cd6e6ee6533ef059ad48"],["/tags/django/index.html","090e754546de08e3fdc607327eaf3670"],["/tags/dwm/index.html","4a6dcde1e0f0b19a03006c53e2d7d395"],["/tags/exercise/index.html","a1c44467f13dcada94c307e8c1f0104f"],["/tags/flask/index.html","0086817fa63ab4711ac23c4e9ea97227"],["/tags/flex/index.html","2752eaf63a94ac5d73564dd662c6ae56"],["/tags/front/index.html","0d0ff4dae047cd28d19da41d5ab53bbd"],["/tags/gcc/index.html","9c0b071ca9c4aae777a2f5f5d1fdb2be"],["/tags/gdb/index.html","8987bd011d34538f72708fffd2795a4d"],["/tags/graphviz/index.html","f1b98204d14ff8e50f4749bd209e858b"],["/tags/grid/index.html","7fc654a9e8e4dacb51343127726a3060"],["/tags/html/index.html","acdacabc3d6e19e7dc368ff9905ee8d3"],["/tags/i3wm/index.html","73f251f67b7ca292546c14250cad519f"],["/tags/index.html","0e233972d312640184705f8b550dce8d"],["/tags/issue/index.html","5378e1ff918112e36f308bc185ed9932"],["/tags/jQuery/index.html","9f6baffe0f4a8c51619c1adcfcd1a43a"],["/tags/java/index.html","8b5e7101cdb0c910557a23767f74c658"],["/tags/js/index.html","dd001e61f639867d9e33a8558ffe481f"],["/tags/latex/index.html","679cacc345548f13e43d67af569c438c"],["/tags/leetcode/index.html","a311e5d0d81b286580eebdca613baaef"],["/tags/lex/index.html","c3e6e4ea6fc3b3b66d8f9c94fe3f90fa"],["/tags/material/index.html","8e50d52df5869ea271cbd2ee57d94b30"],["/tags/music-player/index.html","08d3871b8234fd41f7c6daf32ef9ca3d"],["/tags/nodejs/index.html","0189a8434127c1e217a623978b0843d9"],["/tags/noj/index.html","2f62a3a0a6ff5a58b7381f03f569d61e"],["/tags/opencv/index.html","6eeca5213a151a512c19c25919f9ec86"],["/tags/overleaf/index.html","caa1cb1d60449acf6a449867ea9b7ed5"],["/tags/pandas/index.html","6d601070df1c54a95e0c3fd8350fd6e5"],["/tags/premiere-pro/index.html","f83296be8dbc10b9f175ec6f5f58b005"],["/tags/proxy/index.html","2992c69f33fbd72f168f8aa77181724e"],["/tags/pygame/index.html","dada361939c651ee6aca01b66e981dca"],["/tags/python/index.html","197cd1c8511a75d72b25e2104e4146fe"],["/tags/pytorch/index.html","446b11e81f3dfc5b81d7905433c76a17"],["/tags/reading/index.html","1fc12df48b80672a9b77bee83d369287"],["/tags/requests/index.html","b8b96253e9214430898dc10ed6da9ef4"],["/tags/security/index.html","b86fad14df7827d5c65b31d083e65e1b"],["/tags/shell/index.html","c18266e8312ecd3b451262c6e6ac3cee"],["/tags/sign-in/index.html","1f4c9e423d0ae865934647c7b1952930"],["/tags/socket/index.html","df319d09a0df082833ab323e0f134190"],["/tags/spider/index.html","f002dfe25e882f2d0c2638437ca9bebc"],["/tags/splash/index.html","f533583c0b8825363ff17741efc7fbad"],["/tags/superagent/index.html","ee730753a5277f3e1c18888eb24696ba"],["/tags/tensorlow/index.html","a102c9fcf66118014e7f9ecb3c41fcab"],["/tags/tex/index.html","115b48cff718e566e4379471c6f729ff"],["/tags/threading/index.html","0f9b1124f9762f2bb76f14387b6adc64"],["/tags/tkinter/index.html","4090659cf42e75564f443c9ad4fb8c15"],["/tags/torrent/index.html","ab7e41c5b2b5e83fc9e01bb2ee150f7e"],["/tags/tutorial/index.html","aa4cb426a8aebca27111fd4830d19474"],["/tags/typora/index.html","f31e7e890f92f47c44debdbd5861c75d"],["/tags/uniapp/index.html","06c44fb7c1bd740c84cba3ae43cb3e7a"],["/tags/vue-element-template/index.html","9e5e2520b61e61ad8e76d4d9fb74c020"],["/tags/vue/index.html","d5dfacc8570efc5236c855ccb73c8afa"],["/tags/vue2/index.html","2fe46d9888a101c6f2c9d8a962092888"],["/tags/vue3-x/index.html","802d2195b444d7678b7715cca40da771"],["/tags/wechat/index.html","fb199507119bb766a55b942ff752a93d"],["/tags/wm/index.html","38041a31d40bb7f592efe6b9b830e2a9"],["/tags/wordpress/index.html","e31145527b8f9690aab93363cd1f2e68"],["/tags/workflow/index.html","46d65813d8b340d67b8fb918316031e0"],["/tags/yacc/index.html","13784edfc7dce948aa6430ba7c9d4027"],["/tags/zsh/index.html","ce4254715ba7fbc380dfa34dcde6fa2e"],["/tags/七牛云/index.html","df141388a2f39b1f4d63c49b7c8079ee"],["/tags/函数/index.html","a6998dac6396881262b1fbbb43661a54"],["/tags/剪辑/index.html","ec419bd463b4bfd0064907405cc27725"],["/tags/存储/index.html","80b190ad0ff02efc5f6c4c0db8170d56"],["/tags/实战/index.html","b36ed3398b861ae099a3ee7da24007e1"],["/tags/建站/index.html","f1453edf817f2ff654b5da69da69e809"],["/tags/微信小程序/index.html","2fc9bb473e1336a4c66026a2346e540a"],["/tags/指针/index.html","fc63201f8b882796fb103f1739dd56fa"],["/tags/汇编/index.html","1f7c920cc6cad1ad2fb7a868c18d6729"],["/tags/爬虫/index.html","c912155c41f6b8323fff91d931ac89a7"],["/tags/算法/index.html","2497958d9f3d784815c4fe4c89b0a3e2"],["/tags/编译原理/index.html","903684c49a2ac243003724f99d67188d"],["/tags/获取地理位置/index.html","355d09be5db39e46bac3ecbcb9abf719"]];
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
