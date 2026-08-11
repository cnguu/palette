import { defineConfig } from 'vitepress'
import { ANT_COLOR_NAMES, ARCO_COLOR_NAMES } from '../palette-data'

const ANT_COLOR_LINKS = ANT_COLOR_NAMES.map(name => ({
  text: name,
  link: `/colors/${name}`,
}))

const ARCO_COLOR_LINKS = ARCO_COLOR_NAMES.map(name => ({
  text: name,
  link: `/arco-colors/${name}`,
}))

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
      { text: '色板', link: '/colors/red' },
    ],

    sidebar: {
      '/colors/': [
        {
          text: 'Ant Design 色板',
          items: ANT_COLOR_LINKS,
        },
      ],
      '/arco-colors/': [
        {
          text: 'Arco Design 色板',
          items: ARCO_COLOR_LINKS,
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cnguu/palette' },
    ],

    search: {
      provider: 'local',
    },
  },
})
