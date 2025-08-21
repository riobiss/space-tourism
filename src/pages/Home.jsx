import React from "react";
import Header from "../components/Header";
import Destination from "./Destination";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="introducao">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="bola">
          <h2>Explore</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
