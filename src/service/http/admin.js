import { api } from ".";
import { ENDPOINTS } from "./endpoints";

export const getIndicators = async () => {
  const response = await api.get(ENDPOINTS.getIndicators);
  return response?.data;
};
