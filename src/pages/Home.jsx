import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={styles.containerImg}>
      <Header />
      <div className={styles.containerHome}>
        <div>
          <div className={styles.introducao}>
            <h3 className={styles.h3}>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className={styles.h1}>SPACE</h1>
            <p className={styles.texto}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <Link to="/destination">
          <h2 className={styles.explore}>Explore</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
