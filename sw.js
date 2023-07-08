/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","ad63b980f78d17bacd02ad3f45fb6e3c"],["/2021/04/20/稀疏矩阵/index.html","3b44d6cba1c194bb20aee984bed49c2b"],["/2021/04/23/广义表简介/index.html","c71a4d277bd3750f929d77494e387b42"],["/2021/04/29/关于指针和函数/index.html","f9a793fc6765be27cd00f67c0d3cdbb6"],["/2021/05/10/哈夫曼编-译码/index.html","c89200572f82d898a9410c08bfc76e13"],["/2021/05/17/数据结构noj_2/index.html","813461b1d92335fcdcb9228a027e1acb"],["/2021/05/30/数据结构试验/index.html","9540488c6d53bae52d631faf47b236d8"],["/2021/06/12/数据结构noj-3/index.html","ae71a291e1e7c712b2f2258ef74cd9ca"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","f90ad53dbdb3dba1a28cda57670e668c"],["/2021/07/08/课程资源分享/index.html","8a7f58ab34deef9fd01d752c2b57d0b3"],["/2021/07/20/Scrapy-下载图片-文件/index.html","70c3b957b5cd2dce4b693cd5b920eb93"],["/2021/07/21/Scrapy-动态网页爬取/index.html","5e73d10df57b24cfe3a0a47250e53316"],["/2021/07/21/疫情打卡/index.html","103894e0a340ec7cee5751072f48ed03"],["/2021/07/29/Scrapy代理设置/index.html","f788011d42d47c4388b3852bd2faf127"],["/2021/07/29/数据库认识/index.html","1b5d8e3dccf7a74219d8bc5f6152713a"],["/2021/07/31/Python多线程学习/index.html","ec0dde2304b326604771deece85dcbc5"],["/2021/07/31/tkinter-requests练习/index.html","32de35ad5f38c778c96afcad6edfd0f6"],["/2021/08/10/Git学习/index.html","9546b45f03745f1a114f5c397db7bc66"],["/2021/08/15/pygame实践-1/index.html","ccf5c914d549bce81d104827a0f00b23"],["/2021/09/06/微信小程序开发/index.html","c3413ac2d935db8b07c90eac94d82ebe"],["/2021/09/21/命令集-1/index.html","23c5a5eb331d0a919fdc9cba34c65a1b"],["/2021/09/21/命令集-2/index.html","4accbb9a65ade3e8ab4d8c915fa24649"],["/2021/09/21/命令集-3/index.html","861b9647f340a77ef5758413227ae59f"],["/2021/09/21/命令集-4/index.html","74ece5b2fad2cc173e075051ac2053ed"],["/2021/10/03/socket学习/index.html","418abe7492c44c17031d5c2df652274f"],["/2021/10/10/dwm入门/index.html","ec704eee34d38f74d301904814d14bb4"],["/2021/10/10/安装ohmyzsh并配置/index.html","92cf3c1b58b3e2678b34310408f93c33"],["/2021/10/20/css学习/index.html","efcb86c13851c62a5bbb157ab267803a"],["/2021/10/20/wm入坑/index.html","b7889556e72544cf44aa6e2735b0fe0b"],["/2021/11/03/微信小程序学习/index.html","3e52ceade045f3fc2ce80110a9a8727b"],["/2021/11/04/css揭秘/index.html","3717905bbe086908caaea4b69ebba57b"],["/2021/11/05/css-练习/index.html","ff213e7b2792d12f8354daf39d3d4e75"],["/2021/11/21/命令集-5/index.html","9953bb0607d447eb18382939efa553d9"],["/2021/11/21/命令集-6/index.html","718aaa5037d3b2cfa8e57fb5c81dffe8"],["/2021/11/21/命令集-7/index.html","25b329b71928c97aecdd88dd2d526ad9"],["/2021/12/01/搭建wordpress/index.html","9385ea1ad422ea15fcfa580c5d7b38fb"],["/2021/12/08/python操作百度网盘/index.html","170c7d9658deff26c8aa3316ae903493"],["/2021/12/14/js爬虫/index.html","f08b750bf0653c09a0d7abc54650cbcf"],["/2021/12/25/为网站申请ssl证书/index.html","3fde788376ccbf539490d743f1b4ad18"],["/2021/12/29/使用七牛云为网站提供服务/index.html","f7dd8427bfa097221cce843c7e9634ce"],["/2021/12/30/jQurey继续学习/index.html","f2231b70214f768c9e96ab633254ccaa"],["/2021/12/30/jquery学习/index.html","0b18eaa8957da391b692bdc81cfef0ac"],["/2021/12/31/vue学习/index.html","7ad00c1352ef40a6cbbd7694b84b30fa"],["/2022/01/02/疫情自动打卡/index.html","5d786519314fa741b4b39ec2f313347d"],["/2022/01/03/javaweb初体验/index.html","548c617d9873086e09d97b6297d8d3b5"],["/2022/01/04/codewars练习/index.html","094ae25932b0d22f8d922179a224872c"],["/2022/01/05/Spring学习/index.html","16c834cc918429e58432c577f0ec194d"],["/2022/01/05/vue实战/index.html","a4187236fd027fcdb48c238c65a83c2b"],["/2022/01/08/gdb-gcc学习/index.html","1634e2d2112a51a1bba3f412e54d0307"],["/2022/01/11/python-opencv学习/index.html","33b7ab9ee1c9f6dae14088fbd38037ec"],["/2022/01/12/汇编实战/index.html","669c0d7f817686cad9c1d2b7bbdcecd1"],["/2022/01/17/pandas学习/index.html","d3457249b806c0eacbce98ea32ada312"],["/2022/01/19/可视化图的工具/index.html","c9817db1fca4ce42ab43ee4efa28da0f"],["/2022/01/19/机器学习入门/index.html","bcc31510c69ba88ab71649df0be1629b"],["/2022/01/20/cousera-ML学习/index.html","de5540d81ae37f37b77553f9db138072"],["/2022/01/30/typora解绑后出现问题/index.html","fac3d7bb75eed49b1b1b53c616083b4a"],["/2022/02/03/NLP学习/index.html","d6d4744a26ae06bc4e513e9880b57edb"],["/2022/02/04/Web漏洞学习/index.html","69b783f47a3ca3f6f15f29cf1aa2ae27"],["/2022/02/04/pyqt学习/index.html","c5c65f270533f887479de9b4e17ce7ea"],["/2022/02/04/python爬虫/index.html","b03b2a2f70353cc4c1f1a14afe9e4aa2"],["/2022/02/18/Electron学习/index.html","27c0858037af2e434da443593ecdc5a8"],["/2022/02/22/疫情填报字段解析/index.html","7af3d9301ada4d6cb45d0c1b759f3116"],["/2022/02/24/Bomb-lab实验/index.html","980f55984a59180fad29fe4672fc7640"],["/2022/03/05/nginx学习/index.html","e8332f73a5df26e0c649fa31ad3c5ffd"],["/2022/03/09/汇编原理课程学习/index.html","018fac53600c62e057b3328b61cbcd12"],["/2022/03/11/Keras学习/index.html","18be0115d6202d72457da19391809db6"],["/2022/04/01/graphviz学习/index.html","6c9d2cd8554398af321e209fb51f6f16"],["/2022/04/07/django学习/index.html","0226d8f283a4db5080d15a1f51c38774"],["/2022/04/11/密码破解学习/index.html","6f789c803c8368d9ee44db7e82e74f92"],["/2022/04/12/flex-bison学习/index.html","109d7f4df2b2e9c8b7298600a1acb872"],["/2022/04/15/pytorch学习/index.html","e790e8f4b567ae731fad92dafb9ad741"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","4463f96cb18be8423b9c97e229028299"],["/2022/04/23/写一个音乐播放器/index.html","6cf3893e4bb8374efaf2b9131b7dc282"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","c0c718c9a1f8cef0eadd27e1295275bb"],["/2022/04/30/GAN学习/index.html","67085234891fd7e3261aafe029b34d98"],["/2022/05/02/html精学/index.html","5192b1c2d9b34073e0e8841c94be8342"],["/2022/05/06/write-a-compiler-by-yourself/index.html","a17b19c1899f44b0615b6b94c46b6d69"],["/2022/05/30/acwj-01/index.html","c7a9ffbd26218e552ffbdb50e8547237"],["/2022/06/14/animeGAN/index.html","13e9677e303a2e84d07e19328a95d525"],["/2022/07/09/c-与算法学习/index.html","ed08cca995e7907b69fde0ccebc517ae"],["/2022/09/19/flask学习/index.html","f6eeb5e89b2f2ab88bbef5f1ef949624"],["/2022/09/22/cs224w学习/index.html","f87bd79d7e92d08ea1fe9eea62fc2bde"],["/2022/09/28/记录一次wp重装/index.html","476ea98bfbc4f39b91b0e003fe0bba53"],["/2022/10/01/Obsidian学习/index.html","32430a248e77b69e44b48c8d8bd629e1"],["/2022/10/08/vue-element-template实战/index.html","51d1cddab87b4377f7642e4dbfc2b73e"],["/2022/10/25/vue网上商城项目/index.html","873a93ab93b8a3ffad1caf1f386a026d"],["/2022/11/11/leetcode刷题记录/index.html","1c043da4ee1e0d3210b990577f014717"],["/2022/11/11/使用overleaf优雅地写文章/index.html","f1403d4267b1e83ae80fa31684971c8a"],["/2022/11/22/磁力链接与RSS订阅/index.html","d86a82aa69b7259f9764e50a6998f267"],["/2022/12/11/uniapp申请获取地理位置/index.html","7611805703b8a4b3a084e7323dd0804b"],["/2022/12/26/pr剪辑学习/index.html","ed3ecabd054fd4420bde9cb04c23ef47"],["/2022/12/27/css中的flex和grid布局/index.html","e082bdf03579784f453ab33f9688b8a2"],["/2022/12/28/Flutter学习/index.html","ba7b97841ad596caf8b76963f3dcb878"],["/2023/01/01/美化github首页/index.html","2348ea3216a3066158e36d8315d60139"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","1e077aa82e50756357b3648b70ce1014"],["/2023/01/04/构建微信快捷发布文章工具/index.html","b219b0ba2b6ef7167cf8bee78b339a27"],["/2023/01/14/dart学习/index.html","9a12fab8016137eb0d6fe622b16c5ed8"],["/2023/01/23/闲置服务器BT下载影视/index.html","39971a280a7242648c0ce62851c969ce"],["/2023/02/07/TotalCommander使用和学习/index.html","62e37c99044914e302aadf75a0f78018"],["/2023/02/13/docker学习/index.html","2701f4d204f58eafdbd7ca4c1b04f063"],["/2023/02/17/DLHLP学习/index.html","ddef4fb6a002c55afcae01c1c7a071dd"],["/2023/02/18/学习purecss构建自己的css框架/index.html","2d4c17405756191fb1d152a8c64b44a3"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","d690a0b1320bd15b326b376b1c6a5658"],["/2023/03/05/STL学习/index.html","24d3327f024bf30ade9c4837d129ec1c"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","71d963a4d80e1f508164587ce161491f"],["/2023/03/23/实战写浏览器插件/index.html","2425ef89e5c66b8db4704ab301f7cb92"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","4981491b70f2b4a37105819870618086"],["/2023/04/02/EndNote基本使用/index.html","81d825dc4f988b252db7c4f76580b587"],["/2023/04/04/mne处理脑电数据基本使用/index.html","c3fb7b3b5e769cc7c50497a74a57e9d1"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","e60290d177929ea9410348dec293204d"],["/2023/05/02/python中的logging模块/index.html","b93681d9cfa06040653d5299df65d456"],["/2023/05/07/python的特别方法与装饰器/index.html","86804d3145cd865af8615430b7665caa"],["/2023/05/20/Wox插件编写/index.html","ce2f955564aa0c55618879aeb396423d"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","9c538e15ca05976a4b916494d628d38a"],["/2023/06/03/深入Clash配置文件/index.html","78b101fc8d2b1b412af53dfb7cf62bb2"],["/2023/06/10/node的包管理工具介绍/index.html","5659bcebad4b9b59ec3fb7091f187181"],["/2023/06/12/AI写作工作流/index.html","b949d447792cf941505b901708b0f53d"],["/2023/07/07/Astro-Vercel部署博客/index.html","484a1a1b6d224d24be408ca3e38bc48d"],["/about/index.html","7ea8853acb6fec4045d34fe2c6902154"],["/archives/2021/04/index.html","b18a4cb0bfd97ba0d7af78bc18cbfd55"],["/archives/2021/05/index.html","1dfea23d84c90380e0ff7d52cc5aef27"],["/archives/2021/06/index.html","67bb22a4e115e4c6348c63002242302b"],["/archives/2021/07/index.html","514c72df5d6f1c052eb47159afc7d76f"],["/archives/2021/08/index.html","6da2aa54a85c1ebbe866b3a6e9af425c"],["/archives/2021/09/index.html","a8cec05894487bd1437c82fb2e6801a9"],["/archives/2021/10/index.html","3420b955254ab9c15ef1e8cd8cc04f72"],["/archives/2021/11/index.html","e7b7d4c5d1c66c672c15c86a2aa373d3"],["/archives/2021/12/index.html","af13e084a63472bc7bda6275f38088c8"],["/archives/2021/index.html","08192eedba4b77710df9deded797e170"],["/archives/2022/01/index.html","5292a036917de3a3d9cf27292f3f5181"],["/archives/2022/02/index.html","ae1546a5884a203abf5253facc03ade4"],["/archives/2022/03/index.html","e3bfed5035e01ea8ed662d49aa94abcd"],["/archives/2022/04/index.html","3737d0a6b3452bcea1a08037363bf467"],["/archives/2022/05/index.html","dfdca69853dc4cb4be2c2562aae223ef"],["/archives/2022/06/index.html","e544ba15456749f3956be12c8c34af31"],["/archives/2022/07/index.html","4d2427105069c2804495bd0178d64c0f"],["/archives/2022/09/index.html","c777f1804f51260f646811ff476e70d8"],["/archives/2022/10/index.html","f084e4731a6a99dc93ca647b995624c7"],["/archives/2022/11/index.html","d6c8ff84985e863319ea6ff83ecb08be"],["/archives/2022/12/index.html","94a31d3992b02999a4f410959fb16605"],["/archives/2022/index.html","08f5972e58ded778835207528eb584de"],["/archives/2023/01/index.html","7108dad09287cb913fd3cbde554f03df"],["/archives/2023/02/index.html","b3659938d76c68f70cf27ba9998c5fa4"],["/archives/2023/03/index.html","935121abe31105e42c09d415ba8114d5"],["/archives/2023/04/index.html","64f07c01943a743721c3bd5d924d586e"],["/archives/2023/05/index.html","2b7eb60349f3dd0939ce1d1c6964ac1e"],["/archives/2023/06/index.html","7d1046fe0859f08b752c12a6a14237f8"],["/archives/2023/07/index.html","d20b59d241f095645fa89db149924520"],["/archives/2023/index.html","0854444c7eead7d1d8911cb5e1b50e86"],["/archives/index.html","053e65ea69546c632536ffbddb4a29ec"],["/archives/page/2/index.html","8040e72df0bc898962ff0ea291ebb2e9"],["/archives/page/3/index.html","48ec202766e3f2e4306c5b50f34b6344"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","b072bd43a629e8b48a5ab05195d1cd36"],["/categories/Linux-study/index.html","0b1b061d730c23190825b5e68398b571"],["/categories/ML/index.html","776ab2c591606c07c3f57060dce2f9a8"],["/categories/Nginx/index.html","2525b16c8acdfe03c369174c28dc1f5e"],["/categories/Spring/index.html","18fb7b87c594bf20bd31c572f88156bb"],["/categories/course/index.html","ebe72f61542cd44c2e2299dbb0ee65ae"],["/categories/django/index.html","c6e72522977685fa72855b73e3f01f1a"],["/categories/fun/index.html","14fece83d3f96ecc87b1762d6420ea24"],["/categories/gcc/gdb/index.html","d08cee69caf7c299af97500f02492c09"],["/categories/gcc/index.html","929c3328e26bfa7cba315f9d03c6c3bb"],["/categories/index.html","ce94f50b25f20c1323fbeaa2147dd4c8"],["/categories/java/index.html","e0a0090c9e61ac5164e5be4a7a1ad0e0"],["/categories/latex/index.html","9f2c102b71c61bf31ec01fe23c65673b"],["/categories/python/index.html","a966c4a241441474c62d4e1d8a83ad2d"],["/categories/study/index.html","e5dada7e096377fb153c9b7bd430e6d2"],["/categories/vue/index.html","438f05c95c25e74474d1380fbc93e349"],["/categories/误区/index.html","6a90a1c2f42b9840f9c1b107d504d74e"],["/commonweal/index.html","6db12db518b25d2eed14f7183e3ab74d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","08c1942a3ab6866bad6c65d24e046d68"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","190ec44c3bf8d2e3fb9b6630cb453bca"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","43f08b82e870d0ecd5fa904a8305dcb4"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","b2dee473cbd27b15db5497642a14a028"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","61b394513cbf104b9db6a766db6b3971"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","dad7f9e443ee187031f4a98f2bd0d89c"],["/page/11/index.html","f5900ddcb6ad620fa36a74d396e3e075"],["/page/12/index.html","5caeaeadf619b3c29486978c9f797424"],["/page/13/index.html","8de8d1d526d649cdd7f9d63813e7d01b"],["/page/14/index.html","af874958f7d9628bc8a47205b692d801"],["/page/15/index.html","ade83083e45782652917d8ce60ed10ad"],["/page/16/index.html","ba41ce25b7871abc035086a10c382857"],["/page/17/index.html","2daad0920b5363b657ded8d0ed661e3e"],["/page/18/index.html","f580248291b9ace8cc63fa89b1bb536b"],["/page/19/index.html","733770de89fd553d528b14a58e8703ba"],["/page/2/index.html","f8272c2ba3371562a39a1442439ab466"],["/page/20/index.html","cc6381461494f009993223da5565cc62"],["/page/21/index.html","dc2b9ed559b9ae1a334368ece129e10a"],["/page/22/index.html","457e3dc10710b3ca4e974b1e8ff5fcde"],["/page/23/index.html","4d9e5ee638e93111b588d258af7af922"],["/page/24/index.html","abdc5322e51fc7d1833692c6246eb594"],["/page/3/index.html","7f5866bea52735b86be20c12d4f6c78d"],["/page/4/index.html","565d4e469178c6af51586fa7202fc7cc"],["/page/5/index.html","9c4882d7ec76f19684b0e7c2b70d44d1"],["/page/6/index.html","861ae1a3730ba5fea45554fb33c151a5"],["/page/7/index.html","09d6b9ad2585aa59c28092685dade769"],["/page/8/index.html","67b377be9758e304939c873e93bfbd34"],["/page/9/index.html","103c0a0234cdbc2bae71fb0eda00c981"],["/resume/index.html","ba90f12d6ef912a9aa3e2b153b44ea55"],["/schedule/index.html","e82403d327e9d43e151483409dc3a760"],["/sitemap/index.html","e7e409ab86cd49d52b4103e13a7f2f68"],["/sw-register.js","4edd3ede05d2c5e42bbfc86f4b458124"],["/tags/AI/index.html","72cd241f456fdfd88a7650a64fbeeb2d"],["/tags/Astro/index.html","73f77182b16266a5ba3e90d15d1f0ae0"],["/tags/BT/index.html","570c23eb4b980b32507b5cd387c98ed7"],["/tags/BaiduNetdisk/index.html","18e1be3ebcddb56537baccdd331f0afd"],["/tags/Bootstrap5/index.html","0f9a9c217bd376bd097f591156c7bbe6"],["/tags/CSS3/index.html","0e357f64bdcfffbe1f67036f952d1261"],["/tags/Centos/index.html","7b8a1aab4461873a9ba125c0d6d35037"],["/tags/EEG/index.html","845de43b2dc7450572e94f7038b87f96"],["/tags/Electron/index.html","135b946dad5f561d493c982d5849b55f"],["/tags/ElementUI/index.html","7921ead6dc43835129aa87fb4833bfeb"],["/tags/Flutter/index.html","e4945e58da67d3a8970beb28b1bed2bd"],["/tags/GAN/index.html","e8e4cd8e227c7017e73e0eb64eee973b"],["/tags/GUI/index.html","d11112339dd5cf25c0443b80ae41d776"],["/tags/Git/index.html","0a4cc11b77ee7fda2f11b0c0041592e4"],["/tags/JavaScript/index.html","af46fac44d5f822e87acab3db171427a"],["/tags/Keras/index.html","92ce651efcb7fe8ecc4c9dfcf3c604ca"],["/tags/Linux/index.html","81f9c74e072a5ebfdc531fc195f3aa4f"],["/tags/ML/index.html","4ddc8d803fd2e72ac6272d7e59346adf"],["/tags/MNE/index.html","62587594007ca6606530446c57e228bd"],["/tags/NLP学习/index.html","5eb62ad6328c9f3628ce6acda1ab7401"],["/tags/Nginx/index.html","6f141633557d2b923814e70a7776ce8d"],["/tags/OSS存储/index.html","2edc7f95d313420c432054894c9f708d"],["/tags/Obsidian/index.html","893ffc6e6a52ca5e2b204ea03992b5fa"],["/tags/Qt/index.html","be7a63d8f7826536565539c5e3ad22e7"],["/tags/RSS/index.html","bd554aa4c120e68a324848bb7553df8a"],["/tags/SSL/index.html","5e1c37ce6423a33a9507ba1042a94d27"],["/tags/Scrapy/index.html","037eef1450ea7f36e23da9f3c63ea501"],["/tags/Speech/index.html","cd5be8293f7ca0d94739feb21e142a7e"],["/tags/TotalCommander/index.html","9c98f8eebbb2835e9bb080844cd74583"],["/tags/VPN/index.html","4a717fd11df270dc30e401fef06404ea"],["/tags/Vercel/index.html","22f908ca2bc777891835006f31cd3e29"],["/tags/Web/index.html","aa0a1794f6da5a20afbc680ec7f68f3b"],["/tags/algorithm/index.html","954879b995d1e95e0cabecb63cf8ed0b"],["/tags/bison/index.html","75c90c9f596c2ad4bd29b75e8fd360c5"],["/tags/bomb-lab/index.html","54c5343f7a4d248c720e00aa37e8d861"],["/tags/c/index.html","84bcf3883327fb78a4c91b2e722d9fb1"],["/tags/cheerio/index.html","4d460ba4dabb897bf7f193b8f2b1604a"],["/tags/codewars/index.html","e77dba9062b5da558e842b22b06a3780"],["/tags/compile/index.html","15d25bc108d25542dccb5b2c0a6599cb"],["/tags/compiler/index.html","b39074b2d2b7e3c581d0ab89ed808417"],["/tags/cors/index.html","a913bca7bdd2223cee58d0e7e04ab814"],["/tags/course/index.html","bfec460696eed05cfc8973632a1ea02e"],["/tags/cpp/index.html","1aadb448436dc74b8aed084425c02df0"],["/tags/crypto/index.html","840be1a6c177652bba3a1b185883f865"],["/tags/csapp/index.html","2288245afbaa101f4b5d526fcf8efa32"],["/tags/csp/index.html","1bf567d1e8b0b4c835178fa7c0f16906"],["/tags/css/index.html","aee54f355d556d5604565f542b7cbb02"],["/tags/dart/index.html","f5ccd950f2d47b446f8706eb37c34786"],["/tags/data-structure/index.html","99208152488b50891bcd4722abfa3b6e"],["/tags/database/index.html","5b7264afd92aa01ea6b3a416be9d4a9b"],["/tags/deep-learning/index.html","62c23f8b32b6bff1dbb619104e2dcad2"],["/tags/django/index.html","07fd9b3d897772808cec9ba81b4f55eb"],["/tags/docker/index.html","6faca969d473b027cb21ac932099fabe"],["/tags/dwm/index.html","902631d2714539f4117ef2920ab6aead"],["/tags/exercise/index.html","a0736179bee3c1389f09fdba87e82b8e"],["/tags/filebrowser/index.html","c984189fcf80162aff602fd8bb9a616d"],["/tags/flask/index.html","be9aec6c0f19b409f965dcc541153d68"],["/tags/flex/index.html","5c9746419aab96206eff83aa31af90aa"],["/tags/front/index.html","43b813631691c04f692b821665465e70"],["/tags/gcc/index.html","af9f38e69ae827efe1d21363d40c6e24"],["/tags/gdb/index.html","da2019af150a48fc157d97927bac0418"],["/tags/github-profile/index.html","862d1215aa9c0acdfb80f635f851b1be"],["/tags/github/index.html","bad485ea20e9341db80b175fbb4a4456"],["/tags/graphviz/index.html","dc24d3a9efa4a9035ee26963e87bd1c8"],["/tags/grid/index.html","f99afb75e610f33c4b7c7819b9705d71"],["/tags/html/index.html","cd5325b7562351f2a04506bf45eb400f"],["/tags/i3wm/index.html","e69f554b5c8735783588fa3529bcaf66"],["/tags/index.html","7862c7480572a12ce77b95a085f3ebb5"],["/tags/issue/index.html","d33283565c37daeb1e704f3d66575c2f"],["/tags/jQuery/index.html","429ee52cf46eff60d1acf3f4a5b5e8df"],["/tags/java/index.html","85ab3f1e815498a0d7ff4fb204c1b9a7"],["/tags/js/index.html","27f8dc840d99198a049c1cb6262678e2"],["/tags/latex/index.html","0415cf7c4c70b732d070e624ddcdfbb0"],["/tags/leetcode/index.html","19b154fffd8d1face13c088e806e729e"],["/tags/lex/index.html","2619ce8f5fdad065a3e793c082e480e7"],["/tags/logging/index.html","f063fb7ea3f692ca5fe6a3a85266e244"],["/tags/material/index.html","d69d77b233d330e6e5e63505620cc4e0"],["/tags/music-player/index.html","3f4595f9fdbcb964884a90e47addfd5d"],["/tags/node/index.html","46a35bac30f7327974a0a70c3e6b7b45"],["/tags/nodejs/index.html","44705027233877a46d56df37ddf7463f"],["/tags/noj/index.html","190608b9a9b6be6a9841b0b7689c74b9"],["/tags/npm/index.html","b310dc1884708b85030187397ca91ac1"],["/tags/opencv/index.html","b479623102909f73e763e975045f3308"],["/tags/overleaf/index.html","a924ad3bdad843bbfe7c598e974301b5"],["/tags/pandas/index.html","4592105dbaec23bbfc100911f59488c8"],["/tags/paper/index.html","2dab2304ad2eb1ac9c4e6a28658b41cd"],["/tags/premiere-pro/index.html","9bc8fedd8d35b7e50208b27c82b6a486"],["/tags/proxy/index.html","13dc426ad0bb224c3696573087378bc9"],["/tags/pure-css/index.html","42ddf1ad094ff6160e3a333464b0eab2"],["/tags/pygame/index.html","5e1b487a20937ca220accf5834326704"],["/tags/python/index.html","5ae1e7b9ebd8d797131a421ffe491c8d"],["/tags/python/page/2/index.html","8ce1958c3b1db442444e9e6e17746f1c"],["/tags/pytorch/index.html","7f9acb5696f40e9d063a7e6dad8e92f9"],["/tags/reading/index.html","4525e0ccdcb378ecbf9a55360b6dcaa5"],["/tags/request/index.html","af2f5765ea67f1be417e03cad6b25574"],["/tags/requests/index.html","2136237ba2b0d4750d641eb3b13f61a1"],["/tags/security/index.html","c791b3ec007cf671e2216a552f6ea330"],["/tags/shell/index.html","425b52dfab6c00795deacf7fff0740e4"],["/tags/sign-in/index.html","4e999a59266ad3d828be296c6187c655"],["/tags/socket/index.html","86afaf3e0ef2cd32de93695ec71e2fc8"],["/tags/spider/index.html","8cee28b8a14ddcd386683226f74a5a57"],["/tags/splash/index.html","48393f6047a14ea718f6c0f8af4db54c"],["/tags/stl/index.html","06613d8d57f387ca951a924f8e2e80f9"],["/tags/sumatra/index.html","46a6b04a175cbb25aeaaf1f73d8b2a5c"],["/tags/superagent/index.html","789ceb6aead29bb376d8ecac09270278"],["/tags/tensorlow/index.html","0288325632e87dde60e728ee1f2d0588"],["/tags/tex/index.html","f3e0cc00122109ca4654babda3610419"],["/tags/thesis/index.html","f84133b8989ec1807486ebf441658689"],["/tags/threading/index.html","35ebfc7227fd073752ee88acb5a0ef1e"],["/tags/tkinter/index.html","0468a5b3fbfe1581c8cd93c4161c65cd"],["/tags/torrent/index.html","801d264678d6d3d070bea57ceac0065e"],["/tags/tutorial/index.html","0c7f6fcb19aef8504544fd2814982d64"],["/tags/typora/index.html","6c3191701d7e054dbbd049ccc2386399"],["/tags/uniapp/index.html","62c7472d247bb63fb05611ada4e1033c"],["/tags/vite/index.html","2f2b10f0dea072c539d06ff88cbed72e"],["/tags/vscode/index.html","3e8b449f8f25d6e90dfcb44cffb489f9"],["/tags/vue-element-template/index.html","b438355acb578582ebae431f466baa7f"],["/tags/vue/index.html","3869ad1bdab2746fc6f7b63f3315c9ec"],["/tags/vue2/index.html","6c392e27121c2453bda2c5134c3f83f9"],["/tags/vue3-x/index.html","76b550f02349a1593bc30721daba43cc"],["/tags/wechat/index.html","702ca4153e494e3d35eb5418333b099c"],["/tags/wm/index.html","bcea3216c367407aa681a5ff248b1a31"],["/tags/wordpress/index.html","51a75ca9c79ba60198d0336b8f845e61"],["/tags/workflow/index.html","e0168ceebf9066fe2f5b1260bc532771"],["/tags/xpath/index.html","df3d332e12f8489a020d5cabe89dd875"],["/tags/yacc/index.html","a7986b286cfc4ed086d67d9f3d7aaa4a"],["/tags/yarn/index.html","598883120301dbecac6ced640762e52e"],["/tags/zsh/index.html","008a687ec6087a0c69e2d44ee7c3cc79"],["/tags/七牛云/index.html","b8bac9f3a4b3dd3fa2eb4e666e2cc61f"],["/tags/函数/index.html","4c1f3da7b750400aec456dedb64d05e9"],["/tags/剪辑/index.html","cbf9bf7a04a6ca91fa2e6b29dccff11f"],["/tags/存储/index.html","a83838a3af0f3b4a2f96ccbbe1e7c885"],["/tags/实战/index.html","b1dd5065b2dd8d0ef9fdaf770485db34"],["/tags/工具使用/index.html","b5126e0d6a52f1787b24f9246213d028"],["/tags/建站/index.html","8ffa5c0807a6a40d998f4069189324d3"],["/tags/微信小程序/index.html","6edde4b7b0eac2257811f21f2a099464"],["/tags/指针/index.html","76049224b5a3fbf528732e90af1c7983"],["/tags/插件/index.html","264de440e784e37a4308106f73a774a6"],["/tags/效率提升/index.html","2902ba1911d6a8a3b2389c630e5d164c"],["/tags/日志/index.html","2a2b8b2b8d9ceb4025f8eca9330d226a"],["/tags/汇编/index.html","7903a465a11f9a94af0030a7fc05e6ab"],["/tags/油猴脚本/index.html","b1bfdd4a14a92788b651c4b817286de7"],["/tags/浏览器/index.html","3d7f213613252828e937523b36bc5846"],["/tags/爬虫/index.html","e448993def9e905c28da0d65d800b53f"],["/tags/算法/index.html","9856c7cf3d3b4a4db730cc8e63d65add"],["/tags/编译原理/index.html","9416d69652952d08bc382efc30dadb30"],["/tags/获取地理位置/index.html","666bdee55ac7c5c27c2ade97dd4a9773"]];
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
