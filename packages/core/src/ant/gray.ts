import { generate } from '@ant-design/colors'

/** `#bfbfbf` */
export const ANT_GRAY: string = '#bfbfbf'

const palette = generate(ANT_GRAY)

/**
 * 0: `#ffffff`
 * 1: `#f2f2f2`
 * 2: `#e6e6e6`
 * 3: `#d9d9d9`
 * 4: `#cccccc`
 * 5: `#bfbfbf`
 * 6: `#999999`
 * 7: `#737373`
 * 8: `#4d4d4d`
 * 9: `#262626`
 */
export const ANT_GRAY_PALETTE = Object.freeze(palette)

export const [
  ANT_GRAY_0,
  ANT_GRAY_1,
  ANT_GRAY_2,
  ANT_GRAY_3,
  ANT_GRAY_4,
  ANT_GRAY_5,
  ANT_GRAY_6,
  ANT_GRAY_7,
  ANT_GRAY_8,
  ANT_GRAY_9,
] = ANT_GRAY_PALETTE
