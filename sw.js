/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a21b95c1471a5dab4f3261b32d011cfc"],["/2021/04/20/稀疏矩阵/index.html","fcb83eaf1bda2cac64a1603bfa46e795"],["/2021/04/23/广义表简介/index.html","e5a29f4d68056c701f2bd69f2e1e1b97"],["/2021/04/29/关于指针和函数/index.html","738ae7f0d4d96337603f27ec09168c41"],["/2021/05/10/哈夫曼编-译码/index.html","cbc28d015d757e01748b92337be7e0c1"],["/2021/05/17/数据结构noj_2/index.html","41a7ecab6f38e8f7f32f29fb8f1a87fb"],["/2021/05/30/数据结构试验/index.html","d351edd2c354f204975bd7415916e5fc"],["/2021/06/12/数据结构noj-3/index.html","71428b9f1f6e06d5bc48041287439d15"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","63e9bf3e34e4d1cb135a384ef3305555"],["/2021/07/08/课程资源分享/index.html","0563973fe2712c4ef55571ea72b0520f"],["/2021/07/20/Scrapy-下载图片-文件/index.html","8ace994fd1b349daa679765e8ae37c48"],["/2021/07/21/Scrapy-动态网页爬取/index.html","93903577eefe10d0b4f5ea34d6d4adb6"],["/2021/07/21/疫情打卡/index.html","703550961cd38d66b2cb0bbde15177a6"],["/2021/07/29/Scrapy代理设置/index.html","3a04ea05c7c7fc7d34cca53d10f148e3"],["/2021/07/29/数据库认识/index.html","e045ad308cc7aebe6e933cc3cee03ba3"],["/2021/07/31/Python多线程学习/index.html","dc7225ff06bf40764e240c09f1327bb5"],["/2021/07/31/tkinter-requests练习/index.html","4a753757d711c47bbe18544ba3070853"],["/2021/08/10/Git学习/index.html","b210abd0e6634c84bb2877a4de68babc"],["/2021/08/15/pygame实践-1/index.html","7d47da87d7d08eac2086d30fc2d6eb91"],["/2021/09/06/微信小程序开发/index.html","b7d1883cf00a9262ca45c4d963bcc193"],["/2021/09/21/命令集-1/index.html","2abfded3efd94451917dd29dffb39651"],["/2021/09/21/命令集-2/index.html","809648140014f5ffa8c103dd4b83dcea"],["/2021/09/21/命令集-3/index.html","3eb5c6f7f8c9f6638c8173f991a9468a"],["/2021/09/21/命令集-4/index.html","968aa917faa5d4f4036dc9ffa1937f5f"],["/2021/10/03/socket学习/index.html","4e7bd32f56d226c037bc67c2571e4628"],["/2021/10/10/dwm入门/index.html","8eac3d646fb58cd114b57559af570587"],["/2021/10/10/安装ohmyzsh并配置/index.html","ce987759b47b839cb267c83ec3380dda"],["/2021/10/20/css学习/index.html","041041b0061afb205f4c3a88cf37f03f"],["/2021/10/20/wm入坑/index.html","8cd7117d2aece78126fd14812dadab22"],["/2021/11/03/微信小程序学习/index.html","1c9d307c005c2a5ceea178ec566506d6"],["/2021/11/04/css揭秘/index.html","90bfcf3e9e61a410ee244beb6685c9c9"],["/2021/11/05/css-练习/index.html","735ec35c525be060750d5dc8b4133f1e"],["/2021/11/21/命令集-5/index.html","f4deb859bdf5142ca44738a17d6fb3a2"],["/2021/11/21/命令集-6/index.html","042c377a85043a345099b5239d0a856a"],["/2021/11/21/命令集-7/index.html","0c5bd602d8a054e1f9f88abcafbfabe3"],["/2021/12/01/搭建wordpress/index.html","398d65fd1592f9c06343f06e191e2daf"],["/2021/12/08/python操作百度网盘/index.html","59a30b68be79954438e02bb2de467b56"],["/2021/12/14/js爬虫/index.html","2126e3b78966e931cc10019ac0e5933b"],["/2021/12/25/为网站申请ssl证书/index.html","454474b57439354fd8cbca6185e97767"],["/2021/12/29/使用七牛云为网站提供服务/index.html","d5d28e88333a53dbdc8bf4787d29a4bd"],["/2021/12/30/jQurey继续学习/index.html","0c311f10495b8e49721ba92e6cb1bff7"],["/2021/12/30/jquery学习/index.html","5482ce09fb98697b30b1a84886eb418c"],["/2021/12/31/vue学习/index.html","dbc9797186d6379f3258bb49d149af4f"],["/2022/01/02/疫情自动打卡/index.html","e29a6940a6892979d2cd4432dd8570ba"],["/2022/01/03/javaweb初体验/index.html","74b79456c09ccd5f035977cb81667be8"],["/2022/01/04/codewars练习/index.html","185d72efa2c7fb2fb563e674c62c27f6"],["/2022/01/05/Spring学习/index.html","25202d2ca384250e8869265cc855b639"],["/2022/01/05/vue实战/index.html","65c66beed76f48016f8bbca8f715c0b8"],["/2022/01/08/gdb-gcc学习/index.html","936c621834571fb0d4f65eb806d668f5"],["/2022/01/11/python-opencv学习/index.html","5c5c3cf6983c9798494f5ee0ff470e2d"],["/2022/01/12/汇编实战/index.html","7f997968d96c491a0af7864f1ac864d0"],["/2022/01/17/pandas学习/index.html","b75f4992c3eaad869d00e7111cf2c5ae"],["/2022/01/19/可视化图的工具/index.html","9305fd1e7f59d1c4aa84747866fbb571"],["/2022/01/19/机器学习入门/index.html","53bcece56d1fd5da2038d4c2f4e0ccc2"],["/2022/01/20/cousera-ML学习/index.html","03f7a85373e58935ac29040c8e3514eb"],["/2022/01/30/typora解绑后出现问题/index.html","94fdff6314d2d264a1e01fcf95cc20eb"],["/2022/02/03/NLP学习/index.html","57f08aa4937f44bd88fe94a3aadd25d5"],["/2022/02/04/Web漏洞学习/index.html","d97647b3fb5700f5320f8a5fa3f29f01"],["/2022/02/04/pyqt学习/index.html","512350b8fc40637c04518419f41c1a7e"],["/2022/02/04/python爬虫/index.html","67f411aa8ffc9f7990ef6baca22e2940"],["/2022/02/18/Electron学习/index.html","abb33b22ca768e87204bc41c85df4c47"],["/2022/02/22/疫情填报字段解析/index.html","0b1ff7a4f21e31956bcbb19ec0c3d036"],["/2022/02/24/Bomb-lab实验/index.html","51f8acdfcd86259894f5b2697b351cb1"],["/2022/03/05/nginx学习/index.html","f1cf7107a9127ee71d0750d1662d93f0"],["/2022/03/09/汇编原理课程学习/index.html","ff33e1b3e3a202eda1761052c843326c"],["/2022/03/11/Keras学习/index.html","6d5d8dd4068a62154684961ea975644d"],["/2022/04/01/graphviz学习/index.html","9b2d76489c0057b52a8ec3c4c7eb2347"],["/2022/04/07/django学习/index.html","df8e2bbe40b5b6ac3f77f4df1db03633"],["/2022/04/11/密码破解学习/index.html","4597969162066326de5f0ab5f21df51c"],["/2022/04/12/flex-bison学习/index.html","931ba288067798e206cf278e9b3a7e0a"],["/2022/04/15/pytorch学习/index.html","ddb9ad4a9c152b980dd589e78443ad84"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","d5823b2e77b24a41f83497c85e1a180c"],["/2022/04/23/写一个音乐播放器/index.html","54c7bdbad07c68472a1f6e596be4d1f6"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","dcb4d28635768b5741b742ce02f38f88"],["/2022/04/30/GAN学习/index.html","b1fe079da950110448a10385ab0d7061"],["/2022/05/02/html精学/index.html","c2d3f1be64e1826f2119a2c3faa52442"],["/2022/05/06/write-a-compiler-by-yourself/index.html","a9fe891795de05f9cc8ec9bb1b5abb0c"],["/2022/05/30/acwj-01/index.html","4d86ff3086e9cde073e3bc2988846c37"],["/2022/06/14/animeGAN/index.html","3d0529c96bf5e77c7c911a61b7d28491"],["/2022/07/09/c-与算法学习/index.html","0d55261acd6ce1f22ec0354d56c6bff7"],["/2022/09/19/flask学习/index.html","664e34b2a34db0d0c1c088338b66fe8d"],["/2022/09/22/cs224w学习/index.html","5b5fb51504db4188584a919ada209843"],["/2022/09/28/记录一次wp重装/index.html","e705a1dee705e96c3ea9ec0406c8c27f"],["/2022/10/01/Obsidian学习/index.html","f2d820bc9e16cecfb49561e825b9a983"],["/2022/10/08/vue-element-template实战/index.html","9bc7a61490100901d8a6a6c943ad8d65"],["/2022/10/25/vue网上商城项目/index.html","92d0083364d80212257aa8d3c77049a6"],["/2022/11/11/leetcode刷题记录/index.html","16a52123ddd3acf9b104db433bd9b057"],["/2022/11/11/使用overleaf优雅地写文章/index.html","83326145b1435a68a3346a413e9b39ae"],["/2022/11/22/磁力链接与RSS订阅/index.html","c856814e334aad224f9d0e3a2f74843c"],["/2022/12/11/uniapp申请获取地理位置/index.html","0434f71f90e0768e7023c792f6ea744d"],["/2022/12/26/pr剪辑学习/index.html","244619ef686bb4566281ffabd135a9bb"],["/2022/12/27/css中的flex和grid布局/index.html","5a1314f7e92fcd8edb4193c9cb9ed39a"],["/2022/12/28/Flutter学习/index.html","2e30c99f758c919d610757f98c938c68"],["/2023/01/01/美化github首页/index.html","e5e5f9c79a310cb6c95a9c8ded49c2bf"],["/about/index.html","893383bd82e3ff71992029cecba895ac"],["/archives/2021/04/index.html","68740a657163e49f67c818b27aedc696"],["/archives/2021/05/index.html","86051e5f76206d04d9293c7eb0db8d18"],["/archives/2021/06/index.html","d75a2aae2cb653654054403e7ae950e8"],["/archives/2021/07/index.html","7c5795bcfa2fc31ec013601d9eddd2d8"],["/archives/2021/08/index.html","6a4e73a926cce9ff8ed3b931ca2817f3"],["/archives/2021/09/index.html","3563c89ed3f37bf981cc8b00b1b07c05"],["/archives/2021/10/index.html","19c6df36ad9619bf525f21ef3f9a8cba"],["/archives/2021/11/index.html","76533018d35a66f5e5a2c024986be1ba"],["/archives/2021/12/index.html","4da79b177f45b335845a8edc8cc3eb2a"],["/archives/2021/index.html","9299ec4864e3f2fe40c011b1d3ce4d2f"],["/archives/2022/01/index.html","f7ecd4ffb64c012a4a148a08ac824c5b"],["/archives/2022/02/index.html","b83035fe946a051f84c6da91b356549c"],["/archives/2022/03/index.html","32326b1fa81263f7daaaf6c065d4d0ac"],["/archives/2022/04/index.html","72080a345c2b860d38475f3215b54877"],["/archives/2022/05/index.html","01636f372ada1b305fa7fb31aa5b94fc"],["/archives/2022/06/index.html","5dd5e1d190a4e74e083295d132ca94fb"],["/archives/2022/07/index.html","4a1282103945bd518c412385bdaf8f71"],["/archives/2022/09/index.html","ef78a0389c4d1b7d24685c9d3f43f183"],["/archives/2022/10/index.html","181650c20ab3abf13f7b07f82a5f866e"],["/archives/2022/11/index.html","e703e106075e3680d88c5cb82470f578"],["/archives/2022/12/index.html","670dd8fb1f41c52cf2f0d4fd5acbaa94"],["/archives/2022/index.html","43483ca36ac1c80b6f999f65d7caddf5"],["/archives/2023/01/index.html","8afaf03d9ac4c592534b52fab15dfbe4"],["/archives/2023/index.html","08f46dde502eac8b0f36e0b689c1aa50"],["/archives/index.html","6d950f7d9c8e137eb1428b6fb498bdc7"],["/archives/page/2/index.html","c60a1221ae929e1d9bb3ae999a63d8be"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","a366299e6b62a4738d99fddee171c3b0"],["/categories/ML/index.html","aadd14d7ae2e20bae7a3a38d8079df7c"],["/categories/Nginx/index.html","6c9bd98639dee40c8e41c683bb522a9b"],["/categories/Spring/index.html","a0ddccdb7196b4d9d8820480f359439b"],["/categories/course/index.html","0ae674a2c9f21c438e19d6d1bb93cb8d"],["/categories/django/index.html","d8d929585594a92c2d535b84a07d8e29"],["/categories/fun/index.html","156071907a835ab965e46a4c7fcbac2e"],["/categories/gcc/gdb/index.html","2b689d1116ed75206e6afeaeced26364"],["/categories/gcc/index.html","7783b051e9bac431fbb747852d178266"],["/categories/index.html","7127f40ca3575c2d9293cc77968ddbbb"],["/categories/java/index.html","ad7fde67ab05b97f6d41c7c47656eb41"],["/categories/python/index.html","f02241dcc53fa3c0770259795eeae6b0"],["/categories/study/index.html","a034e3c6967fa9ee96413877dfc94692"],["/categories/vue/index.html","1aa7ced6077f3614d28f6d5ce93f2d73"],["/categories/误区/index.html","0c404cc10e93214cec4f0799c8349736"],["/commonweal/index.html","11f2e31f6e716c7ab3c8c021d6cbdc61"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f40f0c2ccf1664f75687110d9d0dd17f"],["/home/index.html","2e554c7ecdb80deff1ba6f9fa565e4e1"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","e46600d09e84597bbb8960802d0202ca"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","9435d2ca3483d71fee23c4be2e4a49f9"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","74ad111f9203aa00e522a95625648246"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","15eb28464bfc9fd3a06264087d42bd91"],["/page/11/index.html","2d84a5fae7b34c31efeb0d3dc38ad0c1"],["/page/12/index.html","fb2631470d2875d08acf0ca7500f8f93"],["/page/13/index.html","f8a222c0fd2452545f6fe30f87b46c3d"],["/page/14/index.html","be3a39b4428640cb5b2d5d192206ccf7"],["/page/15/index.html","9f5adbb5e100547a2759f69e9a31927e"],["/page/16/index.html","3045464b4558337d8034706168be885c"],["/page/17/index.html","7c84f5d2da5ec400a12230a5c7b9406e"],["/page/18/index.html","fd29141110447e1a83a8ade9de1e56a2"],["/page/19/index.html","eb6589e4799bb1f7a0179b0c8b3dfd2d"],["/page/2/index.html","967b1e3164078003f63918f28171d51a"],["/page/3/index.html","129339b1f5018db12caa541d8fc9ebde"],["/page/4/index.html","9cf4dba279c3207a3ee995f3cb1c6e0a"],["/page/5/index.html","b3590176ce701cd2912196e433828eba"],["/page/6/index.html","7601cd832f34d878a6d544e3a464fc33"],["/page/7/index.html","792ba5fc0d0e13ee41179e5aa258a073"],["/page/8/index.html","9087bfaf6bc27b0ec2077cab600c55bd"],["/page/9/index.html","4812aec2343e49998dbe70482b40ae51"],["/resume/index.html","d8ec5d95db25b63eb3c3c992603a0cb8"],["/schedule/index.html","f21cc506d8e137b1421d65f6b7a086d6"],["/sitemap/index.html","ff8cee5bd1efcb32ba4feaef6bc18f32"],["/sw-register.js","1ed74a9e740be43c998637c69877db97"],["/tags/AI/index.html","a6ae883715d800783aa415237b226e34"],["/tags/BT/index.html","fe7d3b7ad89ab2b7dac5f5d51d6d0c61"],["/tags/BaiduNetdisk/index.html","7778d6a1c2f1bd0166d7354cc6b37da5"],["/tags/CSS3/index.html","1c7d121cb9150d596b1b19cb1519612a"],["/tags/Electron/index.html","9e5c050667d79bcb8e8a00da75be7495"],["/tags/ElementUI/index.html","6809267116acfba66d50fa2db93c8c8e"],["/tags/Flutter/index.html","a78225b0915ff95753db036281b8a155"],["/tags/GAN/index.html","1473f51ee624d5d140342e61968af802"],["/tags/GUI/index.html","d6abc57390254368479cb119d72814b9"],["/tags/Git/index.html","9c5c30ab21649631ea8d21d88d723be1"],["/tags/JavaScript/index.html","b16b69cd9355d6739316f1fff9ac6a7c"],["/tags/Keras/index.html","d7cbca2b8e744defcdc02d799de510d3"],["/tags/Linux/index.html","f85f902d2d24a3c9c7f08dd2789d8c7e"],["/tags/ML/index.html","20227b07b09e236fbb818c55f0292003"],["/tags/NLP学习/index.html","9dcd515492ea4f8f908dae1cf514ce7c"],["/tags/Nginx/index.html","6ddf0023f27a16116c05bbd452e795c6"],["/tags/Obsidian/index.html","e1486b4631749785c2d9d8eaaf459ba1"],["/tags/Qt/index.html","8e8eefb429a9b85dc8050b523638dbaf"],["/tags/RSS/index.html","5814d5926cb0aaa3419f72b7f5efef2b"],["/tags/SSL/index.html","83c863b87019cd15a0449e203bedf99c"],["/tags/Scrapy/index.html","90af6cd5925ce2caccad4404be0b17d5"],["/tags/Web/index.html","33d3405b7177aa03bd7c54e020bf3887"],["/tags/algorithm/index.html","536ca8655426397789a20616aa20fc19"],["/tags/bison/index.html","a46270d1ab8a21c97dbb116ad1fe2e9c"],["/tags/bomb-lab/index.html","e60a5108e6963b31f8ad89ac9b847c3a"],["/tags/c/index.html","690ec69c2825896df36ce7e475ff76f6"],["/tags/cheerio/index.html","a4d00d7a27ab1d67f05ac7abdd90c741"],["/tags/codewars/index.html","0471e984b07110c98c35dc600bccde71"],["/tags/compile/index.html","0cc633ffa76c9265a9b64636e9445c08"],["/tags/compiler/index.html","12d6edc9b37b920c97047f6d835ab6f2"],["/tags/course/index.html","9caca517a1b69952894d5c54e092b96e"],["/tags/crypto/index.html","469335fed9af4b12f8e5f82bf9b3ff9c"],["/tags/csapp/index.html","fb6ac9c9b2cec6f3a94cfe37e747ec41"],["/tags/css/index.html","67684129a30284c2f3d0a431bc17f41d"],["/tags/data-structure/index.html","3372f45e333b58b95733052fd6d322c2"],["/tags/database/index.html","a68ef5442a0d7181a655c0cce57189f6"],["/tags/deep-learning/index.html","730dcaa7280aff25b0955362cd7b9f68"],["/tags/django/index.html","6585551d3dfcd21104da18c76148ccd2"],["/tags/dwm/index.html","f723b39b26fe4bba80c8d002c399ea34"],["/tags/exercise/index.html","e39033024dcca182c0cc19944b26af0b"],["/tags/flask/index.html","d3b46d33b1cd3a506fb0fbee769786d4"],["/tags/flex/index.html","d61542857102710f8c7c7648132aab8f"],["/tags/front/index.html","89b9d434ca857b4988252176755b8750"],["/tags/gcc/index.html","1b64d83eef4420cd8901f79c86ed4114"],["/tags/gdb/index.html","e278a84e166f8fc7e2b3577674183e95"],["/tags/github-profile/index.html","168dc005274ccb8a24d08627c6709272"],["/tags/github/index.html","ea590e83f2131eacffac5601f79af345"],["/tags/graphviz/index.html","040dadcd43823153b91acd65716e0f8b"],["/tags/grid/index.html","12bac91f7a1eeba40f0779ece0ff5d36"],["/tags/html/index.html","19ddd8d8e40afa80bf1b9d54d336b3f9"],["/tags/i3wm/index.html","6020377ac0c380913f8796d8c071df2f"],["/tags/index.html","5e7f659804218b04ba36f86d2fcf5fd5"],["/tags/issue/index.html","58d1e3978681af0d5f30e2aeeaff3f3e"],["/tags/jQuery/index.html","e66707d9c70bddc64f28c9f2444d4746"],["/tags/java/index.html","311d6ba1aabe4b80b08b678ee887b376"],["/tags/js/index.html","d07702703df0ed46a9cd4d6948fb0431"],["/tags/latex/index.html","9072461b04069afaaa3635f5986e48bb"],["/tags/leetcode/index.html","00ab3189cdbc053302768720cea929a6"],["/tags/lex/index.html","9ceb3b6753a5a6c18a666630030e680e"],["/tags/material/index.html","a52758145c3ebd43e26de1b4c1ed3c61"],["/tags/music-player/index.html","77a308f27e368d734d8c3dc3c48d5fe4"],["/tags/nodejs/index.html","399e2380e84c30373e26ab3f06434a23"],["/tags/noj/index.html","2bdaff424558dea9f94702731e7686a8"],["/tags/opencv/index.html","3d29e38f2dcc8985ad063084ffa2e506"],["/tags/overleaf/index.html","5d0a01a288e71850f61156d35285cf4b"],["/tags/pandas/index.html","c06ac19fc72435b574e1d2086ba364b0"],["/tags/premiere-pro/index.html","1a8826370fb046e8f56adbd143b7060b"],["/tags/proxy/index.html","bae96666593e006d3a4e4fb4558ee0e1"],["/tags/pygame/index.html","0497115cd6046cb577758830d65ac3e3"],["/tags/python/index.html","64615ac9448254797a215249bc8adedc"],["/tags/pytorch/index.html","0219c519a7393539c47f86234eb2be71"],["/tags/reading/index.html","13b17e2e0fe209b967500387ab7459d4"],["/tags/requests/index.html","872fd3ccd9e309ede4f3ddf8ebc347ef"],["/tags/security/index.html","8b87f03cfaf6fc8fe4b6fb19852b00d8"],["/tags/shell/index.html","07dae30254cc3e043fd52a16096a0a9f"],["/tags/sign-in/index.html","29d4190efd31d8e0ffeebcc8db31feac"],["/tags/socket/index.html","1e6944eb82d9b1891f638cd773f09b68"],["/tags/spider/index.html","d6b9d55de4493a4f3a2f63de63c469b1"],["/tags/splash/index.html","7516f5e363eae815e4a09d7f61504e48"],["/tags/superagent/index.html","8f4717d2fcd432ed8a24bb816ff37f2e"],["/tags/tensorlow/index.html","dc2d9fe62ec455e1efa85714666ddb60"],["/tags/tex/index.html","7f38d78abeab3f06e78323d4dab3ed9b"],["/tags/threading/index.html","bea6959aeb7fa4e51d7ab9224c39840b"],["/tags/tkinter/index.html","84b569e82903d6610a69df09e0732d9f"],["/tags/torrent/index.html","c08a73f87b45b8cfcf839504d272f5f1"],["/tags/tutorial/index.html","0bb70998452bf3dde96aa7276876358c"],["/tags/typora/index.html","69b4ff3f9d017fbb19590a305ac185d0"],["/tags/uniapp/index.html","3bfefa783b7769323100fd0ba326700f"],["/tags/vue-element-template/index.html","87e3bbfe365b09153bf1cf5ed92fb6fa"],["/tags/vue/index.html","6f09141cafef6438947075e785152920"],["/tags/vue2/index.html","73837f86c6515bf544ff438797f7c452"],["/tags/vue3-x/index.html","37992d8b9b0e24ceba76ef00fe433c66"],["/tags/wechat/index.html","e585141abc6f8ff0b2342961776644ec"],["/tags/wm/index.html","58ccec01cfd951c1d0e25df161f1a3a8"],["/tags/wordpress/index.html","0a6e0d5b672daca143759d05c25ad5f0"],["/tags/workflow/index.html","c5111351b20ade9e72ac9d47c6bdbecf"],["/tags/yacc/index.html","acb75b0e5bb478a49d938843a9132380"],["/tags/zsh/index.html","0493ac835888506b816ba678be1de8ce"],["/tags/七牛云/index.html","b27ade77964e3a7db6ef6a6ac3017983"],["/tags/函数/index.html","1e9f164fdbd055fa6012523d83877476"],["/tags/剪辑/index.html","e12a1de05d4b9e34908d4f08282af404"],["/tags/存储/index.html","4a12c6d8626b06c51a32bb851dc04b93"],["/tags/实战/index.html","83323b67135794846782482a783b5820"],["/tags/建站/index.html","f56430d98511b0546abaf4f2abad7f74"],["/tags/微信小程序/index.html","80b7328de2c718ad82fbb1151cad5e30"],["/tags/指针/index.html","5e535b6da24d6f061448bca0d2c70419"],["/tags/汇编/index.html","34b656c22d783c8c4b9bc8ca5eef36d2"],["/tags/爬虫/index.html","5ee8720f31e3da943b3f322684339bcd"],["/tags/算法/index.html","7390ce28fb15765e02becae153a44e93"],["/tags/编译原理/index.html","282bb1a32f10c7ca4cc76d2ebe2939d3"],["/tags/获取地理位置/index.html","cf3ed008ef32b1424e83d27d9a461b78"]];
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
