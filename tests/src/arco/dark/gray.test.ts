import {
  ARCO_DARK_GRAY,
  ARCO_DARK_GRAY_1,
  ARCO_DARK_GRAY_2,
  ARCO_DARK_GRAY_3,
  ARCO_DARK_GRAY_4,
  ARCO_DARK_GRAY_5,
  ARCO_DARK_GRAY_6,
  ARCO_DARK_GRAY_7,
  ARCO_DARK_GRAY_8,
  ARCO_DARK_GRAY_9,
  ARCO_DARK_GRAY_10,
  ARCO_DARK_GRAY_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark gray palette', () => {
  assertArcoPalette(
    ARCO_DARK_GRAY,
    [
      ARCO_DARK_GRAY_1,
      ARCO_DARK_GRAY_2,
      ARCO_DARK_GRAY_3,
      ARCO_DARK_GRAY_4,
      ARCO_DARK_GRAY_5,
      ARCO_DARK_GRAY_6,
      ARCO_DARK_GRAY_7,
      ARCO_DARK_GRAY_8,
      ARCO_DARK_GRAY_9,
      ARCO_DARK_GRAY_10,
    ],
    ARCO_DARK_GRAY_PALETTE,
    [
      '#17171a',
      '#2e2e30',
      '#484849',
      '#5f5f60',
      '#78787a',
      '#929293',
      '#ababac',
      '#c5c5c5',
      '#dfdfdf',
      '#f6f6f6',
    ],
  )
})
