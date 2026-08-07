import {
  ANT_GEEKBLUE,
  ANT_GEEKBLUE_0,
  ANT_GEEKBLUE_1,
  ANT_GEEKBLUE_2,
  ANT_GEEKBLUE_3,
  ANT_GEEKBLUE_4,
  ANT_GEEKBLUE_5,
  ANT_GEEKBLUE_6,
  ANT_GEEKBLUE_7,
  ANT_GEEKBLUE_8,
  ANT_GEEKBLUE_9,
  ANT_GEEKBLUE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant geekblue palette', () => {
  assertAntPalette(
    ANT_GEEKBLUE,
    [
      ANT_GEEKBLUE_0,
      ANT_GEEKBLUE_1,
      ANT_GEEKBLUE_2,
      ANT_GEEKBLUE_3,
      ANT_GEEKBLUE_4,
      ANT_GEEKBLUE_5,
      ANT_GEEKBLUE_6,
      ANT_GEEKBLUE_7,
      ANT_GEEKBLUE_8,
      ANT_GEEKBLUE_9,
    ],
    ANT_GEEKBLUE_PALETTE,
    [
      '#f0f5ff',
      '#d6e4ff',
      '#adc6ff',
      '#85a5ff',
      '#597ef7',
      '#2f54eb',
      '#1d39c4',
      '#10239e',
      '#061178',
      '#030852',
    ],
  )
})
