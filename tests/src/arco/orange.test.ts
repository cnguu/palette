import {
  ARCO_ORANGE,
  ARCO_ORANGE_1,
  ARCO_ORANGE_2,
  ARCO_ORANGE_3,
  ARCO_ORANGE_4,
  ARCO_ORANGE_5,
  ARCO_ORANGE_6,
  ARCO_ORANGE_7,
  ARCO_ORANGE_8,
  ARCO_ORANGE_9,
  ARCO_ORANGE_10,
  ARCO_ORANGE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco orange palette', () => {
  assertArcoPalette(
    ARCO_ORANGE,
    [
      ARCO_ORANGE_1,
      ARCO_ORANGE_2,
      ARCO_ORANGE_3,
      ARCO_ORANGE_4,
      ARCO_ORANGE_5,
      ARCO_ORANGE_6,
      ARCO_ORANGE_7,
      ARCO_ORANGE_8,
      ARCO_ORANGE_9,
      ARCO_ORANGE_10,
    ],
    ARCO_ORANGE_PALETTE,
    [
      '#fff7e8',
      '#ffe4ba',
      '#ffcf8b',
      '#ffb65d',
      '#ff9a2e',
      '#ff7d00',
      '#d25f00',
      '#a64500',
      '#792e00',
      '#4d1b00',
    ],
  )
})
