"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { animate, motion, useInView } from "framer-motion";

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
              3.73
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc">
        <li>CPE openhouse | 2022</li>
        <li>CPE Pre-Freshy | 2022</li>
        <li>Participant of Intania Case Competition | 2023</li>
        <li>Teaching Assistance of CPE101 | 2023</li>
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
