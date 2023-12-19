import React from "react";

interface TabButtonProp {
  active: boolean;
  selectTab: () => void;
  children: string;
}

const TabButton: React.FC<TabButtonProp> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-slate-400 border-b border-slate-400"
    : "text-black";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-slate-400 hover:border-b-slate-400 ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
