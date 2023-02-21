import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./Projects.css";
import data from "./prjData.json";

const Projects = () => {
  return (
    // Need to style page and cards.

    <div>
      <h1>Projects</h1>
      <h3>Coding Bootcamp</h3>
      <Row xs={1} className="g-4">
        {data.map(({ id, prjPhoto, prjTitle, prjText, prjUrl }) => (
          <Card key={id} className="prjCard" style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={prjPhoto}
            />
            <Card.Body>
              <Card.Title>{prjTitle}</Card.Title>
              <Card.Text>{prjText}</Card.Text>
              <a
                href={prjUrl}
                target="_blank"
                alt="Link to project repository on GitHub."
              >
                <button className="prjButton"> GitHub Repository </button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </Row>
      {/* Need to add section for Work Examples.
      Need to style page and cards. */}
      <h3>ArcGIS Online</h3>
    </div>
  );
};

export default Projects;
