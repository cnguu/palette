import { generateEl } from './generate'

/** `#409eff` */
export const EL_PRIMARY: string = '#409eff'

const palette = generateEl(EL_PRIMARY)

/**
 * 0: `#ecf5ff` (light-9)
 * 1: `#d9ecff` (light-8)
 * 2: `#c6e2ff` (light-7)
 * 3: `#b3d8ff` (light-6)
 * 4: `#a0cfff` (light-5)
 * 5: `#8cc5ff` (light-4)
 * 6: `#79bbff` (light-3)
 * 7: `#66b1ff` (light-2)
 * 8: `#53a8ff` (light-1)
 * 9: `#409eff` (base)
 * 10: `#337ecc` (dark-2)
 */
export const EL_PRIMARY_PALETTE = Object.freeze(palette)

export const [
  EL_PRIMARY_0,
  EL_PRIMARY_1,
  EL_PRIMARY_2,
  EL_PRIMARY_3,
  EL_PRIMARY_4,
  EL_PRIMARY_5,
  EL_PRIMARY_6,
  EL_PRIMARY_7,
  EL_PRIMARY_8,
  EL_PRIMARY_9,
  EL_PRIMARY_10,
] = EL_PRIMARY_PALETTE
