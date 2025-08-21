import React from "react";
import Header from "../components/Header";
import Data from "../data.json";
import Douglas from "../assets/crew/image-anousheh-ansari.webp";
import styles from "./Crew.module.css";

function Crew() {
  return (
    <div className={styles.containerImg}>
      <div className={styles.containerCrew}>
        <Header />
        <div className={styles.pessoa}>
          <img src={Douglas} alt="" className={styles.pessoaImg} />
          <div className={styles.slides}>
            <input
              type="radio"
              className={styles.radios}
              name="radio-btn"
              id="radio2"
            />
            <input
              type="radio"
              className={styles.radios}
              name="radio-btn"
              id="radio1"
            />
            <input
              type="radio"
              className={styles.radios}
              name="radio-btn"
              id="radio3"
            />
            <input
              type="radio"
              className={styles.radios}
              name="radio-btn"
              id="radio4"
            />
          </div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.role}>Flight Engineer</h2>
          <h1 className={styles.nome}>Anousheh Ansari</h1>
          <p className={styles.texto}>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
