import React from "react";
import "./experience.css";
import { Col, Container, Row } from "react-bootstrap";

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
              <Col xs={12} md={4} className="experience-body-title">
                <div />
                <h4>Data Analyst intern</h4>
                <small>Greystone Energy Inc, Moncton</small>
                <div className="experience-body-description">
                  <p>
                    Worked with the operation manager to create dashboard in
                    Python and Power Bi to evaluate employees performance using
                    the company large Oracle database.
                  </p>
                  <p>
                    Built reports for the operation manager to understand the
                    data analysis steps, enabling him to take important
                    decisions based on performance.
                  </p>
                </div>
              </Col>

              <Col xs={12} md={4} className="experience-body-title">
                <div />
                <h4>AI Research Assistant</h4>
                <small>
                  Perception, Robotics and intelligent Machines (PRIME), U
                  Moncton
                </small>
                <div className="experience-body-description">
                  <p>
                    Worked with Professor Akhloufi and MSc students to create a
                    simulation tool for forest fires to help prevent
                    propagation.
                  </p>
                  <p>
                    Produced a 3D photorealistic model that can predict
                    effectively fire propagation from parameters such as wind
                    speed, humidity etc...
                  </p>
                  <p>
                    Used the Unity game engine, C# programming language and
                    state of the art deep learning techniques to build the
                    model.
                  </p>
                </div>
              </Col>

              <Col xs={12} md={4} className="experience-body-title">
                <div />
                <h4>C++ programming Tutor</h4>
                <small>Université de Moncton, Moncton</small>
                <div className="experience-body-description">
                  <p>
                    Worked closely with the professor and a few other computer
                    science students to assist junior and sophomore students
                    with C++ programming.
                  </p>
                  <p>
                    Successfully, analyzed and debugged code written by various
                    students and clarified the new concepts introduced in the
                    course.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
