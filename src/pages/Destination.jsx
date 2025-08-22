import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Destination.module.css";
import Data from "../data.json";
import Moon from "../assets/destination/image-moon.webp";

function Destination() {
  const Moon = Data.destinations;
  console.log(Moon);

  return (
    <div className={styles.containerImg}>
      <Header />
      <div className={styles.containerDestination}>
        <h2></h2>
        <img src={Moon} alt="" />
        <h3>hello</h3>
        <h1>Moon</h1>
        <div className="planets">
          <input type="button" name="planet" id="planet1" value="Monn" />
          <input type="button" name="planet" id="planet2" value="Mars" />
          <input type="button" name="planet" id="planet3" value="Eurora" />
          <input type="button" name="planet" id="planet4" value="Titan" />
        </div>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>
    </div>
  );
}

export default Destination;
