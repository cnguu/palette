import {
  ANT_ORANGE,
  ANT_ORANGE_0,
  ANT_ORANGE_1,
  ANT_ORANGE_2,
  ANT_ORANGE_3,
  ANT_ORANGE_4,
  ANT_ORANGE_5,
  ANT_ORANGE_6,
  ANT_ORANGE_7,
  ANT_ORANGE_8,
  ANT_ORANGE_9,
  ANT_ORANGE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant orange palette', () => {
  assertAntPalette(
    ANT_ORANGE,
    [
      ANT_ORANGE_0,
      ANT_ORANGE_1,
      ANT_ORANGE_2,
      ANT_ORANGE_3,
      ANT_ORANGE_4,
      ANT_ORANGE_5,
      ANT_ORANGE_6,
      ANT_ORANGE_7,
      ANT_ORANGE_8,
      ANT_ORANGE_9,
    ],
    ANT_ORANGE_PALETTE,
    [
      '#fff7e6',
      '#ffe7ba',
      '#ffd591',
      '#ffc069',
      '#ffa940',
      '#fa8c16',
      '#d46b08',
      '#ad4e00',
      '#873800',
      '#612500',
    ],
  )
})
