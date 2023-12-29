"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
        <li>ReactNative</li>
        <li>Next.js</li>
        <li>Python</li>
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
          King Mongkut's University of Technology Thonburi (KMUTT)
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
    <section className="">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="aboutPicture"
          src="/image/MarkWithNamtan.jpg"
          width={300}
          height={300}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            veniam deleniti nulla. Atque unde voluptatibus, officia iure quod
            ex, maxime sint pariatur dicta doloribus delectus nemo eum fugiat
            quis quo.
          </p>
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
    </section>
  );
};

export default AboutSection;
