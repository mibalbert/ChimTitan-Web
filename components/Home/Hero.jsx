/**
 * Hero.jsx
 */

import HeroVideo from "./HeroVideo";

const Hero = () => {
  return (
    <div className="relative w-full h-full ">
      <HeroVideo />
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-center w-full h-full">
        <div className="w-full mx-auto space-y-10 max-w-7xl">
          <div className="font-serif w-full text-4xl font-semibold text-white lg:text-[90px]">
            CHIMTITAN
          </div>
          <div className="max-w-xl px-10 text-center text-white md:px-3 md:text-left">
            jasndjkasndkjasd Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dignissimos perspiciatis, alias tenetur sunt sed molestias
            totam unde amet, placeat suscipit minima itaque explicabo?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
