import React from "react";
import "./AboutSlide2.css";
import { useRef } from "react";
import useIntersectionObserver from "../../Hook/IntersectionObserver";

export default function AboutSlides2({ state }) {
  const activeAboutMeHide = useRef();

  const callback = (entry) => {
    if (entry.target.classList.value === "hide-about-me-content") {
      entry.target.classList.add("active-hide-about-me-content");
    }
  };

  useIntersectionObserver([activeAboutMeHide.current], { threshold: 0.9 }, callback);

  return (
    <div className="about-slide2 slide">
      <div className="about-me-container">
        <div className="hide-about-me-content" ref={activeAboutMeHide}>
          <h2 className="hide-about-me-content-title">About me</h2>
        </div>

        <div className="about-me-slide2-all-content">
          <div className="about-me-slide2-all-titles">
            {" "}
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">
                <span className="span-title-slide2 color-span">Passionate</span> about
              </h2>
            </div>
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">front-end</h2>
            </div>
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">
                Web{" "}
                <span className="span-title-slide2">
                  <span className="color-span">Development</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="polygon-rain"></div>
      <div className="polygon-rain-second"></div>
      <div className="polygon-rain-third"></div>
      <div className="polygon-rain-four"></div>
      <div className="polygon-rain-five"></div>
    </div>
  );
}
