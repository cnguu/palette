import {
  ANT_LIME,
  ANT_LIME_0,
  ANT_LIME_1,
  ANT_LIME_2,
  ANT_LIME_3,
  ANT_LIME_4,
  ANT_LIME_5,
  ANT_LIME_6,
  ANT_LIME_7,
  ANT_LIME_8,
  ANT_LIME_9,
  ANT_LIME_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertAntPalette } from './helper'

describe('ant lime palette', () => {
  assertAntPalette(
    ANT_LIME,
    [
      ANT_LIME_0,
      ANT_LIME_1,
      ANT_LIME_2,
      ANT_LIME_3,
      ANT_LIME_4,
      ANT_LIME_5,
      ANT_LIME_6,
      ANT_LIME_7,
      ANT_LIME_8,
      ANT_LIME_9,
    ],
    ANT_LIME_PALETTE,
    [
      '#fcffe6',
      '#f4ffb8',
      '#eaff8f',
      '#d3f261',
      '#bae637',
      '#a0d911',
      '#7cb305',
      '#5b8c00',
      '#3f6600',
      '#254000',
    ],
  )
})
