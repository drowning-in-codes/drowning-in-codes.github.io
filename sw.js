/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a85ab33318a6d869ca3a74d8746c2323"],["/2021/04/20/稀疏矩阵/index.html","bd687e1aff0442a4a8f8b42b2945bcd2"],["/2021/04/23/广义表简介/index.html","e626b710c74951f80263b1146cbb7cc3"],["/2021/04/29/关于指针和函数/index.html","edcebe37293e8673ebb862559d8eb454"],["/2021/05/10/哈夫曼编-译码/index.html","829aa882050c76309b55cf023c03c61a"],["/2021/05/17/数据结构noj_2/index.html","cde1d1048fadd2f2e1f67fde481b1e41"],["/2021/05/30/数据结构试验/index.html","1ed40fd433af455c5525b6aeca002584"],["/2021/06/12/数据结构noj-3/index.html","17d935587264c9b4a291185cf90ba0eb"],["/2021/07/08/C++与Qt开发入门/index.html","3799f491bc01ed3e2ddde922d23cd26c"],["/2021/07/08/课程资源分享/index.html","2e5b5e15a4188980de73b6450e30103a"],["/2021/07/20/Scrapy-下载图片-文件/index.html","3a870b125145f4cfa1df6f131d5c5a39"],["/2021/07/21/Scrapy-动态网页爬取/index.html","94a5834df18f769ec4e6c3332b360c1f"],["/2021/07/21/疫情打卡/index.html","34a7bf0a2e0c172cb7d868f50edbffa0"],["/2021/07/29/Scrapy代理设置/index.html","8a920fa71111109d4f4cf73b30e04a6b"],["/2021/07/29/数据库认识/index.html","41105df06c68dc42fe3d3eb36fa8837d"],["/2021/07/31/Python多线程学习/index.html","371c4ede3ce334677a10e75455996ff2"],["/2021/07/31/tkinter-requests练习/index.html","fd0a7b2d7df7806b85d762bdaf9c0f74"],["/2021/08/10/Git学习/index.html","6b7b75bf3ec673ef3df8fdf8d984d3b1"],["/2021/08/15/pygame实践-1/index.html","821e42a754d5f2a432fcec7c3c92d248"],["/2021/09/06/微信小程序开发/index.html","e5604f52b96b47429becc541375d157a"],["/2021/09/21/命令集-1/index.html","44879340aff009a0f952a6bacde7c9e3"],["/2021/09/21/命令集-2/index.html","a553d69213bbfc80ad9e118fecd0e4e0"],["/2021/09/21/命令集-3/index.html","603369a5756bfbf8974fc4fe491a4887"],["/2021/09/21/命令集-4/index.html","ae0fbcee01759c3487f508a43ece1dd9"],["/2021/10/03/socket学习/index.html","a46ef7800060c641adcf1459c7de87d7"],["/2021/10/10/dwm入门/index.html","2024627f0fc9b125f154d66dcc4aef8c"],["/2021/10/10/安装ohmyzsh并配置/index.html","48f4f66184be3ebc0cd06af8a20c3c6b"],["/2021/10/20/css学习/index.html","56432abe2c7c099f8b10d607ad6f7a4b"],["/2021/10/20/wm入坑/index.html","ce13eae2a584e7c4315b4dda9d0caa35"],["/2021/11/03/微信小程序学习/index.html","17cec334f3e20d8a280ac2045adc763b"],["/2021/11/04/css揭秘/index.html","e2a94101f55011627a86beb4fd645110"],["/2021/11/05/css-练习/index.html","3484261e609ae8e5862b773e7d8aa054"],["/2021/11/21/命令集-5/index.html","a0c6aa954f7f3631cad3ad0a248d38e1"],["/2021/11/21/命令集-6/index.html","ab05ed2e762afbe8666b1330d014e0d2"],["/2021/11/21/命令集-7/index.html","6f7cc120ed32298823b8a73e50973ed1"],["/2021/12/01/搭建wordpress/index.html","a8de436c3c3a44bfb6da695807cdda02"],["/2021/12/08/python操作百度网盘/index.html","4fe7e8d41a69ba1215ff41b2db0ac063"],["/2021/12/14/js爬虫/index.html","baa585efa76fdafa3ec9060ef94901a2"],["/2021/12/25/为网站申请ssl证书/index.html","cc8944f38ed35834a3f295abafd1588c"],["/2021/12/29/使用七牛云为网站提供服务/index.html","35eadeb466feef3741e44cdffd23aa65"],["/2021/12/30/jQurey继续学习/index.html","1c7b7c0c1ed94dccaf1faebe55e26d8b"],["/2021/12/30/jquery学习/index.html","a348d7959e797396d11812a44b35125b"],["/2021/12/31/vue学习/index.html","a30fc65553e204be9567093a70f6bb35"],["/2022/01/02/疫情自动打卡/index.html","e735e0f94103c93dded3be92bf6baa27"],["/2022/01/03/javaweb初体验/index.html","ff8c10ffeeba7e739bbfa8ba9364f754"],["/2022/01/04/codewars练习/index.html","d929f85ad6599d48323d40de96ddd68c"],["/2022/01/05/Spring学习/index.html","e0610b1ed973501bfb2118a56fe203e7"],["/2022/01/05/vue实战/index.html","8e66decabbcec2524b8c19bf86c95686"],["/2022/01/08/gdb-gcc学习/index.html","738a59e209b1f06297b8e1dd88e86aff"],["/2022/01/11/python-opencv学习/index.html","9e6dda2502a427abf5e26021c4835b98"],["/2022/01/12/汇编实战/index.html","4d0e10ade97a9ffba463680a75705348"],["/2022/01/17/pandas学习/index.html","b803d5f909150458ab4eb257186e4f39"],["/2022/01/19/可视化图的工具/index.html","d7c814813f1c422ec536c748acfa7997"],["/2022/01/19/机器学习入门/index.html","27004b8d3dcee2b959487d32786feace"],["/2022/01/20/cousera-ML学习/index.html","b75ec98e7054cb7519f00ce4004df54f"],["/2022/01/30/typora解绑后出现问题/index.html","0f8e372d3532c077a70fda6c8f9371c7"],["/2022/02/03/NLP学习/index.html","957fe965f2547aa6ecc83e9eac2cded5"],["/2022/02/04/Web漏洞学习/index.html","e28df22398a458a5a90faf885f7d5380"],["/2022/02/04/pyqt学习/index.html","1230494a6a1b8e9bd61e12fef1aff9a5"],["/2022/02/04/python爬虫/index.html","16f7a36e8eb5a6a46d89bfd7880b12af"],["/2022/02/18/Electron学习/index.html","b2a18473ea5693611c05697b84a199c2"],["/2022/02/22/疫情填报字段解析/index.html","b23bbcdd2c2daced215d28b1a1e0f99b"],["/2022/02/24/Bomb-lab实验/index.html","9632e395f5dec71d267a40e1b1f93a51"],["/2022/03/05/nginx学习/index.html","63da90714bc2bfcab5b32221b8564397"],["/2022/03/09/汇编原理课程学习/index.html","dfa87ebeda830096132579638da39ed7"],["/2022/03/11/Keras学习/index.html","38392b9aca5ad0fda10eba4e5af7c4b5"],["/2022/04/01/graphviz学习/index.html","e14b425064f8a86e0818dddb96f117cf"],["/2022/04/07/django学习/index.html","07814c719ccb639a4b38c63460ad4e8c"],["/2022/04/11/密码破解学习/index.html","18f3685e6d63c168372863aa7a4c72a0"],["/2022/04/12/flex-bison学习/index.html","d71f7bdbd2c92603c846585328b28bf8"],["/2022/04/15/pytorch学习/index.html","ccc044a023f4a3179c16d2e800d7561c"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","50138f50b9158e83bbd5e8f076effe51"],["/2022/04/23/写一个音乐播放器/index.html","9da20a820d7768170f2e3f137e49ceef"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","3b87361588a3c5d445ebdff369ea8aab"],["/2022/04/30/GAN学习/index.html","4b6e4f85b9489969e0ef45c0b7967912"],["/2022/05/02/html精学/index.html","9cfae6066411c521359d3eb4e9cbcdbb"],["/2022/05/06/write-a-compiler-by-yourself/index.html","f16c1e118c2d0fc9b6736db497a06b6b"],["/2022/05/30/acwj-01/index.html","7d37c357621ec396b46740876e52774e"],["/2022/06/14/animeGAN/index.html","61df851cac48549defbc5affe322a5e0"],["/2022/07/09/c-与算法学习/index.html","ddc8109838ec4583d8c8f4c9044f5ca4"],["/2022/09/19/flask学习/index.html","e5a9489d3211b5770357743e97af4b33"],["/2022/09/22/cs224w学习/index.html","574b1b07bbbb7ec9347a178dc44ce025"],["/2022/09/28/记录一次wp重装/index.html","a0001e31bba64fc72fb9915805cd5bdd"],["/2022/10/01/Obsidian学习/index.html","97808c6812ab66fe22d1574928b5e03d"],["/2022/10/08/vue-element-template实战/index.html","4f2483da15158af60cf5a949afe312e3"],["/2022/10/25/vue网上商城项目/index.html","90164042b923dfc36df30aaa859ff2be"],["/2022/11/11/leetcode刷题记录/index.html","2586c51b21b3dcdda0cb0457b9af91a3"],["/2022/11/11/使用overleaf优雅地写文章/index.html","ebb95f06a5ca3070c5dca0daa7070e65"],["/2022/11/22/磁力链接与RSS订阅/index.html","b17c4a1d8a07e515fa6f70ed1b2ed833"],["/2022/12/11/uniapp申请获取地理位置/index.html","cd8a4214e04b729f4cd3f0d1b3aced17"],["/2022/12/26/pr剪辑学习/index.html","dc6eab2a234d9634849875b890c5144a"],["/2022/12/27/css中的flex和grid布局/index.html","0d11a45342f0ed5c0d5148740a278954"],["/2022/12/28/Flutter学习/index.html","66b89332c9a0b8172300754b7de2e717"],["/2023/01/01/美化github首页/index.html","aeea06f86536e781272e89333b231be3"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","9b92184bb9d351a8fca65535d79ba8e1"],["/2023/01/04/构建微信快捷发布文章工具/index.html","a896b268a9c835b676ca350edc3d5981"],["/2023/01/14/dart学习/index.html","2b48dee7278aea09740c37b90d8e0b2b"],["/2023/01/23/闲置服务器BT下载影视/index.html","a2ca58abd95e4403ce43e79dbaa5870b"],["/2023/02/07/TotalCommander使用和学习/index.html","d2158862fea4928d4c913c10c6d813c9"],["/2023/02/13/docker学习/index.html","59b148662a360f4f4e158af7cb0f5cdb"],["/2023/02/17/DLHLP学习/index.html","a50479b4cc71a63b01af8cc5ee7d6b49"],["/2023/02/18/学习purecss构建自己的css框架/index.html","db078065e5a2a5bfb3654ecdef63c604"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","033191c81daa9e64a1fd6c9bff5a620f"],["/2023/03/05/STL学习/index.html","f680ece06d0b7aa6f3dabc98da5e93c6"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","2acffee2254f95219715a833727233f3"],["/2023/03/23/实战写浏览器插件/index.html","a93308a09daf1b20b099e04f294d2a98"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","5dfae8e996b39ad62beea46a1addb8dc"],["/2023/04/02/EndNote基本使用/index.html","071e8f93bd87b621cd972d7e8b551826"],["/2023/04/04/mne处理脑电数据基本使用/index.html","00441bfc2fd3a243785f0386991e61fe"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","ff1cf695f8b5b33274457af7c0a77564"],["/2023/05/02/python中的logging模块/index.html","3e2c8ee1b650b589d0260dd143a4a769"],["/2023/05/07/python的特别方法与装饰器/index.html","f69478bc4de85a75a6026a12c593eecd"],["/2023/05/20/Wox插件编写/index.html","743f7e85580688b3f640e61b6178003c"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","01fa280ffa8254686ea9e3d2959f1a2b"],["/2023/06/03/深入Clash配置文件/index.html","00b6eb5604a4ab6ee98d8516198832ba"],["/2023/06/10/node的包管理工具介绍/index.html","2bb472e5963b53ca821ff4106b50e6f2"],["/2023/06/12/AI写作工作流/index.html","3407a9d2003bed4ca16d4251f08b0cc2"],["/2023/07/07/Astro-Vercel部署博客/index.html","fb6a19c64008d275ad29189cbc6fa813"],["/2023/07/09/青龙面板部署项目/index.html","4ba532fd3c58a74b38fbb6c72f771191"],["/2023/07/29/CSS-Modules介绍/index.html","5b047ab896870fde6bd0edfa86cba387"],["/2023/07/30/浏览器JS/index.html","b4c082fcd76ac35a5f748fe4c090b66e"],["/2023/08/01/增加live2d看板娘/index.html","49b0d0e208df08d5abc68f2aac665423"],["/2023/08/02/深度知识基础学习/index.html","0c5e60d5576ee1c853257b0508f6e501"],["/2023/08/04/tailwind速成/index.html","b9e87ae908109de0f262571626121498"],["/about/index.html","9bb52ee618e911657d1e49d3d6b2cf08"],["/archives/2021/04/index.html","8c470aa44fc816a122c23a11f89fcab9"],["/archives/2021/05/index.html","4553bab8d8ae78468f971076539fcdf5"],["/archives/2021/06/index.html","c6d5861d8b6d76594f1d849f16b95a1e"],["/archives/2021/07/index.html","e094e63a695e94a33635791fae21b8f1"],["/archives/2021/08/index.html","7324198b637bf47dfdf830dc0244676c"],["/archives/2021/09/index.html","de8e75a9ef6ea2e8377c1da137621a1f"],["/archives/2021/10/index.html","70944016150d70ac639a17c083504a3b"],["/archives/2021/11/index.html","6c4bc5fe2f0face9cd824289d81b9ae4"],["/archives/2021/12/index.html","b29fbbb8e0527f01c6bc72297afe16a1"],["/archives/2021/index.html","f277816a8081a9afcbea1bb7feec8230"],["/archives/2022/01/index.html","7df92c383dc9db2d4feaf0a7a2287b45"],["/archives/2022/02/index.html","f3ee79d2f983e338a3aba8c709aa44c6"],["/archives/2022/03/index.html","7c19e6185e661dca7f76dcac901eab58"],["/archives/2022/04/index.html","a5ad71dfc26838db2176f9ccd5dbeb2b"],["/archives/2022/05/index.html","d2b73c4f97ea1227275dd9a05d5bf66c"],["/archives/2022/06/index.html","42130bcea455493916b153fac281d382"],["/archives/2022/07/index.html","2b0650fabca5b492e1032302c9f525ad"],["/archives/2022/09/index.html","424557eb029852d0683ef4617b30478d"],["/archives/2022/10/index.html","bd99773f7e2a4d9f8e3ea99d577dfc6c"],["/archives/2022/11/index.html","a2d35ddf098267670cb344098844af2b"],["/archives/2022/12/index.html","eb4399f0245fc3837739e7264737b7bf"],["/archives/2022/index.html","377292e671f2b7088ca0bc4cf4ff613b"],["/archives/2023/01/index.html","e8d4ff67259e22b2c92dc8c8ebef9ab0"],["/archives/2023/02/index.html","31e2e0da26b786868ccda4067eb38064"],["/archives/2023/03/index.html","e910fb7c895b2d32c94fde3a09eb4316"],["/archives/2023/04/index.html","edb5d533ea9ceb6133d746767fcb3eaa"],["/archives/2023/05/index.html","979c9eaaeaf1ba9d12ae1e1de7ab902d"],["/archives/2023/06/index.html","90fd019e98b6a95b2f9128216ac35c04"],["/archives/2023/07/index.html","5568b72693444fcd392e6c69307f828b"],["/archives/2023/08/index.html","57c37b9634ec64ab35e8054a8e1c79d9"],["/archives/2023/index.html","d8c1d8e1cb42530671f90e4df8b2c818"],["/archives/index.html","e576ff193edae6fb0743ef3bb44d397c"],["/archives/page/2/index.html","899e2cf55ce349362c3093be1869b7f6"],["/archives/page/3/index.html","657abe2b473e41e94c5f670599910bf4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","e0b7f8e3db9f310167b305a57d04d476"],["/categories/Linux-study/index.html","4b016c6d5d7196f869f61a37c385b059"],["/categories/ML/index.html","5c3415f0c5ffcfd444974e241da4ae4f"],["/categories/Nginx/index.html","a03ee40defb82153c702f68baef8372e"],["/categories/Spring/index.html","3c452bd304a90ef315eca844b0017e77"],["/categories/course/index.html","1a88e9527be63b0d2147d045626e101e"],["/categories/django/index.html","aa31a17dbba74a03ecce6e85a03e702b"],["/categories/fun/index.html","348f3fab4150f2bd39a1d7834b695cdd"],["/categories/gcc/gdb/index.html","f601672ddb2340622743894e00e6afc0"],["/categories/gcc/index.html","d2a0675e0f9e48ff690ba5afc42deba3"],["/categories/index.html","e30f3bf2916c823d5d68ec287f14f228"],["/categories/java/index.html","7d959a880d525a7d401f9ead46c7394f"],["/categories/latex/index.html","c0acc89a626f59b55652ebebf789ce7b"],["/categories/python/index.html","8b4ca7c07901e9659685e31add780e7c"],["/categories/study/index.html","c312b26fe92c3ae5b9eef8d831006b58"],["/categories/vue/index.html","ece987f0fcca7d63b67f0b62cd8f6f30"],["/categories/误区/index.html","2e6fced997b10928358fc9839bfabda9"],["/commonweal/index.html","82a74a5d859adbd02402200cbb5a672f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3c239e85ea5151d949244d1beffdc607"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","56d85c74efa4d94a37e9a6d251df5ec1"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","11da6ba891fb79bb7c8b35c3289b4cc1"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","31a1e6fe010fd9b053d889f2958f0f2c"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","a042514592c4c37b73c79d97dec63fcf"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","16bde8a3cb5d6ade5b4db20008d1123b"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","31b3c84208e4bbc4a7e192ee8b93a0da"],["/page/11/index.html","bddcc416930ace0ca1b3254d968f7361"],["/page/12/index.html","18ad3d86d9281e66f51816350418b999"],["/page/13/index.html","8ea251ffbe99e35fae626bcaaf7d8dae"],["/page/14/index.html","471341b53e76d60978da17da56174150"],["/page/15/index.html","de6323af4c56ffe2f5dd9126ff2d57ef"],["/page/16/index.html","f992c173a3794caa79f021b9c8a90cec"],["/page/17/index.html","5b0bc013d781ad1035330b5902668cf5"],["/page/18/index.html","398b4a61ec216ccbdd65fd67719fc020"],["/page/19/index.html","d7419ca339a6f048a87c30322292f65f"],["/page/2/index.html","17c07b72769d74d61290e55c499d8787"],["/page/20/index.html","ec019e5fa078fecefda2b3fafb259aee"],["/page/21/index.html","57929769e0707fff3ae6b13831cd1480"],["/page/22/index.html","18169de74fc07d11efc7b07b56b59fbd"],["/page/23/index.html","20f1a54fbae3ddc6d015def0093ea706"],["/page/24/index.html","9e619daca5a24dda18f79cd744e98728"],["/page/25/index.html","13a0cf87b237531cc4c3d44a21210f54"],["/page/3/index.html","eff678434f2277cb93262800cfd14639"],["/page/4/index.html","af5fd1bf8cb9ae801eadf9168494f983"],["/page/5/index.html","23cd4348acab621642219a1a406cabbf"],["/page/6/index.html","8544f887b7673d42b52f290f28db99f1"],["/page/7/index.html","7e22cde7a608fd7664969a9d0ffb380f"],["/page/8/index.html","aa91e09abcbd4ad7dff08a1b92257cde"],["/page/9/index.html","915d8ecea1a55cdfa6e866383a4377b6"],["/resume/index.html","0218351e76caaf347e0d9d043831448e"],["/schedule/index.html","9941a7822edf1a409c2f54376784fba6"],["/sitemap/index.html","4243df82cabfa15dc469af6cfcfbeed3"],["/sw-register.js","1d776f332749249e3aae150971a0db0f"],["/tags/AI/index.html","85f2052aa68ce868ad7eea6d2cbcf1c8"],["/tags/Astro/index.html","9ef799e2bf0e056a01a9605bb16838f2"],["/tags/BT/index.html","3930c3278ef6f0371ded350adc9a52b1"],["/tags/BaiduNetdisk/index.html","3d19a6e0db703c1b447645a360bb313e"],["/tags/Bootstrap5/index.html","daaf03c8c82a2d15c78c45d2d153dfdb"],["/tags/CSS3/index.html","c7ae83d4f6d71dfe7edb6a67f7f6d412"],["/tags/Centos/index.html","47b046faeee80674b96cc8d17b3852f3"],["/tags/EEG/index.html","e0cdc9f2eb8df9787ad796f21642a317"],["/tags/Electron/index.html","b84d38ee7e808a9a33e7a4dc4b07b26c"],["/tags/ElementUI/index.html","8fe101c4947e9d498775bf47067f0346"],["/tags/Flutter/index.html","1f54a258e9496874c6f02c9457e6fd5c"],["/tags/GAN/index.html","bcbc3f98230304d8cbe65b625380b855"],["/tags/GUI/index.html","5c8e71919c9e002b9349bd1552130183"],["/tags/Git/index.html","a8622fb48a30932f289d7ff0468df874"],["/tags/JavaScript/index.html","a4ef7ec7992cd417c94821dba6f764dd"],["/tags/Keras/index.html","7956dec3582748168ec84c0f3782a554"],["/tags/Linux/index.html","14d251bd6cf4a2cf06c32dc506fcfd56"],["/tags/ML/index.html","411fc705f5949bff1f1884dcd4e6ec41"],["/tags/MNE/index.html","85a3f6519602314743db18ddf65dec4a"],["/tags/NLP学习/index.html","78c201898bc13caa988568f1a51de4fa"],["/tags/Nginx/index.html","9cd93ae629f94da2153763d69b466b3c"],["/tags/OSS存储/index.html","e0dbf2e55afce5c4322e7385818d5c50"],["/tags/Obsidian/index.html","3df7b34a1810b3da8a529c9d0f4e1895"],["/tags/Qt/index.html","8c11b46268f2a42e6e1f595ac0260e29"],["/tags/RSS/index.html","eb5fe541c0869e4837e16d3c87233e49"],["/tags/SSL/index.html","b1a5cd4f85c833172b1746dcfabbead5"],["/tags/Scrapy/index.html","822b6993c97734dfecd65cbb2de5053e"],["/tags/Speech/index.html","5aa42d9aa1ce72a36cfb9952fb0ed845"],["/tags/Tailwind/index.html","84ef38514207bc0921d66051b4585f72"],["/tags/TotalCommander/index.html","dbe24f64b1c4613b340c1a014434ab31"],["/tags/VPN/index.html","dbfccde3477ae2bf1026fd56039aeba7"],["/tags/Vercel/index.html","e1b388903c95c08e0ff6f262c654eb30"],["/tags/Web/index.html","b755ac95e2f5d5775ccc9162aba85670"],["/tags/algorithm/index.html","d8a42eab210c3e2a8866aa6ed8ae64ca"],["/tags/bison/index.html","03f16ee6b05aeeb65919b3f73c0f4b6a"],["/tags/bom/index.html","00946d9d1ac547fd346ba6a07edc01c2"],["/tags/bomb-lab/index.html","110f5af2ee9bb50db98f9517719ffaba"],["/tags/c/index.html","8ad14d20ceebbd1c72d2cd39eaa2f5db"],["/tags/cheerio/index.html","24ba66ad4349a311b1411014a55aa192"],["/tags/codewars/index.html","24a6d292fa4e5f507e9ef803f8f07a4a"],["/tags/compile/index.html","fdbbc87784d1ec2df232a54534dc920c"],["/tags/compiler/index.html","e08adadb18abc39325d9cb5a1206c5e8"],["/tags/cors/index.html","af45112ab04e1cc5d2d227b0a191cd05"],["/tags/course/index.html","2bbd0ff59f1dea0b2915a2e4a1cf1ccd"],["/tags/cpp/index.html","0c6d34257a9b48345dfa8ecd97707365"],["/tags/crypto/index.html","b553a4988b96b5269a10db5b0b302241"],["/tags/csapp/index.html","90c015e37fed477ff43fff4a6482e15d"],["/tags/csp/index.html","4ae7b3e3008f714c242f684768658256"],["/tags/css/index.html","7d195822efe8d364158c169a8f5f3fe4"],["/tags/dart/index.html","eccf198229e0ea351e8b31e46eaf39c3"],["/tags/data-structure/index.html","de5fb8b048014f4f35caf6e70fec5a77"],["/tags/database/index.html","b096bb0f60d0d144d44ff83c1a8a6c88"],["/tags/deep-learning/index.html","c38ee1e33aacb0e9fde59d15e4851364"],["/tags/deepLearning/index.html","03891ca47b4920e8aebab7987b148909"],["/tags/django/index.html","afab6c7c8c8d80f368800b00346ab34d"],["/tags/docker/index.html","f0fad7ae06368a4b454943c3838c5f15"],["/tags/dom/index.html","f39109590d602dd9af3ee418fc3b8de6"],["/tags/dwm/index.html","09e84378202fd0403739c43e9feab4ca"],["/tags/exercise/index.html","b53278d067a21fdb31b70f06f261a581"],["/tags/filebrowser/index.html","60372f67c27b0936cf23fe1576202220"],["/tags/flask/index.html","f8654d950f62ee0bf957a5835a07acde"],["/tags/flex/index.html","e66169239dcebbd9e6b4ef3928a7f113"],["/tags/front/index.html","77778b79b79674cc89c5f858441c0222"],["/tags/gcc/index.html","cc21b4e72c3dec76d11b49e75dadf22c"],["/tags/gdb/index.html","32cc725b5ed9ffa1aaa6a01414a19142"],["/tags/github-profile/index.html","176f5b638f8204d512c07b603ec301a3"],["/tags/github/index.html","16370202b69296d3dc85f4d9830bace6"],["/tags/graphviz/index.html","77cc2bbfd88e0fa19e88f5e3ee3a6f3e"],["/tags/grid/index.html","effa69e93a08cf75869a7300109b06e1"],["/tags/html/index.html","621c370c4e741f4fcfccf02df70ce126"],["/tags/i3wm/index.html","b7037bc384ac5196385754d43c4d2aa0"],["/tags/index.html","7a22800caa5102cd6bedfd1463b157fd"],["/tags/issue/index.html","18e9aa52758ef785a5bf85e5d53c1736"],["/tags/jQuery/index.html","77119ffb3527ade47759ab9c50e466de"],["/tags/java/index.html","b4e2a6b9b73dfccea257e58121edb8a5"],["/tags/js/index.html","cac1813bcd9b66f973cfe4fe95b68c03"],["/tags/latex/index.html","ba1fa87bab2ccbe88724fa5d06144d2e"],["/tags/leetcode/index.html","0afda6e7c5cfb88e90f5f36ed271c9b0"],["/tags/lex/index.html","52d4c3d601c4b26e7a9bc6930528435e"],["/tags/logging/index.html","6df448eea4f5d613f5744962492669a4"],["/tags/material/index.html","67b4902706c33f7b5ed712cf4500a0c5"],["/tags/music-player/index.html","8401b0a9bc4f7279d0026ce7ec7ffe9c"],["/tags/node/index.html","53d53d2efed68118bbe89f4043bdd889"],["/tags/nodejs/index.html","bc254747efc8ad1ff991c6da54b5a8a9"],["/tags/noj/index.html","4692b90dba0f617084f49392a61088f1"],["/tags/npm/index.html","d27a4b0c4673b3b5df3854e21b4a489b"],["/tags/opencv/index.html","8fff5ce22e3eed633247d1362c5622da"],["/tags/overleaf/index.html","44758aee1f60042a4ee5ada6a95cc7a5"],["/tags/pandas/index.html","f1bc537872c298395135b9540bd8d76a"],["/tags/paper/index.html","0efe693bdd15e329de78f7f9af0ae776"],["/tags/premiere-pro/index.html","a12a0436a00fd1b84e333539a76c81f1"],["/tags/proxy/index.html","7870ba3bba47a07c8d7594cec47ede95"],["/tags/pure-css/index.html","46451b3e99ea6e209d87310f80327460"],["/tags/pygame/index.html","c3ee2f3428f8ab6d8432bf3d4ed81617"],["/tags/python/index.html","3b845d99f9f47513855060e54dc6a4d6"],["/tags/python/page/2/index.html","d6c9ff7f8fce456518b3d67e76bfab5b"],["/tags/pytorch/index.html","12faa297e79cd6b0c5f3618af488f7e1"],["/tags/reading/index.html","5a3f389446095b2ee66cd31c404d09a9"],["/tags/request/index.html","aae877293653b2e0ce7b9779cb261ad3"],["/tags/requests/index.html","5f4d769fdd4042d5e6e1efac3966ddad"],["/tags/security/index.html","24b54f6784a8343d405d64f1ad7c0614"],["/tags/shell/index.html","073d1eada1774a6ebe0812f4a7f1a08f"],["/tags/sign-in/index.html","2793e1b339f14738ccf4ffca5834000e"],["/tags/socket/index.html","5d96fcd71da3e2c98862c7686ebea7f9"],["/tags/spider/index.html","be4636cc0b1ee31cc93b0a63c2e5efd0"],["/tags/splash/index.html","17dc960c7365c8d468471c262c512e8d"],["/tags/stl/index.html","fb187531c2a840ecba58a15ef19fb5ef"],["/tags/sumatra/index.html","76dc67c03051fa7cbab8c6a449e95084"],["/tags/superagent/index.html","bf87660c8623937dac7c805e1ac4f5fa"],["/tags/tensorlow/index.html","4e3609ee554f4c10cd93b65b93d589f9"],["/tags/tex/index.html","7c691b57f3cc0f6eb9d80e831ff0557d"],["/tags/thesis/index.html","1cde5159207b2117e9467ae605c00b1b"],["/tags/threading/index.html","3160c8dcb550d67766e8f57b696943c0"],["/tags/tkinter/index.html","a800985fd831429fc32093fc5a62bd4e"],["/tags/torrent/index.html","dbb0eeac9fdfd9cf0ed05f031bc9efa2"],["/tags/tutorial/index.html","7f2ceaa1274b7e15ebb55d580defd6f6"],["/tags/typora/index.html","fe6a74a13f80c494328a4bc2510762e8"],["/tags/uniapp/index.html","f68a77a3e707d0fa825de1b644a30d97"],["/tags/vite/index.html","5f1979166e489ff26c706cbae90cb882"],["/tags/vscode/index.html","631e97e205e1e223c27ac3d32350b3b3"],["/tags/vue-element-template/index.html","68ab3b1aa5d363aca11c31682413f381"],["/tags/vue/index.html","99aca791926d32092f8109af20c4eb67"],["/tags/vue2/index.html","692e759275b474137c81f4f080cd8694"],["/tags/vue3-x/index.html","4a8ed8f2a7b1ce4e9102cb3699902b7d"],["/tags/wechat/index.html","b1749840026a959158ca637061c056db"],["/tags/wm/index.html","de3199c54516e92765712a18bb43e245"],["/tags/wordpress/index.html","c95e550ac3506e33451d099cb3a35fec"],["/tags/workflow/index.html","3523e0b378df8823bc91174e2d242961"],["/tags/xpath/index.html","866a1aee2eeeec08215c41aad185e23c"],["/tags/yacc/index.html","a2a3d8ad7324b7b3125eac2d60d66d94"],["/tags/yarn/index.html","a2d89b9431b7378af9e60417f926a971"],["/tags/zsh/index.html","359343d8b564fb527e2d522f5e3a312e"],["/tags/七牛云/index.html","10332ead3e2aaba67aa0f5091426b35e"],["/tags/函数/index.html","095a8ae9887075444fcaf9080da9c181"],["/tags/剪辑/index.html","b990d9e9cb3e79db5f0044c769aeb7c6"],["/tags/存储/index.html","ec03d214ebc3b6bef4a2bf6b34f8296c"],["/tags/实战/index.html","e5c431153eb55d6a69e8a4b6db20633c"],["/tags/工具使用/index.html","61f41351cdc07af0ce769a4b41f4549e"],["/tags/建站/index.html","b01696ec401a59e5e521d68123b7e7f5"],["/tags/微信小程序/index.html","9ef029c8a1bd46ff78bdd568d1a8c325"],["/tags/指针/index.html","593e658fa0c635df264860fe94115626"],["/tags/插件/index.html","49031556a56249a7a64a0d9b7823daf0"],["/tags/效率提升/index.html","8edbf2c68ae870c8de83be4c56209072"],["/tags/日志/index.html","50b60d6357da208db7d464a8f7c573e4"],["/tags/汇编/index.html","b80b2a4aa88e9836b6023edb41074fc5"],["/tags/油猴脚本/index.html","db976549eedabd11903625b9b01eac49"],["/tags/浏览器/index.html","783f3ad0ac94947303810419c3be3989"],["/tags/爬虫/index.html","75de710f77d965d100c10335de1a17f5"],["/tags/算法/index.html","eb11d2d3f4cd9e9bc36ae015234804ff"],["/tags/编译原理/index.html","f6308d65f9f267a773c2dc9e06144001"],["/tags/获取地理位置/index.html","9fcb4c016f1dae206e5f5a98cfaf760f"]];
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
