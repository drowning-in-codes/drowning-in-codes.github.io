/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","bbe77525ab9e3b067d41d70075aa048d"],["/2021/04/20/稀疏矩阵/index.html","fec90e4690dd2cdc5ec15e261a15a1e3"],["/2021/04/23/广义表简介/index.html","fbd548205c28c0697eb3d7f57748f918"],["/2021/04/29/关于指针和函数/index.html","ce361932b49bc827bc647de0b963696e"],["/2021/05/10/哈夫曼编-译码/index.html","99daa879594cb949e7af61ea54d41a8e"],["/2021/05/17/数据结构noj_2/index.html","8faa0a34b62be90f15ae639eb81708f6"],["/2021/05/30/数据结构试验/index.html","780ab08efcc9eba22dc4a371b072e950"],["/2021/06/12/数据结构noj-3/index.html","527a6d82368598bbeec605b6092d9b3d"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","01748f421447ccda19195843e68e4822"],["/2021/07/08/课程资源分享/index.html","12d1971a3cf094d32ecb28415ef2c5e1"],["/2021/07/20/Scrapy-下载图片-文件/index.html","9bce0b56b1cbaa41a638d3af75b8a2f8"],["/2021/07/21/Scrapy-动态网页爬取/index.html","d9089b2f119363911a66212dfa1f1234"],["/2021/07/21/疫情打卡/index.html","116d1fd51d5b308ec976ab1487608eca"],["/2021/07/29/Scrapy代理设置/index.html","481d6cee252b87ce9e3785ad9ebfa727"],["/2021/07/29/数据库认识/index.html","7e9b0109bae92471237ba66d67268e78"],["/2021/07/31/Python多线程学习/index.html","0324139b17114f1c23997146d15e2601"],["/2021/07/31/tkinter-requests练习/index.html","62e5dc9a170952b5c140cb9092ef0ba1"],["/2021/08/10/Git学习/index.html","27664227707bb4451163cfbed2c8ccfc"],["/2021/08/15/pygame实践-1/index.html","33cf56166e50676e9829b98a16732fc1"],["/2021/09/06/微信小程序开发/index.html","0b22b8052da664277f5a79211b3b6949"],["/2021/09/21/命令集-1/index.html","33ece344fdaaeb687525a82003a82507"],["/2021/09/21/命令集-2/index.html","8898a8af8c05fcde40ea1216eecedff5"],["/2021/09/21/命令集-3/index.html","dd4aa3507dec1af3dc2fefa6f6b613a4"],["/2021/09/21/命令集-4/index.html","73a41be607899d0582e3ae3d351f7335"],["/2021/10/03/socket学习/index.html","164ad83fc15fada93e8a06fc2cada7dc"],["/2021/10/10/dwm入门/index.html","314c45029724a4991240d948425339fb"],["/2021/10/10/安装ohmyzsh并配置/index.html","bb2339530bf34be73cbc5db47953066f"],["/2021/10/20/css学习/index.html","bdecd1cf25af41ba7e59fff5744341eb"],["/2021/10/20/wm入坑/index.html","e49ac081813da70f6ad4ee44ad4f75b6"],["/2021/11/03/微信小程序学习/index.html","b7ad4138a56877544bbd6a625891aaa8"],["/2021/11/04/css揭秘/index.html","6847756fee416a79483195016e7ad998"],["/2021/11/05/css-练习/index.html","d89c47336db59ad1c76675ea209ff041"],["/2021/11/21/命令集-5/index.html","9d80437ce9d2a838125d856cd7b48916"],["/2021/11/21/命令集-6/index.html","c35b8c89166b6b0da906af9ea32aab7d"],["/2021/11/21/命令集-7/index.html","db9ef62a007a96bfa6bc8b3103dd96d5"],["/2021/12/01/搭建wordpress/index.html","9d9a7fbd6f84831c7b129437f5f10f5b"],["/2021/12/08/python操作百度网盘/index.html","e5c9f510f9f293b73fb268251e46b711"],["/2021/12/14/js爬虫/index.html","6fc55b287b3d5444a2bdab9ddfe49915"],["/2021/12/25/为网站申请ssl证书/index.html","e74735c0d56437b79611a5478e73c17c"],["/2021/12/29/使用七牛云为网站提供服务/index.html","6a4d2283447e90f1d30fa0c360110b2f"],["/2021/12/30/jQurey继续学习/index.html","163f7e11b0f8e9dac57f367779788912"],["/2021/12/30/jquery学习/index.html","9a1e73294ae4eaf52c0edf942aad8ac7"],["/2021/12/31/vue学习/index.html","435cba38df801e1f531a351931faa0d1"],["/2022/01/02/疫情自动打卡/index.html","221dc9b187e13435262c962b9820b2db"],["/2022/01/03/javaweb初体验/index.html","a3f5a72c6629085a89961bca8990a306"],["/2022/01/04/codewars练习/index.html","da43e5e31219573812e14347f13641a2"],["/2022/01/05/Spring学习/index.html","47cf37af2a91d8fa036d397a8dc20dea"],["/2022/01/05/vue实战/index.html","45b6e9141ac47db4d061537849dbcf0a"],["/2022/01/08/gdb-gcc学习/index.html","e91c4c9f2e7617b7b1e83cf85b00f8bd"],["/2022/01/11/python-opencv学习/index.html","be8533acc0d85e6399cf0348b0e6a1ae"],["/2022/01/12/汇编实战/index.html","d1b9db942edad4f376475f6b0bf44b08"],["/2022/01/17/pandas学习/index.html","051a6af19eeada42d6db68fb3675f3ae"],["/2022/01/19/可视化图的工具/index.html","0e857ad62620f2dd14bcc590be35aed9"],["/2022/01/19/机器学习入门/index.html","d1159f5d6126840558998999ee7379e2"],["/2022/01/20/cousera-ML学习/index.html","009105e98fa198d72e568576f9a4e25b"],["/2022/01/30/typora解绑后出现问题/index.html","825a5beb5bafbcf6695068624dc1a362"],["/2022/02/03/NLP学习/index.html","141f4428ce865f3c39c83568742cb9a9"],["/2022/02/04/Web漏洞学习/index.html","a0ba333d98b250ccd45cc4e138ca4962"],["/2022/02/04/pyqt学习/index.html","5101b82b94ba455c970765adbf2a9350"],["/2022/02/04/python爬虫/index.html","c095ca8df9785d99629f431dbc7357e1"],["/2022/02/18/Electron学习/index.html","5e4a44d2ceb8f9dd025c99304ace5900"],["/2022/02/22/疫情填报字段解析/index.html","3d8cddc2d15b40eb7a1baaa28a1850b1"],["/2022/02/24/Bomb-lab实验/index.html","3a30ce8b01232ee096de2eca41867b65"],["/2022/03/05/nginx学习/index.html","d7d2d3447b45c01624d478d003bbf9b7"],["/2022/03/09/汇编原理课程学习/index.html","eb40228c4a718107837e6426e216ff4a"],["/2022/03/11/Keras学习/index.html","e823528d1157545f92e8e8a25d15d9c4"],["/2022/04/01/graphviz学习/index.html","1b088ca36e6b7298ce1959f4baec90ec"],["/2022/04/07/django学习/index.html","fea9e74230717016b45679c48c795873"],["/2022/04/11/密码破解学习/index.html","5d4a4a3571a2beeaef1fc322b95aac99"],["/2022/04/12/flex-bison学习/index.html","1505b22b19b00fc7bbf23f161a0b6b28"],["/2022/04/15/pytorch学习/index.html","fd6b7a3b7e3322618c5ab90ad75f50af"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","17dd67ebd386b0840783445dbd78f191"],["/2022/04/23/写一个音乐播放器/index.html","b75e28ae456033448ce319ef98118093"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","52735ec6d03c6efcb2a586a9b4154c6d"],["/2022/04/30/GAN学习/index.html","650d54c8df929fd8e24a4817bf8435f7"],["/2022/05/02/html精学/index.html","5091b031d836c3e573a3a8cb29630050"],["/2022/05/06/write-a-compiler-by-yourself/index.html","79d8c7405618a03473c62f53acbc7dbc"],["/2022/05/30/acwj-01/index.html","88ee1eae2db38f1e29c3847013e7fc78"],["/2022/06/14/animeGAN/index.html","2e3373bffae165a3e5d3e7163f2219f9"],["/2022/07/09/c-与算法学习/index.html","768a3fd4bf174b7774ce8fcb31d2d70f"],["/2022/09/19/flask学习/index.html","c1ae850a7794873e905b22ac96007313"],["/2022/09/22/cs224w学习/index.html","fc711c58e7324c9acf44d765595f7440"],["/2022/09/28/记录一次wp重装/index.html","7a92937a1378758af8c19e3b06e66447"],["/2022/10/01/Obsidian学习/index.html","bff30f405499132016f6ac39058f4773"],["/2022/10/08/vue-element-template实战/index.html","e1c64b6386b3929d236ee7abbb36485a"],["/2022/10/25/vue网上商城项目/index.html","c394b670f04c9f1016e5333cee7486cb"],["/2022/11/11/leetcode刷题记录/index.html","73cf9343099ec19332fde2b0888a496d"],["/2022/11/11/使用overleaf优雅地写文章/index.html","17fe56179489f6e532e913e98b932e04"],["/2022/11/22/磁力链接与RSS订阅/index.html","e92481c2bd4f04228a7a6043e71c0e01"],["/2022/12/11/uniapp申请获取地理位置/index.html","f2c3526bdfa644af2e95e6f2dd7681ea"],["/2022/12/26/pr剪辑学习/index.html","4b9992a6a08d8a18130a06b196ddb30c"],["/2022/12/27/css中的flex和grid布局/index.html","8f9f4cb6f8f4fe4875d72d83d699b17c"],["/2022/12/28/Flutter学习/index.html","9b387ebd673ee23a34c1518d7beba013"],["/2023/01/01/美化github首页/index.html","e7f25777a6b5ca88b66e3b7b96ba2146"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","e690a8777238cfac78cac08c4b4daec5"],["/2023/01/04/构建微信快捷发布文章工具/index.html","0dec2c215ae0f04ac111221956e459a8"],["/2023/01/14/dart学习/index.html","2accb5253a27c8782258c50e10e79f6a"],["/2023/01/23/闲置服务器BT下载影视/index.html","00b635fa9f0757424268f561108f944d"],["/2023/02/07/TotalCommander使用和学习/index.html","22172310e0673c3614fc970de1ff82ec"],["/2023/02/13/docker学习/index.html","fd2676da27caa7aa05fceeabceb08b5f"],["/2023/02/17/DLHLP学习/index.html","60e65d3d00dc1a2c0dd6d062b0c1abc1"],["/2023/02/18/学习purecss构建自己的css框架/index.html","55ff4521e599de753c2fe13a865c0c9d"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","db3c8b04fe7bb8a091b3623002588cbf"],["/2023/03/05/STL学习/index.html","461199c7371159949c7b4438f85a40d2"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","721a57c18c276eff85b3ad110b520c20"],["/2023/03/23/实战写浏览器插件/index.html","5088c057dcda7af9ace6798763741086"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","5a0a7e74e9413d2b296d9d3064c673a5"],["/2023/04/02/EndNote基本使用/index.html","00673e6c00bb4c0a8a9c99c911227701"],["/2023/04/04/mne处理脑电数据基本使用/index.html","811b271b3eb286ed533a20d80a2a9cf8"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","889dba9423259922d66be0f051530fcc"],["/about/index.html","b43e52a6bc459f859ce368302b3d9964"],["/archives/2021/04/index.html","3023d35b04a9cbde0006ab771c51951b"],["/archives/2021/05/index.html","7de856018d13d0ae1cdec46190c058fd"],["/archives/2021/06/index.html","07cfab16e71eff607b280748cae89061"],["/archives/2021/07/index.html","870643d44f23de236459a5ebabb713e8"],["/archives/2021/08/index.html","9ddad2c8ad160570bf57ca48d380e3c2"],["/archives/2021/09/index.html","d483d433ce10856014620922ef117bf0"],["/archives/2021/10/index.html","1e9e20fce0b036da08f48deca732943c"],["/archives/2021/11/index.html","1c7f5a521ecb5599e2712144e7f2a106"],["/archives/2021/12/index.html","c90df6eeb9ed68f58bcacfb56eaa3ffc"],["/archives/2021/index.html","b68008bed15bb2dfed364b4c7c7127c5"],["/archives/2022/01/index.html","df55223c839092b2dff674322d528bff"],["/archives/2022/02/index.html","33e73250b6031e00f05fb89bf24c36ea"],["/archives/2022/03/index.html","411d32f62ea6609e3899e0667105867b"],["/archives/2022/04/index.html","cb1cfc8410ff9609c128429fbf52301c"],["/archives/2022/05/index.html","94e97061a21852236813d80a47bfaf07"],["/archives/2022/06/index.html","e991bd2dfe458fecf49c84482aaa5045"],["/archives/2022/07/index.html","2fe46249992073dd189eca640af2f3fb"],["/archives/2022/09/index.html","063e409ab42771ca1902f8deaac085d0"],["/archives/2022/10/index.html","d0e4f75695f0c46588cd4c7c96f6f071"],["/archives/2022/11/index.html","43b01e17feb7ef8202bd1a477d481da2"],["/archives/2022/12/index.html","4319ee1076abb86660ece71b77d6f302"],["/archives/2022/index.html","f59e13cb965672d53c10d14a8bfb1186"],["/archives/2023/01/index.html","9beaaeb4db46619cf025f80bb01a9bb5"],["/archives/2023/02/index.html","47f2291086839e8710ac0a4d8e49a80f"],["/archives/2023/03/index.html","ed38807ef9bcf64236d67057944f3a73"],["/archives/2023/04/index.html","97919777c3ffbb865408b30e4aa0bbe4"],["/archives/2023/index.html","798a788f8f623dbe8d538048ff23ed86"],["/archives/index.html","9883b43401a64ebdce2fc0ae71ec483f"],["/archives/page/2/index.html","c87862c35854374a4f91d2e2a4c0ae2a"],["/archives/page/3/index.html","0b78578e195fe88c69811640518975a4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","d4953dff6cfc9507026910f572c464ad"],["/categories/Linux-study/index.html","1ff55976ac063ddc447a2c6b9ac6c732"],["/categories/ML/index.html","2419a662b7176b302d6dcc8b013a6abf"],["/categories/Nginx/index.html","8ea3d60ea97b9c54c1f0a4d6a3908c06"],["/categories/Spring/index.html","1181af2be1b8097a3ee4d901075cf66d"],["/categories/course/index.html","57f1b4419c512b6eb71c7e455ca637d9"],["/categories/django/index.html","248223621d6f123ac45dac8d7c6a2cc9"],["/categories/fun/index.html","3a5027863df785d96e5e13d903d73404"],["/categories/gcc/gdb/index.html","caf331ecf55d0c8239ac55252c339edd"],["/categories/gcc/index.html","60f42d1dc6d7282aa30c409972338817"],["/categories/index.html","64f06a5d26bd0a02bb78c01e4e127be9"],["/categories/java/index.html","13f2d7c083b3151004a4b693f85427c2"],["/categories/latex/index.html","353df7108dc2f81cfdc927d732f5a765"],["/categories/python/index.html","6bb07ff5d57ec85c1c1d8296d4131a25"],["/categories/study/index.html","3e502d0841d85d4d65acb42d0402f1e6"],["/categories/vue/index.html","c0aa48243faa4f329b7efb7bbcc7024c"],["/categories/误区/index.html","95edbe822c70202cb9b7fd5976ebb5c4"],["/commonweal/index.html","71fb6b3cc18d0c806c9b3b04f2f28d27"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","602b4d5a6d284add2543445dd043f4a5"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","51b3142707472a81959bb7c651944abd"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","9b8a06661524209eb34d3d702781779f"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","195c7b161ab1235ce327c1c09a502b5d"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","ac676d944a014ce8c241935e5d71ed7d"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","62baf708280671e731e615eee34e4e48"],["/page/11/index.html","a50597a1b57b65fc40fbc4837e6d4def"],["/page/12/index.html","1683a52d144494b80e3a17aab9beff0b"],["/page/13/index.html","a876c92b23f9fc88073476af7bcfb965"],["/page/14/index.html","a99505096dc2d2d3e452d2d4dc63cf7e"],["/page/15/index.html","36285d8962bee7164fe8bf075ebe197b"],["/page/16/index.html","051ff27c96479d25d7515bb9f3873703"],["/page/17/index.html","fd5ba3a06dcc829ee8613c459f83666d"],["/page/18/index.html","9fa5f0556ae8430d261e7a1ed6c847c1"],["/page/19/index.html","455446593058c858e6e691b24c7a4adb"],["/page/2/index.html","c7b17fe300a51d36d73f666b1ee6c08f"],["/page/20/index.html","c3280925d69200e97e27fd1ff3b70007"],["/page/21/index.html","afc4a46b93e711c5320563b2381be7b6"],["/page/22/index.html","d252eb2d3fae99371feb4cadf93c6077"],["/page/3/index.html","e15fc8f98cbeb92fff9f66a733a9e9d9"],["/page/4/index.html","c788f1512cd92a2ed7997a55c4336fe6"],["/page/5/index.html","d5540b61552d7e1ac8910f70135c6d3f"],["/page/6/index.html","d54940bed4cf88eaa80b199e789a4b5c"],["/page/7/index.html","513e81ccc54153f0e7c55e54318028c6"],["/page/8/index.html","3a63f1f40c3a498051199540a614e7d2"],["/page/9/index.html","f65cdc6b65563cedbb640370cb477d0f"],["/resume/index.html","2496e5d2df31bfb2a2c8f6e462e2082c"],["/schedule/index.html","109d0d36d02dbd5828f0dae4a653f346"],["/sitemap/index.html","d3dab1a5e29950b46832e2cb6fc710b1"],["/sw-register.js","7de83f1b82b2f227b28b555936f5a75b"],["/tags/AI/index.html","fb708a066de93465dfecd78218b4ebbc"],["/tags/BT/index.html","3cf56507c0465dda52f76f2837f2f943"],["/tags/BaiduNetdisk/index.html","7d5db3a8ef23ef6853220c25ac7b92c1"],["/tags/Bootstrap5/index.html","a01ea67ed2132247cfac3e951c6a0ac3"],["/tags/CSS3/index.html","7e9fe41be9056b92d000058e15505983"],["/tags/Centos/index.html","c71bb10dce7645f3fb6c0a02a48618ab"],["/tags/EEG/index.html","a828c746eeee7e201d8365c3d48f5597"],["/tags/Electron/index.html","67b78d93b6a6dc9b7bd3c9d6759afdb3"],["/tags/ElementUI/index.html","5c13522785f8f027892d07fbc883539b"],["/tags/Flutter/index.html","e4f83e2eb8a0cf6858e44ff0ee529297"],["/tags/GAN/index.html","204418abcd4968b07830ff392744cdb6"],["/tags/GUI/index.html","cade3a18286c5bc5fa16ab7b3ec61eff"],["/tags/Git/index.html","8492b8da7060661dc49c6998d1987c12"],["/tags/JavaScript/index.html","0f472ff7a827e5337f91776d4c02732c"],["/tags/Keras/index.html","af31f81acbc82b093cfc7d40b39473cf"],["/tags/Linux/index.html","7f318d5001ebdb857553f88474023b75"],["/tags/ML/index.html","a0a5835655ea397855b45426bf8cb3d0"],["/tags/MNE/index.html","f5484b78f9d2ff883e035c2867eddb19"],["/tags/NLP学习/index.html","a6bd64badb2943c129e74a91ed960a97"],["/tags/Nginx/index.html","ee2e86b0c920b94d2c600cac03b374ae"],["/tags/OSS存储/index.html","19f417c43f830728e8970befec5836f5"],["/tags/Obsidian/index.html","d4a5c68883bcde0e3bd61026e1168ecc"],["/tags/Qt/index.html","0f3f4651bac029b85e38ba48029ad6cf"],["/tags/RSS/index.html","bc013d27dae522d6d9a11b3cce8698c1"],["/tags/SSL/index.html","638f8d3a52448119245e552134f999cc"],["/tags/Scrapy/index.html","b84f4e19a507ebfe2fd7c6819df29c91"],["/tags/Speech/index.html","a8e9edbc24a82ef4d2c25c5e718c867d"],["/tags/TotalCommander/index.html","52dc0d4bd2237e76912d13b2f7d739de"],["/tags/Web/index.html","60246ac5324ba416747e78a8f9a82e1d"],["/tags/algorithm/index.html","8af66fabece26f24e1091264fe695b3f"],["/tags/bison/index.html","4470dc84c3866871041a34e19cca32fc"],["/tags/bomb-lab/index.html","ee136b31d3f5e2352a847e985452d935"],["/tags/c/index.html","1793ce51b19e64b4700387f4d7233e72"],["/tags/cheerio/index.html","1702d50861731e1fa95a614ca3cb65e1"],["/tags/codewars/index.html","85abdd475a7aa3fea375f9b95399636b"],["/tags/compile/index.html","3166070120cabcad93f51fbb886ea8bf"],["/tags/compiler/index.html","f858ce03462ef873ead3a7a60555ca36"],["/tags/cors/index.html","b8967da40ee40ebebe38da9e3787a87c"],["/tags/course/index.html","f0d9f761194ffd5c8a624dd4fbb70991"],["/tags/cpp/index.html","314ae2f55f9b1399d2c29dbc6031c7e6"],["/tags/crypto/index.html","abb0a70a1d57fed121dd4cf9af256b0b"],["/tags/csapp/index.html","0e13ca0db90c3470820033e66ceb883f"],["/tags/csp/index.html","03b3c83f582cc8173d0f19cbf9c275c4"],["/tags/css/index.html","979c21f20b85d82177a65a21933e7256"],["/tags/dart/index.html","eca5c25c0bc8a97dcea91da23da53bdc"],["/tags/data-structure/index.html","9aa65f220352e2cf2afeeefb906b64f8"],["/tags/database/index.html","ba4d52245a1a27ff8b48e4fb353970c3"],["/tags/deep-learning/index.html","b10b30de660ade7b044f5a14d830cd84"],["/tags/django/index.html","1585089a1023bcaaf35baa9c9d22631d"],["/tags/docker/index.html","4a16756861bdc4e03a88ac93bb3ef5bd"],["/tags/dwm/index.html","634f8010a5fb0570aed99b80910602bb"],["/tags/exercise/index.html","b89a4ab5e09ec726277bef5c49b6976c"],["/tags/filebrowser/index.html","1e2d9bbcaa737e7481af773a7f832b51"],["/tags/flask/index.html","6df29b96cc271e999f2fd9763e7edcfb"],["/tags/flex/index.html","a7b7f761caf3e021b3cd25f308f81b88"],["/tags/front/index.html","778861ae627e87340995245041217722"],["/tags/gcc/index.html","8dfe1c7a1cab08b2b204e407ee60f9f7"],["/tags/gdb/index.html","d09b6df7ecba752268b19b598cccff00"],["/tags/github-profile/index.html","c95cd042103af21c4c9dd482efbfd0b3"],["/tags/github/index.html","592a7dc42ed0003201eb41b8fecbf3d1"],["/tags/graphviz/index.html","b0da0d9b0f947c7f9dada26c0108e7f1"],["/tags/grid/index.html","a6d97d9d148e651644544539dc6b0a28"],["/tags/html/index.html","cb409b068156ee73039947e93b0d8066"],["/tags/i3wm/index.html","4e8bc8b5ec7ea7fa6d6b6480067a8234"],["/tags/index.html","6aa4216b1fd55c6819e4315616aa4cc8"],["/tags/issue/index.html","6a1240f4f4058544349c942254fd6d15"],["/tags/jQuery/index.html","e75ac434f7edd8735a5ba011c8c625e0"],["/tags/java/index.html","1e8101c9336e51ef29ec3b3079f06615"],["/tags/js/index.html","157eb1eeb99ced5f692cdbaaab9ee814"],["/tags/latex/index.html","e578a5b1b77697934f219a0ef06ef5a4"],["/tags/leetcode/index.html","d253458a94db8eed6f5b3ba5e2179753"],["/tags/lex/index.html","7b571977820856f1e281f6a27991d0aa"],["/tags/material/index.html","3d5df131912e0a757e65ec504e9ed8fd"],["/tags/music-player/index.html","b9a4554f250c16dad48048afbc98790a"],["/tags/nodejs/index.html","e972563dff05958d4a5386cc72c53318"],["/tags/noj/index.html","57bf1e36302ba43e9a3e7764ea15178d"],["/tags/opencv/index.html","e1006129a811d817c83793a9192fed5c"],["/tags/overleaf/index.html","c64786fc9a66bc32f9db921d3c684508"],["/tags/pandas/index.html","0988a5d72b46a326001ec56253ab078f"],["/tags/paper/index.html","94df9b1affc60acc1480286359765892"],["/tags/premiere-pro/index.html","86041c79800f63f9c5b3b2a57995edbb"],["/tags/proxy/index.html","f44744c6b176e6970f73901e70a250b6"],["/tags/pure-css/index.html","167287375387239d915879d528eaca70"],["/tags/pygame/index.html","8bc109f254a7b1afbbfca5f6745704ae"],["/tags/python/index.html","a0483354a40d10f0a8f632ac9ae62330"],["/tags/python/page/2/index.html","4fa191172a020c3c5bfb17442a683568"],["/tags/pytorch/index.html","7c45744884cca7b8b4e073a103a43f48"],["/tags/reading/index.html","c9e7eeb753631ed14f693373b4b36ff3"],["/tags/request/index.html","eb0d4c85a045cca13f1039921e9b59ed"],["/tags/requests/index.html","86106dbab77ec3967b63ff0b58303bbc"],["/tags/security/index.html","3468af79c442a868e11abef17416dee4"],["/tags/shell/index.html","c62719b75512e40fa13ef243fccdbb50"],["/tags/sign-in/index.html","6f87285b0d82c6ff1dd95bf47c6e9778"],["/tags/socket/index.html","d544125510baee073f0050364ba4e858"],["/tags/spider/index.html","f53cf9defaf4f7d6138ea57fa0d4fdf0"],["/tags/splash/index.html","53e48de76c83488aaa7f153bfed69619"],["/tags/stl/index.html","1733ff87a1d14b715421d419dbdf9add"],["/tags/sumatra/index.html","8b2de28451b09288c4ec803b17e79dd1"],["/tags/superagent/index.html","4641783ba199dcaf4b7a414fd8e3e4dc"],["/tags/tensorlow/index.html","ad61f6fecd1f461c31b7c0574f078d76"],["/tags/tex/index.html","ee18b57cfe8e1ac015948d91e82e2250"],["/tags/thesis/index.html","427470986d738e858587b64419ab5b2b"],["/tags/threading/index.html","631099da1ae2681fb460cb7d7116db30"],["/tags/tkinter/index.html","7b3606d568ffdf856c63fcf1439347d8"],["/tags/torrent/index.html","f7031616ceedac192ce1a00295edfa02"],["/tags/tutorial/index.html","f2c3e8838f30231089be0f9aceec0698"],["/tags/typora/index.html","e7698ca22a83eb74cf9540e7413720aa"],["/tags/uniapp/index.html","73677d2b84aee35d1dc642cace35e5f1"],["/tags/vite/index.html","8eec347a8782e0077e93e3290824e2c5"],["/tags/vscode/index.html","80da5d342ea93f83c621ab5180e16a24"],["/tags/vue-element-template/index.html","a6d70a31fac500b63ec582478e6efa75"],["/tags/vue/index.html","46a52d9604e92844a456f8c86ad8944b"],["/tags/vue2/index.html","5433e3fe3dedc4695291f95821e5f89a"],["/tags/vue3-x/index.html","1b1d99f75f77516570cce6207387c39d"],["/tags/wechat/index.html","b486f16faff69395ea0ab4c45cc242f7"],["/tags/wm/index.html","fe1ff45a051c9a35c335a0d83b0cd803"],["/tags/wordpress/index.html","e773f85e3b0467e3325b8cf576254aee"],["/tags/workflow/index.html","ca514dedc83b37d1139015386334754c"],["/tags/xpath/index.html","8ad09ceacb598e10a4eb8fcdc174f732"],["/tags/yacc/index.html","23608f6261583cec79608bdbd0ec183a"],["/tags/zsh/index.html","8f71b2e092989f37e42f17dbade1a6e6"],["/tags/七牛云/index.html","8d553e2e1aaeb617c0dc626165933735"],["/tags/函数/index.html","e5a58070209c0f4554370e27de0e6004"],["/tags/剪辑/index.html","dbb3fb63f8b9530d94634c85a6530b34"],["/tags/存储/index.html","00c395f27dd8251b1cacfce5bfdd269f"],["/tags/实战/index.html","43ba2ab8e2f9555383f96313fa517763"],["/tags/工具使用/index.html","865e932d2af8f2460ed3a26f60644465"],["/tags/建站/index.html","0934a1428dadc293b9b76d5e29ad1a45"],["/tags/微信小程序/index.html","07702a919f09c33e0d195266441d3f34"],["/tags/指针/index.html","d37a20f67409163cae0390e02d1c91e6"],["/tags/效率提升/index.html","c0c1f905984b96b13a81b240a3aadce7"],["/tags/汇编/index.html","afcb85631f5a34c06e65c88c94d34daf"],["/tags/油猴脚本/index.html","74a3be2c7ad6fab7efd952c6d0be9d70"],["/tags/浏览器/index.html","cfd7d1cac3d9e54e98973442fa460ca9"],["/tags/爬虫/index.html","ed6723fc136930175824cbf42bbe760e"],["/tags/算法/index.html","ff8968213e4145b2dec4b28c76e62dd3"],["/tags/编译原理/index.html","8624071b390f4d745be42d3c2cdc1aad"],["/tags/获取地理位置/index.html","ebe3004081fcf973e79d2f111b242f37"]];
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
