import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Créez ce fichier CSS pour personnaliser le curseur.

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Gérer le mouvement de la souris.
  const handleMouseMove = (event) => {
    setTimeout(() => {
      setCursorPosition({ x: event.pageX, y: event.pageY });
    }, 50);
    // setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    // Ajouter un écouteur pour suivre le mouvement de la souris.
    document.addEventListener("mousemove", handleMouseMove);

    // Nettoyer l'écouteur lors du démontage du composant.
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="custom-cursor" style={{ left: cursorPosition.x - 5, top: cursorPosition.y - 10 }}></div>;
};

export default CustomCursor;
