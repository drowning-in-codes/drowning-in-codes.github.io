/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","3b09f48d3a6da9c45e60e43a6e78595e"],["/2021/04/20/稀疏矩阵/index.html","6ef0e23706ec500ff8ae68aae31a84b8"],["/2021/04/23/广义表简介/index.html","c095593b97c91b564a3b5052b794ca7e"],["/2021/04/29/关于指针和函数/index.html","eb883c370fdf79f13b7fd84521a7da25"],["/2021/05/10/哈夫曼编-译码/index.html","4e73d13d7f3790e0a4d413ae36ae8b89"],["/2021/05/17/数据结构noj_2/index.html","3573dfb63e57214bec64059091413b85"],["/2021/05/30/数据结构试验/index.html","97f2f415b0035166fc84581026dcae92"],["/2021/06/12/数据结构noj-3/index.html","79ffc5fd7ff6dc2696a6339f5f35ca53"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","8f97918b8c8d028b793817c5a321832c"],["/2021/07/08/课程资源分享/index.html","880fbcddb53e57d8f5a73248630bea53"],["/2021/07/20/Scrapy-下载图片-文件/index.html","f2e6e6fb9041acaa7de085208966fa24"],["/2021/07/21/Scrapy-动态网页爬取/index.html","b1c91ef0eaadd33f4772c132efd04865"],["/2021/07/21/疫情打卡/index.html","cdd1844d334f96fc0a6cf79209c8100a"],["/2021/07/29/Scrapy代理设置/index.html","c48e2db7db443c14f4b9a8e8855ff338"],["/2021/07/29/数据库认识/index.html","34d3ad91068fed803083e2364efbf055"],["/2021/07/31/Python多线程学习/index.html","c53b8e380ceb1e714230e068059db3ce"],["/2021/07/31/tkinter-requests练习/index.html","b4e19a3e1b9d4cc4ee4b4598c9ce3f4a"],["/2021/08/10/Git学习/index.html","9d343b2203d19af6702f933ef506d3f6"],["/2021/08/15/pygame实践-1/index.html","4fa0c99d94a6afb78dd62aa2006206c2"],["/2021/09/06/微信小程序开发/index.html","a151163e90d9b4e034e950697ddbe3eb"],["/2021/09/21/命令集-1/index.html","396f918007ef7d04348a72d52a1d371f"],["/2021/09/21/命令集-2/index.html","6ed4cd640f32f2266850135faac8e943"],["/2021/09/21/命令集-3/index.html","4a2d7328fb55e49d948960b263e31caa"],["/2021/09/21/命令集-4/index.html","40a7d43609abdf849fa44bd2dd7bc05d"],["/2021/10/03/socket学习/index.html","2b3ec88008c4e97cd4d1b226c000904c"],["/2021/10/10/dwm入门/index.html","56efcf9137e5403a7d2c4cc5b72e2f1d"],["/2021/10/10/安装ohmyzsh并配置/index.html","74671a7cd0480483ff7b8dfa2d8ef551"],["/2021/10/20/css学习/index.html","594e4bf30ff4e6973623da9e06601dec"],["/2021/10/20/wm入坑/index.html","f2cb21d15c271b0ec60f77313e833ef2"],["/2021/11/03/微信小程序学习/index.html","5cd3d035d99218d0fc35e9f3d01705a8"],["/2021/11/04/css揭秘/index.html","ca20e4cf9cc59ef175b7931def52d776"],["/2021/11/05/css-练习/index.html","0bb909fb77650b0816453ecaac352ef0"],["/2021/11/21/命令集-5/index.html","b8d90507a694aec3f56b8dfeb1b945d6"],["/2021/11/21/命令集-6/index.html","9af264dfe7eb80db16a3928822d3f694"],["/2021/11/21/命令集-7/index.html","9e777279e1e84b33d92913074a5214c4"],["/2021/12/01/搭建wordpress/index.html","fd4409033f4529804fb2ec561e522437"],["/2021/12/08/python操作百度网盘/index.html","d528f7e183fadee5c0ad958513ffee21"],["/2021/12/14/js爬虫/index.html","9d8fd84e8d4f3a11c6d68202012c7521"],["/2021/12/25/为网站申请ssl证书/index.html","d5c746ae3455985c2feb83a70debf5fb"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2c0f4d1836ed34524e3c48c3c9b74db2"],["/2021/12/30/jQurey继续学习/index.html","1f37fae3ee17a5954f524fdb4784ae84"],["/2021/12/30/jquery学习/index.html","28875e05e489f5eb83947c26999625cd"],["/2021/12/31/vue学习/index.html","aa5c7efd37cd0f918a5b16642f2dac0c"],["/2022/01/02/疫情自动打卡/index.html","c3c828bc2929d2a99fd6ee7ed3fda39c"],["/2022/01/03/javaweb初体验/index.html","b3bfd0f6df64f07c7e508dc980ca3cfd"],["/2022/01/04/codewars练习/index.html","a9decf6d70348d2b98c5d5336d5644bb"],["/2022/01/05/Spring学习/index.html","75724db434e072a7dd1c5aa1e1a3ad81"],["/2022/01/05/vue实战/index.html","984df7a944c5cd6162517e34140dbbb6"],["/2022/01/08/gdb-gcc学习/index.html","ea50c7c07342eabb39fede3498935524"],["/2022/01/11/python-opencv学习/index.html","3f69f76377c906c57a1799bd79e1ce33"],["/2022/01/12/汇编实战/index.html","53b889a1a2c9fcd3faebb4a962d9f995"],["/2022/01/17/pandas学习/index.html","5daaa1b381cbfe7707942ed73b0395df"],["/2022/01/19/可视化图的工具/index.html","f014ae589005d5f7e7e8ecfeffdcb2ee"],["/2022/01/19/机器学习入门/index.html","83052c8bf05f6cbd2a4c1fae3c13658e"],["/2022/01/20/cousera-ML学习/index.html","d3aef7e941468408142c15387fda1c2f"],["/2022/01/30/typora解绑后出现问题/index.html","ce5ac8150d89783ea6a31b702c64b410"],["/2022/02/03/NLP学习/index.html","de0ecc08a2e57b281f711695de80cfd3"],["/2022/02/04/Web漏洞学习/index.html","5d636e381bc997f6b772bbec3bbb4aa8"],["/2022/02/04/pyqt学习/index.html","3fe22d811490f145a3081b1d4ac8fde4"],["/2022/02/04/python爬虫/index.html","1fba0e6290258e843bc12d600f0b60a3"],["/2022/02/18/Electron学习/index.html","af0664889be6b98a3578b20277c82edc"],["/2022/02/22/疫情填报字段解析/index.html","2693b2a7e1758dfffc7e869ef999b5b6"],["/2022/02/24/Bomb-lab实验/index.html","acb29c6946587382982bcb45990758c1"],["/2022/03/05/nginx学习/index.html","61c08a46815910de4c9a891171983530"],["/2022/03/09/汇编原理课程学习/index.html","4b46fa155f4612511b68b08ce28d0a65"],["/2022/03/11/Keras学习/index.html","c1527a774ccde5e931726ac6b2ae93e5"],["/2022/04/01/graphviz学习/index.html","85a5f5da204e8a488f659ddbd2d54e53"],["/2022/04/07/django学习/index.html","38717c31be196a5eff7e232b86aec3d0"],["/2022/04/11/密码破解学习/index.html","3700c71bfd17ea6aa43c3b56112b06ae"],["/2022/04/12/flex-bison学习/index.html","766c8a093fc6c2d84e28538c9115f6da"],["/2022/04/15/pytorch学习/index.html","810f596e7dd6284e15b8f6fd09df0233"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","de8a682d3b6da07e94c900bb089ffc84"],["/2022/04/23/写一个音乐播放器/index.html","cb2fdc349b79ae6ac26fc4feabb6ed9f"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","0c9c80226f52a6b515e839f35962a978"],["/2022/04/30/GAN学习/index.html","313a0787bca42f94434a7cd1d94fefc7"],["/2022/05/02/html精学/index.html","c29cbe50bf72659715454066503ee2d5"],["/2022/05/06/write-a-compiler-by-yourself/index.html","50cd14eab1bfdb80626651daa00cd1b6"],["/2022/05/30/acwj-01/index.html","74dbfde5faa5b1503917744adbfb7f7b"],["/2022/06/14/animeGAN/index.html","c46786cea8cb9e5bd9233d2cfa6198f7"],["/2022/07/09/c-与算法学习/index.html","606f37572b3c9a2fbc39fd70608d22c2"],["/2022/09/19/flask学习/index.html","d272eff2cc752e2e0c568515014ee88b"],["/2022/09/22/cs224w学习/index.html","83ba8f6940671943f0d7eae85f07d563"],["/2022/09/28/记录一次wp重装/index.html","7eaa9b6207097da854a85a0b77fbf6d8"],["/2022/10/01/Obsidian学习/index.html","daddd576b0eb9f2cb757e4b853f3e7e6"],["/2022/10/08/vue-element-template实战/index.html","c5ed9fac5ba276d78451a2d3adbcc112"],["/2022/10/25/vue网上商城项目/index.html","ae92500133c12414effa5594dd0b114f"],["/2022/11/11/leetcode刷题记录/index.html","02d7d2e2b43a35639c6b5a012cef12c2"],["/2022/11/11/使用overleaf优雅地写文章/index.html","b75af46b5a467cde5d5475da239d2998"],["/2022/11/22/磁力链接与RSS订阅/index.html","f9ae52c7c29b8a197d6167c03a24445e"],["/2022/12/11/uniapp申请获取地理位置/index.html","bae13e1ede892015d14ca25a50f4dafe"],["/about/index.html","307ff60a23d2a904f07041e47bc5430e"],["/archives/2021/04/index.html","526d9c37c8c2ca16a1fc38c7ed85999b"],["/archives/2021/05/index.html","9a2878ac4668a168f9345a95df1cd1c7"],["/archives/2021/06/index.html","2e977569f046d7622c22167936137ad4"],["/archives/2021/07/index.html","a75f386d1affa8c864b30cb3447db6af"],["/archives/2021/08/index.html","14ed2663b0d6f415aa30d264fa012d0c"],["/archives/2021/09/index.html","0f7a0b02f527be6e67017d8ed07fa6e0"],["/archives/2021/10/index.html","975437917b9bd23271b878cd70d02615"],["/archives/2021/11/index.html","6f4860b10f43ca88a61d4f5de2c96f62"],["/archives/2021/12/index.html","339de2fe92c2d803ecb3c6ba11ddecac"],["/archives/2021/index.html","4df7503d12772cbc5335eaa7c08cca72"],["/archives/2022/01/index.html","e921313399d1fd306c604947ca723352"],["/archives/2022/02/index.html","1a4126a0d077f23bde7b0e1827fde495"],["/archives/2022/03/index.html","4d1c34c1a577ddac8ad892bd8fe93673"],["/archives/2022/04/index.html","42db644025997ee10f590d16e8f0a9b4"],["/archives/2022/05/index.html","a543882765882b17e71bddd6e1f87706"],["/archives/2022/06/index.html","58ea2efa0f9b51d12b1a477e51ed138b"],["/archives/2022/07/index.html","94ddd2d7c8f6c3495c85fc990d7bffa6"],["/archives/2022/09/index.html","c3b31c9355442ea66d16ba67480138bf"],["/archives/2022/10/index.html","49c12701294fe48b597abb180c4b410d"],["/archives/2022/11/index.html","ea3ac387539607695a1fc2611296a9e5"],["/archives/2022/12/index.html","4abcddaf9d3370e8fde741f3fdb942f1"],["/archives/2022/index.html","7b0fff5eba79588568ce17f257b3eb1c"],["/archives/index.html","58c2b6a9ffa5805ebe621846a01995b8"],["/archives/page/2/index.html","90ff29153d1416f13c063f9f0b763de1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","ee0fff08e8ca38fb2f53230fc66d4461"],["/categories/ML/index.html","224b26c6eabb2c586117c450fa572da5"],["/categories/Nginx/index.html","f882846e9ae3fbb22796682aa240ee0c"],["/categories/Spring/index.html","1fd79ead0e9f1309a6e51bec51c339ea"],["/categories/course/index.html","f30161cf000231d688093eb6f64d8751"],["/categories/django/index.html","e13489cb3b5fefafaf0831d2264eb963"],["/categories/fun/index.html","bfd975684ff6ae64b24649b12e4abc78"],["/categories/gcc/gdb/index.html","cdc0bb859e9b1fdf19f5a6f3e5cdfd95"],["/categories/gcc/index.html","e3466511c8be00e3661c5628a9fb1f63"],["/categories/index.html","6bddd0b71af8517c088485530dbd011c"],["/categories/java/index.html","365db5cba75fb1ee16098a280afd0504"],["/categories/python/index.html","5592baef18789282408c4d8dd9746126"],["/categories/study/index.html","d4a3c5b99a89544ba447bb14ef5eabf2"],["/categories/vue/index.html","6270f522bddc6bdded82e9c1a6fb9927"],["/categories/误区/index.html","e4dfaf3bd843f7bbb2ff61b49fbf129b"],["/commonweal/index.html","eb128d4ed72c4fa86d7d50be7a89c1ac"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c40ec173cbed2d4c41d2deb3afef82c2"],["/home/index.html","9ed6d79eae569a2fbb32160aa3f4f2c7"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","5b25b3c42b752aab7a9b0e93e4f183fc"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","25706a73486f478a8974075b7a7ee731"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","3386e704b4a81e41887bcff7418a90fc"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","094b580a52674279372720c4772390dc"],["/page/11/index.html","1b96f994a1586ea9b6ac6c6bd7fed951"],["/page/12/index.html","3e8081521073d67b9d4ab8f6f8134434"],["/page/13/index.html","b1ec70c469d9fb984870fe371bd4ddc4"],["/page/14/index.html","b9c2210f1978d201b523aa0fe43e6058"],["/page/15/index.html","45035fe38b3bdc34e54599eb88e52b6a"],["/page/16/index.html","eff1c0456f06faea2fa05e166ab103b7"],["/page/17/index.html","5428913514ad1d0c7f971c25cee3c1f7"],["/page/18/index.html","5a5a50ec6701ea34b62790923e2fb375"],["/page/2/index.html","d89a5e46bc3cdb4f655ba2219860e378"],["/page/3/index.html","9c98a7bb75cca56b63f62f4e51fb7deb"],["/page/4/index.html","9f66af09fb264b5af4487f66f1d9f7f5"],["/page/5/index.html","6b47d28317350b006faaad38f1c9ecf4"],["/page/6/index.html","f4878690550972437380b49108d1a506"],["/page/7/index.html","e7cd86dd2944216e9e35a2636e5f6493"],["/page/8/index.html","0487ebd4d0e98967911c49bf97b97896"],["/page/9/index.html","1dbe97e69ffbcc17a8ca8bde8d26ee67"],["/schedule/index.html","5c7ec80e5b4fe7da41bc778dd7986d73"],["/sitemap/index.html","a9528177e7f8192301384b390a8d660d"],["/sw-register.js","9be898641591e3682a7058cfb383fdc9"],["/tags/AI/index.html","c138c5d822ec687ba42cc9c2284368ae"],["/tags/BT/index.html","e09dd18017d7bc73eb807d27ab51ed5f"],["/tags/BaiduNetdisk/index.html","29e65056e1c044a08602144d2d31021d"],["/tags/CSS3/index.html","119a21146f0746f65014ad933b6bc4ba"],["/tags/Electron/index.html","24595e90ff7dea5f3ad614e386dcfabe"],["/tags/ElementUI/index.html","06ba5fa70f136983f2a5414cf1249984"],["/tags/GAN/index.html","7ea24f0e3b26e38552ef643f8a2b4161"],["/tags/GUI/index.html","5bc393eec5993faa6dc0adc9be854ad5"],["/tags/Git/index.html","cf647103d34ea30c91dc0adb024ce86b"],["/tags/JavaScript/index.html","3b6eaaab7ca36a6e89b823b6ef9316fe"],["/tags/Keras/index.html","fddee11bd056b59fa249982ade0c09b8"],["/tags/Linux/index.html","1c04fa8c25a173ddf9a9f92052dfb542"],["/tags/ML/index.html","310264bf7fdcb30829043e17ce7bf509"],["/tags/NLP学习/index.html","13e7e95e93cb9e681d9fb958beaecfea"],["/tags/Nginx/index.html","cc399490eb9d51df0ce69ec1d9b3e1f8"],["/tags/Obsidian/index.html","a2bdf40bf1d312e5bd11f26d4356e9b3"],["/tags/Qt/index.html","3f4192169290112d0af19581d7f9bafa"],["/tags/RSS/index.html","39e5e48e67fe17143924a04efc574c63"],["/tags/SSL/index.html","c7ae5226bfdb4df4df92243ac33debc7"],["/tags/Scrapy/index.html","013426564e2b768775e2d70682384ece"],["/tags/Web/index.html","b327c5973da843378dc6ff109357db8e"],["/tags/algorithm/index.html","f9888a547d200278e1ffc9346dd5a332"],["/tags/bison/index.html","68eed2dbf48cc1477689e931d4c1ba7c"],["/tags/bomb-lab/index.html","297890e7fa9b1b3cfd152e8e788967a7"],["/tags/c/index.html","f78d1cc172afc24e4e7db15a88583688"],["/tags/cheerio/index.html","815070279c287066e3274b7b4b8bc836"],["/tags/codewars/index.html","0d5225e26666b9c33947b7d1dee85acd"],["/tags/compile/index.html","625cf967484f29e543b542fdecdc9efb"],["/tags/compiler/index.html","b8d956cf1f5a3e44a1a1606eb6babac8"],["/tags/course/index.html","e0d097530e3ced97efd56c2b2a7d75b9"],["/tags/crypto/index.html","273355be8b6388c9bc5087ab349a5ed1"],["/tags/csapp/index.html","eff98fa34c401ef4f4b6c8d5616b9679"],["/tags/css/index.html","7b8bf4ee1f3732f84963bb689d7db3d8"],["/tags/data-structure/index.html","4d4e025f41e079e3b149dccdacee2e25"],["/tags/database/index.html","d337955706a9cc244b6ab9c3c95acc95"],["/tags/deep-learning/index.html","93d27c22523e2a63e2892a18c15773cf"],["/tags/django/index.html","8f4a6183cfe98bf084a7b718b61dcb97"],["/tags/dwm/index.html","2aa67042853abb32de5f890616a60d1d"],["/tags/exercise/index.html","822e7f028188292263980c793babc3d3"],["/tags/flask/index.html","80620381729ebb82f9b6504fad8b85cf"],["/tags/flex/index.html","a8a553406f9d10f13f88a422841529ab"],["/tags/front/index.html","9e583ea7ec6685c33271338a732a1a92"],["/tags/gcc/index.html","c1546c8f53aaea5e5ec08053e4ade238"],["/tags/gdb/index.html","1dd628ba0cc4fa6adfae169bc0754c6d"],["/tags/graphviz/index.html","3e13a8dcb5e32d7a894a67de99e9d4cd"],["/tags/html/index.html","9063651cdb9ed7980912d51e0dfdcd6a"],["/tags/i3wm/index.html","21b8db3d60bb2d5b64c0cae972525b4b"],["/tags/index.html","3f718d71d2abdbcd12fecfd52f675667"],["/tags/issue/index.html","360980a8a28d1e04cfce19bb08b3482a"],["/tags/jQuery/index.html","a47f2fd14a4dcd77c3ef04bcd64d8543"],["/tags/java/index.html","3d5173c8c7fbcb13d68a8250d30fa190"],["/tags/js/index.html","acc700d1e78535ddc71070a1059b64f9"],["/tags/latex/index.html","3f1247d43e65f5e1d610e055b6c0c41c"],["/tags/leetcode/index.html","cbeab8fd6ffdd8e9a8b0d6b9b3563e5f"],["/tags/lex/index.html","10facba1a28d66dbb07bfc7c625c727b"],["/tags/material/index.html","af01bb584f6cde51fe72e7bfca66270c"],["/tags/music-player/index.html","bce27ac4645c27443d48eb90d1f8c9e0"],["/tags/nodejs/index.html","cc84c6dfbbd18cb4dc814e75971b5780"],["/tags/noj/index.html","c9d671f634ea033fb2011b122c126d23"],["/tags/opencv/index.html","260944ab172e9c66c29fdb652ac28ecd"],["/tags/overleaf/index.html","7ebd8bb5638828c349c641bff517fd97"],["/tags/pandas/index.html","2c51820344a1b58567041c2ddd6dd8b8"],["/tags/proxy/index.html","22b2c625c8584f1b67527a63a150d7d7"],["/tags/pygame/index.html","c02faf0e147a73ff02ef7f6b8323b258"],["/tags/python/index.html","b7ab814c5ae75b03b2689b5425081378"],["/tags/pytorch/index.html","10aedef5f178f46c41dd43dfe1ea45a2"],["/tags/reading/index.html","99f1bcb677121422c740290a8bef4130"],["/tags/requests/index.html","8056c989db3c3c92407083c336036689"],["/tags/security/index.html","c112919fb764d3f2c00dfa1bd8baf003"],["/tags/shell/index.html","6ec2c686dc96532cf864ada6078c4665"],["/tags/sign-in/index.html","5ecde2cfd5861d2eccdc359237cb2375"],["/tags/socket/index.html","359794824ffe0f64064c9a569746367f"],["/tags/spider/index.html","d3eac9d6977c1d60ec051d10519c36e9"],["/tags/splash/index.html","14aa1773d33ab26ae6748ae377defca9"],["/tags/superagent/index.html","46f946638d3c2c561e3d2ee280b05849"],["/tags/tensorlow/index.html","c1ab7742dd126546f87554bee8d77c6f"],["/tags/tex/index.html","9157b06fe2be840e875defc44a11d58d"],["/tags/threading/index.html","8482b7c471a5221b7b0defa75a22f809"],["/tags/tkinter/index.html","231306511a348761905e82d745039b64"],["/tags/torrent/index.html","861396b017c079e05892328531a37e2a"],["/tags/tutorial/index.html","417fb41396a73244b5c7dbf362e847c1"],["/tags/typora/index.html","b4b52b3436f75b7d1fbadef612ebb90a"],["/tags/uniapp/index.html","17d506e5c3170eecd5f5eea35dff4431"],["/tags/vue-element-template/index.html","b42c4511517a900127a72d36f7395522"],["/tags/vue/index.html","09491d7886e63ebb33d5a75b26d082af"],["/tags/vue2/index.html","36879572bb0b2477aad3f53e05874b9e"],["/tags/vue3-x/index.html","137ea5cf440d00dfede81184cfadeb4c"],["/tags/wechat/index.html","579bc309a5412fde8029352a6c066108"],["/tags/wm/index.html","2a4d9a49ec5db9ecd2c0d5c30030075e"],["/tags/wordpress/index.html","ab67b241c24e9ea60ded9bc9ea788477"],["/tags/workflow/index.html","4f72c321f636d18aa51662ddb82b1977"],["/tags/yacc/index.html","fe242ef6aae10d644cf309871e956238"],["/tags/zsh/index.html","69f684cbbfdb4d06ef65c80921b37f0e"],["/tags/七牛云/index.html","24e72126cf0c8aea1fec6c91a403a523"],["/tags/函数/index.html","08a76e42fd37d8e6b5bb747c0214adf4"],["/tags/存储/index.html","d45f0950549f5596fcce28b4a850e345"],["/tags/实战/index.html","9dd08e0e5ae908ce09afc4e628135598"],["/tags/建站/index.html","b01be411de0c90673477c63e386440d0"],["/tags/微信小程序/index.html","04c132731e416f91d4ab8c7556dd0505"],["/tags/指针/index.html","50430c5083800a634213cec1b5b9b437"],["/tags/汇编/index.html","d32b18db4e70268f8fdc8b8e9d51b7d5"],["/tags/爬虫/index.html","bb4d28751badf1a33715287dd0c310ad"],["/tags/算法/index.html","3f2529d12b562985d28076c540ccae69"],["/tags/编译原理/index.html","41537ade8e8a7dfe5dd4cd8837efce3a"],["/tags/获取地理位置/index.html","b3b4c977b6d65a86c7e4ffdcb5d506d6"]];
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
