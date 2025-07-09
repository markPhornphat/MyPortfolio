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
    tag: ["All", "Mobile"],
    imageUrl: "/image/LearningMate.png",
    gitUrl: "https://github.com/LonebirdRamin/LearningMate",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Online Content Work Tracking",
    description: "Project Management Software for video content",
    tag: ["All", "Web"],
    imageUrl: "/image/OnlineContentWorkTracking.png",
    gitUrl: "https://github.com/markPhornphat/OnlineWorkTracking",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Fish Feeder",
    description:
      "Automated fish feeding, temperature monitoring, and real-time graph visualization," +
      "all accessible and controlled via your mobile phone.",
    tag: ["All", "Hardware"],
    imageUrl: "/image/fishFeeder.jpg",
    gitUrl: "https://github.com/markPhornphat/fishFeeder",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ProjectPrediction",
    description:
      "Predictive model that assesses the likelihood of success for Kickstarter campaigns by analyzing project details.",
    tag: ["All", "Data"],
    imageUrl: "/image/ProjectPrediction.png",
    gitUrl: "https://github.com/markPhornphat/ProjectPrediction",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Store Management System",
    description:
      "The store management application that efficiently visualizes analytics data through dynamic graphs.",
    tag: ["All", "Web"],
    imageUrl: "/image/StoreManagementSystem.png",
    gitUrl: "https://github.com/markPhornphat",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Digital Clock",
    description:
      "A digital clock with countdown, alarm, and stopwatch functionalities was created on an AMDArtix 7 board. The code, developed using Verilog language, encompasses both the functionality and features of the clock.",
    tag: ["All", "Hardware"],
    imageUrl: "/image/DigitalClock.png",
    gitUrl: "https://github.com/markPhornphat",
    previewUrl: "/image/DigitalClock.png",
  },
  {
    id: 7,
    title: "Businage",
    description:
      "A web-based storage management system designed for SMEs to replace paper-based tracking with a digital solution. It helps reduce human error in audits and improves inventory traceability. The tech stack includes Next.js for the frontend, Node.js and Express for the backend, and Supabase as the database. I focused on the frontend, where I built the product input form and a dynamic product list table for easy inventory management.",
    tag: ["All", "Web"],
    imageUrl: "/image/businage.png",
    gitUrl: "https://github.com/greennyumbs/Businage",
    previewUrl: "/image/businage.png",
  },
  {
    id: 8,
    title: "P&ID Detector",
    description:
      "A dynamic computer vision system to detect and classify instruments from variously sized P&ID PDF files, enabling accurate cost estimation and inventory counting. Built a user-friendly web application with React and Flask, integrating a compressed model for efficient deployment. The system was deployed using AWS Beanstalk and Elastic EC2 with automated CI/CD pipelines to support engineering teams.",
    tag: ["All", "Web", "Data"],
    imageUrl: "/image/scgc.png",
    gitUrl: "https://github.com/markPhornphat",
    previewUrl: "/image/scgc.png",
  },
  {
    id: 9,
    title: "Eureka vision",
    description:
      "A web application to visualize real-time analytics from smart CCTV systems, enhancing operations and security at One Bangkok and Asiatique malls. Managed the entire software development life cycle including requirement gathering, sprint planning, development, testing, and deployment to a Linux server using containerization. Automated ELT processes by scheduling data ingestion scripts and storing data in a custom-built database..",
    tag: ["All", "Web"],
    imageUrl: "/image/tcct.png",
    gitUrl: "https://github.com/markPhornphat",
    previewUrl: "/image/tcct.png",
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
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
      className="w-full min-h-screen flex items-center justify-center scroll-mt-32"
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
          <ProjectTag
            onClick={handleTabChange}
            name="Data"
            isSelected={tag === "Data"}
          />
          <ProjectTag
            onClick={handleTabChange}
            name="Hardware"
            isSelected={tag === "Hardware"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-4 gap-8 md:gap-12 py-6">
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
                imgUrl={project.imageUrl}
                gitUrl={project.gitUrl}
                previewUrl={project.imageUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
