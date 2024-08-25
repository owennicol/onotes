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
      <svg width="32" height="44" viewBox="0 0 24 36" fill="none">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="500%" y2="0%">
          <stop offset="0%" stopColor={colour} />
          <stop offset="100%" stopColor={colour} />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
        d="M0.928548 2.18278C0.619075 1.37094 1.42087 0.577818 2.2293 0.896107L14.3863 5.68247C15.2271 6.0135 15.2325 7.20148 14.3947 7.54008L9.85984 9.373C9.61167 9.47331 9.41408 9.66891 9.31127 9.91604L7.43907 14.4165C7.09186 15.2511 5.90335 15.2333 5.58136 14.3886L0.928548 2.18278Z"
      />
    </svg>
      <motion.div
      className="px-2 py-2 bg-neutral-200 text-white font-bold whitespace-nowrap min-w-max text-xs rounded-full"
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
