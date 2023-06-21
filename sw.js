/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c8cbcf3bb22579ab2c091883c6471440"],["/2021/04/20/稀疏矩阵/index.html","bd88559b99ed83fdfd8f4f20031eae85"],["/2021/04/23/广义表简介/index.html","e6b57cc00beb00e3342170602f5b1902"],["/2021/04/29/关于指针和函数/index.html","4f0b19143a4dbef938c16bee36c4a552"],["/2021/05/10/哈夫曼编-译码/index.html","2e6cb00097d857b66410da8d87017889"],["/2021/05/17/数据结构noj_2/index.html","342dced4b54150369d9de097f2466eba"],["/2021/05/30/数据结构试验/index.html","5b9e82199fcb26c0212a7678dcaeb836"],["/2021/06/12/数据结构noj-3/index.html","b3564a067b9f06894f18075714fe7755"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","143828c7191aabd77205214dbb88d6f3"],["/2021/07/08/课程资源分享/index.html","cc2bcf204038adc8a7326f336cd39d67"],["/2021/07/20/Scrapy-下载图片-文件/index.html","af3519970916dce052ae155024b3584e"],["/2021/07/21/Scrapy-动态网页爬取/index.html","7262dd478e07f310845a6cdb2cbdbcb6"],["/2021/07/21/疫情打卡/index.html","d96649e9f4f6f19f9ead856f24654168"],["/2021/07/29/Scrapy代理设置/index.html","87a7211563cfb9d914e411e47a3914f3"],["/2021/07/29/数据库认识/index.html","986c34ce0c38936df001e960a786eb2b"],["/2021/07/31/Python多线程学习/index.html","914d478b31d6ebc15b2ffecb65e31e37"],["/2021/07/31/tkinter-requests练习/index.html","fd255c772998404df437a372264af341"],["/2021/08/10/Git学习/index.html","0aef2f5a9acf6ffdeff45d792962420c"],["/2021/08/15/pygame实践-1/index.html","58895b83f4c6cbff6442cf941e133fc9"],["/2021/09/06/微信小程序开发/index.html","a4e935c4034e935ee601ca01c3fbf509"],["/2021/09/21/命令集-1/index.html","af648eec2d0a28c56c645be3d007af8c"],["/2021/09/21/命令集-2/index.html","134540dfb294bac30a5481550b5ef6f4"],["/2021/09/21/命令集-3/index.html","05a4941722013ed05d711815b3dbe436"],["/2021/09/21/命令集-4/index.html","17624ec72e830c5f776fd01e61c56d94"],["/2021/10/03/socket学习/index.html","ba81744f6449d4c0246b1206c0a41eab"],["/2021/10/10/dwm入门/index.html","399202cfc8dbfdfa05f2fbee3e0ec3f4"],["/2021/10/10/安装ohmyzsh并配置/index.html","1d577541f9649405f25395fae12fb5b2"],["/2021/10/20/css学习/index.html","8f7adb2a455a1393630441437890bd47"],["/2021/10/20/wm入坑/index.html","0a9cb01ffb2987aa6feacb8874e58571"],["/2021/11/03/微信小程序学习/index.html","2927fa2354cf8bec5e0403ceab1421ae"],["/2021/11/04/css揭秘/index.html","cc33756d45ecb45d1e824a3e244df22c"],["/2021/11/05/css-练习/index.html","254ab7b52e48a46dfef4e241d98ef690"],["/2021/11/21/命令集-5/index.html","e311921147ab0e04add804b016ef43e8"],["/2021/11/21/命令集-6/index.html","7498956c10604a99ff27ce0ab9246bf2"],["/2021/11/21/命令集-7/index.html","95fbaf0c52a68954229ae7387a0eedea"],["/2021/12/01/搭建wordpress/index.html","23e6f22586cc709187798f8287960a26"],["/2021/12/08/python操作百度网盘/index.html","faf4eb4f55094312c0f06775210388f4"],["/2021/12/14/js爬虫/index.html","146b891aab87493068ba5c514c70420c"],["/2021/12/25/为网站申请ssl证书/index.html","344e5facfd74345569702f3f767b2fbe"],["/2021/12/29/使用七牛云为网站提供服务/index.html","27676f5ceaf840ae62e22fa0fece7bd8"],["/2021/12/30/jQurey继续学习/index.html","4a364cd63cb4637fbd642f43573133ac"],["/2021/12/30/jquery学习/index.html","319d58aa8787e02b1295fe57ff857281"],["/2021/12/31/vue学习/index.html","7a1abd033b61592a2b2cc25ba3b808e5"],["/2022/01/02/疫情自动打卡/index.html","8c03e215e9aa23526bed5b844043c036"],["/2022/01/03/javaweb初体验/index.html","256afb5c3eb212663f9b9649f18192fe"],["/2022/01/04/codewars练习/index.html","52bc6fd071b496e4807ec9e8d172d68d"],["/2022/01/05/Spring学习/index.html","94aacf9e778f9deff065d8dcfac17386"],["/2022/01/05/vue实战/index.html","a35c57ff6b8d77f0ca71beef0682e477"],["/2022/01/08/gdb-gcc学习/index.html","5925c0cb20157e9e575a00b3fc7254d8"],["/2022/01/11/python-opencv学习/index.html","f1d3aa0a57e41fd70af4e239e6aeab40"],["/2022/01/12/汇编实战/index.html","4e3ac77c30e0f30430d8098ec3092bf6"],["/2022/01/17/pandas学习/index.html","c58ac2d489e75a310c1b2e1096f4ba78"],["/2022/01/19/可视化图的工具/index.html","70a4474921d7d99cc843b8c7700dc827"],["/2022/01/19/机器学习入门/index.html","8805f5d4a58a19f715e4bb0c7a88cff5"],["/2022/01/20/cousera-ML学习/index.html","20a9e919bc431a0c02c911e4f0d7c440"],["/2022/01/30/typora解绑后出现问题/index.html","5807d8b91369c89b41a46408869a1f88"],["/2022/02/03/NLP学习/index.html","f904446f5b623b9541164a4471436b40"],["/2022/02/04/Web漏洞学习/index.html","95e3ebe193ef35206360c53dbe450975"],["/2022/02/04/pyqt学习/index.html","7ca668f3785385e595b1c6527df751c8"],["/2022/02/04/python爬虫/index.html","93f15d25f94c04df318f6e4166c47ab7"],["/2022/02/18/Electron学习/index.html","b4dade7de8b86799060436871fbff5b3"],["/2022/02/22/疫情填报字段解析/index.html","c3b55981c408f230cb4eb76481da0f01"],["/2022/02/24/Bomb-lab实验/index.html","6cc49095905a4132eb709025cac30ec6"],["/2022/03/05/nginx学习/index.html","6a53b146a14ff6913a869bbbd3dac3ad"],["/2022/03/09/汇编原理课程学习/index.html","b8cfd51e09063f567c1c199f53c18d36"],["/2022/03/11/Keras学习/index.html","9cd1b10d266661670641e81816523490"],["/2022/04/01/graphviz学习/index.html","d9246183aa2dfbe603d99a5a9ca99762"],["/2022/04/07/django学习/index.html","0540755f98e95885f852a17874b92e18"],["/2022/04/11/密码破解学习/index.html","e9d306427602fc0d09b365729322c68f"],["/2022/04/12/flex-bison学习/index.html","1e183b598e73310aff910ed7b15f4896"],["/2022/04/15/pytorch学习/index.html","713bc3be1eb42378551ff9acb94e3842"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","0c9809340497dd0f3db443c7a110ab04"],["/2022/04/23/写一个音乐播放器/index.html","80ee56274427d1092e0a48e3a076a8f6"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","ef8e245ad5ecb95051fdc81c40cc4183"],["/2022/04/30/GAN学习/index.html","fbc474411323c5d078a4f14a31980bf7"],["/2022/05/02/html精学/index.html","a98f55e51f72e4d961000cdaed5412b9"],["/2022/05/06/write-a-compiler-by-yourself/index.html","ef7d2e68c0489992d18f9304744b70da"],["/2022/05/30/acwj-01/index.html","7e4fbe310d8166101f270de3775d1ef1"],["/2022/06/14/animeGAN/index.html","c239f0053ac5ceeeedf880770c91737c"],["/2022/07/09/c-与算法学习/index.html","35c92e23ecc0b9090cd8d3aa35921e82"],["/2022/09/19/flask学习/index.html","d3cb4577ee13d21b7f4a2c4feffcb1d4"],["/2022/09/22/cs224w学习/index.html","73806da1231bd15b255761ccd9165fa5"],["/2022/09/28/记录一次wp重装/index.html","5c694dcc9ab7666b255466fe52761401"],["/2022/10/01/Obsidian学习/index.html","4bea371f8bd3f948a1cc0f24d3d9b371"],["/2022/10/08/vue-element-template实战/index.html","cc259ba4b9d5bf66b1d3649afe38980a"],["/2022/10/25/vue网上商城项目/index.html","14e786a2b4e8b584caee6cf71735c3fe"],["/2022/11/11/leetcode刷题记录/index.html","d42a45fe1e1d86523cb17008973506a8"],["/2022/11/11/使用overleaf优雅地写文章/index.html","23185af4a2042d79b0be77ef6dabe202"],["/2022/11/22/磁力链接与RSS订阅/index.html","8d20ce9d97ce2123066bef62644858fb"],["/2022/12/11/uniapp申请获取地理位置/index.html","d54958a69b4729e49ca4f12f350653bd"],["/2022/12/26/pr剪辑学习/index.html","2858c4e29cc421636fa8817d577a7aae"],["/2022/12/27/css中的flex和grid布局/index.html","a62cc8e6faf13c9dc2425d5481331cfc"],["/2022/12/28/Flutter学习/index.html","2634a3b02681b6f8407470bf7c3ee8b0"],["/2023/01/01/美化github首页/index.html","a43bb8c4ac6b9bcf494618f593684acb"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","79fed3b6aa503007d9d12a47b1b2b063"],["/2023/01/04/构建微信快捷发布文章工具/index.html","2065fbd12b6436364b85a1eb2505bc38"],["/2023/01/14/dart学习/index.html","980434dbc6ec48c76805ad9d2ee4d7a7"],["/2023/01/23/闲置服务器BT下载影视/index.html","dd7c2873c57a49958f15bce40679d0cd"],["/2023/02/07/TotalCommander使用和学习/index.html","f3cbdbe7e04fce11063cca4da2eaae5f"],["/2023/02/13/docker学习/index.html","bc7089c616c17ce48d9cea460efa95d1"],["/2023/02/17/DLHLP学习/index.html","d8bf7479695b9bbd364c2aa31c4cefad"],["/2023/02/18/学习purecss构建自己的css框架/index.html","b804542f9eff0e7f97b287f2aba53de3"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","eb7023707afe410a69ef4a2a08531b11"],["/2023/03/05/STL学习/index.html","b01632a46a7552e7d9aa328f42833605"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","fc5999c51da2dd21b8987e33639f37ef"],["/2023/03/23/实战写浏览器插件/index.html","b1b28a10c569b2f05f2d85a769962067"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","dd19063ba83bfe226b1b0f8e069af438"],["/2023/04/02/EndNote基本使用/index.html","044c177c1ce4b155c43629891f3d9b94"],["/2023/04/04/mne处理脑电数据基本使用/index.html","c89a1e4ed2f9454067f9c6fe65a754c6"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","5ef3052df4acbc06a7d37bd60c494760"],["/2023/05/02/python中的logging模块/index.html","7b917ff5011442a6ea2cd75a043cb97a"],["/2023/05/07/python的特别方法与装饰器/index.html","a576340ab7388b8fbf4a4bfac7b4ab2b"],["/2023/05/20/Wox插件编写/index.html","fa9aaf459031512f9668248830ad9483"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","8757a34f408994bd15aa3d1d767ea2ca"],["/2023/06/03/深入Clash配置文件/index.html","92afc49bad229d715087cc035b183bcb"],["/2023/06/10/node的包管理工具介绍/index.html","06d7d4bc9d3f91b2a8c928596e9ef8c1"],["/2023/06/12/AI写作工作流/index.html","ef15f95d318d81b4006b3d12e053aabe"],["/about/index.html","05a88179352709301e3f08cb4307807d"],["/archives/2021/04/index.html","f86360aff2731e53bc96b33a6b8c8be4"],["/archives/2021/05/index.html","a6bc0b5670813573cec0c88f1d0f8ffb"],["/archives/2021/06/index.html","99cdc7a687673ddd81b77de51f7c3671"],["/archives/2021/07/index.html","2589e3ac4b2b1e59fb74d3201b057d23"],["/archives/2021/08/index.html","c0c0f4709455ba4018e176aeabff2554"],["/archives/2021/09/index.html","65d9a973f9524b3e4c013e07622f7442"],["/archives/2021/10/index.html","477c2605c79fae937b19622231c83216"],["/archives/2021/11/index.html","1ea379024b02829b07dce4f255af74f5"],["/archives/2021/12/index.html","b9aff3bb929808352d738aec0a2a01c5"],["/archives/2021/index.html","be052370c3f4d8dd5795497647a299ca"],["/archives/2022/01/index.html","0bf41866395db385f07dd387928ea017"],["/archives/2022/02/index.html","fed0319009d770d24da48c4bc50792f7"],["/archives/2022/03/index.html","12b47b75eed8c6a6cce7af0e416cba5f"],["/archives/2022/04/index.html","0ebebeddb735c8fe389be5b1d8626297"],["/archives/2022/05/index.html","3c7a8c35cd88e59b627130149b9f3755"],["/archives/2022/06/index.html","42a7faa05136eac30de8eac5f3cd2f84"],["/archives/2022/07/index.html","53787577a67e87a80666eadfaa5ccd00"],["/archives/2022/09/index.html","81f4ffe64bd30554acb8b1436522f974"],["/archives/2022/10/index.html","7bb625ef2ff4afed239915bf648ca4ae"],["/archives/2022/11/index.html","3ed18f47e87affdb15f0a46513266710"],["/archives/2022/12/index.html","440385b43ca3ccf49fda46924ebfb8b0"],["/archives/2022/index.html","cc60f46d4d9e1a8843e250283848f5d0"],["/archives/2023/01/index.html","80bdbb63e0a2c4344657168acff64622"],["/archives/2023/02/index.html","55f8dcfd0356c865f5b2fb2a909eb764"],["/archives/2023/03/index.html","af3f5413961be9f283f40f0bdc755482"],["/archives/2023/04/index.html","28e92d17ba9a42aa35452f7e8a173015"],["/archives/2023/05/index.html","3eb50287646cbd88b06147fa1dc10296"],["/archives/2023/06/index.html","ced28fc0bd4e3ceab2a6bb27cd894b60"],["/archives/2023/index.html","a5f0d5b5c6e92cbcca76c0b6af61231c"],["/archives/index.html","3100b70afa54f8613f43e246401f341b"],["/archives/page/2/index.html","4ba6fdf31cfb332b800ff4d4f88d47dc"],["/archives/page/3/index.html","039c4dccd0004e770988a054e55827dd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","3beb6e7f6bfc34bc47e725e3f8e516f1"],["/categories/Linux-study/index.html","b26d2439b8b5e46c7be75febdab6bf28"],["/categories/ML/index.html","9479282b0ec15f4602031be6f5bcf517"],["/categories/Nginx/index.html","5ad0682943e5f7be89872ffea6584838"],["/categories/Spring/index.html","0888daa92f6d143f3e14c4b1d36265f0"],["/categories/course/index.html","3de8cd7f860f54ef9d849268696bd6de"],["/categories/django/index.html","bd29240aa6a00d76fb909f5e41cd958a"],["/categories/fun/index.html","56c5b55e1cc59d46aa3c87143341eca0"],["/categories/gcc/gdb/index.html","b10f4911e7eb0d4d7cbef45dac188ab9"],["/categories/gcc/index.html","4123ce38f07845f9da43209fac45b3d7"],["/categories/index.html","81728126b18631bdd9fe31564422242c"],["/categories/java/index.html","f72f3484f92e63fcbcb2f41ee70d4a26"],["/categories/latex/index.html","2a84783116b1942928e5ff953aa06261"],["/categories/python/index.html","dc6494492d16a0e702a6f28b56cd485e"],["/categories/study/index.html","2eba5cb00098b560c34ff251a24768a1"],["/categories/vue/index.html","92cd299d059f69742cb5b05f4486bf28"],["/categories/误区/index.html","d814688ec5a32a9393c9b3ca958cb7c6"],["/commonweal/index.html","10191ef3cd0cba43d6140319c1da7732"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8769a428a3d93eef9dd9cbd7d4b46788"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","aaa1b99a7dbe6402855eab6321145386"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","62bc0473f6640e504896ed1118472a28"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","f4a61238650706de3fdaed4ead6568f4"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","3a7189201c82e8f5cb857454f3009e76"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","a60454fcff1947a2b5217fbb14ddf513"],["/page/11/index.html","4630aadb0cbcafc2b2b22661df0fc07d"],["/page/12/index.html","16d093840ce1ce87047001981e77b68b"],["/page/13/index.html","7188d447416c98ad814379c3a0ba9649"],["/page/14/index.html","8fd42951b47d0ebef02f76a327fc26db"],["/page/15/index.html","17c08e4b86f31ff42c4f579d2f5a634d"],["/page/16/index.html","ba38858cac599f439eb9638263240e20"],["/page/17/index.html","6f864dc8a3fd2d133fdea74ce168c041"],["/page/18/index.html","b5e47539731010df8d3b5428137725f9"],["/page/19/index.html","67969acc453e612e83d1086c107c3f2e"],["/page/2/index.html","188ba44fc7f9dca6b5cb1127e2bf5ecd"],["/page/20/index.html","2907c3d82977654ec2f27a9eb04ca88a"],["/page/21/index.html","71bffd7dac558e9d82ad9c446c53a1b0"],["/page/22/index.html","3b1be7b77b46208a1e8a0caf53dff6f7"],["/page/23/index.html","9eaa82807243b8ad2038200bab8b2404"],["/page/24/index.html","5e5f8832d84749f763cb6835c30bd5b0"],["/page/3/index.html","c3a9f5ae44e31dda5aaf6426fabc1095"],["/page/4/index.html","68193b44c447a29dbec6411ecaf9eb0b"],["/page/5/index.html","b72ccbed028ee2c00c06bae63ffe64fb"],["/page/6/index.html","b796123d2a440f00a4b4d4e71b0618f6"],["/page/7/index.html","2b1e03cb9a0fcfb7892ca21122025852"],["/page/8/index.html","f2c42cce14995b63b2a4d4eb9095b3b0"],["/page/9/index.html","9401c07a539418871405ab1099a58f6d"],["/resume/index.html","753adbc16e44fba27b16585eac5d75df"],["/schedule/index.html","b849fa7ed165a866e06dd7fa90b59cc7"],["/sitemap/index.html","217e13107a9da3702a9dfc1cd42ca5e6"],["/sw-register.js","e801ebf9f83615677484680218644b77"],["/tags/AI/index.html","b39c4de21aa2e8630aa459fccc4a0495"],["/tags/BT/index.html","a74ac2b1dac1cab0e811f5fba83d6e5d"],["/tags/BaiduNetdisk/index.html","09f50944d1e4c3db1cdb83ecebd470e4"],["/tags/Bootstrap5/index.html","f59050fea3e273b984c173a067166960"],["/tags/CSS3/index.html","33249f036e0aa71bbd282cfac9982188"],["/tags/Centos/index.html","a9ee18ac0e991125dba66fc9997d9eb2"],["/tags/EEG/index.html","f67af8bbae966219bdc1c02a5262e9c0"],["/tags/Electron/index.html","19ab1ef6ba3aaefedc2542dc248a0844"],["/tags/ElementUI/index.html","cc203bf2c6948d6eb7a2911a35318c3a"],["/tags/Flutter/index.html","9e46cf487b3a19a799297f13139afed4"],["/tags/GAN/index.html","15524eb38598ea3c0c2814797a9f721c"],["/tags/GUI/index.html","784f7204965f89d17d86a7c4d78ae618"],["/tags/Git/index.html","e0b00237c74cd89fa347300560340248"],["/tags/JavaScript/index.html","22742f477e1c6747a9af763ad0abc80b"],["/tags/Keras/index.html","5e3336d3d63b54c321a08565f93ca8de"],["/tags/Linux/index.html","648094c7497d5a301b198096ced7793b"],["/tags/ML/index.html","ebd1622d2c6dd5437176b5ec552c43ce"],["/tags/MNE/index.html","4e29fe62984ed3b5dddbcac54ae0ff5a"],["/tags/NLP学习/index.html","8951371e3eb9ab91858c70137d4b70b4"],["/tags/Nginx/index.html","8b9124b85a4e546e65e20da35815c965"],["/tags/OSS存储/index.html","1f3284eb8ced120659705af85ef2b25f"],["/tags/Obsidian/index.html","d0dd9d9ce181828c5500c109dfb71726"],["/tags/Qt/index.html","abcc421aed46fda22f18279df39d6aaf"],["/tags/RSS/index.html","0d7bf26b3cea1e5db0e6e3c3eb19bae0"],["/tags/SSL/index.html","b6f69795945ff1f93cf63d6757d3c71f"],["/tags/Scrapy/index.html","098471e7cc62f7f60a677fce41767281"],["/tags/Speech/index.html","a28142a3482c4fdf3f7bb5feb33acf7f"],["/tags/TotalCommander/index.html","1b5b299f1b7515cdcd1b41dbaa2ce952"],["/tags/VPN/index.html","0a4d3806093fd0f5f833d75dd8481b13"],["/tags/Web/index.html","54aa3e505e865907e9989175f56207d9"],["/tags/algorithm/index.html","412ea1935ddc1aba3e9f948ed3b6bdb4"],["/tags/bison/index.html","9cf05fb294c9af50a9b8a770f08d2472"],["/tags/bomb-lab/index.html","07f34820f661a169544dc94f7b40d535"],["/tags/c/index.html","d6307c26e0b8b2904150a6f65bf3fb7a"],["/tags/cheerio/index.html","3d7124174379a8fa3b341863a3e90fbb"],["/tags/codewars/index.html","9fa5d277079a60cd4cc74e5ef3bdc4b2"],["/tags/compile/index.html","a3b71e70a57569dda7a61b39387dbb86"],["/tags/compiler/index.html","1ef3d9011da2ae7a99a267d622cc836e"],["/tags/cors/index.html","b3628ffc627a8ee355428f4b72374f46"],["/tags/course/index.html","4fe7f9f2b9ab8b16895ad0d3a5c43994"],["/tags/cpp/index.html","43de0b057f82597df6eda32513b4ea12"],["/tags/crypto/index.html","ea89972e770058881d717ba96119e85c"],["/tags/csapp/index.html","f1cbfd86aba282bc3d984f69c9730ee8"],["/tags/csp/index.html","929df05a67e70a799ed875f2d8d4e422"],["/tags/css/index.html","682299a872e3e446d481f03504b34704"],["/tags/dart/index.html","c1dfd22e38885bd0cbd92f0905d0f855"],["/tags/data-structure/index.html","e158f43448c53b5d519ecde6cbb35f82"],["/tags/database/index.html","41b0eedb5fa09e0dd1a4170c65918f7e"],["/tags/deep-learning/index.html","d61ae8ce9a75866c26391be165f075a2"],["/tags/django/index.html","f1c79ddb0a46da919af3fe149eb2b69f"],["/tags/docker/index.html","8e9cc6365e8aafc42f839e7ce9136e10"],["/tags/dwm/index.html","51630a4d622a08772ebad1195a8b3820"],["/tags/exercise/index.html","55a2b2c7e7b7ff42404626a6d25acaca"],["/tags/filebrowser/index.html","be9d3c24c1980fd90d15e2d35554aefc"],["/tags/flask/index.html","6a37797ed930f4085f3f0ea6d3090f58"],["/tags/flex/index.html","ed2e41462fbe20f2fca0fe41bcef7d81"],["/tags/front/index.html","a49c89783fc5f7be39becc19a3c22364"],["/tags/gcc/index.html","97229c673423f199a3b3603c1bd1331a"],["/tags/gdb/index.html","588cc3b6e34b21e78bd6e84d03111b1a"],["/tags/github-profile/index.html","ea15bde326bdb6fc1fa01cfc1d99d661"],["/tags/github/index.html","fb909c14c775a30419e9604bf25941ed"],["/tags/graphviz/index.html","c5e4904bc39c0ae40edb7cf9573ddde7"],["/tags/grid/index.html","522f073c25c5f776be3f1f198b3af3c3"],["/tags/html/index.html","b53e3b3a97c027a72528577f0aeb2a92"],["/tags/i3wm/index.html","2ff6dfd043642776df06e14b9f1e7199"],["/tags/index.html","ada797218cc2bfa1e18ec56d0945059e"],["/tags/issue/index.html","b031dc804a1190b80a96e1dc8ed69316"],["/tags/jQuery/index.html","3f9b0c2b36b2217775cc1e00930db2d3"],["/tags/java/index.html","21229dec62df2172a93d8e5bbec9da00"],["/tags/js/index.html","2e45d3d3a83a0def4f424caef0eb5a5d"],["/tags/latex/index.html","d392000fc3fd08a1988b7389fe9ba606"],["/tags/leetcode/index.html","c3ec3ffdc393f71f45a17a9dbf21a6cf"],["/tags/lex/index.html","e64b2fc5dcc19bcc4ed199694ad8dfe3"],["/tags/logging/index.html","e6358e8dc8ccf4d909ac13a12443f71e"],["/tags/material/index.html","4667853062f6bab4e8b81edd4a46410f"],["/tags/music-player/index.html","73d97570553370116d83447c82149c2d"],["/tags/node/index.html","f5a3ff623ad100b5c3da2a84adefc773"],["/tags/nodejs/index.html","aa5bc2efbdcf551231a88e0c552aaf2c"],["/tags/noj/index.html","6c9ea78051a3cde12017f78952461570"],["/tags/npm/index.html","a7013bb7adb22f09df84a9455f4f79d1"],["/tags/opencv/index.html","d4ab8c7075b6f1ef68ae43bcfb96f07d"],["/tags/overleaf/index.html","53203cb579e861cb6993ddcd461cac30"],["/tags/pandas/index.html","d45b0f54b72799544d139d9ec82b8e20"],["/tags/paper/index.html","6003dcff82e23e145bceccac019d816e"],["/tags/premiere-pro/index.html","014a65fbc9dadc9f20987d40e88cb870"],["/tags/proxy/index.html","fd304abbd06c1650700d897c14492bcf"],["/tags/pure-css/index.html","d3ce7c0927319ee80baa7c004594c99f"],["/tags/pygame/index.html","9dd2fe4e826f208d9f74c98a5a6f33ca"],["/tags/python/index.html","e4a1a3e8c331627a6bab8f1c6748d7c8"],["/tags/python/page/2/index.html","00f283c3cb6512ac1a73190040174e38"],["/tags/pytorch/index.html","5f27fdaf82d1c85cbcdf768e47ab99bf"],["/tags/reading/index.html","d1e7f2f1ba4b6021b7885b158b83ac05"],["/tags/request/index.html","c9b7b6ee94e8373e69de409348ca708d"],["/tags/requests/index.html","4db5540b3b2d8da520ba73afe7691503"],["/tags/security/index.html","fb28870522fd127ac8c399e0babea4b7"],["/tags/shell/index.html","11d5a533a7047a4a72e6572ab97c4b75"],["/tags/sign-in/index.html","4403ca433a3b997d31c459358a7ac9bf"],["/tags/socket/index.html","46ebaf092abcf64fa0a1051ef1ab1026"],["/tags/spider/index.html","74ec48ab78d0d58cfea4c756b70b3084"],["/tags/splash/index.html","946e45c6f0862b06281a41c15d6f217a"],["/tags/stl/index.html","cede198af2fc893d3569547df16f944b"],["/tags/sumatra/index.html","044bbbba6a6d4e474aeb9aaa6040e5ee"],["/tags/superagent/index.html","9f39a6fcca0c67a56ea344999992c267"],["/tags/tensorlow/index.html","8c05cd58dee95c51608f74185106907b"],["/tags/tex/index.html","fecfa5f86bc7ca5b5b3433b7202e0ca7"],["/tags/thesis/index.html","b5c2d109201c54e559ad77c97df460a9"],["/tags/threading/index.html","7aec0de7d9d1e906c2ea2c7316872ee4"],["/tags/tkinter/index.html","b457acbe20a3caf31907e3e4e3388e2a"],["/tags/torrent/index.html","ee0ad4fe803b74f693595cce0c1a71b7"],["/tags/tutorial/index.html","cc93cf88a5c6dd2b1d5238e851ba2dde"],["/tags/typora/index.html","40a1b89ec257d5102ff3fed277884ebc"],["/tags/uniapp/index.html","2f20dbdf5a6f4f657d4f0f4a9c1fccbc"],["/tags/vite/index.html","4ba60c9889c0f4873b17f4263eeebf33"],["/tags/vscode/index.html","e54bfaf5aa7fbd6b87b5632055cb7972"],["/tags/vue-element-template/index.html","73d56abb537d1c8b412951b052834115"],["/tags/vue/index.html","b459c81d1d8d0c0fbb56545f53242634"],["/tags/vue2/index.html","ca9015a1064018858db2d477f3f6eb8e"],["/tags/vue3-x/index.html","a4553eb5160af555fa9c7a3c6d1020d0"],["/tags/wechat/index.html","b30464ae456ef91fdc60f23de324c0a0"],["/tags/wm/index.html","9f82fa578aa0310f3c24076f7482e251"],["/tags/wordpress/index.html","b6f42799f437606bf84c822e96d288ed"],["/tags/workflow/index.html","9fa5d4edbe29e098d7c54827a011ece0"],["/tags/xpath/index.html","5d0f9c6b5ca286cfcb0ab732827e2c11"],["/tags/yacc/index.html","eda90f0285f2ae46b802bc8104f18891"],["/tags/yarn/index.html","3cb28c89cd0a5a7a93775136145d6e22"],["/tags/zsh/index.html","7e4ee94b421712cf35e8181fc720e60f"],["/tags/七牛云/index.html","381f7c9906f14d7b392056afb81b7207"],["/tags/函数/index.html","95bab8d7da9e232d48c89a7b0260e559"],["/tags/剪辑/index.html","f16980835e4c0f51466db7929c7a842a"],["/tags/存储/index.html","8a33a7bedadff9708a7ea0e96e6aad6b"],["/tags/实战/index.html","0ab921900a728e13c92118039533e59a"],["/tags/工具使用/index.html","5dc971aa8ff884214db626ef5696d9c0"],["/tags/建站/index.html","9992d70db8b521c78c1cfa843b3b7fac"],["/tags/微信小程序/index.html","625edcc7650c80fc7053a9b2e070eb87"],["/tags/指针/index.html","4eb112e6dbabb3f7de46baa530554ec5"],["/tags/插件/index.html","a86aa8cc6afb77bd789ffa3077fdb1ad"],["/tags/效率提升/index.html","f76c45e3ca436048856fbade42f7041b"],["/tags/日志/index.html","b2324198f71577acc507cd3c56ad19dd"],["/tags/汇编/index.html","09dd8a8e8136b7dc18fc14f3986aceb6"],["/tags/油猴脚本/index.html","0eb28119a5d3603f5f9e89a69c87a0ce"],["/tags/浏览器/index.html","ef3585f56a688c060a5533c7f227156e"],["/tags/爬虫/index.html","c46a7f44f8eab91583501c1b96729fb7"],["/tags/算法/index.html","71533cc9df323b143d42dbf6e3890bd1"],["/tags/编译原理/index.html","5c2d0e4766cc65588770b3666564774d"],["/tags/获取地理位置/index.html","ee65f090bc68d24c39e7fea728ec6fbb"]];
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
