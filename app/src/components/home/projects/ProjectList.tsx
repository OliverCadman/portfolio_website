import React from "react";
import Project from "./Project";
import projects from "./projects";

const ProjectList = () => {
  return (
    <section className="section project-list__container">
      {projects.map((project, index) => {
        const { title, thumbnail_lg, thumbnail_sm, technologies } = project;
        return (
          <Project
            key={index}
            title={title}
            thumbnailLarge={thumbnail_lg}
            thumbnailSmall={thumbnail_sm}
            technologies={technologies}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
