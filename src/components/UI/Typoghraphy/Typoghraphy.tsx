import { FC, ReactNode, createElement } from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: ReactNode;
}

export const Typoghraphy: FC<Props> = ({ variant, children }) => {
  const Component = createElement(variant, null, children);
  return Component;
};
