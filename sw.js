/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","ccb1e7a4e3884f4e0500c5eff2f6610c"],["/2021/04/20/稀疏矩阵/index.html","7eada0aea7f7511e88a313c8908ad31b"],["/2021/04/23/广义表简介/index.html","7f2525d1161d62307e26fe89a1b62013"],["/2021/04/29/关于指针和函数/index.html","a3d8f550fe88cf060ff3ef2b73b70e7c"],["/2021/05/10/哈夫曼编-译码/index.html","5d0b372ff3574b72aff54f70490a777d"],["/2021/05/17/数据结构noj_2/index.html","75c8110d9221cc9825de9ad78b41d5d2"],["/2021/05/30/数据结构试验/index.html","45bb64c769cc5669f53f107cf9b16dea"],["/2021/06/12/数据结构noj-3/index.html","f37ee15eeee74c92acb1345c6e0f0e34"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","4747956ed038eeef22a6b30d9acaad84"],["/2021/07/08/课程资源分享/index.html","2afe8fe147529ea546feb9dc60bedd1f"],["/2021/07/20/Scrapy-下载图片-文件/index.html","6484935567686aa77bce415e26b2197a"],["/2021/07/21/Scrapy-动态网页爬取/index.html","88a00a5dc35f5c945f14912834d22a6e"],["/2021/07/21/疫情打卡/index.html","d69d5861b15b6ad826058b6e0598ad0a"],["/2021/07/29/Scrapy代理设置/index.html","d0d4c2d57dfde4f7236cb5173462d447"],["/2021/07/29/数据库认识/index.html","f04e705cbad841bfbb82b2232473f888"],["/2021/07/31/Python多线程学习/index.html","314dbe2b83c992f4d1c7cf31fd2687e3"],["/2021/07/31/tkinter-requests练习/index.html","54f03082b4481830a219e8df1228f3a9"],["/2021/08/10/Git学习/index.html","0de5869b5b4fdfc83ce7123988694744"],["/2021/08/15/pygame实践-1/index.html","a4129db5f666bce4fd1dffafde14eec2"],["/2021/09/06/微信小程序开发/index.html","0637d38b144da47e48b056f7d296bc3c"],["/2021/09/21/命令集-1/index.html","50a26ac1f319317579ff0c5645bcb1e5"],["/2021/09/21/命令集-2/index.html","669717f76993c747a6d6c5317e817e15"],["/2021/09/21/命令集-3/index.html","dbfa9effdd9aa86a64dca206cef95726"],["/2021/09/21/命令集-4/index.html","099892bca6e5f2746baf01d67a2fa4ba"],["/2021/10/03/socket学习/index.html","7873f31dd602846bc95d0becbadb72b4"],["/2021/10/10/dwm入门/index.html","ec5f3c543cad39a03613b796d44d58e1"],["/2021/10/10/安装ohmyzsh并配置/index.html","03e169b24375f4ac277ffa7f1bb52652"],["/2021/10/20/css学习/index.html","6f4f2ea9b6267826c2fa9c6082737a82"],["/2021/10/20/wm入坑/index.html","7d16e765b634fb811aef0aa0e7182d86"],["/2021/11/03/微信小程序学习/index.html","95977c0f7767596092705fd6c178cacf"],["/2021/11/04/css揭秘/index.html","2f8405945130ac0b6e5c0cd800c8589a"],["/2021/11/05/css-练习/index.html","615229340a20c86a0b08b533f3fc8cb3"],["/2021/11/21/命令集-5/index.html","245b94dda0f30e19d9b17e397fb2346c"],["/2021/11/21/命令集-6/index.html","00fcb0dcbf1bf66d054d50688ec4eaf6"],["/2021/11/21/命令集-7/index.html","ce8c5395bfda05c681cd99ae4ceeea15"],["/2021/12/01/搭建wordpress/index.html","62a45dcd40a9db0099407819f6f3366e"],["/2021/12/08/python操作百度网盘/index.html","4658d54001526d0ae876699f8ff7030b"],["/2021/12/14/js爬虫/index.html","096897a5acb7cff2c04e7a471aaebfe6"],["/2021/12/25/为网站申请ssl证书/index.html","64f8e89f2b147a9c320cb2cb628820f3"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2c0b9693a38bff89558a1d7b6c8ec975"],["/2021/12/30/jQurey继续学习/index.html","09b70ec8e1d9f01777d5d7477419b493"],["/2021/12/30/jquery学习/index.html","84d26fce4334611a78d5219941c6a1e0"],["/2021/12/31/vue学习/index.html","eed4e267acd85a4ec9c6029be9101e59"],["/2022/01/02/疫情自动打卡/index.html","e8706c763ee6146124ee960cd10d955f"],["/2022/01/03/javaweb初体验/index.html","31fcdcaea9f02a1030f002dc80ee5236"],["/2022/01/04/codewars练习/index.html","9399ca45ec9ab68a4a93bddcd1214ee7"],["/2022/01/05/Spring学习/index.html","b442880bae2381032121eb739061b4bf"],["/2022/01/05/vue实战/index.html","1f15abc1d50f28e2ad4b742831474783"],["/2022/01/08/gdb-gcc学习/index.html","e178d81c2baefb35d4728474106f0e68"],["/2022/01/11/python-opencv学习/index.html","113700da04831c5962989b294f3d52bd"],["/2022/01/12/汇编实战/index.html","2a37cdb90eeda021ce2f338771cc9262"],["/2022/01/17/pandas学习/index.html","61bf36b071451dd30802b5a3130309b9"],["/2022/01/19/可视化图的工具/index.html","a2540968414daf0ab0b6229c3fe8af46"],["/2022/01/19/机器学习入门/index.html","b2c3bcd4779bb4a14574af421f0bdf60"],["/2022/01/20/cousera-ML学习/index.html","8f05e910e8de45d68a0ed830f0e6a8d5"],["/2022/01/30/typora解绑后出现问题/index.html","0ae415e2546b5eea1dd009168355505c"],["/2022/02/03/NLP学习/index.html","46c883bd09ed9e78bdc0772803068a33"],["/2022/02/04/Web漏洞学习/index.html","89a0478b4f883a1d58c5b4ff252e3b14"],["/2022/02/04/pyqt学习/index.html","ffb65bb09b56bb6cc33e407ca9b5d620"],["/2022/02/04/python爬虫/index.html","f27af2535a1dcac0a7e7bb285b6f2e2c"],["/2022/02/18/Electron学习/index.html","f37f83647e994539d69c7e357217c517"],["/2022/02/22/疫情填报字段解析/index.html","e690aa641ec343a4698c52e90fcc3bba"],["/2022/02/24/Bomb-lab实验/index.html","6c90a3c27dd3d81c091e1e8f24664b56"],["/2022/03/05/nginx学习/index.html","c9023439d7f8c67a182034c5ca346ca1"],["/2022/03/09/汇编原理课程学习/index.html","0178243b9470e903623e90f9680216a7"],["/2022/03/11/Keras学习/index.html","973a1c3c94e77852a97d1e51221acdd7"],["/2022/04/01/graphviz学习/index.html","95bf77c996e4a89c589ba76350ebebcf"],["/2022/04/07/django学习/index.html","3dd484cd44bb8f3d784d928647dde1c3"],["/2022/04/11/密码破解学习/index.html","33a656012f232981f4e5ba8e5f3158cc"],["/2022/04/12/flex-bison学习/index.html","b0a1ad532b3a68b56faef66327316a6d"],["/2022/04/15/pytorch学习/index.html","968399a1fcb28f0d2f94cfc9f39167ca"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","7c2b0e7c44df1cbf238ad11771825430"],["/2022/04/23/写一个音乐播放器/index.html","a4363ac6913da86009d8411c57c91b05"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","81a4609f63ea52c458fe4b0855e36edd"],["/2022/04/30/GAN学习/index.html","7d25353087e08957bce74c98f415345b"],["/2022/05/02/html精学/index.html","3e8c00b3164f79711d2f855acfe91a8f"],["/2022/05/06/write-a-compiler-by-yourself/index.html","5940dcde18cba6021b77ec6a4141fd2a"],["/2022/05/30/acwj-01/index.html","2fc839a9e297c964daa8cf693236c8b2"],["/2022/06/14/animeGAN/index.html","6e7e9cea673ea348370bd1aa57488e5f"],["/2022/07/09/c-与算法学习/index.html","f638e027370459f489c90bbec5aeb8a0"],["/2022/09/19/flask学习/index.html","370a77a11ea72cddbe1efe7e4eb1ee91"],["/2022/09/22/cs224w学习/index.html","f237997a9e3213d98a372f61e8f71624"],["/2022/09/28/记录一次wp重装/index.html","d9e5fb77d5362f3c9fc8cef6616c75fc"],["/2022/10/01/Obsidian学习/index.html","6f7664acab2706493e68aa9c0c89334c"],["/2022/10/08/vue-element-template实战/index.html","bf7153e5184066986e3f11bd1f1bf861"],["/2022/10/25/vue网上商城项目/index.html","b2dad1eb2c82e9d79296a9d87baf35f9"],["/2022/11/11/leetcode刷题记录/index.html","d1bb41e469c23a1f5020ea759e3f29fe"],["/2022/11/11/使用overleaf优雅地写文章/index.html","c51aabfb1ee2ad6b9718f355c5aad372"],["/2022/11/22/磁力链接与RSS订阅/index.html","be973659f867a0ad5df28d88ecff03a8"],["/2022/12/11/uniapp申请获取地理位置/index.html","8db430b320a4a3d8b406e674a9b7c82e"],["/2022/12/26/pr剪辑学习/index.html","28c4149abadf59fef559889913907a97"],["/2022/12/27/css中的flex和grid布局/index.html","b8a9cbe8ce92062b50361b14b1f2e920"],["/2022/12/28/Flutter学习/index.html","dc2614977c7d05263d1ad2a7e3f18a73"],["/2023/01/01/美化github首页/index.html","a5f9940550fb81c8faa4643c336045e7"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","b3ff4513da2dfff58a896e35be85fa3b"],["/2023/01/04/构建微信快捷发布文章工具/index.html","169315807542581dd9803579d7acb130"],["/2023/01/14/dart学习/index.html","a190e74160aa2d1865c9b4c789138d90"],["/2023/01/23/闲置服务器BT下载影视/index.html","ecbe807003629775b20d121e0cb27ad9"],["/2023/02/07/TotalCommander使用和学习/index.html","69042218b35938bb9df6601072b04bbb"],["/about/index.html","1d67ecf653d2a7d3a33b98a3c2ac7faf"],["/archives/2021/04/index.html","172d40870d5071ed23c7174b28ea7d69"],["/archives/2021/05/index.html","bba1d9b8c0c0f284c7d67f767786285d"],["/archives/2021/06/index.html","714684123ab19241939dddfc5b1af5f4"],["/archives/2021/07/index.html","ce0470b6c0fab4b0ed46d2e9ae5f3a90"],["/archives/2021/08/index.html","34a0522ffe72527463c8b7e54712bca2"],["/archives/2021/09/index.html","5ef8223bb7458a431fdbc1315960fddb"],["/archives/2021/10/index.html","56b886ff0a41818350dafab3309fdab3"],["/archives/2021/11/index.html","e698f5f695689eb7b2665a6771a4af99"],["/archives/2021/12/index.html","23f39dd5c26eb7cb7f88f9be17da7f11"],["/archives/2021/index.html","d085606077dc3533777bf25ba3dd863e"],["/archives/2022/01/index.html","ea3ca1e2b6d81838efd68eff4af8760e"],["/archives/2022/02/index.html","4345bc09db561ec10b9cc48483bc1936"],["/archives/2022/03/index.html","d0cdde0cec69f3e1581a20aeb39e0513"],["/archives/2022/04/index.html","d1741aba6d96b0005174097f1b01c347"],["/archives/2022/05/index.html","cfab0c34bcd171cf68d513718157bc90"],["/archives/2022/06/index.html","68cc3189b7b02fd4f02cd3ca356d196d"],["/archives/2022/07/index.html","1f7522c87c6f45bf70ab534635083842"],["/archives/2022/09/index.html","be424e33add8c2ce306a41be22b11914"],["/archives/2022/10/index.html","ec5febfed6abdb28e5431913f9efd8ae"],["/archives/2022/11/index.html","4873c60e4cca996aa2805f0628455d6f"],["/archives/2022/12/index.html","6d1d6c2c86b3853aab2c5337099acac4"],["/archives/2022/index.html","25b1741d3edacddfd130313b38a6124f"],["/archives/2023/01/index.html","34d30e9889691815760e67d80b5f4913"],["/archives/2023/02/index.html","588b22e1741f2a1166dc7a2bf00e7cff"],["/archives/2023/index.html","007722e5b4579a8f083319ee2c5c9b14"],["/archives/index.html","a95b4977a9705d52168cce9b3b8d7c2b"],["/archives/page/2/index.html","a27691a99733e40f4c263e8e7bbb94ab"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","958d71a937d120bd0d5ca37ba41a173d"],["/categories/ML/index.html","c1f38ec911ab818c657f5d31a87d2786"],["/categories/Nginx/index.html","1956cd1f7983a35043fed617c0afe1c4"],["/categories/Spring/index.html","842926340b6b875c7a4d64f5c573e644"],["/categories/course/index.html","bd93c55ce339ecc0d1b7a494a94fbbce"],["/categories/django/index.html","8793eac4ce9c0b31f916b5b3e144356c"],["/categories/fun/index.html","70746dc4cd234e1fbe9b891f2fabb2ac"],["/categories/gcc/gdb/index.html","fdb99b0561077e4972b5eadb3ed9bef8"],["/categories/gcc/index.html","1b717512d79d1dd1c68dcd678f5fb394"],["/categories/index.html","9e5a9d59d98a4ea63d60a1966e78e801"],["/categories/java/index.html","0b89b340c0eed8711f9d974b946ad6db"],["/categories/python/index.html","4fea5050e67fd39d2e475c545decda42"],["/categories/study/index.html","b4e5658ba28c47f503482d52445cb09d"],["/categories/vue/index.html","582d8107441308644cecb86161f3bee4"],["/categories/误区/index.html","769c7c8f24030cd5681268cee30d1ba0"],["/commonweal/index.html","23f0b222a3b97a3c125ef7147dcf30d6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e97f753b98267910ae4a8951495bc71"],["/home/index.html","a1b5f429073e75064ebae3a3b2322c4c"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","4766ba13ef73059bb07922dc26541333"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","d2d1c84339d31d02f5471458e82f5109"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","7f93c315d05c8622c0a9329f5b88326e"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","620dcd76d14b30456ed67a24c22b3015"],["/page/11/index.html","2d7963c5bc3673151b59198e55c56465"],["/page/12/index.html","91e84fcb4c02f856bb2f00b8b4d6f86b"],["/page/13/index.html","68671b12ab50560a05b6c24472505213"],["/page/14/index.html","cf9e8e57cc43ea49f25261f3a5861262"],["/page/15/index.html","72cd4527e8a38086584c7136b4e093b6"],["/page/16/index.html","3f063d1822c0b4adad73ed467f65a888"],["/page/17/index.html","9eccda20be1ede8b4a3506ccc11ea20d"],["/page/18/index.html","29c2b5e21bfa3f7a3bbf6f60227dd63a"],["/page/19/index.html","f67e940a98c2f38303c3960f9ff6ceed"],["/page/2/index.html","6bcc7daabc4463abc1e1d7702b0d4225"],["/page/20/index.html","4ddeac4ab0d1a052258dd3ba71af9c46"],["/page/3/index.html","7eacad51c66f4e84432271eefd19f6c4"],["/page/4/index.html","8193270ebdaf568404bf5c0a7babc56a"],["/page/5/index.html","031734f5a13f0ea58a5e6c323d7d9641"],["/page/6/index.html","e0bf708f04a15f7e632849abb4439a95"],["/page/7/index.html","3e347f1846fb82c17c312ea2096d572a"],["/page/8/index.html","0b491ce4da7175f121d216b8f7379cd1"],["/page/9/index.html","2019a517ef5a23eb23b419420d8e776f"],["/resume/index.html","e57ceccec75b2aa4dcd0b4cd8e4ceb6b"],["/schedule/index.html","a36dbfc80e05e0a26086986e01868c23"],["/sitemap/index.html","4ef1ba4d340064a49fcdb2403ed92538"],["/sw-register.js","95c60ae9ed28182f746630f0445c7062"],["/tags/AI/index.html","a6d165690e3c8d5201368f24528c77ed"],["/tags/BT/index.html","43d5ee6a637491b2da651aecfd68289b"],["/tags/BaiduNetdisk/index.html","7c423aee5a4288ba82d0a3e14474bb13"],["/tags/Bootstrap5/index.html","a110a4b583d1a134a43df284f4360d02"],["/tags/CSS3/index.html","266bf5e953df539d702e33195c629948"],["/tags/Centos/index.html","f1e4331e2f8145474b22ab8fbc71419d"],["/tags/Electron/index.html","1fe4eb890c6258a1e4c81e13fbe54e54"],["/tags/ElementUI/index.html","49ed6ceac72173aad2f9f96c6f716daf"],["/tags/Flutter/index.html","00d2d586329c5cc470c1dd348a5a98a7"],["/tags/GAN/index.html","48c673d4b428952fbe6362b2a02da5d0"],["/tags/GUI/index.html","fc715ca3b167a52d4c63adcaf9264217"],["/tags/Git/index.html","92d13ac0f7e80d0020463781c1d8f82e"],["/tags/JavaScript/index.html","0b7f4a7b4ad6ca99b41b5f822b9ca4c0"],["/tags/Keras/index.html","e5c0c6d7dc4a96f39c1a61e34ad536e3"],["/tags/Linux/index.html","4da77be38034f7a5c73e8e041f1809e5"],["/tags/ML/index.html","b061a42fced60991209ca6206c5136aa"],["/tags/NLP学习/index.html","2310346206fdb758323b6bc990fba0f9"],["/tags/Nginx/index.html","d09e299f929991a766439e54da443904"],["/tags/Obsidian/index.html","df12f69fcdbed923e9d4f91468c62cb6"],["/tags/Qt/index.html","720a9f464692f143823d768f0444942e"],["/tags/RSS/index.html","e385da83453a3ab9ca0dfccca1ea5ce4"],["/tags/SSL/index.html","f30e2d98a6ea29342ed4527d451cfb00"],["/tags/Scrapy/index.html","2e55b6639f1f22b107a5d0ad8d3618db"],["/tags/TotalCommander/index.html","d3b10e6882aa2d8ba15c9a20165b68df"],["/tags/Web/index.html","2e010e0cc3d385a9172213be75590b35"],["/tags/algorithm/index.html","77f027fc7c58e7f1d80f05a1c98596c7"],["/tags/bison/index.html","a82ba980b00c16811041c79bbac30c5e"],["/tags/bomb-lab/index.html","45c8addb7dd0de1d521a7d85912af802"],["/tags/c/index.html","41d21d9c44a78408b506ce5df02da1da"],["/tags/cheerio/index.html","f1d4ebefe89ff142d3687c10738583dc"],["/tags/codewars/index.html","8f453c369128c97d006d34175dc639aa"],["/tags/compile/index.html","298c531c5a9dd3edbcb4002d526d12a0"],["/tags/compiler/index.html","e3e5cb1b18c24ef0e76191c9e566d88f"],["/tags/course/index.html","89445032f2df261d405aa949c18ca376"],["/tags/crypto/index.html","f812cbebfe8b3fc1518a73d4c30bc1d7"],["/tags/csapp/index.html","0b247c72a8792e70f2af2e92ec6d1c18"],["/tags/css/index.html","a01db2cf903d30fea3e11e8dd6193b50"],["/tags/dart/index.html","1d3cee190742286217ad0627c5a22c04"],["/tags/data-structure/index.html","7149c9fc240cc27145a64907835155da"],["/tags/database/index.html","9462cab915b54e3d1f61ac3746a878af"],["/tags/deep-learning/index.html","183df898eecd2259465451133c2f7f88"],["/tags/django/index.html","42c513c70b78de7cc376402d4d89e406"],["/tags/dwm/index.html","bc4dd7fbdb95df14bf285cd9c6a73ba3"],["/tags/exercise/index.html","db274a33583fdf6a705300427dc31c0e"],["/tags/filebrowser/index.html","2188db24c3e82733df52cbbd2dde4371"],["/tags/flask/index.html","eb929869b222a5195b1ea4554b5130ef"],["/tags/flex/index.html","e357712f8ef0f1ee600c258d31eafe7f"],["/tags/front/index.html","cafc9ea5c599fb89e4d2189459faee9c"],["/tags/gcc/index.html","59d413059e5eb999c8cdb201945f02c9"],["/tags/gdb/index.html","2c018f2d91fa0047d71ae04c20ee2626"],["/tags/github-profile/index.html","4912d20076a25309580831e4ff176fc3"],["/tags/github/index.html","7aa5a4cb3b5021bf28e0bdf53e34d919"],["/tags/graphviz/index.html","d11954926cecce9d3abb49aee7022db1"],["/tags/grid/index.html","1c0687a8a6157d008cc8adfedb2bdac3"],["/tags/html/index.html","a4b443181ddec3f7fa531fb59a875a56"],["/tags/i3wm/index.html","9f02f0c9949555bd4e35ca35828c99d8"],["/tags/index.html","ce869d011e4df1d29de5d1618c04b77b"],["/tags/issue/index.html","12be91e3566a3c9051bb94fad266f459"],["/tags/jQuery/index.html","6e074643bb1ff941adccf1578b4e147f"],["/tags/java/index.html","838f6f1ed3ed45ee86b9f6f5d809f3a1"],["/tags/js/index.html","f1f7c36df75fe078e67561647bcd837d"],["/tags/latex/index.html","565f5dd6d614aced5cd6553d86f34a2a"],["/tags/leetcode/index.html","b538473faff5c06106edc336cdc02cc4"],["/tags/lex/index.html","fa68e8a7bef989a5838b8602f5c98a43"],["/tags/material/index.html","cdcfe98115e97717e01ded16c9243c2f"],["/tags/music-player/index.html","671bf3e10420b985eb112617426eccbe"],["/tags/nodejs/index.html","fdd6a5cb917fa9051c6a88ae14afd906"],["/tags/noj/index.html","1ceff341ccbd85aac78431d7bbd93277"],["/tags/opencv/index.html","b334571c919407f5ff72c878a5d41258"],["/tags/overleaf/index.html","d1cd62c6295f413f722cbbd14bb471a8"],["/tags/pandas/index.html","63fe1e69b0c29de61c8d8eaaa794cd49"],["/tags/premiere-pro/index.html","453a8c4a9a0ffcb262a3015b304501c0"],["/tags/proxy/index.html","4dc8fb063424a39a8aeb7915206721b3"],["/tags/pygame/index.html","544f75e01feaa07a4cb5754b4f8f6a99"],["/tags/python/index.html","a66cdd3586365eb5e4f6561d7e5658eb"],["/tags/pytorch/index.html","1a96114e15d66a93d53954eff9057cef"],["/tags/reading/index.html","1e0dc60b8bfd8f189be8c8f7213c9a67"],["/tags/request/index.html","e1ee5243da717763bdef91c0f3ea230f"],["/tags/requests/index.html","858b7ea87b6db4ed51067c964e96780b"],["/tags/security/index.html","a45674175f07965d3d0b07e05c43a92b"],["/tags/shell/index.html","ef121f140b053c24fecef3b106a23613"],["/tags/sign-in/index.html","6be4b400617f3ace2c2bed0365cdf92d"],["/tags/socket/index.html","6401f8449aa4d6982bec94217e3016c5"],["/tags/spider/index.html","4ed0150394c09889c69eeb82e472bdad"],["/tags/splash/index.html","9a94e8cc6990eb0938a900d6b4477893"],["/tags/superagent/index.html","7eca69386916304f1d0852cb43864042"],["/tags/tensorlow/index.html","c7d33f1e56bba7f8d961cdc75949f1eb"],["/tags/tex/index.html","5a60cc68683b0482b9e1b55eb41a80bd"],["/tags/threading/index.html","244aa2d4725e44e312d5edef1cecc238"],["/tags/tkinter/index.html","2ff080e5195a990786fb63d9e59de05d"],["/tags/torrent/index.html","14102c75244db56d82bbf10656486412"],["/tags/tutorial/index.html","ac5c2e450f19a6d12e1bcaa3d09560d8"],["/tags/typora/index.html","ff9e7eb386e54aabb0b5eb193b1be034"],["/tags/uniapp/index.html","2eb058daf4158e96fc863b3e14cd17e8"],["/tags/vite/index.html","20fdcebfecc7d0952274fb1c622f56a0"],["/tags/vue-element-template/index.html","78bc14e7dddd8d1cfa34d01ec4413de1"],["/tags/vue/index.html","67ebee6bb0f3b471e95aeaaba2395c56"],["/tags/vue2/index.html","1c3f2c1548147160ecbb7cde54cea01f"],["/tags/vue3-x/index.html","23e6278eddbbf06bb0e1872b0714439e"],["/tags/wechat/index.html","31d9521c42f54acab4186d70f03a8298"],["/tags/wm/index.html","846624acff3d416dd0979bb1f7ad994d"],["/tags/wordpress/index.html","a6e353ad91db0c72f9e4a978d659dcc0"],["/tags/workflow/index.html","1a0d6271512c9ffac17456e83245b0a0"],["/tags/xpath/index.html","86576f4d7b85840e2598cbdd68a117e9"],["/tags/yacc/index.html","0891fef0e602f524cac2bd3789068569"],["/tags/zsh/index.html","744dd21e724a6d3b4bcc27a438e97805"],["/tags/七牛云/index.html","dc0c035a2e50aa86d1a63d6953699cef"],["/tags/函数/index.html","cbc400d57f2997b9f2703f03f1d6d6f1"],["/tags/剪辑/index.html","d134ea6cb84a6ce01221ab84ce3ccf60"],["/tags/存储/index.html","93d5a702c322761bcd53b383c388f7e4"],["/tags/实战/index.html","997a976da0fda25e66ff2d0946430823"],["/tags/工具使用/index.html","378c1a25fd141e210f1565563b02fdb9"],["/tags/建站/index.html","ad9dc828b04bfd64a3786c51f8edf0e0"],["/tags/微信小程序/index.html","ffc3f46b7cecdf9d854a930bbc9c7d29"],["/tags/指针/index.html","0946f9d6f229d82c746248456fba69c9"],["/tags/效率提升/index.html","e261f1eaa130ecdb0f4f24ab984b412b"],["/tags/汇编/index.html","e16de60f772e6580535272d7cda9538a"],["/tags/爬虫/index.html","37840d2f211461aebf409a6a6544f795"],["/tags/算法/index.html","5eab589b2bbe4b328bf72ec0f48b2341"],["/tags/编译原理/index.html","f5901ffe2c7a34e67ccffe3e13996ae7"],["/tags/获取地理位置/index.html","64e20269616c24d74e1e1d323d88f198"]];
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
