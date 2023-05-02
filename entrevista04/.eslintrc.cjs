/* eslint-env node */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json', tsconfigRootDir: __dirname },
  plugins: ['react-refresh', '@typescript-eslint'],
  root: true,
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error"
  },
}
