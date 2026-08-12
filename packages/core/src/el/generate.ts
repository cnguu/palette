/* -------------------------------------------------------------------------- */
/*  内部工具                                                                    */
/* -------------------------------------------------------------------------- */

/** 将 `#rrggbb` 色值解析为 `[r, g, b]`（0–255） */
function parseHex(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    Number.parseInt(h.slice(0, 2), 16),
    Number.parseInt(h.slice(2, 4), 16),
    Number.parseInt(h.slice(4, 6), 16),
  ]
}

/** 将 0–255 的 rgb 分量格式化为 `#rrggbb` */
function toHex(r: number, g: number, b: number): string {
  const t = (v: number): string => Math.round(v).toString(16).padStart(2, '0')
  return `#${t(r)}${t(g)}${t(b)}`
}

/**
 * 线性 RGB 颜色混合（模拟 Sass `color.mix`）。
 *
 * @param color1     权重色
 * @param color2     被混合色
 * @param percentage `color1` 所占百分比（0–100）
 */
function mixColor(color1: string, color2: string, percentage: number): string {
  const p = percentage / 100
  const [r1, g1, b1] = parseHex(color1)
  const [r2, g2, b2] = parseHex(color2)
  return toHex(r1 * p + r2 * (1 - p), g1 * p + g2 * (1 - p), b1 * p + b2 * (1 - p))
}

/* -------------------------------------------------------------------------- */
/*  generate                                                                   */
/* -------------------------------------------------------------------------- */

/** 生成模式 */
export type ElGenerateMode = 'light' | 'dark'

/** `generate` 的配置项 */
export interface ElGenerateOptions {
  /** 生成模式，默认 `'light'` */
  mode?: ElGenerateMode
  /** 暗黑模式下的背景底色，默认 `'#141414'` */
  backgroundColor?: string
}

const WHITE = '#ffffff'
const BLACK = '#000000'
const DEFAULT_DARK_BG = '#141414'

/**
 * 生成 Element Plus 风格的调色板。
 *
 * 算法与 Element Plus 官方 SCSS 一致：light 阶梯由主色与白色（亮色模式）
 * 或背景色（暗黑模式）线性混合得到，dark-2 由主色与黑色（亮色模式）或
 * 白色（暗黑模式）混合 20% 得到。
 *
 * 返回的 11 级色阶按从浅到深排列：
 * `[light-9, light-8, ..., light-1, base, dark-2]`（主色 `base` 位于索引 9）。
 *
 * @param baseColor 主色，形如 `#409eff`
 * @param options   可选配置
 *
 * @example
 * ```ts
 * import { generateEl } from '@cnguu/palette'
 *
 * // 亮色模式（默认）
 * generateEl('#409eff')
 *
 * // 暗黑模式，自定义背景色
 * generateEl('#409eff', { mode: 'dark', backgroundColor: '#1b1b1f' })
 * ```
 */
export function generateEl(
  baseColor: string,
  options: ElGenerateOptions = {},
): readonly string[] {
  const { mode = 'light', backgroundColor = DEFAULT_DARK_BG } = options

  // 亮色模式：light 阶梯混入白，dark 阶梯混入黑
  // 暗黑模式：light 阶梯混入暗黑背景，dark 阶梯反向混入白
  const mixBaseForLight = mode === 'dark' ? backgroundColor : WHITE
  const mixBaseForDark = mode === 'dark' ? WHITE : BLACK

  const palette: string[] = []

  // light-9 → light-1（从最浅到最接近主色）
  for (let i = 9; i >= 1; i--) {
    palette.push(mixColor(mixBaseForLight, baseColor, i * 10))
  }

  // base（主色）
  palette.push(baseColor)

  // dark-2（混入 20% 反向色）
  palette.push(mixColor(mixBaseForDark, baseColor, 20))

  return Object.freeze(palette)
}
