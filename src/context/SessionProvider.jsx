import { createContext, useCallback, useMemo, useState } from "react";
import { authManager } from "../service/authManager";

export const SessionContext = createContext({});

export const SessionProvider = ({ children }) => {
  const initialSession = authManager.get();

  const [session, setSession] = useState(initialSession);

  const updateSession = useCallback((data) => {
    setSession((prevSession) => {
      const updatedSession = { ...prevSession, ...data };
      authManager.set(updatedSession.token, updatedSession.user);
      return updatedSession;
    });
  }, []);

  const startSession = useCallback((sessionData) => {
    setSession(sessionData);
    authManager.set(sessionData.token, sessionData.user);
  }, []);

  const removeSession = useCallback(() => {
    setSession({});
    authManager.clear();
  }, []);

  const contextValue = useMemo(
    () => ({
      session,
      updateSession,
      startSession,
      removeSession,
    }),
    [session, updateSession, startSession, removeSession]
  );

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
