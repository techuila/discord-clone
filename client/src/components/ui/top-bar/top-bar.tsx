type TopBarProps = {
  title: string;
};

export const TopBar = ({ title }: TopBarProps) => {
  return (
    <div className="w-full h-[32px] bg-red flex flex-row justify-center items-center">
      <span className="text-[14px]">{title}</span>
    </div>
  );
};
