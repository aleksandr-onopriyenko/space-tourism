import { FC } from "react";

interface Props {
  className: string;
  image: string;
}

export const Image: FC<Props> = ({ className, image }) => {
  return (
    <div className={className}>
      <img src={image} alt={className} />
    </div>
  );
};
