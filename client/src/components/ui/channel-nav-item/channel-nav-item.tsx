import { PropsWithChildren } from "react";
import { motion } from "motion/react";

type ChannelNavItemProps = {
  icon?: React.ReactElement;
} & PropsWithChildren;

export const ChannelNavItem = ({ icon, children }: ChannelNavItemProps) => {
  return (
    <div className="flex justify-center relative">
      <div className="w-[4px] h-[40px] absolute left-[0] bg-[#FFFFFF] rounded-e-[4px]"></div>
      <motion.div
        className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center cursor-pointer"
        initial={{ backgroundColor: "#35353A" }}
        whileHover={{ backgroundColor: "#5865F1" }}
        transition={{ ease: "easeOut", duration: 0.15 }}
      >
        {icon ? <div className="w-[24px] h-[18px]">{icon}</div> : children}
      </motion.div>
    </div>
  );
};
