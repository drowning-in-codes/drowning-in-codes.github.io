/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a62a32dfe2f1fd6f0342ed36a40ffe1d"],["/2021/04/20/稀疏矩阵/index.html","b473f108d9f674b4b45b7ce50c94f2d6"],["/2021/04/23/广义表简介/index.html","3ae6f711a3f47c319b0f6b6b112539a4"],["/2021/04/29/关于指针和函数/index.html","1adaa55d3ae0545277e04ef6ae75cd2e"],["/2021/05/10/哈夫曼编-译码/index.html","ee774ba514ca0fca006394632b82343b"],["/2021/05/17/数据结构noj_2/index.html","5a1f550580b7487581a487c26c25f9d9"],["/2021/05/30/数据结构试验/index.html","6144d1efa72f3d50f873a47bd0c0a1ee"],["/2021/06/12/数据结构noj-3/index.html","fd4d0178a28302f68b2b87f90e6b2975"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","bc54aa79393ebd57f2a642a1e842ad02"],["/2021/07/08/课程资源分享/index.html","cb528b0f09cbf67c1a3ea989053bc7f6"],["/2021/07/20/Scrapy-下载图片-文件/index.html","472556a9b898670a826227aa274a569b"],["/2021/07/21/Scrapy-动态网页爬取/index.html","baad58d4a6fab1492279f97b2a0ddb95"],["/2021/07/21/疫情打卡/index.html","3c54b26788fa795337d099e131a05a50"],["/2021/07/29/Scrapy代理设置/index.html","17bca910f7f7af38132c7156e7135e15"],["/2021/07/29/数据库认识/index.html","1dc28a7c83d55f3a3eb6da48f2cf62ce"],["/2021/07/31/Python多线程学习/index.html","c345986b63586be8712cf1048e2894ad"],["/2021/07/31/tkinter-requests练习/index.html","136e4420fe270ebef03f0db4574d2541"],["/2021/08/10/Git学习/index.html","0788bff19f102581e0c6a6d91b122ab0"],["/2021/08/15/pygame实践-1/index.html","38b2582905597c8fc58ff0e3a21e40d6"],["/2021/09/06/微信小程序开发/index.html","c3ebb6985269919137512285fef24413"],["/2021/09/21/命令集-1/index.html","cb32ba59c5910d54a474fbf8812b7cc9"],["/2021/09/21/命令集-2/index.html","b134d2cdf59fb7b7b8e501e11a8f9eb7"],["/2021/09/21/命令集-3/index.html","2171bbbae8e893fad3f4b8f40f03eb87"],["/2021/09/21/命令集-4/index.html","b64e9e24157cd54634b5a212dec2f801"],["/2021/10/03/socket学习/index.html","d2a54fa419e518f068c8c0f460a775a6"],["/2021/10/10/dwm入门/index.html","b258f0f03850eeec11b63e2c17981181"],["/2021/10/10/安装ohmyzsh并配置/index.html","930812deeadd60112d957149be8f61b8"],["/2021/10/20/css学习/index.html","cd5c43732041b7323f9e72f3316ea6a3"],["/2021/10/20/wm入坑/index.html","c787b771e6ba21a18f9d319d0ffa083d"],["/2021/11/03/微信小程序学习/index.html","146698f730b2941d73f807be57bcfb7a"],["/2021/11/04/css揭秘/index.html","99bbd5a17e0e6b6ab8b32cbbbbbf4504"],["/2021/11/05/css-练习/index.html","4f7709e6a25d661c6711233d32d28265"],["/2021/11/21/命令集-5/index.html","6e4d2ab9fb5b1e743a4eb5a87d3d4858"],["/2021/11/21/命令集-6/index.html","4e8f47ccbb537af4299c08d3acf73868"],["/2021/11/21/命令集-7/index.html","2066498f9222b30d84421bf447b0b469"],["/2021/12/01/搭建wordpress/index.html","227b4feb80de646153b489c62efa325f"],["/2021/12/08/python操作百度网盘/index.html","8c01459908f728c7bd5787df26c02747"],["/2021/12/14/js爬虫/index.html","39f23bde7a76b0c62fb045c1d4477ee1"],["/2021/12/25/为网站申请ssl证书/index.html","bed38de2276e5c6f6caccf634939ea33"],["/2021/12/29/使用七牛云为网站提供服务/index.html","cc8d50d604b370181c8913d40be81024"],["/2021/12/30/jQurey继续学习/index.html","5ea7e53bbe7db060309e4018cd11f29d"],["/2021/12/30/jquery学习/index.html","c14c41bf8dca53c4027228b35f9d725b"],["/2021/12/31/vue学习/index.html","266fb14c348fd54e577b377944259441"],["/2022/01/02/疫情自动打卡/index.html","3c8055e68717ab25808422f7f361a049"],["/2022/01/03/javaweb初体验/index.html","ab25c4a4c437555c3952514938cb0f61"],["/2022/01/04/codewars练习/index.html","00e93c55ae2e4b08b7436452612cd8ed"],["/2022/01/05/Spring学习/index.html","5c6893c0cc7e34712d334cabc44798f5"],["/2022/01/05/vue实战/index.html","92057cdde8ecc4b081485efaee039bec"],["/2022/01/08/gdb-gcc学习/index.html","45e8ebdccd6d00fefb0eb71e4bc1345f"],["/2022/01/11/python-opencv学习/index.html","1b0b142a811b23b2f96a89bb2e02c4ed"],["/2022/01/12/汇编实战/index.html","49c1761d7a40de78674e527ebcf62c08"],["/2022/01/17/pandas学习/index.html","ff49da223486261284bba40d121847d7"],["/2022/01/19/可视化图的工具/index.html","018c99e47509c17ac5f0af2b1b622c85"],["/2022/01/19/机器学习入门/index.html","6b703c30e80070e4b597cddd989bc6ee"],["/2022/01/20/cousera-ML学习/index.html","15ee070b120eb7a98f6e69cb5f9950e0"],["/2022/01/30/typora解绑后出现问题/index.html","0afb6a22eab0d55d479d83f3b2b90c27"],["/2022/02/03/NLP学习/index.html","d5a60cfbf8d85728849a2cb14fd72847"],["/2022/02/04/Web漏洞学习/index.html","8ef7e14ee0fbd4466abc5e184c5d5541"],["/2022/02/04/pyqt学习/index.html","8b385f18f95b4b95a817ed7299301869"],["/2022/02/04/python爬虫/index.html","fb69a64b5b8775aefad1be2a4864d5ef"],["/2022/02/18/Electron学习/index.html","b044c20d59cc43d1de5a9771ca579a11"],["/2022/02/22/疫情填报字段解析/index.html","3b98b2efec51dc1ed4ebe75d783dd120"],["/2022/02/24/Bomb-lab实验/index.html","5e81b11af9160532011f5b5b7670bbca"],["/2022/03/05/nginx学习/index.html","99a1630abc0d9f9905cdad7b40014fb1"],["/2022/03/09/汇编原理课程学习/index.html","f21307ff9b501ed3a959af45f12ca5c9"],["/2022/03/11/Keras学习/index.html","77f1a5bd140e3984395526a71661d9bc"],["/2022/04/01/graphviz学习/index.html","7f6bfebf837cab7fdbcff10ca8e42cbc"],["/2022/04/07/django学习/index.html","c0bfc44e8b8e809d49c663147de4b85e"],["/2022/04/11/密码破解学习/index.html","30313db13d9ecb12f327aafc1466baf6"],["/2022/04/12/flex-bison学习/index.html","3dd9d74e88570848b1a5eed03e3ec014"],["/2022/04/15/pytorch学习/index.html","9ccde4bc58cb65c34d985b98061894f6"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","63dea1149e83cc57e7cbe4b121d81a30"],["/2022/04/23/写一个音乐播放器/index.html","61ea832943297392bcf1388a1f0e4468"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","0939d386697499df48ed9c5101513e28"],["/2022/04/30/GAN学习/index.html","f4f969de4f239d7f2cd53000fe0e76e5"],["/2022/05/02/html精学/index.html","55269cb59bfc3fe3c60e9f7da52cff39"],["/2022/05/06/write-a-compiler-by-yourself/index.html","7c71a94b938564d51f664ccdf8414ea9"],["/2022/05/30/acwj-01/index.html","374b7c8e94e5b3086a07819aba262216"],["/2022/06/14/animeGAN/index.html","4d44eb41a60db3baed3189fed7796def"],["/2022/07/09/c-与算法学习/index.html","76d47d00136fcc9a689ec1b940288ab7"],["/2022/09/19/flask学习/index.html","72261b3274f716c252a45a0a6b413e19"],["/2022/09/22/cs224w学习/index.html","e0e3e8f94848f176d323c775b8ac88eb"],["/2022/09/28/记录一次wp重装/index.html","1d354b78198eece7ba631a3287d9a377"],["/2022/10/01/Obsidian学习/index.html","f2153e253c517dff413b80e36710419b"],["/2022/10/08/vue-element-template实战/index.html","d1b1245e6247567447a853826e21b257"],["/2022/10/25/vue网上商城项目/index.html","81b7635c811e69d47aedfcfc4af9481b"],["/2022/11/11/leetcode刷题记录/index.html","a6681c1533c1ea417c1ecde078710b64"],["/2022/11/11/使用overleaf优雅地写文章/index.html","72edeb88fc26b19630b3d0b8def356cd"],["/2022/11/22/磁力链接与RSS订阅/index.html","eba3d26109cde590ef62c26d5e2d8e51"],["/2022/12/11/uniapp申请获取地理位置/index.html","4d170483c1f6b8d198aee6b2578de053"],["/2022/12/26/pr剪辑学习/index.html","7f713ac22376ffbfdc5859f60102ea17"],["/2022/12/27/css中的flex和grid布局/index.html","8e8257c806e098ac0dd902114935f186"],["/2022/12/28/Flutter学习/index.html","1227466dfa4f74b2a69ba5cd9a546809"],["/2023/01/01/美化github首页/index.html","559c737d662b44b9cb165440e2a0a78f"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","cbf3741b7f4423eb8631e9d6a9e40a07"],["/2023/01/04/构建微信快捷发布文章工具/index.html","bf5b90ab6fe099288d7576cb661ba780"],["/2023/01/14/dart学习/index.html","1ebc438d0953bfe74a5ff71818e6bb26"],["/2023/01/23/闲置服务器BT下载影视/index.html","fe892c9eb066e27fe093317883dd61ff"],["/about/index.html","11e3b2af00f56b2e3adbe586b31a1a14"],["/archives/2021/04/index.html","1f5d899826751256a605dd2b91b62a05"],["/archives/2021/05/index.html","9253ddde9bc2967befbda61927bd4c4e"],["/archives/2021/06/index.html","ac7950628d8992dc6bafb653bcce2b03"],["/archives/2021/07/index.html","b1b8e4c3792099565d94ba2ac6fbf0c5"],["/archives/2021/08/index.html","c6553ca3ef698f080e1d1072c5043e03"],["/archives/2021/09/index.html","fd406b5318c3ae79ae97b6b76434ec82"],["/archives/2021/10/index.html","e7b30bd1928d7c2046b8df79b2b75fb8"],["/archives/2021/11/index.html","6239400373a9db70252431a210f1e8e9"],["/archives/2021/12/index.html","63ade18484cf0692be20ac714af42cf2"],["/archives/2021/index.html","fd7e64259c74a14b43a6af17d3cca35b"],["/archives/2022/01/index.html","922237bae1bee9329bbeb64786543c07"],["/archives/2022/02/index.html","98d9f98e2e5526101732c84274b7ec1b"],["/archives/2022/03/index.html","a3a4dec070c0bb174172ddcc256eccf0"],["/archives/2022/04/index.html","63f963d2815c8df5aae6a841690de955"],["/archives/2022/05/index.html","5051fe4fc99cdeaea600aa71671068b3"],["/archives/2022/06/index.html","2b5d6eedaeba01328d6e55683937d12f"],["/archives/2022/07/index.html","c798989bedd915fd64388c1bc7ab56e9"],["/archives/2022/09/index.html","2c578ad22499ac7818089ad813e179fb"],["/archives/2022/10/index.html","6f567b85fab41b3e38f098b8638258f6"],["/archives/2022/11/index.html","06d38aaca3ea7edab37e6683e5a23247"],["/archives/2022/12/index.html","3f2667803904e344d44d8277d922e554"],["/archives/2022/index.html","7f8d225868fc64dc2dc513e1c6ff517d"],["/archives/2023/01/index.html","f38ca9f2b7609949f6be0d83ecf0bd2d"],["/archives/2023/index.html","065bbc3d516423c550b321b06a4487cb"],["/archives/index.html","48083459d9d3c65633a988eab667f7d2"],["/archives/page/2/index.html","9f2c422503cfce0000313597b22b581d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","dd7d99455997b4772482accbddeda51d"],["/categories/ML/index.html","2e9622288388f545c056d73a143c7a5f"],["/categories/Nginx/index.html","31fa551861ea04219695bf4dfb2fa8cf"],["/categories/Spring/index.html","cc6fac1d8dd807c132be6ac59a8749c9"],["/categories/course/index.html","faf5d83e6d5c2995ddc3788a19fbcd05"],["/categories/django/index.html","6f4215a5aa053a430c652a7dbb0e0a7b"],["/categories/fun/index.html","12210cc8f96761612f9f9a6fbda22036"],["/categories/gcc/gdb/index.html","3c1f63b15f97eee8d7d0e55b1d495b77"],["/categories/gcc/index.html","29586eecb3db5d38d7d8c6f2ec97005f"],["/categories/index.html","431c19219607a9b8a5105d311ede0bf6"],["/categories/java/index.html","8587fb58540fb6a39ebde8bb7e2d0e0a"],["/categories/python/index.html","cae866ebcfd9ca49687eb7a3ff16f312"],["/categories/study/index.html","08bd9a77c1cb53fea1208137b12c7e19"],["/categories/vue/index.html","59d4720097dc3dd3bf12c686a35abb87"],["/categories/误区/index.html","84c4be18d5703b00ff0327883847507a"],["/commonweal/index.html","0de591a365fa957e0c0ffb08df284288"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","118debe14b852c27bbd7a152ea5fe721"],["/home/index.html","c0418f44289a178698704a175f418f48"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","5011bb6bec04376428baaf2af5329ca3"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","364f440677c65e8f2a261c2fb1c96681"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","899ed2b34397eb5ea8ade7cf0092dbe1"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","4332ddd49d329b17f761ad6c03262086"],["/page/11/index.html","7b9e0bf92c90ac4f8317bbde68b621d0"],["/page/12/index.html","19fdaea80a464a6ea750956a53cd6929"],["/page/13/index.html","cef5ba61246ebbc19415059afc9d9ecf"],["/page/14/index.html","e7be4ab66cdc153cb8acd6f3260560eb"],["/page/15/index.html","ef45dbfe7f439720f6233e919f9c8594"],["/page/16/index.html","3224326d6ac5e98e887450481631b33e"],["/page/17/index.html","14bd58007226dde7f96919a442873746"],["/page/18/index.html","a6ea41ecd4af0e251bf977432a8295e5"],["/page/19/index.html","a6bf9d904ac6403c2767f30e3b424627"],["/page/2/index.html","6f7524f4bbd4b821e7c554dd276ab4e7"],["/page/20/index.html","e72d3226bfa9cd486b0305e277f099e0"],["/page/3/index.html","a65bdc8319b9c99e7b3621ecbbe63556"],["/page/4/index.html","cddd4faa53a57c21d96ed970bdb8424d"],["/page/5/index.html","44b9dc648b4c5c60aa290d3c5e4660b5"],["/page/6/index.html","f57c6a46dc80c10f786454605d449e28"],["/page/7/index.html","a2689a5b9d37517e13db26e24b146fc9"],["/page/8/index.html","eccf86428a8584d69c1dbcc0763fcaf2"],["/page/9/index.html","538b029f55a5498a82563c5d16866e6e"],["/resume/index.html","0ccdc017d9ed8535dc45f7eb6eadb1a1"],["/schedule/index.html","e77db914e8542dcf576edecde2bd2512"],["/sitemap/index.html","0ddbc26a38f40e894ad3336304573703"],["/sw-register.js","af91b5354f37a2dab60962d9befba41b"],["/tags/AI/index.html","bbb6da4f91871239cd80350101ef8e2b"],["/tags/BT/index.html","047a5f741aea7f9b07f11647c04ac5b2"],["/tags/BaiduNetdisk/index.html","adeb5c864f1f830f06a3f4e2ad26c311"],["/tags/Bootstrap5/index.html","6587a4075e6c7c859fc8a5290efe1e85"],["/tags/CSS3/index.html","2a62abf7df846277a607882b95bdeec5"],["/tags/Centos/index.html","800161a4ec3aff3d01524b738ec1e9a9"],["/tags/Electron/index.html","48f5ddcbc5bbf89e2831cb4adb5aeddc"],["/tags/ElementUI/index.html","574cefd72bff5a2e2304f082f5337e79"],["/tags/Flutter/index.html","88b92b220e598ff6c592a71994a105f5"],["/tags/GAN/index.html","c7f8e91c519c2c964585d33ee564055a"],["/tags/GUI/index.html","8c409b524c4a762f55fac11b34ba881d"],["/tags/Git/index.html","5c0902a318d3e605a987f1eb417cda12"],["/tags/JavaScript/index.html","4b8b8063215f60e9ba4c98c5bdbc794c"],["/tags/Keras/index.html","ce596f224b83351a40662cd617180d1c"],["/tags/Linux/index.html","e7ad2976e1f935bc8c813016fc4c0599"],["/tags/ML/index.html","4a0f98ee00042ea95200e9a0570ff110"],["/tags/NLP学习/index.html","0b29428fc80f618350de1bc794cf4f5b"],["/tags/Nginx/index.html","e60652116a8baba1666225d7adb8dae3"],["/tags/Obsidian/index.html","01587b9c64ec8c45832dfb84d4413b53"],["/tags/Qt/index.html","b96a73fd4f99936616bead89f404df3d"],["/tags/RSS/index.html","cb410cf956b349011940fac3c0fb5c82"],["/tags/SSL/index.html","48e16974ad49d95ddda41c87f93c3681"],["/tags/Scrapy/index.html","2a62a5292577f6bbc019d3a21d697b26"],["/tags/Web/index.html","75ff5dffa2854283ee97e40c57e2d383"],["/tags/algorithm/index.html","100217f32c8be3162c3510688d3f9f63"],["/tags/bison/index.html","2bc737754a2913de236961e9ead7ee57"],["/tags/bomb-lab/index.html","219c9c4080c44372ae95e1ae144a3740"],["/tags/c/index.html","62e1ad70e6fad7fcdaa4b0c45e6e069e"],["/tags/cheerio/index.html","45968e126ba45f57b63e1f06d4e26dae"],["/tags/codewars/index.html","4065129c65da95fd45f290baca88eb74"],["/tags/compile/index.html","2472e9bc4f817bad137cd4316c2bb3fd"],["/tags/compiler/index.html","2475f0333def59610195ff1df0692699"],["/tags/course/index.html","badc76f19efcd7868b8ca7e784e68a19"],["/tags/crypto/index.html","e6f30427bb19f341d803a4d00b9909d6"],["/tags/csapp/index.html","2ecabe8a64e1df8e9cceb7dc0f74b021"],["/tags/css/index.html","7ed8f8ac78a0b82055e85186d3f324e2"],["/tags/dart/index.html","1a6ac8e2b649fdf860fda500cf3f9c54"],["/tags/data-structure/index.html","930afc9decebde919e8c7c4d8d173e68"],["/tags/database/index.html","96e7f6a538442657574d53fad80a74cb"],["/tags/deep-learning/index.html","06d5fd303bc22a75df9b3caafb6a3d2c"],["/tags/django/index.html","8ba44510759ae56d46f5e245699a77f8"],["/tags/dwm/index.html","9e3a959f98a503467b55659b5e741717"],["/tags/exercise/index.html","c673c57191c31eb3e91284353e1cf5f2"],["/tags/filebrowser/index.html","d8263bb02755c32f7b66b6509f82dd91"],["/tags/flask/index.html","8175488e69e2761a3d089a674450679d"],["/tags/flex/index.html","d7503887f7b416567c2c05464d17ea61"],["/tags/front/index.html","e935fcc4f66a7e3a20756e797df04120"],["/tags/gcc/index.html","f5902d68339671c04bb4381552912f50"],["/tags/gdb/index.html","1f33b9b83413472564be6f710d3ed789"],["/tags/github-profile/index.html","342ba7ea7efe79929c259160b5ddfe5a"],["/tags/github/index.html","088489d75c3ab899743f53b6ccc060d6"],["/tags/graphviz/index.html","00274884b1396d8d1be3ff760659e438"],["/tags/grid/index.html","58d44ceaf570b0915535a53a202cfd85"],["/tags/html/index.html","135791d46939dc1460d01a58d3f29c23"],["/tags/i3wm/index.html","4eff6ca05732d596dd1b06c128b144f9"],["/tags/index.html","a027f1c1d4103bcd17903d761499f401"],["/tags/issue/index.html","0554fd970c4655785818f566f08af138"],["/tags/jQuery/index.html","6903e437031ca6bc964f2709a439f242"],["/tags/java/index.html","b8b3db3c9bd8998e0b12246ecfed2ce6"],["/tags/js/index.html","a5fed7475cda4853222789d1c6dc549b"],["/tags/latex/index.html","0678a1db1935bc13ad822e6fc3a0cbc7"],["/tags/leetcode/index.html","b06c50207418e0db7a24733fef4cbf6b"],["/tags/lex/index.html","04203c0e114b2bc6575fa5f8382b1829"],["/tags/material/index.html","aae63ca3385347e50bc4c56a3fa37c78"],["/tags/music-player/index.html","f5337a4560f11de3875b0e5b796cec20"],["/tags/nodejs/index.html","e2beea842e841748ab2513dc8f012e0a"],["/tags/noj/index.html","0b7f22faf8bdb3d24a6536716d6aa470"],["/tags/opencv/index.html","3e3841c05761cf33e5b70faeca9c2dd7"],["/tags/overleaf/index.html","fea67f47eb089ea64970a5fafaa15238"],["/tags/pandas/index.html","31f154898c6c25bd84d5aa0cc96a8407"],["/tags/premiere-pro/index.html","b881cef86cbf464fff6ed45cb5346a5c"],["/tags/proxy/index.html","f235b5143f80bd1ca04de3fcd3bc7601"],["/tags/pygame/index.html","0f9a662b5fa155bb823002565a645808"],["/tags/python/index.html","569c82761c8d1e4fed9d070acd268af7"],["/tags/pytorch/index.html","94d4607298e49ae975403fd002fc2107"],["/tags/reading/index.html","7769c8b8692f462da7b5518426c5d1bd"],["/tags/request/index.html","f3c543c483955b85ab23bd9394bb207d"],["/tags/requests/index.html","0d007763527acc4b11ab013c2e643550"],["/tags/security/index.html","e73a32255ef00f6622355bbb2e1b992c"],["/tags/shell/index.html","d7df98bab6f9734f8e143e78d3372210"],["/tags/sign-in/index.html","5637ffeea12c01d5ee619fa9c11ede43"],["/tags/socket/index.html","c936ce7b096a98361683857af1c47c4b"],["/tags/spider/index.html","30538ad33be25c905742e7d61e4359ee"],["/tags/splash/index.html","03db9bf8d2747b21e6c7e147a741f347"],["/tags/superagent/index.html","340b875554eeefdfa0c0e3732cba1fe2"],["/tags/tensorlow/index.html","f562b16c5ef97e038b314788fad08e07"],["/tags/tex/index.html","eef5b182255af2e23c9f690fc7dd5951"],["/tags/threading/index.html","2af9a46f54578c6a6062ab1fdb6be848"],["/tags/tkinter/index.html","892b35211b9c45a46c8e081eb6f7f664"],["/tags/torrent/index.html","975ae591ef37f3d27b7fdb6d4f34149c"],["/tags/tutorial/index.html","1cd7a642b5b03bf842e5783a07a5e6d1"],["/tags/typora/index.html","be548437896ab7897ebaab937280a098"],["/tags/uniapp/index.html","3b19e3afba7cece03eb8b8f7d8783e8b"],["/tags/vite/index.html","478b2279f91ae49fe177f4fdfff8ee2a"],["/tags/vue-element-template/index.html","4320cf2c0f2980845b73273ac43bc068"],["/tags/vue/index.html","609a191f672d5d17f25d2f2a9f634c8e"],["/tags/vue2/index.html","6766e61d700388b476d055c6557944b5"],["/tags/vue3-x/index.html","687b02455cd3d45888a59a9b0ef4ec69"],["/tags/wechat/index.html","20ed784eec3452afd78d0acec146eef9"],["/tags/wm/index.html","7b27888d5aeebfe7f1da656df48abc53"],["/tags/wordpress/index.html","338eecf554cff7e4fe1ba624894edac3"],["/tags/workflow/index.html","e4b27bbb2bf04b9bd425407aa5958a25"],["/tags/xpath/index.html","f955f911eb8ae10519f05fe8f194d3e4"],["/tags/yacc/index.html","38e972e65d96eea06358b75af858fa0a"],["/tags/zsh/index.html","e52d3f6a2fd1b56db5b2bcabc13fa1dd"],["/tags/七牛云/index.html","5684f73b9260e5f12bc6312eacfd743a"],["/tags/函数/index.html","d0df91209f679ec2f6d86d845ae278e9"],["/tags/剪辑/index.html","0b0cd6f0801a34e2043b108013cb21ed"],["/tags/存储/index.html","5d2f95d71c754a74d23d21ab6f32291c"],["/tags/实战/index.html","dad0a6fe8999ef9455fe048652a7d188"],["/tags/建站/index.html","3b5a482efcfadcd5793dc2d15e5361bf"],["/tags/微信小程序/index.html","aa1582eac76eb5a8939dbe9a02647a4a"],["/tags/指针/index.html","73cee07be89f41e04f5e2b4b5c888780"],["/tags/汇编/index.html","008051601b2c90bba27a4866fe826a24"],["/tags/爬虫/index.html","3b5de771a7b16f796e7e81a292c692e4"],["/tags/算法/index.html","c216c3cbe46050dedcb78932e7bcb9ad"],["/tags/编译原理/index.html","6c8d7d09b76458a404ac9fc8b3d52446"],["/tags/获取地理位置/index.html","56798815f07f33f66d95fcd49f5cd6d8"]];
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
