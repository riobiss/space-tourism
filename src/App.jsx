import React from "react";
import Home from "./pages/Home";
import Technology from "./pages/Technology"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination";
import {Routes, Route} from "react-router-dom"
import "./styles.css";


function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/destination" element={<Destination />}/>
    </Routes>
  )
}

export default App