/* eslint-disable @typescript-eslint/no-var-requires */
import axios from 'axios';
import { mocked } from 'jest-mock';
import mock from '../components/Mock';

jest.mock('axios');

describe('examples for mock', () => {
  test('a test for global mock', async () => {
    const res = 'this is a test for global mock';
    // axios.get.mockResolvedValue(res);
    mocked(axios.get).mockResolvedValue(res);
    const data = await axios.get('/');
    expect(data).toBe('this is a test for global mock');
  });
  test("other ways for global mock", async () => {
    const res = "this is a test for global mock";
    jest.spyOn(axios, "get").mockResolvedValue(res);
    const data = await axios.get("/");
    expect(data).toBe("this is a test for global mock");
  });
  test('a test for single mock', () => {
    // doMock 只对这个 test 生效
    jest.doMock('../components/Mock', () => ({
      __esModule: true,
      getMockData: () => {
        return 'newMockData';
      }
    }));
    expect(mock.getMockData()).toBe('oldMockData');
    // 在用例内 require 的方式导入
    const mock1 = require('../components/Mock');
    expect(mock1.getMockData()).toBe('newMockData');
  });
  test("other ways for single mock", () => {
    jest.spyOn(mock, "getMockData").mockReturnValue("newMockData");
    expect(mock.getMockData()).toBe("newMockData");
  });
});
