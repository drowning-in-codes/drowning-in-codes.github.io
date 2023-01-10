/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","7170d92fe6ffe2f7874c5991dbd2cf81"],["/2021/04/20/稀疏矩阵/index.html","32800bdb3411610c03259318d1d77b50"],["/2021/04/23/广义表简介/index.html","73343bc98cc98f0ac94aeedce6531ea0"],["/2021/04/29/关于指针和函数/index.html","890a9e9f97c5485219cd376a7847e5e1"],["/2021/05/10/哈夫曼编-译码/index.html","888e787e627e5b1d40c4f9c7b7944172"],["/2021/05/17/数据结构noj_2/index.html","9d04a38f79fca71c954ef9428579ec36"],["/2021/05/30/数据结构试验/index.html","3972ae2fe471428e852886533045efa7"],["/2021/06/12/数据结构noj-3/index.html","1a8002f66558ff2ef92694fdb30d7e1d"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","0ec623c6135befacbacd6f8121d63149"],["/2021/07/08/课程资源分享/index.html","1d18f18a4c3af29ce8abc893b24e1579"],["/2021/07/20/Scrapy-下载图片-文件/index.html","8b48ef360c9b3d8cf115728cada9b0c2"],["/2021/07/21/Scrapy-动态网页爬取/index.html","a878fdce23731e48ac8e052253b5965f"],["/2021/07/21/疫情打卡/index.html","baf1727f7bcf4e1e735e8e6c712128fd"],["/2021/07/29/Scrapy代理设置/index.html","2dbfb6ea130fe725f6aadc00ec7b89c1"],["/2021/07/29/数据库认识/index.html","b67bdab56ac49e7939f8444cee43ac9f"],["/2021/07/31/Python多线程学习/index.html","2e8648151d70c8ef040909f1daf024f3"],["/2021/07/31/tkinter-requests练习/index.html","8c084fb12bf17b7e56e2abffff381ae0"],["/2021/08/10/Git学习/index.html","8b946b6aed6bbbe229f89ab60c046238"],["/2021/08/15/pygame实践-1/index.html","c68db3d318a209c4421d9e92484f9452"],["/2021/09/06/微信小程序开发/index.html","0a1810b04eb66c43ee6bd163dc1191ad"],["/2021/09/21/命令集-1/index.html","fe47462090e9052bd9549f908152248e"],["/2021/09/21/命令集-2/index.html","925b33be897582de04405ed16d7515ae"],["/2021/09/21/命令集-3/index.html","5e70e5b3e679cd4557a893ed6548bb98"],["/2021/09/21/命令集-4/index.html","05fc4688ad4c18a1f3ae696b3699539c"],["/2021/10/03/socket学习/index.html","5d7f4ce3fba2072c391370a8da6927fa"],["/2021/10/10/dwm入门/index.html","33850f2bbdbff742e08eb489e91cf2e8"],["/2021/10/10/安装ohmyzsh并配置/index.html","df90ca5d6a022343b3ce426ae40607a1"],["/2021/10/20/css学习/index.html","79ebfdd13ef0bbbc31f541288905d489"],["/2021/10/20/wm入坑/index.html","005af847aee910d1d5ec3bfdd518ebb3"],["/2021/11/03/微信小程序学习/index.html","b699ee22bd7684e14ca1ab3750adfb83"],["/2021/11/04/css揭秘/index.html","747372b20756498fbbf6543b40cd6469"],["/2021/11/05/css-练习/index.html","ef82992c42e976c038af248169e3f457"],["/2021/11/21/命令集-5/index.html","bffbf2e3b1061e4840d7d9b58bb34fe8"],["/2021/11/21/命令集-6/index.html","936039e97915834cbc6a49cff216e332"],["/2021/11/21/命令集-7/index.html","07326d5628cdc5727c76348187106afe"],["/2021/12/01/搭建wordpress/index.html","f1d9b98e4516eaf41a958e84a72f0308"],["/2021/12/08/python操作百度网盘/index.html","53c541ea46f085ed859a5be84e3fab17"],["/2021/12/14/js爬虫/index.html","d5cb8cbc6d17d5385a3f2f7d56a31116"],["/2021/12/25/为网站申请ssl证书/index.html","f3d5726367456cb15f642e4d3124c7d1"],["/2021/12/29/使用七牛云为网站提供服务/index.html","76284bfd8a791be59e6b72607366e787"],["/2021/12/30/jQurey继续学习/index.html","fda2ed5311406b056afa4c782bd75d3a"],["/2021/12/30/jquery学习/index.html","a73fe69d204d2383a9c8a9b1803ae778"],["/2021/12/31/vue学习/index.html","beb0295c24813f1a82add4a52a0fe2f4"],["/2022/01/02/疫情自动打卡/index.html","e45a3f4f7872007af398dfa1ea3991e9"],["/2022/01/03/javaweb初体验/index.html","f830c0b7924b5c72c8f493df27d6e1ea"],["/2022/01/04/codewars练习/index.html","808e158322808606d80e11bc4d6bcab2"],["/2022/01/05/Spring学习/index.html","022a7e3b7a1d3697065cdb9be7959388"],["/2022/01/05/vue实战/index.html","8369f01589e632bbc4afa11cf09bd853"],["/2022/01/08/gdb-gcc学习/index.html","54074f5edf73374abd1759ee14a82afa"],["/2022/01/11/python-opencv学习/index.html","1a89a48ff45483f3d3f901fe2d67b2a9"],["/2022/01/12/汇编实战/index.html","9da4883dbe280cffa0ef45b5ad98328c"],["/2022/01/17/pandas学习/index.html","5928956b5154c1325d58a79ae0fb879d"],["/2022/01/19/可视化图的工具/index.html","9e7e07d754e457a93b2fa18877cbca9b"],["/2022/01/19/机器学习入门/index.html","4c49f734884fd401678caff1c484dae5"],["/2022/01/20/cousera-ML学习/index.html","5e2d4209a328127ab52548dbbc467711"],["/2022/01/30/typora解绑后出现问题/index.html","b4ac461eb0b6dcd15239841d2697b288"],["/2022/02/03/NLP学习/index.html","2aff8c49efe70ae5123eb960f63ebf55"],["/2022/02/04/Web漏洞学习/index.html","0a021329e152975c5bcb62351668c947"],["/2022/02/04/pyqt学习/index.html","1ce977627b3b466c7d982019cff6042d"],["/2022/02/04/python爬虫/index.html","ddff9b88b9e9d77e21243a9d66e41c3e"],["/2022/02/18/Electron学习/index.html","a66ddcb2367fe0c5ee9429d82b8dd703"],["/2022/02/22/疫情填报字段解析/index.html","16f761ae7e6a5526faedff466b414723"],["/2022/02/24/Bomb-lab实验/index.html","dab6a9023abb1053705689854ac1f848"],["/2022/03/05/nginx学习/index.html","8528e861e8226f8ed26ed12989c319f7"],["/2022/03/09/汇编原理课程学习/index.html","51b38e43eebb6165a338c45df62c99b0"],["/2022/03/11/Keras学习/index.html","3d9b63b0744947fd9f4957256b6bf8c7"],["/2022/04/01/graphviz学习/index.html","322451c50f3f7f4807637f27f9fef614"],["/2022/04/07/django学习/index.html","be2359a760aea2925505ecf08bc0a49b"],["/2022/04/11/密码破解学习/index.html","506f5da237d11a117031c717643c2288"],["/2022/04/12/flex-bison学习/index.html","29084d2da092e3e173716965484c9e44"],["/2022/04/15/pytorch学习/index.html","3bf0107d205028d210fa54a7c2807892"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","0a2a6693b836cb0b486046497c731036"],["/2022/04/23/写一个音乐播放器/index.html","2b6121edd76fdf1691bca18d52b9ed1f"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","08d95e45c827e14c13d16a577b5ec57a"],["/2022/04/30/GAN学习/index.html","8ae9c9c23ca0066b0b9a747a23c8673b"],["/2022/05/02/html精学/index.html","406366f9290cecc25ee68b9be744bb62"],["/2022/05/06/write-a-compiler-by-yourself/index.html","5b10b3ddc87ebee13081ceb88d6f277b"],["/2022/05/30/acwj-01/index.html","546e06d26262d5f6866dba97b04a29a0"],["/2022/06/14/animeGAN/index.html","796dbb692269524ed4facee1a0bf69fe"],["/2022/07/09/c-与算法学习/index.html","3cb6655aedce1e7cb6ac1075e298e0af"],["/2022/09/19/flask学习/index.html","48c251ac89ced6ec9cf532b78702234b"],["/2022/09/22/cs224w学习/index.html","12ad8ef87553476f0ccb03548336eff9"],["/2022/09/28/记录一次wp重装/index.html","f22bf3440e54fc4ad5007dbb6c85d7a8"],["/2022/10/01/Obsidian学习/index.html","24f082294aab2aba6ed54a730c8bc4ae"],["/2022/10/08/vue-element-template实战/index.html","2b94d159d33559b93fc9a6800bfd797a"],["/2022/10/25/vue网上商城项目/index.html","11a1af5eb7a9331816dde0d864743059"],["/2022/11/11/leetcode刷题记录/index.html","8c27ca3f22573a37282bf7876a1df7ae"],["/2022/11/11/使用overleaf优雅地写文章/index.html","54e0badd9bbc59927a11aea0736337ce"],["/2022/11/22/磁力链接与RSS订阅/index.html","76002c31ea67ada1bec4f1b770c2e2be"],["/2022/12/11/uniapp申请获取地理位置/index.html","ef3bb0de24e6a554db506a28379876ac"],["/2022/12/26/pr剪辑学习/index.html","826635d46c83bbc5381502a056985734"],["/2022/12/27/css中的flex和grid布局/index.html","6ae81e3b145ab32096b387ef43fa63e6"],["/2022/12/28/Flutter学习/index.html","da4d76527399a185abbc59016d280cf4"],["/2023/01/01/美化github首页/index.html","b0e0a7c5688609335cf173826de5af2c"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","23f29b41e9c8c5ee6983b12a79aa5726"],["/2023/01/04/构建微信快捷发布文章工具/index.html","c53a030c0ddf25ea707eb0cf43ec5635"],["/about/index.html","2ea4be6cf93ba5cb1044796fdc8b1030"],["/archives/2021/04/index.html","36f6d47bac9efa057220b3fa92708f8f"],["/archives/2021/05/index.html","1e2909aa0084cce0b95239745643f061"],["/archives/2021/06/index.html","b92cd54beef7c9a01ca2d91c0c1c72c3"],["/archives/2021/07/index.html","5189ba9a4f4068e095afa215ce7f80f3"],["/archives/2021/08/index.html","b15490d50f0f25778b15c90b2bcafd1e"],["/archives/2021/09/index.html","071d5dab4d7d2a79774450e823e45d97"],["/archives/2021/10/index.html","1dc94205cd555380ce4ad8b8077d435a"],["/archives/2021/11/index.html","fd4d6052e39afe9356d12c93469dd4d1"],["/archives/2021/12/index.html","851414e5911a5a484369dd1b857d20d7"],["/archives/2021/index.html","472b47184c74440fddd12b81831f0a0a"],["/archives/2022/01/index.html","946e37aac40a9dbb80df9724ac37f55e"],["/archives/2022/02/index.html","291229940b36bbbc07c2dc612cba0f8d"],["/archives/2022/03/index.html","21733c72c5c734528eed7616024ee2fc"],["/archives/2022/04/index.html","69317ff2574b29275fb5d58f58f9aa3f"],["/archives/2022/05/index.html","22a1720b1d9e07107e8144c4e42d44c2"],["/archives/2022/06/index.html","7d75fb0bc32d4852a9f6345ee0650753"],["/archives/2022/07/index.html","32c8e1af6be8bc901717508bcf062830"],["/archives/2022/09/index.html","e3b4bdd2da14e14516a819090ef2441f"],["/archives/2022/10/index.html","9535c3d8d929711b481a7fff10dd558b"],["/archives/2022/11/index.html","66878f28c52cfb29589516d359ceae81"],["/archives/2022/12/index.html","ad81cc598da0d717a4364cc560db60f0"],["/archives/2022/index.html","6d766634a7b5ec4d4a2598daa48085db"],["/archives/2023/01/index.html","94c8045b2ee207250d8e3270ccf7a203"],["/archives/2023/index.html","45b34cbbfd8ce13b9a260f4a413a9f55"],["/archives/index.html","2bb2b71d6144860ca78f931bb1f0fa24"],["/archives/page/2/index.html","249d7f8d5e43c413092aa0d82970e4b0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","3a01aadbd8b49ce52f4816b05f0232f9"],["/categories/ML/index.html","ccd467632d2d77d0998cdc0f58466cf1"],["/categories/Nginx/index.html","3d3bfa0a2882de57e2e1e29d5423bcc3"],["/categories/Spring/index.html","a795ca7f9052b79ba3d976d5c53026e7"],["/categories/course/index.html","4f82c112b4c7048c23b3e055fbd0ea8f"],["/categories/django/index.html","c7ddcee90947620d347289d691874ce7"],["/categories/fun/index.html","4db52e000edfb41737765a0bc102ee52"],["/categories/gcc/gdb/index.html","c520e8add63952b634616d0c3fafb3b2"],["/categories/gcc/index.html","50746b92830614ae7343164440ace511"],["/categories/index.html","5a5ba4a7633f39cc3a5dce793302df2c"],["/categories/java/index.html","43c3f3e00520d1f37818687c32d8fafa"],["/categories/python/index.html","e9a9cea1df16f12cf4550bc181f1dfc1"],["/categories/study/index.html","e02a8ca892b2d5a9b44b465728929c98"],["/categories/vue/index.html","dac65c05b7e6106c09b41dd33b8c5d36"],["/categories/误区/index.html","771ad63d4be9f63817f8ffd638aab9a6"],["/commonweal/index.html","14631de61fcbe3d937c1350ef724988e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a2347b40736e563c27697591e2d9d507"],["/home/index.html","a67eb176ddb2e7792fa80ba2d144e72b"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","a42353473c0e377ddaec47444d8df612"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","f246c014f0e15c45dc6199ca4464876f"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","44a6d2df6c5cac953d2d60b7828ea86e"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","e955caf04936e9eb7203dc540abe0554"],["/page/11/index.html","3d58f1690d9e39e354a72c6757b5a3a6"],["/page/12/index.html","d3d4238c02df716c316e079fd2082972"],["/page/13/index.html","4ece4a57e220285ed95bded398d5ba08"],["/page/14/index.html","fa5e01e50cb93aa6bddd8ac89326e4df"],["/page/15/index.html","062c5b93fdf771856a13924635c2cbb4"],["/page/16/index.html","3408860e37b62828b299ede6c3b20e90"],["/page/17/index.html","0d6b292d756a40c7944c9489b96e34c7"],["/page/18/index.html","4e7715c1cfb34ed58872ef52a1d62055"],["/page/19/index.html","f40999d0440ad56c9242b6638c6dc7c9"],["/page/2/index.html","0ad0c146f13dcfa9227e849fd0ccdd01"],["/page/20/index.html","9af0b659506487c55f418c02ce650409"],["/page/3/index.html","377ffb3d9c93a0525b2078896a52f81f"],["/page/4/index.html","931cae9333a955a00519abfe7942e687"],["/page/5/index.html","3cb27d510ab1abcec6c89821485dbe59"],["/page/6/index.html","348a6c389e9b4d9fb5e8c0f270fab904"],["/page/7/index.html","2936e25375e814e8c0be2f2c0fe23a4e"],["/page/8/index.html","d78d887fe8108cc53d4b2d9a319f946e"],["/page/9/index.html","a389819bc7c9f0bbcd1267e0e2a059cb"],["/resume/index.html","a0a193f22ea91436997e4fbe7bf5a9bb"],["/schedule/index.html","80c7ef09a9646cddacd68849027e1143"],["/sitemap/index.html","30e3a7c2876472d9f0f5798e8a3e89e1"],["/sw-register.js","84c199ad07e7c38842632a4f926c8b40"],["/tags/AI/index.html","bd62de31f5a454f811224a4d55e3f8a4"],["/tags/BT/index.html","279316d9262402a43b373393c6479468"],["/tags/BaiduNetdisk/index.html","d0814a04f3161b833d4c170b7bdb071d"],["/tags/Bootstrap5/index.html","d4ad06fb6ab86379438779e6ce5d16fb"],["/tags/CSS3/index.html","70063b6c44b271be60af3da1edc2ccb7"],["/tags/Electron/index.html","930630d2e247150b67e6b0516e2d495b"],["/tags/ElementUI/index.html","9bd86256cad0d83f78a8e3df067f4b90"],["/tags/Flutter/index.html","306acb438c15dfd7c10f0f698619c0dc"],["/tags/GAN/index.html","736beeeaf28e4cb7b8984969cb95a3bb"],["/tags/GUI/index.html","f1178406b4cbbb69e6538da8e3bd476d"],["/tags/Git/index.html","8de7a6c4cb99cb75f3a21e79656aa878"],["/tags/JavaScript/index.html","d65984c0e600028ef26f37aecb47c8dc"],["/tags/Keras/index.html","e29236027516db24afe298650efa5ae2"],["/tags/Linux/index.html","8409478390f51747350f2de511b250d2"],["/tags/ML/index.html","e5ef8e69caf9e83856eb192cf0121bb1"],["/tags/NLP学习/index.html","7408e609b44c5a963c83517c7000f743"],["/tags/Nginx/index.html","7a65b6c4184a5391ea319cd141aca52f"],["/tags/Obsidian/index.html","80970d1be6072cf75ef2feac79fb6573"],["/tags/Qt/index.html","16cf5b4ed58413c09e6017b3ef52626e"],["/tags/RSS/index.html","342180f5b344500aa93fdee5d64ddb01"],["/tags/SSL/index.html","a97df50adcbf320c5b6489c8f762da24"],["/tags/Scrapy/index.html","59837d69a62b1b61def44858c437bd08"],["/tags/Web/index.html","2c4635d349f3451d24ac3c52d235ca48"],["/tags/algorithm/index.html","4e728f057e55833470739c8daab262a2"],["/tags/bison/index.html","19b680a2406c37204a1687d03443fa8a"],["/tags/bomb-lab/index.html","35362be4a66ec79c4b911ac019034abb"],["/tags/c/index.html","ee5b9246c6913e2f647619c1ca7a0250"],["/tags/cheerio/index.html","9071288ec4e43b702eaeadde3ca1b901"],["/tags/codewars/index.html","eab64d3c8d0ace56f7bcb52345c17e1f"],["/tags/compile/index.html","b7df389f0eb0b4a6922c59087dff56b9"],["/tags/compiler/index.html","6a40cfd88de336df344b4e68889fdd0c"],["/tags/course/index.html","45ca7b9f40b0b93645644b2d50244f44"],["/tags/crypto/index.html","f219600d514e6ffafc1d0c844d83a241"],["/tags/csapp/index.html","01725b2c74673788c82c620f33c7bffb"],["/tags/css/index.html","83e8aabbc0601e8edd4d56e3add84af2"],["/tags/data-structure/index.html","4474b8d699b932228184ba4bb2680824"],["/tags/database/index.html","f04fafbb5635545ed27b09cb1c94a28c"],["/tags/deep-learning/index.html","4ebe95ef2648a8105f103b2d6f2685e0"],["/tags/django/index.html","062a1874ca5faec329b916b234f5f742"],["/tags/dwm/index.html","7a3da11fcd8dbb3f8a1e3a6e407a737e"],["/tags/exercise/index.html","abb8681d8195a527ab59bc16493050c3"],["/tags/flask/index.html","ce50429d8684683226bbfebe48c0c9f5"],["/tags/flex/index.html","9dac4a47fe813ae356156cb2362501a6"],["/tags/front/index.html","181b51d67db4af2d4404ff613a4542c7"],["/tags/gcc/index.html","9b844d4c78ab9c91bdb292cbf2732803"],["/tags/gdb/index.html","f10226725852044c7d8a0485e414f8ce"],["/tags/github-profile/index.html","a60f6b4c51fde49e1b0f12036a30ae55"],["/tags/github/index.html","0b6f1ff5e77a69ff49913260fbbfa216"],["/tags/graphviz/index.html","f80283e948f1d0f14731b5f98583ae8b"],["/tags/grid/index.html","579d0cf861d9cd7017a29a8803cc3f01"],["/tags/html/index.html","14faf46485529a7168933d3d09adb490"],["/tags/i3wm/index.html","3e7ade8eeadf141977cb8d35793542c0"],["/tags/index.html","448933d669bfbe1d8b6bd7ba18e9b7e2"],["/tags/issue/index.html","aed7eace2f496c96cde26a8cad4abef5"],["/tags/jQuery/index.html","f92646228b3414fed9e5b534aa25991f"],["/tags/java/index.html","37572fd478f0497b96c93b0fc9123df7"],["/tags/js/index.html","43ccc1f8c867b0f87f01c244839ec3fe"],["/tags/latex/index.html","a951d38a4ea5ee01cd7f15a6602bf872"],["/tags/leetcode/index.html","1d29492e5eeccf2150af9862970eaa33"],["/tags/lex/index.html","68ea20105f90dba73b0bc7fe038b633a"],["/tags/material/index.html","6f54ad76676af892b54a2ed3607917eb"],["/tags/music-player/index.html","2341c3262e548ce2ee84589c0cb55b1a"],["/tags/nodejs/index.html","ec06f80e265a13794e5fb7ee28bad16e"],["/tags/noj/index.html","5d0326e042c104435485b136f3b79f1c"],["/tags/opencv/index.html","a52a0fd0ae35d6e7da6695aba9a68a2c"],["/tags/overleaf/index.html","752be6e54cddfce3406fcea8b0a788af"],["/tags/pandas/index.html","613d53acb7bf383dd31a48babdc84fee"],["/tags/premiere-pro/index.html","0d67b11c13eb98235cfa4c1e1b2a4f95"],["/tags/proxy/index.html","399726e304b0b45483a5d4a2a0fc2f51"],["/tags/pygame/index.html","17a6117956f5b296d5213f59375f69b3"],["/tags/python/index.html","1f16d2311723747b2ddf6076c715fb12"],["/tags/pytorch/index.html","bad3bafb4f877740c98fa84d134ee2e3"],["/tags/reading/index.html","1bb9fe7e6e36561dc3de2b7524a587af"],["/tags/request/index.html","2f3504787df53e53dc677e94ad900cf4"],["/tags/requests/index.html","9590c7658cd28000a64671bddb51de5e"],["/tags/security/index.html","234775b5be0735e0f9eda87052924fd0"],["/tags/shell/index.html","584a516c508fa101bc290084bb4ddd25"],["/tags/sign-in/index.html","3791a162a19d70b61b31301b67931278"],["/tags/socket/index.html","c937f94fd9f01f129e9a19083d6ef9a5"],["/tags/spider/index.html","528bdff218e0818244409386684dae5d"],["/tags/splash/index.html","47ffcce1cfcd3a5eb58e5be49ca3f87e"],["/tags/superagent/index.html","bee573d8584d79d135cf7e915a2d990e"],["/tags/tensorlow/index.html","11fdb31a7bcc6a9fe68ffdc4f181f57a"],["/tags/tex/index.html","a9738d2f3b9a5dfd459294a58f5dd613"],["/tags/threading/index.html","8f0485e24b34ed682e3310b5441b5e4e"],["/tags/tkinter/index.html","ed426457dd864b6c04b3b551b003a574"],["/tags/torrent/index.html","414420881496c31a170146fb119674b2"],["/tags/tutorial/index.html","f406977dd10be2b8233caf63004392ed"],["/tags/typora/index.html","5816733f44eefe4d4435b742ac013ab2"],["/tags/uniapp/index.html","0ac948729cc69025b9ac4d4b60353a22"],["/tags/vite/index.html","c2df7f6113c2ea6daeaf89cd61736e05"],["/tags/vue-element-template/index.html","898034a9b1752e68a57dc88c8ab32381"],["/tags/vue/index.html","714d660032d199fd3efaba5e44533165"],["/tags/vue2/index.html","94a6e9284b3336ce90ee769d9607811f"],["/tags/vue3-x/index.html","6bd249357f1c4bf576deabf45d63f70d"],["/tags/wechat/index.html","3e3aa4e25f6867151fe057ddb9b4a2e5"],["/tags/wm/index.html","1ee0c1ec182073f86e5d68a4a6c31bb8"],["/tags/wordpress/index.html","b6e2c4b8403e193bf4682eb272c5b44d"],["/tags/workflow/index.html","b390243cc4ac6813133abc7afde93647"],["/tags/xpath/index.html","073484d3fb8b3c9e97a9ddcdb424cb41"],["/tags/yacc/index.html","d59650ebaa0bc0201b503ff72e49948a"],["/tags/zsh/index.html","8c4728ab6c1620dfe9a7f3062b9afd4c"],["/tags/七牛云/index.html","73e6820c67c1c5279624e1ffd38c169e"],["/tags/函数/index.html","f1555505a32748998f90886cd95dadb7"],["/tags/剪辑/index.html","88855a689f0a42e9a8f7ffceb6d0def2"],["/tags/存储/index.html","8190ec5e884f94428493d7f05d0181ce"],["/tags/实战/index.html","c96a189b57f262d4245ee2b37876be7e"],["/tags/建站/index.html","142ebebba2e802d14d1c0cf94c83ca96"],["/tags/微信小程序/index.html","3376e6af31e20fc3f7644f4b2dca0455"],["/tags/指针/index.html","fd5c43a96a4aa0cd509cde87b6f47d9a"],["/tags/汇编/index.html","a575187ceb3a5e92205133df280414fc"],["/tags/爬虫/index.html","e98b95c2078bdb926cc0f14cc1cb480d"],["/tags/算法/index.html","b1c3d9e4a448e1fa9ae1075693f221f7"],["/tags/编译原理/index.html","55133f7f12357711980465d0e4615afd"],["/tags/获取地理位置/index.html","2ef608309d3f95488dc467dcd6ddde9f"]];
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
