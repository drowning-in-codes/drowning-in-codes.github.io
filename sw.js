/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a14e5f4311771935d18d455d5a878d81"],["/2021/04/20/稀疏矩阵/index.html","6314c68b61306cd87da58cc26cf72d8b"],["/2021/04/23/广义表简介/index.html","6151d170b68fa317336b32284b20da56"],["/2021/04/29/关于指针和函数/index.html","3497b5376e0fdbae6867f0ad722ca349"],["/2021/05/10/哈夫曼编-译码/index.html","8b23a3b4d3c5ea8c405c8752e6504d58"],["/2021/05/17/数据结构noj_2/index.html","18e2f6b62a6cb3c017c2426c1005cc23"],["/2021/05/30/数据结构试验/index.html","8558ab0dfca5164255e28912fa4ab0d8"],["/2021/06/12/数据结构noj-3/index.html","1a89ecacc5b5d92b443e2e7c1e7f0afb"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","1ab77ef29d3e585d1241ad5210164a1b"],["/2021/07/08/课程资源分享/index.html","6232d8ae13c09585460cca91c8f3cddb"],["/2021/07/20/Scrapy-下载图片-文件/index.html","2db1e1cf7ba024cbf956ad930e3f4ee7"],["/2021/07/21/Scrapy-动态网页爬取/index.html","e3047e35ee88215f03422e825b8937d2"],["/2021/07/21/疫情打卡/index.html","1ea405d64e57e9a8d52ab0acd0022748"],["/2021/07/29/Scrapy代理设置/index.html","2d389f075eb4c7aea39fc1c050817cae"],["/2021/07/29/数据库认识/index.html","85250f1d8a907154cd1f90b727aeae7c"],["/2021/07/31/Python多线程学习/index.html","bd8d5ff66c432770f5e16933a30840e9"],["/2021/07/31/tkinter-requests练习/index.html","c50e514bfd522c7b7ce8f9cbae6bbd84"],["/2021/08/10/Git学习/index.html","722821691d8aa0b0c9954fe3c977ba23"],["/2021/08/15/pygame实践-1/index.html","02c1feae44fd1bf7666288abdc4971e9"],["/2021/09/06/微信小程序开发/index.html","77292c3f17ef6663f2c3ca3754641290"],["/2021/09/21/命令集-1/index.html","2994997aba47957c62632287fbb496f6"],["/2021/09/21/命令集-2/index.html","e73ac7a90eb3aa5f7b732a71352a3046"],["/2021/09/21/命令集-3/index.html","15706ab45bf08595cfed6cb4fd3eee3d"],["/2021/09/21/命令集-4/index.html","e52186aea8682d2d07a1a61be85c42ba"],["/2021/10/03/socket学习/index.html","43518d296b395fd1aa67e4511c4e3ee2"],["/2021/10/10/dwm入门/index.html","9076085410f186dd13df1cd6fd791908"],["/2021/10/10/安装ohmyzsh并配置/index.html","f94e12818f1a82e0bef05c1c549600d8"],["/2021/10/20/css学习/index.html","0767b26681fe391e9f0c12730f64d56f"],["/2021/10/20/wm入坑/index.html","f4ceafe2047a3ee2da156965d091cb96"],["/2021/11/03/微信小程序学习/index.html","8de622a2c3353de0b0e666b58be6ef10"],["/2021/11/04/css揭秘/index.html","f02b48b122246790b5fa771a585bd779"],["/2021/11/05/css-练习/index.html","69387a30b1991aebb054f68ee47ba7fd"],["/2021/11/21/命令集-5/index.html","1e57d3626a4c39d93cf819c8e5dc92ee"],["/2021/11/21/命令集-6/index.html","f00d2cf89adaf7f23a41612336c28b35"],["/2021/11/21/命令集-7/index.html","f46a2a299099cf300dc5a3660fdbc387"],["/2021/12/01/搭建wordpress/index.html","9d2fb7267c179e1232715be225523cbe"],["/2021/12/08/python操作百度网盘/index.html","6dc98a2aba0205825ed5dd17686371e0"],["/2021/12/14/js爬虫/index.html","4dea68c85b5b498cffa270eaf07a0bea"],["/2021/12/25/为网站申请ssl证书/index.html","9f67c75025dea62cfa6f5c6a29fd8be6"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2e235711c4e383cf61667a50dbb35e86"],["/2021/12/30/jQurey继续学习/index.html","cacec23282cac5a53be419979f7ce8ca"],["/2021/12/30/jquery学习/index.html","2c978809abe80230270a7e553782caff"],["/2021/12/31/vue学习/index.html","1d16304369f7bb00c170b24bfbd6cc9b"],["/2022/01/02/疫情自动打卡/index.html","92ce7e979dc8565ef532436fb23610d3"],["/2022/01/03/javaweb初体验/index.html","5ab052c5fcd812ea9ccd4b586ee0130f"],["/2022/01/04/codewars练习/index.html","3d7e50caaf9da881b2a1b56da47f4e26"],["/2022/01/05/Spring学习/index.html","a91217fa8345993a345e043b791bd1f9"],["/2022/01/05/vue实战/index.html","5bf2d218411fd0241ea0511f1f6db71f"],["/2022/01/08/gdb-gcc学习/index.html","7f83a96fe7c17dfccfc97e4b89f9594e"],["/2022/01/11/python-opencv学习/index.html","c4d64dedad86b0b1618b277718d9b383"],["/2022/01/12/汇编实战/index.html","35746b06dd49bc6249d52915e971ad3d"],["/2022/01/17/pandas学习/index.html","b74ae2e19c0e526f9a290e1f15465c2d"],["/2022/01/19/可视化图的工具/index.html","e7b6c1a5186ebe5f723596fc510d110b"],["/2022/01/19/机器学习入门/index.html","1ed24027c611106a8b64bb8bc57b3133"],["/2022/01/20/cousera-ML学习/index.html","1a6c3d478a932760467fbbbedc5b51df"],["/2022/01/30/typora解绑后出现问题/index.html","8da2b3aed2f6745c929e85c43c05d9d9"],["/2022/02/03/NLP学习/index.html","82de0c21e92ebccaa5fade6c969dddf7"],["/2022/02/04/Web漏洞学习/index.html","4ac71d5c7026237f6ca9e78cfc3f653c"],["/2022/02/04/pyqt学习/index.html","5c8351209dfc0128d263130d8981bb5c"],["/2022/02/04/python爬虫/index.html","32393cfff8d1d68f5bff841d7298b1e0"],["/2022/02/18/Electron学习/index.html","87597b3b543c497316e502b953dbc422"],["/2022/02/22/疫情填报字段解析/index.html","c582fbf22c2363b4805a13af8ce333a5"],["/2022/02/24/Bomb-lab实验/index.html","cde43a37dc5f39d5d4b473693411aedd"],["/2022/03/05/nginx学习/index.html","08065663859f084ad2cbbf05ddbac724"],["/2022/03/09/汇编原理课程学习/index.html","76f9a2eb2b9fc2a23f4e94e9118d7233"],["/2022/03/11/Keras学习/index.html","9f5769af73fbbe7a33a5b18a1835f331"],["/2022/04/01/graphviz学习/index.html","7eb5afa3fd551b8c2424766971a3cf87"],["/2022/04/07/django学习/index.html","41859088050f7c99a0fcef9cd7f10c31"],["/2022/04/11/密码破解学习/index.html","5eda67ea9c5885516fa9195dfb9f8ae3"],["/2022/04/12/flex-bison学习/index.html","537f00787436f8823999c021dc94ee94"],["/2022/04/15/pytorch学习/index.html","e7f189769829a098dc71895f78b1a8fa"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","23eaca1706279cf86a9016b4df0ab752"],["/2022/04/23/写一个音乐播放器/index.html","7642a49af74b29f1a7a3c426198e3632"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","7e000f503c0bf1ad14a450a2d3622359"],["/2022/04/30/GAN学习/index.html","621460227953d9dc4c7c0d31e895dcf9"],["/2022/05/02/html精学/index.html","39a3f2f6d93b948f7a386adcc5bc8858"],["/2022/05/06/write-a-compiler-by-yourself/index.html","d7fb6ad91cb75464e60b307bff08ca19"],["/2022/05/30/acwj-01/index.html","321d73a1a3b51d57ef35234b8f89f8b0"],["/2022/06/14/animeGAN/index.html","7fd208dbad2ef14ce112faf86a9facaa"],["/2022/07/09/c-与算法学习/index.html","57761c00bd161d620f4d465c68eaaabb"],["/2022/09/19/flask学习/index.html","adb94d359d5f9086fca267a62ba7166b"],["/2022/09/22/cs224w学习/index.html","f9dd9a333ff8d27487ebbcb6ef5cfb8a"],["/2022/09/28/记录一次wp重装/index.html","c7b219f422344d4381d9fd2891c2ffb5"],["/2022/10/01/Obsidian学习/index.html","25416e94db81eef621e51160b7e6ba19"],["/2022/10/08/vue-element-template实战/index.html","4cd41b406d58282bc8be909823de27c1"],["/2022/10/25/vue网上商城项目/index.html","92f88d298821492076c58a80318a7305"],["/2022/11/11/leetcode刷题记录/index.html","92cd62d33064af2cf32970f3a0c1686b"],["/2022/11/11/使用overleaf优雅地写文章/index.html","4f3273d9c58a10a68d315c11988bd6ed"],["/2022/11/22/磁力链接与RSS订阅/index.html","c97ea92c81fe577c6e10420aaacdb116"],["/2022/12/11/uniapp申请获取地理位置/index.html","3ba531b1ab66cc0df5b21b9c6491f555"],["/2022/12/26/pr剪辑学习/index.html","ba1965f35abdf329d0fad072b85cb84f"],["/2022/12/27/css中的flex和grid布局/index.html","17173f0bde8bd4f809438f49b164afd5"],["/2022/12/28/Flutter学习/index.html","2d17d69fc74ba4e87878413d518c44de"],["/2023/01/01/美化github首页/index.html","5e28266fc15afa69ff0bdece4c6f4198"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","77356cfdfcd5e7735ea4e57b00123a99"],["/2023/01/04/构建微信快捷发布文章工具/index.html","8a084f6045edf5aaba87ec472e61d5aa"],["/about/index.html","d63edf1f4b9729ce534f34bdeae21c4f"],["/archives/2021/04/index.html","1a01a5efa86aaac44ffc45ebb73db752"],["/archives/2021/05/index.html","b1c29c5a468f2e4d7816a3e21eb19553"],["/archives/2021/06/index.html","f2de31b3b4a7cce74eda91537661de9c"],["/archives/2021/07/index.html","dc743044ac49422931bb9772f26b7f0e"],["/archives/2021/08/index.html","a178525b2e9c24ebf6f2da1673790785"],["/archives/2021/09/index.html","85860e06f5aabf9adb9447d9e72e5f3d"],["/archives/2021/10/index.html","9e49138f56194f443921c820f4e128cf"],["/archives/2021/11/index.html","e4e9663900acf29b7c6810a830d294e7"],["/archives/2021/12/index.html","6ec3d85ee20b14bb13f0eb9a956ebfb5"],["/archives/2021/index.html","b03da17fe32e69352dfb1e075cda43bc"],["/archives/2022/01/index.html","6b28a9830efaebe0021b0e5db08fa8b6"],["/archives/2022/02/index.html","19f8da09bf3aed4127bc765c6092680b"],["/archives/2022/03/index.html","9993781b8032850b92ee920ead7b2e8d"],["/archives/2022/04/index.html","f8cbc928d7d0f81d193af8a2c6ffdd93"],["/archives/2022/05/index.html","e4c6bac2b74e291b3ce7b5f5e5a7e12e"],["/archives/2022/06/index.html","f25fa00abc6496f4426ebcd9f38f873b"],["/archives/2022/07/index.html","388e4d875f2f47541c5aab902654b6fc"],["/archives/2022/09/index.html","01a9ffee13d1af601b31d5a5825e807f"],["/archives/2022/10/index.html","3629d56a2532fc86a6134454be633980"],["/archives/2022/11/index.html","c827dcf18909b1b52828ce66a5b973fa"],["/archives/2022/12/index.html","ad708b2622f0e8cac268ef1d782ae220"],["/archives/2022/index.html","7c2b64392eea108480454462622b726b"],["/archives/2023/01/index.html","34ecf2362258728a3f5a902ec085f480"],["/archives/2023/index.html","c27dd0d811858db2e2ac183fd2a1ecf4"],["/archives/index.html","34b5212297acbd8515b10303af3a5f2e"],["/archives/page/2/index.html","a571b5561f0b469a5e16a840794acda2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","b01598e11703e0cff70e36fe89ad90d0"],["/categories/ML/index.html","09b63bc9bc87f93554b5eacfaf3f5c34"],["/categories/Nginx/index.html","126df1259764e181c7f518466e310093"],["/categories/Spring/index.html","7a2c3e976e5a92d05c8fc20984569b31"],["/categories/course/index.html","755afea5f3cefa7c67f6f28fdb0a7078"],["/categories/django/index.html","47e909fa69c5fa7e401d58ff75625590"],["/categories/fun/index.html","12b690e08edc0ed0a2cf3f60e33694bd"],["/categories/gcc/gdb/index.html","f54c08d3e6bd099ee4e59c7b7fb0f5dc"],["/categories/gcc/index.html","4737298b1a8ba4c7abd7cbead13f2109"],["/categories/index.html","f41ca85f7acc96279f0a98211802f294"],["/categories/java/index.html","5697ac536f3cc9216be84f6cacb52c7a"],["/categories/python/index.html","c94e31baf574263a5b94f8b83022fcef"],["/categories/study/index.html","f27319ac79c1eaa3d10dc1880e89defd"],["/categories/vue/index.html","c189c4e4cc15a966a504cb79719bc0b8"],["/categories/误区/index.html","2faaeb129ca061cf32cb7e40feabfa48"],["/commonweal/index.html","6a74030523091bd3c55e5b144141c214"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","132ca8c0609caa859120f750dfa2160f"],["/home/index.html","418e3e907d0a90c232de6a5641ec6e43"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","da57fba23c581219c93b8073e17b8f62"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","72e66947754f221938ddcfe12e82e03f"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","c3151b420e4cce5cbaa13ea708a5dfdd"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","b29425b7b954610c9f3dba3280425d16"],["/page/11/index.html","1b8be37073d412e445771d7490d3226d"],["/page/12/index.html","d7fe7351eb7a73ce438048b93c68c185"],["/page/13/index.html","1b861415cec63bea5093c726b29e4819"],["/page/14/index.html","052a95bfeca73f1e3c8be546dd1d5ed5"],["/page/15/index.html","90aa050a96f442f021a1580edbec8848"],["/page/16/index.html","1b7485c9305a581cc0c334752bc7d0ea"],["/page/17/index.html","133d3b949289430f65b8e4faacd06ae3"],["/page/18/index.html","6ff1d1c6b55ffca3ad05e71d48cbbba1"],["/page/19/index.html","431bc2eb9b956063edcda5e6bb52b16f"],["/page/2/index.html","8b5f61f4e5ff9ddc51b3d55418ad7fd6"],["/page/20/index.html","ba09c670911e684e2fe6c39d1de7020c"],["/page/3/index.html","318cd23179bf0670530aa7cb047fd9cb"],["/page/4/index.html","968003812fa0fdcc64ec489ee286af29"],["/page/5/index.html","6d6a9e61951013f2c69aa6fc7872819a"],["/page/6/index.html","54a1871b55b0f6b5524b2ccd6f7be873"],["/page/7/index.html","07ecdffe77ebbb8accc43071953ca030"],["/page/8/index.html","81c2d5dbd5ce1fbb0253f293acd3d3a1"],["/page/9/index.html","6dbea0343877d25805629b1781d9ea1b"],["/resume/index.html","97a520746b57f58ab58c1177291d5dae"],["/schedule/index.html","7cf9791b8a47bd9f76ec511a056c31d8"],["/sitemap/index.html","f4464c296b00fc0ce7fcf05b87291566"],["/sw-register.js","5236b22f2c6a49dc384587d31f5b4841"],["/tags/AI/index.html","4c53087484415fbed9d7b88c9e337bac"],["/tags/BT/index.html","b2b838ae7608c229aa37e72e3044d5e8"],["/tags/BaiduNetdisk/index.html","ce291aaf630218187bd9e68bbdebdf60"],["/tags/Bootstrap5/index.html","33f81a2bcd4ac8add1a16561d5b5bb60"],["/tags/CSS3/index.html","f26d3de5be9d897dda966b09e4c499fd"],["/tags/Electron/index.html","969f0a8a789bed9779fa80e1c2c88d7c"],["/tags/ElementUI/index.html","443f4a2977b05b363e0f6357b4c1040d"],["/tags/Flutter/index.html","a9b6ad9c94677eb92537ea29f31636ff"],["/tags/GAN/index.html","0929238408a8e1ae3d2205951bc642a0"],["/tags/GUI/index.html","c5f54c419e765291f24e659c30af4a5b"],["/tags/Git/index.html","ffc638963654957688281943a298f0a4"],["/tags/JavaScript/index.html","beb953e36ece4b3262da1e33fab4e23e"],["/tags/Keras/index.html","611a204305c3e156934c55742d3e4adb"],["/tags/Linux/index.html","104f06c350ea539c07163323361986c3"],["/tags/ML/index.html","4f839b3905875377d62e1dededd6cd69"],["/tags/NLP学习/index.html","24f1e7ba2c7773b684eddaf805741cb8"],["/tags/Nginx/index.html","896562db968b20054ce9d10fac5f9156"],["/tags/Obsidian/index.html","7c1497d47da11cc4560c902a313761af"],["/tags/Qt/index.html","f7d31365a1dd2480ff107491913899c2"],["/tags/RSS/index.html","fdb6720bf94907a8f09de0e4b2b2e422"],["/tags/SSL/index.html","c44e4e04569dd8a2cfb8bd4eecd5c2b3"],["/tags/Scrapy/index.html","3df00e122a1b205595f461a9291457d1"],["/tags/Web/index.html","29123e6513497e3b45270d4983a1d517"],["/tags/algorithm/index.html","1cfb179e1f0ad979ae26a29b4d9bd7ef"],["/tags/bison/index.html","cdcf49f5fb9caf545103c959db5460c2"],["/tags/bomb-lab/index.html","b8ee1c3749ca8f7b178e37c2c6acdd7e"],["/tags/c/index.html","bd59d8b74f25f3b09a6b2fcd64395355"],["/tags/cheerio/index.html","e5b712739c19458d69d298a0f09ed879"],["/tags/codewars/index.html","d927b72f741b343dab7c8b6fbdb36d0e"],["/tags/compile/index.html","957132ca74f35eeb8791211914013bc0"],["/tags/compiler/index.html","1c8a2b72c93056fd2a322075cd3e0043"],["/tags/course/index.html","52f4de9f1b6d0002e13028d510cf2109"],["/tags/crypto/index.html","f0d1d64abc98f7a4eb26afd64202221e"],["/tags/csapp/index.html","ffea1b1a4b9c696cc2dac1be5592fb92"],["/tags/css/index.html","bab2a14f00e15a951651cd1af3e06d4a"],["/tags/data-structure/index.html","e57069581d6e1526efb38d58e96494ed"],["/tags/database/index.html","2ea9821ce53c5d6a6ca2b68b54071719"],["/tags/deep-learning/index.html","ea7e816ffb45902416923d5cc1763731"],["/tags/django/index.html","cf65d22e9c4c0ac2bf3d9e0262e7c7cb"],["/tags/dwm/index.html","cf8516a66608e4d71bd0b6dfe6fd18c3"],["/tags/exercise/index.html","aaaaf5be1aee5ee5aea55e58dcb2c7db"],["/tags/flask/index.html","a089db2e757449026debc8889079b0d3"],["/tags/flex/index.html","20c04ac0279a247a3064ea76de6df41c"],["/tags/front/index.html","6604962fa99a25e1b60e69c44d221398"],["/tags/gcc/index.html","cfe834c2982d32a9e8f062d00cdd579f"],["/tags/gdb/index.html","ee790b164ea3518714b206cd2cf6eea9"],["/tags/github-profile/index.html","2c3299872c8fb66af3c566ab57c34ffc"],["/tags/github/index.html","871194c2735cfbbc86bbe46e92218516"],["/tags/graphviz/index.html","350dd545642b4371d433c38627bdff1b"],["/tags/grid/index.html","1af89ce7f42609a869c74bcb467ad505"],["/tags/html/index.html","069cc8ced26665954980840c6f1cb055"],["/tags/i3wm/index.html","2e73f21da2dc444b2dc7202a357f2e86"],["/tags/index.html","a9b03fd0550e2c212e4e9fe3ad02c65f"],["/tags/issue/index.html","ce26f6d0448ec9228d8e3a3f13d73102"],["/tags/jQuery/index.html","9d67f0132898944250f5e081fa7cf7fe"],["/tags/java/index.html","031af9ec35ed769542e8342e819507a5"],["/tags/js/index.html","cad0417ecd911d9df11ac3e3004b826d"],["/tags/latex/index.html","c3b7f907c9151a70175dce6de6b9a5ba"],["/tags/leetcode/index.html","6a9da7931239afcdd7d793ab6900fe7c"],["/tags/lex/index.html","ef704153570913865ed1c47cf30716a5"],["/tags/material/index.html","68d974b6d3662101582d209123a63fb6"],["/tags/music-player/index.html","aebdc6e7b6d2861306769f062d48a0d7"],["/tags/nodejs/index.html","277775deb058b3a105ea3adb6d5d057e"],["/tags/noj/index.html","b6612ba83555ea3e020bc12e493175b6"],["/tags/opencv/index.html","c1cd7d0c030459321beb29b9b41dbd6d"],["/tags/overleaf/index.html","32a6c1a5394632f57303b66a963d0cd7"],["/tags/pandas/index.html","63bb2d02ffd2fa1c496d34bd16efee8e"],["/tags/premiere-pro/index.html","147668c52937445db3e11bf7dccaae4e"],["/tags/proxy/index.html","375cf68b12c66d3551b159ae48f8a87f"],["/tags/pygame/index.html","f35920224b8418f69242d5862aa56648"],["/tags/python/index.html","3426a3028ec2aedf16a1db15a7bc7e81"],["/tags/pytorch/index.html","2fded43d4f12d757aed6dbdd635f673f"],["/tags/reading/index.html","8bd6812b9ff03a3eb6c1bb97c82ce4da"],["/tags/request/index.html","a5e5f128067dbdeb30b2eebdb016c149"],["/tags/requests/index.html","8caf0a58ded33edc5ad2e66c12b149c2"],["/tags/security/index.html","8632f437ce0beb51b799213e19d93ae3"],["/tags/shell/index.html","284a74fc474b6fdb5abdcba5b5a4da3d"],["/tags/sign-in/index.html","5ea5cf872a60682113d6e487db4c3d8e"],["/tags/socket/index.html","2ba22711b247892af494d1cef89f4662"],["/tags/spider/index.html","04dfc241992c67cf1e9e4452b29ee4b3"],["/tags/splash/index.html","6275edbf8d4e03d2e705a6b16fbbac1a"],["/tags/superagent/index.html","39a0cc58d125424ec8f4c9160230f0f6"],["/tags/tensorlow/index.html","dfb3534836cc559d3e8d819a7aeec6af"],["/tags/tex/index.html","737e1738896084af6849409ba16e55de"],["/tags/threading/index.html","d52bdd331ad8c72b0c22caf660b280a8"],["/tags/tkinter/index.html","f4318375ead5737ec90173efdaf9448e"],["/tags/torrent/index.html","8485c610748049066103f36c682b918a"],["/tags/tutorial/index.html","481342d7e5ec9aafa65229bb97eda24f"],["/tags/typora/index.html","7a8afd25579aad4b2c1e1cde5aabae5c"],["/tags/uniapp/index.html","785b2ec84f859879dc872875a5e265eb"],["/tags/vite/index.html","d98ebbcbce64ce64c4b286d43fa98e85"],["/tags/vue-element-template/index.html","c9a9a43913b21c89a3eaf897e19f6cdb"],["/tags/vue/index.html","4661f1c5a637fb658e1712958b84d283"],["/tags/vue2/index.html","f85e52b9662b9e15588ed42c31eb3858"],["/tags/vue3-x/index.html","c0e60e1feb7d10f63bab329c2f2e8a89"],["/tags/wechat/index.html","7494a3db2d837ccb1368cdbc32e165ed"],["/tags/wm/index.html","22d25ef675e1065664bbd9f77a213c4e"],["/tags/wordpress/index.html","db7881ba263c27a641f95e1189078c0f"],["/tags/workflow/index.html","a5caee56b157b81cbed7c943779de3dc"],["/tags/xpath/index.html","01ec909de766e5a14073f4dbcc4b8a64"],["/tags/yacc/index.html","94e63d6ba9a36f355b9cb2b4c26deeda"],["/tags/zsh/index.html","fca2039381ee087e309b643241001671"],["/tags/七牛云/index.html","ca041559d7e270d461aa17b64b6a511a"],["/tags/函数/index.html","60bdc071af2c2361666d1f5821a5c04e"],["/tags/剪辑/index.html","119308e856e010d00182044b73d2aec3"],["/tags/存储/index.html","cd9a25ab44a650a48e335c245dcd3827"],["/tags/实战/index.html","767605ce672fbd55be87e9291f590a9a"],["/tags/建站/index.html","e83dce73132a5e38fe6c53c47d2a2117"],["/tags/微信小程序/index.html","99a2c43373e3a1f5d4cc3efc0e9cce7b"],["/tags/指针/index.html","8f0682a8e918085fe2b7e6c6eea9c515"],["/tags/汇编/index.html","cfc6c02baf5f671c1675b8a1b24fb4a5"],["/tags/爬虫/index.html","32a3d9018824e90d492c7f5c36bec2eb"],["/tags/算法/index.html","b28ba18973cff5de8be41e29a6fc824d"],["/tags/编译原理/index.html","75792935eaab0913daea78e3af3769f8"],["/tags/获取地理位置/index.html","98bef2f4346d5c9dbae61d11ea72723e"]];
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
