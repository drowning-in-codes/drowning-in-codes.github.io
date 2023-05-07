/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","23ef1d1b49bee537371220a729ff969e"],["/2021/04/20/稀疏矩阵/index.html","0477c39de162bad01257cb002fc2289c"],["/2021/04/23/广义表简介/index.html","e0b98ebe772974c49659907f27655881"],["/2021/04/29/关于指针和函数/index.html","4b27516579f8c1f8800fd2a71369e470"],["/2021/05/10/哈夫曼编-译码/index.html","0588010106a49b967dc80c1a005d9c32"],["/2021/05/17/数据结构noj_2/index.html","2a944de90bf6a17c611135a8838f36d6"],["/2021/05/30/数据结构试验/index.html","8f2ea3959d584b7385e2c4494137fa03"],["/2021/06/12/数据结构noj-3/index.html","951b201884c3900bf7f30b697570a0a0"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","fcb6b74253e11e8e9f46fd49899d05f7"],["/2021/07/08/课程资源分享/index.html","0214b2d19c113deab6e9cdb699d88792"],["/2021/07/20/Scrapy-下载图片-文件/index.html","4a5d278cc4fb24b09f18bb0eae09d93b"],["/2021/07/21/Scrapy-动态网页爬取/index.html","c26f272c86c243acef9bc1ea23803849"],["/2021/07/21/疫情打卡/index.html","7243cce0145f53786371b06a651d7a95"],["/2021/07/29/Scrapy代理设置/index.html","a8d49393d5293979a2894d8f2c5da671"],["/2021/07/29/数据库认识/index.html","ad133081cea1db44eddf54d89bb0ef68"],["/2021/07/31/Python多线程学习/index.html","c90e73a13801d7b725cb42034c7b7d79"],["/2021/07/31/tkinter-requests练习/index.html","f8350c1c935b964b223106eba4d7517e"],["/2021/08/10/Git学习/index.html","64e5f33fc20fa23bfb3a20ef07d47e70"],["/2021/08/15/pygame实践-1/index.html","86b0a7e948b6a238504ebb489ddbf566"],["/2021/09/06/微信小程序开发/index.html","e821834722451d38462a1636bc6e97e3"],["/2021/09/21/命令集-1/index.html","d099cd7ed20d3f158dce545209307e63"],["/2021/09/21/命令集-2/index.html","f4cab5af1ed8a3a394df5254cf1c6ab8"],["/2021/09/21/命令集-3/index.html","bbf39ec1e251de37bf19ddfc50d3c281"],["/2021/09/21/命令集-4/index.html","ba4d685380dba2e7d3c1c7ad7e8c4630"],["/2021/10/03/socket学习/index.html","e69b2702e0ad6591ce78ee89c1e2d5e4"],["/2021/10/10/dwm入门/index.html","6e1918d1c8a3cb91936f146118d4efdf"],["/2021/10/10/安装ohmyzsh并配置/index.html","fb8ece9acdf93873ede09cc1f6183d55"],["/2021/10/20/css学习/index.html","e13300b8b021f31636e2102caa5c425d"],["/2021/10/20/wm入坑/index.html","9691c0d5174386cd718c1242bad23344"],["/2021/11/03/微信小程序学习/index.html","eba805dd92d40c1732a2b43fea0b5559"],["/2021/11/04/css揭秘/index.html","5df65f946b81574e9a6e46ee8cd30014"],["/2021/11/05/css-练习/index.html","370808fddfab0bc1bb1ae3282d8eb59e"],["/2021/11/21/命令集-5/index.html","e5aea5b4bb20fa6e60731b2cac7e5160"],["/2021/11/21/命令集-6/index.html","84e190ebab692e347ae0384af1ffbf18"],["/2021/11/21/命令集-7/index.html","7fa3219f90a3d36e33ae6a9ba5ddfce4"],["/2021/12/01/搭建wordpress/index.html","b2b36436842eafdc0cad93aa20a9e1c9"],["/2021/12/08/python操作百度网盘/index.html","e5d66481d1d8adaa6afbeb5542449c24"],["/2021/12/14/js爬虫/index.html","cf1da776859af1fb1e8fb407ff8d5f4d"],["/2021/12/25/为网站申请ssl证书/index.html","cd26086eb02aa30505014a6e293c84e4"],["/2021/12/29/使用七牛云为网站提供服务/index.html","fcd2d707015900463508c51031e85a4d"],["/2021/12/30/jQurey继续学习/index.html","f95bcf5d124e1c57883b9cafc98086e7"],["/2021/12/30/jquery学习/index.html","00adb8829843303f93a45f0ade3d4081"],["/2021/12/31/vue学习/index.html","924c453313223213563db14ec9230f11"],["/2022/01/02/疫情自动打卡/index.html","3f7b8a0b0556e21ba525f347b0131009"],["/2022/01/03/javaweb初体验/index.html","235719fb5c9411063231a2c70d6b9570"],["/2022/01/04/codewars练习/index.html","3033bb3ef736e2707fb669d1403fced4"],["/2022/01/05/Spring学习/index.html","7ff04ebf2c50b0baab0292f4eb3f1670"],["/2022/01/05/vue实战/index.html","4d94931f19c9f751acb5abcbe24975e2"],["/2022/01/08/gdb-gcc学习/index.html","1c851712a6650ac5831a761355e87e56"],["/2022/01/11/python-opencv学习/index.html","6f6149f864acaa0379de16dfe76ae48c"],["/2022/01/12/汇编实战/index.html","d08a3886ab000845ffefafa4b1727587"],["/2022/01/17/pandas学习/index.html","0591957aacd10440405f2f5abb74961f"],["/2022/01/19/可视化图的工具/index.html","4e10c6ce76a8622977b41cc25d13a103"],["/2022/01/19/机器学习入门/index.html","f2d75681ddb33dbc982737aeb9651ce8"],["/2022/01/20/cousera-ML学习/index.html","184b9dffa78acb84c52daa07b5788e2e"],["/2022/01/30/typora解绑后出现问题/index.html","0eb68a9acbd712d69e8f00cbcd36343e"],["/2022/02/03/NLP学习/index.html","a576bef688a8a2750dfbd04ced12b314"],["/2022/02/04/Web漏洞学习/index.html","e545316663c9182cffd09b5bd0568045"],["/2022/02/04/pyqt学习/index.html","08a60b6245834114a93f88bcbbd83ab5"],["/2022/02/04/python爬虫/index.html","e11e889fed27e47d4e9e3550e19de0b2"],["/2022/02/18/Electron学习/index.html","d41bb4df54e0792a1fc2d16e9e67db30"],["/2022/02/22/疫情填报字段解析/index.html","5e1a4a69cbe4b914adca7f3e0a71a97e"],["/2022/02/24/Bomb-lab实验/index.html","5e46696ac4eab5ee5fda6c2596b1a7d3"],["/2022/03/05/nginx学习/index.html","8be1d83ca24a1bda178da7f044a6ccca"],["/2022/03/09/汇编原理课程学习/index.html","a75784abfb0e4b0e4c954c725cd86417"],["/2022/03/11/Keras学习/index.html","721e895963c0eb54c9566e0e9e4c448a"],["/2022/04/01/graphviz学习/index.html","0ceb0dd3ddca64aeb3dd413da5c81f72"],["/2022/04/07/django学习/index.html","d44f14807cf6960382d879c836a13eff"],["/2022/04/11/密码破解学习/index.html","72eb2926fc48114ed9b74b484df89eec"],["/2022/04/12/flex-bison学习/index.html","2bdac014cca854be9232da7a1c9c69f5"],["/2022/04/15/pytorch学习/index.html","a2f091509d4bcc541b78123a791e596a"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","74ca72e79dec5ffc0253f01558ce12b0"],["/2022/04/23/写一个音乐播放器/index.html","c30581404d2e3dafc882b83628368d88"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","4d1b9874013524d4205bcffcff3a8303"],["/2022/04/30/GAN学习/index.html","e695f14eb7bb6eb794b40dbd75b945b6"],["/2022/05/02/html精学/index.html","48cde3525f2f2f264972f01a28e994b0"],["/2022/05/06/write-a-compiler-by-yourself/index.html","54ba5184f99f1924bf9ac950cc841299"],["/2022/05/30/acwj-01/index.html","2771c8c6be9407c7f2e0517ab331ab2a"],["/2022/06/14/animeGAN/index.html","19785cc245ad7bcc596283c4f0b413b5"],["/2022/07/09/c-与算法学习/index.html","1445f192aaf72eaf912645d28158b581"],["/2022/09/19/flask学习/index.html","b38964bf61ce09fc9c592fe0824426fa"],["/2022/09/22/cs224w学习/index.html","bd6668056a4b6b6815af00b2302fbc53"],["/2022/09/28/记录一次wp重装/index.html","33a0ac1201eccb180aaf135cde2b3fef"],["/2022/10/01/Obsidian学习/index.html","3b729cd392e6abd3164c50b3bc433bcd"],["/2022/10/08/vue-element-template实战/index.html","5591e44361f3b35536c8899bcc815d2e"],["/2022/10/25/vue网上商城项目/index.html","01a615d0c467d697705b02e1f888ec40"],["/2022/11/11/leetcode刷题记录/index.html","8481294b931aa091318c81e6a847057e"],["/2022/11/11/使用overleaf优雅地写文章/index.html","bd948280b3c61bb2fc156bb4c21cfe71"],["/2022/11/22/磁力链接与RSS订阅/index.html","d2fe64dfa74c1e1ca62c82ac38327a58"],["/2022/12/11/uniapp申请获取地理位置/index.html","f4cad57cdbffe8fdaf55afeadfc5aa1c"],["/2022/12/26/pr剪辑学习/index.html","5b40e19eed1046037a7298c3b7f6e2a1"],["/2022/12/27/css中的flex和grid布局/index.html","14869e63598891465353547e78871aa6"],["/2022/12/28/Flutter学习/index.html","3c2b1287c439a7e86f41d1713457a88d"],["/2023/01/01/美化github首页/index.html","5d21a5a5e21ee3a8182de6b630ff56fa"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","78f3db6fa11a2520e8a03901cb1e44bc"],["/2023/01/04/构建微信快捷发布文章工具/index.html","543e0e2210afd242ce9e6c33f05935b1"],["/2023/01/14/dart学习/index.html","13046e26e2d25ce6cf780211d2bd2557"],["/2023/01/23/闲置服务器BT下载影视/index.html","dcc6c077720e6a4d88cf30dab8eb2a79"],["/2023/02/07/TotalCommander使用和学习/index.html","1bfe643205a0f50bf8773559e7932cce"],["/2023/02/13/docker学习/index.html","3d8183b8af2b0909021fac4200e24e87"],["/2023/02/17/DLHLP学习/index.html","757994687c9ae1c2cc110c5cd9ac9837"],["/2023/02/18/学习purecss构建自己的css框架/index.html","102afc030dba88d15e350fa74c4bf17a"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","db935e1662b82af623bd1669bc5eca69"],["/2023/03/05/STL学习/index.html","97cd5c96da88b48a83f83f7b94557c5b"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","10faed411fb04ab498623866776af7b8"],["/2023/03/23/实战写浏览器插件/index.html","25c4a01fed645a550c046c2c057b6e76"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","76cf2456e4a4c1243f3320357f50819c"],["/2023/04/02/EndNote基本使用/index.html","7ea076cc3d6b9227987b1caef8e1e735"],["/2023/04/04/mne处理脑电数据基本使用/index.html","13c39e0b670880eff5ce4a9e722c68ff"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","bff984be106184fb00e1f5eac58b853d"],["/2023/05/02/python中的logging模块/index.html","8583a0a8df32cce66c88c5957bafb1e8"],["/2023/05/07/python的特别方法与装饰器/index.html","c982b8dd9ee451742a885c446c7d83cf"],["/about/index.html","c9fcb2df5ae82cabf96a1177b513e321"],["/archives/2021/04/index.html","21735fdf84ae016a34127c7664624597"],["/archives/2021/05/index.html","3f00c661bd4dccefa4b328b8367b1f06"],["/archives/2021/06/index.html","265f58ca04a039a5505ba4fb842313b6"],["/archives/2021/07/index.html","6efaa110ff2d71258f8ae5d534babc6b"],["/archives/2021/08/index.html","6b02564539497a15c020fd25d4110b22"],["/archives/2021/09/index.html","f52aae8767db96b52a88d2547d816bf8"],["/archives/2021/10/index.html","51d233b4e58a15f52516cea0b3f50c2b"],["/archives/2021/11/index.html","1eede8d44657f047d337339aa9493fa8"],["/archives/2021/12/index.html","2628cf91807fecf7acba9514a76f7f70"],["/archives/2021/index.html","a6c99b2d7e046120d1016c392d4c6086"],["/archives/2022/01/index.html","231e471fc66147c71d17d0d95de03b2e"],["/archives/2022/02/index.html","58e99442a415021fb93c6455f5e5dde0"],["/archives/2022/03/index.html","3d20c9e8681019aec7a4da814e7d4e87"],["/archives/2022/04/index.html","9bb4d68036f4b10e908d997081cf784d"],["/archives/2022/05/index.html","bb84e2bd55341ef67e271e0b06687841"],["/archives/2022/06/index.html","06a2d766b75dc6a6c346f9a9737a7f4f"],["/archives/2022/07/index.html","65d6cb33de4c8b966625c7287dcec7c1"],["/archives/2022/09/index.html","d12a3f7fa454f31dda60e6b84e61e2b1"],["/archives/2022/10/index.html","bc2adbac56d0c1a93e420a73f7110596"],["/archives/2022/11/index.html","1a778e4237f1282bde26b83d9385abab"],["/archives/2022/12/index.html","3c06de8be973272e3cfb934e90b9585e"],["/archives/2022/index.html","6d3797952cdefcc9b961041e34944357"],["/archives/2023/01/index.html","b87c1123b0ffd8ee205af0ea0199e3d6"],["/archives/2023/02/index.html","6f7517336942cbd6b888b9a9e908382e"],["/archives/2023/03/index.html","f040301463c98d223372b8d46d04e321"],["/archives/2023/04/index.html","2686c7b1df67a587e2e11c889bb788b2"],["/archives/2023/05/index.html","f2089b6795cb35971ffa2e8a61e2d97f"],["/archives/2023/index.html","8c08d6021c13bd39b755d9502298c292"],["/archives/index.html","088d08e8a1fc310bd4317222447e2640"],["/archives/page/2/index.html","88784ce4ce6e34fae7eafafe0cb89aac"],["/archives/page/3/index.html","7df90f98264b51e22eaeaa1c38fb6da4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","2786ca4e29e3871f6bc31a34339c90b5"],["/categories/Linux-study/index.html","a937ed4692ce9aff81aedc75921a5583"],["/categories/ML/index.html","63c9f9c5b8e155762468bd19d73c6484"],["/categories/Nginx/index.html","a3814a96d431f977683f11b60fe8758b"],["/categories/Spring/index.html","f1c4f3f75792e8d3518ac1ed043cf772"],["/categories/course/index.html","f968b431a2526e334d3ecfbcf40580b3"],["/categories/django/index.html","2d010b991eaf2272e81cb88dda432d66"],["/categories/fun/index.html","ed5c525db9769835034c3350ea70189c"],["/categories/gcc/gdb/index.html","760e9bebff94ed131af08a4696443231"],["/categories/gcc/index.html","6ba310f2b01cc366ae7adb7bec8a527c"],["/categories/index.html","c92f7b87aa5ea3c2e21865009b19b319"],["/categories/java/index.html","6d1d9b23c049cb45a9033533dd97485e"],["/categories/latex/index.html","60e84659ed68ebb7b923ed4fe8522701"],["/categories/python/index.html","53b583427bd2ec16e5fa02c1ee52de6f"],["/categories/study/index.html","61c4b965adf9cc2c18d70f33f7837049"],["/categories/vue/index.html","b93783b770f09cf8a639716f6b8c03bb"],["/categories/误区/index.html","8f11b6d28a302144da573c77c901f81c"],["/commonweal/index.html","a05fa980898cf643e5b8d61968acf5c0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c3270ab809a954c00f58dbc87a046eff"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","dfa8c399567c87e1aa8f0953f87b6dd9"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","61eb36d99e6d5f273bd8676fe05e25c8"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","ab51d5e6a5bd9bdbcfd7a25c91bb9b18"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","975bd8720ba082e8e54a615390363bdd"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","4aa406713e1866718db8411805f9c167"],["/page/11/index.html","742963041961217fd01709054f700ee8"],["/page/12/index.html","c977fa0e05ea5173c2644b810504332d"],["/page/13/index.html","d7fc8a8186caef8140a84a7908f59af7"],["/page/14/index.html","513237f183cf3a5c8e2f5cdcd900ba98"],["/page/15/index.html","b95e8cf3696e53a49cf1982ea982f0d5"],["/page/16/index.html","daf6215ca6acf220accea607c976ce90"],["/page/17/index.html","ff3a363854ae0b5482d5313dc8ff7725"],["/page/18/index.html","04e22413226e7ae8db478a01edab1871"],["/page/19/index.html","3a69b6a5ea5ccabb9d4cf43b4b0eca9d"],["/page/2/index.html","257bf571217f8b1c96f902a559a7082e"],["/page/20/index.html","0b673b344b576b0d332c19d00bee72c0"],["/page/21/index.html","21346417e06234fc1783f042f9857632"],["/page/22/index.html","a4b1421b2e80bf858307d36dd5d6cddb"],["/page/23/index.html","a75881363ec6a5e4cc0159d251274a9e"],["/page/3/index.html","aab32223e7a4d5db30e4f92718a3d3ce"],["/page/4/index.html","39b6cd8cb4f183a55b1190e98251a913"],["/page/5/index.html","7a52073e04f2ccc741fbd71fbf07ae5b"],["/page/6/index.html","1572cc64de7919f4e008895b9ec97134"],["/page/7/index.html","481a6d5e2e9cd0382a1a9d5733507226"],["/page/8/index.html","f363b1b86c53fe52b8b8fb8688ad75a5"],["/page/9/index.html","6f899a0c9c5c6a6c7980febc4aa71f0b"],["/resume/index.html","4c27109bbc78b9b521bfd907e402b0cf"],["/schedule/index.html","071d15fb009eb4078bbab6a0f3e74f31"],["/sitemap/index.html","41c780e6944abeb92ec378fd26e0af22"],["/sw-register.js","cf904444285617955eaf6dbced6b09bd"],["/tags/AI/index.html","41271d6c9563bc283afd98ed65818959"],["/tags/BT/index.html","2f757aed3bac1bac7175dd70d1026663"],["/tags/BaiduNetdisk/index.html","faced7e5606152610c805163ed4575c0"],["/tags/Bootstrap5/index.html","a6fb634a1103f11f872a682c92a0689f"],["/tags/CSS3/index.html","54003cb63e76910300c375f14363b544"],["/tags/Centos/index.html","c4e659c854705cca6de865e8f58bfb67"],["/tags/EEG/index.html","b55320f1158387f358c7150f17f4f3ce"],["/tags/Electron/index.html","4a8676c9e0d2c6cdb60787104b8c6d0e"],["/tags/ElementUI/index.html","1450779d273e674439254e81c097b15c"],["/tags/Flutter/index.html","6f13952e08869cb5e6f0ccc77f407c33"],["/tags/GAN/index.html","4e1c2f35fc8248a7d12b744897cde936"],["/tags/GUI/index.html","7d435af20a6294f4b6b20484c198878f"],["/tags/Git/index.html","1737ce25b67baaa348d38014dc21965f"],["/tags/JavaScript/index.html","a977cd58a6c97077529266ad7d604c9c"],["/tags/Keras/index.html","7f2f68a190df71f67f0744b2a4ac08cd"],["/tags/Linux/index.html","a50d408b91a558bc659e706b34c3826f"],["/tags/ML/index.html","f989c92d57cfad9740d7130c2097ac5e"],["/tags/MNE/index.html","b3617a9344d6faa3eb89eb57b404dfdb"],["/tags/NLP学习/index.html","a2909c0c501c61e61fec626438968a71"],["/tags/Nginx/index.html","aeec450a1f3ca7f53e969be63078997b"],["/tags/OSS存储/index.html","3d77bb16e0e3d07f895761d4512a769e"],["/tags/Obsidian/index.html","c4b7335915bd7561c63a074d3f2416c6"],["/tags/Qt/index.html","433692fd5811cfda01f1c609bcda2ec5"],["/tags/RSS/index.html","fa5edb49e47458112b4aa3c4d18f06a0"],["/tags/SSL/index.html","2ea5f8d98b523c775e78e43d7ef5b4b4"],["/tags/Scrapy/index.html","3b23a06bd0fdb413534f2040ff9f34e0"],["/tags/Speech/index.html","e9306016418b8693ec17b4a6a4143fed"],["/tags/TotalCommander/index.html","fff6ab5e1d59d4215136719b829c8b62"],["/tags/Web/index.html","dca5a761cbbeee7c8131a89201291ed0"],["/tags/algorithm/index.html","dff38980459d0ca5da5f5ac00f527de6"],["/tags/bison/index.html","e6c39e2a91d5604d091ffdfed299eda5"],["/tags/bomb-lab/index.html","9656d21c3bf3e41c55af43db5ab120da"],["/tags/c/index.html","366339153701da882106adba640251bc"],["/tags/cheerio/index.html","a2829bd475385055ce9cbb4d20398073"],["/tags/codewars/index.html","86771a465b930db8b5580b5a1d035b23"],["/tags/compile/index.html","a684c952e87d52f710a95bc2f77f9700"],["/tags/compiler/index.html","1ed4a8de95c25f4fe5f763f3fbd00338"],["/tags/cors/index.html","a2e044fb47093ce665409f8db8c7e880"],["/tags/course/index.html","2f1fbe2374150b314fbdb4ae65e8a1bb"],["/tags/cpp/index.html","90ed3bb2c63d39838f2785e2280d1a6d"],["/tags/crypto/index.html","b3bb3bf43ef1bf246589d735abeeecf9"],["/tags/csapp/index.html","d958f1ed571bf5ae7e935f0d31548c71"],["/tags/csp/index.html","1b766a3fc64c5caabbc7e1896572317d"],["/tags/css/index.html","a8fe169a50708ceee2cc4e74cda82ba4"],["/tags/dart/index.html","14fd419addc831bb10e19ab37aa3a332"],["/tags/data-structure/index.html","4b2cd93f391630bb9841b71554061223"],["/tags/database/index.html","9cc602f1609cbb2dfbe9d795c09a8c5c"],["/tags/deep-learning/index.html","ed06472f52ce82f70c41c4ea88e07438"],["/tags/django/index.html","2ab02c4a286b1b2dca3a208f85c7bb1c"],["/tags/docker/index.html","434a34ff1e78198a9fb19f9cc1b42c28"],["/tags/dwm/index.html","b07ffcd5847c9ef9e708acab261e39c2"],["/tags/exercise/index.html","1e0b0386a1816f76095ce21324196ba3"],["/tags/filebrowser/index.html","415bd578051d9469a67224155893faa8"],["/tags/flask/index.html","b867fd42aabc8262df4db8134a9be42f"],["/tags/flex/index.html","c15a1d9e88130bd2affe5e4206721727"],["/tags/front/index.html","9fb9c86cb33fb2d12e1490bc0713d2d2"],["/tags/gcc/index.html","8a18a1427786da39519ebaa301260817"],["/tags/gdb/index.html","e884d52f2e783b1522c2432bf1b1eabc"],["/tags/github-profile/index.html","611d25154b7b89918a15a799614b5419"],["/tags/github/index.html","c8ebb1f7eac31469ed91e75851dd9d5f"],["/tags/graphviz/index.html","552b62b5b8cd460a6323114bd0b528bd"],["/tags/grid/index.html","48b17dde6bf414b91601b80e81f5ff4d"],["/tags/html/index.html","5d05000162388152469ef3d76a26f29d"],["/tags/i3wm/index.html","9b89d58d9f5acf745a38ef62dbc35b9e"],["/tags/index.html","c18b2c11675180ff1a434d94bac9301f"],["/tags/issue/index.html","41d76022fa95cf27340a4409ee63c72e"],["/tags/jQuery/index.html","ca766b6ad3f833763b9db3e8e39939b0"],["/tags/java/index.html","d33d145b132fe45f4b76c7a8b94f8ad8"],["/tags/js/index.html","a8ec5abed70a5b970bc2d7cde0ecc26a"],["/tags/latex/index.html","f3290dc1ca4f30be8af7f2532a289cb1"],["/tags/leetcode/index.html","3f685f3156c78b9234a9bad6d3bbc4c1"],["/tags/lex/index.html","aff786ba4ddc40cdb35bdd6ed6b4148e"],["/tags/logging/index.html","9dda7ec707ab550f01137ad9d9d00fbc"],["/tags/material/index.html","e157b0245c5c10bca018a3aa0f71ac49"],["/tags/music-player/index.html","c00b071b16c10f9b751e2cb7df6b93b7"],["/tags/nodejs/index.html","b6408b8fecb3b3f80df9fa4f68b8311f"],["/tags/noj/index.html","5de0ab877aff22797f2f9f9ea7ffd5a9"],["/tags/opencv/index.html","e103bb9a877c51eb3f314f6e24450166"],["/tags/overleaf/index.html","cce707c720e4a25ce2a9da2fe3fac63b"],["/tags/pandas/index.html","a68bda7e850bb8e691d7146414cecac5"],["/tags/paper/index.html","18e8c12a5e83934fbd08d476b8837bbf"],["/tags/premiere-pro/index.html","82079f63bfab722d531a453e14787e39"],["/tags/proxy/index.html","f75f7bdc76953d536eed2d338e295dad"],["/tags/pure-css/index.html","8d87599d76e745f6993112e9a886526b"],["/tags/pygame/index.html","4a327da2b7b0cf5aa140eee6ba4206fe"],["/tags/python/index.html","9a5a01969b6947c55f4a90204a03d5d8"],["/tags/python/page/2/index.html","abf25f6041f07bbc32fc57571b3e8bae"],["/tags/pytorch/index.html","aa965f18cb09a5da250df9bbf8cd0581"],["/tags/reading/index.html","c194c8a241bedc97b4777247d9479bd0"],["/tags/request/index.html","c694363a6093fb7568a896a2d76f967e"],["/tags/requests/index.html","54d7326c0b366ad2b443d973b53e8510"],["/tags/security/index.html","ef69b0e816e30fe06d70a5d7068bb454"],["/tags/shell/index.html","56a3fae4637fc2d0f5daba229079c16a"],["/tags/sign-in/index.html","5d5a0b9b4e91f0d3a437cf717350eb74"],["/tags/socket/index.html","4cb6a87e594da22842ec34e11760dd5d"],["/tags/spider/index.html","0677d04075b39ecadf7028708f3cc578"],["/tags/splash/index.html","990957f7785ac2ed659e447b861074d5"],["/tags/stl/index.html","242fa023a02cd0d946fab3b12e17bbc8"],["/tags/sumatra/index.html","878549f264eab178bbdd593053420ed2"],["/tags/superagent/index.html","48bb5112cea1b0053072521c6651a6f7"],["/tags/tensorlow/index.html","b3b07c29ea121160c68c275e6634f8f9"],["/tags/tex/index.html","19a0f2c0690018dfca8a2c8173416295"],["/tags/thesis/index.html","965b684504d0b5022ea6aba3301c5ee7"],["/tags/threading/index.html","7792e72d00ba515ae7c8f03f0a443e0f"],["/tags/tkinter/index.html","dc83c48d956b3eab739a4e0548d2e78c"],["/tags/torrent/index.html","6d5b8cdadb29cb9e93f7ad965c656a94"],["/tags/tutorial/index.html","ef75850eaa0611cc0e15cdaac4ee3831"],["/tags/typora/index.html","2e28b60da909d464f4fe6f5d68475ff2"],["/tags/uniapp/index.html","1edba56741761e175e2b602cba492e32"],["/tags/vite/index.html","64c67a81e2f2cfbe1b3600d847401819"],["/tags/vscode/index.html","b69fa29445f3585f21f1ca8e6b692e26"],["/tags/vue-element-template/index.html","55e2be527ac0ba59bcb6943b7886ad4d"],["/tags/vue/index.html","a0328f6e5df741dd6066f57f52ddc078"],["/tags/vue2/index.html","36d40e116c4e44782d09a16465f46c39"],["/tags/vue3-x/index.html","a840870e9e224614ac280d6838f9f307"],["/tags/wechat/index.html","13577ff6c6f56de685230fc73253cf9f"],["/tags/wm/index.html","645324e9af2c6e71e12553cfc53d0f85"],["/tags/wordpress/index.html","955b1fe5f5f69fbe5cf440d44a20b0d3"],["/tags/workflow/index.html","cb7178298c40c3ce8c466a4ab056be12"],["/tags/xpath/index.html","8ea40ba19139ea9a0a32c48e421e829e"],["/tags/yacc/index.html","a6482488976ea55dd638e3bdf2ec964b"],["/tags/zsh/index.html","3b291c95b475c36311bf35236196ecf1"],["/tags/七牛云/index.html","253f8054063ee7d413368d657e876e6d"],["/tags/函数/index.html","7d3126fede150b65e9374ea49f1c38e7"],["/tags/剪辑/index.html","08e2ed9b46cd700f85ab3094cbbac2bb"],["/tags/存储/index.html","9f92476180bfbc2a613539526a5dd664"],["/tags/实战/index.html","5c040877afbe93d7a43c567b74f005df"],["/tags/工具使用/index.html","017827884b965ad1f576df6bed89a232"],["/tags/建站/index.html","5fa193378ff34e65523735fb79701b55"],["/tags/微信小程序/index.html","3b700e81b62e7d8fecdfa7cb9445df1b"],["/tags/指针/index.html","28636ea5f42573ee1c416cad337147a4"],["/tags/效率提升/index.html","82830b14c164c3f7e6cf855b177f325c"],["/tags/日志/index.html","6d49016ed5866205661d78b30a8ddc84"],["/tags/汇编/index.html","438f089b43b2de90afc95edad3c73b30"],["/tags/油猴脚本/index.html","353df6bc32b4a4734824fa528eefb053"],["/tags/浏览器/index.html","4a9a09cc5f89953abf03f818757efe9d"],["/tags/爬虫/index.html","6bc7b47342ed92888a37fb14db7afa89"],["/tags/算法/index.html","3c565aaeeaa01754f32997e76030d04c"],["/tags/编译原理/index.html","c725c474c29b04edfb75a50d2dfdd616"],["/tags/获取地理位置/index.html","29f760b851bb012f594e5a79960005a9"]];
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
