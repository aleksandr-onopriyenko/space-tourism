import { useState } from "react";

interface ReturnedValues {
  isOpen: boolean;
  handleToggle: (flag: boolean) => () => void;
}

export const useBurgerMenu = (): ReturnedValues => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (isClose: boolean) => () => setIsOpen(isClose);

  return { isOpen, handleToggle };
};
