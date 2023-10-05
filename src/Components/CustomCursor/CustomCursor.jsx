import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./CustomCursor.css"; // Créez ce fichier CSS pour personnaliser le curseur.

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition2, setCursorPosition2] = useState({ x: 0, y: 0 });
  const [cursorPosition3, setCursorPosition3] = useState({ x: 0, y: 0 });
  const isSmallScreen = useMediaQuery({ minWidth: 1280 });
  console.log(isSmallScreen);

  // Gérer le mouvement de la souris.
  const handleMouseMove = (event) => {
    setTimeout(() => {
      setCursorPosition({ x: event.pageX, y: event.pageY });
    }, 50);
    setTimeout(() => {
      setCursorPosition2({ x: event.pageX, y: event.pageY });
    }, 100);
    setTimeout(() => {
      setCursorPosition3({ x: event.pageX, y: event.pageY });
    }, 150);
    // setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    if (isSmallScreen) {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
    // Ajouter un écouteur pour suivre le mouvement de la souris.

    // Nettoyer l'écouteur lors du démontage du composant.
  }, []);

  return (
    <>
      <div className="custom-cursor" style={{ left: cursorPosition.x - 6, top: cursorPosition.y - 10 }}></div>
      <div className="custom-cursor-second" style={{ left: cursorPosition2.x - 5, top: cursorPosition2.y - 10 }}></div>
      <div className="custom-cursor-third" style={{ left: cursorPosition3.x - 3, top: cursorPosition3.y - 8 }}></div>
    </>
  );
};

export default CustomCursor;
