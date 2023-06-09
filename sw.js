/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","8e05ff132d8d3d4eda30d8a9cb6cb777"],["/2021/04/20/稀疏矩阵/index.html","7ad15028b24931ae74ed51f97e4b966c"],["/2021/04/23/广义表简介/index.html","bf109dbe3e645b97f96f940121beb66d"],["/2021/04/29/关于指针和函数/index.html","cc7fe3f621606f61d30a1c7a23afc83f"],["/2021/05/10/哈夫曼编-译码/index.html","68193ffe5a74e85332439604e2afa002"],["/2021/05/17/数据结构noj_2/index.html","9e27816b12ef67a20d5f0b60aabb0042"],["/2021/05/30/数据结构试验/index.html","377dc613eac5c536389bf6536283715a"],["/2021/06/12/数据结构noj-3/index.html","b851ae2a9babfabf3bc2a5d1845660c5"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","84e162e4363c5fc2d4b1d5859cf1723e"],["/2021/07/08/课程资源分享/index.html","e4153d74ea92462642e782f08ce98229"],["/2021/07/20/Scrapy-下载图片-文件/index.html","711dcb5bf20985045852d28ef5585a6f"],["/2021/07/21/Scrapy-动态网页爬取/index.html","5c100e4799241a5c8ec2e5e54284bec1"],["/2021/07/21/疫情打卡/index.html","11e6ee49e9a99c8e493107135a337c75"],["/2021/07/29/Scrapy代理设置/index.html","00be960ef6a153af13674b707a191e2e"],["/2021/07/29/数据库认识/index.html","e286113abebf3ed530ce7e8a6debf248"],["/2021/07/31/Python多线程学习/index.html","b0ff192c5406ed1760ea856c7cfc9a88"],["/2021/07/31/tkinter-requests练习/index.html","0502fb7a930c971d388d1f7a98ddcdca"],["/2021/08/10/Git学习/index.html","9b8d84d5366245bf46673072a3c0dd22"],["/2021/08/15/pygame实践-1/index.html","cf69f573e3850c0da841033861c27a17"],["/2021/09/06/微信小程序开发/index.html","7bd50d3279f618fe19af7c8459b819e9"],["/2021/09/21/命令集-1/index.html","d4a4ee51af754bcbaf68af110de7e32c"],["/2021/09/21/命令集-2/index.html","f282073cb59ae531b7c0f7d209d19b70"],["/2021/09/21/命令集-3/index.html","2b53c8484d43ae4b9bba17abe59e24d6"],["/2021/09/21/命令集-4/index.html","0ac01afc8c6b5dc50ab0cfe1464f34bd"],["/2021/10/03/socket学习/index.html","76c321bbdca973b42d1da5fe4a83b33e"],["/2021/10/10/dwm入门/index.html","9f36d6aa3187361188d774727075cdf5"],["/2021/10/10/安装ohmyzsh并配置/index.html","8620429e2d5ea86039277b1133f27a3c"],["/2021/10/20/css学习/index.html","8c69002d2b1ec203cf2f290988a8c808"],["/2021/10/20/wm入坑/index.html","8145aa00026c7b442e1db1166e480d90"],["/2021/11/03/微信小程序学习/index.html","1757fe1254a9e74b888326c5a466366d"],["/2021/11/04/css揭秘/index.html","1b71314caaac95b981404595af4997c9"],["/2021/11/05/css-练习/index.html","14be50c9c3df78fa376b7e5af4facda7"],["/2021/11/21/命令集-5/index.html","0e1744138b3c64a8f0a14aa34b5ccb62"],["/2021/11/21/命令集-6/index.html","79c0f0cd30d04cc2ddd5a0cbf636c127"],["/2021/11/21/命令集-7/index.html","c9834506b94397d29cb475890791adc0"],["/2021/12/01/搭建wordpress/index.html","d6770e2d778d50774cfd6f2b3137d5ad"],["/2021/12/08/python操作百度网盘/index.html","88f0cb47440add4dda1e9c5dbe606361"],["/2021/12/14/js爬虫/index.html","531da6eee2f97ebd53c54f287531712f"],["/2021/12/25/为网站申请ssl证书/index.html","75e89a98a3275b837ae32bbecc39a8a0"],["/2021/12/29/使用七牛云为网站提供服务/index.html","ff8397cde672bdf6d077381e40ad016c"],["/2021/12/30/jQurey继续学习/index.html","c5f63cc108831fbc2f493dd1a299ac61"],["/2021/12/30/jquery学习/index.html","fed277f0e8bcd601137c5e32d36c398e"],["/2021/12/31/vue学习/index.html","0d7260a591aafa9517b65dbd2d925e76"],["/2022/01/02/疫情自动打卡/index.html","fb957fc0a0c1837c9b7cfc6cba7d5095"],["/2022/01/03/javaweb初体验/index.html","05c9fd44bea8bc087b79bf64c23186f2"],["/2022/01/04/codewars练习/index.html","550443a53b048b6f397d71f06e7a66b9"],["/2022/01/05/Spring学习/index.html","dbac5bdeb010a801b40f43353980bf0f"],["/2022/01/05/vue实战/index.html","4357d730cf5244fbe9e6a38dbe8ce82a"],["/2022/01/08/gdb-gcc学习/index.html","db2aab0ed72f7853bfabf4b370b57d3a"],["/2022/01/11/python-opencv学习/index.html","70a82250fd4190a7ce8b1c0f4d9aaaef"],["/2022/01/12/汇编实战/index.html","0acbde6dee2c691fc2cbf289ed334637"],["/2022/01/17/pandas学习/index.html","c48786f5832427e7f72b66f536161c91"],["/2022/01/19/可视化图的工具/index.html","25ace433c05e836ad16a8a0c7b773ef9"],["/2022/01/19/机器学习入门/index.html","c746ce6df9364e4020fc5e4c13a0be3b"],["/2022/01/20/cousera-ML学习/index.html","97c2fdc32aaf40301343371aca7708c2"],["/2022/01/30/typora解绑后出现问题/index.html","05d11baea0edc868467a92e5a09dfa88"],["/2022/02/03/NLP学习/index.html","ded502b3794aa82c2259020ba241a279"],["/2022/02/04/Web漏洞学习/index.html","167211e34038ffc82c100397c79e562b"],["/2022/02/04/pyqt学习/index.html","1400aa26be7f5401fadff79de9462048"],["/2022/02/04/python爬虫/index.html","079e90f4169ac8f6404ad8598a23b354"],["/2022/02/18/Electron学习/index.html","ca21d976fbb88cde583188f2e88bf55d"],["/2022/02/22/疫情填报字段解析/index.html","63dda5f40efd27e193924ff2e8ad62da"],["/2022/02/24/Bomb-lab实验/index.html","b058ca7e1537e9f9d2f9dd37c72ef291"],["/2022/03/05/nginx学习/index.html","8c00045e06feb424b8a0440fab149508"],["/2022/03/09/汇编原理课程学习/index.html","8213a268c7a195f780cb8e7628a71ddb"],["/2022/03/11/Keras学习/index.html","5deca4e82035507b6040c66211476b53"],["/2022/04/01/graphviz学习/index.html","48e6665bfced58151facab7904e72f8f"],["/2022/04/07/django学习/index.html","7fced12be1b0829fb370a36eebf7b4ac"],["/2022/04/11/密码破解学习/index.html","a4eafe64e508d9399074fec109c27a9d"],["/2022/04/12/flex-bison学习/index.html","8e794eab7aa77c83d8a7a6b3c51050bb"],["/2022/04/15/pytorch学习/index.html","bc3e1b3b30bf57d1659dcf3a0ff83216"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","d979ec57f7df65c88cc57ec4fea0b5c2"],["/2022/04/23/写一个音乐播放器/index.html","1a8ea1fc33b3c9aea72c35f05c85e22c"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","1e5ea99cec45c09990ef691efdc12934"],["/2022/04/30/GAN学习/index.html","1174a6bf8f48ccbaf66362b51f264c9d"],["/2022/05/02/html精学/index.html","5e182d03e693cfef0e098012d57bb7ef"],["/2022/05/06/write-a-compiler-by-yourself/index.html","db5f6576e2b51218d775a7168d70cfbb"],["/2022/05/30/acwj-01/index.html","e4b6a90486aebcc9a1ec91c3ad21090a"],["/2022/06/14/animeGAN/index.html","eaf4d4554c9f81be29ad7dd9a1ace955"],["/2022/07/09/c-与算法学习/index.html","4645ea4b2b2e11529b25fdb15804b2b9"],["/2022/09/19/flask学习/index.html","90180776a0f34339112c2cbfb9e09d90"],["/2022/09/22/cs224w学习/index.html","e17637eaeededa36e5593a85b4e5ac9f"],["/2022/09/28/记录一次wp重装/index.html","2d87e76bfb837dc978e04482be43402a"],["/2022/10/01/Obsidian学习/index.html","355a2791e2a62921799825c5089ea164"],["/2022/10/08/vue-element-template实战/index.html","18484b49bc74e80c50d30a1672b6e49f"],["/2022/10/25/vue网上商城项目/index.html","d5129b065bbe53c9236055f7b69ac8c1"],["/2022/11/11/leetcode刷题记录/index.html","da8092cebcb8d402233ecaade94f98bf"],["/2022/11/11/使用overleaf优雅地写文章/index.html","95b907faab75a9972a963012f02ee46a"],["/2022/11/22/磁力链接与RSS订阅/index.html","b98b2de6db4d94981a7caf61f70effa4"],["/2022/12/11/uniapp申请获取地理位置/index.html","2e8133385e672906adcfd82cb8b8472b"],["/2022/12/26/pr剪辑学习/index.html","a7770065144321cb084e5533118581f1"],["/2022/12/27/css中的flex和grid布局/index.html","b4eb3139f527572a5852bba543cc6aa4"],["/2022/12/28/Flutter学习/index.html","00abcbf8715f4cbdb68df39b77f203e9"],["/2023/01/01/美化github首页/index.html","8d6839ac6d3e9ab8011bffe8ebd41ab4"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","788fda4a60088f1ae067fb102b0e2727"],["/2023/01/04/构建微信快捷发布文章工具/index.html","a79699de089cfab80206c7ff4dc3fa80"],["/2023/01/14/dart学习/index.html","32d3ddb81d2dabc8ecfc2f13c6d23e32"],["/2023/01/23/闲置服务器BT下载影视/index.html","111d3541523c804142297ccb32f4ee49"],["/2023/02/07/TotalCommander使用和学习/index.html","161e35659621c97a1beb068ed7796367"],["/2023/02/13/docker学习/index.html","b3890bfad679de4350c09b66464e7f95"],["/2023/02/17/DLHLP学习/index.html","08c6af9a7c827ef94b63875676179fe3"],["/2023/02/18/学习purecss构建自己的css框架/index.html","895a5c1195da54310cb368e5bdcc14c9"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","861a19b31f926d0119aa904d89165edd"],["/2023/03/05/STL学习/index.html","20fe0f142f7ed7e554b23be2864a4a7d"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","ad5b4c8c5ef4e702c651b8dea95feb9b"],["/2023/03/23/实战写浏览器插件/index.html","5951540bde6b3f146de52816bf594914"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","f67d703422f9e6230fd66a1bec9ba0af"],["/2023/04/02/EndNote基本使用/index.html","93ca6c997b2e650d8cda63cb4b44213f"],["/2023/04/04/mne处理脑电数据基本使用/index.html","f81456cd88e7ac7cbfdb6f02f33398bb"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","581d7d2811edcb0e9ca09e0b41333385"],["/2023/05/02/python中的logging模块/index.html","f8a1fec3e26cb0f2cd88bbe52d2a02de"],["/2023/05/07/python的特别方法与装饰器/index.html","b38c5c0ad6eae416ede0127fd0b2e39e"],["/2023/05/20/Wox插件编写/index.html","5aec9992eb77bc66e63a4b734f4e97d2"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","4baf4c9e663f8fdbc1d84e3355c9f152"],["/2023/06/03/深入Clash配置文件/index.html","afdaea5abb1c49e1a4995fcc2f222791"],["/about/index.html","e70e632b27b50c0b3ff936991927182d"],["/archives/2021/04/index.html","5827ec9dd6db647528f95ba662f4d701"],["/archives/2021/05/index.html","939a60f562e764675e211e8b00e550b8"],["/archives/2021/06/index.html","9491189a9ccc445e7763d62a67ab818e"],["/archives/2021/07/index.html","4cc8b4e11cc02a74df26af5fcc32dddc"],["/archives/2021/08/index.html","ef8465806d1c510f65c95ee1fac9293e"],["/archives/2021/09/index.html","0408280c2f15638dc60735cafa7b4f73"],["/archives/2021/10/index.html","cde9db8f12e86d5d33a2268c480f09c3"],["/archives/2021/11/index.html","28951fa33339bf20165b28dbd237ff7c"],["/archives/2021/12/index.html","4e70140e2bca3819e9e2d43067f218c9"],["/archives/2021/index.html","43dd411ffe3699e8e700cc25635c7338"],["/archives/2022/01/index.html","b7c372314dc453ed365df170900a2ee1"],["/archives/2022/02/index.html","7bf34ff5c584d78dc5ed99b3011c6f6a"],["/archives/2022/03/index.html","1f38f724a360628debac3545abd27507"],["/archives/2022/04/index.html","54348e497252499bcfa20c640abe3425"],["/archives/2022/05/index.html","a7a5ed8bd2cc8d03cb67b52b70bf765a"],["/archives/2022/06/index.html","a2e8a5ac97de2d2b311f6e83c3b42af5"],["/archives/2022/07/index.html","1ad256a5e4608a2bd09ce4f5b4b0b26b"],["/archives/2022/09/index.html","c7332323e61fe252de006beae2e70213"],["/archives/2022/10/index.html","d2dfe7a8f146c3c342db7c41f08e1b5a"],["/archives/2022/11/index.html","228b28ca3b2610ae077370c2bfecaf3f"],["/archives/2022/12/index.html","33905f1cca72aae50bdb2c588bb351cb"],["/archives/2022/index.html","29e17fefb0055caf821521e4d12af228"],["/archives/2023/01/index.html","24a1b072c1e05487258fb1445629c6c7"],["/archives/2023/02/index.html","e2127965afccd86c6dbf6801a8bef7d2"],["/archives/2023/03/index.html","15cf12a30e3793502a54f774c7aeb7d8"],["/archives/2023/04/index.html","8d87aac94ade8c2454cbd2cf18e87633"],["/archives/2023/05/index.html","f680cade5cb8975cb2ae9ddd41f07c20"],["/archives/2023/06/index.html","c0524fc1b3d8522ee712a85ddeb2dab6"],["/archives/2023/index.html","c69f32a971ed0918dc027d5c5aa3e08f"],["/archives/index.html","77e40a5779ce70b38e1240b8c131f603"],["/archives/page/2/index.html","d85a8d0d30d4a84a7f55e133228567fe"],["/archives/page/3/index.html","0554267723feff54136557c437e97e6a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","469e9c8f8fe73d4b94fe4799cd5e99e6"],["/categories/Linux-study/index.html","b142f7474016309b77829fbbece7252f"],["/categories/ML/index.html","c0e5f27dc944847d8e481d34e28301f0"],["/categories/Nginx/index.html","4dc01af3c3dba2803154840f60299c7b"],["/categories/Spring/index.html","da0407a52ac90fca3dd2b5c99e3275c1"],["/categories/course/index.html","0dfaa90b071f28a4e73f347ba3405e11"],["/categories/django/index.html","5c4f5825297891b8a4d0369b51a5968b"],["/categories/fun/index.html","f4c151dbd27eb00d230565f6c55c8948"],["/categories/gcc/gdb/index.html","dc4bfba14123e884470d8cd0a21da437"],["/categories/gcc/index.html","7ca9048c350c2a97a3cfb808e163ce16"],["/categories/index.html","7bdb97b1e5d96d34106f4c8652c229c0"],["/categories/java/index.html","43c8edfb5b18e06a6055347c2d2f8b07"],["/categories/latex/index.html","b51757e1da6178a40c9db4973c922e67"],["/categories/python/index.html","68f921e958b99038b8498a66851a9249"],["/categories/study/index.html","11fc80714d27b2a1a74f21251c90b8b5"],["/categories/vue/index.html","7ac72e2f29a7e78dbcc806d44422d3a0"],["/categories/误区/index.html","6f81da604b20f5cfef73a3e19fba009e"],["/commonweal/index.html","bc563dea3416841ca063d1c4c4ad0213"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5d6f061325c1c21e89324bdf5133c938"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","c4a5e28a15161a1daf6de75ec00fc2bd"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","af9f7ef9294d72eb1a56ce81a0242dfd"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","87eafacf9e71d24c611cf20d25669bdc"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","8f1c20f1f4060ce7dd18fb703ebdd921"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","e096a42d8bc3140ebceec8899060735d"],["/page/11/index.html","57f6e4e34bafdbbe64648761db2c7b35"],["/page/12/index.html","d749a9f128cb1e60d9818b962ca4beb6"],["/page/13/index.html","e1f7d57064801b96c22c04d643af8a4d"],["/page/14/index.html","f9a6efd84c9607ca8da0a49b1fb25a95"],["/page/15/index.html","8a0172e3f20d65dadc22105d95c1c79b"],["/page/16/index.html","3738709fd4e01e5f80ceca9c8ecec87a"],["/page/17/index.html","6bbd5408a2c4d0ab0dac9bfaae6aee8b"],["/page/18/index.html","b8aa4534011f4d7080ad55be9a53906c"],["/page/19/index.html","ac5247bcd507cd6a13681799adacb05b"],["/page/2/index.html","62173a33909a276ad36a132a28b8d354"],["/page/20/index.html","b66e64f6464ce5de7fbcc19560f2fe6d"],["/page/21/index.html","29f2d78bc4f4239e5b0c4811f989a089"],["/page/22/index.html","e1dacd6a13bac2075f67d5ab8556d7ea"],["/page/23/index.html","8e135e9dc2641ef823510bd0fcd20eb4"],["/page/3/index.html","bed9501eff2a50dd1655e0764cf103d9"],["/page/4/index.html","68da244095d99092f6ca0ffb4b010ffb"],["/page/5/index.html","c9c22302e51602dc6c9ca417ba7298d7"],["/page/6/index.html","00f96f3d79b03daabc0912f57d1104af"],["/page/7/index.html","0f281451f5acb25432949ca21a6cf7ab"],["/page/8/index.html","8089cb20c14cd67efae08aff37fb1271"],["/page/9/index.html","6e00a634adae8a46db6d76746a77922a"],["/resume/index.html","79e4213c2b96dea0b021c431bca3cf2e"],["/schedule/index.html","d03b01b98551cf1068599282ae38dd57"],["/sitemap/index.html","da1cc52ceea47095ce448f0639ee146a"],["/sw-register.js","359a3285b402dead0bfc9dbfe8cd6555"],["/tags/AI/index.html","d4f747a7ea77ca0a5c007fe2e3213722"],["/tags/BT/index.html","69f8b8b2b0f9657d5b23afb965207d03"],["/tags/BaiduNetdisk/index.html","1a2eaaa305ded1d75de826e9555f2cf6"],["/tags/Bootstrap5/index.html","7070d082eed12e56ec775b5d4333dbea"],["/tags/CSS3/index.html","f2d333098ceb9cba14d7e71d50af405c"],["/tags/Centos/index.html","6ff14df02cfdde625e3f0e635013a5c1"],["/tags/EEG/index.html","48299dd5c49167296c777adacfdad64a"],["/tags/Electron/index.html","797b362e88e5a96b637b031d47c33faf"],["/tags/ElementUI/index.html","4de2750c59e9f39f2898d21842f67ca9"],["/tags/Flutter/index.html","f4564c9bea719821773326c34d2fb070"],["/tags/GAN/index.html","b4772ee17b39cea7dd19f207fa14c589"],["/tags/GUI/index.html","2a41a66be85dc1de292347025202db3e"],["/tags/Git/index.html","516230c559b5b8fb03e28d137b57e9c3"],["/tags/JavaScript/index.html","5d30b19d7b2bc18f57962862f4a2c383"],["/tags/Keras/index.html","71943ac58e3be626b4c66fe45f387922"],["/tags/Linux/index.html","60c07a16c46bb1320c00998959eaf6fa"],["/tags/ML/index.html","2e2d848074835efe10d35ee9b4155f59"],["/tags/MNE/index.html","d62aa19949eb9d5bdb6939feb3306def"],["/tags/NLP学习/index.html","cb52a6f9614ba9393fde14cdb9c197c4"],["/tags/Nginx/index.html","db5e318563fc7f9a252d7d4d48528bf1"],["/tags/OSS存储/index.html","c2c8fb30f177fcfb188acd3d89958035"],["/tags/Obsidian/index.html","eace9ba3c23318000745bedbe322cb62"],["/tags/Qt/index.html","5c6cd08b20348ec986503db159db7ed6"],["/tags/RSS/index.html","bf9d04ea1e41b2d73ea537aa9bc38ab8"],["/tags/SSL/index.html","f3588e00070f8803ade72d627c806bbe"],["/tags/Scrapy/index.html","fee50be5c85ab6ad26731236ecfee705"],["/tags/Speech/index.html","4df18837a5af250a83a908f4e1390ec9"],["/tags/TotalCommander/index.html","34819d51849dff587fca84e2872a221e"],["/tags/VPN/index.html","d750b9fdc9270fc7a037ae281f6cba3b"],["/tags/Web/index.html","dbe1a2da375eabe864f9886897ef93d7"],["/tags/algorithm/index.html","7bbd8d9757a55574ed9f6109fb7e17ce"],["/tags/bison/index.html","c7c3dea46832dc14da99252463df0445"],["/tags/bomb-lab/index.html","d37396394d722074fa44f8f2b1db3846"],["/tags/c/index.html","790a554371cca9154a81caa3e5e03d53"],["/tags/cheerio/index.html","e9e8390ad53f10255233435856320ce1"],["/tags/codewars/index.html","448a4c632188fadb313a56b42e1a4bec"],["/tags/compile/index.html","222c22e478a2984258578ab90a7f05ef"],["/tags/compiler/index.html","49b327702002ce1f47d07e98020ded95"],["/tags/cors/index.html","4583519ac46a389922befc2a38de0188"],["/tags/course/index.html","1e6925f18170ee9f121dc7d3ef2d1f2e"],["/tags/cpp/index.html","6e3b6a68eec4610b2eefdb3b2d648bfa"],["/tags/crypto/index.html","2c520569029df1e7e12f8307fb59113f"],["/tags/csapp/index.html","10e27bc440d1740f78e529e430a493e4"],["/tags/csp/index.html","8357bba43bdf1ac56c235aa4c70857d3"],["/tags/css/index.html","3ccd79f6c8befae252a4ad43d61d8be8"],["/tags/dart/index.html","39b887748cc8e5a012865450395f1a04"],["/tags/data-structure/index.html","ef8da9ac52fbd3e1f4ea1935957f7b18"],["/tags/database/index.html","5718affaa352c198eac2f1e94348b159"],["/tags/deep-learning/index.html","980ef44ade765f8f61fad6d24ef6155f"],["/tags/django/index.html","724f78155b632834bc61ee791592577f"],["/tags/docker/index.html","88023a3e41bdf7626b2affba97d73cc2"],["/tags/dwm/index.html","1a152c933a6d5fadbe46662431733906"],["/tags/exercise/index.html","38d9afc13ec32bf5389e4589f10b6301"],["/tags/filebrowser/index.html","8e38916610d91c7ae787304d6de23a45"],["/tags/flask/index.html","3af7ff895eab56d6a928df011de12657"],["/tags/flex/index.html","530ed2b117c5eb72a183b8b35fb20f99"],["/tags/front/index.html","9aac08782da9e83e444aa4b880150a0f"],["/tags/gcc/index.html","3b028d3666790fa1c909995b88c0ab60"],["/tags/gdb/index.html","59cea47a7dd5872082cbbefcedd4675a"],["/tags/github-profile/index.html","aaefdd0941681df415e32372391d7b8a"],["/tags/github/index.html","2a13fea020e289fc26c4a282d581cfa6"],["/tags/graphviz/index.html","a64c37d08536fea2695218ca64c18a6a"],["/tags/grid/index.html","9d9d29b6fb56eca06b7eb319a0538f24"],["/tags/html/index.html","28401c45c69f21ceb3388112f28d96f7"],["/tags/i3wm/index.html","bd33f2579b6fd7c2288c906fb4f299fe"],["/tags/index.html","1ffa9b9d3268b56dd41fc3c29edd26c5"],["/tags/issue/index.html","5c612ce4d402545bfdd8a3b6f4afc484"],["/tags/jQuery/index.html","becfe3ebac6a3b4317d5cf7ced05c30a"],["/tags/java/index.html","bfa9515d50abc4e91a67cf2fd7fb6e14"],["/tags/js/index.html","dfacc894c1a007252abbb918979f21ac"],["/tags/latex/index.html","cf86e63bb5fabda52123362a457753df"],["/tags/leetcode/index.html","53cfa59b465d2eed00c886b1650bf12b"],["/tags/lex/index.html","992ad70559dd7a048c012aa44ccbc6e9"],["/tags/logging/index.html","af2a48c8c8a6129ebf217270cd14d321"],["/tags/material/index.html","bedbe4aac8f7b2a589cfb333104a22d5"],["/tags/music-player/index.html","1334a594d6df153d9ab8a2920f39fcd2"],["/tags/nodejs/index.html","b791cdf4f50d64b4501511d2ca18cb7f"],["/tags/noj/index.html","ebcb14ae4d10473bee3d75caaba6b6f9"],["/tags/opencv/index.html","2a2cf02718f17333f723134015627732"],["/tags/overleaf/index.html","e8dd830af8e657c42375ebeb2e0fb7b6"],["/tags/pandas/index.html","3ce813364724551baa13be145cec41eb"],["/tags/paper/index.html","4205db1e6b4b3fbdafb6cd44d0a0550f"],["/tags/premiere-pro/index.html","d692d05bbd4d63c7b12bc776a97f7f9d"],["/tags/proxy/index.html","4d37a939a52b7b09a66a30b6a47dc5e0"],["/tags/pure-css/index.html","87f570991e3c3cfc401f7bea8459a364"],["/tags/pygame/index.html","768bf3ac8c41e7066b547dabd5f963dd"],["/tags/python/index.html","5927ddd35e151c0f87edb6b105a0557a"],["/tags/python/page/2/index.html","a1adfab35fe4eb4ba74a064699f2a6a5"],["/tags/pytorch/index.html","d4d5ed783c4b26ca0a8e72f01659c8b0"],["/tags/reading/index.html","719396f161686c108100ee3f4600d607"],["/tags/request/index.html","a3ba7a3c7de1ed063c046ef597b59ac7"],["/tags/requests/index.html","b4558e9873aad7078440827c4741f29a"],["/tags/security/index.html","f8927c0d1c4c778f408ad15f8ae61724"],["/tags/shell/index.html","3a06c129577f2c77d2d797d85d212fc6"],["/tags/sign-in/index.html","ad730d9a58e976836f484d0ed89395b3"],["/tags/socket/index.html","2226c4ee0d14f1e39a183bc00dc30fe9"],["/tags/spider/index.html","b5befab1d346af9cc2b70ecff1d1d14c"],["/tags/splash/index.html","0712591785af31829296b812b14c9843"],["/tags/stl/index.html","d892bd00402aa31f30fa87085d579b0b"],["/tags/sumatra/index.html","a6bbe38a8ccec6ab4d1f83d7c06cb880"],["/tags/superagent/index.html","c5094213738b60e3faf9a2b3bd062a0a"],["/tags/tensorlow/index.html","2aa55b689be66a76e068d75bb1e867ba"],["/tags/tex/index.html","5f4bb1246d839263b73afb26764a20a2"],["/tags/thesis/index.html","e8678593a14ca71dbb4c996da6d65981"],["/tags/threading/index.html","621a6d12ae44844ce68caa2031674461"],["/tags/tkinter/index.html","73c0816566b183202aada1cde40733a5"],["/tags/torrent/index.html","faf281bc38bb1a11690cf7f9be7afc97"],["/tags/tutorial/index.html","4a2651bdd41911cb8415b5d2e98484ce"],["/tags/typora/index.html","5f66997801c9f677a6b5af3cf564a0b7"],["/tags/uniapp/index.html","12f2b22e685c4e336e6c91c7ae48dec7"],["/tags/vite/index.html","c3014460d589e71db0c42d18ee23f141"],["/tags/vscode/index.html","c2593a26a3f5a7856f5a3f6e6e1e8a0a"],["/tags/vue-element-template/index.html","464a9784f13e86bc1ce5f2960231c116"],["/tags/vue/index.html","cab68016daff5852550265ed32a00ced"],["/tags/vue2/index.html","ba05ff2df90cbdee25415893961313ef"],["/tags/vue3-x/index.html","2c1c282cd092daafb59102a8ff4f9ed6"],["/tags/wechat/index.html","42ffb80a553776b502720f728ac8f662"],["/tags/wm/index.html","7b77d2dfd2f4c5a8ebe804c92a785c8b"],["/tags/wordpress/index.html","cb5b514378025af9e979ebaadbc10937"],["/tags/workflow/index.html","d994ae5e6f73531e1d1afaba885ad987"],["/tags/xpath/index.html","996aeb607ae0ee3cdb5e3a029653d90c"],["/tags/yacc/index.html","2d92f6cc8e346194a5c08ff52c93c194"],["/tags/zsh/index.html","45744cfd1ee476aba907355bf1c0067b"],["/tags/七牛云/index.html","9ad00f738898262547aa112dc3d3caea"],["/tags/函数/index.html","273f15ea79c51a6c2421062e45920689"],["/tags/剪辑/index.html","056a1ceca4fc730a4bf17355832d49c2"],["/tags/存储/index.html","ffd010e9b60d32867cf6ede709e144cf"],["/tags/实战/index.html","95048e283d52331a086623fe23fb4f50"],["/tags/工具使用/index.html","62c90edbc7cf0824c03ffb9fb16e622b"],["/tags/建站/index.html","16e635b4a8e09fe35a28e9bc6d0ed217"],["/tags/微信小程序/index.html","e4291bee8ad11eda3304b7deaf625be3"],["/tags/指针/index.html","12797745cdcfe37a262df93103a5900f"],["/tags/插件/index.html","c733405fb1ba5cc16dcb683394a5fb08"],["/tags/效率提升/index.html","ac55fe4d8ba318eea5c9816daa76a590"],["/tags/日志/index.html","189c5aaa2a53c1ba3272b2d226756690"],["/tags/汇编/index.html","c8f9e4ac155ddf5395bdd167e95efbd4"],["/tags/油猴脚本/index.html","1a24fc3d14d8348ee8fbd87c19c9f27a"],["/tags/浏览器/index.html","1807c5492b601b2550f1fdb6d61af1ac"],["/tags/爬虫/index.html","fdc3ac4deb4938b883a0bc106e2d84bf"],["/tags/算法/index.html","2df15d8493a6e5f751fe3f40c9914258"],["/tags/编译原理/index.html","c58fb6a3368d62ee458d13b3556308d7"],["/tags/获取地理位置/index.html","1a934a2a8dd64c88afd354654db2c4b6"]];
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
