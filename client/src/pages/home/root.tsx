import { Outlet } from "react-router";
import { AppLayout } from "../../components/layout/app-layout";
import { Sidebar } from "../../widgets/sidebar/sidebar";
import { LocationListener } from "../../features/location-listener/components/location-listener";

export const HomeRoot = () => {
  return (
    <AppLayout>
      <LocationListener />
      <Sidebar />
      <div className="border-1 border-solid border-[#393A3F] bg-[#323339] grow">
        <Outlet />
      </div>
    </AppLayout>
  );
};
