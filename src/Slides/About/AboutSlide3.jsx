import React from "react";
import "./AboutSlide3.css";
import { useRef } from "react";
import useIntersectionObserver from "../../Hook/IntersectionObserver";
import Movingtext from "../../Components/MovingText/Movingtext";
import HtmlIcon from "../../assets/icons/icons8-html.svg";
import JavascriptIcon from "../../assets/icons/icons8-javascript.svg";
import ReactIcon from "../../assets/icons/icons8-react-native.svg";
import FigmaIcon from "../../assets/icons/icons8-figma.svg";
import NextIcon from "../../assets/icons/icons8-nextjs.svg";
import CssIcon from "../../assets/icons/icons8-css.svg";
import GitHubIcon from "../../assets/icons/icons8-github.svg";
import ReduxIcon from "../../assets/icons/icons8-redux.svg";
import TypescriptIcon from "../../assets/icons/icons8-typescript.svg";

export default function AboutSlide3() {
  const activeAboutTitlesSlide3 = useRef();
  const activeAboutTitleHide1 = useRef();
  const activeAboutTitleHide2 = useRef();
  const activeAboutTitleHide3 = useRef();
  const activeHtmlIcon = useRef();
  const activeReactIcon = useRef();
  const activeReduxIcon = useRef();
  const activeCssIcon = useRef();
  const activeTypeScriptIcon = useRef();
  const activeGithubIcon = useRef();
  const activeJavascriptIcon = useRef();
  const activeNextIcon = useRef();
  const activeFigmaIcon = useRef();
  const activeArrowlogo = useRef();
  const activeMovingtext = useRef();

  const allIcons = [
    { img: HtmlIcon, name: "html", ref: activeHtmlIcon },
    { img: CssIcon, name: "css", ref: activeCssIcon },
    { img: TypescriptIcon, name: "typescript", ref: activeTypeScriptIcon },
    { img: ReactIcon, name: "react", ref: activeReactIcon },
    { img: JavascriptIcon, name: "javascript", ref: activeJavascriptIcon },
    { img: NextIcon, name: "next", ref: activeNextIcon },
    { img: ReduxIcon, name: "redux", ref: activeReduxIcon },
    { img: GitHubIcon, name: "github", ref: activeGithubIcon },
    { img: FigmaIcon, name: "figma", ref: activeFigmaIcon },
  ];

  const callback = (entry) => {
    const classValue = entry.target.classList.value;

    switch (classValue) {
      case "hide-about-slide3-title1":
      case "hide-about-slide3-title2":
      case "hide-about-slide3-title3":
        entry.target.classList.add("active-hide-about-title");
        break;

      case "icon-skill html-icon":
      case "icon-skill react-icon":
      case "icon-skill redux-icon":
      case "icon-skill css-icon":
      case "icon-skill typescript-icon":
      case "icon-skill javascript-icon":
      case "icon-skill github-icon":
      case "icon-skill figma-icon":
      case "icon-skill next-icon":
        entry.target.classList.add("active-scroll-animation");
        break;

      case "about-slide3-arrow-logo":
      case "moving-text-about-slide3":
      case "about-slide3-titles-container":
        entry.target.classList.add("active-scroll-animation");
        break;

      default:
        break;
    }
  };

  useIntersectionObserver(
    [
      activeAboutTitleHide1.current,
      activeAboutTitleHide2.current,
      activeAboutTitleHide3.current,
      activeHtmlIcon.current,
      activeReactIcon.current,
      activeReduxIcon.current,
      activeCssIcon.current,
      activeTypeScriptIcon.current,
      activeGithubIcon.current,
      activeJavascriptIcon.current,
      activeMovingtext.current,
      activeFigmaIcon.current,
      activeArrowlogo.current,
    ],
    { threshold: 0.8 },
    callback
  );
  useIntersectionObserver([activeAboutTitlesSlide3.current, activeNextIcon.current], { threshold: 0.1 }, callback);
  return (
    <div className="about-slide3 slide">
      {/* <div className="ball-moove"></div> */}
      <div className="about-slide3-titles-container" ref={activeAboutTitlesSlide3}>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">My</h2>
          <div className="hide-about-slide3-title1" ref={activeAboutTitleHide1}></div>
        </div>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">Favorite</h2>
          <div className="hide-about-slide3-title2" ref={activeAboutTitleHide2}></div>
        </div>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">
            <span className="color-span">Technologies</span>
          </h2>
          <div className="hide-about-slide3-title3" ref={activeAboutTitleHide3}></div>
        </div>
      </div>
      <div className="about-slide3-img-container">
        {allIcons.map((icon, index) => (
          <img src={icon.img} alt={icon.name + " icon"} className={`icon-skill ${icon.name + "-icon"}`} ref={icon.ref} key={index} />
        ))}
      </div>
      <div className="moving-text-about-slide3" ref={activeMovingtext}>
        <Movingtext state={"HTML - CSS - Javascript - React - Next - Typescript - Redux - Github - Figma - "} />
      </div>
    </div>
  );
}
