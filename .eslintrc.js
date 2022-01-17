module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // 將關於分號的檢查關掉
    semi: ['off'],
    // 將關於console的檢查關掉
    'no-console': 'off',
    // 將強製文件不以換行符結尾的檢查關掉
    'eol-last': ['error', 'never'],
  },
};