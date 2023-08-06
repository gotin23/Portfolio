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
  const [activeButtonHome, setActiveButtonHome] = useState(false);
  // const [activeAnimBreath, setActiveAnimBreath] = useState(false);
  const [changeTitleClass, setChangeTitleClass] = useState("");

  const buttonRef = useRef(null);

  // const [spanLetter2, setSpanletter2] = useState("");
  // const [spanLetter3, setSpanletter3] = useState("");
  // const [spanLetter4, setSpanletter4] = useState("");
  // const [spanLetter5, setSpanletter5] = useState("");
  const [spanLetters, setSpanLetters] = useState(["", "", "", ""]);

  //effet sur chaque lettre du bouton en decalé
  useEffect(() => {
    const letters = ["n", "t", "e", "r"];

    letters.forEach((letter, index) => {
      setTimeout(() => {
        setSpanLetters((prevLetters) => {
          const newLetters = [...prevLetters];
          newLetters[index] = letter;
          return newLetters;
        });
      }, 300 * (index + 1));
    });
    // setTimeout(() => {
    //   setSpanletter2("n");
    // }, 300);
    // setTimeout(() => {
    //   setSpanletter3("t");
    // }, 600);
    // setTimeout(() => {
    //   setSpanletter4("e");
    // }, 900);
    // setTimeout(() => {
    //   setSpanletter5("r");
    // }, 1200);

    setTimeout(() => {
      setArrowAnim(true);
    }, 1000);
    setTimeout(() => {
      setActiveButtonHome(true);
    }, 2000);
    setTimeout(() => {
      setChangeTitleClass("active-home");
    }, 2000);

    setTimeout(() => {
      setChangeTitleClass("active-home breath");
    }, 4000);
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
      <h1 className={`home-popup-tilte ${changeTitleClass}`}>Developer</h1>

      <h2 className={`home-popup-title2 ${changeTitleClass}`}>Frontend</h2>

      <div
        className={`button-home ${activeButtonHome && "active-home"}  ${buttonAnim ? "flipOutX" : ""}`}
        onClick={handlePopup}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        ref={buttonRef}
      >
        {arrowAnim && <img src={ArrowDown} className={`icon-arrow-popup fadeInDown`} alt="arrow-down" />}
        <span className="flipInX  span-anim">E</span>
        {spanLetters[0] && <span className="flipInX  span-anim2">{spanLetters[0]} </span>}
        {spanLetters[1] && <span className="flipInX  span-anim3">{spanLetters[1]}</span>}
        {spanLetters[2] && <span className="flipInX  span-anim4">{spanLetters[2]}</span>}
        {spanLetters[3] && <span className="flipInX  span-anim5">{spanLetters[3]}</span>}
      </div>
    </div>
  );
}
