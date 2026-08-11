<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import {
  resolveArcoPalette,
  resolvePalette,
  type AntColorName,
  type ArcoColorName,
} from '../../../palette-data'

type ColorName = AntColorName | ArcoColorName

const props = withDefaults(defineProps<{
  /** 设计规范，默认 'ant' */
  design?: 'ant' | 'arco'
  /** 色阶名称，例如 'red' */
  name: ColorName
  /** 该色阶的中文/英文名 */
  label?: string
}>(), {
  design: 'ant',
})

const { isDark } = useData()

const palette = computed(() => {
  if (props.design === 'arco') {
    return resolveArcoPalette(props.name as ArcoColorName, isDark.value)
  }
  return resolvePalette(props.name as AntColorName, isDark.value)
})

const steps = computed(() =>
  palette.value.map((hex, index) => ({
    index,
    hex,
    id: `${props.name}-${index}`,
  })),
)

/** 当前已复制的 step id，用于显示「已复制」反馈 */
const copiedId = ref<string>('')

let copyTimer: ReturnType<typeof setTimeout> | undefined

async function copyColor(step: { id: string, hex: string }): Promise<void> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(step.hex)
    }
    else {
      // 兜底：使用隐藏 textarea + execCommand
      const ta = document.createElement('textarea')
      ta.value = step.hex
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }

    copiedId.value = step.id
    if (copyTimer)
      clearTimeout(copyTimer)
    copyTimer = setTimeout(() => {
      copiedId.value = ''
    }, 1500)
  }
  catch {
    // 忽略复制失败（如权限被拒），静默不打扰用户
  }
}
</script>

<template>
  <div class="palette">
    <div
      v-for="step in steps"
      :key="step.id"
      class="palette__step"
      :class="{ 'palette__step--copied': copiedId === step.id }"
      :style="{ backgroundColor: step.hex }"
      :title="label ? `${label} - ${step.id} ${step.hex}` : `${step.id} ${step.hex}`"
      @click="copyColor(step)"
    >
      <span class="palette__name">{{ step.id }}</span>
      <span class="palette__hex">
        <template v-if="copiedId === step.id">已复制</template>
        <template v-else>{{ step.hex }}</template>
      </span>
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
  transition: filter 0.15s ease, transform 0.15s ease;
  cursor: pointer;
}

.palette__step:active {
  transform: scale(0.99);
}

.palette__step--copied {
  filter: brightness(1.08);
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
