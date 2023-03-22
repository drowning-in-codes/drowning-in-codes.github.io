/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","d0e7049d0082a3e6f9e0438dedf2238f"],["/2021/04/20/稀疏矩阵/index.html","d960fe55cb48fadb8c650b6ef0cfc680"],["/2021/04/23/广义表简介/index.html","70e992c33d90d2d1713497b9f86b928c"],["/2021/04/29/关于指针和函数/index.html","754d275d70248ef4e0fa79f400ec60f5"],["/2021/05/10/哈夫曼编-译码/index.html","75751af1a150bfca864c889cfc998cfb"],["/2021/05/17/数据结构noj_2/index.html","caa04810bc800b95c5118ef9cb940dc1"],["/2021/05/30/数据结构试验/index.html","875173cd9fc0dc021c1995293ec39d0b"],["/2021/06/12/数据结构noj-3/index.html","f74ee2009b70cd79e148f45a5b3a806e"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","6fb47a3009790992041c828ed7e6c312"],["/2021/07/08/课程资源分享/index.html","40a3f0aa191408885017261e4ccd9e67"],["/2021/07/20/Scrapy-下载图片-文件/index.html","40ccedfb346218ae44a57512e3322990"],["/2021/07/21/Scrapy-动态网页爬取/index.html","b2836c1f56aee46d51bff213a19507c7"],["/2021/07/21/疫情打卡/index.html","f1dd19ae20971348904c68bbca4a3d8d"],["/2021/07/29/Scrapy代理设置/index.html","b88b28bbdc94986f98d54ab58211fa59"],["/2021/07/29/数据库认识/index.html","c91471900d2adae6b04ea57acdf6e579"],["/2021/07/31/Python多线程学习/index.html","6607b1c2d944056e5373acbb15dc9d6c"],["/2021/07/31/tkinter-requests练习/index.html","60dc11c957fe153e76e750fc33b13286"],["/2021/08/10/Git学习/index.html","d9755f158dab759401a7d61b43f81a12"],["/2021/08/15/pygame实践-1/index.html","773304fad18006031c7ee1da04f4bb51"],["/2021/09/06/微信小程序开发/index.html","8f6a2ecc38be5f3f88a37a38ff4128aa"],["/2021/09/21/命令集-1/index.html","a150c947869f7fc9c6f31268fadf864f"],["/2021/09/21/命令集-2/index.html","96fb122a06f121e5d0ad2af2ffdbfd60"],["/2021/09/21/命令集-3/index.html","76da95eb4c55dbb02c388ecc4fb22aab"],["/2021/09/21/命令集-4/index.html","047697055408498fcf1a6004f6938a12"],["/2021/10/03/socket学习/index.html","77ffcdec2144d135f4136caed8b025fc"],["/2021/10/10/dwm入门/index.html","89d704381fe6b368d1b2442a43e8f786"],["/2021/10/10/安装ohmyzsh并配置/index.html","a01dee12b16ebbb0f8e8ecfde92dcf73"],["/2021/10/20/css学习/index.html","a845f06a02a41b49de20bd46271b8fe6"],["/2021/10/20/wm入坑/index.html","c88c56c37ea5e38a2094d5ba79de389b"],["/2021/11/03/微信小程序学习/index.html","f3605549232761a7fa8a8fc33957cc5e"],["/2021/11/04/css揭秘/index.html","80802756e7fe9fce2bfead1934ad12b2"],["/2021/11/05/css-练习/index.html","056c9e50725194a4556d5bc7c8dfa9e3"],["/2021/11/21/命令集-5/index.html","b29e86a16325e28cc0a4ac4c222a6a60"],["/2021/11/21/命令集-6/index.html","0a37c99d89a303cd8250c8ec8a15fd09"],["/2021/11/21/命令集-7/index.html","ed5eb869712d83ceaabc78522ebbba64"],["/2021/12/01/搭建wordpress/index.html","0d40061b7d22356a9c03fc244af9463c"],["/2021/12/08/python操作百度网盘/index.html","25745c7e3e36bd24818ec69313fca628"],["/2021/12/14/js爬虫/index.html","7ee6a8184915acc8bc9cf352b443118d"],["/2021/12/25/为网站申请ssl证书/index.html","d282ed431e5a3ecc52f9ed6bf9a27b10"],["/2021/12/29/使用七牛云为网站提供服务/index.html","73d93db74fba777675d5301a27360dc7"],["/2021/12/30/jQurey继续学习/index.html","3c9e5a23fb5bf71d188c5b8f1c56f936"],["/2021/12/30/jquery学习/index.html","56ffb9c8748d1e0103a5a643d692cf88"],["/2021/12/31/vue学习/index.html","a919c7c99163078f3f3a251246d8006d"],["/2022/01/02/疫情自动打卡/index.html","0b97a42a4cfd763cb572f986e97444f6"],["/2022/01/03/javaweb初体验/index.html","4c204e0e30344d8f589f7e7b75c849b1"],["/2022/01/04/codewars练习/index.html","a9fa9cf466c99de984c51b17ca4c4f1a"],["/2022/01/05/Spring学习/index.html","558b2b48a55fb8f1beeef3ed813a3188"],["/2022/01/05/vue实战/index.html","4d58981d7d1fffaaa3e4ad4193a99c20"],["/2022/01/08/gdb-gcc学习/index.html","5e11b0448eab29cbec4cc47343344293"],["/2022/01/11/python-opencv学习/index.html","189dc97e4a56d40ffefaeef8388677d2"],["/2022/01/12/汇编实战/index.html","87662420de2d67da28340076525829cc"],["/2022/01/17/pandas学习/index.html","cd598f60e2b0b56c1ab09b14d8ab11aa"],["/2022/01/19/可视化图的工具/index.html","1e9b87fc21bf4a58dd1812c4e8ba3928"],["/2022/01/19/机器学习入门/index.html","937643ea7b35f082ad5d1265bf3ea502"],["/2022/01/20/cousera-ML学习/index.html","a23075280b1e5ac5e1175e9b4a518830"],["/2022/01/30/typora解绑后出现问题/index.html","9af85eb149e5634d59efe3c42d6836af"],["/2022/02/03/NLP学习/index.html","1c57c6288fb8e50b488283d077887657"],["/2022/02/04/Web漏洞学习/index.html","42094f4ea36ae9f086e83568bfff5333"],["/2022/02/04/pyqt学习/index.html","eab661616bf47e96decfc9811295dfc3"],["/2022/02/04/python爬虫/index.html","234489f99070220ff49501d05c015464"],["/2022/02/18/Electron学习/index.html","7030a4b3e38a302ecc960def5b45a777"],["/2022/02/22/疫情填报字段解析/index.html","cc05812e19fe0f38ad2552f13246744b"],["/2022/02/24/Bomb-lab实验/index.html","98de611517c91e4fe65d7ec8bac44465"],["/2022/03/05/nginx学习/index.html","8043da4ef55b781663da965a9f5e7db3"],["/2022/03/09/汇编原理课程学习/index.html","0167425f654c7c50d8fd0e16096d8c7b"],["/2022/03/11/Keras学习/index.html","03de45eb12e505ece9770b8d27b7853e"],["/2022/04/01/graphviz学习/index.html","6d56ba652a20e4e2707a9d5925a622b1"],["/2022/04/07/django学习/index.html","5babc5a68216d119f53a2cee3ac6c0c1"],["/2022/04/11/密码破解学习/index.html","66405663ae415788693ec91aa9336746"],["/2022/04/12/flex-bison学习/index.html","7f0b72baf11006ebc91ea65c252be32a"],["/2022/04/15/pytorch学习/index.html","b64937f112bee6f659b1a11f2fda5b52"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","d88f1e01a6d41d4a10e40357133c03cb"],["/2022/04/23/写一个音乐播放器/index.html","79d9a3fb14950d32e33eee0b20b69651"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","1f9d180493623d8158c0226d18abb416"],["/2022/04/30/GAN学习/index.html","4801df4df6dd4586be03dd8cc5ff3133"],["/2022/05/02/html精学/index.html","52b54fac53afb27d0d06f91b57fe1ba6"],["/2022/05/06/write-a-compiler-by-yourself/index.html","d0c68b1191ee19930eeea9d0b7ac1901"],["/2022/05/30/acwj-01/index.html","959434d93e94438c9701eff7fe8b19c6"],["/2022/06/14/animeGAN/index.html","4c69ffc1f16bb3d2de934206d4540fa9"],["/2022/07/09/c-与算法学习/index.html","5127914b9033d99ea1a22613d6ecb4f7"],["/2022/09/19/flask学习/index.html","db626bf8e4da1ca041609616989ce3d2"],["/2022/09/22/cs224w学习/index.html","f79014434de1af121d4f96912e482e95"],["/2022/09/28/记录一次wp重装/index.html","c9104dd6d2457d79aa090090ddedfa00"],["/2022/10/01/Obsidian学习/index.html","278dff808efac279f24815f19e88176f"],["/2022/10/08/vue-element-template实战/index.html","32dcff69a9183e40dfcba6fdeeee3e36"],["/2022/10/25/vue网上商城项目/index.html","ce86842862bfd3def690dd85b5804abf"],["/2022/11/11/leetcode刷题记录/index.html","7bef7f2cae5d5ee7db2ba7c1fd0c122a"],["/2022/11/11/使用overleaf优雅地写文章/index.html","7d994fc986df305a3fc374a0d28ce059"],["/2022/11/22/磁力链接与RSS订阅/index.html","6bb102955f512031e642380347b63b4f"],["/2022/12/11/uniapp申请获取地理位置/index.html","1cb13d5770852b659983e65293561768"],["/2022/12/26/pr剪辑学习/index.html","4774469cb6f8cb50c066f4783779f561"],["/2022/12/27/css中的flex和grid布局/index.html","524f390f4509ca50ad1850f5a28185ba"],["/2022/12/28/Flutter学习/index.html","b2bca3c343489ce8b6e5a37f7b711ee2"],["/2023/01/01/美化github首页/index.html","791815be2f670974b0260adac038cb3a"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","419329fe49002d12c1fd095983fd7a25"],["/2023/01/04/构建微信快捷发布文章工具/index.html","5db3a4208c5a2bddf319178e69b249c2"],["/2023/01/14/dart学习/index.html","9c9f9e7a23793a92901e0e2def449abf"],["/2023/01/23/闲置服务器BT下载影视/index.html","be04a7a93d4119dbb83aa21f5be60e85"],["/2023/02/07/TotalCommander使用和学习/index.html","42f6f6f3269c75bcebf4c1fe7a0efc33"],["/2023/02/13/docker学习/index.html","d39f599e536de6373377d10000f74faf"],["/2023/02/17/DLHLP学习/index.html","1d37d7469f19faa38194491349569619"],["/2023/02/18/学习purecss构建自己的css框架/index.html","ff191df0ff94ea7f4154ba8fa6ac4eea"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","4643cf244aafefaa1d57829bfef99e9a"],["/2023/03/05/STL学习/index.html","b24f7e5ab66aebdcd6a9cd61a8a7e547"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","7e1ca291c7c66cca04a58fbd1c7f6cb9"],["/about/index.html","47202b51f21209fe3a5be44ce8155654"],["/archives/2021/04/index.html","2b0b9c013849a08d58530154412a0ea4"],["/archives/2021/05/index.html","11c689bc283321519326630ef791d647"],["/archives/2021/06/index.html","40982165fe94613bfa56ec18f03e351d"],["/archives/2021/07/index.html","d639593e21979c9950bcc5649f9c96f6"],["/archives/2021/08/index.html","0adf6bf474dbe95ac2e1bbbc273f133d"],["/archives/2021/09/index.html","1ea2a56dccb244d5e550fb48ef139eb7"],["/archives/2021/10/index.html","eb4b5687407d3ea3464ccee5bbce06e9"],["/archives/2021/11/index.html","560b366a0c376acead596e3fb880e3be"],["/archives/2021/12/index.html","b902390c125c12d1ae163e4cb295bef7"],["/archives/2021/index.html","2fad2ecf4ae86db3143a9b9e252a9bff"],["/archives/2022/01/index.html","69e5be8f8c57d677700a45f4e0a71855"],["/archives/2022/02/index.html","652f6ef32e685d174db8292c0d4dcee2"],["/archives/2022/03/index.html","70ad525558b25744e999c23cf3cd0cfb"],["/archives/2022/04/index.html","e0eb7e7eb7717ea6bc06d1f9dc80397c"],["/archives/2022/05/index.html","527bdfd1e0c3d5fdabd74606fa59a4a0"],["/archives/2022/06/index.html","b3394052a6a21dfc4b9f1edf3d4153ab"],["/archives/2022/07/index.html","e94bf2b3510a7103d993c5317911dd80"],["/archives/2022/09/index.html","d169ccd0dc364d5f7a63080943621f38"],["/archives/2022/10/index.html","42a6ceec498e9175161a3af1f3c4a8f9"],["/archives/2022/11/index.html","41a0b3663d7360a7a20568bdd630329e"],["/archives/2022/12/index.html","7b7cf8d205b359be7c838436a2fe3e5e"],["/archives/2022/index.html","78ff899a8af5981dc25a905fc065250f"],["/archives/2023/01/index.html","cb32fe79751ec5e6432425204558bfc8"],["/archives/2023/02/index.html","075ef106ed0497b6096789402edf466e"],["/archives/2023/03/index.html","4b58287d991a792dda95c6f81b825fd4"],["/archives/2023/index.html","6cd71bdac8f8a78ead1d683a76151be6"],["/archives/index.html","e9621252af3637e06aafa5f3214e2af7"],["/archives/page/2/index.html","39cf4e92862109e8f3cadc9055a83ff4"],["/archives/page/3/index.html","08ef9caa17f8dd2ec955289556bf794c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","37de28a6e497607d92714a9342aaaeae"],["/categories/Linux-study/index.html","789dcba89087fd2a5b13552f9600321d"],["/categories/ML/index.html","0b8a33caa8bf38b83b9b5b1362143839"],["/categories/Nginx/index.html","9dad8035715b78fc928dff71f6d6b51f"],["/categories/Spring/index.html","ac24c2cf13b017024d58dc8ea1f7b49e"],["/categories/course/index.html","a543da3f42a663c04aea0503b644db5b"],["/categories/django/index.html","92b4147bfd1e3e22871398c6a8da6920"],["/categories/fun/index.html","92d42774564dd8d72e58caa0ffd5278e"],["/categories/gcc/gdb/index.html","fc92ec1dba406c5ffa669c3b3dfb14b3"],["/categories/gcc/index.html","d0e89d354bd06a3e51345fcd7c944a37"],["/categories/index.html","cab4c039f17b69f86e6d50ad8f46ef20"],["/categories/java/index.html","20162397482d1eb38bc4bce43ba4c507"],["/categories/latex/index.html","f7e5d3b151d32b6ed9eaac9564a27ce8"],["/categories/python/index.html","1d673ee1ca1eaec8b9895dc71e627ffd"],["/categories/study/index.html","accce55f6f71cb5f2f2b16298303dfc1"],["/categories/vue/index.html","1d47a439eafd7038ee64a11c98b13001"],["/categories/误区/index.html","b9fc84db48c619d73043714d1e0e9318"],["/commonweal/index.html","c90efcc436e62fe9014aee5c0cc54c2d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f9f1adb68cdddd4f6cb0926c27068888"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","1cdaae9f515c9cb59a68ff182881eaa4"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","db60e68bf23e01aa22e07586d6fde0db"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c69683570478af04308b45ccdebcdeb4"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","73b649a0adebb9bcd4a831417fbf5dc4"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","16efb976c911dbea5959a43809fd013a"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","df39d0798501652e2282c1c06aeb4ae9"],["/page/11/index.html","04f86d27b346bbb1372251834faa2043"],["/page/12/index.html","2c21222b547481124333ffe25afeaa28"],["/page/13/index.html","179c9aff8dd37184c17bf4b5c774bf8c"],["/page/14/index.html","e1f531f96a3cb5aeddfd0d297d3a8e27"],["/page/15/index.html","c1adab4bc4b198c41ef15a7912151fac"],["/page/16/index.html","7d9360f25e12f57d955092ecf46d18e2"],["/page/17/index.html","71506acf829cf1be246169bedf9aaae4"],["/page/18/index.html","2a6efcb72f8f92db21ad718ccbb119db"],["/page/19/index.html","f1305ec233be73963697e77aa42b7cbb"],["/page/2/index.html","94fb1e00188ec40e1a3b943cf06e912a"],["/page/20/index.html","4809b88e79368cd985db7fa4400d3dcd"],["/page/21/index.html","4c71afb35c9bb716cf0ed21a45ba47d5"],["/page/3/index.html","672c110fc57542b368e953f06400c885"],["/page/4/index.html","2cdd2321963fd5b5c5abf827e7a76159"],["/page/5/index.html","cfd4a7bd57469da3aaf1fa879786cfee"],["/page/6/index.html","786d585f63edb9152995ad982b057dfc"],["/page/7/index.html","79e4e1c8dd4785cf298011722d42dc5a"],["/page/8/index.html","3ee5b3d1f649a210b7c0d80cefa3e3ec"],["/page/9/index.html","01cf913543cda6b4750c6fa0cee10ad4"],["/resume/index.html","1f9d57a681995349cd14704f7568fd22"],["/schedule/index.html","8dec7642f357324aff70afedbf151cec"],["/sitemap/index.html","0cb9f00b99ee6253f7cde22d700d9807"],["/sw-register.js","2d2cff7105076d894fb63d715c781556"],["/tags/AI/index.html","de463f1c074da08a46a509c2eaab24b9"],["/tags/BT/index.html","87554fc470373aca92bf528c5f7fe564"],["/tags/BaiduNetdisk/index.html","2732802fcd4353886e1d91e5cec5616c"],["/tags/Bootstrap5/index.html","59c5f43da4cfcbe9ea242f4ec404bd89"],["/tags/CSS3/index.html","a499b55f1f7bd8c91a6959f9c7d7acd1"],["/tags/Centos/index.html","0972a7258ddadee5c913dfeb32c5b4b9"],["/tags/Electron/index.html","e92a94f87e74fc7c73eb19fd362a33ae"],["/tags/ElementUI/index.html","e15f36ed9aa9d58eb087d0a5177ef83a"],["/tags/Flutter/index.html","8bcd786d346236ea0595307edc16794f"],["/tags/GAN/index.html","41419b763b1fad0e2f0fc5adb1810004"],["/tags/GUI/index.html","caa9d11477392db8c28827855b951b0d"],["/tags/Git/index.html","6e780b4c4234d9232e8d0a11076fed26"],["/tags/JavaScript/index.html","c150561aa026c66bfa50c6de5f4c6e72"],["/tags/Keras/index.html","266ef7cfd54cc65c194dc12ab3096b05"],["/tags/Linux/index.html","c0dc9ec3de4e2cc03040825f4b6f9299"],["/tags/ML/index.html","19cd80437d73d4946267ac1652a3a0c4"],["/tags/NLP学习/index.html","952629fa6bf6ee3f5b076edc4a078747"],["/tags/Nginx/index.html","afd54e1a426b6c1b1d1ba8ff1a53565c"],["/tags/Obsidian/index.html","77533f4e2194578b9aca8da259607de9"],["/tags/Qt/index.html","c0de9551ad142a5b94d298a4ba18d4ba"],["/tags/RSS/index.html","02f3dd6c64078ad78ba571b8221790b5"],["/tags/SSL/index.html","4610dc131ecd72737677f8bd5b608935"],["/tags/Scrapy/index.html","735c565fb1b136302736ae4697782ed3"],["/tags/Speech/index.html","d3934ccc925a90c14e860e56e0830ea8"],["/tags/TotalCommander/index.html","9c12c73bc2d27ebaa01b141d71405149"],["/tags/Web/index.html","67bada850aeb3593ab05f70a021a3f99"],["/tags/algorithm/index.html","18dfeadf0550ec0f90a51cea5535162e"],["/tags/bison/index.html","a1f7ed6e539f5b2bfe45429327870e07"],["/tags/bomb-lab/index.html","76c5b635cc24c136a2717ddcbe0b3613"],["/tags/c/index.html","2d07cde1342de8fcdd9928d350dd3c6d"],["/tags/cheerio/index.html","d384ca6574dced4481c0beec601435f9"],["/tags/codewars/index.html","d7a25973084ec476f9ed90b0ba086c1d"],["/tags/compile/index.html","7cce0a90bad3ba634e1a690c446c157b"],["/tags/compiler/index.html","b8d04690a9f0e49e89a90b981af4f6d4"],["/tags/cors/index.html","f42a73cef3b38274098ceab2fb1dce6d"],["/tags/course/index.html","125c43d7d8fb2028ffcb80c37968fa0b"],["/tags/cpp/index.html","83c0ac99bcb4e6076dd06f6c0af7b2dd"],["/tags/crypto/index.html","f1d056c4f573aab746c2356cac78c405"],["/tags/csapp/index.html","20e294e1d7a8222d53ec7e3371385d53"],["/tags/csp/index.html","c5dfe37b323a38da8766e5092927c227"],["/tags/css/index.html","dae4abf489b2147195b3b8c0f3a81d22"],["/tags/dart/index.html","d9f605ee888cf4e2ce559aacf82d4179"],["/tags/data-structure/index.html","7c7c5173859c81fcac9d76541b56d235"],["/tags/database/index.html","8056ef30f9b687afd1f57a02b046e65f"],["/tags/deep-learning/index.html","2d4a0fb4521b4323bd5f910df62fcc75"],["/tags/django/index.html","57e34c1b16ca9e476b545ccc3f70ccb4"],["/tags/docker/index.html","36f0a95963ebf6cbdf6127d0042062a3"],["/tags/dwm/index.html","e36b2b4a4b36faade5cedbfb8a264942"],["/tags/exercise/index.html","4c8b27033a8cf81d3692ea9ea695f4a7"],["/tags/filebrowser/index.html","fa13fd0f1d9331ed6960d0bfe58bc7e8"],["/tags/flask/index.html","4d746cb7e55887cc03deb3d8080303fa"],["/tags/flex/index.html","ecd0ae6e5fe5ad98a46e170bf2e7046f"],["/tags/front/index.html","e114898942876e4a92973259f15b64e1"],["/tags/gcc/index.html","edf813bc5fb8d8a243eb4b73bc68594c"],["/tags/gdb/index.html","da97f3336def7c19b18c5c7a320e10ea"],["/tags/github-profile/index.html","834cd5a19f84f955d01c413dbd1cdf67"],["/tags/github/index.html","0b7ec65ff0a2b3ec63d00bdfdc035f85"],["/tags/graphviz/index.html","8ce14dd26a40b08f1238e6b8b8174e8b"],["/tags/grid/index.html","e752870977422c7d4bd5df7570cbc4db"],["/tags/html/index.html","682dab783aaff8d543eb941732162fca"],["/tags/i3wm/index.html","4c1b985e3189a83b7272f2d2ae7baf5c"],["/tags/index.html","fae85ac7e48fab4a4acf8ee924abad42"],["/tags/issue/index.html","1adbc05fb6aaeaa15c3e052ab3287567"],["/tags/jQuery/index.html","70b996155d791074ed5373fef62e40f2"],["/tags/java/index.html","552628b60e48e1bf330f171d2717b0ed"],["/tags/js/index.html","dea67eb02dfed873a983c005772c0a5e"],["/tags/latex/index.html","9c833dd3b91096d4d88662fa77781589"],["/tags/leetcode/index.html","6bad2fc7ffb4a0c3a23a7a7f09d00419"],["/tags/lex/index.html","8da11bcf80e1ae731bdb3cb53d8c25ad"],["/tags/material/index.html","46005cb3f7fecaeb67e0b0c3d335ed0b"],["/tags/music-player/index.html","18f64766faba707a556a5eadafec0b90"],["/tags/nodejs/index.html","c8168e1aecf703b4637ae5087a73f7d7"],["/tags/noj/index.html","0e18051b803f02dcfc6be683f655311c"],["/tags/opencv/index.html","62706b2067c994a1455a13181c06440a"],["/tags/overleaf/index.html","038b9857ae1d2fa24d47431cf40cdbe5"],["/tags/pandas/index.html","88ff3793d8c9ba603dcb28dfe4262427"],["/tags/premiere-pro/index.html","c158e2e612aa943649963043d9e4052b"],["/tags/proxy/index.html","c8801dd026b82334d620c59010f8c7db"],["/tags/pure-css/index.html","e938639091477c91587021fb87e4b41b"],["/tags/pygame/index.html","f8226071ccb02d03f0bf28ae58d5a70b"],["/tags/python/index.html","ab7669b484d1a695b0201eb1ff6b0639"],["/tags/pytorch/index.html","b751511746cb291e8f645d42cd4e1945"],["/tags/reading/index.html","6bc122d906c839a86a007f87468ee41c"],["/tags/request/index.html","33c417f1419303f2047d350cd8e566b3"],["/tags/requests/index.html","750ffb897c8550bbe051c40028de5186"],["/tags/security/index.html","48f46214ffd0f8c53fae5e99b11fcda8"],["/tags/shell/index.html","cbe1b379da4b298187737117800d5f36"],["/tags/sign-in/index.html","88cb66c1e1e258b604eb63bb0f9993be"],["/tags/socket/index.html","f3b969d213ce19fd1f8eb6552d0a9216"],["/tags/spider/index.html","c114f923103fdf1df8d1c241fe139875"],["/tags/splash/index.html","8f2aec16494f5e2e38f36939bff695cd"],["/tags/stl/index.html","cb5096c02a85521494d1c29c1312390d"],["/tags/sumatra/index.html","ef0228192670da39e4a141ec24faf394"],["/tags/superagent/index.html","e5897707dd0e16c62b69a59a01269c66"],["/tags/tensorlow/index.html","04f2db968fee28380b7853becd70eb08"],["/tags/tex/index.html","333f65daf566fd928a1d39b49047ddf3"],["/tags/threading/index.html","a8c99ca63fcb11018fa863d10384ef43"],["/tags/tkinter/index.html","ceb1418a0218f5a209ca94cebdff2c09"],["/tags/torrent/index.html","17b72616fd36c764a8f169cfcdb08b86"],["/tags/tutorial/index.html","d1446905e5234262d7673e63b2835f13"],["/tags/typora/index.html","c1282a767927580737d80b548fde2b3d"],["/tags/uniapp/index.html","15fb260694a4f3f423e379f93451f549"],["/tags/vite/index.html","8c8a5cc2497ae0cb6d71b7580f3f7576"],["/tags/vscode/index.html","ea178b7b4163d8579014ae46612a958f"],["/tags/vue-element-template/index.html","76b1f8afa7e379bf760cd83cec8139cb"],["/tags/vue/index.html","41ad812e328dd9d948e5a391beb66721"],["/tags/vue2/index.html","5765cc7b82cde0cf7044bd0c6d1de52c"],["/tags/vue3-x/index.html","e217894633e82502a4e8f577041bf639"],["/tags/wechat/index.html","7639813153b7c2fbf67b379b28f687ba"],["/tags/wm/index.html","4d7b9cb5b90c485a39e149a0e6691aaf"],["/tags/wordpress/index.html","638123b069f8fbb4f44d2d5c87f48ba4"],["/tags/workflow/index.html","29be7a0724576faaf5d35e8381929054"],["/tags/xpath/index.html","e0a81624ac9a433746d776fe4514c532"],["/tags/yacc/index.html","ff2e0ac8592f5337304d0e94d1a0dc5e"],["/tags/zsh/index.html","e76c8dc3faa899686cbadfa0d97cb9a4"],["/tags/七牛云/index.html","f3dda761dd95fc1de77a3d29e6492ea1"],["/tags/函数/index.html","7eb99ce5ca56b9d28e580d057dde46a4"],["/tags/剪辑/index.html","ae3bf5c5478cef8fdca35ad045b22167"],["/tags/存储/index.html","04420fce1bf11ade77b2e8d6590039e9"],["/tags/实战/index.html","08968b84ee065e468e16875b51761c92"],["/tags/工具使用/index.html","d2d010a6558073af21343946f92d775a"],["/tags/建站/index.html","85d05b86f83c7d1128d0769c56a56df9"],["/tags/微信小程序/index.html","a95f0ee93c07a34f2b78bf46a39bdc95"],["/tags/指针/index.html","a4ffb0962f6774a27255e0547219412d"],["/tags/效率提升/index.html","848537dbe9a8ed2ef79a3b3162e7ed97"],["/tags/汇编/index.html","f8dc76c4d62b60d65ae490c3bc43a9e7"],["/tags/浏览器/index.html","622b551a9e7574c7914a98b4375947e1"],["/tags/爬虫/index.html","522aea56c76ebdfbcf3b52008a1400c5"],["/tags/算法/index.html","e21824e99b593305ea32ea825cd4fd7e"],["/tags/编译原理/index.html","e3e9b4664d09edaea6773cd07e3cf1f9"],["/tags/获取地理位置/index.html","72a6cd69d0f5f753a3083e2db2f5f4be"]];
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
