/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","95180db58b8d9191974d9e1a1eb3b906"],["/2021/04/20/稀疏矩阵/index.html","abbb2ec6f10d1ede7df5c12fc134c27d"],["/2021/04/23/广义表简介/index.html","aed0faf72bee5022b6c3a20c16a60b3d"],["/2021/04/29/关于指针和函数/index.html","5d780ab7b3026858bcd9fb37b6b8b2a6"],["/2021/05/10/哈夫曼编-译码/index.html","e11bbc69b003221e352f251d550cfe7f"],["/2021/05/17/数据结构noj_2/index.html","cc7b1fca22aab636aae3232dd5b23271"],["/2021/05/30/数据结构试验/index.html","d774b6ce48af8280504284501967577d"],["/2021/06/12/数据结构noj-3/index.html","41bc13b14d7107b8643894eb041757fc"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","155d6a2583220f34c7747bfc02926a4c"],["/2021/07/08/课程资源分享/index.html","fd0a6bd581b633aa29ec3d9f79af05e6"],["/2021/07/20/Scrapy-下载图片-文件/index.html","72582510b387a181497d41a47029f110"],["/2021/07/21/Scrapy-动态网页爬取/index.html","0285e346f968e5b3b31418bec0d7be53"],["/2021/07/21/疫情打卡/index.html","42d60b4d47c2e4488772ad066c751fc9"],["/2021/07/29/Scrapy代理设置/index.html","4b2b4cebf66308a7385d1c18d6ba15e8"],["/2021/07/29/数据库认识/index.html","0f97afe829a5e76068d9fae902a3c7c0"],["/2021/07/31/Python多线程学习/index.html","470d7f4287006674c4e4666587edf61c"],["/2021/07/31/tkinter-requests练习/index.html","e8d688526e331dbce838394cc4559aa2"],["/2021/08/10/Git学习/index.html","b11da324b73b512bd71cc5c15211eaf7"],["/2021/08/15/pygame实践-1/index.html","dc2a4e39080ba8a19ee9903217df9699"],["/2021/09/06/微信小程序开发/index.html","c594d1a06285a1dec11a1185b271a86f"],["/2021/09/21/命令集-1/index.html","3f3b8a280683966eca80ba6b9d2b4691"],["/2021/09/21/命令集-2/index.html","bdef972156b8d9e1306663839023d015"],["/2021/09/21/命令集-3/index.html","0e4789e2e98f1bad0a81cc527ef57aa8"],["/2021/09/21/命令集-4/index.html","e7b7195524a3ddeba4d5757e96bdf489"],["/2021/10/03/socket学习/index.html","aa38755fa917d046247ddffd5beab8af"],["/2021/10/10/dwm入门/index.html","f8567b7ddcdd41d7282af78fdaab61ae"],["/2021/10/10/安装ohmyzsh并配置/index.html","8d9a581168030e32d380018db0c4c79a"],["/2021/10/20/css学习/index.html","b93e48ef1edaf507b212aada7969facd"],["/2021/10/20/wm入坑/index.html","690c12851105434fa5e121813de0abd0"],["/2021/11/03/微信小程序学习/index.html","2bbb55838359ee692b9e59c7f37829bc"],["/2021/11/04/css揭秘/index.html","8bd5a2f63f952e146fe7c78518520b4f"],["/2021/11/05/css-练习/index.html","fa60b1e8e21a7858cef8e72000739277"],["/2021/11/21/命令集-5/index.html","397883c0b5ed7891b4f58581165ac12e"],["/2021/11/21/命令集-6/index.html","b35fe570d45afbb68ca5eb5115adfb3c"],["/2021/11/21/命令集-7/index.html","1de7353f7ac681d722faa26e49d1fb06"],["/2021/12/01/搭建wordpress/index.html","ea808eb6f82ac3e37c3fd439b8bb9eb6"],["/2021/12/08/python操作百度网盘/index.html","a8cd8c706a5055e906202dabbf131760"],["/2021/12/14/js爬虫/index.html","1d29a424ba6ee4355b9f4d38499ac954"],["/2021/12/25/为网站申请ssl证书/index.html","3ba7a680c50f0ef824eb977ca0e49be3"],["/2021/12/29/使用七牛云为网站提供服务/index.html","767f98ad3cdc8c0f610cd2ee38806740"],["/2021/12/30/jQurey继续学习/index.html","912dd015792e3cbc4f240c2f3111e6e4"],["/2021/12/30/jquery学习/index.html","639fb9aa4f797686d38f166467792aa9"],["/2021/12/31/vue学习/index.html","aec4f7d0727e58ba5e5b6fa024592c67"],["/2022/01/02/疫情自动打卡/index.html","ffccc4cd3f4164f8f31f695ee0189068"],["/2022/01/03/javaweb初体验/index.html","9935f235a2c66f8f20a1817f433bb3fb"],["/2022/01/04/codewars练习/index.html","f99a6efcf384f1211cc48482c853c8cb"],["/2022/01/05/Spring学习/index.html","23951710f3e8c8adb7c54aef22d3a97a"],["/2022/01/05/vue实战/index.html","a5d91e095a27340a48f0962ecc3faebf"],["/2022/01/08/gdb-gcc学习/index.html","94ec6438ef6feea5e92d041b3ab748e5"],["/2022/01/11/python-opencv学习/index.html","2426db74d5fd420b92694c998a967dcf"],["/2022/01/12/汇编实战/index.html","e2cd513f5f1da26ef02923761328a5ca"],["/2022/01/17/pandas学习/index.html","7cab48f0bbf9ba02eb31a692d328f95c"],["/2022/01/19/可视化图的工具/index.html","195e0bf126e909520500f8568ecdfce9"],["/2022/01/19/机器学习入门/index.html","1bc4899c52624bfcd4f74555c91640af"],["/2022/01/20/cousera-ML学习/index.html","921128e035ef43a5074f3ddabefd43bc"],["/2022/01/30/typora解绑后出现问题/index.html","b2663d0de0aa24d603292099a5ead3f6"],["/2022/02/03/NLP学习/index.html","3e5a4e842c74dd59d97dd4908a234318"],["/2022/02/04/Web漏洞学习/index.html","861381be3e202f6ad2e058644eada82b"],["/2022/02/04/pyqt学习/index.html","f69d74dad3386ac92187e1cb5b7f56fc"],["/2022/02/04/python爬虫/index.html","08dd7ae8ab7285ef1d2da9a36fd770aa"],["/2022/02/18/Electron学习/index.html","2bcd368ddfec600bb7b75fac18ebc402"],["/2022/02/22/疫情填报字段解析/index.html","9a6e354da74c4a874777ff22794f5710"],["/2022/02/24/Bomb-lab实验/index.html","b627f6d4dd98756c7c87aa42b770ffd6"],["/2022/03/05/nginx学习/index.html","b06eddf93412516af3e19c3366755b9c"],["/2022/03/09/汇编原理课程学习/index.html","111b8e26a94277ba43ccde6951f0aeca"],["/2022/03/11/Keras学习/index.html","e8ce6cc35104ee0a1936bdb597b86f72"],["/2022/04/01/graphviz学习/index.html","df2c0d56fd685dc2bce007e1b04fdc4f"],["/2022/04/07/django学习/index.html","a3cba0e34549b7324de9faaafaea6601"],["/2022/04/11/密码破解学习/index.html","cb2a6e1472178f33091752fe19657444"],["/2022/04/12/flex-bison学习/index.html","4ecaa0e6110e48c44211d47de44e30ae"],["/2022/04/15/pytorch学习/index.html","e903e6f5e544fb929c6e497912539f2e"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","7c2b4394ad8f3e8755881f687058d463"],["/2022/04/23/写一个音乐播放器/index.html","09cb1e0a10d3d25a014b995361da7943"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","f528cfc5aae5b227e0f96fd944f264b2"],["/2022/04/30/GAN学习/index.html","36625160f1194df4eb6ef2490d24dc33"],["/2022/05/02/html精学/index.html","59a7fe2295bd2fde23c755e2bc722e42"],["/2022/05/06/write-a-compiler-by-yourself/index.html","04bd6977a8ae4801a259f19f91759468"],["/2022/05/30/acwj-01/index.html","5b5e552b414fcc9d502012a7a30b4eba"],["/2022/06/14/animeGAN/index.html","f77ae990e9c7ccef87e02d3d4157f6db"],["/2022/07/09/c-与算法学习/index.html","af15b8f0db81fa7364d422975c532dc3"],["/about/index.html","9390b016287a7174ebc51e12208b73f0"],["/archives/2021/04/index.html","084ad94ecca9ac1f0ba04db487a9e363"],["/archives/2021/05/index.html","9542cc6f4349457a6d26c26f05e8e3c9"],["/archives/2021/06/index.html","b101d541f6ef7befd5f25aa381d89a1f"],["/archives/2021/07/index.html","05b9d60315e1fd6e7b95871268b882ce"],["/archives/2021/08/index.html","3ad2481873f51585e0c88d4094f2579f"],["/archives/2021/09/index.html","8a4e3092247492d1a6667df97720e2b8"],["/archives/2021/10/index.html","2587688021e8f3f8782a7de640f2fe31"],["/archives/2021/11/index.html","1f8938bbcd7fc4c4e617efd55a070dad"],["/archives/2021/12/index.html","82cd7af5111b806fb79dc2684d51888a"],["/archives/2021/index.html","6c1fef611386569eeb26f3dbfc0248bc"],["/archives/2022/01/index.html","536bf37744eba1004779056a528187a6"],["/archives/2022/02/index.html","9aef4ecfea4158ba69601f1b7e3ff7c8"],["/archives/2022/03/index.html","aca9dd91fc88aacce3b4d9de1c186d99"],["/archives/2022/04/index.html","94030d4c1022270d2b55fb3f3c8aa306"],["/archives/2022/05/index.html","d2ee4a53db8e2302860f916eeeba1683"],["/archives/2022/06/index.html","0b8d78b73a42e3a213ef47921d164254"],["/archives/2022/07/index.html","4cc5ad2d8c63b9be62fa420b9321fe54"],["/archives/2022/index.html","f0d80e8e2e0b6812339c5bc21e46d417"],["/archives/index.html","5e5eb81c8741566d586b309f6e44db65"],["/archives/page/2/index.html","c5634be591cc497f3c87aa9b916d9ec3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","95a5dd19feb5c0a9d2190151f109786f"],["/categories/ML/index.html","17a0014062938020aaf56f1f393460d2"],["/categories/Nginx/index.html","882768bad58efa0c3b66132faecec2ff"],["/categories/Spring/index.html","49eebaa7fdab75e077b099ca03b6bc8a"],["/categories/course/index.html","eb4da88bd5a3cb4e35642859fd3f55c1"],["/categories/django/index.html","a6668b710fd24b665b50fce8e8df8dc1"],["/categories/fun/index.html","891f36539374d20c8506c1bd8a262587"],["/categories/gcc/gdb/index.html","d8157f6419563f2d9048d9999f23bc34"],["/categories/gcc/index.html","b8f6f215cf544218abd8a9ebf26fd77b"],["/categories/index.html","0755698ab100a3b1eea08b999da619ec"],["/categories/java/index.html","54d19369ef139badc254c0ddf7e89cdb"],["/categories/python/index.html","3d46ae0ff745fdd0030d3152f7045f58"],["/categories/study/index.html","66828cb48990be65f32e6a5828d08a5a"],["/categories/vue/index.html","1a267d9c46f54de33df8b43f8cbbec26"],["/categories/误区/index.html","a5ec93edc3bd6475587138265d84f090"],["/commonweal/index.html","9d2e41304a00c2ed4112a1f2e7b14c84"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f1f3803fb5c700bb1bec5ec804267d6a"],["/home/index.html","707e3623bae98466c3a4ef068ac6ff3d"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","4035b77d832585e1416d71f076077503"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","9e414eb7957b5cb001777acf04ca4f3e"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","d419244cbc00b5482a57d7c6aaa0fa3a"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","01bfe7d92a11f07e3fae0f854518412e"],["/page/11/index.html","6fe8460769770aa182fe6f71a974e15b"],["/page/12/index.html","e26a2da2a437f68976a76c971183497c"],["/page/13/index.html","3a3fd9f3aba871aa088e8a8035d81ca3"],["/page/14/index.html","b3985f5c603920ddaa9aba2c49b88766"],["/page/15/index.html","275eb183ebda5893783d9db0f89c8b29"],["/page/16/index.html","aaf598bb7f383947f834e817481b9380"],["/page/2/index.html","a27718175ec705874ede481bf825febc"],["/page/3/index.html","222fa86066831aa1b31f0036c9416429"],["/page/4/index.html","537c8fe7e790f63de796164d6ab10b5e"],["/page/5/index.html","84214e0ed2b3f2a3def978e7c18cbbdf"],["/page/6/index.html","8b0919c05a47b3a22cd40aeaf995a38a"],["/page/7/index.html","ec9144331ecea81465977398a2ba869d"],["/page/8/index.html","09dad4a858fb16510e3b6c42c4d9a02f"],["/page/9/index.html","245bd9763d8298a04e26e36171d7f7c7"],["/schedule/index.html","6122daeb2061a9b28dc87716f6ecdbc1"],["/sitemap/index.html","01e1a1504b37ab7b9700a36e5b0077aa"],["/sw-register.js","8263f89c48a9db2c95254c2a6aa912ac"],["/tags/AI/index.html","80c6a6a895f3ce05fc7e3d2abe89ad49"],["/tags/BaiduNetdisk/index.html","0f5bc9d314e007c7dca7e28183bbb7fa"],["/tags/CSS3/index.html","5cae1c0d7522d748bf2d1643028f79fe"],["/tags/Electron/index.html","e0cb3807efdf5808b8dc7b0b0013fbfe"],["/tags/ElementUI/index.html","3f68c8b36aec0e6e314b73c4c3700068"],["/tags/GAN/index.html","94cafff508bba206bc9d7e5a5bdcfaf9"],["/tags/GUI/index.html","15c1b284fdf5606e426772a9bda96f48"],["/tags/Git/index.html","a65a7b42ecb412b945f7b57965963519"],["/tags/JavaScript/index.html","83482b9133dc498741e726533c334731"],["/tags/Keras/index.html","916df0c8672dea989af8619f2d4e60b5"],["/tags/Linux/index.html","809b792ccb62603423e55620041e55e7"],["/tags/ML/index.html","68554808f201abe3c7ad434d9514b066"],["/tags/NLP学习/index.html","197ed2a66f7bcdd1be99f4c4dc7a92a4"],["/tags/Nginx/index.html","796116da7c5a17c8d56d66c81dff090c"],["/tags/Qt/index.html","14ababe21efa22101332a8c3ae8705c7"],["/tags/SSL/index.html","ad1db64ca8bd604d799b050515a7e990"],["/tags/Scrapy/index.html","be4cbdf3e3b51568e52b56030a41570e"],["/tags/Web/index.html","240607f13a42da9d0cd2029981685a82"],["/tags/bison/index.html","acefe4c1bed32b880bcc169a72a1f4f7"],["/tags/bomb-lab/index.html","705228090ca05828026d36678118452e"],["/tags/c/index.html","88183790f6d95a7d5f274883d71fbb52"],["/tags/cheerio/index.html","18991ae5604956b47365f0e64c596d9d"],["/tags/codewars/index.html","166c600fc505bf082de17d9740d0f18c"],["/tags/compile/index.html","ce9775915bc5dddc451c27f5c85af83a"],["/tags/compiler/index.html","faec470e6b8a5d1b164adfefcee35e75"],["/tags/course/index.html","1cbcdeb6a283c7b5e1f280767ae8c78d"],["/tags/crypto/index.html","f66b149beea817e255fff08c6738f375"],["/tags/csapp/index.html","8ff2165575d7a98114cc07df5e20b529"],["/tags/css/index.html","f6739edb9268c1939000fd3bd68ddb3b"],["/tags/data-structure/index.html","a5c33bcdad0cf53ccb6af39961adbaf3"],["/tags/database/index.html","c9573edd6bbfe58b4e7a788d95b9c9b9"],["/tags/deep-learning/index.html","f8ec47b447c4aa3d5120a9acab730855"],["/tags/django/index.html","561097f409128f04be4e5ac3595f4b9c"],["/tags/dwm/index.html","55c3ec65bf55f3a3184d975a1b87116c"],["/tags/exercise/index.html","429674af25cae5f509089b1c9a7a6588"],["/tags/flex/index.html","222d8c3f55d9af1222c55c0a4b1a9fe9"],["/tags/front/index.html","ca942ead349229a89e42ba1eb8ce6700"],["/tags/gcc/index.html","e651269dfe12840e912ccb88a5b2037f"],["/tags/gdb/index.html","92a6992861436caad79a5b2f334f2eea"],["/tags/graphviz/index.html","425c628f4443f66cd72c8fd25378fc86"],["/tags/html/index.html","9c1e4493c17a4df471bd6ce69b785a4c"],["/tags/i3wm/index.html","d795bdfdcc8e13aa9f520426f7b4ea0a"],["/tags/index.html","abc7992714ae67db995014ae65fee3c6"],["/tags/issue/index.html","258aa31e69b6f86716325bb89e5a7235"],["/tags/jQuery/index.html","62683300585e62f848bd8b79dcf55571"],["/tags/java/index.html","0477d84852deb9bc28c55a01d1fdefcc"],["/tags/js/index.html","f35c31dcb5d16e11143e98ae318065f1"],["/tags/lex/index.html","ce9fc416a18b6f8f997dd9a32d4bcd88"],["/tags/material/index.html","7d2d10bf81b400003a8c3ef3b24c087f"],["/tags/music-player/index.html","99e28d5dd18ef7bfb22cada5d5622d35"],["/tags/nodejs/index.html","36f4820937862785666e740da1db0ce3"],["/tags/noj/index.html","34ba5a7bf615ada42fc8419b44575e9c"],["/tags/opencv/index.html","5f5873a1c8672d1a9b1c84b936a35719"],["/tags/pandas/index.html","c595e654f58af93676b06c7fac40e479"],["/tags/proxy/index.html","b362f3bd68c5094d76a840004c0c8a2b"],["/tags/pygame/index.html","fa1b40f697c449398f78651efc58d922"],["/tags/python/index.html","3fc698b3d762979664a9bdb43c4e8616"],["/tags/pytorch/index.html","3dea30a3cc761c2a1714422796c7375f"],["/tags/reading/index.html","8c2bf100dbf975782631b104d8ff21cc"],["/tags/requests/index.html","cd8d992df6fcd119ad17d1736dfb4879"],["/tags/security/index.html","62c2f018354e4084803f90c973e42bab"],["/tags/shell/index.html","e0f26e1f13e72645ea946127a5ac4b08"],["/tags/sign-in/index.html","01476e7134b0f057595f5bbb166385bd"],["/tags/socket/index.html","62cd9f4e5bdb861acbb04c884caeea9a"],["/tags/spider/index.html","5e6301dcddb85ce13b6c7e97c6ecab34"],["/tags/splash/index.html","17eb9026e424597645f980f0ab20fdec"],["/tags/superagent/index.html","3fbeea6c5f25d50e449c62142db6f3ff"],["/tags/tensorlow/index.html","2fac6184640f69edcd19c7a4df3f9175"],["/tags/threading/index.html","14e826ea341b63df2cf8c55c2b3e406c"],["/tags/tkinter/index.html","afd5c19520fd53210270f834f6e6df4f"],["/tags/tutorial/index.html","ed190f48fb65880bdad0894425a03854"],["/tags/typora/index.html","de1f7f9f1fb3e6abd4308a3bc604b8f6"],["/tags/vue2/index.html","6fa494ea4a8487fa0e640df8ac6ceb3a"],["/tags/vue3-x/index.html","53287e779a0e70f1e07f8c2f49314741"],["/tags/wechat/index.html","9aef263fce59103dc22ba19d7213bfbb"],["/tags/wm/index.html","759f0645cc6b97bed31c6de03d47fca2"],["/tags/wordpress/index.html","c5817b01cfa38ffec2a75197663c4fbe"],["/tags/yacc/index.html","e79f1bd1b72a9ff35fc615ee636eb839"],["/tags/zsh/index.html","8ef8ec625b4ddb6a9c5dd2288de38176"],["/tags/七牛云/index.html","d19d37382a48a799b3a13bf8e30e0589"],["/tags/函数/index.html","ec916249a8253014f5d0e560fe13e291"],["/tags/存储/index.html","a3439173d64008353c1a0740d8167d83"],["/tags/实战/index.html","a971636085545e752a885568759dec56"],["/tags/建站/index.html","1fa5171ea3f90385c35ca2b521c58727"],["/tags/指针/index.html","b42c1dbca942489a4949d8ffb4acc0b7"],["/tags/汇编/index.html","6c12002f4ece6853a7703919824533a3"],["/tags/爬虫/index.html","669a6bcc25e0250c61bd6ef3202f1cc2"],["/tags/算法/index.html","49b21249944089cde527bfe917189930"],["/tags/编译原理/index.html","77a2ca0b87ee023248d4b13fc16c9953"]];
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
