import React from "react";

const Project: React.FC<{
  title: string;
  thumbnailLarge: string;
  thumbnailSmall: string;
  technologies: string[];
}> = ({ title, thumbnailLarge, thumbnailSmall, technologies }) => {
  return (
    <article className="project-list__project">
      <div className="project-list__img-wrapper">
        <div className="project-list__project--hover">
          <div className="project-list__links">
            <ul>
              <li>
                <a href="#" className="offset-colored-underline">
                  View Project
                </a>
              </li>
              <li>
                <a href="#" className="offset-colored-underline">
                  View Code
                </a>
              </li>
            </ul>
          </div>
        </div>
        <picture className="project-list__img">
          <source media="(min-width: 768px)" srcSet={thumbnailLarge} />
          <img
            src={thumbnailSmall}
            alt="Screenshot of portfolio project."
            className="project-list__img"
          />
        </picture>
      </div>
      <h2>{title}</h2>
      <div className="project-list__technologies">
        <ul>
          {technologies.map((technology, index) => {
            return <li key={index}>{technology}</li>;
          })}
        </ul>
      </div>
      <div className="project-list__links md">
        <ul>
          <li>
            <a href="#" className="offset-colored-underline">
              View Project
            </a>
          </li>
          <li>
            <a href="#" className="offset-colored-underline">
              View Code
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Project;
