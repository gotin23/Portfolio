import React from "react";
import "./AboutSlide4.css";
import Picture from "../../assets/icons/pp.jpeg";
import Movingtext from "../../Components/MovingText/Movingtext";
import { useEffect, useRef } from "react";
export default function AboutSlide4() {
  // const [newStyle, setNewStyle] = useState({});

  const activeImage = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-scroll-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToObserve = [activeImage.current];
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
  return (
    <div className="about-slide4 slide" id="page2">
      {/* <Movingtext /> */}
      {/* <div className="about-slide4-container">
        <div className="about-slide4-img-container">
          <img className="about-slide4-img" src={Picture} ref={activeImage} alt="profilePicture" />
        </div>
        <div className="about-slide4-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo, sit totam nesciunt, ea laudantium quae, inventore excepturi nihil animi ab beatae est aperiam
            magnam harum voluptatibus nulla quidem optio.
          </p>
        </div>
      </div> */}
    </div>
  );
}
