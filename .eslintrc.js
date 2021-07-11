const rules = {
  off: 'off',
  warn: 'warn',
  error: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: ['eslint:recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['svelte3'],
  rules: {
    semi: rules.off,
    eqeqeq: rules.error
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ]
}
