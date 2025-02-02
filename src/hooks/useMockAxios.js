import { AXIOS_MOCK_ADAPTER_DELAY_RESPONSE } from "../config/constants";
import { mockUserService } from "../service/mock/user";

export const useMockAxios = () => {
  if (import.meta.env.VITE_MOCK_API_URL) {
    mockUserService(AXIOS_MOCK_ADAPTER_DELAY_RESPONSE);
    return;
  }
};

export const getMockAxios = () => {
  mockUserService();
};
