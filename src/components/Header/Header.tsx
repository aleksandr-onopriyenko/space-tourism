import { FC } from "react";

import "./style.scss";
import { Logo } from "@components/UI";
import { Navigation } from "@components/Navigation";

export const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <div className="separate" />
      <Navigation />
    </header>
  );
};
