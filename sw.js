/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","43e566636f4612bada828e5742e7cb7d"],["/2021/04/20/稀疏矩阵/index.html","6c80a0234396195de710142ec4aa031a"],["/2021/04/23/广义表简介/index.html","6bcb799507f6e9e6e1da87abe1ccc68d"],["/2021/04/29/关于指针和函数/index.html","d191d8d59e859b74bda929b9c595dd50"],["/2021/05/10/哈夫曼编-译码/index.html","871e1acb820c3c95270490740ac139c8"],["/2021/05/17/数据结构noj_2/index.html","a0b0047e91f31c9e222d0dd0eeb3f929"],["/2021/05/30/数据结构试验/index.html","9b1a0cc36f0251e687134477b40023f3"],["/2021/06/12/数据结构noj-3/index.html","307c9f71d5432cdc210a817013c779b5"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","e27586824d5283810e3c33d75f8996bc"],["/2021/07/08/课程资源分享/index.html","ab331a8c014bb54add2b9af1718d5180"],["/2021/07/20/Scrapy-下载图片-文件/index.html","24394c20d3bbeb35fecc9ff65d6f55c5"],["/2021/07/21/Scrapy-动态网页爬取/index.html","98d10b3a08cdf389c4fc8d1fecd7fb4e"],["/2021/07/21/疫情打卡/index.html","18be3d76928277eaa87d7978bf9168eb"],["/2021/07/29/Scrapy代理设置/index.html","aded2edd61020e27cabac8de7d31d529"],["/2021/07/29/数据库认识/index.html","251f3c5b6d3997b9dddcea65c11a7952"],["/2021/07/31/Python多线程学习/index.html","aaa36b16f346be81741315ba2af3ddc7"],["/2021/07/31/tkinter-requests练习/index.html","9e728887b9c8a086d8fd4accbe68f9f8"],["/2021/08/10/Git学习/index.html","0982db7b194e9d392fb97cd80710657c"],["/2021/08/15/pygame实践-1/index.html","669c00d37fa4284f1c122be1da17f019"],["/2021/09/06/微信小程序开发/index.html","c0a9da55eb2dae4eedc1c965457a72b5"],["/2021/09/21/命令集-1/index.html","fbe920fb792aeb56630a076c090a9061"],["/2021/09/21/命令集-2/index.html","142c79ca03383adbccb0e26395290ae7"],["/2021/09/21/命令集-3/index.html","652ef233dc8aef8ab3bdd419a0d06439"],["/2021/09/21/命令集-4/index.html","f837a956142a7c6baf4bb338a16016e2"],["/2021/10/03/socket学习/index.html","1fad371e0377421de8eefcbda2d3b540"],["/2021/10/10/dwm入门/index.html","2653bc861fe87bc541141ce775f90a6e"],["/2021/10/10/安装ohmyzsh并配置/index.html","2131b996353b0b3a958aa16a71963066"],["/2021/10/20/css学习/index.html","0437a9d3408a71caf5ad8572044e0fab"],["/2021/10/20/wm入坑/index.html","bb431c14c6fefd9bc0973fb8743391b9"],["/2021/11/03/微信小程序学习/index.html","0e939969a173026e2eca424e0801e75f"],["/2021/11/04/css揭秘/index.html","9bf9e2c5e7d89065939facb1b5f372ac"],["/2021/11/05/css-练习/index.html","c61e18a2e6a253de63febe4bab8bbe9f"],["/2021/11/21/命令集-5/index.html","04e457407709e0e1a8e1a555e5c9daea"],["/2021/11/21/命令集-6/index.html","7e0c0d91648f82bd5e21142e4f3ff086"],["/2021/11/21/命令集-7/index.html","766120dfd663b8768e92eec09b7e76f7"],["/2021/12/01/搭建wordpress/index.html","8a4ef564560a03cd7cd9fec67b44bac6"],["/2021/12/08/python操作百度网盘/index.html","9baa5a069ec39665f588b8527ddcabb2"],["/2021/12/14/js爬虫/index.html","6d34fb4c66027aa0d107b045b6464941"],["/2021/12/25/为网站申请ssl证书/index.html","ef72251e1cb590e2331cde0539e640ef"],["/2021/12/29/使用七牛云为网站提供服务/index.html","afef85fac619dd9c88c6189bd202beae"],["/2021/12/30/jQurey继续学习/index.html","72b0066150d483d32e4a65e590e714ac"],["/2021/12/30/jquery学习/index.html","24c5c141cc7a0e8ad231fdd7bd22289d"],["/2021/12/31/vue学习/index.html","827f03e829a504221c0891ede5de90e1"],["/2022/01/02/疫情自动打卡/index.html","96879a1ff1fafab164da7ab8f7611d04"],["/2022/01/03/javaweb初体验/index.html","e9d78825a26854f865d71fcd63776dc3"],["/2022/01/04/codewars练习/index.html","d89e3d255bc35940efa609e6f16718ea"],["/2022/01/05/Spring学习/index.html","73fc78f71bcb45a86b5679f441a77202"],["/2022/01/05/vue实战/index.html","7a938d402dc908ba34ec30a5026b7a71"],["/2022/01/08/gdb-gcc学习/index.html","144e1e2a0dda3e771f5c013fb55e1747"],["/2022/01/11/python-opencv学习/index.html","2981d8caf6d23f2292f7f29ce2895f63"],["/2022/01/12/汇编实战/index.html","b0374e5d6ecd231d97682fba79d5fe15"],["/2022/01/17/pandas学习/index.html","daf7e1c70023258482f8dfa43deaad26"],["/2022/01/19/可视化图的工具/index.html","68538988d15092fba79ac2454bbc6665"],["/2022/01/19/机器学习入门/index.html","57bbddb85b33f50598528f02af95978e"],["/2022/01/20/cousera-ML学习/index.html","1f4e5db52df16f023f4aab6b995e0b98"],["/2022/01/30/typora解绑后出现问题/index.html","7eec9aeffed4d31c5d0eb99862229c98"],["/2022/02/03/NLP学习/index.html","7ef3e1b587e0d73ad5cb498201676318"],["/2022/02/04/Web漏洞学习/index.html","db9600aa80a00c540e1a9c4a9cde6f28"],["/2022/02/04/pyqt学习/index.html","bcac99aa0cd8d91ab5ff56d6d8d63ad4"],["/2022/02/04/python爬虫/index.html","f0707a1e059ba98bf7eeff911d2ec302"],["/2022/02/18/Electron学习/index.html","5beee1b72d6509c1975a0d12e2bc6613"],["/2022/02/22/疫情填报字段解析/index.html","909c3d8c5e5411e530bb201108fe10b1"],["/2022/02/24/Bomb-lab实验/index.html","cee7b2983f3bd1eebe7e1845ba04d254"],["/2022/03/05/nginx学习/index.html","5c9437dcc951459e5216fc318695d5d8"],["/2022/03/09/汇编原理课程学习/index.html","55827aa69b656dbe1031184f20ce5031"],["/2022/03/11/Keras学习/index.html","19f27057d7f3858e90fa80db8c35903c"],["/2022/04/01/graphviz学习/index.html","837b182b29520c39e95b03830da68ed4"],["/2022/04/07/django学习/index.html","e9d070b872f6ab1359f2a955110689b2"],["/2022/04/11/密码破解学习/index.html","5e1b93d8597e0d237ce4d203303ceb62"],["/2022/04/12/flex-bison学习/index.html","515de4fa25f0bbbdbbc9bcfb89aaf9d8"],["/2022/04/15/pytorch学习/index.html","77e77c98d468a79d56c5c244a3d8012d"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","262a474e5e7bf9b8c09e11318deb299f"],["/2022/04/23/写一个音乐播放器/index.html","85a06c614496f0ee24649af8500fd473"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","3b525e4b4cca9e7e9db8b1a6cd2e09a1"],["/2022/04/30/GAN学习/index.html","3599562fd0bff4e422c807f732b32810"],["/2022/05/02/html精学/index.html","fd67b716198fe4dcc05d7f2cc08500ab"],["/2022/05/06/write-a-compiler-by-yourself/index.html","0ee68f389aea7860fa1c0afd5eb4d8ea"],["/2022/05/30/acwj-01/index.html","8b241b8b27c33470a30f31891ccf334c"],["/2022/06/14/animeGAN/index.html","405d08089f98a267e86f6bf4f60c3c96"],["/2022/07/09/c-与算法学习/index.html","ea7b976793ad4b4152a52f5d50dde9d1"],["/2022/09/19/flask学习/index.html","0792ad861289eae41e368747f021bb9b"],["/2022/09/22/cs224w学习/index.html","420f98ef1f6dd64b463ee06879a3a1ca"],["/2022/09/28/记录一次wp重装/index.html","abef5c824e55079ae536b294d401a419"],["/2022/10/01/Obsidian学习/index.html","ef65e7d052024237536d987a643695ff"],["/2022/10/08/vue-element-template实战/index.html","ab86d239f0a689631ae3eb938282df2f"],["/2022/10/25/vue网上商城项目/index.html","16a46a905bc924742e3a181a011cf4c0"],["/2022/11/11/leetcode刷题记录/index.html","7405edda1ac6ef566a00048aa88b31b5"],["/2022/11/11/使用overleaf优雅地写文章/index.html","a0d4e7401eac18d23dcb76af82d262a4"],["/2022/11/22/磁力链接与RSS订阅/index.html","09b26cab422faf44b2d7445090a52179"],["/2022/12/11/uniapp申请获取地理位置/index.html","b84e3b328b222a92dcdcd6b7d50dd0ec"],["/2022/12/26/pr剪辑学习/index.html","80d7608908ceafd76938ee7e6a3f8794"],["/2022/12/27/css中的flex和grid布局/index.html","df3059a515929540b1c1d85ee8e0c4a1"],["/2022/12/28/Flutter学习/index.html","48e17c5b4b99698114cfa1d4012d024d"],["/2023/01/01/美化github首页/index.html","43a29caa08c628521baf1ae2de8507ce"],["/about/index.html","5e4a62df0fec584baedd5fec6d7cf184"],["/archives/2021/04/index.html","88b09257974a95c9eb22c232bc9dc520"],["/archives/2021/05/index.html","799ba837a52433e90bf5034e0273fe8d"],["/archives/2021/06/index.html","2384df8202d68b608a00909df49529ad"],["/archives/2021/07/index.html","9adefe0906d41e2843ec487cbe5d225e"],["/archives/2021/08/index.html","f38934c26b27a75e6d031c6813481840"],["/archives/2021/09/index.html","69cf0e045849fc5d19214e3ca8ca5bf1"],["/archives/2021/10/index.html","4e433953fab6ecfa26b3ce81869b9e1d"],["/archives/2021/11/index.html","fa106479c71d70c58cdbf23ecb956a5a"],["/archives/2021/12/index.html","d9468585515b330867aeba52a554eb46"],["/archives/2021/index.html","c5dc497867cf2ae775870b6950266cb2"],["/archives/2022/01/index.html","cb2b2063ced4919b6068c241a21843cb"],["/archives/2022/02/index.html","2992cb9f7eb6ab984bb5e89b539af4b4"],["/archives/2022/03/index.html","7676de5da218cfc0062a9dd6121bfff6"],["/archives/2022/04/index.html","369f86dc407f2b06d003090b88e0153c"],["/archives/2022/05/index.html","2e8c80f07314dd6c4a1c85555b99e357"],["/archives/2022/06/index.html","47ba250764e4b4a6e7ba42ed756dcce5"],["/archives/2022/07/index.html","f465638d62b0851750ecee278830d534"],["/archives/2022/09/index.html","f0fd9fc7423dcef359d61883648aacba"],["/archives/2022/10/index.html","56b19d92964ee9680d5b6aa5aca84e52"],["/archives/2022/11/index.html","2237315b3f637ffa5a28bee2173f3b0b"],["/archives/2022/12/index.html","0ca05686ad1d012516aea3716a71d40a"],["/archives/2022/index.html","68449352c89ba574771aab7e13a53d18"],["/archives/2023/01/index.html","a67a887fda24512aa17fb3b9a836dc51"],["/archives/2023/index.html","78d878c67a8667a8b65c876c64622936"],["/archives/index.html","ce19bdc2cc6a10a49dfe1da7b04d96fb"],["/archives/page/2/index.html","34f4ccf355240d49d88a5133d0898144"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","52a48b0bb80177aebc3f1c233438adb2"],["/categories/ML/index.html","e03e13cfdbe952032d31e6c3f697e800"],["/categories/Nginx/index.html","a3231cfa0d9b7fa409d6110b174550d4"],["/categories/Spring/index.html","cce847f24e20abe1917679ae0e5edf96"],["/categories/course/index.html","ab883bb3e2ad56ab61d3fb9a36e50958"],["/categories/django/index.html","8a6317afed52bb2980d46968291b48c3"],["/categories/fun/index.html","9333e0a1a9840320789cd0c2a3517c76"],["/categories/gcc/gdb/index.html","f99a0a9bb8dc4a10d307723d5be624e9"],["/categories/gcc/index.html","1d7c34f6950d1339f801f5c8cd87f752"],["/categories/index.html","40ca995cbbb7f2ed34270d84f81c3303"],["/categories/java/index.html","ad7fde67ab05b97f6d41c7c47656eb41"],["/categories/python/index.html","43e1ec205c1cedd102b4f31df91cd10b"],["/categories/study/index.html","c9717fc9cc637b41f9b9b5043c222428"],["/categories/vue/index.html","6d0d1b99aff3edc4eda808f107d9fa3a"],["/categories/误区/index.html","5cb7104c32461f655963b082c70f5914"],["/commonweal/index.html","143fe4a69c8f549b87e42a1acca7531b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","fcfd48d0f00deb5e2da45aef57c2d0fa"],["/home/index.html","fca4be0f782399fdd2eeebf62e5da600"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","9d42ba2452ed60997b7c763f40c728ec"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","6391f3fabc3f4f4784e413e113b5b07d"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","277fe6e7b0ff73c3cce5310bc247f4a3"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","e0fe7c156cc63079d71c22e87e9434eb"],["/page/11/index.html","09c9184608b8306aac5bfc5334cdc7f1"],["/page/12/index.html","b67faff38a1c06c9a3157e6ab4c150e9"],["/page/13/index.html","278b20e6a285e0db25893d9fca1fcf42"],["/page/14/index.html","6e3bd4fbb71eac2e8868f6835f5fb692"],["/page/15/index.html","4f2508241ca9ce8585a4bc208a118b25"],["/page/16/index.html","da291285c23fbe26132f483710f28cb3"],["/page/17/index.html","d666701ba8c304c23be27e1d41e982c0"],["/page/18/index.html","8285c02b09a2f86ad28c46f651330899"],["/page/19/index.html","34972c7b3bc979747968ebb9592eb77f"],["/page/2/index.html","ca7664953355b62399a3baa32d21c40b"],["/page/3/index.html","641ed3b7a1e76a12eedf6d7d668f9f93"],["/page/4/index.html","46f892b7ae9ad4a4d4402cae98d62fd5"],["/page/5/index.html","399489285bb3dd769cd08fee2cbec915"],["/page/6/index.html","42c41872ae3a5e2f1fad5b7d6ab04ac1"],["/page/7/index.html","d77a3c37973015be17e93e2ff9ec9096"],["/page/8/index.html","a9c247cc91194f875567666cdd6735f4"],["/page/9/index.html","dc3c082a6041077b0792bc7899de5486"],["/resume/index.html","506b219e6720cc37821c76e8c1f1a889"],["/schedule/index.html","ddad04fb05e85d3f8cc6ea07cbfcd606"],["/sitemap/index.html","fdbbf06f69897daa0b31e09bb18d15bd"],["/sw-register.js","a9b709b597e1103ab5bfe21719c26547"],["/tags/AI/index.html","eb6b57a68fe20acac4e59d67365d6170"],["/tags/BT/index.html","a43941b5bc3845b8867f52daa21d4ce8"],["/tags/BaiduNetdisk/index.html","cba7d1a2c054ae7d843cf15c562cd282"],["/tags/CSS3/index.html","88b42711b6f5c4d777c31c8d78df411c"],["/tags/Electron/index.html","2c915805cb9e412ad42cec70ca0c50c6"],["/tags/ElementUI/index.html","2f463bcb9919c1e8a1806431499b1238"],["/tags/Flutter/index.html","f7118ea271af94c559885477ec7ad88e"],["/tags/GAN/index.html","c5cc1d456032d8d314a5cb6204f722ee"],["/tags/GUI/index.html","05186c2d3b1577353eab6fe9d4ef68d8"],["/tags/Git/index.html","78584377e9d70e6f44bcf45b332902e9"],["/tags/JavaScript/index.html","41dcfdb446ed2b5db48db79e8c4aaec0"],["/tags/Keras/index.html","d7cbca2b8e744defcdc02d799de510d3"],["/tags/Linux/index.html","016975991b2d6fa086628c33b982f925"],["/tags/ML/index.html","36ce86ff32611439bb609a846d260f91"],["/tags/NLP学习/index.html","dfc2ad5b71f5514d0517f1e588451bad"],["/tags/Nginx/index.html","ff99185350dffbf87bb7cd938e8eb335"],["/tags/Obsidian/index.html","93fbfe2b7229136d71f9ba2624ac549e"],["/tags/Qt/index.html","8115ff509b6a188306084af03d033ca7"],["/tags/RSS/index.html","70dc2f865d142156f0caad39420f88bc"],["/tags/SSL/index.html","358b445ce4dfdaa1038c38cc8b5c0999"],["/tags/Scrapy/index.html","40958cc89d9b778d711b4cb85172f4c5"],["/tags/Web/index.html","0022a901d1aaf3c17123395ddd03ac0f"],["/tags/algorithm/index.html","cef1eb2304bd016d5d28ad1a1fef3868"],["/tags/bison/index.html","36e54c0929c106611f836c64817e7b3f"],["/tags/bomb-lab/index.html","7724c458a593d90cbe556fca20009451"],["/tags/c/index.html","d7761cd53d5da3e9fd6f35245cec0054"],["/tags/cheerio/index.html","92f9feb919a4848f93ff6f8f1b055e2f"],["/tags/codewars/index.html","07e5d9c93f494f93764fa19eb5cd0c42"],["/tags/compile/index.html","725da45565880a43db998e0452313856"],["/tags/compiler/index.html","23131de5aeb39547f7379c2c0d343bae"],["/tags/course/index.html","25660ecb9f86ba81e709f36f5845967b"],["/tags/crypto/index.html","202a4c2d47af5208edc1a5ce7eb63473"],["/tags/csapp/index.html","61cc7f5cebe4ce29a6cf354d9ad63de2"],["/tags/css/index.html","80dbb25a5d69e91ca7cc849e3c3a41ba"],["/tags/data-structure/index.html","394a003275b81c01001c248d33b1eb89"],["/tags/database/index.html","b84ba14d216e14bd767bbd673e67ce5d"],["/tags/deep-learning/index.html","96ab9441fb725c37a3d7fec55657845e"],["/tags/django/index.html","1e428f4496996137eb9a1347c104ce94"],["/tags/dwm/index.html","9f77995a04f0b50a4ad63ab342c18897"],["/tags/exercise/index.html","c4303805e46d17ab65979c5c3c7541c4"],["/tags/flask/index.html","c5468492db3be5dfe6cd1e91256c9bc0"],["/tags/flex/index.html","9f2350c68ca6ed42abbdf1284452a32e"],["/tags/front/index.html","136b38caa9a92e3361ef45939c71cee3"],["/tags/gcc/index.html","d63fbefc07723f97336ae7a8f545dece"],["/tags/gdb/index.html","88fa547d5dd230fa4f4c5f5737bc685a"],["/tags/github-profile/index.html","f7a2bdff3e255fb40cc7db9e3d0d3c8a"],["/tags/github/index.html","5207f3b498cbdcff3f49fc3cc364f583"],["/tags/graphviz/index.html","010292906a5e0d0457454da2921f7035"],["/tags/grid/index.html","2f9e01b508cc92528f0c3f092ca273b1"],["/tags/html/index.html","fb3a74e897fdce88025d6f523d613bf5"],["/tags/i3wm/index.html","8bf715235f53f4aa5d1fab9affb7bf74"],["/tags/index.html","d387adabb69a6c75bbd5b07d9f563362"],["/tags/issue/index.html","4a2f01af90b86ad14882b62a22987a9e"],["/tags/jQuery/index.html","cab7ee78db87688644f0f59fe32d7ed6"],["/tags/java/index.html","2c93c8a3ddf1c16c34dc5cb22508777b"],["/tags/js/index.html","21cc26296eb3fade0e8d31c3a2b788bb"],["/tags/latex/index.html","c07d713df938940f606e2ed9bdd9d723"],["/tags/leetcode/index.html","211592420e2d235ea60d694821452489"],["/tags/lex/index.html","f84e97b90cc46aac998541ede111c94f"],["/tags/material/index.html","143c465527e9fcc1e6ca06448101fee4"],["/tags/music-player/index.html","bcaa598d3f0a361d9a19426015df52da"],["/tags/nodejs/index.html","dac51d5f46302969e69a055f607cfe07"],["/tags/noj/index.html","5baa6eb6c6202ac3ce39828cdb9a3efe"],["/tags/opencv/index.html","71f54fa5eedc25a45f9c427cbddd71bd"],["/tags/overleaf/index.html","6d9d78f10cb13765e99d35d89f9982b2"],["/tags/pandas/index.html","94a9d1397077334045e73938fff1bfe3"],["/tags/premiere-pro/index.html","7ce246c2b8a6f6de977a7d61a7dfbe6d"],["/tags/proxy/index.html","cecdb9b4318676ffca1b5686c5d13bf2"],["/tags/pygame/index.html","d4cc7abdb1d606196dd67dd66bc883b4"],["/tags/python/index.html","67fba3bb890acc57a87c8b9060e6b9cd"],["/tags/pytorch/index.html","5ef5b1d63a60291eff8b559d00f093ea"],["/tags/reading/index.html","7167b81694b3ec921816934c8711ce1e"],["/tags/requests/index.html","20154284a0a87ea0a3f55d108ebcb4c2"],["/tags/security/index.html","75ffa1c19108ce0c47e67f7de008e22b"],["/tags/shell/index.html","e35fd85107fde0e6872a4308bf9f02d8"],["/tags/sign-in/index.html","c70596908f345cad5f4746735e06a631"],["/tags/socket/index.html","ea98e61e50a52b0f525978b306e19e85"],["/tags/spider/index.html","94a63cec200fda1c27477fb602926920"],["/tags/splash/index.html","de41e5efb0a1fdda8df49440c89ea583"],["/tags/superagent/index.html","f028d0fd872070bf376c6211b796429a"],["/tags/tensorlow/index.html","d8adfe82192cfcefe9aa11c1fa6f91e4"],["/tags/tex/index.html","02cf661949fbe53cca964ce0b0e4a423"],["/tags/threading/index.html","9374e56f038b407e137448e483368d01"],["/tags/tkinter/index.html","dbddeff04c13a8d4aa8fd74e313c41b1"],["/tags/torrent/index.html","74d72443634aa4f1f83c3a00d5b146f8"],["/tags/tutorial/index.html","0bb70998452bf3dde96aa7276876358c"],["/tags/typora/index.html","07274ac4f6ecc7b3603003802d8816df"],["/tags/uniapp/index.html","c499743a5dbca37ed166560c51d0cc08"],["/tags/vue-element-template/index.html","aa5d3a82eb1b0c09550351a78981b201"],["/tags/vue/index.html","85fbef72c08d5e994c95f39495af39f6"],["/tags/vue2/index.html","1606f9cb5d6ef9ebc0f532051db064c6"],["/tags/vue3-x/index.html","75f290b953b3af5d14b00a72e21c1f73"],["/tags/wechat/index.html","086cf72a087a879220ecf3ea4b803408"],["/tags/wm/index.html","bba2524dad510e5326e334bc666aadef"],["/tags/wordpress/index.html","83ea5940890f95ef29791ac39891ca1c"],["/tags/workflow/index.html","6410940096eda2ab2822acf43459469e"],["/tags/yacc/index.html","35a23379f999b6d68abce739fb8bcfeb"],["/tags/zsh/index.html","be597a3db8475f56924ca74f28f446b3"],["/tags/七牛云/index.html","8887e503772f9dbd4abb0512e4356500"],["/tags/函数/index.html","de1c8640ae6532dbe9a57ad5f1d7882f"],["/tags/剪辑/index.html","40904d2e3dd6ae9449004084fe4a9098"],["/tags/存储/index.html","cda360d37a89cb37c7bd949da0507a64"],["/tags/实战/index.html","bec2937b8b5756dbe58cd2d149737b56"],["/tags/建站/index.html","adab10ae06ab86c9e077ddcc63576c92"],["/tags/微信小程序/index.html","b3f6f4245ca8ed62e51d2cccff3b6863"],["/tags/指针/index.html","14e74dbf18ac03a306f0c6179efe0036"],["/tags/汇编/index.html","550709976519d518f5b7d7ac4f2d9890"],["/tags/爬虫/index.html","937aa797e2e3bca8738076fa81f704e6"],["/tags/算法/index.html","5091e5db33d51e6fc12ff50dee81410c"],["/tags/编译原理/index.html","763edb196d1367b8c7baa18afbf0813e"],["/tags/获取地理位置/index.html","39177e30d8f4dff8d51c8a90899cfa55"]];
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
