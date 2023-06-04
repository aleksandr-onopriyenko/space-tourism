import { FC } from "react";
import { useLoaderData } from "react-router-dom";

import { useTabs } from "@hooks";
import { Section, Description, Tabs, Image } from "@components/UI";

import "./style.scss";

interface TechnologiesData {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export const Technology: FC = () => {
  const data = useLoaderData() as TechnologiesData[];
  const { activeClass, activeTab, handleTabClick, tabs } =
    useTabs<TechnologiesData>(data);

  return (
    <Section index="03" sectionClass="technologies" title="SPACE LAUNCH 101">
      <Tabs
        tabs={tabs}
        variant="numeric"
        onClick={handleTabClick}
        activeTabName={activeTab.name}
        className="technologies-actions"
      />
      <div className={`technologies-content ${activeClass}`}>
        <Description
          title={activeTab.name}
          description={activeTab.description}
          className="technologies-content-description"
        />
        <Image
          className="technologies-content-image"
          image={data.find((d) => d.name === activeTab.name)!.images.portrait}
        />
      </div>
    </Section>
  );
};
