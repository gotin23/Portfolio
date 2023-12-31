import React, { useRef } from "react";
import useIntersectionObserver from "../../Hook/IntersectionObserver";
import "./ContactSlide.css";
import { useState } from "react";
import Progressbar from "../../Components/ProgressBar/ProgressBar";
import Footer from "../../Components/Footer/Footer";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const activeButtonSend = useRef();
  const activeLogo = useRef();
  const emailInput = useRef();
  const nameInput = useRef();
  const messageInput = useRef();

  const callback = (entry) => {
    if (entry.target.className === "contact-title") {
      activeButtonSend.current.classList.add("active-scroll-animation");
    }
  };

  useIntersectionObserver([activeButtonSend.current, activeLogo.current], { threshold: 1 }, callback);

  //fonction pour afficher le formulaire
  const showForm = () => {
    setForm(true);
  };
  // fonction pour passer a l'etape 2
  const handleFormEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      setFormStep(2);
      setErrorMsg("");
    } else {
      emailInput.current.classList.remove("flipInX");
      emailInput.current.classList.add("shake");
      setTimeout(() => {
        emailInput.current.classList.remove("shake");
      }, 800);
      setErrorMsg("Please enter correct email");
    }
  };
  //fonction pour passer a l'etape 3
  const handleFormName = (e) => {
    e.preventDefault();
    if (nameValue.length > 1) {
      setFormStep(3);
      setErrorMsg("");
    } else {
      nameInput.current.classList.remove("flipInX");
      nameInput.current.classList.add("shake");
      setTimeout(() => {
        nameInput.current.classList.remove("shake");
      }, 800);
      setErrorMsg("Your name should have minimum 2 characters");
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (messageValue.length > 50) {
      emailjs.init("f3KuKVvDEF9BbmQS_");
      setFormStep(4);
      setErrorMsg("");
      emailjs.send("service_augzqwq", "template_q4ppg0w", {
        from_name: nameValue + " " + emailValue,
        to_name: "Gotin",
        message: messageValue,
      });
      setTimeout(() => {
        setFormStep(1);
        setForm(false);
      }, 3000);

      setTimeout(() => {
        activeButtonSend.current.classList.add("active-scroll-animation");
        setEmailValue("");
        setErrorMsg("");
        setMessageValue("");
        setNameValue("");
      }, 3100);
    } else {
      messageInput.current.classList.remove("pulse");
      messageInput.current.classList.add("shake");
      setTimeout(() => {
        messageInput.current.classList.remove("shake");
      }, 800);
      setErrorMsg("Your message should have minimum 50 characters");
    }
  };

  const handleCancelForm = () => {
    setForm(false);
    setErrorMsg("");
    setEmailValue("");
    setNameValue("");
    setMessageValue("");
    setTimeout(() => {
      activeButtonSend.current.classList.add("active-scroll-animation");
    }, 10);
  };
  return (
    <div className="contact-slide slide" id="contact">
      {!form ? (
        <div className="contact-content">
          <h2 className="contact-title" ref={activeLogo}>
            Drop me an email anytime
          </h2>
          <div className="contact-btn-send" onClick={showForm} ref={activeButtonSend}>
            Send Email
          </div>
        </div>
      ) : (
        <div className="contact-form-container">
          {form && formStep < 4 && <Progressbar props={formStep} />}
          <form>
            {formStep === 1 && (
              <div className="form-step form-step1">
                <label htmlFor="email" className="contact-labels">
                  Enter your adress email
                </label>
                <input type="email" ref={emailInput} className="contact-inputs flipInX" id="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
                <p className="error-message">{errorMsg && errorMsg}</p>
                <div className="contact-btns-container">
                  <button className="contact-btns pulse" type="button" onClick={handleCancelForm}>
                    Cancel
                  </button>
                  <button className="contact-btns pulse" type="submit" onClick={handleFormEmail}>
                    Next
                  </button>
                </div>
              </div>
            )}
            {formStep === 2 && (
              <div className="form-step form-step2">
                <label htmlFor="name" className="contact-labels">
                  Enter your name
                </label>
                <input type="text" ref={nameInput} className="contact-inputs flipInX" id="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
                <p className="error-message">{errorMsg && errorMsg}</p>
                <div className="contact-btns-container">
                  <button className="contact-btns pulse" type="button" onClick={() => setFormStep(1) + setErrorMsg("")}>
                    Previous
                  </button>
                  <button className="contact-btns pulse" type="submit" onClick={handleFormName}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="form-step">
                <label htmlFor="message" className="contact-labels">
                  Enter your message
                </label>
                <textarea id="message" ref={messageInput} className="contact-inputs contact-message pulse" value={messageValue} onChange={(e) => setMessageValue(e.target.value)} />
                <p className="error-message">{errorMsg && errorMsg}</p>
                <div className="contact-btns-container">
                  <button className="contact-btns pulse" type="button" onClick={() => setFormStep(2) + setErrorMsg("")}>
                    Previous
                  </button>
                  <button className="contact-btns pulse" type="submit" onClick={handleSendEmail}>
                    Send!
                  </button>
                </div>
              </div>
            )}
            {formStep === 4 && <p className="email-confirmation-send rubberBand">Thank you, your email he's send! </p>}
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
}
