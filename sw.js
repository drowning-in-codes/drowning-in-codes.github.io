/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","f8f255116b3736496902ada5ac0ad704"],["/2021/04/20/稀疏矩阵/index.html","25da50b51f093c396fd4b3c431771469"],["/2021/04/23/广义表简介/index.html","3b6deb9d0855cb021fa841ae57b0d0c7"],["/2021/04/29/关于指针和函数/index.html","a9496c11d59ff4d1536343dfce72fea6"],["/2021/05/10/哈夫曼编-译码/index.html","e42a825670f4bd089ee593e8fa97f637"],["/2021/05/17/数据结构noj_2/index.html","43e752c28c7819a6381337e132b8bf6a"],["/2021/05/30/数据结构试验/index.html","4700a45cd2b9301f79b17ce0929389db"],["/2021/06/12/数据结构noj-3/index.html","0ef0e6998fedbfe2f5feb84c75f82427"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","ee07fdb013077340fc9369ee250bb143"],["/2021/07/08/课程资源分享/index.html","f8794cb0953f5bb98e2958e8203b4684"],["/2021/07/20/Scrapy-下载图片-文件/index.html","eb540362d1bca2e37b8c8038b7354951"],["/2021/07/21/Scrapy-动态网页爬取/index.html","aa06a6cc4e431596de930fee6f6e92fc"],["/2021/07/21/疫情打卡/index.html","e3ac31bcfe16e66047d400e3d405c8b1"],["/2021/07/29/Scrapy代理设置/index.html","5cea678b042e7ceed1efab99ba90d51a"],["/2021/07/29/数据库认识/index.html","c417b3f4e662a88a6195af8a4cc33ee5"],["/2021/07/31/Python多线程学习/index.html","decc56938a9572311143d8cf0a725613"],["/2021/07/31/tkinter-requests练习/index.html","aa7b322e0fc04751ddec082e1480f179"],["/2021/08/10/Git学习/index.html","6fd3b75bdfe3f667f9a2241404c5b6cc"],["/2021/08/15/pygame实践-1/index.html","20b29e957e9d020eca1f95a90aa47650"],["/2021/09/06/微信小程序开发/index.html","16c898eeb18840e57b51df0e4c4e3f46"],["/2021/09/21/命令集-1/index.html","6f4e745fe739d7ebd5ce645adeac48b9"],["/2021/09/21/命令集-2/index.html","d5dca5f48bfe7b18bd2b65507e5f67c6"],["/2021/09/21/命令集-3/index.html","64e719101b324b73d068b5701130a3fb"],["/2021/09/21/命令集-4/index.html","4ec6ce78962f457120815e514b9c3696"],["/2021/10/03/socket学习/index.html","e7e5e65cdb78df8d4cd2abebe16310d2"],["/2021/10/10/dwm入门/index.html","05a77f269488dbe3d95260db5f143016"],["/2021/10/10/安装ohmyzsh并配置/index.html","0b4c78b2d1a190ea8bc715dc9a0dfb6d"],["/2021/10/20/css学习/index.html","3112b5f62da4cbebf1a15822fc66fb1b"],["/2021/10/20/wm入坑/index.html","ced4d1f71a8d6782f9f9fed08cf99547"],["/2021/11/03/微信小程序学习/index.html","f022c4ee37587eb5fc780a3e0154e65f"],["/2021/11/04/css揭秘/index.html","363a238c368ff9fe588b07c8d536fb9b"],["/2021/11/05/css-练习/index.html","a60199310363c652211fdf5676160d57"],["/2021/11/21/命令集-5/index.html","f91ef626723c48434ba3029e144d68bd"],["/2021/11/21/命令集-6/index.html","2660312a53577aed461f57107d81b00b"],["/2021/11/21/命令集-7/index.html","8eb5a92721f8a64323b706121913f431"],["/2021/12/01/搭建wordpress/index.html","c2f539cdf43c3cc6ca3c84440e93e428"],["/2021/12/08/python操作百度网盘/index.html","79314f0feb8c4912a20769b5acbed6b1"],["/2021/12/14/js爬虫/index.html","687fc1e83805d706e0fbe1f7ca5b2936"],["/2021/12/25/为网站申请ssl证书/index.html","ac9c4c3fbfa7aeca031738d9224b78fa"],["/2021/12/29/使用七牛云为网站提供服务/index.html","0e0f434ba6c2a03c7d24e01a3dce142b"],["/2021/12/30/jQurey继续学习/index.html","05826632bf3540dafd2856e338df6d7f"],["/2021/12/30/jquery学习/index.html","ecbd1ebe7c563fb1bf3184eb124b1414"],["/2021/12/31/vue学习/index.html","302bda867fd6baf0ce926ba9a2557d3b"],["/2022/01/02/疫情自动打卡/index.html","560e84d6ac4ee8dfb87fca7a54b87c24"],["/2022/01/03/javaweb初体验/index.html","6f2b10b08c0c818b1164406816f5464b"],["/2022/01/04/codewars练习/index.html","8fb1771f2cb3245ba10912780dd51411"],["/2022/01/05/Spring学习/index.html","ea425648728a4f8d8d33aa7f36d397ce"],["/2022/01/05/vue实战/index.html","7c9f9a6979cc92208c4acecaf32fdf3c"],["/2022/01/08/gdb-gcc学习/index.html","2c6e00c0173a1d2290adca3869067a97"],["/2022/01/11/python-opencv学习/index.html","638653e3945c744b1808741687431d16"],["/2022/01/12/汇编实战/index.html","3591a2f09d5a16f146ee2f3646401e8c"],["/2022/01/17/pandas学习/index.html","5540b66e39b413e0ba2b3b353f335e9d"],["/2022/01/19/可视化图的工具/index.html","e2f8b8f4fd381f645f17eeb4e562d01d"],["/2022/01/19/机器学习入门/index.html","432e908ea21aeb2cc073e999ee13daf3"],["/2022/01/20/cousera-ML学习/index.html","108f7542d46c534a3b8ee32f6421171f"],["/2022/01/30/typora解绑后出现问题/index.html","6fd07e837da177302e156a3a59eefb95"],["/2022/02/03/NLP学习/index.html","2696254090c13198c1fe7e5add39965a"],["/2022/02/04/Web漏洞学习/index.html","acd59508bbd302cca4344d2535a1a6ea"],["/2022/02/04/pyqt学习/index.html","2e7952d213207e06ed40d4d25b954858"],["/2022/02/04/python爬虫/index.html","66304d903c3e72f584e9b0bd9aa66e77"],["/2022/02/18/Electron学习/index.html","774b52af1ec6f5e9ec5deea61a861abd"],["/2022/02/22/疫情填报字段解析/index.html","56d7b12dc37727d4e36b8a146e713a59"],["/2022/02/24/Bomb-lab实验/index.html","9febe251aea64489066ea16c805de5e4"],["/2022/03/05/nginx学习/index.html","f42d9b97bc6d3c6c3c0a77fb9a082203"],["/2022/03/09/汇编原理课程学习/index.html","d9e50bbbcadef440a33e6bdb1a9f5215"],["/2022/03/11/Keras学习/index.html","6626b4a029bb2f08c326fe474b56120f"],["/2022/04/01/graphviz学习/index.html","a71f307af2dad0b2a54a18c6f26741e8"],["/2022/04/07/django学习/index.html","51402946e4d55d5c48025def7718e63c"],["/2022/04/11/密码破解学习/index.html","8c1621ddf3a202e3bce77934108fa05b"],["/2022/04/12/flex-bison学习/index.html","a46405a65c0743a55dfdd589666afafa"],["/2022/04/15/pytorch学习/index.html","62967a3199638ca198731b491d05d7ac"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","e0d6eb55508de6a2d3baa90fc09e83a0"],["/2022/04/23/写一个音乐播放器/index.html","f3443806fd1c30d74258ed65270e6bd5"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","7a713671afde6ac943869453e0974588"],["/2022/04/30/GAN学习/index.html","352336df1b83ebf5989b0bbd9bbb3035"],["/2022/05/02/html精学/index.html","927c85395d6b7c0ff1e3c62c75d18489"],["/2022/05/06/write-a-compiler-by-yourself/index.html","e0ca8d07ddbf8d389f6e0459e9e5ca6c"],["/2022/05/30/acwj-01/index.html","5eed05f6881429a5eb7f9907c36d41fe"],["/2022/06/14/animeGAN/index.html","f553ff82035613e77b60c368f3ccc60a"],["/2022/07/09/c-与算法学习/index.html","ebc240e4fa698872adcd42c4bcb84e42"],["/2022/09/19/flask学习/index.html","fe72cb11e7c86281c0cace136f70cddd"],["/2022/09/22/cs224w学习/index.html","0f718d5c777d49389cae3f06d4301a4f"],["/2022/09/28/记录一次wp重装/index.html","ffa2c68eb87f3ef42490fc4d6518368a"],["/2022/10/01/Obsidian学习/index.html","b2a109f0cb7e5d65f4cd996a3beeb862"],["/2022/10/08/vue-element-template实战/index.html","661405edb5a31e99f028748849d67a83"],["/2022/10/25/vue网上商城项目/index.html","af246d9cac11288cbe1445d1a40202fd"],["/2022/11/11/leetcode刷题记录/index.html","63edc3e5ebb5be413811669c1ee99baf"],["/2022/11/11/使用overleaf优雅地写文章/index.html","0ccdcc29785d92dc844c3f430f848cbd"],["/2022/11/22/磁力链接与RSS订阅/index.html","0b83d10ed127a9a8db99575dac4c5716"],["/2022/12/11/uniapp申请获取地理位置/index.html","2f67e1d358834718d105c347929108d6"],["/2022/12/26/pr剪辑学习/index.html","baae4d1d4a13c0139dabd46dc8578891"],["/2022/12/27/css中的flex和grid布局/index.html","c128cc798f1175aa0f75d40994707534"],["/2022/12/28/Flutter学习/index.html","50655aa00ec55637012c73544aaf7b35"],["/2023/01/01/美化github首页/index.html","8059e8c29753b99113f11ecee9f01649"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","d0c71398e130511cfa574983cedf085f"],["/2023/01/04/构建微信快捷发布文章工具/index.html","130afb7c59eeadec83752131dcfc94be"],["/2023/01/14/dart学习/index.html","c16c7a1bd12d88c2bb78670e2a4c9ba3"],["/2023/01/23/闲置服务器BT下载影视/index.html","3ac20bbae6116818cca7541ab761f868"],["/2023/02/07/TotalCommander使用和学习/index.html","d9938a481c5b9bd284e632cdd35e2e43"],["/2023/02/13/docker学习/index.html","c19732fd8240636250a29b103a52a44c"],["/2023/02/17/DLHLP学习/index.html","d94c17f79c3685700f8afbc4764bb27e"],["/2023/02/18/学习purecss构建自己的css框架/index.html","d0304efe0945d849f3fa8a2b97163dfa"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","2e34fcc3f4ff8c996e6ab65fffa3d0bc"],["/2023/03/05/STL学习/index.html","610260eef2b980f8cee9f7a24f9d88f2"],["/about/index.html","41d1659ceb8279481f2dbecafbf72a9d"],["/archives/2021/04/index.html","96012c82f0d09a03e1a287f064312748"],["/archives/2021/05/index.html","858dc7101df12a127b55959d674d2bb4"],["/archives/2021/06/index.html","f2da645249c621bf1dab774efb898071"],["/archives/2021/07/index.html","c63b2adc7bea12eef558e88ea9679b13"],["/archives/2021/08/index.html","dfd031c79d13196cea4a0584cb1d2d3d"],["/archives/2021/09/index.html","8f5734fe5eb7ead0faf0bcac1318e67d"],["/archives/2021/10/index.html","ee11d6da2fb379ac5be35ed0cb08eeb2"],["/archives/2021/11/index.html","2c51f239a5b263051fa19e65d0d16ece"],["/archives/2021/12/index.html","a41586f7c18306948e80457884cfa4df"],["/archives/2021/index.html","08b47e2ecee234b21e325e7d6e2db1a7"],["/archives/2022/01/index.html","ab56dc8d86c3d631147f93c36b2a66f2"],["/archives/2022/02/index.html","c00ad4315ccd174add30a5086228f4f2"],["/archives/2022/03/index.html","babfaa9241d5636d6423e0d66658bac0"],["/archives/2022/04/index.html","908018e97daff303531f192aa424ba04"],["/archives/2022/05/index.html","ed60b3dd9ca77b8fbbb7e50707aedfa7"],["/archives/2022/06/index.html","67502353ee207d3ac2f2284171e0ec58"],["/archives/2022/07/index.html","85949b6c68c1972d69721b00b445c075"],["/archives/2022/09/index.html","af4631de0ec43a19f9c9be9105e5a488"],["/archives/2022/10/index.html","16b91b7dae875848e4cba877c4513503"],["/archives/2022/11/index.html","e36d860709a876a90452f12d46006fb6"],["/archives/2022/12/index.html","efd9fb22ce10e5b7cbc64b869192eb14"],["/archives/2022/index.html","da18fbff759bfcf5456951f293c84162"],["/archives/2023/01/index.html","80bc5e9859e9791746dceda60c532a7a"],["/archives/2023/02/index.html","1afb72852f3c34c939c4a6a45b363e32"],["/archives/2023/03/index.html","a9ac3fab6d210d9b4aaef6c94db916eb"],["/archives/2023/index.html","b62bb59e3c079f2d7a9d70476906e594"],["/archives/index.html","b6c3caed819598fde803ca75c05bddd7"],["/archives/page/2/index.html","29793ad46a15c6e324d656837fe14e6a"],["/archives/page/3/index.html","2ce7712935659bacca56db4ca040b220"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","72cc50edd9ad09619dd6fef2f98b2053"],["/categories/Linux-study/index.html","256d1b574cc9b964f0bd4fd6fa253351"],["/categories/ML/index.html","b63efc3caab7667de02fd26e427ad0c4"],["/categories/Nginx/index.html","fba7ac08f8e69494586c317ef16d7c00"],["/categories/Spring/index.html","b8426db900a8e8d5ed2b16859875835b"],["/categories/course/index.html","a4226301e1ce1c471c2409266d81b751"],["/categories/django/index.html","5ee2ba01e363d3b89925f41c7fe84bcb"],["/categories/fun/index.html","ddf81f3aa55944227793aa5dd4d1b860"],["/categories/gcc/gdb/index.html","4ebd0d924f0bcb36a797081df8111c6b"],["/categories/gcc/index.html","58f1b131a8df8d01f1b8d06696f187fd"],["/categories/index.html","1017661a645765362d4b9aafb6e35e77"],["/categories/java/index.html","9fe547e35c25335c7eb58a55977d68b7"],["/categories/python/index.html","30dee03a93a5fb0bf60fcc88966b5038"],["/categories/study/index.html","11070978ae47d5046f46ac76ffb025c1"],["/categories/vue/index.html","89238617a24e69ce3286a5cb375c5034"],["/categories/误区/index.html","191d7d0b51d28ebc917b0434737f8ec6"],["/commonweal/index.html","fdd28da0e93135834d7df7c8b9d75513"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5b3d61c5e5a31a4a6bd3efd2477cdc64"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","d94fb77d20916a7336d15fde21cabe07"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","9169758a8aec989ba634a38be50d56ac"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","0cda383066b9caa6a5f64dd6f93374e4"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","5461772d4c885a70c8f0a1e5bcc886fc"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","540a02526cf68f0fa7882ffabffec80a"],["/page/11/index.html","72b96378216f51104c1dbebc17c6ac7d"],["/page/12/index.html","b248cabb5086a627907fa20f6d537d0c"],["/page/13/index.html","91c35cb1fff97261649f7ae4fbbfed0b"],["/page/14/index.html","eca3c158cf206ba1e22536254a2ccedf"],["/page/15/index.html","547ba474c4b895144b054ceb5bf575fc"],["/page/16/index.html","34435c7173b23f35184ac5a9e45cac57"],["/page/17/index.html","c58e9a2121486394e64219ecdb8376bd"],["/page/18/index.html","75b526af2c3c0cd2b2a95217c9028470"],["/page/19/index.html","27498a3c7b5e4174f91c15085fa987b6"],["/page/2/index.html","d4986d841229edf55054f7a6607e61bf"],["/page/20/index.html","ec589d5817464c64d3dd8e9cb9c5477d"],["/page/21/index.html","0587a4ab9fcfc5a01c1fb66c730820ab"],["/page/3/index.html","03f3e6ca8dd1fa19dab652c72a094902"],["/page/4/index.html","ac87f8345e4b0020bb4004d5736dd3ef"],["/page/5/index.html","8ca401429d45964d00af339640f5804d"],["/page/6/index.html","de200732c2940273e62351a152761fe5"],["/page/7/index.html","f53468e2c1912d705f27cab4bd9dd78d"],["/page/8/index.html","70a7e1d0d9b50ac587ddf90088545f59"],["/page/9/index.html","2b143bd7c89c04ce7a13b2ed76af90c4"],["/resume/index.html","dae346f8bcf635d035493ecb7f8cf7b3"],["/schedule/index.html","ea76ec4488114f778c339eca43ad7e87"],["/sitemap/index.html","5b8824036dd7fbaed80738436ce95cbb"],["/sw-register.js","7530d367f35ac9c7a24d2be0a5b1a4a1"],["/tags/AI/index.html","6f957956b3d891d97fe379f1a05f7392"],["/tags/BT/index.html","a13bce865e835370c1867cde00977269"],["/tags/BaiduNetdisk/index.html","2ae9a780cd4e7c59ecede924ac88828f"],["/tags/Bootstrap5/index.html","f033aa428246fe3a5c8b37b88f3d06b3"],["/tags/CSS3/index.html","967d10c786a8a0b87c044f1bc772c058"],["/tags/Centos/index.html","9b4fc380ff3b0a88da685df00cbb906c"],["/tags/Electron/index.html","2809b78e6e4ade905999a0916696c290"],["/tags/ElementUI/index.html","f904402aa2bb3ba4973a9215691a54c3"],["/tags/Flutter/index.html","28852e90b55f3bb72a1908c616bad4fd"],["/tags/GAN/index.html","3c6a049d2f3f5f12ca6460a563501193"],["/tags/GUI/index.html","45da64c034254ba0627ae8dd5fa42070"],["/tags/Git/index.html","48631ed74326ce0cc686b66905d6a53e"],["/tags/JavaScript/index.html","40a7cc5db9c837f43c3a92707d20a3dc"],["/tags/Keras/index.html","726da062f0682f979136e42a1618acb8"],["/tags/Linux/index.html","6cc33109cc0779d92d3c129c91f5fa12"],["/tags/ML/index.html","2fe9b329a59e19392cc52f42c0e5f9bd"],["/tags/NLP学习/index.html","d194b9f1f968c37eed32e575232ca107"],["/tags/Nginx/index.html","8c455204082310f2ae5ca47461254117"],["/tags/Obsidian/index.html","18317ed4389d7fe23b9c995ed1b2ee9c"],["/tags/Qt/index.html","cbc1451f1b4b6b86665477aec79b7eae"],["/tags/RSS/index.html","a0b73a6f98f993d69176e3937c3bca8d"],["/tags/SSL/index.html","608ee90dd7a8af2da16e8e8e56e8cb3d"],["/tags/Scrapy/index.html","773a0dd9896065184571929a13994b47"],["/tags/Speech/index.html","5e1f49e34ee52db7c54aa1797a090051"],["/tags/TotalCommander/index.html","992c42a7230fc940782186894a62df42"],["/tags/Web/index.html","8e3eba5e02b90f601795f952f7a799b1"],["/tags/algorithm/index.html","a77dd66e28158f8c63d55e3460864502"],["/tags/bison/index.html","083a57888cc6181b7140a4394bd3f97c"],["/tags/bomb-lab/index.html","db9c1f380724d3358e12b1657d0079b4"],["/tags/c/index.html","bd465694e45cddd6a7df4b5bf319bec1"],["/tags/cheerio/index.html","17d65b9b7cbd20a8d6c0676d42be15d4"],["/tags/codewars/index.html","85633b7b270dc71bfd6cc71a7d6d86eb"],["/tags/compile/index.html","ae0dda700fd087894233712a028ee53e"],["/tags/compiler/index.html","250da153e249e1d443b2db85b50af233"],["/tags/cors/index.html","a42315a8b35d5b0ddb220d3468200281"],["/tags/course/index.html","b3eacdee32e5f43ea13cb707faccbf1f"],["/tags/cpp/index.html","cb06cf9850b7f208e7ad136e57c95e0f"],["/tags/crypto/index.html","c9d46fd2f26ea64a754012d01d182151"],["/tags/csapp/index.html","32e62bb2952644296dca3ac65c1f1050"],["/tags/csp/index.html","8a037f6f0847f24dec7d0bfc1b29c089"],["/tags/css/index.html","dd6c8f7a17bdc5db84a76df997655e93"],["/tags/dart/index.html","3c0f6beab171dc97f30fc93f1fadcec5"],["/tags/data-structure/index.html","7cab73ec774ad513f38e3d3e7ebdfdb2"],["/tags/database/index.html","ef610360b6b3668e72d87a618658e7dc"],["/tags/deep-learning/index.html","ad152aa5b2ad5550b0e76d0fb6732f38"],["/tags/django/index.html","85602d243a742318945d299f1366690f"],["/tags/docker/index.html","7a79232631b4089519136e11f643c5cc"],["/tags/dwm/index.html","41486677d34ee724827fef5be1f5bd11"],["/tags/exercise/index.html","98ce5faa2cd638628d1dfd08f52de1fe"],["/tags/filebrowser/index.html","c70aee03c1fb070f28d87c2e5f6becc2"],["/tags/flask/index.html","a5fd52f09d74cbba9e6a000acadc682b"],["/tags/flex/index.html","965eacd585c8ee514f203436659ba90b"],["/tags/front/index.html","b2ae77ae6e98beedba3023c0ed3afd9b"],["/tags/gcc/index.html","2dac594b6831dcee5a0020cb29b41962"],["/tags/gdb/index.html","2c31aaf597d551abf5beedf2cf4134ee"],["/tags/github-profile/index.html","8b2e23ff57c851122e5f04baaa2c8cfe"],["/tags/github/index.html","216eae98e293e0cce995a87d9386c2f7"],["/tags/graphviz/index.html","2b2985600c21adb52eac1a56da0bcded"],["/tags/grid/index.html","9292e760cab9bb83778df88d224cfceb"],["/tags/html/index.html","ad1ca975e0556f65c5294f502394a631"],["/tags/i3wm/index.html","1fa9f6f4126264cb4936fc0ea2d494c5"],["/tags/index.html","321c4044e4b891266d5115076dc90c1f"],["/tags/issue/index.html","ee2122ed7c029488e5c4d97815ec2f85"],["/tags/jQuery/index.html","9462c1723e86f7618117a42f03c3a396"],["/tags/java/index.html","05889a81d48bac68368095de82aaf599"],["/tags/js/index.html","238db2a47d1ecf979b926a1de08fc4cb"],["/tags/latex/index.html","152d4d5f4c31c7b9705e31d14e5e7904"],["/tags/leetcode/index.html","30727a923c99afa9f053bafc9523a9c0"],["/tags/lex/index.html","426eab0f1aa871102d6e638c257f7510"],["/tags/material/index.html","7935c878e0289c16650369aafba61189"],["/tags/music-player/index.html","bbcca8363951f5fa18411ad9b7bd10d4"],["/tags/nodejs/index.html","5041c93beef01dbbdbd3b1f620aacd0d"],["/tags/noj/index.html","448d787a5febbec1b6d3967da7d373bd"],["/tags/opencv/index.html","d3095130fc00c47b095d0116d073da9d"],["/tags/overleaf/index.html","69069072041b18d143efe447c6550cdf"],["/tags/pandas/index.html","7e36fabef217868d03db188cdd5a9209"],["/tags/premiere-pro/index.html","5f9723e1c2e969f5d1a478134c16370a"],["/tags/proxy/index.html","d51b0a85859a8713ab6c13ada91f9d1c"],["/tags/pure-css/index.html","02b3ad5bc047c56769b7797de11a7ab5"],["/tags/pygame/index.html","093e5b82204f5aa3c7e59a9e0175bd65"],["/tags/python/index.html","95db35ddf78f481f858a2ff42d8ce50d"],["/tags/pytorch/index.html","37d58f3b701a0a42a6500ecf5f4917b2"],["/tags/reading/index.html","f7061c5b22e4f61e34136987ae109345"],["/tags/request/index.html","d03aac5ca8d8806d2c48390f3a76418c"],["/tags/requests/index.html","4c170ccab84d16a1434decf145970cde"],["/tags/security/index.html","c45e12378323e409abbca80c2ac54407"],["/tags/shell/index.html","2c5788f052f83ef6c1bb03673fafe677"],["/tags/sign-in/index.html","1a4832dac5ccdf14fd438beddd648a57"],["/tags/socket/index.html","2ca84b38a2b8087b396a1f9d2ce8b9af"],["/tags/spider/index.html","501a75c587045edf715777c503fa073f"],["/tags/splash/index.html","115eb75450a14e092ef23fda11c837f0"],["/tags/stl/index.html","00ad4f54e06d4ee6afa6fd58f21dd2a3"],["/tags/superagent/index.html","085739420b61f8295b1483c3e1ec6477"],["/tags/tensorlow/index.html","377cfec21205369465ec1e0909971082"],["/tags/tex/index.html","338c13287745c6dfc162d195fc2a5b19"],["/tags/threading/index.html","5e15381e100cce1183700f82f19919a0"],["/tags/tkinter/index.html","773e4fe8ff93ed9887d7020544bbb466"],["/tags/torrent/index.html","03ba5db472dd3e1be900a131e9b12809"],["/tags/tutorial/index.html","c4f57483f9e42ae54f2bb37cd1be2b60"],["/tags/typora/index.html","95b1e8b407d3b0f63515d4d5b37889e3"],["/tags/uniapp/index.html","0fbb50fa816bc6e2a313ca26cfe9ee59"],["/tags/vite/index.html","80689ee6486ae3a54777723f7ae874a2"],["/tags/vue-element-template/index.html","c8c1d9dc63b67ebf7b71f0f46805b69e"],["/tags/vue/index.html","4d9ba6b7b3aa262733233cd4c3b57dc2"],["/tags/vue2/index.html","1f125052843758e9a1eec9230294f6fb"],["/tags/vue3-x/index.html","867e733c0f2f5a9f10c0201376ebe478"],["/tags/wechat/index.html","4b065b2018c945a6808f4c98cdf6b68a"],["/tags/wm/index.html","854af25a530a3ab41a737df983b8d371"],["/tags/wordpress/index.html","7d61175ab2a99e278d25e03788f0ea84"],["/tags/workflow/index.html","c23c86fcb02dae981d68098278aa5890"],["/tags/xpath/index.html","4733772aed27b4af35ae7c43792c3458"],["/tags/yacc/index.html","8c40eae7f7b43ebb73c9e207e2a0bc4f"],["/tags/zsh/index.html","7228b64cde4bc754b5488a87d3e50a4a"],["/tags/七牛云/index.html","854a86280d5197ba2f240382414bd2c0"],["/tags/函数/index.html","12e26933cd857b64a761877996f45a26"],["/tags/剪辑/index.html","73de00939f38b176c47ae39d670380c0"],["/tags/存储/index.html","a39d8d62ac24750a7db2b9efd7d015a6"],["/tags/实战/index.html","4ff20d305bf966ab9c914e3f3f414dcf"],["/tags/工具使用/index.html","978cb806b1a015390de7002d96efce67"],["/tags/建站/index.html","084906122016441acf4d89723677f9b9"],["/tags/微信小程序/index.html","f66a0ebd3d898d46d02b84b35ee82e0d"],["/tags/指针/index.html","ed63f897c6196fab0568eb724ac4c9cd"],["/tags/效率提升/index.html","c816137f9b094d2ffaee2620dabc8cb3"],["/tags/汇编/index.html","214061303f735c68bfc056ced532c11e"],["/tags/浏览器/index.html","b5a964496e0dfccf47c3d04ac43dd430"],["/tags/爬虫/index.html","ef87b45d618c3bcc082a331b5f202aab"],["/tags/算法/index.html","81992755b60271e0d43e85b17ee67217"],["/tags/编译原理/index.html","1167ceff0af899d5d00d9e3aea3039f7"],["/tags/获取地理位置/index.html","e3868716369e5f07d65aa2bb75e55982"]];
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
