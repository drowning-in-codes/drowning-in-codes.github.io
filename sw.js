/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","dcc3617fa2c507d22b082e47c01f8ca0"],["/2021/04/20/稀疏矩阵/index.html","00ec17207d5d3ca278a188c37fecb776"],["/2021/04/23/广义表简介/index.html","8c5b4479de6613e10d018f6546879bee"],["/2021/04/29/关于指针和函数/index.html","5d442b5082cc9c8b97d6edc7221eedf7"],["/2021/05/10/哈夫曼编-译码/index.html","d53021ca933dbcc6db556c33682e504a"],["/2021/05/17/数据结构noj_2/index.html","f64af75bb3741ee5f24ce4e61c139031"],["/2021/05/30/数据结构试验/index.html","319ff4d4d56860536bb79ae8be977d1c"],["/2021/06/12/数据结构noj-3/index.html","b284c2ddece43bac347182cb26b58250"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","942cb1b0ead525c7fde2da9aa4e45667"],["/2021/07/08/课程资源分享/index.html","5c9358db644a0f8634706290db92af33"],["/2021/07/20/Scrapy-下载图片-文件/index.html","5fcd1154388ea62aa9e107a30826d12f"],["/2021/07/21/Scrapy-动态网页爬取/index.html","ddc787171cc8184caa89ad619fff999b"],["/2021/07/21/疫情打卡/index.html","5bf510ed297311e4153f2b8b8beae5bb"],["/2021/07/29/Scrapy代理设置/index.html","bc795579408fbf13d61198a39f2a2665"],["/2021/07/29/数据库认识/index.html","6bc33f2f89a3c034b9db6f435f2ac2cb"],["/2021/07/31/Python多线程学习/index.html","e741f5f0f30c4b745f52c50c73ed62aa"],["/2021/07/31/tkinter-requests练习/index.html","ac029fb95639e18ef97bf99b21962f28"],["/2021/08/10/Git学习/index.html","64bd523da71b1e8a63fd6066adc0f9e4"],["/2021/08/15/pygame实践-1/index.html","6c554bf971baee98b0543d0868a43203"],["/2021/09/06/微信小程序开发/index.html","3a552fedbd5a15a79c1c755c6dbc30d9"],["/2021/09/21/命令集-1/index.html","b2ac9c21e41695a8259a73d7e3718a4f"],["/2021/09/21/命令集-2/index.html","6fa07e6010a41be8ab292ef9d43da6e6"],["/2021/09/21/命令集-3/index.html","1df272cd6cab97b891d57345960caa86"],["/2021/09/21/命令集-4/index.html","24ce3b08dd03c979ce66783cc13a416f"],["/2021/10/03/socket学习/index.html","3b597cb85d4759a0282b124ddd320d39"],["/2021/10/10/dwm入门/index.html","068e35f9a33bc0f67c62bacfe745ec0c"],["/2021/10/10/安装ohmyzsh并配置/index.html","2510f2c9dfe136604b0ded8d665b5511"],["/2021/10/20/css学习/index.html","c6851af35852d9dfb2ab52d24258259c"],["/2021/10/20/wm入坑/index.html","42a35e174c0607d33b6c5a2fada026a3"],["/2021/11/03/微信小程序学习/index.html","f5152c1b12f959425813d66af2e415f6"],["/2021/11/04/css揭秘/index.html","25154d917ef588700b8b81e371455099"],["/2021/11/05/css-练习/index.html","941e983ce220ad5a5ec0f8e7e3c360df"],["/2021/11/21/命令集-5/index.html","74bdfa598623ae3e8f8c009b6c19dc4d"],["/2021/11/21/命令集-6/index.html","541dc5180d3223344fd9ba47cdf2f375"],["/2021/11/21/命令集-7/index.html","f5d9b712d6e2533a6c91d7c6f3a6929a"],["/2021/12/01/搭建wordpress/index.html","18586b6cd4fc8420fc393d82f57c9c93"],["/2021/12/08/python操作百度网盘/index.html","92925ad2b7ed855fbc42847c26e9cc39"],["/2021/12/14/js爬虫/index.html","31590dc485c91b07bb028e0c464bf52e"],["/2021/12/25/为网站申请ssl证书/index.html","5d2fb94bbc6ee917f48951049e1ccf57"],["/2021/12/29/使用七牛云为网站提供服务/index.html","f31bca09eaa3f592f2ef75433f932b70"],["/2021/12/30/jQurey继续学习/index.html","b69bf4bfa9679418bd9a2a00ee22131e"],["/2021/12/30/jquery学习/index.html","3e25e22dc615d9cf76c581710c61fb06"],["/2021/12/31/vue学习/index.html","2ee4a6d8f54b1a0e388446315f66a7f0"],["/2022/01/02/疫情自动打卡/index.html","737bd91026b1a3736a16364a2c3a5287"],["/2022/01/03/javaweb初体验/index.html","99ced51fe12a5fe9be2ea1c1a3abe09f"],["/2022/01/04/codewars练习/index.html","3070926219cda4bd37a3405c1103b7da"],["/2022/01/05/Spring学习/index.html","c6d4709f9bf4513f8d453788bd3bf362"],["/2022/01/05/vue实战/index.html","78f7433dcca0b0b9a9d81b5261a9db59"],["/2022/01/08/gdb-gcc学习/index.html","f6089df6e703ea3f776108e489811e85"],["/2022/01/11/python-opencv学习/index.html","3e39bfe5e242ad9bce652f918bf2a5d6"],["/2022/01/12/汇编实战/index.html","67a05dfcbe2afd52c7b3ea6c54da5c24"],["/2022/01/17/pandas学习/index.html","7d4e87e14409feeb9ab3289a8fe9e358"],["/2022/01/19/可视化图的工具/index.html","5a3c36ba302567eed4ced9ce0c64d35f"],["/2022/01/19/机器学习入门/index.html","b45458031153008395d9a8a3a9c9c974"],["/2022/01/20/cousera-ML学习/index.html","c1424501d0deb483aa075a6b82ebdb7a"],["/2022/01/30/typora解绑后出现问题/index.html","b342119fb19600a7e501a09e65dd67d7"],["/2022/02/03/NLP学习/index.html","a0ac57e19491d7a79b657195a6a852dd"],["/2022/02/04/Web漏洞学习/index.html","4842466a252ffbc4d0ada77e60ee7d85"],["/2022/02/04/pyqt学习/index.html","feb1d160736283b14dec116901f2f889"],["/2022/02/04/python爬虫/index.html","73b8f9fe07cb5a9e1635772e0ae16967"],["/2022/02/18/Electron学习/index.html","a2720848dfb708d23eb04f4e3e58775f"],["/2022/02/22/疫情填报字段解析/index.html","e7163f2cf610719292f7ddf5aecc6532"],["/2022/02/24/Bomb-lab实验/index.html","3d4d437999dfbf137532fe69b158aea8"],["/2022/03/05/nginx学习/index.html","97d0864cc418fdad3f0763db5a9b482f"],["/2022/03/09/汇编原理课程学习/index.html","bb57b94fd9897f1fbf5a60a566657330"],["/2022/03/11/Keras学习/index.html","c7de900f7bd2e81038ef337f2dcf2ec8"],["/2022/04/01/graphviz学习/index.html","e88b0be2c17e04f262a8809136a676ce"],["/2022/04/07/django学习/index.html","8b1666344dbb0e7a3a66d6876159b053"],["/2022/04/11/密码破解学习/index.html","f86f5c0f92b212909179afae19caa596"],["/2022/04/12/flex-bison学习/index.html","a8c56e6e0f9f1d9de26dd4244b49fafa"],["/2022/04/15/pytorch学习/index.html","62b8989c84d4a5705787ea4d5af34429"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","857e37f23af859530d9b4c23bfb3de17"],["/2022/04/23/写一个音乐播放器/index.html","b0c9a8767c84aa53057b135d869ad933"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","cbfc598710a5b7b45adcc7074a5561bd"],["/2022/04/30/GAN学习/index.html","6e1fe171056f84ee584326df2fb00385"],["/2022/05/02/html精学/index.html","3033f28ab4c4b44a6f5f8e470130d715"],["/2022/05/06/write-a-compiler-by-yourself/index.html","3efb25f9f9ba5f198e7ce31d112c7bf3"],["/2022/05/30/acwj-01/index.html","90899a8984588b167e0595a5f672b4e3"],["/2022/06/14/animeGAN/index.html","ed1e56ee1b89a06a0843b2c921ccdf76"],["/2022/07/09/c-与算法学习/index.html","517de6e286d2045a763444f0118d139c"],["/2022/09/19/flask学习/index.html","ac505f57facc8399be0265e12f91cd97"],["/2022/09/22/cs224w学习/index.html","eea05e8fad4b42083eff623407ceb7b1"],["/2022/09/28/记录一次wp重装/index.html","2c0bc60edc7b7fc2ddbcf7f7e8545d77"],["/2022/10/01/Obsidian学习/index.html","ad7b4c7ebb2026e8fac06f5ae426d08f"],["/2022/10/08/vue-element-template实战/index.html","f1221f3ccb53011e9821868111c557fb"],["/2022/10/25/vue网上商城项目/index.html","cd5693f0e7429ce3627f3cdaad12ebd9"],["/2022/11/11/leetcode刷题记录/index.html","597feffc0728b179adce39a9082c1c3d"],["/2022/11/11/使用overleaf优雅地写文章/index.html","4b0f914d04b78e5a872fca06915bc294"],["/2022/11/22/磁力链接与RSS订阅/index.html","2bca15ac38c42f6e1a6c65678ba20e8e"],["/2022/12/11/uniapp申请获取地理位置/index.html","2fbe156d1faa4487fb57eb7a0be96028"],["/2022/12/26/pr剪辑学习/index.html","ac481719faeda8e346e0010cc75694c5"],["/2022/12/27/css中的flex和grid布局/index.html","b4175dce1ddde9e388ba7e60de1352df"],["/2022/12/28/Flutter学习/index.html","f4550245afee7a356ce801c23fe9bd8e"],["/2023/01/01/美化github首页/index.html","e3cc78b3860f7f2721b84899ff1626ff"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","280c7724c23f272461bc983026b77068"],["/2023/01/04/构建微信快捷发布文章工具/index.html","e93700290f64d6f4084bdf6f33bc0946"],["/2023/01/14/dart学习/index.html","2197121345dbe7fa987b6df41707c02a"],["/2023/01/23/闲置服务器BT下载影视/index.html","33aadc89955fcc82200fde8a1ee13448"],["/2023/02/07/TotalCommander使用和学习/index.html","b30e6fe8bc83f7f5ed76b3be22b13749"],["/2023/02/13/docker学习/index.html","c4954f5968022c06b41eca025d37f02e"],["/2023/02/17/DLHLP学习/index.html","81f41f79a11b2b265ad79d2d61b10a5f"],["/2023/02/18/学习purecss构建自己的css框架/index.html","1fde2fa7948368d6a4f55ba6cff79d7d"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","7147dff8b64aa2cb09b30d14334aad22"],["/2023/03/05/STL学习/index.html","c676f90dc1b792cc9902c52efa861346"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","2d05a47d59ba355db06a143d6147a193"],["/2023/03/23/实战写浏览器插件/index.html","0911bc1e46da5690d123e62cc06b5760"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","6204f4f5d21ebbf31420313e3149dde1"],["/2023/04/02/EndNote基本使用/index.html","aa0c9c50cef84d0f152c35a24c7170f6"],["/2023/04/04/mne处理脑电数据基本使用/index.html","c8b90d3141b05efe075022afe5b53bbe"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","576f6ffbdb3c1697cbc3fa8dc5519f82"],["/2023/05/02/python中的logging模块/index.html","8f3890127eb4f2c4b664ecb85676472b"],["/2023/05/07/python的特别方法与装饰器/index.html","879b09ef91cb18fdba8110a769365caf"],["/2023/05/20/Wox插件编写/index.html","38d21d1ac62268aff78aa9eec872ccd1"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","2c83e79f58c51cd4cdbe4bea3718b0a4"],["/2023/06/03/深入Clash配置文件/index.html","28c29d7b64fdf866d94d0525fe7d1198"],["/2023/06/10/node的包管理工具介绍/index.html","08837c89a4a674af495afcd9f979e086"],["/2023/06/12/AI写作工作流/index.html","c370bb2b52273c45630702ebcf76f823"],["/2023/07/07/Astro-Vercel部署博客/index.html","0d29fcb42085c964285d7ea6838fd32e"],["/2023/07/09/青龙面板部署项目/index.html","8c9b7be16cca0c3840c568f71336f892"],["/2023/07/29/CSS-Modules介绍/index.html","7be2e6d60bb8647c1bc98579b5ee2d74"],["/about/index.html","75083c62a77b6f0db62ec9319d8f1a81"],["/archives/2021/04/index.html","32852312e4ba722ed4ba3a75ab1565e8"],["/archives/2021/05/index.html","9411bf937fcdd4d973dcd8c6645c5ebe"],["/archives/2021/06/index.html","fd571e241e549ad143bc924d496b5b53"],["/archives/2021/07/index.html","01be1dfe4e2f46f144666670c0e32cf0"],["/archives/2021/08/index.html","40a06ece591a14d177c5b8b1755dca07"],["/archives/2021/09/index.html","091c44b6b3a2fa17db85a4b441930a29"],["/archives/2021/10/index.html","2ad4c842230e6b9a0cb17b1aa5c6a638"],["/archives/2021/11/index.html","cb100918117d978fb659362844870ffb"],["/archives/2021/12/index.html","5bc599105167b8ff9d69857cb047e12c"],["/archives/2021/index.html","76fd562430d894240d0479c6c3621a2a"],["/archives/2022/01/index.html","8b6dc5695df95f5629ad6c0a85b329e9"],["/archives/2022/02/index.html","7edc686972add2a2e28b4be5be4640b7"],["/archives/2022/03/index.html","7cc1fe6a09a1594b47a49fddc35f0061"],["/archives/2022/04/index.html","78bea069513eee68154fe5e079b28542"],["/archives/2022/05/index.html","d7cfb22663e2b17988ca0c96e4a880cc"],["/archives/2022/06/index.html","0ce5bbd1b8d1b05204e62244f1ecbc87"],["/archives/2022/07/index.html","2e99188339fbbe5b7b4f0afe25e07273"],["/archives/2022/09/index.html","88d58b2da2a5358cb6fa299f66bdbcc1"],["/archives/2022/10/index.html","9e57884259c440b3bb86bcb2b6b3d3bc"],["/archives/2022/11/index.html","9ef6def4e3c1ed53b47dc2942af4e679"],["/archives/2022/12/index.html","7db6c18054aa9ba50a39775f35369800"],["/archives/2022/index.html","8ea73cf2f3f27b951adf3e3e5d7f2d13"],["/archives/2023/01/index.html","c2327543f2ba172aa34730342317b3fd"],["/archives/2023/02/index.html","ced3820e1a989552b6cf24bf3a553375"],["/archives/2023/03/index.html","66238fd2faa2d77bd14272b48caaaa9a"],["/archives/2023/04/index.html","06024c6360c810c63be0c23373ac78d0"],["/archives/2023/05/index.html","9e7a87f0003ca9937c57f3bafa2b364b"],["/archives/2023/06/index.html","04252dba7eadc1002174090d43207b59"],["/archives/2023/07/index.html","f71dd2d94a937c519f05996500423fb4"],["/archives/2023/index.html","a030a7b12a459674ef10fd54be3a10bc"],["/archives/index.html","d7709daa886815f19ef3308de1bdcd9d"],["/archives/page/2/index.html","a4297a3ef6e846cf033afaf7ddcc132d"],["/archives/page/3/index.html","14fd9350c24258a389ac4e02e1a5afca"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","37203f22572b9ea121fe0ee2e46bdd23"],["/categories/Linux-study/index.html","9115ebb1d923f22d977b6832ff9c84e3"],["/categories/ML/index.html","85feb5105b404e0e7242805daefde446"],["/categories/Nginx/index.html","5df40df4b60dcc47bf5be7f934ac5841"],["/categories/Spring/index.html","37551b76f655e4675b6962ddf5c479aa"],["/categories/course/index.html","79fc91182f1865370cddb6ef67866ec9"],["/categories/django/index.html","fbfbeed188f6c7b3f8879434cba1d6eb"],["/categories/fun/index.html","5bcfa040173b77d151d0d654ebeccfe5"],["/categories/gcc/gdb/index.html","aa151b4ad529456c493e8c6ffb88ca33"],["/categories/gcc/index.html","901f425fc9c7561f9d6ce588eea3425b"],["/categories/index.html","7ff0fb9cbef7477353e115929b7496fc"],["/categories/java/index.html","b794ba5c4da1e9c81b31bc3d57952cac"],["/categories/latex/index.html","517cfabb1a3fc8518d593a5b4140174c"],["/categories/python/index.html","29a9070abde2606697d7dace503024e5"],["/categories/study/index.html","818ce38abd26f955f87c92678f7a66e3"],["/categories/vue/index.html","9e1d134bc3f2a9b827fb24f710d44301"],["/categories/误区/index.html","c539b28dfd9a178c851f2ccf17523286"],["/commonweal/index.html","259884e8cbd1cd4df675357430676d70"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1000303ed7f9bec185b5a4005a282c1a"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","795df0c20049114b43d7ed98eb8d0d3c"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","065dd4d038b79f23b6bd0e659877aabd"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","2552b07463d9d39ee14422d080011192"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","e2218613867d69a9174ddc120171b058"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","4f9025293f0d02c5deea9a3b4c2b9512"],["/page/11/index.html","60abdc3aff89c8a3919af5a2469f34c0"],["/page/12/index.html","7bee846cd4a6a6fa0db52907b416f642"],["/page/13/index.html","9400ce81901e234b51c22cea78875fe6"],["/page/14/index.html","4349bb8e914f3bfb1aba862508e54fb3"],["/page/15/index.html","53a4cea0d4d4d0c32adc4fcfc9365304"],["/page/16/index.html","20a643a81ca338c77fade7bf3d1ee556"],["/page/17/index.html","59ad4adc5597b126bb57b871394879da"],["/page/18/index.html","004e3cacea8b49b74a171492d429579a"],["/page/19/index.html","eb5e77ae3b5b11ea23139f65cc83ffdb"],["/page/2/index.html","e98ad5a233db9f264f4f6e5c7eba5a94"],["/page/20/index.html","cc7d207d7fdb58a7017eb40d442ae749"],["/page/21/index.html","9b1d4a0c0ab5d9541532956e837e17ee"],["/page/22/index.html","16f35ba7a9e6ec9c160f3af246ad91b2"],["/page/23/index.html","96f568453c8bbe2aed57df0b47cd90c4"],["/page/24/index.html","b98fe41af05d32aaf383cdaab8bda389"],["/page/3/index.html","9970616b719b32191300fb8d6a6a0493"],["/page/4/index.html","68ba5bb8f4750723644fc29255896b2e"],["/page/5/index.html","763d4dd77eac36937ae49513457658e1"],["/page/6/index.html","3e098d53f5905f5b915966ec88c0054d"],["/page/7/index.html","d241c2dcae26d1828bbb2ca63984d4a7"],["/page/8/index.html","a1d03d742257e0ce5dad9248c8c56cff"],["/page/9/index.html","401a95ff45d0b4949d00a64df70845f6"],["/resume/index.html","f70188ca9f2c1554d7f997fe727755b9"],["/schedule/index.html","a9aa66109f45b7d2fd7faf8aca2e1cc7"],["/sitemap/index.html","b5e5d57756f9ca9aa1245b627ee5a0d0"],["/sw-register.js","1396478e31b32726c51c4dcdd5791122"],["/tags/AI/index.html","cb70668ce626b18987b86c328e865476"],["/tags/Astro/index.html","0734a9d3daa0cedfcdc2e26fc216321c"],["/tags/BT/index.html","40824b1325e362972c3d4f92ba246c98"],["/tags/BaiduNetdisk/index.html","0c61ab5d1d57bd9e91dc80af93d8d12b"],["/tags/Bootstrap5/index.html","7d6b7d8b0786aef24cca0149c905f84e"],["/tags/CSS3/index.html","b410a7674e9f4d3b508b6d41dd92bbaa"],["/tags/Centos/index.html","16b7e6fa99ff756ac909daf329f5ba82"],["/tags/EEG/index.html","d7dedf5a299b0e0f77c6e2c2de69e832"],["/tags/Electron/index.html","0572d7fe7bae3d44cd0cf0042b9e6a0b"],["/tags/ElementUI/index.html","bbb4dd6d0bc49981d041b510ecd8a812"],["/tags/Flutter/index.html","017bb26cb7d45a134a1bd9224d665b8b"],["/tags/GAN/index.html","656d9d24161954cce076a6db2ca88ddd"],["/tags/GUI/index.html","24590e8504744c7520a39cc3eb13b01f"],["/tags/Git/index.html","44f9eb3dd377a99128d75c5eb7697a66"],["/tags/JavaScript/index.html","9c37500e5e757f50a87fc32b992cc2a1"],["/tags/Keras/index.html","316e710093e13d03b3bd43d730fef2de"],["/tags/Linux/index.html","b501f56139c5ca6d83c120e2814b8e44"],["/tags/ML/index.html","61310e81e9731a08affff9ab2f1cb5e7"],["/tags/MNE/index.html","20f62c5357c2cf6c05efb98a63c4cafd"],["/tags/NLP学习/index.html","ddb1acc458205edd3cafd7c401bffc32"],["/tags/Nginx/index.html","3747119d1a05e48a8dbc3a95dc3334c7"],["/tags/OSS存储/index.html","7d82bd010c0876673c3da91d759580f7"],["/tags/Obsidian/index.html","27a346d76ef4977525ec7a173bb5a760"],["/tags/Qt/index.html","d38bb304ed70b09d800e972a5eadb2c3"],["/tags/RSS/index.html","5336af591a4045350b0f845c8e69859f"],["/tags/SSL/index.html","2d033854b720bb79afe56f3e0b04024a"],["/tags/Scrapy/index.html","a361cc057d8b575f33dc79b5c7527bef"],["/tags/Speech/index.html","24bea61800097616b1960a7ba0d6bdd9"],["/tags/TotalCommander/index.html","c44f5b7990d85ecb9dd9ad23db4b5ba9"],["/tags/VPN/index.html","cf26f4301747b9892320d053c98bb17a"],["/tags/Vercel/index.html","edad4d6cd51bb05c1305d18ad99e681e"],["/tags/Web/index.html","24bf3e767620761ef94c26562e5a7eec"],["/tags/algorithm/index.html","0a0560286b271d164b9b498629b4eba9"],["/tags/bison/index.html","1a9560a64639e8f896f8f1f512e4f06c"],["/tags/bomb-lab/index.html","76f93645ca673f1a7360bb7eefb7bb05"],["/tags/c/index.html","a61eda1950f74d194b58ad9593e6bf13"],["/tags/cheerio/index.html","fd8afcdcb6276b21b436c22801465d1f"],["/tags/codewars/index.html","522f7c0d9871b7a91000e29477160d91"],["/tags/compile/index.html","806bc8a583835d7e6435ed4deb436feb"],["/tags/compiler/index.html","8d092bb33296b3f971d31f4f69a94808"],["/tags/cors/index.html","fab89b260430d3dae2aec32c28eb122d"],["/tags/course/index.html","1c81d7c831632fd88b59dc047d52500a"],["/tags/cpp/index.html","c23eb75adfce01109235c3d82adfedd8"],["/tags/crypto/index.html","a40b16e19f1ef140073cf3ce5da5fce9"],["/tags/csapp/index.html","0ff64a4c5dace1bd0e4ffa190fc1f310"],["/tags/csp/index.html","e2bafcacef2033019131ef3f6355d2d5"],["/tags/css/index.html","3f213bd96e8f0d46180b1e0be50a700a"],["/tags/dart/index.html","0e64ef572f79deacc247f6d4fea6d4ea"],["/tags/data-structure/index.html","c1746234fe12470e7a91622f91f33e12"],["/tags/database/index.html","78e95e374283b52a0c0a9bcf5ce46f87"],["/tags/deep-learning/index.html","9f6c58ada744ed98789f0ed1e10cd0ea"],["/tags/django/index.html","04906605fee4c39003c16c50f2f6eeec"],["/tags/docker/index.html","fe80b852c812b8caad32c2fedc5822cc"],["/tags/dwm/index.html","dd4d1931a287784ea9a67c54cdabc8e2"],["/tags/exercise/index.html","b74ff81fd82bd2567f7a5d6c32ff7f5c"],["/tags/filebrowser/index.html","e3964d7a4a8504f2bd14db50c6b821c8"],["/tags/flask/index.html","31f1fcba37bd330d4a8a8021bc592679"],["/tags/flex/index.html","37eabbd0ff71137638a38bc875d37d2a"],["/tags/front/index.html","dc151b47ccddaca75a7da9000715343a"],["/tags/gcc/index.html","c9819c93ba751649373e876960d95ea0"],["/tags/gdb/index.html","05590acd9405c28bcc0887805b482c2c"],["/tags/github-profile/index.html","890f0060f8761bc5fe7b4af90459fccc"],["/tags/github/index.html","2ed9db48a60a4412ed01fc386c1d1ff5"],["/tags/graphviz/index.html","08298b88955add613ecc773c27627cd3"],["/tags/grid/index.html","46e7b6e7a89680f52690796cd9321ca1"],["/tags/html/index.html","ed8b1b5e3a72ee6776f592060ab9c9f7"],["/tags/i3wm/index.html","c7e0ffed544c4b87508a5f48b7c03fda"],["/tags/index.html","e3e6a8806f969c6222c8ebc278ac6f69"],["/tags/issue/index.html","81f0d3adf24f04e6782a59c29315777a"],["/tags/jQuery/index.html","2ac0c0ae1544728d9d4aa42551deb159"],["/tags/java/index.html","82b7716db8732d8fa763d1160d060996"],["/tags/js/index.html","03171b79a79e3d29c10bf542925b869a"],["/tags/latex/index.html","6b68aed0a76eda598e27d741105568bf"],["/tags/leetcode/index.html","1e7f6e3e24ffc42ad3e3df168869eced"],["/tags/lex/index.html","dc11b113a1fc34670c600baec594a70f"],["/tags/logging/index.html","72571011bbbd60cbb040f24b4719f7c6"],["/tags/material/index.html","71a2adbf85a79487ce5d9ded597c7163"],["/tags/music-player/index.html","33afdd6f790e1ff84207047bd6e8b1dc"],["/tags/node/index.html","c08c41d8b71ba03efea73eb662bd77d9"],["/tags/nodejs/index.html","8b244b78d830db322f7293d7e5351f41"],["/tags/noj/index.html","e056450e31df75ab3437898c0e26b59a"],["/tags/npm/index.html","c5acfe9593dcc0c07d1355e85bddd40a"],["/tags/opencv/index.html","93425c78083671ce7abe66c4173ead56"],["/tags/overleaf/index.html","91d79de93a5ca2d0ee192efcc72237c1"],["/tags/pandas/index.html","47863f6e85d73554c683295640525953"],["/tags/paper/index.html","26e0ef28f6e9b9577bd87526b0816e1a"],["/tags/premiere-pro/index.html","277e06ec994e34a7018a3a9c9f1b3910"],["/tags/proxy/index.html","e36e06bb8dd5e9dac82eb7ca6845882e"],["/tags/pure-css/index.html","4eec362cd2261c1cacb5ab520d4d537b"],["/tags/pygame/index.html","4f95c4dd03dec5ef601ef19210dccc8c"],["/tags/python/index.html","0d6a057b6491c7e064e9f204b8361a7c"],["/tags/python/page/2/index.html","328ad8e84c125a9fc02dfd939eeb23ba"],["/tags/pytorch/index.html","3019256adb5abe5c7913478ce0b0bd41"],["/tags/reading/index.html","ec6dbadebec3a644235b3ca45c352b9d"],["/tags/request/index.html","4dc8449a80d293ecb1b6329719b5ee9b"],["/tags/requests/index.html","e05f3cc192cb9798230689197bc1ee78"],["/tags/security/index.html","dd4a6efba5d31837d5df28429e0058ba"],["/tags/shell/index.html","72f241a36138bd23bb3c9721a27f6e77"],["/tags/sign-in/index.html","50e549cf11247767d7b2b320d989d49a"],["/tags/socket/index.html","af77b6eeb731b4f33d241b0da9fea7ee"],["/tags/spider/index.html","5cfd7df02ef5ea0c0c1da88d84d24791"],["/tags/splash/index.html","38f5fef13169f8409c1d2424572c04cd"],["/tags/stl/index.html","dc8d400a3e6b4244463b6f3edd574450"],["/tags/sumatra/index.html","10d1278c72256f2a9dafe085a46367f8"],["/tags/superagent/index.html","61cfacb0a699cafe35798434a0df08fc"],["/tags/tensorlow/index.html","333697945073379a629a482251512f32"],["/tags/tex/index.html","d2f0afcdb3fd51a39198e29bcc864c36"],["/tags/thesis/index.html","e1dec6baec6849198a4b284a7019e7d7"],["/tags/threading/index.html","a1b61d6f03d92fa2aff7d1146aac8bff"],["/tags/tkinter/index.html","b5f92f012aa7afe97fe423b131c00d7c"],["/tags/torrent/index.html","e466a8835a98bd25fdc36f98fede0c5a"],["/tags/tutorial/index.html","929a3f38531e0f86a0afa114f387fe44"],["/tags/typora/index.html","78f15e836193d02a9a8ba67fca39a24a"],["/tags/uniapp/index.html","24073006c9e41892b0b510db0d4be6b6"],["/tags/vite/index.html","c941643cdb11d75f66e9ce97b8121df8"],["/tags/vscode/index.html","c37cb34e9b9b79867fb0be554c4d2563"],["/tags/vue-element-template/index.html","57f7e872de3f0afea7c455676630bbb7"],["/tags/vue/index.html","b2453c441bb20ce78a3175439e2300c7"],["/tags/vue2/index.html","8c952a49ec164250b405fc7795a3135a"],["/tags/vue3-x/index.html","9653446ab23f7779bdea40e11decfbf2"],["/tags/wechat/index.html","35ced2ee7b322f61a0cf1bf6bd28a57c"],["/tags/wm/index.html","666041bcb51f923fd61a5465afacc57f"],["/tags/wordpress/index.html","494b60b995d1497c492ea052f318ec4a"],["/tags/workflow/index.html","ad0b424b5d84e728557fb7dfa27e420e"],["/tags/xpath/index.html","4327cf1d95293abff448208150db9ce1"],["/tags/yacc/index.html","e1b8c18378d17c9abc54ee848157d365"],["/tags/yarn/index.html","e1d82a13e63aafd5ec6d2bdc3e4ff156"],["/tags/zsh/index.html","86a2640e0ca8f0c19e516455fb758ccf"],["/tags/七牛云/index.html","436efeedc72627ca54a8145efb078728"],["/tags/函数/index.html","c54b72d327b97f14ca11014e5e23c32a"],["/tags/剪辑/index.html","a6e130e29e8ec0d62bb82155c25d80aa"],["/tags/存储/index.html","944d535d36b9f8ee36950eb7bdfc9e62"],["/tags/实战/index.html","cb9c800ec6cd7374221970f2ee913f81"],["/tags/工具使用/index.html","a413cd8672febfc32eec29d74447f6b1"],["/tags/建站/index.html","089e19048a2695f41966404e84fff787"],["/tags/微信小程序/index.html","5a6c56130acac9dbd39bd4b63464a3be"],["/tags/指针/index.html","5319918de26c7b6e9f2a006cf55fb6b8"],["/tags/插件/index.html","507bc942f3bb55e6dbdedcf77eb98bf1"],["/tags/效率提升/index.html","798f54ade08a0d574e86be6ee4254e19"],["/tags/日志/index.html","ed87899f7d1e54391cc5dfd4689e7f1a"],["/tags/汇编/index.html","ba89197e3d755323ae6849dd7b07958b"],["/tags/油猴脚本/index.html","cc343738c068c81f09995cba53638890"],["/tags/浏览器/index.html","6b3e37e900e876c3e85c1d82415a89fd"],["/tags/爬虫/index.html","67e2bb499d9027c64a1efc62673429ce"],["/tags/算法/index.html","b5e8531710031972a8ea4456f555ccfe"],["/tags/编译原理/index.html","c8251d910b3b580ac61a965abf823306"],["/tags/获取地理位置/index.html","5c00460f921653ab75cd285208aeec9c"]];
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
