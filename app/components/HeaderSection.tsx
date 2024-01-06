import React from "react";
import Image from "next/image";
import AnimationComponent from "./AnimationComponent";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:px-40">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal justify-self-start font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#cebdaa] via-[#e0d0be] to-slate-500">
              Hello, I'm{" "}
            </span>
            <AnimationComponent />
          </h1>
          <p className="sm:text-lg lg:text-xl mb-8 mr-10 lg:mb-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            error expedita est necessitatibus ipsa explicabo minus inventore.
          </p>
          <div>
            <Link
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-6 bg-gray-100 hover:bg-[#ffd7a0a1]
bg-gradient-to-br from-[#cebdaa] via-[#e0d0be]"
              href="#contact"
            >
              Hire me
            </Link>
            <button className="px-1.5 py-1.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#cebdaa] via-[#e0d0be] to-gray-200 mt-5">
              <span className="block bg-white hover:bg-[#ffffff33] rounded-full px-5 py-2 transition duration-150">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gray-300 w-[305px] h-[305px] lg:w-[405px] lg:h-[400px] relative">
            <Image
              src="/image/markProfilePic.jpg"
              className="rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="profile image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
