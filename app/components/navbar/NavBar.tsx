"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavbarList from "./NavbarList";

//This component used to show the navigation bar at the top

const navLinks = [
  {
    title: "About",
    path: "#/About",
  },
  {
    title: "Skills",
    path: "#/Skills",
  },
  {
    title: "Projects",
    path: "#/Projects",
  },
  {
    title: "Contact",
    path: "#/Contact",
  },
];

const NavBar = () => {
  const [navBarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-slate-50 border-b-gray-300">
      <div className="flex flex-wrap items-center justify-between mx-auto lg:p-6 px-4 py-3">
        <Link href={"/"} className="text-2xl md:text-4xl font-bold">
          Marklileo
        </Link>

        {/* Start- When the screen is small (on mobile) ==> Show the pages list in button */}
        <NavbarList navBarOpen={navBarOpen} setNavbarOpen={setNavbarOpen} />
        {/*End - Show page lists */}

        {/*Start - When the screen is large ==> Show the pages horizontally */}
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {/*End - Show page list on large screen size */}
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
