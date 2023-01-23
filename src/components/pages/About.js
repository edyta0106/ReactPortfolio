import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../../images/profile-photo.jpg";

export default function About() {
  return (
    <>
      <Link to="/ReactPortfolio"></Link>
      <div className="container body">
        <div className="row">
          <div className="col-4 profile-pic my-5"></div>
          <div className="col-8">
            <h2 className="myH2 my-5">About Me</h2>
            <p className="myP my-5">
              Hi there! My name is Edyta Radomska and I live in Parker, CO. I am a recent graduate from the University of Denver's Full Stack Coding
              Bootcamp. I am a mother, a wife, and a business owner of a small real estate company.
            </p>
            <p className="myP my-5">
              In 2021, I was introduced to my first web development experience and I fell in love! To be able to help create something that helps
              others felt remarkable. The seed was officially planted in my head and I decided to continue my new found passion. The following year, I
              enrolled in a coding bootcamp and the rest is history.
            </p>
            <p className="myP my-5">
              I have learned so much in the past few months and I still cannot believe how far I've come. Some of the many browser based technologies
              that I have learned include HTML5, CSS, JavaScript, jQuery, Bootstrap, React.js, and much much more. Through my professional experience,
              I have attained excellent verbal and written communication skills, as well as outstanding management and organizational abilities. As a
              natural, self-motivated leader, I am eager to learn, grow and help develop on new and existing projects.
            </p>
            <p className="myP my-5">Edyta</p>
          </div>
        </div>
      </div>
    </>
  );
}
