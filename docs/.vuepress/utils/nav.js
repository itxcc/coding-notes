// CSS的目录结构
const cssSidebar = [
  {
    title: 'init',
    collapsable: false,
    children: [
      '/CSS/init/reset.md',
    ]
  },
  {
    title: '小技巧',
    collapsable: false,
    children: [
      '/CSS/tips/scrollbar.md',
      '/CSS/tips/word.md',
    ]
  },
  {
    title: '动画',
    collapsable: false,
    children: [
      '/CSS/animation/loading.md',
      '/CSS/animation/button.md',
      '/CSS/animation/accordion.md',
      '/CSS/animation/parabola.md',
    ]
  },
  {
    title: '属性',
    collapsable: false,
    children: [
      '/CSS/attribute/flexbox.md',
      '/CSS/attribute/grid.md',
      '/CSS/attribute/filter.md',

    ]
  },
  {
    title: '工具',
    collapsable: false,
    children: [
      '/CSS/tool/card.md',
      '/CSS/tool/triangle.md',
    ]
  },
]

// webpack目录结构
const webpackSidebar = {
  title: 'Webpack',
  collapsable: false,
  children: [
    '/webpack/',
    '/webpack/source.md',
    '/webpack/install.md',
    '/webpack/start.md',
    '/webpack/static.md',
    '/webpack/core.md',
    '/webpack/advanced.md',
    '/webpack/case.md',
    '/webpack/optimization.md',
    '/webpack/loader.md',
    '/webpack/plugin.md'
  ]
}
// JavaScript
const jsSidebar = [
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
]


module.exports = {
  cssSidebar,
  jsSidebar,
}
