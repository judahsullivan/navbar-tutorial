import * as React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiYoutube, SiTwitter } from "react-icons/si";
import Link from "next/link";
import { NavLinks } from "@/utils/data";

const sidebar = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileMenu() {
  return (
    <motion.div
      variants={sidebar}
      className="w-full md:w-[500px] flex items-center justify-center bg-black text-white absolute top-0 right-0 bottom-0"
    >
      <div className="flex flex-col h-full justify-center gap-y-20 ">
        <header className=" relative ">
          <h4 className="relative text-lg ">Navigation</h4>
          <hr className="border border-white w-full" />
          <motion.div
            className="content-[''] bg-white h-full  absolute w-full bottom-0 left-0 right-0 top-0 "
            variants={{
              open: {
                width: 0,
                transition: {
                  delay: 0.3,
                },
              },
              closed: {
                width: "100%",
              },
            }}
          />
        </header>
        <motion.nav
          variants={{
            closed: {},
            open: {},
          }}
          className="flex overflow-hidden flex-col font-extrabold text-left text-6xl mdtext-7xl gap-10 items-start"
        >
          {NavLinks.map((links) => (
            <motion.div
              variants={{
                open: {
                  opacity: 1,
                  rotateX: 0,
                  translateY: 0,
                  translateX: 0,
                  transition: {
                    duration: 0.65,
                    ease: [0.215, 0.61, 0.355, 1],
                    opacity: { duration: 0.35 },
                  },
                },
                closed: {
                  opacity: 0,
                  rotateX: 90,
                  translateY: 80,
                  translateX: -20,
                },
              }}
              key={links.id}
            >
              <Link href={links.links}>{links.name}</Link>
            </motion.div>
          ))}
        </motion.nav>

        <footer className="flex gap-2 flex-col relative items-center justify-center w-full">
          <hr className="border border-white w-full" />
          <div className="flex relative gap-10">
            <SiLinkedin className="w-9 h-9" />
            <SiGithub className="w-9 h-9" />
            <SiYoutube className="w-9 h-9" />
            <SiTwitter className="w-9 h-9" />
          </div>
          <motion.div
            className="content-[''] bg-white h-full  absolute w-full bottom-0 left-0 right-0 top-0 "
            variants={{
              open: {
                width: 0,
                transition: {
                  delay: 0.3,
                },
              },
              closed: {
                width: "100%",
              },
            }}
          />
        </footer>
      </div>
    </motion.div>
  );
}
