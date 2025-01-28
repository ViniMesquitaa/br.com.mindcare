import { Route, Routes, useLocation } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { Header } from "./components/Header";
import AdminPage from "./pages/admin";
import ProfessionalPage from "./pages/professionals";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader = pathname !== "/login" && pathname !== "/register";
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/professional" element={<ProfessionalPage />} />
      </Routes>
    </>
  );
}

export default App;
