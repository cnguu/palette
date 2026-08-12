import {
  ARCO_DARK_PURPLE,
  ARCO_DARK_PURPLE_1,
  ARCO_DARK_PURPLE_2,
  ARCO_DARK_PURPLE_3,
  ARCO_DARK_PURPLE_4,
  ARCO_DARK_PURPLE_5,
  ARCO_DARK_PURPLE_6,
  ARCO_DARK_PURPLE_7,
  ARCO_DARK_PURPLE_8,
  ARCO_DARK_PURPLE_9,
  ARCO_DARK_PURPLE_10,
  ARCO_DARK_PURPLE_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertArcoPalette } from '../helper'

describe('arco dark purple palette', () => {
  assertArcoPalette(
    ARCO_DARK_PURPLE,
    [
      ARCO_DARK_PURPLE_1,
      ARCO_DARK_PURPLE_2,
      ARCO_DARK_PURPLE_3,
      ARCO_DARK_PURPLE_4,
      ARCO_DARK_PURPLE_5,
      ARCO_DARK_PURPLE_6,
      ARCO_DARK_PURPLE_7,
      ARCO_DARK_PURPLE_8,
      ARCO_DARK_PURPLE_9,
      ARCO_DARK_PURPLE_10,
    ],
    ARCO_DARK_PURPLE_PALETTE,
    [
      '#16004d',
      '#27066e',
      '#3e138f',
      '#5a2580',
      '#7b3dd1',
      '#8e51da',
      '#a974e3',
      '#c59aed',
      '#dfc2f6',
      '#f7edff',
    ],
  )
})
