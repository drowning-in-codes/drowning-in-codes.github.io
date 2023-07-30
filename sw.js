/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","ee26279921a3810d7fbe50887154f862"],["/2021/04/20/稀疏矩阵/index.html","970bda39de23b7e7f9a862a25b3af03a"],["/2021/04/23/广义表简介/index.html","3f59000c5bafe0a034e250f957f469f8"],["/2021/04/29/关于指针和函数/index.html","56a797c94fc4868fc5848c72cb96f761"],["/2021/05/10/哈夫曼编-译码/index.html","cff2a2c66b1134cb19326c0d57d0083f"],["/2021/05/17/数据结构noj_2/index.html","173962f5c9ef7d9b67f3ca2cba4db5c9"],["/2021/05/30/数据结构试验/index.html","2b9c28defa2ba9d1d0357f0b7b28b570"],["/2021/06/12/数据结构noj-3/index.html","9719a3fe7db4bd44ff9e69eafc1f323c"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","970d731a1026f126d472590cb949ad7c"],["/2021/07/08/课程资源分享/index.html","ccc01068763e4d8b817ff1ba76d60268"],["/2021/07/20/Scrapy-下载图片-文件/index.html","54fcba1909b95a8f697284191c77fd49"],["/2021/07/21/Scrapy-动态网页爬取/index.html","06e803b85bba3904cdd28c5aa1c02753"],["/2021/07/21/疫情打卡/index.html","0e330f2d822e58a28f03f94a66cee15f"],["/2021/07/29/Scrapy代理设置/index.html","78288eacf1ac8a6cda95c3f710760e49"],["/2021/07/29/数据库认识/index.html","6dbf72dfd2ddec0bce9817956f8f6b93"],["/2021/07/31/Python多线程学习/index.html","865e97fd026a4fd8f2f9ceab48b29dac"],["/2021/07/31/tkinter-requests练习/index.html","95f5eefec55d7c3af09b651cf06b0ea0"],["/2021/08/10/Git学习/index.html","4e3529d171018b9c5e6aa20f99ae15a7"],["/2021/08/15/pygame实践-1/index.html","b015a09412b259c57f0e9da1e7d0fc68"],["/2021/09/06/微信小程序开发/index.html","163ca8c1b79f2bc7035135a165cc5903"],["/2021/09/21/命令集-1/index.html","70f8310efd684f042e53078046e7bbb4"],["/2021/09/21/命令集-2/index.html","07584ded9edb25419bef7c895534e8af"],["/2021/09/21/命令集-3/index.html","7e0c297ebc8f541709177125681ef256"],["/2021/09/21/命令集-4/index.html","53d2ba9a11e4f58ce0a1a877130c78b9"],["/2021/10/03/socket学习/index.html","f5ea23be8178f6154c099a8173e66513"],["/2021/10/10/dwm入门/index.html","e78c05332871e9c715ef5bd07732d4f3"],["/2021/10/10/安装ohmyzsh并配置/index.html","04e4774ba4abde65e24012b9c73312e5"],["/2021/10/20/css学习/index.html","4ef7f0d0e8c31b1cf873c0275e3945b8"],["/2021/10/20/wm入坑/index.html","66b26800c43987f238b0261c5c9106ce"],["/2021/11/03/微信小程序学习/index.html","411f239de55275523964011afa319c0b"],["/2021/11/04/css揭秘/index.html","5f7e968966c6b66dc5530d59b2fdf16a"],["/2021/11/05/css-练习/index.html","a861fd59f684a7ff151ff4bfa31ac1b1"],["/2021/11/21/命令集-5/index.html","14b2c56b9cf326b628d88cd0bb63fb5d"],["/2021/11/21/命令集-6/index.html","9e09b9b47929f4d49893c721d3b41765"],["/2021/11/21/命令集-7/index.html","d13cde5d3b78271fce95045ac6ec7e4d"],["/2021/12/01/搭建wordpress/index.html","91f8a71ec3f1f96c5dae6e8ee7afa4e9"],["/2021/12/08/python操作百度网盘/index.html","71dc385ea0db1288d122eefed811713f"],["/2021/12/14/js爬虫/index.html","a87a9260f01c94bc3120ab604dd68c80"],["/2021/12/25/为网站申请ssl证书/index.html","c220c138946b515d7046dbaf1bebbf42"],["/2021/12/29/使用七牛云为网站提供服务/index.html","a0dd3ca10752501d832760e5044db306"],["/2021/12/30/jQurey继续学习/index.html","65ef37cbfd86c09e115cff1378e75b63"],["/2021/12/30/jquery学习/index.html","56d8206ee7ed9f2b52793242604d58ea"],["/2021/12/31/vue学习/index.html","13ccf841a9c01bf8f0c562a84d962e52"],["/2022/01/02/疫情自动打卡/index.html","ce3f0318275b217109bcfed3369e473b"],["/2022/01/03/javaweb初体验/index.html","829daa426280affa28035005a15ade08"],["/2022/01/04/codewars练习/index.html","76434baab6d25882b2b0abfd58bee998"],["/2022/01/05/Spring学习/index.html","53f67632e26b29d2200bf7cbe9909186"],["/2022/01/05/vue实战/index.html","8ef5fdc8130a0724e4a4ba769826200f"],["/2022/01/08/gdb-gcc学习/index.html","094e6bfaaff3855d1c650257cd414749"],["/2022/01/11/python-opencv学习/index.html","14897b8f46fe4159ae7f3dcbd0458efe"],["/2022/01/12/汇编实战/index.html","0d6374e7b65ffbc3e9e61a46719b56c6"],["/2022/01/17/pandas学习/index.html","c8ef222a2ee02e8ef443bbe381ecb3de"],["/2022/01/19/可视化图的工具/index.html","06eeb5e4dbd325ce8172e8725be320cc"],["/2022/01/19/机器学习入门/index.html","57b0fed93b974f6f44c0faa477f49b14"],["/2022/01/20/cousera-ML学习/index.html","0808b915099ec5376a719480c89e8d0c"],["/2022/01/30/typora解绑后出现问题/index.html","5c15d1c08adfafad3293dbd81cbb812e"],["/2022/02/03/NLP学习/index.html","24ba01e33ee602245e57dba082b42d6b"],["/2022/02/04/Web漏洞学习/index.html","669c85c6adcc14eaa88027fd9b368e5b"],["/2022/02/04/pyqt学习/index.html","9be83ed0f720c7ad9a26cf14452d9951"],["/2022/02/04/python爬虫/index.html","a375cd1586189132129be62693ded138"],["/2022/02/18/Electron学习/index.html","34c01adc6756f48ff4dadcc0faf2e996"],["/2022/02/22/疫情填报字段解析/index.html","b3e41cbd2ea730c14d5a29c0448b62d9"],["/2022/02/24/Bomb-lab实验/index.html","58ee09aacfe2a1815ecf8b236b71891f"],["/2022/03/05/nginx学习/index.html","8e57a5fefaf72ae044f733258e8e3776"],["/2022/03/09/汇编原理课程学习/index.html","c64c2f90ea80899a6fa64b7426fae085"],["/2022/03/11/Keras学习/index.html","ef90e2ed8280d7f92072538bf3c578e0"],["/2022/04/01/graphviz学习/index.html","8ff4c891b96231e588920d5d9718809d"],["/2022/04/07/django学习/index.html","e1ab61c2c8e90995286a61ee0777d122"],["/2022/04/11/密码破解学习/index.html","c600903b2f5336d0c6a2494bd08d136a"],["/2022/04/12/flex-bison学习/index.html","b5b89549f9e8150ad0c43185c2c0b645"],["/2022/04/15/pytorch学习/index.html","238e26e94047b4f073e60bbed740fc11"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","36d4c2a2be754aaa0a990c77d4a3ad06"],["/2022/04/23/写一个音乐播放器/index.html","fdaa6945a43bbf105319ee9c3214d760"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","e017df83e24b4e2cd6601117ea9d088d"],["/2022/04/30/GAN学习/index.html","c0d1fe92854e87ebcbbb4aaae83b3617"],["/2022/05/02/html精学/index.html","88020b20c8748e4766ba00d89bf88aad"],["/2022/05/06/write-a-compiler-by-yourself/index.html","651fd9c151d6ef6d48d0785c4a3b553c"],["/2022/05/30/acwj-01/index.html","9f8e6e6a8bebca85850cafca88c86e01"],["/2022/06/14/animeGAN/index.html","78bbc1c5f44241f56e80940f31911a77"],["/2022/07/09/c-与算法学习/index.html","e0a104732e031cd49655ed4a425d75cb"],["/2022/09/19/flask学习/index.html","51ef13441a8e8e6cc852408355cd3f6f"],["/2022/09/22/cs224w学习/index.html","a1503ee225219a47512bc59ebc93dc53"],["/2022/09/28/记录一次wp重装/index.html","e6b07ee39adab710471ec50a2cd70a2b"],["/2022/10/01/Obsidian学习/index.html","1053afcdc3b2c6c828c288e31f070ea1"],["/2022/10/08/vue-element-template实战/index.html","88a1ee31228a452f873e28ba1f7dfbe8"],["/2022/10/25/vue网上商城项目/index.html","e34237c5c44b754f14bfb01ef8ea9547"],["/2022/11/11/leetcode刷题记录/index.html","1124ce2dca644c82cd9244c11a56f0a8"],["/2022/11/11/使用overleaf优雅地写文章/index.html","27eeba991a3edbb7108ce2b2c357f522"],["/2022/11/22/磁力链接与RSS订阅/index.html","517121d4771fde10d77e2ce95d72ae76"],["/2022/12/11/uniapp申请获取地理位置/index.html","2ce5c8f542ff37ff073ed2f008c7fc57"],["/2022/12/26/pr剪辑学习/index.html","4fa965a1bcada68bd37b8acd02db2d52"],["/2022/12/27/css中的flex和grid布局/index.html","7095993ce532d79dfdb728988cdc0fc8"],["/2022/12/28/Flutter学习/index.html","d64a5f2022da61ad7e6081cdc5f8287a"],["/2023/01/01/美化github首页/index.html","6a7ca1c716add9cc37e492f1ebbf4f42"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","66e218892b63559cecf3d5df63c436e8"],["/2023/01/04/构建微信快捷发布文章工具/index.html","2e57d666f0eff0134acbed7979adc53f"],["/2023/01/14/dart学习/index.html","c50774543979c4d3ebd97d734ce01ffc"],["/2023/01/23/闲置服务器BT下载影视/index.html","58f0cf10d8b56c2e13044b421a8b52fd"],["/2023/02/07/TotalCommander使用和学习/index.html","b4ed8a64d4b38b8b70f36195fd7852de"],["/2023/02/13/docker学习/index.html","dbcc194b126f3a029d07838382e6d1b0"],["/2023/02/17/DLHLP学习/index.html","cf849cd19d33578476a021f7bb9a4d24"],["/2023/02/18/学习purecss构建自己的css框架/index.html","89144da923b590c84b1a940d76b8c5e1"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","a63771d815f55098bd176cd7fb215d35"],["/2023/03/05/STL学习/index.html","5f99ebeef81d7bf15c41ec966c879509"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","ec45a13540744ab8959e077d02d8e447"],["/2023/03/23/实战写浏览器插件/index.html","f37ce3266181af2eceefd1457e83f94a"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","da5d0a4dc5655ec1f77703c1d7849c55"],["/2023/04/02/EndNote基本使用/index.html","c553d574dcf4b097f9c9914919a62ef1"],["/2023/04/04/mne处理脑电数据基本使用/index.html","73d87f55531df8db1681c900de51012e"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","88e818e0c60c34713a3bcba38f4902b9"],["/2023/05/02/python中的logging模块/index.html","c71944ecc90470eae20c33e3cba64823"],["/2023/05/07/python的特别方法与装饰器/index.html","6888551eef22385dd73bc265b46a7176"],["/2023/05/20/Wox插件编写/index.html","896a3fe83746591bc3f16051cdbd0298"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","a14257f0d1b758720f2de6828d3ae67b"],["/2023/06/03/深入Clash配置文件/index.html","87e12752d9692e2c213cb00445814b90"],["/2023/06/10/node的包管理工具介绍/index.html","d6516925c2c15a528e568e94974207e3"],["/2023/06/12/AI写作工作流/index.html","4dab49ed8fdeea9e573eb6bfbd49a4b0"],["/2023/07/07/Astro-Vercel部署博客/index.html","6d1df87e1e5923b3830af36b289332c3"],["/2023/07/09/青龙面板部署项目/index.html","e5282873857a4b72f711feb82e1b908f"],["/2023/07/29/CSS-Modules介绍/index.html","6841e76ecb001b4cc26d6da4e21957a6"],["/about/index.html","e96ba4c76cc7227c77d553f36bdf0001"],["/archives/2021/04/index.html","4ef73565ecd80d7ec312fba81879e093"],["/archives/2021/05/index.html","7d1cb3aa194789b5e3db5abbc54c6e8f"],["/archives/2021/06/index.html","e5e8f7c89ad2225d024e94f81df50abd"],["/archives/2021/07/index.html","c9e163a8044143f60e59231ea0e48419"],["/archives/2021/08/index.html","7799d1779c71ac5f58fe9aaba8ab34e7"],["/archives/2021/09/index.html","ca27ca274142dda1f8158848eff561d7"],["/archives/2021/10/index.html","d4d8705abdcc7db20f08d8a4915ce748"],["/archives/2021/11/index.html","c90d81c672a5fd2af96107f2a60b6560"],["/archives/2021/12/index.html","3dbedba0e14d276596a1f5a0468c8a3f"],["/archives/2021/index.html","717623939a3e5245b0fcd3610abf1a39"],["/archives/2022/01/index.html","4755ad36a112f072c97afe10636fca67"],["/archives/2022/02/index.html","4d1785085d3c04cee05b20826ffa6016"],["/archives/2022/03/index.html","e290c0b9ef14598bc09b51ba9b0c56d5"],["/archives/2022/04/index.html","0435202ea5dfd81ae28555f0b3f19b73"],["/archives/2022/05/index.html","a9bc704dfdf4c18b78c76d40b505f4b7"],["/archives/2022/06/index.html","909f4103d2a613abaa56ee5c711940f4"],["/archives/2022/07/index.html","9dd45ce0d8ed6774577d5aa792612e9a"],["/archives/2022/09/index.html","296f50fe9d4e0f327bfea0a939e4b125"],["/archives/2022/10/index.html","64793b7a88763adfb6684e6ea1cfd97a"],["/archives/2022/11/index.html","76ee2c8af1ce393b7a66ef4be43e6962"],["/archives/2022/12/index.html","7195b65163f726f07fcd994942a65b06"],["/archives/2022/index.html","8a120b72c0fc2149036b54119d2e33d8"],["/archives/2023/01/index.html","c6914ec1677d2ede5bd70fb13ef0a347"],["/archives/2023/02/index.html","c3f7727f20973a36bd9f7ab394cda639"],["/archives/2023/03/index.html","30b2980aea3ff1283814d493515a880a"],["/archives/2023/04/index.html","af7254d39809221d9f07d95d09a920fb"],["/archives/2023/05/index.html","c603feac657cb3be5a074afb15edba10"],["/archives/2023/06/index.html","ea83990cad95709fcdd02f14c953399d"],["/archives/2023/07/index.html","2c11fd83e025b28867ced8f5933e2698"],["/archives/2023/index.html","b86d9b0636a604ea15bb6d0351c0f144"],["/archives/index.html","812820d2068af2be0ef4d1ee77959801"],["/archives/page/2/index.html","361864e531529ac7753ab36c6ffc0480"],["/archives/page/3/index.html","ab1a1a4653c96f1feb87be4642ffa24d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","caff971d899203f3a1bfd3e64951fa51"],["/categories/Linux-study/index.html","2635f91010cca20ed3c45d26281e175c"],["/categories/ML/index.html","ee2fbfe98ae11165d885c01896da2b10"],["/categories/Nginx/index.html","7f5240bd6ec364900a2846d369ea38ee"],["/categories/Spring/index.html","498a5bba0558af3d6f3f5c07877e1d42"],["/categories/course/index.html","38577a2a96dcd1543b591489e5b58d74"],["/categories/django/index.html","16abba837ff423564f7289a87e3b9353"],["/categories/fun/index.html","25293f8802e113128b4c874039b1ffab"],["/categories/gcc/gdb/index.html","496e2246763e860f96e51af8648997b6"],["/categories/gcc/index.html","786e06f69e6a4d4e6a4fa62c0b0235aa"],["/categories/index.html","77a85ac057fd0f39eeb67dcc099ebfe8"],["/categories/java/index.html","552a5f4a0bc89dbc4628f7eba85d3472"],["/categories/latex/index.html","721122a17b466328a5bad8fb9d95cc53"],["/categories/python/index.html","aabff119c0bb55e3cbc62c0a5718a424"],["/categories/study/index.html","8dc8099a79850fec3deb072dfe033dfa"],["/categories/vue/index.html","d665ac247d2cff1ac0857c132ac523b3"],["/categories/误区/index.html","8a3dbd07d3610848bfea18b34db7d55b"],["/commonweal/index.html","6d13ebca3807c71a3f6eafc1e9d7aa73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","4a1cbd0eb17a17c12e5df32b70b4afd3"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","472a14ce3b1459bdddeb5621181d4239"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","b30242d72e0e1729f6a11b25857ee51c"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","fa0c8b719829f6740fedc7b7783adb47"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","c26fce34742a4719a204a1d8634bfc0a"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","d79535e58bfe47ae78bccb0635f0f15e"],["/page/11/index.html","e2134d5ba8c0e2f4471b69d33c5f404f"],["/page/12/index.html","acc05d7446b617006bbcd3321e8a56fe"],["/page/13/index.html","9b3cbe66b9e82784f3454bab688b8693"],["/page/14/index.html","fea7ebe10580b50adcf90b0a217e11db"],["/page/15/index.html","614541ac700742011099f1e3cad85b8f"],["/page/16/index.html","e5fd48cc1af38eae54ec64d89da6958e"],["/page/17/index.html","0965f4ce0114efef6d8ec2173d12f2f3"],["/page/18/index.html","e4e97da06d59df78adb5bdf528c3955f"],["/page/19/index.html","3bc3e580aef0824541a7c97484aea208"],["/page/2/index.html","a06161484cb525f94b08b5fcf45c7168"],["/page/20/index.html","cc8688c6ac038cd839761ba5a693849e"],["/page/21/index.html","7b3589a2708a62c961c960d53d26a98d"],["/page/22/index.html","2e846e01382d4435adbf4ec923b36868"],["/page/23/index.html","88d7298a6f8a8503fad9d79ca62a03e4"],["/page/24/index.html","2ddd6546b76cdc3ae1c4ee1feefc558a"],["/page/3/index.html","716b04fdaf88104b5d33c6603ccfb606"],["/page/4/index.html","46ab9077847767f409f61f9f8b3856bf"],["/page/5/index.html","8467b388b2440e8db917a695fa1e086a"],["/page/6/index.html","95edb253b24fd1628143593aabdc118f"],["/page/7/index.html","a2fed91485d5e0f2eae3adec0d687d3f"],["/page/8/index.html","513f990db2a66835e3fea19259532566"],["/page/9/index.html","997839063ff897c15f37fca219a4f6cb"],["/resume/index.html","8fd1da490e09509684360732d0a841e9"],["/schedule/index.html","91ff28ad98933dfb5eedd9776fdb6f18"],["/sitemap/index.html","d82aea713682c7a9ffd89edeac636b29"],["/sw-register.js","8319df7fb083407377510101abd1a6e4"],["/tags/AI/index.html","57cb140e76fe714ebe33bc01173bf12f"],["/tags/Astro/index.html","111d30943dbbc53f534e728b8c4629b2"],["/tags/BT/index.html","95217097327c1eb0702407703bac17dd"],["/tags/BaiduNetdisk/index.html","d5a0c57eb4ef390f79dfae26f2d69c45"],["/tags/Bootstrap5/index.html","d4b3671deb64783cdb0f050193a1509c"],["/tags/CSS3/index.html","4ddb5ef0c0e2b0552f7b21682fd6218c"],["/tags/Centos/index.html","b0b6e17248d65b922d1d60852de20de2"],["/tags/EEG/index.html","52c498746a169b6954f799fa9288ca1e"],["/tags/Electron/index.html","2ff8b0e4e99d83309d3e6ed0a540a2bc"],["/tags/ElementUI/index.html","ef3c49d1e6cbec754ccac07b6cc32292"],["/tags/Flutter/index.html","4ae1018b38df1c78f26fbf19bcdfd0ef"],["/tags/GAN/index.html","677ac6496c8972c855963eea93d770a7"],["/tags/GUI/index.html","5e311f81104ece5cb1756987b46056fe"],["/tags/Git/index.html","16ed95cc473497ce68b5754e596b48a0"],["/tags/JavaScript/index.html","8df7b0cbcdbae0bfda386ee2bcf151ac"],["/tags/Keras/index.html","ae15836dac99c14641f13d25dacb7c12"],["/tags/Linux/index.html","c6fbf761447e341c25aff592f6eebf5e"],["/tags/ML/index.html","aa1090a37ae4f0cc6d181e6b62746ee4"],["/tags/MNE/index.html","e8d03cc6b0d64caf08f58406efc7484c"],["/tags/NLP学习/index.html","1e3c671dcf65f48a24f50e37a736a976"],["/tags/Nginx/index.html","6c3047d44b3310c0e9103b0d83f8c504"],["/tags/OSS存储/index.html","ba25f0124776464aec97e3a619e73b2e"],["/tags/Obsidian/index.html","65638bce33d90b3d3fda9333dd1d04a5"],["/tags/Qt/index.html","53b2951dd8d09104449f3f598e98877b"],["/tags/RSS/index.html","611e9d396e4ac453325e2698563cface"],["/tags/SSL/index.html","fe5cbf5c4f30107a9091eb437d29d413"],["/tags/Scrapy/index.html","9b0da346202baa90a4872a95e8df26c1"],["/tags/Speech/index.html","a3b05ea652f6c7e21c72db8b5a6b6cfe"],["/tags/TotalCommander/index.html","dce7915d464ee012fbfbf442fa86367d"],["/tags/VPN/index.html","fc1a28e4ccd9743da5fa4322ed615e6e"],["/tags/Vercel/index.html","7f0faa60ea5b75c0b8f9bf62044f1f02"],["/tags/Web/index.html","04939341189f78ddeda845f13cc3f0b1"],["/tags/algorithm/index.html","2caa8b11cee8e3aded053e289553e000"],["/tags/bison/index.html","6a2e8db6239dbc2262b3b085c2aa9f18"],["/tags/bomb-lab/index.html","21160ff6b99fdce6260c9bb3f5eceecb"],["/tags/c/index.html","014d72b1d5a210138208c62bf05738ec"],["/tags/cheerio/index.html","fa043ca54d3caa9ac61b28c3520ed51b"],["/tags/codewars/index.html","d21045b098b9a4e09d5e2781fd6b583c"],["/tags/compile/index.html","fcdb836173ead390ec56ee3f6b970e3f"],["/tags/compiler/index.html","658584d87c3af479643f2837499ba5f0"],["/tags/cors/index.html","a58f54366f140577b51350f4d1e8187d"],["/tags/course/index.html","1567081408f6ce1c713ca7db8da98a37"],["/tags/cpp/index.html","2d1d9b1f5593af8487e25e21c3ce40a1"],["/tags/crypto/index.html","3853018b73828abcdb9e61d6b29706e9"],["/tags/csapp/index.html","54c06e26bd1f3cbb1ff1375bf05185e0"],["/tags/csp/index.html","b1d77c0abbcb09f8c22b5bc347251f3f"],["/tags/css/index.html","3be6aa8baa426741d07a2b68a4474be8"],["/tags/dart/index.html","9f3d0fda2d768c9862efd569437d06b4"],["/tags/data-structure/index.html","bcf6bbf7ea0ea48704dc354a2fee9851"],["/tags/database/index.html","2c13a36f86eec68ef294b321b5700a50"],["/tags/deep-learning/index.html","a40a5a524f266e74869765e5f89efb90"],["/tags/django/index.html","5afc24a6c4d7424996643662797b081b"],["/tags/docker/index.html","23490d4d7fadd630f4a054c1eca2b1dc"],["/tags/dwm/index.html","c82bd7d1e32b53ddcf513424a9aee3fb"],["/tags/exercise/index.html","ad307df5e9dc6dee70baadcb6d3aeecd"],["/tags/filebrowser/index.html","0406f327ed05beff246deee8211540ea"],["/tags/flask/index.html","2fc21550949ceb50212c48082591fe2b"],["/tags/flex/index.html","9ae859ebfb5b43c0f9a0b571a62f4d65"],["/tags/front/index.html","508178ea5244fb9dd9fd2bb0ca1d9775"],["/tags/gcc/index.html","d935915c4e8b93ce0bdf4655e5a8d3fa"],["/tags/gdb/index.html","0094f5bccfd96fdc35048482b2f0719f"],["/tags/github-profile/index.html","c99ac96c036a88429eede64f84abb6d1"],["/tags/github/index.html","0edaef4b882d556dc03e26a8923b3d82"],["/tags/graphviz/index.html","6faef8149f274548f851bdf65ba46d13"],["/tags/grid/index.html","add84aceca27b4c41da7b421c703774f"],["/tags/html/index.html","d899e309d9db0567d9acf9cfa8b0900a"],["/tags/i3wm/index.html","2db64064535304a86b220d2bfc4ff5b7"],["/tags/index.html","45868612848c199d54837172e0992479"],["/tags/issue/index.html","78859e21566f258289ac7b38f12ade54"],["/tags/jQuery/index.html","b44a06316a0c3e2acb2dd83a2457aabb"],["/tags/java/index.html","94f15eb2e657c5e583492a6582ae28fd"],["/tags/js/index.html","7e747a808b0275a889053c0865a6f76d"],["/tags/latex/index.html","cd4089faccfe1ef9b4e63d8e263402d4"],["/tags/leetcode/index.html","106271afa86f1e64fe861f1520c75072"],["/tags/lex/index.html","b552ae07e5a97cc2281f765b3b095e3c"],["/tags/logging/index.html","21ea3894a2d28e7a2b782c939870df48"],["/tags/material/index.html","03faa47b6d7598ba6aade9774a783e81"],["/tags/music-player/index.html","e4d204aa0e468ba2844e0ded5c2ca6e4"],["/tags/node/index.html","5dbc60cc31d78f27ae20b5b200ccc0f2"],["/tags/nodejs/index.html","b2553e9060a60d6a2d86da2389225e4c"],["/tags/noj/index.html","240c2b978cd62580d93816982b024222"],["/tags/npm/index.html","8e4d739fd0d0446aa0001784f622d0fe"],["/tags/opencv/index.html","219e37c631b938dc7eda5e9a3e53f9f0"],["/tags/overleaf/index.html","0069663302ada400df1588e919b77690"],["/tags/pandas/index.html","5f7455837181e2d7ff6f79b1b34b20ce"],["/tags/paper/index.html","b1debb600299b92b12b7364605dff191"],["/tags/premiere-pro/index.html","28cadd2ab9a9454c2e0694e72db0071a"],["/tags/proxy/index.html","0c6d17d960ec02bece6d436d343d632b"],["/tags/pure-css/index.html","2808e188b619d4d16b483ae316f4efc3"],["/tags/pygame/index.html","42b617395c1224ff92abf6592338aeca"],["/tags/python/index.html","7b833c2cb9d4ab851fc31017ca205dc2"],["/tags/python/page/2/index.html","bc2cef649a5abddc4bfea36d6de41d4c"],["/tags/pytorch/index.html","4ead88c47d6573a4a511a2f82153bf99"],["/tags/reading/index.html","223d2e4fa96f6c296af34259ee84492d"],["/tags/request/index.html","89c6eb09b8aea2d2eddb9783282250bc"],["/tags/requests/index.html","44928002b06417a7ad4a47ee78f61c00"],["/tags/security/index.html","ccd5b5751e34380f0eed8eb8004064da"],["/tags/shell/index.html","d4d325e5957cb988a6608a6ab9018020"],["/tags/sign-in/index.html","1ca0fd6a39a472b763857234a4a19939"],["/tags/socket/index.html","f8f46d5905e29f83c683baeaf1231973"],["/tags/spider/index.html","93086babc29439e6014416fb403d35ca"],["/tags/splash/index.html","0622343fb3e8b6f2754a5520ca842b36"],["/tags/stl/index.html","6bad5ca0179f2946bf567ee1402e6d4f"],["/tags/sumatra/index.html","c24fec41f3b2f3f0f0c9bbff888f2e6a"],["/tags/superagent/index.html","8acd7eade25d855772dd9eb2d1853246"],["/tags/tensorlow/index.html","8491c2f598e1a38c9db3eab2921d21b9"],["/tags/tex/index.html","0054837e1d531439eaf8775935b1c4ce"],["/tags/thesis/index.html","524736927b14894cea944347d6ccacba"],["/tags/threading/index.html","77b54aaa713754d6c78bb27bf060e989"],["/tags/tkinter/index.html","c595e2b63bb710c8efe13e3db785d69b"],["/tags/torrent/index.html","700dd27e180319702bdebe9b300cdb52"],["/tags/tutorial/index.html","b1c66d75a3a9d8b29aab769d4df1eb7a"],["/tags/typora/index.html","7ed583006ff1d92085490bbf35b0d86d"],["/tags/uniapp/index.html","fc7891dfa461f4b17dd0b29b6ab3be86"],["/tags/vite/index.html","2ad51fa0e26cfbce79325d99c94d5aad"],["/tags/vscode/index.html","91161599c19d4ed57f6f2d6c22a503c1"],["/tags/vue-element-template/index.html","f12add039953e94e5514d6c1bc221462"],["/tags/vue/index.html","90d543f72db4da9d6dad014c03d8f064"],["/tags/vue2/index.html","0b7815ee1957a81c0afe27a2d22505d5"],["/tags/vue3-x/index.html","a7d70471a46beb3c0d8f824e7e439701"],["/tags/wechat/index.html","629cbc409944af96190407499176557d"],["/tags/wm/index.html","b3f6c291f45a119db410b73cc003c378"],["/tags/wordpress/index.html","95e77cd81d5d385aeaf75a95580a9dda"],["/tags/workflow/index.html","25b4d0ca02c329219bffead41d59a733"],["/tags/xpath/index.html","cc0446a624cf655b8ece571e4a338481"],["/tags/yacc/index.html","6c3cb721f56665c98d8dade143e5138c"],["/tags/yarn/index.html","97fb606c5e565a37dc047cb7756a0bf8"],["/tags/zsh/index.html","84ead5b404472ffe803aa55356f98cfb"],["/tags/七牛云/index.html","90db47d10641c448bbf5f28ea28808d4"],["/tags/函数/index.html","692172d42df4e521c5f07ae60ea324a0"],["/tags/剪辑/index.html","d7ffe04cc695b47bbe5a4f146adc6d0f"],["/tags/存储/index.html","8686495de29e4b17bb51f8e531c1f5ea"],["/tags/实战/index.html","31e13cfe0e6f63cd31166d3c8da3e259"],["/tags/工具使用/index.html","4acd9fd448c18074838d31add368322b"],["/tags/建站/index.html","8c2fe2db11fa9e8fadd19d0767dd11d4"],["/tags/微信小程序/index.html","d34d6cc65639d3d10244f997db31d4d4"],["/tags/指针/index.html","9479ea5a732a947d9564f7b7707fbdf4"],["/tags/插件/index.html","b50ad44e6268f3275c0c8aed81ffaefd"],["/tags/效率提升/index.html","4c91ede4aa4da3f0c9799fe8b1eabf7a"],["/tags/日志/index.html","be88ae4255270156af36fd1851be97d0"],["/tags/汇编/index.html","478cca62cec8123d34a8e201d02eb587"],["/tags/油猴脚本/index.html","69319537efdb4819a65725d81fdf447c"],["/tags/浏览器/index.html","57c5056579f7113b9819af8b0621037c"],["/tags/爬虫/index.html","f93c665b86d90ad33d4662f54f1ce0a9"],["/tags/算法/index.html","db363c04d7e9f57c550d2c73c265a5bb"],["/tags/编译原理/index.html","13cc304b4161c57a64e131af8aaa794a"],["/tags/获取地理位置/index.html","56f2bef72625975dd28618e91a84021a"]];
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
