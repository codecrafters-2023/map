import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-indigo-700 text-zinc-50": true, // colors
        "lg:w-full lg:sticky lg:top-16 lg:z-0 top-0 z-20 fixed": true, // positioning
        "lg:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out lg:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="lg:sticky top-0 lg:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <>
                <Link key={index} href={item.href}>
                  <li
                    className={classNames({
                      "text-indigo-100 hover:bg-indigo-900": true, //colors
                      "flex gap-4 items-center ": true, //layout
                      "transition-colors duration-300": true, //animation
                      "rounded-lg p-2 mx-2": true, //self style
                    })}
                  >
                    {item.icon} {item.label}
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
