import { UserForm } from "../../components/UserForm";
import "./styles.css";

export function RegisterAdmin() {
  const onSubmit = (values) => console.log(values);

  return (
    <div className="container">
      <UserForm onSubmit={onSubmit} isAdminRegister />
    </div>
  );
}
