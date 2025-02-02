import { useSession } from "../../hooks/useSession";
import { SearchPatients } from "../SearchPatients";
import { SearchProfessionals } from "../SearchProfessionals";
import AdminPage from "../admin";

const Home = () => {
  const { session } = useSession();
  return (
    <>
      <div>{session?.user?.tipoUsuario === "1" && <AdminPage />}</div>
      <div>{session?.user?.tipoUsuario === "4" && <SearchPatients />}</div>
      <div>{session?.user?.tipoUsuario === "3" && <SearchProfessionals />}</div>
    </>
  );
};

export default Home;
