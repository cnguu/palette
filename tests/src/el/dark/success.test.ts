import {
  EL_DARK_SUCCESS,
  EL_DARK_SUCCESS_0,
  EL_DARK_SUCCESS_1,
  EL_DARK_SUCCESS_2,
  EL_DARK_SUCCESS_3,
  EL_DARK_SUCCESS_4,
  EL_DARK_SUCCESS_5,
  EL_DARK_SUCCESS_6,
  EL_DARK_SUCCESS_7,
  EL_DARK_SUCCESS_8,
  EL_DARK_SUCCESS_9,
  EL_DARK_SUCCESS_10,
  EL_DARK_SUCCESS_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from '../helper'

describe('el dark success palette', () => {
  assertElPalette(
    EL_DARK_SUCCESS,
    [
      EL_DARK_SUCCESS_0,
      EL_DARK_SUCCESS_1,
      EL_DARK_SUCCESS_2,
      EL_DARK_SUCCESS_3,
      EL_DARK_SUCCESS_4,
      EL_DARK_SUCCESS_5,
      EL_DARK_SUCCESS_6,
      EL_DARK_SUCCESS_7,
      EL_DARK_SUCCESS_8,
      EL_DARK_SUCCESS_9,
      EL_DARK_SUCCESS_10,
    ],
    EL_DARK_SUCCESS_PALETTE,
    [
      '#1c2518',
      '#25371c',
      '#2d481f',
      '#355a23',
      '#3e6b27',
      '#467c2b',
      '#4e8e2f',
      '#569f32',
      '#5fb136',
      '#67c23a',
      '#85ce61',
    ],
  )
})
