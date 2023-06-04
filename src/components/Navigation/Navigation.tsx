import { FC } from "react";

import { Link, BurgerMenu } from "@components/UI";
import { useIsMobile, useBurgerMenu } from "@hooks";
import { CREW, HOME, TECHNOLOGY, DESTINATION } from "@constants";

import "./style.scss";

export const Navigation: FC = () => {
  const isMobile = useIsMobile();
  const { handleToggle, isOpen } = useBurgerMenu();

  if (isMobile) {
    return (
      <BurgerMenu isOpen={isOpen} toggleMenu={handleToggle}>
        <Link link="/" state={HOME} onClick={handleToggle(false)}>
          <b>00</b> Home
        </Link>
        <Link
          link="destination"
          state={DESTINATION}
          onClick={handleToggle(false)}
        >
          <b>01</b> Destination
        </Link>
        <Link link="crew" state={CREW} onClick={handleToggle(false)}>
          <b>02</b> Crew
        </Link>
        <Link
          link="technology"
          state={TECHNOLOGY}
          onClick={handleToggle(false)}
        >
          <b>03</b> Technology
        </Link>
      </BurgerMenu>
    );
  }

  return (
    <nav className="navigation">
      <Link link="/" state={HOME}>
        <b>00</b> Home
      </Link>
      <Link link="destination" state={DESTINATION}>
        <b>01</b> Destination
      </Link>
      <Link link="crew" state={CREW}>
        <b>02</b> Crew
      </Link>
      <Link link="technology" state={TECHNOLOGY}>
        <b>03</b> Technology
      </Link>
    </nav>
  );
};
