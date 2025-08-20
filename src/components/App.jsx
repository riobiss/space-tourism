import React, { useState } from "react";
import Logo from "../assets/shared/logo.svg";
import Hamburguer from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import "../styles.css";

function App() {
  const [active, setMenu] = useState(false);
  const toggleMode = () => {
    setMenu(!active);
  };

  return (
    <div className="container">
      <nav className="cabeca">
        <a href="index.js">
          <img id="logo" src={Logo} alt="Logo" />{" "}
        </a>
        <menu className={active ? "menu menuOpen" : "menu menuClose"}>
          <ul>
            <li>00 Home</li>
            <li>01 Destination</li>
            <li>02 Crew</li>
            <li>03 Technology</li>
          </ul>
        </menu>
        <img
          id="menuBurguer"
          src={active ? Close : Hamburguer}
          alt="Hamburguer"
          onClick={toggleMode}
        />
      </nav>
      <div className="introducao">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bola">
        <h2>Explore</h2>
      </div>
    </div>
  );
}

export default App;
