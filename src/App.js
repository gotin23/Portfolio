import "./App.css";
import "./animations.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import HomeSlide1 from "./Slides/Home/HomeSlide1";
import AboutSlide1 from "./Slides/About/AboutSlide1";
import AboutSlides2 from "./Slides/About/AboutSlides2";
import AboutSlide3 from "./Slides/About/AboutSlide3";
// import AboutSlide4 from "./Slides/About/AboutSlide4";
import Header from "./Components/Header/Header";
import WorksSlide1 from "./Slides/Works/WorksSlide1";
import WorksSlide2 from "./Slides/Works/WorksSlide2";
import ContactSlide from "./Slides/Contact/ContactSlide";
// import useIntersectionObserver from "./Hook/IntersectionObserver";

function App() {
  const [activeHeader, setActiveHeader] = useState(false);
  // const [activeAllSlides, setActiveAllSlides] = useState(false);

  const handleActiveHeader = () => {
    setActiveHeader(true);
  };
  // const handleActiveAllSlides = () => {
  //   setActiveAllSlides(true);
  // };

  return (
    <div className="App">
      {activeHeader && <Header />}
      <CustomCursor />
      <div className="all-content">
        <div className="slides-container">
          <HomeSlide1 state={handleActiveHeader} />
          <div className={activeHeader ? "others-active" : "other"}>
            <AboutSlide1 />
            <AboutSlides2 />
            <AboutSlide3 />
            <WorksSlide1 />
            <WorksSlide2 />
            <ContactSlide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
