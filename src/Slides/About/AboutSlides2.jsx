import React from "react";
import "./AboutSlide2.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../Hook/IntersectionObserver";

export default function AboutSlides2({ state }) {
  // const [newStyleHideAbout, setNewStyleHideAbout] = useState({});
  // const [newStyleHideAboutContent, setNewStyleHideAboutContent] = useState({});

  const activeAboutMeHide = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const newStyleHideAboutMe = {
  //             // top: "50%",
  //             // bottom: "50%",
  //             left: "100%",
  //             // right: "40%",
  //           };
  //           const newStyleHideAboutContent = {
  //             fontSize: "600px",
  //           };

  //           if (entry.target.classList.value === "hide-about-me-content") {
  //             setNewStyleHideAbout(newStyleHideAboutMe);
  //             setNewStyleHideAboutContent(newStyleHideAboutContent);
  //             // ici on active toute les autres slides
  //             // setTimeout(() => {
  //             //   state();
  //             // }, 1200);
  //           }
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.97,
  //     }
  //   );

  //   const elementsToObserve = [activeAboutMeHide.current];

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
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const callback = (entry) => {
    if (entry.target.classList.value === "hide-about-me-content") {
      console.log("yepou");
      entry.target.classList.add("active-hide-about-me-content");
    }
  };

  useIntersectionObserver([activeAboutMeHide.current], { threshold: 0.97 }, callback);

  return (
    <div className="about-slide2 slide">
      <div className="about-me-container">
        <div className="hide-about-me-content" ref={activeAboutMeHide}>
          <h2 className="hide-about-me-content-title">About me</h2>
        </div>
        <div className="about-me-slide2-all-content">
          <div className="about-me-slide2-all-titles">
            {" "}
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">
                <span className="span-title-slide2 color-span">Passionate</span> about
              </h2>
            </div>
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">front-end</h2>
            </div>
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">
                Web{" "}
                <span className="span-title-slide2">
                  <span className="color-span">Development</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
