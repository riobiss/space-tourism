import React, { useState } from "react";
import Header from "../components/Header";
import Data from "../data.json";
import styles from "../styles/Crew.module.css";

function Crew() {
  const [selected, setSelected] = useState(0); 
  const images = require.context("../assets/crew");
  const crewMember = Data.crew[selected]; 

  const handleChange = (e) => {
    const index = Number(e.target.value);
    setSelected(index);
  };

  return (
    <div className={styles.containerImg}>
        <Header />
      <div className={styles.containerCrew}>
        <div className={styles.pessoa}>
          <img
            src={images(`./${crewMember.images.webp || crewMember.images.png}`)}
            alt={crewMember.name}
            className={styles.pessoaImg}
          />
          <div className={styles.slides}>
            {Data.crew.map((b, i) => (
              <div key={i}>
                <input
                  type="radio"
                  id={`radio${i}`}
                  className={styles.radios}
                  name="radio-btn"
                  value={i}
                  checked={selected === i}
                  onChange={handleChange}
                />
                <label htmlFor={`radio${i}`} className={styles.label}></label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.role}>{crewMember.role}</h2>
          <h1 className={styles.nome}>{crewMember.name}</h1>
          <p className={styles.texto}>{crewMember.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
