import {
  ARCO_DARK_ORANGERED,
  ARCO_DARK_ORANGERED_1,
  ARCO_DARK_ORANGERED_2,
  ARCO_DARK_ORANGERED_3,
  ARCO_DARK_ORANGERED_4,
  ARCO_DARK_ORANGERED_5,
  ARCO_DARK_ORANGERED_6,
  ARCO_DARK_ORANGERED_7,
  ARCO_DARK_ORANGERED_8,
  ARCO_DARK_ORANGERED_9,
  ARCO_DARK_ORANGERED_10,
  ARCO_DARK_ORANGERED_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark orangered palette', () => {
  assertArcoPalette(
    ARCO_DARK_ORANGERED,
    [
      ARCO_DARK_ORANGERED_1,
      ARCO_DARK_ORANGERED_2,
      ARCO_DARK_ORANGERED_3,
      ARCO_DARK_ORANGERED_4,
      ARCO_DARK_ORANGERED_5,
      ARCO_DARK_ORANGERED_6,
      ARCO_DARK_ORANGERED_7,
      ARCO_DARK_ORANGERED_8,
      ARCO_DARK_ORANGERED_9,
      ARCO_DARK_ORANGERED_10,
    ],
    ARCO_DARK_ORANGERED_PALETTE,
    [
      '#4d0e00',
      '#771f05',
      '#a23714',
      '#cc5729',
      '#f77e45',
      '#f9925a',
      '#faad7d',
      '#fcc6a1',
      '#fddec5',
      '#fff4eb',
    ],
  )
})
