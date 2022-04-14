import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const HomeView: React.FC = (): JSX.Element => {
  return (
    <header>
      <Logo />
      {/* <img src={require("assets/shared/logo.svg").default} alt="mySvgImage" /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">00 Home</Link>
          </li>
          <li>
            <Link to="/destination">01 Destination</Link>
          </li>
          <li>
            <Link to="/crew">02 Crew</Link>
          </li>
          <li>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeView;
