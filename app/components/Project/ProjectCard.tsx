import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProp {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProp) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group mt-4"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 h-full w-full bg-slate-600 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {/* Github link */}
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-slate-300 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-slate-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {/* Preview link */}
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-slate-300 hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-slate-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
