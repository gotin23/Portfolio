import React from "react";
import "./HomeSlide1.css";
import HomePopup from "../../Components/HomePopup/HomePopup";

// import Spiral from "../../assets/icons/304729.svg";
import { useState } from "react";

export default function HomeSlide1({ state }) {
  const [animHeader, setAnimHeader] = useState(false);
  const [newStyle, setNewStyle] = useState({});
  const [classCard, setclassCard] = useState("");
  const [polygon1, setPolygon1] = useState(false);
  const [polygon2, setPolygon2] = useState(false);
  const [polygon3, setPolygon3] = useState(false);
  const [polygon4, setPolygon4] = useState(false);
  const [polygon5, setPolygon5] = useState(false);

  const handleAnimHeader = () => {
    const newTitleStyle = { fontSize: "260px", fontWeight: "900" };
    setTimeout(() => {
      setAnimHeader(!animHeader);
    }, 2000);
    setTimeout(() => {
      setclassCard("slideInUp");
    }, 4350);

    setTimeout(() => {
      setPolygon1(true);
    }, 2100);
    setTimeout(() => {
      setPolygon2(true);
    }, 2100);
    setTimeout(() => {
      setPolygon3(true);
    }, 2500);
    setTimeout(() => {
      setPolygon4(true);
    }, 2900);
    setTimeout(() => {
      setPolygon5(true);
    }, 3100);
    setTimeout(() => {
      setclassCard("glitch");
    }, 7100);
    setTimeout(() => {
      setNewStyle(newTitleStyle);
    }, 300);
  };

  return (
    <div className="home-container slide">
      <div className="home-content">
        {/* <img src={Spiral} /> */}
        {polygon1 && <div className="polygon1"></div>}
        {polygon2 && <div className="polygon2"></div>}
        {polygon3 && <div className="polygon3"></div>}
        {polygon4 && <div className="polygon4"></div>}
        {polygon5 && <div className="polygon5"></div>}
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

        {!animHeader && <HomePopup animHomeTitle={handleAnimHeader} activeHeader={state} />}
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
    </div>
  );
}
