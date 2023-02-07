/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","91179ab12ab13da54af8c2710af54347"],["/2021/04/20/稀疏矩阵/index.html","2fea58ff29e7ce6b1321503ba3a53369"],["/2021/04/23/广义表简介/index.html","e31b61413cf9a76a5cfa1c790130221e"],["/2021/04/29/关于指针和函数/index.html","6fed34cef727af3a1ac359d9ee84bee1"],["/2021/05/10/哈夫曼编-译码/index.html","bf583243e50314d92d9c4c7774f33455"],["/2021/05/17/数据结构noj_2/index.html","d80f1f843af50c3a134f8035195111fb"],["/2021/05/30/数据结构试验/index.html","d40ff029efc5f14826f82b09c02f2845"],["/2021/06/12/数据结构noj-3/index.html","91930e32bbc10f6b33f885e6971e6459"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","7af05c52c8adb6ef986e5ca720168985"],["/2021/07/08/课程资源分享/index.html","4c384b1ee2b3125398f67a368438669d"],["/2021/07/20/Scrapy-下载图片-文件/index.html","ec90128a9de9099ad61e6a62ecb71d8f"],["/2021/07/21/Scrapy-动态网页爬取/index.html","5b4fa88336a6501bd5a96f6439d2f4fa"],["/2021/07/21/疫情打卡/index.html","67c649cbec70186c26b195f6f92ad6a0"],["/2021/07/29/Scrapy代理设置/index.html","caaf3f8a114f489695f660d8d2683a80"],["/2021/07/29/数据库认识/index.html","c24521652891030802d1a9355b2d9d3c"],["/2021/07/31/Python多线程学习/index.html","862a41a30126ca6c9269ab334ef0fb71"],["/2021/07/31/tkinter-requests练习/index.html","26c067f12b1eb1d03c0004a458115c98"],["/2021/08/10/Git学习/index.html","52b3975acf07eceb1fb86674eab0676d"],["/2021/08/15/pygame实践-1/index.html","a823e90251c600141f92de8fdd8dce83"],["/2021/09/06/微信小程序开发/index.html","615f752dcc7cfa6f00125ae338e2fe09"],["/2021/09/21/命令集-1/index.html","ef7f58e0b6dd578bb497f99b33c0b1f8"],["/2021/09/21/命令集-2/index.html","71a2ca5dbdffd932b10d2e51d95de4e5"],["/2021/09/21/命令集-3/index.html","7e3c69ace4cb6cc4d0007c4e6952b73c"],["/2021/09/21/命令集-4/index.html","22387a91c99c041ca590146e46fdad72"],["/2021/10/03/socket学习/index.html","d3e2312857616d19a17ae3d4f044ef0f"],["/2021/10/10/dwm入门/index.html","769e8b31bd9316638db10b8df7dda944"],["/2021/10/10/安装ohmyzsh并配置/index.html","7a6b91c72d5733f7b79415ec1c0cd9b2"],["/2021/10/20/css学习/index.html","a74aafd7ed54dede91ce3c19a56b3eba"],["/2021/10/20/wm入坑/index.html","d7e7cf1946efbfc6a6e9f7e9b72ddf15"],["/2021/11/03/微信小程序学习/index.html","664205d2b35d7ea0d55f629fc0268097"],["/2021/11/04/css揭秘/index.html","eee2896018a6e174cacd143ec8f905f1"],["/2021/11/05/css-练习/index.html","618b9ace6d2a95d5ee423e6fb4df2330"],["/2021/11/21/命令集-5/index.html","95ffd2b0c4446d44e1dbc727260f12d5"],["/2021/11/21/命令集-6/index.html","9d40dccb1a42e5f6d5649b54e05a9c73"],["/2021/11/21/命令集-7/index.html","676c92746742109a0201441e5ac4845b"],["/2021/12/01/搭建wordpress/index.html","e3c83beb8386835a40bdda5149a64053"],["/2021/12/08/python操作百度网盘/index.html","165bfea52b7aa814265c580ed724482a"],["/2021/12/14/js爬虫/index.html","fe6c9f0dc616274ff0b67721c9bfb363"],["/2021/12/25/为网站申请ssl证书/index.html","18f839b01d17ca952c43e08f82513d15"],["/2021/12/29/使用七牛云为网站提供服务/index.html","fc7fe9a8fd30e8726a73e1cdd835a6e3"],["/2021/12/30/jQurey继续学习/index.html","d5c74becb1a75daeeb5e7cadefcfc5ac"],["/2021/12/30/jquery学习/index.html","23b55a4d680c7d96df24d9d1dc0be1cf"],["/2021/12/31/vue学习/index.html","d1a932a06ddb36c57e6acadd47c48fde"],["/2022/01/02/疫情自动打卡/index.html","90f7e874d836073d628a96708039b74c"],["/2022/01/03/javaweb初体验/index.html","359993207cb84f019949d5cbfa9f86bb"],["/2022/01/04/codewars练习/index.html","fb102cad14fd52bf729818e11a27170c"],["/2022/01/05/Spring学习/index.html","64312baa07627639ae23ef2dc7507f81"],["/2022/01/05/vue实战/index.html","d823b2b44fac4f81665f864356cae526"],["/2022/01/08/gdb-gcc学习/index.html","902cc9bbbd19e1a7161f309bfda9e93f"],["/2022/01/11/python-opencv学习/index.html","96bdd7b46fbee90aa5b4d9b0dacb1b95"],["/2022/01/12/汇编实战/index.html","8290ea0a43672fa91ffc1197b01ae008"],["/2022/01/17/pandas学习/index.html","0195532d109bcefe566e9fd4c11a002e"],["/2022/01/19/可视化图的工具/index.html","f2d309a48bff3ea3e7de520f1336a232"],["/2022/01/19/机器学习入门/index.html","90d6d3a063c5733432e49021e29744b9"],["/2022/01/20/cousera-ML学习/index.html","ceb1bcc553d329d844ab87526ac775e9"],["/2022/01/30/typora解绑后出现问题/index.html","a86072bc26a4e169844648264cd5e25e"],["/2022/02/03/NLP学习/index.html","d2b743a642064ecf2ea28209ac5d2a4a"],["/2022/02/04/Web漏洞学习/index.html","df4390d68df8fcbe6afbe1ed5d7d680a"],["/2022/02/04/pyqt学习/index.html","636717988ce349ea9886599ef89f9217"],["/2022/02/04/python爬虫/index.html","8d2b7c17e466864105dd0d7e6bcb5e0c"],["/2022/02/18/Electron学习/index.html","5c72f200c52a65c624a809b621a6dd72"],["/2022/02/22/疫情填报字段解析/index.html","a18e4a59af2d40ace93597091efa7f49"],["/2022/02/24/Bomb-lab实验/index.html","f2c7f68b44996037a3e35d981c31e30a"],["/2022/03/05/nginx学习/index.html","acfda77f922faf76919eede98dae0f48"],["/2022/03/09/汇编原理课程学习/index.html","5735b74beeab67f516138b63c11c94ad"],["/2022/03/11/Keras学习/index.html","73b45f9a79c4194529a222075626ea6c"],["/2022/04/01/graphviz学习/index.html","ae3f8003ee3fc45a2f9e892bd720d312"],["/2022/04/07/django学习/index.html","5a35f6290c19492a518ab6b5071f6ec1"],["/2022/04/11/密码破解学习/index.html","fcaff1d3df828310c8a2b1157059e88e"],["/2022/04/12/flex-bison学习/index.html","c9923f7bb0be7f8666038820cbd6d409"],["/2022/04/15/pytorch学习/index.html","bf7358a64a5c40bbf85ad908bb82350b"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","b39e0ff687ffeb414cfbf30b37ccbca4"],["/2022/04/23/写一个音乐播放器/index.html","e7dc376c7dd882a16f92263f9cfd1599"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","513e6107c1a492792721752ccc4ea869"],["/2022/04/30/GAN学习/index.html","0afa3ea9c0f9739a279a686ce95023b1"],["/2022/05/02/html精学/index.html","1f46f1624760a48572f9183cbcc543b9"],["/2022/05/06/write-a-compiler-by-yourself/index.html","467bdb1aefc198a6463ab15492f78ccf"],["/2022/05/30/acwj-01/index.html","cd2d4ab4925739ba84d3da2881b5dc4b"],["/2022/06/14/animeGAN/index.html","ebcb889038a2fd69730c18739bf18f0a"],["/2022/07/09/c-与算法学习/index.html","c07dd8f2d2f522bd5dde5287a95dcc8b"],["/2022/09/19/flask学习/index.html","ccf620b943ae19b2b81eca9be79afa25"],["/2022/09/22/cs224w学习/index.html","b451dce4bc5944123f900a5cc045af67"],["/2022/09/28/记录一次wp重装/index.html","001266477ad511f5c9a1e6c35e310377"],["/2022/10/01/Obsidian学习/index.html","bcea128fda0ed12cfdc739ddfa706b22"],["/2022/10/08/vue-element-template实战/index.html","d84472505000c2f0791b7169f1d202b1"],["/2022/10/25/vue网上商城项目/index.html","d639332a39d935705ea20a3ec0f3cdaf"],["/2022/11/11/leetcode刷题记录/index.html","297b2d39e367ebe182216b6511ce5e77"],["/2022/11/11/使用overleaf优雅地写文章/index.html","99911f73339d9b4122cb1132a1c31a5e"],["/2022/11/22/磁力链接与RSS订阅/index.html","0e04fe4c2b32ac49bde1ce6be3ac4171"],["/2022/12/11/uniapp申请获取地理位置/index.html","d4ba570fbf70b9fd5192d07c002af53c"],["/2022/12/26/pr剪辑学习/index.html","12e1fb3c11305380fbf8d4123c4435f2"],["/2022/12/27/css中的flex和grid布局/index.html","3b363e8de3f19a3ac1a991fbc1d4aa91"],["/2022/12/28/Flutter学习/index.html","c8cec177e3f689a713b9a6427042996c"],["/2023/01/01/美化github首页/index.html","31ab9b79fb193b0d43c8cf750ef254e5"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","97ab7ecb30fa7084a2311dafb7550c96"],["/2023/01/04/构建微信快捷发布文章工具/index.html","cf740cc5b7a803c32ac408ebc340f6b4"],["/2023/01/14/dart学习/index.html","e7f20c12538f355d45ad0388b134a794"],["/2023/01/23/闲置服务器BT下载影视/index.html","7f1065f566c9f92b9952a2cf9555fb13"],["/about/index.html","5a5929bf83bf3a608c94426a08dc8a2b"],["/archives/2021/04/index.html","66b518ef9534d74f76a8f8bb0dcb9512"],["/archives/2021/05/index.html","923f74bbdf5b93380b69f42a5815c505"],["/archives/2021/06/index.html","6ae76e90203c66c3253be9bacb846f26"],["/archives/2021/07/index.html","f6663c3e9b5fe61aebfafcdddc73081c"],["/archives/2021/08/index.html","5ab8c656f10c6301d2608abef872965c"],["/archives/2021/09/index.html","1ecfd5fa64c991de53c01cf568d8c8c5"],["/archives/2021/10/index.html","0f1050042ee1ffc300b01701f99ebcb6"],["/archives/2021/11/index.html","252b5efcba9f193cffe0a9fddfbba200"],["/archives/2021/12/index.html","1df44039da5ccd15cddd06deca5cc1d8"],["/archives/2021/index.html","c345772f818acb1511648111dd1854e7"],["/archives/2022/01/index.html","17b02b27856512d2e14e719514ee30e7"],["/archives/2022/02/index.html","902e49cbdf836bbc3fce33d872100394"],["/archives/2022/03/index.html","075ef0e9791d091ceeafd23ab139dff0"],["/archives/2022/04/index.html","b947c99de3f6d2d84b36bb5df358ae7c"],["/archives/2022/05/index.html","3bfe76007dc106f9bce0bc21da04d953"],["/archives/2022/06/index.html","7576aac6a53fe2beade47b95c224fec3"],["/archives/2022/07/index.html","6d7ed0257ebc470b7a337c5a3e847dff"],["/archives/2022/09/index.html","b6a3e0fa75e43d5a7d663b8c8202d601"],["/archives/2022/10/index.html","45c4dc63d0f0cb156c8a6d5432394075"],["/archives/2022/11/index.html","c156c94c863c08e0c8ae32cf03be190b"],["/archives/2022/12/index.html","543cefebfc4fa22e39e8ef0973cc06ba"],["/archives/2022/index.html","da1b189b8dcef1154fc34af33137aa5c"],["/archives/2023/01/index.html","a4748b97006ec814b1fda7dc83dc49ef"],["/archives/2023/index.html","b5c9271c2f3f258ec309043352a24180"],["/archives/index.html","3607a9ff84178e03d6aae3629473fef5"],["/archives/page/2/index.html","4f12db770fdc98015efac412b64b26a5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","0fb9f7b440f032b2850b364293706239"],["/categories/ML/index.html","8c50dc96e15063193bf9f5045cb1314b"],["/categories/Nginx/index.html","f29a77f3090d28b19aa68c0fdf468460"],["/categories/Spring/index.html","783471400f2e85ac5609dfa7966bea7b"],["/categories/course/index.html","2fe17894a1e8f1774f8ccb8d3a0e0f32"],["/categories/django/index.html","51772ad2e3f5fc65276a6df490a00962"],["/categories/fun/index.html","d6d19f1db97d00d72f01faa4d47d2553"],["/categories/gcc/gdb/index.html","abd318315874acc4bf00d8c467ea4a84"],["/categories/gcc/index.html","2ed1ec21e2b3edee2fb03bd7ab63df57"],["/categories/index.html","f6f9f5f671601ac53c73606eb0d0857c"],["/categories/java/index.html","bd45d44c7d3f28460570a22110b37b8d"],["/categories/python/index.html","ad7c1d30ce8a897e0e7e3cc86b634be3"],["/categories/study/index.html","b0beef09dc6b9967ffb7ff4c8a6d8546"],["/categories/vue/index.html","acd31810be354d582c2782578a863418"],["/categories/误区/index.html","3a1c8f0189193b6bb5ddcda4919b6065"],["/commonweal/index.html","e3bb392227b4fab2b1124bba6d366690"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e97f753b98267910ae4a8951495bc71"],["/home/index.html","1ab35304e54116742544a10d150b1633"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","7b907c508b9b8146bf1aa6a4af822ec7"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","cfd2ef65592b55c9770c1747337b8b0a"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","17f7a84bb0dfe1f8fb6917baed294516"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","403900993cfb9c46e5de696b8af6a682"],["/page/11/index.html","ce2dd4d4ec1a9e515962642ec62aa96d"],["/page/12/index.html","359892634f5e5be6efd6fc52fc3172a0"],["/page/13/index.html","031fb693baf6ab7a4e054fd021439408"],["/page/14/index.html","e6ff4b6dd5c4b716a831cdc567f0954c"],["/page/15/index.html","86663ce701d368f6b3499101bf1e1e45"],["/page/16/index.html","0a457a9371763ef373d3c0f54afe06fe"],["/page/17/index.html","941c2e026ba5230c9371c596e0ead4c0"],["/page/18/index.html","910ea2e904d54a75abe4438fa9153306"],["/page/19/index.html","c728c66bdc099a12a2cf6ef4a326ade7"],["/page/2/index.html","ec7f7c42012b21cec62ce2d94a5dc853"],["/page/20/index.html","4e1cbd1588957b596298e276217fbad2"],["/page/3/index.html","4d0d257acd7f9cd64beef46c09e2f425"],["/page/4/index.html","c7f0133159f4a412f525bf67f2d68c87"],["/page/5/index.html","0464d1b5f24017347465404a68cb1db2"],["/page/6/index.html","4447c3c1f6e2a484c8760b513622a579"],["/page/7/index.html","e8bca5a2e1148e2227bb89631d32a7b0"],["/page/8/index.html","7df6aeb66049a67e19ad1d97c91810f1"],["/page/9/index.html","2a39ef56f9b1178807796bb79d798812"],["/resume/index.html","dadccfc6efd846046c5b7e057eeff069"],["/schedule/index.html","bf33d4d2b4ae728339485ffe5d76727a"],["/sitemap/index.html","7e86223e7350b025dd85261364470376"],["/sw-register.js","5ec7ed39ae5d81c8808d1af3ab4cf336"],["/tags/AI/index.html","d4babfc591b1cb3b24c6b9bae67ec92c"],["/tags/BT/index.html","9b54bf58ae69562f5d550dd890433a35"],["/tags/BaiduNetdisk/index.html","74ab8c80dc3cf21b057e6d45591b6ce2"],["/tags/Bootstrap5/index.html","de765afb066cf077f499f5fb1fd89352"],["/tags/CSS3/index.html","8cbe3ce90c16b55dd213bca633cc1260"],["/tags/Centos/index.html","f0fc2251c2e2b6b4adb63640b7c3ac94"],["/tags/Electron/index.html","0f0aef60b49b174555cb779a8ab0108f"],["/tags/ElementUI/index.html","1c0dbd22289b7727c50f95ef324d90a6"],["/tags/Flutter/index.html","eae785f672d507322503e4cc8cb05b03"],["/tags/GAN/index.html","9e0cebe90e0f6da77ac54d27368d72b0"],["/tags/GUI/index.html","84ae50d12e31ee264cc478af00d51295"],["/tags/Git/index.html","c1e73b872871bf81ebb35baabbf7e287"],["/tags/JavaScript/index.html","8d16fe607b509402b416754c690b19b4"],["/tags/Keras/index.html","6c28b1fb9136b981be6f8a7cf2c3d22d"],["/tags/Linux/index.html","0eb13b3e6609b7352cf99362b4cd2b10"],["/tags/ML/index.html","5709b673ef8da6c1e41d7fd3baf15425"],["/tags/NLP学习/index.html","819793a6651577aeafbaa783a0f303f0"],["/tags/Nginx/index.html","f3f86b48bd727a748d80be3b6087d5ab"],["/tags/Obsidian/index.html","c9ed9e21dd2590a7841c386445aa4c73"],["/tags/Qt/index.html","71c2436710cde134a8de71c98a747982"],["/tags/RSS/index.html","1b129ea46af4f940858d10cfdf846d54"],["/tags/SSL/index.html","3a822fdc1d407b3ca9e4dd0f4648c552"],["/tags/Scrapy/index.html","f77bd9349989f4e278fb16275535422e"],["/tags/Web/index.html","ee8a43060710f8167cbac3a653acac3d"],["/tags/algorithm/index.html","0fedeb72d1e85d0485d63cf95d9c64d4"],["/tags/bison/index.html","b57854ff08bd75ab66e1f21b74712648"],["/tags/bomb-lab/index.html","c0dd7036a91bc648827ee05bb2c9e98a"],["/tags/c/index.html","23e550e27f13f509ca45f46e71624f1e"],["/tags/cheerio/index.html","6c3ccf221418c95c889830dc126a5677"],["/tags/codewars/index.html","fd3a280ea748a8e3ee4f74af4925e2a3"],["/tags/compile/index.html","9c08505b92d51620e1cf8dec2c90f0e6"],["/tags/compiler/index.html","0ce6d784d1ffcf331a4a46f209992d4b"],["/tags/course/index.html","9ff99e75562c8b448f02628a85440ff0"],["/tags/crypto/index.html","26d8a3cdce367662763ba68d73ed17e5"],["/tags/csapp/index.html","6de44756f50521adf13b5924d243c7f6"],["/tags/css/index.html","7a767a457c14a428d2c4ac159c691a09"],["/tags/dart/index.html","036f15d24c9cd0f106556b77940821c1"],["/tags/data-structure/index.html","e9f10024ad72e554014502198569e85e"],["/tags/database/index.html","a5efa44ef130767712922290dd729523"],["/tags/deep-learning/index.html","3ace52e6a1a5f5e0a4a791bec84bcfa5"],["/tags/django/index.html","137a3fdda5779f20e3231063d673bf7e"],["/tags/dwm/index.html","e4f01b123930274b16ba163b06d66750"],["/tags/exercise/index.html","097aa3288f3b18bca615a51ae0bea970"],["/tags/filebrowser/index.html","6759cb85ca2686122c24809bdd0cc9dc"],["/tags/flask/index.html","14dc63b388956befa5d588f5673ccab6"],["/tags/flex/index.html","0083f45fbaece0d5b3b40cc81322e2ac"],["/tags/front/index.html","37c8d345407e43ec775de51d45ff8671"],["/tags/gcc/index.html","fc6eb205e27ab230c40bf186d46b234f"],["/tags/gdb/index.html","03c84e71b5ffbdccba3a82a55a81349b"],["/tags/github-profile/index.html","cdbeee4ceeb8e4fe0343b589cf152ba8"],["/tags/github/index.html","a59935e7020534944fd700d0dfd28c16"],["/tags/graphviz/index.html","e7512b6c651a8eb5ce0082e37fa0cc64"],["/tags/grid/index.html","bb712f07bb0d8a703ec723a5d964dcc4"],["/tags/html/index.html","4c3a8e477997527fbb038c0d15031188"],["/tags/i3wm/index.html","db94d18a1dd90a971f75ab0a8ee2f5a7"],["/tags/index.html","f30d6cf112106aa6f07ce9734fec669b"],["/tags/issue/index.html","5f70f1328d26863984388f09352d2a69"],["/tags/jQuery/index.html","e3a3be3171a4e54734d8b04d4fd956ff"],["/tags/java/index.html","aecd548d27bdb055bfeba094490aca03"],["/tags/js/index.html","4f417d80bd1587bdd73adc472daa2aad"],["/tags/latex/index.html","70c20af30d1c78c1559ed41dcddbb7ba"],["/tags/leetcode/index.html","5fa97c0ff72ceff25ea46769f8fb9e03"],["/tags/lex/index.html","7f800d98b75caf434686cf81dd597320"],["/tags/material/index.html","b888dfb41e857b8ab113c26f98603f2f"],["/tags/music-player/index.html","67d246809b09bd8b71d08e71c2e5649a"],["/tags/nodejs/index.html","42ed6b650c6d259c8d56835cf51d2edd"],["/tags/noj/index.html","01acd09c5341b95fb7f986ff98c08ee8"],["/tags/opencv/index.html","f873c49144693049943da679b7c6f83f"],["/tags/overleaf/index.html","858db20540fac6c2e45cb269a9c0b740"],["/tags/pandas/index.html","b7fbf6146610f87c76a493132ccbe0ce"],["/tags/premiere-pro/index.html","759eab8264e20a786d6cf6aecd25f363"],["/tags/proxy/index.html","03c5baaf642e9372e9baaea5549d67d3"],["/tags/pygame/index.html","817089448fa5c5e4c2a188d0d66ba1c1"],["/tags/python/index.html","8164eb3ec5351fcff662ec5d4e8796f5"],["/tags/pytorch/index.html","d09bdfaa8b7490e487614e2966732a9d"],["/tags/reading/index.html","822307a5092708e942a46338879f5ca5"],["/tags/request/index.html","f56678b34ed98aba0e1a4423234e4912"],["/tags/requests/index.html","9d3408693cabb451531a0c8fdb59d1b3"],["/tags/security/index.html","24f5fd76261c4cd007866eb5abcda01c"],["/tags/shell/index.html","4bced8e267233448ea1b0a5d02d7e5e8"],["/tags/sign-in/index.html","ff66a048e1e17a1ec2e32f55d7758bd1"],["/tags/socket/index.html","278ace6903190d5c032d9b6d7714706e"],["/tags/spider/index.html","2a8a497348de6e36e40f48f7cf2de609"],["/tags/splash/index.html","c6b2b97ea6ee0b560e8c27c86b47142c"],["/tags/superagent/index.html","dd07e4502a81a61cfc299364aa96272c"],["/tags/tensorlow/index.html","1a42e848e604e8e66c7243a5bc802230"],["/tags/tex/index.html","764c2dce12685807a274c91255524f14"],["/tags/threading/index.html","926e9c6a7deb2d2a322e4f1567a4b4bf"],["/tags/tkinter/index.html","4d6c79a61c59de07bfd42947df7f6ab8"],["/tags/torrent/index.html","887b7981cb1ae1237fa71ad8077c8a5f"],["/tags/tutorial/index.html","012ffbb0675f4aba1c9a1bb1156ff8c5"],["/tags/typora/index.html","3b8efe331a95eccfcc63b5efec57c8f9"],["/tags/uniapp/index.html","96bf966ba33b6567118d7f6cd89a9fd9"],["/tags/vite/index.html","3cc0c14df1cb6a2d67f2459eb0add42e"],["/tags/vue-element-template/index.html","38c5c5f9852165a22f8e30c8ded83986"],["/tags/vue/index.html","823c82ff9db7d3d262da482a3f7729ae"],["/tags/vue2/index.html","2b33cc70121b077ebeffa02b83c2f1a1"],["/tags/vue3-x/index.html","fabfd2b18d5b1b90e98039e8ba18beab"],["/tags/wechat/index.html","3d3ac49042ad5b1f767f9fb4ac03d208"],["/tags/wm/index.html","8c68dcf341fdb19e7bc6b34dd748eb4b"],["/tags/wordpress/index.html","ea3911f09ee09a3717813b495f7c380a"],["/tags/workflow/index.html","0471327b31a4c019b3540920d86a9ae9"],["/tags/xpath/index.html","8217dc1e54577a07819f982f9ab33731"],["/tags/yacc/index.html","56ad39e9d63978509b2c499b6f818c73"],["/tags/zsh/index.html","d3644ea2f31762581745de815481e5c9"],["/tags/七牛云/index.html","65f22fc473993a4bc5cdb70f96e9cd8a"],["/tags/函数/index.html","e37e9112b3e22cc91bef698d346fe944"],["/tags/剪辑/index.html","d50fefe7d74a2e3cf760ebbb0841ae12"],["/tags/存储/index.html","b17cd814f987399ed35a2df1d11b5430"],["/tags/实战/index.html","4296a009cff75927b82f15bc96471fe4"],["/tags/建站/index.html","14df78e656a7ea1f4014f267c3e3bb9d"],["/tags/微信小程序/index.html","4e58a2f0b26264bbb3c0cfc96bddfbfd"],["/tags/指针/index.html","b6018a7df0d91a67e47963835814f484"],["/tags/汇编/index.html","44f8589146433772be82a6542900dae9"],["/tags/爬虫/index.html","9971b65e7968dde8d833201cd26fdca0"],["/tags/算法/index.html","ff84c7efe4815eb79efeb142ab599905"],["/tags/编译原理/index.html","4cdff4d3e1e1760d243e88a393d60b5e"],["/tags/获取地理位置/index.html","6aea49f0d6812bd14f1b818de41ff0f7"]];
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
