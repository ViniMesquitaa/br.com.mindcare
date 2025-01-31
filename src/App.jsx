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
import { ProfessionalProfile } from "./pages/ProfessionalProfile";
import { ResetPass } from "./pages/ResetPass";

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
        <Route path="/login" element={<Login />} />
        <Route path="/recoverpassword" element={<PassRecover />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/pacient" element={<PatientPage />} />
        <Route path="/pacient/:id" element={<PacientProfile />} />
        <Route path="/professional" element={<ProfessionalPage />} />
        <Route path="/professional/:id" element={<ProfessionalProfile />} />
        <Route path="/admin/:id" element={<AdminProfile />} />
        <Route path="/resetpassword" element={<ResetPass />} />
      </Routes>
    </>
  );
}

export default App;
