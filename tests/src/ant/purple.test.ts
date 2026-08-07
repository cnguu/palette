import {
  ANT_PURPLE,
  ANT_PURPLE_0,
  ANT_PURPLE_1,
  ANT_PURPLE_2,
  ANT_PURPLE_3,
  ANT_PURPLE_4,
  ANT_PURPLE_5,
  ANT_PURPLE_6,
  ANT_PURPLE_7,
  ANT_PURPLE_8,
  ANT_PURPLE_9,
  ANT_PURPLE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant purple palette', () => {
  assertAntPalette(
    ANT_PURPLE,
    [
      ANT_PURPLE_0,
      ANT_PURPLE_1,
      ANT_PURPLE_2,
      ANT_PURPLE_3,
      ANT_PURPLE_4,
      ANT_PURPLE_5,
      ANT_PURPLE_6,
      ANT_PURPLE_7,
      ANT_PURPLE_8,
      ANT_PURPLE_9,
    ],
    ANT_PURPLE_PALETTE,
    [
      '#f9f0ff',
      '#efdbff',
      '#d3adf7',
      '#b37feb',
      '#9254de',
      '#722ed1',
      '#531dab',
      '#391085',
      '#22075e',
      '#120338',
    ],
  )
})
