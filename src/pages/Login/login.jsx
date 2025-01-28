import { useState } from "react";
import { CircleUserRound, Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./styleLogin.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const regexToValidateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateInputs = () => {
    const newErrors = {
      email: "",
      password: "",
    };
    if (!email) {
      newErrors.email = "O Email é obrigatório!";
    } else if (!regexToValidateEmail.test(email)) {
      newErrors.email = "Email inválido!";
    }

    if (!password) {
      newErrors.password = "A Senha é obrigatória!";
    }

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate("/");
    }
  };

  const handleRegister = () => {
    navigate("/");
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="login-main">
      <div className="login-container">
        <img src="./svg-logo.svg" alt="Logo MindCare" className="img-logo" />
        <form className="form-login" onSubmit={handleLogin} noValidate>
          <div className="input-email">
            <label htmlFor="email" className="label-login">
              E-mail
              {errors.email && <span className="required">*</span>}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input-type ${errors.email ? "input-error" : ""}`}
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="password-container">
            <label htmlFor="password" className="label-login">
              Senha
              {errors.password && <span className="required">*</span>}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={`input-type ${errors.password ? "input-error" : ""}`}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
            <i className="eye-icon" onClick={handleTogglePassword}>
              {showPassword ? <EyeClosed /> : <Eye />}
            </i>
          </div>
          <div className="container-esqueceu-senha">
            <a href="#" className="esqueceu-senha-text">
              Esqueceu sua senha?
            </a>
          </div>
          <div className="container-button">
            <button type="submit" className="button-login">
              Entrar
            </button>
            <button
              type="button"
              className="button-cadastro"
              onClick={handleRegister}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
