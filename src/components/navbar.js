import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/utils/useDimension";
import { MenuToggle } from "./toggleButton";
import MobileMenu from "./mobileMenu";

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className="w-full h-20">
      <div className="flex max-w-7xl px-5 justify-between items-center h-full ">
        <p className="text-lg relative">
          Coded by Judah Sullivan{" "}
          <span className="absolute text-xs">&copy;</span>
        </p>
        <motion.nav
          className=""
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <MobileMenu />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </header>
  );
};
