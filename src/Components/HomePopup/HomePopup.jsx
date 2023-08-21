import React from "react";
import "./HomePopup.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ArrowDown from "../../assets/icons/iconmonstr-arrow-down-thin.svg";

export default function HomePopup({ animHomeTitle, activeHeader }) {
  const [popupHeight, setPopupHeight] = useState({});
  const [animButtonEnter, setAnimButtonEnter] = useState(false);
  const [arrowAnim, setArrowAnim] = useState(false);
  const [activeButtonHome, setActiveButtonHome] = useState(false);
  const [changeTitleClass, setChangeTitleClass] = useState("");
  const buttonRef = useRef(null);
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

    setTimeout(() => {
      setArrowAnim(true);
    }, 1000);
    setTimeout(() => {
      setActiveButtonHome(true);
    }, 1500);
    setTimeout(() => {
      setChangeTitleClass("active-home");
    }, 2000);

    setTimeout(() => {
      setChangeTitleClass("active-home breath");
    }, 3500);
  }, []);

  const handlePopup = () => {
    setChangeTitleClass("fadeOut");
    setTimeout(() => {
      setAnimButtonEnter(true);
    }, 100);
    // on lance les animations de la page d'accueil
    animHomeTitle();

    // on donne 0 pour enlever le popup
    const newStylesPopup = {
      height: "0",
    };
    // on affiche le header
    setTimeout(() => {
      activeHeader();
    }, 1600);

    setTimeout(() => {
      setPopupHeight(newStylesPopup);
    }, 1000);
  };

  return (
    <div className="home-popup" style={popupHeight}>
      <h1 className={`home-popup-tilte ${changeTitleClass}`}>Developer</h1>
      <h2 className={`home-popup-title2 ${changeTitleClass}`}>Frontend</h2>
      <div className={`button-home ${activeButtonHome && "active-home"}  ${animButtonEnter ? "flipOutX" : ""}`} onClick={handlePopup} ref={buttonRef}>
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
