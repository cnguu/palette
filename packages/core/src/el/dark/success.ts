import { generateEl } from '../generate'

/** `#67c23a` */
export const EL_DARK_SUCCESS: string = '#67c23a'

const palette = generateEl(EL_DARK_SUCCESS, { mode: 'dark' })

/**
 * 0: `#1c2518` (light-9)
 * 1: `#25371c` (light-8)
 * 2: `#2d481f` (light-7)
 * 3: `#355a23` (light-6)
 * 4: `#3e6b27` (light-5)
 * 5: `#467c2b` (light-4)
 * 6: `#4e8e2f` (light-3)
 * 7: `#569f32` (light-2)
 * 8: `#5fb136` (light-1)
 * 9: `#67c23a` (base)
 * 10: `#85ce61` (dark-2)
 */
export const EL_DARK_SUCCESS_PALETTE = Object.freeze(palette)

export const [
  EL_DARK_SUCCESS_0,
  EL_DARK_SUCCESS_1,
  EL_DARK_SUCCESS_2,
  EL_DARK_SUCCESS_3,
  EL_DARK_SUCCESS_4,
  EL_DARK_SUCCESS_5,
  EL_DARK_SUCCESS_6,
  EL_DARK_SUCCESS_7,
  EL_DARK_SUCCESS_8,
  EL_DARK_SUCCESS_9,
  EL_DARK_SUCCESS_10,
] = EL_DARK_SUCCESS_PALETTE
