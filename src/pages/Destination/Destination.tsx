import { FC } from "react";
import { useLoaderData } from "react-router-dom";

import { useTabs } from "@hooks";
import { Typoghraphy, Image, Section, Tabs } from "@components/UI";

import "./style.scss";

interface LoadedDestinationData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export const Destination: FC = () => {
  const data = useLoaderData() as LoadedDestinationData[];
  const { tabs, activeClass, activeTab, handleTabClick } =
    useTabs<LoadedDestinationData>(data);

  return (
    <Section
      index="01"
      sectionClass="destination"
      title="PICK YOUR DESTINATION"
    >
      <Image
        className="destination-image"
        image={data.find((d) => d.name === activeTab.name)!.images.webp}
      />
      <div className="destination-content">
        <Tabs
          tabs={tabs}
          variant="tab"
          onClick={handleTabClick}
          activeTabName={activeTab.name}
          className="destination-content-tabs"
        />
        <div className={`destination-content-text ${activeClass}`}>
          <Typoghraphy variant="h2">{activeTab.name}</Typoghraphy>
          <Typoghraphy variant="p">{activeTab.description}</Typoghraphy>
          <div className="destination-content-meta">
            <div>
              <Typoghraphy variant="h3">AVG. DISTANCE</Typoghraphy>
              <Typoghraphy variant="span">{activeTab.distance}</Typoghraphy>
            </div>
            <div>
              <Typoghraphy variant="h3">EST. TRAVEL TIME</Typoghraphy>
              <Typoghraphy variant="span">{activeTab.travel}</Typoghraphy>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
