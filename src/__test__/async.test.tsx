describe('examples for async', () => {
  test('for jest', async () => {
    const fetchData = async () => {
      const res = await new Promise((resolve) =>
        resolve('this is a demo for fetching data')
      );
      return res;
    };
    const data = await fetchData();
    expect(data).toBe('this is a demo for fetching data');
    // await expect(fetchData()).rejects.toBe('this is a demo for fetching data');
    await expect(fetchData()).resolves.toBe('this is a demo for fetching data');
  });
});
