/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","01fd5500587593b4efa3dd353bfc20fc"],["/2021/04/20/稀疏矩阵/index.html","fc4a11849f4de1606e73388990c0f7b0"],["/2021/04/23/广义表简介/index.html","d0143a2d8cde7ccb9c80fc6cbd0496e4"],["/2021/04/29/关于指针和函数/index.html","20f3cb63247533629f2e7ede09dcdc4c"],["/2021/05/10/哈夫曼编-译码/index.html","dfa86309f7f2917a14495695431cfb27"],["/2021/05/17/数据结构noj_2/index.html","425016b745e3909e1e13184194e82bc3"],["/2021/05/30/数据结构试验/index.html","585d551235cb86aaaab8eae6d391d139"],["/2021/06/12/数据结构noj-3/index.html","83e05ff513314ae2541bab685cc787a3"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","45713ff8e391c809fe36d6545c23e502"],["/2021/07/08/课程资源分享/index.html","5646f5a2a1b92057122bd5b38eec4eb0"],["/2021/07/20/Scrapy-下载图片-文件/index.html","6b3cc45f7403dbb4e78c02cbe2d0b488"],["/2021/07/21/Scrapy-动态网页爬取/index.html","8588858ea0395a41a87d3755ce6ef8ae"],["/2021/07/21/疫情打卡/index.html","a2c2b7110b001a14a5838b353a026dee"],["/2021/07/29/Scrapy代理设置/index.html","7865f6dc0a830f184fa7cf4b812bf42f"],["/2021/07/29/数据库认识/index.html","dfa83978c9b1d5726ad3cc49ac30e042"],["/2021/07/31/Python多线程学习/index.html","b10cdddcf780ccc2936be447e7822e98"],["/2021/07/31/tkinter-requests练习/index.html","9ceeafecadeab2887db0ea43e9c34f41"],["/2021/08/10/Git学习/index.html","2ff0c510f26d95a099ef66033cf95797"],["/2021/08/15/pygame实践-1/index.html","77aa1ac7173c0fb9d33fe2dc2bb373f2"],["/2021/09/06/微信小程序开发/index.html","747a882b76ab036d7d203554cce06e00"],["/2021/09/21/命令集-1/index.html","e597aaabd4e7c3e99fd36f744cac768b"],["/2021/09/21/命令集-2/index.html","032163164b202878daa40c7c6a2061ec"],["/2021/09/21/命令集-3/index.html","39c1efac48df5db99a6248a7a8ec3739"],["/2021/09/21/命令集-4/index.html","b726a039138a17c35d2c86b9e043f63f"],["/2021/10/03/socket学习/index.html","279be5c4655b56cc6f9dd27bf752485b"],["/2021/10/10/dwm入门/index.html","afd46eb1252253c9b8a872594289cda2"],["/2021/10/10/安装ohmyzsh并配置/index.html","1c294982307b6e3d3168bb66010a9037"],["/2021/10/20/css学习/index.html","053218df765b6d256bbf27047c58279c"],["/2021/10/20/wm入坑/index.html","3f5078a6c39fb9f52987de28b1bd5f15"],["/2021/11/03/微信小程序学习/index.html","37255aebbd5abc516ec33355318a546e"],["/2021/11/04/css揭秘/index.html","f0f9cf259e508169798c5ee4820607e4"],["/2021/11/05/css-练习/index.html","551151f708a25485ade1600bf46990a9"],["/2021/11/21/命令集-5/index.html","558a52aaee16cb9b04f3676ee003232f"],["/2021/11/21/命令集-6/index.html","c9e62849655ab35916aafdfebbddc167"],["/2021/11/21/命令集-7/index.html","fa4f7207d08e364fa10d7c55ca3e876d"],["/2021/12/01/搭建wordpress/index.html","6da5befce24853c0786ec27a1e35003c"],["/2021/12/08/python操作百度网盘/index.html","12ba22e236aa57b7e094df7d7657e53f"],["/2021/12/14/js爬虫/index.html","77de746fc97c6720a620c291034116e5"],["/2021/12/25/为网站申请ssl证书/index.html","e77aef1adc1f0fdb20fdb1c852293fa4"],["/2021/12/29/使用七牛云为网站提供服务/index.html","40e48ffc01c878baf3c65fd22b402720"],["/2021/12/30/jQurey继续学习/index.html","86fc6d1adabaffee2023689041c2b1de"],["/2021/12/30/jquery学习/index.html","66af8dadd7eba370500670d4ba8c4577"],["/2021/12/31/vue学习/index.html","064d26217ce2138aa712b64f163aa081"],["/2022/01/02/疫情自动打卡/index.html","662bd8b14749ab0cd934e9579fdebcf8"],["/2022/01/03/javaweb初体验/index.html","017f6055a9c3cbe384a291ab2460d466"],["/2022/01/04/codewars练习/index.html","e6b036b1b4ba7499b6cf08367bfa0fb3"],["/2022/01/05/Spring学习/index.html","6afbf3eddb72390f4e982dc50e623198"],["/2022/01/05/vue实战/index.html","739c7f96effab3246d6691637f605e89"],["/2022/01/08/gdb-gcc学习/index.html","b9632f85c700d923e05f7ae4b0f4917e"],["/2022/01/11/python-opencv学习/index.html","265c9c8126206e7d1ee0fcded3c77dee"],["/2022/01/12/汇编实战/index.html","dfacb5ebc9d8c4c08479f94f544408db"],["/2022/01/17/pandas学习/index.html","5be92b07ed2eab42e1ef683be146398d"],["/2022/01/19/可视化图的工具/index.html","c29c74724183a9dbbd559e67020c43bb"],["/2022/01/19/机器学习入门/index.html","a26b79176d0b3328871ec10c207a0c3a"],["/2022/01/20/cousera-ML学习/index.html","5417d042637a82b0149b7e968dc7dc68"],["/2022/01/30/typora解绑后出现问题/index.html","4e31f2eaeea094700211ff95aa72d115"],["/2022/02/03/NLP学习/index.html","3b3bf6eca59e0e42b6dd99680179e424"],["/2022/02/04/Web漏洞学习/index.html","c974700e0e1ad1e6546cb80ebc55f930"],["/2022/02/04/pyqt学习/index.html","49f5d839d94220c7d757b592d36223b0"],["/2022/02/04/python爬虫/index.html","b6c2a184d7fe8ae549fa3e5ce66b87a7"],["/2022/02/18/Electron学习/index.html","37324494e60e182919ececd26b628414"],["/2022/02/22/疫情填报字段解析/index.html","3298ad7ea6fb0969a4002c0aff8fbb6b"],["/2022/02/24/Bomb-lab实验/index.html","aad64af4033ba21e0f1543c3f873b113"],["/2022/03/05/nginx学习/index.html","3bac6eef48d4a3a50cae96efede8a62e"],["/2022/03/09/汇编原理课程学习/index.html","2d68f0d31f1a34fb8371d18d2a93e85f"],["/2022/03/11/Keras学习/index.html","3ef4a9ac8fe227aa0ba88123263b3ea4"],["/2022/04/01/graphviz学习/index.html","e4edf315184ceb464e3f2173ab580b19"],["/2022/04/07/django学习/index.html","06472506de2662b417712d86f1e4236f"],["/2022/04/11/密码破解学习/index.html","94aca61362edc7f10c75345f3fb98a18"],["/2022/04/12/flex-bison学习/index.html","3dbc106e67d09beb73a5864204b81970"],["/2022/04/15/pytorch学习/index.html","26f3eead12c37fc33e0d1ac9f91f99fa"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","486eca460e245528292673dc98e8cd44"],["/2022/04/23/写一个音乐播放器/index.html","83e3d8a5c3c5f8bb9d5175de474eeb1d"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","8e4357bc99eff4589aa3f4f024a4a0f4"],["/2022/04/30/GAN学习/index.html","7d3f9ddd53b7536fd062467f4be6e99d"],["/2022/05/02/html精学/index.html","c3d65172414ff1a1a2efaf19a0290ee9"],["/2022/05/06/write-a-compiler-by-yourself/index.html","dba542e92044fb51b9680cef8e2c2547"],["/2022/05/30/acwj-01/index.html","c2b669b93c1f018bfa0dc2a44b2d5bb2"],["/2022/06/14/animeGAN/index.html","4ed1ba4cd4df27e88c3ca6d6e43cb142"],["/2022/07/09/c-与算法学习/index.html","9f2d0e61172add22e740931c8010c2a5"],["/2022/09/19/flask学习/index.html","c4154a0d727971839b20ecf5591a202f"],["/2022/09/22/cs224w学习/index.html","41f444bda38f240dbb972f11a4c9a515"],["/2022/09/28/记录一次wp重装/index.html","b4e51fdbaf30255cd34db4f4895fb3ae"],["/2022/10/01/Obsidian学习/index.html","01faf6cac65ac01a61b75e64591e765c"],["/2022/10/08/vue-element-template实战/index.html","4f462cc707f46c2d17a31f02bd3a2907"],["/2022/10/25/vue网上商城项目/index.html","c8c477f9b584c15f6771d410b5aeaa8b"],["/2022/11/11/leetcode刷题记录/index.html","1e02ad7c67b37483860f4add3cfacfa3"],["/2022/11/11/使用overleaf优雅地写文章/index.html","67b50a24690f94ef0234e191b30714de"],["/2022/11/22/磁力链接与RSS订阅/index.html","5443e9924acf2f530793dc131fd59bcc"],["/2022/12/11/uniapp申请获取地理位置/index.html","c430ab4722b7981d6fdd6ac346fd833f"],["/about/index.html","6fba10b3406837fc67dc78d99c40f6be"],["/archives/2021/04/index.html","e709551c8463938830e165b404adaeeb"],["/archives/2021/05/index.html","9b4d108e626794d77815d805d04e9b62"],["/archives/2021/06/index.html","0f6999ca4d5c5c88408e0fd1ccf1c026"],["/archives/2021/07/index.html","7a6baa6d1d2bd2659e70a7950edbb222"],["/archives/2021/08/index.html","2ebef9d7c7c5f9603284b8a96cd6792c"],["/archives/2021/09/index.html","a110d2b73695bff35e2fbb998707de81"],["/archives/2021/10/index.html","59006c169958c75f5be40805ae36d40d"],["/archives/2021/11/index.html","8e2c3b09c0e5b7c99dd96c860a2556fa"],["/archives/2021/12/index.html","eeaf48957956c399035a6f7c5d5878bb"],["/archives/2021/index.html","a48db2ced6d766ecea7007f128ee7723"],["/archives/2022/01/index.html","f2c6afd1357d1d09550ef774e2c06698"],["/archives/2022/02/index.html","35ffd57409b0136f5cb7143c046822cc"],["/archives/2022/03/index.html","080581986ec5ea5386f268ce32e74bf3"],["/archives/2022/04/index.html","f067a504858d1b6489693dd645e98d73"],["/archives/2022/05/index.html","eeec41d315df085181684925dbb6328b"],["/archives/2022/06/index.html","e3ecfe6d2e8b8371cd4eb9c1e53d6b02"],["/archives/2022/07/index.html","c7fa26de062ba9a31a86722c55c606f1"],["/archives/2022/09/index.html","05e4a14749c4f70b3e71c84db41b8c73"],["/archives/2022/10/index.html","3395c471b5c32011cb22dd09637a1a38"],["/archives/2022/11/index.html","3ec9acfaf58ec8ddd36d47f3b7fcc094"],["/archives/2022/12/index.html","66938b615a36b6984cb081149eade58b"],["/archives/2022/index.html","d5684432cef1244c93a54bfe71423588"],["/archives/index.html","ac8ebd5fffc46453885accfd3fb9e977"],["/archives/page/2/index.html","b84c959faec6d97f78711ba3fe2c69db"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","15a7855feb46e0f5956cf6f6cee06f90"],["/categories/ML/index.html","d647ad2b079f1c676007c27d61b17237"],["/categories/Nginx/index.html","35075c79ab38080558a2afc15946f938"],["/categories/Spring/index.html","c28beae38dd7c654767716f444d7c59d"],["/categories/course/index.html","a32e203d78e00ddbf6781f84c7f39410"],["/categories/django/index.html","b909f55ca2c9edfda33a616af9a8a9b1"],["/categories/fun/index.html","bf906104578f48cc76447d95d8c7fb81"],["/categories/gcc/gdb/index.html","0ff24c12346edf08c98b65a47cd3acac"],["/categories/gcc/index.html","885217b3fac5485a7083cbb1b9e8f136"],["/categories/index.html","456f2134356417765b0a3b8636294b10"],["/categories/java/index.html","b66fea01c465cead108c5ddd35a60e86"],["/categories/python/index.html","b736f67f7bc7bdf373479a45ff389033"],["/categories/study/index.html","24ef1627304f517ec2b017f8d05504c8"],["/categories/vue/index.html","4104316ec233a7a463159445a4bce6be"],["/categories/误区/index.html","de6c5cc28ea2bb116e64b4983a0b6270"],["/commonweal/index.html","72aec8154d99289e60e46eeed3b1d93d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c40ec173cbed2d4c41d2deb3afef82c2"],["/home/index.html","48765a6bc4db111f33c8bac7de36927d"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","0744373a7d206acf4e722c2c835a9b03"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","1cb5bf6e39cff95bdc3c89064882d8c2"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","2d9aff007f076fb907e19f388df56c27"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","57e6986be7278eb4796dab83ca2f33e1"],["/page/11/index.html","d5b0f8951b44c87d1db473f5ce869c52"],["/page/12/index.html","516eb805c993adaddfdc2eecdbfcc735"],["/page/13/index.html","25f6c09131e1845ce3d35e201ffeb6ce"],["/page/14/index.html","d3d6d9eaceca4ac2bfd9a368183ee3d0"],["/page/15/index.html","c8b1c51ada44b20645321d32870f1f42"],["/page/16/index.html","4a5ce0db9558af7d405dd893c1b72512"],["/page/17/index.html","893b471716a67650075ad916443001ee"],["/page/18/index.html","8e1e2aab2f26ef4e36858c6e3e9fb8dc"],["/page/2/index.html","0a0d9439ebf5be82eafffed7f338b45e"],["/page/3/index.html","873d841f3270e55e9d7b7b82ce9f6b58"],["/page/4/index.html","4df4f8f4fd3e0b33a482167d2e688437"],["/page/5/index.html","bbb8437bd3079cb9f50d48635de88875"],["/page/6/index.html","724b6aa7315c7e3b5babc8decc9de877"],["/page/7/index.html","f8d8d30d4ad99d904104026b46c64b26"],["/page/8/index.html","2ef375b753521c04cbfe2671a952cd63"],["/page/9/index.html","7d6d8d464227e354807b00aa8d4aab69"],["/schedule/index.html","febfdeafe65475b2c4368987ecd1dd1d"],["/sitemap/index.html","f3e4670f88214f8514cf39ed80f8f047"],["/sw-register.js","19311eba3440790fe311a511cd7d1ca3"],["/tags/AI/index.html","19c71bbd90d1f0158be3dd60705bba73"],["/tags/BT/index.html","e3566b5d25e862f9f64208cf7d8075f7"],["/tags/BaiduNetdisk/index.html","aed13fc64bd05dcb97ad514fcc62e737"],["/tags/CSS3/index.html","7282d71935e9d75f401799e12d23e6d3"],["/tags/Electron/index.html","021711f1ed30fbbfb676ef3c9daa3b3a"],["/tags/ElementUI/index.html","41363957457f194f22bebc32b00a54f5"],["/tags/GAN/index.html","f98af7bf5481635a940b4238b536fe8b"],["/tags/GUI/index.html","2b8f55bff19eee28bee2b9e20ae30034"],["/tags/Git/index.html","6417a0a34339ed1c4486457e4c6c472a"],["/tags/JavaScript/index.html","c80649eaa5cbe714b0c3c4869ce94483"],["/tags/Keras/index.html","6dd90ab94ac75abe4d0a1d6a96262d23"],["/tags/Linux/index.html","ba962acb39da2f46988c1383f32f78c1"],["/tags/ML/index.html","55d6ad715c64c03dc4b025a8ef57596c"],["/tags/NLP学习/index.html","d0d96b28833a5c525ed7ef039c624531"],["/tags/Nginx/index.html","e94cb5b49cec923f50bd3de19425e267"],["/tags/Obsidian/index.html","7318cfd3cc7eccf7aafe6ebc3b183fa7"],["/tags/Qt/index.html","fc478eee0362b5cbab16c0092a0a5fc6"],["/tags/RSS/index.html","ddb0da40b45973bb21798e6f2dbc4179"],["/tags/SSL/index.html","6af2211ce3d37aedbc522dbd11e40038"],["/tags/Scrapy/index.html","3019f0c5f5ac31e8b1f7270a71aa19fd"],["/tags/Web/index.html","b7d6d1f511b75ea2b3668193a0269088"],["/tags/algorithm/index.html","2510a6910c506108350a82d4648d681c"],["/tags/bison/index.html","45b17c8300d8e9973f643b1dfa9cf84a"],["/tags/bomb-lab/index.html","4cc2c752d8b4304c44f0b4d56d249a6a"],["/tags/c/index.html","b5c69b719dccb4c4c2552d3424daea1f"],["/tags/cheerio/index.html","06465b3faf97c1d54f2fab856e492dd9"],["/tags/codewars/index.html","311de7d3a73da0b2d72ccff05d3ff515"],["/tags/compile/index.html","a58299813a2cb4a9302a3c6e31b1a1ee"],["/tags/compiler/index.html","c5cf4034a026dc2f7e2cdedd5fcea1fe"],["/tags/course/index.html","cbc2c9f33b3e68e6d57004043254bde4"],["/tags/crypto/index.html","0bbb9c55c0bc7c7b3e4ffbc0180652c8"],["/tags/csapp/index.html","690cc1c00525dce67286197e497560cd"],["/tags/css/index.html","2a885a157755904f120b8f2a5af6814d"],["/tags/data-structure/index.html","d07c44330e2dfab8f6a0903eca55f660"],["/tags/database/index.html","9724833dd6fc1aa2d1b25c74ef9b76b7"],["/tags/deep-learning/index.html","5dfb7891d258b0c14e3796b87f497a12"],["/tags/django/index.html","33e30d374caabfa4d19ea468dd62c716"],["/tags/dwm/index.html","fbe759f3d6e02984677b51387a962d75"],["/tags/exercise/index.html","17edd82f6e138d672e956aa33b5f8a27"],["/tags/flask/index.html","d401070674b7a4080d2d5ef9abb5c80a"],["/tags/flex/index.html","73eb8fa38cbe1ab499ceff1aafd5b572"],["/tags/front/index.html","b5a7464ebb0c52c48e7fa4eb8255ed9b"],["/tags/gcc/index.html","f18bef75819897983a54cd19b4a85d84"],["/tags/gdb/index.html","047b0bffe5b2d149c300cc736cab8417"],["/tags/graphviz/index.html","96a5b5c272eccd1c5917787784ba230d"],["/tags/html/index.html","ef0ac1c81f83c54acd13eb17589e629f"],["/tags/i3wm/index.html","2357de270c9240ff432ea58ecee1f5d7"],["/tags/index.html","9df3d921d3312416041a7336ebf685bd"],["/tags/issue/index.html","b86c61e52777db37923c9dfec90e1ed0"],["/tags/jQuery/index.html","bae9c8c65075942c3a2c255213bedb58"],["/tags/java/index.html","3426001e3b9040103ba1d8390728ec93"],["/tags/js/index.html","b0e0148cb1b86456145a0b8555bcb994"],["/tags/latex/index.html","bd0abe41bd9f88636af758d170bec9ba"],["/tags/leetcode/index.html","a2510b76cad3ed8645fed91c5cad04c0"],["/tags/lex/index.html","51e1f60fc99c10f85b84ac8fddf52cc5"],["/tags/material/index.html","e2f47fa684d18ec70bf0b9b02842b3df"],["/tags/music-player/index.html","28b2bf20e45c3a926f7f8bf0db032a86"],["/tags/nodejs/index.html","8684290f6637f3f47a3a0a58ca75bf99"],["/tags/noj/index.html","5a7bb45d4abc164855452174d0f7f837"],["/tags/opencv/index.html","4e666fd4c52f97c303c1940f9cb1c094"],["/tags/overleaf/index.html","88cff6129bbe9356125f7934351e3cf3"],["/tags/pandas/index.html","baf678c159dee171e65a74582d5bced7"],["/tags/proxy/index.html","3706a26817c85a1e2e9701b8f06ba235"],["/tags/pygame/index.html","193aba0390eaaaa9f36fcec9b7ecd2d5"],["/tags/python/index.html","d1de8cd205cb5f37a0e074e1f231e4e7"],["/tags/pytorch/index.html","c459a3848d34f7ef509f71518b7091de"],["/tags/reading/index.html","266594c1ff7bbc6788933b035f59df78"],["/tags/requests/index.html","2f484d537696185d537fa047b25a4520"],["/tags/security/index.html","668e74c9994a188eccca1981d2e82fae"],["/tags/shell/index.html","d8fdee3b4a96d217fc8b448323178423"],["/tags/sign-in/index.html","93242f22820152b3e6d4691006713187"],["/tags/socket/index.html","bc0fa7cf84d3b435003c1017ccef4a79"],["/tags/spider/index.html","38951efb1bef69bd1a949281c8647bef"],["/tags/splash/index.html","f557533ac523aafe50127101c9cb5912"],["/tags/superagent/index.html","e6996a266b7b3851ae34eb3f151004bb"],["/tags/tensorlow/index.html","b62dd5168165426d3acaff465273292a"],["/tags/tex/index.html","b342e6ec635dd8d356801fc129ad048d"],["/tags/threading/index.html","6190fa2409345a13ca886b0e4328cad4"],["/tags/tkinter/index.html","cb714f77d5a07cc4aa4ad6345c09cc06"],["/tags/torrent/index.html","a89dc015bbaf0acd48a4fb11fc55ddb2"],["/tags/tutorial/index.html","62da40b665328ac7d77f4bc3825d9676"],["/tags/typora/index.html","9e748eda2674b1366108c8026e77aa8d"],["/tags/uniapp/index.html","4e1f05c3aa8e1ca9b88ce89fc11d5d97"],["/tags/vue-element-template/index.html","1c299e6fad03201fb9b155cf94f70762"],["/tags/vue/index.html","71b5c92ebf70d5a338f0030a3ae24c59"],["/tags/vue2/index.html","dad295a516139f3a58fb10e1c076fbaf"],["/tags/vue3-x/index.html","32d388a4c64f5e3aba45c904524d0275"],["/tags/wechat/index.html","4446688fadd8dd0152bd50fb1962d4d3"],["/tags/wm/index.html","632f672a25f33aa76a35906d3becfbcb"],["/tags/wordpress/index.html","288a4c5bb9de7b6f323b3a18b8a96814"],["/tags/workflow/index.html","5679724669e8848de256f8e4f927262d"],["/tags/yacc/index.html","c5fd816d40ca981829d9100a3e80d4ac"],["/tags/zsh/index.html","b23b0027fe68f80452d79a4039a74c32"],["/tags/七牛云/index.html","5a1053c3ce4057193301d1b0c4c2b0c7"],["/tags/函数/index.html","8c7d345ddc89e9d62339176cdc4a99d2"],["/tags/存储/index.html","e6ac674646b62fd5c2f5efbe1533774e"],["/tags/实战/index.html","2419414daf41cfa5d836c9ccb4fd7202"],["/tags/建站/index.html","8bfedfaf5eab3eb854ac7853197b1f5d"],["/tags/微信小程序/index.html","8705f28dacb3fe0171b8751d2277a099"],["/tags/指针/index.html","847173c20df5a18bbd8ff82830adc844"],["/tags/汇编/index.html","c95b7bad6bf1a40ef02f49ab9d01af64"],["/tags/爬虫/index.html","8a12bb655f4c54767da796c9ae846eb6"],["/tags/算法/index.html","c3331b4696b326c6df8a8d1d45df002a"],["/tags/编译原理/index.html","cf7e8086c09082d7435d3d2f1043fd50"],["/tags/获取地理位置/index.html","07961a9c9e999a63c90c14e5e6581be0"]];
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
