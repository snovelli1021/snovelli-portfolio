import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./GISProjects.css";
import data from "./GISprjData.json";

const GISProjects = () => {
  return (
    // Cards render with data and buttons link out to GitHub repo's for UW Coding Bootcamp projects .
    <div>
      <Row xs={1} className="g-4">
        {data.map(({ id, prjPhoto, prjTitle, prjText, prjUrl }) => (
          <Card key={id} className="prjCard" style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              className="prjPhoto"
              alt="Screenshot of website or application"
              src={prjPhoto}
            />
            <Card.Body>
              <Card.Title>{prjTitle}</Card.Title>
              <Card.Text>{prjText}</Card.Text>

              <a
                href={prjUrl}
                target="_blank"
                alt="Link to live StoryMap on the City of Everett's public facing website."
              >
                <button
                  type="button"
                  className="btn btn-primaryGIS"
                  fdprocessedid="f0w5kk"
                >
                  Go!
                </button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default GISProjects;
