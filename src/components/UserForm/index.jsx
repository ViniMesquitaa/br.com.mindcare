import { CircleUserRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { userTypes } from "../../utils/constants";
import { generateRandomPassword } from "../../utils/generateRandomPassword";
import { isValidEmail, phoneMask } from "../../utils/masks";
import "./styles.css";

export function UserForm({ isAdminRegister, isEdit, defaultValues, onSubmit }) {
  const [formValues, setFormValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    photo: null,
    userType: "",
    ...defaultValues,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const userTypeOptions = useMemo(
    () => (isAdminRegister ? userTypes.admin : userTypes.common),
    [isAdminRegister]
  );

  const validate = () => {
    const newErrors = {};
    if (!formValues.fullName.trim())
      newErrors.fullName = "Nome completo é obrigatório";
    if (!formValues.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formValues.email.trim() || !isValidEmail(formValues.email))
      newErrors.email = "E-mail inválido";

    if (!isAdminRegister) {
      if (!formValues.password.trim() && !isEdit)
        newErrors.password = "Senha é obrigatória";
      else if (formValues.password.length < 8 && !isEdit)
        newErrors.password = "A senha deve ter pelo menos 8 caracteres";
      if (!formValues.confirmPassword && !isEdit)
        newErrors.confirmPassword = "Confirmação de senha é obrigatória";
      if (formValues.password !== formValues.confirmPassword)
        newErrors.confirmPassword = "As senhas não coincidem";
    }

    if (!formValues.address.trim())
      newErrors.address = "Endereço é obrigatório";
    if (!formValues.userType.trim())
      newErrors.userType = "Tipo de usuário é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: name === "phone" ? phoneMask(value) : value,
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

  useEffect(() => {
    if (isAdminRegister) {
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
        fullName: defaultValues.fullName || "",
        phone: defaultValues.phone || "",
        email: defaultValues.email || "",
        address: defaultValues.address || "",
        photo: defaultValues.photoUrl || null,
      }));
    }
  }, [isAdminRegister, defaultValues]);

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <div className="photo-container">
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
            type="file"
            id="file"
            className="file-input"
            onChange={handleFileChange}
          />
          <span>Selecione uma imagem</span>
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="fullName" className="input-label">
          Nome completo <small>*</small>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onFocus={handleFocus}
          value={formValues.fullName}
          onChange={handleInputChange}
          className={`input-field ${errors.fullName ? "error" : ""}`}
        />
        {errors.fullName && (
          <small className="error-message">{errors.fullName}</small>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="email">
          E-mail <small>*</small>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onFocus={handleFocus}
          value={formValues.email}
          onChange={handleInputChange}
          className={`input-field ${errors.email ? "error" : ""}`}
        />
        {errors.email && (
          <small className="error-message">{errors.email}</small>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="address">
          Endereço <small>*</small>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          onFocus={handleFocus}
          value={formValues.address}
          onChange={handleInputChange}
          className={`input-field ${errors.address ? "error" : ""}`}
        />
        {errors.address && (
          <small className="error-message">{errors.address}</small>
        )}
      </div>

      <div className="wrapper">
        <div className="input-group">
          <label htmlFor="phone">
            Telefone <small>*</small>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onFocus={handleFocus}
            value={formValues.phone}
            onChange={handleInputChange}
            className={`input-field ${errors.phone ? "error" : ""}`}
          />
          {errors.phone && (
            <small className="error-message">{errors.phone}</small>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="userType">
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
      </div>

      <div className="input-group">
        <label htmlFor="password">
          Senha <small>*</small>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onFocus={handleFocus}
          value={formValues.password}
          onChange={handleInputChange}
          disabled={isAdminRegister}
          className={`input-field ${errors.password ? "error" : ""}`}
        />
        {errors.password && (
          <small className="error-message">{errors.password}</small>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="confirmPassword">
          Confirmação de senha <small>*</small>
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onFocus={handleFocus}
          value={formValues.confirmPassword}
          onChange={handleInputChange}
          disabled={isAdminRegister}
          className={`input-field ${errors.confirmPassword ? "error" : ""}`}
        />
        {errors.confirmPassword && (
          <small className="error-message">{errors.confirmPassword}</small>
        )}
      </div>

      <button type="submit" className="submit-button">
        {defaultValues ? "Editar" : "Cadastrar"}
      </button>
    </form>
  );
}
