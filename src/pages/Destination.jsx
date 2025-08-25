import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Destination.module.css";
import Data from "../data.json";

function Destination() {
  const [selected, setSelected] = useState(0);
  const images = require.context("../assets/destination");
  const currentPlanet = Data.destinations[selected];

  return (
    <div className={styles.containerImg}>
      <Header />
      <div className={styles.containerDestination}>
        <h2 className={styles.h2}>  <span className="categoria">01 </span>PICK YOUR DESTINATION</h2>

        <div className={styles.planetSelected}>
          <img
            className={styles.imgPlanet}
            src={images(
              `./${currentPlanet.images.webp || currentPlanet.images.png}`
            )}
            alt={currentPlanet.name}
          />
        </div>

        <div className={styles.planets}>
          {Data.destinations.map((planet, index) => {
            return (
              <div key={planet.name}>
                <input
                  className={styles.input}
                  type="radio"
                  name="planet"
                  id={`planet${index}`}
                  checked={selected === index}
                  onChange={() => setSelected(index)}
                />
                <label htmlFor={`planet${index}`} className={styles.label}>
                  {planet.name.toUpperCase()}
                </label>
              </div>
            );
          })}
        </div>
        <h1 className={styles.h1}>{currentPlanet.name.toUpperCase()}</h1>
        <p className={styles.description}>{currentPlanet.description}</p>
        <div className={styles.line}></div>
        <div className={styles.containerInfo}>
          <p className={styles.extra}>AVG. DISTANCE</p>
          <p className={styles.extra}>EST. TRAVEL TIME</p>
          <p className={styles.distance}>
            {currentPlanet.distance.toUpperCase()}
          </p>
          <p className={styles.distance}>
            {currentPlanet.travel.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
