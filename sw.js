/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","6a9b352050f9aab49c0005838badc1fe"],["/2021/04/20/稀疏矩阵/index.html","2a5593f2ecea6082d8be087cafac8414"],["/2021/04/23/广义表简介/index.html","9237e25860999a0c573c81f6d14b7129"],["/2021/04/29/关于指针和函数/index.html","6d1b26e7d0ac94d52e5d4611ce7657b3"],["/2021/05/10/哈夫曼编-译码/index.html","204c23b5657166c827121c748526e151"],["/2021/05/17/数据结构noj_2/index.html","788421cc665fea62bbc151e8401ef26e"],["/2021/05/30/数据结构试验/index.html","b13ef476ebc9f726eb849c7f8dba13c2"],["/2021/06/12/数据结构noj-3/index.html","e997587d87246b1e3b581f7f1f997bd0"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","0f868fedd28497f678bdce92a0522d67"],["/2021/07/08/课程资源分享/index.html","dd730e5fea537c2ba8d5fc5f43c46e06"],["/2021/07/20/Scrapy-下载图片-文件/index.html","3e35769a5e4be772c300d28aa5d55bbd"],["/2021/07/21/Scrapy-动态网页爬取/index.html","e7ccc42196d446f2a259bae6d587e6a0"],["/2021/07/21/疫情打卡/index.html","3d31087928ef3760687de7755c166299"],["/2021/07/29/Scrapy代理设置/index.html","5794330efa4d1ada4be98c7a5b8996c1"],["/2021/07/29/数据库认识/index.html","c7d3e2a6c70757bb7feeabf5c0e8d956"],["/2021/07/31/Python多线程学习/index.html","0d953e510fe1de8bc12394bb9d1b72a6"],["/2021/07/31/tkinter-requests练习/index.html","483121cdca2bdc76e71fd517f4007edd"],["/2021/08/10/Git学习/index.html","0d94525e002166c4a01cd64f2e550388"],["/2021/08/15/pygame实践-1/index.html","2a80659d2331f087be9b6b42626f9d57"],["/2021/09/06/微信小程序开发/index.html","d22d79b907910cb9885bac40744a439d"],["/2021/09/21/命令集-1/index.html","88997d84c4e148de03e110401494ec6b"],["/2021/09/21/命令集-2/index.html","e472b23cc40fbc3e23d5e3d2e1d0c58f"],["/2021/09/21/命令集-3/index.html","b29628adf004ef0b58018e2850121c41"],["/2021/09/21/命令集-4/index.html","96e3c09c0818d59caf1a86d1854b4715"],["/2021/10/03/socket学习/index.html","4bc0a4e4e56e2a83353c4d25f00133ca"],["/2021/10/10/dwm入门/index.html","77268088ecfe87548de12c879cc5978d"],["/2021/10/10/安装ohmyzsh并配置/index.html","22e34d5442009b7e6b3e89dbf985cb0f"],["/2021/10/20/css学习/index.html","03df2f85637b6fc4ce39b8052af5b274"],["/2021/10/20/wm入坑/index.html","eb3a6f0a6ca795a05b7c1446371a639f"],["/2021/11/03/微信小程序学习/index.html","0935ec6cf01cee6fe68f3ec973e23477"],["/2021/11/04/css揭秘/index.html","fd9dba379ed08cc9ebec069092a797ac"],["/2021/11/05/css-练习/index.html","a32a7254985968d8ce6568aadf7dedb6"],["/2021/11/21/命令集-5/index.html","fdb4e5064655cf7176c152f5758f3b32"],["/2021/11/21/命令集-6/index.html","98730ce071cab1a321b612641e0d991d"],["/2021/11/21/命令集-7/index.html","c25c01a4f451c030ae644a2a95dbdb2f"],["/2021/12/01/搭建wordpress/index.html","c3c879b56d8b8e95a640fe33807acfc3"],["/2021/12/08/python操作百度网盘/index.html","4d5575da51f842571b20703024b785a8"],["/2021/12/14/js爬虫/index.html","9adc5c4afca014ee01c9cdc5eb0996b7"],["/2021/12/25/为网站申请ssl证书/index.html","31d53481aa62144995349cc5d5536d61"],["/2021/12/29/使用七牛云为网站提供服务/index.html","6a06bc6e71e2b1437c582fc368ee4ca0"],["/2021/12/30/jQurey继续学习/index.html","a990cf7438d03b5136b01c3bdf4fa5a9"],["/2021/12/30/jquery学习/index.html","6c06778206879e00231373b77a2c1ae4"],["/2021/12/31/vue学习/index.html","951a45bd223ebb74a130246161c6af3e"],["/2022/01/02/疫情自动打卡/index.html","674fb60dac79bba1107438a1340eca60"],["/2022/01/03/javaweb初体验/index.html","82fc5e704b16b7548601b9e6cc19076e"],["/2022/01/04/codewars练习/index.html","98e2e75395575a71508ab61aaf59f726"],["/2022/01/05/Spring学习/index.html","9bbb64fffdbf62db9a2e3b2c954c3703"],["/2022/01/05/vue实战/index.html","dfa420fa4c6b64bae88542d50cfe16b3"],["/2022/01/08/gdb-gcc学习/index.html","cfc07415be18a87901aae352ba15a831"],["/2022/01/11/python-opencv学习/index.html","b8618a751cf5f55f14cf96bf5941f075"],["/2022/01/12/汇编实战/index.html","a69cc1fccb52f810bfec4e2c0a484237"],["/2022/01/17/pandas学习/index.html","177a7d986ff34735df1a7ceb94f6163a"],["/2022/01/19/可视化图的工具/index.html","242305cc9477f4f4984aef8004799884"],["/2022/01/19/机器学习入门/index.html","17219b32e43bb8fe2582a13126e33044"],["/2022/01/20/cousera-ML学习/index.html","cbd39dbd724deb2381ae90ea2af8c4be"],["/2022/01/30/typora解绑后出现问题/index.html","efb912e11b7e557470e6c61246c2d1c2"],["/2022/02/03/NLP学习/index.html","5dbfb4f6854a3328d33c5cb3090326a5"],["/2022/02/04/Web漏洞学习/index.html","b0ca98d107069aac4e964d9e31ad13ed"],["/2022/02/04/pyqt学习/index.html","7ff4ec5ffa23a58bb378cabe4fa9df8a"],["/2022/02/04/python爬虫/index.html","0762b93da9d52bd4f480a8a10b0f764c"],["/2022/02/18/Electron学习/index.html","30c11e2b6938d2fa2047a4bc9203cd7d"],["/2022/02/22/疫情填报字段解析/index.html","1d1d57b0fc51b0dab0979d6670e2927e"],["/2022/02/24/Bomb-lab实验/index.html","a29d78aeb35b0d7a975f3412a1110bb2"],["/2022/03/05/nginx学习/index.html","d13a2237074e072242c4247b87acaca1"],["/2022/03/09/汇编原理课程学习/index.html","ede83e9aa9082d70ca5115ec2a6c2bef"],["/2022/03/11/Keras学习/index.html","683572e045bcc7b3085eb5264c9286e2"],["/2022/04/01/graphviz学习/index.html","b3b013bb188afd0f22d53049c8b0a773"],["/2022/04/07/django学习/index.html","cab4ab651c8734459a3e6c9bbd75837c"],["/2022/04/11/密码破解学习/index.html","eb723297d84ccb0b8cd3dfe49021ea16"],["/2022/04/12/flex-bison学习/index.html","d40c0e1c2c09fe67e1b1291cf131bcda"],["/2022/04/15/pytorch学习/index.html","93a37b63d0c28de793b7194e12be2df9"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","b5fe136d33b238421c151a40903c2672"],["/2022/04/23/写一个音乐播放器/index.html","aa0ce2ec8c2d381a6652c9a02300ed14"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","51187cdccda03bb22dbb0585f334736a"],["/2022/04/30/GAN学习/index.html","7d8bcd166f36bf031756222001bef474"],["/2022/05/02/html精学/index.html","cbc6fcaffdb2444a71469fcf4f042984"],["/2022/05/06/write-a-compiler-by-yourself/index.html","11ef490f569db9818101fa8da9a6691c"],["/about/index.html","97a043bf0180f1d8b24bf081b7222682"],["/archives/2021/04/index.html","55d94e0dc20af516d86e974a9d5a50a0"],["/archives/2021/05/index.html","206f16edba669e22208432a73df3a0e2"],["/archives/2021/06/index.html","dad66641de57adbb0c706c8406263060"],["/archives/2021/07/index.html","4c9e6a4d1f2ecf8a4eb4062a2708032e"],["/archives/2021/08/index.html","2580b72fa2707c7da30a574ce10c41e7"],["/archives/2021/09/index.html","072afecef133852409bff510810528dc"],["/archives/2021/10/index.html","236baa3dd7f34e1709579fcf52dcb8d7"],["/archives/2021/11/index.html","7a1f83fc39f21c241a1d1d632c98b34b"],["/archives/2021/12/index.html","0e9c0f3e020e2e4ca03a43f1d11b10ec"],["/archives/2021/index.html","018de12a84c93863484c4fa09385039c"],["/archives/2022/01/index.html","3691fd09eafff7f95a98e024ff6ce2af"],["/archives/2022/02/index.html","04168a6535963582c295a7ff1b88f6f2"],["/archives/2022/03/index.html","86f2e66f3d3643c4d8b2468ee546a612"],["/archives/2022/04/index.html","087d2715ba36ea852a3d584148d3760c"],["/archives/2022/05/index.html","acbbd170ab149e18e998b6fa63e95829"],["/archives/2022/index.html","33be5fa4d04ea4c134df2330c9860d66"],["/archives/index.html","10b139eefd28b5ba5c30448d075208cc"],["/archives/page/2/index.html","701df8ce09669aa613d8396c97425375"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","96bbaac22f913ed657acdcad37c50561"],["/categories/ML/index.html","8fe2bcbeffc70e024cb644a65cad238d"],["/categories/Nginx/index.html","16ba47d0197e4c5b8e63c1a443b14122"],["/categories/Spring/index.html","db17f0e9280bb6827171180533483572"],["/categories/course/index.html","65ff8e956afc28716bdfdcff53249e01"],["/categories/django/index.html","9ea5f84a49dabcbead7b1df1f905de18"],["/categories/fun/index.html","6f1691e6e3bb8beb43cdc436605c2b3c"],["/categories/gcc/gdb/index.html","5a4ca7b4e77e7c483cf9ccbe22ab9c2f"],["/categories/gcc/index.html","e4edb422d0cd62be04dff44f8e332586"],["/categories/index.html","6b20fab4a2ed6d5f5eef34ad014da961"],["/categories/java/index.html","8fa34897d09d3cb55d7cbac420d817d2"],["/categories/python/index.html","af936de5dfd3436c5abff436cd29a779"],["/categories/study/index.html","6495f9dff801a3c58672c200379a95c4"],["/categories/vue/index.html","b0937ff44768e4b19757b102ba22c3b0"],["/categories/误区/index.html","7bd0ae7ac8d4e6f3b8a9f063114830d1"],["/commonweal/index.html","fac0a91ab2cc5866f9d5588292c2dc9b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9e07953939f2ff73e6f4c7b45e1b5d5b"],["/home/index.html","c2d6c2779d952c48d41006851e7a80c4"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","5006334e0e3d4fb131d96fd8779bc6ea"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","d668add4491aeac767e2bc15a24e95f4"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","2b4b7e2c0ed3fef9def2073409a00652"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3c1782248ea42ec99aaab48eb154ebaf"],["/page/11/index.html","75b733184c1579f6ecf099f7e07d5950"],["/page/12/index.html","6ad99dd27a67c9e0c67ec8c5de37c109"],["/page/13/index.html","ea098f7514ed1528f7f64f08fa2cf25a"],["/page/14/index.html","adf2d0319300630941ac9f071c440d96"],["/page/15/index.html","6699dcfa9c0db693e46b0f44648844fc"],["/page/16/index.html","25ad5bb8ffaa776b3f8347cbcc157e3a"],["/page/2/index.html","bb4a704efe488ddf469db08cd92169c5"],["/page/3/index.html","32c979a1a9f806818c3357c39023b8ae"],["/page/4/index.html","237dcf5b3507146434a810b4750fd0ee"],["/page/5/index.html","76d3266a28eefe6b262abf91bc4b2618"],["/page/6/index.html","063175c185ecb00add7cfa233cbcf1a2"],["/page/7/index.html","b07f5b51c3e46d2e9a07f08c014877d2"],["/page/8/index.html","296e959c8949f88efc56bc1217b1bd1d"],["/page/9/index.html","0a2b8100057ae431648b1cd73cda2206"],["/schedule/index.html","e4920e9c52b0b777c70ebaf5e32b96f5"],["/sitemap/index.html","38125df6a72ef5f90fef8589ad102a3c"],["/sw-register.js","f814fe1a99bc81c7abd1b6d4a90dbc46"],["/tags/AI/index.html","45b041a7eae879bbee7674ef55e28aa3"],["/tags/BaiduNetdisk/index.html","700d29c199c985b8495545b4ba5787f6"],["/tags/CSS3/index.html","128754d83650f8453087608bc5b61eeb"],["/tags/Electron/index.html","500d525f5c18b7195b5825da21bbe7f6"],["/tags/ElementUI/index.html","e659cf4e635387be3e895311aa24a740"],["/tags/GAN/index.html","37efa3a7fa5c454076fb73926bbe22b6"],["/tags/GUI/index.html","be012bb20ac922a6c23bf42138cf9362"],["/tags/Git/index.html","5806ae3c8fdcb56102178cad021dee06"],["/tags/JavaScript/index.html","35fa60c4941746193f578dee96e471c3"],["/tags/Keras/index.html","30d15f71c39490c253ae85039db6ec24"],["/tags/Linux/index.html","4b330b5e82082f6e1c73968dc7688f94"],["/tags/ML/index.html","393c968ac11b1b879d6b7d691130dd63"],["/tags/NLP学习/index.html","595d8395ba9be23d2f2f5b73e5460bef"],["/tags/Nginx/index.html","dd53c02a981d30e7f07e964c7fa19c8f"],["/tags/Qt/index.html","b1bf0d803c78a2b0506ac3a5be2e0a86"],["/tags/SSL/index.html","d9ab368805b995a810c0de2e675d14d7"],["/tags/Scrapy/index.html","a8a5073f958163ff0c495387ca93abf4"],["/tags/Web/index.html","ca60de5c552c8506de4ff0e286b26990"],["/tags/bison/index.html","0f82b81adcf5ebc8b7cfee7f52b2dbfa"],["/tags/bomb-lab/index.html","14c08c0eff006ed59cd65282b7e4f78f"],["/tags/c/index.html","44fac25d32410be5d813b593b9959fb4"],["/tags/cheerio/index.html","35bb0e3cc861e222224d4ecf55030330"],["/tags/codewars/index.html","e95fb9ad33aa9899dd3f0b32f7711483"],["/tags/compile/index.html","b0266758cb6bb1d793f405c6fea58bd1"],["/tags/compiler/index.html","ecdddd8207f41b295397fc8970ec64ed"],["/tags/course/index.html","5b82f72fcb0a78dbdf19728ea6b1efaa"],["/tags/crypto/index.html","8b9e8d8c98102a7f77c59757e172b869"],["/tags/csapp/index.html","6df0d311053e1d21649b96e3e0d6ffaa"],["/tags/css/index.html","c42a3fa4db93f9b0e1489c0a3d80e643"],["/tags/data-structure/index.html","decfc8587cf6ac32e1e5775cb7f80d9c"],["/tags/database/index.html","afce07c5be4d007e27845451aa2c26f3"],["/tags/deep-learning/index.html","8f927cdd18fe8daacca42593d7caa1c5"],["/tags/django/index.html","d6d707d0d878c0aa36332f42c064d6e4"],["/tags/dwm/index.html","5a9929faac69eb7a00c438a3f376f0fd"],["/tags/exercise/index.html","a723ae37d70769c8310f45b7ee5a80e5"],["/tags/flex/index.html","92bce72df1e2c41139cbdfab85483f6b"],["/tags/front/index.html","c9ee8a5555bf98a99e426ac04634c046"],["/tags/gcc/index.html","8bcaaf622c1d36e3ca4fbe09144cd359"],["/tags/gdb/index.html","11dbf2424179fa938cdce3a89e46e499"],["/tags/graphviz/index.html","a34651a0ec9164b2979984504ae14d09"],["/tags/html/index.html","a39449c25121b281ad68567422446213"],["/tags/i3wm/index.html","43b70b1832e269fda678331e87034217"],["/tags/index.html","002e7e27172c287301192b557062d637"],["/tags/issue/index.html","bf3518c640447ecb166187a3bdab43f9"],["/tags/jQuery/index.html","7364950392809fdb196be5ed60c8a33d"],["/tags/java/index.html","bbfba7ce6658d354b83de909e4f635d3"],["/tags/js/index.html","adfee366b4a998c0130563b9ae633c6c"],["/tags/lex/index.html","70d609f075124507ada58f0dfe013a51"],["/tags/material/index.html","a3350ea89e03045e41c14162e6b512fb"],["/tags/music-player/index.html","b488a47ed26e6ada6e9a752517efc586"],["/tags/nodejs/index.html","2560d1fc54d6b631b072abd71e1326b9"],["/tags/noj/index.html","b118ab2b1c58b4d1492caeb1a5f00f4f"],["/tags/opencv/index.html","b1e7969b70b2ce9c42b775677cf14c3b"],["/tags/pandas/index.html","0bb18693289edc9e85352753dd09ec68"],["/tags/proxy/index.html","c1b7d392fc077ff5b6fadafb59d3572f"],["/tags/pygame/index.html","9ba81c79a532b0ce63f7c16078e8e7ee"],["/tags/python/index.html","7879091a56194a79e2dc5a57955a53a3"],["/tags/pytorch/index.html","8a53b5fc47a61b585008af42977eae41"],["/tags/reading/index.html","61d871f5fe63a49f971a3154a1d20c47"],["/tags/requests/index.html","b4d78e459dd5bb4c7bbd4c5f5447556b"],["/tags/security/index.html","45f7981e54727269249e3aa3733b4185"],["/tags/shell/index.html","ee9ed9b28e45acc385f9e0a792b96f2c"],["/tags/sign-in/index.html","1b574d6fdea1126c4acdbb755e677544"],["/tags/socket/index.html","91eaa5ca33a6fbf2f9cba8541289f728"],["/tags/spider/index.html","d32025d5a8d98c2b3bde642953eb9505"],["/tags/splash/index.html","786a8146a0f498accd7dea7c3cf7dd58"],["/tags/superagent/index.html","3a86676a2fea18608059e88684c43861"],["/tags/tensorlow/index.html","74cce60e9b71b57ad17fe441f1829d4d"],["/tags/threading/index.html","5a4d24cefb5889157ffe9c86f23af529"],["/tags/tkinter/index.html","80c33403afa8568cd4618f366b179bb0"],["/tags/tutorial/index.html","489d784ab025492f1542899d93ac40f1"],["/tags/typora/index.html","ef3d81d374b57945c95bbb06d4def5d5"],["/tags/vue2/index.html","dd5da52989f17316de2e366ef1a674ca"],["/tags/vue3-x/index.html","b2570074fa1939136e7e6619c9bb98b9"],["/tags/wechat/index.html","07a77f3ac8b009567bea8444b263b95e"],["/tags/wm/index.html","bcb2b8340546dff05e2012aa35563614"],["/tags/wordpress/index.html","01a11b015c399f2703e2f53d71d998c9"],["/tags/yacc/index.html","aa2b70f45a5c718a00fae6c6f3bbf974"],["/tags/zsh/index.html","db159aa5f716ab0177207b766290a2a6"],["/tags/七牛云/index.html","b56a4b30a99c1a968eb5ed1d67411f05"],["/tags/函数/index.html","61589adaa6361955a4c8216de4933f50"],["/tags/存储/index.html","10a24ad756985aec6400d63d041889f8"],["/tags/实战/index.html","52e4ff216f859103eb801e1f9033e336"],["/tags/建站/index.html","6272695e7ed4476ff0bb616c4728e8bd"],["/tags/指针/index.html","2983ea833ea70588c6f0842d2ffd7261"],["/tags/汇编/index.html","27d7d74617441314be223a9b61b58b3c"],["/tags/爬虫/index.html","a9371954775aa62982f75a7f5972dcc1"],["/tags/编译原理/index.html","2b5d359e6c481f5733f7a5b06100fbe1"]];
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









/* eslint-enable */
