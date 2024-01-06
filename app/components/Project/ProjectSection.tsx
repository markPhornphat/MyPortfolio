"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LearningMate",
    description: "Make university student live better",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LonebirdRamin/LearningMate",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Online Content Work Tracking",
    description: "Project Management Software for video content",
    tag: ["Web"],
    gitUrl: "https://github.com/markPhornphat/OnlineWorkTracking",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //Come to view set to true
  // const [selected, isSelected] = useState(false);

  const handleTabChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <div>
        <h2 className="text-4xl xl:text-5xl xl:mb-10 text-center font-bold mb-4">
          My Projects
        </h2>
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
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 py-6">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl="/image/markProfilePic.jpg"
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
