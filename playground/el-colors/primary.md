# primary

Element Plus `primary` 色相的 11 阶色板。

<script setup lang="ts">
import { EL_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<ClientOnly>
  <PaletteGrid design="el" name="primary" :label="EL_COLOR_LABELS['primary']" />
</ClientOnly>
