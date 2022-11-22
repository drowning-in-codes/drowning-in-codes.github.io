/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","a2d86164d57f76921a2ea7526be5aae9"],["/2021/04/20/稀疏矩阵/index.html","73086d8c5dd1720a3b127cba636f8e56"],["/2021/04/23/广义表简介/index.html","5e71c366f8eb4686a83dfc03f38ea118"],["/2021/04/29/关于指针和函数/index.html","c9f499c318ff3a049edcd2f339fc850e"],["/2021/05/10/哈夫曼编-译码/index.html","d10d38c0684401897dda6ef15ef6f7db"],["/2021/05/17/数据结构noj_2/index.html","777bdb3af44f0dc7dab8e34a16f23cd9"],["/2021/05/30/数据结构试验/index.html","0260915c50628ae15ab681ee649a3ef6"],["/2021/06/12/数据结构noj-3/index.html","6eeafd3088291757e87f3a1f414a0509"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","a5a34252fed38f42869f1120009e173f"],["/2021/07/08/课程资源分享/index.html","92ceb41cce342339d9a1bb0fd4c05134"],["/2021/07/20/Scrapy-下载图片-文件/index.html","d770ccd8e4c7c4e4a5ca924bfcd7b305"],["/2021/07/21/Scrapy-动态网页爬取/index.html","43dec5af09f2515dad7a4d3791564eea"],["/2021/07/21/疫情打卡/index.html","4f9db4b459ebba7b19246b17616e6975"],["/2021/07/29/Scrapy代理设置/index.html","9ac958dca109c974546ac12e2f3eb3ae"],["/2021/07/29/数据库认识/index.html","fb2e0de2115cbfa92eebb251a43ffe40"],["/2021/07/31/Python多线程学习/index.html","6c2eb8857e25913524a5b804bad818da"],["/2021/07/31/tkinter-requests练习/index.html","74b8bc340615d4b4f30e376c23b1eed9"],["/2021/08/10/Git学习/index.html","b2649e358a821244342539facd7981d2"],["/2021/08/15/pygame实践-1/index.html","a054e3a311f00ffca632f3260873ccd3"],["/2021/09/06/微信小程序开发/index.html","f7196f474c58eaeb50f1eea46635b427"],["/2021/09/21/命令集-1/index.html","c669aab401e85df3caaf2f54cf30fa56"],["/2021/09/21/命令集-2/index.html","bb1c5775586457138c437b638d78acc3"],["/2021/09/21/命令集-3/index.html","aa50f4eb8fb9851452ca49a59eb9a600"],["/2021/09/21/命令集-4/index.html","e7ba0509faa850552bfcb0bbbfed7e03"],["/2021/10/03/socket学习/index.html","5a6a276c1de05bac12c93441b4ad194f"],["/2021/10/10/dwm入门/index.html","39431863e996da47249eca212a23f788"],["/2021/10/10/安装ohmyzsh并配置/index.html","459d88cf876760804d5ffed0f4fb3528"],["/2021/10/20/css学习/index.html","dc5cf5bf6d316d7957696eb6ad4836f9"],["/2021/10/20/wm入坑/index.html","62c9f36fc930bdabc5fc7712149dbaf5"],["/2021/11/03/微信小程序学习/index.html","2956e56c0f13e2a8272feb139a318788"],["/2021/11/04/css揭秘/index.html","40abfaa80710c4d599aba30855255bdd"],["/2021/11/05/css-练习/index.html","e2b21399dba4d0bf19b17a669cee689b"],["/2021/11/21/命令集-5/index.html","debeeb4070fd53a39f3f7979dd60461d"],["/2021/11/21/命令集-6/index.html","9734cdcdab6604a16343f94ae9100407"],["/2021/11/21/命令集-7/index.html","1a93dbdf04f5f3777b22d1806bb44e6d"],["/2021/12/01/搭建wordpress/index.html","c6aa40563bf43c460f9121d54ce0bfe6"],["/2021/12/08/python操作百度网盘/index.html","d9363f9799d79304cd20aef4fa7400b6"],["/2021/12/14/js爬虫/index.html","17a7308d59c94761930a8cc34a235934"],["/2021/12/25/为网站申请ssl证书/index.html","8150efdefc44c407c9bcc8fc98ebc9cb"],["/2021/12/29/使用七牛云为网站提供服务/index.html","b92f3aeb07a2478ef370e7061056b7c5"],["/2021/12/30/jQurey继续学习/index.html","94db95333eb499d8083b02919cd79b1d"],["/2021/12/30/jquery学习/index.html","10651706f405ddab8b50bbaf77cf532a"],["/2021/12/31/vue学习/index.html","5dab35c884147935cdebce9524b8d8de"],["/2022/01/02/疫情自动打卡/index.html","3f81f599bcfd27db1e89929ee1499fc8"],["/2022/01/03/javaweb初体验/index.html","e9a036be1f5d72570cdee396f751414b"],["/2022/01/04/codewars练习/index.html","9cfb677211beefbc2b4ca0e2308e7358"],["/2022/01/05/Spring学习/index.html","a386c054819c9afa34ce8b251d141022"],["/2022/01/05/vue实战/index.html","8ede59fbec9150375ee4fb5834ff59e9"],["/2022/01/08/gdb-gcc学习/index.html","015b9bcc0672e33e181c48923dc087f7"],["/2022/01/11/python-opencv学习/index.html","29bb9c44575ac24cced60fce1b562604"],["/2022/01/12/汇编实战/index.html","85bbca06228ccefb42eaf31d806940b3"],["/2022/01/17/pandas学习/index.html","f4e75bea8abe5e455830af7ca8600ce3"],["/2022/01/19/可视化图的工具/index.html","b087882aefa226a0d083c9443730f5d9"],["/2022/01/19/机器学习入门/index.html","92f7f3620bc7cad51a8b2857e2b5861d"],["/2022/01/20/cousera-ML学习/index.html","02f7a534d92f33bee2c3ffbe656c357a"],["/2022/01/30/typora解绑后出现问题/index.html","58e9765549041e3cc22db50b431168c1"],["/2022/02/03/NLP学习/index.html","2e0202d8df8343d735b0651329ba1b97"],["/2022/02/04/Web漏洞学习/index.html","733a93ccecf7fae083dd8f5b8c971828"],["/2022/02/04/pyqt学习/index.html","a35a551dd9333947a8b5bff3ebc53d3b"],["/2022/02/04/python爬虫/index.html","2006fbff39eec58a55d980203d9f3951"],["/2022/02/18/Electron学习/index.html","25a6f340d71ebb8688e7181d818aab50"],["/2022/02/22/疫情填报字段解析/index.html","d0475394b0a87074c7af7555761cffc0"],["/2022/02/24/Bomb-lab实验/index.html","3837271f498cdac411aadb92682c1fdf"],["/2022/03/05/nginx学习/index.html","baf2a46cdb368d241b68585e33eba693"],["/2022/03/09/汇编原理课程学习/index.html","c22365bd4f560c6c68dedbfed3a60628"],["/2022/03/11/Keras学习/index.html","25858e267e6852cae9cb3365be8aa478"],["/2022/04/01/graphviz学习/index.html","663bc345d8da0ae155fc52a5872a5bfb"],["/2022/04/07/django学习/index.html","8d9bce58a3888242e2e97f5d9ae5748c"],["/2022/04/11/密码破解学习/index.html","99672241165f9f363efd6aad3d5dadab"],["/2022/04/12/flex-bison学习/index.html","62ea1fab0c67434f9a3bbbb220b216a0"],["/2022/04/15/pytorch学习/index.html","7171def28b74253da51c0752b69bed2b"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","684c1c386efb1d10846e7efc3535d255"],["/2022/04/23/写一个音乐播放器/index.html","d131d7213603584f92047d50b85f2b5c"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","8899cc902de475ee051133ce56b4b518"],["/2022/04/30/GAN学习/index.html","971d45619486ed3fb969c7058437f11b"],["/2022/05/02/html精学/index.html","5517e74d2be042568d45922b76fd19f3"],["/2022/05/06/write-a-compiler-by-yourself/index.html","0907e824c1cae6584cac9a6f55d37c75"],["/2022/05/30/acwj-01/index.html","84a75ba7cbee3d408fcf4e8e711bc572"],["/2022/06/14/animeGAN/index.html","301e12eb8093d8c713b45bacc348582a"],["/2022/07/09/c-与算法学习/index.html","8b2b5191048563a8069f498f5755b7f8"],["/2022/09/19/flask学习/index.html","3b73e91b85cf54f947ff91af4c8bcf35"],["/2022/09/22/cs224w学习/index.html","506158c65185d21088267689b782e7ee"],["/2022/09/28/记录一次wp重装/index.html","2d8119cecd1ccc0a451be8abc9396406"],["/2022/10/01/Obsidian学习/index.html","2f190f90afb96aff00b15a8463d15225"],["/2022/10/08/vue-element-template实战/index.html","1a0964e32db6f0cbdd7280747134304a"],["/2022/10/25/vue网上商城项目/index.html","942a8abc89cd4c752dafe0abfe910a87"],["/2022/11/11/leetcode刷题记录/index.html","57d360b4fa47c8ce25feea4d9a181ba1"],["/2022/11/11/使用overleaf优雅地写文章/index.html","2d65413f6fd251140a83743d4a8e6bdb"],["/about/index.html","10be6c25f6796bf65daf40aa5c43dfa3"],["/archives/2021/04/index.html","f27d39e156627abdc527078597fcacb9"],["/archives/2021/05/index.html","6c69c724cf1a7379678539e1d31aa306"],["/archives/2021/06/index.html","8ce60aefd2fcfa4376ff81b30633e044"],["/archives/2021/07/index.html","b86453ead02845c8c39e225e4888afa5"],["/archives/2021/08/index.html","153ff0d722e89d181036c55f53469818"],["/archives/2021/09/index.html","67fa45f305e6698bcda02f83975f8386"],["/archives/2021/10/index.html","66dd6c8a2fa2029bf07c615df324e0aa"],["/archives/2021/11/index.html","66fb6ca8cdc00465d9a62500c5aee880"],["/archives/2021/12/index.html","e03181993a04b89591ca412eecc476ee"],["/archives/2021/index.html","dafa52f3a5a0a8b66b0e3515382177f5"],["/archives/2022/01/index.html","ea97d35dc1f78bdffa68cd9c1199fdf7"],["/archives/2022/02/index.html","20de3bf1d8a9166a6b29e9dbdaa76bd1"],["/archives/2022/03/index.html","7291c1638964b8b347e35878604e5272"],["/archives/2022/04/index.html","aae4949c389ac5ea4494996a2bbf8bba"],["/archives/2022/05/index.html","9d64921485465ae4cbbc01373838705a"],["/archives/2022/06/index.html","393f7bdb8043d799a3bba742a24af5dd"],["/archives/2022/07/index.html","f093a34e6915d3a080a0aa31845cadc6"],["/archives/2022/09/index.html","3184701f99f23d73b4c48089e6e5c86a"],["/archives/2022/10/index.html","cdf433be944fc9e2b11770d5e1ce5738"],["/archives/2022/11/index.html","4acf52b09aa8c87aa79d7bbfd7c2aa7a"],["/archives/2022/index.html","70e8c31305d657bbe9830a8cdd1ddcd5"],["/archives/index.html","218b93687b48cb2086fb3ba52b487096"],["/archives/page/2/index.html","326f046fc0415b1d09b0816a8f2d4ac4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","c374f7b03d9a3a6dc789f470700428ed"],["/categories/ML/index.html","99795d7c30273de74b038ffaa1001781"],["/categories/Nginx/index.html","354e21145e1f48ec057a3bba96cdbf67"],["/categories/Spring/index.html","01bac912bbca15b3021a15d6edac218b"],["/categories/course/index.html","99f262d52d345d9ce463114a1d9b1656"],["/categories/django/index.html","e6dd8e2f21cb044e9ff77dc4a0f0768e"],["/categories/fun/index.html","361a6a53127e7998063068fe7cbb363f"],["/categories/gcc/gdb/index.html","cad32d1a409111c9528f02c09f474580"],["/categories/gcc/index.html","06d73f88bca3bf9ecc12627455573acb"],["/categories/index.html","c3fc808eee262b45e88caf753e660232"],["/categories/java/index.html","bc3a6b30d3fb3d9326ad27a96135cd09"],["/categories/python/index.html","d262fc3d194b7f3e9e77611dbca9ecb0"],["/categories/study/index.html","b0144f70359540908dfb4bd777cd3d0a"],["/categories/vue/index.html","62ab4b87029140cbbe5f5845ff353b84"],["/categories/误区/index.html","a8836928c483699e642897e3a4d6f44f"],["/commonweal/index.html","d55e427995a9f55c2026465be06b47e8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","e3ce76609533d580452facc1798dcc33"],["/home/index.html","428de2b20b0829868f6a9a53ce066345"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","ac1e38868be2f3423fe9237ae8ef949c"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","08ebf1920469714d85d66ebc6d00629a"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","e1b8a4217dc47865c68db3504fa81c31"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2d2dfa75bf126742ca8fe4f46e8706ea"],["/page/11/index.html","ad7f117dea498b172bf68bcf1c9291a3"],["/page/12/index.html","7e0c222b373e0e1349226b8b5d05ed0e"],["/page/13/index.html","313848e796fbf12efc6f7115f983b845"],["/page/14/index.html","4062651722fe7d9d0ebcfb262101d13a"],["/page/15/index.html","ed99fc0cf31f8c377f0c060e26ee6e91"],["/page/16/index.html","98f4b3bed10ccc5f988967cf9451f039"],["/page/17/index.html","6a78026c08fc37ca4d1d31240acd87f8"],["/page/18/index.html","86f2dbf116b2d252a04e348ee53e1828"],["/page/2/index.html","6684ec2f08b83d7afdac5f2ef9e8bfaa"],["/page/3/index.html","657485fc0cf55c44611370574a9434a0"],["/page/4/index.html","3b71bc9a4a95fafccf66bc559b9ab202"],["/page/5/index.html","309f2226d08c7b21097cb4439eae19e0"],["/page/6/index.html","294100dcc004dac17af6687c473fc6fe"],["/page/7/index.html","c92d0e6401961ad915ec913d8826cafc"],["/page/8/index.html","062035077ae4750ccc3f4ed5abc36788"],["/page/9/index.html","e98916eab37508bd6b051e581f8e4c5d"],["/schedule/index.html","db3690b97405cd5fbdf6f51f960951c7"],["/sitemap/index.html","6704cb0e08669d7f6007bdcd04dcf28c"],["/sw-register.js","4e061cde93e34d0b26ee696888d66680"],["/tags/AI/index.html","2b6f46f2aace6994ae2a969261b8e765"],["/tags/BaiduNetdisk/index.html","d50d124c52ea30fb7e10ba3e23ca2b55"],["/tags/CSS3/index.html","3876e5084afa6ca1083897892644dc15"],["/tags/Electron/index.html","5f7280bf50470e7ba98032ebc300ed6c"],["/tags/ElementUI/index.html","3118434f5b5d69d3665d4f3147cf2a88"],["/tags/GAN/index.html","5b561913b6da38a4459b9d813d5247d6"],["/tags/GUI/index.html","99f2c693ff25ffc58c222561c6a5453a"],["/tags/Git/index.html","d5def59e301926c5e1a8d36f3a6d4ca9"],["/tags/JavaScript/index.html","44e10b1e3175da7135862ba31feeeef8"],["/tags/Keras/index.html","1753929c71846a6cb8bd58032552c487"],["/tags/Linux/index.html","7e572d11e90d5eb0ca13718a369e01e5"],["/tags/ML/index.html","ea6fc7a990860888066348911017bb4f"],["/tags/NLP学习/index.html","be61adb132400d022af280889e7ac632"],["/tags/Nginx/index.html","cafeb533d09d558a62baf3f4f62b78b4"],["/tags/Obsidian/index.html","9827a7976d6a740a12611a3172eb597d"],["/tags/Qt/index.html","2eea9a2078df2971cfa504a5044c8caa"],["/tags/SSL/index.html","3c237d5036d61c5914ddea7cdc683444"],["/tags/Scrapy/index.html","cfd3f020ea2f70b04a91f33c945faad6"],["/tags/Web/index.html","821a6bd077c32a115f57c6ddc7b51bfe"],["/tags/algorithm/index.html","ac4eefbdba530961b6259fca25349bb9"],["/tags/bison/index.html","a88b9b730a84ae02ebfa567522c5497b"],["/tags/bomb-lab/index.html","9be30b7d392a7da9eebc1dc6cf843630"],["/tags/c/index.html","15fbc24813733128281e726aa1ae0e57"],["/tags/cheerio/index.html","7f333d7dabb4b97e446f44e9337268f8"],["/tags/codewars/index.html","4a86fac2aea4998a0d2e9c73fb12a7cc"],["/tags/compile/index.html","71c917022b101dc1da7bfad0f2beab3d"],["/tags/compiler/index.html","58c8cd6cf9182b1ccc8cc095b4d1d7ae"],["/tags/course/index.html","f7c0d1cd25922e159329d1d1b681c764"],["/tags/crypto/index.html","84f40f20460b36eefaf234ac8807ca84"],["/tags/csapp/index.html","f05e87cc1c1cdd4d2a5c21be7191bd72"],["/tags/css/index.html","2eaf93f11a18fbad381406482ab4d0e4"],["/tags/data-structure/index.html","fececf150b6365ef0afbc069c9bbd6ee"],["/tags/database/index.html","9c179a355a8bc901addf07a63b60e559"],["/tags/deep-learning/index.html","7df6c13166c456f1b47609e45b2e09d0"],["/tags/django/index.html","a9897855e1d3d0bbcc500992102b7ec0"],["/tags/dwm/index.html","26dcc7c043febeadbb9c5238e1390fd1"],["/tags/exercise/index.html","73867240c6959bf600b53763d11f172d"],["/tags/flask/index.html","63ced7fbe280586693da0d8df9b40eb7"],["/tags/flex/index.html","2a60ce1a23e1a88c2836abe2ecbb6cad"],["/tags/front/index.html","3289ca700ced5730287dfd3f25108ee6"],["/tags/gcc/index.html","f6deefcee219fb78410528ab347ae6d1"],["/tags/gdb/index.html","175c1c854443b4a3c751b2626616d6b5"],["/tags/graphviz/index.html","b1fe202fdacb61e3fe1e827ce5a7f7d8"],["/tags/html/index.html","3a41d67e5a02c1cf2dcdad46007b99d4"],["/tags/i3wm/index.html","c0dfe57d68d44cce0096d23801d1135a"],["/tags/index.html","d5cf77368193b1ed2ce0f5c6eb6c5393"],["/tags/issue/index.html","d4f0ae458efa302d0d238c22a8859079"],["/tags/jQuery/index.html","94a90a882a28d8c3fe1214f62c320c88"],["/tags/java/index.html","7f35761877dab2b1563a2fa947f4a44d"],["/tags/js/index.html","87ba103e88c78dfec2cb2f11fd1c1cd1"],["/tags/latex/index.html","270edfc0b4938596bf43febfb0aca037"],["/tags/leetcode/index.html","4cbea8fb1d60c4483580341525dfa877"],["/tags/lex/index.html","4a6f86eea828bbb26eaed853341f3862"],["/tags/material/index.html","7b3feb0dc6168688a115290c65a6b3da"],["/tags/music-player/index.html","e426ca676a521e9030747709ae8d1703"],["/tags/nodejs/index.html","df1a499165c348471b941a5dd513f8d8"],["/tags/noj/index.html","ebb3bdcff4a3d16604b755b26ae8a69e"],["/tags/opencv/index.html","c57f49bfbd6dcf3b7da5f6b4aec59a78"],["/tags/overleaf/index.html","d9f8d0bb271bbdec95ea266cba782481"],["/tags/pandas/index.html","0cad3cb31ba279a9d243e8893fde3000"],["/tags/proxy/index.html","6b50dbac27afcbe3a70f3f2b6fe0cea5"],["/tags/pygame/index.html","d7c9c02e8ad86535da2ddd8c56893ced"],["/tags/python/index.html","ada364143d3802d829b25bb681a0609e"],["/tags/pytorch/index.html","de24cd9936fd44a0594d46ffc3cedab3"],["/tags/reading/index.html","5723fb8153d2eaf911496bbbdf3dd436"],["/tags/requests/index.html","cae6c1b311baf06403e9dfea5a0f8ece"],["/tags/security/index.html","9c5a7c3d3b5ddd5ad420761e7d561161"],["/tags/shell/index.html","3d221585866eb13987b1d6c7674ec6e3"],["/tags/sign-in/index.html","d6b8a4dd6179ee35fe0b781cbe556f40"],["/tags/socket/index.html","b7054c0f61859019e1a26f01214fab81"],["/tags/spider/index.html","e3cf1b3bcad81b399c5f7e27ad048bae"],["/tags/splash/index.html","8c94bf0bab8f3721fa518e25db7f1e8f"],["/tags/superagent/index.html","bf834c5a2a7cbf29e1f519d909e9a9ec"],["/tags/tensorlow/index.html","186d80bd5e32d51463baf235a9fe5a4b"],["/tags/tex/index.html","6c31d837d799056bdcc5630c08c809e1"],["/tags/threading/index.html","7c78ac1b5d76925b18620d980b48b26b"],["/tags/tkinter/index.html","615083e1f8a10a8b04d4904d60250a0d"],["/tags/tutorial/index.html","ad74ed743a30cffeaf52a789fd7eb3e9"],["/tags/typora/index.html","60a0f184157266f6847f3657f8f08b6a"],["/tags/vue-element-template/index.html","204f2c5413afcee7d914dbd400e1ca06"],["/tags/vue/index.html","235c903e16fa5e3e1e0ed78d5ca7d24e"],["/tags/vue2/index.html","506f58dafe0312c3315d20a502f449d7"],["/tags/vue3-x/index.html","e4f7cfed676b1c471fabb07ecf3c627e"],["/tags/wechat/index.html","5661b2ff8fd5db7f7a7541928fa77194"],["/tags/wm/index.html","b9106c2b74cdfe6d00f1e280530618f7"],["/tags/wordpress/index.html","e3a6ca3722c90309aae8beee42881dbe"],["/tags/workflow/index.html","935f8e3cb2118dc8cb95610f2cd97e1b"],["/tags/yacc/index.html","bc14728082ab34a8ba09d31f12b5ccd9"],["/tags/zsh/index.html","29d1f7636f611c8a9fe37cd7041ec421"],["/tags/七牛云/index.html","2d27f435a208509618274c193b0be76f"],["/tags/函数/index.html","6fe7a3d958f774bdb0f10bbc1281ecd8"],["/tags/存储/index.html","ff1b4ae9005a9713e7cdf3785d3f5743"],["/tags/实战/index.html","a1eeb1a72dc664b9ef80b30a3c1f7e3e"],["/tags/建站/index.html","667646afb39a98d0abc9e25c42910b99"],["/tags/指针/index.html","ecce41d0adc111827e44c2692d408f6f"],["/tags/汇编/index.html","c67ae9ceb5792a7afbe580ea5a4119f1"],["/tags/爬虫/index.html","763d34513136c24f54a2789eec53e675"],["/tags/算法/index.html","b686f2cc7ec068b4d96804e59c197b28"],["/tags/编译原理/index.html","ab43bb208b0f7ca8c9c157de8bbf7bc4"]];
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
