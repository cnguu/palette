import { generateEl } from '../generate'

/** `#e6a23c` */
export const EL_DARK_WARNING: string = '#e6a23c'

const palette = generateEl(EL_DARK_WARNING, { mode: 'dark' })

/**
 * 0: `#292218` (light-9)
 * 1: `#3e301c` (light-8)
 * 2: `#533f20` (light-7)
 * 3: `#684d24` (light-6)
 * 4: `#7d5b28` (light-5)
 * 5: `#92692c` (light-4)
 * 6: `#a77730` (light-3)
 * 7: `#bc8634` (light-2)
 * 8: `#d19438` (light-1)
 * 9: `#e6a23c` (base)
 * 10: `#ebb563` (dark-2)
 */
export const EL_DARK_WARNING_PALETTE = Object.freeze(palette)

export const [
  EL_DARK_WARNING_0,
  EL_DARK_WARNING_1,
  EL_DARK_WARNING_2,
  EL_DARK_WARNING_3,
  EL_DARK_WARNING_4,
  EL_DARK_WARNING_5,
  EL_DARK_WARNING_6,
  EL_DARK_WARNING_7,
  EL_DARK_WARNING_8,
  EL_DARK_WARNING_9,
  EL_DARK_WARNING_10,
] = EL_DARK_WARNING_PALETTE
