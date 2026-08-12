import {
  ARCO_PINKPURPLE,
  ARCO_PINKPURPLE_1,
  ARCO_PINKPURPLE_2,
  ARCO_PINKPURPLE_3,
  ARCO_PINKPURPLE_4,
  ARCO_PINKPURPLE_5,
  ARCO_PINKPURPLE_6,
  ARCO_PINKPURPLE_7,
  ARCO_PINKPURPLE_8,
  ARCO_PINKPURPLE_9,
  ARCO_PINKPURPLE_10,
  ARCO_PINKPURPLE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from './helper'

describe('arco pinkpurple palette', () => {
  assertArcoPalette(
    ARCO_PINKPURPLE,
    [
      ARCO_PINKPURPLE_1,
      ARCO_PINKPURPLE_2,
      ARCO_PINKPURPLE_3,
      ARCO_PINKPURPLE_4,
      ARCO_PINKPURPLE_5,
      ARCO_PINKPURPLE_6,
      ARCO_PINKPURPLE_7,
      ARCO_PINKPURPLE_8,
      ARCO_PINKPURPLE_9,
      ARCO_PINKPURPLE_10,
    ],
    ARCO_PINKPURPLE_PALETTE,
    [
      '#ffe8fb',
      '#f78aef',
      '#f08ee6',
      '#e865df',
      '#e13edb',
      '#d91ad9',
      '#b010b6',
      '#8a0993',
      '#650370',
      '#42004d',
    ],
  )
})
