import React, { useState } from "react";
import "./HamburgerMenu.css"; // Assurez-vous d'importer votre fichier CSS
import HackText from "../HackText/HackText";
import { useRef } from "react";

function Menu() {
  const [isActive, setIsActive] = useState(false);
  const activeMenu = useRef();
  const toggleMenu = (e) => {
    setIsActive(!isActive);
    if (!isActive) {
      activeMenu.current.classList.add("open");
    } else {
      activeMenu.current.classList.remove("open");
    }
  };

  return (
    <div>
      {/* <button className="show" onClick={toggleMenu}>
        Toggle Menu
      </button> */}
      <div class="nav-icon-1" onClick={toggleMenu} ref={activeMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isActive ? "menu-burger-active" : "menu-burger"}>
        <a className="tt" href="#home" onClick={toggleMenu}>
          {isActive && <HackText state={{ content: `Home` }} />}
        </a>

        <a href="#about-me" onClick={toggleMenu}>
          {isActive && <HackText state={{ content: `About me` }} />}
        </a>

        <a href="#works" onClick={toggleMenu}>
          {isActive && <HackText state={{ content: `Works` }} />}
        </a>

        <a href="#contact" onClick={toggleMenu}>
          {isActive && <HackText state={{ content: `Contact` }} />}
        </a>
      </nav>
    </div>
  );
}

export default Menu;
