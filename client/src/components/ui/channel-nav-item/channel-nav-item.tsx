import { PropsWithChildren } from "react";

export const ChannelNavItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center relative">
      <div className="w-[4px] h-[40px] absolute left-[0] bg-[#FFFFFF] rounded-e-[4px]"></div>
      <div className="w-[40px] h-[40px] bg-[#35353A] rounded-[12px]">
        {children}
      </div>
    </div>
  );
};
