"use strict";

module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src/"],
  setupFilesAfterEnv: ["./setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ['ts', 'js', 'html'],
  modulePaths: ["<rootDir>"],
  //transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  transformIgnorePatterns: [ 'node_modules/(?!.*\\.mjs$|ng2-charts|@angular|lodash-es)' ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    'chart.js': '<rootDir>node_modules/chart.js/dist/chart.mjs'
  },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
};