import React from "react";
import "./HomeSlide1.css";
import HomePopup from "../../Components/HomePopup/HomePopup";

// import Spiral from "../../assets/icons/304729.svg";
import { useState } from "react";

export default function HomeSlide1({ state }) {
  const [animHeader, setAnimHeader] = useState(false);
  const [newStyle, setNewStyle] = useState({});
  const [portfolioClass, setPortfolioClass] = useState("");
  // const [polygon1, setPolygon1] = useState(false);
  // const [polygon2, setPolygon2] = useState(false);
  // const [polygon3, setPolygon3] = useState(false);
  // const [polygon4, setPolygon4] = useState(false);
  // const [polygon5, setPolygon5] = useState(false);
  const [polygons, setPolygons] = useState([false, false, false, false, false]);
  const handleAnimHeader = () => {
    const newTitleStyle = { fontSize: "260px", fontWeight: "700" };
    setTimeout(() => {
      setAnimHeader(!animHeader);
    }, 2000);
    setTimeout(() => {
      setPortfolioClass("slideInUp");
    }, 3000);

    // setTimeout(() => {
    //   setPolygon1(true);
    // }, 1200);
    // setTimeout(() => {
    //   setPolygon2(true);
    // }, 1400);
    // setTimeout(() => {
    //   setPolygon3(true);
    // }, 1600);
    // setTimeout(() => {
    //   setPolygon4(true);
    // }, 1800);
    // setTimeout(() => {
    //   setPolygon5(true);
    // }, 2000);
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
        {/* <img src={Spiral} /> */}
        {/* {polygon1 && <div className="polygon1"></div>}
        {polygon2 && <div className="polygon2"></div>}
        {polygon3 && <div className="polygon3"></div>}
        {polygon4 && <div className="polygon4"></div>}
        {polygon5 && <div className="polygon5"></div>} */}
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

        {!animHeader && <HomePopup animHomeTitle={handleAnimHeader} activeHeader={state} />}
        {/* <h2 className="home-name">Frontend</h2> */}

        {portfolioClass && (
          <h2 className={`home-portfolio ${portfolioClass}`} data-text="Portfolio">
            Portfolio
          </h2>
        )}
      </div>
    </div>
  );
}
