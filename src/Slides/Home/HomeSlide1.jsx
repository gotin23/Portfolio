import React, { useEffect } from "react";
import "./HomeSlide1.css";
import { useState, useRef } from "react";
import HomeLoader from "../../Components/HomeLoader/HomeLoader";
import LogoPortfolio from "../../assets/icons/HG1-V.svg";

export default function HomeSlide1({ state }) {
  const [activeSrollLogo, setActiveScrollLogo] = useState(false);
  const [activePortfolioLogo, setActivePortfolioLogo] = useState(false);
  const [portfolioClass, setPortfolioClass] = useState("");
  const [homeLoaderActive, setHomeLoaderActive] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnimHeader = () => {
    setTimeout(() => {
      setPortfolioClass("active-scroll-animation");
    }, 2500);
    setTimeout(() => {
      setActiveScrollLogo(true);
    }, 3200);
    setTimeout(() => {
      setActivePortfolioLogo(true);
    }, 3200);
    // je set le menu burger
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
  };

  return (
    <div className="home-container slide" id="home">
      {homeLoaderActive && <HomeLoader />}
      {activeSrollLogo && <div className="icon-scroll fadeIn"></div>}
      <div className="home-content">
        <div className="polygon1" ref={activePolygon1}></div>
        <div className="polygon2" ref={activePolygon2}></div>
        <div className="polygon3" ref={activePolygon3}></div>
        <div className="polygon4" ref={activePolygon4}></div>
        <div className="polygon5" ref={activePolygon5}></div>
        <h1 className="home-title" ref={activeHomeTitle}>
          Developer
        </h1>
        {
          <h2 className={`home-portfolio ${portfolioClass}`} data-text="Portfolio">
            Portfolio
          </h2>
        }
        {activePortfolioLogo && <img src={LogoPortfolio} alt="" className="logo-portfolio-small rubberBand" />}
      </div>
    </div>
  );
}
