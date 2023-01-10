/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","618f1a6114e5afd0c0785865bc457230"],["/2021/04/20/稀疏矩阵/index.html","53d057af2e6c687a54c4f40a31e774db"],["/2021/04/23/广义表简介/index.html","480ccfb7a339c9efadbf7b4ca8da0886"],["/2021/04/29/关于指针和函数/index.html","5964ed29c84a37eb66d9f802c83d5874"],["/2021/05/10/哈夫曼编-译码/index.html","3ddd0f3c1f8ce4ee45177a4759bc82fb"],["/2021/05/17/数据结构noj_2/index.html","72ece9de4b9b46528e8a0db3e4e3dc04"],["/2021/05/30/数据结构试验/index.html","490e7ffb6f27227764c35f11f19f84ef"],["/2021/06/12/数据结构noj-3/index.html","e91bda90463f705f2c21cfeb2046ed57"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","18499ad780ce7740825e09670cde63b9"],["/2021/07/08/课程资源分享/index.html","749e2e7d7b8dc74a500e3f20c8c765ca"],["/2021/07/20/Scrapy-下载图片-文件/index.html","137cc8e3b65c91951d25b2b546de5446"],["/2021/07/21/Scrapy-动态网页爬取/index.html","a0c5a20997945d7721502941bf61f264"],["/2021/07/21/疫情打卡/index.html","9c8b46d58265228bc3813b9c14c8098a"],["/2021/07/29/Scrapy代理设置/index.html","3dea60bb41f170006401e41bc8113260"],["/2021/07/29/数据库认识/index.html","f90a8a1a56fac08d033cddd1f5d9e8e9"],["/2021/07/31/Python多线程学习/index.html","09f54255613dec40718389ef24c1c06e"],["/2021/07/31/tkinter-requests练习/index.html","931d118e903fa3fa01895822d848d1f1"],["/2021/08/10/Git学习/index.html","176c35e0d06a3d8d58619ca67f6f2515"],["/2021/08/15/pygame实践-1/index.html","7656ecceaa5c291e4efd2635f9a38f95"],["/2021/09/06/微信小程序开发/index.html","3a00aadab8b8a44d4916c77686cc5fc5"],["/2021/09/21/命令集-1/index.html","d610ccbe2ca0fdc29031c67ca2d56eb3"],["/2021/09/21/命令集-2/index.html","34f9390a3beb759c8642e9f065d6d538"],["/2021/09/21/命令集-3/index.html","9e670487b7c0c04dec11d16d031396e0"],["/2021/09/21/命令集-4/index.html","47bf84eff30aa4c99f6fdd175043b414"],["/2021/10/03/socket学习/index.html","b384ece35294672a44239a272d0267dd"],["/2021/10/10/dwm入门/index.html","f4f6e96f9096f0222aeef828484dbadb"],["/2021/10/10/安装ohmyzsh并配置/index.html","a5b2a8f8c794199259df2003a012ec4f"],["/2021/10/20/css学习/index.html","13cc7a77fb3815c6997b954c342ddbf2"],["/2021/10/20/wm入坑/index.html","2194cba64cf275784eef29c599206197"],["/2021/11/03/微信小程序学习/index.html","51fc252d025c79552edbb999a4d67065"],["/2021/11/04/css揭秘/index.html","3f49e42119ca6eb10b7e9fcbd5e2bdf7"],["/2021/11/05/css-练习/index.html","28eb6407795137e897044a66588869ce"],["/2021/11/21/命令集-5/index.html","23cfc6bf69887e0d349d952e4d42c83f"],["/2021/11/21/命令集-6/index.html","e10371f2deda4cd59bad62af9d443551"],["/2021/11/21/命令集-7/index.html","fbad7d5311fc28e15bcaef76aad323b6"],["/2021/12/01/搭建wordpress/index.html","ffd85689f06f30a999dc1850d27cda92"],["/2021/12/08/python操作百度网盘/index.html","77b8e086e0d0204b4c849919b77202a1"],["/2021/12/14/js爬虫/index.html","7ceb67f43b5b1a555179abf904328852"],["/2021/12/25/为网站申请ssl证书/index.html","73d952d1d9ca90429634f78706e59a12"],["/2021/12/29/使用七牛云为网站提供服务/index.html","34a827d4fcf3ff779decf5cd916d0a29"],["/2021/12/30/jQurey继续学习/index.html","ad860335d50d394d7ad64c1cb4614667"],["/2021/12/30/jquery学习/index.html","d7a2a4ab8a465b75f9623c2b8255543b"],["/2021/12/31/vue学习/index.html","6e28d046938298668a00ce1ff741dda1"],["/2022/01/02/疫情自动打卡/index.html","4063d7cf585f39c483245fca00469c1c"],["/2022/01/03/javaweb初体验/index.html","c5cf9a2f1f3607159e2c387e54f0fbce"],["/2022/01/04/codewars练习/index.html","70dff1963bf829d7d4471b74b9c60cdb"],["/2022/01/05/Spring学习/index.html","222a642cb1f0fc5da5571c074a0f05ac"],["/2022/01/05/vue实战/index.html","46273381b1ca9a58856f5e6a512f83fd"],["/2022/01/08/gdb-gcc学习/index.html","ab9b513f3a2c4205d1a6be31e665ae04"],["/2022/01/11/python-opencv学习/index.html","dda7cbcee8f8c7ec696fe28330fd42ec"],["/2022/01/12/汇编实战/index.html","95e5ddf004af3c94cb037328c307a234"],["/2022/01/17/pandas学习/index.html","72ef188c0e6774b7d05032c9685ac88b"],["/2022/01/19/可视化图的工具/index.html","aab5241033b1b1a83f1f42755d47268b"],["/2022/01/19/机器学习入门/index.html","13bb5c6ca24dab6172808a3ca2fe0a61"],["/2022/01/20/cousera-ML学习/index.html","18c3ba27e54de2ac89f2fe5850a7e1fc"],["/2022/01/30/typora解绑后出现问题/index.html","611ba1f9565f949207bd3443333203d7"],["/2022/02/03/NLP学习/index.html","f8c8af89635e5b4e5a65d94ef5206e12"],["/2022/02/04/Web漏洞学习/index.html","46acb3aab9aa62600ecda0edbecd90cf"],["/2022/02/04/pyqt学习/index.html","de7d01523b2a8d514f453dba0ab06837"],["/2022/02/04/python爬虫/index.html","0ded379982d7d5ca25ffd36a3576327c"],["/2022/02/18/Electron学习/index.html","307b8f46912b6e32fa8f1b5a5ac66e65"],["/2022/02/22/疫情填报字段解析/index.html","d3c4d1d119a99f70e582291310d220be"],["/2022/02/24/Bomb-lab实验/index.html","b73ae3823e4649b1ec095604795f7c48"],["/2022/03/05/nginx学习/index.html","594a27e83914dc6080c11a030c3bb8c5"],["/2022/03/09/汇编原理课程学习/index.html","28c0eae8437550a2a3f32821a3ae275c"],["/2022/03/11/Keras学习/index.html","bae8ca8b0fd3b32111e784502b2b8dd5"],["/2022/04/01/graphviz学习/index.html","f621ca7e8bcac8c39153c1a193853d19"],["/2022/04/07/django学习/index.html","ea73f28f0226de9689ad75278f3f1c2b"],["/2022/04/11/密码破解学习/index.html","4da895b25058bd6437fc6cb69968e95b"],["/2022/04/12/flex-bison学习/index.html","ac44b6936d272eb7f1df8da3e3f4259a"],["/2022/04/15/pytorch学习/index.html","ddf15a5d288e353d75e859f46d53a685"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","a13577e141b2148b1367fa3955e7ef72"],["/2022/04/23/写一个音乐播放器/index.html","9e0f2b825e01d60ec0024c96fc23eab7"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","3b4a5544172cd34176d07a2f0425482d"],["/2022/04/30/GAN学习/index.html","0e23ed68eb9dfcad69af83c8ea8ab9ad"],["/2022/05/02/html精学/index.html","103bf6c26b487468420d3a95fd46207b"],["/2022/05/06/write-a-compiler-by-yourself/index.html","0cb45b56c5c3a4f1a8d1420aa26ff2dc"],["/2022/05/30/acwj-01/index.html","ae06e9cf05d01475e683383daeb393e4"],["/2022/06/14/animeGAN/index.html","cce7ef9b2bb1db745b13f55819df576f"],["/2022/07/09/c-与算法学习/index.html","956c9fb3fd76accf60c69a363f125be9"],["/2022/09/19/flask学习/index.html","84591f9b5b43fae29b9cf7fe3c48f98b"],["/2022/09/22/cs224w学习/index.html","a618e6e1c1af390db817f53157a17997"],["/2022/09/28/记录一次wp重装/index.html","892ce37680869046b9ad76c233cd83f0"],["/2022/10/01/Obsidian学习/index.html","a015181a201c414864641439253a513c"],["/2022/10/08/vue-element-template实战/index.html","a3fb989e0c891d3a5bb2bb23be28060c"],["/2022/10/25/vue网上商城项目/index.html","d77524980c626a64a56027f46ee99fb0"],["/2022/11/11/leetcode刷题记录/index.html","13efd9d893ed1c74eae7d1293b49ddc5"],["/2022/11/11/使用overleaf优雅地写文章/index.html","1d61c1ec1a369a929019d5818f932e97"],["/2022/11/22/磁力链接与RSS订阅/index.html","2517b253fbf1e63a167b0ebd6ea76688"],["/2022/12/11/uniapp申请获取地理位置/index.html","01a684e3217400716ad4dd172a905eb9"],["/2022/12/26/pr剪辑学习/index.html","7ed7ad14fe2d5572ee566f3e9679a511"],["/2022/12/27/css中的flex和grid布局/index.html","4c9af4c08fb7af0cdfc9246bc1063f79"],["/2022/12/28/Flutter学习/index.html","7c151bd8b92aa5f9d98a5b275a4d5369"],["/2023/01/01/美化github首页/index.html","db6060cd83842f2c120a07cc25be8dd3"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","496948af998274dcd5d7918593ee7057"],["/2023/01/04/构建微信快捷发布文章工具/index.html","54c547a3d3d102673165735316709910"],["/about/index.html","32d95a256e97b883a373c9d9640ba045"],["/archives/2021/04/index.html","f1c920557067f79a2a1db850a4ffe3b2"],["/archives/2021/05/index.html","5b127d54c10cdb73089f045102b004d4"],["/archives/2021/06/index.html","fccdece9aad5842a1cef137fd1511e7e"],["/archives/2021/07/index.html","1b420b99e3ec8952c3f54781ab880d0b"],["/archives/2021/08/index.html","cf211989d3a2ca5814eefa1db660df29"],["/archives/2021/09/index.html","a48f6a6b12a6eadfe3c8c232b324fec8"],["/archives/2021/10/index.html","a9fdb071560b7663a06deeb44c02c00c"],["/archives/2021/11/index.html","99916df837cd35d0dc9b1a78df3df0ca"],["/archives/2021/12/index.html","6b1dc2dacf54127b8cc0128d0e1970b6"],["/archives/2021/index.html","859e19777cff1691e099e479388eb84e"],["/archives/2022/01/index.html","6ecbde0b086866dd6b1d777406921393"],["/archives/2022/02/index.html","323cc187d83f50b77e043d01cfaddff3"],["/archives/2022/03/index.html","6f81b49e924d6d566e593313758b1903"],["/archives/2022/04/index.html","c0af79ef0d80c0985ddfe58bce842b4a"],["/archives/2022/05/index.html","e015d8232bce62ee65ffabe4e232bb7c"],["/archives/2022/06/index.html","8b2130d204baeba24f77ccf6550436d8"],["/archives/2022/07/index.html","7f2c53a7f35a090965b69bb8ecc795c3"],["/archives/2022/09/index.html","4d963f71527c465853b9527f0355fe3c"],["/archives/2022/10/index.html","f0f0bf19d1396cf177a324ffbdfb576c"],["/archives/2022/11/index.html","84f4bbba511f0dab708a16ddf2e6b95f"],["/archives/2022/12/index.html","fa770ecf23d37d59d146413db319214c"],["/archives/2022/index.html","baf47f8cb636c7218617ce19c2b9ff9a"],["/archives/2023/01/index.html","856e356aaa50fa48b271d2414f6acad3"],["/archives/2023/index.html","ee4772a2c78d1ad2b03a4494f717f9ad"],["/archives/index.html","8b00019958cd9c4872d2b511ba7f5932"],["/archives/page/2/index.html","2a96084a56c3e190cfd5a3f31226bedd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","84bbf4b19f2394921a847cfcc1956fcb"],["/categories/ML/index.html","54b14b928b46c58d7b8e4dca22b94113"],["/categories/Nginx/index.html","6c45a0c4127b6cd9499c252f5cafc39b"],["/categories/Spring/index.html","e847db583777697ab6541b3515c14e57"],["/categories/course/index.html","8afd594ea4d61e3d94c3d016289a5024"],["/categories/django/index.html","f0ecff167fa54151480c13d6e45ee738"],["/categories/fun/index.html","8c032706495551c328935481625de9d2"],["/categories/gcc/gdb/index.html","e64783ae00569376b1addcf05dfcc5ca"],["/categories/gcc/index.html","8c719351eb27f9e58053f4a913783bf2"],["/categories/index.html","afe9733bb90e996d5110a6be6b1d13b1"],["/categories/java/index.html","5697ac536f3cc9216be84f6cacb52c7a"],["/categories/python/index.html","5414266466e23200f035777046928cf5"],["/categories/study/index.html","4cca8cd14f75fdf60f2924b089da2752"],["/categories/vue/index.html","b7e3b66c0151fb06ffc4feb4216de7b6"],["/categories/误区/index.html","0d4882bdf3475f187f2c764cd830d0ec"],["/commonweal/index.html","fea413500732396b7f1eaf528b4e83af"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","132ca8c0609caa859120f750dfa2160f"],["/home/index.html","3c812d2b2b267fab51ed052b781a49e5"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","2eda65a9422a8a09988464ff3a922795"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","91ab984a89980dcd531da3392961f1ef"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","8c0c5afe36460b85dc991249c8e4af18"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","f0558548c688bbe41b69a9a6d005519e"],["/page/11/index.html","a02db620abb23f773c5ad3482d6c1708"],["/page/12/index.html","8d8ff93dea5b4fb63ca9d53b347f53cf"],["/page/13/index.html","46e59b583ab335bff43342e4d349be85"],["/page/14/index.html","99145289edf3c0fe90b8411af9aebb0a"],["/page/15/index.html","28a65f0ab2446811081a9f8b43fdb2fe"],["/page/16/index.html","556f86e568304a9658606fbf0ba76acb"],["/page/17/index.html","a2d74004614a6af96ffb5e6f09c49c7c"],["/page/18/index.html","0833c6e86161139f32f18ee5c4f3c3a0"],["/page/19/index.html","ae7f39fc7a83b6cea2930b255e383b40"],["/page/2/index.html","5b05253ae4fe43ee33fd4166fd96f069"],["/page/20/index.html","ececadf8f23ab6e63c3f7dd2d0a7d403"],["/page/3/index.html","52a9c9bea81b023d992b5382878d2530"],["/page/4/index.html","cd350c127d5dbc54cdf9be0bb7074627"],["/page/5/index.html","68003d680f4a74f56d84a5ba2be16bf2"],["/page/6/index.html","ab03ca32f804a76c25d8dc8abe249618"],["/page/7/index.html","bf9f5b557e8022146e7b0e1e24fe3f5e"],["/page/8/index.html","c469ace630763c8209f29e8ce87a9b18"],["/page/9/index.html","678b1fd4226860c86da6c0732f77cc2d"],["/resume/index.html","1cc7f67b595b8548e65dcb48fcf066f9"],["/schedule/index.html","4fdb47850b3419cd01d7c4e3f84e0c06"],["/sitemap/index.html","53b02ff1e192658d4891deb8a541c4c5"],["/sw-register.js","728736648f7816d92c0f15168114e3b8"],["/tags/AI/index.html","3c7a55f2c19b8fa0bad60038912de0a2"],["/tags/BT/index.html","4bd6a1b1c862d9d7910018b578f48c50"],["/tags/BaiduNetdisk/index.html","b69bcca618a03fe670512978155bc243"],["/tags/Bootstrap5/index.html","b16f20c3bbf681c710ca88430e4bca28"],["/tags/CSS3/index.html","7a7510c3b6cdf7bcd42a085d0cc21d23"],["/tags/Electron/index.html","ef9942c7e719de465df4fd4d1f5d6b20"],["/tags/ElementUI/index.html","df6c2c509f5862433313bc93193a2b0d"],["/tags/Flutter/index.html","c1e7bd0bd906ba217606cd3f5c2e24bf"],["/tags/GAN/index.html","58e17023f7b73606dea64b845db77ab5"],["/tags/GUI/index.html","e888eadd19d2930e4ca887f5cc1956dd"],["/tags/Git/index.html","59c099413d16ee78a11575e3dab65bbe"],["/tags/JavaScript/index.html","99b649a7aece8a146e5a92b725fd1a65"],["/tags/Keras/index.html","611a204305c3e156934c55742d3e4adb"],["/tags/Linux/index.html","39d8ec6d702bee2529892cd9bceb7ee7"],["/tags/ML/index.html","7af33f080efe8c45e2352c8c15c44be9"],["/tags/NLP学习/index.html","43f43396a81085ae93773129a25675d4"],["/tags/Nginx/index.html","ad8cb7c702fd873b6def605d4e74eda7"],["/tags/Obsidian/index.html","d79f5e75b45baa8d599b1cde6542dc33"],["/tags/Qt/index.html","62a678479b3967278e80c7f15d05d5a5"],["/tags/RSS/index.html","7fddebb4f56bfad65d941cea3b5ccdeb"],["/tags/SSL/index.html","c581a2eac7012e954f372107ef34465e"],["/tags/Scrapy/index.html","a85ca8df305bcb397f751bd4551e37c5"],["/tags/Web/index.html","58b6968120437559f5ac33259dede829"],["/tags/algorithm/index.html","b89359a48c68d47523642ad3da7ec436"],["/tags/bison/index.html","f083a6bf86d99a31c5eb837480e45945"],["/tags/bomb-lab/index.html","38556022f59326932e17c48a24b3464e"],["/tags/c/index.html","43785c8116d01fa13949f0c15e3d29fa"],["/tags/cheerio/index.html","5649b6c074bc3a7fec8ea63b8a6c3330"],["/tags/codewars/index.html","8ad28bd49de935f923d32b38ec943f9a"],["/tags/compile/index.html","73052d420ee3814fc7e644c246e932bf"],["/tags/compiler/index.html","8474f8b872415031725558031aa72a4d"],["/tags/course/index.html","e200bde2a85b09351ebbdd66ddef08f2"],["/tags/crypto/index.html","5ba5816b533679d1c74b40d94e1bda6e"],["/tags/csapp/index.html","33d5d01200da98e49ae095ee41f91f60"],["/tags/css/index.html","fd79bd6712e0fe6e765d8738712d8278"],["/tags/data-structure/index.html","6111c0acba1178509bac363317b1c026"],["/tags/database/index.html","998e660b92172b45992e8c0034b3b582"],["/tags/deep-learning/index.html","92fe4198d68f3d631e2f933742f0e1bb"],["/tags/django/index.html","2ee9502dccfd18e6b8fecb5589f96fdf"],["/tags/dwm/index.html","bbe5ab47932cf702fe3929601cfb4e3e"],["/tags/exercise/index.html","ee88983c8828154296de551a8a056ed6"],["/tags/flask/index.html","9436b561c63405820c01ccf0f176c1af"],["/tags/flex/index.html","1b009d3573dec07f23f6fa93fd9237f1"],["/tags/front/index.html","9c980be0b77e24d2e3fd4c60ecac3303"],["/tags/gcc/index.html","ff47765d3ecebb00ba4e17129904c18c"],["/tags/gdb/index.html","88d67a880e277f48b87801ec4fad1bce"],["/tags/github-profile/index.html","ffe6b9ee7743d4f26a1c8490bb2615eb"],["/tags/github/index.html","e7cb7bb356e413308b00a085564a97dd"],["/tags/graphviz/index.html","aa76c6907ccfb3312700d88dac1215c2"],["/tags/grid/index.html","8cc304f7b3872e6877c8440b27234f6d"],["/tags/html/index.html","4ecd6b46beb4e47c891eea85e6219b26"],["/tags/i3wm/index.html","af27110a6a4123ea6662f1d818349131"],["/tags/index.html","ab13df48b28693d08c43141fbd799e68"],["/tags/issue/index.html","2ca4386c11074e855c35e2c2a06651c1"],["/tags/jQuery/index.html","1bc8c8fce916e82ebe97ca34e46bfaab"],["/tags/java/index.html","0d9ddb458bc56274d9e41d904e1a7608"],["/tags/js/index.html","91defe4b3360a7956d40c177bc621128"],["/tags/latex/index.html","a05d0b883b77db28e7b57d0cd1538167"],["/tags/leetcode/index.html","e466bd56ba4b21c7b796a9eae41bb25f"],["/tags/lex/index.html","206beb0a24ba15090b9c97edef3242f1"],["/tags/material/index.html","12b1f94f5d169253f2348ee4f6f67f9c"],["/tags/music-player/index.html","5ca735372c672278acc9ce6511d0d98b"],["/tags/nodejs/index.html","301be66d6e5133286df40e2a8f1ac2cd"],["/tags/noj/index.html","691036ac248b50e7675a80f487b685ad"],["/tags/opencv/index.html","394ba5463a94fecebfe969a2cd6741cf"],["/tags/overleaf/index.html","015bb4ce9a884be877c9cf5abeffa99a"],["/tags/pandas/index.html","29b57b0f356939e0ace287b7ec97dca5"],["/tags/premiere-pro/index.html","51dc51bf9aea847b45c3684aa3d310c8"],["/tags/proxy/index.html","484db77677651639efd5a018ccd3f58b"],["/tags/pygame/index.html","9c536705bc4a5a7084bf8b88340597e9"],["/tags/python/index.html","9f5a6ad191da48b8a0359c6c3ae11c73"],["/tags/pytorch/index.html","11368c036e19c055b58634cc7006949a"],["/tags/reading/index.html","a65c4a3f8e0ea4ffe1c2a14cd7379282"],["/tags/request/index.html","7e6838652a8ef65932ab903cdc7f00f8"],["/tags/requests/index.html","1193a98b422cb33db0463e5304db984b"],["/tags/security/index.html","40707cdef39c75e3f09054ca23ea9f30"],["/tags/shell/index.html","719098a5b139bc09b421ead9ec798cad"],["/tags/sign-in/index.html","86ca0fec11cf4f93eff5adceee013483"],["/tags/socket/index.html","e124d9327f8b5febe2e1d42205b4b249"],["/tags/spider/index.html","d6a01e29eb1297fe76a0242a1f888e54"],["/tags/splash/index.html","c1e60f176c484aceb2f657dbd17cf1b3"],["/tags/superagent/index.html","f3a74f1df71b9fdafcc62424f3725669"],["/tags/tensorlow/index.html","6d1f9c33b2343ffdb7844f7b47818f0a"],["/tags/tex/index.html","8f5f5cba6dd456196e1051758134edd4"],["/tags/threading/index.html","d5d2829bafb57d6f3a850a89f4da023d"],["/tags/tkinter/index.html","4c164bc48ffe7e2682133336fe846391"],["/tags/torrent/index.html","1663240ba4387eecaef28aedc68ed5cd"],["/tags/tutorial/index.html","481342d7e5ec9aafa65229bb97eda24f"],["/tags/typora/index.html","dd24b094c46a29bc784a3ba8d9e544fc"],["/tags/uniapp/index.html","a8918d0b176202dfc1ca90bef66f0540"],["/tags/vite/index.html","088762b019532d3e42e79454d1340c96"],["/tags/vue-element-template/index.html","364f315df770cde4668399787628758d"],["/tags/vue/index.html","58aa9636a11aea25ec0a66d881eae523"],["/tags/vue2/index.html","78c2ca701eee1d5de97a0e099802c4ed"],["/tags/vue3-x/index.html","35d5bd8f1b387862a809e50ce7404143"],["/tags/wechat/index.html","5ea73bb0a5c13fe3ab153ac09adcfdd7"],["/tags/wm/index.html","afe1a99ac073e3f7f76a41da2c5771f4"],["/tags/wordpress/index.html","edf1c38ae871aa2de38b8b86608698ef"],["/tags/workflow/index.html","092d685960119af552287e92ea5c14b1"],["/tags/xpath/index.html","b15d386944a0af615770a6eb1cd5a887"],["/tags/yacc/index.html","aff653b028571624e6019184cd65dc28"],["/tags/zsh/index.html","4c9414843469fe11a993dcb21888e913"],["/tags/七牛云/index.html","bbf67079a6c1b80216c86c3008bf9a6d"],["/tags/函数/index.html","246d2cd0c695a0590c466187bd3bfd90"],["/tags/剪辑/index.html","fbb429ce7535811479bde894f05dae20"],["/tags/存储/index.html","39f57b651b21ffe03e1f5d10e6003231"],["/tags/实战/index.html","12c9bb8b493544e3c5a49b3fc308f59a"],["/tags/建站/index.html","0b2571ab464c30811ffe704749fc5973"],["/tags/微信小程序/index.html","a35599079de94e6d3f09f93c28d55cab"],["/tags/指针/index.html","9567fc8c4fb31d20e60daeb1a2c36ad6"],["/tags/汇编/index.html","fc33286e8acac226bb0edb6170a911b6"],["/tags/爬虫/index.html","40dac09ac7a92f1b9fe57efbd3c71f15"],["/tags/算法/index.html","b91074dbc27f0d730db5c73dcdb299ab"],["/tags/编译原理/index.html","597424b0f2d3da0ad3d417e9aafb04d1"],["/tags/获取地理位置/index.html","47e9bf47c97aed96f711a0b093f96033"]];
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
