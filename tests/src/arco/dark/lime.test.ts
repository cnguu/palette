import {
  ARCO_DARK_LIME,
  ARCO_DARK_LIME_1,
  ARCO_DARK_LIME_2,
  ARCO_DARK_LIME_3,
  ARCO_DARK_LIME_4,
  ARCO_DARK_LIME_5,
  ARCO_DARK_LIME_6,
  ARCO_DARK_LIME_7,
  ARCO_DARK_LIME_8,
  ARCO_DARK_LIME_9,
  ARCO_DARK_LIME_10,
  ARCO_DARK_LIME_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark lime palette', () => {
  assertArcoPalette(
    ARCO_DARK_LIME,
    [
      ARCO_DARK_LIME_1,
      ARCO_DARK_LIME_2,
      ARCO_DARK_LIME_3,
      ARCO_DARK_LIME_4,
      ARCO_DARK_LIME_5,
      ARCO_DARK_LIME_6,
      ARCO_DARK_LIME_7,
      ARCO_DARK_LIME_8,
      ARCO_DARK_LIME_9,
      ARCO_DARK_LIME_10,
    ],
    ARCO_DARK_LIME_PALETTE,
    [
      '#2a4d00',
      '#447006',
      '#629412',
      '#84b723',
      '#a8db39',
      '#b8e24b',
      '#cbe970',
      '#def198',
      '#eef8c2',
      '#fdffee',
    ],
  )
})
