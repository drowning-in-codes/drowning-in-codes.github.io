/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a47137ea58ed007ee630c8516629bfc8"],["/2021/04/20/稀疏矩阵/index.html","63c34be479377f199734aa7e8e23c576"],["/2021/04/23/广义表简介/index.html","0d037d20e7dc631cb0d471b2e46d78ca"],["/2021/04/29/关于指针和函数/index.html","84ec799eed55d5ff7a9147feb4bff690"],["/2021/05/10/哈夫曼编-译码/index.html","685d575623b14494f773c981dc01046e"],["/2021/05/17/数据结构noj_2/index.html","4af65857e2b72038ecc39e308b799356"],["/2021/05/30/数据结构试验/index.html","7cf73774c3afd2d093e2fd688bbfbea8"],["/2021/06/12/数据结构noj-3/index.html","83b56ddb93f260d09b8800e818c0483a"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","57f518c011ddf8fb4d0290cc25db5c12"],["/2021/07/08/课程资源分享/index.html","a6c27a63a730799a9118dea6c2fd6914"],["/2021/07/20/Scrapy-下载图片-文件/index.html","5ac0ad1ce43ad45f114dc6b91bdd83b6"],["/2021/07/21/Scrapy-动态网页爬取/index.html","b7098bd8a89a55851825ade51006c2eb"],["/2021/07/21/疫情打卡/index.html","049b7ea742f91f1e1be8c5f22608d171"],["/2021/07/29/Scrapy代理设置/index.html","5d61d62b6aa21f6bab9f723f77f02336"],["/2021/07/29/数据库认识/index.html","5207923f4a5ad0513e0a1e196706f59c"],["/2021/07/31/Python多线程学习/index.html","68419476fe95d193547306f75ec8ad31"],["/2021/07/31/tkinter-requests练习/index.html","ef52d0ba2ee5f4f0614f42c9ffea9144"],["/2021/08/10/Git学习/index.html","18ae3841b04bc603b51106ccdbad50d5"],["/2021/08/15/pygame实践-1/index.html","269262d1bc620097d9b963ce5d69b9c4"],["/2021/09/06/微信小程序开发/index.html","c216666c174c5c8e062716ac6a10339a"],["/2021/09/21/命令集-1/index.html","015b9b41f11e61d9558e982682eeb30c"],["/2021/09/21/命令集-2/index.html","3437685f372a6def884b2c58150f6047"],["/2021/09/21/命令集-3/index.html","e395bccb286a16a809500f91407d9ec5"],["/2021/09/21/命令集-4/index.html","df627f5cc78b063f830deeb82c77fd86"],["/2021/10/03/socket学习/index.html","86576fd81d14d1286c18ec73d93b9128"],["/2021/10/10/dwm入门/index.html","787510ca27613ec7b8e28c7f05305a6e"],["/2021/10/10/安装ohmyzsh并配置/index.html","97ed267d8031384c8ed1bc12d537845a"],["/2021/10/20/css学习/index.html","668816c8630a866128b83b9c86cdff3a"],["/2021/10/20/wm入坑/index.html","4de9f4fe1001e5090446c51ed34caf01"],["/2021/11/03/微信小程序学习/index.html","a0c56eccbe78a8bc6cc558a839d2fa64"],["/2021/11/04/css揭秘/index.html","1f4712e43c0b7c64d8253e2acd008017"],["/2021/11/05/css-练习/index.html","bff76d411accbfcbfd99f1488e490a1c"],["/2021/11/21/命令集-5/index.html","90ffaa84590e4e8a86620c231f08cb7f"],["/2021/11/21/命令集-6/index.html","058b3490230bd2ca6633cd81eb5ee3f2"],["/2021/11/21/命令集-7/index.html","723b727cf743591e223a1cd376f33016"],["/2021/12/01/搭建wordpress/index.html","8612acfcff25ec5d74642ec9e1129830"],["/2021/12/08/python操作百度网盘/index.html","83ae9666f00cf94fce713daa1c0559ed"],["/2021/12/14/js爬虫/index.html","37678b58bb28a97f0d13056817ac284b"],["/2021/12/25/为网站申请ssl证书/index.html","502b5963b58928629a8d2c4239e7af67"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2b9dec4470c1f4bf2152de1a79b4770d"],["/2021/12/30/jQurey继续学习/index.html","fa732547a0b33f2bef49e4a4f83a8c54"],["/2021/12/30/jquery学习/index.html","bee34400508a24b0902d5a292ee88a08"],["/2021/12/31/vue学习/index.html","a0e811967c95fa981bb522f2c40af018"],["/2022/01/02/疫情自动打卡/index.html","910c92a4ae88b4d2bf631069f40b8903"],["/2022/01/03/javaweb初体验/index.html","5e12c9e31ace724a40ade8df34ecac48"],["/2022/01/04/codewars练习/index.html","b72dcd81be901ce3e8f389f3b3fc3d8d"],["/2022/01/05/Spring学习/index.html","475589281f35e45ce802fd1bfe076072"],["/2022/01/05/vue实战/index.html","a39c5ae69cd9e92fa9e79d2cea492838"],["/2022/01/08/gdb-gcc学习/index.html","f2d2e6f297b265d5df08a9f5296d3a99"],["/2022/01/11/python-opencv学习/index.html","bcd592cacb8d5d77b17a28f7eed20f80"],["/2022/01/12/汇编实战/index.html","d28a63cd20d0fdc8884b02982e7a8116"],["/2022/01/17/pandas学习/index.html","6ff2f44099f19ccfe4bd2bfeae372bb9"],["/2022/01/19/可视化图的工具/index.html","c2f0779bf096b77645945dd6176678fa"],["/2022/01/19/机器学习入门/index.html","e77fd47bfe72829b8abceecf644edc22"],["/2022/01/20/cousera-ML学习/index.html","e10e97f779a4c21b95a61729191f2216"],["/2022/01/30/typora解绑后出现问题/index.html","eabff079877bd15dc27bba8eaf22d805"],["/2022/02/03/NLP学习/index.html","92670d7b28561b4113536361ad518187"],["/2022/02/04/Web漏洞学习/index.html","d06d480e46c4f39c0d0a73b7204b66b5"],["/2022/02/04/pyqt学习/index.html","f8af72be9c6d1943b08d2f4eba1c70a3"],["/2022/02/04/python爬虫/index.html","db95907040a62e59d8e403c2b10b154e"],["/2022/02/18/Electron学习/index.html","c6f5748cf9ac7d3816cfddf5d116f602"],["/2022/02/22/疫情填报字段解析/index.html","db2d5a1f6cddd43e5e6b5a4949700651"],["/2022/02/24/Bomb-lab实验/index.html","dd3191a15a39b073532735f8af333236"],["/2022/03/05/nginx学习/index.html","2a5addb441514da9b0536d359dcdab32"],["/2022/03/09/汇编原理课程学习/index.html","1159d365c254bb5c60edb5f1886d6b02"],["/2022/03/11/Keras学习/index.html","e46b56a8116c490d64f6f9fe55987b80"],["/2022/04/01/graphviz学习/index.html","eb5a42a1efa3cd9f77ee9d7836257f7a"],["/2022/04/07/django学习/index.html","491c3b686d5f5e3cb2318e96302204f5"],["/2022/04/11/密码破解学习/index.html","2c4f8754be48549baa6ce6a01cee1472"],["/2022/04/12/flex-bison学习/index.html","2562fda51c7a230824de195389dbcb20"],["/2022/04/15/pytorch学习/index.html","0c9656a8905063fafd8bce967c62e77c"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","2a07b572d9417cb800907ff26cb2584c"],["/2022/04/23/写一个音乐播放器/index.html","4e3df92aac0c396e5171814dc13991ea"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","5c09b28f9c8e91a369faaa41ad30f730"],["/2022/04/30/GAN学习/index.html","6fa63782ca0e5b6480d2053d080b523f"],["/2022/05/02/html精学/index.html","7c1fb1bdc2e06dbf64ad72702781e12d"],["/2022/05/06/write-a-compiler-by-yourself/index.html","baff2e3a291fa5005c3c28c4d877bc15"],["/2022/05/30/acwj-01/index.html","92127f57bfe74e38bc3f1d15a86051cf"],["/2022/06/14/animeGAN/index.html","470e7b3d27f76a7b1037446c0e043cb9"],["/2022/07/09/c-与算法学习/index.html","9f7317bbf7ade0b7007addb63bcb6fa7"],["/2022/09/19/flask学习/index.html","7aed3d884a92857b8a7498c544b88bf1"],["/2022/09/22/cs224w学习/index.html","05eea7ec258fb65afbe2cb076e114734"],["/2022/09/28/记录一次wp重装/index.html","e51f59d06c8431504cafb40033f87d4c"],["/2022/10/01/Obsidian学习/index.html","83231abf2dd01b1b00b533f65bd60fd5"],["/2022/10/08/vue-element-template实战/index.html","4047da846f54014a4d0e12e173a90e93"],["/2022/10/25/vue网上商城项目/index.html","d4300e7099958bdd1ed593da4e5b5940"],["/2022/11/11/leetcode刷题记录/index.html","5030b2bb537b566d3814c838b8fa0c8d"],["/2022/11/11/使用overleaf优雅地写文章/index.html","7f2eaf34f7cd4b7fa1ea1ad05f42e5cb"],["/2022/11/22/磁力链接与RSS订阅/index.html","bd8484440304c28bcf13765a735c46c4"],["/2022/12/11/uniapp申请获取地理位置/index.html","f1cacc84a28859e85d7cd73a0d9a6d51"],["/2022/12/26/pr剪辑学习/index.html","f29b335187a2eb5088c74f62d7baa4e7"],["/2022/12/27/css中的flex和grid布局/index.html","ad190fd4a99c175c430a9519ddc472fd"],["/2022/12/28/Flutter学习/index.html","bc385d4fd45530af15624d48dcac5976"],["/2023/01/01/美化github首页/index.html","18fc96815f0c25bb24bfa35291ca1d4e"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","7cab5abb47b150feea66024f475a3579"],["/2023/01/04/构建微信快捷发布文章工具/index.html","b86b41210cba8fdd58a81eaeb1d580ed"],["/2023/01/14/dart学习/index.html","f4a73692cf5cd9a76bfc8905d03632fd"],["/about/index.html","56f3175f62d6cf8d1dbffedcf4691722"],["/archives/2021/04/index.html","086a01fa68732ff9dc40d1b870f04e07"],["/archives/2021/05/index.html","404ecdf2a1b646e31d0b644524c6f8c6"],["/archives/2021/06/index.html","b163d7f85223a697cc23d3ec695297a3"],["/archives/2021/07/index.html","b5add05744adbdf177636e72eeab1e85"],["/archives/2021/08/index.html","bd4329d60e0fce6d228d202e80d6746f"],["/archives/2021/09/index.html","7314de09aceb02fc03738ae822446a43"],["/archives/2021/10/index.html","8726f517af4f3c202dcec1e7b3b1676b"],["/archives/2021/11/index.html","8eb297cfd38bdb01d63806424d4525e6"],["/archives/2021/12/index.html","0ebf499997e1df7ccc32d64513e06b8d"],["/archives/2021/index.html","addf252863b4688fef2a8acd784d9bbd"],["/archives/2022/01/index.html","f49926a2f06bc552258d9382423c5f22"],["/archives/2022/02/index.html","32eb45604e9abc500f75d49c1cffb70b"],["/archives/2022/03/index.html","a815cb377389dfd9fa154e02665a3f2a"],["/archives/2022/04/index.html","ed6d617c022a09ec41eb147ee5eac7d8"],["/archives/2022/05/index.html","bfd9acabf4dd5f04241de604f46a2af9"],["/archives/2022/06/index.html","b279b20c81a2034e90da5ef7a7304dcc"],["/archives/2022/07/index.html","0aaa81713bd6f54f4cbcc749e3ec3ded"],["/archives/2022/09/index.html","8a4cded3fd28930ce9cacb42c8a67c78"],["/archives/2022/10/index.html","d854985ece93b1bf05659124dd943a72"],["/archives/2022/11/index.html","67e7feacdd9085002830c9802946a320"],["/archives/2022/12/index.html","1036076fc5fc0ecc1c3852aa85ab2dd8"],["/archives/2022/index.html","5ac88312e265706ee4e3dc46629229c5"],["/archives/2023/01/index.html","1cab1d5353527b8dc0f515662f064ec4"],["/archives/2023/index.html","7182822a09e1965169cafc7e1c0ca93e"],["/archives/index.html","cb91830c31bd66408f69a1db126ed0ce"],["/archives/page/2/index.html","d5336d01622b292370e70b6e8f6dd78d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-dkgEisqaa8.html","604716154fbb9edd628fcfb0c41c13a3"],["/categories/Linux-study/index.html","91a682a72ce503c6058aae7efb5ff8fe"],["/categories/ML/index.html","a2831b80334d74aa965b8eb579723ea4"],["/categories/Nginx/index.html","8fee869753b437b8bc399dd41a85096c"],["/categories/Spring/index.html","4aa604c54f2a300edc36de4e0e50539a"],["/categories/course/index.html","4f4e5e79d765d5e00c2e236029dfd736"],["/categories/django/index.html","e9702be24c37b6750d533cf1a05500cc"],["/categories/fun/index.html","1bfa41f152f8ff94050268c68af263d4"],["/categories/gcc/gdb/index.html","46535a4f75c7bed061eee87213cb71ae"],["/categories/gcc/index.html","377ecb009942efbfb2a317eee3ebb3ac"],["/categories/index.html","ffc78767fe66646c6e72498bded6045c"],["/categories/java/index.html","c8fbc43067c665831740a4e5a0b26ed4"],["/categories/python/index.html","b0981622dbf0da264605347dbd0881dd"],["/categories/study/index.html","cd9cc257fdb1b0fca08d5ea2760d9071"],["/categories/vue/index.html","34d5b0a1c02b774c6aa98d4ae7010390"],["/categories/误区/index.html","ed9b90b3e128e200a41057c6106ed706"],["/commonweal/index.html","79d0af8ce3027247515d84ad356e6423"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","4b6658e54689f99a2be9ede722b2ef6e"],["/home/index.html","f2a0e177178ee829437e5a798de6706d"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","7d2208fba252d2aacd9ff4fc6b8a1a6a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","13e18012b154c95b11500ce5437c4cc2"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f38cbc6d448495909cd0f10363e65c57"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","734cfa596324c0f26862e2841bfbf8df"],["/page/11/index.html","31b500d6626b66fa229fa688194bde79"],["/page/12/index.html","1056437a7bbed063a7d894edc3116582"],["/page/13/index.html","5ee3cde03de69ff9bbc5f90c54a512ff"],["/page/14/index.html","4eb939c5cfd9fdf83fcdfe8d60ce2ff6"],["/page/15/index.html","7ab05151b680fdd8767e038574b28d86"],["/page/16/index.html","a33fc74447a28303747776944f51714c"],["/page/17/index.html","997bca65149ad2c88fc1b28b6e8842f6"],["/page/18/index.html","a2aafb34d838c0f1f25f2b11fb31fa94"],["/page/19/index.html","c30ea10550dadd8a474cf15780a56dbe"],["/page/2/index.html","3d37e8f53cbbfe72010f4092aa48bbea"],["/page/20/index.html","a04bb86cf352c37cd3a6dbbfce096c1d"],["/page/3/index.html","8c1d1d6f011cd81974b3b13bbbaa5d02"],["/page/4/index.html","ffa8b9095c07f4420e2a8be21f3953de"],["/page/5/index.html","0b864d70346c02b9d0180f12f19da820"],["/page/6/index.html","f8c22c76f764d1b8f5f41471f8663122"],["/page/7/index.html","09c04d619ddfa17e01d955decd6fcd82"],["/page/8/index.html","7b85c68789233aa56bf32644a55df245"],["/page/9/index.html","c18712246128a0c08252ef08e992ea31"],["/resume/index.html","8fe6959c911a09dd0d8a4202deaba488"],["/schedule/index.html","e990d3416537bce02f3e55e98cffed24"],["/sitemap/index.html","e491e17c6d96fabd13f08d7aaba79969"],["/sw-register.js","e3c6477b00dc0bc2086bf95cfc79be20"],["/tags/AI/index.html","0101afd7ef80735805821450fa7b7d6f"],["/tags/BT/index.html","92d08b208091ac95fbe5de058000f4ee"],["/tags/BaiduNetdisk/index.html","21cf201308e3be33d8c23e1fce09248e"],["/tags/Bootstrap5/index.html","a2f2d2825d773722fa72e639400e8476"],["/tags/CSS3/index.html","8e287c2b621e9a14a2dd3e4c6482e882"],["/tags/Electron/index.html","c188e1748cead565179d15f6e6b35676"],["/tags/ElementUI/index.html","1c2367d4ebb76e760b8faed6fa7a4716"],["/tags/Flutter/index.html","eef2fea6b792b20c60c7cf074e03abc4"],["/tags/GAN/index.html","9a398cf13eff36d27258500ef741fe6e"],["/tags/GUI/index.html","3592f3aecd27ffa882e5caa7cb817c72"],["/tags/Git/index.html","c7294f1aa82551b832e9930f450175bf"],["/tags/JavaScript/index.html","29afc90f0dbb1ad32f179b632199e11d"],["/tags/Keras/index.html","7839cacde7c3bf5ba8a8d4d3c161d345"],["/tags/Linux/index.html","e5116377452f9e7c00bf09161059b17e"],["/tags/ML/index.html","73895e4ecc6dd32adfdcef85b7312e0b"],["/tags/NLP学习/index.html","6de83c3fe59338660febcb278490a751"],["/tags/Nginx/index.html","fed512ae3c85bb83383020abe13dfe07"],["/tags/Obsidian/index.html","9e2d972cc3470474f8dedcf1ddf9a62f"],["/tags/Qt/index.html","590649eb1b6e48532c17bd2ad88b0b62"],["/tags/RSS/index.html","5c4f25c7cd0a3088c41fea0833984bc3"],["/tags/SSL/index.html","67b7930f352ccefff536a2b6600aa54a"],["/tags/Scrapy/index.html","398cd2f0e30ac82b794996f169420265"],["/tags/Web/index.html","500a30911b2f11af321a70e4e901ae44"],["/tags/algorithm/index.html","ad0edfe663be423687370e381af7514a"],["/tags/bison/index.html","2c117b543c539b28a03bab4a91c3a2cc"],["/tags/bomb-lab/index.html","c07c22f5a9ab28336bbec5db885fc309"],["/tags/c/index.html","b58651438b4ed4a3d4640d6fcaf533bc"],["/tags/cheerio/index.html","2834f74d4103f796641e3f22ab1a76c6"],["/tags/codewars/index.html","5349a0c37c50e1f988f6396daf337b12"],["/tags/compile/index.html","84049eec99f3827bc3f09853cb74a05a"],["/tags/compiler/index.html","659b62524042ed623668628a6256f6cb"],["/tags/course/index.html","c49c64b74c06e9c41e85b71984f3fca0"],["/tags/crypto/index.html","f7e3d9818b5d0b0d1725b5ff4730c82e"],["/tags/csapp/index.html","37ea634e392deddb6786e4154bb1492d"],["/tags/css/index.html","8dffc26f9e6f50c20673f29865b89ccc"],["/tags/dart/index.html","6a86346861912c4e41db73042d7aeea1"],["/tags/data-structure/index.html","5bf55f7838ebbfc20cc3f5d0749ee568"],["/tags/database/index.html","1d48f97d3601512c47c07801e310826e"],["/tags/deep-learning/index.html","9ab0cbf0ca58b3eb23b57b266fdf80ea"],["/tags/django/index.html","cff12eaf850b6897091a2668f2fb43df"],["/tags/dwm/index.html","9eaf5e48531b2440910bc5e9e4d4be7a"],["/tags/exercise/index.html","758a17a7cb4ada3ed75b3d15bdde6e3c"],["/tags/flask/index.html","9b213f9dc212f2fd37fbe2f6cadb18f8"],["/tags/flex/index.html","c32405b5935d1b18ff9483d6e9f07e46"],["/tags/front/index.html","4a836f26cbdba49c19f81d8d9947f9a4"],["/tags/gcc/index.html","104bb2a058b619b62f33d2f820de04f4"],["/tags/gdb/index.html","4fd99e17c8bef607071e92512434b0dd"],["/tags/github-profile/index.html","b1c0b01a5fda1fccce210bfad4ba90cc"],["/tags/github/index.html","08a9f4afc2b484459524045991affd52"],["/tags/graphviz/index.html","ada332a6138aa9074d4d3b9200e0c1f9"],["/tags/grid/index.html","c8156c3bf15f1fbed44b8b0b062948a2"],["/tags/html/index.html","75c01e4ae93a306dceff0307888e6036"],["/tags/i3wm/index.html","9cd3a6829af71b10d11a50a697a4d960"],["/tags/index.html","6bb0d2b723f81a0f4913b0dc44644d22"],["/tags/issue/index.html","2ab390f0e1776c67ee80b8db0d402386"],["/tags/jQuery/index.html","9571947a5fa951693037803f04d426be"],["/tags/java/index.html","9383d9756ed1c19df64d07a04985889e"],["/tags/js/index.html","04a71d44b371d8f0b80b872113e74c09"],["/tags/latex/index.html","c4b7df5945ed6543802d52e617d17e7f"],["/tags/leetcode/index.html","6580866f60c8062a6c1a93bb9e24df21"],["/tags/lex/index.html","a0d19b7cda45bf5c1bead1ae0396044e"],["/tags/material/index.html","cdc500e4573aec51f8f558c9ede0a821"],["/tags/music-player/index.html","d429a103c066337390f33816fe3a3aa1"],["/tags/nodejs/index.html","096696e3ba29308094bfc7fb8da38bf6"],["/tags/noj/index.html","12ed337fa351817065200a0ffc35d3f3"],["/tags/opencv/index.html","9fc61b3b0116aff1690a142e36412755"],["/tags/overleaf/index.html","00ef4cf9bd854b3993cfc403f3c4999b"],["/tags/pandas/index.html","367b73480e27723be9d42bc845595d79"],["/tags/premiere-pro/index.html","3bc0d52f8001e66f761ff6ade2a56043"],["/tags/proxy/index.html","47d7c6cac288abe02b4cf71ef614b4df"],["/tags/pygame/index.html","b4e9b593a6733b11be17e91402c75268"],["/tags/python/index.html","f3102735e4a015ecaf7593b575cca45c"],["/tags/pytorch/index.html","62818bd733d51d6156f24c1da65a9707"],["/tags/reading/index.html","1c84c9d74a0359533a203b95554985c6"],["/tags/request/index.html","8f33aa7a540bc672487e297a7d9f22c4"],["/tags/requests/index.html","c66e890b90e7615ce6bafce6eeda0884"],["/tags/security/index.html","3ccfe36d0beed8360f0164927950c4b8"],["/tags/shell/index.html","2b2e8a28cf8a77b41c3505ff86db8390"],["/tags/sign-in/index.html","1e59dbcfb149d17f203d7476c9fb6abb"],["/tags/socket/index.html","3be6950369b191e69573d4b10d61107d"],["/tags/spider/index.html","b218db38ec716acc490e0c2842edc113"],["/tags/splash/index.html","691ca100ad73d5c325dd6ca739394d73"],["/tags/superagent/index.html","c010d806c61deff4faa425005230657a"],["/tags/tensorlow/index.html","69cdb6dc90ac53f375de6ec4acf53fad"],["/tags/tex/index.html","290597a31c8a6ef58cf309951e4959a3"],["/tags/threading/index.html","2e7b18354814253deb1101518303676a"],["/tags/tkinter/index.html","d4f2834f72d4102b9faa077a5ef51348"],["/tags/torrent/index.html","d35d0a644ffa45ef256e675379aa083f"],["/tags/tutorial/index.html","31793d28b9f2df8a7136f6687fe75ec8"],["/tags/typora/index.html","90e514bb27844b180f8c712f90c530c1"],["/tags/uniapp/index.html","1029691e6fd3f6d72901eb80c72fab5c"],["/tags/vite/index.html","65fe3e6be074d322399863d7a68da337"],["/tags/vue-element-template/index.html","6c29aa2adaf62f3ee665107a9060e933"],["/tags/vue/index.html","10540de606cc8ed1aa1d7761d5fd8afb"],["/tags/vue2/index.html","ff40f0fa8d3bb79508e7402df299a7cb"],["/tags/vue3-x/index.html","c9d0e2d0b81d2a4fb6830db1aa617801"],["/tags/wechat/index.html","137907355fe4c59a8520392f214fd65e"],["/tags/wm/index.html","d6394e6c0cf54214939baf10e48f3a65"],["/tags/wordpress/index.html","be21b93362ae86d751c1722f3d17d965"],["/tags/workflow/index.html","9e8ca22178c63bff7984e2ce8083b97e"],["/tags/xpath/index.html","82807f484bc9d99340b1cc7d153703fd"],["/tags/yacc/index.html","847ec7a96dcafdb4ed6ddde5c0b7e921"],["/tags/zsh/index.html","2f22ab7e92bfffb8f5aa44ab2942be0e"],["/tags/七牛云/index.html","2d161c3a8a8ec4faebf567aea7861cd6"],["/tags/函数/index.html","c8d6980a077d14d1531e36cd02b246e9"],["/tags/剪辑/index.html","04d694bc48d1b7f3c7960a181678a5f6"],["/tags/存储/index.html","33c9d3053f2147ac51ab288137e061fe"],["/tags/实战/index.html","136034474189cdb86e8c0cfc5f510afe"],["/tags/建站/index.html","cfa81c1276b942ab3b67556c326f5153"],["/tags/微信小程序/index.html","b7b16ea959c018cd570ad83e0b9778f9"],["/tags/指针/index.html","013a94dc7e68a5fc8cb364b38c704497"],["/tags/汇编/index.html","57bf0552565825c0e8c700d82da65194"],["/tags/爬虫/index.html","166df6d77b5591df1c9f3653661f0a54"],["/tags/算法/index.html","fa842e3f1213342037911039fdae8e6f"],["/tags/编译原理/index.html","6f0bbe1ec36bd7017957b9d8b71d0cab"],["/tags/获取地理位置/index.html","5e7d52a7b7f049f5a01155adc00ca9ac"]];
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
