import React from "react";

interface ProjectTagProp {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProp> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "text-black border-black"
    : "text-slate-500 border-slate-500 hover:border-black hover:text-black";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 py-2 px-5 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
