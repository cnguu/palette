import {
  ARCO_ARCOBLUE,
  ARCO_ARCOBLUE_1,
  ARCO_ARCOBLUE_2,
  ARCO_ARCOBLUE_3,
  ARCO_ARCOBLUE_4,
  ARCO_ARCOBLUE_5,
  ARCO_ARCOBLUE_6,
  ARCO_ARCOBLUE_7,
  ARCO_ARCOBLUE_8,
  ARCO_ARCOBLUE_9,
  ARCO_ARCOBLUE_10,
  ARCO_ARCOBLUE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco arcoblue palette', () => {
  assertArcoPalette(
    ARCO_ARCOBLUE,
    [
      ARCO_ARCOBLUE_1,
      ARCO_ARCOBLUE_2,
      ARCO_ARCOBLUE_3,
      ARCO_ARCOBLUE_4,
      ARCO_ARCOBLUE_5,
      ARCO_ARCOBLUE_6,
      ARCO_ARCOBLUE_7,
      ARCO_ARCOBLUE_8,
      ARCO_ARCOBLUE_9,
      ARCO_ARCOBLUE_10,
    ],
    ARCO_ARCOBLUE_PALETTE,
    [
      '#e8f3ff',
      '#bedaff',
      '#94bfff',
      '#6aa1ff',
      '#4080ff',
      '#165dff',
      '#0e42d2',
      '#072ca6',
      '#031a79',
      '#000d4d',
    ],
  )
})
