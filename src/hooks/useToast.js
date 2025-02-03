import { useState } from "react";

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (title, type = "error", description) => {
    const newToast = {
      id: Date.now(),
      title,
      type,
      description,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== newToast.id)
      );
    }, TOAST_DURATION);
  };

  return { toasts, addToast };
};

export default useToast;
