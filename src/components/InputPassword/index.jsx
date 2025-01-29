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
  labelClassName = "",
  inputClassName = "",
  errorClassName = "",
  toggleButtonClassName = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input-group">
      <label htmlFor={name} className={`${labelClassName}`}>
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
          className={`${inputClassName} ${error ? "error" : ""}`} // Classe dinâmica para o input
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={toggleButtonClassName}
        >
          {showPassword ? (
            <Eye className="toggle-icon" />
          ) : (
            <EyeClosed className="toggle-icon" />
          )}
        </button>
      </div>
      {error && <small className={`${errorClassName}`}>{error}</small>}
    </div>
  );
}
