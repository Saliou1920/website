import React from "react";
import { Container } from "react-bootstrap";
import "./education.css";
export default function Education() {
  return (
    <div className="education">
      <Container>
        <div className="education-title d-flex justify-content-between">
          <h2>Education</h2>

          <div className="education-content">
            <div className="education-content-item">
              <h2>
                <a
                  href="https://www.umoncton.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Université de Moncton
                </a>
              </h2>
              <h5>Bachelor of Science in Computer Science Co-op</h5>
              <h6>2018 - 2021</h6>

              <p>
                Université de Moncton is a public French-language university
                located in Edmundston, Moncton and Shippagan, New Brunswick,
                Canada.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
