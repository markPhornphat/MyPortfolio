import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProp {
  active: boolean;
  selectTab: () => void;
  children: string;
}

const TabButton = ({ active, selectTab, children }: TabButtonProp) => {
  const buttonClasses = active ? "text-slate-500" : "text-black";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-slate-400 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-slate-400 mt-0.5"
      ></motion.div>
    </button>
  );
};

export default TabButton;
