import {
  EL_INFO,
  EL_INFO_0,
  EL_INFO_1,
  EL_INFO_2,
  EL_INFO_3,
  EL_INFO_4,
  EL_INFO_5,
  EL_INFO_6,
  EL_INFO_7,
  EL_INFO_8,
  EL_INFO_9,
  EL_INFO_10,
  EL_INFO_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from './helper'

describe('el info palette', () => {
  assertElPalette(
    EL_INFO,
    [
      EL_INFO_0,
      EL_INFO_1,
      EL_INFO_2,
      EL_INFO_3,
      EL_INFO_4,
      EL_INFO_5,
      EL_INFO_6,
      EL_INFO_7,
      EL_INFO_8,
      EL_INFO_9,
      EL_INFO_10,
    ],
    EL_INFO_PALETTE,
    [
      '#f4f4f5',
      '#e9e9eb',
      '#dedfe0',
      '#d3d4d6',
      '#c8c9cc',
      '#bcbec2',
      '#b1b3b8',
      '#a6a9ad',
      '#9b9ea3',
      '#909399',
      '#73767a',
    ],
  )
})
