import { UserForm } from "../../components/UserForm";
import "./styles.css";

export function RegisterAdmin() {
  return (
    <div className="container">
      <UserForm onSubmit={(values) => console.log(values)} />
    </div>
  );
}
