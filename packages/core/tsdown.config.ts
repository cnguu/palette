import { defineConfig } from 'tsdown'

import { genStyleFiles } from './scripts/gen-style.ts'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  exports: true,
  clean: true,
  target: 'esnext',
  platform: 'neutral',
  async onSuccess() {
    await genStyleFiles()
  },
})
