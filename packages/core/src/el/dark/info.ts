import { generateEl } from '../generate'

/** `#909399` */
export const EL_DARK_INFO: string = '#909399'

const palette = generateEl(EL_DARK_INFO, { mode: 'dark' })

/**
 * 0: `#202121` (light-9)
 * 1: `#2d2d2f` (light-8)
 * 2: `#393a3c` (light-7)
 * 3: `#464749` (light-6)
 * 4: `#525457` (light-5)
 * 5: `#5e6064` (light-4)
 * 6: `#6b6d71` (light-3)
 * 7: `#777a7e` (light-2)
 * 8: `#84868c` (light-1)
 * 9: `#909399` (base)
 * 10: `#a6a9ad` (dark-2)
 */
export const EL_DARK_INFO_PALETTE = Object.freeze(palette)

export const [
  EL_DARK_INFO_0,
  EL_DARK_INFO_1,
  EL_DARK_INFO_2,
  EL_DARK_INFO_3,
  EL_DARK_INFO_4,
  EL_DARK_INFO_5,
  EL_DARK_INFO_6,
  EL_DARK_INFO_7,
  EL_DARK_INFO_8,
  EL_DARK_INFO_9,
  EL_DARK_INFO_10,
] = EL_DARK_INFO_PALETTE
