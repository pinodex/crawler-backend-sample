module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'jest',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'import/no-unresolved': 'off',
  },
};
