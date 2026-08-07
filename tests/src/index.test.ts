import {
  ANT_RED,
  ANT_RED_0,
  ANT_RED_5,
  ANT_RED_9,
  ANT_RED_PALETTE,
  ANT_VOLCANO,
  ANT_VOLCANO_0,
  ANT_VOLCANO_5,
  ANT_VOLCANO_9,
  ANT_VOLCANO_PALETTE,
} from '@cnguu/palette'
import { describe, expect, it } from 'vitest'

describe('ant red palette', () => {
  it('has 10 steps', () => {
    expect(ANT_RED_PALETTE).toHaveLength(10)
  })

  it('matches Ant Design spec', () => {
    expect([...ANT_RED_PALETTE]).toEqual([
      '#fff1f0',
      '#ffccc7',
      '#ffa39e',
      '#ff7875',
      '#ff4d4f',
      '#f5222d',
      '#cf1322',
      '#a8071a',
      '#820014',
      '#5c0011',
    ])
  })

  it('is frozen', () => {
    expect(Object.isFrozen(ANT_RED_PALETTE)).toBe(true)
  })

  it('exports each step as a constant', () => {
    expect(ANT_RED_0).toBe('#fff1f0')
    expect(ANT_RED_5).toBe('#f5222d')
    expect(ANT_RED_9).toBe('#5c0011')
  })

  it('keeps step constants aligned with the palette', () => {
    expect(ANT_RED_0).toBe(ANT_RED_PALETTE[0])
    expect(ANT_RED_5).toBe(ANT_RED_PALETTE[5])
    expect(ANT_RED_9).toBe(ANT_RED_PALETTE[9])
  })

  it('exports the primary color', () => {
    expect(ANT_RED).toBe('#f5222d')
    expect(ANT_RED).toBe(ANT_RED_5)
  })
})

describe('ant volcano palette', () => {
  it('has 10 steps', () => {
    expect(ANT_VOLCANO_PALETTE).toHaveLength(10)
  })

  it('matches Ant Design spec', () => {
    expect([...ANT_VOLCANO_PALETTE]).toEqual([
      '#fff2e8',
      '#ffd8bf',
      '#ffbb96',
      '#ff9c6e',
      '#ff7a45',
      '#fa541c',
      '#d4380d',
      '#ad2102',
      '#871400',
      '#610b00',
    ])
  })

  it('is frozen', () => {
    expect(Object.isFrozen(ANT_VOLCANO_PALETTE)).toBe(true)
  })

  it('exports each step as a constant', () => {
    expect(ANT_VOLCANO_0).toBe('#fff2e8')
    expect(ANT_VOLCANO_5).toBe('#fa541c')
    expect(ANT_VOLCANO_9).toBe('#610b00')
  })

  it('keeps step constants aligned with the palette', () => {
    expect(ANT_VOLCANO_0).toBe(ANT_VOLCANO_PALETTE[0])
    expect(ANT_VOLCANO_5).toBe(ANT_VOLCANO_PALETTE[5])
    expect(ANT_VOLCANO_9).toBe(ANT_VOLCANO_PALETTE[9])
  })

  it('exports the primary color', () => {
    expect(ANT_VOLCANO).toBe('#fa541c')
    expect(ANT_VOLCANO).toBe(ANT_VOLCANO_5)
  })
})
