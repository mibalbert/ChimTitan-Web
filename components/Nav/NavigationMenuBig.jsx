"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { forwardRef } from "react";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavigationMenuBig = () => {
  return (
    <div className="flex items-center justify-start w-screen mx-auto max-w-7xl">
      <NavigationMenu delayDuration={0} className="relative z-30 ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-screen mx-auto max-w-7xl">
                <ul className="grid  gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="w-6 h-6" /> */}
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuBig;
// /**
//  * NavigationMenuBig.jsx
//  */

// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { useState, useRef, useEffect } from "react";
// import { cn } from "@/lib/utils";

// const firstComp = [
//   {
//     title: "Protecție suprafete metalice",
//     href: "/products/protectie-suprafete-metalice",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Protecție vehicule",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Protecție lemn",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Protecție beton",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Protecție mase plastice",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Marcare rutieră",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Electroizolante Domeniul naval",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
// ];

// const NavigationMenuBig = ({ isSticky }) => {
//   const [showFirst, setShowFirst] = useState(false);
//   const [showSec, setShowSec] = useState(false);
//   const [showThird, setShowThird] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     isSticky ? setShowFirst(false) : null;

//     const handleOutsideClick = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         console.log("AUSIDHASUDHUIASDHASD", event);
//         console.log("wwwww", menuRef.current);

//         setShowFirst(false);
//         setShowSec(false);
//         setShowThird(false);
//       }
//     };

//     // Add event listener when component mounts
//     document.addEventListener("mousedown", handleOutsideClick);

//     // Cleanup the event listener when component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isSticky, showFirst, showSec, showThird]);

//   return (
//     <div className="relative">
//       <div className="flex justify-between w-full h-12 px-5 mx-auto max-w-7xl">
//         <div className="flex items-center w-full h-full gap-5 ">
//           <button onClick={() => setShowFirst(!showFirst)}>
//             Vopsele Industriale
//           </button>
//           <button onClick={() => setShowFirst(!showSec)}>
//             Vopsele Industriale
//           </button>
//           <button onClick={() => setShowFirst(!showThird)}>
//             Vopsele Industriale
//           </button>
//         </div>
//         <div className="flex items-center justify-end w-full h-full gap-5 ">
//           <Link href={"contact"}>Vopsele Industriale</Link>
//           <Link href={"contact"}>FAQ</Link>
//           <Link href={"contact"}>Vopsele Industriale</Link>
//         </div>
//       </div>
//       <div
//         ref={menuRef}
//         className={cn(
//           "w-full absolute top-10 border-t z-50 bg-white left-0 ",
//           showFirst ? "block" : "hidden"
//         )}
//       >
//         <div className="grid w-full px-5 py-5 mx-auto max-w-7xl">
//           <div className="grid w-full grid-cols-3 grid-rows-3 gap-x-10 gap-y-2">
//             {firstComp.map((el, idx) => {
//               return (
//                 <Link key={idx} href={el.href}>
//                   {el.title}
//                   <hr />
//                   {el.description}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div
//         ref={menuRef}
//         className={cn(
//           "w-full absolute top-10 border-t z-10 bg-white left-0 ",
//           showSec ? "block" : "hidden"
//         )}
//       >
//         <div className="w-full px-5 mx-auto max-w-7xl">
//           <div>
//             <div>kasmdlaksd</div>
//             <div>kasmdlaksd</div>
//             <div>kasmdlaksd</div>
//             <div>kasmdlaksd</div>
//           </div>
//           <div className="relative w-full h-full">
//             <Image
//               src="/chimtitan-paint-box.png"
//               alt="paint-box"
//               fill
//               className="object-contain w-44 h-44"
//             />
//             <div>kasmdlaksd</div>
//           </div>
//         </div>
//       </div>
//       <div
//         ref={menuRef}
//         className={cn(
//           "w-full absolute top-10 border-t z-10 bg-white left-0 ",
//           showThird ? "block" : "hidden"
//         )}
//       >
//         <div className="w-full px-5 mx-auto max-w-7xl">
//           <div>kasmdlaksd</div>
//           <div>kasmdlaksd</div>
//           <div>kasmdlaksd</div>
//           <div>kasmdlaksd</div>
//           <div>kasmdlaksd</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigationMenuBig;
