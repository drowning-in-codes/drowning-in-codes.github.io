/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","abfa9ab7383a246d7de9354406a6e1bb"],["/2021/04/20/稀疏矩阵/index.html","33f68fb55c68799b3e6b9e927d7c1f4b"],["/2021/04/23/广义表简介/index.html","cd99f09933444364dfff6804de6bd061"],["/2021/04/29/关于指针和函数/index.html","bc8e6cdae40928ebcc0ef9ed07bdfce2"],["/2021/05/10/哈夫曼编-译码/index.html","ff9c870eead4d9f2735b0bd30e937889"],["/2021/05/17/数据结构noj_2/index.html","a94b3822e6e482f5516ebb90eab0cc92"],["/2021/05/30/数据结构试验/index.html","85cb9a59a99636d0e73937514e7902b5"],["/2021/06/12/数据结构noj-3/index.html","89129094e8dc0362a3f7f0aed276af2f"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","75bd277aaf2ec56b988901724c852c21"],["/2021/07/08/课程资源分享/index.html","a7bc2652c16f17a3ccc70b497704af89"],["/2021/07/20/Scrapy-下载图片-文件/index.html","84b282435868498fca62382ede6ebff5"],["/2021/07/21/Scrapy-动态网页爬取/index.html","2da51a18937aef2edbbc1606342b6649"],["/2021/07/21/疫情打卡/index.html","f84c7f3513cf2de72c02b6b96b94ccca"],["/2021/07/29/Scrapy代理设置/index.html","da7f68bfa18b3f406ba15bd378449c7b"],["/2021/07/29/数据库认识/index.html","55da855b59e2374e8865ad849faeef99"],["/2021/07/31/Python多线程学习/index.html","b1b8148d6eb79af1901440e1adf862b2"],["/2021/07/31/tkinter-requests练习/index.html","cfcf73b55855ba3923d627bd2d76197d"],["/2021/08/10/Git学习/index.html","f093f3edec5f0ced2fecf3400ecebe53"],["/2021/08/15/pygame实践-1/index.html","8fcc7d32d1179f913c77850b28f67746"],["/2021/09/06/微信小程序开发/index.html","59b9f05ea895acddaeedaf9f929c5459"],["/2021/09/21/命令集-1/index.html","8840331b15014ee85f77a87fbb35719c"],["/2021/09/21/命令集-2/index.html","0e226ff3861789501f0d72f4c9306497"],["/2021/09/21/命令集-3/index.html","5f0394c4b5cb627e28bf8a1087e8a01d"],["/2021/09/21/命令集-4/index.html","85b072adecbd1d7580c35fdb55ce1f55"],["/2021/10/03/socket学习/index.html","c80723a8472929f596d0204c6a291cb4"],["/2021/10/10/dwm入门/index.html","e9f99cb4b0c84b6a7c3577bfc840e363"],["/2021/10/10/安装ohmyzsh并配置/index.html","be6291ff1dc3ad3e8e7ec974059bd3c3"],["/2021/10/20/css学习/index.html","2cdc176a0458c58f05ae137c6b1637f6"],["/2021/10/20/wm入坑/index.html","8a81c7fab07673a919c80b8cf3721e38"],["/2021/11/03/微信小程序学习/index.html","d2ad63abcc501ef1bb6ae303472e97ed"],["/2021/11/04/css揭秘/index.html","207278fb4f73f618d8d85fde956bbba5"],["/2021/11/05/css-练习/index.html","efa567c78bd49e9c90fdb38cb24c7896"],["/2021/11/21/命令集-5/index.html","5798d9c01606282d09c7b880cca7ba1c"],["/2021/11/21/命令集-6/index.html","f77909fd6f1c5eb039d3ed868123fbc9"],["/2021/11/21/命令集-7/index.html","90330e1406f63e8baf633d381481ec2d"],["/2021/12/01/搭建wordpress/index.html","49bf20b05da35fdceae77213e7df169c"],["/2021/12/08/python操作百度网盘/index.html","96ba6314f6747b9725a3f2ad86c78cff"],["/2021/12/14/js爬虫/index.html","a60c16d291430017e0479b6b32acfa58"],["/2021/12/25/为网站申请ssl证书/index.html","e27b75317b0907a9ae8a762d9db418ee"],["/2021/12/29/使用七牛云为网站提供服务/index.html","8a1a9b6c83ed0003218024d9adaf9256"],["/2021/12/30/jQurey继续学习/index.html","72109f32cc2650532ba9260746ba9b9b"],["/2021/12/30/jquery学习/index.html","972c1e6ac3715ba0babd2fe96c78db7e"],["/2021/12/31/vue学习/index.html","238c536b711439a479bf07ff01278dad"],["/2022/01/02/疫情自动打卡/index.html","862ba2c75567fb3ef3f1640e50569e8d"],["/2022/01/03/javaweb初体验/index.html","915a3949d979a4d5077bdfa469bca7eb"],["/2022/01/04/codewars练习/index.html","10861739e8d1a7a8ac74799ab50a8985"],["/2022/01/05/Spring学习/index.html","e09a57a61bceb06bf0250dfe5838c820"],["/2022/01/05/vue实战/index.html","49f28d75ac8389fbba85c4d72992cc91"],["/2022/01/08/gdb-gcc学习/index.html","c949888b0a4740c3345fc8e0181e4b9b"],["/2022/01/11/python-opencv学习/index.html","e35f4b1d915454289598d429212ebd6a"],["/2022/01/12/汇编实战/index.html","b0f6be7e3817620b6a048d3a2e5f956d"],["/2022/01/17/pandas学习/index.html","0badf628597281e84d3553af62631f33"],["/2022/01/19/可视化图的工具/index.html","f8d0fc870a7d209a0afb13cd0f2652f6"],["/2022/01/19/机器学习入门/index.html","cbc93359778e031ba89da7ed6112116f"],["/2022/01/20/cousera-ML学习/index.html","51f56b8cca4a30a035f0e911121b3750"],["/2022/01/30/typora解绑后出现问题/index.html","1388f2d51baa8a1f303d511372ca4a85"],["/2022/02/03/NLP学习/index.html","c3ccc7ffa21c8b0cefc0177f5e6694f3"],["/2022/02/04/Web漏洞学习/index.html","d592c1798c73546bc250ffe06638d587"],["/2022/02/04/pyqt学习/index.html","190e0cfd31806cfa3a3fc571b17ac651"],["/2022/02/04/python爬虫/index.html","9130751582e93749f2ab5366aa78bb13"],["/2022/02/18/Electron学习/index.html","83d51cb7b0cf19b0e8c6301726a4762d"],["/2022/02/22/疫情填报字段解析/index.html","fa33fd2a97f2cdd80d9f259fca94dca8"],["/2022/02/24/Bomb-lab实验/index.html","b9d4daa8a3f62c850b75f3a6c181ca9f"],["/2022/03/05/nginx学习/index.html","0791bd7a1bbb9515ac1061a645648438"],["/2022/03/09/汇编原理课程学习/index.html","3eac4464d74430bff768c81cca9f563d"],["/2022/03/11/Keras学习/index.html","0ac1545ac60b0413455f297dd79434cc"],["/2022/04/01/graphviz学习/index.html","ab713ca3e30622978d0ac3c52ae8e4e4"],["/2022/04/07/django学习/index.html","9d46654b0483076b526db3f1e6aab819"],["/2022/04/11/密码破解学习/index.html","994d0f9fb5e04b470f4a26257db6782f"],["/2022/04/12/flex-bison学习/index.html","ff0be97aad6e76fe8009f0bcd0618f36"],["/2022/04/15/pytorch学习/index.html","8ebe8b42cab43616a368b421db364ea9"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","b67b234a37abd20ff276edb42e5a2372"],["/2022/04/23/写一个音乐播放器/index.html","025911aa4a8d6c42f94bd76f001ec19d"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","c1c922ee246803aa0ee67d1d0775dcbd"],["/2022/04/30/GAN学习/index.html","ccb53e87f39330b9011bcd0d72ae3976"],["/2022/05/02/html精学/index.html","86b8358642f053d6b019ff88760686c5"],["/2022/05/06/write-a-compiler-by-yourself/index.html","d271b6d0997cde91d3eab8cf5ebdcdf5"],["/2022/05/30/acwj-01/index.html","684a9e730fd59b35fb31fab68e062a4b"],["/2022/06/14/animeGAN/index.html","8d2738e5dd112f7b0f61e308bd5a7e3d"],["/2022/07/09/c-与算法学习/index.html","5de55a62215d192af66060288958bc63"],["/2022/09/19/flask学习/index.html","13a9a7d35029d043bcd6b7591e7f5388"],["/2022/09/22/cs224w学习/index.html","2b5da55ad8aacd0de1f2173ce7212cb1"],["/2022/09/28/记录一次wp重装/index.html","789faa45606c2a78f4e36721715f5852"],["/2022/10/01/Obsidian学习/index.html","b93ba0f8d1c01983630d25ecd624cd80"],["/2022/10/08/vue-element-template实战/index.html","612c98e85705a1bc6f9317f0a3d45ea4"],["/2022/10/25/vue网上商城项目/index.html","c81eac66095e40590662760405f2d002"],["/2022/11/11/leetcode刷题记录/index.html","8499169bc4fb8ffb71c2805b670b86b2"],["/2022/11/11/使用overleaf优雅地写文章/index.html","04cdfd239105af4e88ffbe048c734d61"],["/2022/11/22/磁力链接与RSS订阅/index.html","80c183e8b25e5ae1e62b3cce3644b407"],["/2022/12/11/uniapp申请获取地理位置/index.html","d966d849cd05e9a5a5b1174daf4da0dc"],["/2022/12/26/pr剪辑学习/index.html","d1c4e9fa360a04ec8a3aad20fc12ac76"],["/2022/12/27/css中的flex和grid布局/index.html","9a7dceb4eb8d8281c04be713a34f7bef"],["/2022/12/28/Flutter学习/index.html","c52a407bc295051597515f52f3961686"],["/2023/01/01/美化github首页/index.html","37cda3600e49757c957f760628130824"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","fc2632f669746fda38d5c5ba2c37f431"],["/2023/01/04/构建微信快捷发布文章工具/index.html","26aeeee3dd822d2d82437467b99be94b"],["/2023/01/14/dart学习/index.html","eb3fbc280a507b0f96e7a868cb0f93ed"],["/2023/01/23/闲置服务器BT下载影视/index.html","a831f254f5897342ecbfcc9eb9237078"],["/2023/02/07/TotalCommander使用和学习/index.html","b1f915c78267d1fe92cff47cba008c07"],["/2023/02/13/docker学习/index.html","af6e60b7e892fde326c451a6097edc76"],["/2023/02/17/DLHLP学习/index.html","2b1c7c7a30e6b606a139028294d11e45"],["/2023/02/18/学习purecss构建自己的css框架/index.html","931593b8448dcb6ad0074cbec47c704f"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","47bcba7a4b2b3b902b6c271618a3f2ac"],["/2023/03/05/STL学习/index.html","ab2551855cfa24305b7bca2604d17c48"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","d7b4a1ab9f0c5e8397d60d2154de7d3d"],["/2023/03/23/实战写浏览器插件/index.html","3002c1ea5378bba9495c4474caded0a9"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","0337030c1a9b72fc55f111605f3e52d4"],["/2023/04/02/EndNote基本使用/index.html","7809f712f795ba72d880ed06c6265439"],["/2023/04/04/mne处理脑电数据基本使用/index.html","b64c57a54996e9054af2a7a34eefe962"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","c7d4d6d08d84afae03505096320ef533"],["/2023/05/02/python中的logging模块/index.html","cc19b432dd3f0562351da56833821417"],["/about/index.html","9b2f1be5c1372cb5c058291ce5b71806"],["/archives/2021/04/index.html","a4e421b20532f8b40fb365f02a6de4c7"],["/archives/2021/05/index.html","295a8ac9a26b6ec2e40e7f7653d93159"],["/archives/2021/06/index.html","e9ee46083e712cde03c2d0e613415c74"],["/archives/2021/07/index.html","6d48d8826db3197867cacb8e8e6fdab3"],["/archives/2021/08/index.html","0a0e6a60380b38c9ce9b376bfd85059e"],["/archives/2021/09/index.html","801039520710d479b3b694beb607758d"],["/archives/2021/10/index.html","4f2f4977033cc979fc036a1c6e7d58da"],["/archives/2021/11/index.html","a4591625efccd589833a66efc7a3cccf"],["/archives/2021/12/index.html","1defa355baebbb76f75506454049e803"],["/archives/2021/index.html","9ae977871d594888942dea926aa3d62d"],["/archives/2022/01/index.html","a9902e4991ea0686531a5950f0237532"],["/archives/2022/02/index.html","379c582b7e2357888a2b6c4c1f4b2466"],["/archives/2022/03/index.html","2328b78f581b7c3278f7951e8f71f5b1"],["/archives/2022/04/index.html","15f77e8b4306221b705150e13cfe9590"],["/archives/2022/05/index.html","ff406473e0a4f8a63604f199aa9f0b01"],["/archives/2022/06/index.html","ac5e033c9babc612f3e49401bdcc8080"],["/archives/2022/07/index.html","909d212212c6668b0d92d814f4806559"],["/archives/2022/09/index.html","1a007775bceae3616d59a324c77561bc"],["/archives/2022/10/index.html","0466971c7b8b4e529861e588e4278731"],["/archives/2022/11/index.html","a7a0d36d34236802d2e22eff96a0547e"],["/archives/2022/12/index.html","13da4f4cb8e958f29cb3ad389351c1e4"],["/archives/2022/index.html","c553b686afde7b9fda2e1971e3183033"],["/archives/2023/01/index.html","3d8af53d7e4cb7af927c504ad4d607cd"],["/archives/2023/02/index.html","a8ddf26d8d11b3bb10e5a36c9d9f198b"],["/archives/2023/03/index.html","52011456d57e61a16350937ce8536dee"],["/archives/2023/04/index.html","198e47e0c8f2b47803c554c90b14b13f"],["/archives/2023/05/index.html","cd68eab9c06eefed652ff0d32d68972a"],["/archives/2023/index.html","7ecf0d8709808c11f7712c0f456adc7a"],["/archives/index.html","6d0dac42475c80aa0ba1e36685e8b919"],["/archives/page/2/index.html","1dd9da76b004225f01c399832339f39a"],["/archives/page/3/index.html","cf46ea7505c16905d34808641e5b83c6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","0a600d5e8f9c1183bf5d572b3dcd33c3"],["/categories/Linux-study/index.html","01e82a5b9fd89c9278f9b1b84086ebd3"],["/categories/ML/index.html","4b1c40be7f24ea369a2291f17839b083"],["/categories/Nginx/index.html","f60dd3757f3447b7d31011c0f15cb5dd"],["/categories/Spring/index.html","efea729a709902c0bc4edac4d61ef2a4"],["/categories/course/index.html","55e3934312eeb8c5603fc16e57c7728b"],["/categories/django/index.html","7f4696c92c73c5d14cb510be8efac8f1"],["/categories/fun/index.html","ea9413adddec8d8be9b1ece89cb95613"],["/categories/gcc/gdb/index.html","9d8e1aa5b150150b7e1ffeae1df86990"],["/categories/gcc/index.html","94461225f7c48db6ca860238391762a6"],["/categories/index.html","2565cf8e5c9ec4e6c8e432c52e85b815"],["/categories/java/index.html","aba608094c549b53033171c4d1d2c90d"],["/categories/latex/index.html","2b16027bb1a03a78d3afe6fb2ebc4815"],["/categories/python/index.html","f0ae302c4ffd0353f8801125372cbc28"],["/categories/study/index.html","0904bf2993b20594569e9cdf6a25900e"],["/categories/vue/index.html","47d7b01afcf27d0b671bc853380365bc"],["/categories/误区/index.html","996be68787b682ae7179cb902cf24985"],["/commonweal/index.html","7816ea6fe685ada2561d5e4e57f5b25e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d9361643a690167a686a86861a1e8655"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","196857a68775f5fcd28a6586ff45a514"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","f9e9f0a9ccd0541cb6bbbe4b456e4609"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","df9e5bb04dc83a6e971c352dd48fb271"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","1879d03f394a91333610857f96aa037e"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","30aceb4604bbfc88febc198a86aa2126"],["/page/11/index.html","89f382625c77276024a55000f204aed8"],["/page/12/index.html","66d3e835af3f54fe90f376c5a0cc168b"],["/page/13/index.html","cee2bcab1938c3b87bd8cbdbb69bef5d"],["/page/14/index.html","bca31a6d3557a9f8cf03d91bbc62e743"],["/page/15/index.html","eebf3b9549c0e24e14c7c75ec09f3e93"],["/page/16/index.html","a2870e65c4ddca59005023794e07bcf0"],["/page/17/index.html","a4b7d011a6a755bfd4d63044e874821e"],["/page/18/index.html","894575168789f3b4793aef3ede25226b"],["/page/19/index.html","4bd18745f8af9dec0bf364489ffc66a9"],["/page/2/index.html","b0d69f34cc8f7e6b30acca92bb78b13a"],["/page/20/index.html","e82a3781e914d4eb6075e7313ecb638c"],["/page/21/index.html","f9e044a3a5b2c33e0c3236a4febaf156"],["/page/22/index.html","fda3266b2c3b405f439354801913c1e7"],["/page/23/index.html","a53194c0095d6509f76b99093a7a1171"],["/page/3/index.html","376aaf9dafbeefe7e69b007035bbfe8d"],["/page/4/index.html","109f14133d5c374add01400a6a0c13b3"],["/page/5/index.html","b4eee67736cdd727b064bf41e6aeac6d"],["/page/6/index.html","458bb66329a37b2b8f12bc736e7782ce"],["/page/7/index.html","b7728aa7d9d6905e4c2f3e0f8c3e5aeb"],["/page/8/index.html","c03f1fd5708c66846c71ad1f92c781b4"],["/page/9/index.html","ae506595d2326586f32866ef8b24039a"],["/resume/index.html","ce2366754a31a2fcca36d78003f7ce6e"],["/schedule/index.html","c0bc490b5ca7ad0ac710ef764bb69e39"],["/sitemap/index.html","58025f26b3ab0c466209208d4e6a2c1f"],["/sw-register.js","59fc62e14dc45ec7a4f8c1bb1020a064"],["/tags/AI/index.html","2f4db20942fbf4519538bb67a670e93a"],["/tags/BT/index.html","e4e9d557759261330907bb356add7bfb"],["/tags/BaiduNetdisk/index.html","bd00d087674844529bbd424718d50a53"],["/tags/Bootstrap5/index.html","f406936ac5ddf71bb755f9b99659bddd"],["/tags/CSS3/index.html","9213e7d104d472755fc9951822586c65"],["/tags/Centos/index.html","6189d6afbf1d9c2813b400d12f308598"],["/tags/EEG/index.html","423aa965b6f1cd05e746599bd54a4f34"],["/tags/Electron/index.html","483318cc2f19e046fbc7cbd496fe0171"],["/tags/ElementUI/index.html","dd728e367576b0b26790c3748746d708"],["/tags/Flutter/index.html","58d188095703cad54452031fe73ab8b9"],["/tags/GAN/index.html","289123b066c40f0c6961c46cb3b6cc39"],["/tags/GUI/index.html","f925993ec4b92e4f9887f5c5d55d8617"],["/tags/Git/index.html","ba0b45fc2d2f993880e0c3ccd7d1b454"],["/tags/JavaScript/index.html","9173863cdf1684706e5188511786eb24"],["/tags/Keras/index.html","95f165c58c939892d144c2e35152c175"],["/tags/Linux/index.html","e73fa2ee3a74c38681ad1249908b77cf"],["/tags/ML/index.html","fb9ee6288164d7b5359a09480271ebc1"],["/tags/MNE/index.html","bab95bef02d087a01813ea237b2fd089"],["/tags/NLP学习/index.html","7885e818333131fc3dc9d90bf9cd0215"],["/tags/Nginx/index.html","00408564ed0a56d7ef0eb5bed8706c0b"],["/tags/OSS存储/index.html","a39f7b54611b399c3cc3d4192cf8e1fe"],["/tags/Obsidian/index.html","2598381982bac5e05579eb643b8ac0e0"],["/tags/Qt/index.html","d5a8bc547d4b546d43bc4f38c0452d96"],["/tags/RSS/index.html","06831bf275c0b99ee2b71b3bdc8f3ff9"],["/tags/SSL/index.html","65e641b1f1ec4b96ee1c7bf25098f181"],["/tags/Scrapy/index.html","1466134f94b06d7a9ad191c5e3cdb3e7"],["/tags/Speech/index.html","1501bc803be20d481595e8d11f2ec464"],["/tags/TotalCommander/index.html","db91a77e6289b42ea24dad6bdffb391a"],["/tags/Web/index.html","beec551242de182637176a07414d08c3"],["/tags/algorithm/index.html","d5fb0ff35157e335e0d6370551a2982d"],["/tags/bison/index.html","01284795f534225387b0688893956667"],["/tags/bomb-lab/index.html","6978f30608fe54a14794eb3551d39f54"],["/tags/c/index.html","5d9f3f16712e80edb1c4cb4c37ab8e39"],["/tags/cheerio/index.html","70c8f4f5a87a7a2df7d371bf4e362ed6"],["/tags/codewars/index.html","27dc71f70387fe027d456b48534844d6"],["/tags/compile/index.html","b6563ba5635b4944f871bee929ccc395"],["/tags/compiler/index.html","6d8c2471d3dc11b599126caff9eb87a0"],["/tags/cors/index.html","fbba08649a759164172da53acd1dde58"],["/tags/course/index.html","b91bbe6288c72e966b3327983932aafa"],["/tags/cpp/index.html","243481b735517c9ec074d86e85f159db"],["/tags/crypto/index.html","61391b37b3bc37c2e844822375e9a4ee"],["/tags/csapp/index.html","51f3ba25c4eeebdd3f97b4dd939b1435"],["/tags/csp/index.html","984370806c56b9eb6f6884b2f2db701b"],["/tags/css/index.html","14f1dc03a3aae4b3f00b67b7e35543a0"],["/tags/dart/index.html","8d1fa8c4f78377273d5a2bb7204e61ce"],["/tags/data-structure/index.html","be2087107f0fda4b6716812aa20598ca"],["/tags/database/index.html","2bff2f414c0b77ac4db0009c0e432eb2"],["/tags/deep-learning/index.html","417f422dbfd95e264fa8526730f14a45"],["/tags/django/index.html","0308649f902d0de48cd430e90c96f125"],["/tags/docker/index.html","52e4deed4eb43380b7df5f57ae043012"],["/tags/dwm/index.html","5da3a8f4308317bbac816c54185262ea"],["/tags/exercise/index.html","206e4cbb3c70f47170b270baffe7e136"],["/tags/filebrowser/index.html","7aef649a6d8a319694c64630bfb633df"],["/tags/flask/index.html","4977c468ebd3f2d1f40294ecb763852a"],["/tags/flex/index.html","842e6ad985812aa17a7849ae7da04e03"],["/tags/front/index.html","2c953b0d5d747db7976282b24710ed20"],["/tags/gcc/index.html","3ef3702cc158d05454cb27879e6a80dc"],["/tags/gdb/index.html","97e4cd6758d2419176b33259a7d6437c"],["/tags/github-profile/index.html","88e33bff559b1696521761bbb14ac601"],["/tags/github/index.html","49ed8239dead634b4536f6e5e9c869ff"],["/tags/graphviz/index.html","a98aaa9a430d159e18d7ef743aa1c8ce"],["/tags/grid/index.html","41f1a3d2add6711c2b64268c97cdca03"],["/tags/html/index.html","f123e27b8dbde344129703890e7d5c3e"],["/tags/i3wm/index.html","3f5fea51e48b1fb0bcef76e49909b835"],["/tags/index.html","b11510d5a91392c02f2531f15315a395"],["/tags/issue/index.html","b0800d6c17099902c7ea83040d1906b2"],["/tags/jQuery/index.html","24bccdf01cd438bdb03fd7e5c8ee2cf0"],["/tags/java/index.html","f35569279fdfba2eaa6ca1fc3e5bfd4f"],["/tags/js/index.html","6735d42e3594b7661395a28a7a2f139d"],["/tags/latex/index.html","c49e3472b4954d6069487275297d9fb5"],["/tags/leetcode/index.html","22a5e53ae8c704b5af7d529e1dcbff8b"],["/tags/lex/index.html","1cbf44458fdd4d455aad09336dc838f3"],["/tags/logging/index.html","2484a6828b205192b8eb2cc7edba4368"],["/tags/material/index.html","c28c593461cc400f05e6986c8a27caec"],["/tags/music-player/index.html","9b15d457bf6e222ee998ea0f2c52617c"],["/tags/nodejs/index.html","004daaa04fee57ff6d50087ad8806427"],["/tags/noj/index.html","706afdc56c941c3261a483e7556a4881"],["/tags/opencv/index.html","c28e5aba72edf90a57a449b425d2fe6f"],["/tags/overleaf/index.html","feee6217bfdf47056b6e5e375573f920"],["/tags/pandas/index.html","b0d488031ce262f02b1148553b8d54df"],["/tags/paper/index.html","5f518d0da51682d0f16374171000f604"],["/tags/premiere-pro/index.html","4c70a2e2fa66b0b68e0b8e99122444d5"],["/tags/proxy/index.html","d4d19608d285986ccc7c89eb417d8cd4"],["/tags/pure-css/index.html","934e3408d145b0a48913e8162c9d7026"],["/tags/pygame/index.html","f8c9d46b858189f6899d3b76173f7b84"],["/tags/python/index.html","78301a5fb3fe9bb4ff8775a213fca409"],["/tags/python/page/2/index.html","db75d1b2b241f141d85d4ea8c0ffdc6b"],["/tags/pytorch/index.html","daa300678b313b207f2e49eb4c35f294"],["/tags/reading/index.html","314a71f11519206169651fda6190beaf"],["/tags/request/index.html","8728c308433f433532b55a21efbd7279"],["/tags/requests/index.html","9fa1cbdf8f30425d4a0cdaaea120c62e"],["/tags/security/index.html","2ea1e73f0750ec6767c276cce7ffeb56"],["/tags/shell/index.html","2c489a93501bcd782fed7036a87ce15e"],["/tags/sign-in/index.html","a3da29c05a3bbd78e13717d87b4a2c9a"],["/tags/socket/index.html","42af01b026b2e563d2adce75024c874a"],["/tags/spider/index.html","eda7b5d65f23be509000dff1e4b66c04"],["/tags/splash/index.html","4a83f24997279ce98ef726ee96b96618"],["/tags/stl/index.html","1a7ff98b188382347a3bb38a23228fe2"],["/tags/sumatra/index.html","9fed9852980f3b74c6f9387a770207a7"],["/tags/superagent/index.html","1f217e7df72d35e8f8ce16befc364b5f"],["/tags/tensorlow/index.html","472b49ad5ee5e06c7b0af30da0dc559a"],["/tags/tex/index.html","46e5e39889de09911d4282fd642356d6"],["/tags/thesis/index.html","3588e00508a3bdc798384eeb52c764e8"],["/tags/threading/index.html","96b72c147ffa8fc5b5fc83ae202e7f98"],["/tags/tkinter/index.html","95663eeefb21e802541f21c22f6ecf9e"],["/tags/torrent/index.html","d95e607891ac619676b353ac119f802c"],["/tags/tutorial/index.html","4f5ce43eabe73227da4a595ba485d9eb"],["/tags/typora/index.html","4e7976eb1fed2fd13bf31af28b62595b"],["/tags/uniapp/index.html","6823c840e6dff96a82b5663a8672cd73"],["/tags/vite/index.html","9c9099aae7bf34e56d18df6f09a3b37c"],["/tags/vscode/index.html","ca0a374193f7bbd2d542b21e192441ce"],["/tags/vue-element-template/index.html","3a19b007ac2c67bc634c6e4e5a374422"],["/tags/vue/index.html","f0d28fd1fa1a660fbdbc3c7512b4ad14"],["/tags/vue2/index.html","80ca1d2c7d8bfc52cef3d785f5983a0d"],["/tags/vue3-x/index.html","aede105c2c4d49044ffc4468554004de"],["/tags/wechat/index.html","7ca6e23cdd72d88b0e2e88bc5a36581a"],["/tags/wm/index.html","d007da6d5db0207fdd6d296549271594"],["/tags/wordpress/index.html","e6fa6a767956abf76a2c4a02d4476ff4"],["/tags/workflow/index.html","c372fb5eb836c1ee5679eb57e76878f8"],["/tags/xpath/index.html","0068fca651fe32249c7c0e2252b81398"],["/tags/yacc/index.html","94676ba7620e1c47e0afb86ca4024049"],["/tags/zsh/index.html","725f4b20e7de50a096deb6aaa5cd0971"],["/tags/七牛云/index.html","3dd3e7cfa896aa8e4732b234f455a227"],["/tags/函数/index.html","6293bf7bb90c23833d8c6fe6bb0028f1"],["/tags/剪辑/index.html","e07ce8aea5431f69f12056d692816836"],["/tags/存储/index.html","3aab0e519e92ca9890dcb7cb8c466964"],["/tags/实战/index.html","d323ed21345bc13eeb8a91f4d2c50ffe"],["/tags/工具使用/index.html","585f5f0cee38a1b23eb1726814367c73"],["/tags/建站/index.html","7d5af16009d1fc90b1302c35b1d09a0e"],["/tags/微信小程序/index.html","c164e99a88074c96c69442426be5c7e3"],["/tags/指针/index.html","177e149f25baf21bb1a4fe0d43955bb3"],["/tags/效率提升/index.html","e00d917681bef36c9f4703b5edfb9239"],["/tags/日志/index.html","1c7468a10bf4936ef0e68dd1474fc3fa"],["/tags/汇编/index.html","6c19011d86c6967dca6f80d8b0d77532"],["/tags/油猴脚本/index.html","b3561ee8d7237924615c2e9fb70248c9"],["/tags/浏览器/index.html","0468e8b7a993a2a53b4bc77187e24856"],["/tags/爬虫/index.html","e3ad07d24bac7cc3ac030c9659960f3e"],["/tags/算法/index.html","5b47e3c0f1fbbcd3770940830308895d"],["/tags/编译原理/index.html","dfee70abb016a2a0d8136c3fc4438c8a"],["/tags/获取地理位置/index.html","ec0924d5f83d721d1acf5c99c2605f2b"]];
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
