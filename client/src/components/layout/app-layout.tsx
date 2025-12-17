import type { PropsWithChildren } from "react";
import { Sidebar } from "../ui/sidebar/sidebar";
import { Head } from "../seo/head";
import { TopBar } from "../ui/top-bar/top-bar";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head />
      <div className="flex flex-col w-full h-full">
        <TopBar />
        <div className="flex flex-row h-full">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};
