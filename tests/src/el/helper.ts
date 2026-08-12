import { expect, it } from 'vitest'

/**
 * 一个 11 级 Element Plus 调色板的通用断言集合。
 *
 * 色阶顺序为 `[light-9, light-8, ..., light-1, base, dark-2]`，
 * 主色 `base` 位于索引 9。
 *
 * @param primary   主色常量
 * @param steps     11 个单独导出的色阶常量 [0..10]
 * @param palette   调色板数组
 * @param expected  期望的 11 个十六进制色值
 */
export function assertElPalette(
  primary: string,
  steps: readonly string[],
  palette: readonly string[],
  expected: readonly string[],
): void {
  it('has 11 steps', () => {
    expect(palette).toHaveLength(11)
  })

  it('matches Element Plus spec', () => {
    expect([...palette]).toEqual([...expected])
  })

  it('is frozen', () => {
    expect(Object.isFrozen(palette)).toBe(true)
  })

  it('exports each step as a constant', () => {
    steps.forEach((step, i) => {
      expect(step).toBe(expected[i])
    })
  })

  it('keeps step constants aligned with the palette', () => {
    steps.forEach((step, i) => {
      expect(step).toBe(palette[i])
    })
  })

  it('exports the primary color', () => {
    expect(primary).toBe(expected[9])
    expect(primary).toBe(steps[9])
  })
}
