import React from "react";
import { Link } from "react-router-dom";
import "../images/github-logo.png";
import "../images/twitter-logo.png";
import "../images/instagram-logo.png";

export default function Footer() {
  return (
    <footer className="footer d-flex justify-content-center align-items-center">
      <Link to="/"></Link>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-1 d-flex justify-content-center">
            <a href="https://github.com/edyta0106" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/github-logo.png")} alt="GitHub Logo" />
            </a>
          </div>
          <div className="col-1 d-flex justify-content-center">
            <a href="https://twitter.com/RadomskaEdyta" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/twitter-logo.png")} alt="Twitter Logo" />
            </a>
          </div>
          <div className="col-1 d-flex justify-content-center">
            <a href="https://www.instagram.com/edyta_and_family" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/instagram-logo.png")} alt="Instagram Logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
