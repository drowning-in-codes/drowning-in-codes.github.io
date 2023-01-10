/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","bea689a5d621f5dc5a99f53297abd33d"],["/2021/04/20/稀疏矩阵/index.html","0a053f4dcb06abfe6756a5bf44f6a7f5"],["/2021/04/23/广义表简介/index.html","422e0b3615b3fc7d8f96abafe807c3e9"],["/2021/04/29/关于指针和函数/index.html","8b970f4ca593241ff18d3d4ce3da82c1"],["/2021/05/10/哈夫曼编-译码/index.html","886495a72e0182f9cab9746f584aee4b"],["/2021/05/17/数据结构noj_2/index.html","31afa039e0ee594bda848b9e6057434e"],["/2021/05/30/数据结构试验/index.html","f361e36d06861f9d92e02204ba587594"],["/2021/06/12/数据结构noj-3/index.html","51bbda296b0c3d973a73f4868520b0f6"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","e6434f36c1abb006bec3604d1daa91f3"],["/2021/07/08/课程资源分享/index.html","74e6c2718b0469dec9864ce1c38bf8b6"],["/2021/07/20/Scrapy-下载图片-文件/index.html","90d38fefebf335b56ce5da1002b85ec6"],["/2021/07/21/Scrapy-动态网页爬取/index.html","9e4b9af2ef398e096a372155031ccde6"],["/2021/07/21/疫情打卡/index.html","c08382b6efcca0e168a24eb6f05120cb"],["/2021/07/29/Scrapy代理设置/index.html","5675887cecf2764b5972d8499f20f96b"],["/2021/07/29/数据库认识/index.html","e7fffea9e65b265e946f62c4e36d5ec3"],["/2021/07/31/Python多线程学习/index.html","79657d74c461d22cc5218307210f0cf0"],["/2021/07/31/tkinter-requests练习/index.html","fa611ad1ba7e1b7694c2a734459490dc"],["/2021/08/10/Git学习/index.html","eafe12ca8a87acc364399e38d0e2e38f"],["/2021/08/15/pygame实践-1/index.html","4bfd33ee2952639b239c010e9d3c45e6"],["/2021/09/06/微信小程序开发/index.html","c36dac8bf9609e98ccd85f23ae3901ee"],["/2021/09/21/命令集-1/index.html","c4fcd795cd1e4896074585e3211833c1"],["/2021/09/21/命令集-2/index.html","2015f8baf50c0ab3bafea81ab3f6cfa0"],["/2021/09/21/命令集-3/index.html","1063d57fe43acf43e4a796ef28a4fd00"],["/2021/09/21/命令集-4/index.html","1bf4a4cea6c447cdf1b014ba7b7d443d"],["/2021/10/03/socket学习/index.html","749396f5d67e6a49e147cbb527c76e56"],["/2021/10/10/dwm入门/index.html","15a87bdd0c3020c0eb8e8c3caff0f537"],["/2021/10/10/安装ohmyzsh并配置/index.html","10d804ba44d40ed89797906c2c935608"],["/2021/10/20/css学习/index.html","22f96bd7dab02f173c903d14b2c06404"],["/2021/10/20/wm入坑/index.html","a8c5628b053a6241ae06bdd2eb5bb502"],["/2021/11/03/微信小程序学习/index.html","255bbce9527e09b0e71dacd5147d0ed1"],["/2021/11/04/css揭秘/index.html","359082a5ee3613d0664b97ef2aa9d8d5"],["/2021/11/05/css-练习/index.html","2ac80cc47295404807085a3b7f770aa2"],["/2021/11/21/命令集-5/index.html","f698863c73eb5cc63d167a1e3860938c"],["/2021/11/21/命令集-6/index.html","60eab7666099283014d331fbc819b35c"],["/2021/11/21/命令集-7/index.html","9a8d78ffcb522906e5de2bb72c18902d"],["/2021/12/01/搭建wordpress/index.html","1e91517d564709acda9082f0b1b7e9d7"],["/2021/12/08/python操作百度网盘/index.html","d30ee7e06e4967f90729ae66a63a1ff6"],["/2021/12/14/js爬虫/index.html","1444b25c7f04e9d923a6733f2f5b0dbd"],["/2021/12/25/为网站申请ssl证书/index.html","3d2f43cd5283ea1fdff4d907d4d9b049"],["/2021/12/29/使用七牛云为网站提供服务/index.html","1e01c81679c4522a1ba72f989731178e"],["/2021/12/30/jQurey继续学习/index.html","f6064b443c5463a62d77d9e3390aa7dd"],["/2021/12/30/jquery学习/index.html","2c6e5956ccd606995e98681cccba452d"],["/2021/12/31/vue学习/index.html","605fdc0ccfe4bd871cbbdda678838488"],["/2022/01/02/疫情自动打卡/index.html","d1b4eb0ea68a75db8dccf334bfbce083"],["/2022/01/03/javaweb初体验/index.html","1ece74c16f90399a1f597f5c8faa9c70"],["/2022/01/04/codewars练习/index.html","605e57fb12cf243bb78ecfe7d35b80db"],["/2022/01/05/Spring学习/index.html","e43b4f1e221144d08b589d09c57b6dc4"],["/2022/01/05/vue实战/index.html","50c91e44805601cb3d68754f74ca8d6d"],["/2022/01/08/gdb-gcc学习/index.html","85e5fc6a14bba951c2fbd83ebb55b217"],["/2022/01/11/python-opencv学习/index.html","db3d0d6325022628ab2997cd25d28c85"],["/2022/01/12/汇编实战/index.html","969906e0c91a48bec0d58fad8ecb67ed"],["/2022/01/17/pandas学习/index.html","3bef4068da2acec0dc7a2d4cd2b08051"],["/2022/01/19/可视化图的工具/index.html","47e58019819c28a7df4489fa77adb4bd"],["/2022/01/19/机器学习入门/index.html","c71a13b5bec0ba0592ac1057cd84e4a1"],["/2022/01/20/cousera-ML学习/index.html","71ed364afcb5687ff99e23c170bc71f4"],["/2022/01/30/typora解绑后出现问题/index.html","69fac9b1e88ebe2873df74bb9cdea297"],["/2022/02/03/NLP学习/index.html","68c690b51548198ef2ffb8e74119c1d0"],["/2022/02/04/Web漏洞学习/index.html","2cf2b01d8c046c251bee0b8060567b10"],["/2022/02/04/pyqt学习/index.html","3bdc5883e2e122f44dd41727684079ac"],["/2022/02/04/python爬虫/index.html","e244f61e9ccc7ba206e423b8b4f18b94"],["/2022/02/18/Electron学习/index.html","97a62dc6b07c192c8f500a619df82918"],["/2022/02/22/疫情填报字段解析/index.html","eab4741c8fd3883ded41b2f83958d9b9"],["/2022/02/24/Bomb-lab实验/index.html","a6964c5db72510e686dfc3968d9cf927"],["/2022/03/05/nginx学习/index.html","4e254a1309da39dc145d0e877ce4ece8"],["/2022/03/09/汇编原理课程学习/index.html","0b611f9d98798db0894cc4529e97634f"],["/2022/03/11/Keras学习/index.html","e30675f7ab291a7f742ddff6fb8b6e5b"],["/2022/04/01/graphviz学习/index.html","547acfe7da0ce27825367a17de7b29d3"],["/2022/04/07/django学习/index.html","fcd17af0924e0d3cb88679575db0fc51"],["/2022/04/11/密码破解学习/index.html","cb8db8750463a89896a50ce1b3583622"],["/2022/04/12/flex-bison学习/index.html","4a088d06aa85ecd6a55f1bb289d287c6"],["/2022/04/15/pytorch学习/index.html","cc5425f476a181eb5f9e7555424d4a0a"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","84c1b6d52e18d1da977c0a1715c2835f"],["/2022/04/23/写一个音乐播放器/index.html","0924865129d28cc79ee19f88dbd9de54"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","6f58bf515411a531879833b3a0e60cb4"],["/2022/04/30/GAN学习/index.html","4f62a8dea28bba8206d18680f25bc3f4"],["/2022/05/02/html精学/index.html","ee8c0ea83da05190bb9cf885229023aa"],["/2022/05/06/write-a-compiler-by-yourself/index.html","b40093a486f3732ad5adc5c3045a78fe"],["/2022/05/30/acwj-01/index.html","3ecfca4fbfa9439a86972c5e001f8584"],["/2022/06/14/animeGAN/index.html","790a7397cba9cbcae87a6e0f27c975fb"],["/2022/07/09/c-与算法学习/index.html","58f490b2025390922e1832bf328c1a3e"],["/2022/09/19/flask学习/index.html","a997255359500feca791362ca8b6f4a3"],["/2022/09/22/cs224w学习/index.html","a17c6503b3d35bd3eda4187d5f507754"],["/2022/09/28/记录一次wp重装/index.html","cb59a168e2643273366a00c62b04b550"],["/2022/10/01/Obsidian学习/index.html","e41a303db3b77b75836087a7dd346166"],["/2022/10/08/vue-element-template实战/index.html","1c1b3bd3fd8b3c2e39a517063b900f93"],["/2022/10/25/vue网上商城项目/index.html","0f7aa117426b710dc09a94327ca479c6"],["/2022/11/11/leetcode刷题记录/index.html","49831b6e3bba2549445a7d37f916a264"],["/2022/11/11/使用overleaf优雅地写文章/index.html","82cda01a6241fc7b27a26b2d45b19fc9"],["/2022/11/22/磁力链接与RSS订阅/index.html","016b2dc01dce92df565008ac9d8401c2"],["/2022/12/11/uniapp申请获取地理位置/index.html","a4de4bbb9f4b72396e8a6bd81be02b7e"],["/2022/12/26/pr剪辑学习/index.html","1c41f35359b4fb5e1dca9af3390013d4"],["/2022/12/27/css中的flex和grid布局/index.html","b42223ff878b2cc90065e12d68162540"],["/2022/12/28/Flutter学习/index.html","490ce0a20301546de1b159412a305ed8"],["/2023/01/01/美化github首页/index.html","e3ef866117007577c99282ff048a7cfe"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","524f6560e5b7cca880273c155372e694"],["/2023/01/04/构建微信快捷发布文章工具/index.html","af412812da91456dc69df1fbc30b18c5"],["/about/index.html","6b58251ec2af0b40558662f19c557730"],["/archives/2021/04/index.html","7a16cb4c64362ce2c632b459281a8fed"],["/archives/2021/05/index.html","da2c2a2832e8408cb3fa601615bff2dd"],["/archives/2021/06/index.html","3e774e6287d69923c7ebdc9f0b52a63e"],["/archives/2021/07/index.html","3b02a1773f9de37eb0e5006b93b8f374"],["/archives/2021/08/index.html","4ca430174a3304ac62fbaa522246c7ac"],["/archives/2021/09/index.html","3f47ef79cef5b0d63fbb7af0ad218957"],["/archives/2021/10/index.html","65d385a9c546151a54d2d0e535dcb7d1"],["/archives/2021/11/index.html","988733c5768a8ceb895b429f015332e8"],["/archives/2021/12/index.html","959c44047dc883c0ab9b69c207618fb5"],["/archives/2021/index.html","e3c77c4b0644de1f9c78292ae13512d7"],["/archives/2022/01/index.html","c12a9840303d7a69a8b19996bcb0fae9"],["/archives/2022/02/index.html","2a6d680436319830b00bf2ddbc61c778"],["/archives/2022/03/index.html","703cc442c96923cdd475a75b85b4822e"],["/archives/2022/04/index.html","bde456438bf033efc3ac256428e53ceb"],["/archives/2022/05/index.html","244a6875ee66aef8998fea8810ced8e4"],["/archives/2022/06/index.html","b7cbefe79ad993bce80d6e2349de6d45"],["/archives/2022/07/index.html","8fb1844960659dddc702b18f79972c2f"],["/archives/2022/09/index.html","9ce245d91462f5e5cf6ca7db89be79aa"],["/archives/2022/10/index.html","8a9af0cc859a606cc34579bc0f27cc53"],["/archives/2022/11/index.html","137b8c783a9f2f2c5244390b273818d5"],["/archives/2022/12/index.html","c56f9ce63bf0a13a0a82c367dd5245b7"],["/archives/2022/index.html","d5c3e0bb8472276aec91343fe19bd642"],["/archives/2023/01/index.html","b9aa00f1b028a8bdd9910eeb8810feef"],["/archives/2023/index.html","e4b9daae82fac954e9b3c05bb1674f4c"],["/archives/index.html","8e85bf22967c3e83cda2df3ec42dd11f"],["/archives/page/2/index.html","2ab7632982e9b5e2bf3175c3d49e5fe1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","8e9eee8ff9a9185ca423b57cd92c047e"],["/categories/ML/index.html","54eb690f54845c95f4462c213abb255b"],["/categories/Nginx/index.html","f46630fe00955f78979eca10bb25d72f"],["/categories/Spring/index.html","d5c2afa7398cfd85fe752ad1e5db14f7"],["/categories/course/index.html","ae57ebcc64c078a2f2a2389e4cf262e3"],["/categories/django/index.html","b0afd9b9983fed799ecb469c577e7f98"],["/categories/fun/index.html","8951287bf2f8676fa00c7747cc33cae7"],["/categories/gcc/gdb/index.html","7d28d7d2dd7d830d8aa48826cac7a676"],["/categories/gcc/index.html","cf8d7390d2469e0d307b6ce0a7c08ba0"],["/categories/index.html","ac22930436f9f03c982f96b7785bac0c"],["/categories/java/index.html","b9c36f038a44421ef992bff4eb3a78fa"],["/categories/python/index.html","c8b73b7b64ac439eeba89347c9623604"],["/categories/study/index.html","6a66fc79cf6c13f7a56c52f1807e9d93"],["/categories/vue/index.html","3a16302c692385cf636b0e7211449a09"],["/categories/误区/index.html","02a6677718999265ca56c337a7dfe0dc"],["/commonweal/index.html","7e1bf480b69dd13ea7e6ad202c7588fe"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","71ee78c89318b6782907cf5baf39e678"],["/home/index.html","74e6185b4fdea542c6a52bdee3347a18"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","14d66223e51e14b449c398ddaa5981e4"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","6cc7e0b151afcf7d999cf3ba75da0e05"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","5faba91339c6748731ef6779c1f985f7"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","98c8f16a53e013bd9fbebd36185c98a0"],["/page/11/index.html","b652a054a0f61f8d7795429b666b89c7"],["/page/12/index.html","591d24e71201fd845148b9fe65580582"],["/page/13/index.html","c1dc6c830adec7ffb5c7610a9536dfc4"],["/page/14/index.html","973f92a4cc54f96b2742dee6cac008d9"],["/page/15/index.html","b48c33e1be57bcd6ee4d347d80f96467"],["/page/16/index.html","c8479bf97fd23021a2baf1ba96bf1521"],["/page/17/index.html","52758673969c8bcc1b96e061f7f89946"],["/page/18/index.html","c83ec54372b6e73aaf7d8233088f79c6"],["/page/19/index.html","36e755c8c8fe8e78b3a41f412c3b24d9"],["/page/2/index.html","6b7c14666cdab2e1d228c9fb48b03874"],["/page/20/index.html","3d0f4be7eb7e9433eaa6635a59e54137"],["/page/3/index.html","340f28729bbba05078e37cefd5f33693"],["/page/4/index.html","ef8ca5e00e2ca5f3a36d83ee0ee045b2"],["/page/5/index.html","5817a3262553507e56cd0aa310a34746"],["/page/6/index.html","1ef6a42e7b3d0ddad9496d60600dab09"],["/page/7/index.html","082ebd1683caa7697838584027e81296"],["/page/8/index.html","60fa661dcc8bc3e323b6fe16ea8dd1e0"],["/page/9/index.html","83139487e097b6eefa6bb3cd50c31153"],["/resume/index.html","11be34271b0c01dee8bc3ecac70d8221"],["/schedule/index.html","0faddbe45a34732f6f2e16dc1539fac0"],["/sitemap/index.html","302a182f1899e1a561fa84f80f6d84c6"],["/sw-register.js","c7759f38b6033a2cfadca8aaec975246"],["/tags/AI/index.html","d39263d1e6f69a83443fd1dc7402fce7"],["/tags/BT/index.html","dd64bb9ddda9a7538587675b423eebf4"],["/tags/BaiduNetdisk/index.html","74e4dc4045c4ac4f25b546176cb2f069"],["/tags/Bootstrap5/index.html","73d024500b06cb8ad6bedd157c2a9e03"],["/tags/CSS3/index.html","cce28eece4bd239b1762b71f124a0146"],["/tags/Electron/index.html","99c366abb5bdf89e622d009b9aa5c63e"],["/tags/ElementUI/index.html","9ff516c07ec059346fd39607303520ff"],["/tags/Flutter/index.html","bad5eb67a9f288430a48596e02463b7b"],["/tags/GAN/index.html","44c6944e47d74d6f137f7812bfec6121"],["/tags/GUI/index.html","5048ad15ca7692cb34fc1518128dad17"],["/tags/Git/index.html","31f8038facbf1a26677eaa7390fd9d9a"],["/tags/JavaScript/index.html","ff45a96c32a22d64c58d6d7d70000df2"],["/tags/Keras/index.html","16abc6440f76eecb45005071f8fc9532"],["/tags/Linux/index.html","e97f1b0be8cff01b6bf297ce3af4b65e"],["/tags/ML/index.html","fc0ae9ade664251dc3dc09fcd47cabb2"],["/tags/NLP学习/index.html","452a24f0f44d403ae232a8a2fd31c243"],["/tags/Nginx/index.html","785b6217ee8ae7280480be67b6deb23b"],["/tags/Obsidian/index.html","e61c506233cb554cfd2b0329fcfa497e"],["/tags/Qt/index.html","851cdbabee26e497cbd0c0387dba81c4"],["/tags/RSS/index.html","c425a67a0a2dddabb1f7d12a9f65a9d6"],["/tags/SSL/index.html","0c521f572fbf0f04c8703f8a6c39d955"],["/tags/Scrapy/index.html","20c11e62006cf6c4ca20786248ca4279"],["/tags/Web/index.html","ef1cd4292783e2347443f3f04f5003e3"],["/tags/algorithm/index.html","99776d4ddec269050f3d465537ac79e3"],["/tags/bison/index.html","993d04076983b314cebd421a0403b2f3"],["/tags/bomb-lab/index.html","d6e305f46bbd1d05fcc92e965b3491f4"],["/tags/c/index.html","c48cb63a2a7f6e220d2bdfd5d3f4bef8"],["/tags/cheerio/index.html","d796a4281840febd24afd8b6278762ca"],["/tags/codewars/index.html","dec1a737c22b2bbdb8173587164f08aa"],["/tags/compile/index.html","79ed764fd078b2ae91b12376472d2f07"],["/tags/compiler/index.html","18274df4c0bb83be3ebcd09fc3296095"],["/tags/course/index.html","676bcdf8d36b6fbc8acc6ddd812ae8eb"],["/tags/crypto/index.html","a3a8db6d1b79bb24879c81dcc226d40c"],["/tags/csapp/index.html","8859f29026588caa46ad1aa5efe8ff0a"],["/tags/css/index.html","f9f9c81856b742a7c5539e48fa2c9d40"],["/tags/data-structure/index.html","cb8dccb115c02e8d34328857bf6724a5"],["/tags/database/index.html","7816b4d1aa3515312a11071bdce4b1c3"],["/tags/deep-learning/index.html","4f192e9772037f9e68ad23129386afa0"],["/tags/django/index.html","39cbab71237f6c2938bcdb5015e470c0"],["/tags/dwm/index.html","7aa0e1ad3bd8b6e89de576381a6b432d"],["/tags/exercise/index.html","75cedb42c560fd4eaf89c19e50a3ab12"],["/tags/flask/index.html","fea7d7071993145b2418b5d809c41a40"],["/tags/flex/index.html","c97323f0541e277ee04e816e934e61b8"],["/tags/front/index.html","bfcb83b94f0e19f0f4470e648835ab6c"],["/tags/gcc/index.html","ea943859085c3ebaf530d0ea02526c66"],["/tags/gdb/index.html","989327fcc7c9e6cb17fa4a8b45800337"],["/tags/github-profile/index.html","6e7cc83f557c0bbaacdc327274ae628f"],["/tags/github/index.html","f42732c344ed535a666e788f452e48cb"],["/tags/graphviz/index.html","029868d4f1ef6b8a9d002c3c87792a76"],["/tags/grid/index.html","d54c04f845e90315f00b4be11a6d2932"],["/tags/html/index.html","806b6ee3528b7e45d5936b6c1ba0280b"],["/tags/i3wm/index.html","72ed09536e6944c5a10df21d9fcbb88b"],["/tags/index.html","60b3f194a9abeae2072de5682a348a2d"],["/tags/issue/index.html","977ba9bc505e5a33b4de8fa998d8b277"],["/tags/jQuery/index.html","5b59caf3d8ccb621200246e2b8805693"],["/tags/java/index.html","a9504a920f07f046d865bcf5573da913"],["/tags/js/index.html","8ef8bc90b23bd2faabb90666fb0b1f62"],["/tags/latex/index.html","ccafe13a6654bad36cd6c4ff781b5e68"],["/tags/leetcode/index.html","8a5b0f39f19cd8d8b419996e6d068cf0"],["/tags/lex/index.html","d1b73139adcf64ee7219f254446daf72"],["/tags/material/index.html","1a429ed59f90d41a41ec16cc161d6b7d"],["/tags/music-player/index.html","3b7985111e820a8927bb191ce2657833"],["/tags/nodejs/index.html","a80eae72706f0e20f0c77d82e2984c85"],["/tags/noj/index.html","a349ceaae6480c36bc9039f54dd8bcbc"],["/tags/opencv/index.html","18b01ee79e7621e6d82e51ca5bd8e4c8"],["/tags/overleaf/index.html","b50f69a13880f19e0b03fc3634a3024b"],["/tags/pandas/index.html","69054316b687761ba3b4f8525b1cd198"],["/tags/premiere-pro/index.html","4393f90dec39033dbcb36f0d674d70f1"],["/tags/proxy/index.html","09723ebbda70e90309b836f87e7ae9f1"],["/tags/pygame/index.html","7242b0299a156921a204ff0a1b30e858"],["/tags/python/index.html","0b553ae4b35361f51d3c2dc6045f80c8"],["/tags/pytorch/index.html","ee47446ddd1ccda643937fa18143083c"],["/tags/reading/index.html","6e20b77ded6898715ce88297c1b00cab"],["/tags/request/index.html","d7ea0dc6f58700bdaf04937a70a4c963"],["/tags/requests/index.html","5b321a1126f13020cf88bd08c88d3130"],["/tags/security/index.html","31416c6fa201e3e140b6199c0486f5f5"],["/tags/shell/index.html","b69e1dbcc44a95887321584eeba108b0"],["/tags/sign-in/index.html","623aaa2aa6be3c9778f14b00be409400"],["/tags/socket/index.html","397cf219e2c115ba1c0b89746c28173a"],["/tags/spider/index.html","0138cef1f3abe76ad9d5e06b954cb777"],["/tags/splash/index.html","2beb7e31467a3371b071aebb78e3c416"],["/tags/superagent/index.html","409461f8124d94b21a21127922611c56"],["/tags/tensorlow/index.html","63917b9b605cedac6edee34425f7a0b1"],["/tags/tex/index.html","587d5cf3767d48debd89d262e2318ef7"],["/tags/threading/index.html","7b5448462fcd8a0d944c9172261260e7"],["/tags/tkinter/index.html","af43f77d5e949bd568f7a921126c7706"],["/tags/torrent/index.html","ee143d6a74b4a7a664f82a8ff9cc1bc8"],["/tags/tutorial/index.html","c40a03a62ad9fe021bbf02cf3625ad11"],["/tags/typora/index.html","192037641a193b105f90d53e41394950"],["/tags/uniapp/index.html","4b20d41803f3f8589b81c77d56739849"],["/tags/vite/index.html","88642fde5128090d7558323b8596aab8"],["/tags/vue-element-template/index.html","15a38ced1ef9fbaa9dade19bcb8401fd"],["/tags/vue/index.html","7ccf8c8cd246c50818bdc5dda63a387d"],["/tags/vue2/index.html","bd7fca2f8d403d35d31a542c7e140a17"],["/tags/vue3-x/index.html","fcf4732a9fbd1da55a552be960c26c0c"],["/tags/wechat/index.html","e3933dd4a7f40379edaa491589545b29"],["/tags/wm/index.html","c488d24ece0eec001ae236f52f23e252"],["/tags/wordpress/index.html","49ad150a16b8c8eb5936719e3ab9198e"],["/tags/workflow/index.html","0bebce2984f7e8ad8731cf620ff807f9"],["/tags/xpath/index.html","f26174b9154eef5e81c590472e93da2e"],["/tags/yacc/index.html","6ab089a3abb1681fc02f7e12e4698a1a"],["/tags/zsh/index.html","c41fbd1a528600c319e8c3090a544fe8"],["/tags/七牛云/index.html","9dfac583d6fd4f1faf048452135a2247"],["/tags/函数/index.html","2f35fa2e3aa518489366a71d84dafb5d"],["/tags/剪辑/index.html","a53042281f8faf740409ebaf1a51bb0c"],["/tags/存储/index.html","b329d87f985e014874fdba9800b6c8d3"],["/tags/实战/index.html","078a2c36f88e6c8694e8a253bc018539"],["/tags/建站/index.html","42067261ddc6c3cf3824b9aad4feb09e"],["/tags/微信小程序/index.html","39c298ead6958b0119fa2a2c225fd57f"],["/tags/指针/index.html","9bec9d89a1e78f81980815b33b8c65d7"],["/tags/汇编/index.html","09ebc8fc510f547692baa0a8e3f96c9a"],["/tags/爬虫/index.html","f7c9fec4ca5dbaddb8587af69028423e"],["/tags/算法/index.html","c25dff603fdaa498899a3baae046f133"],["/tags/编译原理/index.html","07f281f3fe2976b8303e2105d70975d8"],["/tags/获取地理位置/index.html","7cfb7d3096a586a10581706681e54d9e"]];
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
