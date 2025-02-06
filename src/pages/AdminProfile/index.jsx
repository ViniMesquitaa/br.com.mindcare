import { UserForm } from "../../components/UserForm";
import { DEFAULT_VALUES } from "../../config/constants";
import "./styles.css";

export function AdminProfile() {
  const handleSubmit = (values) => console.log(values);

  return (
    <section className="admin-profile-container">
      <div className="admin-profile-content">
        <UserForm
          isAdmin
          onSubmit={handleSubmit}
          defaultValues={DEFAULT_VALUES}
        />
      </div>
    </section>
  );
}
