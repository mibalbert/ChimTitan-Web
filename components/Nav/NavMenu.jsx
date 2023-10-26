/**
 * NavMenu.jsx
 */

"use client";

import {
  Dialog,
  DialogContent,
  DialogContentMenu,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";

const NavMenu = ({ isSticky }) => {
  return (
    <Dialog>
      <DialogTrigger>Meniu</DialogTrigger>
      <DialogContentMenu
        className={cn(
          "w-full max-w-7xl   transition-all duration-200",
          isSticky
            ? "mt-3 shadow-md   supports-backdrop-blur:bg-zinc-100/50  bg-zinc-100/50 border-zinc-300/50 backdrop-blur-md "
            : "mt-3  bg-zinc-50 border-zinc-600"
        )}
      >
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContentMenu>
    </Dialog>
  );
};

export default NavMenu;
