import React, { useEffect } from "react";
import "./HomeSlide1.css";
import HomePopup from "../../Components/HomePopup/HomePopup";
import { useState, useRef } from "react";
// import RightArrow from "../../assets/icons/iconmonstr-arrow-down-thin.svg";
// import { useMediaQuery } from "react-responsive";
import HomeLoader from "../../Components/HomeLoader/HomeLoader";

export default function HomeSlide1({ state }) {
  // const isMobile = useMediaQuery({ minWidth: 950 });
  // const isSmallDesktop = useMediaQuery({ minWidth: 1680 });
  // const isDesktop = useMediaQuery({ minWidth: 1920 });

  const [animHomePopup, setAnimHomePopup] = useState(false);
  const [activeSrollLogo, setActiveScrollLogo] = useState(false);
  // const [newStyle, setNewStyle] = useState({});
  const [portfolioClass, setPortfolioClass] = useState("");
  const [homeLoaderActive, setHomeLoaderActive] = useState(true);
  // const [polygons, setPolygons] = useState([false, false, false, false, false]);
  const activeHomeTitle = useRef();
  const activePolygon1 = useRef();
  const activePolygon2 = useRef();
  const activePolygon3 = useRef();
  const activePolygon4 = useRef();
  const activePolygon5 = useRef();
  useEffect(() => {
    setTimeout(() => {
      handleAnimHeader();
    }, 400);
    setTimeout(() => {
      setHomeLoaderActive(false);
    }, 2800);
  }, []);

  const handleAnimHeader = () => {
    // setTimeout(() => {
    //   setAnimHomePopup(!animHomePopup);
    // }, 2000);
    setTimeout(() => {
      setPortfolioClass("active-scroll-animation");
    }, 2500);
    setTimeout(() => {
      setActiveScrollLogo(true);
    }, 3200);

    setTimeout(() => {
      state();
    }, 2800);

    setTimeout(() => {
      activePolygon1.current.classList.add("polygon1-active");
    }, 1600);
    setTimeout(() => {
      activePolygon2.current.classList.add("polygon2-active");
    }, 1700);
    setTimeout(() => {
      activePolygon3.current.classList.add("polygon3-active");
    }, 1800);
    setTimeout(() => {
      activePolygon4.current.classList.add("polygon4-active");
    }, 1900);
    setTimeout(() => {
      activePolygon5.current.classList.add("polygon5-active");
    }, 2000);

    setTimeout(() => {
      setPortfolioClass("active-scroll-animation glitch");
    }, 5100);

    // setTimeout(() => {
    //   activeHomeTitle.current.classList.add("active-home-title");
    // }, 300);
  };

  return (
    <div className="home-container slide" id="home">
      {homeLoaderActive && <HomeLoader />}
      {/* <div className="home-scroll">{activeArrow && <img src={RightArrow} className="home-scroll-content flash" alt="logo arrow" />}</div> */}

      {activeSrollLogo && <div class="icon-scroll fadeIn"></div>}

      <div className="home-content">
        {/* {polygons.map((polygon, index) => (
          <div key={index} className={polygon ? `polygon${index + 1}` : ""} />
        ))} */}
        <div className="polygon1" ref={activePolygon1}></div>
        <div className="polygon2" ref={activePolygon2}></div>
        <div className="polygon3" ref={activePolygon3}></div>
        <div className="polygon4" ref={activePolygon4}></div>
        <div className="polygon5" ref={activePolygon5}></div>
        <h1 className="home-title" ref={activeHomeTitle}>
          Developer
        </h1>
        {/* {!animHomePopup && <HomePopup animHomeTitle={handleAnimHeader} />} */}
        {
          <h2 className={`home-portfolio ${portfolioClass}`} data-text="Portfolio">
            Portfolio
          </h2>
        }
      </div>
    </div>
  );
}
