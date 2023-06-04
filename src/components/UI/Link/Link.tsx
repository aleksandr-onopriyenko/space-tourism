import { FC, MouseEvent, ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.scss";
import { Typoghraphy } from "../Typoghraphy";

interface Props {
  link: string;
  children: ReactNode;
  state: any;
  onClick?: () => void;
}

export const Link: FC<Props> = ({ link, children, state, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick && onClick();
    navigate(link);
  };

  return (
    <div>
      <NavLink
        to={link}
        state={state}
        onClick={handleClick}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <Typoghraphy variant="span">{children}</Typoghraphy>
      </NavLink>
    </div>
  );
};
