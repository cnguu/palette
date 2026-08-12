import { generateEl } from '../generate'

/** `#f56c6c` */
export const EL_DARK_ERROR: string = '#f56c6c'

const palette = generateEl(EL_DARK_ERROR, { mode: 'dark' })

/**
 * 0: `#2a1d1d` (light-9)
 * 1: `#412626` (light-8)
 * 2: `#582e2e` (light-7)
 * 3: `#6e3737` (light-6)
 * 4: `#854040` (light-5)
 * 5: `#9b4949` (light-4)
 * 6: `#b25252` (light-3)
 * 7: `#c85a5a` (light-2)
 * 8: `#df6363` (light-1)
 * 9: `#f56c6c` (base)
 * 10: `#f78989` (dark-2)
 */
export const EL_DARK_ERROR_PALETTE = Object.freeze(palette)

export const [
  EL_DARK_ERROR_0,
  EL_DARK_ERROR_1,
  EL_DARK_ERROR_2,
  EL_DARK_ERROR_3,
  EL_DARK_ERROR_4,
  EL_DARK_ERROR_5,
  EL_DARK_ERROR_6,
  EL_DARK_ERROR_7,
  EL_DARK_ERROR_8,
  EL_DARK_ERROR_9,
  EL_DARK_ERROR_10,
] = EL_DARK_ERROR_PALETTE
