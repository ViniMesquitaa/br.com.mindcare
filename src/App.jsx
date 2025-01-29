import { Route, Routes, useLocation } from "react-router";
import "./app.css";
import Home from "./pages/Home";
import Login from "./pages/Login/login";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { Header } from "./components/Header";
import { PassRecover } from "./pages/PassRecover";

import PatientRegistration from "./pages/Register/patientRegistration";
import DoctorRegistration from "./pages/Register/doctorRegistration";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader = pathname !== "/login" && pathname !== "/register"
    && pathname !== "/patientRegistration" && pathname !== "/doctorRegistration";
  
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admins/register" element={<RegisterAdmin />} />
        <Route path="/login" element={<Login />} />

        <Route path="/patientRegistration" element={<PatientRegistration />} />
        <Route path="/doctorRegistration" element={<DoctorRegistration/>}/> 
      </Routes>
    </>
  );
}

export default App;
