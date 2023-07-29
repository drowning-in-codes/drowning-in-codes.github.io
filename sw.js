/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","472096d93d13b3ee78f92f7e148a7f1c"],["/2021/04/20/稀疏矩阵/index.html","18472ea7bca940c5d7674a3204270315"],["/2021/04/23/广义表简介/index.html","bbc6a2e25affe5eab60d16c0f0d32ad5"],["/2021/04/29/关于指针和函数/index.html","f4e736112ae545d5a6103af2997bafab"],["/2021/05/10/哈夫曼编-译码/index.html","c1cbda4fe0bdb8669225fbe45f7de976"],["/2021/05/17/数据结构noj_2/index.html","b29c00f36824a9888fc92673c325621e"],["/2021/05/30/数据结构试验/index.html","679bf22525de424bff8794e87c43f541"],["/2021/06/12/数据结构noj-3/index.html","9be4c15915db9808fc94e7f55b84c8fb"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","8a103c338f4a823b5f19d78d4a4cf858"],["/2021/07/08/课程资源分享/index.html","099373ce713e0a2d1e0172dbc6aff700"],["/2021/07/20/Scrapy-下载图片-文件/index.html","7b65da3cef83c2ab2f17e582b1bd9a02"],["/2021/07/21/Scrapy-动态网页爬取/index.html","47f5fd126185114dd46ae1eaab91922a"],["/2021/07/21/疫情打卡/index.html","acc7d1d4dfe43e180973b90a66851fc7"],["/2021/07/29/Scrapy代理设置/index.html","fffdad567bf02e87f30e3a44d7074f6c"],["/2021/07/29/数据库认识/index.html","34ead7429415a73acbda0192572fd468"],["/2021/07/31/Python多线程学习/index.html","4fc66e963d4c417e9c3a1eb575e15bfe"],["/2021/07/31/tkinter-requests练习/index.html","ffbf2dbdc36e028ae3f71cf651d6f601"],["/2021/08/10/Git学习/index.html","d407a6328154573ee04b8ec6e77c3c7e"],["/2021/08/15/pygame实践-1/index.html","87eb2a58256cfe62d6bf78f42d5f8cee"],["/2021/09/06/微信小程序开发/index.html","d509757464e1aa83529040f8caf9fd7b"],["/2021/09/21/命令集-1/index.html","f2cd9712b5d3025d76210ed10721357e"],["/2021/09/21/命令集-2/index.html","c94801076366866bcbd6e0dda93591e7"],["/2021/09/21/命令集-3/index.html","8ed61da78c903a155340203ab643df08"],["/2021/09/21/命令集-4/index.html","06c338c11b6eeebc7d24672cfbcefbaf"],["/2021/10/03/socket学习/index.html","71d856aed839569f62bfb620be45c7c8"],["/2021/10/10/dwm入门/index.html","6e5a02042c9eef94a178a1a93f1f2783"],["/2021/10/10/安装ohmyzsh并配置/index.html","21837c9a6914a42f21b51a377684d136"],["/2021/10/20/css学习/index.html","7e1b9922706e0315834a25a5527a644c"],["/2021/10/20/wm入坑/index.html","a62be8324603598ff6751d8d75b656f9"],["/2021/11/03/微信小程序学习/index.html","2068e037fd498a21779b5b0c19fd4e90"],["/2021/11/04/css揭秘/index.html","52a128d38e56c170559c499d048e5e58"],["/2021/11/05/css-练习/index.html","318789022301f07f47edaa353f4b00e8"],["/2021/11/21/命令集-5/index.html","8d8c95a7fc5fedf918c16962a7d8930b"],["/2021/11/21/命令集-6/index.html","f379ad868c26c19a6893ffa08b759f68"],["/2021/11/21/命令集-7/index.html","221f4e6ed80fa793e7d160e57a16261b"],["/2021/12/01/搭建wordpress/index.html","545f550daaf81e85a063a2fcc31b0034"],["/2021/12/08/python操作百度网盘/index.html","3ec37bff30f09431af94f2f3ca280359"],["/2021/12/14/js爬虫/index.html","f1e45c213a83bea13ec2aa9ddd05785a"],["/2021/12/25/为网站申请ssl证书/index.html","74ae43e103f594194f68040aafd97ceb"],["/2021/12/29/使用七牛云为网站提供服务/index.html","390cb9ba1ea922b3a1a8f110413b7469"],["/2021/12/30/jQurey继续学习/index.html","bb55b3ebd660314468a7232c33844809"],["/2021/12/30/jquery学习/index.html","cefdda7722665c913d08851512df6cac"],["/2021/12/31/vue学习/index.html","7cf90bfb8337482799f2af01472ecc85"],["/2022/01/02/疫情自动打卡/index.html","8473990c4bdd1f689f1b96f1eb606932"],["/2022/01/03/javaweb初体验/index.html","fa4b8d14073ce8e1c571016fd892111b"],["/2022/01/04/codewars练习/index.html","3a36488a0719588b0a149fb799996046"],["/2022/01/05/Spring学习/index.html","13be78dde91fb77b0688d03f8cc58f51"],["/2022/01/05/vue实战/index.html","b8d15ca329ad5ed966290373235892f0"],["/2022/01/08/gdb-gcc学习/index.html","1c11e637780f7f15b01c09e4ac9dff68"],["/2022/01/11/python-opencv学习/index.html","e606553ef031b3e1a7be4e9682ce548e"],["/2022/01/12/汇编实战/index.html","90cc57045ed271e7455b7b4b9b58cef6"],["/2022/01/17/pandas学习/index.html","4d6c37af7ea1cead05a188d8279f85e3"],["/2022/01/19/可视化图的工具/index.html","914119557c416cecd1c8c1b26640f599"],["/2022/01/19/机器学习入门/index.html","33e7f575f12bc0547444ad9c29e3132b"],["/2022/01/20/cousera-ML学习/index.html","30923eb0c1c17613be2f775e3e77e6ef"],["/2022/01/30/typora解绑后出现问题/index.html","5f4db3fda50910c28c4b3c33a0ec8570"],["/2022/02/03/NLP学习/index.html","76883c821678bbb7467b496a0a3421f2"],["/2022/02/04/Web漏洞学习/index.html","1f46b1bc4b67d6236af349a800c8b1da"],["/2022/02/04/pyqt学习/index.html","4e05efc48838415260c32a46c142a991"],["/2022/02/04/python爬虫/index.html","ecbbd54fc1c35cbc0637617e6ac72536"],["/2022/02/18/Electron学习/index.html","62b2e8ead0225f7c8e74124f28bc9345"],["/2022/02/22/疫情填报字段解析/index.html","3c5d891027f04bdd90eb67b9df4a1e8d"],["/2022/02/24/Bomb-lab实验/index.html","b5730a623c7bf4af6a4734036d46603b"],["/2022/03/05/nginx学习/index.html","9f618565ce2143f9f33202c2d36456a2"],["/2022/03/09/汇编原理课程学习/index.html","d4f1bb9d5897654c0a9781a37058ed57"],["/2022/03/11/Keras学习/index.html","258ce7e9c2442603781a072d282ece3f"],["/2022/04/01/graphviz学习/index.html","15f726064b118aa5ac449d61c8a459b3"],["/2022/04/07/django学习/index.html","579dd74275b412848d0670b56f7ffc5f"],["/2022/04/11/密码破解学习/index.html","8d9c82d5a14c6be0712720d0a151dd63"],["/2022/04/12/flex-bison学习/index.html","e1c32f7471f6cb88b8a739e451915853"],["/2022/04/15/pytorch学习/index.html","55f8502de1e77a5cc4fdf243c3548af0"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","e5341ce40c7baefa15dd18d626d53681"],["/2022/04/23/写一个音乐播放器/index.html","6f9fff4f49649769c666ab1a9f7307ee"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","30b663490f2bc92d977c9e668f2013ad"],["/2022/04/30/GAN学习/index.html","25f3c2180d343505b6075ca81cde5f24"],["/2022/05/02/html精学/index.html","250d7e55a1b7cfb8bec9c4bde41bb788"],["/2022/05/06/write-a-compiler-by-yourself/index.html","f18d5dae64122e93bc2a66d1529e93c5"],["/2022/05/30/acwj-01/index.html","f05a5b66326c7d229849ee853ac8fb1c"],["/2022/06/14/animeGAN/index.html","2be39e8af98c8e0b50caedc8a25cc416"],["/2022/07/09/c-与算法学习/index.html","1a2236dc03bdf4c8f9d22861a23c8f64"],["/2022/09/19/flask学习/index.html","cbb03ba4318f37abf5ce46402f9202d2"],["/2022/09/22/cs224w学习/index.html","c537cc421c9f72da336f32e2752d40bd"],["/2022/09/28/记录一次wp重装/index.html","301d07b022a6e14039bfaab113f23e42"],["/2022/10/01/Obsidian学习/index.html","7d557fbb1fcd8c2b4afb15d6df7d5871"],["/2022/10/08/vue-element-template实战/index.html","1c7f0d55ada700d2c628fb41ac451595"],["/2022/10/25/vue网上商城项目/index.html","3d6140b466276ab2593f8a3357e68457"],["/2022/11/11/leetcode刷题记录/index.html","2536f3c463cf4b3760d9996437aa13e2"],["/2022/11/11/使用overleaf优雅地写文章/index.html","7da97a3f3317fbcc54478365dd2f6532"],["/2022/11/22/磁力链接与RSS订阅/index.html","9cb7485426b6436e86739d48a5c9e2b6"],["/2022/12/11/uniapp申请获取地理位置/index.html","0dd8dac8f9a9c916b7a8b4dc1d69b914"],["/2022/12/26/pr剪辑学习/index.html","c4f32e13a7aa5dd3f5fc64734980e536"],["/2022/12/27/css中的flex和grid布局/index.html","8d9b28db84cbbe5bec620dab72152339"],["/2022/12/28/Flutter学习/index.html","7a333bfc5ac6ed77fb0d741b25d73304"],["/2023/01/01/美化github首页/index.html","23642b4f9654a0e75f152228af3e5403"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","8c42c60795224e49a8b1506e3a79a087"],["/2023/01/04/构建微信快捷发布文章工具/index.html","1d339062803402f9f78a5e3f37abc63c"],["/2023/01/14/dart学习/index.html","5072a4fb71228bf60ba8ee5821d18320"],["/2023/01/23/闲置服务器BT下载影视/index.html","ad006315a113503991680e6c135eb924"],["/2023/02/07/TotalCommander使用和学习/index.html","522df1ecd4f0133a26703137b684f3e3"],["/2023/02/13/docker学习/index.html","b95635fc84bc3ae8a5f27c4979e8795d"],["/2023/02/17/DLHLP学习/index.html","3255966063a1f5d3c162830bcdeb8c89"],["/2023/02/18/学习purecss构建自己的css框架/index.html","2d96477193c4177d90a83d2a52c752cc"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","5536390d21446b36a334bad7344ac4b0"],["/2023/03/05/STL学习/index.html","8d20ad6ac2dcee2c896c0b97aa78b50a"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","899065b95a6ad7902897fafa701df717"],["/2023/03/23/实战写浏览器插件/index.html","1e99a9b9eb6cff657b45c47d9419808b"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","c94c1ec5cb130f9e0b02f733ed8805b8"],["/2023/04/02/EndNote基本使用/index.html","701288651acbfb6a1940a0d4679a4a2a"],["/2023/04/04/mne处理脑电数据基本使用/index.html","132063c0b0600e17fd4eae2324d2b980"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","4aa4f092b6b90e19bd849227a8db6d3a"],["/2023/05/02/python中的logging模块/index.html","875d96c6578c128c18fbd7902dcc8ae6"],["/2023/05/07/python的特别方法与装饰器/index.html","5daba9579fc7d4f74baa90023646fafb"],["/2023/05/20/Wox插件编写/index.html","6bd6d0e3ed17ce766a7b03666dca1da4"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","6e5b08a6df44c5cc896bbb04b90fea1b"],["/2023/06/03/深入Clash配置文件/index.html","553e52c135699707eb787e5f5924f88a"],["/2023/06/10/node的包管理工具介绍/index.html","01f42a3a0c93ca745f0be01171826887"],["/2023/06/12/AI写作工作流/index.html","3bf18e2961afa4528d4864528622fa12"],["/2023/07/07/Astro-Vercel部署博客/index.html","13b61658e786e23b85b77e9c01488e82"],["/2023/07/09/青龙面板部署项目/index.html","a61b635bb50dfdaddbaf60e902c3874b"],["/about/index.html","8cfda59f688e60b4d054d73437a95f0f"],["/archives/2021/04/index.html","59e1ffa08ed4a444e0321777864ad98e"],["/archives/2021/05/index.html","a5f1315486eae5249129f0e75174d5b3"],["/archives/2021/06/index.html","451ca534c11034a51ebb65411750fcd3"],["/archives/2021/07/index.html","96d3c071b78188837ae10a1b67b83c61"],["/archives/2021/08/index.html","6fc513143f00ffa27b7d3b96e7693292"],["/archives/2021/09/index.html","9eb1658340db6fe3b9ebabf63ba201e6"],["/archives/2021/10/index.html","f9aed40899165cd54ae1d31d2926813c"],["/archives/2021/11/index.html","1637f59bc6c4478ffa3dfa607c16a2df"],["/archives/2021/12/index.html","c81313844c07d7cf472512ed2d7ecb35"],["/archives/2021/index.html","6a61e3ddd7dcf49a3f93418e62ddde0c"],["/archives/2022/01/index.html","4df36fd3a81a0af9d608f0e634927cea"],["/archives/2022/02/index.html","09bacca1c083303200e30c732d6ada3e"],["/archives/2022/03/index.html","74b6e134f4a5521fa6fdff4f2ac48816"],["/archives/2022/04/index.html","589d0e68dbb30351cd6216d0fca9b897"],["/archives/2022/05/index.html","d4a2cb4f14c0f9114c67ea00af08f8af"],["/archives/2022/06/index.html","220cf26765df34412dd73a44b131059e"],["/archives/2022/07/index.html","1a26e5e5c0da8c6ae0903f4a244ca513"],["/archives/2022/09/index.html","63991d495ce36db7b622f4ab493251a5"],["/archives/2022/10/index.html","ba033bf61d7ca6e8339b137b9248ea65"],["/archives/2022/11/index.html","1b27c058a5421825962313756b6a1d85"],["/archives/2022/12/index.html","26c6eeac1aec7eb3ff4f0cd24f777e9d"],["/archives/2022/index.html","a23346dab031f96b3360b7f582bbe0e6"],["/archives/2023/01/index.html","90a1763e7ed9d31eebda0a7a204ecd53"],["/archives/2023/02/index.html","e15849e31ce4ee9a64945040a755548b"],["/archives/2023/03/index.html","1768d8595ba292309d36df4c018139dc"],["/archives/2023/04/index.html","3906e567fb94423201e4ac88395e76f6"],["/archives/2023/05/index.html","eb4abdde0d58904c005891792fe11591"],["/archives/2023/06/index.html","ef763d5712dea029bef2c188c9ed0be7"],["/archives/2023/07/index.html","914ee05d63d7c0888d45fc00ee235f0c"],["/archives/2023/index.html","e5fc6e792a1484fafe2d107a0961e638"],["/archives/index.html","2dc2037a91990ec31bafc8209dd3802f"],["/archives/page/2/index.html","a53fc721bfa5f0bd2afa56261b6e7ef3"],["/archives/page/3/index.html","6291a936ad45e0efb6c4265bcef27c61"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","e9b95c72a976ab71834a9ec75a933567"],["/categories/Linux-study/index.html","d167bb6c5a7ab6729a83c14b3abcaf0a"],["/categories/ML/index.html","13088cf0619a1ad49f0e41dbdaca4cd6"],["/categories/Nginx/index.html","bf429b8992b4df631e44fed3f2dd6b36"],["/categories/Spring/index.html","da48d92eadda82c2a1d2fb8de2cd6e34"],["/categories/course/index.html","0976f0fbc3703620ce8419bc8a57c8d6"],["/categories/django/index.html","27b54d9addda14deef8d6c5468debc20"],["/categories/fun/index.html","030a98f887462429328700ae29538ab4"],["/categories/gcc/gdb/index.html","4f766a3d85d1fe8f87f18b6e2974a393"],["/categories/gcc/index.html","2aa1adc06e718135318cb91cbd7f2328"],["/categories/index.html","7478c1611bdaa199ee38c34550c4a895"],["/categories/java/index.html","ea9e3d6f95582418d0844257c09404cf"],["/categories/latex/index.html","2c96e5eb138d7ff39128d81215823a2a"],["/categories/python/index.html","d03df94fed42f30f39d5f23246d243f7"],["/categories/study/index.html","022bcf2828d89f2b4658d5570b5eb103"],["/categories/vue/index.html","6152f505a7d0c788a489efb311ea253b"],["/categories/误区/index.html","10fa11fad8b5fc9df2634eba79492203"],["/commonweal/index.html","1a44e1ea77f5257ac87604883581e05a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1000303ed7f9bec185b5a4005a282c1a"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","c002c66833de7e36a718a9f5979d7a1d"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","68a6c60021802ffbcb577a98385ef744"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","58437efbc8e9e9a7296e2e593e01c5cc"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","17d36b3ddbcf266fd29fc860b6bc439d"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","2475f062f37e540e3372425eadf3f988"],["/page/11/index.html","fdd0e0a1063815b2d67f4d3479d1f535"],["/page/12/index.html","ead60626cf51f7d7b331f3d9b9d927d0"],["/page/13/index.html","a42f20cb327bb7a04fed2efbe4c8de6a"],["/page/14/index.html","b814bfdc602736a69af285b4d43d3c3c"],["/page/15/index.html","9ee43874c391591f25d2235781938a70"],["/page/16/index.html","0590d83d427446d10933e735136ee683"],["/page/17/index.html","07df91a730e47aef22e9c3a2fcb47b9f"],["/page/18/index.html","12d691432e5b3439cd8725a782c7a7f3"],["/page/19/index.html","7e03c6bbeddd79a004bd47514d0ab00b"],["/page/2/index.html","38a04778f2f38633e35dbdb28fb322e3"],["/page/20/index.html","2674daa9cd4f02bc5311afc0758d1549"],["/page/21/index.html","e244b135061444de929013809f43b26c"],["/page/22/index.html","978029ccfdece60c5372749d978eb242"],["/page/23/index.html","d22dec27c9b3aeda7c9130691d443284"],["/page/24/index.html","2e909473396b39ea556715d825817fe7"],["/page/3/index.html","31af722ca4e94e1f8568604df254a681"],["/page/4/index.html","e91e88aee4ae7d7a62f1f438ac20b35b"],["/page/5/index.html","b06bf344c5ca6a7197eaa4e97519287b"],["/page/6/index.html","983743d2e113f36ff7a6449909109068"],["/page/7/index.html","3cca24025055063c07204a7ee7175291"],["/page/8/index.html","ea9c0ecd347d5f5759d36cd1f6514d57"],["/page/9/index.html","6381e474db3eff6dc4e74ab174f070cd"],["/resume/index.html","4239f20909e05c3264ede7eb14cff2a2"],["/schedule/index.html","55a04863917bc0eee2f006a763a2933e"],["/sitemap/index.html","56636e20f79c58cd8c1bb3723b297530"],["/sw-register.js","18131e5714c75dc7930770ff1fd9b11d"],["/tags/AI/index.html","9274fe930b84eaf1737de8f1764540cb"],["/tags/Astro/index.html","c3524f6fb8c517a097d66d344934b48e"],["/tags/BT/index.html","6c5bb78da25957d7729ebfc536dc2052"],["/tags/BaiduNetdisk/index.html","0dbb4ca42b4423a873e3dc592b629c83"],["/tags/Bootstrap5/index.html","25a9ee1fc1b466623359072b49cf315c"],["/tags/CSS3/index.html","461d0876c6e6b6581c9dc949b7559da4"],["/tags/Centos/index.html","160012bd129ad518727b428215617d05"],["/tags/EEG/index.html","556b8f02eb9f15a4d7fd3c391d0543f1"],["/tags/Electron/index.html","52503d1a104d6734cc4abf81a9f69de9"],["/tags/ElementUI/index.html","c97e009b7e05a9d8da6a1e3098f83b62"],["/tags/Flutter/index.html","0661e9a1d7e4b697eaeef8e21e3d8f53"],["/tags/GAN/index.html","93587e05c2f0e7f2168b3d4f82c284a0"],["/tags/GUI/index.html","1bbefaf891e2b0de9b1c175b15dd9405"],["/tags/Git/index.html","aafac84d3aff94a9467465fd6f96bed8"],["/tags/JavaScript/index.html","d9cbd111e4ce3ed775fce6a09b875810"],["/tags/Keras/index.html","724f1fbeae1d61f9f4134b6205488bb3"],["/tags/Linux/index.html","af54445c822ac33154e245d8b3153b95"],["/tags/ML/index.html","413f1a44ebe419b0847371349ba8c945"],["/tags/MNE/index.html","e57a38b04e65dfe8b335ac31db20ed0f"],["/tags/NLP学习/index.html","c4e9c86f9cc6421b04844369f3cd31a9"],["/tags/Nginx/index.html","ce548b73c0b61cefc37e2b5f8f5f917b"],["/tags/OSS存储/index.html","563531abb4f74ddbe1f47db2548719c6"],["/tags/Obsidian/index.html","3ba69e1b97cbf97ed2fc881c8de21e09"],["/tags/Qt/index.html","ca1a5706d5dbfb3a49bb200a1fd86cf6"],["/tags/RSS/index.html","e32a213e9a83b76f5e19edc8f9d1713e"],["/tags/SSL/index.html","f31aefa761bd1f8e4e5b49abd79ba5bf"],["/tags/Scrapy/index.html","c53322fa9379c795407854ee57e1e936"],["/tags/Speech/index.html","194ca59c7d8f25c167f3e71f2eab1bff"],["/tags/TotalCommander/index.html","2c9f477716750d671b1eac27d94a2a59"],["/tags/VPN/index.html","43938174798d28c491cda55005fa69c5"],["/tags/Vercel/index.html","71795ae544b437667dd9299c43784a35"],["/tags/Web/index.html","54643f23d8a1f73eff93fb00ae54861f"],["/tags/algorithm/index.html","d9521be4a0c7c2c80b09ab3b9d2f8699"],["/tags/bison/index.html","d46ed7bb203295cddb6ac351b755994a"],["/tags/bomb-lab/index.html","9533da0ca57a41b00f0683466673fe95"],["/tags/c/index.html","df8001fb48af140cf159c9b73ce9a8c3"],["/tags/cheerio/index.html","1377ca4b35a6146e638f09ced8ba508c"],["/tags/codewars/index.html","d112c822b8a3a18a1693e9256ccc59e8"],["/tags/compile/index.html","f323c8e6ae171a78152b6e32c43eeab9"],["/tags/compiler/index.html","304da34de69b13cbe6393245a8cd9e30"],["/tags/cors/index.html","eb4c8d2ec216a7b6d342e5bb8238f90e"],["/tags/course/index.html","4f0b913e5286468d77e44e0b186670ea"],["/tags/cpp/index.html","001496bfff2e6fa7a6daca4cce84cfff"],["/tags/crypto/index.html","d5adf68a8b8e34f630494c7e12249e5f"],["/tags/csapp/index.html","58b6c6fa3567e9c40a1c64d37a09c5ca"],["/tags/csp/index.html","1623b074711e0546b70c6bc7514ef460"],["/tags/css/index.html","4ba7de3bcdaf919e5d18993a7bb024cf"],["/tags/dart/index.html","8ea97ca14e339e86deba28b525359203"],["/tags/data-structure/index.html","0e5ce234139a5bca4aec5dc9dfeafcc1"],["/tags/database/index.html","fc6b4207f27cb5460d51a72c18f455b3"],["/tags/deep-learning/index.html","0b3a1bcca9981977c1ef294cc23dd0fa"],["/tags/django/index.html","510dc40e822a8845515110b8454174ba"],["/tags/docker/index.html","cbd636365f4b48e017673a4559128a84"],["/tags/dwm/index.html","8cc2b90bf0a1072f241336bea105daff"],["/tags/exercise/index.html","c3b46e601105864f48e2bc02220e9281"],["/tags/filebrowser/index.html","50d83913b17bcff94be2f204ff7e1f82"],["/tags/flask/index.html","5de0bb6d2b41206fc7eb867f4ac4d407"],["/tags/flex/index.html","990eb1b03951ddf65c96bbfc68ff2f5f"],["/tags/front/index.html","e5b8bd75cd2a97c4f4f9800be5f05f71"],["/tags/gcc/index.html","24751d90062465c502ddf858a3c68f46"],["/tags/gdb/index.html","f78738388acfdd21e0f27408116a15ea"],["/tags/github-profile/index.html","2576bcbf605b621f4b7955591f4ee4e9"],["/tags/github/index.html","b6d87e141eae84ae1f34bef57be9dbb8"],["/tags/graphviz/index.html","e00d1ce88f0e7b7efe28eb5f71cf2a83"],["/tags/grid/index.html","9c639553f72739cbfda6d43f364adf19"],["/tags/html/index.html","b6de4684428b6b74cece8a585de6cc2c"],["/tags/i3wm/index.html","bbf9789d03dacffd15ee47d2d7cd2b3f"],["/tags/index.html","c8684d9e95f9c19ddd46b040282f4b04"],["/tags/issue/index.html","d6ecbe38d873278909d84e5cf5550397"],["/tags/jQuery/index.html","f167371f254d0450ca3d866d764c3f10"],["/tags/java/index.html","1d4177304e9d3c40f8c01aed3f48b51e"],["/tags/js/index.html","559a9bf5971e3817a7b5d09eabea6f91"],["/tags/latex/index.html","ab982617fee7f682fb80cbddb5cb2b02"],["/tags/leetcode/index.html","c207e41c421c6b5086e354d45b609873"],["/tags/lex/index.html","b6a3e241b1f67f5cd3bfe3228dc17e25"],["/tags/logging/index.html","3b60945fd3beb00a00719860c62e060c"],["/tags/material/index.html","a1daaba1cd1462e5050300945a3d0cb9"],["/tags/music-player/index.html","cc7664324474408ffc1162a0ba1ed818"],["/tags/node/index.html","ab8262830e34e7735b59168303bf5e9e"],["/tags/nodejs/index.html","4bdeb1a8d40f700cfb430d51b7fc0cfd"],["/tags/noj/index.html","a4af23c6aa2e5041ec4b2ee83952fd91"],["/tags/npm/index.html","b844893ef3aa7054498b6948e3778d7c"],["/tags/opencv/index.html","3649e5a66455555fa838164dcee1d176"],["/tags/overleaf/index.html","c3a68d4c44f09291b933be640b5ae4d7"],["/tags/pandas/index.html","93e27d9b5056f1052d584675bee2d5cd"],["/tags/paper/index.html","102c6d9235ebfea1d0db56f5e4a4716f"],["/tags/premiere-pro/index.html","52983f2b3d6db1efa660a1db90036ccf"],["/tags/proxy/index.html","98e41f4915eaa7461c92aff223eb6d54"],["/tags/pure-css/index.html","532381a107b76546eae78d010b47979c"],["/tags/pygame/index.html","0aeea61a566a6b3e352e79c2f2d2e064"],["/tags/python/index.html","762aa67d0a87e6e126a72b52a185abea"],["/tags/python/page/2/index.html","b48dbbe01df5bdaea61b1381695ecb97"],["/tags/pytorch/index.html","123726452ca8298250041bfea972b658"],["/tags/reading/index.html","ede5b5086a41b7b0f20a0d262fd153c0"],["/tags/request/index.html","9edfe0b7e1bede235d19c13827e58613"],["/tags/requests/index.html","dfb9152b09917ce514a762f42dadff8a"],["/tags/security/index.html","bb62b0bd2fde5d132df120d7e247ce13"],["/tags/shell/index.html","0432c8570dcc09e7519add932d1e9101"],["/tags/sign-in/index.html","c7dd487c79ace5b599413e02cc24a761"],["/tags/socket/index.html","9aa9fc5fa626b5fcf8ee017e7cb50579"],["/tags/spider/index.html","8b63820f0eb2c7acbbc8c6cf3428a337"],["/tags/splash/index.html","cef5565147e06f0e6ff118e74ea99254"],["/tags/stl/index.html","cfa7fe6ae59d46e61343a39e329764c7"],["/tags/sumatra/index.html","6717011b92bcf91bb695a3df867c8706"],["/tags/superagent/index.html","8c5d6e4b4c8678ff51df4de960530b5d"],["/tags/tensorlow/index.html","c488ab0dd78389efb8fd0e329d27aa7c"],["/tags/tex/index.html","bb6867654c90c5b38b958e6705a313a5"],["/tags/thesis/index.html","b675b9df76d24853164762b6c37aaf19"],["/tags/threading/index.html","671a96ef7f9f569b492c18b045806896"],["/tags/tkinter/index.html","9c21910d9bb25bf9942c644a42e356bd"],["/tags/torrent/index.html","9d08f39e77e42a51e2a406e5152622c4"],["/tags/tutorial/index.html","3714ab30a17d5a56002374007b8ee0c0"],["/tags/typora/index.html","0e8cecbc318121d047ea1a8d7bc814d2"],["/tags/uniapp/index.html","6e23677395efd7069c1cf7a97aac0fb7"],["/tags/vite/index.html","f17a10babacb145fe36decac5c70d8c1"],["/tags/vscode/index.html","4755fe2379ecaf064aff5f12a11e10d4"],["/tags/vue-element-template/index.html","0fe81bc2d337edc60475152d847da310"],["/tags/vue/index.html","21abc81f86baae3a06e8ab10e7501413"],["/tags/vue2/index.html","d5959b5cade34fe64bec213b67f8201e"],["/tags/vue3-x/index.html","359ebde6981e5066ffb86dd3bcdd132f"],["/tags/wechat/index.html","6e119b4686990b1790fa31a3a7e88c42"],["/tags/wm/index.html","6d9d57cd36bbc7c81be90b303b197457"],["/tags/wordpress/index.html","06e72772ca00ffa67713ed1f6c84ed5a"],["/tags/workflow/index.html","c195dfd87e73408f235f7c4c6890d980"],["/tags/xpath/index.html","4d8b3ddee07b186d7bba650ce919efca"],["/tags/yacc/index.html","19671f66d2c972d6de96c694438dec79"],["/tags/yarn/index.html","7959a1057cc18af2c0df37d1ecbf3334"],["/tags/zsh/index.html","5bc815cb5148f41e897cd29484d5dbef"],["/tags/七牛云/index.html","cb1c1949bd55f0ca99dbd548b44c86f3"],["/tags/函数/index.html","62ae693b85b711d63a5779a31adf1854"],["/tags/剪辑/index.html","790e22de52060b729079c81e072c66ba"],["/tags/存储/index.html","788992e80fb775d0d6de239a97e90ca0"],["/tags/实战/index.html","87f45c26eb0f2ca7dd4fb9e3e5198c84"],["/tags/工具使用/index.html","cc74c8dcc73b32810458f037784b4a54"],["/tags/建站/index.html","e242620d964481c7a80c7887b37d5b44"],["/tags/微信小程序/index.html","f30ea194ec5a4aa85a43b51aaeb8b2dc"],["/tags/指针/index.html","a2555d9319382192ca83bada4dfde9f6"],["/tags/插件/index.html","c42abdaa23b7c576f8b327e0a15536a0"],["/tags/效率提升/index.html","7e3ff6fae978ccc27a9aef6f9deaa81e"],["/tags/日志/index.html","3b98b3f832937b3f33ea64375a11f343"],["/tags/汇编/index.html","391ee07a784249d24cb2dc31f62ba9cd"],["/tags/油猴脚本/index.html","e24990f48abd3e19013756d0513f50b9"],["/tags/浏览器/index.html","3f5e1150d84636933312140677dbfee7"],["/tags/爬虫/index.html","acc8d438918295fbeb8bdc9345509aef"],["/tags/算法/index.html","4d3bb7bd737b9f01a8b15cae44308560"],["/tags/编译原理/index.html","659b512711a3e4d0fbdc26cac26ffdda"],["/tags/获取地理位置/index.html","cf907a7dd8594f4cc2f00ae8fd689030"]];
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
