import {
  ARCO_GOLD,
  ARCO_GOLD_1,
  ARCO_GOLD_2,
  ARCO_GOLD_3,
  ARCO_GOLD_4,
  ARCO_GOLD_5,
  ARCO_GOLD_6,
  ARCO_GOLD_7,
  ARCO_GOLD_8,
  ARCO_GOLD_9,
  ARCO_GOLD_10,
  ARCO_GOLD_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco gold palette', () => {
  assertArcoPalette(
    ARCO_GOLD,
    [
      ARCO_GOLD_1,
      ARCO_GOLD_2,
      ARCO_GOLD_3,
      ARCO_GOLD_4,
      ARCO_GOLD_5,
      ARCO_GOLD_6,
      ARCO_GOLD_7,
      ARCO_GOLD_8,
      ARCO_GOLD_9,
      ARCO_GOLD_10,
    ],
    ARCO_GOLD_PALETTE,
    [
      '#fffce8',
      '#fdf4bf',
      '#fce996',
      '#fadc6d',
      '#f9cc45',
      '#f7ba1e',
      '#cc9213',
      '#a26d0a',
      '#774b04',
      '#4d2d00',
    ],
  )
})
