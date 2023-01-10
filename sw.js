/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","4148f3230beee0e47f884f537a1a284a"],["/2021/04/20/稀疏矩阵/index.html","9131305677e6623eeea988991b726e6d"],["/2021/04/23/广义表简介/index.html","3c380195d46924081c270e9e9861e3f2"],["/2021/04/29/关于指针和函数/index.html","02ba0a404b837384abafd1411d9f2f41"],["/2021/05/10/哈夫曼编-译码/index.html","ec242f9caba03c439d3143b9e6428d05"],["/2021/05/17/数据结构noj_2/index.html","1a7fa739bfcb6c3a2f3c79819083aedf"],["/2021/05/30/数据结构试验/index.html","d24452780d90bfef674f56f139fa2410"],["/2021/06/12/数据结构noj-3/index.html","eb8bd4563f31d425759f93fc787dd2d1"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","69c645b969ab0f26fec23f401e749a00"],["/2021/07/08/课程资源分享/index.html","e4363cb476a0dc35f9f5e40ee83a0d5b"],["/2021/07/20/Scrapy-下载图片-文件/index.html","2fae76dd23e97713424940829586ee5f"],["/2021/07/21/Scrapy-动态网页爬取/index.html","c8ae2ea884cb92cd1ec56327719d985d"],["/2021/07/21/疫情打卡/index.html","2e2fab8e751d6e72434b303280aac067"],["/2021/07/29/Scrapy代理设置/index.html","1c67a4f2d123dccf782aece66291fea6"],["/2021/07/29/数据库认识/index.html","e2c065d92e076ee6889d9506dd1b5a40"],["/2021/07/31/Python多线程学习/index.html","4f7768d46ec8362723ab8b4330c3ed82"],["/2021/07/31/tkinter-requests练习/index.html","0089b23c98ad84903d1e055a57b86e15"],["/2021/08/10/Git学习/index.html","bf50e8cf8aa7107b46e5d2c32f9aea79"],["/2021/08/15/pygame实践-1/index.html","c0133b13e7d2117e2ffe2e161dd27365"],["/2021/09/06/微信小程序开发/index.html","17fc9ad88549e19b81db5e2c988c31e2"],["/2021/09/21/命令集-1/index.html","5c6c9cda60907e2bf1e59800faf4ff8a"],["/2021/09/21/命令集-2/index.html","92384dfedb8a65b01b2d147347f82c5a"],["/2021/09/21/命令集-3/index.html","85e5a309790b9ee93bb27db35e386cd4"],["/2021/09/21/命令集-4/index.html","b76ed5bb03da856da7f256d21edc543b"],["/2021/10/03/socket学习/index.html","116b1ebd30e12ef80baaf8d3278a3772"],["/2021/10/10/dwm入门/index.html","1ec2ac95601c375292794212732fa7d5"],["/2021/10/10/安装ohmyzsh并配置/index.html","1f4ace0c4b5812bc6da14b44be95624f"],["/2021/10/20/css学习/index.html","a33765ec337ec6f32b861d0024fd3c54"],["/2021/10/20/wm入坑/index.html","573de0352a5a2bfeb659d2f6598ad156"],["/2021/11/03/微信小程序学习/index.html","2e3d634a6f6467e60c8f61090edf0fea"],["/2021/11/04/css揭秘/index.html","b89af3b4620a0d4c679208782296275b"],["/2021/11/05/css-练习/index.html","e2ffadc7feb04ac2f1fc3b28fa5bc4ae"],["/2021/11/21/命令集-5/index.html","b5a9658f5aaa0aeaee31909c70a622bb"],["/2021/11/21/命令集-6/index.html","f3ed3dc29f1fc46454b08d5da8f371b5"],["/2021/11/21/命令集-7/index.html","586b7a5bbbeaffd55d3dbe04ce34ee8c"],["/2021/12/01/搭建wordpress/index.html","5db97981ac0757cc489714180d5983b9"],["/2021/12/08/python操作百度网盘/index.html","d508cc4d817facf5e4f03e1c3c7b5562"],["/2021/12/14/js爬虫/index.html","4ce688a5fbe70d855cb4b4d8239f3ed5"],["/2021/12/25/为网站申请ssl证书/index.html","895911fb8be670f1192cfd5a61377aa7"],["/2021/12/29/使用七牛云为网站提供服务/index.html","1430a3d7d757ed3ce0d39914417526fd"],["/2021/12/30/jQurey继续学习/index.html","2c7228e92bf518e6596135efd5ad144c"],["/2021/12/30/jquery学习/index.html","816935873ee2ee67d82a1fbc37c874a6"],["/2021/12/31/vue学习/index.html","bc05fa27d69b922bfdd61cf647a147bc"],["/2022/01/02/疫情自动打卡/index.html","506ca931c7d33023a8bc15267e03e5dc"],["/2022/01/03/javaweb初体验/index.html","769d312d3a510e5e11ee7cf87c120a59"],["/2022/01/04/codewars练习/index.html","8bd2fd0e679118b30c0f41c1f6203ed6"],["/2022/01/05/Spring学习/index.html","04ccf37be4e952fbda9c06a8020ac71b"],["/2022/01/05/vue实战/index.html","667b4c630ff22363784285fd9e94dbcb"],["/2022/01/08/gdb-gcc学习/index.html","056bdfc5284b16e9970db234598f454e"],["/2022/01/11/python-opencv学习/index.html","4e815137091d3efba98166310c1de623"],["/2022/01/12/汇编实战/index.html","9dccd3e4a4c492402122cf7e28955721"],["/2022/01/17/pandas学习/index.html","efb3e03b9dff9053077629335aac856f"],["/2022/01/19/可视化图的工具/index.html","1b690d02dc85967184a33706ce0c628e"],["/2022/01/19/机器学习入门/index.html","abcc67fe2dd444f777b5a800d135e953"],["/2022/01/20/cousera-ML学习/index.html","d4091e6f68baee7d1335c3de4229000e"],["/2022/01/30/typora解绑后出现问题/index.html","f70efb88b417cd4b2b62ef39743378c1"],["/2022/02/03/NLP学习/index.html","62a5d60b002de8caa8f6b9963fd6980a"],["/2022/02/04/Web漏洞学习/index.html","85394d300401f85935c1682e464ac2bd"],["/2022/02/04/pyqt学习/index.html","b84114bfcbc1625c34e67914947b79f8"],["/2022/02/04/python爬虫/index.html","7d5b96d884efa952f0e6e9bbd7ebb04e"],["/2022/02/18/Electron学习/index.html","8c69f17401266953409bfb1dd55572d7"],["/2022/02/22/疫情填报字段解析/index.html","346adc89595444dc7301318cb0fae615"],["/2022/02/24/Bomb-lab实验/index.html","15f61bac9ea68e80543b3f30ed935bf2"],["/2022/03/05/nginx学习/index.html","6477e80a98ba77bb78ea0312666f314c"],["/2022/03/09/汇编原理课程学习/index.html","0d286d38c94b1491148add71512ba24c"],["/2022/03/11/Keras学习/index.html","16a8818aa466f5ff4a55b7f834070516"],["/2022/04/01/graphviz学习/index.html","415679bbbadebbe371c93a2cb3be9d7c"],["/2022/04/07/django学习/index.html","72bd7f6d9ea36e6664e618f800d0d013"],["/2022/04/11/密码破解学习/index.html","ec93c8c0c5a1c1e0438c37c8af5c0b1c"],["/2022/04/12/flex-bison学习/index.html","38a404524bba2260828daf5f0363d43a"],["/2022/04/15/pytorch学习/index.html","bcbe3348422428c19efaaffdffb9017c"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","49e66b8337b8cc7c0e285b065a8f91f6"],["/2022/04/23/写一个音乐播放器/index.html","b3dbe5d2a2769da9f3cdd144ea9a8322"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","57919b1c015142817472bc715095b76a"],["/2022/04/30/GAN学习/index.html","e60c2a7146016ab043e0ba1a329b180a"],["/2022/05/02/html精学/index.html","043d5c65847483fa2f22140e9419ca0c"],["/2022/05/06/write-a-compiler-by-yourself/index.html","d565d2f2f8a5500990fb989a4f4faa1b"],["/2022/05/30/acwj-01/index.html","ebadb4ac877b764faab099b240f7eb61"],["/2022/06/14/animeGAN/index.html","8e608bc2de1cce05ef4616e447ba5aff"],["/2022/07/09/c-与算法学习/index.html","5c2e2d71dfa394c0d8c7610c90145861"],["/2022/09/19/flask学习/index.html","416e26b1a4a703a6e3ebd044a255229a"],["/2022/09/22/cs224w学习/index.html","6e55843609d25bf68dc218807bd69ed1"],["/2022/09/28/记录一次wp重装/index.html","e9e333b20d6b63a9eeef437b586654da"],["/2022/10/01/Obsidian学习/index.html","cb8c74bab6d4fb68cc0799d9816b95ca"],["/2022/10/08/vue-element-template实战/index.html","6bb8b696c8778980dee9aa14c7052434"],["/2022/10/25/vue网上商城项目/index.html","ba24c39cf26994754997f9c0bf4f7556"],["/2022/11/11/leetcode刷题记录/index.html","3058e326a956b1e7fed56e934f955cfc"],["/2022/11/11/使用overleaf优雅地写文章/index.html","8749e5a39c18eab434b64e1d09aa4e11"],["/2022/11/22/磁力链接与RSS订阅/index.html","02c50f22e38b1054de5b06921fb6c735"],["/2022/12/11/uniapp申请获取地理位置/index.html","4d8dc117f1e067308bc2bc780d45a65d"],["/2022/12/26/pr剪辑学习/index.html","62d76395f3961742f1e7624a92514910"],["/2022/12/27/css中的flex和grid布局/index.html","3defd32a21da9adfd70278b4085fb061"],["/2022/12/28/Flutter学习/index.html","547978d831473bfb06a2bfaf49e15000"],["/2023/01/01/美化github首页/index.html","a0fb101b7cd7dbfc37750d68a35861d9"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","627c9e35e8ddadcfdfcaf5d6c3cdc5e3"],["/2023/01/04/构建微信快捷发布文章工具/index.html","c3f1c88c107398307a6960cdc13f3f00"],["/about/index.html","3b1afd5ba218e6f8ffd7ff5e3401e05c"],["/archives/2021/04/index.html","48d31c926c4d35cdae75c9f55932aab4"],["/archives/2021/05/index.html","3dac4a6f1cd4a9869916d2c92c9861b5"],["/archives/2021/06/index.html","8a5a6dea97dd4d557c5eb6a5f1505f1e"],["/archives/2021/07/index.html","26a3f693c573624431a65ac02fee9c41"],["/archives/2021/08/index.html","9070ac9c78cce2ed33fea4a7f9cd6658"],["/archives/2021/09/index.html","386cb1462421052d080d9edaa2962636"],["/archives/2021/10/index.html","390b895406a09120594d644c75db63fb"],["/archives/2021/11/index.html","37c2e62d29fda62103d11e599c6489e0"],["/archives/2021/12/index.html","4af1dfd25486a6e32a9655608703c6b9"],["/archives/2021/index.html","7c3a3bf5da9aff17c63226b50eac0dd1"],["/archives/2022/01/index.html","5ab0e753f49d95a8b01acb24518375b0"],["/archives/2022/02/index.html","14cf986d85b418ad5a8a1ab4b0e2e9f7"],["/archives/2022/03/index.html","09eae79a8312e6d6353aff1021103e8d"],["/archives/2022/04/index.html","dfe884d317364ecfca16727ef37b4dad"],["/archives/2022/05/index.html","284787319f555a9ebf2d6f28e45a786d"],["/archives/2022/06/index.html","20226d7b24175b92cd41fe2b9db64753"],["/archives/2022/07/index.html","9efd7624f6203e11b2366705f94fb0f6"],["/archives/2022/09/index.html","ab10d61ed91e328c4c532781a9885009"],["/archives/2022/10/index.html","a086fb4603c5021cbf5b49f96fd0ca6a"],["/archives/2022/11/index.html","c9ecda23096e73bcac139b5d7a47663a"],["/archives/2022/12/index.html","3664fca163c9460b2fa9ec2a92943d08"],["/archives/2022/index.html","f174cf8d9247c753e2ab5e25d43a76d8"],["/archives/2023/01/index.html","4af0616016360ad653e890f80b751358"],["/archives/2023/index.html","a9b3c95e9d9ee7520aefa922f7c46a39"],["/archives/index.html","5f57ba66edd1c4bce0e20574e63c2ac8"],["/archives/page/2/index.html","8144550813ad8ab4bef110cbc1be2c9c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","38c1c605b472fb7484b577fa1a46d624"],["/categories/ML/index.html","3fbbb1f3d073420a4aca16260506bda7"],["/categories/Nginx/index.html","28bc0d1eecd79fdbfda1d667f6dfff7d"],["/categories/Spring/index.html","c81b64bd60c8377b2c8eb3b644c3a0cb"],["/categories/course/index.html","00237ffdf06ae06c80a5c1a0dc10700e"],["/categories/django/index.html","0c97978799b27162783d1299bec70202"],["/categories/fun/index.html","966b47c62b872926cc28bf30db3a777b"],["/categories/gcc/gdb/index.html","6d02b16c2875112abb52032d01c3e691"],["/categories/gcc/index.html","ad37747c60648b8750c81d015f8d41a4"],["/categories/index.html","d0bd0307a520be32bac0fc43838f6ecb"],["/categories/java/index.html","7f8500a38c6cf0cd80627caf15068b90"],["/categories/python/index.html","c40cb3fb16e9c2e487f6f2ea1e79f8f3"],["/categories/study/index.html","ff5bc7e01a32ead093a3f3a66a4c107d"],["/categories/vue/index.html","59c228a58f93a4a8e4d64a4678de0a5b"],["/categories/误区/index.html","d414eb2e2675e73a16b97ab44e93093f"],["/commonweal/index.html","8ba74fdb76cd5807c2625eb6b0d2c6fe"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5e139f85a5609dfa8bb6622636f3a5f0"],["/home/index.html","82e4fd51a389e81c5c65a4fab6c73b4f"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","43897dbca7c159f5c8b3075781cc77b6"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","f1c06d9f5e26cf9a16804f70c9e121e4"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","9dc78aea1a4845a829ccca5641893507"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","6baeb8a7d4290b7beb3067fe30fc972d"],["/page/11/index.html","ac28305748a4739840f4277f7e8ae240"],["/page/12/index.html","1527df1d2c294e7a76bd9e6ed5c19826"],["/page/13/index.html","a77355521d7a46b986f45eea5636b8d3"],["/page/14/index.html","f6a7830270efb33f19d2b9f688979465"],["/page/15/index.html","bd5eb24bb72ee7746eec35c5db8c2214"],["/page/16/index.html","b970e6d9e655427c9cd505c3dd281135"],["/page/17/index.html","e0f9bf5d31002b4006b114159b914f2d"],["/page/18/index.html","8646c434b5ec1d63a8259f2d42a69b3a"],["/page/19/index.html","01e689e803f3d6a04718be255d256784"],["/page/2/index.html","69c00b02fc875c90e419545269003404"],["/page/20/index.html","bd2307f6189e361d28efce669afb526c"],["/page/3/index.html","41ae0ce10e3450ba7a7fdec95552d641"],["/page/4/index.html","e1d8a3cd5629acd9a0b8261223116197"],["/page/5/index.html","4af0ec3d749910991be41d983916925e"],["/page/6/index.html","250c52221054b33f052fb697259bc7c1"],["/page/7/index.html","471516a75522fcf92862186176715bf1"],["/page/8/index.html","86db64a702ab0b484038b2318fcc22af"],["/page/9/index.html","d5dd0b5ffd7d03ccf8ac3d6e2b8c1faf"],["/resume/index.html","bcab08bd714343109028ea6e729b8ba7"],["/schedule/index.html","5a46ce1f4ffc4d793e063f50d542bd51"],["/sitemap/index.html","f184f2d1cf273a8ab974cb86feacbad1"],["/sw-register.js","cbe6d25b7b24f81bbe429b6ced1b4b94"],["/tags/AI/index.html","481d5fc8b5f7f15a0446e675c4b2d485"],["/tags/BT/index.html","e78bd78a6f66a75c49fa45822c33d04d"],["/tags/BaiduNetdisk/index.html","72ed4b43681a457d3f4be2a107fbb88a"],["/tags/Bootstrap5/index.html","712fb5b9872b4a84436b784f86e57f28"],["/tags/CSS3/index.html","74d450ed3a92e6d7041b2098c617457e"],["/tags/Electron/index.html","2fa71df3d461ad27af4a4831247b66d8"],["/tags/ElementUI/index.html","5bef12fc03425368e00b843b928df933"],["/tags/Flutter/index.html","25c2fe272a19a09d538a6ab5805f93ef"],["/tags/GAN/index.html","79efbc0a6985e1b6e6b3dfafec3ae6c9"],["/tags/GUI/index.html","df1fe5cb5530e72c9c5a7e26dc2bbdb8"],["/tags/Git/index.html","92eb010fd26679af85663fe9f9f8dcc8"],["/tags/JavaScript/index.html","75eac0ecbe775b1814f3102d9e805f39"],["/tags/Keras/index.html","4175ca4c340d0991b63237f5c6c8d4b0"],["/tags/Linux/index.html","d3685b3ff6c3cdf0ddf5b306b9212576"],["/tags/ML/index.html","5ab849d5ceedee854b1f79bc869ff63b"],["/tags/NLP学习/index.html","91f671b4b640b5c244246a3f62841b7c"],["/tags/Nginx/index.html","60d7a7488b8389ceebeaf3c9aaf11dfd"],["/tags/Obsidian/index.html","1063f76261d71d0fbc7dc614ae3ac999"],["/tags/Qt/index.html","4b7717cc96aa5fa53543fa6d2362da4f"],["/tags/RSS/index.html","eee85ddfcced190b88bbcdbf0fef46cd"],["/tags/SSL/index.html","716c1f9e8f73a39a4820367247ddaf4d"],["/tags/Scrapy/index.html","b5f583f55d21b3e0dbb1a1c5a7defbfc"],["/tags/Web/index.html","f4e7c532109a212e5f964858be454c9a"],["/tags/algorithm/index.html","4111b014edf72d970f50645caaa122da"],["/tags/bison/index.html","9549c33e34339da43c020fc30fc7ce12"],["/tags/bomb-lab/index.html","887f2a0cd2151412d924c1a98d1f6b2b"],["/tags/c/index.html","2554f7b095200b1a20d87668967b66a9"],["/tags/cheerio/index.html","960d4aedf1dbacb601dadda6408dcdbc"],["/tags/codewars/index.html","e30ce5d58a33b99d04d5f29bff8806b7"],["/tags/compile/index.html","b24eb5175bb42c03a8c742aaa3180cca"],["/tags/compiler/index.html","a7002741fba37ab26849104e21b0e8c2"],["/tags/course/index.html","076464656b44bc6d7cad93d01d29a107"],["/tags/crypto/index.html","233f58d075cf7b07a48cc52b380561af"],["/tags/csapp/index.html","fb202067ef24737741c87cb8858e2577"],["/tags/css/index.html","654c1ff23ca205329bbcfece37ec9866"],["/tags/data-structure/index.html","0f8ead1e50488b84e5c9af7329494160"],["/tags/database/index.html","d7d6d0e7a668d49b68d1c68edf4a2064"],["/tags/deep-learning/index.html","928f84b415990a01c191d98bcb0f1c0e"],["/tags/django/index.html","b2f30724a16e7f7ff51182a7997b1909"],["/tags/dwm/index.html","7dcb5919c938003a21c268fb3c29582d"],["/tags/exercise/index.html","2547e7b3421588788e149d8a0e16bbe6"],["/tags/flask/index.html","f4ef2a545c59121ba845073225e3a6e0"],["/tags/flex/index.html","184540457b94ead6aaa45506986ae951"],["/tags/front/index.html","e33a73164e8129c9caf0a0fc324d78e1"],["/tags/gcc/index.html","f26c212b6f117df0185d37b87a9d4fb2"],["/tags/gdb/index.html","6465cb3e122dc37117f6f81478526681"],["/tags/github-profile/index.html","c221c6edaafa076bca6de5c0b1cce912"],["/tags/github/index.html","3fd3f6fb98e6d650d609800fb6695ae7"],["/tags/graphviz/index.html","a6924925efdcb210a24734c7d877c8a8"],["/tags/grid/index.html","45296a7a2255baffe9919e3fe0a2264f"],["/tags/html/index.html","4acf5dc40247b0ab491851233e73ddda"],["/tags/i3wm/index.html","30321e584ab9b8a6018abc4109e7fcee"],["/tags/index.html","c8f6403aa34de220b3e63ff77181ec54"],["/tags/issue/index.html","828ad2865e22ead5b688b927f0f934b3"],["/tags/jQuery/index.html","ce6bb8efb49b2656a5c758e567b30043"],["/tags/java/index.html","56e5f28e26ce407840993deb9d58e379"],["/tags/js/index.html","8f8d913742001d2707a90416828ac46b"],["/tags/latex/index.html","e4f1c611c6119a90b37e4ab780f5f674"],["/tags/leetcode/index.html","298362a1784ffd4df90860c8cabad251"],["/tags/lex/index.html","2f7c7ebee68a5319d7ef7e2920a787dd"],["/tags/material/index.html","a4be5970d85685e71fec206276bf2e06"],["/tags/music-player/index.html","5d8aeb1e6c9aa8f19f79e4b00008eb84"],["/tags/nodejs/index.html","81d53415db56e872aece5ff0b384a00a"],["/tags/noj/index.html","58ad515f406ccec7293763d36490efca"],["/tags/opencv/index.html","3dce9801af5578008a02320b6fdb551c"],["/tags/overleaf/index.html","ed87fd8cf2cf05187f23cc3eb0dd688d"],["/tags/pandas/index.html","d7f0a087e674a7d34e4332d739cf654a"],["/tags/premiere-pro/index.html","4c57be67e23711149cc5c4ca059b56a6"],["/tags/proxy/index.html","ddca406731fbb5c824ca3668a6d561f1"],["/tags/pygame/index.html","319ba60871b9d0217d1d9b73f3bf488a"],["/tags/python/index.html","8e37b1664a2002be2a9752b87da54a4e"],["/tags/pytorch/index.html","7b774123b431b0b528e1b0fcff134389"],["/tags/reading/index.html","7b3fbe7f17457164c6935cc3e17f3668"],["/tags/request/index.html","4f39cdb5abb40c2d674d07145e291d85"],["/tags/requests/index.html","ef8ef1538c8bafb2c4634ba8154d4b44"],["/tags/security/index.html","684df6f3dccb07c5999def2a95bc47c5"],["/tags/shell/index.html","3349d6e467ca9ddc8b8aac3f0af167a7"],["/tags/sign-in/index.html","8493a00384a7d1ede1aba365243faef2"],["/tags/socket/index.html","8fa76328ac928674127c7d45c9f783c0"],["/tags/spider/index.html","a3e9a628d8c625d11c4fce0a7279b21f"],["/tags/splash/index.html","f13644f4cbe34797d990520fe829a9e9"],["/tags/superagent/index.html","539832b27aba68da70050ababc60cded"],["/tags/tensorlow/index.html","0bb12d4338f68b11b8a49850fce57869"],["/tags/tex/index.html","8ed0f8e47f8101600eafae4a46d96774"],["/tags/threading/index.html","ef08041214df27ab312db642363bedd3"],["/tags/tkinter/index.html","d7f7e0a5b87cfe3bc9eb176513f5fec7"],["/tags/torrent/index.html","7f5a7b8240c52a4616094cd0162c71e4"],["/tags/tutorial/index.html","c794f80bb4205a7e1f7590166e7b4eff"],["/tags/typora/index.html","8013cf4d9b638dc7c01e590d61318bf2"],["/tags/uniapp/index.html","938637a8a9f4c7b04875f52875080f57"],["/tags/vite/index.html","a62445181c2f340d0f9761c4afb5286f"],["/tags/vue-element-template/index.html","d04d3f0da96e44801d81bebbc3a7b6fd"],["/tags/vue/index.html","75b699615455916a6be389dce70719b7"],["/tags/vue2/index.html","20f5e214a58cc594534480699226d6b9"],["/tags/vue3-x/index.html","a12da619de8744ea61ec1948780434c9"],["/tags/wechat/index.html","802df1562df739ed5da36f7070e89a91"],["/tags/wm/index.html","74edd7fdc389a51d61ccfd8033841635"],["/tags/wordpress/index.html","4f4e3c1f2e492f261697772540e08b18"],["/tags/workflow/index.html","94797897bc351b4191bace7427978d76"],["/tags/xpath/index.html","4de1b31eeb3ae66a11df48f8cbfa5d19"],["/tags/yacc/index.html","28092aae1e8347556321d338927d8595"],["/tags/zsh/index.html","ad20e4f5a6d663bd4354e4e680170a7d"],["/tags/七牛云/index.html","1ce748373ccf9cf8b248522dc4289958"],["/tags/函数/index.html","9eede76f660f4ce58fabb76be71e2def"],["/tags/剪辑/index.html","cc17100bc91594506d49a7e1072632a1"],["/tags/存储/index.html","fe2cef858de11b563f1ca8a1dda8b970"],["/tags/实战/index.html","2ab5c52c7a75caf293ab5e6b0cf27d95"],["/tags/建站/index.html","d0d7c897cfd1e79a42e5308ee1fa0c74"],["/tags/微信小程序/index.html","9ddfa3e7531875ec02aef007cafc364b"],["/tags/指针/index.html","242865041780561c4b3a945f853da98b"],["/tags/汇编/index.html","dfa58fb913d906172dd94d234d59c629"],["/tags/爬虫/index.html","7c0d00e4a5a78a849307ecfcce490059"],["/tags/算法/index.html","c307ff07cc4d68a3f57c9783387907d5"],["/tags/编译原理/index.html","ff99baad78268f1918fecfda72f8e5a4"],["/tags/获取地理位置/index.html","fb503dcf06832f7e42824567831cb9c5"]];
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
