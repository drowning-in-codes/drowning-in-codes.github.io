/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c0fd0c420787e92ff7aad5fc5499981c"],["/2021/04/20/稀疏矩阵/index.html","303094e2ce0480b6473e083e09ff7fa0"],["/2021/04/23/广义表简介/index.html","f3db05de911ff29b7df5be5b046a4673"],["/2021/04/29/关于指针和函数/index.html","7ddb731569bfe85ffc8c7f16651303f4"],["/2021/05/10/哈夫曼编-译码/index.html","b50b952b328cdccbfb9b39434c65cb2e"],["/2021/05/17/数据结构noj_2/index.html","d9187a3a987d36d374f40dfdaf1acfc3"],["/2021/05/30/数据结构试验/index.html","435315ed5d3cbb9d239b3f8dc59327be"],["/2021/06/12/数据结构noj-3/index.html","92b950599b348f9ce013a382af036ca9"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","e0d5873fc3b8ce13fd598d88cb05fb37"],["/2021/07/08/课程资源分享/index.html","647db99bc98279595d4ffc50d3293a8e"],["/2021/07/20/Scrapy-下载图片-文件/index.html","62c4130ff4b8de6e58a0796a5a6d9c3a"],["/2021/07/21/Scrapy-动态网页爬取/index.html","707405945fcd2119e82ba1d3410f4492"],["/2021/07/21/疫情打卡/index.html","dec2465be1fb4c608ab170c40af27abb"],["/2021/07/29/Scrapy代理设置/index.html","c610c8b130a182f21fa43d8f299e4eb4"],["/2021/07/29/数据库认识/index.html","94f4554022b6ea04cb8cdb7ae84e6c2c"],["/2021/07/31/Python多线程学习/index.html","1050e9990b6938bfbaa8f7e71911c95c"],["/2021/07/31/tkinter-requests练习/index.html","03d1f80819bf77b2a3642d29dea47d9f"],["/2021/08/10/Git学习/index.html","3686c8b52612425ccfd70cf50a9bd658"],["/2021/08/15/pygame实践-1/index.html","6668d37edb42122292951464ad78062d"],["/2021/09/06/微信小程序开发/index.html","78872d39af116b6715063736489f4150"],["/2021/09/21/命令集-1/index.html","d2899bc8b9a81ef0dfc97d66b10664b0"],["/2021/09/21/命令集-2/index.html","66d8b7f17d3a2c38965464af2dd84e8f"],["/2021/09/21/命令集-3/index.html","05f0716b86a51304a99530d8b4fecbdc"],["/2021/09/21/命令集-4/index.html","a9e46f857bc207b4b105fc8dae69d65c"],["/2021/10/03/socket学习/index.html","b9918e2d716975235ceebfbd488b5529"],["/2021/10/10/dwm入门/index.html","c86b230a7d6bb79f7d0291222de4b5a7"],["/2021/10/10/安装ohmyzsh并配置/index.html","a867b37813bda67eb4b02da3b570fee1"],["/2021/10/20/css学习/index.html","2045d738dfcbe97f6beb8c9cf3bc8941"],["/2021/10/20/wm入坑/index.html","d0fa6c6821308fef667b5998ce966443"],["/2021/11/03/微信小程序学习/index.html","dd5bf2d9ab0d71b90577209612cdfa31"],["/2021/11/04/css揭秘/index.html","ecfcfbb9ec830c87ab96373a369e351a"],["/2021/11/05/css-练习/index.html","643281d0ce9598aa947c57a33d976711"],["/2021/11/21/命令集-5/index.html","64c23496147b50d224db14a5a0c824ff"],["/2021/11/21/命令集-6/index.html","395e8241ccfb2d25b8a81696dd18b08d"],["/2021/11/21/命令集-7/index.html","c3e57e34e128b1eacc314812fef9f9ee"],["/2021/12/01/搭建wordpress/index.html","74b9a7fabd6448b6e3e0a3fc11ec4c3b"],["/2021/12/08/python操作百度网盘/index.html","4c4e07ffed9e78ecb0336fa0346bb344"],["/2021/12/14/js爬虫/index.html","b8d29980c7cd2ab8c74f7c06530a2a43"],["/2021/12/25/为网站申请ssl证书/index.html","c2be03aea32301fb889fa87c39418585"],["/2021/12/29/使用七牛云为网站提供服务/index.html","aba4980442729f836151bb10e439c8fa"],["/2021/12/30/jQurey继续学习/index.html","67529a308c8bc2649aa75dcc8b601bed"],["/2021/12/30/jquery学习/index.html","f6af02f0ccff3c5cdf9ea846548df1b4"],["/2021/12/31/vue学习/index.html","c8773e4756b3c99739eb7aad08b3573c"],["/2022/01/02/疫情自动打卡/index.html","87c8a0b113fcf871cd9111167ec34eb4"],["/2022/01/03/javaweb初体验/index.html","e719ed90d357768fc4585af14d2f856b"],["/2022/01/04/codewars练习/index.html","13f14e8fbffd6d22bb493e23406f1c8c"],["/2022/01/05/Spring学习/index.html","b2ad4e2ce4ffc7eb5e5cb585a2de8368"],["/2022/01/05/vue实战/index.html","32aed5d7b37f75b51090c48d45ddbacb"],["/2022/01/08/gdb-gcc学习/index.html","b978825efda6af877eda72326377a8bd"],["/2022/01/11/python-opencv学习/index.html","90d3c0ef5f42442af6cbe3a1dbc7e59b"],["/2022/01/12/汇编实战/index.html","e94a589acaebbd47696168e894266892"],["/2022/01/17/pandas学习/index.html","00349ea775fb6cacc6be4c89d5709d65"],["/2022/01/19/可视化图的工具/index.html","5371f9c56d9670074f33327e893abcd0"],["/2022/01/19/机器学习入门/index.html","6b4ae027aec29ddbc4fbd441bea1976e"],["/2022/01/20/cousera-ML学习/index.html","38e214e9af4cc41c09ed4ec7ba00c620"],["/2022/01/30/typora解绑后出现问题/index.html","03bb5cb2e28ea4334000b42315469f42"],["/2022/02/03/NLP学习/index.html","8afa99387f35004b057230a9700381d4"],["/2022/02/04/Web漏洞学习/index.html","66e18628de7d9468fd487a74feeb195e"],["/2022/02/04/pyqt学习/index.html","57486d90841de576338091cc857de7bf"],["/2022/02/04/python爬虫/index.html","18fb8c871a6f08c125aaffc589080f48"],["/2022/02/18/Electron学习/index.html","bdc735154b1cb56b44a528d116b9ba88"],["/2022/02/22/疫情填报字段解析/index.html","ac567ff237be0a3dabc6330c2b25ab92"],["/2022/02/24/Bomb-lab实验/index.html","661c796c76a0adf12060e3e8f92be29f"],["/2022/03/05/nginx学习/index.html","c8fc00a497dd64afa7f7274c204ab6f9"],["/2022/03/09/汇编原理课程学习/index.html","c7f43e11512c2b38874adce908d860af"],["/2022/03/11/Keras学习/index.html","22b05f144ec81ef3e93fd126856727d5"],["/2022/04/01/graphviz学习/index.html","0975dbd257b38ff2f903bcac26a643a1"],["/2022/04/07/django学习/index.html","da5c00d3c4e6659f09c7d2d56de55459"],["/2022/04/11/密码破解学习/index.html","c686ea3dce32657a2fc55a6a6268d1e7"],["/2022/04/12/flex-bison学习/index.html","464306c430d87b9e9f8f4652f9e4a149"],["/2022/04/15/pytorch学习/index.html","82eda698ea473016c116d873730970f5"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","aa79a3c2624b294cb399fc4fb40384a8"],["/2022/04/23/写一个音乐播放器/index.html","0198963ee64644eab37f06c9cf5269ef"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","b1be5e024f0461461aeffe94371ab5e2"],["/2022/04/30/GAN学习/index.html","f30c49e498e9fdb49b17fa4940233a42"],["/2022/05/02/html精学/index.html","4eae03fef7dd6f6c6e2ee4c564a9fd9b"],["/2022/05/06/write-a-compiler-by-yourself/index.html","b2eaa6ad698e72ce0ca35c0e71a01a1a"],["/2022/05/30/acwj-01/index.html","fd0f1337c68b26c4345a787947fd9348"],["/2022/06/14/animeGAN/index.html","a9c50817fe1de898e13bb0e05284127d"],["/2022/07/09/c-与算法学习/index.html","16ad9846766b036887e8eddb50a6c5f4"],["/2022/09/19/flask学习/index.html","5f9507c8ccfd5db48ae985d91e8fcd24"],["/2022/09/22/cs224w学习/index.html","b26fb444d4254f293f61760bdeb76796"],["/2022/09/28/记录一次wp重装/index.html","b8fc7a9bc6cb452281587f243b1e5773"],["/2022/10/01/Obsidian学习/index.html","9383a708110662915cb3160f723311e3"],["/2022/10/08/vue-element-template实战/index.html","b1a1bf6f056abb72f4619b6a9c0a28c1"],["/2022/10/25/vue网上商城项目/index.html","5d76cb58049cc9141aa6795547fbd7ba"],["/2022/11/11/leetcode刷题记录/index.html","f5aa66fa3dcfd113f551668a08214f15"],["/2022/11/11/使用overleaf优雅地写文章/index.html","a79a014335f082f0b2185a1cccc1283b"],["/2022/11/22/磁力链接与RSS订阅/index.html","0a963c55f2f7c2398703e21c8cdb083e"],["/2022/12/11/uniapp申请获取地理位置/index.html","d31f728d7c8cfe41abacf85a96c1d010"],["/about/index.html","4eb62b2f6cf24ebcbdaa37027fc3d05c"],["/archives/2021/04/index.html","be9d56830fec11c358343a9712748a79"],["/archives/2021/05/index.html","a144f00c1c44b5ce8b0fb22ade9c95a3"],["/archives/2021/06/index.html","5f7bc965673ef664b24dd5ebc3ffbbd3"],["/archives/2021/07/index.html","fc17d9a3b8b6b0935ba3ad2f3b03626f"],["/archives/2021/08/index.html","f6ff4ea44cbdd7609dd525c859ac0ddf"],["/archives/2021/09/index.html","c778fa1b0df52d908b37ec963403d0f0"],["/archives/2021/10/index.html","7a5699756b16d8931b4aab3bd4ed0d02"],["/archives/2021/11/index.html","ae39df8f7825cab337e7e0dbdc3ce53d"],["/archives/2021/12/index.html","9c7163c0289c0e2a83f7ea7eb61dcf39"],["/archives/2021/index.html","a6f95d4640c46519c102986a252dbf2b"],["/archives/2022/01/index.html","ec28b790329e8224552e69be949278c2"],["/archives/2022/02/index.html","7303ed10631ddd99010a9f1b9968d395"],["/archives/2022/03/index.html","0097c2e804013b680ae24e27b535db12"],["/archives/2022/04/index.html","eccb3d7b36610f3fe627bbbbff918c62"],["/archives/2022/05/index.html","9215fae47dba1529533992455327edfe"],["/archives/2022/06/index.html","b6aa4a9bde424c378ac76859c4745ede"],["/archives/2022/07/index.html","efb204a94f018086c783a401a62310a9"],["/archives/2022/09/index.html","cea70b956af652da4e30484920899676"],["/archives/2022/10/index.html","76e2a406b19f26ae8c3e3d2b17e2a459"],["/archives/2022/11/index.html","f1d6788e97b5a564da40dfe292634ac6"],["/archives/2022/12/index.html","7ccd4082f885ae0caa0db5bd00a80c30"],["/archives/2022/index.html","37027386c9021939ca7237a00df41142"],["/archives/index.html","4b9e185d874151f7c8e5c7913b8a315e"],["/archives/page/2/index.html","beb31020b3af97a3dccf32f2dcfce80b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","f740d001a28f2317e4ed4f02ae061939"],["/categories/ML/index.html","35bf3914df4c37c0232b51598f9c9e0a"],["/categories/Nginx/index.html","c75efd0983df76c7bb971eb0b1e5020f"],["/categories/Spring/index.html","9abe3a2f7323eff22310f81775f84187"],["/categories/course/index.html","f063cedb04f86e75982e8d4d6ac8fcd7"],["/categories/django/index.html","fb791f417b21dabfeadec0ef068b5856"],["/categories/fun/index.html","c42c35d10f4cabe895c652624b7ed389"],["/categories/gcc/gdb/index.html","0de5f679bde69d5eb139c7bd162b2dd5"],["/categories/gcc/index.html","43ec4dc502ec556f13cb7ac1113aa057"],["/categories/index.html","a65663e6804f620e1a822d6e5fa28dc9"],["/categories/java/index.html","b66fea01c465cead108c5ddd35a60e86"],["/categories/python/index.html","0809344971e110fd27b57a3140a16a2c"],["/categories/study/index.html","ffb082d5b4df70bcfef085edf22fe19f"],["/categories/vue/index.html","ab7670eccd4a1db8b0d04760a62009f5"],["/categories/误区/index.html","a619a18c35b030addf24159196c9bf46"],["/commonweal/index.html","18fa62f123badcf2bc88897051ee99cc"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c40ec173cbed2d4c41d2deb3afef82c2"],["/home/index.html","2e48826561753af073bfcd6f4458d702"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","faa91029ff32b59064abbe2a2052a159"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","7eab1f1c7fbf00062749b349c574e7d1"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","b012fb0912453ed7d3fa8c2fa51b8fc9"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","b2870a7e5cc5dd0fe2cd8e5fc7dfaf7a"],["/page/11/index.html","85f96a2e7da5be02aef83b204d99231a"],["/page/12/index.html","47b7f211bcceeaa14006cf87d521db0e"],["/page/13/index.html","702d3e045275faf4eb02832c03a8aa3b"],["/page/14/index.html","9e05bfb4b1cb60bc4e27c89ce29e1b0d"],["/page/15/index.html","e0a3c3c8670c14f12e95c62aa82d059a"],["/page/16/index.html","05e66c71fa53aa99fd1965dd62fc95d8"],["/page/17/index.html","dbceee6daaa015823f2ecd320dd53758"],["/page/18/index.html","82baa022dad15770e62070f180c8a140"],["/page/2/index.html","66eb0bdb97c2609b70d6cde163eeec1f"],["/page/3/index.html","d85d86034aaa939471e60b418634e2f0"],["/page/4/index.html","c9b25d8f96d40af948c6bd0cfad2512b"],["/page/5/index.html","5e45bca19292b4e026a0c939e9b1c446"],["/page/6/index.html","07cb30f417bc0ead80482b58bfa399f8"],["/page/7/index.html","4fb78ed39924d51f1fb58ead290bd72d"],["/page/8/index.html","20636478840478615d88aa8c763cb502"],["/page/9/index.html","f65f99dc20929d263b24d391a6774c82"],["/schedule/index.html","146c7c69a3e4558fd571af83392e77f6"],["/sitemap/index.html","bb22bb902c9827ae2e85f087bf669a9d"],["/sw-register.js","ca9242252dba84bb2d770a00b94b41ce"],["/tags/AI/index.html","62588bea2d8f23d8ec6fe8b5d57474b7"],["/tags/BT/index.html","e52a92ad654f8b89e37ddd16eea0dc10"],["/tags/BaiduNetdisk/index.html","90c416ceee8b835835ece8f3a2710c59"],["/tags/CSS3/index.html","68013f056c3d45109669b76888a6ab2d"],["/tags/Electron/index.html","c91100d3be4faab9dc9e22c63e56e572"],["/tags/ElementUI/index.html","c8e1bd071d290316b3a358c95987c6c1"],["/tags/GAN/index.html","8003a8bf849da5927461bc6a03e66224"],["/tags/GUI/index.html","3367bc18e30cb17651bc2f229f81d10a"],["/tags/Git/index.html","3041bcf5aba5e0c062fd4632bc4852d8"],["/tags/JavaScript/index.html","47afb4a1133e5176efeebe1dce0bdae4"],["/tags/Keras/index.html","6dd90ab94ac75abe4d0a1d6a96262d23"],["/tags/Linux/index.html","e834a9570bbad82c643cc43aa5f0da32"],["/tags/ML/index.html","4d95a982bc65a21447909ac7dd3e7e66"],["/tags/NLP学习/index.html","93aa5b3a6637eb97c3c5cf67816fd0fd"],["/tags/Nginx/index.html","c1961b13a8f0c9a3812f7c427cb7a6ab"],["/tags/Obsidian/index.html","6390bf74ad1a85f33db18437e7a0087f"],["/tags/Qt/index.html","f9e7786b148d6ecbae8acb3b860e9a01"],["/tags/RSS/index.html","04f0cb31a2380af36aaa896e7ee64f1c"],["/tags/SSL/index.html","93138be23b14833c98e1dce56409e02d"],["/tags/Scrapy/index.html","cff1d84f036f5d0ec0cae61f7d7a3996"],["/tags/Web/index.html","86c5d1f690f12daaff7a63f4f0afef41"],["/tags/algorithm/index.html","aeff02356126130a5ccfdf63a147da21"],["/tags/bison/index.html","7eaa8af20f440a23af4cb6f3db7ed20a"],["/tags/bomb-lab/index.html","e3fbe12d88deb3c252ecb97206960279"],["/tags/c/index.html","2632298dd5bd243a1bc000bf6af83fcf"],["/tags/cheerio/index.html","9770f348a7e10957bf8e4e0bcb67c536"],["/tags/codewars/index.html","0d6135c9ade7ce34e744b034ebe31de9"],["/tags/compile/index.html","e378ca16b3186f5b8932216ec79f646c"],["/tags/compiler/index.html","945bfc3896f4ca615c8100456825e335"],["/tags/course/index.html","545ffaf017bf833817fa09155174b5f2"],["/tags/crypto/index.html","31716edb22300c911798aaf74fa0ed63"],["/tags/csapp/index.html","7770e0b795047a0750cb9f6926771ab6"],["/tags/css/index.html","4a5602f3a5a2d01d60c44c1ba03b4c8b"],["/tags/data-structure/index.html","aec0d28f371c68219024463e5c14962b"],["/tags/database/index.html","9dd0456f91d1d943bfa0bc975210190e"],["/tags/deep-learning/index.html","633e91375222bfd5aaec0ba4a6e50551"],["/tags/django/index.html","067d8e341d1a1fce684027d6a78f5b87"],["/tags/dwm/index.html","181951bb73a9270db555523e3e7014e5"],["/tags/exercise/index.html","6e262ae06d18683e3310d13a14ebd55d"],["/tags/flask/index.html","f5714b88aba8828cae9ece21e229b0ca"],["/tags/flex/index.html","088110a17bee3ef8c84274bee03913ad"],["/tags/front/index.html","f3c4848e27604ec5a59b6e12ccc88991"],["/tags/gcc/index.html","23b2f71d30324d18826fcca531c7b232"],["/tags/gdb/index.html","176ecdcf6524831290545d85e552174e"],["/tags/graphviz/index.html","184d79657499f1ac4ead45d3812bc9ae"],["/tags/html/index.html","ad5cfd24684cc13dec644b22e3a21f3c"],["/tags/i3wm/index.html","717da936c1eb55ea67f390e2377ee6fb"],["/tags/index.html","bb5a4e1ce06634f692b5da4004aa1b27"],["/tags/issue/index.html","929ba5e0a7efd2a51bac35b1763c0ff9"],["/tags/jQuery/index.html","b96024b7fc925b40458762a3d5f10578"],["/tags/java/index.html","e71e24215cb0ddda1803867d47b763ab"],["/tags/js/index.html","cfce745c30162864342c8ee17d6b7d86"],["/tags/latex/index.html","6d547c56946937ff2359084b665b3b51"],["/tags/leetcode/index.html","ee0f435e7ae31b42dbff9e3a6c292764"],["/tags/lex/index.html","ce3fe9c6a2f646a4177a15f393354394"],["/tags/material/index.html","6be221c0a242d0786b653d713a06fdaf"],["/tags/music-player/index.html","39c74b9e2a016a02995e29753c387bf0"],["/tags/nodejs/index.html","c21ca8118b2c404889d9042df8e7ab72"],["/tags/noj/index.html","8456a080aba7c0d1c537da179b9e521a"],["/tags/opencv/index.html","102f997a9574eaa214eadbfab2366c24"],["/tags/overleaf/index.html","eaa2c8cbf0ce2a5d0f2430f483f3b2eb"],["/tags/pandas/index.html","496e6902d46540152fa01dc495229f08"],["/tags/proxy/index.html","18998b66d20316d2a07fd6894f194738"],["/tags/pygame/index.html","550c6e3bb3a671997377d4845364b090"],["/tags/python/index.html","6f5a886901f12231c1b1f8dd50b3bbd0"],["/tags/pytorch/index.html","06860e7b782c90505154a1aa420b5a94"],["/tags/reading/index.html","44f720113692cf13236ec7537a65acd8"],["/tags/requests/index.html","27fc822f1e99688216171206b16e487a"],["/tags/security/index.html","57db92cac74e91dbba518877ee9132fc"],["/tags/shell/index.html","eeb31e14d00f78bbcd8b121d925bfefd"],["/tags/sign-in/index.html","1377301788e511eba78e9d36539515c3"],["/tags/socket/index.html","e6902bead7ad37f7fd5f96b6e4145ea7"],["/tags/spider/index.html","12a446593e18858518acd857890ce12e"],["/tags/splash/index.html","ae70e23d55102289f462a27b587d522e"],["/tags/superagent/index.html","1c31dba49ad1b424e9f448203829ffda"],["/tags/tensorlow/index.html","60edd29d4bae89b5f5851b0adffdcc78"],["/tags/tex/index.html","0c30c4ccece45f211f43846c5d7f7a4b"],["/tags/threading/index.html","123ff7d4eed95354c733cfcf52330156"],["/tags/tkinter/index.html","dc3b42f5aa9dbb0fc2a951d325a825f6"],["/tags/torrent/index.html","000903e9178e7a5ca1832e4912fda9bf"],["/tags/tutorial/index.html","636405d71309c01fe7fb53f8259a8b35"],["/tags/typora/index.html","d59499de18e2075ca0fea9af1c74c2c8"],["/tags/uniapp/index.html","fdf30f895932d7699389f5382b2399e5"],["/tags/vue-element-template/index.html","0f8a6544ff21fd67038959a625995989"],["/tags/vue/index.html","c4230a5a08df91ced9e8835aef41f305"],["/tags/vue2/index.html","5ee7b64d15e9af0ce7b7659ea2ab4756"],["/tags/vue3-x/index.html","6ac433302cc243dc6c70104d3b13137f"],["/tags/wechat/index.html","daea85d15841c6f954b8f8fb08ec0f61"],["/tags/wm/index.html","7c2f92facb88f30cf4ba37437143e9ac"],["/tags/wordpress/index.html","743bd53ccf36cb91e47f92f34db08e11"],["/tags/workflow/index.html","7613d56e6ad5a378b0cbde16194e1ae1"],["/tags/yacc/index.html","d9e6b7623aa9afc81fe5fbdeee4283b5"],["/tags/zsh/index.html","69dd09ab6ae15b0f3a811007aeb96d06"],["/tags/七牛云/index.html","38a93d4ef54bcdfabf20ee2b1f1aadcc"],["/tags/函数/index.html","8ce034601f414c7734c7c9353710dc4d"],["/tags/存储/index.html","67014f6d62a91775e3079aa0280acb51"],["/tags/实战/index.html","6a229639498787dc1c6411a523de637d"],["/tags/建站/index.html","0077b0b2d044173634d2906f3e8e37a9"],["/tags/微信小程序/index.html","5d23473c4a6de1624f477529c13a8516"],["/tags/指针/index.html","3ce75c721d77a161d958fd0e6f53df49"],["/tags/汇编/index.html","378a4433e8087e0521cde54153927ca4"],["/tags/爬虫/index.html","6fd194c254955ae6efe0d78911659290"],["/tags/算法/index.html","5d510e76625507992fe9f477c87ad29a"],["/tags/编译原理/index.html","e146d00cdd685002929df3ad36e5d593"],["/tags/获取地理位置/index.html","03b891614e3821f110f9c6346144025d"]];
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
