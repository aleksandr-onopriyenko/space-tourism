import { FC } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import logo from "@assets/images/shared/logo.svg";

export const Logo: FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
