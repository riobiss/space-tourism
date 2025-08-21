import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburguer from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import "./Header.css";

function Header() {
  const [active, setMenu] = useState(false);

  const toggleMode = () => {
    setMenu(!active);
  }

  return (
    <nav className="cabeca">
      <Link to="/">
        <img id="logo" src={Logo} alt="Logo" />
      </Link>
      <div className="fundo">
        <menu className={active ? "menu menuOpen" : "menu menuClose"}>
          <ul>
            <li>
              <Link to="/">
                <span className="sumir">00</span> HOME
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <span className="sumir">01</span> DESTINATION
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <span className="sumir">02</span> CREW
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <span className="sumir">03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </menu>
        <img
          id="menuBurguer"
          src={active ? Close : Hamburguer}
          alt="Hamburguer"
          onClick={toggleMode}
        />
      </div>
    </nav>
  );
}
export default Header;
