"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ClientsCarousel = ({ children }: { children: ReactNode }) => {
  // Duplicate children for infinite looping
  const repeatedChildren = (
    <>
      {children}
      {children}
    </>
  );

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-10 md:gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {repeatedChildren}
      </motion.div>
    </div>
  );
};
