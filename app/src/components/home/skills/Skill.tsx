import React from "react";
import { SkillInterface } from "./types";

const Skill: React.FC<{ name: string; length_of_experience: string }> = ({
  name,
  length_of_experience,
}: SkillInterface) => {
  return (
    <div className="skills__item">
      <h2>{name}</h2>
      <p>{length_of_experience}</p>
    </div>
  );
};

export default Skill;
