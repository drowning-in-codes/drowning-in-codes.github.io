/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","5ddab9418b260a8b2b96a6b2b3483016"],["/2021/04/20/稀疏矩阵/index.html","c12fac225927209c766b93f92e14f0f8"],["/2021/04/23/广义表简介/index.html","4073981e567785d3508ee8f367ce16f3"],["/2021/04/29/关于指针和函数/index.html","300bc0905df2e29c657a771724bcc092"],["/2021/05/10/哈夫曼编-译码/index.html","056fddfb9d770a4b9917feccac62b5af"],["/2021/05/17/数据结构noj_2/index.html","ba4590648ca37bb947648a8237b66070"],["/2021/05/30/数据结构试验/index.html","db0c6cfb75bd3ef5c882afbd96a95eb9"],["/2021/06/12/数据结构noj-3/index.html","888bab1fce083a9944d536c7d22065c6"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","519c2a5b9fd483ea299d75d9c21232bd"],["/2021/07/08/课程资源分享/index.html","40c05f81de19fb0d6a59b7ed41740648"],["/2021/07/20/Scrapy-下载图片-文件/index.html","8febc5a156ea729df5d982469266917a"],["/2021/07/21/Scrapy-动态网页爬取/index.html","325d8dee94e84e2fc4e720763873e8b2"],["/2021/07/21/疫情打卡/index.html","2fe7a8c87e81e276b90b20443fff3802"],["/2021/07/29/Scrapy代理设置/index.html","53e3d350a26eac1fecaf6b46bf218d39"],["/2021/07/29/数据库认识/index.html","a68f25da29f41fb59e67caf9e3184fe6"],["/2021/07/31/Python多线程学习/index.html","2ebaac6132fdc9a179ad2313495b84ac"],["/2021/07/31/tkinter-requests练习/index.html","160a1205e02b439e002291cb7ddc5d3e"],["/2021/08/10/Git学习/index.html","4de8089cab30e9a10c7fc9016591e784"],["/2021/08/15/pygame实践-1/index.html","c26891ed8c2388f1b93ced90271b4ee1"],["/2021/09/06/微信小程序开发/index.html","a704d4b78399f25196099981270a71f7"],["/2021/09/21/命令集-1/index.html","28d3ba1d2594233eab0cf0a18421a264"],["/2021/09/21/命令集-2/index.html","4063adb1aa6d8b047dc07b63615022be"],["/2021/09/21/命令集-3/index.html","df4306ef9d2dbca67b0b124ace1be560"],["/2021/09/21/命令集-4/index.html","94f38b87666d7f766da780f2a9c35a2d"],["/2021/10/03/socket学习/index.html","f013ee07580c34b6f0a5dcf6d30b54c7"],["/2021/10/10/dwm入门/index.html","372312cc08fc1c7fbbec8f1f1fe9ab27"],["/2021/10/10/安装ohmyzsh并配置/index.html","072e6f51d56a38add9f6bf351626a5f4"],["/2021/10/20/css学习/index.html","5aa77fbc890cd8ebddb07c5c74d9f398"],["/2021/10/20/wm入坑/index.html","5c59a4eac19aca09df788ad7702001e5"],["/2021/11/03/微信小程序学习/index.html","6d5d419084aa8684ea8893d839e82227"],["/2021/11/04/css揭秘/index.html","c7997c5876327d88f9ad98c0e70cdbdc"],["/2021/11/05/css-练习/index.html","d85b33ec77d92afaf579811eae5f58c6"],["/2021/11/21/命令集-5/index.html","3a79834f669265908790bb04cef5a583"],["/2021/11/21/命令集-6/index.html","d8d0cce2f603c0d2c53a16ffe17386d9"],["/2021/11/21/命令集-7/index.html","b57ce638a423b4041a4c4e2331ee8dd2"],["/2021/12/01/搭建wordpress/index.html","ce08eb4e8d81f398448282e91804f181"],["/2021/12/08/python操作百度网盘/index.html","a15997c606bff42b0653eaf298f7be76"],["/2021/12/14/js爬虫/index.html","2619a86bf86b04081c85cadb070ecc69"],["/2021/12/25/为网站申请ssl证书/index.html","2f7b5db830f19e5619a2a2eb1cf234b6"],["/2021/12/29/使用七牛云为网站提供服务/index.html","d06b6f93c17fcefcdaa938662a11646c"],["/2021/12/30/jQurey继续学习/index.html","88e337cdce53d3a833faf97df6459cd8"],["/2021/12/30/jquery学习/index.html","ee909e1f038640d9ee1edc790fa62687"],["/2021/12/31/vue学习/index.html","70394903090689e3e6fe996f06882517"],["/2022/01/02/疫情自动打卡/index.html","260957f217fde4b1b7297ef076b6a548"],["/2022/01/03/javaweb初体验/index.html","8d8ace11b5a4921f3ed02f555b69330a"],["/2022/01/04/codewars练习/index.html","a3e01b2d0c2d32cd7cd89fa10c0a965b"],["/2022/01/05/Spring学习/index.html","fbc51dc6f91a5d3c49c916b4381cb865"],["/2022/01/05/vue实战/index.html","43e54ca5f2ed0453b3306678acce71db"],["/2022/01/08/gdb-gcc学习/index.html","72c42ecd4f7e46b721af1125db6f8549"],["/2022/01/11/python-opencv学习/index.html","04ee2b3a1f83694df9993e5d3cbc7888"],["/2022/01/12/汇编实战/index.html","65dbbaff2b9d771f3a799bf56c4dfe3e"],["/2022/01/17/pandas学习/index.html","3393e9b9c2ead7a281a78ca85665aa69"],["/2022/01/19/可视化图的工具/index.html","ea21572391b04f4339a3825bded5aa3d"],["/2022/01/19/机器学习入门/index.html","551cf799a3b768097b4bcca902bce5f4"],["/2022/01/20/cousera-ML学习/index.html","da389ab56f628c1f108d2070528e6824"],["/2022/01/30/typora解绑后出现问题/index.html","410b70279b8ff82bbc2da81b913750cb"],["/2022/02/03/NLP学习/index.html","76e8906e0bfb6ead90f9c86be2b63741"],["/2022/02/04/Web漏洞学习/index.html","6a69c77459cb6436ff404230b086471d"],["/2022/02/04/pyqt学习/index.html","4bce00310a3870b18f0ea56ac1f7896c"],["/2022/02/04/python爬虫/index.html","5817f6da17b7a7650c713e3c04ab3d39"],["/2022/02/18/Electron学习/index.html","85b1f777c6c8a5866fc20d1e713c0136"],["/2022/02/22/疫情填报字段解析/index.html","cb8a8db628dd7b807e3a9a63065ca045"],["/2022/02/24/Bomb-lab实验/index.html","e2a0f70ab6786fa5ceaa55c8b7b9cd63"],["/2022/03/05/nginx学习/index.html","483991e35cdd1ef4bf224818aced0bc8"],["/2022/03/09/汇编原理课程学习/index.html","ca25e74e25f897191cb4af7dd80b82a8"],["/2022/03/11/Keras学习/index.html","5e348260d359ca60bb0ad34206102fb0"],["/2022/04/01/graphviz学习/index.html","57da505c387bb3f507e3f20057699428"],["/2022/04/07/django学习/index.html","b6cfd2c61d2673d6ed5a4bff2b208cab"],["/2022/04/11/密码破解学习/index.html","314879bf1fc52ae6ea8e4b0cdb052e90"],["/2022/04/12/flex-bison学习/index.html","88c131282cf37e7eea46bf6a692d5977"],["/2022/04/15/pytorch学习/index.html","1bcbc29409ad8b0160652fc90f51f38d"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","0c09814d8be4ea2e80e6359c936e81e1"],["/2022/04/23/写一个音乐播放器/index.html","bdb4f71e7979dff87d7a43a223a54e4d"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","eb0fb3c01a83f2597a9d2e95572b320a"],["/2022/04/30/GAN学习/index.html","ee3eba3fa9048044f9233af8b7d21992"],["/2022/05/02/html精学/index.html","be2ba579d3c0257eec4072d99a42a4d1"],["/2022/05/06/write-a-compiler-by-yourself/index.html","221ab19300eda1ca7297f15f70859cf3"],["/2022/05/30/acwj-01/index.html","b74067c0db163ada5532be79900f9ba9"],["/2022/06/14/animeGAN/index.html","0395c7ea8116cbbb41eb5ffae2aba84f"],["/2022/07/09/c-与算法学习/index.html","e1d3fa49053cead0d913a92d316a9e62"],["/2022/09/19/flask学习/index.html","e0ecbaf97fa3e9f141cb45b628f34e25"],["/2022/09/22/cs224w学习/index.html","39b7333deed9a138bdd561881e291a5a"],["/2022/09/28/记录一次wp重装/index.html","9626e2d9ca98fcefd0a928b1b0fbd88f"],["/2022/10/01/Obsidian学习/index.html","34035c673b06dc9033bb6a49caea6689"],["/2022/10/08/vue-element-template实战/index.html","a66d0a9c053215c88368677ad18bf986"],["/2022/10/25/vue网上商城项目/index.html","4d11ff35ea897bf483bd2d3886a64b0c"],["/2022/11/11/leetcode刷题记录/index.html","226acbff9d6acace9b1d868b20ad27f0"],["/2022/11/11/使用overleaf优雅地写文章/index.html","cebfee58a9df95ea98a51c4c75e04cf6"],["/2022/11/22/磁力链接与RSS订阅/index.html","342a4152206e4cdbb06d08daf5c5f23a"],["/2022/12/11/uniapp申请获取地理位置/index.html","6f84d3111f6ed68a7cd4296f13317a49"],["/2022/12/26/pr剪辑学习/index.html","364de3e0cc21972ac68201349b188b6e"],["/2022/12/27/css中的flex和grid布局/index.html","2c1f770f77ee3fafa943342021afaecf"],["/2022/12/28/Flutter学习/index.html","81f0f8c08a28a072e805a5c27814067d"],["/2023/01/01/美化github首页/index.html","8e42ea0063a7f65538760b8bc5664a9e"],["/about/index.html","0932a365211f4911d00818b6f2051854"],["/archives/2021/04/index.html","96106d3ecc2f6ff59ac6db199dea5fd5"],["/archives/2021/05/index.html","ad764f80cbb7e87ecbb630fdf5df6685"],["/archives/2021/06/index.html","711250bc538bc2f9d420fb69a1bbf581"],["/archives/2021/07/index.html","76af8d47621bb3d230e8d6455b88d9b6"],["/archives/2021/08/index.html","6328246abe19b694132f37c827f334f5"],["/archives/2021/09/index.html","3f3d90fc52325fb68910e391aae3317d"],["/archives/2021/10/index.html","93c6dad3d4709e1cf6fef8d7997cba22"],["/archives/2021/11/index.html","9c059ca1807d9adc4266ff7334341692"],["/archives/2021/12/index.html","42c6b8641ff7b4ff64d91db8939e17ff"],["/archives/2021/index.html","75cce6cc60106a550ed824fbe9d35b8c"],["/archives/2022/01/index.html","ffb4cf2f646043ea58ad44085ddf9008"],["/archives/2022/02/index.html","fadc4a1b5ee1986e61873ba26bb1b20c"],["/archives/2022/03/index.html","152b72a51599d0b3d0cfb1787a29d25e"],["/archives/2022/04/index.html","a2613a21c4721a16c003d388d73f0686"],["/archives/2022/05/index.html","cb7ef219b446c4416f9cccd3a39c27f2"],["/archives/2022/06/index.html","f65c475a6f90aae875f805ad81529255"],["/archives/2022/07/index.html","9443e5172621083eb36c93d8622e130d"],["/archives/2022/09/index.html","46a1ef5f7e813dc6ef77d670df59e116"],["/archives/2022/10/index.html","3c92db2a0c1b3923ac1408f9ee970c7f"],["/archives/2022/11/index.html","c600d4bb70eb67898cd06954d55f1331"],["/archives/2022/12/index.html","bef65141dd033ab5edac886db193f979"],["/archives/2022/index.html","85bfd103fc2d46cab06789cd70b8a02c"],["/archives/2023/01/index.html","589684a8b06b6312f0215ef818508bdf"],["/archives/2023/index.html","7d8cea219faad8063b95a519d22f44ad"],["/archives/index.html","36270044eb94f51cef9c2fbe4f08d42d"],["/archives/page/2/index.html","e48cf4855dfd504551989ce67238bdfa"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","2cbb99e5ca8d79d2dda68530cd10d7a2"],["/categories/ML/index.html","eaa004e63e2453a91edcb1a75ad881d2"],["/categories/Nginx/index.html","be762e9e6a27ed0170e952b3bb5b49a3"],["/categories/Spring/index.html","1308555532ba11355cbefe512a7a8cc6"],["/categories/course/index.html","563f339cd356ca24241f41a3355a3685"],["/categories/django/index.html","fb8a44c9d65ffa785c0bc6ac8b43ab82"],["/categories/fun/index.html","f1a5f3d41238d51a7822b8b2dc9829bd"],["/categories/gcc/gdb/index.html","dfd6643467bc43d9583c11f031bbc48b"],["/categories/gcc/index.html","a1f34d570b16c589c511417914e7e608"],["/categories/index.html","d4073e1c538e068ebb4cf3f882b3e862"],["/categories/java/index.html","158c481820f7b39f7945ec09284db3d4"],["/categories/python/index.html","99c8eb21fec928543e2adcafbfee99a2"],["/categories/study/index.html","dfa83980f992bdff79398db65428cbfe"],["/categories/vue/index.html","965e5c121205c4ac6df404269860691c"],["/categories/误区/index.html","1158553a173934d7c8ba5d25febc80ee"],["/commonweal/index.html","9c2c3f3f176b47d2cdddf2ecaa7b3a1c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1da127b379db3b2d7834d4cdd0173f35"],["/home/index.html","22f9b3794064e50869e8a8c07913cbfa"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","dc44199e0930a42446c74e4ac5d3ec42"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","6dfe878a97d062938883af86bdda1719"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","30d36b5b2eb242de4fdf3285b2c71f92"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","729bd7bceafdee0076f33bb7b35689bb"],["/page/11/index.html","2bee713093a1382d1d4518fed763319b"],["/page/12/index.html","e8807a46bcff4683826d9500a6ae3d97"],["/page/13/index.html","a5c94376d63322d2ec1aec06fa941276"],["/page/14/index.html","e369fe0a5d2b19f149d451775ad99ba3"],["/page/15/index.html","a84ce9b211b77359e13288d62a11203f"],["/page/16/index.html","6504f6d984fd1bbe2f2811e5ebad85ab"],["/page/17/index.html","4e79aa54507e284c6cd4c33ecf7405f8"],["/page/18/index.html","162735718d6cd0ce12359b86ca4901a4"],["/page/19/index.html","40068bb223188cee1b3a18c033f5c8e0"],["/page/2/index.html","36a280ec690301ee9c1ff66a513e075a"],["/page/3/index.html","09bd6ff9b8fb34ff66add2fd9abff19f"],["/page/4/index.html","d1a7be540c1647dfce6c0d2be64d46c0"],["/page/5/index.html","aeb8e4d5cff74563f4c42280e5264c21"],["/page/6/index.html","7886c903f7c4372dd0e360b844a49754"],["/page/7/index.html","9175903383a948ed2674aec728d1400b"],["/page/8/index.html","569a50fa7a0ed7e410f6033fe7bc8bc7"],["/page/9/index.html","22c588ae657b42cd718f55797b9a318c"],["/schedule/index.html","6b2f59b8ebea05079024d55569c3c0d3"],["/sitemap/index.html","01c847e945486224840f4fc3285e630c"],["/sw-register.js","a13ec2743b0353fa245aa916b177630e"],["/tags/AI/index.html","d8d104178f006750c38a0550740014aa"],["/tags/BT/index.html","d6719a4e92c11019be105d090082a4a8"],["/tags/BaiduNetdisk/index.html","acde98f5ecbdf345a225340e860d1587"],["/tags/CSS3/index.html","f944e01f58f5d7f8b4ead49606bea00b"],["/tags/Electron/index.html","29921c3d534247539ad41fc8669fb9c6"],["/tags/ElementUI/index.html","5894a286cf5993d2319fec54118fe682"],["/tags/Flutter/index.html","231ce20f12fa8ccb04c221f4b16ec1ca"],["/tags/GAN/index.html","920d9bed4b683efda0ed56f47ef65eae"],["/tags/GUI/index.html","1010fc2b1e7e4ba51efa46c4cd05c31b"],["/tags/Git/index.html","49a966200fef90f9ecf17512127e89d2"],["/tags/JavaScript/index.html","289194baa8facf2dcb94096a71086cda"],["/tags/Keras/index.html","eadbb6dec4511f06e7d73e61de3471fa"],["/tags/Linux/index.html","c5714d59f490d8f03d802d1e671a58ad"],["/tags/ML/index.html","f714842c5d0d3ea3f8c16f081074919b"],["/tags/NLP学习/index.html","abc81ace238d83c58087e72d1f4d0d67"],["/tags/Nginx/index.html","5e4477a00131a00e6ed23d890b3b7d5a"],["/tags/Obsidian/index.html","83c7446614771bfdbba27eafa62d4afc"],["/tags/Qt/index.html","cc29f13d66647fe6dc812f4678b6d2a0"],["/tags/RSS/index.html","b9a79e0a435d021077de014dc5152b3d"],["/tags/SSL/index.html","3d3e170157721655457dff65195134d0"],["/tags/Scrapy/index.html","b3521d490910e4f2be2539c28091775a"],["/tags/Web/index.html","67ca7a9d1a28099c28399249e520b2bb"],["/tags/algorithm/index.html","88e0ac674ee989c671fb0b9d44dcc8e2"],["/tags/bison/index.html","03d385e82f75314182d9ed0cd68637ca"],["/tags/bomb-lab/index.html","db17be6ce2d34df3262f43cf18454eb2"],["/tags/c/index.html","8989b666806b64c88ed9e69406576446"],["/tags/cheerio/index.html","df0140e25178c6e1f933034f738403e8"],["/tags/codewars/index.html","e4dd8c5a4677cef493ff0b55eefa7e67"],["/tags/compile/index.html","0f377d1618b03f4ad9d263e681719d27"],["/tags/compiler/index.html","3df7481919636f2a1ead2536043863fe"],["/tags/course/index.html","9547940aab3dfc1a1c8d7abfe98413d1"],["/tags/crypto/index.html","53763dc5f615b8eb3c216142cef0858b"],["/tags/csapp/index.html","977b379d0b768c06a38db13754d88ac9"],["/tags/css/index.html","f67197c5cee12f037c01d90d27a61c6f"],["/tags/data-structure/index.html","b8a5dc371aeaaac05280005c5448484f"],["/tags/database/index.html","d1ec5d0aff08509e87323e4249ff8f14"],["/tags/deep-learning/index.html","5d9f7b974f83a7f0faf926ee6f549304"],["/tags/django/index.html","2ac7b3bb874f66ae84a7ad1c3f749223"],["/tags/dwm/index.html","b17b03bc61e6b6ee40aac7a210014341"],["/tags/exercise/index.html","bdd679ba639e6183e86517023dc69e21"],["/tags/flask/index.html","4bd743a683c0d8f40191e8241ed9f305"],["/tags/flex/index.html","6f1cb24ac448cfcd40b532b9c98405d0"],["/tags/front/index.html","7e6980ed6b70021d3fd637e788d8fe84"],["/tags/gcc/index.html","4f50a8c0814aed2dcb67c084f02b718e"],["/tags/gdb/index.html","6970d957ca575ded55891f8d49f66935"],["/tags/github-profile/index.html","a3ff8e22ca9ba80c774d7fc23d3f889d"],["/tags/github/index.html","8026b5f735e5a90239ab7a548987883f"],["/tags/graphviz/index.html","0261b1eacc9470b9b2fb6a6cca2607b0"],["/tags/grid/index.html","dbcaa65ff5505e343dd4c1a4ddcaed2a"],["/tags/html/index.html","5a11490f72684fca9f47c54f804ce46e"],["/tags/i3wm/index.html","3141960ed0de0b0f73c37be7a5a04acd"],["/tags/index.html","484aaaf5102d899b7cdfa4fbd949360d"],["/tags/issue/index.html","7b061f35c4d44401b0d19812e2911a6c"],["/tags/jQuery/index.html","8edaedec3023c149a8acc215392912f9"],["/tags/java/index.html","67d78cfe71a409e0154a7683596ef672"],["/tags/js/index.html","5094705d6952c06182ee0fcf5f96c59d"],["/tags/latex/index.html","56f6305de97cec927654d1034e51556a"],["/tags/leetcode/index.html","af890b7f39b3914f0bec618d81fb6949"],["/tags/lex/index.html","fff0c56c907d2c88fd70bb62a7baa795"],["/tags/material/index.html","69a8cec1ec06ceb3417078d4822907c6"],["/tags/music-player/index.html","292795353a8bb221a160af53964fee21"],["/tags/nodejs/index.html","ddd7004b547be8ef77b5240e78756ae7"],["/tags/noj/index.html","baa5d209aa3fa44bde1fd693350c5c18"],["/tags/opencv/index.html","71247cd7080d70229ee0eed612dc1918"],["/tags/overleaf/index.html","4a6daac4917dfe19fb82d7a2e1ddfcc4"],["/tags/pandas/index.html","cc4139c83cf20c7cac45f4b998db2aad"],["/tags/premiere-pro/index.html","f375f29cb5127d1285cd3c4daab7281c"],["/tags/proxy/index.html","02834ea4207a7d42e3b9af585cd8209c"],["/tags/pygame/index.html","c9d6b2119ee18c6337af65853c73cc64"],["/tags/python/index.html","08ab9c1b3458d0c2d902f21394c8d70b"],["/tags/pytorch/index.html","e45b76448e93417ba3ae002224e07b49"],["/tags/reading/index.html","df674383ab43d3d149e8e7f84d37abe2"],["/tags/requests/index.html","f9d6c1725f6106f9ca6b7ef0b1f5546f"],["/tags/security/index.html","f4fa890acda496baabeac4ed1efe332b"],["/tags/shell/index.html","719f5fe5c09d5df8c5715725b3f3a1e6"],["/tags/sign-in/index.html","e259674f679d644a297286f03a04f350"],["/tags/socket/index.html","12fb8d220fe54cc7e62a6be4dc6608bd"],["/tags/spider/index.html","796bdaee142d51c4ba7caa008af2f2f0"],["/tags/splash/index.html","3d0c68ee72e3046e1c30a8ade96ce494"],["/tags/superagent/index.html","45a120f7a439bbf7c98906fc52482d6f"],["/tags/tensorlow/index.html","e781f905e3d964eb1b0912e5510b5041"],["/tags/tex/index.html","cb0c92949ffb1db3164b9b9262356d29"],["/tags/threading/index.html","25e7fe97b92ebfcae2fa3f166e8fd36e"],["/tags/tkinter/index.html","3bce560b48b239a1d2873a4c259830f5"],["/tags/torrent/index.html","948d02099f081e6d7fe4d0742273b838"],["/tags/tutorial/index.html","68986c25eafa68df787a8715c7235868"],["/tags/typora/index.html","4335605f193d280401586f43f90fac80"],["/tags/uniapp/index.html","94afee649d1ce33ec1bebca8d7c48af6"],["/tags/vue-element-template/index.html","200b5b3fe1805ff3e11e9929b5749c82"],["/tags/vue/index.html","1d25399986ea96801c590b33f1ffc434"],["/tags/vue2/index.html","ff6232a58945d9229376572b519ffe38"],["/tags/vue3-x/index.html","9215f1b5afeb01ce9c37ab540935393a"],["/tags/wechat/index.html","79229dc5f337198f1177f6591c2d9f1a"],["/tags/wm/index.html","6c3d281b5b507b4039604d6948bbd5a4"],["/tags/wordpress/index.html","fe0c24e34a6009876ba8e98662b5dcb7"],["/tags/workflow/index.html","51d2d9dc444ba8d80163f376281dccfa"],["/tags/yacc/index.html","f33ea49112cc6e4d1c65ce9574de4f24"],["/tags/zsh/index.html","b94d394e48cb2baa634caceb405c6b13"],["/tags/七牛云/index.html","70d34a71c7de92035f27e67a7b009523"],["/tags/函数/index.html","7c54f5fc7b7a61ab13b450ea02a70909"],["/tags/剪辑/index.html","471f79726207903c78009a4e2a76154e"],["/tags/存储/index.html","09cedb3644b3468de64157b5e0411334"],["/tags/实战/index.html","01a12666f5749029062da277d6adeab8"],["/tags/建站/index.html","db5dd8edb0bcd9191bece3febb2169d4"],["/tags/微信小程序/index.html","adced18c9a0e92c2ca483e741ddb1f76"],["/tags/指针/index.html","6062aa017c35e5e6d24790090c2382a5"],["/tags/汇编/index.html","0c553bff9c4632c22e50a235d73dd1a1"],["/tags/爬虫/index.html","e8b2eca39dd43fb2e8cd2cd46a034489"],["/tags/算法/index.html","461e306edd61dba0619d83f499f1208d"],["/tags/编译原理/index.html","d316cbad7702e38ce8a5b8e81e151122"],["/tags/获取地理位置/index.html","92e3857d35afa870723fca9cb64cd871"]];
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
