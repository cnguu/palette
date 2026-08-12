import {
  ARCO_LIME,
  ARCO_LIME_1,
  ARCO_LIME_2,
  ARCO_LIME_3,
  ARCO_LIME_4,
  ARCO_LIME_5,
  ARCO_LIME_6,
  ARCO_LIME_7,
  ARCO_LIME_8,
  ARCO_LIME_9,
  ARCO_LIME_10,
  ARCO_LIME_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco lime palette', () => {
  assertArcoPalette(
    ARCO_LIME,
    [
      ARCO_LIME_1,
      ARCO_LIME_2,
      ARCO_LIME_3,
      ARCO_LIME_4,
      ARCO_LIME_5,
      ARCO_LIME_6,
      ARCO_LIME_7,
      ARCO_LIME_8,
      ARCO_LIME_9,
      ARCO_LIME_10,
    ],
    ARCO_LIME_PALETTE,
    [
      '#fcffe8',
      '#edf8bb',
      '#dcf190',
      '#c9e968',
      '#b5e241',
      '#9fdb1d',
      '#7eb712',
      '#5f940a',
      '#437004',
      '#2a4d00',
    ],
  )
})
