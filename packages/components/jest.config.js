module.exports = {
  "setupFiles": [
    "<rootDir>/tests/config/test-shim.js",
    "<rootDir>/tests/config/test-setup.js"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "<rootDir>/tests/config/test-preprocessor.js"
  },
  "testMatch": [
    "**/tests/*.(ts|tsx|js)",
    "**/src/local/**/*.spec.(ts|tsx|js)",
  ]
};