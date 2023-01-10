/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","8616c04851d817d36606338dd5dd8ff0"],["/2021/04/20/稀疏矩阵/index.html","79bb10a6dc16395957bb315c504f5e3c"],["/2021/04/23/广义表简介/index.html","6f34f05e2707a476ef4f39acaa8205c0"],["/2021/04/29/关于指针和函数/index.html","d11aa34972e4cfd5dcba497f691d925c"],["/2021/05/10/哈夫曼编-译码/index.html","9560dc09d39aa49009029999e3bcec27"],["/2021/05/17/数据结构noj_2/index.html","e3538eb7e16f14fab1b7a308f3fa6063"],["/2021/05/30/数据结构试验/index.html","fd16dc8d0aac08e08825334891462307"],["/2021/06/12/数据结构noj-3/index.html","6eb32a599d31f481f779d6aed14fd2d3"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","3891db72e5fb0093fe1aa115f8450820"],["/2021/07/08/课程资源分享/index.html","c8802e137d867a9df95e84bc8b84629c"],["/2021/07/20/Scrapy-下载图片-文件/index.html","d7687484332d26ba45cfc5adba8544b0"],["/2021/07/21/Scrapy-动态网页爬取/index.html","f35bdd43f17641d983b9d4d0781cee46"],["/2021/07/21/疫情打卡/index.html","117fa660999f2db0661a2332856bde39"],["/2021/07/29/Scrapy代理设置/index.html","b8207b98229a5f21ac359057cc6cf52c"],["/2021/07/29/数据库认识/index.html","7720b1305262a4003e91a228e0f47986"],["/2021/07/31/Python多线程学习/index.html","378fbf46b001ef33a4a1565c25f42269"],["/2021/07/31/tkinter-requests练习/index.html","8ed046d7ca7ed1a7831aeb13fdca0b9f"],["/2021/08/10/Git学习/index.html","ab36161f7a0f25d197dcf9db6f97ee0a"],["/2021/08/15/pygame实践-1/index.html","95e234ad1adb0486f3c7acab05051623"],["/2021/09/06/微信小程序开发/index.html","d20b9e5131379366e7d69c383f16a99d"],["/2021/09/21/命令集-1/index.html","2d907039be622fd4196aad669d300e5e"],["/2021/09/21/命令集-2/index.html","20e7fbe56618c6bb694137701b280d90"],["/2021/09/21/命令集-3/index.html","928f9c1cd21c36a30c37089d6e4d95b4"],["/2021/09/21/命令集-4/index.html","36f82a779bb67c8a5ba1a9d36957f662"],["/2021/10/03/socket学习/index.html","911d0682ffe8a5dd3633df8f2f02d93d"],["/2021/10/10/dwm入门/index.html","b5ef4b088b5c4c6bb9453dbe89ea149e"],["/2021/10/10/安装ohmyzsh并配置/index.html","6068da254a7d09b85adf226e3d478234"],["/2021/10/20/css学习/index.html","dbdd7ce30579139885cd2a0690c8f88e"],["/2021/10/20/wm入坑/index.html","d22f50fd85cd4eda9530725fa2a2ae24"],["/2021/11/03/微信小程序学习/index.html","ff80aae2a6f5a9e2e3193df24e9def01"],["/2021/11/04/css揭秘/index.html","f2375ccce4eab83dc1ed3c1d988554a9"],["/2021/11/05/css-练习/index.html","43499a2706e7569536e625091f0aa84d"],["/2021/11/21/命令集-5/index.html","81f4d6a07bd56570abdb4014072f6624"],["/2021/11/21/命令集-6/index.html","1cf5768411dd902c4d5e6c634952b938"],["/2021/11/21/命令集-7/index.html","b920263aad1c32a68c4cdff6f476554d"],["/2021/12/01/搭建wordpress/index.html","5cc7204cbf89331bbf222cede1de3314"],["/2021/12/08/python操作百度网盘/index.html","25d16b0eeaaf4347aa9cda323ee2bf7b"],["/2021/12/14/js爬虫/index.html","fd2a17ebcf7aa13f310a7777d4d6134a"],["/2021/12/25/为网站申请ssl证书/index.html","2def60959125994ceac3482182bc225a"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2dd525659c9e2767af0462767ab7d629"],["/2021/12/30/jQurey继续学习/index.html","2baefc7d08964c46efe2fcecb609765c"],["/2021/12/30/jquery学习/index.html","2347a296add24fbb133545de9c198a19"],["/2021/12/31/vue学习/index.html","bd4aad6bfafb81b736721cd51d99c908"],["/2022/01/02/疫情自动打卡/index.html","b624299c214a2850239776c15c116068"],["/2022/01/03/javaweb初体验/index.html","284e9a1c6a96b057499fb57c5c70faea"],["/2022/01/04/codewars练习/index.html","5e974604555b1f3fbafaf04e25afb816"],["/2022/01/05/Spring学习/index.html","03ff492835444357d223caa27108a5a4"],["/2022/01/05/vue实战/index.html","ab0eb127788c70c614e92626d14e4820"],["/2022/01/08/gdb-gcc学习/index.html","8b9ebdf5d1b627e95c458b4756816af8"],["/2022/01/11/python-opencv学习/index.html","36fd2da5d6f15735108d8a4257eb3b8d"],["/2022/01/12/汇编实战/index.html","561b08da33ba471daa81b84de7b72509"],["/2022/01/17/pandas学习/index.html","1bd91db3221465476b2ed3fdba5ddcbd"],["/2022/01/19/可视化图的工具/index.html","396437d4545a218946cb05c060f5f51f"],["/2022/01/19/机器学习入门/index.html","797fe520d2043b003faedeb75940cf69"],["/2022/01/20/cousera-ML学习/index.html","6efc9b809630c45928c66d4269e0fd88"],["/2022/01/30/typora解绑后出现问题/index.html","2c2d8a8e6dbfa748559a59feddb7f68a"],["/2022/02/03/NLP学习/index.html","0d7fdcadc2322cfc2c8bbc13c7436d42"],["/2022/02/04/Web漏洞学习/index.html","8dba5d07915197ad404be0b72411a538"],["/2022/02/04/pyqt学习/index.html","58a114491a6a39e2acbe4409298e8188"],["/2022/02/04/python爬虫/index.html","4810a217ce2e931b99e0b79762be45f7"],["/2022/02/18/Electron学习/index.html","c38f6ce65a527032aff2ad2cc7e8d070"],["/2022/02/22/疫情填报字段解析/index.html","2db33e7d5f7c1fa74bb7ec21eb988b08"],["/2022/02/24/Bomb-lab实验/index.html","c0e53c5a5aca3e25d3f98f1d40f6784d"],["/2022/03/05/nginx学习/index.html","59c509c52a0d8ce2ea620520bf955287"],["/2022/03/09/汇编原理课程学习/index.html","259ba1a2ab9e9e856327977ce0179293"],["/2022/03/11/Keras学习/index.html","50d56908ebfb13328ca1160107d017b2"],["/2022/04/01/graphviz学习/index.html","311b015f03c22456f11a8c264844e3ff"],["/2022/04/07/django学习/index.html","5b5a8572aef3fb3583d699d4dc791e67"],["/2022/04/11/密码破解学习/index.html","f2f7238b760997c761643294341dedeb"],["/2022/04/12/flex-bison学习/index.html","f20eed517a6b648c4c49a4054e187097"],["/2022/04/15/pytorch学习/index.html","0e3f7d65d01d1ef73fa7ea08cc4aba7f"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","916781fe8239ac8e1de0cae95a1e6831"],["/2022/04/23/写一个音乐播放器/index.html","7a65e337096ee97023b67bc9871a33c3"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","c0ce0bcdeb64a0cb18732d75d19c0729"],["/2022/04/30/GAN学习/index.html","0e71bf0722930afb1812a517c0b6fc5b"],["/2022/05/02/html精学/index.html","13447775b88483d3eb82063a9934aa93"],["/2022/05/06/write-a-compiler-by-yourself/index.html","e46c0c5c18d253d5971d6091ae9267f7"],["/2022/05/30/acwj-01/index.html","9a8d468d8661ac77d5e9fb5e9505401d"],["/2022/06/14/animeGAN/index.html","6f0daff1aabc43b5f782325c65659b0d"],["/2022/07/09/c-与算法学习/index.html","80515511e47635adbf4827f3bfa115df"],["/2022/09/19/flask学习/index.html","34d0ccd540b44a7bfadfb2d99f0cb225"],["/2022/09/22/cs224w学习/index.html","aedd2afad5b9198fd798ee8f20cd2801"],["/2022/09/28/记录一次wp重装/index.html","e4acf30f4869342cd682e266059fae3f"],["/2022/10/01/Obsidian学习/index.html","d69b04e56c97a86c07dcd2b37f340d7b"],["/2022/10/08/vue-element-template实战/index.html","d2f9ddf9e1cf1c3154627c09ad7530fe"],["/2022/10/25/vue网上商城项目/index.html","9406957feb374f22f0c8663a7852c5f2"],["/2022/11/11/leetcode刷题记录/index.html","55953eb37ff8c38b985bf4c0ca70ee00"],["/2022/11/11/使用overleaf优雅地写文章/index.html","b1c1773090f60d1a2da1b6b18886e967"],["/2022/11/22/磁力链接与RSS订阅/index.html","8f97bc032b7394324d65fd9b71d3ecfd"],["/2022/12/11/uniapp申请获取地理位置/index.html","86b26434eab01bfa578f1ba60f9bbf60"],["/2022/12/26/pr剪辑学习/index.html","36b1ec0be2ffd4f6f27e20df2e13e885"],["/2022/12/27/css中的flex和grid布局/index.html","01791daac8730ac9972a5977799a3b20"],["/2022/12/28/Flutter学习/index.html","7eb65a8b0b67cfcebe055d69a4a72bed"],["/2023/01/01/美化github首页/index.html","b2367cfe0a15919c9b6e1a24ef65f523"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","db0d4777ec2042514029c121a40346b8"],["/2023/01/04/构建微信快捷发布文章工具/index.html","6902011e20a542b7a7502a65635afe5b"],["/about/index.html","a837bcbb5f3f5fe4799fa8643e86fe4b"],["/archives/2021/04/index.html","855200f90bdf9e0a42e5b4ea0305eeba"],["/archives/2021/05/index.html","1dadb0e93c4325f8436dd603f0d49b06"],["/archives/2021/06/index.html","69467e81d63dc99348b982ac91c1727b"],["/archives/2021/07/index.html","956000dc139df76b82136cc1f21c0dc8"],["/archives/2021/08/index.html","2f2e3bcb7a5068494b34fed8962b4eb2"],["/archives/2021/09/index.html","5e7ba9bf9a85111da42a7b5c0462f3a1"],["/archives/2021/10/index.html","26a999466a8a90e9258bc637a8970eb8"],["/archives/2021/11/index.html","5c7f977dd41165d9574117696d243860"],["/archives/2021/12/index.html","22dcc4447c82f45c27c912f7ecd970fd"],["/archives/2021/index.html","424c933bbf564e263c17030c340bd1a9"],["/archives/2022/01/index.html","dfdd43d40b314a94ecc6dcdcbedd24cc"],["/archives/2022/02/index.html","980ad4b3b2ab123ddd7f3f2afc8c9769"],["/archives/2022/03/index.html","082db5a37030b294b0869d2cef5c3d08"],["/archives/2022/04/index.html","03aff2bc7211a63dd82873faaac6581d"],["/archives/2022/05/index.html","21e35fcc2f84a1390824a2a57230e891"],["/archives/2022/06/index.html","f4cccb3799c3c2d5b6f109f809ff758d"],["/archives/2022/07/index.html","b26e09e52423c916101aad0af142dfcc"],["/archives/2022/09/index.html","a3bf194053ed6e34fd0bbd4cd1cc92e1"],["/archives/2022/10/index.html","a64595eee89883eca8a40ba6b1f5e531"],["/archives/2022/11/index.html","acb792d4d09ac6117ca03e2189a91678"],["/archives/2022/12/index.html","f5e18c13acfb1a3a9e415326c2aecdbe"],["/archives/2022/index.html","c624553224b1551ce6dffbbacc63d89d"],["/archives/2023/01/index.html","fbe8bb54efdfa33752a90987ed42a317"],["/archives/2023/index.html","cd8485f9e91328f9cbbdd380261cea70"],["/archives/index.html","652176ca534e90fb442baf8c9c864a76"],["/archives/page/2/index.html","059ae4cc4246d39fcce411ec171cdf26"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","fea2a453ab517153dee386c457c3b8a8"],["/categories/ML/index.html","29963c3494b6520cf479280f6f4e6a02"],["/categories/Nginx/index.html","9a8b40549857984dd25b395a891c988a"],["/categories/Spring/index.html","2631f2323b5116df92e3011a8e85707d"],["/categories/course/index.html","d0ac2bc90c5f4920b7a675d96a2b4c47"],["/categories/django/index.html","546d37c5fb06adb124ccc9c2212b4628"],["/categories/fun/index.html","f3c9225bf94f9069195971c2ce2fc076"],["/categories/gcc/gdb/index.html","c45d69c2722f223f123f3ae1bf7aefb4"],["/categories/gcc/index.html","24491a391114d90114ab87ce894d65ee"],["/categories/index.html","2d1f9e83d44066512fbef3143e0e065c"],["/categories/java/index.html","bcef0bba24ca33c94ca150dcfb6a9c84"],["/categories/python/index.html","ac7768f89d4b582c626774401a8f5e81"],["/categories/study/index.html","c1f03584847581dded74f4b93f7b4fe8"],["/categories/vue/index.html","c0a3bd065001de4539e3d6a54bb0fcaf"],["/categories/误区/index.html","283c3bb4c9ba2a179b41b3e6383e835c"],["/commonweal/index.html","2f7910d19435e3e98cf88c6359e328f6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","0966270642bf40761263fd7c5ec3857a"],["/home/index.html","d79068f2a8a98e987aa069530c58cd12"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","78165d6a3e287e1a751df34a1c9d64b8"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","86a400f46f08a8606511fc5b6ea22ae5"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","1b34ffa95b82597b137057f22199fe28"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","9167fad83c6305f0737be3efc1d67905"],["/page/11/index.html","c3bbf7c2be8e8081fbc59273fbf996a9"],["/page/12/index.html","fc0c6009f73c5efa1c07f01550641247"],["/page/13/index.html","4a1772356933409b01c3ddb03130ad4e"],["/page/14/index.html","3c09c9ec4af246e62bd59b20a87c0edf"],["/page/15/index.html","b9a8cd5c259a8a76d1682288294890b5"],["/page/16/index.html","8d1e91fa0e1decc764b1a08897b8e23c"],["/page/17/index.html","1c77572d07270a6a431ce8897df15582"],["/page/18/index.html","9a5c5b7f4b936c1519de7ac68d6ea5f4"],["/page/19/index.html","0e6e3b717a3de9046300edf00b920f85"],["/page/2/index.html","58be5d29652c4c635622b40ecd14bd24"],["/page/20/index.html","e0af4d97f3ab10dcdc3be63b621b31de"],["/page/3/index.html","c4d9bc7431f2e6600e59cf912548eeb6"],["/page/4/index.html","79b4d9ba11d750a81bbeb162718907b4"],["/page/5/index.html","3547e199700c80f59ea68dac3295b069"],["/page/6/index.html","5a261c19f98f2f739c327df4ec8eddb9"],["/page/7/index.html","2e99c6ff36946aeadea57205fcb625c4"],["/page/8/index.html","14e66c294dd51822ec53c8756c6ee461"],["/page/9/index.html","2f0cd454564e67ffcd204e6c0b9cfcc1"],["/resume/index.html","47aa5de2f7d5ef4e5f7e8a41bec9c45e"],["/schedule/index.html","acb1ffd466cfe8831269f52bc46e38fb"],["/sitemap/index.html","761d472f45b6b53f8e94acc4b22f9e9d"],["/sw-register.js","2afc613a9b27153d2d7f075f9fabc425"],["/tags/AI/index.html","28b22e5ea45d0bb4fd34f53b5d92f881"],["/tags/BT/index.html","2922cf27b0a13b0539d52a8715404887"],["/tags/BaiduNetdisk/index.html","d6a114bf07e3130e31a4ec8cbe30f713"],["/tags/Bootstrap5/index.html","2d0cb3486e4e680614f427782493dc8e"],["/tags/CSS3/index.html","124d4084c77787550fdb2811b77e9e06"],["/tags/Electron/index.html","29ccfd3c5d7e2aba458e519085ed2872"],["/tags/ElementUI/index.html","ae0f2ef0198d3a8401e4bfb332ac3e50"],["/tags/Flutter/index.html","c7fb3ce1e14b7a0f43499b59961d696a"],["/tags/GAN/index.html","e3dbf12bbbe03c3c16832279400de905"],["/tags/GUI/index.html","1aececdfcc7421b44a1bd68e0570df75"],["/tags/Git/index.html","ea9b879019bb2741c2f08176809b2aeb"],["/tags/JavaScript/index.html","10d4840924d7f7f421fd7847c39c5ec3"],["/tags/Keras/index.html","a230205d810164347174f2f305cf86e7"],["/tags/Linux/index.html","8236d786f3137bccfdc24e42d42043a9"],["/tags/ML/index.html","f00713a2f3032bffbce123fdbf86b306"],["/tags/NLP学习/index.html","185e03dca48f70a6116d81d3375f5b0c"],["/tags/Nginx/index.html","c539d855c397b5c6f6f301c8c5005a00"],["/tags/Obsidian/index.html","98297d286360488fcf353982b721524e"],["/tags/Qt/index.html","106ea59c9d4fead198051624b25dddf2"],["/tags/RSS/index.html","4f2a9f6bbfdbd224a4d108b3f5c98539"],["/tags/SSL/index.html","2e474d53cfd5956b68b06f73ec88a106"],["/tags/Scrapy/index.html","296454e5f712edcea774a9588f90deaa"],["/tags/Web/index.html","52c10944d7ea4ef838ea0df352a5690a"],["/tags/algorithm/index.html","456b79cdea2d07dcf961c4457f2c0252"],["/tags/bison/index.html","166c6c9af1f2e33aba2f3cd9a515c45e"],["/tags/bomb-lab/index.html","d09af0ea02ce8857bb39ed7f4fbe444a"],["/tags/c/index.html","139da9051cd16948c7a3eafddf7285ca"],["/tags/cheerio/index.html","02fe3a4c7f89c3d90591138986108ae2"],["/tags/codewars/index.html","8594188e5c67c325c3fc776c0d156e48"],["/tags/compile/index.html","85af17bc7f9de70445ee864cc2d073ca"],["/tags/compiler/index.html","8f4baf49c2f2ee48863ccbab71314694"],["/tags/course/index.html","3927f8496a1ea2f92cbcebe120121120"],["/tags/crypto/index.html","d82a7278b6f9940d60813bdce53586fa"],["/tags/csapp/index.html","66eee15576ce2fc97c40d3dcfbd45487"],["/tags/css/index.html","93779f3ada2cccb71c3cecc5a1205cf6"],["/tags/data-structure/index.html","a71e8dfa65cbd0b928bf3e51f0062529"],["/tags/database/index.html","559e7586acadd9ea99c0a3be7b53b24c"],["/tags/deep-learning/index.html","d21b45fdfd55192944a070702539581a"],["/tags/django/index.html","6597ad9b01a0a54d845a8d4280122be1"],["/tags/dwm/index.html","337dd4f5f2d0c66313f4910c46b5cef7"],["/tags/exercise/index.html","625b89b3cedfbb59f813fe6f14e3b414"],["/tags/flask/index.html","fe1bbacb926fe366ffe3b7fa71164706"],["/tags/flex/index.html","66fa856203efdfe949ff848342b51d79"],["/tags/front/index.html","3d1acfc06bfd125c7257bc1b4e8990f4"],["/tags/gcc/index.html","c5940e49e5ca10b7fe8756b8f3f9207f"],["/tags/gdb/index.html","59b32af776220b7413601c648efb4517"],["/tags/github-profile/index.html","0c08e07745dfedab0009e3c67019f696"],["/tags/github/index.html","09aba731c8a56e07339527e1a456800f"],["/tags/graphviz/index.html","0b3fb240da1ddfce433cf4af39fa16d8"],["/tags/grid/index.html","6556d2d0994e610c4e97bd48c63ee62b"],["/tags/html/index.html","fe56a8e2854a10be62e7500917c62a6c"],["/tags/i3wm/index.html","3e5da0a45ed6f80662b8a2339cdd5972"],["/tags/index.html","cd1640fbc7c605815e4b3ef89489bf89"],["/tags/issue/index.html","22799cd49cc39470d8fe62cd332a2c87"],["/tags/jQuery/index.html","4bfae5aa39ebc24a4f42816ff704117b"],["/tags/java/index.html","4c3609dec65bbd2aa8b22d91cc74a267"],["/tags/js/index.html","8f12a647eb17f2099a72e776f021e3c0"],["/tags/latex/index.html","a621b3824593c3a31f98d9a3690cbef4"],["/tags/leetcode/index.html","7d934d4ef70c525c59b12d1d35257ca2"],["/tags/lex/index.html","2d96b1144865dc67083a226ab1efaaf3"],["/tags/material/index.html","788a6fce33e359609e1d0a3e83876916"],["/tags/music-player/index.html","9a2f000989a640959d9741c707f6a791"],["/tags/nodejs/index.html","1c1e75554da31cda77a5c180d9fe63a5"],["/tags/noj/index.html","8b53ee062aa4bcdd3c93c0e698eec049"],["/tags/opencv/index.html","1893ae2740e87bf290d308198cf78974"],["/tags/overleaf/index.html","39210d6817def3f13c178247d9b62783"],["/tags/pandas/index.html","cd7be1ea87a64cbd269896fa8b0f7465"],["/tags/premiere-pro/index.html","48ae2351ed5cb7ae35dc1fe1a2e92432"],["/tags/proxy/index.html","f686c187e266bcdd19e788196fdd8345"],["/tags/pygame/index.html","d4e948257ac7db311d7c8e225c7680f9"],["/tags/python/index.html","267a91ceaa7765397f7c6730553763cf"],["/tags/pytorch/index.html","b6780710f03a6324d80f3c69c2b17a4e"],["/tags/reading/index.html","37efe5f6428a35bb5eece4b78ea8081a"],["/tags/request/index.html","20bc32a6ffe22ea86e8c93897f698972"],["/tags/requests/index.html","09f81a602c28c74aac8a80540e1b5e0f"],["/tags/security/index.html","7bfcd11aa8af61af7688927da2d9e9cf"],["/tags/shell/index.html","20d8ab7c4aeb300580ee7a3798456fd8"],["/tags/sign-in/index.html","08647226ea291d88f661e746bb677db1"],["/tags/socket/index.html","4cfe5e506bc00a47dcbbe07d491b505a"],["/tags/spider/index.html","2d5ccbc8fa538b6cd17f0b464ada17e0"],["/tags/splash/index.html","fa3e1a6d050ff0adb73e6c2dfa16c6d4"],["/tags/superagent/index.html","0207dcbd36895f1141688c754505438d"],["/tags/tensorlow/index.html","edc1e4228cb35631f8a6eadf8bfc4c31"],["/tags/tex/index.html","90072f51e38c590091ebf3a7220e2e1d"],["/tags/threading/index.html","b0984fe367d0988e80d1b7231eff32f4"],["/tags/tkinter/index.html","086d0d17cb022a443016d03b2e98e4bd"],["/tags/torrent/index.html","c91e9bb1bdd03136bbe774732b3b4c08"],["/tags/tutorial/index.html","e4a5450690defcd48c21003103404fb3"],["/tags/typora/index.html","b110906b9fcb37e2d0a697bbd95c2646"],["/tags/uniapp/index.html","6f57411382df17f64d0403e019316f40"],["/tags/vite/index.html","502bb1e0d1ba2dc5cfb57abb7666561e"],["/tags/vue-element-template/index.html","d78508b923d2f66df301b1f9b2befd1f"],["/tags/vue/index.html","22774deb90598eaf003cd02b6099421d"],["/tags/vue2/index.html","9ff940a3d0030a7c2ba379f242d4fb82"],["/tags/vue3-x/index.html","193e96809e5cb57c814aa70587858a22"],["/tags/wechat/index.html","c0a5fb9103547469d4b827ce4f78b355"],["/tags/wm/index.html","2e5ad4fbf38f8f463d888e1a54bd8253"],["/tags/wordpress/index.html","85dd3612cb1f18888d8a9aa952ec1fb0"],["/tags/workflow/index.html","edb4558188c2dfa7583714152e2e48aa"],["/tags/xpath/index.html","be351d2bf25752d95ab4236c4ab934fc"],["/tags/yacc/index.html","cd82ad941c64a4816bb266a9a6dc4e84"],["/tags/zsh/index.html","0dc4040d1f81050bb7445b5a445bcc76"],["/tags/七牛云/index.html","6058b51498ecd2362c7ff56675e55f40"],["/tags/函数/index.html","5a26c51cb5363c1512a0ee194ec2cb11"],["/tags/剪辑/index.html","853004a02e854b27ede653b5b903c1f3"],["/tags/存储/index.html","183c997fa3c1221d29a81c56050ecab7"],["/tags/实战/index.html","e30e97ec15acf06f4660cb1d4d9221d8"],["/tags/建站/index.html","d4373717afa37d0b900e575797016bb9"],["/tags/微信小程序/index.html","07e52b265255a25beb44c1fb92dac53d"],["/tags/指针/index.html","d555bff5366589089f4759a96d41ce89"],["/tags/汇编/index.html","327155e014c910c341de2c1cfd05d7fc"],["/tags/爬虫/index.html","31455832f3456495fd7707655a99853e"],["/tags/算法/index.html","4f4c1b35e49bd3f7a6f9bbfb848671f4"],["/tags/编译原理/index.html","5e9d89bd12c8a3b9c4c60ac416157b5a"],["/tags/获取地理位置/index.html","8d4fd8cc1b2fa39599c6d697d2d94c51"]];
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
