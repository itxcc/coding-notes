const nav = require('./utils/nav.js')
var { cssSidebar } = nav
module.exports = {
  title: 'itxcc',
  description: '前端开发一些笔记',
  base: '/tips/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  port: 3000,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/itxcc/tips',
    repoLabel: 'Github',
    nav: [
      {
        text: 'css-tips',
        link: '/css/'
      },
    ],
    sidebar: {
      '/css/': cssSidebar,
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
