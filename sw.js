/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c7bd9dc8bb668937ed429fa072690ec3"],["/2021/04/20/稀疏矩阵/index.html","7fbf954a0a000daf66aee5fd23fcd95a"],["/2021/04/23/广义表简介/index.html","e03926331c132e90a4953c93858d3183"],["/2021/04/29/关于指针和函数/index.html","5030110060e6d13a28db82867fec0e31"],["/2021/05/10/哈夫曼编-译码/index.html","a591cc215017a1c1d3b5a05c9dc4ba22"],["/2021/05/17/数据结构noj_2/index.html","fae6720ea67c77223db8212ef151e321"],["/2021/05/30/数据结构试验/index.html","2aeeeb8d3adb356945a515c9528ba4c3"],["/2021/06/12/数据结构noj-3/index.html","42814acab68830f05a0123c64b72c748"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","117e10a1f1fff2335a247443e52153cc"],["/2021/07/08/课程资源分享/index.html","a21d2531a9d47ce276a612449be4d67b"],["/2021/07/20/Scrapy-下载图片-文件/index.html","32212e81e3b16d6a5008dbae921713ff"],["/2021/07/21/Scrapy-动态网页爬取/index.html","1a7689ecf555f740cb3f8bf0c2fc2df0"],["/2021/07/21/疫情打卡/index.html","ffd6762d2d233a475db8019571cc077d"],["/2021/07/29/Scrapy代理设置/index.html","b31e40b460a6dc913fff7e997be6e0e5"],["/2021/07/29/数据库认识/index.html","b7b7d783d19ef123d4fc3e25467d7219"],["/2021/07/31/Python多线程学习/index.html","40a2cfd28c62c34a8ffd65dde99aea1c"],["/2021/07/31/tkinter-requests练习/index.html","b0ac837ddb7faf25ce7a6be5b2bb1ab6"],["/2021/08/10/Git学习/index.html","774f1b34cc7da63b093e9ed4a307c6ad"],["/2021/08/15/pygame实践-1/index.html","87da7bbb5fe1981ba11e1148ec60e551"],["/2021/09/06/微信小程序开发/index.html","2f98cc7138fbfc17e1732dc70a36c02e"],["/2021/09/21/命令集-1/index.html","727a858368827640548892ed92439bd7"],["/2021/09/21/命令集-2/index.html","2e0de3134769ab9f0af89d5f32e18dda"],["/2021/09/21/命令集-3/index.html","dc1ccb5f3967022e0940a26dbec1b479"],["/2021/09/21/命令集-4/index.html","6c3155b1d109474262f1726926ce7c09"],["/2021/10/03/socket学习/index.html","09876e05b548a3b41b0d50895b4bc631"],["/2021/10/10/dwm入门/index.html","408c4aee738aab3e7157379c2bdf0a03"],["/2021/10/10/安装ohmyzsh并配置/index.html","a454d1223fc20c81c2b1a3bde01f457a"],["/2021/10/20/css学习/index.html","9c29cdb0ad4bb28bcdbd78a003c52613"],["/2021/10/20/wm入坑/index.html","16b08f0524b4e5e78c1549a93415b932"],["/2021/11/03/微信小程序学习/index.html","1830f72a24a4e1f245297584cd0c2949"],["/2021/11/04/css揭秘/index.html","71d6dce4088380b8773b912ef00070e0"],["/2021/11/05/css-练习/index.html","aa64d55d6fa797695baa950b22439375"],["/2021/11/21/命令集-5/index.html","4c365ca4f01c4845590ba521b0388380"],["/2021/11/21/命令集-6/index.html","d85edb4b69bf2bf7ec8b9d44a70388df"],["/2021/11/21/命令集-7/index.html","72a7c8924bd0c42a780b8a1e68e26c1c"],["/2021/12/01/搭建wordpress/index.html","215ea2c05df70f689cbabe49919f6486"],["/2021/12/08/python操作百度网盘/index.html","dc750a14f0ff2976b18fe02ef76bad34"],["/2021/12/14/js爬虫/index.html","ba74e46e607af94d3fa5e528f45758f2"],["/2021/12/25/为网站申请ssl证书/index.html","642ebf76e7510e034f5d5f61bd1520b8"],["/2021/12/29/使用七牛云为网站提供服务/index.html","a5092907a31fccc6c3c48e2dca671d26"],["/2021/12/30/jQurey继续学习/index.html","efb81d43c43e2a240bf077723078e1d1"],["/2021/12/30/jquery学习/index.html","662fa8501d801a363ddbe99a551cf14f"],["/2021/12/31/vue学习/index.html","961ea2fbd32f0e82c1d9f55385c732e1"],["/2022/01/02/疫情自动打卡/index.html","d8915cdf9a2f352d08e0d41342eccf7b"],["/2022/01/03/javaweb初体验/index.html","2b25a634263931f8e2bc016e78c428e4"],["/2022/01/04/codewars练习/index.html","7d676e5f96519dc3932b462bc775084c"],["/2022/01/05/Spring学习/index.html","ff4b3abaf044cfcae01e19a6aeca950a"],["/2022/01/05/vue实战/index.html","f93db7ecc1ab1bf96e49374a61722bff"],["/2022/01/08/gdb-gcc学习/index.html","345a02d586be1cfd7d46689cece2bea5"],["/2022/01/11/python-opencv学习/index.html","13f49dbb9bf261dfc3e02bcbdec3be87"],["/2022/01/12/汇编实战/index.html","d4c4331cf4eedb6e7f58d1a26661d5a1"],["/2022/01/17/pandas学习/index.html","905e5bdbfbe696ee3dc2bb55cab99813"],["/2022/01/19/可视化图的工具/index.html","b7c9dc2a375c90f72b745b75932766b2"],["/2022/01/19/机器学习入门/index.html","ec16ce59be657855bfbb59daf6676078"],["/2022/01/20/cousera-ML学习/index.html","6e13d89ebcece52c1ac2329cae262340"],["/2022/01/30/typora解绑后出现问题/index.html","50cc7470fe1fe5c81e0c02e32be51d18"],["/2022/02/03/NLP学习/index.html","9f9e3e6292eeb32e1157b79e9603e40c"],["/2022/02/04/Web漏洞学习/index.html","15ff5a7730c66fc88d24798add8c1278"],["/2022/02/04/pyqt学习/index.html","983ebe501aa104cf7523233a022c9ab0"],["/2022/02/04/python爬虫/index.html","3dc3de05991be5650476f10dd9838bb5"],["/2022/02/18/Electron学习/index.html","496b1a14e5cab75fc4e0433c21cc2587"],["/2022/02/22/疫情填报字段解析/index.html","06cef3fa2b4559298204b3802fe05876"],["/2022/02/24/Bomb-lab实验/index.html","ce1baa7e4a8d2e6678a922fa38abf2dd"],["/2022/03/05/nginx学习/index.html","1654edd16a41017755bfc6711b2163bd"],["/2022/03/09/汇编原理课程学习/index.html","58904ba84e3b18e72fb37aa305dff6f4"],["/2022/03/11/Keras学习/index.html","f957caf902ebe25b8e9e4bcac5875011"],["/2022/04/01/graphviz学习/index.html","ccacf32deaa3f97d3c0af10bbacf20fc"],["/2022/04/07/django学习/index.html","1e74636453ccf384407eba811425ed7b"],["/2022/04/11/密码破解学习/index.html","e15c65fb99a579a088482651184ce432"],["/2022/04/12/flex-bison学习/index.html","7b1e12e6713830e8fddb5416757b63ba"],["/2022/04/15/pytorch学习/index.html","43f16d4c0da03fec83db639772755e22"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","82f3327922a776b29b7c289cee7dc6fc"],["/2022/04/23/写一个音乐播放器/index.html","e8b3fe3a0d69474589af6359893c4702"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","dee121c0f5f64f7d38ae85be56da20b7"],["/2022/04/30/GAN学习/index.html","88f4a5a63a3fb97a53928aecc00d846e"],["/2022/05/02/html精学/index.html","859b74c08d44a3b8c67bb5f0cfbb2498"],["/2022/05/06/write-a-compiler-by-yourself/index.html","bbe4156acb264c99f4fb42c9b485a1fc"],["/2022/05/30/acwj-01/index.html","c78bc02a175e06aac8a27f060b03d10b"],["/2022/06/14/animeGAN/index.html","fac85b7fb73a5cd4e6ef97298f1cd9bf"],["/2022/07/09/c-与算法学习/index.html","a967e10cec2f2413020712b99777772c"],["/2022/09/19/flask学习/index.html","47a53c0a968b35ff1a1d1485ef82cd72"],["/2022/09/22/cs224w学习/index.html","fb9d34e2e312f254b39d009528e8e4ad"],["/2022/09/28/记录一次wp重装/index.html","b4343bc6fffca692e3ff1d1f1add55b1"],["/2022/10/01/Obsidian学习/index.html","950536b2a72be14f20105bb3ade8c4ee"],["/2022/10/08/vue-element-template实战/index.html","daaa9c8d35e721c7380571bb7f8ce8d6"],["/2022/10/25/vue网上商城项目/index.html","2d2632924ea438b0e01d4531381e7989"],["/2022/11/11/leetcode刷题记录/index.html","42e456270b246bce72e2fe24e8a6bd9f"],["/2022/11/11/使用overleaf优雅地写文章/index.html","7594eadbef5689574f015cdf815bbc15"],["/2022/11/22/磁力链接与RSS订阅/index.html","3f5518f4b95a56588dc95f94106ea58f"],["/2022/12/11/uniapp申请获取地理位置/index.html","55694f5c6c4080ffce7cad895d17661d"],["/2022/12/26/pr剪辑学习/index.html","d699bdc44768ec96aae8a74c540fbe33"],["/2022/12/27/css中的flex和grid布局/index.html","89573f19f697d3cdd9e829d415f295f0"],["/2022/12/28/Flutter学习/index.html","c07e993b061e00e412d7814530d5d4df"],["/2023/01/01/美化github首页/index.html","b56150393453f2e4d4c8ea867a3c75e4"],["/about/index.html","af18be79ad6e4774edfc562d5a428334"],["/archives/2021/04/index.html","c182377f567b5e2251ba9d3e7a50ea59"],["/archives/2021/05/index.html","6e3141dc27a6850b4e404a598006112d"],["/archives/2021/06/index.html","9fa5d71603c53661bc034fb0f96727e9"],["/archives/2021/07/index.html","a3b27bd644c3798735a6fe7515d222ad"],["/archives/2021/08/index.html","483dc27c9ef74ed65935956d809b3784"],["/archives/2021/09/index.html","a795215e9f4142575183622abfff2960"],["/archives/2021/10/index.html","6a2470dd0562a5151d2dea75ab05061f"],["/archives/2021/11/index.html","f187e8ca39c3a0e38d89cb62c76e54d3"],["/archives/2021/12/index.html","7680153c9b00b8ca06dff14034e33ce0"],["/archives/2021/index.html","03644bf051a44bdf48f5cbec35a97a28"],["/archives/2022/01/index.html","e2c06412fefd26f039d74031eb015bf0"],["/archives/2022/02/index.html","904a29c6c93a217be50bf1c90bd7b475"],["/archives/2022/03/index.html","9cae1f815b76dd9d54c445c3d9f9d375"],["/archives/2022/04/index.html","612c7ed1eca7d50775975ab259e7848a"],["/archives/2022/05/index.html","ece8d2282158c42a49789a095f8bf337"],["/archives/2022/06/index.html","de22497ab708412edda76882f176d59d"],["/archives/2022/07/index.html","a6a53787b8af36d06d0eb23720332091"],["/archives/2022/09/index.html","3fcc5d161ed6df34041b1550bc17e90f"],["/archives/2022/10/index.html","9bf17721e13dad8f839c33c2a9117b0b"],["/archives/2022/11/index.html","00aea4b9752b1f447c3acce114f733fb"],["/archives/2022/12/index.html","627c08b37e328b7a8dff19ce4a1bcf52"],["/archives/2022/index.html","3ed3a56c1c48391a33a4d0b1aaaad98e"],["/archives/2023/01/index.html","8fd44701efe76c17eb830408bd6822a2"],["/archives/2023/index.html","c5883c51e0d116f084f879f88211fd62"],["/archives/index.html","760ec31fc5972d7a522b81fd4665e9af"],["/archives/page/2/index.html","387a6ee1b80757bde1a0157b4824e5de"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","e5dda5c499a6d37b357a987460f80562"],["/categories/ML/index.html","6593f5a537db5d1bbddf2ae5bc7e8d65"],["/categories/Nginx/index.html","c7be9dfc3df3c0b8f5e60952f8cc2e84"],["/categories/Spring/index.html","f651a7987a24e6ef70109f5f198e063f"],["/categories/course/index.html","f6ca29c111f19a4f1353aaa5d04093a1"],["/categories/django/index.html","09f3831ec1a9726fe23b3a0be0a1f358"],["/categories/fun/index.html","fb95a7a10b0db26147432c509fe4b06b"],["/categories/gcc/gdb/index.html","bd52ac3bd5aaacf2861cf73cfd0c3019"],["/categories/gcc/index.html","0e40527d25b77e8f343d00e793df8e40"],["/categories/index.html","7b8f9c978db9fc3a2c99c3b93e6cc275"],["/categories/java/index.html","d743892ecb70896194f0079831740867"],["/categories/python/index.html","1699f0c4b7d9e215deb02cbc04b3b897"],["/categories/study/index.html","7c6750ae21a38e39013ffc44bde0a1d4"],["/categories/vue/index.html","ec92f89e742bfd94822d3427c693ae59"],["/categories/误区/index.html","1dbd47de53a8f6207f48be841f903a0f"],["/commonweal/index.html","5dc516c512ab38b8e9eafc435219c5d9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a52c0b08acc65e3d9cde9abaf5554963"],["/home/index.html","53999f4446066d0971ff3df91e2d809a"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","2c6759e5eef9981b8552191bb0261845"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","c5168e79b4abb0f80fe37a9f23222a28"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","1aa8dbcf7102c6667cd1123d5cda116c"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","ff312fb838fbd39c651927de4e40f7eb"],["/page/11/index.html","87a2021e18d87e5869cfdaa99733272d"],["/page/12/index.html","f57374a565e3b5b5c848cdf2a520cc42"],["/page/13/index.html","98c3f0d5e26a221835faf655764e9dad"],["/page/14/index.html","15dda4b4ec08b5bde6c71a5eaf2e40c8"],["/page/15/index.html","05b33ba3db70d5d40dd23149a0340b26"],["/page/16/index.html","9a647a1658bf9bf01ab214d40821cda9"],["/page/17/index.html","812f2c37ee5422533b5b4ebda5e5741a"],["/page/18/index.html","31f1ebc7f5ef38423520408973914584"],["/page/19/index.html","b8621ac1c5499778459926d6237be4db"],["/page/2/index.html","b5a1070dac86885d389c545c74c2c8d2"],["/page/3/index.html","bb418aa9ebf0e570664013926f581e53"],["/page/4/index.html","005f9454bee6c17fb9663e2fc728b542"],["/page/5/index.html","72ce7560fa6c4f4a56a40921e8a73322"],["/page/6/index.html","bc19361a787400067a0775c1ba94e582"],["/page/7/index.html","357f9dffd91e0deaed9ab9ca99046479"],["/page/8/index.html","c9b3cccfa1c711ef48dd46760a4084d8"],["/page/9/index.html","81ea792b1665d5a3a11587db23668937"],["/resume/index.html","9c21c53d5ee3f8a6c266bb5b67b44b1e"],["/schedule/index.html","6dc48ba4e8529ff8b5503c86c6511d8f"],["/sitemap/index.html","4ae2b78083935d6998132c998807f1d5"],["/sw-register.js","d25f079776799ad64e44686a3585546c"],["/tags/AI/index.html","c93a2707f0b78151d845927831f7cf25"],["/tags/BT/index.html","87674e06c9cd1fcca551f05114e3b094"],["/tags/BaiduNetdisk/index.html","2e7c48849df300fb13a7191b6fdf615a"],["/tags/CSS3/index.html","8dd3b94bddba625e03f4611b2fa46298"],["/tags/Electron/index.html","0dc783499a46ad7e906552071741ece1"],["/tags/ElementUI/index.html","3a25f9dccdaebc8b86c29b5263475c91"],["/tags/Flutter/index.html","ad3d72d44b12f335a0b8b43b715fc61d"],["/tags/GAN/index.html","cb31fbfbb26cd82d2d545003222186df"],["/tags/GUI/index.html","117f96668cc704034a0677b9fe6a548f"],["/tags/Git/index.html","4e0d8af8da19f47175e6350f24e4fb5a"],["/tags/JavaScript/index.html","cf7107113d6028ecbf45d7c771fd6752"],["/tags/Keras/index.html","801e297d0308b5aaf96efdae600943cd"],["/tags/Linux/index.html","63e0a40617a93ba4044636e17e1f79ec"],["/tags/ML/index.html","2097cee31c96056a6450c0f9dc124f84"],["/tags/NLP学习/index.html","a5bb839121b6fedbdc852487f3b9ba60"],["/tags/Nginx/index.html","83bf67a5064f5c8a52253c58c07bc134"],["/tags/Obsidian/index.html","43fbaf681ae45423662e336aef5f544a"],["/tags/Qt/index.html","f6ee03f89ec82e06a3159bede0adb4ac"],["/tags/RSS/index.html","11c996cb039d58c31090f758c10090fd"],["/tags/SSL/index.html","abf79b456a852093aa89fe7ed2698b02"],["/tags/Scrapy/index.html","1dd9a0d8b48965cd9708b93c8cf06160"],["/tags/Web/index.html","adc8e482c5e148a92812cee81651a93c"],["/tags/algorithm/index.html","72b25e041dc8833c2c01860c0ae0afcc"],["/tags/bison/index.html","2def678e84ac296f5dd0bbee36addf3d"],["/tags/bomb-lab/index.html","f40ce2f921104d3bd0a4d4612e85225b"],["/tags/c/index.html","779fc04c7280e96197a97848c47de572"],["/tags/cheerio/index.html","b96b52bc4c5e7c7fd6bd5c5c35537060"],["/tags/codewars/index.html","6ac8062cb738edfed27669b74211ba64"],["/tags/compile/index.html","92b595e3f4b5c7d960c053e7f05fbbf7"],["/tags/compiler/index.html","a4c2c5317cf5b446eee822e45b934083"],["/tags/course/index.html","029270b373873ffdf2c453a4a4bf5179"],["/tags/crypto/index.html","1f697e7025affe39fdad89e3f54fdfcb"],["/tags/csapp/index.html","acdeafb89ab482dce3f076ccad2c9710"],["/tags/css/index.html","64dde3b0051e6594ea1eae93d4a222d3"],["/tags/data-structure/index.html","4125cd1dce964a908f122906b9241eb5"],["/tags/database/index.html","ae3e18079e692f82d8ec710870f1b76e"],["/tags/deep-learning/index.html","a886b3160f88b0d084cf23990301eb16"],["/tags/django/index.html","b1ec1b445599a31c714f99b888c238f4"],["/tags/dwm/index.html","d3b935bc234b288a26d1841b5e6b8441"],["/tags/exercise/index.html","808a69eda889013ac06c5d7c8fda13e0"],["/tags/flask/index.html","d183bb7c8e1880979d600827953a5d6c"],["/tags/flex/index.html","f89d4acc66a72afecc8d3885e42e9152"],["/tags/front/index.html","62b8604a77d61cc49b0f286721cd5f20"],["/tags/gcc/index.html","d6173e9cdbc95172712eb4f5443daf32"],["/tags/gdb/index.html","fa3fe90a8051cda4222be572e2509525"],["/tags/github-profile/index.html","874ec6c281aaace99eb583b1b35e5d65"],["/tags/github/index.html","cba823c93b79e16908f6accefa89cdb6"],["/tags/graphviz/index.html","cc65219c144d4e3d40d45ae5d074bccc"],["/tags/grid/index.html","da710b152d741ca210b9dec037391357"],["/tags/html/index.html","da2d01839a220e446150ae1a0b1d5530"],["/tags/i3wm/index.html","b06b87e0bc85555f97780fbb7a6d41b4"],["/tags/index.html","b643ccd728575055d143e52b9b82fd5e"],["/tags/issue/index.html","f39979fe2adebfe366f481612dd5f0b4"],["/tags/jQuery/index.html","f1407831da979de74fb3685acec40b60"],["/tags/java/index.html","69123e38e5b30846a3335ccc076aa0c0"],["/tags/js/index.html","ee4c6ae49d9ef05def039af717b8045e"],["/tags/latex/index.html","e50b2bd1e6327bf196bbfe2d622fe2da"],["/tags/leetcode/index.html","5c5e6d93cb28e7e10386a10f98e3361b"],["/tags/lex/index.html","aeaf659cddec2f601f463b5c5bea3fa6"],["/tags/material/index.html","7382088864af447d912ec1e2f46f3d4e"],["/tags/music-player/index.html","b253d46d361b7958cb315b4db168d330"],["/tags/nodejs/index.html","ee5b812a775e372cd8c94da5345baacc"],["/tags/noj/index.html","8bd6ca1bbbe8e09c4bde4a30ead93b09"],["/tags/opencv/index.html","7a1a774ca32c4504d49832c3dd6f2a62"],["/tags/overleaf/index.html","a36fb7c838496abace303876ce7ee57f"],["/tags/pandas/index.html","0de557179aa963d99099879d8cc4a554"],["/tags/premiere-pro/index.html","27e97b7899ff64b95c72849836bc3758"],["/tags/proxy/index.html","007bd83d367759ceb51a39fec51151e3"],["/tags/pygame/index.html","c0764ef342cb3757ff429928aada8be4"],["/tags/python/index.html","b0036bcb0cae3ea7d9966fe1d7a0b9c4"],["/tags/pytorch/index.html","5197c3bad0518d3cb39a5d02a3b34045"],["/tags/reading/index.html","820ff8fd0c9d983727cd0eb060484fa9"],["/tags/requests/index.html","481b99c74108f7942d546a600808471a"],["/tags/security/index.html","aada484cdd458b260d627017194a9bb7"],["/tags/shell/index.html","54a8b62035190b6c8cdf17d7a45561f6"],["/tags/sign-in/index.html","35701818dffc27018d1afdffdce12f98"],["/tags/socket/index.html","4ab65ebb9448240d59a07b982a485f37"],["/tags/spider/index.html","d82fed4ecb8b8b4f5ccf337e67333bda"],["/tags/splash/index.html","06755c4e66298541757a92eef5a81dc9"],["/tags/superagent/index.html","64cca4092115d07abb0166cd12ecbc02"],["/tags/tensorlow/index.html","67409ede6dcbf64bbbb4e82e81f05c0c"],["/tags/tex/index.html","510abeb04988f5342451d1303f4393c9"],["/tags/threading/index.html","360ccec8e3a040c9bfb9f5f78e300b94"],["/tags/tkinter/index.html","5d96ff46b7cd1de36756b8f35cc4c0f2"],["/tags/torrent/index.html","722deb958c68b02c7b34ee14ff45b3c4"],["/tags/tutorial/index.html","f418f612894820a10a1d1f59cd1761b7"],["/tags/typora/index.html","396573f16a0f1abfe0e0b545ce2da903"],["/tags/uniapp/index.html","a99ad42b6975ee2b4eec7ac79d853eab"],["/tags/vue-element-template/index.html","aa2e33a736cc8a992b84e47d42bccf49"],["/tags/vue/index.html","7f68d93dc18c68fb0089e094565e650c"],["/tags/vue2/index.html","f2cbb939149f4f695b5e9fea35e76b27"],["/tags/vue3-x/index.html","7e42e0144c2d9f5a787b2d3315f36ee9"],["/tags/wechat/index.html","310eb93c44917e48158cd19557028bac"],["/tags/wm/index.html","226b37096a442f9eaae457e6e563824e"],["/tags/wordpress/index.html","508e1d638bde6c6c6d45be879b0e7b8d"],["/tags/workflow/index.html","3bd63075eb09e4d2546619e8977fcd72"],["/tags/yacc/index.html","1789da13839b1a48727e8d97f90e2397"],["/tags/zsh/index.html","d463d8afbf5bf2ee09f172ba978a297b"],["/tags/七牛云/index.html","8e0d90fbdd151034712085f8ef7be1ab"],["/tags/函数/index.html","41ecc16062a9edd34afae1658a0ca31a"],["/tags/剪辑/index.html","5cd489691736b717a542f1656cd35eea"],["/tags/存储/index.html","ef486e122fcd6fcb8b253c1009a8f298"],["/tags/实战/index.html","d826a4bfe552de6225b4485087dc796e"],["/tags/建站/index.html","d088b2ee0ceaeb3f42227799e4fd2544"],["/tags/微信小程序/index.html","7913c2e7afbf26c8eda4b88ce2dd30d1"],["/tags/指针/index.html","1aecc48fa7eb636bbf2c207cc9692204"],["/tags/汇编/index.html","62790464b001ea08d7e6c87bb957d486"],["/tags/爬虫/index.html","6f35143f62f25468cbaff7c7f4d4509c"],["/tags/算法/index.html","2af39a510dbc48906d3d6ba9300b8e0b"],["/tags/编译原理/index.html","fc273e94c3cc3eb56fab2f5052da0826"],["/tags/获取地理位置/index.html","e74e3cc8062f46ba4e21a55e12565102"]];
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
