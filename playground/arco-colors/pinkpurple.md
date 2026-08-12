# pinkpurple

Arco Design `pinkpurple` 色相的 10 阶色板。

<script setup lang="ts">
import { ARCO_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid design="arco" name="pinkpurple" :label="ARCO_COLOR_LABELS['pinkpurple']" />
</ClientOnly>
