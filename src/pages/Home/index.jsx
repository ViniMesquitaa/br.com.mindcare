import { MOCK_USERS } from "../../utils/constants";
import { SearchPatients } from "../SearchPatients";
import { SearchProfessionals } from "../SearchProfessionals";

const loggedUser = MOCK_USERS[3];
const Home = () => {
  return (
    <>
      <div>{loggedUser?.tipoUsuario === "4" && <SearchPatients />}</div>
      <div>{loggedUser?.tipoUsuario === "3" && <SearchProfessionals />}</div>
    </>
  );
};

export default Home;
