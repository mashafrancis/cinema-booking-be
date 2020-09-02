module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  coverageReporters: [
    'html',
    'json',
    'lcov',
    'text',
    'clover',
  ]
};
