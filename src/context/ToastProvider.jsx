import { createContext, useContext, useState } from "react";
import { TOAST_DURATION } from "../config/constants";

const ToastContext = createContext();

export const useToastContext = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const newToast = {
      id: Date.now(),
      ...toast,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== newToast.id)
      );
    }, TOAST_DURATION);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};
