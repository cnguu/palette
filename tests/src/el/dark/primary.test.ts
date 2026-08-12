import {
  EL_DARK_PRIMARY,
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
  EL_DARK_PRIMARY_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from '../helper'

describe('el dark primary palette', () => {
  assertElPalette(
    EL_DARK_PRIMARY,
    [
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
    ],
    EL_DARK_PRIMARY_PALETTE,
    [
      '#18222b',
      '#1d3043',
      '#213d5b',
      '#264b72',
      '#2a598a',
      '#2e67a1',
      '#3375b9',
      '#3782d0',
      '#3c90e8',
      '#409eff',
      '#66b1ff',
    ],
  )
})
