# Element Plus 色板总览

`@cnguu/palette` 基于 [Element Plus 色彩体系](https://element-plus.org/) 提供 6 种基础色（primary / success / warning / danger / error / info），每种颜色提供 11 个色阶（`0` 最深，`10` 最浅，主色位于索引 `9`）。

左侧导航可查看每个色相的色板详情。下方为完整一览。

<script setup lang="ts">
import { EL_COLOR_NAMES, EL_COLOR_LABELS } from '../palette-data.ts'
import PaletteGrid from '../.vitepress/theme/components/PaletteGrid.vue'
</script>

<div class="palette-overview">
  <section v-for="name in EL_COLOR_NAMES" :key="name" class="palette-overview__row">
    <h3 :id="name" class="palette-overview__title">
      <a class="header-anchor" :href="`#${name}`" :aria-label="`Permalink to &quot;${name}&quot;`"></a>
      {{ EL_COLOR_LABELS[name] }}
    </h3>
    <PaletteGrid design="el" :name="name" :label="EL_COLOR_LABELS[name]" />
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
