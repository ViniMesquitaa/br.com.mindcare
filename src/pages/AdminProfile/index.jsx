import { useParams } from "react-router";

export function AdminProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Perfil do Administrador</h1>
      <p>ID: {id}</p>
    </div>
  );
}
