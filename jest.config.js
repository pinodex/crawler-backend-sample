module.exports = {
  testEnvironment: 'node',

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],

  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },

  globalSetup: './tests/helpers/global-setup.js',
  globalTeardown: './tests/helpers/global-teardown.js',
};
