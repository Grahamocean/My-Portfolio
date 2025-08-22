import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="My Prefferred Tech Stack"
          sub="🛠️ Technologies I Work With"
        />

        <div className="tech-grid relative ">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-s-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
