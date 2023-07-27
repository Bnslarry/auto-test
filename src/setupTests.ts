import '@testing-library/jest-dom';

// 移除 jest 的 log 输出
global.console = {
  log: jest.fn(),
  debug: console.debug,
  trace: console.trace,
};