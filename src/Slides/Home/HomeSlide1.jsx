import React from "react";
import "./HomeSlide1.css";
import HomePopup from "../../Components/HomePopup/HomePopup";
import { useState } from "react";

export default function HomeSlide1({ state }) {
  const [animHomePopup, setAnimHomePopup] = useState(false);
  const [newStyle, setNewStyle] = useState({});
  const [portfolioClass, setPortfolioClass] = useState("");
  const [polygons, setPolygons] = useState([false, false, false, false, false]);

  const handleAnimHeader = () => {
    const newTitleStyle = { fontSize: "230px", fontWeight: "700" };
    setTimeout(() => {
      setAnimHomePopup(!animHomePopup);
    }, 2000);
    setTimeout(() => {
      setPortfolioClass("slideInUp");
    }, 2800);

    const timeouts = [];

    for (let i = 0; i < 5; i++) {
      timeouts.push(
        setTimeout(() => {
          setPolygons((prevPolygons) => {
            const newPolygons = [...prevPolygons];
            newPolygons[i] = true;
            return newPolygons;
          });
        }, 1200 + i * 200)
      );
    }

    setTimeout(() => {
      setPortfolioClass("glitch");
    }, 6100);

    setTimeout(() => {
      setNewStyle(newTitleStyle);
    }, 300);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  };

  return (
    <div className="home-container slide" id="home">
      <div className="home-content">
        {polygons.map((polygon, index) => (
          <div key={index} className={polygon && `polygon${index + 1}`} />
        ))}
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

        {!animHomePopup && <HomePopup animHomeTitle={handleAnimHeader} activeHeader={state} />}

        {portfolioClass && (
          <h2 className={`home-portfolio ${portfolioClass}`} data-text="Portfolio">
            Portfolio
          </h2>
        )}
      </div>
    </div>
  );
}
