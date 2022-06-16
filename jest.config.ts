module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts[x]',
    '!**/node_modules/**',
  ],
  modulePathIgnorePatterns: ["<rootDir>/src/__tests__/tools"],
  setupFiles: ['./setupTests.ts'],
  verbose: true,
  testEnvironment: 'jsdom',
};
