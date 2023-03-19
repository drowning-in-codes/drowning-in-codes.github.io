/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","76ed4a09e4d0ac64ae3d126064cbb048"],["/2021/04/20/稀疏矩阵/index.html","f14136f44f918ec4873c1d05b6d6598b"],["/2021/04/23/广义表简介/index.html","93625444d4a3832e5b2a74c21cb8c422"],["/2021/04/29/关于指针和函数/index.html","d59036067e1a2ec03839bc0e55129b18"],["/2021/05/10/哈夫曼编-译码/index.html","81291de4eec9ead9cf94a462b5ad6b31"],["/2021/05/17/数据结构noj_2/index.html","8a7281874565ad8be3759e5d73c16eca"],["/2021/05/30/数据结构试验/index.html","d6b7f17d5bc360d067fa3acac1ead487"],["/2021/06/12/数据结构noj-3/index.html","7ca1c185b3a4cca6236ca2659dbc631f"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","2058db6043285bbffd52e2610a057eb5"],["/2021/07/08/课程资源分享/index.html","e4203dbabf0ce9237b41a81abf263b2d"],["/2021/07/20/Scrapy-下载图片-文件/index.html","1b6814447019d41d43458f8466eaeb08"],["/2021/07/21/Scrapy-动态网页爬取/index.html","3b59f1c9c3f7b7712181652916cc8ae0"],["/2021/07/21/疫情打卡/index.html","bf63a0fde87a5c5a99f5f1e6b2264727"],["/2021/07/29/Scrapy代理设置/index.html","1bc388841c2363299956e182bf94c7dc"],["/2021/07/29/数据库认识/index.html","47ba6c35a34e1aea4242e65d5de70071"],["/2021/07/31/Python多线程学习/index.html","f98c289856a52f2b0ba3fb60fec45e00"],["/2021/07/31/tkinter-requests练习/index.html","11b6b4304159a9a16a91b80dd3a4b773"],["/2021/08/10/Git学习/index.html","dffab2d66a13ce0c9f1df28c80939cf5"],["/2021/08/15/pygame实践-1/index.html","76d85f6f9c201bd5ee987ebee0b84061"],["/2021/09/06/微信小程序开发/index.html","4790f83ed19abe59e8b3fabf5ef98b2e"],["/2021/09/21/命令集-1/index.html","c81ae6b1eafd2881d7b4940b5085d815"],["/2021/09/21/命令集-2/index.html","a28e8941541febb2df970937487fbeb7"],["/2021/09/21/命令集-3/index.html","b405c2e7835716b890ca93d0f81127e0"],["/2021/09/21/命令集-4/index.html","a1bea9344da0f95970880e1ea7ef7cd2"],["/2021/10/03/socket学习/index.html","22d94d8842d26b37fe83036055daff64"],["/2021/10/10/dwm入门/index.html","ff0e4a80705adc5b09853a7c3408ee5b"],["/2021/10/10/安装ohmyzsh并配置/index.html","9a3dbc56cff6edfb7018a974f12b5e7c"],["/2021/10/20/css学习/index.html","4cbb3e0e31c3b2c1b2066e3dd4e3c6ce"],["/2021/10/20/wm入坑/index.html","44550df332a3ece9210b432e09b2589d"],["/2021/11/03/微信小程序学习/index.html","d888c546a7a421773d0207ad7eeab9f4"],["/2021/11/04/css揭秘/index.html","ebd89acf525d753cc1fc91dd41e8403d"],["/2021/11/05/css-练习/index.html","0ad455381e4a3be17a67a7ee6e53195f"],["/2021/11/21/命令集-5/index.html","44d295fba3eb7896cc919af407c9508a"],["/2021/11/21/命令集-6/index.html","cdc5b48f8845c2418527c81d3d9dfdb2"],["/2021/11/21/命令集-7/index.html","34417195ed0da3558d7e337685f1fe30"],["/2021/12/01/搭建wordpress/index.html","36d9ea8cce70e31f2f826a704ccc0ff3"],["/2021/12/08/python操作百度网盘/index.html","d19c1f088b6868357dca07b882466501"],["/2021/12/14/js爬虫/index.html","c4e3d42ae67915b605c978de6655acea"],["/2021/12/25/为网站申请ssl证书/index.html","95763d3f899db23d0e805c556e61c295"],["/2021/12/29/使用七牛云为网站提供服务/index.html","3b7a64794072b8d00826ca907d7714ba"],["/2021/12/30/jQurey继续学习/index.html","bacbef4082ec3ebf304e3e6e47be0a9a"],["/2021/12/30/jquery学习/index.html","09d18a555a28fb8b3a240a5af9db60f3"],["/2021/12/31/vue学习/index.html","8718916a9f13c372d70194e0b64f550d"],["/2022/01/02/疫情自动打卡/index.html","ba29b07a959343247a64332493fbf2f3"],["/2022/01/03/javaweb初体验/index.html","b9895d0e852970451c09d0ab88d69cd3"],["/2022/01/04/codewars练习/index.html","c9973b9128e906ceda7550193b47f032"],["/2022/01/05/Spring学习/index.html","5e0713035cb93766b29aa61066cd4846"],["/2022/01/05/vue实战/index.html","451f3a0fb6d4dabe635d118b6adb33d3"],["/2022/01/08/gdb-gcc学习/index.html","30cd06fcdbf3acd5fbd58af145858b7b"],["/2022/01/11/python-opencv学习/index.html","1b8942a59f79e1f9782fd9cf5feed4bf"],["/2022/01/12/汇编实战/index.html","3518a11ed5bf1c546dd7621e04630241"],["/2022/01/17/pandas学习/index.html","61af2af32f5f6c33aab8b43f869542d7"],["/2022/01/19/可视化图的工具/index.html","ca4929925765c6d3c69fa3e7a0f55967"],["/2022/01/19/机器学习入门/index.html","d16d2520489d9461608a5a07c254eedf"],["/2022/01/20/cousera-ML学习/index.html","07fe8d9af46ba25b5f3065fcca4ab573"],["/2022/01/30/typora解绑后出现问题/index.html","f67ecb298ccb9707655bdbf84b73d66b"],["/2022/02/03/NLP学习/index.html","f247de441493245e14fc3819b3b6bf95"],["/2022/02/04/Web漏洞学习/index.html","dc6db94facdaba299dcfaba9864be228"],["/2022/02/04/pyqt学习/index.html","ecbae578ade5fe4ae534de2b4ee25bc7"],["/2022/02/04/python爬虫/index.html","80ba2e7d9444c9ff3b4678e70b696db3"],["/2022/02/18/Electron学习/index.html","bd4b56b57f3c0be8e218cfd9bad5f668"],["/2022/02/22/疫情填报字段解析/index.html","6959415843f14f40406114240e6984ea"],["/2022/02/24/Bomb-lab实验/index.html","b8a9ba8fe59ae6aed2da83dd4a8539f7"],["/2022/03/05/nginx学习/index.html","ef2f7007341da62f681189dd860bde79"],["/2022/03/09/汇编原理课程学习/index.html","084605d3dbf0890422827efd86635989"],["/2022/03/11/Keras学习/index.html","43ffcc43af68ff5823ebef9da84359e6"],["/2022/04/01/graphviz学习/index.html","3d6275d1096fe075f96101134006f33f"],["/2022/04/07/django学习/index.html","66c58ca8edf5fb52f5f5c92829257a5d"],["/2022/04/11/密码破解学习/index.html","63fd48ee678cb36409c4f4f3c6c6d6bb"],["/2022/04/12/flex-bison学习/index.html","8be183b851eb7958f8eff00f8e2b866c"],["/2022/04/15/pytorch学习/index.html","0ddba50b52172e8f16688eb349a7faa6"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","9c4dc7bf318165eb895cecf754034984"],["/2022/04/23/写一个音乐播放器/index.html","4dc49ed909dbe27c6a869ee622e1a3cc"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","91eec25e64b519c726e4e32476643ca9"],["/2022/04/30/GAN学习/index.html","fcc70dae700ce6116b50085c45f20ca8"],["/2022/05/02/html精学/index.html","92868bd87f22c5833028684303927ec1"],["/2022/05/06/write-a-compiler-by-yourself/index.html","c00ce8f71ea3f9605ffbf900cc08feb8"],["/2022/05/30/acwj-01/index.html","ddb2a6ce35c43933664a3d3f385c72d3"],["/2022/06/14/animeGAN/index.html","002716cdb63bf755cd5355f8d4bae31b"],["/2022/07/09/c-与算法学习/index.html","66629b0f61006fdb5a55f63db72a3e02"],["/2022/09/19/flask学习/index.html","5bfeec539ea2f466bdcb26fdac531229"],["/2022/09/22/cs224w学习/index.html","adf424c2eeb5871b0685e5a76d8ddf9d"],["/2022/09/28/记录一次wp重装/index.html","4a4e3bbc5e2e51ddbbddc5b321cf2a9b"],["/2022/10/01/Obsidian学习/index.html","6f365e91d076cdbaac01a7f94ed7d01e"],["/2022/10/08/vue-element-template实战/index.html","2d979a7184aa79c9e97415f7a4e084bf"],["/2022/10/25/vue网上商城项目/index.html","beb8ba40372c9848f34e0dcee0a790ad"],["/2022/11/11/leetcode刷题记录/index.html","cd9a466f9bfe542e745694a1b16a73a6"],["/2022/11/11/使用overleaf优雅地写文章/index.html","2b64a9da3ea27287c360fe596889bff9"],["/2022/11/22/磁力链接与RSS订阅/index.html","c1c062dde251a47f68f3a82e4e72b46c"],["/2022/12/11/uniapp申请获取地理位置/index.html","0b7879fe2861e0c3f0218daa9c565582"],["/2022/12/26/pr剪辑学习/index.html","ed768501c0407980d581ce9b7fef2d83"],["/2022/12/27/css中的flex和grid布局/index.html","4074a2c8e9d2d3fc023cadb144f617cf"],["/2022/12/28/Flutter学习/index.html","298dd7617b2a99861f1747292c759708"],["/2023/01/01/美化github首页/index.html","5bc798ac8ec441d401afae17f81f6da9"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","30e3ba3e32a83da328bcc59411145204"],["/2023/01/04/构建微信快捷发布文章工具/index.html","69460356ff3d63368ad0fbfb50ff5dfb"],["/2023/01/14/dart学习/index.html","f4e21237fac9e7283a3a0922409f8643"],["/2023/01/23/闲置服务器BT下载影视/index.html","7cb4b75489d7b8bc4e08928cb2080a0b"],["/2023/02/07/TotalCommander使用和学习/index.html","34e8bae305cc116b6abc66d0096857fe"],["/2023/02/13/docker学习/index.html","d8acd976057989e851bf5a6d5a03f495"],["/2023/02/17/DLHLP学习/index.html","810fad82aa4d232492a63068be915114"],["/2023/02/18/学习purecss构建自己的css框架/index.html","c4f5e658a2df7f8c32c070c9bd0994dc"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","4cf8b9e8750decf929511d7ef53c4542"],["/2023/03/05/STL学习/index.html","bc3cf2d13dbf8a67d7536eac8886b146"],["/about/index.html","703aa10b81ca45a13524b05e7a2d14b5"],["/archives/2021/04/index.html","b5ef1a40d42ee68fb5239839eb8ff712"],["/archives/2021/05/index.html","a68c1f2369e8527e356e3fd659df6bf3"],["/archives/2021/06/index.html","afd56532b8723b802afee40cae0ede22"],["/archives/2021/07/index.html","dfa8c268d22d06ba488ab47af2ba3437"],["/archives/2021/08/index.html","a698b909248286e0b030ef85f208994e"],["/archives/2021/09/index.html","65bbe71ab789bff415bdc34c6a5e7244"],["/archives/2021/10/index.html","55fc056cb1e66c40a57d58f3fedbb020"],["/archives/2021/11/index.html","b98c8bd40d42c138ca07e1116d64ba18"],["/archives/2021/12/index.html","1ede83fb97eaea24bef68a1c2e4fa88c"],["/archives/2021/index.html","05b2d0ffcdd4fc7318514d494fd304b4"],["/archives/2022/01/index.html","6fe2d27f27046ad8ab0cd2d13c40322c"],["/archives/2022/02/index.html","70240791ff7be8fb8cdd2167e68f21b3"],["/archives/2022/03/index.html","a743857bfb1b665b4b385e2aea68462f"],["/archives/2022/04/index.html","8bba51860640ece64580a04fab16fe5e"],["/archives/2022/05/index.html","cd0a8bd2a1375e3ffcd79bf67071b292"],["/archives/2022/06/index.html","722ca33ea0e561d38c47b0b792c7f9e9"],["/archives/2022/07/index.html","227459a3a78e35178693ad1772116367"],["/archives/2022/09/index.html","32f5695eadf4f5cfaab0787e5abc8641"],["/archives/2022/10/index.html","a7fd1f940a8edbe35578f9de4828e9bb"],["/archives/2022/11/index.html","ec3ac192a05b5b149f2fbecf4aa90c61"],["/archives/2022/12/index.html","966df0d1af5188edf7889a805560d70d"],["/archives/2022/index.html","1b4eb92c5f0974c22216a5f4481ecee4"],["/archives/2023/01/index.html","1419a915af3b7459ebe653d83e8644e8"],["/archives/2023/02/index.html","d7c7a336883b664f871fed495029d0ff"],["/archives/2023/03/index.html","05871b90ab385ac9ae3af5807bc45edb"],["/archives/2023/index.html","e3053c25647a5a8450b424a12419ddb7"],["/archives/index.html","14d7bf91096a7dd8415942341b1ed98f"],["/archives/page/2/index.html","19374f3f9cb75d5d574bc0397f02e3f4"],["/archives/page/3/index.html","0c86e32feb0e109c4f2708eb98d7ddcd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","991cff755827ead511bbb940ff0ee204"],["/categories/ML/index.html","a86790b9a4f64fbec66ac6c52c0898e7"],["/categories/Nginx/index.html","da55c5eb3e3bb3e7bc8e1311d6f0236e"],["/categories/Spring/index.html","401514b5b44a39ea91930c049d28e4ec"],["/categories/course/index.html","48fab7af8a9d8906f8e89faef5ac4127"],["/categories/django/index.html","c4104841b9f9a55e8472cb621d82c2f7"],["/categories/fun/index.html","83b1a5a3551b4ab12d9e557d26ae2fc2"],["/categories/gcc/gdb/index.html","575d2b85ed9a00ad1d821dd009d60670"],["/categories/gcc/index.html","5acdf31e53b31ac4255a9790eb842318"],["/categories/index.html","fc0316cf003f939dafc4dda726423122"],["/categories/java/index.html","6971c2aaf191a8208820dec96d938a1f"],["/categories/python/index.html","799eb5753dec1c124d6a6ab1ea70b40f"],["/categories/study/index.html","8ad44b0dfd8f1262efc7bbf8f57538fd"],["/categories/vue/index.html","6ec0a843a9fb2d1ca4edc00210f21600"],["/categories/误区/index.html","4f61cebc401d150398ae05a19c9eaa5d"],["/commonweal/index.html","da31b0f8a9ae76bcbfcbc0fb69af5923"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3ab908982c8afb3dbd4ed57cd50faa79"],["/home/index.html","cccbe0a09a6ad3ff0066ae2046c02ba1"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","52a994c04db865efc0c7b57ca5cbf527"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8b957319390d1dcfd6798b5256926501"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","42f321b927ca90b8bcf5c3b0866b3952"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","7af6a46f69c3567af7c059ba31316c2b"],["/page/11/index.html","7a38cf2ef4acdc03cc0e1caf107b26be"],["/page/12/index.html","67bbd1f6fbc646815695d4e0e5dbe407"],["/page/13/index.html","cce9d2cbdaea55b0af96511f04bfacb2"],["/page/14/index.html","e0336644b0556ddaa50a0c473da984b1"],["/page/15/index.html","bd6f05614ef477a98ccb7acdda8467f4"],["/page/16/index.html","928a51f553f9c6f3e2f7d499d0fa449b"],["/page/17/index.html","924f8d8dbd26aef878b0839a4b74589c"],["/page/18/index.html","c1caa533881cf6b15747d91e74f89cae"],["/page/19/index.html","5593a8b9aa3d2ce331acebe573e6fea1"],["/page/2/index.html","837ef1f1ae72eab019537e1549473e75"],["/page/20/index.html","f06964a5eb8e1ce1757968bbf614e81b"],["/page/21/index.html","87b750b5f9577129132bffa493a0c4e0"],["/page/3/index.html","b5e3f38f56a2c3c32e0e139a33024614"],["/page/4/index.html","77eb682d9b78e4c9b87a719dde9ab7bf"],["/page/5/index.html","ecfb45f8448431729d3757474434687b"],["/page/6/index.html","a51f28ec79d753093eb9e071c668b4a6"],["/page/7/index.html","34cfbf5bcce11df573850f47bb8fbd5e"],["/page/8/index.html","f83032948e9e2b5a705abe4fb3e94058"],["/page/9/index.html","efc113175e41edf607ddafa662867ad6"],["/resume/index.html","2b00370f89b2bc72d7614650df473fc6"],["/schedule/index.html","1526431cb299d55931d43a6793c33957"],["/sitemap/index.html","9b719f1e1626bb7fcfe567247dbca7de"],["/sw-register.js","116486a6e4ef2b119d70048c5652e925"],["/tags/AI/index.html","d17780955373c027a9dc92d1b251eabc"],["/tags/BT/index.html","524f12e9a8a75a5c0e4899818d41af20"],["/tags/BaiduNetdisk/index.html","bb0da0d82328ee11d15e35ac37ee945a"],["/tags/Bootstrap5/index.html","757a9dffe9eb74089af6360f8c8b7f88"],["/tags/CSS3/index.html","3ff0224a7afa481cd222063c31390d59"],["/tags/Centos/index.html","ee8ba99336ef6415feab98a92fbf04f2"],["/tags/Electron/index.html","a0a2e537e2d71a9e4c8bcd9d3d2993c8"],["/tags/ElementUI/index.html","25c4f7cd056931701657e81405673661"],["/tags/Flutter/index.html","37c46e435b9edb511dfcc45eb9a6c5a5"],["/tags/GAN/index.html","6355f81cce660bb2d4c3d64503862e9e"],["/tags/GUI/index.html","76a84638c088f19c5ac9676304bb5eaf"],["/tags/Git/index.html","e2cd1b392a00993b1a8ce51f3a1b6985"],["/tags/JavaScript/index.html","d8e9c4209a78f1fc542f6de9095d54b8"],["/tags/Keras/index.html","e8197cad5d1c3e495f38dd00ec3a8d6c"],["/tags/Linux/index.html","ad689f037489bc90ac661e0c4d0eaec5"],["/tags/ML/index.html","ccdb8160a9c5d7bb6a337c7e147dbcb0"],["/tags/NLP学习/index.html","01e6b6bca69c1310cecba72c5e5d9024"],["/tags/Nginx/index.html","523e024bbbc3ee8e9de138e48248d072"],["/tags/Obsidian/index.html","aac7307ede7bacbfa820531875e1f1dd"],["/tags/Qt/index.html","53194836aa262bf66790169764fa6e20"],["/tags/RSS/index.html","521f8350556ca0b1a610bd1fb47df87d"],["/tags/SSL/index.html","0a3c02fa8e03cc28aeea66598d162ff4"],["/tags/Scrapy/index.html","71cf996404f111e05271a0564bc6e74e"],["/tags/Speech/index.html","be2aa14fa28adaa8c83214a236779a3c"],["/tags/TotalCommander/index.html","791bdf508382a839b881603a3c50f6ff"],["/tags/Web/index.html","819dcffd6662859db8f8fa29040c8a52"],["/tags/algorithm/index.html","cf6feae43028d4142cd2e6757e5e3a5b"],["/tags/bison/index.html","842fe281b93da4c4b17a06878bc7d6bf"],["/tags/bomb-lab/index.html","5b904a20a167459b033adac135128419"],["/tags/c/index.html","5b852d76f1a5a8c9e07aa59c7cdc3e4b"],["/tags/cheerio/index.html","b3f1790120b226c06202ce7418f6c5eb"],["/tags/codewars/index.html","1ac730cf16f76fbf20bec2a946a13341"],["/tags/compile/index.html","c02c3224a0af5be74b9fd376427ca3c1"],["/tags/compiler/index.html","6d932c8af0a704eb84f0616dbf3744f3"],["/tags/cors/index.html","fc58edc4b50db50611fb60edd3d5e313"],["/tags/course/index.html","361d61715219d3befe6b696df613c0cc"],["/tags/cpp/index.html","770248cea4b036675053aa08860cbeb6"],["/tags/crypto/index.html","1eba348fa2782b61be39e6c0eb9243c5"],["/tags/csapp/index.html","87ffb76d507564f4ebf90c10bb2fab9e"],["/tags/csp/index.html","871c0b8ace5614abcdf85a5554fe32d8"],["/tags/css/index.html","90c2501a34235d3aa7d4fab6423f85fd"],["/tags/dart/index.html","c6c9d9fa0af65f08e2182fd185938f2f"],["/tags/data-structure/index.html","c7498ebf1581e8aa82bfad05c57d36c9"],["/tags/database/index.html","b32bf8a208e46985c3c521f71390eb30"],["/tags/deep-learning/index.html","06a0838034176f32e1bf0e1bffbb7719"],["/tags/django/index.html","ad00e91f24d7f37415a23058844fd13c"],["/tags/docker/index.html","86ab9d4620d1bbe2c7533652b8296717"],["/tags/dwm/index.html","67b72f78e4bc1750d87cfb658053cfb3"],["/tags/exercise/index.html","6bbe470f2daf81c77ad1a8c2392f740a"],["/tags/filebrowser/index.html","99130af088d36c8dde074c0af42749fc"],["/tags/flask/index.html","edbbe6d15871b2f1794f08f39ae075b8"],["/tags/flex/index.html","8473ae3273ebba3f4b8f4be9eb2c04f7"],["/tags/front/index.html","c16f3fc75b97355c3f2e12a2d5edfd48"],["/tags/gcc/index.html","8200aa57c24a6284d50fbf21ec440425"],["/tags/gdb/index.html","3ac69aa2663d3e70567ee9a027b995d9"],["/tags/github-profile/index.html","458f9298d393198e31a27e8fb95b4049"],["/tags/github/index.html","901c929daab2263ec60497c324a58e58"],["/tags/graphviz/index.html","d83e391cdb5c84abc324c1a2ca07cb4e"],["/tags/grid/index.html","650fb62166ae385cde6fd3218020f46a"],["/tags/html/index.html","d1a7b996627f13605b295ee37e6e372f"],["/tags/i3wm/index.html","b18a27a928d5fe6475a7cdb64b48e827"],["/tags/index.html","ba09265d023aa0c5e43845b6f34e4166"],["/tags/issue/index.html","406c863cadc41b512bf54975e9f51fc3"],["/tags/jQuery/index.html","115f7d9602c98a5913429a3548ad1fac"],["/tags/java/index.html","0ac1549fd7b3775f85353d56a201fdba"],["/tags/js/index.html","768b952c5621fb197eea2c62a3c3f12a"],["/tags/latex/index.html","be94a28ea9ab08a2e9fb1bf543008f3a"],["/tags/leetcode/index.html","e32db4beea6872b0a5ec3bc4274e2aaf"],["/tags/lex/index.html","f7aa4c44b570915314c10d2aa80f1872"],["/tags/material/index.html","e5b24c38c135c5b94ab528dfb92ef475"],["/tags/music-player/index.html","0b917b23967781482b1fd4fedb03e062"],["/tags/nodejs/index.html","50bdd7619daeec64c5285f52caa6eac7"],["/tags/noj/index.html","ed1be6ac83b5b61379406602bdb12308"],["/tags/opencv/index.html","4ad4964f826c7aefc10d1c8d90d3b6f8"],["/tags/overleaf/index.html","c4c4d1d346a1984c1eabc18f6c6fd9ca"],["/tags/pandas/index.html","27e4d974f01c74e4439abe13dd38e917"],["/tags/premiere-pro/index.html","487fac6f929add3f0e0ec562a0eec589"],["/tags/proxy/index.html","b423d0d5a857b8bbe5f4939df4910d1b"],["/tags/pure-css/index.html","25b365f3f166c9a8604c53c6bf2b1c41"],["/tags/pygame/index.html","4c1a5906b003342526b9aaf845aade49"],["/tags/python/index.html","443851cb0f7fa1ad68120e967805fb6a"],["/tags/pytorch/index.html","3f08ba337ba2c3edd71f323cf826f8ff"],["/tags/reading/index.html","022d512f0ffa5489aa51f1e16fe9b092"],["/tags/request/index.html","9a70d4e0ea946847fd8658d58588d2ce"],["/tags/requests/index.html","b7b71d2c68e46c20d3116637ae914bde"],["/tags/security/index.html","2b7eb0526255a3bce5800c32243ad2b0"],["/tags/shell/index.html","947a950b755f6410b0ca734a7428393b"],["/tags/sign-in/index.html","05fe5cc5f0075531a7ce416dfe9782ba"],["/tags/socket/index.html","954110cd40fe9497c226e2cdaf2cecce"],["/tags/spider/index.html","51130531580c7e1e8b523693c1467472"],["/tags/splash/index.html","c49722888c0cccc89d51ff8f60a171fd"],["/tags/stl/index.html","18cecf0bf3d2281aeb84f8655ccdc121"],["/tags/superagent/index.html","5c639ec98c52b39824bec922a9ed5fef"],["/tags/tensorlow/index.html","ff67ffd0fbf4282ba805054995750a70"],["/tags/tex/index.html","15fe39296c8e03f9f684396146841cda"],["/tags/threading/index.html","d9a40cb5a0652d8c39bb1fe20000c330"],["/tags/tkinter/index.html","31a27346a1366867689fbbf748ea8860"],["/tags/torrent/index.html","7c345059642c3ff52bf3bcc0b444bf71"],["/tags/tutorial/index.html","01b27a628867706a013c6852eb0197cb"],["/tags/typora/index.html","3d94648f9c524d7b51a55af76079ce50"],["/tags/uniapp/index.html","8527b849afcb586dbf4a5502b0237d91"],["/tags/vite/index.html","0ecb9b78b648a363dee51ebce619cbbb"],["/tags/vue-element-template/index.html","76d6574b07f7db9ca724091cf0fa6318"],["/tags/vue/index.html","5224896cc3f745190bcad4484b2426eb"],["/tags/vue2/index.html","e42d237f6ff11526c89e4bdd79d641f7"],["/tags/vue3-x/index.html","7d2a1dce4b7bf7d3d0e2c4f3a5619ad6"],["/tags/wechat/index.html","aa1c294541d3f4713109869a10122ade"],["/tags/wm/index.html","460c56243db61fb6bed74ea0a6507689"],["/tags/wordpress/index.html","6e9a0903acdea91a977e67017b7d7a3f"],["/tags/workflow/index.html","72e3049d6d28c8867847a7d2ec6eba2c"],["/tags/xpath/index.html","aa0d89cee1713ea3a839d75d68fb7dab"],["/tags/yacc/index.html","ab94bc875219a4a649f5d8f02824db06"],["/tags/zsh/index.html","6f42985a1254ed848d3bcd4933ae3fc6"],["/tags/七牛云/index.html","3e5e4dee75de11f8d6e303bde9f6d5ea"],["/tags/函数/index.html","1ad483fda7eba18454e7b6efa993d030"],["/tags/剪辑/index.html","7dbe671727a5f171efbdd35b5721df1f"],["/tags/存储/index.html","2e375376c8d4e353091dcd2be354e163"],["/tags/实战/index.html","792f93acad8db458fa8d6a0605ed23ac"],["/tags/工具使用/index.html","decd87f52ee60710de2ba023c66c181c"],["/tags/建站/index.html","3e773a62df852781309507fcf55f3d30"],["/tags/微信小程序/index.html","9e394f999df53eba40706d18e39915a6"],["/tags/指针/index.html","05c25b6cb561f3782c4285a149b5f254"],["/tags/效率提升/index.html","9eff2d4060272ba2b439f85fad4f2ced"],["/tags/汇编/index.html","b20991b8f07013adfa961fd8f9ed2238"],["/tags/浏览器/index.html","d30d9b998aa66a070edd36b425d96a9b"],["/tags/爬虫/index.html","40cbede25fc615b87ff1c7e741ced7ac"],["/tags/算法/index.html","86c63db78766ff4920ee7177b7360f69"],["/tags/编译原理/index.html","23ebdab2499ddd08ec2608ec0ad3a0bb"],["/tags/获取地理位置/index.html","a3bdf14b5533801c7003fb5179e288fc"]];
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
