import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/dev/",
  title: "🐼 raino - dev-tools",
  description: "常用开发工具及文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'LINKS',
        items: [
          { text: 'doc', link: '/doc' },
          { text: 'tools', link: '/tools' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: '/' }
    ]
  }
})
