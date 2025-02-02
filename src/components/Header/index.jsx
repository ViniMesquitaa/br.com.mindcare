import {
  Brain,
  CircleUserRound,
  House,
  LogOut,
  Stethoscope,
  UserRoundCog,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import { getFirstAndSecondName } from "../../utils/getFirstAndSecondName";
import { getLink } from "../../utils/getLink";

import "./styles.css";

export const Header = () => {
  const [activePage, setActivePage] = useState("/");
  const { session, removeSession } = useSession();

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
    { label: "AdminHome", href: "/adminhome" },
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
          <NavLink key={href} to={href} className="menu-item">
            {label}
          </NavLink>
        ))}
      </nav>
      <nav className="icon-container">
        {sidebarItems.map(({ href, icon }) => (
          <Link key={href} href={href}>
            <div className="icon" onClick={() => setActivePage(href)}>
              {icon}
              {activePage === href && <div className="active-line" />}
            </div>
          </Link>
        ))}
      </nav>
      <div className="profile-container">
        <Link
          to={getLink(session?.user?.tipoUsuario, session?.user?.id)}
          className="profile-info"
        >
          <div className="avatar">
            <img src={session?.user?.foto} alt="Usuário" />
          </div>
          <span className="user-name">
            {getFirstAndSecondName(session?.user?.nome)}
          </span>
        </Link>
        <button className="logout-button" onClick={() => removeSession()}>
          <LogOut color="#687dac" size={32} />
        </button>
      </div>
    </header>
  );
};
