import {
  ARCO_PURPLE,
  ARCO_PURPLE_1,
  ARCO_PURPLE_2,
  ARCO_PURPLE_3,
  ARCO_PURPLE_4,
  ARCO_PURPLE_5,
  ARCO_PURPLE_6,
  ARCO_PURPLE_7,
  ARCO_PURPLE_8,
  ARCO_PURPLE_9,
  ARCO_PURPLE_10,
  ARCO_PURPLE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco purple palette', () => {
  assertArcoPalette(
    ARCO_PURPLE,
    [
      ARCO_PURPLE_1,
      ARCO_PURPLE_2,
      ARCO_PURPLE_3,
      ARCO_PURPLE_4,
      ARCO_PURPLE_5,
      ARCO_PURPLE_6,
      ARCO_PURPLE_7,
      ARCO_PURPLE_8,
      ARCO_PURPLE_9,
      ARCO_PURPLE_10,
    ],
    ARCO_PURPLE_PALETTE,
    [
      '#f5e8ff',
      '#ddbef6',
      '#c396ed',
      '#a871e3',
      '#8d4eda',
      '#722ed1',
      '#551db0',
      '#3c108f',
      '#27066e',
      '#16004d',
    ],
  )
})
