import { useEffect, useState } from "react";

export const useIsMobile = (): boolean => {
  const getIsMobile = () => window.innerWidth <= 768;
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
};
