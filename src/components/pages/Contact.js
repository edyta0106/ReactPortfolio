import React from "react";
import { Container, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../App.css";

export default function Contact() {
  return (
    <Container className="py-5">
      <h2 className="myH2 my-5 body">Contact Me</h2>
      <p className="myH3 body my-2">Email: edyta0106@gmail.com</p>
      <p className="myH3 body my-5">Phone: 720.775.7736</p>
      <div className="d-flex justify-content-center">
        <IconButton className="my-3" aria-label="Linkedin.com" onClick={() => window.open("https://www.linkedin.com/in/edyta-r-a7768424a/")}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </div>
    </Container>
  );
}
