const {defaults} = require('jest-config');

module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    transform: {
      "^.+\\js$": "babel-jest",
      "^.+\\.vue$": "vue-jest",
    },
    testMatch: ["**/*.spec.js"],
    restoreMocks: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],

  };