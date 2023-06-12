import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./Figma.css";
import data from "./FigmaData.json";

const Figma = () => {
  return (
    // Cards render with data and buttons link out to Figma designs.
    <div>
      <Row xs={1} className="g-4">
        {data.map(({ id, prjPhoto, prjTitle, prjText, prjUrl }) => (
          <Card key={id} className="prjCard" style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              className="prjPhoto"
              alt="Screenshot of Figma design"
              src={prjPhoto}
            />
            <Card.Body>
              <Card.Title>{prjTitle}</Card.Title>
              <Card.Text>{prjText}</Card.Text>

              <a href={prjUrl} target="_blank" alt="Link to Figma designs">
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

export default Figma;
