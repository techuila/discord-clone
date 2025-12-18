import { Outlet } from "react-router";
import { AppLayout } from "../../components/layout/app-layout";
import { Sidebar } from "../../widgets/sidebar/sidebar";

export const HomeRoot = () => {
  return (
    <AppLayout>
      <Sidebar />
      <Outlet />
    </AppLayout>
  );
};
