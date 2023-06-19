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
          <h1>olivercadman</h1>
        </li>
        <li className="link__list-icon">
          <GithubIcon />
        </li>
        <li className="link__list-icon">
          <LinkedInIcon />
        </li>
        <li className="link__list-icon">
          <TwitterIcon />
        </li>
      </ul>
    </div>
  );
};

export default Links;
