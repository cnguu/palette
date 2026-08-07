import { generate } from '@ant-design/colors'

/** `#f5222d` */
export const ANT_RED: string = '#f5222d'

const palette = generate(ANT_RED)

/**
 * 0: `#fff1f0`
 * 1: `#ffccc7`
 * 2: `#ffa39e`
 * 3: `#ff7875`
 * 4: `#ff4d4f`
 * 5: `#f5222d`
 * 6: `#cf1322`
 * 7: `#a8071a`
 * 8: `#820014`
 * 9: `#5c0011`
 */
export const ANT_RED_PALETTE = Object.freeze(palette)

export const [
  ANT_RED_0,
  ANT_RED_1,
  ANT_RED_2,
  ANT_RED_3,
  ANT_RED_4,
  ANT_RED_5,
  ANT_RED_6,
  ANT_RED_7,
  ANT_RED_8,
  ANT_RED_9,
] = ANT_RED_PALETTE
