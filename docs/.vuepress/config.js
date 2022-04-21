module.exports = {
  base: '/docs/',
  lang: 'zh',
  title: 'uTools',
  description: 'uTools是一个极简、插件化、跨平台的现代化桌面软件。通过自由选配丰富的插件，打造你得心应手的工具平台。',
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
            placeholder: '搜索, 快捷键 「s」',
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
    home: '/guide/about-uTools.html',
    navbar: [
      { text: '使用指南', link: '/guide/about-uTools', 'activeMatch': '/guide/' },
      { text: '插件开发', link: '/developer/welcome', 'activeMatch': '/developer/' },
      { text: 'uTools 官网', link: 'https://u.tools' },
      { text: '社区', link: 'https://yuanliao.info' }
    ],
    sidebar: {
      '/guide/': [
        {
          'text': '用户指南',
          'children': [
            '/guide/about-uTools',
            '/guide/skills',
            '/guide/share',
            '/guide/ppt',
            '/guide/enterprise',
            '/guide/faq',
          ]
        }

      ],
       '/developer/': [
        {
          'text': '插件开发',
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
