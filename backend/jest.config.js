module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['**/*.test.ts'], // Match pattern for test file
  };
  