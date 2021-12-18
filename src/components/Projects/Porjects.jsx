import React from "react";

export default function Porjects() {
  const projects = [
    {
      name: "Greystone Energy",
      description:
        "Worked with the operation manager to create dashboard in Python and Power Bi to evaluate employees performance using the company large Oracle database.",
      link: "https://www.greystoneenergy.com/",
      image: "greystone.jpeg",
    },
    {
      name: "Universite de Moncton",
      description:
        "Built reports for the operation manager to understand the data analysis steps, enabling him to take important decisions based on performance.",
      link: "https://www.umoncton.ca/",
      image: "umoncton.png",
    },
    {
      name: "Prime",
      description:
        "Worked with Professor Akhloufi and MSc students to create a simulation tool for forest fires to help prevent forest fires.",
      link: "https://www.prime.ca/",
      image: "prime.jpeg",
    },
  ];

  return projects.map((project, id) => (
    <div className="project" key={id}>
      <div className="project-header">
        <div className="project-header-title">
          <img src={`../../images/${project.image}`} alt={project.name} />
          <span>{project.name}</span>
        </div>
      </div>

      <div className="project-body">
        <div className="project-body-title">
          <div />
          <h2>Project</h2>
        </div>

        <div className="project-body-content">
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button>Visit Website</button>
          </a>
        </div>
      </div>
    </div>
  ));
}
