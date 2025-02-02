import { LOCAL_STORAGE } from "../config/constants";

export const authManager = {
  set: (token, user) => {
    try {
      const parsedUser = JSON.stringify(user);
      localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
      localStorage.setItem(LOCAL_STORAGE.USER, parsedUser);
      return true;
    } catch {
      return false;
    }
  },

  get: () => {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN) || "";
    const user = localStorage.getItem(LOCAL_STORAGE.USER);
    let parsedUser = {};
    if (user) parsedUser = JSON.parse(user);
    return { token, user: parsedUser };
  },

  clear: () => {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE.USER);
  },
};
