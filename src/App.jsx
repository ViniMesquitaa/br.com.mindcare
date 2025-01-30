import { Route, Routes, useLocation } from "react-router-dom";
import "./app.css";
import { Header } from "./components/Header";
import AdminPage from "./pages/admin";
import AdminHomePage from "./pages/admin-home";
import { AdminProfile } from "./pages/AdminProfile";
import Home from "./pages/Home";
import Login from "./pages/Login/login";
import { PacientProfile } from "./pages/PacientProfile";
import { PassRecover } from "./pages/PassRecover";
import PatientPage from "./pages/patients";
import ProfessionalPage from "./pages/professionals";
import { RegisterAdmin } from "./pages/RegisterAdmin";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader =
    pathname !== "/login" &&
    pathname !== "/register" &&
    pathname !== "/recoverpassword";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/pacient" element={<PatientPage />} />
        <Route path="/pacient/:id" element={<PacientProfile />} />
        <Route path="/professional" element={<ProfessionalPage />} />
        <Route path="/recoverpassword" element={<PassRecover />} />
        <Route path="/admin/:id" element={<AdminProfile />} />
      </Routes>
    </>
  );
}

export default App;
