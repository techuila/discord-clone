import type { PropsWithChildren } from "react";
import { Head } from "../seo/head";
import { TopBar } from "../ui/top-bar/top-bar";
import { useAppStore } from "../../common/store/useAppStore";

export const AppLayout = ({ children }: PropsWithChildren) => {
  const title = useAppStore((state) => state.title);

  return (
    <>
      <Head />
      <div className="flex flex-col w-full h-full">
        <TopBar title={title} />
        <div className="w-full flex flex-row h-full">{children}</div>
      </div>
    </>
  );
};
