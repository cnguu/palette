import {
  ARCO_DARK_RED,
  ARCO_DARK_RED_1,
  ARCO_DARK_RED_2,
  ARCO_DARK_RED_3,
  ARCO_DARK_RED_4,
  ARCO_DARK_RED_5,
  ARCO_DARK_RED_6,
  ARCO_DARK_RED_7,
  ARCO_DARK_RED_8,
  ARCO_DARK_RED_9,
  ARCO_DARK_RED_10,
  ARCO_DARK_RED_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark red palette', () => {
  assertArcoPalette(
    ARCO_DARK_RED,
    [
      ARCO_DARK_RED_1,
      ARCO_DARK_RED_2,
      ARCO_DARK_RED_3,
      ARCO_DARK_RED_4,
      ARCO_DARK_RED_5,
      ARCO_DARK_RED_6,
      ARCO_DARK_RED_7,
      ARCO_DARK_RED_8,
      ARCO_DARK_RED_9,
      ARCO_DARK_RED_10,
    ],
    ARCO_DARK_RED_PALETTE,
    [
      '#4d000a',
      '#770611',
      '#a1161f',
      '#cb2e34',
      '#f54e4e',
      '#f76965',
      '#f98d86',
      '#fbb0a7',
      '#fdd1ca',
      '#fff0ec',
    ],
  )
})
