import {
  ANT_VOLCANO,
  ANT_VOLCANO_0,
  ANT_VOLCANO_1,
  ANT_VOLCANO_2,
  ANT_VOLCANO_3,
  ANT_VOLCANO_4,
  ANT_VOLCANO_5,
  ANT_VOLCANO_6,
  ANT_VOLCANO_7,
  ANT_VOLCANO_8,
  ANT_VOLCANO_9,
  ANT_VOLCANO_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant volcano palette', () => {
  assertAntPalette(
    ANT_VOLCANO,
    [
      ANT_VOLCANO_0,
      ANT_VOLCANO_1,
      ANT_VOLCANO_2,
      ANT_VOLCANO_3,
      ANT_VOLCANO_4,
      ANT_VOLCANO_5,
      ANT_VOLCANO_6,
      ANT_VOLCANO_7,
      ANT_VOLCANO_8,
      ANT_VOLCANO_9,
    ],
    ANT_VOLCANO_PALETTE,
    [
      '#fff2e8',
      '#ffd8bf',
      '#ffbb96',
      '#ff9c6e',
      '#ff7a45',
      '#fa541c',
      '#d4380d',
      '#ad2102',
      '#871400',
      '#610b00',
    ],
  )
})
