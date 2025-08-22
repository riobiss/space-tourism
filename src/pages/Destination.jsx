import React from "react";
import Header from "../components/Header";
import styles from "../styles/Destination.module.css";

function Destination() {
  return (
    <div className={styles.containerImg}>
        <Header />
      <div className={styles.containerDestination}>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default Destination;
