import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    stylistic: true,
    typescript: true,
    jsonc: true,
    yaml: true,
  },
)
