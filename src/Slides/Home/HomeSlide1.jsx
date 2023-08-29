import React from "react";
import "./HomeSlide1.css";
import HomePopup from "../../Components/HomePopup/HomePopup";
import { useState, useRef } from "react";
import RightArrow from "../../assets/icons/iconmonstr-arrow-down-thin.svg";
import { useMediaQuery } from "react-responsive";

export default function HomeSlide1({ state }) {
  const isMobile = useMediaQuery({ minWidth: 950 }); // Par exemple, considérons < 767px comme mobile
  const isSmallDesktop = useMediaQuery({ minWidth: 1680 });
  const isDesktop = useMediaQuery({ minWidth: 1920 });

  const [animHomePopup, setAnimHomePopup] = useState(false);
  const [activeArrow, setActiveArrow] = useState(false);
  const [newStyle, setNewStyle] = useState({});
  const [portfolioClass, setPortfolioClass] = useState("");
  const [polygons, setPolygons] = useState([false, false, false, false, false]);
  const activeHomeTitle = useRef();
  const handleAnimHeader = () => {
    const newTitleStyle = { fontSize: "230px", fontWeight: "700" };
    const styleMobile = { fontSize: "57px", fontWeight: "700" };
    const styleSmallDesktop = { fontSize: "180px", fontWeight: "700" };
    setTimeout(() => {
      setAnimHomePopup(!animHomePopup);
    }, 2000);
    setTimeout(() => {
      setPortfolioClass("active-scroll-animation");
    }, 3000);
    setTimeout(() => {
      setActiveArrow(true);
    }, 5000);

    setTimeout(() => {
      state();
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
      setPortfolioClass("active-scroll-animation glitch");
    }, 6100);

    setTimeout(() => {
      activeHomeTitle.current.classList.add("active-home-title");
    }, 300);

    // if (isSmallDesktop) {
    //   setTimeout(() => {
    //     setNewStyle(styleSmallDesktop);
    //   }, 300);
    // }
    // if (isDesktop) {
    //   setTimeout(() => {
    //     setNewStyle(newTitleStyle);
    //   }, 300);
    // }

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  };

  return (
    <div className="home-container slide" id="home">
      <div className="home-scroll">{activeArrow && <img src={RightArrow} className="home-scroll-content flash" alt="logo arrow" />}</div>
      <div className="home-content">
        {polygons.map((polygon, index) => (
          <div key={index} className={polygon ? `polygon${index + 1}` : ""} />
        ))}
        <h1 className="home-title" ref={activeHomeTitle}>
          <span className="span-home-title ">D</span>
          <span className="span-home-title">e</span>
          <span className="span-home-title">v</span>
          <span className="span-home-title">e</span>
          <span className="span-home-title">l</span>
          <span className="span-home-title">o</span>
          <span className="span-home-title">p</span>
          <span className="span-home-title">e</span>
          <span className="span-home-title">r</span>
        </h1>

        {!animHomePopup && <HomePopup animHomeTitle={handleAnimHeader} />}

        {
          <h2 className={`home-portfolio ${portfolioClass}`} data-text="Portfolio">
            Portfolio
          </h2>
        }
      </div>
    </div>
  );
}
