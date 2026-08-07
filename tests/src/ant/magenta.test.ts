import {
  ANT_MAGENTA,
  ANT_MAGENTA_0,
  ANT_MAGENTA_1,
  ANT_MAGENTA_2,
  ANT_MAGENTA_3,
  ANT_MAGENTA_4,
  ANT_MAGENTA_5,
  ANT_MAGENTA_6,
  ANT_MAGENTA_7,
  ANT_MAGENTA_8,
  ANT_MAGENTA_9,
  ANT_MAGENTA_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant magenta palette', () => {
  assertAntPalette(
    ANT_MAGENTA,
    [
      ANT_MAGENTA_0,
      ANT_MAGENTA_1,
      ANT_MAGENTA_2,
      ANT_MAGENTA_3,
      ANT_MAGENTA_4,
      ANT_MAGENTA_5,
      ANT_MAGENTA_6,
      ANT_MAGENTA_7,
      ANT_MAGENTA_8,
      ANT_MAGENTA_9,
    ],
    ANT_MAGENTA_PALETTE,
    [
      '#fff0f6',
      '#ffd6e7',
      '#ffadd2',
      '#ff85c0',
      '#f759ab',
      '#eb2f96',
      '#c41d7f',
      '#9e1068',
      '#780650',
      '#520339',
    ],
  )
})
