/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","9dd27237f47b7f75bd4ad744bb844f91"],["/2021/04/20/稀疏矩阵/index.html","1a64a7aefb7c2373e6a1a14909cf8fc0"],["/2021/04/23/广义表简介/index.html","35d78db34a19b1a9aa6abbb225779a30"],["/2021/04/29/关于指针和函数/index.html","9703db5c994c892f5ad8485068b9d2ca"],["/2021/05/10/哈夫曼编-译码/index.html","5e71632b9cf96b9aa0a982aa6de8b6fa"],["/2021/05/17/数据结构noj_2/index.html","f7a3137cc91dd747629041ea33c2bd2c"],["/2021/05/30/数据结构试验/index.html","1bc51b98e54c76cb95cded5371414ed0"],["/2021/06/12/数据结构noj-3/index.html","8c9748e89ef51c92219d3a1c8b978479"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","96f74fdb68333b36d19355eb86ba36b5"],["/2021/07/08/课程资源分享/index.html","d6ee257f03f1fe569bd7ee1b6d4b7b7a"],["/2021/07/20/Scrapy-下载图片-文件/index.html","0db239e2e83f8ecdb2229bb1d67e48cf"],["/2021/07/21/Scrapy-动态网页爬取/index.html","890eef77cbffbd2d0e6daf2fee97360f"],["/2021/07/21/疫情打卡/index.html","4a9873df088af4ac75b8c3f050e96d2c"],["/2021/07/29/Scrapy代理设置/index.html","b457460e57bb709be93b540bf5f49380"],["/2021/07/29/数据库认识/index.html","311dbc64d316fe85d0cb9c4cec8a5a17"],["/2021/07/31/Python多线程学习/index.html","b0ceb446ea8de7800259a4c5601ccc33"],["/2021/07/31/tkinter-requests练习/index.html","8153bc7584109d28085d995a0a2a9253"],["/2021/08/10/Git学习/index.html","32b85dccf5ed2f8c0c1920376179e558"],["/2021/08/15/pygame实践-1/index.html","d3f5489fab2db7b0eef2f052fe7a78fd"],["/2021/09/06/微信小程序开发/index.html","1710f8571ba4c997e8646688c5ee77ae"],["/2021/09/21/命令集-1/index.html","1cbabd09f27c86c258430bd9d8445892"],["/2021/09/21/命令集-2/index.html","13d52ee4275d0c91019a4e6ecee6da38"],["/2021/09/21/命令集-3/index.html","e6d16d6874030a7f28c28094566430b3"],["/2021/09/21/命令集-4/index.html","34acf14ed0189cab8dbfefcebc170087"],["/2021/10/03/socket学习/index.html","f0b468e3e431af4df585de602a41c4e5"],["/2021/10/10/dwm入门/index.html","9351e7c01de1ce03fad279e5b1031840"],["/2021/10/10/安装ohmyzsh并配置/index.html","667bb6b645592623b10b4559123c1cd6"],["/2021/10/20/css学习/index.html","1f6ec663f254995c3b11d475027d3633"],["/2021/10/20/wm入坑/index.html","e16088c9ca73036751ecf5cd40a88e18"],["/2021/11/03/微信小程序学习/index.html","fa08ef295648399e5211888feeaf0190"],["/2021/11/04/css揭秘/index.html","a0bd67b222103c97df77394111cf3ff8"],["/2021/11/05/css-练习/index.html","3edbbf3e51e186f3e56b06f8c6c5803a"],["/2021/11/21/命令集-5/index.html","0fa599d08917856d48f35ff571d6230a"],["/2021/11/21/命令集-6/index.html","01998b3e1adbe273905cb494fd6ec1cf"],["/2021/11/21/命令集-7/index.html","7e0a55e94f4a002b1f8226c9e34cdcff"],["/2021/12/01/搭建wordpress/index.html","6bf85592e72bf55dca876bc3e3020738"],["/2021/12/08/python操作百度网盘/index.html","45d3aedb583c85744b17868ecc51cfcb"],["/2021/12/14/js爬虫/index.html","d1b794ebc76794b269e201dd24ff9be8"],["/2021/12/25/为网站申请ssl证书/index.html","91513345d5ce49ac966dbab973914441"],["/2021/12/29/使用七牛云为网站提供服务/index.html","a933665d1f5629c2604ec9039a44be61"],["/2021/12/30/jQurey继续学习/index.html","080d9e3130ac1bc0f58fd1b14e46fc75"],["/2021/12/30/jquery学习/index.html","003397b05854d9d97ce94481368034cc"],["/2021/12/31/vue学习/index.html","1c12ed004ece4a7d51882390694447f6"],["/2022/01/02/疫情自动打卡/index.html","51aa1226b2a286840bd5822ce3bf5d6c"],["/2022/01/03/javaweb初体验/index.html","2808449f140b704d321eea14b60368e4"],["/2022/01/04/codewars练习/index.html","f8f84c928dbf452564b62e2962f9b447"],["/2022/01/05/Spring学习/index.html","a2b357b656da8da9bf01b1b22b502355"],["/2022/01/05/vue实战/index.html","f60d7691bfca6153bc4b6ac871d706a7"],["/2022/01/08/gdb-gcc学习/index.html","b3c0580ca2c43d45b55d48ac296b6549"],["/2022/01/11/python-opencv学习/index.html","e456652105b0107938edf9992ceac961"],["/2022/01/12/汇编实战/index.html","edd376018298290248aa2750cb396cde"],["/2022/01/17/pandas学习/index.html","92d846596bf4cbbea00af99a4ca2fcfe"],["/2022/01/19/可视化图的工具/index.html","246980211b0233624b527d182dd7f26d"],["/2022/01/19/机器学习入门/index.html","cb62e443d9ae35129e321afef094cd44"],["/2022/01/20/cousera-ML学习/index.html","1c2546851d0e0e57c504eed641cc5691"],["/2022/01/30/typora解绑后出现问题/index.html","a72b34a3c51438da9616f4f446c622bd"],["/2022/02/03/NLP学习/index.html","512a2050d7a8a843383dc9055a9a9f31"],["/2022/02/04/Web漏洞学习/index.html","5d6d3a08f2e9fe77dc157fbe19440155"],["/2022/02/04/pyqt学习/index.html","9d9da614ad76b252721dd53ce9dbe02d"],["/2022/02/04/python爬虫/index.html","b18f1bd0402574b053b391728a649682"],["/2022/02/18/Electron学习/index.html","cea5bb6d0de2b398dc182b90cdcb31fd"],["/2022/02/22/疫情填报字段解析/index.html","80a2e14338bc67ed6e2755d818427ade"],["/2022/02/24/Bomb-lab实验/index.html","fad629c7b5f599cf58508f656167ec26"],["/2022/03/05/nginx学习/index.html","edc7ac287d4c64d1046bb3f41f818542"],["/2022/03/09/汇编原理课程学习/index.html","b9c8a808f01e238b5f854f74f2e584c0"],["/2022/03/11/Keras学习/index.html","ca93826379656f520e66cd1e0681c19b"],["/2022/04/01/graphviz学习/index.html","97e4b1340e7eaa3de26a81ee856927a5"],["/2022/04/07/django学习/index.html","9795eee6bf0f272c95f08429993078bc"],["/2022/04/11/密码破解学习/index.html","edd816459235797a21a06ee85a61fc12"],["/2022/04/12/flex-bison学习/index.html","2e677e2c1a9922247fe6271372b0656f"],["/2022/04/15/pytorch学习/index.html","807a13c57fe5f14e54d1492045195dc3"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","d3b255f1d752c293609f6776a382400e"],["/2022/04/23/写一个音乐播放器/index.html","216c8a4b3b7fbaa7ef1f77799216f778"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","c3bee751e0ffd215af1d9f5da852bb63"],["/2022/04/30/GAN学习/index.html","347486e0648552f7670beddcd9d1b9ae"],["/2022/05/02/html精学/index.html","cb36ef5b279401b401a0fbdde1abd1f4"],["/2022/05/06/write-a-compiler-by-yourself/index.html","f6a9b1ca073d8fc3c8efde4e7938930a"],["/2022/05/30/acwj-01/index.html","a87876d188f2f3a5414b7e8be9043e66"],["/2022/06/14/animeGAN/index.html","c50f0e18dae7de0511364461ce4a1e20"],["/2022/07/09/c-与算法学习/index.html","6e4effb8e4265b209ecdd6035b669a61"],["/2022/09/19/flask学习/index.html","b3c9471867dbdbfdabf97732c70b0d3c"],["/2022/09/22/cs224w学习/index.html","3f84d2c74e8a6cd15eb0aaf514b54a55"],["/2022/09/28/记录一次wp重装/index.html","bbf03b1c06d23119253bb1ee56abc6d1"],["/2022/10/01/Obsidian学习/index.html","62c2d22d4cdd813dae52fa0b40108ae8"],["/2022/10/08/vue-element-template实战/index.html","7b4162cf9579f2aedf871fec49c3f88a"],["/2022/10/25/vue网上商城项目/index.html","2ac33354c48bd486800a5777deb89142"],["/2022/11/11/leetcode刷题记录/index.html","a84c6642cb4837cc35dd36f3ef00fa81"],["/2022/11/11/使用overleaf优雅地写文章/index.html","510b298a6bfe3470c1a19efb432ed562"],["/2022/11/22/磁力链接与RSS订阅/index.html","253a490b95db64993fc45b11b30f7dea"],["/2022/12/11/uniapp申请获取地理位置/index.html","d28af559c6d9a3193b1f4c14de53f854"],["/2022/12/26/pr剪辑学习/index.html","a258fa6037ce17afba166ff9b9d12d68"],["/2022/12/27/css中的flex和grid布局/index.html","1fddfbf8e76c563ec7b721df9cb874c4"],["/2022/12/28/Flutter学习/index.html","6cad262648c375d094a35cb85a69ee59"],["/2023/01/01/美化github首页/index.html","6267b525bc06d6cf50786255cb1e68ed"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","b973f7c1d92f344563b7035f1dbd78fb"],["/2023/01/04/构建微信快捷发布文章工具/index.html","da27246f777473f94dd3bab410f45bcb"],["/2023/01/14/dart学习/index.html","90ccfc6665110cfe27ad4e696b416021"],["/2023/01/23/闲置服务器BT下载影视/index.html","aaf747b9eda1f2c770dfa351c026b902"],["/2023/02/07/TotalCommander使用和学习/index.html","21074b481035a0d4bc7896feb86a346c"],["/2023/02/13/docker学习/index.html","bb40943a43c3adba5fb5aa0d8d561faf"],["/2023/02/17/DLHLP学习/index.html","af51303101d3bd9dc0117dae9af42f43"],["/2023/02/18/学习purecss构建自己的css框架/index.html","d7f67acc495d546154216440ae6d6f9e"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","714bbe33917221557a47e53b32d99ddb"],["/2023/03/05/STL学习/index.html","867dd8331c540a7495be1c65b75105f6"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","acee958419bdcfbd5c76a9d60fd02b4e"],["/2023/03/23/实战写浏览器插件/index.html","87b5caefc352ff03a003559fb6144f39"],["/about/index.html","bf1f0668ed36a420e064d8dac6945a6f"],["/archives/2021/04/index.html","8791eac9628f279030332e0d0674e9bc"],["/archives/2021/05/index.html","f9277c2569248f349d91240c30d5ea8a"],["/archives/2021/06/index.html","03f3da4f07124871fccd6b5e17de0156"],["/archives/2021/07/index.html","08fcd82959acf8ef43db7513f8d8711f"],["/archives/2021/08/index.html","0ee4ae7884d7e4670f06c42e502f2852"],["/archives/2021/09/index.html","78ee354a7f287856ed7b5fc1e462356e"],["/archives/2021/10/index.html","ec76d5d2d3fec6cc4cb7bfb9df10910f"],["/archives/2021/11/index.html","7532c5a7294705c55fc5558078e68e24"],["/archives/2021/12/index.html","20c4d2656cf51d071f75f462f4b975ae"],["/archives/2021/index.html","c8c6e9fc84058163b9c29721f63f3cfb"],["/archives/2022/01/index.html","d48f10f5aedf13c9aa4ef87cb22bd5f0"],["/archives/2022/02/index.html","4e31db612b48718ca34dfb1f5e99e0d5"],["/archives/2022/03/index.html","d311224575cbb2cb12dc240aad9be1a8"],["/archives/2022/04/index.html","d45fd7fb17bb1bbd4c671a384af65f08"],["/archives/2022/05/index.html","10e6152c2d29339e83575874cad3aa72"],["/archives/2022/06/index.html","e4c0ad385a99ad2c81d6f720055f4260"],["/archives/2022/07/index.html","6bcfcc1a8ec2bebac12025495075b362"],["/archives/2022/09/index.html","51e3ef38759b36409a820297dda1d6d9"],["/archives/2022/10/index.html","71b1b4012314fef666141e2715971afa"],["/archives/2022/11/index.html","190451cc3c1387121f78c6141808bc32"],["/archives/2022/12/index.html","d8b031e2a6d3ee60f75e07ab2225e7ef"],["/archives/2022/index.html","6e60752df1a3f18a5ce7fd1b4439f91b"],["/archives/2023/01/index.html","d99cb4525ff6ec4cc02a484bb9f511f9"],["/archives/2023/02/index.html","1c676c921f2314ac26a561c73d1037e1"],["/archives/2023/03/index.html","43d83391412484d5d477b1112d75550b"],["/archives/2023/index.html","92055c3eeacc454357210b2ea5168595"],["/archives/index.html","539da85fc6ec2b74ac9e81bcf28bf1a9"],["/archives/page/2/index.html","0cef0eb653096f486e61792295e6f2e0"],["/archives/page/3/index.html","943220f315bcdc40f91378bad966d781"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","111c7f140f0bce269bc8030c5f2d6bce"],["/categories/Linux-study/index.html","31a100d090051f062bb0f3ddfeac1c49"],["/categories/ML/index.html","0645fefce6a23d8f840ddf7a01752340"],["/categories/Nginx/index.html","a33c8d8f5c6abf64160c955d993ca565"],["/categories/Spring/index.html","83168f3a89b39e190fc7e50367e520d5"],["/categories/course/index.html","438ce38857f2ad3cf06f322863ada945"],["/categories/django/index.html","6da8d100b197dbbc95d7a597c9eaf55a"],["/categories/fun/index.html","f83035fe4dabb3c920f832b1a6db3109"],["/categories/gcc/gdb/index.html","f7dd13e4848a7968bf86e2b17a4b22d6"],["/categories/gcc/index.html","71d6344972e2a6638d4d48b3a6558a17"],["/categories/index.html","745685b6d444daa9a1079fb2d7b73c78"],["/categories/java/index.html","2ed21999dee88cd028056e2fb9cc88be"],["/categories/latex/index.html","751d5a6314f8b6a9e2cac5b06d40ffce"],["/categories/python/index.html","6578c1ea6ef371c4c0aa93abbfe3fbf4"],["/categories/study/index.html","2703193a678d6ff77e248b3c6a7f0e79"],["/categories/vue/index.html","3299e388493769ef72a8cea0eb9667e9"],["/categories/误区/index.html","f4ef3eaac7911988a2cfedb68d9d0cd7"],["/commonweal/index.html","0ea085a8117408c8d7269dd3a88dcb23"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9a25b4ca89f5403f3c71f3597190a8ee"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","b3bff932a51ba9c11af63dc90c60c9a6"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","d0c90f90f64916613f6475701b7a24ad"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","ee6ba75e96fa2442e097b11e5d8b0095"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","1a8bfd3c965266637dae6199938bf6f0"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","ca3f9b9ce6601a3c22c2ce4ed45dea94"],["/page/11/index.html","e14b36e00e2cdbbd3df88fafd1e97c70"],["/page/12/index.html","ef3988b9b82b2a28a8978458941a7838"],["/page/13/index.html","8c6ad9b79ed8b7f9071ee443b08bccf6"],["/page/14/index.html","a91c671d80a6df32687afc032d0c4d77"],["/page/15/index.html","a591c1502697b74e2dd04077fe01d6d8"],["/page/16/index.html","a70c0a9b77fbf968c228809143fd7cd0"],["/page/17/index.html","598113bec054920db4c2c24466bec335"],["/page/18/index.html","06e03c81df9b5d91eeedc7dabed06c70"],["/page/19/index.html","8ce268964e478e4ca5066707198e7735"],["/page/2/index.html","d93861283ddede0257554e1fe4828e2a"],["/page/20/index.html","adaeb5ca9607c320b2cd001569d4ce90"],["/page/21/index.html","fe4d1a6dbdbd02eda60fd1f3d499d51c"],["/page/22/index.html","6043f4ba09af99490a4fc2d59a30ea0d"],["/page/3/index.html","05528bef769cd300c4035f34b980708c"],["/page/4/index.html","f82aaf138a429afa3918fa4e34d85a29"],["/page/5/index.html","de3da6c0da390d11cef0263a4460af05"],["/page/6/index.html","35401926a9e9cde5b6cb8a9a434530bc"],["/page/7/index.html","339c9fc4955070d3077e315f736e705c"],["/page/8/index.html","79cf0c91a61ae9c4dea71de61072720c"],["/page/9/index.html","490d19d810c6e3aed02a3c645ced183b"],["/resume/index.html","8aab8cc80b95d33315d753ff39e8e349"],["/schedule/index.html","d47e6bb4b95cea0300c82f64b688999c"],["/sitemap/index.html","4b75fe2b2efd4838a09fb9175124fd1a"],["/sw-register.js","a79bc056fe48c6497f37f462bcb09fcc"],["/tags/AI/index.html","3e90ab22bee4328c57c08e5953805953"],["/tags/BT/index.html","25a3ced49669d8ef79b5e4031d519f3c"],["/tags/BaiduNetdisk/index.html","542c07e49ffee13ad6e100076135b7de"],["/tags/Bootstrap5/index.html","a5ea43b0b95d518d0155610f4bc332d8"],["/tags/CSS3/index.html","2f5bd2c23ac804bda3e42a0acd7031fc"],["/tags/Centos/index.html","bd97d889b2e693a62728086b00800afd"],["/tags/Electron/index.html","839651d4fbc77f334ff8f5c0ec87c69b"],["/tags/ElementUI/index.html","8e44d62e5f7e9438c6c8f63ad6ae9f23"],["/tags/Flutter/index.html","a4c12ca4fe9c4257431c47995a43d69c"],["/tags/GAN/index.html","71a64eb738da7521614ee9b23ab75b51"],["/tags/GUI/index.html","622baa2e4748a13dd5f890b0d1452627"],["/tags/Git/index.html","4944ae98f9f90555dc634337d9ed4d4f"],["/tags/JavaScript/index.html","ea69aa28d8faad278dd74de1c065e021"],["/tags/Keras/index.html","1adaa64bf3c3a452b229b58fd5571e3d"],["/tags/Linux/index.html","3a39416990e1838c50fd4da8c13b5819"],["/tags/ML/index.html","e7bfd68d029e583d416c97568107fd70"],["/tags/NLP学习/index.html","0bcfb8f60d9368c81dc9340741828c34"],["/tags/Nginx/index.html","b177e7d1558d181032396d4c3302af09"],["/tags/Obsidian/index.html","9554eb6f67c37db771d301f416310e38"],["/tags/Qt/index.html","c2a9a80e5acd2a3dc264e6bd5ed71c10"],["/tags/RSS/index.html","f14d7c1893ee0a26150f0dda2afaf3e5"],["/tags/SSL/index.html","769de750af97ceda357ede9124fba555"],["/tags/Scrapy/index.html","8d7a2cbc4464e06c59ac05d120d32131"],["/tags/Speech/index.html","1be3b1fbfd077929b70a7f78f850e767"],["/tags/TotalCommander/index.html","f46b5adce1706b316b5a4351118711c1"],["/tags/Web/index.html","344a85bbaf939b6993b9c19983ab0bb4"],["/tags/algorithm/index.html","545af65f3a9864091b068f6382eaf03e"],["/tags/bison/index.html","fdad85f68409190d753bb00920baa604"],["/tags/bomb-lab/index.html","3ffb62e4e8c1f37e0098fba44d53bf1c"],["/tags/c/index.html","5c66c838bdab550ef454313e1200cee7"],["/tags/cheerio/index.html","2774400c773e14d4af219558c7db1378"],["/tags/codewars/index.html","34529db7d051bf8cd08e2aa6925f33e9"],["/tags/compile/index.html","1bcafef51fb0acbb0f6433b4b61c52ce"],["/tags/compiler/index.html","26e8428427c87b9e7c63fd380b9292f9"],["/tags/cors/index.html","1d08a8b05e31c57f2a6452634dc64a91"],["/tags/course/index.html","e1e497dca24f05994641c76b8c84d2fe"],["/tags/cpp/index.html","e9ad4ff05038d9b9b49180c45db725c0"],["/tags/crypto/index.html","d6a18658b2e31f3a41fcf379f84aae65"],["/tags/csapp/index.html","341a7a9b300d12ced5f159b47f5af8ea"],["/tags/csp/index.html","5d296c4355a6a0cead4bc1ea4b8348f3"],["/tags/css/index.html","6c2c4172b2c695711ed494b2130f3a7c"],["/tags/dart/index.html","f4444806cc62a826635e8d67cb52171f"],["/tags/data-structure/index.html","a6864366ad1d67fecbcf941ea43d0f63"],["/tags/database/index.html","ee86ecbe9ca0976db9deb6954d625226"],["/tags/deep-learning/index.html","7d0aba7f67233941c665626b99730716"],["/tags/django/index.html","4123d19f976312a576772e8a946b3345"],["/tags/docker/index.html","e941445eccc019cac7e3560fde80803d"],["/tags/dwm/index.html","f04dfa21286a00179edfa5b9c4207874"],["/tags/exercise/index.html","7aeee62a246af0eb0092e0cc45fce30b"],["/tags/filebrowser/index.html","d445d0b4e7ec9e2357ee06d1ee3c9e10"],["/tags/flask/index.html","9d6513c3bc9c9ff6466b1417a968a9dd"],["/tags/flex/index.html","817cb5e59a6480c9bb105a73d8f64070"],["/tags/front/index.html","6e8be725a7ea2ed7756cb00da4384a12"],["/tags/gcc/index.html","c675e43531de3c321c1f29ea7e7b292c"],["/tags/gdb/index.html","caccdc52dd7a52921cb2037dcb62e530"],["/tags/github-profile/index.html","7de33822c80e73ad07255b07bb888286"],["/tags/github/index.html","27409f0894c00e922851d011286f2bfd"],["/tags/graphviz/index.html","9d56d5a5ec9c83686d9e4094e59fe0bf"],["/tags/grid/index.html","5a75495300c0f16a76356f88de1cddc3"],["/tags/html/index.html","acd1a68eab309cad1182d11d8cae2de9"],["/tags/i3wm/index.html","76b0a119f3ec81dccbcdeef423041eef"],["/tags/index.html","bfd3c4f444f5f8b7dcc7a83f6fc8cc1e"],["/tags/issue/index.html","4c9b08ca892cc5f9a8d7bf246026dfc1"],["/tags/jQuery/index.html","106365ac0f260f3b63c200d7f37b7748"],["/tags/java/index.html","339c2ecc81cf0ec1b73a265c62959f31"],["/tags/js/index.html","3b4de22a1be936e21f742ba2b6b3fe25"],["/tags/latex/index.html","91ebc4a3cbc4c793c404944b0df7f1a4"],["/tags/leetcode/index.html","e076c5889f811a51fa7f2829e7926bec"],["/tags/lex/index.html","c68e2088662a1e417b05b1ff319f61de"],["/tags/material/index.html","40a88de7756b429ef9e1fd3243e01064"],["/tags/music-player/index.html","2c75a54bdf72069665f334de52da4db8"],["/tags/nodejs/index.html","19872d659d8fc905f3be3319e75cabab"],["/tags/noj/index.html","895ea68e22e5450ee436e29767cff4c7"],["/tags/opencv/index.html","20eaf9187e6140c1bcccaea2168de187"],["/tags/overleaf/index.html","84dfb5c7c486e194048b331e2a5fc5c2"],["/tags/pandas/index.html","33a6aac055ab9a53ab5c13d2ec0f247d"],["/tags/premiere-pro/index.html","0adc2daa2e1283efafffb4e8c4ef3416"],["/tags/proxy/index.html","551ffa92a63e7647b7fda38fbddf3a47"],["/tags/pure-css/index.html","50757522aeb5c4bba61c56b86041930e"],["/tags/pygame/index.html","03713c5adb8072a203f583ef49449f08"],["/tags/python/index.html","c933c3fc0eaff32ed38d0a5eed3f26fc"],["/tags/pytorch/index.html","c8e34c850c887d9cd8fc9088d7db308d"],["/tags/reading/index.html","c7e53d022ea1c83b41df255f10a1a469"],["/tags/request/index.html","b19d3bc94e40e4c568d0069d2646ee7e"],["/tags/requests/index.html","a15a7701ecc77e8fff8f3912a49c36a0"],["/tags/security/index.html","774eff74171b0d1de1891a18255a69ce"],["/tags/shell/index.html","a2afe1bc6abae079d07064b1f99ffa14"],["/tags/sign-in/index.html","b9aa98e5438305a33d468eff86078453"],["/tags/socket/index.html","581572b12c66857c13b05ccf455f6bca"],["/tags/spider/index.html","cdf8ff790a0c328287d0aa003340d815"],["/tags/splash/index.html","700fc2b7879befc53df8bebb737bfab6"],["/tags/stl/index.html","09a2313871866519059758dd61c5287f"],["/tags/sumatra/index.html","b1c8a7694215c74489df65f2c6e07859"],["/tags/superagent/index.html","bafd9ee56029f29ef8e28bc9d0b9ba1b"],["/tags/tensorlow/index.html","6b7ea2b92054ad4755ec2ce51c4372a1"],["/tags/tex/index.html","b1d2ad9364fe0f20859bdd585cc17ed1"],["/tags/threading/index.html","e8fd5f2235a01ca0a1357a6211962d2a"],["/tags/tkinter/index.html","9a483c10f97356b99fe8795b2f8aab0a"],["/tags/torrent/index.html","48b6e4f0bd3a6cc97349bbf84d4b6669"],["/tags/tutorial/index.html","2479395cb80219e38fee0049dd462505"],["/tags/typora/index.html","013bcc0c23255ac9a0fbf49fbdb94090"],["/tags/uniapp/index.html","6b7b8e7a3741abb2a6451c79ec73b4ee"],["/tags/vite/index.html","07618198d982841fc4dd86988f9961fc"],["/tags/vscode/index.html","7a40270fb3d7106abea4aaef67730808"],["/tags/vue-element-template/index.html","292535da04ff027519756f54cd5d7212"],["/tags/vue/index.html","71bf00a715c2fa670225b6ba1633174c"],["/tags/vue2/index.html","9cc33bdc8149eb7e0aec3432c2000ff9"],["/tags/vue3-x/index.html","5356856baff45aad957c9f21f924c05d"],["/tags/wechat/index.html","235a9850552f8f3d075bd87e454579ba"],["/tags/wm/index.html","3e12d4338e5faa463bfd5f8774b42eba"],["/tags/wordpress/index.html","b32792c49bc7dfa5506013f663721202"],["/tags/workflow/index.html","c114567830f4db9c4cfd838161f5f575"],["/tags/xpath/index.html","2fee6e9bfe16fe41a9a885da5e401630"],["/tags/yacc/index.html","21163d8ed9c1ad7020a03536afe570b1"],["/tags/zsh/index.html","41b9b638a0f905b39461e783378e5a15"],["/tags/七牛云/index.html","3b6befcafcd9a8aa783f2d4d28fdc90c"],["/tags/函数/index.html","08d4eca1310c83437a8659b70e035203"],["/tags/剪辑/index.html","5212d7ff9e3ea67537b77d2893377bbc"],["/tags/存储/index.html","8bd1521b0a92592e82896964ca2d9290"],["/tags/实战/index.html","0bb4eac329483370fcd08008984fc5f2"],["/tags/工具使用/index.html","d991bfa34cdcef0370e081926c40a5a5"],["/tags/建站/index.html","10f9dee98977819ed0b0a8c9b02b36b3"],["/tags/微信小程序/index.html","cb5eb2d8a5b688a85839bd62619bec98"],["/tags/指针/index.html","df4b6e30263ede3ea4867625ca17a536"],["/tags/效率提升/index.html","44074e26ea1bf4bb00b5a0113ab445af"],["/tags/汇编/index.html","eef8ddf4bdf8581bc8b3849d6b4bbae6"],["/tags/油猴脚本/index.html","a987357a130f130601c19c69e786d828"],["/tags/浏览器/index.html","fb3fb4a8bbbadf5eafd93897a93ed5ff"],["/tags/爬虫/index.html","51423443a2df64cf1eaf7ba61e363c66"],["/tags/算法/index.html","fb561fe48c58f663555fb90ecd274fd1"],["/tags/编译原理/index.html","e047daf1b59c89348d92b1be25964db7"],["/tags/获取地理位置/index.html","ebb19e37267d69310b13f66e7d40e30c"]];
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
