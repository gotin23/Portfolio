import React from "react";
import "./HomeLoader.css";
import logoPortfolio from "../../assets/icons/logo-portfolio-color.svg";

export default function HomeLoader() {
  return (
    <div className="home-loader-container">
      <div className="top-loader"></div>
      <div className="middle-loader">
        <img src={logoPortfolio} alt="logo porfolio" className="logo-home-loader" />
        <h3 className="title-loader">Portfolio</h3>
      </div>
      <div className="bottom-loader"></div>
    </div>
  );
}
