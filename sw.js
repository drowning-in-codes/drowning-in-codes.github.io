/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c433d430b16b696c992afb7f3c1482bf"],["/2021/04/20/稀疏矩阵/index.html","603af44b0abbc4a0a8901396e996ad49"],["/2021/04/23/广义表简介/index.html","9a0313821814628983f502e07b66a1f7"],["/2021/04/29/关于指针和函数/index.html","08ef9b86a24f1a82cbafc9e6df59c04a"],["/2021/05/10/哈夫曼编-译码/index.html","41b026fec6be105cba5af52f1a134488"],["/2021/05/17/数据结构noj_2/index.html","86a3fbc1ec62aa2624878901f0c61eb3"],["/2021/05/30/数据结构试验/index.html","d8f23a0fbcd71f60b2bda9a0b628f47b"],["/2021/06/12/数据结构noj-3/index.html","a7a15c47ee12406d59af321e21c0405d"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","af2072b678075aa42521c2c91701298d"],["/2021/07/08/课程资源分享/index.html","205a45fbc93911dce6778fc3ef0d99b0"],["/2021/07/20/Scrapy-下载图片-文件/index.html","67b5f01a58a569a10e1b3e46146d2cc7"],["/2021/07/21/Scrapy-动态网页爬取/index.html","67ac1b032712f84c5617a74682a2b1c4"],["/2021/07/21/疫情打卡/index.html","64cc8f8782c3f79f0024b976698bbc7b"],["/2021/07/29/Scrapy代理设置/index.html","f27ce90d23f9f45fb3edaa003b664f49"],["/2021/07/29/数据库认识/index.html","42bee67efb0c1c3dc6d74ed21c4e2974"],["/2021/07/31/Python多线程学习/index.html","52fe054b11155ef589b6b4ee8553fefc"],["/2021/07/31/tkinter-requests练习/index.html","a4a098ddbb89b01d87f9e466bc01dce8"],["/2021/08/10/Git学习/index.html","1ba48c6dcba9e32de4fc691cd8226ec7"],["/2021/08/15/pygame实践-1/index.html","4856640f3e40edd0151f2e7b6e42880d"],["/2021/09/06/微信小程序开发/index.html","b22fd7acbd7c41d7cc05e7f9bcf84c29"],["/2021/09/21/命令集-1/index.html","38c60d9e00833491a75102c538cebcdb"],["/2021/09/21/命令集-2/index.html","f93735cf133aed92fb52cccb930a7100"],["/2021/09/21/命令集-3/index.html","18f818215dcd2d52100fa5358135a0ee"],["/2021/09/21/命令集-4/index.html","99f10244dfe90a3ec2a5b73ecdd3bd10"],["/2021/10/03/socket学习/index.html","3b2f22f29a2053dabe1d89aa62289315"],["/2021/10/10/dwm入门/index.html","12bdf40b3a5cd43dbafe7455f90b2e67"],["/2021/10/10/安装ohmyzsh并配置/index.html","5632939f9196e9e729529c96b7a04bbe"],["/2021/10/20/css学习/index.html","293caa1917b51c0975128be49187d002"],["/2021/10/20/wm入坑/index.html","0cd8d6913b946fb18c47ea0850165c25"],["/2021/11/03/微信小程序学习/index.html","74996778bcdd92c1c778834d900932d9"],["/2021/11/04/css揭秘/index.html","6ee36971128329092d8dff03b576d76a"],["/2021/11/05/css-练习/index.html","ea394de2fda810e3e6dcc333fc731b21"],["/2021/11/21/命令集-5/index.html","c58b0e2fd41b668ba0c8a09eb45b1b6e"],["/2021/11/21/命令集-6/index.html","65acf77fc3b29791cedd147bad1f79b6"],["/2021/11/21/命令集-7/index.html","59f899c5364f6f519933e351f9487906"],["/2021/12/01/搭建wordpress/index.html","6dbf996e6296203fee25dd78e87d3ffa"],["/2021/12/08/python操作百度网盘/index.html","4c53d46116717f1c024e73eb82077fad"],["/2021/12/14/js爬虫/index.html","0e68c8c0eb484e864d854b7d857c9974"],["/2021/12/25/为网站申请ssl证书/index.html","9adadf87817b5d69e2cd46830461ab81"],["/2021/12/29/使用七牛云为网站提供服务/index.html","add3591fe547ea421d55e67ccd93a030"],["/2021/12/30/jQurey继续学习/index.html","8d40ef53bcfda08ac8bfec210fcf4eaf"],["/2021/12/30/jquery学习/index.html","53c08524e9a1ac3fcd4248b84e663ae9"],["/2021/12/31/vue学习/index.html","f92c8c166415890c6c8a768dff215fb9"],["/2022/01/02/疫情自动打卡/index.html","65b3ce027935f0270713235bf99ef819"],["/2022/01/03/javaweb初体验/index.html","3ed41bf0a922e720fbe32e8dd5bbcd72"],["/2022/01/04/codewars练习/index.html","26e789ebc41ced90f34ceaf8acbedf44"],["/2022/01/05/Spring学习/index.html","ca7956b9621e1aa2ef44f9ba6f14b12c"],["/2022/01/05/vue实战/index.html","dd180e49ae425abeffd0fdada0cdfef2"],["/2022/01/08/gdb-gcc学习/index.html","4a25fa6b210f6df3016f54432ff9aa24"],["/2022/01/11/python-opencv学习/index.html","c1322172688e68e170adf8995b22ce4b"],["/2022/01/12/汇编实战/index.html","9a20f3cdd62942f8df4deb60e0d04777"],["/2022/01/17/pandas学习/index.html","46bb954784fd29c9dff531ea04a86892"],["/2022/01/19/可视化图的工具/index.html","73ce4665503e4abebd4afd376d3b467b"],["/2022/01/19/机器学习入门/index.html","3b87b22e203d94ffd22cd89a83c740d2"],["/2022/01/20/cousera-ML学习/index.html","e5edf51dbb033b351aa45033935918b8"],["/2022/01/30/typora解绑后出现问题/index.html","a79e144ec2f7a94078bd8433041be01c"],["/2022/02/03/NLP学习/index.html","99be03afa831b7b5b759974da17dc489"],["/2022/02/04/Web漏洞学习/index.html","78cfb4f929aaf4924dacc3a6f0388b64"],["/2022/02/04/pyqt学习/index.html","d0ac5c0bd5f993814f38f6e1f4e96a81"],["/2022/02/04/python爬虫/index.html","67abe2a5196a7c90e55020b2d754c267"],["/2022/02/18/Electron学习/index.html","51471f60e0fa7fb82e49551f1418f7bc"],["/2022/02/22/疫情填报字段解析/index.html","a5008d141eb76e0a4d0c645e4d631e95"],["/2022/02/24/Bomb-lab实验/index.html","0785d3f22882a9d73f7c64c71f823cef"],["/2022/03/05/nginx学习/index.html","571d64cf53359f15fc820b587fef4127"],["/2022/03/09/汇编原理课程学习/index.html","3fb78586f5436f5325836c47146cbdb7"],["/2022/03/11/Keras学习/index.html","4e1be7d1cf74da5698b46203f633670a"],["/2022/04/01/graphviz学习/index.html","628094588dc7ad73446302151fcc7f0f"],["/2022/04/07/django学习/index.html","ab8d5295ecc3bf04672ec4be9aa824b8"],["/2022/04/11/密码破解学习/index.html","2748ff7d7ebdd0a0f252708a96f1c6b8"],["/2022/04/12/flex-bison学习/index.html","33ee07bb08fe614a4f560e38abf1f8eb"],["/2022/04/15/pytorch学习/index.html","24b5ce7b632f336ac6190d2dc85f32ca"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","648b6a27aa96ed8af7dc914acfb582b7"],["/2022/04/23/写一个音乐播放器/index.html","95eb17775a42c0678c750494e83998b3"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","446214be1ba3b829b8d29a4623719ff9"],["/2022/04/30/GAN学习/index.html","8c947eb5873fbd15cb722dbe22e8b843"],["/2022/05/02/html精学/index.html","019ebadc70c3f273bb2920818426ab4c"],["/2022/05/06/write-a-compiler-by-yourself/index.html","fd79ab9056c4ed2b47bdb94b56bcc587"],["/2022/05/30/acwj-01/index.html","80a7576bda56ab090ab351bed3ad3aca"],["/2022/06/14/animeGAN/index.html","927025c486fdbbc77c5c65c7936537de"],["/2022/07/09/c-与算法学习/index.html","1db79b1ce570322de37d9f0d15ff3598"],["/2022/09/19/flask学习/index.html","0abac609d0e1bc7b2489b6e43a1eedce"],["/2022/09/22/cs224w学习/index.html","08fb77e80ed4a5c7c809df26e80819de"],["/2022/09/28/记录一次wp重装/index.html","9ec05f792d091831d9e4a1b8d74196b1"],["/2022/10/01/Obsidian学习/index.html","3801c63d4985505edd8374f6717f9f24"],["/2022/10/08/vue-element-template实战/index.html","20347ed3637e326f12946a7a5f1fdf09"],["/2022/10/25/vue网上商城项目/index.html","38feda7721fcfc6af478f57ea8ca8243"],["/2022/11/11/leetcode刷题记录/index.html","d413128aa2a601c4f41c8220ba937617"],["/2022/11/11/使用overleaf优雅地写文章/index.html","d6ebb152ff976ff2b3b61b394eda377d"],["/2022/11/22/磁力链接与RSS订阅/index.html","ab189e237e60c73596385bddfc6ccb7f"],["/2022/12/11/uniapp申请获取地理位置/index.html","dbc5d8d98986d9e5c5d9233de9780b4e"],["/2022/12/26/pr剪辑学习/index.html","4f062cf2fb52da9f8f993f7784a1baf9"],["/2022/12/27/css中的flex和grid布局/index.html","65fa86a2ded7dff17ee39489e29819f0"],["/2022/12/28/Flutter学习/index.html","973521f10d8cb22ae8c917f0d3f79f16"],["/2023/01/01/美化github首页/index.html","3ac27748ffadd24dfd653a483e6dcbe8"],["/about/index.html","bfbafbf4dbc33cb87af1efba6a56d94e"],["/archives/2021/04/index.html","0ecd2b13031abd043fa91cf7854d05cf"],["/archives/2021/05/index.html","04beb803e16f19b2ad1582f4b9398c9a"],["/archives/2021/06/index.html","e9290f9e3318fba09bd7ac01d485674f"],["/archives/2021/07/index.html","15df12e2571fa97c21409215fb522beb"],["/archives/2021/08/index.html","b7ef2d7c3ee9340620341ccc2594f986"],["/archives/2021/09/index.html","f90aa854a49f3413602294f92c68bf22"],["/archives/2021/10/index.html","74f0e5d04d41117688216850080e1936"],["/archives/2021/11/index.html","58bff66967b60e83ad41b046c0125cb4"],["/archives/2021/12/index.html","a0c11c42b07bbbc54614375c2d396237"],["/archives/2021/index.html","3d0b5c2684ae49ffe73a3835461e6786"],["/archives/2022/01/index.html","04355e3dccafd6cb0593dd11c9ff5ee8"],["/archives/2022/02/index.html","bb235fbb2d073a3c52610457387c5452"],["/archives/2022/03/index.html","af4c5374851b1c1cdc9c860d6809b424"],["/archives/2022/04/index.html","9a42d400618cefe480185c865c1d58ac"],["/archives/2022/05/index.html","4c4ffd0f178aa2e1443991875123bb31"],["/archives/2022/06/index.html","0616f17f0b69037c27bd0bef273a5b92"],["/archives/2022/07/index.html","ce0b853a4170067432f614268ac75944"],["/archives/2022/09/index.html","03dd7e8970370cc69c7bb12078888aac"],["/archives/2022/10/index.html","82f6cc143895879840d6e35c68408d8d"],["/archives/2022/11/index.html","56124769fb12121d6f94ea43fca04ac4"],["/archives/2022/12/index.html","6ba398e0cb3ffa197901141b48483329"],["/archives/2022/index.html","7a24c5a66b68452e0d5736208adf0ba8"],["/archives/2023/01/index.html","f1f3ed51bd6ff9cf9a6c0e8085bfd95a"],["/archives/2023/index.html","1175562234b00c55b13070bf94b51895"],["/archives/index.html","a0f95c7c90e918e5d8f88402df893307"],["/archives/page/2/index.html","877bbba66446418ff0455fc49d8a0c4f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","eeab1418769dd74c9a7c6af83d1b9900"],["/categories/ML/index.html","3535b2eb56ec92e0f33b51cd080f26e3"],["/categories/Nginx/index.html","f8441226e3e55743ccdfed11532b16fe"],["/categories/Spring/index.html","da01e9f41ee2d2342b331ea7ba3e27c8"],["/categories/course/index.html","928852f5560c2e80482a97d70cfa0e76"],["/categories/django/index.html","4314c3e36936373397c152a025c177d1"],["/categories/fun/index.html","84fef4dca3628eb3e0c3a77f1620a32d"],["/categories/gcc/gdb/index.html","dffa000b31684bf1300fb9f8c44cfd19"],["/categories/gcc/index.html","fbcd60eee89c072b06ec6f81d44f3599"],["/categories/index.html","ab983010af5ef55818d558b3e2d99ed1"],["/categories/java/index.html","274b98e35e0daf4671ced8262d224a6a"],["/categories/python/index.html","a164fad344e1b434da834e3ab106efc1"],["/categories/study/index.html","c322a511f4a69d1a185c42b7230bd3fb"],["/categories/vue/index.html","0c345eb341fd1641cfb27988b8ef418a"],["/categories/误区/index.html","2ab24bc5ba002943f709d62d1ac49b62"],["/commonweal/index.html","1928373ad413b2fedc67dc37846b5263"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","74dcc89e6dce7f760417abbacec78ca5"],["/home/index.html","b18430bf31c4052f7c3fc70b48bc8371"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","4403605ba6fbae7d63f93a32a58d165d"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","2106123716c08d6fb859ca2685d57e6b"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","1cdd89ac9496f8277e2d2f430891d79a"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2084bdebcccfbe374c170be70feb86be"],["/page/11/index.html","5661affc3237b7ed67f1ec89d694512b"],["/page/12/index.html","6ddb4d8e7e738420e9a1440c8aaecddc"],["/page/13/index.html","0be147b5bc1ddca1ba0384cf339eeda9"],["/page/14/index.html","c4241ee3eacd60a0260f7f0b825c70df"],["/page/15/index.html","75c980ec6d7c9b272c8176d08678ac68"],["/page/16/index.html","974baec090422c22267c95b9e725726c"],["/page/17/index.html","3c2b41e2214ff71da5929ead5d398d1e"],["/page/18/index.html","e059a2c800c7406ed6237e08f5190650"],["/page/19/index.html","1cb8a09dbe93c537e36ebfb0043b0553"],["/page/2/index.html","0369fb55e782270978531b5cf424dff2"],["/page/3/index.html","c36326c751a6cd1776e2426fdf022612"],["/page/4/index.html","1b095aecc5c335cd88df101a06c33a3b"],["/page/5/index.html","55c8ee88479c3c78c11616e36f68a06f"],["/page/6/index.html","a3d755fbf881212253fa3acf357d09fe"],["/page/7/index.html","c6cc676c3135f56a4632bf560891027e"],["/page/8/index.html","a1650a7c681f432f0310558a60c06674"],["/page/9/index.html","44a31d2c66d599cc692ad9f6e71d7c5d"],["/resume/index.html","1d3cc8aaf238e06d9d6325147ed1752c"],["/schedule/index.html","69a81085372c9f5d29b576b5cf7d86e8"],["/sitemap/index.html","0ef0b0ac990ef4a527d1cb97defafee7"],["/sw-register.js","ab03e79617c6e8fd8904a036bd002c89"],["/tags/AI/index.html","503bf2d707205528d3c3089e9ba47d86"],["/tags/BT/index.html","7e1d303233498e5cd510605e3ba5f6b1"],["/tags/BaiduNetdisk/index.html","867c2160cb7dcc6ea0e4ce1d318483af"],["/tags/CSS3/index.html","143c9d95c2182c72c5f71133c47d4188"],["/tags/Electron/index.html","c3ab82232f8faf7e920b20e97e3fd132"],["/tags/ElementUI/index.html","76a8c702fd77c1210c5ff349c628fbbd"],["/tags/Flutter/index.html","73b2498655b2368fb1adc19a548fa7cf"],["/tags/GAN/index.html","fb9487abaeedb26590e15b867e5285c6"],["/tags/GUI/index.html","c383f0d98fe5867cbe6719fdf55a2773"],["/tags/Git/index.html","f3e2fdf45c45592cc20d4a2db7646da8"],["/tags/JavaScript/index.html","bc5a5a117b6722f9726cac3ae6682237"],["/tags/Keras/index.html","e7421e471c26f0b32b18d0a09cba3071"],["/tags/Linux/index.html","8271eeca87eeb032d6186fab0a46ca30"],["/tags/ML/index.html","92a543c9bfa1dc286aa916546c59c34a"],["/tags/NLP学习/index.html","610a7de4d70405212414473224d19196"],["/tags/Nginx/index.html","689e73e0fefb17763c3d93e9fda43b1f"],["/tags/Obsidian/index.html","4a12ad1bbcd8391ce6fda4bcbed625e5"],["/tags/Qt/index.html","3e004ec7a65b9216e284f1dc78eddf7d"],["/tags/RSS/index.html","c7f94d186c65acb997428b055e599551"],["/tags/SSL/index.html","8caa0bbc3a913bb029326fce8c0f3b53"],["/tags/Scrapy/index.html","2a98a748e90d850e0fee162caf274599"],["/tags/Web/index.html","bfa82b344b5e36fb08ad8bdeb257bab3"],["/tags/algorithm/index.html","88d9ce3d4219c612e54bb73bc2ab84af"],["/tags/bison/index.html","3060764109091231c2e9acb5471f5062"],["/tags/bomb-lab/index.html","afbc41f436fed2cd17285e2a0310f9ed"],["/tags/c/index.html","eb9e7b3464192a8e868c9dc079f7356b"],["/tags/cheerio/index.html","1330e03fbe550cf5d24e16fe05ca583e"],["/tags/codewars/index.html","b257eb8f7c9750d2de1d695383e7c789"],["/tags/compile/index.html","5cf209074b1a602617397e3647107013"],["/tags/compiler/index.html","2fde0a43bd5eb63a1384f0e79f59950e"],["/tags/course/index.html","497484dcb542e743ebef71d9afdd5de0"],["/tags/crypto/index.html","9bec10f47c819556656fc198900b5d58"],["/tags/csapp/index.html","5a4f620f699e4c7ec1ef7055518b705d"],["/tags/css/index.html","2429e7fdedf3aba8b67ea09c8c426a19"],["/tags/data-structure/index.html","cdd71516e874d386492cb0abe7c03c7c"],["/tags/database/index.html","0a38ab06d53629aea0f8bfe86bd1e2dc"],["/tags/deep-learning/index.html","5e6cc5c9544a3564d1ba8558702563c9"],["/tags/django/index.html","84f413b388f9f0a3ba70fc89d6ad4d9b"],["/tags/dwm/index.html","69260ac8fd65a0a4900665c9d50d01e9"],["/tags/exercise/index.html","a36016a9332eaf64e21e1ccfa354d5e5"],["/tags/flask/index.html","93e77b74bd460b038b761171406bf343"],["/tags/flex/index.html","444d9db696641886ec0f922b9c12bffe"],["/tags/front/index.html","633f5592168e39344cb18af71a00c38f"],["/tags/gcc/index.html","65fa73577c03f5b2162bf72ec57379f7"],["/tags/gdb/index.html","aec34a711af691b0757880231c03af5c"],["/tags/github-profile/index.html","b6225f08e78978b85e38310dc11644ec"],["/tags/github/index.html","a47d7f136280e5e2e854e5d6cf197987"],["/tags/graphviz/index.html","94ccb258b47d7354df013d50a74cb070"],["/tags/grid/index.html","b00031506ec91cfdce20af6ce9d6b836"],["/tags/html/index.html","eeaeef7a718704ae63168f2fcbbfe27b"],["/tags/i3wm/index.html","10f440f7a7f468e73881318b0ac6695f"],["/tags/index.html","39dba049431c104295163eb6741fe378"],["/tags/issue/index.html","b22e1aac1db4834c631c708fdaa557c0"],["/tags/jQuery/index.html","657c22a1044fc0ee92e0577577dab927"],["/tags/java/index.html","2f96cd7d131f5917d1632f5ae30b9268"],["/tags/js/index.html","e1d34ac6e0c5d3688e95837e8b5128e6"],["/tags/latex/index.html","e2b041964fe7540e8781d0032e98b6d7"],["/tags/leetcode/index.html","ed477090404ccd891788aa8dc78e7388"],["/tags/lex/index.html","aa1f1fda3dde77ce84e486eab29da521"],["/tags/material/index.html","918a013ea1cf533c362bb2a52b52ccd0"],["/tags/music-player/index.html","2748fc77271c039cde8939250e9f43f7"],["/tags/nodejs/index.html","7a72e232f2903f99d19a197dfd69c433"],["/tags/noj/index.html","f4661537d30f7d2ded7572ec70f98f35"],["/tags/opencv/index.html","6048311fc8e20652b660c29de0c1e1e0"],["/tags/overleaf/index.html","f90dd0f45f3305962aa76bf95a9b68c2"],["/tags/pandas/index.html","5ff2fa3c24abe3e8d035f8d11d20e80d"],["/tags/premiere-pro/index.html","0f88ec01a8962332c342f0a5e25174cf"],["/tags/proxy/index.html","e2c0d09a3a9d4ede422aa2104ab0abbe"],["/tags/pygame/index.html","83bf7a229ae20d0dcc9d1b447e1771ff"],["/tags/python/index.html","887e1bec2d1348def5d9a84d939a20b8"],["/tags/pytorch/index.html","6729dc7eb1b46b989787b8c2f2c7dd82"],["/tags/reading/index.html","afebeb73b53a5fa729de435cd5badfa2"],["/tags/requests/index.html","6a059a4d083f953f5deff9aa6807835b"],["/tags/security/index.html","5f04b5b160a1a1e8a4be1dfec6252a6e"],["/tags/shell/index.html","afebc6a96648587aa2cc56097bef6f92"],["/tags/sign-in/index.html","7004e14d621f112d914ce75c0d3f790f"],["/tags/socket/index.html","8911310d98ebaf6bbb2c72357fe41048"],["/tags/spider/index.html","bb0beb0970564757e1b1f22882c23468"],["/tags/splash/index.html","9e43304c4a0cba4213df807713344cd5"],["/tags/superagent/index.html","4596092d7c8e3269c8322ed87f23764e"],["/tags/tensorlow/index.html","db8c85ef5a16b42926727a27a7f00460"],["/tags/tex/index.html","99956b411647a8bcaa7d6d30897edf62"],["/tags/threading/index.html","9f2d1be677a4dcbab73f2ac496f2256c"],["/tags/tkinter/index.html","8cf57ec0e70f64e5ac4b0008f4c5d1be"],["/tags/torrent/index.html","2b1f55a603a0bd54e0b91b0458f3a30a"],["/tags/tutorial/index.html","ae9611eeb3af160e6d7964ddf7f8ab76"],["/tags/typora/index.html","0f44292f02ba3fd99a73e7b95e668f25"],["/tags/uniapp/index.html","5f16083b1e80434bf9de55923a8b9004"],["/tags/vue-element-template/index.html","eea3242abd9f0f1618d26a3898b534cc"],["/tags/vue/index.html","2d1febe2280d2acbcd3d458117a1c6f8"],["/tags/vue2/index.html","41971e1a3ce0a8cc6a661e6b6f0c8d2f"],["/tags/vue3-x/index.html","ed8b48e31fb2f6a4947bb45821c18eb3"],["/tags/wechat/index.html","d93b37eaa50cf061619d5003ae955487"],["/tags/wm/index.html","bbc0b928f624ff73cd82e4d8dc71b489"],["/tags/wordpress/index.html","d334568599140ec9f697ab93538b15d9"],["/tags/workflow/index.html","661e9b731998d50b155500976be7546e"],["/tags/yacc/index.html","7491dcc767db1ff5fca3edfac2a41abc"],["/tags/zsh/index.html","e4ebd41fbc3e8b7e6e525e28aeee6ab6"],["/tags/七牛云/index.html","5c1a58e8319dbb9dd89212750c39e9ee"],["/tags/函数/index.html","923a07d50e7dacefd14306b02b6fb163"],["/tags/剪辑/index.html","f71e69fbee2df76243ce810b51b9ec51"],["/tags/存储/index.html","22e2f5545939bbe1da9f5c3e8b34f43c"],["/tags/实战/index.html","227452864ffa066651a5e8ecf4bcc745"],["/tags/建站/index.html","70788baf2a176c657e08133951f06287"],["/tags/微信小程序/index.html","bd2fb481e90b276f8df1f6b6d5737cec"],["/tags/指针/index.html","0bcbbf993e20b4cf903f05feba155666"],["/tags/汇编/index.html","0a97c7b69a1ca69363a08b3adaf06575"],["/tags/爬虫/index.html","cb0854995e4e934a01d103eeea12d9fe"],["/tags/算法/index.html","0732d9ffdb348582de07c7edd364c256"],["/tags/编译原理/index.html","810630f4b565179b93d9dd73cb7b4f29"],["/tags/获取地理位置/index.html","685b853d80aee990f23ada86942d1ed8"]];
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
