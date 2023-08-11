import React from "react";
import "./WorksSlide1.css";

import { useEffect, useRef } from "react";
import { useState } from "react";

import Welcome from "../../assets/icons/deal-svgrepo-com.svg";

export default function WorksSlide1() {
  const activeWorksTitle = useRef();
  const activeCircle2 = useRef();
  const activeWorksCircle3 = useRef();

  const [contentTitleHide, setContentTitleHide] = useState(false);
  const [activeBoxs, setActiveBoxs] = useState(false);
  const [styleCircle2, setStyleCircle2] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.value === "box-container") {
              setTimeout(() => {
                setActiveBoxs(true);
              }, 4000);
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

    // const elementsToObserve = [activeWorksTitle.current, activeCircle2.current, activeWorksCircle3.current];
    const elementsToObserve = [
      { element: activeWorksTitle.current, threshold: 0.95 },
      { element: activeCircle2.current, threshold: 1 },
      { element: activeWorksCircle3.current, threshold: 1 },
      // ... add more elements here
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
  const handleSpan1MouseEnter = () => {
    const newStyle = { backgroundColor: "#ffffff" };
    setStyleCircle2(newStyle);
  };
  const handleSpan1MouseLeave = () => {
    const newStyle = { backgroundColor: "#000000" };
    setStyleCircle2(newStyle);
  };
  return (
    <div className="works-slide1 slide">
      <div className="works-slide1-all-content">
        <div className="work-slide1-container2">
          <div className="box-container2" ref={activeCircle2}>
            <div class="box">
              {/* <p className="small-box-content">Hello!</p> */}
              <img className="welcome-img" src={Welcome} />
              <div class="circle circle2" style={styleCircle2}></div>
            </div>
          </div>
          {activeBoxs && (
            <div className="box-container4">
              <div class="box">
                <div class="circle circle4"></div>
              </div>
            </div>
          )}
        </div>
        <div className="work-slide1-container">
          <div className="box-container" ref={activeWorksTitle} onMouseEnter={handleTitleIn} onMouseLeave={handleTitleOut}>
            {activeBoxs && (
              <div className="box-container6">
                <div class="box">
                  <div class="circle circle6"></div>
                </div>
              </div>
            )}
            {activeBoxs && (
              <div className="box-container7">
                <div class="box">
                  <div class="circle circle7"></div>
                </div>
              </div>
            )}
            {activeBoxs && (
              <div className="box-container8">
                <div class="box">
                  <div class="circle circle8"></div>
                </div>
              </div>
            )}
            <div class="box">
              {!contentTitleHide && <h2 className="works-slide1-box-title wst1 fadeIn">My Works</h2>}
              {contentTitleHide && (
                <p className="works-slide1-box-title wst2 fadeIn">
                  <span className="work-slide1-span work-span-hover1" onMouseEnter={handleSpan1MouseEnter} onMouseLeave={handleSpan1MouseLeave}>
                    Welcome{" "}
                  </span>
                  to my collection of <span className="works-slide1-span">web development</span> projects. Each project is a unique showcase of my{" "}
                  <span className="work-slide1-span">skills</span>, creativity, and passion for building <span className="work-slide1-span">exceptional</span> web experiences.
                  Explore the diverse range of <br /> <span className="work-slide1-span">projects</span> below to
                  <br /> get a glimpse of my journey as a web <span className="work-slide1-span">developer</span>.
                </p>
              )}
              <div class="circle circle1"></div>
            </div>
          </div>
        </div>
        <div className="work-slide1-container3">
          <div className="box-container3" ref={activeWorksCircle3}>
            <div class="box">
              <div class="circle circle3"></div>
            </div>
          </div>
          {activeBoxs && (
            <div className="box-container5 rubberBand">
              <div class="box">
                <div class="circle circle5"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
