import React from "react";
import "./WorksSlide1.css";
import useIntersectionObserver from "../../Hook/IntersectionObserver";
import { useRef } from "react";
import { useState } from "react";

import Welcome from "../../assets/icons/deal-svgrepo-com.svg";
import Skill from "../../assets/icons/skills-svgrepo-com.svg";
import Coding from "../../assets/icons/1608639_code_icon.svg";
import Project from "../../assets/icons/3643772_folder_archive_open_archives_document_icon.svg";
import Developer from "../../assets/icons/4213465_freelancer_computer_working_internet_work_icon.svg";
import Exceptional from "../../assets/icons/1467339654.svg";

export default function WorksSlide1() {
  const activeWorksTitle = useRef();
  const activeCircle2 = useRef();
  const activeCircle3 = useRef();

  const [contentTitleHide, setContentTitleHide] = useState(false);

  const [styleCircle2, setStyleCircle2] = useState({});
  const [styleCircle3, setStyleCircle3] = useState({});
  const [styleCircle4, setStyleCircle4] = useState({});
  const [styleCircle5, setStyleCircle5] = useState({});
  const [styleCircle6, setStyleCircle6] = useState({});
  const [styleCircle7, setStyleCircle7] = useState({});

  const callback = (entry) => {
    entry.target.classList.add("active-scroll-animation");
  };

  useIntersectionObserver([activeWorksTitle.current, activeCircle2.current, activeCircle3.current], { threshold: 0.97 }, callback);

  const handleTitleMouseIn = () => {
    setContentTitleHide(true);
  };
  const handleTitleMouseOut = () => {
    setContentTitleHide(false);
  };

  const handleSpansMouseEnter = (e) => {
    const newStyle = { backgroundColor: "var(--color-secondary)" };
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
    const newStyle = { backgroundColor: "var(--color-primary)" };

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
            <div className="box">
              <img className="welcome-img circle-img" src={Welcome} alt="welcome icon" />
              <div className="circle circle2" style={styleCircle2}></div>
            </div>
          </div>
        </div>
        <div className="work-slide1-container">
          <div className="box-container" ref={activeWorksTitle} onMouseEnter={handleTitleMouseIn} onMouseLeave={handleTitleMouseOut}>
            <div className="box-container5">
              <div className="box">
                <img className="circle-img coding-img" src={Coding} alt="coding icon" />
                <div className="circle circle5" style={styleCircle5}></div>
              </div>
            </div>

            <div className="box-container6">
              <div className="box">
                <img className="circle-img" src={Project} alt="project icon" />
                <div className="circle circle6" style={styleCircle6}></div>
              </div>
            </div>

            <div className="box-container7">
              <div className="box">
                <img className="circle-img" src={Developer} alt="developer icon" />
                <div className="circle circle7" style={styleCircle7}></div>
              </div>
            </div>

            <div className="box">
              {!contentTitleHide && <h2 className="works-slide1-box-title wst1 fadeIn">My Projects</h2>}
              {contentTitleHide && (
                <p className="works-slide1-box-title wst2 fadeIn">
                  <span className="work-slide1-span span-hover1" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    Welcome{" "}
                  </span>
                  <br />
                  to my collection of <br />
                  <span className="work-slide1-span span-hover2" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    web development
                  </span>{" "}
                  <br />
                  projects. Each project is a unique showcase <br />
                  <span className="work-slide1-span span-hover3" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    of my skills
                  </span>
                  <br />
                  creativity, and passion for building exceptional
                  <br />
                  <span className="work-slide1-span span-hover4" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    web experiences
                  </span>{" "}
                  <br />
                  Explore the diverse range of <br />{" "}
                  <span className="work-slide1-span span-hover5" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    projects
                  </span>
                  <br />
                  below to get a glimpse of my journey as a <br />
                  <span className="work-slide1-span span-hover6" onMouseEnter={handleSpansMouseEnter} onMouseLeave={handleSpansMouseLeave}>
                    web developer
                  </span>
                  .
                </p>
              )}
              <div className="circle circle1"></div>
            </div>
          </div>
        </div>
        <div className="work-slide1-container3">
          <div className="box-container3" ref={activeCircle3}>
            <div className="box">
              <img className="skill-img circle-img" src={Skill} alt="skill icon" />
              <div className="circle circle3" style={styleCircle3}></div>
            </div>
          </div>

          <div className="box-container4">
            <div className="box">
              <img className="circle-img" src={Exceptional} alt="exceptional icon" />
              <div className="circle circle4" style={styleCircle4}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
