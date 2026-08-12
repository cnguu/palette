import {
  ARCO_BLUE,
  ARCO_BLUE_1,
  ARCO_BLUE_2,
  ARCO_BLUE_3,
  ARCO_BLUE_4,
  ARCO_BLUE_5,
  ARCO_BLUE_6,
  ARCO_BLUE_7,
  ARCO_BLUE_8,
  ARCO_BLUE_9,
  ARCO_BLUE_10,
  ARCO_BLUE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco blue palette', () => {
  assertArcoPalette(
    ARCO_BLUE,
    [
      ARCO_BLUE_1,
      ARCO_BLUE_2,
      ARCO_BLUE_3,
      ARCO_BLUE_4,
      ARCO_BLUE_5,
      ARCO_BLUE_6,
      ARCO_BLUE_7,
      ARCO_BLUE_8,
      ARCO_BLUE_9,
      ARCO_BLUE_10,
    ],
    ARCO_BLUE_PALETTE,
    [
      '#e8f7ff',
      '#c3e7fe',
      '#9fd4fd',
      '#7bc0fc',
      '#57a9fb',
      '#3491fa',
      '#206ccf',
      '#114ba3',
      '#063078',
      '#001a4d',
    ],
  )
})
