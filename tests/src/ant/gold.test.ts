import {
  ANT_GOLD,
  ANT_GOLD_0,
  ANT_GOLD_1,
  ANT_GOLD_2,
  ANT_GOLD_3,
  ANT_GOLD_4,
  ANT_GOLD_5,
  ANT_GOLD_6,
  ANT_GOLD_7,
  ANT_GOLD_8,
  ANT_GOLD_9,
  ANT_GOLD_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant gold palette', () => {
  assertAntPalette(
    ANT_GOLD,
    [
      ANT_GOLD_0,
      ANT_GOLD_1,
      ANT_GOLD_2,
      ANT_GOLD_3,
      ANT_GOLD_4,
      ANT_GOLD_5,
      ANT_GOLD_6,
      ANT_GOLD_7,
      ANT_GOLD_8,
      ANT_GOLD_9,
    ],
    ANT_GOLD_PALETTE,
    [
      '#fffbe6',
      '#fff1b8',
      '#ffe58f',
      '#ffd666',
      '#ffc53d',
      '#faad14',
      '#d48806',
      '#ad6800',
      '#874d00',
      '#613400',
    ],
  )
})
