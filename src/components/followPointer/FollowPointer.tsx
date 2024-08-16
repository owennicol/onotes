import React from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { stringToColour } from "@/lib/stringToColour";

export function FollowPointer({
  info,
  x,
  y,
}: {
  info: {
    name: string;
    email: string;
    avatar: string;
  };
  x: number;
  y: number;
}) {
  const colour = stringToColour(info.email || "1");

  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        pointerEvents: "none",
        top: y,
        left: x,
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke={colour}
        fill={colour}
        strokeWidth="1"
        viewBox="0 0 16 16"
        className={`h-6 w-6 text-[${colour}] transform -rotate-[70deg] -translate-x-
[12px] -translate-y-[10px] stroke-[${colour}]`}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182.5.5 0 0 1.103.557L8.528 15.467.5.5 0 0 1-.917-.007L5. 57 10.694.803 8.652.5.5 0 0 1-.006-.916112.728-5.657a.5.5 0 0 1 -556.103z"></path>
      </svg>
      <motion.div
      className="px-2 py-2 bg-neutral-200 text-black font-bold whitespace-nowrap min-w-max text-xs rounded-full"
        style={
          {backgroundColor: colour,}
        }
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
      >
        {info?.name || info.email}
      </motion.div>
    </motion.div>
  );
}
