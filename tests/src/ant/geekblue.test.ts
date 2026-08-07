import {
  ANT_GEEKBBLUE,
  ANT_GEEKBBLUE_0,
  ANT_GEEKBBLUE_1,
  ANT_GEEKBBLUE_2,
  ANT_GEEKBBLUE_3,
  ANT_GEEKBBLUE_4,
  ANT_GEEKBBLUE_5,
  ANT_GEEKBBLUE_6,
  ANT_GEEKBBLUE_7,
  ANT_GEEKBBLUE_8,
  ANT_GEEKBBLUE_9,
  ANT_GEEKBBLUE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant geekblue palette', () => {
  assertAntPalette(
    ANT_GEEKBBLUE,
    [
      ANT_GEEKBBLUE_0,
      ANT_GEEKBBLUE_1,
      ANT_GEEKBBLUE_2,
      ANT_GEEKBBLUE_3,
      ANT_GEEKBBLUE_4,
      ANT_GEEKBBLUE_5,
      ANT_GEEKBBLUE_6,
      ANT_GEEKBBLUE_7,
      ANT_GEEKBBLUE_8,
      ANT_GEEKBBLUE_9,
    ],
    ANT_GEEKBBLUE_PALETTE,
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
