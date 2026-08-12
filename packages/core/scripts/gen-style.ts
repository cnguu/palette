import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/* -------------------------------------------------------------------------- */
/*  类型定义                                                                    */
/* -------------------------------------------------------------------------- */

/** 支持的样式文件类型 */
export type StyleType = 'less' | 'sass' | 'stylus'

/** 设计规范配置 */
export interface DesignConfig {
  /** 设计规范标识，用作输出文件名，如 `ant` → `dist/ant.less` */
  design: string
  /** 导出常量名前缀，如 `ANT_RED_PALETTE` 中的 `ANT` */
  constPrefix: string
  /** 样式变量名前缀，如 `ant-red` */
  stylePrefix: string
  /** 主色在色阶数组中的索引 */
  primaryIndex: number
}

/** 样式类型格式化器：将变量名 + 色值转为该类型的单行声明 */
export type StyleFormatter = (name: string, value: string) => string

/* -------------------------------------------------------------------------- */
/*  样式类型注册表                                                              */
/* -------------------------------------------------------------------------- */

/** 各样式类型的变量格式化器 */
const STYLE_FORMATTERS: Record<StyleType, StyleFormatter> = {
  less: (name, value) => `@${name}: ${value};`,
  sass: (name, value) => `$${name}: ${value};`,
  stylus: (name, value) => `${name} = ${value}`,
}

/** 各样式类型的文件扩展名 */
const STYLE_EXTENSIONS: Record<StyleType, string> = {
  less: 'less',
  sass: 'scss',
  stylus: 'styl',
}

/* -------------------------------------------------------------------------- */
/*  设计规范配置                                                                */
/* -------------------------------------------------------------------------- */

/**
 * 设计规范配置列表。
 *
 * 新增设计规范时追加一项即可，色板名称会从构建产物中自动扫描，
 * 无需在此手动维护色板列表。
 */
const DESIGNS: readonly DesignConfig[] = [
  {
    design: 'ant',
    constPrefix: 'ANT',
    stylePrefix: 'ant-',
    primaryIndex: 5,
  },
  {
    design: 'arco',
    constPrefix: 'ARCO',
    stylePrefix: 'arco-',
    primaryIndex: 5,
  },
  {
    design: 'el',
    constPrefix: 'EL',
    stylePrefix: 'el-',
    primaryIndex: 9,
  },
]

/** 当前需要生成的样式类型（后续扩展时追加即可） */
const STYLE_TYPES: readonly StyleType[] = ['less', 'sass', 'stylus']

/* -------------------------------------------------------------------------- */
/*  核心逻辑                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * 从构建产物模块中扫描指定设计规范的全部色板。
 *
 * 自动匹配形如 `${constPrefix}_xxx_PALETTE` 的导出，并提取 `xxx` 作为色板名称
 * （转为 kebab-case，如 `GEEKBLUE` → `geekblue`）。
 */
function collectPalettes(
  mod: Record<string, unknown>,
  config: DesignConfig,
): Map<string, readonly string[]> {
  const pattern = new RegExp(`^${config.constPrefix}_(.+)_PALETTE$`)
  const result = new Map<string, readonly string[]>()

  for (const key of Object.keys(mod)) {
    const match = key.match(pattern)
    if (!match)
      continue
    const rawName = match[1]
    const name = rawName.toLowerCase().replace(/_/g, '-')
    const palette = mod[key] as readonly string[] | undefined
    if (Array.isArray(palette)) {
      result.set(name, palette)
    }
  }

  return result
}

/** 将单个设计规范的调色板生成为指定类型的样式文件 */
function genDesignFile(
  mod: Record<string, unknown>,
  config: DesignConfig,
  styleType: StyleType,
): void {
  const formatter = STYLE_FORMATTERS[styleType]
  const ext = STYLE_EXTENSIONS[styleType]
  const palettes = collectPalettes(mod, config)

  if (palettes.size === 0) {
    console.warn(`\n⚠ no palettes found for design "${config.design}"`)
    return
  }

  const blocks: string[] = []
  for (const [name, palette] of palettes) {
    const lines = [formatter(`${config.stylePrefix}${name}`, palette[config.primaryIndex])]
    palette.forEach((color, i) => {
      lines.push(formatter(`${config.stylePrefix}${name}-${i}`, color))
    })
    blocks.push(lines.join('\n'))
  }

  const dest = resolve(`dist/${config.design}.${ext}`)
  writeFileSync(dest, `${blocks.join('\n\n')}\n`, 'utf8')
  console.log(`\n✓ wrote ${dest}`)
}

/**
 * 生成全部样式文件。
 *
 * 在 `tsdown.config.ts` 的 `onSuccess` 中调用，从已构建的 ESM 产物
 * `dist/index.js` 读取色板常量，按 `DESIGNS × STYLE_TYPES` 笛卡尔积
 * 生成对应的样式文件。
 */
export async function genStyleFiles(): Promise<void> {
  const mod = await import(pathToFileURL(resolve('dist/index.js')).href) as Record<string, unknown>

  for (const design of DESIGNS) {
    for (const styleType of STYLE_TYPES) {
      genDesignFile(mod, design, styleType)
    }
  }
}
