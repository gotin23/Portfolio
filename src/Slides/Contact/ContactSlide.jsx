import React from "react";
import "./ContactSlide.css";
import { useState } from "react";
import Progressbar from "../../Components/ProgressBar/ProgressBar";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [objectValue, setObjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
      setErrorMsg("Please enter correct email");
    }
  };
  //fonction pour passer a l'etape 3
  const handleFormName = (e) => {
    e.preventDefault();
    if (nameValue.length > 2) {
      setFormStep(3);
      setErrorMsg("");
    } else {
      setErrorMsg("Your name should have minimum 3 characters");
    }
  };
  //fonction pour passer a l'etape 4
  // const handleFormObject = (e) => {
  //   e.preventDefault();
  //   console.log("kk");
  //   if (objectValue.length > 2) {
  //     setFormStep(4);
  //     setErrorMsg("");
  //   } else {
  //     setErrorMsg("Your object should have minimum 3 characters");
  //   }
  // };
  const handleFormMessage = (e) => {
    e.preventDefault();
    console.log("kk");
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
    } else {
      setErrorMsg("Your message should have minimum 50 characters");
    }
  };
  return (
    <div className="contact-slide slide" id="contact">
      {!form ? (
        <div className="contact-content">
          <h2 className="contact-title">Drop me an email anytime</h2>
          <div className="contact-btn-send" onClick={showForm}>
            Send Email
          </div>
        </div>
      ) : (
        <div className="contact-form-container">
          <Progressbar props={formStep} />
          <form>
            {formStep === 1 && (
              <div className="form-step form-step1">
                <label htmlFor="email" className="contact-labels">
                  Enter your adress email
                </label>
                <input type="email" className="contact-inputs flipInX" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
                <p className="error-message">{errorMsg && errorMsg}</p>
                <div className="contact-btns-container">
                  <button className="contact-btns" onClick={() => setForm(false)}>
                    Cancel
                  </button>
                  <button className="contact-btns" onClick={handleFormEmail}>
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
                <input type="text" className="contact-inputs flipInX" id="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
                <p className="error-message">{errorMsg && errorMsg}</p>
                <div className="contact-btns-container">
                  <button className="contact-btns pulse" onClick={() => setFormStep(1) + setErrorMsg("")}>
                    Previous
                  </button>
                  <button className="contact-btns pulse" onClick={handleFormName}>
                    Next
                  </button>
                </div>
              </div>
            )}
            {/* {formStep === 3 && (
              <div className="form-step form-step2">
                <label htmlFor="object" className="contact-labels">
                  Enter your object
                </label>
                <input type="text" className="contact-inputs flipInX" id="object" value={objectValue} onChange={(e) => setObjectValue(e.target.value)} />
                <p className="error-message">{errorMsg && errorMsg}</p>
                <div className="contact-btns-container">
                  <button className="contact-btns" onClick={() => setFormStep(2) + setErrorMsg("")}>
                    Previous
                  </button>
                  <button className="contact-btns " onClick={handleFormObject}>
                    Next
                  </button>
                </div>
              </div>
            )} */}
            {formStep === 3 && (
              <div className="form-step">
                <label htmlFor="message" className="contact-labels">
                  Enter your message
                </label>
                <textarea id="message" className="contact-inputs contact-message flipInX" value={messageValue} onChange={(e) => setMessageValue(e.target.value)} />
                <p className="error-message">{errorMsg && errorMsg}</p>
                <div className="contact-btns-container">
                  <button className="contact-btns" onClick={() => setFormStep(2) + setErrorMsg("")}>
                    Previous
                  </button>
                  <button className="contact-btns" onClick={handleFormMessage}>
                    Send!
                  </button>
                </div>
              </div>
            )}
            {formStep === 4 && <p className="email-confirmation-send">Thank you, your email he's send! </p>}
          </form>
        </div>
      )}

      {/* <div className="footer"></div> */}
    </div>
  );
}
