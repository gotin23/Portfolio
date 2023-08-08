import "./App.css";
import "./animations.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import HomeSlide1 from "./Slides/Home/HomeSlide1";
import AboutSlide1 from "./Slides/About/AboutSlide1";
import AboutSlides2 from "./Slides/About/AboutSlides2";
import AboutSlide3 from "./Slides/About/AboutSlide3";
import AboutSlide4 from "./Slides/About/AboutSlide4";
import Header from "./Components/Header/Header";

function App() {
  const [activeAboutSlide3, setActiveAboutSlide3] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);

  const observeEndAboutSlide2 = useRef();
  useEffect(() => {
    console.log("yep");
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // const newStyleHideAboutMe = {
            //   bottom: "100%",
            // };
            console.log("11");

            if (entry.target.classList.value === "about-slide2-observer") {
              console.log("actif");
              // setTimeout(() => {
              //   setActiveAboutSlide3(true);
              // }, 1500);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToObserve = [observeEndAboutSlide2.current];

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
  const handleActiveHeader = () => {
    setActiveHeader(true);
  };
  const handleActiveSide3 = () => {
    console.log("oki", activeAboutSlide3);
    setActiveAboutSlide3(true);
  };
  return (
    <div className="App">
      {activeHeader && <Header handleActiveOtherSide={handleActiveSide3} />}
      <CustomCursor />
      <div className="all-content">
        <div className="slides-container">
          <HomeSlide1 state={handleActiveHeader} />
          {activeHeader && <AboutSlide1 />}

          {activeHeader && (
            <div className="about-slide2-observer" ref={observeEndAboutSlide2} onChange={() => handleActiveHeader()}>
              <AboutSlides2 state={handleActiveSide3} />
            </div>
          )}

          {activeAboutSlide3 && <AboutSlide3 />}
          {activeAboutSlide3 && <AboutSlide4 />}
        </div>
      </div>
    </div>
  );
}

export default App;
