/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","54b45a67d66bf6eedd98f8d52b940632"],["/2021/04/20/稀疏矩阵/index.html","212a81fd0bdc475e6232e7f35e1650e3"],["/2021/04/23/广义表简介/index.html","e3048d8d04773efdabb3e6594bd6acf9"],["/2021/04/29/关于指针和函数/index.html","47efd2f05220f62a0333007215001b41"],["/2021/05/10/哈夫曼编-译码/index.html","a8a292dc59b0b2623d59b8c1f94e4be7"],["/2021/05/17/数据结构noj_2/index.html","39261073e56dc3232daa42195108999f"],["/2021/05/30/数据结构试验/index.html","5c3aec7a8b5ad84e25434e271cc40e32"],["/2021/06/12/数据结构noj-3/index.html","468ff561acfb6acda53e2897de2a5031"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","5af7ce86f791c5ae7c167ca417ea3bc3"],["/2021/07/08/课程资源分享/index.html","938f177af5e3d4b4457132ef31c3fb90"],["/2021/07/20/Scrapy-下载图片-文件/index.html","98538c360ca5f11af4d439564fb513aa"],["/2021/07/21/Scrapy-动态网页爬取/index.html","52063390128891a28a8c2c6f7c0e8f88"],["/2021/07/21/疫情打卡/index.html","090444dc02962bab6e76536577dc54ab"],["/2021/07/29/Scrapy代理设置/index.html","984838f75e690ba9fc119a049c699099"],["/2021/07/29/数据库认识/index.html","99298e9c197557c43a9eaac694685775"],["/2021/07/31/Python多线程学习/index.html","be9944d7f83f8e1a865ac0c4e5e96e39"],["/2021/07/31/tkinter-requests练习/index.html","5ddbabe2ad6c7d61a9173cf6bc97845d"],["/2021/08/10/Git学习/index.html","ec48977de9aec47a84328f235587cf99"],["/2021/08/15/pygame实践-1/index.html","f309d9e2215e13a340177b59cb6f6c62"],["/2021/09/06/微信小程序开发/index.html","227695aa8513c7407eaa4b629ccfe54d"],["/2021/09/21/命令集-1/index.html","cec1c9e5247b2286414843970d83ed64"],["/2021/09/21/命令集-2/index.html","cb1d53611e5598607de069763224d479"],["/2021/09/21/命令集-3/index.html","30f6fdf529ec763f7b2904c72d766243"],["/2021/09/21/命令集-4/index.html","324780e0fe100d316222e30d304f89d5"],["/2021/10/03/socket学习/index.html","618fff237451c319dad5913f743e5d6f"],["/2021/10/10/dwm入门/index.html","c39057dedf7e67ac92b1c718ce182c4e"],["/2021/10/10/安装ohmyzsh并配置/index.html","1598bd82dde3287fd0104d41315b5367"],["/2021/10/20/css学习/index.html","4e477c20ef1f06e9345d52476621aa6d"],["/2021/10/20/wm入坑/index.html","de98a1ba90da2f2c2ddbdb4084eefa93"],["/2021/11/03/微信小程序学习/index.html","9e2dfeb3f1950880c2862807da386f95"],["/2021/11/04/css揭秘/index.html","247f41d49e0143f995a4ae089dac89f8"],["/2021/11/05/css-练习/index.html","f6cba37024e14cca94d22e91ff1b2e1a"],["/2021/11/21/命令集-5/index.html","8e6a84b9461abb8eeaf7b5682c4882b1"],["/2021/11/21/命令集-6/index.html","419cf19c35375b8389a3bd45cb6a9afe"],["/2021/11/21/命令集-7/index.html","3fc8d18bd09d207956277ec9ebabe9d3"],["/2021/12/01/搭建wordpress/index.html","13f7d8ced633ea8f174c78a3eacb0f52"],["/2021/12/08/python操作百度网盘/index.html","a0012b4f5fbe08961922c13046a47c71"],["/2021/12/14/js爬虫/index.html","4271d5aba40a1485535f9c03c1a5fce9"],["/2021/12/25/为网站申请ssl证书/index.html","f04892382c88c3d625e869ef860c4bd1"],["/2021/12/29/使用七牛云为网站提供服务/index.html","7428682b2009242567fc8acef6bc3842"],["/2021/12/30/jQurey继续学习/index.html","f13f6046d4ad8068fa2e915615c67b90"],["/2021/12/30/jquery学习/index.html","11f146f45032eea1b6ad9a773b7440f4"],["/2021/12/31/vue学习/index.html","1abeb45054c32447976fb7cff9639ebd"],["/2022/01/02/疫情自动打卡/index.html","8d7385ee7420ec9c980a6080dc39f202"],["/2022/01/03/javaweb初体验/index.html","005b6058fa66aac9351805b12a268e0c"],["/2022/01/04/codewars练习/index.html","2a90ac2d3b18356f0cbac878727d41b0"],["/2022/01/05/Spring学习/index.html","60ad6ca1446d269998af8338c9576826"],["/2022/01/05/vue实战/index.html","c17a473c45588e554688bc528c0b04af"],["/2022/01/08/gdb-gcc学习/index.html","10d04af663f447d916830cb8273004ae"],["/2022/01/11/python-opencv学习/index.html","19b3fcc517e7195580a6d04f582c7d1d"],["/2022/01/12/汇编实战/index.html","7c7ea2f3148ea84290a74ad615df2797"],["/2022/01/17/pandas学习/index.html","f421f3c23f55c65173b0206608438d1a"],["/2022/01/19/可视化图的工具/index.html","34d40c0795f296fff2c51988ecb61b98"],["/2022/01/19/机器学习入门/index.html","26c4445bcd58a27aa59d816d218227a5"],["/2022/01/20/cousera-ML学习/index.html","fa7b3951787f4ae8986b2465d67fbddf"],["/2022/01/30/typora解绑后出现问题/index.html","260bd20a6a653d7b3b49ca8b474e4ec1"],["/2022/02/03/NLP学习/index.html","8cf99ddf957324efe003b30c418a75af"],["/2022/02/04/Web漏洞学习/index.html","9b26ce12f89a9cc6edb2b1c971339c37"],["/2022/02/04/pyqt学习/index.html","9753fa8f4a4edd6c126250a9a45adcee"],["/2022/02/04/python爬虫/index.html","84e914848bddedd891fd8e555bf7a8bf"],["/2022/02/18/Electron学习/index.html","8c877df2a6a96a82aca17f0871890e33"],["/2022/02/22/疫情填报字段解析/index.html","9ae52d26283a6f1433ab2e41f8ecea34"],["/2022/02/24/Bomb-lab实验/index.html","73cc637a0acbfbb489101a60c8feb4b7"],["/2022/03/05/nginx学习/index.html","1ff778ccf262b67650971c125ffd798b"],["/2022/03/09/汇编原理课程学习/index.html","cb056ca7bc86cb48733e65bfa5c85031"],["/2022/03/11/Keras学习/index.html","42b0257006500c8c1a5f134d6770ae20"],["/2022/04/01/graphviz学习/index.html","edd433f4f94ac03eb1f70cd9dcbc011b"],["/2022/04/07/django学习/index.html","af9884f142646b7913e8a5723825896b"],["/2022/04/11/密码破解学习/index.html","769f41d7bd94c90c10a5e6c37ca9cbc8"],["/2022/04/12/flex-bison学习/index.html","8f6e0a20fa055d27427e4620edf9163c"],["/2022/04/15/pytorch学习/index.html","b137292823a1951b44347451bbac8e3e"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","5ea45ee9307840b5db25ef8a469d8776"],["/2022/04/23/写一个音乐播放器/index.html","f6dc032c338901a1ea23d9d3fc3a93aa"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","31be0efd7454df3752ce4583c2d467f9"],["/2022/04/30/GAN学习/index.html","4b22c5adfa3bec21bc86933f7327f0b0"],["/2022/05/02/html精学/index.html","c62aba7aa2aa10ad472be1c56b132f4c"],["/2022/05/06/write-a-compiler-by-yourself/index.html","76e839df60f005938d14d389cadb2847"],["/2022/05/30/acwj-01/index.html","177f552f76c316df49de50ec3820830a"],["/2022/06/14/animeGAN/index.html","51bafe0cdace97706af531d97a1006e2"],["/2022/07/09/c-与算法学习/index.html","77919906930f27bf8c719427d4a21896"],["/2022/09/19/flask学习/index.html","34b9aebed47532993b376acda3564b5d"],["/2022/09/22/cs224w学习/index.html","97e544e86fbf45ee977556107551b756"],["/2022/09/28/记录一次wp重装/index.html","f1c8822f75b11e687fee1d98e0023af8"],["/2022/10/01/Obsidian学习/index.html","78edd310c03ec9728d8d846f3ff2eb94"],["/2022/10/08/vue-element-template实战/index.html","73cd7092b75a7170c26158c213a26f35"],["/2022/10/25/vue网上商城项目/index.html","61b7e9eaa794f6029d9d5728674d75dc"],["/2022/11/11/leetcode刷题记录/index.html","b10518e18a5fd2c47f1d2771f09b615e"],["/2022/11/11/使用overleaf优雅地写文章/index.html","520c4745854716022550e54c9c50d159"],["/2022/11/22/磁力链接与RSS订阅/index.html","67039c3bc96127a5b7de8fa69dab3012"],["/2022/12/11/uniapp申请获取地理位置/index.html","d1dff6b6f52fc722aad72d80a20b3b2b"],["/2022/12/26/pr剪辑学习/index.html","edeaa9343b95ac24f2b49ce4ae5808a4"],["/2022/12/27/css中的flex和grid布局/index.html","6057f31a0c6b287a847a7777d944427c"],["/2022/12/28/Flutter学习/index.html","25d2df13a9e08486cb7f67ca25dd7f5c"],["/2023/01/01/美化github首页/index.html","939582f51f4c07f9d1db2ec7bd68c415"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","67813ba872cfe6e58b6cb72730f6b6ba"],["/2023/01/04/构建微信快捷发布文章工具/index.html","31dada677dad838a7787b317e00a221a"],["/about/index.html","ac7549dcf4cd21676c83e7c2b804787d"],["/archives/2021/04/index.html","5c730276f1d691320421256266ac043b"],["/archives/2021/05/index.html","54c6822edb5f53b176acf237b8540224"],["/archives/2021/06/index.html","9a99ebe2583ed169f4e4e9e8c8014b3f"],["/archives/2021/07/index.html","3c58ddd60db39cfa14e3c91406f066e2"],["/archives/2021/08/index.html","e1c6cbf497f785bb7f176b282329b0e5"],["/archives/2021/09/index.html","cf0dc4cb8d875c410afae28a795445bc"],["/archives/2021/10/index.html","ee6d6a203b5073b849dcc9ce9d682903"],["/archives/2021/11/index.html","5ad4ffffef7ca6a15cc683bffe17dd3c"],["/archives/2021/12/index.html","09a263615816e842bbf8ccbd9228f31e"],["/archives/2021/index.html","4c1f05ec75dda18960cec6f25bd4ebe2"],["/archives/2022/01/index.html","4136f4907d08581625942d792deb2b0e"],["/archives/2022/02/index.html","821ef9c8f086561c959747203f1cfd20"],["/archives/2022/03/index.html","2f7ab1992ade6cc92b02dc9a6550b13a"],["/archives/2022/04/index.html","68cdb0281ee403e4d9f164c400fa396e"],["/archives/2022/05/index.html","ebe84d4ac53369f81b9db468ed08b37d"],["/archives/2022/06/index.html","c2c7b60b3ce1db2e42247534510acdfa"],["/archives/2022/07/index.html","52153d12354a389db7e126163ccd1e19"],["/archives/2022/09/index.html","4266f1ffd60ece126605632ee2bfec72"],["/archives/2022/10/index.html","b1f0a6fdb7f0dd2cbdef5cf496ad763d"],["/archives/2022/11/index.html","fbc6f4679929d401d3cd23915e50b630"],["/archives/2022/12/index.html","4bcdd18d6c6f1c8e1637d73080293d62"],["/archives/2022/index.html","bc9bfbee09022fcdb5a5f1c044e1aaf5"],["/archives/2023/01/index.html","8e43a5da17b6cc69a180d4880938e601"],["/archives/2023/index.html","d062df552fd6fc5f704aa3d3452df3f0"],["/archives/index.html","08378c0be5df037b43b89cdc6571c820"],["/archives/page/2/index.html","20a8672367478b988767687bfc345a72"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","8be69cb64f2685b9bb58e70e425b39c5"],["/categories/ML/index.html","48811a269b0ee25e8291071bfaf4a2e3"],["/categories/Nginx/index.html","0b86bb747087c99d5cf663175829e031"],["/categories/Spring/index.html","470016cffb37333f890ddee59d31d907"],["/categories/course/index.html","ed7d3c166678ba3342f765438029d3f8"],["/categories/django/index.html","783d17a5743e1040f8de3f8333ee70ca"],["/categories/fun/index.html","63e44a8e2073a7b07f8ac9a0af98eb07"],["/categories/gcc/gdb/index.html","79093e6f26ead5dd2fef919b51b60f4e"],["/categories/gcc/index.html","a36fb0c30a699dd17d888e15998467ba"],["/categories/index.html","39c3893a7342895337cd60f736cc1625"],["/categories/java/index.html","43c3f3e00520d1f37818687c32d8fafa"],["/categories/python/index.html","fc67de1ed313216bea681442690492c7"],["/categories/study/index.html","c859d1fe60decea5eb39430ab92f31b8"],["/categories/vue/index.html","d054aef5d371c497eab7a6797df5415c"],["/categories/误区/index.html","13a349dac0e335514cf1407a58c006c6"],["/commonweal/index.html","75bb8aa17efec09252928181740ab9a2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a2347b40736e563c27697591e2d9d507"],["/home/index.html","e724b392741d109c066f3402978728d6"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","92e6187ab9dcb768b9d6137627a03e71"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","63f99e322054cac760f1440fbe8b7ede"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","58ce9ef5eeeca0fd3465a35fdbc410de"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","374cee0a63a9b7f9811f4fac051fa706"],["/page/11/index.html","2e85e00fe181c49e37a2a15e8f6d3199"],["/page/12/index.html","d62a3f644cb175b0c858c2606ce588f7"],["/page/13/index.html","624b735fc7753395619ecb28cb85b1c0"],["/page/14/index.html","5c417829c0ba46a8acaba9f4090b236f"],["/page/15/index.html","60f262e3bee061a26bde8f7c74b86355"],["/page/16/index.html","3849cfccc4e4042237a99b72669a62dd"],["/page/17/index.html","25e2a80ffc70c0d50b2f28ae334d5509"],["/page/18/index.html","055752e0cec3397738147995743b0c20"],["/page/19/index.html","6f96f83c241b08e1fa22bdefa251ba67"],["/page/2/index.html","a42689a8fdf6af5b4c7e20d930839966"],["/page/20/index.html","aa655492aafd67b5d8585b437413b907"],["/page/3/index.html","8c1d41ad680173eb5fabce9235855aea"],["/page/4/index.html","43fabd3031a2d85afa2cde1df827bb22"],["/page/5/index.html","829334460af7699cbb4b2be61740b023"],["/page/6/index.html","a0f79865e8395710cb167f312573d7f4"],["/page/7/index.html","a16b2f3f4b3ea3b32552dfc8881f82f1"],["/page/8/index.html","1f0f138d1f0510b7f7a8626c05304bee"],["/page/9/index.html","e97a4c2acefe138f94a2f18b5d107a57"],["/resume/index.html","97063e74fb67c99c7d397ff086256e08"],["/schedule/index.html","7ac08440fb971858ad61f9023cec7bec"],["/sitemap/index.html","269cddb3ffc3c772883ca3e5eb8d27f9"],["/sw-register.js","df09bcc657fcd8823400a4d1cc2f5373"],["/tags/AI/index.html","65da76c32cf89a6ade6032cc80933d73"],["/tags/BT/index.html","981a4ef6ba10bf561dcf4a8986bfd7ef"],["/tags/BaiduNetdisk/index.html","b90e3df9645fd16198e3bf222c2779e0"],["/tags/Bootstrap5/index.html","3b78b5b7b6972d45ce44b27a93d60360"],["/tags/CSS3/index.html","0299cce2146ddecfd980d73e6a28cdbb"],["/tags/Electron/index.html","238d2a3d8241973d836581c07f62fdd6"],["/tags/ElementUI/index.html","6acdbbdeaf4752153abc7d0e06960adc"],["/tags/Flutter/index.html","922ce4e4d4dcccdc1e6a6bda4119c110"],["/tags/GAN/index.html","ce31d62797c4b8bd94ebbafc2a0ff82f"],["/tags/GUI/index.html","302611cc405b3b77810cb32996eec96d"],["/tags/Git/index.html","82606fd63581d737572804e2609d14f0"],["/tags/JavaScript/index.html","e8a0122b53b5b58f32274093281c778d"],["/tags/Keras/index.html","e29236027516db24afe298650efa5ae2"],["/tags/Linux/index.html","f48f7a7069d358d85df813e091214c5d"],["/tags/ML/index.html","3950dc634b50d58eef1ac3645b024b46"],["/tags/NLP学习/index.html","01f54405ef68407bb2533b61f20b5b20"],["/tags/Nginx/index.html","0cd51854a684656c25234dbb1b407520"],["/tags/Obsidian/index.html","2bbdde7ee6d8fd5c32edb015740a4b13"],["/tags/Qt/index.html","0980d6b9cd5bca0804cd11cc3bc4528e"],["/tags/RSS/index.html","75b7b3b1c15ad0b3f4f87db16a271760"],["/tags/SSL/index.html","7dcb679e7bc65a28194f3c5d8a047d6a"],["/tags/Scrapy/index.html","8fa70e3e8c18fbee770b4776cf162a8b"],["/tags/Web/index.html","dc3eed041c61810b483cce4131d50ffc"],["/tags/algorithm/index.html","84d32f5f2773a843d54f7d2f1ed3a550"],["/tags/bison/index.html","03241233947f462b0edf33c5fc6a4d04"],["/tags/bomb-lab/index.html","956adda472aa207dc0534fbca4a0ec12"],["/tags/c/index.html","f9e66a7d9306e21ad62ab9dda0fe17d9"],["/tags/cheerio/index.html","0633aa1addf617797f4138f9ac3fa95f"],["/tags/codewars/index.html","f67538329f3a1430b5cef4bc3e8d8772"],["/tags/compile/index.html","ee51d8c8a8b1286c3712fe86bfdf5347"],["/tags/compiler/index.html","85a7a5ef7cdd437bff1185bd37662db2"],["/tags/course/index.html","a795d84be23f938dc79058f67311bbe5"],["/tags/crypto/index.html","e4f4a6011fb98ba37442025120caf256"],["/tags/csapp/index.html","af3bf27e04b5cb6e312fe17081057e42"],["/tags/css/index.html","36e779cc20578097205410da94548359"],["/tags/data-structure/index.html","75e3ef35582444fbf73b47c1e5974fdb"],["/tags/database/index.html","fce96ebe450823e6a7fc424a15739032"],["/tags/deep-learning/index.html","a4ab0e758504d6bac2f0e198d55b5713"],["/tags/django/index.html","d94324f497913e50afc928a90b0a60e4"],["/tags/dwm/index.html","a527a635db87cd775db33e941bab862d"],["/tags/exercise/index.html","c01f42c6de7b1b59b29a000fcff11177"],["/tags/flask/index.html","fc63228b998ed05f4066fd4e30f2541f"],["/tags/flex/index.html","98b1e03d6203d9e3037d74ecf5419a37"],["/tags/front/index.html","7ff66260ac0656d9b4bf999f823ae597"],["/tags/gcc/index.html","4cd956cba22c79e42850b3db61d960f5"],["/tags/gdb/index.html","ca6debe564bea9c96816c1e2ebada2de"],["/tags/github-profile/index.html","ff8a4982276a45b24ebf5c4fd4876231"],["/tags/github/index.html","3c1485d8960910444feab3081b692507"],["/tags/graphviz/index.html","7567b5beb386888088a070cb101bbdcf"],["/tags/grid/index.html","cad7a6dff8dadc2122f5b83f9784ec93"],["/tags/html/index.html","4775aaae4852306ed21598faaeb7368d"],["/tags/i3wm/index.html","9002e671d7b6e0be7bdb2b747ff78ebc"],["/tags/index.html","6ef841e787dbc3ec9396e0e45e0144e3"],["/tags/issue/index.html","4ca6961299fab3a661819be8d29d2f5e"],["/tags/jQuery/index.html","27d975be11358d00ec9f07e658cf3f77"],["/tags/java/index.html","e442d66a96d34b1cb17b50663b14b22b"],["/tags/js/index.html","32f080837f11f7545fb664ac5e1f7ab7"],["/tags/latex/index.html","cc5072140107120e9e71f21ccc252378"],["/tags/leetcode/index.html","34aedbefbd9ded10436c4ba33730c75a"],["/tags/lex/index.html","4120db216c9034ab6ad1ea1aee87ba30"],["/tags/material/index.html","52af8e1f43f09094a1072cb6380b4b2f"],["/tags/music-player/index.html","d2bdce67e35027c5838ea1dd11bc9f3f"],["/tags/nodejs/index.html","a9a5777cad2de38d3470e2ccea229062"],["/tags/noj/index.html","c27b8cdeb3ce32d254268757dc8c34fa"],["/tags/opencv/index.html","21a97f3529083cf5fe686bb142523542"],["/tags/overleaf/index.html","116da972c4e8579294fa6107f1c7e69b"],["/tags/pandas/index.html","0428cab3b7adc68c4fd85411cffc1481"],["/tags/premiere-pro/index.html","2b464d040285b8ad66366019ab8c351f"],["/tags/proxy/index.html","9098c54380af8c1685f8bc0d1a9857f7"],["/tags/pygame/index.html","f5c7693b39e76fcebb6e43b58698ffa6"],["/tags/python/index.html","c4b5b8254e621fd6c3963009ce9845fb"],["/tags/pytorch/index.html","1d99f195835c0481a0134d186e5ef227"],["/tags/reading/index.html","7931554c5c96cb55c7ee615f043cc2bb"],["/tags/request/index.html","1c6b01edcceaea555978514ce675047a"],["/tags/requests/index.html","3c0a429c0b86887980af6e0506f76b5a"],["/tags/security/index.html","05cf46dba7275e8a5f5ceb24aca6009e"],["/tags/shell/index.html","b222c495bcdf003a6414f09b96fc10c2"],["/tags/sign-in/index.html","8026e1ef161d41e297d08ac48b173696"],["/tags/socket/index.html","e781b4cc2d434b8a7ab5834b4e029701"],["/tags/spider/index.html","f15bcfd3e446ed8182f9edec4397f41b"],["/tags/splash/index.html","3c596b9e0cfa1b548ac1fc458044c41f"],["/tags/superagent/index.html","ba7c4aa173f3a593fa2d67ea394c77d7"],["/tags/tensorlow/index.html","ee8a06f5c220e6f9a32c2d305a5f0702"],["/tags/tex/index.html","cf2a6a6c001428683c264cd3f938b84c"],["/tags/threading/index.html","95823e2505de0c1049d946b0bae857ff"],["/tags/tkinter/index.html","e059b9cf417abf3acf550c7591ddc41b"],["/tags/torrent/index.html","9897a727ede53d903cbfc3199409bf52"],["/tags/tutorial/index.html","f406977dd10be2b8233caf63004392ed"],["/tags/typora/index.html","16610a2ed3dd68edaf929d3610cd09e4"],["/tags/uniapp/index.html","a84191bb5650531b58debdec7175863b"],["/tags/vite/index.html","ce7cdd3f36df5d67be77fea16d70feae"],["/tags/vue-element-template/index.html","bd07b9cb9e84efdf56320b093ebc2de1"],["/tags/vue/index.html","1fcba1d6ad83d5283e143521b029ef86"],["/tags/vue2/index.html","aad1f298495bd00f4aecff46886422a4"],["/tags/vue3-x/index.html","963fa7e15f73531ec369a71224093642"],["/tags/wechat/index.html","af8d405bd7c5ff9a147d979ed16750f7"],["/tags/wm/index.html","6df1021abf50a253379bd16b78d034ac"],["/tags/wordpress/index.html","fd7e06d60b8f6b607e8179d47d6cc882"],["/tags/workflow/index.html","e92584aea99e43c1835f37975168329f"],["/tags/xpath/index.html","14dc09caa3ad1d58dab2430cee6936ae"],["/tags/yacc/index.html","5de391ea55408b7b6fad15f3b4e4a4e7"],["/tags/zsh/index.html","6d9ae6ce438b54d97e0d1998b83a0ac7"],["/tags/七牛云/index.html","e22e67c4f90a4a2520b53f9bf02a7f00"],["/tags/函数/index.html","7c1e86bc3a21e3a0cb59a00187e1451b"],["/tags/剪辑/index.html","dd4aca16c836ed31a0df4733d0856dc5"],["/tags/存储/index.html","081c170312cdf53b5be269051e50c5d9"],["/tags/实战/index.html","3e797912669f29dc189d4cb6c3eac4cc"],["/tags/建站/index.html","da55af83fe4cd7a96d22c0d0b77d995f"],["/tags/微信小程序/index.html","1b82d70fc8485ba02e576e7ba9269c2b"],["/tags/指针/index.html","3c20defc64b529d63cdee4ac508f362f"],["/tags/汇编/index.html","9157d4696d25bc7a275e764dcc03cb55"],["/tags/爬虫/index.html","a01cd7f68ef9c7722cd945b0cdc0ec98"],["/tags/算法/index.html","5159152c27ef6a022ebdd569c6839b62"],["/tags/编译原理/index.html","9c17586e0ac4a40fe5fec9dbce6a8c79"],["/tags/获取地理位置/index.html","d82367ed62421dddbe2aa408122e41cc"]];
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
