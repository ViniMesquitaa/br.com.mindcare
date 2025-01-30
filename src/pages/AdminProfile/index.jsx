import { UserForm } from "../../components/UserForm";
import "./styles.css";

export function AdminProfile() {
  const defaultValues = {
    id: "1",
    photo:
      "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    fullName: "Pedro Lucas Silva Mesquita",
    cpf: "047.487.553-93",
    birthDate: "21/09/2000",
    phone: "(85) 99976-6539",
    email: "pedrolucas0921@gmail.com",
    cep: "60714-070",
    street: "Rua Thomas Edison",
    neighborhood: "Itaperi",
    city: "Fortaleza",
    state: "CE",
    houseNumber: "1000",
    complement: "Ap 305 Bl 1",
    password: "we01yr8u",
    confirmPassword: "we01yr8u",
    userType: "1",
    status: "2",
  };

  const handleSubmit = (values) => console.log(values);

  return (
    <section className="admin-profile-container">
      <div className="admin-profile-content">
        <UserForm
          isAdmin
          onSubmit={handleSubmit}
          defaultValues={defaultValues}
        />
      </div>
    </section>
  );
}
