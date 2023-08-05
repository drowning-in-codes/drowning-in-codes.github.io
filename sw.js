/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","2c31f6b017e5603fa2f4b50761f7e3d8"],["/2021/04/20/稀疏矩阵/index.html","b2d1dc051ec78381a7089cc36fbe44b5"],["/2021/04/23/广义表简介/index.html","4302fcf40d8fc23848fcef8ddfe7a5bc"],["/2021/04/29/关于指针和函数/index.html","b010dfd195d186b871cfa051509e8fa0"],["/2021/05/10/哈夫曼编-译码/index.html","e173f1cf6b7c524126c771e669a9dc7d"],["/2021/05/17/数据结构noj_2/index.html","c21de344d61ace6a650d75dce380f1ac"],["/2021/05/30/数据结构试验/index.html","24a56fd55fda984995da76aeb8675048"],["/2021/06/12/数据结构noj-3/index.html","d2ca6d98cd7c01e3182c1f442e31f91c"],["/2021/07/08/C++与Qt开发入门/index.html","ba9051e99201b665d1bcc6d7d5058270"],["/2021/07/08/课程资源分享/index.html","6b62dbc4fc96d4a5fbee12d8b1c5d6a5"],["/2021/07/20/Scrapy-下载图片-文件/index.html","7ff4a236f04acab9f96b3c885a72bf08"],["/2021/07/21/Scrapy-动态网页爬取/index.html","1433cd87e3453b43baf6d8d2dc213590"],["/2021/07/21/疫情打卡/index.html","60d639d56f7efcfa60b71485ccd3f54e"],["/2021/07/29/Scrapy代理设置/index.html","c86ed04ded177090300e31d7e1ffe52d"],["/2021/07/29/数据库认识/index.html","4b30f5a30d841f0cdde91fb3fa94ec28"],["/2021/07/31/Python多线程学习/index.html","97fc730fc6c7337b3635ed0d9535d7e3"],["/2021/07/31/tkinter-requests练习/index.html","9e1b8fa4fabc027c6a65393ec6e72522"],["/2021/08/10/Git学习/index.html","192e29b674e37398a89f2ea367f9f060"],["/2021/08/15/pygame实践-1/index.html","fd9e234796ac1beb6b492c62a46d6f38"],["/2021/09/06/微信小程序开发/index.html","f0c6ecf30eb5a1ac764358841e4bda52"],["/2021/09/21/命令集-1/index.html","06a6e18659a0f7d7692bcd17304d1ca9"],["/2021/09/21/命令集-2/index.html","85f9fd8cdbf1e1099c8d69476739b7f7"],["/2021/09/21/命令集-3/index.html","915eeccdc8a07bd514fc73c54b950f97"],["/2021/09/21/命令集-4/index.html","8bad93230ae63c2ce71bdf6e0c70a553"],["/2021/10/03/socket学习/index.html","364d3831b209bdcbd69726f5363e4da5"],["/2021/10/10/dwm入门/index.html","812c3a7249570366cd5a475e8349abe8"],["/2021/10/10/安装ohmyzsh并配置/index.html","4c0cb5da16d003a75fe5749c1068dc16"],["/2021/10/20/css学习/index.html","2d84511d7ef891fb1e006c24c828a7d6"],["/2021/10/20/wm入坑/index.html","064c8099e80a6bfe122c05e4ec98a80a"],["/2021/11/03/微信小程序学习/index.html","271da79302dbb30b26cb3cdab0d6bc4e"],["/2021/11/04/css揭秘/index.html","8ef45bee166f5fc05b185ef58d4d08a9"],["/2021/11/05/css-练习/index.html","2f8525c69f33ef3e6a2bdc666c66acb7"],["/2021/11/21/命令集-5/index.html","9db9ec1156302fe23ee92c910c219a5c"],["/2021/11/21/命令集-6/index.html","3a317e1d15b11e42ccf565fc4ab0c7de"],["/2021/11/21/命令集-7/index.html","6bc6e1934f2cc76ff13000542192d2f1"],["/2021/12/01/搭建wordpress/index.html","104c081be88774e67a0af34acc19f55d"],["/2021/12/08/python操作百度网盘/index.html","1221f8b2156afec3eb8b6193043e28f3"],["/2021/12/14/js爬虫/index.html","250393c4d10b38853cb577fe401d39e8"],["/2021/12/25/为网站申请ssl证书/index.html","a2af428357ea7ebfe5fe72497b15f42a"],["/2021/12/29/使用七牛云为网站提供服务/index.html","a92a24cb332d23ce9f143808b1d35de2"],["/2021/12/30/jQurey继续学习/index.html","c3403d44d0e26c77de4bd4cf2a979443"],["/2021/12/30/jquery学习/index.html","1d59559bc0521c473be0a46f47104cb2"],["/2021/12/31/vue学习/index.html","9a053a8c1cecb71d688a7bf5276151fd"],["/2022/01/02/疫情自动打卡/index.html","133d8665c1c35168746661bfd220c248"],["/2022/01/03/javaweb初体验/index.html","28ead9092898d9f8bb8a2d58c6720e81"],["/2022/01/04/codewars练习/index.html","1b46ee81b0ddc363e3c2eb812556dee5"],["/2022/01/05/Spring学习/index.html","94917833f4c8d301e4473f0e08e10501"],["/2022/01/05/vue实战/index.html","a57ebeefda87a01d953c7d4671cd3c74"],["/2022/01/08/gdb-gcc学习/index.html","c100099b6a046c429470cd5fb8119838"],["/2022/01/11/python-opencv学习/index.html","20a6f911c093bedae4c3cba12ac7d64c"],["/2022/01/12/汇编实战/index.html","00a66b26e16556ad0866888da8f7f9f5"],["/2022/01/17/pandas学习/index.html","6dbaf7c09c777c8d15eea3b01efffaf1"],["/2022/01/19/可视化图的工具/index.html","38c239a1190efc2bb0729127524d4b46"],["/2022/01/19/机器学习入门/index.html","be955954633f9f2ced095627e6f57b54"],["/2022/01/20/cousera-ML学习/index.html","4845ac0323cb49ad631343c0692250d6"],["/2022/01/30/typora解绑后出现问题/index.html","b7507a62e2bb4f9719f6edc089144e7a"],["/2022/02/03/NLP学习/index.html","631a8e70f8a168f5011517f12b2df4ba"],["/2022/02/04/Web漏洞学习/index.html","d8acf53d79d42f5eae7f1538aa58e9ad"],["/2022/02/04/pyqt学习/index.html","ca9028c22107f1581b0cbeddb0be732e"],["/2022/02/04/python爬虫/index.html","4f0404c88562c1f63499fd361e6686ac"],["/2022/02/18/Electron学习/index.html","d061020d6bd95d30fc3296134f57eedb"],["/2022/02/22/疫情填报字段解析/index.html","6285fcc33c29da583795a49b23ffb030"],["/2022/02/24/Bomb-lab实验/index.html","e4110f867e528680a36eb09675b0bd8f"],["/2022/03/05/nginx学习/index.html","9718bf47e41dee006499269d9fd16042"],["/2022/03/09/汇编原理课程学习/index.html","5cd0fec5fb49a2bb858e876094758994"],["/2022/03/11/Keras学习/index.html","08160035b5fc7175ea98addb74998e52"],["/2022/04/01/graphviz学习/index.html","ec0bb355c449ce3dc19f875e7664d5dc"],["/2022/04/07/django学习/index.html","9bc4dcec2aa6ae9d279cf98356880ecd"],["/2022/04/11/密码破解学习/index.html","c1a54f738ad9d8a7977b23e3476fe0ae"],["/2022/04/12/flex-bison学习/index.html","1acdee9c6f8da33e637774b01026d88a"],["/2022/04/15/pytorch学习/index.html","5a6330e3afea152053eff5aaf9fd7e17"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","a4f8ad00da8511c9f7375a06a9a22ba9"],["/2022/04/23/写一个音乐播放器/index.html","7184ff346a94907e200d82a369df385f"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","4657adc05606c8485549d641e53a5d7a"],["/2022/04/30/GAN学习/index.html","bbe309c0bb76c67e92f6dfe2f78f98a8"],["/2022/05/02/html精学/index.html","a7627973df838842e582d9140dc0fc66"],["/2022/05/06/write-a-compiler-by-yourself/index.html","c4c76498951f896635551b21cc389837"],["/2022/05/30/acwj-01/index.html","414d13bfa653e140d02405088dc92b2e"],["/2022/06/14/animeGAN/index.html","85573aaaeea2d3fc755108b677d12b4d"],["/2022/07/09/c-与算法学习/index.html","7acfff9e33149620707012187d080f6a"],["/2022/09/19/flask学习/index.html","c04dae57b4577ce0d9875e0f8749a883"],["/2022/09/22/cs224w学习/index.html","0996aa9fd272e5337be678c33b949893"],["/2022/09/28/记录一次wp重装/index.html","382625c2c278aee30350528d9c052923"],["/2022/10/01/Obsidian学习/index.html","41ec84fd14502a1a29dacc99413a0f46"],["/2022/10/08/vue-element-template实战/index.html","4f2d1466e5722992d64f0327b58bd227"],["/2022/10/25/vue网上商城项目/index.html","353164093ad8c415fb0de118220bf93a"],["/2022/11/11/leetcode刷题记录/index.html","7fc170fbacea0bb28ec4dd87aab4ae86"],["/2022/11/11/使用overleaf优雅地写文章/index.html","992bf1778308331b6b039b3e35cf57b3"],["/2022/11/22/磁力链接与RSS订阅/index.html","f347eae1c89ed80e14602ca974aaa3ea"],["/2022/12/11/uniapp申请获取地理位置/index.html","9c2c8de2cf0a28cb3ae8b8cb4156b60d"],["/2022/12/26/pr剪辑学习/index.html","e4a43e8c4a5f86dedab059c2a1384896"],["/2022/12/27/css中的flex和grid布局/index.html","9cf03685ea6a266d5f451a7db7ffbcec"],["/2022/12/28/Flutter学习/index.html","36635a4cf27f1730cf8b5cc56e496488"],["/2023/01/01/美化github首页/index.html","9d8134ab683da3f3feb060a20d94be1d"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","c598769932440083b04b1c791fb04f27"],["/2023/01/04/构建微信快捷发布文章工具/index.html","0aa2a9f0d1b4b22fcab27944d23c60ec"],["/2023/01/14/dart学习/index.html","aed345a8e02553eadd0789c9dd25082a"],["/2023/01/23/闲置服务器BT下载影视/index.html","40884cd5e1cf550ea7ab9215f0f01015"],["/2023/02/07/TotalCommander使用和学习/index.html","6bfc16730fbfa2a0580672d79536603a"],["/2023/02/13/docker学习/index.html","f0df616781ed65cc488810dc3edcfa80"],["/2023/02/17/DLHLP学习/index.html","41ef1c0f4b4ce23c61c118ef773ff58a"],["/2023/02/18/学习purecss构建自己的css框架/index.html","01882b8e30e5497e30d49b055140041f"],["/2023/03/04/浏览器CORS和CSP介绍/index.html","dd8a46c8bcaa61c961b0caec11886374"],["/2023/03/05/STL学习/index.html","6acf1183e913c9eff2093d840a2d4e66"],["/2023/03/22/vscode-latex本地搭建tex写论文/index.html","90ac8fefe0aa9db844cc03b7e69b454b"],["/2023/03/23/实战写浏览器插件/index.html","ffd65b95c46fcf2a8cafa3b47f7847c0"],["/2023/04/01/服务器结合OSS存储用于自动录播/index.html","7f4e37f9086b1c4f381d16e0c9186a8a"],["/2023/04/02/EndNote基本使用/index.html","48f825ae2ef40f95680222e442c930d2"],["/2023/04/04/mne处理脑电数据基本使用/index.html","030a1224e7814bd2ff556822be380b88"],["/2023/04/07/如何使用word组织一篇学术垃圾/index.html","d98900e4905bc64f2df8160b05e224d0"],["/2023/05/02/python中的logging模块/index.html","32652762927f2e2692262266e1dfee18"],["/2023/05/07/python的特别方法与装饰器/index.html","8db0dfb329e6efd56fbf5b22eaa48000"],["/2023/05/20/Wox插件编写/index.html","4e432e66f77921095b3b4e4b25bcc778"],["/2023/06/03/技术教程-如何自己搭建一个VPN/index.html","154be04b72d9b23cd14727f4389d56d2"],["/2023/06/03/深入Clash配置文件/index.html","e3ab809d69ade42397e1a1272fc0b490"],["/2023/06/10/node的包管理工具介绍/index.html","dbc34c2d69a7d3c7a4e7341e7219d7b2"],["/2023/06/12/AI写作工作流/index.html","326098f756f3bd590dc3600e706e16dd"],["/2023/07/07/Astro-Vercel部署博客/index.html","9ee25f307be4cdbc78739b5058c49fdb"],["/2023/07/09/青龙面板部署项目/index.html","f1e3ed0fd2b65c2166d6cc2b3f2e566d"],["/2023/07/29/CSS-Modules介绍/index.html","99b2148ef2d524d5f16b01875c3d011e"],["/2023/07/30/浏览器JS/index.html","2242a2f63847296bd127163d10754d3c"],["/2023/08/01/增加live2d看板娘/index.html","f8a7c255ede2eb9b82b2bcdb43285a02"],["/2023/08/02/深度知识基础学习/index.html","d6216060c5563d98fc7686fd39fabeea"],["/2023/08/04/tailwind速成/index.html","9d7c2a019a5a7f85fe13ecfed4409118"],["/about/index.html","7416eef4eedb7c296819d337765d0650"],["/archives/2021/04/index.html","04d46e9d38cd2d0ac6b6c02530e07ff7"],["/archives/2021/05/index.html","f31f6f147ce12bebfa27b5c52f7e881a"],["/archives/2021/06/index.html","5486ebe01729085155e19c107204d36d"],["/archives/2021/07/index.html","a1f027af6b0640a75f9d345955adc5cb"],["/archives/2021/08/index.html","bd95d82305a1ebe4e1435694c395417b"],["/archives/2021/09/index.html","b012bed071b9972a598a6fac3a0b1b92"],["/archives/2021/10/index.html","df29e3c573ffb3abcaa4d366f7e9c67b"],["/archives/2021/11/index.html","95a6e928a205a5f6886bc95076980822"],["/archives/2021/12/index.html","6de330f23d5bff9b6028003940d24436"],["/archives/2021/index.html","5121235108443180cd19d97f91ec3f52"],["/archives/2022/01/index.html","b074f3c6af705dd53880f71063b2131a"],["/archives/2022/02/index.html","642c4470a3d5772d9bd10d53873f8304"],["/archives/2022/03/index.html","e2b2f05528188a8da0c3058055b5abca"],["/archives/2022/04/index.html","b0ca09a18144c82ced2644de49f59d3d"],["/archives/2022/05/index.html","86227b9af2106edbf8a3e3066c627349"],["/archives/2022/06/index.html","6008ba1280476a93e9aeacf183a7a336"],["/archives/2022/07/index.html","8f4e6bdcb47300f3cd2925b33dd8fc33"],["/archives/2022/09/index.html","c2d2f023acc556b083357b117061487d"],["/archives/2022/10/index.html","491d07e2aac41363c2849620c4eb650e"],["/archives/2022/11/index.html","6b2e13033cefbac6fd0fd5e08e2e8415"],["/archives/2022/12/index.html","da8bd9e18d07d2898d0b2a068b6cbfc5"],["/archives/2022/index.html","33e4ce450b51611690108c98ffb06a66"],["/archives/2023/01/index.html","0874a25d8536118e32a2da3b082db4ab"],["/archives/2023/02/index.html","2e17fe19cce4b9f1ef88db6221e0e92b"],["/archives/2023/03/index.html","18b43346e397951dc40cf056a00dadef"],["/archives/2023/04/index.html","f91367fcfeb1134357f0ce7535057874"],["/archives/2023/05/index.html","c938bf52e16324dad169558626da1d94"],["/archives/2023/06/index.html","b4c76a52deab5de2be528d15e2362f9f"],["/archives/2023/07/index.html","603e3c70c71042045545516722bff034"],["/archives/2023/08/index.html","39fb3c8fc8dcf008dc31d4ccdba3723f"],["/archives/2023/index.html","b8994642210d56cd25096251f7943727"],["/archives/index.html","89ebbcf0922e00be6f685b5a63bed8c5"],["/archives/page/2/index.html","a5f31cc5c356e64268bfa522a35d312a"],["/archives/page/3/index.html","e04e90b1d9818c79b9b0a1beb3c49050"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","7ffa0e88a9a62306650dc6fc4addb131"],["/bangumis/index.html","6449a939f8e019af0675aad19f9aac03"],["/categories/Linux-study/index.html","17eb269d812710a3356226bf8ddf180b"],["/categories/ML/index.html","127fcbbc1ad24b8f50a04f6c320ed1b7"],["/categories/Nginx/index.html","86b1f06658642141a81561d26e11a83e"],["/categories/Spring/index.html","c7ca3461ca579dff8d108575b601ac33"],["/categories/course/index.html","f4afaad15ae4d8f32d896d0d38deb868"],["/categories/django/index.html","599a6bde5dc2ee9f8a9fcdfb0fe3b63d"],["/categories/fun/index.html","20ce215bd9f8ad5f05fa4671c0bb2bda"],["/categories/gcc/gdb/index.html","63e38b5fb6c5a9cc2f398fde793ea102"],["/categories/gcc/index.html","e576e401744186e88471b6841229227f"],["/categories/index.html","762861821d9094a0c63ba18895599c4e"],["/categories/java/index.html","0c45e18e916c3c5800a2feb2ee2c3cb1"],["/categories/latex/index.html","d0097fa283ba3c3007883569a9386395"],["/categories/python/index.html","62219b2d9a0f9b82d04c84f9bf227908"],["/categories/study/index.html","a32a5808b4d6c3a4c72b046e0c05dc93"],["/categories/vue/index.html","1162ba58ff09d73c58e5e8fb933601c5"],["/categories/误区/index.html","fb2fdcbab48cff460d2beee542418df7"],["/commonweal/index.html","bdb49f3755eeb7b771f31c73c8b4aca3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3c239e85ea5151d949244d1beffdc607"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/home/index.html","6021d78e7bfc31db734825e430043b49"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/website.png","c7a89a38bf7587fe303706ac58ad9949"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/images/wxqrcode.png","626feeff2a8285a2551bb9f943c32191"],["/index.html","1df4756edb0cc3561842e4fff34cbce5"],["/js/algolia-search.js","2ae779e20273644f1e0f5d3f7de17f76"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/meting-js.js","f3e005ef271afd0969c10bb08a67135f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","6eb5d244ed0f839992df127c0201832a"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a41215827b430d0fb352cc8c6ceb6d27"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","8b550fe85c39e2569de4cd4e3a7d160c"],["/lib/bookmark/bookmark.min.js","cb44d303a807a5e6eab5f5e20b53afcb"],["/lib/bookmark/index.js","69c20c5e07cc63aafc94cce5fa216381"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","76b52f501e7efad684540932c2d68853"],["/lib/jquery_lazyload/jquery.lazyload.js","370dc44ee76895503b42a7463aec9ac3"],["/lib/jquery_lazyload/jquery.scrollstop.js","4625e0bde5629aa428a5fd4337bc3a55"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","ea21756df8b65624502691ecb448af00"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","16bde8a3cb5d6ade5b4db20008d1123b"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ce0fe76e996b5fade34587933e66bafd"],["/live2d-widget/waifu-tips.js","b173a2889968ac3c86bfaa9beb195278"],["/live2d-widget/waifu.css","ab1823adf6780e666a163911055c9795"],["/page/10/index.html","98569b9a6461262da5be2bbfbecec4c0"],["/page/11/index.html","3ed4be685c2ef1dbe2f0cabbbe1faa82"],["/page/12/index.html","87b2622097e1b2c059493bd6383be0b5"],["/page/13/index.html","85687234ad13c2bdc902fed31befbb92"],["/page/14/index.html","1e58e8d537bcc169b652cfeb3d080b60"],["/page/15/index.html","573d4b04b0b9bb999ee1b085c249334c"],["/page/16/index.html","b1717f27fe8b68b72a1825961179b7aa"],["/page/17/index.html","fb310d120bdccfd52b58c972b8adf804"],["/page/18/index.html","50a7e3f779696b0292ecaa1a3b2b51ab"],["/page/19/index.html","d9765eaa233a966eea3835016e41e5ef"],["/page/2/index.html","0ad02908552d8f3a4454c0d01d8175b0"],["/page/20/index.html","bc33a2383cdd5f73f74a1119107b9c7d"],["/page/21/index.html","d7fc941bbe8e3418f2545d64e43648d0"],["/page/22/index.html","3e55547c3cd883f4e93f13e210dc171a"],["/page/23/index.html","612c2e2fe88bb010b79de0ee9612edcf"],["/page/24/index.html","8a9e7f34ba2e4948e96341be67638e51"],["/page/25/index.html","e7cfcb5f06b8e50d9c42fd8b3407efd3"],["/page/3/index.html","4beebe9bae826f4759880d9278314c64"],["/page/4/index.html","1451ee1934aa101de46b41b828c8a357"],["/page/5/index.html","cf206ad41dbe9e9dfaffc69b31f54cb5"],["/page/6/index.html","8a93c4986e484a893fae1fc8050045c8"],["/page/7/index.html","25760e34d3ecc0f256baf799dde4b46a"],["/page/8/index.html","3f30a02067a85a0f9cce9d9a63262311"],["/page/9/index.html","140102f1a2ccecae14aaa1346fbed233"],["/resume/index.html","8b555b136b672236972b1e198feedc08"],["/schedule/index.html","fe31648de6f35ce5877dd8221e1a6b92"],["/sitemap/index.html","47ab681ae353ad0c44fec06c27fb1a9e"],["/sw-register.js","3c34c5cc421a3d1339f9875669d0cc8e"],["/tags/AI/index.html","e2e6df68ebe38db0255de2539a368043"],["/tags/Astro/index.html","5928542afca45b2ae7cbbc8e3013aee2"],["/tags/BT/index.html","322628c071b00173f0a2fb07bfb2f038"],["/tags/BaiduNetdisk/index.html","14b9e4cc42d2c6ddcab5294f85cdb968"],["/tags/Bootstrap5/index.html","ed4c698868104d43f02aacb6f22c7c5e"],["/tags/CSS3/index.html","06f90532e8fb94cdf610ae2e66b75e77"],["/tags/Centos/index.html","3ecc9090121074b88b38976330f7dac7"],["/tags/EEG/index.html","0cf95438c737df562653b81479597e69"],["/tags/Electron/index.html","c6d5a96bdd3a8dc13a6c88fc5440b36e"],["/tags/ElementUI/index.html","094f33658d72540df28e17a21bf4e1fb"],["/tags/Flutter/index.html","a7952ed7e1ceb205d444f9859b089c73"],["/tags/GAN/index.html","260225b0bc9a34a7e6671de397972ec9"],["/tags/GUI/index.html","29f0ea18ed10048a4815d146beae7ae8"],["/tags/Git/index.html","f2969664189b8e52ed4e3d00095d2ae9"],["/tags/JavaScript/index.html","21f640ee4246d5a532c122b731339c8a"],["/tags/Keras/index.html","cee05fd6b6fa9fb6e9de427e0ed5cdf8"],["/tags/Linux/index.html","516721451dfe2da595562dc8f7a7e9f9"],["/tags/ML/index.html","b9423747a263951aa40cee4949535543"],["/tags/MNE/index.html","9e6106ecaf3cd1bfc9a6c357f1ae056d"],["/tags/NLP学习/index.html","369d8e9be0f05ca316b5304552e4b61c"],["/tags/Nginx/index.html","c0da78f2ae187cd5fbe2c39c7bbdbfba"],["/tags/OSS存储/index.html","5da2bb4b9f89f6ab7eecbbbd94a46ff3"],["/tags/Obsidian/index.html","5b1c7d06879f7370fffa5d60a56f2e0a"],["/tags/Qt/index.html","2153e6fd1fab4721d5e498827e278d00"],["/tags/RSS/index.html","0778070c5908a2b3694b56c07078b1c1"],["/tags/SSL/index.html","90b6066781c699324df1059359fc3b81"],["/tags/Scrapy/index.html","da20ef9d3cae50918eab82827206c10d"],["/tags/Speech/index.html","061a92673ab813bb1f1a3f4180356da1"],["/tags/Tailwind/index.html","d68ef72bacb558f320e05a4cd83794c4"],["/tags/TotalCommander/index.html","1f7541b657482358468792117304f13a"],["/tags/VPN/index.html","cdc2af731c742c1741fe8e3ab3ca4c19"],["/tags/Vercel/index.html","0623c3324e672386d1bc5114004561f3"],["/tags/Web/index.html","6c60a4e303b6f0b47b55247f580cf5e7"],["/tags/algorithm/index.html","9420a1c50a2710a42d450ca2dd23dc7f"],["/tags/bison/index.html","367e6e1f14bdb19d87311590b3d44153"],["/tags/bom/index.html","e53cf0ca96b3b2e261c1b9adc07af328"],["/tags/bomb-lab/index.html","81823fd699f54dbd0902b7071a255371"],["/tags/c/index.html","f460d9e85fba8f1f0ef35910851bb856"],["/tags/cheerio/index.html","a6eec5a2a63a57e45b31e768aae9f49d"],["/tags/codewars/index.html","95a8ef13a4682e1ad56dd0472e899c06"],["/tags/compile/index.html","354d9bdf501842acd0871e693b2fd3ba"],["/tags/compiler/index.html","fa79b80c4c6032018779676a70f2e110"],["/tags/cors/index.html","09839f6cbb80aaa43369a53b4215d537"],["/tags/course/index.html","b215c16c4da6dac1e2fb177ab31ee837"],["/tags/cpp/index.html","66952658c3a183a23672ee5fcfaba435"],["/tags/crypto/index.html","b2fa4d64526c4eaaa1f52f414ccbe7e8"],["/tags/csapp/index.html","1decb05f101bb21eeeb6d5fa1c6466a5"],["/tags/csp/index.html","3e781b1ce197b23e441bd7eece1d3363"],["/tags/css/index.html","9d5fbc3fab65cd39e1f839d432dbad9f"],["/tags/dart/index.html","2d66628adc29420b1497cfa5f3374733"],["/tags/data-structure/index.html","c1bcffddf1c74ad07ac98aa7c719a3d6"],["/tags/database/index.html","99b4a05abc997810e57e353f87887a3b"],["/tags/deep-learning/index.html","ae2d9fbac9ec78f59fdf4af53e4673aa"],["/tags/deepLearning/index.html","7f26efe249cdc67bc225ae3be092e105"],["/tags/django/index.html","0d2eb0992a94180f02c4b608b5261e64"],["/tags/docker/index.html","b41efb78928ce496bf5f42f9e12de6c2"],["/tags/dom/index.html","ac98549df2283fe1fd55910745c213c3"],["/tags/dwm/index.html","c8927a36431fd92dc391deef9ce00a3a"],["/tags/exercise/index.html","25a4e27cf47112d60f1a6991f74dec46"],["/tags/filebrowser/index.html","4ad5b0d1f1e20ab061806ceebb1de750"],["/tags/flask/index.html","5848b13e5882f49005cf7aeede552b12"],["/tags/flex/index.html","f2d78311054e0f2fcf4c34877cc3ec16"],["/tags/front/index.html","6837803d422cc7e1bc947628b3135d63"],["/tags/gcc/index.html","c840e53e4426a9894852ab89a7a91ba1"],["/tags/gdb/index.html","53b8890627089363dbf62cea10947786"],["/tags/github-profile/index.html","390294897b00e77c290e193a472e0ebf"],["/tags/github/index.html","e01347f0e18d8647991c6ffef150b1af"],["/tags/graphviz/index.html","21d51e66f33b4738bfbb2b0872389534"],["/tags/grid/index.html","ed53e8790386264afabf4d9306cc46ee"],["/tags/html/index.html","89cd6f11fddaa07a3c800ea8517cba66"],["/tags/i3wm/index.html","5d4af7ca8f6eda42fe5fc2462f92289b"],["/tags/index.html","b90521d979097ccb20294c43bbe7ecc6"],["/tags/issue/index.html","a40ffff9d4e5365f092930f28d43469a"],["/tags/jQuery/index.html","bfadf19c0e7c8233404e2d392e5843e5"],["/tags/java/index.html","4fa9c17d4a3944cb72aca6d2e60eaaf7"],["/tags/js/index.html","2c1fa262866cdbeaeb35986a424a6364"],["/tags/latex/index.html","aae411a6d57665ba9045bbaf089c61da"],["/tags/leetcode/index.html","05a5a7c13bd9cc4776c5a54088b46bc4"],["/tags/lex/index.html","0e5444305fa7a4632114c33a3b0f6138"],["/tags/logging/index.html","cd4c251d147d247b0898c2e3410fa1c5"],["/tags/material/index.html","8ea3d4dc82769117d27da91e9cc738e3"],["/tags/music-player/index.html","6424c90de2242a203e740a0dece62a28"],["/tags/node/index.html","50e29a2b8c404fd46df25e31a7256ba6"],["/tags/nodejs/index.html","6d715621aaa7bbccc9f5c7c051af286a"],["/tags/noj/index.html","c3bf23cfca805436c8c18321ebab7aac"],["/tags/npm/index.html","d84ce7549ffd7c3c9da52a8dbe35c9ea"],["/tags/opencv/index.html","2af0fb2ca10d09773348d121d8b8109c"],["/tags/overleaf/index.html","be9f8722c72edac12c66327fab4de47d"],["/tags/pandas/index.html","43d5f8166732c8fd4ab76f72e5bbdef9"],["/tags/paper/index.html","7f83fe7225bd7370dc0ac8fe034823b8"],["/tags/premiere-pro/index.html","cb6e5571482553a33cb675f04858adf8"],["/tags/proxy/index.html","148e159b90d3682a1827434bffe36b09"],["/tags/pure-css/index.html","6cc4a762d8bf866444e34d5c16a0ea00"],["/tags/pygame/index.html","8e90b2258582808168659ec9821e6920"],["/tags/python/index.html","0e9829d2f1931fd2b4c2dde3fcf60bec"],["/tags/python/page/2/index.html","8e19c083295203cbd365289fa8f01076"],["/tags/pytorch/index.html","d1a7d71d80f01b9f08908d4910b0b3d9"],["/tags/reading/index.html","c00ddaef1432bcd99c690f4e31229315"],["/tags/request/index.html","7c72e7cd4204c04dd4a9234611562efa"],["/tags/requests/index.html","003399baf12f40d8109e1c1945a22f71"],["/tags/security/index.html","1ca11140454b13459c84182284b46409"],["/tags/shell/index.html","c632ba28113d82c41f8e54675ba4f86b"],["/tags/sign-in/index.html","25afa3cfaa0ff9efe39bbe263d45afe7"],["/tags/socket/index.html","0f343642d5ccd7ea97b076ae371d88b2"],["/tags/spider/index.html","5a6da8eb960a24f15732da76763617d2"],["/tags/splash/index.html","b9aa7d5db3646bc6a89ce45fea086039"],["/tags/stl/index.html","1934b5bc9dbf058bd0b6e503ee53d9c2"],["/tags/sumatra/index.html","46a4d23b864cb1af24c7db1eb60938f2"],["/tags/superagent/index.html","ade62089cafdba5be64b46b345fa054a"],["/tags/tensorlow/index.html","0c0fe87f9803e05e34a2caa7c439421a"],["/tags/tex/index.html","8aa7a2a320221557d582cb619288b89c"],["/tags/thesis/index.html","9b1bc4b29c354cf3996c56866b9c5335"],["/tags/threading/index.html","f71d7f2f1697f0bc5cd5f5ea12b8a209"],["/tags/tkinter/index.html","2b1e0c2c6354a43abed527360d07a634"],["/tags/torrent/index.html","95736a8f6f9dd10520a296ad7e50e441"],["/tags/tutorial/index.html","095e118ef3837bd67332af6a01e3da19"],["/tags/typora/index.html","b68c8f58f4f481bc9c6de2519663c386"],["/tags/uniapp/index.html","088f5214493fc31597124c9220aa204d"],["/tags/vite/index.html","d19b1c8f62276491b06dff9628005600"],["/tags/vscode/index.html","2d2516d1a1aebc81fcb0a3490e7f78fc"],["/tags/vue-element-template/index.html","0a0cce2e80ec25c43f711cb31937d01d"],["/tags/vue/index.html","54f3b9afef4c1a4357870971f7639d73"],["/tags/vue2/index.html","16b86ce04ce1a6dc896e453921916c21"],["/tags/vue3-x/index.html","66ae56e0f39f13447c721402bf31123b"],["/tags/wechat/index.html","2b55f1ba73d3a4c6d491cf9f52751c83"],["/tags/wm/index.html","780effb35c78187d5076df820384e705"],["/tags/wordpress/index.html","b887c1068261b8fd7cebc706ba2d32fc"],["/tags/workflow/index.html","524af6b941de0128c0dd1a93ae2ecdce"],["/tags/xpath/index.html","c7e10767023dd58d6f993a5d0c176cce"],["/tags/yacc/index.html","9a512d4f76da6f68b2c94a539653d6ed"],["/tags/yarn/index.html","754afd44bff929ac2cf244240710897b"],["/tags/zsh/index.html","6edb4807c7092ffb6d598925eaa9cd5e"],["/tags/七牛云/index.html","7e075c7228c31a4b42519573ccf0440c"],["/tags/函数/index.html","2eec9ec1fe31b51be4e928d949a8899d"],["/tags/剪辑/index.html","ffbe757e997b653ba2b39d6a8ddf7f4c"],["/tags/存储/index.html","c2dab9b3c99e4baec937144f1f8cb25b"],["/tags/实战/index.html","f415b8002390161c5df6182d2fa6d06d"],["/tags/工具使用/index.html","21fc7842adc5edcc81fb21da3fce0b4d"],["/tags/建站/index.html","a99af2a2ff1b0985a4df1c699ca1c646"],["/tags/微信小程序/index.html","2c1c7e40fe096567886a657e8c0698e1"],["/tags/指针/index.html","4886e5b27e9c82a4b9f44fb1bdd12dd0"],["/tags/插件/index.html","f8eed18a1297570734fac2e0c1192acd"],["/tags/效率提升/index.html","9059e043c0530ef9929450798315ef4d"],["/tags/日志/index.html","2c29ace5c1af96caa3128df7d90995b7"],["/tags/汇编/index.html","48ce5c1e2863534b4ceed4308d4808ad"],["/tags/油猴脚本/index.html","5d54018d35b14255ffaf7b0770d4c794"],["/tags/浏览器/index.html","0166e658b5b34d40130b0b05bbbfd03c"],["/tags/爬虫/index.html","16111dd8a8c8188920f849607efff812"],["/tags/算法/index.html","91fa5cb623efd809d8b27a645e5f5a65"],["/tags/编译原理/index.html","743cd69fcd254d309e97818d68695dac"],["/tags/获取地理位置/index.html","59d4991c2303baa171f782f139b9f9bd"]];
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
