import {
  ARCO_RED,
  ARCO_RED_1,
  ARCO_RED_2,
  ARCO_RED_3,
  ARCO_RED_4,
  ARCO_RED_5,
  ARCO_RED_6,
  ARCO_RED_7,
  ARCO_RED_8,
  ARCO_RED_9,
  ARCO_RED_10,
  ARCO_RED_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco red palette', () => {
  assertArcoPalette(
    ARCO_RED,
    [
      ARCO_RED_1,
      ARCO_RED_2,
      ARCO_RED_3,
      ARCO_RED_4,
      ARCO_RED_5,
      ARCO_RED_6,
      ARCO_RED_7,
      ARCO_RED_8,
      ARCO_RED_9,
      ARCO_RED_10,
    ],
    ARCO_RED_PALETTE,
    [
      '#ffece8',
      '#fdcdc5',
      '#fbaca3',
      '#f98981',
      '#f76560',
      '#f53f3f',
      '#cb272d',
      '#a1151e',
      '#770813',
      '#4d000a',
    ],
  )
})
