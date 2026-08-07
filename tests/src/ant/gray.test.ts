import {
  ANT_GRAY,
  ANT_GRAY_0,
  ANT_GRAY_1,
  ANT_GRAY_2,
  ANT_GRAY_3,
  ANT_GRAY_4,
  ANT_GRAY_5,
  ANT_GRAY_6,
  ANT_GRAY_7,
  ANT_GRAY_8,
  ANT_GRAY_9,
  ANT_GRAY_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant gray palette', () => {
  assertAntPalette(
    ANT_GRAY,
    [
      ANT_GRAY_0,
      ANT_GRAY_1,
      ANT_GRAY_2,
      ANT_GRAY_3,
      ANT_GRAY_4,
      ANT_GRAY_5,
      ANT_GRAY_6,
      ANT_GRAY_7,
      ANT_GRAY_8,
      ANT_GRAY_9,
    ],
    ANT_GRAY_PALETTE,
    [
      '#ffffff',
      '#f2f2f2',
      '#e6e6e6',
      '#d9d9d9',
      '#cccccc',
      '#bfbfbf',
      '#999999',
      '#737373',
      '#4d4d4d',
      '#262626',
    ],
  )
})
