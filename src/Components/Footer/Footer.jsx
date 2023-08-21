import React from "react";
import "./Footer.css";
import GithubLogo from "../../assets/icons/icons8-github-white.svg";
import LinkedinLogo from "../../assets/icons/icons8-linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className="social-network">
        <div className="my-github-container">
          <img className="social-network-logo" src={GithubLogo} />
          <a href="" className="social-network-link">
            Visit my Github
          </a>
        </div>
        <div className="my-linkedin-container">
          <img className="social-network-logo" src={LinkedinLogo} />
          <a href="" className="social-network-link">
            Visit my Linkedin
          </a>
        </div>
      </div>
      {/* <h4 className="footer-title"> Site powered by Hugo Gouzy 2023</h4> */}
    </footer>
  );
}
