import {
  ANT_GREEN,
  ANT_GREEN_0,
  ANT_GREEN_1,
  ANT_GREEN_2,
  ANT_GREEN_3,
  ANT_GREEN_4,
  ANT_GREEN_5,
  ANT_GREEN_6,
  ANT_GREEN_7,
  ANT_GREEN_8,
  ANT_GREEN_9,
  ANT_GREEN_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant green palette', () => {
  assertAntPalette(
    ANT_GREEN,
    [
      ANT_GREEN_0,
      ANT_GREEN_1,
      ANT_GREEN_2,
      ANT_GREEN_3,
      ANT_GREEN_4,
      ANT_GREEN_5,
      ANT_GREEN_6,
      ANT_GREEN_7,
      ANT_GREEN_8,
      ANT_GREEN_9,
    ],
    ANT_GREEN_PALETTE,
    [
      '#f6ffed',
      '#d9f7be',
      '#b7eb8f',
      '#95de64',
      '#73d13d',
      '#52c41a',
      '#389e0d',
      '#237804',
      '#135200',
      '#092b00',
    ],
  )
})
