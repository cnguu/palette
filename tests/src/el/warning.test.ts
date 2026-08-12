import {
  EL_WARNING,
  EL_WARNING_0,
  EL_WARNING_1,
  EL_WARNING_2,
  EL_WARNING_3,
  EL_WARNING_4,
  EL_WARNING_5,
  EL_WARNING_6,
  EL_WARNING_7,
  EL_WARNING_8,
  EL_WARNING_9,
  EL_WARNING_10,
  EL_WARNING_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from './helper'

describe('el warning palette', () => {
  assertElPalette(
    EL_WARNING,
    [
      EL_WARNING_0,
      EL_WARNING_1,
      EL_WARNING_2,
      EL_WARNING_3,
      EL_WARNING_4,
      EL_WARNING_5,
      EL_WARNING_6,
      EL_WARNING_7,
      EL_WARNING_8,
      EL_WARNING_9,
      EL_WARNING_10,
    ],
    EL_WARNING_PALETTE,
    [
      '#fdf6ec',
      '#faecd8',
      '#f8e3c5',
      '#f5dab1',
      '#f3d19e',
      '#f0c78a',
      '#eebe77',
      '#ebb563',
      '#e9ab50',
      '#e6a23c',
      '#b88230',
    ],
  )
})
