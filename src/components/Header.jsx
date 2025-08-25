import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburguer from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import styles from "../styles/Header.module.css";

function Header() {
  const [active, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const toggleMenu = () => setMenu(!active);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const menuLinks = (
    <ul className={styles.links}>
      <li className={styles.ancora} >
        <Link to="/" className={styles.paginas}>
          <span className={styles.sumir}>00 </span> HOME
        </Link>
      </li>
      <li className={styles.ancora}>
        <Link to="/destination" className={styles.paginas}>
          <span className={styles.sumir}>01 </span> DESTINATION
        </Link>
      </li>
      <li className={styles.ancora}>
        <Link to="/crew" className={styles.paginas}>
          <span className={styles.sumir}>02 </span> CREW
        </Link>
      </li>
      <li className={styles.ancora}>
        <Link to="/technology" className={styles.paginas}>
          <span className={styles.sumir}>03 </span> TECHNOLOGY
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className={styles.Header}>
      <div className={styles.bgMenu}>
        <Link to="/">
          <img className={styles.iconLogo} src={Logo} alt="Logo" />
        </Link>

        {active && isMobile && (
          <div className={styles.overlay} onClick={toggleMenu}></div>
        )}

        {isMobile && (
          <div
            className={`${styles.menu} ${
              active ? styles.menuOpen : styles.menuClose
            }`}
          >
            {menuLinks}
          </div>
        )}

        {isMobile && (
          <img
            className={styles.iconBurguer}
            src={active ? Close : Hamburguer}
            alt="Menu"
            onClick={toggleMenu}
          />
        )}

        {!isMobile ? <div>{menuLinks}</div> : null}
      </div>
    </nav>
  );
}

export default Header;
