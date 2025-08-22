import React from "react";
import Header from "../components/Header";
import styles from "../styles/Technology.module.css";

function Technology() {
  return (
    <div className={styles.containerImg}>
      <Header />
      <div className={styles.containerTechnology}>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default Technology;
