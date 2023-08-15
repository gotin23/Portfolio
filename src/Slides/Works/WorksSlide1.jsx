import React from "react";
import "./WorksSlide1.css";

import { useEffect, useRef } from "react";
import { useState } from "react";

import Welcome from "../../assets/icons/deal-svgrepo-com.svg";
import Skill from "../../assets/icons/skills-svgrepo-com.svg";
import Coding from "../../assets/icons/icons8-code-24.png";
import Project from "../../assets/icons/icons8-projet-24.png";
import Developer from "../../assets/icons/icons8-ordinateur-24.png";
import Exceptional from "../../assets/icons/icons8-étoile-30.png";
// import ArrowRight from "../../assets/icons/icons8-arrow-right-100.png";

export default function WorksSlide1() {
  const activeWorksTitle = useRef();
  const activeCircle2 = useRef();
  const activeCircle3 = useRef();

  const [contentTitleHide, setContentTitleHide] = useState(false);
  const [activeBoxs, setActiveBoxs] = useState(false);

  const [styleCircle2, setStyleCircle2] = useState({});
  const [styleCircle3, setStyleCircle3] = useState({});
  const [styleCircle4, setStyleCircle4] = useState({});
  const [styleCircle5, setStyleCircle5] = useState({});
  const [styleCircle6, setStyleCircle6] = useState({});
  const [styleCircle7, setStyleCircle7] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.value === "box-container") {
              setTimeout(() => {
                setActiveBoxs(true);
              }, 1000);
            }
            entry.target.classList.add("active-scroll-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    // const elementsToObserve = [activeWorksTitle.current, activeCircle2.current, activeCircle3.current];
    const elementsToObserve = [
      { element: activeWorksTitle.current, threshold: 0.95 },
      { element: activeCircle2.current, threshold: 1 },
      { element: activeCircle3.current, threshold: 1 },
    ];
    elementsToObserve.forEach((element) => {
      if (element) {
        observer.observe(element.element, element.threshold);
      }
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) {
          observer.unobserve(element.element);
        }
      });
    };
  }, []);

  const handleTitleIn = () => {
    setTimeout(() => {
      setContentTitleHide(true);
    }, 200);
  };
  const handleTitleOut = () => {
    setTimeout(() => {
      setContentTitleHide(false);
    }, 200);
  };
  // const handleSpan1MouseEnter = () => {
  //   const newStyle = { backgroundColor: "#ffffff" };
  //   setStyleCircle2(newStyle);
  // };
  // const handleSpan1MouseLeave = () => {
  //   const newStyle = { backgroundColor: "#000000" };
  //   setStyleCircle2(newStyle);
  // };
  // const handleSpan2MouseEnter = () => {
  //   const newStyle = { backgroundColor: "#ffffff" };
  //   setStyleCircle6(newStyle);
  // };
  // const handleSpan2MouseLeave = () => {
  //   const newStyle = { backgroundColor: "#000000" };
  //   setStyleCircle6(newStyle);
  // };
  // const handleSpan3MouseEnter = () => {
  //   const newStyle = { backgroundColor: "#ffffff" };
  //   setStyleCircle3(newStyle);
  // };
  // const handleSpan3MouseLeave = () => {
  //   const newStyle = { backgroundColor: "#000000" };
  //   setStyleCircle3(newStyle);
  // };
  const handleSpansMouseEnter = (e) => {
    const newStyle = { backgroundColor: "#ffffff" };
    // setStyleCircle3(newStyle);
    if (e.target.classList.contains("span-hover1")) {
      setStyleCircle2(newStyle);
    }
    if (e.target.classList.contains("span-hover2")) {
      setStyleCircle5(newStyle);
    }
    if (e.target.classList.contains("span-hover3")) {
      setStyleCircle3(newStyle);
    }
    if (e.target.classList.contains("span-hover4")) {
      setStyleCircle4(newStyle);
    }
    if (e.target.classList.contains("span-hover5")) {
      setStyleCircle6(newStyle);
    }
    if (e.target.classList.contains("span-hover6")) {
      setStyleCircle7(newStyle);
    }
  };
  const handleSpansMouseLeave = (e) => {
    const newStyle = { backgroundColor: "#000000" };
    // setStyleCircle3(newStyle);
    if (e.target.classList.contains("span-hover1")) {
      setStyleCircle2(newStyle);
    }
    if (e.target.classList.contains("span-hover2")) {
      setStyleCircle5(newStyle);
    }
    if (e.target.classList.contains("span-hover3")) {
      setStyleCircle3(newStyle);
    }
    if (e.target.classList.contains("span-hover4")) {
      setStyleCircle4(newStyle);
    }
    if (e.target.classList.contains("span-hover5")) {
      setStyleCircle6(newStyle);
    }
    if (e.target.classList.contains("span-hover6")) {
      setStyleCircle7(newStyle);
    }
  };
  return (
    <div className="works-slide1 slide" id="works">
      <div className="works-slide1-all-content">
        <div className="work-slide1-container2">
          <div className="box-container2" ref={activeCircle2}>
            <div class="box">
              <img className="welcome-img circle-img" src={Welcome} />
              <div class="circle circle2" style={styleCircle2}></div>
            </div>
          </div>
        </div>
        <div className="work-slide1-container">
          <div className="box-container" ref={activeWorksTitle} onMouseEnter={handleTitleIn} onMouseLeave={handleTitleOut}>
            {activeBoxs && (
              <div className="box-container5">
                <div class="box">
                  <img className="circle-img" src={Coding} />
                  <div class="circle circle5" style={styleCircle5}></div>
                </div>
              </div>
            )}
            {activeBoxs && (
              <div className="box-container6">
                <div class="box">
                  <img className="circle-img" src={Project} />
                  <div class="circle circle6" style={styleCircle6}></div>
                </div>
              </div>
            )}
            {activeBoxs && (
              <div className="box-container7">
                <div class="box">
                  <img className="circle-img" src={Developer} />
                  <div class="circle circle7" style={styleCircle7}></div>
                </div>
              </div>
            )}
            <div class="box">
              {!contentTitleHide && <h2 className="works-slide1-box-title wst1 fadeIn">My Works</h2>}
              {contentTitleHide && (
                <p className="works-slide1-box-title wst2 fadeIn">
                  <span className="work-slide1-span span-hover1" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    Welcome{" "}
                  </span>
                  to my collection of{" "}
                  <span className="work-slide1-span span-hover2" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    web development
                  </span>{" "}
                  projects. Each project is a unique showcase of my{" "}
                  <span className="work-slide1-span span-hover3" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    skills
                  </span>
                  , creativity, and passion for building{" "}
                  <span className="work-slide1-span span-hover4" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    exceptional
                  </span>{" "}
                  web experiences. Explore the diverse range of <br />{" "}
                  <span className="work-slide1-span span-hover5" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    projects
                  </span>{" "}
                  below to
                  <br /> get a glimpse of my journey as a web{" "}
                  <span className="work-slide1-span span-hover6" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    developer
                  </span>
                  .
                </p>
              )}
              <div class="circle circle1"></div>
            </div>
          </div>
        </div>
        <div className="work-slide1-container3">
          {/* <img src={ArroRight} /> */}
          <div className="box-container3" ref={activeCircle3}>
            <div class="box">
              <img className="skill-img circle-img" src={Skill} />
              <div class="circle circle3" style={styleCircle3}></div>
            </div>
          </div>
          {activeBoxs && (
            <div className="box-container4">
              <div class="box">
                <img className="circle-img" src={Exceptional} />
                <div class="circle circle4" style={styleCircle4}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
