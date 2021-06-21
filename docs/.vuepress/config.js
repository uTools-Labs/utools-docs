module.exports = {
  base: '/docs/',
  title: 'uTools',
  description: 'uTools是一个极简、插件化、跨平台的现代化桌面软件。通过自由选配丰富的插件，打造你得心应手的工具集合。',
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
  themeConfig: {
    // displayAllHeaders: true,
    nav: [
      { text: '官网', link: 'https://u.tools' },
      { text: '社区', link: 'https://yuanliao.info' }
    ],
    sidebar: [
      {
        title: '指南',
        children: [
          '/guide/about-uTools',
          '/guide/skills',
          '/guide/faq'
        ]
      }, {
        title: '插件开发',
        collapsable: false,
        children: [
          '/developer/welcome',
          '/developer/config',
          '/developer/preload',
          '/developer/ubrowser',
          '/developer/template',
          '/developer/api',
          '/developer/best',
        ]
      }
    ]
  }
}
