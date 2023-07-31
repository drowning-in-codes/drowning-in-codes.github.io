/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","4fb42a6c409b974afe737ab85e3be110"],["/2021/04/20/稀疏矩阵/index.html","6ef5cf1a70777e15332c53c05e538507"],["/2021/04/23/广义表简介/index.html","32d86cfbe40927ac490e392655a7b811"],["/2021/04/29/关于指针和函数/index.html","357e512c3b9cddc4b50700bf8f00e934"],["/2021/05/10/哈夫曼编-译码/index.html","75d58c9849dc24f14cc8e86a2098136d"],["/2021/05/17/数据结构noj_2/index.html","229c0d18d93acf3e436c0bd38c6691cd"],["/2021/05/30/数据结构试验/index.html","b42ea50f0e506783633d6055a588f29e"],["/2021/06/12/数据结构noj-3/index.html","d7e30935b64adc380662af890cd68591"],["/2021/07/08/C++与Qt开发入门/index.html","a5e6655aea0477054fd26175c6d1d4e9"],["/2021/07/08/课程资源分享/index.html","79b6581bc2cf6d2d14b0dc5aab787fd3"],["/2021/07/20/Scrapy-下载图片-文件/index.html","9087aef1f8269f0c4ff48e9748f3240b"],["/2021/07/21/Scrapy-动态网页爬取/index.html","e2e226c64f30c1d03699bb43d465434e"],["/2021/07/21/疫情打卡/index.html","88c00ab7133f4062bd0926fd476e597e"],["/2021/07/29/Scrapy代理设置/index.html","8f8cf65ec9982d3847acc1b3a025a525"],["/2021/07/29/数据库认识/index.html","c5fd47a2605c9baeb70667f415a43b3f"],["/2021/07/31/Python多线程学习/index.html","c02a5e36e4fa1a6d5a84fb5aea5d311f"],["/2021/07/31/tkinter-requests练习/index.html","746795298c8cd9f03dc2e486fed84ea2"],["/2021/08/10/Git学习/index.html","b685f4a2ddbf5b8eee94df7dec3b06b7"],["/2021/08/15/pygame实践-1/index.html","cfd1e85763667fd2bed468facd4a89b4"],["/2021/09/06/微信小程序开发/index.html","a1a7ff81be9c08f92b4469381ff6337d"],["/2021/09/21/命令集-1/index.html","a9972129efd29cac03ccdcb88e72ddbd"],["/2021/09/21/命令集-2/index.html","516573857cbed2f4a6ba74ca78179a2d"],["/2021/09/21/命令集-3/index.html","5b37d13aa67f860ece4f9c65d7404f28"],["/2021/09/21/命令集-4/index.html","e80c1ad11a74f1d5c2ee04daf8a9827d"],["/2021/10/03/socket学习/index.html","53150b1d0387df03518ccec3832f8341"],["/2021/10/10/dwm入门/index.html","4ce0258678e01653bf61450df524d4c3"],["/2021/10/10/安装ohmyzsh并配置/index.html","f450f5578a4d70bc921d5b670a6a5ef3"],["/2021/10/20/css学习/index.html","3056663ac11c6421b3e36ca25b63d4f8"],["/2021/10/20/wm入坑/index.html","07094b2e2ef83e8ce6e4cde72692dace"],["/2021/11/03/微信小程序学习/index.html","1670593fc7a3984644e38f8ad6644d57"],["/2021/11/04/css揭秘/index.html","6782ee4295a40d7d9241b6f0e5f87901"],["/2021/11/05/css-练习/index.html","7956400957fcac4d2a1090d5258eb098"],["/2021/11/21/命令集-5/index.html","f4105da11ea4f3caf9e148c35aefc57d"],["/2021/11/21/命令集-6/index.html","460d2efc82d1ccb4bab46290a137fe21"],["/2021/11/21/命令集-7/index.html","066d87f11d84e39ccc7ea290d46a6122"],["/2021/12/01/搭建wordpress/index.html","37bcd5f651912fdeb80656a2239dc936"],["/2021/12/08/python操作百度网盘/index.html","25d04bb2c348941c4d59f4a63dcd1441"],["/2021/12/14/js爬虫/index.html","697671e2644e5957b51ceb74dcc3e14f"],["/2021/12/25/为网站申请ssl证书/index.html","b798110b6548aeb9206f6160d6334df0"],["/2021/12/29/使用七牛云为网站提供服务/index.html","850daaedb9bb41300dcdaa3be4d6b57b"],["/2021/12/30/jQurey继续学习/index.html","f2842310de701ac8c5ab6c0fad8d6c79"],["/2021/12/30/jquery学习/index.html","b134097202ba596b0cc5800a216e964b"],["/2021/12/31/vue学习/index.html","91c5ea03b76a36b8b7f8eaa32e212824"],["/2022/01/02/疫情自动打卡/index.html","eb010aaf52c8a8c65b68523338c7c86a"],["/2022/01/03/javaweb初体验/index.html","9dbfa965e3e6dfc41490b8c2b6be732b"],["/2022/01/04/codewars练习/index.html","53ca13a35c99790a5770f2b7844c4b89"],["/2022/01/05/Spring学习/index.html","cca557efed46d769e0a4a9e4e2c383ac"],["/2022/01/05/vue实战/index.html","79d0b6e724362a3605e78b2075f4928b"],["/2022/01/08/gdb-gcc学习/index.html","4491a4be3684d9bd70e225bbba027076"],["/2022/01/11/python-opencv学习/index.html","d753ec3908cea8d7ffb6698c5c27be5b"],["/2022/01/12/汇编实战/index.html","99c4e1337c07c8946dba7a8665a31d47"],["/2022/01/17/pandas学习/index.html","32285a50eed612838e9e4e11d22a63a4"],["/2022/01/19/可视化图的工具/index.html","37ad824e3b5284b4495e1e851ff8c180"],["/2022/01/19/机器学习入门/index.html","01560796a725dfa1da2689306c32a39f"],["/2022/01/20/cousera-ML学习/index.html","4feaa66381c5ae0fa844bdbbbcb118fb"],["/2022/01/30/typora解绑后出现问题/index.html","1b27134c3084c10ac5dbe4b8fe27f29b"],["/2022/02/03/NLP学习/index.html","ece6191b9c603c561f5e62eea769013a"],["/2022/02/04/Web漏洞学习/index.html","c0b13baf0316cd60247e4bbcb1854239"],["/2022/02/04/pyqt学习/index.html","8dacf74f9f78fb90404f2267465ed6b4"],["/2022/02/04/python爬虫/index.html","d7f56067e92c61fc31d551c729c50dc4"],["/2022/02/18/Electron学习/index.html","9feaa0f152a68b472ecc382f79a14bd5"],["/2022/02/22/疫情填报字段解析/index.html","dd0fc34af03f6761704973b11a9bd5f7"],["/2022/02/24/Bomb-lab实验/index.html","dd2107015b76dd8416e322b242d21271"],["/2022/03/05/nginx学习/index.html","2c4f5a6e6e3d1f246252ea83702bb52f"],["/2022/03/09/汇编原理课程学习/index.html","961a5240b249de377e5fb8f9abc01e09"],["/2022/03/11/Keras学习/index.html","0bc1845b72d7dcef27896441b3e447bd"],["/2022/04/01/graphviz学习/index.html","3ad702ffbd4bc3a1cc0602411182cc86"],["/2022/04/07/django学习/index.html","ffc60217726ed94e09da72de822fa54f"],["/2022/04/11/密码破解学习/index.html","fa013ece32307e25698df72613194eb8"],["/2022/04/12/flex-bison学习/index.html","43eeaf24238612069f0151feafaad847"],["/2022/04/15/pytorch学习/index.html","52a8702da69f9300f665b55c89902dab"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","1328c334dd004bc6cf1de087c46ace8e"],["/2022/04/23/写一个音乐播放器/index.html","1d9da3f646440a9fb6f82b1695d7ca57"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","73e55d0bdd5e089eb09e5096edc6ad59"],["/2022/04/30/GAN学习/index.html","a03d70a81f924e2fc6ec497229017802"],["/2022/05/02/html精学/index.html","18150a4d3f6e952b38a26cb28cd8e85f"],["/2022/05/06/write-a-compiler-by-yourself/index.html","2b9366284fd6db623c0cebb0b12c957c"],["/2022/05/30/acwj-01/index.html","7295c340a2018c5d26f4638ce6ce9e66"],["/2022/06/14/animeGAN/index.html","cb331b505ca63ee25938e7b56cfaf54d"],["/2022/07/09/c-与算法学习/index.html","3dcdb7d7d5e08cba67d54ae67af43e66"],["/2022/09/19/flask学习/index.html","8cd2aed1e152187932faccc4888405db"],["/2022/09/22/cs224w学习/index.html","8f062bf08531b1c2d90801fbe3f454c1"],["/2022/09/28/记录一次wp重装/index.html","8ce0f839deb6ac2c20090635b34a6775"],["/2022/10/01/Obsidian学习/index.html","e1d543b35de2432b6d95774f1b415b99"],["/2022/10/08/vue-element-template实战/index.html","0ff305c83dc26bdee53f35b2c7a6e0cd"],["/2022/10/25/vue网上商城项目/index.html","fdb8d66e7cd45a19ddb6b51d2f4d7e11"],["/2022/11/11/leetcode刷题记录/index.html","0cc1054428aa73999a1f86cdf7dbcd97"],["/2022/11/11/使用overleaf优雅地写文章/index.html","83a390d611754b9d4f7bfd879afaa2d0"],["/2022/11/22/磁力链接与RSS订阅/index.html","3af9963371da8a395163d28fdc46c381"],["/2022/12/11/uniapp申请获取地理位置/index.html","bc519d05f9d814c8aa6c5460f6a28de7"],["/2022/12/26/pr剪辑学习/index.html","1ab0f5bb53da3d1debce9d4e7bd7f1b6"],["/2022/12/27/css中的flex和grid布局/index.html","6411266d7a11acece8edb153a86e2c95"],["/2022/12/28/Flutter学习/index.html","e098d83746b643ccd1044e487d105631"],["/2023/01/01/美化github首页/index.html","67bc87a15288b383550e2014e63d2c4d"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","3a9388e49556f3c9c26260e09744a68d"],["/2023/01/04/构建微信快捷发布文章工具/index.html","4cf364af50a305e6d4decafdffdaa722"],["/2023/01/14/dart学习/index.html","c5fcd8b10b1106f805dda70ddb5b0fbb"],["/2023/01/23/闲置服务器BT下载影视/index.html","7d8f33ae8df013572b9a12b9c4e5f2ce"],["/2023/02/07/TotalCommander使用和学习/index.html","c8e03d28a3b334bb31be93e842e6a09d"],["/2023/02/13/docker学习/index.html","0ea69988a437d7c5577597af034e9f09"],["/2023/02/17/DLHLP学习/index.html","3e67565f69174bb123759ece83e159cf"],["/2023/02/18/学习purecss构建自己的css框架/index.html","8900a37258a4ff3dd0ab775b3793b2e5"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","3821854b4813a787cfd60a11d42bc964"],["/2023/03/05/STL学习/index.html","c8bebb9c87c70778134f2e0cb3006458"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","71a6a024b8c64859499c7856266c6c9d"],["/2023/03/23/实战写浏览器插件/index.html","e6e2f4c92636da4d4d47236b21f82e58"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","d048ff10cf0ca46ce92ce9fe07292a92"],["/2023/04/02/EndNote基本使用/index.html","266b7a7713812e4645f60762e348ae1f"],["/2023/04/04/mne处理脑电数据基本使用/index.html","92102bda6e0c84d883acccb75eb58fc9"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","3107c78e7ff905589b4a2915c621cc86"],["/2023/05/02/python中的logging模块/index.html","bc14843cde2663da3941ae7983ee5600"],["/2023/05/07/python的特别方法与装饰器/index.html","f487e6806e3d80a41ace8e9467d77544"],["/2023/05/20/Wox插件编写/index.html","2357e5200f99d0bf8d392aa8ee7f6ec8"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","e8c8a2fc066940b64c81799ec9fec895"],["/2023/06/03/深入Clash配置文件/index.html","cb7c834d8030cf168627bca92e5dc3cd"],["/2023/06/10/node的包管理工具介绍/index.html","c6de2570ab2fb4d27403beb08c3083bc"],["/2023/06/12/AI写作工作流/index.html","43b3b7a7dedbc675b33dde69e3d094d2"],["/2023/07/07/Astro-Vercel部署博客/index.html","7cb650469747bad2f8dd24844a09160d"],["/2023/07/09/青龙面板部署项目/index.html","0b516eb0f06291f80ade7780128d8188"],["/2023/07/29/CSS-Modules介绍/index.html","0f2e35891d802907d6cdddbac9420e8c"],["/2023/07/30/浏览器JS/index.html","767deb85a13f1c1126a7d05801ac1099"],["/about/index.html","01a1c38b01e84cf786ecac03b7156c83"],["/archives/2021/04/index.html","38e76ff550688636207fd7ebb461e4a5"],["/archives/2021/05/index.html","3ef88ea09f70a9deb8a3446f862e2d93"],["/archives/2021/06/index.html","b82f545b67bdeeb4d8bf759cf2c89e33"],["/archives/2021/07/index.html","3c5cdaa1518b025cea0eb0b43b796e9d"],["/archives/2021/08/index.html","3f9dc616e80436d047c21bce94cc2117"],["/archives/2021/09/index.html","ce151c4ba7198cb62765630737c7926f"],["/archives/2021/10/index.html","87fa69d2a4e601e7bf49334c1d312535"],["/archives/2021/11/index.html","648c0d032acd62421aa8417d887f1777"],["/archives/2021/12/index.html","d08e6092064ae5a4772956e9a7a454f3"],["/archives/2021/index.html","187aec249233dc855f9ef2d17ea88f52"],["/archives/2022/01/index.html","cd89047e5d51cc07e9d8b1006bf0aae6"],["/archives/2022/02/index.html","7f4474ca7c5f2b07513ec2c99a5863ef"],["/archives/2022/03/index.html","2551d405128c5526d8d7d62321c15e63"],["/archives/2022/04/index.html","0104fddca858effa7716cc8be9018b9a"],["/archives/2022/05/index.html","ee251d0b606f6e805ecadc666aa532f3"],["/archives/2022/06/index.html","6d2610511e0dbfb2edb0a3294cef79bc"],["/archives/2022/07/index.html","1e0b7c2e7620cabfca7980d9ffa0fe7e"],["/archives/2022/09/index.html","99b49202ad96fc34e2cb53f65743c200"],["/archives/2022/10/index.html","b29a260f50ccf12878fa64723987321e"],["/archives/2022/11/index.html","352e683bf5713fa17406c6385bc90bfb"],["/archives/2022/12/index.html","00fca10b8899c523eeb4eddae4f1cbbc"],["/archives/2022/index.html","9d6103ff13ca078aa60757f5135a163b"],["/archives/2023/01/index.html","8a37024d1c293c8a8029d255110141fe"],["/archives/2023/02/index.html","f9370a090de8254343ad5e2125ba7394"],["/archives/2023/03/index.html","181a8ef3f6e21a0e680db027c3476cf9"],["/archives/2023/04/index.html","25f177ebc9f057fdef44a461ab64cd2b"],["/archives/2023/05/index.html","e5ad892c89234e3fa366c8b5db709747"],["/archives/2023/06/index.html","c63f47b0b0f89fecb053c7662a102236"],["/archives/2023/07/index.html","15beea400760ce457ca1dfd4df4e0ad0"],["/archives/2023/index.html","c21d9c44aba716e14ac04dca217328a1"],["/archives/index.html","e0d302f1acb6fc338f9f788fc8a5f24c"],["/archives/page/2/index.html","2664fd6cda3e9cd8e0c0ba4727a597a1"],["/archives/page/3/index.html","fe2688b7886889753a55ec3c7ee2103d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","5512a452350eaaab62c9140f50017a62"],["/categories/Linux-study/index.html","13a50fdc8a99986a8c2a009008190f82"],["/categories/ML/index.html","c07f23cbc7993784feaa070e42a771a1"],["/categories/Nginx/index.html","7611780574a385b57d1f109b6fbbca8c"],["/categories/Spring/index.html","63b658ccd8a31f32414e2f8d8bb0eb99"],["/categories/course/index.html","97247b50b87d9f8bf9b1414a6b05dc3e"],["/categories/django/index.html","35f2f437279a0ecc74d4a702e3c80a82"],["/categories/fun/index.html","3d5ae1e408763ec4456c80658fbf4dee"],["/categories/gcc/gdb/index.html","f7799e0982485b61f8a407d00bb4e62f"],["/categories/gcc/index.html","763fc171cef6c8650f49dc3e0e7afa99"],["/categories/index.html","689cf26cb3be29c25f7cd895b372ba21"],["/categories/java/index.html","7cb5161c71f2ae279936fa82e558465d"],["/categories/latex/index.html","46e549881723eca0079683c40bd519ed"],["/categories/python/index.html","d551ed92c384ac74637021f3b5f4958e"],["/categories/study/index.html","18dbd51b12402adb9155372e6eed2ad8"],["/categories/vue/index.html","500eb2c35041fa0de4f912d9f78be5ed"],["/categories/误区/index.html","4840233e00d4327eaba97c7188f8d164"],["/commonweal/index.html","88ef95e0692450494da52dc99cde01d3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","0d9a7075427fe141314dadb85eb68ea8"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","2c95621b99a2182a615ed920db3ef4bb"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","a7d3ac7c2df7583bcd3fa77903d5bddf"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","65f4e961a7931259b551b8eb93fcd6ef"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","695402164d55bd5f6e72a35c6bee0e2c"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","2c75afd524eb87fd7556896f28f8cfaa"],["/page/11/index.html","2fe1748cc16e06e414ebf4041eb2fcbe"],["/page/12/index.html","94b729d662486fd9527a8c99e3893390"],["/page/13/index.html","ac09849cd050a71786f31eb8c53d0bf5"],["/page/14/index.html","83f8e924b97797c60da8dedf5b8304ec"],["/page/15/index.html","b14357a13d83f592ace079809a7ec1cc"],["/page/16/index.html","5d852f0e0892edac6c41e957c2afc41c"],["/page/17/index.html","1d0fc1d59d29099f5341afcb8708cc29"],["/page/18/index.html","48950a54b153abac30c478e7e6455754"],["/page/19/index.html","1f28bec8eb7a0e766a3ae3ed346ae2ca"],["/page/2/index.html","994b7658f9d64734cd807b8ffb798a99"],["/page/20/index.html","7d315c57dd692542fb34a096ce54d1d1"],["/page/21/index.html","3d17f061f4b989aa88553c669cb56e36"],["/page/22/index.html","5a00884a5cdee1093214312a50c69e4d"],["/page/23/index.html","09536f94a83af94071c26941b18efe71"],["/page/24/index.html","12b5c626ebb83d5d3ad2d231abcf1fe3"],["/page/25/index.html","af78a9c27546f8d09753ba0009ec85be"],["/page/3/index.html","080709bcec27849a1373a1e9b88a825f"],["/page/4/index.html","3b9690b0e2af5ddde49bfad096aedb48"],["/page/5/index.html","0edf6bc6a980389a26a5a0c75f942bed"],["/page/6/index.html","0973747bfe969c07f09aaf25cde21446"],["/page/7/index.html","04a6e0e1147615fcca403a5d72a07ac9"],["/page/8/index.html","7ca71e9d6eaa99610e2c97002d0fd15d"],["/page/9/index.html","ceba2da62403912712cd9323a3df57d5"],["/resume/index.html","c647afb64fac758f50aad53d1f25f1ef"],["/schedule/index.html","afd42a112ef47661fe708a312405075d"],["/sitemap/index.html","eaf2c6848a3235411942377376bc46f7"],["/sw-register.js","bf73abe48f1dac212850fdb039ed82d7"],["/tags/AI/index.html","b8ccdfc05f1d8a3ca24b7d8a1aa05102"],["/tags/Astro/index.html","f74de41b0164dc4a0f2e7f571adccc14"],["/tags/BT/index.html","413e45a88fc4fd865b137bede568e12c"],["/tags/BaiduNetdisk/index.html","fa30e8e5ae91128ac1cabc122dbbe431"],["/tags/Bootstrap5/index.html","b60a063ee1a7385daecc9a1b4b773e1b"],["/tags/CSS3/index.html","9772ee9ca3ca755c05bd342c8bd209cb"],["/tags/Centos/index.html","8d7edb99932c9c770fb5d0f01d8728ff"],["/tags/EEG/index.html","f37a98a7b407d33bed635d55e18a665a"],["/tags/Electron/index.html","a333a138bd19950c9be6742aed94e8cb"],["/tags/ElementUI/index.html","8e3ea79aaecfc7d437fc57fc6fb0e2d4"],["/tags/Flutter/index.html","57de80b52af8adda771770e675497f32"],["/tags/GAN/index.html","db4d147ad4c75c8c71c0b63895cc37b3"],["/tags/GUI/index.html","30be7fa91163c95d6d6c95819ac981b3"],["/tags/Git/index.html","aadee7a7af263f328229e0fe3687d167"],["/tags/JavaScript/index.html","6d6164b5d49e13746dae1cf73de14e29"],["/tags/Keras/index.html","7d02ad321bacf948bd46b6802bbea2b2"],["/tags/Linux/index.html","b34f9417f7fa45f06062639d586aa288"],["/tags/ML/index.html","de28d57598cd4c74ef962ea87f3fe453"],["/tags/MNE/index.html","a00e4a184f21659f28ec9c6498f726d9"],["/tags/NLP学习/index.html","c22b6b07391d53fdcc78b837579b4080"],["/tags/Nginx/index.html","4aabdda4d2dd7e72fb2cf30634a89c9b"],["/tags/OSS存储/index.html","9dd81418d4977636e84ab419f8567f32"],["/tags/Obsidian/index.html","280463061609c4a06b271b695b7a90e9"],["/tags/Qt/index.html","b2215ccfb3678c7e0d9582a0e40bdfd8"],["/tags/RSS/index.html","f58882e267e30fff1416df0da5da43ce"],["/tags/SSL/index.html","c65a4cd493a2fb4f46bf8d2cdafeff5e"],["/tags/Scrapy/index.html","4bb2dd2c7bea01085f75908f089fe652"],["/tags/Speech/index.html","fe42ff02a430fdf56556eceb08e8f520"],["/tags/TotalCommander/index.html","95da961ce63aaa64bb58c1485e5a53df"],["/tags/VPN/index.html","24fdab08f6970c566351f1db8df3b1b1"],["/tags/Vercel/index.html","26d5cfbee8c845832de7697b6c94fbe5"],["/tags/Web/index.html","30ed1740a5e2ea3f7cebc96389c45c76"],["/tags/algorithm/index.html","4a73fa81d6177b5d6e16133f36764368"],["/tags/bison/index.html","f79461c88af3bee0aea480d64a26738b"],["/tags/bom/index.html","53c7a87567d9c461f9458bf623d4e84d"],["/tags/bomb-lab/index.html","1e3bd1bf681d393092599a31f78faf7d"],["/tags/c/index.html","bb1b36fe80abe5b9ec84c4d47d01d298"],["/tags/cheerio/index.html","7214958108a70b1e5faa91b97fac59e2"],["/tags/codewars/index.html","578da3e866a2a1e23e97c8dfc9f497c4"],["/tags/compile/index.html","3b614a50ee489a3465c58a3cf2fd127e"],["/tags/compiler/index.html","eda3632fdbda9bce6e3a13539ddd614f"],["/tags/cors/index.html","d0972814110b73380abd8697db0eae33"],["/tags/course/index.html","72448baf8a16f3bef9d0c9425c317cc4"],["/tags/cpp/index.html","7bc1511ae27704d884641a23c738e896"],["/tags/crypto/index.html","d5310b905aef92a173c2046f0cdaaf2d"],["/tags/csapp/index.html","c6c296870c2c7560ad5a40f712acfe3d"],["/tags/csp/index.html","84047a417c7f9cd58814d26ce6c86d29"],["/tags/css/index.html","ad0a72320fc0e9661b162f45e83d6395"],["/tags/dart/index.html","6ebf0377c0aef459d1c539dce9263ba8"],["/tags/data-structure/index.html","67e90eb21ee41f298a359135b9c4241e"],["/tags/database/index.html","0fd06a5ddbcb20800a83b0b91cb9ce67"],["/tags/deep-learning/index.html","2f12594b8c1e0d06f4e435db34fce6fb"],["/tags/django/index.html","7bf2448c3b35fee824c78db31a35484c"],["/tags/docker/index.html","855952269841f57ccc0b7aec6430afe0"],["/tags/dom/index.html","6e07934acb29b560eb55714a5526fc7d"],["/tags/dwm/index.html","2204c17de55c0a68069554cfacca5ca7"],["/tags/exercise/index.html","ca1afa2be5976c6aa90be7e6268e558a"],["/tags/filebrowser/index.html","44e6fa901fe844cd6da51dd9f79b8af9"],["/tags/flask/index.html","65405aa00ad9c7b373340d8a9f99bc0f"],["/tags/flex/index.html","bef890995c121c882eb7e0476c028f94"],["/tags/front/index.html","5b117c5eb692d996827017d865365ff5"],["/tags/gcc/index.html","e6ab44766674e8c30f48c490920cadf1"],["/tags/gdb/index.html","1015c51a87c73a9a92768beb5df0bcb4"],["/tags/github-profile/index.html","2fb6b4ea3bf312f27bf739b3870e3a04"],["/tags/github/index.html","b9b43f78d13ec4cd61cc2272a31ee564"],["/tags/graphviz/index.html","47702f3f23e7c31315851608aeee9866"],["/tags/grid/index.html","4c0d8b1edfbb3c720ff5ceb79a24cfbd"],["/tags/html/index.html","0d58c5d9ce7e9574485fba02014d1732"],["/tags/i3wm/index.html","67de38aff6d37c02a050b486e816f4c1"],["/tags/index.html","4692445a634f5db28c1ce7d77fb40b27"],["/tags/issue/index.html","18fba8bd790c0241e19a18c638c59bab"],["/tags/jQuery/index.html","602e670420682c649ef0d04d793212af"],["/tags/java/index.html","440ed0841d975858c6ca9e7df92b3958"],["/tags/js/index.html","7b5caf287a0c28904232b986d6de4b28"],["/tags/latex/index.html","1446083c6e2ff59bd281eca4e507f29a"],["/tags/leetcode/index.html","28f2d12bd2b941766afe9350df67d1ea"],["/tags/lex/index.html","a710dc67bc49e6ad48bb63c5f98d0521"],["/tags/logging/index.html","0b8dec3e5dd0803f6a345942fad02579"],["/tags/material/index.html","6e890d03ebe854b109bb3db26c2e90b6"],["/tags/music-player/index.html","3fba5165c5bb02976c6bd193216f61c7"],["/tags/node/index.html","cf3ca917c217f88920cedaed504ff0df"],["/tags/nodejs/index.html","632d60f5915fe510378caf5d166904da"],["/tags/noj/index.html","19518f1d907239f102e678c7afd2b032"],["/tags/npm/index.html","e8f458b191e6a904f4a29df814fe37b4"],["/tags/opencv/index.html","aa59d85b64403b1864f0fc2f2048d713"],["/tags/overleaf/index.html","ac81ac21b6894ed74a8c83d1281ac758"],["/tags/pandas/index.html","2e02a28b1c1f170bf12249cc132decc5"],["/tags/paper/index.html","f8a9661621ca0fa7e78f738c7ab40dfb"],["/tags/premiere-pro/index.html","a5aae94d2f33bf67f5df32319f3e716e"],["/tags/proxy/index.html","aab6abefbbdf75fb00cdc7e8bc47648f"],["/tags/pure-css/index.html","20c62574fa7c9288e6b7163bb022ccc8"],["/tags/pygame/index.html","2a6c3a6f2e187e7654f5a5a9e3edc718"],["/tags/python/index.html","377ef78ecd129b066b04a9d8a5784157"],["/tags/python/page/2/index.html","d09b5896a917adda953f37fcab3458e8"],["/tags/pytorch/index.html","80abf374b0442912dfc3506f207f4051"],["/tags/reading/index.html","6a17642fc2cc884f43b52570a57c1850"],["/tags/request/index.html","a4cf2c591e38c85889667570b0141ca4"],["/tags/requests/index.html","8a086b3a9f8e7685b222fb16b2c1cc89"],["/tags/security/index.html","9cc6436fa1def39fb01a948bf6e6394c"],["/tags/shell/index.html","dd1b5a7dd95e93f56dc644cda102ce2d"],["/tags/sign-in/index.html","9f705d3e7400d7d147747e2737757d92"],["/tags/socket/index.html","0bc93e7f6b93301bf272eb737dff50ac"],["/tags/spider/index.html","861f3f107f6a00ead44128b1ccaaef49"],["/tags/splash/index.html","3f723d49fb1705004fba9cb6f404f182"],["/tags/stl/index.html","914b860f7b9da9633cc062b9c499e8db"],["/tags/sumatra/index.html","7e024418349aa77d8fd112a306d22ebf"],["/tags/superagent/index.html","f86cc846e51d470899721d2d8b03ac25"],["/tags/tensorlow/index.html","aa0be9ebc4575754a505d735ea430f8a"],["/tags/tex/index.html","0805010e2d23de82e5e78d048cec7e73"],["/tags/thesis/index.html","a6886dd945d4d769bdc2bf527e9e0e59"],["/tags/threading/index.html","fefcd75e289b0f4cfa563b2adb464ba8"],["/tags/tkinter/index.html","2513e82485038ad84328a6b2d03b6daf"],["/tags/torrent/index.html","c8b9f039a4d461a71ce66671382111f2"],["/tags/tutorial/index.html","0afc00d8de20fb7a30f5c64a0e59fc9d"],["/tags/typora/index.html","6a7f73716380c4b9d20a5c615c85e094"],["/tags/uniapp/index.html","57fbbac0f378ae81ceb3c57f544b76e9"],["/tags/vite/index.html","00f61679585cc0bd062d1bc416ec4375"],["/tags/vscode/index.html","32deb8dfc62e15e650cdcbe233066ce0"],["/tags/vue-element-template/index.html","77e9552ac101aff46841a009d59176a3"],["/tags/vue/index.html","1cdc8648b952ab71dce4804787cc188b"],["/tags/vue2/index.html","71f3fc6a1d320e9b0ed90b73263acf53"],["/tags/vue3-x/index.html","3c38050e4932241cf0a3526269a40db4"],["/tags/wechat/index.html","8a7c8a80d5f326b72e38bc170a82154a"],["/tags/wm/index.html","a528d12477acbc10c8376898c9e7591a"],["/tags/wordpress/index.html","33c9f47938b494fad736b5647e95a0c8"],["/tags/workflow/index.html","a5c1b40bad478da1d36b0ae7502722a4"],["/tags/xpath/index.html","9596c2dfa3b8626519dbec83a306e629"],["/tags/yacc/index.html","09e8bfbcd3eb4c5d4cd349669e7510d5"],["/tags/yarn/index.html","66a064fe460e37ad6685be0b3785008c"],["/tags/zsh/index.html","660c163ce75b9e8a461bf8ade8c0d42d"],["/tags/七牛云/index.html","27cbf822dfb6913ec9031a3774305eec"],["/tags/函数/index.html","6f8675bc90e9d0ef63fdc0ff792807fe"],["/tags/剪辑/index.html","e50d2e5be20a14ffd01550bf35586494"],["/tags/存储/index.html","0b4b1f5630cb98bb2ad48fb8b943cfb8"],["/tags/实战/index.html","5b4eaef4eb9536fa99488fa7b4d04b90"],["/tags/工具使用/index.html","a515584a3bdddb4e7e7a9b16eb5cf2e6"],["/tags/建站/index.html","b3d6660cb380e8e7503013900224e7bf"],["/tags/微信小程序/index.html","090db2f46fa2679352c52133adfbd011"],["/tags/指针/index.html","1ca7aa813edcb178021605301b933e4e"],["/tags/插件/index.html","a12d26bec661b4f7eaff6168e7a19a10"],["/tags/效率提升/index.html","8cb9c303562ace8a981e658011041ef2"],["/tags/日志/index.html","fd326f12fdab299b9694c2959acd159e"],["/tags/汇编/index.html","5a2063a91d9837de5c260247f644c518"],["/tags/油猴脚本/index.html","89606e956e7b3ac725fcf2a90372136f"],["/tags/浏览器/index.html","54ecd662fbcb0b972b7d801bd2e4c687"],["/tags/爬虫/index.html","f0ccb265697530d3fb1ae6ec0bf1dae8"],["/tags/算法/index.html","bec143e2459235a8699cd93a30325fb2"],["/tags/编译原理/index.html","399d187c636bd2eeaffce2aae7c8f8f8"],["/tags/获取地理位置/index.html","97ff0e9cd3ce51caf9afdd23d0569dfe"]];
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
