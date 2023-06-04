import { FC } from "react";

import "./style.scss";

import { Typoghraphy } from "@components/UI";
import { Destination } from "@constants/destination";
import { Link, useLoaderData } from "react-router-dom";

interface LoadedHomeData {
  title: string;
  subtitle: string;
  description: string;
}

export const Home: FC = () => {
  const { description, subtitle, title } = useLoaderData() as LoadedHomeData;

  return (
    <div className="home">
      <div className="home-info">
        <Typoghraphy variant="h1">{title}</Typoghraphy>
        <Typoghraphy variant="h2">{subtitle}</Typoghraphy>
        <Typoghraphy variant="p">{description}</Typoghraphy>
      </div>
      <div className="home-action">
        <Link
          to="/destination"
          state={Destination}
          className="home-action__explore"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};
