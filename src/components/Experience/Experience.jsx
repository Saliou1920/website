import React from "react";
import "./experience.css";
export default function Experience() {
  return (
    <div className="experience">
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
        <div className="experience-body-title"></div>
      </div>
    </div>
  );
}
