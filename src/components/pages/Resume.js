import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "../App.css";

export default function Resume() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-8 py-5 body">
            <h2 className="myH2">Resume: </h2>
            <Box textAlign="center">
              <Button className="my-5" type="submit" sx={{ mt: 5, backgroundColor: "#666" }}>
                <a
                  href="https://drive.google.com/file/d/1qFiveMZHLPru4lXOFFJKZ-U09f8gt45Z/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  Download Resume
                </a>
              </Button>
            </Box>
            <h3 className="myH3">Summary: </h3>
            <p className="myH4 my-5">
              Recent full-stack developer graduate with knowledge of software design, development, and testing. Seeking to utilize broad educational
              background with excellent analytical, technical, and programming skills in front-end and back-end web development. Highly organized and
              self-motivated leader eager to learn, grow, and develop new and existing projects.
            </p>
            <h3 className="myH3">Education: </h3>
            <p className="myH4 my-5">Full Stack Coding Bootcamp Certification | University of Denver | January 2023</p>
            <h3 className="myH3">Technical Skills: </h3>
            <ul className="my-5" style={{ listStyle: "none" }}>
              <li className="myH4 my-5">
                Browser Based Technologies: HTML5, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, Progressive Web Applications (PWAs),
                Handlebars, Local Storage, Session Storage, IndexedDB, React.js
              </li>
              <li className="myH4 my-5">Databases: MySQL, MongoDB</li>
              <li className="myH4 my-5">
                Server Side Development: Node.js, Express.js, User Authentication, Template Engines, MERN Stack (MongoDB, Express.js, React.js,
                Node.js)
              </li>
            </ul>
            <h3 className="myH3">Professional Strengths: </h3>
            <ul className="my-5" style={{ listStyle: "none" }}>
              <li className="myH4 my-5">Excellent verbal and written communication skills</li>
              <li className="myH4 my-5">Self-motivated, precise and dedicated</li>
              <li className="myH4 my-5">Ability to achieve short term and long term objectives</li>
              <li className="myH4 my-5">Outstanding management and organizational skills</li>
              <li className="myH4 my-5">Ability to handle multiple tasks and work under pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
