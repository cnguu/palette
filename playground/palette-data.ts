import {
  ANT_BLUE_PALETTE,
  ANT_CYAN_PALETTE,
  ANT_GEEKBBLUE_PALETTE,
  ANT_GOLD_PALETTE,
  ANT_GRAY_PALETTE,
  ANT_GREEN_PALETTE,
  ANT_LIME_PALETTE,
  ANT_MAGENTA_PALETTE,
  ANT_ORANGE_PALETTE,
  ANT_PURPLE_PALETTE,
  ANT_RED_PALETTE,
  ANT_VOLCANO_PALETTE,
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

/** 色阶到对应调色板数组的映射 */
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
  geekblue: ANT_GEEKBBLUE_PALETTE,
  purple: ANT_PURPLE_PALETTE,
  magenta: ANT_MAGENTA_PALETTE,
  gray: ANT_GRAY_PALETTE,
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
