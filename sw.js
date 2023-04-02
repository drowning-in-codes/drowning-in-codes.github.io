/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c4f65f680aac90c6bc2c070b0d88c3c5"],["/2021/04/20/稀疏矩阵/index.html","b66effa03e6be47fde849c2c6216ec19"],["/2021/04/23/广义表简介/index.html","1888b36fd921185cc62059dec051005d"],["/2021/04/29/关于指针和函数/index.html","0bae290f0a91d717dddf196821ed9a79"],["/2021/05/10/哈夫曼编-译码/index.html","fb5ecbe1aafbb29c270b5c8bad40fa89"],["/2021/05/17/数据结构noj_2/index.html","29bd0f1a7b356956eec24bb7c64c2596"],["/2021/05/30/数据结构试验/index.html","379cc92ff2fc0cbf0b58417e2468c50f"],["/2021/06/12/数据结构noj-3/index.html","fdf45d18a1090e59818faa81bfd44bba"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","26a80ac20dff3c4c33187f91a645345b"],["/2021/07/08/课程资源分享/index.html","92e34746e86824687eada4e33e3078f0"],["/2021/07/20/Scrapy-下载图片-文件/index.html","3576824d767746a590d2b8a5c6eb3df9"],["/2021/07/21/Scrapy-动态网页爬取/index.html","4fc7d665126975f5e90d7f59003d6f7f"],["/2021/07/21/疫情打卡/index.html","d9cdfbd07b9e66cd1162001c29895e92"],["/2021/07/29/Scrapy代理设置/index.html","3b78793c60a119611b72307faeec090e"],["/2021/07/29/数据库认识/index.html","8a97bfb16166ab5eacf9474c08d2e703"],["/2021/07/31/Python多线程学习/index.html","0d6b4ff18ea62eb9eadb61496c214afe"],["/2021/07/31/tkinter-requests练习/index.html","df9b263d789f935df2bedded2c4756c4"],["/2021/08/10/Git学习/index.html","ae0fd0e7a90514bbe375da8662909f06"],["/2021/08/15/pygame实践-1/index.html","f819e72f785328df8c5beec5f5d542f5"],["/2021/09/06/微信小程序开发/index.html","6b4a07d0b347d68b65b24cb3e0e9639d"],["/2021/09/21/命令集-1/index.html","98bac7a48dc46ef0ad2f98251b7ead31"],["/2021/09/21/命令集-2/index.html","b20d31dd1a4151975a58609227ab868a"],["/2021/09/21/命令集-3/index.html","6493b3016f70604630795a43dc3a9478"],["/2021/09/21/命令集-4/index.html","1a678f6c9f58347c17e75073ec1d4348"],["/2021/10/03/socket学习/index.html","41b210e447e9436d53123e4d5b3ca47d"],["/2021/10/10/dwm入门/index.html","bf25f1fe46731408554a8d7ba2b59046"],["/2021/10/10/安装ohmyzsh并配置/index.html","8de9564b563822c6b71ff55d87338c36"],["/2021/10/20/css学习/index.html","4b5d5681120386fea843a2149cf138ab"],["/2021/10/20/wm入坑/index.html","e57225f25c2bcc6dfb33e15457890295"],["/2021/11/03/微信小程序学习/index.html","4f0b6b7bceaa51aebce28d53065a7c8e"],["/2021/11/04/css揭秘/index.html","cb14eec75135d4ba108e5bf2b3840aa5"],["/2021/11/05/css-练习/index.html","6d431b45590b95bbe1c6ff73e75b0a23"],["/2021/11/21/命令集-5/index.html","a6b9c2fa374d55d6f1d358fa39c0b775"],["/2021/11/21/命令集-6/index.html","4de2f4ecaf41daaa40e1e33b20da33df"],["/2021/11/21/命令集-7/index.html","c289440e4e46ae05fe4ad8f68e0223d6"],["/2021/12/01/搭建wordpress/index.html","e177c44deb0f70d4cc78bdb0d69620e6"],["/2021/12/08/python操作百度网盘/index.html","a7793ed6ea99a18db50a57db8df779f2"],["/2021/12/14/js爬虫/index.html","f6081e48bfc8f4056053ca5294885f96"],["/2021/12/25/为网站申请ssl证书/index.html","59ff3466ca5e145270e49b2b755f50b0"],["/2021/12/29/使用七牛云为网站提供服务/index.html","49e638f323e4c30414d43e6f08d25650"],["/2021/12/30/jQurey继续学习/index.html","5596d2572c5f62c6e732943b98b1c346"],["/2021/12/30/jquery学习/index.html","bd16ee0594fc0010f6c57a28a1a957ef"],["/2021/12/31/vue学习/index.html","ae58612437d6b2711104053e3d070923"],["/2022/01/02/疫情自动打卡/index.html","c949462e443eebc6cef563b192845b12"],["/2022/01/03/javaweb初体验/index.html","3b397b842a526ebd584495f88485c998"],["/2022/01/04/codewars练习/index.html","e0742fd875270068c915a5bdc5f29c27"],["/2022/01/05/Spring学习/index.html","cd7424ab17504faab8817d3b4fa73c89"],["/2022/01/05/vue实战/index.html","5d72b92169f1e72402074e000f687155"],["/2022/01/08/gdb-gcc学习/index.html","f9ad8074ecb5b0b9d4b0b84a8e5e5422"],["/2022/01/11/python-opencv学习/index.html","145f74038c236429b0daa6f819b3f1d2"],["/2022/01/12/汇编实战/index.html","6356382a0aa4abbd44c25fa3c7f74abc"],["/2022/01/17/pandas学习/index.html","a7a6ef939bc39daad16957946623b48e"],["/2022/01/19/可视化图的工具/index.html","932a6db9f18a650900b63bc28342f2e5"],["/2022/01/19/机器学习入门/index.html","cd2fef19058aa1e9dba1a28a25faff2f"],["/2022/01/20/cousera-ML学习/index.html","851f36f67e218e1976db696192bb82ad"],["/2022/01/30/typora解绑后出现问题/index.html","054950cb0ad423d05aa1d89c31af9f27"],["/2022/02/03/NLP学习/index.html","2888883026eb5d533a5c67f58c7967d9"],["/2022/02/04/Web漏洞学习/index.html","30e1a29daee85268b0477eecf56f946b"],["/2022/02/04/pyqt学习/index.html","702a5f72e739c7f3ba284c1f00b4c905"],["/2022/02/04/python爬虫/index.html","ba267a68fbde471e10d67980213e01b8"],["/2022/02/18/Electron学习/index.html","63912f624dac9094889c553a572d62e7"],["/2022/02/22/疫情填报字段解析/index.html","8bc9998c8e2baf38e5672d98a2f7a822"],["/2022/02/24/Bomb-lab实验/index.html","c04e7800dba8f1e480de9a400a811637"],["/2022/03/05/nginx学习/index.html","22b09729e37139dcd171059c66996298"],["/2022/03/09/汇编原理课程学习/index.html","4719e4a64958c35986ed76afe0850d2d"],["/2022/03/11/Keras学习/index.html","e182b6151ce6d5d4def0ac06e7ae7970"],["/2022/04/01/graphviz学习/index.html","fa180b6966f1079a9c8f4e4e9db7d621"],["/2022/04/07/django学习/index.html","327eecb792fd8841846908337bc97dbd"],["/2022/04/11/密码破解学习/index.html","b4188d94a1c1272d43292983011c89c2"],["/2022/04/12/flex-bison学习/index.html","24de483c99bbdce39d3addfdbdeb8209"],["/2022/04/15/pytorch学习/index.html","284a61a137ff0b4ff53a0a06d8d7a874"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","b3bd7b71152481870eac8d5c6514e2e4"],["/2022/04/23/写一个音乐播放器/index.html","57ab0a98ab017a51f512f7092f0f2e1f"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","b7e25d7407ba33c6ec52db226bb4b4ad"],["/2022/04/30/GAN学习/index.html","5b1ecf5754685cfd65336b4615938e99"],["/2022/05/02/html精学/index.html","637c712eb1fe63e89a250b9d4fbbac03"],["/2022/05/06/write-a-compiler-by-yourself/index.html","1d241b8eb29c73db4afca96918c3c8fd"],["/2022/05/30/acwj-01/index.html","f4fa92c9f7750f9b31c17e651f700216"],["/2022/06/14/animeGAN/index.html","d7bbcf780679d6b8b843d94e529dc919"],["/2022/07/09/c-与算法学习/index.html","fde4ce3018eee980c1fdfcee2a2c87a4"],["/2022/09/19/flask学习/index.html","cf2c4f5160c3ed51621f3c2e46a0de03"],["/2022/09/22/cs224w学习/index.html","a9dfc9f0e908d85a5cc7a9ccb1faee54"],["/2022/09/28/记录一次wp重装/index.html","bb12f2582dababb5864d176ab2774f15"],["/2022/10/01/Obsidian学习/index.html","04f5d03215152cf54f9b456feb49dfe5"],["/2022/10/08/vue-element-template实战/index.html","6a6022774bd7b14c4cada56ae15ba046"],["/2022/10/25/vue网上商城项目/index.html","c8c4394db9cc4b4d3e086fe6b3e49549"],["/2022/11/11/leetcode刷题记录/index.html","5dad56166f69412af186a3333c54e3e8"],["/2022/11/11/使用overleaf优雅地写文章/index.html","3a050eedee39bd1fae17bad63641882d"],["/2022/11/22/磁力链接与RSS订阅/index.html","dd05a9a72295345d5e1fd3668dbf72d1"],["/2022/12/11/uniapp申请获取地理位置/index.html","5676747eb245b72d73d4f679b2a31e00"],["/2022/12/26/pr剪辑学习/index.html","36e0ef59713988f337ea358990f08626"],["/2022/12/27/css中的flex和grid布局/index.html","cbf254df8c559283d09341cd03274de3"],["/2022/12/28/Flutter学习/index.html","b4bf53f04986cdfda6c196538a6254a9"],["/2023/01/01/美化github首页/index.html","a12700eb27640ef1f6ae548c2e2250db"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","3774ac1c6a9a72f9297e43a680d7c270"],["/2023/01/04/构建微信快捷发布文章工具/index.html","526d362953b54f0460dc00bd6693f00e"],["/2023/01/14/dart学习/index.html","0e9d657c67de6c9be5ef40b9d586578d"],["/2023/01/23/闲置服务器BT下载影视/index.html","40b2fa9c17739c0f619008adb677781c"],["/2023/02/07/TotalCommander使用和学习/index.html","b830391821982d13bf6ecc88aa76aeef"],["/2023/02/13/docker学习/index.html","760d1f8f34907f08a8c00183ea17cfb2"],["/2023/02/17/DLHLP学习/index.html","b140327c1a42405416cd011ec4005fe5"],["/2023/02/18/学习purecss构建自己的css框架/index.html","d710b0d284a0db4db689e95622d2fc36"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","9f8f67464819b7f3962f9b9994837ee2"],["/2023/03/05/STL学习/index.html","20a1e3a804d990c42a89280816d38951"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","87a5d07382472c1abfc48661112b27f2"],["/2023/03/23/实战写浏览器插件/index.html","13bbf872e46bda680033b3181e20bad5"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","657a3c01b6eaebd11f63cf888c951734"],["/2023/04/02/EndNote基本使用/index.html","b56b8160460c963194413ad1d6896bc1"],["/about/index.html","15dc65ea593bb3141db20ae1919fb173"],["/archives/2021/04/index.html","f70ae6ff552d73b1ca8aadf3c2d64f7b"],["/archives/2021/05/index.html","e9297e84d34d73ea8872591b710c39ce"],["/archives/2021/06/index.html","2a38d3dc4c6cdae9e6a0ed56b25b3d63"],["/archives/2021/07/index.html","0bc550d5ed5198d07c05d7703b5dd6d5"],["/archives/2021/08/index.html","cca169e68ff60fde6bd84873ecfaae66"],["/archives/2021/09/index.html","f608b4dbc84993a7daedfd3c7bc55b7f"],["/archives/2021/10/index.html","4db69cbd0bb4dd6a138bd492f9fd5aba"],["/archives/2021/11/index.html","565656daf5eec7c07c09eb06a8f09716"],["/archives/2021/12/index.html","97822af458aec650f2d36f2510195d27"],["/archives/2021/index.html","e71db442f1a01e2ad178a18e4d7ce467"],["/archives/2022/01/index.html","b4c660f18e3e3bbd4d8e60f4552bf0ac"],["/archives/2022/02/index.html","c745d2f42b3cb222c2322f4d64d73f83"],["/archives/2022/03/index.html","28a67fe256dbbc9963f788f4a3c55502"],["/archives/2022/04/index.html","87464f1e16736f4cb77a2b13e0099381"],["/archives/2022/05/index.html","5dfcdabce09579c408f08d200ac869e7"],["/archives/2022/06/index.html","d50369dbd77114bfd1e375e033c5993b"],["/archives/2022/07/index.html","d847ea7347f6d11c96c55f0670837db4"],["/archives/2022/09/index.html","5f13f1a1164fb5492b3c5781b88ac699"],["/archives/2022/10/index.html","c55b76a9deb6e8dbdcf65f0fdf30b5f0"],["/archives/2022/11/index.html","80dcd45b303001868c1aa450667371cc"],["/archives/2022/12/index.html","0a2ead279640c446f9a8649d962ddc9f"],["/archives/2022/index.html","51b3f25cbf50fee842a1b96c77799ef5"],["/archives/2023/01/index.html","9e449eb6fa395e55cd89385510b2b2ab"],["/archives/2023/02/index.html","f8d0f81345b4daabfd104ee9134ae2a5"],["/archives/2023/03/index.html","470a9999c8cdbb397a65ce9ff0f00ee1"],["/archives/2023/04/index.html","57579687c9149022f9f900a895c87cae"],["/archives/2023/index.html","501732fc58d6af490c33dcead589988f"],["/archives/index.html","268049ce3c951ad6abc23dc1d7b6e3d9"],["/archives/page/2/index.html","f55d5c8ed7abc13d2538855fa21ba0b9"],["/archives/page/3/index.html","399f7ec4949adbbe3ae3d7f0bb191cfe"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","61aeccdf9b797cccae910d09b22dcce4"],["/categories/Linux-study/index.html","e9048506608c8fd5ee8735bce3ace138"],["/categories/ML/index.html","836f1deec12349d0104c3780ee77f846"],["/categories/Nginx/index.html","caf0e627a637e18e816de60eea7f42f9"],["/categories/Spring/index.html","bdfafece3d72037768e302e7aa034c02"],["/categories/course/index.html","79472cc7d60b7252f838298912efc7cd"],["/categories/django/index.html","b97f5e525199a581052214c8778f75e3"],["/categories/fun/index.html","a3768a5e2ebc1cf5b23c58029ea337ff"],["/categories/gcc/gdb/index.html","e3e08d64bee2df8e981d053b7a1550ca"],["/categories/gcc/index.html","c0055f68338a83e888a0270e76a51035"],["/categories/index.html","1c8e96f5170bf7d550ab8e05038067a3"],["/categories/java/index.html","0ea235bfd09034cfb40c02a32d9c1ca2"],["/categories/latex/index.html","3a237dfeec2b2f32903c895227a0810c"],["/categories/python/index.html","782928c7753910639ad144422e529742"],["/categories/study/index.html","3d0875c2c71fa1a175ddc1fb2e4ef1d6"],["/categories/vue/index.html","6434bff40c30460c328705009411cf42"],["/categories/误区/index.html","3b493e23ec523b3170e6cfd9c9b7be9e"],["/commonweal/index.html","63c20cd71c2e5d6028b3809a5d4f20a1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","b835022ecddebe496a415080d144f770"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","d51646a9954c0802dcb7e17400bf20b1"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","9d012d66d855b7ee5ac4e98a2d902763"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","37b43a7777bec36ed6f94af39f2d444f"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","aff2a3e5945bf43696630d47fa572e48"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","30515a68ab09ad6aac603bb776dc5426"],["/page/11/index.html","01d95ee25d00487572a52b97a43d1668"],["/page/12/index.html","d7419173a980f7c480bf1b29082bd71a"],["/page/13/index.html","273ab18043f8906ead10c6b148033dc7"],["/page/14/index.html","e231c025eb061aaa39a6f046c07c1a20"],["/page/15/index.html","d4dbe0ba4cf65848276cb145c6169807"],["/page/16/index.html","089164db8a13dd4243e1715fedb036e7"],["/page/17/index.html","65a0a7751ac5288ae5a1c675d12a552a"],["/page/18/index.html","102710995e68f369e98fc2d9b97e0877"],["/page/19/index.html","f33b302a2f791c96a64de40d6d14cebc"],["/page/2/index.html","5527c9d6c544972b496840c43b177719"],["/page/20/index.html","e3eac8f3a2c8b89e55d26764c8c0601c"],["/page/21/index.html","698156f4cb9af853c716777246a0599f"],["/page/22/index.html","00125d849ee866627fee8ca65a3ac61e"],["/page/3/index.html","06cfbf5a2440fe3bf2574bf6b1796b52"],["/page/4/index.html","1a083b4ed1aff004a6027fa0b70c0de1"],["/page/5/index.html","74bc61285f3fff33cceb5b4ee3eddf8d"],["/page/6/index.html","1a751e12d18675cf7e25355c6a88d937"],["/page/7/index.html","b64dac139f2774354642759fe40480a7"],["/page/8/index.html","16ffe9d87d6ae151cf85c5c777283a45"],["/page/9/index.html","945fbf51dbbd0c9ab7c48800c124a920"],["/resume/index.html","462e0924ca4bd2006b25c19840eac773"],["/schedule/index.html","fd9fd4b1bd6bed7fb1f11f59b69a9d55"],["/sitemap/index.html","e4612462466ba8cb2ad050f643b3dfa4"],["/sw-register.js","f20ed670fbab1f9d2c3adf5d03d45ca0"],["/tags/AI/index.html","1d9775c0da561cf3cec8373e1bfb4756"],["/tags/BT/index.html","52daa3b0c9f2fdc9a5608a7820d1f62e"],["/tags/BaiduNetdisk/index.html","e8cda465a1d51b7cfb35d28d7c10d14a"],["/tags/Bootstrap5/index.html","3e44c1c5e7f62f82c9c3eaca3d8b475f"],["/tags/CSS3/index.html","632dbd74aae591627dc875ae19281bf6"],["/tags/Centos/index.html","4021751501be9cf1fcda8534fc02b4eb"],["/tags/Electron/index.html","58c427458cb3ae0bd9d1f986f93f4891"],["/tags/ElementUI/index.html","7cd99e876b14fc41d4f619ee6f2e2cf1"],["/tags/Flutter/index.html","af88ef9b016be7babec68d3e6b387c00"],["/tags/GAN/index.html","73be2a46a4adfd6b4b65854157311064"],["/tags/GUI/index.html","70c88d866d49ba076ed2661479ab3468"],["/tags/Git/index.html","792cc816274203d5881085fd890d7e24"],["/tags/JavaScript/index.html","ad0ab908c02d192026b75fb0f6dbe1c0"],["/tags/Keras/index.html","e3e690e9bf6c035eb3380b08e9dd2c21"],["/tags/Linux/index.html","fb9ec44c0197c7096f1974e915420e10"],["/tags/ML/index.html","36f888fc789bd0ba99cb76bac2adc84f"],["/tags/NLP学习/index.html","63cdf1d88c0a139c93fba399ee1440c8"],["/tags/Nginx/index.html","ed9b035150bc286a658e0bc83c34e357"],["/tags/OSS存储/index.html","ec30b0df184c483bc559c3315354dec3"],["/tags/Obsidian/index.html","291dc4aee3efc4771bbf39c3fe14d0a7"],["/tags/Qt/index.html","31bc970dd0dfd26d3d68d5896d394db5"],["/tags/RSS/index.html","09d0edd635b2aa003a765064f8bd7aff"],["/tags/SSL/index.html","6062615dc7f8ff2be96a405fc6cf3cc0"],["/tags/Scrapy/index.html","6f989c371b874de0a9950d3b88c44e08"],["/tags/Speech/index.html","2da4c4a40ab54738e9832c9671b21768"],["/tags/TotalCommander/index.html","73e9fc70182b74353aeb192741accde0"],["/tags/Web/index.html","70f97ff3288b554478054f613887f2fe"],["/tags/algorithm/index.html","19e2fa8d63cbf13011d39d2b1f6c8a9f"],["/tags/bison/index.html","e74fb51c93fc515a31a3c9ffbc2d8e1d"],["/tags/bomb-lab/index.html","4187be68b6d42c27a771d78fa327216b"],["/tags/c/index.html","4a1aac2a6b8d1e8dd8074cb97e86867d"],["/tags/cheerio/index.html","9039471705125cb6475d1eaa4d4c2514"],["/tags/codewars/index.html","62c9799bcb98af31400033b716f8d144"],["/tags/compile/index.html","28b70effb4ba70d06269601b71e3aec5"],["/tags/compiler/index.html","bf1fb3cae9a320b85c78830dd248249e"],["/tags/cors/index.html","5b1976a506015ad38b8626f27029b2ca"],["/tags/course/index.html","b5969eb1931e18c8c16889db1a1d8066"],["/tags/cpp/index.html","40a2eed6b83d1302ebc4e74c24a9d0e8"],["/tags/crypto/index.html","1f00e3d80c7b6bd1cb3903018985b80b"],["/tags/csapp/index.html","e684889bdc66011c5108a5561033545c"],["/tags/csp/index.html","11443f8dd4b3842582320d60cf74816c"],["/tags/css/index.html","db3941ec7fa6c21798b99022dfc726fd"],["/tags/dart/index.html","605b76647a2eba819a0ab869f79bb36a"],["/tags/data-structure/index.html","6b954b0d0ac5639361ab0c0c097b9a2b"],["/tags/database/index.html","9bc1d3c016e2645746efc41fbb0a1629"],["/tags/deep-learning/index.html","f2d1164ab7845e34f634a792bc9d759f"],["/tags/django/index.html","731229a98cffee5d6e54c1b876fc770f"],["/tags/docker/index.html","0cc0baf98d5a13b84dbd76a763893fa8"],["/tags/dwm/index.html","e7edd1d14e96b21f02d6b8780e812cda"],["/tags/exercise/index.html","6066187df6a7b22d852ac7fb578cbfa7"],["/tags/filebrowser/index.html","1f9e5fa74724ea6e7fc7f7fee2f32d8a"],["/tags/flask/index.html","8e54e62490343e77e8188de5a3aeba4e"],["/tags/flex/index.html","2fd4daca4f82fe5988142db372d29135"],["/tags/front/index.html","ee8fce07f0c4f28b9b98f8619b8dbb56"],["/tags/gcc/index.html","42ee874e60785a0d316a3bd810ba1f56"],["/tags/gdb/index.html","d23ad58ac99865c31452e4a405f166a1"],["/tags/github-profile/index.html","0544680236862ddb1815ef734a4452b7"],["/tags/github/index.html","2521e806a501b21f7603880d72fa8070"],["/tags/graphviz/index.html","fb80e8f4be3efcad54f54a2572253751"],["/tags/grid/index.html","86471b40bebbab445aea9424dd0ded13"],["/tags/html/index.html","85d98852e4ff38546f164d8d9e182bb7"],["/tags/i3wm/index.html","219e6b0a95bb4870961763d623cba3fa"],["/tags/index.html","5fb7db4febe9ae409da633f73497cc9a"],["/tags/issue/index.html","3f53bd7c77a3d87f30829a6f0cd9023b"],["/tags/jQuery/index.html","1fcd62470197f0ba33602f1e3e1af5f6"],["/tags/java/index.html","9a0f239073e13fbe7d8f8790e7eba02c"],["/tags/js/index.html","2dad54f2b0db228c77d7be1803be0565"],["/tags/latex/index.html","09e745ac2367db5f3238d29bdb3e5c65"],["/tags/leetcode/index.html","1e6d67e1c9fdbba8d3919a1fa528ad7f"],["/tags/lex/index.html","2036935b689bebf963763a3045e2d7f6"],["/tags/material/index.html","029927cb3a450a003d83024b09a44e1f"],["/tags/music-player/index.html","48e57a915c8bb9560c14fa5b2fbe7418"],["/tags/nodejs/index.html","c889eed7600e95f2bf701dcaf9f9bf2f"],["/tags/noj/index.html","2be3bec193f530d453a23aafa5750b70"],["/tags/opencv/index.html","3b3f8d2e02a9848ec031665cebe8435b"],["/tags/overleaf/index.html","4b789d3d823128df84e28e83ee59b533"],["/tags/pandas/index.html","4cc459f5ae3704cfe4be904385099755"],["/tags/paper/index.html","055cec318c3b2124118ea5f9b7e2a9c8"],["/tags/premiere-pro/index.html","c2342c580d1a4f68efdf0190fa2a0303"],["/tags/proxy/index.html","9ef259fbc3abac81e401a9c15de84042"],["/tags/pure-css/index.html","9c2f8ca83a245cb7f433fcc534c7fc55"],["/tags/pygame/index.html","3f4ea196f5840d76dba48aba5decbde1"],["/tags/python/index.html","97749f5ba2e7ea70afe646e880525a12"],["/tags/pytorch/index.html","bb03d496081d9a319f162ee238149ca2"],["/tags/reading/index.html","241fd0a5a20ff7a34a760045aef7f4ae"],["/tags/request/index.html","dd11073155f497c6acb1cdbca31c665e"],["/tags/requests/index.html","c749260b73dbfe6ebf8aec929ff05f10"],["/tags/security/index.html","e2bf1fd39e853560a3e542e64d78e406"],["/tags/shell/index.html","b79dc826dd4ac3e4f3d16ae40cc769ae"],["/tags/sign-in/index.html","279410f49e8b020df18a7829a12974ae"],["/tags/socket/index.html","aa641191c3902ed8add8d197dfb45e3e"],["/tags/spider/index.html","ec4e9afb8090ef4753f7a4d8ba990d6d"],["/tags/splash/index.html","f36516e68243c78c46210d7bcf498383"],["/tags/stl/index.html","4b11b5b1221839ce4cdfeea6b57f6604"],["/tags/sumatra/index.html","e514b978d53d69e175df0255248948ab"],["/tags/superagent/index.html","bd2960968453bdc239681ccaae7460d6"],["/tags/tensorlow/index.html","47f8abf6b3a4f119d0a0c6668de9d0fc"],["/tags/tex/index.html","9685e279c2420dbc9e1fc704a7841341"],["/tags/thesis/index.html","af59f1d002d5c84d4c5bdabaccbe6b5c"],["/tags/threading/index.html","62dca19524d3d41153b930176f5d3706"],["/tags/tkinter/index.html","4eca2f068d6caa1eee4758ae81a22f83"],["/tags/torrent/index.html","878b806045dd2d5cc379bd40857e5711"],["/tags/tutorial/index.html","ceb0e82911410383e792dfe57910fdf6"],["/tags/typora/index.html","1d0ac28526d6401ab40caaa996d87d43"],["/tags/uniapp/index.html","283f8fc4c18ebae08a9f806fccc07b35"],["/tags/vite/index.html","512d3d735b45fb6ff322813db6bebd03"],["/tags/vscode/index.html","e51a2661e33cde2f4c7bb12dd3a3e40d"],["/tags/vue-element-template/index.html","f7b044da02f9931fc1774eb369be30db"],["/tags/vue/index.html","cbd7bccf86a31a57166f872cc8997b62"],["/tags/vue2/index.html","c2d8902f5f51d05aeb50feef5d41e3ef"],["/tags/vue3-x/index.html","228d552f09d9181ce04c5f08d197abef"],["/tags/wechat/index.html","b09b937cea4d5f1c165d188805a06dab"],["/tags/wm/index.html","b1ddec2b5599d0cef5f986077f110f98"],["/tags/wordpress/index.html","f52b424187f2471c5696bc3e314ebfe7"],["/tags/workflow/index.html","ce62ac1bcd2c3c8bcd4486a03084e669"],["/tags/xpath/index.html","becc580be333805aee128aadace158b9"],["/tags/yacc/index.html","9315ca1579a4eb9af612781de9930d87"],["/tags/zsh/index.html","672ab78a5f3b7c2680e1601ad1f8f816"],["/tags/七牛云/index.html","990f520964472c3d6b6a870e96eef42d"],["/tags/函数/index.html","4a51ebc85fef5cbaf7c9a79ce082be62"],["/tags/剪辑/index.html","ac019629522fc5188d3165b00ffdf058"],["/tags/存储/index.html","4efe9bd153454ceff6c1934d9b571e9a"],["/tags/实战/index.html","01abf77f1f1c072cf074357ef52c7349"],["/tags/工具使用/index.html","8284e25cb734c25c829ff9098b47bbad"],["/tags/建站/index.html","5c4d99e813c6b15722c2ffbcef8c7fc1"],["/tags/微信小程序/index.html","26c8233b8bd7160e66cdb0fb840ac30b"],["/tags/指针/index.html","ab71916732611861626947200893ad60"],["/tags/效率提升/index.html","c250a3047ce3d37d34b5d38542ca63b6"],["/tags/汇编/index.html","aa4f77778f921085e9bab32f9c3ebfbf"],["/tags/油猴脚本/index.html","944d4b89ca3fbba02447efcce8f5cfc2"],["/tags/浏览器/index.html","fb0b6fa38b107fdb3ef8fe6e6d05f32c"],["/tags/爬虫/index.html","2347fee15f1e941d05822d0e3dc4e65c"],["/tags/算法/index.html","c0430ada4196dfa744fe4c699f845dfd"],["/tags/编译原理/index.html","4bd2ab7924a17dd4d1e765318e0d0c4b"],["/tags/获取地理位置/index.html","15abf08922de5d10327a1fef7628c233"]];
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
