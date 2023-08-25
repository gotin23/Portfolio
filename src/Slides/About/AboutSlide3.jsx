import React from "react";
import "./AboutSlide3.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
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
  const [newStyleTitle1, setNewStyleTitle1] = useState({});
  const [newStyleTitle2, setNewStyleTitle2] = useState({});
  const [newStyleTitle3, setNewStyleTitle3] = useState({});

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

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const newStyle = {
  //             right: "100%",
  //           };

  //           if (entry.target.classList.value === "hide-about-slide3-title1") {
  //             setNewStyleTitle1(newStyle);
  //           }
  //           if (entry.target.classList.value === "hide-about-slide3-title2") {
  //             setNewStyleTitle2(newStyle);
  //           }
  //           if (entry.target.classList.value === "hide-about-slide3-title3") {
  //             setNewStyleTitle3(newStyle);
  //           }
  //           if (entry.target.classList.value === "icon-skill html-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "icon-skill react-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "icon-skill redux-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "icon-skill css-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "icon-skill typescript-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "icon-skill javascript-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           // if (entry.target.classList.value === "icon-skill next-icon") {
  //           //   entry.target.classList.add("active-scroll-animation");
  //           // }
  //           if (entry.target.classList.value === "icon-skill github-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "icon-skill figma-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "about-slide3-arrow-logo") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "moving-text-about-slide3") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }

  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.97,
  //     }
  //   );

  //   const elementsToObserve = [
  //     activeAboutTitleHide1.current,
  //     activeAboutTitleHide2.current,
  //     activeAboutTitleHide3.current,
  //     activeHtmlIcon.current,
  //     activeReactIcon.current,
  //     activeReduxIcon.current,
  //     activeCssIcon.current,
  //     activeTypeScriptIcon.current,
  //     activeGithubIcon.current,
  //     activeJavascriptIcon.current,
  //     activeMovingtext.current,
  //     activeFigmaIcon.current,
  //     activeArrowlogo.current,
  //   ];

  //   elementsToObserve.forEach((element) => {
  //     if (element) {
  //       observer.observe(element);
  //     }
  //   });

  //   return () => {
  //     // Nettoyage : arrêter l'observation lorsque le composant est démonté
  //     elementsToObserve.forEach((element) => {
  //       if (element) {
  //         observer.unobserve(element);
  //       }
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           if (entry.target.classList.value === "about-slide3-titles-container") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           if (entry.target.classList.value === "icon-skill next-icon") {
  //             entry.target.classList.add("active-scroll-animation");
  //           }
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.01,
  //     }
  //   );

  //   const elementsToObserve = [activeAboutTitlesSlide3.current, activeNextIcon.current];
  //   elementsToObserve.forEach((element) => {
  //     if (element) {
  //       observer.observe(element);
  //     }
  //   });

  //   return () => {
  //     elementsToObserve.forEach((element) => {
  //       if (element) {
  //         observer.unobserve(element);
  //       }
  //     });
  //   };
  // }, []);

  const callback = (entry) => {
    console.log("on rentre dans le callback");

    if (entry.target.classList.value === "hide-about-slide3-title1") {
      entry.target.classList.add("active-hide-about-title");
    }
    if (entry.target.classList.value === "hide-about-slide3-title2") {
      entry.target.classList.add("active-hide-about-title");
    }
    if (entry.target.classList.value === "hide-about-slide3-title3") {
      entry.target.classList.add("active-hide-about-title");
    }
    if (entry.target.classList.value === "icon-skill html-icon") {
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
    // if (entry.target.classList.value === "icon-skill next-icon") {
    //   entry.target.classList.add("active-scroll-animation");
    // }
    if (entry.target.classList.value === "icon-skill github-icon") {
      entry.target.classList.add("active-scroll-animation");
    }
    if (entry.target.classList.value === "icon-skill figma-icon") {
      entry.target.classList.add("active-scroll-animation");
    }
    if (entry.target.classList.value === "about-slide3-arrow-logo") {
      entry.target.classList.add("active-scroll-animation");
    }
    if (entry.target.classList.value === "moving-text-about-slide3") {
      entry.target.classList.add("active-scroll-animation");
    }
    if (entry.target.classList.value === "about-slide3-titles-container") {
      entry.target.classList.add("active-scroll-animation");
    }
    if (entry.target.classList.value === "icon-skill next-icon") {
      entry.target.classList.add("active-scroll-animation");
    }
    if (entry.target.classList.value === "moving-text-about-slide3") {
      entry.target.classList.add("active-scroll-animation");
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
    { threshold: 0.97 },
    callback
  );
  useIntersectionObserver([activeAboutTitlesSlide3.current, activeNextIcon.current], { threshold: 0.1 }, callback);
  return (
    <div className="about-slide3 slide">
      <div className="about-slide3-titles-container" ref={activeAboutTitlesSlide3}>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">I'm</h2>
          <div className="hide-about-slide3-title1" style={newStyleTitle1} ref={activeAboutTitleHide1}></div>
        </div>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">Loving these</h2>
          <div className="hide-about-slide3-title2" style={newStyleTitle2} ref={activeAboutTitleHide2}></div>
        </div>
        <div className="about-slide3-title-container">
          <h2 className="about-slide3-title">
            <span className="color-span">Technologies</span>
          </h2>
          <div className="hide-about-slide3-title3" style={newStyleTitle3} ref={activeAboutTitleHide3}></div>
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
