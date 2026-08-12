# lime

Arco Design `lime` 色相的 10 阶色板。

<script setup lang="ts">
import { ARCO_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid design="arco" name="lime" :label="ARCO_COLOR_LABELS['lime']" />
</ClientOnly>
