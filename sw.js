/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a3e92d6d09dd2eba55216f2666b9f019"],["/2021/04/20/稀疏矩阵/index.html","5659b1821deea0241226e250874792c5"],["/2021/04/23/广义表简介/index.html","4199f940502acfbc56cf045cf527c957"],["/2021/04/29/关于指针和函数/index.html","dfe80fc8f8d3ab5aee11e6c47e89a60a"],["/2021/05/10/哈夫曼编-译码/index.html","de3985e53918e3a65cb33a4456d5d711"],["/2021/05/17/数据结构noj_2/index.html","60806c5b5357627b9bb27affef808a30"],["/2021/05/30/数据结构试验/index.html","233e82b139f910e433dd2fd86b0758b5"],["/2021/06/12/数据结构noj-3/index.html","0a50a52262cd000e5843f6cce7b03129"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","d79100d227bd8268f1eccba54a9db96a"],["/2021/07/08/课程资源分享/index.html","61b9343d539c688c982734e85c464e06"],["/2021/07/20/Scrapy-下载图片-文件/index.html","06e3691dd1604fbd45c254cb9411374f"],["/2021/07/21/Scrapy-动态网页爬取/index.html","593da9ede77b2aebd426cf9f369a700e"],["/2021/07/21/疫情打卡/index.html","9f73ff3e5189b4dd60b2b9b9f1d70650"],["/2021/07/29/Scrapy代理设置/index.html","24b84dd2690688b2d177fc188e1ca015"],["/2021/07/29/数据库认识/index.html","5bccf8466101de2ecfaf0ae8dc9119a7"],["/2021/07/31/Python多线程学习/index.html","4455152d0b2ea336ce820eb7a64828ea"],["/2021/07/31/tkinter-requests练习/index.html","67989a37cfcee7473b51868190e5e193"],["/2021/08/10/Git学习/index.html","460d6299289d8c7d2d735db716068d12"],["/2021/08/15/pygame实践-1/index.html","54d343a003ac1076e3e5455b06cc5d1c"],["/2021/09/06/微信小程序开发/index.html","6436a13755b61740883a33b5e60d6fd4"],["/2021/09/21/命令集-1/index.html","6cb896202edede134fe204cbb1ddb00b"],["/2021/09/21/命令集-2/index.html","bf35f5c79731bcc039b1f4c0370f985e"],["/2021/09/21/命令集-3/index.html","b2ea08ef00327a56875bce5dbd6ecea6"],["/2021/09/21/命令集-4/index.html","9d6acc8ebc68e83e81de13c523356a78"],["/2021/10/03/socket学习/index.html","ec64ae94cb4ff9ed04127ed3adbbadce"],["/2021/10/10/dwm入门/index.html","57599292e7ecc65727408f5f6e6b64f2"],["/2021/10/10/安装ohmyzsh并配置/index.html","4a9dd10940ecd8f3ed5a94fb85eadee1"],["/2021/10/20/css学习/index.html","8db345bbad3a17ba6b89fa06ecaeefd0"],["/2021/10/20/wm入坑/index.html","5d1f2c55dc2cc6a260f2aa321f3885f9"],["/2021/11/03/微信小程序学习/index.html","5c5412c24d560d0896b2085859e7d79c"],["/2021/11/04/css揭秘/index.html","5a7bf077cf470c9c3e91c6a1bd72fd7e"],["/2021/11/05/css-练习/index.html","2e01c8403eef4b5d79b26eea744a49b0"],["/2021/11/21/命令集-5/index.html","9a540be44e91686e071d5f4fc76fde3b"],["/2021/11/21/命令集-6/index.html","563d090baf34cabffb991839df8e9166"],["/2021/11/21/命令集-7/index.html","dfdaf4627a550d984d1f2cd216d2fac9"],["/2021/12/01/搭建wordpress/index.html","52a2ecadae23461791723c7dd56f73fa"],["/2021/12/08/python操作百度网盘/index.html","eea1cc579818fbd5cb2c5084853b6f5c"],["/2021/12/14/js爬虫/index.html","a9a9fe2f00ecef9982f454cd86154ba6"],["/2021/12/25/为网站申请ssl证书/index.html","5c45513cc573f2e39311abfe03b732f0"],["/2021/12/29/使用七牛云为网站提供服务/index.html","00d000ff58f58374f7180fb4cfb2f4eb"],["/2021/12/30/jQurey继续学习/index.html","12b91bc63950e5c3580a2d021d1d3abe"],["/2021/12/30/jquery学习/index.html","eb5be98ac4481dc46bc90f0324284e34"],["/2021/12/31/vue学习/index.html","4593e7bda568e2891fad7844f87fafa4"],["/2022/01/02/疫情自动打卡/index.html","415b54781808ab71ddebf7aa71582fbd"],["/2022/01/03/javaweb初体验/index.html","6c46cc99237d6a9f4ef9ef0091f3d0ce"],["/2022/01/04/codewars练习/index.html","6638c418ef6e5443548be509242370d8"],["/2022/01/05/Spring学习/index.html","eecfdad8b41a28574e3d61f9583bc226"],["/2022/01/05/vue实战/index.html","b5e9806d36cf021d9ab7934e42279eae"],["/2022/01/08/gdb-gcc学习/index.html","cdd2f7e887d155393b6073fe461a4e3e"],["/2022/01/11/python-opencv学习/index.html","ce1a061b0a0033b4e66d864866fa90d7"],["/2022/01/12/汇编实战/index.html","d0597178845b4ec3bc4940fa6c2ff8d9"],["/2022/01/17/pandas学习/index.html","c552ed3b17faa00567eeb9ec74492cc1"],["/2022/01/19/可视化图的工具/index.html","16d19819620af64f5498503730c5c082"],["/2022/01/19/机器学习入门/index.html","5d8a7921f90cddaa48d5913d05db28e3"],["/2022/01/20/cousera-ML学习/index.html","523e014b80507487b9a1bc543352a416"],["/2022/01/30/typora解绑后出现问题/index.html","e0180085ccb78bf96907f74bd6832c3c"],["/2022/02/03/NLP学习/index.html","0916e50e4d2b4f582dbdd88b38c5609e"],["/2022/02/04/Web漏洞学习/index.html","30dbfa0c8debbf7a976835ddd237c2c3"],["/2022/02/04/pyqt学习/index.html","8cb2a5d0cca0f39d69317415ccec5346"],["/2022/02/04/python爬虫/index.html","51f7fc3b3bd142368517557228e8f23d"],["/2022/02/18/Electron学习/index.html","cce7053a20389a93b0f26e6b2f32f27f"],["/2022/02/22/疫情填报字段解析/index.html","32928e6ff4e06ab1b23b4f6fb99a631e"],["/2022/02/24/Bomb-lab实验/index.html","81a520342ed1a36d3fbbc744c9a9c7ca"],["/2022/03/05/nginx学习/index.html","5d281cc73c704231bb8759d4b5b38473"],["/2022/03/09/汇编原理课程学习/index.html","a04c53b7fe8a973b067a895b41dececd"],["/2022/03/11/Keras学习/index.html","423e2739eb1bd1d34b7296084254de86"],["/2022/04/01/graphviz学习/index.html","0ce980fa3f0f4be611ef2850e8bf4918"],["/2022/04/07/django学习/index.html","e72f90b490b3d49791791990c7fa891b"],["/2022/04/11/密码破解学习/index.html","2dbd073c8c7b9fabd5253938f5d59826"],["/2022/04/12/flex-bison学习/index.html","4fc7d7a31ab3b9b1892d3e2e52389003"],["/2022/04/15/pytorch学习/index.html","d27040f0b6cc63194a6b380d40dd0479"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","c6ecbfd163a6eba4dc243e5ec258bd5c"],["/2022/04/23/写一个音乐播放器/index.html","52cd1009df5cfd0ff35718179c2a0fad"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","639c1a8256daeeb08996d9d004dec7e8"],["/2022/04/30/GAN学习/index.html","e15dc6bf22d41ecdce44c18c8b94f71a"],["/2022/05/02/html精学/index.html","db31ba1f57bf6b894927ead3910da2df"],["/2022/05/06/write-a-compiler-by-yourself/index.html","fa100da21755a8969db9349617200d10"],["/2022/05/30/acwj-01/index.html","3a54b31fcf9b9b4aa7b006e45bbc920c"],["/2022/06/14/animeGAN/index.html","3976a24328fb2158dd4b2c8111c47a6a"],["/2022/07/09/c-与算法学习/index.html","003e6a18bfa88226f1cee4d7a6898fc0"],["/2022/09/19/flask学习/index.html","7b3285859c01d6ad32ddbd1638eb0cf0"],["/2022/09/22/cs224w学习/index.html","01c45930a9f62e91fe95916402c941be"],["/2022/09/28/记录一次wp重装/index.html","a7536eb86f49e4e0f9f81acdac0a4686"],["/2022/10/01/Obsidian学习/index.html","aa34d6405887aa9d499494ad305451e9"],["/2022/10/08/vue-element-template实战/index.html","ed15d249b795ad1329966dfd2079fd75"],["/2022/10/25/vue网上商城项目/index.html","fd29ad1aacddb2cd5eebe3d58c95055d"],["/2022/11/11/leetcode刷题记录/index.html","88ebcc0bda35a03d92efed9d99387457"],["/2022/11/11/使用overleaf优雅地写文章/index.html","6eb191c0f36529984173bd01952b7783"],["/2022/11/22/磁力链接与RSS订阅/index.html","9078662de73892fdb28374f60a6f587c"],["/2022/12/11/uniapp申请获取地理位置/index.html","23c743600681351190d840511371b9f9"],["/2022/12/26/pr剪辑学习/index.html","91a7ae25157b3a078ccc472777e0ca54"],["/2022/12/27/css中的flex和grid布局/index.html","1fa0f7bcca7815bb02433cc2f5d8eb0c"],["/2022/12/28/Flutter学习/index.html","ab2eb22bc53bc016c0bf948f3039299a"],["/2023/01/01/美化github首页/index.html","30f9d23eb1a008198eeff27dd25d9066"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","4b7313c5b7d6bb71f4d100c8116c2ab6"],["/2023/01/04/构建微信快捷发布文章工具/index.html","66054528a1c496959c360c4480379fd1"],["/2023/01/14/dart学习/index.html","e5630d1969a5fb85d5cd825bf302e747"],["/2023/01/23/闲置服务器BT下载影视/index.html","d09877f8008f5b35ef816e6d73e9066f"],["/2023/02/07/TotalCommander使用和学习/index.html","0887d0144c5268ca72dbc056d5cfc782"],["/2023/02/13/docker学习/index.html","b4fae12188574929a03d8baefc10d78e"],["/2023/02/17/DLHLP学习/index.html","43baf2a4dcd9bdf4428d5b5ad5d2c3f4"],["/2023/02/18/学习purecss构建自己的css框架/index.html","40070d369d5119a9fb6a27602a74007b"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","051afadccd496241f143bf991a5e07da"],["/2023/03/05/STL学习/index.html","1b48e2adddbb2e74b3bb30e26c0c15e6"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","35b1c8ace2b269a895a7635c26dbd4ea"],["/2023/03/23/实战写浏览器插件/index.html","926e88f8a95223564f669da11ecf0ac9"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","94d3f96cbb9ae2eed1632f0ef74ad437"],["/2023/04/02/EndNote基本使用/index.html","d0a81bd2ea381e530942c06869c21eb9"],["/2023/04/04/mne处理脑电数据基本使用/index.html","8287b6bc300ce218e911dec693a43d03"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","a8ff0d40f39b9dd3a9885c7d29aadf17"],["/about/index.html","92a120c44f68f7dcc64f3d3fa10f0fa8"],["/archives/2021/04/index.html","c9fa85b7e2d007485d0709fd6489e13f"],["/archives/2021/05/index.html","7aa6fd0b928a99ab3c324a1761160c72"],["/archives/2021/06/index.html","6a91bd35e60e9eab697e798994bf439d"],["/archives/2021/07/index.html","a6ac32da54b8d9215668d3f68213b796"],["/archives/2021/08/index.html","d146fbc37f6d78534ee9d9dde243f691"],["/archives/2021/09/index.html","f2cf173570917066f4dd33772d362f40"],["/archives/2021/10/index.html","6b244b1f50cb9a71d00f3046d8f1b0df"],["/archives/2021/11/index.html","640775aaaff285e7b44d2b131714f458"],["/archives/2021/12/index.html","e1cce11f09ce6ee79bd0e6c80da938bb"],["/archives/2021/index.html","205b86cbad392bd773e30beda7e53690"],["/archives/2022/01/index.html","b445fa84c675ea49d1aa7aba0c500231"],["/archives/2022/02/index.html","b32f9376deebd0b7e1c280e482785ec7"],["/archives/2022/03/index.html","eee212d5498141453c5ec0192b842e6f"],["/archives/2022/04/index.html","202751f3bc9575fe7f0a1d44aab7ef07"],["/archives/2022/05/index.html","4ccecac73570ef90987d59eaad96def9"],["/archives/2022/06/index.html","349d8fc939a5d6676126ed3a6cac79f5"],["/archives/2022/07/index.html","36fe5a0d53b798b1c343344a7b9359ed"],["/archives/2022/09/index.html","a53589db085e73933624c02b3b77c175"],["/archives/2022/10/index.html","aa6eb4ced0686b16f1079aad49427577"],["/archives/2022/11/index.html","5409e345dca57bb9dfab7aa33054ed87"],["/archives/2022/12/index.html","213d64c22504ebe8c2475affd24f475f"],["/archives/2022/index.html","2f8ab705e3faac885e27662a7ca72d2e"],["/archives/2023/01/index.html","15a44ad641caf1c5eac3dc126da00f66"],["/archives/2023/02/index.html","58748ef3325f069c95ecb81a4e1c5c95"],["/archives/2023/03/index.html","52fb0e64fecbc2939d537a3722efe809"],["/archives/2023/04/index.html","0dc3df7c6da22412110db1a047412858"],["/archives/2023/index.html","a63215616005262af3c68c52f6f74341"],["/archives/index.html","d5be7e96149ef25963a4190e03b89a3a"],["/archives/page/2/index.html","ce281c4ce08140328c479fbf184d3363"],["/archives/page/3/index.html","6f12b011c7d52bc4967acd4ca51d9994"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","ffcc8cb1be2b2d4b1e7b73b09d927a9c"],["/categories/Linux-study/index.html","34049d69fe96ee52d7c5ba341e4f9e6b"],["/categories/ML/index.html","3dc9a5f993238a5c9b73a52ded80c02b"],["/categories/Nginx/index.html","17f8560c98a78e56fd4d0cbcf2a61e88"],["/categories/Spring/index.html","9a25a53e486a7f22861e760dcfbba181"],["/categories/course/index.html","3b43bc218f44fb51599becf5d19488f6"],["/categories/django/index.html","f9eb4c8daf30b22fca274699ed63fccd"],["/categories/fun/index.html","cf2794f38aa4cdf3c66a3a072c4ce4f6"],["/categories/gcc/gdb/index.html","0f4929cfa196d7366a5ba4300e76998f"],["/categories/gcc/index.html","4d3478bef62fa01e23b58d288dde0f8d"],["/categories/index.html","64cf98d9a2dab312dce840eb836a7fff"],["/categories/java/index.html","4cfeb7e11d37109422aa0502c34ba479"],["/categories/latex/index.html","e860e0232c537936fc711d0251db39c1"],["/categories/python/index.html","f6d80a098ca3030a1ca5bc114340bb3d"],["/categories/study/index.html","c4a7149f4989105eefa066c4e96ed4b7"],["/categories/vue/index.html","3ca3bec85b471a57c558a3b2ce7b022a"],["/categories/误区/index.html","ff8aa7c60e9eb6ebb5ab4f7ea33b5c27"],["/commonweal/index.html","80e60c27afd3153c47346465b94ca9ed"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8682d9c955a87d98e8e029affb67c611"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","86d99523824dce2a981e4d9ec44376d8"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","5117ba2ae8fe45f267fea03a63360740"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","c328f96c54d9c517325fa08e7275bced"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f4d07a8403f23e50b865309aea0ed97e"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","b64491a944d3df7df494d9934db25782"],["/page/11/index.html","d51bb0aa5f254635cf3083766752deef"],["/page/12/index.html","23ef7f265b8a86fb6aafd0eddbd08cfa"],["/page/13/index.html","8e7370cf60427d71c9dddae28b0ea0f1"],["/page/14/index.html","68921d311008d214f2152dcc0dd6f80d"],["/page/15/index.html","22727e19f3db98b47d644c29353560c8"],["/page/16/index.html","b40b103e26eef1e354637d8f8f322945"],["/page/17/index.html","13fa051e1fec5ddd1739a392e29ea818"],["/page/18/index.html","a750b9fc6ead363b2641d5debdd09266"],["/page/19/index.html","aaa2f0873c6f9544ef414b69c8e1254b"],["/page/2/index.html","2990165861034c808ab0240ac574465b"],["/page/20/index.html","b5d07920559271bda94c3a78630465f6"],["/page/21/index.html","df321bba2f0ddc3c4fd55b2237ff0ec0"],["/page/22/index.html","867d6b197503beda373bbfee0fd967b7"],["/page/3/index.html","b48d40b0c35eb9124da4276dd68f1375"],["/page/4/index.html","0c7374be59b7dcb478a453a97a986cba"],["/page/5/index.html","710b644c6bad91186e432cc2b73b9871"],["/page/6/index.html","fd8a5a10adabd6caca6525af33c69905"],["/page/7/index.html","960a2df053088820bcbd5c94d1c5faf2"],["/page/8/index.html","4e8fb0af8de6aaae3acc18065d9f0634"],["/page/9/index.html","9dee535a2edeedb85c05dfe5b4db6a46"],["/resume/index.html","d93149ad448d7d9d8ad548a10404553b"],["/schedule/index.html","1f2ac65b2ec2fb3ad4da984d4191e8e3"],["/sitemap/index.html","ea3ac0ccb0b4f11f6ce0145cf4670f79"],["/sw-register.js","2e866fd0fc99babe5f2f05b44ebb4735"],["/tags/AI/index.html","7e731c5b82ffd2cb7a0f5f72d17eba17"],["/tags/BT/index.html","44e0273b9fc67a781e5c3dbb2ab69390"],["/tags/BaiduNetdisk/index.html","545b0486c7ab05e94ba01179ca393fb5"],["/tags/Bootstrap5/index.html","f4577ccaf5b67f7b7e97f176736e9ea7"],["/tags/CSS3/index.html","378df388528332bf1fbef966bab633a9"],["/tags/Centos/index.html","afb2f80eee3186f815f29f68f47768bc"],["/tags/EEG/index.html","a9f1de890d89f65e153805cf29664753"],["/tags/Electron/index.html","f62b028e348b4faa995ca30bf6b8edc5"],["/tags/ElementUI/index.html","ca6a301e40d1c851cfb001a9b320af76"],["/tags/Flutter/index.html","eb6805fb1fbffda49f5872b4d02d50bc"],["/tags/GAN/index.html","4b2c2e534686ddaf835bca26a72c7fa6"],["/tags/GUI/index.html","8a8d94b45bedd7bd480e52e746fb2073"],["/tags/Git/index.html","5c321f5b7b10622c131fbfe12a1a48ac"],["/tags/JavaScript/index.html","02a4c781fc46f086de646ed8815e59fb"],["/tags/Keras/index.html","adec4517108e7710c9c344f111bae9cf"],["/tags/Linux/index.html","17fe17418db8c2997d7f338753904c16"],["/tags/ML/index.html","09268b84e3f0f3b83558b6a65b7016a5"],["/tags/MNE/index.html","e8957e8516f714c79d257c5a7d00460c"],["/tags/NLP学习/index.html","5bfd1055d7dd04b9e9050ca2d5fa5efc"],["/tags/Nginx/index.html","a81be397e1478ce46f652f507d5afb1a"],["/tags/OSS存储/index.html","8c91da28c8264a59b00eec4d7ea94a29"],["/tags/Obsidian/index.html","5d82200ef2b78c8cecdea54cb0c2c237"],["/tags/Qt/index.html","735e6e3141c94f7d444df70da0d600e4"],["/tags/RSS/index.html","71e344c7ec8a3d7bc49073efd0d4b209"],["/tags/SSL/index.html","690fa50bf9ab4471ba38e05a4c3e7eb6"],["/tags/Scrapy/index.html","852fee2bc293459fb29bba7ba9b71b32"],["/tags/Speech/index.html","ab428495478c6830573aef831c0d6c3b"],["/tags/TotalCommander/index.html","bd61de4ddf41284dddaf5714db580aa6"],["/tags/Web/index.html","ec7e9364369096d8c7c0a2b4b4bbbfd9"],["/tags/algorithm/index.html","50cc44baaba1cb8492d45a246fdf43a9"],["/tags/bison/index.html","a7714d534d5739996dce6491440fd292"],["/tags/bomb-lab/index.html","d7f4434fdb53615c1f942963e79d0f5f"],["/tags/c/index.html","a1c2932066aa76e2461a2b1862e4848c"],["/tags/cheerio/index.html","07e35f2e8fb2e70b9eb3a6cff9746a05"],["/tags/codewars/index.html","b21f413577dbd5ee909f049a34cefd2d"],["/tags/compile/index.html","7c466f6e36fb04a60e1cd621187db077"],["/tags/compiler/index.html","e95d7104650c5ff1b3130ea02e71899b"],["/tags/cors/index.html","d05ad4a1937205c9b38eab163ad48738"],["/tags/course/index.html","2993633eae830c1a8b5814525c353e59"],["/tags/cpp/index.html","906e205c3bee1e49176859601162f199"],["/tags/crypto/index.html","af448d1243eeb7897ff30a29535cf811"],["/tags/csapp/index.html","a9ae28c8629efa3d518a73b62d8a2192"],["/tags/csp/index.html","a2d87e87cb807733e1e7003c465e0eaf"],["/tags/css/index.html","f64db90e20953622778275f412c03f01"],["/tags/dart/index.html","536b15618441d16ec518d6f1640647ae"],["/tags/data-structure/index.html","ae56d07d0ab9754202a3d19237fcd395"],["/tags/database/index.html","2d1d8ae7057cebae536356b85e47a4f9"],["/tags/deep-learning/index.html","f97913d20b87f030b02ba7e6fb402207"],["/tags/django/index.html","13510d5e77ce966cedf4ab9c5d404a88"],["/tags/docker/index.html","a445c6c093eb20de2b9553b1bfdb90ff"],["/tags/dwm/index.html","c671f04303a917f96194fecffb8c3188"],["/tags/exercise/index.html","c4f1c8629e375161df802c1da621f0b2"],["/tags/filebrowser/index.html","1e63a849bc2d01443b946738b5b84aed"],["/tags/flask/index.html","90711e2ea5d5fffd12d97057c3faae43"],["/tags/flex/index.html","dfb147653e61cc4a80485ddf179e8bb2"],["/tags/front/index.html","7fe2364232e46d5e520f7d5fe41fff22"],["/tags/gcc/index.html","53598a68d7e989c994778e01775833a8"],["/tags/gdb/index.html","74d7ff5009d5618c2ed30cf9e98f91ae"],["/tags/github-profile/index.html","548050941344d9b003b6e13cbced36db"],["/tags/github/index.html","16732df70c1447fc7093e47758c25e64"],["/tags/graphviz/index.html","13abe58565a6adf64b8bb0c69efff01e"],["/tags/grid/index.html","999ba4c9184b3fb3de62042d1d37a455"],["/tags/html/index.html","c146f27b3a4df6bf7b4b87b781b10586"],["/tags/i3wm/index.html","d4a3ff7a271d1629a47bcecc71d06102"],["/tags/index.html","27169d62f267b5793090b69e5d7fc503"],["/tags/issue/index.html","ad7eb71dbd85c34173ba39cfc2d4ffda"],["/tags/jQuery/index.html","e9583e3dc8537f338940eeccbb1f0650"],["/tags/java/index.html","5e90251397430ba53235726bc405a960"],["/tags/js/index.html","a0e4a5bd703bc2c4015e65468620c78f"],["/tags/latex/index.html","35529c81036dba5710ae48afb230f240"],["/tags/leetcode/index.html","126a6ba4cf2ebb89b43da9261858304c"],["/tags/lex/index.html","c9e56a4f9a39c3d589655e9b4e02e738"],["/tags/material/index.html","9e4af3c2f3134175401d504d4f140e07"],["/tags/music-player/index.html","f454248414ae2003711db9ff54b4723e"],["/tags/nodejs/index.html","bf927b92e2986fea92246ea2bca7a2a3"],["/tags/noj/index.html","273b1095254086314ed106eedb88f511"],["/tags/opencv/index.html","b5bfbc1f6ea5b017d36309017bf09e8d"],["/tags/overleaf/index.html","878a555e903f68ea685b0134b2a21945"],["/tags/pandas/index.html","f1002d2229a05f81fcc4f5d34879aed9"],["/tags/paper/index.html","4ce995fc3d8fc1d26aa844213bf588a3"],["/tags/premiere-pro/index.html","a1332f7c41f45969c2f7725765e9fda3"],["/tags/proxy/index.html","4b00c5ff910bdbe7dcd51f3e846677fd"],["/tags/pure-css/index.html","541ad2635778fbba5916ac01267fbb71"],["/tags/pygame/index.html","ed5ec712de36adcd76071755f9a53543"],["/tags/python/index.html","478e0e81853f79a668c23e90dcb67539"],["/tags/python/page/2/index.html","243c577983081d5a56bc7820c6e533b8"],["/tags/pytorch/index.html","ab79a4b3b4ea44196fcf8d070b552fb7"],["/tags/reading/index.html","ff591f14be977389fccf425442d04f46"],["/tags/request/index.html","1876b33c7bd4944ceb9b8b34b7ab7c17"],["/tags/requests/index.html","0914916ec22c7b87592a3d0b66eb2a22"],["/tags/security/index.html","97213a0dc79ada4a1642a48c486069d9"],["/tags/shell/index.html","5dba70db17eba81408e88005f0195941"],["/tags/sign-in/index.html","7f2e421f9e20d09ef02daddbd27fb2f8"],["/tags/socket/index.html","751531eb01793d8f4717ecd80e09f219"],["/tags/spider/index.html","5d5353512cb537876c5127a5c6f4ffb4"],["/tags/splash/index.html","e6f7befc9be6d48bd32aed83a6c513fe"],["/tags/stl/index.html","9025de3ca01b47cd5ec4b50652cfe1db"],["/tags/sumatra/index.html","22e8ed9951666c588cc14ab5b1819b0a"],["/tags/superagent/index.html","630f0647c171f00b36857b569a46743a"],["/tags/tensorlow/index.html","e93e8ac62f8f4797107709933e9a6d5c"],["/tags/tex/index.html","ccffb8b60841b3653a01db7d039b0c76"],["/tags/thesis/index.html","57a7544bd6ef30c07dacb87b7de361c6"],["/tags/threading/index.html","63103331a4900e5a55a7c4134837dcbf"],["/tags/tkinter/index.html","c2ca3d5ac334ff5d418750ec7536780d"],["/tags/torrent/index.html","8e87394c6e29d0a1c8c619200918a22a"],["/tags/tutorial/index.html","2f1aa9e576fd065b1f46bbed85c9e395"],["/tags/typora/index.html","5f273635cb4613ac67bcfd04f7a90e43"],["/tags/uniapp/index.html","74c649685c346d2cc2e74c213fc5ad95"],["/tags/vite/index.html","a84081277ab06dcb8720f7f63e4f1373"],["/tags/vscode/index.html","4df881bb9d07e6181f916058fa6b5620"],["/tags/vue-element-template/index.html","9abfe88ab1f7f62b9590beb3c36c121a"],["/tags/vue/index.html","e8ba15f61506e2015212219cca4b88d1"],["/tags/vue2/index.html","136c0fc9b251cf05fb12e68d483e4096"],["/tags/vue3-x/index.html","1affca98f86bd20eea27fd0b2601b820"],["/tags/wechat/index.html","b6061e6a61a77582e643a81ae8389c64"],["/tags/wm/index.html","3c7741063baad844830932b81dceecb2"],["/tags/wordpress/index.html","8cfd26b91631d2a38abad9aeb1ab9fb4"],["/tags/workflow/index.html","dbb1e1fe3f38c05e90dea639d10c9d7b"],["/tags/xpath/index.html","39db57c4fab69a911b65b0db888e9f8d"],["/tags/yacc/index.html","bfa125c80738bf7824926be755c1025f"],["/tags/zsh/index.html","6123a1d50564cb32934e974069d51628"],["/tags/七牛云/index.html","fd43c1ae2fea7cef2b3d298eb5c53d46"],["/tags/函数/index.html","ec60a039cf2b9c3d5567f72d5d464e74"],["/tags/剪辑/index.html","60bd55ad199b7200ee799284bc1724bc"],["/tags/存储/index.html","f0d7adf0099002a39d87ed7c0e4689bf"],["/tags/实战/index.html","f28a02fdaa38998d725759fe561a252b"],["/tags/工具使用/index.html","47568a35f48050f29f99f21e1f7f0e0a"],["/tags/建站/index.html","297275728ae34ac6928d22429285b828"],["/tags/微信小程序/index.html","16d0af5da08f5e507c841754cd428629"],["/tags/指针/index.html","40edab5a9a32cd06f9a494befd73bc1e"],["/tags/效率提升/index.html","458538195db943fb8c9fb5cd0d0adca8"],["/tags/汇编/index.html","f35d0ac4626b5def3cc9f739a37b26fa"],["/tags/油猴脚本/index.html","545a3f836014e66402423e4adb05527c"],["/tags/浏览器/index.html","791a25418b13b5bca7fdf9f51d2c2751"],["/tags/爬虫/index.html","3cfbfe50429d529d439dec6350f85c87"],["/tags/算法/index.html","af107eec407ead2edc6a9642e9861304"],["/tags/编译原理/index.html","635279979881d74409e64f94eaa3d714"],["/tags/获取地理位置/index.html","d5ab34cb541094ace7ea7092f70883de"]];
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
