import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Créez ce fichier CSS pour personnaliser le curseur.

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Gérer le mouvement de la souris.
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    // Ajouter un écouteur pour suivre le mouvement de la souris.
    document.addEventListener("mousemove", handleMouseMove);

    // Nettoyer l'écouteur lors du démontage du composant.
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>;
};

export default CustomCursor;