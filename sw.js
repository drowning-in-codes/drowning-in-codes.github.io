/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","e2bc2f60affb60fbda846744adb1ae21"],["/2021/04/20/稀疏矩阵/index.html","c0bdbd77ca73678fb00fc50773f7a5d0"],["/2021/04/23/广义表简介/index.html","967c8c15c556212e7a8dbf66e7f01fde"],["/2021/04/29/关于指针和函数/index.html","efa56d5ae8f1be577681d716294628c6"],["/2021/05/10/哈夫曼编-译码/index.html","fae7da888a79918c05ae41067d63bb9c"],["/2021/05/17/数据结构noj_2/index.html","9db1df38bfd8fab3b885af6ca73caa32"],["/2021/05/30/数据结构试验/index.html","31e53218a12bbeb471439ac763601e79"],["/2021/06/12/数据结构noj-3/index.html","3445242b233fd34ec30f3c36290bc85e"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","5333859a4bb7185610480e3d42fc3970"],["/2021/07/08/课程资源分享/index.html","bbc3e6448c1d3aeda1e111a4a3a29a1c"],["/2021/07/20/Scrapy-下载图片-文件/index.html","e655b1120e72a85c92f57c847dc13092"],["/2021/07/21/Scrapy-动态网页爬取/index.html","9cd8c256d4473ec14b2d2b51d05b6943"],["/2021/07/21/疫情打卡/index.html","b5976a288059a7f39a6e42541ab3dd73"],["/2021/07/29/Scrapy代理设置/index.html","f3d3fcc37d503c6c6146abc1d474a797"],["/2021/07/29/数据库认识/index.html","70233873250aa07c835fd1f22d01bc4d"],["/2021/07/31/Python多线程学习/index.html","166ef5873481e1aeffca54455df55d0a"],["/2021/07/31/tkinter-requests练习/index.html","e238af2b435aa9621a5716ef8c722281"],["/2021/08/10/Git学习/index.html","96952b5071dd98458ce3d8d8595e9dae"],["/2021/08/15/pygame实践-1/index.html","33111bbeee8eba908c3ee541e234f732"],["/2021/09/06/微信小程序开发/index.html","1a80c4039aeab43b7aa59cebfa56725e"],["/2021/09/21/命令集-1/index.html","9dad96ae7c1bea00824e7e9d67557a63"],["/2021/09/21/命令集-2/index.html","0213e6d3ce955c7e2199f9ae77c0905d"],["/2021/09/21/命令集-3/index.html","a8df8f24269ad2a9ab0db0a08b2b2fdc"],["/2021/09/21/命令集-4/index.html","ca087efd9c20f6852b0ce4d807c0c251"],["/2021/10/03/socket学习/index.html","e05e7a4572de2aa9873cec17a4c00e63"],["/2021/10/10/dwm入门/index.html","7b8246b56a48329968816e2d1e39e0d6"],["/2021/10/10/安装ohmyzsh并配置/index.html","fa1c31e699890f7aeddd588312188495"],["/2021/10/20/css学习/index.html","8bd2c1ef04ad920a60d03f5a631c5cf9"],["/2021/10/20/wm入坑/index.html","94a8531be1163ee3b6a253c17e7d034e"],["/2021/11/03/微信小程序学习/index.html","c88a6ee8d5c1edacf50d0154086f18a1"],["/2021/11/04/css揭秘/index.html","713ea1a9403e089fd2cb645ec1c095b0"],["/2021/11/05/css-练习/index.html","957fcad7a7d071a960a705b4d3eca474"],["/2021/11/21/命令集-5/index.html","8a8390d83785c723091208235df598fe"],["/2021/11/21/命令集-6/index.html","5935a6ee0a532d0dc274d156f7928a5a"],["/2021/11/21/命令集-7/index.html","42dc85c591a8d4ce922dc3b521c3e13f"],["/2021/12/01/搭建wordpress/index.html","e587fd81b17dfcb3d6e34745a8a5e57d"],["/2021/12/08/python操作百度网盘/index.html","788c33e41004dac553d8732f21dc8114"],["/2021/12/14/js爬虫/index.html","566825639f872de5851ab31375dc1793"],["/2021/12/25/为网站申请ssl证书/index.html","0f0400064ce6051b6abc08d24beb29be"],["/2021/12/29/使用七牛云为网站提供服务/index.html","34973b844a147441239891aef3628640"],["/2021/12/30/jQurey继续学习/index.html","ae5ce875ac46bf4b004234ff7d2330b3"],["/2021/12/30/jquery学习/index.html","82605d53a4f282b64baa506fc3545dfc"],["/2021/12/31/vue学习/index.html","83010b7e0ba6e32697a4d5ec0f85f48f"],["/2022/01/02/疫情自动打卡/index.html","939ee7c5b6e262d69e46fdf1c1fc2c49"],["/2022/01/03/javaweb初体验/index.html","ba42ac987812d6ef2374c7952cef885d"],["/2022/01/04/codewars练习/index.html","38bdea4c31c01dc1e31c0aefae272c63"],["/2022/01/05/Spring学习/index.html","e27de605c6dff387b33c00bb8ead9c63"],["/2022/01/05/vue实战/index.html","feb244aa89407ab7b3e47be75b6f6103"],["/2022/01/08/gdb-gcc学习/index.html","a7c6e2ead7bfd4947979891baf4ba5ce"],["/2022/01/11/python-opencv学习/index.html","c628fad5606da83edbc184e1752ebfdd"],["/2022/01/12/汇编实战/index.html","2c65b13d621d4320e163c5965d80e833"],["/2022/01/17/pandas学习/index.html","89c62305fed5b3c30673810c8d4d3cfe"],["/2022/01/19/可视化图的工具/index.html","6d6030b2082177f5f9a832adfb273695"],["/2022/01/19/机器学习入门/index.html","5cede67e330e260e246dc46370e49edd"],["/2022/01/20/cousera-ML学习/index.html","ed26a0e39740f4595f11febd3e794fed"],["/2022/01/30/typora解绑后出现问题/index.html","c8656a49107b43f2d8459d48d468da89"],["/2022/02/03/NLP学习/index.html","eeb393a9db6bf92c4c0a71d19e06431c"],["/2022/02/04/Web漏洞学习/index.html","3008dcee97efc3a0bfa1a896ec96970a"],["/2022/02/04/pyqt学习/index.html","49cbb85e1c2d30764c470d1b3b73c19b"],["/2022/02/04/python爬虫/index.html","5dec91a4ed09f86e96e5e23b616b6769"],["/2022/02/18/Electron学习/index.html","ea0a025bfeb46cacc690f8e5a0ad30b4"],["/2022/02/22/疫情填报字段解析/index.html","444cbfb8e55a9fa765c646d542938cbf"],["/2022/02/24/Bomb-lab实验/index.html","51aa068a5bf7d29c591d8d767a4b6932"],["/2022/03/05/nginx学习/index.html","0b78d92bfa97812068f81d40b7293d2e"],["/2022/03/09/汇编原理课程学习/index.html","4911312a310846f8885cb81b29ee0204"],["/2022/03/11/Keras学习/index.html","b7ea04eceda875f620aaf8f3da8bbe24"],["/2022/04/01/graphviz学习/index.html","49526545806bf5d79bbf3c518974ba2b"],["/2022/04/07/django学习/index.html","cd47535e7eb105b4a8acf11e7e3ab425"],["/2022/04/11/密码破解学习/index.html","42de5382bad66e9370b15f6f7c73f1f8"],["/2022/04/12/flex-bison学习/index.html","1cda8ffa94a562fb93f03512b413c713"],["/2022/04/15/pytorch学习/index.html","935b9c3ea1abb774b2e8f1b8604f608d"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","927a48fba129c767c69e028ed709f89b"],["/2022/04/23/写一个音乐播放器/index.html","73c6eee0ab02f4bc26a45de2fafab2c0"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","2544490f0855ed06cd12610f257f6395"],["/2022/04/30/GAN学习/index.html","4714c745188a5ee24007f047ac32f0e0"],["/2022/05/02/html精学/index.html","233d1aa9cfee38175586d7b0be4083ee"],["/2022/05/06/write-a-compiler-by-yourself/index.html","f1de3d3ba9d9b66e369190f3dac2766e"],["/2022/05/30/acwj-01/index.html","98562ddace4e93f15111aca7e8045342"],["/2022/06/14/animeGAN/index.html","ac856d45c5671f52d4d65d0fb3df1c0c"],["/2022/07/09/c-与算法学习/index.html","277ba8d9d889ee08627f83ad0c91246f"],["/2022/09/19/flask学习/index.html","096e88a6a4cc878fa075a0a1530ffa6b"],["/2022/09/22/cs224w学习/index.html","121e505d187419ad7beb2c6c9b11055c"],["/2022/09/28/记录一次wp重装/index.html","5e6843cdb74ca537710c98806e2c4c9b"],["/2022/10/01/Obsidian学习/index.html","d142e794d4f901f427f77bdd9ce64190"],["/2022/10/08/vue-element-template实战/index.html","f709aaa903d8e2b214e5b1e74d2955e5"],["/2022/10/25/vue网上商城项目/index.html","4cfb3a1216414f34c7359df0e25b6bdd"],["/2022/11/11/leetcode刷题记录/index.html","b303f79885eb46abde49d3ccbb08ed1c"],["/2022/11/11/使用overleaf优雅地写文章/index.html","baac147dbc2be28733e3d70900941893"],["/2022/11/22/磁力链接与RSS订阅/index.html","917086a8e5e90705d6fcaa6c33ef9335"],["/2022/12/11/uniapp申请获取地理位置/index.html","14a7ccb5cbdcf6915f4b546ada5eefd5"],["/2022/12/26/pr剪辑学习/index.html","5ea11dc487f9fb585c2cc15381f9807e"],["/2022/12/27/css中的flex和grid布局/index.html","07d80a57bd841a67003b617f5cbf9d09"],["/2022/12/28/Flutter学习/index.html","005ffb8a2d6125e49c8eeb90424c07c1"],["/2023/01/01/美化github首页/index.html","1c94ae82cb8c46533007de075e86f485"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","b297fe314a7455c11a401cabbb39f303"],["/2023/01/04/构建微信快捷发布文章工具/index.html","5046bd186ebddb087dbeb18200229c14"],["/about/index.html","3f9e9572e3b1d53a15bee37801a9adbf"],["/archives/2021/04/index.html","3632a7b9ba27826cb6b5b200884ee5bd"],["/archives/2021/05/index.html","65f5a56efd324aa4d9b4dc5542ab1fcd"],["/archives/2021/06/index.html","9c87c78c134248e527ee87b849ac253b"],["/archives/2021/07/index.html","bfbe980e4ca2c2de69d5c2492ba34756"],["/archives/2021/08/index.html","1a7bf308563eb00f718ff409e94c0300"],["/archives/2021/09/index.html","5f8bc63e26e97bb482e9b6fd56e819dc"],["/archives/2021/10/index.html","15251486ed9e77ea447dc4f3190a4a6a"],["/archives/2021/11/index.html","879a165b8ff1e72d74e0ac903f4aad46"],["/archives/2021/12/index.html","8cb584feaf25954003b7ef90c07b6d19"],["/archives/2021/index.html","2214706bf72ae8a0f5dcb54dbf270d2a"],["/archives/2022/01/index.html","f7beaf604451373c97330ea4a5c45442"],["/archives/2022/02/index.html","9ac7ae7bea70c1cbc09504bb5502e85d"],["/archives/2022/03/index.html","707c27a451be68f182d6682b3f170616"],["/archives/2022/04/index.html","31a41da897f35a5610d2357374afac87"],["/archives/2022/05/index.html","ab23545f60a3cef22872b2e3484f5ff1"],["/archives/2022/06/index.html","989f42f9c9385ce4a758a2fd67fa9db2"],["/archives/2022/07/index.html","494f51729816361c7bdd0491f2c097a6"],["/archives/2022/09/index.html","388fab336aa8b79b730b904a14ef0ca8"],["/archives/2022/10/index.html","d56cc2b9e87d2f5e0bcd746930a838d0"],["/archives/2022/11/index.html","967a4b8c2ecfe62db4f5f4c5a17e7bdb"],["/archives/2022/12/index.html","e93985601eca0252e1c86d5bd464bf4b"],["/archives/2022/index.html","35def6724790c65f8be873c91dc05160"],["/archives/2023/01/index.html","812969fc2403d9ede0d0a0726d9e1fbb"],["/archives/2023/index.html","ea1d4363ceb055b24c127044f4754308"],["/archives/index.html","0148dfefb5ed80a16f588b14fecaaf65"],["/archives/page/2/index.html","7d3f5b2c3aa3f9d4b78423b5218bdaa1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","55fb4f4e44c4f82cd4890a4b5d8452ad"],["/categories/ML/index.html","f2e8c59d0807ed6d2446c6edd55044cc"],["/categories/Nginx/index.html","d9df66e7643d990ab5bb8728216f2a71"],["/categories/Spring/index.html","6253a1e71cd780b6a43425f05d574766"],["/categories/course/index.html","bc2a832ba303350347d62c73b5b68a1d"],["/categories/django/index.html","fdc91b1b0cb76b8ed6e95b78a80375a7"],["/categories/fun/index.html","23db62fd190c5a42e630b6c68f4b40c3"],["/categories/gcc/gdb/index.html","112045a59185de4cb19d5e4c9ed2053d"],["/categories/gcc/index.html","085bdd0a04ad6821e6b5ec91dabe9fec"],["/categories/index.html","6b4ab88b66b03cec61bce0de70c26e73"],["/categories/java/index.html","bcef0bba24ca33c94ca150dcfb6a9c84"],["/categories/python/index.html","00d6285e4083b457fb4a2c963e8ccafd"],["/categories/study/index.html","95e7084cdd63319b97145554427fb90e"],["/categories/vue/index.html","7731e01d0332b6d47b14666ed264ebd8"],["/categories/误区/index.html","bf5713df08fc14ca381dfd25dcdc7c78"],["/commonweal/index.html","9afb7b700ba49f70369de15d3a25f374"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","bd64fbeff8ff0c793f078e2c515d9b1a"],["/home/index.html","e35f23ef749dff31007c5fcef439a93c"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","35655000115774c11517d2dd2227f4f2"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","44c5c24fb8256e611eeac7a80b3ad4b3"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","59667f1133dd9660c9bd7a7d6aff3e9e"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4a020319976dfd8ab5cd4bf275474125"],["/page/11/index.html","c0971415f499569c7c44fd482c4e91fc"],["/page/12/index.html","0a2aa0639c5dc3924c14dbd449b61f4f"],["/page/13/index.html","9579fcf1ce35f57144b16fc3762e6d9e"],["/page/14/index.html","5a52c273ce5be42813f5465dc67cddde"],["/page/15/index.html","9abcd0f24ea614cd776d5ab1a05bb791"],["/page/16/index.html","86c640f81938999caa03aa4699240bc7"],["/page/17/index.html","9e67c0cdbc8f43d2ccd7d4b47e9bb32a"],["/page/18/index.html","bf30b423d483ab10f219f23a9be60c3e"],["/page/19/index.html","5fa35f92f5ec9028840af094c0fd2c43"],["/page/2/index.html","396c312f2b351920f3e15869cda0b1a8"],["/page/20/index.html","c1cdbb866e07dd85136c81fa0b01ab08"],["/page/3/index.html","78171c7ad9b291f09c9c349135963e1a"],["/page/4/index.html","f6bb6854012121ff7e15e731112a4721"],["/page/5/index.html","552f773fe58025afe6ba245c230d26b3"],["/page/6/index.html","10029c2d98362d470cf9410836601cb1"],["/page/7/index.html","fcbc469af4e6eb04fec9ee6957448a2b"],["/page/8/index.html","e6aa08ffba7f63849349210f9dcdef3e"],["/page/9/index.html","13fe3ff1a22cf726e0acc79d98ad6dc8"],["/resume/index.html","4d509914814d454563f878e1a681637d"],["/schedule/index.html","85e8617f912ec4353f81b60e4d1db8c0"],["/sitemap/index.html","db2e4272140f29326263157e4d9659fc"],["/sw-register.js","dcca22479af6817c59621fc12e4cf56a"],["/tags/AI/index.html","ec3d1b18c715293b10fb4714b6e2404f"],["/tags/BT/index.html","de8ee1908bed8303328e25e3a7050424"],["/tags/BaiduNetdisk/index.html","30e3b6b43019fa7627275ebf465d7300"],["/tags/Bootstrap5/index.html","2560a186e72ae07756fa364715163c08"],["/tags/CSS3/index.html","b392303a4c50d1259c43c17a17205aec"],["/tags/Electron/index.html","4648381c1e67b46c57d0f892df3356eb"],["/tags/ElementUI/index.html","361662310cd61032870747cfe0085227"],["/tags/Flutter/index.html","35e86d81e15d040e5f416c8aaee3c34e"],["/tags/GAN/index.html","76493414b6740532d4b1085f9e9ddcd6"],["/tags/GUI/index.html","6767f4f3f27cb95d0df4d4d89fc584e3"],["/tags/Git/index.html","f0ac58caf3b148aa288981c0dae2bcf8"],["/tags/JavaScript/index.html","d4f6e077bbc03e4628bf5126ce5caef4"],["/tags/Keras/index.html","a230205d810164347174f2f305cf86e7"],["/tags/Linux/index.html","b74d6befa5845041b013fca485968b42"],["/tags/ML/index.html","d5ef8bbd8f9b3951351320b2ae1cb0dc"],["/tags/NLP学习/index.html","c8dbaae04dba8caad47235904fe6c84e"],["/tags/Nginx/index.html","d24e1894d7eed162bb287d1fa49b13c8"],["/tags/Obsidian/index.html","febdfe7effc64b417aaab849b6107b49"],["/tags/Qt/index.html","805c4a94c372e38a02d15bc4f1d0a0ac"],["/tags/RSS/index.html","00f7b2ad3197e8cac8c0b3c9fe8b2ade"],["/tags/SSL/index.html","49c624c766d3f00ffc8cbf0ff3713a13"],["/tags/Scrapy/index.html","77158117690794f9797e988d9286e04a"],["/tags/Web/index.html","7baabe07dface0864b524785141f1ec9"],["/tags/algorithm/index.html","8a3a03198c0ff7f862cc300411bd6152"],["/tags/bison/index.html","ad1ae1f4e09dc3af9ca91c1dae870d8d"],["/tags/bomb-lab/index.html","dcb5dd5cfe1b6ae193688cdadf1e50f8"],["/tags/c/index.html","85a1b6a490fda6d8e9d40a25f8bf70e5"],["/tags/cheerio/index.html","5589f52e9a36f7443c9f9a8cc867d9b8"],["/tags/codewars/index.html","3fe311fbc0dabd25fd2a3b8a2fa1d023"],["/tags/compile/index.html","86762310cc3020ed97f4cab59995e2b5"],["/tags/compiler/index.html","71a0fbf0da5439ccc99eb84594813dc9"],["/tags/course/index.html","0355b226e0bdd99db9ff45c306093681"],["/tags/crypto/index.html","fea1c85ea25415e3fdda132d6fc1c99d"],["/tags/csapp/index.html","be69869503500670288b6f35fd828cbb"],["/tags/css/index.html","6be1ee6d4a542eab04f3890ab00ccf70"],["/tags/data-structure/index.html","c6a45c57a17ac51e35a7d70d034f512b"],["/tags/database/index.html","449113047422576fcef0414f44e225c9"],["/tags/deep-learning/index.html","de0ab25aecd0edf8f4bb19ad25362174"],["/tags/django/index.html","11fd65c582cf301a1ccef95883e3a743"],["/tags/dwm/index.html","087b8cde79cc31c11a0086213947c734"],["/tags/exercise/index.html","a7e3638533e50d5a35215ba7fd22c00f"],["/tags/flask/index.html","d9a73bb9ab5bac457e861eb7e89cf1ce"],["/tags/flex/index.html","2bf344f02f223edaa6c7843ca33a02fa"],["/tags/front/index.html","cf72bd23bd017f6ffade2d647f185a6c"],["/tags/gcc/index.html","245b22c6959e9b8b6f7df743246626e2"],["/tags/gdb/index.html","b7550d1f237013cef16b1008f789b03d"],["/tags/github-profile/index.html","6e6fc79551622debecbad40c76379f68"],["/tags/github/index.html","8c49dd9db14f1781680d47286d9afa28"],["/tags/graphviz/index.html","dfe2bb5fc9e0b1fcf1205c342afbcd7a"],["/tags/grid/index.html","46f1fd99f6db9f65dd3099fc9eb2a245"],["/tags/html/index.html","f322224318ab38a1cdef40690e374aec"],["/tags/i3wm/index.html","4d91f0bcd7dcb603b67569666acf5474"],["/tags/index.html","4eb5a86e760836a03b9955fa503d0150"],["/tags/issue/index.html","3dc146f1cf4b1232d7df71f00351064f"],["/tags/jQuery/index.html","aa6174c496c719b8644c3466d32df3ee"],["/tags/java/index.html","e38469f94bdd96adb67a4dba0a67a258"],["/tags/js/index.html","347725bd0e14877ae45fd45b758a9224"],["/tags/latex/index.html","63fc601936b60428f29b0ddd636c38c9"],["/tags/leetcode/index.html","d101b751ad80f7fbf9aeb456594d6edc"],["/tags/lex/index.html","6999b8ceff7f0441367aa3b4c140a88a"],["/tags/material/index.html","251b70151c0980cec7696d6552778b65"],["/tags/music-player/index.html","9af586cee1f70480d23fae6abb093ee7"],["/tags/nodejs/index.html","ff032f9a6d23a223ea01eeb312aaafac"],["/tags/noj/index.html","b1c4da6f1b6150037c5c90608053dc1a"],["/tags/opencv/index.html","70ab3a0f3885285e6f50f56b81ce2b41"],["/tags/overleaf/index.html","105eef3a6f88a9cc2822ae46d1c24f5a"],["/tags/pandas/index.html","d9ac63d8b921a340331182eaadfb068b"],["/tags/premiere-pro/index.html","2c049006921aac7e2179f61ab5dada0f"],["/tags/proxy/index.html","3809e3a9e4d20660ca11d7f4ec026d8f"],["/tags/pygame/index.html","1ea6011c3dfa7546f59cb7dc7dfe123b"],["/tags/python/index.html","66c691b27d8d2a694d3e2e16569aeceb"],["/tags/pytorch/index.html","b27876568dc27ec28cbb390a6fe2e767"],["/tags/reading/index.html","c4b3d54815387e5594982538cb783111"],["/tags/request/index.html","3962a3ae5fd8823893a9fda326b91353"],["/tags/requests/index.html","4b245148e4c92ab231926ced741a0e8e"],["/tags/security/index.html","5fce58bc770be91ee68c0fa016428c21"],["/tags/shell/index.html","67909841d5b4d27ac31fc159e2a85fc8"],["/tags/sign-in/index.html","3498982cf49a85b04cfdd81169a96c3d"],["/tags/socket/index.html","c313b61f3344d915d3f01be76c71eb30"],["/tags/spider/index.html","3bd6065fe24a301d25028c1ddc64a968"],["/tags/splash/index.html","0b9967481268c1b47b94b33964b25dc9"],["/tags/superagent/index.html","a505008be9fa51070c7b90ea1cb38165"],["/tags/tensorlow/index.html","a28d348fea719b9dd70f7e10adbd80e5"],["/tags/tex/index.html","c49a707af9f1b4f8a05a7cdb144a35e3"],["/tags/threading/index.html","4809ec31eb8085335b2bcfa7873527a7"],["/tags/tkinter/index.html","73af91588dafca18ae6f070e0428ce6a"],["/tags/torrent/index.html","3098788bd13090fb353ffa4cf1d21782"],["/tags/tutorial/index.html","e4a5450690defcd48c21003103404fb3"],["/tags/typora/index.html","94aacc51784d682444b52dde5e53b22b"],["/tags/uniapp/index.html","ca003596548f831daa56a2699eb5c1b2"],["/tags/vite/index.html","a492cb7b8d800e8ae7a3f1b31928af97"],["/tags/vue-element-template/index.html","1a1840c37374cd7df6d0760e03094390"],["/tags/vue/index.html","c5423820ae03fe9fc7fc13c3ef4c7eff"],["/tags/vue2/index.html","bd24096858002afaa9a79d46d574bee2"],["/tags/vue3-x/index.html","d56e044857c50e8854ae3a5587ddf885"],["/tags/wechat/index.html","3c2c856deaf67f941627d5f1e6de6ec9"],["/tags/wm/index.html","e7c5c60c3f2b09a3957fc28689f2fb9d"],["/tags/wordpress/index.html","20d0eb0c798d1f7c9f28f07b6b6b40e8"],["/tags/workflow/index.html","3c6787d26ab9a1c753a177b4486739d5"],["/tags/xpath/index.html","75e58ae16c84dec45ebd704e07d2bced"],["/tags/yacc/index.html","c2c5b6c47dfe833e28e33f2a7549259d"],["/tags/zsh/index.html","e256a07c3bc76951beb43c2f3fe8ba6f"],["/tags/七牛云/index.html","d5b8a907b14fc4dd3e3e5bedafafc756"],["/tags/函数/index.html","545f22594a182bc5217ed1d6ef2e6602"],["/tags/剪辑/index.html","931362b410e6bd171984ee1e00d656a7"],["/tags/存储/index.html","76fc160dbd81b95d71298cbf839a89d5"],["/tags/实战/index.html","43db56d22f72890703ead1636c8b88b3"],["/tags/建站/index.html","9fb031f0178121c6c5fd3c470fb97b9d"],["/tags/微信小程序/index.html","067f33b372c3a1e3cee13894e5e52e87"],["/tags/指针/index.html","8fea89175559f2697de3fba6b6809dd0"],["/tags/汇编/index.html","c0eef58963475e96b7b748d98e3ebaa7"],["/tags/爬虫/index.html","dd64ba1881b0ebcf083dfc03a30de41a"],["/tags/算法/index.html","48f509e217f873ece0bc2df458cd8051"],["/tags/编译原理/index.html","6cb485cbf79f458e215656c47050afde"],["/tags/获取地理位置/index.html","3a450da85cfc3384ba0ad3becc52e7bf"]];
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
