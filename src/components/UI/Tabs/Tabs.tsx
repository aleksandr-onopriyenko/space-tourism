import { FC } from "react";
import { Tab } from "./Tab";

interface Props {
  className: string;
  activeTabName: string;
  variant: "numeric" | "circle" | "tab";
  onClick: (tab: string) => () => void;
  tabs?: string[];
}

export const Tabs: FC<Props> = ({
  tabs,
  onClick,
  activeTabName,
  variant,
  className,
}) => {
  return (
    <div className={`tabs ${className}`}>
      {tabs && tabs.length ? (
        tabs.map((tab, index) => (
          <Tab
            key={tab}
            tab={tab}
            index={index}
            variant={variant}
            onClick={onClick(tab)}
            isActive={activeTabName === tab}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
