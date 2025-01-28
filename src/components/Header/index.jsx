import {
  Brain,
  CircleUserRound,
  House,
  LogOut,
  Stethoscope,
  UserRoundCog,
} from "lucide-react";
import { useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [activePage, setActivePage] = useState("/");

  const sidebarItems = [
    {
      icon: <UserRoundCog color="#687dac" size={32} />,
      label: "Administradores",
      href: "/admin",
    },
    {
      icon: <Stethoscope color="#687dac" size={32} />,
      label: "Profissionais",
      href: "/professional",
    },
    { icon: <House color="#687dac" size={32} />, label: "Home", href: "/" },
    {
      icon: <Brain color="#687dac" size={32} />,
      label: "Pacientes",
      href: "/patient",
    },
    {
      icon: <CircleUserRound color="#687dac" size={32} />,
      label: "Perfil",
      href: "/profile",
    },
  ];

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Administradores", href: "/admin" },
    { label: "Profissionais", href: "/professional" },
    { label: "Pacientes", href: "/patient" },
  ];

  return (
    <header className="header-container">
      <a href="/" className="logo">
        <img src="/Logo.png" alt="Logo" />
      </a>
      <nav className="menu">
        {menuItems.map(({ label, href }) => (
          <NavLink key={href} to={href}>
            {label}
          </NavLink>
        ))}
      </nav>
      <nav className="icon-container">
        {sidebarItems.map(({ href, icon }) => (
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
          <LogOut color="#687dac" size={32} />
        </button>
      </div>
    </header>
  );
};
