# gray

Ant Design `gray` 色相的 10 阶色板。

<script setup lang="ts">
import { ANT_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid name="gray" :label="ANT_COLOR_LABELS['gray']" />
</ClientOnly>
