import React from "react";
import "./AboutSlide1.css";
import { useRef } from "react";
import useIntersectionObserver from "../../Hook/IntersectionObserver";
import RightArrow from "../../assets/icons/iconmonstr-arrow-18.svg";

export default function AboutSlide1() {
  const activeAboutTitleHide1 = useRef();
  const activeAboutTitleHide2 = useRef();
  const activeAboutTitleHide3 = useRef();
  const activeLetsTalk = useRef();
  const activeRightArrow = useRef();
  const rightArrowAnim = useRef();

  const callback = (entry) => {
    const classValue = entry.target.classList.value;

    switch (classValue) {
      case "about-lets-talk":
        entry.target.classList.add("active-scroll-animation");
        break;

      case "hide-about-title1":
      case "hide-about-title2":
      case "hide-about-title3":
        entry.target.classList.add("animation-hide-title");

        break;

      case "about-slide1 slide":
        rightArrowAnim.current.classList.add("active-right-arrow");
        break;

      default:
        break;
    }
  };

  useIntersectionObserver([activeLetsTalk.current], { threshold: 0.1 }, callback);
  useIntersectionObserver([activeAboutTitleHide1.current, activeAboutTitleHide2.current, activeAboutTitleHide3.current, activeRightArrow.current], { threshold: 0.9 }, callback);

  return (
    <div className="about-slide1 slide" ref={activeRightArrow} id="about-me">
      <div className="about-titles-container">
        <div className="about-title-container">
          <h2 className="about-title">I'M</h2>
          <div className="hide-about-title1" ref={activeAboutTitleHide1}></div>
        </div>

        <div className="about-title-container">
          <h2 className="about-title">HUGO</h2>
          <div className="hide-about-title2" ref={activeAboutTitleHide2}></div>
        </div>

        <div className="about-title-container">
          <h2 className="about-title">
            {" "}
            <span className="color-span">Welcome</span>
          </h2>
          <div className="hide-about-title3" ref={activeAboutTitleHide3}></div>
        </div>
      </div>
      <div className="about-lets-talk-container">
        <div className="about-lets-talk" ref={activeLetsTalk}>
          <p className="about-lets-talk-content slideInDown">Let's Talk</p>
          <img className="about-lets-talk-arrow" ref={rightArrowAnim} src={RightArrow} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
}
