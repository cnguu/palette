import {
  ARCO_DARK_CYAN,
  ARCO_DARK_CYAN_1,
  ARCO_DARK_CYAN_2,
  ARCO_DARK_CYAN_3,
  ARCO_DARK_CYAN_4,
  ARCO_DARK_CYAN_5,
  ARCO_DARK_CYAN_6,
  ARCO_DARK_CYAN_7,
  ARCO_DARK_CYAN_8,
  ARCO_DARK_CYAN_9,
  ARCO_DARK_CYAN_10,
  ARCO_DARK_CYAN_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark cyan palette', () => {
  assertArcoPalette(
    ARCO_DARK_CYAN,
    [
      ARCO_DARK_CYAN_1,
      ARCO_DARK_CYAN_2,
      ARCO_DARK_CYAN_3,
      ARCO_DARK_CYAN_4,
      ARCO_DARK_CYAN_5,
      ARCO_DARK_CYAN_6,
      ARCO_DARK_CYAN_7,
      ARCO_DARK_CYAN_8,
      ARCO_DARK_CYAN_9,
      ARCO_DARK_CYAN_10,
    ],
    ARCO_DARK_CYAN_PALETTE,
    [
      '#00424d',
      '#06616c',
      '#11838b',
      '#1fa6aa',
      '#30c9c9',
      '#3fd4cf',
      '#66dfd7',
      '#90e9e1',
      '#bef4ed',
      '#f0fffc',
    ],
  )
})
