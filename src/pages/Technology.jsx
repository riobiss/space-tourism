import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Technology.module.css";
import Data from "../data.json";
function Technology() {
  const images = require.context("../assets/technology");
  const [selected, setSelected] = useState(0);
  const currentTech = Data.technology[selected];
  console.log(images);
  return (
    <div className={styles.containerImg}>
      <Header />
      <div className={styles.containerTechnology}>
        <h2 className={styles.h2}><span className="categoria">03</span> SPACE LAUNCH 101</h2>
        <img
          className={styles.img}
          src={images(`./${currentTech.images.landscape}`)}
          alt={currentTech.name}
        />
        <div className={styles.labels}>
          {Data.technology.map((techAtual, index) => {
            return (
              <div key={techAtual.id}>
                <input
                  className={styles.input}
                  type="radio"
                  name="tech"
                  id={`techId${index}`}
                  checked={selected === index}
                  onChange={() => setSelected(index)}
                />
                <label htmlFor={`techId${index}`} className={styles.label}>
                  {index + 1}
                </label>
              </div>
            );
          })}
        </div>
        <div className={styles.info}>
          <h3 className={styles.terminology}>THE TERMINOLOGY...</h3>
          <h1 className={styles.techName}>{currentTech.name}</h1>
        </div>
        <p className={styles.description}>{currentTech.description}</p>
        <p></p>
      </div>
    </div>
  );
}

export default Technology;
