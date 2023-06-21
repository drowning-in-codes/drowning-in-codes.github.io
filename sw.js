/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","69e03e047a09dbb96178241a96a42149"],["/2021/04/20/稀疏矩阵/index.html","d989e9e6ee8f535a713dcbd5ca3870b3"],["/2021/04/23/广义表简介/index.html","cc1fa874233576121ae610922bad7f3b"],["/2021/04/29/关于指针和函数/index.html","7a5b336e18695a24bb73e515092c089e"],["/2021/05/10/哈夫曼编-译码/index.html","cde0bbcb059ff211653af17e3df18237"],["/2021/05/17/数据结构noj_2/index.html","d420702741e1a07d9e60438e2bb67bbf"],["/2021/05/30/数据结构试验/index.html","c0c38ef4641a759a058834519e46b772"],["/2021/06/12/数据结构noj-3/index.html","8feba0c8861cf378be8f1ee33c30097a"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","a106fc30a7f973390648ed2f855ceab4"],["/2021/07/08/课程资源分享/index.html","657a04d5444ddbd2832e30f518f4f558"],["/2021/07/20/Scrapy-下载图片-文件/index.html","c4e82e6eda48ee458d649700319bb269"],["/2021/07/21/Scrapy-动态网页爬取/index.html","9e156a7364553ac9e5c99665844c852c"],["/2021/07/21/疫情打卡/index.html","9b7e2e67c747c575318dc18ad386f968"],["/2021/07/29/Scrapy代理设置/index.html","815b410dbc6a273f66e0ff39308225b1"],["/2021/07/29/数据库认识/index.html","c05d21ae4cfcf4d6645e35084a45bc2b"],["/2021/07/31/Python多线程学习/index.html","170aef2e6f07d145f60815b3afc389bc"],["/2021/07/31/tkinter-requests练习/index.html","99cd35e79026d9987d347fa360a6fac4"],["/2021/08/10/Git学习/index.html","c2bf27f13994cf3024d0c3748ae02855"],["/2021/08/15/pygame实践-1/index.html","aea8af3afde5c95cc19329551b94154a"],["/2021/09/06/微信小程序开发/index.html","408375aec51bedec99f5dfe8765e44d7"],["/2021/09/21/命令集-1/index.html","065015abd57d8b0b412fe9509b17fd9b"],["/2021/09/21/命令集-2/index.html","2f6319e4c22ed0da0f05e3e8a090ab5a"],["/2021/09/21/命令集-3/index.html","d1b35a3481138271ec0a7ff271c1f56a"],["/2021/09/21/命令集-4/index.html","38d93f85e147d90acf643ab27eaebeec"],["/2021/10/03/socket学习/index.html","88e44696880cfb24c924f1a7fb713969"],["/2021/10/10/dwm入门/index.html","d7d4539c7dba31be6e1e870e97895a30"],["/2021/10/10/安装ohmyzsh并配置/index.html","c59e13b2c6202499337f1e2d988a46d9"],["/2021/10/20/css学习/index.html","f6a2c575fdcca431c136c7c96ab138b1"],["/2021/10/20/wm入坑/index.html","0a9212a67c54fe8274e999c124fccffb"],["/2021/11/03/微信小程序学习/index.html","299c68ef64163bd5c833c892463406a0"],["/2021/11/04/css揭秘/index.html","42b4c1a3b63bca9791e5b77e03335867"],["/2021/11/05/css-练习/index.html","0683be6c7bf0962baa29dca07f98f9bc"],["/2021/11/21/命令集-5/index.html","bb7c709d61e8a9fa56c2f8745266e215"],["/2021/11/21/命令集-6/index.html","7d6569692792ae46f204f2449d27ee9f"],["/2021/11/21/命令集-7/index.html","d5215d2c0a91849b2ee1d79c8bebefe8"],["/2021/12/01/搭建wordpress/index.html","c50fc71ff8b1a537b2c7ce8d3accbd78"],["/2021/12/08/python操作百度网盘/index.html","aba35d449a5237b79f29f964de2f05df"],["/2021/12/14/js爬虫/index.html","2e95f1f1b70a912970ff36efa62cc794"],["/2021/12/25/为网站申请ssl证书/index.html","b55d7ecac1d114e784ea1bbf29d3f581"],["/2021/12/29/使用七牛云为网站提供服务/index.html","c5de34624e456cf78154e175c2ba0215"],["/2021/12/30/jQurey继续学习/index.html","cd206405963b780a8d520c77082ef110"],["/2021/12/30/jquery学习/index.html","11dcc0f056c793883d90048a7b4e39a7"],["/2021/12/31/vue学习/index.html","04ffd40c8135c7b380351143386d1a54"],["/2022/01/02/疫情自动打卡/index.html","199e83cd69f5f1af26cbdcdf9ec63564"],["/2022/01/03/javaweb初体验/index.html","396c6cd8b995979f249fa3ce39aeffed"],["/2022/01/04/codewars练习/index.html","707d340b1c613675a80b66daf4e0538f"],["/2022/01/05/Spring学习/index.html","0bf476e7062f8623e832ad66a922f3f8"],["/2022/01/05/vue实战/index.html","689d8ae16f6d8d4e4db3dfc602f6fe5a"],["/2022/01/08/gdb-gcc学习/index.html","b7407a4c88ecd104723fdd4ae999d161"],["/2022/01/11/python-opencv学习/index.html","dc5cf02733aece0c73d5ff193faff4d5"],["/2022/01/12/汇编实战/index.html","b05d406981d2c7a4a292f394f14be50e"],["/2022/01/17/pandas学习/index.html","25016df42dd8faf319c72575fc382127"],["/2022/01/19/可视化图的工具/index.html","b0913c05d24998a05c15859288f71023"],["/2022/01/19/机器学习入门/index.html","74700d81d443d29c6690bf094ed6a1dd"],["/2022/01/20/cousera-ML学习/index.html","8c5385c5a6dba9acbff9de1614f62abc"],["/2022/01/30/typora解绑后出现问题/index.html","d8d0a6ac21f732220f144b030bd73d18"],["/2022/02/03/NLP学习/index.html","b924a751b392b73126321d23f1ea0dd6"],["/2022/02/04/Web漏洞学习/index.html","e38372bd96f55f364cc4ce1a75a07382"],["/2022/02/04/pyqt学习/index.html","7d617ef2912933b2bc19eb93a9682e49"],["/2022/02/04/python爬虫/index.html","730c17e8a72bc254da32a607c04e34b7"],["/2022/02/18/Electron学习/index.html","c725f3c5da57face92519e9525295830"],["/2022/02/22/疫情填报字段解析/index.html","7d25a1e14273db617505266be4e90a8e"],["/2022/02/24/Bomb-lab实验/index.html","b99f5f9438b977e3920858f7163b9f53"],["/2022/03/05/nginx学习/index.html","22a17d21380d34ef73097aaac1f32557"],["/2022/03/09/汇编原理课程学习/index.html","5f0f573796f94341b31d38ae17c4511b"],["/2022/03/11/Keras学习/index.html","2d196dd3666a7739558ad59eb8fdc019"],["/2022/04/01/graphviz学习/index.html","3ba16fca2e745eb4bf1ed3f94e8273c1"],["/2022/04/07/django学习/index.html","8e2003c299e43ce9f27343cd6a66b02f"],["/2022/04/11/密码破解学习/index.html","859686be1acfc2947dc0662f13706778"],["/2022/04/12/flex-bison学习/index.html","728ee36879d6c6037b71da1f5a7e19e9"],["/2022/04/15/pytorch学习/index.html","3f3893542cc1c6dfa25b7ff615d16736"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","6b9f25483e9f9bf37e40493fce83932c"],["/2022/04/23/写一个音乐播放器/index.html","58b281a1a4a02c59a4c695683b42d204"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","bda7fa17b7ce303f26e66a95c610f3dc"],["/2022/04/30/GAN学习/index.html","ec8fd73a5d7b231b8c86677341799dc5"],["/2022/05/02/html精学/index.html","be8d164e797626d75136d821a394c7c3"],["/2022/05/06/write-a-compiler-by-yourself/index.html","8535b310ba2b2ac5e8b9fe7c007fbf23"],["/2022/05/30/acwj-01/index.html","6490a57f826d8ebc3b827052ac0ffe70"],["/2022/06/14/animeGAN/index.html","5c69355bb7a7e7431fee4035554ee9b0"],["/2022/07/09/c-与算法学习/index.html","a0900a9809e70cf27908e911905e4aed"],["/2022/09/19/flask学习/index.html","854ba0c82ba8403dbca7144ef238e0c7"],["/2022/09/22/cs224w学习/index.html","4513fddf77dade6a5cc23a25b2799277"],["/2022/09/28/记录一次wp重装/index.html","77ff1b750ae88d23dbc2105fec0da415"],["/2022/10/01/Obsidian学习/index.html","16134fb76508b8f0e8db6804face0051"],["/2022/10/08/vue-element-template实战/index.html","54d3cc4af7892683c574214bb6cf6f5c"],["/2022/10/25/vue网上商城项目/index.html","9fc0d2b462da4eeb5a9763c603e1efed"],["/2022/11/11/leetcode刷题记录/index.html","693131dcc56b4d6e9d6bc987ba6d58b4"],["/2022/11/11/使用overleaf优雅地写文章/index.html","f043e49377a13539a8f455d3918d8aa0"],["/2022/11/22/磁力链接与RSS订阅/index.html","93c1da8bbcab57faa7e3fd44593e7abc"],["/2022/12/11/uniapp申请获取地理位置/index.html","532fee67ca38ab18a3609705d771ac6d"],["/2022/12/26/pr剪辑学习/index.html","a80cc4b456303b19603469b1c49240cb"],["/2022/12/27/css中的flex和grid布局/index.html","448b9071084db45221e626ccc7f99f20"],["/2022/12/28/Flutter学习/index.html","e8f1e1609adcc5fbdd27a352e1dd06f6"],["/2023/01/01/美化github首页/index.html","268229f1b8d11923de09a9993347290d"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","76ad5d5398af39e4865e99967fca1400"],["/2023/01/04/构建微信快捷发布文章工具/index.html","cee65fc703845c6fd6346b0eeb292092"],["/2023/01/14/dart学习/index.html","0d717606f573c4d72e081a20fb32ad54"],["/2023/01/23/闲置服务器BT下载影视/index.html","14074e00bd09a316936c297575d79fe7"],["/2023/02/07/TotalCommander使用和学习/index.html","0595330b7c93327a01aee5e7189af7c0"],["/2023/02/13/docker学习/index.html","3ce56a11aed1d00c3b9b25e2dd67c3e5"],["/2023/02/17/DLHLP学习/index.html","5c4bc9549224ce2444915350b14e7aa8"],["/2023/02/18/学习purecss构建自己的css框架/index.html","eb6d18238ec2b9f4c9b8b72ea50ad170"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","37cdef5a67289f6a4b79a25f2bb55a1b"],["/2023/03/05/STL学习/index.html","ef608eac51184bb8846dcc4fb9558b66"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","fd778492b676fe8eb5d73353a1aea03f"],["/2023/03/23/实战写浏览器插件/index.html","4e7c6665f9309f3945770e29e40ecd5a"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","a8ac15c85731670c95d94e9c8b677b81"],["/2023/04/02/EndNote基本使用/index.html","c63b16dc5d74176619394eaa4bef0dc9"],["/2023/04/04/mne处理脑电数据基本使用/index.html","3e6087d9bba0cd3de156d9c9a4b9b01e"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","cf355fe0f09ae0d47dd4014fc70737c2"],["/2023/05/02/python中的logging模块/index.html","8fb6649dc86e4811256115583924b2ff"],["/2023/05/07/python的特别方法与装饰器/index.html","e22c97272e4cc08073765fc99ceb16cb"],["/2023/05/20/Wox插件编写/index.html","83c7e038997d7646cc71d502792d16cc"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","f34377e19f837b729cc3c15b282e7f05"],["/2023/06/03/深入Clash配置文件/index.html","6d832d39c9f25de7fc8830e3069b883e"],["/2023/06/10/node的包管理工具介绍/index.html","55eea171d1f3fbad58a0a9088da842b0"],["/2023/06/12/AI写作工作流/index.html","f57d0c5cdbc75aface79e5f182f6a9aa"],["/about/index.html","5ff757bc8296ab0f004634c40a21c99e"],["/archives/2021/04/index.html","7e0a0e94abdf55abf5969ade14d2ad62"],["/archives/2021/05/index.html","23b9bf6acf2b39c253ef8087371e1bb1"],["/archives/2021/06/index.html","6bc9e9cd72804a6fd9117dd8eaf20560"],["/archives/2021/07/index.html","8017b36efc828b168d1f6eabbbe3119d"],["/archives/2021/08/index.html","554086ef5de11664a2748ad862a755af"],["/archives/2021/09/index.html","fb36352f0204c1d54b4ce62429cd1ebe"],["/archives/2021/10/index.html","c713f3874abee29a0295cb706bea4e0a"],["/archives/2021/11/index.html","57c97513764efbc3281fad0817701d8e"],["/archives/2021/12/index.html","b06d6ac3e0406752625aef2f60daf6a8"],["/archives/2021/index.html","0a53c55f41f50055b921d9c5b268ee61"],["/archives/2022/01/index.html","6a29766f461fd2c77f3f443ec3f74d42"],["/archives/2022/02/index.html","563f4eea98946a2446ca5bb48ad49c03"],["/archives/2022/03/index.html","ffa761aa4327abfec9c3dfa202d622a7"],["/archives/2022/04/index.html","5133809e444c59971523cab6b0ae3a4e"],["/archives/2022/05/index.html","cf89e02f22f2a97dc3905c2a82929e37"],["/archives/2022/06/index.html","872358d668d26fdd1f830913e5394dbe"],["/archives/2022/07/index.html","940fc24903afbbe042efac2c474d1b0e"],["/archives/2022/09/index.html","ee2f5eb4727767db55d16bda7477060b"],["/archives/2022/10/index.html","a1ed2f73f6347993b64d5f5cd5397223"],["/archives/2022/11/index.html","684b0f96d620e55e864cac006d639482"],["/archives/2022/12/index.html","15dce3962a3d058a0820e3e5285b0788"],["/archives/2022/index.html","2a6858c77dbd8085fb0f0d280742df8d"],["/archives/2023/01/index.html","431855e94878106029cd7c24b5aaa5db"],["/archives/2023/02/index.html","37c3dfb76808acabcb9b5c240b8e403f"],["/archives/2023/03/index.html","3343f9871ef62241795824b441b6975e"],["/archives/2023/04/index.html","ce7b1174a997cb96aa280448cec62550"],["/archives/2023/05/index.html","f00cf516b70264e1373926c2c91622bf"],["/archives/2023/06/index.html","8d798f0d8a5220e145f6c54b088c079f"],["/archives/2023/index.html","29edb15832860eb705d07ef42b16b8f5"],["/archives/index.html","a3a3012ed7de64872c88ffa6880598d0"],["/archives/page/2/index.html","6ad67bc843f273228fcefad4d4abefa1"],["/archives/page/3/index.html","82c8fc9d8d88ef150b028b2e0085f873"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","0ec245b81f0679de85fb09af5f8139f1"],["/categories/Linux-study/index.html","d588b266dc72577601c58e7c88959b66"],["/categories/ML/index.html","8d5a0e463ae08a1d1baf0bde7fc55651"],["/categories/Nginx/index.html","76d688fd307cd32185296a78bbe0cd6c"],["/categories/Spring/index.html","370044db178f635cecc88f3ef307402a"],["/categories/course/index.html","73c4e429eb825c5e8fd1f630a8b32485"],["/categories/django/index.html","92ba2e5566086c5df83e9f530f2e46f5"],["/categories/fun/index.html","46f9825f6c61145dd73660ab0768ea90"],["/categories/gcc/gdb/index.html","d2951ce07a718668aa4054fd5d23d05a"],["/categories/gcc/index.html","e93039f72cbb763f7c64eba21a02bbeb"],["/categories/index.html","f09cb8f4528d74c657288fd590e13280"],["/categories/java/index.html","f72f3484f92e63fcbcb2f41ee70d4a26"],["/categories/latex/index.html","cf6bb3022f11cf50352510b1cad0471a"],["/categories/python/index.html","0b9629f1ea5700e717ce4a1af1494844"],["/categories/study/index.html","64737a0f9603b4eb2cfbe0e0d0b15020"],["/categories/vue/index.html","a4096b09a5cc23e390e3997859cf42b7"],["/categories/误区/index.html","5e07511d1c11c71b081ef819aa02ef0c"],["/commonweal/index.html","14550ffbc27856846c7ae65b7a45dd71"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8769a428a3d93eef9dd9cbd7d4b46788"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","79d93d9a003a4565e6f4d052a03e6fc2"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","9f652b6c10133ee18c1f7a3733893098"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","e7a6c636d7dd0bf64bf66ee343df4021"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","6bb59e13d82770ae64206dbb77e19c24"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","2f74c51ff21bee1be8859d1ffee0d5ca"],["/page/11/index.html","6e7689cf8685b9c39b01d56ccc620033"],["/page/12/index.html","8a4a59e65671ec786b796f4c03ccdc0b"],["/page/13/index.html","a61f64035e183eac753d05d79999b73a"],["/page/14/index.html","8d29dc5b0ce275010a3557765e871273"],["/page/15/index.html","6666e35ac55f64a3bea9c6029ade7490"],["/page/16/index.html","eea478dafb04ca62dc743004bf960a3d"],["/page/17/index.html","1b91c7aabcc232ff3147be68bb8118fb"],["/page/18/index.html","87830a346e893290b6f2df41e82b01e4"],["/page/19/index.html","4dec2eaea18071f5398f932467cda7b9"],["/page/2/index.html","2c9ab6d32f713f8539e0c106a0051d5c"],["/page/20/index.html","51e0e9f30829c711e160bb07dec5ecd1"],["/page/21/index.html","0afdafe208b771b5a82071d42ed3c634"],["/page/22/index.html","9b44d186eb86f35d24fa1df28c73abfd"],["/page/23/index.html","dd35e0d7dc7e4e7308265022017cacad"],["/page/24/index.html","e093f2be1b6990660aa5c1fabccae1c1"],["/page/3/index.html","a24869c4f3b2f3b6e9df4d8fa5e474ae"],["/page/4/index.html","33158fa8bafa3366e9d30fb3886f93ea"],["/page/5/index.html","21a77e3d1977e6e24b743f37c8c30351"],["/page/6/index.html","d42909f49534c207dd5a03b4d29534d6"],["/page/7/index.html","c233fdb429f1629ff32e03de6844742f"],["/page/8/index.html","95d3a4cf7ad588ac29183b6dab40b4db"],["/page/9/index.html","04102da11d20b8208186c17a0c55acb4"],["/resume/index.html","8cab74f9663a39439d83e5971ae866fe"],["/schedule/index.html","5cc4d491d5f1bedb6414f829ceed4ec6"],["/sitemap/index.html","f42f398e53747e90023b020a12666804"],["/sw-register.js","5f2e81e507fdfd9249681a72ac0ddae9"],["/tags/AI/index.html","718087cd61be855a6ae450f60635f333"],["/tags/BT/index.html","a6f207c8bcf437acc6403becf324e687"],["/tags/BaiduNetdisk/index.html","b0258dfd95374c71928efbfeaaffb336"],["/tags/Bootstrap5/index.html","fb2b24b5505ea570a2bd7c988415fadd"],["/tags/CSS3/index.html","515d95a65319ded7e30e97f3c783002b"],["/tags/Centos/index.html","789caa8e895e8b84e09f4b0fc9efe760"],["/tags/EEG/index.html","09ec6e1d252fa33e14626901324699e9"],["/tags/Electron/index.html","360d333e5e4dd5c28703d214a656fee2"],["/tags/ElementUI/index.html","6133dd8aa4e3b8cfda41c525c3a8bac7"],["/tags/Flutter/index.html","35b5ef81c361b5c2b086fbbf66bfd44e"],["/tags/GAN/index.html","f7b1d1a85b14e96b7fea9749b05a3893"],["/tags/GUI/index.html","e88f104bac14e72f4f559a443a016120"],["/tags/Git/index.html","3e6c0e856956ac05c4bc4d583b7fa696"],["/tags/JavaScript/index.html","5fd3bb2ce34105d6bc302b573f8f4811"],["/tags/Keras/index.html","5e3336d3d63b54c321a08565f93ca8de"],["/tags/Linux/index.html","64f3e0862eadc8a454b321b664867253"],["/tags/ML/index.html","504f31a876c916a0265739d090319c62"],["/tags/MNE/index.html","1c8a84eabe8041c30575ad5dd2d69713"],["/tags/NLP学习/index.html","7c3088bf3c7de5b76f0d922bb1601cd7"],["/tags/Nginx/index.html","f8eae80bde0bc2768cdc69752e90cfee"],["/tags/OSS存储/index.html","c4a33debf7f1a75726d61f531695dca2"],["/tags/Obsidian/index.html","5d01617e7ef954f5f4224e28c3ba2181"],["/tags/Qt/index.html","78a5b79e70bdcd4d66cf5f1eec01dfdf"],["/tags/RSS/index.html","a108900c586b038c55e2c9e3f72d477c"],["/tags/SSL/index.html","15817f7d930d62831e6d2cd1bf35e0a4"],["/tags/Scrapy/index.html","5f07be3de14509ac006138281485c9cf"],["/tags/Speech/index.html","b21c536a9b275d9efa7805446ae01918"],["/tags/TotalCommander/index.html","f493ae12ee183c752de7f9d665fdfa66"],["/tags/VPN/index.html","0f071fbc33132d1dea1a65aa641ca148"],["/tags/Web/index.html","c6f686716b85f2e3a02e46f43b55f55e"],["/tags/algorithm/index.html","fb1bf0518de7df60e938195faaee0b93"],["/tags/bison/index.html","2b311ead9da978effc7bcfa52c356d92"],["/tags/bomb-lab/index.html","05f73e537c6c466d59902437bfc18bae"],["/tags/c/index.html","0c21e1a903ba57d9b136fb19acdd2c9d"],["/tags/cheerio/index.html","83fd01f6dfefea2072177d24c8711d77"],["/tags/codewars/index.html","e9b68e09dbce1c796ba1922d21d5b18a"],["/tags/compile/index.html","07b6f97c4f7a79a0bda91b80297cc0a8"],["/tags/compiler/index.html","0ca479177fa62f58e7a1cce1a8231066"],["/tags/cors/index.html","4046d9cfc667555085a672529f91bba4"],["/tags/course/index.html","ad68427f478488a9ad76019b302c996e"],["/tags/cpp/index.html","2632bbc4fa4a085b8f2029a0ba2fda3b"],["/tags/crypto/index.html","26761ddd8b4361eac1d0dde202a21a65"],["/tags/csapp/index.html","0f6234dbefd3b6e9f42773ee805a4a34"],["/tags/csp/index.html","22f1c55e002b1a7bcb4310c0a436e4d6"],["/tags/css/index.html","00315c1d95c25500b577b425831706a2"],["/tags/dart/index.html","ea9d5257d0bef307a0a393072a13ea7d"],["/tags/data-structure/index.html","66554d38fdee33d4d375cc21aaa9ba05"],["/tags/database/index.html","c590904f8dadf974122e94776acd10a6"],["/tags/deep-learning/index.html","1714f7f2f11df07fa48f25c17f6742f1"],["/tags/django/index.html","99504f47672814603e21896725a2ea67"],["/tags/docker/index.html","3befbe2ba11e1b36c5cf4ef782ac7c83"],["/tags/dwm/index.html","7f274b535c82bdb1940e195e857cece6"],["/tags/exercise/index.html","d7c6b4ec4a59379a1a2fd65a0a7cb6bc"],["/tags/filebrowser/index.html","7f4c87b15b56c04aa47feb40bc9c9cf0"],["/tags/flask/index.html","a5140da561e550f00f84fd6553d1d1c7"],["/tags/flex/index.html","46f439d5c1665d5ce1bd0c00b1b814bf"],["/tags/front/index.html","b38bd7e52df3202ae290835deb1da19c"],["/tags/gcc/index.html","e27fefda4b4551bb70b8f99fae275876"],["/tags/gdb/index.html","b1364a1b804d0f67904b5ded086cc02d"],["/tags/github-profile/index.html","89007e8d76281a12361fbcf52eae602e"],["/tags/github/index.html","f9b9c651e6c7b68c19331ad93165a5d0"],["/tags/graphviz/index.html","44179633845f1ee19f4e73b5416f8dde"],["/tags/grid/index.html","787bdfdbb366a606c0d9e4e9e432ee96"],["/tags/html/index.html","f7325f6ba1167752536cdd0fc441e556"],["/tags/i3wm/index.html","9433a6a52aa431c6470587953d98827e"],["/tags/index.html","32786a10dbcf14d2c70e0084212d4556"],["/tags/issue/index.html","8e9898b5bfc12996e1ed45815e2f520a"],["/tags/jQuery/index.html","ba7a471ffba565e493a08c1e58407136"],["/tags/java/index.html","a42dcb7c58ca75d0e6af8aaa45aa3871"],["/tags/js/index.html","97aefdf838e68d02b385398989b70752"],["/tags/latex/index.html","caf5b5d9931adfd3ae57d81ae7159b10"],["/tags/leetcode/index.html","ffcec244f5b03c8a198f3c9891cf5a94"],["/tags/lex/index.html","15d344b49e83858803c5ca8af0984e14"],["/tags/logging/index.html","811310a09cd94bd7d7aee859a7ab2e7f"],["/tags/material/index.html","2d2bf1b811007628576ad459df0786f7"],["/tags/music-player/index.html","320df2de3d70574a32f1c4d49b26e11e"],["/tags/node/index.html","ef17708b8d7a6eea798954e90583a58e"],["/tags/nodejs/index.html","9dfeffbf181c8996b7442e12b3945700"],["/tags/noj/index.html","1bb2ec2e3197457a5a1818b0850c3e74"],["/tags/npm/index.html","f7b7aeefcbedef6cd8f140222e9c27c5"],["/tags/opencv/index.html","4bd76ba56b5114bd0abd8065c2a508b5"],["/tags/overleaf/index.html","a31e134c33d2bf9936e24bdcd487119b"],["/tags/pandas/index.html","4f395bb06724fd58c957093c31c89463"],["/tags/paper/index.html","609bc79c5ec802b8b8d808035a62fd01"],["/tags/premiere-pro/index.html","28eda4507f734f5dafbaf8762dc1ee6d"],["/tags/proxy/index.html","efdd95bcafac33073fbeb453cfae6072"],["/tags/pure-css/index.html","4a9f75fa5729357b667cd3fca06d87d4"],["/tags/pygame/index.html","dec1cfee8858ea8834ae6264de73fc64"],["/tags/python/index.html","12b8efe66539cf1a7ed679f3076cc3f1"],["/tags/python/page/2/index.html","b8b53b318c58a9c9e399cea25ddacdf6"],["/tags/pytorch/index.html","5eda5be75528e7d2e67a43f3a1c1d3d6"],["/tags/reading/index.html","14797c95702a6e3394c60293a8b347b0"],["/tags/request/index.html","66df5579b469d661e2b7fa864f593483"],["/tags/requests/index.html","67fb7fc81b5ede586521654a0f256421"],["/tags/security/index.html","0df2122f2d6ba1637114bf9618b6d262"],["/tags/shell/index.html","a7fb978f0a1829f51b6445766d10669f"],["/tags/sign-in/index.html","822be586de923eb90322cbc08fbde405"],["/tags/socket/index.html","afd0b0add1cdd8e6b2b853e2ce4eeb21"],["/tags/spider/index.html","e938ed947acb1f1f177e034c823c3312"],["/tags/splash/index.html","2c0389d404d3503e683df0dc952d5710"],["/tags/stl/index.html","7988cf929c56427c50e39e2962fd2f46"],["/tags/sumatra/index.html","197f1645df423127bd9fddf9ef866054"],["/tags/superagent/index.html","7e68fe13fda5d4ec48f1018c8e517217"],["/tags/tensorlow/index.html","1c91bbfe2a2b7535860bce0c04f91911"],["/tags/tex/index.html","328223f274fcc14bec8afffc182d584c"],["/tags/thesis/index.html","e14a25bf98cb19ccb4438ee6720991d4"],["/tags/threading/index.html","468eafd496907c40fbfe8c96f16418c7"],["/tags/tkinter/index.html","4302d5d9040e5e9ce521bf454cab47d9"],["/tags/torrent/index.html","456fc5cc342c9743173d1a9b9006c295"],["/tags/tutorial/index.html","a788e54a0307f73f50460df02c60a1e2"],["/tags/typora/index.html","a8b1b11911e8f529b5eed18864b7d44e"],["/tags/uniapp/index.html","c4d021ddedbd1ca499491c1f0ee71bee"],["/tags/vite/index.html","690251594c8714143d73be46713b76e7"],["/tags/vscode/index.html","5c76b153a88b334b047d7ef651479f13"],["/tags/vue-element-template/index.html","d1f7355d51592730d6ed5dc927ec4c0a"],["/tags/vue/index.html","e6bfbd7603c2a962c438367ecf128cb1"],["/tags/vue2/index.html","8cd44fcc42a1eaa0ee1fd5c9633fe4aa"],["/tags/vue3-x/index.html","7ab6ef2cd3ec2c76bcc3c74c7ad5b2e7"],["/tags/wechat/index.html","4cd7edbec1058da7f48762abe7a2d370"],["/tags/wm/index.html","8914689d1dec0e6faad1363f6684cd6b"],["/tags/wordpress/index.html","7e7994e487177ef23c3c09c5a514a1ed"],["/tags/workflow/index.html","16a868a77a50459e1103b40e2b5c4be3"],["/tags/xpath/index.html","81c4d17754ceaedd4e2a9f1436e232ad"],["/tags/yacc/index.html","8d0208cb1add1921436504d680d19e6c"],["/tags/yarn/index.html","5a30638870ce7e7ca3cc2eea9049c828"],["/tags/zsh/index.html","570e9b5dd232aca56bc4d75119deee8b"],["/tags/七牛云/index.html","418e516cdeb8873a0ca4e6aec3bd01f6"],["/tags/函数/index.html","abf3509c8ef27b961ccd75fb982ecd88"],["/tags/剪辑/index.html","5c7d90fafdf1b243c104298d8852f981"],["/tags/存储/index.html","9e6322015ed1ab3c77b61b8026bdacd2"],["/tags/实战/index.html","21083045ed865cee04f1b2048696c0da"],["/tags/工具使用/index.html","88aef41f3dea259cb38214eed7dfeb2b"],["/tags/建站/index.html","198a33a198fdbaf8cfb66403cadd687c"],["/tags/微信小程序/index.html","273d66d60d7c79e11d5b16fcc97ecca6"],["/tags/指针/index.html","0aed231787b59298b5164bb426a2646d"],["/tags/插件/index.html","fe2e92df74fdc639772aaa3c9c2f1124"],["/tags/效率提升/index.html","7758e772b094e777c967dc2ff9da2a55"],["/tags/日志/index.html","57cfda82f166094afa3f5af11147aff5"],["/tags/汇编/index.html","0d61583826abb2cf2f85c956c628101c"],["/tags/油猴脚本/index.html","77cf34c2504e4e755d9e24e1b8d188a3"],["/tags/浏览器/index.html","e5e681432f18f6dece416378139d1a03"],["/tags/爬虫/index.html","b03257b887f81fe4cbef7a390f7f90a7"],["/tags/算法/index.html","f7057f41fd7585f0080b1b2d80bc92ba"],["/tags/编译原理/index.html","71a8abdf5698a190f5e16100dedb3da9"],["/tags/获取地理位置/index.html","71d4a2969a4df3dca129ef2319cdf2e1"]];
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
