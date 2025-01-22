import { Route, Routes, useLocation } from "react-router";
import "./app.css";
import Home from "./pages/Home";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { Header } from "./components/Header";
import { PassRecover } from "./pages/PassRecover";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader = pathname !== "/login" && pathname !== "/register";
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admins/register" element={<RegisterAdmin />} />
        <Route path="/admins/passrecover" element={<PassRecover />} />
      </Routes>
    </>
  );
}

export default App;
