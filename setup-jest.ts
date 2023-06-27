import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-preset-angular/setup-jest.mjs';

global.console = {
  ...console,
  // log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  // error: jest.fn(),
};
