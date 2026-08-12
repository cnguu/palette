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
  ARCO_ARCOBLUE,
  ARCO_ARCOBLUE_PALETTE,
  ARCO_BLUE,
  ARCO_BLUE_PALETTE,
  ARCO_CYAN,
  ARCO_CYAN_PALETTE,
  ARCO_DARK_ARCOBLUE,
  ARCO_DARK_ARCOBLUE_PALETTE,
  ARCO_DARK_BLUE,
  ARCO_DARK_BLUE_PALETTE,
  ARCO_DARK_CYAN,
  ARCO_DARK_CYAN_PALETTE,
  ARCO_DARK_GOLD,
  ARCO_DARK_GOLD_PALETTE,
  ARCO_DARK_GRAY,
  ARCO_DARK_GRAY_PALETTE,
  ARCO_DARK_GREEN,
  ARCO_DARK_GREEN_PALETTE,
  ARCO_DARK_LIME,
  ARCO_DARK_LIME_PALETTE,
  ARCO_DARK_MAGENTA,
  ARCO_DARK_MAGENTA_PALETTE,
  ARCO_DARK_ORANGE,
  ARCO_DARK_ORANGE_PALETTE,
  ARCO_DARK_ORANGERED,
  ARCO_DARK_ORANGERED_PALETTE,
  ARCO_DARK_PINKPURPLE,
  ARCO_DARK_PINKPURPLE_PALETTE,
  ARCO_DARK_PURPLE,
  ARCO_DARK_PURPLE_PALETTE,
  ARCO_DARK_RED,
  ARCO_DARK_RED_PALETTE,
  ARCO_DARK_YELLOW,
  ARCO_DARK_YELLOW_PALETTE,
  ARCO_GOLD,
  ARCO_GOLD_PALETTE,
  ARCO_GRAY,
  ARCO_GRAY_PALETTE,
  ARCO_GREEN,
  ARCO_GREEN_PALETTE,
  ARCO_LIME,
  ARCO_LIME_PALETTE,
  ARCO_MAGENTA,
  ARCO_MAGENTA_PALETTE,
  ARCO_ORANGE,
  ARCO_ORANGE_PALETTE,
  ARCO_ORANGERED,
  ARCO_ORANGERED_PALETTE,
  ARCO_PINKPURPLE,
  ARCO_PINKPURPLE_PALETTE,
  ARCO_PURPLE,
  ARCO_PURPLE_PALETTE,
  ARCO_RED,
  ARCO_RED_PALETTE,
  ARCO_YELLOW,
  ARCO_YELLOW_PALETTE,
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

/* -------------------------------------------------------------------------- */
/*  Arco Design                                                                */
/* -------------------------------------------------------------------------- */

/** Arco Design 基础色的展示名称（kebab-case） */
export const ARCO_COLOR_NAMES = [
  'red',
  'orangered',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
] as const

export type ArcoColorName = (typeof ARCO_COLOR_NAMES)[number]

/** 色阶到对应基础色（seed color）的映射 */
export const ARCO_COLOR_SEEDS: Record<ArcoColorName, string> = {
  red: ARCO_RED,
  orangered: ARCO_ORANGERED,
  orange: ARCO_ORANGE,
  gold: ARCO_GOLD,
  yellow: ARCO_YELLOW,
  lime: ARCO_LIME,
  green: ARCO_GREEN,
  cyan: ARCO_CYAN,
  blue: ARCO_BLUE,
  arcoblue: ARCO_ARCOBLUE,
  purple: ARCO_PURPLE,
  pinkpurple: ARCO_PINKPURPLE,
  magenta: ARCO_MAGENTA,
  gray: ARCO_GRAY,
}

