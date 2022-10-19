/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c7b6fba6240748cac4ca0f0088e25829"],["/2021/04/20/稀疏矩阵/index.html","0424217bfa2ace21ba96258424fe8c2f"],["/2021/04/23/广义表简介/index.html","97a954b5a864aedbe5aab2d5d98c4801"],["/2021/04/29/关于指针和函数/index.html","d0299b1a7025f16f26d648f994c5f61f"],["/2021/05/10/哈夫曼编-译码/index.html","4d79e4d4fa88ee39cdd209a6f5b30a2c"],["/2021/05/17/数据结构noj_2/index.html","98123eb06cd2c922642f0b0a01397e4a"],["/2021/05/30/数据结构试验/index.html","545f056a2677445ba95cf9ed89f1fabc"],["/2021/06/12/数据结构noj-3/index.html","ed12186ca9d3d3dcab181b1af732cfbb"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","683c62645f01aa400b58bd9eed9d4d15"],["/2021/07/08/课程资源分享/index.html","ba202b6e4cf0b833976514d040fc7491"],["/2021/07/20/Scrapy-下载图片-文件/index.html","4b9897f162da2395a250024a3f4bd055"],["/2021/07/21/Scrapy-动态网页爬取/index.html","513e8bb0756568c12c71f531be0df794"],["/2021/07/21/疫情打卡/index.html","3fde95764fc7062757455219f77eaeaa"],["/2021/07/29/Scrapy代理设置/index.html","2b0b3ab797c069fcb7f56083e49d70af"],["/2021/07/29/数据库认识/index.html","44023b70b2f054a9d6ebb48df9958d8a"],["/2021/07/31/Python多线程学习/index.html","ac341137ed80847053704d2fa22acb88"],["/2021/07/31/tkinter-requests练习/index.html","2da75c3a7538321b9eb531a41075fb3c"],["/2021/08/10/Git学习/index.html","22f18660a33df247e0917de906bf35ac"],["/2021/08/15/pygame实践-1/index.html","2235d8270e5d6692ba2d8de871a530e1"],["/2021/09/06/微信小程序开发/index.html","5840e3a9835510956447f3335748267a"],["/2021/09/21/命令集-1/index.html","19864e3e3e08a5ea2f1c41d4ead410a2"],["/2021/09/21/命令集-2/index.html","0b67f22745ffe28c4a2a2b57594516c5"],["/2021/09/21/命令集-3/index.html","fdc6afc8eb0629bd827b3aae474231ee"],["/2021/09/21/命令集-4/index.html","fc0f1be314d18dd540b9f82eb614a2b5"],["/2021/10/03/socket学习/index.html","e9b85b546c2953cbedf559da17bf17b2"],["/2021/10/10/dwm入门/index.html","7cdefea20582e8194c2409057e64ad96"],["/2021/10/10/安装ohmyzsh并配置/index.html","d6314a4c75305b7876ff0cb78ea88391"],["/2021/10/20/css学习/index.html","182eeb67588283d41e66da5935fdb632"],["/2021/10/20/wm入坑/index.html","7902531e00e147602e0e0bf9dc0c4e46"],["/2021/11/03/微信小程序学习/index.html","8feb0328040ef9deb990b3493297d242"],["/2021/11/04/css揭秘/index.html","6a529b209bd2e297af8af5b05c288561"],["/2021/11/05/css-练习/index.html","0d570d9ac90968ed68515d7f92d7c38a"],["/2021/11/21/命令集-5/index.html","186cc8065945c950bee741f471b724b1"],["/2021/11/21/命令集-6/index.html","c92e3505d6582f48184b040a9ede23a0"],["/2021/11/21/命令集-7/index.html","fa73e58ad726a3377797ac4afa089a9c"],["/2021/12/01/搭建wordpress/index.html","745b27d971b7fd42d54157b92f59460b"],["/2021/12/08/python操作百度网盘/index.html","209742685382b361863e0b425761b22d"],["/2021/12/14/js爬虫/index.html","8e367dcef63d82c9f773eba096bd5165"],["/2021/12/25/为网站申请ssl证书/index.html","67e5021a9f8315f65048694ebd6e7beb"],["/2021/12/29/使用七牛云为网站提供服务/index.html","5212f00110b751327d93344be8d1624f"],["/2021/12/30/jQurey继续学习/index.html","fd0e83748ec4962abdf1fbb3cd92eba1"],["/2021/12/30/jquery学习/index.html","3d78591823cda29183ac6c1ac8927e1d"],["/2021/12/31/vue学习/index.html","9108f9d25c17c3ee172ea0b3866edb56"],["/2022/01/02/疫情自动打卡/index.html","b298d0b39648b8b6458b096f6a36b6ec"],["/2022/01/03/javaweb初体验/index.html","e1bdf2145e21da204c993c7cbb3faab0"],["/2022/01/04/codewars练习/index.html","b8946a1cfe4be783b90a9a565d591464"],["/2022/01/05/Spring学习/index.html","2a938e82d77d09d4aa225cb22533c209"],["/2022/01/05/vue实战/index.html","d36b0a8927336286937b4c9923546fa4"],["/2022/01/08/gdb-gcc学习/index.html","20fea6c4fe6df88a4b4904c2240bd831"],["/2022/01/11/python-opencv学习/index.html","d2796aca57b5ac05db281add1393299a"],["/2022/01/12/汇编实战/index.html","1c830ab90e2fe2aecc0ac906d00c30b2"],["/2022/01/17/pandas学习/index.html","84302cc3eae596d23748fa50592cc76d"],["/2022/01/19/可视化图的工具/index.html","d10e4c1eb4ea2764c3ec654e732ec8b4"],["/2022/01/19/机器学习入门/index.html","f654a8e321dbf1e59c87788025b0515e"],["/2022/01/20/cousera-ML学习/index.html","a253b89bdb8490d9152402e340e9d71c"],["/2022/01/30/typora解绑后出现问题/index.html","998a385f634ccbd877051e4d44329a76"],["/2022/02/03/NLP学习/index.html","4fb3ff4bc9d2147a0b83fe955c6532b3"],["/2022/02/04/Web漏洞学习/index.html","5c20828bf0be85fbee18a394e55d8f25"],["/2022/02/04/pyqt学习/index.html","36bc5ac826713940de3610d92cfed3c7"],["/2022/02/04/python爬虫/index.html","8eaf0df38db510c9ff0e0e15f0d4a1d3"],["/2022/02/18/Electron学习/index.html","7ce9b6cccb5e4356424a69fea0578bac"],["/2022/02/22/疫情填报字段解析/index.html","555291f0786a8b8a32aadcf2d3d64c7a"],["/2022/02/24/Bomb-lab实验/index.html","12d7386a791e415832bd4ad9830caa95"],["/2022/03/05/nginx学习/index.html","7fae8e6885ec4d506dedac6aa6808ddb"],["/2022/03/09/汇编原理课程学习/index.html","dd87ade69be4021030b5047fdf3486c7"],["/2022/03/11/Keras学习/index.html","77003f346ce093d1b7a100832fd31f55"],["/2022/04/01/graphviz学习/index.html","0a1c2b8ccd78df71374263e6924fb695"],["/2022/04/07/django学习/index.html","665f556e45adeee2748a2c38a872163e"],["/2022/04/11/密码破解学习/index.html","8abac3810a87f4dc3065759a8c766e5f"],["/2022/04/12/flex-bison学习/index.html","9fd6d4ed91e0e3df67e16287c243e5ee"],["/2022/04/15/pytorch学习/index.html","d522e778f6cec3e13d96018d97e790f4"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","9db067424d7652da65f57fc8f2255d3f"],["/2022/04/23/写一个音乐播放器/index.html","c8b68450b831fd7761509d34c0f28a91"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","dde7081177da26c9fa5bbc98af8fff23"],["/2022/04/30/GAN学习/index.html","3286d9efb063942d88098f8185a1e46c"],["/2022/05/02/html精学/index.html","8e83c6c28ec8f833bf8a1113a9e1a9e0"],["/2022/05/06/write-a-compiler-by-yourself/index.html","91a4abaaee5bf6d8327cc8443e952308"],["/2022/05/30/acwj-01/index.html","6b73feef6c726498ee38b4877bb2047c"],["/2022/06/14/animeGAN/index.html","6c45d7f02f4162b0c58a3be7f352ed8b"],["/2022/07/09/c-与算法学习/index.html","6a4a8e14cb073e27d8e118ddbfeb696c"],["/2022/09/19/flask学习/index.html","86359189dc6ebc9fda1a6d761659c82a"],["/2022/09/22/cs224w学习/index.html","1dced891979987cf1c9a32fad5744165"],["/2022/09/28/记录一次wp重装/index.html","4dce893b564775be8dc26936d7860b9e"],["/2022/10/01/Obsidian学习/index.html","7b51f1427e9cbc7f7571e000cdca9d1f"],["/2022/10/08/vue-element-template实战/index.html","fda1168e74321456df69c0c4c45aecef"],["/about/index.html","d2509d6b7354b789c1d147a0645e526c"],["/archives/2021/04/index.html","b8e73593e71a87d55e8a1bd7c2ee33e6"],["/archives/2021/05/index.html","cb1951b33cc56f411a84237425aaa4b2"],["/archives/2021/06/index.html","4e1b303a6c58b438121214976e0bad20"],["/archives/2021/07/index.html","6cb6612ee60cbfb3f7d3c090de53a11c"],["/archives/2021/08/index.html","7801072135358a39fdc47436b36d164e"],["/archives/2021/09/index.html","a250088f77b8bec4ec6ce4a5e5b6c48c"],["/archives/2021/10/index.html","764999d9c888323027bf848a6aa59576"],["/archives/2021/11/index.html","018c52ea6ef8ec62a65ef07b092e42f6"],["/archives/2021/12/index.html","a7983e8207ef9007f0bf2eb3b6097eb1"],["/archives/2021/index.html","5d0e315b4407c0aa4327a94b5b6eb15c"],["/archives/2022/01/index.html","b2d8b0d5ed36c0ccf3d38b061e1bfba2"],["/archives/2022/02/index.html","12de4420da5cce28023670c45afeecab"],["/archives/2022/03/index.html","ac21636afa4fe12b1246d9ac4facd82b"],["/archives/2022/04/index.html","ee6f79518db6a4b22da394e248bed978"],["/archives/2022/05/index.html","a1d9cfcb7e6cb45015a8c23cd65715c4"],["/archives/2022/06/index.html","f8c7f88db2084ea486f7695d202e33db"],["/archives/2022/07/index.html","2cc088a7b3e9b5b47b496283f69dbfd5"],["/archives/2022/09/index.html","4f19cc00bfacc8108cf794938eb5bbcb"],["/archives/2022/10/index.html","f7122f916c64a4a95609862966008794"],["/archives/2022/index.html","c450c50bd90065b3b6b2c77242527ca9"],["/archives/index.html","36bc397a5c8600d079a5a8f0c0f7b604"],["/archives/page/2/index.html","3f787df5fe45eaf28ce206cc9ca53ac8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","e95e8f68dabd023f597e743b14095b6b"],["/categories/ML/index.html","a50f790e12fae7efdaff774e59627c0a"],["/categories/Nginx/index.html","a6cee2835704f19e41e2ce070c5ea35c"],["/categories/Spring/index.html","70ed52264f2ca8389be083739f200b1c"],["/categories/course/index.html","57e1493d269cdef3b48aabdcceb89d78"],["/categories/django/index.html","e8dfbde1729fc753efb82f7de5ba091e"],["/categories/fun/index.html","eea09dd4c30d061f777ccce851a76bd3"],["/categories/gcc/gdb/index.html","f066d4d35f2b5bea19b4cdb7b096644f"],["/categories/gcc/index.html","2d23327e03d0b8a35d0b5490b8bbbcb6"],["/categories/index.html","81a26f26b55d95541e4a6fc99b440b35"],["/categories/java/index.html","7121ff4605a5c17848457a6722084536"],["/categories/python/index.html","54218b0893aa57b0bd321e3723187c9a"],["/categories/study/index.html","db1d75ebdf3b2de42c3f519c006ec15d"],["/categories/vue/index.html","32f85394f8d8a7bb7b59c4b11ba0bbb6"],["/categories/误区/index.html","1513967db97aee8832186cc6dd283680"],["/commonweal/index.html","49be5c6ec6f642bff80833c52e7e348a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","ce45cc94fded5c03777770978a864212"],["/home/index.html","019175da419d4a3f8a313b0a516738e3"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","3956bc230be1f19d29b523f8d6a35c0e"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","58a580da7c3991d9a3a17c5d8674d11d"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","bdd280cf5885d00afd5aedabe20e1e64"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","fea3ca4289a282934485e39405e49bdb"],["/page/11/index.html","8a3b535f8eb365346a99aa4554839b26"],["/page/12/index.html","fd9582e6e3a736df4cd7d78a172a6359"],["/page/13/index.html","2b90184631c3c2fe8fe2d8c9a19ba511"],["/page/14/index.html","544a698388e43dcbb0abdf24efc3590f"],["/page/15/index.html","53b6e99971aea9a6805ab2ab52df4881"],["/page/16/index.html","342aa483a5e9fecf266679073994968f"],["/page/17/index.html","17aee48f624403a15e94e3ce176a554c"],["/page/2/index.html","8b71b60b0b09385f58a5fb506d7cfc9f"],["/page/3/index.html","0d867aa8d8e24105ac1208e8d83ee8bf"],["/page/4/index.html","c257daeb4c081073ba32d2ef89a844b5"],["/page/5/index.html","33e0c9c7c0447140bc01815994fecca6"],["/page/6/index.html","a7615fe2ac1cfa1c952db6b76aa0c373"],["/page/7/index.html","de51e004366ebc3de298f13f1d9df37c"],["/page/8/index.html","699d63a92bccf78007d943b09c622562"],["/page/9/index.html","decc49fab4a061e52262573739ea803e"],["/schedule/index.html","8289893d237f648d89c577a93b1a695b"],["/sitemap/index.html","72144d45e3f3f07e109b2800a96049c6"],["/sw-register.js","07e4295769a6d98eaeb1d479d7e7ff5d"],["/tags/AI/index.html","f90008df62373897ae671bb92d8fac21"],["/tags/BaiduNetdisk/index.html","c371c469de39332d1562270bb15271c6"],["/tags/CSS3/index.html","8883bf3920189b0a9d567ec5fb726d8d"],["/tags/Electron/index.html","94988cc11ecb7a1a8592409cf93176ce"],["/tags/ElementUI/index.html","49cd12cef8a26cc1ca5fedc228d463a3"],["/tags/GAN/index.html","cea26ea1807de4bb71d970bf789d0391"],["/tags/GUI/index.html","7994ba2c84d6baaf8543b6d5890401a1"],["/tags/Git/index.html","313265875bcf43f7460e47d9daef92b9"],["/tags/JavaScript/index.html","e10cadebbaefa67964bf8054b257bcd9"],["/tags/Keras/index.html","62b97c062cb7b7a8d98b35d5653b9480"],["/tags/Linux/index.html","5c6a9724c0e2dbfd60a5360560b3d43c"],["/tags/ML/index.html","5d433d7290acaadf39389074985b6fea"],["/tags/NLP学习/index.html","24da04b6a2a9533774011fbd7ee0d80d"],["/tags/Nginx/index.html","ee5cc744bacc7747066e556dd33b3740"],["/tags/Obsidian/index.html","22073c283a17623040537ad766680019"],["/tags/Qt/index.html","7d9314e98fa34624431e01b44b53a7a4"],["/tags/SSL/index.html","360545fe83551df2c4e4aa1b50bbc1d9"],["/tags/Scrapy/index.html","cba43a102a97732cceabacb862b22752"],["/tags/Web/index.html","080af636110279148799de2106d11e3a"],["/tags/bison/index.html","1aae5421e7b0f313722e0e117b37c111"],["/tags/bomb-lab/index.html","845af7b9bff416f35d7dd45521f0ad32"],["/tags/c/index.html","501f05f6976213e188b2b4231d6cb037"],["/tags/cheerio/index.html","fa10105f795d76a9792fd8fd0798e637"],["/tags/codewars/index.html","8e5107b546768c97433fdb5efc027002"],["/tags/compile/index.html","a9a9bb38993292cb39e1214b378c7029"],["/tags/compiler/index.html","6e49b0cb5b688f59808d2e96f1cde1e0"],["/tags/course/index.html","46d030a46e8336d6b8b9af2926568c95"],["/tags/crypto/index.html","271cec156cc50c69d51302a3bf1e08f2"],["/tags/csapp/index.html","eb3a51deadabeb54cd574f7c5046bf25"],["/tags/css/index.html","756af493021b816811186f111b8d0172"],["/tags/data-structure/index.html","13cab866dd32db1515c551debfac77a7"],["/tags/database/index.html","6b4af123cceff51f50bd9c43b6643bd6"],["/tags/deep-learning/index.html","e292cfb83477b5fcf32ab48c8f5b0ee8"],["/tags/django/index.html","7e22d1d8b23f8120c24526c6bf66ddd5"],["/tags/dwm/index.html","12c5ad88b8c868dd78f4655c759986d7"],["/tags/exercise/index.html","24326feba1851186b94fabf90726aa3f"],["/tags/flask/index.html","5a4c7b65875c00d2f0be18e261fcc42f"],["/tags/flex/index.html","d2066ce6e8314c9fd0ac35bbb447ead8"],["/tags/front/index.html","6a2fae58136614a1ac14cd63db513d79"],["/tags/gcc/index.html","59839295069a8241b7f8903d376f61b7"],["/tags/gdb/index.html","8c3f9004649003a0ac8157c608469996"],["/tags/graphviz/index.html","5f5f5b4587b488f88f75d916c487225b"],["/tags/html/index.html","5bcd79e82d63d38a0c251745e2b91f90"],["/tags/i3wm/index.html","a2924a48ffcf33c528dbe0324e5e08c3"],["/tags/index.html","4064d7b1db991e821047c364e12b9b0a"],["/tags/issue/index.html","c67cbbfab9bb5c5c0562a4d2b4678175"],["/tags/jQuery/index.html","f729db7c53db080785799c9487292f5f"],["/tags/java/index.html","26351055530108ab80082a50032721ed"],["/tags/js/index.html","10280cdf2eb320c280c99f5b80e85313"],["/tags/lex/index.html","5fd783fdd2d5f4acc53b79772d23f824"],["/tags/material/index.html","7845d59f5a23228ca718ffc7b63925b5"],["/tags/music-player/index.html","2792fe38a8bb3f7194991701e541c829"],["/tags/nodejs/index.html","0be0fc954eaf7dae0ba9aeb59028bce0"],["/tags/noj/index.html","24e012b4f79718b14e7061cfa77b987f"],["/tags/opencv/index.html","2d0a581bdd70f100da7d4488cf214bbc"],["/tags/pandas/index.html","bbc67e117e9e7321a7e051c3a20b8d75"],["/tags/proxy/index.html","0e10c30646064b9925267386cc8c9520"],["/tags/pygame/index.html","cf74c5a037b90147610a0203cdd0a1eb"],["/tags/python/index.html","bacc886f5cc6722e458f9c3e94e7d7df"],["/tags/pytorch/index.html","8457e82ed2fd3f4c64ee1c33eea16200"],["/tags/reading/index.html","81ba07fda0e5b80dcaf1d032a9e2b46d"],["/tags/requests/index.html","e708662f9bfdb899fa70a330fef352ce"],["/tags/security/index.html","073146882d36ee865a483af302998c97"],["/tags/shell/index.html","21c6a7ba29a0d4cee2db4fc9b5511c3c"],["/tags/sign-in/index.html","82eb2433778f067265559c4e7290fa20"],["/tags/socket/index.html","2bffd029606667609add1f8eb9112134"],["/tags/spider/index.html","3e2749e231ab9943c6a28137fc076d00"],["/tags/splash/index.html","f114d9d5c17f98e9241410e7f7fcad38"],["/tags/superagent/index.html","56969d0ecc73a20cb53ce541005ac2a0"],["/tags/tensorlow/index.html","1c9c16832590eccc0e3c3763a7fcfedd"],["/tags/threading/index.html","a2dc1fb7e04efd8063f5b2df23c2e375"],["/tags/tkinter/index.html","fa766cac9ea2ddf3aff9116bf1831c09"],["/tags/tutorial/index.html","d2e77a0bef10ad3e084c7c43cfb7e064"],["/tags/typora/index.html","14f2546c660089706ab18b9eded0c9de"],["/tags/vue-element-template/index.html","da5e2785ad62d9e6336f047619e5fd6b"],["/tags/vue/index.html","6345b592e0880a3bf68afbb7339e27c2"],["/tags/vue2/index.html","6740d543b33c9ce773241320bddae960"],["/tags/vue3-x/index.html","e4104fa6773d823d197b284bfc282259"],["/tags/wechat/index.html","9d17c2495df660bf35b5634510a5d108"],["/tags/wm/index.html","0f9ed9bd23f272189c4ddf4d141706c8"],["/tags/wordpress/index.html","6c75d11feafbf6fe00f870c7c5401f3f"],["/tags/workflow/index.html","ca015299d9e5d12e296927398326ec34"],["/tags/yacc/index.html","9d7271579b6039e49af6319379d45067"],["/tags/zsh/index.html","c5d5ebcd8e6e966e8cfab40f34465851"],["/tags/七牛云/index.html","4eaa95bcb22d572962105698823bdfdf"],["/tags/函数/index.html","27c322f3b0b16360fa5a289b6965a246"],["/tags/存储/index.html","3eed7b894060b7eaa5f14fe70a428551"],["/tags/实战/index.html","982f250dcc4fe20fa3bfc028ab810706"],["/tags/建站/index.html","2d2d2fa6edeab7bbc8fbe4e7b041a99b"],["/tags/指针/index.html","f798398f0b170ecb842e48ad06802ab7"],["/tags/汇编/index.html","1f1b41387e21918feb647b3f2ae8e5f4"],["/tags/爬虫/index.html","127efe9bad8d3cba17ccc9f554224f9e"],["/tags/算法/index.html","f75320cc9aab25856ef9fdd585990057"],["/tags/编译原理/index.html","a4834f222c07980b03cb1a1b27431174"]];
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
