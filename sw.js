/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","def9db33b03912aedc75ebba4f4ec611"],["/2021/04/20/稀疏矩阵/index.html","2471771cbe835d75bbc3ac24a562daaf"],["/2021/04/23/广义表简介/index.html","4dfc2d43bfd0b400aea8d0375392e9c9"],["/2021/04/29/关于指针和函数/index.html","08a639866c8c4272d30fb5caa483910f"],["/2021/05/10/哈夫曼编-译码/index.html","2ed240103b548a8235872f487df30893"],["/2021/05/17/数据结构noj_2/index.html","63b0573abe5ebb234ee2c6a5358e6ee7"],["/2021/05/30/数据结构试验/index.html","ac8464a17b13b36ade05c868bfe6b916"],["/2021/06/12/数据结构noj-3/index.html","6234df5db440f66775ab03c829b1b903"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","aab5ad1518bccba27a19653f8d75b6a9"],["/2021/07/08/课程资源分享/index.html","348b75bc6dc7d306117f001e688912c7"],["/2021/07/20/Scrapy-下载图片-文件/index.html","8a8430393cfc16d37dfed6fc10ddc738"],["/2021/07/21/Scrapy-动态网页爬取/index.html","9ce6bdb708e7fead24cc9b575f4fc886"],["/2021/07/21/疫情打卡/index.html","1c06ea8f6b076ce82975b2700dd9ab4b"],["/2021/07/29/Scrapy代理设置/index.html","c8097b6b8b4b2c330118db5f42ce0328"],["/2021/07/29/数据库认识/index.html","41d5eee75319075fb00c4fceda7e10f7"],["/2021/07/31/Python多线程学习/index.html","7e76842e4dc540c637549eebc01544a2"],["/2021/07/31/tkinter-requests练习/index.html","5923149802465bc09359e2ab301cad89"],["/2021/08/10/Git学习/index.html","309ec60e5dc6034d44d32158d6d7c0c9"],["/2021/08/15/pygame实践-1/index.html","8263baa409684d122824b59dccd99005"],["/2021/09/06/微信小程序开发/index.html","db98b3c5ce60662630a01d535b0760b2"],["/2021/09/21/命令集-1/index.html","b694f9ec3527644b69279de6e098d76e"],["/2021/09/21/命令集-2/index.html","2642990640524bbe899adf620ad67111"],["/2021/09/21/命令集-3/index.html","5106a751afc1e4f22b2e76b35c70bef7"],["/2021/09/21/命令集-4/index.html","4dc97fdcc3b2962c00f2abd021e5a247"],["/2021/10/03/socket学习/index.html","e552827c0b5ff0b2ea40874d5122a5ca"],["/2021/10/10/dwm入门/index.html","91a24b70c8519fd6d8ba2bb19f856f75"],["/2021/10/10/安装ohmyzsh并配置/index.html","52e4255acce0ebf654678e39488d2936"],["/2021/10/20/css学习/index.html","46b949f7cf22fb161a7a19e8c6a62052"],["/2021/10/20/wm入坑/index.html","ce95083c5cdb664588b554a0a4be1556"],["/2021/11/03/微信小程序学习/index.html","be6c06acf77aff51ce9e80a3a45e1f2a"],["/2021/11/04/css揭秘/index.html","5a59011caf099d771530e00cdbb54283"],["/2021/11/05/css-练习/index.html","eaec26111cb7d798d93d7751b1d54342"],["/2021/11/21/命令集-5/index.html","d5e9201c1bce18d893a5241fe3adf11e"],["/2021/11/21/命令集-6/index.html","cce6b4500ddc4f7b9ce5e3825262ae6c"],["/2021/11/21/命令集-7/index.html","852973dd405106c74554727544fcd8ac"],["/2021/12/01/搭建wordpress/index.html","0f29e1bd48cfdbaca68d38594877813f"],["/2021/12/08/python操作百度网盘/index.html","58cebf25d7ff1ca9c1fd30e5c8642631"],["/2021/12/14/js爬虫/index.html","0d5ecb0ccbd436b2a15f6d7eb7945ef1"],["/2021/12/25/为网站申请ssl证书/index.html","272fe2dac78679971054b83a40daa1da"],["/2021/12/29/使用七牛云为网站提供服务/index.html","6d7423364d03b98dc68b36b68fa18670"],["/2021/12/30/jQurey继续学习/index.html","9b73717408186b4d628654fed103c193"],["/2021/12/30/jquery学习/index.html","50ad682329aa4c9aafd05c399071782c"],["/2021/12/31/vue学习/index.html","7034c1bfc37a78033ceef6d957d37923"],["/2022/01/02/疫情自动打卡/index.html","79558323c8690859f073e600108aa335"],["/2022/01/03/javaweb初体验/index.html","6d611007d1771d3f79551e4eb3f56e4e"],["/2022/01/04/codewars练习/index.html","be0c554524610d26227eb7eb3adf3189"],["/2022/01/05/Spring学习/index.html","24b3463fdaca0fb48fd53080bd2aeec7"],["/2022/01/05/vue实战/index.html","40cd9d603884b34db44c7c009004bafd"],["/2022/01/08/gdb-gcc学习/index.html","d8b4faac0ccd75a8bb8cdbc95e95b706"],["/2022/01/11/python-opencv学习/index.html","99157dd63ed4b1d8b678d1579245c553"],["/2022/01/12/汇编实战/index.html","cbd1774a15569e4e2559067ba2d0bbbe"],["/2022/01/17/pandas学习/index.html","2d4cadb57298bc8e8ae196ea9b3cf0de"],["/2022/01/19/可视化图的工具/index.html","48c07abd34a28b97caf47822320a30eb"],["/2022/01/19/机器学习入门/index.html","a5fb3e7ee9e7fbbbad7b220d575c7d3b"],["/2022/01/20/cousera-ML学习/index.html","29104f933b5fd2421a68eeb8fcc5ee67"],["/2022/01/30/typora解绑后出现问题/index.html","75463cbd2924090d17d3b4b44526e639"],["/2022/02/03/NLP学习/index.html","4f06aac914f671cb163241dba591f237"],["/2022/02/04/Web漏洞学习/index.html","7d07ba1d43861fff28723e3d76b7cc9c"],["/2022/02/04/pyqt学习/index.html","d9c80d4db7426cb39ce825003ee2c143"],["/2022/02/04/python爬虫/index.html","57a61949e6f7f87bbe61cbfb2d4d18e7"],["/2022/02/18/Electron学习/index.html","c37d0ee0538daae80cf5ccea583aaf35"],["/2022/02/22/疫情填报字段解析/index.html","6da3ee95f9d18113abc22d31fe117ca3"],["/2022/02/24/Bomb-lab实验/index.html","70243b3c5693d7b513ade17ede4d77fb"],["/2022/03/05/nginx学习/index.html","72a7e9bfe2a6d17d7b7e035dc581e081"],["/2022/03/09/汇编原理课程学习/index.html","973e7a8b6c6179627dd3c791fecd4732"],["/2022/03/11/Keras学习/index.html","dc4c2e67cac5c6b48e5c459ef8a1366e"],["/2022/04/01/graphviz学习/index.html","da677746bb7456378a9bf409b324eb89"],["/2022/04/07/django学习/index.html","859992ebc40e064e59021f67632c9c5b"],["/2022/04/11/密码破解学习/index.html","80e4594cc0eebd66b5647319015912ef"],["/2022/04/12/flex-bison学习/index.html","e168efc6eaebf82d52f7d3ffeb681d52"],["/2022/04/15/pytorch学习/index.html","51b086f99acefeaf362cc92e3083669e"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","9f6616ab3369d5c0d6b870d44204591b"],["/2022/04/23/写一个音乐播放器/index.html","01cc625f9e8b1b8422d93efcbc29f9cf"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","fe8b3f50726a103f327bd96764a68cad"],["/2022/04/30/GAN学习/index.html","e226b94cab1063f3143eef33c05edb43"],["/2022/05/02/html精学/index.html","0fc62f31d3654a77e3c1d2cf738a1365"],["/2022/05/06/write-a-compiler-by-yourself/index.html","1124c56d7c19104381fc5b6ee2782d02"],["/2022/05/30/acwj-01/index.html","2fcb67e051b9bfe14f655e8ebfcced65"],["/2022/06/14/animeGAN/index.html","8b0678161f76a340d0ec57c2969c1f6d"],["/2022/07/09/c-与算法学习/index.html","629ab8aed269308b13e1dca30b9edb73"],["/2022/09/19/flask学习/index.html","e3445dfc4f9ecfe70b9921e25c586dd6"],["/2022/09/22/cs224w学习/index.html","644f9d937ef0877695f43652696336bb"],["/2022/09/28/记录一次wp重装/index.html","fa4358d173471fa5ecc8fc6b4f16d39a"],["/2022/10/01/Obsidian学习/index.html","509ea5d8fb2344bf4d772248b9aead9b"],["/2022/10/08/vue-element-template实战/index.html","e1160278937956dc570cff6462376c58"],["/2022/10/25/vue网上商城项目/index.html","6e095f0a61828a3bae72b88cd4a3728a"],["/2022/11/11/leetcode刷题记录/index.html","80ee6eb8a04830eaa83cb250dc0ee6bb"],["/2022/11/11/使用overleaf优雅地写文章/index.html","efc53a06f444ab84bb7e0d46d7503fcb"],["/2022/11/22/磁力链接与RSS订阅/index.html","1daafa10cfb25144ccc42259bdb6fee1"],["/2022/12/11/uniapp申请获取地理位置/index.html","2e74b4fa5dd15d633fa17221676e4f78"],["/about/index.html","d2f18c49bfb3180f780af7681c81b543"],["/archives/2021/04/index.html","341be0b9af9968ca812fe65c60679ec9"],["/archives/2021/05/index.html","3bc06f32620123afaca5f6b82f3610cc"],["/archives/2021/06/index.html","885929b390605f84e0717658997d6c0a"],["/archives/2021/07/index.html","52cb7db19cf3ac6f7a78197a8fff7aed"],["/archives/2021/08/index.html","4ee20541267917095bddfa55e09be88e"],["/archives/2021/09/index.html","e83ef26deb12e2a6099b9b7169bd1b65"],["/archives/2021/10/index.html","6930dfe32498b1cb6d316f17198eea52"],["/archives/2021/11/index.html","ea660e869f07374c87e179fa43249e28"],["/archives/2021/12/index.html","d402a7411ce866b937454f1e5349dab9"],["/archives/2021/index.html","ee103b6f5d619061bb6385e6faf5354a"],["/archives/2022/01/index.html","c7a4879999ad9b91aafd171c8be8cfac"],["/archives/2022/02/index.html","b0128be176f704645f1cc6eee1e06a50"],["/archives/2022/03/index.html","68637f7bc075dbe91055385cac5cbff9"],["/archives/2022/04/index.html","32811498095a02b1e95cc53be7c6dab4"],["/archives/2022/05/index.html","be84fb4a185b8b1ab2082a8399044b7f"],["/archives/2022/06/index.html","3b640ba3c1096e1d7e10eeef67c82f14"],["/archives/2022/07/index.html","472e8c8b3a1b3443b1f9d303dd63ec58"],["/archives/2022/09/index.html","57a071f86bad2f998220d0aeb59136d5"],["/archives/2022/10/index.html","d00b5ed634902a7201c5ea990c4be3e1"],["/archives/2022/11/index.html","b2bbfb124bbbd3e6865225cacd91ed59"],["/archives/2022/12/index.html","4647c2377913439419ff4c7066e626db"],["/archives/2022/index.html","da1b9a6f326f322ab3b893c3b2bd9329"],["/archives/index.html","b7a5f524657e31922b9f3c0f3e8d8738"],["/archives/page/2/index.html","5facd7b607b6f16203b8b56acf096299"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","a7316d46c44026610692c23ce6611c51"],["/categories/ML/index.html","46ff7ad4280a4b9e2919e3455567021e"],["/categories/Nginx/index.html","c7a2f2832c87e84cc848477e00885ed8"],["/categories/Spring/index.html","8c4a0b4c9cf8dfdf1543950079484659"],["/categories/course/index.html","650d837504996c97b2e4bbc226b4055c"],["/categories/django/index.html","a351706755732e40180c26ab053e0310"],["/categories/fun/index.html","41287a99fc39afcbca5a0928a2ed1c39"],["/categories/gcc/gdb/index.html","7e6d265cde9c1af4b2d1f963bf750ddc"],["/categories/gcc/index.html","29538ec439d7e1878a0bce453e0f3df0"],["/categories/index.html","49ca45324cd7df86552bc4786dd19837"],["/categories/java/index.html","f68b2af676689fbb3c74cc587631e789"],["/categories/python/index.html","f5c66ff7c180150ae22cef16c09fa933"],["/categories/study/index.html","1e9d391ebcbb453081c0d62ee2b4ea1f"],["/categories/vue/index.html","0bedc6801005e120fe36efd71921d2ae"],["/categories/误区/index.html","cedffb293410bd24fbb814ba95f2cf77"],["/commonweal/index.html","e2f9fcf515f6a16e07507cb7d6711f2d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5ed075befc45d1e30171fed78c972092"],["/home/index.html","8ab47fc7d1e1730653c4fb7c4173e1eb"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","78acc206c0d3989df10da5e08b032a89"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8af0803d3249ec35940e8da0c7f47636"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","4230dc195a4750f20b737e5fb99a7eb9"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1b08f90f23de37de581db92b29e38bb2"],["/page/11/index.html","977531ba2f7ede7522959ea5cabecb1b"],["/page/12/index.html","63d9780744763a6c133feac6d334bd04"],["/page/13/index.html","f97daf847e67dd16a456ca4a68a229c7"],["/page/14/index.html","81f0548079267ee6a22ea96c2a46a7b1"],["/page/15/index.html","58ad46e17199650a987ab3784cd183b2"],["/page/16/index.html","6846a2cd6e6c92dc19ae6e7f8eeed2db"],["/page/17/index.html","ad57e255cec36862113579ea6ed11295"],["/page/18/index.html","2dd3fbf08a4af156dc5ee890c9045a8d"],["/page/2/index.html","b772e466afbfdb46dd6be6947690a5b4"],["/page/3/index.html","2442934c547b41f43a26e3b6f02dc24f"],["/page/4/index.html","ac4d76e0129db705bcad3e05e89a7313"],["/page/5/index.html","4416c5982f5dd57babae93fbcf32d867"],["/page/6/index.html","a76ddccdde52c7cea8e6328da516f132"],["/page/7/index.html","d511dd8bbcdb9628e974d74be18e78d6"],["/page/8/index.html","7cffbe77760ed627b99f4ab8e256bafe"],["/page/9/index.html","d3b0f4c225afaa339f7aa98fe6c8dea5"],["/schedule/index.html","985266eda48096b4a9135ec6e9ef353c"],["/sitemap/index.html","5e4420972f2e0bf1f3d47e5b4f2205af"],["/sw-register.js","bbc39bc08cbdab36f5601700e448fd4f"],["/tags/AI/index.html","f13cece0c14c0b1bddbbb8559f9a0e8b"],["/tags/BT/index.html","d4fad36eafdee818dfea840c41497ecd"],["/tags/BaiduNetdisk/index.html","36a208c4bb229729b99a14db0436f8fc"],["/tags/CSS3/index.html","fe12def6b78825e814e2e403b8fb1b94"],["/tags/Electron/index.html","374e34ff9cf5381700847af101bafb7d"],["/tags/ElementUI/index.html","284cba9567d5524c11fdc22b8b72cc3b"],["/tags/GAN/index.html","02584145be2a15d0c0cba93f3b0926c2"],["/tags/GUI/index.html","56c7576e283fd2d9b9733c75592f3fa2"],["/tags/Git/index.html","6fa60288b1bf36ef05debb0e75ab6609"],["/tags/JavaScript/index.html","108ed958f57bd72b488902d5e64779e5"],["/tags/Keras/index.html","3770de9af995c118dacad180601fccbc"],["/tags/Linux/index.html","993c65e58ea053cb9c12018f44318ec9"],["/tags/ML/index.html","26c88482c2308f38c2fe3703009284f4"],["/tags/NLP学习/index.html","3796c9a5d66e5a2ba6a8b0fd8302be3d"],["/tags/Nginx/index.html","ce1974565b5a5060450b6bd4818e0855"],["/tags/Obsidian/index.html","bce041c95d9d989ec1295c7065b392df"],["/tags/Qt/index.html","8e77188811a1a5f8ad67c6848137f306"],["/tags/RSS/index.html","abc50fbdd8d153132be0d927dd130764"],["/tags/SSL/index.html","b0a8131ff183bcffeb33a0396dee82b0"],["/tags/Scrapy/index.html","bcb81134bb6ca700e5cf974b5b96682d"],["/tags/Web/index.html","ce341a3e15e7cbe35376e6065d92b775"],["/tags/algorithm/index.html","76d6cdc62b0aac0ba949c54628fc192e"],["/tags/bison/index.html","fb560b537342f93d4252347ca3e722fe"],["/tags/bomb-lab/index.html","eb6167d17fa7dcd155ba13ff73a2e360"],["/tags/c/index.html","9b8b8a7e97da2b373c119e082544e283"],["/tags/cheerio/index.html","27dee1f97297ad8a10496e70cc53c23c"],["/tags/codewars/index.html","31b5b9988668c316d4e11a3fdba9463e"],["/tags/compile/index.html","be96181b37c3b57ab3438dae71819bb7"],["/tags/compiler/index.html","fa4233beade5cbbef2cfdcf6e5872b5a"],["/tags/course/index.html","b7b00e091897c166cf1d6dd39035a202"],["/tags/crypto/index.html","fdffacc428db01696f7b01ad51b208a8"],["/tags/csapp/index.html","83615a168152c4ea8eae71d914703bfe"],["/tags/css/index.html","39d50c7924b7b7b689de70c08ca96c83"],["/tags/data-structure/index.html","2f9414509ae2bf80e44ac7444bbe34da"],["/tags/database/index.html","e6333e0b08c771c01ea772eca03d1ead"],["/tags/deep-learning/index.html","dae6756159a747016ab6c4c442bdbb73"],["/tags/django/index.html","c13b83203e0044ba29cfcee5f205932e"],["/tags/dwm/index.html","3d99b77892591f1ea30e2e5b79f726ff"],["/tags/exercise/index.html","b8d43e777a0266f0a9d231d19d180c39"],["/tags/flask/index.html","2f28a1c6cd81eea7134fec3a19fb4b7b"],["/tags/flex/index.html","902ca090d3be0d12bae56bb18c5e9a2e"],["/tags/front/index.html","19204374df9008b59fa42981040a1c9e"],["/tags/gcc/index.html","628ce401e54010711d52a700a3f84e08"],["/tags/gdb/index.html","13bb85336d33abc1cf5c91efe05e1508"],["/tags/graphviz/index.html","5f3d0aa68b47d3e7e10748cd9a8bb5fd"],["/tags/html/index.html","5d2fe24f99e52cca1beb32fade14f9a8"],["/tags/i3wm/index.html","ed64818fb0081342b82b94391804dbca"],["/tags/index.html","6db69b1483066b179f736f43e4a0b1bb"],["/tags/issue/index.html","35888de622d4015d11bc3b6bc5b4525c"],["/tags/jQuery/index.html","184d2bbe59fdd8585885e4c0cbd365a0"],["/tags/java/index.html","725be43982c131a81585857bd75407b8"],["/tags/js/index.html","19d025868373e748efe09bed4acf7109"],["/tags/latex/index.html","7630c287f0e7b4797c43d9e673534970"],["/tags/leetcode/index.html","1c3bfca05c3d6fc5d7c734bbccc29b6a"],["/tags/lex/index.html","dfbf08b50ee2bf3d67c5ae762c4cea9d"],["/tags/material/index.html","2c605db329d47248f7df6a1ac0bcb037"],["/tags/music-player/index.html","16e6913fbca94469b1710d5bf311e5a3"],["/tags/nodejs/index.html","6aae0c4a4d374f56370fc4c86772adb9"],["/tags/noj/index.html","b403542b72a810819663e3dd9e9274f9"],["/tags/opencv/index.html","8a37930ac33de55ff0f2b2b7b5659917"],["/tags/overleaf/index.html","5ebff99d40527b0bbb39d5f37d191d75"],["/tags/pandas/index.html","6e40f4d83e0eb87a3f696aa2ee77bc67"],["/tags/proxy/index.html","16020f0c6bbc7caf5764112c2b36183c"],["/tags/pygame/index.html","efbe6ab308fedcd3c3c74d77c4f04da3"],["/tags/python/index.html","435b367d859afdd62ffc98dc55b0a7f1"],["/tags/pytorch/index.html","be5a0bbe4a62e57c7c1b64bbb8923873"],["/tags/reading/index.html","c452cd59650cafed2ff539b5b7ffbe40"],["/tags/requests/index.html","945b424845afc589e3fe85081741e3ff"],["/tags/security/index.html","31e017e5baf169b3abfc141147b330df"],["/tags/shell/index.html","e6f4014e7fd31002b19c1d662effcc41"],["/tags/sign-in/index.html","bd7105d716c0ce82ede15d65ebac8114"],["/tags/socket/index.html","3942a0f0a0e29e88c1cb32f874df82cf"],["/tags/spider/index.html","7ce98aa8a18d0e184480281493f320af"],["/tags/splash/index.html","fe1f8724d15c1bfe707b97767ca87e8a"],["/tags/superagent/index.html","b98d6f5a0506847311089a5db65f7de8"],["/tags/tensorlow/index.html","a110514e3fc17d1d57ff08d25a99e9f8"],["/tags/tex/index.html","1d3071ccd24f748dfc9dea2d6171f83b"],["/tags/threading/index.html","50fc88376a6bc8f02b7f3f8fc56d17e9"],["/tags/tkinter/index.html","c4c311943786d6573d6259b25be8b65c"],["/tags/torrent/index.html","b3388a3bb1c2fff458333d4763818c0b"],["/tags/tutorial/index.html","1d52d458a53090d9c8c63e2998652864"],["/tags/typora/index.html","d92da86192c668f6a29fbf71dc9e6183"],["/tags/uniapp/index.html","69ae6191de6679ef308d326d2ac5a39e"],["/tags/vue-element-template/index.html","92e339ea41e4b14047447aeed17de6a1"],["/tags/vue/index.html","3930e01022e8f29745aba58f6aadd6fa"],["/tags/vue2/index.html","f07d1e5c09e913576117261ec9631ebf"],["/tags/vue3-x/index.html","773066dbe7eb2720bf4216987dbd13e4"],["/tags/wechat/index.html","9e842cc20377cfa37a7615f5bb58051c"],["/tags/wm/index.html","6f7aff4fbaa98e0d7fa972bb5b8faa60"],["/tags/wordpress/index.html","b7e08ac742a7e83b500fca39da785994"],["/tags/workflow/index.html","9b13fe16b4a87ff9e0f0b40190999b30"],["/tags/yacc/index.html","ae25a082c3fecfaba65891880c3fc3b5"],["/tags/zsh/index.html","37765516cefc425270d980be25597040"],["/tags/七牛云/index.html","b6c6c0fbc7b4c53140d15211927eba79"],["/tags/函数/index.html","7ec1b7d2065e2ebd23726d2ebacf0f1c"],["/tags/存储/index.html","fee4bacfb5b86acd3e4dc46e8a704145"],["/tags/实战/index.html","76359c1503061775605cbc0032432e30"],["/tags/建站/index.html","640876ddd7d539c5470b2fc6d74aca90"],["/tags/微信小程序/index.html","8025ca75e011d70bded20c8a2e088973"],["/tags/指针/index.html","209c5577c97541a515032047308488e7"],["/tags/汇编/index.html","b5b30c295ee59854ab4ce10e2a0cfcb6"],["/tags/爬虫/index.html","8b608d6170d6dfaf524b73c848657d80"],["/tags/算法/index.html","f33f53a4b2d7578a6dc5d0a7d967e5f2"],["/tags/编译原理/index.html","e183f60ad8a2da85bf95cbcf8d2162cb"],["/tags/获取地理位置/index.html","43de0bf62b5274351804b10eb1c326d2"]];
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