/** 色阶到对应调色板数组的映射 */
export const ARCO_COLOR_PALETTES: Record<ArcoColorName, readonly string[]> = {
  red: ARCO_RED_PALETTE,
  orangered: ARCO_ORANGERED_PALETTE,
  orange: ARCO_ORANGE_PALETTE,
  gold: ARCO_GOLD_PALETTE,
  yellow: ARCO_YELLOW_PALETTE,
  lime: ARCO_LIME_PALETTE,
  green: ARCO_GREEN_PALETTE,
  cyan: ARCO_CYAN_PALETTE,
  blue: ARCO_BLUE_PALETTE,
  arcoblue: ARCO_ARCOBLUE_PALETTE,
  purple: ARCO_PURPLE_PALETTE,
  pinkpurple: ARCO_PINKPURPLE_PALETTE,
  magenta: ARCO_MAGENTA_PALETTE,
  gray: ARCO_GRAY_PALETTE,
}

/** Arco Design 暗黑色板映射（亮色↔暗色版一一对应） */
export const ARCO_DARK_COLOR_PALETTES: Record<ArcoColorName, readonly string[]> = {
  red: ARCO_DARK_RED_PALETTE,
  orangered: ARCO_DARK_ORANGERED_PALETTE,
  orange: ARCO_DARK_ORANGE_PALETTE,
  gold: ARCO_DARK_GOLD_PALETTE,
  yellow: ARCO_DARK_YELLOW_PALETTE,
  lime: ARCO_DARK_LIME_PALETTE,
  green: ARCO_DARK_GREEN_PALETTE,
  cyan: ARCO_DARK_CYAN_PALETTE,
  blue: ARCO_DARK_BLUE_PALETTE,
  arcoblue: ARCO_DARK_ARCOBLUE_PALETTE,
  purple: ARCO_DARK_PURPLE_PALETTE,
  pinkpurple: ARCO_DARK_PINKPURPLE_PALETTE,
  magenta: ARCO_DARK_MAGENTA_PALETTE,
  gray: ARCO_DARK_GRAY_PALETTE,
}

/** Arco Design 暗黑色板主色映射 */
export const ARCO_DARK_COLOR_SEEDS: Record<ArcoColorName, string> = {
  red: ARCO_DARK_RED,
  orangered: ARCO_DARK_ORANGERED,
  orange: ARCO_DARK_ORANGE,
  gold: ARCO_DARK_GOLD,
  yellow: ARCO_DARK_YELLOW,
  lime: ARCO_DARK_LIME,
  green: ARCO_DARK_GREEN,
  cyan: ARCO_DARK_CYAN,
  blue: ARCO_DARK_BLUE,
  arcoblue: ARCO_DARK_ARCOBLUE,
  purple: ARCO_DARK_PURPLE,
  pinkpurple: ARCO_DARK_PINKPURPLE,
  magenta: ARCO_DARK_MAGENTA,
  gray: ARCO_DARK_GRAY,
}

/**
 * 根据主题返回 Arco 调色板：
 * - 暗色模式：使用 Arco Design 官方预定义深色板（`ARCO_DARK_*`）；
 * - 亮色模式：返回构建时生成的 `ARCO_*_PALETTE`。
 *
 * 与 Ant Design 不同，Arco 的色阶在构建产物中以 `ARCO_DARK_*_PALETTE` 形式
 * 静态提供，因此 `resolveArcoPalette` 不再调用 `@ant-design/colors` 动态生成。
 */
export function resolveArcoPalette(name: ArcoColorName, isDark: boolean): readonly string[] {
  if (!isDark) {
    return ARCO_COLOR_PALETTES[name]
  }
  return ARCO_DARK_COLOR_PALETTES[name]
}

/** 中文显示名 */
export const ARCO_COLOR_LABELS: Record<ArcoColorName, string> = {
  red: '浪漫红 / red',
  orangered: '晚秋红 / orangered',
  orange: '活力橙 / orange',
  gold: '黄昏 / gold',
  yellow: '柠檬黄 / yellow',
  lime: '新生绿 / lime',
  green: '仙野绿 / green',
  cyan: '碧涛青 / cyan',
  blue: '海蔚蓝 / blue',
  arcoblue: '极致蓝 / arcoblue',
  purple: '暗夜紫 / purple',
  pinkpurple: '青春紫 / pinkpurple',
  magenta: '品红 / magenta',
  gray: '中性灰 / gray',
}
