import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router";
import { InputPassword } from "../../components/InputPassword";

export function PassRecover() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [formPasswordsValues, setFormPasswordValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setTimeout(() => setStep(2), 1000);
  };
  const handleCodeSubmit = (e) => {
    e.preventDefault();
    console.log(code);
    setTimeout(() => setStep(3), 1000);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log(formPasswordsValues);
    setTimeout(() => navigate("/"), 1000);
  };
  return (
    <div className="containerpasswordrecover">
      {step === 1 && (
        <div className="caixaprincipal">
          <h1 className="titulo">Recuperar Senha</h1>
          <p className="paragrafo">Digite seu e-mail para redefinir a senha</p>
          <form onSubmit={handleEmailSubmit}>
            <label htmlFor="email" className="label1">
              Email <span className="spanred">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="inputs1"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="botaozul">
              Enviar
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="caixaprincipal">
          <h1 className="titulo">Verifique seu e-mail</h1>
          <p className="paragrafo">
            Digite o código de 5 dígitos mencionado no e-mail
          </p>
          <form onSubmit={handleCodeSubmit}>
            <div className="code-inputs">
              <input type="text" maxlength="1" className="inputs1" required />
              <input type="text" maxlength="1" className="inputs1" required />
              <input type="text" maxlength="1" className="inputs1" required />
              <input type="text" maxlength="1" className="inputs1" required />
              <input type="text" maxlength="1" className="inputs1" required />
            </div>
            <button type="submit" className="botaozul">
              Verificar código
            </button>
          </form>
          <p>Ainda não recebeu o email ?</p>{" "}
          <a href="#" className="link">
            Reenviar e-mail
          </a>
        </div>
      )}
      {step === 3 && (
        <div className="caixaprincipal">
          <h1 className="titulo">Cadastrar Nova Senha</h1>
          <form onSubmit={handlePasswordSubmit}>
            <InputPassword
              label="Nova senha"
              name="newpassword"
              value={formPasswordsValues.password}
              onChange={(e) =>
                setFormPasswordValues((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              labelClassName="label1"
              inputClassName="inputs1"
              errorClassName="error-message"
              toggleButtonClassName="toggle-button"
            />

            <InputPassword
              label="Confirmar Senha"
              name="confirmpassword"
              value={formPasswordsValues.confirmPassword}
              onChange={(e) =>
                setFormPasswordValues((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              labelClassName="label1"
              inputClassName="inputs1"
              errorClassName="error-message"
              toggleButtonClassName="toggle-button"
            />

            <div className="requirements">
              A senha precisa ter:
              <ul>
                <li>Mínimo de 8 caracteres.</li>
                <li>Pelo menos 1 letra maiúscula.</li>
                <li>Pelo menos 1 letra minúscula.</li>
                <li>Pelo menos 1 número.</li>
                <li>Pelo menos 1 símbolo (!@#$%&*).</li>
              </ul>
            </div>

            <div className="button-group">
              <button type="button" className="cancelar">
                <strong>Cancelar</strong>
              </button>
              <button type="submit" className="botaozul">
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
