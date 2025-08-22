import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburguer from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import styles from "../styles/Header.module.css";

function Header() {
  const [active, setMenu] = useState(false);

  const toggleMode = () => setMenu(!active);

  return (
    <div className="container">
      <nav className={styles.Header}>
        <div className={styles.bgMenu}>
          <Link to="/">
            <img className={styles.iconLogo} src={Logo} alt="Logo" />
          </Link>
          <menu
            className={`${styles.menu} ${
              active ? styles.menuOpen : styles.menuClose
            }`}
          >
            <ul className={styles.links}>
              <li className={styles.ancora}>
                <Link to="/" className={styles.paginas}>
                  <span className={styles.sumir}>00</span> HOME
                </Link>
              </li>
              <li className={styles.ancora}>
                <Link to="/destination" className={styles.paginas}>
                  <span className={styles.sumir}>01</span> DESTINATION
                </Link>
              </li>
              <li className={styles.ancora}>
                <Link to="/crew" className={styles.paginas}>
                  <span className={styles.sumir}>02</span> CREW
                </Link>
              </li>
              <li className={styles.ancora}>
                <Link to="/technology" className={styles.paginas}>
                  <span className={styles.sumir}>03</span> TECHNOLOGY
                </Link>
              </li>
            </ul>
          </menu>
          <img
            className={styles.iconBurguer}
            src={Hamburguer}
            alt="Hamburguer"
            onClick={toggleMode}
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
