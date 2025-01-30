import { UserForm } from "../../components/UserForm";
import "./styles.css";

export function RegisterAdmin() {
  const onSubmit = (values) => console.log(values);

  return (
    <div className="admin-profile-container">
      <div className="admin-profile-content">
        <UserForm onSubmit={onSubmit} isAdminRegister />
      </div>
    </div>
  );
}
