import { Route, Routes, useLocation } from "react-router";
import "./app.css";
import Home from "./pages/Home";
import { Header } from "./components/Header";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader = pathname !== "/login" && pathname !== "/register";
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
