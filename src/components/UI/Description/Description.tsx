import { FC } from "react";
import { Typoghraphy } from "@components/UI";

interface Props {
  title: string;
  className: string;
  description: string;
  subtitle?: string;
}

export const Description: FC<Props> = ({
  className,
  description,
  subtitle,
  title,
}) => {
  return (
    <div className={className}>
      <Typoghraphy variant="h2">
        {subtitle ? subtitle : "THE TERMINOLOGY..."}
      </Typoghraphy>
      <Typoghraphy variant="h3">{title}</Typoghraphy>
      <Typoghraphy variant="p">{description}</Typoghraphy>
    </div>
  );
};
