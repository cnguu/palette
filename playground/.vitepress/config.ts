import { defineConfig } from 'vitepress'
import { ANT_COLOR_NAMES, ARCO_COLOR_NAMES, EL_COLOR_NAMES } from '../palette-data'

const ANT_COLOR_LINKS = ANT_COLOR_NAMES.map(name => ({
  text: name,
  link: `/colors/${name}`,
}))

const ARCO_COLOR_LINKS = ARCO_COLOR_NAMES.map(name => ({
  text: name,
  link: `/arco-colors/${name}`,
}))

const EL_COLOR_LINKS = EL_COLOR_NAMES.map(name => ({
  text: name,
  link: `/el-colors/${name}`,
}))

/** 色板页共享的侧边栏分组，ant / arco / el 三个前缀下都展示，便于跨规范跳转 */
const COLOR_SIDEBAR = [
  {
    text: 'Ant Design 色板',
    items: ANT_COLOR_LINKS,
  },
  {
    text: 'Arco Design 色板',
    items: ARCO_COLOR_LINKS,
  },
  {
    text: 'Element Plus 色板',
    items: EL_COLOR_LINKS,
  },
]

export default defineConfig({
  title: '@cnguu/palette',
  description: '多设计规范调色板',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Ant Design', link: '/colors/red' },
      { text: 'Arco Design', link: '/arco-colors/red' },
      { text: 'Element Plus', link: '/el-colors/primary' },
    ],

    sidebar: {
      '/colors/': COLOR_SIDEBAR,
      '/arco-colors/': COLOR_SIDEBAR,
      '/el-colors/': COLOR_SIDEBAR,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cnguu/palette' },
    ],

    search: {
      provider: 'local',
    },
  },
})
