import { generate } from '@ant-design/colors'
import {
  ANT_BLUE,
  ANT_BLUE_PALETTE,
  ANT_CYAN,
  ANT_CYAN_PALETTE,
  ANT_GEEKBLUE,
  ANT_GEEKBLUE_PALETTE,
  ANT_GOLD,
  ANT_GOLD_PALETTE,
  ANT_GRAY,
  ANT_GRAY_PALETTE,
  ANT_GREEN,
  ANT_GREEN_PALETTE,
  ANT_LIME,
  ANT_LIME_PALETTE,
  ANT_MAGENTA,
  ANT_MAGENTA_PALETTE,
  ANT_ORANGE,
  ANT_ORANGE_PALETTE,
  ANT_PURPLE,
  ANT_PURPLE_PALETTE,
  ANT_RED,
  ANT_RED_PALETTE,
  ANT_VOLCANO,
  ANT_VOLCANO_PALETTE,
  ANT_YELLOW,
  ANT_YELLOW_PALETTE,
} from '@cnguu/palette'

/** Ant Design 13 个基础色的展示名称（kebab-case 复数） */
export const ANT_COLOR_NAMES = [
  'red',
  'volcano',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
  'magenta',
  'gray',
] as const

export type AntColorName = (typeof ANT_COLOR_NAMES)[number]

/** 色阶到对应基础色（seed color）的映射 */
export const ANT_COLOR_SEEDS: Record<AntColorName, string> = {
  red: ANT_RED,
  volcano: ANT_VOLCANO,
  orange: ANT_ORANGE,
  gold: ANT_GOLD,
  yellow: ANT_YELLOW,
  lime: ANT_LIME,
  green: ANT_GREEN,
  cyan: ANT_CYAN,
  blue: ANT_BLUE,
  geekblue: ANT_GEEKBLUE,
  purple: ANT_PURPLE,
  magenta: ANT_MAGENTA,
  gray: ANT_GRAY,
}

/** 色阶到对应调色板数组的映射（亮色模式，构建时生成） */
export const ANT_COLOR_PALETTES: Record<AntColorName, readonly string[]> = {
  red: ANT_RED_PALETTE,
  volcano: ANT_VOLCANO_PALETTE,
  orange: ANT_ORANGE_PALETTE,
  gold: ANT_GOLD_PALETTE,
  yellow: ANT_YELLOW_PALETTE,
  lime: ANT_LIME_PALETTE,
  green: ANT_GREEN_PALETTE,
  cyan: ANT_CYAN_PALETTE,
  blue: ANT_BLUE_PALETTE,
  geekblue: ANT_GEEKBLUE_PALETTE,
  purple: ANT_PURPLE_PALETTE,
  magenta: ANT_MAGENTA_PALETTE,
  gray: ANT_GRAY_PALETTE,
}

/**
 * VitePress 夜间模式背景色（与 VitePress dark theme `--vp-c-bg` 一致）
 */
export const VP_DARK_BG = '#1b1b1f'

/**
 * 根据主题动态生成调色板
 *
 * - `theme === 'dark'`：使用 `@ant-design/colors` 的 `generate` 重新生成，
 *   背景色与 VitePress 夜间模式一致，保证暗色色板在深色文档背景上的可读性。
 * - 否则返回构建时预生成的亮色色板。
 */
export function resolvePalette(name: AntColorName, isDark: boolean): readonly string[] {
  if (!isDark) {
    return ANT_COLOR_PALETTES[name]
  }
  return generate(ANT_COLOR_SEEDS[name], { theme: 'dark', backgroundColor: VP_DARK_BG })
}

/** 中文显示名 */
export const ANT_COLOR_LABELS: Record<AntColorName, string> = {
  red: '红色 / red',
  volcano: '火山红 / volcano',
  orange: '橙色 / orange',
  gold: '金色 / gold',
  yellow: '黄色 / yellow',
  lime: '青柠 / lime',
  green: '绿色 / green',
  cyan: '青色 / cyan',
  blue: '蓝色 / blue',
  geekblue: '极客蓝 / geekblue',
  purple: '紫色 / purple',
  magenta: '洋红 / magenta',
  gray: '中性灰 / gray',
}
