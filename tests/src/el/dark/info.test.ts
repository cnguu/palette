import {
  EL_DARK_INFO,
  EL_DARK_INFO_0,
  EL_DARK_INFO_1,
  EL_DARK_INFO_2,
  EL_DARK_INFO_3,
  EL_DARK_INFO_4,
  EL_DARK_INFO_5,
  EL_DARK_INFO_6,
  EL_DARK_INFO_7,
  EL_DARK_INFO_8,
  EL_DARK_INFO_9,
  EL_DARK_INFO_10,
  EL_DARK_INFO_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from '../helper'

describe('el dark info palette', () => {
  assertElPalette(
    EL_DARK_INFO,
    [
      EL_DARK_INFO_0,
      EL_DARK_INFO_1,
      EL_DARK_INFO_2,
      EL_DARK_INFO_3,
      EL_DARK_INFO_4,
      EL_DARK_INFO_5,
      EL_DARK_INFO_6,
      EL_DARK_INFO_7,
      EL_DARK_INFO_8,
      EL_DARK_INFO_9,
      EL_DARK_INFO_10,
    ],
    EL_DARK_INFO_PALETTE,
    [
      '#202121',
      '#2d2d2f',
      '#393a3c',
      '#464749',
      '#525457',
      '#5e6064',
      '#6b6d71',
      '#777a7e',
      '#84868c',
      '#909399',
      '#a6a9ad',
    ],
  )
})
