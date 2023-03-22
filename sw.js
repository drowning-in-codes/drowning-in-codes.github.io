/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a9722ec3165c42b9ff1fa7e24a61a4a2"],["/2021/04/20/稀疏矩阵/index.html","e61758ec5f63e97f03e7b33035255445"],["/2021/04/23/广义表简介/index.html","511a59240af98917886a49844d06e7f3"],["/2021/04/29/关于指针和函数/index.html","f525c5064a123398e07f61707c2944f7"],["/2021/05/10/哈夫曼编-译码/index.html","cb90cdda026069e7b713219a9c2a9642"],["/2021/05/17/数据结构noj_2/index.html","f65107cbbc481074dfcc249948ea80b5"],["/2021/05/30/数据结构试验/index.html","e5ca87707be2fe8d3e2e8acf3ddfab04"],["/2021/06/12/数据结构noj-3/index.html","01f29947d896f482f315092d97e737f3"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","7c34e35d59ce15acea2d40ed473abe89"],["/2021/07/08/课程资源分享/index.html","6407116fdb1a27eb31329f22d44308ba"],["/2021/07/20/Scrapy-下载图片-文件/index.html","2f4fc7072675be691c1bafc8e18c8059"],["/2021/07/21/Scrapy-动态网页爬取/index.html","97fb3ce4e9bb20ff04578087eac7dbba"],["/2021/07/21/疫情打卡/index.html","f35681c608de97f8f702bd0d242872cf"],["/2021/07/29/Scrapy代理设置/index.html","7694caffc980dee070a95b60ff41fe3d"],["/2021/07/29/数据库认识/index.html","d59cdc2d971d4a70946663dad02c21e0"],["/2021/07/31/Python多线程学习/index.html","7ee49283a64c6632d997cc991448fcf2"],["/2021/07/31/tkinter-requests练习/index.html","1ffa5c0c013be46d4a4b7dfe5f0e1c57"],["/2021/08/10/Git学习/index.html","ee6ec66a8892f847f9afe1d3dd879ca5"],["/2021/08/15/pygame实践-1/index.html","8a4c3f05d1fa6ae0ca98d6ebe7abbe50"],["/2021/09/06/微信小程序开发/index.html","5cde0411e1763d1ba1ab6e9ee54dbded"],["/2021/09/21/命令集-1/index.html","53a25b858ebfc27f9fd8a44507f86ac2"],["/2021/09/21/命令集-2/index.html","07678fe8551d535c4ff4f53b8e4b03b1"],["/2021/09/21/命令集-3/index.html","8eafea93ef2b26bf7b213be2e3bb810e"],["/2021/09/21/命令集-4/index.html","6ebbb43ee983339ec082573c085e3230"],["/2021/10/03/socket学习/index.html","e7ce37e92435c3f4a37061a3b3f42420"],["/2021/10/10/dwm入门/index.html","f53e462c48184b329e9f8c122da3fa58"],["/2021/10/10/安装ohmyzsh并配置/index.html","b989979e7611fab186e68df3b75f4c71"],["/2021/10/20/css学习/index.html","7551d67b4f1d9257959f632bb4f7d315"],["/2021/10/20/wm入坑/index.html","975f2959cc7f87b40774ca87799b5e03"],["/2021/11/03/微信小程序学习/index.html","37bb2b6c97083e2f87eaf966c1856769"],["/2021/11/04/css揭秘/index.html","43741ad57b6ed38d394c8dd83a8d9dc9"],["/2021/11/05/css-练习/index.html","6e319fb8aa2d6f281fcb2013bd3541b3"],["/2021/11/21/命令集-5/index.html","1c29709746df87b4a43334f03efd3280"],["/2021/11/21/命令集-6/index.html","c4d316d527477db660a0e4b3a8f9eb9a"],["/2021/11/21/命令集-7/index.html","f5f38cab08e2d79e1050d972600cace5"],["/2021/12/01/搭建wordpress/index.html","574ba042e9d491a27c30391d2749f9a2"],["/2021/12/08/python操作百度网盘/index.html","3ca09ee0f323878b031c2c26d683e4e3"],["/2021/12/14/js爬虫/index.html","71d572cece73720521f771bb308185e1"],["/2021/12/25/为网站申请ssl证书/index.html","00e1c10efe61593bc3c28ef8a1aab513"],["/2021/12/29/使用七牛云为网站提供服务/index.html","b9c72dd95c87d36192b5ee535a946660"],["/2021/12/30/jQurey继续学习/index.html","ffee6f08b47099bf015fb80dd9db21f2"],["/2021/12/30/jquery学习/index.html","5f839fbf6cfc13551621cb45a1a64d33"],["/2021/12/31/vue学习/index.html","9ee2f9e1c8e2a02c484a6bd4a9f134dd"],["/2022/01/02/疫情自动打卡/index.html","201223f3e404bb5773c00e8a1ce9c6e0"],["/2022/01/03/javaweb初体验/index.html","1ba95909bdbeac835bc2b7372a2b0211"],["/2022/01/04/codewars练习/index.html","870b9c56cfd0b3c4de44916b858e9da3"],["/2022/01/05/Spring学习/index.html","36a12ca5c91a197f8a85a7d25c652860"],["/2022/01/05/vue实战/index.html","5ca13c734fafa3cd7b697aa31b78e9af"],["/2022/01/08/gdb-gcc学习/index.html","73ae2fecd8efd0538cf82e28ccf71aa6"],["/2022/01/11/python-opencv学习/index.html","e2e2f8965f3ab1850f7d3bb30d1af00a"],["/2022/01/12/汇编实战/index.html","9a6b2d6b898223e894a0282211c5282c"],["/2022/01/17/pandas学习/index.html","844b6497a0e19ab7a8e5026929fa2d5d"],["/2022/01/19/可视化图的工具/index.html","5ba76ba88de248313babf72446a3487c"],["/2022/01/19/机器学习入门/index.html","94a4b79e588507bfc3bafea8f1c4e795"],["/2022/01/20/cousera-ML学习/index.html","f65d6ee432a2c751bfe1bad9a5ef5fd2"],["/2022/01/30/typora解绑后出现问题/index.html","32c98334b523674d7b44cc017a1354d9"],["/2022/02/03/NLP学习/index.html","9264ab08336f20fb0deaf2f4c35eb12b"],["/2022/02/04/Web漏洞学习/index.html","c7f73eace5fa63a31c5508e9b3f71011"],["/2022/02/04/pyqt学习/index.html","79c5b1e18595e500db7c2e5081b4bcff"],["/2022/02/04/python爬虫/index.html","751441664732ccb4495f8fffd6098be5"],["/2022/02/18/Electron学习/index.html","eab93169193cba1b0b44453cfc3069d2"],["/2022/02/22/疫情填报字段解析/index.html","450f8af1a73cc4c4762c8fe5c39a21f7"],["/2022/02/24/Bomb-lab实验/index.html","52416f3b9d8890cf687da47531bc1e65"],["/2022/03/05/nginx学习/index.html","a25a4f219bcb03baf61ce279fa3f5e89"],["/2022/03/09/汇编原理课程学习/index.html","f2e47be3cfdf20cf61d3ad0bad52cfe5"],["/2022/03/11/Keras学习/index.html","33009138113de69d70d9833fcaff96e6"],["/2022/04/01/graphviz学习/index.html","d796cb3db5e9b7bf13cde413357e334c"],["/2022/04/07/django学习/index.html","62fbf1d92d3d300559150e2b1e5225e4"],["/2022/04/11/密码破解学习/index.html","87b76f42aca41e0bba0f8d2a3922f84a"],["/2022/04/12/flex-bison学习/index.html","70ab6b0df3837f1ab1d417af6ad07d75"],["/2022/04/15/pytorch学习/index.html","35972f99aa58a92b990e65749ca9ee65"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","e1bbbd4c1777f87f4e81d84433518872"],["/2022/04/23/写一个音乐播放器/index.html","436210375d02896e676ba4e2ff630ce8"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","2982512d47c84754137149852595728a"],["/2022/04/30/GAN学习/index.html","484e697abd65e1f6c0e979b2e3a143f5"],["/2022/05/02/html精学/index.html","5c3fa605a30b91f9f601c7e8d9eb121f"],["/2022/05/06/write-a-compiler-by-yourself/index.html","504cdcf404100e5461933f6eef1bbddf"],["/2022/05/30/acwj-01/index.html","c246db7d14de38105561f2989dc63d0b"],["/2022/06/14/animeGAN/index.html","cfd5e7c7a45550bb4af947d42fab56dc"],["/2022/07/09/c-与算法学习/index.html","c84ce766274819061869ed810d74c4e4"],["/2022/09/19/flask学习/index.html","fe2b07345747f7e573745af11325230c"],["/2022/09/22/cs224w学习/index.html","b4a05b04d5c7771f3e0f9296a01c6d1b"],["/2022/09/28/记录一次wp重装/index.html","ddbfee8ca4ec7f32e3fa23aed561d8e7"],["/2022/10/01/Obsidian学习/index.html","47e7287f46f51611d1cb27803970cd47"],["/2022/10/08/vue-element-template实战/index.html","37b61353f6c2347659f07125b61b9ec1"],["/2022/10/25/vue网上商城项目/index.html","060ab1d5f376e0ba71b9fd8ee4985dcb"],["/2022/11/11/leetcode刷题记录/index.html","6cac5a306afd5aecb4433d311da77596"],["/2022/11/11/使用overleaf优雅地写文章/index.html","94d961cb83cd0af40bd52296ec711f59"],["/2022/11/22/磁力链接与RSS订阅/index.html","4663c7ba3f1db0013f0adedd3a8537f8"],["/2022/12/11/uniapp申请获取地理位置/index.html","d5601c3a2ad17b66fbe32e4cba9336b2"],["/2022/12/26/pr剪辑学习/index.html","18c9a93e79b3b47919f3147d2499700a"],["/2022/12/27/css中的flex和grid布局/index.html","65c060f711093ce7e40055ecfe382f5a"],["/2022/12/28/Flutter学习/index.html","a0692fb6cfb279f038bcf47826a0307d"],["/2023/01/01/美化github首页/index.html","2accb1dd27a2ddba0496d738ee6a9533"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","e73cf261f20d3f2c8586060feca51882"],["/2023/01/04/构建微信快捷发布文章工具/index.html","4d39aa03239d36330c27e1d52886bace"],["/2023/01/14/dart学习/index.html","44438d8442ef3f6b8b9123913b01e506"],["/2023/01/23/闲置服务器BT下载影视/index.html","b85306208112d9b0986912f4ef6a72fa"],["/2023/02/07/TotalCommander使用和学习/index.html","9cde0e0fa1048bf17594cbb9661faf4d"],["/2023/02/13/docker学习/index.html","686e9ad926c631a2098d76e53e922cd9"],["/2023/02/17/DLHLP学习/index.html","38eb0491e4895a34c8a7331ca73dfb7a"],["/2023/02/18/学习purecss构建自己的css框架/index.html","4170975a608f92d13b41817e96b3b3b6"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","79f0d4c9b07419084efb8bd4bd28eb41"],["/2023/03/05/STL学习/index.html","ed19ab0da41dc09f63ed10d5649433b5"],["/about/index.html","84b4e4d39ae9f33ce7c92395963f143e"],["/archives/2021/04/index.html","f275c084528f366b5b1e65888ceaed9e"],["/archives/2021/05/index.html","e99915f49ae27ea0fd1843f9b9456cee"],["/archives/2021/06/index.html","279b5902fb5f5510cb76ff66e20ff02c"],["/archives/2021/07/index.html","7bba1834bdd0ba9b216313e1ffddb663"],["/archives/2021/08/index.html","74b74149befb09ad922e98d5b3134a39"],["/archives/2021/09/index.html","63c6eda5d027837cea4e8ae8471033fa"],["/archives/2021/10/index.html","2f77f93432bf5a3f49bf0d8a7e5fda2c"],["/archives/2021/11/index.html","4c3f991e36e98afe71124ac8ed0fc37e"],["/archives/2021/12/index.html","853063cd0770e0a2e953858aa133f66a"],["/archives/2021/index.html","af7ca385a2db2ba7a26f0ae470da141e"],["/archives/2022/01/index.html","81dc9597270c7b14002e8289c7ef39d3"],["/archives/2022/02/index.html","dad941f97d4ea16a58d9c74bd057d96a"],["/archives/2022/03/index.html","bf32d36df774dca1b551d148ed298d89"],["/archives/2022/04/index.html","35c5e8ab9be2f643845fcbfc911225e5"],["/archives/2022/05/index.html","958f2097c22c41d8cde2484b814f115c"],["/archives/2022/06/index.html","e37990671900614559fa9f0697704e3f"],["/archives/2022/07/index.html","0df6a011119d7cb10340dc1d63e5baf6"],["/archives/2022/09/index.html","430073fb60c6bf23b658bf51d6d22707"],["/archives/2022/10/index.html","51e2de6c1696c0c91d283ebe62fbc544"],["/archives/2022/11/index.html","e2ef6c8a0960d89496e52b0dec97b5ad"],["/archives/2022/12/index.html","40ba7aaa936aea70448ade9f19adf1f0"],["/archives/2022/index.html","ac95169a4e24ad8750f707e91e72da5d"],["/archives/2023/01/index.html","46ba378a7e9aeb292a47e05f63e75941"],["/archives/2023/02/index.html","2e263d6a6a99fa9e5012cc30c9d3b243"],["/archives/2023/03/index.html","e17cd4e0b7cb76818ada79d9657999f5"],["/archives/2023/index.html","2a9835ff10a8996ce8c0e4ea038b65b4"],["/archives/index.html","763f00ce741c9915dc79406c5c8c8f6b"],["/archives/page/2/index.html","af11da57dd9f8ce8d84935963b367442"],["/archives/page/3/index.html","a96ef965cb5f91c3d7b1a3305207bbc0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","e45ca2849661dff37a586b68de3c3e33"],["/categories/Linux-study/index.html","ff158fa8aa1f72ac8a9bc8ec08748c67"],["/categories/ML/index.html","2d804c1a61dbbcae8dbf7095d58a5240"],["/categories/Nginx/index.html","fa06ec66602d48c9085bceac53c1956f"],["/categories/Spring/index.html","607975abec0fabb8543b50932f2248fb"],["/categories/course/index.html","6aaf57661722e8d9683aa2436643bcf2"],["/categories/django/index.html","e2364f15787d337a7ce05a22b82cb447"],["/categories/fun/index.html","13f4419b51b569e90dbca91d95364f2f"],["/categories/gcc/gdb/index.html","e854b6c538d83aba26294794cc42e2e4"],["/categories/gcc/index.html","b5b8cf4a397b02d3312b9875dc46bf66"],["/categories/index.html","7071583cdbddac323aa450dc192bd1e7"],["/categories/java/index.html","7b8144133f9871e46846abdac2e52f77"],["/categories/python/index.html","7824f6f305b92a052b8d162247359d00"],["/categories/study/index.html","1a3fe4b859e346f1a523406a855a7d15"],["/categories/vue/index.html","ac5ff5c60148102004422e230260f190"],["/categories/误区/index.html","8dbaf221b06cd90b0c67a5f2b8ffe7bd"],["/commonweal/index.html","a0a5a40e3d8a4d3dabf016376ed10bc9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8f54a2caa7f5cf649e79f114b8480c48"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","8908e38f3f109a4c5ea9071b75759db6"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","f03ff926c20400059f6f4792c7fb9609"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c69683570478af04308b45ccdebcdeb4"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","5bb23ebe070f245328c10b1996240b98"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","08d47b82c8899fdaebfa22b7bb619521"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","f0ba625ce45a1fcac2ca1adc820698b9"],["/page/11/index.html","9dea2d9a963ed94c51d6a4c8a4a9e3d6"],["/page/12/index.html","959470696289f6c277681f0ca9ece54e"],["/page/13/index.html","07330313b29e1e79de38c9624dd7c613"],["/page/14/index.html","fa69ec277c70f9f4d2f1ef48c1c2d8e5"],["/page/15/index.html","f8d353217bdeab5e9f7f03b2096b1b40"],["/page/16/index.html","fc9effb174b9f52d2de4d87a3658e4ad"],["/page/17/index.html","a553b2635440c96fc325201d8ffc3108"],["/page/18/index.html","7d670451c365049f5158b76254b0069f"],["/page/19/index.html","6753162a9386462ca1f8cdec14685d26"],["/page/2/index.html","931b406d4071c084468a7189bca44750"],["/page/20/index.html","06e934bf23b80e5ffb8041056221ebd4"],["/page/21/index.html","7b503d57210172fc9c24cad070d99566"],["/page/3/index.html","5d581915ecd70ffac6c866555cd78958"],["/page/4/index.html","9096420edf073a7f001a7b7b5f588756"],["/page/5/index.html","662de1b946248f205bcb1b5ed114fab8"],["/page/6/index.html","bd68bcf9c46962a3501c388680bbea36"],["/page/7/index.html","af813644927ebe0a8a9943b2a460f9d9"],["/page/8/index.html","70bc136da91a090c01a9338a99d133df"],["/page/9/index.html","c4aabda4b06eed23314a6019bb748a07"],["/resume/index.html","62d6edb4364557ce114e9772e6a024db"],["/schedule/index.html","6e4f8bf637a89454d87aeb150642159a"],["/sitemap/index.html","f0b4bbfb9bee8a8d13afde8d41d16a13"],["/sw-register.js","434004490e459ddbabafbcc052af9cc7"],["/tags/AI/index.html","85fa925e39c7f6777802a4859b450ea5"],["/tags/BT/index.html","36128a1df6d3241bda8dabedb50aa2ca"],["/tags/BaiduNetdisk/index.html","4241aca1fcc6831a67345d216dbc353c"],["/tags/Bootstrap5/index.html","10145caf83c5b53e7a464da7e596f597"],["/tags/CSS3/index.html","443193b3c5c498b94f637f90c0a6bb51"],["/tags/Centos/index.html","a650ead55a45ae60c8fc592694086707"],["/tags/Electron/index.html","3beb0820c663808e703268034d90a2b3"],["/tags/ElementUI/index.html","5f66a016d2a4fce9a411ac5ed1bf3ac3"],["/tags/Flutter/index.html","1b1ad0d6d1b074068d3b2e74784a8591"],["/tags/GAN/index.html","9dd4b4996fcf6c0a87ffb35273e51025"],["/tags/GUI/index.html","9fa35d44c11584677b9439ff16f5d903"],["/tags/Git/index.html","4a4b1d430b2e7c08997395ae53a8620f"],["/tags/JavaScript/index.html","9027e0494994f50e1e24719a6a541717"],["/tags/Keras/index.html","288476d357e933d586c4124d856d2475"],["/tags/Linux/index.html","884348ea021b4d9915960d241acce1f1"],["/tags/ML/index.html","e4b5601555f815a702df922d539a9e3e"],["/tags/NLP学习/index.html","c2fbd2cd42fb0bf40dc72a7348839238"],["/tags/Nginx/index.html","1905d8598af152d232ccacaba2e51608"],["/tags/Obsidian/index.html","4fce8a4f459d3acef3abf38010beae9a"],["/tags/Qt/index.html","7a969794b5e2227b9c153fe88821fd0d"],["/tags/RSS/index.html","f8bf9412fc6f00ba6028513ac5113530"],["/tags/SSL/index.html","8fbc2874dcf822cac33e48a1b1bb954a"],["/tags/Scrapy/index.html","eacaf46a8e64eed922a236dcfcdc25e4"],["/tags/Speech/index.html","8c83735cd615734e36904b37b19ca407"],["/tags/TotalCommander/index.html","50f52cd322de49ab4b09e51af0b7fba6"],["/tags/Web/index.html","2495ee7df34002e226b4ef5d494033ad"],["/tags/algorithm/index.html","a8ca7c8601517df0416fb5a676a24d66"],["/tags/bison/index.html","875e62d8bf9a43897806c60b58fab294"],["/tags/bomb-lab/index.html","e81310152e3f41adbc23ae8a6e2bc5bd"],["/tags/c/index.html","2ecab6387976ea471292472e8ed3a4be"],["/tags/cheerio/index.html","bfac9d16ff6770ea1c41713e35eeac31"],["/tags/codewars/index.html","25ff81c99e32d0ac669697675f6ae1f7"],["/tags/compile/index.html","bc1eeb3bead5d2bf5848d89b8771e8dc"],["/tags/compiler/index.html","4ed1d4c57449f79f1b1c0bf57645013e"],["/tags/cors/index.html","692472876c1c922c3c5aee7928c1448a"],["/tags/course/index.html","882917b19dd9c366c4829a6dfc028cf3"],["/tags/cpp/index.html","f4d6e0b2cf62c8e46b453bfc663a5557"],["/tags/crypto/index.html","2cdad81b106862cd863094d13debb543"],["/tags/csapp/index.html","9393f5bd930d5b9068f85702b2f9aefc"],["/tags/csp/index.html","36aa0523151d8e546b5f91a65acbdd71"],["/tags/css/index.html","c0e315244f60c4d165a1765a394c3836"],["/tags/dart/index.html","b43151cc15c886ee795b07892ab87dee"],["/tags/data-structure/index.html","a148037c0c7aa4de23014461c9831e46"],["/tags/database/index.html","f0b1ef65229176ce97aec8f7cd8426ab"],["/tags/deep-learning/index.html","bf55ea7d7bae8b29e5e24c9eec36444d"],["/tags/django/index.html","44996a68d2691bcda60b62aee8437c1d"],["/tags/docker/index.html","6eaf32eae20cddd1afb7cdee89b7f9b6"],["/tags/dwm/index.html","0731b3aaa72a85c6ba9044363d307bf5"],["/tags/exercise/index.html","98473dfbd597e385076556fe43b0aa61"],["/tags/filebrowser/index.html","40c8083214bf269a4f0b486d20376ef8"],["/tags/flask/index.html","bd473f7714c0ef52bdc2cb7f54ec2ff2"],["/tags/flex/index.html","2f0e03def75bd258b6a92bf6748f1906"],["/tags/front/index.html","6b60a1850b25396a2a438abe6a59d074"],["/tags/gcc/index.html","024a322453f914a8a1477431c960e095"],["/tags/gdb/index.html","4eb185fccf65352c1e42137bf4b8092e"],["/tags/github-profile/index.html","bc70e83dbbc77c6bb662874c1e8ed3fd"],["/tags/github/index.html","acaaa11a723c42a540e3c1cf2cf0a794"],["/tags/graphviz/index.html","b04b9fb4aa841c90fe53a83199cf91c5"],["/tags/grid/index.html","f7bfe9a68f6ee2334b72ec295596d398"],["/tags/html/index.html","41b022a8ac7b049fd6b21a3ba76da782"],["/tags/i3wm/index.html","b1985196f9a2aca7468c058a5292e77d"],["/tags/index.html","c5ff1b216bc82a5addc277604b648d62"],["/tags/issue/index.html","f291326ffc6d75c5d65b7f6f14c994a7"],["/tags/jQuery/index.html","01b2af97d6c61f8a788d38066deb8ace"],["/tags/java/index.html","ba3267ec241b9a2e17ec68c798ad306f"],["/tags/js/index.html","479860f16af747b29e569945405e89b2"],["/tags/latex/index.html","cc2879cd5020094eb7ac268577e336d6"],["/tags/leetcode/index.html","8957b67f0a2ae80fce9b497416705fe6"],["/tags/lex/index.html","4990c2f101a8ada62b23b506bcf18ab0"],["/tags/material/index.html","83d1fa5bf8bfbed4206cf8c040560956"],["/tags/music-player/index.html","8571d2ff9ef5e51b08ad44ec0b8ea8a4"],["/tags/nodejs/index.html","ffd3ed9c24a8b08c707f45978e125a12"],["/tags/noj/index.html","9f182fed7bb34a2027098092fb80d4e9"],["/tags/opencv/index.html","a87d2163a4e100abb07b9b356d2d6ead"],["/tags/overleaf/index.html","ddb811d493bc5d6ac542839f095fd917"],["/tags/pandas/index.html","666c2a96f5f157a2ddd3f7489ea32e55"],["/tags/premiere-pro/index.html","0dc23680c51a3426b035722fe040efec"],["/tags/proxy/index.html","c95e8db708e9eae74e2200bfb10e5946"],["/tags/pure-css/index.html","a72967b9c59f6f466dabb5ded92e580d"],["/tags/pygame/index.html","681b504ef410ad5c4f8983c0b3c4f730"],["/tags/python/index.html","0a817983eefdd94731e274825e958a82"],["/tags/pytorch/index.html","32726ff097cb9db040f3c25a443f73bf"],["/tags/reading/index.html","57c94b0b2c5a71066e58845ceec7c79c"],["/tags/request/index.html","825e7d2cd291f2b856c37059aec7a12f"],["/tags/requests/index.html","72680671ae288533d3f9b967bc926482"],["/tags/security/index.html","b3fc38afbccdb22b5c1dc7d6ee1c336f"],["/tags/shell/index.html","37aa27f6d9a79f1dc14d8ea0b5dfcb0a"],["/tags/sign-in/index.html","f38b18c73f4112c29b6ba0e77b69e202"],["/tags/socket/index.html","2a464a5e77702d5e27e2c94a769c9400"],["/tags/spider/index.html","c5f2556f962765e56c9946f472ef984b"],["/tags/splash/index.html","fca011b3d59a9a75873ce5df055b90f9"],["/tags/stl/index.html","6eac9ec9436bbf65818454beba2e8df1"],["/tags/superagent/index.html","aec46a8c86c2ce52ec9b46dbfbabe5a8"],["/tags/tensorlow/index.html","b600a367e16920d9d8ee59331ccee54f"],["/tags/tex/index.html","a986b072050ae30b6537dec0aeadaca9"],["/tags/threading/index.html","21561935b3c65531c15d26c1fe48bb7d"],["/tags/tkinter/index.html","6b42ee34a3b9dbd1f214fab1aab6b639"],["/tags/torrent/index.html","632df90f8ab7a03df3f0c70ea5a58535"],["/tags/tutorial/index.html","8e6b4e662d961e5a1e61968e8de86520"],["/tags/typora/index.html","eef80fb3bc9f4e802be521c354a6917e"],["/tags/uniapp/index.html","5acb052d3f12fb4fe29df84490825d0c"],["/tags/vite/index.html","f432b3092dc726902e4786c6a5b2e76b"],["/tags/vue-element-template/index.html","f2939218554414b285310808bbb594a3"],["/tags/vue/index.html","484e8737e515b9d5a354f96f55cd6b8e"],["/tags/vue2/index.html","57a2dbeffadfc026e6edd030e0fe94df"],["/tags/vue3-x/index.html","bea92c6d55691c935c9b676cdf93d43d"],["/tags/wechat/index.html","31cce9b90a6d4207456a5c8b98a1a667"],["/tags/wm/index.html","4ecf5c91c9f6a1c4679be4d3e5ddd949"],["/tags/wordpress/index.html","ecbf3fcdc530812b0a163787b683f973"],["/tags/workflow/index.html","70eef7378741d30abf1b6850ea238622"],["/tags/xpath/index.html","1a90fe56ba2875b73ae63dc5c9ddfb66"],["/tags/yacc/index.html","8d60d4271280a0f61c820e2988c3eaa5"],["/tags/zsh/index.html","d82b2ed8b42b7a16c55b09b9ab6ccd38"],["/tags/七牛云/index.html","59488f3c37873a78d006cd73035e3607"],["/tags/函数/index.html","badc3bdccd7485164a5055f4d24a787c"],["/tags/剪辑/index.html","66006887e98a49254833b77635ddafde"],["/tags/存储/index.html","acb88dea17ad8bc431362c765894143b"],["/tags/实战/index.html","e19a540137f879b485890ae3aede4376"],["/tags/工具使用/index.html","e93cd00904f8a3b486f70040f2b71fbc"],["/tags/建站/index.html","433696433351561bea5d52a487feae4c"],["/tags/微信小程序/index.html","69ff959f218ebfc116c58cf3fe9b2a66"],["/tags/指针/index.html","28424f48cd18ad110c045f94b78ef4c0"],["/tags/效率提升/index.html","1af214b8b4296c5a9650ea4c095c60dc"],["/tags/汇编/index.html","73a2af87d9ee256c8986e30faf366d65"],["/tags/浏览器/index.html","757f489af922e3d7f752eef2a14c3aa1"],["/tags/爬虫/index.html","a2c7ac779b24a6a94f6856ef02114807"],["/tags/算法/index.html","f97d320c9cf0993eb13be3dec42d439d"],["/tags/编译原理/index.html","f7f0ddd1cb2211dccb1577515d1bdc89"],["/tags/获取地理位置/index.html","2de3bffafbc4d0939161d6b86cc43335"]];
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
