/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","e27f7c49d068bd8ba08c65226387b01c"],["/2021/04/20/稀疏矩阵/index.html","bdc994fcea7e62f5edd186dbc315debb"],["/2021/04/23/广义表简介/index.html","913122486df57fc4304183a4f7795002"],["/2021/04/29/关于指针和函数/index.html","cf0615ff08cf7907afd2e2f7e3a3a191"],["/2021/05/10/哈夫曼编-译码/index.html","00013b1e240cf8f97e3a9f3b62a16c1d"],["/2021/05/17/数据结构noj_2/index.html","4d134ed2adbd18581d0d749c98555e22"],["/2021/05/30/数据结构试验/index.html","7ab4dea4193682be7d65dd5173e575fa"],["/2021/06/12/数据结构noj-3/index.html","8f9b7d095c139bdec69d309ef47ce6a1"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","6b008a3842fb98a6f21d7f51a13fbb73"],["/2021/07/08/课程资源分享/index.html","79ad26db662c187e7e0237ffa5a22a90"],["/2021/07/20/Scrapy-下载图片-文件/index.html","be625c3f4a42953271014a6677e786c8"],["/2021/07/21/Scrapy-动态网页爬取/index.html","8077944b6f2362c1b042f7d52283798d"],["/2021/07/21/疫情打卡/index.html","3aea2e523d685b48619497651e1ffb77"],["/2021/07/29/Scrapy代理设置/index.html","10f27783c34e4c97bf2120b02a936fee"],["/2021/07/29/数据库认识/index.html","a32f56feb4b514ab2f920ba7f4da59e4"],["/2021/07/31/Python多线程学习/index.html","f5455e2d0c47daa9254d65971ecc423b"],["/2021/07/31/tkinter-requests练习/index.html","97b07ff78b33c426e838b84a869b7cd7"],["/2021/08/10/Git学习/index.html","876d68c68ac89e2188055158f6869668"],["/2021/08/15/pygame实践-1/index.html","8ce3423de9ecf46dbf10b9ed17252a18"],["/2021/09/06/微信小程序开发/index.html","79ae74dabb8cebac56edcd379dbdd950"],["/2021/09/21/命令集-1/index.html","9294890686034d50819f53ba78ca8e15"],["/2021/09/21/命令集-2/index.html","acdd62e333959824a675eed1762203fc"],["/2021/09/21/命令集-3/index.html","8046a046a2fd8e9523b87c9bf5c9c152"],["/2021/09/21/命令集-4/index.html","341beba5e7a2a63b86220fae375ec50a"],["/2021/10/03/socket学习/index.html","c709fff28d0375d74c783194fd90073f"],["/2021/10/10/dwm入门/index.html","9c541eb3f0ee749b6e502858fd1efbda"],["/2021/10/10/安装ohmyzsh并配置/index.html","4afb76207112a76356fc7e78849f330e"],["/2021/10/20/css学习/index.html","22bd70a306322d4a2ee4994140f3915d"],["/2021/10/20/wm入坑/index.html","8587ce1bb872785864ef30476e191623"],["/2021/11/03/微信小程序学习/index.html","88e8d8dadf7579f8e3357359d96a38b8"],["/2021/11/04/css揭秘/index.html","df5f1e05fd7b75464abb4fe458685e40"],["/2021/11/05/css-练习/index.html","2d5ae43a836c63d62b818326df4e86f1"],["/2021/11/21/命令集-5/index.html","24ceafc4b897bacdc71cda05a60a8182"],["/2021/11/21/命令集-6/index.html","659927df465108480f1c5d5323357280"],["/2021/11/21/命令集-7/index.html","65e4bc00589193f76ab424faa4a7eb9e"],["/2021/12/01/搭建wordpress/index.html","2e8ffc72f75fdffb5e97239bc3312ce3"],["/2021/12/08/python操作百度网盘/index.html","466022e9a5e658ea5aef9429ff2b1272"],["/2021/12/14/js爬虫/index.html","26efdcdca70b492b65e82caefdf2efdc"],["/2021/12/25/为网站申请ssl证书/index.html","2d4d23d2c7e15a1fe4957febac7aa708"],["/2021/12/29/使用七牛云为网站提供服务/index.html","76e9456e0d0804c7dc269f45b28fc513"],["/2021/12/30/jQurey继续学习/index.html","d0ec7d0f8866d10bfb65b0ade4f83c08"],["/2021/12/30/jquery学习/index.html","f916f262ca6dbd3d6c2c19bbc9a3bf1f"],["/2021/12/31/vue学习/index.html","a9c8b68be17d84b1b3ab484f14e0257f"],["/2022/01/02/疫情自动打卡/index.html","b8fb971feda52462e80c226289c6e507"],["/2022/01/03/javaweb初体验/index.html","ec5018b98c435ac4bf30eebab481eb0f"],["/2022/01/04/codewars练习/index.html","768eb63c295ac0c94eb48d4b9b10ce88"],["/2022/01/05/Spring学习/index.html","39513a7daf12f440e9f31fc77ffe52d5"],["/2022/01/05/vue实战/index.html","d893aa3a4bc291bf5b1105ad2ed9fa36"],["/2022/01/08/gdb-gcc学习/index.html","28168f97021dda4607aa239261875a6d"],["/2022/01/11/python-opencv学习/index.html","52d845844d8d501f398f11f74b4c79fc"],["/2022/01/12/汇编实战/index.html","69f06f52e88cdd960dc778e636663627"],["/2022/01/17/pandas学习/index.html","325decd88988f9d7b832d6f5e5c4c1a5"],["/2022/01/19/可视化图的工具/index.html","5524a348ea657e333a87bd517026d2c4"],["/2022/01/19/机器学习入门/index.html","c8694585532915a6322c4e389e5b4aa9"],["/2022/01/20/cousera-ML学习/index.html","f6680b5171152a59176d0b650aac8933"],["/2022/01/30/typora解绑后出现问题/index.html","855df96d3aa37034f4c788fa6f00cc31"],["/2022/02/03/NLP学习/index.html","a0007345342b547cb89434e255dfa2a8"],["/2022/02/04/Web漏洞学习/index.html","ef85a48d0f6f4c55d5c062079e8640bd"],["/2022/02/04/pyqt学习/index.html","4c28f6cb10694765dfea7753fd4a15a4"],["/2022/02/04/python爬虫/index.html","49936347c9143020209f6d5ddb226bd5"],["/2022/02/18/Electron学习/index.html","674b03bbf4c16080a2f434fef7104cec"],["/2022/02/22/疫情填报字段解析/index.html","76e26e64316718394342bdafb8f62618"],["/2022/02/24/Bomb-lab实验/index.html","8054fff6a503b4660a961c3abcb0a783"],["/2022/03/05/nginx学习/index.html","60d5187c4776e81dc39dbf4b7244c2e9"],["/2022/03/09/汇编原理课程学习/index.html","dc41812687744858e32d4ef59749ebd8"],["/2022/03/11/Keras学习/index.html","394b73c324e4e0d456ee57b7d7897876"],["/2022/04/01/graphviz学习/index.html","43c3e43973a4cdac6932fe2b4a894f20"],["/2022/04/07/django学习/index.html","f70806c398543e65ff14f92eba8ce960"],["/2022/04/11/密码破解学习/index.html","7080681e2750fa1771ce1a96a4b90b8a"],["/2022/04/12/flex-bison学习/index.html","42ca16544b0bd1a0511f34ae4cf8c930"],["/2022/04/15/pytorch学习/index.html","35c99d59a255c83c72279d2d68e6fd80"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","dc3d14e1488018a7a840e7bcc0e1b4ef"],["/2022/04/23/写一个音乐播放器/index.html","c28cae9c69082dd3ae253330649e62a8"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","e66fd3077aefce6ed66652cfe10ed9aa"],["/2022/04/30/GAN学习/index.html","10e09871fe7fa1b2c750278528633e10"],["/2022/05/02/html精学/index.html","9d2cbb5086853ab07cf89d5232e2771b"],["/2022/05/06/write-a-compiler-by-yourself/index.html","e4b90015f163ef06bb61a992dab1b59e"],["/2022/05/30/acwj-01/index.html","b209c2b27316a0ff7eb5a9f105a8937b"],["/2022/06/14/animeGAN/index.html","41a39f068256515ea5aa803e13607ee3"],["/2022/07/09/c-与算法学习/index.html","0da824ac0e0a8c1a40c43dbed164f444"],["/2022/09/19/flask学习/index.html","92dd899630fdebcfd48f28c0e93c0984"],["/2022/09/22/cs224w学习/index.html","1805d61c1eb7c5d4aa16ba364ab83e50"],["/2022/09/28/记录一次wp重装/index.html","3b98f37b8a55e8cf8d45a384f789411e"],["/2022/10/01/Obsidian学习/index.html","82ecaf034610f052a5dc444aab6909cf"],["/2022/10/08/vue-element-template实战/index.html","46e0decc95019ef69232280967d6766a"],["/2022/10/25/vue网上商城项目/index.html","5ebb4fa3814a389fa08ba32396334e64"],["/2022/11/11/leetcode刷题记录/index.html","d441498c1548e2d44b7a7aad4ab3d168"],["/2022/11/11/使用overleaf优雅地写文章/index.html","95f79a5d41d01b03a7307ed622f1424c"],["/2022/11/22/磁力链接与RSS订阅/index.html","904bee830fdb2b293bd05374f816e90d"],["/2022/12/11/uniapp申请获取地理位置/index.html","92a2771b459154676be92cc23e2e31b8"],["/2022/12/26/pr剪辑学习/index.html","5c712d6b2c021bd77e9c8fa59c088efe"],["/2022/12/27/css中的flex和grid布局/index.html","f388fac103103a01ce7d51a5a1553448"],["/2022/12/28/Flutter学习/index.html","05c824f3fdcf68bc6001d4aaa23e37f6"],["/2023/01/01/美化github首页/index.html","491fdb2c08c338022a9f6706f5a51c3d"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","cc3bb140130e72482374ea3894b94fc0"],["/2023/01/04/构建微信快捷发布文章工具/index.html","efb398e691847296d8a1f47632915253"],["/2023/01/14/dart学习/index.html","ea3f3ee33dde471c54e4dba9d74dcd00"],["/2023/01/23/闲置服务器BT下载影视/index.html","e7ca7bac51677d4948f6c0a31f05b140"],["/2023/02/07/TotalCommander使用和学习/index.html","1c5d7fa81b137d6ef5845700f4384772"],["/2023/02/13/docker学习/index.html","1c23f13c9a4b45cea4bf4908e490911e"],["/about/index.html","78316a1c86545dbe5f44c38cd6e373f2"],["/archives/2021/04/index.html","12f8a0126ddac90fd2fb2cb11b74fc6b"],["/archives/2021/05/index.html","201d4349805ff1ae6d18b3526c08e75e"],["/archives/2021/06/index.html","16ffb685b46dea65b191d77315bea565"],["/archives/2021/07/index.html","b4a459e95be528cac9e33bec24dc0b7b"],["/archives/2021/08/index.html","d42f4117cbcc72ab13015549c649aa3f"],["/archives/2021/09/index.html","91afb2c9733c7bf4a4fd89dede69e00b"],["/archives/2021/10/index.html","d7119b7f652618acaa824670618fb6be"],["/archives/2021/11/index.html","896d2c1bcd0bdc6efdbc3574e3553d07"],["/archives/2021/12/index.html","4a492597790659d8e18d6d70e0605b94"],["/archives/2021/index.html","a17ba3113fdc2cc16bb7ba77247190b2"],["/archives/2022/01/index.html","bc1531e6e77ab44516ba054ff8445964"],["/archives/2022/02/index.html","fa595dd3573eace76cae0d9b66908ea7"],["/archives/2022/03/index.html","06ec5c8ce0e254ceb9cbcc5f864b1095"],["/archives/2022/04/index.html","e49a2ab14dd8efa11238b3cb77f319c7"],["/archives/2022/05/index.html","8705e750bbe6f8e424733571636e23cb"],["/archives/2022/06/index.html","39b73c13c35dfdb555c4210fbd578c86"],["/archives/2022/07/index.html","5c1c1b691f78df916c59e950b51d295e"],["/archives/2022/09/index.html","77cccadd54e947e7e6831f9c1beb18cd"],["/archives/2022/10/index.html","485c571f81029a8bac75ff90eb4fc95d"],["/archives/2022/11/index.html","365eb993dc24ba79ad4218da74556843"],["/archives/2022/12/index.html","4f468d097fa1ce29adcb99054468e5ee"],["/archives/2022/index.html","29bc1c91b4572aac56bbdfc880c71f0e"],["/archives/2023/01/index.html","77ac5e24f197bd88c6abf50ce8ea2299"],["/archives/2023/02/index.html","0a650fe30980c009ff808c171c45a0a9"],["/archives/2023/index.html","924ab527471615a7e66581a5034ea006"],["/archives/index.html","e86d3d5440b9b10ff973a75f7987e410"],["/archives/page/2/index.html","6ae4d707ebd7bc01eaf9ca140259bdae"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","7eea51f261d2942ec46b2cbf660e1897"],["/categories/ML/index.html","d85dbdc4706fb6231d37d50c1d815dab"],["/categories/Nginx/index.html","4b401068d25a6085d0012fd45a3d12bf"],["/categories/Spring/index.html","21205ef01b7a0142370594caff7a7a34"],["/categories/course/index.html","39ac285b01cdec2cf820d896560135f5"],["/categories/django/index.html","37a305dbd0a43b654e6b765d766db837"],["/categories/fun/index.html","c5f3fa3ce66f568cd2eefec0b0035613"],["/categories/gcc/gdb/index.html","f80879d39c4784e2f4804d559c7d8a7a"],["/categories/gcc/index.html","0ab9eb08e91cbb6976c237140162e4d1"],["/categories/index.html","8fbdacff100d470a86fa577349a15bd8"],["/categories/java/index.html","10e9bf6923f77f35a5618ba4dd7fcc4f"],["/categories/python/index.html","be0d23ddd307fa8ef381b82375ac5b4e"],["/categories/study/index.html","aa3a5532cc4047e9251359bf138bb9b7"],["/categories/vue/index.html","e6c71323f7513b1118c1ad71022c6252"],["/categories/误区/index.html","1f87cd1e34a2a1cebd67b3c09b36fade"],["/commonweal/index.html","ecc59c1066b48013d0d509366662a456"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f0370391d25ad5f6fd39b2bcc48c1976"],["/home/index.html","45de8688e4127f98010650dbba0bf720"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","75bed23ae943a28897b984b7392f6646"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","b23e71a1ca5203ccb2d99c4d8286056b"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","a4eeb5764fc48006ad85d429e19123c4"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","272d09ae55555a3dfafeba0f733b6f8c"],["/page/11/index.html","216fe314be4bf24f2b817a74f68d0bdc"],["/page/12/index.html","a374889b4ec243081df4f35ec5ad2647"],["/page/13/index.html","f368e69469ccd4550faca6340e416b0d"],["/page/14/index.html","b78c7b13873583eb0fb32cdea902820a"],["/page/15/index.html","8f68c575a5dfbd281aa324e81e471695"],["/page/16/index.html","8a6a62f17ada80a9353111a45124c139"],["/page/17/index.html","cea85151acf9cb701952bd0b60c207d8"],["/page/18/index.html","9ffa96cde31e133b40c1c76b8444d49b"],["/page/19/index.html","58a4f668b54b884bb0d77b684cd5d2d6"],["/page/2/index.html","4905a90fe286c0436dbe29dff6bbc2fe"],["/page/20/index.html","c56d5ea943fa263e651fbeaf356103c1"],["/page/3/index.html","bd170eea95a7dfc6e4590d738b184400"],["/page/4/index.html","595f27e3eea98651c4849d7415a6a60e"],["/page/5/index.html","49ad8b378cc6d9cf040739edb1effebe"],["/page/6/index.html","2a20060521d75a6b59b99ce0cbb997fc"],["/page/7/index.html","d909e1f400c54ea72e14b46d647b559b"],["/page/8/index.html","4a507bd0c879708257c93545dee2fbff"],["/page/9/index.html","d9150d7ff9194f47da50db39b3ec21da"],["/resume/index.html","1a06075e0e28e765a9f633bd06eee586"],["/schedule/index.html","4f2438414efa2186585d9ee66ff106c8"],["/sitemap/index.html","44d894cc0312d344e1425981c3e713bc"],["/sw-register.js","f604f63354f5b80251dfa58e3fa54c9a"],["/tags/AI/index.html","f576aa2d92e3bb1d4159387a41598ad9"],["/tags/BT/index.html","1b5ece995d9e9cfc2f7dddb06a3d39d1"],["/tags/BaiduNetdisk/index.html","1ed60b51b19c4933a6abf33e03c4383a"],["/tags/Bootstrap5/index.html","a5a0b13e36098b514a69a37fe1c8a746"],["/tags/CSS3/index.html","132c9f5a16a52646517fdd00338ba09a"],["/tags/Centos/index.html","e98aa0ba8bab39acea77126b05bee72e"],["/tags/Electron/index.html","f042751d12258beeb49599b606dca562"],["/tags/ElementUI/index.html","bdcfe96a868986694ba54b42b50ceb15"],["/tags/Flutter/index.html","97f1f01ccabc05cdcaa0e28e26a45063"],["/tags/GAN/index.html","167eb56e95fad92c6f8d9095b9339e04"],["/tags/GUI/index.html","7e0cbbe760eda085373b941930be92f0"],["/tags/Git/index.html","dd14d859b6df4c79b3ca0bc00e099c6e"],["/tags/JavaScript/index.html","c00b29f13d3393fb32e374984958ba5e"],["/tags/Keras/index.html","2a11498e8db8fcb18028fd39cf1f31c1"],["/tags/Linux/index.html","c59b115fb32d364334568cc19e60ca8a"],["/tags/ML/index.html","805ff0010f8f27bc69a6ee02466b5656"],["/tags/NLP学习/index.html","41bab3b14e8404c615b9d9c1ab7ff80c"],["/tags/Nginx/index.html","6935d2a05db900952e9795a9f0644f46"],["/tags/Obsidian/index.html","ff29a62e41d02ca7fbc9b08c1e0478b0"],["/tags/Qt/index.html","977944cf0bee003b8ecfb41ac88a8c65"],["/tags/RSS/index.html","aaada5293c447d489bbe1bf247160561"],["/tags/SSL/index.html","4c4744927af9983ba926cf98a2fad5e6"],["/tags/Scrapy/index.html","755709de9c7855d05238079ac8839367"],["/tags/TotalCommander/index.html","05b1a71b70627e14e4657ef276cf6005"],["/tags/Web/index.html","30d17b0b9fa81196896611dfd1a6e13e"],["/tags/algorithm/index.html","0391676da220cf5e77e18d34653d2b6e"],["/tags/bison/index.html","f6342d63b3682070546f22125bcb4860"],["/tags/bomb-lab/index.html","0fbedf4e025467af661fd2af1005bfc0"],["/tags/c/index.html","a220eaf55bfb9f1148272c02194ef3a0"],["/tags/cheerio/index.html","0a9f42989f66c0a481edc1ba9ecbbe43"],["/tags/codewars/index.html","84c7aea40577b0e984f2c01fd8952488"],["/tags/compile/index.html","9d36bca45d08f6e67262099af83d2ff2"],["/tags/compiler/index.html","139a3eb1efd17d07e236db23c290b6fa"],["/tags/course/index.html","e4ecafa952b8c24bc9b3ae4d93ce6758"],["/tags/crypto/index.html","25e71e361937fb28d24bec146d7c37a6"],["/tags/csapp/index.html","a36118d01d4961383dcd9c3b2d68e124"],["/tags/css/index.html","58fdffa31a875cc571ee294b750d0edc"],["/tags/dart/index.html","cd108932f1129b22928cd1ef07915f40"],["/tags/data-structure/index.html","359ee5663093bb22318713932ef88ece"],["/tags/database/index.html","3d2eef93793e33fa9e10f95baec0f19e"],["/tags/deep-learning/index.html","34fc73a5797ee0524e367df6b426b027"],["/tags/django/index.html","c78bf176c917e112ad5bfce0a942dbb3"],["/tags/docker/index.html","323a536b697ab04bddeecfe5da0665a1"],["/tags/dwm/index.html","97edd9d40f5daac9b225aceddbacee24"],["/tags/exercise/index.html","e9b59a885f1416111370f6231879a2cc"],["/tags/filebrowser/index.html","b107ac67993eb07a0a1762a9e0a7411d"],["/tags/flask/index.html","128813aa7b101c5e541832a439e6bdda"],["/tags/flex/index.html","4abb84340304c31747340526fa874903"],["/tags/front/index.html","e807efd57e4d756369f805ca62e58c9f"],["/tags/gcc/index.html","a7a5b8e9d4298cfa141fd3395fa29468"],["/tags/gdb/index.html","b9f3f0de2f55a4ef8e08d5ef5cc6f000"],["/tags/github-profile/index.html","34c04b1a1559957a3c4ea2f860121b36"],["/tags/github/index.html","a05397be927ed31fbf53caafe5fa2891"],["/tags/graphviz/index.html","108495ac71c3ae9ed73daf4f6ccd1b4b"],["/tags/grid/index.html","722b324e58d7f05d63f1f202d0b5d3c3"],["/tags/html/index.html","5fb9627a590a5dbbf615ba198d5b18ce"],["/tags/i3wm/index.html","7da4a7c2e6f15f67d198b3e2753da345"],["/tags/index.html","2198580402fadc348e18d782104c7410"],["/tags/issue/index.html","af90acb47b41f87915edf23c2df7838f"],["/tags/jQuery/index.html","a541eaac8bc911147a78406b1dac612d"],["/tags/java/index.html","5f1c527186a88cf4cbaf0cc21b5571df"],["/tags/js/index.html","9bb3ace20ef33409472716554e1bb342"],["/tags/latex/index.html","aaa05c58b0d253770b40175bfe479a8b"],["/tags/leetcode/index.html","5ed3ad500a17f33e6f50100d1c132f9a"],["/tags/lex/index.html","862aab2a3ae61c09ec8ac72ac59caae9"],["/tags/material/index.html","7a97359f0c239403cd7f4d5855824aea"],["/tags/music-player/index.html","2b0a0f03e79cb0444670db3d3a95b831"],["/tags/nodejs/index.html","8025d48c431711b82ba2a70be9b050cf"],["/tags/noj/index.html","f9f9f645a285ee80dfa2bb088b1ec194"],["/tags/opencv/index.html","6011353e954372e21291e1542274763d"],["/tags/overleaf/index.html","5c9030df186e013ff12d2e0cd892ff6d"],["/tags/pandas/index.html","3b70ce1ecc7d1139b1b6a0446de7cfa8"],["/tags/premiere-pro/index.html","d8b98cd249dbf4a64fb9394f68e81ddb"],["/tags/proxy/index.html","46f243185185fb0818f4fc0cf7689525"],["/tags/pygame/index.html","021b01758cff7e2e062566698f31f97d"],["/tags/python/index.html","a3f2a954e8f306ed1b2660ebc0166117"],["/tags/pytorch/index.html","f0409711063a52db82c93cbca3ff4258"],["/tags/reading/index.html","4859212739a8259d2a334472648ed044"],["/tags/request/index.html","9469f45db74e1869be28897915073c08"],["/tags/requests/index.html","49234d968ec482ba1734fd8f55833fcc"],["/tags/security/index.html","526ecf5d3734756d429ecc0ff419ad15"],["/tags/shell/index.html","6f605b2ffb3e1faad096c9daaf350adf"],["/tags/sign-in/index.html","7a18d3d04bf0d36ca98a7108a92fd50f"],["/tags/socket/index.html","91dba908b2f76937490524dc16d74450"],["/tags/spider/index.html","75ea1db0df85664a9d431ceba8f03cd6"],["/tags/splash/index.html","08c8f8b1035c9a56f7197754e3cd1955"],["/tags/superagent/index.html","8e7331b2730f9af7eb65c399cdc85fc7"],["/tags/tensorlow/index.html","77920fe3d9210fb67e9efd5721432089"],["/tags/tex/index.html","82f507f80a6e49191765440f3a8544d7"],["/tags/threading/index.html","da426c1490302c954b852a9ddf0ec7ca"],["/tags/tkinter/index.html","26d5b96d727647c1c6c0f45817d3a236"],["/tags/torrent/index.html","c15a76f63e64c1ace4ed403665a32399"],["/tags/tutorial/index.html","969c1ba7e018c82a341f619dc09a753c"],["/tags/typora/index.html","45a393e8732c86f46d40e220d0eb681f"],["/tags/uniapp/index.html","ed0a0d0c1674821ce60d2fb9c7fac1a9"],["/tags/vite/index.html","4c3a4f8ff2a51ad6d40b26315399ed0b"],["/tags/vue-element-template/index.html","3c262723bb118b3add8664e9124f6720"],["/tags/vue/index.html","6d904efa9edad0c53a85535c6df20cee"],["/tags/vue2/index.html","451fc87dec3f52d878b57c457216a064"],["/tags/vue3-x/index.html","3d2325bb4222d068dc971f911da6918d"],["/tags/wechat/index.html","298d97c08cf9a0d714bb7fa01e70ba54"],["/tags/wm/index.html","5ab09f9795773bb8db869ded17589cd0"],["/tags/wordpress/index.html","4f86ab0411e32ac05b33499594f6d8a6"],["/tags/workflow/index.html","07532dd16cb8fdad9088caf04c4710d9"],["/tags/xpath/index.html","2141a32700e47434f788b16e7d6bd445"],["/tags/yacc/index.html","b92d0e6a9554df3e0725a31cd8ba58ab"],["/tags/zsh/index.html","f5e565c8b3963768889624baf76613fb"],["/tags/七牛云/index.html","696f41654df37a4c27e92eba24c70770"],["/tags/函数/index.html","380421514235053a0ccab47d56b4e735"],["/tags/剪辑/index.html","c9c624ba116b1bce2944cbff27b924c7"],["/tags/存储/index.html","d1910e56474ce237fbb6167ad5fa0df2"],["/tags/实战/index.html","3d43352016bdfe224f5f021e6cb1df62"],["/tags/工具使用/index.html","635b67d182d7d18494615c574a3fee61"],["/tags/建站/index.html","9bd0aca5b449859e54833946507b2dc3"],["/tags/微信小程序/index.html","a2a9f1ca4bc64c3449d4256abba689b9"],["/tags/指针/index.html","8c87128a7410de8eba798bd368039000"],["/tags/效率提升/index.html","dfd79c84d54f4e05701059574f05785e"],["/tags/汇编/index.html","cda516a1f4a82a88cd89e5bd5e25ad05"],["/tags/爬虫/index.html","ea897bb3ed3cab2e983d9bfc44c5f540"],["/tags/算法/index.html","7ee0ef5491f9808b52bb7d3ba702fbe6"],["/tags/编译原理/index.html","03b0214fa7e7057d3d627788d3f3badd"],["/tags/获取地理位置/index.html","9b999806a550873e90708060752ad572"]];
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
