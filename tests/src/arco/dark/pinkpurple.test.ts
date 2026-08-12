import {
  ARCO_DARK_PINKPURPLE,
  ARCO_DARK_PINKPURPLE_1,
  ARCO_DARK_PINKPURPLE_2,
  ARCO_DARK_PINKPURPLE_3,
  ARCO_DARK_PINKPURPLE_4,
  ARCO_DARK_PINKPURPLE_5,
  ARCO_DARK_PINKPURPLE_6,
  ARCO_DARK_PINKPURPLE_7,
  ARCO_DARK_PINKPURPLE_8,
  ARCO_DARK_PINKPURPLE_9,
  ARCO_DARK_PINKPURPLE_10,
  ARCO_DARK_PINKPURPLE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark pinkpurple palette', () => {
  assertArcoPalette(
    ARCO_DARK_PINKPURPLE,
    [
      ARCO_DARK_PINKPURPLE_1,
      ARCO_DARK_PINKPURPLE_2,
      ARCO_DARK_PINKPURPLE_3,
      ARCO_DARK_PINKPURPLE_4,
      ARCO_DARK_PINKPURPLE_5,
      ARCO_DARK_PINKPURPLE_6,
      ARCO_DARK_PINKPURPLE_7,
      ARCO_DARK_PINKPURPLE_8,
      ARCO_DARK_PINKPURPLE_9,
      ARCO_DARK_PINKPURPLE_10,
    ],
    ARCO_DARK_PINKPURPLE_PALETTE,
    [
      '#42004d',
      '#650370',
      '#8a0d93',
      '#b01bb6',
      '#d92ed9',
      '#e13ddb',
      '#e866df',
      '#f092e6',
      '#f7c1f0',
      '#fff2fd',
    ],
  )
})
