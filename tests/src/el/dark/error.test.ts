import {
  EL_DARK_ERROR,
  EL_DARK_ERROR_0,
  EL_DARK_ERROR_1,
  EL_DARK_ERROR_2,
  EL_DARK_ERROR_3,
  EL_DARK_ERROR_4,
  EL_DARK_ERROR_5,
  EL_DARK_ERROR_6,
  EL_DARK_ERROR_7,
  EL_DARK_ERROR_8,
  EL_DARK_ERROR_9,
  EL_DARK_ERROR_10,
  EL_DARK_ERROR_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from '../helper'

describe('el dark error palette', () => {
  assertElPalette(
    EL_DARK_ERROR,
    [
      EL_DARK_ERROR_0,
      EL_DARK_ERROR_1,
      EL_DARK_ERROR_2,
      EL_DARK_ERROR_3,
      EL_DARK_ERROR_4,
      EL_DARK_ERROR_5,
      EL_DARK_ERROR_6,
      EL_DARK_ERROR_7,
      EL_DARK_ERROR_8,
      EL_DARK_ERROR_9,
      EL_DARK_ERROR_10,
    ],
    EL_DARK_ERROR_PALETTE,
    [
      '#2a1d1d',
      '#412626',
      '#582e2e',
      '#6e3737',
      '#854040',
      '#9b4949',
      '#b25252',
      '#c85a5a',
      '#df6363',
      '#f56c6c',
      '#f78989',
    ],
  )
})
