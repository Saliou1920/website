import React from "react";
import "./experience.css";
import { Col, Container, Row } from "react-bootstrap";
import experience from "./experience.js";
export default function Experience() {
  return (
    <div className="experience" id="experience">
      <Container>
        <div className="experience-header">
          <div className="experience-header-title">
            <img src="../../greystone.jpeg" alt="greystone" />
            <span>Greystone Energy</span>
          </div>
          <div className="experience-header-title">
            <img src="../../umoncton.png" alt="umoncton" />
            <span>Universite de Moncton</span>
          </div>
          <div className="experience-header-title">
            <img src="../../prime.jpeg" alt="prime" />
            <span>Prime</span>
          </div>
        </div>

        <div className="experience-body">
          <div className="experience-body-title">
            <div />
            <h2>Experience</h2>
          </div>

          <div className="experience-body-content">
            <Row>
              {experience.map((experience, index) => (
                <Col xs={12} md={6} lg={4} className="experience-body-title">
                  <div />
                  <h4>{experience.title}</h4>
                  <small>{experience.company}</small>
                  <div className="experience-body-description">
                    <p>{experience.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
