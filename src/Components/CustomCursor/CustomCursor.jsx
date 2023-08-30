import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./CustomCursor.css"; // Créez ce fichier CSS pour personnaliser le curseur.

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const isSmallScreen = useMediaQuery({ minWidth: 1280 });
  console.log(isSmallScreen);

  // Gérer le mouvement de la souris.
  const handleMouseMove = (event) => {
    setTimeout(() => {
      setCursorPosition({ x: event.pageX, y: event.pageY });
    }, 50);
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

  return <div className="custom-cursor" style={{ left: cursorPosition.x - 5, top: cursorPosition.y - 10 }}></div>;
};

export default CustomCursor;
