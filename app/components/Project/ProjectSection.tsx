"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "LearningMate",
    description: "Make university student live better",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Online Content Work Tracking",
    description: "Project Management Software for video content",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  // const [selected, isSelected] = useState(false);

  const handleTabChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section>
      <div>
        <h2 className="text-4xl text-center font-bold mb-4">My Projects</h2>
        <div className="flex flex-row justify-center items-center gap-2">
          <ProjectTag
            onClick={handleTabChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTabChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTabChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl="/image/markProfilePic.jpg"
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
