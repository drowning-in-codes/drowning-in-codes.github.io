/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","b675fefac402a8d36d28ebb48967ac25"],["/2021/04/20/稀疏矩阵/index.html","3500edc1c9d656f72c58083719c28939"],["/2021/04/23/广义表简介/index.html","a60dcce6e3f6fb1ecdb828f1236870da"],["/2021/04/29/关于指针和函数/index.html","43f766964b6529d05e984b5716e57b24"],["/2021/05/10/哈夫曼编-译码/index.html","3f0cc02ea32078d7d6bc8a144639c7fb"],["/2021/05/17/数据结构noj_2/index.html","6b98e6aa6267b433530bc8297ee915af"],["/2021/05/30/数据结构试验/index.html","1b5d25dcbd957aa79a8be47bad0aa748"],["/2021/06/12/数据结构noj-3/index.html","d73a7ffb250e58df622d3509d61b643a"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","c7cb13a4883fbfc86ff1c1dc2a5ab761"],["/2021/07/08/课程资源分享/index.html","74d40c9702c11fd8a2949cd5ef42e977"],["/2021/07/20/Scrapy-下载图片-文件/index.html","e9118b3f147bab41d34e9b0bde4adb4c"],["/2021/07/21/Scrapy-动态网页爬取/index.html","968840aa6d576d7ac922e8b83d354961"],["/2021/07/21/疫情打卡/index.html","9257da658f8310426ead68319cf4ab52"],["/2021/07/29/Scrapy代理设置/index.html","6aa67ead28c91e1e408d646125dad897"],["/2021/07/29/数据库认识/index.html","69f998cb6f5b9ee0e5593b147c81e5e8"],["/2021/07/31/Python多线程学习/index.html","a4924786551fe9d643d66d7c5663f7ac"],["/2021/07/31/tkinter-requests练习/index.html","b70af63de884ae3dd51147bb47355522"],["/2021/08/10/Git学习/index.html","520d065f2793345fd7fad5a8313fa588"],["/2021/08/15/pygame实践-1/index.html","8a6b5e9ddcca8d37c53dbb21a099ee41"],["/2021/09/06/微信小程序开发/index.html","02ff5f7f4a9d8a4bbc5be945d2f17407"],["/2021/09/21/命令集-1/index.html","e705ee94e064ebd0e942b396a66c0c36"],["/2021/09/21/命令集-2/index.html","b9a11e223889247d3b0f28fe3ce0891f"],["/2021/09/21/命令集-3/index.html","86e7e1f4310f207ace0bb4837dc1d149"],["/2021/09/21/命令集-4/index.html","ebfd54f1fe71a36226851f8c4cc923ed"],["/2021/10/03/socket学习/index.html","28f0ab3fc3ced0747a4ffdc8e0df2aac"],["/2021/10/10/dwm入门/index.html","414d4cb846c7cd8fb62133718ee05c6f"],["/2021/10/10/安装ohmyzsh并配置/index.html","109302be4ed306e643c2a80e495b8935"],["/2021/10/20/css学习/index.html","48cf76dd66f13eafb703040b2e5e961a"],["/2021/10/20/wm入坑/index.html","04a21e7662f01944eeb4ade8199cf6a6"],["/2021/11/03/微信小程序学习/index.html","777a56d60b8805d1f063c577d09c9ff8"],["/2021/11/04/css揭秘/index.html","35a55c0c7bed8d5b03a9a5c2db2c9860"],["/2021/11/05/css-练习/index.html","983361abeb693ed939719a8d8350529e"],["/2021/11/21/命令集-5/index.html","7f9d43a13d2876c8739f1bf2f597cc76"],["/2021/11/21/命令集-6/index.html","d8a80884b232f3baf02941d0e453086b"],["/2021/11/21/命令集-7/index.html","77ea4934f64010682185cfefd2a1ba31"],["/2021/12/01/搭建wordpress/index.html","96d1de27b095499f729a3e230446b53d"],["/2021/12/08/python操作百度网盘/index.html","89880de9b4476fa1881dd640bf4d2104"],["/2021/12/14/js爬虫/index.html","cce73bff09efb87de086a00b0f187256"],["/2021/12/25/为网站申请ssl证书/index.html","33fbb1a95ff7b8d5eba52ce3c61d2158"],["/2021/12/29/使用七牛云为网站提供服务/index.html","a60361a3573445c67dc576f3bc8d07a2"],["/2021/12/30/jQurey继续学习/index.html","14a139f497dac16878e2a35fac6cf92e"],["/2021/12/30/jquery学习/index.html","c13bb63403c40a916388db3f2963f85d"],["/2021/12/31/vue学习/index.html","ca2cb4d2dea4547f7cc9b88aab64210c"],["/2022/01/02/疫情自动打卡/index.html","9477642ac64f43f9d714f8499eca33a7"],["/2022/01/03/javaweb初体验/index.html","c8e517ef13175411d919fdc1545ae09f"],["/2022/01/04/codewars练习/index.html","b1711188c3e1359e6c048a469f5a7019"],["/2022/01/05/Spring学习/index.html","2a49bb960bc26f3c63d22414f6f7b26c"],["/2022/01/05/vue实战/index.html","ec5e3b6e515e24d9ebc35dcc57bbd399"],["/2022/01/08/gdb-gcc学习/index.html","c99b99468f98ee5b32d1ba6704bc0663"],["/2022/01/11/python-opencv学习/index.html","34694ff328dde0e7252e6a02e30e34bd"],["/2022/01/12/汇编实战/index.html","644cb819d4abd2e9eb5f8954ce1999a5"],["/2022/01/17/pandas学习/index.html","62946d25f6bb6dcf3574b0cdb8e08c2d"],["/2022/01/19/可视化图的工具/index.html","a857a300c4ac38eacde45c9d6dad25df"],["/2022/01/19/机器学习入门/index.html","57ae7e7d7359d8ba9f245c4602aa21eb"],["/2022/01/20/cousera-ML学习/index.html","b8f40337634101214a709642dea22c5c"],["/2022/01/30/typora解绑后出现问题/index.html","3a5f7848f1ca91fae9b601ab517454a9"],["/2022/02/03/NLP学习/index.html","8ca200166a619ab6fdb1111a3449a036"],["/2022/02/04/Web漏洞学习/index.html","4401c3ea7303e81fbe41090685df7a34"],["/2022/02/04/pyqt学习/index.html","e8f438ccc725cdae7ca12bfef037217b"],["/2022/02/04/python爬虫/index.html","41305fb2153306d60d07434fa30d8a81"],["/2022/02/18/Electron学习/index.html","fc033d60a40522edfeaed55fa4503d47"],["/2022/02/22/疫情填报字段解析/index.html","7731042eada8f96ff6889ad3b57756e2"],["/2022/02/24/Bomb-lab实验/index.html","f63db4ff35cdb45ccccbcd642b3f544b"],["/2022/03/05/nginx学习/index.html","2cecc116f7c574dfa72b151f3ad7de20"],["/2022/03/09/汇编原理课程学习/index.html","9a8a78fee7acf9a7939a33322e853a90"],["/2022/03/11/Keras学习/index.html","a306ba8eb6b88e3a5caab6203f97aa09"],["/2022/04/01/graphviz学习/index.html","a1befce5a49b2c2b0478f47ee0f98f06"],["/2022/04/07/django学习/index.html","911342955b77908b4f5b8af87cc9c486"],["/2022/04/11/密码破解学习/index.html","163666f7e02640c1c30732bab5ba1fa0"],["/2022/04/12/flex-bison学习/index.html","e207d6070e776a6dc2e351c433681bb5"],["/2022/04/15/pytorch学习/index.html","0d77035d9f84583107ab081201eb8143"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","ced3da4b626c07b7f4774b9eb1073d56"],["/2022/04/23/写一个音乐播放器/index.html","bda6ae788ef67ec4f81b81f1ba2945f8"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","e6f6fa7b370c44df09e220816e7bc47d"],["/2022/04/30/GAN学习/index.html","a3b4f887f907fe3c30c2116e8c069081"],["/2022/05/02/html精学/index.html","dc8890de8d4d3e08c90713d69951161e"],["/2022/05/06/write-a-compiler-by-yourself/index.html","fec00303d8035d0703917bc537a6f5e4"],["/2022/05/30/acwj-01/index.html","bbad9e998b3e0feb32a307b86cac9b32"],["/2022/06/14/animeGAN/index.html","1cc7961350c0dea952f0ee68f4bf8ccf"],["/2022/07/09/c-与算法学习/index.html","04cd6c5dff01b21dbdc50d60d852e57f"],["/2022/09/19/flask学习/index.html","4a737e10debadbbcba63149489c7d6cf"],["/2022/09/22/cs224w学习/index.html","2f9df545483857076fa8ca17323e78ca"],["/2022/09/28/记录一次wp重装/index.html","b8b90e0db584ebd04d095a0ac35f9e2c"],["/2022/10/01/Obsidian学习/index.html","4f2cb74a1b47c011b9e4f1bd56552e51"],["/2022/10/08/vue-element-template实战/index.html","5d4b4242febd3fce94020820a76f9c61"],["/2022/10/25/vue网上商城项目/index.html","b65a7d3958729fd5c2f7a0975bc0b5ed"],["/2022/11/11/leetcode刷题记录/index.html","ff6e3f1dee174cd6519aa8f697be9556"],["/2022/11/11/使用overleaf优雅地写文章/index.html","a7154039b6868272855420d6be5f1b13"],["/2022/11/22/磁力链接与RSS订阅/index.html","08c60f73c9c5dcba2bd22f92cbd56aa8"],["/2022/12/11/uniapp申请获取地理位置/index.html","cec7180405b463aacb19291458d9b1cd"],["/2022/12/26/pr剪辑学习/index.html","852e251931ec1c0ef5f26b0fb60bcf4f"],["/2022/12/27/css中的flex和grid布局/index.html","cb4b2606e54406f5ad5a3898c1e92471"],["/2022/12/28/Flutter学习/index.html","9381244f233d8e63c80413a1a65c0f19"],["/2023/01/01/美化github首页/index.html","fb01c42b2d1f740c75c0b4b194b25548"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","f3563fb77ec2c5286ba29c3eed386037"],["/2023/01/04/构建微信快捷发布文章工具/index.html","42b6ee6d178cf716af032df9f679e093"],["/2023/01/14/dart学习/index.html","8419d8d70f617c4d704ca7cfddeb1924"],["/2023/01/23/闲置服务器BT下载影视/index.html","3132b3deac8214da5ad088733cfe6e6c"],["/about/index.html","4a1222b9a663dd3f2430639688dc3454"],["/archives/2021/04/index.html","58b8b6c06780ec132ef0bd48d6e5a05a"],["/archives/2021/05/index.html","93d0f02134b654c09c1c4afc8ce63e57"],["/archives/2021/06/index.html","5369cf6f077afda5e7948221355035cb"],["/archives/2021/07/index.html","be25b7da99ba273c971f7b5c2aa97dfc"],["/archives/2021/08/index.html","82edca9bcfcbf6cd859aa3339415d8af"],["/archives/2021/09/index.html","da8cf83eb44e11454b2d9bd84f3be7e9"],["/archives/2021/10/index.html","8eb9daae714b8194bb82ce7095463b43"],["/archives/2021/11/index.html","cae978889791bb3d89a11151cab6c74d"],["/archives/2021/12/index.html","dd29f922adcfadf5335b5620d0bd38bb"],["/archives/2021/index.html","56bba77e160f60d1e6a08523dd5e65ae"],["/archives/2022/01/index.html","9d9ca0e78c34e2edb77004122b0e2a9e"],["/archives/2022/02/index.html","6bb4d5679b38f3c56f38de8c0280899f"],["/archives/2022/03/index.html","504dd6d616d8f9be7af024cbb92f910c"],["/archives/2022/04/index.html","fade5b65690ae33895b398cb16a781dc"],["/archives/2022/05/index.html","7d14406bdb85d991eaf68fdcc9bc5fbd"],["/archives/2022/06/index.html","f1f5036bc66e53bbcabc41789c4b38da"],["/archives/2022/07/index.html","6dd86d3197d2feb73bf57b2569d4a8e1"],["/archives/2022/09/index.html","cc76ceab38acd6b659135df0e7eb4306"],["/archives/2022/10/index.html","fb8688e47d1ed99c1c9c539f64387bcb"],["/archives/2022/11/index.html","9f593619beb18465176e470ace22174a"],["/archives/2022/12/index.html","bddcdc78cb20242dfc1fd449032f36c1"],["/archives/2022/index.html","0b672e8a9dec8c8b4b3a821910604b74"],["/archives/2023/01/index.html","272a3291cf6183fee140f0eb70cff3b7"],["/archives/2023/index.html","3592ba27794aae932340e45c7deff380"],["/archives/index.html","30fe9ff5b0046e9ffb7f1a963c5e2e57"],["/archives/page/2/index.html","72c26fcf0cf4583b3c8bd3561ac202b4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","74ffd9a2ee384ab8943a3ae463986a71"],["/categories/ML/index.html","03b9b852ba103a8cc18606c01f3624cc"],["/categories/Nginx/index.html","46e5b8b9db4b53e1891c7404c4176da1"],["/categories/Spring/index.html","b9422982e8aea8f291c19a1afbc76729"],["/categories/course/index.html","4fc5760a247062d2720aac9eccf7cf64"],["/categories/django/index.html","8d4306bf93eda39727a1deb454a76f1c"],["/categories/fun/index.html","cbe9f9a9f39ce17c05d195adfe6a24b8"],["/categories/gcc/gdb/index.html","2c7dc03e917256c8733d815aadb5e345"],["/categories/gcc/index.html","0487351ac3780d4afee967ab1cbd7465"],["/categories/index.html","ed7996403e43302c28aba1a4c7d43685"],["/categories/java/index.html","e137a32f995515fce2c4f743f6c9b970"],["/categories/python/index.html","9cf12f090b4cf78e1a824e2911d04f37"],["/categories/study/index.html","7f744cb64b6c57d99410cbeaa3158764"],["/categories/vue/index.html","d3401ac712d99c9c44c6f0f3a4a2b6a0"],["/categories/误区/index.html","d3669d7893adee69859206222178c25f"],["/commonweal/index.html","e3a31bdbfbb3541e645add97ec65c2c1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e97f753b98267910ae4a8951495bc71"],["/home/index.html","075454d571efa422bb8e55e3b6401271"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","d72626d18cf941b5b9d4d22f10ea20e7"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","c373268ed753773fecb6d3d9458e2722"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","7a9b114bd15847ac9a0604a5284cbe8c"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","7d7769ec3849c54a950c2762521d5690"],["/page/11/index.html","f0e8636ff44a7997b2c640f78e7ebd27"],["/page/12/index.html","8c283a25a272c9bdc1b0997f5b1f718d"],["/page/13/index.html","f49c9d3c7e720d2d353bf496341977e6"],["/page/14/index.html","4acc6686a3c14799ae96e992b89a217a"],["/page/15/index.html","cdba62d0e4540673dea8775223d22ec7"],["/page/16/index.html","45b6b4504bdd17c47cf0f3ba5891af02"],["/page/17/index.html","23252cfcdb571261b2c727b715969055"],["/page/18/index.html","4f2587fd7aa9f7dc44868cbb054df013"],["/page/19/index.html","5ce3dfbf5e75d98db54bdefc94425493"],["/page/2/index.html","ee6a00ff1952ac3420b07461b2f05b32"],["/page/20/index.html","fbf8d0dd3250a4f0395df726e85f3f73"],["/page/3/index.html","71139639e343ed4e83a476f947a7d217"],["/page/4/index.html","e5253d5dbe05aa8ccd610292c5ca8f5b"],["/page/5/index.html","dd740a13d2640578d6314b04624b881d"],["/page/6/index.html","23b01a95c882ebc88deb23ac285d1a54"],["/page/7/index.html","92a3ed7adb469c7da255493f765d5fb3"],["/page/8/index.html","79d7d249f14a0c30af9f611adb45427a"],["/page/9/index.html","2454e7b939676793bf692990a948c007"],["/resume/index.html","a095f8299611610d504affc4dffbcd5d"],["/schedule/index.html","26ce54479417b54355c7823bde35e7c5"],["/sitemap/index.html","9cd319849a0faab20f130dc5ae7d36d3"],["/sw-register.js","c60381954fa271c1bc780864526b2761"],["/tags/AI/index.html","547a1c9f2bf003df82cd6339c0872a1c"],["/tags/BT/index.html","2374c70cc334410ec4614f001188f087"],["/tags/BaiduNetdisk/index.html","fc5b3d558f9b2cff20b83f4821ccd974"],["/tags/Bootstrap5/index.html","0bfba55087dbae15f2923bdb85c1ef1f"],["/tags/CSS3/index.html","0d063a47f013e7fda556518138ed9dc2"],["/tags/Centos/index.html","0abc2dc97dac53ec7cb991cf1f9e3e21"],["/tags/Electron/index.html","806e214b9ec17aafccbdb978f897827b"],["/tags/ElementUI/index.html","d72ccebaa5d01c6f41b5871387daa7c8"],["/tags/Flutter/index.html","ab993fc0de6e71c2bd17d313c13119af"],["/tags/GAN/index.html","9e039c590918cbed01b613bff272c82f"],["/tags/GUI/index.html","182023852370dca2530c8e1cdf377738"],["/tags/Git/index.html","16ee44d24cf9da0e410844d56b926de1"],["/tags/JavaScript/index.html","7c45a330b23e16b33e6464d6efd8760b"],["/tags/Keras/index.html","42d9a750a6a5889a9fde0f08be0960b6"],["/tags/Linux/index.html","72f1a747aa4b91f74eda8e3942553aba"],["/tags/ML/index.html","41a3a6e80c39489c31c461ddd9f8f429"],["/tags/NLP学习/index.html","572fa8e4ff57745431ad612611281c72"],["/tags/Nginx/index.html","83d3790853d746139deaf62971e3cc05"],["/tags/Obsidian/index.html","81d1b967607103e05b20a6be9448e9fd"],["/tags/Qt/index.html","f700ebb9c3621d96c188845156036dad"],["/tags/RSS/index.html","3978a484399381671a32e6487c604f2d"],["/tags/SSL/index.html","be8d0c196504a0b4f5c168867d16940e"],["/tags/Scrapy/index.html","3457d42f031c9e85f104e46a4c156c1b"],["/tags/Web/index.html","f351fb9231b5977c5ab9afc9129e85f9"],["/tags/algorithm/index.html","7c51d5aa9332bff300564ffca0546e35"],["/tags/bison/index.html","2faaaa7de014624ce9f6f46f626e3822"],["/tags/bomb-lab/index.html","8300f73d42acab78d3b40fad9ad3e116"],["/tags/c/index.html","c5747f6022818d00223e7cb66a3b171c"],["/tags/cheerio/index.html","3a449249ab4c96535aeb4edcc3c848ae"],["/tags/codewars/index.html","bdea8282ff4b67caafb6a334d4a271b7"],["/tags/compile/index.html","cfec16c56d9e7a0afc481ac64bc26d84"],["/tags/compiler/index.html","d790486f60c4355c57711c9d6d63279b"],["/tags/course/index.html","184b00e62c6d8f1397dce66ee3d7972e"],["/tags/crypto/index.html","6dc1e608a8ec24a98474acaef9d7af21"],["/tags/csapp/index.html","4f97843eb813b410dc34d0cdef780dbe"],["/tags/css/index.html","4ed12d67f077140ee1ccc704e4023fc8"],["/tags/dart/index.html","bcda84989a51ab542202067f7d523a65"],["/tags/data-structure/index.html","f59ff012d9c6467cd95e35572a0fa851"],["/tags/database/index.html","8fa7f3b3bb038abd84527e04c5a208e7"],["/tags/deep-learning/index.html","760ed1b600a7a3339fa55cdaa7234a37"],["/tags/django/index.html","b2a7c3985c4aa4d1167128599736a294"],["/tags/dwm/index.html","82650cea4073e712f9cfca87149b1939"],["/tags/exercise/index.html","bcd9708448c09b7d594189d5925151b0"],["/tags/filebrowser/index.html","e7ab10eb7e57c7e34438722fb726c8ea"],["/tags/flask/index.html","f4e62dc8219cf84056419f9844a466fe"],["/tags/flex/index.html","dfbf884caf8178f2762e3ab09a7afe8b"],["/tags/front/index.html","2392ac2a9a6dddd726aaa30b3fb9c31f"],["/tags/gcc/index.html","c24111e1503038d5290a0388ff948f73"],["/tags/gdb/index.html","783634c00f20583e3cc59ccd5b0d4b63"],["/tags/github-profile/index.html","08fe04e2db83d3ce2142c3aec1927259"],["/tags/github/index.html","2d08342a97962d953bfc4195967c1049"],["/tags/graphviz/index.html","206c12a1392dc926ff07120e89a25efd"],["/tags/grid/index.html","b6d36d3b334046c3d0089382e23b14a2"],["/tags/html/index.html","a6b491a052cb0e914ec97a070a071e20"],["/tags/i3wm/index.html","8877eb4e73bdb01f90a41ea3db284533"],["/tags/index.html","6dab25be54288db239d8c66306958db8"],["/tags/issue/index.html","6d9ea37acc132ab1def313ddf2cb2a4d"],["/tags/jQuery/index.html","191f4b452aed44809a668357896a1e32"],["/tags/java/index.html","e0475f34bbad5efd64ba904af96e8a0e"],["/tags/js/index.html","4452e9745d4720d464b4bdf39c5f1946"],["/tags/latex/index.html","c420729ac2aa8a893a81fe0c78b0b329"],["/tags/leetcode/index.html","14ad77c929bc8e76d2b959f9cd08ff8f"],["/tags/lex/index.html","ff1afbcde5d349a472d4dfc548e736b5"],["/tags/material/index.html","ec5103dc0a730b02b7f7f73a7f65ff2e"],["/tags/music-player/index.html","315309ceb3e4402ecbed6230ac93fccb"],["/tags/nodejs/index.html","0a6249ea2fa0bc10ac52a480f0614c4a"],["/tags/noj/index.html","5afdd3dfcd4803018470f3328ae20f2a"],["/tags/opencv/index.html","5142b1f4dddd008fa8c255bdc7cc80ad"],["/tags/overleaf/index.html","15a7cc043793082f2a659c914b91afd3"],["/tags/pandas/index.html","b043e84497e6ad33162f889566b53336"],["/tags/premiere-pro/index.html","5aec44c3ebb1c09495851791904ebfc4"],["/tags/proxy/index.html","f6994f054a9d895f43cbbe82ac2bdcb6"],["/tags/pygame/index.html","4f5be509b9b69db2dc632434116e93cc"],["/tags/python/index.html","d06bbbd0c38f713be912b73a473f3b45"],["/tags/pytorch/index.html","cfbe6cd72d6e8e8afeccb0f1cb617516"],["/tags/reading/index.html","c1e7f530fbc436de0386e21603c84ab9"],["/tags/request/index.html","81d2fcb5956f24c9f57c7aa7257a7664"],["/tags/requests/index.html","305cda8d2db06dd79a2d9b410d1eaaa7"],["/tags/security/index.html","bd7dfc796600bfcce5601e80ac2b9033"],["/tags/shell/index.html","7be1de85164b0a9abb63c48fe784c9fd"],["/tags/sign-in/index.html","eab96bf3818f4611011a116680ed8302"],["/tags/socket/index.html","4e43c0278878493234a0694a99954110"],["/tags/spider/index.html","5d2cd58ba087caefe12ff1dd53dbb6d8"],["/tags/splash/index.html","9114a5b46bf9ff1ad09122ad16b9124a"],["/tags/superagent/index.html","c15f980de70fb33d5b3cfd0448d9c6b2"],["/tags/tensorlow/index.html","96a8f5bca9075ca4028103a6f8d8dea4"],["/tags/tex/index.html","a6002ed0c3988629a1b789b7d237b754"],["/tags/threading/index.html","5377f0c6ccfa9b2c1c5429dd7fffb951"],["/tags/tkinter/index.html","f4867b68d483ca4c12fc2f695b444d95"],["/tags/torrent/index.html","06c8a7ba62469a17091c095ad8555d64"],["/tags/tutorial/index.html","05a8fb8b63116e5c1128c47a832db96f"],["/tags/typora/index.html","abcbb11f51ffcbab17bcf54961e16cd1"],["/tags/uniapp/index.html","f45e48665840d08fd3e3b1baf984ecba"],["/tags/vite/index.html","86820200850ea5b68f1d1db4a612e1b5"],["/tags/vue-element-template/index.html","702cab7f971889f54b1ab3e8f3b4894d"],["/tags/vue/index.html","764a5a9e22e714a89f81ab1013733f3b"],["/tags/vue2/index.html","872bb339cf8d9f555cdb16c2b127e135"],["/tags/vue3-x/index.html","fcf20d98b8e97d7a058d7328e21af0f4"],["/tags/wechat/index.html","ed37a65a1963639ce4136f62805d35a3"],["/tags/wm/index.html","85f1c73a16b09d227040c7382ff06de4"],["/tags/wordpress/index.html","f05baf1d63fd4e44832bf640b71c405a"],["/tags/workflow/index.html","b5b64b43d8be8536cfb04f6558f3ca08"],["/tags/xpath/index.html","d0b08fef1f6b6213c4cb695ae70790c4"],["/tags/yacc/index.html","6a48a099335775ec864237c005a88587"],["/tags/zsh/index.html","90ed7a14478ab81453a509721598d52a"],["/tags/七牛云/index.html","a6878b8149b072c00622eddbc4a380ad"],["/tags/函数/index.html","3e0022f9b661516f2caaf5e19029c4dd"],["/tags/剪辑/index.html","745e0b0e40e27d50da86dae852d12795"],["/tags/存储/index.html","86285fc433fa8505f19737b3081b2f89"],["/tags/实战/index.html","b10db4404eafba79722ecafe42793f38"],["/tags/建站/index.html","852d20333c8045282229c9a4bc280b10"],["/tags/微信小程序/index.html","d587558efb84dfdb1e23f784a42263af"],["/tags/指针/index.html","998c9dc75185c0d0713aefcf6cec2203"],["/tags/汇编/index.html","ec037e14bf7fa9c61423398c347c7ab2"],["/tags/爬虫/index.html","182ddafeb5d3016fa75ad38eea5d1d56"],["/tags/算法/index.html","d508e399cca529b19534fa997c24d35b"],["/tags/编译原理/index.html","9df7ef696e990893f422836ad4f03dcc"],["/tags/获取地理位置/index.html","d2c4ed78e0659125c0204181aa4293b0"]];
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
