import { generateEl } from './generate'

/** `#67c23a` */
export const EL_SUCCESS: string = '#67c23a'

const palette = generateEl(EL_SUCCESS)

/**
 * 0: `#f0f9eb` (light-9)
 * 1: `#e1f3d8` (light-8)
 * 2: `#d1edc4` (light-7)
 * 3: `#c2e7b0` (light-6)
 * 4: `#b3e19d` (light-5)
 * 5: `#a4da89` (light-4)
 * 6: `#95d475` (light-3)
 * 7: `#85ce61` (light-2)
 * 8: `#76c84e` (light-1)
 * 9: `#67c23a` (base)
 * 10: `#529b2e` (dark-2)
 */
export const EL_SUCCESS_PALETTE = Object.freeze(palette)

export const [
  EL_SUCCESS_0,
  EL_SUCCESS_1,
  EL_SUCCESS_2,
  EL_SUCCESS_3,
  EL_SUCCESS_4,
  EL_SUCCESS_5,
  EL_SUCCESS_6,
  EL_SUCCESS_7,
  EL_SUCCESS_8,
  EL_SUCCESS_9,
  EL_SUCCESS_10,
] = EL_SUCCESS_PALETTE
