/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","2ddde2d05523d45ae0dc7ef57887be35"],["/2021/04/20/稀疏矩阵/index.html","a54e3983bbb3db8b681584ffa33ec11d"],["/2021/04/23/广义表简介/index.html","42853c7ad714098b31402b5f5e22893d"],["/2021/04/29/关于指针和函数/index.html","7792c8a669032a34d08a1692ff2a70e5"],["/2021/05/10/哈夫曼编-译码/index.html","c20d01bf547a9679544618bfde676c64"],["/2021/05/17/数据结构noj_2/index.html","142fe928ebefb7e2bdc09e99330d9c1e"],["/2021/05/30/数据结构试验/index.html","4c1a910d3b29abe63836d9f0c6527689"],["/2021/06/12/数据结构noj-3/index.html","24e9d21c2fd5054279c708d7ad97f1d7"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","8a252dd52e41a435da1f730ba2ab2b16"],["/2021/07/08/课程资源分享/index.html","d7d381adff0216557cd554a73275eb81"],["/2021/07/20/Scrapy-下载图片-文件/index.html","9d54c619de784a101277ffc2537cf0e9"],["/2021/07/21/Scrapy-动态网页爬取/index.html","923a0f2bb108241c5fa0fd24199b1b94"],["/2021/07/21/疫情打卡/index.html","6470119f67fa7af824877e61c823b02d"],["/2021/07/29/Scrapy代理设置/index.html","513d4b7ea2f159303f0ef84a42755a44"],["/2021/07/29/数据库认识/index.html","fd06f016cf0b84aafe092b6dea982279"],["/2021/07/31/Python多线程学习/index.html","a39600fc0624d9a7a77b6e649e38bb40"],["/2021/07/31/tkinter-requests练习/index.html","bc2e2999c56501da09495a80abfb1b64"],["/2021/08/10/Git学习/index.html","f01ecdf3878762c08e57c44304b12edd"],["/2021/08/15/pygame实践-1/index.html","e66bcbd9e884f2c1d4574cc598d36522"],["/2021/09/06/微信小程序开发/index.html","7c8e1b0446a2b3cb0fe331da5d66e763"],["/2021/09/21/命令集-1/index.html","93b13f4d4c0956df11290b249a08e85a"],["/2021/09/21/命令集-2/index.html","f9e31bd73f5caa644da5f1fdfe0625cd"],["/2021/09/21/命令集-3/index.html","7d82c6d4c5b9f672451ddc1f69d30886"],["/2021/09/21/命令集-4/index.html","4f2b39ad6472d6c41c272737fa753e1a"],["/2021/10/03/socket学习/index.html","fb28f35242f95f14da0aecc6e315e477"],["/2021/10/10/dwm入门/index.html","0fb550d42454935b47a6703b0861ea91"],["/2021/10/10/安装ohmyzsh并配置/index.html","90b231ff6bede9dd24279f49002d2ef8"],["/2021/10/20/css学习/index.html","b8f7ba6810957e66335950324c3a48ae"],["/2021/10/20/wm入坑/index.html","8c6b740412722c8b3be51df86710f76e"],["/2021/11/03/微信小程序学习/index.html","f184a1c5eb6364e02d51e651b0e26968"],["/2021/11/04/css揭秘/index.html","30c47237329c38aed96889cfe030a720"],["/2021/11/05/css-练习/index.html","d56494113612f3842c4b8341e4ef3544"],["/2021/11/21/命令集-5/index.html","ab54615bf25255d9c417ef434dfc0814"],["/2021/11/21/命令集-6/index.html","b03268bed1b715d2c078310fd259f7fa"],["/2021/11/21/命令集-7/index.html","6d32ca5596981d8d8968287859ceae66"],["/2021/12/01/搭建wordpress/index.html","130714dd881c9ed1e3c8ef2215c87dd5"],["/2021/12/08/python操作百度网盘/index.html","2f33b7c2b8fb237506c7a08098b43d45"],["/2021/12/14/js爬虫/index.html","10de47efedbb2da62b48f9d45ce7f61a"],["/2021/12/25/为网站申请ssl证书/index.html","1de6c228217afd2818c95797852c98cc"],["/2021/12/29/使用七牛云为网站提供服务/index.html","cf1cb4289479a55b6c883c286c17e7bc"],["/2021/12/30/jQurey继续学习/index.html","b5474eeae9225a4278b71760ee81a4bd"],["/2021/12/30/jquery学习/index.html","aa104ff94f2b38e174e55aeab6494471"],["/2021/12/31/vue学习/index.html","d0581f2162b399dc24d0e3d6fdd0ddd6"],["/2022/01/02/疫情自动打卡/index.html","b60d138abdd893fbeca2760f5f27844f"],["/2022/01/03/javaweb初体验/index.html","d874102ad48c3fb0f9f6a4b2a5333f65"],["/2022/01/04/codewars练习/index.html","67a35f7cf0f7811849d2a465ef1e6ba4"],["/2022/01/05/Spring学习/index.html","d9fdf1c6c1544afdc854e39ee3831ff7"],["/2022/01/05/vue实战/index.html","9a01c03dfa282a5b312231085ab66e72"],["/2022/01/08/gdb-gcc学习/index.html","ea1d89c93dcabfca5c4600eebf920d36"],["/2022/01/11/python-opencv学习/index.html","46c7e12817c938a8a4740f83a297cb4d"],["/2022/01/12/汇编实战/index.html","be22a1c2dadc8032d67a16d32a2f7969"],["/2022/01/17/pandas学习/index.html","71124d28ddd76f8299541f046582f5bf"],["/2022/01/19/可视化图的工具/index.html","8c6bc2ec541f967f8d15664512ec00d5"],["/2022/01/19/机器学习入门/index.html","ba573433c5430660a8ff1a3322ddd013"],["/2022/01/20/cousera-ML学习/index.html","bd106cdb7611fe8d4a678ed750c6890b"],["/2022/01/30/typora解绑后出现问题/index.html","d8099c7c2a96766620b2efacb7fbe3c6"],["/2022/02/03/NLP学习/index.html","17238b5599ff30f4562a00ebebd52aa0"],["/2022/02/04/Web漏洞学习/index.html","cfbf220138a18b40837ef536534bc462"],["/2022/02/04/pyqt学习/index.html","7e0fe289c74c5aaa1a58f4bb877903c8"],["/2022/02/04/python爬虫/index.html","17be37924ea9db52796a08b0ff312d69"],["/2022/02/18/Electron学习/index.html","2de02b51508801ec9cc00061d7b45382"],["/2022/02/22/疫情填报字段解析/index.html","d26ec69837e96a33c926245f1c251e92"],["/2022/02/24/Bomb-lab实验/index.html","512044a664ab10e49e8985212b13327b"],["/2022/03/05/nginx学习/index.html","ca31107f8651a98764f0559ce939f34a"],["/2022/03/09/汇编原理课程学习/index.html","514308dcf2f29b61fcfd6304fbcd8169"],["/2022/03/11/Keras学习/index.html","3914d8189bbdaf7be94ea116d982504d"],["/2022/04/01/graphviz学习/index.html","600f90bd9002195f34f6729db60d3f9a"],["/2022/04/07/django学习/index.html","82997a8ecf9916d3281bd44897f83972"],["/2022/04/11/密码破解学习/index.html","f4e7c571575547af8419fc04049a2e71"],["/2022/04/12/flex-bison学习/index.html","c66b39e0467396e6e1f249d008b3b33a"],["/2022/04/15/pytorch学习/index.html","dcbb1c35afec1455b43a705a5659c8d3"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","acf1068d30a6cb0196b29bcb653c4c4f"],["/2022/04/23/写一个音乐播放器/index.html","b5aa4737d7a170e6ae49b6aeafbc6366"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","479b91ac6efd7b25d265746a5b3a5bd7"],["/2022/04/30/GAN学习/index.html","3de01206884b9c4ae42f56e9a0deab9f"],["/2022/05/02/html精学/index.html","7e4caa98598cc2c54847b365d080abfe"],["/2022/05/06/write-a-compiler-by-yourself/index.html","204b110ced8d8d4deace9e14a8ec90ac"],["/2022/05/30/acwj-01/index.html","6f137b7f35caaca377cde3d30ca7c22f"],["/2022/06/14/animeGAN/index.html","2a54b2661c5d5a4d1913fe2daaa9beda"],["/2022/07/09/c-与算法学习/index.html","3345b1b5c4c26111964d213dbc4c8043"],["/2022/09/19/flask学习/index.html","721f519586bbd54f79cec3aedf8728ed"],["/2022/09/22/cs224w学习/index.html","8ecc7785c23c40965cc805692a83dcc1"],["/2022/09/28/记录一次wp重装/index.html","e63845f4791eb1e03e620c9330cd4456"],["/2022/10/01/Obsidian学习/index.html","92a15a6e3daef73f310b6f33dec5f5fc"],["/2022/10/08/vue-element-template实战/index.html","a7df28b46b2ce532baa5ecfbca3820a7"],["/2022/10/25/vue网上商城项目/index.html","d12990565c39045e6663f1a188aa2c67"],["/2022/11/11/leetcode刷题记录/index.html","9175e3e3ab141816e3001878855e3bb0"],["/2022/11/11/使用overleaf优雅地写文章/index.html","5c9f7e13add9141038e734f7ed5dd50c"],["/2022/11/22/磁力链接与RSS订阅/index.html","7e7e8a0fc1394cbbd75004bd81d2d15b"],["/2022/12/11/uniapp申请获取地理位置/index.html","a3090cc8517485f34eabb4520446b5d7"],["/2022/12/26/pr剪辑学习/index.html","da924f20dae9ee806fd36e17d3bb992f"],["/2022/12/27/css中的flex和grid布局/index.html","da25f38fd83d05f4b2194734eba8b6eb"],["/2022/12/28/Flutter学习/index.html","011697848eb4f9cfa73faf9765362608"],["/2023/01/01/美化github首页/index.html","ad02c728d2da889b424c470783aa3c99"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","47aaf15aec7737725a41f4dc11fe0335"],["/2023/01/04/构建微信快捷发布文章工具/index.html","8c8793c90d38a65d89abb14c937d717e"],["/2023/01/14/dart学习/index.html","63a3300d86c2918de19613785b08cf7d"],["/2023/01/23/闲置服务器BT下载影视/index.html","a3b3de9ec3f65810a84b413aae538ce0"],["/2023/02/07/TotalCommander使用和学习/index.html","99a99cb16fe281d82cd1a29554f55af8"],["/2023/02/13/docker学习/index.html","1be93aa4c0100798668b94830916a802"],["/2023/02/17/DLHLP学习/index.html","5284d8f89160efe69217396ffb44a400"],["/2023/02/18/学习purecss构建自己的css框架/index.html","488e84df20e09f94403f76924cbb1176"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","87e4260009c2bcc6311b8f20e72f34f0"],["/2023/03/05/STL学习/index.html","d67e17a529c157cdc63a3ae3a7dcb3f8"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","8a01087dd5d1aeb0a2776b54ec9ef642"],["/2023/03/23/实战写浏览器插件/index.html","89a5e8531b343a64c0796972571c57c1"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","6652af6dc3d30085d62c48073352c28f"],["/2023/04/02/EndNote基本使用/index.html","6cd1630292173f49202e7aa6f7e77a02"],["/2023/04/04/mne处理脑电数据基本使用/index.html","4ae91b88dab2a28c80837eed1ed1c0ef"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","f28646125941fcb7cbdd52a37cd9136c"],["/2023/05/02/python中的logging模块/index.html","03cfc6bb641fef056fde07788a21705c"],["/2023/05/07/python的特别方法与装饰器/index.html","e37e5793396e085f02277432e96692c2"],["/2023/05/20/Wox插件编写/index.html","27feb78f274f3dd1c9001c4ffdbe6632"],["/about/index.html","717be48b29dd89a3137010631668c69d"],["/archives/2021/04/index.html","8a54ff935bd57b1884c9b25e6872f508"],["/archives/2021/05/index.html","661bfe20e1faa577d5bc91d04734d96c"],["/archives/2021/06/index.html","c33f74e502ca331ffb6d9ead26ceb4d2"],["/archives/2021/07/index.html","a02914899cd33d203e49742b21afad05"],["/archives/2021/08/index.html","e884823259663874c8f7cff237d597e2"],["/archives/2021/09/index.html","cdac35db2c630f23235250290b374ff3"],["/archives/2021/10/index.html","d9571c123ceb25e1838b7a92ed55d7e3"],["/archives/2021/11/index.html","053bf0280055b9466a1b1d238e6e121e"],["/archives/2021/12/index.html","c30000c405243754e075b7bab9e9fc4c"],["/archives/2021/index.html","2084b4bb266c2c0f2b00ac7a11f0890f"],["/archives/2022/01/index.html","d62c1a44ec29ad00b03a9833c3946a08"],["/archives/2022/02/index.html","5078b3bf64b0f1b24bf1d7513031d2ad"],["/archives/2022/03/index.html","86b0ecdb126edb716705a3ff304da5ff"],["/archives/2022/04/index.html","39a52f2eebaf593302f6154d7e0faae5"],["/archives/2022/05/index.html","0259161973d5275dece44e5bbdb4cb7c"],["/archives/2022/06/index.html","4ab82c77b07e71fa232949dbd8b18c3e"],["/archives/2022/07/index.html","eac239c6b096c9301f0bc36253d8f884"],["/archives/2022/09/index.html","48602619fb1cdee9f66530591e0e4049"],["/archives/2022/10/index.html","7ac37b96145bd91ca9f98f9cfee3bdbb"],["/archives/2022/11/index.html","962186b112b63c6150be27dd1d376111"],["/archives/2022/12/index.html","4f0d14633e33c66113da71eb03942197"],["/archives/2022/index.html","1536642de11694e6608812428f6fe288"],["/archives/2023/01/index.html","024736910abdff9ff9491532d255ff1b"],["/archives/2023/02/index.html","06e67fbc84b51bb5bc9e548818e34184"],["/archives/2023/03/index.html","87f8060099db41daffa1272884b1bc8d"],["/archives/2023/04/index.html","f211f2057ffe2a851f2f8d32b541614f"],["/archives/2023/05/index.html","95ede9f479affd17e9e366f4f278fb4d"],["/archives/2023/index.html","4e3558268a6257b95b43357c238e441b"],["/archives/index.html","be858801eb054a9ded295474e545ddea"],["/archives/page/2/index.html","b59673d43a96832a083c3a9c8fef1fad"],["/archives/page/3/index.html","df617f93fb5633ba9b9dc8af9c78b063"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","084ad32f9013c7abb91d2ce7b6f7c2e6"],["/categories/Linux-study/index.html","748a1602c74f83f494b86c62a9832754"],["/categories/ML/index.html","e4aed72d9eb2bfe6348ba89e31d78453"],["/categories/Nginx/index.html","1c7be1a88dc31d72cc7514583f02e023"],["/categories/Spring/index.html","70a9eb3fd43795399edd1f7a08491ea0"],["/categories/course/index.html","c43b506b594aec923cc12492a0b0f891"],["/categories/django/index.html","3374451679b1a740d85fe5f50b9ae6a1"],["/categories/fun/index.html","54d3ec2b2a948fc46fa345858525eb92"],["/categories/gcc/gdb/index.html","4211002c111d6219588ee1a4cd79350a"],["/categories/gcc/index.html","3a863a04d5e1b830f6aa78576b5f2f91"],["/categories/index.html","326b2b581d9f772b528d2fcf9542d5aa"],["/categories/java/index.html","ca0345cad0049a5374a99fe44b31b245"],["/categories/latex/index.html","58c890c4e3d7829f11b590659fa22731"],["/categories/python/index.html","5c68e3bd01021a45e67a372505fc992c"],["/categories/study/index.html","8fac45dccffd625459e36a6791e0565b"],["/categories/vue/index.html","52bdb77ff3f2ade844ca7b2992f96cf1"],["/categories/误区/index.html","f5986435a4e428bcad2e8a46552f1d00"],["/commonweal/index.html","d8297ac151b98575087339069166645e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9207c8b0006be3bcd79f7e43952f26e4"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","333e734838b2900797ac2ef72b868df9"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","c5f3ec9c5b91dcef4fa38bb47751e159"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","4cb424250e185379d952a51f7f73d72d"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","b069b1afdb4f6505dcd4d9d8902b2145"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","8bb6b146439a784e50eeea437f4304a3"],["/page/11/index.html","2d2f1a09e7ae3dc68d4ea3f665af45b6"],["/page/12/index.html","225c5260ed0058cc8648bdee7eeede23"],["/page/13/index.html","0b3df95e4a8498630789f24691130435"],["/page/14/index.html","47844157ae87daf1c012be3f7a297938"],["/page/15/index.html","be47350d71e5fdea6c01f20dc080d568"],["/page/16/index.html","ca097e8b4bb3ebe6306a2a59d3f94182"],["/page/17/index.html","70e2fd4c165f2ab6db8e3154cae615d2"],["/page/18/index.html","5652ede276be7344b6ed45347f1668a5"],["/page/19/index.html","cb6615af370e1158a09156b28303ec7c"],["/page/2/index.html","9cd04a0cc20315f2c38570720f785e19"],["/page/20/index.html","96f6a81c08f8c69aaebf96fd904b2dc4"],["/page/21/index.html","819be6f166877ce14e862ca628ace337"],["/page/22/index.html","731c6a1e91588772f111d6f0673386c9"],["/page/23/index.html","acea89ed4f5fcd53f7c1256f345a8fdb"],["/page/3/index.html","ae389f0671fb8110230e2ba326dd0d4f"],["/page/4/index.html","9cd1b09cbd35c06523c7ce43ab291b64"],["/page/5/index.html","7fa64c8cee8e7a2a5dad28e2dc7e9974"],["/page/6/index.html","ca384b90ad66ff8870f137925523b8d6"],["/page/7/index.html","44b6118e8acf2945e26f48d671bf2831"],["/page/8/index.html","455a706bef608e7e2616de48476aefb9"],["/page/9/index.html","8d6e1cf96b84d1fb0f8025b6c585ea9e"],["/resume/index.html","c794a11f85128b410fcaf60b0a38d8fd"],["/schedule/index.html","7b66e64241bbb63492ad9e0f59276a42"],["/sitemap/index.html","ef0a768ae85281ca7b61b369c3c5f43f"],["/sw-register.js","949268b924c5c43fab67ee1ccb4539d5"],["/tags/AI/index.html","6893e2a8968f2190c0b940388292b8b6"],["/tags/BT/index.html","fef2d3117e9ce1f95fa93b0f70d940f4"],["/tags/BaiduNetdisk/index.html","29787469078bec20ab95c3ab4ff4d230"],["/tags/Bootstrap5/index.html","6374636a67083da1fe4626fbc3a9afe9"],["/tags/CSS3/index.html","63a5b08606e2a69f734913d118a77ea4"],["/tags/Centos/index.html","219baf3f3c9bd32ef24280bd8d19f739"],["/tags/EEG/index.html","411dda03ff1b9c7dc086615bc35809a3"],["/tags/Electron/index.html","98facf99bc7ea4fa1144c0a4212d2227"],["/tags/ElementUI/index.html","80289ca9a13866733ee1d9a7f487d9a4"],["/tags/Flutter/index.html","a60aaf708f589b23757314a7ed455393"],["/tags/GAN/index.html","82e8d805e7093d6f6df50ad1a8a99fbb"],["/tags/GUI/index.html","dc68019f1f77e840f767bbe0a5af0a11"],["/tags/Git/index.html","974ce6a8956b6cb918e60e1b0a00cb1d"],["/tags/JavaScript/index.html","948d9bfeffff038f33df6246060098d4"],["/tags/Keras/index.html","af64383843a84b76d124affecfcddbc5"],["/tags/Linux/index.html","07cdf324e01191863c4d7000d165dbe7"],["/tags/ML/index.html","6ac7602c0e291eedb32e2c1bf08e61a3"],["/tags/MNE/index.html","b200e52f4ae0778484bd4333c59fb19c"],["/tags/NLP学习/index.html","3a3218df94a766c8661c938fb1f1acc1"],["/tags/Nginx/index.html","1bc339d2485943e457ea8069ea654ee0"],["/tags/OSS存储/index.html","8537d002d38919842f9f74a0d2886e69"],["/tags/Obsidian/index.html","3aa15fd25ef6c43332603e8b21e523f8"],["/tags/Qt/index.html","5bd67c39673fdeddc192ba7c3260ec25"],["/tags/RSS/index.html","d06f9d2cdfa8dfea0991b5c61e4babca"],["/tags/SSL/index.html","a8afe0a89d88f2ad0c85682f8ca07341"],["/tags/Scrapy/index.html","75b24a3a2302f5f105178520b4d0030c"],["/tags/Speech/index.html","d522917b32bebd886f4cf4f37b7b3e67"],["/tags/TotalCommander/index.html","4ca62658b92d6f51a366f82394825173"],["/tags/Web/index.html","5850dc44a8d130f50f7c76e205626486"],["/tags/algorithm/index.html","398b6750c2ea06b5a1604334a1c8fd33"],["/tags/bison/index.html","865908894d8c63b75fc0f8fa7e21ab6a"],["/tags/bomb-lab/index.html","cc5bffd8caa97d32e05f79ef4d543279"],["/tags/c/index.html","0ebb29b7c477980e6a436cc37b70fafb"],["/tags/cheerio/index.html","f206d72eb5a6a171eb8b1de08c4d7b0f"],["/tags/codewars/index.html","2e34aac57fa3f43ab74581c6890d7167"],["/tags/compile/index.html","41ee33c3de96536e9fb0f013396dd7cc"],["/tags/compiler/index.html","7ddada7382f8f88657631925cc10b40b"],["/tags/cors/index.html","028c4428afd423f46552c38c590dc213"],["/tags/course/index.html","66c71906625c7b483d7d78adc2ba498f"],["/tags/cpp/index.html","2710a83a758af1ef38f5bb17fe3c1544"],["/tags/crypto/index.html","b24daaca56166c6730f4283714eaa39a"],["/tags/csapp/index.html","5fe9b4305bc7c21b9484447e73d18cf8"],["/tags/csp/index.html","7f21e4106278d28c53748cd01501aa16"],["/tags/css/index.html","42d4135a0470aac7c8c8989774509625"],["/tags/dart/index.html","0c86fc5d1d9290252bfcfb9e973a8dfb"],["/tags/data-structure/index.html","e9e058e7d75f1fc51154bfff11fa9ed4"],["/tags/database/index.html","5eb5448ea324909c71cddcfbc436f744"],["/tags/deep-learning/index.html","973c046f09c0c1e72ff8dbbd27b7b252"],["/tags/django/index.html","9e53348c9f8bb3af3dc16fd09d1860f7"],["/tags/docker/index.html","0d61dd02ac1949384dc564c03d98bdfc"],["/tags/dwm/index.html","860e3662b8cdd7d60c4c432abe8f01e2"],["/tags/exercise/index.html","17bbad0f2f1e7e572007e9b430acb590"],["/tags/filebrowser/index.html","22dd6e60b3b77d20734a7863f76e80d3"],["/tags/flask/index.html","8ef3fe43d282c0d2e86db2bdb92f337c"],["/tags/flex/index.html","90bd92b09d79a08bca738775d3aa0bf5"],["/tags/front/index.html","79933d167a679124e7955dfe28436880"],["/tags/gcc/index.html","d0ce04b4cbfb947b6930d12e4f7373d5"],["/tags/gdb/index.html","62eb53e45665c404bdeba93af29f1286"],["/tags/github-profile/index.html","b9bb8d324945e4c668c320ae0e1c5fe7"],["/tags/github/index.html","1d18c4bc5ec2d3fd9fd8bb9e5499a229"],["/tags/graphviz/index.html","28363d7a7a9e3230b2d7d17253d1e54d"],["/tags/grid/index.html","129a19f150f1da562b4a08a8ab6191cb"],["/tags/html/index.html","5915f5dd12b67b42c7849fb92247bbce"],["/tags/i3wm/index.html","ebdc67f08418801a114e9819e513a8a3"],["/tags/index.html","7b1b8928b3469b1fa3feeea7ab3930f3"],["/tags/issue/index.html","9338a24743f6064cfaaae15075983cff"],["/tags/jQuery/index.html","6635d32f764519a483d2f7459e470ea8"],["/tags/java/index.html","d3232888a6ab53bf80b1b3a13c25b301"],["/tags/js/index.html","13c0ceb35c9d3b3b59e54abe1d0fde59"],["/tags/latex/index.html","dd217e7ada9ec284feee76774501a879"],["/tags/leetcode/index.html","17d65f6042d19d045d36ce4bb9e7f9d4"],["/tags/lex/index.html","d453776822cb77044a46e3298cd1b22d"],["/tags/logging/index.html","0ed92fa61e32593ee1c3992d645afbb0"],["/tags/material/index.html","955489cdfb2142cae2435af6ba12f078"],["/tags/music-player/index.html","d71df2eed6f415eb3fe587f23717d4e7"],["/tags/nodejs/index.html","8496979a39eeecb5bf42e5e7adfb3cc7"],["/tags/noj/index.html","5b164033f3ef4273d451c5de8bc6456b"],["/tags/opencv/index.html","f8efd090efceabf4bbbbb262c5ff5b20"],["/tags/overleaf/index.html","e2e8b7752caced8cb1f6bce1116674b2"],["/tags/pandas/index.html","55a36c0ba993c68699fb82203d68787c"],["/tags/paper/index.html","ac6cd41e16b96ca9f8c8235e62aff772"],["/tags/premiere-pro/index.html","f57c55430c18f179034ab34f0ec585da"],["/tags/proxy/index.html","b8f10bf3cae11da14c8f5d9dd83cb3c4"],["/tags/pure-css/index.html","0738c55fa3f323cf46b52d284300f493"],["/tags/pygame/index.html","c634e5ab5c51567ab7f5ed1f13f95335"],["/tags/python/index.html","6c617a810241e8eb203c2ae20e232aca"],["/tags/python/page/2/index.html","7ec51d1db6bd477b3694e73f2f496277"],["/tags/pytorch/index.html","311508e769ab960eddbb628e6c3f1851"],["/tags/reading/index.html","a5d403784654e458b996ac016904fc34"],["/tags/request/index.html","6e1a29c265c3f98b8eb18f9ffad970b2"],["/tags/requests/index.html","e2b142484ccc30f15b3f8ff1cd1e9bd4"],["/tags/security/index.html","474c76af94bb26e186f097cdac7a6102"],["/tags/shell/index.html","1264a1b7936baa30c6a3c0deeb426250"],["/tags/sign-in/index.html","bc675b3665745089c45b43baa8097bfb"],["/tags/socket/index.html","7cd7ca287bfffc555bc8f28364ec7fc7"],["/tags/spider/index.html","fc8d08b5475514f5b9392b4a32aa9a20"],["/tags/splash/index.html","cc105814e0a061e16f99bf8f23722d24"],["/tags/stl/index.html","382c4be67a9be5aa9cab9fef34c01d4d"],["/tags/sumatra/index.html","a165e93626d87ac1cf8a615061f6c491"],["/tags/superagent/index.html","07e7313e3ded6fde978085d253a17d00"],["/tags/tensorlow/index.html","4464029f4b3ffb40fcdbe0c4e383ee7c"],["/tags/tex/index.html","6a67f29d688c7868e76ef4b6177a02ef"],["/tags/thesis/index.html","3128606bcd60f6150d259392ed8ab5d4"],["/tags/threading/index.html","b2c9229c18c9db6f68bc266430e87d02"],["/tags/tkinter/index.html","19769c4b1b429b4c60e94140617bcda3"],["/tags/torrent/index.html","591ffde3e9762febbe13129d873960bb"],["/tags/tutorial/index.html","9bbdd33117509a1350933bfcb5c0ea95"],["/tags/typora/index.html","6a60b0110e8008f2b8cd4f41a95ba93c"],["/tags/uniapp/index.html","d88a18d8bed34d29d365922eb027c178"],["/tags/vite/index.html","150276f1fa5cd4b6bf14fc68e078d63f"],["/tags/vscode/index.html","9928da18dd04866c17f05d58b7c0bd88"],["/tags/vue-element-template/index.html","bc1fc8d364ac909292e38b92164107bb"],["/tags/vue/index.html","d783fbc82be50136943bf8a083001eef"],["/tags/vue2/index.html","7d9b2238f3c6d1600cfd8b153c92d400"],["/tags/vue3-x/index.html","980f4a706564296c5ed5aa6549d23b7b"],["/tags/wechat/index.html","119f7a6527b21e320b9bdbe027721187"],["/tags/wm/index.html","a747f6cd2f63f24aa74ec9409032c26a"],["/tags/wordpress/index.html","4e1bfac5db4d8c5c0a81a8d5fe865f9d"],["/tags/workflow/index.html","34d5d2a09ed8bb3435f8d362fdc42a6c"],["/tags/xpath/index.html","e02c128b8850f91b6d2b5a4815e8a8d8"],["/tags/yacc/index.html","d79cef68b4b54a166cfee15b58266c54"],["/tags/zsh/index.html","67995238a5722b7717db5f3fda769690"],["/tags/七牛云/index.html","662ecabf3347913d6321acbd284ab066"],["/tags/函数/index.html","34b8801275af864880363ebd03b63051"],["/tags/剪辑/index.html","5198a133f928629ac0125362537d8308"],["/tags/存储/index.html","f2e2d4bd316f5faf79902ad684039ea6"],["/tags/实战/index.html","dc078a5eda83ce2b3ac8e8d7fef27229"],["/tags/工具使用/index.html","37533f0d696156e28a6801e486a21ceb"],["/tags/建站/index.html","cbf85107d9559c950a4ab45b8e46bfbc"],["/tags/微信小程序/index.html","e3213b0f1f58e8ecb61ec5a17422e5dd"],["/tags/指针/index.html","9e27a5802db654610156df4f643cab37"],["/tags/效率提升/index.html","d8855b1d8bb8d7830c992dcaedcda027"],["/tags/日志/index.html","c1e632cd618f5d3cb3c839b14854627c"],["/tags/汇编/index.html","5a60bbe20b0ef3d03fa55871035e0832"],["/tags/油猴脚本/index.html","7d31d84df6db4168cd03ca4ebe291989"],["/tags/浏览器/index.html","55881216fa04bc6a86ea0cd5ac1a7a6c"],["/tags/爬虫/index.html","b9633f0de8e2da6495c9d2efc7a83333"],["/tags/算法/index.html","e4e4a85725e01915bba7d16e73f7b328"],["/tags/编译原理/index.html","1d52cc27f624bb30b6232910105feb38"],["/tags/获取地理位置/index.html","c6d56507807aefe9ec1473083401a353"]];
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
