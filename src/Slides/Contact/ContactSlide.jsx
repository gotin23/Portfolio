import React from "react";
import "./ContactSlide.css";
import { useState } from "react";

export default function Contact() {
  const [sendEmailForm, setSendEmailForm] = useState(false);

  const showEmailForm = () => {
    setSendEmailForm(true);
  };
  return (
    <div className="contact-slide slide" id="contact">
      {!sendEmailForm && (
        <div className="contact-content">
          {" "}
          <h2 className="contact-title">Drop me an email anytime</h2>
          <div className="contact-btn-send" onClick={showEmailForm}>
            Send Email
          </div>
        </div>
      )}

      {/* <div className="footer"></div> */}
    </div>
  );
}
