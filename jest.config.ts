export default {
  clearMocks: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};