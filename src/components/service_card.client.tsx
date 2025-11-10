"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Service_card } from "./Service_card";

export const Service_card_client = ({ blok }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between border-b last:border-b-0 overflow-hidden min-h-[140px] transition-all duration-300"
    >
      {/* Left: Server-rendered title with link */}
      <Service_card blok={blok} />

      {/* Right: Description (animated) */}
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: hovered ? 0 : 50,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-gray-600 text-lg sm:text-xl w-full md:w-[286px] text-left mt-2 md:mt-0 leading-snug"
      >
        {blok.service_description}
      </motion.p>
    </div>
  );
};
