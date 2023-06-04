import { FC, ReactNode } from "react";

import "./style.scss";

interface Props {
  children: ReactNode;
  bg?: string;
}

export const Background: FC<Props> = ({ children, bg }) => {
  return (
    <main id="main">
      <div className={bg ? `bg ${bg}` : "bg"}></div>
      {children}
    </main>
  );
};
