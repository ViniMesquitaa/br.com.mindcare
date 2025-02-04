import { Route, Routes, useLocation } from "react-router-dom";
import "./app.css";
import { Header } from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { Toast } from "./components/Toast";
import { ROUTES } from "./config/routes";
import { useMockAxios } from "./hooks/useMockAxios";
import AdminHomePage from "./pages/admin-home";
import AdminPage from "./pages/AdminPage";
import { AdminProfile } from "./pages/AdminProfile";
import Home from "./pages/Home";
import Login from "./pages/Login/login";
import { PacientProfile } from "./pages/PacientProfile";
import { PassRecover } from "./pages/PassRecover";
import PatientPage from "./pages/patients";
import { ProfessionalProfile } from "./pages/ProfessionalProfile";
import ProfessionalPage from "./pages/professionals";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { ResetPass } from "./pages/ResetPass";

function App() {
  useMockAxios();
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader =
    pathname !== ROUTES.NOT_PROTECTED.login &&
    pathname !== "/register" &&
    pathname !== "/recoverpassword";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path={ROUTES.NOT_PROTECTED.login} element={<Login />} />
        <Route
          path={ROUTES.PROTECTED.home}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/recoverpassword" element={<PassRecover />} />
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
      <Toast />
    </>
  );
}

export default App;
