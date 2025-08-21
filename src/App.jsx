import React from "react";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
