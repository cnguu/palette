import {
  ANT_CYAN,
  ANT_CYAN_0,
  ANT_CYAN_1,
  ANT_CYAN_2,
  ANT_CYAN_3,
  ANT_CYAN_4,
  ANT_CYAN_5,
  ANT_CYAN_6,
  ANT_CYAN_7,
  ANT_CYAN_8,
  ANT_CYAN_9,
  ANT_CYAN_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant cyan palette', () => {
  assertAntPalette(
    ANT_CYAN,
    [
      ANT_CYAN_0,
      ANT_CYAN_1,
      ANT_CYAN_2,
      ANT_CYAN_3,
      ANT_CYAN_4,
      ANT_CYAN_5,
      ANT_CYAN_6,
      ANT_CYAN_7,
      ANT_CYAN_8,
      ANT_CYAN_9,
    ],
    ANT_CYAN_PALETTE,
    [
      '#e6fffb',
      '#b5f5ec',
      '#87e8de',
      '#5cdbd3',
      '#36cfc9',
      '#13c2c2',
      '#08979c',
      '#006d75',
      '#00474f',
      '#002329',
    ],
  )
})
