import React from "react";
import "./Footer.css";
import GithubLogo from "../../assets/icons/icons8-github-white.svg";
import LinkedinLogo from "../../assets/icons/icons8-linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className="social-network">
        <a href="https://github.com/gotin23" target="_blank" className="social-network-link">
          <div className="my-github-container">
            <img className="social-network-logo" src={GithubLogo} />
            Visit my Github
          </div>
        </a>
        <a href="https://www.linkedin.com/in/hugo-gouzy-987166209/" target="_blank" className="social-network-link">
          <div className="my-linkedin-container">
            <img className="social-network-logo" src={LinkedinLogo} />
            Visit my Linkedin
          </div>
        </a>
      </div>
    </footer>
  );
}
