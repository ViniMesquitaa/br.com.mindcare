import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputPassword } from "../../components/InputPassword";
import { isValidEmail } from "../../utils/masks";

import "./styleLogin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const validateInputs = () => {
    const newErrors = {
      email: "",
      password: "",
    };
    if (!email) {
      newErrors.email = "O Email é obrigatório!";
    } else if (!isValidEmail(email)) {
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
    navigate("/admins/register");
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <main className="login-main">
      <div className="login-container">
        <img src="./svg-logo.svg" alt="Logo MindCare" className="img-logo" />
        <form className="form-login" onSubmit={handleLogin} noValidate>
          <div className="input-email">
            <label htmlFor="email" className="label-login">
              E-mail <small>*</small>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input-type ${errors.email ? "error" : ""}`}
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <InputPassword
            label="Senha"
            name="password"
            onFocus={handleFocus}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            labelClassName="label-login"
            inputClassName="input-type"
            errorClassName="error-text"
            toggleButtonClassName="eye-button"
          />

          <div className="container-esqueceu-senha">
            <Link to="/">
              <span className="esqueceu-senha-text">Esqueceu sua senha?</span>
            </Link>
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
