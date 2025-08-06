import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "raino",
  description: "A VitePress Site",

  themeConfig: {
    logo: '/raino-icon.png',
    
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },
  },

  lang: "zh_CN",
  // 开启后网址后缀无'html'
  cleanUrls: true,
  // 最后更新时间戳
  lastUpdated: true,

  // vue 配置
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  // 部署
  base: "/blog/"
});
