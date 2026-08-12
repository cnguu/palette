import {
  ARCO_CYAN,
  ARCO_CYAN_1,
  ARCO_CYAN_2,
  ARCO_CYAN_3,
  ARCO_CYAN_4,
  ARCO_CYAN_5,
  ARCO_CYAN_6,
  ARCO_CYAN_7,
  ARCO_CYAN_8,
  ARCO_CYAN_9,
  ARCO_CYAN_10,
  ARCO_CYAN_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco cyan palette', () => {
  assertArcoPalette(
    ARCO_CYAN,
    [
      ARCO_CYAN_1,
      ARCO_CYAN_2,
      ARCO_CYAN_3,
      ARCO_CYAN_4,
      ARCO_CYAN_5,
      ARCO_CYAN_6,
      ARCO_CYAN_7,
      ARCO_CYAN_8,
      ARCO_CYAN_9,
      ARCO_CYAN_10,
    ],
    ARCO_CYAN_PALETTE,
    [
      '#e8fffb',
      '#b7f4ec',
      '#89e9e0',
      '#5edfd6',
      '#37d4cf',
      '#14c9c9',
      '#0da5aa',
      '#07828b',
      '#03616c',
      '#00424d',
    ],
  )
})
