# lime

Ant Design `lime` 色相的 10 阶色板。

<script setup lang="ts">
import { ANT_COLOR_PALETTES, ANT_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid name="lime" :palette="ANT_COLOR_PALETTES['lime']" :label="ANT_COLOR_LABELS['lime']" />
</ClientOnly>
