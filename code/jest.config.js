module.exports = {
  preset: 'ts-jest',
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'extensions/**/*'
  ],
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src', 'node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  coverageReporters: ['json', 'lcov', 'text'],
  coveragePathIgnorePatterns: ['.*/.*\\.d\\.ts', '.*/testUtil/.*'],
  testResultsProcessor: 'jest-sonar-reporter'
};
