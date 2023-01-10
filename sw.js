/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","c2300e27836173853f7f48d3c22141fd"],["/2021/04/20/稀疏矩阵/index.html","a3a82985b85c6820d4a9a456d46188c3"],["/2021/04/23/广义表简介/index.html","8c2413b46a10c0b4844e8d28d88870ad"],["/2021/04/29/关于指针和函数/index.html","9e4a35a2279110b44cf6ec19bdae35d7"],["/2021/05/10/哈夫曼编-译码/index.html","84f91f17303c05d781089b1541780c53"],["/2021/05/17/数据结构noj_2/index.html","274589ec7785be712a344a94057e6af8"],["/2021/05/30/数据结构试验/index.html","29fd683da842a956cc4b0cfefff41c95"],["/2021/06/12/数据结构noj-3/index.html","5ef3d97e96393ad7cf5ca1a25cbdccf9"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","7f1aea6a2423b66e62e399f6c566e71c"],["/2021/07/08/课程资源分享/index.html","ee9466f2a53f75b52f765cc09f8a4429"],["/2021/07/20/Scrapy-下载图片-文件/index.html","19e71e6264c50a1ed401e010ad8376f2"],["/2021/07/21/Scrapy-动态网页爬取/index.html","75ee2011e218a133e203fce8ec7b8879"],["/2021/07/21/疫情打卡/index.html","2bb33117d7710f30b294d7006192b52d"],["/2021/07/29/Scrapy代理设置/index.html","c1db62c60dc34c5fd0877f795a3e217d"],["/2021/07/29/数据库认识/index.html","147ca661e5e2671e99a1dc2270635a45"],["/2021/07/31/Python多线程学习/index.html","f9deb6872223ee6b7ee8ae37b2233c33"],["/2021/07/31/tkinter-requests练习/index.html","7ce83de170ad453b1d5a4821a81ab639"],["/2021/08/10/Git学习/index.html","fcf7e860942b04c95c2efde84d0e49d3"],["/2021/08/15/pygame实践-1/index.html","aadc071d4a39366b0fd4c8540795df19"],["/2021/09/06/微信小程序开发/index.html","0ce2851198b24d15453aa137826ba134"],["/2021/09/21/命令集-1/index.html","f4c95b3f3c3a877cbea5f080491384fb"],["/2021/09/21/命令集-2/index.html","12a64a4204e767bdd489d0604d91d353"],["/2021/09/21/命令集-3/index.html","db1ab3af61f6372e4c8c32afaa4cd413"],["/2021/09/21/命令集-4/index.html","aa23a02d9b5d3459d5c0253c58094229"],["/2021/10/03/socket学习/index.html","4e9c26dfb91f9b65daa7f4bce78c958c"],["/2021/10/10/dwm入门/index.html","335bdf69cf41a8e4d07a5328079d280b"],["/2021/10/10/安装ohmyzsh并配置/index.html","70f8cf63d1645c012eeb337c25d0f438"],["/2021/10/20/css学习/index.html","915869ef2113a32dbbc1412bff66cdf7"],["/2021/10/20/wm入坑/index.html","f4d7a7344129e0489df88b09a1542907"],["/2021/11/03/微信小程序学习/index.html","ca2d9c4716a7bc923009c114b6d1b561"],["/2021/11/04/css揭秘/index.html","0616cde7c1e4903a3d43ff8143ab3aa0"],["/2021/11/05/css-练习/index.html","373ec4eeec0be3add2137b5a1fd9da05"],["/2021/11/21/命令集-5/index.html","64cdf2cf9a255a3343f5f7284dd53fc2"],["/2021/11/21/命令集-6/index.html","067b96eceee5f52e4e4348a93eaaca7a"],["/2021/11/21/命令集-7/index.html","01b2c943710abfae97127b76322dfffb"],["/2021/12/01/搭建wordpress/index.html","2b78b30ee4ff879b711fd6e20845b693"],["/2021/12/08/python操作百度网盘/index.html","72bd97dc567b416836bad2b2797c37e3"],["/2021/12/14/js爬虫/index.html","b841c579d1790c0d0649279c26c9d0ca"],["/2021/12/25/为网站申请ssl证书/index.html","c99ab6f0236f026d899c321e82a848c4"],["/2021/12/29/使用七牛云为网站提供服务/index.html","2a84c182e48dd25dca5f52e4d69c3acf"],["/2021/12/30/jQurey继续学习/index.html","0da43101fef214553598d20651c8e37b"],["/2021/12/30/jquery学习/index.html","c825c346c704812c9b0747ca9bc49864"],["/2021/12/31/vue学习/index.html","e2a3c71920cc6cb928afdf3613f0b7e4"],["/2022/01/02/疫情自动打卡/index.html","e79cd02b1b65843f32bd4d9e34513f6d"],["/2022/01/03/javaweb初体验/index.html","a90138d4516d73b1f7dd548bb5a16fc1"],["/2022/01/04/codewars练习/index.html","fd2a39aa411da56ffde7d2b4a61c9ae8"],["/2022/01/05/Spring学习/index.html","3a42bb5aa32d38003f42558edd8c42f8"],["/2022/01/05/vue实战/index.html","34e2a20b09186f60996d632edd5f50a5"],["/2022/01/08/gdb-gcc学习/index.html","74d18491abdb5888c0075cd4a926dab9"],["/2022/01/11/python-opencv学习/index.html","a5601d2ffd9d9d9a06f2233f00fe9e33"],["/2022/01/12/汇编实战/index.html","ae5cc784acb2e2e2481c43e6e6523dc7"],["/2022/01/17/pandas学习/index.html","9c9669dec34650b28fc0e1e4a1b17a00"],["/2022/01/19/可视化图的工具/index.html","3f95689ca86bf787a7d4badd26c67b2c"],["/2022/01/19/机器学习入门/index.html","4dae639c5250ac214e200e523bc119b0"],["/2022/01/20/cousera-ML学习/index.html","224614b8dae3a0f408c9986a5053b29f"],["/2022/01/30/typora解绑后出现问题/index.html","463d362d453f36b28a67de06ef59c5b9"],["/2022/02/03/NLP学习/index.html","63965fd9098256570aab47796de67723"],["/2022/02/04/Web漏洞学习/index.html","658c7e4db6477ad582c149c91f4d2624"],["/2022/02/04/pyqt学习/index.html","76c468313a751f7a66b6b38392cb961f"],["/2022/02/04/python爬虫/index.html","34f3a4d043af6fd1f4a0c15507855b77"],["/2022/02/18/Electron学习/index.html","fc238e05275721c4ed1dc4151cc9ca95"],["/2022/02/22/疫情填报字段解析/index.html","a8482380ddb1cdd9019ec518a2d51b7d"],["/2022/02/24/Bomb-lab实验/index.html","1c26b69348a388da1e7cdbb1685f636e"],["/2022/03/05/nginx学习/index.html","be66af9eb417ce08f662fc3a0babea72"],["/2022/03/09/汇编原理课程学习/index.html","cc038093a9a6e653ee8645f1cd927f51"],["/2022/03/11/Keras学习/index.html","da927ccff4b9b09971893b7e8e782f6e"],["/2022/04/01/graphviz学习/index.html","534ddb5299a779794614d13615318709"],["/2022/04/07/django学习/index.html","5737f1ea2ec8c82c732391ffe2685520"],["/2022/04/11/密码破解学习/index.html","1f02b44c98143e2e2a9b02ae5e44e789"],["/2022/04/12/flex-bison学习/index.html","d879667303b949b6ebc9453235a069df"],["/2022/04/15/pytorch学习/index.html","b0c7050fffe3eaa53aa02b88e6ed858c"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","1d85948028522ee432770aaa423c4c2d"],["/2022/04/23/写一个音乐播放器/index.html","a539e7d269c6bd540b6c5bdaa8604051"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","62be73426419eccfd01fe0a54b431178"],["/2022/04/30/GAN学习/index.html","21f66c06311e87423275592bcb6754ad"],["/2022/05/02/html精学/index.html","8643b5a03247a20d83dd36742a443326"],["/2022/05/06/write-a-compiler-by-yourself/index.html","61db957cf114379f8862e66f4560d449"],["/2022/05/30/acwj-01/index.html","06d1efb37b8dbd04d70a35d0af4955e1"],["/2022/06/14/animeGAN/index.html","85e57305f7778bbebdd98af177a14552"],["/2022/07/09/c-与算法学习/index.html","386df14ac7f998786cb082c3fecdeb93"],["/2022/09/19/flask学习/index.html","3cd111a7ed72ccea6c2f802d78f80ad6"],["/2022/09/22/cs224w学习/index.html","06e520a9f1dd5b615ccdee824943ecd2"],["/2022/09/28/记录一次wp重装/index.html","4a62acb7d5ff17ddd87e8e0d21ca2364"],["/2022/10/01/Obsidian学习/index.html","131576886aac690afa7bd67fb1dfd316"],["/2022/10/08/vue-element-template实战/index.html","e0fcace820514a28e7811604224d26e3"],["/2022/10/25/vue网上商城项目/index.html","4090bba60c57bca7c258245695c1dca3"],["/2022/11/11/leetcode刷题记录/index.html","a9a6801a6b9d3567de5f15d050a70f3c"],["/2022/11/11/使用overleaf优雅地写文章/index.html","c436ca1777c1ff37999246f2f0b49fd6"],["/2022/11/22/磁力链接与RSS订阅/index.html","84d9f0a56594c319e177338adc02b0f2"],["/2022/12/11/uniapp申请获取地理位置/index.html","cebf2fb213e86ecab99016a37dbc3f6a"],["/2022/12/26/pr剪辑学习/index.html","361aa2fef22d58bd08ae6f20358cb5c8"],["/2022/12/27/css中的flex和grid布局/index.html","e1575b68af48d50c15ce8fd6c0635c9f"],["/2022/12/28/Flutter学习/index.html","6d3b032fc7dc24ec181bcd524b3b0d57"],["/2023/01/01/美化github首页/index.html","6b5ef2837e90bce5eb352b3b7e7eb805"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","28e8a001abe1abf960cc25d52e748d00"],["/2023/01/04/构建微信快捷发布文章工具/index.html","30cece6222ce9eefa53a6c3fb24971a3"],["/about/index.html","b6122d4767f1d0133e95f126e132d3ba"],["/archives/2021/04/index.html","7a4b5ed2cb2a4d2274338d1cb3f4dd3f"],["/archives/2021/05/index.html","66732117b00aa8def1fdd491d5b8d4e2"],["/archives/2021/06/index.html","a9ed4c2568d161e119af94d15b5a1c27"],["/archives/2021/07/index.html","795581b9bac328983bec9dbea782b7a4"],["/archives/2021/08/index.html","7f45577665b27e45570aa1b4791495da"],["/archives/2021/09/index.html","aeb9dfde2052dc2488e76375a5e3b3b4"],["/archives/2021/10/index.html","7cc51b90a0ca1915aff0d3a996b80a44"],["/archives/2021/11/index.html","f49eb42b3f204ab1b741b74172d79c3a"],["/archives/2021/12/index.html","053f782db150b394eda23085f6bd30a1"],["/archives/2021/index.html","f595684b7a6c6228a55e28277a99f03b"],["/archives/2022/01/index.html","372b0e3f9eeed87e9ef646c6963a5651"],["/archives/2022/02/index.html","04ea95e122a05176dc9f800f5911089e"],["/archives/2022/03/index.html","a51b0df83edb09961ef88794c954af2e"],["/archives/2022/04/index.html","f2d1f0b904178c565510ff4643429eda"],["/archives/2022/05/index.html","ab2e7cfd4be30ebb4aa22902b9765a17"],["/archives/2022/06/index.html","2ef88037aa868506a96011f26c8818f9"],["/archives/2022/07/index.html","3dc1baaa3297c8b323ff1f1c92b63b9f"],["/archives/2022/09/index.html","2c38ee1acf957c94cdd9e66598f4c7b1"],["/archives/2022/10/index.html","9e1ee6f8ba7d1b41617f0c842f8428b2"],["/archives/2022/11/index.html","01fae071d489f6aa0d42dc8d76ba1b75"],["/archives/2022/12/index.html","bb5986635bb54b5cb6bef7f21cb54e7a"],["/archives/2022/index.html","df9d0c2b2717cb051a3d8cfba91a90ef"],["/archives/2023/01/index.html","8ce505b8d92e0c39a42f2471ef3dac22"],["/archives/2023/index.html","8e0ab38a22a8f64bd15039776c3c7f3a"],["/archives/index.html","17d73854e5fe3eabb78ffe0ac51c9d4a"],["/archives/page/2/index.html","1a749c54411a40d13752c00520119e1c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","f3eafc76d006a743604161b1662127f0"],["/categories/ML/index.html","f1bb1e909d643a6fa8a91046d51b5307"],["/categories/Nginx/index.html","c511470e40fb3e85d1d9d83c84713f7d"],["/categories/Spring/index.html","d167dd2a2931ffea71057c5da908c8e0"],["/categories/course/index.html","a7697e3d5e37fcef503e6f78f6d5bb97"],["/categories/django/index.html","92be88a1c8f8146f1b73f3c08f5e1388"],["/categories/fun/index.html","6d7eb932f9453ee2b854a3239fcdb1d8"],["/categories/gcc/gdb/index.html","d5969b3c432a55d3fbf8a2fa76bca4cd"],["/categories/gcc/index.html","38a9cc6ecbd3dbbb3b5c456a2ed593dd"],["/categories/index.html","cae4de5a53d47e67502a53fab8133de1"],["/categories/java/index.html","d4e48565507aec63ab718738bf27ac6d"],["/categories/python/index.html","6deab1888f30eeeab2bbc1ca3eeda707"],["/categories/study/index.html","4bc6e7d5e46f32009e97cabcb7eeba40"],["/categories/vue/index.html","153dda58c0f5c33c5ca781d05d8a7175"],["/categories/误区/index.html","0b35fddce98a498e022fe28115852837"],["/commonweal/index.html","4f9f615963acb10d285c998f544c329e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","ccb0c532d4a910ef1a8f0c1e8b20b385"],["/home/index.html","ebee5eb208c87630ffd75ef3f21f22ac"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","0c6d4e518301168a3fa6c85ecc1bdf6b"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","1887316b41428f19f1b50dcb22649ec8"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","f965ea83ae0ee168bd88ac5745cfd383"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","45b6335d30353bc2a65b0c7abcabeddd"],["/page/11/index.html","70a2c1b76b8e98a3da498f391b2ca0fe"],["/page/12/index.html","bdcf28204f458f762107626d387a8769"],["/page/13/index.html","389bf507d1c499a2a2f722642b1d019f"],["/page/14/index.html","097d4671a1316f1197a8c524b524a799"],["/page/15/index.html","36dd4ffba637ce2eebd419cdd73cddaf"],["/page/16/index.html","096886882c0382026f89ceaa16035878"],["/page/17/index.html","4d3fa02a8c23d0ddbb53328779643950"],["/page/18/index.html","04dbc106b33e858f8f333ca7085a9caa"],["/page/19/index.html","b021e20f7c8fbdbbd57afa5d4b4f9ba3"],["/page/2/index.html","b76bc7555e3f17065fc8bdafcb205f8a"],["/page/20/index.html","84ba6d817457d8fb1fae54a417204c37"],["/page/3/index.html","a147d9fa1023595e9901d1515c10fe06"],["/page/4/index.html","2dbcc6d748523d5d2097200df428951f"],["/page/5/index.html","ad184d045e6113d3c8daf08d2a919703"],["/page/6/index.html","e451fc109be7d7488ffb8cea329bae83"],["/page/7/index.html","724e6484692d3fdbb89c032346c2ae16"],["/page/8/index.html","b2edf99c1a98d3d1532989914102576b"],["/page/9/index.html","1098d85d2ff2cafc853328df2d077227"],["/resume/index.html","b1d9ff5210a15a382b48a5c9c9fa6136"],["/schedule/index.html","1bb33139d2e43c8c5acf621a6cf1f374"],["/sitemap/index.html","d991e0d790a5681de36786e45577c517"],["/sw-register.js","c0067920e460a42d6e762f1a17023cf0"],["/tags/AI/index.html","2830316b554ab07126209caaf3735448"],["/tags/BT/index.html","41bb202063cc01a14ae4aae54346405f"],["/tags/BaiduNetdisk/index.html","4586a40fe649424b6819e061b72ba270"],["/tags/Bootstrap5/index.html","c2da476e2810027c7bbb0933ab46177d"],["/tags/CSS3/index.html","d4f6340767b3713aaec4528c26daa604"],["/tags/Electron/index.html","94a75b6e6075e091d42ee1802e5e6f76"],["/tags/ElementUI/index.html","db6ce03c535f40a791cdfebff3459477"],["/tags/Flutter/index.html","d86db63a7ebdb890e631cd8972ca9ce9"],["/tags/GAN/index.html","285abe71561d7b6af93cf57390a9e725"],["/tags/GUI/index.html","6c140d4f2f463450babb1aeed6af2dc4"],["/tags/Git/index.html","9e09407f1368bed092b3ff87112df6cf"],["/tags/JavaScript/index.html","16f4d84d23cb1cdf89265490575f0c62"],["/tags/Keras/index.html","5c8cdbc8d3b806160946c817e28ab068"],["/tags/Linux/index.html","0bc3ccfb5da4611d89fd76c0ded8b146"],["/tags/ML/index.html","a832e45f69e3a94e3486cca4f40ee9ec"],["/tags/NLP学习/index.html","9dbf17f18f97735a8dcfebb0877a06a5"],["/tags/Nginx/index.html","cbbd094cd868197e63ff76c5f6c1e255"],["/tags/Obsidian/index.html","b3fabcec789d557ef5bf99496287758d"],["/tags/Qt/index.html","e294708c96e4f2c5c565648cfddfc15a"],["/tags/RSS/index.html","a881d1535aba630e3f834bb2208ba7e4"],["/tags/SSL/index.html","f8eebcc7cf4380d289c572d28d5bf34e"],["/tags/Scrapy/index.html","6b2280e2857111ae19b31ef9b42c62e1"],["/tags/Web/index.html","9a8191ad8a02e740df45c5c1bb8b798b"],["/tags/algorithm/index.html","049062048ed49928503bcd8a6d2964f7"],["/tags/bison/index.html","888b91201c96b52a6b9f41e5a6e9d213"],["/tags/bomb-lab/index.html","3d7d95b91567f98b6990328e68aea26c"],["/tags/c/index.html","b4bfaf18de18ee92afa9dbb357b66b90"],["/tags/cheerio/index.html","5c41d4d5399fc40dd2db759c156ad5f2"],["/tags/codewars/index.html","a07c50fb0cc4ef0df538fffacbfde993"],["/tags/compile/index.html","775a72bd6cdc667786be4f6c1cd52533"],["/tags/compiler/index.html","29f8d8ca1e5ca54ca08490b03af8851d"],["/tags/course/index.html","93cddf5186f7760c502456a3cbe6c490"],["/tags/crypto/index.html","bbb60a606eeb2089b30fed69eca6a660"],["/tags/csapp/index.html","c05f46d9d1d49daedf584a48b2688e38"],["/tags/css/index.html","65f5fb2e05c57cd6c073e42c09f9e6d1"],["/tags/data-structure/index.html","2f663f16b775eba520fd29b74a5b5364"],["/tags/database/index.html","44b3c11a0d4b4dd5b643ccb6a7ee75ec"],["/tags/deep-learning/index.html","48fae5ee65d52799b62b412bc5c22fe0"],["/tags/django/index.html","46ae119fddda6c159e9737376378e17f"],["/tags/dwm/index.html","dd488a47ac871baa8f73b0f41b8c5fd5"],["/tags/exercise/index.html","f09d9c03b7de9bf48f3e8fe70ad1ad29"],["/tags/flask/index.html","56d49e0645f653c2fb990d4767b41383"],["/tags/flex/index.html","2a28e4be44f8d278cade53a7545a80b8"],["/tags/front/index.html","ea262e6d7547db68921ab0a839648cd4"],["/tags/gcc/index.html","6dc6e427b7104213ec69d1c8e1eedd16"],["/tags/gdb/index.html","175c85565a4e96f8c627f9caf115e2e4"],["/tags/github-profile/index.html","bdd154f8d1b8dd58fc1855b2bfebeb35"],["/tags/github/index.html","b099b198087e55e908cb2fb75e304721"],["/tags/graphviz/index.html","761e1aa73b54934b150925eeb6b88f84"],["/tags/grid/index.html","afb283ac384591dc2c5e1766391d8e0c"],["/tags/html/index.html","132182111811d697b0dd2966c9c97f82"],["/tags/i3wm/index.html","86e08163fd9ea429a17d2fbe1a782a99"],["/tags/index.html","c86b5269e4210898330f7555c144ff24"],["/tags/issue/index.html","6fbeedd7cd42e147f6190a92f10fd449"],["/tags/jQuery/index.html","0c0c1ff9361be2470a75fe361d17d26f"],["/tags/java/index.html","da0e905f95a5c57ebbe3dd5af4ddd4d3"],["/tags/js/index.html","c2e47ba8f779d0f79cfc94d4e20c60a0"],["/tags/latex/index.html","59d9763ad9ca6a3efdc437b0d6a9b91f"],["/tags/leetcode/index.html","b65a976aed91419dc3e488fdeaddaaa7"],["/tags/lex/index.html","c5c67ed8de36bf537ae1a27f1dfed4fa"],["/tags/material/index.html","154b1f76ab209f29d150b24d4c605719"],["/tags/music-player/index.html","be6b3008f0065518f1334afc8a8b0e3a"],["/tags/nodejs/index.html","5f691ca9a824b977f761edd946a2eaeb"],["/tags/noj/index.html","bde187491015bdd62afd97e77a044ee8"],["/tags/opencv/index.html","2e0fa8a43a46aac8a90c9846259f11ed"],["/tags/overleaf/index.html","903a9cf6bf4b64ef66d5ade23d5822ab"],["/tags/pandas/index.html","b9186b13df67fbaf8b73dce4e5500637"],["/tags/premiere-pro/index.html","eb296fbe579a8be83203f7940b94b462"],["/tags/proxy/index.html","ff8c7538ec5500c8fda451b8ec405f59"],["/tags/pygame/index.html","993d5131083a3f51fe5da0911d81f844"],["/tags/python/index.html","a9c303c68879025272046f3e061aea1c"],["/tags/pytorch/index.html","842c74d503638ca4614b5e20034db01e"],["/tags/reading/index.html","594e186d162168d83d50f486e20822b6"],["/tags/request/index.html","d1519b5fa9b6ebe74d457bfe7ce9c21c"],["/tags/requests/index.html","6462c54820a10c99ffcde4025f6541b6"],["/tags/security/index.html","e4701120595640bf0b900d961d3b7c5f"],["/tags/shell/index.html","16126c991ff2e0707bfc4e6b3a6eb554"],["/tags/sign-in/index.html","cf6bfa39376fd8f6a74bc7437cb713be"],["/tags/socket/index.html","b2648d1863085eddf247aa2c575c7084"],["/tags/spider/index.html","2542b0c49c41bbba1118da09ae306832"],["/tags/splash/index.html","ba1e24f00ee620ccb951dc1c3db9cc31"],["/tags/superagent/index.html","262c8b4982b993287ea0326208f36abb"],["/tags/tensorlow/index.html","b45b3d14b36409ae7f432b9ad4181dfd"],["/tags/tex/index.html","cc91677958388556b144fe66b4e7602c"],["/tags/threading/index.html","b0434f5a7a5838e13309fa71ede24811"],["/tags/tkinter/index.html","2cc132ca24f9d1a4828655ee675f8b62"],["/tags/torrent/index.html","49c7551f1f744fcd9c13b4b40d08e981"],["/tags/tutorial/index.html","97c1b021896504e50ea73147b1308831"],["/tags/typora/index.html","90d9da605110097d9912d2d42e24090f"],["/tags/uniapp/index.html","b3a029379a2a619471cac96b87580e85"],["/tags/vite/index.html","0a2dad224063c33fbb216e5a0681eadc"],["/tags/vue-element-template/index.html","8f3770dc66f2c9ee584aab29466cc0b8"],["/tags/vue/index.html","36f306e0c8266062c88459d03d4d3ccd"],["/tags/vue2/index.html","89e32c0174224e865ccdfde996095cab"],["/tags/vue3-x/index.html","85fbb984aa607fb4d0838778941ffa92"],["/tags/wechat/index.html","493a908a8a061129ad819fe9e3940d34"],["/tags/wm/index.html","03c13ee9dd6825d23fba4cc2b6b614c7"],["/tags/wordpress/index.html","16e61880354ad85e31da27400cb2ee6e"],["/tags/workflow/index.html","c291797aff15f99363e36caf55409d87"],["/tags/xpath/index.html","02303fe55845294ab67472eccff914bb"],["/tags/yacc/index.html","c022283495b39fc7fe116bc719c81e5b"],["/tags/zsh/index.html","790b722da0b0dfee0e4912e7ac1d4e4a"],["/tags/七牛云/index.html","e863c81e8ce0723d4c9ed6bcd38a8e87"],["/tags/函数/index.html","1414ef96214783e24d308dbc8f2d421f"],["/tags/剪辑/index.html","dfc768734716ae88368859b2e51174e5"],["/tags/存储/index.html","0dcb5a5b86b3c6529ea6c01f6e97825a"],["/tags/实战/index.html","8c83bb430e6794064c341445813a8e76"],["/tags/建站/index.html","3345800207f34c1b1cb2e82269f55a35"],["/tags/微信小程序/index.html","d34fef9fabc2c0bcdd535549fb9db2bf"],["/tags/指针/index.html","f63de6117e53f8a3641be72a8a2cee8a"],["/tags/汇编/index.html","a32cea090b86d2f25c6aa2ce5acf13e6"],["/tags/爬虫/index.html","8b4a063c95b77372ef4d34bf44d0909b"],["/tags/算法/index.html","007863a0bd5331daf31ef1d6aaa611e3"],["/tags/编译原理/index.html","e6f48903b89fff7405bff3441b75451a"],["/tags/获取地理位置/index.html","05f5f68fe4ed0d05845e675ee3712f21"]];
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
