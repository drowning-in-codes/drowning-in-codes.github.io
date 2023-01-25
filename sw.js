/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","d7d559d58172daeb589d40b6336f188f"],["/2021/04/20/稀疏矩阵/index.html","9a6622d22af1a69c8b5e66a3c6897a4a"],["/2021/04/23/广义表简介/index.html","911fbfa885ef0ca00cdce4ac595b712a"],["/2021/04/29/关于指针和函数/index.html","ddf37d905984a8c4c2b767b265a871c2"],["/2021/05/10/哈夫曼编-译码/index.html","e9ab0e660ff9a84d565d058f5f20f96d"],["/2021/05/17/数据结构noj_2/index.html","86f32320208fa5c179ac3786fc064b3a"],["/2021/05/30/数据结构试验/index.html","b248785317479a5527064cf01ba748cb"],["/2021/06/12/数据结构noj-3/index.html","911dce4ecd5b0c92b663dd0613b34d91"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","75bd49c1fced7d77b4c4a308b14a6484"],["/2021/07/08/课程资源分享/index.html","1f212cb2f11cd272e33afd4b49037307"],["/2021/07/20/Scrapy-下载图片-文件/index.html","3fd2177343e38acbf3fa2f13236011b9"],["/2021/07/21/Scrapy-动态网页爬取/index.html","f472e69c17a71d161020d6f761c3e015"],["/2021/07/21/疫情打卡/index.html","86f0df1e9a23f50e7fff8e471d0c2201"],["/2021/07/29/Scrapy代理设置/index.html","641e881d61c1fb8baef1e60a39abd5ad"],["/2021/07/29/数据库认识/index.html","617ee482874aa4db6619f389d27c77f9"],["/2021/07/31/Python多线程学习/index.html","4cc7193bf981fa3e8b0ab4fa3f1c87d6"],["/2021/07/31/tkinter-requests练习/index.html","18faad8cd75c61215a3996f35645631e"],["/2021/08/10/Git学习/index.html","f97cbca0fd23ace9b5413666972ac2d7"],["/2021/08/15/pygame实践-1/index.html","6d2b574922327ceaa57ca6678ed74c90"],["/2021/09/06/微信小程序开发/index.html","b10efd0d013d21cce6bf5283f0f3fd1e"],["/2021/09/21/命令集-1/index.html","843d2b5a1fe9c7f5e651b16c77c9fe3b"],["/2021/09/21/命令集-2/index.html","e4a4917151a6c0d19183c7a31c450f94"],["/2021/09/21/命令集-3/index.html","22e2bf8248e7a468239b4849b0ae1fb7"],["/2021/09/21/命令集-4/index.html","700706cd0d61313f69d7c314ff526d25"],["/2021/10/03/socket学习/index.html","168a39750f7da588aeabeb9b1a4c5c76"],["/2021/10/10/dwm入门/index.html","78edc6712bbe7212a534e1c422babedf"],["/2021/10/10/安装ohmyzsh并配置/index.html","80da354ec57c55b1faa7c807ee4ce04e"],["/2021/10/20/css学习/index.html","f2b95c2046e71634bb1b7f9716320463"],["/2021/10/20/wm入坑/index.html","8ad6fb1676a555c634ccd63631b9f8b9"],["/2021/11/03/微信小程序学习/index.html","e3b1049a31bc0829b0ace6980d69ee12"],["/2021/11/04/css揭秘/index.html","282dc27b90545267a5865b974cadbd4d"],["/2021/11/05/css-练习/index.html","782bae89683733c5e346ba40cb4579dc"],["/2021/11/21/命令集-5/index.html","36cb37a1fd912d60ef115b06161b3e39"],["/2021/11/21/命令集-6/index.html","1781eef9a4721373766df295d583d9b3"],["/2021/11/21/命令集-7/index.html","4ffbac548f5a3ea76eb152958294a36a"],["/2021/12/01/搭建wordpress/index.html","4f8e89da02dff837171fd4226b62bb32"],["/2021/12/08/python操作百度网盘/index.html","db3e21a451dcafb699fae90f6acbdccc"],["/2021/12/14/js爬虫/index.html","471ce4c052ab524f97941937401ffff0"],["/2021/12/25/为网站申请ssl证书/index.html","0485e58f5b9815f3f21183ac06401cf4"],["/2021/12/29/使用七牛云为网站提供服务/index.html","412b0608d1562df4323f1b0e845e6861"],["/2021/12/30/jQurey继续学习/index.html","6617c13ef566f1de275889ae8570448e"],["/2021/12/30/jquery学习/index.html","8743f2a857473d75bb47d8844e5fdd9d"],["/2021/12/31/vue学习/index.html","c48362007c3d5203ec14323d08ef7364"],["/2022/01/02/疫情自动打卡/index.html","ecb0d1fb3b5c774dd777d7620a6bcb34"],["/2022/01/03/javaweb初体验/index.html","035197cc7b3f2294f1aeafcf018dd5c3"],["/2022/01/04/codewars练习/index.html","a0234756d59fd691bedf8a34a079d591"],["/2022/01/05/Spring学习/index.html","489db89b03e082feac79335fe85d941d"],["/2022/01/05/vue实战/index.html","b703bdad9289b904cbc4c6e97c2303f6"],["/2022/01/08/gdb-gcc学习/index.html","b6a4b2a5272cd2e63698892093daedd9"],["/2022/01/11/python-opencv学习/index.html","83b4ea1f920f1e7ae0221a85270da391"],["/2022/01/12/汇编实战/index.html","45d930af4d4f8614ef85edcc63d9caac"],["/2022/01/17/pandas学习/index.html","6d837469a8ac0532ff14e77332b3c05a"],["/2022/01/19/可视化图的工具/index.html","c6c89bb1e90e71de01c599c68d98443f"],["/2022/01/19/机器学习入门/index.html","f1471e9db042523e2cb59ae1b017b31d"],["/2022/01/20/cousera-ML学习/index.html","a5c35953e80962874941439d3847b0f5"],["/2022/01/30/typora解绑后出现问题/index.html","f969a557eb90debf3aa75585d605fdba"],["/2022/02/03/NLP学习/index.html","adfcab01d28afed2eb1019626ff542f5"],["/2022/02/04/Web漏洞学习/index.html","4c44c4c4579ad416633e5659dd796b0f"],["/2022/02/04/pyqt学习/index.html","6a0c3e5fc3011950d71b7511a8110f42"],["/2022/02/04/python爬虫/index.html","f66d367ac25c80cd8151b0a20f81830e"],["/2022/02/18/Electron学习/index.html","a8380e05da899df6157bd99d9e796067"],["/2022/02/22/疫情填报字段解析/index.html","9d9055eb0884a04e34a596e27317133b"],["/2022/02/24/Bomb-lab实验/index.html","26d39d877f0cf4710bb223ed4988c765"],["/2022/03/05/nginx学习/index.html","cc7f6e00b98ce2d88f9713f706e32abd"],["/2022/03/09/汇编原理课程学习/index.html","222da487e5e7b41dcfac04400e93b044"],["/2022/03/11/Keras学习/index.html","9757a60044da5b4a792b4ba01c575f84"],["/2022/04/01/graphviz学习/index.html","88f42aa1fb97a72da309e5eef58ec89d"],["/2022/04/07/django学习/index.html","fab5d97e23ed1d2339ae750ac3f55ccf"],["/2022/04/11/密码破解学习/index.html","a8a58692fb1b465758df865803c942fb"],["/2022/04/12/flex-bison学习/index.html","df424ec6b2dadebb3f4669f435c75e4a"],["/2022/04/15/pytorch学习/index.html","a4fa8ccb19437027460fc59377b8d4f6"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","bcfc897da867af4893d555fffa444c1a"],["/2022/04/23/写一个音乐播放器/index.html","e5e3ec38c904d344c070d92609a89921"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","f73813a468c6582420f4ca57a58ca5c4"],["/2022/04/30/GAN学习/index.html","30d58318fb739deec386ab2b0282bcaa"],["/2022/05/02/html精学/index.html","ab971485e1641cf477d84c8af1fcfb87"],["/2022/05/06/write-a-compiler-by-yourself/index.html","13e99821dc4e23beb154ed47cb719b8d"],["/2022/05/30/acwj-01/index.html","3bf4c7e07f93f6aea2fa87b5cfc364cd"],["/2022/06/14/animeGAN/index.html","03531be5246ba46566bd23b7c8dc12f3"],["/2022/07/09/c-与算法学习/index.html","a1a6860ca8f870ddf7a732a379125ed0"],["/2022/09/19/flask学习/index.html","a3b4dc76ad1999870d4eab5a0f110d37"],["/2022/09/22/cs224w学习/index.html","f21211928f26d8a939d1674e64f7699b"],["/2022/09/28/记录一次wp重装/index.html","6e05cec6f4b901ac5a44c5cc2a7065af"],["/2022/10/01/Obsidian学习/index.html","de694891bf204a800971570d24e5f32d"],["/2022/10/08/vue-element-template实战/index.html","766e053c608aa457615d4794a142d302"],["/2022/10/25/vue网上商城项目/index.html","f359d181f980845623cf4ff6ced4fb3e"],["/2022/11/11/leetcode刷题记录/index.html","6c25ce5b47cc716dfaf29f09a524712f"],["/2022/11/11/使用overleaf优雅地写文章/index.html","e27119f0e4163e94c7a47ab7ba0b6c11"],["/2022/11/22/磁力链接与RSS订阅/index.html","a2192d5bad2073e2795d8039c07200cf"],["/2022/12/11/uniapp申请获取地理位置/index.html","f0a2e5da7fb8b3b72ed00af958f4c101"],["/2022/12/26/pr剪辑学习/index.html","b85aec41f3713f503e16c1263857ef6c"],["/2022/12/27/css中的flex和grid布局/index.html","295a9515f7041ea1170d0894d90e8428"],["/2022/12/28/Flutter学习/index.html","37038ef4fa1b605a20e8590b949ff195"],["/2023/01/01/美化github首页/index.html","23cfd898476f5823c59dfc5663f15260"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","89e55f9675c7cde5db4276d53b08125a"],["/2023/01/04/构建微信快捷发布文章工具/index.html","39bc99f90cd776d8d7e751a2dd42c142"],["/2023/01/14/dart学习/index.html","f8a1a2b8b4ed8e6637f70feb90cd1a39"],["/2023/01/23/闲置服务器BT下载影视/index.html","2cde7a67b3a44518d2b84fcb1495b0e6"],["/about/index.html","5ad589fb7dddeebb405a5229ca8d7dbe"],["/archives/2021/04/index.html","69cd554359d937448f236144c6da204f"],["/archives/2021/05/index.html","02995c8b20e3db0a49e9bc5355c625cd"],["/archives/2021/06/index.html","4bccae69c5c12f6613f22bec1336a62b"],["/archives/2021/07/index.html","b8b431c445fbb4dd6782f047c8238fa1"],["/archives/2021/08/index.html","2ab0ea599bd3dad1c46d7443870b7f86"],["/archives/2021/09/index.html","07567c5ae457d9c1a3d4359200c371c1"],["/archives/2021/10/index.html","cd19bf19bb31b98f8d698a8d09a76d4c"],["/archives/2021/11/index.html","253d5482c506ff65ae58223b7a594a39"],["/archives/2021/12/index.html","37a9124234a7e6099d4517a002d95f0b"],["/archives/2021/index.html","4659fc152641361c00519f3a6f863913"],["/archives/2022/01/index.html","5f37df006bdd337c609cdad2237fbd2f"],["/archives/2022/02/index.html","8f28f715d746c4b34504a41b463e6058"],["/archives/2022/03/index.html","0024efca93a0e40f342f4754b524a7a3"],["/archives/2022/04/index.html","55f031812a63909b225364a6301502c6"],["/archives/2022/05/index.html","513f6d9a03db7f72bf2a54674d1d6743"],["/archives/2022/06/index.html","6c8fecaae9dad4570647f3cf2802bf69"],["/archives/2022/07/index.html","e23030198f527a8663c2416b04c6a299"],["/archives/2022/09/index.html","e7223541f60ec57fd85d6dab446a08ad"],["/archives/2022/10/index.html","be2b428bd50f7747770b0758ae14530e"],["/archives/2022/11/index.html","b6a2ccd6d7c64ea390d13f8407454c62"],["/archives/2022/12/index.html","be4e5c89a5da5efd440f5895341722e0"],["/archives/2022/index.html","cae29ddbf65e810afc2a179b9da5d2bb"],["/archives/2023/01/index.html","ec23421dd84efa3888d541484c1bc510"],["/archives/2023/index.html","0767e083144be56bb60b62e3410c0d2f"],["/archives/index.html","459dbe288d6edcb875cd0a44c19229f3"],["/archives/page/2/index.html","da8659fff8ed630281d1dc37b75eaede"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","5aadb1d2902d5d6810c2db553ff543af"],["/categories/ML/index.html","4cf1fe3a543eba340340a1f55e35de30"],["/categories/Nginx/index.html","a377da5206fe1ac3eb929dc76ef382e1"],["/categories/Spring/index.html","5a09a51ec2500d038ae328c900cbbea3"],["/categories/course/index.html","a7da398ebbb1ad58fe3b008c7f7c5096"],["/categories/django/index.html","a13c768921de5e5dc7bf5f7882201070"],["/categories/fun/index.html","09cfe42524e1400c9f83afa7cbd15d68"],["/categories/gcc/gdb/index.html","5616ad295f5a4eda283b8e26ec75ee55"],["/categories/gcc/index.html","f897866a417838635232637083ad55ee"],["/categories/index.html","6736146eb240d3e809ab99a2284bd2f4"],["/categories/java/index.html","fbc4c4bdacf2343351f35c50ab2a1a6b"],["/categories/python/index.html","81956dcb7415cf9a14c00f4b605e30c6"],["/categories/study/index.html","d9280a755e0547c1a03e4ca74b227ee4"],["/categories/vue/index.html","b21b578ebd9dc6be9a2228eb5a721cf7"],["/categories/误区/index.html","102c2bed32b2568bfdef327cc1c749ac"],["/commonweal/index.html","518bcd0d74f4f5fc70dfcc87f9de82e8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e97f753b98267910ae4a8951495bc71"],["/home/index.html","08d47e9130380fa03d17836f8caba8ce"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","a9da80da5a865f0804e3072001bd9b1a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","33685ce385b183d82ce020be1102e2f4"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f5e0e64b34ae94a0607381e04f46aefd"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","1460faaf4d74ee607378e69aafe48b5e"],["/page/11/index.html","c9768749bbc2d64e30cfb21749334afb"],["/page/12/index.html","9e6864849e08e229348f01eee8889f11"],["/page/13/index.html","7b657ba5cb6505091d63648c3f29cab7"],["/page/14/index.html","fda8383f8a5faaac1489cd3a6441ee78"],["/page/15/index.html","29d90416d61f6c019c6991297c72a043"],["/page/16/index.html","e1080c7b7fb66169425530c32d770d7c"],["/page/17/index.html","e5c22a1e8ce06a333da9c4989b6272d0"],["/page/18/index.html","c1d5702821322861eeffcfed3163ee87"],["/page/19/index.html","266d2019d4a805b04304f53639d8444b"],["/page/2/index.html","f1bd83d2bad0f0e407a95ef21c4fdd28"],["/page/20/index.html","42b52866a49d81c60502c7bdd6172b06"],["/page/3/index.html","80d4186585bb94b581196cd9111959d1"],["/page/4/index.html","16447e8b4707465f2098b5a52f7f3e74"],["/page/5/index.html","3d147948e378220ec72f609cd77a802e"],["/page/6/index.html","ea51644450eca48f063749442c82cc51"],["/page/7/index.html","37589dc321a66101737f09b5876d4e88"],["/page/8/index.html","202da1cffa4a176053b8386deed0108d"],["/page/9/index.html","ac741aee6cb7747f5c34041e6b9430f5"],["/resume/index.html","6f8f17b2cd5f7cbdbd88e7baaff2684c"],["/schedule/index.html","2626f12fecccea092a1c60a17ee3c519"],["/sitemap/index.html","462c4d493bf357bcc0ae2ae3c97fb004"],["/sw-register.js","d3f0a4bb6c3e01818854542552b881b4"],["/tags/AI/index.html","5821aabfdb10c1cf5eb35a0c802bc7c1"],["/tags/BT/index.html","5931ceec5927c0520e0636241ee5cc2e"],["/tags/BaiduNetdisk/index.html","6956951e2679c8a4dbe489224da7f0eb"],["/tags/Bootstrap5/index.html","1f65d912821fe7d4fd71bd7061fad8fe"],["/tags/CSS3/index.html","927534eb1444edb12f2339bbedc55eeb"],["/tags/Centos/index.html","bddc51cca08e883c6daab6f1e49d25ce"],["/tags/Electron/index.html","694888bc1a850a708a8869c8f4c1deb6"],["/tags/ElementUI/index.html","4803f26c0933eebe00c1257235378201"],["/tags/Flutter/index.html","b4cec1209110c5fd180e3a4e12a963d0"],["/tags/GAN/index.html","dbaae6d1b132e5195e3a7ed98bd5f184"],["/tags/GUI/index.html","697be1685cf3f5130dc7402283ac907b"],["/tags/Git/index.html","8544c491ba3db572e607158412fc79fc"],["/tags/JavaScript/index.html","3e6ba867def56a6923cba0b144b371bc"],["/tags/Keras/index.html","a1a533f1ca53616edf29f4c8c453e15e"],["/tags/Linux/index.html","9f6e53b423d37a96d1d3aab4279b208a"],["/tags/ML/index.html","611762ec15dfef5f3a6cab00602785bd"],["/tags/NLP学习/index.html","15c822c640d94c0e84dd87a5a0ff1938"],["/tags/Nginx/index.html","d42db20fdd8b9c259c8c13e485797dd6"],["/tags/Obsidian/index.html","e1e246351b5c99e23e09f9fbe11f900e"],["/tags/Qt/index.html","7bb5aaa3c5f4e1241d802de38afaca25"],["/tags/RSS/index.html","495d40ca0434f633dbcb6cd67b09c44b"],["/tags/SSL/index.html","bca95eb7f3226a8e423affbcc64339f2"],["/tags/Scrapy/index.html","53b69c9f89889bae84f0027f89c8bfcb"],["/tags/Web/index.html","b38d1459d5c6e1a0d3974f9f75bcc8bb"],["/tags/algorithm/index.html","f8ada77d21893b477c200ae3ac5243d9"],["/tags/bison/index.html","1e107bfd7b37a668264f44a01c8153bf"],["/tags/bomb-lab/index.html","1297d6f234ba49d7caf5086c405fa834"],["/tags/c/index.html","59f43e2a4c9da65950dd60c8a1643318"],["/tags/cheerio/index.html","c1966b1c42e3d727a7dc7abad871ecda"],["/tags/codewars/index.html","9acc6464bee725cc8a47a226db610635"],["/tags/compile/index.html","b22a394fc6cb1349d26a4faf45afce22"],["/tags/compiler/index.html","0caaf79dd2d9d670360f0317d2d01640"],["/tags/course/index.html","285bf8ba388561520d4b055b67b74a87"],["/tags/crypto/index.html","6bf90001cdb3c17f112bb6b1b2474a54"],["/tags/csapp/index.html","0e3ba4f2e5abd19a8109d61cd6c08c89"],["/tags/css/index.html","a11a4669a5b0fb333457ca89a6aae432"],["/tags/dart/index.html","6bc09a59c3197eb599fa9ea81f849cfd"],["/tags/data-structure/index.html","bab8b9fc83103cdb8d3e4ab253c5017e"],["/tags/database/index.html","edaca2d8f8a26dc3e5e25cd1d9421653"],["/tags/deep-learning/index.html","7dcbed01556fdc3f4d2a4a67e7a682e1"],["/tags/django/index.html","ac2b1dbacd4b7143aa2b9b358285753f"],["/tags/dwm/index.html","f480b24f4ae69bdddbfccb7c436ecbea"],["/tags/exercise/index.html","ffd1b765e5c27d606ea53f45d90dc2d9"],["/tags/filebrowser/index.html","f704a8c4bcd590e938e73ef064d3ae58"],["/tags/flask/index.html","89438b9d393503b3ef83a6c25925545d"],["/tags/flex/index.html","068209a1e483094036a0b36ebc3dcb0a"],["/tags/front/index.html","b91e8fcc2e497b3b2bf95f1138342f6f"],["/tags/gcc/index.html","ed11ec0d35c7de780500929d161fcd2a"],["/tags/gdb/index.html","e107cd96505a0c0ba835f0586038c6da"],["/tags/github-profile/index.html","a4f6db02062a644ca9345ac6a109e0a0"],["/tags/github/index.html","9257faaac4eced2f4882498ad019a5a1"],["/tags/graphviz/index.html","d0d63d5addb32211e74f50d8635915f6"],["/tags/grid/index.html","856fd942ccf8891848104195452ccb7e"],["/tags/html/index.html","25bea959abb38b31eb918e776fddfc65"],["/tags/i3wm/index.html","42e5b89fd6af3822b7f8c1e17c3d0fd3"],["/tags/index.html","7a08810329568996a9a1a556a9a82d44"],["/tags/issue/index.html","a0cb08d57009e89e4db916f5232a36e2"],["/tags/jQuery/index.html","285d2a20723173086b5c3a9f1065d027"],["/tags/java/index.html","1ad88676491495cec98ca58ab085acdd"],["/tags/js/index.html","8971a27b67603cd1cfb8f4d8c0358d3d"],["/tags/latex/index.html","f7896b142f434e01cd0723eb535663bd"],["/tags/leetcode/index.html","521c924de86817c80677e984120ca654"],["/tags/lex/index.html","bf02b2a987ea22050a2b3c9373a174a1"],["/tags/material/index.html","ed6240e85b4d54867815497ac21c0d8c"],["/tags/music-player/index.html","8fc7e24b0a3b4c4b1c8b250612b5a0da"],["/tags/nodejs/index.html","eb2fbd8925ee6b395f20e998e4fe6bc2"],["/tags/noj/index.html","e10d0bfd85e364355558e5c53a6dd915"],["/tags/opencv/index.html","1e40acfdf37764b454e7038b660d3aae"],["/tags/overleaf/index.html","71115797155de182a9191d10dd486b29"],["/tags/pandas/index.html","ab760a7cd0081c8e1a699c2579e2ad31"],["/tags/premiere-pro/index.html","4e882757e31a1194d273cd143b2d3928"],["/tags/proxy/index.html","437e2b685cdbc4261c5c3955b3bfdbbb"],["/tags/pygame/index.html","d18edc320f1d416345401070d3441981"],["/tags/python/index.html","eb130c11a3dda5bdc14ae676651afab3"],["/tags/pytorch/index.html","6f043105f6f893bf93bdda77cce090b1"],["/tags/reading/index.html","cdcf230bf04e27c7ea4ebff31a13d7ac"],["/tags/request/index.html","09f83b007752924e6de9d29c38fe0772"],["/tags/requests/index.html","037ce6f6fbde3b3d95600b54b207caf0"],["/tags/security/index.html","444cac82c88841b2b80c746653e30839"],["/tags/shell/index.html","00a3a61eb92b53eaa12d027aff3429b5"],["/tags/sign-in/index.html","52ada004811e7e2e397de709d7ef5ef3"],["/tags/socket/index.html","ef2744bd0074fa9023c15510eb254ace"],["/tags/spider/index.html","2ee0cca3c7a8e343a21d39d94aa76838"],["/tags/splash/index.html","0fa07efc2309bdeb9377d1a67ba5e69a"],["/tags/superagent/index.html","b4d1549e4f16ff63cd159208eaa9f621"],["/tags/tensorlow/index.html","0f9401727de40be3b42c0ec1f846e896"],["/tags/tex/index.html","4dceb3618476af5d20933c7a7c1ef909"],["/tags/threading/index.html","47fc4a889800c874f08757486597f167"],["/tags/tkinter/index.html","caf198b9ba191288b11e5b93d963d1a5"],["/tags/torrent/index.html","8d1c29017fdee5306d9cff0be11f2cd0"],["/tags/tutorial/index.html","b3d3a9d8514e20519921dd8997ad6ec1"],["/tags/typora/index.html","d52e2936f10e67454b5a4fd0613babb9"],["/tags/uniapp/index.html","9c46815a043061b3b0840ce11b9b48bb"],["/tags/vite/index.html","9d530fbe1fb8c15dd0479fcdc8762d30"],["/tags/vue-element-template/index.html","fb670ed1b700fb4db2c46176a1e5142a"],["/tags/vue/index.html","149e548b63afb4b2261e2a85f26a6958"],["/tags/vue2/index.html","086d974df429a94bd727068f8bc636a8"],["/tags/vue3-x/index.html","2fe4588924c3d5eaae5b29ecd567f10e"],["/tags/wechat/index.html","1dc428c8a5adcf2fc7315163b6b41a7f"],["/tags/wm/index.html","6a334ccef7c9466815ce981c35ec434b"],["/tags/wordpress/index.html","5844dbd77be3ff11914b25119fb2bce5"],["/tags/workflow/index.html","90ec3a290772aa42ae507764239c59fe"],["/tags/xpath/index.html","ec3d0ab09b0b184d77a4c64aa122944f"],["/tags/yacc/index.html","fdd645bdc18622a86e87878233aa032f"],["/tags/zsh/index.html","9686b681323ba7b25b46a36b651e987e"],["/tags/七牛云/index.html","8307504795b65cd4849889d0b9e008e2"],["/tags/函数/index.html","c5b8f2c548289affb3e04965748b7c93"],["/tags/剪辑/index.html","b87018e560441caea39708148999458d"],["/tags/存储/index.html","859379aa35eaff84808b70e711907329"],["/tags/实战/index.html","5fbb235483a7afd40f8124a074f3ae05"],["/tags/建站/index.html","edb483036779312e7e7ff73711c1e4b0"],["/tags/微信小程序/index.html","59898134ae309340564b30bc48f4932a"],["/tags/指针/index.html","729d34bbfd4e845f1388b94327200e39"],["/tags/汇编/index.html","2d2e798e712ab3b50d71773aa9b2dced"],["/tags/爬虫/index.html","f2053090ac311c352822999e52d63a68"],["/tags/算法/index.html","f34124dbb45d39a86a4d2ed03f166f4e"],["/tags/编译原理/index.html","bfdf22953268bcee7e10a993c7d9ca34"],["/tags/获取地理位置/index.html","ed1ed0d77bf6dcab700657b5639d7b76"]];
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
