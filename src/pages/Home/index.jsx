import { MOCK_USERS } from "../../utils/constants";
import { SearchPatients } from "../SearchPatients";

const Home = () => {
  const loggedUser = MOCK_USERS[4];
  return <div>{loggedUser?.tipoUsuario && <SearchPatients />}</div>;
};

export default Home;
