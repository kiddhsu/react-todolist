module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app',
    'plugin:react-hooks/recommended',
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
    'react-hooks',
  ],
  rules: {
    semi: ['off'], // 將關於分號的檢查關掉
    'no-console': 'off', // 將關於console的檢查關掉
    'eol-last': ['error', 'never'], // 將強製文件不以換行符結尾的檢查關掉
    'react-hooks/rules-of-hooks': 'error', // 檢查 Hook 的規則
    'react-hooks/exhaustive-deps': ['warn', {
      additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
    }], // 檢查 effect 的相依性
  },
};