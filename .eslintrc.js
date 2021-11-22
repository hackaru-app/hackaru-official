module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
