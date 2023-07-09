/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","36019a5388cc8e27078898d1e5551020"],["/2021/04/20/稀疏矩阵/index.html","93fa95bd7b349d69d5a30bc72ba09394"],["/2021/04/23/广义表简介/index.html","09e8c8f9f6962863c3d99103b628b499"],["/2021/04/29/关于指针和函数/index.html","0b84599b4d69c3f927b2c3c34fe56c52"],["/2021/05/10/哈夫曼编-译码/index.html","ea9a79dc3d42a3b824a6778f036df702"],["/2021/05/17/数据结构noj_2/index.html","385aff8b892cca54bb4189a09fb10dcc"],["/2021/05/30/数据结构试验/index.html","a7c63dd2fc9b655ce17d9cac0c27fbd4"],["/2021/06/12/数据结构noj-3/index.html","6d9203c3c6c65d0ea32cac5bd8605a14"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","939f5e06719afcc9ed00d571b63c9731"],["/2021/07/08/课程资源分享/index.html","1060e4bdec296a587800952cf44cb41d"],["/2021/07/20/Scrapy-下载图片-文件/index.html","e0e38cc8d6a428764a0c9e3cad7c49b3"],["/2021/07/21/Scrapy-动态网页爬取/index.html","ada17d7d5aee1afb2b7ed155a55c8a66"],["/2021/07/21/疫情打卡/index.html","211218e81a179eeaa091a3c22c257042"],["/2021/07/29/Scrapy代理设置/index.html","de7c001cb218db9d53032e35ef1a20ca"],["/2021/07/29/数据库认识/index.html","848ebf0fa0f2ef131a08946a1db0c40b"],["/2021/07/31/Python多线程学习/index.html","a517d7ecacace0a5013d7951fbd0b23c"],["/2021/07/31/tkinter-requests练习/index.html","922836e255a054736a154fa40193e4a5"],["/2021/08/10/Git学习/index.html","dcc9eff19ccb86015f1baf6909011375"],["/2021/08/15/pygame实践-1/index.html","079a71f48258858edcbf4361f77f2f67"],["/2021/09/06/微信小程序开发/index.html","d22266f38ab2d476d879283c37b47888"],["/2021/09/21/命令集-1/index.html","17d962a5f638f758189c235314fe1095"],["/2021/09/21/命令集-2/index.html","3328a18488cffcef26780cafe42a97bf"],["/2021/09/21/命令集-3/index.html","d09f12c6074b96392c618df3f9d01080"],["/2021/09/21/命令集-4/index.html","5ccb824ddd57e62a1abd674e0663c15f"],["/2021/10/03/socket学习/index.html","b8887c9722d3e262ac6f4280ed7c6e16"],["/2021/10/10/dwm入门/index.html","5a581d372afbb76979b55676c8e76eed"],["/2021/10/10/安装ohmyzsh并配置/index.html","562baa8904b0c4c4548548b55adaf534"],["/2021/10/20/css学习/index.html","bea273ba341fec2a7b2684b0ecf07de3"],["/2021/10/20/wm入坑/index.html","c764ceccb06ca4878db58ed4461c3c4d"],["/2021/11/03/微信小程序学习/index.html","ce85df1f22560ae5d2d7ef78c10cc6d6"],["/2021/11/04/css揭秘/index.html","2cc3b550754ca3ac55fb07cb56c943bd"],["/2021/11/05/css-练习/index.html","272285af4a1ff6b0404379b367be1eca"],["/2021/11/21/命令集-5/index.html","69162471856b160a3dd712e45e43fac9"],["/2021/11/21/命令集-6/index.html","73a3b6b38679623ad9689ecdc2b95ea5"],["/2021/11/21/命令集-7/index.html","57e791878be413b679547fdec012e86e"],["/2021/12/01/搭建wordpress/index.html","14c06e880286388fe88f9b32f4e82d32"],["/2021/12/08/python操作百度网盘/index.html","2a9733e88b8d28d06add3e39a58e2e2c"],["/2021/12/14/js爬虫/index.html","eaea0fd50741e6392f904d03af879a33"],["/2021/12/25/为网站申请ssl证书/index.html","3e81e2388723a2db520c8d3058b5cfe0"],["/2021/12/29/使用七牛云为网站提供服务/index.html","484c15c6345124550486d2f2eeb279bc"],["/2021/12/30/jQurey继续学习/index.html","8176aed65b0a0bbe0156978e615a2498"],["/2021/12/30/jquery学习/index.html","c78303a3f585192691d3ec3bd4bf6c7e"],["/2021/12/31/vue学习/index.html","9853f1efcc2d8710b804ce6416ead750"],["/2022/01/02/疫情自动打卡/index.html","d50094c22ae0cf74ffbc4068f0530d5f"],["/2022/01/03/javaweb初体验/index.html","0abbdbeecb1d94d34ab8ff3143fdc332"],["/2022/01/04/codewars练习/index.html","848ec8eb4b169719dbaebe8030d45e61"],["/2022/01/05/Spring学习/index.html","80e352521f55f01b97b91364353f86af"],["/2022/01/05/vue实战/index.html","fa4aae39887fe729717d1833ba796f80"],["/2022/01/08/gdb-gcc学习/index.html","5e2d9554bade88af3ecf82ad9aa9769d"],["/2022/01/11/python-opencv学习/index.html","f0092f3b08f61be2c3945b8b9b4c2235"],["/2022/01/12/汇编实战/index.html","6f1f1f5bbc9c795739b3025d1ed9b2ca"],["/2022/01/17/pandas学习/index.html","ae4b483aa2c753c1a8dadf42dc6744d0"],["/2022/01/19/可视化图的工具/index.html","011e973407bbd363e7eec37d57fda4ee"],["/2022/01/19/机器学习入门/index.html","82d1e002fa7723ab26a6ca6a1c22bff7"],["/2022/01/20/cousera-ML学习/index.html","004dd92a0d69203dbb17f08aa217f5e0"],["/2022/01/30/typora解绑后出现问题/index.html","e7bcc504a021f524fa43c892f0b469e2"],["/2022/02/03/NLP学习/index.html","bc9b10db9a94501b878761af0bdc162f"],["/2022/02/04/Web漏洞学习/index.html","85a394adb1c5ed4f51d9e22ed3ffe582"],["/2022/02/04/pyqt学习/index.html","a7b429f22aa598a893b3f782ab1cebbb"],["/2022/02/04/python爬虫/index.html","a42cce7dc359c5afa58bd6673ac1b274"],["/2022/02/18/Electron学习/index.html","5ee25937a5ea45b6cec9af779e6762c0"],["/2022/02/22/疫情填报字段解析/index.html","da140cae2b8adf8eba8c7849b1eba742"],["/2022/02/24/Bomb-lab实验/index.html","d851993c6f6e424df8a8bce72e713964"],["/2022/03/05/nginx学习/index.html","5d7a4f1d28d26c2afff52d6284a64e24"],["/2022/03/09/汇编原理课程学习/index.html","608b0dec81688a9e6fd9dc3d02d165f0"],["/2022/03/11/Keras学习/index.html","6f8ae61430070ca2df34e7e466c7c977"],["/2022/04/01/graphviz学习/index.html","f11b64922e020b3d0507c661e634506e"],["/2022/04/07/django学习/index.html","2d72c9e6adfd12caea2e46cf8c88758e"],["/2022/04/11/密码破解学习/index.html","8e56b950778255825fce35125d6eb450"],["/2022/04/12/flex-bison学习/index.html","3f4cfbf2dad1fee34658752ae9abcc9f"],["/2022/04/15/pytorch学习/index.html","639fd88c4f9e22fd59bc9a6f2728e598"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","24ef2b88426bd1b2398ca4b6383bd27b"],["/2022/04/23/写一个音乐播放器/index.html","3bf5857e7050f71130f14f9807c7b4cc"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","476cf7f17e00b2b7a7afc7047df72317"],["/2022/04/30/GAN学习/index.html","e214440a6a5eb448e73f458a1b42a96f"],["/2022/05/02/html精学/index.html","edb451931ad4ec2920edb6a2101c3010"],["/2022/05/06/write-a-compiler-by-yourself/index.html","be3e69c7e758e65305e7277022f08d99"],["/2022/05/30/acwj-01/index.html","fb6266b771118f6a72a61747e762fec5"],["/2022/06/14/animeGAN/index.html","4c27c1212a9f43ebcc557678c1c3454f"],["/2022/07/09/c-与算法学习/index.html","f8be45481d5822eb15576d365a5649c4"],["/2022/09/19/flask学习/index.html","0120c00f1f4385a6b5797f862b7e9753"],["/2022/09/22/cs224w学习/index.html","677574cebb60b81a93ba11e36862c3bd"],["/2022/09/28/记录一次wp重装/index.html","b4bf456355370937314780eba7a092ef"],["/2022/10/01/Obsidian学习/index.html","1d9250444b8871a64dd17e4f63c24d0d"],["/2022/10/08/vue-element-template实战/index.html","ea65084c1319382b79a9d344320bc512"],["/2022/10/25/vue网上商城项目/index.html","3f85cd16b1f7c1067affdac770c0b8ac"],["/2022/11/11/leetcode刷题记录/index.html","47912250132e917d5ef65be1319744be"],["/2022/11/11/使用overleaf优雅地写文章/index.html","bd1585ad04de18a098fc3988b9c9c001"],["/2022/11/22/磁力链接与RSS订阅/index.html","bf8626f5d728639e81f5d241e17f74ef"],["/2022/12/11/uniapp申请获取地理位置/index.html","f3bc4a598a9aa928429b72070ddf6317"],["/2022/12/26/pr剪辑学习/index.html","fec950440a901d830ce4d8107be6fd41"],["/2022/12/27/css中的flex和grid布局/index.html","599faffd463deafeb530b10851caf2ac"],["/2022/12/28/Flutter学习/index.html","6e687a793e956da15eeae91f525ef65d"],["/2023/01/01/美化github首页/index.html","c1dd0f46e967ccd5134e118e32a8b83c"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","d0fc1f841b31cdfe93419262f6920402"],["/2023/01/04/构建微信快捷发布文章工具/index.html","94ea40cab44de45ec964b9a4802518f7"],["/2023/01/14/dart学习/index.html","2898e2fb490c3853dfe6d983edcb626b"],["/2023/01/23/闲置服务器BT下载影视/index.html","91f3c4c893ec42fa2d31196527b2b10d"],["/2023/02/07/TotalCommander使用和学习/index.html","bb9cee61f5b523ade4515a2445a05c89"],["/2023/02/13/docker学习/index.html","6d6849478bc6602161bcdbdfb9ec239c"],["/2023/02/17/DLHLP学习/index.html","2b108cec53522e0930bf1d15a0d66d15"],["/2023/02/18/学习purecss构建自己的css框架/index.html","dabab3e485d465fb804a8812c132a363"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","8c9e511acce51dd43fa2f3c5e9341398"],["/2023/03/05/STL学习/index.html","1c1eaabd494e56e6bd85784d18a5b38f"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","18a68aab07ba544d31b2d31620b3ba05"],["/2023/03/23/实战写浏览器插件/index.html","7c193f8cbbde34edbc80b8a1c6d51f84"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","42c11c5360c45bd9191f64790a5f31bc"],["/2023/04/02/EndNote基本使用/index.html","4b6fe3282a210597c744f9662820661e"],["/2023/04/04/mne处理脑电数据基本使用/index.html","79e13d9ddb384e4a082c4471a07dc871"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","106a2dec3afbb84fb0091cd49004bbed"],["/2023/05/02/python中的logging模块/index.html","48dd5784ed38c1b303b0460c724cb93e"],["/2023/05/07/python的特别方法与装饰器/index.html","680699eaf86e6b9867a71b0704f075bf"],["/2023/05/20/Wox插件编写/index.html","859ac2cb2350250fb850abcc8a0bc16d"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","1a59541db24c59494a4d9ce363ff7ce9"],["/2023/06/03/深入Clash配置文件/index.html","2ffb0ad2080ae888c5b542bf9cae4520"],["/2023/06/10/node的包管理工具介绍/index.html","24d83323323389b6d4d776e8a48d1ac1"],["/2023/06/12/AI写作工作流/index.html","469a30de5c3e8557600bb8e68ffc8708"],["/2023/07/07/Astro-Vercel部署博客/index.html","68eb1c106f7a8ea6e4ff2c5039083e52"],["/2023/07/09/青龙面板部署项目/index.html","bc7c0475fa6ff2ba7a833f4e201a7ce8"],["/about/index.html","a83025b2e2e6df7f134404c9cc2d4f98"],["/archives/2021/04/index.html","56b51955d2bba4ec248c3072cda98800"],["/archives/2021/05/index.html","3b0466455e8468cb2d8b6b211590a8ee"],["/archives/2021/06/index.html","3163c4339ea1cc86b416609c386b97cb"],["/archives/2021/07/index.html","854c009a18db98d68309f3422bce2458"],["/archives/2021/08/index.html","5848067d1b94f9a296da7875d56fa8b7"],["/archives/2021/09/index.html","f6ee3e93959567c1c2725738a9e7066c"],["/archives/2021/10/index.html","31dcb9c595fbfb17f71ee1c4303dee1e"],["/archives/2021/11/index.html","ea53bb6d716579b4b8240e1b57c3979f"],["/archives/2021/12/index.html","c4737de5ddc4fc997ba01864129ec11a"],["/archives/2021/index.html","7b6f336024f7380922fb762da270e120"],["/archives/2022/01/index.html","14725c3bc9217a161df823193248ef33"],["/archives/2022/02/index.html","dc59258513ea677b49a866883a97ed7b"],["/archives/2022/03/index.html","091f058f51805e5d035e974fc258db01"],["/archives/2022/04/index.html","a845df927dc891218fee52c1c5f86d86"],["/archives/2022/05/index.html","4fc66b7198050a1573667b5cdc1b074f"],["/archives/2022/06/index.html","8f4977bcc095946a93b1b94e3b20d790"],["/archives/2022/07/index.html","1fb3bcad87958320abafcc7a1db659b0"],["/archives/2022/09/index.html","11fc3d82c234414e7f6808ce37fcb146"],["/archives/2022/10/index.html","38dcfa00b10533d66b7ed3a4641c6c91"],["/archives/2022/11/index.html","18a451213783fd5603a27b6ac09934f6"],["/archives/2022/12/index.html","3df5c5a8af7e38d1c6a028b6425b4f08"],["/archives/2022/index.html","a28a7f18c8b8eb92953b79427e649dfb"],["/archives/2023/01/index.html","e2fcef2209c95eb7f7f4cc2022f73568"],["/archives/2023/02/index.html","8e6143a5ad351456db9fca347a87ffab"],["/archives/2023/03/index.html","24da56e08318c5d3ad94502d72b2be77"],["/archives/2023/04/index.html","116ee0854de465f79a58669a2fd33ae1"],["/archives/2023/05/index.html","e94821d62fe633422df3d53394bde660"],["/archives/2023/06/index.html","0b5b36d6fb88394f7f0931654aecbfd0"],["/archives/2023/07/index.html","53bff3cd6b89165f10b582670e8e3976"],["/archives/2023/index.html","4ca668c6af2ef447d722079543129499"],["/archives/index.html","66677d9af26d64ac92ff39240a457f84"],["/archives/page/2/index.html","c32339a15284cce3ccf4a583bf55b2a1"],["/archives/page/3/index.html","96384cd577a14e0cade8726441be5425"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","3583b4335520b194ef161fec52950733"],["/categories/Linux-study/index.html","043bced72de69b590acd1051de8049bc"],["/categories/ML/index.html","92f9469974b13ef8dca6b16ceb1ffa7c"],["/categories/Nginx/index.html","25ae6fe73995729e587d50e7a24a9c9d"],["/categories/Spring/index.html","abd85fff587408ca7ba56152dac1c7cd"],["/categories/course/index.html","5a79e0e0492e7fef7c1a0168c90b6bd5"],["/categories/django/index.html","452ec9a6d8a9f9b81b7c5f72e92ebfa5"],["/categories/fun/index.html","06e5ec26b37f986223ba4740e1c876e7"],["/categories/gcc/gdb/index.html","9447f42c4964195dc9a63fd04bc73854"],["/categories/gcc/index.html","4655a6a2eadb3e3274e78ece813db82c"],["/categories/index.html","d6a4ac17d67f2496ae9f45ff318f38d7"],["/categories/java/index.html","ea9e3d6f95582418d0844257c09404cf"],["/categories/latex/index.html","ca399b1edaedd5f0bf113f5f96a376ad"],["/categories/python/index.html","c5da21eda6e7759233dab0cbbf7fc1e4"],["/categories/study/index.html","836d8534d0bce3a842ba5f5e18ba44b3"],["/categories/vue/index.html","c798e663528510092ce6ac1f590e00e9"],["/categories/误区/index.html","24ed1384f7c0b14cdd0be76aa08cd230"],["/commonweal/index.html","3cfc545da97dbf82a006a6c11d1b13f6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1000303ed7f9bec185b5a4005a282c1a"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","a74383cfaf7dba2ae415827218c41958"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","3a9126516e4f1cd5e9c6ba8530bbc02e"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","79f2a136a622868d0b553dde46997c5c"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","f9a365b2873c132135e343d0fefa04ff"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","c202dafc98ab33b02060aae9e3b1d144"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","56007a6c9f860e60d8eb6bdd24f27b95"],["/page/11/index.html","bf2117bdf9579fc11a4eb912581f81e4"],["/page/12/index.html","7d0ff00c901a1d049787d105df5708b6"],["/page/13/index.html","cbcd4fe0c66d547109ed2d046fc1116d"],["/page/14/index.html","ef3f6e1a2caec349358bc29d04a7dd60"],["/page/15/index.html","c49f8bb35e93c5467671b364ea30b63b"],["/page/16/index.html","7bca21971469071499a52d1daa76bac7"],["/page/17/index.html","31d86fd74be988b2da92a50bd56dba96"],["/page/18/index.html","9b5d803da648f005ebac67c7c47f2c06"],["/page/19/index.html","4d52272f3f685ba9e3e53ea8d45e85c1"],["/page/2/index.html","9638402247937dbd0608f9cc77da968a"],["/page/20/index.html","dd6797503f89bcd8ba09bbbdf1441048"],["/page/21/index.html","1341ebbfa7fbbd5315e24261d7d08fc7"],["/page/22/index.html","c0cf13d022a65913d55c5463ef9b3720"],["/page/23/index.html","80bcbc11c5414613e9ff4d48e1849750"],["/page/24/index.html","4aea1b424c8a33f7b51a28399d600545"],["/page/3/index.html","b01797921f02569d2ef063329436fa2c"],["/page/4/index.html","4f0844ed5c5d9a5ac63700110cacea9d"],["/page/5/index.html","1ab4a1f847e235582d0ca387eb1c3759"],["/page/6/index.html","b21f2cf04f723c73e0d8ae8259e92ede"],["/page/7/index.html","19d79fa86af46a95d820b9efdace656d"],["/page/8/index.html","8c9e9221b1d9f941027f1bd52b372be2"],["/page/9/index.html","7856eaccb1c8be3c1a3c529137f84864"],["/resume/index.html","4acbadd1fa8f177e1a90920a7c4a3202"],["/schedule/index.html","6589b382fb5bd9f01c78b391e87fb7f2"],["/sitemap/index.html","8fd0ae440621de760c4426ed54a3bfde"],["/sw-register.js","84a7fe33a4bdad8b2cdb6ce67e80fc85"],["/tags/AI/index.html","6cb7c825581dd923fcffb6699c46adb7"],["/tags/Astro/index.html","2c13ad1440229b361bc9a6442135f569"],["/tags/BT/index.html","f3e78dfe8a171d18c7664821424c2338"],["/tags/BaiduNetdisk/index.html","3e8fc61cf4e73859d2023f113d4f8dc1"],["/tags/Bootstrap5/index.html","4b6a424cf5d158f79d23fb70e1b9abc2"],["/tags/CSS3/index.html","61b72b56f6ec0a74e274fbcd99cfb0ce"],["/tags/Centos/index.html","cdc0cf22be6fb4d3c3c21c8494295a21"],["/tags/EEG/index.html","05d020dac2f09b1dc4f365ce16a3db1b"],["/tags/Electron/index.html","49851fda1774d5fadd147d2f6ce07f3d"],["/tags/ElementUI/index.html","4c0411cc6f81639058bfa53aef8a918f"],["/tags/Flutter/index.html","489f12849512069902140461c3549bd4"],["/tags/GAN/index.html","688fdca8a60702d8d241d2c3b7637344"],["/tags/GUI/index.html","6ca34f8773bd12ccfd6527d72babed5c"],["/tags/Git/index.html","66ba384606a817612ece6f5748e2a30a"],["/tags/JavaScript/index.html","3e47b10f053786a0ec14b1d19f196e78"],["/tags/Keras/index.html","724f1fbeae1d61f9f4134b6205488bb3"],["/tags/Linux/index.html","4c7f141ea14012b73a078128dd85924d"],["/tags/ML/index.html","94e2ac05857736710937cbda91597eac"],["/tags/MNE/index.html","8aa1bc1f7d065393af684c746fe4c708"],["/tags/NLP学习/index.html","dcee871a11804e0fca4fdc186fa87e0d"],["/tags/Nginx/index.html","bba8f083d7352610b975b5edeab661d3"],["/tags/OSS存储/index.html","8b88b521a8b5fe75072e50c53435fe85"],["/tags/Obsidian/index.html","753d6a6b4dd9ac37f5c23ee07e423a54"],["/tags/Qt/index.html","6b7635f99639c69dcf7f554f96e023d6"],["/tags/RSS/index.html","f371e26d59b783a5f1dbe53ab0058a90"],["/tags/SSL/index.html","d76524dd438fa5963ab29e65487a8969"],["/tags/Scrapy/index.html","37e612cb040bfd0706c4d55a0225e3a9"],["/tags/Speech/index.html","eca678efcdc4437fcdbf532e28879add"],["/tags/TotalCommander/index.html","32b340eb887a038861c7db5df466ad6c"],["/tags/VPN/index.html","555f4a111ee41c6b9a5310d126782f87"],["/tags/Vercel/index.html","9b7505d9e91259a692db4b2d34e0392f"],["/tags/Web/index.html","64007407d52f8044b0477de598e94d8b"],["/tags/algorithm/index.html","ee8a6f9783a464b8b39dddc5d0c44201"],["/tags/bison/index.html","a687e0c13cb62ad785c410c870fb9043"],["/tags/bomb-lab/index.html","0d9cb962a4d3176ed7bc5e5af2c13259"],["/tags/c/index.html","4afdfee12739fab9093e2351188f73b4"],["/tags/cheerio/index.html","f0a733fe98c646796a346116216e5a86"],["/tags/codewars/index.html","579c5206e344e093a3b3befe3357116c"],["/tags/compile/index.html","0801e915d15850fe3be4cc18b29cd847"],["/tags/compiler/index.html","d59b27aebaae9e1582e879977a436ac6"],["/tags/cors/index.html","4d613223fdd745ef8905158ed478410e"],["/tags/course/index.html","c2db0dc93ad222cf8da6ef75b781ef69"],["/tags/cpp/index.html","827af193ca619672e456fdf2883e9dd4"],["/tags/crypto/index.html","16e0f7982c9cbee018309bfe178611f2"],["/tags/csapp/index.html","00e0eb34fcafd1f8f9d5e4489d13d9e7"],["/tags/csp/index.html","35e4525517e8708a398f083120da2888"],["/tags/css/index.html","61ad359c804cdff1f860ef58a15d2e3b"],["/tags/dart/index.html","406eb00a8937ca1f074389a1882ccb79"],["/tags/data-structure/index.html","cf4554016545a3e9b21f460c2d26355c"],["/tags/database/index.html","6d5a3c9325053d589c44cf26fe8ead3b"],["/tags/deep-learning/index.html","8b1dbcb2c9e5b1857751d3a479a2e56e"],["/tags/django/index.html","90769bb8ef6b60f02b0cf563fc7a0137"],["/tags/docker/index.html","772708b29ebcc85d6409a18bfc0d4c21"],["/tags/dwm/index.html","2e723f23373bc02233c6880d36931ff1"],["/tags/exercise/index.html","194a7fdc100de055672341d95a4341d4"],["/tags/filebrowser/index.html","5c5e60e8f4fe7b024c6d9d1531cb2002"],["/tags/flask/index.html","c5367314ec495121ab2c3e7aa36bc694"],["/tags/flex/index.html","1a6741839b5529d4c8082dcf612e5129"],["/tags/front/index.html","51a95af3483ec0c6281119b7066f708b"],["/tags/gcc/index.html","d3c3af58ff031ca0ccf67bddda07e1eb"],["/tags/gdb/index.html","00f36e81c77f91e83a93491fd14e0304"],["/tags/github-profile/index.html","977e6f27a9cced570bf7c504079a44b3"],["/tags/github/index.html","dcd7797a617db77dd91f409fe787a879"],["/tags/graphviz/index.html","daa77458b5a5294d6fee2870768a4404"],["/tags/grid/index.html","6d66e0acf61208e731b149f09ffe8472"],["/tags/html/index.html","7f7669240b9c1265e8178b94fc056a01"],["/tags/i3wm/index.html","0b7d6ee93e8053042e2669b41e6cb17d"],["/tags/index.html","7880a6ad365e32db15d434bb1577958a"],["/tags/issue/index.html","ed2c6a7697120c09e4b3c87fade262fe"],["/tags/jQuery/index.html","888a3a1d4dfd8e4afc4084bdfa35749d"],["/tags/java/index.html","9e22cbabe053c26a819f2c37d4d08578"],["/tags/js/index.html","6a6a64fe152acd7a33888d248c39c43c"],["/tags/latex/index.html","78f8c85dd7aad41773dda6074fc2b629"],["/tags/leetcode/index.html","bd7f65e2333968c64fd675d0ac2ea43f"],["/tags/lex/index.html","105cb04fcc06457d364e5938d7b35c21"],["/tags/logging/index.html","875d88ec5d7a3cea152f0f2e30a9288c"],["/tags/material/index.html","09917e7fe2a0e4bee9f179dad0629b6e"],["/tags/music-player/index.html","bc4a297c438dde31980e76d70453f803"],["/tags/node/index.html","cf27dd5caa7593681d0a5274632d7f97"],["/tags/nodejs/index.html","232502476ac9df07b8e4a3b02e86d018"],["/tags/noj/index.html","a8f58e240ce4b7fe80457d128c3293ae"],["/tags/npm/index.html","4482a5573a407d0bf822a3f6cfdcfec7"],["/tags/opencv/index.html","7ea1bfee349095017717fcc5daca4e68"],["/tags/overleaf/index.html","dff51f9f860fee12d44a8373dcdfe148"],["/tags/pandas/index.html","a3a9ef81883f3bec889721ce219a203b"],["/tags/paper/index.html","9be3dfcdc04f868bf1927c770535c19b"],["/tags/premiere-pro/index.html","2a7bf2b9aaa44d84c92f23bbcebea4c0"],["/tags/proxy/index.html","f415c52b51b6d25da8da6b22793b3bff"],["/tags/pure-css/index.html","1f1fe9fde8ae26c4167ea898923b85d3"],["/tags/pygame/index.html","fe304dfe1d7d4d4bcdf53ba37fa54a95"],["/tags/python/index.html","90c55788c336b0990c32bfa06793cdc8"],["/tags/python/page/2/index.html","2a2ee4933f666dc6d7395e48e76adce3"],["/tags/pytorch/index.html","26b27e01f07f95d0d0e75283e8ccb2dc"],["/tags/reading/index.html","702def5d6f96d5225f4bd8a98c9e45db"],["/tags/request/index.html","de786f3926cc9309aecb7b1aedda1568"],["/tags/requests/index.html","d40459b62b77c304847b2050760f5ed6"],["/tags/security/index.html","2e7185d570ae14a59a6f03acb7f21a49"],["/tags/shell/index.html","2a465dc3649b653f6d5003e33be3be7b"],["/tags/sign-in/index.html","a890f55c15d2abb1c74b3b1f986c2f0c"],["/tags/socket/index.html","c5987ca49e6c06afa3e4d508bf82794b"],["/tags/spider/index.html","0cdaa326c886e60ede4dc275ac568f28"],["/tags/splash/index.html","3967c9925c51bf2f354a9079db9563f5"],["/tags/stl/index.html","2ce36fe2042dc35213c6ecd73b247c35"],["/tags/sumatra/index.html","87b144c38994440672304085c13fa1ce"],["/tags/superagent/index.html","a5c459cd433eaaf8c5af7c0497313123"],["/tags/tensorlow/index.html","e8149eeb298bcbb806c8f19b2504ca4e"],["/tags/tex/index.html","f20f0d1c94b8b6c4d154fc3bea6acb11"],["/tags/thesis/index.html","2546620f7cd39a3d7a8477e174adbd62"],["/tags/threading/index.html","e5cbae090d9192e8e3309c2930b55936"],["/tags/tkinter/index.html","2414c75dd08a902e5a057ad65b088b86"],["/tags/torrent/index.html","24ab8ffbbe79b3f8acc7189fa3bf1dc9"],["/tags/tutorial/index.html","4ae6fad347e3b505059bc2cb2dc0f5de"],["/tags/typora/index.html","09fb703456123b1498a38a313a2243af"],["/tags/uniapp/index.html","d811a9f8f062898be103ede6fed8b88f"],["/tags/vite/index.html","b754b10f944227ceeb5fcd35db9c832a"],["/tags/vscode/index.html","64fff26b77bb979242229a4c38ba7d45"],["/tags/vue-element-template/index.html","9bbe53567f0f5764252431fa4bbc80a5"],["/tags/vue/index.html","e21f50ed88570e386fd3558c7bb12b74"],["/tags/vue2/index.html","707ec43141d2e0f27b2d14930bde7641"],["/tags/vue3-x/index.html","1cb27a0cd485e2f9dea3d532100a86b7"],["/tags/wechat/index.html","489ef07e822616556879b7de9e3994aa"],["/tags/wm/index.html","c9a1127e6b32af219f66fa35fc9b4a0a"],["/tags/wordpress/index.html","73f0b143bb137038963b1dc7655bf9e6"],["/tags/workflow/index.html","187d37aa93be4f9fdfcb4bec9eef347f"],["/tags/xpath/index.html","f68769443e9f1c7757024f2a37e2b4e1"],["/tags/yacc/index.html","bf92abec7358026e0b4c63d57a4a6c72"],["/tags/yarn/index.html","97ccc233e60a90e6a2b7eb98754bcc13"],["/tags/zsh/index.html","e82ac7f669e19dfa5a04c5626f6b7958"],["/tags/七牛云/index.html","8ad8a534ecf1901953ec894410bf51fb"],["/tags/函数/index.html","2575801a1a81cd84e62b2b61340432a8"],["/tags/剪辑/index.html","8aa6bdc3d7804c915e4430c4f869395c"],["/tags/存储/index.html","594e809f78c4a97369e57fd27b9faea0"],["/tags/实战/index.html","e03d18f5e85e7870bbd8e94a02458562"],["/tags/工具使用/index.html","ca3ca9453fa4cc1265a00fc3160ce491"],["/tags/建站/index.html","20a79f260f52dac091ec65da5879ea3e"],["/tags/微信小程序/index.html","18aef8f6eceb919cc9b08668dce9ca2d"],["/tags/指针/index.html","4c55d129a862917cb96a5f94809eff9c"],["/tags/插件/index.html","9843ef87d5f648ec60f78fec8b7bf7c1"],["/tags/效率提升/index.html","feb3d2a8ce201a575a6dc0d1c3120d65"],["/tags/日志/index.html","825054fb168ff03acb80e1550d5f70e1"],["/tags/汇编/index.html","4735a5ebadb6e2dfcd7aa2ac3d8b5cb4"],["/tags/油猴脚本/index.html","67d9dd4cd185ca34ef7b9a0e50aa9ccd"],["/tags/浏览器/index.html","92ef7844f253720462635cb5c558da64"],["/tags/爬虫/index.html","cbb0d27889999081147f9ad6daae53d0"],["/tags/算法/index.html","5b93a96c511e5b71823555dcbd6a0b4c"],["/tags/编译原理/index.html","b0f66cf14217f045909f4108ab6849f9"],["/tags/获取地理位置/index.html","a848a8850d9cb93b740bce6031015a15"]];
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
