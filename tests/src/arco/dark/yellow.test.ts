import {
  ARCO_DARK_YELLOW,
  ARCO_DARK_YELLOW_1,
  ARCO_DARK_YELLOW_2,
  ARCO_DARK_YELLOW_3,
  ARCO_DARK_YELLOW_4,
  ARCO_DARK_YELLOW_5,
  ARCO_DARK_YELLOW_6,
  ARCO_DARK_YELLOW_7,
  ARCO_DARK_YELLOW_8,
  ARCO_DARK_YELLOW_9,
  ARCO_DARK_YELLOW_10,
  ARCO_DARK_YELLOW_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark yellow palette', () => {
  assertArcoPalette(
    ARCO_DARK_YELLOW,
    [
      ARCO_DARK_YELLOW_1,
      ARCO_DARK_YELLOW_2,
      ARCO_DARK_YELLOW_3,
      ARCO_DARK_YELLOW_4,
      ARCO_DARK_YELLOW_5,
      ARCO_DARK_YELLOW_6,
      ARCO_DARK_YELLOW_7,
      ARCO_DARK_YELLOW_8,
      ARCO_DARK_YELLOW_9,
      ARCO_DARK_YELLOW_10,
    ],
    ARCO_DARK_YELLOW_PALETTE,
    [
      '#4d3800',
      '#785e07',
      '#a38614',
      '#cfb325',
      '#fae13c',
      '#fbe948',
      '#fcf374',
      '#fdfa9d',
      '#fefec6',
      '#fefff0',
    ],
  )
})
