import "./App.css";
import "./animations.css";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import HomeSlide1 from "./Slides/Home/HomeSlide1";
import AboutSlide1 from "./Slides/About/AboutSlide1";
import AboutSlides2 from "./Slides/About/AboutSlides2";

function App() {
  return (
    <div className="App">
      {/* <div className="slides-container"> */}
      <CustomCursor />
      <HomeSlide1 />
      <AboutSlide1 />
      <AboutSlides2 />
      {/* </div> */}
    </div>
  );
}

export default App;
