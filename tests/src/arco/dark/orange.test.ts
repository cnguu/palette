import {
  ARCO_DARK_ORANGE,
  ARCO_DARK_ORANGE_1,
  ARCO_DARK_ORANGE_2,
  ARCO_DARK_ORANGE_3,
  ARCO_DARK_ORANGE_4,
  ARCO_DARK_ORANGE_5,
  ARCO_DARK_ORANGE_6,
  ARCO_DARK_ORANGE_7,
  ARCO_DARK_ORANGE_8,
  ARCO_DARK_ORANGE_9,
  ARCO_DARK_ORANGE_10,
  ARCO_DARK_ORANGE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark orange palette', () => {
  assertArcoPalette(
    ARCO_DARK_ORANGE,
    [
      ARCO_DARK_ORANGE_1,
      ARCO_DARK_ORANGE_2,
      ARCO_DARK_ORANGE_3,
      ARCO_DARK_ORANGE_4,
      ARCO_DARK_ORANGE_5,
      ARCO_DARK_ORANGE_6,
      ARCO_DARK_ORANGE_7,
      ARCO_DARK_ORANGE_8,
      ARCO_DARK_ORANGE_9,
      ARCO_DARK_ORANGE_10,
    ],
    ARCO_DARK_ORANGE_PALETTE,
    [
      '#4d1800',
      '#793004',
      '#a6480a',
      '#d26913',
      '#ff8d1f',
      '#ff9626',
      '#ffb357',
      '#ffcd87',
      '#ffe3b8',
      '#fff7e8',
    ],
  )
})
