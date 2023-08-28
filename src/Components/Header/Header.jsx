import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import HackText from "../HackText/HackText";

export default function Header({ handleActiveOtherSide }) {
  const [activeAboutTransition, setActiveAboutTransition] = useState(false);
  const [backgroundBrightness, setBackgroundBrightness] = useState(0);
  // function getBrightness(r, g, b) {
  //   return (r * 299 + g * 587 + b * 114) / 1000;
  // }
  // const updateBackgroundBrightness = () => {
  //   console.log(backgroundBrightness);
  //   const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
  //   const rgb = backgroundColor.match(/\d+/g);
  //   if (rgb) {
  //     const brightness = getBrightness(+rgb[0], +rgb[1], +rgb[2]);
  //     setBackgroundBrightness(brightness);
  //   }
  // };

  // useEffect(() => {
  //   console.log(backgroundBrightness, "youpi");

  //   window.addEventListener("scroll", updateBackgroundBrightness());

  //   return () => {
  //     window.removeEventListener("scroll", updateBackgroundBrightness());
  //   };
  // }, [backgroundBrightness]);
  // const [s, setS] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const value = window.scrollY;
  //     setS(value);
  //     console.log(s, "ggg");
  //   };

  //   window.addEventListener("scroll", () => handleScroll);

  //   return () => {
  //     // Nettoyer les événements lorsque le composant est démonté
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [s]);
  // function getTextColor(background) {
  //   // Convertir la couleur RVB en luminosité (0-255)
  //   const brightness = (background[0] * 299 + background[1] * 587 + background[2] * 114) / 1000;

  //   // Choisir la couleur du texte en fonction de la luminosité
  //   return brightness > 125 ? "white" : "black";
  // }

  // // Exemple d'utilisation
  // const backgroundColor = [255, 255, 255]; // Couleur de fond au format RVB (blanc)
  // const textColor = getTextColor(backgroundColor);

  // // Appliquer la couleur de texte inversée à votre élément HTML

  // setTimeout(() => {
  //   const textElement = document.querySelector(".tes");
  //   console.log(textElement, textColor);
  //   textElement.style.color = textColor;
  // }, 100);

  const handleAboutTransition = () => {
    setActiveAboutTransition(true);
    setTimeout(() => {
      setActiveAboutTransition(false);
    }, 1500);
  };

  return (
    <nav className={`fadeIn header`}>
      {activeAboutTransition && (
        <div className="about-transition">
          <h2>About Me</h2>
        </div>
      )}
      <ul className="nav-links">
        <li>
          <a href="#home">
            <HackText state={{ content: `Home` }} />
          </a>
        </li>
        <li>
          <a href="#about-me" onClick={handleAboutTransition}>
            <HackText state={{ content: `About me` }} />
          </a>
        </li>
        <li>
          <a href="#works" onClick={handleActiveOtherSide}>
            <HackText state={{ content: `Works` }} />
          </a>
        </li>
        <li>
          <a href="#contact">
            <HackText state={{ content: `Contact` }} onClick={handleActiveOtherSide} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
