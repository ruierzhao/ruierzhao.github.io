---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: raino
  text: 朝花夕拾
  tagline: 老年程序员的“烂笔头”

  image:
    src: /raino-icon.png
    alt: icon
    fetchpriority: high

  actions:
    # - theme: brand
    #   text: 列表
    #   link: /markdown-examples
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - title: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece" style="color:#ff9800"></iconify-icon>rust语言'
    icon:
      dark: /raino-icon.png
      light: /raino-icon.png
    details: 支持开箱即用的多种主题配色，并提供灵活的配置选项，轻松切换主题颜色方案，满足品牌或个人偏好的视觉需求。
    link: '/rust/index.md'

  - title: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece" style="color:#ff9800"></iconify-icon>go语言'
    details: 支持开箱即用的多种主题配色，并提供灵活的配置选项，轻松切换主题颜色方案，满足品牌或个人偏好的视觉需求。
    link: '/go/index.md'


---

<Home/>
