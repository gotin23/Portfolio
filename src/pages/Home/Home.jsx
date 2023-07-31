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
  const [classCard, setclassCard] = useState("");
  const handleAnimHeader = () => {
    console.log("oki");
    const newTitleStyle = { fontSize: "260px", fontWeight: "900" };
    setTimeout(() => {
      setAnimHeader(!animHeader);
    }, 2000);
    setTimeout(() => {
      setclassCard("slideInUp");
    }, 4200);
    setTimeout(() => {
      setclassCard("glitch");
    }, 5200);
    setTimeout(() => {
      setNewStyle(newTitleStyle);
    }, 300);
  };

  return (
    <div className="home-container">
      {animHeader && <Header />}

      <div className="home-content">
        <h1 className="home-title" style={newStyle}>
          <span className="span-home-title">D</span>
          <span className="span-home-title">e</span>
          <span className="span-home-title">v</span>
          <span className="span-home-title">e</span>
          <span className="span-home-title">l</span>
          <span className="span-home-title">o</span>
          <span className="span-home-title">p</span>
          <span className="span-home-title">e</span>
          <span className="span-home-title">r</span>
        </h1>

        {!animHeader && <HomePopup animHomeTitle={handleAnimHeader} />}
        <h2 className="home-name">Frontend</h2>

        <div className="home-cards">
          <div className="home-card">
            {classCard && (
              <h2 className={`home-card-content ${classCard}`} data-text="Portfolio">
                Portfolio
              </h2>
            )}
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}
