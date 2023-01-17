import React from "react";
import { Document } from "react-pdf";
import { Page } from "react-pdf";
import "../../assets/Resume_Edyta_Radomska.pdf";
import "../App.css";

const Resume = ({ pdf }) => {
  return (
    <Document file={require("../../assets/Resume_Edyta_Radomska.pdf")}>
      <Page pageNumber={2} />
    </Document>
  );
};

export default Resume;

// options={{ workerSrc: pdf.worker.js }}
