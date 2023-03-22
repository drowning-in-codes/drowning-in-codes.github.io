/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","f7218e08c194b5438ddc82591d825658"],["/2021/04/20/稀疏矩阵/index.html","75e441d83653bd0d2c3eaaed2e1f47bc"],["/2021/04/23/广义表简介/index.html","50f429760a8d19632c2d4199b9bdb479"],["/2021/04/29/关于指针和函数/index.html","2110dc8edb11da6b566e9f66fc7d102e"],["/2021/05/10/哈夫曼编-译码/index.html","95348471ec3bc4fa8f850e46c392b78c"],["/2021/05/17/数据结构noj_2/index.html","778b0da6652cda1df5417a62c3ecb91f"],["/2021/05/30/数据结构试验/index.html","ef233c0877772afee978320b98fe4916"],["/2021/06/12/数据结构noj-3/index.html","15b62e3a595d56488469372b4f02b043"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","eb6f986276acc1abb8a280c0eb7e1cfb"],["/2021/07/08/课程资源分享/index.html","db44d4cd015e46c57e95a82668ac1748"],["/2021/07/20/Scrapy-下载图片-文件/index.html","f3793761a48a6fe8888cc76151773035"],["/2021/07/21/Scrapy-动态网页爬取/index.html","6440647eee3aa68ebb05c651b8122832"],["/2021/07/21/疫情打卡/index.html","ad6daa9d0c2b998505fec02c367c7495"],["/2021/07/29/Scrapy代理设置/index.html","c99e735b57994a4ca8f5e85d4818b95f"],["/2021/07/29/数据库认识/index.html","a14d057779f5cf6719ab298a661947c9"],["/2021/07/31/Python多线程学习/index.html","c26f70f666e1bfb960d249281543c82a"],["/2021/07/31/tkinter-requests练习/index.html","f30d1b6ea423d45bf1f44372e2a00c37"],["/2021/08/10/Git学习/index.html","2f02ec6c4019356ee199a2638e3150f2"],["/2021/08/15/pygame实践-1/index.html","6ac970e2d6f488e7f5093d003c95f013"],["/2021/09/06/微信小程序开发/index.html","385e70c0c4eb438ca944d41973be66c2"],["/2021/09/21/命令集-1/index.html","5c3625807f4f73524cfccba8a11dd9d2"],["/2021/09/21/命令集-2/index.html","826044d0c798a66748c7cd7688d843ee"],["/2021/09/21/命令集-3/index.html","5afb24a0c6802873361a152419649727"],["/2021/09/21/命令集-4/index.html","70662646699c01b04f897fb214fa416a"],["/2021/10/03/socket学习/index.html","89335f5a30470e312bcd97d172ced484"],["/2021/10/10/dwm入门/index.html","f85df6d477815775c4dab1a201303120"],["/2021/10/10/安装ohmyzsh并配置/index.html","21909c3425b4e46b59dc8e7d6a1e93b4"],["/2021/10/20/css学习/index.html","66976b18229e2555015012fc58b2737e"],["/2021/10/20/wm入坑/index.html","d8b50404b1782c7c8bc6685fc1400726"],["/2021/11/03/微信小程序学习/index.html","7226ea32e07318f0ab484f336d4f8d66"],["/2021/11/04/css揭秘/index.html","7c85f1f672ccee89c211de53d4e327c1"],["/2021/11/05/css-练习/index.html","c4cb3de13c35e82de877842781f479ab"],["/2021/11/21/命令集-5/index.html","8b39f221d7bcad36acb5b851f883c7ca"],["/2021/11/21/命令集-6/index.html","4f8711733f60e9b457420cd2266b526a"],["/2021/11/21/命令集-7/index.html","8df773c7f8ab2d2a24a8e5c327f964b3"],["/2021/12/01/搭建wordpress/index.html","37871c2bf95bbcc4f3896940770f448a"],["/2021/12/08/python操作百度网盘/index.html","fd25c0766beb1a55d9c6994a503510a1"],["/2021/12/14/js爬虫/index.html","ea5cdfde7d7d8611754d0cfe6bb1b264"],["/2021/12/25/为网站申请ssl证书/index.html","88d75dd6cc792a6b0744f2f218cf7570"],["/2021/12/29/使用七牛云为网站提供服务/index.html","4a1810fc649131f454cb8d421bc79e1d"],["/2021/12/30/jQurey继续学习/index.html","bd46381c262c05bc22d20311019e284e"],["/2021/12/30/jquery学习/index.html","7f21c85a0b8f940b63d166d8f9670543"],["/2021/12/31/vue学习/index.html","f7a44b2a285c2e9143f858eceb229844"],["/2022/01/02/疫情自动打卡/index.html","62876a394e12b124284714df7f16a8fa"],["/2022/01/03/javaweb初体验/index.html","efde2c02f5ffd75171ef04a852299da7"],["/2022/01/04/codewars练习/index.html","43da62f2b137d4c997720ddcb82a0718"],["/2022/01/05/Spring学习/index.html","d1572901716ebd315dc07dc04f3a3c98"],["/2022/01/05/vue实战/index.html","454f2f331deea7b8a9afc1e561faa8f4"],["/2022/01/08/gdb-gcc学习/index.html","220d2cb175125a617cbe7dc114c798fb"],["/2022/01/11/python-opencv学习/index.html","61f2d72a0ad755191c617d4a05f0e262"],["/2022/01/12/汇编实战/index.html","a0f2fc64d5b2fc1dbaf05f85387b9e6c"],["/2022/01/17/pandas学习/index.html","988398b0cc7cb3df7e9cf4d2bf9fbb1c"],["/2022/01/19/可视化图的工具/index.html","4fcdc95ae86218cc7e6f52bb32a1c631"],["/2022/01/19/机器学习入门/index.html","b1f3aaf7ec4bb05dd945bb0f824452ec"],["/2022/01/20/cousera-ML学习/index.html","cb7ade6d4ce3ed0366926d65130e5e40"],["/2022/01/30/typora解绑后出现问题/index.html","1389cb7301a165c80b7ebef2ffcf57bb"],["/2022/02/03/NLP学习/index.html","f6a8670437ba7a416174c7ad47f2bb7d"],["/2022/02/04/Web漏洞学习/index.html","ae460a4f48de5119c1a176b431d561eb"],["/2022/02/04/pyqt学习/index.html","00faab051e4e1a0043cc91aeacf5d982"],["/2022/02/04/python爬虫/index.html","40535421db252da859cb10cf3f10b134"],["/2022/02/18/Electron学习/index.html","bac6387ae9ca9420a49ea5ad072cef52"],["/2022/02/22/疫情填报字段解析/index.html","68f9ad5c21c8f0bba41fafc30c28601b"],["/2022/02/24/Bomb-lab实验/index.html","007b9a74e0d3198f8598f966760b3815"],["/2022/03/05/nginx学习/index.html","76987b40bcb45877226e0d437b1c76d7"],["/2022/03/09/汇编原理课程学习/index.html","dfc674e7e17e6513e23660851f163543"],["/2022/03/11/Keras学习/index.html","73d2784735f89e091c4115d3ece4d256"],["/2022/04/01/graphviz学习/index.html","ccf70af30a500eb4e00a01c95f971f10"],["/2022/04/07/django学习/index.html","3f4952533ed85b8085ed50e4ba5fe9eb"],["/2022/04/11/密码破解学习/index.html","512155454ee88adf3a94e715b534643e"],["/2022/04/12/flex-bison学习/index.html","c3e958e00506b2a9af33db538806a572"],["/2022/04/15/pytorch学习/index.html","bc19c7678d66ad6ab56b4a7cb40db581"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","0fd52f68565040564f9b4554c843eba9"],["/2022/04/23/写一个音乐播放器/index.html","d0424a7ee28b69444a4a25c52c82e4eb"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","4e277fcf4119d6c927fedacc9740ceae"],["/2022/04/30/GAN学习/index.html","f0abd3bda6557da8ad99453f681f1538"],["/2022/05/02/html精学/index.html","697a736fb019959a7476a62fd8d8a175"],["/2022/05/06/write-a-compiler-by-yourself/index.html","bef954fddccf8ea2ead5b9afd5a9456d"],["/2022/05/30/acwj-01/index.html","f25c0eb982d113f90e64887b2f6d596a"],["/2022/06/14/animeGAN/index.html","5eb877514ad3d0ec1f630444173a1be4"],["/2022/07/09/c-与算法学习/index.html","8f6ccd5f136387c14123d8afe1c77140"],["/2022/09/19/flask学习/index.html","49d21a457518a832effb0256189fc450"],["/2022/09/22/cs224w学习/index.html","e0afbe87fd82378cebc7ccb014283e5e"],["/2022/09/28/记录一次wp重装/index.html","8269be5483d292ddc009008f1b4b1458"],["/2022/10/01/Obsidian学习/index.html","99d062a729d4031ce7e3efc2cfa65e14"],["/2022/10/08/vue-element-template实战/index.html","ddff07837656c1e2f20e96c8881c4352"],["/2022/10/25/vue网上商城项目/index.html","5abc4b0f2fbd09fe72a38184dfef4846"],["/2022/11/11/leetcode刷题记录/index.html","fa454020499e2c3ee2085a8a464d28d4"],["/2022/11/11/使用overleaf优雅地写文章/index.html","619f24485792fcb8cea615060a6167eb"],["/2022/11/22/磁力链接与RSS订阅/index.html","693cc393f89ea4f8c0df2d40a5159763"],["/2022/12/11/uniapp申请获取地理位置/index.html","2a5b28fbaf7fd9168d809efcfcf77bb6"],["/2022/12/26/pr剪辑学习/index.html","bc74573549ce89c2653afb82db5b68de"],["/2022/12/27/css中的flex和grid布局/index.html","41cd73e0f4cee1b4c21637eb042a27da"],["/2022/12/28/Flutter学习/index.html","0707475fa4832e17ce6ddf995d573b26"],["/2023/01/01/美化github首页/index.html","fcf233a574cc42815b6ec658a8f24248"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","4d54f8096691fcc7ff6f77db69b32667"],["/2023/01/04/构建微信快捷发布文章工具/index.html","2e65361f1246498013aa8047ba846e2c"],["/2023/01/14/dart学习/index.html","5e040b148a41d8140403a5ea4a79f051"],["/2023/01/23/闲置服务器BT下载影视/index.html","f1753c1a9b98b323cd7effd220d48ed5"],["/2023/02/07/TotalCommander使用和学习/index.html","436b85ae39806897524b4323bed83a46"],["/2023/02/13/docker学习/index.html","0ab6b9452a2259a1e4e4a5abe46ae046"],["/2023/02/17/DLHLP学习/index.html","c317856491fd87fa4687574dddb764e0"],["/2023/02/18/学习purecss构建自己的css框架/index.html","69a807529e5da4dcbb67dbfc4d45d5c9"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","383c274392e3af1584c64ec30f2912c2"],["/2023/03/05/STL学习/index.html","2bff09d46bd4df62982d62446a99d3c1"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","9d4ad7d17eb314d13a712e4924feb2ae"],["/about/index.html","8316318cfe1bcc1b165277a5cbe59ca5"],["/archives/2021/04/index.html","61effb6e7452b2c0ade7116e2145251f"],["/archives/2021/05/index.html","edae139243886b9176b9df565035626e"],["/archives/2021/06/index.html","6472d710e28d3290bdcbde11a1b25861"],["/archives/2021/07/index.html","c596bdcff103a4e115c0c292d3cb0d72"],["/archives/2021/08/index.html","4a15ac7d2ea5fdeadeb42ec351757d07"],["/archives/2021/09/index.html","5868b1e5e70d3a8f1a94079fa2cd2343"],["/archives/2021/10/index.html","a5c2813974be369ff54d57183fb73f54"],["/archives/2021/11/index.html","75aa4ccc53bec7ac7837d38ca39045da"],["/archives/2021/12/index.html","636354cfefdd09190cdd2db918700b3f"],["/archives/2021/index.html","178147c3920bd294fb3fc69de2dd0b53"],["/archives/2022/01/index.html","307a7b343b9622038447440dca5eb302"],["/archives/2022/02/index.html","4373760d3c1b49db191748ebce217795"],["/archives/2022/03/index.html","4e12aa9315160075888f483e2812741b"],["/archives/2022/04/index.html","15b9dbec48fddad2b19bd998d6feb493"],["/archives/2022/05/index.html","598ef01033ee797c1dad5e0a831077d2"],["/archives/2022/06/index.html","3db024f20f6cd67b36ec1542e4b59f78"],["/archives/2022/07/index.html","4f539b8a86504c90fec10843075ca383"],["/archives/2022/09/index.html","0c13b46fd8561414a0d9eaef329cac86"],["/archives/2022/10/index.html","b856e4da9e3ef6ca45a2056add53566a"],["/archives/2022/11/index.html","4181c04fe1ca16fe1af42df2a4948fbc"],["/archives/2022/12/index.html","b535cceeef0ecd331a70d90db116639d"],["/archives/2022/index.html","0082e6d5239bb81f9429b68922307cfd"],["/archives/2023/01/index.html","f479e7cc95e97359c4ebef266033f213"],["/archives/2023/02/index.html","189680b76cc505546efb5b6d09f4c99d"],["/archives/2023/03/index.html","15bc85bb87d80a66a7376c8ef412808f"],["/archives/2023/index.html","460ba1774fc0df93fb15fde761df2a6b"],["/archives/index.html","808f264be95076fd66a1df138a63a087"],["/archives/page/2/index.html","3830cfaf2230a74af0c7795426871427"],["/archives/page/3/index.html","3394df85fe6ceb0cb391eb5ae0e53237"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","46e80136e5dfc2bbb14b32b358270aa0"],["/categories/Linux-study/index.html","33930243ce5ffaae1b1adab02543eb4d"],["/categories/ML/index.html","a46868181b083b3ccad2bc4646a2e21a"],["/categories/Nginx/index.html","1ec938ab63bc07178f15e0c4ac523ed4"],["/categories/Spring/index.html","09aef14772f0c7797ca0653f58e3515d"],["/categories/course/index.html","bb9d00ac9b029270f6afbcd7c06f5d7f"],["/categories/django/index.html","31a76839362e96bcd89bda7ec08e8e71"],["/categories/fun/index.html","57e5ab82bbf76548f1cb5857daa56567"],["/categories/gcc/gdb/index.html","b13e22b2abdc1df4d578100a1445c109"],["/categories/gcc/index.html","516bf277540a3a54fe5f46fb76b800f8"],["/categories/index.html","e9b93c270a7942cbb49c0268d0404b6d"],["/categories/java/index.html","e2decee9f38c1b7fc450621c4af986c7"],["/categories/latex/index.html","0fe4c7165c4979449a2bcada7824432d"],["/categories/python/index.html","f920b47be4c38acb419b4fd13362ad78"],["/categories/study/index.html","49303c29f4164fbd9651d3691c50d466"],["/categories/vue/index.html","881b1d3a93b1d0a9866af908121adc73"],["/categories/误区/index.html","021205b90985461281872aa5a7b9b357"],["/commonweal/index.html","1894ad5487cb738f5ec6b19ee761b2d8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","27ea0b1df2cbeec22e7faeb077a77ae3"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","8b540f3259972dccfeb8044efcae4b3f"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","e61e8d8088ba3c83776dbc4841cb76c4"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c69683570478af04308b45ccdebcdeb4"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","5d4f38251c464a1c8b0b1ff984147879"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","44a653299aa514f81cd9f5d8d29ab248"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","3454ef846ca5d4cbb2b16cd3b454190d"],["/page/11/index.html","03c740bdcd74a88abf4872fd0b2930e1"],["/page/12/index.html","5a9268a56d297f3ea30669c08088afed"],["/page/13/index.html","79f98032aa50acbad9eabecef4936ffe"],["/page/14/index.html","986f503f83fffc6078d1ca0b58c65202"],["/page/15/index.html","ba18fbf6b988a95529b9020241948360"],["/page/16/index.html","c8c9119c7522ba5dcfbb0e92b3cd2c5e"],["/page/17/index.html","07a443ec101993e10e866f66e0eaedf4"],["/page/18/index.html","5f100e7f95d8563a84c6124142ac5d5f"],["/page/19/index.html","24e3ffde7a125b85f40da0faf692e064"],["/page/2/index.html","5490bb92147888dba2106de4060ece43"],["/page/20/index.html","cf72f8e5f92b5dfbda8812e98b208392"],["/page/21/index.html","f775aac6c6669e7f651c43e31b1b71b9"],["/page/3/index.html","893ac43569a14a34fe6b137177770aee"],["/page/4/index.html","af1881a81b89f96d6986f358a9fb5ef3"],["/page/5/index.html","cc6b2c4f10ffb253289ec5a3ec517e54"],["/page/6/index.html","095f7c3870d72bb9e404a6309685cda2"],["/page/7/index.html","5313683f9a36628510e8392af6565ed4"],["/page/8/index.html","d51a5ebbd971bb88a8a109d94c6a9cac"],["/page/9/index.html","e0904cf43a5b42e9fef897f4c9002062"],["/resume/index.html","b545bff4c1abe61f5268b7232bc6f78a"],["/schedule/index.html","f2b5b01ed8174ed16a799e12321f56f7"],["/sitemap/index.html","712ec0ee3cf2aaf0bd2f0a4a308e0283"],["/sw-register.js","d62594e5430201680c13843f215b69a5"],["/tags/AI/index.html","6d6924e8ba0fa55bd47033a0b333f6b7"],["/tags/BT/index.html","d4c143781a809eac3a50acb7bd6d0cb9"],["/tags/BaiduNetdisk/index.html","90253ccecf336a6dab58f50fd7250c11"],["/tags/Bootstrap5/index.html","d542529d0a82ea02a5c7f848e9b72d59"],["/tags/CSS3/index.html","078434d1ccf1f25555e254d881d48074"],["/tags/Centos/index.html","3eee00d773a1a093494b4b67ca67c153"],["/tags/Electron/index.html","1de7d9b4fec49188a6b8503c5ca70d5c"],["/tags/ElementUI/index.html","45d741944e917cc1167889275317ff18"],["/tags/Flutter/index.html","88d79f878df99a7aacaa42091eaf58ac"],["/tags/GAN/index.html","10c1caaec7ee0eb7ddfbdccdaa9ab51e"],["/tags/GUI/index.html","8f2da3e168c88769145b50f7b2e417d3"],["/tags/Git/index.html","6e11f19373ade2f31fa4da0483696a90"],["/tags/JavaScript/index.html","5e4dc93f320a9596d6a8f835ba156186"],["/tags/Keras/index.html","49bc6bb509249bf9bcc675c48734b911"],["/tags/Linux/index.html","85b8cfd7800e21380dbc0e7c7a375285"],["/tags/ML/index.html","8f1cd30a17ca53053d7a87cb7575f0c0"],["/tags/NLP学习/index.html","67eafb217e35795b8335ca4759131e8d"],["/tags/Nginx/index.html","6c7c0788922751dac93cffb06f845a6a"],["/tags/Obsidian/index.html","69e32c1292fd70becfd1bd4b66e8631b"],["/tags/Qt/index.html","5a8b264e7908e338f4248d9f54f042ec"],["/tags/RSS/index.html","1b524237dbb5bfc7ef62f61d6920ccc7"],["/tags/SSL/index.html","fb7daf598594b814f8360ea350a850d4"],["/tags/Scrapy/index.html","fcbb7d2f50bf8ecc452dea6d341aad0f"],["/tags/Speech/index.html","dedd8d0d532a7062bf5b90e93b20341c"],["/tags/TotalCommander/index.html","dcebf209e8ebbf236175a362586a74ed"],["/tags/Web/index.html","4dd93ad539e3343d199fc31a437ce8c0"],["/tags/algorithm/index.html","d9bd1b4295471e022cea8bea0d4f8d49"],["/tags/bison/index.html","0a3a6dc9b078844e0b79ca500644c476"],["/tags/bomb-lab/index.html","7160a99d739a62fb7ba130cba458cc3b"],["/tags/c/index.html","9e8a13573573f508946616568d14dd9c"],["/tags/cheerio/index.html","60889272bb9500ff0f9c992664c5aeda"],["/tags/codewars/index.html","5ed58b12490b7652407cc339e89a24b2"],["/tags/compile/index.html","b536c9eae0af6105f4710508c253fd15"],["/tags/compiler/index.html","2be4630a69cff9b0969ce06a19366f3f"],["/tags/cors/index.html","c0ceaaa4767451afe8ba2e99e600331a"],["/tags/course/index.html","dcc9595b04a3489d6acd4753adb8430c"],["/tags/cpp/index.html","dd48899492644b754c14e119e19231d5"],["/tags/crypto/index.html","80993c10d254f9cabf237051557c4303"],["/tags/csapp/index.html","e18ee9bc1b09864d5b41a6927ce0a5c9"],["/tags/csp/index.html","c9f8ad9da185b7f2670f0af13b69ca93"],["/tags/css/index.html","358e02ef7a7923eb17b17cb72cb1caa1"],["/tags/dart/index.html","067dc9d0a0f9c121ec7e082167386851"],["/tags/data-structure/index.html","6a1a4864bebd6198b5b2d4efe2508077"],["/tags/database/index.html","ab90fde6f1e8c3ee2e762b4973745034"],["/tags/deep-learning/index.html","e01b66ebe50ef4ff638c99d83d4e1b33"],["/tags/django/index.html","2b1d8b08d9e84c21923af8acdc30e804"],["/tags/docker/index.html","47fb77f768b12c19a45a9c8fcbe2ed24"],["/tags/dwm/index.html","0dcfd0f5df4c44033df551a680e9ddcb"],["/tags/exercise/index.html","2a49bb6f12f59c78326916ef5a8e7108"],["/tags/filebrowser/index.html","5481e0414173f06251de2a20133882bc"],["/tags/flask/index.html","3a3160a4e0992b0cc5f5e1018a65a1e4"],["/tags/flex/index.html","244f1590234515b6f2708a6ab2a4d8ee"],["/tags/front/index.html","28a917f831a762c2cc59a0befb84c211"],["/tags/gcc/index.html","66028f25ad6d2bee2b8f87f03df28196"],["/tags/gdb/index.html","8fb7f08b2340cb80b8fa15ce36933b21"],["/tags/github-profile/index.html","97824987f7a72521b921392f3f0464bb"],["/tags/github/index.html","3df7d998ec1c6b1543088e561c2a541d"],["/tags/graphviz/index.html","f2aca256f45e92206163deef2e74a291"],["/tags/grid/index.html","6fe2c2eb376c56e24680737e3649ceb4"],["/tags/html/index.html","f455676beca7871e2109717e33474f4b"],["/tags/i3wm/index.html","93229ca6f22f1ff06db7bccc300af383"],["/tags/index.html","d68be5aa9094f6dc630fe7e18ac7c05d"],["/tags/issue/index.html","f6594cdf81ee0e0b2b3a3bf3679563f1"],["/tags/jQuery/index.html","3a94bcc78d702ed18a6566360601fc04"],["/tags/java/index.html","15a23d6d260a47a2317c30b623c952a4"],["/tags/js/index.html","25dbb76df418cec54396c3071f3667dd"],["/tags/latex/index.html","e7318dcc80f9861b4a1a9b6d00eb23f7"],["/tags/leetcode/index.html","47b2c10d1eab9711502574b6f331ad7b"],["/tags/lex/index.html","036d8e9377cb421757e5225fc0cbf151"],["/tags/material/index.html","3e2b26d69c6ad3b794943b0fc58da836"],["/tags/music-player/index.html","942c25bd3d7b023cd37034c6bec4e763"],["/tags/nodejs/index.html","6fba4a41799c04af07ae2f0f82a28cfb"],["/tags/noj/index.html","c6d4c17f85a19531cfb3c32e3b8aa9ad"],["/tags/opencv/index.html","3c4db2628f7e20fa3e40d2b99637b09a"],["/tags/overleaf/index.html","d0d8ab459816fc3ffba19eee87e3b153"],["/tags/pandas/index.html","065bfb6a8caa7f7cea0a88a3cebe44cb"],["/tags/premiere-pro/index.html","bb981993a7fcf8b35efac74ecc8e0954"],["/tags/proxy/index.html","803fe7e2537d55ec228c9f10aa69004a"],["/tags/pure-css/index.html","d36b1390377372fe73f11b9b37fab7fd"],["/tags/pygame/index.html","8e9383d95058d16c08fde4c119104657"],["/tags/python/index.html","9f6e165c8034fd48c9b93573a99fe61a"],["/tags/pytorch/index.html","fd4499eaa53e3c392ed586e4e6b29b49"],["/tags/reading/index.html","d22c817cb0477853175798d0e6240ce4"],["/tags/request/index.html","45f39adfc6ab4961200a16f54ca9b49d"],["/tags/requests/index.html","decdfad837cc9aa2d5688fd3d065445c"],["/tags/security/index.html","51246e1105022604a68efb5a1fe7b657"],["/tags/shell/index.html","8e5fc85325e07c6cd02ee073783979c8"],["/tags/sign-in/index.html","02ec08f4e63e4b5c9c5a423a5e7a4c03"],["/tags/socket/index.html","ae58b4163cbf3950d202ac3580f1c1a5"],["/tags/spider/index.html","0f9d1270f7bdea1166f71c5ced9122ab"],["/tags/splash/index.html","c92b7afc312b07be11ab0c566f87b3ec"],["/tags/stl/index.html","827e6363ecb19de66b6f6a1ed6e29f53"],["/tags/sumatra/index.html","f5f606fd9bd4ac01f5a4cfe0e866415f"],["/tags/superagent/index.html","b6855a57fc92520a7e090eae0700750d"],["/tags/tensorlow/index.html","47c425c3752b96ebb9c6fb03e722d06b"],["/tags/tex/index.html","9fdeabf50be5e968d967832272bb2b19"],["/tags/threading/index.html","1e491f4cbe0bd4b7fcc91e8831934510"],["/tags/tkinter/index.html","cb48b94367fe297889a689d6194b0ae1"],["/tags/torrent/index.html","215f6cdf3f738b80ce90166d361f6e33"],["/tags/tutorial/index.html","c92f5f2ba4f1c4a701fc5c8abf4b617a"],["/tags/typora/index.html","52cbbfbd1dc9ba491455b67c0fd2b4b5"],["/tags/uniapp/index.html","84fdcbef6916fa7f02e08a9e4be08f98"],["/tags/vite/index.html","1851dbafa5364e6c76bda350768e8043"],["/tags/vscode/index.html","556ac0989795576c9865909a3ab57eaf"],["/tags/vue-element-template/index.html","b93c6321b3da017b9162d2f95e3c1d6d"],["/tags/vue/index.html","4326db0c2caeabda3ee3861b63f51652"],["/tags/vue2/index.html","7406d96e0e395fd253c53a5ee7b52129"],["/tags/vue3-x/index.html","59bc28318399c7877de6f40d40c50577"],["/tags/wechat/index.html","401f41455189e0894b057dd3f53aea08"],["/tags/wm/index.html","4dc4a7dcd236d1ce0a4193e47b69e74c"],["/tags/wordpress/index.html","c7304f398f68bb51f741fcb0016bd26f"],["/tags/workflow/index.html","934949d7ce6861b9bcda3e3a7e040ef4"],["/tags/xpath/index.html","f73f22568cc4a6704304a18955e358e2"],["/tags/yacc/index.html","29b89638fafb30a669f5a5f23b25e539"],["/tags/zsh/index.html","def4e7b8dd10e4ff586fdd54086da7d1"],["/tags/七牛云/index.html","21ca92994c7c8c6d20fe20c33dae4916"],["/tags/函数/index.html","d8e46eced5de9e3fadb8267947cbd116"],["/tags/剪辑/index.html","27884aa0cd9e7d71ed605e27071fafc8"],["/tags/存储/index.html","f69a7b1a96e95ef6fa96a819d6a8f4b7"],["/tags/实战/index.html","fc18bad23b00a3e9de1d22bf0fc7f416"],["/tags/工具使用/index.html","e904f984caced76318653575d0b40aa1"],["/tags/建站/index.html","d949a43c5b2e431793c9f0d6e7c85c25"],["/tags/微信小程序/index.html","2bdbcc14d267231a4bb570cc4d611798"],["/tags/指针/index.html","8bd24c988130e592930ccc33f3a003f6"],["/tags/效率提升/index.html","d73012ba7a3e78cea134d97a2c1d7091"],["/tags/汇编/index.html","c31aac6b57480f4c3c935c7fc3788711"],["/tags/浏览器/index.html","d9c5dfbf8f0955ad00979393b047ddd9"],["/tags/爬虫/index.html","5cd8571e6548d70e3f5803a51573d82e"],["/tags/算法/index.html","490e6ce854d15bfb29f021e159633c87"],["/tags/编译原理/index.html","a44e0eb25045fbd84e6f6022e80c5042"],["/tags/获取地理位置/index.html","1abcb57a9e61e3c80d7f39093e6931d5"]];
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
