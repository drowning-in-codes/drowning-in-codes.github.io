/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","39b5f543c76d62014923066f6cbe6755"],["/2021/04/20/稀疏矩阵/index.html","3d107b5d647b4342550e531c14727075"],["/2021/04/23/广义表简介/index.html","6f076df7a28cdcedb5e739f7bc0576e3"],["/2021/04/29/关于指针和函数/index.html","3750602e77af24c20b943447ab9fa3da"],["/2021/05/10/哈夫曼编-译码/index.html","d30af5cccf3e0166dd298eb557ec6cff"],["/2021/05/17/数据结构noj_2/index.html","796328377bb50e2d650ba9f582ac2fa7"],["/2021/05/30/数据结构试验/index.html","21139648be3386df55480b8bb5c9ee77"],["/2021/06/12/数据结构noj-3/index.html","0b02a631a30d625571778f40b3068a48"],["/2021/07/08/C++与Qt开发入门/index.html","3fcda2e32f3d2550b7d6f7346d32fdd6"],["/2021/07/08/课程资源分享/index.html","dd2ffaac488de03782295c72532b3c59"],["/2021/07/20/Scrapy-下载图片-文件/index.html","893a358755716c1afddbe54f7b5853af"],["/2021/07/21/Scrapy-动态网页爬取/index.html","77bffbb18f7461f36ddfd7f6c970f70e"],["/2021/07/21/疫情打卡/index.html","1f208ed807a9a3ee753a03741d4be7c8"],["/2021/07/29/Scrapy代理设置/index.html","41c32de3588cd0f1cc257c1dbc7408a2"],["/2021/07/29/数据库认识/index.html","40a0db9f33743944dfb1f5cb95458145"],["/2021/07/31/Python多线程学习/index.html","992ab6d9f1852b23fb96ffd88d7c0e84"],["/2021/07/31/tkinter-requests练习/index.html","b78f30705b8a146543da7540587b525e"],["/2021/08/10/Git学习/index.html","1d806fb496cbd979753309881d3f40d8"],["/2021/08/15/pygame实践-1/index.html","108318d1c43ddfb3a9d97a3c1b649710"],["/2021/09/06/微信小程序开发/index.html","f7d618d22e4af8cf73c5aa50525ba24a"],["/2021/09/21/命令集-1/index.html","6791f6d84ab7e99e3dc786a46c040493"],["/2021/09/21/命令集-2/index.html","87c4061fbb02e4ab96cabf0d4c3ab8b7"],["/2021/09/21/命令集-3/index.html","ace2610a68bef601de1113697929e023"],["/2021/09/21/命令集-4/index.html","56768c9a504f6405ee67a2345ecebb29"],["/2021/10/03/socket学习/index.html","02461386a1aeaf180676858c9211af1c"],["/2021/10/10/dwm入门/index.html","3057b01944a71866d33c6891f8edce71"],["/2021/10/10/安装ohmyzsh并配置/index.html","625325803f202955d8b77700f64310c2"],["/2021/10/20/css学习/index.html","e5a786a0033cb937972c5eb9f6b955d9"],["/2021/10/20/wm入坑/index.html","b56be054b1b9d157ab16d43ff89ddf02"],["/2021/11/03/微信小程序学习/index.html","726dff9350456e71dbb7258b4e710565"],["/2021/11/04/css揭秘/index.html","877fe2dca6535ffdf521b951aec357b5"],["/2021/11/05/css-练习/index.html","ddad012ca2b327f795f0fafa0edeade4"],["/2021/11/21/命令集-5/index.html","fc14f0d6e8ec03831c1a763f2dde9fc9"],["/2021/11/21/命令集-6/index.html","ae661cd6274dc59e1a66533e0c55a1fc"],["/2021/11/21/命令集-7/index.html","2590d17d65faec4ca894fde756eeb973"],["/2021/12/01/搭建wordpress/index.html","30164a1fc395e99ff70df2202f5c3639"],["/2021/12/08/python操作百度网盘/index.html","8a0657a06b2c28dfc3cabfc787f0cf9a"],["/2021/12/14/js爬虫/index.html","ab7d69933e0aba9cb6777cc61bfffde0"],["/2021/12/25/为网站申请ssl证书/index.html","05f82ed2c95558b3788f15426707e176"],["/2021/12/29/使用七牛云为网站提供服务/index.html","7c7c7a0cdc67a5c62a1d32fa37202f9f"],["/2021/12/30/jQurey继续学习/index.html","b890669a455c7c0946a3b0a6184cdf33"],["/2021/12/30/jquery学习/index.html","3184b51649a3bb3ae11d59adbff96ba6"],["/2021/12/31/vue学习/index.html","dcad008e83ad62690cffc4f106048c75"],["/2022/01/02/疫情自动打卡/index.html","1bf4c202941c5b8050c1e03eae9737fc"],["/2022/01/03/javaweb初体验/index.html","21d11ce6eb68cec68ecc0f57c6312161"],["/2022/01/04/codewars练习/index.html","2ecde690a2c1a67b97981be0e8201919"],["/2022/01/05/Spring学习/index.html","773439ee3c1399a04efc0b7f3392c03f"],["/2022/01/05/vue实战/index.html","b0395aba1fcb0bf05889a57ba06c3a13"],["/2022/01/08/gdb-gcc学习/index.html","420af92160d333fff7dc1d1975fc5d0b"],["/2022/01/11/python-opencv学习/index.html","42ffcd3c386a540f2a04dcf838c6e08f"],["/2022/01/12/汇编实战/index.html","3f90ec077692a0ffe37f5b9bd2834aaa"],["/2022/01/17/pandas学习/index.html","c8510dc8f2c0453d4bb3bf134f1c64b8"],["/2022/01/19/可视化图的工具/index.html","829842eccebb47e1e4fb539f21f07bef"],["/2022/01/19/机器学习入门/index.html","88453f0781d373a28bd2886764efb4d3"],["/2022/01/20/cousera-ML学习/index.html","862aef1c34c8c0361323480abd1d48e3"],["/2022/01/30/typora解绑后出现问题/index.html","a15118a8463d206b8b7bfed0676333bc"],["/2022/02/03/NLP学习/index.html","db45b57b4e490606e2c7b0a37639e32f"],["/2022/02/04/Web漏洞学习/index.html","cc9cdc32c3d33bb1b7efcc359b241f19"],["/2022/02/04/pyqt学习/index.html","ff6b095f7a90611a7a223606a0715cdc"],["/2022/02/04/python爬虫/index.html","2b3a38663221565e5d7ddafb9b86dd99"],["/2022/02/18/Electron学习/index.html","1f28252ffd56934b92aab732f5e22e4e"],["/2022/02/22/疫情填报字段解析/index.html","c4a4777acd55329f92b5332136c6c343"],["/2022/02/24/Bomb-lab实验/index.html","daaa1c3d13bcd379719c48ac86c6e59d"],["/2022/03/05/nginx学习/index.html","4adb33a9828bc8e0a029b6af2e7a2ddc"],["/2022/03/09/汇编原理课程学习/index.html","f6991e642b1a74ec06f0595644dcd1de"],["/2022/03/11/Keras学习/index.html","81391e30d9676d31cdde107e1506c773"],["/2022/04/01/graphviz学习/index.html","218a2fad4fdff1527788de13af619965"],["/2022/04/07/django学习/index.html","eb276f71b4531120d9f573392bbf9ba3"],["/2022/04/11/密码破解学习/index.html","47e1ca97f5043835560ac20dc0109349"],["/2022/04/12/flex-bison学习/index.html","f85184608e83cfca7779827834f6962d"],["/2022/04/15/pytorch学习/index.html","4d60f9b55b841696740eaf664661e685"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","c33f8189aced571801ddc9cf8d894bf3"],["/2022/04/23/写一个音乐播放器/index.html","4c6bcca254abdec7c88342cd46f8bf87"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","096c857703c488123d31617f08aef6b9"],["/2022/04/30/GAN学习/index.html","f0eeab4fce68d05dcb566b0746d1b5cd"],["/2022/05/02/html精学/index.html","28012b17e3b9812676e46f6b653c2966"],["/2022/05/06/write-a-compiler-by-yourself/index.html","9b411efe03cb2fb2f61573f445f22543"],["/2022/05/30/acwj-01/index.html","46d62d685055b2093cb15d65bab8cf43"],["/2022/06/14/animeGAN/index.html","b5b92f9a5fcce7f54f9338f6fcf7d6ad"],["/2022/07/09/c-与算法学习/index.html","030b0556f052ecc723413ad7dc6eee49"],["/2022/09/19/flask学习/index.html","f28ace95e122bd05f034a37696df612a"],["/2022/09/22/cs224w学习/index.html","87c859a82ad3577b3ea678ad49f41656"],["/2022/09/28/记录一次wp重装/index.html","3df20037e52f30c67f72120249c2bb38"],["/2022/10/01/Obsidian学习/index.html","56e3311a9d300a67e4ced5f16aa2051a"],["/2022/10/08/vue-element-template实战/index.html","794d03266229d7ff75771d06d2539281"],["/2022/10/25/vue网上商城项目/index.html","f8233a96e9483d5f5362c89a836d9d08"],["/2022/11/11/leetcode刷题记录/index.html","97cf2287fdb5ac1f769701645f4778e2"],["/2022/11/11/使用overleaf优雅地写文章/index.html","821e00e5ff91bbd3b1a9d98217972984"],["/2022/11/22/磁力链接与RSS订阅/index.html","e0a1c9b442bfe85db20c1cd855b7b0c2"],["/2022/12/11/uniapp申请获取地理位置/index.html","90f79ca696cd7bef6cd702a992bc99fb"],["/2022/12/26/pr剪辑学习/index.html","c17ca0fffd2d0f9d18958df214687b08"],["/2022/12/27/css中的flex和grid布局/index.html","bc34a70cc537f32a50993146649242f7"],["/2022/12/28/Flutter学习/index.html","f5640535b14ee55ee14fb0870d075b13"],["/2023/01/01/美化github首页/index.html","c30c4597657a641039dd30be77fa4b61"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","79bd20c8d82d878cfa61af0b060b9e8e"],["/2023/01/04/构建微信快捷发布文章工具/index.html","1a96512bbe5114ab9dbd63368ed43725"],["/2023/01/14/dart学习/index.html","8a8e0a71b6c1bcf9b94ec1d69f044200"],["/2023/01/23/闲置服务器BT下载影视/index.html","c89c9e98fe304331770db62bf460344d"],["/2023/02/07/TotalCommander使用和学习/index.html","425d741a53e97a6e289aba8e1b5e6d5c"],["/2023/02/13/docker学习/index.html","7f9230c0f87bf05a6afbae75d1b1691e"],["/2023/02/17/DLHLP学习/index.html","3a7248665a11aa8dc44f126ac3c06053"],["/2023/02/18/学习purecss构建自己的css框架/index.html","1b8385f704b75cce7e1bf1eb160d8f25"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","b9460edc5ce85490118c2870067cb09b"],["/2023/03/05/STL学习/index.html","1e03258ca46fb099626f721563b9052d"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","5da1280722abc34b73c395b961d3e943"],["/2023/03/23/实战写浏览器插件/index.html","5cdee3c3e7b8f5f1fccc3a5c7656bc51"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","ea6d7db6269293d30a7100d14f8ade2e"],["/2023/04/02/EndNote基本使用/index.html","c04b69b52e91f93e268a65526c6ab119"],["/2023/04/04/mne处理脑电数据基本使用/index.html","dfbc7a97491cc42734de383191f6ca3d"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","7cd5b6d630bcf77765ea6a24c042d5a4"],["/2023/05/02/python中的logging模块/index.html","ab3350e56b095729edcbe8db53fdfcc2"],["/2023/05/07/python的特别方法与装饰器/index.html","d9154fc48abe13ccea0fe16491339440"],["/2023/05/20/Wox插件编写/index.html","fe9b440e92c7157b40ca23899871424b"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","d90f9c6707f9e39e915f1db3ed6ee857"],["/2023/06/03/深入Clash配置文件/index.html","80bd1d092b6a21d480980017660ea2e8"],["/2023/06/10/node的包管理工具介绍/index.html","26bb59a6912ba4c6ec5f3888887fe504"],["/2023/06/12/AI写作工作流/index.html","f881c9764355f0e16e81f51c76b26ecf"],["/2023/07/07/Astro-Vercel部署博客/index.html","96e9c81af00713447396be08081f3fb1"],["/2023/07/09/青龙面板部署项目/index.html","e921085a6464b3630963daf72a086896"],["/2023/07/29/CSS-Modules介绍/index.html","5e837ca2b481d45d1b45ab0640f6cc4e"],["/2023/07/30/浏览器JS/index.html","1cb9c94758f77160c2555cca675dbdf9"],["/2023/08/01/增加live2d看板娘/index.html","81a03a8da0bc7469cb14a535bd56ebbd"],["/2023/08/02/深度知识基础学习/index.html","98007147d529729520809121f6fc6960"],["/2023/08/04/tailwind速成/index.html","ab0c65b489e95c59b4d1a7e1d2b8ba74"],["/about/index.html","2c7d6be8c5bfbd87fa8e0cfac25e016a"],["/archives/2021/04/index.html","3f30faa764786447a6e9eb4ae6972237"],["/archives/2021/05/index.html","d765bab6e6504a374e0677b5f6430552"],["/archives/2021/06/index.html","1f8a2ea4277fb3f0354f8f8e803e68ce"],["/archives/2021/07/index.html","6378cbb187c8be932d277aba9400c073"],["/archives/2021/08/index.html","0b164dd2c73ff13dc8873bb9d31f4137"],["/archives/2021/09/index.html","f22e1a589a4939aaa68f173a0b15770d"],["/archives/2021/10/index.html","85205a1a5abfc101dbf3886f24e56ee8"],["/archives/2021/11/index.html","3a23e7a25cf62949c4cd564fe8060b2c"],["/archives/2021/12/index.html","f95373be654717209cd8fe4241238d9c"],["/archives/2021/index.html","39ce49574222178272db2c6e222baabb"],["/archives/2022/01/index.html","954e83ff38a05e476df104bf0982ed5c"],["/archives/2022/02/index.html","11836cdfd7c29c27e5a908377169e1e1"],["/archives/2022/03/index.html","c80998f2cdaae7336335fd950658d33a"],["/archives/2022/04/index.html","ca246498e95ce4d2e81fd3eb1b9c6c57"],["/archives/2022/05/index.html","fde78aae84f8b284f6d92e40872d85aa"],["/archives/2022/06/index.html","feeb87288f624acd49ba8dbf22a1b915"],["/archives/2022/07/index.html","85e5e80e543b539ecd805a9620fe0fbd"],["/archives/2022/09/index.html","acd758945c1c2bfa9229ba692e7ca13a"],["/archives/2022/10/index.html","ccf0381b1524232bde63f6c1080c8084"],["/archives/2022/11/index.html","f44c1eb1443665bca2660c88e21451af"],["/archives/2022/12/index.html","50b06b24602986bfd110ac875a5cc63d"],["/archives/2022/index.html","463dab36d901c0bd16651f24e4496070"],["/archives/2023/01/index.html","00f3f5439ff29ec07483298752d6580a"],["/archives/2023/02/index.html","c3244a6bdb4aa0f7074f2f2b0c8857a7"],["/archives/2023/03/index.html","d3dca160129c6b90e6104fea91ca3581"],["/archives/2023/04/index.html","bcf6ccbe53ef1769928014b58a0caedf"],["/archives/2023/05/index.html","e8aff7338313b1c4f37a1cdd16816ebd"],["/archives/2023/06/index.html","85372c9af0dca6e6981694754b17d9d4"],["/archives/2023/07/index.html","d90d9ddc2ad7f462313c0b34cbb57528"],["/archives/2023/08/index.html","13688b89e52e7528c5d69f9aa6439770"],["/archives/2023/index.html","c6bff62a4aeb480e19c4feb84e46495b"],["/archives/index.html","58b9d578ee4fdbdc52e32f8e5083c85f"],["/archives/page/2/index.html","77a0466d9c2bcc59047a8fdb468e5b4f"],["/archives/page/3/index.html","91a99509a9a1a24a7403f6100838e3f1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","308dd50358c903b13736cc77e1418429"],["/categories/Linux-study/index.html","9ad0af27e8ddaed212528b7518e78861"],["/categories/ML/index.html","1fcc7b9223c369dd23b23c2304738810"],["/categories/Nginx/index.html","5f8f61f5e75147c93772f9b3acabb3bc"],["/categories/Spring/index.html","39cd5d7974fa9db3adca4fe7fc824fa6"],["/categories/course/index.html","a8e95cc3f5a593d2449976e68dc2749f"],["/categories/django/index.html","d94b0720c0820e72f65ad0adbf303165"],["/categories/fun/index.html","f4b701d33cc91fd30402c259e0d6a34f"],["/categories/gcc/gdb/index.html","2ca27c5e0a4f9a60ca4c5e9ed46fd3ad"],["/categories/gcc/index.html","b8486c8642b58f1486a29d6e7e8e1198"],["/categories/index.html","943ced4f23a56f2be6152fd5e01f6342"],["/categories/java/index.html","23c6bb1e3e242a9ae6a5c2791129927f"],["/categories/latex/index.html","d76704fac8df7ac1db514456927db612"],["/categories/python/index.html","16fc8d7a94a47e7748a50148630afb94"],["/categories/study/index.html","b61651b566fa849c8a92e7a966aed3d2"],["/categories/vue/index.html","82e25380abdb70493e80dd5c10c55813"],["/categories/误区/index.html","2f42b9c0ea12a367ce83b161810fa912"],["/commonweal/index.html","136e4b6f1ab133fe5afd22bbbddb0243"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","fcd2dc569ed8801e7895eb675b7e7b7a"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","5d746434485b6aa7fc3cf5b5a3ba66cd"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","45753f70944099b6580683ed672e5e24"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a41215827b430d0fb352cc8c6ceb6d27"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","07f35e4364e38bc0f2e064b1239a290c"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","7e38144051a327351bd3034ebfea4b63"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","16bde8a3cb5d6ade5b4db20008d1123b"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","31462d698959128824a588ae07c5e450"],["/page/11/index.html","b12fd52911ecdf23f7f27e2ddef3dfb5"],["/page/12/index.html","a3a449a6b66a22d3ce40ed253d027d5d"],["/page/13/index.html","be76ab4dace0911d62dd92fc26ba3bef"],["/page/14/index.html","aa1e2b4a1d3434174169b10b86597424"],["/page/15/index.html","4e441ac34606feae149fdaf404025363"],["/page/16/index.html","4606624f754ce2db442b3fe20c7206ec"],["/page/17/index.html","47bf19a27c78ab8aa46477add3f494cf"],["/page/18/index.html","0a41be0e88c57be8f3a0f9a1dde581a6"],["/page/19/index.html","f42f599cbd53808a75896e5da5e46c48"],["/page/2/index.html","5789d758a2da025dc9810094abc78372"],["/page/20/index.html","0884b521a4fd3ba90d753b6e6555804d"],["/page/21/index.html","0351c247883807ce0cd1364b816a7960"],["/page/22/index.html","ea06de3406b652d2565ed5d1396337b2"],["/page/23/index.html","55d238ac4bfdb32154ca6a5e42803ab2"],["/page/24/index.html","ecc51b27f103d5a79f45f956f86bfb22"],["/page/25/index.html","7140aa720fcbe69ecbfd9cddfb10872a"],["/page/3/index.html","cc0cbd131b328ef62af72174f7693f58"],["/page/4/index.html","f521131a2f92b553480918b50742be91"],["/page/5/index.html","adc065794324f87cef6cdb204c9c57e6"],["/page/6/index.html","9722218f662d590874f3e853a589857b"],["/page/7/index.html","460ed087f637e2a4609eb43f6ff076df"],["/page/8/index.html","5a4f9517c83031c357d803188ea64cfd"],["/page/9/index.html","7782678b1fda20a6fe03d6de658cb362"],["/resume/index.html","ccb2b8fa14d77515f94a2a2e1f68e33f"],["/schedule/index.html","ab2e1269817f41343c210c26b8410b61"],["/sitemap/index.html","90dc86ae738eb838f88ba3c93049614b"],["/sw-register.js","793da4e7f8e38caa21e21b0e90e5fd38"],["/tags/AI/index.html","613c96593bf0cc4e2ac7e8181ca29907"],["/tags/Astro/index.html","8ed713fb5f50be89826e0ee3b8c91a67"],["/tags/BT/index.html","e410200683a13b059f82abbbfd400163"],["/tags/BaiduNetdisk/index.html","1330f2e69dfe10199f80c9b134c1b004"],["/tags/Bootstrap5/index.html","66ffa253e25facceb86692c87a07cb52"],["/tags/CSS3/index.html","6bc20028632e06857887d97039fabfd2"],["/tags/Centos/index.html","255bd93aaed43c7b4284978e7f0466d8"],["/tags/EEG/index.html","3add3afc10a8b880679987fa04b4e50d"],["/tags/Electron/index.html","08c5881c399d6a0788f98f6697a962ea"],["/tags/ElementUI/index.html","2b24d669da9a80c4ab586b017da10124"],["/tags/Flutter/index.html","846ff6bd4a3ffdbe06b0040eedb0f16b"],["/tags/GAN/index.html","7d64563395352231fb9f8d2d3d9a133c"],["/tags/GUI/index.html","096cb40f6776d79f8e821b689bd698a5"],["/tags/Git/index.html","66d14b3b31c42d7d7bae0316801e40e8"],["/tags/JavaScript/index.html","06f4acc0cb1ee0bf7d3067e4313d5b9f"],["/tags/Keras/index.html","c3d90c169c1d9d55bbd53dca2cb0be8d"],["/tags/Linux/index.html","bd1f28e050fccb3a9a43212a1101f362"],["/tags/ML/index.html","8de7113dc8d37291f4e773f17ef1a7b0"],["/tags/MNE/index.html","c280838e704cb42131cb3eecdae6ed97"],["/tags/NLP学习/index.html","69cb090ae49f19eed27d94ddaa239ec8"],["/tags/Nginx/index.html","d20fe81ac9258718de6e46661fe12bc2"],["/tags/OSS存储/index.html","82bc3c1965c63f0605aab97fc785a39d"],["/tags/Obsidian/index.html","fe08d0a659c64a1c7b681084a5541f57"],["/tags/Qt/index.html","4f23d466f96d4b32ff27e3b1332223bb"],["/tags/RSS/index.html","8fad3d5637a8097e46d2dfadd4e40bca"],["/tags/SSL/index.html","130e67e99c6a5a3ed06b3203f8f8a1d4"],["/tags/Scrapy/index.html","f5f50f89060b3cff3ad2fc3b6919f96d"],["/tags/Speech/index.html","c73175e62f950a3dd494b5d7d597c1a1"],["/tags/Tailwind/index.html","50cea0135e62546853fa3891aac6fec1"],["/tags/TotalCommander/index.html","a2c298eec50bb83de65e65eb92d01522"],["/tags/VPN/index.html","c478c400dff9a70409c5b45f2b92d093"],["/tags/Vercel/index.html","005337e5dc7f46cd5a1520158e25732f"],["/tags/Web/index.html","080a996548a70c20e5024041f0efd19b"],["/tags/algorithm/index.html","06d177eca4dfd541e2df5f5b29b4645c"],["/tags/bison/index.html","ac21fb095c1868eabea201bc908c3569"],["/tags/bom/index.html","f6525ae1f0142ed17e1bb3f080dab4a8"],["/tags/bomb-lab/index.html","fcee237a7d52ef81e5f9a6c75be67771"],["/tags/c/index.html","ac2852a8b40483863cb3cd6f8606ec72"],["/tags/cheerio/index.html","ff055f30606555d2f4a3b96c483ea66f"],["/tags/codewars/index.html","b448474062ab4b90cd0eb64fd24bd6d8"],["/tags/compile/index.html","a363939795b6186ba23e4e9e68807ba0"],["/tags/compiler/index.html","6a02eb013617e5214a48a6287ed1ef0f"],["/tags/cors/index.html","e0e56de30a5e84c5c36d0f6290079621"],["/tags/course/index.html","1ac09b6f3e58920c5d58ffe55ab379e8"],["/tags/cpp/index.html","fc2bc7d6a442d41ce4009f05796a538f"],["/tags/crypto/index.html","c6f4260e729ffe81cc61e19647a8c937"],["/tags/csapp/index.html","86b56f5f92232d95ab58862e5b12d628"],["/tags/csp/index.html","3ff4fc54b7ed1bad1739833340e50733"],["/tags/css/index.html","56850773b9e4d631e987a07548066fc5"],["/tags/dart/index.html","b389ca976d49e38e712b62f74088fedc"],["/tags/data-structure/index.html","61462675b559df125267037c4d97d156"],["/tags/database/index.html","b7f606563c115f555a438bb2d5bb9539"],["/tags/deep-learning/index.html","0603f090ba758da24c97fc958ce3b536"],["/tags/deepLearning/index.html","258c046fe9f5bd814224a05606edc71f"],["/tags/django/index.html","7d2aec4a805a63c84a9bc4ad1f14e5dd"],["/tags/docker/index.html","d6213d59092e6772ff3330014161ef1a"],["/tags/dom/index.html","cbb0f88a81406106c9ca1e01692ddc55"],["/tags/dwm/index.html","4033eacea709e3d10a7f580685d19ede"],["/tags/exercise/index.html","ab999f6571be9bf390de6aadb13b9491"],["/tags/filebrowser/index.html","bfb1eff9efe4f3e2f6787c5e77193678"],["/tags/flask/index.html","76fceceff0f11db68bc19b2201ee54a3"],["/tags/flex/index.html","5b89deab1d88b53efe25e21f2b9d033c"],["/tags/front/index.html","665ab315376dc13f91043d5720f0eb3b"],["/tags/gcc/index.html","d56758ba648fe2760d5d34d29cae2908"],["/tags/gdb/index.html","0f91847faef08eb0652884b57440fb21"],["/tags/github-profile/index.html","6d188ca1d4acc993a86a916a1555b22a"],["/tags/github/index.html","9bf80d02d11a885af4c4e894405730f1"],["/tags/graphviz/index.html","f8e6fb95659b380ea4dfdb489763c5a7"],["/tags/grid/index.html","c93196df54bd898ee9ea168a6077064c"],["/tags/html/index.html","a95337bd5cf56e13d5e9bded537675e5"],["/tags/i3wm/index.html","47bf08fb91a3623f39bc03ba15309dcf"],["/tags/index.html","1f4d0b1a502b7ee628e30acfde69713f"],["/tags/issue/index.html","990b2fb86e608b2712ce66ad9c46e371"],["/tags/jQuery/index.html","24372f46779f8345f21f55354ec23519"],["/tags/java/index.html","fce4813cc28ca4ef2ac00c162b36e434"],["/tags/js/index.html","165ea86eb894cf0ae46a9db512d717b9"],["/tags/latex/index.html","6027a685c91ba97a925c9212c2146283"],["/tags/leetcode/index.html","cfef98d5ffcc792bd87769f127194689"],["/tags/lex/index.html","b0217fd9d84cfdea3fd382135a118995"],["/tags/logging/index.html","004142d684f575f64270031979c6d53d"],["/tags/material/index.html","a9986acc1db82cece7ac3d34f30d85e6"],["/tags/music-player/index.html","5dfadefd7110c3d91a5ffe015ec2ef5d"],["/tags/node/index.html","bcfa78f754241ce6a4b84fff8106cdb8"],["/tags/nodejs/index.html","719eb6aa07b1ba48f23578e5e2ba472d"],["/tags/noj/index.html","27f9d1b979c978df9dd601d7971e6f75"],["/tags/npm/index.html","d8d684aef8bf27d7883c6199c83b792d"],["/tags/opencv/index.html","29b3c5620d5e1c19783635253add024e"],["/tags/overleaf/index.html","2227a26dfb47cedb61e417ff4e53be13"],["/tags/pandas/index.html","11387baa522764a67a8459133bf2029b"],["/tags/paper/index.html","6f2bb071aa895c135cf38f5e2dbc33b8"],["/tags/premiere-pro/index.html","b69fe36bcd1de6e3eaed047880a0c457"],["/tags/proxy/index.html","dfb370258bb5d453f71656027c2c8192"],["/tags/pure-css/index.html","0dc7f90a4c7070fe06b0b9212f14627f"],["/tags/pygame/index.html","b6e1c8be323144445b3b24e93ae25b40"],["/tags/python/index.html","a3d8586d16cc0a05a4f8cffafc04552c"],["/tags/python/page/2/index.html","5a1c969dbeb3b0cf048810572a050483"],["/tags/pytorch/index.html","f80cdd73cb54cb844ba650f917997659"],["/tags/reading/index.html","43dbe2a3776f33b5456ad7190c88b0ba"],["/tags/request/index.html","b9edbaad92d4bb7a97491801f0f6d182"],["/tags/requests/index.html","9dbf565e66be57efa9511912a04de0ae"],["/tags/security/index.html","7f7ec01c74a962d5a2d8cc18097fdb74"],["/tags/shell/index.html","8b43b4feaa8db1bd1e9f2336e30c430f"],["/tags/sign-in/index.html","4b8ab705cddc06b6cffe59f816021d3a"],["/tags/socket/index.html","a8df36ec4f0c2316f34ec74f1ed05a23"],["/tags/spider/index.html","2d3e804375c525724175f690128cf413"],["/tags/splash/index.html","7383455ce195d285c6084b213ffe6369"],["/tags/stl/index.html","6a727655ebf3ca5ec54250436a062275"],["/tags/sumatra/index.html","16e2a695d39cd3eb17c41c15113c084b"],["/tags/superagent/index.html","52e4331c9e810394fb6b7f561e9c547e"],["/tags/tensorlow/index.html","83d16c673bbc53bbe0509e76be2fd3c1"],["/tags/tex/index.html","275a57f85dd554aa1751eef108eaddec"],["/tags/thesis/index.html","8716f7cf4521f60de199f728cd5b00ef"],["/tags/threading/index.html","a8fa4a1bbac2d659ba473bf84914e51c"],["/tags/tkinter/index.html","aac5414f54c0935d9d81ca1cb81aa58d"],["/tags/torrent/index.html","ee630c8bfe20dd545d1c41cc44572bc5"],["/tags/tutorial/index.html","05d8febe40df52f5eb19b52bea179c38"],["/tags/typora/index.html","edc39748aa5f5eb269bb6819c21734a7"],["/tags/uniapp/index.html","efe8e5b1080e698dec32f05efa2ad7e0"],["/tags/vite/index.html","db0aa0ee6288aede077929e84d467179"],["/tags/vscode/index.html","59a96228169bfe11b94ce671269648c2"],["/tags/vue-element-template/index.html","dc4d16443e0f5d0a5286eade13cdbb58"],["/tags/vue/index.html","9362736d5971c9c0305ebc2183463b13"],["/tags/vue2/index.html","81565a23a26e028d914316a96f1a0cda"],["/tags/vue3-x/index.html","86380ab933b3edb2d145063e742c20c0"],["/tags/wechat/index.html","7c6556ca1d08797d80ce7f45ff4ec8af"],["/tags/wm/index.html","5f1bf187ff603250c06cdd25362f29a0"],["/tags/wordpress/index.html","5935fb628959cd54db85009a96da3c8b"],["/tags/workflow/index.html","065af466d1c0f0735f832a1c60e1795c"],["/tags/xpath/index.html","a8c4844c41659d5636bf0225df957f3c"],["/tags/yacc/index.html","7491f13bd1a87721a9c59131834e132e"],["/tags/yarn/index.html","0960768863a65a7ab0180972c25879f6"],["/tags/zsh/index.html","027fede15885e3ffa3431a5a670a84cb"],["/tags/七牛云/index.html","9ad8ad655237c443284b9e333e4d3ce2"],["/tags/函数/index.html","51b64663c1e48d83dc91ff2fa7dd8c1c"],["/tags/剪辑/index.html","7ef7a6f28179965ca2958ea5d2381636"],["/tags/存储/index.html","3f3b080020590489f85b9e762addf7b8"],["/tags/实战/index.html","b6df527186dbb13945df28501545d128"],["/tags/工具使用/index.html","0ee12887b6fd1bd3dcbd108b9588274e"],["/tags/建站/index.html","15550c98b970840d410a2890d29a3c2f"],["/tags/微信小程序/index.html","aebc0bf435764a6ebec86ca11ff94817"],["/tags/指针/index.html","b579e507a9274b989543288791099a39"],["/tags/插件/index.html","837dc1d56c4ce1c8dde1ff42db0ec833"],["/tags/效率提升/index.html","f48cbccbe55a367c87c51e89f6efc3e3"],["/tags/日志/index.html","5ca89149ee05b94d84ca756f3605fa8c"],["/tags/汇编/index.html","ca4b82c826f690e55e7b14b981589b6a"],["/tags/浏览器/index.html","24e566f464453569dcb89998429c6b89"],["/tags/浏览器插件/index.html","9f724e3d64b7b67d97c8c5b48aad26ea"],["/tags/爬虫/index.html","e6c730e43c3b0da1d477f4636f9e66dd"],["/tags/算法/index.html","c8f7b13b2da2ec3febf3ead661234894"],["/tags/编译原理/index.html","8545bba3a58689adbec69961566dd721"],["/tags/获取地理位置/index.html","e484d41136ec575609654fe63eb6d31a"]];
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
