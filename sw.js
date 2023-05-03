/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","5e350ae92a3dfbca885d102ce45bda18"],["/2021/04/20/稀疏矩阵/index.html","fd23d571904f7a2e34f0ee157d106287"],["/2021/04/23/广义表简介/index.html","1fa66b72271bff9aed8bc41a8c845aea"],["/2021/04/29/关于指针和函数/index.html","06bf0688519a05bb42f9247f56de45d2"],["/2021/05/10/哈夫曼编-译码/index.html","609b53db8de22319fbe79a5633d9f94e"],["/2021/05/17/数据结构noj_2/index.html","cd491d67876bc649c9f221fa7b69a2cb"],["/2021/05/30/数据结构试验/index.html","73046fd6b7569f215e1e7b6255d4ac26"],["/2021/06/12/数据结构noj-3/index.html","1d82acb34e8c96e9d5038dbbafc84b9c"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","d63b6bff138f0afbb19ddf2adf4577e4"],["/2021/07/08/课程资源分享/index.html","2b9130b4d9cd750f0064970ba6d67513"],["/2021/07/20/Scrapy-下载图片-文件/index.html","70981c93d9895200cddfb8c94053847a"],["/2021/07/21/Scrapy-动态网页爬取/index.html","81e6e1edd52596a8cec2bf8acb9b2e82"],["/2021/07/21/疫情打卡/index.html","844a1620524c723e0b3240a4a6a164dd"],["/2021/07/29/Scrapy代理设置/index.html","3579da9b7013c07bdc8a47850082ae6d"],["/2021/07/29/数据库认识/index.html","63995b3e1898ea6e650a0a6c554addff"],["/2021/07/31/Python多线程学习/index.html","6f7764c7a06f02699ebcbb5262c8f6a7"],["/2021/07/31/tkinter-requests练习/index.html","b83d2f6e4c2fa4323a9d5234e67092eb"],["/2021/08/10/Git学习/index.html","5b84965f0ca88024deb621c340437102"],["/2021/08/15/pygame实践-1/index.html","6d60cb0fddbc9ffd3e7324078ed87668"],["/2021/09/06/微信小程序开发/index.html","3e2a6e0c8a7f6b159d12008e6878a79b"],["/2021/09/21/命令集-1/index.html","9ae05cf897f240adbb92bd33a2898a3c"],["/2021/09/21/命令集-2/index.html","8b231a8c152181ec54acc5a26ea18ffd"],["/2021/09/21/命令集-3/index.html","96011666c68477e19e5854d3c6b948ac"],["/2021/09/21/命令集-4/index.html","ef9cc012ed12dc339753c0891e28d10a"],["/2021/10/03/socket学习/index.html","7fb8304abe395ca846ff8fd092712d7d"],["/2021/10/10/dwm入门/index.html","5195dfa7f1c4240f42c024d49a9cc963"],["/2021/10/10/安装ohmyzsh并配置/index.html","6c68cabdfd3d1a4661d788ca9cb63ee6"],["/2021/10/20/css学习/index.html","dbebda3cd2fa713bfaaf5e7e6adec7aa"],["/2021/10/20/wm入坑/index.html","b2fc5afa404c7daf4a8afd01874deb61"],["/2021/11/03/微信小程序学习/index.html","22209ecb956a7b8d3acd7dfe919f9701"],["/2021/11/04/css揭秘/index.html","b5cc28764a3608dacb4350a764f0e2ac"],["/2021/11/05/css-练习/index.html","e2f1529f087bd5a0c8729e886d735f03"],["/2021/11/21/命令集-5/index.html","2b0b7c78d95d7ddc5b269cfa8212effc"],["/2021/11/21/命令集-6/index.html","7f3cec1f1976d8b89d388985ec885710"],["/2021/11/21/命令集-7/index.html","b155a3c10b8e655704a4ed48b3f82533"],["/2021/12/01/搭建wordpress/index.html","0ee3780c504efca52604da9027555e55"],["/2021/12/08/python操作百度网盘/index.html","b76d9bce38e711e9176c2003cc05b794"],["/2021/12/14/js爬虫/index.html","00c32067d8c8a1764b73701971d806c8"],["/2021/12/25/为网站申请ssl证书/index.html","0666f05418efd3fa0eaad0961ec5c4e3"],["/2021/12/29/使用七牛云为网站提供服务/index.html","9b507666688068abba89a71cd1461f70"],["/2021/12/30/jQurey继续学习/index.html","abd2c12ca30aec0806f64a0f326e6982"],["/2021/12/30/jquery学习/index.html","757f85bab102d50214bbb4f20a5e12db"],["/2021/12/31/vue学习/index.html","9c596d0b62566eb0944aa16e5da797a3"],["/2022/01/02/疫情自动打卡/index.html","9007025a61ef77a339106f1a252c410e"],["/2022/01/03/javaweb初体验/index.html","f818cc32b4da9acfe93ec5d9549061d7"],["/2022/01/04/codewars练习/index.html","9840bc16ce18c379458ac65e78d85679"],["/2022/01/05/Spring学习/index.html","a651e8f15095e0fc3e79043bd93cd4e7"],["/2022/01/05/vue实战/index.html","ef40aaf54830fc57a458fee7a105a6b6"],["/2022/01/08/gdb-gcc学习/index.html","f07f059d277551844fbac3be1a18f1ab"],["/2022/01/11/python-opencv学习/index.html","231554bc6aec39c3c86ad323aae8d466"],["/2022/01/12/汇编实战/index.html","7784f8e459765454cff4c23602c45094"],["/2022/01/17/pandas学习/index.html","ef30d8c9f8cc6858f576eed6574db7b4"],["/2022/01/19/可视化图的工具/index.html","6e8170dc3363d0a18d1ed598f5f0bf06"],["/2022/01/19/机器学习入门/index.html","e6437bd9e176cf2bd38b154adab0ed81"],["/2022/01/20/cousera-ML学习/index.html","2f4fd022548b5cd7eab999808a17f628"],["/2022/01/30/typora解绑后出现问题/index.html","ca450874980630f8581334ec87de98f9"],["/2022/02/03/NLP学习/index.html","9635343860efe5305abe52f38072fa4c"],["/2022/02/04/Web漏洞学习/index.html","60110c82c1e363fdd6b9c17c55fa4666"],["/2022/02/04/pyqt学习/index.html","10c6dbd419f1b13bb2ff4eb36fb5a905"],["/2022/02/04/python爬虫/index.html","0cae80f3405b46785b446362abda7494"],["/2022/02/18/Electron学习/index.html","6e6df9edcbbaeef8ce452509b5d5f79b"],["/2022/02/22/疫情填报字段解析/index.html","4202920a3ebdc7966081315bbeb071ce"],["/2022/02/24/Bomb-lab实验/index.html","37247818fb9fb4b367b25bc0c51394eb"],["/2022/03/05/nginx学习/index.html","ef00e9cc644feb1ac9a03d281f7017e4"],["/2022/03/09/汇编原理课程学习/index.html","052aaae9bd54f3eb129e400ca9e13b86"],["/2022/03/11/Keras学习/index.html","0bfc94624aea0c1f61cbd308dd72b889"],["/2022/04/01/graphviz学习/index.html","bd090c0eec28f66c68e9af0ed9bb2dd3"],["/2022/04/07/django学习/index.html","d428a79d3d9a252f9fb6678ff7d75e2d"],["/2022/04/11/密码破解学习/index.html","054ad441ce619d41f8148466225d3487"],["/2022/04/12/flex-bison学习/index.html","87ce0cdb508ca08a15b68f90e2c7f1b1"],["/2022/04/15/pytorch学习/index.html","278f9df8092e3a9ee06122015dbfd7b8"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","0f1666738aaa4eaacf10600a7dcf05ea"],["/2022/04/23/写一个音乐播放器/index.html","b2ecfda0bd43a7439f70732340652cea"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","5552b5ef4d936a6582813ad1638cfaac"],["/2022/04/30/GAN学习/index.html","0b1f53277e2f36593ba32e3efbc8f52d"],["/2022/05/02/html精学/index.html","101c1b5895b749f33ada3f925194c02b"],["/2022/05/06/write-a-compiler-by-yourself/index.html","379a9fe2d8d0f5e6d04269ca42d8fc21"],["/2022/05/30/acwj-01/index.html","ce07a44b1fced74e3042ed74e2a8fa2d"],["/2022/06/14/animeGAN/index.html","0e407957b89e91b9c20adc3d507ff05f"],["/2022/07/09/c-与算法学习/index.html","af4c5ed15a729eddfb267a163e65226f"],["/2022/09/19/flask学习/index.html","d1beb398cd1503b3baae0a05f30a00b3"],["/2022/09/22/cs224w学习/index.html","b0fd3b8385f0c5a732ddad12d7299287"],["/2022/09/28/记录一次wp重装/index.html","a5aaffc7659a95222ba28457fbc10e87"],["/2022/10/01/Obsidian学习/index.html","e8f0c61c2fd5af40bcbe8aed1dc9fbfd"],["/2022/10/08/vue-element-template实战/index.html","c256b86f58d906bc5ca4289f301f4911"],["/2022/10/25/vue网上商城项目/index.html","16d598370d3df4c5221e782539c6c8f9"],["/2022/11/11/leetcode刷题记录/index.html","c53ed092c51156a3a34cfcb5492719ee"],["/2022/11/11/使用overleaf优雅地写文章/index.html","9ab310958f8d1540b79ea49cd2ebd71e"],["/2022/11/22/磁力链接与RSS订阅/index.html","e0285c9fd61314007b3bf6334a3ad207"],["/2022/12/11/uniapp申请获取地理位置/index.html","c17ce8c2d7734db350900fa2c0d72f09"],["/2022/12/26/pr剪辑学习/index.html","7c107e3d2a78ab0bb463a41a8965ed88"],["/2022/12/27/css中的flex和grid布局/index.html","a6f92ce01273273aafd5a3690b27cdc8"],["/2022/12/28/Flutter学习/index.html","9b8698c038099564657e2fb54c1dfa1d"],["/2023/01/01/美化github首页/index.html","c8bfee7d5e3bb7db98e0bdab1480095b"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","861bcba2c946f85972e9dfb9c1e898fa"],["/2023/01/04/构建微信快捷发布文章工具/index.html","8a8c53e063bc364a0fa0f92b37f2fc52"],["/2023/01/14/dart学习/index.html","4ef637a80f05f4d6ab5ec99bd2fd8ade"],["/2023/01/23/闲置服务器BT下载影视/index.html","61125b77318709bf81029e4b8847b07a"],["/2023/02/07/TotalCommander使用和学习/index.html","4ff5994f59b838ac57adb3f1699dca54"],["/2023/02/13/docker学习/index.html","cb0c519a947c0e428177246b8d14841c"],["/2023/02/17/DLHLP学习/index.html","e0c588db458525a9302278b15ec73585"],["/2023/02/18/学习purecss构建自己的css框架/index.html","531db278c6bf06af53b48ea2e5d309aa"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","ae094ca36ffffcb4873f3f483a9f1dab"],["/2023/03/05/STL学习/index.html","3a11c7de12fcfa97e91708d672b1c39d"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","d6960a1e675923c1b112a1677d5848e3"],["/2023/03/23/实战写浏览器插件/index.html","aa4239bc188f3f2a67d61675fbbc7eb6"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","fabfc1d283e85da666d45f8479e1bc4c"],["/2023/04/02/EndNote基本使用/index.html","2acc3498e5bea8cbcc3406e8076c8d28"],["/2023/04/04/mne处理脑电数据基本使用/index.html","cd65432cf1b1d93bda3d427b1769fa54"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","f4af90936b8edea9fd5eab3a852b87e5"],["/2023/05/02/python中的logging模块/index.html","b24a7568f1b8e4d6503ce0ccbf23cf0a"],["/about/index.html","a0527d2c57dec5dc9c06aaa45c028cc1"],["/archives/2021/04/index.html","1a6e096b0bf8aa061f3d41a8c5c6de6e"],["/archives/2021/05/index.html","7e89306f927ff2a6eeab6dda32cbf293"],["/archives/2021/06/index.html","9d96166782601945dc13d7c85fc33234"],["/archives/2021/07/index.html","22eb577b4d5ce746b5a38f0dce453d2e"],["/archives/2021/08/index.html","7d439040765166f70a95d64e67ed883c"],["/archives/2021/09/index.html","2ccf7c754f4b56ca6fec61320ee911b7"],["/archives/2021/10/index.html","2da1b733d244507c1985257b4d2fc08b"],["/archives/2021/11/index.html","ce54c841ab740253aca620cc900c81f8"],["/archives/2021/12/index.html","b8542417e99e220f845d09bd997b35a1"],["/archives/2021/index.html","7aab237063f949490d91ca3bf24551e8"],["/archives/2022/01/index.html","e0e55c1acc10d0cb7608e2f58db96d85"],["/archives/2022/02/index.html","b7e7944d1bf00e853bc9925d080f0792"],["/archives/2022/03/index.html","bb9307176151e2a21370f80b2a58bd6f"],["/archives/2022/04/index.html","c82d66037cfcfdcdf904a8e33cfd683d"],["/archives/2022/05/index.html","9c749c6a4a3d6197e017c94f270ba890"],["/archives/2022/06/index.html","6d8f7d4ba11bb091a795ddd4035829ac"],["/archives/2022/07/index.html","4fe48c62f806d99edaa2d051c2781828"],["/archives/2022/09/index.html","3dcd52dffccc1a39bd2016afbad5bed0"],["/archives/2022/10/index.html","e74997c1f6a471a0157cb67bbc22b574"],["/archives/2022/11/index.html","5cdcfbdce7fe06e5b4aede3e9fe468f8"],["/archives/2022/12/index.html","c404ed7cfa557b93ca4dd17941f3202b"],["/archives/2022/index.html","d217ca5efdcd91dd2197812e3e913c3c"],["/archives/2023/01/index.html","8639dc8f3fa9bf1dbd6063dde5e2e220"],["/archives/2023/02/index.html","adc37b69511f5c6bfea0b2df4640f9e7"],["/archives/2023/03/index.html","e87707b5dfa8be433c1521709025a913"],["/archives/2023/04/index.html","82bd268c9a7fbe59af5dcf6f7b5509be"],["/archives/2023/05/index.html","22d7c1369a150c397ea157db7a8e5eb5"],["/archives/2023/index.html","c1d9dd1825522998d60eea5c6822052d"],["/archives/index.html","5b495c1f8a2676d71553493e84388734"],["/archives/page/2/index.html","ec4198e0c44b1f1fffedaf8acb2535d9"],["/archives/page/3/index.html","9e7a44b3b5377f80e27f2bcf0a7f1b80"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","bd5428a78dea92e95e7a6ad581874b5a"],["/categories/Linux-study/index.html","bc7ae2f9de969893a821e671eb198037"],["/categories/ML/index.html","3eaded7dc916fe10a2e189721a9bf4a2"],["/categories/Nginx/index.html","4a5a21da52e67a59c350efbf7cbc5f9a"],["/categories/Spring/index.html","0006c522da3f8735cd65fc68c65bbfd1"],["/categories/course/index.html","ee25577cca3bb7fb0a8c2ff09775d017"],["/categories/django/index.html","a4e126a46f2da892c16f9f6eef6986ae"],["/categories/fun/index.html","a66822e1eff15d9d3e15510db61587a3"],["/categories/gcc/gdb/index.html","aeb990d6cec72ed907aa4665136328e1"],["/categories/gcc/index.html","5a19bf62b970a0cd06549b3d2186a366"],["/categories/index.html","116e167fc64227d1cc976f6d84586004"],["/categories/java/index.html","50d628a0f159eae5c1447f2280eb1722"],["/categories/latex/index.html","1d00b9318c6371499f5706b18501cce1"],["/categories/python/index.html","e16e4aa8e1d7c821f532b85bca715a8c"],["/categories/study/index.html","490072c640cea7ca9deccc58f85cc060"],["/categories/vue/index.html","c854d0fccf950450fd11db6b7f0a7aad"],["/categories/误区/index.html","4e70b50723fab2f0a81efbf9bc9382c2"],["/commonweal/index.html","647db4a256bff9a3dfb65e0303d217e9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d9361643a690167a686a86861a1e8655"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","0496111b2d36189f8a4104c7757117ed"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","7de28b574d0a1b7bcfb0100f2ba05ddc"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","68f1630d45a72b9696291e7b59d51f07"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","62f1f9cd8b13c5d56dba7c358ee74bef"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","5bc6f4b78842db3f9df9578eddb586f3"],["/page/11/index.html","93978e15c7bdf4347b5f70276fa3cb52"],["/page/12/index.html","afc262298fbf6c35128baf2384848599"],["/page/13/index.html","609aff9feb3e1c5048b43d1ba756419e"],["/page/14/index.html","aed25fb1ae312edece2a081d7c216c06"],["/page/15/index.html","a7684d63bc4fefffacf68a97fb7485d4"],["/page/16/index.html","ee253838542949b27df80b947727d33b"],["/page/17/index.html","a73fc7d75377a9be501ce2415dff35bd"],["/page/18/index.html","155ac0f87c27eb00dff1ef0b05bb1d35"],["/page/19/index.html","7634d4728793a83231c5b00e518a60af"],["/page/2/index.html","2264eb54a99fa4ed98dd762fafec3cdb"],["/page/20/index.html","490dab65ce6302646c048745bd1cb2a5"],["/page/21/index.html","ae0e97049ea2b14bc9726108b9c0f2a9"],["/page/22/index.html","6e21858837c3291b4120c079d4c35e75"],["/page/23/index.html","3940c61d49c9bdc476be0085a4265833"],["/page/3/index.html","0dfca9e44ee87d93e02c3b4ef113fd42"],["/page/4/index.html","90897225999e5163fdf6923937cd82a4"],["/page/5/index.html","2b6ffccc551089bf9406848a69b8dc6a"],["/page/6/index.html","bafd59fd2c8adb9422cbe5b48959667a"],["/page/7/index.html","4edbf7aa763d10510e081b2159b704fd"],["/page/8/index.html","88f780825bd54d0e9118ccfe0a79412e"],["/page/9/index.html","50c2733b77b5d23313ba039584ff554e"],["/resume/index.html","91c86518b11a665d20af3ba494f471da"],["/schedule/index.html","680ee09a96cb36549aac9ccbde6b9627"],["/sitemap/index.html","6d64c7084f8f067a2160316218444400"],["/sw-register.js","dd4f47f98b6162f42abaa802a3fd3038"],["/tags/AI/index.html","25343753d033ddab01f21503569d6ef5"],["/tags/BT/index.html","60a09903e9c2084a6ecaefda194c58f4"],["/tags/BaiduNetdisk/index.html","484fc14317d390da993c819e98d4046a"],["/tags/Bootstrap5/index.html","7ed81e468d0ce65fff4f085a2aba4057"],["/tags/CSS3/index.html","1c71b35cf374c9ad833f1922662a3e10"],["/tags/Centos/index.html","9568aade63b0059170d81d5e5c1b7933"],["/tags/EEG/index.html","e7a2e18f943688dd3335efea0330a36b"],["/tags/Electron/index.html","c3e288ea001f353e3bf63bad2daddfb3"],["/tags/ElementUI/index.html","ec2eda595cdee81b3c3922c6f5f50deb"],["/tags/Flutter/index.html","87182cab8b8a90ff671ef20bb718b284"],["/tags/GAN/index.html","3e8f280df74b5a0025c1149f2ed00b03"],["/tags/GUI/index.html","ecd5f2550f16fb9b3b7c1bb9389a997c"],["/tags/Git/index.html","b43bc047273921fdb313fec62e199e89"],["/tags/JavaScript/index.html","947e6d5ea459bf0191fbf59b3fcf4dc0"],["/tags/Keras/index.html","42cc486e1ddc4d8580dcc7a1505d9923"],["/tags/Linux/index.html","4788e49ddb76a0d0e4e7f518a24e917f"],["/tags/ML/index.html","e3ce5f80632e7b877326ca7cb9fc68bb"],["/tags/MNE/index.html","cca9fd1c688ecf9109e0df11b54bd103"],["/tags/NLP学习/index.html","5ef815973ce72498adc2e2e7ac5d7c79"],["/tags/Nginx/index.html","8b2428850005eb6cf8873e2e05b6213e"],["/tags/OSS存储/index.html","4c31de8d819cf867771e0c2b6077b2eb"],["/tags/Obsidian/index.html","c5b01046990aef975a54703e659583a2"],["/tags/Qt/index.html","76efeee9168eac863963bb3575b523ae"],["/tags/RSS/index.html","f872664de8d20d305d6bfec82eab791e"],["/tags/SSL/index.html","449375396873907e7f97304278cf2717"],["/tags/Scrapy/index.html","6cac94353b86785ba19f28a8a32fb1db"],["/tags/Speech/index.html","6d6698de9b090b04f33d66fe2747de84"],["/tags/TotalCommander/index.html","1ac08518c1ee6733541d0982e21b09f6"],["/tags/Web/index.html","ef954a9206cff721f35b60f2432865bc"],["/tags/algorithm/index.html","169780dd4362ebbbedbb1b48152a514d"],["/tags/bison/index.html","3a277477372513b980641eaefde258bf"],["/tags/bomb-lab/index.html","627239adda9d53043570cf6b929ac01a"],["/tags/c/index.html","6f73bd0cca15eb062aaeb542d87e412f"],["/tags/cheerio/index.html","9a490ec7d889acc0681e81e8afb22d84"],["/tags/codewars/index.html","8cf6b00b3f9e86f03852b8bd2f06e2ce"],["/tags/compile/index.html","354b8324d78ab2ca070964e19a9137b1"],["/tags/compiler/index.html","8e237a934e5d225ff4ba25abaab0818f"],["/tags/cors/index.html","834cd2886d1d54e60873f7475158d548"],["/tags/course/index.html","5cdf5209fa3d1f78d5ebf88b4b2eaf6c"],["/tags/cpp/index.html","70ef030e9f65d096328404ef59fe948d"],["/tags/crypto/index.html","af39ce5f767a371634b9d77365518a5b"],["/tags/csapp/index.html","136745cecaa94e4a3a83e9e94de1cdc8"],["/tags/csp/index.html","b3707285030d5f951394a9791d5b9cfb"],["/tags/css/index.html","535ece7ce2fe6b79577e92880ef6b708"],["/tags/dart/index.html","b2cda997af8152ec0bc1a7cdc5ca874c"],["/tags/data-structure/index.html","07ee40d8dabaab0db9face79e8649bbe"],["/tags/database/index.html","344b50c1f10248c7a5a3c6fa0cef6264"],["/tags/deep-learning/index.html","ecdb66e5db4f2db7d91ef9f562874ca7"],["/tags/django/index.html","efdf8e116dd2cb4dff33da64afb99c4c"],["/tags/docker/index.html","c4a7c6e6a1650473b36834f36359fcd9"],["/tags/dwm/index.html","40cd87b272633f7513ae76cc097607e0"],["/tags/exercise/index.html","2ccd401bfe13556e52a844b0a4e8e05d"],["/tags/filebrowser/index.html","cfdac4d2eb2c4cfec5db0bb7f4645b6e"],["/tags/flask/index.html","b674129ff7174400343a2a3825c7d976"],["/tags/flex/index.html","4499ad2686b4c29479d73bbbb550a90d"],["/tags/front/index.html","f567c6cb0545e50583852d1c00ecca24"],["/tags/gcc/index.html","aede16216ade4c07b999de2ec67cb44d"],["/tags/gdb/index.html","57bbef6d470af5d2e2e63041d558922f"],["/tags/github-profile/index.html","1a4e92396a01b6f102b773f46eeb46d3"],["/tags/github/index.html","a73cb02c8fc6393e3526912b4ad303ac"],["/tags/graphviz/index.html","619832706048b4ad71f3a3665a1d8162"],["/tags/grid/index.html","eaddf380ee6d469c900867e75193766e"],["/tags/html/index.html","3a1fcd77eb238b59a55980b3cad60654"],["/tags/i3wm/index.html","6e429c5219d5b651c949de48feffc7dc"],["/tags/index.html","22febded74ff3c7e5c3aca6365691c57"],["/tags/issue/index.html","ecaed5ad677506dae1a498e895e6e554"],["/tags/jQuery/index.html","12ca116913ea05c167bae295c333c8d8"],["/tags/java/index.html","fbb76bfca49bdd49cdfeb28718858cb9"],["/tags/js/index.html","39f6641e697ed9b421df0c2a9fa0b296"],["/tags/latex/index.html","5365f045f9069dbe1658444e5e032bcd"],["/tags/leetcode/index.html","3adde186d2910f5265f2f611055cb029"],["/tags/lex/index.html","3efcb1365f09a5fb4ef62075fd1a8e55"],["/tags/logging/index.html","d0a50a0078cd3cc1e7efd51e2cbbc9f5"],["/tags/material/index.html","32139e4f1500c1a684d74497828565ce"],["/tags/music-player/index.html","c03905e7a5df5a5f20f549d0a72cabeb"],["/tags/nodejs/index.html","9bb918c3da42dab277f6ec0a30bdede8"],["/tags/noj/index.html","d5b2634f8f2a991be1fc1030b8f595f5"],["/tags/opencv/index.html","654725670d0d1164b597039e6262f97f"],["/tags/overleaf/index.html","79619d316367731f982f1c32d019c1cd"],["/tags/pandas/index.html","d84303b68512994711df4162f0e2e8f9"],["/tags/paper/index.html","249bc8785a799567510e93ba5fc6cb0c"],["/tags/premiere-pro/index.html","4c3a43f55c3a2572497c7c9b5768f945"],["/tags/proxy/index.html","58866ab0bad9e8e4c04260dff93f0e02"],["/tags/pure-css/index.html","88abebf78da52dcf143d7e0e80ef5370"],["/tags/pygame/index.html","dd7e9f7ca61bacbd9cfc71bd9ed0eed4"],["/tags/python/index.html","8091e85de5904bc216a7bb97688420d8"],["/tags/python/page/2/index.html","b4c1dda302815bfec093841a73329c7d"],["/tags/pytorch/index.html","17f10d3d315173dbf695f88810322494"],["/tags/reading/index.html","09122b5053cc3dfecd3ed65298efaab2"],["/tags/request/index.html","0f3ca13662f6a145063f644e37447617"],["/tags/requests/index.html","0764f776f9c75981735e45b89be0faa9"],["/tags/security/index.html","a18c1c18f77735b5c6ef1fcc9f72fbe1"],["/tags/shell/index.html","bbd3c6bf3b36d229fa27f34ac9d9f36a"],["/tags/sign-in/index.html","417607c0ade9f597ab2bb42c7e311f2b"],["/tags/socket/index.html","7aeca6ac378dce33232a5323f292d2dd"],["/tags/spider/index.html","7ea9883d1c60dee1421ad37c45cb4ee1"],["/tags/splash/index.html","2d39cc31912b69adc15a6c7f0e9f81c7"],["/tags/stl/index.html","9b95a9490208c28e4c49028474a9bb0e"],["/tags/sumatra/index.html","c7e2a4b8545d6019450fb0bee5785da7"],["/tags/superagent/index.html","d0e13e5458f9265edf91d74ad930e89b"],["/tags/tensorlow/index.html","54ecd2784e2bb81d4ffbf3341cd04439"],["/tags/tex/index.html","0f55ec6fa87fa7c0509430eadc8e577d"],["/tags/thesis/index.html","7d4e287c2a2ec2f57d6bb239bdeb4a7f"],["/tags/threading/index.html","cad67aa4f0c037ed404bfabc31e4db43"],["/tags/tkinter/index.html","d42c45b21923d39ee67a92f9d785307d"],["/tags/torrent/index.html","f697aba641bbc0e208758070aa38b57d"],["/tags/tutorial/index.html","f9ab41d3051dc0aa3074706528aeb058"],["/tags/typora/index.html","4def91a6e2c0576e968c71de34d14630"],["/tags/uniapp/index.html","c6a15ae357e82fc1641c96a6c6f75fda"],["/tags/vite/index.html","35b3277c8f9c5d7c1c499a19e51ccdbf"],["/tags/vscode/index.html","3201127fa9813df7499d850aa8b72c9d"],["/tags/vue-element-template/index.html","60e96a2fee6ed3f55386ca235325185b"],["/tags/vue/index.html","a7467f8df67970c9c0897a3d823ce9ac"],["/tags/vue2/index.html","4b7544356b70cc6d30901106985e7e3d"],["/tags/vue3-x/index.html","95885f25429a2d25dcf1ff4ac30d5480"],["/tags/wechat/index.html","febd1ea0e3582ab0fa6d12439dd001bb"],["/tags/wm/index.html","281388e54af6c57bc939385669d2fee3"],["/tags/wordpress/index.html","6b552e4da35c6fcac619565c4196c406"],["/tags/workflow/index.html","ba816f993b6efa9f66d1dc469daf4857"],["/tags/xpath/index.html","40e389df1a5e9b19206d6f09a71375bf"],["/tags/yacc/index.html","95a53077724899b42e8e17bb9c46ee33"],["/tags/zsh/index.html","a47eb84d6a0ea1658894d2caafb38c9e"],["/tags/七牛云/index.html","8b4646c5c5f8211e6afb41c980ec9436"],["/tags/函数/index.html","7419d8bc599cdb44ee86b0806ffa717e"],["/tags/剪辑/index.html","4ced220692ab9a2ecc79eaed487dd128"],["/tags/存储/index.html","c8721a9a13319caa07f7af6e04f4a4ad"],["/tags/实战/index.html","f3830ef199bbd67a185de9c3891da8c6"],["/tags/工具使用/index.html","9fe841b286be3fdde03f6dd8f8255e49"],["/tags/建站/index.html","e7bbc79fcc07267a2f1bf29a6c91e614"],["/tags/微信小程序/index.html","b9637f43871030fb76d324b103ce5854"],["/tags/指针/index.html","1ce83f7ab63e65b91ca887c63f718752"],["/tags/效率提升/index.html","0ef8b6d19549e7f017c1aa3e88aff909"],["/tags/日志/index.html","13593db273b8cbb6f08d87dd46bf2ab0"],["/tags/汇编/index.html","395b07c56e3f6894bd589c3e176e7a78"],["/tags/油猴脚本/index.html","1931677ff6e39a90cb28284679d0dc31"],["/tags/浏览器/index.html","7cf4db27da297c6242413af4ad895bc1"],["/tags/爬虫/index.html","8fc5e61849e24f730447c848fb657690"],["/tags/算法/index.html","e97032b4dd6bacd0d941b7bddf5fa119"],["/tags/编译原理/index.html","fc553b2edacacfe79e7ffe6f094d9158"],["/tags/获取地理位置/index.html","28f45246d56597b1824de14a197aeee4"]];
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
