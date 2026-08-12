import {
  ARCO_YELLOW,
  ARCO_YELLOW_1,
  ARCO_YELLOW_2,
  ARCO_YELLOW_3,
  ARCO_YELLOW_4,
  ARCO_YELLOW_5,
  ARCO_YELLOW_6,
  ARCO_YELLOW_7,
  ARCO_YELLOW_8,
  ARCO_YELLOW_9,
  ARCO_YELLOW_10,
  ARCO_YELLOW_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco yellow palette', () => {
  assertArcoPalette(
    ARCO_YELLOW,
    [
      ARCO_YELLOW_1,
      ARCO_YELLOW_2,
      ARCO_YELLOW_3,
      ARCO_YELLOW_4,
      ARCO_YELLOW_5,
      ARCO_YELLOW_6,
      ARCO_YELLOW_7,
      ARCO_YELLOW_8,
      ARCO_YELLOW_9,
      ARCO_YELLOW_10,
    ],
    ARCO_YELLOW_PALETTE,
    [
      '#feffe8',
      '#fefebe',
      '#fdfa94',
      '#fcf26b',
      '#fbe842',
      '#fadc19',
      '#cfa60f',
      '#a38408',
      '#785d03',
      '#4d3800',
    ],
  )
})
