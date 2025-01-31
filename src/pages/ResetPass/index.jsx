import { useState } from "react";
import { InputPassword } from "../../components/InputPassword";
import "./styles.css";

export function ResetPass() {
    const [formPasswordsValues, setFormPasswordValues] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [passwordStrength, setPasswordStrength] = useState({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSymbol: false,
    });

    const validatePasswordStrength = (password) => {
        setPasswordStrength({
            minLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSymbol: /[!@#$%&*]/.test(password),
        });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setFormPasswordValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "newPassword") {
            validatePasswordStrength(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            oldPassword: formPasswordsValues.oldPassword ? "" : "Informe sua senha atual.",
            newPassword: passwordStrength.minLength &&
                passwordStrength.hasUpperCase &&
                passwordStrength.hasLowerCase &&
                passwordStrength.hasNumber &&
                passwordStrength.hasSymbol
                ? ""
                : "A senha não atende aos requisitos.",
            confirmPassword: formPasswordsValues.newPassword === formPasswordsValues.confirmPassword
                ? ""
                : "As senhas não coincidem.",
        };

        setErrors(newErrors);
    };

    return (
        <div className="container-recover">
            <div className="box-main">
                <h1 className="title">Cadastrar Nova Senha</h1>
                <form className="form-pass" onSubmit={handleSubmit}>
                    <InputPassword
                        label="Senha Atual"
                        name="oldPassword"
                        value={formPasswordsValues.oldPassword}
                        onChange={handlePasswordChange}
                        onFocus={() => setErrors((prev) => ({ ...prev, oldPassword: "" }))}
                        error={errors.oldPassword}
                        labelClassName="label"
                        inputClassName="input"
                        errorClassName="error-text"
                        toggleButtonClassName="toggle-button"
                    />

                    <InputPassword
                        label="Nova senha"
                        name="newPassword"
                        value={formPasswordsValues.newPassword}
                        onChange={handlePasswordChange}
                        onFocus={() => setErrors((prev) => ({ ...prev, newPassword: "" }))}
                        error={errors.newPassword}
                        labelClassName="label"
                        inputClassName="input"
                        errorClassName="error-text"
                        toggleButtonClassName="toggle-button"
                    />

                    <InputPassword
                        label="Confirmar Senha"
                        name="confirmPassword"
                        value={formPasswordsValues.confirmPassword}
                        onChange={handlePasswordChange}
                        onFocus={() => setErrors((prev) => ({ ...prev, confirmPassword: "" }))}
                        error={errors.confirmPassword}
                        labelClassName="label"
                        inputClassName="input"
                        errorClassName="error-text"
                        toggleButtonClassName="toggle-button"
                    />

                    <div className="requirements">
                        A senha precisa ter:
                        <ul>
                            <li className={passwordStrength.minLength ? "valid" : "invalid"}>
                                Mínimo de 8 caracteres.
                            </li>
                            <li className={passwordStrength.hasUpperCase ? "valid" : "invalid"}>
                                Pelo menos 1 letra maiúscula.
                            </li>
                            <li className={passwordStrength.hasLowerCase ? "valid" : "invalid"}>
                                Pelo menos 1 letra minúscula.
                            </li>
                            <li className={passwordStrength.hasNumber ? "valid" : "invalid"}>
                                Pelo menos 1 número.
                            </li>
                            <li className={passwordStrength.hasSymbol ? "valid" : "invalid"}>
                                Pelo menos 1 símbolo (!@#$%&*).
                            </li>
                        </ul>
                    </div>

                    <div className="button-group">
                        <button type="submit" className="button-save">
                            Salvar
                        </button>
                        <button type="button" className="button-cancel">
                            <strong>Cancelar</strong>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
