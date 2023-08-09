import React from "react";
import "./AboutSlide1.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import RightArrow from "../../assets/icons/iconmonstr-arrow-18.svg";

export default function AboutSlide1() {
  const [newStyleTitle1, setNewStyleTitle1] = useState({});
  const [newStyleTitle2, setNewStyleTitle2] = useState({});
  const [newStyleTitle3, setNewStyleTitle3] = useState({});

  const activeAboutTitles = useRef();
  const activeLetsTalk = useRef();
  const activeAboutTitleHide1 = useRef();
  const activeAboutTitleHide2 = useRef();
  const activeAboutTitleHide3 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entries);
          if (entry.isIntersecting) {
            const newStyle = {
              right: "100%",
            };

            if (entry.target.classList.value === "hide-about-title1") {
              setNewStyleTitle1(newStyle);
            }
            if (entry.target.classList.value === "hide-about-title2") {
              setNewStyleTitle2(newStyle);
            }
            if (entry.target.classList.value === "hide-about-title3") {
              setNewStyleTitle3(newStyle);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.97,
      }
    );

    const elementsToObserve = [activeAboutTitleHide1.current, activeAboutTitleHide2.current, activeAboutTitleHide3.current];

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
        threshold: 0.1,
      }
    );

    const elementsToObserve = [activeAboutTitles.current, activeLetsTalk.current];
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
    <div className="about-slide1 slide" id="about-me">
      <div className="about-titles-container" ref={activeAboutTitles}>
        <div className="about-title-container">
          <h2 className="about-title">I'M</h2>
          <div className="hide-about-title1" style={newStyleTitle1} ref={activeAboutTitleHide1}></div>
        </div>

        <div className="about-title-container">
          <h2 className="about-title">HUGO</h2>
          <div className="hide-about-title2" style={newStyleTitle2} ref={activeAboutTitleHide2}></div>
        </div>

        <div className="about-title-container">
          <h2 className="about-title">
            {" "}
            <span className="color-span">Welcome</span>
          </h2>
          <div className="hide-about-title3" style={newStyleTitle3} ref={activeAboutTitleHide3}></div>
        </div>

        {/* <div className="about-lets-talk-container" ref={activeLetsTalk}>
          <p className="about-lets-talk-content slideInDown">Let's Talk</p>

          <img className="about-lets-talk-arrow slideInUp" src={RightArrow} alt="right-arrow" />
        </div> */}
      </div>
      <div className="about-lets-talk-container">
        <div className="about-lets-talk" ref={activeLetsTalk}>
          <p className="about-lets-talk-content slideInDown">Let's Talk</p>

          <img className="about-lets-talk-arrow slideInUp" src={RightArrow} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
}
