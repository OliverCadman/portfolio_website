import React from "react";
import { ReactComponent as LinkedInIcon } from "../../../assets/images/icon-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../assets/images/icon-github.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/icon-twitter.svg";

const Links: React.FC<{ classOne: string; classTwo: string }> = ({
  classOne,
  classTwo,
}) => {
  return (
    <div className={`section ${classOne}  ${classTwo}`}>
      <ul className="link__list">
        <li>
          <h1>adamkeyes</h1>
        </li>
        <li className="link__list-icon">
          <a href="#" aria-label="Github Link">
            <GithubIcon />
          </a>
        </li>
        <li className="link__list-icon">
          <a href="#" aria-label="LinkedIn Link">
            <LinkedInIcon />
          </a>
        </li>
        <li className="link__list-icon">
          <a href="#" aria-label="Twitter Link">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
