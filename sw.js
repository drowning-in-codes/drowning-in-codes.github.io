/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","4807a165c5b916485ebb437c8eb0f85f"],["/2021/04/20/稀疏矩阵/index.html","71b8c58e871e0e6fae3c2773ca651dbf"],["/2021/04/23/广义表简介/index.html","097518bce3f4a22963df2d84bf79f4b7"],["/2021/04/29/关于指针和函数/index.html","99b29685a6cc5d6fb0df33a1fbc86f54"],["/2021/05/10/哈夫曼编-译码/index.html","2a8027c5fe377c36e3a26b8d32e9a77d"],["/2021/05/17/数据结构noj_2/index.html","42f4816b1d74457c327ac44c034c342f"],["/2021/05/30/数据结构试验/index.html","647ab32e4c20329779e34fcfcfdae206"],["/2021/06/12/数据结构noj-3/index.html","68a231e26fc66869a97c11714fd2d54d"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","4787e5a9b60f252257f5a68bd4a3d855"],["/2021/07/08/课程资源分享/index.html","f0b6dc9bbf23812d93a87d7a983bde78"],["/2021/07/20/Scrapy-下载图片-文件/index.html","de4891736cd26218ebe332adc93594c3"],["/2021/07/21/Scrapy-动态网页爬取/index.html","8bcad5cf5de903ae1876402249a0dc33"],["/2021/07/21/疫情打卡/index.html","6b0cda33b221d6c5e51ae84937053298"],["/2021/07/29/Scrapy代理设置/index.html","e04e983af76044efa83c240d5cb65a66"],["/2021/07/29/数据库认识/index.html","60f2f69f97541fc7bf3ef47d53d1bfb9"],["/2021/07/31/Python多线程学习/index.html","a66e9380e5703965dd8e5c0ccb0268ad"],["/2021/07/31/tkinter-requests练习/index.html","a35816099d6bfc91e530c5c3420297e9"],["/2021/08/10/Git学习/index.html","2fb6db9929168fa47e8136fe9906fc0d"],["/2021/08/15/pygame实践-1/index.html","e90de24c1fa9827601abaa6393fe6875"],["/2021/09/06/微信小程序开发/index.html","c712f256707c10f24d852fee3edd4f55"],["/2021/09/21/命令集-1/index.html","fe9a3a3e7aa20ad72aff136048df7c56"],["/2021/09/21/命令集-2/index.html","fc9f8c23f9b26461b2e004f28086dd09"],["/2021/09/21/命令集-3/index.html","c6a94af56f0bf96ccea2c29d68b7727c"],["/2021/09/21/命令集-4/index.html","6f0e3211b2a98c49c34e57ba6ba41e0e"],["/2021/10/03/socket学习/index.html","aff3d76c1a866296355ed24b63cbd396"],["/2021/10/10/dwm入门/index.html","d418b475cd9220bd9553353ce635a8cd"],["/2021/10/10/安装ohmyzsh并配置/index.html","ca4ed22296861b32564bd54ab61ace38"],["/2021/10/20/css学习/index.html","beb1ea10edf1aa40f0b1ae5cfeb6f488"],["/2021/10/20/wm入坑/index.html","29489f38de6cbef44bd64e290dbc47fd"],["/2021/11/03/微信小程序学习/index.html","022ea3cfc89cc32fede094c0e1e5c590"],["/2021/11/04/css揭秘/index.html","2413112035adb9e159b48d004fbf110a"],["/2021/11/05/css-练习/index.html","f1838a0861d1ab5afee719c913d41abb"],["/2021/11/21/命令集-5/index.html","6c165611886ce0c1622f34668bccec31"],["/2021/11/21/命令集-6/index.html","8f6f397f3df01254b32444bab57c2ac0"],["/2021/11/21/命令集-7/index.html","68cda22cc62674d9da18952e0c5880ec"],["/2021/12/01/搭建wordpress/index.html","0d79bdae3df15d34287310361b90a196"],["/2021/12/08/python操作百度网盘/index.html","17cab1e5fe1a60308ef79c359bc07dd6"],["/2021/12/14/js爬虫/index.html","b03ffb7e308349e3a430189e2e933e87"],["/2021/12/25/为网站申请ssl证书/index.html","0eb504c4f010dc2579edd2bd7014e536"],["/2021/12/29/使用七牛云为网站提供服务/index.html","4a164a1fe2c84a2d17acf2de7fb31b3f"],["/2021/12/30/jQurey继续学习/index.html","5352e9e9d85d7e875c086d760988e1ff"],["/2021/12/30/jquery学习/index.html","a92d33d80f5bc1f2767350d8717f921d"],["/2021/12/31/vue学习/index.html","b2562fc3fc55fe4073c4a1507f85336f"],["/2022/01/02/疫情自动打卡/index.html","9dab06ee462c221b6247e7098432b7fa"],["/2022/01/03/javaweb初体验/index.html","7d33e2dd3b5eeda125525dfd7129ff26"],["/2022/01/04/codewars练习/index.html","dd4b80ea8026e4911b6a1c533211c29a"],["/2022/01/05/Spring学习/index.html","118b415a0e771db76f4737daf4c1a09c"],["/2022/01/05/vue实战/index.html","c301063b9fe9ed1faa3a3b9b72dbbcea"],["/2022/01/08/gdb-gcc学习/index.html","3305c7534e16626b23212c2a5bf883b6"],["/2022/01/11/python-opencv学习/index.html","71a601186ecbf7502ebc3b49c780f72b"],["/2022/01/12/汇编实战/index.html","397a53f94e90e7e1905e182ac0954ca8"],["/2022/01/17/pandas学习/index.html","44030ff8d22f33432ef8a4419cd742dd"],["/2022/01/19/可视化图的工具/index.html","9e3d4d39c7e4c809ac645c752072c2fc"],["/2022/01/19/机器学习入门/index.html","22c422fd990ed29e25a239b8f2566d07"],["/2022/01/20/cousera-ML学习/index.html","73f1abe673fabd39305b43e3122a2cbe"],["/2022/01/30/typora解绑后出现问题/index.html","e327a86286c0a678db66171f35c47040"],["/2022/02/03/NLP学习/index.html","3fed2cddf71cc0821e2b58c07261fa9e"],["/2022/02/04/Web漏洞学习/index.html","7c663aa26842f896c5e6a8ac76c043bf"],["/2022/02/04/pyqt学习/index.html","dbdd0895db10dc263ad8389cbaa6eb8a"],["/2022/02/04/python爬虫/index.html","d28616242682217a34dc162cd415d863"],["/2022/02/18/Electron学习/index.html","f0a364d0ecfc6eb54c6d12816bf4ba19"],["/2022/02/22/疫情填报字段解析/index.html","977e78a8567c66375a1978c5859a16ba"],["/2022/02/24/Bomb-lab实验/index.html","b4e769511115b07d8c09e8ee0fd0ba0d"],["/2022/03/05/nginx学习/index.html","dab33e548c0d7e075ea2753ad92ca48c"],["/2022/03/09/汇编原理课程学习/index.html","f379fbf6e2018806e0559ff74071d780"],["/2022/03/11/Keras学习/index.html","3ef4e77828dadb098d2acfc02e82a8b8"],["/2022/04/01/graphviz学习/index.html","657c4a20a237594faccfb0fc7b68b3a6"],["/2022/04/07/django学习/index.html","2a9252d7ed00e85ed521220fead1d5d9"],["/2022/04/11/密码破解学习/index.html","5186830d44e0e92affacc5fd9d02c157"],["/2022/04/12/flex-bison学习/index.html","402f8a1e825dddcff568713f28cd5007"],["/2022/04/15/pytorch学习/index.html","ed8961f0a4630a5ae9dc13c0d1591518"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","4529455d30edb502f2ca4aaec7ff723b"],["/2022/04/23/写一个音乐播放器/index.html","d6a9a8df12bea9075cbfa035c36ca73b"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","de53ccf4a492323701bf3bf126fd2270"],["/2022/04/30/GAN学习/index.html","2a6e7af33e933a98b415e3391bf2d1df"],["/2022/05/02/html精学/index.html","bbed6f2bb1bfe419d33acebe1e9a60dc"],["/2022/05/06/write-a-compiler-by-yourself/index.html","b0479d59471c53e4a0dbb513cf76b338"],["/2022/05/30/acwj-01/index.html","afc70b8941bdb69fd691544c066f1230"],["/2022/06/14/animeGAN/index.html","3add5436bd9938ee4f468d04af7d9d15"],["/2022/07/09/c-与算法学习/index.html","b0c9d076d5a4fbc8c69c378278ca9f28"],["/2022/09/19/flask学习/index.html","d08a29438125f5437460fe97feee41ee"],["/2022/09/22/cs224w学习/index.html","a2e652a342bd3632d9f446bc90881181"],["/2022/09/28/记录一次wp重装/index.html","26220195bb2b5d9bf740b3f3b2bef007"],["/2022/10/01/Obsidian学习/index.html","fe627a3ea384ecb66948166dde8af0b7"],["/2022/10/08/vue-element-template实战/index.html","9d8b96af5449b0c3e66f25259e545a89"],["/2022/10/25/vue网上商城项目/index.html","46627e64d664853c438d6602ac412151"],["/2022/11/11/leetcode刷题记录/index.html","c6394d01255e3640682cc9ec03217ed5"],["/2022/11/11/使用overleaf优雅地写文章/index.html","9c90ad8af65f73ffcfadcbaad4a59b3e"],["/2022/11/22/磁力链接与RSS订阅/index.html","136e0f7e1e5030764a15e862fc409870"],["/2022/12/11/uniapp申请获取地理位置/index.html","c362e0de948e3a90338a540ea9ebd1bc"],["/2022/12/26/pr剪辑学习/index.html","4ea8cb291dea9f39eafafdf091483aee"],["/2022/12/27/css中的flex和grid布局/index.html","c1873c476d70808e2a30814ed41b5c6c"],["/2022/12/28/Flutter学习/index.html","a8a7284ea624897ac1625f07aff97c5a"],["/2023/01/01/美化github首页/index.html","e343c962540489862fdd4e89e73b54b2"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","1a619a2a00c18d0383c56ef0278ec4a9"],["/2023/01/04/构建微信快捷发布文章工具/index.html","ec49c6c0b9f245a22e30dcc9ed5a064b"],["/2023/01/14/dart学习/index.html","d5a32c87727ec4f3797f0798ef2c0a1f"],["/2023/01/23/闲置服务器BT下载影视/index.html","ffbc24d16c140b4d1f6a68b6330314de"],["/2023/02/07/TotalCommander使用和学习/index.html","d3b9269c4a7c2d646a72abe051547b15"],["/2023/02/13/docker学习/index.html","47600d8050797b3d5b1624277cd5cbe4"],["/2023/02/17/DLHLP学习/index.html","0e7bd78436a0d9f122bea3a349010303"],["/2023/02/18/学习purecss构建自己的css框架/index.html","32397c88ad3e26cc6925a2c366ae80d8"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","9d7c7e7816d69fd26ecf5fed9ef61584"],["/2023/03/05/STL学习/index.html","e625cb4fe1dad2aceec3187413940e0f"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","f7602e3f0ee33bd1afef8db0a1d9c91e"],["/2023/03/23/实战写浏览器插件/index.html","4abc484fd55e62cfb81507e940df2187"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","ad60b173b3fc88e19593ac9d4a31defa"],["/2023/04/02/EndNote基本使用/index.html","a00aff218e5341c657aad84bbda5e6bc"],["/2023/04/04/mne处理脑电数据基本使用/index.html","b10a4e4b470791cb66cd5b28647d939d"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","17fa0b6bbb4baa1fe2ebfa6636afa7de"],["/2023/05/02/python中的logging模块/index.html","8f0bfc769b23a10a08c53c15a6963df4"],["/2023/05/07/python的特别方法与装饰器/index.html","b72ff3c04872268ed4e7e4df8e05b75b"],["/2023/05/20/Wox插件编写/index.html","dd5bd4ab9d66f0ae4c6a4fedf1688950"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","d82e8b5ba4e5fe07242ec123f484021b"],["/2023/06/03/深入Clash配置文件/index.html","304f68eb3f65dbe15101b1adc8dcac68"],["/2023/06/10/node的包管理工具介绍/index.html","b46f8df631fdf79dee17fb4a5498663d"],["/2023/06/12/AI写作工作流/index.html","0f27eb7b8f49065b443ec95b3adfb5bb"],["/2023/07/07/Astro-Vercel部署博客/index.html","4b734fc395573b484307bd046d9bfc9f"],["/2023/07/09/青龙面板部署项目/index.html","4e1508df1dcb25cecc24e5c4844df1c0"],["/2023/07/29/CSS-Modules介绍/index.html","8748eee2e44c619979c8843956ba6041"],["/2023/07/30/浏览器JS/index.html","4c6b3d1b81d7924be0dd420e82585972"],["/about/index.html","6446506c7c67cbb80f25cc9bd2def12d"],["/archives/2021/04/index.html","f071094c970e64b1f9e13e09f647f85c"],["/archives/2021/05/index.html","db2463cae964383eefd58a5013a82bb1"],["/archives/2021/06/index.html","12bbe4989ebc32ae8e3115011b44973c"],["/archives/2021/07/index.html","4c81c6059704cb9e926980a5ffb8c05e"],["/archives/2021/08/index.html","1ca243bca76811dccddfbd6dfd24db33"],["/archives/2021/09/index.html","bb0574187a6eb8effa3a6e048fb05fec"],["/archives/2021/10/index.html","42d57f79919d6d91775eca007581dd5b"],["/archives/2021/11/index.html","14d3c213379b40953223e0050aac8ee9"],["/archives/2021/12/index.html","a4dc5f0940b917052b3a2458ccfe7bcf"],["/archives/2021/index.html","0eb13c6bee083577d88b35cc002c1bd3"],["/archives/2022/01/index.html","8e0ea7c5f595cbe611b4f07b176d6d6f"],["/archives/2022/02/index.html","317890fe48cc3c26bc0f9f3d88954b07"],["/archives/2022/03/index.html","402606ed3f92bf50d815bf20cbbb8e78"],["/archives/2022/04/index.html","749da0c349073304f916f39d5d96e210"],["/archives/2022/05/index.html","bb6439b015e10f2060c04b5295d24aa3"],["/archives/2022/06/index.html","845aff11777706ee732515b12d48ad0c"],["/archives/2022/07/index.html","5705035a7098071a63cf33f24d02d68f"],["/archives/2022/09/index.html","c6542aa215b3cc62c7da3125a581b547"],["/archives/2022/10/index.html","75f4fc16620e63d3363eda49202e25cd"],["/archives/2022/11/index.html","69b7d0fcfd13bd8a899ad4f0670625c3"],["/archives/2022/12/index.html","cc4c6e26b2cd3f50b68b98d26e2ec634"],["/archives/2022/index.html","1dd3f67c00ae7c90c3be3cb6099d4990"],["/archives/2023/01/index.html","81da374892d208481fe2871c8a5da3c5"],["/archives/2023/02/index.html","d1f15052bd9cc102ecc073c132561f93"],["/archives/2023/03/index.html","1cf34e246eed309a8b4fe5c6f2bf5611"],["/archives/2023/04/index.html","62525d209cb5eec04487b108d9f6499c"],["/archives/2023/05/index.html","014bdd728eee814d52052ee7969502f4"],["/archives/2023/06/index.html","8ace256b574d6cc96a7d1cfeae11d372"],["/archives/2023/07/index.html","b886be564866c55418f3058cb58dccc7"],["/archives/2023/index.html","320970e97fa2a857245ace65b58aac96"],["/archives/index.html","2d9a0bedb0ea0bebb16317e197397620"],["/archives/page/2/index.html","80ecb08ff04b26ae2b002b53c3029b5c"],["/archives/page/3/index.html","480a7a804cabe118a889e79529dd21c7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","44908e0ce1bd23cccd835b9827b033b7"],["/categories/Linux-study/index.html","50fce3a84839d7ad8ad82c945d9d2a52"],["/categories/ML/index.html","64ecf144bfc2a052dd4165117126b6e9"],["/categories/Nginx/index.html","b1fa514b95b9ac022c30346c7aa27dcb"],["/categories/Spring/index.html","659c98e82911cabbc1f6e144d0a98bad"],["/categories/course/index.html","7c1f77b8a32bbe63e6f3a14030b51475"],["/categories/django/index.html","03a564e0306e14053d614b48639b9729"],["/categories/fun/index.html","ec93e5a50b2a637b0eb14aa2f8c10def"],["/categories/gcc/gdb/index.html","436bed595f2fcd5ddaa2740411bd2948"],["/categories/gcc/index.html","dde8de420a91855794cc39c8930f1e5d"],["/categories/index.html","f6e7e0ce54d088b8f1d15fd15ebfc4f8"],["/categories/java/index.html","7cb5161c71f2ae279936fa82e558465d"],["/categories/latex/index.html","03687a5087bc0eeaca134bb39431fd02"],["/categories/python/index.html","7534eeb1888af3b9532f4320e1eef055"],["/categories/study/index.html","daaedac53d42b293767baf94a44faff8"],["/categories/vue/index.html","729d6d0e391adcb92b06fa3c081dd6a4"],["/categories/误区/index.html","f57024dfeafb227fdf6f5d78806fcd46"],["/commonweal/index.html","a861964cebf54bf981003696dd602c8a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","29009eb9982eb70fc18abe4d5d8c92cb"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","c07471511725ae641c7d9fec48b94588"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","dc77b7077beb6d88e29eb3d302a8831a"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a41215827b430d0fb352cc8c6ceb6d27"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","f8de7ccc3ecb42c608d01360b31a9322"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","50aacf767ccf6051567955c241802680"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","ba983f92e9127e1ae2319248c4040b74"],["/page/11/index.html","f0e8efa72c03c2d52a75e99ff028c62a"],["/page/12/index.html","008297d692df93be2edf5df51facfe69"],["/page/13/index.html","7b4cd9f02c8c86d44842d4e55c496cbd"],["/page/14/index.html","e45a16ddcc4461e4b755c91d3fa81494"],["/page/15/index.html","1e1f1c499ef5a02e0f1252af7f90263a"],["/page/16/index.html","8448267ad05bca73e3c1db161cdf599c"],["/page/17/index.html","8cba61b6ea9f975699749e425478a927"],["/page/18/index.html","223b0341d0d5fb775fade45e6777bcd6"],["/page/19/index.html","8862157ac558885dc4019435ef48b9cf"],["/page/2/index.html","30864503ea75ebc3e1f588d07d24b387"],["/page/20/index.html","726f23186c3857df2a352d6452922d78"],["/page/21/index.html","67ee5455c8f81a029f10e8e468a5dc9e"],["/page/22/index.html","c79645d1dd64abb753a84b56d5dbb21c"],["/page/23/index.html","338709317d8e7f8a22858eb84586f7b0"],["/page/24/index.html","16b57b59854812002fa2ce10f3e395d4"],["/page/25/index.html","ee7e7abe83c371a7142d06797af3a434"],["/page/3/index.html","aa4aff639d7433b3591181ff23240f65"],["/page/4/index.html","8a4075f102c3386e6a4ffcc572af259c"],["/page/5/index.html","23667f9d46537c4dc1dd97f77c04da8b"],["/page/6/index.html","4259e612af244ce3dbe6bfb5311262ec"],["/page/7/index.html","e0124c1056faf4dc051d8899197a72b2"],["/page/8/index.html","7d3d3849e0b58b297bffc94166261294"],["/page/9/index.html","1ec260de7a2dc426586fe689ed985666"],["/resume/index.html","2bfb0af4139338b60cb7ee2355a4e2d7"],["/schedule/index.html","579e8ae07755ae2c76731864cebfa99b"],["/sitemap/index.html","ee5d7689a6c354c380904733a4c9949f"],["/sw-register.js","2d88ec49deb1d142da1119742ab98f5b"],["/tags/AI/index.html","bafa8a28c7591cbc1fafae0595169489"],["/tags/Astro/index.html","40f3f409eb0893a3f9dd7f99e22a6d85"],["/tags/BT/index.html","70525d42472b5403ded7fd94cc68dd25"],["/tags/BaiduNetdisk/index.html","e652c130fe755a7eec16581f38e52d11"],["/tags/Bootstrap5/index.html","98899e529b6aa26fc4b78dda1d449d8e"],["/tags/CSS3/index.html","8a52f23c7221bdd3b9d17da55863b44e"],["/tags/Centos/index.html","d138365e7befa5cee861e203c7d42bb3"],["/tags/EEG/index.html","6bd580446c4a48e8706be06d96aa87db"],["/tags/Electron/index.html","e0c6903bc9a6f5d496152ad366d6e2d1"],["/tags/ElementUI/index.html","ac0a64bd59212f04fa459b74877d3dff"],["/tags/Flutter/index.html","050739cd216a3859b74ee3a98778163c"],["/tags/GAN/index.html","d322dd6b57c24bf1f30dc5b290c29a3a"],["/tags/GUI/index.html","ec05c9c1a6ae1813c43ea192d83bd7e0"],["/tags/Git/index.html","95f44b31e3652bb566c3a38db1ecf0a0"],["/tags/JavaScript/index.html","6a17c96a7afbbedea6c73e9856d59115"],["/tags/Keras/index.html","7d02ad321bacf948bd46b6802bbea2b2"],["/tags/Linux/index.html","c91acbc11882840dc5eb4a2cd5718e3d"],["/tags/ML/index.html","55fe25f65182ca0c10910dc84fe0fd72"],["/tags/MNE/index.html","abb888490bdf9e112bdaa17cb45037ec"],["/tags/NLP学习/index.html","4af87cdde9933838fc22095505b97dd6"],["/tags/Nginx/index.html","1302c0f3ae698ad45e821d53357bc170"],["/tags/OSS存储/index.html","4846b3ef34e70f9a2cd7db20a85ac02a"],["/tags/Obsidian/index.html","6ca852b893cf4759dd79f4bf51754f54"],["/tags/Qt/index.html","000aeaec8487635d8657ea1718bf50af"],["/tags/RSS/index.html","0a9412824d360136a4e624ae71f66ed9"],["/tags/SSL/index.html","e6c6fb759784674c054c45ff0103d546"],["/tags/Scrapy/index.html","64c1e71807ce5686224f87e838843a87"],["/tags/Speech/index.html","762341cbf3928936379380eede7a33bf"],["/tags/TotalCommander/index.html","25a7ecdd8fc5b788ed5f04ba57099eb4"],["/tags/VPN/index.html","36e1e445e28f67db227a3837f0877ab5"],["/tags/Vercel/index.html","30d83f47a2397436fe69e5196c7e1176"],["/tags/Web/index.html","3be569ae00df0903f5d5885916797bcf"],["/tags/algorithm/index.html","779d9bfe0a77224de5e86e93124d65a4"],["/tags/bison/index.html","93eb1107f3e585e4b98677d23fe2b7bb"],["/tags/bom/index.html","80c4d22d6ae25a848e6a56980965ce2e"],["/tags/bomb-lab/index.html","e9471e629c1b8f856ee0e7e17d05ba04"],["/tags/c/index.html","e99de4d6ba8db574141690a5c8393e26"],["/tags/cheerio/index.html","3f71869770c525b877b7bfbb2c7391d6"],["/tags/codewars/index.html","585d5820567b0301de2fdad3dfb5c336"],["/tags/compile/index.html","97bdf8a7a59400b56b8755078c5dea5b"],["/tags/compiler/index.html","d49e5c8af0678f341453978c532f1e4f"],["/tags/cors/index.html","39d27d26be3e570e352a6da891e3b25b"],["/tags/course/index.html","7f39e8ad7f113bdd2f985fdc49467d35"],["/tags/cpp/index.html","8a07784f4a8f2cb83c30f4e70777b983"],["/tags/crypto/index.html","3de3f0533aba89a3b0372e0eb2b31ba4"],["/tags/csapp/index.html","454fbf9bd38190d95dbc94e0eec7ae56"],["/tags/csp/index.html","7c341b1932fc85eb9d11b2a74f74925e"],["/tags/css/index.html","ae209628a4887baf78113151de8309cb"],["/tags/dart/index.html","aa5578f271f14bd401a40520e2f445ed"],["/tags/data-structure/index.html","3691140e84f092f0945679c1d10214d5"],["/tags/database/index.html","5c54f77185bcd2ba5fce814fbc6df252"],["/tags/deep-learning/index.html","a436f0270938d02d5508116b3de7b62e"],["/tags/django/index.html","dfe92a2a738cd0a76ab36eea4dc39ce3"],["/tags/docker/index.html","65471ab86ec85d091da84b0eb764f3df"],["/tags/dom/index.html","390e30c31f4fcdb2ec023d8917769523"],["/tags/dwm/index.html","30d81fd9cbce76bb10bf1b3e351fe367"],["/tags/exercise/index.html","38cc02b617865e218a82462de5d5cb3b"],["/tags/filebrowser/index.html","3f5009e6c18d934709a6008eeb64092b"],["/tags/flask/index.html","a71841c87fa04be11fc1cc6778f4ed64"],["/tags/flex/index.html","1ff5d37553f28aeef9069527e9ae5fdc"],["/tags/front/index.html","242d2ba5d166577ddb0500af09fc30b3"],["/tags/gcc/index.html","b195bd3dcd16cb0b756a9a49cf240d4a"],["/tags/gdb/index.html","2824bf26d8788019d733c13d3d93f1fc"],["/tags/github-profile/index.html","62fc540c9186437b013502fda43c7ca0"],["/tags/github/index.html","b26c114935816044ecfc5dc92a824782"],["/tags/graphviz/index.html","3aeaf454e6cddaa8e9c7fb43fd2f48da"],["/tags/grid/index.html","fbc7ca51b47157a9a0c4e6d18ec6ddbd"],["/tags/html/index.html","eade752f93e3611052ca6dc0b7489cbb"],["/tags/i3wm/index.html","f4e4e3e50d249f8f908ff7b9d657973c"],["/tags/index.html","8a241cde8841e163b48136feb0429c99"],["/tags/issue/index.html","6dcf64094b99619b228104b0734dedf9"],["/tags/jQuery/index.html","a1e27333872e86864c263cef24832d29"],["/tags/java/index.html","240696db99726693580e9bef49302bbd"],["/tags/js/index.html","4a371fde7ea11464970e40540031fb81"],["/tags/latex/index.html","55320c814a88815cdf1d05488f6d7e1b"],["/tags/leetcode/index.html","250fc7ee21a30993bef0c84960debba5"],["/tags/lex/index.html","54bbf944cdffabd212265011756017d3"],["/tags/logging/index.html","40cdfb98dd41430ec52b5c6a38557e30"],["/tags/material/index.html","c53edf36857ea257a633d2f1d15d2576"],["/tags/music-player/index.html","410a721e51e4324151175a8309ccb260"],["/tags/node/index.html","9a5318948c5253710e3c4143ffed31ce"],["/tags/nodejs/index.html","30a8b9581f7be4b4745a819844919536"],["/tags/noj/index.html","2981087c46cac668312bc37482b2bd0e"],["/tags/npm/index.html","408333a097a7902dcd14dbae692838f1"],["/tags/opencv/index.html","482a8954383bbaef5924d22e98dba380"],["/tags/overleaf/index.html","225117863a8aca37e8103269c56b746b"],["/tags/pandas/index.html","bc2d3b45ba39401e93173e0c8fb77338"],["/tags/paper/index.html","3d592425b6017f07db47693317d11c69"],["/tags/premiere-pro/index.html","d335fb420d2db4ef4f5165ba2d473b20"],["/tags/proxy/index.html","50744da4b5716ce7b0ef5d747a08ebdf"],["/tags/pure-css/index.html","70cefe1483a271ea55b7e7633c75985d"],["/tags/pygame/index.html","a0f6524ad4604b50b23f082089cda3e8"],["/tags/python/index.html","cd881d4aa0e43c4e22053447d66a5765"],["/tags/python/page/2/index.html","4cb0a6dea712ecac73d1f1a56ccc8170"],["/tags/pytorch/index.html","018c9a77ec718eb80d511c3b5ca4123a"],["/tags/reading/index.html","7e707b175f7d5b05a7224ffc29675e49"],["/tags/request/index.html","adbfbf4f12856f25286b21b55d24e389"],["/tags/requests/index.html","a2fc20961b2366f87e10e2bdbb811189"],["/tags/security/index.html","68e4723806a9c5d7900646d1034fe9e9"],["/tags/shell/index.html","99f5cb140f96bc827dbd675d7b5fb788"],["/tags/sign-in/index.html","42401520eff8c8ff292fbde370ee5c37"],["/tags/socket/index.html","6a201dadf475335c0c2cd710de5288a1"],["/tags/spider/index.html","bd5ee5cb197a4eabf6c34c05bbb004b0"],["/tags/splash/index.html","3072f5db92907f9b0594bb4314d7362f"],["/tags/stl/index.html","1b2891b6fb94b2fe56956a8603773d8b"],["/tags/sumatra/index.html","cb4d388b8c7db95500f9f2eebe4e3e6a"],["/tags/superagent/index.html","55513261b1259eae8059a133c8cb4696"],["/tags/tensorlow/index.html","3c59ce391c4871df8c438e4b1fc4417f"],["/tags/tex/index.html","dee18500488c56ab324798d9bedeab69"],["/tags/thesis/index.html","6a4b3c5c1acf93a152ece13a947b7fdf"],["/tags/threading/index.html","c36497787fc330f5e019e7fca6216e77"],["/tags/tkinter/index.html","c2cac00d3eab9cd65c042c21fe3657ed"],["/tags/torrent/index.html","84a89174dca63bb55db24de6e192f976"],["/tags/tutorial/index.html","f53082d49d75d8057a18e043745e3570"],["/tags/typora/index.html","8f2b3c20366f9fbee1b5a2631505d9f5"],["/tags/uniapp/index.html","7cd9e7d6b321f98ee331f447ee7e1343"],["/tags/vite/index.html","9d8a09247a8e8a1fcd360f471150b41d"],["/tags/vscode/index.html","ad0c956a4008d16ddd82224910f668f3"],["/tags/vue-element-template/index.html","5dc76c3168f47ab6c7a8b411eac419de"],["/tags/vue/index.html","d3063efd81c63a3f1d18a5dca1f8dca4"],["/tags/vue2/index.html","c0e19e978ae6d658deac6cde42ba3ec2"],["/tags/vue3-x/index.html","1cac14e6f25159858a7d5b75b16bfb29"],["/tags/wechat/index.html","faecb952cbbcbac49c2d5c2cf23a5c64"],["/tags/wm/index.html","b2ad481c72cd686d9338e3fd1792ea83"],["/tags/wordpress/index.html","c2f260f63c385667ec411e8ff9497ea5"],["/tags/workflow/index.html","a6be14acdbee7cdc72440d064a5389a8"],["/tags/xpath/index.html","912150f8ca0582f15f735fe0a617eecd"],["/tags/yacc/index.html","985954b557556732cfbd6cea9350a87e"],["/tags/yarn/index.html","4e077438f77f39759247665e0a05b9cc"],["/tags/zsh/index.html","120d2b996fc815c0f1fb3d1c5d4b21f8"],["/tags/七牛云/index.html","47fbd2679ccf384969a258f369a118fe"],["/tags/函数/index.html","c616a52274f520181ee3e2e737c16cd0"],["/tags/剪辑/index.html","9e94e3d19a32c90aaffd6ae38ac985b0"],["/tags/存储/index.html","53340b1075caf3406ac956ea30f3ee37"],["/tags/实战/index.html","4236bf8d5cae17c422a55fa05339c67f"],["/tags/工具使用/index.html","dd8ff158a572aa66f3cf34bf6258e28d"],["/tags/建站/index.html","16a2eeee4d31d80e850a3d967a478d9d"],["/tags/微信小程序/index.html","5e0c049a171bb1a45b3c1bc5f8e08415"],["/tags/指针/index.html","a45824d0a1344648188d97291841fdb2"],["/tags/插件/index.html","34c650d24ddae8a61c8a376ac621f844"],["/tags/效率提升/index.html","a8b596984dd84589946ded54298f03aa"],["/tags/日志/index.html","b7f4e2514ba9a9c96551ad917baa2463"],["/tags/汇编/index.html","1fe5b74072c6c0bb2d544852019ef167"],["/tags/油猴脚本/index.html","66f3aa43359772b5807ca2275b5cedde"],["/tags/浏览器/index.html","67cce83d1ef65c48d4d2c828e39ffb37"],["/tags/爬虫/index.html","329a13f19842a78429eb383261bc6bd6"],["/tags/算法/index.html","585f87d123cedbe50591a2be8431c6aa"],["/tags/编译原理/index.html","a876766b278a9a7cc123f6178f2662e3"],["/tags/获取地理位置/index.html","e6ab772c6295bc79187aa4b24c302ece"]];
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
