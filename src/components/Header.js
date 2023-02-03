// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Header() {
  // useEffect(() => {
  //   window.scroll(function () {
  //     if (document.scrollTop() > 50) {
  //       document.querySelector(".nav").addClass("affix");
  //       console.log("OK");
  //     } else {
  //       document.querySelector(".nav").removeClass("affix");
  //     }
  //   });
  //   document.querySelector(".navTrigger").addEventListener("click", function () {
  //     // this.toggleClass("active");
  //     this.classList.toggle("active");
  //     console.log("Clicked menu");
  //     // document.querySelector("#mainListDiv").toggleClass("show_list");
  //     document.querySelector("#mainListDiv").classList.toggle("show_list");
  //     // document.querySelector("#mainListDiv").fadeIn();
  //   });
  // }, []);

  return (
    <>
      <nav className="nav body">
        <div className="container">
          <div className="logo">
            <a href="/">Edyta Radomska</a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/portfolio">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
      <section className="home"></section>
    </>
  );
}
