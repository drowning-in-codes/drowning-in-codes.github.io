/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","b66921447405539b5fc451332502da2b"],["/2021/04/20/稀疏矩阵/index.html","5aa2e1bb9059f1d8baf2c0666c29e9ce"],["/2021/04/23/广义表简介/index.html","3c7305643a05d47daaa14bc97663ec38"],["/2021/04/29/关于指针和函数/index.html","cedc8bba4726a8338dad423820e0699a"],["/2021/05/10/哈夫曼编-译码/index.html","cd6040fd139bddcda393086de2a0566e"],["/2021/05/17/数据结构noj_2/index.html","20acd00ef84a5e49a30a9ec19f973592"],["/2021/05/30/数据结构试验/index.html","a31c6cfbed3e2657a281acc6d5a00f8f"],["/2021/06/12/数据结构noj-3/index.html","45fc24ea452e99c234dd95a64f393fe1"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","ae53c296df1a2bc88e8473555fa921ba"],["/2021/07/08/课程资源分享/index.html","c7cd185102ccec78e4f81c6d7e63b70d"],["/2021/07/20/Scrapy-下载图片-文件/index.html","353ea95b1163295e7cbd4582964d1018"],["/2021/07/21/Scrapy-动态网页爬取/index.html","76d21078e25e34f450aff7332d8b138b"],["/2021/07/21/疫情打卡/index.html","7aec8a966f7c0ca924e4642dcff9947f"],["/2021/07/29/Scrapy代理设置/index.html","e83396efdc5918f3c3834eb667e9aa22"],["/2021/07/29/数据库认识/index.html","2c1a5ad07324b039c99d4c38cbb2bb53"],["/2021/07/31/Python多线程学习/index.html","caa78de2b7f05e219a57844f4477727b"],["/2021/07/31/tkinter-requests练习/index.html","592d6d44f487cc487809c476c8efcca8"],["/2021/08/10/Git学习/index.html","72ab02e0e8be070b2776f2c0d7f03fa9"],["/2021/08/15/pygame实践-1/index.html","216f1f8f1245a7be1db487692b4ccf22"],["/2021/09/06/微信小程序开发/index.html","6db7297871541a979e8c6c4d56c4ab15"],["/2021/09/21/命令集-1/index.html","add51dc597a21149afa19236efdc1d66"],["/2021/09/21/命令集-2/index.html","0aed75c80fcb6cc98c8bbdf732036174"],["/2021/09/21/命令集-3/index.html","2d7f64b18795ffef8cb33123302033d6"],["/2021/09/21/命令集-4/index.html","9b5108972ba5915e236b14e69154ebfe"],["/2021/10/03/socket学习/index.html","85209b3083daec277ae5967ac261e559"],["/2021/10/10/dwm入门/index.html","1f84d29c5a601778b43d766f8ab3e4e0"],["/2021/10/10/安装ohmyzsh并配置/index.html","e91dc5ef79bc81332ee0d43c7b30b5c1"],["/2021/10/20/css学习/index.html","e28df573a0218e51712c20aab76b429b"],["/2021/10/20/wm入坑/index.html","d8431293155d6c4dcbf011012d10ed45"],["/2021/11/03/微信小程序学习/index.html","1a4db8dd335c6a755a74bf1028c3f26b"],["/2021/11/04/css揭秘/index.html","94d79e8290b7cb0626c7dc3dbf3ebe98"],["/2021/11/05/css-练习/index.html","1f49d20a23ff49cc820ace82f92cc60f"],["/2021/11/21/命令集-5/index.html","d9cbad4c0bfddd70aec95572c2c4972c"],["/2021/11/21/命令集-6/index.html","e754ba40258fda0bcf047b46d99a8531"],["/2021/11/21/命令集-7/index.html","29fb57e74b7c74d6145d0f3be57c33ea"],["/2021/12/01/搭建wordpress/index.html","2502d3980ca863d81a8ee9ecff44580d"],["/2021/12/08/python操作百度网盘/index.html","f5469486e4bcdb530ea9362a3fd404dd"],["/2021/12/14/js爬虫/index.html","67086f1d882b2981f567cdd54e7d72d2"],["/2021/12/25/为网站申请ssl证书/index.html","3d21899c4bd6ef4ffa9faf3af43230f2"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2ff86cf65f24c5f6eafc048af7c85c5a"],["/2021/12/30/jQurey继续学习/index.html","1d5f5a95cc98bce805acb899f0796a08"],["/2021/12/30/jquery学习/index.html","2c622e2d2ae212a20b02b9da41853913"],["/2021/12/31/vue学习/index.html","ac7ed0f286d4db996af96a26f92d0ba0"],["/2022/01/02/疫情自动打卡/index.html","231b93f14cbd6e2c288e22d29b9035bc"],["/2022/01/03/javaweb初体验/index.html","a854f7f49e1b43615b9a9ad1faa9cfa9"],["/2022/01/04/codewars练习/index.html","9c22da3143046b242591ea39b474f528"],["/2022/01/05/Spring学习/index.html","927acd9a2552ae442d58489ebdd672af"],["/2022/01/05/vue实战/index.html","fce90ae34b76d0c4284b1faf395d3d1c"],["/2022/01/08/gdb-gcc学习/index.html","5db43dfeffff5560c78ca18a119ed74c"],["/2022/01/11/python-opencv学习/index.html","abb7ed81f66f1981d0f8a1ca3bae4b91"],["/2022/01/12/汇编实战/index.html","09cdf590ce1250fc88085dfe3b475756"],["/2022/01/17/pandas学习/index.html","3ea6d9c90eaadad9fb896274d5fc90e4"],["/2022/01/19/可视化图的工具/index.html","8cc22dc546862052cc3db8de87a54181"],["/2022/01/19/机器学习入门/index.html","a5e371796e835af711d3e6edf56edc02"],["/2022/01/20/cousera-ML学习/index.html","e5614f5425e5a9e1f517c87fc1e797c9"],["/2022/01/30/typora解绑后出现问题/index.html","507c6d30edc751327c14f605cb6fb910"],["/2022/02/03/NLP学习/index.html","22408e14691c45296cde94739e673c94"],["/2022/02/04/Web漏洞学习/index.html","5cb0209d680d390c6f04f05682367c42"],["/2022/02/04/pyqt学习/index.html","2aa7456c7a7f73a830461fe0058c05f1"],["/2022/02/04/python爬虫/index.html","71e408449fc329a6824ef23dde8591c1"],["/2022/02/18/Electron学习/index.html","da7481e8fea176794f8ac240b515e0b0"],["/2022/02/22/疫情填报字段解析/index.html","6048a5b2706225feefc17708a93c8d25"],["/2022/02/24/Bomb-lab实验/index.html","84f8b929a792b1211ef07b6a0480afc3"],["/2022/03/05/nginx学习/index.html","27e8f16c60162a18e6ed905fb85ff72f"],["/2022/03/09/汇编原理课程学习/index.html","171b222e690ec3dccb874b8a3741052d"],["/2022/03/11/Keras学习/index.html","03198bcef31fbc10b3b93e0de0c6d65d"],["/2022/04/01/graphviz学习/index.html","a419dbe325c63a9c50c3daf9b08b9469"],["/2022/04/07/django学习/index.html","cced1ab7f9db95f98bc5c814e5cbdeab"],["/2022/04/11/密码破解学习/index.html","490de80518c52e0eb43d94f644e57ed0"],["/2022/04/12/flex-bison学习/index.html","e7c9c4877ec62a9a3d07c0e77f780bea"],["/2022/04/15/pytorch学习/index.html","32bd2ec07949e86a946f98daa84a36fe"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","6c9e9ae54977968b531b26783658034f"],["/2022/04/23/写一个音乐播放器/index.html","6d1b19abefb983403b72772b585bfa19"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","3f2aa54c627fb57ff4d66c6d2a63a7b2"],["/2022/04/30/GAN学习/index.html","d6c2c9afb082593e6773efb97b145518"],["/2022/05/02/html精学/index.html","ed57ec04fffbff86d04a3a0726c60d53"],["/2022/05/06/write-a-compiler-by-yourself/index.html","b9a1fe0a0ba65d920fa39c75961e687c"],["/2022/05/30/acwj-01/index.html","6dc7c2514ff4dd45a23f36b9377f59fe"],["/2022/06/14/animeGAN/index.html","23c8811fa99f9ade402eb9eb348e3272"],["/2022/07/09/c-与算法学习/index.html","307c390c1b257d04932c4e80c9c16024"],["/2022/09/19/flask学习/index.html","c30eb4805938b222232a63391a8389cb"],["/2022/09/22/cs224w学习/index.html","d3bef802fbad2f16443d4c28cc0e0006"],["/2022/09/28/记录一次wp重装/index.html","d435f59cbe9ec32614d1274e5e2c5795"],["/2022/10/01/Obsidian学习/index.html","1e6b8d2d9d0fd9f8063f23562ffe87b3"],["/2022/10/08/vue-element-template实战/index.html","9dbc4903538ccec0fe998ac0b5476126"],["/2022/10/25/vue网上商城项目/index.html","39c2529ef83299d6e43d95098338eee2"],["/2022/11/11/leetcode刷题记录/index.html","6ad5c506b2d3498cdd627a22215ff69c"],["/2022/11/11/使用overleaf优雅地写文章/index.html","42a69097f259f4b6df7846c0b789b8d4"],["/2022/11/22/磁力链接与RSS订阅/index.html","823beda5191d54cb4640ad86c4ed269f"],["/2022/12/11/uniapp申请获取地理位置/index.html","f8e7aa4b4a83894ab4feeb46496eaad0"],["/2022/12/26/pr剪辑学习/index.html","203f21b4056402555d2e48574f876430"],["/2022/12/27/css中的flex和grid布局/index.html","f9cad508145b7933cb729a088220edc7"],["/2022/12/28/Flutter学习/index.html","52ab2eaf1defcc24f5836f7ae9643ecd"],["/2023/01/01/美化github首页/index.html","eec5787f877c9dc085459a395a6a01fb"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","f749d71b4b69b8352e779d74ad0adc5b"],["/2023/01/04/构建微信快捷发布文章工具/index.html","6de38aa83ecc4dad5889886c16437a55"],["/2023/01/14/dart学习/index.html","9450ce675bc215988b9b378ecf6cee43"],["/2023/01/23/闲置服务器BT下载影视/index.html","e411ce53c1d59658a126a31f35207b70"],["/2023/02/07/TotalCommander使用和学习/index.html","d430b3aeabf7483bd80bf6e14e6564eb"],["/2023/02/13/docker学习/index.html","caa3334d80485009622ec1ddb6a1f8d2"],["/2023/02/17/DLHLP学习/index.html","e0cda11f30914c64ba48c72430fd3bfe"],["/2023/02/18/学习purecss构建自己的css框架/index.html","d1dd4c0c3255e163756165f6b1756d99"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","02e828071b42b8d4ab8e97727ce74402"],["/2023/03/05/STL学习/index.html","c35ed592b769eca17cac5e7ca77bd367"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","c92ae1879fdae7c50dab2b4018d7275d"],["/2023/03/23/实战写浏览器插件/index.html","24d38d2b00882ab7d7c72d7e5c6c897c"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","d313aa9b20b6023be3adbc04db22c6fe"],["/2023/04/02/EndNote基本使用/index.html","07f0267b157e05196bed110726cb8afb"],["/2023/04/04/mne处理脑电数据基本使用/index.html","3e8d58d0f02130a9ae4c680aa47cfe8d"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","3d38f0e331a929b7113405240254bdcc"],["/about/index.html","00b38c541929d56fc139fafd9c00e238"],["/archives/2021/04/index.html","13dbb06cf410b348d5409aeed4d1c1c3"],["/archives/2021/05/index.html","ba9aac3f01824f2fa5168658c60a8097"],["/archives/2021/06/index.html","98622d19cfcb1434d189e0a73220ede9"],["/archives/2021/07/index.html","424c0e4f4af4f1f1c1c6012ef0aae1ce"],["/archives/2021/08/index.html","a05f0d19cb11cfd34625ecaffb442e08"],["/archives/2021/09/index.html","0d52c65fe884c77c410fdb82c414856f"],["/archives/2021/10/index.html","272743bcd947c05aa11a2af09f292665"],["/archives/2021/11/index.html","4ac31563783394875e32e5321af22086"],["/archives/2021/12/index.html","9f90eb6a9c232249aa2752f8f3c72b4d"],["/archives/2021/index.html","f48922cbc6c53d72d71b9b1d650b4f84"],["/archives/2022/01/index.html","dc673e3a97840b755c7dcc17c66153d8"],["/archives/2022/02/index.html","c5a3843d50ae060f773b006677e70829"],["/archives/2022/03/index.html","839ed4b1bf3346104b33bd0b14365f99"],["/archives/2022/04/index.html","3ee3ab8d3923129c45281f68ecba03ed"],["/archives/2022/05/index.html","41a837b5148db9b15b44ea97d4d75493"],["/archives/2022/06/index.html","4cfbc1020a1932969460d1a0826d7d0c"],["/archives/2022/07/index.html","22a86eccb7ade36fe153928d0b703f22"],["/archives/2022/09/index.html","b44e28dfbd3d748d1cf82f336c44a348"],["/archives/2022/10/index.html","05d96465faacfa24c26dc5d320aacbc2"],["/archives/2022/11/index.html","818565e7d557a87d0288d04a234bee6a"],["/archives/2022/12/index.html","e9d843c0d4c4232b9bd5fec2fd18f5ce"],["/archives/2022/index.html","26c017e42e26d9dbd5e920a959a5e128"],["/archives/2023/01/index.html","3669a6960cf8f03d40cf12dfd6fd0a6a"],["/archives/2023/02/index.html","51f7f1a2949715653a75223f07ca452d"],["/archives/2023/03/index.html","588e02e435289da70f087a522c0426a6"],["/archives/2023/04/index.html","33b34a1650deb837894008070e6b50e7"],["/archives/2023/index.html","12037043613f034447f0c17d1e31f329"],["/archives/index.html","6f93fe9b267747aa5cdf2e8e2c18e537"],["/archives/page/2/index.html","9fdd9cb7c989b43da6191f5a69f460ff"],["/archives/page/3/index.html","f8a0cca1d168af85118a98071d3b1092"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","7e72e01652b97b7157ca6bd764cff3c8"],["/categories/Java/index.html","4197994ad105dcc9377be51ab2ace5f1"],["/categories/Linux-study/index.html","9adfe65329fcd063e0c86daad5def844"],["/categories/ML/index.html","7ac7aeae3489aad4f8b5d1a422b66a95"],["/categories/Nginx/index.html","41dcf84f7f0f804082c1320d5e5461a1"],["/categories/Spring/index.html","b6ec1ae7a5f0416d5a1e916d4b54918d"],["/categories/course/index.html","b4c1f96a07ac44803b4f39b326f22543"],["/categories/django/index.html","9fcab65a1a6943900885e1f0954550a4"],["/categories/fun/index.html","508f97e9c0183eae106b201b1d1d88ed"],["/categories/gcc/gdb/index.html","d485f3a26a05a46b14f33513c5e757d4"],["/categories/gcc/index.html","a4bacd8fd5299fcb4e8515df49ded28f"],["/categories/index.html","091ada15af08aa796f889d453b172782"],["/categories/latex/index.html","f0a25176405a85249bd81b20694b48ad"],["/categories/python/index.html","db9aa6380477cf76f3b7fa70d6e0c7f6"],["/categories/study/index.html","4670c364d8bf03bd24d81eda9dc9bf85"],["/categories/vue/index.html","a67256e679b8769681fc4fba3a2b7f2c"],["/categories/误区/index.html","824d326bfb3ac7764991ca49be37cae8"],["/commonweal/index.html","23279c23328b6ea9a64fc3f47620d227"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","561b28f17ba3a250160ab39f11a4d908"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","00ce39170ff4732f0e878011b75f8d51"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","e20ebe2427d159b9972d79ef1c320be8"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8704a34b70078176f8c3ff4d77c158c6"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","d33bc3000c072789fc84d91ffff56135"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","32a06e62d2b1665bf9e6ba020a329bb1"],["/page/11/index.html","7e8041fae8d61a59ea1800616235c3fe"],["/page/12/index.html","f50a0366b962f00b2129705dd0b935f8"],["/page/13/index.html","e20ba4dd01e2d98c49a4bca53acd8641"],["/page/14/index.html","f179f04e5c3779139c123897528dfdf7"],["/page/15/index.html","7b7524174cff2335049ec294702f1570"],["/page/16/index.html","cde82c39217a8aed5b9a4da15a2d70c7"],["/page/17/index.html","8a2c198540452798f20c0f7cf76e616e"],["/page/18/index.html","2595872cfb8d8f923b87425a92838da0"],["/page/19/index.html","a885facbdb8f90d7c2af79723ddbbf74"],["/page/2/index.html","dfbd083653d58c433f0f145e0c7c2563"],["/page/20/index.html","084c45bc75ba7184dc5aede574769f52"],["/page/21/index.html","552b6eb78616d939e46eabc34cc28c65"],["/page/22/index.html","21b3e5e68b9cb1b212d478297d46c4a5"],["/page/3/index.html","c974521e6babca9ef4f1877bdf89d230"],["/page/4/index.html","7e4c8640cca57c4068b7ea17e1afa141"],["/page/5/index.html","c54de3903c04d23a2ab17854090f0208"],["/page/6/index.html","360248ed2d0c13012b05e9b57d2f46a0"],["/page/7/index.html","9c7b68176dff20f6662fe20afb6268ca"],["/page/8/index.html","1c12f39d6def36748e12705af8a5c104"],["/page/9/index.html","f399bd72b40fd084fb02ab88fbdc6604"],["/resume/index.html","b570cdff557493baa7361cf02620383f"],["/schedule/index.html","03dcadf179fa45e11228b95592374a4e"],["/sitemap/index.html","d3004082445bb7bcfa03cdeddec90028"],["/sw-register.js","3fbf90c329c7993d7aadf763918c4526"],["/tags/AI/index.html","99f8882cc1e9136b84cccf2b5b1d707b"],["/tags/BT/index.html","6598b1c2f849fbb8467eff12a2c7dc29"],["/tags/BaiduNetdisk/index.html","01eccb967820359333b8cb4223f2eaa3"],["/tags/Bootstrap5/index.html","8b23612a0476e472999f5d00d16641f4"],["/tags/CSS3/index.html","a02448635a6fb5de48b28b71fdb7a2d5"],["/tags/Centos/index.html","dc7c119921f92186c9ed0e5248764278"],["/tags/EEG/index.html","cc5eddcf48501e54ab86397ac3c012c3"],["/tags/Electron/index.html","955d71ec93e17b6cb1b44d66881c6b6e"],["/tags/ElementUI/index.html","0d3fbd3734b74a60c2849d41fc9a401e"],["/tags/Flutter/index.html","c18670da05c27cd1c19884c4f9eb49d5"],["/tags/GAN/index.html","2c0d318f1bd3b43b95444aa7a8d2dfb4"],["/tags/GUI/index.html","eb19f16dda44e0d7cb6c6fafcd438cc4"],["/tags/Git/index.html","a52fb1151995c0df70a2c7da0bee43c6"],["/tags/JavaScript/index.html","72496655b0bf2d4659a24aa4b5042757"],["/tags/Keras/index.html","4ef708b21cfb48b1b6c9f42f4407f85f"],["/tags/Linux/index.html","c2ae3e1c0b56a4994b89f172d0d53bdd"],["/tags/ML/index.html","c39db69e11560d4b9b84b015661dcc66"],["/tags/MNE/index.html","e8df8bf3260f4faf8a58d574914840f6"],["/tags/NLP学习/index.html","841647b3621121293e0f0f93095fd1f9"],["/tags/Nginx/index.html","33d132a0b31b8a72159db385936ae703"],["/tags/OSS存储/index.html","e1a933b88f2d34654014bf71f5b6344e"],["/tags/Obsidian/index.html","6a33a5cb046ff02fff01b4ce9646b4e3"],["/tags/Qt/index.html","d3b36c06f66a554d463a1515f392617b"],["/tags/RSS/index.html","accd250209d04282b391acfbca4b2992"],["/tags/SSL/index.html","66f2bad50f0b3e75e5096beeb913c075"],["/tags/Scrapy/index.html","2a8765c91300b3256161045a4c056722"],["/tags/Speech/index.html","66a62a27c96d2b4ae17a64191212c16d"],["/tags/TotalCommander/index.html","c3d85f9e158dbe8343cc8ef743ae5261"],["/tags/Web/index.html","5da9087017b0445325c6a9086f8bbaca"],["/tags/algorithm/index.html","44d349001c63f00fe67eda9b2963f9f1"],["/tags/bison/index.html","dfb9bf3b86d77d35bc5616272d626a30"],["/tags/bomb-lab/index.html","48c58914c50216657d017ccc621ca519"],["/tags/c/index.html","750a618a07117fa9bd5d581cfff9714f"],["/tags/cheerio/index.html","ba47c8aec04dde4f0cb225787fa10983"],["/tags/codewars/index.html","bf2be0a653dc2af10b902016343fe70f"],["/tags/compile/index.html","7b75c3078cd0f7f3dd2882b2e736e199"],["/tags/compiler/index.html","68f1e59932c0fa0125dfbf79340adc78"],["/tags/cors/index.html","9d1444e091492baaa2b2adb565c6f71a"],["/tags/course/index.html","4699af416e2e499159b13b9e9b4742a3"],["/tags/cpp/index.html","3e25ef902253c5956b779053d6e4a218"],["/tags/crypto/index.html","6a3667b7c3ed40199b81d17e221d4e2a"],["/tags/csapp/index.html","bbbdadb0be0e94bace908335465b8028"],["/tags/csp/index.html","65a13ee3d106d30d9dec60a1195ecf63"],["/tags/css/index.html","1e7b1712c44c1c2e1eb25f70bb4b48da"],["/tags/dart/index.html","9646dcb93d066df0dc40dfb93da6b4f2"],["/tags/data-structure/index.html","8c35ab75f9d86364e6e72e012bdc052f"],["/tags/database/index.html","61e061adac1226f79f46b7c0a59fd1a7"],["/tags/deep-learning/index.html","287a28d8b728f7b0b419fa84784d615c"],["/tags/django/index.html","1cf7f3bcb32bfab32f26787718c7e82e"],["/tags/docker/index.html","02d867be9ac92c2620a706f750294e4d"],["/tags/dwm/index.html","25111bab1551dab3d5cad8e3e29e1715"],["/tags/exercise/index.html","b69cac5e44199bde500597399358ceee"],["/tags/filebrowser/index.html","6ad67ebe858b426143b2880c389345c8"],["/tags/flask/index.html","7aaa7d75daba197cad24402b84098ad3"],["/tags/flex/index.html","550feec39e24ffe9ed0ea20b5288a7dd"],["/tags/front/index.html","cb25f391a6a0a7aa3d03efb3819abfa6"],["/tags/gcc/index.html","2fce89eebd336404acb9f0f40be040ee"],["/tags/gdb/index.html","a22617b47a9a69935de4efb9feb56b75"],["/tags/github-profile/index.html","80afe6a1d0f0848ced9b0ee6f556d4cf"],["/tags/github/index.html","239929ff2976e76a5c3e0c4af262e5a1"],["/tags/graphviz/index.html","9723e85c9acc4ad5d19d0c242f40f825"],["/tags/grid/index.html","b17766868170042fe7845a781c16422c"],["/tags/html/index.html","73487f4497e02192cfe37131a48eacff"],["/tags/i3wm/index.html","747a9898d73824e9f854d8d103d35fa5"],["/tags/index.html","ecdc3b82037ebef3ab141bf7316e966b"],["/tags/issue/index.html","7524d555dc4a62816e85aa840430046e"],["/tags/jQuery/index.html","03807463bff3e7fbf92d25903a211de4"],["/tags/java/index.html","d078d4cfd757b60c4b721daeaca6ffef"],["/tags/js/index.html","877db08e1b1c988b9f62a7f0f06a1017"],["/tags/latex/index.html","3c4bbd7d427db2248bdfee1f2e47b993"],["/tags/leetcode/index.html","0a02b43395ff92627231ae222155b555"],["/tags/lex/index.html","1c37436f827f169e7e8aa300a3be8ddd"],["/tags/material/index.html","5033796c99231b6a1f29400762f33bfc"],["/tags/music-player/index.html","a2a2dba2933bd1bad0425db67e8f45cf"],["/tags/nodejs/index.html","90edc877b9f24a693e90c18bbbe01a2c"],["/tags/noj/index.html","e17475c53bd723615db5b7b4c4b38c45"],["/tags/opencv/index.html","bd73648292c042a5413ec08f93522972"],["/tags/overleaf/index.html","e71fbb9a4097af73e487bcb6af20778d"],["/tags/pandas/index.html","baeb6fbb8b8b58891992de10558605af"],["/tags/paper/index.html","0ac3d4ca5cbb4303be41c81306645f59"],["/tags/premiere-pro/index.html","0837229fd301ad3ee217112417de86bf"],["/tags/proxy/index.html","9dfdcfdd61c06c0fa4643916fa5341d2"],["/tags/pure-css/index.html","66ed5842afc69f0263f2187335f3bdf2"],["/tags/pygame/index.html","09ad68dbd229b5fe3eaeaaaf4edc20f6"],["/tags/python/index.html","4b63670d2a276764e9d3d54121e81dfd"],["/tags/python/page/2/index.html","4ef9a4820f95fbffdf4cb81561488055"],["/tags/pytorch/index.html","dd518abb6dc99dbaff023687c1958f72"],["/tags/reading/index.html","c5d8e4db62e46d94313e6476d24cba25"],["/tags/request/index.html","d88f8855a05d01e5c97155b932a248b6"],["/tags/requests/index.html","4645b69739990462d124ddfeb052231a"],["/tags/security/index.html","794236348cd6a02df3a5dd79a09360ce"],["/tags/shell/index.html","77cbbea2b370c9821be46c63d4561107"],["/tags/sign-in/index.html","329b5e3e48cb8900e61e1bddf173e986"],["/tags/socket/index.html","e268d23fdec1c6cb12839b5559859b42"],["/tags/spider/index.html","9f106861c4079797618fe4212c84dd78"],["/tags/splash/index.html","7693dca42dd2dbe47a2b2246480b9434"],["/tags/stl/index.html","4637688b8f2cc96d2e43c4ae157c6ecf"],["/tags/sumatra/index.html","003aedc8f19dbb2b5de2206b93d84225"],["/tags/superagent/index.html","57afac8faa637ab74d560318921dc5b5"],["/tags/tensorlow/index.html","d036cf9aee162033894bbbbdf28f4de6"],["/tags/tex/index.html","af3ff59d6da991cf86b9c9100be67367"],["/tags/thesis/index.html","72dc2ef10d71086bbfb3acfcd30769d0"],["/tags/threading/index.html","508922e3ceb846796f9b6f4cb00f0a05"],["/tags/tkinter/index.html","286854224757d210ee1327afbc5fcfd1"],["/tags/torrent/index.html","d3570dfbfb4e5345a2a5c8eb9352c272"],["/tags/tutorial/index.html","26431e9f261781fb3f19b1e36dd1c1bc"],["/tags/typora/index.html","689fdb5a72b1ab47b94d887d91aeaaa9"],["/tags/uniapp/index.html","18da1f1ef28af01cdf8e55c4a0c946c1"],["/tags/vite/index.html","4020c661cbdc28cf7bde4d1afaebe33e"],["/tags/vscode/index.html","61f010c5ca0240381908ec01f8e6589f"],["/tags/vue-element-template/index.html","a4413cc1d3873eadbfdfeb35ea8a21bb"],["/tags/vue/index.html","ea4165a3703464455ed5d61a6d164c33"],["/tags/vue2/index.html","9c5f115167add8701e51a07bc9cfbebf"],["/tags/vue3-x/index.html","5acc7a1428a83da00f1235bdda6d2ca1"],["/tags/wechat/index.html","7fed6d23864d5f5fbfa69340f533fb6b"],["/tags/wm/index.html","b2ca0d5f99132b747e2308953776546d"],["/tags/wordpress/index.html","462496a8aed0d864845dad32faac7445"],["/tags/workflow/index.html","8339b91e1d86ff8bc980e492e0688910"],["/tags/xpath/index.html","bfc8a28c80c04d02e4abec8803da2539"],["/tags/yacc/index.html","668bbd5e21fd792e1556196e084c897a"],["/tags/zsh/index.html","fe0cbb43554d2a0343755f71d9f418d5"],["/tags/七牛云/index.html","472f3dbb0ef3510f3e96ce4f313c2e1f"],["/tags/函数/index.html","aec32062d004db6e2a35e83e191069bd"],["/tags/剪辑/index.html","97db4e053dcdde0624f4ed2f3ddc6932"],["/tags/存储/index.html","2a78c5eb486768401c781526ed3fa7b2"],["/tags/实战/index.html","acab0b4a21a6f3048e6aeb6b5feaadf2"],["/tags/工具使用/index.html","e9ea4582bbe9275f9c5157020cbe2b9c"],["/tags/建站/index.html","7f36061269fe0caa441913c2c6583995"],["/tags/微信小程序/index.html","c096e4056b46f3f208eb797a8fc6ccc9"],["/tags/指针/index.html","cc0044297549ebce89245b7c8c14bb72"],["/tags/效率提升/index.html","f071c7416f1bea936db671605218d156"],["/tags/汇编/index.html","7a48006d7a708ce31d259cfedbf22181"],["/tags/油猴脚本/index.html","e3593e26015358ace2964484d257f82e"],["/tags/浏览器/index.html","1b1f5599a4951baf531f81dcf86e9264"],["/tags/爬虫/index.html","f3a08bfd78709f411ff8f6977de9fc61"],["/tags/算法/index.html","9fc7b363422343b02d107d45281577db"],["/tags/编译原理/index.html","2c083560c63acf747a6052b71246554e"],["/tags/获取地理位置/index.html","75dc5c25246bdb3558ab4a1bcab26d6f"]];
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
