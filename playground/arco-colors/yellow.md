# yellow

Arco Design `yellow` 色相的 10 阶色板。

<script setup lang="ts">
import { ARCO_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid design="arco" name="yellow" :label="ARCO_COLOR_LABELS['yellow']" />
</ClientOnly>
