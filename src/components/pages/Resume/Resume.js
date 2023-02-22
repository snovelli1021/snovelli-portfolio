import React from "react";
import Card from "react-bootstrap/Card";
import "./Resume.css";

const Resume = () => {
  return (
    // Need to finalize resume and add downloadable versions.
    // Need to style page, and come up with text/images to fill white space.

    <div>
      <h1>Resume</h1>
      <Card className="resumeCard" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Resume</Card.Title>
          <Card.Text>Resume Text</Card.Text>
          <p>Click or tap below to download a copy</p>
          <div className="downloadIcons">
            <a href="./assets/NovelliResume.docx" download>
              <button varient="top" id="msWordBtn" alt="Microsoft Word Icon" />
            </a>
            <a href="./assets/NovelliResume.pdf" download>
              <button varient="top" id="adobeBtn" alt="Adobe PDF Icon" />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Resume;
