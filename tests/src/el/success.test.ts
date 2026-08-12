import {
  EL_SUCCESS,
  EL_SUCCESS_0,
  EL_SUCCESS_1,
  EL_SUCCESS_2,
  EL_SUCCESS_3,
  EL_SUCCESS_4,
  EL_SUCCESS_5,
  EL_SUCCESS_6,
  EL_SUCCESS_7,
  EL_SUCCESS_8,
  EL_SUCCESS_9,
  EL_SUCCESS_10,
  EL_SUCCESS_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from './helper'

describe('el success palette', () => {
  assertElPalette(
    EL_SUCCESS,
    [
      EL_SUCCESS_0,
      EL_SUCCESS_1,
      EL_SUCCESS_2,
      EL_SUCCESS_3,
      EL_SUCCESS_4,
      EL_SUCCESS_5,
      EL_SUCCESS_6,
      EL_SUCCESS_7,
      EL_SUCCESS_8,
      EL_SUCCESS_9,
      EL_SUCCESS_10,
    ],
    EL_SUCCESS_PALETTE,
    [
      '#f0f9eb',
      '#e1f3d8',
      '#d1edc4',
      '#c2e7b0',
      '#b3e19d',
      '#a4da89',
      '#95d475',
      '#85ce61',
      '#76c84e',
      '#67c23a',
      '#529b2e',
    ],
  )
})
