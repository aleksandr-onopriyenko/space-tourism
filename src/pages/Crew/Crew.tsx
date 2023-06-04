import { FC } from "react";
import { useLoaderData } from "react-router-dom";

import { useTabs } from "@hooks";
import { Description, Image, Tabs, Section } from "@components/UI";

import "./style.scss";

interface CrewData {
  name: string;
  role: string;
  bio: string;
  images: {
    png: string;
    webp: string;
  };
}

export const Crew: FC = () => {
  const data = useLoaderData() as CrewData[];
  const { activeClass, activeTab, handleTabClick, tabs } =
    useTabs<CrewData>(data);

  return (
    <Section sectionClass="crew" index="02" title="MEET YOUR CREW">
      <div className={`crew-content ${activeClass}`}>
        <Description
          title={activeTab.name}
          subtitle={activeTab.role}
          description={activeTab.bio}
          className="crew-content-info"
        />
        <Image
          className="crew-content-image"
          image={data.find((d) => d.name === activeTab.name)!.images.webp}
        />
      </div>

      <Tabs
        tabs={tabs}
        variant="circle"
        className="crew-actions"
        onClick={handleTabClick}
        activeTabName={activeTab.name}
      />
    </Section>
  );
};
