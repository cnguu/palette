import {
  EL_PRIMARY,
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
  EL_PRIMARY_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from './helper'

describe('el primary palette', () => {
  assertElPalette(
    EL_PRIMARY,
    [
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
    ],
    EL_PRIMARY_PALETTE,
    [
      '#ecf5ff',
      '#d9ecff',
      '#c6e2ff',
      '#b3d8ff',
      '#a0cfff',
      '#8cc5ff',
      '#79bbff',
      '#66b1ff',
      '#53a8ff',
      '#409eff',
      '#337ecc',
    ],
  )
})
