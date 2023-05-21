/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","29173c1f928e1bd03254e0630d8aca51"],["/2021/04/20/稀疏矩阵/index.html","0037f10174970feafd627e3dee2b415d"],["/2021/04/23/广义表简介/index.html","64df31ad0089ebaf7863e917c02f1303"],["/2021/04/29/关于指针和函数/index.html","6d0f2144bd1e638591b271aee9b35dee"],["/2021/05/10/哈夫曼编-译码/index.html","e1927c105afc85b5a06c3cdafe0ea631"],["/2021/05/17/数据结构noj_2/index.html","e5ff650774bdebc37aaf00742d617c09"],["/2021/05/30/数据结构试验/index.html","e4c90b84bf6795821c59dd174be27619"],["/2021/06/12/数据结构noj-3/index.html","bd924f1a91b219a84309f1de8d7f0b80"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","670791c20ceafb45e1cd24cffbe152dd"],["/2021/07/08/课程资源分享/index.html","8cac9d6cdc75611e132f65751b90e44a"],["/2021/07/20/Scrapy-下载图片-文件/index.html","ff687845356a09f3d7bf3648be6f41f9"],["/2021/07/21/Scrapy-动态网页爬取/index.html","38e6e565bc7d1628050484e129da6386"],["/2021/07/21/疫情打卡/index.html","b78a8fbd99da8cf7eab1c11090694150"],["/2021/07/29/Scrapy代理设置/index.html","d7c4ee1a487842e60ba1e6a88804f63a"],["/2021/07/29/数据库认识/index.html","888f75f8517cbbbf013dca60ea69d4f5"],["/2021/07/31/Python多线程学习/index.html","08991c7bc245f1a586b51e7cb811bfbc"],["/2021/07/31/tkinter-requests练习/index.html","ccf89135ea46cab4be936299b8c0e406"],["/2021/08/10/Git学习/index.html","b8e6e83ef0de60df8027dc3dcb26b38a"],["/2021/08/15/pygame实践-1/index.html","6d53b37feb65a6de9aca406fb64593dd"],["/2021/09/06/微信小程序开发/index.html","54025a4c68b2c446194793bc7b2befc1"],["/2021/09/21/命令集-1/index.html","ed3b8188e4142a1c6e415269b0e9052a"],["/2021/09/21/命令集-2/index.html","24d25548320bcba29ffae46de09cfc41"],["/2021/09/21/命令集-3/index.html","fc94303da9bd3f320d7f815eaf6bd8cf"],["/2021/09/21/命令集-4/index.html","dedacb6b49fa0c04c8a57e27bc090b7c"],["/2021/10/03/socket学习/index.html","bddc57df72e98e2b4ebe420a72fd1b75"],["/2021/10/10/dwm入门/index.html","a8ad94058f3153adfab0898b12fa0801"],["/2021/10/10/安装ohmyzsh并配置/index.html","859a350c4a6f9536be29045c0ddb9ab7"],["/2021/10/20/css学习/index.html","e36eedf07b0b06253edefba1fe2f2d34"],["/2021/10/20/wm入坑/index.html","be24e1547f88e6c9133496aaaf6cce3f"],["/2021/11/03/微信小程序学习/index.html","49c762d89c923f451fef11f4282d9458"],["/2021/11/04/css揭秘/index.html","ca25ed9db46bea76e39370516dfd5ac6"],["/2021/11/05/css-练习/index.html","a802eec8959b29f6b1168e0ff58be240"],["/2021/11/21/命令集-5/index.html","690b66f3adf976e8cbc70b99b4a828ce"],["/2021/11/21/命令集-6/index.html","91230b03041c29d32141f1ad5c44e06c"],["/2021/11/21/命令集-7/index.html","7096860d9fcf1e667ef53d7da3c572c2"],["/2021/12/01/搭建wordpress/index.html","53e14428565519d0dbe7f7e0b4c0b9af"],["/2021/12/08/python操作百度网盘/index.html","83fd35a5bb2a1dd4489c35ece5483569"],["/2021/12/14/js爬虫/index.html","6d2ad254a819d916a4f04d6a01b61032"],["/2021/12/25/为网站申请ssl证书/index.html","f1c1493b2d57177255fcb5b2889a35bd"],["/2021/12/29/使用七牛云为网站提供服务/index.html","61a8027071ab9e61eedeb67dfc830ceb"],["/2021/12/30/jQurey继续学习/index.html","8dd4e29ec44bb7abd36d4d60d643dd89"],["/2021/12/30/jquery学习/index.html","fefc9ca25cee7b45fc5ebb9a17fafeac"],["/2021/12/31/vue学习/index.html","78d81231734bf0947689b594e102f11b"],["/2022/01/02/疫情自动打卡/index.html","ef3b948fecc6d367f5a6f12224bd2682"],["/2022/01/03/javaweb初体验/index.html","905cdf05f2b9b64c4c5bb77ee4f35821"],["/2022/01/04/codewars练习/index.html","ac575727ed446e5ea63d75492e24e75b"],["/2022/01/05/Spring学习/index.html","22ac8e93afe7de1b92a541418f7bcebc"],["/2022/01/05/vue实战/index.html","4ddee9ee6510b592a74a124a6e336053"],["/2022/01/08/gdb-gcc学习/index.html","03e2241ce887e98613ddd28909c86667"],["/2022/01/11/python-opencv学习/index.html","0c7fb5d2038cd356af21347b421fc9e0"],["/2022/01/12/汇编实战/index.html","8b1ab21d0cdf99175b4c551bdcadb32b"],["/2022/01/17/pandas学习/index.html","837cdd19cb9ab8a73766276a644169c3"],["/2022/01/19/可视化图的工具/index.html","f55cd715670ea036d7fc04fa96540a4a"],["/2022/01/19/机器学习入门/index.html","5cfafd41f7dbc91f95b88e3146c13144"],["/2022/01/20/cousera-ML学习/index.html","5bd5016f71ea226ece368172b7319c2b"],["/2022/01/30/typora解绑后出现问题/index.html","b349203bba49af4d86614d0c6789def2"],["/2022/02/03/NLP学习/index.html","8718a3081cd6a7079fd56112c3abb744"],["/2022/02/04/Web漏洞学习/index.html","95e1e31b7dc66131ca67a4875be6110a"],["/2022/02/04/pyqt学习/index.html","f7bfeeeb6aa63c21ec0ed013cb7fc658"],["/2022/02/04/python爬虫/index.html","7308dadfdad85e1572f6c52f3e392747"],["/2022/02/18/Electron学习/index.html","9ac6b55730225be98d993a2454a225b9"],["/2022/02/22/疫情填报字段解析/index.html","cb25ce5783d7cf2a5c3749ccfab882f1"],["/2022/02/24/Bomb-lab实验/index.html","66cef267171aa58e08c8c3cfe35c5f47"],["/2022/03/05/nginx学习/index.html","dd44bb9b83a37141c21ef27e627a97f1"],["/2022/03/09/汇编原理课程学习/index.html","ee2dd518d33e2f8857b4a791e2255ef2"],["/2022/03/11/Keras学习/index.html","8e3ceccd73020bd2fe2fefa9c29dc66c"],["/2022/04/01/graphviz学习/index.html","39b4695825095bd32a319139cf585b37"],["/2022/04/07/django学习/index.html","709b51f1ae0ee6f8f3443494fb9b1961"],["/2022/04/11/密码破解学习/index.html","f3bfc41ba1c85c6171be83b14ecf61a0"],["/2022/04/12/flex-bison学习/index.html","b9c873de80f3db52c534bfb901e010ca"],["/2022/04/15/pytorch学习/index.html","7459fc8b9c818866a8a36243fa3e7387"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","a4d3f4b91b44930f8af32e31e5566303"],["/2022/04/23/写一个音乐播放器/index.html","45bb586eecea872b412ff81319b0a9be"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","d64e981fa462a95fd25b632ea115f1f2"],["/2022/04/30/GAN学习/index.html","4bca6ce074332c166a1de7e76dd40d83"],["/2022/05/02/html精学/index.html","a54705af006ff2dde00fff3f819ed597"],["/2022/05/06/write-a-compiler-by-yourself/index.html","31a2e248f3867b5c96badead97158641"],["/2022/05/30/acwj-01/index.html","57d26d2320a7d453a5c951c34d651478"],["/2022/06/14/animeGAN/index.html","00f1ae92e3cc65d82af1cb9c70fe91b9"],["/2022/07/09/c-与算法学习/index.html","d68da0eadf6e2a6cf86793fec8377f8c"],["/2022/09/19/flask学习/index.html","2c3f0fb2147c809de614cde524f941a2"],["/2022/09/22/cs224w学习/index.html","7990896db501e7adf549003ca7a8facf"],["/2022/09/28/记录一次wp重装/index.html","7b082b1a2335ea6272114596c4a9b3c4"],["/2022/10/01/Obsidian学习/index.html","709de51d815b4eaad8f4d10296ef7e4a"],["/2022/10/08/vue-element-template实战/index.html","7acd1e456edb3d456adf56ba59afad98"],["/2022/10/25/vue网上商城项目/index.html","9666523954d7e57d5c9eba66953c870b"],["/2022/11/11/leetcode刷题记录/index.html","6f76353fd97b7e5a743a2869f5de9773"],["/2022/11/11/使用overleaf优雅地写文章/index.html","f8241377d6d6c46930b1e0dea2aa1fa0"],["/2022/11/22/磁力链接与RSS订阅/index.html","f6fe9a1467cfab77e6968a9967b05a8c"],["/2022/12/11/uniapp申请获取地理位置/index.html","b5a25cc629f02d22672d0127fc379558"],["/2022/12/26/pr剪辑学习/index.html","df7e870ba7d2921e54bbfe9f9dae5b40"],["/2022/12/27/css中的flex和grid布局/index.html","87dd0d4a70ed63fc7f3da0c2c786e946"],["/2022/12/28/Flutter学习/index.html","4ae73d7c827c5efa03af6d0150ce2e83"],["/2023/01/01/美化github首页/index.html","8c7c479da95bff83988f3d5854061284"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","458aa9c033a54af28d89eb943d6501b2"],["/2023/01/04/构建微信快捷发布文章工具/index.html","e3182fa4595bd12bbeecdb7726a6c7b0"],["/2023/01/14/dart学习/index.html","1ad134aa97016d389e7c89803ebd49a6"],["/2023/01/23/闲置服务器BT下载影视/index.html","5d887089ad400d722beda7f38d9c9efb"],["/2023/02/07/TotalCommander使用和学习/index.html","98b390f9db5c851582c378b751f5b80a"],["/2023/02/13/docker学习/index.html","abcccf7570fb49d2137c0c7435c37adf"],["/2023/02/17/DLHLP学习/index.html","54bf478b86895f7653c20ce6f6d6af22"],["/2023/02/18/学习purecss构建自己的css框架/index.html","4f0360d3391b371a8e6b5d97a3e3ac1a"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","87c0c454532fcbb7073d8718f0bee3d0"],["/2023/03/05/STL学习/index.html","23aecaba11f5b5f76dc74bb26e73974b"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","fe58408c3140f15744f057a385469b21"],["/2023/03/23/实战写浏览器插件/index.html","8def4a103c784a41cf900c5419ac8144"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","209476da32a7efb0723ba46c127d8ae2"],["/2023/04/02/EndNote基本使用/index.html","ea610f70ac921a61d1ff75b587dc2fb8"],["/2023/04/04/mne处理脑电数据基本使用/index.html","2cf4fb083a3019aa6104b6c1946938af"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","f00959f2f98250fd5ea50059f84e098c"],["/2023/05/02/python中的logging模块/index.html","18614ecbe55352699224e9535d6a3e6c"],["/2023/05/07/python的特别方法与装饰器/index.html","1c03cdf435abf86252aaca90a5e9e1c1"],["/2023/05/20/Wox插件编写/index.html","14242ad219133fc37d6dbd3e69076689"],["/about/index.html","3cd33c426e56c60380c0a6c9b09da041"],["/archives/2021/04/index.html","4d7b83afaf7cefc4e034d21ac0b9b1e6"],["/archives/2021/05/index.html","19b79d3d94db548a7f5d829d10259d51"],["/archives/2021/06/index.html","efa6dc50c79cedab3a1e51f75b1386d6"],["/archives/2021/07/index.html","b0a4267da855d671dc3fee016ef04a2d"],["/archives/2021/08/index.html","edd36996d0c0b701e27d390e6815d19f"],["/archives/2021/09/index.html","9eff5b3dfc0de40fb67122edf86b648f"],["/archives/2021/10/index.html","9b47c056d364cb7d979919250e42f462"],["/archives/2021/11/index.html","420b8b32c320727209566f0c76c4f800"],["/archives/2021/12/index.html","2b83eb2c665e1042abccd20f5b8e2dab"],["/archives/2021/index.html","4feb0b30468d40de10bcbd39ab999192"],["/archives/2022/01/index.html","01532aa7912300178dda9542ab3ed404"],["/archives/2022/02/index.html","aa222cf9468a2e41e2eed2ffbf9499e6"],["/archives/2022/03/index.html","83c0852fe6821ef6691979b9290f95c3"],["/archives/2022/04/index.html","7cd0ef560dc5d3993938fbb30781755a"],["/archives/2022/05/index.html","d6457d5a9c219c859ef6708ccde6be2d"],["/archives/2022/06/index.html","f104f72fc43b5ad6e257f39393f410e0"],["/archives/2022/07/index.html","49fd564110a2f29ef8626e8239ea3935"],["/archives/2022/09/index.html","4e86e7370898f562dd685cd567dc27f3"],["/archives/2022/10/index.html","f6d67214180a2c7f0210c2af5ad7b648"],["/archives/2022/11/index.html","8c3318563a90822c7cf2577826be0143"],["/archives/2022/12/index.html","04c05d9751145ba4e19ea54d7977d0d8"],["/archives/2022/index.html","fe73dd7b0ac68c2d8eba13b41c49fda2"],["/archives/2023/01/index.html","afdf8593c328b6e3bc549d99511b7ecb"],["/archives/2023/02/index.html","7659e8a25546fc5f8c456defd4d7915d"],["/archives/2023/03/index.html","56deadf01eafbd6393ac112cdf9f4d38"],["/archives/2023/04/index.html","e22dec28afb08c91fd2ab17e219f93bf"],["/archives/2023/05/index.html","2cebe6e686fb70cb30e4979e6449d114"],["/archives/2023/index.html","5868c7b111a22b6c0a7b5204dd86140c"],["/archives/index.html","819fe5c99ec093867dec03c167ef20a0"],["/archives/page/2/index.html","d411924469855374b638c96a41cea25b"],["/archives/page/3/index.html","0aa7f7babff6c07ab1bc9699f686504e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","a7a29e10ece75eaa78485a83150d2a30"],["/categories/Linux-study/index.html","7d1516f522ee98a35993ff287d175c38"],["/categories/ML/index.html","4f774a0a4315675da98fbca060a703f4"],["/categories/Nginx/index.html","72f51eba8b4450abae8782fc2442211b"],["/categories/Spring/index.html","dcbde9edfd2d21f032ff6486e8ca6490"],["/categories/course/index.html","bbb7b96ede01abc92dbc91c670470ebe"],["/categories/django/index.html","3c95d98c86202b6e0bae3e10a1798766"],["/categories/fun/index.html","6b2bff338064584e2feb0208f1ed5cd1"],["/categories/gcc/gdb/index.html","f40d0cacb9be02e152eb62b1e9585bcc"],["/categories/gcc/index.html","f63eb3b6a3b56aafb355f8617416974c"],["/categories/index.html","dc021706f7d6ffad4a9b3935c2daa022"],["/categories/java/index.html","ca0345cad0049a5374a99fe44b31b245"],["/categories/latex/index.html","b916581e786dbb3d823b8f76b20069c8"],["/categories/python/index.html","6200e925703dc531ba18ee8d62018ecb"],["/categories/study/index.html","16439dcf39aa20657795e3c90bb736f0"],["/categories/vue/index.html","4bb4095bb4c0c99260bd2bdfd783bda5"],["/categories/误区/index.html","115179431261ae14fe0ef1b290af05e8"],["/commonweal/index.html","2d494d60f7e2345062225937fdfff84c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9207c8b0006be3bcd79f7e43952f26e4"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","315e1b3ff4e8c3b60f435f4975732351"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","a13c06ded63f14efe687c63b66622ba6"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","9d2364ebe93b12406504a4c7e3caaded"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","61631f86e24497d5b6f5b59325551de6"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","7be8873391197b23f8a187182475ef73"],["/page/11/index.html","16784a1154f5c8fc77c0d4c412954414"],["/page/12/index.html","384370fc9347e660ddd7aedfa0802c8b"],["/page/13/index.html","666d879841bff3bf28e87ecf6a36f1dd"],["/page/14/index.html","122d2ddbb02657a348cdbff0507b73d7"],["/page/15/index.html","4880e81ffd61648e0a5fdf0976c6a4eb"],["/page/16/index.html","5805aa0be91caeed50797cb6e8df4e0c"],["/page/17/index.html","646676b84adfcb0d93fcc5b4ee55e5a5"],["/page/18/index.html","cfe476c6e19722ed864b6032ec9eefd3"],["/page/19/index.html","7e974cf66d01025a0864d12db77bdf9e"],["/page/2/index.html","5f0e2ed10efd20973d344785e9f73a37"],["/page/20/index.html","3b3273a06052b168530ab03af4b3a988"],["/page/21/index.html","00f64eb6f54b84d6285e0ab3088f0f2a"],["/page/22/index.html","6b68d2835e5339038fa1ae4e7ada541e"],["/page/23/index.html","53261f551e1d946d0eaa17edaab483cb"],["/page/3/index.html","3f0ea2a4c5122f3606bc388cced5a614"],["/page/4/index.html","a8da88036d630fe0110cf556f4fa1035"],["/page/5/index.html","a94132c80855c365be688293fe69dbaf"],["/page/6/index.html","755f0e90b737e3237be82c2f2824af83"],["/page/7/index.html","3204ed152167d9e3a40e70ad4690ac10"],["/page/8/index.html","dcefc911e1cdc3f8ff1d2c1bebc20dc3"],["/page/9/index.html","b01ded88d64a69fde64e972a069f2fff"],["/resume/index.html","9a6ea0c40697641c3395c13fdc9efa75"],["/schedule/index.html","945e97bdf8c463709b713056b1267e77"],["/sitemap/index.html","169a1502b38acece417340bff087288c"],["/sw-register.js","a837503c74510ae29269ef88511077c7"],["/tags/AI/index.html","55371450aacf99847c1e254797964a46"],["/tags/BT/index.html","29856786cd255ab03115c2c84ef7ff2f"],["/tags/BaiduNetdisk/index.html","fd1c15f3ef7ff031d975772c317a2fd4"],["/tags/Bootstrap5/index.html","ce4b8fb191e93fe23410b9178f436438"],["/tags/CSS3/index.html","e6765389611d0c3f53776f6c6d5c3214"],["/tags/Centos/index.html","1a649974047415a3d8079fc0bda9af17"],["/tags/EEG/index.html","f48b4612cbd47ea29aaddf4d8727589a"],["/tags/Electron/index.html","079389f9c7b6b956e5d57ba0718af62b"],["/tags/ElementUI/index.html","1f2e521401f1936c89852b8f91887c89"],["/tags/Flutter/index.html","93b006176ee2840735e283db1f4b7403"],["/tags/GAN/index.html","d3d1b1d01787c7220a4d95c01933c7dd"],["/tags/GUI/index.html","0bad5c3510e46cec83ef1f1d5ed3db51"],["/tags/Git/index.html","79cc0c363d28494b786e2c8aa6c4e3a8"],["/tags/JavaScript/index.html","15accbc239ea29aee5c7673eab27e299"],["/tags/Keras/index.html","af64383843a84b76d124affecfcddbc5"],["/tags/Linux/index.html","008a863831f14ae12899d0733d452b9f"],["/tags/ML/index.html","7dcdd2c8327ffadce30741ae17cfbd90"],["/tags/MNE/index.html","4cf0e0a1eb82bfa970eb108e6b6674c7"],["/tags/NLP学习/index.html","400bc58262259e7ac49e3342f3f75466"],["/tags/Nginx/index.html","280ef8e504f324d6e6801850015ed827"],["/tags/OSS存储/index.html","cdf781206013da304e54e286dab48f5f"],["/tags/Obsidian/index.html","69cc8fdd01f90d3edbaa0ddbfeae23fd"],["/tags/Qt/index.html","165d1604b83106e9381549ad8108a2e4"],["/tags/RSS/index.html","f1db741d1379bbc61878d73f839e7956"],["/tags/SSL/index.html","bcd53349ecc63e07ae48f9020cb4278c"],["/tags/Scrapy/index.html","25a06fc5fd5d3c8bb23f402376afd6d5"],["/tags/Speech/index.html","260959c5deff117deb6fcd46dbbb0df5"],["/tags/TotalCommander/index.html","cc7a31e653c3ab8b798df91f7c0dd28a"],["/tags/Web/index.html","edcd1c66a2d4d7b567ba680d2c5979b4"],["/tags/algorithm/index.html","9770515bfa65c37543ec4d762f95a203"],["/tags/bison/index.html","711bb3fb3a95789c78a56dddeaab1b67"],["/tags/bomb-lab/index.html","a237c6058502d3458dbe5289ec9b340a"],["/tags/c/index.html","d9baa4ebec112bc6109ba84da00f95e3"],["/tags/cheerio/index.html","0c4599fc1ce16e3b6db3bad68b4241e7"],["/tags/codewars/index.html","efefe50848f2cc4f29987fe7cc71e885"],["/tags/compile/index.html","541f5de7e8da1e2fa41de78edb9861e4"],["/tags/compiler/index.html","9e05e26a892f6de75a37b729f4d01a41"],["/tags/cors/index.html","d06665ffabd12368c282137635a7bf48"],["/tags/course/index.html","3166ba419951dccb719fb79f40a7b638"],["/tags/cpp/index.html","8cb7241193fbf1cb228cd338c99f46fd"],["/tags/crypto/index.html","b196ba63a9443c8c19071bd0c240b0db"],["/tags/csapp/index.html","d060c73ce21740e5e9b2b29a5c05cba7"],["/tags/csp/index.html","9a8d387a1c1761c44c772517feb534d1"],["/tags/css/index.html","8ed729adea5ba3b4b8563d62eaf53055"],["/tags/dart/index.html","9f332d7c38a07aeca861e87b334dbddf"],["/tags/data-structure/index.html","2bac3b98d8f322ae1bf5425c499c68ca"],["/tags/database/index.html","ef98b0d21cbf76646ed44dee88b66972"],["/tags/deep-learning/index.html","9154210467ec3e73c0a62002715a586f"],["/tags/django/index.html","6eb6278ff1c190a20d23eb37096b4b7a"],["/tags/docker/index.html","abac404457644863abb4037c3f5ceeba"],["/tags/dwm/index.html","dc79d8cec3fd3e438bb207f912dc331b"],["/tags/exercise/index.html","ae1a0aa07d7bfb38a4e4d3a437886075"],["/tags/filebrowser/index.html","95c95091a7ae54ea2849d9a127f5bcec"],["/tags/flask/index.html","95c6fa37099f7020126aff9419bd50ef"],["/tags/flex/index.html","69570c907669d3dff338b94b3b55d0fd"],["/tags/front/index.html","bbeffb2e08bf3daa55eb6195f6a049a9"],["/tags/gcc/index.html","97bad4e25c78a2e2934718d5d4a2aba7"],["/tags/gdb/index.html","05c92377dab35c08e127eab3bd2429b6"],["/tags/github-profile/index.html","101d07fd237b598f5733b6c1a65b9d5e"],["/tags/github/index.html","b8956aa46c10cfba8b36ac07069f05a1"],["/tags/graphviz/index.html","bbe804136e9483e1b5374223528a05c6"],["/tags/grid/index.html","a7501d8b83aeb9d66def917a9635b7ee"],["/tags/html/index.html","b1f4d9ada35db81dbfe1643015e9a1d3"],["/tags/i3wm/index.html","ba35abaf9e27c7d5188c521fe578f9ec"],["/tags/index.html","cc5074790631d3fd4a5f85be335f30e9"],["/tags/issue/index.html","e1b6dfb4d9c3329d455da3ae32b1af16"],["/tags/jQuery/index.html","f8089013c69c7885594fa07a5106ae71"],["/tags/java/index.html","3dc132bea54b30de2f5feccfee9060fc"],["/tags/js/index.html","0e1a467a89de2d9eb9aa1ca4411ac214"],["/tags/latex/index.html","ad0a964e90023c5ebad0cc3aad9af9cb"],["/tags/leetcode/index.html","f0427bc3a6ca6a3309094feb17985561"],["/tags/lex/index.html","8a0e26fb4d252a480dbdeaf40041e670"],["/tags/logging/index.html","e2f073a41f418a2fa812216e5e04f829"],["/tags/material/index.html","8af8826f381dd257491d5de1dfa406f6"],["/tags/music-player/index.html","143821648a3efb02c4edc1c31d9b7982"],["/tags/nodejs/index.html","23f42fbd2d5db6dbf7ddaf6e2acc7fb0"],["/tags/noj/index.html","21b098e1414c4488f7f16d03652dd2dc"],["/tags/opencv/index.html","f881ff22337a91508653327ee5b41946"],["/tags/overleaf/index.html","511a289b41e7c14e3eb6eed905a8f1c7"],["/tags/pandas/index.html","2de1acbad4f849dec0697ac9734f49ea"],["/tags/paper/index.html","3f3f506988dc62b363f4566cf2dc3ef5"],["/tags/premiere-pro/index.html","1123106fc0dcfc5c35f093c546f9f304"],["/tags/proxy/index.html","e3970e0aebd7574591bcf1b406ab69a5"],["/tags/pure-css/index.html","0fccfef4113b213a06b5d7f3d0b6d6f8"],["/tags/pygame/index.html","5735c2755dfcdb92d66890cc8697f07c"],["/tags/python/index.html","1e0f891516def866b2df27ae77dd6c04"],["/tags/python/page/2/index.html","d766c7d6e001c2423d4c852981bed0dd"],["/tags/pytorch/index.html","d89176ea35b2cfe60f67f268077d170f"],["/tags/reading/index.html","8d04845a9239d36689b05febe31e7122"],["/tags/request/index.html","2ed1280351ca9cb66730895c4f38a971"],["/tags/requests/index.html","60f28abcbc20912e7e3f22e37c3bfe8b"],["/tags/security/index.html","b4d4475af1e0bbf47d813c8c7de83c9c"],["/tags/shell/index.html","2c05c3994005c842891e92fde93a67b9"],["/tags/sign-in/index.html","3556604491092ce47336f2bb58bf1b83"],["/tags/socket/index.html","1723e8751bc2d8d0397429f535a33503"],["/tags/spider/index.html","9abb80d41d1e0c2d93dc8ff14ee4916b"],["/tags/splash/index.html","831ab61bc1c09c124b8ef5c96123c507"],["/tags/stl/index.html","3b4d86ff3e7fb4487324614fb1cfba70"],["/tags/sumatra/index.html","40179f58f1bd60fcc9ac4805f189443a"],["/tags/superagent/index.html","808afaf47c5330a35bdbde9652a6a5d2"],["/tags/tensorlow/index.html","8d83a2ea79e2b02c2594351c37d5de5e"],["/tags/tex/index.html","c9d4e99b9436ac59e8a4d3b6f8b5b4ca"],["/tags/thesis/index.html","cab589172ab130a873241eccd0b723d2"],["/tags/threading/index.html","d8b69d4a6283f707d9e10bf86adfea7d"],["/tags/tkinter/index.html","409fb8a9c2e51a69578dc802e36f31d7"],["/tags/torrent/index.html","1700fdbd75a1ad304313291e7d5e43f8"],["/tags/tutorial/index.html","28cb44861925dcde44c741a70556c6bf"],["/tags/typora/index.html","1fa7a3cc5a802f2b7b29709666f4569c"],["/tags/uniapp/index.html","857852e72a4c2a487ec486c232b24b08"],["/tags/vite/index.html","756a1315416e497c5081b0fe1722d181"],["/tags/vscode/index.html","f4f9756806ce56c5e402806b8541d508"],["/tags/vue-element-template/index.html","c927c6e7460954656bf640c769dbf3e0"],["/tags/vue/index.html","6d1adb7f2263cacdc0360b1c61c0ad65"],["/tags/vue2/index.html","09be291add55be0173972a3589b5c3d7"],["/tags/vue3-x/index.html","761e6ee5b6016eca803c29ab0010dbe1"],["/tags/wechat/index.html","3c1a2dd6e205c554ccf0c7a5c33c4614"],["/tags/wm/index.html","32b852b190ee81f049a440e3c5bb0c01"],["/tags/wordpress/index.html","ba3bed356144b8bf698083e1088da6e7"],["/tags/workflow/index.html","794a3f00d09d505fa6d9f5bb17371634"],["/tags/xpath/index.html","bdc98b06c79228d780cb75025a29ea77"],["/tags/yacc/index.html","a154ce26bac665e7600b4f8322ed5bfa"],["/tags/zsh/index.html","831c5384ba0298b940de82a70be0ca90"],["/tags/七牛云/index.html","727857520f2599775f24e02f7642017a"],["/tags/函数/index.html","9860e0dcb037dc23e0ec1397dbf620c2"],["/tags/剪辑/index.html","240ae5fd2f6ee9cc58b9410d74484137"],["/tags/存储/index.html","db831e1055e57026433198dc55b12550"],["/tags/实战/index.html","74fec904d72e17b086f176d9ec90b9d8"],["/tags/工具使用/index.html","a14e42e881c0e0dd310b042fb1834bb9"],["/tags/建站/index.html","bc68e6494e4a87cfd8771eafb30d7337"],["/tags/微信小程序/index.html","3910e140c399e14f50b6fbda935b3a06"],["/tags/指针/index.html","c7c2ed822241dda3830822279c20961f"],["/tags/效率提升/index.html","5699ad016e42713e30857521e62d4147"],["/tags/日志/index.html","9116328d2eb7b7c6de7bc5b705c3b49e"],["/tags/汇编/index.html","c777325864cf25477f847b243e0eb1cd"],["/tags/油猴脚本/index.html","29b5923ed4ba93795f60ac5c0b02a1c7"],["/tags/浏览器/index.html","8b7b881e391abe1b4bc3f53b06e3a28d"],["/tags/爬虫/index.html","28fdbc47514ec6284765fcf737bb6ca1"],["/tags/算法/index.html","c246fa0d260e826a2c9e32efc68973d1"],["/tags/编译原理/index.html","aded32950fb04645523a62f2574e6c87"],["/tags/获取地理位置/index.html","ffa60f7621d0002519d896d6d38cf06f"]];
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
