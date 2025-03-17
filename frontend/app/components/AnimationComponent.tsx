"use client";
import { TypeAnimation } from "react-type-animation";

const AnimationComponent = ({ data }: { data: string[] }) => {
  // const temp = data.flatMap(li => [li, 3000]);
  return (
    <TypeAnimation
      sequence={data.flatMap((li) => [li, 3000])}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default AnimationComponent;
