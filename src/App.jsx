import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/login";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { Header } from "./components/Header";
import { PassRecover } from "./pages/PassRecover";
import "./app.css";
import AdminPage from "./pages/admin";
import PatientPage from "./pages/patients";
import ProfessionalPage from "./pages/professionals";
import AdminHomePage from "./pages/admin-home";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader = pathname !== "/login" && pathname !== "/register";
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/professional" element={<ProfessionalPage />} />
      </Routes>
    </>
  );
}

export default App;
