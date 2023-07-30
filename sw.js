/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","3276c3b08ffd19b30153831cac472872"],["/2021/04/20/稀疏矩阵/index.html","8ade330f1193401bf79633d124878d31"],["/2021/04/23/广义表简介/index.html","100ee14832583c4b1f41cf4f23728cf7"],["/2021/04/29/关于指针和函数/index.html","61ad1a043ca19e0bc3485a4ba2966923"],["/2021/05/10/哈夫曼编-译码/index.html","c1c44b7829badc4fe76caeefba23ac8f"],["/2021/05/17/数据结构noj_2/index.html","7825946d8aa38dc62b89c651b30e675e"],["/2021/05/30/数据结构试验/index.html","b1e11d88ab535e59b4b56cfb07681453"],["/2021/06/12/数据结构noj-3/index.html","74ce370818f3ad5a3cf8be0cfc8d7892"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","15654953ee85059e1cfef688cf0028f7"],["/2021/07/08/课程资源分享/index.html","6f06a344a6470764e5ec86978153be54"],["/2021/07/20/Scrapy-下载图片-文件/index.html","1a41a975acee5fa4d6e7537f39500e65"],["/2021/07/21/Scrapy-动态网页爬取/index.html","608e8d817b649038c6f863d8c7e9ebf1"],["/2021/07/21/疫情打卡/index.html","8af059671250dd94913d83379aa2ad7d"],["/2021/07/29/Scrapy代理设置/index.html","97bfc2d788c5b6f92bcf6865b143127c"],["/2021/07/29/数据库认识/index.html","943b1e54e44cfe273c0790471a9e6719"],["/2021/07/31/Python多线程学习/index.html","ca1a93b8849735672e649f25205c8f3f"],["/2021/07/31/tkinter-requests练习/index.html","5f488944728dd535abde09019dc31a9b"],["/2021/08/10/Git学习/index.html","5a39727fe5db2913f98dce4169e30bef"],["/2021/08/15/pygame实践-1/index.html","31849637539a75030b66bb96a1e83a4c"],["/2021/09/06/微信小程序开发/index.html","15bd57b1ba6ad72f4728d9cf2a3f721b"],["/2021/09/21/命令集-1/index.html","a18f499625a9bf64e95920f4259c2c8a"],["/2021/09/21/命令集-2/index.html","fdc7d8a88bc224d0df43a4019b0854eb"],["/2021/09/21/命令集-3/index.html","63e29860e9fe0b964fa447d9386b1743"],["/2021/09/21/命令集-4/index.html","94444c3f5262af829479b94466b8a7eb"],["/2021/10/03/socket学习/index.html","21c0cdd063508081ccb0be67faabe9a2"],["/2021/10/10/dwm入门/index.html","f80a92b9339f3ce0fe33e377f98cd0ee"],["/2021/10/10/安装ohmyzsh并配置/index.html","aaf19e97f564326467bf6afc54b7f631"],["/2021/10/20/css学习/index.html","de9298898916dba3906597143ef1246e"],["/2021/10/20/wm入坑/index.html","a7b088b0b9a5aebeceda54e7718a986f"],["/2021/11/03/微信小程序学习/index.html","d7233790b47b8adc5f19285bcff3a3b1"],["/2021/11/04/css揭秘/index.html","3823755beba979e71648e185015a67f3"],["/2021/11/05/css-练习/index.html","9796e97074eab066dd715072817300f2"],["/2021/11/21/命令集-5/index.html","28b1661224e3947f2cdc96f4e8d5ea21"],["/2021/11/21/命令集-6/index.html","1e2a65a4d06c034ad24212f24f6259cc"],["/2021/11/21/命令集-7/index.html","8e63df55611b0f67f782140825c7449a"],["/2021/12/01/搭建wordpress/index.html","fe89decef3429b32c3e1f65b4df17a5b"],["/2021/12/08/python操作百度网盘/index.html","e1cabf50f02532174e75033bb9d57245"],["/2021/12/14/js爬虫/index.html","00fb53519d9ab407a1cea89c0c5c4452"],["/2021/12/25/为网站申请ssl证书/index.html","93839dff53c4ef487aedfe07bee1fe28"],["/2021/12/29/使用七牛云为网站提供服务/index.html","1a70dfdf49fe334a122f743fc871f4b9"],["/2021/12/30/jQurey继续学习/index.html","086266f1b33420a04d1c3bf56c308225"],["/2021/12/30/jquery学习/index.html","fc07b7bd69b9804085b29896e435a00a"],["/2021/12/31/vue学习/index.html","d0ded1b2add9c45b4201f1aa51dc43c3"],["/2022/01/02/疫情自动打卡/index.html","358e81f29ecb6e696b7b0b173630fe48"],["/2022/01/03/javaweb初体验/index.html","7c715f94b58c57bce5ddf0076b0086c0"],["/2022/01/04/codewars练习/index.html","023b9d88d3eeb0faa0f1e95355b3b725"],["/2022/01/05/Spring学习/index.html","097643a827ea0c0cf61a4d911a613c62"],["/2022/01/05/vue实战/index.html","4cd36ded8ef632a515ebe4308c43d36d"],["/2022/01/08/gdb-gcc学习/index.html","394c32f7b049f9eb743965ed6fa3db92"],["/2022/01/11/python-opencv学习/index.html","08017a9a41588a3c2b680ee263ccda13"],["/2022/01/12/汇编实战/index.html","5991430ec4c0b43bafa00698f66351d4"],["/2022/01/17/pandas学习/index.html","20861d6c83626e3217ad38d0bcf206ff"],["/2022/01/19/可视化图的工具/index.html","ebaa836016078f1143757093989b6741"],["/2022/01/19/机器学习入门/index.html","d622307df43ff1f32d0137cdb694f276"],["/2022/01/20/cousera-ML学习/index.html","8b5e4a149585ce12c31496356bf96337"],["/2022/01/30/typora解绑后出现问题/index.html","0787f447cbe069f205d63597af5b4089"],["/2022/02/03/NLP学习/index.html","9912e60ab47b273bdd5fe0eb30c5cc08"],["/2022/02/04/Web漏洞学习/index.html","f3f985a8d393163db2a61d73a8542e9e"],["/2022/02/04/pyqt学习/index.html","4460d0db7f2e60bdb43e1cd11638d0f7"],["/2022/02/04/python爬虫/index.html","df644773912199af1fb32618369f15d3"],["/2022/02/18/Electron学习/index.html","169894068fb10ed3ffbccd878cb189c7"],["/2022/02/22/疫情填报字段解析/index.html","417e0699835471846344e55a4186f13b"],["/2022/02/24/Bomb-lab实验/index.html","e2c43c183ee6364d20029af5d58048bc"],["/2022/03/05/nginx学习/index.html","ced52fe3101bde21c8c62983b3f7455d"],["/2022/03/09/汇编原理课程学习/index.html","e4862c6d0faf20d49ead263503759395"],["/2022/03/11/Keras学习/index.html","046757059f8ccfab9a2df6fcb399cd90"],["/2022/04/01/graphviz学习/index.html","24b565bcb78d95827e0f7916ac7f0862"],["/2022/04/07/django学习/index.html","10a881c453f57bb480f09816edd8eaf8"],["/2022/04/11/密码破解学习/index.html","ce2a1def655b72357e65d85e33db86d5"],["/2022/04/12/flex-bison学习/index.html","18c3b0870715e1fe5b52236294c43826"],["/2022/04/15/pytorch学习/index.html","b3b7de2825719645ea27ff8b1f49e59d"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","10b55d177f3c6f4e1045ef785e99226b"],["/2022/04/23/写一个音乐播放器/index.html","55089bb44d90aa430d18155df7f4a70e"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","6f362008251f3443942650adc54487ec"],["/2022/04/30/GAN学习/index.html","ddc902bee1990390c9142cd685390a3c"],["/2022/05/02/html精学/index.html","2ba4bd97b1ad16411703a18ca63e9d08"],["/2022/05/06/write-a-compiler-by-yourself/index.html","13fe00d5fed231e8d850a69f5f7effc6"],["/2022/05/30/acwj-01/index.html","b33cf6e8064cd02eb88620e1c3900954"],["/2022/06/14/animeGAN/index.html","243baa8b495edc6edf889d8d36590b46"],["/2022/07/09/c-与算法学习/index.html","7945f1863f2a09df0e512b0a5d9f7160"],["/2022/09/19/flask学习/index.html","e69a70aeb4f72b01c2eeb07a9e434feb"],["/2022/09/22/cs224w学习/index.html","e570a65c43b8e522fbeaf448792465d7"],["/2022/09/28/记录一次wp重装/index.html","fd20dd7372a74f12f9c14867a2ee0212"],["/2022/10/01/Obsidian学习/index.html","758affc444e028e8d34fc920a829a327"],["/2022/10/08/vue-element-template实战/index.html","dfb4c43c6b7d40f3a10d54f5c0fc5b1e"],["/2022/10/25/vue网上商城项目/index.html","9675c175382ecb9ad7692728d944e677"],["/2022/11/11/leetcode刷题记录/index.html","80cc360a32b33e3a2760803d4ab985ab"],["/2022/11/11/使用overleaf优雅地写文章/index.html","21d1ad2861fba57ecca8c2821cb87318"],["/2022/11/22/磁力链接与RSS订阅/index.html","a63c664a7ef700b020efafc2054e7a56"],["/2022/12/11/uniapp申请获取地理位置/index.html","8e80851d344e85effc48fd79b1cc5c48"],["/2022/12/26/pr剪辑学习/index.html","3be8df11da10e675945ea15fac4b4ccd"],["/2022/12/27/css中的flex和grid布局/index.html","c1a0a0a220566b3e0d54bcf80c884d29"],["/2022/12/28/Flutter学习/index.html","2b0fa87413d8c780a47e0931d3394ba2"],["/2023/01/01/美化github首页/index.html","ccc9710a855856120b85442ee4059a11"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","076cba20651a2c1f2ca45c89fbb6c608"],["/2023/01/04/构建微信快捷发布文章工具/index.html","57f90eb0d1411cc10f5e2f7d258fd809"],["/2023/01/14/dart学习/index.html","0a6088c0e386adac307c92c6e6d41a81"],["/2023/01/23/闲置服务器BT下载影视/index.html","e239619913e8e0937a3a766bfb767dd4"],["/2023/02/07/TotalCommander使用和学习/index.html","fcf50de72b1ce65f12ea1eac638e9754"],["/2023/02/13/docker学习/index.html","f44c1782f9f0bf14d963a6b30acf78e4"],["/2023/02/17/DLHLP学习/index.html","b72a555c720bdd49b195b8cae0625ff8"],["/2023/02/18/学习purecss构建自己的css框架/index.html","6d379a9d8f10d285ac9b0c3240bf1ab0"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","c6eee89a69ad6212ec0727a74deb7fe2"],["/2023/03/05/STL学习/index.html","860e65d4a21b657060b9779f0e145d10"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","d877850f45bffe81363ad34395567a96"],["/2023/03/23/实战写浏览器插件/index.html","50436f5272a12a6e95508e1ac36636bc"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","cec1900139b74f1f03a05c6f73ee37d5"],["/2023/04/02/EndNote基本使用/index.html","1dccdbdad0e7b6eb3d8160bff6fc2350"],["/2023/04/04/mne处理脑电数据基本使用/index.html","73f28552bb0e2f18d8ba2063037573ee"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","e21a1b2e977f06da1f4277fdb9d98199"],["/2023/05/02/python中的logging模块/index.html","b06b72fa238c45ec2662cbdf57125659"],["/2023/05/07/python的特别方法与装饰器/index.html","190bb1dd0617f432f71645f5b12618c2"],["/2023/05/20/Wox插件编写/index.html","1dc07996d88aac8b5076fa8be5d7ad09"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","a1ba1d6f0eb2d6e028e1bba96fc7cc40"],["/2023/06/03/深入Clash配置文件/index.html","3ec89ae61c70162bcd8671e54dbf7d90"],["/2023/06/10/node的包管理工具介绍/index.html","22f18ccc2133cfe12553bed18318adc7"],["/2023/06/12/AI写作工作流/index.html","22fd625c8b2f0fbf34aaef2c4c77d58b"],["/2023/07/07/Astro-Vercel部署博客/index.html","8a91fe295be73da477014721a204f21d"],["/2023/07/09/青龙面板部署项目/index.html","34331d0437a6952ea8d5f2b4115bd7e6"],["/2023/07/29/CSS-Modules介绍/index.html","92f71b9ede3e77b58c0958af521fc84c"],["/about/index.html","0fc5317bddac707f6b7945b4ca1bbbf4"],["/archives/2021/04/index.html","7fcb59a13210e902976227e36196df62"],["/archives/2021/05/index.html","f8b03eac8aab85fb9b347cb77ebe7135"],["/archives/2021/06/index.html","37f8a88ecd9079bdaedae1e0a5d70da6"],["/archives/2021/07/index.html","3be61c1a779dac9ed0499b9afc8ea902"],["/archives/2021/08/index.html","9cb359ff9e5cdce4da7a8450b149a1a4"],["/archives/2021/09/index.html","07903d118d5f9dc71feac0f567030a1a"],["/archives/2021/10/index.html","b38164ecb29a1a489eaf2039ee1326cb"],["/archives/2021/11/index.html","0bc196215ff14bf4d21affae1aa8e432"],["/archives/2021/12/index.html","c706649bfcc8edde1870362cd99ce54e"],["/archives/2021/index.html","09602f46fb5948509aa6d66f23482165"],["/archives/2022/01/index.html","935b003a2e1fe5ebf68690518672fd49"],["/archives/2022/02/index.html","060800ae8f525157a7eec83dbe28e381"],["/archives/2022/03/index.html","a8dcea1badcc6a96ee87430f41a4bfae"],["/archives/2022/04/index.html","863d7b9d17999cca37e95061efc89423"],["/archives/2022/05/index.html","89f2782e21060e29e43d249916ac45ed"],["/archives/2022/06/index.html","14d5b0aa127778a1eb88783a6d9bdd5c"],["/archives/2022/07/index.html","e1ae9c885d9cab5e30dea910220313cf"],["/archives/2022/09/index.html","932279567fa684477b1ff4a654c66038"],["/archives/2022/10/index.html","833ab0f23ad2c3d1c61e64535f7019e7"],["/archives/2022/11/index.html","33b0f9e3b4d19eaf654ef845a8c8765d"],["/archives/2022/12/index.html","e15aa8a1e2b4b48dbbd8b6fe30dd8c5f"],["/archives/2022/index.html","633bec73b0d670a154a1728b5691bfdc"],["/archives/2023/01/index.html","5b7be53123a4e95a1598b3bb67c08831"],["/archives/2023/02/index.html","a5efbfa8929532c0e99ca94f281baf74"],["/archives/2023/03/index.html","618a13e5d2281417a2bfe209ab4fee07"],["/archives/2023/04/index.html","581e3c02ed93a4d9cf3c39c4869ab24b"],["/archives/2023/05/index.html","b55f7d0fd7a1a1ad34f467d6828b8238"],["/archives/2023/06/index.html","77e18a59231ac7cf6a9b109507a41e4a"],["/archives/2023/07/index.html","fcd165187175283410c493e99a078463"],["/archives/2023/index.html","99507817afd82690b14afce006ead64e"],["/archives/index.html","2f80b79f674bbde46263b1d429aa9b44"],["/archives/page/2/index.html","550d9af25efd2159b0360e1cbb6e77dd"],["/archives/page/3/index.html","7f6a64418caf3721a7845220e1f96226"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","afc84fd52070e4d8c0f39a8d6bded315"],["/categories/Linux-study/index.html","9637c37676ed0eeb515568519ac9c6d5"],["/categories/ML/index.html","ae63aa445867936c84436d9a1e6cd707"],["/categories/Nginx/index.html","87bebc8058b59fd3de1f8ec690a8fab6"],["/categories/Spring/index.html","c5c284eec8ba58329c4cb60d3f46479f"],["/categories/course/index.html","77a3caede0b07d3475472f01d1038074"],["/categories/django/index.html","e5a45cbf8789247071b8f2157862c7f9"],["/categories/fun/index.html","4c9eff1f4d66d371584a4669eb99b508"],["/categories/gcc/gdb/index.html","b6e42fe8b53c12a1c3e2bfe98391a854"],["/categories/gcc/index.html","c8aea55a023fd8695b1349647f879578"],["/categories/index.html","02676a8fc79b2f0d25b43a287c423176"],["/categories/java/index.html","0f6e9ca66ca1e69b5e1bffe37475b9af"],["/categories/latex/index.html","e77b2bbd7e85186deaac7d31e60c2ce2"],["/categories/python/index.html","35bc34bb5f174a37bd40dfcfd4e550fe"],["/categories/study/index.html","2a85936b445e9348fbd528da0cf1f4bc"],["/categories/vue/index.html","39b202b78159c38f95c04cdc9e1efdfe"],["/categories/误区/index.html","f2c78d27ac17d07c4fe588ae3928186f"],["/commonweal/index.html","92b4bf2a6518b328748de8a14006b7d6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3f673fc7688b05effa5fefa8ad337984"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","5279e51ebee98f9d462d7b4511c4f0a3"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","3af5ded52612b43fcc3aab4b8475ce67"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","196c61029bbcfd332479002ebab7151e"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","3492240e817f5cd7839fa6e043922784"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","cdfee9d135bae5867d225c919b7440d3"],["/page/11/index.html","78697142b05c3f77aa66ec940dc3208f"],["/page/12/index.html","3c7e40d8e1baec8c7594b51ce13993a4"],["/page/13/index.html","c070bc6362aa5c50ab01578dec752fc0"],["/page/14/index.html","95f673ed43ae310c25b6b807920fa606"],["/page/15/index.html","05220872e08341793aa526879ddd5a93"],["/page/16/index.html","2d47314b10f76a59b93f4f2ec53282c3"],["/page/17/index.html","783221363bccb2418e5f4dc6a6ac2d04"],["/page/18/index.html","207721910f87216a9c24be1b0afad7a8"],["/page/19/index.html","c0817ced3a06b703cfe9b112e68e570b"],["/page/2/index.html","7fd298bb9915935f7c3c48ce193624ce"],["/page/20/index.html","00dec65be05e7e8a9946136f7690594a"],["/page/21/index.html","a95bcf57c275a0f28404f0646b76075f"],["/page/22/index.html","dea864205518254046c1f6475e6c0c3e"],["/page/23/index.html","00d40e1ec8b9c6dd9b039a0ad832e6b9"],["/page/24/index.html","8b787d6da45f667909dcd9f0137d29f0"],["/page/3/index.html","217f24a8743fb9066521ef0b4cbe5175"],["/page/4/index.html","f8d8e28913618ea6774139f96b601d65"],["/page/5/index.html","3c5f96130b22ade2f69825b0a7a526d5"],["/page/6/index.html","e2b61dea080557aa231aa233b65a18de"],["/page/7/index.html","f04c0fe064938a2517f0968ea7f76940"],["/page/8/index.html","10fad2ac8812abf38f9292238ceee607"],["/page/9/index.html","e6c86fe00289efca94066d737736ce4a"],["/resume/index.html","14fdae0a4118629a828386f390e8afbc"],["/schedule/index.html","5c16b45db8c9d44bb215c2849e9ae699"],["/sitemap/index.html","e6aa9d46c0eeb0fe47f9a83cb61c7d65"],["/sw-register.js","761cad2e5bff4725aa3e70d8e2ce3a88"],["/tags/AI/index.html","f39d543666a2584d41eae442009c93cd"],["/tags/Astro/index.html","56bc1fc0f6442ddb1b7b11aa0f7de151"],["/tags/BT/index.html","921ceb84810e5b43232e8de340073e39"],["/tags/BaiduNetdisk/index.html","79935645f57d76f457b5d39e3ec78a28"],["/tags/Bootstrap5/index.html","213b4734dcb27eabf02f16867ec67b53"],["/tags/CSS3/index.html","3dbe3b742249267468e32790c27afd30"],["/tags/Centos/index.html","2cea4a47a9c29babb2bfa245d2cf855d"],["/tags/EEG/index.html","e5e5c5d3826c705f60ebd3a819d4943c"],["/tags/Electron/index.html","b42fb7ec0d487443c1a1358780eaf4b0"],["/tags/ElementUI/index.html","1ac41edb27d8b59574a3f36b6b2a65da"],["/tags/Flutter/index.html","4bb53be5a7a4412b4464111b37205543"],["/tags/GAN/index.html","63c3d75b71b46843d961f5358c41ade1"],["/tags/GUI/index.html","1ca916c12ed6727c200ed90842db1979"],["/tags/Git/index.html","974794c2cc61c6e2cf4b88781286c72d"],["/tags/JavaScript/index.html","cf0485605b1cb526866bb7f0302a6eb9"],["/tags/Keras/index.html","564539e28bc49ac63c7e766555312758"],["/tags/Linux/index.html","efc8e8cd341afe3c3622a8d70d9f5340"],["/tags/ML/index.html","9c2e504f537bd841f91c5e31dd00aa8f"],["/tags/MNE/index.html","e204dccc2b8c52fd86dc8aeedabba607"],["/tags/NLP学习/index.html","a44990b9af02f171d2b0beb6acaef8c7"],["/tags/Nginx/index.html","552810829330f9e74627ce1734884d48"],["/tags/OSS存储/index.html","96edeb9914c4265d459eaa7135d3c4ae"],["/tags/Obsidian/index.html","cf3d2121c29724d94369baa24d46c503"],["/tags/Qt/index.html","b1b6b2e138ae58b53c3729f3528b644d"],["/tags/RSS/index.html","7616be230b2632e539516b23ad2d7d6c"],["/tags/SSL/index.html","327f2f010717e0172b21623050c8a302"],["/tags/Scrapy/index.html","279bfa1a73f1187a904e7c0d3895f8bc"],["/tags/Speech/index.html","181f41b6205bf0ed86258d5b6fe52fb4"],["/tags/TotalCommander/index.html","9445eaa6cd32a257f184dd8c5bbae61a"],["/tags/VPN/index.html","aa733718ff1e4b6cb516cccaeef4d940"],["/tags/Vercel/index.html","950f0d201419e1c0ebbb604e51654996"],["/tags/Web/index.html","f455bd1c9ba9a7691712475fd2f20c08"],["/tags/algorithm/index.html","c2908ef963b9a7d0704d34805c8af966"],["/tags/bison/index.html","015112c4ae7f117fc8bd2d01a1efea6f"],["/tags/bomb-lab/index.html","0385edb70fbf8c544f9e96e276700c9e"],["/tags/c/index.html","7fb0e7f183fcb2d358ad63c125098130"],["/tags/cheerio/index.html","f187103d6184e333487273dc9d20fdd5"],["/tags/codewars/index.html","f4d16fa96018bf8243c760e0aa9f6cef"],["/tags/compile/index.html","1f3167be560fef63e80d820e44fc717a"],["/tags/compiler/index.html","8b3e7052ca56eb09697805669ab70987"],["/tags/cors/index.html","e90c1ccb50507d257c3c7450fe0fd7c0"],["/tags/course/index.html","c5b6329d9ba7c85d8701f36467422b42"],["/tags/cpp/index.html","1ba9071169998584e77317a98a16f315"],["/tags/crypto/index.html","2bacba72673840eada9a564ad60d3540"],["/tags/csapp/index.html","d3cb1cb14ee42ce61a7dd0f06be0f598"],["/tags/csp/index.html","e22fecddcdcda52d657520eb21979757"],["/tags/css/index.html","99663f9dd7f570e3bdf2860ef8d8c0ed"],["/tags/dart/index.html","8bd1ee55e1162319298b7366373c0570"],["/tags/data-structure/index.html","d1477b8bc8cd22b7ec1eaecc44046727"],["/tags/database/index.html","3fc2802df2069a9e4e0a133366b25db9"],["/tags/deep-learning/index.html","f59d898afb975ead4d63399ca3294b50"],["/tags/django/index.html","24663ee2028d2d566b0304eefe690434"],["/tags/docker/index.html","41e82b8e7d4f20d3bac77ef4e9559f8e"],["/tags/dwm/index.html","08f163f895a1a93fa7ce6ab636076835"],["/tags/exercise/index.html","e20bb31545dcf7f99a297be786516a15"],["/tags/filebrowser/index.html","c1f09f9b58a6dc36b1ffdf06b53db273"],["/tags/flask/index.html","e063f51b59bac15c6e0d165a066792d8"],["/tags/flex/index.html","41872fdb64cea113445294b20a56da3f"],["/tags/front/index.html","b5c1d21e77789fd248a4a092c7fef117"],["/tags/gcc/index.html","5f8555eb5058445cad65671b625e5481"],["/tags/gdb/index.html","dec552246610327c4154a0f505f97aa4"],["/tags/github-profile/index.html","dc523eea9764d18476e02a7255c82c8b"],["/tags/github/index.html","79ceb470fc78cfca76c84564cac03ff9"],["/tags/graphviz/index.html","6e4b430b5a75491eca882fbff0d36441"],["/tags/grid/index.html","b732fdf0c11b9323834e67a66e80067e"],["/tags/html/index.html","322cec492f0f008168f076384d8d1e2c"],["/tags/i3wm/index.html","59b61c1f06e7921785afe766a11c4f48"],["/tags/index.html","04d16871d498fb79ed07fb353dba8fbf"],["/tags/issue/index.html","cb40d99f0bfb787e3a6cd7cd0c21735e"],["/tags/jQuery/index.html","89a91d1e9ebecdda0c7af1e8cc2aaf3c"],["/tags/java/index.html","c92096c0130609a8b1c408ac293287c4"],["/tags/js/index.html","924efbd120d6772654687522ca871bd8"],["/tags/latex/index.html","a8ed131b1c024e3a614b4880ac4a2a1e"],["/tags/leetcode/index.html","f377e79efef9cbd997d80fa6e7b9ed71"],["/tags/lex/index.html","ac1610fbc7c6da55d5f0ad6540ae1c2e"],["/tags/logging/index.html","2f649dd77b083b3f3253ad2724427b72"],["/tags/material/index.html","4911494b976e33b84118e130aad0c361"],["/tags/music-player/index.html","c0cf256e425b1c219b1355232492ad4a"],["/tags/node/index.html","9fa90eec28f934686d4c679e05acc6b4"],["/tags/nodejs/index.html","fa87446089352b9129de5b0f229dd4d7"],["/tags/noj/index.html","80d27c409ea3ac9ec76f8b09c81cabc5"],["/tags/npm/index.html","e26561c2945aafada3819a99203bd0a4"],["/tags/opencv/index.html","6e55caec11e6066cb5e59a4869d26f88"],["/tags/overleaf/index.html","af1da0fb620f8a8345f253dcdb252a06"],["/tags/pandas/index.html","8a7a084b16e286c75951892afeb4aafb"],["/tags/paper/index.html","0d4e8f4e875d0e124bc0c34e320f5e12"],["/tags/premiere-pro/index.html","fc7dcede9280ff881b55baa74dbc517f"],["/tags/proxy/index.html","64c3074fbd4dc519dd71b80d26f7cdff"],["/tags/pure-css/index.html","eca4caa697afff45d5d6ff940d70179b"],["/tags/pygame/index.html","c2300f9d5480ba2d4226dc38f76e63da"],["/tags/python/index.html","c0c576ec342fc55bb08348be7f4fd750"],["/tags/python/page/2/index.html","c1b352a1561bc9c4ea70678481b3144e"],["/tags/pytorch/index.html","13d0101e29f772dad87a04f67e707958"],["/tags/reading/index.html","50074e3c6623ea1a44620f1e9d1d9c70"],["/tags/request/index.html","a1f790c97ea416c5a9f4755c9584dc30"],["/tags/requests/index.html","6bad1c9d0bab03d142bd81d335c213b9"],["/tags/security/index.html","53070112ad64aa8eab52104a57295db6"],["/tags/shell/index.html","f1fd7ee7de7cd6ca3c3440a27f262825"],["/tags/sign-in/index.html","e3d92b89b61261f586deafe65a6f3ace"],["/tags/socket/index.html","d609b9e04665afbeccabb0890fc28156"],["/tags/spider/index.html","19c9d9f1e008920017c475f169bdab0e"],["/tags/splash/index.html","1b3760ba7108d329c8a4775d863b0498"],["/tags/stl/index.html","26daa0fd780b4399941477839f4314f6"],["/tags/sumatra/index.html","c4004c482455ce6edbdc5ae8eec874ae"],["/tags/superagent/index.html","ab38de2563895c173cbf115a59e7eda2"],["/tags/tensorlow/index.html","cb8dc79cc253cee998340b91aad3954f"],["/tags/tex/index.html","6ad74761ef6ae354709b173ce9b79d8e"],["/tags/thesis/index.html","6a0b5605f02649f452c9f4a642f7217c"],["/tags/threading/index.html","4b26b041d9157654c5fa5217a2934c55"],["/tags/tkinter/index.html","c8f053562b4c6055004edcb71a48cc92"],["/tags/torrent/index.html","b080ff60241c727e88c8487753d9e331"],["/tags/tutorial/index.html","c0ee99fadac88e436e69f08a6c01b717"],["/tags/typora/index.html","87c084ea9dd40a45af41532e8f84e177"],["/tags/uniapp/index.html","0af37d869c6fee7920b6527a56f3db88"],["/tags/vite/index.html","a66c8f8f20f932be9ab66a953258dc04"],["/tags/vscode/index.html","1694478404fb354ecb9d5d298bddd031"],["/tags/vue-element-template/index.html","9e317e7292c690f2f08bc2d99799e212"],["/tags/vue/index.html","162148a57bd1fb8e52008e33a382bb50"],["/tags/vue2/index.html","774fb3bfdd13a47930280e63b119d546"],["/tags/vue3-x/index.html","e5ab127426239056c19f3e79905a3ecd"],["/tags/wechat/index.html","099d8c33af519bc136b2e31dda1a0d8a"],["/tags/wm/index.html","97a365e02d8e32eecbc0107bc4c28377"],["/tags/wordpress/index.html","80632fba5028cc6288d23a492c7f32c7"],["/tags/workflow/index.html","273995b6598b5fbdbba81a94d7a3aef6"],["/tags/xpath/index.html","fcfdcc3e069d02b7474c65a50f806035"],["/tags/yacc/index.html","5c7a83282bfb70b50fdf6ab26e0bd3b5"],["/tags/yarn/index.html","2faf86eb2e75e2e65f0d8725c73eba06"],["/tags/zsh/index.html","fe2c28d5a3791e01d749f63cbd031530"],["/tags/七牛云/index.html","b8cda86ce160ebe3eb0353dc705af598"],["/tags/函数/index.html","85463f6b3324281ffa89e84f80818e67"],["/tags/剪辑/index.html","ccb001285a8571cbeea8df07aa9d7f47"],["/tags/存储/index.html","68bcec127db833153903f6cd5ca5f03b"],["/tags/实战/index.html","9ecbe3e77a0593a98cb085fe7a198388"],["/tags/工具使用/index.html","d3c3c519f5d8ffc8fcd0b835a28fcff4"],["/tags/建站/index.html","355d486040b298e185a563a5193de85e"],["/tags/微信小程序/index.html","12d3747499a65968898ce0a4f1432a48"],["/tags/指针/index.html","138e6ee35d11e581695e9b0bd4d552bf"],["/tags/插件/index.html","2ae74723bcc0dd80c6b702b1bbb0f310"],["/tags/效率提升/index.html","9c51be22627db983b9cf932757a01ee2"],["/tags/日志/index.html","bb0e96fe0aa44460da6238ee3413930a"],["/tags/汇编/index.html","b456ee95eb57d83362b07a8e91c30aa2"],["/tags/油猴脚本/index.html","1829c68832c29ccc4e51b009306d92a5"],["/tags/浏览器/index.html","38862b385dddca09963566e287ed9d11"],["/tags/爬虫/index.html","5c74c389584dba86a4255f50afc707d0"],["/tags/算法/index.html","8f40fa2d75945589558970771039dc46"],["/tags/编译原理/index.html","7641169b60f3fdde96c94cd0fb85f6b3"],["/tags/获取地理位置/index.html","f8a1ae297e23bc3ad2c9ab585c21808a"]];
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
