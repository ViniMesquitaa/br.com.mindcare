import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import "./styles.css";

export function InputPassword({
  label,
  name,
  value,
  onChange,
  onFocus,
  error,
  disabled = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input-group">
      <label htmlFor={name} className="input-label">
        {label} <small>*</small>
      </label>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          onFocus={onFocus}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={`input-field ${error ? "error" : ""}`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-button"
        >
          {showPassword ? (
            <Eye className="toggle-icon" />
          ) : (
            <EyeClosed className="toggle-icon" />
          )}
        </button>
      </div>
      {error && <small className="error-message">{error}</small>}
    </div>
  );
}
