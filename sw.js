/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","657fd195c2e78630d6b9e7642f27ce70"],["/2021/04/20/稀疏矩阵/index.html","d2cfc74e3959795d6edfedc5e24725cb"],["/2021/04/23/广义表简介/index.html","755418ba75477e6978530f45a29f1e8c"],["/2021/04/29/关于指针和函数/index.html","4ea995de920e617a8c62c32b32e3be7a"],["/2021/05/10/哈夫曼编-译码/index.html","08ee3f5416fed1e11780438d72a1e324"],["/2021/05/17/数据结构noj_2/index.html","e4d4a7154213a3460882944531c75af8"],["/2021/05/30/数据结构试验/index.html","3011265171b657ce52e7f36ac50c3999"],["/2021/06/12/数据结构noj-3/index.html","4e8128f0e9fe1877924d541fdc88d09d"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","888307cab3d106d567a497fedb16362c"],["/2021/07/08/课程资源分享/index.html","80fc018599da3ce773608dbcfba07c24"],["/2021/07/20/Scrapy-下载图片-文件/index.html","c76b13d749eab1ea9928e7b12a56af93"],["/2021/07/21/Scrapy-动态网页爬取/index.html","36f143b5e9c528d2a62ddbf244346eb6"],["/2021/07/21/疫情打卡/index.html","a7ddb933d89d75d8fb8d53484a7d43e4"],["/2021/07/29/Scrapy代理设置/index.html","4fa1d8a863af818327b50a05a9102061"],["/2021/07/29/数据库认识/index.html","600d263e724f284f5c23c0604f817ac0"],["/2021/07/31/Python多线程学习/index.html","325aec3c17f782eac5a74c9e0befb549"],["/2021/07/31/tkinter-requests练习/index.html","a3b5198b3409d002279a7f1cb7634c4d"],["/2021/08/10/Git学习/index.html","7b8f11fd9cb642bed2d612a369126fb9"],["/2021/08/15/pygame实践-1/index.html","b46eafa3d40b408ca470ab0f52e707e9"],["/2021/09/06/微信小程序开发/index.html","c2fab54d006157f23eb7857a5035bf3e"],["/2021/09/21/命令集-1/index.html","cdb9f9018997cbe78fd460d33f1b9a19"],["/2021/09/21/命令集-2/index.html","5a3b7cc929c337cb4538378b5d89b4f6"],["/2021/09/21/命令集-3/index.html","7386b79f1a778e0dc762780822a9493d"],["/2021/09/21/命令集-4/index.html","bcbc8482abbb33e3b476ffbda218bc9a"],["/2021/10/03/socket学习/index.html","ac0da31fbfef65fc6491208b7709b015"],["/2021/10/10/dwm入门/index.html","f383859a57d7a08e062dac21665739c4"],["/2021/10/10/安装ohmyzsh并配置/index.html","a3963beddbb269bb8a77cbaf1e049080"],["/2021/10/20/css学习/index.html","83918af2890efb36501fd47c3f487584"],["/2021/10/20/wm入坑/index.html","ed380b3edbd614e6e9da895181a8a988"],["/2021/11/03/微信小程序学习/index.html","56aab080ddddbd7b528790500f268ced"],["/2021/11/04/css揭秘/index.html","6019796ff9f0d79cc06b4213b9668f1d"],["/2021/11/05/css-练习/index.html","1a32a95fe9d21da5826372bc06ad5976"],["/2021/11/21/命令集-5/index.html","e4da02a737436a516d477f5ff9d4bc53"],["/2021/11/21/命令集-6/index.html","e7a91d7e0ea9177d205fccc2558f2d56"],["/2021/11/21/命令集-7/index.html","1fd8664cd8a77cdc3683e6044445ce1a"],["/2021/12/01/搭建wordpress/index.html","ceac3d1f64e923a70fee7013d9fb9d01"],["/2021/12/08/python操作百度网盘/index.html","e3cfcd4f53e12076d27fedcd1962550e"],["/2021/12/14/js爬虫/index.html","65a0e2945d6c8e7adf97679d4ea69951"],["/2021/12/25/为网站申请ssl证书/index.html","d993f1b7d89c79b19fa09435cf739a85"],["/2021/12/29/使用七牛云为网站提供服务/index.html","50647b3d73fd36514b9a012fabf21fda"],["/2021/12/30/jQurey继续学习/index.html","4efec40234dd0cbeb7e987f079f45251"],["/2021/12/30/jquery学习/index.html","26aa5505d97850e1120bf75c175ca646"],["/2021/12/31/vue学习/index.html","83f9c786c5739b9280f8ce250a4086db"],["/2022/01/02/疫情自动打卡/index.html","197146387f6b23119b8c94dbdf6838f0"],["/2022/01/03/javaweb初体验/index.html","5edb797a48e173a73ce0a5ea809de335"],["/2022/01/04/codewars练习/index.html","3e119bf31923b41f50a285bb74c22d5f"],["/2022/01/05/Spring学习/index.html","416c072f3c6fca2a8a561870822423b7"],["/2022/01/05/vue实战/index.html","1797c4ebefad20035c9eaf6ceeb24aff"],["/2022/01/08/gdb-gcc学习/index.html","fa37d79509f4d2860ef4e4d80252c0f9"],["/2022/01/11/python-opencv学习/index.html","f0d4a2a2dcbe7971eac56783b65ce0f3"],["/2022/01/12/汇编实战/index.html","e6d177ec0bcc61ec22a858c2c8055ea6"],["/2022/01/17/pandas学习/index.html","18c9ceaa0c76d9fe79cb22005a986aa8"],["/2022/01/19/可视化图的工具/index.html","dadca648db4f7a9eaec4608bb0d29c51"],["/2022/01/19/机器学习入门/index.html","d6afffed8e1ee119a0d0a170b5425d25"],["/2022/01/20/cousera-ML学习/index.html","208a547a9cf9b701b755a9a30d0993b9"],["/2022/01/30/typora解绑后出现问题/index.html","4615361dedaac7a705fafaea4825ddd8"],["/2022/02/03/NLP学习/index.html","51c2dcb58ad45d369e8025c5a49c2a33"],["/2022/02/04/Web漏洞学习/index.html","7e4c0fc121cf65bc499ebc7c5a564def"],["/2022/02/04/pyqt学习/index.html","04a2621bee124bcfb755a226ab4834c8"],["/2022/02/04/python爬虫/index.html","85a018f1640e924ddf21416fcb1341a2"],["/2022/02/18/Electron学习/index.html","5b624e43246e2ac2463eb9f4bcf44ed3"],["/2022/02/22/疫情填报字段解析/index.html","a3c435146849131544873f106f220a97"],["/2022/02/24/Bomb-lab实验/index.html","269550ba0784a9a669f3da62e1e8917b"],["/2022/03/05/nginx学习/index.html","825d7cedd8b18f6eb7de677f050c7209"],["/2022/03/09/汇编原理课程学习/index.html","502027895cea1b9d591aa68a007e548e"],["/2022/03/11/Keras学习/index.html","b6209e650f53b7a857a40693f60a4ea0"],["/2022/04/01/graphviz学习/index.html","4816e9bd944b9694be8b1f4c573dccfb"],["/2022/04/07/django学习/index.html","2f8720e5a61c632ecfa469b13c9b58f9"],["/2022/04/11/密码破解学习/index.html","bbf82ec6b24a826ee4ce1641f34edf6b"],["/2022/04/12/flex-bison学习/index.html","6cb93c9573041a04a9c4fa28dd67aaf1"],["/2022/04/15/pytorch学习/index.html","72097d0ad0bb0c636206be1e040b2061"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","b2f5e73fa2e411ab29cb3bb3e8550255"],["/2022/04/23/写一个音乐播放器/index.html","e83dc99dc8fdce7d8578548f4b791f6b"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","f818485887d7585aaad46212ecfa50a8"],["/2022/04/30/GAN学习/index.html","3de519486291597e66ec76929cfc7a13"],["/2022/05/02/html精学/index.html","80f35f749bfc44502b31bd57d03c4b59"],["/2022/05/06/write-a-compiler-by-yourself/index.html","afe56a1e551e2ee88472339a1a6aaa68"],["/2022/05/30/acwj-01/index.html","53b419a7875e80929d50a4a9e52653cd"],["/2022/06/14/animeGAN/index.html","9a25fc64603b70170ad522e675a865c3"],["/2022/07/09/c-与算法学习/index.html","795c4866634a6e4704607ce42de5e60c"],["/2022/09/19/flask学习/index.html","283c8200c0abcff6a5bcf642af599dc9"],["/2022/09/22/cs224w学习/index.html","f6e3993edc8b1861b8b0d36fe4d142b6"],["/2022/09/28/记录一次wp重装/index.html","02d5e6c6f4fddfd560e182986e5b6642"],["/2022/10/01/Obsidian学习/index.html","ebc00c055cfe3a6edc99f32092d709fb"],["/2022/10/08/vue-element-template实战/index.html","7d2bbaee019c0b3f0eceb739dae09aa1"],["/2022/10/25/vue网上商城项目/index.html","cd1ed0e04c0172b1d9a33cb59a99ec61"],["/2022/11/11/leetcode刷题记录/index.html","7ecffecd933a5ae402802964f3e2753d"],["/2022/11/11/使用overleaf优雅地写文章/index.html","7a9ddc93f570862ce9f2fa8612deafdc"],["/2022/11/22/磁力链接与RSS订阅/index.html","e2eb962e2faf51c672f99292ff73499b"],["/2022/12/11/uniapp申请获取地理位置/index.html","3a84e04744cf415034fbfc77e8d291b5"],["/2022/12/26/pr剪辑学习/index.html","24b61d0bcc3fe8a4d3343713c5a9c1f0"],["/2022/12/27/css中的flex和grid布局/index.html","f62ad77e957700e6ad98e211a03297aa"],["/2022/12/28/Flutter学习/index.html","15d7a0ad68fb6fd54698413e537ab52e"],["/2023/01/01/美化github首页/index.html","65cdb9bd6bdca968d9777507f60ef282"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","86273fb0de56663da0999b0f9a73eb2e"],["/2023/01/04/构建微信快捷发布文章工具/index.html","233b9374596df27bf3bb7a2faab458ad"],["/2023/01/14/dart学习/index.html","c92964896e56d30f519cbd77129da724"],["/2023/01/23/闲置服务器BT下载影视/index.html","f46e0b2bfd70a8addce7638eab392705"],["/2023/02/07/TotalCommander使用和学习/index.html","950f34a0e2c50586eedcaeb917627968"],["/2023/02/13/docker学习/index.html","358b9b4049d38f8720f3c45fd29852a1"],["/2023/02/17/DLHLP学习/index.html","c7756f614810c7464b6fb75c8e8fc86b"],["/2023/02/18/学习purecss构建自己的css框架/index.html","caef1f2e0f36864e0c8252c5fc2a1594"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","8657323ea90a4d84e85f857cc5ee932f"],["/2023/03/05/STL学习/index.html","bc93d67d8a39a0a18d1f30e090f2ae7f"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","c517f022c5b7a7e72065de4881b6d316"],["/2023/03/23/实战写浏览器插件/index.html","874628f2b2ed0c9732bbb8271be59458"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","579ab327235a74c25d2d94bcd02fbfa6"],["/2023/04/02/EndNote基本使用/index.html","fa71aa769d360a6f587fee5ae9bad3e9"],["/2023/04/04/mne处理脑电数据基本使用/index.html","2d84edb26b0e3c990e9b22403deb5964"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","7911a9254589798ee90214fc42b6832a"],["/2023/05/02/python中的logging模块/index.html","cbaf870b1cbc7ff4cfef5cac54e19016"],["/2023/05/07/python的特别方法与装饰器/index.html","384c1c66a3b092104e6733d8df430890"],["/2023/05/20/Wox插件编写/index.html","2632a96c79a54cf0e2ca5d9fd3888c32"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","c9c967ffc6af11170d3bb3512cb8b574"],["/2023/06/03/深入Clash配置文件/index.html","d499cb26fa3a61c36cdffa1fb6f52136"],["/about/index.html","cf5870b47f19e68d3430c1dc6a5d2fa1"],["/archives/2021/04/index.html","69ca84283646b442e428e4f7ab95422f"],["/archives/2021/05/index.html","4995a73535492ec7751ead841fc26ad3"],["/archives/2021/06/index.html","fc0c48d3625b2200df644ceca65ff7eb"],["/archives/2021/07/index.html","d45da9c49806888d81e7e7b233824f11"],["/archives/2021/08/index.html","9977d86fffc3fbaeda2672246440cc04"],["/archives/2021/09/index.html","1050f7ee6825cd9ae17661674847b201"],["/archives/2021/10/index.html","a0bb009c573e894f563fc6388975b700"],["/archives/2021/11/index.html","93ef44d1205b9377304c57eeebc34ea0"],["/archives/2021/12/index.html","ad4b7de14f06af04092bb387b4ce6ee7"],["/archives/2021/index.html","99e9cbe1e72481a8ef78b776f4196b8e"],["/archives/2022/01/index.html","7ffdcc2edcc41b4a2c520abe96c167a8"],["/archives/2022/02/index.html","18bd7492766c6872a3b3279e025764da"],["/archives/2022/03/index.html","0176e89622ae9cea687459eecd39f884"],["/archives/2022/04/index.html","543dd4f419082d69280bb876248d825e"],["/archives/2022/05/index.html","33a7454b7f25f2ae0844d7fb6190e7ac"],["/archives/2022/06/index.html","8833f87addda3da23c3b6afbee1a7f1f"],["/archives/2022/07/index.html","2a8a81c123f3ccba80f1b38e8428c851"],["/archives/2022/09/index.html","928169eab01b3f38d67e47a76fa34772"],["/archives/2022/10/index.html","b2a39410bef4ea4a6683402844fcb1a4"],["/archives/2022/11/index.html","30362adb868de99b034d8a4a3b5b0d08"],["/archives/2022/12/index.html","a475375f4fe2a832fd6beb54fd29d6f9"],["/archives/2022/index.html","9d957e5bbe0a070a4e2f5b2d80e952b6"],["/archives/2023/01/index.html","677b36009c7608a4f48f34809d24cccf"],["/archives/2023/02/index.html","e2cddf32071b5ca4b7583f36a8d65711"],["/archives/2023/03/index.html","b4103ac5398b7ee5caf051b341c34ded"],["/archives/2023/04/index.html","6c115af7846f6595961a30e0f8d4d068"],["/archives/2023/05/index.html","e015be7aa92aca334dccf3529dbf9628"],["/archives/2023/06/index.html","25c3444e962b3b3f7068a21121fd326b"],["/archives/2023/index.html","25baa8cb529fb14647b23ba294f8d144"],["/archives/index.html","101504a7297d1535010a83a647ca7e99"],["/archives/page/2/index.html","d4f500db81d8290a1283ab30cd893d35"],["/archives/page/3/index.html","a08247ad07d57baf8bd582bf55a8ec17"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","be36d5b244a7e12b9bd85642077f71f1"],["/categories/Linux-study/index.html","7d1cdad61410b2b45512adc252d4eaea"],["/categories/ML/index.html","825c4a3bc65bc4fd2d2e48a16dfb669c"],["/categories/Nginx/index.html","6a97afd6f7e678fa847aa38906f6ad9d"],["/categories/Spring/index.html","9c5f073a45ea68ea8d26223390f214b7"],["/categories/course/index.html","070087e551804a38ca70bd2abafe8df0"],["/categories/django/index.html","d08d9ac05d6d8ea41337efcfdf3ec898"],["/categories/fun/index.html","9926a18e47244a732f645a7d3607f88d"],["/categories/gcc/gdb/index.html","d3d20461039d7f92dcd36ce3537aa6f8"],["/categories/gcc/index.html","e70bfaebd3cf0172ed552a3f03d16d74"],["/categories/index.html","a97e964937cc0bf9cc26b0575a41361b"],["/categories/java/index.html","a3f46c9b3e92d4226d0ad32276e30985"],["/categories/latex/index.html","e0c5567821f99bcb3c945dfb39e67a59"],["/categories/python/index.html","3af5aa4f1250b464a106932640868242"],["/categories/study/index.html","fa9232b2d247ec603dc41485a21bfe10"],["/categories/vue/index.html","0138d86882610dd8eb4f2ce62bacc2e1"],["/categories/误区/index.html","ab1524cf112b87334ad4794cecd688bd"],["/commonweal/index.html","c285687ed862260d9b0e8b730c7f3e1c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5d6f061325c1c21e89324bdf5133c938"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","99eea14136a0a6cee41db9a2f2455faf"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","820cd2d18b50af5eb70c9f2d78bd0b08"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","814e74e8d8bd07990cfb02939581727a"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","d293569737c757c2fd2b24d85a603fd5"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","137b35c088449710820ac6d2000cbf13"],["/page/11/index.html","9f3fa9fee67ac79c62fcef8b720e0509"],["/page/12/index.html","eaf141731cfb830962c37b3d8c3975f1"],["/page/13/index.html","c54d2a278abf5c02f6fb999d50735a3d"],["/page/14/index.html","9d9d8137695caf95f00db95be812652e"],["/page/15/index.html","a0ca132b72ea49293da4a51e58f3d8c8"],["/page/16/index.html","f8da4ad7033511dcf9e44a2796033914"],["/page/17/index.html","3449631a128aa0b31720a9ea3cf5f1c0"],["/page/18/index.html","5e383bcd4442de3aebcdda39d43bd7d5"],["/page/19/index.html","564baacce50b877e6ddc0d53810c2644"],["/page/2/index.html","c06cea42b035e1421caff24f5dba2983"],["/page/20/index.html","50535329b005589b00f661873d236c3b"],["/page/21/index.html","5b1afd684c94fed471fa4f142d3ad86d"],["/page/22/index.html","6e2473bcc8607c0568e53507f7dcb6ce"],["/page/23/index.html","c28902ebe24b9a9024d4dad43e508343"],["/page/3/index.html","32503199af7f84dd9f261628cd9ae66e"],["/page/4/index.html","b3162a7638589b2f14d1a9188faaa011"],["/page/5/index.html","112432ee047028fe13ff29943380ee71"],["/page/6/index.html","280c89ca604681d9ff996920785efea6"],["/page/7/index.html","fd0431ef7a437feda6ed5dd22cb52aca"],["/page/8/index.html","e2955399e78ee31bc8191b0161fd2342"],["/page/9/index.html","95e48e595fb7c5330ebda6c3984d22ca"],["/resume/index.html","1c367c3ec6486cf81f4d38481050fb4f"],["/schedule/index.html","14ccb18a7b3a81d5015aebf6d413e3b8"],["/sitemap/index.html","0bba0cf8fb6414ba92576473492f4743"],["/sw-register.js","a881062e72552303cc7efca5c7fff029"],["/tags/AI/index.html","8bcdc6b2427fac366a224189ed7ba72d"],["/tags/BT/index.html","c5ebbc9fdbcd3d239591fad3abc3b3c0"],["/tags/BaiduNetdisk/index.html","994d1c6faff74bb31e73c5564ed97a7e"],["/tags/Bootstrap5/index.html","06024ee83bfc8435f95fb726f1568544"],["/tags/CSS3/index.html","e1a424a9cc534c5dc498956237822e79"],["/tags/Centos/index.html","e3fd17e2d6069a97c0f9ba8978b2eaca"],["/tags/EEG/index.html","e5e9d38f023a7cb2d3464657c7d09add"],["/tags/Electron/index.html","2fa4bc16a9b2b09e2df8edce74e8a587"],["/tags/ElementUI/index.html","2ac71c48e9b1979469d526e771172578"],["/tags/Flutter/index.html","446d6cd19aa0b46a4738377dcf9e2c53"],["/tags/GAN/index.html","11f8f12c23575ef609af4877aacc4595"],["/tags/GUI/index.html","a7bfa35886f25502ceb87f4c59c7bb1a"],["/tags/Git/index.html","df7f81eb118de7020ce0ad9bceafd5e7"],["/tags/JavaScript/index.html","6b440533bd737edeb06504782271c39f"],["/tags/Keras/index.html","6fd8894a42c42febfd190783bf060f1a"],["/tags/Linux/index.html","d4730768ededdf911fb2fb8c5e4f2146"],["/tags/ML/index.html","6243148f92b2a63e21761ddbcd361e11"],["/tags/MNE/index.html","c2e2130b0700fca085e6eeb298a6f30e"],["/tags/NLP学习/index.html","730f5436d4957eefe32ef9bdf0b4c243"],["/tags/Nginx/index.html","d843db8745edf8f666d5ce3287842aaf"],["/tags/OSS存储/index.html","9d44696df16e78e8b71bb9eb278a7008"],["/tags/Obsidian/index.html","62bba72c781a96e7968ddb3355e29945"],["/tags/Qt/index.html","b456de034590e0e04fefbf20f5a83abb"],["/tags/RSS/index.html","e9057362cdcdf58ea2b616ff0c928d8a"],["/tags/SSL/index.html","89f25b246e9ca9b613c314e1e3d009fe"],["/tags/Scrapy/index.html","113cf4261e086875cebb15429567ddb4"],["/tags/Speech/index.html","27f00a0aee8f6976486b5c70a7c3e0c7"],["/tags/TotalCommander/index.html","3e0f86ce0d9938816050f43223d512f6"],["/tags/VPN/index.html","14d3865a63d7fc763ed58e1347b512d1"],["/tags/Web/index.html","0e6f7d7be7bbafe80ee3e3e08df3220d"],["/tags/algorithm/index.html","42f89290759b53afe7cdbb2aa4a10c6c"],["/tags/bison/index.html","23823cac33b32dc667dd41981ec4f044"],["/tags/bomb-lab/index.html","945aaf6803ce95a09bf08d81d8464f4f"],["/tags/c/index.html","b05ca04eb0231e325725f094a1b7a1b8"],["/tags/cheerio/index.html","cd412c00c4fd3ab4760df187578a9cd5"],["/tags/codewars/index.html","5d2c76a9d6f7a26c6f8c70ed463d7f36"],["/tags/compile/index.html","5d5094c72244c9ce470b5b63cfb755a6"],["/tags/compiler/index.html","9d425f9d02ea33427ed47e4a9e9ebae0"],["/tags/cors/index.html","158bbf1561f48ec5f91fe619fc128654"],["/tags/course/index.html","74fa43c87bdaec700bf93620d0ca7747"],["/tags/cpp/index.html","c3bb638ff40b31629fe497f1dfbfc376"],["/tags/crypto/index.html","3fe6ce31115d1be3d374e26360f6cc83"],["/tags/csapp/index.html","a60e568853b8c63f4aacc313adde8d1e"],["/tags/csp/index.html","4a15d291ddda32de2ce22f7a697b82e5"],["/tags/css/index.html","afd4db085514467e2f79f8e303f19481"],["/tags/dart/index.html","79078206e56b3f84572f5e48f374eb50"],["/tags/data-structure/index.html","4b205bef618a9908f48ee0c7f2fdb89e"],["/tags/database/index.html","3bb93d9a033ec1c886e58c71fbf9fffc"],["/tags/deep-learning/index.html","3b46d091d6d9fd2878fbbeb1fcd976ba"],["/tags/django/index.html","d2a5e5e9244922c6b919bae865ff86b8"],["/tags/docker/index.html","000b3de069206b5dfccd84d2630bf120"],["/tags/dwm/index.html","2dff598d3853df52e5b37f02107f4531"],["/tags/exercise/index.html","b8d94c51a7cca735853802114c5baebb"],["/tags/filebrowser/index.html","ddffe949f738303bc63ba30452f70fb6"],["/tags/flask/index.html","cb7dbe12f235b478a8909c013d99ca9b"],["/tags/flex/index.html","f28ab1eb89c189669aa0ec79919b5b25"],["/tags/front/index.html","ccdfb14b89cefc8626a6034f8f7a9b0c"],["/tags/gcc/index.html","d67cc737dc9357931f3e935f8c8a0ccc"],["/tags/gdb/index.html","cd68ef29fa8f3e5ff7944b3a2ab763da"],["/tags/github-profile/index.html","a9690973978934e92b9ddbca249de7a2"],["/tags/github/index.html","f3cf623a39105ff56f96a32a7523abb5"],["/tags/graphviz/index.html","c44a5374e6d7e47e6a4470d566e7517c"],["/tags/grid/index.html","c9663604aadc48a22018661f89d430b0"],["/tags/html/index.html","68b830647ceb609ccc51434053a264fc"],["/tags/i3wm/index.html","729cd99b4cfd90eb2af4fdafae599dee"],["/tags/index.html","f82c71eef56aca3917418a8957f36c4b"],["/tags/issue/index.html","58440d30bc927a836821da3dea1d4b0b"],["/tags/jQuery/index.html","4e157a4f95b833af5657e7e36d2c568c"],["/tags/java/index.html","27325bed11d2bcf5604dc3e0a2934f7d"],["/tags/js/index.html","55e3d69623063d47f7af3d79e37650f9"],["/tags/latex/index.html","accd9021b15814d130d2ab2bf7bf69fd"],["/tags/leetcode/index.html","a6d5d9ef41d3851b3c3dc16da07a66b9"],["/tags/lex/index.html","8f7e07ed14cd6c5ad4475fd2db9af27c"],["/tags/logging/index.html","92b8e5fe3e09c45a6d1458d533458504"],["/tags/material/index.html","ef06cce2f8490b283fbe0f5daf0820b0"],["/tags/music-player/index.html","4359daf59c398ab40d9a8022bf0483e2"],["/tags/nodejs/index.html","89819f15562131624117f142484b0cf6"],["/tags/noj/index.html","783927bb53236494032c20e9c0be8200"],["/tags/opencv/index.html","8e31c9a306d6a281c360367a107afe7d"],["/tags/overleaf/index.html","acbb80643a178048bf5b6f1efa7ec0d5"],["/tags/pandas/index.html","fb9a1b06fa6cf0d7da6a26c8372daf36"],["/tags/paper/index.html","26f61ab65a0e99bdf5dc684426418592"],["/tags/premiere-pro/index.html","409420622d8f16ca7c5f81e4c7c9ce0a"],["/tags/proxy/index.html","f9e201ca60fe68237c8b751c2c7d9731"],["/tags/pure-css/index.html","943c03c1be66cd920141fb0e559ef431"],["/tags/pygame/index.html","b6a4a01600ee5108bec8553b0ec01dfc"],["/tags/python/index.html","e12a4d9cebe9eec986a54cc52edc610f"],["/tags/python/page/2/index.html","88b1a074162bfbc21b6ebd6f3aa420aa"],["/tags/pytorch/index.html","c3b36ccf4c8fdb98146f34cbdd73b1ab"],["/tags/reading/index.html","9d535cb2e6cebf6fc5f630a679d959c4"],["/tags/request/index.html","94aab5cafd11aadbb741b895351423c0"],["/tags/requests/index.html","48857d7a20532cff6d941246f1ffe3c4"],["/tags/security/index.html","5a1b7779318a69b634d0e0366f5e2709"],["/tags/shell/index.html","fd6abf0b89b639d4c8b47312ebc8e71c"],["/tags/sign-in/index.html","cee6aecb3e195878f585dc465736b772"],["/tags/socket/index.html","d2639378d59c49f3f7ec3d4307361918"],["/tags/spider/index.html","5bc1914e6af20a5a905a34d91a62280a"],["/tags/splash/index.html","1bc6e6cb3fa585ad265677d1104ef7cd"],["/tags/stl/index.html","315102a4c39503cf8ed52bc9a1966985"],["/tags/sumatra/index.html","6084fee2102d0d2d5f3e678fc170a228"],["/tags/superagent/index.html","2c0990968541ec8979cc253212238de5"],["/tags/tensorlow/index.html","e14f89e0d254b18bfa00c4e094f6e88b"],["/tags/tex/index.html","e9d00516b251718a267a529ee607a78d"],["/tags/thesis/index.html","d7f0ab42461c13045ed0acc1fc1a75f7"],["/tags/threading/index.html","0489c33c4e686f0c4c26eaaa7b5beb20"],["/tags/tkinter/index.html","cde2d34f30dfbef97a1e99065a491565"],["/tags/torrent/index.html","a230df1c07530c7c45dcbceb0d21b915"],["/tags/tutorial/index.html","a51055ea40d22f53cbb3998000f12562"],["/tags/typora/index.html","1a79542f3c591faebad4de189cdc590e"],["/tags/uniapp/index.html","78e0e8825a23da4baaea8bc1abf10c98"],["/tags/vite/index.html","f61e921aeb6637666cd37596d58ca300"],["/tags/vscode/index.html","f0edaab3e0864f155baf84044fcfa6fa"],["/tags/vue-element-template/index.html","dc1a2b676e362371a0bda9a33c107127"],["/tags/vue/index.html","c73eeda8a60690f1d0eb2d986d8544a1"],["/tags/vue2/index.html","17d816154d9765098fe2b7decc0a34fc"],["/tags/vue3-x/index.html","d3a14a1ad85706f0484fc25898c51dfd"],["/tags/wechat/index.html","a7c72a30057b42b4ea4e79b324c1ac56"],["/tags/wm/index.html","5e4f898e2cd6d106e7a7c57268964660"],["/tags/wordpress/index.html","dd884139110d7282dd76a3ed2f7e2a69"],["/tags/workflow/index.html","2edeeb41b6c3736519d742842b4c6377"],["/tags/xpath/index.html","12d9a32551064090048821c864c9199f"],["/tags/yacc/index.html","bbfa7309aac1aaad0870ed9760cb0b25"],["/tags/zsh/index.html","fdafb214b6443027171147ccbd45d6bf"],["/tags/七牛云/index.html","67d4320661e8815b39289bd77a0f3d46"],["/tags/函数/index.html","480e68b6e1cffbc0448861f44caf6162"],["/tags/剪辑/index.html","56f1c43a3e3127c512221b69181e8373"],["/tags/存储/index.html","dcfb1a0905d184ccf0ffcb0a217b0d63"],["/tags/实战/index.html","390d77ae91969d89b7ea53b1f8db2ff9"],["/tags/工具使用/index.html","b884300b182c8d746d2f3a894304b9d5"],["/tags/建站/index.html","8adaabd81611481e1916111d3c526c75"],["/tags/微信小程序/index.html","e155a56be256cee67979badfbac7cdda"],["/tags/指针/index.html","f20ea51c10365079e20304eb8f2a1f94"],["/tags/插件/index.html","a01f257a5dc01d056ff59c1e9bbb8abd"],["/tags/效率提升/index.html","76507663b45aa660a94ce009a74840ca"],["/tags/日志/index.html","778114a9ffadb7960cd3982394a8bed8"],["/tags/汇编/index.html","64ba102af551de70af74269c37e8a93a"],["/tags/油猴脚本/index.html","2304f74d871b4289ee55396340ff2341"],["/tags/浏览器/index.html","9c4652bfcf688aaa8088e6908fcc00b5"],["/tags/爬虫/index.html","73d634217d866e5e96654760b580b6d1"],["/tags/算法/index.html","5b35469c5489346187fdcc8ba6ff9bdb"],["/tags/编译原理/index.html","be451cd8dfa60926e960ff6ff7d2973e"],["/tags/获取地理位置/index.html","80f20a5253ca1cdac787e4308ea22f8a"]];
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
