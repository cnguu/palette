# red

Ant Design `red` 色相的 10 阶色板。

<script setup lang="ts">
import { ANT_COLOR_PALETTES, ANT_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid name="red" :palette="ANT_COLOR_PALETTES['red']" :label="ANT_COLOR_LABELS['red']" />
</ClientOnly>
