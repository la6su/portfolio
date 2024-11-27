import { tresLintConfig } from '@tresjs/eslint-config'

export default tresLintConfig({

}, {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'style/max-statements-per-line': 'off',
    'indent': 'off',
    'no-tabs': 'off',
  },
})
