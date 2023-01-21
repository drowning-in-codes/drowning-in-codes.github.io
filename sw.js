/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","cf67a49583a1728047a5fef99b2b56b8"],["/2021/04/20/稀疏矩阵/index.html","d3d28cbfd93cf193dab2964b9a4245bb"],["/2021/04/23/广义表简介/index.html","920c7a482de59eee1b81d5da01360d86"],["/2021/04/29/关于指针和函数/index.html","cadc72dae5a51574250cdda8ae1f550a"],["/2021/05/10/哈夫曼编-译码/index.html","d14897cb84848a25b036d9f810a39d96"],["/2021/05/17/数据结构noj_2/index.html","ff14f3aa15401bc340a5227619bfeb29"],["/2021/05/30/数据结构试验/index.html","696ae249047731c182d3e174e4d6db0a"],["/2021/06/12/数据结构noj-3/index.html","58b815c116b73e27975ad424f2dd0d46"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","648f892d8d1b8210cfe5229b8b2fb77d"],["/2021/07/08/课程资源分享/index.html","057099d1216b3788b4af695e8c1ae7d8"],["/2021/07/20/Scrapy-下载图片-文件/index.html","8eb39fd2a3b7ca2947a69be7995fb3b5"],["/2021/07/21/Scrapy-动态网页爬取/index.html","00eb63e150988ed7bdf8f2ef541d7035"],["/2021/07/21/疫情打卡/index.html","05f22a86972ee7de53fc05e2f78ffdd4"],["/2021/07/29/Scrapy代理设置/index.html","a512ff530e357d2d979ff6522ddeba8d"],["/2021/07/29/数据库认识/index.html","cadcbea061d72081e4bbf0ee0628d0a0"],["/2021/07/31/Python多线程学习/index.html","638fd4541e9f44243fd202a661b62137"],["/2021/07/31/tkinter-requests练习/index.html","fca961a6e3b11177d007d69ebb16bead"],["/2021/08/10/Git学习/index.html","6d85bda8ab7aa7b454132b055fec293e"],["/2021/08/15/pygame实践-1/index.html","804a84d868fe4a66d7df9d4109be05a3"],["/2021/09/06/微信小程序开发/index.html","80242096c03915515b643bcabe52e068"],["/2021/09/21/命令集-1/index.html","711f7d4dccd107f52ad2338130cd99d1"],["/2021/09/21/命令集-2/index.html","733ccfce580540e5779dc693dcca23a2"],["/2021/09/21/命令集-3/index.html","0859ba43924a046fd4028604cc4b88d0"],["/2021/09/21/命令集-4/index.html","fbb40eadaba1374b6977a9dbadceebdd"],["/2021/10/03/socket学习/index.html","2eeaba043c45d686f619543cabe43f52"],["/2021/10/10/dwm入门/index.html","d02c1512ff0fd0a3ad4f7673e7d443d8"],["/2021/10/10/安装ohmyzsh并配置/index.html","ffbbd05ac0311993ead9894aa9a48e69"],["/2021/10/20/css学习/index.html","7b13c467bbac6051b5dbf8cfa4c09a84"],["/2021/10/20/wm入坑/index.html","3cc19e8205d09d975b75b0fc4b2324bb"],["/2021/11/03/微信小程序学习/index.html","51925e631f457ad0be2a83d417ad0053"],["/2021/11/04/css揭秘/index.html","d929a26881c70002d19aa808cc50636d"],["/2021/11/05/css-练习/index.html","94c9aaa2bf51a4aad71a0ced77b9842c"],["/2021/11/21/命令集-5/index.html","c0219fbb015931abdcc89a80711bd003"],["/2021/11/21/命令集-6/index.html","7849c2aca3e157ebc1f066a49ed2f2c9"],["/2021/11/21/命令集-7/index.html","542ed30fa3652040c663ba54651e12ea"],["/2021/12/01/搭建wordpress/index.html","895c09a600f8af99537ed47bc3f2a546"],["/2021/12/08/python操作百度网盘/index.html","d4d85e649a195499d5bcd3a1bf6e0d99"],["/2021/12/14/js爬虫/index.html","9865d313e7ed0988f3eb14e4ea22316d"],["/2021/12/25/为网站申请ssl证书/index.html","868159d0bb1020a4c6c105facae2a875"],["/2021/12/29/使用七牛云为网站提供服务/index.html","ea87837d4c42a9c4ee8fa27f84fe18c6"],["/2021/12/30/jQurey继续学习/index.html","c954e9bf7e12df04ebf87149c7ae6815"],["/2021/12/30/jquery学习/index.html","fa69b48eec693152a1e305e3cae51a77"],["/2021/12/31/vue学习/index.html","e7cd9f6b49001f73c062539693f23f26"],["/2022/01/02/疫情自动打卡/index.html","d3e2327d6875ef8f3191cfe1304f9c10"],["/2022/01/03/javaweb初体验/index.html","9efdf105a3fdb3c13e53e6f6b1411d5f"],["/2022/01/04/codewars练习/index.html","b97d52205064d139e3abbd0fe211ace8"],["/2022/01/05/Spring学习/index.html","8e036bd6ad210560134ea4a4d32d78bd"],["/2022/01/05/vue实战/index.html","5aede2674d8af82ed00120ffd40e4673"],["/2022/01/08/gdb-gcc学习/index.html","b19bca1355ee1541f299249610157588"],["/2022/01/11/python-opencv学习/index.html","179ac79d33d57d95f62ed92f64b8a18e"],["/2022/01/12/汇编实战/index.html","a0d382b45fec932f1a13d27d7549b061"],["/2022/01/17/pandas学习/index.html","2fdd31d24172b305a27daab3f1bd2204"],["/2022/01/19/可视化图的工具/index.html","88965fd073bd3a23a48b42fe2b4040ee"],["/2022/01/19/机器学习入门/index.html","1278dc0eef80c67a9d7e7e7461d6be21"],["/2022/01/20/cousera-ML学习/index.html","9b3e93cdb4394b014f0fa95d7f26ad5f"],["/2022/01/30/typora解绑后出现问题/index.html","c026e670681e1814bff816317d335ec0"],["/2022/02/03/NLP学习/index.html","276ae58e42da1208fcfc10ebd9fac529"],["/2022/02/04/Web漏洞学习/index.html","c3c2cb375e1b5671b490d4dceb5ba966"],["/2022/02/04/pyqt学习/index.html","21fdf68fd755f2616070c06d609d8ec7"],["/2022/02/04/python爬虫/index.html","f4d5b1ce38f561cde8117fee184bae06"],["/2022/02/18/Electron学习/index.html","bc27a9f904b3e3b1556519b4b7cca84b"],["/2022/02/22/疫情填报字段解析/index.html","3e9e43886f274d26ad4e06f8f9755820"],["/2022/02/24/Bomb-lab实验/index.html","6d386dc22724c7d73acbc8cbc0e9397a"],["/2022/03/05/nginx学习/index.html","20740cedf59c2def5982134b487b6b3e"],["/2022/03/09/汇编原理课程学习/index.html","cbdc3555ca0b6d14ddfb828ccbf9a53e"],["/2022/03/11/Keras学习/index.html","063ce5374cc775d7ca80d5acd922da9b"],["/2022/04/01/graphviz学习/index.html","bfdd48281bc031be7e28f54868f0f2f8"],["/2022/04/07/django学习/index.html","e3b73985850cfe3056a2cf6138354c5e"],["/2022/04/11/密码破解学习/index.html","3a335c8ab0df053574f15b46a86f6b98"],["/2022/04/12/flex-bison学习/index.html","a20cca61b414592a0e1e006b968a13f9"],["/2022/04/15/pytorch学习/index.html","49556f8bbbede4512acbc3f742bf0073"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","2864098df8644406056e76216650ea5f"],["/2022/04/23/写一个音乐播放器/index.html","f012ce8801ff99a8ee01b21023102a25"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","5953b22d2e5341862a2b63d2574f7d56"],["/2022/04/30/GAN学习/index.html","ae61da750cba4a4ad2156d4646a5d206"],["/2022/05/02/html精学/index.html","119b253c5bcdbe5fba83b5b940c57baa"],["/2022/05/06/write-a-compiler-by-yourself/index.html","932b8e2a68bc4ef20e437ae96e1d51bd"],["/2022/05/30/acwj-01/index.html","0040aac98b0f66545e7f53376349e658"],["/2022/06/14/animeGAN/index.html","6bfe72b80ca300b33c50e74d87a3b855"],["/2022/07/09/c-与算法学习/index.html","917ddfeca4a4ecd6ba85f6a8a332d8c6"],["/2022/09/19/flask学习/index.html","20928d699ce886a8115a3986dcb350ca"],["/2022/09/22/cs224w学习/index.html","6c9a78ea5db7beba232c40c122b1162a"],["/2022/09/28/记录一次wp重装/index.html","e9d4afb8bbd18ac5fedae08e42bd6d5f"],["/2022/10/01/Obsidian学习/index.html","1cc7058bb43befa53ad7dacc1c848114"],["/2022/10/08/vue-element-template实战/index.html","c248fbdfdaafd31a40e9480ff1bb617a"],["/2022/10/25/vue网上商城项目/index.html","f318ba0420786945136033df20b8724e"],["/2022/11/11/leetcode刷题记录/index.html","ffbda03b1641732d2dfd5a1993c92ecb"],["/2022/11/11/使用overleaf优雅地写文章/index.html","e6a92c55f0f2da1fedea909d34ca55df"],["/2022/11/22/磁力链接与RSS订阅/index.html","4b2fc5eab14eab6b240097c40df656b9"],["/2022/12/11/uniapp申请获取地理位置/index.html","fd24607a0b461141deebb04aca68769a"],["/2022/12/26/pr剪辑学习/index.html","163d4b764a6ad35e9024c88b0b24fcd6"],["/2022/12/27/css中的flex和grid布局/index.html","db5c712b534f45a696281fcd1f92fa18"],["/2022/12/28/Flutter学习/index.html","ebb6416998bbf6b3fe858eac4b3d6f16"],["/2023/01/01/美化github首页/index.html","3fb026cd6379187a7a6bcc0ab8039321"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","92e5a334cb3a79d74574c32919c633d8"],["/2023/01/04/构建微信快捷发布文章工具/index.html","b5171e733983a124e1ed8750de947165"],["/2023/01/14/dart学习/index.html","08354d5ec5fb14e1bd1824e2a997142b"],["/about/index.html","abe5ea6fcb771b927e14bf8bb79893dc"],["/archives/2021/04/index.html","f4e0a154b6e09d480138c18a5a96ed99"],["/archives/2021/05/index.html","76a8c263a71ef6547c74364cf8d5f85d"],["/archives/2021/06/index.html","d783678433f05bbdb335a4c5b7de59fd"],["/archives/2021/07/index.html","37016543f9a89fc22dbecf3386fee922"],["/archives/2021/08/index.html","22836e06056ee238fb01b06691bc4d91"],["/archives/2021/09/index.html","c40a660ebc4144210f0f28ecaf04cba5"],["/archives/2021/10/index.html","24bf6179ba02466506d10c6362b9c975"],["/archives/2021/11/index.html","2c451835f2aa120741231f1ffd9e09f0"],["/archives/2021/12/index.html","2a2b1dc8d8d8b194b180bc6a0e808bdc"],["/archives/2021/index.html","53169e472f028f964dd57bf9f1b2039f"],["/archives/2022/01/index.html","eb2513ef2afaa99055568ccd224c7560"],["/archives/2022/02/index.html","9418593e95293e390cf87d5a72591059"],["/archives/2022/03/index.html","11631cff9e4aa6a830b0ad85c9ff7c3c"],["/archives/2022/04/index.html","318e4e351b1c667d9790aef03dfb5de8"],["/archives/2022/05/index.html","79137ff1e6ca2c4a533b28030d7dc477"],["/archives/2022/06/index.html","32271cfbd694edabc09eb83775206916"],["/archives/2022/07/index.html","fdc223561e8318c9e65727390cfbffd1"],["/archives/2022/09/index.html","798e56179bfa8a8f24002124801ea34e"],["/archives/2022/10/index.html","15d2dbca1c30dc084c9053b3909eea5d"],["/archives/2022/11/index.html","76e1eac18dcbacb77a97c7bb12bd36b2"],["/archives/2022/12/index.html","c6c5bd6133ef603fd2e241e5ebccedd1"],["/archives/2022/index.html","58dacf63a01784a98c751dc03ba35a6d"],["/archives/2023/01/index.html","49947599a61fd144fd299904dcdcc3dc"],["/archives/2023/index.html","f52b215d67efd44ca0d7fd206930c454"],["/archives/index.html","0042eb5d5cf651d4f5130b5f47d08524"],["/archives/page/2/index.html","5a0a003dfdb52ae9f97a31c77dba58d4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","a4173079265eb6ef24f83baa4a1b4fdc"],["/categories/ML/index.html","cf6f28bcf54418a4de81eccd375adcd8"],["/categories/Nginx/index.html","7b96c0c33a517c6a20064aee6a189eab"],["/categories/Spring/index.html","1b17f78393b022ddfefa77ae4dd31a32"],["/categories/course/index.html","da61e5bc2fc960a0a4dafb46ebb8f421"],["/categories/django/index.html","96ddcddfcad8874e0ea1d6bb946432ce"],["/categories/fun/index.html","4c205ec83f20ac209f650eb53836f82f"],["/categories/gcc/gdb/index.html","56aeae2f0f3a759c2d2e189506039a5f"],["/categories/gcc/index.html","5c03d2a2a23d5bfe2b15c88571a98ffc"],["/categories/index.html","a4509c21c8a9adde4616f79a8b74635e"],["/categories/java/index.html","d584a2625ee9d810f23993cc81c519d1"],["/categories/python/index.html","0e371363e4c39164b073e308f65256d6"],["/categories/study/index.html","35296ca821a237b406a9b0dffe91edd6"],["/categories/vue/index.html","b0ab12b26cde046db642255f6cac3f55"],["/categories/误区/index.html","8c94466c049a2adb49bc9907d6ed41cb"],["/commonweal/index.html","f3d69ec1206a4a135bdbd59d8cc72002"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e535254f6d5361c3c6729dc8c9726c6"],["/home/index.html","c13d50cadb18deb5f6451556d1a3aee7"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","d7e9d1f88a51e8c5b35f9bad71776e95"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","ca1a7136e4aaa7c981587877a1612a1e"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f3ac385ac181f6a7422929d235441605"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","62d0f610bc05ae2d59d33bf234a07f3b"],["/page/11/index.html","0c20ab9d7f505020fa1a6111222a7d63"],["/page/12/index.html","41c80de9979abeec718d88c37f844605"],["/page/13/index.html","aaa4e549bf0b5c76478c39959b019218"],["/page/14/index.html","5af71786089f5004c49153fb65ef21f0"],["/page/15/index.html","bac7bd551863f4c2136f9cf94dbf2a68"],["/page/16/index.html","bf26678e4dead8a3eeebeb2e6ed668cd"],["/page/17/index.html","6ee4bb5242af3ba79ea99d5f2de58292"],["/page/18/index.html","af383b3cbded21ff1150352bdf160a56"],["/page/19/index.html","1f6962369f99273d626e19ddb391f0b9"],["/page/2/index.html","b27061a1fd98fb16834f63f48c02e6c9"],["/page/20/index.html","cad14b78f3ec4f78bea9c893f92b5015"],["/page/3/index.html","80ba23c824c0261caf500832b37ea971"],["/page/4/index.html","21ad7bdaa9702ef3b2579a6c9d96c6ea"],["/page/5/index.html","40d23f76b734ba99776e1cd22cc31105"],["/page/6/index.html","b6af928e72a580fccabb53ae8b07c11e"],["/page/7/index.html","687e9e56f97c74b155b8da71f495a55a"],["/page/8/index.html","2ef752cbb53f62ec8176c29c887a722e"],["/page/9/index.html","367efae5c421425f7a0a1b10a7f734b4"],["/resume/index.html","e01b0fbf0626d05754dd4bff5c5ece3e"],["/schedule/index.html","b468e5338b144ac551873ebbca5e4c6c"],["/sitemap/index.html","69c15b23c55d8c8d7584737d1cc502c3"],["/sw-register.js","85523e3039341ddf8e5db179030e2e81"],["/tags/AI/index.html","b4c7ca1e7c76fb0b498401d376af4bb3"],["/tags/BT/index.html","821b1181845da652009adedf732d7f47"],["/tags/BaiduNetdisk/index.html","cdad9f8198c6a1f16dfac62b8f68c027"],["/tags/Bootstrap5/index.html","d805d5a0c31af6bcec83f252cc211630"],["/tags/CSS3/index.html","a552dd7f13dbb333a96d5360e126f36f"],["/tags/Electron/index.html","b65b668b4cf7bd41712045548f5290d2"],["/tags/ElementUI/index.html","10c1880b810465e9e6735cacdfc75fd5"],["/tags/Flutter/index.html","97de0a37d7750318fc14bbbfda8d43ae"],["/tags/GAN/index.html","2e22132bea6bea31ca48814cbe6e27be"],["/tags/GUI/index.html","24d50a1f0334ee9819943efdc876e5dd"],["/tags/Git/index.html","a33b4776df9a2506ccddde36f48ac4df"],["/tags/JavaScript/index.html","e4ff42af8d4dae065c536cfa4e7847b0"],["/tags/Keras/index.html","358477ddb49d8fe78ac4cd66109ac49e"],["/tags/Linux/index.html","197a339581c459acca679c81e272d626"],["/tags/ML/index.html","150f870ca15f141de1b598eeab670d96"],["/tags/NLP学习/index.html","63bafed8c4b23664ae5defc9c266f6fa"],["/tags/Nginx/index.html","295d6e8933202f69a89252a7090b4442"],["/tags/Obsidian/index.html","824f1f16e37775e087252fe6005d1f5e"],["/tags/Qt/index.html","9a6374d06ab472b994b58d697599345d"],["/tags/RSS/index.html","738040aef3dfd3d5d3ffe249974813c1"],["/tags/SSL/index.html","86e3d560b6dae12f17b6e6ef86b1dfca"],["/tags/Scrapy/index.html","75ecd6645bd681d2015822f541391a31"],["/tags/Web/index.html","e59aa86e83463bcc7a65d6efbde3db87"],["/tags/algorithm/index.html","a9f980b37c96c53d94b07fe1e3b1a7be"],["/tags/bison/index.html","efaa4ba8ab5ebc19fe4d87ae4bf2cc68"],["/tags/bomb-lab/index.html","2baa6dade49db8270818b4b0c6471be7"],["/tags/c/index.html","f3cf2fc3c0d77191074bbe081efcc06b"],["/tags/cheerio/index.html","67d7158834e806d32f87c37e69408f3b"],["/tags/codewars/index.html","2e991d310bde7ba91ad2373b218c7c35"],["/tags/compile/index.html","bf80ff202ef98e35a07d9b9d646b5a1a"],["/tags/compiler/index.html","bc61b9c8d235ae885af1ffa6a29435a7"],["/tags/course/index.html","52d0828ee70f8b4c35a2d532f5bf9d59"],["/tags/crypto/index.html","c1df09266f776f656b332cbeacfc6ee8"],["/tags/csapp/index.html","43dd7b71d53dd3643efabf36b167e8c2"],["/tags/css/index.html","b7ee2065e537821d9bbb2f9974688dc6"],["/tags/dart/index.html","c75ca552eb1dbb8e98f46f26c522edfb"],["/tags/data-structure/index.html","e5e5c7461f81f6a548d693c6f280f4e4"],["/tags/database/index.html","a7d9982f8a603d3171ddc513ebe482df"],["/tags/deep-learning/index.html","123e824e0164bc6f2fec7a5ac85725b2"],["/tags/django/index.html","611591c71d8608f0c256cc7b79b1cf8a"],["/tags/dwm/index.html","a308d3e331c35181fff25a4c59a8ca7a"],["/tags/exercise/index.html","56864af85c340a93ca698beeb8cb4156"],["/tags/flask/index.html","d53ed5ae6ade80acc35a83000d6c0fe2"],["/tags/flex/index.html","df51b33e50c28c596ec60ad8cd5c20d5"],["/tags/front/index.html","065fd5e0e12b7cc24a1c58c757f545c7"],["/tags/gcc/index.html","1f37ff40ba5c8363ae350bebea054f1c"],["/tags/gdb/index.html","136b3bc473ab580c1c3cbf3fd9ea2bf2"],["/tags/github-profile/index.html","906b26010a260f55d18bbe65a8491a3d"],["/tags/github/index.html","fee3fba3fb1c418c1d57d0dade8a293f"],["/tags/graphviz/index.html","cd94da726ce170cfc4a579b1d177964a"],["/tags/grid/index.html","94b9e50871ac24491e135479bd37a621"],["/tags/html/index.html","7f9436e8d0259ccb4a6e50fa0b7e53d0"],["/tags/i3wm/index.html","f37363c2b5b06485956126c6de9db0cf"],["/tags/index.html","b6aa65ba2b220b9625426c195ca5c89d"],["/tags/issue/index.html","d9834820a3692a3484bcd2564cae3a7c"],["/tags/jQuery/index.html","fed033f1b2a180557f8b6a83047ec590"],["/tags/java/index.html","981a4e55958a432481a7b893ab4bd30d"],["/tags/js/index.html","f8450b59850112f3ef816e439e04705a"],["/tags/latex/index.html","aaebf40cda496914d324b8559174ca55"],["/tags/leetcode/index.html","1a1a58fe070b78f8bfdf58188c4a7cbc"],["/tags/lex/index.html","453555d99aae2285b078c35919c72832"],["/tags/material/index.html","178d213cd96ae1407e1ef96595977fe0"],["/tags/music-player/index.html","ee932b7167226fdcf9a1b08c6c0159de"],["/tags/nodejs/index.html","49c5247c695cfabcae8efc41b5fddaff"],["/tags/noj/index.html","1f99bf674c40c6a48d3eeb1f677f7115"],["/tags/opencv/index.html","f50a3d85105b822650383bb3de386ee8"],["/tags/overleaf/index.html","3a0759c8cb87de2a10af6f1c5db1bdeb"],["/tags/pandas/index.html","cc055605eea287499587d4e595d3631a"],["/tags/premiere-pro/index.html","1116b14e714152cd1e4ec2be29491b26"],["/tags/proxy/index.html","f2497c676315cf933e0651655b57623d"],["/tags/pygame/index.html","5ca221160c2ce4f13afa80462975f278"],["/tags/python/index.html","128f525e759384b2115a893f8845a0ca"],["/tags/pytorch/index.html","033dd1453960bcadbd8832b9810ad68b"],["/tags/reading/index.html","de393e4bf2a68685f778fed505e52580"],["/tags/request/index.html","16e3456d783935e31b636d78f54ad414"],["/tags/requests/index.html","50b490cf79cdad5a3023aa88cf1a1d3d"],["/tags/security/index.html","94a240407e49016c505cf3632a181dc1"],["/tags/shell/index.html","e60c96e5edf9f1e13b007c61113bf484"],["/tags/sign-in/index.html","5356a18004222569a339238a3f4f5603"],["/tags/socket/index.html","b4e5e8b03ab02cf35dea1060cc3fafe7"],["/tags/spider/index.html","ab42178e4a3c0cb2763297c2675765c8"],["/tags/splash/index.html","1faf938f3355582808789f74e777bebe"],["/tags/superagent/index.html","249bc922124d5f81f5339f79d451af6d"],["/tags/tensorlow/index.html","4ed4e617b3eb8fc14a8ba7e324468e40"],["/tags/tex/index.html","989f9a8c07afa068c8dbf0823a30d402"],["/tags/threading/index.html","ea8fa4fe05326c399432c8066696c10a"],["/tags/tkinter/index.html","d4d8f23b1924bc92b74e3785dc4d7285"],["/tags/torrent/index.html","fd50ab0cbb14fb2a8e4649a060e1b3dd"],["/tags/tutorial/index.html","5346d92f52aabb981298c5aa3b93f7e3"],["/tags/typora/index.html","d6eb29c1a04a1b2f8625303e22b65e88"],["/tags/uniapp/index.html","058fcd4f9068f23664cfc5012b9d92ac"],["/tags/vite/index.html","8d2943ceac11ff33d7bf5b32a7c5ea89"],["/tags/vue-element-template/index.html","095aa6e6e9e5e38ad56a49a2c040304f"],["/tags/vue/index.html","12bc173e364e423309ea0e34afd364ed"],["/tags/vue2/index.html","2d226479fc1970d6b64fcdc35d4e472a"],["/tags/vue3-x/index.html","1c95954b19726de21c1d697557928883"],["/tags/wechat/index.html","a89228d55d6de0bb2620e2f515c313c3"],["/tags/wm/index.html","13afba40ab9cffb116514ca4634e2e82"],["/tags/wordpress/index.html","045b36e0ad2276c2cfd6fc86d5f02b05"],["/tags/workflow/index.html","14a741f646188e4248681c3cfc3bf44b"],["/tags/xpath/index.html","7a7792567ef25bbc1396d5594baff048"],["/tags/yacc/index.html","ef4346742ed6700afa421a11281b264e"],["/tags/zsh/index.html","79edc6d6baa62d5fb321f1f3049b6b7a"],["/tags/七牛云/index.html","ab4ddb3925633c7ff34940fb99a1b128"],["/tags/函数/index.html","67673d135072a7156dd271101f4ff1b9"],["/tags/剪辑/index.html","f936165bd55efd189e6fa633593e6ae9"],["/tags/存储/index.html","f699c66c19276ffadd6c0425463a19fc"],["/tags/实战/index.html","e45eea1146a6c2a84cb7dd58a5cf12d4"],["/tags/建站/index.html","42ed388330c238aaeac57275321720a7"],["/tags/微信小程序/index.html","d330fe234940c58ace8aafacc2f02924"],["/tags/指针/index.html","90fce4394418e5abb31a4ee2b9b8986d"],["/tags/汇编/index.html","0c1a5143d85e0bcd27e3940b9f2be032"],["/tags/爬虫/index.html","c0b6b522c755e01713ba389b83056232"],["/tags/算法/index.html","70f9d96a4ce566236bbbed304f57b5e5"],["/tags/编译原理/index.html","4ca6debf98f77dfa162ac84ca648baf1"],["/tags/获取地理位置/index.html","865c2a406932b71b86b7fe5bf4811720"]];
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
