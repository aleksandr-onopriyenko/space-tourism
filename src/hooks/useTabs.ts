import { useEffect, useState } from "react";

interface ReturnedValues<T> {
  tabs: string[];
  activeTab: T;
  activeClass: string;
  handleTabClick: (tab: string) => () => void;
}

export function useTabs<T>(data: (T & { name: string })[]): ReturnedValues<T> {
  const [tabs, setTabs] = useState<string[]>([]);
  const [activeClass, setActiveClass] = useState<string>("active");
  const [activeTab, setActiveTab] = useState<T>(data[0]);
  let timerId: string | number | NodeJS.Timeout | undefined;

  const handleTabClick = (tabName: string) => () => {
    setActiveClass(() => "");
    timerId = setTimeout(() => setActiveClass(() => "active"), 400);
    setActiveTab(() => data.find((tab) => tab.name === tabName)!);
  };

  useEffect(() => {
    setTabs(() => data.map((tab: { name: string }) => tab.name));

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return { tabs, activeTab, handleTabClick, activeClass };
}
