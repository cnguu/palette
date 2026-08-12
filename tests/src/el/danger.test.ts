import {
  EL_DANGER,
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
  EL_DANGER_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from './helper'

describe('el danger palette', () => {
  assertElPalette(
    EL_DANGER,
    [
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
    ],
    EL_DANGER_PALETTE,
    [
      '#fef0f0',
      '#fde2e2',
      '#fcd3d3',
      '#fbc4c4',
      '#fab6b6',
      '#f9a7a7',
      '#f89898',
      '#f78989',
      '#f67b7b',
      '#f56c6c',
      '#c45656',
    ],
  )
})
