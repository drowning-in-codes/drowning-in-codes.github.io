/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c5bb07d6c8ae51da058c1f99ef819d80"],["/2021/04/20/稀疏矩阵/index.html","4fa0d7adb2f8a28bb31a7d5d0e50a48a"],["/2021/04/23/广义表简介/index.html","9aaeed03dd429859eeb83e6b57160ee6"],["/2021/04/29/关于指针和函数/index.html","d7acae775dab8eedb9a7f0c29a07dfa6"],["/2021/05/10/哈夫曼编-译码/index.html","8ff147089cd3bffbc9b2f3b1c7f694ed"],["/2021/05/17/数据结构noj_2/index.html","abe4bf8ff5d46e1d8465885137e7c847"],["/2021/05/30/数据结构试验/index.html","690edd3f426aa7eff3a72ec72e26ba98"],["/2021/06/12/数据结构noj-3/index.html","8245a17014a66cb990e12962c84f16cf"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","5135aed2b7df0677f78ec1d6bb369b57"],["/2021/07/08/课程资源分享/index.html","add77fc6b539225521c6053df4a19201"],["/2021/07/20/Scrapy-下载图片-文件/index.html","c13fcd4cb4b64a234cbc202802966117"],["/2021/07/21/Scrapy-动态网页爬取/index.html","045e41034e2c8105753fdb727072d4e3"],["/2021/07/21/疫情打卡/index.html","f94517424d008a702df2bcdcef8cf4b6"],["/2021/07/29/Scrapy代理设置/index.html","d80a5ab570dca081a16b164f243e7177"],["/2021/07/29/数据库认识/index.html","fbec442f50b719455aa1881cdda3473b"],["/2021/07/31/Python多线程学习/index.html","8d5ae0a20bc893926db1eb1094a5de7e"],["/2021/07/31/tkinter-requests练习/index.html","8d69b2c519faf1d6a05f7e0cc74fd093"],["/2021/08/10/Git学习/index.html","e950f2288b1261582e05b60c76b1aefd"],["/2021/08/15/pygame实践-1/index.html","1059d096837b2f485a790a41ffd948d1"],["/2021/09/06/微信小程序开发/index.html","e2480d1893d473b3a97014638d74032e"],["/2021/09/21/命令集-1/index.html","38f232e1569a02b6a7a9696117b97f10"],["/2021/09/21/命令集-2/index.html","ce12d624b9fb522747b0d6eea411a985"],["/2021/09/21/命令集-3/index.html","2f16562175dc4b5d87f7a5bb549b32fc"],["/2021/09/21/命令集-4/index.html","f6f2b9d812692b341813453a81a4124e"],["/2021/10/03/socket学习/index.html","4d12a458400900352719042fe0267277"],["/2021/10/10/dwm入门/index.html","c5d91b0808c696aa12114edd38476b30"],["/2021/10/10/安装ohmyzsh并配置/index.html","85f52649f5219582d0a246a701fcdc1f"],["/2021/10/20/css学习/index.html","2b98f8c62f96ecfd009f537664a84a76"],["/2021/10/20/wm入坑/index.html","8d7dc1f3c3fd6f3c712eb5e061944fc5"],["/2021/11/03/微信小程序学习/index.html","05c60709a7562cf7de56cf4dd15c9de8"],["/2021/11/04/css揭秘/index.html","45718a5da151636b81cda2b31c4285fc"],["/2021/11/05/css-练习/index.html","2d8c3abd332552e5f642cdb9bf68cf7f"],["/2021/11/21/命令集-5/index.html","849130afeceee011093668a38e9a4ddd"],["/2021/11/21/命令集-6/index.html","ac89a26d543da02ff57e62a51a3c5a43"],["/2021/11/21/命令集-7/index.html","48e17c35eb420f26bb5aa743bbbb6b58"],["/2021/12/01/搭建wordpress/index.html","fb777db77ccbe32e7a4e9570e6942c2d"],["/2021/12/08/python操作百度网盘/index.html","7d1059293ac89922d60633132dc63fea"],["/2021/12/14/js爬虫/index.html","40addd0bffcaf0f71c6b3c8201cc0ed7"],["/2021/12/25/为网站申请ssl证书/index.html","f77f17fa108713326c6dd3a4945d3a67"],["/2021/12/29/使用七牛云为网站提供服务/index.html","1fbf7c9093afc8bcc8dd72c071537293"],["/2021/12/30/jQurey继续学习/index.html","dfc267f87eb7e5b7b1e7d653c943a0ae"],["/2021/12/30/jquery学习/index.html","829d2cd92eea6861410b48b8b24d13d0"],["/2021/12/31/vue学习/index.html","b37d32e3e63770154c14b8f77ce52c7e"],["/2022/01/02/疫情自动打卡/index.html","c430f03ec4822ea721cf2e7594936990"],["/2022/01/03/javaweb初体验/index.html","973d10fb065bfab78ab3dd8e2fa1ca1f"],["/2022/01/04/codewars练习/index.html","740823cb1d66dc79c4b0958d273c5cbf"],["/2022/01/05/Spring学习/index.html","fa4e214d8c205288008c05a5bedc90f5"],["/2022/01/05/vue实战/index.html","cab236a81071097074167bae16e0b6db"],["/2022/01/08/gdb-gcc学习/index.html","eefb3ac29aa600ce16236d2abcfce33f"],["/2022/01/11/python-opencv学习/index.html","df40324f1394b75d4bd5329722b25cfe"],["/2022/01/12/汇编实战/index.html","65d87c9b4ffc16277b5f15f9d9b2e9c0"],["/2022/01/17/pandas学习/index.html","04d79c007817ae17f9a83d46257da77b"],["/2022/01/19/可视化图的工具/index.html","61505b98a27d9a7ba4c1333b5daf9f9d"],["/2022/01/19/机器学习入门/index.html","3d55f6c47682c57e8ba1bed35a627e53"],["/2022/01/20/cousera-ML学习/index.html","ea407c52a3a6be31653aff677b7982cc"],["/2022/01/30/typora解绑后出现问题/index.html","0d297e17315d4f3bf94f1c71ef0a0924"],["/2022/02/03/NLP学习/index.html","43819481ad68fca339fb9f6b8ed08360"],["/2022/02/04/Web漏洞学习/index.html","f1eb17f698781bffd7cd7f9c93f54a64"],["/2022/02/04/pyqt学习/index.html","e78d19c0ea56c3b378352fd4928d1988"],["/2022/02/04/python爬虫/index.html","8a36a87012d00b6e5b21f9d3ff30fb70"],["/2022/02/18/Electron学习/index.html","6cf097f7d360d958a9cbd84c1bb24bac"],["/2022/02/22/疫情填报字段解析/index.html","bd2a554438ebf86085b8175615efe437"],["/2022/02/24/Bomb-lab实验/index.html","93651285eb0654fd341492b6c26e54ae"],["/2022/03/05/nginx学习/index.html","1c7b692b229d78d8c091b67a41ffccd5"],["/2022/03/09/汇编原理课程学习/index.html","04a290be484c3862ccbaa388dd47c425"],["/2022/03/11/Keras学习/index.html","4a9b94b4e46b5cc03275810b3345af8b"],["/2022/04/01/graphviz学习/index.html","ae208a51a0abd093d1770f44a2b57f71"],["/2022/04/07/django学习/index.html","ade6dfbbe9989676660cbc6fef35babe"],["/2022/04/11/密码破解学习/index.html","afbecac9b7ded0f50ece864fd5c74372"],["/2022/04/12/flex-bison学习/index.html","3637bc28e96e7359324d23fe13a9cb89"],["/2022/04/15/pytorch学习/index.html","646b6cad0c72b50715a10413463d505c"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","233dc821652f80d5b4340c9708fee405"],["/2022/04/23/写一个音乐播放器/index.html","f34a262a0b415bd47b27b896cf495cd1"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","4d406d979f6daf88a6c96998a9102f3d"],["/2022/04/30/GAN学习/index.html","10ef065ebadd2571f7b6b7b61d3f3395"],["/2022/05/02/html精学/index.html","5814d0f500eaca881be013d644276d12"],["/2022/05/06/write-a-compiler-by-yourself/index.html","45de92d9cf24c171634ca701d970d9bb"],["/2022/05/30/acwj-01/index.html","0217b4c9cba14f7ed2819e7fb416aa12"],["/2022/06/14/animeGAN/index.html","1a03328f50dc44a4f418f02b8c6d1f43"],["/2022/07/09/c-与算法学习/index.html","c4afae3e6081a5ed35296fa226d519bb"],["/2022/09/19/flask学习/index.html","5335a7db8f491c2b1d4ac53b15408dc0"],["/2022/09/22/cs224w学习/index.html","c528b5b450aa63705de399549fe9ddb6"],["/2022/09/28/记录一次wp重装/index.html","42122c15a15e81137a0f53ca352f3171"],["/2022/10/01/Obsidian学习/index.html","69af18bbab6c0c4b8012f80de35fcc6b"],["/2022/10/08/vue-element-template实战/index.html","9f692dd238c545d9d373c057e37d4861"],["/2022/10/25/vue网上商城项目/index.html","6ec783dc676feaa8398f80b3c4e1e9df"],["/2022/11/11/leetcode刷题记录/index.html","6d7cba85c0aa2b017258e315ee5c64a6"],["/2022/11/11/使用overleaf优雅地写文章/index.html","5898a670307f286578e57e1fc2df1ee7"],["/2022/11/22/磁力链接与RSS订阅/index.html","9cbe755843e08a4dc93ff88c6b3c3340"],["/2022/12/11/uniapp申请获取地理位置/index.html","cfd4080409c17cc5dfd93a64d5a9d5ea"],["/2022/12/26/pr剪辑学习/index.html","cd5682e51550b3c5f0c882bd7a13490e"],["/2022/12/27/css中的flex和grid布局/index.html","e1c22827f0fd6b1a2aaa18358b861d30"],["/2022/12/28/Flutter学习/index.html","4329a11853b1b58fcbc639b490352743"],["/2023/01/01/美化github首页/index.html","993ecf2cdec18e95811e1070cbdd784d"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","d9fa1afc17fd9dd735a1a4f3f596b8c3"],["/2023/01/04/构建微信快捷发布文章工具/index.html","6574ac6f3dcdd4eaddd902a1491fef6a"],["/2023/01/14/dart学习/index.html","e531c94321faaf98ba48ff2448e0725c"],["/2023/01/23/闲置服务器BT下载影视/index.html","8cdde63504d45504f4f8266c00a2d2da"],["/2023/02/07/TotalCommander使用和学习/index.html","023f611f089486c311cce700c0431839"],["/about/index.html","4c1cd3f1bd3a46348658d604975b89ba"],["/archives/2021/04/index.html","492128a3199381741410280a4f4082a5"],["/archives/2021/05/index.html","f006dd56a567e62cc00a597bad9867cd"],["/archives/2021/06/index.html","a69911928e7e0cef443278329bb75ede"],["/archives/2021/07/index.html","a946c89205e6493fc816eeb4a93e1cab"],["/archives/2021/08/index.html","716cd19f9c67776afb10d511cbd278e7"],["/archives/2021/09/index.html","166507efbb5fb6b58a93c7238bb8380e"],["/archives/2021/10/index.html","cbc6d6e7c62c412f58237d93a70a9226"],["/archives/2021/11/index.html","55668b04f0856cf67ba104f3511b3821"],["/archives/2021/12/index.html","c36c7d630b9b527a3336739e6333794f"],["/archives/2021/index.html","28a6f6fe23e8e464fd2cbda11b760270"],["/archives/2022/01/index.html","638dd924464eff011f858abb88e048df"],["/archives/2022/02/index.html","50f2ab08f75b43d2c779e71d4d955673"],["/archives/2022/03/index.html","3c31caf434c05b824d75199c1dc67e64"],["/archives/2022/04/index.html","669174bfd0020cf7e4c73827dcaeaec1"],["/archives/2022/05/index.html","4627a6ffa923a4f06490d6fc158b2942"],["/archives/2022/06/index.html","c4e7d0fca6c5be37ab4b2b0d7b257af3"],["/archives/2022/07/index.html","7388a4751985f94ebda8c79d981bd07d"],["/archives/2022/09/index.html","53cf7f60dc8e604284be6ca7355151ca"],["/archives/2022/10/index.html","285614d21107b407f7e23d65ec7be1a8"],["/archives/2022/11/index.html","cff950160507f24c5dddfd7500e211ac"],["/archives/2022/12/index.html","24336871db51fd7ad5c726259150a629"],["/archives/2022/index.html","d169e487d161cc6f1144ca9495a1ab18"],["/archives/2023/01/index.html","aa2f455345f9424700b8be7aafd67a41"],["/archives/2023/02/index.html","a258d52709847560bbad3b631a884307"],["/archives/2023/index.html","d89870c3dd0d52179cf73fd9c80dff30"],["/archives/index.html","7799999a9e4a8b38b8dd6817424da026"],["/archives/page/2/index.html","c5222c3a929eee8d18d772d3cdf8a973"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","87fcdb98b0ceabd2a55440dbacfa144b"],["/categories/ML/index.html","5c214073c11861baf7a1f6bdfc1967c0"],["/categories/Nginx/index.html","3d32c011e6d1920dc0ec4bf006910a82"],["/categories/Spring/index.html","8cbfc2f9f0dfce375201017d26b6045d"],["/categories/course/index.html","477e978b120e44c81378cb891b28b2f4"],["/categories/django/index.html","fde50a41618d8ad02f6ab5ca44ad38aa"],["/categories/fun/index.html","a008b97d25e93b9a5af3851e01840038"],["/categories/gcc/gdb/index.html","3d2c3c44b223c32b498eb097eb1ea307"],["/categories/gcc/index.html","95caa7f2937612e4b4b67d48ed01314e"],["/categories/index.html","1b086ada0a47eef969ecb17aca52b507"],["/categories/java/index.html","0b89b340c0eed8711f9d974b946ad6db"],["/categories/python/index.html","2c9e7eb5ae60340d3184bbe32fe191a8"],["/categories/study/index.html","386173c1922c106fbd512f6276dc739b"],["/categories/vue/index.html","e007b2a0130ae60430022ebf797d4600"],["/categories/误区/index.html","6f0e488a54510448989176e5b5d83189"],["/commonweal/index.html","e9caa433381d74e7a2ed8b8a8cc300cb"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e97f753b98267910ae4a8951495bc71"],["/home/index.html","8c68e47e79ce45f70ea5b3136cb40279"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","0372794628d7c74b891022d83cd91b07"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","bb7236ec5d8317e5d853b92829290139"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","e5a88a2e6f58519b92515288bdcc90dd"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","aedaeeb2066b55078313ddcee05ced15"],["/page/11/index.html","2e780dd9ce822d0c63182dee42af9594"],["/page/12/index.html","c37944c6084a270aa29b0dd1023a0720"],["/page/13/index.html","189254dd20065b8631e42bcc4f6b990f"],["/page/14/index.html","5f2fbca6c7d0312f58604eb69c073080"],["/page/15/index.html","dcfb8be6f6f651c2603126a44b88ed0e"],["/page/16/index.html","d7c5ba68bc0093d0f491351336354e9d"],["/page/17/index.html","33a103a618bd04eb7ce48e11b3cac834"],["/page/18/index.html","5cb7aabf39fd6cceed93c57616fc996e"],["/page/19/index.html","87dda7a6601d7a0f5ac673b2dd56ee28"],["/page/2/index.html","6a3ed8764a30f695a51167222338048b"],["/page/20/index.html","7ca580278dc5c7bc4f1472d9a45ac10c"],["/page/3/index.html","d15291c1792b962915484a90fca176fd"],["/page/4/index.html","e9bff55bc1d7e05d36e170c94498958a"],["/page/5/index.html","d1ebeed96e1e167c1fe0e19c06e0a675"],["/page/6/index.html","505e8b2f528a061d2daca7452f5f3197"],["/page/7/index.html","8408d3b93a2b8e1cfffdb24c8e05f9e5"],["/page/8/index.html","75a8965d00c9e15d9b8ab85716040529"],["/page/9/index.html","1e3f97515f22623498d38a8074bc348e"],["/resume/index.html","2b82db910e6b0aecfa72752e2f3b6701"],["/schedule/index.html","7145958c8f6153c54ca749d2f0823aa5"],["/sitemap/index.html","bc61f470ff79c96c86c48031e75112ed"],["/sw-register.js","a9d0cfe59878a30a554d702a2f3b2182"],["/tags/AI/index.html","6c639735d8fd250e43b2a2c3d8a71454"],["/tags/BT/index.html","6268f6b6623e81fcf6cd23124aa3b42b"],["/tags/BaiduNetdisk/index.html","af1aefcbdf6eb7055ffb02ebcbfdf255"],["/tags/Bootstrap5/index.html","a8f5ece93c490b30c6a7bd48b80819f4"],["/tags/CSS3/index.html","1ee9c13e13dea7b0f2dd65b1b229c7de"],["/tags/Centos/index.html","3efae3d17bd4eb573bc77d9427486505"],["/tags/Electron/index.html","e4ceb1377146e0a43cc880aaf0af661b"],["/tags/ElementUI/index.html","db391a0feb4d4f12f53a141ccf5102e3"],["/tags/Flutter/index.html","90d27c1efbb2083b713e54b8d40c2c73"],["/tags/GAN/index.html","6ed28c2d5cbda26a4c2c9775a535ee95"],["/tags/GUI/index.html","303c87bc2e98de8d29be6486fcb8e986"],["/tags/Git/index.html","a596768d4e15e953f70b5a3bb4458a16"],["/tags/JavaScript/index.html","84e95835177d684592522baa9436e6fa"],["/tags/Keras/index.html","e5c0c6d7dc4a96f39c1a61e34ad536e3"],["/tags/Linux/index.html","098765766ae317ba2a82406d2119085a"],["/tags/ML/index.html","3087a75e26997604530350be4a6add7c"],["/tags/NLP学习/index.html","74b5610a941d5ed9f5b2d02dc5f2c9c3"],["/tags/Nginx/index.html","9a6e1e10b5ca69adef60e1968aa56fb1"],["/tags/Obsidian/index.html","43646cc998d163d8d531304d5a206ac7"],["/tags/Qt/index.html","1edbd543a34f717d40626888f59ef34d"],["/tags/RSS/index.html","8f26c13ffe1acf5100b868241e81f014"],["/tags/SSL/index.html","02770ec7bc8b785a57474cb923016f1c"],["/tags/Scrapy/index.html","16a2d05ce01efce0b324aa4e481a0f33"],["/tags/TotalCommander/index.html","145b38baa6603d4e946098412f735b46"],["/tags/Web/index.html","0288e01aca71fdf280feb30e54f5675a"],["/tags/algorithm/index.html","dd6111a913e28a5c07511533625a9686"],["/tags/bison/index.html","06f659dfb03feba93d37ce20b33b65fc"],["/tags/bomb-lab/index.html","5429dc3449a23621e17089f983405dee"],["/tags/c/index.html","8def1c17a698fa81cd669b472d780b5f"],["/tags/cheerio/index.html","0b8da5cb6fba0d6aaf829a3a00cb35d7"],["/tags/codewars/index.html","467d8e94109f278c414ad1c8fdb104bd"],["/tags/compile/index.html","b6c994b2fbedf259f8d6551523160be4"],["/tags/compiler/index.html","f3b3b70ea662d95187dd647a6013cc01"],["/tags/course/index.html","f7df44eb81fa7c3a2c59d6b98b64caf3"],["/tags/crypto/index.html","b42977462cae9ea17072ca73a7610c53"],["/tags/csapp/index.html","db87dda4be7b631a6313636a2d438105"],["/tags/css/index.html","5c7d9f8383311e94700a58d444e8808e"],["/tags/dart/index.html","1aa009d884a646340fdc980b6a73fc70"],["/tags/data-structure/index.html","7c6afdb8474ac2ea5cea85007d49f803"],["/tags/database/index.html","b74a77b2d9efbcb8db1e9c4702ab3eee"],["/tags/deep-learning/index.html","4882e46021710cb134487a4d2e21fe06"],["/tags/django/index.html","2a12d4e9fd6d00ca0352854fd775ec55"],["/tags/dwm/index.html","c25517174217fb19ad2de1d96a416837"],["/tags/exercise/index.html","2ebc89940de5596d37682aee37001431"],["/tags/filebrowser/index.html","f1c1d12030bcb329f9dd736c0881e903"],["/tags/flask/index.html","7c0716af5e9c59f886d28e952dd279a3"],["/tags/flex/index.html","b7665487da012197d7534f8a922e4577"],["/tags/front/index.html","cd73e92db77b066c73d4d256e3ccb8f6"],["/tags/gcc/index.html","7d65b9062be86eebb5a622ce5c37db5f"],["/tags/gdb/index.html","9079217414707ee760f140868fb81d2d"],["/tags/github-profile/index.html","bbcf5d4010b5e4a03ad9ccb18cac96c6"],["/tags/github/index.html","37a522a6554706887ec38222e916899c"],["/tags/graphviz/index.html","e858d7cff98a3f175b4f4a8c3a1b0932"],["/tags/grid/index.html","3b549f434883e7276cd002f376430226"],["/tags/html/index.html","8b5ec0f9e5e3bb8cc547ad725ed6c773"],["/tags/i3wm/index.html","8e3e997065c270c436fb18384e8a88a3"],["/tags/index.html","8f10a742a486f0c578cb47df1d76b333"],["/tags/issue/index.html","606c6d91c47cc3c8cc55e87eaa6bf7a1"],["/tags/jQuery/index.html","1811d13348e56eac27760fef01d11d98"],["/tags/java/index.html","f7ebc1fae96f78856264ef0c380f5ec5"],["/tags/js/index.html","d72742000f061395f668d8b7e09a6efe"],["/tags/latex/index.html","05e5b4c48d774762b9ae317a5cd38194"],["/tags/leetcode/index.html","8a8a26a8fc874769f5d48c148a675300"],["/tags/lex/index.html","7a5d5d70eb42e10b68de833424314095"],["/tags/material/index.html","b05fe9fc2d6ad676379dee1f2968ce1c"],["/tags/music-player/index.html","389f701cba8e7c6408ad54e6452ae5d6"],["/tags/nodejs/index.html","f2f696ca41724bdca8d5257eb08d32f8"],["/tags/noj/index.html","c94198ec461b7f8d6f0e7fc8a9bbb629"],["/tags/opencv/index.html","1090539ee9410f5a29416f6b21c1dbd7"],["/tags/overleaf/index.html","77f4f2d9326720fb3d5f2dd39198516e"],["/tags/pandas/index.html","645b4b84bcaf5712a2b0445b37490060"],["/tags/premiere-pro/index.html","aeb5ce62cff96f66f4a6d8171919ac89"],["/tags/proxy/index.html","f641581cea4ce6616b267bcc4cc2b392"],["/tags/pygame/index.html","6720ffbfaeef11e457cdf960a68d52ca"],["/tags/python/index.html","7deb475a5f9edfaf660e4a3fe701ae57"],["/tags/pytorch/index.html","287687d4c29ea650e452df28df67e12d"],["/tags/reading/index.html","313ebd557c1b293be9acd8200d6d91e7"],["/tags/request/index.html","44a49697c5eeb64d7c328b38cae75c06"],["/tags/requests/index.html","74b99bce5d928b125f947096f4205fbd"],["/tags/security/index.html","ab378b0f57a7f44efc7baf649bfbcb33"],["/tags/shell/index.html","3a677252290e5bd9d3606ba5c76850e8"],["/tags/sign-in/index.html","ed042dc68f457462b1cc7b41b15a7650"],["/tags/socket/index.html","1b79f5e7010316e04cd4ada738f32a80"],["/tags/spider/index.html","5208ce391da6d15a43392762bcabc6ef"],["/tags/splash/index.html","f8dfa5ba8fb075e4b3a413aee33ba035"],["/tags/superagent/index.html","90dc8021d5e0a21b457f373404fa450c"],["/tags/tensorlow/index.html","8f8b5c0509b9451d0a12c6201b9f6b75"],["/tags/tex/index.html","73a66e8278d525885b00a30088f53fcd"],["/tags/threading/index.html","a16399afe5fd6f6b2a1073f2918f721b"],["/tags/tkinter/index.html","d79102c9fa54bf35d77bd5f83356ec00"],["/tags/torrent/index.html","a7230be3cfebc4b5d2f2afaa7de4eddc"],["/tags/tutorial/index.html","ac5c2e450f19a6d12e1bcaa3d09560d8"],["/tags/typora/index.html","c3db9c264ba44d838d87f7ccfdf0e500"],["/tags/uniapp/index.html","587a93ab07011f7cfd3f664dd8b50630"],["/tags/vite/index.html","aa5fce3dd77fcac6702c7274ff5a4a14"],["/tags/vue-element-template/index.html","1dece8594df7651d050479b18b5b6d1a"],["/tags/vue/index.html","789e4b9c6af910a72a75dde56766d8b2"],["/tags/vue2/index.html","478d249569458df5eab45ffc86c1602a"],["/tags/vue3-x/index.html","5697f3eb62ea45e65a106d4d598cc97e"],["/tags/wechat/index.html","a650c15005a20985f34f3eb7eea17233"],["/tags/wm/index.html","658397a9b6e3dc003298d68f643692f2"],["/tags/wordpress/index.html","c9f1477b6de787c5572ae76aefa30016"],["/tags/workflow/index.html","ce54a6c421744f3c8c99bb8942a23ec4"],["/tags/xpath/index.html","8d076c189ebd2900260ebb7e2a80e920"],["/tags/yacc/index.html","473c9ba764ad1d93be57eda0c61a189d"],["/tags/zsh/index.html","2a622248fe5901a946c197342da95598"],["/tags/七牛云/index.html","c105b8725d9595ec44a7f974ad161061"],["/tags/函数/index.html","e56e35e39a41d6d85f39cddddb18ab6d"],["/tags/剪辑/index.html","150673e755edb01e0f487a4b41484f14"],["/tags/存储/index.html","7cfb69b7d5df62353b3bd33b89d8b755"],["/tags/实战/index.html","46253da344d99895af939c35855b5b21"],["/tags/工具使用/index.html","e27f24678a0f621bebdc794f57233791"],["/tags/建站/index.html","5716f442234091f72d8994d02e198d76"],["/tags/微信小程序/index.html","de24b319b882f6b8e429ed7912f12c1b"],["/tags/指针/index.html","6a7e5ed027809f1ce2e84507ca0f6930"],["/tags/效率提升/index.html","ff1283565694e4d2c15973f090b58aa7"],["/tags/汇编/index.html","83310368393882b3afec67f669c233e9"],["/tags/爬虫/index.html","a51cc4cf8ec3ad50a5f22920c815e077"],["/tags/算法/index.html","d832b1052b361cef3522f9a8a1fe384f"],["/tags/编译原理/index.html","b851cceda17b5463123bfa3d7aca6565"],["/tags/获取地理位置/index.html","87a8e39db4e10040fe65bdd27cac3d94"]];
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
