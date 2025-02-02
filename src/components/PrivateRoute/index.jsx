import { Navigate } from "react-router-dom";
import {} from "../../context/SessionProvider";
import { useSession } from "../../hooks/useSession";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSession();
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
