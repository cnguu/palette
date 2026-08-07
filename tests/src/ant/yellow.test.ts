import {
  ANT_YELLOW,
  ANT_YELLOW_0,
  ANT_YELLOW_1,
  ANT_YELLOW_2,
  ANT_YELLOW_3,
  ANT_YELLOW_4,
  ANT_YELLOW_5,
  ANT_YELLOW_6,
  ANT_YELLOW_7,
  ANT_YELLOW_8,
  ANT_YELLOW_9,
  ANT_YELLOW_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant yellow palette', () => {
  assertAntPalette(
    ANT_YELLOW,
    [
      ANT_YELLOW_0,
      ANT_YELLOW_1,
      ANT_YELLOW_2,
      ANT_YELLOW_3,
      ANT_YELLOW_4,
      ANT_YELLOW_5,
      ANT_YELLOW_6,
      ANT_YELLOW_7,
      ANT_YELLOW_8,
      ANT_YELLOW_9,
    ],
    ANT_YELLOW_PALETTE,
    [
      '#feffe6',
      '#ffffb8',
      '#fffb8f',
      '#fff566',
      '#ffec3d',
      '#fadb14',
      '#d4b106',
      '#ad8b00',
      '#876800',
      '#614700',
    ],
  )
})
