import type { FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "@/components/shared/NavItems";

const MobileNav: FC = () => {
  return (
    <nav className={"md:hidden"}>
      <Sheet>
        <SheetTrigger className={"align-middle"}>
          <Image
            src={"/assets/icons/menu.svg"}
            alt={"menu"}
            width={24}
            height={24}
            className={"cursor-pointer"}
          />
        </SheetTrigger>
        <SheetContent className={"flex flex-col gap-6 bg-white md:hidden"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt={"logo"}
            width={128}
            height={38}
          />
          <Separator className={"border border-gray-50"} />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
