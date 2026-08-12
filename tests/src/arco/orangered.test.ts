import {
  ARCO_ORANGERED,
  ARCO_ORANGERED_1,
  ARCO_ORANGERED_2,
  ARCO_ORANGERED_3,
  ARCO_ORANGERED_4,
  ARCO_ORANGERED_5,
  ARCO_ORANGERED_6,
  ARCO_ORANGERED_7,
  ARCO_ORANGERED_8,
  ARCO_ORANGERED_9,
  ARCO_ORANGERED_10,
  ARCO_ORANGERED_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco orangered palette', () => {
  assertArcoPalette(
    ARCO_ORANGERED,
    [
      ARCO_ORANGERED_1,
      ARCO_ORANGERED_2,
      ARCO_ORANGERED_3,
      ARCO_ORANGERED_4,
      ARCO_ORANGERED_5,
      ARCO_ORANGERED_6,
      ARCO_ORANGERED_7,
      ARCO_ORANGERED_8,
      ARCO_ORANGERED_9,
      ARCO_ORANGERED_10,
    ],
    ARCO_ORANGERED_PALETTE,
    [
      '#fff3e8',
      '#fdddc3',
      '#fcc59f',
      '#faac7b',
      '#f99057',
      '#f77234',
      '#cc5120',
      '#a23511',
      '#771f06',
      '#4d0e00',
    ],
  )
})
