import React from "react";
import "./WorksSlide1.css";

import { useEffect, useRef } from "react";
import { useState } from "react";

export default function WorksSlide1() {
  const activeWorksTitle = useRef();
  const activeCircle2 = useRef();
  const activeWorksCircle3 = useRef();

  //   const [contentTitle, setContentTitle] = useState("My works");
  const [contentTitleHide, setContentTitleHide] = useState(false);
  const [kk, setkk] = useState(0);
  //   const [contentTitleStyle, setContentTitleStyle] = useState({});
  console.log(contentTitleHide);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.attributes[1]?.value);

            if (entry.target.classList.value === "box-container") {
              setkk(1);
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "box-container2") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "box-container3") {
              entry.target.classList.add("active-scroll-animation");
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: kk,
      }
    );

    const elementsToObserve = [activeWorksTitle.current, activeCircle2.current, activeWorksCircle3.current];
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
  return (
    <div className="works-slide1 slide">
      <div className="works-slide1-all-content">
        {/* <div className="black-part">
          {" "}
          <h1 className="works-slide1-title ws1t1">My works</h1>
        </div>
        <div className="white-part">
          <h1 className="works-slide1-title ws1t2">My works</h1>
        </div> */}

        <div className="work-slide1-container2">
          <div className="box-container2" ref={activeCircle2}>
            <div class="box">
              <div class="circle circle2"></div>
            </div>
          </div>
          <div className="box-container4">
            <div class="box">
              <div class="circle circle4"></div>
            </div>
          </div>
        </div>
        <div className="work-slide1-container">
          <div className="box-container" data-atribute={1} ref={activeWorksTitle} onMouseEnter={handleTitleIn} onMouseLeave={handleTitleOut}>
            <div class="box">
              {!contentTitleHide && <h2 className="works-slide1-box-title wst1 fadeIn">My Works</h2>}
              {contentTitleHide && (
                <p className="works-slide1-box-title wst2 fadeIn">
                  <span className="work-slide1-span"> Welcome</span> to my collection of <span className="work-slide1-span">web development</span> projects. Each project is a
                  unique showcase of my <span className="work-slide1-span">skills</span>, creativity, and passion for building <span className="work-slide1-span">exceptional</span>{" "}
                  web experiences. Explore the diverse range of <br /> <span className="work-slide1-span">projects</span> below to
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
          <div className="box-container5">
            <div class="box">
              <div class="circle circle5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
