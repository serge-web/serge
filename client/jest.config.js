module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setupJest.js'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/tests/*.(ts|tsx|js)',
    '**/src/**/*.spec.(ts|tsx|js)',
    '**/src/**/*.test.(ts|tsx|js)',
    '!**/Tests/**/*.(ts|tsx|js)' // Excludes tests in the "tests" folder
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  }
}
