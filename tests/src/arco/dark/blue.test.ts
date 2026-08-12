import {
  ARCO_DARK_BLUE,
  ARCO_DARK_BLUE_1,
  ARCO_DARK_BLUE_2,
  ARCO_DARK_BLUE_3,
  ARCO_DARK_BLUE_4,
  ARCO_DARK_BLUE_5,
  ARCO_DARK_BLUE_6,
  ARCO_DARK_BLUE_7,
  ARCO_DARK_BLUE_8,
  ARCO_DARK_BLUE_9,
  ARCO_DARK_BLUE_10,
  ARCO_DARK_BLUE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark blue palette', () => {
  assertArcoPalette(
    ARCO_DARK_BLUE,
    [
      ARCO_DARK_BLUE_1,
      ARCO_DARK_BLUE_2,
      ARCO_DARK_BLUE_3,
      ARCO_DARK_BLUE_4,
      ARCO_DARK_BLUE_5,
      ARCO_DARK_BLUE_6,
      ARCO_DARK_BLUE_7,
      ARCO_DARK_BLUE_8,
      ARCO_DARK_BLUE_9,
      ARCO_DARK_BLUE_10,
    ],
    ARCO_DARK_BLUE_PALETTE,
    [
      '#001a4d',
      '#052f78',
      '#134ca3',
      '#2971cf',
      '#469afa',
      '#5aaaff',
      '#7dc1fc',
      '#a1d5fd',
      '#c6e8fe',
      '#eaf8ff',
    ],
  )
})
