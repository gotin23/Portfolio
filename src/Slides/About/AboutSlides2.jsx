import React from "react";
import "./AboutSlide2.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Spiky from "../../assets/icons/Spiky-Shape-Silhouette.svg";

export default function AboutSlides2({ state }) {
  const [newStyleHideAbout, setNewStyleHideAbout] = useState({});
  const [newStyleHideAboutContent, setNewStyleHideAboutContent] = useState({});
  const [activeSpikyText, setActiveSpikyText] = useState(false);

  const activeAboutMeHide = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newStyleHideAboutMe = {
              top: "100%",
            };
            const newStyleHideAboutContent = {
              fontSize: "600px",
            };

            if (entry.target.classList.value === "hide-about-me-content") {
              setNewStyleHideAbout(newStyleHideAboutMe);
              setNewStyleHideAboutContent(newStyleHideAboutContent);
              setTimeout(() => {
                state();
              }, 1200);
              setTimeout(() => {
                setActiveSpikyText(true);
              }, 1200);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="about-slide2 slide">
      <div className="about-me-container">
        <div className="hide-about-me-content" style={newStyleHideAbout} ref={activeAboutMeHide}>
          <h2 className="hide-about-me-content-title" style={newStyleHideAboutContent}>
            About me
          </h2>
        </div>
        <div className="about-me-slide2-all-content">
          <div className="about-me-slide2-all-titles">
            {" "}
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">
                <span className="span-title-slide2">Passionate</span> about
              </h2>
              <div className="about-me-hover-title"></div>
            </div>
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">front-end</h2>
              <div className="about-me-hover-title"></div>
            </div>
            <div className="about-me-content-title-container">
              <h2 className="about-me-content-title">
                Web <span className="span-title-slide2">Development</span>
              </h2>
              <div className="about-me-hover-title"></div>
            </div>
          </div>

          <div className="about-me-spiky-container">
            {activeSpikyText && <img className="about-me-spiky fadeIn" src={Spiky} alt="spiky svg" />}
            <p className="about-me-spiky-text">Be Creative</p>
          </div>
        </div>
      </div>
    </div>
  );
}
