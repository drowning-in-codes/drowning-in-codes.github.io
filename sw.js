/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","65054c61a6a25cf9b5c062a9d2659d6e"],["/2021/04/20/稀疏矩阵/index.html","0e12afce78902e7b67a700f49ae6644b"],["/2021/04/23/广义表简介/index.html","9a702953bb5bbdd38e1199861098de0a"],["/2021/04/29/关于指针和函数/index.html","85c43872231b8e8ef0e0effd330dfecc"],["/2021/05/10/哈夫曼编-译码/index.html","f05f1c4e7fe4bea5acc5ad10d1dec584"],["/2021/05/17/数据结构noj_2/index.html","7b96a49e8d89208337b199a03596e594"],["/2021/05/30/数据结构试验/index.html","ab69bc0804da08dcb011e8b1de69ff14"],["/2021/06/12/数据结构noj-3/index.html","3415adfad778021342538c6553e12077"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","3dab446b1c87d79223baa2147cfaba5a"],["/2021/07/08/课程资源分享/index.html","3ce8a304f853066267d0d10c2677ff2b"],["/2021/07/20/Scrapy-下载图片-文件/index.html","f6940ec6c6b39b54f1a5a28f8ff7c368"],["/2021/07/21/Scrapy-动态网页爬取/index.html","4b1ba4d70bc5f3e571f7ee5154e90b02"],["/2021/07/21/疫情打卡/index.html","ff46b61115d6528eef7e7c9c99840826"],["/2021/07/29/Scrapy代理设置/index.html","ab2f208d659c41826dde12f3cb6e8cff"],["/2021/07/29/数据库认识/index.html","858447c74bd4a653bdd0fc32c7714f0c"],["/2021/07/31/Python多线程学习/index.html","cfbd46ff652e5e9da6caad83c43441e0"],["/2021/07/31/tkinter-requests练习/index.html","9a1559ec5c7b622d184b6f2b02b13a41"],["/2021/08/10/Git学习/index.html","7ee20976882e21a0a59fe5b74a87c7f9"],["/2021/08/15/pygame实践-1/index.html","a6b9521e922d38ce86fa321b8acda233"],["/2021/09/06/微信小程序开发/index.html","25e03462d46e17c85069c2df9bdc47b9"],["/2021/09/21/命令集-1/index.html","d26674ccafac150e004954d64096e993"],["/2021/09/21/命令集-2/index.html","07b10d1d868ec397fb11ce24bc561b73"],["/2021/09/21/命令集-3/index.html","fbc834562901d97a9611f537fa609a86"],["/2021/09/21/命令集-4/index.html","6c260b806215e52bccd0d37266bded09"],["/2021/10/03/socket学习/index.html","8b3ddfc6a3dc6af24b82cde698a4b182"],["/2021/10/10/dwm入门/index.html","ada88dbf0830a59c2cd4069a265272fb"],["/2021/10/10/安装ohmyzsh并配置/index.html","1f194ff9e89fdb5403f4876fb04470e7"],["/2021/10/20/css学习/index.html","6257b5255457063cc16b495709ddf45d"],["/2021/10/20/wm入坑/index.html","9f519e030e3601870bc8916e17c003de"],["/2021/11/03/微信小程序学习/index.html","2d975c6b449947c5c0e81b8970bd2354"],["/2021/11/04/css揭秘/index.html","374e05c19303d24c88189d3f614a76c8"],["/2021/11/05/css-练习/index.html","9b2be2800173d7f2ee6ad81f1fe79652"],["/2021/11/21/命令集-5/index.html","a3fe30b989040b5e2d67d67bf9149984"],["/2021/11/21/命令集-6/index.html","7d4857de450578b59b85eee6dfe90b3a"],["/2021/11/21/命令集-7/index.html","77907976dea5d10ce6442a910fe8e9bd"],["/2021/12/01/搭建wordpress/index.html","722f5a0be1a5352fbc5024c42298cc67"],["/2021/12/08/python操作百度网盘/index.html","275e7d330983c1bb4dc6f0261b3da43f"],["/2021/12/14/js爬虫/index.html","bdbe0d14810e881c394c64ca2a6d0e81"],["/2021/12/25/为网站申请ssl证书/index.html","6122c0d132373dc6caa29cac94e5d0f7"],["/2021/12/29/使用七牛云为网站提供服务/index.html","394302818f8dbb1b421e160077e81e6a"],["/2021/12/30/jQurey继续学习/index.html","01405ed3995621edb13dfd7ff53454fb"],["/2021/12/30/jquery学习/index.html","4aae313941b124e6346bcf8fa144cb0b"],["/2021/12/31/vue学习/index.html","a1fb56a487b035a6596e92d550ee3300"],["/2022/01/02/疫情自动打卡/index.html","4508f735ffe221b7640af200661b176e"],["/2022/01/03/javaweb初体验/index.html","8f73c0c657df14d48e392ff441c8bfc1"],["/2022/01/04/codewars练习/index.html","1563b76e99e8776e9d0d2d8ab350223c"],["/2022/01/05/Spring学习/index.html","fd79cf305966ceb6e29947b64287d0bb"],["/2022/01/05/vue实战/index.html","9c7065149ded6170b5b2d24f092ffeb7"],["/2022/01/08/gdb-gcc学习/index.html","0ca5254fa78c5b3f20795c0b0f55a3b0"],["/2022/01/11/python-opencv学习/index.html","511503dcf71a0c347ce335aec38a0805"],["/2022/01/12/汇编实战/index.html","de4302d77d32073f70e09d10053a1ee6"],["/2022/01/17/pandas学习/index.html","a6a5c97ab096966b937dada984b5f47a"],["/2022/01/19/可视化图的工具/index.html","2a7942f5bd52bb87a5f233ed24ef4172"],["/2022/01/19/机器学习入门/index.html","fb9e0ff23a39a01577821916f03e217e"],["/2022/01/20/cousera-ML学习/index.html","26e64b0f569e15d98472492e32272103"],["/2022/01/30/typora解绑后出现问题/index.html","a87c485b2a861f69d2ae3af45c979205"],["/2022/02/03/NLP学习/index.html","587e3095f81c64503e5bd839b4f68507"],["/2022/02/04/Web漏洞学习/index.html","3af76b94dc3d25ce3f8f3fd7b994f78f"],["/2022/02/04/pyqt学习/index.html","a7d88b2b99a11adf33412f72cf46b7e1"],["/2022/02/04/python爬虫/index.html","4b46b018742ce2259c51417944a6e335"],["/2022/02/18/Electron学习/index.html","f5fd92175e66c6ece6c0422e52c19f94"],["/2022/02/22/疫情填报字段解析/index.html","e6cbbd575624342486187a2bb4368007"],["/2022/02/24/Bomb-lab实验/index.html","f5b98cd663ef950afd30d9fe724ae283"],["/2022/03/05/nginx学习/index.html","dbf4a5c73ba80ce8eeb6d748b00a319b"],["/2022/03/09/汇编原理课程学习/index.html","2000c4f0210be8b26f950b24be2e7d45"],["/2022/03/11/Keras学习/index.html","cc621d9798170bf31a17092555bef846"],["/2022/04/01/graphviz学习/index.html","3d9198d99291035003717fecd189e531"],["/2022/04/07/django学习/index.html","890487854aa8303303dd13be645fbd8e"],["/2022/04/11/密码破解学习/index.html","36b48f01e0d4dd47d270d14383eb785f"],["/2022/04/12/flex-bison学习/index.html","95528efc25a90e79f16ff96b41e1204d"],["/2022/04/15/pytorch学习/index.html","29bedd2dd521b84b8bb6727e5829fad5"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","73eaa4659e30aa834885def3273f8816"],["/2022/04/23/写一个音乐播放器/index.html","5a046c9c7698049370d515b01a196e7f"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","da6daca7caff30eeb15836e04d630523"],["/2022/04/30/GAN学习/index.html","4bd3a5984d7dbbe39ae9eccf4d243fbc"],["/2022/05/02/html精学/index.html","479eca65155841b6bcba636d181ac8b4"],["/2022/05/06/write-a-compiler-by-yourself/index.html","5be0e08530050099bc9e01ac25544e58"],["/2022/05/30/acwj-01/index.html","4a81b34b68ad5d184557b0b2b97c6ea3"],["/2022/06/14/animeGAN/index.html","fa9ee90536c6345f5a6f66124462e7e8"],["/2022/07/09/c-与算法学习/index.html","704bf88371df16be4f64ff77b6e2f53e"],["/2022/09/19/flask学习/index.html","a698d4ab4a7bf050860b2dab1d868063"],["/2022/09/22/cs224w学习/index.html","64b8ee73fb0fa20230d77c48a21b8c05"],["/2022/09/28/记录一次wp重装/index.html","2c5b025004bdc170af47e0f73b963688"],["/2022/10/01/Obsidian学习/index.html","01f0d77c10a2af844fe75a6ac3cdd01b"],["/2022/10/08/vue-element-template实战/index.html","aee4803159f42dfc5b0cddbb91b59f6e"],["/2022/10/25/vue网上商城项目/index.html","8802c0805e9af84250362bdcb7e9d144"],["/2022/11/11/leetcode刷题记录/index.html","35b0f0617cdd5878bbeea72e32a3d9fc"],["/2022/11/11/使用overleaf优雅地写文章/index.html","cd89c10f26e99f62c044bc9925110feb"],["/2022/11/22/磁力链接与RSS订阅/index.html","660d35f33b99925ee17ee9fdd75e4d3a"],["/2022/12/11/uniapp申请获取地理位置/index.html","5cf8fc7474eb6ffe8542f6dad3ff0df4"],["/2022/12/26/pr剪辑学习/index.html","d283e3982435c54415b7eafe673fed25"],["/2022/12/27/css中的flex和grid布局/index.html","8150d680ce70dd913c1d429c7bc251fd"],["/2022/12/28/Flutter学习/index.html","248eea4145cec6d53a4e5ca60bf3b4b0"],["/2023/01/01/美化github首页/index.html","e77ef1df6939294df4b54cff908fbb6c"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","1580e6bb1f9f5809a860216b60f657f8"],["/2023/01/04/构建微信快捷发布文章工具/index.html","ae478f14cd331e7754a8d83aafc0d9f4"],["/2023/01/14/dart学习/index.html","0b9e34a3c9da2580b6a506029e0bd42a"],["/2023/01/23/闲置服务器BT下载影视/index.html","824e3583788ff3913ca047f6f625f2ec"],["/2023/02/07/TotalCommander使用和学习/index.html","6c5f5ca2dcbd831b6d19661a984c264b"],["/2023/02/13/docker学习/index.html","6233ebbc5e0168bb4c342a2d0dfc3664"],["/2023/02/17/DLHLP学习/index.html","a1107d0c947b0380a77a609a54272f91"],["/2023/02/18/学习purecss构建自己的css框架/index.html","a49e8bbc22d4e8cde5816178bdc5a082"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","9b3d2447e57af87c516cefb931c6c4fa"],["/2023/03/05/STL学习/index.html","e9fe0b663cb18e9e25140dac091ad232"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","b85b689d41310ac84fd0503b7e1c9ffe"],["/2023/03/23/实战写浏览器插件/index.html","bc23c777a89ec5dbcb35be2e002c8e50"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","2795058010f0c7d73d2711de911a0536"],["/2023/04/02/EndNote基本使用/index.html","8e6f4ac0e8f9849bbca0399b16b9ab2c"],["/2023/04/04/mne处理脑电数据基本使用/index.html","157a136ff87feb2d0c52d04d66bd4cd2"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","8e52033ab2dabb90df707059e3c493b8"],["/2023/05/02/python中的logging模块/index.html","97bef59611cbd7decabfa1a9e28f9ddd"],["/2023/05/07/python的特别方法与装饰器/index.html","64d3a967fd271673ede24fb7738b9438"],["/2023/05/20/Wox插件编写/index.html","2fa74e2438e3896053a39db1a6c46996"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","a7a0d95cae37d703b1fc7701b562a311"],["/2023/06/03/深入Clash配置文件/index.html","5cb7c032b9657bfa51440bb8ce35e268"],["/2023/06/10/node的包管理工具介绍/index.html","2e32e5f10bdb048ac80c33caec9d77bd"],["/2023/06/12/AI写作工作流/index.html","9ed731aa8565a6d1db10b7f86b0dfea9"],["/about/index.html","b9eb3d580f8169843e02509fc4528500"],["/archives/2021/04/index.html","b9fed79000feccd8948eae3b67538b71"],["/archives/2021/05/index.html","493f457fd5f70e7bcf934036350d40ff"],["/archives/2021/06/index.html","8fa20b2ba794505c92cea1ce9383fb59"],["/archives/2021/07/index.html","d61ff3b9a73b84142ac3c8219e761cad"],["/archives/2021/08/index.html","1d2e3cf94d3c2d58fa6c4550ed56e7f6"],["/archives/2021/09/index.html","7756b5220db113afefb3b91e050db46b"],["/archives/2021/10/index.html","2169c3d70951a94ff05d31f2c7fbfd18"],["/archives/2021/11/index.html","d3608e406fd6c6ad90d86c116461b9f8"],["/archives/2021/12/index.html","dd163cdb96ebf360fb33d5cde7a42e2c"],["/archives/2021/index.html","233e74d064fd789e8e27ce2c3527ef16"],["/archives/2022/01/index.html","f41da2452e513eea36a0f386c0e590ee"],["/archives/2022/02/index.html","8c20214e7f4bda09daf34ed936453585"],["/archives/2022/03/index.html","b9ce46c76de53474cb95b4602627bada"],["/archives/2022/04/index.html","6d1135ebc4753d2d35340a6a92032926"],["/archives/2022/05/index.html","6c4ecf7b9641a5565476540241dd4e5a"],["/archives/2022/06/index.html","e6ddf10263c5102235f0e63d30d18faa"],["/archives/2022/07/index.html","7620cf82715b98bccb45e8428c3d0c3b"],["/archives/2022/09/index.html","8e06a6718e93679a29e50b1dcf3476db"],["/archives/2022/10/index.html","fe483354cd28a60bf2732678f583ee3f"],["/archives/2022/11/index.html","b644846f9a584442aa1e72474f9c8486"],["/archives/2022/12/index.html","f4693125e84dabda32fd44664d6e3cd0"],["/archives/2022/index.html","dfadf5602691b15f4dd1f88a2d6f57d3"],["/archives/2023/01/index.html","568dc97ea4c5cdde4c34f56b7d4fa710"],["/archives/2023/02/index.html","815744ae883c9670c94eac0e40cf3d2c"],["/archives/2023/03/index.html","dfffb77e90ac3a6e33bc8486843c07b5"],["/archives/2023/04/index.html","0c931c1a149d3c85c4a65253fc9bcded"],["/archives/2023/05/index.html","f0a87784bb2e92ed1fdefc52c75565ec"],["/archives/2023/06/index.html","69f2474650d4f08431c3d5be30495bb3"],["/archives/2023/index.html","ebdc48fae412f8379afb426f86fd9323"],["/archives/index.html","9add0a4189c0541326435951c64647a4"],["/archives/page/2/index.html","bcc66d703c00a0405c15f77ee00ebd20"],["/archives/page/3/index.html","5f0d95bd4e494df2e773695b55b011d0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","397d53ccfa3c875d1130ac2620465f10"],["/categories/Linux-study/index.html","ceeba664d9062fd705353256b54ee87d"],["/categories/ML/index.html","df3fbb93ad6c8a859aa2a032171dcdd1"],["/categories/Nginx/index.html","cdcfeb0b0798be6d306e36c32388da52"],["/categories/Spring/index.html","71bb40821d70f7f5f18eef97ba36eec5"],["/categories/course/index.html","118d8e79558e59621b55c686ee6907d6"],["/categories/django/index.html","111470928f2704a8c3213894d968e326"],["/categories/fun/index.html","405793cec09f29b42216f4296b63358d"],["/categories/gcc/gdb/index.html","d48667324cf43ab1a98a9a3e245915c9"],["/categories/gcc/index.html","ef540800741f45324ad1540de5b3b1f3"],["/categories/index.html","370c774d1fab5ba8e328a62aa5d43e69"],["/categories/java/index.html","0832a5874b3686f9e9d68f49f3576b4d"],["/categories/latex/index.html","17311bbb00aacc2f67583372664d7847"],["/categories/python/index.html","77a1a96872b9e6a99d29ffc02bd55107"],["/categories/study/index.html","2976fc341efbdd209765c3fc383a6d8c"],["/categories/vue/index.html","2ac7197ae15550c94326c0562c338e6c"],["/categories/误区/index.html","54ffe1b8e95a6479261161ec8875f74f"],["/commonweal/index.html","5f93a4b736fed4733491fe522c5036ab"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9eaefbbd6bd8c17942cfade7010717b1"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","46e777c7dc03439ce6b595a1877a3424"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","0ce03c00902b45ebbca32f2f65af0edd"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","0214160a8b113a90cd1be12cc9c0c77c"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","c0188c84af2a6903ca92ffe55061aeda"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","c3004c74d30ecf99d26dd48f322788df"],["/page/11/index.html","86967e48fc149de1495b25fa5e1588af"],["/page/12/index.html","a1d3895f1bb3c3a229d4c98b88e32039"],["/page/13/index.html","c37a8f21fd629ca874dd8452eb63c2d6"],["/page/14/index.html","2fba256d551a8ffef3c3b4256ebca1cd"],["/page/15/index.html","54542e3e50d39cd481f7064af57da1de"],["/page/16/index.html","d80dd345b58b0125505da557113cca0f"],["/page/17/index.html","6d60fc165a041f174fb90a63a5972f66"],["/page/18/index.html","39209837f07c15d3f18fecceb20edbbe"],["/page/19/index.html","37321b7b7f18ec4827935332d54d6208"],["/page/2/index.html","affcd27df97d3f44502222a76e9d9221"],["/page/20/index.html","d02ad5b50748377fb474e28646c3addd"],["/page/21/index.html","1791d0f8721833e891724a395685fe48"],["/page/22/index.html","2d0157fba96e19da6f09179f08b68cb1"],["/page/23/index.html","65024e3129670298f3b1c1b904fda5f8"],["/page/24/index.html","f13b6eec41f4d27e6a3a073bc64fe90c"],["/page/3/index.html","57c7b2b2d07075cda1641b02c33679e5"],["/page/4/index.html","34ab4f7c9a6c430d62119aa4e65a032e"],["/page/5/index.html","15bfe368fd7f12c904f3953367b26b3e"],["/page/6/index.html","0f5f7507bc45827500a70cc0c1bfe713"],["/page/7/index.html","2b85705f06d06244d65f5812b915e5bb"],["/page/8/index.html","6112bafb34c0079d1aefc4bde641e60b"],["/page/9/index.html","e17dba2cd082fcf33ecb3e2a81a94506"],["/resume/index.html","0dcf7fec072e4c27817fe153d17261f3"],["/schedule/index.html","75c784ab3a3bfaa03a1581da69a57996"],["/sitemap/index.html","ec707f38ea03ac539aa13652cf136b4b"],["/sw-register.js","c972d9e52cab8319e93db024795db274"],["/tags/AI/index.html","b798472af493c88b3d80994d9e756d06"],["/tags/BT/index.html","2aa58b637ed8eabc72fe63c87e706c4b"],["/tags/BaiduNetdisk/index.html","01dce7f240c287f08e78032eb76bde73"],["/tags/Bootstrap5/index.html","fe3a98139c962280585f28d5180c9642"],["/tags/CSS3/index.html","162bcc3b54f179b4b3ac0c344b4946e7"],["/tags/Centos/index.html","e1ee303b35adf1d6b042fe90acb7a8ab"],["/tags/EEG/index.html","3da27a1b44af97009b4395d4b98506bb"],["/tags/Electron/index.html","e5ce1fce61ab11cfec36a04d7a353ac0"],["/tags/ElementUI/index.html","1b68ba2503d2396c8e3d1b6c9f501ee2"],["/tags/Flutter/index.html","98214eb7b52ca16cf0d7a84e58be8bfe"],["/tags/GAN/index.html","76c682b6dee9cfef570ba79786066c81"],["/tags/GUI/index.html","361cc794f0f8402e617745a19eedea9c"],["/tags/Git/index.html","2a81c1dc82b59c17056cc12508f9b6f6"],["/tags/JavaScript/index.html","27df4eba9168d00bc9ac45dcbfec7914"],["/tags/Keras/index.html","23f9e28e9443b0981ebe1f57497c7428"],["/tags/Linux/index.html","30096975ce39216a4d6938fb292d8478"],["/tags/ML/index.html","816d1a778c87d450e5c2a2d8710adec3"],["/tags/MNE/index.html","8feba64ff615a39b7c1ff4827401837c"],["/tags/NLP学习/index.html","6b795b069225802d20f3646bf65ba337"],["/tags/Nginx/index.html","08cf0258016c01148b55e913b6b3a000"],["/tags/OSS存储/index.html","cbb89198ec3686127c25fa75e7c92cd2"],["/tags/Obsidian/index.html","7fd7f896592e68b77adb27c1bb29e570"],["/tags/Qt/index.html","214a95723af80f22ef0fd781120a86d9"],["/tags/RSS/index.html","cd1ca3905a363bf3aad0b1c72d0168ac"],["/tags/SSL/index.html","03a77879481db52804878d8edce2a151"],["/tags/Scrapy/index.html","dbe2b18292f3a2c5b5ec8586336845dc"],["/tags/Speech/index.html","d3f283f7f1af96346ffbc80dcdbc5ac0"],["/tags/TotalCommander/index.html","4fd2130f8aca83f4a03fc7c06d39782b"],["/tags/VPN/index.html","c122e84e1dfb00d2458212ca79311512"],["/tags/Web/index.html","4627ff0233965d4d39be4bcf1e33ceb8"],["/tags/algorithm/index.html","fd667f49ce206665b22474bfc61e3b21"],["/tags/bison/index.html","816b5d8cf4f63db6e500ba7b5a6d04e5"],["/tags/bomb-lab/index.html","24c3a4b92c9f066b2b8d4914ba6658ce"],["/tags/c/index.html","72d69a49c8a8985926268d2a5a8a7d71"],["/tags/cheerio/index.html","3211ffdc58321c45b8a84ada7740718b"],["/tags/codewars/index.html","993ef901cbdcf0a35a141a8558d180e2"],["/tags/compile/index.html","675875490c7814294e69091cae39452b"],["/tags/compiler/index.html","8557decd4e127da411122eb0401d1aaf"],["/tags/cors/index.html","19e6d5765012d393479363609715226f"],["/tags/course/index.html","c41964a284655f711a4206e8720ffc8a"],["/tags/cpp/index.html","0709b738a16c46edb81090aa173d1601"],["/tags/crypto/index.html","8b631d67c06c1aea157cf5c99dd63841"],["/tags/csapp/index.html","e4b6154ccaa4b8ad0fce042abaf2a078"],["/tags/csp/index.html","1c8ae04c528b65e44fd9f454bacba80a"],["/tags/css/index.html","63b9112eb866d1a4a5a3c966fe553886"],["/tags/dart/index.html","60868c52459f719d29d38dc6bb06c0b5"],["/tags/data-structure/index.html","aee26481a724e42c8cef48ca9dc1d259"],["/tags/database/index.html","00846f2c462e9b3f86959870836f68d0"],["/tags/deep-learning/index.html","6f7fbbe348134ce7b9f38a8e80abf04f"],["/tags/django/index.html","b1b8788e52d0418280cf3b2d41908165"],["/tags/docker/index.html","f77fbb2516b84c05ca5662a92d26892e"],["/tags/dwm/index.html","ab9fc0e1528ec4127a49f558414f5b23"],["/tags/exercise/index.html","bcb78d6a128a692e3fec15584ada2ec0"],["/tags/filebrowser/index.html","99be3276396ab759eadd43977b07ee56"],["/tags/flask/index.html","6189784fa6f9522867d9d90719311632"],["/tags/flex/index.html","9b161d19667af401b98cfec6dc30280e"],["/tags/front/index.html","46f8de77e8735aa801cdf652607107d6"],["/tags/gcc/index.html","14c6ce0bfd8815b0461b2a38d731ece4"],["/tags/gdb/index.html","0031c180b6e0cf95900e69e5b060f4a8"],["/tags/github-profile/index.html","723331b4d91f97d8d8c13c7663f6e51f"],["/tags/github/index.html","ea7d2c2d4250830cb94f0aa58b5d45ae"],["/tags/graphviz/index.html","5ad6d616d9dc3e61cd8b4b5c088c9131"],["/tags/grid/index.html","e96ecd4cce12cd9b73ccaf44bddacee4"],["/tags/html/index.html","75fd95079b9d4e52ef3ce744e539e34d"],["/tags/i3wm/index.html","3495e500ce74a6bc972920ecfccb28f0"],["/tags/index.html","c1418b9c4fbd4a01bbe6bce902db43b0"],["/tags/issue/index.html","186365ab335b171ef808e034f9290716"],["/tags/jQuery/index.html","5c7ebdcd06a1ee60ad147dd3510ea2f7"],["/tags/java/index.html","3a513f557ce78cfa01ad386782cd6960"],["/tags/js/index.html","73baad6875636cd143d797542e857bfe"],["/tags/latex/index.html","d9e363ee85ca637c0154d3edb1bb00d7"],["/tags/leetcode/index.html","bee1e87ed4df8c8f8d0a23dc97cf54af"],["/tags/lex/index.html","ea681aba026eb7e2253d5f85b0f07bc4"],["/tags/logging/index.html","4ae2e8e38cf4293690d3b401e2e92e7b"],["/tags/material/index.html","1216e4526fe46f870d2262fe2f78ecbd"],["/tags/music-player/index.html","e2e643ebf84b4d16b6070a398e53b416"],["/tags/node/index.html","1c09c1a48cdc05794738e5241352d5f2"],["/tags/nodejs/index.html","9681ee27e4ea6baad68433fda4d6a453"],["/tags/noj/index.html","25a490a7962901a65332b1362115105c"],["/tags/npm/index.html","56572c1c55bfd1c3634b9fc41247be05"],["/tags/opencv/index.html","1096445ec39d83b6c891b8fabfdfe111"],["/tags/overleaf/index.html","df280656c1bba7ade16f7ba5005d3d99"],["/tags/pandas/index.html","a6a9156c6e72090692e1b171c17bec1e"],["/tags/paper/index.html","963852c174a6ec09108a8e242722de90"],["/tags/premiere-pro/index.html","48165340d28cf92abc4d8b38c0ba7550"],["/tags/proxy/index.html","cff080315c4b8b2a97a972e7cb5fe131"],["/tags/pure-css/index.html","2971d325bfc435171577dac7954a8e9d"],["/tags/pygame/index.html","d0c531c0cdecaf5433747cbf650434dc"],["/tags/python/index.html","1f1d964384a6588fb7cb6fd05a5a2334"],["/tags/python/page/2/index.html","07107c677b52d408d36f21952f2230f1"],["/tags/pytorch/index.html","bfdc6812dc560d90d18366c280cd7630"],["/tags/reading/index.html","f86de70660fce131ff59364969ea9734"],["/tags/request/index.html","1b7f1d36aaf3889a7ab6b598bd22db3f"],["/tags/requests/index.html","517fbe5b4c1916e63ce2ac6e0e4be575"],["/tags/security/index.html","b36c92017e81462aa01bd81dbfc353cb"],["/tags/shell/index.html","9eeb53583f703cf565e988f6d9be7115"],["/tags/sign-in/index.html","82543559f7dbeca896839f287f05377b"],["/tags/socket/index.html","fccbdb5cc617d6969f9269dc065e347a"],["/tags/spider/index.html","e6878992813ac29ddd73fa59e1ec845a"],["/tags/splash/index.html","bf2e073026231db8d836ed895235c880"],["/tags/stl/index.html","45975ad8211a630bc90a676388640136"],["/tags/sumatra/index.html","f75cababebc44a227c9ea8f6787c07e0"],["/tags/superagent/index.html","6c48d606cb02b85e35af0d966f6672cb"],["/tags/tensorlow/index.html","f286bc0b704e2fcc417cdab4349c25b0"],["/tags/tex/index.html","b8622805be8d92f8d60f8a9a999e596a"],["/tags/thesis/index.html","893e99b528a161cbb92ccce9a9b42375"],["/tags/threading/index.html","b15946e8818d9fe4848ad94970544667"],["/tags/tkinter/index.html","d9d9f7916c0085e99c1b06b1df710010"],["/tags/torrent/index.html","89045ec45d82ae321ab7c780609f7799"],["/tags/tutorial/index.html","6a20abce629cfbb91b6d5fb8a2bed7e2"],["/tags/typora/index.html","be41a76bdb49eda978cb56e3fe598cde"],["/tags/uniapp/index.html","6c46536141f01c3c991b12042747f856"],["/tags/vite/index.html","197263c7138d35dfc3e0f2bba6ecd768"],["/tags/vscode/index.html","4d1241519a2799a0250a312d8eb26747"],["/tags/vue-element-template/index.html","94513810059f52632e882fd2cec42a0c"],["/tags/vue/index.html","c000d9d481b306b5939a64b4c6559f72"],["/tags/vue2/index.html","471a27a047c8e9dbb4ffc1c0cecf650c"],["/tags/vue3-x/index.html","0f0222cc4b77a8dce95f1e532d139354"],["/tags/wechat/index.html","e1d6852962f2caee20be5c1adac6e02c"],["/tags/wm/index.html","208e9b2f9b76d2aa868be8d57ce9bd04"],["/tags/wordpress/index.html","2dc2a9e3b457acaf9dff92c00b27583b"],["/tags/workflow/index.html","da18f58054ccdc5d007d51c41fca74d4"],["/tags/xpath/index.html","2b028e3727fcb02088a7fb718613ea53"],["/tags/yacc/index.html","8ed88da5145a5330073585b679814a28"],["/tags/yarn/index.html","b2dd56a1497283685ca48e6d6d92149f"],["/tags/zsh/index.html","9c2a9910bbde83ac097dd993513f4733"],["/tags/七牛云/index.html","95bf56a8d00e3101ea781f1ca8f90696"],["/tags/函数/index.html","815f0e421a6b5fb81150186da9953ba6"],["/tags/剪辑/index.html","f9bf8ce6ff3678c88cece42807ab956e"],["/tags/存储/index.html","e37b3733cfc54893bbec28284d19983b"],["/tags/实战/index.html","c2478359841677f8c574460352633db1"],["/tags/工具使用/index.html","15f59c9c5ad315ac43b90da09f4e40f0"],["/tags/建站/index.html","96b7c354efa71f18ad3bbb3e8bf983db"],["/tags/微信小程序/index.html","84a22106e0f4d6cb5ea0cd9ba5a7e4af"],["/tags/指针/index.html","b09d98feaaa97001072a32f6650b7848"],["/tags/插件/index.html","03c6e4d430cd4787c3df72479bd423e5"],["/tags/效率提升/index.html","c8fc26cb9a185bb9ac5f0364ce2758c7"],["/tags/日志/index.html","d245b3f24cbb63f0427946a59be7de96"],["/tags/汇编/index.html","91e9129fc7bc340b799a3a20ae2d7dff"],["/tags/油猴脚本/index.html","7c1646f8bef98f6a33fcd5eb357ff67f"],["/tags/浏览器/index.html","caa311ab8252f495b08e9dc323913af1"],["/tags/爬虫/index.html","d73e9bf6d9cbc4bc620c8fbf80f86502"],["/tags/算法/index.html","499433bcb469a20f1ceced340daf622e"],["/tags/编译原理/index.html","af075775dfedaca57aad718c4dc5ee84"],["/tags/获取地理位置/index.html","a8e2544cadcbb3af16d6011fb49abfb0"]];
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
