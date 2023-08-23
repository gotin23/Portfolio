import React from "react";
import "./Header.css";
import { useState } from "react";
import HackText from "../HackText/HackText";
// import { useState } from "react";

export default function Header({ handleActiveOtherSide }) {
  const [activeAboutTransition, setActiveAboutTransition] = useState(false);
  //   const [activeAnimLinks, setActiveAnimLinks] = useState({ link1: false, link2: false, link3: false, link4: false });

  //   const handleMouseEnter = (link) => {
  //     // setActiveAnimLinks(true);
  //     console.log(link);
  //     setActiveAnimLinks((state) => ({ ...state, ...link }));
  //   };
  //   const handleMouseLeave = () => {
  //     console.log("ya");
  //     setTimeout(() => {
  //       setActiveAnimLinks({ link1: false, link2: false, link3: false, link4: false });
  //     }, 500);
  //   };
  const handleAboutTransition = () => {
    setActiveAboutTransition(true);
    setTimeout(() => {
      setActiveAboutTransition(false);
    }, 1500);
  };
  return (
    <nav className="fadeIn header">
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
        {/* <li onMouseEnter={() => handleMouseEnter({ link1: true })} onMouseLeave={handleMouseLeave}>
          <a href="#">{activeAnimLinks.link1 ? <HackText state={{ content: `Home` }} /> : "Home"}</a>
        </li>
        <li onMouseEnter={() => handleMouseEnter({ link2: true })} onMouseLeave={handleMouseLeave}>
          <a href="#">{activeAnimLinks.link2 ? <HackText state={{ content: `About me` }} /> : "About me"}</a>
        </li>
        <li onMouseEnter={() => handleMouseEnter({ link3: true })} onMouseLeave={handleMouseLeave}>
          <a href="#">{activeAnimLinks.link3 ? <HackText state={{ content: `Works` }} /> : "Works"}</a>
        </li>
        <li onMouseEnter={() => handleMouseEnter({ link4: true })} onMouseLeave={handleMouseLeave}>
          <a href="#">{activeAnimLinks.link4 ? <HackText state={{ content: `Contact` }} /> : "Contact"}</a>
        </li> */}
      </ul>
    </nav>
  );
}
