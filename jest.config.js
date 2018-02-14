module.exports = {
  globalSetup: './jest/setup.js',
  globalTeardown: './jest/teardown.js',
  testEnvironment: './jest/puppeteer_environment.js',
  verbose: false,
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/jest/__mocks__/styleMock.js',
  },
}
