module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "setupFiles": [
    "<rootDir>/setupTests.ts",
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
  },
  "globals": {
    "ts-jest": {
      "babelConfig": true,
      "tsConfig": 'jest.tsconfig.json'
    }
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
};
