<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { resolvePalette, type AntColorName } from '../../../palette-data'

const props = defineProps<{
  /** 色阶名称，例如 'red' */
  name: AntColorName
  /** 该色阶的中文/英文名（hover 时显示） */
  label?: string
}>()

const { isDark } = useData()

const palette = computed(() => resolvePalette(props.name, isDark.value))

const steps = computed(() =>
  palette.value.map((hex, index) => ({
    index,
    hex,
    id: `${props.name}-${index}`,
  })),
)
</script>

<template>
  <div class="palette">
    <div
      v-for="step in steps"
      :key="step.id"
      class="palette__step"
      :style="{ backgroundColor: step.hex }"
      :title="label ? `${label} - ${step.id} ${step.hex}` : `${step.id} ${step.hex}`"
    >
      <span class="palette__name">{{ step.id }}</span>
      <span class="palette__hex">{{ step.hex }}</span>
    </div>
  </div>
</template>

<style scoped>
.palette {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--vp-c-gutter);
}

.palette__step {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 16px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  transition: filter 0.15s ease;
  cursor: pointer;
}

.palette__step + .palette__step {
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.palette__name {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);
}

.palette__step:nth-child(n + 5) .palette__name,
.palette__step:nth-child(n + 5) .palette__hex {
  color: #ffffff;
}

.palette__hex {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  letter-spacing: 0.2px;
}
</style>
