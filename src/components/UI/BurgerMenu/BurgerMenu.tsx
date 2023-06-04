import { FC, ReactNode } from "react";

import "./style.scss";

interface Props {
  bg?: string;
  isOpen: boolean;
  children: ReactNode;
  toggleMenu: (flag: boolean) => () => void;
}

export const BurgerMenu: FC<Props> = ({ children, isOpen, toggleMenu }) => {
  return (
    <div className="burger-menu">
      <div className="burger-menu-trigger" onClick={toggleMenu(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`burger-menu-container navigation ${isOpen ? "active" : ""}`}
      >
        <div className="burger-menu-close">
          <button onClick={toggleMenu(false)}>
            <span></span>
            <span></span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
