import React from "react";
import "./HomePopup.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ArrowDown from "../../assets/icons/iconmonstr-arrow-down-thin.svg";

export default function HomePopup({ animHomeTitle }) {
  const [popupHeight, setPopupHeight] = useState({});

  const [buttonAnim, setButtonAnim] = useState(false);
  const [arrowAnim, setArrowAnim] = useState(false);
  // const [activeAnimArrow, setActiveAnimArrow] = useState(false);
  const [activeAnimTitle, setActiveAnimTitle] = useState(false);
  // const [activeAnimBreath, setActiveAnimBreath] = useState(false);
  const [changeTitleClass, setChangeTitleClass] = useState("");

  const buttonRef = useRef(null);

  const [spanLetter2, setSpanletter2] = useState("");
  const [spanLetter3, setSpanletter3] = useState("");
  const [spanLetter4, setSpanletter4] = useState("");
  const [spanLetter5, setSpanletter5] = useState("");

  //effet sur chaque lettre du bouton en decalé
  useEffect(() => {
    setTimeout(() => {
      setSpanletter2("n");
    }, 400);
    setTimeout(() => {
      setSpanletter3("t");
    }, 800);
    setTimeout(() => {
      setSpanletter4("e");
    }, 1200);
    setTimeout(() => {
      setSpanletter5("r");
    }, 1600);

    setTimeout(() => {
      setArrowAnim(true);
    }, 1000);
    setTimeout(() => {
      setActiveAnimTitle(true);
    }, 3000);
    setTimeout(() => {
      setChangeTitleClass("fadeIn");
    }, 3000);

    setTimeout(() => {
      setChangeTitleClass("breath");
    }, 4000);

    // setTimeout(() => {
    //   setActiveAnimBreath(true);
    // }, 4800);
  }, []);
  const handlePopup = () => {
    setChangeTitleClass("fadeOut");
    setTimeout(() => {
      setButtonAnim(true);
    }, 170);

    animHomeTitle();
    // on donne 0 pour enlever le popup
    const newStylesPopup = {
      height: "0",

      // Ajoutez d'autres propriétés CSS que vous souhaitez modifier ici
    };

    setTimeout(() => {
      setPopupHeight(newStylesPopup);
    }, 800);
  };
  // gestion da l'anim au survol du bouton
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("pulse");
      buttonRef.current.classList.remove("animFadeDown");
    }
  };
  const handleMouseOut = () => {
    if (buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.classList.remove("pulse");
      }, 800);
    }
  };
  return (
    <div className="home-popup" style={popupHeight}>
      <h1 className={`home-popup-tilte ${changeTitleClass}`}>{activeAnimTitle && "Developer"}</h1>
      {/* <h1 className={`${activeAnimTitle && !buttonAnim && !activeAnimBreath ? "fadeIn" : ""} ${buttonAnim ? "fadeOut" : ""} ${activeAnimBreath && !buttonAnim && "breath"}`}>
        {activeAnimTitle && "Portfolio"}
      </h1> */}
      <h2 className={changeTitleClass}>{activeAnimTitle && "Frontend"}</h2>

      <div
        className={`button ${!buttonAnim && "animFadeDown"}  ${buttonAnim ? "flipOutX" : ""}`}
        onClick={handlePopup}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        ref={buttonRef}
      >
        {arrowAnim && <img src={ArrowDown} className={`icon-arrow-popup fadeInDown`} alt="arrow-down" />}
        <span className="flipInX  span-anim">E</span>
        {spanLetter2 && <span className="flipInX  span-anim2">{spanLetter2} </span>}
        {spanLetter3 && <span className="flipInX  span-anim3">{spanLetter3}</span>}
        {spanLetter4 && <span className="flipInX  span-anim4">{spanLetter4}</span>}
        {spanLetter5 && <span className="flipInX  span-anim5">{spanLetter5}</span>}
      </div>
    </div>
  );
}
