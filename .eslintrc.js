module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
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
    semi: [2, 'never'],
    'import/extensions': [2, 'never'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['tsx', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    '@next/next/no-img-element': 0,
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
