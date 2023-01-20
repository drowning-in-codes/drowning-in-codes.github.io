/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","93b139bfecaefaae69b74c0089207197"],["/2021/04/20/稀疏矩阵/index.html","9f5d8a6ee22e251add40436191615055"],["/2021/04/23/广义表简介/index.html","0bc9ab1ed2c37cb25f97c4d51001074f"],["/2021/04/29/关于指针和函数/index.html","6b781fa3052aebc43f211630d16bd6e5"],["/2021/05/10/哈夫曼编-译码/index.html","6ed1bd7a736a3c67a9ed6c03dcf42e17"],["/2021/05/17/数据结构noj_2/index.html","a26bb0a184b12fc5b9d3edc4f26a6f67"],["/2021/05/30/数据结构试验/index.html","556f6d5e9c878c70d353d6db10578d11"],["/2021/06/12/数据结构noj-3/index.html","9953d1356ed498c4b6722abbef209c13"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","3706bdc0ec4ea9c163af4bb606b132c6"],["/2021/07/08/课程资源分享/index.html","28513433a753db4fd0b4216e728df497"],["/2021/07/20/Scrapy-下载图片-文件/index.html","34c72549ce145bdd89fb370170f1655f"],["/2021/07/21/Scrapy-动态网页爬取/index.html","42f65725d4c56d35b37911a0be6ef5ac"],["/2021/07/21/疫情打卡/index.html","24edaf787b6920bca0dc1fdbd49f7efe"],["/2021/07/29/Scrapy代理设置/index.html","2b0c040742214621d33680809e073818"],["/2021/07/29/数据库认识/index.html","687f30d76990b5f519238ffd98f9c882"],["/2021/07/31/Python多线程学习/index.html","c744b170ed396bf62dfd8132443e62b5"],["/2021/07/31/tkinter-requests练习/index.html","50f8db519e2471daffca5538a41f911b"],["/2021/08/10/Git学习/index.html","fa6bc4a2bd197d480cf01288066c2caf"],["/2021/08/15/pygame实践-1/index.html","1434f3fc8ad8659c2af06a98e588af4e"],["/2021/09/06/微信小程序开发/index.html","7d02286268077a579d1d780f3c039089"],["/2021/09/21/命令集-1/index.html","1fb80256e98e8386d6edafe5ea08cbac"],["/2021/09/21/命令集-2/index.html","23bf1a89d9746af5436a44175b3863c9"],["/2021/09/21/命令集-3/index.html","791da14e04b2a87103324b5a04ffd69a"],["/2021/09/21/命令集-4/index.html","8e6330406b5ccb86d8514626899967ae"],["/2021/10/03/socket学习/index.html","318b5655b1c2fde8b21a0e9a3a148a9f"],["/2021/10/10/dwm入门/index.html","454219ad9b8d79983e9b9f93808ab01a"],["/2021/10/10/安装ohmyzsh并配置/index.html","d207f64b01a271616405b8fce8dddf80"],["/2021/10/20/css学习/index.html","642d10a2715023ea8df39cf98fb93e12"],["/2021/10/20/wm入坑/index.html","1fd33b8b76f9332edb871bfe7085dcb3"],["/2021/11/03/微信小程序学习/index.html","8b9ecc6685dec61b2e1472dfa41c59fc"],["/2021/11/04/css揭秘/index.html","343c773d404f7146e960c69fb5dd553e"],["/2021/11/05/css-练习/index.html","fd8536b8abb6dcf2693cac19ab43f0c3"],["/2021/11/21/命令集-5/index.html","e1239e3371b0137a73152f29defa5deb"],["/2021/11/21/命令集-6/index.html","283b7223c22759786a819a8badd238a1"],["/2021/11/21/命令集-7/index.html","2a7c9785e0c764a290c19b869fc0b335"],["/2021/12/01/搭建wordpress/index.html","16b4b4a996b6032f77975a56f1cc39d9"],["/2021/12/08/python操作百度网盘/index.html","968640b439c3829711ec9b27fd9353f0"],["/2021/12/14/js爬虫/index.html","e913ee64ae275886e7cd19d17dd4a2db"],["/2021/12/25/为网站申请ssl证书/index.html","a852279edb4ddefb450d2f0d6bbf2aa5"],["/2021/12/29/使用七牛云为网站提供服务/index.html","1b7cd31ac9fac4f758bd5249d180f0ba"],["/2021/12/30/jQurey继续学习/index.html","0809d7682356feb75390308525fcc6a2"],["/2021/12/30/jquery学习/index.html","b5df8789aade293cd59eed17078c2967"],["/2021/12/31/vue学习/index.html","9b569332a38b4b60afc8ed3301df4a59"],["/2022/01/02/疫情自动打卡/index.html","9b2b2c63d418502384ebc6c894a13001"],["/2022/01/03/javaweb初体验/index.html","c9c29f4bc035c28ee29e6d16cd006f38"],["/2022/01/04/codewars练习/index.html","a39c2e6484756770036d3208d033941e"],["/2022/01/05/Spring学习/index.html","48036a1aad249f817308bb28f17d95cf"],["/2022/01/05/vue实战/index.html","cd55a790711f613eeccd2da8b8c4967d"],["/2022/01/08/gdb-gcc学习/index.html","afd66af155b0640dcba076790a2f1c23"],["/2022/01/11/python-opencv学习/index.html","e4040ce93387447fd8c650fc75df692f"],["/2022/01/12/汇编实战/index.html","c2ba7eb896fa4b2f8f4baba48b3f1df9"],["/2022/01/17/pandas学习/index.html","400a244c41955b7512c97750ad61a678"],["/2022/01/19/可视化图的工具/index.html","671fe1fdb388cfc36674e26da815af9a"],["/2022/01/19/机器学习入门/index.html","6a62f3ac93b7dd6c5f227c52debbe7e5"],["/2022/01/20/cousera-ML学习/index.html","8b04002f05787b8a6a48a065642995ac"],["/2022/01/30/typora解绑后出现问题/index.html","3f5bad9ae327d0b45d74d16b055a9803"],["/2022/02/03/NLP学习/index.html","dc3c5403638895a204e8977af0fdcddb"],["/2022/02/04/Web漏洞学习/index.html","9dba8bcb56a4208313babe069fa4c7c3"],["/2022/02/04/pyqt学习/index.html","ab71dfd3b8e0951aff472a81d51da217"],["/2022/02/04/python爬虫/index.html","13c1de2b88bfcea189064e24142b5e15"],["/2022/02/18/Electron学习/index.html","dd9c50dc6ef8cc26761dd4bb22aa546c"],["/2022/02/22/疫情填报字段解析/index.html","7a119f36f50a4db5679d39adfae242c1"],["/2022/02/24/Bomb-lab实验/index.html","d57838e5f8ec8c97367dd957435c171c"],["/2022/03/05/nginx学习/index.html","38acfbbc451e7dccae17d4dc410ca561"],["/2022/03/09/汇编原理课程学习/index.html","b370880f14f4c5a5aeeaa75cd7937086"],["/2022/03/11/Keras学习/index.html","91f085cc3ada2dc5bba619814ab9dc64"],["/2022/04/01/graphviz学习/index.html","dd5a85bfeb11d964c63525eccb848293"],["/2022/04/07/django学习/index.html","bc032ebc03dd0edbd8ce8c6e9c12fc3a"],["/2022/04/11/密码破解学习/index.html","96abbe538f8de01c817ff636e3a05699"],["/2022/04/12/flex-bison学习/index.html","6a530649d96e7f390fbe886ff803c45c"],["/2022/04/15/pytorch学习/index.html","c871269e7fad65e6ea81fa59a2430851"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","37ad8fb39c6d59a041a314bcb93ffcd8"],["/2022/04/23/写一个音乐播放器/index.html","e842c0527cd9de53b3511e86c427f93a"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","d5743bcd7879deb9d0ec89e726fee42e"],["/2022/04/30/GAN学习/index.html","f1ea7fec6b0a3bdcb7a525a2475c7f1b"],["/2022/05/02/html精学/index.html","24f71afe676a96373ab6930932c69b99"],["/2022/05/06/write-a-compiler-by-yourself/index.html","176dfd3021dfd6dfd14163dd483f81da"],["/2022/05/30/acwj-01/index.html","c91d341f5dd379249b18ba979494a724"],["/2022/06/14/animeGAN/index.html","4c3c3cd823f6d650742227c7e3bf9d27"],["/2022/07/09/c-与算法学习/index.html","7d2d73c82ab287e688da8ce48d15101e"],["/2022/09/19/flask学习/index.html","cccc6d77f684e147c8edda6f52a3aafa"],["/2022/09/22/cs224w学习/index.html","220d350e1432dad7855b33c46af5515d"],["/2022/09/28/记录一次wp重装/index.html","4c9f6865dcd4469c76e519fe7aa54f60"],["/2022/10/01/Obsidian学习/index.html","f766bc69cf67e1850686b753127b121d"],["/2022/10/08/vue-element-template实战/index.html","e5fe3d02fdd48f5c863a70e5835bda1e"],["/2022/10/25/vue网上商城项目/index.html","ce20510009033412662c92d43e46079d"],["/2022/11/11/leetcode刷题记录/index.html","63aa6b846b9c7c1b29bd0d7c877bd6fc"],["/2022/11/11/使用overleaf优雅地写文章/index.html","c5287dcd8302fe400a6a48cb06cec3e0"],["/2022/11/22/磁力链接与RSS订阅/index.html","dd41fd07ac1a871653755701240c561a"],["/2022/12/11/uniapp申请获取地理位置/index.html","65332d8a400778e5f0ea583337e0cf07"],["/2022/12/26/pr剪辑学习/index.html","f0625bb61f18693830383a3a679cf112"],["/2022/12/27/css中的flex和grid布局/index.html","f554255584aa21cbbcf41304d08bfe01"],["/2022/12/28/Flutter学习/index.html","6fcab027c3fb57b8e73909eb09d8908f"],["/2023/01/01/美化github首页/index.html","17415f971e92eec41c979ca8c5d026eb"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","9cfda161bbd2acc5029d615ca3f500a7"],["/2023/01/04/构建微信快捷发布文章工具/index.html","20e63cb5c9eae5a42bbb3ae5bfb66415"],["/2023/01/14/dart学习/index.html","d70e93e141d493d415918a5c4417696b"],["/about/index.html","bb8cb6de8f6356670e58a029f4a9bbe3"],["/archives/2021/04/index.html","9e93e83e908e32437fce8e239dc688d3"],["/archives/2021/05/index.html","b008e74e468dcdf998350fc4f6c1545d"],["/archives/2021/06/index.html","5260f814fc6ff29b36147a936bd3ba74"],["/archives/2021/07/index.html","d9017ee9617bb6fbef12810760b2f37a"],["/archives/2021/08/index.html","acf0b0835589344adaca38ed10add373"],["/archives/2021/09/index.html","57fb6d34850fc6a774dc6e478ca8f41d"],["/archives/2021/10/index.html","ffb05221c4f185fb91e2b797b2790671"],["/archives/2021/11/index.html","cb412b9211fc717cae01f39ca024706f"],["/archives/2021/12/index.html","9792dc355123e6498f7853f384652ccf"],["/archives/2021/index.html","74bf038afb81ab8ee488ade114bb2eed"],["/archives/2022/01/index.html","a40a3914d0c1c87d80c6d9c58bee8d6f"],["/archives/2022/02/index.html","37ab7cd41c1eb7afc88070a11c6c66b7"],["/archives/2022/03/index.html","5c48efac804260004567d173290fd5df"],["/archives/2022/04/index.html","15d7d27d1e5710a7dc6ee7bb3a2b9cc0"],["/archives/2022/05/index.html","9b78a66938992c3da96bf340c155de6e"],["/archives/2022/06/index.html","c4aa9c70b3ddf465e8d67de478b9adc0"],["/archives/2022/07/index.html","606022c3782dfc198dbbdf79a09c1a8d"],["/archives/2022/09/index.html","d5140147359f0e9c1553b1599fe8e9b7"],["/archives/2022/10/index.html","4cb51b994fb8dde79546de2cffbe0553"],["/archives/2022/11/index.html","e94eb53d2ace690f14d85d4c40a89af2"],["/archives/2022/12/index.html","f5c2c8602a062791b936fb40047b6221"],["/archives/2022/index.html","241971fff9d182af689ad81cddadf604"],["/archives/2023/01/index.html","cb30d4d7c32d0d36083c9adc5514015f"],["/archives/2023/index.html","5c623f904a6f7c0439f9ce803606b1c8"],["/archives/index.html","5b2ff1543de9088e6ed2767f3ba8dd63"],["/archives/page/2/index.html","4832131c4feda0fc92cd97c9ddc6db6e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","79c1e5c4953a7edfd8a70afccc1dc6dd"],["/categories/ML/index.html","cf068bbfa4932157fd373f881a3a1099"],["/categories/Nginx/index.html","afcd7df4aa319ba0063ef20676ccd97c"],["/categories/Spring/index.html","94d79fca42b9ba966193040df3a80655"],["/categories/course/index.html","6438e02212d85aba57026cae374315df"],["/categories/django/index.html","69fccd088dff89671caf0fdaf6e9a071"],["/categories/fun/index.html","efd5eae181b0a3becf69ecd311431c1d"],["/categories/gcc/gdb/index.html","9e217a15ab9d5ffe01d1dca0a4c9f797"],["/categories/gcc/index.html","a14cbeb33bbdda43a544d8a5334f28c3"],["/categories/index.html","169496d616977ec60dda5d00752ae6f1"],["/categories/java/index.html","c8fbc43067c665831740a4e5a0b26ed4"],["/categories/python/index.html","298ab553f140c4beae913596b13ec45b"],["/categories/study/index.html","1b1f803f9bc59115182afc5b551008aa"],["/categories/vue/index.html","b21eb95c7e9b40ef97f8ef1120ac6d3c"],["/categories/误区/index.html","7c36f0577f59f81ca055181272ba9cfa"],["/commonweal/index.html","97ef894630b8cd7672ecc7de62edf528"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","4756cf1c86a45699dffee6ba80fca8e8"],["/home/index.html","d5cefc34fd3e5bf81052792e46303451"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","159870dd56f58d88689740b7709ce8d5"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","cedcf781f7832559268bc3c8a515afe2"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","17d3f82fc928c13633271875c67ed8f5"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","812c29ca3435a2407c33c67d973adc4e"],["/page/11/index.html","c5c774d7ff7dcf13459ede0e476347f0"],["/page/12/index.html","d3dd7c6ce92971d251441350837c945e"],["/page/13/index.html","afc98abe39e74e4f9c9de96f4a65a56b"],["/page/14/index.html","ae25dcfff3b07e8b96105ba94f3b68bd"],["/page/15/index.html","fbd7da0893da11217480b42403dbcbb3"],["/page/16/index.html","4078ed4878ab263478d23bddd0009600"],["/page/17/index.html","375bda48e166a357574d37fc2a9362c7"],["/page/18/index.html","799adddddfac266c397ff578cfecb342"],["/page/19/index.html","1e12ef5a3e30bcc7c7ad46e523b08275"],["/page/2/index.html","b1497d51032fe11c749d48e140858da0"],["/page/20/index.html","b66e3568d6502751309cd85afbedd9f9"],["/page/3/index.html","442e3eb76de3908c4cc1759ed9f9d8b9"],["/page/4/index.html","0bca5f1ec3c1c31a0f9c923e30af0f6e"],["/page/5/index.html","a2899ba2cc4c7cbffba98e0b2c96c7af"],["/page/6/index.html","12b94d2fd9b79300c06bf1f7e16b484b"],["/page/7/index.html","d8073b935a557f6d48aae9784ce4ac52"],["/page/8/index.html","396f01af3c5c17cbc124d4a9a4e18ff9"],["/page/9/index.html","1c531ccb73cffc6d251d380774d06371"],["/resume/index.html","0ed10db0620dc086a3db35b465f192c2"],["/schedule/index.html","e1de90096ff98fb56f5b00c29e967ce7"],["/sitemap/index.html","e70b754638a2dbdd404f50db6a9dd64b"],["/sw-register.js","18ad28d6e5a4140db86b7ae19f2e25fe"],["/tags/AI/index.html","4c1b2b90b2411b2def7b678f3e9ba358"],["/tags/BT/index.html","9171bc8722a0d18602e5af4fd2fee157"],["/tags/BaiduNetdisk/index.html","6325d759d28c2b47c4c59e5d2d198af6"],["/tags/Bootstrap5/index.html","702aebd64fb6ae04a342a75ae6d6c26e"],["/tags/CSS3/index.html","e47ead6a206faf5a5d60965e8a1b1e94"],["/tags/Electron/index.html","1edde01e20f309c206ed3f48f10f414f"],["/tags/ElementUI/index.html","7bd256cdc1e1a59b18119fc9e8d7edf7"],["/tags/Flutter/index.html","0eb127fbd625db8dfb2ebfdf21d3a50c"],["/tags/GAN/index.html","ffecb532a78827b25f3317ebb9b0f933"],["/tags/GUI/index.html","5b0e28d2847555ca5703f77c24e1d011"],["/tags/Git/index.html","b5a981aff05e1b35a7bc6c571994a372"],["/tags/JavaScript/index.html","e5437db89d75a6195063a9f6557684c4"],["/tags/Keras/index.html","7839cacde7c3bf5ba8a8d4d3c161d345"],["/tags/Linux/index.html","e025c27520d684f611925c17f559921e"],["/tags/ML/index.html","7278d6adbd2060e074d138c2a228e64c"],["/tags/NLP学习/index.html","da69ef22b5da9fcfdeb89d3c447dfe2f"],["/tags/Nginx/index.html","97926580864132d6f7c776d1046e1ff0"],["/tags/Obsidian/index.html","61f8fe931d3a77a9624ee636e28d4925"],["/tags/Qt/index.html","a8711ddd739d23f87baac915382e071b"],["/tags/RSS/index.html","839fae040fa660888ebf644ad58e7895"],["/tags/SSL/index.html","44f9dd7b4a9baf1999833232aae880fe"],["/tags/Scrapy/index.html","8400284b4b5fd92ec7944462c89d1a05"],["/tags/Web/index.html","aeee2ad759732c513787b4f49afb5518"],["/tags/algorithm/index.html","b69bf6f9429722acbac26448956ff1b9"],["/tags/bison/index.html","a8f9241f0e865e144768f7611b9ab3d1"],["/tags/bomb-lab/index.html","b910f141fb958bd76ed12076dda52ccb"],["/tags/c/index.html","7d24ea5dd2c16dc8a8499ed163f82353"],["/tags/cheerio/index.html","0a5892ecfbfece9052f5440eca29298d"],["/tags/codewars/index.html","3a05c7da2c1ae99e365d456214bb76f0"],["/tags/compile/index.html","678598332203db71bbb9f148f61aba28"],["/tags/compiler/index.html","a2a0ee0e5b6d9572ba3733d54fdd2100"],["/tags/course/index.html","78881e378fa4ce124cfcc7fa893053e1"],["/tags/crypto/index.html","8c991d510f64a55262c460ffac4cb4bb"],["/tags/csapp/index.html","cf836fce6f7e61a27eb5f62acf8d137a"],["/tags/css/index.html","e50b6a802566e24dc07ca0abb45de568"],["/tags/dart/index.html","e106b4b07aadbc9866b3d5d2a5053e5c"],["/tags/data-structure/index.html","f1fdf37a96b8f3c97d1624b016b4b21b"],["/tags/database/index.html","bcb7beb72644262035bff3d55e62bce2"],["/tags/deep-learning/index.html","6082523b37a29a78dc9f5006091c6c8f"],["/tags/django/index.html","71f2505d2158a98d2c223868df51b78b"],["/tags/dwm/index.html","1d0f0e68a3eeb17d6341c99c3cacc3e0"],["/tags/exercise/index.html","2ce07e9531c40f53864755c6e85038c9"],["/tags/flask/index.html","c7a8d60f1b96b242512050dcb64fd68b"],["/tags/flex/index.html","028ccde4ed64c27dd54e51d2425ba1aa"],["/tags/front/index.html","60bdd613cd0b860761b6752641ab20e1"],["/tags/gcc/index.html","23b7d18e30a8c4aeaecfaf2c27063da5"],["/tags/gdb/index.html","d77f63539cd28d043fc4d2be96309ebb"],["/tags/github-profile/index.html","b1821d8692a8ae49c8f1af0759e66eed"],["/tags/github/index.html","60d50e18c57286ae94a5aa79bd10dc3c"],["/tags/graphviz/index.html","32d8f61cb0412edf8632a615be25d8b8"],["/tags/grid/index.html","a3aec86d24b8cc4a89d6772108c5466f"],["/tags/html/index.html","46d840fbd65fb2e360f927e4c829231a"],["/tags/i3wm/index.html","a659689d34aac6b58b7f1dc7eafb2326"],["/tags/index.html","29bea758fb6c55d39df9ea09feecc73d"],["/tags/issue/index.html","be71d639ae20b5c388c7ee6150331d32"],["/tags/jQuery/index.html","383e7a8fe4d2b43a9dd8cb4ae0e48343"],["/tags/java/index.html","5af47bdf78538f47438e9dda324dde47"],["/tags/js/index.html","d0158340b897dd44288a55ebdedbddb9"],["/tags/latex/index.html","c82d9da22d44e27fbea64e50230d9459"],["/tags/leetcode/index.html","fe8b03f375dea44f3efd4b2c1f52022a"],["/tags/lex/index.html","458c7eb87f472ddb54a904e9d984e6a1"],["/tags/material/index.html","d1c99b7fd2af4209f454a905ac986335"],["/tags/music-player/index.html","707657b27356e854b5dea1538c7a5f17"],["/tags/nodejs/index.html","8ea6b3a129beb72a044892337f6c561e"],["/tags/noj/index.html","6288b659ca37aafa44a41f4e6918974c"],["/tags/opencv/index.html","b2788b0ff79eade3bfa56d7c20449ecf"],["/tags/overleaf/index.html","0c239063cb5a0b87fc3c0055ba519b08"],["/tags/pandas/index.html","01a381b694a1e1c9ac20be5beabd5e35"],["/tags/premiere-pro/index.html","d19ecb9e2bf12697c3b2118fefb72f1c"],["/tags/proxy/index.html","7789fc5e09983d28527d5cac5d4a9c0e"],["/tags/pygame/index.html","742cd76dfa26f0c4d0bb42c969b659d1"],["/tags/python/index.html","bc054431ab131fbf8b31fc3084407c8e"],["/tags/pytorch/index.html","9232ae33ca7dcd862cb24bd5da95ae56"],["/tags/reading/index.html","7b8c0b4d0096703852da21f32f04ec23"],["/tags/request/index.html","a86688ee39aa27fd28370606128ab037"],["/tags/requests/index.html","b9914b250a61a50a45baa24e60fc84c2"],["/tags/security/index.html","7a8124d448085dc0984f210b3e90be29"],["/tags/shell/index.html","c5e31c4bdb1686ddd871c88fad38c1cd"],["/tags/sign-in/index.html","3f9575dc0336082e820b4102f74bc48e"],["/tags/socket/index.html","79f5ea5b5d1f85b11b381b564527ba92"],["/tags/spider/index.html","f6a118c919d3e3195bdeb36aa063b36a"],["/tags/splash/index.html","bfad16ab3337dbceceb5acaab7d4dc33"],["/tags/superagent/index.html","3dcdaa64595c5d56566200e2c51a3e25"],["/tags/tensorlow/index.html","320ceb1656d5343f3ab4505bf1c827bb"],["/tags/tex/index.html","83f1dbf97d34b5eb30f119d0c4a11615"],["/tags/threading/index.html","99a4cb893368a87357f639fd3260976e"],["/tags/tkinter/index.html","5dba0ebfb263dfac44589df34d21c18e"],["/tags/torrent/index.html","e1d92c1b4040184bf70759ceaf349798"],["/tags/tutorial/index.html","d50238e9047d2de4d018f00dcc2623cc"],["/tags/typora/index.html","2bcee5f2c71da154860f224d5db869e8"],["/tags/uniapp/index.html","0720a517039762a9155a911381d47d81"],["/tags/vite/index.html","4d3b246b57124cfc66a722c786ff21ea"],["/tags/vue-element-template/index.html","193821d0cd7209155fa10d4bfc9f0262"],["/tags/vue/index.html","b0e64d701b1127ef8d0d7510989afcc3"],["/tags/vue2/index.html","d475f4d632913b98a0c3840fe75d9ddd"],["/tags/vue3-x/index.html","e39e4cc888d8ac31702bb717dbde1b1f"],["/tags/wechat/index.html","fd22576f27bc6b36eab1e21e1c09706f"],["/tags/wm/index.html","f8df34b3918862948874645c35d72471"],["/tags/wordpress/index.html","8bcfdad8fb4f4d9f99bee40a553c1478"],["/tags/workflow/index.html","d3b60a8f3db43a58b5c8466893a25f17"],["/tags/xpath/index.html","5722b716f015239b1989a05d7c766a38"],["/tags/yacc/index.html","5f392e96b593a47304e8fdc8af1820fd"],["/tags/zsh/index.html","8729643b15bfa749044eb2f94a0896c9"],["/tags/七牛云/index.html","e8393d8c5205944f2427ca1ed9cf3b1f"],["/tags/函数/index.html","bbaf1bffc262768dc02c6103260e7358"],["/tags/剪辑/index.html","badf03b759f44f493aa467692588475b"],["/tags/存储/index.html","17132a06bc59ac2079f509f54d4009db"],["/tags/实战/index.html","11949ae428b2e22021e2ce30b4b95001"],["/tags/建站/index.html","9426265b835fe837c448c767f155e38d"],["/tags/微信小程序/index.html","7290c7e0404980786f8169f6b892d828"],["/tags/指针/index.html","a4945ddcc4247bd0f887e690f7acd9a4"],["/tags/汇编/index.html","44068e35f9be2d30fb25d3920b75c102"],["/tags/爬虫/index.html","e1aee97b8c42db78952beb61fa596978"],["/tags/算法/index.html","798412a30e0a599ce9cb4693ea4e3946"],["/tags/编译原理/index.html","b4e82597796fff2caba7b94b672bdeb0"],["/tags/获取地理位置/index.html","b4e3fe7c35c6a144070c39b7b53630be"]];
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
