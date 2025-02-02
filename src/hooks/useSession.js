import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider";

export const useSession = () => {
  const payload = useContext(SessionContext);

  if (!payload) {
    throw new Error("useSession must be used inside SessionContext Provider");
  }

  try {
    const { token, user } = authManager.get();
    return {
      ...payload,
      user,
      token,
      isAuth: !!token && !!user,
    };
  } catch (error) {
    console.log(error);
    return {
      ...payload,
      isAuth: false,
    };
  }
};
