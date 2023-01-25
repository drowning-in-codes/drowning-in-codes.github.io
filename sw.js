/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","81aeea8cbcf268c92d8f1c05af40ad6d"],["/2021/04/20/稀疏矩阵/index.html","436767317d1caa8cb8f75b3bb02febd3"],["/2021/04/23/广义表简介/index.html","21546ba119daabd898eccb1c9b41b242"],["/2021/04/29/关于指针和函数/index.html","564efec9b7a4c947a8126c3c389e2eb6"],["/2021/05/10/哈夫曼编-译码/index.html","fc563f6c738acd4801d3f55882862d58"],["/2021/05/17/数据结构noj_2/index.html","438d6a959188092fe4684918a782a5a6"],["/2021/05/30/数据结构试验/index.html","8a3811352c2637ecba495d4689526bb6"],["/2021/06/12/数据结构noj-3/index.html","29cc49d86f0f46258a57808bc95c9277"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","0578ab3ced4d608c22f61675c950110c"],["/2021/07/08/课程资源分享/index.html","c9a56dfd4b3836cb6efa07cbd72ec68f"],["/2021/07/20/Scrapy-下载图片-文件/index.html","43603c75c88cc3d6a65c0435da6fb192"],["/2021/07/21/Scrapy-动态网页爬取/index.html","75d8e050c2dba44992e62447bf1d064b"],["/2021/07/21/疫情打卡/index.html","08760290f4739564cb7e7bb1895414e3"],["/2021/07/29/Scrapy代理设置/index.html","9d191606723c9990f3a8e390e3069564"],["/2021/07/29/数据库认识/index.html","7599985936269727021ce0991109e254"],["/2021/07/31/Python多线程学习/index.html","6a718e471375558b9d16f741cbcf91c1"],["/2021/07/31/tkinter-requests练习/index.html","dd995eed0f2fe87dda68be3abbb10a64"],["/2021/08/10/Git学习/index.html","4712a1b7c529676b172d21ba88889bc2"],["/2021/08/15/pygame实践-1/index.html","3d8426a008c5bf534cfd485be84629b4"],["/2021/09/06/微信小程序开发/index.html","1127b7e77baad8987e8e42348ce00cd6"],["/2021/09/21/命令集-1/index.html","38237f9334174576e4ff29dc8c304106"],["/2021/09/21/命令集-2/index.html","bb164483d7e01eb02731923d828d2e88"],["/2021/09/21/命令集-3/index.html","5dbc99668f349fb36e2807647543e524"],["/2021/09/21/命令集-4/index.html","4bf228dda55d86da7d26cb741bdaf515"],["/2021/10/03/socket学习/index.html","557089fd0d011e14e36cf85b03740620"],["/2021/10/10/dwm入门/index.html","67dc60a1160f5562fd0d5994bf719bab"],["/2021/10/10/安装ohmyzsh并配置/index.html","b89a0b0a1ac3ed954a0bc25d2eae46d3"],["/2021/10/20/css学习/index.html","2d67d5f582c627496debfbb1237d861e"],["/2021/10/20/wm入坑/index.html","4351936fabc459a77338e9fdcc871624"],["/2021/11/03/微信小程序学习/index.html","815a32f6ed744b35b9d6e72e634bac06"],["/2021/11/04/css揭秘/index.html","ecce76302d0398431382058c92fbe81f"],["/2021/11/05/css-练习/index.html","23cab3b35bb9fe1b5e40a445ab10185f"],["/2021/11/21/命令集-5/index.html","2a10ab53bd9b954c55797656abe0a406"],["/2021/11/21/命令集-6/index.html","70b1bd117d931387fdefe78c6f092d90"],["/2021/11/21/命令集-7/index.html","5286185ff702e7a68720500e53bf8c71"],["/2021/12/01/搭建wordpress/index.html","8be92f4b11e55e4745a78ccd6eb30366"],["/2021/12/08/python操作百度网盘/index.html","3e45061ea0a1fe98f6cee9633e6a2cdb"],["/2021/12/14/js爬虫/index.html","b7f72633c6d846eb603bb3ed474ac765"],["/2021/12/25/为网站申请ssl证书/index.html","e70d4404c9be37afcd72bbdb970822b8"],["/2021/12/29/使用七牛云为网站提供服务/index.html","51c2ed9e9f2f3d2e3ea142f8998bd0f0"],["/2021/12/30/jQurey继续学习/index.html","ebe31485768c7d5760f5755cf1d2e6c9"],["/2021/12/30/jquery学习/index.html","bffe20a492d2570108b3312131d53b92"],["/2021/12/31/vue学习/index.html","0a1783a25b54d35e14a63766aaf2febd"],["/2022/01/02/疫情自动打卡/index.html","f764741860da6a759dcbe1054a0091be"],["/2022/01/03/javaweb初体验/index.html","f62e8bd9799c2f9cb95febacb8aba5e5"],["/2022/01/04/codewars练习/index.html","77df62dc223a69d86866e6813a471c6c"],["/2022/01/05/Spring学习/index.html","d519eb1b95e93162a78238b7843f218e"],["/2022/01/05/vue实战/index.html","b9cd5e55994df49f026272997ebb54bc"],["/2022/01/08/gdb-gcc学习/index.html","ef6ca896b9991200c10a3192ddf98338"],["/2022/01/11/python-opencv学习/index.html","6709e18dc9840a28e824217631f22506"],["/2022/01/12/汇编实战/index.html","f27b036f9525cf222b87b799e9fa6640"],["/2022/01/17/pandas学习/index.html","434cf7f3ee9a34dd4eb19013a827d4da"],["/2022/01/19/可视化图的工具/index.html","9843137b53a5d23ce2a76c5228220825"],["/2022/01/19/机器学习入门/index.html","c00a47e15d8c1605d66347d54cab2446"],["/2022/01/20/cousera-ML学习/index.html","2761b9fc7724c3cfe0adb62d29746b47"],["/2022/01/30/typora解绑后出现问题/index.html","e4ed49a3c61d788fc22c0f8abeb3c8a2"],["/2022/02/03/NLP学习/index.html","0137d6f69afe243d4a6c3f2c5874c60c"],["/2022/02/04/Web漏洞学习/index.html","26fa1d5d0eb557a7768aaf2752e67553"],["/2022/02/04/pyqt学习/index.html","614e929dfd93993fc981af4446f4c03e"],["/2022/02/04/python爬虫/index.html","a0409412e3bdb51950c376dc89728864"],["/2022/02/18/Electron学习/index.html","7435d195fa715f91ab70f58b98f64f7a"],["/2022/02/22/疫情填报字段解析/index.html","cd9b7e3f46d60cc53408a7ced4a03d55"],["/2022/02/24/Bomb-lab实验/index.html","669fc39a248ca243a714127b63f62aaf"],["/2022/03/05/nginx学习/index.html","e94b97ef4e1cc1de8fe2d456a6bce464"],["/2022/03/09/汇编原理课程学习/index.html","41afbd648a6efab3a4fef8941a36a326"],["/2022/03/11/Keras学习/index.html","1733cf0b62e03dc7303dc7378aaf879b"],["/2022/04/01/graphviz学习/index.html","d11938fbc993f94386d382331355d328"],["/2022/04/07/django学习/index.html","cd62e6c0fc427bd8b41e933fecbb422c"],["/2022/04/11/密码破解学习/index.html","adff276b25f54d3d7d774d1a246aaf4e"],["/2022/04/12/flex-bison学习/index.html","348fe72ac30342ca296e67241c16cbf9"],["/2022/04/15/pytorch学习/index.html","816df7b2a750d3c72257c178b786a0a5"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","554f8018c94aa4af031d642169f66ca1"],["/2022/04/23/写一个音乐播放器/index.html","9d5cd56d10047d5fce21cff814136e75"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","89585e1d347afce188356ae338e9fd1d"],["/2022/04/30/GAN学习/index.html","3ec33100ab72f8e02e07a12ff9b7d93d"],["/2022/05/02/html精学/index.html","b1a4e1b2b5ba1627ba3970e9c43337a6"],["/2022/05/06/write-a-compiler-by-yourself/index.html","09013aab01d8cd67267ffdfb71f5e89b"],["/2022/05/30/acwj-01/index.html","7543489521ce6d45486bb123746ac293"],["/2022/06/14/animeGAN/index.html","81f6a9a9837d876b2ae793cf051ea1b1"],["/2022/07/09/c-与算法学习/index.html","fd6b7750fe9181462d79301c6a328e9b"],["/2022/09/19/flask学习/index.html","01c1a053e97dec4a44368364a29ce321"],["/2022/09/22/cs224w学习/index.html","31109da7f62ff1fb4172d417b301fd91"],["/2022/09/28/记录一次wp重装/index.html","161088e57770a40cf0b3a7c85e9769f2"],["/2022/10/01/Obsidian学习/index.html","fad431a95aec23577a103c8930e2adc1"],["/2022/10/08/vue-element-template实战/index.html","fb9674e9b22a438b92a9b14e447efe1d"],["/2022/10/25/vue网上商城项目/index.html","4533f37dcb4f0c9e2d320088aee23137"],["/2022/11/11/leetcode刷题记录/index.html","e02517cc4023948e500331e621fcd00c"],["/2022/11/11/使用overleaf优雅地写文章/index.html","8ef786f855ae209b08b24672854e5e89"],["/2022/11/22/磁力链接与RSS订阅/index.html","c6087ef72eb526237516d4dd483cafc6"],["/2022/12/11/uniapp申请获取地理位置/index.html","9a92f1b2876a8835d4de55c7511a11f7"],["/2022/12/26/pr剪辑学习/index.html","b3cbc81f9c4a7c9e850145ec4adc2d50"],["/2022/12/27/css中的flex和grid布局/index.html","0991d9f853b13f3b7a3bb36ca4211284"],["/2022/12/28/Flutter学习/index.html","0e585ad6b368338ddf9e9b73fe12b632"],["/2023/01/01/美化github首页/index.html","13fc6e08df01a2d3f4f82e32fddf2482"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","09e9ca2e72f43abbac1ed44f5cda2adb"],["/2023/01/04/构建微信快捷发布文章工具/index.html","c705f80858eab65f8ab81f2e90eb0d85"],["/2023/01/14/dart学习/index.html","a3a4176b8582d0f27ae1d7a2beda8e0c"],["/2023/01/23/闲置服务器BT下载影视/index.html","8d47bbef4cf12b64bc977b65ba35c349"],["/about/index.html","10f662c934a0f84e74d246f5cea14592"],["/archives/2021/04/index.html","e4967d96dd852ed8e9ad3aafdd867a5f"],["/archives/2021/05/index.html","02085673453cc6a1c943d9dd7d6cdc7d"],["/archives/2021/06/index.html","3f3480d9c2bdf09fef287406db27ee96"],["/archives/2021/07/index.html","93532388e39a72d64ce30e4c7516c440"],["/archives/2021/08/index.html","e1e8269d7922a52e2483d4390179c6d2"],["/archives/2021/09/index.html","27f18c33b2526d84f99009303c32580f"],["/archives/2021/10/index.html","02afca4cb53f99abf7b56e5d187d5dac"],["/archives/2021/11/index.html","2ac3a7c3409715cce7ecb539354dc977"],["/archives/2021/12/index.html","301386c511a3e41d20da651527456a52"],["/archives/2021/index.html","f959e23717890c4341b45d82ff44ab9f"],["/archives/2022/01/index.html","3c3add95797873d78921bf743e52f0cf"],["/archives/2022/02/index.html","64b924918580c5f5ed8f2e35406cb8b1"],["/archives/2022/03/index.html","375f4c1427d0a4657d351596c6aafbcf"],["/archives/2022/04/index.html","ae948645d5a62a0c572381c3f6601093"],["/archives/2022/05/index.html","70ca548b4e510d57a5593588ca1b452d"],["/archives/2022/06/index.html","aee72aaaf538fcbe7bbd78acbb54733e"],["/archives/2022/07/index.html","26d73c01b9117b6de3b4e1f5fad895a2"],["/archives/2022/09/index.html","b0f356ac66a53b83df7db778f49ded27"],["/archives/2022/10/index.html","e71b7d8d1d73109d0b8a9cf4c4a73ea0"],["/archives/2022/11/index.html","1d7e7ce67c4c2c1f30b0f5bb3461c88d"],["/archives/2022/12/index.html","9595f695450f51f3e90a2601a777341d"],["/archives/2022/index.html","104d44834d21aee221c2f5d5d8fb8a73"],["/archives/2023/01/index.html","42f5116491a01fe9f7574813f78e9f39"],["/archives/2023/index.html","fbf3a0d3a85ee5cb0fd0e71f44bf01cc"],["/archives/index.html","507492db17719162b6637c29880b0e84"],["/archives/page/2/index.html","d6d80f322b0f4ad2a61f6d3c80973ba3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","1222833fb0aec014ad65239737cc6c3a"],["/categories/ML/index.html","8682cd0dd96d09dc97203d4dd69ecf4e"],["/categories/Nginx/index.html","55b7a6ba948c254d70454b3519e4db7f"],["/categories/Spring/index.html","8258a186c9b9c2fcf9fa8d1338c653c6"],["/categories/course/index.html","94a712edcaf5a0115ee11ba338547e39"],["/categories/django/index.html","51da268c5f0bdd68f7f7cd2eb4a58172"],["/categories/fun/index.html","5803cac8baba2332fd98995e72fd3ee7"],["/categories/gcc/gdb/index.html","df469c7b4e4a3b64afe5f0325ec7c5aa"],["/categories/gcc/index.html","dafc8ba2bc02c83911caed253be03fa0"],["/categories/index.html","0e65d05b03a59c5ec0b7a664e2f525d9"],["/categories/java/index.html","e23e59a96dcabd1f1a73821bc5a02600"],["/categories/python/index.html","c3e528411a93d139c90f200bacede207"],["/categories/study/index.html","5b6249975a8025aebc7bfd966efc3c68"],["/categories/vue/index.html","02fd24e778dca73a3ca2ce8819cfa06d"],["/categories/误区/index.html","e3527bbbeb216d4f82ebcb09766630d2"],["/commonweal/index.html","dddf2ea2f3a79675c61ac7c10285e2c8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","118debe14b852c27bbd7a152ea5fe721"],["/home/index.html","c63f58ff0c0f235ae4f878a24db9a1c7"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","3dc7cea31abbb17caa85eab7bee26b3f"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","ec833f3c061f39e6ff253f641bf74f8e"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","846d8bbd4696806c544004a49c6a9afd"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","196d66e376f50491af5dcf656c931e94"],["/page/11/index.html","f94f92409c5d71cc2222a7eb554f29c1"],["/page/12/index.html","b67f8ce5a37a9d61c218a392d71a873d"],["/page/13/index.html","eca23f5c16ccb4f1c1ee044d8798285d"],["/page/14/index.html","6fa82d7c16137a61d81d279450aa2d65"],["/page/15/index.html","30cda9339534ac1a76de3343938ca7f4"],["/page/16/index.html","cca577527c10b4241d24456a07e55d62"],["/page/17/index.html","9692c4cd00bf48c0f11b9b04b59d36fd"],["/page/18/index.html","8b5024ff07dcf45eec4637905d6ea8e6"],["/page/19/index.html","2177d34395812f69a7a92b91e1944506"],["/page/2/index.html","31b7f15e55cb12d9d8d09704c3064ea5"],["/page/20/index.html","f5faefb6a42b7da5c2a1bf273cdc124a"],["/page/3/index.html","a9bef33029f22d94193d9721b7022cdb"],["/page/4/index.html","67a1a168e4e97c9a0ec52b0ee1066da2"],["/page/5/index.html","e4b467f7a401230d85dc239f149f0059"],["/page/6/index.html","2574b7ead9f44aea28d7ac60798e1bcc"],["/page/7/index.html","d88c08d087d23ac35ea5fc049e6f233c"],["/page/8/index.html","a52fde1707f860a1952bbb341740e6c1"],["/page/9/index.html","aef1cc5d254cdcc5df3610b6fbb56998"],["/resume/index.html","b256ee31d4ed4afefee75200f6b091a5"],["/schedule/index.html","02b075c6c1d22483fb1bb0befc396940"],["/sitemap/index.html","ec2075cb6c3356817a72def12ba202ee"],["/sw-register.js","d292366ff1a975366a481703ea145b27"],["/tags/AI/index.html","64a97588508d37afc4f01f3b226626d9"],["/tags/BT/index.html","d79c0f78750771c85be722e5354bde11"],["/tags/BaiduNetdisk/index.html","65c6c3d9cb7c499bf234079887ffb9da"],["/tags/Bootstrap5/index.html","27109fb93e72e1945cfd08f69c2b1795"],["/tags/CSS3/index.html","3872e902ebacc4e36bd874e571f0e26a"],["/tags/Centos/index.html","ff1af26de2e805cb31833da4ef5ba2fc"],["/tags/Electron/index.html","22c5a2157d6c46cd9128488c7cce5dce"],["/tags/ElementUI/index.html","7261a26beda8d2aaf315db42b07d0a30"],["/tags/Flutter/index.html","40a8967554968ea83cbcbed3dfca3163"],["/tags/GAN/index.html","32df0f3f1a7e9a2cafd967ce72bdfb16"],["/tags/GUI/index.html","b2949d17e65c6e2b72092b4b56afe3c4"],["/tags/Git/index.html","3ba0dd20b35cff5279399f87e251b066"],["/tags/JavaScript/index.html","7daf4c76232564bcc1d2d988924f1445"],["/tags/Keras/index.html","99de39a5654885436bd1c001dce934d2"],["/tags/Linux/index.html","bdb3488001360f0da4fd429286de98a2"],["/tags/ML/index.html","c39745001d7d349eb921a121b7b9f9f7"],["/tags/NLP学习/index.html","ca522d50b7ef9d83517740f6f78575a1"],["/tags/Nginx/index.html","da61839ab79e40f0c4beb108c24990e4"],["/tags/Obsidian/index.html","28212dc9819da1264390c456e047e65b"],["/tags/Qt/index.html","2af2e87240bd99a915c34ebd2ae992ae"],["/tags/RSS/index.html","8977a524fd4505d3811d3efb4e76219e"],["/tags/SSL/index.html","b52506f2e3d39660ba7d16f75efe0ac9"],["/tags/Scrapy/index.html","bdd48f08efe1cf53212bcca48e32c400"],["/tags/Web/index.html","e829e73e3e899ed54e39804aa4f27938"],["/tags/algorithm/index.html","8e75063e2be340ffd30db37df372e410"],["/tags/bison/index.html","2964af33362d081878354f11e01ee800"],["/tags/bomb-lab/index.html","08aa43982d08080d59039deda7227893"],["/tags/c/index.html","6e4575be7a3803b465b6106ff4b3eaae"],["/tags/cheerio/index.html","db1a9aefba4824a8e2ac01783873c4db"],["/tags/codewars/index.html","f865b8f2dcac52b33ae7b139f2ef8cca"],["/tags/compile/index.html","177dc8c196d303adfb91e78710a4e8e0"],["/tags/compiler/index.html","23769fc570661a547821d33803a8e9cd"],["/tags/course/index.html","45bee2364d2fc1e709a5437efdcf4404"],["/tags/crypto/index.html","52d2dede9452de7a92b057b35f95921c"],["/tags/csapp/index.html","6262027e8dc4b0eb6615b183559df1de"],["/tags/css/index.html","b85ed5818c0a20ed9fec26d211af458b"],["/tags/dart/index.html","f06188a369dd05fb6c32e56a9d520e37"],["/tags/data-structure/index.html","0943812e63b76008e6d96ccd518d8303"],["/tags/database/index.html","c475c355daaeb44d3acdb9357aa89922"],["/tags/deep-learning/index.html","45f93314401d6425021709b476f6c11d"],["/tags/django/index.html","0a77aa5098f511a38b8d2a3fef693d54"],["/tags/dwm/index.html","3876309135cfbaec2cd3c647dd874667"],["/tags/exercise/index.html","5674d86b6eceb552e24c0191160c1657"],["/tags/filebrowser/index.html","12dde6cfe65279bd6ee20354a0a0628a"],["/tags/flask/index.html","7700eb0697225fb5e0904aabcf580349"],["/tags/flex/index.html","5e73b928ab5ed78d06618e237abe64d2"],["/tags/front/index.html","05d3fa0b9674d8f2c493c01caa736101"],["/tags/gcc/index.html","cf60ad31e1f5aa4289985dc8b12b1216"],["/tags/gdb/index.html","7c29cb5f9b648036b5df658b2fda7c96"],["/tags/github-profile/index.html","f9092f802687fe89ca21f99822407b10"],["/tags/github/index.html","3556903312a59a9229f1d6a3491add5a"],["/tags/graphviz/index.html","017849da449e13fce43a01554d83dadc"],["/tags/grid/index.html","741429310d24f9ed63323e572dcbe63e"],["/tags/html/index.html","e9816e28a941e5330d8482472a27e54a"],["/tags/i3wm/index.html","c248bd419a2e5cebea8a3e0205a12c7a"],["/tags/index.html","b51c4aeb1c8e33298f84e418e9da6feb"],["/tags/issue/index.html","47cced080bc796805c6291712bcfc441"],["/tags/jQuery/index.html","29765430334a044d9a7580bb6671ed2c"],["/tags/java/index.html","f434ddbae8cef652712e3d51f634d282"],["/tags/js/index.html","279931908c95f9c0c2ca57c5124d55e2"],["/tags/latex/index.html","2ba11bbc6c2c87fceaa4b00309f6292f"],["/tags/leetcode/index.html","99a163db50798ab120db900a4af1685a"],["/tags/lex/index.html","17c6ddd8d65d6eac89629cb5fde822ac"],["/tags/material/index.html","4d9bfd9caf0a9e3849480d52ffef72ef"],["/tags/music-player/index.html","3400344d8c2a5fe99de666197f3b4475"],["/tags/nodejs/index.html","827a8e53ab1eb7f09f19a6c8d677a02c"],["/tags/noj/index.html","892db6498c9a4d76c8ebd525ffa576e9"],["/tags/opencv/index.html","916c03335f951a538bc8ed68bd5186d1"],["/tags/overleaf/index.html","20068c90ca49cf9570821625ef073bb7"],["/tags/pandas/index.html","c6440e4b6e49538a9c132dabbfca1963"],["/tags/premiere-pro/index.html","efb73d50e67410d9e07d7af97a6cc98f"],["/tags/proxy/index.html","565b3994fbf9465e1a1d97a069ed9509"],["/tags/pygame/index.html","61b0d3be2299d0af70045aff14b4824b"],["/tags/python/index.html","d7e745874e1ec05d6378b289cb270a44"],["/tags/pytorch/index.html","a23bba4377573915e1f22d3fc95a3dd8"],["/tags/reading/index.html","5c86d9ba234c89fdbfbb3ec759dda597"],["/tags/request/index.html","f4ad42fb5fcfb43b048e528811382e90"],["/tags/requests/index.html","afb6ef74cc19791b3b2f9cc88cebcd8e"],["/tags/security/index.html","84d97f6d7f73943278ddca3caf984f45"],["/tags/shell/index.html","60e879a3a55f28de7211e9f6c6580fcf"],["/tags/sign-in/index.html","8cef66050e88f516f3f1cb786eb3759d"],["/tags/socket/index.html","7db263999597b7ea00b65e6b4202d6b0"],["/tags/spider/index.html","77e55e57a687e92e3c7af33c70a4bb77"],["/tags/splash/index.html","59884d8282c0570ee84e0a2e0846c9b1"],["/tags/superagent/index.html","c26c63c43357316a075d574de2924bdf"],["/tags/tensorlow/index.html","bb8034b83478a4ee4e958cdea06ad314"],["/tags/tex/index.html","62f878bfeb13ae3342932e6b1aecf585"],["/tags/threading/index.html","a9348a28c4c93205d1ddd812f02ad66c"],["/tags/tkinter/index.html","06f3fb206fb2de12bf8621393fa6a9c0"],["/tags/torrent/index.html","4da0cc8661cff321ae27932e027b89e9"],["/tags/tutorial/index.html","3fd5db6e7eee6ddf56ab5c58b6773d2c"],["/tags/typora/index.html","be4fd17acd0f44083762688609f3685f"],["/tags/uniapp/index.html","5c6e9aba617de347b888706b93f57759"],["/tags/vite/index.html","00ed7024650528fbbbfb839c5249670b"],["/tags/vue-element-template/index.html","ab6193940004617e4d6df5977412e225"],["/tags/vue/index.html","14e73451f366e85ae41d88df2f8910cf"],["/tags/vue2/index.html","b1b7f89695f53969330a39ce04e22641"],["/tags/vue3-x/index.html","d1fc5125a2a63e268ca61d9962bbd18f"],["/tags/wechat/index.html","ce813b73df8e289f95ac92290bfeeb4f"],["/tags/wm/index.html","2dc75d1df4686d0440ded65af222fc8b"],["/tags/wordpress/index.html","d7e2f25660db3c10f3429bd7bb2cc7cf"],["/tags/workflow/index.html","95fbd8f5fd7b90d2e08064020340187b"],["/tags/xpath/index.html","81072a15bc746b78721baaba8fefcb4e"],["/tags/yacc/index.html","b6adaac975ede710bdbfece6717a52f2"],["/tags/zsh/index.html","9e5973d8edba9fa359f9a9c43dd98720"],["/tags/七牛云/index.html","617a535eace321066d8a8f572a88cd4b"],["/tags/函数/index.html","46886a6367c268c02cd8f8b571bb4e9e"],["/tags/剪辑/index.html","ee4e2dc18e3017649b06b66a753cee50"],["/tags/存储/index.html","194d1efebdb1170a808a6e57a7c91f48"],["/tags/实战/index.html","abd08cfb5103151b3b595f1df032c632"],["/tags/建站/index.html","5533fc4e7aea82eb0d4909905bd9d1aa"],["/tags/微信小程序/index.html","be6ae24b2d9fc96caa7dbebf8e37f294"],["/tags/指针/index.html","5728a4f37e3c6463385200eeff1e4da9"],["/tags/汇编/index.html","48524ddaf8aa4ac4bf31100f9e15b80a"],["/tags/爬虫/index.html","6b709fb4cb04a14e88636b6424ea2c66"],["/tags/算法/index.html","f011a08915a3e0720b8d58245777dc46"],["/tags/编译原理/index.html","ef4daa4670d08c11aab750c259a62eda"],["/tags/获取地理位置/index.html","c7b5497db9022638de872a633c055c28"]];
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
