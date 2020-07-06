const nav = require('./utils/nav.js')
var { cssSidebar, jsSidebar } = nav

module.exports = {
  title: '小丑杂货铺',
  description: '学习前端的一些笔记',
  base: '/coding-notes/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  port: 3000,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    // 1.接受字符串，它设置了最后更新时间的label，例如：最后更新时间：2019年5月3日 21:51:53
    lastUpdated: '最后更新时间',
    // 2.设置true，开启最后更新时间
    // lastUpdated: true,
    // 3.设置false，不开启最后更新时间(默认)
    // lastUpdated: false
    sidebar: 'auto',
    repo: 'https://github.com/itxcc',
    repoLabel: 'Github',
    nav: [
      {
        text: 'CSS',
        link: '/CSS/'
      },
      {
        text: 'JavaScript',
        link: '/JavaScript/'
      },
      {
        text: 'Vue',
        link: '/Vue/'
      },
      {
        text: 'Git',
        link: '/Git/'
      },
      // {
      //   text: '关于', link: '/关于/',
      //   items: [
      //     {text: '豆瓣', link: 'https://www.douban.com/people/186906634/'},
      //     {text: '推特', link: 'https://twitter.com/bububuer'},
      //     {text: 'ins', link: 'https://instagram.com/itxcc'},
      //   ]
      // },
    ],
    sidebar: {
      '/CSS/': cssSidebar,
      '/JavaScript/': [
        {
          title: '图片懒加载',
          collapsable: false,
          children: [
            '/JavaScript/lazyLoading/lazy.md',
          ]
        },
        {
          title: '防抖节流',
          collapsable: false,
          children: [
            '/JavaScript/throttle-debounce/throttle-debounce.md',
          ]
        },
      ],
      // '/JavaScript/': cssSidebar,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images',
        '@vuepress': '../images/vuepress',
        '@components': '../.vuepress/components'
      }
    }
  }
}
