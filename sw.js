/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","e69b54af3ded4c28300a8eeb7885e5ad"],["/2021/04/20/稀疏矩阵/index.html","e46a2117cebd5aaf5d93d84c709dab1d"],["/2021/04/23/广义表简介/index.html","5ce25975029d739342f7ad7aef8034f5"],["/2021/04/29/关于指针和函数/index.html","e8cc89e7d5f340f7e096df39b9cf92d3"],["/2021/05/10/哈夫曼编-译码/index.html","ee8cb480cb2a79ba7d40820960dd828f"],["/2021/05/17/数据结构noj_2/index.html","18c14c431247485c2697ad5a1f757395"],["/2021/05/30/数据结构试验/index.html","4edaeccd3d7f698b2a6c26755808976d"],["/2021/06/12/数据结构noj-3/index.html","e3086cfc15dfdb18905ef78c4b6eebca"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","36bf24ea878aa083ab55d44a4b367ac5"],["/2021/07/08/课程资源分享/index.html","eee244630100ccb143a43e8d57799cfa"],["/2021/07/20/Scrapy-下载图片-文件/index.html","ef064a6e681db39f730983577330669b"],["/2021/07/21/Scrapy-动态网页爬取/index.html","302068d845c3b362bc3d148d6fa9aaa3"],["/2021/07/21/疫情打卡/index.html","c58ff08405d966af38c587f7a65bb83e"],["/2021/07/29/Scrapy代理设置/index.html","f98cea9bc12ab4da6b55f7ada9c60f11"],["/2021/07/29/数据库认识/index.html","0f5faab5fbeadc0ac6578860fce510c1"],["/2021/07/31/Python多线程学习/index.html","b2b3051cf0d579503bfccad25aae3f97"],["/2021/07/31/tkinter-requests练习/index.html","35eb664cbc70179d0ce5668b5f47f325"],["/2021/08/10/Git学习/index.html","75bda558a923518729231bc6b595a9f6"],["/2021/08/15/pygame实践-1/index.html","e61bbcae810e54856e8dba1c6fbe0a00"],["/2021/09/06/微信小程序开发/index.html","33199e73a24f07c0f6414d219030b469"],["/2021/09/21/命令集-1/index.html","ecf373efbdb5d813e525d3cfd7421deb"],["/2021/09/21/命令集-2/index.html","9ebaf15169130cf19a6542bceac492fa"],["/2021/09/21/命令集-3/index.html","46e2b8054ba53a766d517c546ece64be"],["/2021/09/21/命令集-4/index.html","a72e707af31421d210de5fc036d01861"],["/2021/10/03/socket学习/index.html","f2ee01a6f0b8b68411785eda0305f61a"],["/2021/10/10/dwm入门/index.html","0333d6048eb0f3ca76fbf55feddb53e3"],["/2021/10/10/安装ohmyzsh并配置/index.html","291ba1d709738f4c8c83ca960df1071b"],["/2021/10/20/css学习/index.html","a81ff9c1d1731127950710c1b94be765"],["/2021/10/20/wm入坑/index.html","721d79a14326818c55a6cd2623991a40"],["/2021/11/03/微信小程序学习/index.html","92e0020b3e341e0390966d98ffc61d7f"],["/2021/11/04/css揭秘/index.html","70826c8994da6945cf8fde2ba50f511e"],["/2021/11/05/css-练习/index.html","b9d786d800fe9b1ef16e64314db86b30"],["/2021/11/21/命令集-5/index.html","64061149631762d40fe9a72c395f78b9"],["/2021/11/21/命令集-6/index.html","df35e4add2077a357f86506c225e3595"],["/2021/11/21/命令集-7/index.html","4cc3d611b0b7bc7afdf43cc99b6f1b34"],["/2021/12/01/搭建wordpress/index.html","0fa07efa18211a30021c3b1781aec0dd"],["/2021/12/08/python操作百度网盘/index.html","05998fd8226b6e34db365fd65bb2c110"],["/2021/12/14/js爬虫/index.html","8a3c58752cb6fc20d45892cd110a1cd3"],["/2021/12/25/为网站申请ssl证书/index.html","2ed18a2fab2149f1a6d24e1fc3eedb3d"],["/2021/12/29/使用七牛云为网站提供服务/index.html","87d6b84c5c9f305117d35e762a82adaa"],["/2021/12/30/jQurey继续学习/index.html","47a7ac23672d189684c0df54ab046332"],["/2021/12/30/jquery学习/index.html","98e8a792942173694c9a3c7ba7493d14"],["/2021/12/31/vue学习/index.html","347e652eda42b676036c502894a0e114"],["/2022/01/02/疫情自动打卡/index.html","086b46525a4db59f700fd92120fb93a7"],["/2022/01/03/javaweb初体验/index.html","1ba4fb20c6cbcd1d3279e488d69b384b"],["/2022/01/04/codewars练习/index.html","03cff826459aa6ede1c6264fcedb4ef0"],["/2022/01/05/Spring学习/index.html","86a90d81f542590ce917ededa71a4f1f"],["/2022/01/05/vue实战/index.html","3793a8c9cec2e3cbc0533c7f0b06590a"],["/2022/01/08/gdb-gcc学习/index.html","d67e1c0a4af387dd924e779635e6cf15"],["/2022/01/11/python-opencv学习/index.html","ea0fdece1df885e19b7db9e382105f36"],["/2022/01/12/汇编实战/index.html","7f54e74dac1b4176f0c3ebaf26c52869"],["/2022/01/17/pandas学习/index.html","b195e96321ca762060dd09924070ae49"],["/2022/01/19/可视化图的工具/index.html","d6c743a160d2591b423dcfcdd31cdef3"],["/2022/01/19/机器学习入门/index.html","9c0858c9c5ee5aa2640d70ce22c66bbd"],["/2022/01/20/cousera-ML学习/index.html","8d096e002e45f888995f53b67a20b5fa"],["/2022/01/30/typora解绑后出现问题/index.html","6f2b4b5b0930c285f4a0f02b95c210b6"],["/2022/02/03/NLP学习/index.html","fafb7eafb5ac86c66372bd1877fd88e5"],["/2022/02/04/Web漏洞学习/index.html","a404bb03a4dc79cf140516d79f0ed255"],["/2022/02/04/pyqt学习/index.html","0943e6fa0844aa00b7daa2d9642ec62c"],["/2022/02/04/python爬虫/index.html","f52dad9922e294bc50e1fb4fb31d53bc"],["/2022/02/18/Electron学习/index.html","6237051e411d3468303fa8daaf20c9b4"],["/2022/02/22/疫情填报字段解析/index.html","a847181a80636bef6c3ec7357987a0c1"],["/2022/02/24/Bomb-lab实验/index.html","34fec8aa6261392a377c78a55c55396d"],["/2022/03/05/nginx学习/index.html","366a912af1c2f7f547228144e2e2fa4c"],["/2022/03/09/汇编原理课程学习/index.html","f71265e11c9cd78eeeb9f11af2fbd4d7"],["/2022/03/11/Keras学习/index.html","3195430c49e34096563a9de7ddcc8066"],["/2022/04/01/graphviz学习/index.html","f5dea0df2f0565239fcb85fc1da05c3c"],["/2022/04/07/django学习/index.html","75ad48d2ca16f05ce8a710b67cb0bd14"],["/2022/04/11/密码破解学习/index.html","0ddbe2ac88429bfd208f882971de4bfe"],["/2022/04/12/flex-bison学习/index.html","032cb4dc0829d68eb75158ff989653a3"],["/2022/04/15/pytorch学习/index.html","83f7c16addb4e0c6c9605579c234aac8"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","27f5761689f0a772a71bb7e165d08dd5"],["/2022/04/23/写一个音乐播放器/index.html","4a1bcc6f1ab94c600bf3d6b957d86b27"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","c0e2312b279595bc15be39d2e2e01a4f"],["/2022/04/30/GAN学习/index.html","6707d5ecf55744f3069a7faa86b7deb7"],["/2022/05/02/html精学/index.html","f87802880b1ab4645cc1d47e3f1c8d12"],["/2022/05/06/write-a-compiler-by-yourself/index.html","28c60467637359c1afeb65ae561a8d69"],["/2022/05/30/acwj-01/index.html","26ff78b17ad05c0bf6399b6d159fba25"],["/2022/06/14/animeGAN/index.html","1e1f414b6c7ccc1b524e1687a82b892a"],["/2022/07/09/c-与算法学习/index.html","dea15905f6fba94dfc4670e980863f14"],["/2022/09/19/flask学习/index.html","a6f5edc87734ff3f3aac94cc710d87e8"],["/about/index.html","1c6bcbda9ccd40b9ed7b146764e312e8"],["/archives/2021/04/index.html","ecbbb07f12d106cd6d168db97721d746"],["/archives/2021/05/index.html","71d4c8b20f54d3b69535f586fcd1b962"],["/archives/2021/06/index.html","ad14e11a45f9d9409f8d1d54fd1319bc"],["/archives/2021/07/index.html","7900d3f5b3f2106f92737805b25d19ff"],["/archives/2021/08/index.html","36ba6b79f2b34341fd02cccb7d8bb86e"],["/archives/2021/09/index.html","0eb88a4c88632b3a35b1162e77528259"],["/archives/2021/10/index.html","68df7cc203ad02058f82dc16bfafe008"],["/archives/2021/11/index.html","c4595887fc3532d7b77b2edc4688d050"],["/archives/2021/12/index.html","3cb92e1bf41a2b5489f069c9d098d7e8"],["/archives/2021/index.html","1f81596c83469be6321273fa0828c58a"],["/archives/2022/01/index.html","6e182722a0705d07658774b91210e08f"],["/archives/2022/02/index.html","f2f3db801e4052f9e6494aa4a0aec0ac"],["/archives/2022/03/index.html","e04422a02e87fd54621f224c1834ae78"],["/archives/2022/04/index.html","a6ed14eaa012fcf5514125ae9d9a4a3a"],["/archives/2022/05/index.html","574d86837bbe626a6f478496a9957520"],["/archives/2022/06/index.html","a1822a433ee523c07a50ff0a64c7030e"],["/archives/2022/07/index.html","1d885f318cda945d256a0906a6f4194b"],["/archives/2022/09/index.html","834af6c7de1ef4bd8c6eda8f17971e8e"],["/archives/2022/index.html","4c20abce488715849e7bf65309302ff5"],["/archives/index.html","7f2da23293d0daebaf8da99cff5f422e"],["/archives/page/2/index.html","53c5ae64f189ebbd58b985854cba7783"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","e0e90c6b83f9a9dc6a2cb3e89fc5ff10"],["/categories/ML/index.html","f3ff8f35b4b55bf384b787320f6df3e6"],["/categories/Nginx/index.html","5c84e05145d0c04fcda3ce5997263c73"],["/categories/Spring/index.html","ed22f50410cc62ef4466ce537f110070"],["/categories/course/index.html","cf976290fc7068d55df81933939850dd"],["/categories/django/index.html","1eb0db32a3efdf1f6dda578207d77917"],["/categories/fun/index.html","85f757b5cbc9da80d387fb3e96361e6b"],["/categories/gcc/gdb/index.html","0d9319736b22232356c70badb5ba7828"],["/categories/gcc/index.html","133464ff106856ce2a2156fc90031825"],["/categories/index.html","a3aef0a0d69c5df3912bbb0b90d852ba"],["/categories/java/index.html","ad1d9d743296342175bf75160014cf88"],["/categories/python/index.html","c5c7dcba36fb1d7e309bcf7963b91d21"],["/categories/study/index.html","9a5e33e5aea3ea3e17d1531bb524068a"],["/categories/vue/index.html","4edcf4492995f7dc2fc7000402739a66"],["/categories/误区/index.html","6b5e46311d19142388a3a2a641552b75"],["/commonweal/index.html","bd125af3da8c4ca9f19baa5e151b225c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f1f3803fb5c700bb1bec5ec804267d6a"],["/home/index.html","68a97b515edd8880edf4c41d1244f47a"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","7c3946d99fd70df83048a9810796ad94"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","c8d805f82a1b45c80d5b7644a11e4f69"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","d95351e716a4906643a6cdffe4161d0b"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4b610925a5aa383665798750998dfdf5"],["/page/11/index.html","23d60f36fd2b5e063747438f549b2e49"],["/page/12/index.html","081d382c692e988ff288b9e8fba339ce"],["/page/13/index.html","426d91caa5bb08bb231989466019e2ca"],["/page/14/index.html","2c3df3bd190222b12b401520ed984d80"],["/page/15/index.html","2744a9732a9ea2995acf51ca0dc8c4fa"],["/page/16/index.html","a5b92fa8c435ade01f97d7de59f7a835"],["/page/17/index.html","695c19d6692c69292d4a70f8979af951"],["/page/2/index.html","c0e614527d2aa0e335816802bfbe7315"],["/page/3/index.html","c2f1342994ec4f81a57f0408d8e60d88"],["/page/4/index.html","27b961ddc640da0ed1431790dc361905"],["/page/5/index.html","d54071edd236461ef786acdc3e5ebd7b"],["/page/6/index.html","92176f1c83a9fce4f969d6c3accb5b5a"],["/page/7/index.html","bccfcb4583d7ff6dc968d2da39b6fefc"],["/page/8/index.html","2508dda6bbb3061879cfaaea6d687d47"],["/page/9/index.html","3958aa590fefca9a47c4a28101e6aa6e"],["/schedule/index.html","9930a8f7ef4f03b14c05612bd7e802b2"],["/sitemap/index.html","76ba8d024ab8c22af56b4fba1787b3ec"],["/sw-register.js","1cd4c50f19c7be168e721a12aa62a434"],["/tags/AI/index.html","81c7a53b30bb5c2ed6ceffa3956bddc0"],["/tags/BaiduNetdisk/index.html","25f5eec685e0ca293fef0ca6070847d8"],["/tags/CSS3/index.html","a100849be564737f0477efd9c05b066e"],["/tags/Electron/index.html","82f1b0e8ff24fe9bb7648e5adc9613dd"],["/tags/ElementUI/index.html","3b10e844d9e38a2949a81380e061eb7b"],["/tags/GAN/index.html","1698c4986a333bc0219b33d404fd7554"],["/tags/GUI/index.html","f54363626b9c437226676d3fa4334810"],["/tags/Git/index.html","217adb3f277aee6b1c53f5924e356fba"],["/tags/JavaScript/index.html","e8d714aa022ad221fcc38c6a48e9a627"],["/tags/Keras/index.html","763678048adbe2133f31a4f303ad97e5"],["/tags/Linux/index.html","719a9c3083aeda0ef6ada9a07d7d0df2"],["/tags/ML/index.html","134b1fa606e6379169394e3129561ca4"],["/tags/NLP学习/index.html","46d81669d5712c968dc907319a4e859b"],["/tags/Nginx/index.html","355536a0b916163334715c638845e3bc"],["/tags/Qt/index.html","823044a940c2ec8251045bf1d6e8871d"],["/tags/SSL/index.html","ef5d0125b5a570d17ae9c39f444a94c9"],["/tags/Scrapy/index.html","a639549757794d43051513e252d0bc29"],["/tags/Web/index.html","9d90d8b1466c6b7d9d1645994a404b8b"],["/tags/bison/index.html","5e961bc17b77a8cbbd35406e67f00275"],["/tags/bomb-lab/index.html","59fa6e7778f566b6309b2dcbd5451424"],["/tags/c/index.html","d49243d462084e8a76164d696b79db11"],["/tags/cheerio/index.html","f42d7dd2c33a536d1a122fde9000a0bc"],["/tags/codewars/index.html","28c5781b5bc573159466d9e26167980e"],["/tags/compile/index.html","c48a8d6e13e732e6cb831f8e4de323ad"],["/tags/compiler/index.html","2f1115878e56eca0f044eab7a66047ef"],["/tags/course/index.html","e0ae6d54f5ea66ac7b66c9a766a192f6"],["/tags/crypto/index.html","3fda3ff081d6486b5a4893868be5e879"],["/tags/csapp/index.html","e879f556a0191f4dff93403e9deb287c"],["/tags/css/index.html","b48052e198e824c130c19b5878b24988"],["/tags/data-structure/index.html","0513e0b5371f7db4db1998cdfecbe2a5"],["/tags/database/index.html","155c58aa6d5b35644a4c8f4bdf38dc07"],["/tags/deep-learning/index.html","4902fe993330f67e67f6eced0b4dd8b5"],["/tags/django/index.html","fd151a6d3d86338aac7b54db02b2b075"],["/tags/dwm/index.html","acf68399c42afd39712284113ca2c58a"],["/tags/exercise/index.html","587e8c1b0cdef9826632b2d1aca3e375"],["/tags/flask/index.html","b2c95908bd78bb864b4f3f6175d1fbd3"],["/tags/flex/index.html","482bde90c4c7392d26f6313b3de71763"],["/tags/front/index.html","b344929fdb9d245f86600edd440d823e"],["/tags/gcc/index.html","17c027d9b5ebebf5662f54ef386ea5d8"],["/tags/gdb/index.html","dcfb07ec63d05e2e68002f4741e168ed"],["/tags/graphviz/index.html","648832ae5f516d2f6540abb259ceee98"],["/tags/html/index.html","7bc556f917ed7f337ae2f4b407f96363"],["/tags/i3wm/index.html","f64f59cebeaade6f5da6620882281b1c"],["/tags/index.html","c21bcfbb6e94dc63408cd680165ca266"],["/tags/issue/index.html","40a9e8b83e129d75e5706d537f75c3ae"],["/tags/jQuery/index.html","361625f3a110768d26271d23cbfdb4bf"],["/tags/java/index.html","b15c07708b7264240f4f749af26cc208"],["/tags/js/index.html","ccc044804e63c7a6b69183d94967aae0"],["/tags/lex/index.html","28f6e4d55bb3a16713a0411622ab081c"],["/tags/material/index.html","cf2418c3d3bdfcf115a2f4307028449f"],["/tags/music-player/index.html","f3d99421bd4ffc814c4f58e0832f268d"],["/tags/nodejs/index.html","74e873e2c8749c78c9835a15f4fb6099"],["/tags/noj/index.html","6cefc2e4be9aa3163947a8bf0ebf65b5"],["/tags/opencv/index.html","59ad2740610f51bc620e49991bf95d39"],["/tags/pandas/index.html","d1bf63d1b77517b0ac8611a6a7214e36"],["/tags/proxy/index.html","2d239430a96c20ba4eea07694745b9d0"],["/tags/pygame/index.html","7702263726be852d7aa167f74320eddd"],["/tags/python/index.html","134d382f55a72a5a87981e421411dc4d"],["/tags/pytorch/index.html","2dbe3b980de7e36ef5564ed932dfd032"],["/tags/reading/index.html","d065adef3f0c120407213b0a05d46f4b"],["/tags/requests/index.html","1cbb2b89a5badb311f074bc42710bd7f"],["/tags/security/index.html","458db760a301b15cbaa621a568ea9d2d"],["/tags/shell/index.html","21e825c7f0ba77af2c648330948973a1"],["/tags/sign-in/index.html","b94350faedb3de63d4ce168652f53c21"],["/tags/socket/index.html","183843311cc54895ad509509faa56492"],["/tags/spider/index.html","036bb2c5f087bb36c8b6ba80c2f71593"],["/tags/splash/index.html","c7f8cc18b770a296f49ab09050d40032"],["/tags/superagent/index.html","cc993283b098b6dbce6692d8602e5d1c"],["/tags/tensorlow/index.html","c181f523e8a9d98c409df6fe5060d54d"],["/tags/threading/index.html","559631d997e7d2033fd59b7a865aba42"],["/tags/tkinter/index.html","1e90810452ac341edbfb63332309aa13"],["/tags/tutorial/index.html","979dcc693a113cda87a2360e62cf83a2"],["/tags/typora/index.html","df04767870b21c0115ea74bf12bb571c"],["/tags/vue2/index.html","bc8f061c48d4042c4b6efb51ec20a686"],["/tags/vue3-x/index.html","e8e02560264c41ac9262a354e61460ac"],["/tags/wechat/index.html","6d5b58d93ab1630180e438f939561ece"],["/tags/wm/index.html","25b943ce1a5f5b45e8eaee4dfecf60c2"],["/tags/wordpress/index.html","ddb6228b826ba02a8f8319a2d00d8fad"],["/tags/yacc/index.html","faedaf3474fc6aadb4ebf4855c8a00f0"],["/tags/zsh/index.html","453bd3701c0f9785d23e58d20751349e"],["/tags/七牛云/index.html","32d91842638836f742931d3dc56225a5"],["/tags/函数/index.html","7d30fbd4e009347341fabf00202722eb"],["/tags/存储/index.html","2e512ab437a91dbf7aca01c9cfb6430b"],["/tags/实战/index.html","2e6924e6b43f9f3e34421c2dd717d256"],["/tags/建站/index.html","29e0a3dfee3ac3123cb56d7916aea42a"],["/tags/指针/index.html","026450e628ff846fe867b22b6ec1bdb9"],["/tags/汇编/index.html","fd95a8a40657ebf06dc68d62c837de8b"],["/tags/爬虫/index.html","55b74c014d72ea850f6c78088d043d4f"],["/tags/算法/index.html","afdf41dc38fa24a7297ebeba90cafef0"],["/tags/编译原理/index.html","a5200f3fe2fe7f7b17bf2392aa94bf22"]];
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
