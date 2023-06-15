import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./generatedResume2.css";
import { Button, Grid } from "@mui/material";

const Resume = (props) => {
  const resumeRef = useRef(null);

  const handlePrint = () => {
    const resumeContainer = resumeRef.current;
    const resumeWidth = 210; // Width in mm (A4 width)
    const resumeHeight = 297; // Height in mm (A4 height)

    html2canvas(resumeContainer, {
      scale: 1,
    }).then((canvas) => {
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
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="resume-container">
      <Button className="button" onClick={handlePrint}>
        Print
      </Button>
      <div className="resume" ref={resumeRef}>
        <div className="header">
          <h1 className="name">
            {props.data.fname} {props.data.lname}
          </h1>
          <div className="contact-info">
            <div className="contact-item">
              <span>{props.data.email}</span>
            </div>
            <div className="contact-item">
              <span>{props.data.phone}</span>
            </div>
            <div className="contact-item">
              <span>{props.data.location}</span>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Education</h2>
          </div>
          {props.data.education.map((course) => (
            <div className="section-content">
              <Grid container>
                <Grid item xs={8}>
                  {course.institute}
                </Grid>
                <Grid sx={{ textAlign: "right" }} xs={4}>
                  {course.startDate} - {course.endDate}
                </Grid>
                <Grid xs={6} sx={{ paddingTop: "10px" }}>
                  {course.degree} {course.grade}
                </Grid>
                <Grid xs={6}></Grid>
              </Grid>
            </div>
          ))}
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Projects</h2>
          </div>
          {props.data.projects.map((project) => (
            <div className="section-content">
              <Grid container>
                <Grid item xs={8}>
                  <div>
                    {project.title} | {project.stack}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="project-date">
                    {" "}
                    {project.startDate}-{project.endDate}
                  </div>
                </Grid>
              </Grid>
              <div className="project-content">{project.detail}</div>
            </div>
          ))}
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Achievements</h2>
          </div>
          <div className="section-content">
            <ul>
              {props.data.achievements.map((achievement) => (
                <li>{achievement.value}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Coursework</h2>
          </div>
          <div className="section-content">
            <ul>
              <Grid container>
                {props.data.courseworks.map((coursework) => (
                  <Grid item xs={6}>
                    <li>{coursework.value}</li>
                  </Grid>
                ))}
              </Grid>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
