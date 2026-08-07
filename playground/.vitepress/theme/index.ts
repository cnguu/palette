import DefaultTheme from 'vitepress/theme'
import PaletteGrid from './components/PaletteGrid.vue'
import './style.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('PaletteGrid', PaletteGrid)
  },
}
