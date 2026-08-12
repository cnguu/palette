import { generateEl } from '../generate'

/** `#409eff` */
export const EL_DARK_PRIMARY: string = '#409eff'

const palette = generateEl(EL_DARK_PRIMARY, { mode: 'dark' })

/**
 * 0: `#18222b` (light-9)
 * 1: `#1d3043` (light-8)
 * 2: `#213d5b` (light-7)
 * 3: `#264b72` (light-6)
 * 4: `#2a598a` (light-5)
 * 5: `#2e67a1` (light-4)
 * 6: `#3375b9` (light-3)
 * 7: `#3782d0` (light-2)
 * 8: `#3c90e8` (light-1)
 * 9: `#409eff` (base)
 * 10: `#66b1ff` (dark-2)
 */
export const EL_DARK_PRIMARY_PALETTE = Object.freeze(palette)

export const [
  EL_DARK_PRIMARY_0,
  EL_DARK_PRIMARY_1,
  EL_DARK_PRIMARY_2,
  EL_DARK_PRIMARY_3,
  EL_DARK_PRIMARY_4,
  EL_DARK_PRIMARY_5,
  EL_DARK_PRIMARY_6,
  EL_DARK_PRIMARY_7,
  EL_DARK_PRIMARY_8,
  EL_DARK_PRIMARY_9,
  EL_DARK_PRIMARY_10,
] = EL_DARK_PRIMARY_PALETTE
