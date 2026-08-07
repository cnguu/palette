# 色板总览

`@cnguu/palette` 基于 [Ant Design 色彩体系](https://ant.design/docs/spec/colors-cn) 生成 13 种基础色，每种颜色提供 10 个色阶（`0` 最浅，`9` 最深）。

左侧导航可查看每个色相的色板详情。下方为完整一览。

<script setup lang="ts">
import { ANT_COLOR_NAMES, ANT_COLOR_PALETTES, ANT_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<div class="palette-overview">
  <section v-for="name in ANT_COLOR_NAMES" :key="name" class="palette-overview__row">
    <h3 :id="name" class="palette-overview__title">
      <a class="header-anchor" :href="`#${name}`" :aria-label="`Permalink to &quot;${name}&quot;`"></a>
      {{ ANT_COLOR_LABELS[name] }}
    </h3>
    <PaletteGrid :name="name" :palette="ANT_COLOR_PALETTES[name]" :label="ANT_COLOR_LABELS[name]" />
  </section>
</div>

<style>
.palette-overview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 32px 24px;
  margin-top: 16px;
}

.palette-overview__row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.palette-overview__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
</style>
