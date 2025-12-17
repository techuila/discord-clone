import { Outlet } from "react-router";
import { AppLayout } from "../../components/layout/app-layout";

export const ChannelsRoot = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
