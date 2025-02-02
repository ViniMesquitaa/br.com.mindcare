import { getAxios } from "../../hooks/useAxios";

export const api = getAxios(process.env.BACKEND_URL || "");
