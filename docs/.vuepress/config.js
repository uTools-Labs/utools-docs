module.exports = {
  base: '/docs/',
  lang: 'zh',
  title: 'uTools',
  description: '新一代效率工具平台，自由组合插件应用，打造专属你的趁手工具集',
  head: [
    ['script', {}, `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?91d2fe9d2e05a231f56ec4400d1dcd84";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
`]
  ],
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          }
        }
      }
    ]
  ],
  themeConfig: {
    // displayAllHeaders: true,
    logoDark: "https://res.u-tools.cn/website/white.png",
    logo: "https://res.u-tools.cn/website/logo.png",
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 1,
    home: '/developer/welcome.html',
    navbar: [
      { text: '开发者文档', link: '/developer/welcome', 'activeMatch': '/developer/' },
      { text: 'uTools 官网', link: 'https://u.tools' },
      { text: '猿料社区', link: 'https://yuanliao.info' }
    ],
    sidebar: {
       '/developer/': [
        {
          'text': '开发者文档',
          children: [
            '/developer/welcome',
            '/developer/config',
            '/developer/preload',
            '/developer/template',
            '/developer/api',
            '/developer/db',
            '/developer/ubrowser',
            '/developer/server-api',
            '/developer/payment',
            '/developer/best',
          ]
        }
       ]
    }
  }
}
