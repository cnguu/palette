import { generateEl } from './generate'

/** `#f56c6c` */
export const EL_DANGER: string = '#f56c6c'

const palette = generateEl(EL_DANGER)

/**
 * 0: `#fef0f0` (light-9)
 * 1: `#fde2e2` (light-8)
 * 2: `#fcd3d3` (light-7)
 * 3: `#fbc4c4` (light-6)
 * 4: `#fab6b6` (light-5)
 * 5: `#f9a7a7` (light-4)
 * 6: `#f89898` (light-3)
 * 7: `#f78989` (light-2)
 * 8: `#f67b7b` (light-1)
 * 9: `#f56c6c` (base)
 * 10: `#c45656` (dark-2)
 */
export const EL_DANGER_PALETTE = Object.freeze(palette)

export const [
  EL_DANGER_0,
  EL_DANGER_1,
  EL_DANGER_2,
  EL_DANGER_3,
  EL_DANGER_4,
  EL_DANGER_5,
  EL_DANGER_6,
  EL_DANGER_7,
  EL_DANGER_8,
  EL_DANGER_9,
  EL_DANGER_10,
] = EL_DANGER_PALETTE
