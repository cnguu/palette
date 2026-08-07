import {
  ANT_RED,
  ANT_RED_0,
  ANT_RED_1,
  ANT_RED_2,
  ANT_RED_3,
  ANT_RED_4,
  ANT_RED_5,
  ANT_RED_6,
  ANT_RED_7,
  ANT_RED_8,
  ANT_RED_9,
  ANT_RED_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant red palette', () => {
  assertAntPalette(
    ANT_RED,
    [
      ANT_RED_0,
      ANT_RED_1,
      ANT_RED_2,
      ANT_RED_3,
      ANT_RED_4,
      ANT_RED_5,
      ANT_RED_6,
      ANT_RED_7,
      ANT_RED_8,
      ANT_RED_9,
    ],
    ANT_RED_PALETTE,
    [
      '#fff1f0',
      '#ffccc7',
      '#ffa39e',
      '#ff7875',
      '#ff4d4f',
      '#f5222d',
      '#cf1322',
      '#a8071a',
      '#820014',
      '#5c0011',
    ],
  )
})
