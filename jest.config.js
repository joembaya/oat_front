// https://github.com/cedrickchee/react-typescript-jest-enzyme-testing
module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["<rootDir>/src/setupEnzyme.ts"],
};
