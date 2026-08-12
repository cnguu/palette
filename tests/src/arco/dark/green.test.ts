import {
  ARCO_DARK_GREEN,
  ARCO_DARK_GREEN_1,
  ARCO_DARK_GREEN_2,
  ARCO_DARK_GREEN_3,
  ARCO_DARK_GREEN_4,
  ARCO_DARK_GREEN_5,
  ARCO_DARK_GREEN_6,
  ARCO_DARK_GREEN_7,
  ARCO_DARK_GREEN_8,
  ARCO_DARK_GREEN_9,
  ARCO_DARK_GREEN_10,
  ARCO_DARK_GREEN_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark green palette', () => {
  assertArcoPalette(
    ARCO_DARK_GREEN,
    [
      ARCO_DARK_GREEN_1,
      ARCO_DARK_GREEN_2,
      ARCO_DARK_GREEN_3,
      ARCO_DARK_GREEN_4,
      ARCO_DARK_GREEN_5,
      ARCO_DARK_GREEN_6,
      ARCO_DARK_GREEN_7,
      ARCO_DARK_GREEN_8,
      ARCO_DARK_GREEN_9,
      ARCO_DARK_GREEN_10,
    ],
    ARCO_DARK_GREEN_PALETTE,
    [
      '#004d1c',
      '#046625',
      '#0a802d',
      '#129a37',
      '#1db440',
      '#27c346',
      '#50d266',
      '#7ee18b',
      '#b2f087',
      '#ebffec',
    ],
  )
})
