/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","b286647f3eb717afe8f5763b6b1a3853"],["/2021/04/20/稀疏矩阵/index.html","db987d376375b8847632dd18f2a1b15d"],["/2021/04/23/广义表简介/index.html","f1be208362bcf2466a7b4d3b5fd3f951"],["/2021/04/29/关于指针和函数/index.html","80386490705edf057f61a1b8d3e8c04d"],["/2021/05/10/哈夫曼编-译码/index.html","b0b55d4abd90cf7de37d8f679cbd38b6"],["/2021/05/17/数据结构noj_2/index.html","3b35b63a439ced9b96fe26b372f0a85a"],["/2021/05/30/数据结构试验/index.html","70934550c667f1ec3f67726359609d32"],["/2021/06/12/数据结构noj-3/index.html","f8aade2135743f0498122e24227f3c17"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","7dd5d3811196f74c37c6e49de4f0ffae"],["/2021/07/08/课程资源分享/index.html","6c95eb3907d9a22086d33a0f55923132"],["/2021/07/20/Scrapy-下载图片-文件/index.html","4093a98dda4269c271c775a131ef18e4"],["/2021/07/21/Scrapy-动态网页爬取/index.html","c7bb2145e2c20868a160ac148f845b2b"],["/2021/07/21/疫情打卡/index.html","076c5452cdeb8d6a96187ff723547f93"],["/2021/07/29/Scrapy代理设置/index.html","89d7d55eda5ab89a6e05b34950f1e7c7"],["/2021/07/29/数据库认识/index.html","0291606b117f5ac539b002cb27474823"],["/2021/07/31/Python多线程学习/index.html","b6ab4ae3ebbcb5c7dd6ee9aaacb19ca0"],["/2021/07/31/tkinter-requests练习/index.html","75cb0492a0c53d890f9984a868da449f"],["/2021/08/10/Git学习/index.html","fd30759eab4cad8269ecfa8c485da4ee"],["/2021/08/15/pygame实践-1/index.html","de98ed29570a6a69ec2d800f77c4c4a8"],["/2021/09/06/微信小程序开发/index.html","5d85a16d747af35bd9baa3bc29260598"],["/2021/09/21/命令集-1/index.html","78bee9ca32685e0b1695d3662ae7613b"],["/2021/09/21/命令集-2/index.html","40cde96f121aeaf30b93f7f13ba4c90a"],["/2021/09/21/命令集-3/index.html","631f35fb4f7697c5c5f2bd45b399b16a"],["/2021/09/21/命令集-4/index.html","228a927e4f6a260170bd9380ab2264d2"],["/2021/10/03/socket学习/index.html","ed076fef2c2fe600a5355a918910839a"],["/2021/10/10/dwm入门/index.html","4ca5515b1abf1092c0868271cb295941"],["/2021/10/10/安装ohmyzsh并配置/index.html","d588fb49409723de5db787f166da9802"],["/2021/10/20/css学习/index.html","30f797a4584ebe2c95aa0c8ab1fe75a6"],["/2021/10/20/wm入坑/index.html","5110bcf38b11fa22212dda4aff1d45a3"],["/2021/11/03/微信小程序学习/index.html","66f2fdfa44d359a119bcf7e22bb4a95f"],["/2021/11/04/css揭秘/index.html","cedd36d6f4ffcbfd0eb5f6641e7060ff"],["/2021/11/05/css-练习/index.html","c3762f04ac353ff3eb054a59ea847ad8"],["/2021/11/21/命令集-5/index.html","db9ab959673c4500a73938d4e83c5e46"],["/2021/11/21/命令集-6/index.html","9ba753599dc1cbcb82ca21818d99d8e6"],["/2021/11/21/命令集-7/index.html","fc715b2db9621dcd9d86b77207b9263e"],["/2021/12/01/搭建wordpress/index.html","5fd24b9f893714931a16eeef7ac44643"],["/2021/12/08/python操作百度网盘/index.html","52ddfeb01b788f37616d20ceed85e5a8"],["/2021/12/14/js爬虫/index.html","a42a4c45b1ac4a28f968df3dd620438c"],["/2021/12/25/为网站申请ssl证书/index.html","17290552ce65f0a24881a132df2fd29f"],["/2021/12/29/使用七牛云为网站提供服务/index.html","18d6c81ca07f393a783014fdf7d90867"],["/2021/12/30/jQurey继续学习/index.html","7d52ad00223587b116728dd649a4fa0d"],["/2021/12/30/jquery学习/index.html","41331fc9b3ed6283936341f5087128a1"],["/2021/12/31/vue学习/index.html","38b0f5271d2554a2b5c32c7846112ea4"],["/2022/01/02/疫情自动打卡/index.html","4545c2e57327b2653aa55a4494d433cb"],["/2022/01/03/javaweb初体验/index.html","0be37c93eaeaf3e5605aa182072fd091"],["/2022/01/04/codewars练习/index.html","f39521680803b61135cfc969c591c0b1"],["/2022/01/05/Spring学习/index.html","f44b73048445ae5b0c527611eafaa48b"],["/2022/01/05/vue实战/index.html","a11e70af86387959008c53cba86cea0f"],["/2022/01/08/gdb-gcc学习/index.html","27008c7e12b42b1753251b3c9ba11066"],["/2022/01/11/python-opencv学习/index.html","73f07b65f543c50cd99f9cb7998fe312"],["/2022/01/12/汇编实战/index.html","20775a62807caa89837d01dc06f8a3fa"],["/2022/01/17/pandas学习/index.html","3bc430b2df2eb816bff68cc1f95cf5c7"],["/2022/01/19/可视化图的工具/index.html","43a0d4b4ea997c409d230dbf4435e7f4"],["/2022/01/19/机器学习入门/index.html","9444c98be4b79bef915171d96ac9f7e4"],["/2022/01/20/cousera-ML学习/index.html","09582f9000e78e43a485687e1a731383"],["/2022/01/30/typora解绑后出现问题/index.html","1a0408925026ab318452510c5c9ab4b7"],["/2022/02/03/NLP学习/index.html","111357ceabf6e46c236aee1eec63f1b3"],["/2022/02/04/Web漏洞学习/index.html","3b916efc2e02cd0f25528d94c2e2fbb9"],["/2022/02/04/pyqt学习/index.html","e74c5c5e027bafe0de9c4c351444d694"],["/2022/02/04/python爬虫/index.html","a11b6e80da422c08c63d4c3c8c9f2ac8"],["/2022/02/18/Electron学习/index.html","9d28d16a8a6e246c5830a1f0593e3caa"],["/2022/02/22/疫情填报字段解析/index.html","5e9bb0ea467c685f496d1683164b3c04"],["/2022/02/24/Bomb-lab实验/index.html","dff80e845107e34ff549129fc417d850"],["/2022/03/05/nginx学习/index.html","fd72cd74ecbd9aaf47e89a4b1b665582"],["/2022/03/09/汇编原理课程学习/index.html","6aa93403cfbc2293b4be501c3dffde71"],["/2022/03/11/Keras学习/index.html","32d4ed51a3bbefaf0d21b57bccd07b19"],["/2022/04/01/graphviz学习/index.html","db2da25c1c4f835748706edfeb59bbf6"],["/2022/04/07/django学习/index.html","254c910977bcb706f63c87ab5eec3984"],["/2022/04/11/密码破解学习/index.html","8ce3d2de02f3dae1027c0413ccc854ff"],["/2022/04/12/flex-bison学习/index.html","b1b7df08fcfc6570a0e513328fdc6e0a"],["/2022/04/15/pytorch学习/index.html","85e6dc8861d9887b7ab58f58f94c29f3"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","e8ac28d26362a273f2dfc527374994c1"],["/2022/04/23/写一个音乐播放器/index.html","201ebc42ff574510312b8c50deac1ac3"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","6c17633737161fb3666f6406c4730eef"],["/2022/04/30/GAN学习/index.html","0560905e9de77b5d657ec31ab9cb8f04"],["/2022/05/02/html精学/index.html","2199300d1b8e2c250df5057ddb1a188b"],["/2022/05/06/write-a-compiler-by-yourself/index.html","3f59072ed3ea261f357480667e415b7e"],["/2022/05/30/acwj-01/index.html","0486bc0f2fafb3a0029865beeb538b17"],["/2022/06/14/animeGAN/index.html","2b79959b632f4515cd2cc036ee619990"],["/2022/07/09/c-与算法学习/index.html","1a8db4d541afb1b8d61d17e4d71203ab"],["/2022/09/19/flask学习/index.html","7995f610497b26147b7400b2d9f8df4e"],["/2022/09/22/cs224w学习/index.html","d48b251c8239171a8bdbe69b2f7993a6"],["/2022/09/28/记录一次wp重装/index.html","725adfe0545e106fb2cf0de549cf5c48"],["/2022/10/01/Obsidian学习/index.html","a48f4f1d4d9f94b046f61f5150f01536"],["/2022/10/08/vue-element-template实战/index.html","1f6caffa606b8c79e68312958ae82063"],["/2022/10/25/vue网上商城项目/index.html","28a5a6a15d4a04a934f7ad0ddbbb02f4"],["/2022/11/11/leetcode刷题记录/index.html","2e64be3a01591ed08d240da35bcd931a"],["/2022/11/11/使用overleaf优雅地写文章/index.html","88d48e408de08326e4dec40b20b682cf"],["/2022/11/22/磁力链接与RSS订阅/index.html","01702a56be87a64800d18fb32440926d"],["/2022/12/11/uniapp申请获取地理位置/index.html","9f5be9f7ac432c13f753c2ae5c3806b5"],["/2022/12/26/pr剪辑学习/index.html","242f91b755aa409efefa596405f9f8d7"],["/2022/12/27/css中的flex和grid布局/index.html","ae627175cb5488fbf73820abb96f25a1"],["/2022/12/28/Flutter学习/index.html","8645b9eee3f34708e1cc16660f00ff09"],["/2023/01/01/美化github首页/index.html","cd381a5d5cdfcefb0e0b5926073b02c2"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","8bf39e48059e5a24218352477a783a45"],["/2023/01/04/构建微信快捷发布文章工具/index.html","3310f18350543c286c925b9d6723ae81"],["/2023/01/14/dart学习/index.html","fcee003541e2f4e74e5ab7273b61cc9e"],["/2023/01/23/闲置服务器BT下载影视/index.html","5d8bd6c0c5df7403238d789643a46d75"],["/2023/02/07/TotalCommander使用和学习/index.html","2ca0bad4085f7c16852774069752d489"],["/2023/02/13/docker学习/index.html","c75165266fa74d3e61cf964c62d31ac7"],["/2023/02/17/DLHLP学习/index.html","a2a459a35718fee09660f19f13edf7ab"],["/2023/02/18/学习purecss构建自己的css框架/index.html","c5c9026456c43738de4ddcf97c0f50da"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","5d97ea116374750d7d368a843846313c"],["/2023/03/05/STL学习/index.html","be9dfd7a83c4e32462a022def0d5f273"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","d167a58230a838be48885e646f11327b"],["/2023/03/23/实战写浏览器插件/index.html","23b3e408946470c10a3e8b3d3021eb90"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","bb21a91bd1df45e2c92e66613ecbbe3a"],["/about/index.html","a2a1ef8856a92c3775d82ff81caabaa3"],["/archives/2021/04/index.html","6e1d735bf18f7c6aee023459f4639307"],["/archives/2021/05/index.html","951453a693c22d2b1d8bf67143ad9f8a"],["/archives/2021/06/index.html","ebd7abaea2c3c835ba49ec5261112ebd"],["/archives/2021/07/index.html","3ffdc9542c072879704ef3d47425056c"],["/archives/2021/08/index.html","1f6d898707c911df0abd33bccd792d67"],["/archives/2021/09/index.html","7933071c301f3ebf192b0e65cfdc00ad"],["/archives/2021/10/index.html","8dedd838d4a9e981267320ba5f2ac260"],["/archives/2021/11/index.html","fcaa1428a01489b070457fb63a42edd2"],["/archives/2021/12/index.html","f2343dcc5f3aebf6dd8bc3ba17c55848"],["/archives/2021/index.html","df39df8711977754f5c8b228b49b3687"],["/archives/2022/01/index.html","39d80441f65fdca663b5fca6574e99c8"],["/archives/2022/02/index.html","809b5e837549cbd2bb896e02ab3ad3d5"],["/archives/2022/03/index.html","c4bd829f7e493aa1898d531a06d87d6a"],["/archives/2022/04/index.html","67470060516c933c1e9f9589280d709f"],["/archives/2022/05/index.html","3cb7eb8aa6a73c7e1c441f0589836bc4"],["/archives/2022/06/index.html","58f3f2582a0b9f320f3678b4d0da30f4"],["/archives/2022/07/index.html","28fe1a6b6cdcdeb2e7512de591b5eaa3"],["/archives/2022/09/index.html","c0e7a9c58e8f47f57ec1f2474f7c0042"],["/archives/2022/10/index.html","d7237bc6123778724cba445f4920bb5c"],["/archives/2022/11/index.html","097a58e3a311f082b2bb7d33110935f0"],["/archives/2022/12/index.html","9789e189f1146c76f4ce9d0df720d56d"],["/archives/2022/index.html","1994ecb6a732aca939770981ec8457d5"],["/archives/2023/01/index.html","2b1695c22574489c0a8a9471268c1498"],["/archives/2023/02/index.html","fb42e68674e17c04dc58122f2898cd7c"],["/archives/2023/03/index.html","dc466dc5d81b311a12cf704bda132353"],["/archives/2023/04/index.html","26e8b8c8d1508f72481638870ebb734c"],["/archives/2023/index.html","359058443f91f53959d0cb21ed0befe0"],["/archives/index.html","c8a6af1a8280a16bcccfb3248f835d10"],["/archives/page/2/index.html","0ca5b1889296bf89899d40f06b0cc3f8"],["/archives/page/3/index.html","ed6c76d4a0654be103949d7f297e1bc6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","5bd9bfa80edd98335b6d652a35686d10"],["/categories/Linux-study/index.html","5d18ef69f7e8c51e81de12f816f14dbb"],["/categories/ML/index.html","055f7f8b3981a6e3d75c7de492a020ad"],["/categories/Nginx/index.html","81389d19b16583436d5156286ece38e3"],["/categories/Spring/index.html","53b6fd0b101e5acae55fb329efc0578a"],["/categories/course/index.html","48aa7c2559b0864318a5f96b4d65ca4f"],["/categories/django/index.html","be4df035a68e8e28d2b43b12b6d0d1d3"],["/categories/fun/index.html","7453e21652da151b2b4e8eb5d6f6e942"],["/categories/gcc/gdb/index.html","e7f1d3146c906597c7c8fc9cfadd9d47"],["/categories/gcc/index.html","069808f65e0feac55692bb869f6177f9"],["/categories/index.html","515d7c733da9a0aed1c946198ff5cdfb"],["/categories/java/index.html","0af5f988a2442326d2ae6bc6e3695646"],["/categories/latex/index.html","d1dda7c519650addd5c91f0e48d39922"],["/categories/python/index.html","278c806f40a15e191be7c2aa871e64ed"],["/categories/study/index.html","cec00b1eea56d9dad229ff6ce0f84e90"],["/categories/vue/index.html","38b723bba01c1b8e844e54fd5a6e0519"],["/categories/误区/index.html","1ceceecabcc3a87fd2a1b445454cbabd"],["/commonweal/index.html","c4310e4c377b2f1444c8d4a86d8895a5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","297d0b2e8a44562596ce67ec4877b065"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","e9a0a69de99522205c82df7637826216"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","5892eaf359110871b43e909d71f0aaf7"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","9c382fec42405f9b0bec35ce1748701b"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","83cd413bdec54d4552ec79af414d8b6c"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","a3955033fb31f00a9cbad1020b061087"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","c3ef287f0ae9bafc6a60e33fda165f63"],["/page/11/index.html","912a41eff5eca9e7eaf927bf9c30ad2a"],["/page/12/index.html","d2bdbd82c2d46f6676330e78498503c9"],["/page/13/index.html","eea1ff4abe0589007fa61401f59ea95e"],["/page/14/index.html","5e6143246048363d6f18089403eed2a7"],["/page/15/index.html","c9175274c4df5eb12b3a92e6f095270e"],["/page/16/index.html","44bae571ac602c0e324d4b7463bb8de1"],["/page/17/index.html","5e128a52bccdfd29bb6e0ac39fcea5f2"],["/page/18/index.html","4b2d7f2471554d5e04dc7bcbcf3659d2"],["/page/19/index.html","30bb31bc06dea7d7323fb32bee5fddd1"],["/page/2/index.html","a2260d24af25a2b5cb5cc907f26f7636"],["/page/20/index.html","e333c788a2b714736f2863a1e0bb487a"],["/page/21/index.html","a2d5f8614ae09e4d49f83c378e03c1e0"],["/page/22/index.html","9ff6cf7827af1e55651bb2c66af9b3b5"],["/page/3/index.html","1fc7efb80174a46a7757e0a8e25e22af"],["/page/4/index.html","a0c4f9b9e359cd830b2e640845a41164"],["/page/5/index.html","8df7b4df386997322df759e4f621dab1"],["/page/6/index.html","fe61faa92d47d49bf93e9f23051b8cf5"],["/page/7/index.html","b4358aa179d25f379e33f31fa5991786"],["/page/8/index.html","6890d74b1ce42a36f053596e9d9cf709"],["/page/9/index.html","3ab4da8130179d1c810bb6619d754bd2"],["/resume/index.html","17ee70ceffd52f2e661b92cb993a58c9"],["/schedule/index.html","0015e491e03c6cf4563a28dfb98d06ce"],["/sitemap/index.html","ea37cfae0c1d8f3bd2bf9cec8644f94d"],["/sw-register.js","de023c469060cf3dff479db4544e6aed"],["/tags/AI/index.html","4b4d8c1ab69a62fb892ed11c90e7c17d"],["/tags/BT/index.html","df6d227d31477d097cf1e390168708e6"],["/tags/BaiduNetdisk/index.html","fac2fd4caa7fb32b5f9214b055296d5c"],["/tags/Bootstrap5/index.html","455c4da33f6d3c2df7433ff99acba356"],["/tags/CSS3/index.html","3bfd071d2e28f65f0fc5b18f48b02b1c"],["/tags/Centos/index.html","320e137e58ef211485d46ca0de8639e0"],["/tags/Electron/index.html","633dcb85ac8393b4919e18cae7af9ad9"],["/tags/ElementUI/index.html","d00f2d3e63b10458348742d3b26c6e80"],["/tags/Flutter/index.html","21ba686baa7d4196154d79d12fe585cd"],["/tags/GAN/index.html","c8c65f5f843a9c82f276e6f3b528d66a"],["/tags/GUI/index.html","88cebe1ac45579be82993ca79d3f02ec"],["/tags/Git/index.html","1f57fe4ab2c09c13ccf7e83936fa0f07"],["/tags/JavaScript/index.html","ae76e3b393abc71ca5f6b28f9aa62aa3"],["/tags/Keras/index.html","18c322e8e807a7e5d0bab4affd3c6669"],["/tags/Linux/index.html","90b52882e17c532529006d0540f65a1a"],["/tags/ML/index.html","07d4e139d51946f716cf6c2d10a7d684"],["/tags/NLP学习/index.html","0307d9d51708d70dde972c50988d0500"],["/tags/Nginx/index.html","fd346c48a9d644346231b8117a44d749"],["/tags/OSS存储/index.html","dbe51fbe8a64b582876780718b7efdaa"],["/tags/Obsidian/index.html","c41563ef6d1e0d87f389a0462206ebd2"],["/tags/Qt/index.html","e329995d533d1a313bbaf71cbebaee95"],["/tags/RSS/index.html","710cd703e341871b42f0c2ca181d8772"],["/tags/SSL/index.html","0f9d738868f975581cb662eed53fd721"],["/tags/Scrapy/index.html","e6a82398eceb064304f1c8ec94f5587e"],["/tags/Speech/index.html","4d67269de753e398f409186d5ce7f122"],["/tags/TotalCommander/index.html","88fc54a7be9ddf4d387b364e16fc18a3"],["/tags/Web/index.html","cdbad3de66093e1ba1c81c357f8d1d83"],["/tags/algorithm/index.html","643586dc0364cd8202a848e50c5cf6e2"],["/tags/bison/index.html","7c16aa3acbef6f798f178ef16656c58a"],["/tags/bomb-lab/index.html","5936cab04e4fd9ace228316da06ffa1a"],["/tags/c/index.html","453167416182512d9390dd73087fae0c"],["/tags/cheerio/index.html","375b4861561f27a769f2f68f34faa1a4"],["/tags/codewars/index.html","69f4d3818ff2b84f1e59cb348e41833e"],["/tags/compile/index.html","94db289a82835deee07ec945d869129c"],["/tags/compiler/index.html","fe7f2dca2943459371735c617bf7e999"],["/tags/cors/index.html","117326793a8ab5132aac578dda188286"],["/tags/course/index.html","f26f4fa15782efd63b3ff0295bdf97e2"],["/tags/cpp/index.html","5bc8ce45b16172ea2994ef752bf5453e"],["/tags/crypto/index.html","fe70fb96a29cc3057ecd6a85cf128b1f"],["/tags/csapp/index.html","a91434cfde0ae37e4871ad67b94e79b5"],["/tags/csp/index.html","67089368bb5397e680be6fefe2bfb4e0"],["/tags/css/index.html","067c2a67244643cc7e6267d21dd2fd20"],["/tags/dart/index.html","b75121c6ac14a63563ab16dd2eb06180"],["/tags/data-structure/index.html","be549d1e358ac59733ed3819af51e10c"],["/tags/database/index.html","76e51c8d3b38b34cd8880242f74e5e48"],["/tags/deep-learning/index.html","07ec0b9116ea4eda0c93382a99c8b81f"],["/tags/django/index.html","0b748f45aa56852cc388ee242964a426"],["/tags/docker/index.html","4917226fa11e32c36c2eb1b99656dddb"],["/tags/dwm/index.html","e9ca69eebfee1f0ca4e53f6050d7f057"],["/tags/exercise/index.html","7ab0147f5869b878040d5820d14d7f17"],["/tags/filebrowser/index.html","a4634a1fc8361e81c0b20d7da85f6910"],["/tags/flask/index.html","5b86f2ec4048951ef5ace1dc251792ee"],["/tags/flex/index.html","b1540e516286afad6a917af595e08124"],["/tags/front/index.html","34f21bf13fb0fa6dfd7195074f5c4892"],["/tags/gcc/index.html","f154cfb94236a80aab6ff246b22219f5"],["/tags/gdb/index.html","d6d6bfefb02fdfea41a961a8a39af1b2"],["/tags/github-profile/index.html","f262749122ce21abd67a495c84b0dd0f"],["/tags/github/index.html","1a523dda890bad2b76245b1714cfa86d"],["/tags/graphviz/index.html","c3b0eb94950ed1ecad2b2a975fb409c2"],["/tags/grid/index.html","93d044778141dbc8b897f4e31c3298ac"],["/tags/html/index.html","a8762e5aa1583da247f17451e302c5b2"],["/tags/i3wm/index.html","263b2e4f58ee53d541735e4d09581b70"],["/tags/index.html","42e9120fe11b3aefc09f350aa62d3b83"],["/tags/issue/index.html","3e8b23c31ec24cf19f31d48ced75241b"],["/tags/jQuery/index.html","d91d796194d4ced892eb0a53ed0cbd64"],["/tags/java/index.html","26c3c649480a15649008de4b2fe8c657"],["/tags/js/index.html","46552f45ff44bde5acb6a11214a87d7a"],["/tags/latex/index.html","10a584ed37f3762d2fb22ddf408f16a6"],["/tags/leetcode/index.html","63ee077994f9d021cce24e4c40ff9748"],["/tags/lex/index.html","94eefdfe44e6b75e6d56f7b86a27fa5d"],["/tags/material/index.html","505d486003fce2b437e96dd4a482d8c5"],["/tags/music-player/index.html","54ea5b58d5f57bd03293adb76b83bf22"],["/tags/nodejs/index.html","93633f2d83fd6b03af9d169594aba74b"],["/tags/noj/index.html","9f3830416d7277eedd23f3540d9e75da"],["/tags/opencv/index.html","1ccf68ba6fb00d2738bf0ed5ef674457"],["/tags/overleaf/index.html","b0c695867e2db254eb59763af6d61e29"],["/tags/pandas/index.html","58322567f340811d7e80ece29c70a4e2"],["/tags/premiere-pro/index.html","f04b33d78fe5fb16216a340218bebc26"],["/tags/proxy/index.html","8f3167df13c6bbba28e9f419498a1917"],["/tags/pure-css/index.html","8f14f8f49327f67bbc6137861da79a30"],["/tags/pygame/index.html","16799acbd938c99663bbbc52ef435909"],["/tags/python/index.html","360de30b7375068ccafaf36234e8f1b1"],["/tags/pytorch/index.html","65abe817a287fdbdc3fa389c948cd5fd"],["/tags/reading/index.html","b2240e0e5e0988338fb07a14a147c22d"],["/tags/request/index.html","bcf179e8582f13452d0f7a680c12e6e3"],["/tags/requests/index.html","5bd2cafbc2edd867d2e1bd323f5d090d"],["/tags/security/index.html","85b4e2e78fde7d2202b76c7912f3bbb9"],["/tags/shell/index.html","027d4057372f8cda96673f7631a6eec3"],["/tags/sign-in/index.html","b72b84c521b9593496fbdfb96ac026a5"],["/tags/socket/index.html","2573baf0ff231ebe411f3130df03fc74"],["/tags/spider/index.html","681e02452fa579edce20cdcdf4b27007"],["/tags/splash/index.html","d0c4552803e4f22d76cb06c2a2a0d6b9"],["/tags/stl/index.html","96bd1eaf9dbf8c8aab06e6d2882ff8e6"],["/tags/sumatra/index.html","7ec30c4e837905732c9bb13956a064b2"],["/tags/superagent/index.html","9a784183a6db5f524360bd3f28be27f9"],["/tags/tensorlow/index.html","78baa3b1e13180aa05a4085e369a3c52"],["/tags/tex/index.html","ab8ecf263d7dcc83b23e3b094785463a"],["/tags/threading/index.html","4e4433ecfc5811f094c1e5eb7c9eb480"],["/tags/tkinter/index.html","3939c0ada0a5035d20b69ff5a14be787"],["/tags/torrent/index.html","3622403d7291d090fb9ff3b36027ce5c"],["/tags/tutorial/index.html","fb1b5c8f10d36149db0e5fbbdb025d2d"],["/tags/typora/index.html","8e4b7eb0da0ba27ccd98de9a229dcb54"],["/tags/uniapp/index.html","dfe4c63f591d9f4bfd88ef80c9a20038"],["/tags/vite/index.html","fae5f251c41a1cedc2dab1a8936ec91c"],["/tags/vscode/index.html","95945d000a73a19e5f1e819d4b138a1b"],["/tags/vue-element-template/index.html","13305f86bf8f4c7fccd9ed0bdbc27558"],["/tags/vue/index.html","a43e67d1994e1162559cfe15b3de1655"],["/tags/vue2/index.html","2539027c129b1cfad8e699679aad9295"],["/tags/vue3-x/index.html","5360be3226fd32f329863d23ffc1710f"],["/tags/wechat/index.html","f8a2d496c933325800d5e7de306fdc34"],["/tags/wm/index.html","4d104b07bb0fcfefa5a4c1cb4b6a00f1"],["/tags/wordpress/index.html","0a6d72bb94866db7d0d5412716af60f7"],["/tags/workflow/index.html","8e1698e562b1d51cd86c2d301dd1294c"],["/tags/xpath/index.html","d82093b44c457e8cc69279ffbc429890"],["/tags/yacc/index.html","9444493fbcfafd6e412c078d324b5805"],["/tags/zsh/index.html","c08fbb3669e3dc4eded64547c2866b5a"],["/tags/七牛云/index.html","452f85d7304f8f027a7e41798c4f7996"],["/tags/函数/index.html","de52d8b93c617be398ee3051d4e4fca5"],["/tags/剪辑/index.html","962f136cdbe72f1d94ae8fda50f1392e"],["/tags/存储/index.html","ac2e66a062677e4055256cfa7722afd2"],["/tags/实战/index.html","69d008c3491a0e7eb58db97bafd9be3e"],["/tags/工具使用/index.html","ca71cad08943112b45b7f24fc0da7a0d"],["/tags/建站/index.html","aba1625d12b42ad1157a267272f69c5c"],["/tags/微信小程序/index.html","eae55c16fc8784b9240aacc243866405"],["/tags/指针/index.html","19dbbf908b81b3c2a3e7f0a6fbe622bd"],["/tags/效率提升/index.html","41a5077a53062599e4a84baca37d12d2"],["/tags/汇编/index.html","51f167d426d2694f61854e08ffec125a"],["/tags/油猴脚本/index.html","835fd4b0afc480a19d0d183ef06fa8df"],["/tags/浏览器/index.html","4c27054241d66f537d162e97376631ab"],["/tags/爬虫/index.html","1ab9604e98a6ffc64bb573ac1d605714"],["/tags/算法/index.html","6ebea4258757ba25067af2ac33cf7d3d"],["/tags/编译原理/index.html","092c40d645042832a60876f1fd7e2d45"],["/tags/获取地理位置/index.html","eb76ac16bc2c1d54d528efea834bc082"]];
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
