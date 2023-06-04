import { FC, ReactNode } from "react";

import "./style.scss";
import { Typoghraphy } from "../Typoghraphy";

interface Props {
  children: ReactNode;
  index: string;
  title: string;
  sectionClass: string;
}

export const Section: FC<Props> = ({
  children,
  index,
  title,
  sectionClass,
}) => {
  return (
    <section className={`section ${sectionClass}`}>
      <header className="section-header">
        <Typoghraphy variant="h1">
          <b>{index}. </b> {title}
        </Typoghraphy>
      </header>
      {children}
    </section>
  );
};
