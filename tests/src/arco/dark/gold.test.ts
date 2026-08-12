import {
  ARCO_DARK_GOLD,
  ARCO_DARK_GOLD_1,
  ARCO_DARK_GOLD_2,
  ARCO_DARK_GOLD_3,
  ARCO_DARK_GOLD_4,
  ARCO_DARK_GOLD_5,
  ARCO_DARK_GOLD_6,
  ARCO_DARK_GOLD_7,
  ARCO_DARK_GOLD_8,
  ARCO_DARK_GOLD_9,
  ARCO_DARK_GOLD_10,
  ARCO_DARK_GOLD_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark gold palette', () => {
  assertArcoPalette(
    ARCO_DARK_GOLD,
    [
      ARCO_DARK_GOLD_1,
      ARCO_DARK_GOLD_2,
      ARCO_DARK_GOLD_3,
      ARCO_DARK_GOLD_4,
      ARCO_DARK_GOLD_5,
      ARCO_DARK_GOLD_6,
      ARCO_DARK_GOLD_7,
      ARCO_DARK_GOLD_8,
      ARCO_DARK_GOLD_9,
      ARCO_DARK_GOLD_10,
    ],
    ARCO_DARK_GOLD_PALETTE,
    [
      '#4d2d00',
      '#774b04',
      '#a26f0f',
      '#cc961f',
      '#f7c034',
      '#f9cc44',
      '#fadc6c',
      '#fce995',
      '#fdf4be',
      '#fffce8',
    ],
  )
})
