/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","f6b5b72eae4fa91c294699a61231bf53"],["/2021/04/20/稀疏矩阵/index.html","09752cced1ecd36c0ffef508120e4184"],["/2021/04/23/广义表简介/index.html","08986c01419ab35d6c947d0acf0f7d57"],["/2021/04/29/关于指针和函数/index.html","27ba66a324b6170f3a1bc4eb5138fb8e"],["/2021/05/10/哈夫曼编-译码/index.html","21f9fce3f1f0aebb21eddc520e9bf32b"],["/2021/05/17/数据结构noj_2/index.html","13fe15e4b5dc2482da8e5b28abf5fc2a"],["/2021/05/30/数据结构试验/index.html","e09d2af51d18bd51b0b747fab04424c6"],["/2021/06/12/数据结构noj-3/index.html","c879ab1b45b5839715e7ee0cef0e31d9"],["/2021/07/08/C++与Qt开发入门/index.html","6b595a688e6e8eca1c68e79f3f155c48"],["/2021/07/08/课程资源分享/index.html","a804a62b7d5f61f84c2d96be26aa062e"],["/2021/07/20/Scrapy-下载图片-文件/index.html","16542b1175e73c56a29daf337eca4083"],["/2021/07/21/Scrapy-动态网页爬取/index.html","96fc4c0d6fcfe9c97a10f1a3c0e9d7ae"],["/2021/07/21/疫情打卡/index.html","20770d32d0ee4f7570167f10c8593d54"],["/2021/07/29/Scrapy代理设置/index.html","18a2bf468040cab575dcac7fea669257"],["/2021/07/29/数据库认识/index.html","b9bc96887b19ecedec463f111ab631f6"],["/2021/07/31/Python多线程学习/index.html","c4d167e1159c3df6587e7a549800977a"],["/2021/07/31/tkinter-requests练习/index.html","a2d5c396bdf8142edcaac4b67ade29bf"],["/2021/08/10/Git学习/index.html","2a688b0121d9b71b8d01898b10686a32"],["/2021/08/15/pygame实践-1/index.html","dae51e6c39f97890ee9de44a9a2d1544"],["/2021/09/06/微信小程序开发/index.html","0117412885620ee3cf79ce8e027d2fa0"],["/2021/09/21/命令集-1/index.html","adbead43ac538bef15e450cc7bb24e1a"],["/2021/09/21/命令集-2/index.html","8458a9dd85cddf53265c4718dded0e7a"],["/2021/09/21/命令集-3/index.html","952280f51c8c6a373e84a1ff01ccd4b1"],["/2021/09/21/命令集-4/index.html","19a6cf160386015876f6ecfc8a14a7ba"],["/2021/10/03/socket学习/index.html","9f656f572101fc94fd126b91049600e2"],["/2021/10/10/dwm入门/index.html","9708b4131696be83d2e0a2d29ba90e5f"],["/2021/10/10/安装ohmyzsh并配置/index.html","eceba45a282dd16758420b7f626eb445"],["/2021/10/20/css学习/index.html","ae7dee9fd5f6c21850326100307ca47e"],["/2021/10/20/wm入坑/index.html","ddbc85da619e851642c81e6dfa54ced3"],["/2021/11/03/微信小程序学习/index.html","700bae5a84417433f1c2bb7e201316a2"],["/2021/11/04/css揭秘/index.html","3e83ea7b5c7a6c03397b7a88798b45ae"],["/2021/11/05/css-练习/index.html","ee5fcfdb3646b2af11a0b23df5944286"],["/2021/11/21/命令集-5/index.html","9da9ebada64c63b90f03d5ca5dc9e48a"],["/2021/11/21/命令集-6/index.html","0d75c4992738f8d705454ae0901d7f6d"],["/2021/11/21/命令集-7/index.html","c474fe4412aaa5b49db6c5692ea816a9"],["/2021/12/01/搭建wordpress/index.html","a4854e11f94114eab85a4c0f50ba7eb6"],["/2021/12/08/python操作百度网盘/index.html","383e73f5b465f3c18e65358ccd7df3f8"],["/2021/12/14/js爬虫/index.html","f99af25377fbb4664637440b77afc0a3"],["/2021/12/25/为网站申请ssl证书/index.html","2f7a2c0b20721ae73b6aae657c0045ac"],["/2021/12/29/使用七牛云为网站提供服务/index.html","5eefd2ecc04d6e4d7b8b206c84850fed"],["/2021/12/30/jQurey继续学习/index.html","f57100d424db0a9e93df4e5f62e0e0b1"],["/2021/12/30/jquery学习/index.html","65b567d621e4f760213d3a3775d2ae51"],["/2021/12/31/vue学习/index.html","3cdcac98522566ccce17313bd3e730aa"],["/2022/01/02/疫情自动打卡/index.html","529a9991d5a0e94d30195838056da53d"],["/2022/01/03/javaweb初体验/index.html","6d8135cbff7c53d29b10306e6f2dcf3b"],["/2022/01/04/codewars练习/index.html","e7db15797a66cbce104fdf10b8dfaac7"],["/2022/01/05/Spring学习/index.html","8cef89ede9712e3dd2564eb0ce57fb3c"],["/2022/01/05/vue实战/index.html","f34810a008e70e4bf351813cab0578a5"],["/2022/01/08/gdb-gcc学习/index.html","5649dab5e9e292f0efb5848704d3c07e"],["/2022/01/11/python-opencv学习/index.html","25a4d6d0fc3a10658a0f0c39cc0056fc"],["/2022/01/12/汇编实战/index.html","4deb91b1114cff5aa46a0f23cf63c9ab"],["/2022/01/17/pandas学习/index.html","f30c36d32fc432becb205a387cb63cd9"],["/2022/01/19/可视化图的工具/index.html","7492ea94c087832284f89844a89f7e69"],["/2022/01/19/机器学习入门/index.html","13e624ba008a224aff313874f4d68a13"],["/2022/01/20/cousera-ML学习/index.html","26ab006508b1d8d6b5f912c480282fde"],["/2022/01/30/typora解绑后出现问题/index.html","4806475308c0306d17d54c2012698fc3"],["/2022/02/03/NLP学习/index.html","86bda33623d488415e391683e9b7f3df"],["/2022/02/04/Web漏洞学习/index.html","4360e5c2b65661694e62070fde965e46"],["/2022/02/04/pyqt学习/index.html","5f94a7cdd33633458c84e21d7c313cd4"],["/2022/02/04/python爬虫/index.html","b5c160cf2dd5dd6532f7a2c8986bd4d3"],["/2022/02/18/Electron学习/index.html","7f1ccd62c6fce82b0c1d754985187bd1"],["/2022/02/22/疫情填报字段解析/index.html","5d7d516b73ed5f957005a83b128f2d42"],["/2022/02/24/Bomb-lab实验/index.html","d1d3fb39cecb31024b76ee6ef5d2ba49"],["/2022/03/05/nginx学习/index.html","3587a878892621a671647cf900759c7c"],["/2022/03/09/汇编原理课程学习/index.html","a9927aaf3b8af18d7603f876c7ccbfd9"],["/2022/03/11/Keras学习/index.html","71d0504bb419b9da90f265e1baf605f5"],["/2022/04/01/graphviz学习/index.html","be7e8ad29514248f13b6a86acb24d9da"],["/2022/04/07/django学习/index.html","0b79ab3042d189b29dc267f71ccc55a6"],["/2022/04/11/密码破解学习/index.html","5a355ee29ad8d7cdac1eae22d8ba5792"],["/2022/04/12/flex-bison学习/index.html","34826404db817ab6d1b3afb479f41071"],["/2022/04/15/pytorch学习/index.html","e8dc9d57af12292eaba9b3726562e717"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","0ff5cef957be56841ea9956dd9a3c68e"],["/2022/04/23/写一个音乐播放器/index.html","0d3a99b8e9105640fb5078ba79ade267"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","91b4918075d047e69ca5fe0dbab5fca3"],["/2022/04/30/GAN学习/index.html","84b393c762c2813f3bb5f0f520c30567"],["/2022/05/02/html精学/index.html","78958a0407a18a21ba9e34dd8882e55f"],["/2022/05/06/write-a-compiler-by-yourself/index.html","34288517d6db4eeea604223eb3b2d146"],["/2022/05/30/acwj-01/index.html","037dc21a020bf92db116fbbe2aee04a3"],["/2022/06/14/animeGAN/index.html","de45a07f17674e3445f7ff9d47a55106"],["/2022/07/09/c-与算法学习/index.html","3ca82041121a8b4e62d3b43723e42ae5"],["/2022/09/19/flask学习/index.html","30d570c3f545ab6e59f24fdcffda9445"],["/2022/09/22/cs224w学习/index.html","7b02879c515fb2db109dbb9a6520277e"],["/2022/09/28/记录一次wp重装/index.html","e52994e6cae00bcabb4a3fa456037537"],["/2022/10/01/Obsidian学习/index.html","0610758b4ac77783401f9860721b78eb"],["/2022/10/08/vue-element-template实战/index.html","1689e3dc36e1a8277246767d60332ee1"],["/2022/10/25/vue网上商城项目/index.html","c0b839119891179b1ad01afee056cf76"],["/2022/11/11/leetcode刷题记录/index.html","e78d6e4ddb518ce5b588bf55d0c05bdf"],["/2022/11/11/使用overleaf优雅地写文章/index.html","8acbbbf42debeed49b01fe7a89af6924"],["/2022/11/22/磁力链接与RSS订阅/index.html","d82347f62e46ab3febcc7205b851ac95"],["/2022/12/11/uniapp申请获取地理位置/index.html","2a98f0cb515361331ea689a11fc21777"],["/2022/12/26/pr剪辑学习/index.html","19ac4ba8b6c54858d2474806d3fb58b1"],["/2022/12/27/css中的flex和grid布局/index.html","0de030140a5faa4f55a221628beb1afd"],["/2022/12/28/Flutter学习/index.html","e2314e10c750efcde20d6d425b1b555f"],["/2023/01/01/美化github首页/index.html","d0cbd6c1b740e8393bade93eb3104fea"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","8a898a53f88c414af1af368b2edd040c"],["/2023/01/04/构建微信快捷发布文章工具/index.html","e8fc5f5e8cfcbf6ae25fb5dffcb33a23"],["/2023/01/14/dart学习/index.html","e2df04308e4002073b4671ac375cf019"],["/2023/01/23/闲置服务器BT下载影视/index.html","2a242008515ad0d2e23634f4f3818e18"],["/2023/02/07/TotalCommander使用和学习/index.html","2433842aac861f59f241c52f92e8a9e3"],["/2023/02/13/docker学习/index.html","c10105eb9bd2bba907785753df916958"],["/2023/02/17/DLHLP学习/index.html","1d11b7c0f0056e3a60c5240b508ece2d"],["/2023/02/18/学习purecss构建自己的css框架/index.html","f509413ed3758559b315569afcdf9903"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","35a076f00ceaf0b3ae4946c47d9c3811"],["/2023/03/05/STL学习/index.html","d09acd29f8ca5b498c3d1e341af99e94"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","0beb2cc579000257fd3f102357798140"],["/2023/03/23/实战写浏览器插件/index.html","284e275df5b70dcf01eed4fb8c86ea25"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","8d8bab68380699743de6c7f607decbe6"],["/2023/04/02/EndNote基本使用/index.html","4b51ed17561b1dab5a5ba3a1d548f29c"],["/2023/04/04/mne处理脑电数据基本使用/index.html","d266271f3dec40ac66b9aaeec5eb49be"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","4d719c30ce4f1bb96fa84d7cf3e74b00"],["/2023/05/02/python中的logging模块/index.html","b3e149c588f043921c08458de7a3f8b1"],["/2023/05/07/python的特别方法与装饰器/index.html","c250df3c59d113f5c70bf9483d5a1478"],["/2023/05/20/Wox插件编写/index.html","837846580434abb351fe1f0a585b1914"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","e82140406ad089e93edffb6510803cb5"],["/2023/06/03/深入Clash配置文件/index.html","d56666eacabab97f4f9fcfc1e53b9651"],["/2023/06/10/node的包管理工具介绍/index.html","de278568871c38648ea3ae1a5d6bb56d"],["/2023/06/12/AI写作工作流/index.html","b20c73723c0fbfaaffad1ddf823bd94e"],["/2023/07/07/Astro-Vercel部署博客/index.html","01af01e38844859a30dacf3c0b0040aa"],["/2023/07/09/青龙面板部署项目/index.html","9e6a9f8a7ea5aff689a645d911e10707"],["/2023/07/29/CSS-Modules介绍/index.html","8b55c5365b5d8f96f59cd36c0449dc70"],["/2023/07/30/浏览器JS/index.html","a0f17203795eac469169d585e2f06fd7"],["/2023/08/01/增加live2d看板娘/index.html","101834a5e3341cbf9b076ca9a755d178"],["/2023/08/02/深度知识基础学习/index.html","a0f1ec1e4fee19c64a18605905ffde7f"],["/about/index.html","3526eefb9b3aa35e89a6774b8e84dbff"],["/archives/2021/04/index.html","de2278242bc7f12e6830043f9f115588"],["/archives/2021/05/index.html","ae6908f899524010e149d7f7bdd6260a"],["/archives/2021/06/index.html","2049361faa2db60355ec49660b20dfd9"],["/archives/2021/07/index.html","9ecb0893470f915d3eca2b443a09e887"],["/archives/2021/08/index.html","060fc888ba4c61e830debda30a58cec3"],["/archives/2021/09/index.html","59bddfb7ea197d9e2ab5a3a6b05f2e35"],["/archives/2021/10/index.html","29d18229d509697ba51b51ffed90d4ad"],["/archives/2021/11/index.html","b20f3df8ba5b65052262d103c51fc282"],["/archives/2021/12/index.html","32eca4b139a197ca2d4984d3cb6022cb"],["/archives/2021/index.html","a52381af558273a65ae351ff24345853"],["/archives/2022/01/index.html","0d56308aad683c9b27add6b17a46caa2"],["/archives/2022/02/index.html","4f645bdfd9cd2ffef4aaff1589171994"],["/archives/2022/03/index.html","278740e81457415bb1d33554cffe2242"],["/archives/2022/04/index.html","22e534ded8ab566b0670b5e515ff7bf0"],["/archives/2022/05/index.html","ca1afbab1d55af1447494528501230bc"],["/archives/2022/06/index.html","e6cabaceb610cd9f977722bb0e140db7"],["/archives/2022/07/index.html","227acbc8ab7da70f0e62c2ad7dc3dcbd"],["/archives/2022/09/index.html","257955335b1445aee6613ec394c79257"],["/archives/2022/10/index.html","12daf0b427e233d31b9132a9111ed2e6"],["/archives/2022/11/index.html","aa06ee6677fe4a90208ef22ae76576d8"],["/archives/2022/12/index.html","84a20b1b07e1da2638678c218f4138e0"],["/archives/2022/index.html","c733df9644e1a1a3987257c7b31b5405"],["/archives/2023/01/index.html","44ddae969b326a4c8524747787dfdc8b"],["/archives/2023/02/index.html","d0d13bead1c33efd4020e625711693f0"],["/archives/2023/03/index.html","05fd2eadfcdb7984239967c9566b428c"],["/archives/2023/04/index.html","dcef2ec506adee0ca72bf3492a1caf33"],["/archives/2023/05/index.html","a1a400ebe43137756b1e3e8bcf61e444"],["/archives/2023/06/index.html","3e57ca70fac221e07bc552ef2db54f05"],["/archives/2023/07/index.html","1be64f34d50d3cbf42d940e95b05452f"],["/archives/2023/08/index.html","65ea1ecb7798b37ad02f7bbd85329597"],["/archives/2023/index.html","e19951696d7c3858ed42c183172e7ab2"],["/archives/index.html","1e27457c5c0aa81c94fab522a0af8827"],["/archives/page/2/index.html","f315efbddc5e3183889a383506a10249"],["/archives/page/3/index.html","376a299460535a6616d5a06c9e8fcbd3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","6604c271076fce9bc43d094513db6562"],["/categories/Linux-study/index.html","24531cc9b6e9981c68d84ed8437eb1e9"],["/categories/ML/index.html","597aa5e0cc3b21bec3963612db0f6acc"],["/categories/Nginx/index.html","753e094a71620648b7e6048228d07244"],["/categories/Spring/index.html","114b83a70c714e208b9bab910b3d67e8"],["/categories/course/index.html","6474d5b7f254a2bc334cb80db1990776"],["/categories/django/index.html","2ffdf62b97f21a8ae12ae608cb0d7f92"],["/categories/fun/index.html","b10c232842711844c500526dc752ea77"],["/categories/gcc/gdb/index.html","d573d5202fdea540536b0790c25b11d0"],["/categories/gcc/index.html","1b3f0949ef839ac4b6289ae42e5c53c2"],["/categories/index.html","fa6c63a8555b9b7cee2315f7f5ad2fe7"],["/categories/java/index.html","24853446520a4dde5ff46d8f0d9eabf4"],["/categories/latex/index.html","a74302a28ca5731c735a3981f0f6e0ba"],["/categories/python/index.html","4405a339f9cec17437eaef60eaf9cd24"],["/categories/study/index.html","fefcd39e2953b93b6e8e93ef9713b051"],["/categories/vue/index.html","fa7a12d628af3e12e44f1e7b2989fffd"],["/categories/误区/index.html","9d4dac5ecb85b9f967408b1c5c8951cf"],["/commonweal/index.html","95775a38ec8d83f061f1d015bcf313e9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","57222cd8ac2031f8e25edfcdbeae9394"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","bdf7ab80d5521ad614ef2fc3d04e5ef8"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","57d60d217d8e5786ba10ec71f7863aa3"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a41215827b430d0fb352cc8c6ceb6d27"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","2c7041a7f68a37ae622cb654b990f118"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","9b9eaaf5b60b7a55924b3532be342ed8"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","16bde8a3cb5d6ade5b4db20008d1123b"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","26de9f616bf260404b0e671f73d86294"],["/page/11/index.html","08a39b46b79d93dc6e14b7d880d68a74"],["/page/12/index.html","16a86aadcfeec147ce0e2ecc55935686"],["/page/13/index.html","93a12bc5ee45a3bb60b9d6e024e73e6a"],["/page/14/index.html","6e1fe3cca736313d297298f98e87c80d"],["/page/15/index.html","70b42dbd1e53e0e7dd83f53fb6287693"],["/page/16/index.html","15e442de64db095e8cee9f96aade351d"],["/page/17/index.html","ff97d7a610676230cace591d3bd73f7e"],["/page/18/index.html","7173de115dfea1fea2ec3e9aa5d42d59"],["/page/19/index.html","23cf11d2138447bb91ca7c778052f8e3"],["/page/2/index.html","9f147850981fb92ffe60d1111f645a8f"],["/page/20/index.html","7733308ddcd42dd676b7e54280695885"],["/page/21/index.html","1f3c2c8dbd677f1ddbf20651d8c0a33c"],["/page/22/index.html","ce2b9a93f7915fc91222a5d8a1994124"],["/page/23/index.html","65d4d8ed56b614565f83c6664ec175d7"],["/page/24/index.html","24b18c8c01e1522b526cc34d43d60b95"],["/page/25/index.html","3b58f79b831d0f1786febe87108072df"],["/page/3/index.html","be8506187aa37fbe8bb46f398cbb80fa"],["/page/4/index.html","7ceda1f06fe9cf0a76c6ad8d01903018"],["/page/5/index.html","6466fa2f22ef604bf63d2723b07f4055"],["/page/6/index.html","7c3b4ddc95fb1afd5b88858c7e400715"],["/page/7/index.html","919019643bb226259a6d02b7bfc44240"],["/page/8/index.html","558ed8c7a2dd55e216d1bac9c9baa0b7"],["/page/9/index.html","50f0ff0f1913c530fb357db00451d826"],["/resume/index.html","b5c0ad4a15267833d5c67df0d6c3446c"],["/schedule/index.html","cd302a81cef0663312853d500d2109a1"],["/sitemap/index.html","1bb38d8e3d101ec7d110d873497df18f"],["/sw-register.js","f39da3667e4ef47d3a523977f31ec0d5"],["/tags/AI/index.html","b2e81a5a5952fd4693e96c0a5c438df1"],["/tags/Astro/index.html","6c1dfaf4ffbd49fd5ce2812f3295cc5f"],["/tags/BT/index.html","702c8ce2ed5f64cb140b7f4a3c6f17d3"],["/tags/BaiduNetdisk/index.html","5a3163db51ce7a478a746ec160aceba9"],["/tags/Bootstrap5/index.html","3a68a4b558955ef228a5900911f28d4c"],["/tags/CSS3/index.html","bd93bf6b75351b11ce5f4320ceb34368"],["/tags/Centos/index.html","d924d40814f44754928d30ad2f4df9f2"],["/tags/EEG/index.html","c6d19b6035e816ed5d298f30280d2bed"],["/tags/Electron/index.html","5542ef8996744ea42c0261c2912bd3ea"],["/tags/ElementUI/index.html","a7c4e81e8b96dbde6d2c18e16bd03735"],["/tags/Flutter/index.html","7f102e2ec71542c7ee4b200d5932cdde"],["/tags/GAN/index.html","6ec8bbe89b8f3f2dd23dae7fca489376"],["/tags/GUI/index.html","835263da91181c189abfa5053d151196"],["/tags/Git/index.html","2e64f947d54163188f7088c6c1c702cf"],["/tags/JavaScript/index.html","f0a39fde2fa721b680048b89ecb95a4f"],["/tags/Keras/index.html","c74e9e831a01044feb18f8fe99d9a175"],["/tags/Linux/index.html","8d8f66ac90a32c919519392fb5607e3d"],["/tags/ML/index.html","afb05aabe5c9646d2283146f7ea02dd2"],["/tags/MNE/index.html","80c7a75a650c29a78c0a9868fabfc1bc"],["/tags/NLP学习/index.html","3313d0ec0176edc50ea2eea4e650cdf5"],["/tags/Nginx/index.html","b8023e39354c24c547a6d08fc4cde0a0"],["/tags/OSS存储/index.html","e3f00c17d4a6ca0a3902847a21bce777"],["/tags/Obsidian/index.html","f6c791146a981f1c6ae3602b10e76108"],["/tags/Qt/index.html","ce74e8ad87b8f6bab1c6822c71e6eaa4"],["/tags/RSS/index.html","1bbe9768e69b48482056fbc8b1bd064a"],["/tags/SSL/index.html","23bb687210db0da5ba80fd97e65d0ce4"],["/tags/Scrapy/index.html","24894343e04f57708697c220e93eb995"],["/tags/Speech/index.html","68d053e5f36d4ef3d71ea5280b418948"],["/tags/TotalCommander/index.html","a53ab98befe02c6e0cac1c34594332b3"],["/tags/VPN/index.html","f778551e4f9546a5267dd70747504599"],["/tags/Vercel/index.html","a2e370fa129fe3d9ac41d1590d40c67b"],["/tags/Web/index.html","eb5aa3ca4bda3a37346a96b2c68930f7"],["/tags/algorithm/index.html","555597b1acb252524b1d4651f135fcf4"],["/tags/bison/index.html","99894ffa881ea3009accef9ab86ac1ec"],["/tags/bom/index.html","1d5679edfde574fb26285e7392cfb6af"],["/tags/bomb-lab/index.html","775a1fe28f55cff13d3d8c74adbf8720"],["/tags/c/index.html","8db0281fefc580368d279b56254dc3a5"],["/tags/cheerio/index.html","b562f159f33c8dca03d7198405e1cb74"],["/tags/codewars/index.html","34c63ba85795e485bbdc7ac4af69bf64"],["/tags/compile/index.html","85a0776315e34bce6739f4a5a72c00cb"],["/tags/compiler/index.html","c9eec23deb18bd451cf56750534e2b11"],["/tags/cors/index.html","968274ee334ae719da11d2892dfb3fee"],["/tags/course/index.html","db12261af53d8bf1e91e17f105d4248b"],["/tags/cpp/index.html","090aa0d93780b056ee98a64616ec5c42"],["/tags/crypto/index.html","7ec24cf7e9290c7ee625979d1ac2153f"],["/tags/csapp/index.html","2f29b4b888764b280f9d56e8c5316523"],["/tags/csp/index.html","b7a344082c0df87b192c54e29bf63607"],["/tags/css/index.html","9510653448c6d2f7da24d67e5124fc60"],["/tags/dart/index.html","5225024c7d0655db60a4d1869cae07eb"],["/tags/data-structure/index.html","2c4a10613d17d538c9ce2f24c4722c03"],["/tags/database/index.html","518fde14b5787e695b5839a1eb9c6454"],["/tags/deep-learning/index.html","a4ce67d3b5747eeeca5fcaf15b9044d5"],["/tags/django/index.html","699f002bee8e0c563ed03bfa7faa0e5b"],["/tags/docker/index.html","bce09b6bc9a0ed84f9658a2938056424"],["/tags/dom/index.html","e6173c4cb97fb350b1e4d7ee013763bc"],["/tags/dwm/index.html","6fe4c5937ed0693c5d6278fd4e307b76"],["/tags/exercise/index.html","46bf2724241a61c12188b63dc7dfaca3"],["/tags/filebrowser/index.html","a28ea8441471db99297438f07fddd7ad"],["/tags/flask/index.html","0af8b09cf60d5f2f0d66f744fb5add5b"],["/tags/flex/index.html","c529b1874ae3fe26e40d030cd632fad4"],["/tags/front/index.html","7e460320a9f750d72db4c023c3b27f58"],["/tags/gcc/index.html","50a963b3f22881b033643ce5e41f9216"],["/tags/gdb/index.html","cd1b20d69664d4517269e3913236f2b9"],["/tags/github-profile/index.html","b07ad506793a280d9bc9850b3eaad21f"],["/tags/github/index.html","12207fe13d0990d6da76527718699d19"],["/tags/graphviz/index.html","1bbaa95d9004b403f31c30c358d4f71d"],["/tags/grid/index.html","741fa9bdddb8f865ed09a31d2bc1816c"],["/tags/html/index.html","8ff35b8a55848d724acbe1cf90e1862d"],["/tags/i3wm/index.html","25837c0fa0b6ee148e20f543cb664549"],["/tags/index.html","01a845a53c010339b7ec9d4abb720f9d"],["/tags/issue/index.html","d11cd37952e338667fdd47ffe14777a5"],["/tags/jQuery/index.html","17540be579f4396618d040b43e0fbe8d"],["/tags/java/index.html","3b839d33e037c38d925ba55d71f48ca0"],["/tags/js/index.html","deaae7ff84c0f2df3af9d9e40efabbb6"],["/tags/latex/index.html","3d2948f1e37e13a75128a8ca9a9c9a3c"],["/tags/leetcode/index.html","4a73b25f34d3dbfd85e3b59061bc544c"],["/tags/lex/index.html","5da874da97fc3266a4561309345718cf"],["/tags/logging/index.html","20abced0ccb2991d22c6eee6e8a33973"],["/tags/material/index.html","f41c5f59decbce8bffcf77099caa5dc2"],["/tags/music-player/index.html","f3f7c8f05d05bab71d5eaff9c65e1193"],["/tags/node/index.html","5a7ee69aa9189a334c787ff12c7beca0"],["/tags/nodejs/index.html","4dfd5ccab7d69cba20b0167218ff89fb"],["/tags/noj/index.html","110451fd3b61d2d03dcc5d43e982b004"],["/tags/npm/index.html","e76dc6ce8c233e417f485e0a34a2168d"],["/tags/opencv/index.html","cfa835b7df1ab91f3abd0b5ee8dfeea2"],["/tags/overleaf/index.html","aaadd4afe5880457cef19966ab55de59"],["/tags/pandas/index.html","da8974942e43e109c88a0c8f949b8a9c"],["/tags/paper/index.html","55e26864e70d762acb2e1e31bcea94be"],["/tags/premiere-pro/index.html","9553ccfe8cd640e53a4b0224c3a35cdb"],["/tags/proxy/index.html","133c32edcc3727ce7f3a778e1b4e12fe"],["/tags/pure-css/index.html","26dec84a3d56fa21a4c0b276d62da76c"],["/tags/pygame/index.html","204d3bc99290c32edf4657414cc281ba"],["/tags/python/index.html","f58b282f7fd25b93a86bd7ab8c37c5e4"],["/tags/python/page/2/index.html","0caff993cce691aa29f205bd98624b64"],["/tags/pytorch/index.html","6bb61b77f9b9c1f1b468bcf51b5696ff"],["/tags/reading/index.html","7afa95e437d12c7a79a1325931d98fb0"],["/tags/request/index.html","3c54d039b013194719a1063a9912717c"],["/tags/requests/index.html","e3dbdc95d0a85ed539ba0b27cae2e7b6"],["/tags/security/index.html","b9b719ad4353ea6ab80a71d767c7758d"],["/tags/shell/index.html","910697fc1a09c4993c7ab1210e4f6f0d"],["/tags/sign-in/index.html","1be58bec845d00da39d38aaeaa5209d8"],["/tags/socket/index.html","7936b5c6fcbd4663ed4c631c54a902c6"],["/tags/spider/index.html","0509d411a55916e39dc13643f50289f0"],["/tags/splash/index.html","aa4403b671e69d6f4fcfae643523c536"],["/tags/stl/index.html","bc56550fff8fa2ae2d2886e5d5f5a248"],["/tags/sumatra/index.html","cbfa774a78521207d62559392660dca6"],["/tags/superagent/index.html","76faae1297a2b58616f922542c1a0df9"],["/tags/tensorlow/index.html","7a42c8791452fa500cc006d37c22e9ac"],["/tags/tex/index.html","84a3068461582d6d09c66ac3f277b03d"],["/tags/thesis/index.html","1055c7562c2e867f4ffed16bcbf8190d"],["/tags/threading/index.html","f9157f0266b4b6047b42beda78646162"],["/tags/tkinter/index.html","2a94d78a7d248bfff7cd7ec33dd86e20"],["/tags/torrent/index.html","9e0a864452bb89952ea446517af2b28d"],["/tags/tutorial/index.html","fd0a6e063a17857d1bf7d5100852a946"],["/tags/typora/index.html","1c406e4bead3ed5b3048ccdcc44cf87c"],["/tags/uniapp/index.html","fc8c6d362db981594f6a279d5ad3ebfe"],["/tags/vite/index.html","7f1b75a1909a94cde08c8af8a03b2c51"],["/tags/vscode/index.html","7a3db26d65d337124cff3e77bda74a0e"],["/tags/vue-element-template/index.html","ea77ed4482564839f6dbce75f029d8da"],["/tags/vue/index.html","c02329fb784e45bb4e94f0994cad07a0"],["/tags/vue2/index.html","fc6ed0f764ae597d2d7659e0d94985f6"],["/tags/vue3-x/index.html","8e05447899ed418f5f8f04e266653eb9"],["/tags/wechat/index.html","e7023ee533cda068c0f1840bd6a9a27e"],["/tags/wm/index.html","5d815fd61caf74eadfdf1aeff19a0d78"],["/tags/wordpress/index.html","0475db0fd21cec38189987e25a6f3730"],["/tags/workflow/index.html","600dccaf7614d48f7b02fe14210da6f2"],["/tags/xpath/index.html","587a4fd1731fd25a62b3dbc48d42a883"],["/tags/yacc/index.html","de550bb5e1ea1b6f734764a474011ec8"],["/tags/yarn/index.html","7c1b59ae886afa21e298c5d347326eca"],["/tags/zsh/index.html","5ce8d3a541e6ed545afec42ddf09a226"],["/tags/七牛云/index.html","5a06eb8c872c1ae1b2e1523630711fd6"],["/tags/函数/index.html","0f3dfc8af40dbd44b90cee95c3f1709c"],["/tags/剪辑/index.html","ca5d2df0d15e71e583f35e449c790f85"],["/tags/存储/index.html","6ada94298fa8520cb1cc2880847fad30"],["/tags/实战/index.html","9dd9b15079fd7034a1aef527fb332671"],["/tags/工具使用/index.html","79797e830431905028ed8fef669cb3e9"],["/tags/建站/index.html","7ab3e2fc5cb8864d2ea577dc725769eb"],["/tags/微信小程序/index.html","7b87e96da8fa0b59d18af7fa4cbd5e27"],["/tags/指针/index.html","825c5bd13232b9e28dc58e5ad107848e"],["/tags/插件/index.html","32420207ea273aa6ca1501ec8bbc707e"],["/tags/效率提升/index.html","73484a8fa3b33edea9f9aa7612fd4ea2"],["/tags/日志/index.html","0e620f6e459542f268ce34fe6e7809bc"],["/tags/汇编/index.html","8ba36ca6a374ea79c63324c63c167801"],["/tags/油猴脚本/index.html","522cc490aca5dad78223dec162befcde"],["/tags/浏览器/index.html","2b7a7d5aa832d121e90d42e62c819c71"],["/tags/爬虫/index.html","a05d1b9da025634d09872fd952ff1f47"],["/tags/算法/index.html","be2881ee5cef86bb1254f4ce1a7299d9"],["/tags/编译原理/index.html","1eba1254f4f19e03dd522db14b39bc49"],["/tags/获取地理位置/index.html","ce4e933ffed3364ca89879734d6e3a3f"]];
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
