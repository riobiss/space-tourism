import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Destination.module.css";
import Data from "../data.json";

function Destination() {
  const [activePlanetIndex, setActivePlanetIndex] = useState(0);
  const planetImages = require.context("../assets/destination");
  const activePlanet = Data.destinations[activePlanetIndex];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.destinationWrapper}>
        <h2 className={styles.subtitle}>
          <span className={styles.stepNumber}>01</span> Pick Your Destination
        </h2>

        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.planetImage}
              src={planetImages(
                `./${activePlanet.images.webp || activePlanet.images.png}`
              )}
              alt={activePlanet.name}
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.planetSelector}>
            {Data.destinations.map((planet, index) => {
              return (
                <div key={planet.name}>
                  <input
                    className={styles.radioInput}
                    type="radio"
                    name="planet"
                    id={`planet${index}`}
                    checked={activePlanetIndex === index}
                    onChange={() => setActivePlanetIndex(index)}
                  />
                  <label htmlFor={`planet${index}`} className={styles.radioLabel}>
                    {planet.name.toUpperCase()}
                  </label>
                </div>
              );
            })}
          </div>

          <h1 className={styles.planetName}>{activePlanet.name.toUpperCase()}</h1>
          <p className={styles.planetDescription}>{activePlanet.description}</p>

          <div className={styles.divider}></div>

          <div className={styles.infoWrapper}>
            <div>
              <p className={styles.infoTitle}>Avg. Distance</p>
              <p className={styles.infoValue}>{activePlanet.distance.toUpperCase()}</p>
            </div>
            <div>
              <p className={styles.infoTitle}>Est. Travel Time</p>
              <p className={styles.infoValue}>{activePlanet.travel.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
