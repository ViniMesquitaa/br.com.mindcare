import React from "react";
import { useToastContext } from "../../context/ToastProvider";
import "./styles.css";

export const Toast = () => {
  const { toasts } = useToastContext();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          {toast.type === "loading" ? <div className="spinner"></div> : null}
          <div>
            {toast.title && <strong>{toast.title}</strong>}
            {toast.description && <p>{toast.description}</p>}
          </div>
          <div className="close">&times;</div>
        </div>
      ))}
    </div>
  );
};
