import React from "react";
import "./AboutSlide3.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import HtmlIcon from "../../assets/icons/icons8-html.svg";
import JavascriptIcon from "../../assets/icons/icons8-javascript.svg";
import ReactIcon from "../../assets/icons/icons8-react-native.svg";
import FigmaIcon from "../../assets/icons/icons8-figma.svg";
import NextIcon from "../../assets/icons/icons8-nextjs.svg";
import CssIcon from "../../assets/icons/icons8-css.svg";
import GitHubIcon from "../../assets/icons/icons8-github.svg";
// import GitIcon from "../../assets/icons/icons8-git.svg";
import ReduxIcon from "../../assets/icons/icons8-redux.svg";
import Typescript from "../../assets/icons/icons8-typescript.svg";
import ArrowLogo from "../../assets/icons/304729.svg";

export default function AboutSlide3() {
  const [newStyleTitle1, setNewStyleTitle1] = useState({});
  const [newStyleTitle2, setNewStyleTitle2] = useState({});
  const [newStyleTitle3, setNewStyleTitle3] = useState({});
  //   const [activeArrowLogo, setActiveArrowLogo] = useState(false);

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
  //   const [
  //     activeAboutTitlesSlide3,
  //     activeAboutTitleHide1,
  //     activeAboutTitleHide2,
  //     activeAboutTitleHide3,
  //     activeHtmlIcon,
  //     activeReactIcon,
  //     activeReduxIcon,
  //     activeCssIcon,
  //     activeTypeScriptIcon,
  //   ] = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entries);
          if (entry.isIntersecting) {
            const newStyle = {
              right: "100%",
            };

            if (entry.target.classList.value === "hide-about-slide3-title1") {
              console.log("okiu");
              setNewStyleTitle1(newStyle);
            }
            if (entry.target.classList.value === "hide-about-slide3-title2") {
              setNewStyleTitle2(newStyle);
            }
            if (entry.target.classList.value === "hide-about-slide3-title3") {
              setNewStyleTitle3(newStyle);
            }
            if (entry.target.classList.value === "icon-skill html-icon") {
              console.log("gggg");
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill react-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill redux-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill css-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill typescript-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill javascript-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill next-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill github-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "icon-skill figma-icon") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "about-slide3-arrow-logo") {
              console.log("yepou");
              entry.target.classList.add("active-scroll-animation");
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.97,
      }
    );

    const elementsToObserve = [
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
      activeNextIcon.current,
      activeFigmaIcon.current,
      activeArrowlogo.current,
    ];

    elementsToObserve.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Nettoyage : arrêter l'observation lorsque le composant est démonté
      elementsToObserve.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-scroll-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    const elementsToObserve = [activeAboutTitlesSlide3.current];
    elementsToObserve.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  return (
    <div className="about-slide3 slide">
      <div className="about-slide3-titles-container" ref={activeAboutTitlesSlide3}>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">I'm</h2>
          <div className="hide-about-slide3-title1" style={newStyleTitle1} ref={activeAboutTitleHide1}></div>
        </div>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">Loving These</h2>
          <div className="hide-about-slide3-title2" style={newStyleTitle2} ref={activeAboutTitleHide2}></div>
        </div>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">TECHNOLOGIES</h2>
          <div className="hide-about-slide3-title3" style={newStyleTitle3} ref={activeAboutTitleHide3}></div>
        </div>
      </div>
      <div className="about-slide3-img-container">
        <img src={ArrowLogo} alt="arrow logo" className="about-slide3-arrow-logo" ref={activeArrowlogo} />
        <img src={HtmlIcon} alt="html icon" className="icon-skill html-icon" ref={activeHtmlIcon} />
        <img src={CssIcon} alt="Css icon" className="icon-skill css-icon" ref={activeCssIcon} />
        <img src={JavascriptIcon} alt="Javascript icon" className="icon-skill javascript-icon" ref={activeJavascriptIcon} />

        <img src={ReactIcon} alt="html icon" className="icon-skill react-icon" ref={activeReactIcon} />
        <img src={Typescript} alt="html icon" className="icon-skill typescript-icon" ref={activeTypeScriptIcon} />
        <img src={NextIcon} alt="html icon" className="icon-skill next-icon" ref={activeNextIcon} />
        <img src={ReduxIcon} alt="html icon" className="icon-skill redux-icon" ref={activeReduxIcon} />

        <img src={GitHubIcon} alt="html icon" className="icon-skill github-icon" ref={activeGithubIcon} />

        <img src={FigmaIcon} alt="html icon" className="icon-skill figma-icon" ref={activeFigmaIcon} />
      </div>
    </div>
  );
}
