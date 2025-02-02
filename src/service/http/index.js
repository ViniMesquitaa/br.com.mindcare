import { getAxios } from "../../hooks/useAxios";

export const api = getAxios(import.meta.env.VITE_API_URL || "");
