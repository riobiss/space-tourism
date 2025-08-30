import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Technology.module.css";
import Data from "../data.json";

function TechnologyPage() {
  const techImages = require.context("../assets/technology");
  const [selectedTech, setSelectedTech] = useState(0);
  const activeTech = Data.technology[selectedTech];

  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const checkOrientation = () => {
      if (window.innerWidth >= 1025) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <div className={styles.technologyWrapper}>
        <h2 className={styles.pageTitle}>
          <span className={styles.category}>03</span> SPACE LAUNCH 101
        </h2>

        <img
          className={`${styles.image} ${
            orientation === "portrait"
              ? styles.portraitImage
              : styles.landscapeImage
          }`}
          src={techImages(`./${activeTech.images[orientation]}`)}
          alt={activeTech.name}
        />

        <div className={styles.radioGroup}>
          {Data.technology.map((tech, index) => (
            <div key={tech.id} className={styles.radioItem}>
              <input
                className={styles.radioInput}
                type="radio"
                name="tech"
                id={`tech-${index}`}
                checked={selectedTech === index}
                onChange={() => setSelectedTech(index)}
              />
              <label htmlFor={`tech-${index}`} className={styles.radioLabel}>
                {index + 1}
              </label>
            </div>
          ))}
        </div>

        <div className={styles.techInfo}>
          <h3 className={styles.subtitle}>THE TERMINOLOGY...</h3>
          <h1 className={styles.techName}>{activeTech.name}</h1>
          <p className={styles.description}>{activeTech.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
