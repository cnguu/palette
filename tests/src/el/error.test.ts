import {
  EL_ERROR,
  EL_ERROR_0,
  EL_ERROR_1,
  EL_ERROR_2,
  EL_ERROR_3,
  EL_ERROR_4,
  EL_ERROR_5,
  EL_ERROR_6,
  EL_ERROR_7,
  EL_ERROR_8,
  EL_ERROR_9,
  EL_ERROR_10,
  EL_ERROR_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from './helper'

describe('el error palette', () => {
  assertElPalette(
    EL_ERROR,
    [
      EL_ERROR_0,
      EL_ERROR_1,
      EL_ERROR_2,
      EL_ERROR_3,
      EL_ERROR_4,
      EL_ERROR_5,
      EL_ERROR_6,
      EL_ERROR_7,
      EL_ERROR_8,
      EL_ERROR_9,
      EL_ERROR_10,
    ],
    EL_ERROR_PALETTE,
    [
      '#fef0f0',
      '#fde2e2',
      '#fcd3d3',
      '#fbc4c4',
      '#fab6b6',
      '#f9a7a7',
      '#f89898',
      '#f78989',
      '#f67b7b',
      '#f56c6c',
      '#c45656',
    ],
  )
})
