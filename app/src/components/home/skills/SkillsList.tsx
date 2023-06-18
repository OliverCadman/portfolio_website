import React from "react";
import { SkillInterface } from "./types";
import Skill from "./Skill";

const SkillsList = () => {
  const skills: SkillInterface[] = [
    {
      name: "HTML",
      length_of_experience: "2.5 Years Experience",
    },
    {
      name: "CSS",
      length_of_experience: "2.5 Years Experience",
    },
    {
      name: "JavaScript",
      length_of_experience: "2.5 Years Experience",
    },
    {
      name: "React",
      length_of_experience: "2.5 Years Experience",
    },
    {
      name: "Python",
      length_of_experience: "2 Years Experience",
    },
    {
      name: "Django",
      length_of_experience: "2 Years Experience",
    },
  ];

  return (
    <section className="section skills__container">
      {skills.map((skill, idx) => {
        const { name, length_of_experience } = skill;
        return (
          <Skill
            key={idx}
            name={name}
            length_of_experience={length_of_experience}
          />
        );
      })}
    </section>
  );
};

export default SkillsList;
