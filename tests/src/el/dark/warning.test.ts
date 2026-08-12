import {
  EL_DARK_WARNING,
  EL_DARK_WARNING_0,
  EL_DARK_WARNING_1,
  EL_DARK_WARNING_2,
  EL_DARK_WARNING_3,
  EL_DARK_WARNING_4,
  EL_DARK_WARNING_5,
  EL_DARK_WARNING_6,
  EL_DARK_WARNING_7,
  EL_DARK_WARNING_8,
  EL_DARK_WARNING_9,
  EL_DARK_WARNING_10,
  EL_DARK_WARNING_PALETTE,
} from '@cnguu/palette'
import { describe } from 'vitest'

import { assertElPalette } from '../helper'

describe('el dark warning palette', () => {
  assertElPalette(
    EL_DARK_WARNING,
    [
      EL_DARK_WARNING_0,
      EL_DARK_WARNING_1,
      EL_DARK_WARNING_2,
      EL_DARK_WARNING_3,
      EL_DARK_WARNING_4,
      EL_DARK_WARNING_5,
      EL_DARK_WARNING_6,
      EL_DARK_WARNING_7,
      EL_DARK_WARNING_8,
      EL_DARK_WARNING_9,
      EL_DARK_WARNING_10,
    ],
    EL_DARK_WARNING_PALETTE,
    [
      '#292218',
      '#3e301c',
      '#533f20',
      '#684d24',
      '#7d5b28',
      '#92692c',
      '#a77730',
      '#bc8634',
      '#d19438',
      '#e6a23c',
      '#ebb563',
    ],
  )
})
