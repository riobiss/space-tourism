import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburguer from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

function Header() {

  const [active, setMenu] = useState(false);
  
  const toggleMode = () => {
    setMenu(!active);
  };

  return (
    
      <nav className="cabeca">
        <Link to="/">
          <img id="logo" src={Logo} alt="Logo" />
        </Link>
        <menu className={active ? "menu menuOpen" : "menu menuClose"}>
          <ul>
            <li>
              <Link to="/">00 Home</Link>
            </li>
            <li>
              <Link to="/destination">01 Destination</Link>
            </li>
            <li>
              <Link to="/crew">02 Crew</Link>
            </li>
            <li>
              <Link to="/technology">03 Technology </Link>
            </li>
          </ul>
        </menu>
        <img
          id="menuBurguer"
          src={active ? Close : Hamburguer}
          alt="Hamburguer"
          onClick={toggleMode}
        />
      </nav>
  );
}
export default Header;
