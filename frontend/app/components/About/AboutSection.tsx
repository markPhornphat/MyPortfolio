"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { animate, motion, useInView } from "framer-motion";

// ["I'm based in Bangkok, Thailand.",
//   "You can contact me at phornphat_mark@hotmail.com.",
//   "I'm practicing Fullstack Tools.",
//   "I'm interested in Coding, Hardware, Mathematics, Science, and Business."]
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>C Programming</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>ReactNativ</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>Arduino</li>
        <li>Figma</li>
        <li>Git</li>
        <li>Tailwind</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Educations",
    id: "educations",
    content: (
      <ul className="list-disc">
        <li>
          Suankularb Wittayalai Thonburi
          <ul className="list-disc pl-5">
            <li>
              <span className="font-semibold">GPAX: </span>
              3.61
            </li>
          </ul>
        </li>
        <li>
          King Mongkut&apos;s University of Technology Thonburi (KMUTT)
          <ul className="list-disc pl-5">
            <li>
              <span className="font-semibold">GPAX: </span>
              3.73 (First-Class Honors)
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Extracuricular activity",
    id: "Extracuricular activity",
    content: (
      <ul className="list-disc">
        <li>CPE openhouse | 2022</li>
        <li>CPE Pre-Freshy | 2022</li>
        <li>Participant of Intania Case Competition | 2023</li>
        <li>Teaching Assistance of CPE101 | 2023</li>
        <li>Green Innovation Award project competition by SCG | 2024</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc">
        <li>
          <span className="font-bold">SCGC Internship&nbsp;</span>
          (June - July 2024)
          <ul className="list-disc ml-6">
            <li>
              <span className="font-bold">Role:</span> Computer Engineer
              Internship
            </li>
            <li>
              <span className="font-bold">Details:</span>
              <ul className="list-[circle] ml-6">
                <li>
                  <span className="font-semibold">Developed</span> a dynamic
                  computer vision system to detect and classify instruments from
                  single or multiple P&ID PDF files of various sizes.
                </li>
                <li>
                  <span className="font-semibold">Extracted</span> instrument
                  data to estimate costs and count quantities, helping{" "}
                  <span className="font-semibold">reduce time&nbsp;</span>
                  and&nbsp;<span className="font-semibold">
                    human errors
                  </span>{" "}
                  in engineering workflows.
                </li>
                <li>
                  Built a user-friendly{" "}
                  <span className="font-semibold">web application</span> using
                  React and Flask to make the system easily accessible.
                </li>
                <li>
                  <span className="font-semibold">Compressed</span> and{" "}
                  <span className="font-semibold">integrated</span> the model
                  for efficient deployment in a web environment.
                </li>
                <li>
                  <span className="font-semibold">Deployed</span> the system
                  using AWS Beanstalk and Elastic EC2 with an automated CI/CD
                  pipeline.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">TCC Technology&nbsp;</span>
          (August 2024 - May 2025)
          <ul className="list-disc ml-6">
            <li>
              <span className="font-bold">Role:</span> IoT Engineer Intern
            </li>
            <li>
              <span className="font-bold">Details:</span>
              <ul className="list-[circle] ml-6">
                <li>
                  <span className="font-semibold">Implemented</span> a web
                  application to visualize real-time analytics from smart CCTV
                  systems, supporting operations and security at{" "}
                  <span className="font-semibold">One Bangkok</span> and{" "}
                  <span className="font-semibold">Asiatique</span> malls.
                </li>
                <li>
                  <span className="font-semibold">Covered</span> the entire
                  SDLC: gathering user requirements, planning sprints,
                  developing, testing, and deploying the system to a Linux
                  server using containerization.
                </li>
                <li>
                  <span className="font-semibold">Performed ELT</span> by
                  scheduling data ingestion scripts and storing results in a
                  custom-built database.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isStart, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="w-full min-h-screen flex items-center scroll-mt-10"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 xl:px-16 ">
        <Image
          alt="aboutPicture"
          src="/image/MarkWithNamtan.jpg"
          width={500}
          height={500}
        />
        <div className="md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Currently a fourth-year student studying at the King Mongkut’s
            University of Technology Thonburi (KMUTT), majoring in computer
            engineering.
          </p>
          <ul className="list-disc ml-10">
            <li>I&apos;m based in Bangkok, Thailand</li>
            <li>You can contact me at phornphat_mark@hotmail.com</li>
            <li>I&apos;m practicing Fullstack Tools</li>
            <li>
              I&apos;m interested in Coding, Hardware, Mathematics, Science, and
              Business.
            </li>
          </ul>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Educations")}
              active={tab === "Educations"}
            >
              Educations
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Extracuricular activity")}
              active={tab === "Extracuricular activity"}
            >
              Extracuricular activity
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experiences")}
              active={tab === "Experiences"}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-6">
            {TAB_DATA.find((t) => t.title === tab)?.content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
