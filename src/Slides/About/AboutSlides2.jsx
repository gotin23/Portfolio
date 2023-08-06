import React from "react";
import "./AboutSlide2.css";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function AboutSlides2() {
  const [newStyleHideAbout, setNewStyleHideAbout] = useState({});

  const activeAboutMeHide = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newStyleHideAboutMe = {
              bottom: "100%",
            };

            if (entry.target.classList.value === "hide-about-me-content") {
              setNewStyleHideAbout(newStyleHideAboutMe);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.97,
      }
    );

    const elementsToObserve = [activeAboutMeHide.current];

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

  return (
    <div className="about-slide2 slide">
      <div className="about-me-container">
        <div className="hide-about-me-content" style={newStyleHideAbout} ref={activeAboutMeHide}>
          <h2 className="hide-about-me-content-title">About me</h2>
        </div>
        <div className="about-me-content-title-container">
          <h2 className="about-me-content-title">Passionate about</h2>
          <div className="about-me-hover-title"></div>
        </div>
        <div className="about-me-content-title-container">
          <h2 className="about-me-content-title">front-end</h2>
          <div className="about-me-hover-title"></div>
        </div>
        <div className="about-me-content-title-container">
          <h2 className="about-me-content-title">web development</h2>
          <div className="about-me-hover-title"></div>
        </div>
      </div>
    </div>
  );
}
