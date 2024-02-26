import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Some of my Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/old.png"
          title="Modern Portfolios"
          description="My First practice on frontend was doing portfolios and each time getting better"
        />
        <ProjectCard
          src="/old4.jpg"
          title="Breast Cancer Detector"
          description="The Breast Cancer Diagnosis model employs binary classification methodology along with a pre-defined dataset to determine the likelihood of an individual having breast cancer. Demonstrating an accuracy rate of 93%, this model serves as a robust tool for predicting the presence or absence of breast cancer in patients."
        />
        <ProjectCard
          src="/old3.png"
          title="Money Transfer"
          description="Facilitating seamless financial transactions and fund transfers among individuals, our platform integrates the services provided by telecommunication companies."
        />
      </div>
    </div>
  );
};

export default Projects;
