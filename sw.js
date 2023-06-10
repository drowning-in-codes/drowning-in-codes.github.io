/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","6364f1d2a9fbf4cfae94955c7dcd7138"],["/2021/04/20/稀疏矩阵/index.html","f92c85db2f5a81ef3a0797f5c3eaa5c9"],["/2021/04/23/广义表简介/index.html","434d73198e727fe462669017fac68253"],["/2021/04/29/关于指针和函数/index.html","8fd98578c102a00ece4e9695d745dd49"],["/2021/05/10/哈夫曼编-译码/index.html","98043d978b73d177a73b985827c50de0"],["/2021/05/17/数据结构noj_2/index.html","87f539b00784e66e9e0c4bee8afb9545"],["/2021/05/30/数据结构试验/index.html","5759360078917b7692a25e4ea177f5e0"],["/2021/06/12/数据结构noj-3/index.html","3a8be612df852c52b7d6b3b79fab6ed0"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","4b8c899f7d32c2d8472a9b49f1e0c0fb"],["/2021/07/08/课程资源分享/index.html","1737b00a1d1840f1ece2f9edf6a7872f"],["/2021/07/20/Scrapy-下载图片-文件/index.html","2970973d853e8c3f0e390e5c33ef08bc"],["/2021/07/21/Scrapy-动态网页爬取/index.html","35c86c9c2ef2678cdaa3b8f10ebc3a41"],["/2021/07/21/疫情打卡/index.html","5cd1cfac937524e78740229709815a12"],["/2021/07/29/Scrapy代理设置/index.html","89e8aa694f3adca6d6ce737cc1915399"],["/2021/07/29/数据库认识/index.html","ea5fcab9a5a25c81711aa7c6e260fdf2"],["/2021/07/31/Python多线程学习/index.html","9693915233e2893058dbd9761ee77034"],["/2021/07/31/tkinter-requests练习/index.html","35d18569034a5a437e09a92f31f5867e"],["/2021/08/10/Git学习/index.html","1fffee812760134c5ce1806a2b4686e9"],["/2021/08/15/pygame实践-1/index.html","74b6e784819a81ec25a5470392307760"],["/2021/09/06/微信小程序开发/index.html","671b43e2c4aeb3c35e1b6e050ebf6b97"],["/2021/09/21/命令集-1/index.html","1667770bb674fd43dad24dff875b5bda"],["/2021/09/21/命令集-2/index.html","a64485e0eb3d0302bb381700dfbae37a"],["/2021/09/21/命令集-3/index.html","60380dbb23b090e74d388be78fc0d925"],["/2021/09/21/命令集-4/index.html","bd1be9669919fe33e50d8bdd62c9b204"],["/2021/10/03/socket学习/index.html","977a40320da22387f66bbfae0051e41f"],["/2021/10/10/dwm入门/index.html","8fba673a88afea139dc4416b1fed5b86"],["/2021/10/10/安装ohmyzsh并配置/index.html","24e9f0aa67c5a8ab76aa044579c22d5f"],["/2021/10/20/css学习/index.html","fa3ac630ea0a1f532d526fd4bc8afc8b"],["/2021/10/20/wm入坑/index.html","0dfcfb18f68d787610fec8faf1cfb19e"],["/2021/11/03/微信小程序学习/index.html","15f720576b05b135d88b2c0c41fe5e0d"],["/2021/11/04/css揭秘/index.html","45efbaa250f638e0ae46000e22471be6"],["/2021/11/05/css-练习/index.html","68177be01dee62b7007dcdd86b39991c"],["/2021/11/21/命令集-5/index.html","bf9fb18568e4bc7d9287069417f78df5"],["/2021/11/21/命令集-6/index.html","4fefe7521f6d8706872ef6c81392a8c6"],["/2021/11/21/命令集-7/index.html","802797082fb35b6cb74268c93be0a2ff"],["/2021/12/01/搭建wordpress/index.html","c77ca56559ad0f433142091e0cd3220f"],["/2021/12/08/python操作百度网盘/index.html","0c40d4cc7015475e57d694def8316eaf"],["/2021/12/14/js爬虫/index.html","8eb02977c9975ca0370b53743b94c416"],["/2021/12/25/为网站申请ssl证书/index.html","3215088cf7170d63807e54cf7fa50f83"],["/2021/12/29/使用七牛云为网站提供服务/index.html","b97ee5149b091639ccc92a9d985387f8"],["/2021/12/30/jQurey继续学习/index.html","ba676100ca8eeaad47dc78fed3684a23"],["/2021/12/30/jquery学习/index.html","6df104e74b5ee7d3ab588d0510951001"],["/2021/12/31/vue学习/index.html","85a6d232058425ace0b8dbbbd0362c24"],["/2022/01/02/疫情自动打卡/index.html","3fd41922cba82b480935b10be8721c8c"],["/2022/01/03/javaweb初体验/index.html","eaf86ac4e7e50b9c745cd29ac883f33d"],["/2022/01/04/codewars练习/index.html","3a5d55a4204025d640ca140bdf611eed"],["/2022/01/05/Spring学习/index.html","f88b2788de7fb867b671b4469643d337"],["/2022/01/05/vue实战/index.html","308dba5a1bc537828c29987a4de7f66a"],["/2022/01/08/gdb-gcc学习/index.html","b0d476024becbe4e8f5c0eb74fc02403"],["/2022/01/11/python-opencv学习/index.html","f1ae566f8ebef6c49b2714da99df19f6"],["/2022/01/12/汇编实战/index.html","7ab5ab28c37934bc0b0927853444fd0d"],["/2022/01/17/pandas学习/index.html","315af9c4c4eeef12ef1214f8dc4ebc66"],["/2022/01/19/可视化图的工具/index.html","11482bd844764cd5aa966eb73b76f05b"],["/2022/01/19/机器学习入门/index.html","3a0e8f42e040e8c4a2e988a4bc872553"],["/2022/01/20/cousera-ML学习/index.html","aa76418fb415b632f13472ec6161407d"],["/2022/01/30/typora解绑后出现问题/index.html","ca23214831d58a72aaf4c27ce7a17e21"],["/2022/02/03/NLP学习/index.html","a863e5380dc2b3c4a0ca0a8e9da0f920"],["/2022/02/04/Web漏洞学习/index.html","6c35d650b201299b217b27ee94b18060"],["/2022/02/04/pyqt学习/index.html","893adf2a56398a344fa03afb380a7197"],["/2022/02/04/python爬虫/index.html","6387b1c4bb1509fe0270d1da565f4c2d"],["/2022/02/18/Electron学习/index.html","fee17324a7a3cf5c6432bad6c70d6fa7"],["/2022/02/22/疫情填报字段解析/index.html","9dec4ebaf7cc5f0572912624e06e58ca"],["/2022/02/24/Bomb-lab实验/index.html","899f65887a32981c8192b3d004b311df"],["/2022/03/05/nginx学习/index.html","c69c84d2b94154efed0d398109376212"],["/2022/03/09/汇编原理课程学习/index.html","225339b953d190e246e1e219a69cc8f7"],["/2022/03/11/Keras学习/index.html","76f2731558a6bac381f0277c39f68713"],["/2022/04/01/graphviz学习/index.html","a152829d1befb458ee609b202162f676"],["/2022/04/07/django学习/index.html","9de97095c8e127b6f56a9596c18b200a"],["/2022/04/11/密码破解学习/index.html","fe36a5e4a638fe2aa02c06abecf30113"],["/2022/04/12/flex-bison学习/index.html","9adab29a43d6335dc08e587f845473ba"],["/2022/04/15/pytorch学习/index.html","c58476ea34d9c72b23adbdbfa55b7ed6"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","555929eedc9fa1b3649129b58d33b815"],["/2022/04/23/写一个音乐播放器/index.html","e58975065771d45e061392841217be5b"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","62aa0acbd2a025d017fdc239af6d202a"],["/2022/04/30/GAN学习/index.html","ff5701af12399fa3facebe5848939eec"],["/2022/05/02/html精学/index.html","b2dd51d9882a6d6c5945be9de6f1ec71"],["/2022/05/06/write-a-compiler-by-yourself/index.html","9d4d06b42ca9589a72c6de01bf2052b0"],["/2022/05/30/acwj-01/index.html","4ca349b1865247b9a9236d0ae6fba796"],["/2022/06/14/animeGAN/index.html","68197dc27cf9d3dc222eec396b3515cb"],["/2022/07/09/c-与算法学习/index.html","9a5af0c180b3c8afcfd06b35ab816992"],["/2022/09/19/flask学习/index.html","9f22dcbcbf22946db51eb047895fa903"],["/2022/09/22/cs224w学习/index.html","9ff77da93c4c96f5feaa3a772c31590c"],["/2022/09/28/记录一次wp重装/index.html","35161627ed75c6c8f1d6b0902e5c90d3"],["/2022/10/01/Obsidian学习/index.html","3001ec731265918451a5cc8fb8e76cea"],["/2022/10/08/vue-element-template实战/index.html","03b2e93fe27c5dd61a83a3a16410a1d7"],["/2022/10/25/vue网上商城项目/index.html","c28c75b0a0f3c938451e83eb3199a460"],["/2022/11/11/leetcode刷题记录/index.html","0debcfab253e2ea5640c4409cd44f9eb"],["/2022/11/11/使用overleaf优雅地写文章/index.html","3ff9456edb77c80066f714d3099dfde3"],["/2022/11/22/磁力链接与RSS订阅/index.html","2eb5cfacb086a0dcb67dd3268faeab09"],["/2022/12/11/uniapp申请获取地理位置/index.html","d7af668f75693f67fb6071b6df1a4059"],["/2022/12/26/pr剪辑学习/index.html","7b14f3b6de1a98e83760b59bd75cdc5a"],["/2022/12/27/css中的flex和grid布局/index.html","4be15c6d05d400b41f177837385e281d"],["/2022/12/28/Flutter学习/index.html","4a2f0784204a44366192d68ddbc76d2e"],["/2023/01/01/美化github首页/index.html","dc9229bc439e65bbda94cf212b4f18cd"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","61f17f16072a23250ff58f249e3af576"],["/2023/01/04/构建微信快捷发布文章工具/index.html","25c22d3a5f312c38dce29d3e4fba09a8"],["/2023/01/14/dart学习/index.html","0fa51d156bec80d88bc0c0014d4ee0c4"],["/2023/01/23/闲置服务器BT下载影视/index.html","6135302cd87adf9f3f29d64f40554d09"],["/2023/02/07/TotalCommander使用和学习/index.html","f5a884471964fa390ca9acb2f44ebb30"],["/2023/02/13/docker学习/index.html","9e07c09c2726ac41ba4ebfc4e890448c"],["/2023/02/17/DLHLP学习/index.html","2896d51b407604224aea2a03d276df4d"],["/2023/02/18/学习purecss构建自己的css框架/index.html","880f8f7ffcd64621b29b838782a35aeb"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","8e50e12b10d5225781257070fabb8719"],["/2023/03/05/STL学习/index.html","bcf01c54360b84f51e85b0c0dc0ff5c9"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","20acfb12042af815630068e94958693a"],["/2023/03/23/实战写浏览器插件/index.html","3bbaa8e92676982c50e4ed1503592224"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","a49c97373113c7d38bbe51436f6ea516"],["/2023/04/02/EndNote基本使用/index.html","46331fb1b1178610bef9f2088a258236"],["/2023/04/04/mne处理脑电数据基本使用/index.html","2d9193f7efcc4a8120de9201e295f8fb"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","0c2025e149f58a0c6bc5aa6cead109e5"],["/2023/05/02/python中的logging模块/index.html","c2e90876df18dede191e579f9d81a2e1"],["/2023/05/07/python的特别方法与装饰器/index.html","47d22a2c4bb7ef505a5abc0e032cb48e"],["/2023/05/20/Wox插件编写/index.html","03f6edf60274eeec3c52e8b441642862"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","e6abbd1aa053e030f124d39213a7d3df"],["/2023/06/03/深入Clash配置文件/index.html","c3ba53b80906b7a42920430b273838d2"],["/2023/06/10/node的包管理工具介绍/index.html","5320bff8b1bf591388f1d6a8f883cf70"],["/about/index.html","6977ebe137b07cb94efd67a0e65df8c9"],["/archives/2021/04/index.html","96fbad59a9c805d7e1df7cc1e9a139e9"],["/archives/2021/05/index.html","f38aab89148809df4c6e53632393197b"],["/archives/2021/06/index.html","690a08376361a1f2369391c019b66f42"],["/archives/2021/07/index.html","a8a9dc11b188f034819395bfc2999ba5"],["/archives/2021/08/index.html","76451932ce980456e2500cd83da73b96"],["/archives/2021/09/index.html","bf5e6ba8013598cbcea45ba110569dcb"],["/archives/2021/10/index.html","c06f6dc70999117ee5627d237d855a0d"],["/archives/2021/11/index.html","76d529b1e93d327bd26ce8287a2fa5a3"],["/archives/2021/12/index.html","5d8f52c5476fbb9e952b6bf02979e44f"],["/archives/2021/index.html","d13005edb3bbcb7a2aa6d81336a9ba7e"],["/archives/2022/01/index.html","348360ac5a381966bfd9e8aa74000b37"],["/archives/2022/02/index.html","8db15c086ff317afd48db45e34ca65fe"],["/archives/2022/03/index.html","3d783baf07acfd039fce287b0ef5aee1"],["/archives/2022/04/index.html","4e9730c2db883d1e56f6535c3183768a"],["/archives/2022/05/index.html","71ed771be0202c816b3bf10247e5bc55"],["/archives/2022/06/index.html","d6f3f4f6268c4f5ea7dee392cdab4a12"],["/archives/2022/07/index.html","0ccdd195c915f6aeda23f52518fffebe"],["/archives/2022/09/index.html","4e179e7f7e892ea8fd2752eff248f6a1"],["/archives/2022/10/index.html","f9621d4cfce0df6d2ac577f6a13f0e56"],["/archives/2022/11/index.html","b3fcab0f6783304c3a29981bdaf8c00d"],["/archives/2022/12/index.html","c40476458cfb3b967fef425dcd458407"],["/archives/2022/index.html","2f6b699b88838eb76607a1e6c4d61708"],["/archives/2023/01/index.html","e59654d9418203360ab6d4617bb3399e"],["/archives/2023/02/index.html","f49b3ad231b82ac1f52689921503d6a3"],["/archives/2023/03/index.html","1fcc7beb6911fa248e4b8b4b07f4ff45"],["/archives/2023/04/index.html","89d620f8ca29118daa7bcff302832987"],["/archives/2023/05/index.html","3cc14177d9569f94515be6d177be08be"],["/archives/2023/06/index.html","776f70b04850e3d2233ad8381e464e89"],["/archives/2023/index.html","54a0620ba8cc54d18b757fd1959ac630"],["/archives/index.html","ee75cea9d84afa3a55d4920ec4f831b2"],["/archives/page/2/index.html","a1a8f062aa3b294f2683fcbdbd5f2a97"],["/archives/page/3/index.html","7d44bb8b6901f190d791455c6760eb0c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","c034206ab0bdb73db11f6acda3a8a5b0"],["/categories/Linux-study/index.html","a96e806f9b6296ae98aeced8dc39c95c"],["/categories/ML/index.html","f12ec7786f35c338d72360a15c97925d"],["/categories/Nginx/index.html","0499fb2b7d7f4b1f803d91d1f4420457"],["/categories/Spring/index.html","0d99cacf0cf78b51ecbdc5cf5a3797b0"],["/categories/course/index.html","0c9b3c6a590a123065b844142a7b7893"],["/categories/django/index.html","f37242a3e1f3f12376cdc902bef9981c"],["/categories/fun/index.html","e9db2f71a4f28588bf29737c68923ddf"],["/categories/gcc/gdb/index.html","269c28be53e39e92e20ebde58703daee"],["/categories/gcc/index.html","3514e547d5469e7ee28b911502247a46"],["/categories/index.html","933e4c61705d5f5addb4427f53ba5d72"],["/categories/java/index.html","0c42424419ab951ebaa9df24da0de889"],["/categories/latex/index.html","eb4b393288b3a9c782a7b2fba07277b1"],["/categories/python/index.html","5f8e011e8b6b728578304f5a9df20f5d"],["/categories/study/index.html","c0ab6e9c7782576b04ba89d5fe4f3bd5"],["/categories/vue/index.html","2f856254c7c0d50026b6cd8daee41418"],["/categories/误区/index.html","84cb9729f004d97881fd598e08f3935b"],["/commonweal/index.html","b88fbdca687731d927bc05e8d07d4c58"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c28519e7dceeb74d2cc78980904462b5"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","bf62ffecd1a013462c24267741185a2d"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","d59ea0b4ffda556eadb7f047ec73d5bc"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","351f8062f1a34a8ef8369481eaf33ca0"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","2c88ce0b86d84bdfabcef8dac1a597f3"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","71429ece8c8fdbcf6352187b0b20e405"],["/page/11/index.html","6098244dd0fc4b76e7e8932acc5e67be"],["/page/12/index.html","f25b47b6ca1642b604225fb3d85edd89"],["/page/13/index.html","d8e341c670f3aceaf71c176461bbd9c6"],["/page/14/index.html","85b1d5f69f7560c687a64a6d3571134d"],["/page/15/index.html","212da7d54ff03a6d2c84923b3b56d847"],["/page/16/index.html","838f1fc5cafec5f39ce0fd8336446880"],["/page/17/index.html","dc4ab49a5804997820413fdbdee4e543"],["/page/18/index.html","be6a5bb6e64550a35ffb89dce4ad3b4a"],["/page/19/index.html","5e22a17c73e2a9be2fed4b5f3d0fc95d"],["/page/2/index.html","1c892583d2983d9d61e502a9038efabd"],["/page/20/index.html","f4716de9af89603bfaa5ab033bc129e7"],["/page/21/index.html","f111d1336ef3eec3751559ef4e43a120"],["/page/22/index.html","db48ac9bca73d90e346249323cf937a6"],["/page/23/index.html","d960edb777862d645a5fccfbbe0b41aa"],["/page/24/index.html","e70c0021925ffdeabeca7a8b58e1a2d1"],["/page/3/index.html","b6e2763c58b2964a0fd50fca6fc9f123"],["/page/4/index.html","2021476b12ab1f8353f5ed4b36dc31c0"],["/page/5/index.html","074f4f61223056dc3bdc5e922c94132c"],["/page/6/index.html","7a6889b3e767879f027c7318882b53e5"],["/page/7/index.html","43079df17658dca7b7aea4e80b7089b9"],["/page/8/index.html","e03a9dfb18c0b47c4f45aab72989d226"],["/page/9/index.html","0ef4ce5b33895032012ea5dedae7b215"],["/resume/index.html","548682b53bc3eec3f128772872ce966f"],["/schedule/index.html","1e39e98b0974c3b0ca4c2246c494151d"],["/sitemap/index.html","e138fd8e50f8b8e66036636b762e61cc"],["/sw-register.js","fb16e3b619d0d687d73dd008111e6129"],["/tags/AI/index.html","2aacff79960f4940eab86661e20fdb8c"],["/tags/BT/index.html","571950ac62f3e7e486dafcea591094d4"],["/tags/BaiduNetdisk/index.html","5ca8e9028821c011f7203e3d57fd2a7c"],["/tags/Bootstrap5/index.html","182622da540817ebf8fd418c45a5acee"],["/tags/CSS3/index.html","65473dbfd5c8a604f7dcfa8ed690b260"],["/tags/Centos/index.html","c1a6ee3bf8216bfa0f82c1be5f87fafe"],["/tags/EEG/index.html","280bfdd64b298b407ed01a8cc6a966b2"],["/tags/Electron/index.html","32c484b32b02cc93768439f0d79153c7"],["/tags/ElementUI/index.html","e6292d2413fd1494838e72d06c6570d9"],["/tags/Flutter/index.html","9e163c25d1afe3daef25a16904473040"],["/tags/GAN/index.html","a75be8ccbfa30c5e7356f814a23e2187"],["/tags/GUI/index.html","70f65b20ea73308b04dd8284f59ca688"],["/tags/Git/index.html","ecbf044d637e122e36a8588ffb42f8fa"],["/tags/JavaScript/index.html","71d15b8be8888ce647cc6c564303a24e"],["/tags/Keras/index.html","c5566a8bb8a0ecfabfa886a66ba98211"],["/tags/Linux/index.html","e281d4431443a4627688c6a8d5bcb4b4"],["/tags/ML/index.html","70c888fe31bd726a944bd2b7e76a3925"],["/tags/MNE/index.html","eddba03404a9eedbbe9c490c72d5f983"],["/tags/NLP学习/index.html","b24431d3d55cbb02608e6735bdb77dc5"],["/tags/Nginx/index.html","5cc54203288c7559269bc376c22ee5d9"],["/tags/OSS存储/index.html","8c031372cf8e07173f1ccf93e53a27ba"],["/tags/Obsidian/index.html","3c090c30f1f08e0f9b353a98d9c7348b"],["/tags/Qt/index.html","f28812bafe0cbfef8febf81ea622490b"],["/tags/RSS/index.html","a1be964a2d152b5ca689fe151774561b"],["/tags/SSL/index.html","48a36e3b52d4d18afee71050cc868b56"],["/tags/Scrapy/index.html","006b694c514205fb429b5f12e4bec3df"],["/tags/Speech/index.html","a1f2120a69a0b79e13edba562ae1a835"],["/tags/TotalCommander/index.html","92040a66b1e5689cc92d96dcea427cf7"],["/tags/VPN/index.html","d5fd808d8e2ee973e96dff42b03d133e"],["/tags/Web/index.html","44f422c8ae49c373d8956471639c5bf7"],["/tags/algorithm/index.html","38da60fb75a1e6b49a836d5a2f8d1394"],["/tags/bison/index.html","c8ba8e6052d29524d0ae59853f58df40"],["/tags/bomb-lab/index.html","73a9e4d6d8e2ed8e67e7ec34b304f25f"],["/tags/c/index.html","532b0672203249f630490bb4e2bc276b"],["/tags/cheerio/index.html","faaa6e8bfb5426fee75f13a0b1cdc9cc"],["/tags/codewars/index.html","5313ef026df2d60163a8e855cc39cb6d"],["/tags/compile/index.html","b103e1ff41727885f1d201c4d6f07dcc"],["/tags/compiler/index.html","99836fcc79a4e13b35a268b66da254b1"],["/tags/cors/index.html","6a6cbf78362e4ba2c88ee75c377ca0cf"],["/tags/course/index.html","d312e1779ea846b3d2c02b423fd0ae49"],["/tags/cpp/index.html","6aab613bd804ade2bc92040ae584b559"],["/tags/crypto/index.html","8873d6254b1911b59f6858356e1e0861"],["/tags/csapp/index.html","a9ecc22e2b702911116bb6a20b63fa96"],["/tags/csp/index.html","e8e9785c26c97789b98ccc0eaab641c0"],["/tags/css/index.html","fd31b1664a42aafef77150281d2dfcce"],["/tags/dart/index.html","63af01afc2b9c14cf4289e3603050c28"],["/tags/data-structure/index.html","737070b4f6182522bed1109f43b7a8b3"],["/tags/database/index.html","1c239ca94be6472996645ae7a4aee45d"],["/tags/deep-learning/index.html","f55307c578302b7918046ecfce0502fc"],["/tags/django/index.html","fff17736d3f92acf5564eb00f115a15b"],["/tags/docker/index.html","9f90d844a09183d1ba081d199ba5d881"],["/tags/dwm/index.html","ff88316a58b3f6f218e4053b15e9c948"],["/tags/exercise/index.html","cbce31fdc48446b09a77977981c3c1ae"],["/tags/filebrowser/index.html","a4eccfe8ac054a5da44c79eda2a12e22"],["/tags/flask/index.html","43d46657b2e0a3b18f2421eff57ba0ca"],["/tags/flex/index.html","61cf1001b2ebe3ce57be63ea474f825f"],["/tags/front/index.html","6f274cdf4c5c11be5f721cdbfbc25f9c"],["/tags/gcc/index.html","16112bb5b74d507735d7efdc2b736eac"],["/tags/gdb/index.html","c7d310f2949b620d5baee8517e4e3fbc"],["/tags/github-profile/index.html","34a4ff7c416a26a4e973f518043e1196"],["/tags/github/index.html","e334bbd9ae03b2fbbb4bf9729eeb5ab4"],["/tags/graphviz/index.html","445ad04900ab1af3dbccc7870ba780b9"],["/tags/grid/index.html","a38027d3400f724051ed1071e461d825"],["/tags/html/index.html","84fc9fbb4cddbb1d4325d51548a01ea2"],["/tags/i3wm/index.html","2796e4601aa7cf0d7882302d6b87b3c4"],["/tags/index.html","2577616afedf79366212e3512f0b7eed"],["/tags/issue/index.html","1d38cacbd7ea178473403b8d8bbeaeb8"],["/tags/jQuery/index.html","347ce221f23af2ed74fcdc197f113092"],["/tags/java/index.html","86ba4e365e77cd66a12e7df9a9d2ef32"],["/tags/js/index.html","eab7fac73733c11f74ca18d02105c8f8"],["/tags/latex/index.html","bc2f81b419de0e6266b6357d660c3a66"],["/tags/leetcode/index.html","c773fe81b231170d0037d32cfa008eef"],["/tags/lex/index.html","ec9c38e75a6858f21fdc1197d32a81e6"],["/tags/logging/index.html","b976a9c6ad0926921ea13ce121bbe685"],["/tags/material/index.html","972b8b98442753a707dfc3209a45c212"],["/tags/music-player/index.html","4e6dd8938c20f66ec09cc22d737e0ac1"],["/tags/node/index.html","c149b7c8c4478a87121e03966be79b01"],["/tags/nodejs/index.html","bfe933bf1e4bf4f0cce4a86ecc2707a1"],["/tags/noj/index.html","56290073e67d5b1b2f2b69e59abd23f0"],["/tags/npm/index.html","20aa5f604f4c32652f50dce5fadd5e0f"],["/tags/opencv/index.html","ca7cb2dd2a0b81dac6e8f42a1a2cf2dc"],["/tags/overleaf/index.html","2b5ca4d51a77c60a8ff85035defc64ab"],["/tags/pandas/index.html","0a59cf8f98a07f8013438da00c9cc4e8"],["/tags/paper/index.html","d1f7cc9cb3571c3851604d7b71aa5c98"],["/tags/premiere-pro/index.html","6ada149976c6337b7ee87cbd8f75f048"],["/tags/proxy/index.html","b2429ef8c0e4403d11a71ea2373a70d0"],["/tags/pure-css/index.html","b26061cc75a4756b991588d59410e4b0"],["/tags/pygame/index.html","4ee2523409aa0f06196bd0d21ef8b2be"],["/tags/python/index.html","f7b8f4c95ac66e056d588aaed15f6dba"],["/tags/python/page/2/index.html","ed8b3dd34a87b4cef0e711943daad996"],["/tags/pytorch/index.html","aa5bc31ae64c5a720e95da2e5ceb1e92"],["/tags/reading/index.html","e68c8505d32222f1a030d7c00d521072"],["/tags/request/index.html","c9563d96eb6420c3f61fa2a2edc81c87"],["/tags/requests/index.html","10c092b16c9d17013642975144d160e1"],["/tags/security/index.html","3f57a94037b6d50dfd5fb0bb9d5bf958"],["/tags/shell/index.html","0da646cff0982908ef1fb8b4b951b81c"],["/tags/sign-in/index.html","e80438131c4b93e7a51b8d519c70a437"],["/tags/socket/index.html","2eee18f3f0f011c1eb9e87929c5361e2"],["/tags/spider/index.html","f89a7b571c72788acb612878d1441f82"],["/tags/splash/index.html","68ea92b990627bcb3a4c58c33c6d83ac"],["/tags/stl/index.html","4ca4e2352ab0adfa6de62bc9f1ff4513"],["/tags/sumatra/index.html","f703bdba8b5e2cc82df24e0f20df09e6"],["/tags/superagent/index.html","7cbcb2f0ad2b888a71bac31570a0a72a"],["/tags/tensorlow/index.html","e1f42264101922d1510143af45b9ac83"],["/tags/tex/index.html","fac5367350be98604ba4544ec6dcc2d6"],["/tags/thesis/index.html","05331a82bc3420a9b66c659833815a69"],["/tags/threading/index.html","5b21f1ed223c4eb769292c6f6f582ef2"],["/tags/tkinter/index.html","ea115775036aa9dde10743cafd16f3fa"],["/tags/torrent/index.html","d9915212607de14bda9c578f1b75c046"],["/tags/tutorial/index.html","6c8a05f170830457b7af24a15fb540c5"],["/tags/typora/index.html","491c55a9f307bf23af4d2abb99e17c96"],["/tags/uniapp/index.html","9ede74cb97a193ea5d1498d4bc388c75"],["/tags/vite/index.html","2f2825b0a1b4e86c5f2417de2f3333dd"],["/tags/vscode/index.html","2fca04d48cf2afee508eea4cc614a964"],["/tags/vue-element-template/index.html","bc1f0b85082249bbc50e92cfb5555f08"],["/tags/vue/index.html","5fd15c632731128a6241f12902dca11f"],["/tags/vue2/index.html","3e279703cff4207a99dd1ac807278f85"],["/tags/vue3-x/index.html","89f212c6a7d43f8aedb6e3ad7acff67b"],["/tags/wechat/index.html","cd86001b87e2304bca60873debcdcd32"],["/tags/wm/index.html","0387b788d4bc7bed700611e5052cae66"],["/tags/wordpress/index.html","8e7e1c71c49ae2807687a579aed7f7c4"],["/tags/workflow/index.html","b4828d0d8c48255040d4100ce75ca036"],["/tags/xpath/index.html","3f71c9e2b51d2f03140d883df7a88001"],["/tags/yacc/index.html","534e865eaf4302f0108f2c6d38c31af8"],["/tags/yarn/index.html","55c06a91f7f244e5b23bcac2ef0e9697"],["/tags/zsh/index.html","cf8ad80008d10cc72777faa41b78eb02"],["/tags/七牛云/index.html","c815bccf9b36bf6b7241466a547efc9c"],["/tags/函数/index.html","e502fbc8626819f46a1d3117bbf0d041"],["/tags/剪辑/index.html","84bb81a59b64834ae759238687a4bae5"],["/tags/存储/index.html","2b4af6c3772cbc5925aac3da79cf9e3a"],["/tags/实战/index.html","9433e9a33e9953e743f694fb5197e679"],["/tags/工具使用/index.html","18ed8e03c8fc1cbd3ec92097c2940fa7"],["/tags/建站/index.html","c25789f07289f31cadb029aa0fd07363"],["/tags/微信小程序/index.html","a573bfe1fc55685f8daca0603776d284"],["/tags/指针/index.html","e647e768120e91fea17384499060af3b"],["/tags/插件/index.html","71b5042ea7833fd097d6ddf085cc9046"],["/tags/效率提升/index.html","b69d215c38364c7b556397391431cc0c"],["/tags/日志/index.html","b4252e62ea371011fd2e85b68872bf31"],["/tags/汇编/index.html","725fdc41f4fb9bab358c6c60880c62c7"],["/tags/油猴脚本/index.html","334d89e4126b244052fcb0d9d45900a4"],["/tags/浏览器/index.html","adfd4707ba8ad260bbb6c639119b02a3"],["/tags/爬虫/index.html","c16d76d285f7e5a53be6d7dd81970b31"],["/tags/算法/index.html","79064941a8ca7fc23f429e4c1543896b"],["/tags/编译原理/index.html","501a35c735fee7fe43e693229fdddc6b"],["/tags/获取地理位置/index.html","466164d6732d391c7d16441f95091c30"]];
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
