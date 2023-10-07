import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition2, setCursorPosition2] = useState({ x: 0, y: 0 });
  const [cursorPosition3, setCursorPosition3] = useState({ x: 0, y: 0 });
  const isSmallScreen = useMediaQuery({ minWidth: 1280 });

  // Gérer le mouvement de la souris.
  const handleMouseMove = (event) => {
    console.log(isSmallScreen);
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
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isSmallScreen && (
        <>
          <div className="custom-cursor" style={{ left: cursorPosition.x - 25, top: cursorPosition.y - 25 }}></div>
          <div className="custom-cursor-second" style={{ left: cursorPosition2.x - 20, top: cursorPosition2.y - 20 }}></div>
          <div className="custom-cursor-third" style={{ left: cursorPosition3.x - 20, top: cursorPosition3.y - 20 }}></div>
        </>
      )}
    </>
  );
};

export default CustomCursor;
