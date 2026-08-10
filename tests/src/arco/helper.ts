import { expect, it } from 'vitest'

/**
 * 一个 10 级 Arco Design 调色板的通用断言集合。
 *
 * @param primary   主色常量
 * @param steps     10 个单独导出的色阶常量 [0..9]
 * @param palette   调色板数组
 * @param expected  期望的 10 个十六进制色值
 */
export function assertArcoPalette(
  primary: string,
  steps: readonly string[],
  palette: readonly string[],
  expected: readonly string[],
): void {
  it('has 10 steps', () => {
    expect(palette).toHaveLength(10)
  })

  it('matches Arco Design spec', () => {
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
    expect(primary).toBe(expected[5])
    expect(primary).toBe(steps[5])
  })
}
