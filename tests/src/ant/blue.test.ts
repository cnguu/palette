import {
  ANT_BLUE,
  ANT_BLUE_0,
  ANT_BLUE_1,
  ANT_BLUE_2,
  ANT_BLUE_3,
  ANT_BLUE_4,
  ANT_BLUE_5,
  ANT_BLUE_6,
  ANT_BLUE_7,
  ANT_BLUE_8,
  ANT_BLUE_9,
  ANT_BLUE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant blue palette', () => {
  assertAntPalette(
    ANT_BLUE,
    [
      ANT_BLUE_0,
      ANT_BLUE_1,
      ANT_BLUE_2,
      ANT_BLUE_3,
      ANT_BLUE_4,
      ANT_BLUE_5,
      ANT_BLUE_6,
      ANT_BLUE_7,
      ANT_BLUE_8,
      ANT_BLUE_9,
    ],
    ANT_BLUE_PALETTE,
    [
      '#e6f4ff',
      '#bae0ff',
      '#91caff',
      '#69b1ff',
      '#4096ff',
      '#1677ff',
      '#0958d9',
      '#003eb3',
      '#002c8c',
      '#001d66',
    ],
  )
})
