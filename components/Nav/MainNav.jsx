/**
 * main-nav.jsx
 */

"use client";

import { useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import NavMenu from "./NavMenu";
import Image from "next/image";

const MainNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 0 * window.innerHeight; // 70% of viewport height

      setIsSticky(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={cn(
        `flex z-50 items-center w-full py-1.5 `,
        isSticky
          ? // ? "sticky top-3 supports-backdrop-blur:bg-zinc-100/50 bg-zinc-100/50 backdrop-blur-md  border border-zinc-300/50 shadow-md   max-w-7xl mx-auto transition-all duration-200"
            "sticky top-0 supports-backdrop-blur:bg-zinc-100/50 bg-zinc-100/50 backdrop-blur-md  border border-zinc-300/50 shadow-md   mx-auto transition-all duration-200"
          : "relative top-0 bg-zinc-100  transition-all duration-200 border border-zinc-100 "
      )}
    >
      <div className="flex justify-between w-full px-5 mx-auto max-w-7xl">
        <div className="relative z-50 flex items-center justify-center w-7 h-7">
          <Image
            src={"/chimtitan-logo-small.png"}
            alt={"logo"}
            fill
            className="object-contain object-center w-7 h-7"
          />
        </div>
        <div className="flex items-center">1993</div>
        <div className="hidden gap-4 lg:flex">
          <NavMenu isSticky={isSticky} />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </section>
  );
};

export default MainNav;
