import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
//This component used to show the button on mobile screen size
interface NavbarListProp {
  navBarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarList: React.FC<NavbarListProp> = ({
  navBarOpen,
  setNavbarOpen,
}) => {
  return (
    // Navigation bar on mobile ==> When screen size is medium ==> show button
    <div className="mobile-menu block md:hidden">
      {!navBarOpen ? (
        <button
          onClick={() => setNavbarOpen(true)}
          className="flex items-center px-3 py-2 border border-black rounded text-black hover:text-slate-400 hover:border-slate-400"
        >
          {" "}
          <Bars3Icon className="h-5 w-3" />
        </button>
      ) : (
        <button
          onClick={() => setNavbarOpen(false)}
          className="flex items-center px-3 py-2 border border-black rounded text-black hover:text-slate-400 hover:border-slate-400"
        >
          {" "}
          <XMarkIcon className="h-5 w-3" />
        </button>
      )}
    </div>
  );
};

export default NavbarList;
