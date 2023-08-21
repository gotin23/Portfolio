import "./App.css";
import "./animations.css";
import { useState } from "react";
// import { useEffect, useRef } from "react";
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

function App() {
  const [activeAboutSlide3, setActiveAboutSlide3] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);

  const handleActiveHeader = () => {
    setActiveHeader(true);
  };
  const handleActiveSide3 = () => {
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

          {activeHeader && <AboutSlides2 state={handleActiveSide3} />}

          {activeAboutSlide3 && <AboutSlide3 />}
          {/* {activeAboutSlide3 && <AboutSlide4 />} */}
          {activeAboutSlide3 && <WorksSlide1 />}
          {activeAboutSlide3 && <WorksSlide2 />}
          {activeAboutSlide3 && <ContactSlide />}
        </div>
      </div>
    </div>
  );
}

export default App;
