import React from "react";
import { Container } from "react-bootstrap";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaLocationArrow,
  FaMailchimp,
} from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer text-center ">
      <Container>
        <div className="container p-4">
          <section className="mb-4">
            <a className="btn  m-1 instagram" href="#!" role="button">
              <FaInstagramSquare />
            </a>

            <a
              className="btn  btn-floating m-1 linkedin"
              href="#!"
              role="button"
            >
              <FaLinkedin />
            </a>
            <a className="btn  btn-floating m-1 github" href="#!" role="button">
              <FaGithubSquare />
            </a>
          </section>

          <div className=" row mb-4 d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className=" mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <FaLocationArrow />
                    <a href="#!">44 Donald ave, Moncton NB, Canada</a>
                  </li>
                  <li>
                    <FaMailchimp />
                    <a href="#!">esd3023@umoncton.ca</a>
                  </li>
                  <li>
                    <BsFillTelephoneInboundFill />
                    <a href="#!">(506) 227-5388</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <p>Saliou Diop</p>
              <p>Software Developer</p>
              {/* Download my resume */}
              <button className="btn btn-danger">
                <a className="text-white" href="../../saliou.pdf" download>
                  {" "}
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          © 2022 Copyright <a href="#home">Saliou Diop</a>
        </div>
      </Container>
    </div>
  );
}
