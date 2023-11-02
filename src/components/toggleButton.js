import * as React from "react";
import { motion } from "framer-motion";

export const MenuToggle = ({ toggle }) => (
  <button
    className={
      "absolute gap-2 items-center flex flex-col top-[1.80rem] right-[1.7rem]"
    }
    onClick={toggle}
  >
    <motion.span
      variants={{
        closed: {
          y: 0,
          rotate: 0,
        },
        open: {
          y: "9px",
          rotate: "45deg",
        },
      }}
      className="bg-white w-6 h-[.5px]"
    />
    <motion.span
      className="bg-white w-6 h-[.5px]"
      variants={{
        closed: {
          width: "100%",
        },
        open: {
          width: 0,
        },
      }}
    />

    <motion.span
      variants={{
        closed: {
          y: 0,
          rotate: 0,
        },
        open: {
          y: "-8px",
          rotate: "-45deg",
        },
      }}
      className="bg-white w-6 h-[.5px]"
    />
  </button>
);
