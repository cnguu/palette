import {
  ARCO_MAGENTA,
  ARCO_MAGENTA_1,
  ARCO_MAGENTA_2,
  ARCO_MAGENTA_3,
  ARCO_MAGENTA_4,
  ARCO_MAGENTA_5,
  ARCO_MAGENTA_6,
  ARCO_MAGENTA_7,
  ARCO_MAGENTA_8,
  ARCO_MAGENTA_9,
  ARCO_MAGENTA_10,
  ARCO_MAGENTA_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco magenta palette', () => {
  assertArcoPalette(
    ARCO_MAGENTA,
    [
      ARCO_MAGENTA_1,
      ARCO_MAGENTA_2,
      ARCO_MAGENTA_3,
      ARCO_MAGENTA_4,
      ARCO_MAGENTA_5,
      ARCO_MAGENTA_6,
      ARCO_MAGENTA_7,
      ARCO_MAGENTA_8,
      ARCO_MAGENTA_9,
      ARCO_MAGENTA_10,
    ],
    ARCO_MAGENTA_PALETTE,
    [
      '#ffe8f1',
      '#fdc2db',
      '#fb9dc7',
      '#f979b7',
      '#f754a8',
      '#f5319d',
      '#cb1e83',
      '#a11069',
      '#77064f',
      '#4d0034',
    ],
  )
})
