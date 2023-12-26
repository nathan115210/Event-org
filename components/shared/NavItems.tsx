"use client";
import type { FC } from "react";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems: FC = () => {
  const pathName = usePathname();

  return (
    <ul
      className={
        "md:flex-between flex w-full flex-col items-start gap-5 md:flex-row"
      }
    >
      {headerLinks.map((link, index) => (
        <li
          className={`${
            pathName === link.route && "border-b-4 text-primary-500"
          } flex-center p-medium-16 whitespace-nowrap`}
          key={index}
        >
          <Link href={link.route}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
