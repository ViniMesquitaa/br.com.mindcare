export const useMockAxios = () => {
  if (process.env.BACKEND_URL) {
    return;
  }
};

export const getMockAxios = () => {};
