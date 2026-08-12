import {
  ARCO_GRAY,
  ARCO_GRAY_1,
  ARCO_GRAY_2,
  ARCO_GRAY_3,
  ARCO_GRAY_4,
  ARCO_GRAY_5,
  ARCO_GRAY_6,
  ARCO_GRAY_7,
  ARCO_GRAY_8,
  ARCO_GRAY_9,
  ARCO_GRAY_10,
  ARCO_GRAY_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco gray palette', () => {
  assertArcoPalette(
    ARCO_GRAY,
    [
      ARCO_GRAY_1,
      ARCO_GRAY_2,
      ARCO_GRAY_3,
      ARCO_GRAY_4,
      ARCO_GRAY_5,
      ARCO_GRAY_6,
      ARCO_GRAY_7,
      ARCO_GRAY_8,
      ARCO_GRAY_9,
      ARCO_GRAY_10,
    ],
    ARCO_GRAY_PALETTE,
    [
      '#f7f8fa',
      '#f2f3f5',
      '#e5e6eb',
      '#c9cdd4',
      '#a9aeb8',
      '#86909c',
      '#6b7785',
      '#4e5969',
      '#272e3b',
      '#1d2129',
    ],
  )
})
