import { ChannelNavItem } from "../../components/ui/channel-nav-item/channel-nav-item";
import { AppIcon } from "../../components/ui/icons/app";

export const Sidebar = () => {
  return (
    <>
      <div className="w-[72px] h-full bg-transparent flex flex-col gap-[8px] align-items-stretch">
        <ChannelNavItem icon={<AppIcon />} />
      </div>
      <div className="w-[302px] h-full bg-transparent border-1 border-solid border-[#393A3F] rounded-tl-[12px]"></div>
    </>
  );
};
