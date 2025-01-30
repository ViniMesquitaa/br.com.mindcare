import { MOCK_USERS } from "../../utils/constants";
import { SearchProfessionals } from "../SearchProfessionals";

const Home = () => {
  const loggedUser = MOCK_USERS[4];
  return <div>{loggedUser?.tipoUsuario && <SearchProfessionals />}</div>;
};

export default Home;
