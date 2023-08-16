import React from "react";
import "./WorksSlide2.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { data } from "../../assets/Data/Data";
import GithubLogo from "../../assets/icons/icons8-github-white.svg";

export default function WorksSlide2() {
  const activeSpan1 = useRef();
  const activeSpan2 = useRef();
  const activeSpan3 = useRef();
  const activeButtonsProjects = useRef();
  const activeContainerAllProjects = useRef();
  const allProjectsBtns = useRef();
  const animProjectImage = useRef();
  const animProjectDescription = useRef();
  const animGitHubLogo = useRef();

  const [styleSpan1, setStyleSpan1] = useState({});
  const [styleSpan2, setStyleSpan2] = useState({});
  const [styleSpan3, setStyleSpan3] = useState({});

  const [activeProject, setActiveProject] = useState(data[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newStyleSpan = { opacity: 1 };
            if (entry.target.classList.value === "works-slide2-span1") {
              setStyleSpan1(newStyleSpan);
            }
            if (entry.target.classList.value === "works-slide2-span2") {
              setStyleSpan2(newStyleSpan);
            }
            if (entry.target.classList.value === "works-slide2-span3") {
              setStyleSpan3(newStyleSpan);
            }
            if (entry.target.classList.value === "buttons-projects-container") {
              entry.target.classList.add("active-scroll-animation");
            }
            if (entry.target.classList.value === "all-projects-container") {
              entry.target.classList.add("active-scroll-animation");
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    // const elementsToObserve = [activeWorksTitle.current, activeCircle2.current, activeCircle3.current];
    const elementsToObserve = [activeSpan1.current, activeSpan2.current, activeSpan3.current, activeButtonsProjects.current, activeContainerAllProjects.current];
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

  const handleActiveProject = (e) => {
    if (e.target.id !== activeProject.id) {
      const prevActiveButton = document.querySelector(".active-button-project");
      prevActiveButton.classList.remove("active-button-project");
      const newActiveProject = data.filter((el) => el.id === e.target.id);
      // animation de l'image et de la description du projet
      animProjectImage.current.classList.add("slideOutDown");
      animProjectDescription.current.classList.add("slideOutRight");
      animGitHubLogo.current.classList.add("bounceIn");
      e.target.classList.add("active-button-project");
      setTimeout(() => {
        animProjectImage.current.classList.remove("slideOutDown");
        animProjectDescription.current.classList.remove("slideOutRight");
        animProjectImage.current.classList.add("slideInUp");
        animProjectDescription.current.classList.add("slideInLeft");
        animGitHubLogo.current.classList.remove("bounceIn");

        //Je set le projet actif
        setActiveProject(newActiveProject[0]);
      }, 410);
    } else {
      return;
    }
  };

  return (
    <div className="works-slide2 slide">
      <h1 className="works-slide2-title">
        <span className="works-slide2-span1" ref={activeSpan1} style={styleSpan1}>
          Take a
        </span>{" "}
        <span className="works-slide2-span2" ref={activeSpan2} style={styleSpan2}>
          look about
        </span>{" "}
        <span className="works-slide2-span3" ref={activeSpan3} style={styleSpan3}>
          my projects
        </span>
      </h1>
      <div className="buttons-projects-container" ref={activeButtonsProjects}>
        {data.map((el, index) => (
          <div className={`button-project`} key={index}>
            {/* <img src={el.logo} className="logo-project" /> */}
            <p className={`button-project-name ${el.name === "Css generator" && "active-button-project"}`} onClick={handleActiveProject} id={index + 1}>
              {el.name}
            </p>
          </div>
        ))}
      </div>

      <div className="all-projects-container" ref={activeContainerAllProjects}>
        <div className="project-img-container">
          <img src={activeProject.image} className="project-img" ref={animProjectImage} />
          <div className="techno-container">
            {activeProject.techno.map((tec) => (
              <img src={tec} className="techno-logo" />
            ))}
          </div>
        </div>
        <div className="project-description-container">
          <p className="project-description" ref={animProjectDescription}>
            {activeProject.description}
          </p>
        </div>
        <a href={activeProject.github} target="_blank">
          <img src={GithubLogo} className="project-github-link" ref={animGitHubLogo} />
        </a>
      </div>
    </div>
  );
}
