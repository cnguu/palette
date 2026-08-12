import { generateEl } from '../generate'

/** `#f56c6c` */
export const EL_DARK_DANGER: string = '#f56c6c'

const palette = generateEl(EL_DARK_DANGER, { mode: 'dark' })

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
export const EL_DARK_DANGER_PALETTE = Object.freeze(palette)

export const [
  EL_DARK_DANGER_0,
  EL_DARK_DANGER_1,
  EL_DARK_DANGER_2,
  EL_DARK_DANGER_3,
  EL_DARK_DANGER_4,
  EL_DARK_DANGER_5,
  EL_DARK_DANGER_6,
  EL_DARK_DANGER_7,
  EL_DARK_DANGER_8,
  EL_DARK_DANGER_9,
  EL_DARK_DANGER_10,
] = EL_DARK_DANGER_PALETTE
