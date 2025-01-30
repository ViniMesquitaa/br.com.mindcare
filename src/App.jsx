import { Route, Routes, useLocation } from "react-router";
import "./app.css";
import Home from "./pages/Home";
import Login from "./pages/Login/login";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { Header } from "./components/Header";
import { PassRecover } from "./pages/PassRecover";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
<<<<<<< HEAD
  const showHeader = pathname !== "/login" && pathname !== "/register" && pathname !== "/recoverpassword" && pathname !== "/admins/register";
=======
  const showHeader =
    pathname !== "/login" &&
    pathname !== "/register" &&
    pathname !== "/recoverpassword";
>>>>>>> 2f70fed1ab8a98e1cd5aeb805c5277075109aff6
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admins/register" element={<RegisterAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverpassword" element={<PassRecover />} />
      </Routes>
    </>
  );
}

export default App;
