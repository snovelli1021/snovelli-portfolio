import React from "react";
import Card from "react-bootstrap/Card";
import "./Resume.css";

const Resume = () => {
  return (
    // Resume section shows some qualifications, and provides downloadable versions of my resume.

    <div className="resumeDiv">
      <Card className="resumeCard" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Text id="cardText">
            HTML | CSS | JavaScript | jQuery | MySQL | MongoDB | Node.js |
            Express.js | React.js | Bootstrap | Git and GitHub | Heroku
          </Card.Text>
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
