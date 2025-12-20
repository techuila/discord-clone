import { useEffect } from "react";
import { useAppStore } from "../../../common/store/useAppStore";
import { useLocation } from "react-router";
import { path } from "../../../common/config/path";

export const LocationListener = () => {
  const location = useLocation();
  const setTopBarTitle = useAppStore((state) => state.setTopBarTitle);

  useEffect(() => {
    switch (location.pathname) {
      case path.channels.friends.getHref(): {
        setTopBarTitle("Friends");
        break;
      }
      default: {
        console.warn("No title set for this path");
      }
    }
  }, [location]);

  return null;
};
