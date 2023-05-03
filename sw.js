/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","94705c086e3fb846186808fa6b8f40f4"],["/2021/04/20/稀疏矩阵/index.html","1e2ebcd9b2afbdba299e02109ed459d5"],["/2021/04/23/广义表简介/index.html","69fa770d9930334562b565be43f2d78e"],["/2021/04/29/关于指针和函数/index.html","65ac9ee4b256216221db968144abf065"],["/2021/05/10/哈夫曼编-译码/index.html","958fabeb14fbeb1d57e49170f6230bfa"],["/2021/05/17/数据结构noj_2/index.html","68543e4776d0d0938f2c8505e516e395"],["/2021/05/30/数据结构试验/index.html","5cf6584170304e8b1702efdcbcf111db"],["/2021/06/12/数据结构noj-3/index.html","340faa9468a524bb6a6b00e13db5ccff"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","cb04f323cd2b5a547233956d8b69222b"],["/2021/07/08/课程资源分享/index.html","db19c53877603b70ea6f25c707ad3565"],["/2021/07/20/Scrapy-下载图片-文件/index.html","ac3b0790f4a0c9851793e02fff27ca4f"],["/2021/07/21/Scrapy-动态网页爬取/index.html","937e2b0f2fa0ab4b69eda28b30c4559a"],["/2021/07/21/疫情打卡/index.html","54f9f1189b780253288309e4e659e434"],["/2021/07/29/Scrapy代理设置/index.html","e5feef3eb31e181f8b527dc7e200838d"],["/2021/07/29/数据库认识/index.html","905ee0dd4d559efe8c386ad2be71455c"],["/2021/07/31/Python多线程学习/index.html","80da645043c0ec1b6374d044e770ee9c"],["/2021/07/31/tkinter-requests练习/index.html","1797052efe5abae43cf134b3f761c746"],["/2021/08/10/Git学习/index.html","39e576f3c08fd3b4b8715dfcebe40466"],["/2021/08/15/pygame实践-1/index.html","56ce4f22947848ce153842f428754b55"],["/2021/09/06/微信小程序开发/index.html","f171f791d483a3b8f644022b3074c467"],["/2021/09/21/命令集-1/index.html","24c5b9b33cf54349dde75e286aad47f8"],["/2021/09/21/命令集-2/index.html","74bc07a2bd0e46e4e014784868850573"],["/2021/09/21/命令集-3/index.html","b21ae5ebddd016caa61e87d88978bf6e"],["/2021/09/21/命令集-4/index.html","e47639a64354ca61172e0eaad6eb3ec8"],["/2021/10/03/socket学习/index.html","0b15161a4120b863d797a1eed8b72d99"],["/2021/10/10/dwm入门/index.html","184e89d6e2fb388e9e326acee85a7bbe"],["/2021/10/10/安装ohmyzsh并配置/index.html","be8f6d6a9f8940352f35c02002954e3c"],["/2021/10/20/css学习/index.html","9ff21f32cf604caeaee37a7fa439ca3e"],["/2021/10/20/wm入坑/index.html","ae538ea5fc22441057c60928671ff475"],["/2021/11/03/微信小程序学习/index.html","c6a01f2c56cbcb6165de1fa7e77cc1fd"],["/2021/11/04/css揭秘/index.html","80296f8b8aa4b2323d2af89c752c1334"],["/2021/11/05/css-练习/index.html","ae226824d2a5da302ec53db67b798ef1"],["/2021/11/21/命令集-5/index.html","e09cee1f52f9c4c6f188ebc212ab89de"],["/2021/11/21/命令集-6/index.html","c0768a1b013f96e4acfce7430802d2a1"],["/2021/11/21/命令集-7/index.html","5a6635e1adb62f37228c5a26f1bb79ec"],["/2021/12/01/搭建wordpress/index.html","93544d8b0380a62632b9b1d40c4effe2"],["/2021/12/08/python操作百度网盘/index.html","0b2634321eacad606dd88a919797909f"],["/2021/12/14/js爬虫/index.html","e9e36817928966d65972cde5c4057d24"],["/2021/12/25/为网站申请ssl证书/index.html","3bda519e43ebf0f189c417ef143cf1c9"],["/2021/12/29/使用七牛云为网站提供服务/index.html","a35bc1e3949f1ac621746a758ba1b595"],["/2021/12/30/jQurey继续学习/index.html","60498644986a9e1365da552f029344ca"],["/2021/12/30/jquery学习/index.html","7b324e14b554fa74f7f288c7179fe9ca"],["/2021/12/31/vue学习/index.html","20cbb31448ae2501e1aa2a97dc8d1481"],["/2022/01/02/疫情自动打卡/index.html","586d4e9f3a3b589e042815ca8d2f667d"],["/2022/01/03/javaweb初体验/index.html","6cad2244e5bc3fecd844a68a9b96a458"],["/2022/01/04/codewars练习/index.html","b1081bf012f7025e542af4933ec1920a"],["/2022/01/05/Spring学习/index.html","b61c49c6c6d472f7f69f0db690d9688e"],["/2022/01/05/vue实战/index.html","5c08073eed835c192154c5b864d099f3"],["/2022/01/08/gdb-gcc学习/index.html","b24b5be822d6fe1b36299b623a2cbd79"],["/2022/01/11/python-opencv学习/index.html","55169911b32503903141b1801b93c080"],["/2022/01/12/汇编实战/index.html","82e9c29b20aa20d03f7f1134b9d34116"],["/2022/01/17/pandas学习/index.html","252a4e6759bcd10daaeb52e50ac35c37"],["/2022/01/19/可视化图的工具/index.html","e65393b58aedd9497ca33c7c39148fb5"],["/2022/01/19/机器学习入门/index.html","8cae2ca4b973772657a6227755c6f076"],["/2022/01/20/cousera-ML学习/index.html","dc056571ab1869a4a5412c4599b4a628"],["/2022/01/30/typora解绑后出现问题/index.html","18f33f0f3ffdddde4b4c7b8c5db173aa"],["/2022/02/03/NLP学习/index.html","76919eba1ffa5ff7ccc15dcc7f94a9bb"],["/2022/02/04/Web漏洞学习/index.html","9565a22a2e13879aeb6cfdb54f739d2c"],["/2022/02/04/pyqt学习/index.html","d4f347f36e44418fefe8dd772e2bfd1c"],["/2022/02/04/python爬虫/index.html","9e87129c3323eddc243110cf95659531"],["/2022/02/18/Electron学习/index.html","671672806724b7cb3046dc38d8272818"],["/2022/02/22/疫情填报字段解析/index.html","6be5a95729508a43977c79969ee499f1"],["/2022/02/24/Bomb-lab实验/index.html","b5e797ff9199d91184c853994b00a63e"],["/2022/03/05/nginx学习/index.html","47d7e00875897b9aed766ec98c1605ba"],["/2022/03/09/汇编原理课程学习/index.html","e62f1317ab5101f89fa0b5b258463823"],["/2022/03/11/Keras学习/index.html","6e9e1d75117fabcb1becb2fb5733c513"],["/2022/04/01/graphviz学习/index.html","abfb6046c4a14bd8422554cf406e2745"],["/2022/04/07/django学习/index.html","18c6f3abbd21ea45e90cf4e8d323af6e"],["/2022/04/11/密码破解学习/index.html","a61f225cd8301850567a43fb188f5157"],["/2022/04/12/flex-bison学习/index.html","6c000106b1847cf9fc660fe3fdc7addf"],["/2022/04/15/pytorch学习/index.html","c90235690ebbf0fe0ce485064295a66d"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","bda450f44c581a514e204b85be2f4bd3"],["/2022/04/23/写一个音乐播放器/index.html","8ea1e0c63cb41710618cd373582a26cc"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","3a908edbde1b0ae4025600b56e6b3342"],["/2022/04/30/GAN学习/index.html","472b09b73f1d75598eeb0a784f1a05e3"],["/2022/05/02/html精学/index.html","b6c02b49c7703598ac56c234d1665444"],["/2022/05/06/write-a-compiler-by-yourself/index.html","3b92f3627992d0a0a72b12293adce63b"],["/2022/05/30/acwj-01/index.html","98f03ae57c39d130784e7768aabd06b4"],["/2022/06/14/animeGAN/index.html","d28369f2f3f13504f1b475e077b76e21"],["/2022/07/09/c-与算法学习/index.html","3bb450e1f694c58670737288d5f31ec4"],["/2022/09/19/flask学习/index.html","0fac50f60f20588ef5a6731ad2bebcf3"],["/2022/09/22/cs224w学习/index.html","eabb5ed59eef15956e8d7a12973fdeff"],["/2022/09/28/记录一次wp重装/index.html","181f6dcdfcabe2b85feead363866c697"],["/2022/10/01/Obsidian学习/index.html","0b9025bf62319fd4f351ca9c43a55427"],["/2022/10/08/vue-element-template实战/index.html","b84e5d3a4e8128540a3c129a78a3c824"],["/2022/10/25/vue网上商城项目/index.html","9fdcea6e93fdf748c2366692ef0ea6eb"],["/2022/11/11/leetcode刷题记录/index.html","9a3771f7a571bc5e364df308e67118ae"],["/2022/11/11/使用overleaf优雅地写文章/index.html","d7988943bcc90142504dd79e07cdf592"],["/2022/11/22/磁力链接与RSS订阅/index.html","72dba15cb4d1c90d3d78542b148a6cc2"],["/2022/12/11/uniapp申请获取地理位置/index.html","6b53b7a3ff8690de891cffc52312427e"],["/2022/12/26/pr剪辑学习/index.html","20bbcd5c19fd4176d2b30b2b450c3135"],["/2022/12/27/css中的flex和grid布局/index.html","8af64f0b68f0d9e9f04bd0f854e18df7"],["/2022/12/28/Flutter学习/index.html","8eba0ece5010a7f1ddd12d1454b36474"],["/2023/01/01/美化github首页/index.html","2c13d3c23717c5629844ff8e410e5074"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","405dd283aa361935fb72509916078b2e"],["/2023/01/04/构建微信快捷发布文章工具/index.html","8916e2001c9318e37ff3f71879d376f2"],["/2023/01/14/dart学习/index.html","6e8be5dc00c215b169da27a77a7ac175"],["/2023/01/23/闲置服务器BT下载影视/index.html","d08ba93858bee559bfbb1613c5ab0375"],["/2023/02/07/TotalCommander使用和学习/index.html","514e000449db2ff24645ea02c2f1818e"],["/2023/02/13/docker学习/index.html","b1e9358e3a60c36c28ec4ca10d50408e"],["/2023/02/17/DLHLP学习/index.html","096c8528365786774ed9a8f3b5216ab0"],["/2023/02/18/学习purecss构建自己的css框架/index.html","43421867f186864fa69dc42e55b0a3f3"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","07e21b0a56b922aea9e69bde02834e79"],["/2023/03/05/STL学习/index.html","5033936905f76329cae9c87364287de7"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","69de59eda4618dd74f0827ef22f5f7e5"],["/2023/03/23/实战写浏览器插件/index.html","4f1697b1643043620cc965aa72548592"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","b24fb6c8b7be6d875c750bca3cc1ae0e"],["/2023/04/02/EndNote基本使用/index.html","1dad786215672bc4f82ed342ec269118"],["/2023/04/04/mne处理脑电数据基本使用/index.html","ad24732d06b7231c22bdc698424292a8"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","77f5b353023e836f4fc41c0eb5dc543f"],["/2023/05/02/python中的logging模块/index.html","b396472d0afa810e71cdcd7e75974403"],["/about/index.html","5e2a3a5d320e9f1f4001846d0e383c39"],["/archives/2021/04/index.html","c548413eef2e93f175129545ac8941cc"],["/archives/2021/05/index.html","cbe73ab5c3c496d4e754f25295c3153c"],["/archives/2021/06/index.html","b127c96e1775796a3b387c0a254b74be"],["/archives/2021/07/index.html","84890c6e1f8f03d79b6b256ceff7b095"],["/archives/2021/08/index.html","24ba98e2d4c7d040f47285864256273a"],["/archives/2021/09/index.html","7d6149f3a3b6c16c4829c598960656f4"],["/archives/2021/10/index.html","b94ddeb68f5f90e73acba7ea213dcac7"],["/archives/2021/11/index.html","bfcd952491f34910a3ca92cc46b83cc5"],["/archives/2021/12/index.html","d2f866c0aa1b47f4149f5ef775a53835"],["/archives/2021/index.html","adc0d12fab647b1bea01458eaa8d2b4d"],["/archives/2022/01/index.html","d53c790edd3e1b76d45491b9d00eb4de"],["/archives/2022/02/index.html","5b1f73f7c2c6dd8df20ff2f76cb1f1bf"],["/archives/2022/03/index.html","4ab4e1799a154f744317a0236800cb57"],["/archives/2022/04/index.html","eeaa66fdce2f9c2b59cf0350bc62d395"],["/archives/2022/05/index.html","5c83294800fa27ce37ce2ad18227c159"],["/archives/2022/06/index.html","1095743f4353c4197cd9b64455a4da93"],["/archives/2022/07/index.html","867dd5863c62eab3bb3a3073fc9b4f01"],["/archives/2022/09/index.html","7b2ee258021fdf1dbe5226d4be3c3ceb"],["/archives/2022/10/index.html","c896eac15032438a4bf2a02e300871d1"],["/archives/2022/11/index.html","d2f2424772c47f321318415bc08d6971"],["/archives/2022/12/index.html","b8ecfd55565f33844526b23e0d420eaa"],["/archives/2022/index.html","10c510498ad8090c63558831a06eccb3"],["/archives/2023/01/index.html","355426e28a41912dd8b1847a1fba08e1"],["/archives/2023/02/index.html","36f73625a98d6a597890a3d65a5a8848"],["/archives/2023/03/index.html","24ccfd687feaf38e6ebd26c9e796f67f"],["/archives/2023/04/index.html","1eecdc3a6f6d8ed070be9392c4068fc9"],["/archives/2023/05/index.html","e62b9f8b32df01c1ebd07e102d9b404f"],["/archives/2023/index.html","62020eb00fda010ab394d203a62fa59f"],["/archives/index.html","fdde30d0689ebe6c3da6aa84127190a8"],["/archives/page/2/index.html","db69aee0891345659dbd529464b7ad85"],["/archives/page/3/index.html","01fdd40881108494d1f124a667851838"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","ee3a997f9c148932c8751c2523006838"],["/categories/Linux-study/index.html","32d1f29af83c36a49af4b657712a15b0"],["/categories/ML/index.html","eef0840c44516fc043396b27a4b7d3d8"],["/categories/Nginx/index.html","9ffd61d6ca1a5d30019920c6d7521b2d"],["/categories/Spring/index.html","ce14e3432436f1853c94a47bd8acdabd"],["/categories/course/index.html","f85fbeebd4cd4040c6649f7be5fb53d5"],["/categories/django/index.html","28b9a130ebf0fbb7ea437f0203d45b13"],["/categories/fun/index.html","8a09a9ef924dc4af572d3aed79f08d70"],["/categories/gcc/gdb/index.html","bba7de981ce9e2d508ffb05710eb96c1"],["/categories/gcc/index.html","d8e98d9e929d82679b51ecba6bb877e1"],["/categories/index.html","3db474981abf404e640c504c947728a1"],["/categories/java/index.html","aba608094c549b53033171c4d1d2c90d"],["/categories/latex/index.html","44117ab5c08a306ecdf89ba73bfed26f"],["/categories/python/index.html","0d4e4a1d62b96c49f47f61c0b4d59745"],["/categories/study/index.html","606f4ffb7c188fcc6b6c8f7730cf5c34"],["/categories/vue/index.html","6d4799a4fc3845e5ec17f19da9d9518a"],["/categories/误区/index.html","e28d784b6a2a35235f44f1ebd08a3b80"],["/commonweal/index.html","a9566d1501ccfd72f2fe34ebd531a9b2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d9361643a690167a686a86861a1e8655"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","5993dc23bf23c5a931f3ccdf9a1bd823"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","9956f8fd1513d632d89f053ad75bbb2a"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","5e1b63cc8762cc2f03b1f2c27304bbbd"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","40e71743ed20c60dfaf31f7a8e7708cd"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","ff82a85ef0c558e58c6bff888f735657"],["/page/11/index.html","8d87116076dcbe5a484fefdef9c3b6cb"],["/page/12/index.html","e6c774e778e9f41c71597a179c25e1af"],["/page/13/index.html","1253421aaadefab0ff2aac8851acfcc9"],["/page/14/index.html","59ce7253af8df592f049b617c20595e6"],["/page/15/index.html","600f532900716ee4116039b6f3202de0"],["/page/16/index.html","0b0bdb03352c26851f19f47c644a5fd5"],["/page/17/index.html","321ca303c576b98b6fa249f72af71f2c"],["/page/18/index.html","89c4e401ae84e17e2942b7ca225dc6fb"],["/page/19/index.html","4ee024026ed2583e50b6745883995f7f"],["/page/2/index.html","8bc84153761ae078328989b76483b762"],["/page/20/index.html","3183f8f6217d32ab9f39ee55fcacf095"],["/page/21/index.html","ce101c8a0eac1d3dc032957f1567277e"],["/page/22/index.html","7f55c520071814b3d8f54c618cfa7d59"],["/page/23/index.html","b4014a85c6e2d02d3dc71882f2e60324"],["/page/3/index.html","d4bc17b34749625ea989baa008679db2"],["/page/4/index.html","90f5d44bdd5c279c17c6575d11567245"],["/page/5/index.html","04f972c96a073d94eb52bf3ddab364cf"],["/page/6/index.html","330909b726be1d7bc1d7eb2ac2ce3444"],["/page/7/index.html","08b31f033a8ac4faccc851552a751287"],["/page/8/index.html","93b82d3e3b0c63a494b762031519f4e9"],["/page/9/index.html","86b1037a975d7c28adf9984ca875d2b6"],["/resume/index.html","c8110a20151be9ea7717a46eee757e6d"],["/schedule/index.html","da79bfd8a4a74a72950f16f1de50abe7"],["/sitemap/index.html","81ba5a15c53b5252c140670c5d985ac9"],["/sw-register.js","80c7cf0bbfab9c8dc902edd2f44df313"],["/tags/AI/index.html","262765105d2710305365402ad68db565"],["/tags/BT/index.html","1db07d2dbe857f2e437b0af9e360fb4e"],["/tags/BaiduNetdisk/index.html","8d16cca2fee6ceb40bb652fe832bbe6b"],["/tags/Bootstrap5/index.html","da9c80824af679030862b0df71d5a496"],["/tags/CSS3/index.html","fb3c7e3cbbf52663778daafb829f8f6f"],["/tags/Centos/index.html","2da7448dc930c8408336e546a54dc1df"],["/tags/EEG/index.html","868dbd43407b227a7d13148f8dd48938"],["/tags/Electron/index.html","d9f400274b0ff52a2fb5665e8531be6b"],["/tags/ElementUI/index.html","edf3c9cdef875f4bbd71bfa41c8fee74"],["/tags/Flutter/index.html","7db0cf604af697583a1b83dad71ef6b9"],["/tags/GAN/index.html","a2cbe92e52b36134bd4681a33faad003"],["/tags/GUI/index.html","061208b7bc1cb603704164b4d8647c79"],["/tags/Git/index.html","05e3fefb76ab35eb4eef8b9c492c2975"],["/tags/JavaScript/index.html","8f987b5c15bfb4c368b572fd086e10aa"],["/tags/Keras/index.html","95f165c58c939892d144c2e35152c175"],["/tags/Linux/index.html","9b911844e864679a7f929ca8a52010a7"],["/tags/ML/index.html","9d0ee9cda661b8ef9ee1dd3501075032"],["/tags/MNE/index.html","8cdc5025f7f83f71e42444144f2248cb"],["/tags/NLP学习/index.html","ae5f18b420357438047fd0aded957192"],["/tags/Nginx/index.html","9e2c7820900251cfe6436bf4dd1f0f75"],["/tags/OSS存储/index.html","2715c5dd712ee2c473a2e90551e7d89c"],["/tags/Obsidian/index.html","9911186855b8db92d425695a11840cf1"],["/tags/Qt/index.html","be9143de95b8cfb02e4a3d72f6bf7181"],["/tags/RSS/index.html","a7261de4761bda9d093ef11c4a6bbd89"],["/tags/SSL/index.html","2e7918ded6cbbfdb62dfac392b14e2ac"],["/tags/Scrapy/index.html","3fbcc08e719fe02799c33932648858ce"],["/tags/Speech/index.html","08f213d4f056bfa2bc59a838a451de09"],["/tags/TotalCommander/index.html","d99cfd84b382e43422c1b025778f70c5"],["/tags/Web/index.html","2dbdf5142aae68441365a504c9109af5"],["/tags/algorithm/index.html","7b44f4d4842f8de63fd0127cdecae46d"],["/tags/bison/index.html","24bef0fddfc521ad3c8849f874abbc0f"],["/tags/bomb-lab/index.html","fcb9db654d3f1a48244abaff6f9c1694"],["/tags/c/index.html","7f3162d4ae9fad4c1d322439c3243598"],["/tags/cheerio/index.html","12abbbf55ab0a1d473125b94ac9a6829"],["/tags/codewars/index.html","461d87aa9ef8095943012d35030afd66"],["/tags/compile/index.html","575be52bbd13b09a2eddeb986d132060"],["/tags/compiler/index.html","dbfd3839e2309bdab64c99805a77a257"],["/tags/cors/index.html","e2b622b72ee9c89aeec776c2a1674a51"],["/tags/course/index.html","90ff9afc80ad72bcab3044d86a86e649"],["/tags/cpp/index.html","d624ac2f4b4c3bdad02e0b3ad8099df9"],["/tags/crypto/index.html","19bba3ebd04f217f32d4f5fc299a7eac"],["/tags/csapp/index.html","0414c926af155bd2ce89d06642023c6b"],["/tags/csp/index.html","4fbc5b1d90d6f8f0c62517e1106c05ea"],["/tags/css/index.html","fb29f3f74f0d4f3f9b2b2da503939f12"],["/tags/dart/index.html","0683d80b91bf8040996c947bc2868e38"],["/tags/data-structure/index.html","930dd9b4a93a3812f935c15a2b0ee0fb"],["/tags/database/index.html","babcc344619cceea017d79528e552beb"],["/tags/deep-learning/index.html","52b3b77acd90d2823e74289a429b929c"],["/tags/django/index.html","731a544df8e0c23ee426cd1eadb21754"],["/tags/docker/index.html","655a8810729f67c4e36df2d5a3640d4b"],["/tags/dwm/index.html","cd42d1e7d5a153b64618792bfb3a0629"],["/tags/exercise/index.html","bc995e8cfa69e685c0c334b20b9069eb"],["/tags/filebrowser/index.html","f6ae8fe3fc8498709d50c57c47b69c98"],["/tags/flask/index.html","a29f2f22df9089581334bdff1f676921"],["/tags/flex/index.html","366442d492d25a5a55d222d8b0303c9c"],["/tags/front/index.html","f4631af2986d69ed03442dbd22046d59"],["/tags/gcc/index.html","881b59251dd9d865a20ac06f47b3cb2d"],["/tags/gdb/index.html","9cfb1dd66e3c0460e76fc3769bb94784"],["/tags/github-profile/index.html","cbacbac013c361f9a126f8307fe9cd99"],["/tags/github/index.html","8d1cfb2205d849704ec827372a1ca2e8"],["/tags/graphviz/index.html","c9611b86a14c86bc9b1e2e1fc2b8159c"],["/tags/grid/index.html","a06f5f1f197d6d786635ba2b122f4a14"],["/tags/html/index.html","04ceed92c511cc6d5f4eb70c910bbcfd"],["/tags/i3wm/index.html","ef430db6750d4b320df7752e8663bcca"],["/tags/index.html","e4cb1d3fa0ddc009f7931974a11d2b58"],["/tags/issue/index.html","9b377e3ba5611806ebdb254a406f3116"],["/tags/jQuery/index.html","59582cb1fd043fdf0ed5be31df1d53be"],["/tags/java/index.html","a05a5a0e07a73229985e3b7c1233a326"],["/tags/js/index.html","fd7d22ecff507a8b6cd075f52545644c"],["/tags/latex/index.html","93d2381b68559e7dceacdbba79c12f6d"],["/tags/leetcode/index.html","f894424b3a2e2b40ce8a2f3e11c4ed0c"],["/tags/lex/index.html","5aba114bd951bef38142286511efb048"],["/tags/logging/index.html","999f8e30d1787a28560f9d87a2495959"],["/tags/material/index.html","880fbfdd47f0c477e2fc3fb0329b6ffe"],["/tags/music-player/index.html","e0fa3256aaa348e9e8e18c11d581ad16"],["/tags/nodejs/index.html","56efb387fed841cec9344ea7a6da087a"],["/tags/noj/index.html","0fca2c83826219e9c1a13612219801da"],["/tags/opencv/index.html","6cc79b708ac781b4cafa3f64f88a4a4a"],["/tags/overleaf/index.html","cbbb25e9889cfa332090dbcab1640028"],["/tags/pandas/index.html","0f775b5aa2407cf3fef20e799e6ecfbe"],["/tags/paper/index.html","5cb34cfcf081affdb01825158961b96a"],["/tags/premiere-pro/index.html","bde27930de6f7c7fe290b5a4e85c604b"],["/tags/proxy/index.html","3107f639408363c2223e89125a141a90"],["/tags/pure-css/index.html","e7a150943da29c96fdb21a8d10bebc03"],["/tags/pygame/index.html","cf83029661181f25df33608970701ee1"],["/tags/python/index.html","b9297cab1a96ded7d9798067e72c1a4b"],["/tags/python/page/2/index.html","44fccd0dfd6e853f25d331196a8622d1"],["/tags/pytorch/index.html","8348bfd03a9be894d39d6a0d953b1386"],["/tags/reading/index.html","005efbbd95864ba9852685212b7f3f70"],["/tags/request/index.html","dfc8d1f3f66c37ed56c769488065c812"],["/tags/requests/index.html","d1a69f6599ecd8fd61179b798785ed52"],["/tags/security/index.html","6786806fa4b39893607fe94693c6c747"],["/tags/shell/index.html","584f5d3e65032e074641eaed93145832"],["/tags/sign-in/index.html","5b5227349e9cf4dcfa73d3e8c61f92e3"],["/tags/socket/index.html","d3af7498f3e1a12120ebdcb3021d79b4"],["/tags/spider/index.html","044a6e580974e36156bc0c0b0eab6a03"],["/tags/splash/index.html","3df32c5384e6855779844267c30cd1e0"],["/tags/stl/index.html","98b26233da4b1ab8a7cd2e6bfed44e3a"],["/tags/sumatra/index.html","cb32f2469f389e66cd06945e6291e7dc"],["/tags/superagent/index.html","a9aa8e1eae05ac80098de25a6a2e91c4"],["/tags/tensorlow/index.html","9faeb86c654d4c934e2d3ea722ce6b93"],["/tags/tex/index.html","4beeb137885d6ce9485f090982c8724d"],["/tags/thesis/index.html","c083e0e18127c31c273813797d59c396"],["/tags/threading/index.html","b2bb8681f58fa0b612258412b7da050c"],["/tags/tkinter/index.html","fbf09afe1d9e169f9a069bbeaa5d7041"],["/tags/torrent/index.html","50888f68a433369efa4d5d5b43fc6386"],["/tags/tutorial/index.html","a82fd46f630ef93c37fa453156f92c36"],["/tags/typora/index.html","47ed4cf1ed087b909bc8aee54360415d"],["/tags/uniapp/index.html","3813e6b4a32ca37ba3a7b78ac9c19ffd"],["/tags/vite/index.html","bd60869fb53d968a9bdbc4d5abe6e6f5"],["/tags/vscode/index.html","bda83cac30fb81118c65ed0272253ca0"],["/tags/vue-element-template/index.html","845c48bb63a90c1c5a66819aff64f0d3"],["/tags/vue/index.html","c27f46eb3885a8f506d28b47ca947295"],["/tags/vue2/index.html","c7ed12c0fbc54bbfb3b74465c06a6566"],["/tags/vue3-x/index.html","4f8f25b9919fee3a6559dc130a9c5c04"],["/tags/wechat/index.html","c4eac5c83ea9af205279c6b2c1fcc3d7"],["/tags/wm/index.html","4182c60979a6c362083a41c1b59c917c"],["/tags/wordpress/index.html","e3b6c0e9ca0369b1a487eef6520a2299"],["/tags/workflow/index.html","32b6ccea3a4b364026ed9e5ee1485e2d"],["/tags/xpath/index.html","516db051c2113bf50328101d7d5fd8ae"],["/tags/yacc/index.html","e43051c8e0b557c81ddabe5eab70cd7b"],["/tags/zsh/index.html","6aabd6efe07f71c42bfcbce509db95e5"],["/tags/七牛云/index.html","3adac36e2f50408b6ea048438a3ef2dc"],["/tags/函数/index.html","a9d05a62c4646cf7aad33564f03dd184"],["/tags/剪辑/index.html","5f457115d42cb88e325f2c8f7db0c76e"],["/tags/存储/index.html","52fe9bb57ff10dc2ad0bc0a81cc3143b"],["/tags/实战/index.html","5190bff9e8d19aaa4454b9986c6d62a0"],["/tags/工具使用/index.html","a43ef20001f97fceed4b11f57db2f185"],["/tags/建站/index.html","2709c9cbaf51d55e8f96b1710c4ecb3d"],["/tags/微信小程序/index.html","0a061fa73320501b4e2a6080b976160d"],["/tags/指针/index.html","ff3845d8b47c60e7a5d416b910012070"],["/tags/效率提升/index.html","cd28826873ffef0d2e491a2e33e63a06"],["/tags/日志/index.html","f7da2649b5e2cdf1cd6390eb4316db40"],["/tags/汇编/index.html","8a3bb1e250b7ba0b9e4db34176e55041"],["/tags/油猴脚本/index.html","ffb23259492fe39c9b46fe97f4fe08f5"],["/tags/浏览器/index.html","3397eba617b650e9137117967eb8d31c"],["/tags/爬虫/index.html","12b76b0ed421e8ef9a116d3084b982d5"],["/tags/算法/index.html","e04340b836052307106156746be6624a"],["/tags/编译原理/index.html","8d74db611e78e762ec8c50886ea2b49e"],["/tags/获取地理位置/index.html","07da39dd6a474b88a1e7f07a4f9597d9"]];
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
