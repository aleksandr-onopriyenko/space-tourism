import { FC } from "react";

interface Props {
  variant: "numeric" | "circle" | "tab";
  isActive: boolean;
  tab: string;
  index?: number;
  onClick: () => void;
}

export const Tab: FC<Props> = ({ tab, isActive, onClick, variant, index }) => {
  return (
    <div className={`tab tab--${variant}`}>
      <button
        className={`${isActive ? "active" : ""} ${
          variant === "tab" ? "link" : ""
        }`}
        onClick={onClick}
        type="button"
      >
        {variant === "numeric" && index !== undefined
          ? index + 1
          : variant === "tab"
          ? tab
          : ""}
      </button>
    </div>
  );
};
