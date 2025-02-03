import { useSession } from "../../hooks/useSession";
import { SearchPatients } from "../SearchPatients";
import { SearchProfessionals } from "../SearchProfessionals";
import AdminPage from "../admin";

const Home = () => {
  const { session } = useSession();
  const { tipoUsuario } = session?.user || {};

  if (tipoUsuario === "1" || tipoUsuario === "2") {
    return <AdminPage />;
  }

  if (tipoUsuario === "4") {
    return <SearchPatients />;
  }

  if (tipoUsuario === "3") {
    return <SearchProfessionals />;
  }

  return null;
};

export default Home;
