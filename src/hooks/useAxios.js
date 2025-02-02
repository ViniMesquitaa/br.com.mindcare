import Axios from "axios";
import { TIME_TO_REDIRECT } from "../config/constants";
import { ROUTES } from "../config/routes";
import { authManager } from "../service/authManager";
// import { logout } from "../services/http/user";

export const redirect = (path) => {
  setTimeout(() => {
    window.location.href = path;
  }, TIME_TO_REDIRECT);
};

function createAxiosInstance(defaultBaseURL, withCredentials) {
  const axios = Axios.create({
    baseURL: defaultBaseURL,
    withCredentials,
  });

  axios.interceptors.request.use(
    (config) => {
      const data = authManager.get();
      try {
        if (data?.token) {
          config.headers.Authorization = `Bearer ${data.token}`;
        }
      } catch (error) {}
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      try {
        if (!error?.status) {
          authManager.clear();
          redirect(ROUTES.NOT_PROTECTED.login);
        }
        if (error?.status === 401) {
          authManager.clear();
          redirect(ROUTES.NOT_PROTECTED.login);
          // await logout();
        }
      } catch {}

      return Promise.reject(error);
    }
  );

  return axios;
}

export function getAxios(defaultBaseURL) {
  return createAxiosInstance(defaultBaseURL, true);
}
