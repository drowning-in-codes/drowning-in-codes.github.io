/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","6a05908602d953ddef2a2886a2a93e85"],["/2021/04/20/稀疏矩阵/index.html","c8f3a2e16a9c2222f4faff34f0eb26b8"],["/2021/04/23/广义表简介/index.html","2117e7e0f6242a225293703650cf46ce"],["/2021/04/29/关于指针和函数/index.html","665aef856c88026a1da83c33ca5b7565"],["/2021/05/10/哈夫曼编-译码/index.html","b0842cb4bb1b8ad10ba836f1bdcac4aa"],["/2021/05/17/数据结构noj_2/index.html","b1c0bff22c81414ec30f0ea3460742ed"],["/2021/05/30/数据结构试验/index.html","d4cae242bb0e863acfb4ed5577747a9b"],["/2021/06/12/数据结构noj-3/index.html","1fc7c3a8cde537a9c943bb951d5a660a"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","d8b9d5797fa1bf6e3522dbecd7b495f8"],["/2021/07/08/课程资源分享/index.html","5fb6610baf9a2edb724aaccedb8ffbf4"],["/2021/07/20/Scrapy-下载图片-文件/index.html","1ed9c3c6132b0a6d25d2155d598f41a4"],["/2021/07/21/Scrapy-动态网页爬取/index.html","d463bd6db2fef7beee08305e18b9fd51"],["/2021/07/21/疫情打卡/index.html","eb9b355cc31d7843ebb7e6184a9021ce"],["/2021/07/29/Scrapy代理设置/index.html","9b83c28a529eda0445c1b430470a6684"],["/2021/07/29/数据库认识/index.html","88bfae0208d55badf0829a2416ca77bb"],["/2021/07/31/Python多线程学习/index.html","ad72777036899273d684a478b383aef6"],["/2021/07/31/tkinter-requests练习/index.html","fcfaa329282dc2af3c9bcd3a9ca65cc7"],["/2021/08/10/Git学习/index.html","1a574104757737f5b7ef6234b6591513"],["/2021/08/15/pygame实践-1/index.html","158609804cb4bb05ca95e3fe169cb414"],["/2021/09/06/微信小程序开发/index.html","6abee6914c2481f0c2038f6ca2697ac0"],["/2021/09/21/命令集-1/index.html","820946f133b5208c621ce7122435b741"],["/2021/09/21/命令集-2/index.html","5c19df4de6ac7dc766646a0f5e471aec"],["/2021/09/21/命令集-3/index.html","5e64d8ef1ed0c23177b9ad942a1456a6"],["/2021/09/21/命令集-4/index.html","5124220f7abdf0dd0fdf3be7b039a804"],["/2021/10/03/socket学习/index.html","8bcde4fa90d08d72403abfdc27b3e306"],["/2021/10/10/dwm入门/index.html","dc80d9227f92f94bf32073a2ab2b641e"],["/2021/10/10/安装ohmyzsh并配置/index.html","c45d7f1467180c51062292129f099acb"],["/2021/10/20/css学习/index.html","32d7ce721f85d80e1f04843a91288723"],["/2021/10/20/wm入坑/index.html","491440825562ea44dc4045123e3c8a9f"],["/2021/11/03/微信小程序学习/index.html","93a924210eafef6b27eb4906f212b0ac"],["/2021/11/04/css揭秘/index.html","113a697509467c5717f0a5f222af4e7f"],["/2021/11/05/css-练习/index.html","99151bbefe91448c969f47cc7dbe4996"],["/2021/11/21/命令集-5/index.html","ffa386af83a248ee6911894e77156291"],["/2021/11/21/命令集-6/index.html","0f456304f36b0959a396708a395a54ed"],["/2021/11/21/命令集-7/index.html","0074986d5847d13a0b2decaad2d2ed95"],["/2021/12/01/搭建wordpress/index.html","1476c161cb69b3b4ce242a360553ba29"],["/2021/12/08/python操作百度网盘/index.html","b13c600017d239e25add461b775f5916"],["/2021/12/14/js爬虫/index.html","7cd96db335df6624553b00a8c4551087"],["/2021/12/25/为网站申请ssl证书/index.html","31bb048c9e436c423a172b2631941501"],["/2021/12/29/使用七牛云为网站提供服务/index.html","86aa8c90b76e3d3fb6875de0ced7da79"],["/2021/12/30/jQurey继续学习/index.html","92851bf6d20908676f11c7d5e669d6ba"],["/2021/12/30/jquery学习/index.html","933994f3bb004a2cd30923905227e9b4"],["/2021/12/31/vue学习/index.html","6f49e5a121e8a2edd31400193fe7551c"],["/2022/01/02/疫情自动打卡/index.html","56e1ad6cd88f98ba3649ee1d96ba7e30"],["/2022/01/03/javaweb初体验/index.html","c60f220fa68c412063a6cddc95a47935"],["/2022/01/04/codewars练习/index.html","fce74f776c7e24ead505a0cce51ffa1c"],["/2022/01/05/Spring学习/index.html","779b067358ccfd3589ef0be5b98e0fb4"],["/2022/01/05/vue实战/index.html","9e810d034d638820a0d05b8f09e686c2"],["/2022/01/08/gdb-gcc学习/index.html","f302f13ed1d14ce2a36bb1a6be5a26d4"],["/2022/01/11/python-opencv学习/index.html","0ec0218fb557bdd540aa289653d08649"],["/2022/01/12/汇编实战/index.html","4c09b4dedbd7b7942d367a04f1cda7e0"],["/2022/01/17/pandas学习/index.html","a965fcd677aed720f063fca937a7ce25"],["/2022/01/19/可视化图的工具/index.html","6daa1e155de941a304ccac3e3c66b1ff"],["/2022/01/19/机器学习入门/index.html","0f5964bceaad1160cb5333aafb9436de"],["/2022/01/20/cousera-ML学习/index.html","6e166a32801a12d19ddacb17ad47bf7a"],["/2022/01/30/typora解绑后出现问题/index.html","03091d99e342ac6344d35497cd18083f"],["/2022/02/03/NLP学习/index.html","a9338840df2aa0c3c30fe1e1ab28b83f"],["/2022/02/04/Web漏洞学习/index.html","67e77240b005139a18e2fa78479491e6"],["/2022/02/04/pyqt学习/index.html","826494ad51cf78ec057040535625d5d6"],["/2022/02/04/python爬虫/index.html","9b08839cd2743c4554536d00be15319c"],["/2022/02/18/Electron学习/index.html","729cb3f8a95235ff0fc90dbb61037855"],["/2022/02/22/疫情填报字段解析/index.html","9bf8fd57f2123c2450b728a4fb349a92"],["/2022/02/24/Bomb-lab实验/index.html","f68bcb9e6b6cbe56bab002099ec130c6"],["/2022/03/05/nginx学习/index.html","a9cc540b624c7aa1a6853f38072b935c"],["/2022/03/09/汇编原理课程学习/index.html","cc8d882c73b7e4f418aa2b27722b278b"],["/2022/03/11/Keras学习/index.html","1f978f58729bf6ed25f08ae7358ff779"],["/2022/04/01/graphviz学习/index.html","aedbfdd22f6b26fe96e62cca0d2abba6"],["/2022/04/07/django学习/index.html","5b4fe825f012c193cb3512c1ccb4c3c6"],["/2022/04/11/密码破解学习/index.html","f9dcf001b06a131bf743606494f8aa2b"],["/2022/04/12/flex-bison学习/index.html","bfef1569450e0ecc3f88ae01420caaae"],["/2022/04/15/pytorch学习/index.html","b7120e65cd80dfab507c710eacae3161"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","34513ecfae6a9a8604cd4d489507b09b"],["/2022/04/23/写一个音乐播放器/index.html","0ff4fa25b89515f029f9952e3fa784d5"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","a7f9ec0ed0e0edffba8d39c244751258"],["/2022/04/30/GAN学习/index.html","a7ad9b1a5c98f22baad5687023216980"],["/2022/05/02/html精学/index.html","05250eea740dbe9150b2231af1aa03de"],["/2022/05/06/write-a-compiler-by-yourself/index.html","f4faba6016b6ea4d41cad8669a3e2ed9"],["/2022/05/30/acwj-01/index.html","a8cb89e70eac4c9e4377f1386f60c8e2"],["/2022/06/14/animeGAN/index.html","b81ae0e3a420e105fe66b836c7d38aad"],["/2022/07/09/c-与算法学习/index.html","fff140d589bcade3bc640a0d65f52971"],["/about/index.html","ee490e9cf2fe4e959ad25a95ebee5be9"],["/archives/2021/04/index.html","7791f34fbc6312b6053725e6294d263a"],["/archives/2021/05/index.html","1225737a6a9f3d41e78e299313f84deb"],["/archives/2021/06/index.html","788f0fd3fdf5746ed261e94068514137"],["/archives/2021/07/index.html","957b1ff995af52a45368145c062d4f14"],["/archives/2021/08/index.html","0e44099f86a2ef8ff166658920eae4df"],["/archives/2021/09/index.html","fbed8d453b8b92cc1cebd4ed585ea01c"],["/archives/2021/10/index.html","cecd8183abf00099a273a7c14dbced2e"],["/archives/2021/11/index.html","50fec172b987a8bdf1bb630e6df6306a"],["/archives/2021/12/index.html","fd3fb66498cbef8c163f44141aa64196"],["/archives/2021/index.html","9ae412c354c2a71f65f05369be4c58bf"],["/archives/2022/01/index.html","edcdb3b39e617e838adb8e89f82c645e"],["/archives/2022/02/index.html","8143b7c96167592fb7d39520c5c367e7"],["/archives/2022/03/index.html","b24470fafa0ed89049592daafb9578cc"],["/archives/2022/04/index.html","c5b4a6d0a9b5de2fcbad6d6002f82780"],["/archives/2022/05/index.html","4bd600205e2b8015f93083a32e605e90"],["/archives/2022/06/index.html","30bcd196fe824bf21cb11f05035a83e9"],["/archives/2022/07/index.html","502e2b8c8b90451e73f72b4a95781232"],["/archives/2022/index.html","879ef598461b59f2c8cede2b38b94c86"],["/archives/index.html","231d255af6b330103638dc4a2a6f4946"],["/archives/page/2/index.html","974a297af1a92de2bb4b1280ee8de7e1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","0f6f0b32d8288950c324ea1d2c7f420d"],["/categories/ML/index.html","caa1e4eacc54ea27f758ed583747ae60"],["/categories/Nginx/index.html","a72f7618663d79a2423e0b48ebc7e3ba"],["/categories/Spring/index.html","5e62325e80cf6071ea045d1a47d817c1"],["/categories/course/index.html","2531f22125b28adad491dbc624e76ccd"],["/categories/django/index.html","2bb7cf1b69aa733d3ded71732c66818b"],["/categories/fun/index.html","6364340baeaac2dbc0aea4cb0665c313"],["/categories/gcc/gdb/index.html","19bd9080c940331194ac3d807cc140ab"],["/categories/gcc/index.html","6281d5a7d4584bcec330e4edea2f1f6f"],["/categories/index.html","71d6ac39e3257393f11cfe04f971d238"],["/categories/java/index.html","54d19369ef139badc254c0ddf7e89cdb"],["/categories/python/index.html","7f981abf012e0e7efb547bf625ecce84"],["/categories/study/index.html","024d14120d70137daf48f62fd9179039"],["/categories/vue/index.html","c5b2c28c622808263df94b547c668b7a"],["/categories/误区/index.html","2bd54e96f26e82a6609867d19db306af"],["/commonweal/index.html","cd2e7b1f8afd6167ba68a74f98e5ec7f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f1f3803fb5c700bb1bec5ec804267d6a"],["/home/index.html","506f5a6b66820c881535b4b273f041ab"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","8497742ba5effd45852d96be72e19db4"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","5bddc15beeafae0402b629177e0e68d2"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","38c495bdbab3f9791d1c32d3a76ee117"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","17ca28c2cf60f8ef596abb22096883b3"],["/page/11/index.html","b468112e76a6a6ade65afc9ab660d908"],["/page/12/index.html","c1082a52c3eea6fbe6e73880c9f45835"],["/page/13/index.html","daa1e13432dbfd69407b82eb72474025"],["/page/14/index.html","1cd4ee1e1204f7c60adda86828caf1fb"],["/page/15/index.html","0ca5c795cd639f797e111e73c38bf577"],["/page/16/index.html","ea56af332a4f9077c4c2d4470afbbed0"],["/page/2/index.html","36753916925945eedea0c342e33eb9e0"],["/page/3/index.html","cbb3450c1a8a70001583394406752c19"],["/page/4/index.html","f964a55fea8840c92cf0bd8f9352f516"],["/page/5/index.html","6bcf14a16f88d956be97d3c33f15dcf0"],["/page/6/index.html","3faf1b3802953db402c4718acc184921"],["/page/7/index.html","ae2ad749f79c029a6755bd420c1cb504"],["/page/8/index.html","494d10d41e0486b71acf0543418222f4"],["/page/9/index.html","e6876eac5055057be1a02f7ad9d5159b"],["/schedule/index.html","07ce680db3117df9c1f2ca4de99a1f96"],["/sitemap/index.html","4f68c9c2d715835515faa928765ed999"],["/sw-register.js","55cfc001bfccf5ceef0d0edcbf8ae1bd"],["/tags/AI/index.html","393dc9cf947ee27fc19df36f5b1248e2"],["/tags/BaiduNetdisk/index.html","9e3f6b65be7f758f5786fb813b897ed3"],["/tags/CSS3/index.html","0cf635b667abfbfb3a760e760a6f9c91"],["/tags/Electron/index.html","1b7b73e29875fd1b948af83f866ad276"],["/tags/ElementUI/index.html","2d372ead0cac2781494ee673c1710651"],["/tags/GAN/index.html","93492a7a0fe573279f225551b059c28a"],["/tags/GUI/index.html","68d4912c61cdca41fcacb74782cc09e2"],["/tags/Git/index.html","1278c8c28a7a8c7506b73e8ec213bdaa"],["/tags/JavaScript/index.html","e82a599bb06d93b4f60c314f4d66c7f5"],["/tags/Keras/index.html","916df0c8672dea989af8619f2d4e60b5"],["/tags/Linux/index.html","3186f17d84a529923c2bac94caa8185f"],["/tags/ML/index.html","c093f29d2e65894aebf2177d481a211d"],["/tags/NLP学习/index.html","fa6afad61c10a423c8916d0a865e7ff6"],["/tags/Nginx/index.html","cb24bb7c3c4d778413c37f5b1d61b990"],["/tags/Qt/index.html","01fc6ff11825e9d4dd4bc9c3d8adb109"],["/tags/SSL/index.html","d6350e891dbf80523af0c122809047fd"],["/tags/Scrapy/index.html","16414be4fdc8874bbf3828ce7d847e5e"],["/tags/Web/index.html","0719ab6c69eb3d14819c8646cb8440d2"],["/tags/bison/index.html","cb9289cb9293ec85c922dfa513d8408a"],["/tags/bomb-lab/index.html","650c92d3808f413d81485f1d2bfa0c88"],["/tags/c/index.html","0f736f4d0ba873eea21a6ce64c03a32a"],["/tags/cheerio/index.html","ae625c4e45e25c490fb14c0a67c24290"],["/tags/codewars/index.html","a961af3ee7e7d9fbb59800691c7fc588"],["/tags/compile/index.html","d2af1b857b320b65a3ac4fd6630e5b75"],["/tags/compiler/index.html","44659d45c3eb3a620741ad6e64e31a6a"],["/tags/course/index.html","0de7f5b12cc07804604e3d0624efc2e0"],["/tags/crypto/index.html","1254ca42b1a37b76731b2431146b3d02"],["/tags/csapp/index.html","569675061a85133fc0930cc3195a7aff"],["/tags/css/index.html","b365866f8a39cae6309b9ea51a998a56"],["/tags/data-structure/index.html","8c044e1ec2fca71ff716a7b9f2c50830"],["/tags/database/index.html","2e3746dccd44e9a11c882d3d753424f7"],["/tags/deep-learning/index.html","820315154df0a2b967ffdbc972b760b3"],["/tags/django/index.html","737c4482935e1e55a447ee63b2080997"],["/tags/dwm/index.html","71d1dd633b96af809ff29e0698ee8e2d"],["/tags/exercise/index.html","7838cfed5ea80fc5f6a9ef024a9eafe2"],["/tags/flex/index.html","521a9205c2dda0b02e99150746641e7e"],["/tags/front/index.html","d3bfbe4ded991433b8cae1e9b8a4ed83"],["/tags/gcc/index.html","611281f542c458028426519f4e459533"],["/tags/gdb/index.html","348ff2825baf627cf5c196e1184b41df"],["/tags/graphviz/index.html","4b1097f114f11ff2663f2207d75ce9fc"],["/tags/html/index.html","9ae50e0ccf5444763e7e9df25d457183"],["/tags/i3wm/index.html","14737f84d63f97e3c1a61896edfd0b3d"],["/tags/index.html","ce4785b0280c33a4ff2b54e340cdba53"],["/tags/issue/index.html","dc1901ffc7f01d6c8a22210b0cd85c28"],["/tags/jQuery/index.html","186f17e7e3291f16db5ed1bf228d198f"],["/tags/java/index.html","bcdfb6ba96666bea1c562368de7324ca"],["/tags/js/index.html","826271a6206eaa621d477c5cfdede076"],["/tags/lex/index.html","91e42581f203d4e17ba9d35c73d78b38"],["/tags/material/index.html","457f93b8c0c5a94b7cde1332690c4763"],["/tags/music-player/index.html","bdf9398940a71c0c8cc91ad2b84f346b"],["/tags/nodejs/index.html","20c4bbbdf25f0a122a791400903fa132"],["/tags/noj/index.html","ff9638cf8f59b89d7947f875e6c17db0"],["/tags/opencv/index.html","2bc2826be5f96268c3f3b8237ad92112"],["/tags/pandas/index.html","a16b641c0c297ab61ecc02f12b34665a"],["/tags/proxy/index.html","4350a5055e693c9ebd82f79fba5e44ec"],["/tags/pygame/index.html","b307f5ea68de47f94c207da3bcfa7619"],["/tags/python/index.html","b8f5bf6d820d0015886a39e0d27b452e"],["/tags/pytorch/index.html","9665185d7534efb697688142a75378ab"],["/tags/reading/index.html","7e94971c052e333ddebc809a58abd37e"],["/tags/requests/index.html","6819e44a1ce6da729b17f438ed696e71"],["/tags/security/index.html","90ff28422e02e9626e2b6546adf7f984"],["/tags/shell/index.html","c4aed774333e74ac673446ffe8b8f09f"],["/tags/sign-in/index.html","c55a531a391ab57a0428d4ebf5b68d8d"],["/tags/socket/index.html","3b2cb6214dd5fb3c3fc44ab759ac46d0"],["/tags/spider/index.html","e4879289441d7f0a5099d2c74eff3d6a"],["/tags/splash/index.html","a5d8511466a38bef60c94abfa7a65edf"],["/tags/superagent/index.html","7c3271e22b72346756299cf6db33daf0"],["/tags/tensorlow/index.html","b0de002bfce3f3a16eff549a0198c22e"],["/tags/threading/index.html","bbb2754820d76b2f662ea23e59cc2628"],["/tags/tkinter/index.html","a2156788cd284a9312681f8e4c36324a"],["/tags/tutorial/index.html","e5a68baf7146ed32ef7cbe910d41c580"],["/tags/typora/index.html","e8d78618b3a4d8e6d2190b3761be21bf"],["/tags/vue2/index.html","30fb78ad40d2e8dd27192ef7e872a96b"],["/tags/vue3-x/index.html","80031df31e0a4d52ea9356c891dd385b"],["/tags/wechat/index.html","b507d094ba9ca97aca2f8ddde8c0f1e8"],["/tags/wm/index.html","7993d11093ff60cd98cb760400713a35"],["/tags/wordpress/index.html","51045eb8dde61cc12b65823046209a1a"],["/tags/yacc/index.html","ce1d73569e2ca1f15bcf1ce62b6f01ce"],["/tags/zsh/index.html","87d8c2f563c3e5f1df82c4e36ab68e17"],["/tags/七牛云/index.html","6d2568086e8312c936e7350d87c33d8a"],["/tags/函数/index.html","d88faf4acf137e758961229b8bab291a"],["/tags/存储/index.html","d68ccf818dc58e37d7ee43e27e4be2ca"],["/tags/实战/index.html","b1334ce4db0acc20fa64a9e2cb780832"],["/tags/建站/index.html","d59919f556e27ed48e95d4777e15aa0a"],["/tags/指针/index.html","ac19ac773a9b71b81787b06b0462f991"],["/tags/汇编/index.html","b06d048bd26c7e922192b928949703ec"],["/tags/爬虫/index.html","2aa265f6f3507dde5bc60be00015a07f"],["/tags/算法/index.html","4d714975ba1203c211a6ef1284960a7a"],["/tags/编译原理/index.html","95f48ab317b358b78ea16375ccc2c7a1"]];
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
