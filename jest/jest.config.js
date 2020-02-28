module.exports = {
  "roots": [
    "../src"
  ],
  "setupFiles": [
    "./setupTests.ts",
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
  },
  "globals": {
    "ts-jest": {
      "babelConfig": true,
      "tsConfig": 'jest/jest.tsconfig.json'
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
