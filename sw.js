/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","8353a570ed2199ce283ccc604a8775cf"],["/2021/04/20/稀疏矩阵/index.html","46c65d5150b26477d75774a8c64d0aa5"],["/2021/04/23/广义表简介/index.html","d59d5991a010e04d10d9afbcec2216e1"],["/2021/04/29/关于指针和函数/index.html","618bde8a5b1e168299a33859f194bdcf"],["/2021/05/10/哈夫曼编-译码/index.html","35be61ababef20047da36d2fc49e1d3f"],["/2021/05/17/数据结构noj_2/index.html","dab9ff00b7c7f74342bec30b683795e5"],["/2021/05/30/数据结构试验/index.html","46bb814b3a4e418895f331580dd2427e"],["/2021/06/12/数据结构noj-3/index.html","d6aa8cf2731ffc8dc79d594ab65a9976"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","cc2951364d11983f233980fcd20a9250"],["/2021/07/08/课程资源分享/index.html","31ec4068ef8083a7ca4e1a500ad761b8"],["/2021/07/20/Scrapy-下载图片-文件/index.html","a027c7cb738386bbf9c41f5401376fb8"],["/2021/07/21/Scrapy-动态网页爬取/index.html","86db1f6a24dabea4703f443881e0db4d"],["/2021/07/21/疫情打卡/index.html","43c33d59865fa0fe1a8fcd61c9a2b11f"],["/2021/07/29/Scrapy代理设置/index.html","cdae11bc5484a6793beee12fa36a6d7b"],["/2021/07/29/数据库认识/index.html","3cd71981607b0ac97202839b6dcdd395"],["/2021/07/31/Python多线程学习/index.html","347513612d75848697bacab03c685f5c"],["/2021/07/31/tkinter-requests练习/index.html","95afca2b814e4ee54dedbd744505f684"],["/2021/08/10/Git学习/index.html","27b7075dd39c57c5829d3e573b755eab"],["/2021/08/15/pygame实践-1/index.html","e9a0958a6de4b6ea471fc5a9707e7a07"],["/2021/09/06/微信小程序开发/index.html","b32e05170970e8b47c653c5880acead2"],["/2021/09/21/命令集-1/index.html","2c3fd94250f8dc2d1b0079461e2a4483"],["/2021/09/21/命令集-2/index.html","2e228824e1c1a00d29b6baf9c1c61bc2"],["/2021/09/21/命令集-3/index.html","a50905474a21906a731e7a2dc94ed4e4"],["/2021/09/21/命令集-4/index.html","e81d48d04a312516fcbe66d995b8e250"],["/2021/10/03/socket学习/index.html","8749eb563ee510f73c3e7f34c8738369"],["/2021/10/10/dwm入门/index.html","545f08fb8ada5612ed2f3f0e25d272c1"],["/2021/10/10/安装ohmyzsh并配置/index.html","600291ea4aac79da6f62a51000b8eb24"],["/2021/10/20/css学习/index.html","ccb89a6385cce55ef5d4255af5d52206"],["/2021/10/20/wm入坑/index.html","298ce0c3cb93df27d75f9ea59f8b000b"],["/2021/11/03/微信小程序学习/index.html","5dd265fb011d3650a82868ab80e6ec39"],["/2021/11/04/css揭秘/index.html","0d0ac7276fd11ce72eb92117e74effcb"],["/2021/11/05/css-练习/index.html","75f70a5e6e6d11369e42f407849a49ea"],["/2021/11/21/命令集-5/index.html","61adec32a68b4a8eb38532f18ba765ad"],["/2021/11/21/命令集-6/index.html","7085cbd7b470b66bebaceef914803832"],["/2021/11/21/命令集-7/index.html","11e0aef25f237d4cab4b048a186ef52b"],["/2021/12/01/搭建wordpress/index.html","77f0d74380c698b1d055781c5dcdd10d"],["/2021/12/08/python操作百度网盘/index.html","f4822b8850e1b19819ed61e446714334"],["/2021/12/14/js爬虫/index.html","77c36f07eab97cabd9daacafe3d1d242"],["/2021/12/25/为网站申请ssl证书/index.html","b5e4f6151d5205f07a0c4edd88941fe7"],["/2021/12/29/使用七牛云为网站提供服务/index.html","88c9b7dc935e7374fff239d8924d0ae9"],["/2021/12/30/jQurey继续学习/index.html","2474f3dae316527ccd9366505538e735"],["/2021/12/30/jquery学习/index.html","971164676ef85099adde4c1c01ab920b"],["/2021/12/31/vue学习/index.html","ba04c340d28197ac46f2c51a314cf637"],["/2022/01/02/疫情自动打卡/index.html","4f9fe6e67d6314dbe7b89a4730c3bfe5"],["/2022/01/03/javaweb初体验/index.html","3a24b778f9c4c20b03d0d523195a5eb1"],["/2022/01/04/codewars练习/index.html","105542b0524fdb50c6c933c5c55c07cc"],["/2022/01/05/Spring学习/index.html","bb67aaf7e9456106132b8c81bebe8c22"],["/2022/01/05/vue实战/index.html","303e6a88fc3616da22dd4c5c28fd95d9"],["/2022/01/08/gdb-gcc学习/index.html","aec0eaa357684b66a40dc6c1ba9b91a8"],["/2022/01/11/python-opencv学习/index.html","cbe4aba2420c2e4b51c0c45d9b3d0e56"],["/2022/01/12/汇编实战/index.html","4b2bbe5d5e5489555687d22699e3ecb9"],["/2022/01/17/pandas学习/index.html","cb2a04a919f217a835068c1b0ef6b762"],["/2022/01/19/可视化图的工具/index.html","e6ef1f7a3f3f242a1b5eccc64a014d12"],["/2022/01/19/机器学习入门/index.html","f51f12224e21c7a9ef3c0ea7e1dabaac"],["/2022/01/20/cousera-ML学习/index.html","5c768a8a9f2f85ec52d82b93eec0d4ea"],["/2022/01/30/typora解绑后出现问题/index.html","fd32ef3a47d4f9d33e7adce3db52a670"],["/2022/02/03/NLP学习/index.html","5e5f4067b07b3e9a4d11daeded57f4d3"],["/2022/02/04/Web漏洞学习/index.html","59b9418b904bf277eca9439d190683fd"],["/2022/02/04/pyqt学习/index.html","75db1f6ed3d764aa8864c94539aab55e"],["/2022/02/04/python爬虫/index.html","b2319ecbdad411799f655019755cf426"],["/2022/02/18/Electron学习/index.html","32239be7518d428c10f302400f829aef"],["/2022/02/22/疫情填报字段解析/index.html","a5ff4f87f8859d1634811b52424dc11a"],["/2022/02/24/Bomb-lab实验/index.html","c61eac34f7ed31d67a6b624fa2247570"],["/2022/03/05/nginx学习/index.html","a0c13d99c9005b5aa40fa33130b04a5c"],["/2022/03/09/汇编原理课程学习/index.html","224353f4dc7d86c1aaa18b39c0514d05"],["/2022/03/11/Keras学习/index.html","77b187bf674bf2dc65c100057fb9415b"],["/2022/04/01/graphviz学习/index.html","0813362636ec873cab84d24711dcf9da"],["/2022/04/07/django学习/index.html","e4d2bdf3001133f73adcec5230786adf"],["/2022/04/11/密码破解学习/index.html","ec6f2b22a0e13730aad579b5fdef75c1"],["/2022/04/12/flex-bison学习/index.html","52a489d993cd8dd82a4c398159ebfcde"],["/2022/04/15/pytorch学习/index.html","75b8964226f08ff2293840c7e978d4f9"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","5da1b0d4d54eee873674ed9283328b93"],["/2022/04/23/写一个音乐播放器/index.html","5b4d286037cdd2a8c0317d55330e0014"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","b1b842a77c6ee0302f95359984191626"],["/2022/04/30/GAN学习/index.html","e43963afe7fcd73f0f0c1a75f4e4e8b3"],["/2022/05/02/html精学/index.html","c099e41bec375f4053d1204f7e690053"],["/2022/05/06/write-a-compiler-by-yourself/index.html","42c5747b89fe25c6360a9587cd3ad960"],["/2022/05/30/acwj-01/index.html","1caedb616fe61f6bb55be6395edb433e"],["/2022/06/14/animeGAN/index.html","28b4e20ca921d4ccff35dc040071bf46"],["/2022/07/09/c-与算法学习/index.html","1c54bad763233ca823090365579b0855"],["/2022/09/19/flask学习/index.html","710fac1243b30f17cc3852732cbf7309"],["/2022/09/22/cs224w学习/index.html","20adaf9445c9a400b40c006d96960866"],["/2022/09/28/记录一次wp重装/index.html","0bf5aa36d60ba480d4443ced02f52925"],["/2022/10/01/Obsidian学习/index.html","44baae79a3a33b6515cee53460cb9952"],["/2022/10/08/vue-element-template实战/index.html","6796dcb927fe4f7e3d92906002e4462d"],["/2022/10/25/vue网上商城项目/index.html","8ec28a7cd72fc96d3854995eca3d278c"],["/2022/11/11/leetcode刷题记录/index.html","dd7c3e2731677ad254c1169544a5a12a"],["/2022/11/11/使用overleaf优雅地写文章/index.html","5b79a97331624b990267b898ab855eff"],["/2022/11/22/磁力链接与RSS订阅/index.html","e787a598d13e0022eac1184edd9e7232"],["/2022/12/11/uniapp申请获取地理位置/index.html","0d5185a24ed3c77e663395f7b8eaf270"],["/2022/12/26/pr剪辑学习/index.html","f29982e6e02dcab51ed9f30f0578a24b"],["/2022/12/27/css中的flex和grid布局/index.html","6efa8470b5202aa1a6466a74287bffa2"],["/2022/12/28/Flutter学习/index.html","121abff4ae79ceab914d75baf1d435a0"],["/2023/01/01/美化github首页/index.html","bc5c795e67f5404c96a3728e36d3ce51"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","2d4cd5b11572342e363a969f8f54b46a"],["/2023/01/04/构建微信快捷发布文章工具/index.html","e504a08489741b88f02a695fe01e0849"],["/2023/01/14/dart学习/index.html","b698522f679f2f282bb46b324ef35618"],["/2023/01/23/闲置服务器BT下载影视/index.html","53c6bf9fb464b5d48ab4c3e1a719b32b"],["/2023/02/07/TotalCommander使用和学习/index.html","d89b4dcfde6a91ae5ed4d3e4f7ece40c"],["/2023/02/13/docker学习/index.html","95b1d8134e73006a0676a5a79ea8c4c0"],["/2023/02/17/DLHLP学习/index.html","b4464346e745dffc3cab96153e394bb7"],["/2023/02/18/学习purecss构建自己的css框架/index.html","8b4159bf74b8b6de338b97ada0d5f925"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","8e737c09c19a22fd9be5d5f0af89b925"],["/2023/03/05/STL学习/index.html","e30b2459e04d7c16a8ddb52eefc369c9"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","cfee403db6b355dd38fa3e1146821b76"],["/2023/03/23/实战写浏览器插件/index.html","4b092a7ec9a65d5dcdec217627c0e2d3"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","57713d948933f42417b159ffae001a31"],["/2023/04/02/EndNote基本使用/index.html","d411c44900eadc789a4df8b89c10c40b"],["/2023/04/04/mne处理脑电数据基本使用/index.html","11d44cdd7b6af55c7461b66b4425509f"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","d3a79c6d5d78ba3afa233e516046d8cf"],["/2023/05/02/python中的logging模块/index.html","0b5c206b3e9355827c9c938d2abc360d"],["/2023/05/07/python的特别方法与装饰器/index.html","2c8ec9da6d728d1d8724216d437427c8"],["/2023/05/20/Wox插件编写/index.html","db033444acf33b2599030c3cc158aea0"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","589caa67e7f7eb385c0d5fa8c49d1893"],["/2023/06/03/深入Clash配置文件/index.html","fc460a298cc133d1fc770da18f7a0da9"],["/2023/06/10/node的包管理工具介绍/index.html","3da343285d445a0d191b2f003d1fdedc"],["/2023/06/12/AI写作工作流/index.html","99512b9298cf1dbd0dcd9184cccd12eb"],["/2023/07/07/Astro-Vercel部署博客/index.html","2c7c04c50966969ac99cf18efd42df11"],["/2023/07/09/青龙面板部署项目/index.html","6df145ea1c80393b0161ca3bf0a22594"],["/2023/07/29/CSS-Modules介绍/index.html","8269a1844926f0ab2a4c6c201d9b9c93"],["/about/index.html","554941df1bfde4adc6444084a7082990"],["/archives/2021/04/index.html","26d91cd50d40328c65d913772c6f7814"],["/archives/2021/05/index.html","b00694a8e40ed5a5fe0a3cbfea8eef31"],["/archives/2021/06/index.html","4be9d2d7a0961c5cf1848d5c3bed9dfd"],["/archives/2021/07/index.html","9284397246613281c1964c0475fb88a9"],["/archives/2021/08/index.html","8705e264703ce2e881d341966a5e28a7"],["/archives/2021/09/index.html","b9468933b69f5d37f9aa47d6129e0336"],["/archives/2021/10/index.html","e701b7203793063a6085ea38ea61cddf"],["/archives/2021/11/index.html","6cdde305d95ddfb486c1a0ad3a08864c"],["/archives/2021/12/index.html","f423338d332e8295e25efa57ef55d4c9"],["/archives/2021/index.html","e73c7d91dc030952a739dac8e02f4303"],["/archives/2022/01/index.html","7471c7176117fdbf955ea4ae56c101a7"],["/archives/2022/02/index.html","86233da1dcd1bf9644be1b440319d32e"],["/archives/2022/03/index.html","ca4a39c9dbe5cc08e60bb85d7ed133a5"],["/archives/2022/04/index.html","0930f0c2dda3e985b59ed633caa7db71"],["/archives/2022/05/index.html","d86c07a89631d9d3a2672c6cfb0f3e11"],["/archives/2022/06/index.html","c2b08c5f8e464814942a16a15a9bf2c8"],["/archives/2022/07/index.html","155902f4dfb0515c88e2cc07368a2f52"],["/archives/2022/09/index.html","262b06e7a991545e015a5bff17e208c7"],["/archives/2022/10/index.html","02dab46446bf7afd2f6d7c330c55bcb2"],["/archives/2022/11/index.html","ac5c6eaafcafe04d2912173fdcf8d18b"],["/archives/2022/12/index.html","67f9bee2f93ad26389d84ca064b22634"],["/archives/2022/index.html","73b4a370ea9d800599f646741b111174"],["/archives/2023/01/index.html","d24a1450bf1c3bf940e7948f1a5bcdc4"],["/archives/2023/02/index.html","426f70bec6c02a169c7e7fe2fb4e3a88"],["/archives/2023/03/index.html","f745bf416b88d2defd2be1c15313329e"],["/archives/2023/04/index.html","9e7d2f19c83481a809175176482156c0"],["/archives/2023/05/index.html","51a9f3346501ed70921721865f463979"],["/archives/2023/06/index.html","68def7f1715b4a1beeacf08ed7e06cd0"],["/archives/2023/07/index.html","3a5808d98c7ffb9fee7c5e2148278718"],["/archives/2023/index.html","697aaa3641a8d2c89906035492c71cef"],["/archives/index.html","6af7d2ea344c38fcfe1fdfe943040d9f"],["/archives/page/2/index.html","6dade6cd8490a2b956094ff723603a36"],["/archives/page/3/index.html","c1b9120b1c07183455c035eead440988"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","f88b1ceed4a3bc9aa6deea387f910940"],["/categories/Linux-study/index.html","652b6dd78047952acdd758c44ad94611"],["/categories/ML/index.html","1795070dd98bc39374d3f1010d90aa3c"],["/categories/Nginx/index.html","d9d46a115b8633b620be1eb9805e82d4"],["/categories/Spring/index.html","54474f7a254a192415046142795b97a6"],["/categories/course/index.html","9c49dfc410857973f34b905fc58774ba"],["/categories/django/index.html","38c020230490bf3c78d4490b6c5a112d"],["/categories/fun/index.html","eb554dd07cdfc96b134e64bc1dd45c91"],["/categories/gcc/gdb/index.html","845397b6e138ff6200240b006f709b0c"],["/categories/gcc/index.html","bbc1ec8110a18a43c262c178730f69d0"],["/categories/index.html","01561453675b166af804dd69fb7a80a6"],["/categories/java/index.html","0f6e9ca66ca1e69b5e1bffe37475b9af"],["/categories/latex/index.html","458915b0a70a5f9d0ae04484dbfd4183"],["/categories/python/index.html","cda49f8dfa5825155745fd81247fa50a"],["/categories/study/index.html","ad4c34a76d58919b06ba606c110df38d"],["/categories/vue/index.html","b953cc615fd0b0cfdd62ae81b5de2a63"],["/categories/误区/index.html","d99ad358c198c3638648d88b8d94ea88"],["/commonweal/index.html","fa45a80b6e138a2b2bec634ddfcc9304"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3f673fc7688b05effa5fefa8ad337984"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","5ea65287f011b14ca1d47c70f82b195a"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","624878690b25ad530210e3b2067b61d6"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a4a4c1cfebb5e79f2a8072d25d529965"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","41d151b70df22eec4adc719be8fb8f62"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","19048e9c8e04945af7f5dfb5ca4bb5a4"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","c07a0270ceee5ef63156a0fd110100ae"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","6e46a3988e0ee695ef365ab5cb9756f1"],["/page/11/index.html","7fb1594e6cdfce8904ab6b9e91f68dc7"],["/page/12/index.html","916260de1253eaffa179969574303a41"],["/page/13/index.html","596892b6c91287692294dd39d470ac3d"],["/page/14/index.html","516347bb2c40d7bc620ec38ffd47246e"],["/page/15/index.html","14a5e8b34fb2c91ef21ac23800507b62"],["/page/16/index.html","64f4c1ec40ef24a2d79b36fcb7a01204"],["/page/17/index.html","fc5e55ad2e490937b7c8837bba4a437d"],["/page/18/index.html","2c5d2ab0e4981c9a2e8c1f3fb104c2a2"],["/page/19/index.html","4f18cc8c10d5dfce3d7a9a52db3b3f92"],["/page/2/index.html","3f5eb43ab901aab127a6bbcda28bc49d"],["/page/20/index.html","1a7a310c1ff606ae3f79a3992f8877a5"],["/page/21/index.html","de257282c2f7167edb2062119d2bab2d"],["/page/22/index.html","4a69d2fae1e820ce2af501fae76ca264"],["/page/23/index.html","6f11b57597d32618573060ceb079ac75"],["/page/24/index.html","c0d0305496b216c9a43b99462625f0ce"],["/page/3/index.html","bf516c63ad50c530e835a53ffa87f2cd"],["/page/4/index.html","fb38dc12be57f8c271713bb24aa5e218"],["/page/5/index.html","2dbdd6650bdb56dee712962561614ef0"],["/page/6/index.html","8e78da7148afeb9143ecc6592893a21a"],["/page/7/index.html","efb67c629a6be55e79f7eb66ff29cb08"],["/page/8/index.html","de82367b5b11d5f739ef0d7cd563911b"],["/page/9/index.html","777204396ef612e83677ee9a76a05545"],["/resume/index.html","c49652744d2d4fabb29b6540e4dd6e9b"],["/schedule/index.html","e551d5fdb08a55cee9e3fccc4ceae6b5"],["/sitemap/index.html","c32eb3f4fed8d762234e1dcb7e7cdc50"],["/sw-register.js","c48d6a02de799c16f939cd5d173560ce"],["/tags/AI/index.html","78b702ea4c9dccbcdded327a54d98975"],["/tags/Astro/index.html","28a5e3fd4907c40da4d19d6af5d97f35"],["/tags/BT/index.html","4aa8c8e3df248ce0bf6427c5c05b87c6"],["/tags/BaiduNetdisk/index.html","993dd302897ffb5d01e1367dd82821cf"],["/tags/Bootstrap5/index.html","e2519576ce902f436e413673b142ed89"],["/tags/CSS3/index.html","b3c40d5d8534dcbbc423e67d2a212993"],["/tags/Centos/index.html","bb1e09d1c17a46d0982567c724b81f9f"],["/tags/EEG/index.html","4298ca47ac4c45e85c2655fdaa54d2e9"],["/tags/Electron/index.html","ec0d14eb5d518ed0810a73d8154f13e3"],["/tags/ElementUI/index.html","8fe9dbfce292d2e8bdeb50f810de3225"],["/tags/Flutter/index.html","5ef647ac1567b20b2d070a34b7598c23"],["/tags/GAN/index.html","9a7efaff3bf1c4fe2084322f7749b51f"],["/tags/GUI/index.html","c5facd19d47cda8b2c5d8248c3c61665"],["/tags/Git/index.html","d5059f8a997858a127e985279e8c7bf8"],["/tags/JavaScript/index.html","4b3e72bdfa7bc10374d9ca476f3c23c5"],["/tags/Keras/index.html","564539e28bc49ac63c7e766555312758"],["/tags/Linux/index.html","40f92af4e0636a48118a243fb127de15"],["/tags/ML/index.html","f8036f3284a54d5344b84dd0f43d8e36"],["/tags/MNE/index.html","1906f7fbcd6a72acc7fdd4927e48bd9f"],["/tags/NLP学习/index.html","06deba1016ccae8000bef65fd3e84f7c"],["/tags/Nginx/index.html","ea6f58179938d68f6e8ba82fdbbfd979"],["/tags/OSS存储/index.html","2c1969e33395f7ce17b9a7b0e9457b59"],["/tags/Obsidian/index.html","bc35cef94abb2e2780a3fcd4f4f6dd1e"],["/tags/Qt/index.html","3acc9df1e4e54f2841a2591f0ddec8f3"],["/tags/RSS/index.html","ea85fb35da9d325476bed8bb94366d61"],["/tags/SSL/index.html","5b09ed4e5a43fc15930d45685195ab95"],["/tags/Scrapy/index.html","6b8aee05a6494a798c461c90d2550645"],["/tags/Speech/index.html","704e636d2387bffaa32f4b2de008b877"],["/tags/TotalCommander/index.html","c80dc8b98d730439a33a6e6e598f9f12"],["/tags/VPN/index.html","8bd9e0d4af1d3d93841dfd3a01f8ef07"],["/tags/Vercel/index.html","806cce101a4ac1abbb9647e35310b760"],["/tags/Web/index.html","ef21e12e25a3e47fc8a3d354aa9c5f8a"],["/tags/algorithm/index.html","bddbfe039f322736857bb9189eff93f5"],["/tags/bison/index.html","2c3929983c6e072f63115cefd47b4919"],["/tags/bomb-lab/index.html","5d57b8ee79d8bfd62936e50a2fa40927"],["/tags/c/index.html","246da2af281ec8d39d0397bde2d42521"],["/tags/cheerio/index.html","3aa4e8e951a2001b1a394d46c9e0e66f"],["/tags/codewars/index.html","996bd79b6efc1389cdff16c3aa691431"],["/tags/compile/index.html","77d65cee7a4646e8a9669f219edb22e8"],["/tags/compiler/index.html","e30130d7d7a9d4b1be4c0fc1459c1322"],["/tags/cors/index.html","9de1bf24c5c4bb54bb3e16f8b32f336f"],["/tags/course/index.html","d5885e6029f2d4736def2214ebba1415"],["/tags/cpp/index.html","b1858e33058bbe8028f56324de5a20d0"],["/tags/crypto/index.html","0978b6e71a00f5c4671709a2b72e78ce"],["/tags/csapp/index.html","485bedfb25bf89744cd7a9396461aebf"],["/tags/csp/index.html","e9018a68795e3fd937ff438ab9e28ed6"],["/tags/css/index.html","6b16d9242d843c6dba0bded739e4f857"],["/tags/dart/index.html","3836064ce687617dae527258b80acb85"],["/tags/data-structure/index.html","b0d5838edc896e3a2415e80aac2a549b"],["/tags/database/index.html","3171149c463c0a0ca4f13a6ae1531a05"],["/tags/deep-learning/index.html","86c6941169cee9a80930d1b9bc2ca0d1"],["/tags/django/index.html","06ad7139957056b2d3308d8dd0c9d15d"],["/tags/docker/index.html","cefc23bea895bc25ff69f1cafb940c9f"],["/tags/dwm/index.html","5d027af1b4e5e5b4fb8c0181a35c2868"],["/tags/exercise/index.html","c3eea81fa709f3b314928ac029728f11"],["/tags/filebrowser/index.html","8bf91f75b5eedc9ca452ae3c0af1da4c"],["/tags/flask/index.html","496e9904972e6b1dadb10e13767322d5"],["/tags/flex/index.html","739512050c1ee9735c7225d1ba9ec199"],["/tags/front/index.html","9837bea0f22a3d30de3c45807ffbce93"],["/tags/gcc/index.html","727a00171485aa3aa5ca9ad0dc6b5c30"],["/tags/gdb/index.html","feaef38b5910fe1cac4213eb98f1d844"],["/tags/github-profile/index.html","71b94cb25cab790f62a0b39fdbb82e07"],["/tags/github/index.html","660e479efd073872262da30ff010a015"],["/tags/graphviz/index.html","247e90f24bad2fcb196e14a4a88fc293"],["/tags/grid/index.html","6b120c3f73d94b0888c03e41c4bbe41d"],["/tags/html/index.html","d15127c4694180884ccae8e94d7d870a"],["/tags/i3wm/index.html","f6b831431936344bf6746c5729c4a405"],["/tags/index.html","21b31e92a844e7c3e016a67bb0b8a50d"],["/tags/issue/index.html","edca1f18cc2f245e4857e42837d1c179"],["/tags/jQuery/index.html","52772a136202c9a6754880871b99ea62"],["/tags/java/index.html","66d55663b5d04b5bbe786ff631bb866b"],["/tags/js/index.html","9d6ea1ca6fd593e38239e70364a92e9c"],["/tags/latex/index.html","9aa0420df8a83bc6e3f6cc7843e21aa5"],["/tags/leetcode/index.html","e56a39c057fe78e444f1cdd5c3d9056d"],["/tags/lex/index.html","f9428f408e461977e11219d5f1c5d57a"],["/tags/logging/index.html","d8b1493b0a22b2683679f5a013df83a6"],["/tags/material/index.html","3ecdf13b8072a5c38d23f269b5091527"],["/tags/music-player/index.html","b919b3411e439f9d5c171ab729054a47"],["/tags/node/index.html","f134c757fa6204ca8e125a6f384e5dbb"],["/tags/nodejs/index.html","1bab4e85c75386a946ea165d89be75d6"],["/tags/noj/index.html","05aa2505517a46461a438f132ce64fdb"],["/tags/npm/index.html","6b02dcd3906d2d89a5397e3e0ff2ea7d"],["/tags/opencv/index.html","c1b1df1a458321148dbe3014313c8e82"],["/tags/overleaf/index.html","fe20b95f721ba2d3732a254b6f709c01"],["/tags/pandas/index.html","0d1e51af43aea2d4ea6f524d700a11b1"],["/tags/paper/index.html","56ebfc04a805a6bf9a11237083220516"],["/tags/premiere-pro/index.html","5710ce92a8cd8dcdd5ce955c8c0f3bb8"],["/tags/proxy/index.html","fded18080569102272ff35db7aeeec01"],["/tags/pure-css/index.html","da020442c721d2755ce170cc3ca8390e"],["/tags/pygame/index.html","4056ac94e9406cf3a90dc173c5262054"],["/tags/python/index.html","4863918a463ba28168bf0af5f4b2bb93"],["/tags/python/page/2/index.html","a379fcaaaac72de073d8625eec8e56ec"],["/tags/pytorch/index.html","a8fc5ff2100ac8cffac00ba218ff16a4"],["/tags/reading/index.html","260534595fb6f137f659db5b1c2e5f49"],["/tags/request/index.html","bcd577ec539f2322167bde1e6929cccc"],["/tags/requests/index.html","84d9a7c50fef468c28610e71c55f9446"],["/tags/security/index.html","1138f6d4b004824aa6805396035f9f2d"],["/tags/shell/index.html","ee94dc9a8fa568d6b12ca9460cb3c976"],["/tags/sign-in/index.html","fd8306274ff3e62904121ca804814c6d"],["/tags/socket/index.html","76da8b59bd3ad349a9b20c08a8708b6c"],["/tags/spider/index.html","a4a3854a816889ec0788463e804df576"],["/tags/splash/index.html","c366e20dc0df730074f9ba08e53c705f"],["/tags/stl/index.html","373e6652b1777b3511b2b674956707e1"],["/tags/sumatra/index.html","32991420f694130e81fd65153ecd0afc"],["/tags/superagent/index.html","b94fc3a994dc813c9216a14157af0344"],["/tags/tensorlow/index.html","76423a8e46b6928d1f12b2334f686b61"],["/tags/tex/index.html","f7b1a6057ea4b195a9bf52c7a45fa3ae"],["/tags/thesis/index.html","5294372906141138a358d19c9915b4e9"],["/tags/threading/index.html","644ce10c656fe7ad6851c178fc6e9553"],["/tags/tkinter/index.html","c014b4acb25976cdf1527c3d296993ce"],["/tags/torrent/index.html","be68b3ee7aa2d147651af54e67ad875c"],["/tags/tutorial/index.html","6a77f922735d6cfea76bce2c59a416f9"],["/tags/typora/index.html","17c5ff227b57edab1d4f61c9ff14c4e0"],["/tags/uniapp/index.html","9bb0fca0757be1a1075aebc1842425de"],["/tags/vite/index.html","3dfbc6c657185336143e957b78b8f316"],["/tags/vscode/index.html","dbda9a7f2867a5f6d0a1022af2619a2a"],["/tags/vue-element-template/index.html","6ea02f142d03bb6fd0a809fcc1f5ccf9"],["/tags/vue/index.html","c73c4bae5ab62deea8edad46a0112018"],["/tags/vue2/index.html","9dfdc144aa575dd8b0935bd2e031953d"],["/tags/vue3-x/index.html","30affaa8a510043533fbd6e790c88c6a"],["/tags/wechat/index.html","0e0ed0b49e8674aa0aba0a3cea2d688e"],["/tags/wm/index.html","81c40e33e6e5d8f19ec76ebd5f2ea97e"],["/tags/wordpress/index.html","38b76a33f8d6a8cff2aa55e92e0ef078"],["/tags/workflow/index.html","11231778d40c3de8a1341b9504287f1e"],["/tags/xpath/index.html","2a0da461ab7926ce6ebeca64db03be98"],["/tags/yacc/index.html","b25ef244107334ffff9c439119750b36"],["/tags/yarn/index.html","e23243a992a5089b4647ffc49dc68db7"],["/tags/zsh/index.html","7d7009e86159db31a13d7a3948bf7c6d"],["/tags/七牛云/index.html","f9e3cd26bd85452f6d5064345006c16c"],["/tags/函数/index.html","6ee0469d4ce8950b85dc5038ed031a15"],["/tags/剪辑/index.html","b2fb2a0dda9479f6dffeb88b4ded1bcf"],["/tags/存储/index.html","71ba0e54b16f03e73d897fc1368f505b"],["/tags/实战/index.html","d9af7ed8fafd1bc384e38995b2b15bb0"],["/tags/工具使用/index.html","0a0e62ffc4b39ed76c94dc4774038372"],["/tags/建站/index.html","0ff51a10691e68c91011bf9c3ef688f2"],["/tags/微信小程序/index.html","b428205711579ee68bd37fc6ac7933e8"],["/tags/指针/index.html","8486c5a20768094ea19580dac2c05c3d"],["/tags/插件/index.html","a3ef4e84410f23375fbad7bfd2ae6cec"],["/tags/效率提升/index.html","c30783366bda1273e8a1f101cdffcf3a"],["/tags/日志/index.html","65bec7c9857ebe7bb61d9d2f1a763aeb"],["/tags/汇编/index.html","228497fcbd6e4c7a27697faca439ab4f"],["/tags/油猴脚本/index.html","b217648d428b0be47caa0c2162b0bc4d"],["/tags/浏览器/index.html","1b1eacb5a32637f311c0686decb40076"],["/tags/爬虫/index.html","28d044fd3b77912cbfcab6c53433151a"],["/tags/算法/index.html","38296691ba553055fd66d1948b62cd06"],["/tags/编译原理/index.html","e274c7b0a7895c25bb582ceec18ef865"],["/tags/获取地理位置/index.html","11a7b2a70390ac260f85ff51099aeb96"]];
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
