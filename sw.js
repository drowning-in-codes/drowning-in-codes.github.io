/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","9f66cbcf890789cab7c17795c229d16c"],["/2021/04/20/稀疏矩阵/index.html","2e0ee5613c5dd53164aecaa73dddd849"],["/2021/04/23/广义表简介/index.html","cb0ca8a4f393576150da219235c4dc66"],["/2021/04/29/关于指针和函数/index.html","1a95d47219c974f68fdbdc5d33f02fdb"],["/2021/05/10/哈夫曼编-译码/index.html","725eb7ddcfc051a16110380488e26f92"],["/2021/05/17/数据结构noj_2/index.html","8da55d999bf9fe528077d163fe365505"],["/2021/05/30/数据结构试验/index.html","8bf5fdc22a22af56b6fb5489ffb9f799"],["/2021/06/12/数据结构noj-3/index.html","7ead86d3d64a20ed1549a94e07246c01"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","7648286f4d46a739e7d42c24601207f7"],["/2021/07/08/课程资源分享/index.html","ead560fada66952b393fc311761c7257"],["/2021/07/20/Scrapy-下载图片-文件/index.html","5b540b69393579d9ca01ece6daed3e06"],["/2021/07/21/Scrapy-动态网页爬取/index.html","2d4be8102032f57dbadb184560cc7eac"],["/2021/07/21/疫情打卡/index.html","ad155b1ba51dedf1bc23b1948b9c13e4"],["/2021/07/29/Scrapy代理设置/index.html","7e94b52f25e89fa2918f2f2cae268da9"],["/2021/07/29/数据库认识/index.html","d56049fd08562431569f01786c5df857"],["/2021/07/31/Python多线程学习/index.html","468a8d6ab1759b0aff79e29b9150440f"],["/2021/07/31/tkinter-requests练习/index.html","73001544e961a3463d1759b1f61a77f1"],["/2021/08/10/Git学习/index.html","ce091cabee39a3ae8f922ea223ab334e"],["/2021/08/15/pygame实践-1/index.html","761c758b8f14525090e8598a8d188fd0"],["/2021/09/06/微信小程序开发/index.html","92010470feb403dde5210b4ec88e99e7"],["/2021/09/21/命令集-1/index.html","d8a9ad2e49ead04d7e8fbfdb19fce955"],["/2021/09/21/命令集-2/index.html","0f30bbdbf76b363ce2a878a2e5d87156"],["/2021/09/21/命令集-3/index.html","f31f37181f56f604a4792386d7f305d1"],["/2021/09/21/命令集-4/index.html","5d5ab1a1531de43f9e60a2a2d1f2e86f"],["/2021/10/03/socket学习/index.html","b07f79b37d456aedbac84bca5ce6f23c"],["/2021/10/10/dwm入门/index.html","185873240cf024680204e2efaff120ce"],["/2021/10/10/安装ohmyzsh并配置/index.html","64a95e39541b1a8571e686162e71bca6"],["/2021/10/20/css学习/index.html","de1e7c092492e6b10a6cd2c85742383b"],["/2021/10/20/wm入坑/index.html","76036ab9bb0ebf29c0863c2f12655965"],["/2021/11/03/微信小程序学习/index.html","c15ef2b59d329afa2431dd4244693047"],["/2021/11/04/css揭秘/index.html","240ae1efae9736e66e0136871c974065"],["/2021/11/05/css-练习/index.html","fc02e2ef41870b0f3128e9d288283d8d"],["/2021/11/21/命令集-5/index.html","8ca0ac7aebae761d2c348be918bd8fdd"],["/2021/11/21/命令集-6/index.html","0f7c58943c37fbfa9bc9a3b69e77a8ee"],["/2021/11/21/命令集-7/index.html","b4b0beccdedff61f491e54624cc76385"],["/2021/12/01/搭建wordpress/index.html","3bacf2ea72656b4ba9a8517982575874"],["/2021/12/08/python操作百度网盘/index.html","0d5fdd4638d876d68f20b588f60339da"],["/2021/12/14/js爬虫/index.html","66bb04cd091ebf109be12f9acc0be14b"],["/2021/12/25/为网站申请ssl证书/index.html","b59c8e85d9db78583b6ac0c8cffe6de1"],["/2021/12/29/使用七牛云为网站提供服务/index.html","c65025616e9d072f2dd734d63f61af6c"],["/2021/12/30/jQurey继续学习/index.html","7d3b8b55eb2e619c3eb0fc4035f004a4"],["/2021/12/30/jquery学习/index.html","fb6cd7c4670f84b94c5871dc56745e91"],["/2021/12/31/vue学习/index.html","e0def172209c53c33483b510da965842"],["/2022/01/02/疫情自动打卡/index.html","7eb1ec2c842b35a43887b72146dcec87"],["/2022/01/03/javaweb初体验/index.html","29a08c7fcfde0e9929a0c1503778b079"],["/2022/01/04/codewars练习/index.html","e37bb3d8977872ea9aa147c4456d3303"],["/2022/01/05/Spring学习/index.html","f060a1b77769dff4b088136879cee924"],["/2022/01/05/vue实战/index.html","e7569848d50be3074dcc25a0df08472f"],["/2022/01/08/gdb-gcc学习/index.html","ba0290e90d4e64ac13849658c581818d"],["/2022/01/11/python-opencv学习/index.html","a8467aaff24477b4757ec3605b9f5f01"],["/2022/01/12/汇编实战/index.html","dc26d24731dbf943a9cd508eb824f587"],["/2022/01/17/pandas学习/index.html","17c26c9643e97f32d92195f03f438419"],["/2022/01/19/可视化图的工具/index.html","6d92dad331233fb16ab955839a901633"],["/2022/01/19/机器学习入门/index.html","c4cf3696e0992c3fd33b19cc24eac3e5"],["/2022/01/20/cousera-ML学习/index.html","56e58d031b48fe4b2d1fd8af94788ca3"],["/2022/01/30/typora解绑后出现问题/index.html","cd2d76fe77b53c8be35535bb8f13d620"],["/2022/02/03/NLP学习/index.html","f7a7eaa2930c0aa71d578bc032f5c2ec"],["/2022/02/04/Web漏洞学习/index.html","e872b39f459c5f3f07c8f57fbe68fa99"],["/2022/02/04/pyqt学习/index.html","ac6e1a1c97bd8316bfda4e9aaede7fe1"],["/2022/02/04/python爬虫/index.html","4a65632a235ea754c42e2f9eb0ef2d11"],["/2022/02/18/Electron学习/index.html","b93f39aa583f44ccda0fc47f40ba9239"],["/2022/02/22/疫情填报字段解析/index.html","23660cc2475ff50be68b1eefcfb90a2d"],["/2022/02/24/Bomb-lab实验/index.html","a9b5d531682cb58527dfea85b13e4907"],["/2022/03/05/nginx学习/index.html","d158b479d0e5058374afeb9bedce8b37"],["/2022/03/09/汇编原理课程学习/index.html","8a5014120b4a4e28fa0333377f7d3f21"],["/2022/03/11/Keras学习/index.html","df577a857bf70cc91852681bf12eb8bf"],["/2022/04/01/graphviz学习/index.html","bbb83cc50dfd1f5473a7a5bdd1ca054b"],["/2022/04/07/django学习/index.html","30f25f7c15bb664fb7ef20aefd0a4b41"],["/2022/04/11/密码破解学习/index.html","289c7eec5fe7dc537cbf9e6f505d67b3"],["/2022/04/12/flex-bison学习/index.html","ab9a0f642c054b626a2fdce109e49f87"],["/2022/04/15/pytorch学习/index.html","9864aa088fc5c8273620e42859993f38"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","ac678d7e084c1987234ae7a2ff314334"],["/2022/04/23/写一个音乐播放器/index.html","730ee73c75d660fd903f0f3e47315cbd"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","1f05e28d8b2949d4ac3a2aa448fd1ce5"],["/2022/04/30/GAN学习/index.html","27d5fd3d1d32965e5822df54edbdb212"],["/2022/05/02/html精学/index.html","2d75433768c6dd57ffa198b7413f3025"],["/2022/05/06/write-a-compiler-by-yourself/index.html","8921a1ee95f11f87b3cc78e97884b6e0"],["/2022/05/30/acwj-01/index.html","588ecbdcb7a243f92080dd58acbc8666"],["/2022/06/14/animeGAN/index.html","e1b358e708145f60d4c52bb0a2ce9e93"],["/2022/07/09/c-与算法学习/index.html","e688348d6e5889a80c801505b4e6929a"],["/2022/09/19/flask学习/index.html","95f15b819b1e988f8a6284ed7cab0cc6"],["/2022/09/22/cs224w学习/index.html","6e2614b14a2185231c3c53a85e0812df"],["/2022/09/28/记录一次wp重装/index.html","1d234ce35b7822fd8eafb8849ae65907"],["/2022/10/01/Obsidian学习/index.html","0b7916db283276e8d7b4e974e43a148b"],["/2022/10/08/vue-element-template实战/index.html","983b30135428b490cfb78201e1e801ce"],["/2022/10/25/vue网上商城项目/index.html","c159674b88bb54599ca86637be79f208"],["/2022/11/11/leetcode刷题记录/index.html","d2412f2cc78af0873bd7cb1c30abcffe"],["/2022/11/11/使用overleaf优雅地写文章/index.html","cc1c8f1d202ef622422df4812c8955e6"],["/2022/11/22/磁力链接与RSS订阅/index.html","550bcfab3f3d08bb44ea4f8aae7a3995"],["/2022/12/11/uniapp申请获取地理位置/index.html","01f5264a7fdda94b80931610f4d2c3ac"],["/2022/12/26/pr剪辑学习/index.html","f34b342a39392eecf7fd8fbe69db427c"],["/2022/12/27/css中的flex和grid布局/index.html","609ff3113c05bfa5c143aee8ed0065c0"],["/2022/12/28/Flutter学习/index.html","8c123bdd84f65a11a0e714595c7243eb"],["/2023/01/01/美化github首页/index.html","c2de4b6376d6fbe9133e6e7a95ad86d1"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","a52fea1c8ac9a3157599097bd5270c78"],["/2023/01/04/构建微信快捷发布文章工具/index.html","0902dc2cf33eda287309aefc9cd81144"],["/2023/01/14/dart学习/index.html","9d590200640aee331fb18e61da72db42"],["/2023/01/23/闲置服务器BT下载影视/index.html","59cc00a362e88ebce838d15dc18b19cb"],["/about/index.html","ae713c3f00c3f66c66c9e6cf959a734c"],["/archives/2021/04/index.html","5d11d385b612b2ecac17d382737751f4"],["/archives/2021/05/index.html","a4439f56fd1c70be2996f2351ffb5e45"],["/archives/2021/06/index.html","7424aa6f0890fe926019be0234f382ca"],["/archives/2021/07/index.html","ffec40eed0b918a1f982e4981a31ec12"],["/archives/2021/08/index.html","57bc09f4c5e0ac03b2b8c6dabc87381f"],["/archives/2021/09/index.html","4bf83d5cbc0307f35760dfad9c0c015f"],["/archives/2021/10/index.html","5cfba30cfc10cfea831ed4e0c084935d"],["/archives/2021/11/index.html","1d5cbd9b61239bbd4abeb130b16ccd73"],["/archives/2021/12/index.html","a7c78cfb19796cf4ace81ff3bfb027be"],["/archives/2021/index.html","a6825e18e2ee9108fe217c770f1a5bcb"],["/archives/2022/01/index.html","2d1ae3a66eef59fd090446624d35ebf6"],["/archives/2022/02/index.html","25b998e475081d828d6c79d6b8e06f52"],["/archives/2022/03/index.html","a7261200b1aff74e3eede638f2993a6d"],["/archives/2022/04/index.html","bb243796444fb773d24b6d3e9ede189a"],["/archives/2022/05/index.html","252c79243886e769acbd0f17eb590405"],["/archives/2022/06/index.html","24d3777b06adfb114ec2952d9e4850cf"],["/archives/2022/07/index.html","c16c6b08473d5834034dde62f91b00ee"],["/archives/2022/09/index.html","55d93ba7807a890395bc924a8ca7aee5"],["/archives/2022/10/index.html","6bbf058a2af6a476609f75eeaaa597bb"],["/archives/2022/11/index.html","e5d16c3273aa88c8aa68abdad5da32f8"],["/archives/2022/12/index.html","fa70ab3c1f1e8457c4b9d5fa80be9358"],["/archives/2022/index.html","e52eb7f2b4755aebcaed873d4fcc096a"],["/archives/2023/01/index.html","8c47fbce025740cd5efb35a9d966d273"],["/archives/2023/index.html","3b8a437c032a979fd8344a8fccb2e9b6"],["/archives/index.html","90fa477c84fce41ad947a4c623436aea"],["/archives/page/2/index.html","0b770f6c4c74ae89c43823e5af231fe3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","4de458283eff4a11ad858be236137883"],["/categories/ML/index.html","0b4d47a82ad359848fd7721ccc2575f4"],["/categories/Nginx/index.html","e8cca2a7efb0a5f51aa2729adb56c12f"],["/categories/Spring/index.html","99e24f10f8015abae314d169149e48f8"],["/categories/course/index.html","a1b0114606d56e96a846411748a54b6e"],["/categories/django/index.html","59037c2b56d9de2f4731d8f44b072a70"],["/categories/fun/index.html","7f6a414180857cb25f4033746552704b"],["/categories/gcc/gdb/index.html","bd281c7a46d3b1174116f564259c0251"],["/categories/gcc/index.html","1f1241eaee034b3f52b3efc1f22c25ba"],["/categories/index.html","fcd46d79900334cbc295387e5fd92792"],["/categories/java/index.html","fbc4c4bdacf2343351f35c50ab2a1a6b"],["/categories/python/index.html","c26ca596f7995f587e8e183705abff4f"],["/categories/study/index.html","dd91179f9aea226899db95eb5f4ce064"],["/categories/vue/index.html","0ad434af94617c097b5a71e3cd10a9a7"],["/categories/误区/index.html","63176b56ca5d7fcb0c4bf1eba3b0b6df"],["/commonweal/index.html","d56e1d67c7d77b72da3970ae42c83609"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e97f753b98267910ae4a8951495bc71"],["/home/index.html","34d07ed80be02c6f0267d41cd7757d20"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","ecaed4335a1e2cd9b9d43a7fbc92302a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","281105b17745fb544b84d2a0b6d5ee6d"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","4f0691d3ca940afe1d818281e563c705"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","8294d43dcfa990d8a8f7d3c815df2847"],["/page/11/index.html","153b10e865cc67e8290cafa91d8fbd16"],["/page/12/index.html","5b10f43cbf614d6dcf8e9315e42cf097"],["/page/13/index.html","4f4387ee1ed6a5b4556ed6c8a4bcd06c"],["/page/14/index.html","44ddfb1235020262bb6c497c2e0e16a2"],["/page/15/index.html","b34cd75457689c08065f50bd47eaddc1"],["/page/16/index.html","81a3ef8c0c6486875a5fb3cf639c80e3"],["/page/17/index.html","e88017f345b75827f4b360cb2ca2c823"],["/page/18/index.html","1ca23cdd48958863436149ecb77c3bf6"],["/page/19/index.html","1aa43fc8a1d3ff1c7300e83980977ced"],["/page/2/index.html","bd33f6adec4f0285c10e09da70328e16"],["/page/20/index.html","9f7fa489ec7bec58faf6105dc3cbe130"],["/page/3/index.html","b895b2696c5e22cb521fd9f898c53ecd"],["/page/4/index.html","67c2cc1583e2100556f496a9b9d387a8"],["/page/5/index.html","4f23957aa25ba193cac5aafd18a7d7af"],["/page/6/index.html","7ffb665abb998bbb73d9ef79cc2e8d18"],["/page/7/index.html","12220fb3308b2bcb7f758edf8b6a0536"],["/page/8/index.html","8eb6d9de195702c35bde3ad6250ad56b"],["/page/9/index.html","33210968eb6badd3e436bf23213aa7c1"],["/resume/index.html","2c7fc5d0350ac869557ef4dabbbe0883"],["/schedule/index.html","8c50626bd69391f5014c814e7b7d0947"],["/sitemap/index.html","791fc8af5255c8fcbe6c3f7711abd2ee"],["/sw-register.js","41b24bcac0d59eef029b07497f135524"],["/tags/AI/index.html","f8138e0f9e1a529da1f8b5e4558073a3"],["/tags/BT/index.html","9c6491e4d39dd23d95c622957636f45b"],["/tags/BaiduNetdisk/index.html","7f1b4ee2982357b409276123974da142"],["/tags/Bootstrap5/index.html","26479c0f4058b7df0faa74ad2faa9838"],["/tags/CSS3/index.html","5b52c8d7952b5246bb05fcb73a407733"],["/tags/Centos/index.html","165b43c50d4c236ab5b69b5a79106ae9"],["/tags/Electron/index.html","74a9ccdc59cc196703710e4d85a5a4c8"],["/tags/ElementUI/index.html","42c687610026103909267357c40d5ea9"],["/tags/Flutter/index.html","ab3bd6e5f5de5c205eadb24d0a20c84f"],["/tags/GAN/index.html","5fa88fcd1b2a785f5c2ec489ece4030c"],["/tags/GUI/index.html","7e811b05720b26151f4be8273182da13"],["/tags/Git/index.html","20b697330723f7e62d9914f7e7a5b2b6"],["/tags/JavaScript/index.html","8536c39761e0b499ab878d5ec977da0f"],["/tags/Keras/index.html","a1a533f1ca53616edf29f4c8c453e15e"],["/tags/Linux/index.html","39d144d8b65feb870639debcd752c06a"],["/tags/ML/index.html","8dc1ca66a5bccfdae521c59bedcb1a56"],["/tags/NLP学习/index.html","c1b851add1ed33c5bcba1995ffcbb9b5"],["/tags/Nginx/index.html","15b2164dfbb6b78de94ab9e3c42d377e"],["/tags/Obsidian/index.html","546480013fdcd32cd32a64bd590d01dd"],["/tags/Qt/index.html","4b41a2c0ab32a619cba1f269ea20adf8"],["/tags/RSS/index.html","32f9dbeb7d6fab69798636c9f26fd851"],["/tags/SSL/index.html","c92f27a708eba9fedf9cde19c6ff344b"],["/tags/Scrapy/index.html","937b2dd9bc24b07c7213dac580a4f37a"],["/tags/Web/index.html","5e3c34de14421aa55c69efbeae2a97e9"],["/tags/algorithm/index.html","418c920a2d8a7398541c5b51bcf9ea29"],["/tags/bison/index.html","6b5710272f1efd182189c303caeac532"],["/tags/bomb-lab/index.html","775c66324b02a4dfbf7b4f35654b2131"],["/tags/c/index.html","d3b243776311c0e10fc47e62922f6db5"],["/tags/cheerio/index.html","b56c37e3e2f6e3feb0c9d361b5d5e005"],["/tags/codewars/index.html","27a8dda0af93b7fc5f1c828404557af5"],["/tags/compile/index.html","e8c7cc2cedf3136231755a359cdd05a0"],["/tags/compiler/index.html","f3fd9e70305638255d4b7b0dca0a9c09"],["/tags/course/index.html","7cca28bb367248bdb957f49d7ccfcf96"],["/tags/crypto/index.html","24c881d6c3f431fa5aa5f8996261115c"],["/tags/csapp/index.html","0a4a12d8aca58a67ff09cd74cc376089"],["/tags/css/index.html","4ef2d4edd57a0f4e1609790656c8236b"],["/tags/dart/index.html","9ed09da55926e8bf2ca5dfe3b42206c9"],["/tags/data-structure/index.html","61b4ec340e0011e99cf3ef81f9245a03"],["/tags/database/index.html","8800242d9ce05ebf9a037db2aa75a33a"],["/tags/deep-learning/index.html","9d4d9b2302da5afd9198048e55d7a293"],["/tags/django/index.html","82017317cdc723ace31cf5875791decd"],["/tags/dwm/index.html","67316a454bfe105654b4dcef367563fd"],["/tags/exercise/index.html","0f8db590f90c0296ba12515be9b304be"],["/tags/filebrowser/index.html","c83f7de7e432f81549b9b9b04a37028a"],["/tags/flask/index.html","46a1d87b0d0f33f2ee1839cfb2b4fc6b"],["/tags/flex/index.html","51a19de3ec7a2c0f77504279aa43854d"],["/tags/front/index.html","d83c4a68752fe8d8df0553e3b1930ab2"],["/tags/gcc/index.html","efe1ecf31ac64cc6e4b6158dd34fe58e"],["/tags/gdb/index.html","473f9f66233ccbdc10b70956299a8ae5"],["/tags/github-profile/index.html","91fabf7be797d12c2df11cbf2fb93ff4"],["/tags/github/index.html","9cd19b56b95d317adafd07c5dd040a20"],["/tags/graphviz/index.html","10e27d73578de551c9c6d04a3ba05405"],["/tags/grid/index.html","76af8cdc3e2ad1daabc80743ba0c9ba2"],["/tags/html/index.html","e6d75b1b0e45b60b26f47a8f1dc87324"],["/tags/i3wm/index.html","5ac308a955eb27c29239deaed23a7185"],["/tags/index.html","6dc133ff2dba84dd561bf4b7bf21e5a1"],["/tags/issue/index.html","b6aa1a37388fdedc4be9aa7830ab23d7"],["/tags/jQuery/index.html","393a0f69e2ac8b086f03033f28a931d1"],["/tags/java/index.html","a64e7b4901559b3cfbc1cd86f1ae5081"],["/tags/js/index.html","713df48bced0486860addfc1c8b493c9"],["/tags/latex/index.html","97590feacd8f0442b5463cbf3b798226"],["/tags/leetcode/index.html","6f9455244c85148b3a40fa1b599476de"],["/tags/lex/index.html","b0bdbcfd049aae97073f74680b9751ca"],["/tags/material/index.html","db3f1ce1b6fe9f1c12ac624daeb3cfae"],["/tags/music-player/index.html","b126a5790162050216e0dec9bc561699"],["/tags/nodejs/index.html","e868229010fb032138035dbbd88873f6"],["/tags/noj/index.html","2e0e3871d82c9f38d89c3cb081b4315c"],["/tags/opencv/index.html","d3dd6fc29b6d74eaa436368234843937"],["/tags/overleaf/index.html","aa4bf5f91da1ea3b90438b2eabc02e9d"],["/tags/pandas/index.html","71675007db1f3b0d2b9eaaf0e281726c"],["/tags/premiere-pro/index.html","2b4fb6e1d14d5d57a086a53f6de4621c"],["/tags/proxy/index.html","72e307c545d3b7999ebbe54d0cfad1bb"],["/tags/pygame/index.html","d5bb447d8ae41df584ecf1d660073129"],["/tags/python/index.html","d08e684ba87800fc881d36b28f05ff0f"],["/tags/pytorch/index.html","f8956c6733451d43b32553be3fb0cf0e"],["/tags/reading/index.html","f0103036a1478a40e5937871767dbaff"],["/tags/request/index.html","ba4dbd434a227c3cbd77af22486d44ac"],["/tags/requests/index.html","b477becba66da66520366bf7cc3bebd2"],["/tags/security/index.html","56110020e7f1cd1da1be437d057647d3"],["/tags/shell/index.html","08560b7bd3c0e19a05ad442a31f961bf"],["/tags/sign-in/index.html","e692d19a8237d4e1640e82c0c115148f"],["/tags/socket/index.html","bfdd6610ed9c6ece8b085b684379076f"],["/tags/spider/index.html","47e7dcbfffe475432d650d2c16530998"],["/tags/splash/index.html","889b45bb3ea411e0e35fe17d89365108"],["/tags/superagent/index.html","c6f556f692a024feb88bc5b51dcb303d"],["/tags/tensorlow/index.html","c9d6639888153d35940ecd690748439b"],["/tags/tex/index.html","89cb71cf9d008c227f3e20b94aa061d8"],["/tags/threading/index.html","ca5af94b61c9c632d6d0abd72d2925d9"],["/tags/tkinter/index.html","dbf8ffe159bbbddbde7b404173e09e27"],["/tags/torrent/index.html","7622b1c9bcd813268f422772b150aa82"],["/tags/tutorial/index.html","b3d3a9d8514e20519921dd8997ad6ec1"],["/tags/typora/index.html","c6ea7c0af117a48222bc7fbdbd289790"],["/tags/uniapp/index.html","6ca0f998d5f3f961fbb7e4181502b6aa"],["/tags/vite/index.html","99bc4613e2dcf12b0f449f8e1b4af296"],["/tags/vue-element-template/index.html","b7b65fdce7ec1c8f9f187c866b54e9c5"],["/tags/vue/index.html","03abb5d82826ca39f522718276a336ac"],["/tags/vue2/index.html","c963f43238a140c4564eb62a33c425cd"],["/tags/vue3-x/index.html","dbcf80aaabf09be5d771e28d582eb9d0"],["/tags/wechat/index.html","de4555e4bc1c00d1258ef2bc09b6e9fe"],["/tags/wm/index.html","c4ab985a0344e6967bd89e771c666515"],["/tags/wordpress/index.html","0999231796ddc9382f1fa56b99cff3a4"],["/tags/workflow/index.html","459dbb34009579c46e74866f5807aa0d"],["/tags/xpath/index.html","7c1aa739b57fc42ae703a605f2acb498"],["/tags/yacc/index.html","67edd2434589f75046e6256884c6c080"],["/tags/zsh/index.html","adc74305b6aa4594e93e1cc57c0ece6f"],["/tags/七牛云/index.html","f51b8d698c22c6b20f3e96042ec31246"],["/tags/函数/index.html","54793d6780aff1076513ada06dae4bc1"],["/tags/剪辑/index.html","4ef05d477010a66ce07619440237568a"],["/tags/存储/index.html","82c47d5ccd2802be4457f7ea89c093bd"],["/tags/实战/index.html","d376199de8cc1f7ee9ae0f950e4bffba"],["/tags/建站/index.html","e813a28b35556d5690be51cd05e9f60e"],["/tags/微信小程序/index.html","3bbaf66a57a2c6663f6819936f0228d3"],["/tags/指针/index.html","8f85a6df705215360807bc7f95978e47"],["/tags/汇编/index.html","d25514ffc3c14949110a8c7d2ad0e579"],["/tags/爬虫/index.html","a4f956d71977c08c89953fa143595a96"],["/tags/算法/index.html","c0cc7f5324cd05e4bdbef321b4d4dac9"],["/tags/编译原理/index.html","03d655d64f9d8d64034ac0fbe366b0f9"],["/tags/获取地理位置/index.html","b76f7cab8eb226be94cf8a9abe064852"]];
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
