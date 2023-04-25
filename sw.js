/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","664eba26166b05ded1f475a0191ba3fa"],["/2021/04/20/稀疏矩阵/index.html","03cfab36fa6a96a330eeb8fbd6ba0338"],["/2021/04/23/广义表简介/index.html","129c6e9d3523fd22adbbe040b830c698"],["/2021/04/29/关于指针和函数/index.html","7448c294d432d7daafa9ba0e17b6402c"],["/2021/05/10/哈夫曼编-译码/index.html","ff0c5adeb4e4e4964c1ce829ee529cd6"],["/2021/05/17/数据结构noj_2/index.html","0a2fe35f226e49265550ed1dc03965bf"],["/2021/05/30/数据结构试验/index.html","ff25213d7735609bbca9ab3106a9fa7d"],["/2021/06/12/数据结构noj-3/index.html","153ab1df1a694e1dcb636586c7299e1a"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","5ee51d40a45c38c3b454127d09067a5a"],["/2021/07/08/课程资源分享/index.html","8f7ad37797fc9c2e8eb5eb2090488763"],["/2021/07/20/Scrapy-下载图片-文件/index.html","b037db1cbc4db8b131b53ab1345a0c16"],["/2021/07/21/Scrapy-动态网页爬取/index.html","bd7d85b75761f482defb911f4fa1d8e8"],["/2021/07/21/疫情打卡/index.html","72a492265d4d2f34068943b7d76db409"],["/2021/07/29/Scrapy代理设置/index.html","326f6d6c82fb3fea69a7b1748304ed59"],["/2021/07/29/数据库认识/index.html","82d68307fd8a86bb291ff2afededc19d"],["/2021/07/31/Python多线程学习/index.html","dc069710ade2e1667b56a76f3b19d1d6"],["/2021/07/31/tkinter-requests练习/index.html","946d11087a03cacbc69887c38f67685b"],["/2021/08/10/Git学习/index.html","d1490a40485d81651c783a9e5e4101e1"],["/2021/08/15/pygame实践-1/index.html","7a0519659833212c5202456c5581ff26"],["/2021/09/06/微信小程序开发/index.html","61e5f192ebd5b21a16868ac98946ecc1"],["/2021/09/21/命令集-1/index.html","53a8349ffaae2ce45521c11fb37810b4"],["/2021/09/21/命令集-2/index.html","c8d751c15a8b81a8d94b73bc9953f186"],["/2021/09/21/命令集-3/index.html","bec37818501715c52dd5c3b04ea13f2a"],["/2021/09/21/命令集-4/index.html","3c932da2c01258790f12fdf55f82dbed"],["/2021/10/03/socket学习/index.html","ed2fbb0bb9c5f1378b00aa4cbf29c6f6"],["/2021/10/10/dwm入门/index.html","1a70665ef2695d0fce811ccc8f864ef3"],["/2021/10/10/安装ohmyzsh并配置/index.html","d6f4be583b604f51922c1c692fed45f9"],["/2021/10/20/css学习/index.html","a21017fe3032d4320d35ba02259c8590"],["/2021/10/20/wm入坑/index.html","0329855e9bf1a026caaace2e083f76a7"],["/2021/11/03/微信小程序学习/index.html","73b084a216ba20838358f4afb34ca2c4"],["/2021/11/04/css揭秘/index.html","c3b2c0010c8f3f46c6bbeee4b90280b3"],["/2021/11/05/css-练习/index.html","cd7172b4896b65ed98d6218234f67b90"],["/2021/11/21/命令集-5/index.html","3058f056e618692fa2c5fee59135dbd7"],["/2021/11/21/命令集-6/index.html","08953bc69d267de270c33eafa2ea0af2"],["/2021/11/21/命令集-7/index.html","23f78df6114953c03dd8b998cc23d2d5"],["/2021/12/01/搭建wordpress/index.html","69bc3c3c6c850790bbb0407b7bb41278"],["/2021/12/08/python操作百度网盘/index.html","f6f1e728cdd372ba7288b6a25a96c366"],["/2021/12/14/js爬虫/index.html","68dc9efc07241b2f157c74d2aff75828"],["/2021/12/25/为网站申请ssl证书/index.html","d9287179406995a8899f226e20437470"],["/2021/12/29/使用七牛云为网站提供服务/index.html","726224cea08305d91064e748c6fd8b73"],["/2021/12/30/jQurey继续学习/index.html","b46f8d86f719d1033b1b645226c80218"],["/2021/12/30/jquery学习/index.html","b6433ceac7e1546b72e92956e1ba33e7"],["/2021/12/31/vue学习/index.html","f716489df0d3147013a38fa11ae81eb4"],["/2022/01/02/疫情自动打卡/index.html","f4149df075af93ebfc1040b0955ff9a6"],["/2022/01/03/javaweb初体验/index.html","e557b5b494e73b8097d523c9177474a2"],["/2022/01/04/codewars练习/index.html","7292a447f6830fcc116d0be3bbe8acc5"],["/2022/01/05/Spring学习/index.html","fb6d0df091cf86e7e6d168716e0a7f71"],["/2022/01/05/vue实战/index.html","6326d6edfd8876af5420bbacd8734df7"],["/2022/01/08/gdb-gcc学习/index.html","8315e646c263c2e3c5c0e764cad5c78b"],["/2022/01/11/python-opencv学习/index.html","8bc45fc25071ed21baed512b8d416956"],["/2022/01/12/汇编实战/index.html","399d539ce2a47bf4ef2e8a8b2b17489c"],["/2022/01/17/pandas学习/index.html","955982c70843b81d96ad9382eb3a3b8d"],["/2022/01/19/可视化图的工具/index.html","1ef8f403ac82b9531c259758ff594fbe"],["/2022/01/19/机器学习入门/index.html","96b29ee9d8fc885e8c1440c2f34a4db3"],["/2022/01/20/cousera-ML学习/index.html","88f067a9b70ddf2e0cf429605a04f9e1"],["/2022/01/30/typora解绑后出现问题/index.html","f92f8a71fc8372ee5fc838d072eef676"],["/2022/02/03/NLP学习/index.html","bc26df02b4c70a241100b55075c77218"],["/2022/02/04/Web漏洞学习/index.html","68fab37ba29a0d7d74f62bfb255f6bb1"],["/2022/02/04/pyqt学习/index.html","38a416b34ce95e2ca2f1c725abd489f0"],["/2022/02/04/python爬虫/index.html","bdf93d2b86f680937d4363d377951f7d"],["/2022/02/18/Electron学习/index.html","7876128edcb79e13f7938b81ef77af16"],["/2022/02/22/疫情填报字段解析/index.html","3f40b3bcb3fc32659376eb80fbb20802"],["/2022/02/24/Bomb-lab实验/index.html","7f927d4c5b5fe1c59a6b2d2564ea0db2"],["/2022/03/05/nginx学习/index.html","0548583510ddffa745217c43f1fe9313"],["/2022/03/09/汇编原理课程学习/index.html","0b2e3cd092d1f390d56874954f2f5047"],["/2022/03/11/Keras学习/index.html","4300997e72efa88b95dd94a430091f96"],["/2022/04/01/graphviz学习/index.html","2c2ec28831b4cad67e075ac44a284c74"],["/2022/04/07/django学习/index.html","9c3187953e11c2fa56a48d1416a205e8"],["/2022/04/11/密码破解学习/index.html","f88d6db960a3526a422dd4b241a7f2fc"],["/2022/04/12/flex-bison学习/index.html","ae0c0a7da5c01e24d38aedb30fd4146a"],["/2022/04/15/pytorch学习/index.html","610d3bbec30f43a58ceefb82d628bef3"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","fce9d2148568b7c4c330c9c8de64db08"],["/2022/04/23/写一个音乐播放器/index.html","754a7be89ccff9ce390e35443743b9fc"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","081f21daae5aa2946f0391a747fc54b3"],["/2022/04/30/GAN学习/index.html","2411d7f1137fb8e5e63ce2f77d571f6f"],["/2022/05/02/html精学/index.html","aa4ec22ab955707343064515aae9abde"],["/2022/05/06/write-a-compiler-by-yourself/index.html","5cbd2cd65371c66726382a114f539e74"],["/2022/05/30/acwj-01/index.html","b50ed2f58bf64c64fb89e1567872eefd"],["/2022/06/14/animeGAN/index.html","565be4f110c9528d5886ee8df5fcce7f"],["/2022/07/09/c-与算法学习/index.html","65d1e71ff4aa615c41eb91c59660b500"],["/2022/09/19/flask学习/index.html","af788d2817045a0acddf42859fb8a139"],["/2022/09/22/cs224w学习/index.html","419ecea5007032090923bf242e4c3d92"],["/2022/09/28/记录一次wp重装/index.html","981d3e28e14b1ea27cb954806c5b56a0"],["/2022/10/01/Obsidian学习/index.html","070eeafe9efc6f3406ddb42f7c803354"],["/2022/10/08/vue-element-template实战/index.html","713fb50701bffecb7ea0d100aab8867a"],["/2022/10/25/vue网上商城项目/index.html","28c3f84eda131ad8143a27a293ce284b"],["/2022/11/11/leetcode刷题记录/index.html","95e1e7a57ef0d00a29aef9f0e530831b"],["/2022/11/11/使用overleaf优雅地写文章/index.html","9d7c1b44e0896836f5e2ab00276cfdf2"],["/2022/11/22/磁力链接与RSS订阅/index.html","052ab66cc8e562619469bb8bdd88d215"],["/2022/12/11/uniapp申请获取地理位置/index.html","c726df2e95dd3bd48364837bb4afe9e0"],["/2022/12/26/pr剪辑学习/index.html","5425d9ce9b34840042ec12bc523fb598"],["/2022/12/27/css中的flex和grid布局/index.html","48c189f36c112f06546271923d163376"],["/2022/12/28/Flutter学习/index.html","1977b1a4c8cde9519ddb4cc87653ee48"],["/2023/01/01/美化github首页/index.html","babb04763d8d81d0d4290a110c54a34e"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","0e638bb22cfc3c4575494db5499e6ce1"],["/2023/01/04/构建微信快捷发布文章工具/index.html","f049dc153108730f03134709c9aa9ad8"],["/2023/01/14/dart学习/index.html","0319e63d79d432c2077f390c6604674b"],["/2023/01/23/闲置服务器BT下载影视/index.html","bc830e8a2acea15fe8b9755c11d6c02c"],["/2023/02/07/TotalCommander使用和学习/index.html","8afbc97217ad12ae4624b2da68e71fee"],["/2023/02/13/docker学习/index.html","f9ecc0e37fbd1a96c6ec34fae3cd2e62"],["/2023/02/17/DLHLP学习/index.html","c6f9133e4126ab8130488564343565b7"],["/2023/02/18/学习purecss构建自己的css框架/index.html","125920555aec424a1b58ffa02f0abede"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","7e9bb0e5004ca142ffce080550e11be2"],["/2023/03/05/STL学习/index.html","7d2e98ead454c8aaf95c6ce658c068cc"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","c4ac9b30c7e68c916a2d4da5f015df70"],["/2023/03/23/实战写浏览器插件/index.html","b0980472852a28aea94e3d4b37723ddc"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","851d1421fc0733a1b3b08971e87c96e2"],["/2023/04/02/EndNote基本使用/index.html","8fdd8bb69b270daeacbe251f7d89cfcf"],["/2023/04/04/mne处理脑电数据基本使用/index.html","6eecb0e36a500bf324948d1b8810188a"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","232fea76088ea64a2c4cd745a2811956"],["/about/index.html","a6c76372794d89924ade8c55750cf41c"],["/archives/2021/04/index.html","7795805ec4285940f55f07e91a99b7f5"],["/archives/2021/05/index.html","1397976da20a90e2b5f8ef9246392c4e"],["/archives/2021/06/index.html","18c698787a65c9d4e7fdd3e870877391"],["/archives/2021/07/index.html","f46547b60c17d37381ac2db0cb67c1bb"],["/archives/2021/08/index.html","e0cb7690bb6c39f0c2340a12a1b1b158"],["/archives/2021/09/index.html","87ea0dc7d9119d5d365ae67e6b3a2ced"],["/archives/2021/10/index.html","2970234f60fbed1bffa9e8adbf4ff972"],["/archives/2021/11/index.html","311c64ae93013fa03702cf0b309caa5a"],["/archives/2021/12/index.html","7c6c3a831b0fb3c5d3a1ab3457b21222"],["/archives/2021/index.html","c87b37a2916ade9f776b6a9e28bb0b23"],["/archives/2022/01/index.html","930ed61ee5d10deb50453c24470265d0"],["/archives/2022/02/index.html","de7f4b9fa896b40f1bc0ad381f7ec2d1"],["/archives/2022/03/index.html","5e00bbf46bc0919bda90870603e11233"],["/archives/2022/04/index.html","159a7dc9397ce2161b71a31975305487"],["/archives/2022/05/index.html","360b97ed507bd31384c44f6f52ed9522"],["/archives/2022/06/index.html","4db2c8ba87a0c8ea51ecc40eb0ad0449"],["/archives/2022/07/index.html","6ed259a54a8a0d2aab2bde1e59724779"],["/archives/2022/09/index.html","68b819abbc517551c13e0046231822f2"],["/archives/2022/10/index.html","db72a6e2c269cf9e0dc9785033597b9a"],["/archives/2022/11/index.html","9652b26dee882d688e22579d82111a5e"],["/archives/2022/12/index.html","0893e0c9caf80ac175e4854ccbbb45b5"],["/archives/2022/index.html","d79e08cc3075e1b21110cf54bc9bc78a"],["/archives/2023/01/index.html","702d00a5d6c21e11fab0df84f389a9a8"],["/archives/2023/02/index.html","f8b3da319c07f9a77a63d4d324d17565"],["/archives/2023/03/index.html","3f81f95de04803ab7a8bdfdeb1be3400"],["/archives/2023/04/index.html","047af9c4011ea551e7d944959cb9c0a9"],["/archives/2023/index.html","03ff7f0d77ac828b7aff0dce2d42cf52"],["/archives/index.html","1101597eaf3f186604469c44e8ab5622"],["/archives/page/2/index.html","6694b55a3c0d458a47a9aae2249aa48b"],["/archives/page/3/index.html","51d5f81fd6a3a80be78e306354842a88"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","3cd10246afda8b5ecebd2f3098a0d891"],["/categories/Linux-study/index.html","0b52c7ec32c1cbba8eb204b68a339054"],["/categories/ML/index.html","466aeb557f618c8e3aa6155860c455b4"],["/categories/Nginx/index.html","2d4ccd5abcc77daf232d770e9cd9e837"],["/categories/Spring/index.html","6607d128e9e6301f6426b5cad3dc0a42"],["/categories/course/index.html","2b5a76f51792341e90b358862bc45415"],["/categories/django/index.html","07f24b377836d00e48279f061aa52483"],["/categories/fun/index.html","082211bb126b469a593141be1820563e"],["/categories/gcc/gdb/index.html","d57552817b68611431e15fe0ea9c8f93"],["/categories/gcc/index.html","8487861ccc5913ad99b51ecfcf2f4f9f"],["/categories/index.html","3fc0a234e781dc77c0fea30b941df34a"],["/categories/java/index.html","6d6d933c7c79619acd23948f0c29192f"],["/categories/latex/index.html","787e06927b490aab32c49eebfa7ef8e1"],["/categories/python/index.html","0e3f31a51df8a0c32ea60a0bd98f9b0e"],["/categories/study/index.html","f42b183a7ff76fd1508aab396944008c"],["/categories/vue/index.html","237ab5935290d596a01d35d8fd5e8fc3"],["/categories/误区/index.html","a6b58d0ce9f3e2046715fe9934b7144f"],["/commonweal/index.html","bffaffb2c327896cb1983371fb4962ac"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","fac1cea870e3dddce6478a1de5638acb"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","13a257dc08b242448b2abe2e9c533f2e"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","63944b00f2162db0b60cf42a985ee1ee"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","62e2caa4a60eee95ac79b651bf87b5ea"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","20f5783fff464b852d4e938b1632cc7b"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","e76cebc2299fd1e956a02bbc206a2bfe"],["/page/11/index.html","22e05c45c53e2481383d210df1259edf"],["/page/12/index.html","66ac2e38850a34f45edb1c1a9fdf7adc"],["/page/13/index.html","a0ccff46336c40063d0028ca429eecd9"],["/page/14/index.html","ccefe3ccaaa49b772707762b75486f35"],["/page/15/index.html","5055f79868ed432356f98085ffceaf60"],["/page/16/index.html","69d6ac53490dd13141964624a8921b17"],["/page/17/index.html","34904cb969501ac04ac2af01a1a4f26b"],["/page/18/index.html","512e02714896b42f500a431ec090b12d"],["/page/19/index.html","02be96ae49d6e0ff0284d025becbfe5f"],["/page/2/index.html","37e288f85300581ed65dbbaf50465d4b"],["/page/20/index.html","c05484eccd58dfea5236ee0a03aad35c"],["/page/21/index.html","778354630250aeb038ab821d79d080d1"],["/page/22/index.html","eeef093f68b81dccdb26a32d79499ba6"],["/page/3/index.html","10eeeb1d24ec1ac7a5da0494030ea509"],["/page/4/index.html","35c20639b92510fa8c274464900533b1"],["/page/5/index.html","922ff55277894cba63f7ef000cce9c18"],["/page/6/index.html","63960900f5259c376654344634c003ba"],["/page/7/index.html","8131e6c29b23ceab0cf768c888dc589b"],["/page/8/index.html","5ec7896b69b4e525408f0db2f5ffefee"],["/page/9/index.html","9dfda65687fc0e39d2a16db622b11e76"],["/resume/index.html","fae40ba1e230b6c6f84c37955f803628"],["/schedule/index.html","9c309f5568d55022a9d2f27caf0770c9"],["/sitemap/index.html","82859f6d835269b93d63db2f3d8525f3"],["/sw-register.js","68b92c2114443d1f94574524e0536d27"],["/tags/AI/index.html","e29fe744e916f6669b0987892ed8ff32"],["/tags/BT/index.html","fd1f4c0bf4d86c17480f240176dee40c"],["/tags/BaiduNetdisk/index.html","02f9f2daa73f054a4a2d6b6217bfe614"],["/tags/Bootstrap5/index.html","f2df6e0fbfb62add17feaa3342211aa0"],["/tags/CSS3/index.html","6412e6672547f71365c4b2dbd34d29fe"],["/tags/Centos/index.html","b477e672f50ba7b18a3560a434a55912"],["/tags/EEG/index.html","deeab16afbb8118259093bd3df75593a"],["/tags/Electron/index.html","58696c056a85a66c57449af30336e427"],["/tags/ElementUI/index.html","a592caac0b8b0050ac7bce4ec68057da"],["/tags/Flutter/index.html","0d1062e7ea2a2a427c4bf3ae4910aacb"],["/tags/GAN/index.html","4319f6676d09820f0d3da9b22737477a"],["/tags/GUI/index.html","0d16b61f290d02bdf470a66695e07600"],["/tags/Git/index.html","2045c16a93cdc4e567cdfc912c422459"],["/tags/JavaScript/index.html","19299d530515e71d47a1ef3be54f2e61"],["/tags/Keras/index.html","a6cd9428bdbd0277b767f0bafb79e572"],["/tags/Linux/index.html","d2739ed9d7fdc94f5bf0535d9cf028e2"],["/tags/ML/index.html","da5d3134dbef5ebb921c731279f5aeec"],["/tags/MNE/index.html","41575f8ee966053decfd5011b17a2be7"],["/tags/NLP学习/index.html","6ae31bb3e651a71ab2c7d4795deb9e6d"],["/tags/Nginx/index.html","4b547fd2b405f6c1ce8387b6e4ae0e16"],["/tags/OSS存储/index.html","62ad3e957da5de7960240f50abae96ac"],["/tags/Obsidian/index.html","9326ed380b12938b29daa5281923eb9d"],["/tags/Qt/index.html","66e49ddf9a29ab797cfc77a40de93a22"],["/tags/RSS/index.html","eddef9fa6c5a221b539477f1628a5f25"],["/tags/SSL/index.html","99147d64358335d46854bc8e66a29ec5"],["/tags/Scrapy/index.html","4c9f4e97bcf4712d7e75b23f5c7f4ba8"],["/tags/Speech/index.html","c40db44d248b0adcad393f5344f6e61a"],["/tags/TotalCommander/index.html","32726da4de06884e2a284f6829d13372"],["/tags/Web/index.html","15f4461dc1b7dae37d6f61550758750c"],["/tags/algorithm/index.html","eef9fca863f7ec758793cd18711e785b"],["/tags/bison/index.html","eefc0c3df6473c3b4141d51b246cf08b"],["/tags/bomb-lab/index.html","5ceb28a03039e14b034262d06f91822a"],["/tags/c/index.html","44bce17bbdff7231513e5f6c352960ab"],["/tags/cheerio/index.html","f9886ae4147a324615767adc5befb9f8"],["/tags/codewars/index.html","a11bc58505545deab9ba7d178400b697"],["/tags/compile/index.html","23258b1ea8c114d3429d8f5aa6758265"],["/tags/compiler/index.html","d5df867ef21e979db58c013741e6d58c"],["/tags/cors/index.html","d0938416dd6f430ee0ddc0448cc49bc6"],["/tags/course/index.html","a4e5dcd228c352d08bca1e80d3b44528"],["/tags/cpp/index.html","c719253f23c4ad0a1748835ef96aa4f1"],["/tags/crypto/index.html","619f46e7a6e71202a7dcdf0392d4a545"],["/tags/csapp/index.html","0950c41e6a6a6585cc24a917d3101b04"],["/tags/csp/index.html","615e1e345c4cbfe2183b7b8677aa3522"],["/tags/css/index.html","eedbd494cb0df0248cc6e90d371a1f4a"],["/tags/dart/index.html","8dcd3780b31971a1c13d499292075c44"],["/tags/data-structure/index.html","737d30ba0d676f250eaeaf0366e114e1"],["/tags/database/index.html","653c92a1849ee41fb11ab2548b3dc7cd"],["/tags/deep-learning/index.html","9cfd3c567936431ee01c90652af343f0"],["/tags/django/index.html","c1252b9209036d7ec08fa15823941559"],["/tags/docker/index.html","eebad2f87cbbfae0be136783d42bf798"],["/tags/dwm/index.html","1dc08803604c1762b5ce2ddf5b5cab50"],["/tags/exercise/index.html","c61cca5a38a9a44c33c359c75e09c492"],["/tags/filebrowser/index.html","0d2f20d5a97705a2f94e867884b04314"],["/tags/flask/index.html","444cf561e437a0469167d0d7e804317f"],["/tags/flex/index.html","2438aed2ea42818b8ca239b02e02a447"],["/tags/front/index.html","b257f4196c91cf1cb0fe9ca43935b87d"],["/tags/gcc/index.html","aa23c134cf201f77f2319c8869d8c6ec"],["/tags/gdb/index.html","5019f43352b3b9dce6243cd2d83a192a"],["/tags/github-profile/index.html","1f0770f751d2b2a57be065fe39caa09b"],["/tags/github/index.html","2204932f214ea6c386dbbd95e7bd1eab"],["/tags/graphviz/index.html","85609682132a303b32a7160ad5f4182d"],["/tags/grid/index.html","fd5fc44215d55ad0b9bcf5bb6e7d45f2"],["/tags/html/index.html","c6d701d80326d782595a8000d1be16f4"],["/tags/i3wm/index.html","5899654d23109a2ae26a0d4b171469c2"],["/tags/index.html","7726c00be41ab58c967e335b0b7b14a5"],["/tags/issue/index.html","17535f3fd2b6afed44880e0a7d2b0343"],["/tags/jQuery/index.html","ce419dd8c28dd947efdadb3d26cb6ef6"],["/tags/java/index.html","3fdcf1ac35238e35e579f1e540ae8732"],["/tags/js/index.html","d7c1c4625dfec2174e2201ad4e603528"],["/tags/latex/index.html","7968fd1ca61b8db9d8d31db920749a17"],["/tags/leetcode/index.html","3c9de33e1a5422c6283023d281bfd4ad"],["/tags/lex/index.html","a382c6d9540c6056416c0682bb94ce54"],["/tags/material/index.html","8c92e317c6cb53fed4e1c4ac89e51299"],["/tags/music-player/index.html","ffbe45c55034d37eb40286ba1ba51cb3"],["/tags/nodejs/index.html","cd3191ecdf7526cf6c21646cdbd73007"],["/tags/noj/index.html","c76c7dad705fc727423d2c3764f2ca81"],["/tags/opencv/index.html","98732f44a59b3f95cf4df56125bb0642"],["/tags/overleaf/index.html","4f82f1ec3023093d7928ad9e933c99cf"],["/tags/pandas/index.html","673715569dcc0c06c6ad615e4aaf8623"],["/tags/paper/index.html","2fa769fc1f835e7fb49d48669e667ce5"],["/tags/premiere-pro/index.html","df51bffe69bed59debff6563e3078784"],["/tags/proxy/index.html","478000fae1eb63f1ce84a066b3560a56"],["/tags/pure-css/index.html","2355883653520817d8ea736c523261de"],["/tags/pygame/index.html","9ad353f576da19ca47e3d3813b6931a8"],["/tags/python/index.html","002d4851a1e1aa6857adf5e76a70aff4"],["/tags/python/page/2/index.html","06eca6b8404c687563ca18aa1fb36aeb"],["/tags/pytorch/index.html","505defda8a7645d38b6cd48267d58b34"],["/tags/reading/index.html","94355a3797c56d6eb4bf43da3aff96a9"],["/tags/request/index.html","bc4e95139d7244dff50dd74f876afc43"],["/tags/requests/index.html","9878c298649956b191e5c563d74b63ec"],["/tags/security/index.html","56e9f5f0f824938ea9b35f2e046cf0ff"],["/tags/shell/index.html","16050dc387be670beb168c8e7187085f"],["/tags/sign-in/index.html","19d3ebb8b053eb4cc076c247a78c98ec"],["/tags/socket/index.html","65cc44facd40964966eb597cee866260"],["/tags/spider/index.html","021cdc628804570b59411350086bc8a5"],["/tags/splash/index.html","217d609a81cd97e95d43d4018948326c"],["/tags/stl/index.html","7b2bafc99874eb1a9c333f2afdc213bb"],["/tags/sumatra/index.html","184963c703700ea400e04fd3356a24aa"],["/tags/superagent/index.html","7e64cd8e946dfc694a29609d5caa7418"],["/tags/tensorlow/index.html","cee65af3411db6f367f12023de19b7ee"],["/tags/tex/index.html","aeec9c8e53fa92d32f66c24dc2f17913"],["/tags/thesis/index.html","dc27d65a24eecbbffa151d592c7f6362"],["/tags/threading/index.html","2336b838975848063e5a66cd4fcb2ce0"],["/tags/tkinter/index.html","e3dfff53b1398eeba89370d07532fc70"],["/tags/torrent/index.html","3200d81386fb6951b75b87e4429b8a97"],["/tags/tutorial/index.html","4911ecd721a169283be72296244cae02"],["/tags/typora/index.html","1b44326bc6b0c60afd11fe8131a6f097"],["/tags/uniapp/index.html","7ca0ce11c5da8ba6ef892eb1fd06a94b"],["/tags/vite/index.html","947cdb97896191c542b419abc6ab1f2d"],["/tags/vscode/index.html","c9539d2110e9f77796cce93d3c9c937b"],["/tags/vue-element-template/index.html","1b8eb4ba22ad89c6e6e7b2fa09d4cbe7"],["/tags/vue/index.html","5300a9a1910972147bcf3bfe0dfe1165"],["/tags/vue2/index.html","70458a3458c762afd6211f8538b45f4e"],["/tags/vue3-x/index.html","a49cd99ab81a8bf1107be8af12885caf"],["/tags/wechat/index.html","1ff8df4f9e5af3835fb9474c1f880938"],["/tags/wm/index.html","ecfe7048c89484e5ca9780f4d89e1989"],["/tags/wordpress/index.html","d39437ca587d30d5eba74a660374dcd0"],["/tags/workflow/index.html","99e7dc2835c1e68f6b62976b91968b64"],["/tags/xpath/index.html","2dbec02b4bc9ce92e3ec52107257ac7c"],["/tags/yacc/index.html","d944dc2115fbe532deb6a076bbef30d8"],["/tags/zsh/index.html","72bee192a5d874ca9f745b8581a81b1a"],["/tags/七牛云/index.html","f74fc8fe8c84ab496d861d5985a5b98f"],["/tags/函数/index.html","a96e9d137fb3ad6d108554cbc6364609"],["/tags/剪辑/index.html","28c27cc5ccdf5d577d46dc6206fc860e"],["/tags/存储/index.html","1a9e7a7377b3d5373eae2c883b5ce5f2"],["/tags/实战/index.html","4232bf2c560cd0866328ef796342eb18"],["/tags/工具使用/index.html","f9ff77c8a0e18023ebb0c905cd8ab8a7"],["/tags/建站/index.html","1f31cbb4ac64fd040df8c0a3c92d8417"],["/tags/微信小程序/index.html","af274d5ac7515b4214fe35034b2233fc"],["/tags/指针/index.html","b4b6a9143bc42a187326e5877eca3147"],["/tags/效率提升/index.html","c18692fb56035324977c6981f68313a4"],["/tags/汇编/index.html","e5b9f7c944d72e2b8a0887e180f50aee"],["/tags/油猴脚本/index.html","35ed6ec970c7b8293b2e1c490fb3f542"],["/tags/浏览器/index.html","397d322283af9189e6a9996a6a2e99b5"],["/tags/爬虫/index.html","92f2bc149196ea89e731aafecc5fafc6"],["/tags/算法/index.html","35db82456cb864ea4e15b7ec660029b3"],["/tags/编译原理/index.html","ba675ce06a66eb6f4bb6f5e2136f7e7e"],["/tags/获取地理位置/index.html","85997ba4034875615aa81636e011557b"]];
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
