import React, { useRef } from "react";
import "./generatedResume.css";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
function GeneratedResume(props) {
  const resumeRef = useRef(null);
  const downloadPdfDocument = (rootElementId) => {
    const resumeContainer = resumeRef.current;
    const resumeWidth = 210;
    const resumeHeight = 297;

    html2canvas(resumeContainer, {
      scale: 1,
    }).then((canvas) => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const ratio = resumeWidth / canvasWidth;
      const canvasData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const offsetX = (pdfWidth - resumeWidth) / 2;
      const offsetY = (pdfHeight - resumeHeight) / 2;

      pdf.addImage(
        canvasData,
        "PNG",
        offsetX,
        offsetY,
        resumeWidth,
        resumeHeight
      );
      pdf.save("download.pdf");
    });
  };
  return (
    <div>
      <div className="resume" id="download" ref={resumeRef}>
        <h1>John Doe</h1>
        <div className="contact-info">
          <div>
            <strong>Email:</strong> john.doe@example.com
          </div>
          <div>
            <strong>Phone:</strong> (123) 456-7890
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Summary</h2>
          </div>
          <div className="section-content">
            <p>
              Results-oriented professional with 5 years of experience in web
              development. Skilled in HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Education</h2>
          </div>
          <div className="section-content">
            <ul>
              <li>Bachelor of Science in Computer Science</li>
              <li>University of Example</li>
              <li>Graduated May 2016</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Projects</h2>
          </div>
          <div className="section-content">
            <ul>
              <li>Personal Portfolio Website</li>
              <li>E-commerce Web Application</li>
              <li>Task Management Mobile App</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Achievements</h2>
          </div>
          <div className="section-content">
            <ul>
              <li>Received Employee of the Month Award</li>
              <li>Published article on Web Development in Tech Magazine</li>
              <li>Won 1st place in Hackathon</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Coursework</h2>
          </div>
          <div className="section-content">
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Database Management Systems</li>
              <li>Software Engineering Principles</li>
            </ul>
          </div>
        </div>
      </div>

      <Button
        className="print-button"
        onClick={() => {
          downloadPdfDocument("download");
        }}
      >
        Print
      </Button>
    </div>
  );
}

export default GeneratedResume;
