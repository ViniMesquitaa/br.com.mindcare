import { CircleUserRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { MOCK_USERS, USER_TYPES } from "../../utils/constants";
import { generateRandomPassword } from "../../utils/generateRandomPassword";
import {
  birthDateMask,
  cepMask,
  cpfMask,
  isValidBirthDate,
  isValidCep,
  isValidCPF,
  isValidEmail,
  isValidPhone,
  phoneMask,
} from "../../utils/masks";
import { InputPassword } from "../InputPassword";
import { fetchAddressByCep } from "../../service/addressService";
import "./styles.css";
import { useParams } from "react-router-dom";

export function UserForm({ isAdmin, defaultValues, onSubmit }) {
  const [formValues, setFormValues] = useState({
    id: "",
    photo: null,
    fullName: "",
    cpf: "",
    birthDate: "",
    phone: "",
    email: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    houseNumber: "",
    complement: "",
    password: "",
    confirmPassword: "",
    userType: "",
    status: "",
    ...defaultValues,
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const debouncedCep = useDebounce(formValues.cep, 500);

  const userTypeOptions = useMemo(
    () => (isAdmin ? USER_TYPES.admin : USER_TYPES.common),
    [isAdmin]
  );

  const { id: urlUserId } = useParams();
  const loggedUser = MOCK_USERS[0];
  const isUserLogged = urlUserId === loggedUser.id;
  const isEditing = Boolean(defaultValues);
  const isActive = defaultValues?.status === "1";

  const validate = () => {
    const newErrors = {};

    if (!formValues.fullName.trim()) {
      newErrors.fullName = "Nome completo é obrigatório";
    }

    if (!formValues.cpf.trim()) {
      newErrors.cpf = "CPF é obrigatório";
    } else if (!isValidCPF(formValues.cpf)) {
      newErrors.cpf = "CPF inválido";
    }

    if (!formValues.birthDate.trim()) {
      newErrors.birthDate = "Data de nascimento é obrigatória";
    } else if (!isValidBirthDate(formValues.birthDate)) {
      newErrors.birthDate = "Data de nascimento inválida";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!isValidEmail(formValues.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formValues.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!isValidPhone(formValues.phone)) {
      newErrors.phone = "Telefone inválido";
    }

    if (!formValues.cep.trim()) {
      newErrors.cep = "CEP é obrigatório";
    } else if (!isValidCep(formValues.cep)) {
      newErrors.cep = "CEP inválido";
    }

    if (!formValues.password.trim() && !defaultValues) {
      newErrors.password = "Senha é obrigatória";
    } else if (formValues.password.length < 8 && !defaultValues) {
      newErrors.password = "A senha deve ter pelo menos 8 caracteres";
    }

    if (!formValues.confirmPassword && !defaultValues) {
      newErrors.confirmPassword = "Confirmação de senha é obrigatória";
    }

    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    if (!formValues.userType.trim()) {
      newErrors.userType = "Tipo de usuário é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let maskedValue = value;

    if (name === "phone") {
      maskedValue = phoneMask(value);
    } else if (name === "birthDate") {
      maskedValue = birthDateMask(value);
    } else if (name === "cpf") {
      maskedValue = cpfMask(value);
    } else if (name === "cep") {
      maskedValue = cepMask(value);
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: maskedValue,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValues((prev) => ({ ...prev, photo: file }));
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formValues);
    }
  };

  const toggleUserStatus = () => {
    defaultValues.status === "1"
      ? console.log("usuário desativado com sucesso")
      : console.log("usuário ativado com sucesso");
  };

  useEffect(() => {
    if (isAdmin) {
      const randomPassword = generateRandomPassword();
      setFormValues((prev) => ({
        ...prev,
        password: randomPassword,
        confirmPassword: randomPassword,
      }));
    }
    if (defaultValues) {
      setFormValues((prev) => ({
        ...prev,
        id: defaultValues.id || "",
        fullName: defaultValues.fullName || "",
        cpf: defaultValues.cpf || "",
        birthDate: defaultValues.birthDate || "",
        phone: defaultValues.phone || "",
        email: defaultValues.email || "",
        cep: defaultValues.cep || "",
        street: defaultValues.street || "",
        neighborhood: defaultValues.neighborhood || "",
        city: defaultValues.city || "",
        state: defaultValues.state || "",
        houseNumber: defaultValues.houseNumber || "",
        complement: defaultValues.complement || "",
        password: defaultValues.password || "",
        confirmPassword: defaultValues.confirmPassword || "",
        userType: defaultValues.userType || "",
        status: defaultValues.state || "",
      }));
      setPhotoPreview(defaultValues.photo || null);
    }
    if (debouncedCep && isValidCep(debouncedCep)) {
      fetchAddressByCep(debouncedCep)
        .then((address) => {
          setFormValues((prevValues) => ({
            ...prevValues,
            street: address.street,
            neighborhood: address.neighborhood,
            city: address.city,
            state: address.state,
          }));
          setErrors({});
        })
        .catch((error) => {
          setErrors({ cep: error.message });
        });
    }
  }, [isAdmin, defaultValues, debouncedCep]);

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <section className="photo-container">
        <label htmlFor="file" className="file-label">
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Foto de perfil"
              className="profile-photo"
            />
          ) : (
            <CircleUserRound className="profile-icon" />
          )}

          <input
            id="file"
            name="file"
            type="file"
            className="file-input"
            disabled={!isUserLogged && isEditing}
            onChange={handleFileChange}
          />
          {(isUserLogged || !isEditing) && <span>Selecione uma imagem</span>}
        </label>
      </section>
      <section className="form-section">
        <div className="input-group">
          <label htmlFor="fullName" className="input-label">
            Nome completo <small>*</small>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onFocus={handleFocus}
            disabled={!isUserLogged && isEditing}
            value={formValues.fullName}
            onChange={handleInputChange}
            placeholder="Digite seu nome completo"
            className={`input-field ${errors.fullName ? "error" : ""}`}
          />
          {errors.fullName && (
            <small className="error-message">{errors.fullName}</small>
          )}
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="cpf" className="input-label">
              CPF <small>*</small>
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              maxLength="14"
              onFocus={handleFocus}
              value={formValues.cpf}
              disabled={!isUserLogged && isEditing}
              onChange={handleInputChange}
              placeholder="Digite seu CPF."
              className={`input-field ${errors.cpf ? "error" : ""}`}
            />
            {errors.cpf && (
              <small className="error-message">{errors.cpf}</small>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="birthDate" className="input-label">
              Data de nascimento <small>*</small>
            </label>
            <input
              type="text"
              id="birthDate"
              name="birthDate"
              maxLength="10"
              onFocus={handleFocus}
              disabled={!isUserLogged && isEditing}
              value={formValues.birthDate}
              onChange={handleInputChange}
              placeholder="Informe sua data de nascimento."
              className={`input-field ${errors.birthDate ? "error" : ""}`}
            />
            {errors.birthDate && (
              <small className="error-message">{errors.birthDate}</small>
            )}
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              E-mail <small>*</small>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onFocus={handleFocus}
              disabled={!isUserLogged && isEditing}
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail."
              className={`input-field ${errors.email ? "error" : ""}`}
            />
            {errors.email && (
              <small className="error-message">{errors.email}</small>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="phone" className="input-label">
              Telefone <small>*</small>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onFocus={handleFocus}
              disabled={!isUserLogged && isEditing}
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Digite seu telefone com DDD."
              className={`input-field ${errors.phone ? "error" : ""}`}
            />
            {errors.phone && (
              <small className="error-message">{errors.phone}</small>
            )}
          </div>
        </div>
      </section>
      <section className="form-section">
        <div className="input-group">
          <label htmlFor="cep" className="input-label">
            CEP <small>*</small>
          </label>
          <div className="cep-container">
            <input
              type="text"
              id="cep"
              name="cep"
              maxLength="9"
              placeholder="Digite seu CEP."
              onFocus={handleFocus}
              value={formValues.cep}
              disabled={!isUserLogged && isEditing}
              onChange={handleInputChange}
              className={`input-field ${errors.cep ? "error" : ""}`}
            />
          </div>
          {errors.cep && <small className="error-message">{errors.cep}</small>}
        </div>

        <div className="input-group">
          <label htmlFor="street" className="input-label">
            Rua
          </label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Rua"
            value={formValues.street}
            disabled
            className="input-field"
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="neighborhood" className="input-label">
              Bairro:
            </label>
            <input
              type="text"
              id="neighborhood"
              name="neighborhood"
              placeholder="Bairro"
              value={formValues.neighborhood}
              disabled
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="city" className="input-label">
              Cidade:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Cidade"
              value={formValues.city}
              disabled
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="state" className="input-label">
              Estado:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Estado"
              value={formValues.state}
              disabled
              className="input-field"
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="houseNumber" className="input-label">
              Número
            </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              disabled={!isUserLogged && isEditing}
              placeholder="Digite o número do endereço."
              value={formValues.houseNumber}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="complement" className="input-label">
              Complemento:
            </label>
            <input
              type="text"
              id="complement"
              name="complement"
              placeholder="Digite um complemento (opcional)."
              disabled={!isUserLogged && isEditing}
              value={formValues.complement}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </div>
      </section>

      {isEditing && loggedUser?.tipoUsuario === "1" ? (
        <div className="input-group">
          <label htmlFor="userType" className="input-label">
            Tipo de Usuário <small>*</small>
          </label>
          <select
            id="userType"
            name="userType"
            onFocus={handleFocus}
            value={formValues.userType}
            onChange={handleInputChange}
            className={`input-field ${errors.userType ? "error" : ""}`}
          >
            <option value="">Selecione o tipo de usuário</option>
            {userTypeOptions.map(({ label, id }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
          {errors.userType && (
            <small className="error-message">{errors.userType}</small>
          )}
        </div>
      ) : (
        <></>
      )}

      {isEditing || isAdmin ? (
        <></>
      ) : (
        <>
          <InputPassword
            label="Senha"
            name="password"
            onFocus={handleFocus}
            value={formValues.password}
            onChange={handleInputChange}
            error={errors.password}
            labelClassName="input-label"
            inputClassName="input-field"
            errorClassName="error-message"
            toggleButtonClassName="toggle-button"
          />
          <InputPassword
            label="Confirmação de senha"
            name="confirmPassword"
            onFocus={handleFocus}
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
            labelClassName="input-label"
            inputClassName="input-field"
            errorClassName="error-message"
            toggleButtonClassName="toggle-button"
          />
        </>
      )}
      <div className="buttons_container">
        {(loggedUser?.tipoUsuario === "1" || !isEditing) && (
          <button type="submit" className="submit-button">
            {isEditing ? "Editar" : "Cadastrar"}
          </button>
        )}

        {isEditing && !isUserLogged && (
          <button
            type="button"
            className="submit-button"
            onClick={toggleUserStatus}
          >
            {isActive ? "Desativar" : "Ativar"}
          </button>
        )}
      </div>
    </form>
  );
}
