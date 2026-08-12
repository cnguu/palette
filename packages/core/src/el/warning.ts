import { generateEl } from './generate'

/** `#e6a23c` */
export const EL_WARNING: string = '#e6a23c'

const palette = generateEl(EL_WARNING)

/**
 * 0: `#fdf6ec` (light-9)
 * 1: `#faecd8` (light-8)
 * 2: `#f8e3c5` (light-7)
 * 3: `#f5dab1` (light-6)
 * 4: `#f3d19e` (light-5)
 * 5: `#f0c78a` (light-4)
 * 6: `#eebe77` (light-3)
 * 7: `#ebb563` (light-2)
 * 8: `#e9ab50` (light-1)
 * 9: `#e6a23c` (base)
 * 10: `#b88230` (dark-2)
 */
export const EL_WARNING_PALETTE = Object.freeze(palette)

export const [
  EL_WARNING_0,
  EL_WARNING_1,
  EL_WARNING_2,
  EL_WARNING_3,
  EL_WARNING_4,
  EL_WARNING_5,
  EL_WARNING_6,
  EL_WARNING_7,
  EL_WARNING_8,
  EL_WARNING_9,
  EL_WARNING_10,
] = EL_WARNING_PALETTE
