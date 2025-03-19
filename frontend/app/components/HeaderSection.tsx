// import React, { useEffect } from "react";
import Image from "next/image";
import AnimationComponent from "./AnimationComponent";
import Link from "next/link";
import { getHomepage } from "../admin/(web)/home/action";
import { createClient } from "@/utils/supabase/server";

const HeaderSection = async () => {
  const getHomepageData = async () => {
    const supabase = createClient();
    const res = await getHomepage(supabase);
    if (!res) return null;
    return res[0];
  };

  const data = await getHomepageData();
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:px-40">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal justify-self-start font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#cebdaa] via-[#e0d0be] to-slate-500">
              Hello, I&apos;m{" "}
            </span>
            <AnimationComponent
              data={
                Array.isArray(data?.animationList)
                  ? data?.animationList
                  : JSON.parse(
                      typeof data?.animationList == "string"
                        ? data?.animationList
                        : ""
                    )
              }
            />
          </h1>
          <p className="text-slate-600 sm:text-lg lg:text-xl mb-8 mr-10 lg:mb-0">
            {data?.description}
            {/* Hello, I&apos;m Phornphat Chanthanarak, but you can call me Mark.
            Currently, I am a computer engineering student at KMUTT. I have a
            passion for coding, playing the guitar, and watching movies. */}
          </p>
          <div>
            <Link
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-6 bg-gray-100 hover:bg-[#ffd7a0a1]
bg-gradient-to-br from-[#cebdaa] via-[#e0d0be]"
              href="#contact"
            >
              Hire me
            </Link>
            <a
              className="xl:inline-block block px-1.5 py-1.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#cebdaa] via-[#e0d0be] to-gray-200 mt-5"
              href={
                data?.resumeURL
                // "https://drive.usercontent.google.com/uc?id=1IL2MiV7_pILPOur9X-8geUoSJ9dse8xm&export=download"
                // "https://drive.google.com/file/d/1IL2MiV7_pILPOur9X-8geUoSJ9dse8xm/view?usp=sharing"
              }
              // target="_blank"
            >
              <span className="block bg-white hover:bg-[#ffffff33] rounded-full px-5 py-2 transition duration-150">
                Download CV
              </span>
            </a>
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
