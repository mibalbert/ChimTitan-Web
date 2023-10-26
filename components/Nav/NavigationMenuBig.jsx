/**
 * NavigationMenuBig.jsx
 */

"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const firstComp = [
  {
    title: "Protecție suprafete metalice",
    href: "/products/protectie-suprafete-metalice",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Protecție vehicule",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Protecție lemn",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Protecție beton",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Protecție mase plastice",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Marcare rutieră",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Electroizolante Domeniul naval",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

const NavigationMenuBig = ({ isSticky }) => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSec, setShowSec] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    isSticky ? setShowFirst(false) : null;

    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowFirst(false);
        setShowSec(false);
        setShowThird(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSticky, showFirst, showSec, showThird]);

  return (
    <div className="relative">
      <div className="flex justify-between w-full h-12 px-5 mx-auto max-w-7xl">
        <div className="flex items-center w-full h-full gap-5 ">
          <button onClick={() => setShowFirst(!showFirst)}>
            Vopsele Industriale
          </button>
          <button onClick={() => setShowFirst(!showSec)}>
            Vopsele Industriale
          </button>
          <button onClick={() => setShowFirst(!showThird)}>
            Vopsele Industriale
          </button>
        </div>
        <div className="flex items-center justify-end w-full h-full gap-5 ">
          <Link href={"contact"}>Vopsele Industriale</Link>
          <Link href={"contact"}>FAQ</Link>
          <Link href={"contact"}>Vopsele Industriale</Link>
        </div>
      </div>
      <div
        ref={menuRef}
        className={cn(
          "w-full absolute top-10 border-t z-50 bg-white left-0 ",
          showFirst ? "block" : "hidden"
        )}
      >
        <div className="grid w-full px-5 py-5 mx-auto max-w-7xl">
          <div className="grid w-full grid-cols-3 grid-rows-3 gap-x-10 gap-y-2">
            {firstComp.map((el, idx) => {
              return (
                <Link key={idx} href={el.href}>
                  {el.title}
                  <hr />
                  {el.description}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={cn(
          "w-full absolute top-10 border-t z-10 bg-white left-0 ",
          showSec ? "block" : "hidden"
        )}
      >
        <div className="w-full px-5 mx-auto max-w-7xl">
          <div>
            <div>kasmdlaksd</div>
            <div>kasmdlaksd</div>
            <div>kasmdlaksd</div>
            <div>kasmdlaksd</div>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/chimtitan-paint-box.png"
              alt="paint-box"
              fill
              className="object-contain w-44 h-44"
            />
            <div>kasmdlaksd</div>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={cn(
          "w-full absolute top-10 border-t z-10 bg-white left-0 ",
          showThird ? "block" : "hidden"
        )}
      >
        <div className="w-full px-5 mx-auto max-w-7xl">
          <div>kasmdlaksd</div>
          <div>kasmdlaksd</div>
          <div>kasmdlaksd</div>
          <div>kasmdlaksd</div>
          <div>kasmdlaksd</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenuBig;
