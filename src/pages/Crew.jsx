import React, { useState } from "react";
import Header from "../components/Header";
import Data from "../data.json";
import styles from "../styles/Crew.module.css";

function Crew() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const crewImages = require.context("../assets/crew");
  const activeMember = Data.crew[activeMemberIndex];

  const handleChange = (e) => {
    const index = Number(e.target.value);
    setActiveMemberIndex(index);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.crewWrapper}>
        <h2 className={styles.subtitle}>
          <span className={styles.stepNumber}>02</span> Meet Your Crew
        </h2>

        <div className={styles.leftColumn}>
          <img
            src={crewImages(`./${activeMember.images.webp || activeMember.images.png}`)}
            alt={activeMember.name}
            className={styles.memberImage}
          />
          <div className={styles.radioWrapper}>
            {Data.crew.map((member, i) => (
              <div key={i}>
                <input
                  type="radio"
                  id={`radio${i}`}
                  className={styles.radioInput}
                  name="crew-radio"
                  value={i}
                  checked={activeMemberIndex === i}
                  onChange={handleChange}
                />
                <label htmlFor={`radio${i}`} className={styles.radioLabel}></label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.role}>{activeMember.role.toUpperCase()}</h2>
          <h1 className={styles.name}>{activeMember.name.toUpperCase()}</h1>
          <p className={styles.bio}>{activeMember.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
