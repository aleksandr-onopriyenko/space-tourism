import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "@components/Header";
import { Background, Container } from "@components/UI";

export const Layout: FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Background bg={pathname.replace("/", "")}>
        <Container>
          <Outlet />
        </Container>
      </Background>
    </>
  );
};
