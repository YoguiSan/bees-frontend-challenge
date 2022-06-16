module.exports = {
  preset: 'ts-jest',
  transform: {
    // '\\.tsx$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
    // "^.+\\.svg$": "jest-svg-transformer",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
  },
  modulePathIgnorePatterns: ["<rootDir>/src/__tests__/tools"],
  setupFiles: ['./setupTests.ts'],
  verbose: true,
  testEnvironment: 'jsdom',
};
