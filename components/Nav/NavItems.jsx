/**
 * NavItems.jsx
 */

import { navigationConfig } from "@/configuration/navigation";
import Link from "next/link";

const NavItems = () => {
  return (
    <nav className="flex items-center w-full h-full gap-5 mr-2">
      {navigationConfig.guestTopNav.map((el, idx) => {
        return (
          <div
            key={idx}
            // href={el.href}
            className="w-full text-sm whitespace-nowrap"
          >
            {el.title}
          </div>
        );
      })}
    </nav>
  );
};

export default NavItems;
