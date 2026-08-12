import { generateEl } from './generate'

/** `#909399` */
export const EL_INFO: string = '#909399'

const palette = generateEl(EL_INFO)

/**
 * 0: `#f4f4f5` (light-9)
 * 1: `#e9e9eb` (light-8)
 * 2: `#dedfe0` (light-7)
 * 3: `#d3d4d6` (light-6)
 * 4: `#c8c9cc` (light-5)
 * 5: `#bcbec2` (light-4)
 * 6: `#b1b3b8` (light-3)
 * 7: `#a6a9ad` (light-2)
 * 8: `#9b9ea3` (light-1)
 * 9: `#909399` (base)
 * 10: `#73767a` (dark-2)
 */
export const EL_INFO_PALETTE = Object.freeze(palette)

export const [
  EL_INFO_0,
  EL_INFO_1,
  EL_INFO_2,
  EL_INFO_3,
  EL_INFO_4,
  EL_INFO_5,
  EL_INFO_6,
  EL_INFO_7,
  EL_INFO_8,
  EL_INFO_9,
  EL_INFO_10,
] = EL_INFO_PALETTE
