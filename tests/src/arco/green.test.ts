import {
  ARCO_GREEN,
  ARCO_GREEN_1,
  ARCO_GREEN_2,
  ARCO_GREEN_3,
  ARCO_GREEN_4,
  ARCO_GREEN_5,
  ARCO_GREEN_6,
  ARCO_GREEN_7,
  ARCO_GREEN_8,
  ARCO_GREEN_9,
  ARCO_GREEN_10,
  ARCO_GREEN_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco green palette', () => {
  assertArcoPalette(
    ARCO_GREEN,
    [
      ARCO_GREEN_1,
      ARCO_GREEN_2,
      ARCO_GREEN_3,
      ARCO_GREEN_4,
      ARCO_GREEN_5,
      ARCO_GREEN_6,
      ARCO_GREEN_7,
      ARCO_GREEN_8,
      ARCO_GREEN_9,
      ARCO_GREEN_10,
    ],
    ARCO_GREEN_PALETTE,
    [
      '#e8ffea',
      '#aff0b5',
      '#7be188',
      '#4cd263',
      '#23c343',
      '#00b42a',
      '#009a29',
      '#008026',
      '#006622',
      '#004d1c',
    ],
  )
})
