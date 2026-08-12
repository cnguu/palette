# green

Arco Design `green` 色相的 10 阶色板。

<script setup lang="ts">
import { ARCO_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid design="arco" name="green" :label="ARCO_COLOR_LABELS['green']" />
</ClientOnly>
