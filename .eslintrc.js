module.exports = {
  // parser: '@typescript-eslint/parser',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    // ecmaFeatures: {
    //   jsx: true,
    // },
    // project: './tsconfig.json',
    // useJSXTextNode: true,
  },
  extends: 'airbnb',
  globals: {},
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
    'max-len': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-did-update-set-state': 0,
    'react/prefer-stateless-function' :0,
    'global-require': 0,
  },
};
