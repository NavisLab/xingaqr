module.exports = {
  title: "xingaqr 的个人博客",
  description: '正 在 光 速 加 载 中 ……',
  dest: 'dist',
  configureWebpack: (config) => {
    config.output.publicPath =
      process.env.NODE_ENV === 'production'
        ? 'https://cdn.jsdelivr.net/gh/xingaqr/xingaqr@gh-pages/'
        : '/'
  },
  head: [
    // pwa 支持
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
    ],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'xingaqr' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    [
      'link',
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0099CC' },
    ],
    // iconfont
    ['link', { rel: 'stylesheet', href: '/iconfont.css' }],
    // 移动设备支持
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    // kaTex 公式
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css',
      },
    ],
    // 变灰
    // [
    //   'link',
    //   {
    //     type: 'text/css',
    //     rel: 'stylesheet',
    //     href: 'https://cdn.jsdelivr.net/gh/malaohu/jscdn/grey.css',
    //   },
    // ],
  ],
  theme: 'reco',
  themeConfig: {
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    subSidebar: 'auto',
    type: 'blog',
    blogConfig: {
      category: {
        location: 1,
        text: '分类',
      },
      tag: {
        location: 2,
        text: '标签',
      },
    },
    friendLink: require('./friendLink.js'),
    valineConfig: {
      appId: 'B1miWO1GBlxQgo1OG1sQd2Nh-MdYXbMMI',
      appKey: 'vxqL8ySWxQhn2qXI5EkeSaLy',
      avatar: 'mp',
      placeholder: '填写邮箱可以收到回复提醒哦...',
      visitor: true,
      enableQQ: true,
      requiredFields: ['nick','mail'],
    },
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'xingaqr',
    authorAvatar: '/avatar.png',
    record: '',
    startYear: '2019',
    
    repo: 'xingaqr/xingaqr',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    // editLinkText: '帮助我们改善此页面！'

  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.set({ html: true })
      md.use(require('@iktakahiro/markdown-it-katex'))
    },
  },
  plugins: {
    '@vuepress-reco/kan-ban-niang': {
      theme: ['haru1', 'haru2', 'shizuku', 'haruto', 'koharu', 'z16'],
    },
    '@vuepress/pwa': {
      // pwa
      serviceWorker: true,
      updatePopup: {
        message: '有新内容可用!',
        buttonText: '刷新',
      },
    },
  },
}
