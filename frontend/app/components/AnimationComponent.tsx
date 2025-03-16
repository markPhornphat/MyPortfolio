"use client";
import { TypeAnimation } from "react-type-animation";

const AnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Mark",
        // 1000, // wait 1s before replacing "Mice" with "Hamsters"
        // "Front-end Developer",
        1000,
        "Full-stack Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default AnimationComponent;
