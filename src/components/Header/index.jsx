import { useState } from "react";
import { useLocation } from "react-router";
import {
  Admin,
  Home,
  Logout,
  Patient,
  Professional,
  Profile,
} from "../../assets/icons/";
import "./styles.css";

export const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader = pathname !== "/login" && pathname !== "/register";
  const [activePage, setActivePage] = useState("/home");

  const navigationItems = [
    { icon: <Admin />, label: "Admin", href: "/admin" },
    { icon: <Professional />, label: "Profissionais", href: "/professional" },
    { icon: <Home />, label: "Home", href: "/home" },
    { icon: <Patient />, label: "Pacientes", href: "/patient" },
    { icon: <Profile />, label: "Perfil", href: "/profile" },
  ];

  return (
    <header className={`header-container ${showHeader ? "" : "hidden"}`}>
      <a href="/home" className="logo">
        <img src="/Logo.png" alt="Logo" />
      </a>
      <nav className="menu">
        {navigationItems.map(({ label, href }) => (
          <a key={href} href={href} className="menu-item">
            {label}
          </a>
        ))}
      </nav>
      <nav className="icon-container">
        {navigationItems.map(({ href, icon }) => (
          <a key={href} href={href}>
            <div className="icon" onClick={() => setActivePage(href)}>
              {icon}
              {activePage === href && <div className="active-line" />}
            </div>
          </a>
        ))}
      </nav>
      <div className="profile-container">
        <a href="/profile" className="profile-info">
          <div className="avatar" style={{ width: "50px", height: "50px" }}>
            <img src="https://placehold.co/50x50" alt="Usuário" />
          </div>
          <span className="user-name">Jonh Doe</span>
        </a>
        <button className="logout-button">
          <Logout />
        </button>
      </div>
    </header>
  );
};
