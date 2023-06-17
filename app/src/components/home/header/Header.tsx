import React from "react";
import { ReactComponent as LinkedInIcon } from "../../../assets/images/icon-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../assets/images/icon-github.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/icon-twitter.svg";

function Header() {
  return (
    <header className="header header--positioned">
      <ul className="header__list">
        <li>
          <h1>olivercadman</h1>
        </li>
        <li className="header__list-icon">
          <GithubIcon />
        </li>
        <li className="header__list-icon">
          <LinkedInIcon />
        </li>
        <li className="header__list-icon">
          <TwitterIcon />
        </li>
      </ul>
    </header>
  );
}

export default Header;
