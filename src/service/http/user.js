import { api } from ".";
import { ENDPOINTS } from "./endpoints";

export const login = async (data) => {
  const response = await api.post(ENDPOINTS.login, data);
  return response?.data;
};
