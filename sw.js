/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","62312b3015b021c36f4b8f69df231cfa"],["/2021/04/20/稀疏矩阵/index.html","f84bc27f10431a802a05d2c53a1cb848"],["/2021/04/23/广义表简介/index.html","4949e7af85edecf0614c8220197d43ca"],["/2021/04/29/关于指针和函数/index.html","85e8b92b5bd1adef90a9dbf582e5c134"],["/2021/05/10/哈夫曼编-译码/index.html","356ab20e0ce7f8b769848f81c0c9f385"],["/2021/05/17/数据结构noj_2/index.html","4f5d5bccf06aad1ebb2adcc7857d9ffe"],["/2021/05/30/数据结构试验/index.html","084d7fdb2bc5db0dfdba285692ec9dba"],["/2021/06/12/数据结构noj-3/index.html","94540771961c937152c1698a09d5b744"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","b310e02ff755ed1de973c25994dcbe51"],["/2021/07/08/课程资源分享/index.html","210acd350e4dd3c7e26a1b71aba2322e"],["/2021/07/20/Scrapy-下载图片-文件/index.html","4fe1c98a67696dea575a76cc73e6875d"],["/2021/07/21/Scrapy-动态网页爬取/index.html","ca895ba79efafdedeb48c73759f6850d"],["/2021/07/21/疫情打卡/index.html","b9355ed97c51461c4a41b7722de7aa54"],["/2021/07/29/Scrapy代理设置/index.html","ca623f5cbaae81b796ac9c513577420f"],["/2021/07/29/数据库认识/index.html","eb5583100e868c8b073fcada831d05c6"],["/2021/07/31/Python多线程学习/index.html","117219b3e5e8eaedf01ecc5fc0a08c85"],["/2021/07/31/tkinter-requests练习/index.html","66f8988959ec36f301af362a33e11929"],["/2021/08/10/Git学习/index.html","6d6227f313556d04f35d4aeb1141a1b0"],["/2021/08/15/pygame实践-1/index.html","cb953b3b046eca72d11b697a67e67098"],["/2021/09/06/微信小程序开发/index.html","ab68c8bbba3a46f65755950816563370"],["/2021/09/21/命令集-1/index.html","feb89359aa3c999827eeff2d88f9fd3d"],["/2021/09/21/命令集-2/index.html","36c18d55d9429dcf6267c785980dd658"],["/2021/09/21/命令集-3/index.html","5330b8a3b7de90a22074ffcdc392a702"],["/2021/09/21/命令集-4/index.html","b79503ec3eec7bb2770ad29e767bd7c5"],["/2021/10/03/socket学习/index.html","2ea139718ffb549eac8dc95e3b7c215c"],["/2021/10/10/dwm入门/index.html","f745c12a43c33ff8a025e578f3ba089b"],["/2021/10/10/安装ohmyzsh并配置/index.html","07f9704692d8a55f6a6e3698084a6684"],["/2021/10/20/css学习/index.html","578815c76f413b2ed9627232bb43a440"],["/2021/10/20/wm入坑/index.html","e04fdfc982ae370a0837537595ebe7b3"],["/2021/11/03/微信小程序学习/index.html","5a3f999f7740df2ad17149acac7a9fbd"],["/2021/11/04/css揭秘/index.html","7e5622db77d05d33991cacf2dd2b736f"],["/2021/11/05/css-练习/index.html","147efe80d63b5525993a3d28ef034bae"],["/2021/11/21/命令集-5/index.html","ab09ce7af04c4d7bab5f36d3f7b2569f"],["/2021/11/21/命令集-6/index.html","6498413c77ed161a49df886797ef0370"],["/2021/11/21/命令集-7/index.html","84f366f4575b9408ce3c397f25c4c06b"],["/2021/12/01/搭建wordpress/index.html","d8636e078ba16c724bf9537572961d8a"],["/2021/12/08/python操作百度网盘/index.html","237d7eee32057efc4b86b834c2a733f1"],["/2021/12/14/js爬虫/index.html","f4f3928d932c980fc4f9c72590f1ad35"],["/2021/12/25/为网站申请ssl证书/index.html","d8ae37fd8e7791861fa25cc48040a451"],["/2021/12/29/使用七牛云为网站提供服务/index.html","a735b1d7fd59bccbedc353793f7a771e"],["/2021/12/30/jQurey继续学习/index.html","48ae1f338c757bc3208cccca89ce9efc"],["/2021/12/30/jquery学习/index.html","3c15bd93c3c7e4570aa5ee0bedcfda70"],["/2021/12/31/vue学习/index.html","f7ca287c32c96aa2bf879f94312adbf9"],["/2022/01/02/疫情自动打卡/index.html","d566ab82543311aa0558d582998d621f"],["/2022/01/03/javaweb初体验/index.html","4745895f5f8a97e2858ae53c080c2040"],["/2022/01/04/codewars练习/index.html","065d4d8f272236a23c1f39e6d70afbeb"],["/2022/01/05/Spring学习/index.html","2b49b6e145479a0f393ca412466cb959"],["/2022/01/05/vue实战/index.html","899d331bcaef7b77e4943b7c773643a3"],["/2022/01/08/gdb-gcc学习/index.html","8b278ec4b34faba4b1b2e50d7424aa8d"],["/2022/01/11/python-opencv学习/index.html","55b67d63bb1d94ffab219c6236de15ba"],["/2022/01/12/汇编实战/index.html","8b6d9077fc1d7a00d34067d6a580505d"],["/2022/01/17/pandas学习/index.html","a249125624a9fc42f53cf450dd438746"],["/2022/01/19/可视化图的工具/index.html","6b93dbde4676e9ebfa50ca449791f070"],["/2022/01/19/机器学习入门/index.html","06879e01e95e4dd7bd6f1f4604004e5c"],["/2022/01/20/cousera-ML学习/index.html","d501d28aa1583bcff1baa9b2f74499ee"],["/2022/01/30/typora解绑后出现问题/index.html","5ab94f8e82135bc610093bed694d3ba0"],["/2022/02/03/NLP学习/index.html","75f682c756e2e83ca981c1e7fc4eb4dd"],["/2022/02/04/Web漏洞学习/index.html","917a35f64d8c3bd56689c483eacf9b80"],["/2022/02/04/pyqt学习/index.html","57cf165312e4d568b9e2f7d627abf8e5"],["/2022/02/04/python爬虫/index.html","43540e21e214d265c68ab9e2690d36ab"],["/2022/02/18/Electron学习/index.html","c3413b37549ab0b133838e74660ed658"],["/2022/02/22/疫情填报字段解析/index.html","56fb197e6c7c7a2eca95a6946c296927"],["/2022/02/24/Bomb-lab实验/index.html","cebf874c6359dd17bb3fd5484b1f35ea"],["/2022/03/05/nginx学习/index.html","5b6637b90191869e50ba5e89368e8d5a"],["/2022/03/09/汇编原理课程学习/index.html","ef1e3b327f345a721d994d44c8b5a622"],["/2022/03/11/Keras学习/index.html","12d0413391a2f61040fd4145b8e08960"],["/2022/04/01/graphviz学习/index.html","b0b71f416d2723016d686ade9e920437"],["/2022/04/07/django学习/index.html","0171aed02adc9bbd33dcea6ef783e998"],["/2022/04/11/密码破解学习/index.html","645231e4f6f2b3161cc3e9a85f6ee37d"],["/2022/04/12/flex-bison学习/index.html","e6d329ac38f14709807f588554ce6a7f"],["/2022/04/15/pytorch学习/index.html","a7f1a7c0b80fe6604878a58d0a142122"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","2d0f746bfffb9751ee45874f5da495e4"],["/2022/04/23/写一个音乐播放器/index.html","f07211027a88864cd2ad313a8962d6de"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","645b73aed9e7b192138b95a19cde84b0"],["/2022/04/30/GAN学习/index.html","27a107e0c1a6778a41f39782722128fd"],["/2022/05/02/html精学/index.html","6a7301e18780bc6c239ee0d9bf544038"],["/2022/05/06/write-a-compiler-by-yourself/index.html","690b7e00cfac85fc52495fd7c1e47b00"],["/2022/05/30/acwj-01/index.html","3849c971b5f924dcdd2c6c7287a44202"],["/2022/06/14/animeGAN/index.html","a45b2f5d84f79bdc076415674ccb2576"],["/2022/07/09/c-与算法学习/index.html","89b6930c7caf6fcbf46581c6a6d604e5"],["/2022/09/19/flask学习/index.html","bdea14ae07ea0fd5619355c40859f286"],["/2022/09/22/cs224w学习/index.html","d76a6ad5dbd09ee67e7d1a0299383042"],["/2022/09/28/记录一次wp重装/index.html","ec8b018672e946ae0fff5715d26b36ee"],["/2022/10/01/Obsidian学习/index.html","3c6e69f6ab3b8598d38c74d677d0d43c"],["/2022/10/08/vue-element-template实战/index.html","37527bf9c5aa1be71de34d7d84f34a70"],["/2022/10/25/vue网上商城项目/index.html","eb195124567b799078baa6b705336e08"],["/2022/11/11/leetcode刷题记录/index.html","ffadf762a647793f9f74058afaa90e2b"],["/2022/11/11/使用overleaf优雅地写文章/index.html","42375c5b65b061c484e66cf7714d5a9b"],["/2022/11/22/磁力链接与RSS订阅/index.html","0a72f0b7569b0acd132b6b57246c2a5e"],["/2022/12/11/uniapp申请获取地理位置/index.html","eeed5ccaba79fe2ba41e12a3d40b0435"],["/2022/12/26/pr剪辑学习/index.html","e2a5f6ecf229e4acfd69d862485b2681"],["/2022/12/27/css中的flex和grid布局/index.html","e87ad7b729b0dc3749b2017dfc4b2373"],["/2022/12/28/Flutter学习/index.html","55f4910d748469b4061ac83b75ff68e5"],["/2023/01/01/美化github首页/index.html","fd3771428ed89dde48b9fe28291e791d"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","2e3c17c7ea0052aad66d2e9841898265"],["/2023/01/04/构建微信快捷发布文章工具/index.html","7e24b4b8cca53e74dceb419a2faa6816"],["/2023/01/14/dart学习/index.html","f5620a2be2b2b564a754a1c660689b88"],["/about/index.html","652063dc3325ca975888a96c8eee77ae"],["/archives/2021/04/index.html","f058364dbd5ee9d46adce4122fde177d"],["/archives/2021/05/index.html","9851b0b8fd0ddc46d0a95026152fb96d"],["/archives/2021/06/index.html","60aedd8c7174ab1e1afd62e7b1660b2c"],["/archives/2021/07/index.html","a44fa1d7225b52a52336850daed4e25b"],["/archives/2021/08/index.html","5ce616b6410f8694f7cc828f790a6222"],["/archives/2021/09/index.html","f24c229211daa0cd88d56d652024dd12"],["/archives/2021/10/index.html","b60caee9ef1ad1c3e321168ce3c5d080"],["/archives/2021/11/index.html","12ce8149747f42cfd3da8de644ee2132"],["/archives/2021/12/index.html","e308a3ee296d90398ab605ecc6cdbf8e"],["/archives/2021/index.html","005c5cb41bc4259bfc7f86a636597245"],["/archives/2022/01/index.html","2030aa4a99f1de42605e2deb658c7741"],["/archives/2022/02/index.html","6f122b18e9408b78c86ca6516acaa1bc"],["/archives/2022/03/index.html","f689d787a6f2fcb2d152be37059b4a65"],["/archives/2022/04/index.html","afc9a1068f35552da71446ea2c224674"],["/archives/2022/05/index.html","24612798e4f27cbd8b700bd78ec9e62e"],["/archives/2022/06/index.html","64671ac3cc6c90eb65b89e3d4a788911"],["/archives/2022/07/index.html","537b21803bd3b3d5c4c3aeb9e5bd4e45"],["/archives/2022/09/index.html","48f87d796566c0dcf9f3cdfbde6cd3cd"],["/archives/2022/10/index.html","a48a54599c38fd6a73a9662bb066894a"],["/archives/2022/11/index.html","4b970437a89927cede04c0cabd9163ca"],["/archives/2022/12/index.html","fba152f7bf9684445d02839cc89c5ec6"],["/archives/2022/index.html","29815a775b4a7fe3cf7a8f85d42b309b"],["/archives/2023/01/index.html","81c0afd93d30c255115ba8acbd59b47b"],["/archives/2023/index.html","66bf19ee1c734b0bf9be2d40f4e852d6"],["/archives/index.html","ac85112a24239f5645848ca3a726a772"],["/archives/page/2/index.html","3320143d8397d7a4667a17741253218d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","018bcab464b6de342804d4c20c2251a7"],["/categories/ML/index.html","6ec9f3237afe0c559fec1e8acc0bb8df"],["/categories/Nginx/index.html","2304ae87cae2445bf53d27f9591e13fb"],["/categories/Spring/index.html","bc1a3cecd948e6485894a600a6d1a0b4"],["/categories/course/index.html","5707d8988e53d0112010ff50c1b4c253"],["/categories/django/index.html","6ad40ab3cc35bb5a11d3cc7e9f07ed37"],["/categories/fun/index.html","1366438f73c2676e7325285176b2e167"],["/categories/gcc/gdb/index.html","e6bb846f0068d0c8e5741022775ae01a"],["/categories/gcc/index.html","111d3609496befa9d3f19a287e91aa5d"],["/categories/index.html","780a6e537b4a99c5cdf4f67cd8a8fc90"],["/categories/java/index.html","19f849cd44e348b19d961772e03a6d28"],["/categories/python/index.html","df2433015d6a924742a4f8db929ad29d"],["/categories/study/index.html","5dbfa8619961a37a18e54e3dba2efc77"],["/categories/vue/index.html","50cfd8823902ed0fb194da44272457ad"],["/categories/误区/index.html","8225bca675f5ddb9c948f645908260f9"],["/commonweal/index.html","01425214d9a04c1c877bb6ee79db8a0e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","118debe14b852c27bbd7a152ea5fe721"],["/home/index.html","cfe340ea22a7e4d9b81baee4f7da2ca1"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","48b5cc7fc43c621acdd500673d0a247b"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","0e7450a247d88ca129b39f1fb5b06d51"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","cd69d668761171d569c144da7ff76bb6"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","e1a04cf37b767e936165400493c08198"],["/page/11/index.html","eb46b2bfeceb412a97d9e6819bce56a4"],["/page/12/index.html","efaabcd3fb1fa687e3b9646f0e2f8346"],["/page/13/index.html","1c80bd4b7522c14dc83caa405bcf6ceb"],["/page/14/index.html","5c94c48c2f1d3c860d2b8e7f96972279"],["/page/15/index.html","d7813abdb88b0381227f3b402eb51662"],["/page/16/index.html","d87511462db776dc274e34f1a7ac890e"],["/page/17/index.html","2872b27827cad10d2453c657377e340d"],["/page/18/index.html","5d4dfb62767d964a8dac16ddb962aec6"],["/page/19/index.html","7b0d65bc2bc048c5504ca383d9723f75"],["/page/2/index.html","970681af6a171fa4a26c7d642972be0a"],["/page/20/index.html","586844bf00bc15f98f3c282be772e4f9"],["/page/3/index.html","16b1c3eb3ac90247e1ec1f5f1422504c"],["/page/4/index.html","d81227a101e65a8c385baea2a5e00cbf"],["/page/5/index.html","1ba65518b5f65622f75fa56a29e6bfab"],["/page/6/index.html","7e2df4af4b1bf6f8a6dfaf4dabdac052"],["/page/7/index.html","92acd6d318f998195382709f2f4c86ab"],["/page/8/index.html","fa91c69720f21c43421ffcf9c1f9ffdf"],["/page/9/index.html","3cf28004759cb23ec66b6f239f5e58c1"],["/resume/index.html","f75bc5cb694d8d7fd46d08300f31db66"],["/schedule/index.html","66902247e9e7c75c2c4d903ec849f460"],["/sitemap/index.html","46c5fed33ac7893e1aceb42b52cec5aa"],["/sw-register.js","2698fdc16bd8eb0c4f890cecc8560870"],["/tags/AI/index.html","2969d8a78ca55c60d804ac942af0bfcf"],["/tags/BT/index.html","4fb3ad4cca13acc23f35869a0b7a4a53"],["/tags/BaiduNetdisk/index.html","d707bf054490b542b6fc35883cf9c899"],["/tags/Bootstrap5/index.html","8b543820de8026b35c4e9650dca0495b"],["/tags/CSS3/index.html","688d94a1d084be3a5761760450c8850e"],["/tags/Electron/index.html","1ee95167d1821ad83665bf84de13612f"],["/tags/ElementUI/index.html","76986308cc440c2a2ed2473e9800a778"],["/tags/Flutter/index.html","7e712a4c520a74751c2d8854e0a4fd90"],["/tags/GAN/index.html","78f81331bf00952ae7fbc5ef62769642"],["/tags/GUI/index.html","aa1b866144eb300224a011c7e761c16f"],["/tags/Git/index.html","c48e3c73520477548b15bc6e1a902024"],["/tags/JavaScript/index.html","89804d7c318bd7f4a6d182a59ce1733b"],["/tags/Keras/index.html","8d70769c8e8807506a6e94daf8a3ab90"],["/tags/Linux/index.html","f981e53b693f5343ecd980aacbb01693"],["/tags/ML/index.html","236c136617bfeb34b1b00504013ae153"],["/tags/NLP学习/index.html","721859e48e40ffe4af997f3e5685a692"],["/tags/Nginx/index.html","08fee78a4461ac57bc6a36fef007e0ac"],["/tags/Obsidian/index.html","4f134c91af38b04027ea51f75d54e140"],["/tags/Qt/index.html","9f84616755295ac0b09c6784497894ae"],["/tags/RSS/index.html","7eb1e2121d3bd762c0bfc2d2f5516ea8"],["/tags/SSL/index.html","2a88d6ebeb7a94516da00a81c293d2db"],["/tags/Scrapy/index.html","7749c04205f63c66002a5d4de3054558"],["/tags/Web/index.html","462213a91f74a11533290291d07a87d3"],["/tags/algorithm/index.html","750c2a62df55289be120d62c1730e0be"],["/tags/bison/index.html","c318f5f50457c448e87a300fd3e13206"],["/tags/bomb-lab/index.html","fed1a517b04c580d6b3501398cd833ec"],["/tags/c/index.html","4c3e8973cdb33934767d711375fd797c"],["/tags/cheerio/index.html","a0f5cf7a2e71b1c43a6a579452959326"],["/tags/codewars/index.html","c29f1e2ad9cabbe284ec2a19f221a230"],["/tags/compile/index.html","573f3ac41f81d8bafb33583af9546965"],["/tags/compiler/index.html","f393bd791d3550ea2c58291c4ca7b83d"],["/tags/course/index.html","143d7f6e8630fed28abc97ea63b217af"],["/tags/crypto/index.html","21f7cf2e17a1ecde9b023d863242aac1"],["/tags/csapp/index.html","cb95a0f341cd6fffa5150b627ee30578"],["/tags/css/index.html","152850d92f33480520d58c2b8c662e4e"],["/tags/dart/index.html","a7f4ec187a907473a1ebe235cd499af9"],["/tags/data-structure/index.html","ec29e0f57a8eb6899ac2a0498a1c1d2a"],["/tags/database/index.html","ca0ce991d81cfb140d451de47c08c80c"],["/tags/deep-learning/index.html","010c0de5e1282770d77cb0ee70e5f7f9"],["/tags/django/index.html","d0d0737897ed678f5110f3afa20d0b26"],["/tags/dwm/index.html","7b515d20601cb085def6494c9f3f9a93"],["/tags/exercise/index.html","6af47a3d56fb04881eb022a5d1a814ee"],["/tags/flask/index.html","1c084e847f5998e18d5f36c2e12f10ca"],["/tags/flex/index.html","02c9c0a41f590bb7469103cfa91af742"],["/tags/front/index.html","4239fd6136fcb0d3a7b0752cee23ab68"],["/tags/gcc/index.html","f85e682db816755ef00ef8d01749f1f3"],["/tags/gdb/index.html","cb06a66dcd70a5700f8cce174c5ec9c8"],["/tags/github-profile/index.html","109174697bbdeb557024a2b20dd81298"],["/tags/github/index.html","576b23490178f635938e315ec948bfb9"],["/tags/graphviz/index.html","ce56d30f24de98731581e5d46f2991bd"],["/tags/grid/index.html","44bae5d7fb035664b75b4cb37053ab08"],["/tags/html/index.html","2352f7ac39d08a1ab87730678b3f9dd9"],["/tags/i3wm/index.html","7eb86633a3ccc06b17b0a1cf265fdce5"],["/tags/index.html","cc2cf7e0d9fc6f931f25c68d95d8d9b0"],["/tags/issue/index.html","25c223dca9a1c826a0107839a3bbbc7c"],["/tags/jQuery/index.html","18ef376f8b1026fb03a96eb36acc06df"],["/tags/java/index.html","2ed2ea84a7c7b69cca070eedb3033739"],["/tags/js/index.html","0fb7f1619982ee7c7cc66d010a4133c2"],["/tags/latex/index.html","d6c6c2847359b2fe20d14af6788dde86"],["/tags/leetcode/index.html","23c5a1484ecbac7ba87b6b223524a310"],["/tags/lex/index.html","ba1ee52b58e681600f55f9d14440bd7b"],["/tags/material/index.html","98b0652bd151dc4be6fa8ffa7f4c0a1f"],["/tags/music-player/index.html","4cd691220cbea555f5c53ce3e2f563c8"],["/tags/nodejs/index.html","dff32a045617d56a91833a6a8ded1a55"],["/tags/noj/index.html","c2b8c0123d49f2e564f9b95fd56fa894"],["/tags/opencv/index.html","8d1f6b63c36c45ebbc2699a445e94061"],["/tags/overleaf/index.html","ae6cc6757a0ed5f0092cf5793843b79d"],["/tags/pandas/index.html","e3169d8c41f1fba3fa80d3246db6f4c8"],["/tags/premiere-pro/index.html","2fbdf72341fee6dd4f805b81c2b973e8"],["/tags/proxy/index.html","42a08ab957e40f775d9ab0df8ce3df3c"],["/tags/pygame/index.html","555a4710aeac83ca3caa8f6f5eaad163"],["/tags/python/index.html","b07cd96603071eaf6f4d5bbb2a1e31d7"],["/tags/pytorch/index.html","2e6cdff2dd77195f685122d10d68c4ad"],["/tags/reading/index.html","383d065282625949ebeaee8c8fb496d2"],["/tags/request/index.html","fbd27b3294496bf0b53eec5ccb0b2a31"],["/tags/requests/index.html","bbd88362c01d2b5fafd949d2aff0fd4a"],["/tags/security/index.html","07c3ff15249bc7032c978f54b3a4f67f"],["/tags/shell/index.html","151b0c1e9da88c4e04505a549bb3e900"],["/tags/sign-in/index.html","30dee512e0a4207f021a3887be8db6d1"],["/tags/socket/index.html","c9dd02b21d9a13c78d979d4f779e7a8a"],["/tags/spider/index.html","02712f40e028d54dcc13f7409c22a4ea"],["/tags/splash/index.html","b9efc0139c3f341e96b1f0422576d481"],["/tags/superagent/index.html","15e6e6bf6ef7174b838adfe8954983ca"],["/tags/tensorlow/index.html","93a2f3167d2ef4b9886b861f3152e7be"],["/tags/tex/index.html","292a4109d983d77ba93237e8f04a8099"],["/tags/threading/index.html","2c14ec1f77b37413c1dc7e44f63c7486"],["/tags/tkinter/index.html","14e305805f6b06d463f1c13fe1f28a15"],["/tags/torrent/index.html","17aa318848f6ee3daeab9606dfa301ad"],["/tags/tutorial/index.html","951a112eb7591cbfb462eb6694712234"],["/tags/typora/index.html","dd0f6e500e4a608f0a9e5d0df1fcbd85"],["/tags/uniapp/index.html","4c6bb7f6af138b3be0001062d270d55f"],["/tags/vite/index.html","90dfa4492798d337bc96c8adfce3dd36"],["/tags/vue-element-template/index.html","070569762fd929035d16ed5bd1d4c8d1"],["/tags/vue/index.html","8401a9a80556aaa0f452d56ef3dceee7"],["/tags/vue2/index.html","8016209c23a5a3762a70a727489f3ec3"],["/tags/vue3-x/index.html","b084175d1dd988bbd2cb62bb88253aa2"],["/tags/wechat/index.html","368f79b6b754a963ec9b4e6a11d65091"],["/tags/wm/index.html","5a6b39afe28ec7274636d19224873070"],["/tags/wordpress/index.html","5d173af79f6d38b76fac279e21d255b7"],["/tags/workflow/index.html","b3b2a2d02b6d2280e38e7d0dcf5a4118"],["/tags/xpath/index.html","8644991e54125a6e5759b34f18b29a36"],["/tags/yacc/index.html","0b8c734efc4a5d8ba4be6a6dadbc3060"],["/tags/zsh/index.html","bf6b4dfce9bd0099b958fb528fb24e03"],["/tags/七牛云/index.html","783f9ce8fd0df0bbc155c9f519a02afc"],["/tags/函数/index.html","7e3bafcafe1cf7bca2ea7b6af8fa7b62"],["/tags/剪辑/index.html","cc0ad493d00e83acd1b6f1e6889574ee"],["/tags/存储/index.html","95ddeec9f6a2a2c8e9c7eb7e97d7cc1e"],["/tags/实战/index.html","d76c8581ed74e581527880fc76db994c"],["/tags/建站/index.html","30c4f887d24993e804957a7253cabb3a"],["/tags/微信小程序/index.html","14a0170f0651e5e1dc1eddeecdedc1b7"],["/tags/指针/index.html","5ebbcd84cdfc8e4f4e0a66fd9f48acb9"],["/tags/汇编/index.html","ceea1a3e9fffa810781bcf0f9ca0e9b4"],["/tags/爬虫/index.html","d7db8709f0da59241d1468be7572acc2"],["/tags/算法/index.html","55cbc8aef484de64b2a51313f05cd2c9"],["/tags/编译原理/index.html","c45894a03fc97aaa134e1ed6a081bf5e"],["/tags/获取地理位置/index.html","e4268b902dbcab64011909d8fd7d01bf"]];
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
