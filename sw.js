/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","94c37e8b0240d4080372bfe41b587e33"],["/2021/04/20/稀疏矩阵/index.html","2098e6568e22b0e2002d95d4fa156b61"],["/2021/04/23/广义表简介/index.html","fcddf7d47becc30281c2fea6530dae42"],["/2021/04/29/关于指针和函数/index.html","695d456568fb41b350785f9674f34aa0"],["/2021/05/10/哈夫曼编-译码/index.html","9aaa5c40b653cb9945c56111e2d1ed02"],["/2021/05/17/数据结构noj_2/index.html","0305608fddaad8f42b6a137f3edc19f7"],["/2021/05/30/数据结构试验/index.html","de9332b898bd382d7df343447e468f93"],["/2021/06/12/数据结构noj-3/index.html","fedf2b15631ad9ef1e35fde5398a43a0"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","210e9120d6885b8dc2e179b76ce94fff"],["/2021/07/08/课程资源分享/index.html","40c17882975e70e4826c09ea39828fcf"],["/2021/07/20/Scrapy-下载图片-文件/index.html","476a60def51abbf36060b741c66a82f3"],["/2021/07/21/Scrapy-动态网页爬取/index.html","31012a0dd7fb41b6c2b0e8682dea58f6"],["/2021/07/21/疫情打卡/index.html","d9481d5be92a74119377055ad9d27616"],["/2021/07/29/Scrapy代理设置/index.html","6a052e4e75bb65d548f9e386589634fa"],["/2021/07/29/数据库认识/index.html","f84f86894a4881215131eca465777c91"],["/2021/07/31/Python多线程学习/index.html","0b007ae3ffe85a1bcf66eef35be7ad07"],["/2021/07/31/tkinter-requests练习/index.html","14e6b46349ffa8fba55bbba6d71f4b0a"],["/2021/08/10/Git学习/index.html","43adb43bc608ecf26d04b6baad6b5474"],["/2021/08/15/pygame实践-1/index.html","60be08c39a95c2d18ecfadba732b6384"],["/2021/09/06/微信小程序开发/index.html","20b129c05b34a6244964f4515c6965bd"],["/2021/09/21/命令集-1/index.html","65dad9e3210df8535f0f2653aaae6ece"],["/2021/09/21/命令集-2/index.html","84d3253b586d426820b1f46f10c75dbd"],["/2021/09/21/命令集-3/index.html","efca9103d1953111e91307b4acd0bfac"],["/2021/09/21/命令集-4/index.html","60fb7bfc2a6ac3d97c157ed16f59dc55"],["/2021/10/03/socket学习/index.html","52d820acf0321fe358ac0c8d9186f598"],["/2021/10/10/dwm入门/index.html","658199b4cfbc3f7834dec7bc3125131b"],["/2021/10/10/安装ohmyzsh并配置/index.html","1f384e66788dd39f476ed6e839f4016f"],["/2021/10/20/css学习/index.html","c8deecda520c67a9faa74d4a94a75fac"],["/2021/10/20/wm入坑/index.html","8f20d7e0e3d7c2ec4d28d08796968a8f"],["/2021/11/03/微信小程序学习/index.html","387b451c76c789f0123f668d9cb79ae3"],["/2021/11/04/css揭秘/index.html","25eb8a84558e3d100ace7e00ba197c0a"],["/2021/11/05/css-练习/index.html","379eeca74eca4442850f2cadd7ddbee0"],["/2021/11/21/命令集-5/index.html","8936a15a50acbb8228f31316a497e994"],["/2021/11/21/命令集-6/index.html","8e42620083f6919bd95f0ae186d64dec"],["/2021/11/21/命令集-7/index.html","b16c310375016a73e0af4e2b6d9136df"],["/2021/12/01/搭建wordpress/index.html","4c884217b5189a9ba9ad831db8940953"],["/2021/12/08/python操作百度网盘/index.html","ea3a956c0cfb31ae0c3ffd62469dc167"],["/2021/12/14/js爬虫/index.html","a072e4ec4e55f259c7039fdc563ccd3e"],["/2021/12/25/为网站申请ssl证书/index.html","e7d529151e09df1e4ab2266ab210f604"],["/2021/12/29/使用七牛云为网站提供服务/index.html","931a72183c8cf593cd6132f445115228"],["/2021/12/30/jQurey继续学习/index.html","f3f0a747cbff792d4b7411baa95d13d1"],["/2021/12/30/jquery学习/index.html","cfa272e68b1c311885120f70cca0a7e3"],["/2021/12/31/vue学习/index.html","b4464155aa64f27a808c0bc5f5e36846"],["/2022/01/02/疫情自动打卡/index.html","fedf696ce62e8dfb627351a3d938fe67"],["/2022/01/03/javaweb初体验/index.html","8614d35a78a3dce8a731eabf8298c5fe"],["/2022/01/04/codewars练习/index.html","4872a6fc3b240d7b09b40a978b4cdd65"],["/2022/01/05/Spring学习/index.html","f71ff9fcc61b11a218baa16d2a885132"],["/2022/01/05/vue实战/index.html","d6b195deb0e7b6c29c0348a3aed5772d"],["/2022/01/08/gdb-gcc学习/index.html","bee67ca24ee99f27e6eec5bdac199485"],["/2022/01/11/python-opencv学习/index.html","1d3fce469646375442fdeeb84f0f6318"],["/2022/01/12/汇编实战/index.html","f63f5a3fe8c7096469772cdae52fe0a0"],["/2022/01/17/pandas学习/index.html","fe21393e76e5ca4324e53c96d9fcff3c"],["/2022/01/19/可视化图的工具/index.html","3a2ae6a96def15edc21cfaddcbdd4bcc"],["/2022/01/19/机器学习入门/index.html","ed4fc631b9ddf276bd7326b6fff13dd7"],["/2022/01/20/cousera-ML学习/index.html","9ad4dec3ff02c20652d61428ad396604"],["/2022/01/30/typora解绑后出现问题/index.html","7c9f1e245b8fe0a5ada841eab092442f"],["/2022/02/03/NLP学习/index.html","14ec2f0117c03221fa81c8935b1d9a9b"],["/2022/02/04/Web漏洞学习/index.html","14d23cabb35f606c86842c20f233937a"],["/2022/02/04/pyqt学习/index.html","7620ae8fb8861ea3227bf75bd43c7484"],["/2022/02/04/python爬虫/index.html","760785b8b71cc26d29df38933ed6cd9a"],["/2022/02/18/Electron学习/index.html","8ec4a887b1f99d9e7fc93e5589c5e454"],["/2022/02/22/疫情填报字段解析/index.html","76c677ba79d329e50bc6f1191252a18d"],["/2022/02/24/Bomb-lab实验/index.html","261cf1efe12203305ecb5d6ca460d6d7"],["/2022/03/05/nginx学习/index.html","aa9552a4b8dac998c3126c870601c0e0"],["/2022/03/09/汇编原理课程学习/index.html","d846bfb1e9ae337793d81e11ba24bbab"],["/2022/03/11/Keras学习/index.html","a2680ab04e25d27ae854b71374f3e4ce"],["/2022/04/01/graphviz学习/index.html","5969c763db74469fdd75abfb2fb6e6f1"],["/2022/04/07/django学习/index.html","cb90227373570f668e18f83c1bb0673b"],["/2022/04/11/密码破解学习/index.html","0efdbd8c428fa24ea9bd4adfee3aee13"],["/2022/04/12/flex-bison学习/index.html","563337b9c7c58d2b3838416b711cc99b"],["/2022/04/15/pytorch学习/index.html","0af3af52c026a0a099bea214eb16aebc"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","e3d904a57e03321cdb972bdd0363a09e"],["/2022/04/23/写一个音乐播放器/index.html","85d7cd5cee3482f226b38d4b4cebe96c"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","f3576e15a1572b0fecec12728717a544"],["/2022/04/30/GAN学习/index.html","5f1d602fe1cc777c9b928b546dc467e4"],["/2022/05/02/html精学/index.html","e53dffe65236ee5427e22754810a5ec6"],["/2022/05/06/write-a-compiler-by-yourself/index.html","b7d3745fae13fd13e796bf88a0f7a95a"],["/2022/05/30/acwj-01/index.html","09c660c45f7ac0db61a78c54dc389f32"],["/2022/06/14/animeGAN/index.html","53e239e9c7c96abf4fa4bf0b3a9c6c1e"],["/2022/07/09/c-与算法学习/index.html","b235a89adf0c994cd34498469d23140c"],["/2022/09/19/flask学习/index.html","bdd135fb1a82261ad55886c22a5f3686"],["/2022/09/22/cs224w学习/index.html","3853d9f25457bfff1e47c377881fb6d8"],["/2022/09/28/记录一次wp重装/index.html","b0a8cb548ecfb4797c7f134220c4146d"],["/2022/10/01/Obsidian学习/index.html","3dcb0de2cd068dfa3b59a2cea74a7de4"],["/2022/10/08/vue-element-template实战/index.html","af4b29fb36f4114a49fa53b1b8931f4b"],["/2022/10/25/vue网上商城项目/index.html","5d26316ec10895baf31bb83ad9814d8e"],["/2022/11/11/leetcode刷题记录/index.html","216e734f263bcd4a036f95ba7a2babc9"],["/2022/11/11/使用overleaf优雅地写文章/index.html","db69dd1ae7a3feff4341374b92238ecd"],["/2022/11/22/磁力链接与RSS订阅/index.html","b60197efa8e46b39e70599cc4f4734d8"],["/2022/12/11/uniapp申请获取地理位置/index.html","e8a290e52c74a2e19a8fc980ed55845b"],["/2022/12/26/pr剪辑学习/index.html","ceb699705eedc3d1e3effc05bd4e3e3b"],["/2022/12/27/css中的flex和grid布局/index.html","f473adc6d2c58066f07dfcf3f0df01b0"],["/2022/12/28/Flutter学习/index.html","b40be7c638a2ce6682f4be6fcb9bed73"],["/2023/01/01/美化github首页/index.html","04c9e8e03426defde0dd989c15b8546e"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","df552bdc0f2142548ae0b93a87e78180"],["/2023/01/04/构建微信快捷发布文章工具/index.html","5a9f5c66a20240f149e83a36591042be"],["/2023/01/14/dart学习/index.html","815b5c8e1c4243e0a742fe92814c0001"],["/2023/01/23/闲置服务器BT下载影视/index.html","185790a7b65d5e487600dfde795241b7"],["/2023/02/07/TotalCommander使用和学习/index.html","8b601898f537e0a36e629cb5e8be4cf1"],["/2023/02/13/docker学习/index.html","71749a30810475a7ce4140e967c4ab7c"],["/2023/02/17/DLHLP学习/index.html","1ee58c8231b7bcc395e50a1dbfef9449"],["/2023/02/18/学习purecss构建自己的css框架/index.html","4b5ba76457e6c6816ec0f58c43f65630"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","d989c9f68839a8646d6a6b9f452b2928"],["/2023/03/05/STL学习/index.html","43dcfa0dfcd04767f352cfe1f80c4a75"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","1fcd734cc0c24084494e0c73a5160f2c"],["/2023/03/23/实战写浏览器插件/index.html","f574bda442de3e66e8be09494257dc72"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","90f8ab550a7d41d955f45e7f7f37e56d"],["/2023/04/02/EndNote基本使用/index.html","3b318a6756955d68b899b5c64fd2c206"],["/2023/04/04/mne处理脑电数据基本使用/index.html","17ae987629841b97bbda37effbe2de44"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","f70f6675ac02a503e398c346c590ee26"],["/2023/05/02/python中的logging模块/index.html","03208a34eb99b7d108fda866acfb512a"],["/2023/05/07/python的特别方法与装饰器/index.html","c5e6bdc2ff2d7a03c45c2a7f11909341"],["/2023/05/20/Wox插件编写/index.html","c405823678d3fd5e44ee5e96bfc81136"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","842d1d082989b8f7dc694a1816cd2b60"],["/2023/06/03/深入Clash配置文件/index.html","b6c3f97838425772a64059daaf932dc3"],["/about/index.html","dbc2c40b3f48fbe586de716743a1d1b4"],["/archives/2021/04/index.html","b58fc3d30b84e6561efff68ec3d520fd"],["/archives/2021/05/index.html","e5f829a97707f1cc10eb107efaa14c95"],["/archives/2021/06/index.html","590a085949a2c095179387309d3c4d27"],["/archives/2021/07/index.html","7d0c2e9ae19bde7d6def83cc7747cc0d"],["/archives/2021/08/index.html","2115563cff1fcb63490247d814a3aa31"],["/archives/2021/09/index.html","2d799ed01edecced6988f34e3dbce00e"],["/archives/2021/10/index.html","57138d42161a4a811f311fc0cf8d8231"],["/archives/2021/11/index.html","129420fdc97b3c46c76e5b706671ef7a"],["/archives/2021/12/index.html","eb6a80a3a4f585794dadf7be73827e92"],["/archives/2021/index.html","2d97d42428bdb30e15b40c772244bbbb"],["/archives/2022/01/index.html","177251b3a80fb8bc936ebbde9fda9202"],["/archives/2022/02/index.html","a11a30af012fe771c40371bebca2f147"],["/archives/2022/03/index.html","313db3fc76d6400a4e022ef88111d651"],["/archives/2022/04/index.html","576c62529c728797e28ddbddb2b48818"],["/archives/2022/05/index.html","1f6f26559aada280a2e59219156eb5d4"],["/archives/2022/06/index.html","9c29287a58faf0cbe058215fb4154032"],["/archives/2022/07/index.html","a12cbaa8be91a28a7590ab2d12cf1f8a"],["/archives/2022/09/index.html","199b079c90276b41cf8f16ce5de5cb88"],["/archives/2022/10/index.html","898217ba847f8ca48e1025ac3bdad60e"],["/archives/2022/11/index.html","0baa6dad49ece5727ab9f6d870973536"],["/archives/2022/12/index.html","bc184fb7cab5fe486d3cdce5b9e8c7e1"],["/archives/2022/index.html","494d06f6613124d0fb74084180ab9d3e"],["/archives/2023/01/index.html","586dc977b652a8196c5b51a6b51fbfb3"],["/archives/2023/02/index.html","07d69490a1e9c7af6bc689b48ea1bdb0"],["/archives/2023/03/index.html","031dcaa89f588b0e57c9fcd004031c1c"],["/archives/2023/04/index.html","a92ecfd8b30514a891c63255fda29dbe"],["/archives/2023/05/index.html","ceeba2a33cce777e9cc2b1124b8b1022"],["/archives/2023/06/index.html","570f407af177571bfcb0276c5e3f19e7"],["/archives/2023/index.html","788f4450da41368dcfa151fc34905172"],["/archives/index.html","dc0c02d4a610c1225ee4e240b9b2d734"],["/archives/page/2/index.html","6a8ffa6cb78ae90eec1e9fc784a4bf1d"],["/archives/page/3/index.html","404b8fde37b331b8a53434d647381c8e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","a9e74f39c6ce6d8e6a90ff0578c4092a"],["/categories/Linux-study/index.html","52ba010c0614c10d741bd71e0975b86a"],["/categories/ML/index.html","4d07b6f379234ca7b551ec089ad975b4"],["/categories/Nginx/index.html","1c7d64db6d36ba97f7f37b347ef889c7"],["/categories/Spring/index.html","f3fdd24d82e1078790b33b49e074ec10"],["/categories/course/index.html","53d0d1a7885fdb76c0da90465dc0420c"],["/categories/django/index.html","fad0be7584d1821cc044c294f430be0a"],["/categories/fun/index.html","c6946024f1efd57edb90b65c9a05596d"],["/categories/gcc/gdb/index.html","8f024b27dc993035d335e0d635ab0535"],["/categories/gcc/index.html","1abdbb7bf994aea780d9aeb3a08d1096"],["/categories/index.html","1472ca9b222febe02849a79c1e0cccec"],["/categories/java/index.html","5a9d967790ddda7e193b44cdd965bb02"],["/categories/latex/index.html","ba928f9c8b705e2f6e3c6a25225c1008"],["/categories/python/index.html","0e7469266accf54f4a819da0c1beb46a"],["/categories/study/index.html","d265453d5b43dbd0c2698670cd67132e"],["/categories/vue/index.html","ff1f0a06c8750e6c0e6cd9fd254a37a5"],["/categories/误区/index.html","2429d614b8698023f46a2eb9a62f5a67"],["/commonweal/index.html","8c57f55598259b0d8ace059d211dd208"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5d6f061325c1c21e89324bdf5133c938"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","7468e38cf8c54380d2044682da074427"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","01184b32db70fba988283b04584de7b6"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","1b24b2c1be086e544ed5906e1f3371bc"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","c59cdff8ee035560070267af9ad163eb"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","16c89a0e798e146d3fd140abe7f18508"],["/page/11/index.html","c4e6152f675e0c135e65cb9fb3870273"],["/page/12/index.html","3e33f9e8518bfe038c1e71311f2a9d59"],["/page/13/index.html","e8b20c91eb409bfc361eaf929966e081"],["/page/14/index.html","f7bd53939d0c0f1c21469a5f31d0dcc7"],["/page/15/index.html","4d548042cb0807de7cb3e9862d8a2c1e"],["/page/16/index.html","0a08cc150643077c88d6ccbdd7217c0c"],["/page/17/index.html","25ae6ddfe4c23e251935388d55555a67"],["/page/18/index.html","ac2db6042e7c6759ad508f20b97857d9"],["/page/19/index.html","d9a25633e94f6e7270313af4bc25df78"],["/page/2/index.html","fef506c3f01dfae29e686191a32c042b"],["/page/20/index.html","82a32a43b1df8e9e3710e8349541700d"],["/page/21/index.html","005c1880b250f22b486f60aadca2bc16"],["/page/22/index.html","72bf156fb3e2eaf977905b33eb201648"],["/page/23/index.html","c42468ea4abf57f72bb1e1572aa6da24"],["/page/3/index.html","c19d8597fe1a3f832612a2f893b75f58"],["/page/4/index.html","c076fdfa1620da9e310bba1e7de1e511"],["/page/5/index.html","909d6e6c793754a1d8fa10cd11e6b79e"],["/page/6/index.html","8b2a4aeee2710b2fe0cec6bd547e215e"],["/page/7/index.html","52189975201e46b0ff43436258f7586f"],["/page/8/index.html","c54481c3106b6bd3d5200a305d76c22a"],["/page/9/index.html","474f19f41a1e35ec6723b511a92d7f88"],["/resume/index.html","1c362f022a4d0ad2ecc5390e49203c48"],["/schedule/index.html","efc17d945be92a944499efeab793e09c"],["/sitemap/index.html","209a4f95884b1205f4416ed423454d4d"],["/sw-register.js","778554bb2e12bf1189d0ebb8c5e90040"],["/tags/AI/index.html","a631fd0d1ee6a15ea9a796e2e4108ca9"],["/tags/BT/index.html","0615d15e7d61aa8638496e26d538643f"],["/tags/BaiduNetdisk/index.html","4c30058300ac16c3c97961c28f1f27ce"],["/tags/Bootstrap5/index.html","887e4d2cb03c34207bd44c1d54b95c16"],["/tags/CSS3/index.html","8130d8ae12b73ed7c3614c299c90852d"],["/tags/Centos/index.html","3c1ed2ad647fb979ced0686efac9da75"],["/tags/EEG/index.html","37c337fd6c40afd03381c89c99c2f457"],["/tags/Electron/index.html","27b1f91fb50f0f547ebcf067a48ee563"],["/tags/ElementUI/index.html","3adec5f4f41e349b271243ac0ff05ea5"],["/tags/Flutter/index.html","6825787cab68f6e7f0adc98f478f1703"],["/tags/GAN/index.html","a2f3ccb86240903ea14a2c49982b09e7"],["/tags/GUI/index.html","9c693c1170678d857f836f323c45c180"],["/tags/Git/index.html","aa7acfc21ed00a83e844c6376ed048bd"],["/tags/JavaScript/index.html","80a4b48f8099bd98f681ecfb376a7f3d"],["/tags/Keras/index.html","71943ac58e3be626b4c66fe45f387922"],["/tags/Linux/index.html","12aeb0a5fe3387d4e708a54c93b0fd1a"],["/tags/ML/index.html","db80cd113326a94e8879df2e385f1013"],["/tags/MNE/index.html","cb816da7c33e3e1c62f26c98d055299f"],["/tags/NLP学习/index.html","bbdc44622dfa5da32320a9764ce0bdaf"],["/tags/Nginx/index.html","18cfa5285f6608b982008d759d6b66bf"],["/tags/OSS存储/index.html","3d9bcb914d15a6d287cfac0b7d926ea4"],["/tags/Obsidian/index.html","519a27786ffbfbdbede215694a94c293"],["/tags/Qt/index.html","850bf0723596acedb17733225c7bf042"],["/tags/RSS/index.html","763931761288c68dccf5e078ee3876dc"],["/tags/SSL/index.html","488572d304210384fecdd0f4f5c2b5c1"],["/tags/Scrapy/index.html","6819ee3b184215dfb20439fb3c368209"],["/tags/Speech/index.html","5d49f218c03562d67c348aa633f06c4a"],["/tags/TotalCommander/index.html","0e3494c7ad93216a539ec3c823b5ba66"],["/tags/VPN/index.html","795058b8049cabf6df745f3c16e1908a"],["/tags/Web/index.html","312830b961f6f2daddb7e32cdf222e35"],["/tags/algorithm/index.html","449e07ad9081795a1cdb9343c8bbd025"],["/tags/bison/index.html","724573b8b2f666b361b32eaff391fb8e"],["/tags/bomb-lab/index.html","599f1b6863d4512401f9f2e9f8b4db89"],["/tags/c/index.html","2cf9a2053601797f860440f6d546bd12"],["/tags/cheerio/index.html","9c25bb8e87bba0e3339ba10a43c0536f"],["/tags/codewars/index.html","1381ba66d20c3239d131fe14e8fc001f"],["/tags/compile/index.html","c2c9a30107990cf5e119e239eff84ade"],["/tags/compiler/index.html","bf887cb3b951f1840df18198a840f77f"],["/tags/cors/index.html","cdfd249e7b0b6c739a146130b1e56d48"],["/tags/course/index.html","957565108c1721248216ebb2efba5715"],["/tags/cpp/index.html","2f0dee0c09912ad1ee73321fe57164c0"],["/tags/crypto/index.html","8d10e7126458d9733b617579f27fb201"],["/tags/csapp/index.html","a05b4335e4f459e5edea730205bee750"],["/tags/csp/index.html","916fbef3866a13e6de3bb377917cd86b"],["/tags/css/index.html","694678db67ea7706f58b5406c8ccdef4"],["/tags/dart/index.html","32da1995ce28c6f784c9f3fe9b17a429"],["/tags/data-structure/index.html","100d5fd639580856db9b5090eba71f60"],["/tags/database/index.html","91446ad8a9730fbd7f4ae30032fd5823"],["/tags/deep-learning/index.html","63f01f96db6d917ad7ed88419e368066"],["/tags/django/index.html","eec146a600b218d88073950b05f579a8"],["/tags/docker/index.html","36ab6da950e6e48c87a6ec3179f3bdd8"],["/tags/dwm/index.html","7efe512cfcbd0a76927b2dc2221d0924"],["/tags/exercise/index.html","46577c2d7ed04606b037ab2b011d61fe"],["/tags/filebrowser/index.html","f411b25030108911beb2e1bc81f3c6e6"],["/tags/flask/index.html","c44444f1b9fa2465c42e60ed74d6ad7d"],["/tags/flex/index.html","51800a36be8c5be42946990c6f874405"],["/tags/front/index.html","8952ab13dc95fcecb8274379e8bdfffa"],["/tags/gcc/index.html","11c6218c017ae1cec080ebb2731f8ab8"],["/tags/gdb/index.html","4cb507273431b015326267f74c2d892f"],["/tags/github-profile/index.html","aa57256cd2879cf36e1e8010a20d110e"],["/tags/github/index.html","2c80aee8c80e9bd00bc959eb09ba5b22"],["/tags/graphviz/index.html","821ba80d08083e00a20100a36265f36b"],["/tags/grid/index.html","f80731029b2dcb808052697ee61e0216"],["/tags/html/index.html","5a7eecbb84be6ffb05b776fea274af85"],["/tags/i3wm/index.html","75bfc4bd8f565707445bbe2790659722"],["/tags/index.html","89540de7dbe38d8c243f1a569d2c4536"],["/tags/issue/index.html","bf9105a8e783445c118198c6120b72c3"],["/tags/jQuery/index.html","9b953b12264beaa85ec408f54b12e762"],["/tags/java/index.html","42da1a338e846a1d991c63ecbcdf95be"],["/tags/js/index.html","58dcb5f89cdc6896a738506e3ac3dfb6"],["/tags/latex/index.html","f679be50d6062ba9ae00e3cfe0b12cda"],["/tags/leetcode/index.html","1cd81388386a2cf2f891e3c74c4ba92b"],["/tags/lex/index.html","a5c7bef93e2749e180963bf92fa0cbdb"],["/tags/logging/index.html","86bc2b5570991beb835a4a7d42a37d2a"],["/tags/material/index.html","46af9e0dd29ca121299f196258d372ff"],["/tags/music-player/index.html","dec30d7b2c6afe80b4cc953afdf04f26"],["/tags/nodejs/index.html","1e88892334d51a0660ecfe89ab44063e"],["/tags/noj/index.html","56d12333739b5eab66177761f62a18a5"],["/tags/opencv/index.html","20550125c647249744102884e8fb80eb"],["/tags/overleaf/index.html","0b7226352b83961612d02cdc1125d2d2"],["/tags/pandas/index.html","f67cb198e1c17697f04007c628e09487"],["/tags/paper/index.html","79e1bf7d44ec4934e1cbc81df9798412"],["/tags/premiere-pro/index.html","2b44a6741ad14c4344a99b42763e0072"],["/tags/proxy/index.html","04e34500f49f03a08dc39eb8a933844a"],["/tags/pure-css/index.html","862618fa3d4ecd9460f41ff46c1964c6"],["/tags/pygame/index.html","7d19f749e4d296f2d849de782c56e328"],["/tags/python/index.html","77636e26d9ad725f57df04467e1136de"],["/tags/python/page/2/index.html","282c7ca12bc0a9adcafe9840e7111712"],["/tags/pytorch/index.html","1db3ab58e3746513dae4118c81b27987"],["/tags/reading/index.html","139326e8d8314667c9ef713efa85af05"],["/tags/request/index.html","02e6bc4ddb1949d7df55f68d747726b2"],["/tags/requests/index.html","5936400cd6b401b1155c37cb99a41f18"],["/tags/security/index.html","17deaa3336b1836879d58a115269b41d"],["/tags/shell/index.html","3f00ab901eb8c3621e37a4e975391afd"],["/tags/sign-in/index.html","d02eeb8ed4e3d82d718770142cd74e54"],["/tags/socket/index.html","ea0aeeb41c335f5125ef99c1e3c0659d"],["/tags/spider/index.html","98c7b5cee6991e07029355c8da60e97a"],["/tags/splash/index.html","7127a719f9a2405d49a2fd92726b31d6"],["/tags/stl/index.html","9048d3832b95abce131b9949efb6b549"],["/tags/sumatra/index.html","a811d6ed723fe97fdc7a41235ae06610"],["/tags/superagent/index.html","a056b5a4f081c0821d3856c1621fd9ab"],["/tags/tensorlow/index.html","168d5c794eeb982b84e8aa51b136ea63"],["/tags/tex/index.html","23e3635171e8193e3c493450b677bcec"],["/tags/thesis/index.html","6cf1cd31b0858549b67742aaf454f2f8"],["/tags/threading/index.html","05ee9fec35d64b86f668559be5642aaf"],["/tags/tkinter/index.html","4bece3bec6db76bf23b936e10071a8ed"],["/tags/torrent/index.html","f5199fbca58c27cae7b9fc570e17979b"],["/tags/tutorial/index.html","b5297db622e85dd4ee69dbda3b3fcb87"],["/tags/typora/index.html","068e26e427dab7169043b1ef0a4110db"],["/tags/uniapp/index.html","a5716c6bcda5c0d46920a8fb47899069"],["/tags/vite/index.html","b98c1a31deb5b2caa49cb032c35bceec"],["/tags/vscode/index.html","0294bc0b9da068c11d4d4ea378eef4b1"],["/tags/vue-element-template/index.html","28825832bb7a2a464058a08ef99605d0"],["/tags/vue/index.html","8bd98281ddacd4535a88895671d357d4"],["/tags/vue2/index.html","ed520e0e55e235154a6fda25eeedd500"],["/tags/vue3-x/index.html","f0b2cd8d2970b437632fd59f8e5d9eaf"],["/tags/wechat/index.html","73a40925d6009aa22be3c5838a860903"],["/tags/wm/index.html","5cf42c51d152c36e3a338841f676b7c1"],["/tags/wordpress/index.html","607be8ceda6be3fe12df652f4922e223"],["/tags/workflow/index.html","8ff7cc386769a15c62fcce7a2ea501b3"],["/tags/xpath/index.html","57a5351b52e35d83a962c9cc74e36e79"],["/tags/yacc/index.html","880d18bc64f4bdc86ba45451cdc4f0e4"],["/tags/zsh/index.html","44d69721a700279f5fc6eb80183dc93d"],["/tags/七牛云/index.html","0aa1d634529a30731a4efe203a90b7c0"],["/tags/函数/index.html","efb0289306fbc7d39e390253d2604f25"],["/tags/剪辑/index.html","9090ecdeb31934de55f683adc91b2cf6"],["/tags/存储/index.html","edd006ad5a7ab98d5ad5c32d48c8683f"],["/tags/实战/index.html","72079d1e2355b49864bdd7987872cd74"],["/tags/工具使用/index.html","77c7ba550595cbf0ec798d4d98af01f4"],["/tags/建站/index.html","36ed1523812c684bfa9ad314cec7820b"],["/tags/微信小程序/index.html","543d08fb6f66e40404cc93791128308a"],["/tags/指针/index.html","056790e5cf0d879fbc7dd5bc390f4410"],["/tags/插件/index.html","7d09f3a491dc1575d3cd7631882e6ba9"],["/tags/效率提升/index.html","546ed90b0a57ada682bf8d08e9c7f68e"],["/tags/日志/index.html","002f20c7242e67db8982ba28909138bf"],["/tags/汇编/index.html","1690bcec96826573e09d2ff06cd1e483"],["/tags/油猴脚本/index.html","4d7b605ae0a907990c6fc7061b675229"],["/tags/浏览器/index.html","74ae539c8850acff098657a9280dfac5"],["/tags/爬虫/index.html","fd334ba4a0f3f969e2853b20d5e30636"],["/tags/算法/index.html","49f1976ff7df3a16997159438139000b"],["/tags/编译原理/index.html","9c8506452121646096e959c4aed682fc"],["/tags/获取地理位置/index.html","19a7b028aa35a3d6b30f87af8a9e3cd1"]];
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
