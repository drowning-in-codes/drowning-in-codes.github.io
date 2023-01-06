/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","4854bbfa2cf13c05192fa2b57cd07e6e"],["/2021/04/20/稀疏矩阵/index.html","084cf69a17842ae5ab653a2b8a127041"],["/2021/04/23/广义表简介/index.html","26e311cf6ff53c44ff9671897eeea3bc"],["/2021/04/29/关于指针和函数/index.html","0280030b3e73b67061288c1546f4bd7e"],["/2021/05/10/哈夫曼编-译码/index.html","08cf26fe1732a032eeba574b2a16d970"],["/2021/05/17/数据结构noj_2/index.html","b14c9652e659886000aa7d8bfa988fcd"],["/2021/05/30/数据结构试验/index.html","e21cd6215c682ec0ee46b061cfc8eccd"],["/2021/06/12/数据结构noj-3/index.html","731eefc96e3623744832962333a85d1f"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","44c526fb865f53ae58a2986cea7965ed"],["/2021/07/08/课程资源分享/index.html","b35709eac10e9919bc99f3d81f37b232"],["/2021/07/20/Scrapy-下载图片-文件/index.html","7158f2b11f302256cd0320a887b5e83e"],["/2021/07/21/Scrapy-动态网页爬取/index.html","9307ebad20391494c9a967dd19979799"],["/2021/07/21/疫情打卡/index.html","537756c826fdf6736c4d95ac3581efd4"],["/2021/07/29/Scrapy代理设置/index.html","0c9519924db1ed0a66b3197177090cad"],["/2021/07/29/数据库认识/index.html","f8179232a87ce3a845f07aeaeb0a120d"],["/2021/07/31/Python多线程学习/index.html","0549a1a12cfe369595cd46cadf3c6616"],["/2021/07/31/tkinter-requests练习/index.html","7d0155a61c735f535437044eb43f6ac8"],["/2021/08/10/Git学习/index.html","41b92e8ebf6acbf647f46a7d4aba50ac"],["/2021/08/15/pygame实践-1/index.html","30f4a328d4fa537a4cb7650bddf0def7"],["/2021/09/06/微信小程序开发/index.html","47668c85ee207f673c60daced6a12c06"],["/2021/09/21/命令集-1/index.html","920666e32a4adcf50f60b9cd861825b8"],["/2021/09/21/命令集-2/index.html","06762c57af9cb71ffb8834504718754e"],["/2021/09/21/命令集-3/index.html","a4cc5f53aa6abbfe1b018aa851402878"],["/2021/09/21/命令集-4/index.html","994ecfdf1561ea8b8697bf2ee47d98fd"],["/2021/10/03/socket学习/index.html","1fe22ba847d6fafd13c81a0b7c2fcd5a"],["/2021/10/10/dwm入门/index.html","dc4f7197f6151c1638d78258c2041749"],["/2021/10/10/安装ohmyzsh并配置/index.html","99a4daa24a990b9d53c9d63b98821cc1"],["/2021/10/20/css学习/index.html","7a94dae875833f3cd887c57397c2e101"],["/2021/10/20/wm入坑/index.html","6d7dc8a7b86223f763420274aee2b6cf"],["/2021/11/03/微信小程序学习/index.html","bed760c9b6b7b7a7587e08f99296b5f0"],["/2021/11/04/css揭秘/index.html","318d4d8adff33a91a19585af584ecddf"],["/2021/11/05/css-练习/index.html","8fd74605c1491559342a6f7a2c287233"],["/2021/11/21/命令集-5/index.html","a0fc90e295c1f8370d5218863d1e4e39"],["/2021/11/21/命令集-6/index.html","2bc117f83b81c5628304145c84c3ee18"],["/2021/11/21/命令集-7/index.html","4f702892e0e2acc0b07816d19637848e"],["/2021/12/01/搭建wordpress/index.html","58144396bc77678b3df3e67246cf67ea"],["/2021/12/08/python操作百度网盘/index.html","1c99ebdb1489ba5d4b0daee4c7ee2332"],["/2021/12/14/js爬虫/index.html","c7aaec61c03ad5a5d633938fd751476a"],["/2021/12/25/为网站申请ssl证书/index.html","db5bf8e6fe86c768d6ecbdd1647da4fb"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2c5a519b57264b547d86f265c0c9a264"],["/2021/12/30/jQurey继续学习/index.html","8de920e8034a0c7f701c3c6d58c9946e"],["/2021/12/30/jquery学习/index.html","45f8d12cc2eb4296e6023042374fdd92"],["/2021/12/31/vue学习/index.html","9cb83331bce474d5c4db0049ceae623b"],["/2022/01/02/疫情自动打卡/index.html","97e41ce0559606427d1aa25a7a5fee8d"],["/2022/01/03/javaweb初体验/index.html","c290d18179c9642354302092092af7a3"],["/2022/01/04/codewars练习/index.html","eeb706a40de8dd8323bd826ad2ebb5b6"],["/2022/01/05/Spring学习/index.html","aa12c9a92930ff510c18b23798109f38"],["/2022/01/05/vue实战/index.html","54e6328826529cdf393bc22d904c4aa0"],["/2022/01/08/gdb-gcc学习/index.html","5f0eb6437de0fdc322649a4379cfab2a"],["/2022/01/11/python-opencv学习/index.html","99e34626fc9ebeaf8590fce68fea03b1"],["/2022/01/12/汇编实战/index.html","157a4d325cee1036bd3b9e7149f7842e"],["/2022/01/17/pandas学习/index.html","daaf6b69b548b3d4ade0dc35370e2c91"],["/2022/01/19/可视化图的工具/index.html","cec5eb0002191109cf0675a79ce50f5e"],["/2022/01/19/机器学习入门/index.html","34154f7e7e057e9bab56c80cc3c6d083"],["/2022/01/20/cousera-ML学习/index.html","736cd81ec541bee1de6fe86495767b6d"],["/2022/01/30/typora解绑后出现问题/index.html","6ac5dd6ac635f240967e6e85a74eee50"],["/2022/02/03/NLP学习/index.html","15fe4d0cf82738c0cd11206495c443d2"],["/2022/02/04/Web漏洞学习/index.html","0ff80ac64200a710caff0f77d76b7f28"],["/2022/02/04/pyqt学习/index.html","1c89be1ad34c98fe2e7cace2d3fce6ca"],["/2022/02/04/python爬虫/index.html","d93ff4a092c760c1c89076e4a1b9e87e"],["/2022/02/18/Electron学习/index.html","9596e78a1d8f77afc48b3f541fd3993e"],["/2022/02/22/疫情填报字段解析/index.html","9dba5fe47781d2288bc9627a674c3172"],["/2022/02/24/Bomb-lab实验/index.html","9bcd1d0eed08ca86657cedba9422d913"],["/2022/03/05/nginx学习/index.html","6364274ac252415bfb8215a7a0fe16df"],["/2022/03/09/汇编原理课程学习/index.html","d04efe3c3e04e04337ee77c7e39aad4b"],["/2022/03/11/Keras学习/index.html","83eeb51380978ddddd3ae4656cbb6fd2"],["/2022/04/01/graphviz学习/index.html","34f3ed1200fdaac80bf8efcc342c273e"],["/2022/04/07/django学习/index.html","b6e63d9f5128d3d0af242b003d393770"],["/2022/04/11/密码破解学习/index.html","af9d002d100ceca49b1240ac0256c073"],["/2022/04/12/flex-bison学习/index.html","32527567824ef4a7052153520c90b7f6"],["/2022/04/15/pytorch学习/index.html","89a69daf4757e0abe18e5c71b9670670"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","4d44d36f3ecc4e3735dc548fef3673d1"],["/2022/04/23/写一个音乐播放器/index.html","430b0423b199ad4a769d6e0e0b0666a5"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","89d29dcaa5eb081fa5a67350b56c638f"],["/2022/04/30/GAN学习/index.html","f318c5a9574174839e0243fb063b48de"],["/2022/05/02/html精学/index.html","f2efcce3f5b30830ddfb359dad09cb86"],["/2022/05/06/write-a-compiler-by-yourself/index.html","0fb4c846659c1f8a9c21747d4105bd9c"],["/2022/05/30/acwj-01/index.html","44379e9187e43e0124f069e25c2c2cc5"],["/2022/06/14/animeGAN/index.html","3ccefff80cfc37d1c42578cc16e528eb"],["/2022/07/09/c-与算法学习/index.html","b9293a775b5e36fb338e8f836c4151bd"],["/2022/09/19/flask学习/index.html","2027f45c0ecf8fddb8d54d24c9d24252"],["/2022/09/22/cs224w学习/index.html","09cb8eab19fa9e5328029ede13597cd1"],["/2022/09/28/记录一次wp重装/index.html","7e49ad5403c25b8c2954dcf9483404dd"],["/2022/10/01/Obsidian学习/index.html","462b5086bd1c398390ee7369e3ce33c9"],["/2022/10/08/vue-element-template实战/index.html","04fd4dd8fd251d1a936056ebf9505530"],["/2022/10/25/vue网上商城项目/index.html","edfb0286925410b90b5c99adeb03b9b3"],["/2022/11/11/leetcode刷题记录/index.html","d585ee17b98d95bafeae61b2702efa87"],["/2022/11/11/使用overleaf优雅地写文章/index.html","0b01b1bbee3d362c5dba96bd4636c260"],["/2022/11/22/磁力链接与RSS订阅/index.html","87b04956147edd95615959b6d2477bdc"],["/2022/12/11/uniapp申请获取地理位置/index.html","d23375ebf25494119094687c252a00f0"],["/2022/12/26/pr剪辑学习/index.html","e14ce7136b74b8cb04ce7561111da6f9"],["/2022/12/27/css中的flex和grid布局/index.html","070769ff724cb2813b074b35084d278c"],["/2022/12/28/Flutter学习/index.html","53e8701bcf55c0482527d8f84b956d01"],["/2023/01/01/美化github首页/index.html","f1eda85f541a6d626df5636569240bb0"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","6d5bc049214d08506272b7acda693c8b"],["/2023/01/04/构建微信快捷发布文章工具/index.html","d2d169586d66d1658f3756db6a180977"],["/about/index.html","ec8ec17773bfa99997a434252ae3fe05"],["/archives/2021/04/index.html","a709deb59d6868ecea93b7f865b5fe7d"],["/archives/2021/05/index.html","f51d82e3e7aed009033ef1206f0741e4"],["/archives/2021/06/index.html","3c9c6b880ed55915f85b8abb79dd0298"],["/archives/2021/07/index.html","fb6d7c8d23dfec696655688862077048"],["/archives/2021/08/index.html","917336fd576b61c655f670660ed89d19"],["/archives/2021/09/index.html","883ccca3b8f4f04ae43584cfdd341bbf"],["/archives/2021/10/index.html","3fc3c827eeb217763a0183383d58b9fc"],["/archives/2021/11/index.html","1dee8e5e60b472fff15734914d63c442"],["/archives/2021/12/index.html","e1ff1252ae096e6fdff55909a5d5ac93"],["/archives/2021/index.html","e4ca08c18c0bd1dea3e7d28dd18847d6"],["/archives/2022/01/index.html","11a75f4985de69a9458196ed5a5160f6"],["/archives/2022/02/index.html","78256713053f2a12e23cc0f0b7563e88"],["/archives/2022/03/index.html","769edbab27a7b0836f04f833be015c63"],["/archives/2022/04/index.html","5d061119545c39e29b04e3e6f2c18b0f"],["/archives/2022/05/index.html","11e8b45ad61e53478fccbb8a32e4f7be"],["/archives/2022/06/index.html","1f2b91c1814405615e2e17f74dbc3f02"],["/archives/2022/07/index.html","1c2357d2eb3fdc3cb6dc272fc8803b28"],["/archives/2022/09/index.html","5a836f683d22303e3b515c5088515bf9"],["/archives/2022/10/index.html","8619507f5f0c7353ea5a7e594bb166b2"],["/archives/2022/11/index.html","812689e6f026ba8252dca5460bff18e3"],["/archives/2022/12/index.html","bd54245abc12448be3542d452b74a302"],["/archives/2022/index.html","dc008872f5c29e9329e57953976a7c0c"],["/archives/2023/01/index.html","7a7da1845c2c6a46125e29768073b0f8"],["/archives/2023/index.html","13c490fb815384b17733b1ed958539f2"],["/archives/index.html","7d785d535d8f3f78a6149ab9874aa05f"],["/archives/page/2/index.html","9cafa3b1858460c05593c2187ae5e10c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","d2fb700b3d77df1bf88c2a9594928ae0"],["/categories/ML/index.html","7bcfd16f6ae951c4ae0fd20911b75876"],["/categories/Nginx/index.html","b26dca1ac3298673175f0c24fea8d5ab"],["/categories/Spring/index.html","fc5b1a9bed23cffaee7268579fd6501c"],["/categories/course/index.html","85e10ef8820b2e2d08dd6ba05195e9a4"],["/categories/django/index.html","89d34b726a37e5a2a147463a2d81d529"],["/categories/fun/index.html","3ad6a67cb1fe6de1c40d832208a75ec1"],["/categories/gcc/gdb/index.html","e425ccabab300e71823a01e295eba19c"],["/categories/gcc/index.html","8b334b4d12257ce2fb022379dad26e19"],["/categories/index.html","e8de692559f8afec64990548fd9ffade"],["/categories/java/index.html","ef9be758e8c4b15deccfdf34dd3e21b4"],["/categories/python/index.html","e41c47f9565119267911208251bea3fa"],["/categories/study/index.html","00417e2e560a19bfa80378e9a2b7dac3"],["/categories/vue/index.html","9f867c3eb86342b567ae6e021b97ec87"],["/categories/误区/index.html","dc670e9f702d462c7794621c5534f8c4"],["/commonweal/index.html","cd49b5cab24ed2fd28595034aaf22590"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","74dcc89e6dce7f760417abbacec78ca5"],["/home/index.html","dd24971843175fb388ea9b702593389a"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","966f887feff5bb958e886d6918cfdeec"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","a2cefba6ed3de30bfcfa14b7e407c715"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","c991c85175ce54593b356f96ed81c677"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","ab8e5115bdcfd524f83b6d21a835140e"],["/page/11/index.html","ef74f81707f03ccd221620c53364e000"],["/page/12/index.html","cf88ce738374060907a7d2f33952e82a"],["/page/13/index.html","4bf10f71532d73ff82b45871eb53d64a"],["/page/14/index.html","d1800ab12d7e95d2ac40bf5d5b6918dd"],["/page/15/index.html","88ff647e1a27f1b7d078031980a79996"],["/page/16/index.html","c58b90d3b16e21a6cb884f556e091a36"],["/page/17/index.html","482c74cf617c27110f7311ee2666abb3"],["/page/18/index.html","f56618516dd022bb7704d58852b7d91f"],["/page/19/index.html","c111def7297e2d84ee8021a54b0aa9f5"],["/page/2/index.html","813950d73da7dc5792a47888b7fcaf9a"],["/page/20/index.html","961634b70ecb70a90d1c733f449eb837"],["/page/3/index.html","de8d30d7273a8b021ab35923856dbafa"],["/page/4/index.html","576b80b9ca7843953e3117b589a9b1c0"],["/page/5/index.html","e7ceaf6b41dfb1f07e0217ea2073050a"],["/page/6/index.html","58ed4d442a00151e5a2dc997e4970893"],["/page/7/index.html","a30dcd0fd57b3fff0376e39702cbb0b8"],["/page/8/index.html","fa840037c03eb36685322a976f22c5cd"],["/page/9/index.html","1c6bd2997500b12d3b2c264c22764664"],["/resume/index.html","002c5a1a99ac952d5e078c85eec00093"],["/schedule/index.html","ed9831c0b48f1653dd5aac06f171240d"],["/sitemap/index.html","94bdb4e064d00bd2d3efbadc94f777a1"],["/sw-register.js","1ecf3df0f0afb4b3485d9d3f88e554a9"],["/tags/AI/index.html","3ba45c7dc98b6c95b1ed063e30644b9b"],["/tags/BT/index.html","ccca7f54bad7a72961908e7ec0e7aab5"],["/tags/BaiduNetdisk/index.html","cbc784a05d77e41f61825dd44f6a9adc"],["/tags/Bootstrap5/index.html","e7f3fbb82ecfd41b81e60db1c00baadd"],["/tags/CSS3/index.html","51e811c9a89fd511b94c6583d92bb182"],["/tags/Electron/index.html","9d9736e9fc74ffa84bfb5c186b736ee4"],["/tags/ElementUI/index.html","b20d35a076f7691b21f66f77772e2932"],["/tags/Flutter/index.html","09849bf0934594a6fa1296ca9f188589"],["/tags/GAN/index.html","73a7394cfd51626c7a7a807fb12e4c79"],["/tags/GUI/index.html","82fc05814bcd9975cac9efcc38dce9ab"],["/tags/Git/index.html","cda4f556fa848b4c3cd6022d70b20ced"],["/tags/JavaScript/index.html","90955cc491fd35ab7c2d3abf68ee77d7"],["/tags/Keras/index.html","32c6373c74f4df147d9ff1310e53eb06"],["/tags/Linux/index.html","9c2894d0fe8a46c716a9a5963150b233"],["/tags/ML/index.html","7a04d6c39a88b7dd94cfe9353d00be15"],["/tags/NLP学习/index.html","1273c17f81ed20fac5375d2f0b6a6ab7"],["/tags/Nginx/index.html","609c0dbd7d2b4cff00e59f7ef488c417"],["/tags/Obsidian/index.html","098650e19a6eb10447e9532eded67175"],["/tags/Qt/index.html","0f4481d292f502d1dfd6d184b9994525"],["/tags/RSS/index.html","f9e18e1b53c3d30f4a591e2fbb08552d"],["/tags/SSL/index.html","15bfe35771a7f9db4f598c4925e338b3"],["/tags/Scrapy/index.html","dda33a9319400e9e94cc55f1414862aa"],["/tags/Web/index.html","9ced6b52d1bac730903e2327327a7a20"],["/tags/algorithm/index.html","76541bfe72376e9bafb124972912b322"],["/tags/bison/index.html","32186cd8128b6c6c3fbaa547fdde6e2c"],["/tags/bomb-lab/index.html","de4a04c8468113b53e9498a99f2204d0"],["/tags/c/index.html","f2d46f1c16734bad7156253031ec9150"],["/tags/cheerio/index.html","6e491705014568a4b7f6c600a7c512da"],["/tags/click/index.html","f6258809148a08493fcbe733d3393cd2"],["/tags/codewars/index.html","90ddb04bed44da09a3d813668367b067"],["/tags/compile/index.html","6173c5c25056170252ce771c30a28f54"],["/tags/compiler/index.html","09cbe655ebea9451511be21e18d49ae9"],["/tags/course/index.html","7ae3f343ca1b7a20986a926dd9f989da"],["/tags/crypto/index.html","bfc3e2115d8dc0679c325b9396be8df3"],["/tags/csapp/index.html","50b41f5c6da92ad830dda1981a267cb5"],["/tags/css/index.html","a5c1c9335ae3a619e73c8a8abb1bbd4c"],["/tags/data-structure/index.html","1209ec1841ecc24decdbde62263d4ff5"],["/tags/database/index.html","7096a3d7c18087d50e6df8f7a61767d2"],["/tags/deep-learning/index.html","a4f8d048cdfb66cb6d060183e8ec7d4e"],["/tags/django/index.html","82e98db34f13f826cc920ca81be2e698"],["/tags/dwm/index.html","72c5a31601dc3df68c472b49df677c46"],["/tags/exercise/index.html","36299158d5f14af1464fc9e20cd6665d"],["/tags/flask/index.html","42056da105c52603770537624dc17798"],["/tags/flex/index.html","954f82d11ad5bd898291ecae8fe509e9"],["/tags/front/index.html","4669f61aabd0502a7112d743174b0cb3"],["/tags/gcc/index.html","4269d6446be5f7bc75bd8a0cad5e5b56"],["/tags/gdb/index.html","14032b3649e2666e95b74545c2dbb652"],["/tags/github-profile/index.html","7b709391c3919e8c03c6c4b5e7ec9ee7"],["/tags/github/index.html","a090c6420c00e475da9da90d1a7ed9ed"],["/tags/graphviz/index.html","cfb8fbba31ecb44d0bf336dcb6f0248c"],["/tags/grid/index.html","5e6f7fcfca2c652f089582aeda6bdb84"],["/tags/html/index.html","a289a15a0a87f484c18ffe0d11d5b51e"],["/tags/i3wm/index.html","d397a6c1fa0fe51f54af824ec7b8ade4"],["/tags/index.html","ee188041dc81342f6c9c4831ed7e6529"],["/tags/issue/index.html","bbe7a0e4a13aa54b819b3d5c4598082c"],["/tags/jQuery/index.html","02fde72a974c2c79474de0a2785c79fa"],["/tags/java/index.html","e022de2772b487c44e38de95d105ace0"],["/tags/js/index.html","3e936daea13c9d14a73833cf80cc1a4b"],["/tags/latex/index.html","d55813acbb842957f92a30cb812913d4"],["/tags/leetcode/index.html","f14c3a41b5c305e683b03238cf00cdd1"],["/tags/lex/index.html","086bc1d5434502553b44a0ca030a8adc"],["/tags/material/index.html","36204fcdf570a61abfc6578671c382c7"],["/tags/music-player/index.html","74bcccf28fadb7924c4b22add0ac2f37"],["/tags/nodejs/index.html","1c6ed28aa2e98afcbc8abf78af6eaaf9"],["/tags/noj/index.html","7d1f5a1689455c43611a44200f071ec5"],["/tags/opencv/index.html","d840fbb63e48780943e6216e17a33a9b"],["/tags/overleaf/index.html","28c60212cd92404e81a9551fb27264ba"],["/tags/pandas/index.html","8160981bf35c75cd584b4dda56137506"],["/tags/premiere-pro/index.html","4febb5b3735afcb66028cafca05b1989"],["/tags/proxy/index.html","514bc3c0a536e5e8189e089dd2bed9a2"],["/tags/pygame/index.html","45efdfee6f6157bf20425866024d16f1"],["/tags/python/index.html","1c1bc011f10515fb8855018e3af5dc52"],["/tags/pytorch/index.html","1c16d3570c8e2728c27c38beda608cea"],["/tags/reading/index.html","13eb114a19fdd30e0aa71bff8e4dcbb6"],["/tags/request/index.html","c3bab6b1c8b6b639fc044db90240a42e"],["/tags/requests/index.html","359562798ea1118c62929f8231d7e4b3"],["/tags/rich/index.html","3417144b66e577e15bb7a49aa2f785a7"],["/tags/security/index.html","8dbd2dea97341d7003d1e112f9dc1ee4"],["/tags/shell/index.html","99a4397eddf4b9ef1ca8e3d70c596c2a"],["/tags/sign-in/index.html","c917604ef679e4478f8dc84f417ed929"],["/tags/socket/index.html","6ed6bdaa95bba83f2e54d30cc7db994f"],["/tags/spider/index.html","ff8173eae4d08946024ffc64ec7f07b8"],["/tags/splash/index.html","7374e13e99b5956262c0e5a9b11601c4"],["/tags/superagent/index.html","deaa63a726b7cc66aaf74af4416ca674"],["/tags/tensorlow/index.html","f5c4c54fe25a63b358195c3701762ce1"],["/tags/tex/index.html","15d7aebf026d5891a0d923575530ce64"],["/tags/threading/index.html","0b72821f047b185c49529575ffdadeb7"],["/tags/tkinter/index.html","78ffc1b47a354070ee64143c7cf5c56e"],["/tags/torrent/index.html","bc13b6ad2b7fa074828e1998fc21f8bf"],["/tags/tutorial/index.html","bd3afddf460ac8059281528d0371829b"],["/tags/typora/index.html","17359105f6ed64e04e031083c4b9c420"],["/tags/uniapp/index.html","e90892b4ec1fd1831d4be5f50031bacd"],["/tags/vite/index.html","4cc3665d486bfe5e8c47b4c3ab682321"],["/tags/vue-element-template/index.html","bd6b998e42dc3d6765eabf4ac1011263"],["/tags/vue/index.html","48a1492ddc8f03ce8d9d332b0160fc9c"],["/tags/vue2/index.html","69044df738605da28184a8a3f955f372"],["/tags/vue3-x/index.html","f6ce74a521cd4be55fea7975e289bfbe"],["/tags/wechat/index.html","81c89e5d6e71d80f818d18702b5a21b2"],["/tags/wm/index.html","7e7dad05065b0c287e8fc27cce8fbe04"],["/tags/wordpress/index.html","82c785328a0599f43bc2cde93aaf43fd"],["/tags/workflow/index.html","6c1faa75bca0dd8dbdc4b83e5acda9a1"],["/tags/yacc/index.html","8c6ccc6094094099224dc0b666763c63"],["/tags/zsh/index.html","274b93398de77f63a79052067f4791c5"],["/tags/七牛云/index.html","30f37655c290e8259c957aadcb4dff4b"],["/tags/函数/index.html","3b299afdb09437f2041f2764a2168f2d"],["/tags/剪辑/index.html","f807cb9a5636cdce3ad46da7a8eea73f"],["/tags/存储/index.html","96f1916e4840974cd63d580478ae5844"],["/tags/实战/index.html","56775a7c112942d9c1d4923358f5ffac"],["/tags/建站/index.html","27e0ce65bfd324b78eb3043f8dbd87cb"],["/tags/微信小程序/index.html","b0d9784db09f236bf569d990eafd5c0d"],["/tags/指针/index.html","39e2242a4284da065a896342bfec82ee"],["/tags/汇编/index.html","26458bbefbd06a9bdd98d8b1566b8d5e"],["/tags/爬虫/index.html","567afcae588e2b0e6d115fb3eda7b156"],["/tags/算法/index.html","be34dc339222f52af5c856d52685190b"],["/tags/编译原理/index.html","2c1e50d39fc3a7a8e61784bca3591a50"],["/tags/获取地理位置/index.html","703a1c1a63223e84d33012463f14850d"]];
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
