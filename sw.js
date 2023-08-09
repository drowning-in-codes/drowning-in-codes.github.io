/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","4ab99fabc9300f451b319332f66c99c1"],["/2021/04/20/稀疏矩阵/index.html","316cda405ffcab0ab2154a87a3498727"],["/2021/04/23/广义表简介/index.html","fc52fbf36bd00f2087b0564615d5d2ce"],["/2021/04/29/关于指针和函数/index.html","e69287da4fb9707573757adbe14d05f4"],["/2021/05/10/哈夫曼编-译码/index.html","18ea47f88336d1836656612af3302daa"],["/2021/05/17/数据结构noj_2/index.html","52cbe0a53cf7e17d50f7c7c2472d3b29"],["/2021/05/30/数据结构试验/index.html","b046e5557e802072d7c260606e0c99f1"],["/2021/06/12/数据结构noj-3/index.html","de89bd4f14c2e39dcab158ee65e08142"],["/2021/07/08/C++与Qt开发入门/index.html","695191712c0dc4a7c2fd648161ccdc2e"],["/2021/07/08/课程资源分享/index.html","965bb7aa04a270bb6231f954b53d9d9b"],["/2021/07/20/Scrapy-下载图片-文件/index.html","6eff78078468afd2819d66d5e93ae61c"],["/2021/07/21/Scrapy-动态网页爬取/index.html","3f238125a36a6dad095b4599c3938ccc"],["/2021/07/21/疫情打卡/index.html","b309549b9a2e333c83018f279cb01fec"],["/2021/07/29/Scrapy代理设置/index.html","94d5272065372c0c66ba3a507dcd74ad"],["/2021/07/29/数据库认识/index.html","df720b5f3f5a65d7ebd0bd9db12f9874"],["/2021/07/31/Python多线程学习/index.html","00a502aac366e3ac7043b9a30416f6e7"],["/2021/07/31/tkinter-requests练习/index.html","3301c88ade6c6b22daee924f793efb75"],["/2021/08/10/Git学习/index.html","c6fec602b43c16c4d5e9643284f77533"],["/2021/08/15/pygame实践-1/index.html","67e6e70af87a9c136acd8ec22bb6f565"],["/2021/09/06/微信小程序开发/index.html","0ea1ac0d300265ea1599505cea8a556b"],["/2021/09/21/命令集-1/index.html","5f8331df7d1dea33b4216fc4e3dc4b0d"],["/2021/09/21/命令集-2/index.html","a987732c77f24a2567bbd797a47ff940"],["/2021/09/21/命令集-3/index.html","e9b0193ae786442576ccbfdb59dade6f"],["/2021/09/21/命令集-4/index.html","97aa67645bb59ba4d77192b054e69593"],["/2021/10/03/socket学习/index.html","44f64c927e623a565c200762dba6b537"],["/2021/10/10/dwm入门/index.html","3ac66c36125667d734eca7b5afe7ee3b"],["/2021/10/10/安装ohmyzsh并配置/index.html","474256133cf8faed5ba46808000519d3"],["/2021/10/20/css学习/index.html","a605c729011e42e4a3b311a8c72fb049"],["/2021/10/20/wm入坑/index.html","660a649530059ed407ad4b59890388f5"],["/2021/11/03/微信小程序学习/index.html","acbe7ee39203c7bc6179f372eedb4bf6"],["/2021/11/04/css揭秘/index.html","3e3f2932a8cd6d32e4e42057ab9ed6e6"],["/2021/11/05/css-练习/index.html","f89fac0f204a25987e6c8e9366305e10"],["/2021/11/21/命令集-5/index.html","c90253bde113a1e4aa1283fe56881563"],["/2021/11/21/命令集-6/index.html","e9b54e62f92e8219632ca5245cfeae58"],["/2021/11/21/命令集-7/index.html","7e7b710dcff017607047e94700a442fa"],["/2021/12/01/搭建wordpress/index.html","b607605d8a94fa3f2c4e58d96e4eed68"],["/2021/12/08/python操作百度网盘/index.html","36e658ce40c3caf1c29ffe9382179686"],["/2021/12/14/js爬虫/index.html","d62e808ede261629e30245a85684b2bb"],["/2021/12/25/为网站申请ssl证书/index.html","f74f34ef6301ff8c8d7ab05b95acbbe0"],["/2021/12/29/使用七牛云为网站提供服务/index.html","d84dd410d99fd3605b38850bd7abdec2"],["/2021/12/30/jQurey继续学习/index.html","9662c42216adff7f72127f766df3a243"],["/2021/12/30/jquery学习/index.html","5ea59aa1811355377688e232185a386c"],["/2021/12/31/vue学习/index.html","3af1287674e802b365f93c6e37af424f"],["/2022/01/02/疫情自动打卡/index.html","252c44e219f74e47c1ca343ddc0ffbfb"],["/2022/01/03/javaweb初体验/index.html","62125a2b082758c81a79d63b45989df4"],["/2022/01/04/codewars练习/index.html","78cb8bf60b551148d81986e67b7f236c"],["/2022/01/05/Spring学习/index.html","3bc52a1e48c9d556aacde27290f83ba5"],["/2022/01/05/vue实战/index.html","8ee4e18525676908888d6aee862ad9cb"],["/2022/01/08/gdb-gcc学习/index.html","9e6721328e11f9c067581bc5e76e5691"],["/2022/01/11/python-opencv学习/index.html","cbfd557d75e4b6362621c25546758cc1"],["/2022/01/12/汇编实战/index.html","beb7d99f5abe5c192d55278c393f7b89"],["/2022/01/17/pandas学习/index.html","2b5e33b70f9cc35afebf64a693803e2a"],["/2022/01/19/可视化图的工具/index.html","7bbbbc21785888dd4fe6a094152944d8"],["/2022/01/19/机器学习入门/index.html","c8cc5e4ced003d1ebf966fa1615508fd"],["/2022/01/20/cousera-ML学习/index.html","e04e2d9ccbd577230756274d70e5c24a"],["/2022/01/30/typora解绑后出现问题/index.html","416c247d40f039227c3b54af4c336d8e"],["/2022/02/03/NLP学习/index.html","809f8287de0ddbd98a2aceb2f1c401ef"],["/2022/02/04/Web漏洞学习/index.html","3d21d0a3f53027a3805fc1369e6752fb"],["/2022/02/04/pyqt学习/index.html","db1a7baacd7051a92efee3ca4d88f844"],["/2022/02/04/python爬虫/index.html","0f7949a8157aa43bae2e882748b5808c"],["/2022/02/18/Electron学习/index.html","b7bd7dd6b95d3ae219dacca2a38653aa"],["/2022/02/22/疫情填报字段解析/index.html","34b48fbb89e15127ed88f6aabbff8ca4"],["/2022/02/24/Bomb-lab实验/index.html","39c069c86ce52a082aff69ae99c4b81e"],["/2022/03/05/nginx学习/index.html","9b7b3492d54a5175a774831dfff9e662"],["/2022/03/09/汇编原理课程学习/index.html","fa1d878ce6eb1a6d5643a3055bb0d3c6"],["/2022/03/11/Keras学习/index.html","56f715448d241c7ffc5f470d4e79997e"],["/2022/04/01/graphviz学习/index.html","2596d3735de9af37391f942208574aa7"],["/2022/04/07/django学习/index.html","d790024446bde4789a4ff82074ec1c8b"],["/2022/04/11/密码破解学习/index.html","35c66c1f083f15052ac3ef6dead62e24"],["/2022/04/12/flex-bison学习/index.html","9bc63889ffd5aaede59c534c633ab4fb"],["/2022/04/15/pytorch学习/index.html","bcf93310e5bc92307b87f39d3949a04b"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","9e958b7c62334f344f00413683c92f24"],["/2022/04/23/写一个音乐播放器/index.html","4becec2bbf375b53daf7b95dd92a78b8"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","6b68377e7514951c4642245c0821882a"],["/2022/04/30/GAN学习/index.html","8a16417d0d89a2b5644e6445f9edd598"],["/2022/05/02/html精学/index.html","314a7915d973b12afed55c78b8fc6a35"],["/2022/05/06/write-a-compiler-by-yourself/index.html","1bbbc73af2ebd30252d26c6e6196162f"],["/2022/05/30/acwj-01/index.html","0267f765b83fa0e41247c983f55c2936"],["/2022/06/14/animeGAN/index.html","8d14cfe552d2104e8e95d4ef2cace351"],["/2022/07/09/c-与算法学习/index.html","11927c48254330cca2a6e6029ff9e15f"],["/2022/09/19/flask学习/index.html","334d081f1ce4285542219ba94c46954a"],["/2022/09/22/cs224w学习/index.html","a359acc8e19cb7929498ca2e571ebbe9"],["/2022/09/28/记录一次wp重装/index.html","6e82f63b98b6fcdecf9f53c07a94237d"],["/2022/10/01/Obsidian学习/index.html","d9000597176a8794952ed7496b4ced7b"],["/2022/10/08/vue-element-template实战/index.html","5eb412aea85a64cc8f1c2b6727295eee"],["/2022/10/25/vue网上商城项目/index.html","7151fcfd45d9f0925cba3a717f9f0415"],["/2022/11/11/leetcode刷题记录/index.html","17f6de6e72cf48e024ef609be33728da"],["/2022/11/11/使用overleaf优雅地写文章/index.html","b39bbfd05187422715bd15661747a167"],["/2022/11/22/磁力链接与RSS订阅/index.html","eb21ccc73e7aa8ac029078628795ee10"],["/2022/12/11/uniapp申请获取地理位置/index.html","87565340de0585d95ec5952029db0096"],["/2022/12/26/pr剪辑学习/index.html","a098711b573a01d9c90de52810c6a57e"],["/2022/12/27/css中的flex和grid布局/index.html","374a17a561e96009c0a05eaa6c65162a"],["/2022/12/28/Flutter学习/index.html","0eb7f74d6be31b2d81178495c6f09eef"],["/2023/01/01/美化github首页/index.html","3a4c6f63cd5d228c572b9bbaa2081ea9"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","ed5396a10d4ebccd5c2bb16f1054a0b8"],["/2023/01/04/构建微信快捷发布文章工具/index.html","46760dce7779ba775496326bdadc4d44"],["/2023/01/14/dart学习/index.html","76f2fc033f0ad1a41d53fe50b890dfdf"],["/2023/01/23/闲置服务器BT下载影视/index.html","184b26d5d618ca3a8a64e87d330504f3"],["/2023/02/07/TotalCommander使用和学习/index.html","884e767f15fa0181ca6fb1af71cecc7e"],["/2023/02/13/docker学习/index.html","8bc3ec448d735cede40b877f9fe86be2"],["/2023/02/17/DLHLP学习/index.html","888ae3986a537049cfe47b1578bff2d5"],["/2023/02/18/学习purecss构建自己的css框架/index.html","ed298216af59bdf0e49f239ceded32f3"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","0cd3305e5cd480fdfb358e5f33887a17"],["/2023/03/05/STL学习/index.html","eeda78e96676557a9875e8b0657d7e24"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","271286f53eefe336dd59ee8ecf8214b2"],["/2023/03/23/实战写浏览器插件/index.html","9b01c3042ffdc2163eccfe662a47e7f9"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","70a9b93b3fb50cc9d34bfd96b23ab863"],["/2023/04/02/EndNote基本使用/index.html","772001cdeb733017faf2be10a4917c04"],["/2023/04/04/mne处理脑电数据基本使用/index.html","4525afe85b6bad384cc38831b1b4c454"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","813559d293a2ffd7d852bce15ad157f7"],["/2023/05/02/python中的logging模块/index.html","ffe94a4ad4dd582ac2b0320d1b012a60"],["/2023/05/07/python的特别方法与装饰器/index.html","46d6df965856ff22b1140609f62559c5"],["/2023/05/20/Wox插件编写/index.html","d4f4ab9c759c85b035950584047edff1"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","3f3a3ec00a892f299b18d7469d66225c"],["/2023/06/03/深入Clash配置文件/index.html","cb8b619d13df1bf082f026953cb98b0f"],["/2023/06/10/node的包管理工具介绍/index.html","22a4bca2f9a4c35ab4ae55af10f237af"],["/2023/06/12/AI写作工作流/index.html","332fc2e0000447a078c35ba16639e3eb"],["/2023/07/07/Astro-Vercel部署博客/index.html","525de3547663089aec9aca563e6ce244"],["/2023/07/09/青龙面板部署项目/index.html","a8b20e1f5b2062d83afb0eb5c9dddd26"],["/2023/07/29/CSS-Modules介绍/index.html","3c696295150e624bd3c1538faac8d7c2"],["/2023/07/30/浏览器JS/index.html","baf24470ddaf5454fbb450c2ab49d11e"],["/2023/08/01/增加live2d看板娘/index.html","67ad49d29d92be427b895c77b305bda1"],["/2023/08/02/深度知识基础学习/index.html","09f24a9bb54eedc6b8dbb1bc8dfef246"],["/2023/08/04/tailwind速成/index.html","fe0a0e4cd2d83cf924102846dc37c065"],["/about/index.html","0cecfffeeda108f6a3f8af0303126de6"],["/archives/2021/04/index.html","49f613a39f81c9869ed5dcb8faaa5b7b"],["/archives/2021/05/index.html","7e4a5a28e436d03f4af59129b097ab5b"],["/archives/2021/06/index.html","76ef3f38a3d85f21434d354e17d8a6e6"],["/archives/2021/07/index.html","f09dd9979cd6028f33a1f43ae31054fc"],["/archives/2021/08/index.html","4c41c14ad39c726e08f21f6b2572a7bb"],["/archives/2021/09/index.html","517132ac71b2b7f0f38a2439518443ea"],["/archives/2021/10/index.html","9d639bb0df6a0eb59cba568e0939a81b"],["/archives/2021/11/index.html","ee5a43296ba2989d80179fdfa7be1e15"],["/archives/2021/12/index.html","ad821948c8361e3a9a193650e05e5d71"],["/archives/2021/index.html","48a29960773f44025a1b2ac2229811a5"],["/archives/2022/01/index.html","6525b0cd7b6251ec3e6984005eb09f08"],["/archives/2022/02/index.html","1d6937e4fc4dc9feedae435a72f2f3ab"],["/archives/2022/03/index.html","b564f2dd76c3383c82344e9269afd6b4"],["/archives/2022/04/index.html","61d5ee987bf3657aa0a9997666f91fec"],["/archives/2022/05/index.html","5385b0b7dab81de3d6c033510a97ced2"],["/archives/2022/06/index.html","e007fb58bb9a4d0a0d640cdd7684df34"],["/archives/2022/07/index.html","e780aa5fb5afce1d3aa2f3c41a6f83d6"],["/archives/2022/09/index.html","092a01773a0cc877dc760057f5c2abdb"],["/archives/2022/10/index.html","2b595355b082ba2dad6ffed763111eba"],["/archives/2022/11/index.html","a5666831585747e9032df390345924d2"],["/archives/2022/12/index.html","69eac1ef0f8d42b58424bc0d862b054a"],["/archives/2022/index.html","47a764d6905850d17f48cc6873a78c04"],["/archives/2023/01/index.html","96b40c51566ba0887d60f87dc5ac432b"],["/archives/2023/02/index.html","2f07e7599e3e66b6be82b77d9831c430"],["/archives/2023/03/index.html","c0955c71e394de055c6886ccbf2c2167"],["/archives/2023/04/index.html","504847b0713d81838ea62ed0e00fd99e"],["/archives/2023/05/index.html","781183e4aa47ca7c272c59e3bb724b91"],["/archives/2023/06/index.html","3705a306e662ced59b3e83293fa7a369"],["/archives/2023/07/index.html","8b3adf8a62a1af409d495eb75cbd0727"],["/archives/2023/08/index.html","220660d1a6566dc4935246bc9bafa629"],["/archives/2023/index.html","4946a21733a34eb37652abe4cac6a354"],["/archives/index.html","5a5dc620bfd6b0cb138002ad8402f8fe"],["/archives/page/2/index.html","11a7bef46498f53d377ebb2bafa88e93"],["/archives/page/3/index.html","e64d8b16eb0cd280385073adb975c8d4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","5d087e996b4b74ea569ffc1e6adcf410"],["/categories/Linux-study/index.html","6ccfaa9ed97fc10557673a61229b9bdc"],["/categories/ML/index.html","45a8d781cc71a5f291fddef836808342"],["/categories/Nginx/index.html","3e86e8f341137f36c2718b3daf483de9"],["/categories/Spring/index.html","b89f04141d94eef77ea4f5f22f47fd42"],["/categories/course/index.html","7c5d4f59195fac3624fd184b893863b9"],["/categories/django/index.html","03bab3548eadfeee146ca6b664aa2715"],["/categories/fun/index.html","868b3157a101ff5d6d04212fbaaf01a2"],["/categories/gcc/gdb/index.html","568ca6c5616e9ad1ca4bc1a291b4ea9a"],["/categories/gcc/index.html","47c414750e27b09a51cff16e9e1ee87b"],["/categories/index.html","094ea8f57cefead0bfc013cc763a188e"],["/categories/java/index.html","b93bb7d0fd505517829d7024f2846efb"],["/categories/latex/index.html","d7258bb2fdb1d3684215d3b2c9af37da"],["/categories/python/index.html","6cd35b77833f0d2d58de9ba458fdde49"],["/categories/study/index.html","a45d427b219533c83f93732dad7cfa78"],["/categories/vue/index.html","8cc3dd525463ac7f573021f8d9aeefa2"],["/categories/误区/index.html","4bb768dd9fc69285337ee5e1273ba0e6"],["/commonweal/index.html","fbcfa35078d6dbd5785677689f2d9bb4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3c239e85ea5151d949244d1beffdc607"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","4b43bc845fb2804185e029763c4eb1d9"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","b1e4a3b5889ea9366960a741487fad63"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","d2f799312d5a650844205271124ce560"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","022a71b7ed92da9ad641afc1041890fa"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","b33d0ff6c0bb470cc0bddc5ead33e1e0"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","14af68216561cfe80e1eb6cd99b879f1"],["/lib/pjax/example/index.html","52362602d2bf34024971d5a9d3dedc8e"],["/lib/pjax/example/page2.html","f13049a9450862d1449e664694dbe424"],["/lib/pjax/example/page3.html","44617ee1dbd57712f05e963d8416a3d2"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","16bde8a3cb5d6ade5b4db20008d1123b"],["/live2d-widget/demo/demo.html","13a7de2529a1813c2403d2b3a0d99a7d"],["/live2d-widget/demo/login.html","8fc2ea4fa630b70ca828cdab0a9a327f"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","340bf5abde6707836f56896cf3484526"],["/page/11/index.html","e070b4067f00dfc226bf0989933cd2eb"],["/page/12/index.html","af6a1c2f5e3fa5708505e723c3131b16"],["/page/13/index.html","aed03ed80634051af74f78da7bec5fc8"],["/page/14/index.html","4b3c2eb4991bc6101ccb3afb6dad3d23"],["/page/15/index.html","39fb24ba7a63c6569d3f610f2469b551"],["/page/16/index.html","03d035fbb52885129d0055f19ef8da42"],["/page/17/index.html","6b75abde7fd4ccf5cb3e043914a03034"],["/page/18/index.html","d35a646024e593a3dbe50cca1f6624f1"],["/page/19/index.html","48fb4b736cc47b89e9645c9bd030b1d4"],["/page/2/index.html","6c10e3d114dbb0013fab152b98461fb8"],["/page/20/index.html","bf8d10fc57b6eead665b3549e2b5d15f"],["/page/21/index.html","afc7ea4ad1e530033b2c64e8edaa2e34"],["/page/22/index.html","ba76a146096cc36ca6274d3503aa57d7"],["/page/23/index.html","90effafc24132d86873f9ad2ad08d3b8"],["/page/24/index.html","ffe70317f010057c27509d3c387fe2dc"],["/page/25/index.html","b79f3c43a3af9b5a1d8bd530ea1fba52"],["/page/3/index.html","17336844c358ec9b3eb4abecd826b06a"],["/page/4/index.html","14f9de3a8ece139b8a055fa7ab28d694"],["/page/5/index.html","9c21f067bd3df764177240e246984361"],["/page/6/index.html","09d8d83584661f79533cc17af1a539a3"],["/page/7/index.html","f92b1e243b89853c2c35036d78531e03"],["/page/8/index.html","b730a10263595d8b7e0fe4665a270a3f"],["/page/9/index.html","acc252408fe746de2a5532c9837d42f0"],["/resume/index.html","423c22291bec76015bec8618b453d675"],["/schedule/index.html","437762145b97f3b38bb000fcfbc04ffd"],["/sitemap/index.html","e9f04ae638ef40aa1b28fa45390ecaf0"],["/sw-register.js","b0dbd84c80cd96187ea60b100a3a5b0b"],["/tags/AI/index.html","22b51fd00c8ad3c9179e912c486bda90"],["/tags/Astro/index.html","b7211f98232ef092dcc695a9e5db5616"],["/tags/BT/index.html","3ff791962da1fcf543da34c4756b5dd2"],["/tags/BaiduNetdisk/index.html","4f380f65c1c3e16bc256867da2bcbf4f"],["/tags/Bootstrap5/index.html","68bca558297a0c188cd086cf21dd32bc"],["/tags/CSS3/index.html","e6e634fbed01c27a4f17864e49a73229"],["/tags/Centos/index.html","e5c0a1eb066961cb6be2d5ece792d250"],["/tags/EEG/index.html","ab5f7ee9ea19c53171750b24a8b6f02a"],["/tags/Electron/index.html","fc1de6a943d7e0f59937d325beb9afb8"],["/tags/ElementUI/index.html","c6299616047ac599292c0bac8378c738"],["/tags/Flutter/index.html","23427a7e24494c5afa990783738bbb68"],["/tags/GAN/index.html","077065848e608fbdb0f3411d4a2822b9"],["/tags/GUI/index.html","b5ee8f10e1a87e6d6ce8a71592b8e749"],["/tags/Git/index.html","c1e4d43331a8827dc4d4a759b46f831e"],["/tags/JavaScript/index.html","4dd7fd6822c1acdbfd9c75e2e1de7108"],["/tags/Keras/index.html","7956dec3582748168ec84c0f3782a554"],["/tags/Linux/index.html","4fe3d673610461876d03b9723a7796df"],["/tags/ML/index.html","f3b31dc5aa6151428c26cca695275ade"],["/tags/MNE/index.html","f463544148ff2dfc97a8aad01b81b36f"],["/tags/NLP学习/index.html","3d222c1bcf7f5f9d3463ffa2ead6a806"],["/tags/Nginx/index.html","241a4d106c7855fe3cfe2132aa34e062"],["/tags/OSS存储/index.html","b51ae8ed6284b607e8d02a5e0d139889"],["/tags/Obsidian/index.html","5f29a1efe86e41fd74a619aeb7c16595"],["/tags/Qt/index.html","d870241476b5b113764a6549adc8320c"],["/tags/RSS/index.html","7518557ad6b2ecbc7d613e69aef5b131"],["/tags/SSL/index.html","3af6bf0308a7f2076bf394916be6371a"],["/tags/Scrapy/index.html","896aa79eed5f2fc5e8ad464a4e85869b"],["/tags/Speech/index.html","0ff2f89a6ba1114455bb0a2073cac96a"],["/tags/Tailwind/index.html","f9c64e89f1c915768db8dfc71c8b94b6"],["/tags/TotalCommander/index.html","97aa42b0162f2eed317ec741111c4900"],["/tags/VPN/index.html","3cb44c214507227870caf19e54772993"],["/tags/Vercel/index.html","2aac07dc14ad56857b5d81869f8e11b1"],["/tags/Web/index.html","7ba7e7e40252cc53aa7247de3bed9697"],["/tags/algorithm/index.html","2e79914c7397fa4df937609ff6d912f4"],["/tags/bison/index.html","9b3db1bcd905bd3ab4b49a97ceb5ef92"],["/tags/bom/index.html","e02fb2f3aee4228348f7318503dfcf06"],["/tags/bomb-lab/index.html","e837b8fb7c07471219957d220a650145"],["/tags/c/index.html","0ff7a5e1081b997fb041326d3032c0da"],["/tags/cheerio/index.html","288dbea6c03ee53579b051bbe4d93db9"],["/tags/codewars/index.html","20aaf58ee000567f7490cc35f4f0eded"],["/tags/compile/index.html","7bbc126c565ea435ac75d4d1cb176c5d"],["/tags/compiler/index.html","a1422d90809eae506800a002be34dfe1"],["/tags/cors/index.html","2c7ecdbe88502c08c508146d9cdbff7f"],["/tags/course/index.html","8c72ac51b95c28c36d2f4f0ef8f592a8"],["/tags/cpp/index.html","bb0de87819783b7b37c09cf83e637f81"],["/tags/crypto/index.html","93cdab0d455e0f7a2a540309dacd75a1"],["/tags/csapp/index.html","6dc73cff2d32bee4c9b2a9d376cf7e6c"],["/tags/csp/index.html","18c0558591ea74e5967db020c4f971f9"],["/tags/css/index.html","39f9311d25bea59c000050417b332504"],["/tags/dart/index.html","97bd54a311a53cfbb78d729ca992ced5"],["/tags/data-structure/index.html","d6c9a688800f30a35329d5471c4633bc"],["/tags/database/index.html","9dd1b5f962109eafd7ed9e52976039cf"],["/tags/deep-learning/index.html","8f10642578723285be16b3d491c61798"],["/tags/deepLearning/index.html","62ad40b7858ca7ff743b23006350b2f9"],["/tags/django/index.html","c77916fea73e06dd425ed2bcfdd991c7"],["/tags/docker/index.html","312ad7120772ca2afe3951915ecbe126"],["/tags/dom/index.html","2a757f89b829b4c0bd86c8116a615c0e"],["/tags/dwm/index.html","7e8e3bdbe7ca45fa6b5d670ff2e570d9"],["/tags/exercise/index.html","9e00c3144fd68f944731b596f150ca6a"],["/tags/filebrowser/index.html","9b4c83b2ce84bcc533156b786f3a755d"],["/tags/flask/index.html","d6eb3c946a7e9b51fe8a48e880937945"],["/tags/flex/index.html","a9d11b9184a0176f88745803fda68009"],["/tags/front/index.html","9dbf2bd818b4420117084e27aced74ec"],["/tags/gcc/index.html","2f99f8c67d11a54b40c35e7800d9e1bb"],["/tags/gdb/index.html","40b7338ee26327ca09b26f2d488ac2bd"],["/tags/github-profile/index.html","44d7d1f7723fde43123d73e5cffc1082"],["/tags/github/index.html","5d29c2b6d40fd788599bd3ee229eee5e"],["/tags/graphviz/index.html","164b6b94f864846b5130f009e9783a6c"],["/tags/grid/index.html","6f42bb7b3c1d2b495c6cbec4208d4c5d"],["/tags/html/index.html","07da451afc45718d7c6e60ffb1e6a319"],["/tags/i3wm/index.html","3e0a7dc56ac3336b0b6f7f1c84395707"],["/tags/index.html","c18c92cc0a0c5001685e2138ecd9cfb4"],["/tags/issue/index.html","9b5dd3cbdf67ee3cd68c87a25abc30c7"],["/tags/jQuery/index.html","e55a73d05619749d30306bf3c6a0fb4c"],["/tags/java/index.html","1e55d7223269d0130b93e3965524d0c6"],["/tags/js/index.html","7ba8cfe8b56d9d45d547477017d874d5"],["/tags/latex/index.html","7e14cd3cbefa8efab681d1af4f3ab94e"],["/tags/leetcode/index.html","5b2cfa2c4c67bcbbfa1b9bad4371302f"],["/tags/lex/index.html","b44d7b87d37ae7805dccbe336d04edfb"],["/tags/logging/index.html","78805860e0ff10dbef5d1ca5bf064299"],["/tags/material/index.html","1c06b751e32709c5957f19e27a7f268e"],["/tags/music-player/index.html","ed42ae9a715f00951f7aa65880523a28"],["/tags/node/index.html","e130dcead6c66535e87dc8108d793f0b"],["/tags/nodejs/index.html","078a0681c307667672cae912896bfb3c"],["/tags/noj/index.html","5ad47b340db3686cb6c5cf89f97586d1"],["/tags/npm/index.html","5ed95befd72f3d1b9910051ee83c48a9"],["/tags/opencv/index.html","71741acc44d946b1ccca7bd80a5be51d"],["/tags/overleaf/index.html","a865e7c21d6731d518efd73571bf8882"],["/tags/pandas/index.html","7b0e39b62be0ca81f93270e786db9646"],["/tags/paper/index.html","ceaaa012f2d19530b5f9f2ee97292fff"],["/tags/premiere-pro/index.html","1541ebac389457bce8e122760976366b"],["/tags/proxy/index.html","3320585ffd43fc261d2a6d9b6b6a05ed"],["/tags/pure-css/index.html","a6aaa6ecdb3db2fd726fc1f8059459ff"],["/tags/pygame/index.html","d545dd5fd2b0f690005fa645ee824046"],["/tags/python/index.html","a0e61cdfb065ac8f2dedebe2376d2003"],["/tags/python/page/2/index.html","02dd125b88be1317d172e11374852d14"],["/tags/pytorch/index.html","beb874546a7d33fc9b2182a2e568c8a3"],["/tags/reading/index.html","7a499ce8cfc698f846da4ea3513b9145"],["/tags/request/index.html","3657eeac843f6aff8ea84ed38ad367d4"],["/tags/requests/index.html","7d40ad56649d3f6dadc0d8d529ca3840"],["/tags/security/index.html","fa7fb43bc6f87afe0f76cc038890a8c9"],["/tags/shell/index.html","62d575226dcbaa230e0cb21667d1e0f9"],["/tags/sign-in/index.html","4dfaf6d24cc6babadcdf97e233531032"],["/tags/socket/index.html","15312fbedae6bf0b4dcc91b9a90acb5c"],["/tags/spider/index.html","ef9c986697e9bde056414338bcada406"],["/tags/splash/index.html","43b832cabaab2866e3ad5e75d6e4086c"],["/tags/stl/index.html","51a397c60875b9e6892d65a645b5565c"],["/tags/sumatra/index.html","7c3b6faab717b08f249f9715d9a34347"],["/tags/superagent/index.html","b63c3ae2db5e890d72d5c99c5a4dde1c"],["/tags/tensorlow/index.html","4d0933888e90f418989096b621102d60"],["/tags/tex/index.html","3f075c2cd893a7aebe867012f08d2a55"],["/tags/thesis/index.html","e9088013864d74d8f1bcb7c0335771fc"],["/tags/threading/index.html","deef447cd5d6f3d840ac59d9f8664e41"],["/tags/tkinter/index.html","78d7b78af40d994e8ba3fcf2a1e12cc6"],["/tags/torrent/index.html","3a8a052b383e8f6b74fd4bd091b4df0b"],["/tags/tutorial/index.html","4a185aeb186c4d188f859770d0376b80"],["/tags/typora/index.html","dae682e499eb0400a0a049b937ca9ce2"],["/tags/uniapp/index.html","c4c066e4dcc6c8db5c6f34c3a6e2810d"],["/tags/vite/index.html","3cb8e48951a50d9ce91642987e125403"],["/tags/vscode/index.html","aabe5d5da49a21254f9888385868a0bb"],["/tags/vue-element-template/index.html","e6a39372ed7ab4951a24e731c9c77f8d"],["/tags/vue/index.html","6a1356e284b5c57b59da2af4fb23722c"],["/tags/vue2/index.html","90e6c61983a00a2d81e673d448d98ad6"],["/tags/vue3-x/index.html","564d8e9c5720c9ac9675626b67b31874"],["/tags/wechat/index.html","fdc509d2b01baad1966560664e755667"],["/tags/wm/index.html","6e4dddab41b0d65ce058a13e5b52741c"],["/tags/wordpress/index.html","e7ab606add03b49d0453f48573ae373e"],["/tags/workflow/index.html","1ae85d08221439dbc15b97e6bdde78e7"],["/tags/xpath/index.html","d75f7e56567dec45eddc6088726dafe4"],["/tags/yacc/index.html","5e3072f3052f2d381e03ce7c4f838b10"],["/tags/yarn/index.html","91dc9131601f2d52a3113379af6e9261"],["/tags/zsh/index.html","29315bca2dd6e10edbcb0391ec52f40f"],["/tags/七牛云/index.html","d62a69da35ddb911e9f9f2247c95bb19"],["/tags/函数/index.html","61c26f3565567632a2927716a9d3eaa4"],["/tags/剪辑/index.html","eb2b845e22f70d45fc48ea64bbd91825"],["/tags/存储/index.html","acd816f8a9abedbb86d105563ecac6ac"],["/tags/实战/index.html","b05d90afa656a1fa1400f7bf515014e4"],["/tags/工具使用/index.html","ebf188765f74e3eedf58502208b9e633"],["/tags/建站/index.html","fe6946bfc9655e6582a3298497d4b251"],["/tags/微信小程序/index.html","f7c0c78e6f7edbe14e6cc9b200e5b698"],["/tags/指针/index.html","e36ac916d0a6e4468c6ded514436ca27"],["/tags/插件/index.html","ec251133665333536b96eb13525ecb8e"],["/tags/效率提升/index.html","2e91fb59ea0ca774f26ff7a5b99321b0"],["/tags/日志/index.html","f8c898f90d5861da6e78fb89f822ce89"],["/tags/汇编/index.html","a451decea3c47a6338086b0125cf27d4"],["/tags/油猴脚本/index.html","f9c60629b429aca2220ef9db0821006c"],["/tags/浏览器/index.html","648d9d3e0600881b6eee3c77241663eb"],["/tags/爬虫/index.html","aff661dca2fc5cdd384676288960ed7a"],["/tags/算法/index.html","ef039189f14c040260ffbeeea2f3b9a5"],["/tags/编译原理/index.html","090a401d7bd301277dd575918566f8cf"],["/tags/获取地理位置/index.html","6a08e41188b351a81590e4f275db3267"]];
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
