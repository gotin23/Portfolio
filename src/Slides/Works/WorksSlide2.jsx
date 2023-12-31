import React from "react";
import "./WorksSlide2.css";
import { useRef } from "react";
import { useState } from "react";
import { data } from "../../assets/Data/Data";
import GithubLogo from "../../assets/icons/icons8-github-white.svg";
import useIntersectionObserver from "../../Hook/IntersectionObserver";

export default function WorksSlide2() {
  const activeSpan1 = useRef();
  const activeSpan2 = useRef();
  const activeSpan3 = useRef();
  const activeButtonsProjects = useRef();
  const activeContainerAllProjects = useRef();
  const animProjectImage = useRef();
  const animProjectDescription = useRef();
  const animGitHubLogo = useRef();

  // ici le projet actif
  const [activeProject, setActiveProject] = useState(data[0]);

  const callback = (entry) => {
    if (entry.target.classList.value === "works-slide2-span1") {
      entry.target.classList.add("active-span-works-slide2");
    }
    if (entry.target.classList.value === "works-slide2-span2") {
      entry.target.classList.add("active-span-works-slide2");
    }
    if (entry.target.classList.value === "works-slide2-span3") {
      entry.target.classList.add("active-span-works-slide2");
      activeButtonsProjects.current.classList.add("active-scroll-animation");
      setTimeout(() => {
        activeContainerAllProjects.current.classList.add("active-scroll-animation");
      }, 200);
    }
  };

  useIntersectionObserver([activeSpan1.current, activeSpan2.current, activeSpan3.current], { threshold: 0.97 }, callback);

  const handleActiveProject = (e) => {
    // si le projet choisis est different du projet affiche
    if (e.target.id !== activeProject.id) {
      // fonction pour rendre actif le btn du projet affiche
      handleActiveBtnProject(e);
      // fonction pour les animations
      animProjectElements();
      // un constante pour le filtrer le projet voulu grace a l'id
      const newActiveProject = data.filter((el) => el.id === e.target.id);
      setTimeout(() => {
        //Je set le projet actif
        setActiveProject(newActiveProject[0]);
      }, 400);
      //si le projet choisis est le mm je fais rien
    } else {
      return;
    }
  };

  const animProjectElements = () => {
    // animation de l'image , de la description du projet...
    animProjectImage.current.classList.add("slideOutDown");
    animProjectDescription.current.classList.add("fadeOut");
    animGitHubLogo.current.classList.add("bounceIn");

    setTimeout(() => {
      animProjectImage.current.classList.remove("slideOutDown");
      animProjectDescription.current.classList.remove("fadeOut");
      animGitHubLogo.current.classList.remove("bounceIn");
      animProjectImage.current.classList.add("slideInUp");
      animProjectDescription.current.classList.add("fadeIn");
    }, 1000);
  };
  const handleActiveBtnProject = (e) => {
    const prevActiveButton = document.querySelector(".active-button-project");
    prevActiveButton.classList.remove("active-button-project");
    e.target.classList.add("active-button-project");
  };

  return (
    <div className="works-slide2 slide">
      <h1 className="works-slide2-title">
        <span className="works-slide2-span1" ref={activeSpan1}>
          Take look
        </span>{" "}
        <span className="works-slide2-span2" ref={activeSpan2}>
          at my
        </span>{" "}
        <span className="works-slide2-span3" ref={activeSpan3}>
          projects
        </span>
      </h1>
      <div className="buttons-projects-container" ref={activeButtonsProjects}>
        {/* Je map sur ma data pour afficher le btn */}
        {data.map((el, index) => (
          <div className={`button-project`} key={index}>
            <p className={`button-project-name ${el.name === "Css generator" && "active-button-project"}`} onClick={handleActiveProject} id={index + 1}>
              {el.name}
            </p>
          </div>
        ))}
      </div>

      <div className="all-projects-container" ref={activeContainerAllProjects}>
        <div className="project-img-container">
          <span className="loader"></span>
          <img src={activeProject.image} className="project-img" ref={animProjectImage} alt={activeProject.name} />
          <a className="visit-website-link" href={activeProject.website ? activeProject.website : activeProject.github} target="_blank" rel="noreferrer">
            {activeProject.website ? "Visit website" : "Visit github"}
          </a>
          <div className="techno-container">
            {activeProject.techno.map((tec, index) => (
              <img src={tec} key={index} className="techno-logo" alt="technologie" />
            ))}
          </div>
        </div>
        <div className="project-description-container">
          <p className="project-description" ref={animProjectDescription}>
            {activeProject.description}
          </p>
        </div>
        <a href={activeProject.github} target="_blank" rel="noreferrer">
          <div className="container-github-link">
            <p>Github</p>
            <img src={GithubLogo} className="project-github-link" ref={animGitHubLogo} alt="github logo" />
          </div>
        </a>
      </div>
    </div>
  );
}
