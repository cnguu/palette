# blue

Ant Design `blue` 色相的 10 阶色板。

<script setup lang="ts">
import { ANT_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid name="blue" :label="ANT_COLOR_LABELS['blue']" />
</ClientOnly>
