"use client";
import { House } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import HorizonStrip from "../utils/HorizonStrip";
import Link from "next/link";
import { headers } from "next/headers";
import { usePathname } from "next/navigation";
import {
  Article,
  PencilSimpleLine,
  ProjectorScreenChart,
  UserRectangle,
} from "@phosphor-icons/react";

const sideBarList = [
  {
    title: "Home",
    icon: <House size={22} />,
    href: "/admin/home",
  },
  {
    title: "About",
    icon: <Article size={22} />,
    href: "/admin/about",
  },
  {
    title: "Skills",
    icon: <PencilSimpleLine size={22} />,
    href: "/admin/skills",
  },
  {
    title: "Projects",
    icon: <ProjectorScreenChart size={22} />,
    href: "/admin/projects",
  },
  {
    title: "Contact",
    icon: <UserRectangle size={22} />,
    href: "/admin/contact",
  },
];

const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col items-center h-screen p-4 gap-5">
      {/* TITLE */}
      <div className="text-xl font-semibold">Admin menu</div>
      <HorizonStrip />
      {/* List */}
      <div className="flex flex-col gap-5">
        {sideBarList.map((li) => (
          <Link
            href={li.href}
            key={`${li.title}_${li.href}`}
            className={`flex w-auto pl-5 items-center rounded-2xl py-3 px-4 gap-2 hover:opacity-70 ${
              `${pathName}` === li.href ? "bg-slate-400" : "bg-slate-200"
            }`}
          >
            <div className="rounded-md bg-white px-1 py-1">{li.icon}</div>
            <div className="hidden md:block">{li.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
