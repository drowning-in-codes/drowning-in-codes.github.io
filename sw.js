/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","fb0795ab6e47f5042a4878ddca30050f"],["/2021/04/20/稀疏矩阵/index.html","dc9cd13a764ab421f93c01fe9da71443"],["/2021/04/23/广义表简介/index.html","aa4e94875f1bd477ba4266d5a7ab59b2"],["/2021/04/29/关于指针和函数/index.html","f1a620f08e6771bbe7ff0b5db9ed5939"],["/2021/05/10/哈夫曼编-译码/index.html","01e4b6dce212bd1531dae01321ff43b3"],["/2021/05/17/数据结构noj_2/index.html","51ef134856987a09ed9acf5f97511e3d"],["/2021/05/30/数据结构试验/index.html","4b7c6a6abe2b5f36ff8c903c68801cea"],["/2021/06/12/数据结构noj-3/index.html","42ad052918b84a3264f68e1043384841"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","1fe0dd5032be40870311cd8839de459d"],["/2021/07/08/课程资源分享/index.html","9e9a5462fa9ebcc95d55f451fa419282"],["/2021/07/20/Scrapy-下载图片-文件/index.html","5455b6d106916c4e9400061d39e13881"],["/2021/07/21/Scrapy-动态网页爬取/index.html","4ae7001bfecd52d65d8aa17572da0a06"],["/2021/07/21/疫情打卡/index.html","d6ffbbc6477224561c4ae4d4514f3fb0"],["/2021/07/29/Scrapy代理设置/index.html","e728fc0fa801a4e2d6ed1da1c4ad8129"],["/2021/07/29/数据库认识/index.html","e93151e6c223ae3a2beca8eee885e623"],["/2021/07/31/Python多线程学习/index.html","8634908dcc7244712f7dfacad356a54f"],["/2021/07/31/tkinter-requests练习/index.html","de6657a039aea22c182563ac178e1cf6"],["/2021/08/10/Git学习/index.html","936769ed18378199462fae9d905cc688"],["/2021/08/15/pygame实践-1/index.html","5b79e8745383ec063ac4ffafa1c3bc28"],["/2021/09/06/微信小程序开发/index.html","3256db36866765a8e4a6e0cb666417ca"],["/2021/09/21/命令集-1/index.html","32e42cece29b73f0907c6c13768f3278"],["/2021/09/21/命令集-2/index.html","0317547f94d95eee9972dee3cfef6faf"],["/2021/09/21/命令集-3/index.html","c8f4be1849c556222272ed780e204686"],["/2021/09/21/命令集-4/index.html","2d2012b2db9b9bc1daa4cb19c5a81593"],["/2021/10/03/socket学习/index.html","6f8332759d016a0a33691902818bea0e"],["/2021/10/10/dwm入门/index.html","18842ebfbe5db3427c542afa790586a1"],["/2021/10/10/安装ohmyzsh并配置/index.html","19ada5014bd1b5d1c9a49b403700f27e"],["/2021/10/20/css学习/index.html","b3ee3199be208d1b1df8abb1684c0813"],["/2021/10/20/wm入坑/index.html","6928932f105ebc8112a091cbb9f7f89d"],["/2021/11/03/微信小程序学习/index.html","7b52b62f26a97bea2066783c9ec40dd9"],["/2021/11/04/css揭秘/index.html","22f0e777db89da7558ec136cd7994575"],["/2021/11/05/css-练习/index.html","263022b0f08d3dad42be263be43851d7"],["/2021/11/21/命令集-5/index.html","561f1a5b119c93f74ab9a6d8900e5224"],["/2021/11/21/命令集-6/index.html","faa85f8acb2438a664566df70309b37d"],["/2021/11/21/命令集-7/index.html","3b8026d7f4c7863fd8f22058c7379729"],["/2021/12/01/搭建wordpress/index.html","4b22329c7e1ce2b10f9d3bcfe8b0dcd3"],["/2021/12/08/python操作百度网盘/index.html","d06a3575ae8cc7b46ae57d3bbb106c6f"],["/2021/12/14/js爬虫/index.html","447cc25c888868add1085f7a3994f4ef"],["/2021/12/25/为网站申请ssl证书/index.html","143460934b5bf0c1cf5122f82b0414aa"],["/2021/12/29/使用七牛云为网站提供服务/index.html","51de500236febce7d228de702ca8babc"],["/2021/12/30/jQurey继续学习/index.html","c57eb42c92bb639dee496d8e2d57184d"],["/2021/12/30/jquery学习/index.html","cd0046594f16df552980626bbc4cf46e"],["/2021/12/31/vue学习/index.html","54ee92a912222c2dbc7f35f25310d85e"],["/2022/01/02/疫情自动打卡/index.html","36dd1ed13278aa6cf10d949ca6ab2af9"],["/2022/01/03/javaweb初体验/index.html","d29069f782a9e3589e979b4f84caaadc"],["/2022/01/04/codewars练习/index.html","906700df0df99877ea5069375e11d1ce"],["/2022/01/05/Spring学习/index.html","ed9e34201ee9a826ed7e80f1742e943e"],["/2022/01/05/vue实战/index.html","6eeca70d6b468cd2c724da9079a70e8a"],["/2022/01/08/gdb-gcc学习/index.html","4fd57961c0b332363047a457d934a515"],["/2022/01/11/python-opencv学习/index.html","8601de74060f77bc4bc8769fb8039b15"],["/2022/01/12/汇编实战/index.html","8b6aaac2dd46d0a4694a0a2a2c5196fc"],["/2022/01/17/pandas学习/index.html","b3348c0718eb3664ba7fd7969baf452d"],["/2022/01/19/可视化图的工具/index.html","135078e2485c9bf7b4aaca9e75355137"],["/2022/01/19/机器学习入门/index.html","4be2adff7e467becb402319683515b96"],["/2022/01/20/cousera-ML学习/index.html","9b6058fbc4c570b1ec8669c9ed72ac64"],["/2022/01/30/typora解绑后出现问题/index.html","d88d0a376cdc7b755a24598b8f1b5b62"],["/2022/02/03/NLP学习/index.html","e01364fd9ea5698732d0d44b3b0e0ce4"],["/2022/02/04/Web漏洞学习/index.html","48fa1cc30b8f4feb15e10aad0220ff90"],["/2022/02/04/pyqt学习/index.html","f1163e6cda28c9ac3233171ea1d2d99e"],["/2022/02/04/python爬虫/index.html","e3dc573c8eb59b4b682fadc9bb5f89f3"],["/2022/02/18/Electron学习/index.html","c7c2856d5039e7b57dfc3022f354eac5"],["/2022/02/22/疫情填报字段解析/index.html","7a39d25f5257f44fe5546cc9f0fea622"],["/2022/02/24/Bomb-lab实验/index.html","686dcc8b0c877115983964b890b197b3"],["/2022/03/05/nginx学习/index.html","27e14c1e7d5616d0f23624daa4b1a922"],["/2022/03/09/汇编原理课程学习/index.html","f89185339dbb7a98d17375da85bbd447"],["/2022/03/11/Keras学习/index.html","73231d77c14fe99a2075499869799dcc"],["/2022/04/01/graphviz学习/index.html","65ba2360c290a8d236456f582dbac7b7"],["/2022/04/07/django学习/index.html","cd6255d55d9476d9feb8468f78b5d20c"],["/2022/04/11/密码破解学习/index.html","a4b43977190c1de76ec3ebcc85cc32e6"],["/2022/04/12/flex-bison学习/index.html","00d850a3a4e974c2494915bda6a75ca5"],["/2022/04/15/pytorch学习/index.html","496b2b3aa2fdc1cadd02807b412b19ec"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","ed25ba285d9175955f845f4f112f93c2"],["/2022/04/23/写一个音乐播放器/index.html","74ff5dc8e8b1f69a2cd48d0e2208cfe6"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","8397577bb8833a1baa45bd2136500c17"],["/2022/04/30/GAN学习/index.html","a0409793b4c2a772e1733178fd7fc5b8"],["/2022/05/02/html精学/index.html","626a58b5913ed7f2163fdbdb3bd49b13"],["/2022/05/06/write-a-compiler-by-yourself/index.html","fab02688080c70454f796715891ccda3"],["/2022/05/30/acwj-01/index.html","48e7bd1ad3c7ee791bca45eae55dcb87"],["/2022/06/14/animeGAN/index.html","bc35e22e90f0dea4eb920084687b0460"],["/2022/07/09/c-与算法学习/index.html","4d60ac207da6f250e9727bc7fe3ce86b"],["/2022/09/19/flask学习/index.html","9c6148dfb07619a593c022e349bd0d7d"],["/2022/09/22/cs224w学习/index.html","bea3fbdacee86635ca358a20942b4411"],["/2022/09/28/记录一次wp重装/index.html","9f161a8a960a958483309ad3bce6cdd9"],["/2022/10/01/Obsidian学习/index.html","e057aea1a978a06fd3bd686ce1bba36c"],["/2022/10/08/vue-element-template实战/index.html","769286c498a8ba803139c3bba20dad44"],["/2022/10/25/vue网上商城项目/index.html","40b8b0bcf89989561512c2954e2a0ad8"],["/2022/11/11/leetcode刷题记录/index.html","863de82e43d4b504d1d967ad7fea22c6"],["/2022/11/11/使用overleaf优雅地写文章/index.html","5dcf83bbb3b9126d7f33944f05927ab9"],["/2022/11/22/磁力链接与RSS订阅/index.html","7f497c842113633477f68a9d83949966"],["/2022/12/11/uniapp申请获取地理位置/index.html","3723cf5c3b11d9967776462375b30410"],["/2022/12/26/pr剪辑学习/index.html","fad6892a1b974c2d08cc7d4fea5d7f53"],["/2022/12/27/css中的flex和grid布局/index.html","d2f5067b20a6b697e2118c446caf7f4f"],["/2022/12/28/Flutter学习/index.html","170a954c7a8daa2228a59be6526b8a13"],["/2023/01/01/美化github首页/index.html","977cc84d6ede25f2ab8c6356a6dc2eb5"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","cf7797d94ede3bc40fc924c7dc81404d"],["/2023/01/04/构建微信快捷发布文章工具/index.html","0e72b03c62b55661dbbd29f0237e5d66"],["/2023/01/14/dart学习/index.html","519e9dd70a75600d75437b2406f2af00"],["/about/index.html","36998c0cc75826dd591ac3ad304afe24"],["/archives/2021/04/index.html","da83899e77d5c600e5a4a35ae295cc8d"],["/archives/2021/05/index.html","037040a7f2eb1e4c959bc85265866225"],["/archives/2021/06/index.html","de86fae62afeaabff0fb71c5469a78ad"],["/archives/2021/07/index.html","abd49a1c59d695c054a1edebf2756efa"],["/archives/2021/08/index.html","8eb2f35e4a0854c58c16a55b83d0f503"],["/archives/2021/09/index.html","620a35f36a28d629fc7755359d2f317f"],["/archives/2021/10/index.html","ce89387812488e68841f55fd3a2da290"],["/archives/2021/11/index.html","7102d4f80c80386cb149281a5b096e84"],["/archives/2021/12/index.html","5ea7ef9eef0843770d3feabc983e8a0c"],["/archives/2021/index.html","810f4b0c445e46fbb78dca0581e9271a"],["/archives/2022/01/index.html","9df90202c9b575f87f72183b0da00468"],["/archives/2022/02/index.html","dfb5555d06bc6420a61b9ba351d10b12"],["/archives/2022/03/index.html","ec1cb1f41597c70e961279926527f213"],["/archives/2022/04/index.html","f04b7eab839b182036de7e44d89286ee"],["/archives/2022/05/index.html","a7bda2250f17de870fd1a6bfe4f950f9"],["/archives/2022/06/index.html","678269c53cf9a7b426f1f99351bac77a"],["/archives/2022/07/index.html","3e06bfe76a873f439efe2e8ae42e85b3"],["/archives/2022/09/index.html","a480c46aa5591610bad012de93baac57"],["/archives/2022/10/index.html","f977f4bbc0c32d54a2915e660c7e125a"],["/archives/2022/11/index.html","0e3ca6878c202aca84ad3408559d8813"],["/archives/2022/12/index.html","4d87948a783bf19ee05a9751d78187ca"],["/archives/2022/index.html","b5535a8423e6b711e7e9ad99bd8d9f93"],["/archives/2023/01/index.html","ec206a8cf0252a5ee88e6e63bf801bc4"],["/archives/2023/index.html","d026de18350f8042823db35e7eeed9e1"],["/archives/index.html","6157b01f460843600e435e13ce2f11e7"],["/archives/page/2/index.html","d9ce0488f72d6ccae505298033ee691b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","2c6e3436fdabcff433f55c7a5c0b6cc1"],["/categories/ML/index.html","d0570df373dbb7bebf8538097625ef49"],["/categories/Nginx/index.html","1ffff0e402639a75823cd093d442cb95"],["/categories/Spring/index.html","b1702d68156c464c39ee4670275a23ad"],["/categories/course/index.html","ce19a74006175ee8ed1963c42472a3b4"],["/categories/django/index.html","f327466917dcad5dce0708a1fa4ad158"],["/categories/fun/index.html","6700ac2f43c50ac3ea09253afd8329a6"],["/categories/gcc/gdb/index.html","2ef74baeb57abc205fc8f7280c903acb"],["/categories/gcc/index.html","234cc9598e6b8962e0bc97f5bb8039a0"],["/categories/index.html","f64209fa1f3d1acb3d314a5c8e5c76bb"],["/categories/java/index.html","d584a2625ee9d810f23993cc81c519d1"],["/categories/python/index.html","3d70a0699f71c58fd3cfb1336417b6ab"],["/categories/study/index.html","7858f27aff255b6c5bf9a006a6f2cd90"],["/categories/vue/index.html","8a2459425d962651e76ef3f92cca79dd"],["/categories/误区/index.html","06389365fa62fedae00b06584f7b56a7"],["/commonweal/index.html","6057d7c36c9c89f08bb1c3a2af934073"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8e535254f6d5361c3c6729dc8c9726c6"],["/home/index.html","0de739489235139c4583ff621b0440b9"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","60345769676ff7fdfab9b8c25070bdc9"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","a0fd3997dd7a1a21362a65045f134c19"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","375572454057f8aab2249cb4aa39c2f8"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3818272b3fb15317a3497875644f572e"],["/page/11/index.html","4924f05c2d311595f580c92a8f0a52cd"],["/page/12/index.html","efe5a6d33583027bcff26147bb758af6"],["/page/13/index.html","d93a578c50c437d6eabdca0165c64895"],["/page/14/index.html","4ab4caf149493448251c9a9d8a67c395"],["/page/15/index.html","9b7f43bb7789346b84b1aa2454b6bc4a"],["/page/16/index.html","a74e6a9dfddcdcd2917c67b5dcc44f5a"],["/page/17/index.html","21664fd868300415a96ad294e7ff49c2"],["/page/18/index.html","7b9548eba38a182df9c8aa73040b2024"],["/page/19/index.html","cb82cb03a6c54e61a52e7a9fd59a7435"],["/page/2/index.html","8438d7edaac8cfd6b5da32c74230611e"],["/page/20/index.html","dd2a0e61e7004ea171fb24a501a40d44"],["/page/3/index.html","96163fe0bd7febd75c40638b0d01b896"],["/page/4/index.html","6d86209e50bf676e20117dd3ee3fee7d"],["/page/5/index.html","ed80e1559993547eabae0e42219926cc"],["/page/6/index.html","c667a36ea0c8b917872a52dd56a69a56"],["/page/7/index.html","0b5f1ef6d2f7eb316bf3bf3fe42b83e1"],["/page/8/index.html","693f1a885655bad6296fb2527b736f13"],["/page/9/index.html","a27715c579897b1cd62ca2adedda15c1"],["/resume/index.html","c94b38917b5737266f3a693f8fce2d91"],["/schedule/index.html","201de5d2516be70c65f3024c395d41ff"],["/sitemap/index.html","04328737c2e7259528741b09c79f4f1b"],["/sw-register.js","10e1de33f691158aa58fd00b3043358a"],["/tags/AI/index.html","93eb9f8cb8e297f62c3587b1b7357e91"],["/tags/BT/index.html","3a46f2b633f74ddf06ad8fc07815ed94"],["/tags/BaiduNetdisk/index.html","d01f266f37acbeb0bf8c315a37a2ab1e"],["/tags/Bootstrap5/index.html","0876de1d8d93dd53ba98e2f5d42a672d"],["/tags/CSS3/index.html","0b874319505274f486373e2c95926706"],["/tags/Electron/index.html","e3923e2aea6f17381e3f31fa43cc1d59"],["/tags/ElementUI/index.html","f32bc84eaa4170375716a9c13931e78a"],["/tags/Flutter/index.html","9c1947dea1555f12813c7470467ed902"],["/tags/GAN/index.html","26ca6145d93fd83056f15758142c6f20"],["/tags/GUI/index.html","5918122604aca50b43d2eb5fbab3657f"],["/tags/Git/index.html","bc86262845c3779a6f4b3908d106a860"],["/tags/JavaScript/index.html","4d9fa981190b2221d7a79ec63225075e"],["/tags/Keras/index.html","358477ddb49d8fe78ac4cd66109ac49e"],["/tags/Linux/index.html","e6cad65540cbd2a1655c9f24b8860938"],["/tags/ML/index.html","3723dd151fe85bfd8b377dc5842da1dc"],["/tags/NLP学习/index.html","b93c6ac690b920176766ceb7d3924e95"],["/tags/Nginx/index.html","0b32f5e55e9b81180e28733ac758e004"],["/tags/Obsidian/index.html","28bebf682ee839ea2febde860ab2788b"],["/tags/Qt/index.html","37d7c85cece59c6ce7ed8dd81e9bde5d"],["/tags/RSS/index.html","032b3477eaed03e1b7f29a33476b3648"],["/tags/SSL/index.html","b00057b4ff480e247d41ac21cab4fffc"],["/tags/Scrapy/index.html","710ab5749df985f47eb15bfd08519b5f"],["/tags/Web/index.html","a6bd7d233e9df092fc84e16ca794ff21"],["/tags/algorithm/index.html","7a6a24fac5a3bf88e64e9e81814ea408"],["/tags/bison/index.html","14e23293878e8c694ad31fe071e98b8c"],["/tags/bomb-lab/index.html","1d42845a09452f8ca2b4126bc0784154"],["/tags/c/index.html","7ba952c8ab52519d5fc78c800857c7c1"],["/tags/cheerio/index.html","285d3768c2f29c61db75a3f938391a27"],["/tags/codewars/index.html","016a7af57df49bf854b1bdbd6842226b"],["/tags/compile/index.html","9d430b517edc9fb7a48dfb2cfa8452da"],["/tags/compiler/index.html","407122c61bf07b42575bf5ed8b3c0e1a"],["/tags/course/index.html","faeda345c0a7136406f57ae23b55ce4e"],["/tags/crypto/index.html","6658108b326dc6c4575cf1ff873f9bb6"],["/tags/csapp/index.html","9bdc8a9db8bf15034f3a26a74e273e8b"],["/tags/css/index.html","e5b8f5e82af493313fdf72b5e39e39a9"],["/tags/dart/index.html","27108d65ba0726d3f8b3e0d2fae92666"],["/tags/data-structure/index.html","6195eedda40145bd5baa30e4e6258060"],["/tags/database/index.html","33111e15080800319e658cdb9fd4d64e"],["/tags/deep-learning/index.html","ac595e356a6acb31c3b06cc1c5f69502"],["/tags/django/index.html","79df0b5031da9f39b11340e27629c9c0"],["/tags/dwm/index.html","238a91b2c81550dd3ca0acdb7b3c62cc"],["/tags/exercise/index.html","1d6048a9682d81edcafc693521f1dcb0"],["/tags/flask/index.html","252c601179f20917d9675f2c917c9dbe"],["/tags/flex/index.html","b4ce82d4b382dc555232cdece3f4707e"],["/tags/front/index.html","3b8cedceb0a90421e562a3962f27ff1e"],["/tags/gcc/index.html","48ec95adcfcb04e25c787589c568ec7e"],["/tags/gdb/index.html","eb4aa26e7d5f406813a18d3adb66f06c"],["/tags/github-profile/index.html","5f7fa305ed23e918f4feb1229a68360b"],["/tags/github/index.html","05259f2f771d952f9ab2856bd67b9218"],["/tags/graphviz/index.html","6d009c78a664703e9c89a8fbb4395d9c"],["/tags/grid/index.html","51b05b132c968b4f4a049be036afc9ee"],["/tags/html/index.html","0edff8c98797b5dfadf3e67bbd2f5f7c"],["/tags/i3wm/index.html","420efaf99846b09742167994d82e0f91"],["/tags/index.html","2b4ce0669adbb77025a2009c1a6be0c5"],["/tags/issue/index.html","87b941d93900e8beeb0dbbd9b33c0d55"],["/tags/jQuery/index.html","79d2fcb77e45dd924a24bcc3939dc7e6"],["/tags/java/index.html","244740826f81dd8a0b11d7196bdff637"],["/tags/js/index.html","c9984a03f74a50343510ffa531a6e1cc"],["/tags/latex/index.html","9349b0ee32a6d6e72705ea1ede3f3e61"],["/tags/leetcode/index.html","a6bf076c08e80c3e981a5fe39f150977"],["/tags/lex/index.html","aee193d897c3c6bdcc639c621bb45340"],["/tags/material/index.html","fd8700a073d9cbe997e9aebdc54f166a"],["/tags/music-player/index.html","61d3ba4f795260d3109edbb134c4ec50"],["/tags/nodejs/index.html","2533af156fac09a9bc9777daa08b4d08"],["/tags/noj/index.html","8b511ec08a4e70713545b68fe3e74dde"],["/tags/opencv/index.html","4d8113bd72cd7a92133dc7a7b30ce5ea"],["/tags/overleaf/index.html","e667162e227e2dac862561969d2738be"],["/tags/pandas/index.html","5a4c5401d0c3baf0dc7366f7e3bebd27"],["/tags/premiere-pro/index.html","f23127011cb4d8459e02e89325e7badc"],["/tags/proxy/index.html","2ff5c46d4b2100f8ee24112d0ffdbbe5"],["/tags/pygame/index.html","1bee3036d43b419f970a729baf1dda6b"],["/tags/python/index.html","3e738434455532f31d7989246daf2431"],["/tags/pytorch/index.html","bdb9ac32b8704aa7ae7d05d283225fcd"],["/tags/reading/index.html","f7f7f9a903c33fe7c3416d185886aea5"],["/tags/request/index.html","b69530bae37f8b22070a69cffffb61b4"],["/tags/requests/index.html","eb605ddf20710969d5af8ee13aac386b"],["/tags/security/index.html","195d3c4c89f3130c16e83ae54674c605"],["/tags/shell/index.html","68a1bd54bf901df32bdea6e6d812578b"],["/tags/sign-in/index.html","1ba3a18b6a57eae96937c7607886956f"],["/tags/socket/index.html","8375862e6bbf96f428db745ee72a8b9d"],["/tags/spider/index.html","a44b49c9fd15ee21f9f2cec8cfa7be14"],["/tags/splash/index.html","55b7fb3b971ad798b86a43ff3b46961e"],["/tags/superagent/index.html","3e7a48ad15e80ae90a8262734bd7ddca"],["/tags/tensorlow/index.html","721a444701d6e3c40f119fce86684c85"],["/tags/tex/index.html","67157910ea6f071b65be4f1d7a3667ff"],["/tags/threading/index.html","fc587fc6ff7dabadb2fa3fab7e8bf32b"],["/tags/tkinter/index.html","04df8899b0c7a5b0d8b4163e50c31e21"],["/tags/torrent/index.html","36b49cf6704432c0cbb06fb4a4f7ff15"],["/tags/tutorial/index.html","5346d92f52aabb981298c5aa3b93f7e3"],["/tags/typora/index.html","eed38f6c803623395627f968b7f30b5b"],["/tags/uniapp/index.html","51a5589977803f534051bcc5a8b512d9"],["/tags/vite/index.html","a9d0d9cbadecf90177c820ffc9cbf4d5"],["/tags/vue-element-template/index.html","05f6d823b871e9b34342402b87895896"],["/tags/vue/index.html","17cba710989518a596daeb037b48c13b"],["/tags/vue2/index.html","31fb10a0d58f72899519a7ac44ab04ec"],["/tags/vue3-x/index.html","12f6cd43a6416fbc48d710e422f2cdd6"],["/tags/wechat/index.html","10968a0f408cb55162d6bb9c7fcd6c37"],["/tags/wm/index.html","7f1928ad8c2d19263c02d93c4daae414"],["/tags/wordpress/index.html","1119fc8cf648ce00dcb4c342ecc9f439"],["/tags/workflow/index.html","74f95848982f441ea18be74a3360c2ab"],["/tags/xpath/index.html","b241d56c0b5a7a02d528beb19850df3b"],["/tags/yacc/index.html","25e6d76fe1f7c85b983e762fab743cc5"],["/tags/zsh/index.html","2835682b1b54c0a065ca5da4043196e9"],["/tags/七牛云/index.html","874933f97d8a19e608bd59d3379b6f95"],["/tags/函数/index.html","48c472dd6140a316c59f22133f47731c"],["/tags/剪辑/index.html","f56c0c6c24659bacb07db818e387158d"],["/tags/存储/index.html","98a44a590b4b813725d19ae2891f8fdf"],["/tags/实战/index.html","42acc534b736257ca0472ee6208d0817"],["/tags/建站/index.html","274b1ef50450836cb7d20ddf77479a50"],["/tags/微信小程序/index.html","b07529b409f2d6e6ef99748b4e40adf7"],["/tags/指针/index.html","bd188bfa7d3ccfbfca2116571962045c"],["/tags/汇编/index.html","8e345e3604144eec668faac43ca210b2"],["/tags/爬虫/index.html","5def047c04e8412882c528894ad1919a"],["/tags/算法/index.html","36740061a0b41094f612478d5f8d8b7c"],["/tags/编译原理/index.html","829284894191f4b8c2c24e7e613e368d"],["/tags/获取地理位置/index.html","434ad573c4092688285ef28ba54b71d8"]];
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
