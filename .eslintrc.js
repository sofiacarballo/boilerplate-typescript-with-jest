module.exports = {
    env: {
      node: true,
      es6: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};