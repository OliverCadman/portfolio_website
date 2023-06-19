import { SkillInterface } from "./types";
import Skill from "./Skill";
import { ReactComponent as PatternRings } from "../../../assets/images/pattern-rings.svg";

const SkillsList = () => {
  const skills: SkillInterface[] = [
    {
      name: "HTML",
      length_of_experience: "2.5 Years Experience",
    },
    {
      name: "CSS/SASS",
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
    <section className="section">
      <PatternRings className="skills__rings" />
      <div className="skills__container">
        <ul className="skills__list">
          {skills.map((skill, idx) => {
            const { name, length_of_experience } = skill;
            return (
              <li key={idx}>
                <Skill
                  name={name}
                  length_of_experience={length_of_experience}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SkillsList;
