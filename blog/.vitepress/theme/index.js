// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import * as lm from '@theojs/lumen'
import '@theojs/lumen/style'

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Pill', lm.Pill)
    app.component('Links', lm.Links)
    app.component('Card', lm.Card)
    app.component('Copy', lm.CopyText)
    app.component('BoxCube', lm.BoxCube)
    app.component('Waline', lm.Waline)
    app.component('Home', lm.Underline)
  }
}
