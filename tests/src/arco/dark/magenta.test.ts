import {
  ARCO_DARK_MAGENTA,
  ARCO_DARK_MAGENTA_1,
  ARCO_DARK_MAGENTA_2,
  ARCO_DARK_MAGENTA_3,
  ARCO_DARK_MAGENTA_4,
  ARCO_DARK_MAGENTA_5,
  ARCO_DARK_MAGENTA_6,
  ARCO_DARK_MAGENTA_7,
  ARCO_DARK_MAGENTA_8,
  ARCO_DARK_MAGENTA_9,
  ARCO_DARK_MAGENTA_10,
  ARCO_DARK_MAGENTA_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark magenta palette', () => {
  assertArcoPalette(
    ARCO_DARK_MAGENTA,
    [
      ARCO_DARK_MAGENTA_1,
      ARCO_DARK_MAGENTA_2,
      ARCO_DARK_MAGENTA_3,
      ARCO_DARK_MAGENTA_4,
      ARCO_DARK_MAGENTA_5,
      ARCO_DARK_MAGENTA_6,
      ARCO_DARK_MAGENTA_7,
      ARCO_DARK_MAGENTA_8,
      ARCO_DARK_MAGENTA_9,
      ARCO_DARK_MAGENTA_10,
    ],
    ARCO_DARK_MAGENTA_PALETTE,
    [
      '#4d0034',
      '#770850',
      '#a1176c',
      '#cb2b88',
      '#f545a6',
      '#f756a9',
      '#f97ab8',
      '#fb9ec8',
      '#fdc3db',
      '#ffe8f1',
    ],
  )
})
