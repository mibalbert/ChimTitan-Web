/**
 * Hero.jsx
 */

import HeroVideo from "./HeroVideo";

const Hero = () => {
  return (
    <div className="relative w-full h-full ">
      <HeroVideo />
      <div className="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full gap-10 md:gap-3 ">
        <div className="flex-wrap font-serif text-4xl font-semibold text-white lg:text-7xl">
          CHIMTITAN
        </div>
        <div className="max-w-lg px-10 text-center text-white md:text-left">
          jasndjkasndkjasd Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos perspiciatis, alias tenetur sunt sed molestias totam
          unde amet, placeat suscipit minima itaque explicabo?
        </div>
      </div>
    </div>
  );
};

export default Hero;
