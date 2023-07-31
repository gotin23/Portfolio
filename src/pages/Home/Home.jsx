import React from "react";
import "./Home.css";
import HomePopup from "../../Components/HomePopup/HomePopup";

import About from "../About/About";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import CircleLogo1 from "../../assets/icons/ArvinDeco-Frame-7.svg";

export default function Home() {
  const [animHeader, setAnimHeader] = useState(false);
  const [newStyle, setNewStyle] = useState({});
  const handleAnimHeader = () => {
    console.log("oki");
    const newTitleStyle = { fontSize: "260px", fontWeight: "900" };
    setTimeout(() => {
      setAnimHeader(!animHeader);
    }, 2000);
    setTimeout(() => {
      setNewStyle(newTitleStyle);
    }, 300);
  };
  return (
    <div className="home-container">
      {animHeader && <Header />}

      <div className="home-content">
        <h1 className="home-title" style={newStyle}>
          <span className="span-home-title">P</span>
          <span className="span-home-title">o</span>
          <span className="span-home-title">r</span>
          <span className="span-home-title">t</span>
          <span className="span-home-title">f</span>
          <span className="span-home-title">o</span>
          <span className="span-home-title">l</span>
          <span className="span-home-title">i</span>
          <span className="span-home-title">o</span>
        </h1>

        {!animHeader && <HomePopup animHomeTitle={handleAnimHeader} />}
        <h2 className="home-name">Hugo Gouzy</h2>

        <div className="home-cards">
          <div className="home-card">{/* <img src={CircleLogo1} className="logo-circles-home" /> */}</div>
          <div className="home-card">
            <h2 className="glitch" data-text="Frontend ">
              Frontend.
            </h2>

            <h2 className="glitch" data-text="Developer">
              Developer
            </h2>
          </div>
          <div className="home-card"></div>
        </div>
      </div>
      <About />
    </div>
  );
}
