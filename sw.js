/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","8476425aca0190ece9e30d4dac519caf"],["/2021/04/20/稀疏矩阵/index.html","b06b955c23a2777c14ff36e739c8f199"],["/2021/04/23/广义表简介/index.html","b18b87ed4842690ec981967cc76f9dfc"],["/2021/04/29/关于指针和函数/index.html","4774652d37dd44a4137e331ebc7848cb"],["/2021/05/10/哈夫曼编-译码/index.html","411d2cbcdcc541d847f402eb33120966"],["/2021/05/17/数据结构noj_2/index.html","5ea93f55ecd14fbbaa02ee8c0c331436"],["/2021/05/30/数据结构试验/index.html","0a7da29c0235a52d22d567b053f22fd7"],["/2021/06/12/数据结构noj-3/index.html","86fd101f274e943dcfc5daeac542bff0"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","48cad90e7a6d33fe7f265f8f911060d6"],["/2021/07/08/课程资源分享/index.html","4a5d61a769636edeb3ad25e86d9fc875"],["/2021/07/20/Scrapy-下载图片-文件/index.html","3f6554659fb81cc9b1d369041669bc5e"],["/2021/07/21/Scrapy-动态网页爬取/index.html","0265eaa99bd31c63ad20645426084609"],["/2021/07/21/疫情打卡/index.html","82e91f92dadb6bfbcc740aa8df23080a"],["/2021/07/29/Scrapy代理设置/index.html","46dac4a0e71eb603b7ce4b9d37fb66c5"],["/2021/07/29/数据库认识/index.html","04070a9ef09b3d75429e8b4f64f2a751"],["/2021/07/31/Python多线程学习/index.html","da21264f2c4f8229ec9cc59237e6f465"],["/2021/07/31/tkinter-requests练习/index.html","4872b5277fde33d1c7b7688cb98e6d9b"],["/2021/08/10/Git学习/index.html","e9fcd97c76aa148146cb58d8ea56460b"],["/2021/08/15/pygame实践-1/index.html","bf1c0ed9c20c229b2672c073a3bb586e"],["/2021/09/06/微信小程序开发/index.html","00357369f4cdcc34fff416bc029a7051"],["/2021/09/21/命令集-1/index.html","4726fde133eb03df39713378a724bb66"],["/2021/09/21/命令集-2/index.html","bc41c82f32de532f97ff76aac9154bb2"],["/2021/09/21/命令集-3/index.html","21020a820532ccba1a68db006dc161f5"],["/2021/09/21/命令集-4/index.html","ae21fa4030219a049734531579bce1df"],["/2021/10/03/socket学习/index.html","8f7ce924aa0ed1ddc52b46368f52b623"],["/2021/10/10/dwm入门/index.html","fc46cfb429e899a9fd2bbde9832a2835"],["/2021/10/10/安装ohmyzsh并配置/index.html","b05c3efff98db80ed99b646897629ce9"],["/2021/10/20/css学习/index.html","a824ce570f1f7493cb6cfe363bc97fc4"],["/2021/10/20/wm入坑/index.html","ecbc8208e9996c2fe34a2c75c97114b3"],["/2021/11/03/微信小程序学习/index.html","cc6b61f490c173bb12d0e15fd4884b85"],["/2021/11/04/css揭秘/index.html","4e9ca7f3b39b57bd220e99157df660a6"],["/2021/11/05/css-练习/index.html","4faac3a7254cd4b610a165ef8c6d787a"],["/2021/11/21/命令集-5/index.html","76981d92d0116c21371d7bdbbb7a5192"],["/2021/11/21/命令集-6/index.html","4bc0f310ae049b32ee2a8ca367c1968b"],["/2021/11/21/命令集-7/index.html","cd2d11c5e72168f333366ae300c7f7f7"],["/2021/12/01/搭建wordpress/index.html","57b686e9d3d90dde854a8a520dc9c2ab"],["/2021/12/08/python操作百度网盘/index.html","071c6f611028ffd618ab62760b1e6c2b"],["/2021/12/14/js爬虫/index.html","7c1b959c9f8c129f94224c8e8c364760"],["/2021/12/25/为网站申请ssl证书/index.html","bb393ff9a797a5c6d241b6b6fc155946"],["/2021/12/29/使用七牛云为网站提供服务/index.html","00f6b08a138373694e73db9e352f886e"],["/2021/12/30/jQurey继续学习/index.html","188efed47ede99f7bf8ca653475abfa8"],["/2021/12/30/jquery学习/index.html","3a74310d42a9f5ade0d5cc4cb694dad8"],["/2021/12/31/vue学习/index.html","81948e390fe0815b2574401afebcd756"],["/2022/01/02/疫情自动打卡/index.html","cf3e4f53ca8d3117f88fd1e2fa14402f"],["/2022/01/03/javaweb初体验/index.html","cea25c13ef81d12361141c00c2c6b604"],["/2022/01/04/codewars练习/index.html","29c549e48ad6f013b3fbcd2f29f87e1d"],["/2022/01/05/Spring学习/index.html","062ccdc128d8ef6324b5df70e094838a"],["/2022/01/05/vue实战/index.html","1f31085d009c15cceb4a5f59598f6bfb"],["/2022/01/08/gdb-gcc学习/index.html","3ad64476d670b6181af3433092e92ed7"],["/2022/01/11/python-opencv学习/index.html","19b55ec054ee6190aa50e619b65213f8"],["/2022/01/12/汇编实战/index.html","37551628acb40f35cc2f11790910efc8"],["/2022/01/17/pandas学习/index.html","04f74b045b9b23a34da553a81ceef4e5"],["/2022/01/19/可视化图的工具/index.html","022bf6e25a31e26b440d24b5039950ff"],["/2022/01/19/机器学习入门/index.html","88239c22c9a8e1c96ebe4ec220c35414"],["/2022/01/20/cousera-ML学习/index.html","2f863d4bd1a8470a27eced9d91363b55"],["/2022/01/30/typora解绑后出现问题/index.html","3f8407a67962fb7f67789118135160c7"],["/2022/02/03/NLP学习/index.html","d302d6e0ae5e4edc23f3e544b119073d"],["/2022/02/04/Web漏洞学习/index.html","2c622243fa416b012ad2afea03aa1974"],["/2022/02/04/pyqt学习/index.html","9a6118078080fd3213ceac38b1d6671c"],["/2022/02/04/python爬虫/index.html","fd2f670bf234e23a6515da4c85df0132"],["/2022/02/18/Electron学习/index.html","ce3140d2edbda99ddfbc457363b85b7c"],["/2022/02/22/疫情填报字段解析/index.html","eae45d154d00b3878e651af77f381be4"],["/2022/02/24/Bomb-lab实验/index.html","dde57e7bf4a6c5c97cbbf3858121e4da"],["/2022/03/05/nginx学习/index.html","038ab06538c1ff183a5ab1996d8c03e5"],["/2022/03/09/汇编原理课程学习/index.html","f78c04f634ea6115ae3bbd9b8d7b9543"],["/2022/03/11/Keras学习/index.html","a13ceef07f61d6a2131607b75830edaf"],["/2022/04/01/graphviz学习/index.html","dc89bef42e7adf1d2de56265a7d1e474"],["/2022/04/07/django学习/index.html","ed302ad19f3b9d2029115500666ac0f1"],["/2022/04/11/密码破解学习/index.html","80df47014ad4f93c97d728574c51d04d"],["/2022/04/12/flex-bison学习/index.html","57e783875b464c4eae2e353d3df859b9"],["/2022/04/15/pytorch学习/index.html","959ac95a3bd0e4429eb70472da187829"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","21c353c113d013462a299287fff400b6"],["/2022/04/23/写一个音乐播放器/index.html","94f0d64e4c1c05d06946302fa1520451"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","d5bdc89ab84ed024d61f1d4dff8ecc9f"],["/2022/04/30/GAN学习/index.html","74db10a686b02feeb59e17d070fd1c99"],["/2022/05/02/html精学/index.html","f0824fd63743d66f4d49531eeb83a7eb"],["/2022/05/06/write-a-compiler-by-yourself/index.html","daf4822654cf6c3fa93577f1778ab37f"],["/2022/05/30/acwj-01/index.html","648734cb7b31e569b68523ef8d0e0981"],["/2022/06/14/animeGAN/index.html","d906dce64a99df35a9ad89b1da2ff828"],["/2022/07/09/c-与算法学习/index.html","48af16d8e017ce97acde73484c536e8e"],["/2022/09/19/flask学习/index.html","2cd2b0aa3b9d67a10608d6aa61ca08ac"],["/2022/09/22/cs224w学习/index.html","119d441922cc28c24090f1a7f0c289d4"],["/2022/09/28/记录一次wp重装/index.html","204c5709a980aa8d1ea1f6fe13e1fe09"],["/2022/10/01/Obsidian学习/index.html","53d259f0b8232109c4fe370417f6c736"],["/2022/10/08/vue-element-template实战/index.html","e5691cfc06da9165b43fa3070f376d44"],["/2022/10/25/vue网上商城项目/index.html","7468dfff42dda3d81d660b147b2f048e"],["/2022/11/11/leetcode刷题记录/index.html","fd31dd0af9abe362dcf2118c1518f0c0"],["/2022/11/11/使用overleaf优雅地写文章/index.html","0375599e44b45d20be30bea0ede2ac32"],["/2022/11/22/磁力链接与RSS订阅/index.html","d4003ad2582482da3f914131f2c11cf7"],["/2022/12/11/uniapp申请获取地理位置/index.html","a255a128dd28a90532290e4f405ea313"],["/2022/12/26/pr剪辑学习/index.html","add17fcd0066c252354052b4d97d5ae3"],["/2022/12/27/css中的flex和grid布局/index.html","c14595d2ac73511ca10153b0dbadd5dd"],["/2022/12/28/Flutter学习/index.html","b12699937696965601b1a8a3b9e3b6a1"],["/2023/01/01/美化github首页/index.html","63cf70ba0be901671778691da0f8d0ab"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","ea03054782ba3949dcba383e1f2de4df"],["/2023/01/04/构建微信快捷发布文章工具/index.html","90aa280684e1da840f174afd2de4dce8"],["/2023/01/14/dart学习/index.html","0ebe75296db58f231d16d66950d22b66"],["/2023/01/23/闲置服务器BT下载影视/index.html","d529c377e5a0fcea76c7d055013c8594"],["/2023/02/07/TotalCommander使用和学习/index.html","bba9808d3c17e44b557ebca3eebf9e12"],["/2023/02/13/docker学习/index.html","598144bb73f3314b892ee1cb87019bfb"],["/2023/02/17/DLHLP学习/index.html","fb4fbf74f8b3b13cb0485be3ab4f1d1e"],["/2023/02/18/学习purecss构建自己的css框架/index.html","61179e48a78bca126fe9b5c071fc625f"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","adb21efc18c0e3f4ad146a6c366bbb24"],["/2023/03/05/STL学习/index.html","b77cb09800e44f2d4a1a5433260a1dec"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","25584ef4948c81123b9f5e5ee1a8ca9f"],["/2023/03/23/实战写浏览器插件/index.html","9c555ec86eb50c39e78999d14f5cfc06"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","2fd28d6fbf6ad0cd815d34ae1da28202"],["/2023/04/02/EndNote基本使用/index.html","ee6d6dfc4b65962974874ec306706191"],["/2023/04/04/mne处理脑电数据基本使用/index.html","8cbc987433456f400b4a86fe55b32826"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","7bfd388d7e577f15a6fdba26848559ed"],["/2023/04/26/给hexo博客搭建看板娘/index.html","c2087efe23466146a08b1fb8a3f63d1c"],["/about/index.html","ce537ac6cc85539f22050b871cfa7065"],["/archives/2021/04/index.html","604da7dd20dac0c0005d371dc90a4c18"],["/archives/2021/05/index.html","b35cb8d0ab4766f6ea42613a9e8e4adb"],["/archives/2021/06/index.html","1e1394d2375f72c0c599cf02ce0a9abe"],["/archives/2021/07/index.html","b1bbe070b669eac5ade3b5a8a8a0d64a"],["/archives/2021/08/index.html","52eac47051d1ff243cdb90f4bdfb19f2"],["/archives/2021/09/index.html","16c71f41fc2f9e0f85d30a69689cc1e0"],["/archives/2021/10/index.html","0c385b3fd8fce759996108aef5bffb01"],["/archives/2021/11/index.html","443987081703dd2ebecb1f6bf3b0107d"],["/archives/2021/12/index.html","bc95e70a516de5a2aa2d49fbb78c7086"],["/archives/2021/index.html","ad9b31de7688008d1fbc94e86a8fcfe3"],["/archives/2022/01/index.html","7445bd4a936bbd13060474ffacfb5700"],["/archives/2022/02/index.html","ee59659f2ee6c06422ea9a1979846f03"],["/archives/2022/03/index.html","31fce8939098e8f90ea451cd3de3fbd2"],["/archives/2022/04/index.html","aad6da0e641d39e12f4b32bec1d3523f"],["/archives/2022/05/index.html","bd2294cdec0c3ce263efbba58a0ca6f5"],["/archives/2022/06/index.html","791cc89d8c9b09d61cc4ae0ad6027a94"],["/archives/2022/07/index.html","802edfbf1a2103e6bd73d9409bbc5397"],["/archives/2022/09/index.html","51750b443c1e6c05d6004dfdda3fc250"],["/archives/2022/10/index.html","529634066375836ced39c0e4cc9bfb59"],["/archives/2022/11/index.html","c0073106b8ef418d44ddfb87f00c8135"],["/archives/2022/12/index.html","bcac476e599398ad38b2a5a2cd8a639d"],["/archives/2022/index.html","644059403406d4c6f92f0f049a554155"],["/archives/2023/01/index.html","f49278b9811763141f1000dc5f9dbf6b"],["/archives/2023/02/index.html","24e586b47e5445bd2f24a2f5c53d61f7"],["/archives/2023/03/index.html","e352e728e681700a52defab9a8391dec"],["/archives/2023/04/index.html","1c5aa7b3257ec1d227094515bf69a379"],["/archives/2023/index.html","48d8240111118d87eca99caa9fb82ba4"],["/archives/index.html","1af64bb00101074810c8b444c0d0d8b4"],["/archives/page/2/index.html","6344075d727c710412590fddf151267b"],["/archives/page/3/index.html","9f2c2ecbc5a2708022131dd01d98d2b7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","7a648b00d561f5e8362fd10027120e62"],["/categories/Linux-study/index.html","7ade8ae9580e3e2d3e162823e97074c8"],["/categories/ML/index.html","e069735d22d4f6aca8d75a17e488bccc"],["/categories/Nginx/index.html","b6564847e688eb570ecc3ec736b11c02"],["/categories/Spring/index.html","e2196a886422535411c94b86b878815d"],["/categories/course/index.html","6c8c00a85f6a858ae0b51deb6544b5e0"],["/categories/django/index.html","9474c037a85e38b13e9ee465db4f64f5"],["/categories/fun/index.html","bea56e6cdc670f7ee490acfc6295675e"],["/categories/gcc/gdb/index.html","4189fa5944f235c33e5236676b59ccd3"],["/categories/gcc/index.html","228f42ce9546418f73bec60d0695587a"],["/categories/index.html","6694cc9c1e2b57e4ce3dad75ffcb2d26"],["/categories/java/index.html","0443f24a1c5637543b2676fafad317bd"],["/categories/latex/index.html","c26937788a361d4e26f4823188cd403d"],["/categories/python/index.html","168202cc5925ceb8eb63c8e4f419308c"],["/categories/study/index.html","c62d153c4ed75e17fa8e278c17f8a406"],["/categories/vue/index.html","4c0113b832172e31f6490e2de5a51cdb"],["/categories/误区/index.html","ae74b64c187783267ee2d3abad26ca4f"],["/commonweal/index.html","1ee255fc6cf2dbb2de033d9bd61fee85"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d9361643a690167a686a86861a1e8655"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","6cff30148fe5b44733dbaff51191f4f5"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","559f410a0670c1fde4bdc02516402f7e"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","e495b549857899e93633f82ec5c3c8c1"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","706f7e29e23e2f07295ec2cc0a5817bf"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","c3a75089ca482b3dccd1f34a38eeac42"],["/page/11/index.html","3533456125c7bc7e0489e256cee11686"],["/page/12/index.html","63e78361b8640e3344e485f72abdf249"],["/page/13/index.html","1cf336433f3b56cdc87b35832833a608"],["/page/14/index.html","62aab9cb84ba70f2c09d00d286bce44f"],["/page/15/index.html","a52c3cec1d4b1eb9bec218755949ba59"],["/page/16/index.html","2590837e074f2dfb7a57847cfd321168"],["/page/17/index.html","5d0c1cb78b9a6b72319d854abeb784a9"],["/page/18/index.html","83fa482cd88ab79b342097dc652b08b3"],["/page/19/index.html","37830b93098832683f7699805bc8e77f"],["/page/2/index.html","8ece88c23401dfa5e75461233d6aa333"],["/page/20/index.html","10239e92d8bf8dde4e5f56b79bafac04"],["/page/21/index.html","4a2c0a2eedfc294d1beeefedae621deb"],["/page/22/index.html","b579d8089d66cf405a0f21ea86e0c1f8"],["/page/23/index.html","ab378a2cff676293cd0bc040884f7d3d"],["/page/3/index.html","b92798279da4828b87e45fecf91e957d"],["/page/4/index.html","dbbdafb14deab0862b7b6917dee17132"],["/page/5/index.html","3b4b9a7bc3c2355c3b27e9417c33c004"],["/page/6/index.html","1c3a05cb7265e814dea039444b37afd6"],["/page/7/index.html","99a05935ba955a29d81691a17b22d768"],["/page/8/index.html","638e573f27e17252e54a66d1f88bdd98"],["/page/9/index.html","85f8e145f803a0c1a81b45c436b2f858"],["/resume/index.html","5ee53bf57321509e9b869b213761cf0f"],["/schedule/index.html","ad7d930f0813fef7e5319d246e29af37"],["/sitemap/index.html","f1056740a0c436eca1fd2c4b2ab590e2"],["/sw-register.js","591a79d5837fc3c615d651400549ad8f"],["/tags/AI/index.html","16ea017179ccf511bda4fdbf9f679f00"],["/tags/BT/index.html","1ed5619038a7a7ed3af384ad587d61b8"],["/tags/BaiduNetdisk/index.html","3a2da11cab31e0ba3f3f6ca8a5891e04"],["/tags/Bootstrap5/index.html","2f6e60bed856051ef46ba6c1bb996e10"],["/tags/CSS3/index.html","fadf15659ae506e31f5df3662d2d34c7"],["/tags/Centos/index.html","f041b10960b96208ae2d8a805bb97f3a"],["/tags/EEG/index.html","edff3ba17c488fb50a2da67a3f48a1dc"],["/tags/Electron/index.html","37ae198a4e8fff1175216e43416faec5"],["/tags/ElementUI/index.html","8858c96f7c1cbbd07ed6ccbb7cf3e770"],["/tags/Flutter/index.html","807dd4bfe3c2a5ed7e04d5aaf6a0242d"],["/tags/GAN/index.html","3b23c445861401ce9c68779be7220dca"],["/tags/GUI/index.html","4a075b33fe82044e27d8b979c29173c1"],["/tags/Git/index.html","be974c606a5977d1b72a96c2f8dc6032"],["/tags/JavaScript/index.html","8e1311b4f77e46ca2485121f6f48ebb7"],["/tags/Keras/index.html","f77580a1eb54eb93563c986e52ab1881"],["/tags/Linux/index.html","43beeb1205c17e09cec8fc364aa1ed5c"],["/tags/ML/index.html","cb0a249268e773a54e69ce4c837edaad"],["/tags/MNE/index.html","14a16acc9cb7ea5db6d0947f341f704b"],["/tags/NLP学习/index.html","9a21cd6c572f274afe52db94de16109f"],["/tags/Nginx/index.html","9405724531e6a3eae4e3522c25b8eb4e"],["/tags/OSS存储/index.html","b989dee2b494a3bbdf39d0d51f0782ac"],["/tags/Obsidian/index.html","f735d14110d585123a4e5775c6ade270"],["/tags/Qt/index.html","94a765f5b65ca504b91675fc74030239"],["/tags/RSS/index.html","af291562d63c0d57223174267f8db22f"],["/tags/SSL/index.html","67c3fbd5332125f4ae63f2db7a98fbda"],["/tags/Scrapy/index.html","e1176ec3c9de06f5e85f5a1ba4f50f7f"],["/tags/Speech/index.html","ce64b60bc168f39e864db6b93eb4a6e6"],["/tags/TotalCommander/index.html","a7de7a9be40ca022dce798779f7f737c"],["/tags/Web/index.html","18c5a08156e74ea8e9765b7941a23622"],["/tags/algorithm/index.html","7361cf2eb25092a0ef3e6ba5bc92ce07"],["/tags/bison/index.html","9a0d310e0860c487c23fead4ea75a0ce"],["/tags/bomb-lab/index.html","7f1e9166cd404f237ef3628bd8511b95"],["/tags/c/index.html","be52192e65f196fb5bfef5f4e190df0a"],["/tags/cheerio/index.html","b8e41736d4e65c8d2000bca216386716"],["/tags/codewars/index.html","1437cdac7bef39d18a5ef093f965d7e8"],["/tags/compile/index.html","2a03f5fd36ef418461064cb18048cfaa"],["/tags/compiler/index.html","39268777deb2a7fea9ac084bb4423027"],["/tags/cors/index.html","66d5a6f98c71e4770eff657e9deff620"],["/tags/course/index.html","0df5f58e9be7deb17bd31e665fe5f56a"],["/tags/cpp/index.html","dc6f42640eec37f1330d6ed270f32187"],["/tags/crypto/index.html","c761ee02f0c187d4413a54c65cba928f"],["/tags/csapp/index.html","24f964ff57ef0027249f0eb03caa1581"],["/tags/csp/index.html","82c100a7bb9a93b8d93aa4335ca40e94"],["/tags/css/index.html","23f27066bf21020164d015e2dd5952d4"],["/tags/dart/index.html","2ce152b727897a92af1bf8f48ff4a54b"],["/tags/data-structure/index.html","3881e4fba17f8f093a14b1dd1a16f326"],["/tags/database/index.html","2fa5bcd33a2b12076a97851c069a3455"],["/tags/deep-learning/index.html","faac54294b0286a25e76e3238ca4f481"],["/tags/django/index.html","6aad44b3a7935667b29fde4d9b4ea98e"],["/tags/docker/index.html","7c345df495e4e254eed7d136bc2da531"],["/tags/dwm/index.html","865ef685936a62a993dcc74db708447d"],["/tags/exercise/index.html","b52eee20c2947e15d99ae400e06f8ffc"],["/tags/filebrowser/index.html","6b25e3041db107067b7979a265a1c582"],["/tags/flask/index.html","7e9809a947ffedea13de278e7549c4e8"],["/tags/flex/index.html","5040f553f821a927e5c8c716a058e992"],["/tags/front/index.html","daaec71ecf5c2222b4ad793926275ee3"],["/tags/gcc/index.html","d4564f09a170c84f2274a3feb2dea8d4"],["/tags/gdb/index.html","a31b75fdf7cb7848b404a3d889378d9d"],["/tags/github-profile/index.html","03884fde017416c03d3958dfd163ef1c"],["/tags/github/index.html","42b1ba86f642680f0e9cfec72cffef0f"],["/tags/graphviz/index.html","5fb778e11b1c268df6ec307ca9b99a6d"],["/tags/grid/index.html","17d75479040c729be7c9c8061f1d7231"],["/tags/html/index.html","dba2d79654d81d6609d0cc9babeb9875"],["/tags/i3wm/index.html","326ec5960d522853a5b3d52ebed5f6c8"],["/tags/index.html","11fc21ad0920bdea7fdfe3d23ed3e7c4"],["/tags/issue/index.html","24366ce8da04b9d6c714577d04c1578d"],["/tags/jQuery/index.html","c1ff5c9cd1ec2928d1563f59a15c0928"],["/tags/java/index.html","eccff3003488acfe276028dade63f414"],["/tags/js/index.html","12241a5a10d28690858254c0f27c5c62"],["/tags/latex/index.html","fd39a0942fbfd927195fa253864744e6"],["/tags/leetcode/index.html","910671647ef789dd93bb1551de1328c8"],["/tags/lex/index.html","4baac493eda8b86918e65f9c07c94583"],["/tags/material/index.html","5c6fbe2f2f38d9e3f864855b19ab3852"],["/tags/music-player/index.html","23d0190f71969b819218cfeb0ddaa8f5"],["/tags/nodejs/index.html","cf32e57a6d27d38ac529333330ae34ff"],["/tags/noj/index.html","7fad08ae4e7cb314f898108daea8d556"],["/tags/opencv/index.html","a9d13d47fcfe6423b9b33442be70db85"],["/tags/overleaf/index.html","c9e3f6b04754ef824e2c709b0f2c4a9a"],["/tags/pandas/index.html","b73821cc2493f9d2f2fc9d9c3cd1aeaf"],["/tags/paper/index.html","96ad2f03f8c8507f956c8c5fc92ff07d"],["/tags/premiere-pro/index.html","845b94018c78b0ab630ba8a373755e5f"],["/tags/proxy/index.html","e39bbed38396ec1935f4cdc099a068c3"],["/tags/pure-css/index.html","c4e6b294c356ececa45de18139613f41"],["/tags/pygame/index.html","7cf1da84f3d5aa29175a86d84c6420f1"],["/tags/python/index.html","6ab78f3487fdc23cc83ee9df3dbf8227"],["/tags/python/page/2/index.html","b16465ba028828dee330e2999a57f26c"],["/tags/pytorch/index.html","f2a933b28f40f07a61f2484acf17011a"],["/tags/reading/index.html","10548182d825e6f56f1dae2cbb528f7f"],["/tags/request/index.html","ec203acb39c0acc17f8812f0a94db562"],["/tags/requests/index.html","0e283426340232d52bdc523864d49d6a"],["/tags/security/index.html","b5f043cef2fe2bf26697a09a35ce729c"],["/tags/shell/index.html","3c226b3782c0d1963d5770e3592d2e51"],["/tags/sign-in/index.html","125b9b912838ddacd398c0363ce438b7"],["/tags/socket/index.html","fc616b9bd49b69d20e1884bb57967dbe"],["/tags/spider/index.html","5f9e9e80c8d032bfff4dbb46ce9a4eaa"],["/tags/splash/index.html","968c8366ad21650b35a14aa13cf1afe5"],["/tags/stl/index.html","453eebdef5817478a473ee2f86915bc8"],["/tags/sumatra/index.html","7375e276022415b7b85f64fd4783e66a"],["/tags/superagent/index.html","3d14bc73fac4c8fec3efc5f440178441"],["/tags/tensorlow/index.html","51c26d9dd9a8ea8cd818a4ec8fb65de2"],["/tags/tex/index.html","95602006323f854bf3ce349e05118b3f"],["/tags/thesis/index.html","af60af9689f0746b2ee1d94df1613283"],["/tags/threading/index.html","d2735b71d88939da4e9dc0db3bc3bbb0"],["/tags/tkinter/index.html","6a873c8286810210ffaf419ce6126f09"],["/tags/torrent/index.html","ae232b1f3f4de154663c11025ab82f25"],["/tags/tutorial/index.html","84a753b50fd903cd905c8b3b5c0c0291"],["/tags/typora/index.html","c96f851819ada23b458c3a900a0caea1"],["/tags/uniapp/index.html","b2f3713b656794fa88f72b85f031f033"],["/tags/vite/index.html","d33a091949047dd5e63c8e44be669959"],["/tags/vscode/index.html","e6c027f0171e446bab2dd1adfae49612"],["/tags/vue-element-template/index.html","79066de2d874e801cd5b059c0de2fd07"],["/tags/vue/index.html","361268fb640f1b5a122a69c28fef2d2f"],["/tags/vue2/index.html","b33f7cde47070e45db227d25e51afc09"],["/tags/vue3-x/index.html","5d4180c83d9d6ea29857586fcd9b76f2"],["/tags/wechat/index.html","c9fd7e585b4517af7f62dcaa379b2e46"],["/tags/wm/index.html","81e4032a56c4b983b3e1ec3487b4b0db"],["/tags/wordpress/index.html","ec3701428976652a2f9a7e28c6c917c9"],["/tags/workflow/index.html","6cdd452ffc6bfdf1915578aee435d47b"],["/tags/xpath/index.html","0ab22f4e9fb48e90d7d93a5b43990db4"],["/tags/yacc/index.html","f409b77e7e4809be5ac0be4fac28ac61"],["/tags/zsh/index.html","0ce78b88ed81f6db3f4dbb8b742317c6"],["/tags/七牛云/index.html","e88c93d76798640cae4e8b1edea7387f"],["/tags/函数/index.html","51d5e3a0fe67000ba9b5e42ca03ea823"],["/tags/剪辑/index.html","f79ecf73b0e869bb13e26ad39a3cd8ed"],["/tags/存储/index.html","e2c3c68715e804e200c926e72063b3be"],["/tags/实战/index.html","b1d3f87e76832f84ef98abefecb67d1e"],["/tags/工具使用/index.html","c12c6b2f7cc73e0555978543ad58480e"],["/tags/建站/index.html","075b7f252f28ec1d88da00d17645383a"],["/tags/微信小程序/index.html","43e12fe00b269b18736aa6d1f16a2fa0"],["/tags/指针/index.html","bccedc98730197082d2210f203ff44b9"],["/tags/效率提升/index.html","a130ec82b8eaa4c1d2e851d902dcde60"],["/tags/汇编/index.html","6d3fe76b9e10e00d622b4e4c9ec4d097"],["/tags/油猴脚本/index.html","3fcdf0f8356ffc7e44c42b3b34deb468"],["/tags/浏览器/index.html","540cb033169cdc5b12547b0ded6b334e"],["/tags/爬虫/index.html","eca0e8538088f7bbcd27cc24134561db"],["/tags/算法/index.html","8e9f04f61ae6f80f87c9df7777344c06"],["/tags/编译原理/index.html","0f2520a3f5bb5963a9de28b959370df1"],["/tags/获取地理位置/index.html","2cdc03d379d6bb7914334946c2c23e25"]];
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
