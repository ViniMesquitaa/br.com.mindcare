import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import "./styleLogin.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false, emailFormat: false });

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateInputs = () => {
    const newErrors = {
      email: !email,
      password: !password,
      emailFormat: email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password && !newErrors.emailFormat;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      navigate("/home"); //alterado para o ambiente do usuario de acordo com seu cargo escolhido
    }
  };

  const handleRegister = () => {
    navigate("/home"); //dps deve ser alterado para o path de registro
  };

  return (
    <main className="login-main">
      <div className="login-container">
        <img src="svg-logo.svg" alt="" className="img-logo" />

        <div className="container-form-login">
          <form className="form-login" onSubmit={handleLogin}>
            <div className="input-login">
              <label htmlFor="email" className="label-login">
                Email
                {(errors.email || errors.emailFormat) && <span className="required"> *</span>}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className={`input-type ${errors.email || errors.emailFormat ? "input-error" : ""
                  }`}
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password" className="label-login">
                Senha
                {errors.password && <span className="required"> *</span>}
              </label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className={`input-type ${errors.password ? "input-error" : ""}`}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={togglePassword}
                  className="eye-icon"
                  role="button"
                  aria-label="Mostrar/Ocultar Senha"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="container-esqueceu-senha">
              <div className="container-esqueceu-senha">
                <a href="#" className="esqueceu-senha-text">Esqueceu a senha?</a>
              </div>
            </div>

            <div className="container-button">
              <div className="container-button-login">
                <button type="submit" className="button-login">
                  Entrar
                </button>
              </div>
              <div className="container-button-cadastro">
                <button type="button" className="button-cadastro" onClick={handleRegister}>
                  Cadastre-se
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
