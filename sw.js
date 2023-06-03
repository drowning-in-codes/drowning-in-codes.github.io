/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","de2d2a02cd9f79ca88e67d8ba22f70c5"],["/2021/04/20/稀疏矩阵/index.html","6b76567eaea3192dfa7ae7217298853d"],["/2021/04/23/广义表简介/index.html","62581d2b9ff3a89ba01d25ce1c7c89e2"],["/2021/04/29/关于指针和函数/index.html","8bc53286a23706725112fb1a36c36473"],["/2021/05/10/哈夫曼编-译码/index.html","16b4e61758bb2ce42ac2e984467a4afc"],["/2021/05/17/数据结构noj_2/index.html","cec106e583a02f54f8fa456159857081"],["/2021/05/30/数据结构试验/index.html","445c2f71fb1924b5946fa9dfd2d6d3c9"],["/2021/06/12/数据结构noj-3/index.html","29852af0d7c46f87ca766faa18a7ee00"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","12789fe4fbc737be2a757599b47b8eaf"],["/2021/07/08/课程资源分享/index.html","057ecde8e3b5358eb4be8dcbc137af20"],["/2021/07/20/Scrapy-下载图片-文件/index.html","ba3dcc110ef6676211dbada2eae2f496"],["/2021/07/21/Scrapy-动态网页爬取/index.html","f0157e3675da6cb6087fc2c673e3cfd9"],["/2021/07/21/疫情打卡/index.html","dbe0632a4d33d5116c8f9a36bf772979"],["/2021/07/29/Scrapy代理设置/index.html","b2d1d18855906f95ea762a83c2fa5140"],["/2021/07/29/数据库认识/index.html","4d5f3165a59623d5b052b58193ef8c71"],["/2021/07/31/Python多线程学习/index.html","e99684d54794ad3d56e67497168c8075"],["/2021/07/31/tkinter-requests练习/index.html","3555db9557939348ce73be5dbd859515"],["/2021/08/10/Git学习/index.html","11106f42541a87cc45e0fcf4306902f2"],["/2021/08/15/pygame实践-1/index.html","3e8cf6df4dc82dc5d29ca4aaf08c0fe7"],["/2021/09/06/微信小程序开发/index.html","9871b937e47c1edbf288af11ccfd6c3d"],["/2021/09/21/命令集-1/index.html","2825152af5276b45ead687719a93924d"],["/2021/09/21/命令集-2/index.html","9ec75e923d3aa0e923d8851f783c0d38"],["/2021/09/21/命令集-3/index.html","b0dbc463b4e65589c33d10bc76eb8c0b"],["/2021/09/21/命令集-4/index.html","0a8b63e968e3ac8a1d19dedc6c5c09fc"],["/2021/10/03/socket学习/index.html","e199374cf2fbc76a5387769d3fb288e3"],["/2021/10/10/dwm入门/index.html","5db0e6fabafc0e5d13302380f6b8d720"],["/2021/10/10/安装ohmyzsh并配置/index.html","c5004b42d56080f5a418b8963b614064"],["/2021/10/20/css学习/index.html","7a4a514435bc9e9b4f2cf534ee19c901"],["/2021/10/20/wm入坑/index.html","0960ce0cc140afede201fce1ed74a819"],["/2021/11/03/微信小程序学习/index.html","6dda32227ebe60e59b27922520b5cdb1"],["/2021/11/04/css揭秘/index.html","980b39b99812bb2f1adfc070a04d5190"],["/2021/11/05/css-练习/index.html","d90fc19896f7723b69fa631633904a8d"],["/2021/11/21/命令集-5/index.html","7b281c7dcc6287d8aa263a2fcdeca55b"],["/2021/11/21/命令集-6/index.html","e9213b3a2cf93f94962d0c078da865d6"],["/2021/11/21/命令集-7/index.html","4d53f18d9d9da3d062a5c8ee0a014896"],["/2021/12/01/搭建wordpress/index.html","68f245c04489c998bada4d594e00db67"],["/2021/12/08/python操作百度网盘/index.html","efb9caeda9e8b6f3e06348783eeaba16"],["/2021/12/14/js爬虫/index.html","2083a5c327a010f671469284e04cb4ae"],["/2021/12/25/为网站申请ssl证书/index.html","be18ddd9c831d5ba4cdf861ea0e8c0e7"],["/2021/12/29/使用七牛云为网站提供服务/index.html","f2c6ee719a154604d4d9ae0333d3033d"],["/2021/12/30/jQurey继续学习/index.html","6b7b5f84395f51d1f560c51f77aa2bf6"],["/2021/12/30/jquery学习/index.html","f9ca64a43239191dee66979d106296bb"],["/2021/12/31/vue学习/index.html","51727438dd528481860b980b6eb2b284"],["/2022/01/02/疫情自动打卡/index.html","19d867abab8ea8330f00c901c010b798"],["/2022/01/03/javaweb初体验/index.html","ff46abb2fb490017be9295afc4e29c9d"],["/2022/01/04/codewars练习/index.html","92e71e942f8720206310cfda9bf0c823"],["/2022/01/05/Spring学习/index.html","f61e94520680d48b2f74c95eeabacc0f"],["/2022/01/05/vue实战/index.html","5235126f00351c9479ce0353c61966ac"],["/2022/01/08/gdb-gcc学习/index.html","f8c59f29bc8b94a1665501827cd0c919"],["/2022/01/11/python-opencv学习/index.html","3bea1c322ec315a7c3e10aa819b8db7e"],["/2022/01/12/汇编实战/index.html","b1559cd3d86d8808fbc20adb6db1bd62"],["/2022/01/17/pandas学习/index.html","b9d4d195ba29ce6325f2c985f904e532"],["/2022/01/19/可视化图的工具/index.html","eecddfc44a9ebde6f3fcfa3bea8c3157"],["/2022/01/19/机器学习入门/index.html","763931455041504651c748466663c872"],["/2022/01/20/cousera-ML学习/index.html","9c0e2162b9d02731434a84e45e145bfe"],["/2022/01/30/typora解绑后出现问题/index.html","2106221437d30597e2195b2617b62ab2"],["/2022/02/03/NLP学习/index.html","fc09d1bcf5a4b1125f1a810265045ade"],["/2022/02/04/Web漏洞学习/index.html","f61d49ca7680919b169e0bc666427bd1"],["/2022/02/04/pyqt学习/index.html","87fad289cda4d947fa69b354070d24e5"],["/2022/02/04/python爬虫/index.html","eac5f46b3b9c6ea889cbe9f551350e41"],["/2022/02/18/Electron学习/index.html","6676821b800642e9aba24b050e37d8c2"],["/2022/02/22/疫情填报字段解析/index.html","cef78b4d8e4f0699fcea69f24a4c53b8"],["/2022/02/24/Bomb-lab实验/index.html","4303cc883f125ea437594e8727abb1b3"],["/2022/03/05/nginx学习/index.html","e3644ca4265d812c00a3f43e0aa433c1"],["/2022/03/09/汇编原理课程学习/index.html","e61783cbe370f3dc2496e6193033b87b"],["/2022/03/11/Keras学习/index.html","1cf37ee1a8b6ef051628874855063490"],["/2022/04/01/graphviz学习/index.html","c95b994169fe4465fbb3f4e3e85909e9"],["/2022/04/07/django学习/index.html","556f6624abad193564a3dec897605085"],["/2022/04/11/密码破解学习/index.html","f601bc20be32333faeb5a216ca5c161d"],["/2022/04/12/flex-bison学习/index.html","186c15b1b3ae3f8ab15e2b89b534c235"],["/2022/04/15/pytorch学习/index.html","b835a35efa2efd15e6dc8a4cc0fccca4"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","eeb955c36183ad54a1a21a7e7f9e686a"],["/2022/04/23/写一个音乐播放器/index.html","b77f5ce16ca803417bdd87874356c920"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","39ff5385d21e43b3e456ea1f6728783b"],["/2022/04/30/GAN学习/index.html","dd74354402a3480f27bdd7c6e914104b"],["/2022/05/02/html精学/index.html","7d7ba541c54eaef00e6d545dddd03b08"],["/2022/05/06/write-a-compiler-by-yourself/index.html","71690eccd2bc9c88e054ad72f09fe380"],["/2022/05/30/acwj-01/index.html","8617e7382787127b70675e1d35d2928e"],["/2022/06/14/animeGAN/index.html","18cdb69d44489d48d2ef1c78c0a000f3"],["/2022/07/09/c-与算法学习/index.html","c0639e200e1c9444499de27b9e610e36"],["/2022/09/19/flask学习/index.html","7c041010e56ec5e514522a709761a2e1"],["/2022/09/22/cs224w学习/index.html","b68238382de1f5a854723478e220a270"],["/2022/09/28/记录一次wp重装/index.html","b4e874ac8748a151199799da5845b6cc"],["/2022/10/01/Obsidian学习/index.html","db358ba081d465b4947615560fa6c8ef"],["/2022/10/08/vue-element-template实战/index.html","6b0cf28c8367416712e0c1e982458752"],["/2022/10/25/vue网上商城项目/index.html","29fb740b64cd909b3e7d8c0104fae302"],["/2022/11/11/leetcode刷题记录/index.html","9fa03f52ddb7833930895cf270137a0a"],["/2022/11/11/使用overleaf优雅地写文章/index.html","a54cc590587ff9728d71daa4daf3c9cb"],["/2022/11/22/磁力链接与RSS订阅/index.html","4d04a3ea34fa173c6929fe98ea14a453"],["/2022/12/11/uniapp申请获取地理位置/index.html","2db3b0d17d09cc710336c44999db9dc1"],["/2022/12/26/pr剪辑学习/index.html","15465a6452a0ee76f0428f6ac0aa5560"],["/2022/12/27/css中的flex和grid布局/index.html","9b2a0c77ca790a5fe64bf4bb5ffeb008"],["/2022/12/28/Flutter学习/index.html","cd6169e00219e35ffe353f9018ae157a"],["/2023/01/01/美化github首页/index.html","cd3608c8322dad7ea4eab349a2eb9728"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","111e4a5cea5e3cd05a9962e1f3f330f2"],["/2023/01/04/构建微信快捷发布文章工具/index.html","973d8c688df6b11087389a9296d3d17c"],["/2023/01/14/dart学习/index.html","6a46f8d3b48ecc26da118a72a4e6a61d"],["/2023/01/23/闲置服务器BT下载影视/index.html","94623d831e11b3856aa9bcaafe0d918c"],["/2023/02/07/TotalCommander使用和学习/index.html","428826629d127f52b3125920759efd33"],["/2023/02/13/docker学习/index.html","2196f28c5431e037001b65e4f1105ca2"],["/2023/02/17/DLHLP学习/index.html","a30238098c952e7a6b42969924409d47"],["/2023/02/18/学习purecss构建自己的css框架/index.html","66ac29a8d4dc184971a9d3f50d1d1281"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","a1a9fa0016773e31285ef7cdc52c24a5"],["/2023/03/05/STL学习/index.html","ac0cb81703a81a8ba0253f076d58481e"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","06b9118d4c491b2af75b618804a9b03d"],["/2023/03/23/实战写浏览器插件/index.html","2a2a462005daef6de6f041c46fa5ef89"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","0a9999b046de38c7b4fc66dff48fedf4"],["/2023/04/02/EndNote基本使用/index.html","2830a172449f390051851e45feda8096"],["/2023/04/04/mne处理脑电数据基本使用/index.html","974a594052d6b383b7bfc7a96051b9d1"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","17886446689880942157fbecacc02e67"],["/2023/05/02/python中的logging模块/index.html","b7e3e3f5bbf28a875fa45ed83dd37f04"],["/2023/05/07/python的特别方法与装饰器/index.html","0ce8867402c75a72175bd43acc9c2248"],["/2023/05/20/Wox插件编写/index.html","cd396969926a76404894119a1d808f1c"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","0e0e3e6cf18f5a6e53facfbfec99d827"],["/about/index.html","c2ceac73e1dba3024688d2c1ae7f041c"],["/archives/2021/04/index.html","211c08d690143766324466bb80a5b999"],["/archives/2021/05/index.html","9e33645f650f9dace02071f94ad6c9dc"],["/archives/2021/06/index.html","1b2ce318fe641a85b8830eb70722fb56"],["/archives/2021/07/index.html","b4f5efc02ff02341cc429d3b00489e52"],["/archives/2021/08/index.html","1fe252c65746a214898914d83f92de0f"],["/archives/2021/09/index.html","b2013bea2b35b1e6715690a14278dbef"],["/archives/2021/10/index.html","b28a88133414e09501333ada74d909be"],["/archives/2021/11/index.html","cdeec9e2196f7c14960589967c490244"],["/archives/2021/12/index.html","73f34f8148f042d5485026564b83b2ce"],["/archives/2021/index.html","20615fc0a800c7e40646e32f5764d140"],["/archives/2022/01/index.html","589f0f8e30a881b5e133b8cbc5e7fa5e"],["/archives/2022/02/index.html","ed8d77342926aea4b1a1465213c241f1"],["/archives/2022/03/index.html","d6232d5ad31d424d0af3b1865ff01084"],["/archives/2022/04/index.html","efd770e9ba614a3f89148ba7fd695b93"],["/archives/2022/05/index.html","5c2b95c21ee2e4e083ec7db8d72f36d6"],["/archives/2022/06/index.html","49c2e2e4210dec4e13c32b39f8655177"],["/archives/2022/07/index.html","a594a8f8f949c12b7ec7e4adc34e493b"],["/archives/2022/09/index.html","691087c4fb42e67d0a700faf487898c7"],["/archives/2022/10/index.html","c072260641aa02833248e0df5530150d"],["/archives/2022/11/index.html","7964be5ece038faa0905cef3d3b29fce"],["/archives/2022/12/index.html","beb458347022c3501f24cb5f6cd85502"],["/archives/2022/index.html","44cbe43f1895f402e3060b6434f49607"],["/archives/2023/01/index.html","fab2aa940ce05b7d96be3d15c368a697"],["/archives/2023/02/index.html","836f5be22edd522e71de57d61a0682b5"],["/archives/2023/03/index.html","b39739b7406e12d648715f949d973657"],["/archives/2023/04/index.html","fe691f5c374985b11f2099557a0c5d62"],["/archives/2023/05/index.html","8022d68172cc0d6a3ef4850961edc41c"],["/archives/2023/06/index.html","da3c9aa703bccef97a7ade47c28ea64a"],["/archives/2023/index.html","89a027446e2eea27be82514f48409b12"],["/archives/index.html","d18f6891ecfdf8fcc9f1769c78aab0d8"],["/archives/page/2/index.html","ab75ed5be6453b1dac4ab2c89bde65ed"],["/archives/page/3/index.html","4726bf89712bbf3fd22d2a0ba1daa2ba"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","7b70b0741d090459acaa237c73c7d8cf"],["/categories/Linux-study/index.html","a5064a5798136c2614fca78734c31b31"],["/categories/ML/index.html","87c3f16ec763636d3614bf9a1849b16a"],["/categories/Nginx/index.html","3bb66abe9de87350bf67ae6848430ddb"],["/categories/Spring/index.html","0dbd33bdeeac2c1bec4ffc36bffe4b01"],["/categories/course/index.html","5db0b637eacd0fedb4a58e194f9290cd"],["/categories/django/index.html","26d3861c62e3588a2ed098d799b52d72"],["/categories/fun/index.html","0d792cb94114084bec4ed5de9731c455"],["/categories/gcc/gdb/index.html","314a771b2f0361d5123f4e26b3390a62"],["/categories/gcc/index.html","4a862ff0f196df077b8ac208fef0d282"],["/categories/index.html","65e4a851934170cf8949b5ad492a6fa0"],["/categories/java/index.html","5afec3fc8530c4616b851faea1698d13"],["/categories/latex/index.html","2c7b0696b2be24a6bc4a3bef386f386e"],["/categories/python/index.html","21910eeceea669977188d795721d5498"],["/categories/study/index.html","6fd8555f7422a3b680f8d817b6a5d0b4"],["/categories/vue/index.html","68f2a43a832c59cc496bab39ead21bf1"],["/categories/误区/index.html","cbdd9e9bdfd4aa70ac53b30d3772513d"],["/commonweal/index.html","def92f2bba955b5054f76ed6812e6c05"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9207c8b0006be3bcd79f7e43952f26e4"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","b92aca471a9f27a59ead4a8bfdeac2d2"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","197ba57db2ebb0cdd4851e5af3a80510"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8bba3f8f279eafdd60dcec451cfa9b00"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","a3a7786d0090d840704280fba96b045e"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","7fae96f52ba9464a5bf4452a030c5c5d"],["/page/11/index.html","cb8816fd1b22ab9017400dffd8dadfbf"],["/page/12/index.html","dd02c443670c9865a75cd714683d2641"],["/page/13/index.html","5dee61f4218e00e2c5717c5ac6209f22"],["/page/14/index.html","93e46caf01126a2c3b9dfdadbe70f293"],["/page/15/index.html","2ca639e0740292cc5de7e3811935d4e6"],["/page/16/index.html","2df1bd1ca39fd404e25ab73c59ebeb58"],["/page/17/index.html","0f5f6926dc901266c20fe72655c31171"],["/page/18/index.html","84d98bc9cf6285bde760135ae8fd0082"],["/page/19/index.html","fe640dc52f8d0d22f186ce49b8a1487c"],["/page/2/index.html","4a8bac9a60f3babe6147f5a6baed181e"],["/page/20/index.html","7e332e351c76d2bff9564ac56a0ab5ff"],["/page/21/index.html","4fdbdbdebe351612679e044698cad56a"],["/page/22/index.html","56029039c02bdcfffc2d2b9ff5339f75"],["/page/23/index.html","e090d600acfea452bb567e5c8fc4e4dc"],["/page/3/index.html","279abb969e9ee0d1457c9dd48f86450c"],["/page/4/index.html","8bf250fae07bd725de3e0971bae85ef2"],["/page/5/index.html","962fe9628bfdd6265bd49b07b3dcfce2"],["/page/6/index.html","bbec550a3ab96d36aee832cde1241d73"],["/page/7/index.html","57791fb269375d2e40641dfc9203b6cf"],["/page/8/index.html","f14afa6a0a138c4b8aeb1d394c044e25"],["/page/9/index.html","c12cfa2e55a06d50c3985a4d8a9c3c39"],["/resume/index.html","a79401b547da45c25d0c96ae79cdcc90"],["/schedule/index.html","7027ff07c733f3097ed27d2ac6082bb3"],["/sitemap/index.html","871fd92e8fc66281592479908bc94836"],["/sw-register.js","0a39e445c4b15927075d2e5feb0a74ad"],["/tags/AI/index.html","e8cf6c71ed47b908f0a7f2cb637907b8"],["/tags/BT/index.html","f99ddd14c4d7af5020d6b9756fddc789"],["/tags/BaiduNetdisk/index.html","306e1df6f015ec146e53e7289b042b53"],["/tags/Bootstrap5/index.html","53595f41d754a34e0054d2dffc8c26fe"],["/tags/CSS3/index.html","bfe8e6a0edc090f5dc7528545fd439ef"],["/tags/Centos/index.html","8cd804609e529c369ad2badfc4080813"],["/tags/EEG/index.html","28e029b0f1eb361734acd37ffac2cabd"],["/tags/Electron/index.html","98a094e045670c9ef425e4caff7cd491"],["/tags/ElementUI/index.html","620d0ad85c27f9693aba812721de4616"],["/tags/Flutter/index.html","73b39d5f5ff716d0effddff04b98d503"],["/tags/GAN/index.html","f9bfb856dd6870d667f7a93fd5fdc599"],["/tags/GUI/index.html","cc4ad3864d0b7bc0ad30fc2e68310cfa"],["/tags/Git/index.html","edc788766ba1f3d3aa5d154a2baeef51"],["/tags/JavaScript/index.html","2dd43d9c6fb6619c7ec7c33237f4d567"],["/tags/Keras/index.html","3741295e2864861b51e1341fa25ae521"],["/tags/Linux/index.html","766b426053cf106b48906eda11d2e4db"],["/tags/ML/index.html","6e4080cc281ebadbc74b5d1238e2d542"],["/tags/MNE/index.html","fcd511eb334032665487f6762103ecb6"],["/tags/NLP学习/index.html","d942f7c769ee628da1a884c7f9326923"],["/tags/Nginx/index.html","550ddf185459ac865568b8097fe3ac82"],["/tags/OSS存储/index.html","5061e37d03aeb85527e2ad4f38b3caaa"],["/tags/Obsidian/index.html","77073905474e54b47416c925c0d4c39f"],["/tags/Qt/index.html","50126c900e0bae2b790f3c956e47e1af"],["/tags/RSS/index.html","4cd3dbc46b90762c6f264a4154e435cd"],["/tags/SSL/index.html","f84c7a7306d359cec8112ca694a0cb19"],["/tags/Scrapy/index.html","48e4abea2dfd28ad6049c84f9ea0cd00"],["/tags/Speech/index.html","46e56d98c5749bebace844a703c810cb"],["/tags/TotalCommander/index.html","9ecbc4926a09c73ea8b27b46fb1556e9"],["/tags/VPN/index.html","da4b2cb326f3701bcd9a92236e2cb556"],["/tags/Web/index.html","66a9d3e15df320f77ee5d632f0623417"],["/tags/algorithm/index.html","a4285c6ef60a72c76e05bb71fe74f328"],["/tags/bison/index.html","334fca363abe3a44f61681ce5f803c8f"],["/tags/bomb-lab/index.html","5c82731814d49591832b2d40eb5b4dc1"],["/tags/c/index.html","cd8fb9d657e3cfc27090856cb73bcdf1"],["/tags/cheerio/index.html","67274a306d8b388c4fa82ab34711194e"],["/tags/codewars/index.html","97a3effb1ad7de6b2cdbd28a49418035"],["/tags/compile/index.html","0ab3ead0d5b424603b7703bc59ca957c"],["/tags/compiler/index.html","4b7e60de9e558f11fa19a572a76b7127"],["/tags/cors/index.html","6ee4271ab414a86b7ade4dd3a26eeb6a"],["/tags/course/index.html","81e4308a645c54e05bd2ab40b97e7340"],["/tags/cpp/index.html","f915272a19c6f6eca352357600daf4f2"],["/tags/crypto/index.html","1a3a07dbf1a9fd64b580ddb82ffb5e27"],["/tags/csapp/index.html","37908e251df31961aa344c4d5f59df28"],["/tags/csp/index.html","2481f6491062f44c2fb4927bef8779a2"],["/tags/css/index.html","10d6e8fd66a132801c5a87a7d1a253dd"],["/tags/dart/index.html","e3613da8a59bd4c3635b164879fe4786"],["/tags/data-structure/index.html","39727733ddf7d2ec3aafc06c9477c53e"],["/tags/database/index.html","5f823c3f81c616ed4fe0dd2f93f4dae8"],["/tags/deep-learning/index.html","367a5c75b2c786815af9590b5df166af"],["/tags/django/index.html","125db3dfa9364785c04e9799afcecbdf"],["/tags/docker/index.html","8c8624da2161f264b91c752f22baf5b1"],["/tags/dwm/index.html","516aa60ba6889a46536ca80e2831fbe1"],["/tags/exercise/index.html","c61138f801106108ca84a3acf186ba12"],["/tags/filebrowser/index.html","30bf149865a6409145f3f9cbde58bc90"],["/tags/flask/index.html","845b69962ccb87f1fb79fae045db7b8a"],["/tags/flex/index.html","bb2a4ada5e1582cb2ece081a02c4207c"],["/tags/front/index.html","55ca0856b709736c52478108ae9c140d"],["/tags/gcc/index.html","df521f8adb39f5a1aad84214f31098f4"],["/tags/gdb/index.html","d29b3da5fa4f0b54f49ae557aa0b5c70"],["/tags/github-profile/index.html","0973adf2a7224b7550e3cca773657737"],["/tags/github/index.html","0abbe9f215e3a94cf2620722adf2f90b"],["/tags/graphviz/index.html","4d68c9816f953b2131db418bbefefcc5"],["/tags/grid/index.html","2db23ba903f199d20b60c575fab5f856"],["/tags/html/index.html","2f6da55a015182551d9e92c2b71df26e"],["/tags/i3wm/index.html","b7136584723ff666e02335058ed69993"],["/tags/index.html","5acc63605f64126b8f84bfebfefc4b40"],["/tags/issue/index.html","831422737322f06d55694cdb2bda7116"],["/tags/jQuery/index.html","399f7922d75de1e49051abdb8cd1c5b9"],["/tags/java/index.html","ace85ad0de88f129d66a974e20583184"],["/tags/js/index.html","ef5a6f43f46516893c88160aa2d6daca"],["/tags/latex/index.html","b3401d4574d2a473c1af174b6d903144"],["/tags/leetcode/index.html","4e51f0683ed87120de343dbd46b91975"],["/tags/lex/index.html","2098e787826989150d3092df6a557aa6"],["/tags/logging/index.html","8b5070c4efbd0d3e1fa2d2e5f44fab45"],["/tags/material/index.html","09a909773d75d6b03f90b82a860058a0"],["/tags/music-player/index.html","ba7a9ba09e9ca9c4a17f0bd8197a3ded"],["/tags/nodejs/index.html","bdc55835caaf1794e8af53b4c71f759e"],["/tags/noj/index.html","0cee99755150c38daece0817a05bbdcf"],["/tags/opencv/index.html","641343ca8e994b36f4e53c0cc5617020"],["/tags/overleaf/index.html","00a4b8aae65bb73f5b296d137c9d0e92"],["/tags/pandas/index.html","506af642aab4c73dd189dad302ed5a6b"],["/tags/paper/index.html","18ceb85c1b0108b596370b636664695a"],["/tags/premiere-pro/index.html","f01014495a725078a9d4cde5e562b49b"],["/tags/proxy/index.html","beac1e2d3a5c14eeccee5e1d45b03289"],["/tags/pure-css/index.html","5421b1955a168c9f57c0a82073c53d6b"],["/tags/pygame/index.html","33294d51a2effc99c0f0c1a86474c7b3"],["/tags/python/index.html","f0336b61f9ccbc6c29af51c80182ad0d"],["/tags/python/page/2/index.html","4a732bb4689e7d89c36d6caca9556cea"],["/tags/pytorch/index.html","c463fd9da9f5109eb6b5c9f1eaf75862"],["/tags/reading/index.html","4b7f7b8719970b608d8fd83caca8334d"],["/tags/request/index.html","11afde76ada56bfa57b5d80cf9f7eb4d"],["/tags/requests/index.html","022a39683576219f4a9e9010642d3cc1"],["/tags/security/index.html","c4e04b1942bda30dcf82185acd9032df"],["/tags/shell/index.html","8cf56a16810d72644e974c94ab3411e6"],["/tags/sign-in/index.html","c84788d2fee437150310eb58e0c8de3b"],["/tags/socket/index.html","d12f7990ae2e01e999d9c489a470a635"],["/tags/spider/index.html","2aeca6777dfe765b9894bcda5d3ee0f0"],["/tags/splash/index.html","16d16edcc57c2916a4c22eae726fa553"],["/tags/stl/index.html","e52884142390388e0b834c08de82ecd1"],["/tags/sumatra/index.html","a6050238acf8a6281595aaada236248b"],["/tags/superagent/index.html","2c3bf00abfc5d456fce401338e88efd6"],["/tags/tensorlow/index.html","e23e040a46cebc40fb1dfde858a7a2dc"],["/tags/tex/index.html","55c4190fc5562ab1a42d89bf7c0e2f21"],["/tags/thesis/index.html","fae166593ad1439f5de447b7a551b500"],["/tags/threading/index.html","6d57563330b9c67e21e6987582f22abb"],["/tags/tkinter/index.html","299996b959b89dd8218ab630d7dc58db"],["/tags/torrent/index.html","2f7aa72af90d1baec4bc53359dacf2e7"],["/tags/tutorial/index.html","fdf676019cdaf3c4d7ca91a0f696554c"],["/tags/typora/index.html","037f2ed90cb66db3ac9f874b3cbf5cc4"],["/tags/uniapp/index.html","5319a0749aacd47f1bedc572e27914fc"],["/tags/vite/index.html","ee3f4b5a7c068c494e9f007b3b86adf6"],["/tags/vscode/index.html","68d1c8ff54c0a5e5a1e55b601aa4b113"],["/tags/vue-element-template/index.html","e492f09f7444a33c1c272f280c1c4284"],["/tags/vue/index.html","6604d86b0088588c72907067a4e0ab26"],["/tags/vue2/index.html","69d14ab902bbe55e98b38b014b2ad12c"],["/tags/vue3-x/index.html","5571e26078291c1bf7233bda4cab2459"],["/tags/wechat/index.html","4dae64ab82b9c800cfd9914ec0240999"],["/tags/wm/index.html","4150a0a86d3853296b460e1254f9eb13"],["/tags/wordpress/index.html","0bc99f81fd6a61bf23fb878f42521643"],["/tags/workflow/index.html","bab2a8570a562f2250b9b58827f8412e"],["/tags/xpath/index.html","721d17b5159c83be4242fa7abf2c51bc"],["/tags/yacc/index.html","37bdb51542eece9280677225aba31a17"],["/tags/zsh/index.html","e4cd0fc0b7ad3f538e191f5bb9970c2f"],["/tags/七牛云/index.html","900e2220d836a2b25190c2fbe165f9f7"],["/tags/函数/index.html","f87ad8c20a78482f4d67182bac0fb4fc"],["/tags/剪辑/index.html","040cfcd332444adb79880989c3ec7134"],["/tags/存储/index.html","94786c705165653e9c7e77d6b51b03fc"],["/tags/实战/index.html","a848b98d6441eefbedf3013bc3fedd32"],["/tags/工具使用/index.html","910515b33effd572f0987ec149969b3e"],["/tags/建站/index.html","bdeb144e17ea60030c0dbc5d6f25ed3a"],["/tags/微信小程序/index.html","76f9f90d5c3455978b04cb074a777f67"],["/tags/指针/index.html","ebe81d8c51c414e0e0954faaee7c69ec"],["/tags/插件/index.html","78555f6ede3ea48549027aa9b34da0ec"],["/tags/效率提升/index.html","fcd99305380501c9d1b876962d1ec72d"],["/tags/日志/index.html","cdf5e18a92d083d984b4ba8bdbb5b5d9"],["/tags/汇编/index.html","2ce162f9f15bdfee8b5b4b1a7134e110"],["/tags/油猴脚本/index.html","416c86267d242b432e8042ff35dc5c68"],["/tags/浏览器/index.html","464165b7cefa708793da2552613876ec"],["/tags/爬虫/index.html","07959f6d49d61a77331b33d789f539ff"],["/tags/算法/index.html","d4f6316a2e0c12b7214b760f624c58d3"],["/tags/编译原理/index.html","6c3c6239cd833373bcee30000e26d4fe"],["/tags/获取地理位置/index.html","d6e73dd10efaaa41d1df600734e3082d"]];
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
