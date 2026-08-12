import {
  EL_DARK_DANGER,
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
  EL_DARK_DANGER_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from '../helper'

describe('el dark danger palette', () => {
  assertElPalette(
    EL_DARK_DANGER,
    [
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
    ],
    EL_DARK_DANGER_PALETTE,
    [
      '#2a1d1d',
      '#412626',
      '#582e2e',
      '#6e3737',
      '#854040',
      '#9b4949',
      '#b25252',
      '#c85a5a',
      '#df6363',
      '#f56c6c',
      '#f78989',
    ],
  )
})
